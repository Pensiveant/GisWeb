'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [6748, 3172],
  {
    66748: (e, t, n) => {
      n.r(t), n.d(t, { registerFunctions: () => k });
      var r = n(40330),
        o = n(77286),
        s = n(61363),
        i = n(71201),
        a = n(95330),
        l = n(6570),
        u = n(9361),
        c = n(8667),
        f = n(65091),
        d = n(13473),
        h = n(38913),
        m = n(58901),
        g = n(33955),
        p = n(67900);
      function w(e) {
        return 0 === r.i8.indexOf('4.')
          ? h.Z.fromExtent(e)
          : new h.Z({
              spatialReference: e.spatialReference,
              rings: [
                [
                  [e.xmin, e.ymin],
                  [e.xmin, e.ymax],
                  [e.xmax, e.ymax],
                  [e.xmax, e.ymin],
                  [e.xmin, e.ymin],
                ],
              ],
            });
      }
      function y(e) {
        if (((0, s.p)(e, 2, 2), e[0] instanceof u.Z && e[1] instanceof u.Z));
        else if (e[0] instanceof u.Z && null === e[1]);
        else if (e[1] instanceof u.Z && null === e[0]);
        else if (null !== e[0] || null !== e[1])
          throw new Error('Illegal Argument');
      }
      function b(e, t) {
        if (
          'polygon' !== e.type &&
          'polyline' !== e.type &&
          'extent' !== e.type
        )
          return (0, a.DB)(0);
        let n = 1;
        (e.spatialReference.vcsWkid || e.spatialReference.latestVcsWkid) &&
          (n = (0, i._R)(e.spatialReference) / (0, p.c9)(e.spatialReference));
        let r = 0;
        if ('polyline' === e.type)
          for (const t of e.paths)
            for (let e = 1; e < t.length; e++)
              r += (0, i.AW)(t[e], t[e - 1], n);
        else if ('polygon' === e.type)
          for (const t of e.rings) {
            for (let e = 1; e < t.length; e++)
              r += (0, i.AW)(t[e], t[e - 1], n);
            (t[0][0] !== t[t.length - 1][0] ||
              t[0][1] !== t[t.length - 1][1] ||
              (void 0 !== t[0][2] && t[0][2] !== t[t.length - 1][2])) &&
              (r += (0, i.AW)(t[0], t[t.length - 1], n));
          }
        else
          'extent' === e.type &&
            ((r += 2 * (0, i.AW)([e.xmin, e.ymin, 0], [e.xmax, e.ymin, 0], n)),
            (r += 2 * (0, i.AW)([e.xmin, e.ymin, 0], [e.xmin, e.ymax, 0], n)),
            (r *= 2),
            (r +=
              4 * Math.abs((0, s.C)(e.zmax, 0) * n - (0, s.C)(e.zmin, 0) * n)));
        const o = new m.Z({
          hasZ: !1,
          hasM: !1,
          spatialReference: e.spatialReference,
          paths: [
            [0, 0],
            [0, r],
          ],
        });
        return (0, c.sz)(o, t);
      }
      function k(e) {
        'async' === e.mode &&
          ((e.functions.disjoint = function (t, n) {
            return e.standardFunctionAsync(t, n, function (e, t, n) {
              return (
                y((n = (0, s.H)(n))),
                null === n[0] || null === n[1] || (0, c.ED)(n[0], n[1])
              );
            });
          }),
          (e.functions.intersects = function (t, n) {
            return e.standardFunctionAsync(t, n, function (e, t, n) {
              return (
                y((n = (0, s.H)(n))),
                null !== n[0] && null !== n[1] && (0, c.kK)(n[0], n[1])
              );
            });
          }),
          (e.functions.touches = function (t, n) {
            return e.standardFunctionAsync(t, n, function (e, t, n) {
              return (
                y((n = (0, s.H)(n))),
                null !== n[0] && null !== n[1] && (0, c.W4)(n[0], n[1])
              );
            });
          }),
          (e.functions.crosses = function (t, n) {
            return e.standardFunctionAsync(t, n, function (e, t, n) {
              return (
                y((n = (0, s.H)(n))),
                null !== n[0] && null !== n[1] && (0, c.jU)(n[0], n[1])
              );
            });
          }),
          (e.functions.within = function (t, n) {
            return e.standardFunctionAsync(t, n, function (e, t, n) {
              return (
                y((n = (0, s.H)(n))),
                null !== n[0] && null !== n[1] && (0, c.uh)(n[0], n[1])
              );
            });
          }),
          (e.functions.contains = function (t, n) {
            return e.standardFunctionAsync(t, n, function (e, t, n) {
              return (
                y((n = (0, s.H)(n))),
                null !== n[0] && null !== n[1] && (0, c.r3)(n[0], n[1])
              );
            });
          }),
          (e.functions.overlaps = function (t, n) {
            return e.standardFunctionAsync(t, n, function (e, t, n) {
              return (
                y((n = (0, s.H)(n))),
                null !== n[0] && null !== n[1] && (0, c.Nm)(n[0], n[1])
              );
            });
          }),
          (e.functions.equals = function (t, n) {
            return e.standardFunctionAsync(t, n, function (e, t, n) {
              return (
                (0, s.p)(n, 2, 2),
                n[0] === n[1] ||
                  (n[0] instanceof u.Z && n[1] instanceof u.Z
                    ? (0, c.fS)(n[0], n[1])
                    : !(!(0, s.o)(n[0]) || !(0, s.o)(n[1])) &&
                      n[0].getTime() === n[1].getTime())
              );
            });
          }),
          (e.functions.relate = function (t, n) {
            return e.standardFunctionAsync(t, n, function (e, t, n) {
              if (
                ((n = (0, s.H)(n)),
                (0, s.p)(n, 3, 3),
                n[0] instanceof u.Z && n[1] instanceof u.Z)
              )
                return (0, c.LV)(n[0], n[1], (0, s.d)(n[2]));
              if (n[0] instanceof u.Z && null === n[1]) return !1;
              if (n[1] instanceof u.Z && null === n[0]) return !1;
              if (null === n[0] && null === n[1]) return !1;
              throw new Error('Illegal Argument');
            });
          }),
          (e.functions.intersection = function (t, n) {
            return e.standardFunctionAsync(t, n, function (e, t, n) {
              return (
                y((n = (0, s.H)(n))),
                null === n[0] || null === n[1] ? null : (0, c.wf)(n[0], n[1])
              );
            });
          }),
          (e.functions.union = function (t, n) {
            return e.standardFunctionAsync(t, n, function (e, n, r) {
              const i = [];
              if (0 === (r = (0, s.H)(r)).length)
                throw new Error(
                  'Function called with wrong number of Parameters',
                );
              if (1 === r.length)
                if ((0, s.a)(r[0])) {
                  const e = (0, s.H)(r[0]);
                  for (let t = 0; t < e.length; t++)
                    if (null !== e[t]) {
                      if (!(e[t] instanceof u.Z))
                        throw new Error('Illegal Argument');
                      i.push(e[t]);
                    }
                } else {
                  if (!(0, s.b)(r[0])) {
                    if (r[0] instanceof u.Z)
                      return (0, s.s)((0, o.r1)(r[0]), t.spatialReference);
                    if (null === r[0]) return null;
                    throw new Error('Illegal Argument');
                  }
                  {
                    const e = (0, s.H)(r[0].toArray());
                    for (let t = 0; t < e.length; t++)
                      if (null !== e[t]) {
                        if (!(e[t] instanceof u.Z))
                          throw new Error('Illegal Argument');
                        i.push(e[t]);
                      }
                  }
                }
              else
                for (let e = 0; e < r.length; e++)
                  if (null !== r[e]) {
                    if (!(r[e] instanceof u.Z))
                      throw new Error('Illegal Argument');
                    i.push(r[e]);
                  }
              return 0 === i.length ? null : (0, c.G0)(i);
            });
          }),
          (e.functions.difference = function (t, n) {
            return e.standardFunctionAsync(t, n, function (e, t, n) {
              return (
                y((n = (0, s.H)(n))),
                null !== n[0] && null === n[1]
                  ? (0, o.r1)(n[0])
                  : null === n[0]
                  ? null
                  : (0, c.e5)(n[0], n[1])
              );
            });
          }),
          (e.functions.symmetricdifference = function (t, n) {
            return e.standardFunctionAsync(t, n, function (e, t, n) {
              return (
                y((n = (0, s.H)(n))),
                null === n[0] && null === n[1]
                  ? null
                  : null === n[0]
                  ? (0, o.r1)(n[1])
                  : null === n[1]
                  ? (0, o.r1)(n[0])
                  : (0, c.Sp)(n[0], n[1])
              );
            });
          }),
          (e.functions.clip = function (t, n) {
            return e.standardFunctionAsync(t, n, function (e, t, n) {
              if (
                ((n = (0, s.H)(n)),
                (0, s.p)(n, 2, 2),
                !(n[1] instanceof l.Z) && null !== n[1])
              )
                throw new Error('Illegal Argument');
              if (null === n[0]) return null;
              if (!(n[0] instanceof u.Z)) throw new Error('Illegal Argument');
              return null === n[1] ? null : (0, c.oq)(n[0], n[1]);
            });
          }),
          (e.functions.cut = function (t, n) {
            return e.standardFunctionAsync(t, n, function (e, t, n) {
              if (
                ((n = (0, s.H)(n)),
                (0, s.p)(n, 2, 2),
                !(n[1] instanceof m.Z) && null !== n[1])
              )
                throw new Error('Illegal Argument');
              if (null === n[0]) return [];
              if (!(n[0] instanceof u.Z)) throw new Error('Illegal Argument');
              return null === n[1] ? [(0, o.r1)(n[0])] : (0, c.z7)(n[0], n[1]);
            });
          }),
          (e.functions.area = function (t, n) {
            return e.standardFunctionAsync(t, n, function (e, n, r) {
              if (((0, s.p)(r, 1, 2), null === (r = (0, s.H)(r))[0])) return 0;
              if ((0, s.q)(r[0]))
                return r[0]
                  .sumArea((0, o.EI)((0, s.C)(r[1], -1)), !1, t.abortSignal)
                  .then((e) => {
                    if (t.abortSignal.aborted)
                      throw new Error('Operation has been cancelled.');
                    return e;
                  });
              if ((0, s.a)(r[0]) || (0, s.b)(r[0])) {
                const e = (0, s.K)(r[0], t.spatialReference);
                return null === e
                  ? 0
                  : (0, c.CJ)(e, (0, o.EI)((0, s.C)(r[1], -1)));
              }
              if (!(r[0] instanceof u.Z)) throw new Error('Illegal Argument');
              return (0, c.CJ)(r[0], (0, o.EI)((0, s.C)(r[1], -1)));
            });
          }),
          (e.functions.areageodetic = function (t, n) {
            return e.standardFunctionAsync(t, n, function (e, n, r) {
              if (((0, s.p)(r, 1, 2), null === (r = (0, s.H)(r))[0])) return 0;
              if ((0, s.q)(r[0]))
                return r[0]
                  .sumArea((0, o.EI)((0, s.C)(r[1], -1)), !0, t.abortSignal)
                  .then((e) => {
                    if (t.abortSignal.aborted)
                      throw new Error('Operation has been cancelled.');
                    return e;
                  });
              if ((0, s.a)(r[0]) || (0, s.b)(r[0])) {
                const e = (0, s.K)(r[0], t.spatialReference);
                return null === e
                  ? 0
                  : (0, c.Y4)(e, (0, o.EI)((0, s.C)(r[1], -1)));
              }
              if (!(r[0] instanceof u.Z)) throw new Error('Illegal Argument');
              return (0, c.Y4)(r[0], (0, o.EI)((0, s.C)(r[1], -1)));
            });
          }),
          (e.functions.length = function (t, n) {
            return e.standardFunctionAsync(t, n, function (e, n, r) {
              if (((0, s.p)(r, 1, 2), null === (r = (0, s.H)(r))[0])) return 0;
              if ((0, s.q)(r[0]))
                return r[0]
                  .sumLength((0, o.Lz)((0, s.C)(r[1], -1)), !1, t.abortSignal)
                  .then((e) => {
                    if (t.abortSignal.aborted)
                      throw new Error('Operation has been cancelled.');
                    return e;
                  });
              if ((0, s.a)(r[0]) || (0, s.b)(r[0])) {
                const e = (0, s.J)(r[0], t.spatialReference);
                return null === e
                  ? 0
                  : (0, c.sz)(e, (0, o.Lz)((0, s.C)(r[1], -1)));
              }
              if (!(r[0] instanceof u.Z)) throw new Error('Illegal Argument');
              return (0, c.sz)(r[0], (0, o.Lz)((0, s.C)(r[1], -1)));
            });
          }),
          (e.functions.length3d = function (t, n) {
            return e.standardFunctionAsync(t, n, function (e, n, r) {
              if (((0, s.p)(r, 1, 2), null === (r = (0, s.H)(r))[0])) return 0;
              if ((0, s.a)(r[0]) || (0, s.b)(r[0])) {
                const e = (0, s.J)(r[0], t.spatialReference);
                return null === e
                  ? 0
                  : !0 === e.hasZ
                  ? b(e, (0, o.Lz)((0, s.C)(r[1], -1)))
                  : (0, c.sz)(e, (0, o.Lz)((0, s.C)(r[1], -1)));
              }
              if (!(r[0] instanceof u.Z)) throw new Error('Illegal Argument');
              return !0 === r[0].hasZ
                ? b(r[0], (0, o.Lz)((0, s.C)(r[1], -1)))
                : (0, c.sz)(r[0], (0, o.Lz)((0, s.C)(r[1], -1)));
            });
          }),
          (e.functions.lengthgeodetic = function (t, n) {
            return e.standardFunctionAsync(t, n, function (e, n, r) {
              if (((0, s.p)(r, 1, 2), null === (r = (0, s.H)(r))[0])) return 0;
              if ((0, s.q)(r[0]))
                return r[0]
                  .sumLength((0, o.Lz)((0, s.C)(r[1], -1)), !0, t.abortSignal)
                  .then((e) => {
                    if (t.abortSignal.aborted)
                      throw new Error('Operation has been cancelled.');
                    return e;
                  });
              if ((0, s.a)(r[0]) || (0, s.b)(r[0])) {
                const e = (0, s.J)(r[0], t.spatialReference);
                return null === e
                  ? 0
                  : (0, c.kQ)(e, (0, o.Lz)((0, s.C)(r[1], -1)));
              }
              if (!(r[0] instanceof u.Z)) throw new Error('Illegal Argument');
              return (0, c.kQ)(r[0], (0, o.Lz)((0, s.C)(r[1], -1)));
            });
          }),
          (e.functions.distance = function (t, n) {
            return e.standardFunctionAsync(t, n, function (e, n, r) {
              (r = (0, s.H)(r)), (0, s.p)(r, 2, 3);
              let i = r[0];
              ((0, s.a)(r[0]) || (0, s.b)(r[0])) &&
                (i = (0, s.L)(r[0], t.spatialReference));
              let a = r[1];
              if (
                (((0, s.a)(r[1]) || (0, s.b)(r[1])) &&
                  (a = (0, s.L)(r[1], t.spatialReference)),
                !(i instanceof u.Z))
              )
                throw new Error('Illegal Argument');
              if (!(a instanceof u.Z)) throw new Error('Illegal Argument');
              return (0, c.TE)(i, a, (0, o.Lz)((0, s.C)(r[2], -1)));
            });
          }),
          (e.functions.distancegeodetic = function (t, n) {
            return e.standardFunctionAsync(t, n, function (e, t, n) {
              (n = (0, s.H)(n)), (0, s.p)(n, 2, 3);
              const r = n[0],
                i = n[1];
              if (!(r instanceof d.Z)) throw new Error('Illegal Argument');
              if (!(i instanceof d.Z)) throw new Error('Illegal Argument');
              const a = new m.Z({
                paths: [],
                spatialReference: r.spatialReference,
              });
              return (
                a.addPath([r, i]), (0, c.kQ)(a, (0, o.Lz)((0, s.C)(n[2], -1)))
              );
            });
          }),
          (e.functions.densify = function (t, n) {
            return e.standardFunctionAsync(t, n, function (e, t, n) {
              if (((n = (0, s.H)(n)), (0, s.p)(n, 2, 3), null === n[0]))
                return null;
              if (!(n[0] instanceof u.Z)) throw new Error('Illegal Argument');
              const r = (0, s.t)(n[1]);
              if (isNaN(r)) throw new Error('Illegal Argument');
              if (r <= 0) throw new Error('Illegal Argument');
              return n[0] instanceof h.Z || n[0] instanceof m.Z
                ? (0, c.Cz)(n[0], r, (0, o.Lz)((0, s.C)(n[2], -1)))
                : n[0] instanceof l.Z
                ? (0, c.Cz)(w(n[0]), r, (0, o.Lz)((0, s.C)(n[2], -1)))
                : n[0];
            });
          }),
          (e.functions.densifygeodetic = function (t, n) {
            return e.standardFunctionAsync(t, n, function (e, t, n) {
              if (((n = (0, s.H)(n)), (0, s.p)(n, 2, 3), null === n[0]))
                return null;
              if (!(n[0] instanceof u.Z)) throw new Error('Illegal Argument');
              const r = (0, s.t)(n[1]);
              if (isNaN(r)) throw new Error('Illegal Argument');
              if (r <= 0) throw new Error('Illegal Argument');
              return n[0] instanceof h.Z || n[0] instanceof m.Z
                ? (0, c.j2)(n[0], r, (0, o.Lz)((0, s.C)(n[2], -1)))
                : n[0] instanceof l.Z
                ? (0, c.j2)(w(n[0]), r, (0, o.Lz)((0, s.C)(n[2], -1)))
                : n[0];
            });
          }),
          (e.functions.generalize = function (t, n) {
            return e.standardFunctionAsync(t, n, function (e, t, n) {
              if (((n = (0, s.H)(n)), (0, s.p)(n, 2, 4), null === n[0]))
                return null;
              if (!(n[0] instanceof u.Z)) throw new Error('Illegal Argument');
              const r = (0, s.t)(n[1]);
              if (isNaN(r)) throw new Error('Illegal Argument');
              return (0,
              c.D$)(n[0], r, (0, s.z)((0, s.C)(n[2], !0)), (0, o.Lz)((0, s.C)(n[3], -1)));
            });
          }),
          (e.functions.buffer = function (t, n) {
            return e.standardFunctionAsync(t, n, function (e, t, n) {
              if (((n = (0, s.H)(n)), (0, s.p)(n, 2, 3), null === n[0]))
                return null;
              if (!(n[0] instanceof u.Z)) throw new Error('Illegal Argument');
              const r = (0, s.t)(n[1]);
              if (isNaN(r)) throw new Error('Illegal Argument');
              return 0 === r
                ? (0, o.r1)(n[0])
                : (0, c.f3)(n[0], r, (0, o.Lz)((0, s.C)(n[2], -1)));
            });
          }),
          (e.functions.buffergeodetic = function (t, n) {
            return e.standardFunctionAsync(t, n, function (e, t, n) {
              if (((n = (0, s.H)(n)), (0, s.p)(n, 2, 3), null === n[0]))
                return null;
              if (!(n[0] instanceof u.Z)) throw new Error('Illegal Argument');
              const r = (0, s.t)(n[1]);
              if (isNaN(r)) throw new Error('Illegal Argument');
              return 0 === r
                ? (0, o.r1)(n[0])
                : (0, c.rd)(n[0], r, (0, o.Lz)((0, s.C)(n[2], -1)));
            });
          }),
          (e.functions.offset = function (t, n) {
            return e.standardFunctionAsync(t, n, function (e, t, n) {
              if (((n = (0, s.H)(n)), (0, s.p)(n, 2, 6), null === n[0]))
                return null;
              if (!(n[0] instanceof h.Z || n[0] instanceof m.Z))
                throw new Error('Illegal Argument');
              const r = (0, s.t)(n[1]);
              if (isNaN(r)) throw new Error('Illegal Argument');
              const i = (0, s.t)((0, s.C)(n[4], 10));
              if (isNaN(i)) throw new Error('Illegal Argument');
              const a = (0, s.t)((0, s.C)(n[5], 0));
              if (isNaN(a)) throw new Error('Illegal Argument');
              return (0,
              c.cv)(n[0], r, (0, o.Lz)((0, s.C)(n[2], -1)), (0, s.d)((0, s.C)(n[3], 'round')).toLowerCase(), i, a);
            });
          }),
          (e.functions.rotate = function (t, n) {
            return e.standardFunctionAsync(t, n, function (e, t, n) {
              (n = (0, s.H)(n)), (0, s.p)(n, 2, 3);
              let r = n[0];
              if (null === r) return null;
              if (!(r instanceof u.Z)) throw new Error('Illegal Argument');
              r instanceof l.Z && (r = h.Z.fromExtent(r));
              const o = (0, s.t)(n[1]);
              if (isNaN(o)) throw new Error('Illegal Argument');
              const i = (0, s.C)(n[2], null);
              if (null === i) return (0, c.U1)(r, o);
              if (i instanceof d.Z) return (0, c.U1)(r, o, i);
              throw new Error('Illegal Argument');
            });
          }),
          (e.functions.centroid = function (t, n) {
            return e.standardFunctionAsync(t, n, function (e, n, r) {
              if (((r = (0, s.H)(r)), (0, s.p)(r, 1, 1), null === r[0]))
                return null;
              let a = r[0];
              if (
                (((0, s.a)(r[0]) || (0, s.b)(r[0])) &&
                  (a = (0, s.L)(r[0], t.spatialReference)),
                null === a)
              )
                return null;
              if (!(a instanceof u.Z)) throw new Error('Illegal Argument');
              return a instanceof d.Z
                ? (0, s.s)((0, o.r1)(r[0]), t.spatialReference)
                : a instanceof h.Z
                ? a.centroid
                : a instanceof m.Z
                ? (0, i.s9)(a)
                : a instanceof f.Z
                ? (0, i.Ay)(a)
                : a instanceof l.Z
                ? a.center
                : null;
            });
          }),
          (e.functions.multiparttosinglepart = function (t, n) {
            return e.standardFunctionAsync(t, n, function (e, n, r) {
              (r = (0, s.H)(r)), (0, s.p)(r, 1, 1);
              const i = [];
              if (null === r[0]) return null;
              if (!(r[0] instanceof u.Z)) throw new Error('Illegal Argument');
              return r[0] instanceof d.Z || r[0] instanceof l.Z
                ? [(0, s.s)((0, o.r1)(r[0]), t.spatialReference)]
                : (0, c.og)(r[0]).then((e) => {
                    if (e instanceof h.Z) {
                      const t = [],
                        n = [];
                      for (let r = 0; r < e.rings.length; r++)
                        if (e.isClockwise(e.rings[r])) {
                          const n = (0, g.im)({
                            rings: [e.rings[r]],
                            hasZ: !0 === e.hasZ,
                            hazM: !0 === e.hasM,
                            spatialReference: e.spatialReference.toJSON(),
                          });
                          t.push(n);
                        } else
                          n.push({ ring: e.rings[r], pt: e.getPoint(r, 0) });
                      for (let e = 0; e < n.length; e++)
                        for (let r = 0; r < t.length; r++)
                          if (t[r].contains(n[e].pt)) {
                            t[r].addRing(n[e].ring);
                            break;
                          }
                      return t;
                    }
                    if (e instanceof m.Z) {
                      const t = [];
                      for (let n = 0; n < e.paths.length; n++) {
                        const r = (0, g.im)({
                          paths: [e.paths[n]],
                          hasZ: !0 === e.hasZ,
                          hazM: !0 === e.hasM,
                          spatialReference: e.spatialReference.toJSON(),
                        });
                        t.push(r);
                      }
                      return t;
                    }
                    if (r[0] instanceof f.Z) {
                      const e = (0, s.s)((0, o.r1)(r[0]), t.spatialReference);
                      for (let t = 0; t < e.points.length; t++)
                        i.push(e.getPoint(t));
                      return i;
                    }
                    return null;
                  });
            });
          }),
          (e.functions.issimple = function (t, n) {
            return e.standardFunctionAsync(t, n, function (e, t, n) {
              if (((n = (0, s.H)(n)), (0, s.p)(n, 1, 1), null === n[0]))
                return !0;
              if (!(n[0] instanceof u.Z)) throw new Error('Illegal Argument');
              return (0, c.Gg)(n[0]);
            });
          }),
          (e.functions.simplify = function (t, n) {
            return e.standardFunctionAsync(t, n, function (e, t, n) {
              if (((n = (0, s.H)(n)), (0, s.p)(n, 1, 1), null === n[0]))
                return null;
              if (!(n[0] instanceof u.Z)) throw new Error('Illegal Argument');
              return (0, c.og)(n[0]);
            });
          }));
      }
    },
    99880: (e, t, n) => {
      n.d(t, { V: () => l });
      var r = n(68773),
        o = (n(3172), n(20102)),
        s = n(92604),
        i = n(17452);
      const a = s.Z.getLogger('esri.assets');
      function l(e) {
        if (!r.Z.assetsPath)
          throw (
            (a.errorOnce(
              'The API assets location needs to be set using config.assetsPath. More information: https://arcg.is/1OzLe50',
            ),
            new o.Z('assets:path-not-set', 'config.assetsPath is not set'))
          );
        return (0, i.v_)(r.Z.assetsPath, e);
      }
    },
    80903: (e, t, n) => {
      n.d(t, { Z: () => l });
      var r = n(50758),
        o = n(92604),
        s = n(95330),
        i = n(25045);
      const a = o.Z.getLogger('esri.core.workers.Connection');
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
          return new Promise((n, r) => {
            let o = !0;
            const a = (e) => {
              (0, s.k_)(t.signal), o && ((o = !1), e());
            };
            (this._clients.length = e.length),
              (this._clientPromises.length = e.length);
            for (let o = 0; o < e.length; ++o) {
              const l = e[o];
              (0, s.y8)(l)
                ? (this._clientPromises[o] = l.then(
                    (e) => (
                      (this._clients[o] = new i.default(e, t)),
                      a(n),
                      this._clients[o]
                    ),
                    () => (a(r), null),
                  ))
                : ((this._clients[o] = new i.default(l, t)),
                  (this._clientPromises[o] = Promise.resolve(this._clients[o])),
                  a(n));
            }
          });
        }
        broadcast(e, t, n) {
          const r = new Array(this._clientPromises.length);
          for (let o = 0; o < this._clientPromises.length; ++o) {
            const s = this._clientPromises[o];
            r[o] = s.then((r) => r.invoke(e, t, n));
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
            const n = this._clients[t];
            if (n) {
              if (!n.isBusy()) return Promise.resolve(n);
            } else (e = e || []), e.push(this._clientPromises[t]);
          }
          return e
            ? Promise.race(e)
            : ((this._clientIdx = (this._clientIdx + 1) % this._clients.length),
              Promise.resolve(this._clients[this._clientIdx]));
        }
        invoke(e, t, n) {
          let r = null;
          return (
            Array.isArray(n)
              ? (a.warn(
                  'invoke()',
                  'The transferList parameter is deprecated, use the options object instead',
                ),
                (r = { transferList: n }))
              : (r = n),
            this.closed
              ? Promise.reject(new Error('Connection closed'))
              : this.getAvailableClient().then((n) => n.invoke(e, t, r))
          );
        }
        on(e, t) {
          return Promise.all(this._clientPromises).then(() =>
            (0, r.AL)(this._clients.map((n) => n.on(e, t))),
          );
        }
        openPorts() {
          return new Promise((e) => {
            const t = new Array(this._clientPromises.length);
            let n = t.length;
            for (let r = 0; r < this._clientPromises.length; ++r)
              this._clientPromises[r].then((o) => {
                (t[r] = o.openPort()), 0 == --n && e(t);
              });
          });
        }
        get test() {
          return { numClients: this._clients.length };
        }
      }
    },
    78346: (e, t, n) => {
      n.d(t, { bA: () => q });
      var r = n(20102),
        o = n(80442),
        s = n(95330),
        i = n(80903),
        a = n(25045),
        l = n(40330),
        u = n(92604),
        c = n(94362),
        f = n(99880),
        d = n(68773),
        h = (n(2587), n(17452));
      const m = {};
      function g(e) {
        var t;
        const n = {
          async: e.async,
          isDebug: e.isDebug,
          locale: e.locale,
          baseUrl: e.baseUrl,
          has: { ...e.has },
          map: { ...e.map },
          packages: (e.packages && e.packages.concat()) || [],
          paths: { ...e.paths },
        };
        return (
          e.hasOwnProperty('async') || (n.async = !0),
          e.hasOwnProperty('isDebug') || (n.isDebug = !1),
          e.baseUrl || (n.baseUrl = m.baseUrl),
          null == (t = m.packages) ||
            t.forEach((e) => {
              !(function (e, t) {
                for (const n of e) if (n.name === t.name) return;
                e.push(t);
              })(n.packages, e);
            }),
          n
        );
      }
      var p = n(41213);
      class w {
        constructor() {
          const e = document.createDocumentFragment();
          ['addEventListener', 'dispatchEvent', 'removeEventListener'].forEach(
            (t) => {
              this[t] = (...n) => e[t](...n);
            },
          );
        }
      }
      class y {
        constructor() {
          (this._dispatcher = new w()),
            this._workerPostMessage({ type: c.Cs.HANDSHAKE });
        }
        terminate() {}
        get onmessage() {
          return this._onmessageHandler;
        }
        set onmessage(e) {
          this._onmessageHandler &&
            this.removeEventListener('message', this._onmessageHandler),
            (this._onmessageHandler = e),
            e && this.addEventListener('message', e);
        }
        get onmessageerror() {
          return this._onmessageerrorHandler;
        }
        set onmessageerror(e) {
          this._onmessageerrorHandler &&
            this.removeEventListener(
              'messageerror',
              this._onmessageerrorHandler,
            ),
            (this._onmessageerrorHandler = e),
            e && this.addEventListener('messageerror', e);
        }
        get onerror() {
          return this._onerrorHandler;
        }
        set onerror(e) {
          this._onerrorHandler &&
            this.removeEventListener('error', this._onerrorHandler),
            (this._onerrorHandler = e),
            e && this.addEventListener('error', e);
        }
        postMessage(e) {
          (0, p.Y)(() => {
            this._workerMessageHandler(
              new MessageEvent('message', { data: e }),
            );
          });
        }
        dispatchEvent(e) {
          return this._dispatcher.dispatchEvent(e);
        }
        addEventListener(e, t, n) {
          this._dispatcher.addEventListener(e, t, n);
        }
        removeEventListener(e, t, n) {
          this._dispatcher.removeEventListener(e, t, n);
        }
        _workerPostMessage(e) {
          (0, p.Y)(() => {
            this.dispatchEvent(new MessageEvent('message', { data: e }));
          });
        }
        async _workerMessageHandler(e) {
          const t = (0, c.QM)(e);
          if (t && t.type === c.Cs.OPEN) {
            const { modulePath: e, jobId: n } = t;
            let r = await a.default.loadWorker(e);
            r || (r = await import(e));
            const o = a.default.connect(r);
            this._workerPostMessage({ type: c.Cs.OPENED, jobId: n, data: o });
          }
        }
      }
      var b = n(70171),
        k = n(17202);
      const v = u.Z.getLogger('esri.core.workers'),
        { HANDSHAKE: E } = c.Cs;
      let A, Z;
      const L =
        'Failed to create Worker. Fallback to execute module in main thread';
      async function _(e) {
        return new Promise((t) => {
          function n(o) {
            const s = (0, c.QM)(o);
            s &&
              s.type === E &&
              (e.removeEventListener('message', n),
              e.removeEventListener('error', r),
              t(e));
          }
          function r(t) {
            t.preventDefault(),
              e.removeEventListener('message', n),
              e.removeEventListener('error', r),
              v.warn(
                'Failed to create Worker. Fallback to execute module in main thread',
                t,
              ),
              (e = new y()).addEventListener('message', n),
              e.addEventListener('error', r);
          }
          e.addEventListener('message', n), e.addEventListener('error', r);
        });
      }
      let C = 0;
      const I = u.Z.getLogger('esri.core.workers'),
        { ABORT: S, INVOKE: P, OPEN: O, OPENED: T, RESPONSE: x } = c.Cs;
      class R {
        constructor(e, t) {
          (this._outJobs = new Map()),
            (this._inJobs = new Map()),
            (this.worker = e),
            (this.id = t),
            e.addEventListener('message', this._onMessage.bind(this)),
            e.addEventListener('error', (e) => {
              e.preventDefault(), I.error(e);
            });
        }
        static async create(e) {
          const t = await (async function () {
            if (!(0, o.Z)('esri-workers') || ((0, o.Z)('mozilla'), 0))
              return _(new y());
            if (!A && !Z)
              try {
                const e =
                  'let globalId=0;const outgoing=new Map,configuration=JSON.parse("{CONFIGURATION}");self.esriConfig=configuration.esriConfig;const workerPath=self.esriConfig.workers.workerPath,HANDSHAKE=0,OPEN=1,OPENED=2,RESPONSE=3,INVOKE=4,ABORT=5;function createAbortError(){const e=new Error("Aborted");return e.name="AbortError",e}function receiveMessage(e){return e&&e.data?"string"==typeof e.data?JSON.parse(e.data):e.data:null}function invokeStaticMessage(e,o,r){const t=r&&r.signal,n=globalId++;return new Promise(((r,i)=>{if(t){if(t.aborted)return i(createAbortError());t.addEventListener("abort",(()=>{outgoing.get(n)&&(outgoing.delete(n),self.postMessage({type:5,jobId:n}),i(createAbortError()))}))}outgoing.set(n,{resolve:r,reject:i}),self.postMessage({type:4,jobId:n,methodName:e,abortable:null!=t,data:o})}))}let workerRevisionChecked=!1;function checkWorkerRevision(e){if(!workerRevisionChecked&&e.kernelInfo){workerRevisionChecked=!0;const{revision:o,buildDate:r,version:t}=configuration.kernelInfo,{revision:n,buildDate:i,version:s}=e.kernelInfo;o!==n&&console.warn(`[esri.core.workers] Version mismatch detected between ArcGIS API for JavaScript and assets:\\nAPI version: ${t} [Date: ${r}, Revision: ${o.slice(0,8)}]\nAssets version: ${s} [Date: ${i}, Revision: ${n.slice(0,8)}]`)}}function messageHandler(e){const o=receiveMessage(e);if(!o)return;const r=o.jobId;switch(o.type){case 1:let e;function t(o){const t=e.connect(o);self.postMessage({type:2,jobId:r,data:t},[t])}"function"==typeof define&&define.amd?require([workerPath],(r=>{e=r.default||r,checkWorkerRevision(e),e.loadWorker(o.modulePath).then((e=>e||new Promise((e=>{require([o.modulePath],e)})))).then(t)})):"System"in self&&"function"==typeof System.import?System.import(workerPath).then((r=>(e=r.default,checkWorkerRevision(e),e.loadWorker(o.modulePath)))).then((e=>e||System.import(o.modulePath))).then(t):esriConfig.workers.useDynamicImport?import(workerPath).then((r=>{e=r.default||r,checkWorkerRevision(e),e.loadWorker(o.modulePath).then((e=>e||import(o.modulePath))).then(t)})):(self.RemoteClient||importScripts(workerPath),e=self.RemoteClient.default||self.RemoteClient,checkWorkerRevision(e),e.loadWorker(o.modulePath).then(t));break;case 3:if(outgoing.has(r)){const e=outgoing.get(r);outgoing.delete(r),o.error?e.reject(JSON.parse(o.error)):e.resolve(o.data)}}}self.dojoConfig=configuration.loaderConfig,esriConfig.workers.loaderUrl&&(self.importScripts(esriConfig.workers.loaderUrl),"function"==typeof require&&"function"==typeof require.config&&require.config(configuration.loaderConfig)),self.addEventListener("message",messageHandler),self.postMessage({type:0});'.replace(
                    '"{CONFIGURATION}"',
                    `'${(function () {
                      let e;
                      if (null != d.Z.default) {
                        const t = { ...d.Z };
                        delete t.default, (e = JSON.parse(JSON.stringify(t)));
                      } else e = JSON.parse(JSON.stringify(d.Z));
                      (e.assetsPath = (0, h.hF)(e.assetsPath)),
                        (e.request.interceptors = []),
                        (e.log.interceptors = []),
                        (e.locale = (0, b.Kd)()),
                        (e.has = {
                          'esri-csp-restrictions': (0, o.Z)(
                            'esri-csp-restrictions',
                          ),
                          'esri-2d-debug': !1,
                          'esri-2d-update-debug': (0, o.Z)(
                            'esri-2d-update-debug',
                          ),
                          'esri-2d-query-centroid-enabled': (0, o.Z)(
                            'esri-2d-query-centroid-enabled',
                          ),
                          'featurelayer-pbf': (0, o.Z)('featurelayer-pbf'),
                          'featurelayer-simplify-thresholds': (0, o.Z)(
                            'featurelayer-simplify-thresholds',
                          ),
                          'featurelayer-simplify-payload-size-factors': (0,
                          o.Z)('featurelayer-simplify-payload-size-factors'),
                          'featurelayer-simplify-mobile-factor': (0, o.Z)(
                            'featurelayer-simplify-mobile-factor',
                          ),
                          'esri-atomics': (0, o.Z)('esri-atomics'),
                          'esri-shared-array-buffer': (0, o.Z)(
                            'esri-shared-array-buffer',
                          ),
                          'esri-tiles-debug': (0, o.Z)('esri-tiles-debug'),
                          'esri-workers-arraybuffer-transfer': (0, o.Z)(
                            'esri-workers-arraybuffer-transfer',
                          ),
                          'feature-polyline-generalization-factor': (0, o.Z)(
                            'feature-polyline-generalization-factor',
                          ),
                          'host-webworker': 1,
                        }),
                        e.workers.loaderUrl &&
                          (e.workers.loaderUrl = (0, h.hF)(
                            e.workers.loaderUrl,
                          )),
                        e.workers.workerPath
                          ? (e.workers.workerPath = (0, h.hF)(
                              e.workers.workerPath,
                            ))
                          : (e.workers.workerPath = (0, h.hF)(
                              (0, f.V)('esri/core/workers/RemoteClient.js'),
                            )),
                        (e.workers.useDynamicImport = !1);
                      const t = d.Z.workers.loaderConfig,
                        n = g({
                          baseUrl: null == t ? void 0 : t.baseUrl,
                          locale: (0, b.Kd)(),
                          has: {
                            'csp-restrictions': 1,
                            'dojo-test-sniff': 0,
                            'host-webworker': 1,
                            ...(null == t ? void 0 : t.has),
                          },
                          map: { ...(null == t ? void 0 : t.map) },
                          paths: { ...(null == t ? void 0 : t.paths) },
                          packages: (null == t ? void 0 : t.packages) || [],
                        }),
                        r = { version: l.i8, buildDate: k.r, revision: k.$ };
                      return JSON.stringify({
                        esriConfig: e,
                        loaderConfig: n,
                        kernelInfo: r,
                      });
                    })()}'`,
                  );
                A = URL.createObjectURL(
                  new Blob([e], { type: 'text/javascript' }),
                );
              } catch (e) {
                Z = e || {};
              }
            let e;
            if (A)
              try {
                e = new Worker(A, { name: 'esri-worker-' + C++ });
              } catch (t) {
                v.warn(L, Z), (e = new y());
              }
            else v.warn(L, Z), (e = new y());
            return _(e);
          })();
          return new R(t, e);
        }
        terminate() {
          this.worker.terminate();
        }
        async open(e, t = {}) {
          const { signal: n } = t,
            r = (0, c.jt)();
          return new Promise((t, o) => {
            const i = {
              resolve: t,
              reject: o,
              abortHandle: (0, s.$F)(n, () => {
                this._outJobs.delete(r), this._post({ type: S, jobId: r });
              }),
            };
            this._outJobs.set(r, i),
              this._post({ type: O, jobId: r, modulePath: e });
          });
        }
        _onMessage(e) {
          const t = (0, c.QM)(e);
          if (t)
            switch (t.type) {
              case T:
                this._onOpenedMessage(t);
                break;
              case x:
                this._onResponseMessage(t);
                break;
              case S:
                this._onAbortMessage(t);
                break;
              case P:
                this._onInvokeMessage(t);
            }
        }
        _onAbortMessage(e) {
          const t = this._inJobs,
            n = e.jobId,
            r = t.get(n);
          r && (r.controller && r.controller.abort(), t.delete(n));
        }
        _onInvokeMessage(e) {
          const { methodName: t, jobId: n, data: r, abortable: o } = e,
            i = o ? new AbortController() : null,
            a = this._inJobs,
            u = l.Nv[t];
          let f;
          try {
            if ('function' != typeof u)
              throw new TypeError(`${t} is not a function`);
            f = u.call(null, r, { signal: i ? i.signal : null });
          } catch (e) {
            return void this._post({ type: x, jobId: n, error: (0, c.AB)(e) });
          }
          (0, s.y8)(f)
            ? (a.set(n, { controller: i, promise: f }),
              f.then(
                (e) => {
                  a.has(n) &&
                    (a.delete(n), this._post({ type: x, jobId: n }, e));
                },
                (e) => {
                  a.has(n) &&
                    (a.delete(n),
                    e || (e = { message: 'Error encountered at method' + t }),
                    (0, s.D_)(e) ||
                      this._post({
                        type: x,
                        jobId: n,
                        error: (0, c.AB)(
                          e || { message: `Error encountered at method ${t}` },
                        ),
                      }));
                },
              ))
            : this._post({ type: x, jobId: n }, f);
        }
        _onOpenedMessage(e) {
          var t;
          const { jobId: n, data: r } = e,
            o = this._outJobs.get(n);
          o &&
            (this._outJobs.delete(n),
            null == (t = o.abortHandle) || t.remove(),
            o.resolve(r));
        }
        _onResponseMessage(e) {
          var t;
          const { jobId: n, error: o, data: s } = e,
            i = this._outJobs.get(n);
          i &&
            (this._outJobs.delete(n),
            null == (t = i.abortHandle) || t.remove(),
            o ? i.reject(r.Z.fromJSON(JSON.parse(o))) : i.resolve(s));
        }
        _post(e, t, n) {
          return (0, c.oi)(this.worker, e, t, n);
        }
      }
      let H = (0, o.Z)('esri-workers-debug')
        ? 1
        : (0, o.Z)('host-browser')
        ? navigator.hardwareConcurrency - 1
        : 0;
      H ||
        (H =
          ((0, o.Z)('safari') && (0, o.Z)('mac')) || (0, o.Z)('trident')
            ? 7
            : 2);
      let M = 0;
      const N = [];
      async function D(e, t) {
        const n = new i.Z();
        return await n.open(e, t), n;
      }
      async function q(e, t = {}) {
        if ('string' != typeof e)
          throw new r.Z('workers:undefined-module', 'modulePath is missing');
        let n = t.strategy || 'distributed';
        if (
          ((0, o.Z)('host-webworker') &&
            !(0, o.Z)('esri-workers') &&
            (n = 'local'),
          'local' === n)
        ) {
          let n = await a.default.loadWorker(e);
          n || (n = await import(e)), (0, s.k_)(t.signal);
          const r = t.client || n;
          return D([a.default.connect(n)], { ...t, client: r });
        }
        if (
          (await (async function () {
            if (z) return z;
            F = new AbortController();
            const e = [];
            for (let t = 0; t < H; t++) {
              const n = R.create(t).then((e) => ((N[t] = e), e));
              e.push(n);
            }
            return (z = Promise.all(e)), z;
          })(),
          (0, s.k_)(t.signal),
          'dedicated' === n)
        ) {
          const n = M++ % H;
          return D([await N[n].open(e, t)], t);
        }
        if (t.maxNumWorkers && t.maxNumWorkers > 0) {
          const n = Math.min(t.maxNumWorkers, H);
          if (n < H) {
            const r = new Array(n);
            for (let o = 0; o < n; ++o) {
              const n = M++ % H;
              r[o] = N[n].open(e, t);
            }
            return D(r, t);
          }
        }
        return D(
          N.map((n) => n.open(e, t)),
          t,
        );
      }
      let F,
        z = null;
    },
    8667: (e, t, n) => {
      n.d(t, {
        f3: () => S,
        oq: () => c,
        r3: () => d,
        jU: () => h,
        z7: () => f,
        Cz: () => x,
        e5: () => Z,
        ED: () => b,
        TE: () => m,
        fS: () => g,
        D$: () => T,
        Y4: () => N,
        rd: () => P,
        j2: () => R,
        kQ: () => D,
        wf: () => _,
        kK: () => p,
        Gg: () => E,
        cv: () => I,
        Nm: () => k,
        CJ: () => H,
        sz: () => M,
        LV: () => v,
        U1: () => O,
        og: () => A,
        Sp: () => L,
        W4: () => w,
        G0: () => C,
        uh: () => y,
      }),
        n(66577);
      var r = n(78346),
        o = (n(13473), n(33955));
      function s(e) {
        var t;
        return Array.isArray(e)
          ? null == (t = e[0])
            ? void 0
            : t.spatialReference
          : null == e
          ? void 0
          : e.spatialReference;
      }
      function i(e) {
        return e
          ? Array.isArray(e)
            ? e.map(i)
            : e.toJSON
            ? e.toJSON()
            : e
          : e;
      }
      function a(e) {
        return Array.isArray(e) ? e.map((e) => (0, o.im)(e)) : (0, o.im)(e);
      }
      let l;
      async function u(e, t) {
        return (
          await (async function () {
            return (
              l ||
                (l = (0, r.bA)('geometryEngineWorker', {
                  strategy: 'distributed',
                })),
              l
            );
          })()
        ).invoke('executeGEOperation', { operation: e, parameters: i(t) });
      }
      async function c(e, t) {
        return a(await u('clip', [s(e), e, t]));
      }
      async function f(e, t) {
        return a(await u('cut', [s(e), e, t]));
      }
      function d(e, t) {
        return u('contains', [s(e), e, t]);
      }
      function h(e, t) {
        return u('crosses', [s(e), e, t]);
      }
      function m(e, t, n) {
        return u('distance', [s(e), e, t, n]);
      }
      function g(e, t) {
        return u('equals', [s(e), e, t]);
      }
      function p(e, t) {
        return u('intersects', [s(e), e, t]);
      }
      function w(e, t) {
        return u('touches', [s(e), e, t]);
      }
      function y(e, t) {
        return u('within', [s(e), e, t]);
      }
      function b(e, t) {
        return u('disjoint', [s(e), e, t]);
      }
      function k(e, t) {
        return u('overlaps', [s(e), e, t]);
      }
      function v(e, t, n) {
        return u('relate', [s(e), e, t, n]);
      }
      function E(e) {
        return u('isSimple', [s(e), e]);
      }
      async function A(e) {
        return a(await u('simplify', [s(e), e]));
      }
      async function Z(e, t) {
        return a(await u('difference', [s(e), e, t]));
      }
      async function L(e, t) {
        return a(await u('symmetricDifference', [s(e), e, t]));
      }
      async function _(e, t) {
        return a(await u('intersect', [s(e), e, t]));
      }
      async function C(e, t = null) {
        const n = (function (e, t) {
          let n;
          return (
            Array.isArray(e)
              ? (n = e)
              : ((n = []), n.push(e), null != t && n.push(t)),
            n
          );
        })(e, t);
        return a(await u('union', [s(n), n]));
      }
      async function I(e, t, n, r, o, i) {
        return a(await u('offset', [s(e), e, t, n, r, o, i]));
      }
      async function S(e, t, n, r = !1) {
        const o = [s(e), e, t, n, r];
        return a(await u('buffer', o));
      }
      async function P(e, t, n, r, o, i) {
        const l = [s(e), e, t, n, r, o, i];
        return a(await u('geodesicBuffer', l));
      }
      async function O(e, t, n) {
        var r;
        if (null == e) throw new Error('Illegal Argument Exception');
        const o = e.spatialReference;
        n =
          null != (r = n)
            ? r
            : (function (e) {
                return 'xmin' in e ? e.center : 'x' in e ? e : e.extent.center;
              })(e);
        const s = e.constructor.fromJSON(await u('rotate', [o, e, t, n]));
        return (s.spatialReference = o), s;
      }
      async function T(e, t, n, r) {
        return a(await u('generalize', [s(e), e, t, n, r]));
      }
      async function x(e, t, n) {
        return a(await u('densify', [s(e), e, t, n]));
      }
      async function R(e, t, n, r = 0) {
        return a(await u('geodesicDensify', [s(e), e, t, n, r]));
      }
      function H(e, t) {
        return u('planarArea', [s(e), e, t]);
      }
      function M(e, t) {
        return u('planarLength', [s(e), e, t]);
      }
      function N(e, t, n) {
        return u('geodesicArea', [s(e), e, t, n]);
      }
      function D(e, t, n) {
        return u('geodesicLength', [s(e), e, t, n]);
      }
    },
    2587: (e, t, n) => {
      n(90344), n(18848), n(940), n(70171);
      var r = n(94443),
        o = n(3172),
        s = n(20102),
        i = n(70586);
      async function a(e) {
        if ((0, i.pC)(l.fetchBundleAsset)) return l.fetchBundleAsset(e);
        const t = await (0, o.default)(e, { responseType: 'text' });
        return JSON.parse(t.data);
      }
      const l = {};
      var u,
        c = n(99880);
      (0, r.tz)(
        ((u = { pattern: 'esri/', location: c.V }),
        new (class {
          constructor({
            base: e = '',
            pattern: t,
            location: n = new URL(window.location.href),
          }) {
            let r;
            (r =
              'string' == typeof n
                ? (e) => new URL(e, new URL(n, window.location.href)).href
                : n instanceof URL
                ? (e) => new URL(e, n).href
                : n),
              (this.pattern = 'string' == typeof t ? new RegExp(`^${t}`) : t),
              (this.getAssetUrl = r),
              (e = e ? (e.endsWith('/') ? e : e + '/') : ''),
              (this.matcher = new RegExp(`^${e}(?:(.*)/)?(.*)$`));
          }
          fetchMessageBundle(e, t) {
            return (async function (e, t, n, o) {
              const i = t.exec(n);
              if (!i)
                throw new s.Z(
                  'esri-intl:invalid-bundle',
                  `Bundle id "${n}" is not compatible with the pattern "${t}"`,
                );
              const l = i[1] ? `${i[1]}/` : '',
                u = i[2],
                c = (0, r.Su)(o),
                f = `${l}${u}.json`,
                d = c ? `${l}${u}_${c}.json` : f;
              let h;
              try {
                h = await a(e(d));
              } catch (t) {
                if (d === f)
                  throw new s.Z(
                    'intl:unknown-bundle',
                    `Bundle "${n}" cannot be loaded`,
                    { error: t },
                  );
                try {
                  h = await a(e(f));
                } catch (e) {
                  throw new s.Z(
                    'intl:unknown-bundle',
                    `Bundle "${n}" cannot be loaded`,
                    { error: e },
                  );
                }
              }
              return h;
            })(this.getAssetUrl, this.matcher, e, t);
          }
        })(u)),
      );
    },
    90344: (e, t, n) => {
      n.d(t, { Ze: () => p, p6: () => w });
      var r = n(35454),
        o = n(70171);
      const s = { year: 'numeric', month: 'numeric', day: 'numeric' },
        i = { year: 'numeric', month: 'long', day: 'numeric' },
        a = { year: 'numeric', month: 'short', day: 'numeric' },
        l = { year: 'numeric', month: 'long', weekday: 'long', day: 'numeric' },
        u = { hour: 'numeric', minute: 'numeric' },
        c = { ...u, second: 'numeric' },
        f = {
          'short-date': s,
          'short-date-short-time': { ...s, ...u },
          'short-date-short-time-24': { ...s, ...u, hour12: !1 },
          'short-date-long-time': { ...s, ...c },
          'short-date-long-time-24': { ...s, ...c, hour12: !1 },
          'short-date-le': s,
          'short-date-le-short-time': { ...s, ...u },
          'short-date-le-short-time-24': { ...s, ...u, hour12: !1 },
          'short-date-le-long-time': { ...s, ...c },
          'short-date-le-long-time-24': { ...s, ...c, hour12: !1 },
          'long-month-day-year': i,
          'long-month-day-year-short-time': { ...i, ...u },
          'long-month-day-year-short-time-24': { ...i, ...u, hour12: !1 },
          'long-month-day-year-long-time': { ...i, ...c },
          'long-month-day-year-long-time-24': { ...i, ...c, hour12: !1 },
          'day-short-month-year': a,
          'day-short-month-year-short-time': { ...a, ...u },
          'day-short-month-year-short-time-24': { ...a, ...u, hour12: !1 },
          'day-short-month-year-long-time': { ...a, ...c },
          'day-short-month-year-long-time-24': { ...a, ...c, hour12: !1 },
          'long-date': l,
          'long-date-short-time': { ...l, ...u },
          'long-date-short-time-24': { ...l, ...u, hour12: !1 },
          'long-date-long-time': { ...l, ...c },
          'long-date-long-time-24': { ...l, ...c, hour12: !1 },
          'long-month-year': { month: 'long', year: 'numeric' },
          'short-month-year': { month: 'short', year: 'numeric' },
          year: { year: 'numeric' },
          'short-time': u,
          'long-time': c,
        },
        d = (0, r.w)()({
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
        h =
          (d.apiValues,
          d.toJSON.bind(d),
          d.fromJSON.bind(d),
          { ar: 'ar-u-nu-latn-ca-gregory' });
      let m = new WeakMap(),
        g = f['short-date-short-time'];
      function p(e) {
        return f[e] || null;
      }
      function w(e, t) {
        return (function (e) {
          const t = e || g;
          if (!m.has(t)) {
            const e = (0, o.Kd)(),
              n = h[(0, o.Kd)()] || e;
            m.set(t, new Intl.DateTimeFormat(n, t));
          }
          return m.get(t);
        })(t).format(e);
      }
      (0, o.Ze)(() => {
        (m = new WeakMap()), (g = f['short-date-short-time']);
      });
    },
    94443: (e, t, n) => {
      n.d(t, { ME: () => h, Su: () => m, tz: () => d });
      var r = n(20102),
        o = n(95330),
        s = n(70171);
      const i = /^([a-z]{2})(?:[-_]([A-Za-z]{2}))?$/,
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
      const u = [],
        c = new Map();
      function f(e) {
        for (const t of c.keys()) g(e.pattern, t) && c.delete(t);
      }
      function d(e) {
        return (
          u.includes(e) || (f(e), u.unshift(e)),
          {
            remove() {
              const t = u.indexOf(e);
              t > -1 && (u.splice(t, 1), f(e));
            },
          }
        );
      }
      async function h(e) {
        const t = (0, s.Kd)();
        c.has(e) ||
          c.set(
            e,
            (async function (e, t) {
              const n = [];
              for (const r of u)
                if (g(r.pattern, e))
                  try {
                    return await r.fetchMessageBundle(e, t);
                  } catch (e) {
                    n.push(e);
                  }
              if (n.length)
                throw new r.Z(
                  'intl:message-bundle-error',
                  `Errors occurred while loading "${e}"`,
                  { errors: n },
                );
              throw new r.Z(
                'intl:no-message-bundle-loader',
                `No loader found for message bundle "${e}"`,
              );
            })(e, t),
          );
        const n = c.get(e);
        return await p.add(n), n;
      }
      function m(e) {
        if (!i.test(e)) return null;
        const [, t, n] = i.exec(e),
          r = t + (n ? '-' + n.toUpperCase() : '');
        return l(r) ? r : l(t) ? t : null;
      }
      function g(e, t) {
        return 'string' == typeof e ? t.startsWith(e) : e.test(t);
      }
      (0, s.Ze)(() => {
        c.clear();
      });
      const p = new (class {
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
          this._numLoading++, this._dfd || (this._dfd = (0, o.dD)());
        }
        _decrease() {
          (this._numLoading = Math.max(this._numLoading - 1, 0)),
            this._dfd &&
              0 === this._numLoading &&
              (this._dfd.resolve(), (this._dfd = null));
        }
      })();
    },
    18848: (e, t, n) => {
      n.d(t, { sh: () => l, uf: () => u });
      var r = n(70586),
        o = n(70171);
      const s = { ar: 'ar-u-nu-latn' };
      let i = new WeakMap(),
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
      function u(e, t) {
        return (function (e) {
          const t = e || a;
          if (!i.has(t)) {
            const n = (0, o.Kd)(),
              r = s[(0, o.Kd)()] || n;
            i.set(t, new Intl.NumberFormat(r, e));
          }
          return (0, r.j0)(i.get(t));
        })(t).format(e);
      }
      (0, o.Ze)(() => {
        (i = new WeakMap()), (a = {});
      });
    },
    940: (e, t, n) => {
      n.d(t, { n: () => u });
      var r = n(92604),
        o = n(78286),
        s = n(19153),
        i = n(90344),
        a = n(18848);
      const l = r.Z.getLogger('esri.intl');
      function u(e, t, n = {}) {
        const { format: r = {} } = n;
        return (0, s.gx)(e, (e) =>
          (function (e, t, n) {
            let r, s;
            const i = e.indexOf(':');
            if (
              (-1 === i
                ? (r = e.trim())
                : ((r = e.slice(0, i).trim()), (s = e.slice(i + 1).trim())),
              !r)
            )
              return '';
            const a = (0, o.hS)(r, t);
            if (null == a) return '';
            const l = n[s] || n[r];
            return l ? c(a, l) : s ? f(a, s) : d(a);
          })(e, t, r),
        );
      }
      function c(e, t) {
        switch (t.type) {
          case 'date':
            return (0, i.p6)(e, t.intlOptions);
          case 'number':
            return (0, a.uf)(e, t.intlOptions);
          default:
            return l.warn('missing format descriptor for key {key}'), d(e);
        }
      }
      function f(e, t) {
        switch (t.toLowerCase()) {
          case 'dateformat':
            return (0, i.p6)(e);
          case 'numberformat':
            return (0, a.uf)(e);
          default:
            return (
              l.warn(`inline format is unsupported since 4.12: ${t}`),
              /^(dateformat|datestring)/i.test(t)
                ? (0, i.p6)(e)
                : /^numberformat/i.test(t)
                ? (0, a.uf)(e)
                : d(e)
            );
        }
      }
      function d(e) {
        switch (typeof e) {
          case 'string':
            return e;
          case 'number':
            return (0, a.uf)(e);
          case 'boolean':
            return '' + e;
          default:
            return e instanceof Date ? (0, i.p6)(e) : '';
        }
      }
    },
    3172: (e, t, n) => {
      n.r(t), n.d(t, { default: () => h });
      var r = n(68773),
        o = n(40330),
        s = n(20102),
        i = n(80442),
        a = n(22974),
        l = n(70586),
        u = n(95330),
        c = n(17452),
        f = n(71058),
        d = n(85958);
      async function h(e, t) {
        var a;
        const d = (0, c.HK)(e),
          w = (0, c.jc)(e);
        w || d || (e = (0, c.Fv)(e));
        const y = { url: e, requestOptions: { ...(0, l.Wg)(t) } };
        let b = (0, c.oh)(e);
        if (b) {
          const e = await (async function (e, t) {
            if (null != e.responseData) return e.responseData;
            if (
              (e.headers &&
                (t.requestOptions.headers = {
                  ...t.requestOptions.headers,
                  ...e.headers,
                }),
              e.query &&
                (t.requestOptions.query = {
                  ...t.requestOptions.query,
                  ...e.query,
                }),
              e.before)
            ) {
              let n, r;
              try {
                r = await e.before(t);
              } catch (e) {
                n = A('request:interceptor', e, t);
              }
              if (
                ((r instanceof Error || r instanceof s.Z) &&
                  (n = A('request:interceptor', r, t)),
                n)
              )
                throw (e.error && e.error(n), n);
              return r;
            }
          })(b, y);
          if (null != e)
            return {
              data: e,
              getHeader: k,
              requestOptions: y.requestOptions,
              url: y.url,
            };
          b.after || b.error || (b = null);
        }
        if (((e = y.url), 'image' === (t = y.requestOptions).responseType)) {
          if ((0, i.Z)('host-webworker') || (0, i.Z)('host-node'))
            throw A(
              'request:invalid-parameters',
              new Error(
                "responseType 'image' is not supported in Web Workers or Node environment",
              ),
              y,
            );
        } else if (d)
          throw A(
            'request:invalid-parameters',
            new Error(
              'Data URLs are not supported for responseType = ' +
                t.responseType,
            ),
            y,
          );
        if ('head' === t.method) {
          if (t.body)
            throw A(
              'request:invalid-parameters',
              new Error("body parameter cannot be set when method is 'head'"),
              y,
            );
          if (d || w)
            throw A(
              'request:invalid-parameters',
              new Error(
                "data and blob URLs are not supported for method 'head'",
              ),
              y,
            );
        }
        if (
          (await (async function () {
            (0, i.Z)('host-webworker')
              ? m || (m = await n.e(9884).then(n.bind(n, 29884)))
              : h._abortableFetch ||
                (h._abortableFetch = globalThis.fetch.bind(globalThis));
          })(),
          m)
        )
          return m.execute(e, t);
        const v = new AbortController();
        (0, u.fu)(t, () => v.abort());
        const E = {
            controller: v,
            credential: null,
            credentialToken: null,
            fetchOptions: null,
            hasToken: !1,
            interceptor: b,
            params: y,
            redoRequest: !1,
            useIdentity: g.useIdentity,
            useProxy: !1,
            useSSL: !1,
            withCredentials: !1,
          },
          C = await (async function (e) {
            var t, n;
            let s, i;
            await (async function (e) {
              const t = e.params.url,
                n = e.params.requestOptions,
                s = e.controller.signal,
                i = n.body;
              let a = null,
                l = null,
                c = null;
              if (
                (p &&
                  'HTMLFormElement' in globalThis &&
                  (i instanceof FormData
                    ? (a = i)
                    : i instanceof HTMLFormElement &&
                      ((l = i), (a = new FormData(l)))),
                'string' == typeof i && (c = i),
                (e.fetchOptions = {
                  cache:
                    n.cacheBust && !h._abortableFetch.polyfill
                      ? 'no-cache'
                      : 'default',
                  credentials: 'same-origin',
                  headers: n.headers || {},
                  method: 'head' === n.method ? 'HEAD' : 'GET',
                  mode: 'cors',
                  redirect: 'follow',
                  signal: s,
                }),
                (a || c) && (e.fetchOptions.body = a || c),
                'anonymous' === n.authMode && (e.useIdentity = !1),
                (e.hasToken = !!(
                  /token=/i.test(t) ||
                  (n.query && n.query.token) ||
                  (a && a.get && a.get('token')) ||
                  (l && l.elements.token)
                )),
                !e.hasToken &&
                  r.Z.apiKey &&
                  (0, f.r)(t) &&
                  (n.query || (n.query = {}),
                  (n.query.token = r.Z.apiKey),
                  (e.hasToken = !0)),
                e.useIdentity &&
                  !e.hasToken &&
                  !e.credentialToken &&
                  !L(t) &&
                  !(0, u.Hc)(s))
              ) {
                let r;
                'immediate' === n.authMode
                  ? (await Z(),
                    (r = await o.id.getCredential(t, { signal: s })),
                    (e.credential = r))
                  : 'no-prompt' === n.authMode
                  ? (await Z(),
                    (r = await o.id
                      .getCredential(t, { prompt: !1, signal: s })
                      .catch(() => {})),
                    (e.credential = r))
                  : o.id && (r = o.id.findCredential(t)),
                  r && ((e.credentialToken = r.token), (e.useSSL = !!r.ssl));
              }
            })(e);
            try {
              do {
                [s, i] = await _(e);
              } while (!(await I(e, s, i)));
            } catch (t) {
              const n = A('request:server', t, e.params, s);
              throw (
                ((n.details.ssl = e.useSSL),
                e.interceptor && e.interceptor.error && e.interceptor.error(n),
                n)
              );
            }
            const a = e.params.url;
            if (
              /\/sharing\/rest\/(accounts|portals)\/self/i.test(a) &&
              !e.hasToken &&
              !e.credentialToken &&
              null != (t = i) &&
              null != (n = t.user) &&
              n.username &&
              !(0, c.kl)(a)
            ) {
              const e = (0, c.P$)(a, !0);
              e && g.trustedServers.push(e);
            }
            const l = e.credential;
            if (l && o.id) {
              const e = o.id.findServerInfo(l.server);
              let t = e && e.owningSystemUrl;
              if (t) {
                t = t.replace(/\/?$/, '/sharing');
                const e = o.id.findCredential(t, l.userId);
                e &&
                  -1 === o.id._getIdenticalSvcIdx(t, e) &&
                  e.resources.unshift(t);
              }
            }
            return {
              data: i,
              getHeader: s ? (e) => s.headers.get(e) : k,
              requestOptions: e.params.requestOptions,
              ssl: e.useSSL,
              url: e.params.url,
            };
          })(E);
        return null == (a = b) || null == a.after || a.after(C), C;
      }
      let m;
      const g = r.Z.request,
        p = 'FormData' in globalThis,
        w = [499, 498, 403, 401],
        y = ['COM_0056', 'COM_0057', 'SB_0008'],
        b = [
          /\/arcgis\/tokens/i,
          /\/sharing(\/rest)?\/generatetoken/i,
          /\/rest\/info/i,
        ],
        k = () => null,
        v = Symbol();
      function E(e) {
        const t = (0, c.P$)(e);
        return (
          !t ||
          t.endsWith('.arcgis.com') ||
          h._corsServers.includes(t) ||
          (0, c.kl)(t)
        );
      }
      function A(e, t, n, r) {
        let o = 'Error';
        const i = {
          url: n.url,
          requestOptions: n.requestOptions,
          getHeader: k,
          ssl: !1,
        };
        if (t instanceof s.Z)
          return (
            t.details
              ? ((t.details = (0, a.d9)(t.details)),
                (t.details.url = n.url),
                (t.details.requestOptions = n.requestOptions))
              : (t.details = i),
            t
          );
        if (t) {
          const e = r && ((e) => r.headers.get(e)),
            n = r && r.status,
            s = t.message;
          s && (o = s),
            e && (i.getHeader = e),
            (i.httpStatus =
              (null != t.httpCode ? t.httpCode : t.code) || n || 0),
            (i.subCode = t.subcode),
            (i.messageCode = t.messageCode),
            'string' == typeof t.details
              ? (i.messages = [t.details])
              : (i.messages = t.details),
            (i.raw = v in t ? t[v] : t);
        }
        return (0, u.D_)(t) ? (0, u.zE)() : new s.Z(e, o, i);
      }
      async function Z() {
        o.id ||
          (await Promise.all([n.e(280), n.e(1400), n.e(7913)]).then(
            n.bind(n, 33107),
          ));
      }
      function L(e) {
        return b.some((t) => t.test(e));
      }
      async function _(e) {
        let t = e.params.url;
        const n = e.params.requestOptions,
          r = e.fetchOptions,
          s = (0, c.jc)(t) || (0, c.HK)(t),
          a = n.responseType || 'json',
          l = s ? 0 : null != n.timeout ? n.timeout : g.timeout;
        let f = !1;
        if (!s) {
          e.useSSL && (t = (0, c.hO)(t)),
            n.cacheBust &&
              'default' === r.cache &&
              (t = (0, c.ZN)(t, 'request.preventCache', Date.now()));
          let s = { ...n.query };
          e.credentialToken && (s.token = e.credentialToken);
          let a = (0, c.B7)(s);
          (0, i.Z)('esri-url-encodes-apostrophe') &&
            (a = a.replace(/'/g, '%27'));
          const l = t.length + 1 + a.length;
          let u;
          f =
            'delete' === n.method ||
            'post' === n.method ||
            'put' === n.method ||
            !!n.body ||
            l > g.maxUrlLength;
          const d = n.useProxy || !!(0, c.ed)(t);
          if (d) {
            const e = (0, c.b7)(t);
            (u = e.path),
              !f && u.length + 1 + l > g.maxUrlLength && (f = !0),
              e.query && (s = { ...e.query, ...s });
          }
          if ('HEAD' === r.method && (f || d)) {
            if (f) {
              if (l > g.maxUrlLength)
                throw A(
                  'request:invalid-parameters',
                  new Error('URL exceeds maximum length'),
                  e.params,
                );
              throw A(
                'request:invalid-parameters',
                new Error("cannot use POST request when method is 'head'"),
                e.params,
              );
            }
            if (d)
              throw A(
                'request:invalid-parameters',
                new Error("cannot use proxy when method is 'head'"),
                e.params,
              );
          }
          if (
            (f
              ? ((r.method =
                  'delete' === n.method
                    ? 'DELETE'
                    : 'put' === n.method
                    ? 'PUT'
                    : 'POST'),
                n.body
                  ? (t = (0, c.fl)(t, s))
                  : ((r.body = (0, c.B7)(s)),
                    (r.headers['Content-Type'] =
                      'application/x-www-form-urlencoded')))
              : (t = (0, c.fl)(t, s)),
            d && ((e.useProxy = !0), (t = `${u}?${t}`)),
            s.token && p && r.body instanceof FormData)
          ) {
            const e = r.body;
            e.set ? e.set('token', s.token) : e.append('token', s.token);
          }
          if (n.hasOwnProperty('withCredentials'))
            e.withCredentials = n.withCredentials;
          else if (!(0, c.D6)(t, (0, c.TI)()))
            if ((0, c.kl)(t)) e.withCredentials = !0;
            else if (o.id) {
              const n = o.id.findServerInfo(t);
              n && n.webTierAuth && (e.withCredentials = !0);
            }
          e.withCredentials && (r.credentials = 'include');
        }
        let d,
          m,
          w = 0,
          y = !1;
        l > 0 &&
          (w = setTimeout(() => {
            (y = !0), e.controller.abort();
          }, l));
        try {
          if ('native-request-init' === n.responseType) (m = r), (m.url = t);
          else if (
            'image' !== n.responseType ||
            'default' !== r.cache ||
            'GET' !== r.method ||
            f ||
            (function (e) {
              if (e)
                for (const t of Object.getOwnPropertyNames(e))
                  if (e[t]) return !0;
              return !1;
            })(n.headers) ||
            (!s && !e.useProxy && g.proxyUrl && !E(t))
          ) {
            if (
              ((d = await h._abortableFetch(t, r)),
              e.useProxy ||
                (function (e) {
                  const t = (0, c.P$)(e);
                  t && !h._corsServers.includes(t) && h._corsServers.push(t);
                })(t),
              'native' === n.responseType)
            )
              m = d;
            else if ('HEAD' !== r.method)
              if (d.ok) {
                switch (a) {
                  case 'array-buffer':
                    m = await d.arrayBuffer();
                    break;
                  case 'blob':
                  case 'image':
                    m = await d.blob();
                    break;
                  default:
                    m = await d.text();
                }
                if (
                  (w && (clearTimeout(w), (w = 0)),
                  'json' === a || 'xml' === a || 'document' === a)
                )
                  if (m)
                    switch (a) {
                      case 'json':
                        m = JSON.parse(m);
                        break;
                      case 'xml':
                        m = C(m, 'application/xml');
                        break;
                      case 'document':
                        m = C(m, 'text/html');
                    }
                  else m = null;
                if (m) {
                  if ('array-buffer' === a || 'blob' === a) {
                    const e = d.headers.get('Content-Type');
                    if (
                      /application\/json|text\/plain/i.test(e) &&
                      m['blob' === a ? 'size' : 'byteLength'] <= 750
                    )
                      try {
                        const e = await new Response(m).json();
                        e.error && (m = e);
                      } catch {}
                  }
                  'image' === a &&
                    m instanceof Blob &&
                    (m = await S(URL.createObjectURL(m), e, !0));
                }
              } else m = await d.text();
          } else m = await S(t, e);
        } catch (r) {
          if ('AbortError' === r.name) {
            if (y) throw new Error('Timeout exceeded');
            throw (0, u.zE)('Request canceled');
          }
          if (
            !(!d && r instanceof TypeError && g.proxyUrl) ||
            n.body ||
            'delete' === n.method ||
            'head' === n.method ||
            'post' === n.method ||
            'put' === n.method ||
            e.useProxy ||
            E(t)
          )
            throw r;
          (e.redoRequest = !0),
            (0, c.tD)({ proxyUrl: g.proxyUrl, urlPrefix: (0, c.P$)(t) });
        } finally {
          w && clearTimeout(w);
        }
        return [d, m];
      }
      function C(e, t) {
        let n;
        try {
          n = new DOMParser().parseFromString(e, t);
        } catch {}
        if (!n || n.getElementsByTagName('parsererror').length)
          throw new SyntaxError('XML Parse error');
        return n;
      }
      async function I(e, t, n) {
        if (e.redoRequest) return (e.redoRequest = !1), !1;
        const r = e.params.requestOptions;
        if (
          !t ||
          'native' === r.responseType ||
          'native-request-init' === r.responseType
        )
          return !0;
        let s, i, a, l;
        if (!t.ok)
          throw (
            ((s = new Error(`Unable to load ${t.url} status: ${t.status}`)),
            (s[v] = n),
            s)
          );
        null != n && n.error && (s = n.error),
          s &&
            ((i = Number(s.code)),
            (a = s.hasOwnProperty('subcode') ? Number(s.subcode) : null),
            (l = s.messageCode),
            (l = l && l.toUpperCase()));
        const u = r.authMode;
        if (
          403 === i &&
          (4 === a ||
            (s.message &&
              s.message.toLowerCase().indexOf('ssl') > -1 &&
              -1 === s.message.toLowerCase().indexOf('permission')))
        ) {
          if (!e.useSSL) return (e.useSSL = !0), !1;
        } else if (
          !e.hasToken &&
          e.useIdentity &&
          ('no-prompt' !== u || 498 === i) &&
          -1 !== w.indexOf(i) &&
          !L(e.params.url) &&
          (403 !== i ||
            (-1 === y.indexOf(l) &&
              (null == a || (2 === a && e.credentialToken))))
        ) {
          await Z();
          try {
            const t = await o.id.getCredential(e.params.url, {
              error: A('request:server', s, e.params),
              prompt: 'no-prompt' !== u,
              signal: e.controller.signal,
              token: e.credentialToken,
            });
            return (
              (e.credential = t),
              (e.credentialToken = t.token),
              (e.useSSL = e.useSSL || t.ssl),
              !1
            );
          } catch (t) {
            if ('no-prompt' === u)
              return (e.credential = null), (e.credentialToken = null), !1;
            s = t;
          }
        }
        if (s) throw s;
        return !0;
      }
      function S(e, t, n = !1) {
        const r = t.controller.signal,
          o = new Image();
        return (
          t.withCredentials
            ? (o.crossOrigin = 'use-credentials')
            : (o.crossOrigin = 'anonymous'),
          (o.alt = ''),
          (o.src = e),
          (0, d.f)(o, e, n, r)
        );
      }
      (h._abortableFetch = null),
        (h._corsServers = [
          'https://server.arcgisonline.com',
          'https://services.arcgisonline.com',
        ]);
    },
    71058: (e, t, n) => {
      n.d(t, { r: () => s });
      var r = n(17452);
      const o = [
        'elevation3d.arcgis.com',
        'js.arcgis.com',
        'jsdev.arcgis.com',
        'jsqa.arcgis.com',
        'static.arcgis.com',
      ];
      function s(e) {
        const t = (0, r.P$)(e, !0);
        return (
          t &&
          t.endsWith('.arcgis.com') &&
          !o.includes(t) &&
          !e.endsWith('/sharing/rest/generateToken')
        );
      }
    },
    85958: (e, t, n) => {
      n.d(t, { f: () => i });
      var r = n(80442),
        o = n(70586),
        s = n(95330);
      function i(e, t, n = !1, i) {
        return new Promise((l, u) => {
          if ((0, s.Hc)(i)) return void u(a());
          let c = () => {
              h(), u(new Error(`Unable to load ${t}`));
            },
            f = () => {
              const t = e;
              h(), l(t);
            },
            d = () => {
              if (!e) return;
              const t = e;
              h(), (t.src = ''), u(a());
            };
          const h = () => {
            (0, r.Z)('esri-image-decode') ||
              (e.removeEventListener('error', c),
              e.removeEventListener('load', f)),
              (c = null),
              (f = null),
              (e = null),
              (0, o.pC)(i) && i.removeEventListener('abort', d),
              (d = null),
              n && URL.revokeObjectURL(t);
          };
          (0, o.pC)(i) && i.addEventListener('abort', d),
            (0, r.Z)('esri-image-decode')
              ? e.decode().then(f, c)
              : (e.addEventListener('error', c), e.addEventListener('load', f));
        });
      }
      function a() {
        try {
          return new DOMException('Aborted', 'AbortError');
        } catch {
          const e = new Error();
          return (e.name = 'AbortError'), e;
        }
      }
    },
  },
]);
