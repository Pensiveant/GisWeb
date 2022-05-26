'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [4547],
  {
    83305: (e, t, n) => {
      n.d(t, {
        e: () => l,
        f: () => E,
        g: () => u,
        h: () => A,
        i: () => i,
        j: () => N,
        l: () => P,
        p: () => G,
      });
      var r = n(99880),
        o = n(80442);
      let _,
        s = null;
      function i() {
        return !!s;
      }
      function P() {
        return (
          _ ||
          ((_ = n
            .e(6774)
            .then(n.bind(n, 66774))
            .then((e) => e.p)
            .then(({ default: e }) =>
              e({ locateFile: (e) => (0, r.V)(`esri/geometry/support/${e}`) }),
            )
            .then((e) => {
              T(e);
            })),
          _)
        );
      }
      var u, E, l, c;
      !(function (e) {
        function t(e, t, n) {
          s.ensureCache.prepare();
          const r = h(n),
            o = n === r,
            _ = s.ensureFloat64(r),
            i = s._pe_geog_to_proj(s.getPointer(e), t, _);
          return i && d(n, t, _, o), i;
        }
        function n(e, t, n) {
          return r(e, t, n, 0);
        }
        function r(e, t, n, r) {
          s.ensureCache.prepare();
          const o = h(n),
            _ = n === o,
            i = s.ensureFloat64(o),
            P = s._pe_proj_to_geog_center(s.getPointer(e), t, i, r);
          return P && d(n, t, i, _), P;
        }
        (e.geogToProj = t),
          (e.projGeog = function (e, r, o, _) {
            switch (_) {
              case E.PE_TRANSFORM_P_TO_G:
                return n(e, r, o);
              case E.PE_TRANSFORM_G_TO_P:
                return t(e, r, o);
            }
            return 0;
          }),
          (e.projToGeog = n),
          (e.projToGeogCenter = r);
      })(u || (u = {})),
        ((c = E || (E = {})).init = function () {
          (c.PE_BUFFER_MAX = s.PeDefs.prototype.PE_BUFFER_MAX),
            (c.PE_NAME_MAX = s.PeDefs.prototype.PE_NAME_MAX),
            (c.PE_MGRS_MAX = s.PeDefs.prototype.PE_MGRS_MAX),
            (c.PE_USNG_MAX = s.PeDefs.prototype.PE_USNG_MAX),
            (c.PE_DD_MAX = s.PeDefs.prototype.PE_DD_MAX),
            (c.PE_DDM_MAX = s.PeDefs.prototype.PE_DDM_MAX),
            (c.PE_DMS_MAX = s.PeDefs.prototype.PE_DMS_MAX),
            (c.PE_UTM_MAX = s.PeDefs.prototype.PE_UTM_MAX),
            (c.PE_PARM_MAX = s.PeDefs.prototype.PE_PARM_MAX),
            (c.PE_TYPE_NONE = s.PeDefs.prototype.PE_TYPE_NONE),
            (c.PE_TYPE_GEOGCS = s.PeDefs.prototype.PE_TYPE_GEOGCS),
            (c.PE_TYPE_PROJCS = s.PeDefs.prototype.PE_TYPE_PROJCS),
            (c.PE_TYPE_GEOGTRAN = s.PeDefs.prototype.PE_TYPE_GEOGTRAN),
            (c.PE_TYPE_COORDSYS = s.PeDefs.prototype.PE_TYPE_COORDSYS),
            (c.PE_TYPE_UNIT = s.PeDefs.prototype.PE_TYPE_UNIT),
            (c.PE_TYPE_LINUNIT = s.PeDefs.prototype.PE_TYPE_LINUNIT),
            (c.PE_STR_OPTS_NONE = s.PeDefs.prototype.PE_STR_OPTS_NONE),
            (c.PE_STR_AUTH_NONE = s.PeDefs.prototype.PE_STR_AUTH_NONE),
            (c.PE_STR_AUTH_TOP = s.PeDefs.prototype.PE_STR_AUTH_TOP),
            (c.PE_STR_NAME_CANON = s.PeDefs.prototype.PE_STR_NAME_CANON),
            (c.PE_PARM_X0 = s.PeDefs.prototype.PE_PARM_X0),
            (c.PE_PARM_ND = s.PeDefs.prototype.PE_PARM_ND),
            (c.PE_TRANSFORM_1_TO_2 = s.PeDefs.prototype.PE_TRANSFORM_1_TO_2),
            (c.PE_TRANSFORM_2_TO_1 = s.PeDefs.prototype.PE_TRANSFORM_2_TO_1),
            (c.PE_TRANSFORM_P_TO_G = s.PeDefs.prototype.PE_TRANSFORM_P_TO_G),
            (c.PE_TRANSFORM_G_TO_P = s.PeDefs.prototype.PE_TRANSFORM_G_TO_P),
            (c.PE_HORIZON_RECT = s.PeDefs.prototype.PE_HORIZON_RECT),
            (c.PE_HORIZON_POLY = s.PeDefs.prototype.PE_HORIZON_POLY),
            (c.PE_HORIZON_LINE = s.PeDefs.prototype.PE_HORIZON_LINE),
            (c.PE_HORIZON_DELTA = s.PeDefs.prototype.PE_HORIZON_DELTA);
        }),
        (function (e) {
          const t = {},
            n = {},
            r = (e) => {
              if (e) {
                const t = e.getType();
                switch (t) {
                  case E.PE_TYPE_GEOGCS:
                    e = s.castObject(e, s.PeGeogcs);
                    break;
                  case E.PE_TYPE_PROJCS:
                    e = s.castObject(e, s.PeProjcs);
                    break;
                  case E.PE_TYPE_GEOGTRAN:
                    e = s.castObject(e, s.PeGeogtran);
                    break;
                  default:
                    t & E.PE_TYPE_UNIT && (e = s.castObject(e, s.PeUnit));
                }
              }
              return e;
            };
          function o(e, n) {
            let o = null,
              _ = t[e];
            if ((_ || ((_ = {}), (t[e] = _)), _.hasOwnProperty(String(n))))
              o = _[n];
            else {
              const t = s.PeFactory.prototype.factoryByType(e, n);
              s.compare(t, s.NULL) || ((o = t), (_[n] = o));
            }
            return (o = r(o)), o;
          }
          (e.initialize = function () {
            s.PeFactory.prototype.initialize(null);
          }),
            (e.coordsys = function (e) {
              return o(E.PE_TYPE_COORDSYS, e);
            }),
            (e.factoryByType = o),
            (e.fromString = function (e, t) {
              let o = null,
                _ = n[e];
              if ((_ || ((_ = {}), (n[e] = _)), _.hasOwnProperty(t))) o = _[t];
              else {
                const n = s.PeFactory.prototype.fromString(e, t);
                s.compare(n, s.NULL) || ((o = n), (_[t] = o));
              }
              return (o = r(o)), o;
            }),
            (e.geogcs = function (e) {
              return o(E.PE_TYPE_GEOGCS, e);
            }),
            (e.geogtran = function (e) {
              return o(E.PE_TYPE_GEOGTRAN, e);
            }),
            (e.getCode = function (e) {
              return s.PeFactory.prototype.getCode(e);
            }),
            (e.projcs = function (e) {
              return o(E.PE_TYPE_PROJCS, e);
            }),
            (e.unit = function (e) {
              return o(E.PE_TYPE_UNIT, e);
            });
        })(l || (l = {}));
      let a = null;
      var S, C, A, f, R, p, O, N, M;
      function T(e) {
        function t(e, t, n) {
          e[t] = n(e[t]);
        }
        (s = e),
          E.init(),
          S.init(),
          R.init(),
          O.init(),
          N.init(),
          (a = class extends s.PeGCSExtent {
            destroy() {
              s.destroy(this);
            }
          });
        const n = [
          s.PeDatum,
          s.PeGeogcs,
          s.PeGeogtran,
          s.PeObject,
          s.PeParameter,
          s.PePrimem,
          s.PeProjcs,
          s.PeSpheroid,
          s.PeUnit,
        ];
        for (const e of n)
          t(
            e.prototype,
            'getName',
            (e) =>
              function () {
                return e.call(this, new Array(E.PE_NAME_MAX));
              },
          );
        for (const e of [s.PeGeogtran, s.PeProjcs])
          t(
            e.prototype,
            'getParameters',
            (e) =>
              function () {
                const t = new Array(E.PE_PARM_MAX);
                let n = e.call(this);
                for (let e = 0; e < t.length; e++) {
                  const r = s.getValue(n, '*');
                  (t[e] = r ? s.wrapPointer(r, s.PeParameter) : null),
                    (n += Int32Array.BYTES_PER_ELEMENT);
                }
                return t;
              },
          );
        t(
          s.PeHorizon.prototype,
          'getCoord',
          (e) =>
            function () {
              const t = this.getSize();
              if (!t) return null;
              const n = [];
              return d(n, t, e.call(this)), n;
            },
        ),
          t(s.PeGTlistExtendedEntry.prototype, 'getEntries', (e) => {
            const t = s._pe_getPeGTlistExtendedGTsSize();
            return function () {
              let n = null;
              const r = e.call(this);
              if (!s.compare(r, s.NULL)) {
                n = [r];
                const e = this.getSteps();
                if (e > 1) {
                  const o = s.getPointer(r);
                  for (let r = 1; r < e; r++)
                    n.push(s.wrapPointer(o + t * r, s.PeGTlistExtendedGTs));
                }
              }
              return n;
            };
          });
        const r = s._pe_getPeHorizonSize(),
          o = (e) =>
            function () {
              let t = this._cache;
              if ((t || ((t = new Map()), (this._cache = t)), t.has(e)))
                return t.get(e);
              let n = null;
              const o = e.call(this);
              if (!s.compare(o, s.NULL)) {
                n = [o];
                const e = o.getNump();
                if (e > 1) {
                  const t = s.getPointer(o);
                  for (let o = 1; o < e; o++)
                    n.push(s.wrapPointer(t + r * o, s.PeHorizon));
                }
              }
              return t.set(e, n), n;
            };
        t(s.PeProjcs.prototype, 'horizonGcsGenerate', o),
          t(s.PeProjcs.prototype, 'horizonPcsGenerate', o),
          (s.PeObject.prototype.toString = function (e = E.PE_STR_OPTS_NONE) {
            s.ensureCache.prepare();
            const t = s.getPointer(this),
              n = s.ensureInt8(new Array(E.PE_BUFFER_MAX));
            return s.UTF8ToString(s._pe_object_to_string_ext(t, e, n));
          });
      }
      function g(e) {
        if (!e) return;
        const t = s.getClass(e);
        if (!t) return;
        const n = s.getCache(t);
        if (!n) return;
        const r = s.getPointer(e);
        r && delete n[r];
      }
      function L(e, t) {
        const n = [],
          r = new Array(t);
        for (let t = 0; t < e; t++) n.push(s.ensureInt8(r));
        return n;
      }
      function h(e) {
        let t;
        return (
          Array.isArray(e[0])
            ? ((t = []),
              e.forEach((e) => {
                t.push(e[0], e[1]);
              }))
            : (t = e),
          t
        );
      }
      function d(e, t, n, r = !1) {
        if (r)
          for (let r = 0; r < 2 * t; r++)
            e[r] = s.getValue(n + r * Float64Array.BYTES_PER_ELEMENT, 'double');
        else {
          const r = 0 === e.length;
          for (let o = 0; o < t; o++)
            r && (e[o] = new Array(2)),
              (e[o][0] = s.getValue(n, 'double')),
              (e[o][1] = s.getValue(
                n + Float64Array.BYTES_PER_ELEMENT,
                'double',
              )),
              (n += 2 * Float64Array.BYTES_PER_ELEMENT);
        }
      }
      !(function (e) {
        let t;
        (e.init = function () {
          (e.PE_GTLIST_OPTS_COMMON =
            s.PeGTlistExtended.prototype.PE_GTLIST_OPTS_COMMON),
            (t = s._pe_getPeGTlistExtendedEntrySize());
        }),
          (e.getGTlist = function (e, n, r, o, _, i) {
            let P = null;
            const u = new s.PeInteger(i);
            try {
              const E = s.PeGTlistExtended.prototype.getGTlist(
                e,
                n,
                r,
                o,
                _,
                u,
              );
              if ((i = u.val) && ((P = [E]), i > 1)) {
                const e = s.getPointer(E);
                for (let n = 1; n < i; n++)
                  P.push(s.wrapPointer(e + t * n, s.PeGTlistExtendedEntry));
              }
            } finally {
              s.destroy(u);
            }
            return P;
          });
      })(S || (S = {})),
        (function (e) {
          e.destroy = function (e) {
            if (e && e.length) {
              for (const t of e)
                g(t),
                  t.getEntries().forEach((e) => {
                    g(e);
                    const t = e.getGeogtran();
                    g(t),
                      t.getParameters().forEach(g),
                      [t.getGeogcs1(), t.getGeogcs2()].forEach((e) => {
                        g(e);
                        const t = e.getDatum();
                        g(t),
                          g(t.getSpheroid()),
                          g(e.getPrimem()),
                          g(e.getUnit());
                      });
                  });
              s.PeGTlistExtendedEntry.prototype.Delete(e[0]);
            }
          };
        })(C || (C = {})),
        (function (e) {
          e.geogToGeog = function (e, t, n, r, o) {
            s.ensureCache.prepare();
            const _ = h(n),
              i = n === _,
              P = s.ensureFloat64(_);
            let u = 0;
            r && (u = s.ensureFloat64(r));
            const E = s._pe_geog_to_geog(s.getPointer(e), t, P, u, o);
            return E && d(n, t, P, i), E;
          };
        })(A || (A = {})),
        (function (e) {
          const t = (e, t, n, r, o, _) => {
              let i, P;
              switch ((s.ensureCache.prepare(), e)) {
                case 'dd':
                  (i = s._pe_geog_to_dd), (P = E.PE_DD_MAX);
                  break;
                case 'ddm':
                  (i = s._pe_geog_to_ddm), (P = E.PE_DDM_MAX);
                  break;
                case 'dms':
                  (i = s._pe_geog_to_dms), (P = E.PE_DMS_MAX);
              }
              let u = 0;
              t && (u = s.getPointer(t));
              const l = h(r),
                c = s.ensureFloat64(l),
                a = L(n, P),
                S = i(u, n, c, o, s.ensureInt32(a));
              if (S) for (let e = 0; e < n; e++) _[e] = s.UTF8ToString(a[e]);
              return S;
            },
            n = (e, t, n, r, o) => {
              let _;
              switch ((s.ensureCache.prepare(), e)) {
                case 'dd':
                  _ = s._pe_dd_to_geog;
                  break;
                case 'ddm':
                  _ = s._pe_ddm_to_geog;
                  break;
                case 'dms':
                  _ = s._pe_dms_to_geog;
              }
              let i = 0;
              t && (i = s.getPointer(t));
              const P = r.map((e) => s.ensureString(e)),
                u = s.ensureInt32(P),
                E = s.ensureFloat64(new Array(2 * n)),
                l = _(i, n, u, E);
              return l && d(o, n, E), l;
            };
          (e.geogToDms = function (e, n, r, o, _) {
            return t('dms', e, n, r, o, _);
          }),
            (e.dmsToGeog = function (e, t, r, o) {
              return n('dms', e, t, r, o);
            }),
            (e.geogToDdm = function (e, n, r, o, _) {
              return t('ddm', e, n, r, o, _);
            }),
            (e.ddmToGeog = function (e, t, r, o) {
              return n('ddm', e, t, r, o);
            }),
            (e.geogToDd = function (e, n, r, o, _) {
              return t('dd', e, n, r, o, _);
            }),
            (e.ddToGeog = function (e, t, r, o) {
              return n('dd', e, t, r, o);
            });
        })(f || (f = {})),
        (function (e) {
          (e.init = function () {
            (e.PE_MGRS_STYLE_NEW =
              s.PeNotationMgrs.prototype.PE_MGRS_STYLE_NEW),
              (e.PE_MGRS_STYLE_OLD =
                s.PeNotationMgrs.prototype.PE_MGRS_STYLE_OLD),
              (e.PE_MGRS_STYLE_AUTO =
                s.PeNotationMgrs.prototype.PE_MGRS_STYLE_AUTO),
              (e.PE_MGRS_180_ZONE_1_PLUS =
                s.PeNotationMgrs.prototype.PE_MGRS_180_ZONE_1_PLUS),
              (e.PE_MGRS_ADD_SPACES =
                s.PeNotationMgrs.prototype.PE_MGRS_ADD_SPACES);
          }),
            (e.geogToMgrsExtended = function (e, t, n, r, o, _, i) {
              s.ensureCache.prepare();
              let P = 0;
              e && (P = s.getPointer(e));
              const u = h(n),
                l = s.ensureFloat64(u),
                c = L(t, E.PE_MGRS_MAX),
                a = s.ensureInt32(c),
                S = s._pe_geog_to_mgrs_extended(P, t, l, r, o, _, a);
              if (S) for (let e = 0; e < t; e++) i[e] = s.UTF8ToString(c[e]);
              return S;
            }),
            (e.mgrsToGeogExtended = function (e, t, n, r, o) {
              s.ensureCache.prepare();
              let _ = 0;
              e && (_ = s.getPointer(e));
              const i = n.map((e) => s.ensureString(e)),
                P = s.ensureInt32(i),
                u = s.ensureFloat64(new Array(2 * t)),
                E = s._pe_mgrs_to_geog_extended(_, t, P, r, u);
              return E && d(o, t, u), E;
            });
        })(R || (R = {})),
        (function (e) {
          (e.geogToUsng = function (e, t, n, r, o, _, i) {
            s.ensureCache.prepare();
            let P = 0;
            e && (P = s.getPointer(e));
            const u = h(n),
              l = s.ensureFloat64(u),
              c = L(t, E.PE_MGRS_MAX),
              a = s.ensureInt32(c),
              S = s._pe_geog_to_usng(P, t, l, r, o, _, a);
            if (S) for (let e = 0; e < t; e++) i[e] = s.UTF8ToString(c[e]);
            return S;
          }),
            (e.usngToGeog = function (e, t, n, r) {
              s.ensureCache.prepare();
              let o = 0;
              e && (o = s.getPointer(e));
              const _ = n.map((e) => s.ensureString(e)),
                i = s.ensureInt32(_),
                P = s.ensureFloat64(new Array(2 * t)),
                u = s._pe_usng_to_geog(o, t, i, P);
              return u && d(r, t, P), u;
            });
        })(p || (p = {})),
        (function (e) {
          (e.init = function () {
            (e.PE_UTM_OPTS_NONE = s.PeNotationUtm.prototype.PE_UTM_OPTS_NONE),
              (e.PE_UTM_OPTS_ADD_SPACES =
                s.PeNotationUtm.prototype.PE_UTM_OPTS_ADD_SPACES),
              (e.PE_UTM_OPTS_NS = s.PeNotationUtm.prototype.PE_UTM_OPTS_NS);
          }),
            (e.geogToUtm = function (e, t, n, r, o) {
              s.ensureCache.prepare();
              let _ = 0;
              e && (_ = s.getPointer(e));
              const i = h(n),
                P = s.ensureFloat64(i),
                u = L(t, E.PE_UTM_MAX),
                l = s.ensureInt32(u),
                c = s._pe_geog_to_utm(_, t, P, r, l);
              if (c) for (let e = 0; e < t; e++) o[e] = s.UTF8ToString(u[e]);
              return c;
            }),
            (e.utmToGeog = function (e, t, n, r, o) {
              s.ensureCache.prepare();
              let _ = 0;
              e && (_ = s.getPointer(e));
              const i = n.map((e) => s.ensureString(e)),
                P = s.ensureInt32(i),
                u = s.ensureFloat64(new Array(2 * t)),
                E = s._pe_utm_to_geog(_, t, P, r, u);
              return E && d(o, t, u), E;
            });
        })(O || (O = {})),
        (function (e) {
          const t = new Map();
          (e.init = function () {
            (e.PE_PCSINFO_OPTION_NONE =
              s.PePCSInfo.prototype.PE_PCSINFO_OPTION_NONE),
              (e.PE_PCSINFO_OPTION_DOMAIN =
                s.PePCSInfo.prototype.PE_PCSINFO_OPTION_DOMAIN),
              (e.PE_POLE_OUTSIDE_BOUNDARY =
                s.PePCSInfo.prototype.PE_POLE_OUTSIDE_BOUNDARY),
              (e.PE_POLE_POINT = s.PePCSInfo.prototype.PE_POLE_POINT);
          }),
            (e.generate = function (n, r = e.PE_PCSINFO_OPTION_DOMAIN) {
              let o, _;
              return (
                t.has(n) && ((_ = t.get(n)), _[r] && (o = _[r])),
                o ||
                  ((o = s.PePCSInfo.prototype.generate(n, r)),
                  _ || ((_ = []), t.set(n, _)),
                  (_[r] = o)),
                o
              );
            });
        })(N || (N = {})),
        (function (e) {
          e.versionString = function () {
            return s.PeVersion.prototype.version_string();
          };
        })(M || (M = {}));
      const G = Object.freeze({
        __proto__: null,
        get _pe() {
          return s;
        },
        isLoaded: i,
        isSupported: function () {
          return !!(0, o.Z)('esri-wasm');
        },
        load: P,
        get PeCSTransformations() {
          return u;
        },
        get PeDefs() {
          return E;
        },
        get PeFactory() {
          return l;
        },
        get PeGCSExtent() {
          return a;
        },
        get PeGTlistExtended() {
          return S;
        },
        get PeGTlistExtendedEntry() {
          return C;
        },
        get PeGTTransformations() {
          return A;
        },
        get PeNotationDms() {
          return f;
        },
        get PeNotationMgrs() {
          return R;
        },
        get PeNotationUsng() {
          return p;
        },
        get PeNotationUtm() {
          return O;
        },
        get PePCSInfo() {
          return N;
        },
        get PeVersion() {
          return M;
        },
        _init: T,
      });
    },
    44547: (e, t, n) => {
      n.d(t, {
        Up: () => w,
        Bm: () => j,
        iQ: () => U,
        kR: () => G,
        zD: () => I,
        iV: () => y,
        CM: () => B,
        oj: () => F,
        KC: () => k,
        Wt: () => D,
      });
      var r = n(20102),
        o = n(22021),
        _ = n(70586),
        s = n(95330),
        i = n(67900),
        P = n(52138),
        u = (n(17896), n(65617)),
        E = n(6570),
        l = n(65091),
        c = n(83305),
        a = n(13473),
        S = n(38913),
        C = n(58901),
        A = n(24678),
        f = (n(24470), n(68441));
      Math.PI;
      const R = f.sv.radius,
        p = f.sv.eccentricitySquared,
        O = {
          a1: R * p,
          a2: R * p * R * p,
          a3: (R * p * p) / 2,
          a4: R * p * R * p * 2.5,
          a5: R * p + (R * p * p) / 2,
          a6: 1 - p,
        };
      f.sv.radius,
        f.sv.flattening,
        f.Z1.radius,
        f.Z1.flattening,
        f.yr.radius,
        f.yr.flattening,
        f.yr.radius;
      var N = n(18571),
        M = n(8744),
        T = n(56726);
      n(69285);
      let g = null,
        L = null,
        h = null,
        d = {};
      function G() {
        return !!g && (0, c.i)();
      }
      function I(e) {
        return (
          (0, _.Wi)(h) &&
            (h = Promise.all([
              (0, c.l)(),
              n
                .e(5837)
                .then(n.bind(n, 45837))
                .then((e) => e.g),
              n.e(819).then(n.bind(n, 80819)),
            ])),
          h.then(([, t, { hydratedAdapter: n }]) => {
            (0, s.k_)(e), (L = n), (g = t.default), g._enableProjection(c.p);
          })
        );
      }
      function y(e, t, n = null) {
        return Array.isArray(e)
          ? 0 === e.length
            ? []
            : F(L, e, e[0].spatialReference, t, n)
          : F(L, [e], e.spatialReference, t, n)[0];
      }
      function F(e, t, n, r, o = null) {
        if ((0, _.Wi)(n) || (0, _.Wi)(r)) return t;
        if (w(n, r, o))
          return t.map((e) =>
            (0, _.Wg)(
              (function (e, t, n) {
                return e
                  ? 'x' in e
                    ? (function (e, t, n, r, o) {
                        (Oe[0] = e.x), (Oe[1] = e.y);
                        const _ = e.z;
                        return (
                          (Oe[2] = void 0 !== _ ? _ : o),
                          B(Oe, t, 0, Oe, r, 0, 1)
                            ? ((n.x = Oe[0]),
                              (n.y = Oe[1]),
                              (n.spatialReference = r),
                              void 0 === _
                                ? ((n.z = void 0), (n.hasZ = !1))
                                : ((n.z = Oe[2]), (n.hasZ = !0)),
                              void 0 === e.m
                                ? ((n.m = void 0), (n.hasM = !1))
                                : ((n.m = e.m), (n.hasM = !0)),
                              n)
                            : null
                        );
                      })(e, t, new a.Z(), n, 0)
                    : 'xmin' in e
                    ? (function (e, t, n, r, o) {
                        const {
                          xmin: _,
                          ymin: s,
                          xmax: i,
                          ymax: P,
                          hasZ: u,
                          hasM: E,
                        } = e;
                        return v(_, s, u ? e.zmin : o, t, Oe, r)
                          ? ((n.xmin = Oe[0]),
                            (n.ymin = Oe[1]),
                            u && (n.zmin = Oe[2]),
                            v(i, P, u ? e.zmax : o, t, Oe, r)
                              ? ((n.xmax = Oe[0]),
                                (n.ymax = Oe[1]),
                                u && (n.zmax = Oe[2]),
                                E && ((n.mmin = e.mmin), (n.mmax = e.mmax)),
                                (n.spatialReference = r),
                                n)
                              : null)
                          : null;
                      })(e, t, new E.Z(), n, 0)
                    : 'rings' in e
                    ? H(e, t, new S.Z(), n, 0)
                    : 'paths' in e
                    ? (function (e, t, n, r, o) {
                        const { paths: _, hasZ: s, hasM: i } = e,
                          P = [];
                        return Y(_, s, i, t, P, r, o)
                          ? ((n.paths = P),
                            (n.spatialReference = r),
                            (n.hasZ = s),
                            (n.hasM = i),
                            n)
                          : null;
                      })(e, t, new C.Z(), n, 0)
                    : 'points' in e
                    ? (function (e, t, n, r, o) {
                        const { points: _, hasZ: s, hasM: i } = e,
                          P = [],
                          u = _.length,
                          E = [];
                        for (const e of _) E.push(e[0], e[1], s ? e[2] : o);
                        if (!B(E, t, 0, E, r, 0, u)) return null;
                        for (let e = 0; e < u; ++e) {
                          const t = 3 * e,
                            n = E[t],
                            r = E[t + 1];
                          s && i
                            ? P.push([n, r, E[t + 2], _[e][3]])
                            : s
                            ? P.push([n, r, E[t + 2]])
                            : i
                            ? P.push([n, r, _[e][2]])
                            : P.push([n, r]);
                        }
                        return (
                          (n.points = P),
                          (n.spatialReference = r),
                          (n.hasZ = s),
                          (n.hasM = i),
                          n
                        );
                      })(e, t, new l.Z(), n, 0)
                    : null
                  : null;
              })(e, n, r),
            ),
          );
        if ((0, _.Wi)(o)) {
          const e = N.Z.cacheKey(n, r);
          void 0 !== d[e]
            ? (o = d[e])
            : ((o = (function (e, t, n = null) {
                if ((0, _.Wi)(g)) throw new W();
                if ((0, _.Wi)(e) || (0, _.Wi)(t)) return null;
                const r = g._getTransformation(
                  L,
                  e,
                  t,
                  n,
                  null == n ? void 0 : n.spatialReference,
                );
                return null !== r ? N.Z.fromGE(r) : null;
              })(n, r, null)),
              (0, _.Wi)(o) && (o = new N.Z()),
              (d[e] = o));
        }
        if ((0, _.Wi)(g)) throw new W();
        return g._project(e, t, n, r, o);
      }
      class W extends r.Z {
        constructor() {
          super(
            'projection:not-loaded',
            'projection engine not fully loaded yet, please call load()',
          );
        }
      }
      var m;
      function w(e, t, n) {
        return (
          !n &&
          (!!(0, M.fS)(e, t) ||
            ((0, M.JY)(e) && (0, M.JY)(t) && !!Ee(e, t, Se)))
        );
      }
      async function U(e, t, n, r) {
        if (!G())
          if (Array.isArray(e)) {
            for (const { source: t, dest: n, geographicTransformation: o } of e)
              if (!w(t, n, o)) return I(r);
          } else if (!w(e, t, n)) return I(r);
      }
      function D(e, t, n = t.spatialReference, r = 0) {
        return (0, _.pC)(n) && (0, _.pC)(H(e, e.spatialReference, t, n, r));
      }
      function H(e, t, n, r, o) {
        const { rings: _, hasZ: s, hasM: i } = e,
          P = [];
        return Y(_, s, i, t, P, r, o)
          ? ((n.rings = P),
            (n.spatialReference = r),
            (n.hasZ = s),
            (n.hasM = i),
            n)
          : null;
      }
      function k(e, t, n, r = 0) {
        (Oe[0] = e.x), (Oe[1] = e.y);
        const o = e.z;
        return (
          (Oe[2] = void 0 !== o ? o : r),
          B(Oe, e.spatialReference, 0, t, n, 0, 1)
        );
      }
      function v(e, t, n, r, o, _) {
        return (fe[0] = e), (fe[1] = t), (fe[2] = n), B(fe, r, 0, o, _, 0, 1);
      }
      function B(e, t, n, r, o, s, i = 1) {
        const P = Ee(t, o, Se);
        if ((0, _.Wi)(P)) return !1;
        if (P === X) {
          if (e === r && n === s) return !0;
          const t = n + 3 * i;
          for (let o = n, _ = s; o < t; o++, _++) r[_] = e[o];
          return !0;
        }
        const u = n + 3 * i;
        for (let t = n, o = s; t < u; t += 3, o += 3) P(e, t, r, o);
        return !0;
      }
      function Y(e, t, n, r, o, _, s = 0) {
        const i = new Array();
        for (const n of e) for (const e of n) i.push(e[0], e[1], t ? e[2] : s);
        if (!B(i, r, 0, i, _, 0, i.length / 3)) return !1;
        let P = 0;
        o.length = 0;
        for (const r of e) {
          const e = new Array();
          for (const o of r)
            t && n
              ? e.push([i[P++], i[P++], i[P++], o[3]])
              : t
              ? e.push([i[P++], i[P++], i[P++]])
              : n
              ? (e.push([i[P++], i[P++], o[2]]), P++)
              : (e.push([i[P++], i[P++]]), P++);
          o.push(e);
        }
        return !0;
      }
      function j(e, t, n, r) {
        if ((0, _.Wi)(e) || (0, _.Wi)(r)) return !1;
        const o = K(e, ce),
          s = K(r, ae);
        if (o === s && !x(s) && (o !== m.UNKNOWN || (0, M.fS)(e, r)))
          return (0, P.f)(n, t), !0;
        if (x(s)) {
          const e = ue[o][m.LON_LAT],
            r = ue[m.LON_LAT][s];
          return (
            !(0, _.Wi)(e) &&
            !(0, _.Wi)(r) &&
            (e(t, 0, Re, 0),
            r(Re, 0, pe, 0),
            Z(Ce * Re[0], Ce * Re[1], n),
            (n[12] = pe[0]),
            (n[13] = pe[1]),
            (n[14] = pe[2]),
            !0)
          );
        }
        if (
          (s === m.WEB_MERCATOR || s === m.PLATE_CARREE) &&
          (o === m.WGS84 ||
            (o === m.CGCS2000 && s === m.PLATE_CARREE) ||
            o === m.SPHERICAL_ECEF ||
            o === m.WEB_MERCATOR)
        ) {
          const e = ue[o][m.LON_LAT],
            r = ue[m.LON_LAT][s];
          return (
            !(0, _.Wi)(e) &&
            !(0, _.Wi)(r) &&
            (e(t, 0, Re, 0),
            r(Re, 0, pe, 0),
            o === m.SPHERICAL_ECEF
              ? (function (e, t, n) {
                  Z(e, t, n), (0, P.t)(n, n);
                })(Ce * Re[0], Ce * Re[1], n)
              : (0, P.i)(n),
            (n[12] = pe[0]),
            (n[13] = pe[1]),
            (n[14] = pe[2]),
            !0)
          );
        }
        return !1;
      }
      function x(e) {
        return (
          e === m.SPHERICAL_ECEF ||
          e === m.SPHERICAL_MARS_PCPF ||
          e === m.SPHERICAL_MOON_PCPF
        );
      }
      function Z(e, t, n) {
        const r = Math.sin(e),
          o = Math.cos(e),
          _ = Math.sin(t),
          s = Math.cos(t),
          i = n;
        return (
          (i[0] = -r),
          (i[4] = -_ * o),
          (i[8] = s * o),
          (i[12] = 0),
          (i[1] = o),
          (i[5] = -_ * r),
          (i[9] = s * r),
          (i[13] = 0),
          (i[2] = 0),
          (i[6] = s),
          (i[10] = _),
          (i[14] = 0),
          (i[3] = 0),
          (i[7] = 0),
          (i[11] = 0),
          (i[15] = 1),
          i
        );
      }
      function K(e, t) {
        return t.spatialReference === e
          ? t.spatialReferenceId
          : ((t.spatialReference = e),
            'metersPerUnit' in t && (t.metersPerUnit = (0, i.c9)(e, 1)),
            e.wkt === A.GG.wkt
              ? (t.spatialReferenceId = m.SPHERICAL_ECEF)
              : (0, M.oR)(e)
              ? (t.spatialReferenceId = m.WGS84)
              : (0, M.sS)(e)
              ? (t.spatialReferenceId = m.WEB_MERCATOR)
              : (0, M.QM)(e)
              ? (t.spatialReferenceId = m.PLATE_CARREE)
              : e.wkt === A.wY.wkt
              ? (t.spatialReferenceId = m.WGS84_ECEF)
              : e.wkid === T.W.CGCS2000
              ? (t.spatialReferenceId = m.CGCS2000)
              : e.wkt === A.HQ.wkt
              ? (t.spatialReferenceId = m.SPHERICAL_MARS_PCPF)
              : e.wkt === A.VY.wkt
              ? (t.spatialReferenceId = m.SPHERICAL_MOON_PCPF)
              : (0, M.BZ)(e)
              ? (t.spatialReferenceId = m.GCSMARS2000)
              : (0, M.V2)(e)
              ? (t.spatialReferenceId = m.GCSMOON2000)
              : (t.spatialReferenceId = m.UNKNOWN));
      }
      function X(e, t, n, r) {
        e !== n && ((n[r++] = e[t++]), (n[r++] = e[t++]), (n[r] = e[t]));
      }
      function b(e, t, n, r) {
        (n[r++] = Ae * (e[t++] / f.sv.radius)),
          (n[r++] =
            Ae *
            (Math.PI / 2 - 2 * Math.atan(Math.exp(-e[t++] / f.sv.radius)))),
          (n[r] = e[t]);
      }
      function z(e, t, n, r) {
        !(function (e, t, n, r, _) {
          const s = 0.4999999 * Math.PI,
            i = (0, o.uZ)(Ce * e[t + 1], -s, s),
            P = Math.sin(i);
          (n[r++] = Ce * e[t] * _.radius),
            (n[r++] = _.halfSemiMajorAxis * Math.log((1 + P) / (1 - P))),
            (n[r] = e[t + 2]);
        })(e, t, n, r, f.sv);
      }
      !(function (e) {
        (e[(e.UNKNOWN = 0)] = 'UNKNOWN'),
          (e[(e.SPHERICAL_ECEF = 1)] = 'SPHERICAL_ECEF'),
          (e[(e.WGS84 = 2)] = 'WGS84'),
          (e[(e.WEB_MERCATOR = 3)] = 'WEB_MERCATOR'),
          (e[(e.WGS84_ECEF = 4)] = 'WGS84_ECEF'),
          (e[(e.CGCS2000 = 5)] = 'CGCS2000'),
          (e[(e.WGS84_COMPARABLE_LON_LAT = 6)] = 'WGS84_COMPARABLE_LON_LAT'),
          (e[(e.SPHERICAL_MARS_PCPF = 7)] = 'SPHERICAL_MARS_PCPF'),
          (e[(e.GCSMARS2000 = 8)] = 'GCSMARS2000'),
          (e[(e.SPHERICAL_MOON_PCPF = 9)] = 'SPHERICAL_MOON_PCPF'),
          (e[(e.GCSMOON2000 = 10)] = 'GCSMOON2000'),
          (e[(e.LON_LAT = 11)] = 'LON_LAT'),
          (e[(e.PLATE_CARREE = 12)] = 'PLATE_CARREE');
      })(m || (m = {}));
      const V = (f.sv.radius * Math.PI) / 180,
        q = 180 / (f.sv.radius * Math.PI);
      function J(e, t, n, r) {
        (n[r] = e[t] * V), (n[r + 1] = e[t + 1] * V), (n[r + 2] = e[t + 2]);
      }
      function Q(e, t, n, r) {
        (n[r] = e[t] * q), (n[r + 1] = e[t + 1] * q), (n[r + 2] = e[t + 2]);
      }
      function $(e, t, n, r, o) {
        const _ = o + e[t + 2],
          s = Ce * e[t + 1],
          i = Ce * e[t],
          P = Math.cos(s);
        (n[r++] = Math.cos(i) * P * _),
          (n[r++] = Math.sin(i) * P * _),
          (n[r] = Math.sin(s) * _);
      }
      function ee(e, t, n, r) {
        $(e, t, n, r, f.Z1.radius);
      }
      function te(e, t, n, r) {
        $(e, t, n, r, f.yr.radius);
      }
      function ne(e, t, n, r) {
        $(e, t, n, r, f.sv.radius);
      }
      function re(e, t, n, r, _) {
        const s = e[t],
          i = e[t + 1],
          P = e[t + 2],
          u = Math.sqrt(s * s + i * i + P * P),
          E = (0, o.Kt)(P / (0 === u ? 1 : u)),
          l = Math.atan2(i, s);
        (n[r++] = Ae * l), (n[r++] = Ae * E), (n[r] = u - _);
      }
      function oe(e, t, n, r) {
        re(e, t, n, r, f.Z1.radius);
      }
      function _e(e, t, n, r) {
        re(e, t, n, r, f.yr.radius);
      }
      function se(e, t, n, r) {
        re(e, t, n, r, f.sv.radius);
      }
      function ie(e, t, n, r) {
        !(function (e, t, n, r, o) {
          const _ = Ce * e[t],
            s = Ce * e[t + 1],
            i = e[t + 2],
            P = Math.sin(s),
            u = Math.cos(s),
            E = o.radius / Math.sqrt(1 - o.eccentricitySquared * P * P);
          (n[r++] = (E + i) * u * Math.cos(_)),
            (n[r++] = (E + i) * u * Math.sin(_)),
            (n[r++] = (E * (1 - o.eccentricitySquared) + i) * P);
        })(e, t, n, r, f.sv);
      }
      function Pe(e, t, n, r) {
        const o = O,
          _ = e[t],
          s = e[t + 1],
          i = e[t + 2];
        let P, u, E, l, c, a, S, C, A, R, p, N, M, T, g, L, h, d, G, I, y;
        (P = Math.abs(i)),
          (u = _ * _ + s * s),
          (E = Math.sqrt(u)),
          (l = u + i * i),
          (c = Math.sqrt(l)),
          (I = Math.atan2(s, _)),
          (a = (i * i) / l),
          (S = u / l),
          (T = o.a2 / c),
          (g = o.a3 - o.a4 / c),
          S > 0.3
            ? ((C = (P / c) * (1 + (S * (o.a1 + T + a * g)) / c)),
              (G = Math.asin(C)),
              (R = C * C),
              (A = Math.sqrt(1 - R)))
            : ((A = (E / c) * (1 - (a * (o.a5 - T - S * g)) / c)),
              (G = Math.acos(A)),
              (R = 1 - A * A),
              (C = Math.sqrt(R))),
          (p = 1 - f.sv.eccentricitySquared * R),
          (N = f.sv.radius / Math.sqrt(p)),
          (M = o.a6 * N),
          (T = E - N * A),
          (g = P - M * C),
          (h = A * T + C * g),
          (L = A * g - C * T),
          (d = L / (M / p + h)),
          (G += d),
          (y = h + (L * d) / 2),
          i < 0 && (G = -G),
          (n[r++] = Ae * I),
          (n[r++] = Ae * G),
          (n[r] = y);
      }
      const ue = {
        [m.WGS84]: {
          [m.CGCS2000]: null,
          [m.GCSMARS2000]: null,
          [m.GCSMOON2000]: null,
          [m.LON_LAT]: X,
          [m.WGS84_COMPARABLE_LON_LAT]: X,
          [m.SPHERICAL_ECEF]: ne,
          [m.SPHERICAL_MARS_PCPF]: null,
          [m.SPHERICAL_MOON_PCPF]: null,
          [m.UNKNOWN]: null,
          [m.WEB_MERCATOR]: z,
          [m.PLATE_CARREE]: J,
          [m.WGS84]: X,
          [m.WGS84_ECEF]: ie,
        },
        [m.CGCS2000]: {
          [m.CGCS2000]: X,
          [m.GCSMARS2000]: null,
          [m.GCSMOON2000]: null,
          [m.LON_LAT]: X,
          [m.WGS84_COMPARABLE_LON_LAT]: X,
          [m.SPHERICAL_ECEF]: ne,
          [m.SPHERICAL_MARS_PCPF]: null,
          [m.SPHERICAL_MOON_PCPF]: null,
          [m.UNKNOWN]: null,
          [m.WEB_MERCATOR]: null,
          [m.PLATE_CARREE]: J,
          [m.WGS84]: null,
          [m.WGS84_ECEF]: ie,
        },
        [m.GCSMARS2000]: {
          [m.CGCS2000]: null,
          [m.GCSMARS2000]: X,
          [m.GCSMOON2000]: null,
          [m.LON_LAT]: X,
          [m.WGS84_COMPARABLE_LON_LAT]: null,
          [m.SPHERICAL_ECEF]: null,
          [m.SPHERICAL_MARS_PCPF]: te,
          [m.SPHERICAL_MOON_PCPF]: null,
          [m.UNKNOWN]: null,
          [m.WEB_MERCATOR]: null,
          [m.PLATE_CARREE]: null,
          [m.WGS84]: null,
          [m.WGS84_ECEF]: null,
        },
        [m.GCSMOON2000]: {
          [m.CGCS2000]: null,
          [m.GCSMARS2000]: null,
          [m.GCSMOON2000]: X,
          [m.LON_LAT]: X,
          [m.WGS84_COMPARABLE_LON_LAT]: null,
          [m.SPHERICAL_ECEF]: null,
          [m.SPHERICAL_MARS_PCPF]: null,
          [m.SPHERICAL_MOON_PCPF]: ee,
          [m.UNKNOWN]: null,
          [m.WEB_MERCATOR]: null,
          [m.PLATE_CARREE]: null,
          [m.WGS84]: null,
          [m.WGS84_ECEF]: null,
        },
        [m.WEB_MERCATOR]: {
          [m.CGCS2000]: null,
          [m.GCSMARS2000]: null,
          [m.GCSMOON2000]: null,
          [m.LON_LAT]: b,
          [m.WGS84_COMPARABLE_LON_LAT]: b,
          [m.SPHERICAL_ECEF]: function (e, t, n, r) {
            b(e, t, n, r), ne(n, r, n, r);
          },
          [m.SPHERICAL_MARS_PCPF]: null,
          [m.SPHERICAL_MOON_PCPF]: null,
          [m.UNKNOWN]: null,
          [m.WEB_MERCATOR]: X,
          [m.PLATE_CARREE]: function (e, t, n, r) {
            b(e, t, n, r), J(n, r, n, r);
          },
          [m.WGS84]: b,
          [m.WGS84_ECEF]: function (e, t, n, r) {
            b(e, t, n, r), ie(n, r, n, r);
          },
        },
        [m.WGS84_ECEF]: {
          [m.CGCS2000]: Pe,
          [m.GCSMARS2000]: null,
          [m.GCSMOON2000]: null,
          [m.LON_LAT]: Pe,
          [m.WGS84_COMPARABLE_LON_LAT]: Pe,
          [m.SPHERICAL_ECEF]: function (e, t, n, r) {
            Pe(e, t, n, r), ne(n, r, n, r);
          },
          [m.SPHERICAL_MARS_PCPF]: null,
          [m.SPHERICAL_MOON_PCPF]: null,
          [m.UNKNOWN]: null,
          [m.WEB_MERCATOR]: function (e, t, n, r) {
            Pe(e, t, n, r), z(n, r, n, r);
          },
          [m.PLATE_CARREE]: function (e, t, n, r) {
            Pe(e, t, n, r), J(n, r, n, r);
          },
          [m.WGS84]: Pe,
          [m.WGS84_ECEF]: X,
        },
        [m.SPHERICAL_ECEF]: {
          [m.CGCS2000]: se,
          [m.GCSMARS2000]: null,
          [m.GCSMOON2000]: null,
          [m.LON_LAT]: se,
          [m.WGS84_COMPARABLE_LON_LAT]: se,
          [m.SPHERICAL_ECEF]: X,
          [m.SPHERICAL_MARS_PCPF]: null,
          [m.SPHERICAL_MOON_PCPF]: null,
          [m.UNKNOWN]: null,
          [m.WEB_MERCATOR]: function (e, t, n, r) {
            se(e, t, n, r), z(n, r, n, r);
          },
          [m.PLATE_CARREE]: function (e, t, n, r) {
            se(e, t, n, r), J(n, r, n, r);
          },
          [m.WGS84]: se,
          [m.WGS84_ECEF]: function (e, t, n, r) {
            se(e, t, n, r), ie(n, r, n, r);
          },
        },
        [m.SPHERICAL_MARS_PCPF]: {
          [m.CGCS2000]: null,
          [m.GCSMARS2000]: _e,
          [m.GCSMOON2000]: null,
          [m.LON_LAT]: _e,
          [m.WGS84_COMPARABLE_LON_LAT]: null,
          [m.SPHERICAL_ECEF]: null,
          [m.SPHERICAL_MARS_PCPF]: X,
          [m.SPHERICAL_MOON_PCPF]: null,
          [m.UNKNOWN]: null,
          [m.WEB_MERCATOR]: null,
          [m.PLATE_CARREE]: null,
          [m.WGS84]: null,
          [m.WGS84_ECEF]: null,
        },
        [m.SPHERICAL_MOON_PCPF]: {
          [m.CGCS2000]: null,
          [m.GCSMARS2000]: null,
          [m.GCSMOON2000]: oe,
          [m.LON_LAT]: oe,
          [m.WGS84_COMPARABLE_LON_LAT]: null,
          [m.SPHERICAL_ECEF]: null,
          [m.SPHERICAL_MARS_PCPF]: null,
          [m.SPHERICAL_MOON_PCPF]: X,
          [m.UNKNOWN]: null,
          [m.WEB_MERCATOR]: null,
          [m.PLATE_CARREE]: null,
          [m.WGS84]: null,
          [m.WGS84_ECEF]: null,
        },
        [m.UNKNOWN]: {
          [m.CGCS2000]: null,
          [m.GCSMARS2000]: null,
          [m.GCSMOON2000]: null,
          [m.LON_LAT]: null,
          [m.WGS84_COMPARABLE_LON_LAT]: null,
          [m.SPHERICAL_ECEF]: null,
          [m.SPHERICAL_MARS_PCPF]: null,
          [m.SPHERICAL_MOON_PCPF]: null,
          [m.UNKNOWN]: X,
          [m.WEB_MERCATOR]: null,
          [m.PLATE_CARREE]: null,
          [m.WGS84]: null,
          [m.WGS84_ECEF]: null,
        },
        [m.LON_LAT]: {
          [m.CGCS2000]: X,
          [m.GCSMARS2000]: X,
          [m.GCSMOON2000]: X,
          [m.LON_LAT]: X,
          [m.WGS84_COMPARABLE_LON_LAT]: X,
          [m.SPHERICAL_ECEF]: ne,
          [m.SPHERICAL_MARS_PCPF]: te,
          [m.SPHERICAL_MOON_PCPF]: ee,
          [m.UNKNOWN]: null,
          [m.WEB_MERCATOR]: z,
          [m.PLATE_CARREE]: J,
          [m.WGS84]: X,
          [m.WGS84_ECEF]: ie,
        },
        [m.WGS84_COMPARABLE_LON_LAT]: {
          [m.CGCS2000]: null,
          [m.GCSMARS2000]: null,
          [m.GCSMOON2000]: null,
          [m.LON_LAT]: X,
          [m.WGS84_COMPARABLE_LON_LAT]: X,
          [m.SPHERICAL_ECEF]: ne,
          [m.SPHERICAL_MARS_PCPF]: null,
          [m.SPHERICAL_MOON_PCPF]: null,
          [m.UNKNOWN]: null,
          [m.WEB_MERCATOR]: null,
          [m.PLATE_CARREE]: J,
          [m.WGS84]: X,
          [m.WGS84_ECEF]: ie,
        },
        [m.PLATE_CARREE]: {
          [m.CGCS2000]: Q,
          [m.GCSMARS2000]: null,
          [m.GCSMOON2000]: null,
          [m.LON_LAT]: Q,
          [m.WGS84_COMPARABLE_LON_LAT]: Q,
          [m.SPHERICAL_ECEF]: function (e, t, n, r) {
            Q(e, t, n, r), ne(n, r, n, r);
          },
          [m.SPHERICAL_MARS_PCPF]: null,
          [m.SPHERICAL_MOON_PCPF]: null,
          [m.UNKNOWN]: null,
          [m.WEB_MERCATOR]: function (e, t, n, r) {
            Q(e, t, n, r), z(n, r, n, r);
          },
          [m.PLATE_CARREE]: X,
          [m.WGS84]: Q,
          [m.WGS84_ECEF]: function (e, t, n, r) {
            Q(e, t, n, r), ie(n, r, n, r);
          },
        },
      };
      function Ee(e, t, n = le()) {
        return (0, _.Wi)(e) || (0, _.Wi)(t)
          ? null
          : (function (e, t, n) {
              if (
                (0, _.Wi)(e) ||
                (0, _.Wi)(t) ||
                (n.source.spatialReference === e &&
                  n.dest.spatialReference === t)
              )
                return n;
              const r = K(e, n.source),
                o = K(t, n.dest);
              return (
                r === m.UNKNOWN && o === m.UNKNOWN
                  ? (0, M.fS)(e, t)
                    ? (n.projector = X)
                    : (n.projector = null)
                  : (n.projector = ue[r][o]),
                n
              );
            })(e, t, n).projector;
      }
      function le() {
        return {
          source: {
            spatialReference: null,
            spatialReferenceId: m.UNKNOWN,
            metersPerUnit: 1,
          },
          dest: {
            spatialReference: null,
            spatialReferenceId: m.UNKNOWN,
            metersPerUnit: 1,
          },
          projector: X,
        };
      }
      const ce = { spatialReference: null, spatialReferenceId: m.UNKNOWN },
        ae = { spatialReference: null, spatialReferenceId: m.UNKNOWN },
        Se = le(),
        Ce = (le(), (0, o.Vl)(1)),
        Ae = (0, o.BV)(1),
        fe = (0, u.c)(),
        Re = (0, u.c)(),
        pe = (0, u.c)(),
        Oe = (0, u.c)();
      (0, u.c)();
    },
    18571: (e, t, n) => {
      n.d(t, { Z: () => _ });
      let r = 0;
      class o {
        constructor(e = null) {
          (this.uid = r++),
            e
              ? ((this._wkt = void 0 !== e.wkt ? e.wkt : null),
                (this._wkid = void 0 !== e.wkid ? e.wkid : -1),
                (this._isInverse =
                  void 0 !== e.isInverse && !0 === e.isInverse))
              : ((this._wkt = null), (this._wkid = -1), (this._isInverse = !1));
        }
        static fromGE(e) {
          const t = new o();
          return (
            (t._wkt = e.wkt),
            (t._wkid = e.wkid),
            (t._isInverse = e.isInverse),
            t
          );
        }
        get wkt() {
          return this._wkt;
        }
        set wkt(e) {
          (this._wkt = e), (this.uid = r++);
        }
        get wkid() {
          return this._wkid;
        }
        set wkid(e) {
          (this._wkid = e), (this.uid = r++);
        }
        get isInverse() {
          return this._isInverse;
        }
        set isInverse(e) {
          (this._isInverse = e), (this.uid = r++);
        }
        getInverse() {
          const e = new o();
          return (
            (e._wkt = this.wkt),
            (e._wkid = this._wkid),
            (e._isInverse = !this.isInverse),
            e
          );
        }
      }
      class _ {
        constructor(e) {
          if (
            ((this.steps = []),
            (this._cached_projection = {}),
            (this._chain = ''),
            (this._gtlistentry = null),
            e && e.steps)
          )
            for (const t of e.steps)
              t instanceof o
                ? this.steps.push(t)
                : this.steps.push(
                    new o({ wkid: t.wkid, wkt: t.wkt, isInverse: t.isInverse }),
                  );
        }
        static cacheKey(e, t) {
          return [
            void 0 !== e.wkid && null !== e.wkid ? e.wkid.toString() : '-1',
            void 0 !== e.wkt && null !== e.wkt ? e.wkt.toString() : '',
            void 0 !== t.wkid && null !== t.wkid ? t.wkid.toString() : '-1',
            void 0 !== t.wkt && null !== t.wkt ? t.wkt.toString() : '',
          ].join(',');
        }
        static fromGE(e) {
          const t = new _();
          let n = '';
          for (const r of e.steps) {
            const e = o.fromGE(r);
            t.steps.push(e), (n += e.uid.toString() + ',');
          }
          return (
            (t._cached_projection = {}),
            (t._gtlistentry = null),
            (t._chain = n),
            t
          );
        }
        getInverse() {
          const e = new _();
          e.steps = [];
          for (let t = this.steps.length - 1; t >= 0; t--) {
            const n = this.steps[t];
            e.steps.push(n.getInverse());
          }
          return e;
        }
        getGTListEntry() {
          let e = '';
          for (const t of this.steps) e += t.uid.toString() + ',';
          return (
            e !== this._chain &&
              ((this._gtlistentry = null),
              (this._cached_projection = {}),
              (this._chain = e)),
            this._gtlistentry
          );
        }
        assignCachedGe(e, t, n) {
          this._cached_projection[_.cacheKey(e, t)] = n;
        }
        getCachedGeTransformation(e, t) {
          let n = '';
          for (const e of this.steps) n += e.uid.toString() + ',';
          n !== this._chain &&
            ((this._gtlistentry = null),
            (this._cached_projection = {}),
            (this._chain = n));
          const r = this._cached_projection[_.cacheKey(e, t)];
          return void 0 === r ? null : r;
        }
      }
    },
  },
]);
