'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [1684],
  {
    25929: (e, t, s) => {
      s.d(t, {
        M: () => p,
        f: () => n,
        i: () => c,
        p: () => f,
        r: () => a,
        t: () => o,
        w: () => l,
      });
      var r = s(70586),
        i = s(17452);
      function n(e, t) {
        const s = t && t.url && t.url.path;
        if (
          e &&
          s &&
          ((e = (0, i.hF)(e, s, { preserveProtocolRelative: !0 })),
          t.portalItem && t.readResourcePaths)
        ) {
          const s = (0, i.PF)(e, t.portalItem.itemUrl);
          u.test(s) &&
            t.readResourcePaths.push(t.portalItem.resourceFromPath(s).path);
        }
        return d(e, t && t.portal);
      }
      function o(e, t, s = p.YES) {
        if (!e) return e;
        !(0, i.YP)(e) &&
          t &&
          t.blockedRelativeUrls &&
          t.blockedRelativeUrls.push(e);
        let r = (0, i.hF)(e);
        if (t) {
          const s =
            (t.verifyItemRelativeUrls && t.verifyItemRelativeUrls.rootPath) ||
            (t.url && t.url.path);
          if (s) {
            const n = d(s, t.portal);
            (r = (0, i.PF)(d(r, t.portal), n, n)),
              r !== e &&
                t.verifyItemRelativeUrls &&
                t.verifyItemRelativeUrls.writtenUrls.push(r);
          }
        }
        return (
          (r = (function (e, t) {
            return t && !t.isPortal && t.urlKey && t.customBaseUrl
              ? (0, i.Ie)(e, `${t.urlKey}.${t.customBaseUrl}`, t.portalHostname)
              : e;
          })(r, t && t.portal)),
          (0, i.YP)(r) && (r = (0, i.Fv)(r)),
          null != t &&
            t.resources &&
            null != t &&
            t.portalItem &&
            !(0, i.YP)(r) &&
            !(0, i.HK)(r) &&
            s === p.YES &&
            t.resources.toKeep.push({
              resource: t.portalItem.resourceFromPath(r),
            }),
          r
        );
      }
      function a(e, t, s) {
        return n(e, s);
      }
      function l(e, t, s, r) {
        const i = o(e, r);
        void 0 !== i && (t[s] = i);
      }
      const h = /\/items\/([^\/]+)\/resources\//,
        u = /^\.\/resources\//;
      function c(e) {
        const t = (0, r.pC)(e) ? e.match(h) : null;
        return (0, r.pC)(t) ? t[1] : null;
      }
      function d(e, t) {
        if (!t || t.isPortal || !t.urlKey || !t.customBaseUrl) return e;
        const s = `${t.urlKey}.${t.customBaseUrl}`,
          r = (0, i.TI)();
        return (0, i.D6)(r, `${r.scheme}://${s}`)
          ? (0, i.Ie)(e, t.portalHostname, s)
          : (0, i.Ie)(e, s, t.portalHostname);
      }
      var p, g;
      ((g = p || (p = {}))[(g.YES = 0)] = 'YES'), (g[(g.NO = 1)] = 'NO');
      const f = Object.freeze({
        __proto__: null,
        fromJSON: n,
        toJSON: o,
        read: a,
        write: l,
        itemIdFromResourceUrl: c,
        get MarkKeep() {
          return p;
        },
      });
    },
    96794: (e, t, s) => {
      s.d(t, { r: () => i });
      var r = s(88764);
      function i(e, t) {
        if (!(this instanceof i)) return new i(e, t);
        (this._maxEntries = Math.max(4, e || 9)),
          (this._minEntries = Math.max(2, Math.ceil(0.4 * this._maxEntries))),
          t &&
            ('function' == typeof t ? (this.toBBox = t) : this._initFormat(t)),
          this.clear();
      }
      function n(e, t, s) {
        if (!s) return t.indexOf(e);
        for (var r = 0; r < t.length; r++) if (s(e, t[r])) return r;
        return -1;
      }
      function o(e, t) {
        a(e, 0, e.children.length, t, e);
      }
      function a(e, t, s, r, i) {
        i || (i = m(null)),
          (i.minX = 1 / 0),
          (i.minY = 1 / 0),
          (i.maxX = -1 / 0),
          (i.maxY = -1 / 0);
        for (var n, o = t; o < s; o++)
          (n = e.children[o]), l(i, e.leaf ? r(n) : n);
        return i;
      }
      function l(e, t) {
        return (
          (e.minX = Math.min(e.minX, t.minX)),
          (e.minY = Math.min(e.minY, t.minY)),
          (e.maxX = Math.max(e.maxX, t.maxX)),
          (e.maxY = Math.max(e.maxY, t.maxY)),
          e
        );
      }
      function h(e, t) {
        return e.minX - t.minX;
      }
      function u(e, t) {
        return e.minY - t.minY;
      }
      function c(e) {
        return (e.maxX - e.minX) * (e.maxY - e.minY);
      }
      function d(e) {
        return e.maxX - e.minX + (e.maxY - e.minY);
      }
      function p(e, t) {
        return (
          (Math.max(t.maxX, e.maxX) - Math.min(t.minX, e.minX)) *
          (Math.max(t.maxY, e.maxY) - Math.min(t.minY, e.minY))
        );
      }
      function g(e, t) {
        var s = Math.max(e.minX, t.minX),
          r = Math.max(e.minY, t.minY),
          i = Math.min(e.maxX, t.maxX),
          n = Math.min(e.maxY, t.maxY);
        return Math.max(0, i - s) * Math.max(0, n - r);
      }
      function f(e, t) {
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
      function m(e) {
        return {
          children: e,
          height: 1,
          leaf: !0,
          minX: 1 / 0,
          minY: 1 / 0,
          maxX: -1 / 0,
          maxY: -1 / 0,
        };
      }
      function y(e, t, s, i, n) {
        for (var o, a = [t, s]; a.length; )
          (s = a.pop()) - (t = a.pop()) <= i ||
            ((o = t + Math.ceil((s - t) / i / 2) * i),
            (0, r.q)(e, o, t, s, n),
            a.push(t, o, o, s));
      }
      i.prototype = {
        all: function () {
          return this._all(this.data, []);
        },
        search: function (e) {
          var t = this.data,
            s = [],
            r = this.toBBox;
          if (!_(e, t)) return s;
          for (var i, n, o, a, l = []; t; ) {
            for (i = 0, n = t.children.length; i < n; i++)
              (o = t.children[i]),
                _(e, (a = t.leaf ? r(o) : o)) &&
                  (t.leaf ? s.push(o) : f(e, a) ? this._all(o, s) : l.push(o));
            t = l.pop();
          }
          return s;
        },
        collides: function (e) {
          var t = this.data,
            s = this.toBBox;
          if (!_(e, t)) return !1;
          for (var r, i, n, o, a = []; t; ) {
            for (r = 0, i = t.children.length; r < i; r++)
              if (((n = t.children[r]), _(e, (o = t.leaf ? s(n) : n)))) {
                if (t.leaf || f(e, o)) return !0;
                a.push(n);
              }
            t = a.pop();
          }
          return !1;
        },
        load: function (e) {
          if (!e || !e.length) return this;
          if (e.length < this._minEntries) {
            for (var t = 0, s = e.length; t < s; t++) this.insert(e[t]);
            return this;
          }
          var r = this._build(e.slice(), 0, e.length - 1, 0);
          if (this.data.children.length)
            if (this.data.height === r.height) this._splitRoot(this.data, r);
            else {
              if (this.data.height < r.height) {
                var i = this.data;
                (this.data = r), (r = i);
              }
              this._insert(r, this.data.height - r.height - 1, !0);
            }
          else this.data = r;
          return this;
        },
        insert: function (e) {
          return e && this._insert(e, this.data.height - 1), this;
        },
        clear: function () {
          return (this.data = m([])), this;
        },
        remove: function (e, t) {
          if (!e) return this;
          for (
            var s, r, i, o, a = this.data, l = this.toBBox(e), h = [], u = [];
            a || h.length;

          ) {
            if (
              (a ||
                ((a = h.pop()), (r = h[h.length - 1]), (s = u.pop()), (o = !0)),
              a.leaf && -1 !== (i = n(e, a.children, t)))
            )
              return (
                a.children.splice(i, 1), h.push(a), this._condense(h), this
              );
            o || a.leaf || !f(a, l)
              ? r
                ? (s++, (a = r.children[s]), (o = !1))
                : (a = null)
              : (h.push(a), u.push(s), (s = 0), (r = a), (a = a.children[0]));
          }
          return this;
        },
        toBBox: function (e) {
          return e;
        },
        compareMinX: h,
        compareMinY: u,
        toJSON: function () {
          return this.data;
        },
        fromJSON: function (e) {
          return (this.data = e), this;
        },
        _all: function (e, t) {
          for (var s = []; e; )
            e.leaf ? t.push.apply(t, e.children) : s.push.apply(s, e.children),
              (e = s.pop());
          return t;
        },
        _build: function (e, t, s, r) {
          var i,
            n = s - t + 1,
            a = this._maxEntries;
          if (n <= a) return o((i = m(e.slice(t, s + 1))), this.toBBox), i;
          r ||
            ((r = Math.ceil(Math.log(n) / Math.log(a))),
            (a = Math.ceil(n / Math.pow(a, r - 1)))),
            ((i = m([])).leaf = !1),
            (i.height = r);
          var l,
            h,
            u,
            c,
            d = Math.ceil(n / a),
            p = d * Math.ceil(Math.sqrt(a));
          for (y(e, t, s, p, this.compareMinX), l = t; l <= s; l += p)
            for (
              y(e, l, (u = Math.min(l + p - 1, s)), d, this.compareMinY), h = l;
              h <= u;
              h += d
            )
              (c = Math.min(h + d - 1, u)),
                i.children.push(this._build(e, h, c, r - 1));
          return o(i, this.toBBox), i;
        },
        _chooseSubtree: function (e, t, s, r) {
          for (
            var i, n, o, a, l, h, u, d;
            r.push(t), !t.leaf && r.length - 1 !== s;

          ) {
            for (u = d = 1 / 0, i = 0, n = t.children.length; i < n; i++)
              (l = c((o = t.children[i]))),
                (h = p(e, o) - l) < d
                  ? ((d = h), (u = l < u ? l : u), (a = o))
                  : h === d && l < u && ((u = l), (a = o));
            t = a || t.children[0];
          }
          return t;
        },
        _insert: function (e, t, s) {
          var r = this.toBBox,
            i = s ? e : r(e),
            n = [],
            o = this._chooseSubtree(i, this.data, t, n);
          for (
            o.children.push(e), l(o, i);
            t >= 0 && n[t].children.length > this._maxEntries;

          )
            this._split(n, t), t--;
          this._adjustParentBBoxes(i, n, t);
        },
        _split: function (e, t) {
          var s = e[t],
            r = s.children.length,
            i = this._minEntries;
          this._chooseSplitAxis(s, i, r);
          var n = this._chooseSplitIndex(s, i, r),
            a = m(s.children.splice(n, s.children.length - n));
          (a.height = s.height),
            (a.leaf = s.leaf),
            o(s, this.toBBox),
            o(a, this.toBBox),
            t ? e[t - 1].children.push(a) : this._splitRoot(s, a);
        },
        _splitRoot: function (e, t) {
          (this.data = m([e, t])),
            (this.data.height = e.height + 1),
            (this.data.leaf = !1),
            o(this.data, this.toBBox);
        },
        _chooseSplitIndex: function (e, t, s) {
          var r, i, n, o, l, h, u, d;
          for (h = u = 1 / 0, r = t; r <= s - t; r++)
            (o = g(
              (i = a(e, 0, r, this.toBBox)),
              (n = a(e, r, s, this.toBBox)),
            )),
              (l = c(i) + c(n)),
              o < h
                ? ((h = o), (d = r), (u = l < u ? l : u))
                : o === h && l < u && ((u = l), (d = r));
          return d;
        },
        _chooseSplitAxis: function (e, t, s) {
          var r = e.leaf ? this.compareMinX : h,
            i = e.leaf ? this.compareMinY : u;
          this._allDistMargin(e, t, s, r) < this._allDistMargin(e, t, s, i) &&
            e.children.sort(r);
        },
        _allDistMargin: function (e, t, s, r) {
          e.children.sort(r);
          var i,
            n,
            o = this.toBBox,
            h = a(e, 0, t, o),
            u = a(e, s - t, s, o),
            c = d(h) + d(u);
          for (i = t; i < s - t; i++)
            (n = e.children[i]), l(h, e.leaf ? o(n) : n), (c += d(h));
          for (i = s - t - 1; i >= t; i--)
            (n = e.children[i]), l(u, e.leaf ? o(n) : n), (c += d(u));
          return c;
        },
        _adjustParentBBoxes: function (e, t, s) {
          for (var r = s; r >= 0; r--) l(t[r], e);
        },
        _condense: function (e) {
          for (var t, s = e.length - 1; s >= 0; s--)
            0 === e[s].children.length
              ? s > 0
                ? (t = e[s - 1].children).splice(t.indexOf(e[s]), 1)
                : this.clear()
              : o(e[s], this.toBBox);
        },
        _initFormat: function (e) {
          var t = ['return a', ' - b', ';'];
          (this.compareMinX = new Function('a', 'b', t.join(e[0]))),
            (this.compareMinY = new Function('a', 'b', t.join(e[1]))),
            (this.toBBox = new Function(
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
        },
      };
    },
    8557: (e, t, s) => {
      s.d(t, { Z: () => i });
      var r = s(70586);
      class i {
        constructor(e) {
          (this.size = 0),
            (this._start = 0),
            (this.maxSize = e),
            (this._buffer = new Array(e));
        }
        get entries() {
          return this._buffer;
        }
        enqueue(e) {
          if (this.size === this.maxSize) {
            const t = this._buffer[this._start];
            return (
              (this._buffer[this._start] = e),
              (this._start = (this._start + 1) % this.maxSize),
              t
            );
          }
          return (
            (this._buffer[(this._start + this.size++) % this.maxSize] = e), null
          );
        }
        dequeue() {
          if (0 === this.size) return null;
          const e = this._buffer[this._start];
          return (
            (this._buffer[this._start] = null),
            this.size--,
            (this._start = (this._start + 1) % this.maxSize),
            e
          );
        }
        peek() {
          return 0 === this.size ? null : this._buffer[this._start];
        }
        find(e) {
          if (0 === this.size) return null;
          for (const t of this._buffer) if ((0, r.pC)(t) && e(t)) return t;
          return null;
        }
        clear(e) {
          let t = this.dequeue();
          for (; (0, r.pC)(t); ) e && e(t), (t = this.dequeue());
        }
      }
    },
    22862: (e, t, s) => {
      s.d(t, { Hg: () => f, uD: () => p, V7: () => g });
      var r = s(15923),
        i = s(80539),
        n = s(70586),
        o = s(1153);
      const a = [
        'esri.Color',
        'esri.portal.Portal',
        'esri.symbols.support.Symbol3DAnchorPosition2D',
        'esri.symbols.support.Symbol3DAnchorPosition3D',
      ];
      function l(e) {
        return e instanceof r.Z;
      }
      function h(e) {
        return e instanceof i.Z
          ? Object.keys(e.items)
          : l(e)
          ? (0, o.vw)(e).keys()
          : e
          ? Object.keys(e)
          : [];
      }
      function u(e, t) {
        return e instanceof i.Z ? e.items[t] : e[t];
      }
      function c(e) {
        return e ? e.declaredClass : null;
      }
      function d(e, t) {
        const s = e.diff;
        if (s && 'function' == typeof s) return s(e, t);
        const r = h(e),
          i = h(t);
        if (0 === r.length && 0 === i.length) return;
        if (
          !r.length ||
          !i.length ||
          (function (e, t) {
            return (
              !(!Array.isArray(e) || !Array.isArray(t)) && e.length !== t.length
            );
          })(e, t)
        )
          return { type: 'complete', oldValue: e, newValue: t };
        const o = i.filter((e) => -1 === r.indexOf(e)),
          p = r.filter((e) => -1 === i.indexOf(e)),
          g = r
            .filter((s) => i.indexOf(s) > -1 && u(e, s) !== u(t, s))
            .concat(o, p)
            .sort(),
          f = c(e);
        if (f && a.indexOf(f) > -1 && g.length)
          return { type: 'complete', oldValue: e, newValue: t };
        let _;
        const m = l(e) && l(t);
        for (const r of g) {
          const i = u(e, r),
            o = u(t, r);
          let a;
          (m || ('function' != typeof i && 'function' != typeof o)) &&
            i !== o &&
            ((null == i && null == o) ||
              ((a =
                s && s[r] && 'function' == typeof s[r]
                  ? s[r](i, o)
                  : 'object' == typeof i &&
                    'object' == typeof o &&
                    c(i) === c(o)
                  ? d(i, o)
                  : { type: 'complete', oldValue: i, newValue: o }),
              (0, n.pC)(a) &&
                ((0, n.pC)(_)
                  ? (_.diff[r] = a)
                  : (_ = { type: 'partial', diff: { [r]: a } }))));
        }
        return _;
      }
      function p(e, t) {
        if ((0, n.Wi)(e)) return !1;
        const s = t.split('.');
        let r = e;
        for (const e of s) {
          if ('complete' === r.type) return !0;
          if ('partial' !== r.type) return !1;
          {
            const t = r.diff[e];
            if (!t) return !1;
            r = t;
          }
        }
        return !0;
      }
      function g(e, t) {
        for (const s of t) if (p(e, s)) return !0;
        return !1;
      }
      function f(e, t) {
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
            : d(e, t);
      }
    },
    80903: (e, t, s) => {
      s.d(t, { Z: () => l });
      var r = s(50758),
        i = s(92604),
        n = s(95330),
        o = s(25045);
      const a = i.Z.getLogger('esri.core.workers.Connection');
      class l {
        constructor() {
          (this._clients = new Array()),
            (this._clientPromises = new Array()),
            (this._clientIdx = 0);
        }
        destroy() {
          this.close();
        }
        get closed() {
          return !this._clients || !this._clients.length;
        }
        open(e, t) {
          return new Promise((s, r) => {
            let i = !0;
            const a = (e) => {
              (0, n.k_)(t.signal), i && ((i = !1), e());
            };
            (this._clients.length = e.length),
              (this._clientPromises.length = e.length);
            for (let i = 0; i < e.length; ++i) {
              const l = e[i];
              (0, n.y8)(l)
                ? (this._clientPromises[i] = l.then(
                    (e) => (
                      (this._clients[i] = new o.default(e, t)),
                      a(s),
                      this._clients[i]
                    ),
                    () => (a(r), null),
                  ))
                : ((this._clients[i] = new o.default(l, t)),
                  (this._clientPromises[i] = Promise.resolve(this._clients[i])),
                  a(s));
            }
          });
        }
        broadcast(e, t, s) {
          const r = new Array(this._clientPromises.length);
          for (let i = 0; i < this._clientPromises.length; ++i) {
            const n = this._clientPromises[i];
            r[i] = n.then((r) => r.invoke(e, t, s));
          }
          return r;
        }
        close() {
          for (const e of this._clientPromises) e.then((e) => e.close());
          (this._clients.length = 0), (this._clientPromises.length = 0);
        }
        getAvailableClient() {
          let e;
          for (let t = 0; t < this._clients.length; ++t) {
            const s = this._clients[t];
            if (s) {
              if (!s.isBusy()) return Promise.resolve(s);
            } else (e = e || []), e.push(this._clientPromises[t]);
          }
          return e
            ? Promise.race(e)
            : ((this._clientIdx = (this._clientIdx + 1) % this._clients.length),
              Promise.resolve(this._clients[this._clientIdx]));
        }
        invoke(e, t, s) {
          let r = null;
          return (
            Array.isArray(s)
              ? (a.warn(
                  'invoke()',
                  'The transferList parameter is deprecated, use the options object instead',
                ),
                (r = { transferList: s }))
              : (r = s),
            this.closed
              ? Promise.reject(new Error('Connection closed'))
              : this.getAvailableClient().then((s) => s.invoke(e, t, r))
          );
        }
        on(e, t) {
          return Promise.all(this._clientPromises).then(() =>
            (0, r.AL)(this._clients.map((s) => s.on(e, t))),
          );
        }
        openPorts() {
          return new Promise((e) => {
            const t = new Array(this._clientPromises.length);
            let s = t.length;
            for (let r = 0; r < this._clientPromises.length; ++r)
              this._clientPromises[r].then((i) => {
                (t[r] = i.openPort()), 0 == --s && e(t);
              });
          });
        }
        get test() {
          return { numClients: this._clients.length };
        }
      }
    },
    92722: (e, t, s) => {
      s.d(t, { lG: () => v, q9: () => l, my: () => w, O3: () => x });
      var r = s(20102),
        i = s(70272),
        n = s(5428),
        o = s(35671);
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
      function* h(e) {
        switch (e.type) {
          case 'Feature':
            yield e;
            break;
          case 'FeatureCollection':
            for (const t of e.features) t && (yield t);
        }
      }
      function* u(e) {
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
      function c(e) {
        for (const t of e) if (t.length > 2) return !0;
        return !1;
      }
      function d(e) {
        let t = 0;
        for (let s = 0; s < e.length; s++) {
          const r = e[s],
            i = e[(s + 1) % e.length];
          t += r[0] * i[1] - i[0] * r[1];
        }
        return t <= 0;
      }
      function p(e) {
        const t = e[0],
          s = e[e.length - 1];
        return (
          (t[0] === s[0] && t[1] === s[1] && t[2] === s[2]) || e.push(t), e
        );
      }
      function g(e, t, s) {
        switch (t.type) {
          case 'LineString':
          case 'MultiPoint':
            return (function (e, t, s) {
              return m(e, t.coordinates, s), e;
            })(e, t, s);
          case 'MultiLineString':
            return (function (e, t, s) {
              for (const r of t.coordinates) m(e, r, s);
              return e;
            })(e, t, s);
          case 'MultiPolygon':
            return (function (e, t, s) {
              for (const r of t.coordinates) {
                f(e, r[0], s);
                for (let t = 1; t < r.length; t++) _(e, r[t], s);
              }
              return e;
            })(e, t, s);
          case 'Point':
            return (function (e, t, s) {
              return I(e, t.coordinates, s), e;
            })(e, t, s);
          case 'Polygon':
            return (function (e, t, s) {
              const r = t.coordinates;
              f(e, r[0], s);
              for (let t = 1; t < r.length; t++) _(e, r[t], s);
              return e;
            })(e, t, s);
        }
      }
      function f(e, t, s) {
        const r = p(t);
        !(function (e) {
          return !d(e);
        })(r)
          ? m(e, r, s)
          : y(e, r, s);
      }
      function _(e, t, s) {
        const r = p(t);
        !(function (e) {
          return d(e);
        })(r)
          ? m(e, r, s)
          : y(e, r, s);
      }
      function m(e, t, s) {
        for (const r of t) I(e, r, s);
        e.lengths.push(t.length);
      }
      function y(e, t, s) {
        for (let r = t.length - 1; r >= 0; r--) I(e, t[r], s);
        e.lengths.push(t.length);
      }
      function I(e, t, s) {
        const [r, i, n] = t;
        e.coords.push(r, i), s.hasZ && e.coords.push(n || 0);
      }
      function b(e) {
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
        const s =
            'string' == typeof t
              ? t
              : 'name' === t.type
              ? t.properties.name
              : 'EPSG' === t.type
              ? t.properties.code
              : null,
          i = new RegExp('.*(CRS84H?|4326)$', 'i');
        if (!s || !i.test(s))
          throw new r.Z(
            'geojson-layer:unsupported-crs',
            "unsupported GeoJSON 'crs' member",
            { crs: t },
          );
      }
      function w(e, t = {}) {
        const s = [],
          r = new Set(),
          i = new Set();
        let n,
          a = !1,
          d = null,
          p = !1,
          { geometryType: g = null } = t,
          f = !1;
        for (const t of h(e)) {
          const { geometry: e, properties: o, id: h } = t;
          if (
            (!e || (g || (g = l(e.type)), l(e.type) === g)) &&
            (a || (a = c(u(e))),
            p ||
              ((p = null != h),
              p &&
                ((n = typeof h),
                (d = Object.keys(o).filter((e) => o[e] === h)))),
            p &&
              null != h &&
              (d.length > 1
                ? (d = d.filter((e) => o[e] === h))
                : 1 === d.length && (d = o[d[0]] === h ? d : [])),
            !f && o)
          ) {
            let e = !0;
            for (const t in o) {
              if (r.has(t)) continue;
              const n = o[t];
              if (null == n) {
                (e = !1), i.add(t);
                continue;
              }
              const a = b(n);
              'unknown' !== a
                ? (i.delete(t),
                  r.add(t),
                  s.push({ name: t, alias: t, type: a }))
                : i.add(t);
            }
            f = e;
          }
        }
        const _ = (d && 1 === d.length && d[0]) || null;
        if (_)
          for (const e of s)
            if (e.name === _ && (0, o.H7)(e)) {
              e.type = 'esriFieldTypeOID';
              break;
            }
        return {
          fields: s,
          geometryType: g,
          hasZ: a,
          objectIdFieldName: _,
          objectIdFieldType: n,
          unknownFields: Array.from(i),
        };
      }
      function v(e, t) {
        return Array.from(
          (function* (e, t = {}) {
            const { geometryType: s, objectIdField: r } = t;
            for (const a of e) {
              var o;
              const { geometry: e, properties: h, id: u } = a;
              if (e && l(e.type) !== s) continue;
              const c = h || {};
              let d = null != (o = c[r]) ? o : null;
              r && null != u && !c[r] && (c[r] = d = u);
              const p = new i.u_(e ? g(new n.Z(), e, t) : null, c, null, d);
              yield p;
            }
          })(h(e), t),
        );
      }
    },
    25278: (e, t, s) => {
      s.d(t, { MS: () => d, Dm: () => u, Hq: () => c, bU: () => a });
      var r = s(80442),
        i = s(22974),
        n = s(61159),
        o = s(58333);
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
      let h = 1;
      function u(e, t) {
        if ((0, r.Z)('esri-csp-restrictions'))
          return () => ({ [t]: null, ...e });
        try {
          let s = `this.${t} = null;`;
          for (const t in e)
            s += `this${l.test(t) ? `.${t}` : `["${t}"]`} = ${JSON.stringify(
              e[t],
            )};`;
          const r = new Function(
            `\n      return class AttributesClass$${h++} {\n        constructor() {\n          ${s};\n        }\n      }\n    `,
          )();
          return () => new r();
        } catch (s) {
          return () => ({ [t]: null, ...e });
        }
      }
      function c(e = {}) {
        return [
          {
            name: 'New Feature',
            description: '',
            prototype: { attributes: (0, i.d9)(e) },
          },
        ];
      }
      function d(e, t) {
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
          query: n.g,
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
    16467: (e, t, s) => {
      s.d(t, {
        $9: () => y,
        Lu: () => m,
        w9: () => I,
        j: () => b,
        G4: () => x,
        gp: () => w,
        eS: () => v,
        d: () => S,
        yN: () => T,
        WW: () => C,
      }),
        s(66577);
      var r = s(3172),
        i = s(20102),
        n = s(92604),
        o = s(70586),
        a = s(8744),
        l = s(40488),
        h = s(98732),
        u = s(44876),
        c = s(92722),
        d = s(25278),
        p = s(99514),
        g = s(86719),
        f = s(82971);
      const _ = n.Z.getLogger('esri.layers.graphics.sources.ogcfeature'),
        m = 'http://www.opengis.net/def/crs/',
        y = `${m}OGC/1.3/CRS84`;
      async function I(e, t, s = {}, n = 5) {
        const { links: a } = e,
          l =
            M(a, 'items', 'application/geo+json') ||
            M(
              a,
              'http://www.opengis.net/def/rel/ogc/1.0/items',
              'application/geo+json',
            );
        if ((0, o.Wi)(l))
          throw new i.Z(
            'ogc-feature-layer:missing-items-page',
            'Missing items url',
          );
        const { data: h } = await (0, r.default)(l.href, {
          signal: s.signal,
          query: { limit: n, ...s.customParameters, token: s.apiKey },
          headers: { accept: 'application/geo+json' },
        });
        await (0, c.O3)(h);
        const u = (0, c.my)(h, { geometryType: t.geometryType }),
          f = t.fields || u.fields || [],
          m = null != t.hasZ ? t.hasZ : u.hasZ,
          y = u.geometryType,
          I = t.objectIdField || u.objectIdFieldName || 'OBJECTID';
        let b = t.timeInfo;
        const x = f.find((e) => e.name === I);
        if (x)
          (x.type = 'esriFieldTypeOID'), (x.editable = !1), (x.nullable = !1);
        else {
          if (!u.objectIdFieldType)
            throw new i.Z(
              'ogc-feature-layer:missing-feature-id',
              'Collection geojson require a feature id as a unique identifier',
            );
          f.unshift({
            name: I,
            alias: I,
            type: 'esriFieldTypeOID',
            editable: !1,
            nullable: !1,
          });
        }
        if (I !== u.objectIdFieldName) {
          const e = f.find((e) => e.name === u.objectIdFieldName);
          e && (e.type = 'esriFieldTypeInteger');
        }
        f === u.fields &&
          u.unknownFields.length > 0 &&
          _.warn({
            name: 'ogc-feature-layer:unknown-field-types',
            message:
              "Some fields types couldn't be inferred from the features and were dropped",
            details: { unknownFields: u.unknownFields },
          });
        for (const e of f) {
          if (
            (null == e.name && (e.name = e.alias),
            null == e.alias && (e.alias = e.name),
            'esriFieldTypeOID' !== e.type &&
              'esriFieldTypeGlobalID' !== e.type &&
              ((e.editable = null == e.editable || !!e.editable),
              (e.nullable = null == e.nullable || !!e.nullable)),
            !e.name)
          )
            throw new i.Z(
              'ogc-feature-layer:invalid-field-name',
              'field name is missing',
              { field: e },
            );
          if (-1 === g.v.jsonValues.indexOf(e.type))
            throw new i.Z(
              'ogc-feature-layer:invalid-field-type',
              `invalid type for field "${e.name}"`,
              { field: e },
            );
        }
        if (b) {
          const e = new p.Z(f);
          if (b.startTimeField) {
            const t = e.get(b.startTimeField);
            t
              ? ((b.startTimeField = t.name), (t.type = 'esriFieldTypeDate'))
              : (b.startTimeField = null);
          }
          if (b.endTimeField) {
            const t = e.get(b.endTimeField);
            t
              ? ((b.endTimeField = t.name), (t.type = 'esriFieldTypeDate'))
              : (b.endTimeField = null);
          }
          if (b.trackIdField) {
            const t = e.get(b.trackIdField);
            t
              ? (b.trackIdField = t.name)
              : ((b.trackIdField = null),
                _.warn({
                  name: 'ogc-feature-layer:invalid-timeInfo-trackIdField',
                  message: 'trackIdField is missing',
                  details: { timeInfo: b },
                }));
          }
          b.startTimeField ||
            b.endTimeField ||
            (_.warn({
              name: 'ogc-feature-layer:invalid-timeInfo',
              message: 'startTimeField and endTimeField are missing',
              details: { timeInfo: b },
            }),
            (b = null));
        }
        return {
          drawingInfo: y ? (0, d.bU)(y) : null,
          geometryType: y,
          fields: f,
          hasZ: !!m,
          objectIdField: I,
          timeInfo: b,
        };
      }
      async function b(e, t = {}) {
        const { links: s } = e,
          n =
            M(s, 'data', 'application/json') ||
            M(
              s,
              'http://www.opengis.net/def/rel/ogc/1.0/data',
              'application/json',
            );
        if ((0, o.Wi)(n))
          throw new i.Z(
            'ogc-feature-layer:missing-collections-page',
            'Missing collections url',
          );
        const { apiKey: a, customParameters: l, signal: h } = t,
          { data: u } = await (0, r.default)(n.href, {
            signal: h,
            headers: { accept: 'application/json' },
            query: { ...l, token: a },
          });
        return u;
      }
      async function x(e, t = {}) {
        const { links: s } = e,
          n =
            M(s, 'conformance', 'application/json') ||
            M(
              s,
              'http://www.opengis.net/def/rel/ogc/1.0/conformance',
              'application/json',
            );
        if ((0, o.Wi)(n))
          throw new i.Z(
            'ogc-feature-layer:missing-conformance-page',
            'Missing conformance url',
          );
        const { apiKey: a, customParameters: l, signal: h } = t,
          { data: u } = await (0, r.default)(n.href, {
            signal: h,
            headers: { accept: 'application/json' },
            query: { ...l, token: a },
          });
        return u;
      }
      async function w(e, t = {}) {
        const { apiKey: s, customParameters: i, signal: n } = t,
          { data: o } = await (0, r.default)(e, {
            signal: n,
            headers: { accept: 'application/json' },
            query: { ...i, token: s },
          });
        return o;
      }
      async function v(e, t = {}) {
        const s = 'application/vnd.oai.openapi+json;version=3.0',
          i = M(e.links, 'service-desc', s);
        if ((0, o.Wi)(i))
          return (
            _.warn(
              'ogc-feature-layer:missing-openapi-page',
              'The OGC API-Features server does not have an OpenAPI page.',
            ),
            null
          );
        const { apiKey: n, customParameters: a, signal: l } = t,
          { data: h } = await (0, r.default)(i.href, {
            signal: l,
            headers: { accept: s },
            query: { ...a, token: n },
          });
        return h;
      }
      function S(e) {
        const t =
            /^http:\/\/www\.opengis.net\/def\/crs\/(?<authority>.*)\/(?<version>.*)\/(?<code>.*)$/i.exec(
              e,
            ),
          s = null == t ? void 0 : t.groups;
        if (!s) return null;
        const { authority: r, code: i } = s;
        switch (r.toLowerCase()) {
          case 'ogc':
            switch (i.toLowerCase()) {
              case 'crs27':
                return f.Z.GCS_NAD_1927.wkid;
              case 'crs83':
                return 4269;
              case 'crs84':
              case 'crs84h':
                return f.Z.WGS84.wkid;
              default:
                return null;
            }
          case 'esri':
          case 'epsg': {
            const e = Number.parseInt(i, 10);
            return Number.isNaN(e) ? null : e;
          }
          default:
            return null;
        }
      }
      async function T(e, t, s) {
        const r = await C(e, t, s);
        return (0, h.cn)(r);
      }
      async function C(e, t, s) {
        const {
            capabilities: {
              query: { maxRecordCount: n },
            },
            collection: d,
            layerDefinition: p,
            queryParameters: { apiKey: g, customParameters: _ },
            spatialReference: m,
            supportedCrs: y,
          } = e,
          { links: I } = d,
          b =
            M(I, 'items', 'application/geo+json') ||
            M(
              I,
              'http://www.opengis.net/def/rel/ogc/1.0/items',
              'application/geo+json',
            );
        if ((0, o.Wi)(b))
          throw new i.Z(
            'ogc-feature-layer:missing-items-page',
            'Missing items url',
          );
        const { geometry: x, num: w, start: v, timeExtent: S, where: T } = t;
        if (t.objectIds)
          throw new i.Z(
            'ogc-feature-layer:query-by-objectids-not-supported',
            'Queries with objectids are not supported',
          );
        const C = f.Z.fromJSON(m),
          E = (0, o.Pt)(t.outSpatialReference, C),
          R = E.isWGS84 ? null : F(E, y),
          O = A(x, y),
          k = (function (e) {
            if ((0, o.Wi)(e)) return null;
            const { start: t, end: s } = e;
            return `${(0, o.pC)(t) ? t.toISOString() : '..'}/${
              (0, o.pC)(s) ? s.toISOString() : '..'
            }`;
          })(S),
          L = ((P = T), (0, o.Wi)(P) || !P || '1=1' === P ? null : P),
          N = null != w ? w : null != v && void 0 !== v ? 10 : n,
          { data: D } = await (0, r.default)(b.href, {
            ...s,
            query: {
              ..._,
              ...O,
              crs: R,
              datetime: k,
              query: L,
              limit: N,
              startindex: v,
              token: g,
            },
            headers: { accept: 'application/geo+json' },
          });
        var P;
        let U = !1;
        D.links && (U = !!D.links.find((e) => 'next' === e.rel)),
          !U &&
            Number.isInteger(D.numberMatched) &&
            Number.isInteger(D.numberReturned) &&
            (U = D.numberReturned < D.numberMatched);
        const {
            fields: z,
            globalIdField: B,
            hasM: q,
            hasZ: j,
            objectIdField: G,
          } = p,
          Z = p.geometryType,
          W = (0, c.lG)(D, { geometryType: Z, hasZ: j, objectIdField: G });
        if (!R && E.isWebMercator)
          for (const e of W)
            if ((0, o.pC)(e.geometry)) {
              const t = (0, h.di)(e.geometry, Z, j, !1);
              (t.spatialReference = f.Z.WGS84),
                (e.geometry = (0, h.GH)((0, l.iV)(t, E)));
            }
        for (const e of W) e.objectId = e.attributes[G];
        const X = R || (!R && E.isWebMercator) ? E.toJSON() : a.Zn,
          Y = new u.Z();
        return (
          (Y.exceededTransferLimit = U),
          (Y.features = W),
          (Y.fields = z),
          (Y.geometryType = Z),
          (Y.globalIdFieldName = B),
          (Y.hasM = q),
          (Y.hasZ = j),
          (Y.objectIdFieldName = G),
          (Y.spatialReference = X),
          Y
        );
      }
      function F(e, t) {
        var s, r, i;
        const { isWebMercator: n, wkid: o } = e;
        if (!o) return null;
        const a = n
          ? null !=
            (s =
              null != (r = null != (i = t[3857]) ? i : t[102100])
                ? r
                : t[102113])
            ? s
            : t[900913]
          : t[e.wkid];
        return a ? `${m}${a}` : null;
      }
      function E(e) {
        if ((0, o.Wi)(e)) return '';
        const { xmin: t, ymin: s, xmax: r, ymax: i } = e;
        return `${t},${s},${r},${i}`;
      }
      function A(e, t) {
        if (
          !(function (e) {
            return (0, o.pC)(e) && 'extent' === e.type;
          })(e)
        )
          return null;
        const { spatialReference: s } = e;
        if (!s || s.isWGS84) return { bbox: E(e) };
        const r = F(s, t);
        return (0, o.pC)(r)
          ? { bbox: E(e), 'bbox-crs': r }
          : s.isWebMercator
          ? { bbox: E((0, l.iV)(e, f.Z.WGS84)) }
          : null;
      }
      function M(e, t, s) {
        return (
          e.find((e) => e.rel === t && e.type === s) ||
          e.find((e) => e.rel === t && !e.type)
        );
      }
    },
    1231: (e, t, s) => {
      s.d(t, { Z: () => _ });
      var r,
        i = s(43697),
        n = s(35454),
        o = s(96674),
        a = s(5600),
        l = (s(67676), s(80442), s(75215)),
        h = s(36030),
        u = s(71715),
        c = s(52011),
        d = s(72729),
        p = s(86719);
      const g = new n.X({
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
      let f = (r = class extends o.wq {
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
          let s;
          try {
            s = JSON.parse(t);
          } catch (e) {}
          return s ? s.value : null;
        }
        readValueType(e, { description: t }) {
          let s;
          try {
            s = JSON.parse(t);
          } catch (e) {}
          return s ? g.fromJSON(s.fieldValueType) : null;
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
        f.prototype,
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
          f.prototype,
          'defaultValue',
          void 0,
        ),
        (0, i._)([(0, a.Cb)()], f.prototype, 'description', void 0),
        (0, i._)(
          [(0, u.r)('description')],
          f.prototype,
          'readDescription',
          null,
        ),
        (0, i._)(
          [
            (0, a.Cb)({
              types: d.V5,
              json: { read: { reader: d.im }, write: !0 },
            }),
          ],
          f.prototype,
          'domain',
          void 0,
        ),
        (0, i._)(
          [(0, a.Cb)({ type: Boolean, json: { write: !0 } })],
          f.prototype,
          'editable',
          void 0,
        ),
        (0, i._)(
          [(0, a.Cb)({ type: l.z8, json: { write: !0 } })],
          f.prototype,
          'length',
          void 0,
        ),
        (0, i._)(
          [(0, a.Cb)({ type: String, json: { write: !0 } })],
          f.prototype,
          'name',
          void 0,
        ),
        (0, i._)(
          [(0, a.Cb)({ type: Boolean, json: { write: !0 } })],
          f.prototype,
          'nullable',
          void 0,
        ),
        (0, i._)([(0, h.J)(p.v)], f.prototype, 'type', void 0),
        (0, i._)([(0, a.Cb)()], f.prototype, 'valueType', void 0),
        (0, i._)(
          [(0, u.r)('valueType', ['description'])],
          f.prototype,
          'readValueType',
          null,
        ),
        (f = r = (0, i._)([(0, c.j)('esri.layers.support.Field')], f));
      const _ = f;
    },
    39450: (e, t, s) => {
      s.d(t, { Z: () => u });
      var r,
        i = s(43697),
        n = s(96674),
        o = s(5600),
        a = (s(67676), s(80442), s(75215)),
        l = s(52011);
      let h = (r = class extends n.wq {
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
          return new r({
            cols: this.cols,
            level: this.level,
            levelValue: this.levelValue,
            resolution: this.resolution,
            rows: this.rows,
            scale: this.scale,
          });
        }
      });
      (0, i._)(
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
        h.prototype,
        'cols',
        void 0,
      ),
        (0, i._)(
          [(0, o.Cb)({ type: a.z8, json: { write: !0 } })],
          h.prototype,
          'level',
          void 0,
        ),
        (0, i._)(
          [(0, o.Cb)({ type: String, json: { write: !0 } })],
          h.prototype,
          'levelValue',
          void 0,
        ),
        (0, i._)(
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
          h.prototype,
          'origin',
          void 0,
        ),
        (0, i._)(
          [(0, o.Cb)({ type: Number, json: { write: !0 } })],
          h.prototype,
          'resolution',
          void 0,
        ),
        (0, i._)(
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
          h.prototype,
          'rows',
          void 0,
        ),
        (0, i._)(
          [(0, o.Cb)({ type: Number, json: { write: !0 } })],
          h.prototype,
          'scale',
          void 0,
        ),
        (h = r = (0, i._)([(0, l.j)('esri.layers.support.LOD')], h));
      const u = h;
    },
    11145: (e, t, s) => {
      s.d(t, { Z: () => S });
      var r,
        i = s(43697),
        n = s(35454),
        o = s(96674),
        a = s(70586),
        l = s(67900),
        h = s(5600),
        u = (s(67676), s(80442), s(75215)),
        c = s(71715),
        d = s(52011),
        p = s(30556),
        g = s(13473),
        f = s(82971),
        _ = s(24470),
        m = s(8744),
        y = s(40488),
        I = s(39450);
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
      let x = (r = class extends o.wq {
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
            scales: s,
            size: i = 256,
            spatialReference: n = f.Z.WebMercator,
            numLODs: o = 24,
          } = e;
          if (!(0, m.JY)(n)) {
            const e = [];
            if (s)
              for (let t = 0; t < s.length; t++) {
                const r = s[t];
                e.push({ level: t, scale: r, resolution: r });
              }
            else {
              let t = 5e-4;
              for (let s = o - 1; s >= 0; s--)
                e.unshift({ level: s, scale: t, resolution: t }), (t *= 2);
            }
            return new r({
              dpi: 96,
              lods: e,
              origin: new g.Z(0, 0, n),
              size: [i, i],
              spatialReference: n,
            });
          }
          const a = (0, m.C5)(n),
            h = e.origin
              ? new g.Z({ x: e.origin.x, y: e.origin.y, spatialReference: n })
              : new g.Z(
                  a
                    ? { x: a.origin[0], y: a.origin[1], spatialReference: n }
                    : { x: 0, y: 0, spatialReference: n },
                ),
            u = 1 / (39.37 * (0, l.c9)(n) * 96),
            c = [];
          if (s)
            for (let e = 0; e < s.length; e++) {
              const t = s[e],
                r = t * u;
              c.push({ level: e, scale: t, resolution: r });
            }
          else {
            let e = (0, m.sT)(n)
              ? (512 / i) * 591657527.5917094
              : (256 / i) * 591657527.591555;
            const s = Math.ceil(o / t);
            c.push({ level: 0, scale: e, resolution: e * u });
            for (let r = 1; r < s; r++) {
              const s = e / 2 ** t,
                i = s * u;
              c.push({ level: r, scale: s, resolution: i }), (e = s);
            }
          }
          return new r({
            dpi: 96,
            lods: c,
            origin: h,
            size: [i, i],
            spatialReference: n,
          });
        }
        get isWrappable() {
          const { spatialReference: e, origin: t } = this;
          if (e && t) {
            const s = (0, m.C5)(e);
            return e.isWrappable && Math.abs(s.origin[0] - t.x) <= s.dx;
          }
          return !1;
        }
        readOrigin(e, t) {
          return g.Z.fromJSON({ spatialReference: t.spatialReference, ...e });
        }
        set lods(e) {
          let t = 0,
            s = 0;
          const r = [];
          (this._levelToLOD = {}),
            e &&
              ((t = -1 / 0),
              (s = 1 / 0),
              e.forEach((e) => {
                r.push(e.scale),
                  (t = e.scale > t ? e.scale : t),
                  (s = e.scale < s ? e.scale : s),
                  (this._levelToLOD[e.level] = e);
              })),
            this._set('scales', r),
            this._set('minScale', t),
            this._set('maxScale', s),
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
            const s = Math.floor(e),
              r = s + 1;
            return t[s] / (t[s] / t[r]) ** (e - s);
          }
        }
        scaleToZoom(e) {
          const t = this.scales,
            s = t.length - 1;
          let r = 0;
          for (; r < s; r++) {
            const s = t[r],
              i = t[r + 1];
            if (s <= e) return r;
            if (i === e) return r + 1;
            if (s > e && i < e) return r + Math.log(s / e) / Math.log(s / i);
          }
          return r;
        }
        snapScale(e, t = 0.95) {
          const s = this.scaleToZoom(e);
          return s % Math.floor(s) >= t
            ? this.zoomToScale(Math.ceil(s))
            : this.zoomToScale(Math.floor(s));
        }
        tileAt(e, t, s, r) {
          const i = this.lodAt(e);
          if (!i) return null;
          let n, o;
          if ('number' == typeof t) (n = t), (o = s);
          else if ((0, m.fS)(t.spatialReference, this.spatialReference))
            (n = t.x), (o = t.y), (r = s);
          else {
            const e = (0, y.iV)(t, this.spatialReference);
            if ((0, a.Wi)(e)) return null;
            (n = e.x), (o = e.y), (r = s);
          }
          const l = i.resolution * this.size[0],
            h = i.resolution * this.size[1];
          return (
            r ||
              (r = { id: null, level: 0, row: 0, col: 0, extent: (0, _.Ue)() }),
            (r.level = e),
            (r.row = Math.floor((this.origin.y - o) / h + 0.001)),
            (r.col = Math.floor((n - this.origin.x) / l + 0.001)),
            this.updateTileInfo(r),
            r
          );
        }
        updateTileInfo(e, t = r.ExtrapolateOptions.NONE) {
          let s = this.lodAt(e.level);
          if (!s && t === r.ExtrapolateOptions.POWER_OF_TWO) {
            const t = this.lods[this.lods.length - 1];
            t.level < e.level && (s = t);
          }
          if (!s) return;
          const i = e.level - s.level,
            n = (s.resolution * this.size[0]) / 2 ** i,
            o = (s.resolution * this.size[1]) / 2 ** i;
          (e.id = `${e.level}/${e.row}/${e.col}`),
            e.extent || (e.extent = (0, _.Ue)()),
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
          const { resolution: s } = this.lodAt(t.level),
            r = s * this.size[0],
            i = s * this.size[1];
          return (
            (e[0] = this.origin.x + t.col * r),
            (e[1] = this.origin.y - (t.row + 1) * i),
            (e[2] = e[0] + r),
            (e[3] = e[1] + i),
            e
          );
        }
        lodAt(e) {
          return (this._levelToLOD && this._levelToLOD[e]) || null;
        }
        clone() {
          return r.fromJSON(this.write({}));
        }
        getOrCreateCompatible(e, t) {
          if (256 === this.size[0] && 256 === this.size[1])
            return 256 === e ? this : null;
          const s = [],
            i = this.lods.length;
          for (let e = 0; e < i; e++) {
            const r = this.lods[e],
              i = r.resolution * t;
            s.push(new I.Z({ level: r.level, scale: r.scale, resolution: i }));
          }
          return new r({
            size: [e, e],
            dpi: this.dpi,
            format: this.format,
            compressionQuality: this.compressionQuality,
            origin: this.origin,
            spatialReference: this.spatialReference,
            lods: s,
          });
        }
        _initializeUpsampleLevels() {
          const e = this.lods;
          this._upsampleLevels = [];
          let t = null;
          for (let s = 0; s < e.length; s++) {
            const r = e[s];
            (this._upsampleLevels[r.level] = {
              parentLevel: t ? t.level : -1,
              factor: t ? t.resolution / r.resolution : 0,
            }),
              (t = r);
          }
        }
      });
      var w, v;
      (0, i._)(
        [(0, h.Cb)({ type: Number, json: { write: !0 } })],
        x.prototype,
        'compressionQuality',
        void 0,
      ),
        (0, i._)(
          [(0, h.Cb)({ type: Number, json: { write: !0 } })],
          x.prototype,
          'dpi',
          void 0,
        ),
        (0, i._)(
          [
            (0, h.Cb)({
              type: String,
              json: {
                read: b.read,
                write: b.write,
                origins: { 'web-scene': { read: !1, write: !1 } },
              },
            }),
          ],
          x.prototype,
          'format',
          void 0,
        ),
        (0, i._)(
          [(0, h.Cb)({ readOnly: !0 })],
          x.prototype,
          'isWrappable',
          null,
        ),
        (0, i._)(
          [(0, h.Cb)({ type: g.Z, json: { write: !0 } })],
          x.prototype,
          'origin',
          void 0,
        ),
        (0, i._)([(0, c.r)('origin')], x.prototype, 'readOrigin', null),
        (0, i._)(
          [(0, h.Cb)({ type: [I.Z], value: null, json: { write: !0 } })],
          x.prototype,
          'lods',
          null,
        ),
        (0, i._)(
          [(0, h.Cb)({ readOnly: !0 })],
          x.prototype,
          'minScale',
          void 0,
        ),
        (0, i._)(
          [(0, h.Cb)({ readOnly: !0 })],
          x.prototype,
          'maxScale',
          void 0,
        ),
        (0, i._)([(0, h.Cb)({ readOnly: !0 })], x.prototype, 'scales', void 0),
        (0, i._)(
          [
            (0, h.Cb)({
              cast: (e) =>
                Array.isArray(e)
                  ? e
                  : 'number' == typeof e
                  ? [e, e]
                  : [256, 256],
            }),
          ],
          x.prototype,
          'size',
          void 0,
        ),
        (0, i._)(
          [(0, c.r)('size', ['rows', 'cols'])],
          x.prototype,
          'readSize',
          null,
        ),
        (0, i._)(
          [(0, p.c)('size', { cols: { type: u.z8 }, rows: { type: u.z8 } })],
          x.prototype,
          'writeSize',
          null,
        ),
        (0, i._)(
          [(0, h.Cb)({ type: f.Z, json: { write: !0 } })],
          x.prototype,
          'spatialReference',
          void 0,
        ),
        (x = r = (0, i._)([(0, d.j)('esri.layers.support.TileInfo')], x)),
        (w = x || (x = {})),
        ((v = w.ExtrapolateOptions || (w.ExtrapolateOptions = {}))[
          (v.NONE = 0)
        ] = 'NONE'),
        (v[(v.POWER_OF_TWO = 1)] = 'POWER_OF_TWO');
      const S = x;
    },
    66677: (e, t, s) => {
      s.d(t, {
        ld: () => g,
        B5: () => c,
        M8: () => _,
        G: () => b,
        Qc: () => d,
        DR: () => p,
        Nm: () => m,
        XG: () => y,
        a7: () => f,
        wH: () => I,
      });
      var r = s(70586),
        i = s(17452),
        n = s(25929);
      const o = {
          mapserver: 'MapServer',
          imageserver: 'ImageServer',
          featureserver: 'FeatureServer',
          sceneserver: 'SceneServer',
          streamserver: 'StreamServer',
          vectortileserver: 'VectorTileServer',
        },
        a = Object.values(o),
        l = new RegExp(
          `^((?:https?:)?\\/\\/\\S+?\\/rest\\/services\\/(.+?)\\/(${a.join(
            '|',
          )}))(?:\\/(?:layers\\/)?(\\d+))?`,
          'i',
        ),
        h = new RegExp(
          `^((?:https?:)?\\/\\/\\S+?\\/([^\\/\\n]+)\\/(${a.join(
            '|',
          )}))(?:\\/(?:layers\\/)?(\\d+))?`,
          'i',
        ),
        u = /(.*?)\/(?:layers\/)?(\d+)\/?$/i;
      function c(e) {
        return !!l.test(e);
      }
      function d(e) {
        const t = (0, i.mN)(e),
          s = t.path.match(l) || t.path.match(h);
        if (!s) return null;
        const [, r, n, a, u] = s,
          c = n.indexOf('/');
        return {
          title: g(-1 !== c ? n.slice(c + 1) : n),
          serverType: o[a.toLowerCase()],
          sublayer: null != u && '' !== u ? parseInt(u, 10) : null,
          url: { path: r },
        };
      }
      function p(e) {
        const t = (0, i.mN)(e).path.match(u);
        return t ? { serviceUrl: t[1], sublayerId: Number(t[2]) } : null;
      }
      function g(e) {
        return (
          (e = e.replace(/\s*[/_]+\s*/g, ' '))[0].toUpperCase() + e.slice(1)
        );
      }
      function f(e, t) {
        const s = [];
        if (e) {
          const t = d(e);
          (0, r.pC)(t) && t.title && s.push(t.title);
        }
        if (t) {
          const e = g(t);
          s.push(e);
        }
        if (2 === s.length) {
          if (-1 !== s[0].toLowerCase().indexOf(s[1].toLowerCase()))
            return s[0];
          if (-1 !== s[1].toLowerCase().indexOf(s[0].toLowerCase()))
            return s[1];
        }
        return s.join(' - ');
      }
      function _(e) {
        if (!e) return !1;
        const t = -1 !== (e = e.toLowerCase()).indexOf('.arcgis.com/'),
          s =
            -1 !== e.indexOf('//services') ||
            -1 !== e.indexOf('//tiles') ||
            -1 !== e.indexOf('//features');
        return t && s;
      }
      function m(e, t) {
        return e ? (0, i.Qj)((0, i.Hu)(e, t)) : e;
      }
      function y(e) {
        let { url: t } = e;
        if (!t) return { url: t };
        t = (0, i.Hu)(t, e.logger);
        const s = (0, i.mN)(t),
          n = d(s.path);
        let o;
        if ((0, r.pC)(n))
          null != n.sublayer && null == e.layer.layerId && (o = n.sublayer),
            (t = n.url.path);
        else if (e.nonStandardUrlAllowed) {
          const e = p(s.path);
          (0, r.pC)(e) && ((t = e.serviceUrl), (o = e.sublayerId));
        }
        return { url: (0, i.Qj)(t), layerId: o };
      }
      function I(e, t, s, r, o) {
        (0, n.w)(t, r, 'url', o),
          r.url &&
            null != e.layerId &&
            (r.url = (0, i.v_)(r.url, s, e.layerId.toString()));
      }
      function b(e) {
        if (!e) return !1;
        const t = e.toLowerCase(),
          s = -1 !== t.indexOf('/services/'),
          r = -1 !== t.indexOf('/mapserver/wmsserver'),
          i = -1 !== t.indexOf('/imageserver/wmsserver'),
          n = -1 !== t.indexOf('/wmsserver');
        return s && (r || i || n);
      }
    },
    72729: (e, t, s) => {
      s.d(t, { im: () => T, V5: () => S }), s(80442);
      var r,
        i = s(43697),
        n = s(22974),
        o = s(5600),
        a = (s(75215), s(36030)),
        l = s(52011),
        h = s(96674);
      s(67676);
      let u = (r = class extends h.wq {
        constructor(e) {
          super(e), (this.name = null), (this.code = null);
        }
        clone() {
          return new r({ name: this.name, code: this.code });
        }
      });
      (0, i._)(
        [(0, o.Cb)({ type: String, json: { write: !0 } })],
        u.prototype,
        'name',
        void 0,
      ),
        (0, i._)(
          [(0, o.Cb)({ type: [String, Number], json: { write: !0 } })],
          u.prototype,
          'code',
          void 0,
        ),
        (u = r = (0, i._)([(0, l.j)('esri.layers.support.CodedValue')], u));
      const c = u,
        d = new (s(35454).X)({
          inherited: 'inherited',
          codedValue: 'coded-value',
          range: 'range',
        });
      let p = class extends h.wq {
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
        (0, i._)([(0, a.J)(d)], p.prototype, 'type', void 0),
        (p = (0, i._)([(0, l.j)('esri.layers.support.Domain')], p));
      const g = p;
      var f;
      let _ = (f = class extends g {
        constructor(e) {
          super(e), (this.codedValues = null), (this.type = 'coded-value');
        }
        getName(e) {
          let t = null;
          if (this.codedValues) {
            const s = String(e);
            this.codedValues.some(
              (e) => (String(e.code) === s && (t = e.name), !!t),
            );
          }
          return t;
        }
        clone() {
          return new f({
            codedValues: (0, n.d9)(this.codedValues),
            name: this.name,
          });
        }
      });
      (0, i._)(
        [(0, o.Cb)({ type: [c], json: { write: !0 } })],
        _.prototype,
        'codedValues',
        void 0,
      ),
        (0, i._)(
          [(0, a.J)({ codedValue: 'coded-value' })],
          _.prototype,
          'type',
          void 0,
        ),
        (_ = f =
          (0, i._)([(0, l.j)('esri.layers.support.CodedValueDomain')], _));
      const m = _;
      var y;
      s(92604), s(37697);
      let I = (y = class extends g {
        constructor(e) {
          super(e), (this.type = 'inherited');
        }
        clone() {
          return new y();
        }
      });
      (0, i._)(
        [(0, a.J)({ inherited: 'inherited' })],
        I.prototype,
        'type',
        void 0,
      ),
        (I = y =
          (0, i._)([(0, l.j)('esri.layers.support.InheritedDomain')], I));
      const b = I;
      var x;
      let w = (x = class extends g {
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
                writer(e, t, s) {
                  t[s] = [this.minValue || 0, e];
                },
              },
            },
          }),
        ],
        w.prototype,
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
                  writer(e, t, s) {
                    t[s] = [e, this.maxValue || 0];
                  },
                },
              },
            }),
          ],
          w.prototype,
          'minValue',
          void 0,
        ),
        (0, i._)([(0, a.J)({ range: 'range' })], w.prototype, 'type', void 0),
        (w = x = (0, i._)([(0, l.j)('esri.layers.support.RangeDomain')], w));
      const v = w,
        S = {
          key: 'type',
          base: g,
          typeMap: { range: w, 'coded-value': m, inherited: b },
        };
      function T(e) {
        if (!e || !e.type) return null;
        switch (e.type) {
          case 'range':
            return v.fromJSON(e);
          case 'codedValue':
            return m.fromJSON(e);
          case 'inherited':
            return b.fromJSON(e);
        }
        return null;
      }
    },
    86719: (e, t, s) => {
      s.d(t, { v: () => r });
      const r = new (s(35454).X)({
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
    58333: (e, t, s) => {
      s.d(t, {
        I4: () => i,
        lF: () => o,
        ET: () => n,
        qP: () => a,
        eG: () => l,
        lj: () => u,
        wW: () => h,
      });
      const r = [252, 146, 31, 255],
        i = {
          type: 'esriSMS',
          style: 'esriSMSCircle',
          size: 6,
          color: r,
          outline: {
            type: 'esriSLS',
            style: 'esriSLSSolid',
            width: 0.75,
            color: [153, 153, 153, 255],
          },
        },
        n = { type: 'esriSLS', style: 'esriSLSSolid', width: 0.75, color: r },
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
        h = {
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
    61027: (e, t, s) => {
      s.d(t, {
        _I: () => r,
        xp: () => o,
        PX: () => n,
        QS: () => c,
        KS: () => h,
        jL: () => l,
        vs: () => a,
        nE: () => u,
      });
      const r = 8388607,
        i = 8388608,
        n = 0,
        o = 1,
        a = (e) => (e & i) >>> 23,
        l = (e) => e & r,
        h = (e) => (a(e) === o ? 254 : 255);
      function u(e) {
        return a(e) === o;
      }
      function c(e, t) {
        return ((t ? i : 0) | e) >>> 0;
      }
    },
    29996: (e, t, s) => {
      s.d(t, { ws: () => F, xV: () => E, UK: () => A, $_: () => C });
      var r = s(20102),
        i = s(92604),
        n = (s(22021), s(95648)),
        o = (s(37720), s(66039)),
        a = s(71143);
      class l {
        constructor() {
          (this.color = [0, 0, 0, 0]),
            (this.haloColor = [0, 0, 0, 0]),
            (this.haloSize = 0),
            (this.size = 12),
            (this.angle = 0),
            (this.offsetX = 0),
            (this.offsetY = 0),
            (this.hAnchor = 0),
            (this.vAnchor = 0);
        }
        acquire(e, t, s, r, i, n, o, a, l) {
          (this.color = e),
            (this.haloColor = t),
            (this.haloSize = s),
            (this.size = r),
            (this.angle = i),
            (this.offsetX = n),
            (this.offsetY = o),
            (this.hAnchor = a),
            (this.vAnchor = l);
        }
        release() {
          (this.color[0] = this.color[1] = this.color[2] = this.color[3] = 0),
            (this.haloColor[0] =
              this.haloColor[1] =
              this.haloColor[2] =
              this.haloColor[3] =
                0),
            (this.haloSize = 0),
            (this.size = 0),
            (this.angle = 0),
            (this.offsetX = 0),
            (this.offsetY = 0),
            (this.hAnchor = 0),
            (this.vAnchor = 0);
        }
      }
      l.pool = new a.Z(l);
      var h = s(35371);
      s(75656);
      const u = i.Z.getLogger('esri.views.2d.engine.webgl.Utils'),
        c = 'geometry',
        d = [{ name: c, strideInBytes: 32 }],
        p = [{ name: c, strideInBytes: 20 }],
        g = [{ name: c, strideInBytes: 12 }],
        f = [{ name: c, strideInBytes: 40 }],
        _ = [{ name: c, strideInBytes: 36 }],
        m = [{ name: c, strideInBytes: 36 }];
      function y(e) {
        const t = {};
        for (const s of e) t[s.name] = s.strideInBytes;
        return t;
      }
      const I = y([{ name: c, strideInBytes: 36 }]),
        b = y(d),
        x = y(p),
        w = y(g),
        v = y(f),
        S = y(_),
        T = y(m);
      function C(e, { fill: t }) {
        switch (e) {
          case o.LW.MARKER:
            return I;
          case o.LW.FILL:
            return 'dot-density' === t ? w : 'simple' === t ? x : b;
          case o.LW.LINE:
            return v;
          case o.LW.TEXT:
            return S;
          case o.LW.LABEL:
            return T;
        }
      }
      function F(e) {
        switch (e) {
          case 'butt':
            return n.RL.BUTT;
          case 'round':
            return n.RL.ROUND;
          case 'square':
            return n.RL.SQUARE;
          default:
            return (
              u.error(
                new r.Z(
                  'mapview-invalid-type',
                  `Cap type ${e} is not a valid option. Defaulting to round`,
                ),
              ),
              n.RL.ROUND
            );
        }
      }
      function E(e) {
        switch (e) {
          case 'miter':
            return n.AH.MITER;
          case 'bevel':
            return n.AH.BEVEL;
          case 'round':
            return n.AH.ROUND;
          default:
            return (
              u.error(
                new r.Z(
                  'mapview-invalid-type',
                  `Join type ${e} is not a valid option. Defaulting to round`,
                ),
              ),
              n.AH.ROUND
            );
        }
      }
      function A(e) {
        switch (e) {
          case h.Br.UNSIGNED_BYTE:
            return Uint8Array;
          case h.Br.UNSIGNED_SHORT_4_4_4_4:
            return Uint16Array;
          case h.Br.FLOAT:
            return Float32Array;
          default:
            return void u.error(
              new r.Z('webgl-utils', `Unable to handle type ${e}`),
            );
        }
      }
      h.l1.STATIC_DRAW, new Map();
    },
    37720: (e, t, s) => {
      s.d(t, { t2: () => i, aH: () => n });
      var r = s(12142);
      function i(e) {
        if (!e) return 0;
        const { r: t, g: s, b: i, a: n } = e;
        return (0, r.Jz)(t * n, s * n, i * n, 255 * n);
      }
      function n(e) {
        if (!e) return 0;
        const [t, s, i, n] = e;
        return (0, r.Jz)(t * (n / 255), s * (n / 255), i * (n / 255), n);
      }
    },
    66039: (e, t, s) => {
      var r, i, n, o, a, l, h;
      s.d(t, { LW: () => r, X: () => a, mf: () => l }),
        (function (e) {
          (e[(e.FILL = 0)] = 'FILL'),
            (e[(e.LINE = 1)] = 'LINE'),
            (e[(e.MARKER = 2)] = 'MARKER'),
            (e[(e.TEXT = 3)] = 'TEXT'),
            (e[(e.LABEL = 4)] = 'LABEL');
        })(r || (r = {})),
        (function (e) {
          (e[(e.SUCCEEDED = 0)] = 'SUCCEEDED'),
            (e[(e.FAILED_OUT_OF_MEMORY = 1)] = 'FAILED_OUT_OF_MEMORY');
        })(i || (i = {})),
        (function (e) {
          (e[(e.NONE = 0)] = 'NONE'),
            (e[(e.MAP = 1)] = 'MAP'),
            (e[(e.LABEL = 2)] = 'LABEL'),
            (e[(e.LABEL_ALPHA = 4)] = 'LABEL_ALPHA'),
            (e[(e.HITTEST = 8)] = 'HITTEST'),
            (e[(e.HIGHLIGHT = 16)] = 'HIGHLIGHT'),
            (e[(e.CLIP = 32)] = 'CLIP'),
            (e[(e.DEBUG = 64)] = 'DEBUG'),
            (e[(e.NUM_DRAW_PHASES = 9)] = 'NUM_DRAW_PHASES');
        })(n || (n = {})),
        (function (e) {
          (e[(e.SIZE = 0)] = 'SIZE'),
            (e[(e.COLOR = 1)] = 'COLOR'),
            (e[(e.OPACITY = 2)] = 'OPACITY'),
            (e[(e.ROTATION = 3)] = 'ROTATION');
        })(o || (o = {})),
        (function (e) {
          (e[(e.NONE = 0)] = 'NONE'),
            (e[(e.OPACITY = 1)] = 'OPACITY'),
            (e[(e.COLOR = 2)] = 'COLOR'),
            (e[(e.ROTATION = 4)] = 'ROTATION'),
            (e[(e.SIZE_MINMAX_VALUE = 8)] = 'SIZE_MINMAX_VALUE'),
            (e[(e.SIZE_SCALE_STOPS = 16)] = 'SIZE_SCALE_STOPS'),
            (e[(e.SIZE_FIELD_STOPS = 32)] = 'SIZE_FIELD_STOPS'),
            (e[(e.SIZE_UNIT_VALUE = 64)] = 'SIZE_UNIT_VALUE');
        })(a || (a = {})),
        (function (e) {
          (e[(e.MINMAX_TARGETS_OUTLINE = 128)] = 'MINMAX_TARGETS_OUTLINE'),
            (e[(e.SCALE_TARGETS_OUTLINE = 256)] = 'SCALE_TARGETS_OUTLINE'),
            (e[(e.FIELD_TARGETS_OUTLINE = 512)] = 'FIELD_TARGETS_OUTLINE'),
            (e[(e.UNIT_TARGETS_OUTLINE = 1024)] = 'UNIT_TARGETS_OUTLINE');
        })(l || (l = {})),
        (function (e) {
          (e[(e.SPRITE = 0)] = 'SPRITE'), (e[(e.GLYPH = 1)] = 'GLYPH');
        })(h || (h = {}));
    },
    12142: (e, t, s) => {
      s.d(t, { UJ: () => i, Jz: () => n });
      const r = new Float32Array(1);
      function i(e, t) {
        return (65535 & e) | (t << 16);
      }
      function n(e, t, s, r) {
        return (255 & e) | ((255 & t) << 8) | ((255 & s) << 16) | (r << 24);
      }
      new Uint32Array(r.buffer);
    },
    74259: (e, t, s) => {
      s.d(t, { p: () => g, k: () => p });
      var r = s(8557),
        i = s(32448),
        n = (s(80442), s(70586)),
        o = s(96794),
        a = s(60437),
        l = s(59999),
        h = s(61800);
      function u(e, t) {
        return (e << 16) | t;
      }
      function c(e) {
        return (4294901760 & e) >>> 16;
      }
      function d(e) {
        return 65535 & e;
      }
      const p = {
        getObjectId: (e) => e.getObjectId(),
        getAttributes: (e) => e.readAttributes(),
        getAttribute: (e, t) => e.readAttribute(t),
        cloneWithGeometry: (e, t) => e,
        getGeometry: (e) => e.readHydratedGeometry(),
        getCentroid: (e, t) => e.readCentroid(),
      };
      class g extends l.J {
        constructor(e, t, s) {
          super(e, t),
            (this.featureAdapter = p),
            (this.events = new i.Z()),
            (this._featureSetsByInstance = new Map()),
            (this._objectIdToDisplayId = new Map()),
            (this._spatialIndexInvalid = !0),
            (this._indexSearchCache = new r.Z(50)),
            (this._index = (0, o.r)(9, (e) => ({
              minX: this._storage.getXMin(e),
              minY: this._storage.getYMin(e),
              maxX: this._storage.getXMax(e),
              maxY: this._storage.getYMax(e),
            }))),
            (this._storage = t),
            (this.mode = s);
        }
        get storage() {
          return this._storage;
        }
        get storeStatistics() {
          let e = 0,
            t = 0,
            s = 0;
          return (
            this.forEach((r) => {
              const i = r.readGeometry();
              i &&
                ((t += i.isPoint ? 1 : i.lengths.reduce((e, t) => e + t, 0)),
                (s += i.isPoint ? 1 : i.lengths.length),
                (e += 1));
            }),
            { featureCount: e, vertexCount: t, ringCount: s }
          );
        }
        hasInstance(e) {
          return this._featureSetsByInstance.has(e);
        }
        onTileData(e, t) {
          if ((0, n.Wi)(t.addOrUpdate)) return t;
          if (
            (t.addOrUpdate.attachStorage(this._storage),
            'snapshot' === this.mode)
          ) {
            const s = t.addOrUpdate.getCursor();
            for (; s.next(); ) {
              const t = s.getDisplayId();
              this.setComputedAttributes(this._storage, s, t, e.scale);
            }
            return t;
          }
          this._featureSetsByInstance.set(
            t.addOrUpdate.instance,
            t.addOrUpdate,
          );
          const s = t.addOrUpdate.getCursor();
          for (; s.next(); ) this._insertFeature(s, e.scale);
          return (
            (this._spatialIndexInvalid = !0), this.events.emit('changed'), t
          );
        }
        search(e) {
          this._rebuildIndex();
          const t = e.id,
            s = this._indexSearchCache.find((e) => e.tileId === t);
          if ((0, n.pC)(s)) return s.readers;
          const r = new Map(),
            i = this._searchIndex(e.bounds),
            o = [];
          for (const e of i) {
            const t = this._storage.getInstanceId(e),
              s = c(t),
              i = d(t);
            r.has(s) || r.set(s, []), r.get(s).push(i);
          }
          return (
            r.forEach((e, t) => {
              const s = this._featureSetsByInstance.get(t);
              o.push(h.t.from(s, e));
            }),
            this._indexSearchCache.enqueue({ tileId: t, readers: o }),
            o
          );
        }
        insert(e) {
          const t = e.getCursor(),
            s = this._storage;
          for (; t.next(); ) {
            var r;
            const e = u(t.instance, t.getIndex()),
              i = t.getObjectId(),
              n =
                null != (r = this._objectIdToDisplayId.get(i))
                  ? r
                  : this._storage.createDisplayId();
            t.setDisplayId(n),
              s.setInstanceId(n, e),
              this._objectIdToDisplayId.set(i, n);
          }
          this._featureSetsByInstance.set(e.instance, e),
            (this._spatialIndexInvalid = !0);
        }
        remove(e) {
          const t = this._objectIdToDisplayId.get(e);
          if (!t) return;
          const s = this._storage.getInstanceId(t),
            r = d(s),
            i = c(s),
            n = this._featureSetsByInstance.get(i);
          this._objectIdToDisplayId.delete(e),
            this._storage.releaseDisplayId(t),
            n.removeAtIndex(r),
            n.isEmpty && this._featureSetsByInstance.delete(i),
            (this._spatialIndexInvalid = !0);
        }
        forEach(e) {
          this._objectIdToDisplayId.forEach((t) => {
            const s = this._storage.getInstanceId(t),
              r = this._lookupFeature(s);
            e(r);
          });
        }
        forEachUnsafe(e) {
          this._objectIdToDisplayId.forEach((t) => {
            const s = this._storage.getInstanceId(t),
              r = c(s),
              i = d(s),
              n = this._getFeatureSet(r);
            n.setIndex(i), e(n);
          });
        }
        forEachInBounds(e, t) {
          const s = this._searchIndex(e);
          for (const e of s) {
            const s = this.lookupFeatureByDisplayId(e, this._storage);
            t((0, n.Wg)(s));
          }
        }
        forEachBounds(e, t, s) {
          this._rebuildIndex();
          const r = [0, 0, 0, 0];
          for (const i of e) {
            if (!i.readGeometry()) continue;
            const e = i.getDisplayId();
            (r[0] = this._storage.getXMin(e)),
              (r[1] = this._storage.getYMin(e)),
              (r[2] = this._storage.getXMax(e)),
              (r[3] = this._storage.getYMax(e)),
              t((0, a.JR)(s, r));
          }
        }
        sweepFeatures(e, t, s) {
          (this._spatialIndexInvalid = !0),
            this._objectIdToDisplayId.forEach((r, i) => {
              e.has(r) ||
                (t.releaseDisplayId(r),
                s && s.unsetAttributeData(r),
                this._objectIdToDisplayId.delete(i));
            }),
            this.events.emit('changed');
        }
        sweepFeatureSets(e) {
          (this._spatialIndexInvalid = !0),
            this._featureSetsByInstance.forEach((t, s) => {
              e.has(s) || this._featureSetsByInstance.delete(s);
            });
        }
        lookupObjectId(e, t) {
          const s = this.lookupFeatureByDisplayId(e, t);
          return (0, n.Wi)(s) ? null : s.getObjectId();
        }
        lookupDisplayId(e) {
          return this._objectIdToDisplayId.get(e);
        }
        lookupFeatureByDisplayId(e, t) {
          const s = t.getInstanceId(e);
          return this._lookupFeature(s);
        }
        lookupByDisplayIdUnsafe(e) {
          const t = this._storage.getInstanceId(e),
            s = c(t),
            r = d(t),
            i = this._getFeatureSet(s);
          return i ? (i.setIndex(r), i) : null;
        }
        _insertFeature(e, t) {
          const s = this._storage,
            r = e.getObjectId(),
            i = u(e.instance, e.getIndex());
          s.getInstanceId(e.getDisplayId());
          let n = this._objectIdToDisplayId.get(r);
          n ||
            ((n = s.createDisplayId()),
            this._objectIdToDisplayId.set(r, n),
            (this._spatialIndexInvalid = !0)),
            e.setDisplayId(n),
            s.setInstanceId(n, i),
            this.setComputedAttributes(s, e, n, t);
        }
        _searchIndex(e) {
          this._rebuildIndex();
          const t = { minX: e[0], minY: e[1], maxX: e[2], maxY: e[3] };
          return this._index.search(t);
        }
        _rebuildIndex() {
          if (!this._spatialIndexInvalid) return;
          const e = [];
          'snapshot' === this.mode
            ? this._featureSetsByInstance.forEach((t) => {
                const s = t.getCursor();
                for (; s.next(); ) {
                  const t = s.getDisplayId();
                  this._storage.setBounds(t, s) && e.push(t);
                }
              })
            : this._objectIdToDisplayId.forEach((t) => {
                const s = this._storage.getInstanceId(t);
                this._storage.setBounds(t, this._lookupFeature(s)) && e.push(t);
              }),
            this._index.clear(),
            this._index.load(e),
            this._indexSearchCache.clear(),
            (this._spatialIndexInvalid = !1);
        }
        _lookupFeature(e) {
          const t = c(e),
            s = d(e),
            r = this._getFeatureSet(t);
          if (!r) return null;
          const i = r.getCursor();
          return i.setIndex(s), i;
        }
        _getFeatureSet(e) {
          return this._featureSetsByInstance.get(e);
        }
      }
    },
    70299: (e, t, s) => {
      s.r(t), s.d(t, { default: () => St, getInstances: () => wt });
      var r = s(43697),
        i = s(3920),
        n = s(80442),
        o = s(5600),
        a = (s(67676), s(75215), s(52011)),
        l = s(8744),
        h = s(11145),
        u = s(70586),
        c = s(95330),
        d = s(17445),
        p = s(98732),
        g = s(7673),
        f = s(99514),
        _ = s(74259),
        m = s(66677),
        y = s(3172),
        I = s(20102),
        b = s(92604),
        x = s(80903),
        w = s(82397),
        v = s(16467),
        S = s(34599),
        T = s(70272),
        C = s(87554);
      class F extends C.s {
        constructor(e, t, s) {
          super(e, s),
            (this._featureIndex = -1),
            (this._dateFields = new Set()),
            (this._geometryType = null == s ? void 0 : s.geometryType),
            (this._features = t);
        }
        static fromFeatures(e, t) {
          const { objectIdField: s, geometryType: r } = t,
            i = (0, p.Yn)([], e, r, !1, !1, s);
          for (let t = 0; t < i.length; t++) i[t].displayId = e[t].displayId;
          return F.fromOptimizedFeatures(i, t);
        }
        static fromFeatureSet(e, t) {
          const s = (0, p.h_)(e, t.objectIdField);
          return F.fromOptimizedFeatureSet(s, t);
        }
        static fromOptimizedFeatureSet(e, t) {
          const { features: s } = e,
            r = F.fromOptimizedFeatures(s, t);
          (r._exceededTransferLimit = e.exceededTransferLimit),
            (r._transform = e.transform);
          for (const t of e.fields)
            'esriFieldTypeDate' === t.type && r._dateFields.add(t.name);
          return r;
        }
        static fromOptimizedFeatures(e, t, s) {
          const r = C.s.createInstance(),
            i = new F(r, e, t);
          return (i._transform = s), i;
        }
        get _current() {
          return this._features[this._featureIndex];
        }
        get geometryType() {
          return this._geometryType;
        }
        get hasFeatures() {
          return !!this._features.length;
        }
        get hasNext() {
          return this._featureIndex + 1 < this._features.length;
        }
        get exceededTransferLimit() {
          return this._exceededTransferLimit;
        }
        get hasZ() {
          return !1;
        }
        get hasM() {
          return !1;
        }
        removeIds(e) {
          const t = new Set(e);
          this._features = this._features.filter((e) => !t.has(e.objectId));
        }
        append(e) {
          for (const t of e) this._features.push(t);
        }
        getSize() {
          return this._features.length;
        }
        getCursor() {
          return this.copy();
        }
        getQuantizationTransform() {
          return this._transform;
        }
        getAttributeHash() {
          let e = '';
          for (const t in this._current.attributes)
            e += this._current.attributes[t];
          return e;
        }
        getIndex() {
          return this._featureIndex;
        }
        setIndex(e) {
          this._featureIndex = e;
        }
        getObjectId() {
          return this._current.objectId;
        }
        getDisplayId() {
          return this._current.displayId;
        }
        setDisplayId(e) {
          this._current.displayId = e;
        }
        getGroupId() {
          return this._current.groupId;
        }
        setGroupId(e) {
          this._current.groupId = e;
        }
        copy() {
          const e = new F(this.instance, this._features, this.fullSchema());
          return this.copyInto(e), e;
        }
        next() {
          for (
            ;
            ++this._featureIndex < this._features.length && !this._getExists();

          );
          return this._featureIndex < this._features.length;
        }
        readLegacyFeature() {
          return (0, p.EI)(
            this._current,
            this.geometryType,
            this.hasZ,
            this.hasM,
          );
        }
        readOptimizedFeature() {
          return this._current;
        }
        readLegacyPointGeometry() {
          return this.readGeometry()
            ? { x: this.getX(), y: this.getY() }
            : null;
        }
        readLegacyGeometry() {
          const e = this.readGeometry();
          return (0, p.di)(e, this.geometryType, this.hasZ, this.hasM);
        }
        readLegacyCentroid() {
          const e = this.readCentroid();
          return (0, u.Wi)(e)
            ? null
            : {
                x: e.coords[0] * this._sx + this._tx,
                y: e.coords[1] * this._sy + this._ty,
              };
        }
        readGeometryArea() {
          return (0, T.S6)(this._current)
            ? (0, p.lz)(this._current.geometry, 2)
            : 0;
        }
        readUnquantizedGeometry() {
          const e = this.readGeometry();
          if ('esriGeometryPoint' === this.geometryType || !e) return e;
          const t = e.clone();
          return (
            (function ({ coords: e, lengths: t }) {
              let s = 0;
              for (const r of t) {
                for (let t = 1; t < r; t++)
                  (e[2 * (s + t)] += e[2 * (s + t) - 2]),
                    (e[2 * (s + t) + 1] += e[2 * (s + t) - 1]);
                s += r;
              }
            })(t),
            t
          );
        }
        readHydratedGeometry() {
          const e = this._current.geometry;
          if ((0, u.Wi)(e)) return null;
          const t = e.clone();
          return (
            (0, u.pC)(this._transform) &&
              (0, p.$g)(t, t, this.hasZ, this.hasM, this._transform),
            t
          );
        }
        getXHydrated() {
          if (!(0, T.S6)(this._current)) return 0;
          const e = this._current.geometry.coords[0],
            t = this.getQuantizationTransform();
          return (0, u.Wi)(t) ? e : e * t.scale[0] + t.translate[0];
        }
        getYHydrated() {
          if (!(0, T.S6)(this._current)) return 0;
          const e = this._current.geometry.coords[1],
            t = this.getQuantizationTransform();
          return (0, u.Wi)(t) ? e : t.translate[1] - e * t.scale[1];
        }
        getX() {
          return (0, T.S6)(this._current)
            ? this._current.geometry.coords[0] * this._sx + this._tx
            : 0;
        }
        getY() {
          return (0, T.S6)(this._current)
            ? this._current.geometry.coords[1] * this._sy + this._ty
            : 0;
        }
        readGeometry() {
          if (!(0, T.S6)(this._current)) return null;
          const e = this._current.geometry.clone();
          if (e.isPoint)
            return (
              (e.coords[0] = e.coords[0] * this._sx + this._tx),
              (e.coords[1] = e.coords[1] * this._sy + this._ty),
              e
            );
          let t = 0;
          for (const s of e.lengths)
            (e.coords[2 * t] = e.coords[2 * t] * this._sx + this._tx),
              (e.coords[2 * t + 1] = e.coords[2 * t + 1] * this._sy + this._ty),
              (t += s);
          return e;
        }
        readCentroid() {
          if (!(0, T.S6)(this._current)) return null;
          if ((0, u.Wi)(this._current.centroid)) {
            const e = this._computeCentroid();
            if ((0, u.Wi)(e)) return null;
            (e.coords[0] = (e.coords[0] - this._tx) / this._sx),
              (e.coords[1] = (e.coords[1] - this._ty) / this._sy),
              (this._current.centroid = e);
          }
          const e = this._current.centroid.clone();
          return (
            (e.coords[0] = e.coords[0] * this._sx + this._tx),
            (e.coords[1] = e.coords[1] * this._sx + this._ty),
            e
          );
        }
        hasField(e) {
          return (
            e in this._current.attributes ||
            this.getFieldNames()
              .map((e) => e.toLowerCase())
              .includes(e.toLowerCase())
          );
        }
        getFieldNames() {
          return Object.keys(this._current.attributes);
        }
        _readAttribute(e, t) {
          const s = this._current.attributes[e];
          if (void 0 !== s)
            return null != s && t && this._dateFields.has(e) ? new Date(s) : s;
          const r = this.readAttributes(),
            i = e.toLocaleLowerCase().trim();
          for (const e in r)
            if (e.toLocaleLowerCase().trim() === i) {
              const s = this._current.attributes[e];
              return null != s && t && this._dateFields.has(e)
                ? new Date(s)
                : s;
            }
        }
        copyInto(e) {
          super.copyInto(e),
            (e._featureIndex = this._featureIndex),
            (e._transform = this._transform),
            (e._dateFields = this._dateFields);
        }
        _readAttributes() {
          return this._current.attributes;
        }
      }
      var E = s(45091),
        A = s(5428),
        M = s(77863);
      const R = 268435455;
      class O {
        constructor() {
          (this.fieldMap = new Map()),
            (this.fields = []),
            (this.hasFeatures = !1),
            (this.fieldCount = 0),
            (this.featureCount = 0),
            (this.objectIdFieldIndex = 0),
            (this.vertexCount = 0),
            (this.offsets = { attributes: new Array(), geometry: new Array() }),
            (this.centroid = new Array());
        }
        hasField(e) {
          return this.fieldMap.has(e);
        }
        isDateField(e) {
          var t;
          return null == (t = this.fieldMap.get(e)) ? void 0 : t.isDate;
        }
        getFieldIndex(e) {
          var t;
          return null == (t = this.fieldMap.get(e)) ? void 0 : t.index;
        }
      }
      function k(e) {
        const t = e.getLength(),
          s = e.pos() + t,
          r = { name: '', isDate: !1 };
        for (; e.pos() < s && e.next(); )
          switch (e.tag()) {
            case 1:
              r.name = e.getString();
              break;
            case 2:
              'esriFieldTypeDate' === (0, M.O7)(e.getEnum()) && (r.isDate = !0);
              break;
            default:
              e.skip();
          }
        return r;
      }
      function L(e) {
        return e.toLowerCase().trim();
      }
      function N(e, t, s = !1) {
        const r = e.pos(),
          i = new O();
        let n = 0,
          o = 0,
          a = null,
          l = null,
          h = null,
          u = !1;
        for (; e.next(); )
          switch (e.tag()) {
            case 1:
              a = e.getString();
              break;
            case 3:
              l = e.getString();
              break;
            case 12:
              h = e.processMessage(M.G$);
              break;
            case 9:
              if (
                ((i.exceededTransferLimit = e.getBool()),
                i.exceededTransferLimit)
              ) {
                (i.offsets.geometry = s
                  ? new Float64Array(8e3)
                  : new Int32Array(8e3)),
                  (i.centroid = s
                    ? new Float64Array(16e3)
                    : new Int32Array(16e3));
                for (let e = 0; e < i.centroid.length; e++) i.centroid[e] = R;
              }
              break;
            case 13: {
              const t = k(e),
                s = t.name,
                r = L(t.name),
                o = { fieldName: s, index: n++, isDate: t.isDate };
              i.fields.push(o), i.fieldMap.set(t.name, o), i.fieldMap.set(r, o);
              break;
            }
            case 15: {
              const r = e.getLength(),
                a = e.pos() + r;
              if (!i.exceededTransferLimit) {
                const e = i.offsets.geometry,
                  t = i.centroid;
                e.push(0), t.push(R), t.push(R);
              }
              !u &&
                i.exceededTransferLimit &&
                ((u = !0),
                (i.offsets.attributes = s
                  ? new Float64Array(8e3 * n)
                  : new Uint32Array(8e3 * n)));
              let l = o * n;
              for (; e.pos() < a && e.next(); )
                switch (e.tag()) {
                  case 1: {
                    u
                      ? (i.offsets.attributes[l++] = e.pos())
                      : i.offsets.attributes.push(e.pos());
                    const t = e.getLength();
                    e.skipLen(t);
                    break;
                  }
                  case 2:
                    if (t) {
                      const t = e.getLength(),
                        s = e.pos() + t;
                      for (; e.pos() < s && e.next(); )
                        switch (e.tag()) {
                          case 3: {
                            e.getUInt32();
                            const t = e.getSInt64(),
                              s = e.getSInt64();
                            (i.centroid[2 * o] = t),
                              (i.centroid[2 * o + 1] = s);
                            break;
                          }
                          default:
                            e.skip();
                        }
                    } else {
                      i.offsets.geometry[o] = e.pos();
                      const t = e.getLength();
                      (i.vertexCount += t), e.skipLen(t);
                    }
                    break;
                  case 4: {
                    const t = e.getLength(),
                      s = e.pos() + t;
                    for (; e.pos() < s && e.next(); )
                      switch (e.tag()) {
                        case 3: {
                          e.getUInt32();
                          const t = e.getSInt64(),
                            s = e.getSInt64();
                          (i.centroid[2 * o] = t), (i.centroid[2 * o + 1] = s);
                          break;
                        }
                        default:
                          e.skip();
                      }
                    break;
                  }
                  default:
                    e.skip();
                }
              o++, (i.hasFeatures = !0);
              break;
            }
            default:
              e.skip();
          }
        const c = a || l;
        if (!c)
          throw new I.Z('FeatureSet has no objectId or globalId field name');
        return (
          (i.featureCount = o),
          (i.fieldCount = n),
          (i.objectIdFieldIndex = i.getFieldIndex(c)),
          (i.transform = h),
          (i.displayIds = new Uint32Array(i.featureCount)),
          (i.groupIds = new Uint16Array(i.featureCount)),
          e.move(r),
          i
        );
      }
      const D = b.Z.getLogger(
          'esri.view.2d.layers.features.support.FeatureSetReaderPBF',
        ),
        P = 268435455,
        U = 128e3,
        z = {
          small: { delta: new Int32Array(128), decoded: new Int32Array(128) },
          large: { delta: new Int32Array(U), decoded: new Int32Array(U) },
        };
      function B(e) {
        return e <= z.small.delta.length
          ? z.small
          : (e <= z.large.delta.length ||
              ((z.large.delta = new Int32Array(Math.round(1.25 * e))),
              (z.large.decoded = new Int32Array(Math.round(1.25 * e)))),
            z.large);
      }
      function q(e) {
        return e.toLowerCase().trim();
      }
      function j(e) {
        for (; e.next(); ) {
          if (1 === e.tag()) return e.getMessage();
          e.skip();
        }
        return null;
      }
      function G(e, t, s, r, i, n) {
        return 0.5 * Math.abs(e * r + s * n + i * t - e * n - s * t - i * r);
      }
      function Z(e, t, s, r) {
        return 0 == e * r - s * t && e * s + t * r > 0;
      }
      class W extends C.s {
        constructor(e, t, s, r) {
          super(e, r),
            (this._hasNext = !1),
            (this._isPoints = !1),
            (this._featureIndex = -1),
            (this._featureOffset = 0),
            (this._cache = {
              area: 0,
              unquantGeometry: void 0,
              geometry: void 0,
              centroid: void 0,
              legacyFeature: void 0,
              optFeature: void 0,
            }),
            (this._geometryType = r.geometryType),
            (this._reader = t),
            (this._header = s),
            (this._hasNext = s.hasFeatures),
            (this._isPoints = 'esriGeometryPoint' === r.geometryType);
        }
        static fromBuffer(e, t, s = !1) {
          const r = t.geometryType,
            i = (function (e) {
              try {
                const t = 2,
                  s = new E.Z(new Uint8Array(e), new DataView(e));
                for (; s.next(); ) {
                  if (s.tag() === t) return j(s.getMessage());
                  s.skip();
                }
              } catch (e) {
                const t = new I.Z(
                  'query:parsing-pbf',
                  'Error while parsing FeatureSet PBF payload',
                  { error: e },
                );
                D.error(t);
              }
              return null;
            })(e),
            n = N(i, 'esriGeometryPoint' === r, s),
            o = C.s.createInstance();
          return new W(o, i, n, t);
        }
        get geometryType() {
          return this._geometryType;
        }
        get size() {
          return this._header.featureCount;
        }
        get hasZ() {
          return !1;
        }
        get hasM() {
          return !1;
        }
        get stride() {
          return 2 + (this.hasZ ? 1 : 0) + (this.hasM ? 1 : 0);
        }
        get hasFeatures() {
          return this._header.hasFeatures;
        }
        get hasNext() {
          return this._hasNext;
        }
        get exceededTransferLimit() {
          return this._header.exceededTransferLimit;
        }
        hasField(e) {
          return this._header.hasField(e) || this._header.hasField(q(e));
        }
        getFieldNames() {
          return this._header.fields.map((e) => e.fieldName);
        }
        getSize() {
          return this.size;
        }
        getQuantizationTransform() {
          return this._header.transform;
        }
        getCursor() {
          return this.copy();
        }
        getIndex() {
          return this._featureIndex;
        }
        setIndex(e) {
          (this._cache.area = 0),
            (this._cache.unquantGeometry = void 0),
            (this._cache.geometry = void 0),
            (this._cache.centroid = void 0),
            (this._cache.legacyFeature = void 0),
            (this._cache.optFeature = void 0),
            (this._featureIndex = e);
        }
        getAttributeHash() {
          let e = '';
          return (
            this._header.fields.forEach(({ index: t }) => {
              e += this._readAttributeAtIndex(t) + '.';
            }),
            e
          );
        }
        getObjectId() {
          return this._readAttributeAtIndex(this._header.objectIdFieldIndex);
        }
        getDisplayId() {
          return this._header.displayIds[this._featureIndex];
        }
        setDisplayId(e) {
          this._header.displayIds[this._featureIndex] = e;
        }
        getGroupId() {
          return this._header.groupIds[this._featureIndex];
        }
        setGroupId(e) {
          this._header.groupIds[this._featureIndex] = e;
        }
        readLegacyFeature() {
          if (void 0 === this._cache.legacyFeature) {
            var e;
            const t = this.readCentroid(),
              s = {
                attributes: this.readAttributes(),
                geometry: this._isPoints
                  ? this.readLegacyPointGeometry()
                  : this.readLegacyGeometry(),
                centroid:
                  null != (e = t && { x: t.coords[0], y: t.coords[1] })
                    ? e
                    : null,
              };
            return (this._cache.legacyFeature = s), s;
          }
          return this._cache.legacyFeature;
        }
        readOptimizedFeature() {
          if (void 0 === this._cache.optFeature) {
            const e = new T.u_(
              this.readGeometry(),
              this.readAttributes(),
              this.readCentroid(),
            );
            return (
              (e.objectId = this.getObjectId()),
              (e.displayId = this.getDisplayId()),
              (this._cache.optFeature = e),
              e
            );
          }
          return this._cache.optFeature;
        }
        getXHydrated() {
          const e = this._header.centroid[2 * this._featureIndex],
            t = this.getQuantizationTransform();
          return (0, u.Wi)(t) ? e : e * t.scale[0] + t.translate[0];
        }
        getYHydrated() {
          const e = this._header.centroid[2 * this._featureIndex + 1],
            t = this.getQuantizationTransform();
          return (0, u.Wi)(t) ? e : t.translate[1] - e * t.scale[1];
        }
        getX() {
          return (
            this._header.centroid[2 * this._featureIndex] * this._sx + this._tx
          );
        }
        getY() {
          return (
            this._header.centroid[2 * this._featureIndex + 1] * this._sy +
            this._ty
          );
        }
        readLegacyPointGeometry() {
          return { x: this.getX(), y: this.getY() };
        }
        readLegacyGeometry(e) {
          const t = this.readGeometry(e);
          return (0, p.di)(t, this.geometryType, !1, !1);
        }
        readLegacyCentroid() {
          const e = this.readCentroid();
          if (!e) return null;
          const [t, s] = e.coords;
          return { x: t, y: s };
        }
        readGeometryArea() {
          return this._cache.area || this.readGeometry(!0), this._cache.area;
        }
        readUnquantizedGeometry(e = !1) {
          if (void 0 === this._cache.unquantGeometry) {
            const t = this.readGeometry(e);
            if (!t) return (this._cache.unquantGeometry = null), null;
            const s = B(t.coords.length).decoded,
              r = t.clone(s),
              i = r.coords;
            let n = 0;
            for (const e of r.lengths) {
              for (let t = 1; t < e; t++) {
                const e = 2 * (n + t),
                  s = 2 * (n + t - 1);
                (i[e] += i[s]), (i[e + 1] += i[s + 1]);
              }
              n += e;
            }
            return (this._cache.unquantGeometry = r), r;
          }
          return this._cache.unquantGeometry;
        }
        readHydratedGeometry() {
          if (this._isPoints) {
            if (this._header.centroid[2 * this._featureIndex] === P)
              return null;
            const e = this.getXHydrated(),
              t = this.getYHydrated();
            return new A.Z([], [e, t]);
          }
          const e = this.readGeometry();
          if (!e) return null;
          const t = e.clone(),
            s = this.getQuantizationTransform();
          return (0, u.pC)(s) && (0, p.$g)(t, t, this.hasZ, this.hasM, s), t;
        }
        readGeometry(e = !1) {
          if (void 0 === this._cache.geometry) {
            let t = null;
            if (this._isPoints) {
              if (this._header.centroid[2 * this._featureIndex] === P)
                return null;
              const e = this.getX(),
                s = this.getY();
              t = new A.Z([], [e, s]);
            } else {
              const s = this._header.offsets.geometry[this._featureIndex],
                r = this._reader;
              if (0 === s) return null;
              r.move(s);
              try {
                t = e
                  ? this._parseGeometryForDisplay(r)
                  : this._parseGeometry(r);
              } catch (e) {
                return console.error('Failed to parse geometry!', e), null;
              }
            }
            return (this._cache.geometry = t), t;
          }
          return this._cache.geometry;
        }
        readCentroid() {
          if (void 0 === this._cache.centroid) {
            let e = null;
            const t = this._header.centroid[2 * this._featureIndex] + this._tx,
              s = this._header.centroid[2 * this._featureIndex + 1] + this._ty;
            return (
              t === P
                ? ((e = this._computeCentroid()),
                  e &&
                    ((this._header.centroid[2 * this._featureIndex] =
                      e.coords[0] - this._tx),
                    (this._header.centroid[2 * this._featureIndex + 1] =
                      e.coords[1] - this._ty)))
                : (e = new A.Z([], [t, s])),
              (this._cache.centroid = e),
              e
            );
          }
          return this._cache.centroid;
        }
        copy() {
          const e = this._reader.clone(),
            t = new W(this.instance, e, this._header, this.fullSchema());
          return this.copyInto(t), t;
        }
        next() {
          for (
            this._cache.area = 0,
              this._cache.unquantGeometry = void 0,
              this._cache.geometry = void 0,
              this._cache.centroid = void 0,
              this._cache.legacyFeature = void 0,
              this._cache.optFeature = void 0;
            ++this._featureIndex < this.size && !this._getExists();

          );
          return this._featureIndex < this.size;
        }
        _readAttribute(e, t) {
          const s = this._header.hasField(e) ? e : q(e),
            r = this._header.getFieldIndex(s);
          if (null == r) return;
          const i = this._readAttributeAtIndex(r);
          return t
            ? null == i
              ? i
              : this._header.isDateField(s)
              ? new Date(i)
              : i
            : i;
        }
        _readAttributes() {
          const e = {};
          return (
            this._header.fields.forEach(({ fieldName: t, index: s }) => {
              e[t] = this._readAttributeAtIndex(s);
            }),
            e
          );
        }
        copyInto(e) {
          super.copyInto(e),
            (e._featureIndex = this._featureIndex),
            (e._featureOffset = this._featureOffset),
            (e._hasNext = this._hasNext);
        }
        _readAttributeAtIndex(e) {
          const t =
              this._header.offsets.attributes[
                this._featureIndex * this._header.fieldCount + e
              ],
            s = this._reader;
          return (
            s.move(t),
            (function (e) {
              const t = e.getLength(),
                s = e.pos() + t;
              for (; e.pos() < s && e.next(); )
                switch (e.tag()) {
                  case 1:
                    return e.getString();
                  case 2:
                    return e.getFloat();
                  case 3:
                    return e.getDouble();
                  case 4:
                    return e.getSInt32();
                  case 5:
                    return e.getUInt32();
                  case 6:
                    return e.getInt64();
                  case 7:
                    return e.getUInt64();
                  case 8:
                    return e.getSInt64();
                  case 9:
                    return e.getBool();
                  default:
                    return e.skip(), null;
                }
              return null;
            })(s)
          );
        }
        _parseGeometry(e) {
          const t = e.getLength(),
            s = e.pos() + t,
            r = [],
            i = [];
          for (; e.pos() < s && e.next(); )
            switch (e.tag()) {
              case 2: {
                const t = e.getUInt32(),
                  s = e.pos() + t;
                for (; e.pos() < s; ) i.push(e.getUInt32());
                break;
              }
              case 3: {
                const t = e.getUInt32(),
                  s = e.pos() + t;
                for (
                  r.push(e.getSInt32() + this._tx),
                    r.push(e.getSInt32() + this._ty),
                    this.hasZ && e.getSInt32(),
                    this.hasM && e.getSInt32();
                  e.pos() < s;

                )
                  r.push(e.getSInt32()),
                    r.push(e.getSInt32()),
                    this.hasZ && e.getSInt32(),
                    this.hasM && e.getSInt32();
                break;
              }
              default:
                e.skip();
            }
          return new A.Z(i, r);
        }
        _parseGeometryForDisplay(e) {
          const t = e.getLength(),
            s = e.pos() + t,
            r = [],
            i = [];
          let n = 0,
            o = 0,
            a = null,
            l = 0;
          const h = 'esriGeometryPolygon' === this.geometryType;
          for (; e.pos() < s && e.next(); )
            switch (e.tag()) {
              case 2: {
                const t = e.getUInt32(),
                  s = e.pos() + t;
                for (; e.pos() < s; ) {
                  const t = e.getUInt32();
                  r.push(t), (n += t);
                }
                a = B(2 * n).delta;
                break;
              }
              case 3: {
                e.getUInt32();
                const t = 2 + (this.hasZ ? 1 : 0) + (this.hasM ? 1 : 0);
                for (const s of r)
                  if (o + t * s > a.length)
                    for (let t = 0; t < s; t++)
                      e.getSInt32(),
                        e.getSInt32(),
                        this.hasZ && e.getSInt32(),
                        this.hasM && e.getSInt32();
                  else if (h) {
                    const t = this.getAreaSimplificationThreshold(
                      s,
                      this._header.vertexCount,
                    );
                    let r = 2,
                      n = 1;
                    const h = !1;
                    let u = e.getSInt32(),
                      c = e.getSInt32();
                    (a[o++] = u),
                      (a[o++] = c),
                      this.hasZ && e.getSInt32(),
                      this.hasM && e.getSInt32();
                    let d = e.getSInt32(),
                      p = e.getSInt32();
                    for (
                      this.hasZ && e.getSInt32(), this.hasM && e.getSInt32();
                      r < s;

                    ) {
                      let s = e.getSInt32(),
                        i = e.getSInt32();
                      this.hasZ && e.getSInt32(), this.hasM && e.getSInt32();
                      const h = u + d,
                        g = c + p;
                      G(u, c, h, g, h + s, g + i) >= t
                        ? ((l += -0.5 * (h - u) * (g + c)),
                          n > 1 && Z(a[o - 2], a[o - 1], d, p)
                            ? ((a[o - 2] += d), (a[o - 1] += p))
                            : ((a[o++] = d), (a[o++] = p), n++),
                          (u = h),
                          (c = g))
                        : ((s += d), (i += p)),
                        (d = s),
                        (p = i),
                        r++;
                    }
                    n < 3 || h
                      ? (o -= 2 * n)
                      : ((l += -0.5 * (u + d - u) * (c + p + c)),
                        Z(a[o - 2], a[o - 1], d, p)
                          ? ((a[o - 2] += d), (a[o - 1] += p), i.push(n))
                          : ((a[o++] = d), (a[o++] = p), i.push(++n)));
                  } else {
                    let t = 0,
                      r = e.getSInt32(),
                      n = e.getSInt32();
                    this.hasZ && e.getSInt32(),
                      this.hasM && e.getSInt32(),
                      (a[o++] = r),
                      (a[o++] = n),
                      (t += 1);
                    for (let i = 1; i < s; i++) {
                      const s = e.getSInt32(),
                        h = e.getSInt32(),
                        u = r + s,
                        c = n + h;
                      (l += -0.5 * (u - r) * (c + n)),
                        this.hasZ && e.getSInt32(),
                        this.hasM && e.getSInt32(),
                        i > 2 && Z(a[o - 2], a[o - 1], s, h)
                          ? ((a[o - 2] += s), (a[o - 1] += h))
                          : ((a[o++] = s), (a[o++] = h), (t += 1)),
                        (r = u),
                        (n = c);
                    }
                    i.push(t);
                  }
                break;
              }
              default:
                e.skip();
            }
          if (((this._cache.area = l), !i.length)) return null;
          if (this._tx || this._ty) {
            let e = 0;
            for (const t of i)
              (a[2 * e] += this._tx), (a[2 * e + 1] += this._ty), (e += t);
          }
          return new A.Z(i, a);
        }
      }
      class X {
        constructor(e) {
          this.service = e;
        }
        destroy() {}
      }
      class Y extends X {
        constructor(e) {
          super(e),
            (this._portsOpen = (async function (e) {
              const t = new x.Z();
              return await t.open(e, {}), t;
            })(e.source).then((e) => (this.client = e)));
        }
        destroy() {
          this.client.close(), (this.client = null);
        }
        async executeQuery(e, t) {
          await this._portsOpen;
          const s = await this.client.invoke('queryFeatures', e.toJSON(), t);
          return F.fromFeatureSet(s, this.service);
        }
      }
      class V extends X {
        async executeQuery(e, t) {
          const { data: s } = await (0, S.executeQueryPBFBuffer)(
              this.service.source,
              e,
              t,
            ),
            r = !e.quantizationParameters;
          return W.fromBuffer(s, this.service, r);
        }
      }
      class H extends X {
        async executeQuery(e, t) {
          const {
            source: s,
            capabilities: r,
            spatialReference: i,
            objectIdField: n,
            geometryType: o,
          } = this.service;
          if (
            (0, u.pC)(e.quantizationParameters) &&
            !r.query.supportsQuantization
          ) {
            const r = e.clone(),
              o = (0, w.vY)((0, u.Wg)(r.quantizationParameters));
            r.quantizationParameters = null;
            const { data: a } = await (0, S.executeQuery)(s, r, i, t),
              l = (0, p.h_)(a, n);
            return (0, p.RZ)(o, l), F.fromOptimizedFeatureSet(l, this.service);
          }
          const { data: a } = await (0, S.executeQuery)(
            s,
            e,
            this.service.spatialReference,
            t,
          );
          var l;
          return (
            'esriGeometryPoint' === o &&
              (a.features =
                null == (l = a.features)
                  ? void 0
                  : l.filter((e) => {
                      if ((0, u.pC)(e.geometry)) {
                        const t = e.geometry;
                        return Number.isFinite(t.x) && Number.isFinite(t.y);
                      }
                      return !0;
                    })),
            F.fromFeatureSet(a, this.service)
          );
        }
      }
      class Q extends X {
        async executeQuery(e, t) {
          const { capabilities: s } = this.service;
          if (e.quantizationParameters && !s.query.supportsQuantization) {
            const s = e.clone(),
              r = (0, w.vY)((0, u.Wg)(s.quantizationParameters));
            s.quantizationParameters = null;
            const i = await (0, v.WW)(this.service.source, e, t);
            return (0, p.RZ)(r, i), F.fromOptimizedFeatureSet(i, this.service);
          }
          const r = await (0, v.WW)(this.service.source, e, t);
          return F.fromOptimizedFeatureSet(r, this.service);
        }
      }
      var $ = s(92835),
        J = s(32448),
        K = s(22862),
        ee = s(57444),
        te = s(8557);
      class se {
        constructor() {
          (this.source = !1),
            (this.targets = { feature: !1, aggregate: !1 }),
            (this.storage = { filters: !1, data: !1 }),
            (this.mesh = !1),
            (this.queryFilter = !1),
            (this.why = { mesh: [], source: [] });
        }
        static create(e) {
          const t = new se();
          for (const s in e) {
            const r = e[s];
            if ('object' == typeof r)
              for (const e in r) {
                const i = r[e];
                t[s][e] = i;
              }
            t[s] = r;
          }
          return t;
        }
        static empty() {
          return se.create({});
        }
        static all() {
          return se.create({
            source: !0,
            targets: { feature: !0, aggregate: !0 },
            storage: { filters: !0, data: !0 },
            mesh: !0,
          });
        }
        unset(e) {
          e.source && (this.source = !1),
            e.targets.feature && (this.targets.feature = !1),
            e.targets.aggregate && (this.targets.aggregate = !1),
            e.storage.filters && (this.storage.filters = !1),
            e.storage.data && (this.storage.data = !1),
            e.mesh && (this.mesh = !1),
            e.queryFilter && (this.queryFilter = !1);
        }
        any() {
          return (
            this.source ||
            this.mesh ||
            this.storage.filters ||
            this.storage.data ||
            this.targets.feature ||
            this.targets.aggregate ||
            this.queryFilter
          );
        }
        describe() {
          let e = 0,
            t = '';
          if (this.mesh) {
            (e += 20), (t += '-> (20) Mesh needs update\n');
            for (const e of this.why.mesh) t += `    + ${e}\n`;
          }
          if (this.source) {
            (e += 10), (t += '-> (10) The source needs update\n');
            for (const e of this.why.source) t += `    + ${e}\n`;
          }
          this.targets.feature &&
            ((e += 5), (t += '-> (5) Feature target parameters changed\n')),
            this.storage.filters &&
              ((e += 5), (t += '-> (5) Feature filter parameters changed\n')),
            this.targets.aggregate &&
              ((e += 4), (t += '-> (4) Aggregate target parameters changed\n')),
            this.storage.data &&
              ((e += 1), (t += '-> (1) Texture storage parameters changed'));
          const s =
            e < 5
              ? 'Fastest'
              : e < 10
              ? 'Fast'
              : e < 15
              ? 'Moderate'
              : e < 20
              ? 'Slow'
              : 'Very Slow';
          console.debug(`Applying ${s} update of cost ${e}/45 `),
            console.debug(t);
        }
        toJSON() {
          return {
            queryFilter: this.queryFilter,
            source: this.source,
            targets: this.targets,
            storage: this.storage,
            mesh: this.mesh,
          };
        }
      }
      class re {
        constructor(e) {
          (this.requests = { done: new Array(), stream: new te.Z(10) }),
            (this._edits = null),
            (this._abortController = new AbortController()),
            (this._done = !1),
            (this.didSend = !1),
            (this.tile = e);
        }
        get signal() {
          return this._abortController.signal;
        }
        get options() {
          return { signal: this._abortController.signal };
        }
        get empty() {
          return !this.requests.done.length;
        }
        get edits() {
          return this._edits;
        }
        get done() {
          return this._done;
        }
        end() {
          this._done = !0;
        }
        clear() {
          this.requests.done = [];
        }
        applyUpdate(e) {
          this.requests.done.forEach((t) => t.message.status.unset(e)),
            (0, u.pC)(this._edits) && this._edits.status.unset(e);
        }
        add(e) {
          var t;
          (e.message.status = null != (t = e.message.status) ? t : se.empty()),
            e.message.end &&
              this.requests.done.forEach((e) => {
                (0, u.pC)(e.message) && e.message.end && (e.message.end = !1);
              }),
            this.requests.done.push(e);
        }
        edit(e, t) {
          const s = e.getQuantizationTransform(),
            r = e.fullSchema(),
            i = Array.from(e.features()),
            n = [...t, ...i.map((e) => e.objectId)];
          this.removeIds(n),
            this._invalidate(),
            (0, u.Wi)(this._edits)
              ? (this._edits = {
                  type: 'append',
                  addOrUpdate: F.fromOptimizedFeatures(i, r, (0, u.Wg)(s)),
                  id: this.tile.id,
                  status: se.empty(),
                  end: !0,
                })
              : (this.requests.done.forEach((e) => (e.message.end = !1)),
                (0, u.Wg)(this._edits.addOrUpdate).append(e.features()));
        }
        *readers() {
          for (const { message: e } of this.requests.done)
            (0, u.pC)(e.addOrUpdate) && (yield e.addOrUpdate);
          (0, u.pC)(this._edits) &&
            (0, u.pC)(this._edits.addOrUpdate) &&
            (yield this._edits.addOrUpdate);
        }
        _invalidate() {
          for (const e of this.requests.done) e.message.status = se.empty();
          (0, u.pC)(this._edits) && (this._edits.status = se.empty());
        }
        removeIds(e) {
          this._invalidate();
          for (const { message: t } of this.requests.done) {
            const s = t.addOrUpdate;
            (0, u.pC)(s) &&
              (s.removeIds(e), s.isEmpty && (t.addOrUpdate = null));
          }
          (0, u.pC)(this._edits) &&
            (0, u.pC)(this._edits.addOrUpdate) &&
            this._edits.addOrUpdate.removeIds(e),
            (this.requests.done = this.requests.done.filter(
              (e) => e.message.addOrUpdate || e.message.end,
            ));
        }
        abort() {
          this._abortController.abort();
        }
      }
      class ie {
        constructor(e) {
          (this.events = new J.Z()),
            (this._resolver = (0, c.hh)()),
            (this._didEdit = !1),
            (this._subscriptions = new Map()),
            (this._outSR = e.outSR),
            (this._serviceInfo = e.serviceInfo),
            (this._onTileUpdateMessage = e.onMessage);
        }
        destroy() {}
        async _onMessage(e) {
          var t, s;
          const r = this._subscriptions.get(e.id);
          if (!r) return;
          const i = {
            ...e,
            remove: null != (t = e.remove) ? t : [],
            status: null != (s = e.status) ? s : se.empty(),
          };
          return (0, c.R8)(this._onTileUpdateMessage(i, r.options));
        }
        update(e, t) {
          var s;
          const r = t.fields.length;
          (t.outFields = (function (e, t) {
            const s = new Set();
            return (
              e && e.forEach((e) => s.add(e)),
              t && t.forEach((e) => s.add(e)),
              s.has('*') ? ['*'] : Array.from(s)
            );
          })(null == (s = this._schema) ? void 0 : s.outFields, t.outFields)),
            (t.outFields =
              t.outFields.length >= 0.75 * r ? ['*'] : t.outFields),
            t.outFields.sort();
          const i = (0, K.Hg)(this._schema, t);
          if (!i) return;
          (0, n.Z)('esri-2d-update-debug') &&
            console.debug('Applying Update - Source:', i);
          const o =
              'orderByFields' in this._serviceInfo &&
              this._serviceInfo.orderByFields
                ? this._serviceInfo.orderByFields
                : this._serviceInfo.objectIdField + ' ASC',
            a = {
              returnCentroid:
                (0, n.Z)('esri-2d-query-centroid-enabled') &&
                'esriGeometryPolygon' === this._serviceInfo.geometryType,
              returnGeometry: !0,
              timeReferenceUnknownClient:
                'stream' !== this._serviceInfo.type &&
                this._serviceInfo.timeReferenceUnknownClient,
              outFields: t.outFields,
              outSpatialReference: this._outSR,
              orderByFields: [o],
              where: t.definitionExpression || '1=1',
              gdbVersion: t.gdbVersion,
              historicMoment: t.historicMoment,
              timeExtent: $.Z.fromJSON(t.timeExtent),
            },
            l = this._schema && (0, K.uD)(i, 'outFields');
          this._schema &&
            (0, K.V7)(i, [
              'timeExtent',
              'definitionExpression',
              'gdbVersion',
              'historicMoment',
              'customParameters',
            ]) &&
            (e.why.mesh.push('Layer filter and/or custom parameters changed'),
            e.why.source.push('Layer filter and/or custom parameters changed'),
            (e.mesh = !0),
            (e.source = !0),
            (e.queryFilter = !0)),
            l &&
              (e.why.source.push('Layer required fields changed'),
              (e.source = !0)),
            (0, K.Hg)(a, this._queryInfo) && (this._queryInfo = a),
            (this._schema = t),
            this._resolver.resolve();
        }
        whenInitialized() {
          return this._resolver.promise;
        }
        async applyUpdate(e) {
          if (e.queryFilter || (e.source && this._didEdit))
            return this.refresh(), void (this._didEdit = !1);
          this._subscriptions.forEach((t) => t.applyUpdate(e)),
            await this.resend();
        }
        refresh() {
          for (const e of this._tiles()) this.unsubscribe(e), this.subscribe(e);
        }
        subscribe(e) {
          const t = new re(e);
          this._subscriptions.set(e.id, t);
        }
        unsubscribe(e) {
          const t = this.get(e.id);
          (0, u.pC)(t) && t.abort(), this._subscriptions.delete(e.id);
        }
        createQuery(e = {}) {
          const t = this._queryInfo.historicMoment
            ? new Date(this._queryInfo.historicMoment)
            : null;
          return new ee.Z({ ...this._queryInfo, historicMoment: t, ...e });
        }
        get(e) {
          return this._subscriptions.has(e) ? this._subscriptions.get(e) : null;
        }
        async queryLastEditDate() {
          throw new Error('Service does not support query type');
        }
        async query(e) {
          throw new Error('Service does not support query');
        }
        *_tiles() {
          const e = Array.from(this._subscriptions.values());
          for (const t of e) yield t.tile;
        }
        async edit(e, t) {
          const s = Array.from(this._subscriptions.values()),
            r = s.map(({ tile: e }) => e);
          for (const e of s) e.removeIds(t);
          if (e.length) {
            const s = r
                .map((t) => {
                  const s = this.createTileQuery(t);
                  return (s.objectIds = e), { tile: t, query: s };
                })
                .map(async ({ tile: e, query: t }) => ({
                  tile: e,
                  result: await this.query(t),
                  query: t,
                })),
              i = (await (0, c.WW)(s)).map(async ({ tile: s, result: r }) => {
                if (!r.hasFeatures && !t.length && !e.length) return;
                const i = this._subscriptions.get(s.key.id);
                i && i.edit(r, e);
              });
            await (0, c.as)(i);
          }
          this._didEdit = !0;
        }
      }
      var ne = s(34084);
      const oe = b.Z.getLogger(
        'esri.views.2d.layers.features.sources.BaseFeatureSource',
      );
      class ae extends ie {
        constructor(e) {
          super(e),
            (this.type = 'feature'),
            (this.mode = 'on-demand'),
            (this._adapter = (function (e) {
              const { capabilities: t } = e;
              return (s = e.source) &&
                s.capabilities &&
                s.collection &&
                s.layerDefinition
                ? new Q(e)
                : (function (e) {
                    return Array.isArray(e.source);
                  })(e)
                ? new Y(e)
                : t.query.supportsFormatPBF && (0, n.Z)('featurelayer-pbf')
                ? new V(e)
                : new H(e);
              var s;
            })(e.serviceInfo)),
            (this._queue = new ne.e({
              concurrency: 8,
              process: async (e) => {
                if (((0, c.k_)(e), (0, u.pC)(e.tile))) {
                  const t = e.tile.key.id,
                    { signal: s } = e,
                    r = (0, n.Z)('esri-tiles-debug')
                      ? { tile: t.replace(/\//g, '.'), depth: e.depth }
                      : void 0,
                    i = await this._adapter.executeQuery(e.query, {
                      signal: s,
                      query: { ...r, ...this._schema.customParameters },
                    });
                  return (i.level = e.tile.key.level), i;
                }
                return this._adapter.executeQuery(e.query, {
                  ...e,
                  query: this._schema.customParameters,
                });
              },
            })),
            (this._patchQueue = new ne.e({
              concurrency: 8,
              process: async (e) => {
                if (((0, c.k_)(e), (0, u.pC)(e.tile))) {
                  const t = e.tile.key.id,
                    { signal: s } = e,
                    r = (0, n.Z)('esri-tiles-debug')
                      ? { tile: t.replace(/\//g, '.'), depth: e.depth }
                      : void 0,
                    i = await this._adapter.executeQuery(e.query, {
                      signal: s,
                      query: { ...r, ...this._schema.customParameters },
                    });
                  return (i.level = e.tile.key.level), i;
                }
                return this._adapter.executeQuery(e.query, {
                  ...e,
                  query: this._schema.customParameters,
                });
              },
            }));
        }
        destroy() {
          super.destroy(),
            this._adapter.destroy(),
            this._queue.destroy(),
            this._patchQueue.destroy();
        }
        get updating() {
          return (
            !!this._queue.length ||
            Array.from(this._subscriptions.values()).some((e) => !e.done)
          );
        }
        get maxRecordCountFactor() {
          const { query: e } = this._serviceInfo.capabilities;
          return e.supportsMaxRecordCountFactor ? 4 : null;
        }
        get maxPageSize() {
          var e;
          const { query: t } = this._serviceInfo.capabilities;
          return (
            (null != (e = t.maxRecordCount) ? e : 8e3) *
            (0, u.Pt)(this.maxRecordCountFactor, 1)
          );
        }
        get pageSize() {
          return Math.min(8e3, this.maxPageSize);
        }
        enableEvent(e, t) {}
        subscribe(e) {
          super.subscribe(e);
          const t = this._subscriptions.get(e.id);
          this._fetchDataTile(e)
            .catch((t) => {
              (0, c.D_)(t) ||
                oe.error(
                  new I.Z(
                    'mapview-query-error',
                    'Encountered error when fetching tile',
                    { tile: e, error: t },
                  ),
                );
            })
            .then(() => t.end());
        }
        unsubscribe(e) {
          super.unsubscribe(e);
        }
        readers(e) {
          return this._subscriptions.get(e).readers();
        }
        async query(e) {
          return this._adapter.executeQuery(e, {
            query: this._schema.customParameters,
          });
        }
        async queryLastEditDate() {
          const e = this._serviceInfo.source,
            t = { ...e.query, f: 'json' };
          return (
            await (0, y.default)(e.path, { query: t, responseType: 'json' })
          ).data.editingInfo.lastEditDate;
        }
        createTileQuery(e, t = {}) {
          var s;
          const r = this._serviceInfo.geometryType,
            i = this.createQuery(t);
          (i.quantizationParameters =
            null != (s = t.quantizationParameters)
              ? s
              : e.getQuantizationParameters()),
            (i.resultType = 'tile'),
            (i.geometry = e.extent),
            this._serviceInfo.capabilities.query.supportsQuantization
              ? 'esriGeometryPolyline' === r &&
                (i.maxAllowableOffset =
                  e.resolution *
                  (0, n.Z)('feature-polyline-generalization-factor'))
              : ('esriGeometryPolyline' !== r && 'esriGeometryPolygon' !== r) ||
                ((i.maxAllowableOffset = e.resolution),
                'esriGeometryPolyline' === r &&
                  (i.maxAllowableOffset *= (0, n.Z)(
                    'feature-polyline-generalization-factor',
                  )));
          const o = this._serviceInfo.capabilities.query;
          return (
            (i.defaultSpatialReferenceEnabled =
              o.supportsDefaultSpatialReference),
            (i.compactGeometryEnabled = o.supportsCompactGeometry),
            i
          );
        }
        async _executePatchQuery(e, t, s, r) {
          const i = t.clone();
          (i.outFields = [this._serviceInfo.objectIdField, ...s]),
            (i.returnCentroid = !1),
            (i.returnGeometry = !1);
          const n = (0, u.pC)(i.start) ? i.start / 8e3 : 0,
            o = r.signal;
          return this._patchQueue.push({
            tile: e,
            query: i,
            signal: o,
            depth: n,
          });
        }
        async _resend(e, t) {
          const { query: s, message: r } = e,
            i = (0, u.pC)(s.outFields) ? s.outFields : [],
            n = this._queryInfo.outFields,
            o = n.filter((e) => !i.includes(e));
          if ((0, u.Wi)(r.addOrUpdate))
            this._onMessage({ ...r, type: 'append' });
          else if (o.length)
            try {
              const e = this._subscriptions.get(r.id).tile,
                i = await this._executePatchQuery(e, s, o, t);
              (0, c.k_)(t),
                (s.outFields = n),
                r.addOrUpdate.joinAttributes(i),
                this._onMessage({ ...r, end: r.end, type: 'append' });
            } catch (e) {}
          else this._onMessage({ ...r, type: 'append' });
        }
        async _resendSubscription(e) {
          if (e.empty)
            return this._onMessage({
              id: e.tile.id,
              addOrUpdate: null,
              end: !1,
              type: 'append',
            });
          const t = e.signal;
          for (const s of e.requests.done) await this._resend(s, { signal: t });
          return (0, u.pC)(e.edits) ? this._onMessage(e.edits) : void 0;
        }
        async resend() {
          const e = Array.from(this._subscriptions.values());
          await Promise.all(e.map((e) => this._resendSubscription(e)));
        }
      }
      const le = (0, n.Z)('esri-mobile'),
        he = { maxDrillLevel: le ? 1 : 4, maxRecordCountFactor: le ? 1 : 3 };
      class ue extends ae {
        constructor(e) {
          super(e);
        }
        async _fetchDataTile(e) {
          const t =
              this._serviceInfo.capabilities.query.supportsMaxRecordCountFactor,
            s = this._subscriptions.get(e.key.id),
            r = s.signal,
            i = e.getQuantizationParameters();
          let n = 0;
          const o = async (a, l) => {
            const h = this._queryInfo,
              u = this.createTileQuery(a, {
                maxRecordCountFactor: t ? he.maxRecordCountFactor : void 0,
                returnExceededLimitFeatures: !1,
                quantizationParameters: i,
              });
            n++;
            try {
              const t = await this._queue.push({
                tile: e,
                query: u,
                signal: r,
                depth: l,
              });
              if ((n--, (0, c.k_)(r), !t)) return;
              if (h !== this._queryInfo) return void o(a, l);
              if (t.exceededTransferLimit && l < he.maxDrillLevel) {
                for (const e of a.createChildTiles()) o(e, l + 1);
                return;
              }
              const i = {
                id: e.id,
                addOrUpdate: t,
                end: 0 === n,
                type: 'append',
              };
              s.add({ query: u, message: i }), this._onMessage(i);
            } catch (t) {
              (0, c.D_)(t) ||
                this._onMessage({
                  id: e.id,
                  addOrUpdate: null,
                  end: !0,
                  type: 'append',
                });
            }
          };
          o(e, 0);
        }
      }
      var ce = s(96794),
        de = s(22021);
      class pe {
        constructor(e, t, s, r, i = 128) {
          (this._trackIdToObservations = new Map()),
            (this._idCounter = 0),
            (this._lastPurge = performance.now()),
            (this._addOrUpdated = new Map()),
            (this._removed = []),
            (this._maxAge = 0),
            (this._timeInfo = s),
            (this._purgeOptions = r),
            (this.store = e),
            (this.objectIdField = t),
            (this.purgeInterval = i),
            (this._useGeneratedIds =
              '__esri_stream_id__' === this.objectIdField);
        }
        add(e) {
          if (this._useGeneratedIds) {
            const t = this._nextId();
            (e.attributes[this.objectIdField] = t), (e.objectId = t);
          } else e.objectId = e.attributes[this.objectIdField];
          if (
            (this._addOrUpdated.set(e.objectId, e),
            (this._maxAge = Math.max(
              this._maxAge,
              e.attributes[this._timeInfo.startTimeField],
            )),
            !this._timeInfo.trackIdField)
          )
            return (
              (0, u.Wi)(this._trackIdLessObservations) &&
                (this._trackIdLessObservations = new te.Z(1e5)),
              void this._trackIdLessObservations.enqueue(e.objectId)
            );
          const t = e.attributes[this._timeInfo.trackIdField];
          if (!this._trackIdToObservations.has(t)) {
            const e =
                (0, u.pC)(this._purgeOptions) &&
                null != this._purgeOptions.maxObservations
                  ? this._purgeOptions.maxObservations
                  : 1e3,
              s = (0, de.uZ)(e, 0, 1e3);
            this._trackIdToObservations.set(t, new te.Z(s));
          }
          const s = this._trackIdToObservations.get(t).enqueue(e.objectId);
          (0, u.pC)(s) &&
            (this._addOrUpdated.has(s)
              ? this._addOrUpdated.delete(s)
              : this._removed.push(s));
        }
        checkForUpdates() {
          const e = this._getToAdd(),
            t = this._getToRemove(),
            s = performance.now();
          s - this._lastPurge >= this.purgeInterval &&
            (this._purge(s), (this._lastPurge = s));
          const r = [];
          if ((0, u.pC)(t))
            for (const e of t) {
              const t = this.store.removeById(e);
              (0, u.pC)(t) && r.push(t);
            }
          if ((0, u.pC)(e))
            for (const t of e)
              (t.attributes.__esri_timestamp__ = s), this.store.add(t);
          (e || r) && this.store.update(e, r);
        }
        _getToAdd() {
          if (!this._addOrUpdated.size) return null;
          const e = new Array(this._addOrUpdated.size);
          let t = 0;
          return (
            this._addOrUpdated.forEach((s) => (e[t++] = s)),
            this._addOrUpdated.clear(),
            e
          );
        }
        _getToRemove() {
          const e = this._removed;
          return this._removed.length ? ((this._removed = []), e) : null;
        }
        _nextId() {
          const e = this._idCounter;
          return (
            (this._idCounter = ((this._idCounter + 1) % 4294967294) + 1), e
          );
        }
        _purge(e) {
          const t = this._purgeOptions;
          (0, u.pC)(t) &&
            (this._purgeSomeByDisplayCount(t),
            this._purgeByAge(t),
            this._purgeByAgeReceived(e, t),
            this._purgeTracks());
        }
        _purgeSomeByDisplayCount(e) {
          if (!e.displayCount) return;
          let t = this.store.size;
          if (t > e.displayCount) {
            if (this._timeInfo.trackIdField)
              for (const s of this._trackIdToObservations.values())
                if (t > e.displayCount && s.size) {
                  const e = (0, u.Wg)(s.dequeue());
                  this._removed.push(e), t--;
                }
            if ((0, u.pC)(this._trackIdLessObservations)) {
              let s = t - e.displayCount;
              for (; s-- > 0; ) {
                const e = this._trackIdLessObservations.dequeue();
                (0, u.pC)(e) && this._removed.push(e);
              }
            }
          }
        }
        _purgeByAge(e) {
          var t;
          if (!e.age || null == (t = this._timeInfo) || !t.startTimeField)
            return;
          const s = 60 * e.age * 1e3,
            r = this._maxAge - s;
          this.store.forEach((e) => {
            e.attributes[this._timeInfo.startTimeField] < r &&
              this._removed.push(e.objectId);
          });
        }
        _purgeByAgeReceived(e, t) {
          if (!t.ageReceived) return;
          const s = e - 60 * t.ageReceived * 1e3;
          this.store.forEach((e) => {
            e.attributes.__esri_timestamp__ < s &&
              this._removed.push(e.objectId);
          });
        }
        _purgeTracks() {
          this._trackIdToObservations.forEach((e, t) => {
            0 === e.size && this._trackIdToObservations.delete(t);
          });
        }
      }
      s(66577);
      var ge = s(17452),
        fe = (s(37697), s(69285));
      let _e = class extends J.Z.EventedMixin(i.r) {
        onFeature(e) {
          this.emit('feature', e);
        }
      };
      _e = (0, r._)(
        [(0, a.j)('esri.layers.graphics.sources.connections.StreamConnection')],
        _e,
      );
      const me = _e,
        ye = b.Z.getLogger(
          'esri.layers.graphics.sources.connections.WebSocketConnection',
        );
      var Ie, be;
      ((be = Ie || (Ie = {}))[(be.CONNECTING = 0)] = 'CONNECTING'),
        (be[(be.OPEN = 1)] = 'OPEN'),
        (be[(be.CLOSING = 2)] = 'CLOSING'),
        (be[(be.CLOSED = 3)] = 'CLOSED');
      let xe = class extends me {
        constructor(e) {
          super(), (this.errorString = null);
          const {
            geometryType: t,
            spatialReference: s,
            sourceSpatialReference: r,
          } = e;
          (this._config = e),
            (this._featureZScaler = (0, fe.k)(t, r, s)),
            this._open();
        }
        async _open() {
          await this._tryCreateWebSocket(),
            this.destroyed || (await this._handshake());
        }
        destroy() {
          (0, u.pC)(this._websocket) &&
            ((this._websocket.onopen = null),
            (this._websocket.onclose = null),
            (this._websocket.onerror = null),
            (this._websocket.onmessage = null),
            this._websocket.close()),
            (this._websocket = null);
        }
        get connectionStatus() {
          if ((0, u.Wi)(this._websocket)) return 'disconnected';
          switch (this._websocket.readyState) {
            case Ie.CONNECTING:
            case Ie.OPEN:
              return 'connected';
            case Ie.CLOSING:
            case Ie.CLOSED:
              return 'disconnected';
          }
        }
        async _tryCreateWebSocket(
          e = this._config.source.path,
          t = 1e3,
          s = 0,
        ) {
          try {
            if (this.destroyed) return;
            const t = (0, ge.fl)(e, this._config.customParameters);
            (this._websocket = await this._createWebSocket(t)),
              this.notifyChange('connectionStatus');
          } catch (r) {
            const i = t / 1e3;
            return this._config.maxReconnectionAttempts &&
              s >= this._config.maxReconnectionAttempts
              ? (ye.error(
                  new I.Z(
                    'websocket-connection',
                    'Exceeded maxReconnectionAttempts attempts. No further attempts will be made',
                  ),
                ),
                void this.destroy())
              : (ye.error(
                  new I.Z(
                    'websocket-connection',
                    `Failed to connect. Attempting to reconnect in ${i}s`,
                    r,
                  ),
                ),
                await (0, c.e4)(t),
                this._tryCreateWebSocket(
                  e,
                  Math.min(1.5 * t, 1e3 * this._config.maxReconnectionInterval),
                  s + 1,
                ));
          }
        }
        _createWebSocket(e) {
          return new Promise((t, s) => {
            const r = new WebSocket(e);
            (r.onopen = () => {
              if (((r.onopen = null), this.destroyed))
                return (r.onclose = null), void r.close();
              (r.onclose = (e) => this._onClose(e)),
                (r.onerror = (e) => this._onError(e)),
                (r.onmessage = (e) => this._onMessage(e)),
                t(r);
            }),
              (r.onclose = (e) => {
                (r.onopen = r.onclose = null), s(e);
              });
          });
        }
        async _handshake(e = 1e4) {
          const t = this._websocket;
          if ((0, u.Wi)(t)) return;
          const s = (0, c.hh)(),
            r = t.onmessage,
            { filter: i, outFields: n, spatialReference: o } = this._config;
          return (
            s.timeout(e),
            (t.onmessage = (e) => {
              var a;
              let l = null;
              try {
                l = JSON.parse(e.data);
              } catch (e) {}
              (l && 'object' == typeof l) ||
                (ye.error(
                  new I.Z(
                    'websocket-connection',
                    'Protocol violation. Handshake failed - malformed message',
                    e.data,
                  ),
                ),
                s.reject(),
                this.destroy()),
                (null == (a = l.spatialReference) ? void 0 : a.wkid) !==
                  (null == o ? void 0 : o.wkid) &&
                  (ye.error(
                    new I.Z(
                      'websocket-connection',
                      `Protocol violation. Handshake failed - expected wkid of ${o.wkid}`,
                      e.data,
                    ),
                  ),
                  s.reject(),
                  this.destroy()),
                'json' !== l.format &&
                  (ye.error(
                    new I.Z(
                      'websocket-connection',
                      'Protocol violation. Handshake failed - format is not set',
                      e.data,
                    ),
                  ),
                  s.reject(),
                  this.destroy()),
                i &&
                  l.filter !== i &&
                  ye.error(
                    new I.Z(
                      'websocket-connection',
                      "Tried to set filter, but server doesn't support it",
                    ),
                  ),
                n &&
                  l.outFields !== n &&
                  ye.error(
                    new I.Z(
                      'websocket-connection',
                      "Tried to set outFields, but server doesn't support it",
                    ),
                  ),
                (t.onmessage = r),
                s.resolve();
            }),
            t.send(
              JSON.stringify({
                filter: i,
                outFields: n,
                format: 'json',
                spatialReference: { wkid: o.wkid },
              }),
            ),
            s.promise
          );
        }
        _onMessage(e) {
          try {
            const t = JSON.parse(e.data);
            if ('featureResult' !== t.type)
              throw new I.Z(
                'websocket-connection',
                "Protocol violation - Expected to find message of type 'featureResult'",
                t,
              );
            for (const e of t.features)
              (0, u.pC)(this._featureZScaler) &&
                this._featureZScaler(e.geometry),
                this.onFeature(e);
          } catch (e) {
            return (
              ye.error(
                new I.Z('websocket-connection', 'Failed to parse message', e),
              ),
              void this.destroy()
            );
          }
        }
        _onError(e) {
          const t = 'Encountered an error over WebSocket connection';
          this._set('errorString', t), ye.error('websocket-connection', t);
        }
        _onClose(e) {
          (this._websocket = null),
            this.notifyChange('connectionStatus'),
            1e3 !== e.code &&
              ye.error(
                'websocket-connection',
                `WebSocket closed unexpectedly with error code ${e.code}`,
              ),
            this.destroyed || this._open();
        }
      };
      (0, r._)([(0, o.Cb)()], xe.prototype, 'connectionStatus', null),
        (0, r._)([(0, o.Cb)()], xe.prototype, 'errorString', void 0),
        (xe = (0, r._)(
          [
            (0, a.j)(
              'esri.layers.graphics.sources.connections.WebSocketConnection',
            ),
          ],
          xe,
        ));
      var we = s(33955),
        ve = s(82971);
      const Se = b.Z.getLogger(
          'esri.layers.graphics.sources.connections.GeoEventConnection',
        ),
        Te = { maxQueryDepth: 5, maxRecordCountFactor: 3 };
      let Ce = class extends xe {
        constructor(e) {
          super({ ...Te, ...e });
        }
        async _open() {
          const e = await this._fetchServiceDefinition(this._config.source);
          e.timeInfo.trackIdField ||
            Se.warn(
              'GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect.',
            );
          const t = this._fetchWebSocketUrl(
            e.streamUrls,
            this._config.spatialReference,
          );
          this._buddyServicesQuery ||
            (this._buddyServicesQuery = this._queryBuddyServices()),
            await this._buddyServicesQuery,
            await this._tryCreateWebSocket(t);
          const { filter: s, outFields: r } = this._config;
          this.destroyed || this._setFilter(s, r);
        }
        _onMessage(e) {
          let t;
          try {
            (t = this._enrich(JSON.parse(e.data))),
              (0, u.pC)(this._featureZScaler) &&
                this._featureZScaler(t.geometry);
          } catch (e) {
            return void Se.error(
              new I.Z('geoevent-connection', 'Failed to parse message', e),
            );
          }
          this.onFeature(t);
        }
        async _fetchServiceDefinition(e) {
          const t = { f: 'json', ...this._config.customParameters },
            s = (0, y.default)(e.path, { query: t, responseType: 'json' }),
            r = (await s).data;
          return (this._serviceDefinition = r), r;
        }
        _fetchWebSocketUrl(e, t) {
          const s = e[0],
            { urls: r, token: i } = s,
            n = this._inferWebSocketBaseUrl(r);
          return (0, ge.fl)(`${n}/subscribe`, { outSR: '' + t.wkid, token: i });
        }
        _inferWebSocketBaseUrl(e) {
          if (1 === e.length) return e[0];
          for (const t of e) if (-1 !== t.indexOf('wss')) return t;
          return (
            Se.error(
              new I.Z(
                'geoevent-connection',
                'Unable to infer WebSocket url',
                e,
              ),
            ),
            null
          );
        }
        async _setFilter(e, t) {
          const s = this._websocket;
          if ((0, u.Wi)(s) || ((0, u.Wi)(e) && (0, u.Wi)(t))) return;
          const r = JSON.stringify({ filter: this._serializeFilter(e, t) });
          let i = !1;
          const n = (0, c.hh)();
          return (
            (s.onmessage = (e) => {
              const t = JSON.parse(e.data);
              t.filter &&
                (t.error &&
                  (Se.error(
                    new I.Z(
                      'geoevent-connection',
                      'Failed to set service filter',
                      t.error,
                    ),
                  ),
                  this._set(
                    'errorString',
                    `Could not set service filter - ${t.error}`,
                  ),
                  n.reject(t.error)),
                (s.onmessage = this._onMessage.bind(this)),
                (i = !0),
                n.resolve());
            }),
            s.send(r),
            setTimeout(() => {
              i ||
                (this.destroyed ||
                  this._websocket !== s ||
                  Se.error(
                    new I.Z(
                      'geoevent-connection',
                      'Server timed out when setting filter',
                    ),
                  ),
                n.reject());
            }, 1e4),
            n.promise
          );
        }
        _serializeFilter(e, t) {
          const s = {};
          if ((0, u.Wi)(e) && (0, u.Wi)(t)) return s;
          if ((0, u.pC)(e) && e.geometry)
            try {
              const t = (0, we.im)(e.geometry);
              if ('extent' !== t.type)
                throw new I.Z(`Expected extent but found type ${t.type}`);
              s.geometry = JSON.stringify(t.shiftCentralMeridian());
            } catch (e) {
              Se.error(
                new I.Z(
                  'geoevent-connection',
                  'Encountered an error when setting connection geometryDefinition',
                  e,
                ),
              );
            }
          return (
            (0, u.pC)(e) &&
              e.where &&
              '1 = 1' !== e.where &&
              (s.where = e.where),
            (0, u.pC)(t) && (s.outFields = t.join(',')),
            s
          );
        }
        _enrich(e) {
          if (!this._relatedFeatures) return e;
          const t = this._serviceDefinition.relatedFeatures.joinField,
            s = e.attributes[t];
          if (!this._relatedFeatures.has(s))
            return (
              Se.warn(
                'geoevent-connection',
                'Feature join failed. Is the join field configured correctly?',
                e,
              ),
              e
            );
          const { attributes: r, geometry: i } = this._relatedFeatures.get(s);
          for (const t in r) e.attributes[t] = r[t];
          return (
            i && (e.geometry = i),
            e.geometry ||
              e.centroid ||
              Se.error(
                new I.Z(
                  'geoevent-connection',
                  'Found malformed feature - no geometry found',
                  e,
                ),
              ),
            e
          );
        }
        async _queryBuddyServices() {
          try {
            const { relatedFeatures: e, keepLatestArchive: t } =
                this._serviceDefinition,
              s = this._queryRelatedFeatures(e),
              r = this._queryArchive(t);
            await s;
            const i = await r;
            if (!i) return;
            for (const e of i.features) this.onFeature(this._enrich(e));
          } catch (e) {
            Se.error(
              new I.Z(
                'geoevent-connection',
                'Encountered an error when querying buddy services',
                { error: e },
              ),
            );
          }
        }
        async _queryRelatedFeatures(e) {
          if (!e) return;
          const t = await this._queryBuddy(e.featuresUrl);
          this._addRelatedFeatures(t);
        }
        async _queryArchive(e) {
          if (e) return this._queryBuddy(e.featuresUrl);
        }
        async _queryBuddy(e) {
          const t = new (
              await Promise.all([
                s.e(6968),
                s.e(7319),
                s.e(1773),
                s.e(9989),
                s.e(7604),
                s.e(635),
                s.e(8326),
                s.e(7284),
                s.e(8422),
                s.e(8121),
              ]).then(s.bind(s, 67284))
            ).default({ url: e }),
            { capabilities: r } = await t.load(),
            i = r.query.supportsMaxRecordCountFactor,
            n = r.query.supportsPagination,
            o = r.query.supportsCentroid,
            a = this._config.maxRecordCountFactor,
            l = t.capabilities.query.maxRecordCount,
            h = i ? l * a : l,
            c = new ee.Z();
          if (
            ((c.outFields = (0, u.Pt)(this._config.outFields, ['*'])),
            (c.where = (0, u.Pt)(
              (0, u.U2)(this._config.filter, 'where'),
              '1=1',
            )),
            (c.returnGeometry = !0),
            (c.returnExceededLimitFeatures = !0),
            (c.outSpatialReference = ve.Z.fromJSON(
              this._config.spatialReference,
            )),
            o && (c.returnCentroid = !0),
            i && (c.maxRecordCountFactor = a),
            n)
          )
            return (c.num = h), t.destroy(), this._queryPages(e, c);
          const d = await (0, S.executeQuery)(
            e,
            c,
            this._config.sourceSpatialReference,
          );
          return t.destroy(), d.data;
        }
        async _queryPages(e, t, s = [], r = 0) {
          t.start = (0, u.pC)(t.num) ? r * t.num : null;
          const { data: i } = await (0, S.executeQuery)(
            e,
            t,
            this._config.sourceSpatialReference,
          );
          return i.exceededTransferLimit && r < this._config.maxQueryDepth
            ? (i.features.forEach((e) => s.push(e)),
              this._queryPages(e, t, s, r + 1))
            : (s.forEach((e) => i.features.push(e)), i);
        }
        _addRelatedFeatures(e) {
          const t = new Map(),
            s = e.features,
            r = this._serviceDefinition.relatedFeatures.joinField;
          for (const e of s) {
            const s = e.attributes[r];
            t.set(s, e);
          }
          this._relatedFeatures = t;
        }
      };
      Ce = (0, r._)(
        [
          (0, a.j)(
            'esri.layers.graphics.sources.connections.GeoEventConnection',
          ),
        ],
        Ce,
      );
      const Fe = Ce;
      function Ee(e, t) {
        const s = e.weakClone();
        if ((0, u.pC)(e.geometry)) {
          const r = (0, p.Jd)(t, e.geometry.coords[0]),
            i = (0, p.IN)(t, e.geometry.coords[1]);
          s.geometry = new A.Z([], [r, i]);
        }
        return s;
      }
      class Ae {
        constructor(e, t) {
          (this.onUpdate = e),
            (this._geometryType = t),
            (this._objectIdToFeature = new Map());
        }
        get _features() {
          const e = [];
          return this._objectIdToFeature.forEach((t) => e.push(t)), e;
        }
        add(e) {
          this._objectIdToFeature.set(e.objectId, e), (this._index = null);
        }
        get(e) {
          return this._objectIdToFeature.has(e)
            ? this._objectIdToFeature.get(e)
            : null;
        }
        forEach(e) {
          this._objectIdToFeature.forEach(e);
        }
        search(e) {
          return (
            this._index ||
              (this._index = (function (e, t) {
                const s = (0, ce.r)(
                  9,
                  'esriGeometryPoint' === t
                    ? (e) =>
                        (0, u.pC)(e.geometry)
                          ? {
                              minX: e.geometry.coords[0],
                              minY: e.geometry.coords[1],
                              maxX: e.geometry.coords[0],
                              maxY: e.geometry.coords[1],
                            }
                          : {
                              minX: 1 / 0,
                              minY: 1 / 0,
                              maxX: -1 / 0,
                              maxY: -1 / 0,
                            }
                    : (e) => {
                        let t = 1 / 0,
                          s = 1 / 0,
                          r = -1 / 0,
                          i = -1 / 0;
                        return (
                          (0, u.pC)(e.geometry) &&
                            e.geometry.forEachVertex((e, n) => {
                              (t = Math.min(t, e)),
                                (s = Math.min(s, n)),
                                (r = Math.max(r, e)),
                                (i = Math.max(i, n));
                            }),
                          { minX: t, minY: s, maxX: r, maxY: i }
                        );
                      },
                );
                return s.load(e), s;
              })(this._features, this._geometryType)),
            (function (e, t) {
              return e.search({
                minX: t.bounds[0],
                minY: t.bounds[1],
                maxX: t.bounds[2],
                maxY: t.bounds[3],
              });
            })(this._index, e)
          );
        }
        removeById(e) {
          const t = this._objectIdToFeature.get(e);
          return t
            ? (this._objectIdToFeature.delete(e), (this._index = null), t)
            : null;
        }
        update(e, t) {
          this.onUpdate(e, t);
        }
        get size() {
          return this._objectIdToFeature.size;
        }
      }
      class Me extends ie {
        constructor(e) {
          super(e),
            (this.type = 'geoevent'),
            (this._dataReceiveEventEnabled = !1),
            (this._level = 0),
            (this._updateInfo = { websocket: 0, client: 0 });
          const { outSR: t } = e,
            {
              geometryType: s,
              objectIdField: r,
              timeInfo: i,
              purgeOptions: n,
              source: o,
              spatialReference: a,
              serviceFilter: l,
              maxReconnectionAttempts: h,
              maxReconnectionInterval: u,
              updateInterval: c,
              enableDataReceived: d,
              customParameters: g,
            } = e.serviceInfo,
            f = new Ae(this._onUpdate.bind(this), s),
            _ = new pe(f, r, i, n),
            m = (function (e, t, s, r, i, n, o, a) {
              const l =
                  0 === e.path.indexOf('wss://') ||
                  0 === e.path.indexOf('ws://'),
                h = {
                  source: e,
                  sourceSpatialReference: t,
                  spatialReference: s,
                  geometryType: r,
                  filter: i,
                  maxReconnectionAttempts: n,
                  maxReconnectionInterval: o,
                  customParameters: a,
                };
              return l ? new xe(h) : new Fe(h);
            })(o, a, t, s, l, h, u, g);
          (this._store = f),
            (this._manager = _),
            (this._connection = m),
            (this._quantize = (function (e) {
              return 'esriGeometryPoint' === e
                ? Ee
                : (t, s) => {
                    const r = t.weakClone(),
                      i = new A.Z(),
                      n = (0, p.Nh)(i, t.geometry, !1, !1, e, s, !1, !1);
                    return (r.geometry = n), r;
                  };
            })(s)),
            (this._dataReceiveEventEnabled = d),
            (this._handles = [
              this._connection.on('feature', (e) => this._onFeature(e)),
              this._connection.watch('connectionStatus', (e) =>
                this.events.emit('connectionStatus', e),
              ),
              this._connection.watch('errorString', (e) =>
                this.events.emit('errorString', e),
              ),
            ]),
            (this._initUpdateInterval = () => {
              let t = performance.now();
              this._updateIntervalId = setInterval(() => {
                const s = performance.now(),
                  r = s - t;
                if (r > 2500) {
                  t = s;
                  const e = Math.round(this._updateInfo.client / (r / 1e3)),
                    i = Math.round(this._updateInfo.websocket / (r / 1e3));
                  (this._updateInfo.client = 0),
                    (this._updateInfo.websocket = 0),
                    this.events.emit('updateRate', { client: e, websocket: i });
                }
                e.canAcceptRequest() && this._manager.checkForUpdates();
              }, c);
            }),
            this._initUpdateInterval();
        }
        destroy() {
          super.destroy(),
            this._clearUpdateInterval(),
            this._handles.forEach((e) => e.remove()),
            this._connection.destroy();
        }
        _fetchDataTile() {}
        pauseStream() {
          this._clearUpdateInterval();
        }
        resumeStream() {
          this._initUpdateInterval();
        }
        enableEvent(e, t) {
          'data-received' === e && (this._dataReceiveEventEnabled = t);
        }
        get updating() {
          return !1;
        }
        subscribe(e) {
          super.subscribe(e);
          const t = this._subscriptions.get(e.id);
          this._level = e.level;
          const s = this._getTileFeatures(e);
          this._onMessage({
            type: 'append',
            id: e.key.id,
            addOrUpdate: s,
            end: !0,
          }),
            (t.didSend = !0);
        }
        unsubscribe(e) {
          super.unsubscribe(e);
        }
        *readers(e) {
          const t = this._subscriptions.get(e),
            { tile: s } = t;
          yield this._getTileFeatures(s);
          for (const e of t.requests.stream.entries)
            (0, u.pC)(e) && (0, u.pC)(e.addOrUpdate) && (yield e.addOrUpdate);
        }
        createTileQuery(e) {
          throw new Error('Service does not support tile  queries');
        }
        async resend() {
          this._subscriptions.forEach((e) => {
            const { tile: t } = e,
              s = {
                type: 'append',
                id: t.id,
                addOrUpdate: this._getTileFeatures(t),
                end: !0,
              };
            this._onMessage(s);
          });
        }
        _getTileFeatures(e) {
          const t = this._store
            .search(e)
            .map((t) => this._quantize(t, e.transform));
          return F.fromOptimizedFeatures(t, this._serviceInfo, e.transform);
        }
        _onFeature(e) {
          this._updateInfo.websocket++;
          try {
            this._dataReceiveEventEnabled && this.events.emit('feature', e);
            const t = (0, p.XA)(
              e,
              this._serviceInfo.geometryType,
              !1,
              !1,
              this._serviceInfo.objectIdField,
            );
            this._manager.add(t);
          } catch (e) {}
        }
        _clearUpdateInterval() {
          clearInterval(this._updateIntervalId), (this._updateIntervalId = 0);
        }
        _onUpdate(e, t) {
          (0, u.pC)(e) && (this._updateInfo.client += e.length),
            this._subscriptions.forEach((e, t) => {
              e.didSend &&
                e.tile.level === this._level &&
                this._onMessage({
                  type: 'append',
                  id: t,
                  addOrUpdate: null,
                  clear: !0,
                  end: !1,
                });
            }),
            this._subscriptions.forEach((e, t) => {
              if (!e.didSend || e.tile.level !== this._level) return;
              const s = e.tile,
                r = {
                  type: 'append',
                  id: t,
                  addOrUpdate: this._getTileFeatures(s),
                  remove: [],
                  end: !0,
                  status: se.empty(),
                };
              e.requests.stream.enqueue(r), this._onMessage(r);
            });
        }
      }
      const Re = b.Z.getLogger(
        'esri.views.2d.layers.features.sources.FeatureSource',
      );
      class Oe extends ae {
        constructor(e) {
          super(e);
        }
        async _fetchDataTile(e) {
          const t = this._subscriptions.get(e.key.id);
          let s = !1,
            r = 0,
            i = 0;
          const n = (r, n) => {
            i--, (0, c.k_)(t);
            const o = e.id,
              a = r.reader,
              l = r.query;
            if (!a.exceededTransferLimit) {
              if (((s = !0), 0 !== n && !a.hasFeatures)) {
                const e = {
                  id: o,
                  addOrUpdate: a,
                  end: 0 === i,
                  type: 'append',
                };
                return t.add({ message: e, query: l }), void this._onMessage(e);
              }
              const e = { id: o, addOrUpdate: a, end: 0 === i, type: 'append' };
              return t.add({ message: e, query: l }), void this._onMessage(e);
            }
            const h = {
              id: o,
              addOrUpdate: a,
              end: s && 0 === i,
              type: 'append',
            };
            t.add({ message: h, query: l }), this._onMessage(h);
          };
          let o = 0,
            a = 0;
          for (; !s && a++ < 20; ) {
            let a;
            for (let l = 0; l < o + 1; l++) {
              const o = r++;
              i++,
                (a = this._fetchDataTilePage(e, o, t)
                  .then((e) => e && n(e, o))
                  .catch((t) => {
                    (s = !0),
                      (0, c.D_)(t) ||
                        (Re.error(
                          new I.Z(
                            'mapview-query-error',
                            'Encountered error when fetching tile',
                            { tile: e, error: t },
                          ),
                        ),
                        this._onMessage({
                          id: e.id,
                          addOrUpdate: null,
                          end: s,
                          type: 'append',
                        }));
                  }));
            }
            await a, (0, c.k_)(t), (o = Math.min(o + 2, 6));
          }
        }
        async _fetchDataTilePage(e, t, s) {
          (0, c.k_)(s);
          const r = this._queryInfo,
            i = {
              start: this.pageSize * t,
              num: this.pageSize,
              returnExceededLimitFeatures: !0,
              quantizationParameters: e.getQuantizationParameters(),
            };
          (0, u.pC)(this.maxRecordCountFactor) &&
            (i.maxRecordCountFactor = this.maxRecordCountFactor);
          const n = this.createTileQuery(e, i);
          try {
            const i = s.signal,
              o = await this._queue.push({
                tile: e,
                query: n,
                signal: i,
                depth: t,
              });
            return (
              (0, c.k_)(s),
              o
                ? r !== this._queryInfo
                  ? this._fetchDataTilePage(e, t, s)
                  : { reader: o, query: n }
                : null
            );
          } catch (e) {
            return (0, c.H9)(e), null;
          }
        }
      }
      var ke = s(77734),
        Le = s(61800);
      const Ne = b.Z.getLogger(
        'esri.views.2d.layers.features.sources.SnapshotFeatureSource',
      );
      function De(e, t, s) {
        const r = e.getXHydrated(),
          i = e.getYHydrated(),
          n = t.getColumnForX(r),
          o = Math.floor(t.normalizeCol(n));
        return `${s}/${Math.floor(t.getRowForY(i))}/${o}`;
      }
      function Pe(e, t) {
        if ((0, u.Wi)(e)) return null;
        const s = t.transform,
          r = e.getQuantizationTransform();
        if ((0, u.Wi)(r)) {
          const [t, r] = s.scale,
            [i, n] = s.translate,
            o = -i / t,
            a = 1 / t,
            l = n / r,
            h = 1 / -r;
          return e.transform(o, l, a, h);
        }
        const [i, n] = r.scale,
          [o, a] = r.translate,
          [l, h] = s.scale,
          [c, d] = s.translate,
          p = i / l,
          g = (o - c) / l,
          f = n / h,
          _ = (-a + d) / h;
        return e.transform(g, _, p, f);
      }
      class Ue extends ae {
        constructor(e) {
          super(e),
            (this.mode = 'snapshot'),
            (this._loading = !0),
            (this._controller = new AbortController()),
            (this._downloadPromise = null),
            (this._didSendEnd = !1),
            (this._queries = new Array()),
            (this._invalidated = !1),
            (this._hasAggregates = !1),
            (this._random = new ke.Z(1e3)),
            (this._store = e.store),
            (this._markedIdsBufId = this._store.storage.createBitset());
        }
        destroy() {
          super.destroy(), this._controller.abort();
        }
        get loading() {
          return this._loading;
        }
        get _signal() {
          return this._controller.signal;
        }
        update(e, t) {
          super.update(e, t), (this._hasAggregates = e.targets.aggregate);
        }
        async resend(e = !1) {
          if ((await this._downloadPromise, this._invalidated || e)) {
            const e = (0, u.s3)(
              this._schema.featureCount,
              'Expected featureCount to be defined',
            );
            return (
              (this._invalidated = !1),
              this._subscriptions.forEach((e) => e.clear()),
              (this._downloadPromise = this._download(e)),
              void (await this._downloadPromise)
            );
          }
          const t = this._queries.map(({ query: e, reader: t }) =>
            this._sendPatchQuery(e, t),
          );
          await Promise.all(t),
            this._subscriptions.forEach((e) => {
              e.requests.done.forEach((e) => this._onMessage(e.message));
            });
        }
        async refresh() {
          await this.resend(!0);
        }
        async _sendPatchQuery(e, t) {
          const s = (0, u.pC)(e.outFields) ? e.outFields : [],
            r = this._queryInfo.outFields,
            i = r.filter((e) => -1 === s.indexOf(e));
          if (!i.length) return;
          const n = e.clone(),
            o = this._signal;
          (n.returnGeometry = !1),
            (n.returnCentroid = !1),
            (n.outFields = i),
            (e.outFields = r);
          const a = await this._queue.push({ query: n, depth: 0, signal: o });
          (0, c.k_)({ signal: o }), t.joinAttributes(a);
        }
        async _fetchDataTile(e) {
          if (!this._downloadPromise) {
            const e = (0, u.s3)(
              this._schema.featureCount,
              'Expected featureCount to be defined',
            );
            this._downloadPromise = this._download(e);
          }
          const t = this._store.search(e),
            s = this._subscriptions.get(e.key.id),
            r = t.length - 1;
          for (let i = 0; i < r; i++) {
            const r = Pe(t[i], e),
              n = {
                type: 'append',
                id: e.id,
                addOrUpdate: r,
                end: !1,
                status: se.empty(),
              };
            s.add({ query: null, message: n }),
              this._hasAggregates || (await (0, c.e4)(1)),
              this._onMessage(n);
          }
          const i = Pe(r >= 0 ? t[r] : null, e),
            n = this._didSendEnd,
            o = {
              type: 'append',
              id: e.id,
              addOrUpdate: i,
              end: n,
              status: se.empty(),
            };
          s.add({ query: null, message: o }), this._onMessage(o);
        }
        async _download(e) {
          try {
            await this.whenInitialized();
            const t = this._store.storage.getBitset(this._markedIdsBufId),
              s = new Set();
            t.clear();
            const r = Math.ceil(e / this.pageSize),
              i = Array.from({ length: r }, (e, t) => t)
                .sort((e, t) => this._random.getInt() - this._random.getInt())
                .map((e) => this._downloadPage(e, t, s));
            await Promise.all(i),
              this._store.sweepFeatures(t, this._store.storage),
              this._store.sweepFeatureSets(s);
          } catch (e) {
            Ne.error(
              'mapview-snapshot-source',
              'Encountered and error when downloading feature snapshot',
              e,
            );
          }
          this._sendEnd(), (this._loading = !1);
        }
        async _downloadPage(e, t, s) {
          const r = this.pageSize,
            i = { start: e * r, num: r, cacheHint: !0 };
          (0, u.pC)(this.maxRecordCountFactor) &&
            (i.maxRecordCountFactor = this.maxRecordCountFactor);
          const n = this.createQuery(i),
            o = this._signal,
            a = await this._queue.push({ query: n, depth: e, signal: o });
          (0, c.k_)({ signal: o }),
            this._queries.push({ query: n, reader: a }),
            this._store.insert(a),
            s.add(a.instance);
          const l = a.getCursor();
          for (; l.next(); ) t.set(l.getDisplayId());
          this._send(a);
        }
        _send(e) {
          if (!this._subscriptions.size) return;
          let t = null;
          const s = new Map(),
            r = new Set(),
            i = new Map();
          this._subscriptions.forEach((e) => {
            var n;
            const o = e.tile;
            s.set(o.key.id, null), (t = o.tileInfoView), r.add(o.level);
            const { row: a, col: l } = o.key,
              h = `${o.level}/${a}/${l}`,
              u = null != (n = i.get(h)) ? n : [];
            u.push(e), i.set(h, u);
          });
          for (const n of r) {
            const r = t.getLODInfoAt(n),
              o = e.getCursor();
            for (; o.next(); ) {
              const e = De(o, r, n),
                t = o.getIndex();
              if (i.has(e))
                for (const r of i.get(e)) {
                  const e = r.tile.id;
                  let i = s.get(e);
                  (0, u.Wi)(i) && ((i = []), s.set(e, i)), i.push(t);
                }
            }
          }
          s.forEach((t, s) => {
            if ((0, u.pC)(t)) {
              const r = this._subscriptions.get(s),
                i = {
                  type: 'append',
                  id: s,
                  addOrUpdate: Pe(Le.t.from(e, t), r.tile),
                  end: !1,
                  status: se.empty(),
                };
              r.add({ query: null, message: i }), this._onMessage(i);
            }
          });
        }
        _sendEnd() {
          this._subscriptions.forEach((e) => {
            const t = {
              type: 'append',
              id: e.tile.id,
              addOrUpdate: null,
              end: !0,
              status: se.empty(),
            };
            e.add({ query: null, message: t }), this._onMessage(t);
          }),
            (this._didSendEnd = !0);
        }
      }
      var ze = s(16534),
        Be = s(61027),
        qe = s(29996);
      s(37720), s(66039), b.Z.getLogger('esri.views.2d.engine.webgl');
      var je = s(35371);
      const Ge = b.Z.getLogger(
          'esri.views.layers.2d.features.support.AttributeStore',
        ),
        Ze = () => null,
        We = {
          sharedArrayBuffer: (0, n.Z)('esri-shared-array-buffer'),
          atomics: (0, n.Z)('esri-atomics'),
        };
      function Xe(e, t) {
        return (s) => t(e(s));
      }
      class Ye {
        constructor(e, t, s, r) {
          (this.size = 0), (this.texelSize = 4);
          const { pixelType: i, layout: n, textureOnly: o } = r;
          (this.textureOnly = o || !1),
            (this.pixelType = i),
            (this._ctype = t),
            (this.layout = n),
            this._resetRange(),
            (this._shared = e),
            (this.size = s),
            o || (this.data = this._initData(i, s, e, t));
        }
        get buffer() {
          return (0, u.yw)(this.data, (e) => e.buffer);
        }
        unsetComponentAllTexels(e, t) {
          const s = (0, u.Wg)(this.data);
          for (let r = 0; r < this.size * this.size; r++)
            s[r * this.texelSize + e] &= ~t;
          (this.dirtyStart = 0), (this.dirtyEnd = this.size * this.size - 1);
        }
        setComponentAllTexels(e, t) {
          const s = (0, u.Wg)(this.data);
          for (let r = 0; r < this.size * this.size; r++)
            s[r * this.texelSize + e] |= 255 & t;
          (this.dirtyStart = 0), (this.dirtyEnd = this.size * this.size - 1);
        }
        setComponent(e, t, s) {
          const r = (0, u.Wg)(this.data);
          for (const i of s)
            (r[i * this.texelSize + e] |= t),
              (this.dirtyStart = Math.min(this.dirtyStart, i)),
              (this.dirtyEnd = Math.max(this.dirtyEnd, i));
        }
        setComponentTexel(e, t, s) {
          ((0, u.Wg)(this.data)[s * this.texelSize + e] |= t),
            (this.dirtyStart = Math.min(this.dirtyStart, s)),
            (this.dirtyEnd = Math.max(this.dirtyEnd, s));
        }
        unsetComponentTexel(e, t, s) {
          ((0, u.Wg)(this.data)[s * this.texelSize + e] &= ~t),
            (this.dirtyStart = Math.min(this.dirtyStart, s)),
            (this.dirtyEnd = Math.max(this.dirtyEnd, s));
        }
        getData(e, t) {
          const s = (0, Be.jL)(e);
          return (0, u.Wg)(this.data)[s * this.texelSize + t];
        }
        setData(e, t, s) {
          const r = (0, Be.jL)(e),
            i = 1 << t;
          0 != (this.layout & i)
            ? ((this.data[r * this.texelSize + t] = s),
              (this.dirtyStart = Math.min(this.dirtyStart, r)),
              (this.dirtyEnd = Math.max(this.dirtyEnd, r)))
            : Ge.error(
                'mapview-attributes-store',
                "Tried to set a value for a texel's readonly component",
              );
        }
        lock() {
          this.pixelType === je.Br.UNSIGNED_BYTE &&
            this._shared &&
            We.atomics &&
            'local' !== this._ctype &&
            Atomics.store(this.data, 0, 1);
        }
        unlock() {
          this.pixelType === je.Br.UNSIGNED_BYTE &&
            this._shared &&
            We.atomics &&
            'local' !== this._ctype &&
            Atomics.store(this.data, 0, 0);
        }
        expand(e) {
          if (((this.size = e), !this.textureOnly)) {
            const t = this._initData(
                this.pixelType,
                e,
                this._shared,
                this._ctype,
              ),
              s = (0, u.Wg)(this.data);
            t.set(s), (this.data = t);
          }
        }
        toMessage() {
          const e = this.dirtyStart,
            t = this.dirtyEnd,
            s = this.texelSize;
          if (e > t) return null;
          this._resetRange();
          const r = !(this._shared || 'local' === this._ctype),
            i = this.pixelType,
            n = this.layout,
            o = (0, u.Wg)(this.data);
          return {
            start: e,
            end: t,
            data: (r && o.slice(e * s, (t + 1) * s)) || null,
            pixelType: i,
            layout: n,
          };
        }
        _initData(e, t, s, r) {
          const i = s && 'local' !== r ? SharedArrayBuffer : ArrayBuffer,
            n = (0, qe.UK)(e),
            o = new n(new i(t * t * 4 * n.BYTES_PER_ELEMENT));
          for (let e = 0; e < o.length; e += 4) o[e + 1] = 255;
          return o;
        }
        _resetRange() {
          (this.dirtyStart = 2147483647), (this.dirtyEnd = 0);
        }
      }
      class Ve {
        constructor(e, t) {
          (this._client = e),
            (this.config = t),
            (this._attributeComputeMap = new Map()),
            (this._blocks = new Array()),
            (this._filters = new Array(ze.m4)),
            (this._targetType = 0),
            (this._abortController = new AbortController()),
            (this._hasScaleExpr = !1),
            (this._size = 32),
            (this._idsToHighlight = new Set());
          const s = t.supportsTextureFloat ? je.Br.FLOAT : je.Br.UNSIGNED_BYTE;
          Ze(
            `Creating AttributeStore ${
              We.sharedArrayBuffer ? 'with' : 'without'
            } shared memory`,
          ),
            (this._blockDescriptors = [
              { pixelType: je.Br.UNSIGNED_BYTE, layout: 1 },
              { pixelType: je.Br.UNSIGNED_BYTE, layout: 15, textureOnly: !0 },
              { pixelType: je.Br.UNSIGNED_BYTE, layout: 15, textureOnly: !0 },
              { pixelType: s, layout: 15 },
              { pixelType: s, layout: 15 },
            ]),
            (this._blocks = this._blockDescriptors.map(() => null));
        }
        destroy() {
          this._abortController.abort();
        }
        get hasScaleExpr() {
          return this._hasScaleExpr;
        }
        get _signal() {
          return this._abortController.signal;
        }
        get hasHighlight() {
          return this._idsToHighlight.size > 0;
        }
        update(e, t) {
          this.config = t;
          const s = t.schema.processors[0].storage,
            r = (0, K.Hg)(this._schema, s);
          if (
            ((e.targets.feature || e.targets.aggregate) &&
              (e.storage.data = !0),
            r &&
              ((0, n.Z)('esri-2d-update-debug') &&
                console.debug('Applying Update - AttributeStore:', r),
              (e.storage.data = !0),
              (this._schema = s),
              this._attributeComputeMap.clear(),
              !(0, u.Wi)(s)))
          ) {
            switch (s.target) {
              case 'feature':
                this._targetType = Be.PX;
                break;
              case 'aggregate':
                this._targetType = Be.xp;
            }
            if ('subtype' === s.type)
              for (const e in s.mapping) {
                const t = s.mapping[e];
                if ((0, u.pC)(t))
                  for (const e of t.mapping) this._bindAttribute(e);
              }
            else for (const e of s.mapping) this._bindAttribute(e);
          }
        }
        onTileData(e, t) {
          if ((0, u.Wi)(t.addOrUpdate)) return;
          const s = t.addOrUpdate.getCursor();
          for (; s.next(); ) {
            const e = s.getDisplayId();
            this.setAttributeData(e, s);
          }
        }
        invalidateResources() {
          (this._createResourcesPromise = null),
            this._abortController.abort(),
            (this._abortController = new AbortController());
        }
        async setHighlight(e, t) {
          const s = this._getBlock(0),
            r = t.map((e) => (0, Be.jL)(e));
          s.lock(),
            s.unsetComponentAllTexels(0, 1),
            s.setComponent(0, 1, r),
            s.unlock(),
            this._idsToHighlight.clear();
          for (const t of e) this._idsToHighlight.add(t);
          await this.sendUpdates();
        }
        async updateFilters(e, t) {
          const { config: s, service: r, spatialReference: i } = t,
            { filters: o } = s,
            a = o.map((e, t) => this._updateFilter(e, t, r, i));
          (await Promise.all(a)).some((e) => e) &&
            ((e.storage.filters = !0),
            (0, n.Z)('esri-2d-update-debug') &&
              console.debug(
                'Applying Update - AttributeStore:',
                'Filters changed',
              ));
        }
        setData(e, t, s, r) {
          const i = (0, Be.jL)(e);
          this._ensureSizeForTexel(i), this._getBlock(t).setData(e, s, r);
        }
        getData(e, t, s) {
          return this._getBlock(t).getData(e, s);
        }
        getHighlightFlag(e) {
          return this._idsToHighlight.has(e) ? ze.uG : 0;
        }
        unsetAttributeData(e) {
          const t = (0, Be.jL)(e);
          this._getBlock(0).setData(t, 0, 0);
        }
        setAttributeData(e, t) {
          const s = (0, Be.jL)(e);
          if (
            (this._ensureSizeForTexel(s),
            this._getBlock(0).setData(s, 0, this.getFilterFlags(t)),
            this._targetType !== (0, Be.vs)(e))
          )
            return;
          const r = this._attributeComputeMap,
            i = this.config.supportsTextureFloat ? 1 : 2;
          r.size &&
            r.forEach((e, r) => {
              const n = (r * i) % 4,
                o = Math.floor((r * i) / 4),
                a = this._getBlock(o + ze.aK),
                l = e(t);
              if (this.config.supportsTextureFloat) a.setData(s, n, l);
              else if (l === ze.AI)
                a.setData(s, n, 255), a.setData(s, n + 1, 255);
              else {
                const e = (0, de.uZ)(Math.round(l), -32767, 32766) + 32768,
                  t = 255 & e,
                  r = (65280 & e) >> 8;
                a.setData(s, n, t), a.setData(s, n + 1, r);
              }
            });
        }
        sendUpdates() {
          if (this._nextUpdate) return this._nextUpdate.promise;
          if (this._currUpdate)
            return (this._nextUpdate = (0, c.hh)()), this._nextUpdate.promise;
          const e = {
            blocks: this._blocks.map((e) =>
              (0, u.pC)(e) ? e.toMessage() : null,
            ),
          };
          return (
            (this._currUpdate = this._createResources()
              .then(() => {
                const t = () => {
                    if (((this._currUpdate = null), this._nextUpdate)) {
                      const e = this._nextUpdate;
                      (this._nextUpdate = null),
                        this.sendUpdates().then(() => e.resolve());
                    }
                  },
                  s = this._client.update(e, this._signal).then(t).catch(t);
                return this._client.render(this._signal), s;
              })
              .catch((e) =>
                (0, c.D_)(e)
                  ? ((this._createResourcesPromise = null),
                    this._createResources())
                  : (Ge.error(
                      new I.Z(
                        'mapview-attribute-store',
                        'Encountered an error during client update',
                        e,
                      ),
                    ),
                    Promise.resolve()),
              )),
            this._currUpdate
          );
        }
        _ensureSizeForTexel(e) {
          for (; e >= this._size * this._size; ) if (this._expand()) return;
        }
        _bindAttribute(e) {
          let t;
          if (null != e.fieldIndex)
            e.normalizationField &&
              Ge.warn(
                'mapview-arcade',
                'Ignoring normalizationField specified with an arcade expression which is not supported.',
              ),
              (t = (t) => t.getComputedNumericAtIndex(e.fieldIndex));
          else {
            if (!e.field) return;
            t = e.normalizationField
              ? (t) => {
                  const s = t.readAttribute(e.normalizationField);
                  return s ? t.readAttribute(e.field) / s : null;
                }
              : (t) => t.readAttribute(e.field);
          }
          e.valueRepresentation &&
            (t = Xe(t, (t) =>
              (function (e, t) {
                if (!e || !t) return e;
                switch (t) {
                  case 'radius':
                  case 'distance':
                    return 2 * e;
                  case 'diameter':
                  case 'width':
                    return e;
                  case 'area':
                    return Math.sqrt(e);
                }
                return e;
              })(t, e.valueRepresentation),
            )),
            this._attributeComputeMap.set(
              e.binding,
              Xe(t, (e) => (null === e || isNaN(e) || e === 1 / 0 ? ze.AI : e)),
            );
        }
        _createResources() {
          if ((0, u.pC)(this._createResourcesPromise))
            return this._createResourcesPromise;
          this._getBlock(ze.xl),
            this._getBlock(ze.pU),
            Ze('Initializing AttributeStore');
          const e = {
              shared: We.sharedArrayBuffer && !('local' === this._client.type),
              size: this._size,
              blocks: (0, u.Fd)(this._blocks, (e) => ({
                textureOnly: e.textureOnly,
                buffer: e.buffer,
                pixelType: e.pixelType,
              })),
            },
            t = this._client.initialize(e, this._signal).catch((e) => {
              (0, c.D_)(e)
                ? (this._createResourcesPromise = null)
                : Ge.error(
                    new I.Z(
                      'mapview-attribute-store',
                      'Encountered an error during client initialization',
                      e,
                    ),
                  );
            });
          return (
            (this._createResourcesPromise = t),
            t.then(() =>
              (0, u.Wi)(this._createResourcesPromise)
                ? this._createResources()
                : void 0,
            ),
            t
          );
        }
        _getBlock(e) {
          const t = this._blocks[e];
          if ((0, u.pC)(t)) return t;
          Ze(`Initializing AttributeBlock at index ${e}`);
          const s = We.sharedArrayBuffer,
            r = this._client.type,
            i = new Ye(s, r, this._size, this._blockDescriptors[e]);
          return (
            (this._blocks[e] = i), (this._createResourcesPromise = null), i
          );
        }
        _expand() {
          if (this._size < this.config.maxTextureSize) {
            const e = (this._size <<= 1);
            return (
              Ze('Expanding block size to', e, this._blocks),
              (0, u.JR)(this._blocks, (t) => t.expand(e)),
              (this._createResourcesPromise = null),
              (this._size = e),
              0
            );
          }
          return (
            Ge.error(
              new I.Z(
                'mapview-limitations',
                'Maximum number of onscreen features exceeded.',
              ),
            ),
            -1
          );
        }
        async _updateFilter(e, t, s, r) {
          const i = this._filters[t],
            n = (0, u.pC)(i) && i.hash;
          if (!i && !e) return !1;
          if (n === JSON.stringify(e)) return !1;
          if ((0, u.Wi)(e)) {
            if (!i) return !1;
            const e = 1 << (t + 1),
              s = this._getBlock(0);
            return (
              (this._filters[t] = null),
              s.setComponentAllTexels(0, e),
              this.sendUpdates(),
              !0
            );
          }
          const o = await this._getFilter(t, s);
          return await o.update(e, r), !0;
        }
        async _getFilter(e, t) {
          const r = this._filters[e];
          if ((0, u.pC)(r)) return r;
          const { default: i } = await s.e(9169).then(s.bind(s, 29169)),
            n = new i({
              geometryType: t.geometryType,
              hasM: !1,
              hasZ: !1,
              timeInfo: t.timeInfo,
              fieldsIndex: new f.Z(t.fields),
            });
          return (this._filters[e] = n), n;
        }
        isVisible(e) {
          return !!(2 & this._getBlock(0).getData(e, 0));
        }
        getFilterFlags(e) {
          let t = 0;
          const s = (0, Be.KS)(e.getDisplayId());
          for (let r = 0; r < this._filters.length; r++) {
            const i = !!(s & (1 << r)),
              n = this._filters[r];
            t |= (!i || (0, u.Wi)(n) || n.check(e) ? 1 : 0) << r;
          }
          let r = 0;
          if (this._idsToHighlight.size) {
            const t = e.getObjectId();
            r = this.getHighlightFlag(t);
          }
          return (t << 1) | r;
        }
      }
      function He(e, t, s, r) {
        r % 2 && (r += 1);
        let i = 0,
          n = 0,
          o = -90,
          a = 90,
          l = -180,
          h = 180;
        for (let e = 0; e < r / 2; e++) {
          for (let t = 0; t < 5; t++) {
            const r = (l + h) / 2,
              n = s > r ? 1 : 0;
            (i |= n << (29 - (t + 5 * e))),
              (l = (1 - n) * l + n * r),
              (h = (1 - n) * r + n * h);
          }
          for (let s = 0; s < 5; s++) {
            const r = (o + a) / 2,
              i = t > r ? 1 : 0;
            (n |= i << (29 - (s + 5 * e))),
              (o = (1 - i) * o + i * r),
              (a = (1 - i) * r + i * a);
          }
        }
        (e.geohashX = i), (e.geohashY = n);
      }
      function Qe(e, t, s, r, i) {
        i % 2 && (i += 1);
        let n = 0,
          o = 0,
          a = -90,
          l = 90,
          h = -180,
          u = 180;
        for (let e = 0; e < i / 2; e++) {
          for (let t = 0; t < 5; t++) {
            const s = (h + u) / 2,
              i = r > s ? 1 : 0;
            (n |= i << (29 - (t + 5 * e))),
              (h = (1 - i) * h + i * s),
              (u = (1 - i) * s + i * u);
          }
          for (let t = 0; t < 5; t++) {
            const r = (a + l) / 2,
              i = s > r ? 1 : 0;
            (o |= i << (29 - (t + 5 * e))),
              (a = (1 - i) * a + i * r),
              (l = (1 - i) * r + i * l);
          }
        }
        (e[2 * t] = n), (e[2 * t + 1] = o);
      }
      new Float64Array(2), new Float64Array(2);
      class $e {
        constructor(e = [], t, s = 8096) {
          (this._nodes = 0),
            (this._root = new Je(0, 0, 0)),
            (this._statisticFields = e),
            (this._pool = s ? new te.Z(8096) : null),
            (this._serviceInfo = t);
        }
        _acquire(e, t, s) {
          this._nodes++;
          let r = null;
          return (
            (0, u.pC)(this._pool) && (r = this._pool.dequeue()),
            (0, u.pC)(r) ? r.realloc(e, t, s) : new Je(e, t, s)
          );
        }
        _release(e) {
          this._nodes--, (0, u.pC)(this._pool) && this._pool.enqueue(e);
        }
        get count() {
          return this._root.count;
        }
        get size() {
          return this._nodes;
        }
        get poolSize() {
          return (0, u.R2)(this._pool, 0, (e) => e.size);
        }
        get depth() {
          let e = 0;
          return this._forEachNode((t) => (e = Math.max(e, t.depth))), e;
        }
        dropLevels(e) {
          this._forEachNode((t) => {
            if (t.depth >= e)
              for (let e = 0; e < t.children.length; e++) {
                const s = t.children[e];
                (t.children[e] = null), s && this._release(s);
              }
          });
        }
        clear() {
          this.dropLevels(0);
        }
        insert(e, t, s = 0) {
          const r = F.fromOptimizedFeatures([e], this._serviceInfo).getCursor();
          r.next();
          const i = r.readGeometry();
          if (!i) return;
          const [n, o] = i.coords,
            a = e.geohashX,
            l = e.geohashY;
          this.insertCursor(r, e.displayId, n, o, a, l, t, s);
        }
        insertCursor(e, t, s, r, i, n, o, a = 0) {
          let l = this._root,
            h = 0,
            u = 0,
            c = 0;
          for (; null !== l; ) {
            if (
              (l.depth >= a &&
                ((l.count += 1),
                (l.xTotal += s),
                (l.yTotal += r),
                (l.xGeohashTotal += i),
                (l.yGeohashTotal += n),
                (l.displayId = t),
                this._updateStatisticsCursor(e, l, 1)),
              h >= o)
            )
              return void l.add(t);
            const d = Math.ceil((h + 1) / 2),
              p = Math.floor((h + 1) / 2),
              g = 1 - (h % 2),
              f = 30 - (3 * d + 2 * p),
              _ = 30 - (2 * d + 3 * p),
              m = (i & ((7 * g + 3 * (1 - g)) << f)) >> f,
              y = (n & ((3 * g + 7 * (1 - g)) << _)) >> _,
              I = m + y * (8 * g + 4 * (1 - g));
            (u = (u << (3 * g + 2 * (1 - g))) | m),
              (c = (c << (2 * g + 3 * (1 - g))) | y),
              null == l.children[I] &&
                (l.children[I] = this._acquire(u, c, h + 1)),
              (h += 1),
              (l = l.children[I]);
          }
        }
        remove(e, t) {
          const s = F.fromOptimizedFeatures([e], this._serviceInfo).getCursor();
          s.next();
          const r = s.readGeometry();
          if (!r) return;
          const [i, n] = r.coords,
            o = e.geohashX,
            a = e.geohashY;
          this.removeCursor(s, i, n, o, a, t);
        }
        removeCursor(e, t, s, r, i, n) {
          let o = this._root,
            a = 0;
          for (; null !== o; ) {
            if (
              ((o.count -= 1),
              (o.xTotal -= t),
              (o.yTotal -= s),
              (o.xGeohashTotal -= r),
              (o.yGeohashTotal -= i),
              this._updateStatisticsCursor(e, o, -1),
              a >= n)
            )
              return void o.remove(e.getDisplayId());
            const l = Math.ceil((a + 1) / 2),
              h = Math.floor((a + 1) / 2),
              u = 1 - (a % 2),
              c = 30 - (3 * l + 2 * h),
              d = 30 - (2 * l + 3 * h),
              p =
                ((r & ((7 * u + 3 * (1 - u)) << c)) >> c) +
                ((i & ((3 * u + 7 * (1 - u)) << d)) >> d) *
                  (8 * u + 4 * (1 - u)),
              g = o.children[p];
            1 === g.count && (this._release(g), (o.children[p] = null)),
              (a += 1),
              (o = g);
          }
        }
        find(e, t, s) {
          return this._root.find(e, t, s, 0, 0, 0);
        }
        findSingleOccupancyNode(e, t, s, r, i) {
          let n = this._root;
          for (; null !== n; ) {
            const o = n.depth,
              a = n.xNode,
              l = n.yNode,
              h = 1 - (o % 2),
              u = n.xGeohashTotal / n.count,
              c = n.yGeohashTotal / n.count;
            if (1 === n.count && e < u && u <= s && t < c && c <= r) return n;
            if (o >= i) {
              n = n.next;
              continue;
            }
            const d = Math.ceil((o + 1) / 2),
              p = Math.floor((o + 1) / 2),
              g = 30 - (3 * d + 2 * p),
              f = 30 - (2 * d + 3 * p),
              _ = ~((1 << g) - 1),
              m = ~((1 << f) - 1),
              y = (e & _) >> g,
              I = (t & m) >> f,
              b = (s & _) >> g,
              x = (r & m) >> f,
              w = a << (3 * h + 2 * (1 - h)),
              v = l << (2 * h + 3 * (1 - h)),
              S = w + 8 * h + 4 * (1 - h),
              T = v + 4 * h + 8 * (1 - h),
              C = Math.max(w, y),
              F = Math.max(v, I),
              E = Math.min(S, b),
              A = Math.min(T, x);
            let M = null,
              R = null;
            for (let e = F; e <= A; e++)
              for (let t = C; t <= E; t++) {
                const s = t - w + (e - v) * (8 * h + 4 * (1 - h)),
                  r = n.children[s];
                r &&
                  (M || ((M = r), (M.next = n.next)),
                  R && (R.next = r),
                  (R = r),
                  (r.next = n.next));
              }
            n = M || n.next;
          }
          return null;
        }
        getRegionDisplayIds(e, t, s, r, i) {
          let n = this._root;
          const o = [];
          for (; null !== n; ) {
            const a = n.depth,
              l = n.xNode,
              h = n.yNode;
            if (a >= i) {
              const i = n.xGeohashTotal / n.count,
                a = n.yGeohashTotal / n.count;
              e <= i &&
                i <= s &&
                t <= a &&
                a <= r &&
                n.displayIds.forEach((e) => o.push(e)),
                (n = n.next);
              continue;
            }
            const u = Math.ceil((a + 1) / 2),
              c = Math.floor((a + 1) / 2),
              d = 1 - (a % 2),
              p = 30 - (3 * u + 2 * c),
              g = 30 - (2 * u + 3 * c),
              f = ~((1 << p) - 1),
              _ = ~((1 << g) - 1),
              m = (e & f) >> p,
              y = (t & _) >> g,
              I = (s & f) >> p,
              b = (r & _) >> g,
              x = l << (3 * d + 2 * (1 - d)),
              w = h << (2 * d + 3 * (1 - d)),
              v = x + 8 * d + 4 * (1 - d),
              S = w + 4 * d + 8 * (1 - d),
              T = Math.max(x, m),
              C = Math.max(w, y),
              F = Math.min(v, I),
              E = Math.min(S, b);
            let A = null,
              M = null;
            for (let e = C; e <= E; e++)
              for (let t = T; t <= F; t++) {
                const s = t - x + (e - w) * (8 * d + 4 * (1 - d)),
                  r = n.children[s];
                r &&
                  (A || ((A = r), (A.next = n.next)),
                  M && (M.next = r),
                  (M = r),
                  (r.next = n.next));
              }
            n = A || n.next;
          }
          return o;
        }
        getRegionStatistics(e, t, s, r, i) {
          let n = this._root,
            o = 0,
            a = 0,
            l = 0;
          const h = {};
          let u = 0;
          for (; null !== n; ) {
            const c = n.depth,
              d = n.xNode,
              p = n.yNode;
            if (c >= i) {
              const i = n.xGeohashTotal / n.count,
                c = n.yGeohashTotal / n.count;
              e < i &&
                i <= s &&
                t < c &&
                c <= r &&
                ((o += n.count),
                (a += n.xTotal),
                (l += n.yTotal),
                1 === n.count && (u = n.displayId),
                this._aggregateStatistics(h, n.statistics)),
                (n = n.next);
              continue;
            }
            const g = Math.ceil((c + 1) / 2),
              f = Math.floor((c + 1) / 2),
              _ = 1 - (c % 2),
              m = 30 - (3 * g + 2 * f),
              y = 30 - (2 * g + 3 * f),
              I = ~((1 << m) - 1),
              b = ~((1 << y) - 1),
              x = (e & I) >> m,
              w = (t & b) >> y,
              v = (s & I) >> m,
              S = (r & b) >> y,
              T = d << (3 * _ + 2 * (1 - _)),
              C = p << (2 * _ + 3 * (1 - _)),
              F = T + 8 * _ + 4 * (1 - _),
              E = C + 4 * _ + 8 * (1 - _),
              A = Math.max(T, x),
              M = Math.max(C, w),
              R = Math.min(F, v),
              O = Math.min(E, S);
            let k = null,
              L = null;
            for (let i = M; i <= O; i++)
              for (let c = A; c <= R; c++) {
                const d = c - T + (i - C) * (8 * _ + 4 * (1 - _)),
                  p = n.children[d];
                if (p) {
                  if (i !== M && i !== O && c !== A && c !== R) {
                    const i = p.xGeohashTotal / p.count,
                      n = p.yGeohashTotal / p.count;
                    e < i &&
                      i <= s &&
                      t < n &&
                      n <= r &&
                      ((o += p.count),
                      (a += p.xTotal),
                      (l += p.yTotal),
                      1 === p.count && (u = p.displayId),
                      this._aggregateStatistics(h, p.statistics));
                    continue;
                  }
                  k || ((k = p), (k.next = n.next)),
                    L && (L.next = p),
                    (L = p),
                    (p.next = n.next);
                }
              }
            n = k || n.next;
          }
          return {
            count: o,
            attributes: this._normalizeStatistics(h, o),
            xTotal: a,
            yTotal: l,
            referenceId: u,
          };
        }
        _forEachNode(e) {
          let t = this._root;
          for (; null !== t; ) {
            const s = this._linkChildren(t) || t.next;
            e(t), (t = s);
          }
        }
        _linkChildren(e) {
          let t = null,
            s = null;
          for (let r = 0; r <= e.children.length; r++) {
            const i = e.children[r];
            i &&
              (t || ((t = i), (t.next = e.next)),
              s && (s.next = i),
              (s = i),
              (i.next = e.next));
          }
          return t;
        }
        _updateStatisticsCursor(e, t, s) {
          for (const r of this._statisticFields) {
            const i = r.name,
              n = r.inField
                ? e.readAttribute(r.inField)
                : e.getComputedNumericAtIndex(r.inFieldIndex);
            switch (r.statisticType) {
              case 'norm': {
                t.statistics[i] || (t.statistics[i] = {});
                const o = r.inNormalizationField,
                  a = e.readAttribute(o),
                  l = t.statistics[i].onStatisticField || 0,
                  h = t.statistics[i].onStatisticNormalizationField || 0;
                null == n ||
                  isNaN(n) ||
                  null == a ||
                  0 === a ||
                  isNaN(a) ||
                  ((t.statistics[i].onStatisticField = l + s * n),
                  (t.statistics[i].onStatisticNormalizationField = h + s * a));
                break;
              }
              case 'sum':
              case 'avg': {
                t.statistics[i] ||
                  (t.statistics[i] = { value: 0, nanCount: 0 });
                const e = t.statistics[i].value,
                  r = t.statistics[i].nanCount;
                null == n || isNaN(n)
                  ? (t.statistics[i].nanCount = r + s)
                  : (t.statistics[i].value = e + s * n);
                break;
              }
              case 'avg_angle': {
                t.statistics[i] ||
                  (t.statistics[i] = { x: 0, y: 0, nanCount: 0 });
                const e = t.statistics[i].x,
                  r = t.statistics[i].y,
                  o = t.statistics[i].nanCount,
                  a = Math.PI / 180;
                null == n || isNaN(n)
                  ? (t.statistics[i].nanCount = o + s)
                  : ((t.statistics[i].x = e + s * Math.cos(n * a)),
                    (t.statistics[i].y = r + s * Math.sin(n * a)));
                break;
              }
              case 'mode': {
                t.statistics[i] || (t.statistics[i] = {});
                const e = t.statistics[i][n] || 0;
                t.statistics[i][n] = e + s;
                break;
              }
            }
          }
        }
        _aggregateStatistics(e, t) {
          for (const s of this._statisticFields) {
            const r = s.name;
            switch (s.statisticType) {
              case 'sum':
              case 'avg':
              case 'avg_angle':
              case 'mode':
              case 'norm':
                e[r] || (e[r] = {});
                for (const s in t[r]) {
                  const i = e[r][s] || 0;
                  e[r][s] = i + t[r][s];
                }
            }
          }
        }
        _normalizeStatistics(e, t) {
          const s = {};
          for (const r of this._statisticFields) {
            const i = r.name;
            switch (r.statisticType) {
              case 'norm': {
                const r = e[i];
                if (t && null == r.onStatisticNormalizationField) break;
                if (t && r.onStatisticNormalizationField) {
                  s[i] = r.onStatisticField / r.onStatisticNormalizationField;
                  break;
                }
                s[i] = 0;
                break;
              }
              case 'sum': {
                if (!t) break;
                const { value: r, nanCount: n } = e[i];
                if (!(t - n)) break;
                s[i] = r;
                break;
              }
              case 'avg': {
                if (!t) break;
                const { value: r, nanCount: n } = e[i];
                if (!(t - n)) break;
                s[i] = r / (t - n);
                break;
              }
              case 'avg_angle': {
                if (!t) break;
                const { x: r, y: n, nanCount: o } = e[i];
                if (!(t - o)) break;
                const a = r / (t - o),
                  l = n / (t - o),
                  h = 180 / Math.PI,
                  u = Math.atan2(l, a) * h;
                s[i] = u;
                break;
              }
              case 'mode': {
                const t = e[i];
                let r = 0,
                  n = null;
                for (const e in t) {
                  const s = t[e];
                  s > r && ((r = s), (n = e));
                }
                s[i] = 'null' === n ? null : n;
                break;
              }
            }
          }
          return s;
        }
      }
      class Je {
        constructor(e, t, s) {
          (this.count = 0),
            (this.xTotal = 0),
            (this.yTotal = 0),
            (this.statistics = {}),
            (this.displayId = 0),
            (this.displayIds = new Set()),
            (this.next = null),
            (this.depth = 0),
            (this.xNode = 0),
            (this.yNode = 0),
            (this.xGeohashTotal = 0),
            (this.yGeohashTotal = 0),
            (this.children = new Array(32));
          for (let e = 0; e < this.children.length; e++)
            this.children[e] = null;
          (this.xNode = e), (this.yNode = t), (this.depth = s);
        }
        realloc(e, t, s) {
          for (let e = 0; e < this.children.length; e++)
            this.children[e] = null;
          return (
            (this.xNode = e),
            (this.yNode = t),
            (this.depth = s),
            (this.next = null),
            (this.xGeohashTotal = 0),
            (this.yGeohashTotal = 0),
            (this.xTotal = 0),
            (this.yTotal = 0),
            (this.count = 0),
            (this.statistics = {}),
            this.displayIds.clear(),
            this
          );
        }
        add(e) {
          this.displayIds.add(e);
        }
        remove(e) {
          this.displayIds.delete(e);
        }
        getLngLatBounds() {
          const e = this.depth,
            t = Math.ceil(e / 2),
            s = Math.floor(e / 2),
            r = 30 - (3 * t + 2 * s),
            i = 30 - (2 * t + 3 * s);
          return (function (e, t) {
            let s = -90,
              r = 90,
              i = -180,
              n = 180;
            for (let o = 0; o < t; o++) {
              const t = Math.ceil((o + 1) / 2),
                a = Math.floor((o + 1) / 2),
                l = 1 - (o % 2),
                h = 30 - (3 * t + 2 * a),
                u = 30 - (2 * t + 3 * a),
                c = 2 * l + 3 * (1 - l),
                d = (((7 * l + 3 * (1 - l)) << h) & e.geohashX) >> h,
                p = (((3 * l + 7 * (1 - l)) << u) & e.geohashY) >> u;
              for (let e = 3 * l + 2 * (1 - l) - 1; e >= 0; e--) {
                const t = (i + n) / 2,
                  s = d & (1 << e) ? 1 : 0;
                (i = (1 - s) * i + s * t), (n = (1 - s) * t + s * n);
              }
              for (let e = c - 1; e >= 0; e--) {
                const t = (s + r) / 2,
                  i = p & (1 << e) ? 1 : 0;
                (s = (1 - i) * s + i * t), (r = (1 - i) * t + i * r);
              }
            }
            return [i, s, n, r];
          })(
            { geohashX: this.xNode << r, geohashY: this.yNode << i },
            this.depth,
          );
        }
        find(e, t, s, r, i, n) {
          if (r >= s) return this;
          const o = 1 - (r % 2),
            a = 3 * o + 2 * (1 - o),
            l = 2 * o + 3 * (1 - o),
            h = 30 - i - a,
            u = 30 - n - l,
            c =
              ((e & ((7 * o + 3 * (1 - o)) << h)) >> h) +
              ((t & ((3 * o + 7 * (1 - o)) << u)) >> u) * (8 * o + 4 * (1 - o)),
            d = this.children[c];
          return null == d ? null : d.find(e, t, s, r + 1, i + a, n + l);
        }
      }
      var Ke = s(68441),
        et = s(37427),
        tt = s(59999);
      class st extends T.nd {
        constructor(e, t, s, r, i) {
          super(new A.Z([], [t, s]), r, null, e), (this.geohashBoundsInfo = i);
        }
        get count() {
          return this.attributes.cluster_count;
        }
        static create(e, t, s, r, i, n, o, a) {
          const l = new st(t, s, r, n, o);
          return (
            (l.displayId = e.createDisplayId(!0)),
            (l.referenceId = a),
            (l.tileLevel = i),
            l
          );
        }
        update(e, t, s, r, i, n) {
          return (
            (this.geometry.coords[0] = e),
            (this.geometry.coords[1] = t),
            (this.tileLevel = s),
            (this.attributes = r),
            (this.geohashBoundsInfo = i),
            (this.referenceId = null),
            (this.referenceId = n),
            this
          );
        }
        toJSON() {
          return {
            objectId: this.objectId,
            referenceId:
              1 === this.attributes.cluster_count ? this.referenceId : null,
            attributes: { ...this.attributes, clusterId: this.objectId },
            geometry: {
              x: this.geometry.coords[0],
              y: this.geometry.coords[1],
            },
          };
        }
      }
      function rt(e) {
        return 57.29577951308232 * e;
      }
      class it extends tt.J {
        constructor(e, t, s, r) {
          super(e, s),
            (this.events = new J.Z()),
            (this._geohashLevel = 0),
            (this._tileLevel = 0),
            (this._aggregateValueRanges = {}),
            (this._aggregateValueRangesChanged = !1),
            (this._geohashBuf = []),
            (this._clusters = new Map()),
            (this._tiles = new Map()),
            (this._serviceInfo = r),
            (this.geometryInfo = e.geometryInfo),
            (this._spatialReference = t),
            (this._projectionSupportCheck = (0, et._W)(t, ve.Z.WGS84)),
            (this._bitsets.geohash = s.getBitset(s.createBitset())),
            (this._bitsets.inserted = s.getBitset(s.createBitset()));
        }
        async updateSchema(e, t) {
          const s = this._schema;
          try {
            await super.updateSchema(e, t), await this._projectionSupportCheck;
          } catch (e) {}
          const r = (0, K.Hg)(s, t);
          t && (!(0, u.Wi)(r) || e.source || e.storage.filters)
            ? (((0, K.uD)(r, 'params.fields') || !this._tree || e.source) &&
                ((this._tree = new $e(
                  this._statisticFields,
                  this._serviceInfo,
                )),
                this._rebuildTree(),
                (0, n.Z)('esri-2d-update-debug') &&
                  console.debug(
                    'Aggregate mesh needs update due to tree changing',
                  )),
              (0, n.Z)('esri-2d-update-debug') &&
                console.debug('Applying Update - ClusterStore:', r),
              (e.targets[t.name] = !0),
              (e.mesh = !1),
              (this._aggregateValueRanges = {}))
            : s && (e.mesh = !0);
        }
        clear() {
          this._rebuildTree();
        }
        sweepFeatures(e, t) {
          this._bitsets.inserted.forEachSet((s) => {
            if (!e.has(s)) {
              const e = t.lookupByDisplayIdUnsafe(s);
              this._remove(e);
            }
          });
        }
        sweepClusters(e, t, s) {
          this._clusters.forEach((r, i) => {
            r &&
              r.tileLevel !== s &&
              (e.releaseDisplayId(r.displayId),
              t.unsetAttributeData(r.displayId),
              this._clusters.delete(i));
          });
        }
        onTileData(e, t, s, r, i = !0) {
          if (!this._schema || (0, u.Wi)(t.addOrUpdate)) return t;
          const n = this._getTransforms(e, this._spatialReference);
          {
            const e = t.addOrUpdate.getCursor();
            for (; e.next(); ) this._update(e, r);
          }
          if (t.status.mesh || !i) return t;
          const o = new Array(),
            a = this._schema.params.clusterRadius;
          this._getClustersForTile(o, e, a, s, n),
            (t.addOrUpdate = F.fromOptimizedFeatures(o, this._serviceInfo)),
            t.addOrUpdate.attachStorage(s),
            (t.end = !0);
          {
            const r = t.addOrUpdate.getCursor();
            for (; r.next(); ) {
              const t = r.getDisplayId();
              this._bitsets.computed.unset(t),
                this.setComputedAttributes(s, r, t, e.scale);
            }
          }
          return (
            this._aggregateValueRangesChanged &&
              t.end &&
              (this.events.emit('valueRangesChanged', {
                valueRanges: this._aggregateValueRanges,
              }),
              (this._aggregateValueRangesChanged = !1)),
            t
          );
        }
        onTileUpdate({ added: e, removed: t }) {
          if (e.length) {
            const t = e[0].level;
            (this._tileLevel = t), this._setGeohashLevel(t);
          }
          if (!this._schema) return;
          const s = this._schema.params.clusterRadius;
          t.forEach((e) => {
            this._tiles.delete(e.key.id),
              this._markTileClustersForDeletion(e, s);
          });
        }
        getAggregate(e) {
          for (const t of this._clusters.values())
            if (((null == t ? void 0 : t.displayId) & Be._I) == (e & Be._I))
              return t.toJSON();
          return null;
        }
        getAggregates() {
          const e = [];
          for (const t of this._clusters.values())
            (null == t ? void 0 : t.tileLevel) === this._tileLevel &&
              e.push(t.toJSON());
          return e;
        }
        getDisplayId(e) {
          const t = this._clusters.get(e);
          return t ? t.displayId : null;
        }
        getFeatureDisplayIdsForAggregate(e) {
          const t = this._clusters.get(e);
          if (!t) return [];
          const s = t.geohashBoundsInfo;
          return this._tree.getRegionDisplayIds(
            s.xLL,
            s.yLL,
            s.xTR,
            s.yTR,
            s.level,
          );
        }
        getDisplayIdForReferenceId(e) {
          for (const t of this._clusters.values())
            if ((null == t ? void 0 : t.referenceId) === e) return t.displayId;
          return null;
        }
        getAggregateValueRanges() {
          return this._aggregateValueRanges;
        }
        forEach(e) {
          for (const [t, s] of this._clusters) s && e(s, t);
        }
        size() {
          let e = 0;
          return this.forEach((t) => e++), e;
        }
        _rebuildTree() {
          this._bitsets.computed.clear(),
            this._bitsets.inserted.clear(),
            this._tree && this._tree.clear();
        }
        _remove(e) {
          const t = e.getDisplayId(),
            s = e.getXHydrated(),
            r = e.getYHydrated(),
            i = this._geohashBuf[2 * t],
            n = this._geohashBuf[2 * t + 1];
          this._bitsets.inserted.has(t) &&
            (this._bitsets.inserted.unset(t),
            this._tree.removeCursor(e, s, r, i, n, this._geohashLevel));
        }
        _update(e, t) {
          const s = e.getDisplayId(),
            r = this._bitsets.inserted,
            i = t.isVisible(s);
          if (i === r.has(s)) return;
          if (!i) return void this._remove(e);
          const n = e.getXHydrated(),
            o = e.getYHydrated();
          if (!this._setGeohash(s, n, o)) return;
          const a = this._geohashBuf[2 * s],
            l = this._geohashBuf[2 * s + 1];
          this._tree.insertCursor(e, s, n, o, a, l, this._geohashLevel),
            r.set(s);
        }
        _setGeohash(e, t, s) {
          if (this._bitsets.geohash.has(e)) return !0;
          const r = this._geohashBuf;
          if (this._spatialReference.isWebMercator) {
            const i = rt(t / Ke.sv.radius),
              n = i - 360 * Math.floor((i + 180) / 360);
            Qe(
              r,
              e,
              rt(Math.PI / 2 - 2 * Math.atan(Math.exp(-s / Ke.sv.radius))),
              n,
              12,
            );
          } else {
            const i = (0, et.iV)(
              { x: t, y: s },
              this._spatialReference,
              ve.Z.WGS84,
            );
            if (!i) return !1;
            Qe(r, e, i.y, i.x, 12);
          }
          return this._bitsets.geohash.set(e), !0;
        }
        _getClustersForTile(e, t, s, r, i, n = !0) {
          const o = this._schema.params.clusterPixelBuffer,
            a = 2 * s,
            l = this._getGeohashLevel(t.key.level),
            h = Math.ceil((2 ** t.key.level * ze.I_) / a),
            c = Math.ceil(o / a) + 0,
            d = Math.ceil(ze.I_ / a),
            { row: g, col: f } = t.key,
            _ = f * ze.I_,
            m = g * ze.I_,
            y = Math.floor(_ / a) - c,
            I = Math.floor(m / a) - c,
            b = y + d + 2 * c,
            x = I + d + 2 * c,
            w = t.tileInfoView.getLODInfoAt(t.key.level);
          for (let s = y; s <= b; s++)
            for (let o = I; o <= x; o++) {
              let a = s;
              w.wrap && (a = s < 0 ? s + h : s % h);
              const c = w.wrap && s < 0,
                d = w.wrap && s % h !== s,
                g = this._lookupCluster(r, w, t.key.level, a, o, l);
              if ((0, u.pC)(g)) {
                const t = (0, u.yw)(i, (e) =>
                  c ? e.left : d ? e.right : e.tile,
                );
                if (n && (0, u.Wi)(t)) continue;
                if (!g.count) continue;
                if ((0, u.pC)(t) && n) {
                  const s = g.geometry.clone();
                  let r = g.attributes;
                  (s.coords[0] = (0, p.Jd)(t, s.coords[0])),
                    (s.coords[1] = (0, p.IN)(t, s.coords[1])),
                    1 === g.count &&
                      (0, u.pC)(g.referenceId) &&
                      (r = { ...g.attributes, referenceId: g.referenceId });
                  const i = new T.u_(s, r);
                  (i.displayId = g.displayId), e.push(i);
                }
              }
            }
        }
        _getGeohashLevel(e) {
          return Math.min(Math.ceil(e / 2 + 2), 12);
        }
        _setGeohashLevel(e) {
          const t = this._getGeohashLevel(e),
            s = 1 * (Math.floor(t / 1) + 1) - 1;
          if (this._geohashLevel !== s)
            return (
              (this._geohashLevel = s),
              this._rebuildTree(),
              void this._bitsets.geohash.clear()
            );
        }
        _getTransforms(e, t) {
          const s = {
              originPosition: 'upperLeft',
              scale: [e.resolution, e.resolution],
              translate: [e.bounds[0], e.bounds[3]],
            },
            r = (0, l.C5)(t);
          if (!r) return { tile: s, left: null, right: null };
          const [i, n] = r.valid;
          return {
            tile: s,
            left: { ...s, translate: [n, e.bounds[3]] },
            right: { ...s, translate: [i - n + e.bounds[0], e.bounds[3]] },
          };
        }
        _getClusterId(e, t, s) {
          return ((15 & e) << 28) | ((16383 & t) << 14) | (16383 & s);
        }
        _markForDeletion(e, t, s) {
          const r = this._getClusterId(e, t, s);
          this._clusters.delete(r);
        }
        _getClusterBounds(e, t, s) {
          const r = this._schema.params.clusterRadius,
            i = 2 * r;
          let n = s % 2 ? t * i : t * i - r;
          const o = s * i;
          let a = n + i;
          const l = o - i,
            h = 2 ** e.level * ze.I_;
          e.wrap && n < 0 && (n = 0), e.wrap && a > h && (a = h);
          const u = n / ze.I_,
            c = o / ze.I_,
            d = a / ze.I_,
            p = l / ze.I_;
          return [
            e.getXForColumn(u),
            e.getYForRow(c),
            e.getXForColumn(d),
            e.getYForRow(p),
          ];
        }
        _lookupCluster(e, t, s, r, i, n) {
          const o = this._getClusterId(s, r, i),
            a = this._clusters.get(o),
            [l, h, c, d] = this._getClusterBounds(t, r, i),
            p = { x: l, y: h },
            g = { x: c, y: d };
          let f = 0,
            _ = 0,
            m = 0,
            y = 0;
          if (this._spatialReference.isWebMercator) {
            {
              const e = rt(p.x / Ke.sv.radius);
              (f = e - 360 * Math.floor((e + 180) / 360)),
                (_ = rt(
                  Math.PI / 2 - 2 * Math.atan(Math.exp(-p.y / Ke.sv.radius)),
                ));
            }
            {
              const e = rt(g.x / Ke.sv.radius);
              (m = e - 360 * Math.floor((e + 180) / 360)),
                (y = rt(
                  Math.PI / 2 - 2 * Math.atan(Math.exp(-g.y / Ke.sv.radius)),
                ));
            }
          } else {
            const e = (0, et.iV)(p, this._spatialReference, ve.Z.WGS84),
              t = (0, et.iV)(g, this._spatialReference, ve.Z.WGS84);
            if (!e || !t) return null;
            (f = e.x), (_ = e.y), (m = t.x), (y = t.y);
          }
          const I = { geohashX: 0, geohashY: 0 },
            b = { geohashX: 0, geohashY: 0 };
          He(I, _, f, n), He(b, y, m, n);
          const x = I.geohashX,
            w = I.geohashY,
            v = b.geohashX,
            S = b.geohashY,
            T = { xLL: x, yLL: w, xTR: v, yTR: S, level: n },
            C = this._tree.getRegionStatistics(x, w, v, S, n),
            { count: F, xTotal: E, yTotal: A, referenceId: M } = C,
            R = F ? E / F : 0,
            O = F ? A / F : 0;
          if (0 === F) return this._clusters.set(o, null), null;
          const k = { cluster_count: F, ...C.attributes },
            L = (0, u.pC)(a)
              ? a.update(R, O, s, k, T, M)
              : st.create(e, o, R, O, s, k, T, M);
          return (
            0 === F &&
              ((L.geometry.coords[0] = (l + c) / 2),
              (L.geometry.coords[1] = (h + d) / 2)),
            this._clusters.set(o, L),
            this._updateAggregateValueRangeForCluster(L, L.tileLevel),
            L
          );
        }
        _updateAggregateValueRangeForCluster(e, t) {
          const s = this._aggregateValueRanges[t] || {
              minValue: 1 / 0,
              maxValue: 0,
            },
            r = s.minValue,
            i = s.maxValue;
          (s.minValue = Math.min(r, e.count)),
            (s.maxValue = Math.max(i, e.count)),
            (this._aggregateValueRanges[t] = s),
            (r === s.minValue && i === s.maxValue) ||
              (this._aggregateValueRangesChanged = !0);
        }
        _markTileClustersForDeletion(e, t) {
          const s = 2 * t,
            r = Math.ceil(ze.I_ / s),
            { row: i, col: n } = e.key,
            o = n * ze.I_,
            a = i * ze.I_,
            l = Math.floor(o / s),
            h = Math.floor(a / s);
          for (let t = l; t < l + r; t++)
            for (let s = h; s < h + r; s++)
              this._markForDeletion(e.key.level, t, s);
        }
      }
      class nt {
        constructor() {
          (this._freeIds = []), (this._idCounter = 1);
        }
        createId(e = !1) {
          return (0, Be.QS)(this._getFreeId(), e);
        }
        releaseId(e) {
          this._freeIds.push(e);
        }
        _getFreeId() {
          return this._freeIds.length ? this._freeIds.pop() : this._idCounter++;
        }
      }
      var ot = s(93054);
      function at(e, t, s) {
        if (!(e.length > t)) for (; e.length <= t; ) e.push(s);
      }
      class lt {
        constructor() {
          (this._numerics = []),
            (this._strings = []),
            (this._idGenerator = new nt()),
            (this._allocatedSize = 256),
            (this._bitsets = []),
            (this._instanceIds = []),
            (this._bounds = []);
        }
        createBitset() {
          const e = this._bitsets.length;
          return (
            this._bitsets.push(ot.p.create(this._allocatedSize, Be._I)), e + 1
          );
        }
        getBitset(e) {
          return this._bitsets[e - 1];
        }
        _expand() {
          this._allocatedSize <<= 1;
          for (const e of this._bitsets) e.resize(this._allocatedSize);
        }
        _ensureNumeric(e, t) {
          this._numerics[e] || (this._numerics[e] = []),
            at(this._numerics[e], t, 0);
        }
        _ensureInstanceId(e) {
          at(this._instanceIds, e, 0);
        }
        _ensureString(e, t) {
          this._strings[e] || (this._strings[e] = []),
            at(this._strings[e], t, null);
        }
        createDisplayId(e = !1) {
          const t = this._idGenerator.createId();
          return t > this._allocatedSize && this._expand(), (0, Be.QS)(t, e);
        }
        releaseDisplayId(e) {
          for (const t of this._bitsets) t.unset(e);
          return this._idGenerator.releaseId(e & Be._I);
        }
        getComputedNumeric(e, t) {
          return this.getComputedNumericAtIndex(e & Be._I, 0);
        }
        setComputedNumeric(e, t, s) {
          return this.setComputedNumericAtIndex(e & Be._I, s, 0);
        }
        getComputedString(e, t) {
          return this.getComputedStringAtIndex(e & Be._I, 0);
        }
        setComputedString(e, t, s) {
          return this.setComputedStringAtIndex(e & Be._I, 0, s);
        }
        getComputedNumericAtIndex(e, t) {
          const s = e & Be._I;
          return this._ensureNumeric(t, s), this._numerics[t][s];
        }
        setComputedNumericAtIndex(e, t, s) {
          const r = e & Be._I;
          this._ensureNumeric(t, r), (this._numerics[t][r] = s);
        }
        getInstanceId(e) {
          const t = e & Be._I;
          return this._ensureInstanceId(t), this._instanceIds[t];
        }
        setInstanceId(e, t) {
          const s = e & Be._I;
          this._ensureInstanceId(s), (this._instanceIds[s] = t);
        }
        getComputedStringAtIndex(e, t) {
          const s = e & Be._I;
          return this._ensureString(t, s), this._strings[t][s];
        }
        setComputedStringAtIndex(e, t, s) {
          const r = e & Be._I;
          this._ensureString(t, r), (this._strings[t][r] = s);
        }
        getXMin(e) {
          return this._bounds[4 * (e & Be._I)];
        }
        getYMin(e) {
          return this._bounds[4 * (e & Be._I) + 1];
        }
        getXMax(e) {
          return this._bounds[4 * (e & Be._I) + 2];
        }
        getYMax(e) {
          return this._bounds[4 * (e & Be._I) + 3];
        }
        setBounds(e, t) {
          const s = t.readHydratedGeometry();
          if (!s || !s.coords.length) return !1;
          let r = 1 / 0,
            i = 1 / 0,
            n = -1 / 0,
            o = -1 / 0;
          s.forEachVertex((e, t) => {
            (r = Math.min(r, e)),
              (i = Math.min(i, t)),
              (n = Math.max(n, e)),
              (o = Math.max(o, t));
          });
          const a = e & Be._I;
          return (
            at(this._bounds, 4 * a + 4, 0),
            (this._bounds[4 * a] = r),
            (this._bounds[4 * a + 1] = i),
            (this._bounds[4 * a + 2] = n),
            (this._bounds[4 * a + 3] = o),
            !0
          );
        }
      }
      function ht(e) {
        if (
          !(0, c.D_)(e) &&
          !(function (e) {
            return 'worker:port-closed' === e.name;
          })(e)
        )
          throw e;
      }
      function ut(e) {
        return 'feature' === e.type && 'snapshot' === e.mode;
      }
      let ct = class extends i.r {
        constructor() {
          super(...arguments),
            (this._storage = new lt()),
            (this._markedIdsBufId = this._storage.createBitset()),
            (this._lastCleanup = performance.now()),
            (this._cleanupNeeded = !1),
            (this._invalidated = !1),
            (this._tileToResolver = new Map()),
            (this._didEdit = !1),
            (this.tileStore = null),
            (this.config = null),
            (this.processor = null),
            (this.remoteClient = null),
            (this.service = null);
        }
        initialize() {
          this._initAttributeStore(),
            this._initStores(),
            this._initQueryEngine(),
            this._initSource(),
            (this._updateQueue = new ne.e({
              concurrency: 'geoevent' === this._source.type ? 1 : 4,
              process: (e, t) => this._onTileMessage(e, { signal: t }),
            })),
            this.handles.add([
              this.tileStore.on('update', this.onTileUpdate.bind(this)),
              this.watch('updating', (e) => !e && this.onIdle()),
            ]),
            (this._checkUpdating = setInterval(
              () => this.notifyChange('updating'),
              300,
            ));
        }
        async startup() {
          this._initAttributeStore();
        }
        _initSource() {
          const e = this.tileStore.tileScheme;
          (this._source = (function (e, t, s, r, i, n) {
            const o = (function (e, t, s, r, i, n) {
              switch (e.type) {
                case 'snapshot':
                  return {
                    type: 'feature',
                    origin: 'snapshot',
                    featureCount: (0, u.Pt)(e.featureCount, 0),
                    serviceInfo: e,
                    onMessage: r,
                    outSR: t,
                    tileInfoView: s,
                    canAcceptRequest: i,
                    store: n,
                  };
                case 'stream':
                  return {
                    type: 'geoevent',
                    serviceInfo: e,
                    onMessage: r,
                    outSR: t,
                    canAcceptRequest: i,
                  };
                case 'memory':
                case 'on-demand':
                  return {
                    type: 'feature',
                    serviceInfo: e,
                    onMessage: r,
                    outSR: t,
                    origin: (function (e) {
                      return Array.isArray(e)
                        ? 'local'
                        : 'path' in e && (0, m.M8)(e.path)
                        ? 'hosted'
                        : 'unknown';
                    })(e.source),
                    tileInfoView: s,
                    canAcceptRequest: i,
                  };
              }
            })(e, t, s, r, i, n);
            switch (o.type) {
              case 'feature':
                switch (o.origin) {
                  case 'hosted':
                  case 'local':
                    return new Oe(o);
                  case 'snapshot':
                    return new Ue(o);
                  case 'unknown':
                    return new ue(o);
                }
              case 'geoevent':
                return new Me(o);
            }
          })(
            this.service,
            this.spatialReference,
            e,
            (e, t) => ((this._invalidated = !0), this._patchTile(e, t)),
            () => this._updateQueue.length < 50,
            this.featureStore,
          )),
            this._proxyEvents();
        }
        _proxyEvents() {
          if ('geoevent' === this._source.type) {
            const e = this._source.events;
            this.handles.add([
              e.on('connectionStatus', (e) =>
                this.remoteClient
                  .invoke('setProperty', {
                    propertyName: 'connectionStatus',
                    value: e,
                  })
                  .catch(ht),
              ),
              e.on('errorString', (e) =>
                this.remoteClient
                  .invoke('setProperty', {
                    propertyName: 'errorString',
                    value: e,
                  })
                  .catch(ht),
              ),
              e.on('feature', (e) =>
                this.remoteClient
                  .invoke('emitEvent', {
                    name: 'data-received',
                    event: {
                      attributes: e.attributes,
                      centroid: e.centroid,
                      geometry: e.geometry,
                    },
                  })
                  .catch(ht),
              ),
              e.on('updateRate', (e) =>
                this.remoteClient
                  .invoke('emitEvent', { name: 'update-rate', event: { ...e } })
                  .catch(ht),
              ),
            ]);
          }
        }
        _initAttributeStore() {
          this.attributeStore
            ? this.attributeStore.invalidateResources()
            : (this.attributeStore = new Ve(
                {
                  type: 'remote',
                  initialize: (e, t) =>
                    (0, c.R8)(
                      this.remoteClient
                        .invoke(
                          'tileRenderer.featuresView.attributeView.initialize',
                          e,
                          { signal: t },
                        )
                        .catch(ht),
                    ),
                  update: (e, t) =>
                    (0, c.R8)(
                      this.remoteClient
                        .invoke(
                          'tileRenderer.featuresView.attributeView.requestUpdate',
                          e,
                          { signal: t },
                        )
                        .catch(ht),
                    ),
                  render: (e) =>
                    (0, c.R8)(
                      this.remoteClient
                        .invoke(
                          'tileRenderer.featuresView.requestRender',
                          void 0,
                          { signal: e },
                        )
                        .catch(ht),
                    ),
                },
                this.config,
              ));
        }
        _initStores() {
          const e = 'snapshot' === this.service.type ? 'snapshot' : 'on-demand',
            t = {
              geometryInfo: {
                geometryType: this.service.geometryType,
                hasM: !1,
                hasZ: !1,
              },
              spatialReference: this.spatialReference,
              fieldsIndex: this.fieldsIndex,
              fields: this.service.fields,
            };
          (this.featureStore = new _.p(t, this._storage, e)),
            (this.aggregateStore = new it(
              t,
              this.spatialReference,
              this._storage,
              this.service,
            )),
            this.handles.add(
              this.aggregateStore.events.on('valueRangesChanged', (e) => {
                this.remoteClient
                  .invoke('emitEvent', {
                    name: 'valueRangesChanged',
                    event: { valueRanges: e.valueRanges },
                  })
                  .catch(ht);
              }),
            );
        }
        _initQueryEngine() {
          var e;
          const t = this;
          null == (e = this.queryEngine) || e.destroy(),
            (this.queryEngine = new g.Z({
              definitionExpression: this.config.definitionExpression,
              fields: this.service.fields,
              geometryType: this.service.geometryType,
              objectIdField: this.service.objectIdField,
              hasM: !1,
              hasZ: !1,
              spatialReference: this.spatialReference.toJSON(),
              cacheSpatialQueries: !0,
              featureStore: this.featureStore,
              aggregateAdapter: {
                getFeatureObjectIds: (e) =>
                  t.aggregateStore
                    .getFeatureDisplayIdsForAggregate(e)
                    .map((e) => t.getObjectId(e)),
              },
              timeInfo: this.service.timeInfo,
            }));
        }
        destroy() {
          this._updateQueue.destroy(),
            this._source.destroy(),
            this.queryEngine.destroy(),
            this.attributeStore && this.attributeStore.destroy();
          for (const e of this.tileStore.tiles) this._source.unsubscribe(e);
          clearInterval(this._checkUpdating);
        }
        get fieldsIndex() {
          return new f.Z(this.service.fields);
        }
        get hasAggregates() {
          return !!this.config.schema.targets.aggregate;
        }
        get spatialReference() {
          return this.tileStore.tileScheme.spatialReference;
        }
        get updating() {
          return this.isUpdating();
        }
        isUpdating() {
          return this._source.updating || !!this._updateQueue.length;
        }
        enableEvent(e) {
          this._source.enableEvent(e.name, e.value);
        }
        pause() {
          this._updateQueue.pause(), this._updateQueue.clear();
        }
        pauseStream() {
          'geoevent' === this._source.type && this._source.pauseStream();
        }
        resumeStream() {
          'geoevent' === this._source.type && this._source.resumeStream();
        }
        async update(e, t) {
          this._set('config', t),
            (this._schema = t.schema),
            this._initQueryEngine(),
            await Promise.all([
              this._source.update(e, t.schema.source),
              this.featureStore.updateSchema(e, t.schema.targets.feature),
              this.attributeStore.update(e, t),
              this.attributeStore.updateFilters(e, this),
            ]),
            await this.aggregateStore.updateSchema(
              e,
              t.schema.targets.aggregate,
            ),
            (0, n.Z)('esri-2d-update-debug') && e.describe();
        }
        async applyUpdate(e) {
          e.mesh && this.clearTiles(),
            this._updateQueue.resume(),
            await this._source.applyUpdate(e),
            this.notifyChange('updating'),
            await (0, d.N1)(() => !this.updating),
            this.hasAggregates &&
              (await (0, c.e4)(10), await (0, d.N1)(() => !this.updating));
        }
        async onEdits({ edits: e }) {
          (0, n.Z)('esri-2d-update-debug') &&
            console.debug('Applying Edit:', e),
            (this._didEdit = !0);
          try {
            const t = e.removed.map((e) =>
                e.objectId && -1 !== e.objectId
                  ? e.objectId
                  : this._lookupObjectIdByGlobalId(e.globalId),
              ),
              s = e.addOrModified.map(({ objectId: e }) => e);
            this.featureStore.invalidate(),
              await this._source.edit(s, t),
              this.clearTiles(),
              this.notifyChange('updating'),
              this.aggregateStore.clear(),
              await this._source.resend(),
              await (0, d.N1)(() => !this.updating);
          } catch (e) {}
        }
        async refresh(e) {
          if (!e) {
            const e = se.empty();
            return (e.storage.filters = !0), this.applyUpdate(e);
          }
          this.featureStore.invalidate(),
            this.clearTiles(),
            this._source.refresh(),
            (this._cleanupNeeded = !0),
            this.notifyChange('updating'),
            await (0, d.N1)(() => !this.updating);
        }
        clearTiles() {
          for (const e of this.tileStore.tiles) this.processor.onTileClear(e);
        }
        onTileUpdate(e) {
          this.aggregateStore.onTileUpdate(e);
          for (const t of e.added)
            this._source.subscribe(t), (this._level = t.level);
          for (const t of e.removed)
            this._source.unsubscribe(t),
              (this._cleanupNeeded = !0),
              this._tileToResolver.has(t.id) &&
                (this._tileToResolver.get(t.id).resolve(),
                this._tileToResolver.delete(t.id));
          this.notifyChange('updating');
        }
        onIdle() {
          this._invalidated &&
            ((this.hasAggregates || 'heatmap' === this.processor.type) &&
              this._repushCurrentLevelTiles(),
            (this._invalidated = !1)),
            this._markAndSweep();
        }
        async querySummaryStatistics({ query: e, params: t }) {
          return this.queryEngine.executeQueryForSummaryStatistics(e, t);
        }
        async queryUniqueValues({ query: e, params: t }) {
          return this.queryEngine.executeQueryForUniqueValues(e, t);
        }
        async queryClassBreaks({ query: e, params: t }) {
          return this.queryEngine.executeQueryForClassBreaks(e, t);
        }
        async queryHistogram({ query: e, params: t }) {
          return this.queryEngine.executeQueryForHistogram(e, t);
        }
        queryExtent(e) {
          return this.queryEngine.executeQueryForExtent(e);
        }
        queryFeatures(e) {
          return this.queryEngine.executeQuery(e);
        }
        async queryVisibleFeatures(e) {
          const t = await this.queryEngine.executeQuery(e),
            s = t.objectIdFieldName;
          return (
            (t.features = t.features.filter((e) => {
              const t = e.attributes[s],
                r = this.getDisplayId(t);
              return this.attributeStore.isVisible(r);
            })),
            t
          );
        }
        queryFeatureCount(e) {
          return this.queryEngine.executeQueryForCount(e);
        }
        queryLatestObservations(e) {
          return this.queryEngine.executeQueryForLatestObservations(e);
        }
        queryObjectIds(e) {
          return this.queryEngine.executeQueryForIds(e);
        }
        async queryStatistics() {
          return this.featureStore.storeStatistics;
        }
        getObjectId(e) {
          return this.featureStore.lookupObjectId(e, this._storage);
        }
        getDisplayId(e) {
          if (this._schema.targets.aggregate) {
            const t = this.aggregateStore.getDisplayId(e);
            if ((0, u.Wi)(t)) {
              const t = this.featureStore.lookupDisplayId(e);
              return this.aggregateStore.getDisplayIdForReferenceId(t);
            }
            return t;
          }
          return this.featureStore.lookupDisplayId(e);
        }
        getFeatures(e) {
          const t = [],
            s = [];
          for (const r of e) {
            const e = this.hasAggregates ? this.getAggregate(r) : null;
            if ((0, u.pC)(e))
              if ((0, u.pC)(e.referenceId)) {
                const s = this.getFeature(e.referenceId);
                (0, u.pC)(s) && t.push(s);
              } else s.push(e);
            else {
              const e = this.getFeature(r);
              (0, u.pC)(e) && t.push(e);
            }
          }
          return { features: t, aggregates: s };
        }
        getFeature(e) {
          const t = this.featureStore.lookupFeatureByDisplayId(
            e,
            this._storage,
          );
          if ((0, u.Wi)(t)) return null;
          const s = t.readHydratedGeometry(),
            r = (0, p.di)(s, t.geometryType, t.hasZ, t.hasM);
          return { attributes: t.readAttributes(), geometry: r };
        }
        getAggregate(e) {
          return this.aggregateStore.getAggregate(e);
        }
        getAggregates() {
          return this.aggregateStore.getAggregates();
        }
        async setHighlight(e) {
          const t = e.map((e) => this.getDisplayId(e));
          return this.attributeStore.setHighlight(e, t);
        }
        _lookupObjectIdByGlobalId(e) {
          const t = this.service.globalIdField;
          if ((0, u.Wi)(t))
            throw new Error('Expected globalIdField to be defined');
          let s = null;
          if (
            (this.featureStore.forEach((r) => {
              e === r.readAttribute(t) && (s = r.getObjectId());
            }),
            (0, u.Wi)(s))
          )
            throw new Error(`Expected to find a feature with globalId ${e}`);
          return s;
        }
        _repushCurrentLevelTiles() {
          const e = this.tileStore.tiles.filter((e) => e.level === this._level);
          for (const t of e)
            this._patchTile({
              type: 'append',
              id: t.key.id,
              addOrUpdate: F.fromOptimizedFeatures([], this.service),
              remove: [],
              end: !0,
              status: se.empty(),
            });
        }
        _maybeForceCleanup() {
          performance.now() - this._lastCleanup > 5e3 && this._markAndSweep();
        }
        _patchTile(e, t) {
          const s = this._updateQueue
            .push(e, t)
            .then(() => {
              this.notifyChange('updating');
            })
            .catch((e) => {
              this.notifyChange('updating');
            });
          return this.notifyChange('updating'), s;
        }
        async _onTileMessage(e, t) {
          (0, c.k_)(t);
          const s = this.tileStore.get(e.id);
          if (!s) return;
          if (e.clear) return this.processor.onTileClear(s);
          const r = e.status;
          this._cleanupNeeded = !0;
          const i = [];
          for (const t of e.remove) {
            const e = this.featureStore.lookupDisplayId(t);
            e && i.push(e);
          }
          e.remove = i;
          try {
            if ((0, u.Wi)(e.addOrUpdate))
              return void this.processor
                .onTileMessage(
                  s,
                  { ...e, addOrUpdate: null },
                  this.hasAggregates,
                  t,
                )
                .catch(c.H9);
            if (
              (e.addOrUpdate.setArcadeSpatialReference(this.spatialReference),
              (this.featureStore.hasInstance(e.addOrUpdate.instance) &&
                r.targets.feature) ||
                ((r.targets.feature = !0), this.featureStore.onTileData(s, e)),
              (r.storage.data && r.storage.filters) ||
                ((r.storage.data = !0),
                (r.storage.filters = !0),
                this.attributeStore.onTileData(s, e),
                'geoevent' === this._source.type || this._didEdit
                  ? (await this.attributeStore.sendUpdates(), (0, c.k_)(t))
                  : this.attributeStore.sendUpdates()),
              this.hasAggregates && !r.targets.aggregate)
            ) {
              r.targets.aggregate = !0;
              const t = ut(this._source) && this._source.loading,
                i = !ut(this._source) || t || e.end;
              if (
                (this.aggregateStore.onTileData(
                  s,
                  e,
                  this._storage,
                  this.attributeStore,
                  i,
                ),
                !i)
              )
                return;
              r.mesh ||
                (this.attributeStore.onTileData(s, e),
                await this.attributeStore.sendUpdates(),
                this.processor.onTileClear(s));
            }
            r.mesh ||
              ((r.mesh = !0),
              await this.processor.onTileMessage(s, e, this.hasAggregates, t),
              (0, c.k_)(t)),
              this._maybeForceCleanup();
          } catch (e) {
            (0, c.H9)(e);
          }
        }
        _mark(e, t, s) {
          const r = (4294901760 & this._storage.getInstanceId(e)) >>> 16;
          e && (t.add(r), s.set(e));
        }
        _markAndSweep() {
          if (
            ((this._lastCleanup = performance.now()),
            ('feature' === this._source.type &&
              'snapshot' === this._source.mode) ||
              ('geoevent' !== this._source.type && !this._cleanupNeeded))
          )
            return;
          this._cleanupNeeded = !1;
          const e = this._storage.getBitset(this._markedIdsBufId),
            t = new Set();
          e.clear();
          for (const s of this.tileStore.tiles)
            for (const r of this._source.readers(s.id)) {
              const s = r.getCursor();
              for (; s.next(); ) {
                let r = s.getDisplayId();
                if (!r) {
                  const e = s.getObjectId();
                  r = this.featureStore.lookupDisplayId(e);
                }
                this._mark(r, t, e);
              }
            }
          'symbol' === this.processor.type &&
            this.processor.forEachBufferId((s) => {
              this._mark(s, t, e);
            }),
            this._updateQueue.forEach((s) => {
              for (const r of s.remove) {
                const s = this.featureStore.lookupDisplayId(r);
                this._mark(s, t, e);
              }
            }),
            this.config.schema.targets.aggregate &&
              (this.aggregateStore.sweepFeatures(e, this.featureStore),
              this.aggregateStore.sweepClusters(
                this._storage,
                this.attributeStore,
                this._level,
              )),
            this.featureStore.sweepFeatures(
              e,
              this._storage,
              this.attributeStore,
            ),
            this.featureStore.sweepFeatureSets(t);
        }
      };
      (0, r._)(
        [(0, o.Cb)({ constructOnly: !0 })],
        ct.prototype,
        'tileStore',
        void 0,
      ),
        (0, r._)([(0, o.Cb)()], ct.prototype, 'config', void 0),
        (0, r._)(
          [(0, o.Cb)({ readOnly: !0 })],
          ct.prototype,
          'fieldsIndex',
          null,
        ),
        (0, r._)([(0, o.Cb)()], ct.prototype, 'processor', void 0),
        (0, r._)(
          [(0, o.Cb)({ constructOnly: !0 })],
          ct.prototype,
          'remoteClient',
          void 0,
        ),
        (0, r._)(
          [(0, o.Cb)({ constructOnly: !0 })],
          ct.prototype,
          'service',
          void 0,
        ),
        (0, r._)([(0, o.Cb)()], ct.prototype, 'spatialReference', null),
        (0, r._)([(0, o.Cb)()], ct.prototype, 'updating', null),
        (ct = (0, r._)(
          [
            (0, a.j)(
              'esri.views.2d.layers.features.controllers.FeatureController2D',
            ),
          ],
          ct,
        ));
      const dt = ct;
      var pt = s(3651),
        gt = s(67524),
        ft = s(55415);
      const _t = { added: [], removed: [] },
        mt = new Set(),
        yt = new ft.Z(0, 0, 0, 0);
      class It extends J.Z {
        constructor(e) {
          super(),
            (this._tiles = new Map()),
            (this._index = (0, ce.r)(
              9,
              (0, n.Z)('esri-csp-restrictions')
                ? (e) => ({
                    minX: e.bounds[0],
                    minY: e.bounds[1],
                    maxX: e.bounds[2],
                    maxY: e.bounds[3],
                  })
                : ['.bounds[0]', '.bounds[1]', '.bounds[2]', '.bounds[3]'],
            )),
            (this.tiles = []),
            (this.tileScheme = e);
        }
        destroy() {
          this.clear();
        }
        clear() {
          (this.tiles.length = 0), this._tiles.clear(), this._index.clear();
        }
        has(e) {
          return this._tiles.has(e);
        }
        get(e) {
          return this._tiles.get(e);
        }
        boundsIntersections(e) {
          return this._index.search({
            minX: e[0],
            minY: e[1],
            maxX: e[2],
            maxY: e[3],
          });
        }
        updateTiles(e) {
          const t = { added: [], removed: [] };
          for (const s of e.added)
            if (!this.has(s)) {
              const e = new pt.n(this.tileScheme, s);
              this._tiles.set(s, e), this._index.insert(e), t.added.push(e);
            }
          for (const s of e.removed)
            if (this.has(s)) {
              const e = this.get(s);
              this._tiles.delete(s), this._index.remove(e), t.removed.push(e);
            }
          (this.tiles.length = 0),
            this._tiles.forEach((e) => this.tiles.push(e)),
            (t.added.length || t.removed.length) && this.emit('update', t);
        }
        setViewState(e) {
          const t = this.tileScheme.getTileCoverage(e, 0);
          if (!t) return;
          const { spans: s, lodInfo: r } = t,
            { level: i } = r;
          if (s.length > 0)
            for (const { row: e, colFrom: t, colTo: n } of s)
              for (let s = t; s <= n; s++) {
                const t = yt.set(
                  i,
                  e,
                  r.normalizeCol(s),
                  r.getWorldForColumn(s),
                ).id;
                if ((mt.add(t), !this.has(t))) {
                  const e = new pt.n(this.tileScheme, t);
                  this._tiles.set(t, e),
                    this._index.insert(e),
                    this.tiles.push(e),
                    _t.added.push(e);
                }
              }
          for (let e = this.tiles.length - 1; e >= 0; e--) {
            const t = this.tiles[e];
            mt.has(t.id) ||
              (this._tiles.delete(t.id),
              this.tiles.splice(e, 1),
              this._index.remove(t),
              _t.removed.push(t));
          }
          (_t.added.length || _t.removed.length) && this.emit('update', _t),
            gt.Z.pool.release(t),
            mt.clear(),
            (_t.added.length = 0),
            (_t.removed.length = 0);
        }
      }
      var bt = s(83068);
      const xt = new Set();
      function wt() {
        return xt;
      }
      let vt = class extends i.r {
        constructor() {
          super(...arguments),
            (this.controller = null),
            (this.processor = null),
            (this.remoteClient = null),
            (this.tileStore = null),
            (this.service = null),
            (this.viewState = null),
            (this._paused = !1),
            (this._pendingTileUpdates = []);
        }
        initialize() {
          this.handles.add(
            this.watch('updating', (e) => {
              this.remoteClient.invoke('setUpdating', e).catch((e) => {});
            }),
          );
        }
        destroy() {
          var e, t;
          this.stop(),
            null == (e = this.controller) || e.destroy(),
            null == (t = this.processor) || t.destroy(),
            (this.controller =
              this.processor =
              this.tileStore =
              this.remoteClient =
                null);
        }
        get updating() {
          return !this.controller || this.controller.updating;
        }
        stop() {
          var e, t, s;
          (this._paused = !0),
            Array.isArray(null == (e = this.service) ? void 0 : e.source) &&
              (this.service.source.forEach((e) => e.close()),
              (this.service.source.length = 0)),
            null == (t = this.tileStore) ||
              t.updateTiles({
                added: [],
                removed: this.tileStore.tiles.map((e) => e.id),
              }),
            null == (s = this.tileStore) || s.destroy(),
            (this.tileStore = null),
            (this._pendingTileUpdates.length = 0);
        }
        async startup({ service: e, config: t, tileInfo: s, tiles: r }) {
          var i;
          if (
            ((this._paused = !0),
            Array.isArray(null == (i = this.service) ? void 0 : i.source) &&
              (this.service.source.forEach((e) => e.close()),
              (this.service.source.length = 0)),
            (this.service = e),
            !this.tileStore ||
              !(0, l.fS)(
                this.tileStore.tileScheme.spatialReference,
                s.spatialReference,
              ))
          ) {
            var n, o;
            const e = new bt.Z(h.Z.fromJSON(s));
            (r.added.length = r.removed.length = 0),
              null == (n = this.tileStore) ||
                n.updateTiles({
                  added: [],
                  removed: this.tileStore.tiles.map((e) => e.id),
                }),
              null == (o = this.tileStore) || o.destroy(),
              (this.tileStore = new It(e)),
              (this._pendingTileUpdates.length = 0);
          }
          for (
            await this._createProcessorAndController(t),
              await this.update({ config: t }, !0),
              this.tileStore.clear(),
              this.tileStore.updateTiles(r),
              this._paused = !1;
            this._pendingTileUpdates.length;

          )
            this.tileStore.updateTiles(this._pendingTileUpdates.pop());
        }
        async updateTiles(e) {
          this._paused
            ? this._pendingTileUpdates.push(e)
            : this.tileStore.updateTiles(e);
        }
        async update({ config: e }, t = !1) {
          const s = se.empty();
          return (
            t || this.controller.pause(),
            await Promise.all([
              this.processor.update(s, e),
              this.controller.update(s, e),
            ]),
            s.toJSON()
          );
        }
        async applyUpdate(e) {
          return this.controller.applyUpdate(se.create(e));
        }
        async _createProcessorAndController(e) {
          await Promise.all([
            this._handleControllerConfig(e),
            this._handleProcessorConfig(e),
          ]),
            (this.controller.processor = this.processor);
        }
        async _handleControllerConfig(e) {
          const t = await this._createController(this.service, e);
          return await t.startup(), t;
        }
        async _handleProcessorConfig(e) {
          return this._createProcessor(this.service, e);
        }
        async _createController(e, t) {
          this.controller && this.controller.destroy();
          const { tileStore: s, remoteClient: r } = this,
            i = new dt({
              service: e,
              config: t,
              tileStore: s,
              remoteClient: r,
            });
          return (this.controller = i), i;
        }
        async _createProcessor(e, t) {
          const r = t.schema.processors[0].type,
            i = (
              await (function (e) {
                return 'heatmap' === e
                  ? s.e(2399).then(s.bind(s, 12399))
                  : Promise.all([s.e(8422), s.e(6810), s.e(2304)]).then(
                      s.bind(s, 13922),
                    );
              })(r)
            ).default,
            { remoteClient: n, tileStore: o } = this,
            a = new i({ service: e, config: t, tileStore: o, remoteClient: n });
          return (
            this.processor && this.processor.destroy(), (this.processor = a), a
          );
        }
      };
      (0, r._)([(0, o.Cb)()], vt.prototype, 'controller', void 0),
        (0, r._)([(0, o.Cb)()], vt.prototype, 'processor', void 0),
        (0, r._)([(0, o.Cb)()], vt.prototype, 'updating', null),
        (0, r._)([(0, o.Cb)()], vt.prototype, 'viewState', void 0),
        (vt = (0, r._)(
          [(0, a.j)('esri.views.2d.layers.features.Pipeline')],
          vt,
        ));
      const St = vt;
    },
    59999: (e, t, s) => {
      s.d(t, { J: () => h });
      var r = s(80442),
        i = s(70586),
        n = s(22862),
        o = s(59266),
        a = s(92604);
      const l = s.e(4695).then(s.bind(s, 14695));
      class h {
        constructor(e, t) {
          (this._canCacheExpressionValue = !1),
            (this._sourceInfo = e),
            (this._bitsets = { computed: t.getBitset(t.createBitset()) });
        }
        invalidate() {
          this._bitsets.computed.clear();
        }
        async updateSchema(e, t) {
          const s = (0, n.Hg)(this._schema, t);
          if (
            ((this._schema = t),
            !t || (0, i.Wi)(s) || !(0, n.uD)(s, 'attributes'))
          )
            return;
          (0, r.Z)('esri-2d-update-debug') &&
            console.debug('Applying Update - Store:', s),
            this._bitsets.computed.clear(),
            (e.targets[t.name] = !0);
          const o = t.attributes,
            a = [],
            l = [];
          for (const e in o) {
            const t = o[e];
            switch (t.type) {
              case 'field':
                break;
              case 'expression':
                a.push(this._createArcadeComputedField(t));
                break;
              case 'label-expression':
                a.push(this._createLabelArcadeComputedField(t));
                break;
              case 'statistic':
                l.push(t);
            }
          }
          (this._computedFields = await Promise.all(a)),
            (this._canCacheExpressionValue = !this._computedFields.some(
              (e) => 'expression' === e.type && e.expression.referencesScale(),
            )),
            (this._statisticFields = l);
        }
        setComputedAttributes(e, t, s, r) {
          const i = this._bitsets.computed;
          if (!this._canCacheExpressionValue || !i.has(s)) {
            i.set(s);
            for (const i of this._computedFields) {
              const n = this._evaluateField(t, i, r);
              switch (i.resultType) {
                case 'numeric':
                  e.setComputedNumericAtIndex(s, i.fieldIndex, n);
                  break;
                case 'string':
                  e.setComputedStringAtIndex(s, i.fieldIndex, n);
              }
            }
          }
        }
        async _createArcadeComputedField(e) {
          const t = this._sourceInfo.spatialReference,
            s = this._sourceInfo.fieldsIndex;
          return { ...e, expression: await (0, o.Yi)(e.valueExpression, t, s) };
        }
        async _createLabelArcadeComputedField(e) {
          const t = this._sourceInfo.spatialReference,
            s = this._sourceInfo.fieldsIndex,
            { createLabelFunction: r } = await l,
            i = await r(e.label, s, t);
          return { ...e, builder: i };
        }
        _evaluateField(e, t, s) {
          switch (t.type) {
            case 'label-expression': {
              const s = e.readArcadeFeature();
              return t.builder.evaluate(s) || '';
            }
            case 'expression': {
              const { expression: r } = t;
              return (function (e, t, s) {
                e.referencesGeometry();
                const r = t.readArcadeFeature();
                try {
                  return e.evaluate({ ...s, $feature: r });
                } catch (e) {
                  return (
                    a.Z.getLogger('esri.views.2d.support.arcadeOnDemand').warn(
                      'Feature arcade evaluation failed:',
                      e,
                    ),
                    null
                  );
                }
              })(r, e, { $view: { scale: s } });
            }
          }
        }
      }
    },
    87554: (e, t, s) => {
      s.d(t, { s: () => T }), s(66577);
      var r,
        i,
        n,
        o = s(80442),
        a = s(70586),
        l = s(29730),
        h = s(98732),
        u = s(5428),
        c = s(93054),
        d = s(33955);
      let p = 0;
      const g =
          null != (r = (0, o.Z)('featurelayer-simplify-thresholds'))
            ? r
            : [0.5, 0.5, 0.5, 0.5],
        f = g[0],
        _ = g[1],
        m = g[2],
        y = g[3],
        I =
          null != (i = (0, o.Z)('featurelayer-simplify-payload-size-factors'))
            ? i
            : [1, 2, 4],
        b = I[0],
        x = I[1],
        w = I[2],
        v =
          null != (n = (0, o.Z)('featurelayer-simplify-mobile-factor')) ? n : 2,
        S = (0, o.Z)('esri-mobile');
      class T {
        constructor(e, t) {
          (this.type = 'FeatureSetReader'),
            (this.arcadeDeclaredClass = 'esri.arcade.Feature'),
            (this.seen = !1),
            (this.instance = 0),
            (this._tx = 0),
            (this._ty = 0),
            (this._sx = 1),
            (this._sy = 1),
            (this._deleted = null),
            (this._joined = []),
            (this._objectIdToIndex = null),
            (this._level = 0),
            (this.instance = e),
            (this._layerSchema = t);
        }
        static createInstance() {
          return p++, (p = p > 65535 ? 0 : p), p;
        }
        get isEmpty() {
          return (
            (0, a.pC)(this._deleted) &&
            this._deleted.countSet() === this.getSize()
          );
        }
        set level(e) {
          this._level = e;
        }
        getAreaSimplificationThreshold(e, t) {
          let s = 1;
          const r = S ? v : 1;
          t > 4e6
            ? (s = w * r)
            : t > 1e6
            ? (s = x * r)
            : t > 5e5
            ? (s = b * r)
            : t > 1e5 && (s = r);
          let i = 0;
          e > 4e3
            ? (i = y * s)
            : e > 2e3
            ? (i = m * s)
            : e > 100
            ? (i = _)
            : e > 15 && (i = f);
          let n = 8;
          return (
            this._level < 4
              ? (n = 1)
              : this._level < 5
              ? (n = 2)
              : this._level < 6 && (n = 4),
            i * n
          );
        }
        setArcadeSpatialReference(e) {
          this._arcadeSpatialReference = e;
        }
        attachStorage(e) {
          this._storage = e;
        }
        getQuantizationTransform() {
          throw new Error('Unable to find transform for featureSet');
        }
        getStorage() {
          return this._storage;
        }
        getComputedNumeric(e) {
          return this.getComputedNumericAtIndex(0);
        }
        setComputedNumeric(e, t) {
          return this.setComputedNumericAtIndex(t, 0);
        }
        getComputedString(e) {
          return this.getComputedStringAtIndex(0);
        }
        setComputedString(e, t) {
          return this.setComputedStringAtIndex(0, t);
        }
        getComputedNumericAtIndex(e) {
          return this._storage.getComputedNumericAtIndex(
            this.getDisplayId(),
            e,
          );
        }
        setComputedNumericAtIndex(e, t) {
          this._storage.setComputedNumericAtIndex(this.getDisplayId(), e, t);
        }
        getComputedStringAtIndex(e) {
          return this._storage.getComputedStringAtIndex(this.getDisplayId(), e);
        }
        setComputedStringAtIndex(e, t) {
          return this._storage.setComputedStringAtIndex(
            this.getDisplayId(),
            e,
            t,
          );
        }
        transform(e, t, s, r) {
          const i = this.copy();
          return (i._tx += e), (i._ty += t), (i._sx *= s), (i._sy *= r), i;
        }
        readAttribute(e, t = !1) {
          const s = this._readAttribute(e, t);
          if (void 0 !== s) return s;
          for (const s of this._joined) {
            s.setIndex(this.getIndex());
            const r = s._readAttribute(e, t);
            if (void 0 !== r) return r;
          }
        }
        readAttributes() {
          const e = this._readAttributes();
          for (const t of this._joined) {
            t.setIndex(this.getIndex());
            const s = t._readAttributes();
            for (const t of Object.keys(s)) e[t] = s[t];
          }
          return e;
        }
        joinAttributes(e) {
          this._joined.push(e);
        }
        readArcadeFeature() {
          return this;
        }
        geometry() {
          const e = this.readHydratedGeometry(),
            t = (0, h.di)(e, this.geometryType, this.hasZ, this.hasM),
            s = (0, d.im)(t);
          return s && (s.spatialReference = this._arcadeSpatialReference), s;
        }
        field(e) {
          if (this.hasField(e)) return this.readAttribute(e, !0);
          for (const t of this._joined)
            if ((t.setIndex(this.getIndex()), t.hasField(e)))
              return t._readAttribute(e, !0);
          throw new Error(`Field ${e} does not exist`);
        }
        setField(e, t) {
          throw new Error(
            'Unable to update feature attribute values, feature is readonly',
          );
        }
        keys() {
          return this.getFieldNames();
        }
        castToText() {
          return JSON.stringify(this.readLegacyFeature());
        }
        gdbVersion() {
          return null;
        }
        fullSchema() {
          return this._layerSchema;
        }
        castAsJson(e = null) {
          return {
            attributes: this._readAttributes(),
            geometry:
              !0 === (null == e ? void 0 : e.keepGeometryType)
                ? this.geometry()
                : this.geometry().toJSON(),
          };
        }
        castAsJsonAsync(e = null, t = null) {
          return Promise.resolve(this.castAsJson(t));
        }
        removeIds(e) {
          if ((0, a.Wi)(this._objectIdToIndex)) {
            const e = new Map(),
              t = this.getCursor();
            for (; t.next(); ) e.set(t.getObjectId(), t.getIndex());
            this._objectIdToIndex = e;
          }
          const t = this._objectIdToIndex;
          for (const s of e) t.has(s) && this.removeAtIndex(t.get(s));
        }
        removeAtIndex(e) {
          (0, a.Wi)(this._deleted) &&
            (this._deleted = c.p.create(this.getSize())),
            this._deleted.set(e);
        }
        readGeometryForDisplay() {
          return this.readUnquantizedGeometry(!0);
        }
        readLegacyGeometryForDisplay() {
          return this.readLegacyGeometry(!0);
        }
        *features() {
          const e = this.getCursor();
          for (; e.next(); ) yield e.readOptimizedFeature();
        }
        _getExists() {
          return (
            (0, a.Wi)(this._deleted) || !this._deleted.has(this.getIndex())
          );
        }
        _computeCentroid() {
          if ('esriGeometryPolygon' !== this.geometryType) return null;
          const e = this.readUnquantizedGeometry();
          if (!e || e.hasIndeterminateRingOrder) return null;
          const t = (0, a.Pt)(this.getQuantizationTransform(), null);
          return (0, l.Y)(new u.Z(), e, this.hasM, this.hasZ, t);
        }
        copyInto(e) {
          (e.seen = this.seen),
            (e._storage = this._storage),
            (e._arcadeSpatialReference = this._arcadeSpatialReference),
            (e._joined = this._joined),
            (e._tx = this._tx),
            (e._ty = this._ty),
            (e._sx = this._sx),
            (e._sy = this._sy),
            (e._deleted = this._deleted),
            (e._objectIdToIndex = this._objectIdToIndex);
        }
      }
    },
    61800: (e, t, s) => {
      s.d(t, { t: () => i });
      var r = s(87554);
      class i extends r.s {
        constructor(e, t) {
          super(r.s.createInstance(), e.fullSchema()),
            (this._currentIndex = -1),
            (this._reader = e),
            (this._indices = t);
        }
        static from(e, t) {
          return new i(e.copy(), t);
        }
        get hasNext() {
          return this._currentIndex + 1 < this._indices.length;
        }
        getSize() {
          return this._indices.length;
        }
        getCursor() {
          return this.copy();
        }
        copy() {
          const e = new i(this._reader.copy(), this._indices);
          return (e._currentIndex = this._currentIndex), e;
        }
        next() {
          for (; this._nextIndex() && !this._reader._getExists(); );
          return this._currentIndex < this._indices.length;
        }
        _nextIndex() {
          return (
            ++this._currentIndex < this._indices.length &&
            (this._reader.setIndex(this._indices[this._currentIndex]), !0)
          );
        }
        setArcadeSpatialReference(e) {
          this._reader.setArcadeSpatialReference(e);
        }
        attachStorage(e) {
          this._reader.attachStorage(e);
        }
        get geometryType() {
          return this._reader.geometryType;
        }
        get hasFeatures() {
          return this._reader.hasFeatures;
        }
        get exceededTransferLimit() {
          return this._reader.exceededTransferLimit;
        }
        get hasZ() {
          return this._reader.hasZ;
        }
        get hasM() {
          return this._reader.hasM;
        }
        getStorage() {
          return this._reader.getStorage();
        }
        getComputedNumeric(e) {
          return this._reader.getComputedNumericAtIndex(0);
        }
        setComputedNumeric(e, t) {
          return this._reader.setComputedNumericAtIndex(t, 0);
        }
        getComputedString(e) {
          return this._reader.getComputedStringAtIndex(0);
        }
        setComputedString(e, t) {
          return this._reader.setComputedStringAtIndex(0, t);
        }
        getComputedNumericAtIndex(e) {
          return this._reader.getComputedNumericAtIndex(e);
        }
        setComputedNumericAtIndex(e, t) {
          this._reader.setComputedNumericAtIndex(e, t);
        }
        getComputedStringAtIndex(e) {
          return this._reader.getComputedStringAtIndex(e);
        }
        setComputedStringAtIndex(e, t) {
          return this._reader.setComputedStringAtIndex(e, t);
        }
        transform(e, t, s, r) {
          const i = this.copy();
          return (i._reader = this._reader.transform(e, t, s, r)), i;
        }
        readAttribute(e, t = !1) {
          return this._reader.readAttribute(e, t);
        }
        readAttributes() {
          return this._reader.readAttributes();
        }
        joinAttributes(e) {
          return this._reader.joinAttributes(e);
        }
        readArcadeFeature() {
          return this._reader.readArcadeFeature();
        }
        geometry() {
          return this._reader.geometry();
        }
        field(e) {
          return this.readAttribute(e, !0);
        }
        hasField(e) {
          return this._reader.hasField(e);
        }
        setField(e, t) {
          return this._reader.setField(e, t);
        }
        keys() {
          return this._reader.keys();
        }
        castToText() {
          return this._reader.castToText();
        }
        getQuantizationTransform() {
          return this._reader.getQuantizationTransform();
        }
        getFieldNames() {
          return this._reader.getFieldNames();
        }
        getAttributeHash() {
          return this._reader.getAttributeHash();
        }
        getObjectId() {
          return this._reader.getObjectId();
        }
        getDisplayId() {
          return this._reader.getDisplayId();
        }
        setDisplayId(e) {
          return this._reader.setDisplayId(e);
        }
        getGroupId() {
          return this._reader.getGroupId();
        }
        setGroupId(e) {
          return this._reader.setGroupId(e);
        }
        getXHydrated() {
          return this._reader.getXHydrated();
        }
        getYHydrated() {
          return this._reader.getYHydrated();
        }
        getX() {
          return this._reader.getX();
        }
        getY() {
          return this._reader.getY();
        }
        setIndex(e) {
          return this._reader.setIndex(e);
        }
        getIndex() {
          return this._reader.getIndex();
        }
        readLegacyFeature() {
          return this._reader.readLegacyFeature();
        }
        readOptimizedFeature() {
          return this._reader.readOptimizedFeature();
        }
        readLegacyPointGeometry() {
          return this._reader.readLegacyPointGeometry();
        }
        readLegacyGeometry() {
          return this._reader.readLegacyGeometry();
        }
        readLegacyCentroid() {
          return this._reader.readLegacyCentroid();
        }
        readGeometryArea() {
          return this._reader.readGeometryArea();
        }
        readUnquantizedGeometry() {
          return this._reader.readUnquantizedGeometry();
        }
        readHydratedGeometry() {
          return this._reader.readHydratedGeometry();
        }
        readGeometry() {
          return this._reader.readGeometry();
        }
        readCentroid() {
          return this._reader.readCentroid();
        }
        _readAttribute(e, t) {
          throw new Error(
            'Error: Should not be called. Underlying _reader should be used instead',
          );
        }
        _readAttributes() {
          throw new Error(
            'Error: Should not be called. Underlying _reader should be used instead',
          );
        }
      }
    },
    93054: (e, t, s) => {
      s.d(t, { p: () => r });
      class r {
        constructor(e, t) {
          (this._mask = 0), (this._buf = e), (this._mask = t);
        }
        static fromBuffer(e, t) {
          return new r(e, t);
        }
        static create(e, t = 4294967295) {
          const s = new Uint32Array(Math.ceil(e / 32));
          return new r(s, t);
        }
        _getIndex(e) {
          return Math.floor(e / 32);
        }
        has(e) {
          const t = this._mask & e;
          return !!(this._buf[this._getIndex(t)] & (1 << t % 32));
        }
        hasRange(e, t) {
          let s = e,
            r = t;
          for (; s % 32 && s !== r; ) {
            if (this.has(s)) return !0;
            s++;
          }
          for (; r % 32 && s !== r; ) {
            if (this.has(s)) return !0;
            r--;
          }
          if (s === r) return !1;
          for (let e = s / 32; e !== r / 32; e++) if (this._buf[e]) return !0;
          return !1;
        }
        set(e) {
          const t = this._mask & e,
            s = this._getIndex(t),
            r = 1 << t % 32;
          this._buf[s] |= r;
        }
        setRange(e, t) {
          let s = e,
            r = t;
          for (; s % 32 && s !== r; ) this.set(s++);
          for (; r % 32 && s !== r; ) this.set(r--);
          if (s !== r)
            for (let e = s / 32; e !== r / 32; e++) this._buf[e] = 4294967295;
        }
        unset(e) {
          const t = this._mask & e,
            s = this._getIndex(t),
            r = 1 << t % 32;
          this._buf[s] &= 4294967295 ^ r;
        }
        resize(e) {
          const t = this._buf,
            s = new Uint32Array(Math.ceil(e / 32));
          s.set(t), (this._buf = s);
        }
        or(e) {
          for (let t = 0; t < this._buf.length; t++) this._buf[t] |= e._buf[t];
          return this;
        }
        and(e) {
          for (let t = 0; t < this._buf.length; t++) this._buf[t] &= e._buf[t];
          return this;
        }
        xor(e) {
          for (let t = 0; t < this._buf.length; t++) this._buf[t] ^= e._buf[t];
          return this;
        }
        ior(e) {
          for (let t = 0; t < this._buf.length; t++) this._buf[t] |= ~e._buf[t];
          return this;
        }
        iand(e) {
          for (let t = 0; t < this._buf.length; t++) this._buf[t] &= ~e._buf[t];
          return this;
        }
        ixor(e) {
          for (let t = 0; t < this._buf.length; t++) this._buf[t] ^= ~e._buf[t];
          return this;
        }
        any() {
          for (let e = 0; e < this._buf.length; e++)
            if (this._buf[e]) return !0;
          return !1;
        }
        copy(e) {
          for (let t = 0; t < this._buf.length; t++) this._buf[t] = e._buf[t];
          return this;
        }
        clone() {
          return new r(this._buf.slice(), this._mask);
        }
        clear() {
          for (let e = 0; e < this._buf.length; e++) this._buf[e] = 0;
        }
        forEachSet(e) {
          for (let t = 0; t < this._buf.length; t++) {
            let s = this._buf[t],
              r = 32 * t;
            if (s) for (; s; ) 1 & s && e(r), (s >>>= 1), r++;
          }
        }
        countSet() {
          let e = 0;
          return (
            this.forEachSet((t) => {
              e++;
            }),
            e
          );
        }
      }
    },
    3651: (e, t, s) => {
      s.d(t, { n: () => l });
      var r = s(3894),
        i = s(6570),
        n = s(24470),
        o = s(6388),
        a = s(55415);
      class l {
        constructor(e, t) {
          (this.key = new a.Z(0, 0, 0, 0)),
            (this.bounds = (0, n.Ue)()),
            (this.objectIds = new Set()),
            this.key.set(t);
          const s = e.getLODInfoAt(this.key);
          (this.tileInfoView = e),
            this.tileInfoView.getTileBounds(this.bounds, this.key, !0),
            (this.resolution = s.resolution),
            (this.scale = s.scale),
            (this.level = s.level);
        }
        get id() {
          return this.key.id;
        }
        get extent() {
          return i.Z.fromBounds(
            this.bounds,
            this.tileInfoView.tileInfo.spatialReference,
          );
        }
        get transform() {
          return {
            originPosition: 'upperLeft',
            scale: [this.resolution, this.resolution],
            translate: [this.bounds[0], this.bounds[3]],
          };
        }
        createChildTiles() {
          const e = this.key.getChildKeys(),
            t = r.Z.acquire();
          for (let s = 0; s < e.length; s++)
            t[s] = new l(this.tileInfoView, e[s]);
          return t;
        }
        getQuantizationParameters() {
          return o.Z.fromJSON({
            mode: 'view',
            originPosition: 'upperLeft',
            tolerance: this.resolution,
            extent: {
              xmin: this.bounds[0],
              ymin: this.bounds[1],
              xmax: this.bounds[2],
              ymax: this.bounds[3],
              spatialReference: this.tileInfoView.tileInfo.spatialReference,
            },
          });
        }
      }
    },
    67524: (e, t, s) => {
      s.d(t, { Z: () => i });
      var r = s(71143);
      class i {
        constructor() {
          this.spans = [];
        }
        acquire(e) {
          this.lodInfo = e;
        }
        release() {
          (this.lodInfo = null), (this.spans.length = 0);
        }
        forEach(e, t) {
          const { spans: s, lodInfo: r } = this,
            { level: i } = r;
          if (0 !== s.length)
            for (const { row: n, colFrom: o, colTo: a } of s)
              for (let s = o; s <= a; s++)
                e.call(t, i, n, r.normalizeCol(s), r.getWorldForColumn(s));
        }
      }
      i.pool = new r.Z(i);
    },
    83068: (e, t, s) => {
      s.d(t, { Z: () => f });
      var r = s(8744),
        i = s(70586),
        n = s(55415);
      function o(e, t) {
        return [e, t];
      }
      function a(e, t, s) {
        return (e[0] = t), (e[1] = s), e;
      }
      const l = new n.Z('0/0/0/0');
      class h {
        constructor(e, t, s, r, i, n, o, a, l, h, u, c) {
          (this.level = e),
            (this.resolution = t),
            (this.scale = s),
            (this.origin = r),
            (this.first = i),
            (this.last = n),
            (this.size = o),
            (this.norm = a),
            (this.worldStart = l),
            (this.worldEnd = h),
            (this.worldSize = u),
            (this.wrap = c);
        }
        static create(e, t, s = null) {
          const n = (0, r.C5)(e.spatialReference),
            l = t.origin || o(e.origin.x, e.origin.y),
            u = o(e.size[0] * t.resolution, e.size[1] * t.resolution),
            c = o(-1 / 0, -1 / 0),
            d = o(1 / 0, 1 / 0),
            p = o(1 / 0, 1 / 0);
          (0, i.pC)(s) &&
            (a(
              c,
              Math.max(0, Math.floor((s.xmin - l[0]) / u[0])),
              Math.max(0, Math.floor((l[1] - s.ymax) / u[1])),
            ),
            a(
              d,
              Math.max(0, Math.floor((s.xmax - l[0]) / u[0])),
              Math.max(0, Math.floor((l[1] - s.ymin) / u[1])),
            ),
            a(p, d[0] - c[0] + 1, d[1] - c[1] + 1));
          const { cols: g, rows: f } = t;
          let _, m, y, I;
          return (
            !s &&
              g &&
              f &&
              (a(c, g[0], f[0]),
              a(d, g[1], f[1]),
              a(p, g[1] - g[0] + 1, f[1] - f[0] + 1)),
            e.isWrappable
              ? ((_ = o(
                  Math.ceil(
                    Math.round((n.valid[1] - n.valid[0]) / t.resolution) /
                      e.size[0],
                  ),
                  p[1],
                )),
                (m = o(Math.floor((n.origin[0] - l[0]) / u[0]), c[1])),
                (y = o(_[0] + m[0] - 1, d[1])),
                (I = !0))
              : ((m = c), (y = d), (_ = p), (I = !1)),
            new h(t.level, t.resolution, t.scale, l, c, d, p, u, m, y, _, I)
          );
        }
        normalizeCol(e) {
          if (!this.wrap) return e;
          const t = this.worldSize[0];
          return e < 0 ? t - 1 - Math.abs((e + 1) % t) : e % t;
        }
        denormalizeCol(e, t) {
          return this.wrap ? this.worldSize[0] * t + e : e;
        }
        getWorldForColumn(e) {
          return this.wrap ? Math.floor(e / this.worldSize[0]) : 0;
        }
        getFirstColumnForWorld(e) {
          return e * this.worldSize[0] + this.first[0];
        }
        getLastColumnForWorld(e) {
          return e * this.worldSize[0] + this.first[0] + this.size[0] - 1;
        }
        getColumnForX(e) {
          return (e - this.origin[0]) / this.norm[0];
        }
        getXForColumn(e) {
          return this.origin[0] + e * this.norm[0];
        }
        getRowForY(e) {
          return (this.origin[1] - e) / this.norm[1];
        }
        getYForRow(e) {
          return this.origin[1] - e * this.norm[1];
        }
        getTileBounds(e, t, s = !1) {
          l.set(t);
          const r = s ? l.col : this.denormalizeCol(l.col, l.world),
            i = l.row;
          return (
            (function (e, t, s, r, i) {
              (e[0] = t), (e[1] = s), (e[2] = r), (e[3] = i);
            })(
              e,
              this.getXForColumn(r),
              this.getYForRow(i + 1),
              this.getXForColumn(r + 1),
              this.getYForRow(i),
            ),
            e
          );
        }
        getTileCoords(e, t, s = !1) {
          l.set(t);
          const r = s ? l.col : this.denormalizeCol(l.col, l.world);
          return (
            Array.isArray(e)
              ? a(e, this.getXForColumn(r), this.getYForRow(l.row))
              : ((e.x = this.getXForColumn(r)), (e.y = this.getYForRow(l.row))),
            e
          );
        }
      }
      var u = s(67524);
      class c {
        constructor(e, t, s) {
          (this.row = e), (this.colFrom = t), (this.colTo = s);
        }
      }
      const d = new n.Z('0/0/0/0');
      class p {
        constructor(e, t, s, r, i, n, o, a) {
          (this.x = e),
            (this.ymin = t),
            (this.ymax = s),
            (this.invM = r),
            (this.leftAdjust = i),
            (this.rightAdjust = n),
            (this.leftBound = o),
            (this.rightBound = a);
        }
        static create(e, t) {
          e[1] > t[1] && ([e, t] = [t, e]);
          const [s, r] = e,
            [i, n] = t,
            o = i - s,
            a = n - r,
            l = 0 !== a ? o / a : 0,
            h = (Math.ceil(r) - r) * l,
            u = (Math.floor(r) - r) * l;
          return new p(
            s,
            Math.floor(r),
            Math.ceil(n),
            l,
            o < 0 ? h : u,
            o < 0 ? u : h,
            o < 0 ? i : s,
            o < 0 ? s : i,
          );
        }
        incrRow() {
          this.x += this.invM;
        }
        getLeftCol() {
          return Math.max(this.x + this.leftAdjust, this.leftBound);
        }
        getRightCol() {
          return Math.min(this.x + this.rightAdjust, this.rightBound);
        }
      }
      const g = [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
      ];
      class f {
        constructor(e, t = null) {
          (this.tileInfo = e),
            (this.fullExtent = t),
            (this.scales = []),
            (this._lodInfos = null),
            (this._infoByScale = {}),
            (this._infoByLevel = {});
          const s = e.lods.slice();
          s.sort(function (e, t) {
            return t.scale - e.scale;
          });
          const r = (this._lodInfos = s.map((s) => h.create(e, s, t)));
          s.forEach((e, t) => {
            (this._infoByLevel[e.level] = r[t]),
              (this._infoByScale[e.scale] = r[t]),
              (this.scales[t] = e.scale);
          }, this),
            (this._wrap = e.isWrappable);
        }
        get spatialReference() {
          return this.tileInfo.spatialReference;
        }
        getLODInfoAt(e) {
          return this._infoByLevel['number' == typeof e ? e : e.level];
        }
        getTileBounds(e, t, s = !1) {
          d.set(t);
          const r = this._infoByLevel[d.level];
          return r ? r.getTileBounds(e, d, s) : e;
        }
        getTileCoords(e, t, s = !1) {
          d.set(t);
          const r = this._infoByLevel[d.level];
          return r ? r.getTileCoords(e, d, s) : e;
        }
        getTileCoverage(e, t = 192, s = 'closest') {
          const r =
              'closest' === s
                ? this.getClosestInfoForScale(e.scale)
                : this.getSmallestInfoForScale(e.scale),
            i = u.Z.pool.acquire(r),
            n = this._wrap;
          let o,
            a,
            l,
            h = 1 / 0,
            d = -1 / 0;
          const f = i.spans;
          (g[0][0] = g[0][1] = g[1][1] = g[3][0] = -t),
            (g[1][0] = g[2][0] = e.size[0] + t),
            (g[2][1] = g[3][1] = e.size[1] + t);
          for (const t of g)
            e.toMap(t, t),
              (t[0] = r.getColumnForX(t[0])),
              (t[1] = r.getRowForY(t[1]));
          const _ = [];
          let m = 3;
          for (let e = 0; e < 4; e++) {
            if (g[e][1] === g[m][1]) {
              m = e;
              continue;
            }
            const t = p.create(g[e], g[m]);
            (h = Math.min(t.ymin, h)),
              (d = Math.max(t.ymax, d)),
              void 0 === _[t.ymin] && (_[t.ymin] = []),
              _[t.ymin].push(t),
              (m = e);
          }
          if (null == h || null == d || d - h > 100) return null;
          let y = [];
          for (o = h; o < d; ) {
            null != _[o] && (y = y.concat(_[o])), (a = 1 / 0), (l = -1 / 0);
            for (let e = y.length - 1; e >= 0; e--) {
              const t = y[e];
              (a = Math.min(a, t.getLeftCol())),
                (l = Math.max(l, t.getRightCol()));
            }
            if (
              ((a = Math.floor(a)),
              (l = Math.floor(l)),
              o >= r.first[1] && o <= r.last[1])
            )
              if (n)
                if (r.size[0] < r.worldSize[0]) {
                  const e = Math.floor(l / r.worldSize[0]);
                  for (let t = Math.floor(a / r.worldSize[0]); t <= e; t++)
                    f.push(
                      new c(
                        o,
                        Math.max(r.getFirstColumnForWorld(t), a),
                        Math.min(r.getLastColumnForWorld(t), l),
                      ),
                    );
                } else f.push(new c(o, a, l));
              else
                a > r.last[0] ||
                  l < r.first[0] ||
                  ((a = Math.max(a, r.first[0])),
                  (l = Math.min(l, r.last[0])),
                  f.push(new c(o, a, l)));
            o += 1;
            for (let e = y.length - 1; e >= 0; e--) {
              const t = y[e];
              t.ymax >= o ? t.incrRow() : y.splice(e, 1);
            }
          }
          return i;
        }
        getTileParentId(e) {
          d.set(e);
          const t = this._infoByLevel[d.level],
            s = this._lodInfos.indexOf(t) - 1;
          return s < 0
            ? null
            : (this._getTileIdAtLOD(d, this._lodInfos[s], d), d.id);
        }
        getTileResolution(e) {
          const t = this._infoByLevel['object' == typeof e ? e.level : e];
          return t ? t.resolution : -1;
        }
        getTileScale(e) {
          const t = this._infoByLevel[e.level];
          return t ? t.scale : -1;
        }
        intersects(e, t) {
          d.set(t);
          const s = this._infoByLevel[d.level],
            r = e.lodInfo;
          if (r.resolution > s.resolution) {
            this._getTileIdAtLOD(d, r, d);
            const t = r.denormalizeCol(d.col, d.world);
            for (const s of e.spans)
              if (s.row === d.row && s.colFrom <= t && s.colTo >= t) return !0;
          }
          if (r.resolution < s.resolution) {
            const [t, i, n, o] = e.spans.reduce(
                (e, t) => (
                  (e[0] = Math.min(e[0], t.row)),
                  (e[1] = Math.max(e[1], t.row)),
                  (e[2] = Math.min(e[2], t.colFrom)),
                  (e[3] = Math.max(e[3], t.colTo)),
                  e
                ),
                [1 / 0, -1 / 0, 1 / 0, -1 / 0],
              ),
              a = s.denormalizeCol(d.col, d.world),
              l = r.getColumnForX(s.getXForColumn(a)),
              h = r.getRowForY(s.getYForRow(d.row)),
              u = r.getColumnForX(s.getXForColumn(a + 1)) - 1,
              c = r.getRowForY(s.getYForRow(d.row + 1)) - 1;
            return !(l > o || u < n || h > i || c < t);
          }
          const i = r.denormalizeCol(d.col, d.world);
          return e.spans.some(
            (e) => e.row === d.row && e.colFrom <= i && e.colTo >= i,
          );
        }
        normalizeBounds(e, t, s) {
          if (
            ((e[0] = t[0]),
            (e[1] = t[1]),
            (e[2] = t[2]),
            (e[3] = t[3]),
            this._wrap)
          ) {
            const t = (0, r.C5)(this.tileInfo.spatialReference),
              i = -s * (t.valid[1] - t.valid[0]);
            (e[0] += i), (e[2] += i);
          }
          return e;
        }
        getSmallestInfoForScale(e) {
          const t = this.scales;
          if (this._infoByScale[e]) return this._infoByScale[e];
          if (e > t[0]) return this._infoByScale[t[0]];
          for (let s = 1; s < t.length - 1; s++)
            if (e > t[s] + 1e-6) return this._infoByScale[t[s - 1]];
          return this._infoByScale[t[t.length - 1]];
        }
        getClosestInfoForScale(e) {
          const t = this.scales;
          return (
            this._infoByScale[e] ||
              (e = t.reduce(
                (t, s) => (Math.abs(s - e) < Math.abs(t - e) ? s : t),
                t[0],
              )),
            this._infoByScale[e]
          );
        }
        scaleToLevel(e) {
          const t = this.scales;
          if (this._infoByScale[e]) return this._infoByScale[e].level;
          for (let s = t.length - 1; s >= 0; s--)
            if (e < t[s])
              return s === t.length - 1
                ? this._infoByScale[t[t.length - 1]].level
                : this._infoByScale[t[s]].level +
                    (t[s] - e) / (t[s] - t[s + 1]);
          return this._infoByScale[t[0]].level;
        }
        scaleToZoom(e) {
          return this.tileInfo.scaleToZoom(e);
        }
        _getTileIdAtLOD(e, t, s) {
          const r = this._infoByLevel[s.level];
          return (
            e.set(s),
            t.resolution < r.resolution
              ? null
              : (t.resolution === r.resolution ||
                  ((e.level = t.level),
                  (e.col = Math.floor(
                    (s.col * r.resolution) / t.resolution + 0.01,
                  )),
                  (e.row = Math.floor(
                    (s.row * r.resolution) / t.resolution + 0.01,
                  ))),
                e)
          );
        }
      }
    },
    55415: (e, t, s) => {
      s.d(t, { Z: () => i });
      var r = s(71143);
      class i {
        constructor(e, t, s, r) {
          this.set(e, t, s, r);
        }
        static getId(e, t, s, r) {
          return 'object' == typeof e
            ? `${e.level}/${e.row}/${e.col}/${e.world}`
            : `${e}/${t}/${s}/${r}`;
        }
        get key() {
          return this;
        }
        get id() {
          return this.toString();
        }
        set id(e) {
          this.set(e);
        }
        get hash() {
          const e = 4095 & this.row,
            t = 4095 & this.col,
            s = 63 & this.level;
          return ((3 & this.world) << 30) | (t << 22) | (e << 8) | s;
        }
        acquire(e, t, s, r) {
          this.set(e, t, s, r);
        }
        contains(e) {
          const t = e.level - this.level;
          return (
            this.row === e.row >> t &&
            this.col === e.col >> t &&
            this.world === e.world
          );
        }
        equals(e) {
          return (
            this.level === e.level &&
            this.row === e.row &&
            this.col === e.col &&
            this.world === e.world
          );
        }
        clone() {
          return new i(this);
        }
        release() {
          (this.level = 0), (this.row = 0), (this.col = 0), (this.world = 0);
        }
        set(e, t, s, r) {
          if (null == e)
            (this.level = 0), (this.row = 0), (this.col = 0), (this.world = 0);
          else if ('object' == typeof e)
            (this.level = e.level || 0),
              (this.row = e.row || 0),
              (this.col = e.col || 0),
              (this.world = e.world || 0);
          else if ('string' == typeof e) {
            const [t, s, r, i] = e.split('/');
            (this.level = parseFloat(t)),
              (this.row = parseFloat(s)),
              (this.col = parseFloat(r)),
              (this.world = parseFloat(i));
          } else
            (this.level = +e),
              (this.row = +t),
              (this.col = +s),
              (this.world = +r || 0);
          return this;
        }
        toString() {
          return `${this.level}/${this.row}/${this.col}/${this.world}`;
        }
        getParentKey() {
          return this.level <= 0
            ? null
            : new i(this.level - 1, this.row >> 1, this.col >> 1, this.world);
        }
        getChildKeys() {
          const e = this.level + 1,
            t = this.row << 1,
            s = this.col << 1,
            r = this.world;
          return [
            new i(e, t, s, r),
            new i(e, t, s + 1, r),
            new i(e, t + 1, s, r),
            new i(e, t + 1, s + 1, r),
          ];
        }
        compareRowMajor(e) {
          return this.row < e.row
            ? -1
            : this.row > e.row
            ? 1
            : this.col < e.col
            ? -1
            : this.col > e.col
            ? 1
            : 0;
        }
      }
      i.pool = new r.Z(i, null, null, 25, 50);
    },
    34084: (e, t, s) => {
      s.d(t, { e: () => l });
      var r = s(70586),
        i = s(95330);
      class n {
        constructor(e = (e) => e.values().next().value) {
          (this._peeker = e), (this._items = new Set());
        }
        get length() {
          return this._items.size;
        }
        clear() {
          this._items.clear();
        }
        last() {
          if (0 === this._items.size) return;
          let e;
          for (e of this._items);
          return e;
        }
        peek() {
          if (0 !== this._items.size) return this._peeker(this._items);
        }
        push(e) {
          this.contains(e) || this._items.add(e);
        }
        contains(e) {
          return this._items.has(e);
        }
        pop() {
          if (0 === this.length) return;
          const e = this.peek();
          return this._items.delete((0, r.j0)(e)), e;
        }
        popLast() {
          if (0 === this.length) return;
          const e = this.last();
          return this._items.delete((0, r.j0)(e)), e;
        }
        remove(e) {
          this._items.delete(e);
        }
        filter(e) {
          return (
            this._items.forEach((t) => {
              e(t) || this._items.delete(t);
            }),
            this
          );
        }
      }
      var o = s(1654);
      class a {
        constructor(e, t) {
          (this.item = e), (this.controller = t), (this.promise = null);
        }
      }
      class l {
        constructor(e) {
          (this._deferreds = new Map()),
            (this._controllers = new Map()),
            (this._processingItems = new Map()),
            (this._isPaused = !1),
            (this._schedule = null),
            (this._task = null),
            (this.concurrency = 1),
            e.concurrency && (this.concurrency = e.concurrency),
            (this._queue = new n(e.peeker)),
            (this.process = e.process);
          const t = e.scheduler;
          e.priority &&
            (0, r.pC)(t) &&
            (this._task = t.registerTask(e.priority, this));
        }
        destroy() {
          this.clear(),
            this._schedule &&
              (this._schedule.remove(), (this._schedule = null)),
            this._task && (this._task.remove(), (this._task = null));
        }
        get length() {
          return this._processingItems.size + this._queue.length;
        }
        abort(e) {
          const t = this._controllers.get(e);
          t && t.abort();
        }
        clear() {
          this._queue.clear();
          const e = [];
          this._controllers.forEach((t) => e.push(t)),
            this._controllers.clear(),
            e.forEach((e) => e.abort()),
            this._processingItems.clear(),
            this._cancelNext();
        }
        forEach(e) {
          this._deferreds.forEach((t, s) => e(s));
        }
        get(e) {
          const t = this._deferreds.get(e);
          return t ? t.promise : void 0;
        }
        isOngoing(e) {
          return this._processingItems.has(e);
        }
        has(e) {
          return this._deferreds.has(e);
        }
        pause() {
          this._isPaused || ((this._isPaused = !0), this._cancelNext());
        }
        push(e, t) {
          const s = this.get(e);
          if (s) return s;
          const n = new AbortController();
          let o = null;
          t && (o = (0, i.fu)(t, () => n.abort()));
          const a = () => {
              l.remove(),
                (0, r.pC)(o) && o.remove(),
                this._deferreds.delete(e),
                this._controllers.delete(e),
                this._queue.remove(e),
                this._processingItems.delete(e),
                this._scheduleNext();
            },
            l = (0, i.$F)(n.signal, () => {
              const t = this._processingItems.get(e);
              t && t.controller.abort(), a(), h.reject((0, i.zE)());
            }),
            h = (0, i.dD)();
          return (
            this._deferreds.set(e, h),
            this._controllers.set(e, n),
            h.promise.then(a, a),
            this._queue.push(e),
            this._scheduleNext(),
            h.promise
          );
        }
        last() {
          return this._queue.last();
        }
        peek() {
          return this._queue.peek();
        }
        popLast() {
          return this._queue.popLast();
        }
        reset() {
          const e = [];
          this._processingItems.forEach((t) => e.push(t)),
            this._processingItems.clear();
          for (const t of e) this._queue.push(t.item), t.controller.abort();
          this._scheduleNext();
        }
        resume() {
          this._isPaused && ((this._isPaused = !1), this._scheduleNext());
        }
        takeAll() {
          const e = [];
          for (; this._queue.length; ) e.push(this._queue.pop());
          return this.clear(), e;
        }
        get running() {
          return (
            !this._isPaused &&
            this._queue.length > 0 &&
            this._processingItems.size < this.concurrency
          );
        }
        runTask(e) {
          for (
            ;
            !e.done &&
            this._queue.length > 0 &&
            this._processingItems.size < this.concurrency;

          )
            this._process(this._queue.pop()), e.madeProgress();
        }
        _scheduleNext() {
          this._task ||
            this._isPaused ||
            this._schedule ||
            (this._schedule = (0, o.Os)(() => {
              (this._schedule = null), this._next();
            }));
        }
        _next() {
          for (
            ;
            this._queue.length > 0 &&
            this._processingItems.size < this.concurrency;

          )
            this._process(this._queue.pop());
        }
        _cancelNext() {
          this._schedule && (this._schedule.remove(), (this._schedule = null));
        }
        _processResult(e, t) {
          this._canProcessFulfillment(e) &&
            (this._scheduleNext(), this._deferreds.get(e.item).resolve(t));
        }
        _processError(e, t) {
          this._canProcessFulfillment(e) &&
            (this._scheduleNext(), this._deferreds.get(e.item).reject(t));
        }
        _canProcessFulfillment(e) {
          return (
            !!this._deferreds.get(e.item) &&
            this._processingItems.get(e.item) === e
          );
        }
        _process(e) {
          if ((0, r.Wi)(e)) return;
          let t;
          const s = new AbortController(),
            n = new a(e, s);
          this._processingItems.set(e, n);
          try {
            t = this.process(e, s.signal);
          } catch (e) {
            this._processError(n, e);
          }
          (0, i.y8)(t)
            ? ((n.promise = t),
              t.then(
                (e) => this._processResult(n, e),
                (e) => this._processError(n, e),
              ))
            : this._processResult(n, t);
        }
        get test() {
          return { update: (e) => this.runTask(e) };
        }
      }
    },
    75656: (e, t, s) => {
      s.d(t, { x: () => h }), s(80442);
      var r = s(22021),
        i = s(70586),
        n = s(49300),
        o = s(54738),
        a = s(35371),
        l = s(46314);
      class h {
        constructor(e, t, s = null) {
          if (
            ((this._context = e),
            (this.type = 'texture'),
            (this._glName = null),
            (this._descriptor = void 0),
            (this._samplingModeDirty = !1),
            (this._wrapModeDirty = !1),
            (this._wasImmutablyAllocated = !1),
            e.instanceCounter.increment(a._g.Texture, this),
            (this._descriptor = {
              target: a.No.TEXTURE_2D,
              samplingMode: a.cw.LINEAR,
              wrapMode: a.e8.REPEAT,
              flipped: !1,
              hasMipmap: !1,
              isOpaque: !1,
              unpackAlignment: 4,
              preMultiplyAlpha: !1,
              isImmutable: !1,
              ...t,
            }),
            e.type !== o.zO.WEBGL2 &&
              (this._descriptor.isImmutable &&
                (this._descriptor.isImmutable = !1),
              d(this._descriptor.target)))
          )
            throw new Error(
              '3D and array textures are not supported in WebGL1',
            );
          this._descriptor.target === a.No.TEXTURE_CUBE_MAP
            ? this._setDataCubeMap(s)
            : this.setData(s);
        }
        get glName() {
          return this._glName;
        }
        get descriptor() {
          return this._descriptor;
        }
        get isDirty() {
          return this._samplingModeDirty || this._wrapModeDirty;
        }
        dispose() {
          this._context.gl &&
            this._glName &&
            (this._context.unbindTextureAllUnits(this),
            this._context.gl.deleteTexture(this._glName),
            (this._glName = null),
            this._context.instanceCounter.decrement(a._g.Texture, this));
        }
        release() {
          this.dispose();
        }
        resize(e, t) {
          const s = this._descriptor;
          if (s.width !== e || s.height !== t) {
            if (this._wasImmutablyAllocated)
              throw new Error("Immutable textures can't be resized!");
            (s.width = e),
              (s.height = t),
              this._descriptor.target === a.No.TEXTURE_CUBE_MAP
                ? this._setDataCubeMap(null)
                : this.setData(null);
          }
        }
        _setDataCubeMap(e = null) {
          for (
            let t = a.No.TEXTURE_CUBE_MAP_POSITIVE_X;
            t <= a.No.TEXTURE_CUBE_MAP_NEGATIVE_Z;
            t++
          )
            this._setData(e, t);
        }
        setData(e) {
          this._setData(e);
        }
        _setData(e, t) {
          if (!this._context || !this._context.gl) return;
          const s = this._context.gl;
          this._glName || (this._glName = s.createTexture()),
            void 0 === e && (e = null);
          const r = this._descriptor;
          null != t || (t = r.target);
          const o = d(t);
          var g;
          null === e &&
            ((r.width = r.width || 4),
            (r.height = r.height || 4),
            o && (r.depth = null != (g = r.depth) ? g : 1));
          const f = this._context.bindTexture(this, h.TEXTURE_UNIT_FOR_UPDATES);
          this._context.setActiveTexture(h.TEXTURE_UNIT_FOR_UPDATES),
            h._validateTexture(this._context, r),
            this._configurePixelStorage();
          const _ = r.pixelFormat;
          let m = r.internalFormat
            ? r.internalFormat
            : this._deriveInternalFormat(_, r.dataType);
          if (c(e)) {
            let i = e.width,
              a = e.height;
            const l = 1;
            e instanceof HTMLVideoElement &&
              ((i = e.videoWidth), (a = e.videoHeight)),
              r.width && r.height,
              o && r.depth,
              r.isImmutable &&
                !this._wasImmutablyAllocated &&
                this._texStorage(t, m, r.hasMipmap, i, a, l),
              this._texImage(t, 0, m, i, a, l, e),
              (0, n.zu)(s),
              r.hasMipmap && this.generateMipmap(),
              void 0 === r.width && (r.width = i),
              void 0 === r.height && (r.height = a),
              o && void 0 === r.depth && (r.depth = l);
          } else {
            const { width: h, height: c, depth: d } = r;
            if (
              ((null != h && null != c) ||
                console.error('Width and height must be specified!'),
              o && null == d && console.error('Depth must be specified!'),
              r.isImmutable &&
                !this._wasImmutablyAllocated &&
                this._texStorage(t, m, r.hasMipmap, h, c, d),
              s.DEPTH24_STENCIL8 &&
                m === s.DEPTH_STENCIL &&
                (m = s.DEPTH24_STENCIL8),
              u(e))
            ) {
              const i = e.levels,
                n = p(t, h, c, d),
                o = Math.min(n - 1, i.length - 1);
              (0, l.Z)(s)
                ? s.texParameteri(r.target, s.TEXTURE_MAX_LEVEL, o)
                : (r.hasMipmap = r.hasMipmap && n === i.length);
              const u = m;
              if (
                !(function (e) {
                  return e in a.q_;
                })(u)
              )
                throw new Error(
                  'Attempting to use compressed data with an umcompressed format!',
                );
              this._forEachMipmapLevel((e, s, r, n) => {
                const o = i[Math.min(e, i.length - 1)];
                this._compressedTexImage(t, e, u, s, r, n, o);
              }, o);
            } else
              (0, i.pC)(e)
                ? (this._texImage(t, 0, m, h, c, d, e),
                  (0, n.zu)(s),
                  r.hasMipmap && this.generateMipmap())
                : this._forEachMipmapLevel((e, r, i, o) => {
                    this._texImage(t, e, m, r, i, o, null), (0, n.zu)(s);
                  });
          }
          h._applySamplingMode(s, this._descriptor),
            h._applyWrapMode(s, this._descriptor),
            h._applyAnisotropicFilteringParameters(
              this._context,
              this._descriptor,
            ),
            (0, n.zu)(s),
            this._context.bindTexture(f, h.TEXTURE_UNIT_FOR_UPDATES);
        }
        updateData(e, t, s, r, i, n) {
          n || console.error('An attempt to use uninitialized data!'),
            this._glName ||
              console.error('An attempt to update uninitialized texture!');
          const o = this._context.gl,
            a = this._descriptor,
            {
              pixelFormat: l,
              internalFormat: d,
              dataType: p,
              isImmutable: g,
              target: f,
            } = a;
          if (g && !this._wasImmutablyAllocated)
            throw new Error(
              'Cannot update immutable texture before allocation!',
            );
          const _ = this._context.bindTexture(this, h.TEXTURE_UNIT_FOR_UPDATES);
          (t < 0 ||
            s < 0 ||
            r > a.width ||
            i > a.height ||
            t + r > a.width ||
            s + i > a.height) &&
            console.error('An attempt to update out of bounds of the texture!'),
            this._configurePixelStorage(),
            c(n)
              ? o.texSubImage2D(f, e, t, s, l, p, n)
              : u(n)
              ? o.compressedTexSubImage2D(f, e, t, s, r, i, d, n.levels[e])
              : o.texSubImage2D(f, e, t, s, r, i, l, p, n),
            this._context.bindTexture(_, h.TEXTURE_UNIT_FOR_UPDATES);
        }
        updateData3D(e, t, s, r, i, n, o, a) {
          a || console.error('An attempt to use uninitialized data!'),
            this._glName ||
              console.error('An attempt to update uninitialized texture!');
          const c = this._context.gl;
          if (!(0, l.Z)(c))
            throw new Error('3D textures are not supported in WebGL1');
          const p = this._descriptor,
            {
              pixelFormat: g,
              dataType: f,
              isImmutable: _,
              target: m,
              internalFormat: y,
            } = p;
          if (_ && !this._wasImmutablyAllocated)
            throw new Error(
              'Cannot update immutable texture before allocation!',
            );
          d(m) ||
            console.warn(
              'Attempting to set 3D texture data on a non-3D texture',
            );
          const I = this._context.bindTexture(this, h.TEXTURE_UNIT_FOR_UPDATES);
          if (
            (this._context.setActiveTexture(h.TEXTURE_UNIT_FOR_UPDATES),
            (t < 0 ||
              s < 0 ||
              r < 0 ||
              i > p.width ||
              n > p.height ||
              o > p.depth ||
              t + i > p.width ||
              s + n > p.height ||
              r + o > p.depth) &&
              console.error(
                'An attempt to update out of bounds of the texture!',
              ),
            this._configurePixelStorage(),
            u(a))
          )
            (a = a.levels[e]),
              c.compressedTexSubImage3D(m, e, t, s, r, i, n, o, y, a);
          else {
            const l = a;
            c.texSubImage3D(m, e, t, s, r, i, n, o, g, f, l);
          }
          this._context.bindTexture(I, h.TEXTURE_UNIT_FOR_UPDATES);
        }
        generateMipmap() {
          const e = this._descriptor;
          if (!e.hasMipmap) {
            if (this._wasImmutablyAllocated)
              throw new Error(
                'Cannot add mipmaps to immutable texture after allocation',
              );
            (e.hasMipmap = !0),
              (this._samplingModeDirty = !0),
              h._validateTexture(this._context, e);
          }
          e.samplingMode === a.cw.LINEAR
            ? ((this._samplingModeDirty = !0),
              (e.samplingMode = a.cw.LINEAR_MIPMAP_NEAREST))
            : e.samplingMode === a.cw.NEAREST &&
              ((this._samplingModeDirty = !0),
              (e.samplingMode = a.cw.NEAREST_MIPMAP_NEAREST));
          const t = this._context.bindTexture(this, h.TEXTURE_UNIT_FOR_UPDATES);
          this._context.setActiveTexture(h.TEXTURE_UNIT_FOR_UPDATES),
            this._context.gl.generateMipmap(e.target),
            this._context.bindTexture(t, h.TEXTURE_UNIT_FOR_UPDATES);
        }
        setSamplingMode(e) {
          e !== this._descriptor.samplingMode &&
            ((this._descriptor.samplingMode = e),
            (this._samplingModeDirty = !0));
        }
        setWrapMode(e) {
          e !== this._descriptor.wrapMode &&
            ((this._descriptor.wrapMode = e),
            h._validateTexture(this._context, this._descriptor),
            (this._wrapModeDirty = !0));
        }
        applyChanges() {
          const e = this._context.gl,
            t = this._descriptor;
          this._samplingModeDirty &&
            (h._applySamplingMode(e, t), (this._samplingModeDirty = !1)),
            this._wrapModeDirty &&
              (h._applyWrapMode(e, t), (this._wrapModeDirty = !1));
        }
        _deriveInternalFormat(e, t) {
          if (this._context.type === o.zO.WEBGL1) return e;
          switch (t) {
            case a.Br.FLOAT:
              switch (e) {
                case a.VI.RGBA:
                  return a.lP.RGBA32F;
                case a.VI.RGB:
                  return a.lP.RGB32F;
                default:
                  throw new Error('Unable to derive format');
              }
            case a.Br.UNSIGNED_BYTE:
              switch (e) {
                case a.VI.RGBA:
                  return a.lP.RGBA8;
                case a.VI.RGB:
                  return a.lP.RGB8;
              }
            default:
              return e;
          }
        }
        _configurePixelStorage() {
          const e = this._context.gl,
            {
              unpackAlignment: t,
              flipped: s,
              preMultiplyAlpha: r,
            } = this._descriptor;
          e.pixelStorei(e.UNPACK_ALIGNMENT, t),
            e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, s ? 1 : 0),
            e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, r ? 1 : 0);
        }
        _texStorage(e, t, s, r, i, n) {
          const o = this._context.gl;
          if (!(0, l.Z)(o))
            throw new Error('Immutable textures are not supported in WebGL1');
          if (
            !(function (e) {
              return e in a.lP;
            })(t)
          )
            throw new Error(
              'Immutable textures must have a sized internal format',
            );
          if (!this._descriptor.isImmutable) return;
          const h = s ? p(e, r, i, n) : 1;
          d(e)
            ? o.texStorage3D(e, h, t, r, i, n)
            : o.texStorage2D(e, h, t, r, i),
            (this._wasImmutablyAllocated = !0);
        }
        _texImage(e, t, s, r, n, a, l) {
          const h = this._context.gl;
          let u = null;
          const p = this._context.type === o.zO.WEBGL2,
            g = d(e),
            { isImmutable: f, pixelFormat: _, dataType: m } = this._descriptor;
          if ((p && (u = h), p || !c(l)))
            if (f) {
              if ((0, i.pC)(l)) {
                const s = l;
                g
                  ? u.texSubImage3D(e, t, 0, 0, 0, r, n, a, _, m, s)
                  : h.texSubImage2D(e, t, 0, 0, r, n, _, m, s);
              }
            } else {
              const o = (0, i.Wg)(l);
              g
                ? u.texImage3D(e, t, s, r, n, a, 0, _, m, o)
                : h.texImage2D(e, t, s, r, n, 0, _, m, o);
            }
          else h.texImage2D(e, 0, s, _, m, l);
        }
        _compressedTexImage(e, t, s, r, n, a, l) {
          const h = this._context.gl;
          let u = null;
          const c = d(e),
            p = this._descriptor.isImmutable;
          if (c) {
            if (this._context.type !== o.zO.WEBGL2)
              throw new Error('3D textures are not supported in WebGL1');
            u = h;
          }
          p
            ? (0, i.pC)(l) &&
              (c
                ? u.compressedTexSubImage3D(e, t, 0, 0, 0, r, n, a, s, l)
                : h.compressedTexSubImage2D(e, t, 0, 0, r, n, s, l))
            : c
            ? u.compressedTexImage3D(e, t, s, r, n, a, 0, l)
            : h.compressedTexImage2D(e, t, s, r, n, 0, l);
        }
        _forEachMipmapLevel(e, t = 1 / 0) {
          let {
            width: s,
            height: r,
            depth: i,
            hasMipmap: n,
            target: o,
          } = this._descriptor;
          const l = o === a.No.TEXTURE_3D;
          for (
            let o = 0;
            e(o, s, r, i),
              n && (1 !== s || 1 !== r || (l && 1 !== i)) && !(o >= t);
            ++o
          )
            (s = Math.max(1, s >> 1)),
              (r = Math.max(1, r >> 1)),
              l && (i = Math.max(1, i >> 1));
        }
        static _validateTexture(e, t) {
          (t.width < 0 || t.height < 0 || t.depth < 0) &&
            console.error('Negative dimension parameters are not allowed!');
          const s = (0, l.Z)(e.gl),
            i = (0, r.wt)(t.width) && (0, r.wt)(t.height);
          s ||
            (!t.isImmutable && !d(t.target)) ||
            console.error(
              'Immutable and 3D-like textures are not supported in WebGL1!',
            ),
            s ||
              i ||
              ('number' == typeof t.wrapMode
                ? t.wrapMode !== a.e8.CLAMP_TO_EDGE &&
                  console.error(
                    'Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!',
                  )
                : (t.wrapMode.s === a.e8.CLAMP_TO_EDGE &&
                    t.wrapMode.t === a.e8.CLAMP_TO_EDGE) ||
                  console.error(
                    'Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!',
                  ),
              t.hasMipmap &&
                console.error('Mipmapping requires power-of-two textures!'));
        }
        static _applySamplingMode(e, t) {
          let s = t.samplingMode,
            r = t.samplingMode;
          s === a.cw.LINEAR_MIPMAP_NEAREST || s === a.cw.LINEAR_MIPMAP_LINEAR
            ? ((s = a.cw.LINEAR), t.hasMipmap || (r = a.cw.LINEAR))
            : (s !== a.cw.NEAREST_MIPMAP_NEAREST &&
                s !== a.cw.NEAREST_MIPMAP_LINEAR) ||
              ((s = a.cw.NEAREST), t.hasMipmap || (r = a.cw.NEAREST)),
            e.texParameteri(t.target, e.TEXTURE_MAG_FILTER, s),
            e.texParameteri(t.target, e.TEXTURE_MIN_FILTER, r);
        }
        static _applyWrapMode(e, t) {
          'number' == typeof t.wrapMode
            ? (e.texParameteri(t.target, e.TEXTURE_WRAP_S, t.wrapMode),
              e.texParameteri(t.target, e.TEXTURE_WRAP_T, t.wrapMode))
            : (e.texParameteri(t.target, e.TEXTURE_WRAP_S, t.wrapMode.s),
              e.texParameteri(t.target, e.TEXTURE_WRAP_T, t.wrapMode.t));
        }
        static _applyAnisotropicFilteringParameters(e, t) {
          var s;
          const r = e.capabilities.textureFilterAnisotropic;
          r &&
            e.gl.texParameterf(
              t.target,
              r.TEXTURE_MAX_ANISOTROPY,
              null != (s = t.maxAnisotropy) ? s : 1,
            );
        }
      }
      function u(e) {
        return (0, i.pC)(e) && 'type' in e && 'compressed' === e.type;
      }
      function c(e) {
        return (
          (0, i.pC)(e) &&
          !u(e) &&
          !(function (e) {
            return (0, i.pC)(e) && 'byteLength' in e;
          })(e)
        );
      }
      function d(e) {
        return e === a.No.TEXTURE_3D || e === a.No.TEXTURE_2D_ARRAY;
      }
      function p(e, t, s, r = 1) {
        let i = Math.max(t, s);
        return (
          e === a.No.TEXTURE_3D && (i = Math.max(i, r)),
          Math.round(Math.log(i) / Math.LN2) + 1
        );
      }
      h.TEXTURE_UNIT_FOR_UPDATES = 0;
    },
    46314: (e, t, s) => {
      function r(e) {
        return (
          window.WebGL2RenderingContext &&
          e instanceof window.WebGL2RenderingContext
        );
      }
      s.d(t, { Z: () => r });
    },
    49300: (e, t, s) => {
      s.d(t, { zu: () => h, hZ: () => a, CG: () => l });
      var r = s(20102),
        i = s(80442);
      const n = s(92604).Z.getLogger('esri/views/webgl'),
        o = !!(0, i.Z)('enable-feature:webgl-debug');
      function a() {
        return o;
      }
      function l() {
        return o;
      }
      function h(e) {
        if (a()) {
          const t = e.getError();
          if (t) {
            const s = (function (e, t) {
                switch (t) {
                  case e.INVALID_ENUM:
                    return 'Invalid Enum. An unacceptable value has been specified for an enumerated argument.';
                  case e.INVALID_VALUE:
                    return 'Invalid Value. A numeric argument is out of range.';
                  case e.INVALID_OPERATION:
                    return 'Invalid Operation. The specified command is not allowed for the current state.';
                  case e.INVALID_FRAMEBUFFER_OPERATION:
                    return 'Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.';
                  case e.OUT_OF_MEMORY:
                    return 'Out of memory. Not enough memory is left to execute the command.';
                  case e.CONTEXT_LOST_WEBGL:
                    return 'WebGL context has been lost';
                  default:
                    return 'Unknown error';
                }
              })(e, t),
              i = new Error().stack;
            n.error(
              new r.Z('webgl-error', 'WebGL error occured', {
                message: s,
                stack: i,
              }),
            );
          }
        }
      }
    },
    54738: (e, t, s) => {
      var r, i;
      function n(e, t, s = {}) {
        const i =
          t === r.WEBGL1
            ? ['webgl', 'experimental-webgl', 'webkit-3d', 'moz-webgl']
            : ['webgl2'];
        let n = null;
        for (const t of i) {
          try {
            n = e.getContext(t, s);
          } catch (e) {}
          if (n) break;
        }
        return n;
      }
      s.d(t, { zO: () => r, kr: () => n }),
        s(80442),
        ((i = r || (r = {}))[(i.WEBGL1 = 1)] = 'WEBGL1'),
        (i[(i.WEBGL2 = 2)] = 'WEBGL2');
    },
  },
]);
