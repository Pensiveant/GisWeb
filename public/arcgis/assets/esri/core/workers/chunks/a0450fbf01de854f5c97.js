'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [247],
  {
    20178: (e, n, t) => {
      t.d(n, {
        A: () => H,
        B: () => I,
        C: () => R,
        D: () => j,
        E: () => k,
        F: () => L,
        G: () => S,
        H: () => q,
        I: () => B,
        J: () => _,
        K: () => F,
        a: () => o,
        b: () => f,
        c: () => c,
        d: () => s,
        e: () => u,
        f: () => l,
        g: () => J,
        h: () => a,
        i: () => p,
        j: () => N,
        k: () => m,
        l: () => y,
        m: () => w,
        n: () => A,
        o: () => g,
        p: () => v,
        q: () => C,
        r: () => h,
        s: () => x,
        t: () => G,
        u: () => z,
        v: () => V,
        w: () => d,
        x: () => b,
        y: () => D,
        z: () => E,
      });
      var r = t(45837),
        i = t(37455);
      function u(e) {
        return r.G.extendedSpatialReferenceInfo(e);
      }
      function c(e, n, t) {
        return r.G.clip(i.N, e, n, t);
      }
      function o(e, n, t) {
        return r.G.cut(i.N, e, n, t);
      }
      function f(e, n, t) {
        return r.G.contains(i.N, e, n, t);
      }
      function s(e, n, t) {
        return r.G.crosses(i.N, e, n, t);
      }
      function l(e, n, t, u) {
        return r.G.distance(i.N, e, n, t, u);
      }
      function a(e, n, t) {
        return r.G.equals(i.N, e, n, t);
      }
      function p(e, n, t) {
        return r.G.intersects(i.N, e, n, t);
      }
      function G(e, n, t) {
        return r.G.touches(i.N, e, n, t);
      }
      function d(e, n, t) {
        return r.G.within(i.N, e, n, t);
      }
      function N(e, n, t) {
        return r.G.disjoint(i.N, e, n, t);
      }
      function g(e, n, t) {
        return r.G.overlaps(i.N, e, n, t);
      }
      function h(e, n, t, u) {
        return r.G.relate(i.N, e, n, t, u);
      }
      function m(e, n) {
        return r.G.isSimple(i.N, e, n);
      }
      function x(e, n) {
        return r.G.simplify(i.N, e, n);
      }
      function y(e, n, t = !1) {
        return r.G.convexHull(i.N, e, n, t);
      }
      function w(e, n, t) {
        return r.G.difference(i.N, e, n, t);
      }
      function A(e, n, t) {
        return r.G.symmetricDifference(i.N, e, n, t);
      }
      function v(e, n, t) {
        return r.G.intersect(i.N, e, n, t);
      }
      function z(e, n, t = null) {
        return r.G.union(i.N, e, n, t);
      }
      function C(e, n, t, u, c, o, f) {
        return r.G.offset(i.N, e, n, t, u, c, o, f);
      }
      function V(e, n, t, u, c = !1) {
        return r.G.buffer(i.N, e, n, t, u, c);
      }
      function b(e, n, t, u, c, o, f) {
        return r.G.geodesicBuffer(i.N, e, n, t, u, c, o, f);
      }
      function D(e, n, t, u = !0) {
        return r.G.nearestCoordinate(i.N, e, n, t, u);
      }
      function E(e, n, t) {
        return r.G.nearestVertex(i.N, e, n, t);
      }
      function H(e, n, t, u, c) {
        return r.G.nearestVertices(i.N, e, n, t, u, c);
      }
      function I(e, n, t, i) {
        if (null == n || null == i)
          throw new Error('Illegal Argument Exception');
        const u = r.G.rotate(n, t, i);
        return (u.spatialReference = e), u;
      }
      function R(e, n, t) {
        if (null == n || null == t)
          throw new Error('Illegal Argument Exception');
        const i = r.G.flipHorizontal(n, t);
        return (i.spatialReference = e), i;
      }
      function j(e, n, t) {
        if (null == n || null == t)
          throw new Error('Illegal Argument Exception');
        const i = r.G.flipVertical(n, t);
        return (i.spatialReference = e), i;
      }
      function k(e, n, t, u, c) {
        return r.G.generalize(i.N, e, n, t, u, c);
      }
      function L(e, n, t, u) {
        return r.G.densify(i.N, e, n, t, u);
      }
      function S(e, n, t, u, c = 0) {
        return r.G.geodesicDensify(i.N, e, n, t, u, c);
      }
      function q(e, n, t) {
        return r.G.planarArea(i.N, e, n, t);
      }
      function B(e, n, t) {
        return r.G.planarLength(i.N, e, n, t);
      }
      function _(e, n, t, u) {
        return r.G.geodesicArea(i.N, e, n, t, u);
      }
      function F(e, n, t, u) {
        return r.G.geodesicLength(i.N, e, n, t, u);
      }
      const J = Object.freeze({
        __proto__: null,
        extendedSpatialReferenceInfo: u,
        clip: c,
        cut: o,
        contains: f,
        crosses: s,
        distance: l,
        equals: a,
        intersects: p,
        touches: G,
        within: d,
        disjoint: N,
        overlaps: g,
        relate: h,
        isSimple: m,
        simplify: x,
        convexHull: y,
        difference: w,
        symmetricDifference: A,
        intersect: v,
        union: z,
        offset: C,
        buffer: V,
        geodesicBuffer: b,
        nearestCoordinate: D,
        nearestVertex: E,
        nearestVertices: H,
        rotate: I,
        flipHorizontal: R,
        flipVertical: j,
        generalize: k,
        densify: L,
        geodesicDensify: S,
        planarArea: q,
        planarLength: B,
        geodesicArea: _,
        geodesicLength: F,
      });
    },
    30247: (e, n, t) => {
      t.r(n),
        t.d(n, {
          buffer: () => r.v,
          clip: () => r.c,
          contains: () => r.b,
          convexHull: () => r.l,
          crosses: () => r.d,
          cut: () => r.a,
          densify: () => r.F,
          difference: () => r.m,
          disjoint: () => r.j,
          distance: () => r.f,
          equals: () => r.h,
          extendedSpatialReferenceInfo: () => r.e,
          flipHorizontal: () => r.C,
          flipVertical: () => r.D,
          generalize: () => r.E,
          geodesicArea: () => r.J,
          geodesicBuffer: () => r.x,
          geodesicDensify: () => r.G,
          geodesicLength: () => r.K,
          intersect: () => r.p,
          intersects: () => r.i,
          isSimple: () => r.k,
          nearestCoordinate: () => r.y,
          nearestVertex: () => r.z,
          nearestVertices: () => r.A,
          offset: () => r.q,
          overlaps: () => r.o,
          planarArea: () => r.H,
          planarLength: () => r.I,
          relate: () => r.r,
          rotate: () => r.B,
          simplify: () => r.s,
          symmetricDifference: () => r.n,
          touches: () => r.t,
          union: () => r.u,
          within: () => r.w,
        }),
        t(45837),
        t(37455);
      var r = t(20178);
    },
  },
]);
