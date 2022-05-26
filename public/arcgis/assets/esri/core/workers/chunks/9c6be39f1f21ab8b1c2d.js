'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [9153],
  {
    59153: (n, t, e) => {
      e.r(t), e.d(t, { registerFunctions: () => s });
      var r = e(61363),
        u = e(24240),
        i = e(95330),
        c = e(41534);
      function a(n, t, e, a, s, f) {
        if (1 === a.length) {
          if ((0, r.a)(a[0]))
            return (0, i.DB)((0, u.t)(n, a[0], (0, r.C)(a[1], -1)));
          if ((0, r.b)(a[0]))
            return (0, i.DB)((0, u.t)(n, a[0].toArray(), (0, r.C)(a[1], -1)));
        } else if (2 === a.length) {
          if ((0, r.a)(a[0]))
            return (0, i.DB)((0, u.t)(n, a[0], (0, r.C)(a[1], -1)));
          if ((0, r.b)(a[0]))
            return (0, i.DB)((0, u.t)(n, a[0].toArray(), (0, r.C)(a[1], -1)));
          if ((0, r.q)(a[0]))
            return a[0]
              .load()
              .then((e) =>
                o(c.WhereClause.create(a[1], e.getFieldsIndex()), f, s).then(
                  (e) =>
                    a[0].calculateStatistic(
                      n,
                      e,
                      (0, r.C)(a[2], 1e3),
                      t.abortSignal,
                    ),
                ),
              );
        } else if (3 === a.length && (0, r.q)(a[0]))
          return a[0]
            .load()
            .then((e) =>
              o(c.WhereClause.create(a[1], e.getFieldsIndex()), f, s).then(
                (e) =>
                  a[0].calculateStatistic(
                    n,
                    e,
                    (0, r.C)(a[2], 1e3),
                    t.abortSignal,
                  ),
              ),
            );
        return (0, i.DB)((0, u.t)(n, a, -1));
      }
      function o(n, t, e) {
        try {
          const r = n.getVariables();
          if (r.length > 0) {
            const u = [];
            for (let n = 0; n < r.length; n++) {
              const i = { name: r[n] };
              u.push(t.evaluateIdentifier(e, i));
            }
            return (0, i.$6)(u).then((t) => {
              const e = {};
              for (let n = 0; n < r.length; n++) e[r[n]] = t[n];
              return (n.parameters = e), n;
            });
          }
          return (0, i.DB)(n);
        } catch (n) {
          return (0, i.d1)(n);
        }
      }
      function s(n) {
        'async' === n.mode &&
          ((n.functions.stdev = function (t, e) {
            return n.standardFunctionAsync(t, e, function (e, r, u) {
              return a('stdev', e, 0, u, t, n);
            });
          }),
          (n.functions.variance = function (t, e) {
            return n.standardFunctionAsync(t, e, function (e, r, u) {
              return a('variance', e, 0, u, t, n);
            });
          }),
          (n.functions.average = function (t, e) {
            return n.standardFunctionAsync(t, e, function (e, r, u) {
              return a('mean', e, 0, u, t, n);
            });
          }),
          (n.functions.mean = function (t, e) {
            return n.standardFunctionAsync(t, e, function (e, r, u) {
              return a('mean', e, 0, u, t, n);
            });
          }),
          (n.functions.sum = function (t, e) {
            return n.standardFunctionAsync(t, e, function (e, r, u) {
              return a('sum', e, 0, u, t, n);
            });
          }),
          (n.functions.min = function (t, e) {
            return n.standardFunctionAsync(t, e, function (e, r, u) {
              return a('min', e, 0, u, t, n);
            });
          }),
          (n.functions.max = function (t, e) {
            return n.standardFunctionAsync(t, e, function (e, r, u) {
              return a('max', e, 0, u, t, n);
            });
          }),
          (n.functions.count = function (t, e) {
            return n.standardFunctionAsync(t, e, function (n, t, e) {
              if (((0, r.p)(e, 1, 1), (0, r.q)(e[0])))
                return e[0].count(n.abortSignal);
              if ((0, r.a)(e[0]) || (0, r.f)(e[0])) return e[0].length;
              if ((0, r.b)(e[0])) return e[0].length();
              throw new Error('Invalid Parameters for Count');
            });
          }));
      }
    },
  },
]);
