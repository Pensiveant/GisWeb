'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [8828],
  {
    18828: (e, t, n) => {
      n.r(t),
        n.d(t, {
          executeScript: () => se,
          extend: () => ie,
          extractFieldLiterals: () => ue,
          findFunctionCalls: () => pe,
          functionHelper: () => le,
          referencesFunction: () => de,
          referencesMember: () => he,
          validateScript: () => fe,
        });
      var r = n(28228),
        o = n(80692),
        a = n(33586),
        c = n(15274),
        l = n(9609),
        i = n(50728),
        s = n(25785),
        u = n(61363),
        f = n(90077),
        h = n(90658),
        d = n(84211),
        p = n(13976),
        g = n(66748),
        v = n(12834),
        E = n(38176),
        m = n(58130),
        y = n(27360),
        w = n(95330),
        N = n(6570),
        I = n(9361),
        b = n(65091),
        U = n(13473),
        R = n(38913),
        S = n(58901),
        T = n(82971);
      function O(e) {
        return e && 'function' == typeof e.then;
      }
      const D = 100;
      function C(e) {
        return e instanceof Error ? (0, w.d1)(e) : (0, w.d1)(new Error(e));
      }
      function A(e) {
        return (0, w.DB)(e);
      }
      function F(e, t) {
        const n = [];
        for (let r = 0; r < t.arguments.length; r++)
          n.push(k(e, t.arguments[r]));
        return (0, w.$6)(n);
      }
      function M(e, t, n) {
        return (0, w.Ue)((r, o) => {
          if (!0 === t.preparsed) return r(n(e, null, t.arguments));
          F(e, t).then((a) => {
            try {
              r(n(e, t, a));
            } catch (e) {
              o(e);
            }
          }, o);
        });
      }
      function x(e, t, n) {
        try {
          if (!0 === t.preparsed) {
            const r = n(e, null, t.arguments);
            return O(r) ? r : (0, w.DB)(r);
          }
          return F(e, t).then((r) => {
            try {
              const o = n(e, t, r);
              return O(o) ? o : (0, w.DB)(o);
            } catch (e) {
              return C(e);
            }
          });
        } catch (e) {
          return C(e);
        }
      }
      function k(e, t, n) {
        try {
          if (t.breakpoint && !0 !== n)
            return t.breakpoint().then(() => k(e, t, !0));
          switch (t.type) {
            case 'VariableDeclarator':
              return (function (e, t) {
                try {
                  let n = null;
                  return (
                    (n = null === t.init ? (0, w.DB)(null) : k(e, t.init)),
                    null !== e.localScope
                      ? n.then((n) =>
                          (0, w.Ue)((r) => {
                            if (
                              (n === u.v && (n = null),
                              'Identifier' !== t.id.type)
                            )
                              throw new Error(
                                'Can only assign a regular variable',
                              );
                            const o = t.id.name.toLowerCase();
                            (e.localScope[o] = {
                              value: n,
                              valueset: !0,
                              node: t.init,
                            }),
                              r(u.v);
                          }),
                        )
                      : n.then((n) =>
                          (0, w.Ue)((r) => {
                            if ('Identifier' !== t.id.type)
                              throw new Error(
                                'Can only assign a regular variable',
                              );
                            const o = t.id.name.toLowerCase();
                            n === u.v && (n = null),
                              (e.globalScope[o] = {
                                value: n,
                                valueset: !0,
                                node: t.init,
                              }),
                              r(u.v);
                          }),
                        )
                  );
                } catch (e) {
                  return C(e);
                }
              })(e, t);
            case 'VariableDeclaration':
              return Y(e, t, 0);
            case 'BlockStatement':
              return (function (e, t) {
                try {
                  return V(e, t, 0);
                } catch (e) {
                  return C(e);
                }
              })(e, t);
            case 'FunctionDeclaration':
              return (function (e, t) {
                try {
                  const n = t.id.name.toLowerCase();
                  return (
                    (e.globalScope[n] = {
                      valueset: !0,
                      node: null,
                      value: new l.Z(t, e),
                    }),
                    (0, w.DB)(u.v)
                  );
                } catch (e) {
                  return C(e);
                }
              })(e, t);
            case 'ReturnStatement':
              return (function (e, t) {
                return (0, w.Ue)((n, r) => {
                  null === t.argument
                    ? n(new u.R(u.v))
                    : k(e, t.argument).then((e) => {
                        try {
                          n(new u.R(e));
                        } catch (e) {
                          r(e);
                        }
                      }, r);
                });
              })(e, t);
            case 'IfStatement':
              return (function (e, t) {
                return (0, w.Ue)((n, r) => {
                  'AssignmentExpression' !== t.test.type &&
                  'UpdateExpression' !== t.test.type
                    ? k(e, t.test).then((o) => {
                        try {
                          !0 === o
                            ? k(e, t.consequent).then(n, r)
                            : !1 === o
                            ? null !== t.alternate
                              ? k(e, t.alternate).then(n, r)
                              : n(u.v)
                            : r(
                                new Error(
                                  (0, f.H5)(
                                    t.test,
                                    'RUNTIME',
                                    'CANNOT_USE_NONBOOLEAN_IN_CONDITION',
                                  ),
                                ),
                              );
                        } catch (e) {
                          r(e);
                        }
                      }, r)
                    : r(
                        new Error(
                          (0, f.H5)(
                            t.test,
                            'RUNTIME',
                            'CANNOT_USE_ASSIGNMENT_IN_CONDITION',
                          ),
                        ),
                      );
                });
              })(e, t);
            case 'ExpressionStatement':
              return (function (e, t) {
                try {
                  return 'AssignmentExpression' === t.expression.type
                    ? k(e, t.expression)
                    : (t.expression.type,
                      k(e, t.expression).then((e) =>
                        (0, w.Ue)((t) => {
                          t(e === u.v ? u.v : new u.I(e));
                        }),
                      ));
                } catch (e) {
                  return (0, w.d1)(e);
                }
              })(e, t);
            case 'UpdateExpression':
              return (function (e, t) {
                try {
                  const n = t.argument;
                  if ('MemberExpression' === n.type) {
                    const r = { t: null };
                    return k(e, n.object)
                      .then((t) => {
                        let o = null;
                        return (
                          (r.t = t),
                          !0 === n.computed
                            ? (o = k(e, n.property))
                            : 'Identifier' === n.property.type &&
                              (o = (0, w.DB)(n.property.name)),
                          o
                        );
                      })
                      .then((e) =>
                        (0, w.Ue)((n) => {
                          const o = r.t;
                          let c;
                          if ((0, u.a)(o)) {
                            if (!(0, u.j)(e))
                              throw new Error('Invalid Parameter');
                            if (
                              (e < 0 && (e = o.length + e),
                              e < 0 || e >= o.length)
                            )
                              throw new Error(
                                'Assignment outside of array bounds',
                              );
                            (c = (0, u.t)(o[e])),
                              (o[e] = '++' === t.operator ? c + 1 : c - 1);
                          } else if (o instanceof a.Z) {
                            if (!1 === (0, u.f)(e))
                              throw new Error(
                                'Dictionary accessor must be a string',
                              );
                            if (!0 !== o.hasField(e))
                              throw new Error('Invalid Parameter');
                            (c = (0, u.t)(o.field(e))),
                              o.setField(
                                e,
                                '++' === t.operator ? c + 1 : c - 1,
                              );
                          } else {
                            if (!(0, u.k)(o))
                              throw (0, u.b)(o)
                                ? new Error('Array is Immutable')
                                : new Error('Invalid Parameter');
                            if (!1 === (0, u.f)(e))
                              throw new Error(
                                'Feature accessor must be a string',
                              );
                            if (!0 !== o.hasField(e))
                              throw new Error('Invalid Parameter');
                            (c = (0, u.t)(o.field(e))),
                              o.setField(
                                e,
                                '++' === t.operator ? c + 1 : c - 1,
                              );
                          }
                          !1 === t.prefix
                            ? n(c)
                            : n('++' === t.operator ? c + 1 : c - 1);
                        }),
                      );
                  }
                  return (0, w.Ue)((n, r) => {
                    const o =
                      'Identifier' === t.argument.type
                        ? t.argument.name.toLowerCase()
                        : '';
                    if (!o) throw new Error('Invalid identifier');
                    let a;
                    return null !== e.localScope && void 0 !== e.localScope[o]
                      ? ((a = (0, u.t)(e.localScope[o].value)),
                        (e.localScope[o] = {
                          value: '++' === t.operator ? a + 1 : a - 1,
                          valueset: !0,
                          node: t,
                        }),
                        void (!1 === t.prefix
                          ? n(a)
                          : n('++' === t.operator ? a + 1 : a - 1)))
                      : void 0 !== e.globalScope[o]
                      ? ((a = (0, u.t)(e.globalScope[o].value)),
                        (e.globalScope[o] = {
                          value: '++' === t.operator ? a + 1 : a - 1,
                          valueset: !0,
                          node: t,
                        }),
                        void (!1 === t.prefix
                          ? n(a)
                          : n('++' === t.operator ? a + 1 : a - 1)))
                      : void r(new Error('Variable not recognised'));
                  });
                } catch (e) {
                  return (0, w.d1)(e);
                }
              })(e, t);
            case 'AssignmentExpression':
              return (function (e, t) {
                return (0, w.Ue)((n, r) => {
                  const o = t.left;
                  if ('MemberExpression' === o.type)
                    k(e, t.right).then((c) => {
                      try {
                        k(e, o.object).then((l) => {
                          try {
                            let i = null;
                            if (!0 === o.computed) i = k(e, o.property);
                            else {
                              if ('Identifier' !== o.property.type)
                                throw new Error(
                                  'Expected computed or identifier for assignemnt target',
                                );
                              i = (0, w.DB)(o.property.name);
                            }
                            i.then((e) => {
                              try {
                                if ((0, u.a)(l)) {
                                  if (!(0, u.j)(e))
                                    throw new Error('Invalid Parameter');
                                  if (
                                    (e < 0 && (e = l.length + e),
                                    e < 0 || e > l.length)
                                  )
                                    throw new Error(
                                      'Assignment outside of array bounds',
                                    );
                                  if (e === l.length) {
                                    if ('=' !== t.operator)
                                      throw new Error('Invalid Parameter');
                                    l[e] = j(c, t.operator, l[e], t);
                                  } else l[e] = j(c, t.operator, l[e], t);
                                } else if (l instanceof a.Z) {
                                  if (!1 === (0, u.f)(e))
                                    throw new Error(
                                      'Dictionary accessor must be a string',
                                    );
                                  if (!0 === l.hasField(e))
                                    l.setField(
                                      e,
                                      j(c, t.operator, l.field(e), t),
                                    );
                                  else {
                                    if ('=' !== t.operator)
                                      throw new Error('Invalid Parameter');
                                    l.setField(e, j(c, t.operator, null, t));
                                  }
                                } else {
                                  if (!(0, u.k)(l))
                                    throw (0, u.b)(l)
                                      ? new Error('Array is Immutable')
                                      : new Error('Invalid Parameter');
                                  if (!1 === (0, u.f)(e))
                                    throw new Error(
                                      'Feature accessor must be a string',
                                    );
                                  if (!0 === l.hasField(e))
                                    l.setField(
                                      e,
                                      j(c, t.operator, l.field(e), t),
                                    );
                                  else {
                                    if ('=' !== t.operator)
                                      throw new Error('Invalid Parameter');
                                    l.setField(e, j(c, t.operator, null, t));
                                  }
                                }
                                n(u.v);
                              } catch (e) {
                                r(e);
                              }
                            }, r);
                          } catch (e) {
                            r(e);
                          }
                        }, r);
                      } catch (e) {
                        r(e);
                      }
                    }, r);
                  else {
                    const a = o.name.toLowerCase();
                    if (null !== e.localScope && void 0 !== e.localScope[a])
                      return void k(e, t.right).then((o) => {
                        try {
                          (e.localScope[a] = {
                            value: j(o, t.operator, e.localScope[a].value, t),
                            valueset: !0,
                            node: t.right,
                          }),
                            n(u.v);
                        } catch (e) {
                          r(e);
                        }
                      }, r);
                    void 0 !== e.globalScope[a]
                      ? k(e, t.right).then((o) => {
                          try {
                            (e.globalScope[a] = {
                              value: j(
                                o,
                                t.operator,
                                e.globalScope[a].value,
                                t,
                              ),
                              valueset: !0,
                              node: t.right,
                            }),
                              n(u.v);
                          } catch (e) {
                            r(e);
                          }
                        }, r)
                      : r(new Error('Cannot assign undeclared variable'));
                  }
                });
              })(e, t);
            case 'ForStatement':
              return (function (e, t) {
                try {
                  return null !== t.init
                    ? k(e, t.init).then(() =>
                        (0, w.Ue)((n, r) => {
                          L(
                            e,
                            t,
                            { testResult: !0, lastAction: u.v },
                            (e) => {
                              n(e);
                            },
                            (e) => {
                              r(e);
                            },
                            0,
                          );
                        }),
                      )
                    : (0, w.Ue)((n, r) => {
                        L(
                          e,
                          t,
                          { testResult: !0, lastAction: u.v },
                          (e) => {
                            n(e);
                          },
                          (e) => {
                            r(e);
                          },
                          0,
                        );
                      });
                } catch (e) {
                  return (0, w.d1)(e);
                }
              })(e, t);
            case 'ForInStatement':
              return (function (e, t) {
                return (0, w.Ue)((n, r) => {
                  k(e, t.right).then((o) => {
                    try {
                      let c = null;
                      (c =
                        'VariableDeclaration' === t.left.type
                          ? k(e, t.left)
                          : (0, w.DB)()),
                        c.then(() => {
                          try {
                            let c = '';
                            if ('VariableDeclaration' === t.left.type) {
                              const e = t.left.declarations[0].id;
                              'Identifier' === e.type && (c = e.name);
                            } else
                              'Identifier' === t.left.type && (c = t.left.name);
                            if (!c)
                              throw new Error(
                                (0, f.H5)(t, 'RUNTIME', 'INVALIDVARIABLE'),
                              );
                            c = c.toLowerCase();
                            let l = null;
                            if (
                              (null !== e.localScope &&
                                void 0 !== e.localScope[c] &&
                                (l = e.localScope[c]),
                              null === l &&
                                void 0 !== e.globalScope[c] &&
                                (l = e.globalScope[c]),
                              null === l)
                            )
                              return void r(
                                new Error(
                                  (0, f.H5)(
                                    t,
                                    'RUNTIME',
                                    'VARIABLENOTDECLARED',
                                  ),
                                ),
                              );
                            (0, u.a)(o) || (0, u.f)(o)
                              ? Z(e, t, o, { reject: r, resolve: n }, l)
                              : (0, u.b)(o)
                              ? (function (e, t, n, r, o, a) {
                                  try {
                                    if (
                                      (void 0 === a && (a = 'i'),
                                      0 === n.length)
                                    )
                                      return void r.resolve(u.v);
                                    H(
                                      e,
                                      t,
                                      n,
                                      o,
                                      0,
                                      a,
                                      (e) => {
                                        r.resolve(e);
                                      },
                                      (e) => {
                                        r.reject(e);
                                      },
                                      0,
                                    );
                                  } catch (e) {
                                    r.reject(e);
                                  }
                                })(e, t, o, { reject: r, resolve: n }, l)
                              : o instanceof a.Z || (0, u.k)(o)
                              ? (function (e, t, n, r, o) {
                                  try {
                                    Z(e, t, n.keys(), r, o, 'k');
                                  } catch (e) {
                                    r.reject(e);
                                  }
                                })(e, t, o, { reject: r, resolve: n }, l)
                              : (0, u.q)(o)
                              ? _(
                                  o.iterator(e.abortSignal),
                                  e,
                                  t,
                                  o,
                                  l,
                                  (e) => {
                                    n(e);
                                  },
                                  (e) => {
                                    r(e);
                                  },
                                  0,
                                )
                              : Z(e, t, [], { reject: r, resolve: n }, l);
                          } catch (e) {
                            r(e);
                          }
                        }, r);
                    } catch (e) {
                      r(e);
                    }
                  }, r);
                });
              })(e, t);
            case 'BreakStatement':
              return (0, w.DB)(u.m);
            case 'EmptyStatement':
              return (0, w.DB)(u.v);
            case 'ContinueStatement':
              return (0, w.DB)(u.n);
            case 'TemplateElement':
              return (function (e, t) {
                return (0, w.DB)(t.value ? t.value.cooked : '');
              })(0, t);
            case 'TemplateLiteral':
              return (function (e, t) {
                return (0, w.Ue)((n) => {
                  const r = [];
                  (0, h.Dt)(t.expressions, (t, n, o, a) =>
                    k(e, n).then((e) => {
                      r[o] = (0, u.d)(e);
                    }),
                  ).then(() => {
                    let e = '',
                      o = 0;
                    for (const n of t.quasis)
                      (e += n.value ? n.value.cooked : ''),
                        !1 === n.tail && ((e += r[o] ? r[o] : ''), o++);
                    n(e);
                  });
                });
              })(e, t);
            case 'Identifier':
              return z(e, t);
            case 'MemberExpression':
              return (function (e, t) {
                try {
                  return k(e, t.object).then((n) => {
                    try {
                      return null === n
                        ? (0, w.d1)(
                            new Error((0, f.H5)(t, 'RUNTIME', 'NOTFOUND')),
                          )
                        : !1 === t.computed
                        ? 'Identifier' === t.property.type
                          ? n instanceof a.Z || (0, u.k)(n)
                            ? (0, w.DB)(n.field(t.property.name))
                            : n instanceof I.Z
                            ? (0, w.DB)(q(n, t.property.name, 0, t))
                            : (0, w.d1)(
                                new Error(
                                  (0, f.H5)(t, 'RUNTIME', 'INVALIDTYPE'),
                                ),
                              )
                          : (0, w.d1)(
                              new Error((0, f.H5)(t, 'RUNTIME', 'INVALIDTYPE')),
                            )
                        : k(e, t.property).then((e) =>
                            (0, w.Ue)((r, o) => {
                              if (n instanceof a.Z || (0, u.k)(n))
                                (0, u.f)(e)
                                  ? r(n.field(e))
                                  : o(
                                      new Error(
                                        (0, f.H5)(t, 'RUNTIME', 'INVALIDTYPE'),
                                      ),
                                    );
                              else if (n instanceof I.Z)
                                (0, u.f)(e)
                                  ? r(q(n, e, 0, t))
                                  : o(
                                      new Error(
                                        (0, f.H5)(t, 'RUNTIME', 'INVALIDTYPE'),
                                      ),
                                    );
                              else if ((0, u.a)(n))
                                if (
                                  (0, u.j)(e) &&
                                  isFinite(e) &&
                                  Math.floor(e) === e
                                ) {
                                  if (
                                    (e < 0 && (e = n.length + e),
                                    e >= n.length || e < 0)
                                  )
                                    throw new Error(
                                      (0, f.H5)(t, 'RUNTIME', 'OUTOFBOUNDS'),
                                    );
                                  r(n[e]);
                                } else
                                  o(
                                    new Error(
                                      (0, f.H5)(t, 'RUNTIME', 'INVALIDTYPE'),
                                    ),
                                  );
                              else if ((0, u.b)(n))
                                if (
                                  (0, u.j)(e) &&
                                  isFinite(e) &&
                                  Math.floor(e) === e
                                ) {
                                  if (
                                    (e < 0 && (e = n.length() + e),
                                    e >= n.length() || e < 0)
                                  )
                                    throw new Error(
                                      (0, f.H5)(t, 'RUNTIME', 'OUTOFBOUNDS'),
                                    );
                                  r(n.get(e));
                                } else
                                  o(
                                    new Error(
                                      (0, f.H5)(t, 'RUNTIME', 'INVALIDTYPE'),
                                    ),
                                  );
                              else if ((0, u.f)(n))
                                if (
                                  (0, u.j)(e) &&
                                  isFinite(e) &&
                                  Math.floor(e) === e
                                ) {
                                  if (
                                    (e < 0 && (e = n.length + e),
                                    e >= n.length || e < 0)
                                  )
                                    throw new Error(
                                      (0, f.H5)(t, 'RUNTIME', 'OUTOFBOUNDS'),
                                    );
                                  r(n[e]);
                                } else
                                  o(
                                    new Error(
                                      (0, f.H5)(t, 'RUNTIME', 'INVALIDTYPE'),
                                    ),
                                  );
                              else
                                o(
                                  new Error(
                                    (0, f.H5)(t, 'RUNTIME', 'INVALIDTYPE'),
                                  ),
                                );
                            }),
                          );
                    } catch (e) {
                      return C(e);
                    }
                  });
                } catch (e) {
                  return C(e);
                }
              })(e, t);
            case 'Literal':
              return A(t.value);
            case 'CallExpression':
              return (function (e, t) {
                try {
                  if ('Identifier' !== t.callee.type)
                    return C((0, f.H5)(t, 'RUNTIME', 'ONLYNODESSUPPORTED'));
                  if (
                    null !== e.localScope &&
                    void 0 !== e.localScope[t.callee.name.toLowerCase()]
                  ) {
                    const n = e.localScope[t.callee.name.toLowerCase()];
                    return n.value instanceof u.N
                      ? n.value.fn(e, t)
                      : n.value instanceof l.Z
                      ? ne(e, t, n.value.definition)
                      : C((0, f.H5)(t, 'RUNTIME', 'NOTAFUNCTION'));
                  }
                  if (void 0 !== e.globalScope[t.callee.name.toLowerCase()]) {
                    const n = e.globalScope[t.callee.name.toLowerCase()];
                    return n.value instanceof u.N
                      ? n.value.fn(e, t)
                      : n.value instanceof l.Z
                      ? ne(e, t, n.value.definition)
                      : C((0, f.H5)(t, 'RUNTIME', 'NOTAFUNCTION'));
                  }
                  return C((0, f.H5)(t, 'RUNTIME', 'NOTFOUND'));
                } catch (e) {
                  return C(e);
                }
              })(e, t);
            case 'UnaryExpression':
              return (function (e, t) {
                try {
                  return k(e, t.argument).then((e) =>
                    (0, w.Ue)((n, r) => {
                      (0, u.i)(e) && '!' === t.operator
                        ? n(!e)
                        : '-' === t.operator
                        ? n(-1 * (0, u.t)(e))
                        : '+' === t.operator
                        ? n(1 * (0, u.t)(e))
                        : '~' === t.operator
                        ? n(~(0, u.t)(e))
                        : r(
                            new Error(
                              (0, f.H5)(
                                t,
                                'RUNTIME',
                                'NOTSUPPORTEDUNARYOPERATOR',
                              ),
                            ),
                          );
                    }),
                  );
                } catch (e) {
                  return C(e);
                }
              })(e, t);
            case 'BinaryExpression':
              return (function (e, t) {
                try {
                  return (0, w.$6)([k(e, t.left), k(e, t.right)]).then((e) =>
                    (0, w.Ue)((n, r) => {
                      const o = e[0],
                        a = e[1];
                      switch (t.operator) {
                        case '|':
                        case '<<':
                        case '>>':
                        case '>>>':
                        case '^':
                        case '&':
                          n((0, u.h)((0, u.t)(o), (0, u.t)(a), t.operator));
                        case '==':
                          n((0, u.e)(o, a));
                          break;
                        case '!=':
                          n(!(0, u.e)(o, a));
                          break;
                        case '<':
                        case '>':
                        case '<=':
                        case '>=':
                          n((0, u.g)(o, a, t.operator));
                          break;
                        case '+':
                          (0, u.f)(o) || (0, u.f)(a)
                            ? n((0, u.d)(o) + (0, u.d)(a))
                            : n((0, u.t)(o) + (0, u.t)(a));
                          break;
                        case '-':
                          n((0, u.t)(o) - (0, u.t)(a));
                          break;
                        case '*':
                          n((0, u.t)(o) * (0, u.t)(a));
                          break;
                        case '/':
                          n((0, u.t)(o) / (0, u.t)(a));
                          break;
                        case '%':
                          n((0, u.t)(o) % (0, u.t)(a));
                          break;
                        default:
                          r(
                            new Error(
                              (0, f.H5)(t, 'RUNTIME', 'OPERATORNOTRECOGNISED'),
                            ),
                          );
                      }
                    }),
                  );
                } catch (e) {
                  return C(e);
                }
              })(e, t);
            case 'LogicalExpression':
              return (function (e, t) {
                return (0, w.Ue)((n, r) => {
                  'AssignmentExpression' !== t.left.type &&
                  'UpdateExpression' !== t.left.type
                    ? 'AssignmentExpression' !== t.right.type &&
                      'UpdateExpression' !== t.right.type
                      ? k(e, t.left).then((o) => {
                          try {
                            if (!(0, u.i)(o))
                              throw new Error(
                                (0, f.H5)(t, 'RUNTIME', 'ONLYBOOLEAN'),
                              );
                            switch (t.operator) {
                              case '||':
                                !0 === o
                                  ? n(o)
                                  : k(e, t.right).then((e) => {
                                      try {
                                        if (!(0, u.i)(e))
                                          throw new Error(
                                            (0, f.H5)(
                                              t,
                                              'RUNTIME',
                                              'ONLYORORAND',
                                            ),
                                          );
                                        n(e);
                                      } catch (e) {
                                        r(e);
                                      }
                                    }, r);
                                break;
                              case '&&':
                                !1 === o
                                  ? n(o)
                                  : k(e, t.right).then((e) => {
                                      try {
                                        if (!(0, u.i)(e))
                                          throw new Error(
                                            (0, f.H5)(
                                              t,
                                              'RUNTIME',
                                              'ONLYORORAND',
                                            ),
                                          );
                                        n(e);
                                      } catch (e) {
                                        r(e);
                                      }
                                    }, r);
                                break;
                              default:
                                throw new Error(
                                  (0, f.H5)(t, 'RUNTIME', 'ONLYORORAND'),
                                );
                            }
                          } catch (e) {
                            r(e);
                          }
                        }, r)
                      : r(
                          new Error(
                            (0, f.H5)(
                              t.right,
                              'RUNTIME',
                              'CANNOT_USE_ASSIGNMENT_IN_CONDITION',
                            ),
                          ),
                        )
                    : r(
                        new Error(
                          (0, f.H5)(
                            t.left,
                            'RUNTIME',
                            'CANNOT_USE_ASSIGNMENT_IN_CONDITION',
                          ),
                        ),
                      );
                });
              })(e, t);
            case 'ArrayExpression':
              return (function (e, t) {
                try {
                  const n = [];
                  for (let r = 0; r < t.elements.length; r++)
                    n.push(k(e, t.elements[r]));
                  return (0, w.$6)(n).then((e) =>
                    (0, w.Ue)((n, r) => {
                      for (let n = 0; n < e.length; n++) {
                        if ((0, u.c)(e[n]))
                          return void r(
                            new Error(
                              (0, f.H5)(t, 'RUNTIME', 'FUNCTIONCONTEXTILLEGAL'),
                            ),
                          );
                        e[n] === u.v && (e[n] = null);
                      }
                      n(e);
                    }),
                  );
                } catch (e) {
                  return C(e);
                }
              })(e, t);
            case 'ObjectExpression':
              return (function (e, t) {
                try {
                  const n = [];
                  for (let r = 0; r < t.properties.length; r++)
                    n.push(k(e, t.properties[r]));
                  return (0, w.$6)(n).then((e) =>
                    (0, w.Ue)((t) => {
                      const n = {};
                      for (let t = 0; t < e.length; t++) {
                        const r = e[t];
                        if ((0, u.c)(r.value))
                          throw new Error('Illegal Argument');
                        if (!1 === (0, u.f)(r.key))
                          throw new Error('Illegal Argument');
                        r.value === u.v
                          ? (n[r.key.toString()] = null)
                          : (n[r.key.toString()] = r.value);
                      }
                      const r = new a.Z(n);
                      (r.immutable = !1), t(r);
                    }),
                  );
                } catch (e) {
                  return C(e);
                }
              })(e, t);
            case 'Property':
              return (function (e, t) {
                try {
                  return k(e, t.value).then((n) =>
                    (0, w.Ue)((r) => {
                      'Identifier' === t.key.type
                        ? r({ key: t.key.name, value: n })
                        : k(e, t.key).then((e) => {
                            r({ key: e, value: n });
                          });
                    }),
                  );
                } catch (e) {
                  return (0, w.d1)(e);
                }
              })(e, t);
            default:
              return C((0, f.H5)(t, 'RUNTIME', 'UNREOGNISED'));
          }
        } catch (e) {
          return C(e);
        }
      }
      function P(e, t, n) {
        try {
          return k(e, t.body).then((r) => {
            try {
              return (
                (n.lastAction = r),
                n.lastAction === u.m || n.lastAction instanceof u.R
                  ? ((n.testResult = !1), (0, w.DB)(n))
                  : null !== t.update
                  ? k(e, t.update).then(() => (0, w.DB)(n))
                  : (0, w.DB)(n)
              );
            } catch (e) {
              return (0, w.d1)(e);
            }
          });
        } catch (e) {
          return (0, w.d1)(e);
        }
      }
      function L(e, t, n, r, o, a) {
        try {
          (function (e, t, n) {
            try {
              return null !== t.test
                ? k(e, t.test).then((r) => {
                    try {
                      return !0 === e.abortSignal.aborted
                        ? (0, w.d1)(new Error('Cancelled'))
                        : ((n.testResult = r),
                          !1 === n.testResult
                            ? (0, w.DB)(n)
                            : !0 !== n.testResult
                            ? (0, w.d1)(
                                new Error(
                                  (0, f.H5)(
                                    t,
                                    'RUNTIME',
                                    'CANNOT_USE_NONBOOLEAN_IN_CONDITION',
                                  ),
                                ),
                              )
                            : P(e, t, n));
                    } catch (e) {
                      return (0, w.d1)(e);
                    }
                  })
                : P(e, t, n);
            } catch (e) {
              return (0, w.d1)(e);
            }
          })(e, t, n).then(
            () => {
              try {
                !0 === n.testResult
                  ? ++a > D
                    ? ((a = 0),
                      setTimeout(() => {
                        L(e, t, n, r, o, a);
                      }, 0))
                    : L(e, t, n, r, o, a)
                  : n.lastAction instanceof u.R
                  ? r(n.lastAction)
                  : r(u.v);
              } catch (e) {
                o(e);
              }
            },
            (e) => {
              o(e);
            },
          );
        } catch (e) {
          o(e);
        }
      }
      function B(e, t, n, r, o, a, c, l, i, s) {
        try {
          if (r <= a) return void l(u.v);
          (o.value = 'k' === c ? n[a] : a),
            k(e, t.body).then(
              (f) => {
                try {
                  f instanceof u.R
                    ? l(f)
                    : f === u.m
                    ? l(u.v)
                    : ++s > D
                    ? ((s = 0),
                      setTimeout(() => {
                        B(e, t, n, r, o, a + 1, c, l, i, s);
                      }, 0))
                    : B(e, t, n, r, o, a + 1, c, l, i, s);
                } catch (e) {
                  i(e);
                }
              },
              (e) => {
                i(e);
              },
            );
        } catch (e) {
          i(e);
        }
      }
      function H(e, t, n, r, o, a, c, l, i) {
        try {
          if (n.length() <= o) return void c(u.v);
          (r.value = 'k' === a ? n.get(o) : o),
            k(e, t.body).then(
              (s) => {
                s instanceof u.R
                  ? c(s)
                  : s === u.m
                  ? c(u.v)
                  : ++i > D
                  ? ((i = 0),
                    setTimeout(() => {
                      H(e, t, n, r, o + 1, a, c, l, i);
                    }, 0))
                  : H(e, t, n, r, o + 1, a, c, l, i);
              },
              (e) => {
                l(e);
              },
            );
        } catch (e) {
          l(e);
        }
      }
      function Z(e, t, n, r, o, a) {
        try {
          if ((void 0 === a && (a = 'i'), 0 === n.length))
            return void r.resolve(u.v);
          B(
            e,
            t,
            n,
            n.length,
            o,
            0,
            a,
            (e) => {
              r.resolve(e);
            },
            (e) => {
              r.reject(e);
            },
            0,
          );
        } catch (e) {
          r.reject(e);
        }
      }
      function _(e, t, n, r, o, a, l, i) {
        try {
          e.next().then(
            (s) => {
              try {
                if (null === s) a(u.v);
                else {
                  const f = c.Z.createFromGraphicLikeObject(
                    s.geometry,
                    s.attributes,
                    r,
                  );
                  (f._underlyingGraphic = s),
                    (o.value = f),
                    k(t, n.body).then(
                      (c) => {
                        try {
                          c === u.m
                            ? a(u.v)
                            : c instanceof u.R
                            ? a(c)
                            : ++i > D
                            ? ((i = 0),
                              setTimeout(() => {
                                _(e, t, n, r, o, a, l, i);
                              }, 0))
                            : _(e, t, n, r, o, a, l, i);
                        } catch (e) {
                          l(e);
                        }
                      },
                      (e) => {
                        l(e);
                      },
                    );
                }
              } catch (e) {
                l(e);
              }
            },
            (e) => {
              l(e);
            },
          );
        } catch (e) {
          l(e);
        }
      }
      function j(e, t, n, r) {
        switch (t) {
          case '=':
            return e === u.v ? null : e;
          case '/=':
            return (0, u.t)(n) / (0, u.t)(e);
          case '*=':
            return (0, u.t)(n) * (0, u.t)(e);
          case '-=':
            return (0, u.t)(n) - (0, u.t)(e);
          case '+=':
            return (0, u.f)(n) || (0, u.f)(e)
              ? (0, u.d)(n) + (0, u.d)(e)
              : (0, u.t)(n) + (0, u.t)(e);
          case '%=':
            return (0, u.t)(n) % (0, u.t)(e);
          default:
            throw new Error((0, f.H5)(r, 'RUNTIME', 'OPERATORNOTRECOGNISED'));
        }
      }
      function V(e, t, n) {
        try {
          return n >= t.body.length
            ? (0, w.DB)(u.v)
            : (0, w.Ue)((r, o) => {
                k(e, t.body[n]).then((a) => {
                  try {
                    a instanceof u.R ||
                    a === u.m ||
                    a === u.n ||
                    n === t.body.length - 1
                      ? r(a)
                      : V(e, t, n + 1).then(r, o);
                  } catch (e) {
                    o(e);
                  }
                }, o);
              });
        } catch (e) {
          return C(e);
        }
      }
      function Y(e, t, n) {
        return (0, w.Ue)((r, o) => {
          n >= t.declarations.length
            ? r(u.v)
            : k(e, t.declarations[n]).then(() => {
                n === t.declarations.length - 1
                  ? r(u.v)
                  : Y(e, t, n + 1).then(() => {
                      r(u.v);
                    }, o);
              }, o);
        });
      }
      let G = 0;
      function q(e, t, n, r) {
        let o;
        switch ((t = t.toLowerCase())) {
          case 'hasz': {
            const t = e.hasZ;
            return void 0 !== t && t;
          }
          case 'hasm': {
            const t = e.hasM;
            return void 0 !== t && t;
          }
          case 'spatialreference': {
            let t = e.spatialReference._arcadeCacheId;
            if (void 0 === t) {
              let n = !0;
              Object.freeze && Object.isFrozen(e.spatialReference) && (n = !1),
                n && (G++, (e.spatialReference._arcadeCacheId = G), (t = G));
            }
            const n = new a.Z({
              wkt: e.spatialReference.wkt,
              wkid: e.spatialReference.wkid,
            });
            return (
              void 0 !== t && (n._arcadeCacheId = 'SPREF' + t.toString()), n
            );
          }
        }
        switch (e.type) {
          case 'extent':
            switch (t) {
              case 'xmin':
              case 'xmax':
              case 'ymin':
              case 'ymax':
              case 'zmin':
              case 'zmax':
              case 'mmin':
              case 'mmax': {
                const n = e[t];
                return void 0 !== n ? n : null;
              }
              case 'type':
                return 'Extent';
            }
            break;
          case 'polygon':
            switch (t) {
              case 'rings':
                return (
                  (o = e.cache._arcadeCacheId),
                  void 0 === o && (G++, (o = G), (e.cache._arcadeCacheId = o)),
                  new i.Z(
                    e.rings,
                    e.spatialReference,
                    !0 === e.hasZ,
                    !0 === e.hasM,
                    o,
                  )
                );
              case 'type':
                return 'Polygon';
            }
            break;
          case 'point':
            switch (t) {
              case 'x':
              case 'y':
              case 'z':
              case 'm':
                return void 0 !== e[t] ? e[t] : null;
              case 'type':
                return 'Point';
            }
            break;
          case 'polyline':
            switch (t) {
              case 'paths':
                return (
                  (o = e.cache._arcadeCacheId),
                  void 0 === o && (G++, (o = G), (e.cache._arcadeCacheId = o)),
                  new i.Z(
                    e.paths,
                    e.spatialReference,
                    !0 === e.hasZ,
                    !0 === e.hasM,
                    o,
                  )
                );
              case 'type':
                return 'Polyline';
            }
            break;
          case 'multipoint':
            switch (t) {
              case 'points':
                return (
                  (o = e.cache._arcadeCacheId),
                  void 0 === o && (G++, (o = G), (e.cache._arcadeCacheId = o)),
                  new s.Z(
                    e.points,
                    e.spatialReference,
                    !0 === e.hasZ,
                    !0 === e.hasM,
                    o,
                    1,
                  )
                );
              case 'type':
                return 'Multipoint';
            }
        }
        throw new Error((0, f.H5)(r, 'RUNTIME', 'PROPERTYNOTFOUND'));
      }
      function z(e, t) {
        return (0, w.Ue)((n, r) => {
          const o = t.name.toLowerCase();
          if (null === e.localScope || void 0 === e.localScope[o])
            if (void 0 === e.globalScope[o])
              r(new Error((0, f.H5)(t, 'RUNTIME', 'VARIABLENOTFOUND')));
            else {
              const t = e.globalScope[o];
              !0 === t.valueset
                ? n(t.value)
                : null !== t.d
                ? t.d.then(n, r)
                : ((t.d = k(e, t.node)),
                  t.d.then((e) => {
                    try {
                      (t.value = e), (t.valueset = !0), n(e);
                    } catch (e) {
                      r(e);
                    }
                  }, r));
            }
          else {
            const t = e.localScope[o];
            !0 === t.valueset
              ? n(t.value)
              : null !== t.d
              ? t.d.then(n, r)
              : ((t.d = k(e, t.node)),
                t.d.then((e) => {
                  try {
                    (t.value = e), (t.valueset = !0), n(e);
                  } catch (e) {
                    r(e);
                  }
                }, r));
          }
        });
      }
      const $ = {};
      function W(e) {
        return null === e
          ? ''
          : (0, u.a)(e) || (0, u.b)(e)
          ? 'Array'
          : (0, u.o)(e)
          ? 'Date'
          : (0, u.f)(e)
          ? 'String'
          : (0, u.i)(e)
          ? 'Boolean'
          : (0, u.j)(e)
          ? 'Number'
          : e instanceof o.Z
          ? 'Attachment'
          : e instanceof r.Z
          ? 'Portal'
          : e instanceof a.Z
          ? 'Dictionary'
          : (0, u.k)(e)
          ? 'Feature'
          : e instanceof U.Z
          ? 'Point'
          : e instanceof R.Z
          ? 'Polygon'
          : e instanceof S.Z
          ? 'Polyline'
          : e instanceof b.Z
          ? 'Multipoint'
          : e instanceof N.Z
          ? 'Extent'
          : (0, u.c)(e)
          ? 'Function'
          : (0, u.q)(e)
          ? 'FeatureSet'
          : (0, u.r)(e)
          ? 'FeatureSetCollection'
          : e === u.v
          ? ''
          : 'number' == typeof e && isNaN(e)
          ? 'Number'
          : 'Unrecognised Type';
      }
      function K(e, t, n, r) {
        return (0, w.Ue)((o, a) => {
          k(e, t.arguments[n]).then((c) => {
            try {
              if ((0, u.e)(c, r))
                return void k(e, t.arguments[n + 1]).then(o, a);
              {
                const c = t.arguments.length - n;
                return 1 === c
                  ? void k(e, t.arguments[n]).then(o, a)
                  : (2 === c && o(null),
                    3 === c
                      ? void k(e, t.arguments[n + 2]).then(o, a)
                      : void K(e, t, n + 2, r).then(o, a));
              }
            } catch (e) {
              a(e);
            }
          }, a);
        });
      }
      function X(e, t, n, r) {
        return (0, w.Ue)((o, a) => {
          !0 === r
            ? k(e, t.arguments[n + 1]).then(o, a)
            : 3 == t.arguments.length - n
            ? k(e, t.arguments[n + 2]).then(o, a)
            : k(e, t.arguments[n + 2]).then((r) => {
                try {
                  if (!1 === (0, u.i)(r))
                    return void a(
                      new Error('WHEN needs boolean test conditions'),
                    );
                  X(e, t, n + 2, r).then(o, a);
                } catch (e) {
                  a(e);
                }
              });
        });
      }
      function J(e, t) {
        try {
          const n = e.length,
            r = Math.floor(n / 2);
          return 0 === n
            ? (0, w.DB)([])
            : 1 === n
            ? (0, w.DB)([e[0]])
            : (0, w.Ue)((o, a) => {
                const c = [J(e.slice(0, r), t), J(e.slice(r, n), t)];
                (0, w.$6)(c).then((e) => {
                  try {
                    Q(e[0], e[1], t, []).then(o, a);
                  } catch (e) {
                    a(e);
                  }
                }, a);
              });
        } catch (e) {
          return C(e);
        }
      }
      function Q(e, t, n, r) {
        return (0, w.Ue)((o, a) => {
          const c = r;
          e.length > 0 || t.length > 0
            ? e.length > 0 && t.length > 0
              ? n(e[0], t[0]).then((l) => {
                  try {
                    isNaN(l) && (l = 1),
                      l <= 0
                        ? (c.push(e[0]), (e = e.slice(1)))
                        : (c.push(t[0]), (t = t.slice(1))),
                      Q(e, t, n, r).then(o, a);
                  } catch (e) {
                    a(e);
                  }
                }, a)
              : e.length > 0
              ? (c.push(e[0]), Q((e = e.slice(1)), t, n, r).then(o, a))
              : t.length > 0 &&
                (c.push(t[0]), (t = t.slice(1)), Q(e, t, n, r).then(o, a))
            : o(r);
        });
      }
      function ee(e, t) {
        const n = e.length,
          r = Math.floor(n / 2);
        return (
          t ||
            (t = function (e, t) {
              return e < t ? -1 : e === t ? 0 : 1;
            }),
          0 === n
            ? []
            : 1 === n
            ? [e[0]]
            : (function (e, t, n) {
                const r = [];
                for (; e.length > 0 || t.length > 0; )
                  if (e.length > 0 && t.length > 0) {
                    let o = n(e[0], t[0]);
                    isNaN(o) && (o = 1),
                      o <= 0
                        ? (r.push(e[0]), (e = e.slice(1)))
                        : (r.push(t[0]), (t = t.slice(1)));
                  } else
                    e.length > 0
                      ? (r.push(e[0]), (e = e.slice(1)))
                      : t.length > 0 && (r.push(t[0]), (t = t.slice(1)));
                return r;
              })(ee(e.slice(0, r), t), ee(e.slice(r, n), t), t)
        );
      }
      function te(e, t, n) {
        try {
          const r = e.body;
          if (n.length !== e.params.length)
            return C(new Error('Invalid Parameter calls to function.'));
          for (let r = 0; r < n.length; r++) {
            const o = e.params[r];
            'Identifier' === o.type &&
              (t.localScope[o.name.toLowerCase()] = {
                d: null,
                value: n[r],
                valueset: !0,
                node: null,
              });
          }
          return k(t, r).then((e) =>
            (0, w.Ue)((t, n) => {
              e instanceof u.R
                ? t(e.value)
                : e !== u.m
                ? e !== u.n
                  ? t(e instanceof u.I ? e.value : e)
                  : n(new Error('Cannot Continue from a Function'))
                : n(new Error('Cannot Break from a Function'));
            }),
          );
        } catch (e) {
          return (0, w.d1)(e);
        }
      }
      function ne(e, t, n) {
        return x(e, t, function (t, r, o) {
          const a = {
            spatialReference: e.spatialReference,
            services: e.services,
            console: e.console,
            lrucache: e.lrucache,
            interceptor: e.interceptor,
            localScope: {},
            abortSignal: e.abortSignal,
            globalScope: e.globalScope,
            depthCounter: e.depthCounter + 1,
          };
          if (a.depthCounter > 64)
            throw new Error('Exceeded maximum function depth');
          return te(n, a, o);
        });
      }
      function re(e) {
        return function () {
          const t = {
            abortSignal: e.context.abortSignal,
            spatialReference: e.context.spatialReference,
            console: e.context.console,
            lrucache: e.context.lrucache,
            interceptor: e.context.interceptor,
            services: e.context.services,
            localScope: {},
            globalScope: e.context.globalScope,
            depthCounter: e.context.depthCounter + 1,
          };
          if (t.depthCounter > 64)
            throw new Error('Exceeded maximum function depth');
          return te(e.definition, t, arguments);
        };
      }
      (0, p.r)($, M),
        (0, y.r)($, M),
        (0, E.r)($, M),
        (0, v.r)($, M),
        (0, m.r)($, M),
        (0, g.registerFunctions)({
          functions: $,
          compiled: !1,
          signatures: null,
          failDefferred: null,
          evaluateIdentifier: null,
          arcadeCustomFunctionHandler: null,
          mode: 'async',
          standardFunction: M,
          standardFunctionAsync: x,
        }),
        ($.typeof = function (e, t) {
          return M(e, t, function (e, t, n) {
            (0, u.p)(n, 1, 1);
            const r = W(n[0]);
            if ('Unrecognised Type' === r) throw new Error('Unrecognised Type');
            return r;
          });
        }),
        ($.iif = function (e, t) {
          return (0, w.Ue)((n, r) => {
            (0, u.p)(null === t.arguments ? [] : t.arguments, 3, 3),
              k(e, t.arguments[0]).then((o) => {
                try {
                  if (!1 === (0, u.i)(o))
                    return void r(
                      new Error(
                        'IF Function must have a boolean test condition',
                      ),
                    );
                  (0, w.$6)([k(e, t.arguments[1]), k(e, t.arguments[2])]).then(
                    (e) => {
                      n(o ? e[0] : e[1]);
                    },
                    r,
                  );
                } catch (e) {
                  r(e);
                }
              }, r);
          });
        }),
        ($.decode = function (e, t) {
          return (0, w.Ue)((n, r) => {
            t.arguments.length < 2
              ? r(new Error('Missing Parameters'))
              : 2 !== t.arguments.length
              ? (t.arguments.length - 1) % 2 != 0
                ? k(e, t.arguments[0]).then((o) => {
                    try {
                      K(e, t, 1, o).then(n, r);
                    } catch (e) {
                      r(e);
                    }
                  }, r)
                : r(new Error('Must have a default value result.'))
              : k(e, t.arguments[1]).then(n, r);
          });
        }),
        ($.when = function (e, t) {
          try {
            return t.arguments.length < 3
              ? C('Missing Parameters')
              : t.arguments.length % 2 == 0
              ? C('Must have a default value result.')
              : k(e, t.arguments[0]).then((n) =>
                  (0, w.Ue)((r, o) => {
                    !1 !== (0, u.i)(n)
                      ? X(e, t, 0, n).then(r, o)
                      : o(new Error('WHEN needs boolean test conditions'));
                  }),
                );
          } catch (e) {
            return C(e);
          }
        }),
        ($.sort = function (e, t) {
          return x(e, t, function (e, t, n) {
            (0, u.p)(n, 1, 2);
            let r = n[0];
            if (((0, u.b)(r) && (r = r.toArray()), !1 === (0, u.a)(r)))
              return C(Error('Illegal Argument'));
            if (n.length > 1)
              return !1 === (0, u.c)(n[1])
                ? C(Error('Illegal Argument'))
                : J(r, re(n[1]));
            {
              let e = r;
              if (0 === e.length) return (0, w.DB)([]);
              const t = {};
              for (let n = 0; n < e.length; n++) {
                const r = W(e[n]);
                '' !== r && (t[r] = !0);
              }
              if (
                !0 === t.Array ||
                !0 === t.Dictionary ||
                !0 === t.Feature ||
                !0 === t.Point ||
                !0 === t.Polygon ||
                !0 === t.Polyline ||
                !0 === t.Multipoint ||
                !0 === t.Extent ||
                !0 === t.Function
              )
                return (0, w.DB)(e.slice(0));
              let n = 0,
                o = '';
              for (const e in t) n++, (o = e);
              return (
                n > 1 || 'String' === o
                  ? (e = ee(e, function (e, t) {
                      if (null == e || e === u.v)
                        return null == t || t === u.v ? 0 : 1;
                      if (null == t || t === u.v) return -1;
                      const n = (0, u.d)(e),
                        r = (0, u.d)(t);
                      return n < r ? -1 : n === r ? 0 : 1;
                    }))
                  : 'Number' === o
                  ? (e = ee(e, function (e, t) {
                      return e - t;
                    }))
                  : 'Boolean' === o
                  ? (e = ee(e, function (e, t) {
                      return e === t ? 0 : t ? -1 : 1;
                    }))
                  : 'Date' === o &&
                    (e = ee(e, function (e, t) {
                      return t - e;
                    })),
                (0, w.DB)(e)
              );
            }
          });
        });
      const oe = {
        failDefferred: C,
        resolveDeffered: A,
        fixSpatialReference: u.s,
        parseArguments: F,
        standardFunction: M,
        standardFunctionAsync: x,
        evaluateIdentifier: z,
        arcadeCustomFunction: re,
      };
      for (const e in $)
        $[e] = { value: new u.N($[e]), valueset: !0, node: null };
      const ae = function () {};
      function ce(e) {
        console.log(e);
      }
      ((ae.prototype = $).infinity = {
        value: Number.POSITIVE_INFINITY,
        valueset: !0,
        node: null,
      }),
        (ae.prototype.pi = { value: Math.PI, valueset: !0, node: null });
      const le = oe;
      function ie(e) {
        const t = {
          mode: 'async',
          compiled: !1,
          functions: {},
          signatures: [],
          standardFunction: M,
          standardFunctionAsync: x,
          failDefferred: C,
          evaluateIdentifier: z,
          arcadeCustomFunctionHandler: re,
        };
        for (let n = 0; n < e.length; n++) e[n].registerFunctions(t);
        for (const e in t.functions)
          ($[e] = { value: new u.N(t.functions[e]), valueset: !0, node: null }),
            (ae.prototype[e] = $[e]);
        for (let e = 0; e < t.signatures.length; e++)
          (0, f.gW)(t.signatures[e], 'async');
      }
      function se(e, t) {
        let n = t.spatialReference;
        null == n && (n = new T.Z({ wkid: 102100 }));
        const r = (function (e, t) {
          const n = new ae();
          null == e && (e = {}), null == t && (t = {});
          const r = new a.Z({
            newline: '\n',
            tab: '\t',
            singlequote: "'",
            doublequote: '"',
            forwardslash: '/',
            backwardslash: '\\',
          });
          (r.immutable = !1),
            (n.textformatting = { value: r, valueset: !0, node: null });
          for (const e in t)
            n[e] = {
              value: new u.N(t[e]),
              native: !0,
              valueset: !0,
              node: null,
            };
          for (const t in e)
            e[t] && 'esri.Graphic' === e[t].declaredClass
              ? (n[t] = {
                  value: c.Z.createFromGraphic(e[t]),
                  valueset: !0,
                  node: null,
                })
              : (n[t] = { value: e[t], valueset: !0, node: null });
          return n;
        })(t.vars, t.customfunctions);
        return k(
          {
            spatialReference: n,
            services: t.services,
            abortSignal:
              void 0 === t.abortSignal || null === t.abortSignal
                ? { aborted: !1 }
                : t.abortSignal,
            globalScope: r,
            console: t.console ? t.console : ce,
            lrucache: t.lrucache,
            interceptor: t.interceptor,
            localScope: null,
            depthCounter: 1,
          },
          e.body[0].body,
        ).then((e) =>
          (0, w.Ue)((t, n) => {
            e instanceof u.R && (e = e.value),
              e instanceof u.I && (e = e.value),
              e === u.v && (e = null),
              e !== u.m
                ? e !== u.n
                  ? e instanceof u.N || e instanceof l.Z
                    ? n(new Error('Cannot return FUNCTION'))
                    : t(e)
                  : n(new Error('Cannot return CONTINUE'))
                : n(new Error('Cannot return BREAK'));
          }),
        );
      }
      function ue(e, t) {
        return (0, f.mb)(e);
      }
      function fe(e, t) {
        return (0, f.FS)(e, t, 'full');
      }
      function he(e, t) {
        return (0, f.bV)(e, t);
      }
      function de(e, t) {
        return (0, f.w8)(e, t);
      }
      function pe(e) {
        return (0, f.Vf)(e);
      }
      ie([d.A]);
    },
  },
]);
