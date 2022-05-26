'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [1534],
  {
    5732: (e, t, r) => {
      r.d(t, { a: () => s, c: () => n, g: () => a });
      var n =
        'undefined' != typeof globalThis
          ? globalThis
          : 'undefined' != typeof window
          ? window
          : 'undefined' != typeof global
          ? global
          : 'undefined' != typeof self
          ? self
          : {};
      function a(e) {
        return e &&
          e.__esModule &&
          Object.prototype.hasOwnProperty.call(e, 'default')
          ? e.default
          : e;
      }
      function s(e) {
        throw new Error(
          'Could not dynamically require "' +
            e +
            '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.',
        );
      }
    },
    41534: (e, t, r) => {
      r.r(t),
        r.d(t, { WhereClause: () => A, defaultAttributeAdapter: () => H });
      var n = r(80442);
      function a(e, t) {
        const r = s[e.toLowerCase()];
        return null != r && t >= r.minParams && t <= r.maxParams;
      }
      const s = {
        min: {
          minParams: 1,
          maxParams: 1,
          evaluate: (e) => (null == e[0] ? null : Math.min.apply(Math, e[0])),
        },
        max: {
          minParams: 1,
          maxParams: 1,
          evaluate: (e) => (null == e[0] ? null : Math.max.apply(Math, e[0])),
        },
        avg: {
          minParams: 1,
          maxParams: 1,
          evaluate: (e) => (null == e[0] ? null : u(e[0])),
        },
        sum: {
          minParams: 1,
          maxParams: 1,
          evaluate: (e) =>
            null == e[0]
              ? null
              : (function (e) {
                  let t = 0;
                  for (let r = 0; r < e.length; r++) t += e[r];
                  return t;
                })(e[0]),
        },
        stddev: {
          minParams: 1,
          maxParams: 1,
          evaluate: (e) => (null == e[0] ? null : Math.sqrt(i(e[0]))),
        },
        count: {
          minParams: 1,
          maxParams: 1,
          evaluate: (e) => (null == e[0] ? null : e[0].length),
        },
        var: {
          minParams: 1,
          maxParams: 1,
          evaluate: (e) => (null == e[0] ? null : i(e[0])),
        },
      };
      function u(e) {
        let t = 0;
        for (let r = 0; r < e.length; r++) t += e[r];
        return t / e.length;
      }
      function i(e) {
        const t = u(e),
          r = e.length;
        let n = 0;
        for (const r of e) n += (r - t) ** 2;
        return r > 1 ? n / (r - 1) : 0;
      }
      var o = r(19153);
      class l {
        constructor() {
          (this.op = '+'),
            (this.day = 0),
            (this.second = 0),
            (this.hour = 0),
            (this.month = 0),
            (this.year = 0),
            (this.minute = 0);
        }
        static _fixDefaults(e) {
          if (null !== e.precision || null !== e.secondary)
            throw new Error(
              'Primary and Secondary SqlInterval qualifiers not supported',
            );
        }
        static createFromMilliseconds(e) {
          const t = new l();
          return (t.second = e / 1e3), t;
        }
        static createFromValueAndQualifer(e, t, r) {
          let n = null;
          const a = new l();
          if (((a.op = '-' === r ? '-' : '+'), 'interval-period' === t.type)) {
            l._fixDefaults(t);
            const r = new RegExp('^[0-9]{1,}$');
            if ('year' === t.period || 'month' === t.period)
              throw new Error('Year-Month Intervals not supported');
            if (!r.test(e)) throw new Error('Illegal Interval');
            a[t.period] = parseFloat(e);
          } else {
            if (
              (l._fixDefaults(t.start),
              l._fixDefaults(t.end),
              'year' === t.start.period || 'month' === t.start.period)
            )
              throw new Error('Year-Month Intervals not supported');
            if ('year' === t.end.period || 'month' === t.end.period)
              throw new Error('Year-Month Intervals not supported');
            switch (t.start.period) {
              case 'day':
                switch (t.end.period) {
                  case 'hour':
                    if (((n = new RegExp('^[0-9]{1,} [0-9]{1,}$')), !n.test(e)))
                      throw new Error('Illegal Interval');
                    (a[t.start.period] = parseFloat(e.split(' ')[0])),
                      (a[t.end.period] = parseFloat(e.split(' ')[1]));
                    break;
                  case 'minute':
                    if (
                      ((n = new RegExp('^[0-9]{1,} [0-9]{1,2}:[0-9]{1,}$')),
                      !n.test(e))
                    )
                      throw new Error('Illegal Interval');
                    {
                      a[t.start.period] = parseFloat(e.split(' ')[0]);
                      const r = e.split(' ')[1].split(':');
                      (a.hour = parseFloat(r[0])),
                        (a.minute = parseFloat(r[1]));
                    }
                    break;
                  case 'second':
                    if (
                      ((n = new RegExp(
                        '^[0-9]{1,} [0-9]{1,2}:[0-9]{1,2}:[0-9]{1,}([.]{1}[0-9]{1,}){0,1}$',
                      )),
                      !n.test(e))
                    )
                      throw new Error('Illegal Interval');
                    {
                      a[t.start.period] = parseFloat(e.split(' ')[0]);
                      const r = e.split(' ')[1].split(':');
                      (a.hour = parseFloat(r[0])),
                        (a.minute = parseFloat(r[1])),
                        (a.second = parseFloat(r[2]));
                    }
                    break;
                  default:
                    throw 'Invalid Interval.';
                }
                break;
              case 'hour':
                switch (t.end.period) {
                  case 'minute':
                    if (((n = new RegExp('^[0-9]{1,}:[0-9]{1,}$')), !n.test(e)))
                      throw new Error('Illegal Interval');
                    (a.hour = parseFloat(e.split(':')[0])),
                      (a.minute = parseFloat(e.split(':')[1]));
                    break;
                  case 'second':
                    if (
                      ((n = new RegExp(
                        '^[0-9]{1,}:[0-9]{1,2}:[0-9]{1,}([.]{1}[0-9]{1,}){0,1}$',
                      )),
                      !n.test(e))
                    )
                      throw new Error('Illegal Interval');
                    {
                      const t = e.split(':');
                      (a.hour = parseFloat(t[0])),
                        (a.minute = parseFloat(t[1])),
                        (a.second = parseFloat(t[2]));
                    }
                    break;
                  default:
                    throw 'Invalid Interval.';
                }
                break;
              case 'minute':
                if ('second' !== t.end.period) throw 'Invalid Interval.';
                if (
                  ((n = new RegExp(
                    '^[0-9]{1,}:[0-9]{1,}([.]{1}[0-9]{1,}){0,1}$',
                  )),
                  !n.test(e))
                )
                  throw new Error('Illegal Interval');
                {
                  const t = e.split(':');
                  (a.minute = parseFloat(t[0])), (a.second = parseFloat(t[1]));
                }
                break;
              default:
                throw 'Invalid Interval.';
            }
          }
          return a;
        }
        valueInMilliseconds() {
          return (
            ('-' === this.op ? -1 : 1) *
            (1e3 * this.second +
              60 * this.minute * 1e3 +
              60 * this.hour * 60 * 1e3 +
              24 * this.day * 60 * 60 * 1e3 +
              this.month * (365 / 12) * 24 * 60 * 60 * 1e3 +
              365 * this.year * 24 * 60 * 60 * 1e3)
          );
        }
      }
      function c(e, t) {
        const r = f[e.toLowerCase()];
        if (null == r) throw new Error('Function Not Recognised');
        if (t.length < r.minParams || t.length > r.maxParams)
          throw new Error(
            `Invalid Parameter count for call to ${e.toUpperCase()}`,
          );
        return r.evaluate(t);
      }
      function p(e, t) {
        const r = f[e.toLowerCase()];
        return null != r && t >= r.minParams && t <= r.maxParams;
      }
      const f = {
        extract: {
          minParams: 2,
          maxParams: 2,
          evaluate: ([e, t]) => {
            if (null == t) return null;
            if (t instanceof Date)
              switch (e.toUpperCase()) {
                case 'SECOND':
                  return t.getSeconds();
                case 'MINUTE':
                  return t.getMinutes();
                case 'HOUR':
                  return t.getHours();
                case 'DAY':
                  return t.getDate();
                case 'MONTH':
                  return t.getMonth() + 1;
                case 'YEAR':
                  return t.getFullYear();
              }
            throw new Error('Invalid Parameter for call to EXTRACT');
          },
        },
        substring: {
          minParams: 2,
          maxParams: 3,
          evaluate: (e) => {
            if (2 === e.length) {
              const [t, r] = e;
              return null == t || null == r
                ? null
                : t.toString().substring(r - 1);
            }
            if (3 === e.length) {
              const [t, r, n] = e;
              return null == t || null == r || null == n
                ? null
                : n <= 0
                ? ''
                : t.toString().substring(r - 1, r + n - 1);
            }
          },
        },
        position: {
          minParams: 2,
          maxParams: 2,
          evaluate: ([e, t]) =>
            null == e || null == t ? null : t.indexOf(e) + 1,
        },
        trim: {
          minParams: 2,
          maxParams: 3,
          evaluate: (e) => {
            const t = 3 === e.length,
              r = t ? e[1] : ' ',
              n = t ? e[2] : e[1];
            if (null == r || null == n) return null;
            const a = `(${(0, o.Qs)(r)})`;
            switch (e[0]) {
              case 'BOTH':
                return n.replace(new RegExp(`^${a}*|${a}*$`, 'g'), '');
              case 'LEADING':
                return n.replace(new RegExp(`^${a}*`, 'g'), '');
              case 'TRAILING':
                return n.replace(new RegExp(`${a}*$`, 'g'), '');
            }
            throw new Error('Invalid Parameter for call to TRIM');
          },
        },
        abs: {
          minParams: 1,
          maxParams: 1,
          evaluate: (e) => (null == e[0] ? null : Math.abs(e[0])),
        },
        ceiling: {
          minParams: 1,
          maxParams: 1,
          evaluate: (e) => (null == e[0] ? null : Math.ceil(e[0])),
        },
        floor: {
          minParams: 1,
          maxParams: 1,
          evaluate: (e) => (null == e[0] ? null : Math.floor(e[0])),
        },
        log: {
          minParams: 1,
          maxParams: 1,
          evaluate: (e) => (null == e[0] ? null : Math.log(e[0])),
        },
        log10: {
          minParams: 1,
          maxParams: 1,
          evaluate: (e) => (null == e[0] ? null : Math.log(e[0]) * Math.LOG10E),
        },
        sin: {
          minParams: 1,
          maxParams: 1,
          evaluate: (e) => (null == e[0] ? null : Math.sin(e[0])),
        },
        cos: {
          minParams: 1,
          maxParams: 1,
          evaluate: (e) => (null == e[0] ? null : Math.cos(e[0])),
        },
        tan: {
          minParams: 1,
          maxParams: 1,
          evaluate: (e) => (null == e[0] ? null : Math.tan(e[0])),
        },
        asin: {
          minParams: 1,
          maxParams: 1,
          evaluate: (e) => (null == e[0] ? null : Math.asin(e[0])),
        },
        acos: {
          minParams: 1,
          maxParams: 1,
          evaluate: (e) => (null == e[0] ? null : Math.acos(e[0])),
        },
        atan: {
          minParams: 1,
          maxParams: 1,
          evaluate: (e) => (null == e[0] ? null : Math.atan(e[0])),
        },
        sign: {
          minParams: 1,
          maxParams: 1,
          evaluate: (e) =>
            null == e[0] ? null : e[0] > 0 ? 1 : e[1] < 0 ? -1 : 0,
        },
        power: {
          minParams: 2,
          maxParams: 2,
          evaluate: (e) => (null == e[0] || null == e[1] ? null : e[0] ** e[1]),
        },
        mod: {
          minParams: 2,
          maxParams: 2,
          evaluate: (e) => (null == e[0] || null == e[1] ? null : e[0] % e[1]),
        },
        round: {
          minParams: 1,
          maxParams: 2,
          evaluate: (e) => {
            const t = e[0],
              r = 2 === e.length ? 10 ** e[1] : 1;
            return null == t ? null : Math.round(t * r) / r;
          },
        },
        truncate: {
          minParams: 1,
          maxParams: 2,
          evaluate: (e) =>
            null == e[0]
              ? null
              : 1 === e.length
              ? parseInt(e[0].toFixed(0), 10)
              : parseFloat(e[0].toFixed(e[1])),
        },
        char_length: {
          minParams: 1,
          maxParams: 1,
          evaluate: (e) =>
            'string' == typeof e[0] || e[0] instanceof String ? e[0].length : 0,
        },
        concat: {
          minParams: 1,
          maxParams: 1 / 0,
          evaluate: (e) => {
            let t = '';
            for (let r = 0; r < e.length; r++) {
              if (null == e[r]) return null;
              t += e[r].toString();
            }
            return t;
          },
        },
        lower: {
          minParams: 1,
          maxParams: 1,
          evaluate: (e) =>
            null == e[0] ? null : e[0].toString().toLowerCase(),
        },
        upper: {
          minParams: 1,
          maxParams: 1,
          evaluate: (e) =>
            null == e[0] ? null : e[0].toString().toUpperCase(),
        },
      };
      r(5732);
      var v,
        h,
        d = { exports: {} };
      (h = function () {
        function e(t, r, n, a) {
          var s = Error.call(this, t);
          return (
            Object.setPrototypeOf && Object.setPrototypeOf(s, e.prototype),
            (s.expected = r),
            (s.found = n),
            (s.location = a),
            (s.name = 'SyntaxError'),
            s
          );
        }
        function t(e, t, r) {
          return (
            (r = r || ' '),
            e.length > t
              ? e
              : ((t -= e.length), e + (r += r.repeat(t)).slice(0, t))
          );
        }
        return (
          (function (e, t) {
            function r() {
              this.constructor = e;
            }
            (r.prototype = t.prototype), (e.prototype = new r());
          })(e, Error),
          (e.prototype.format = function (e) {
            var r = 'Error: ' + this.message;
            if (this.location) {
              var n,
                a = null;
              for (n = 0; n < e.length; n++)
                if (e[n].source === this.location.source) {
                  a = e[n].text.split(/\r\n|\n|\r/g);
                  break;
                }
              var s = this.location.start,
                u = this.location.source + ':' + s.line + ':' + s.column;
              if (a) {
                var i = this.location.end,
                  o = t('', s.line.toString().length),
                  l = a[s.line - 1],
                  c = s.line === i.line ? i.column : l.length + 1;
                r +=
                  '\n --\x3e ' +
                  u +
                  '\n' +
                  o +
                  ' |\n' +
                  s.line +
                  ' | ' +
                  l +
                  '\n' +
                  o +
                  ' | ' +
                  t('', s.column - 1) +
                  t('', c - s.column, '^');
              } else r += '\n at ' + u;
            }
            return r;
          }),
          (e.buildMessage = function (e, t) {
            var r = {
              literal: function (e) {
                return '"' + a(e.text) + '"';
              },
              class: function (e) {
                var t = e.parts.map(function (e) {
                  return Array.isArray(e) ? s(e[0]) + '-' + s(e[1]) : s(e);
                });
                return '[' + (e.inverted ? '^' : '') + t + ']';
              },
              any: function () {
                return 'any character';
              },
              end: function () {
                return 'end of input';
              },
              other: function (e) {
                return e.description;
              },
            };
            function n(e) {
              return e.charCodeAt(0).toString(16).toUpperCase();
            }
            function a(e) {
              return e
                .replace(/\\/g, '\\\\')
                .replace(/"/g, '\\"')
                .replace(/\0/g, '\\0')
                .replace(/\t/g, '\\t')
                .replace(/\n/g, '\\n')
                .replace(/\r/g, '\\r')
                .replace(/[\x00-\x0F]/g, function (e) {
                  return '\\x0' + n(e);
                })
                .replace(/[\x10-\x1F\x7F-\x9F]/g, function (e) {
                  return '\\x' + n(e);
                });
            }
            function s(e) {
              return e
                .replace(/\\/g, '\\\\')
                .replace(/\]/g, '\\]')
                .replace(/\^/g, '\\^')
                .replace(/-/g, '\\-')
                .replace(/\0/g, '\\0')
                .replace(/\t/g, '\\t')
                .replace(/\n/g, '\\n')
                .replace(/\r/g, '\\r')
                .replace(/[\x00-\x0F]/g, function (e) {
                  return '\\x0' + n(e);
                })
                .replace(/[\x10-\x1F\x7F-\x9F]/g, function (e) {
                  return '\\x' + n(e);
                });
            }
            function u(e) {
              return r[e.type](e);
            }
            return (
              'Expected ' +
              (function (e) {
                var t,
                  r,
                  n = e.map(u);
                if ((n.sort(), n.length > 0)) {
                  for (t = 1, r = 1; t < n.length; t++)
                    n[t - 1] !== n[t] && ((n[r] = n[t]), r++);
                  n.length = r;
                }
                switch (n.length) {
                  case 1:
                    return n[0];
                  case 2:
                    return n[0] + ' or ' + n[1];
                  default:
                    return (
                      n.slice(0, -1).join(', ') + ', or ' + n[n.length - 1]
                    );
                }
              })(e) +
              ' but ' +
              (function (e) {
                return e ? '"' + a(e) + '"' : 'end of input';
              })(t) +
              ' found.'
            );
          }),
          {
            SyntaxError: e,
            parse: function (t, r) {
              var n,
                a = {},
                s = (r = void 0 !== r ? r : {}).grammarSource,
                u = { start: Ye },
                i = Ye,
                o = "''",
                l = /^[A-Za-z_\x80-\uFFFF]/,
                c = /^[A-Za-z0-9_]/,
                p = /^[A-Za-z0-9_.\x80-\uFFFF]/,
                f = /^[^']/,
                v = /^[0-9]/,
                h = /^[eE]/,
                d = /^[+\-]/,
                m = /^[ \t\n\r]/,
                g = /^[^`]/,
                w = He('!', !1),
                y = He('=', !1),
                N = He('>=', !1),
                b = He('>', !1),
                T = He('<=', !1),
                x = He('<>', !1),
                _ = He('<', !1),
                A = He('!=', !1),
                I = He('+', !1),
                E = He('-', !1),
                S = He('*', !1),
                C = He('/', !1),
                P = qe([['A', 'Z'], ['a', 'z'], '_', ['', '￿']], !1, !1),
                F = qe([['A', 'Z'], ['a', 'z'], ['0', '9'], '_'], !1, !1),
                L = qe(
                  [['A', 'Z'], ['a', 'z'], ['0', '9'], '_', '.', ['', '￿']],
                  !1,
                  !1,
                ),
                M = He('@', !1),
                O = He("'", !1),
                D = He("N'", !1),
                R = He("''", !1),
                J = qe(["'"], !0, !1),
                k = He('.', !1),
                $ = qe([['0', '9']], !1, !1),
                U = qe(['e', 'E'], !1, !1),
                H = qe(['+', '-'], !1, !1),
                q = He('NULL', !0),
                V = He('TRUE', !0),
                B = He('FALSE', !0),
                j = He('IN', !0),
                Y = He('IS', !0),
                z = He('LIKE', !0),
                G = He('ESCAPE', !0),
                W = He('NOT', !0),
                Z = He('AND', !0),
                K = He('OR', !0),
                Q = He('BETWEEN', !0),
                X = He('FROM', !0),
                ee = He('FOR', !0),
                te = He('SUBSTRING', !0),
                re = He('EXTRACT', !0),
                ne = He('TRIM', !0),
                ae = He('POSITION', !0),
                se = He('TIMESTAMP', !0),
                ue = He('DATE', !0),
                ie = He('LEADING', !0),
                oe = He('TRAILING', !0),
                le = He('BOTH', !0),
                ce = He('TO', !0),
                pe = He('INTERVAL', !0),
                fe = He('YEAR', !0),
                ve = He('MONTH', !0),
                he = He('DAY', !0),
                de = He('HOUR', !0),
                me = He('MINUTE', !0),
                ge = He('SECOND', !0),
                we = He('CASE', !0),
                ye = He('END', !0),
                Ne = He('WHEN', !0),
                be = He('THEN', !0),
                Te = He('ELSE', !0),
                xe = He(',', !1),
                _e = He('(', !1),
                Ae = He(')', !1),
                Ie = qe([' ', '\t', '\n', '\r'], !1, !1),
                Ee = He('`', !1),
                Se = qe(['`'], !0, !1),
                Ce = function (e, t) {
                  return dr(e, t);
                },
                Pe = function (e) {
                  return e[0] + ' ' + e[2];
                },
                Fe = function (e, t) {
                  return e + t.join('');
                },
                Le = function (e) {
                  return {
                    type: 'interval-period',
                    period: e.value,
                    precision: null,
                    secondary: null,
                  };
                },
                Me = function (e, t) {
                  return {
                    type: 'interval-period',
                    period: 'second',
                    precision: e,
                    secondary: t,
                  };
                },
                Oe = function (e) {
                  return parseFloat(e);
                },
                De = function (e, t) {
                  return { type: 'when_clause', operand: e, value: t };
                },
                Re = 0,
                Je = [{ line: 1, column: 1 }],
                ke = 0,
                $e = [],
                Ue = 0;
              if ('startRule' in r) {
                if (!(r.startRule in u))
                  throw new Error(
                    'Can\'t start parsing from rule "' + r.startRule + '".',
                  );
                i = u[r.startRule];
              }
              function He(e, t) {
                return { type: 'literal', text: e, ignoreCase: t };
              }
              function qe(e, t, r) {
                return { type: 'class', parts: e, inverted: t, ignoreCase: r };
              }
              function Ve(e) {
                var r,
                  n = Je[e];
                if (n) return n;
                for (r = e - 1; !Je[r]; ) r--;
                for (n = { line: (n = Je[r]).line, column: n.column }; r < e; )
                  10 === t.charCodeAt(r)
                    ? (n.line++, (n.column = 1))
                    : n.column++,
                    r++;
                return (Je[e] = n), n;
              }
              function Be(e, t) {
                var r = Ve(e),
                  n = Ve(t);
                return {
                  source: s,
                  start: { offset: e, line: r.line, column: r.column },
                  end: { offset: t, line: n.line, column: n.column },
                };
              }
              function je(e) {
                Re < ke || (Re > ke && ((ke = Re), ($e = [])), $e.push(e));
              }
              function Ye() {
                var e, t;
                return (
                  (e = Re),
                  pr(),
                  (t = Ge()) !== a ? (pr(), (e = t)) : ((Re = e), (e = a)),
                  e
                );
              }
              function ze() {
                var e, t, r, n, s, u, i, o;
                if (((e = Re), (t = Ge()) !== a)) {
                  for (
                    r = [],
                      n = Re,
                      s = pr(),
                      (u = or()) !== a
                        ? ((i = pr()),
                          (o = Ge()) !== a
                            ? (n = s = [s, u, i, o])
                            : ((Re = n), (n = a)))
                        : ((Re = n), (n = a));
                    n !== a;

                  )
                    r.push(n),
                      (n = Re),
                      (s = pr()),
                      (u = or()) !== a
                        ? ((i = pr()),
                          (o = Ge()) !== a
                            ? (n = s = [s, u, i, o])
                            : ((Re = n), (n = a)))
                        : ((Re = n), (n = a));
                  e = (function (e, t) {
                    var r = { type: 'expr_list' },
                      n = (function (e, t, r) {
                        return (function (e, t) {
                          for (var r = [e], n = 0; n < t.length; n++)
                            r.push(t[n][3]);
                          return r;
                        })(e, t);
                      })(e, t);
                    return (r.value = n), r;
                  })(t, r);
                } else (Re = e), (e = a);
                return e;
              }
              function Ge() {
                var e, t, r, n, s, u, i, o;
                if (((e = Re), (t = We()) !== a)) {
                  for (
                    r = [],
                      n = Re,
                      s = pr(),
                      (u = Rt()) !== a
                        ? ((i = pr()),
                          (o = We()) !== a
                            ? (n = s = [s, u, i, o])
                            : ((Re = n), (n = a)))
                        : ((Re = n), (n = a));
                    n !== a;

                  )
                    r.push(n),
                      (n = Re),
                      (s = pr()),
                      (u = Rt()) !== a
                        ? ((i = pr()),
                          (o = We()) !== a
                            ? (n = s = [s, u, i, o])
                            : ((Re = n), (n = a)))
                        : ((Re = n), (n = a));
                  e = Ce(t, r);
                } else (Re = e), (e = a);
                return e;
              }
              function We() {
                var e, t, r, n, s, u, i, o;
                if (((e = Re), (t = Ze()) !== a)) {
                  for (
                    r = [],
                      n = Re,
                      s = pr(),
                      (u = Dt()) !== a
                        ? ((i = pr()),
                          (o = Ze()) !== a
                            ? (n = s = [s, u, i, o])
                            : ((Re = n), (n = a)))
                        : ((Re = n), (n = a));
                    n !== a;

                  )
                    r.push(n),
                      (n = Re),
                      (s = pr()),
                      (u = Dt()) !== a
                        ? ((i = pr()),
                          (o = Ze()) !== a
                            ? (n = s = [s, u, i, o])
                            : ((Re = n), (n = a)))
                        : ((Re = n), (n = a));
                  e = Ce(t, r);
                } else (Re = e), (e = a);
                return e;
              }
              function Ze() {
                var e, r, n, s, u;
                return (
                  (e = Re),
                  (r = Ot()) === a &&
                    ((r = Re),
                    33 === t.charCodeAt(Re)
                      ? ((n = '!'), Re++)
                      : ((n = a), 0 === Ue && je(w)),
                    n !== a
                      ? ((s = Re),
                        Ue++,
                        61 === t.charCodeAt(Re)
                          ? ((u = '='), Re++)
                          : ((u = a), 0 === Ue && je(y)),
                        Ue--,
                        u === a ? (s = void 0) : ((Re = s), (s = a)),
                        s !== a ? (r = n = [n, s]) : ((Re = r), (r = a)))
                      : ((Re = r), (r = a))),
                  r !== a
                    ? ((n = pr()),
                      (s = Ze()) !== a
                        ? (e = (function (e) {
                            return (function (e, t) {
                              return {
                                type: 'unary_expr',
                                operator: 'NOT',
                                expr: t,
                              };
                            })(0, e);
                          })(s))
                        : ((Re = e), (e = a)))
                    : ((Re = e), (e = a)),
                  e === a &&
                    (e = (function () {
                      var e, t, r;
                      return (
                        (e = Re),
                        (t = et()) !== a
                          ? (pr(),
                            (r = (function () {
                              var e;
                              return (
                                (e = (function () {
                                  var e, t, r, n, s, u;
                                  if (
                                    ((e = []),
                                    (t = Re),
                                    (r = pr()),
                                    (n = Ke()) !== a
                                      ? ((s = pr()),
                                        (u = et()) !== a
                                          ? (t = r = [r, n, s, u])
                                          : ((Re = t), (t = a)))
                                      : ((Re = t), (t = a)),
                                    t !== a)
                                  )
                                    for (; t !== a; )
                                      e.push(t),
                                        (t = Re),
                                        (r = pr()),
                                        (n = Ke()) !== a
                                          ? ((s = pr()),
                                            (u = et()) !== a
                                              ? (t = r = [r, n, s, u])
                                              : ((Re = t), (t = a)))
                                          : ((Re = t), (t = a));
                                  else e = a;
                                  return (
                                    e !== a &&
                                      (e = (function (e) {
                                        return { type: 'arithmetic', tail: e };
                                      })(e)),
                                    e
                                  );
                                })()) === a &&
                                  (e = (function () {
                                    var e, t, r, n;
                                    return (
                                      (e = Re),
                                      (t = Xe()) !== a
                                        ? (pr(),
                                          (r = lr()) !== a
                                            ? (pr(),
                                              (n = ze()) !== a
                                                ? (pr(),
                                                  cr() !== a
                                                    ? (e = (function (e, t) {
                                                        return {
                                                          op: e,
                                                          right: t,
                                                        };
                                                      })(t, n))
                                                    : ((Re = e), (e = a)))
                                                : ((Re = e), (e = a)))
                                            : ((Re = e), (e = a)))
                                        : ((Re = e), (e = a)),
                                      e === a &&
                                        ((e = Re),
                                        (t = Xe()) !== a
                                          ? (pr(),
                                            (r = lr()) !== a
                                              ? (pr(),
                                                (n = cr()) !== a
                                                  ? (e = (function (e) {
                                                      return {
                                                        op: e,
                                                        right: {
                                                          type: 'expr_list',
                                                          value: [],
                                                        },
                                                      };
                                                    })(t))
                                                  : ((Re = e), (e = a)))
                                              : ((Re = e), (e = a)))
                                          : ((Re = e), (e = a)),
                                        e === a &&
                                          ((e = Re),
                                          (t = Xe()) !== a
                                            ? (pr(),
                                              (r = lt()) !== a
                                                ? (e = (function (e, t) {
                                                    return { op: e, right: t };
                                                  })(t, r))
                                                : ((Re = e), (e = a)))
                                            : ((Re = e), (e = a)))),
                                      e
                                    );
                                  })()) === a &&
                                  (e = (function () {
                                    var e, t, r, n, s, u;
                                    return (
                                      (e = Re),
                                      (t = Ot()) !== a
                                        ? (pr(),
                                          (r = Jt()) !== a
                                            ? (pr(),
                                              (n = et()) !== a
                                                ? (pr(),
                                                  (s = Dt()) !== a
                                                    ? (pr(),
                                                      (u = et()) !== a
                                                        ? (e = (function (
                                                            e,
                                                            t,
                                                            r,
                                                          ) {
                                                            return {
                                                              op: 'NOT' + e,
                                                              right: {
                                                                type: 'expr_list',
                                                                value: [t, r],
                                                              },
                                                            };
                                                          })(r, n, u))
                                                        : ((Re = e), (e = a)))
                                                    : ((Re = e), (e = a)))
                                                : ((Re = e), (e = a)))
                                            : ((Re = e), (e = a)))
                                        : ((Re = e), (e = a)),
                                      e === a &&
                                        ((e = Re),
                                        (t = Jt()) !== a
                                          ? (pr(),
                                            (r = et()) !== a
                                              ? (pr(),
                                                (n = Dt()) !== a
                                                  ? (pr(),
                                                    (s = et()) !== a
                                                      ? (e = (function (
                                                          e,
                                                          t,
                                                          r,
                                                        ) {
                                                          return {
                                                            op: e,
                                                            right: {
                                                              type: 'expr_list',
                                                              value: [t, r],
                                                            },
                                                          };
                                                        })(t, r, s))
                                                      : ((Re = e), (e = a)))
                                                  : ((Re = e), (e = a)))
                                              : ((Re = e), (e = a)))
                                          : ((Re = e), (e = a))),
                                      e
                                    );
                                  })()) === a &&
                                  (e = (function () {
                                    var e, t, r, n;
                                    return (
                                      (e = Re),
                                      (t = Ft()) !== a
                                        ? (pr(),
                                          (r = Ot()) !== a
                                            ? (pr(),
                                              (n = et()) !== a
                                                ? (e = (function (e, t) {
                                                    return {
                                                      op: e + 'NOT',
                                                      right: t,
                                                    };
                                                  })(t, n))
                                                : ((Re = e), (e = a)))
                                            : ((Re = e), (e = a)))
                                        : ((Re = e), (e = a)),
                                      e === a &&
                                        ((e = Re),
                                        (t = Ft()) !== a
                                          ? (pr(),
                                            (r = et()) !== a
                                              ? (e = (function (e, t) {
                                                  return { op: e, right: t };
                                                })(t, r))
                                              : ((Re = e), (e = a)))
                                          : ((Re = e), (e = a))),
                                      e
                                    );
                                  })()) === a &&
                                  (e = (function () {
                                    var e, t, r, n;
                                    return (
                                      (e = Re),
                                      (t = Qe()) !== a
                                        ? (pr(),
                                          (r = mt()) !== a
                                            ? (pr(),
                                              Mt() !== a
                                                ? (pr(),
                                                  (n = gt()) !== a
                                                    ? (e = (function (e, t, r) {
                                                        return {
                                                          op: e,
                                                          right: t,
                                                          escape: r.value,
                                                        };
                                                      })(t, r, n))
                                                    : ((Re = e), (e = a)))
                                                : ((Re = e), (e = a)))
                                            : ((Re = e), (e = a)))
                                        : ((Re = e), (e = a)),
                                      e === a &&
                                        ((e = Re),
                                        (t = Qe()) !== a
                                          ? (pr(),
                                            (r = mt()) !== a
                                              ? (e = (function (e, t) {
                                                  return {
                                                    op: e,
                                                    right: t,
                                                    escape: '',
                                                  };
                                                })(t, r))
                                              : ((Re = e), (e = a)))
                                          : ((Re = e), (e = a))),
                                      e
                                    );
                                  })()),
                                e
                              );
                            })()) === a && (r = null),
                            (e = (function (e, t) {
                              return '' == t || null == t || null == t
                                ? e
                                : 'arithmetic' == t.type
                                ? dr(e, t.tail)
                                : hr(t.op, e, t.right, t.escape);
                            })(t, r)))
                          : ((Re = e), (e = a)),
                        e
                      );
                    })()),
                  e
                );
              }
              function Ke() {
                var e;
                return (
                  '>=' === t.substr(Re, 2)
                    ? ((e = '>='), (Re += 2))
                    : ((e = a), 0 === Ue && je(N)),
                  e === a &&
                    (62 === t.charCodeAt(Re)
                      ? ((e = '>'), Re++)
                      : ((e = a), 0 === Ue && je(b)),
                    e === a &&
                      ('<=' === t.substr(Re, 2)
                        ? ((e = '<='), (Re += 2))
                        : ((e = a), 0 === Ue && je(T)),
                      e === a &&
                        ('<>' === t.substr(Re, 2)
                          ? ((e = '<>'), (Re += 2))
                          : ((e = a), 0 === Ue && je(x)),
                        e === a &&
                          (60 === t.charCodeAt(Re)
                            ? ((e = '<'), Re++)
                            : ((e = a), 0 === Ue && je(_)),
                          e === a &&
                            (61 === t.charCodeAt(Re)
                              ? ((e = '='), Re++)
                              : ((e = a), 0 === Ue && je(y)),
                            e === a &&
                              ('!=' === t.substr(Re, 2)
                                ? ((e = '!='), (Re += 2))
                                : ((e = a), 0 === Ue && je(A)))))))),
                  e
                );
              }
              function Qe() {
                var e, t, r, n, s;
                return (
                  (e = Re),
                  (t = Re),
                  (r = Ot()) !== a
                    ? ((n = pr()),
                      (s = Lt()) !== a
                        ? (t = r = [r, n, s])
                        : ((Re = t), (t = a)))
                    : ((Re = t), (t = a)),
                  t !== a && (t = Pe(t)),
                  (e = t) === a && (e = Lt()),
                  e
                );
              }
              function Xe() {
                var e, t, r, n, s;
                return (
                  (e = Re),
                  (t = Re),
                  (r = Ot()) !== a
                    ? ((n = pr()),
                      (s = Pt()) !== a
                        ? (t = r = [r, n, s])
                        : ((Re = t), (t = a)))
                    : ((Re = t), (t = a)),
                  t !== a && (t = Pe(t)),
                  (e = t) === a && (e = Pt()),
                  e
                );
              }
              function et() {
                var e, t, r, n, s, u, i, o;
                if (((e = Re), (t = rt()) !== a)) {
                  for (
                    r = [],
                      n = Re,
                      s = pr(),
                      (u = tt()) !== a
                        ? ((i = pr()),
                          (o = rt()) !== a
                            ? (n = s = [s, u, i, o])
                            : ((Re = n), (n = a)))
                        : ((Re = n), (n = a));
                    n !== a;

                  )
                    r.push(n),
                      (n = Re),
                      (s = pr()),
                      (u = tt()) !== a
                        ? ((i = pr()),
                          (o = rt()) !== a
                            ? (n = s = [s, u, i, o])
                            : ((Re = n), (n = a)))
                        : ((Re = n), (n = a));
                  e = Ce(t, r);
                } else (Re = e), (e = a);
                return e;
              }
              function tt() {
                var e;
                return (
                  43 === t.charCodeAt(Re)
                    ? ((e = '+'), Re++)
                    : ((e = a), 0 === Ue && je(I)),
                  e === a &&
                    (45 === t.charCodeAt(Re)
                      ? ((e = '-'), Re++)
                      : ((e = a), 0 === Ue && je(E))),
                  e
                );
              }
              function rt() {
                var e, t, r, n, s, u, i, o;
                if (((e = Re), (t = at()) !== a)) {
                  for (
                    r = [],
                      n = Re,
                      s = pr(),
                      (u = nt()) !== a
                        ? ((i = pr()),
                          (o = at()) !== a
                            ? (n = s = [s, u, i, o])
                            : ((Re = n), (n = a)))
                        : ((Re = n), (n = a));
                    n !== a;

                  )
                    r.push(n),
                      (n = Re),
                      (s = pr()),
                      (u = nt()) !== a
                        ? ((i = pr()),
                          (o = at()) !== a
                            ? (n = s = [s, u, i, o])
                            : ((Re = n), (n = a)))
                        : ((Re = n), (n = a));
                  e = (function (e, t) {
                    return dr(e, t);
                  })(t, r);
                } else (Re = e), (e = a);
                return e;
              }
              function nt() {
                var e;
                return (
                  42 === t.charCodeAt(Re)
                    ? ((e = '*'), Re++)
                    : ((e = a), 0 === Ue && je(S)),
                  e === a &&
                    (47 === t.charCodeAt(Re)
                      ? ((e = '/'), Re++)
                      : ((e = a), 0 === Ue && je(C))),
                  e
                );
              }
              function at() {
                var e, t;
                return (
                  (e = (function () {
                    var e;
                    return (
                      (e = gt()) === a &&
                        (e = (function () {
                          var e, t, r, n;
                          return (
                            (e = Re),
                            (t = (function () {
                              var e, t, r, n;
                              return (
                                (e = Re),
                                (t = bt()) !== a &&
                                (r = Tt()) !== a &&
                                (n = xt()) !== a
                                  ? (e = (function (e, t, r) {
                                      return parseFloat(e + t + r);
                                    })(t, r, n))
                                  : ((Re = e), (e = a)),
                                e === a &&
                                  ((e = Re),
                                  (t = bt()) !== a && (r = Tt()) !== a
                                    ? (e = (function (e, t) {
                                        return parseFloat(e + t);
                                      })(t, r))
                                    : ((Re = e), (e = a)),
                                  e === a &&
                                    ((e = Re),
                                    (t = bt()) !== a && (r = xt()) !== a
                                      ? (e = (function (e, t) {
                                          return parseFloat(e + t);
                                        })(t, r))
                                      : ((Re = e), (e = a)),
                                    e === a &&
                                      ((e = Re),
                                      (t = bt()) !== a &&
                                        (t = (function (e) {
                                          return parseFloat(e);
                                        })(t)),
                                      (e = t)))),
                                e
                              );
                            })()) !== a
                              ? ((r = Re),
                                Ue++,
                                (n = ut()),
                                Ue--,
                                n === a ? (r = void 0) : ((Re = r), (r = a)),
                                r !== a
                                  ? (e = (function (e) {
                                      return { type: 'number', value: e };
                                    })(t))
                                  : ((Re = e), (e = a)))
                              : ((Re = e), (e = a)),
                            e
                          );
                        })()) === a &&
                        (e = (function () {
                          var e, t;
                          return (
                            (e = Re),
                            (t = St()) !== a &&
                              (t = { type: 'bool', value: !0 }),
                            (e = t) === a &&
                              ((e = Re),
                              (t = Ct()) !== a &&
                                (t = { type: 'bool', value: !1 }),
                              (e = t)),
                            e
                          );
                        })()) === a &&
                        (e = (function () {
                          var e;
                          return (
                            (e = Et()) !== a &&
                              (e = { type: 'null', value: null }),
                            e
                          );
                        })()) === a &&
                        (e = (function () {
                          var e, t;
                          return (
                            (e = Re),
                            jt() !== a
                              ? (pr(),
                                (t = mt()) !== a
                                  ? (e = (function (e) {
                                      return { type: 'date', value: e.value };
                                    })(t))
                                  : ((Re = e), (e = a)))
                              : ((Re = e), (e = a)),
                            e
                          );
                        })()) === a &&
                        (e = (function () {
                          var e, t;
                          return (
                            (e = Re),
                            Bt() !== a
                              ? (pr(),
                                (t = mt()) !== a
                                  ? (e = (function (e) {
                                      return {
                                        type: 'timestamp',
                                        value: e.value,
                                      };
                                    })(t))
                                  : ((Re = e), (e = a)))
                              : ((Re = e), (e = a)),
                            e
                          );
                        })()) === a &&
                        (e = pt()),
                      e
                    );
                  })()) === a &&
                    (e = (function () {
                      var e, t, r;
                      return (
                        (e = Re),
                        Ht() !== a
                          ? (pr(),
                            lr() !== a
                              ? (pr(),
                                (t = (function () {
                                  var e;
                                  return (
                                    (e = Kt()) === a &&
                                      (e = Qt()) === a &&
                                      (e = Xt()) === a &&
                                      (e = er()) === a &&
                                      (e = tr()) === a &&
                                      (e = rr()),
                                    e
                                  );
                                })()) !== a
                                  ? (pr(),
                                    kt() !== a
                                      ? (pr(),
                                        (r = Ge()) !== a
                                          ? (pr(),
                                            cr() !== a
                                              ? (e = (function (e, t) {
                                                  return {
                                                    type: 'function',
                                                    name: 'extract',
                                                    args: {
                                                      type: 'expr_list',
                                                      value: [
                                                        {
                                                          type: 'string',
                                                          value: e,
                                                        },
                                                        t,
                                                      ],
                                                    },
                                                  };
                                                })(t, r))
                                              : ((Re = e), (e = a)))
                                          : ((Re = e), (e = a)))
                                      : ((Re = e), (e = a)))
                                  : ((Re = e), (e = a)))
                              : ((Re = e), (e = a)))
                          : ((Re = e), (e = a)),
                        e
                      );
                    })()) === a &&
                    (e = (function () {
                      var e, t, r, n, s, u, i;
                      return (
                        (e = Re),
                        Ut() !== a
                          ? (pr(),
                            lr() !== a
                              ? (pr(),
                                (t = Ge()) !== a
                                  ? (pr(),
                                    kt() !== a
                                      ? (pr(),
                                        (r = Ge()) !== a
                                          ? (pr(),
                                            (n = Re),
                                            (s = $t()) !== a
                                              ? ((u = pr()),
                                                (i = Ge()) !== a
                                                  ? (n = s = [s, u, i, pr()])
                                                  : ((Re = n), (n = a)))
                                              : ((Re = n), (n = a)),
                                            n === a && (n = null),
                                            (s = cr()) !== a
                                              ? (e = (function (e, t, r) {
                                                  return {
                                                    type: 'function',
                                                    name: 'substring',
                                                    args: {
                                                      type: 'expr_list',
                                                      value: r
                                                        ? [e, t, r[2]]
                                                        : [e, t],
                                                    },
                                                  };
                                                })(t, r, n))
                                              : ((Re = e), (e = a)))
                                          : ((Re = e), (e = a)))
                                      : ((Re = e), (e = a)))
                                  : ((Re = e), (e = a)))
                              : ((Re = e), (e = a)))
                          : ((Re = e), (e = a)),
                        e
                      );
                    })()) === a &&
                    (e = (function () {
                      var e, t, r, n;
                      return (
                        (e = Re),
                        qt() !== a
                          ? (pr(),
                            lr() !== a
                              ? (pr(),
                                (t = ct()) === a && (t = null),
                                pr(),
                                (r = Ge()) !== a
                                  ? (pr(),
                                    kt() !== a
                                      ? (pr(),
                                        (n = Ge()) !== a
                                          ? (pr(),
                                            cr() !== a
                                              ? (e = (function (e, t, r) {
                                                  return {
                                                    type: 'function',
                                                    name: 'trim',
                                                    args: {
                                                      type: 'expr_list',
                                                      value: [
                                                        {
                                                          type: 'string',
                                                          value:
                                                            null == e
                                                              ? 'BOTH'
                                                              : e,
                                                        },
                                                        t,
                                                        r,
                                                      ],
                                                    },
                                                  };
                                                })(t, r, n))
                                              : ((Re = e), (e = a)))
                                          : ((Re = e), (e = a)))
                                      : ((Re = e), (e = a)))
                                  : ((Re = e), (e = a)))
                              : ((Re = e), (e = a)))
                          : ((Re = e), (e = a)),
                        e === a &&
                          ((e = Re),
                          qt() !== a
                            ? (pr(),
                              lr() !== a
                                ? (pr(),
                                  (t = ct()) === a && (t = null),
                                  pr(),
                                  (r = Ge()) !== a
                                    ? (pr(),
                                      cr() !== a
                                        ? (e = (function (e, t) {
                                            return {
                                              type: 'function',
                                              name: 'trim',
                                              args: {
                                                type: 'expr_list',
                                                value: [
                                                  {
                                                    type: 'string',
                                                    value:
                                                      null == e ? 'BOTH' : e,
                                                  },
                                                  t,
                                                ],
                                              },
                                            };
                                          })(t, r))
                                        : ((Re = e), (e = a)))
                                    : ((Re = e), (e = a)))
                                : ((Re = e), (e = a)))
                            : ((Re = e), (e = a))),
                        e
                      );
                    })()) === a &&
                    (e = (function () {
                      var e, t, r;
                      return (
                        (e = Re),
                        Vt() !== a
                          ? (pr(),
                            lr() !== a
                              ? (pr(),
                                (t = Ge()) !== a
                                  ? (pr(),
                                    Pt() !== a
                                      ? (pr(),
                                        (r = Ge()) !== a
                                          ? (pr(),
                                            cr() !== a
                                              ? (e = (function (e, t) {
                                                  return {
                                                    type: 'function',
                                                    name: 'position',
                                                    args: {
                                                      type: 'expr_list',
                                                      value: [e, t],
                                                    },
                                                  };
                                                })(t, r))
                                              : ((Re = e), (e = a)))
                                          : ((Re = e), (e = a)))
                                      : ((Re = e), (e = a)))
                                  : ((Re = e), (e = a)))
                              : ((Re = e), (e = a)))
                          : ((Re = e), (e = a)),
                        e
                      );
                    })()) === a &&
                    (e = (function () {
                      var e, t, r;
                      return (
                        (e = Re),
                        (t = vr()) !== a
                          ? (pr(),
                            lr() !== a
                              ? (pr(),
                                (r = ze()) === a && (r = null),
                                pr(),
                                cr() !== a
                                  ? (e = (function (e, t) {
                                      return {
                                        type: 'function',
                                        name: e,
                                        args: t || {
                                          type: 'expr_list',
                                          value: [],
                                        },
                                      };
                                    })(t, r))
                                  : ((Re = e), (e = a)))
                              : ((Re = e), (e = a)))
                          : ((Re = e), (e = a)),
                        e
                      );
                    })()) === a &&
                    (e = (function () {
                      var e;
                      return (
                        (e = (function () {
                          var e, t, r, n, s;
                          if (((e = Re), nr() !== a))
                            if ((pr(), (t = Ge()) !== a)) {
                              for (pr(), r = [], n = yt(); n !== a; )
                                r.push(n), (n = yt());
                              (n = pr()),
                                (s = ar()) !== a
                                  ? (e = (function (e, t) {
                                      return {
                                        type: 'case_expression',
                                        format: 'simple',
                                        operand: e,
                                        clauses: t,
                                        else: null,
                                      };
                                    })(t, r))
                                  : ((Re = e), (e = a));
                            } else (Re = e), (e = a);
                          else (Re = e), (e = a);
                          if (e === a)
                            if (((e = Re), nr() !== a))
                              if ((pr(), (t = Ge()) !== a)) {
                                for (pr(), r = [], n = yt(); n !== a; )
                                  r.push(n), (n = yt());
                                (n = pr()),
                                  (s = Nt()) !== a
                                    ? (pr(),
                                      ar() !== a
                                        ? (e = (function (e, t, r) {
                                            return {
                                              type: 'case_expression',
                                              format: 'simple',
                                              operand: e,
                                              clauses: t,
                                              else: r.value,
                                            };
                                          })(t, r, s))
                                        : ((Re = e), (e = a)))
                                    : ((Re = e), (e = a));
                              } else (Re = e), (e = a);
                            else (Re = e), (e = a);
                          return e;
                        })()) === a &&
                          (e = (function () {
                            var e, t, r, n;
                            if (((e = Re), nr() !== a)) {
                              for (pr(), t = [], r = wt(); r !== a; )
                                t.push(r), (r = wt());
                              (r = pr()),
                                (n = ar()) !== a
                                  ? (e = (function (e) {
                                      return {
                                        type: 'case_expression',
                                        format: 'searched',
                                        clauses: e,
                                        else: null,
                                      };
                                    })(t))
                                  : ((Re = e), (e = a));
                            } else (Re = e), (e = a);
                            if (e === a)
                              if (((e = Re), nr() !== a)) {
                                for (pr(), t = [], r = wt(); r !== a; )
                                  t.push(r), (r = wt());
                                (r = pr()),
                                  (n = Nt()) !== a
                                    ? (pr(),
                                      ar() !== a
                                        ? (e = (function (e, t) {
                                            return {
                                              type: 'case_expression',
                                              format: 'searched',
                                              clauses: e,
                                              else: t.value,
                                            };
                                          })(t, n))
                                        : ((Re = e), (e = a)))
                                    : ((Re = e), (e = a));
                              } else (Re = e), (e = a);
                            return e;
                          })()),
                        e
                      );
                    })()) === a &&
                    (e = (function () {
                      var e;
                      return (
                        (e = (function () {
                          var e;
                          return (
                            (e = (function () {
                              var e, t, r, n;
                              if (((e = Re), (t = ut()) !== a)) {
                                for (r = [], n = ot(); n !== a; )
                                  r.push(n), (n = ot());
                                e = Fe(t, r);
                              } else (Re = e), (e = a);
                              return e;
                            })()) !== a && (e = e),
                            e
                          );
                        })()) !== a &&
                          (e = (function (e) {
                            return /^CURRENT_DATE$/i.test(e)
                              ? { type: 'current_time', mode: 'date' }
                              : /^CURRENT_TIMESTAMP$/i.test(e)
                              ? { type: 'current_time', mode: 'timestamp' }
                              : { type: 'column_ref', table: '', column: e };
                          })(e)),
                        e
                      );
                    })()) === a &&
                    (e = lt()) === a &&
                    ((e = Re),
                    lr() !== a
                      ? (pr(),
                        (t = Ge()) !== a
                          ? (pr(),
                            cr() !== a
                              ? (e = (function (e) {
                                  return (e.paren = !0), e;
                                })(t))
                              : ((Re = e), (e = a)))
                          : ((Re = e), (e = a)))
                      : ((Re = e), (e = a))),
                  e
                );
              }
              function st() {
                var e, t, r, n;
                if (((e = Re), (t = ut()) !== a)) {
                  for (r = [], n = it(); n !== a; ) r.push(n), (n = it());
                  e = Fe(t, r);
                } else (Re = e), (e = a);
                return e;
              }
              function ut() {
                var e;
                return (
                  l.test(t.charAt(Re))
                    ? ((e = t.charAt(Re)), Re++)
                    : ((e = a), 0 === Ue && je(P)),
                  e
                );
              }
              function it() {
                var e;
                return (
                  c.test(t.charAt(Re))
                    ? ((e = t.charAt(Re)), Re++)
                    : ((e = a), 0 === Ue && je(F)),
                  e
                );
              }
              function ot() {
                var e;
                return (
                  p.test(t.charAt(Re))
                    ? ((e = t.charAt(Re)), Re++)
                    : ((e = a), 0 === Ue && je(L)),
                  e
                );
              }
              function lt() {
                var e, r, n;
                return (
                  (e = Re),
                  64 === t.charCodeAt(Re)
                    ? ((r = '@'), Re++)
                    : ((r = a), 0 === Ue && je(M)),
                  r !== a && (n = st()) !== a
                    ? (e = r = [r, n])
                    : ((Re = e), (e = a)),
                  e !== a &&
                    (e = (function (e) {
                      return { type: 'param', value: e[1] };
                    })(e)),
                  e
                );
              }
              function ct() {
                var e;
                return (e = Yt()) === a && (e = zt()) === a && (e = Gt()), e;
              }
              function pt() {
                var e, r, n, s;
                return (
                  (e = Re),
                  Zt() !== a
                    ? (pr(),
                      45 === t.charCodeAt(Re)
                        ? ((r = '-'), Re++)
                        : ((r = a), 0 === Ue && je(E)),
                      r === a &&
                        (43 === t.charCodeAt(Re)
                          ? ((r = '+'), Re++)
                          : ((r = a), 0 === Ue && je(I))),
                      r !== a
                        ? (pr(),
                          (n = mt()) !== a
                            ? (pr(),
                              (s = ft()) !== a
                                ? (e = (function (e, t, r) {
                                    return {
                                      type: 'interval',
                                      value: t,
                                      qualifier: r,
                                      op: e,
                                    };
                                  })(r, n, s))
                                : ((Re = e), (e = a)))
                            : ((Re = e), (e = a)))
                        : ((Re = e), (e = a)))
                    : ((Re = e), (e = a)),
                  e === a &&
                    ((e = Re),
                    Zt() !== a
                      ? (pr(),
                        (r = mt()) !== a
                          ? (pr(),
                            (n = ft()) !== a
                              ? (e = (function (e, t) {
                                  return {
                                    type: 'interval',
                                    value: e,
                                    qualifier: t,
                                    op: '',
                                  };
                                })(r, n))
                              : ((Re = e), (e = a)))
                          : ((Re = e), (e = a)))
                      : ((Re = e), (e = a))),
                  e
                );
              }
              function ft() {
                var e, t, r;
                return (
                  (e = Re),
                  (t = (function () {
                    var e, t, r;
                    return (
                      (e = Re),
                      (t = vt()) !== a
                        ? (pr(),
                          lr() !== a
                            ? (pr(),
                              (r = dt()) !== a
                                ? (pr(),
                                  cr() !== a
                                    ? (e = (function (e, t) {
                                        return {
                                          type: 'interval-period',
                                          period: e.value,
                                          precision: t,
                                          secondary: null,
                                        };
                                      })(t, r))
                                    : ((Re = e), (e = a)))
                                : ((Re = e), (e = a)))
                            : ((Re = e), (e = a)))
                        : ((Re = e), (e = a)),
                      e === a &&
                        ((e = Re), (t = vt()) !== a && (t = Le(t)), (e = t)),
                      e
                    );
                  })()) !== a
                    ? (pr(),
                      Wt() !== a
                        ? (pr(),
                          (r = (function () {
                            var e, t, r, n;
                            return (
                              (e = Re),
                              (t = vt()) !== a &&
                                (t = (function (e) {
                                  return {
                                    type: 'interval-period',
                                    period: e.value,
                                    precision: null,
                                    secondary: null,
                                  };
                                })(t)),
                              (e = t) === a &&
                                ((e = Re),
                                (t = rr()) !== a
                                  ? (pr(),
                                    lr() !== a
                                      ? (pr(),
                                        (r = dt()) !== a
                                          ? (pr(),
                                            or() !== a
                                              ? (pr(),
                                                (n = ht()) !== a
                                                  ? (pr(),
                                                    cr() !== a
                                                      ? (e = Me(r, n))
                                                      : ((Re = e), (e = a)))
                                                  : ((Re = e), (e = a)))
                                              : ((Re = e), (e = a)))
                                          : ((Re = e), (e = a)))
                                      : ((Re = e), (e = a)))
                                  : ((Re = e), (e = a)),
                                e === a &&
                                  ((e = Re),
                                  (t = rr()) !== a
                                    ? (pr(),
                                      lr() !== a
                                        ? (pr(),
                                          (r = dt()) !== a
                                            ? (pr(),
                                              cr() !== a
                                                ? (e = (function (e) {
                                                    return {
                                                      type: 'interval-period',
                                                      period: 'second',
                                                      precision: e,
                                                      secondary: null,
                                                    };
                                                  })(r))
                                                : ((Re = e), (e = a)))
                                            : ((Re = e), (e = a)))
                                        : ((Re = e), (e = a)))
                                    : ((Re = e), (e = a)),
                                  e === a &&
                                    ((e = Re),
                                    (t = rr()) !== a &&
                                      (t = {
                                        type: 'interval-period',
                                        period: 'second',
                                        precision: null,
                                        secondary: null,
                                      }),
                                    (e = t)))),
                              e
                            );
                          })()) !== a
                            ? (e = (function (e, t) {
                                return {
                                  type: 'interval-qualifier',
                                  start: e,
                                  end: t,
                                };
                              })(t, r))
                            : ((Re = e), (e = a)))
                        : ((Re = e), (e = a)))
                    : ((Re = e), (e = a)),
                  e === a &&
                    (e = (function () {
                      var e, t, r, n;
                      return (
                        (e = Re),
                        (t = vt()) !== a
                          ? (pr(),
                            lr() !== a
                              ? (pr(),
                                (r = ht()) !== a
                                  ? (pr(),
                                    cr() !== a
                                      ? (e = (function (e, t) {
                                          return {
                                            type: 'interval-period',
                                            period: e.value,
                                            precision: t,
                                            secondary: null,
                                          };
                                        })(t, r))
                                      : ((Re = e), (e = a)))
                                  : ((Re = e), (e = a)))
                              : ((Re = e), (e = a)))
                          : ((Re = e), (e = a)),
                        e === a &&
                          ((e = Re),
                          (t = vt()) !== a && (t = Le(t)),
                          (e = t) === a &&
                            ((e = Re),
                            (t = rr()) !== a
                              ? (pr(),
                                lr() !== a
                                  ? (pr(),
                                    (r = dt()) !== a
                                      ? (pr(),
                                        or() !== a
                                          ? (pr(),
                                            (n = ht()) !== a
                                              ? (pr(),
                                                cr() !== a
                                                  ? (e = Me(r, n))
                                                  : ((Re = e), (e = a)))
                                              : ((Re = e), (e = a)))
                                          : ((Re = e), (e = a)))
                                      : ((Re = e), (e = a)))
                                  : ((Re = e), (e = a)))
                              : ((Re = e), (e = a)),
                            e === a &&
                              ((e = Re),
                              (t = rr()) !== a
                                ? (pr(),
                                  lr() !== a
                                    ? (pr(),
                                      (r = ht()) !== a
                                        ? (pr(),
                                          cr() !== a
                                            ? (e = (function (e) {
                                                return {
                                                  type: 'interval-period',
                                                  period: 'second',
                                                  precision: e,
                                                  secondary: null,
                                                };
                                              })(r))
                                            : ((Re = e), (e = a)))
                                        : ((Re = e), (e = a)))
                                    : ((Re = e), (e = a)))
                                : ((Re = e), (e = a)),
                              e === a &&
                                ((e = Re),
                                (t = rr()) !== a &&
                                  (t = {
                                    type: 'interval-period',
                                    period: 'second',
                                    precision: null,
                                    secondary: null,
                                  }),
                                (e = t))))),
                        e
                      );
                    })()),
                  e
                );
              }
              function vt() {
                var e, t;
                return (
                  (e = Re),
                  (t = Xt()) !== a && (t = { type: 'string', value: 'day' }),
                  (e = t) === a &&
                    ((e = Re),
                    (t = er()) !== a && (t = { type: 'string', value: 'hour' }),
                    (e = t) === a &&
                      ((e = Re),
                      (t = tr()) !== a &&
                        (t = { type: 'string', value: 'minute' }),
                      (e = t) === a &&
                        ((e = Re),
                        (t = Qt()) !== a &&
                          (t = { type: 'string', value: 'month' }),
                        (e = t) === a &&
                          ((e = Re),
                          (t = Kt()) !== a &&
                            (t = { type: 'string', value: 'year' }),
                          (e = t))))),
                  e
                );
              }
              function ht() {
                var e;
                return (e = _t()) !== a && (e = Oe(e)), e;
              }
              function dt() {
                var e;
                return (e = _t()) !== a && (e = Oe(e)), e;
              }
              function mt() {
                var e;
                return (e = gt()) === a && (e = lt()), e;
              }
              function gt() {
                var e, r, n, s, u;
                if (
                  ((e = Re),
                  39 === t.charCodeAt(Re)
                    ? ((r = "'"), Re++)
                    : ((r = a), 0 === Ue && je(O)),
                  r === a &&
                    ("N'" === t.substr(Re, 2)
                      ? ((r = "N'"), (Re += 2))
                      : ((r = a), 0 === Ue && je(D))),
                  r !== a)
                ) {
                  for (
                    n = [],
                      s = Re,
                      t.substr(Re, 2) === o
                        ? ((u = o), (Re += 2))
                        : ((u = a), 0 === Ue && je(R)),
                      u !== a && (u = "'"),
                      (s = u) === a &&
                        (f.test(t.charAt(Re))
                          ? ((s = t.charAt(Re)), Re++)
                          : ((s = a), 0 === Ue && je(J)));
                    s !== a;

                  )
                    n.push(s),
                      (s = Re),
                      t.substr(Re, 2) === o
                        ? ((u = o), (Re += 2))
                        : ((u = a), 0 === Ue && je(R)),
                      u !== a && (u = "'"),
                      (s = u) === a &&
                        (f.test(t.charAt(Re))
                          ? ((s = t.charAt(Re)), Re++)
                          : ((s = a), 0 === Ue && je(J)));
                  39 === t.charCodeAt(Re)
                    ? ((s = "'"), Re++)
                    : ((s = a), 0 === Ue && je(O)),
                    s !== a
                      ? (e = (function (e) {
                          return { type: 'string', value: e.join('') };
                        })(n))
                      : ((Re = e), (e = a));
                } else (Re = e), (e = a);
                return e;
              }
              function wt() {
                var e, t, r;
                return (
                  (e = Re),
                  sr() !== a
                    ? (pr(),
                      (t = Ge()) !== a
                        ? (pr(),
                          ur() !== a
                            ? (pr(),
                              (r = Ge()) !== a
                                ? (e = De(t, r))
                                : ((Re = e), (e = a)))
                            : ((Re = e), (e = a)))
                        : ((Re = e), (e = a)))
                    : ((Re = e), (e = a)),
                  e
                );
              }
              function yt() {
                var e, t, r;
                return (
                  (e = Re),
                  sr() !== a
                    ? (pr(),
                      (t = Ge()) !== a
                        ? (pr(),
                          ur() !== a
                            ? (pr(),
                              (r = Ge()) !== a
                                ? (e = De(t, r))
                                : ((Re = e), (e = a)))
                            : ((Re = e), (e = a)))
                        : ((Re = e), (e = a)))
                    : ((Re = e), (e = a)),
                  e
                );
              }
              function Nt() {
                var e, t;
                return (
                  (e = Re),
                  ir() !== a
                    ? (pr(),
                      (t = Ge()) !== a
                        ? (e = (function (e) {
                            return { type: 'else_clause', value: e };
                          })(t))
                        : ((Re = e), (e = a)))
                    : ((Re = e), (e = a)),
                  e
                );
              }
              function bt() {
                var e, r, n;
                return (
                  (e = _t()) === a &&
                    ((e = Re),
                    45 === t.charCodeAt(Re)
                      ? ((r = '-'), Re++)
                      : ((r = a), 0 === Ue && je(E)),
                    r === a &&
                      (43 === t.charCodeAt(Re)
                        ? ((r = '+'), Re++)
                        : ((r = a), 0 === Ue && je(I))),
                    r !== a && (n = _t()) !== a
                      ? (e = (function (e, t) {
                          return e[0] + t;
                        })(r, n))
                      : ((Re = e), (e = a))),
                  e
                );
              }
              function Tt() {
                var e, r, n;
                return (
                  (e = Re),
                  46 === t.charCodeAt(Re)
                    ? ((r = '.'), Re++)
                    : ((r = a), 0 === Ue && je(k)),
                  r !== a
                    ? ((n = _t()) === a && (n = null),
                      (e = (function (e) {
                        return '.' + (null != e ? e : '');
                      })(n)))
                    : ((Re = e), (e = a)),
                  e
                );
              }
              function xt() {
                var e, t, r;
                return (
                  (e = Re),
                  (t = It()) !== a && (r = _t()) !== a
                    ? (e = (function (e, t) {
                        return e + t;
                      })(t, r))
                    : ((Re = e), (e = a)),
                  e
                );
              }
              function _t() {
                var e, t;
                if (((e = []), (t = At()) !== a))
                  for (; t !== a; ) e.push(t), (t = At());
                else e = a;
                return (
                  e !== a &&
                    (e = (function (e) {
                      return e.join('');
                    })(e)),
                  e
                );
              }
              function At() {
                var e;
                return (
                  v.test(t.charAt(Re))
                    ? ((e = t.charAt(Re)), Re++)
                    : ((e = a), 0 === Ue && je($)),
                  e
                );
              }
              function It() {
                var e, r, n;
                return (
                  (e = Re),
                  h.test(t.charAt(Re))
                    ? ((r = t.charAt(Re)), Re++)
                    : ((r = a), 0 === Ue && je(U)),
                  r !== a
                    ? (d.test(t.charAt(Re))
                        ? ((n = t.charAt(Re)), Re++)
                        : ((n = a), 0 === Ue && je(H)),
                      n === a && (n = null),
                      (e = (function (e, t) {
                        return 'e' + (null === t ? '' : t);
                      })(0, n)))
                    : ((Re = e), (e = a)),
                  e
                );
              }
              function Et() {
                var e, r, n, s;
                return (
                  (e = Re),
                  'null' === t.substr(Re, 4).toLowerCase()
                    ? ((r = t.substr(Re, 4)), (Re += 4))
                    : ((r = a), 0 === Ue && je(q)),
                  r !== a
                    ? ((n = Re),
                      Ue++,
                      (s = it()),
                      Ue--,
                      s === a ? (n = void 0) : ((Re = n), (n = a)),
                      n !== a ? (e = r = [r, n]) : ((Re = e), (e = a)))
                    : ((Re = e), (e = a)),
                  e
                );
              }
              function St() {
                var e, r, n, s;
                return (
                  (e = Re),
                  'true' === t.substr(Re, 4).toLowerCase()
                    ? ((r = t.substr(Re, 4)), (Re += 4))
                    : ((r = a), 0 === Ue && je(V)),
                  r !== a
                    ? ((n = Re),
                      Ue++,
                      (s = it()),
                      Ue--,
                      s === a ? (n = void 0) : ((Re = n), (n = a)),
                      n !== a ? (e = r = [r, n]) : ((Re = e), (e = a)))
                    : ((Re = e), (e = a)),
                  e
                );
              }
              function Ct() {
                var e, r, n, s;
                return (
                  (e = Re),
                  'false' === t.substr(Re, 5).toLowerCase()
                    ? ((r = t.substr(Re, 5)), (Re += 5))
                    : ((r = a), 0 === Ue && je(B)),
                  r !== a
                    ? ((n = Re),
                      Ue++,
                      (s = it()),
                      Ue--,
                      s === a ? (n = void 0) : ((Re = n), (n = a)),
                      n !== a ? (e = r = [r, n]) : ((Re = e), (e = a)))
                    : ((Re = e), (e = a)),
                  e
                );
              }
              function Pt() {
                var e, r, n, s;
                return (
                  (e = Re),
                  'in' === t.substr(Re, 2).toLowerCase()
                    ? ((r = t.substr(Re, 2)), (Re += 2))
                    : ((r = a), 0 === Ue && je(j)),
                  r !== a
                    ? ((n = Re),
                      Ue++,
                      (s = it()),
                      Ue--,
                      s === a ? (n = void 0) : ((Re = n), (n = a)),
                      n !== a ? (e = 'IN') : ((Re = e), (e = a)))
                    : ((Re = e), (e = a)),
                  e
                );
              }
              function Ft() {
                var e, r, n, s;
                return (
                  (e = Re),
                  'is' === t.substr(Re, 2).toLowerCase()
                    ? ((r = t.substr(Re, 2)), (Re += 2))
                    : ((r = a), 0 === Ue && je(Y)),
                  r !== a
                    ? ((n = Re),
                      Ue++,
                      (s = it()),
                      Ue--,
                      s === a ? (n = void 0) : ((Re = n), (n = a)),
                      n !== a ? (e = 'IS') : ((Re = e), (e = a)))
                    : ((Re = e), (e = a)),
                  e
                );
              }
              function Lt() {
                var e, r, n, s;
                return (
                  (e = Re),
                  'like' === t.substr(Re, 4).toLowerCase()
                    ? ((r = t.substr(Re, 4)), (Re += 4))
                    : ((r = a), 0 === Ue && je(z)),
                  r !== a
                    ? ((n = Re),
                      Ue++,
                      (s = it()),
                      Ue--,
                      s === a ? (n = void 0) : ((Re = n), (n = a)),
                      n !== a ? (e = 'LIKE') : ((Re = e), (e = a)))
                    : ((Re = e), (e = a)),
                  e
                );
              }
              function Mt() {
                var e, r, n, s;
                return (
                  (e = Re),
                  'escape' === t.substr(Re, 6).toLowerCase()
                    ? ((r = t.substr(Re, 6)), (Re += 6))
                    : ((r = a), 0 === Ue && je(G)),
                  r !== a
                    ? ((n = Re),
                      Ue++,
                      (s = it()),
                      Ue--,
                      s === a ? (n = void 0) : ((Re = n), (n = a)),
                      n !== a ? (e = 'ESCAPE') : ((Re = e), (e = a)))
                    : ((Re = e), (e = a)),
                  e
                );
              }
              function Ot() {
                var e, r, n, s;
                return (
                  (e = Re),
                  'not' === t.substr(Re, 3).toLowerCase()
                    ? ((r = t.substr(Re, 3)), (Re += 3))
                    : ((r = a), 0 === Ue && je(W)),
                  r !== a
                    ? ((n = Re),
                      Ue++,
                      (s = it()),
                      Ue--,
                      s === a ? (n = void 0) : ((Re = n), (n = a)),
                      n !== a ? (e = 'NOT') : ((Re = e), (e = a)))
                    : ((Re = e), (e = a)),
                  e
                );
              }
              function Dt() {
                var e, r, n, s;
                return (
                  (e = Re),
                  'and' === t.substr(Re, 3).toLowerCase()
                    ? ((r = t.substr(Re, 3)), (Re += 3))
                    : ((r = a), 0 === Ue && je(Z)),
                  r !== a
                    ? ((n = Re),
                      Ue++,
                      (s = it()),
                      Ue--,
                      s === a ? (n = void 0) : ((Re = n), (n = a)),
                      n !== a ? (e = 'AND') : ((Re = e), (e = a)))
                    : ((Re = e), (e = a)),
                  e
                );
              }
              function Rt() {
                var e, r, n, s;
                return (
                  (e = Re),
                  'or' === t.substr(Re, 2).toLowerCase()
                    ? ((r = t.substr(Re, 2)), (Re += 2))
                    : ((r = a), 0 === Ue && je(K)),
                  r !== a
                    ? ((n = Re),
                      Ue++,
                      (s = it()),
                      Ue--,
                      s === a ? (n = void 0) : ((Re = n), (n = a)),
                      n !== a ? (e = 'OR') : ((Re = e), (e = a)))
                    : ((Re = e), (e = a)),
                  e
                );
              }
              function Jt() {
                var e, r, n, s;
                return (
                  (e = Re),
                  'between' === t.substr(Re, 7).toLowerCase()
                    ? ((r = t.substr(Re, 7)), (Re += 7))
                    : ((r = a), 0 === Ue && je(Q)),
                  r !== a
                    ? ((n = Re),
                      Ue++,
                      (s = it()),
                      Ue--,
                      s === a ? (n = void 0) : ((Re = n), (n = a)),
                      n !== a ? (e = 'BETWEEN') : ((Re = e), (e = a)))
                    : ((Re = e), (e = a)),
                  e
                );
              }
              function kt() {
                var e, r, n, s;
                return (
                  (e = Re),
                  'from' === t.substr(Re, 4).toLowerCase()
                    ? ((r = t.substr(Re, 4)), (Re += 4))
                    : ((r = a), 0 === Ue && je(X)),
                  r !== a
                    ? ((n = Re),
                      Ue++,
                      (s = it()),
                      Ue--,
                      s === a ? (n = void 0) : ((Re = n), (n = a)),
                      n !== a ? (e = 'FROM') : ((Re = e), (e = a)))
                    : ((Re = e), (e = a)),
                  e
                );
              }
              function $t() {
                var e, r, n, s;
                return (
                  (e = Re),
                  'for' === t.substr(Re, 3).toLowerCase()
                    ? ((r = t.substr(Re, 3)), (Re += 3))
                    : ((r = a), 0 === Ue && je(ee)),
                  r !== a
                    ? ((n = Re),
                      Ue++,
                      (s = it()),
                      Ue--,
                      s === a ? (n = void 0) : ((Re = n), (n = a)),
                      n !== a ? (e = 'FOR') : ((Re = e), (e = a)))
                    : ((Re = e), (e = a)),
                  e
                );
              }
              function Ut() {
                var e, r, n, s;
                return (
                  (e = Re),
                  'substring' === t.substr(Re, 9).toLowerCase()
                    ? ((r = t.substr(Re, 9)), (Re += 9))
                    : ((r = a), 0 === Ue && je(te)),
                  r !== a
                    ? ((n = Re),
                      Ue++,
                      (s = it()),
                      Ue--,
                      s === a ? (n = void 0) : ((Re = n), (n = a)),
                      n !== a ? (e = 'SUBSTRING') : ((Re = e), (e = a)))
                    : ((Re = e), (e = a)),
                  e
                );
              }
              function Ht() {
                var e, r, n, s;
                return (
                  (e = Re),
                  'extract' === t.substr(Re, 7).toLowerCase()
                    ? ((r = t.substr(Re, 7)), (Re += 7))
                    : ((r = a), 0 === Ue && je(re)),
                  r !== a
                    ? ((n = Re),
                      Ue++,
                      (s = it()),
                      Ue--,
                      s === a ? (n = void 0) : ((Re = n), (n = a)),
                      n !== a ? (e = 'EXTRACT') : ((Re = e), (e = a)))
                    : ((Re = e), (e = a)),
                  e
                );
              }
              function qt() {
                var e, r, n, s;
                return (
                  (e = Re),
                  'trim' === t.substr(Re, 4).toLowerCase()
                    ? ((r = t.substr(Re, 4)), (Re += 4))
                    : ((r = a), 0 === Ue && je(ne)),
                  r !== a
                    ? ((n = Re),
                      Ue++,
                      (s = it()),
                      Ue--,
                      s === a ? (n = void 0) : ((Re = n), (n = a)),
                      n !== a ? (e = 'TRIM') : ((Re = e), (e = a)))
                    : ((Re = e), (e = a)),
                  e
                );
              }
              function Vt() {
                var e, r, n, s;
                return (
                  (e = Re),
                  'position' === t.substr(Re, 8).toLowerCase()
                    ? ((r = t.substr(Re, 8)), (Re += 8))
                    : ((r = a), 0 === Ue && je(ae)),
                  r !== a
                    ? ((n = Re),
                      Ue++,
                      (s = it()),
                      Ue--,
                      s === a ? (n = void 0) : ((Re = n), (n = a)),
                      n !== a ? (e = 'POSITION') : ((Re = e), (e = a)))
                    : ((Re = e), (e = a)),
                  e
                );
              }
              function Bt() {
                var e, r, n, s;
                return (
                  (e = Re),
                  'timestamp' === t.substr(Re, 9).toLowerCase()
                    ? ((r = t.substr(Re, 9)), (Re += 9))
                    : ((r = a), 0 === Ue && je(se)),
                  r !== a
                    ? ((n = Re),
                      Ue++,
                      (s = it()),
                      Ue--,
                      s === a ? (n = void 0) : ((Re = n), (n = a)),
                      n !== a ? (e = 'TIMESTAMP') : ((Re = e), (e = a)))
                    : ((Re = e), (e = a)),
                  e
                );
              }
              function jt() {
                var e, r, n, s;
                return (
                  (e = Re),
                  'date' === t.substr(Re, 4).toLowerCase()
                    ? ((r = t.substr(Re, 4)), (Re += 4))
                    : ((r = a), 0 === Ue && je(ue)),
                  r !== a
                    ? ((n = Re),
                      Ue++,
                      (s = it()),
                      Ue--,
                      s === a ? (n = void 0) : ((Re = n), (n = a)),
                      n !== a ? (e = 'DATE') : ((Re = e), (e = a)))
                    : ((Re = e), (e = a)),
                  e
                );
              }
              function Yt() {
                var e, r, n, s;
                return (
                  (e = Re),
                  'leading' === t.substr(Re, 7).toLowerCase()
                    ? ((r = t.substr(Re, 7)), (Re += 7))
                    : ((r = a), 0 === Ue && je(ie)),
                  r !== a
                    ? ((n = Re),
                      Ue++,
                      (s = it()),
                      Ue--,
                      s === a ? (n = void 0) : ((Re = n), (n = a)),
                      n !== a ? (e = 'LEADING') : ((Re = e), (e = a)))
                    : ((Re = e), (e = a)),
                  e
                );
              }
              function zt() {
                var e, r, n, s;
                return (
                  (e = Re),
                  'trailing' === t.substr(Re, 8).toLowerCase()
                    ? ((r = t.substr(Re, 8)), (Re += 8))
                    : ((r = a), 0 === Ue && je(oe)),
                  r !== a
                    ? ((n = Re),
                      Ue++,
                      (s = it()),
                      Ue--,
                      s === a ? (n = void 0) : ((Re = n), (n = a)),
                      n !== a ? (e = 'TRAILING') : ((Re = e), (e = a)))
                    : ((Re = e), (e = a)),
                  e
                );
              }
              function Gt() {
                var e, r, n, s;
                return (
                  (e = Re),
                  'both' === t.substr(Re, 4).toLowerCase()
                    ? ((r = t.substr(Re, 4)), (Re += 4))
                    : ((r = a), 0 === Ue && je(le)),
                  r !== a
                    ? ((n = Re),
                      Ue++,
                      (s = it()),
                      Ue--,
                      s === a ? (n = void 0) : ((Re = n), (n = a)),
                      n !== a ? (e = 'BOTH') : ((Re = e), (e = a)))
                    : ((Re = e), (e = a)),
                  e
                );
              }
              function Wt() {
                var e, r, n, s;
                return (
                  (e = Re),
                  'to' === t.substr(Re, 2).toLowerCase()
                    ? ((r = t.substr(Re, 2)), (Re += 2))
                    : ((r = a), 0 === Ue && je(ce)),
                  r !== a
                    ? ((n = Re),
                      Ue++,
                      (s = it()),
                      Ue--,
                      s === a ? (n = void 0) : ((Re = n), (n = a)),
                      n !== a ? (e = 'TO') : ((Re = e), (e = a)))
                    : ((Re = e), (e = a)),
                  e
                );
              }
              function Zt() {
                var e, r, n, s;
                return (
                  (e = Re),
                  'interval' === t.substr(Re, 8).toLowerCase()
                    ? ((r = t.substr(Re, 8)), (Re += 8))
                    : ((r = a), 0 === Ue && je(pe)),
                  r !== a
                    ? ((n = Re),
                      Ue++,
                      (s = it()),
                      Ue--,
                      s === a ? (n = void 0) : ((Re = n), (n = a)),
                      n !== a ? (e = 'INTERVAL') : ((Re = e), (e = a)))
                    : ((Re = e), (e = a)),
                  e
                );
              }
              function Kt() {
                var e, r, n, s;
                return (
                  (e = Re),
                  'year' === t.substr(Re, 4).toLowerCase()
                    ? ((r = t.substr(Re, 4)), (Re += 4))
                    : ((r = a), 0 === Ue && je(fe)),
                  r !== a
                    ? ((n = Re),
                      Ue++,
                      (s = it()),
                      Ue--,
                      s === a ? (n = void 0) : ((Re = n), (n = a)),
                      n !== a ? (e = 'YEAR') : ((Re = e), (e = a)))
                    : ((Re = e), (e = a)),
                  e
                );
              }
              function Qt() {
                var e, r, n, s;
                return (
                  (e = Re),
                  'month' === t.substr(Re, 5).toLowerCase()
                    ? ((r = t.substr(Re, 5)), (Re += 5))
                    : ((r = a), 0 === Ue && je(ve)),
                  r !== a
                    ? ((n = Re),
                      Ue++,
                      (s = it()),
                      Ue--,
                      s === a ? (n = void 0) : ((Re = n), (n = a)),
                      n !== a ? (e = 'MONTH') : ((Re = e), (e = a)))
                    : ((Re = e), (e = a)),
                  e
                );
              }
              function Xt() {
                var e, r, n, s;
                return (
                  (e = Re),
                  'day' === t.substr(Re, 3).toLowerCase()
                    ? ((r = t.substr(Re, 3)), (Re += 3))
                    : ((r = a), 0 === Ue && je(he)),
                  r !== a
                    ? ((n = Re),
                      Ue++,
                      (s = it()),
                      Ue--,
                      s === a ? (n = void 0) : ((Re = n), (n = a)),
                      n !== a ? (e = 'DAY') : ((Re = e), (e = a)))
                    : ((Re = e), (e = a)),
                  e
                );
              }
              function er() {
                var e, r, n, s;
                return (
                  (e = Re),
                  'hour' === t.substr(Re, 4).toLowerCase()
                    ? ((r = t.substr(Re, 4)), (Re += 4))
                    : ((r = a), 0 === Ue && je(de)),
                  r !== a
                    ? ((n = Re),
                      Ue++,
                      (s = it()),
                      Ue--,
                      s === a ? (n = void 0) : ((Re = n), (n = a)),
                      n !== a ? (e = 'HOUR') : ((Re = e), (e = a)))
                    : ((Re = e), (e = a)),
                  e
                );
              }
              function tr() {
                var e, r, n, s;
                return (
                  (e = Re),
                  'minute' === t.substr(Re, 6).toLowerCase()
                    ? ((r = t.substr(Re, 6)), (Re += 6))
                    : ((r = a), 0 === Ue && je(me)),
                  r !== a
                    ? ((n = Re),
                      Ue++,
                      (s = it()),
                      Ue--,
                      s === a ? (n = void 0) : ((Re = n), (n = a)),
                      n !== a ? (e = 'MINUTE') : ((Re = e), (e = a)))
                    : ((Re = e), (e = a)),
                  e
                );
              }
              function rr() {
                var e, r, n, s;
                return (
                  (e = Re),
                  'second' === t.substr(Re, 6).toLowerCase()
                    ? ((r = t.substr(Re, 6)), (Re += 6))
                    : ((r = a), 0 === Ue && je(ge)),
                  r !== a
                    ? ((n = Re),
                      Ue++,
                      (s = it()),
                      Ue--,
                      s === a ? (n = void 0) : ((Re = n), (n = a)),
                      n !== a ? (e = 'SECOND') : ((Re = e), (e = a)))
                    : ((Re = e), (e = a)),
                  e
                );
              }
              function nr() {
                var e, r, n, s;
                return (
                  (e = Re),
                  'case' === t.substr(Re, 4).toLowerCase()
                    ? ((r = t.substr(Re, 4)), (Re += 4))
                    : ((r = a), 0 === Ue && je(we)),
                  r !== a
                    ? ((n = Re),
                      Ue++,
                      (s = it()),
                      Ue--,
                      s === a ? (n = void 0) : ((Re = n), (n = a)),
                      n !== a ? (e = 'CASE') : ((Re = e), (e = a)))
                    : ((Re = e), (e = a)),
                  e
                );
              }
              function ar() {
                var e, r, n, s;
                return (
                  (e = Re),
                  'end' === t.substr(Re, 3).toLowerCase()
                    ? ((r = t.substr(Re, 3)), (Re += 3))
                    : ((r = a), 0 === Ue && je(ye)),
                  r !== a
                    ? ((n = Re),
                      Ue++,
                      (s = it()),
                      Ue--,
                      s === a ? (n = void 0) : ((Re = n), (n = a)),
                      n !== a ? (e = 'END') : ((Re = e), (e = a)))
                    : ((Re = e), (e = a)),
                  e
                );
              }
              function sr() {
                var e, r, n, s;
                return (
                  (e = Re),
                  'when' === t.substr(Re, 4).toLowerCase()
                    ? ((r = t.substr(Re, 4)), (Re += 4))
                    : ((r = a), 0 === Ue && je(Ne)),
                  r !== a
                    ? ((n = Re),
                      Ue++,
                      (s = it()),
                      Ue--,
                      s === a ? (n = void 0) : ((Re = n), (n = a)),
                      n !== a ? (e = 'WHEN') : ((Re = e), (e = a)))
                    : ((Re = e), (e = a)),
                  e
                );
              }
              function ur() {
                var e, r, n, s;
                return (
                  (e = Re),
                  'then' === t.substr(Re, 4).toLowerCase()
                    ? ((r = t.substr(Re, 4)), (Re += 4))
                    : ((r = a), 0 === Ue && je(be)),
                  r !== a
                    ? ((n = Re),
                      Ue++,
                      (s = it()),
                      Ue--,
                      s === a ? (n = void 0) : ((Re = n), (n = a)),
                      n !== a ? (e = 'THEN') : ((Re = e), (e = a)))
                    : ((Re = e), (e = a)),
                  e
                );
              }
              function ir() {
                var e, r, n, s;
                return (
                  (e = Re),
                  'else' === t.substr(Re, 4).toLowerCase()
                    ? ((r = t.substr(Re, 4)), (Re += 4))
                    : ((r = a), 0 === Ue && je(Te)),
                  r !== a
                    ? ((n = Re),
                      Ue++,
                      (s = it()),
                      Ue--,
                      s === a ? (n = void 0) : ((Re = n), (n = a)),
                      n !== a ? (e = 'ELSE') : ((Re = e), (e = a)))
                    : ((Re = e), (e = a)),
                  e
                );
              }
              function or() {
                var e;
                return (
                  44 === t.charCodeAt(Re)
                    ? ((e = ','), Re++)
                    : ((e = a), 0 === Ue && je(xe)),
                  e
                );
              }
              function lr() {
                var e;
                return (
                  40 === t.charCodeAt(Re)
                    ? ((e = '('), Re++)
                    : ((e = a), 0 === Ue && je(_e)),
                  e
                );
              }
              function cr() {
                var e;
                return (
                  41 === t.charCodeAt(Re)
                    ? ((e = ')'), Re++)
                    : ((e = a), 0 === Ue && je(Ae)),
                  e
                );
              }
              function pr() {
                var e, t;
                for (e = [], t = fr(); t !== a; ) e.push(t), (t = fr());
                return e;
              }
              function fr() {
                var e;
                return (
                  m.test(t.charAt(Re))
                    ? ((e = t.charAt(Re)), Re++)
                    : ((e = a), 0 === Ue && je(Ie)),
                  e
                );
              }
              function vr() {
                var e, r, n, s;
                if (((e = Re), (r = st()) !== a && (r = r), (e = r) === a))
                  if (
                    ((e = Re),
                    96 === t.charCodeAt(Re)
                      ? ((r = '`'), Re++)
                      : ((r = a), 0 === Ue && je(Ee)),
                    r !== a)
                  ) {
                    if (
                      ((n = []),
                      g.test(t.charAt(Re))
                        ? ((s = t.charAt(Re)), Re++)
                        : ((s = a), 0 === Ue && je(Se)),
                      s !== a)
                    )
                      for (; s !== a; )
                        n.push(s),
                          g.test(t.charAt(Re))
                            ? ((s = t.charAt(Re)), Re++)
                            : ((s = a), 0 === Ue && je(Se));
                    else n = a;
                    n !== a
                      ? (96 === t.charCodeAt(Re)
                          ? ((s = '`'), Re++)
                          : ((s = a), 0 === Ue && je(Ee)),
                        s !== a
                          ? (e = (function (e) {
                              return e.join('');
                            })(n))
                          : ((Re = e), (e = a)))
                      : ((Re = e), (e = a));
                  } else (Re = e), (e = a);
                return e;
              }
              function hr(e, t, r, n) {
                var a = { type: 'binary_expr', operator: e, left: t, right: r };
                return void 0 !== n && (a.escape = n), a;
              }
              function dr(e, t) {
                for (var r = e, n = 0; n < t.length; n++)
                  r = hr(t[n][1], r, t[n][3]);
                return r;
              }
              if ((n = i()) !== a && Re === t.length) return n;
              throw (
                (n !== a && Re < t.length && je({ type: 'end' }),
                (function (t, r, n) {
                  return new e(e.buildMessage(t, r), t, r, n);
                })(
                  $e,
                  ke < t.length ? t.charAt(ke) : null,
                  ke < t.length ? Be(ke, ke + 1) : Be(ke, ke),
                ))
              );
            },
          }
        );
      }),
        (v = d).exports && (v.exports = h());
      const m = /^(\d{4})-(\d{1,2})-(\d{1,2})$/,
        g =
          /^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2}(\.[0-9]+)?)$/,
        w =
          /^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2}):(\d{1,2}(\.[0-9]+)?)(\+|\-)(\d{1,2}):(\d{1,2})$/,
        y =
          /^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2})(\+|\-)(\d{1,2}):(\d{1,2})$/,
        N = /^(\d{4})-(\d{1,2})-(\d{1,2}) (\d{1,2}):(\d{1,2})$/,
        b = new Set(['current_timestamp', 'current_date', 'current_time']);
      function T(e, t) {
        return (e += '').length >= t
          ? e
          : new Array(t - e.length + 1).join('0') + e;
      }
      function x(
        e,
        t,
        r = '0',
        n = '0',
        a = '0',
        s = '0',
        u = '',
        i = '0',
        o = '0',
      ) {
        if ('+' === u || '-' === u) {
          const l = `${T(parseInt(e, 10), 4)}-${T(parseInt(t, 10), 2)}-${T(
            parseInt(r, 10),
            2,
          )}`;
          let c = '';
          parseFloat(s) < 10 && (c = '0');
          const p = `${T(parseInt(n, 10), 2)}:${T(parseInt(a, 10), 2)}:${
              c + parseFloat(s).toString()
            }`,
            f = `${u}${T(parseInt(i, 10), 2)}:${T(parseInt(o, 10), 2)}`;
          return new Date(l + 'T' + p + f);
        }
        return new Date(
          parseInt(e, 10),
          parseInt(t, 10) - 1,
          parseInt(r, 10),
          parseInt(n, 10),
          parseInt(a, 10),
          parseFloat(s),
        );
      }
      class _ {
        static makeBool(e) {
          return S(e);
        }
        static featureValue(e, t, r, n) {
          return U(e, t, r, n);
        }
        static equalsNull(e) {
          return null === e;
        }
        static applyLike(e, t, r) {
          return R(e, t, r);
        }
        static ensureArray(e) {
          return C(e);
        }
        static applyIn(e, t) {
          return M(e, t);
        }
        static currentDate() {
          const e = new Date();
          return e.setHours(0, 0, 0, 0), e;
        }
        static makeSqlInterval(e, t, r) {
          return l.createFromValueAndQualifer(e, t, r);
        }
        static convertInterval(e) {
          return e instanceof l ? e.valueInMilliseconds() : e;
        }
        static currentTimestamp() {
          return new Date();
        }
        static compare(e, t, r) {
          return k(e, t, r);
        }
        static calculate(e, t, r) {
          return $(e, t, r);
        }
        static makeComparable(e) {
          return J(e);
        }
        static evaluateFunction(e, t) {
          return c(e, t);
        }
        static lookup(e, t) {
          const r = t[e];
          return void 0 === r ? null : r;
        }
        static between(e, t) {
          return null == e || null == t[0] || null == t[1]
            ? null
            : e >= t[0] && e <= t[1];
        }
        static notbetween(e, t) {
          return null == e || null == t[0] || null == t[1]
            ? null
            : e < t[0] || e > t[1];
        }
        static ternaryNot(e) {
          return P(e);
        }
        static ternaryAnd(e, t) {
          return F(e, t);
        }
        static ternaryOr(e, t) {
          return L(e, t);
        }
      }
      class A {
        constructor(e, t) {
          (this.fieldsIndex = t),
            (this.datefields = {}),
            (this.parameters = {}),
            (this._hasDateFunctions = void 0),
            (this.parseTree = class {
              static parse(e) {
                return d.exports.parse(e);
              }
            }.parse(e));
          const {
            isStandardized: r,
            isAggregate: n,
            referencedFieldNames: a,
          } = this._extractExpressionInfo(t);
          (this.referencedFieldNames = a),
            (this.isStandardized = r),
            (this.isAggregate = n);
        }
        static create(e, t) {
          return new A(e, t);
        }
        get fieldNames() {
          return this.referencedFieldNames;
        }
        testSet(e, t = H) {
          const r = {};
          for (const n of this.fieldNames)
            r[n] = e.map((e) => t.getAttribute(e, n));
          return !!this._evaluateNode(this.parseTree, { attributes: r }, H);
        }
        calculateValue(e, t = H) {
          const r = this._evaluateNode(this.parseTree, e, t);
          return r instanceof l ? r.valueInMilliseconds() / 864e5 : r;
        }
        calculateValueCompiled(e, t = H) {
          return null != this.parseTree._compiledVersion
            ? this.parseTree._compiledVersion(
                e,
                this.parameters,
                t,
                this.datefields,
              )
            : (0, n.Z)('esri-csp-restrictions')
            ? this.calculateValue(e, t)
            : (this._compileMe(),
              this.parseTree._compiledVersion(
                e,
                this.parameters,
                t,
                this.datefields,
              ));
        }
        testFeature(e, t = H) {
          return !!this._evaluateNode(this.parseTree, e, t);
        }
        testFeatureCompiled(e, t = H) {
          return null != this.parseTree._compiledVersion
            ? !!this.parseTree._compiledVersion(
                e,
                this.parameters,
                t,
                this.datefields,
              )
            : (0, n.Z)('esri-csp-restrictions')
            ? this.testFeature(e, t)
            : (this._compileMe(),
              !!this.parseTree._compiledVersion(
                e,
                this.parameters,
                t,
                this.datefields,
              ));
        }
        get hasDateFunctions() {
          return (
            null != this._hasDateFunctions ||
              ((this._hasDateFunctions = !1),
              this._visitAll(this.parseTree, (e) => {
                'current_time' === e.type
                  ? (this._hasDateFunctions = !0)
                  : 'function' === e.type &&
                    (this._hasDateFunctions =
                      this._hasDateFunctions || b.has(e.name.toLowerCase()));
              })),
            this._hasDateFunctions
          );
        }
        getFunctions() {
          const e = new Set();
          return (
            this._visitAll(this.parseTree, (t) => {
              'function' === t.type && e.add(t.name.toLowerCase());
            }),
            Array.from(e)
          );
        }
        getExpressions() {
          const e = new Map();
          return (
            this._visitAll(this.parseTree, (t) => {
              if ('function' === t.type) {
                const r = t.name.toLowerCase(),
                  n = t.args.value[0];
                if ('column_ref' === n.type) {
                  const t = n.column,
                    a = `${r}-${t}`;
                  e.has(a) || e.set(a, { aggregateType: r, field: t });
                }
              }
            }),
            [...e.values()]
          );
        }
        getVariables() {
          const e = new Set();
          return (
            this._visitAll(this.parseTree, (t) => {
              'param' === t.type && e.add(t.value.toLowerCase());
            }),
            Array.from(e)
          );
        }
        _compileMe() {
          const e =
            'return this.convertInterval(' +
            this.evaluateNodeToJavaScript(this.parseTree) +
            ')';
          this.parseTree._compiledVersion = new Function(
            'feature',
            'lookups',
            'attributeAdapter',
            'datefields',
            e,
          ).bind(_);
        }
        _extractExpressionInfo(e) {
          const t = [],
            r = new Set();
          let n = !0,
            s = !0;
          return (
            this._visitAll(this.parseTree, (u) => {
              switch (u.type) {
                case 'column_ref': {
                  const n = e.get(u.column);
                  let a, s;
                  n
                    ? (a = s = n.name)
                    : ((s = u.column), (a = s.toLowerCase())),
                    !n ||
                      ('date' !== n.type && 'esriFieldTypeDate' !== n.type) ||
                      (this.datefields[n.name] = 1),
                    r.has(a) || (r.add(a), t.push(s)),
                    (u.column = s);
                  break;
                }
                case 'function': {
                  const { name: e, args: t } = u,
                    r = t.value.length;
                  n && (n = p(e, r)), s && (s = a(e, r));
                  break;
                }
              }
            }),
            {
              referencedFieldNames: Array.from(t),
              isStandardized: n,
              isAggregate: s,
            }
          );
        }
        _visitAll(e, t) {
          if (null != e)
            switch ((t(e), e.type)) {
              case 'when_clause':
                this._visitAll(e.operand, t), this._visitAll(e.value, t);
                break;
              case 'case_expression':
                for (const r of e.clauses) this._visitAll(r, t);
                'simple' === e.format && this._visitAll(e.operand, t),
                  null !== e.else && this._visitAll(e.else, t);
                break;
              case 'expr_list':
                for (const r of e.value) this._visitAll(r, t);
                break;
              case 'unary_expr':
                this._visitAll(e.expr, t);
                break;
              case 'binary_expr':
                this._visitAll(e.left, t), this._visitAll(e.right, t);
                break;
              case 'function':
                this._visitAll(e.args, t);
            }
        }
        evaluateNodeToJavaScript(e) {
          switch (e.type) {
            case 'interval':
              return (
                'this.makeSqlInterval(' +
                this.evaluateNodeToJavaScript(e.value) +
                ', ' +
                JSON.stringify(e.qualifier) +
                ',' +
                JSON.stringify(e.op) +
                ')'
              );
            case 'case_expression': {
              let t = '';
              if ('simple' === e.format) {
                const r =
                  'this.makeComparable(' +
                  this.evaluateNodeToJavaScript(e.operand) +
                  ')';
                t = '( ';
                for (let n = 0; n < e.clauses.length; n++)
                  t +=
                    ' (' +
                    r +
                    ' === this.makeComparable(' +
                    this.evaluateNodeToJavaScript(e.clauses[n].operand) +
                    ')) ? (' +
                    this.evaluateNodeToJavaScript(e.clauses[n].value) +
                    ') : ';
                null !== e.else
                  ? (t += this.evaluateNodeToJavaScript(e.else))
                  : (t += 'null'),
                  (t += ' )');
              } else {
                t = '( ';
                for (let r = 0; r < e.clauses.length; r++)
                  t +=
                    ' this.makeBool(' +
                    this.evaluateNodeToJavaScript(e.clauses[r].operand) +
                    ')===true ? (' +
                    this.evaluateNodeToJavaScript(e.clauses[r].value) +
                    ') : ';
                null !== e.else
                  ? (t += this.evaluateNodeToJavaScript(e.else))
                  : (t += 'null'),
                  (t += ' )');
              }
              return t;
            }
            case 'param':
              return (
                'this.lookup(' +
                JSON.stringify(e.value.toLowerCase()) +
                ',lookups)'
              );
            case 'expr_list': {
              let t = '[';
              for (const r of e.value)
                '[' !== t && (t += ','),
                  (t += this.evaluateNodeToJavaScript(r));
              return (t += ']'), t;
            }
            case 'unary_expr':
              return (
                'this.ternaryNot(' + this.evaluateNodeToJavaScript(e.expr) + ')'
              );
            case 'binary_expr':
              switch (e.operator) {
                case 'AND':
                  return (
                    'this.ternaryAnd(' +
                    this.evaluateNodeToJavaScript(e.left) +
                    ',' +
                    this.evaluateNodeToJavaScript(e.right) +
                    ' )'
                  );
                case 'OR':
                  return (
                    'this.ternaryOr(' +
                    this.evaluateNodeToJavaScript(e.left) +
                    ',' +
                    this.evaluateNodeToJavaScript(e.right) +
                    ' )'
                  );
                case 'IS':
                  if ('null' !== e.right.type)
                    throw new Error('Unsupported RHS for IS');
                  return (
                    'this.equalsNull(' +
                    this.evaluateNodeToJavaScript(e.left) +
                    ')'
                  );
                case 'ISNOT':
                  if ('null' !== e.right.type)
                    throw new Error('Unsupported RHS for IS');
                  return (
                    '(!(this.equalsNull(' +
                    this.evaluateNodeToJavaScript(e.left) +
                    ')))'
                  );
                case 'IN':
                  return (
                    'this.applyIn(' +
                    this.evaluateNodeToJavaScript(e.left) +
                    ',this.ensureArray(' +
                    this.evaluateNodeToJavaScript(e.right) +
                    '))'
                  );
                case 'NOT IN':
                  return (
                    'this.ternaryNot(this.applyIn(' +
                    this.evaluateNodeToJavaScript(e.left) +
                    ',this.ensureArray(' +
                    this.evaluateNodeToJavaScript(e.right) +
                    ')))'
                  );
                case 'BETWEEN':
                  return (
                    'this.between(' +
                    this.evaluateNodeToJavaScript(e.left) +
                    ',' +
                    this.evaluateNodeToJavaScript(e.right) +
                    ')'
                  );
                case 'NOTBETWEEN':
                  return (
                    'this.notbetween(' +
                    this.evaluateNodeToJavaScript(e.left) +
                    ',' +
                    this.evaluateNodeToJavaScript(e.right) +
                    ')'
                  );
                case 'LIKE':
                  return (
                    'this.applyLike(' +
                    this.evaluateNodeToJavaScript(e.left) +
                    ',' +
                    this.evaluateNodeToJavaScript(e.right) +
                    ',' +
                    JSON.stringify(e.escape) +
                    ')'
                  );
                case 'NOT LIKE':
                  return (
                    'this.ternaryNot(this.applyLike(' +
                    this.evaluateNodeToJavaScript(e.left) +
                    ',' +
                    this.evaluateNodeToJavaScript(e.right) +
                    ',' +
                    JSON.stringify(e.escape) +
                    '))'
                  );
                case '<>':
                case '<':
                case '>':
                case '>=':
                case '<=':
                case '=':
                  return (
                    'this.compare(' +
                    JSON.stringify(e.operator) +
                    ',' +
                    this.evaluateNodeToJavaScript(e.left) +
                    ',' +
                    this.evaluateNodeToJavaScript(e.right) +
                    ')'
                  );
                case '*':
                case '-':
                case '+':
                case '/':
                  return (
                    'this.calculate(' +
                    JSON.stringify(e.operator) +
                    ',' +
                    this.evaluateNodeToJavaScript(e.left) +
                    ',' +
                    this.evaluateNodeToJavaScript(e.right) +
                    ')'
                  );
              }
              throw new Error('Not Supported Operator ' + e.operator);
            case 'null':
            case 'bool':
            case 'string':
            case 'number':
              return JSON.stringify(e.value);
            case 'date':
              return '(new Date(' + E(e.value).getTime().toString() + '))';
            case 'timestamp':
              return '(new Date(' + I(e.value).getTime().toString() + '))';
            case 'current_time':
              return 'date' === e.mode
                ? 'this.currentDate()'
                : 'this.currentTimestamp()';
            case 'column_ref':
              return (
                'this.featureValue(feature,' +
                JSON.stringify(e.column) +
                ',datefields,attributeAdapter)'
              );
            case 'function':
              return (
                'this.evaluateFunction(' +
                JSON.stringify(e.name) +
                ',' +
                this.evaluateNodeToJavaScript(e.args) +
                ')'
              );
          }
          throw new Error('Unsupported sql syntax ' + e.type);
        }
        _evaluateNode(e, t, r) {
          switch (e.type) {
            case 'interval': {
              const n = this._evaluateNode(e.value, t, r);
              return l.createFromValueAndQualifer(n, e.qualifier, e.op);
            }
            case 'case_expression':
              if ('simple' === e.format) {
                const n = J(this._evaluateNode(e.operand, t, r));
                for (let a = 0; a < e.clauses.length; a++)
                  if (n === J(this._evaluateNode(e.clauses[a].operand, t, r)))
                    return this._evaluateNode(e.clauses[a].value, t, r);
                if (null !== e.else) return this._evaluateNode(e.else, t, r);
              } else {
                for (let n = 0; n < e.clauses.length; n++)
                  if (S(this._evaluateNode(e.clauses[n].operand, t, r)))
                    return this._evaluateNode(e.clauses[n].value, t, r);
                if (null !== e.else) return this._evaluateNode(e.else, t, r);
              }
              return null;
            case 'param':
              return this.parameters[e.value.toLowerCase()];
            case 'expr_list': {
              const n = [];
              for (const a of e.value) n.push(this._evaluateNode(a, t, r));
              return n;
            }
            case 'unary_expr':
              return P(this._evaluateNode(e.expr, t, r));
            case 'binary_expr':
              switch (e.operator) {
                case 'AND':
                  return F(
                    this._evaluateNode(e.left, t, r),
                    this._evaluateNode(e.right, t, r),
                  );
                case 'OR':
                  return L(
                    this._evaluateNode(e.left, t, r),
                    this._evaluateNode(e.right, t, r),
                  );
                case 'IS':
                  if ('null' !== e.right.type)
                    throw new Error('Unsupported RHS for IS');
                  return null === this._evaluateNode(e.left, t, r);
                case 'ISNOT':
                  if ('null' !== e.right.type)
                    throw new Error('Unsupported RHS for IS');
                  return null !== this._evaluateNode(e.left, t, r);
                case 'IN': {
                  const n = C(this._evaluateNode(e.right, t, r));
                  return M(this._evaluateNode(e.left, t, r), n);
                }
                case 'NOT IN': {
                  const n = C(this._evaluateNode(e.right, t, r));
                  return P(M(this._evaluateNode(e.left, t, r), n));
                }
                case 'BETWEEN': {
                  const n = this._evaluateNode(e.left, t, r),
                    a = this._evaluateNode(e.right, t, r);
                  return null == n || null == a[0] || null == a[1]
                    ? null
                    : n >= J(a[0]) && n <= J(a[1]);
                }
                case 'NOTBETWEEN': {
                  const n = this._evaluateNode(e.left, t, r),
                    a = this._evaluateNode(e.right, t, r);
                  return null == n || null == a[0] || null == a[1]
                    ? null
                    : n < J(a[0]) || n > J(a[1]);
                }
                case 'LIKE':
                  return R(
                    this._evaluateNode(e.left, t, r),
                    this._evaluateNode(e.right, t, r),
                    e.escape,
                  );
                case 'NOT LIKE':
                  return P(
                    R(
                      this._evaluateNode(e.left, t, r),
                      this._evaluateNode(e.right, t, r),
                      e.escape,
                    ),
                  );
                case '<>':
                case '<':
                case '>':
                case '>=':
                case '<=':
                case '=':
                  return k(
                    e.operator,
                    this._evaluateNode(e.left, t, r),
                    this._evaluateNode(e.right, t, r),
                  );
                case '-':
                case '+':
                case '*':
                case '/':
                  return $(
                    e.operator,
                    this._evaluateNode(e.left, t, r),
                    this._evaluateNode(e.right, t, r),
                  );
              }
            case 'null':
            case 'bool':
            case 'string':
            case 'number':
              return e.value;
            case 'date':
              return E(e.value);
            case 'timestamp':
              return I(e.value);
            case 'current_time': {
              const t = new Date();
              return 'date' === e.mode && t.setHours(0, 0, 0, 0), t;
            }
            case 'column_ref':
              return U(t, e.column, this.datefields, r);
            case 'function': {
              const n = this._evaluateNode(e.args, t, r);
              return this.isAggregate
                ? (function (e, t) {
                    const r = s[e.toLowerCase()];
                    if (null == r) throw new Error('Function Not Recognised');
                    if (t.length < r.minParams || t.length > r.maxParams)
                      throw new Error(
                        `Invalid Parameter count for call to ${e.toUpperCase()}`,
                      );
                    return r.evaluate(t);
                  })(e.name, n)
                : c(e.name, n);
            }
          }
          throw new Error('Unsupported sql syntax ' + e.type);
        }
      }
      function I(e) {
        let t = g.exec(e);
        if (null !== t) {
          const [, e, r, n, a, s, u] = t;
          return x(e, r, n, a, s, u);
        }
        if (((t = w.exec(e)), null !== t)) {
          const [, e, r, n, a, s, u, i, o, l] = t;
          return x(e, r, n, a, s, u, i, o, l);
        }
        if (((t = y.exec(e)), null !== t)) {
          const [, e, r, n, a, s, u, i, o] = t;
          return x(e, r, n, a, s, '0', u, i, o);
        }
        if (((t = N.exec(e)), null !== t)) {
          const [, e, r, n, a, s] = t;
          return x(e, r, n, a, s);
        }
        if (((t = m.exec(e)), null !== t)) {
          const [, e, r, n] = t;
          return x(e, r, n);
        }
        throw new Error('SQL Invalid Timestamp');
      }
      function E(e) {
        const t = m.exec(e);
        if (null === t) throw new Error('SQL Invalid Date');
        const [, r, n, a] = t;
        return new Date(parseInt(r, 10), parseInt(n, 10) - 1, parseInt(a, 10));
      }
      function S(e) {
        return !0 === e;
      }
      function C(e) {
        return Array.isArray(e) ? e : [e];
      }
      function P(e) {
        return null !== e ? !0 !== e : null;
      }
      function F(e, t) {
        return null != e && null != t
          ? !0 === e && !0 === t
          : !1 !== e && !1 !== t && null;
      }
      function L(e, t) {
        return null != e && null != t
          ? !0 === e || !0 === t
          : !0 === e || !0 === t || null;
      }
      function M(e, t) {
        if (null == e) return null;
        let r = !1;
        for (const n of t)
          if (null == n) r = null;
          else if (e === n) {
            r = !0;
            break;
          }
        return r;
      }
      const O = '-[]/{}()*+?.\\^$|';
      var D;
      function R(e, t, r) {
        return null == e
          ? null
          : (function (e, t) {
              const r = t;
              let n = '',
                a = D.Normal;
              for (let t = 0; t < e.length; t++) {
                const s = e.charAt(t);
                switch (a) {
                  case D.Normal:
                    s === r
                      ? (a = D.Escaped)
                      : O.includes(s)
                      ? (n += '\\' + s)
                      : (n += '%' === s ? '.*' : '_' === s ? '.' : s);
                    break;
                  case D.Escaped:
                    O.includes(s) ? (n += '\\' + s) : (n += s), (a = D.Normal);
                }
              }
              return new RegExp('^' + n + '$', 'm');
            })(t, r).test(e);
      }
      function J(e) {
        return e instanceof Date ? e.valueOf() : e;
      }
      function k(e, t, r) {
        if (null == t || null == r) return null;
        const n = J(t),
          a = J(r);
        switch (e) {
          case '<>':
            return n !== a;
          case '=':
            return n === a;
          case '>':
            return n > a;
          case '<':
            return n < a;
          case '>=':
            return n >= a;
          case '<=':
            return n <= a;
        }
      }
      function $(e, t, r) {
        if (t instanceof l)
          if (r instanceof Date)
            switch (e) {
              case '+':
                return new Date(t.valueInMilliseconds() + r.getTime());
              case '-':
                return t.valueInMilliseconds() - r.getTime();
              case '*':
                return t.valueInMilliseconds() * r.getTime();
              case '/':
                return t.valueInMilliseconds() / r.getTime();
            }
          else if (r instanceof l)
            switch (e) {
              case '+':
                return l.createFromMilliseconds(
                  t.valueInMilliseconds() + r.valueInMilliseconds(),
                );
              case '-':
                return l.createFromMilliseconds(
                  t.valueInMilliseconds() - r.valueInMilliseconds(),
                );
              case '*':
                return t.valueInMilliseconds() * r.valueInMilliseconds();
              case '/':
                return t.valueInMilliseconds() / r.valueInMilliseconds();
            }
          else t = t.valueInMilliseconds();
        else if (r instanceof l)
          if (t instanceof Date)
            switch (e) {
              case '+':
                return new Date(r.valueInMilliseconds() + t.getTime());
              case '-':
                return new Date(t.getTime() - r.valueInMilliseconds());
              case '*':
                return t.getTime() * r.valueInMilliseconds();
              case '/':
                return t.getTime() / r.valueInMilliseconds();
            }
          else r = r.valueInMilliseconds();
        else if (t instanceof Date && 'number' == typeof r)
          switch (((r = 24 * r * 60 * 60 * 1e3), (t = t.getTime()), e)) {
            case '+':
              return new Date(t + r);
            case '-':
              return new Date(t - r);
            case '*':
              return new Date(t * r);
            case '/':
              return new Date(t / r);
          }
        else if (r instanceof Date && 'number' == typeof t)
          switch (((t = 24 * t * 60 * 60 * 1e3), (r = r.getTime()), e)) {
            case '+':
              return new Date(t + r);
            case '-':
              return new Date(t - r);
            case '*':
              return new Date(t * r);
            case '/':
              return new Date(t / r);
          }
        switch (e) {
          case '+':
            return t + r;
          case '-':
            return t - r;
          case '*':
            return t * r;
          case '/':
            return t / r;
        }
      }
      function U(e, t, r, n) {
        const a = n.getAttribute(e, t);
        return null != a && 1 === r[t] ? new Date(a) : a;
      }
      !(function (e) {
        (e[(e.Normal = 0)] = 'Normal'), (e[(e.Escaped = 1)] = 'Escaped');
      })(D || (D = {}));
      const H = {
        getAttribute: (e, t) =>
          ((function (e) {
            return e && 'object' == typeof e.attributes;
          })(e)
            ? e.attributes
            : e)[t],
      };
    },
  },
]);
