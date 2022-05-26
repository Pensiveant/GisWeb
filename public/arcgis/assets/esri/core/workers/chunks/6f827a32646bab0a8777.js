'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [7572],
  {
    87572: (e, t, i) => {
      i.r(t), i.d(t, { validate: () => m });
      var r,
        a = i(20102),
        o = i(5732),
        n = { exports: {} };
      (r = function () {
        return (function e(t, i, r) {
          function a(s, l) {
            if (!i[s]) {
              if (!t[s]) {
                var d = 'function' == typeof o.a && o.a;
                if (!l && d) return d(s, !0);
                if (n) return n(s, !0);
                var p = new Error("Cannot find module '" + s + "'");
                throw ((p.code = 'MODULE_NOT_FOUND'), p);
              }
              var c = (i[s] = { exports: {} });
              t[s][0].call(
                c.exports,
                function (e) {
                  return a(t[s][1][e] || e);
                },
                c,
                c.exports,
                e,
                t,
                i,
                r,
              );
            }
            return i[s].exports;
          }
          for (
            var n = 'function' == typeof o.a && o.a, s = 0;
            s < r.length;
            s++
          )
            a(r[s]);
          return a;
        })(
          {
            1: [
              function (e, t, i) {
                var r = (t.exports = function () {
                  this._cache = {};
                });
                (r.prototype.put = function (e, t) {
                  this._cache[e] = t;
                }),
                  (r.prototype.get = function (e) {
                    return this._cache[e];
                  }),
                  (r.prototype.del = function (e) {
                    delete this._cache[e];
                  }),
                  (r.prototype.clear = function () {
                    this._cache = {};
                  });
              },
              {},
            ],
            2: [
              function (e, t, i) {
                var r = e('./error_classes').MissingRef;
                t.exports = function e(t, i, a) {
                  var o = this;
                  if ('function' != typeof this._opts.loadSchema)
                    throw new Error('options.loadSchema should be a function');
                  'function' == typeof i && ((a = i), (i = void 0));
                  var n = s(t).then(function () {
                    var e = o._addSchema(t, void 0, i);
                    return (
                      e.validate ||
                      (function e(t) {
                        try {
                          return o._compile(t);
                        } catch (a) {
                          if (a instanceof r)
                            return (function (r) {
                              var a = r.missingSchema;
                              if (d(a))
                                throw new Error(
                                  'Schema ' +
                                    a +
                                    ' is loaded but ' +
                                    r.missingRef +
                                    ' cannot be resolved',
                                );
                              var n = o._loadingSchemas[a];
                              return (
                                n ||
                                  (n = o._loadingSchemas[a] =
                                    o._opts.loadSchema(a)).then(l, l),
                                n
                                  .then(function (e) {
                                    if (!d(a))
                                      return s(e).then(function () {
                                        d(a) || o.addSchema(e, a, void 0, i);
                                      });
                                  })
                                  .then(function () {
                                    return e(t);
                                  })
                              );
                              function l() {
                                delete o._loadingSchemas[a];
                              }
                              function d(e) {
                                return o._refs[e] || o._schemas[e];
                              }
                            })(a);
                          throw a;
                        }
                      })(e)
                    );
                  });
                  return (
                    a &&
                      n.then(function (e) {
                        a(null, e);
                      }, a),
                    n
                  );
                  function s(t) {
                    var i = t.$schema;
                    return i && !o.getSchema(i)
                      ? e.call(o, { $ref: i }, !0)
                      : Promise.resolve();
                  }
                };
              },
              { './error_classes': 3 },
            ],
            3: [
              function (e, t, i) {
                var r = e('./resolve');
                function a(e, t, i) {
                  (this.message = i || a.message(e, t)),
                    (this.missingRef = r.url(e, t)),
                    (this.missingSchema = r.normalizeId(
                      r.fullPath(this.missingRef),
                    ));
                }
                function o(e) {
                  return (
                    (e.prototype = Object.create(Error.prototype)),
                    (e.prototype.constructor = e)
                  );
                }
                (t.exports = {
                  Validation: o(function (e) {
                    (this.message = 'validation failed'),
                      (this.errors = e),
                      (this.ajv = this.validation = !0);
                  }),
                  MissingRef: o(a),
                }),
                  (a.message = function (e, t) {
                    return "can't resolve reference " + t + ' from id ' + e;
                  });
              },
              { './resolve': 6 },
            ],
            4: [
              function (e, t, i) {
                var r = e('./util'),
                  a = /^(\d\d\d\d)-(\d\d)-(\d\d)$/,
                  o = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                  n = /^(\d\d):(\d\d):(\d\d)(\.\d+)?(z|[+-]\d\d(?::?\d\d)?)?$/i,
                  s =
                    /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,
                  l =
                    /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
                  d =
                    /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,
                  p =
                    /^(?:(?:http[s\u017F]?|ftp):\/\/)(?:(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+(?::(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?@)?(?:(?!10(?:\.[0-9]{1,3}){3})(?!127(?:\.[0-9]{1,3}){3})(?!169\.254(?:\.[0-9]{1,3}){2})(?!192\.168(?:\.[0-9]{1,3}){2})(?!172\.(?:1[6-9]|2[0-9]|3[01])(?:\.[0-9]{1,3}){2})(?:[1-9][0-9]?|1[0-9][0-9]|2[01][0-9]|22[0-3])(?:\.(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])){2}(?:\.(?:[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-4]))|(?:(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-?)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)(?:\.(?:(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+-?)*(?:[0-9KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)*(?:\.(?:(?:[KSa-z\xA1-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]){2,})))(?::[0-9]{2,5})?(?:\/(?:[\0-\x08\x0E-\x1F!-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*)?$/i,
                  c =
                    /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
                  h = /^(?:\/(?:[^~/]|~0|~1)*)*$/,
                  u =
                    /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,
                  f = /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/;
                function m(e) {
                  return (e = 'full' == e ? 'full' : 'fast'), r.copy(m[e]);
                }
                function y(e) {
                  var t = e.match(a);
                  if (!t) return !1;
                  var i,
                    r = +t[1],
                    n = +t[2],
                    s = +t[3];
                  return (
                    1 <= n &&
                    n <= 12 &&
                    1 <= s &&
                    s <=
                      (2 != n ||
                      (i = r) % 4 != 0 ||
                      (i % 100 == 0 && i % 400 != 0)
                        ? o[n]
                        : 29)
                  );
                }
                function g(e, t) {
                  var i = e.match(n);
                  if (!i) return !1;
                  var r = i[1],
                    a = i[2],
                    o = i[3],
                    s = i[5];
                  return (
                    ((r <= 23 && a <= 59 && o <= 59) ||
                      (23 == r && 59 == a && 60 == o)) &&
                    (!t || s)
                  );
                }
                ((t.exports = m).fast = {
                  date: /^\d\d\d\d-[0-1]\d-[0-3]\d$/,
                  time: /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)?$/i,
                  'date-time':
                    /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d(?::?\d\d)?)$/i,
                  uri: /^(?:[a-z][a-z0-9+-.]*:)(?:\/?\/)?[^\s]*$/i,
                  'uri-reference':
                    /^(?:(?:[a-z][a-z0-9+-.]*:)?\/?\/)?(?:[^\\\s#][^\s#]*)?(?:#[^\\\s]*)?$/i,
                  'uri-template': d,
                  url: p,
                  email:
                    /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)*$/i,
                  hostname: s,
                  ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
                  ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,
                  regex: j,
                  uuid: c,
                  'json-pointer': h,
                  'json-pointer-uri-fragment': u,
                  'relative-json-pointer': f,
                }),
                  (m.full = {
                    date: y,
                    time: g,
                    'date-time': function (e) {
                      var t = e.split(b);
                      return 2 == t.length && y(t[0]) && g(t[1], !0);
                    },
                    uri: function (e) {
                      return v.test(e) && l.test(e);
                    },
                    'uri-reference':
                      /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
                    'uri-template': d,
                    url: p,
                    email:
                      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
                    hostname: s,
                    ipv4: /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
                    ipv6: /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i,
                    regex: j,
                    uuid: c,
                    'json-pointer': h,
                    'json-pointer-uri-fragment': u,
                    'relative-json-pointer': f,
                  });
                var b = /t|\s/i,
                  v = /\/|:/,
                  w = /[^\\]\\Z/;
                function j(e) {
                  if (w.test(e)) return !1;
                  try {
                    return new RegExp(e), !0;
                  } catch (e) {
                    return !1;
                  }
                }
              },
              { './util': 10 },
            ],
            5: [
              function (e, t, i) {
                var r = e('./resolve'),
                  a = e('./util'),
                  o = e('./error_classes'),
                  n = e('fast-json-stable-stringify'),
                  s = e('../dotjs/validate'),
                  l = a.ucs2length,
                  d = e('fast-deep-equal'),
                  p = o.Validation;
                function c(e, t, i) {
                  for (var r = 0; r < this._compilations.length; r++) {
                    var a = this._compilations[r];
                    if (a.schema == e && a.root == t && a.baseId == i) return r;
                  }
                  return -1;
                }
                function h(e, t) {
                  return (
                    'var pattern' +
                    e +
                    ' = new RegExp(' +
                    a.toQuotedString(t[e]) +
                    ');'
                  );
                }
                function u(e) {
                  return 'var default' + e + ' = defaults[' + e + '];';
                }
                function f(e, t) {
                  return void 0 === t[e]
                    ? ''
                    : 'var refVal' + e + ' = refVal[' + e + '];';
                }
                function m(e) {
                  return 'var customRule' + e + ' = customRules[' + e + '];';
                }
                function y(e, t) {
                  if (!e.length) return '';
                  for (var i = '', r = 0; r < e.length; r++) i += t(r, e);
                  return i;
                }
                t.exports = function e(t, i, g, b) {
                  var v = this,
                    w = this._opts,
                    j = [void 0],
                    S = {},
                    P = [],
                    I = {},
                    _ = [],
                    x = {},
                    T = [],
                    A = function (e, t, i) {
                      var r = c.call(this, e, t, i);
                      return 0 <= r
                        ? { index: r, compiling: !0 }
                        : ((r = this._compilations.length),
                          (this._compilations[r] = {
                            schema: e,
                            root: t,
                            baseId: i,
                          }),
                          { index: r, compiling: !1 });
                    }.call(
                      this,
                      t,
                      (i = i || { schema: t, refVal: j, refs: S }),
                      b,
                    ),
                    L = this._compilations[A.index];
                  if (A.compiling)
                    return (L.callValidate = function e() {
                      var t = L.validate,
                        i = t.apply(this, arguments);
                      return (e.errors = t.errors), i;
                    });
                  var E = this._formats,
                    D = this.RULES;
                  try {
                    var $ = F(t, i, g, b);
                    L.validate = $;
                    var R = L.callValidate;
                    return (
                      R &&
                        ((R.schema = $.schema),
                        (R.errors = null),
                        (R.refs = $.refs),
                        (R.refVal = $.refVal),
                        (R.root = $.root),
                        (R.$async = $.$async),
                        w.sourceCode && (R.source = $.source)),
                      $
                    );
                  } finally {
                    (function (e, t, i) {
                      var r = c.call(this, e, t, i);
                      0 <= r && this._compilations.splice(r, 1);
                    }.call(this, t, i, b));
                  }
                  function F(t, n, c, g) {
                    var b = !n || (n && n.schema == t);
                    if (n.schema != i.schema) return e.call(v, t, n, c, g);
                    var I = !0 === t.$async,
                      x = s({
                        isTop: !0,
                        schema: t,
                        isRoot: b,
                        baseId: g,
                        root: n,
                        schemaPath: '',
                        errSchemaPath: '#',
                        errorPath: '""',
                        MissingRefError: o.MissingRef,
                        RULES: D,
                        validate: s,
                        util: a,
                        resolve: r,
                        resolveRef: q,
                        usePattern: C,
                        useDefault: z,
                        useCustomRule: M,
                        opts: w,
                        formats: E,
                        logger: v.logger,
                        self: v,
                      });
                    (x = y(j, f) + y(P, h) + y(_, u) + y(T, m) + x),
                      w.processCode && (x = w.processCode(x, t));
                    try {
                      var A = new Function(
                        'self',
                        'RULES',
                        'formats',
                        'root',
                        'refVal',
                        'defaults',
                        'customRules',
                        'equal',
                        'ucs2length',
                        'ValidationError',
                        x,
                      )(v, D, E, i, j, _, T, d, l, p);
                      j[0] = A;
                    } catch (t) {
                      throw (
                        (v.logger.error(
                          'Error compiling schema, function code:',
                          x,
                        ),
                        t)
                      );
                    }
                    return (
                      (A.schema = t),
                      (A.errors = null),
                      (A.refs = S),
                      (A.refVal = j),
                      (A.root = b ? A : n),
                      I && (A.$async = !0),
                      !0 === w.sourceCode &&
                        (A.source = { code: x, patterns: P, defaults: _ }),
                      A
                    );
                  }
                  function q(t, a, o) {
                    a = r.url(t, a);
                    var n,
                      s,
                      l = S[a];
                    if (void 0 !== l)
                      return k((n = j[l]), (s = 'refVal[' + l + ']'));
                    if (!o && i.refs) {
                      var d = i.refs[a];
                      if (void 0 !== d)
                        return k((n = i.refVal[d]), (s = O(a, n)));
                    }
                    s = O(a);
                    var p,
                      c,
                      h,
                      u = r.call(v, F, i, a);
                    if (
                      (void 0 !== u ||
                        ((p = g && g[a]) &&
                          (u = r.inlineRef(p, w.inlineRefs)
                            ? p
                            : e.call(v, p, i, g, t))),
                      void 0 !== u)
                    )
                      return (c = u), (h = S[a]), (j[h] = c), k(u, s);
                    delete S[a];
                  }
                  function O(e, t) {
                    var i = j.length;
                    return (j[i] = t), 'refVal' + (S[e] = i);
                  }
                  function k(e, t) {
                    return 'object' == typeof e || 'boolean' == typeof e
                      ? { code: t, schema: e, inline: !0 }
                      : { code: t, $async: e && !!e.$async };
                  }
                  function C(e) {
                    var t = I[e];
                    return (
                      void 0 === t && ((t = I[e] = P.length), (P[t] = e)),
                      'pattern' + t
                    );
                  }
                  function z(e) {
                    switch (typeof e) {
                      case 'boolean':
                      case 'number':
                        return '' + e;
                      case 'string':
                        return a.toQuotedString(e);
                      case 'object':
                        if (null === e) return 'null';
                        var t = n(e),
                          i = x[t];
                        return (
                          void 0 === i && ((i = x[t] = _.length), (_[i] = e)),
                          'default' + i
                        );
                    }
                  }
                  function M(e, t, i, r) {
                    if (!1 !== v._opts.validateSchema) {
                      var a = e.definition.dependencies;
                      if (
                        a &&
                        !a.every(function (e) {
                          return Object.prototype.hasOwnProperty.call(i, e);
                        })
                      )
                        throw new Error(
                          'parent schema must have all required keywords: ' +
                            a.join(','),
                        );
                      var o = e.definition.validateSchema;
                      if (o && !o(t)) {
                        var n =
                          'keyword schema is invalid: ' +
                          v.errorsText(o.errors);
                        if ('log' != v._opts.validateSchema) throw new Error(n);
                        v.logger.error(n);
                      }
                    }
                    var s,
                      l = e.definition.compile,
                      d = e.definition.inline,
                      p = e.definition.macro;
                    if (l) s = l.call(v, t, i, r);
                    else if (p)
                      (s = p.call(v, t, i, r)),
                        !1 !== w.validateSchema && v.validateSchema(s, !0);
                    else if (d) s = d.call(v, r, e.keyword, t, i);
                    else if (!(s = e.definition.validate)) return;
                    if (void 0 === s)
                      throw new Error(
                        'custom keyword "' + e.keyword + '"failed to compile',
                      );
                    var c = T.length;
                    return { code: 'customRule' + c, validate: (T[c] = s) };
                  }
                };
              },
              {
                '../dotjs/validate': 38,
                './error_classes': 3,
                './resolve': 6,
                './util': 10,
                'fast-deep-equal': 42,
                'fast-json-stable-stringify': 43,
              },
            ],
            6: [
              function (e, t, i) {
                var r = e('uri-js'),
                  a = e('fast-deep-equal'),
                  o = e('./util'),
                  n = e('./schema_obj'),
                  s = e('json-schema-traverse');
                function l(e, t, i) {
                  var r = this._refs[i];
                  if ('string' == typeof r) {
                    if (!this._refs[r]) return l.call(this, e, t, r);
                    r = this._refs[r];
                  }
                  if ((r = r || this._schemas[i]) instanceof n)
                    return u(r.schema, this._opts.inlineRefs)
                      ? r.schema
                      : r.validate || this._compile(r);
                  var a,
                    o,
                    s,
                    p = d.call(this, t, i);
                  return (
                    p && ((a = p.schema), (t = p.root), (s = p.baseId)),
                    a instanceof n
                      ? (o = a.validate || e.call(this, a.schema, t, void 0, s))
                      : void 0 !== a &&
                        (o = u(a, this._opts.inlineRefs)
                          ? a
                          : e.call(this, a, t, void 0, s)),
                    o
                  );
                }
                function d(e, t) {
                  var i = r.parse(t),
                    a = m(i),
                    o = f(this._getId(e.schema));
                  if (0 === Object.keys(e.schema).length || a !== o) {
                    var s = g(a),
                      l = this._refs[s];
                    if ('string' == typeof l)
                      return function (e, t, i) {
                        var r = d.call(this, e, t);
                        if (r) {
                          var a = r.schema,
                            o = r.baseId;
                          e = r.root;
                          var n = this._getId(a);
                          return n && (o = b(o, n)), c.call(this, i, o, a, e);
                        }
                      }.call(this, e, l, i);
                    if (l instanceof n) l.validate || this._compile(l), (e = l);
                    else {
                      if (!((l = this._schemas[s]) instanceof n)) return;
                      if ((l.validate || this._compile(l), s == g(t)))
                        return { schema: l, root: e, baseId: o };
                      e = l;
                    }
                    if (!e.schema) return;
                    o = f(this._getId(e.schema));
                  }
                  return c.call(this, i, o, e.schema, e);
                }
                ((t.exports = l).normalizeId = g),
                  (l.fullPath = f),
                  (l.url = b),
                  (l.ids = function (e) {
                    var t = g(this._getId(e)),
                      i = { '': t },
                      n = { '': f(t, !1) },
                      l = {},
                      d = this;
                    return (
                      s(e, { allKeys: !0 }, function (e, t, s, p, c, h, u) {
                        if ('' !== t) {
                          var f = d._getId(e),
                            m = i[p],
                            y = n[p] + '/' + c;
                          if (
                            (void 0 !== u &&
                              (y +=
                                '/' +
                                ('number' == typeof u
                                  ? u
                                  : o.escapeFragment(u))),
                            'string' == typeof f)
                          ) {
                            f = m = g(m ? r.resolve(m, f) : f);
                            var b = d._refs[f];
                            if (
                              ('string' == typeof b && (b = d._refs[b]),
                              b && b.schema)
                            ) {
                              if (!a(e, b.schema))
                                throw new Error(
                                  'id "' +
                                    f +
                                    '" resolves to more than one schema',
                                );
                            } else if (f != g(y))
                              if ('#' == f[0]) {
                                if (l[f] && !a(e, l[f]))
                                  throw new Error(
                                    'id "' +
                                      f +
                                      '" resolves to more than one schema',
                                  );
                                l[f] = e;
                              } else d._refs[f] = y;
                          }
                          (i[t] = m), (n[t] = y);
                        }
                      }),
                      l
                    );
                  }),
                  (l.inlineRef = u),
                  (l.schema = d);
                var p = o.toHash([
                  'properties',
                  'patternProperties',
                  'enum',
                  'dependencies',
                  'definitions',
                ]);
                function c(e, t, i, r) {
                  if (
                    ((e.fragment = e.fragment || ''),
                    '/' == e.fragment.slice(0, 1))
                  ) {
                    for (
                      var a = e.fragment.split('/'), n = 1;
                      n < a.length;
                      n++
                    ) {
                      var s,
                        l,
                        c,
                        h = a[n];
                      if (h) {
                        if (void 0 === (i = i[(h = o.unescapeFragment(h))]))
                          break;
                        p[h] ||
                          ((c = this._getId(i)) && (t = b(t, c)),
                          i.$ref &&
                            ((s = b(t, i.$ref)),
                            (l = d.call(this, r, s)) &&
                              ((i = l.schema), (r = l.root), (t = l.baseId))));
                      }
                    }
                    return void 0 !== i && i !== r.schema
                      ? { schema: i, root: r, baseId: t }
                      : void 0;
                  }
                }
                var h = o.toHash([
                  'type',
                  'format',
                  'pattern',
                  'maxLength',
                  'minLength',
                  'maxProperties',
                  'minProperties',
                  'maxItems',
                  'minItems',
                  'maximum',
                  'minimum',
                  'uniqueItems',
                  'multipleOf',
                  'required',
                  'enum',
                ]);
                function u(e, t) {
                  return (
                    !1 !== t &&
                    (void 0 === t || !0 === t
                      ? (function e(t) {
                          var i;
                          if (Array.isArray(t)) {
                            for (var r = 0; r < t.length; r++)
                              if ('object' == typeof (i = t[r]) && !e(i))
                                return !1;
                          } else
                            for (var a in t) {
                              if ('$ref' == a) return !1;
                              if ('object' == typeof (i = t[a]) && !e(i))
                                return !1;
                            }
                          return !0;
                        })(e)
                      : t
                      ? (function e(t) {
                          var i,
                            r = 0;
                          if (Array.isArray(t)) {
                            for (var a = 0; a < t.length; a++)
                              if (
                                ('object' == typeof (i = t[a]) && (r += e(i)),
                                r == 1 / 0)
                              )
                                return 1 / 0;
                          } else
                            for (var o in t) {
                              if ('$ref' == o) return 1 / 0;
                              if (h[o]) r++;
                              else if (
                                ('object' == typeof (i = t[o]) &&
                                  (r += e(i) + 1),
                                r == 1 / 0)
                              )
                                return 1 / 0;
                            }
                          return r;
                        })(e) <= t
                      : void 0)
                  );
                }
                function f(e, t) {
                  return !1 !== t && (e = g(e)), m(r.parse(e));
                }
                function m(e) {
                  return r.serialize(e).split('#')[0] + '#';
                }
                var y = /#\/?$/;
                function g(e) {
                  return e ? e.replace(y, '') : '';
                }
                function b(e, t) {
                  return (t = g(t)), r.resolve(e, t);
                }
              },
              {
                './schema_obj': 8,
                './util': 10,
                'fast-deep-equal': 42,
                'json-schema-traverse': 44,
                'uri-js': 45,
              },
            ],
            7: [
              function (e, t, i) {
                var r = e('../dotjs'),
                  a = e('./util').toHash;
                t.exports = function () {
                  var e = [
                      {
                        type: 'number',
                        rules: [
                          { maximum: ['exclusiveMaximum'] },
                          { minimum: ['exclusiveMinimum'] },
                          'multipleOf',
                          'format',
                        ],
                      },
                      {
                        type: 'string',
                        rules: ['maxLength', 'minLength', 'pattern', 'format'],
                      },
                      {
                        type: 'array',
                        rules: [
                          'maxItems',
                          'minItems',
                          'items',
                          'contains',
                          'uniqueItems',
                        ],
                      },
                      {
                        type: 'object',
                        rules: [
                          'maxProperties',
                          'minProperties',
                          'required',
                          'dependencies',
                          'propertyNames',
                          {
                            properties: [
                              'additionalProperties',
                              'patternProperties',
                            ],
                          },
                        ],
                      },
                      {
                        rules: [
                          '$ref',
                          'const',
                          'enum',
                          'not',
                          'anyOf',
                          'oneOf',
                          'allOf',
                          'if',
                        ],
                      },
                    ],
                    t = ['type', '$comment'];
                  return (
                    (e.all = a(t)),
                    (e.types = a([
                      'number',
                      'integer',
                      'string',
                      'array',
                      'object',
                      'boolean',
                      'null',
                    ])),
                    e.forEach(function (i) {
                      (i.rules = i.rules.map(function (i) {
                        var a, o;
                        return (
                          'object' == typeof i &&
                            ((o = i[(a = Object.keys(i)[0])]),
                            (i = a),
                            o.forEach(function (i) {
                              t.push(i), (e.all[i] = !0);
                            })),
                          t.push(i),
                          (e.all[i] = { keyword: i, code: r[i], implements: o })
                        );
                      })),
                        (e.all.$comment = {
                          keyword: '$comment',
                          code: r.$comment,
                        }),
                        i.type && (e.types[i.type] = i);
                    }),
                    (e.keywords = a(
                      t.concat([
                        '$schema',
                        '$id',
                        'id',
                        '$data',
                        '$async',
                        'title',
                        'description',
                        'default',
                        'definitions',
                        'examples',
                        'readOnly',
                        'writeOnly',
                        'contentMediaType',
                        'contentEncoding',
                        'additionalItems',
                        'then',
                        'else',
                      ]),
                    )),
                    (e.custom = {}),
                    e
                  );
                };
              },
              { '../dotjs': 27, './util': 10 },
            ],
            8: [
              function (e, t, i) {
                var r = e('./util');
                t.exports = function (e) {
                  r.copy(e, this);
                };
              },
              { './util': 10 },
            ],
            9: [
              function (e, t, i) {
                t.exports = function (e) {
                  for (var t, i = 0, r = e.length, a = 0; a < r; )
                    i++,
                      55296 <= (t = e.charCodeAt(a++)) &&
                        t <= 56319 &&
                        a < r &&
                        56320 == (64512 & (t = e.charCodeAt(a))) &&
                        a++;
                  return i;
                };
              },
              {},
            ],
            10: [
              function (e, t, i) {
                function r(e, t, i, r) {
                  var a = r ? ' !== ' : ' === ',
                    o = r ? ' || ' : ' && ',
                    n = r ? '!' : '',
                    s = r ? '' : '!';
                  switch (e) {
                    case 'null':
                      return t + a + 'null';
                    case 'array':
                      return n + 'Array.isArray(' + t + ')';
                    case 'object':
                      return (
                        '(' +
                        n +
                        t +
                        o +
                        'typeof ' +
                        t +
                        a +
                        '"object"' +
                        o +
                        s +
                        'Array.isArray(' +
                        t +
                        '))'
                      );
                    case 'integer':
                      return (
                        '(typeof ' +
                        t +
                        a +
                        '"number"' +
                        o +
                        s +
                        '(' +
                        t +
                        ' % 1)' +
                        o +
                        t +
                        a +
                        t +
                        (i ? o + n + 'isFinite(' + t + ')' : '') +
                        ')'
                      );
                    case 'number':
                      return (
                        '(typeof ' +
                        t +
                        a +
                        '"' +
                        e +
                        '"' +
                        (i ? o + n + 'isFinite(' + t + ')' : '') +
                        ')'
                      );
                    default:
                      return 'typeof ' + t + a + '"' + e + '"';
                  }
                }
                t.exports = {
                  copy: function (e, t) {
                    for (var i in ((t = t || {}), e)) t[i] = e[i];
                    return t;
                  },
                  checkDataType: r,
                  checkDataTypes: function (e, t, i) {
                    if (1 === e.length) return r(e[0], t, i, !0);
                    var a = '',
                      n = o(e);
                    for (var s in (n.array &&
                      n.object &&
                      ((a = n.null ? '(' : '(!' + t + ' || '),
                      (a += 'typeof ' + t + ' !== "object")'),
                      delete n.null,
                      delete n.array,
                      delete n.object),
                    n.number && delete n.integer,
                    n))
                      a += (a ? ' && ' : '') + r(s, t, i, !0);
                    return a;
                  },
                  coerceToTypes: function (e, t) {
                    if (Array.isArray(t)) {
                      for (var i = [], r = 0; r < t.length; r++) {
                        var o = t[r];
                        (a[o] || ('array' === e && 'array' === o)) &&
                          (i[i.length] = o);
                      }
                      if (i.length) return i;
                    } else {
                      if (a[t]) return [t];
                      if ('array' === e && 'array' === t) return ['array'];
                    }
                  },
                  toHash: o,
                  getProperty: l,
                  escapeQuotes: d,
                  equal: e('fast-deep-equal'),
                  ucs2length: e('./ucs2length'),
                  varOccurences: function (e, t) {
                    t += '[^0-9]';
                    var i = e.match(new RegExp(t, 'g'));
                    return i ? i.length : 0;
                  },
                  varReplace: function (e, t, i) {
                    return (
                      (t += '([^0-9])'),
                      (i = i.replace(/\$/g, '$$$$')),
                      e.replace(new RegExp(t, 'g'), i + '$1')
                    );
                  },
                  schemaHasRules: function (e, t) {
                    if ('boolean' == typeof e) return !e;
                    for (var i in e) if (t[i]) return !0;
                  },
                  schemaHasRulesExcept: function (e, t, i) {
                    if ('boolean' == typeof e) return !e && 'not' != i;
                    for (var r in e) if (r != i && t[r]) return !0;
                  },
                  schemaUnknownRules: function (e, t) {
                    if ('boolean' != typeof e)
                      for (var i in e) if (!t[i]) return i;
                  },
                  toQuotedString: p,
                  getPathExpr: function (e, t, i, r) {
                    return u(
                      e,
                      i
                        ? "'/' + " +
                            t +
                            (r
                              ? ''
                              : ".replace(/~/g, '~0').replace(/\\//g, '~1')")
                        : r
                        ? "'[' + " + t + " + ']'"
                        : "'[\\'' + " + t + " + '\\']'",
                    );
                  },
                  getPath: function (e, t, i) {
                    return u(e, p(i ? '/' + f(t) : l(t)));
                  },
                  getData: function (e, t, i) {
                    var r, a, o, n;
                    if ('' === e) return 'rootData';
                    if ('/' == e[0]) {
                      if (!c.test(e))
                        throw new Error('Invalid JSON-pointer: ' + e);
                      (a = e), (o = 'rootData');
                    } else {
                      if (!(n = e.match(h)))
                        throw new Error('Invalid JSON-pointer: ' + e);
                      if (((r = +n[1]), '#' == (a = n[2]))) {
                        if (t <= r)
                          throw new Error(
                            'Cannot access property/index ' +
                              r +
                              ' levels up, current level is ' +
                              t,
                          );
                        return i[t - r];
                      }
                      if (t < r)
                        throw new Error(
                          'Cannot access data ' +
                            r +
                            ' levels up, current level is ' +
                            t,
                        );
                      if (((o = 'data' + (t - r || '')), !a)) return o;
                    }
                    for (
                      var s = o, d = a.split('/'), p = 0;
                      p < d.length;
                      p++
                    ) {
                      var u = d[p];
                      u && (s += ' && ' + (o += l(m(u))));
                    }
                    return s;
                  },
                  unescapeFragment: function (e) {
                    return m(decodeURIComponent(e));
                  },
                  unescapeJsonPointer: m,
                  escapeFragment: function (e) {
                    return encodeURIComponent(f(e));
                  },
                  escapeJsonPointer: f,
                };
                var a = o(['string', 'number', 'integer', 'boolean', 'null']);
                function o(e) {
                  for (var t = {}, i = 0; i < e.length; i++) t[e[i]] = !0;
                  return t;
                }
                var n = /^[a-z$_][a-z$_0-9]*$/i,
                  s = /'|\\/g;
                function l(e) {
                  return 'number' == typeof e
                    ? '[' + e + ']'
                    : n.test(e)
                    ? '.' + e
                    : "['" + d(e) + "']";
                }
                function d(e) {
                  return e
                    .replace(s, '\\$&')
                    .replace(/\n/g, '\\n')
                    .replace(/\r/g, '\\r')
                    .replace(/\f/g, '\\f')
                    .replace(/\t/g, '\\t');
                }
                function p(e) {
                  return "'" + d(e) + "'";
                }
                var c = /^\/(?:[^~]|~0|~1)*$/,
                  h = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
                function u(e, t) {
                  return '""' == e
                    ? t
                    : (e + ' + ' + t).replace(/([^\\])' \+ '/g, '$1');
                }
                function f(e) {
                  return e.replace(/~/g, '~0').replace(/\//g, '~1');
                }
                function m(e) {
                  return e.replace(/~1/g, '/').replace(/~0/g, '~');
                }
              },
              { './ucs2length': 9, 'fast-deep-equal': 42 },
            ],
            11: [
              function (e, t, i) {
                var r = [
                  'multipleOf',
                  'maximum',
                  'exclusiveMaximum',
                  'minimum',
                  'exclusiveMinimum',
                  'maxLength',
                  'minLength',
                  'pattern',
                  'additionalItems',
                  'maxItems',
                  'minItems',
                  'uniqueItems',
                  'maxProperties',
                  'minProperties',
                  'required',
                  'additionalProperties',
                  'enum',
                  'format',
                  'const',
                ];
                t.exports = function (e, t) {
                  for (var i = 0; i < t.length; i++) {
                    e = JSON.parse(JSON.stringify(e));
                    for (
                      var a = t[i].split('/'), o = e, n = 1;
                      n < a.length;
                      n++
                    )
                      o = o[a[n]];
                    for (n = 0; n < r.length; n++) {
                      var s = r[n],
                        l = o[s];
                      l &&
                        (o[s] = {
                          anyOf: [
                            l,
                            {
                              $ref: 'https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#',
                            },
                          ],
                        });
                    }
                  }
                  return e;
                };
              },
              {},
            ],
            12: [
              function (e, t, i) {
                var r = e('./refs/json-schema-draft-07.json');
                t.exports = {
                  $id: 'https://github.com/ajv-validator/ajv/blob/master/lib/definition_schema.js',
                  definitions: { simpleTypes: r.definitions.simpleTypes },
                  type: 'object',
                  dependencies: {
                    schema: ['validate'],
                    $data: ['validate'],
                    statements: ['inline'],
                    valid: { not: { required: ['macro'] } },
                  },
                  properties: {
                    type: r.properties.type,
                    schema: { type: 'boolean' },
                    statements: { type: 'boolean' },
                    dependencies: { type: 'array', items: { type: 'string' } },
                    metaSchema: { type: 'object' },
                    modifying: { type: 'boolean' },
                    valid: { type: 'boolean' },
                    $data: { type: 'boolean' },
                    async: { type: 'boolean' },
                    errors: { anyOf: [{ type: 'boolean' }, { const: 'full' }] },
                  },
                };
              },
              { './refs/json-schema-draft-07.json': 41 },
            ],
            13: [
              function (e, t, i) {
                t.exports = function (e, t) {
                  var i,
                    r,
                    a,
                    o,
                    n,
                    s,
                    l,
                    d = ' ',
                    p = e.level,
                    c = e.dataLevel,
                    h = e.schema[t],
                    u = e.schemaPath + e.util.getProperty(t),
                    f = e.errSchemaPath + '/' + t,
                    m = !e.opts.allErrors,
                    y = 'data' + (c || ''),
                    g = e.opts.$data && h && h.$data,
                    b = g
                      ? ((d +=
                          ' var schema' +
                          p +
                          ' = ' +
                          e.util.getData(h.$data, c, e.dataPathArr) +
                          '; '),
                        'schema' + p)
                      : h,
                    v = 'maximum' == t,
                    w = v ? 'exclusiveMaximum' : 'exclusiveMinimum',
                    j = e.schema[w],
                    S = e.opts.$data && j && j.$data,
                    P = v ? '<' : '>',
                    I = v ? '>' : '<',
                    _ = void 0;
                  if (!g && 'number' != typeof h && void 0 !== h)
                    throw new Error(t + ' must be number');
                  if (
                    !S &&
                    void 0 !== j &&
                    'number' != typeof j &&
                    'boolean' != typeof j
                  )
                    throw new Error(w + ' must be number or boolean');
                  S
                    ? ((o = 'exclIsNumber' + p),
                      (n = "' + " + (s = 'op' + p) + " + '"),
                      (d +=
                        ' var schemaExcl' +
                        p +
                        ' = ' +
                        e.util.getData(j.$data, c, e.dataPathArr) +
                        '; '),
                      (_ = w),
                      (l = l || []).push(
                        (d +=
                          ' var ' +
                          (r = 'exclusive' + p) +
                          '; var ' +
                          (a = 'exclType' + p) +
                          ' = typeof ' +
                          (i = 'schemaExcl' + p) +
                          '; if (' +
                          a +
                          " != 'boolean' && " +
                          a +
                          " != 'undefined' && " +
                          a +
                          " != 'number') { "),
                      ),
                      (d = ''),
                      !1 !== e.createErrors
                        ? ((d +=
                            " { keyword: '" +
                            (_ || '_exclusiveLimit') +
                            "' , dataPath: (dataPath || '') + " +
                            e.errorPath +
                            ' , schemaPath: ' +
                            e.util.toQuotedString(f) +
                            ' , params: {} '),
                          !1 !== e.opts.messages &&
                            (d += " , message: '" + w + " should be boolean' "),
                          e.opts.verbose &&
                            (d +=
                              ' , schema: validate.schema' +
                              u +
                              ' , parentSchema: validate.schema' +
                              e.schemaPath +
                              ' , data: ' +
                              y +
                              ' '),
                          (d += ' } '))
                        : (d += ' {} '),
                      (x = d),
                      (d = l.pop()),
                      !e.compositeRule && m
                        ? e.async
                          ? (d += ' throw new ValidationError([' + x + ']); ')
                          : (d +=
                              ' validate.errors = [' + x + ']; return false; ')
                        : (d +=
                            ' var err = ' +
                            x +
                            ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; '),
                      (d += ' } else if ( '),
                      g &&
                        (d +=
                          ' (' +
                          b +
                          ' !== undefined && typeof ' +
                          b +
                          " != 'number') || "),
                      (d +=
                        ' ' +
                        a +
                        " == 'number' ? ( (" +
                        r +
                        ' = ' +
                        b +
                        ' === undefined || ' +
                        i +
                        ' ' +
                        P +
                        '= ' +
                        b +
                        ') ? ' +
                        y +
                        ' ' +
                        I +
                        '= ' +
                        i +
                        ' : ' +
                        y +
                        ' ' +
                        I +
                        ' ' +
                        b +
                        ' ) : ( (' +
                        r +
                        ' = ' +
                        i +
                        ' === true) ? ' +
                        y +
                        ' ' +
                        I +
                        '= ' +
                        b +
                        ' : ' +
                        y +
                        ' ' +
                        I +
                        ' ' +
                        b +
                        ' ) || ' +
                        y +
                        ' !== ' +
                        y +
                        ') { var op' +
                        p +
                        ' = ' +
                        r +
                        " ? '" +
                        P +
                        "' : '" +
                        P +
                        "='; "),
                      void 0 === h &&
                        ((_ = w),
                        (f = e.errSchemaPath + '/' + w),
                        (b = i),
                        (g = S)))
                    : ((n = P),
                      (o = 'number' == typeof j) && g
                        ? ((s = "'" + n + "'"),
                          (d += ' if ( '),
                          g &&
                            (d +=
                              ' (' +
                              b +
                              ' !== undefined && typeof ' +
                              b +
                              " != 'number') || "),
                          (d +=
                            ' ( ' +
                            b +
                            ' === undefined || ' +
                            j +
                            ' ' +
                            P +
                            '= ' +
                            b +
                            ' ? ' +
                            y +
                            ' ' +
                            I +
                            '= ' +
                            j +
                            ' : ' +
                            y +
                            ' ' +
                            I +
                            ' ' +
                            b +
                            ' ) || ' +
                            y +
                            ' !== ' +
                            y +
                            ') { '))
                        : (o && void 0 === h
                            ? ((r = !0),
                              (_ = w),
                              (f = e.errSchemaPath + '/' + w),
                              (b = j),
                              (I += '='))
                            : (o && (b = Math[v ? 'min' : 'max'](j, h)),
                              j === (!o || b)
                                ? ((r = !0),
                                  (_ = w),
                                  (f = e.errSchemaPath + '/' + w),
                                  (I += '='))
                                : ((r = !1), (n += '='))),
                          (s = "'" + n + "'"),
                          (d += ' if ( '),
                          g &&
                            (d +=
                              ' (' +
                              b +
                              ' !== undefined && typeof ' +
                              b +
                              " != 'number') || "),
                          (d +=
                            ' ' +
                            y +
                            ' ' +
                            I +
                            ' ' +
                            b +
                            ' || ' +
                            y +
                            ' !== ' +
                            y +
                            ') { '))),
                    (_ = _ || t),
                    (l = l || []).push(d),
                    (d = ''),
                    !1 !== e.createErrors
                      ? ((d +=
                          " { keyword: '" +
                          (_ || '_limit') +
                          "' , dataPath: (dataPath || '') + " +
                          e.errorPath +
                          ' , schemaPath: ' +
                          e.util.toQuotedString(f) +
                          ' , params: { comparison: ' +
                          s +
                          ', limit: ' +
                          b +
                          ', exclusive: ' +
                          r +
                          ' } '),
                        !1 !== e.opts.messages &&
                          ((d += " , message: 'should be " + n + ' '),
                          (d += g ? "' + " + b : b + "'")),
                        e.opts.verbose &&
                          ((d += ' , schema:  '),
                          (d += g ? 'validate.schema' + u : '' + h),
                          (d +=
                            '         , parentSchema: validate.schema' +
                            e.schemaPath +
                            ' , data: ' +
                            y +
                            ' ')),
                        (d += ' } '))
                      : (d += ' {} ');
                  var x = d;
                  return (
                    (d = l.pop()),
                    !e.compositeRule && m
                      ? e.async
                        ? (d += ' throw new ValidationError([' + x + ']); ')
                        : (d +=
                            ' validate.errors = [' + x + ']; return false; ')
                      : (d +=
                          ' var err = ' +
                          x +
                          ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; '),
                    (d += ' } '),
                    m && (d += ' else { '),
                    d
                  );
                };
              },
              {},
            ],
            14: [
              function (e, t, i) {
                t.exports = function (e, t) {
                  var i = ' ',
                    r = e.level,
                    a = e.dataLevel,
                    o = e.schema[t],
                    n = e.schemaPath + e.util.getProperty(t),
                    s = e.errSchemaPath + '/' + t,
                    l = !e.opts.allErrors,
                    d = 'data' + (a || ''),
                    p = e.opts.$data && o && o.$data,
                    c = p
                      ? ((i +=
                          ' var schema' +
                          r +
                          ' = ' +
                          e.util.getData(o.$data, a, e.dataPathArr) +
                          '; '),
                        'schema' + r)
                      : o;
                  if (!p && 'number' != typeof o)
                    throw new Error(t + ' must be number');
                  (i += 'if ( '),
                    p &&
                      (i +=
                        ' (' +
                        c +
                        ' !== undefined && typeof ' +
                        c +
                        " != 'number') || "),
                    (i +=
                      ' ' +
                      d +
                      '.length ' +
                      ('maxItems' == t ? '>' : '<') +
                      ' ' +
                      c +
                      ') { ');
                  var h = t,
                    u = u || [];
                  u.push(i),
                    (i = ''),
                    !1 !== e.createErrors
                      ? ((i +=
                          " { keyword: '" +
                          (h || '_limitItems') +
                          "' , dataPath: (dataPath || '') + " +
                          e.errorPath +
                          ' , schemaPath: ' +
                          e.util.toQuotedString(s) +
                          ' , params: { limit: ' +
                          c +
                          ' } '),
                        !1 !== e.opts.messages &&
                          ((i += " , message: 'should NOT have "),
                          (i += 'maxItems' == t ? 'more' : 'fewer'),
                          (i += ' than '),
                          (i += p ? "' + " + c + " + '" : '' + o),
                          (i += " items' ")),
                        e.opts.verbose &&
                          ((i += ' , schema:  '),
                          (i += p ? 'validate.schema' + n : '' + o),
                          (i +=
                            '         , parentSchema: validate.schema' +
                            e.schemaPath +
                            ' , data: ' +
                            d +
                            ' ')),
                        (i += ' } '))
                      : (i += ' {} ');
                  var f = i;
                  return (
                    (i = u.pop()),
                    !e.compositeRule && l
                      ? e.async
                        ? (i += ' throw new ValidationError([' + f + ']); ')
                        : (i +=
                            ' validate.errors = [' + f + ']; return false; ')
                      : (i +=
                          ' var err = ' +
                          f +
                          ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; '),
                    (i += '} '),
                    l && (i += ' else { '),
                    i
                  );
                };
              },
              {},
            ],
            15: [
              function (e, t, i) {
                t.exports = function (e, t) {
                  var i = ' ',
                    r = e.level,
                    a = e.dataLevel,
                    o = e.schema[t],
                    n = e.schemaPath + e.util.getProperty(t),
                    s = e.errSchemaPath + '/' + t,
                    l = !e.opts.allErrors,
                    d = 'data' + (a || ''),
                    p = e.opts.$data && o && o.$data,
                    c = p
                      ? ((i +=
                          ' var schema' +
                          r +
                          ' = ' +
                          e.util.getData(o.$data, a, e.dataPathArr) +
                          '; '),
                        'schema' + r)
                      : o;
                  if (!p && 'number' != typeof o)
                    throw new Error(t + ' must be number');
                  var h = 'maxLength' == t ? '>' : '<';
                  (i += 'if ( '),
                    p &&
                      (i +=
                        ' (' +
                        c +
                        ' !== undefined && typeof ' +
                        c +
                        " != 'number') || "),
                    !1 === e.opts.unicode
                      ? (i += ' ' + d + '.length ')
                      : (i += ' ucs2length(' + d + ') '),
                    (i += ' ' + h + ' ' + c + ') { ');
                  var u = t,
                    f = f || [];
                  f.push(i),
                    (i = ''),
                    !1 !== e.createErrors
                      ? ((i +=
                          " { keyword: '" +
                          (u || '_limitLength') +
                          "' , dataPath: (dataPath || '') + " +
                          e.errorPath +
                          ' , schemaPath: ' +
                          e.util.toQuotedString(s) +
                          ' , params: { limit: ' +
                          c +
                          ' } '),
                        !1 !== e.opts.messages &&
                          ((i += " , message: 'should NOT be "),
                          (i += 'maxLength' == t ? 'longer' : 'shorter'),
                          (i += ' than '),
                          (i += p ? "' + " + c + " + '" : '' + o),
                          (i += " characters' ")),
                        e.opts.verbose &&
                          ((i += ' , schema:  '),
                          (i += p ? 'validate.schema' + n : '' + o),
                          (i +=
                            '         , parentSchema: validate.schema' +
                            e.schemaPath +
                            ' , data: ' +
                            d +
                            ' ')),
                        (i += ' } '))
                      : (i += ' {} ');
                  var m = i;
                  return (
                    (i = f.pop()),
                    !e.compositeRule && l
                      ? e.async
                        ? (i += ' throw new ValidationError([' + m + ']); ')
                        : (i +=
                            ' validate.errors = [' + m + ']; return false; ')
                      : (i +=
                          ' var err = ' +
                          m +
                          ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; '),
                    (i += '} '),
                    l && (i += ' else { '),
                    i
                  );
                };
              },
              {},
            ],
            16: [
              function (e, t, i) {
                t.exports = function (e, t) {
                  var i = ' ',
                    r = e.level,
                    a = e.dataLevel,
                    o = e.schema[t],
                    n = e.schemaPath + e.util.getProperty(t),
                    s = e.errSchemaPath + '/' + t,
                    l = !e.opts.allErrors,
                    d = 'data' + (a || ''),
                    p = e.opts.$data && o && o.$data,
                    c = p
                      ? ((i +=
                          ' var schema' +
                          r +
                          ' = ' +
                          e.util.getData(o.$data, a, e.dataPathArr) +
                          '; '),
                        'schema' + r)
                      : o;
                  if (!p && 'number' != typeof o)
                    throw new Error(t + ' must be number');
                  (i += 'if ( '),
                    p &&
                      (i +=
                        ' (' +
                        c +
                        ' !== undefined && typeof ' +
                        c +
                        " != 'number') || "),
                    (i +=
                      ' Object.keys(' +
                      d +
                      ').length ' +
                      ('maxProperties' == t ? '>' : '<') +
                      ' ' +
                      c +
                      ') { ');
                  var h = t,
                    u = u || [];
                  u.push(i),
                    (i = ''),
                    !1 !== e.createErrors
                      ? ((i +=
                          " { keyword: '" +
                          (h || '_limitProperties') +
                          "' , dataPath: (dataPath || '') + " +
                          e.errorPath +
                          ' , schemaPath: ' +
                          e.util.toQuotedString(s) +
                          ' , params: { limit: ' +
                          c +
                          ' } '),
                        !1 !== e.opts.messages &&
                          ((i += " , message: 'should NOT have "),
                          (i += 'maxProperties' == t ? 'more' : 'fewer'),
                          (i += ' than '),
                          (i += p ? "' + " + c + " + '" : '' + o),
                          (i += " properties' ")),
                        e.opts.verbose &&
                          ((i += ' , schema:  '),
                          (i += p ? 'validate.schema' + n : '' + o),
                          (i +=
                            '         , parentSchema: validate.schema' +
                            e.schemaPath +
                            ' , data: ' +
                            d +
                            ' ')),
                        (i += ' } '))
                      : (i += ' {} ');
                  var f = i;
                  return (
                    (i = u.pop()),
                    !e.compositeRule && l
                      ? e.async
                        ? (i += ' throw new ValidationError([' + f + ']); ')
                        : (i +=
                            ' validate.errors = [' + f + ']; return false; ')
                      : (i +=
                          ' var err = ' +
                          f +
                          ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; '),
                    (i += '} '),
                    l && (i += ' else { '),
                    i
                  );
                };
              },
              {},
            ],
            17: [
              function (e, t, i) {
                t.exports = function (e, t) {
                  var i = ' ',
                    r = e.schema[t],
                    a = e.schemaPath + e.util.getProperty(t),
                    o = e.errSchemaPath + '/' + t,
                    n = !e.opts.allErrors,
                    s = e.util.copy(e),
                    l = '';
                  s.level++;
                  var d = 'valid' + s.level,
                    p = s.baseId,
                    c = !0,
                    h = r;
                  if (h)
                    for (var u, f = -1, m = h.length - 1; f < m; )
                      (u = h[(f += 1)]),
                        (e.opts.strictKeywords
                          ? 'object' == typeof u && 0 < Object.keys(u).length
                          : e.util.schemaHasRules(u, e.RULES.all)) &&
                          ((c = !1),
                          (s.schema = u),
                          (s.schemaPath = a + '[' + f + ']'),
                          (s.errSchemaPath = o + '/' + f),
                          (i += '  ' + e.validate(s) + ' '),
                          (s.baseId = p),
                          n && ((i += ' if (' + d + ') { '), (l += '}')));
                  return (
                    n &&
                      (i += c ? ' if (true) { ' : ' ' + l.slice(0, -1) + ' '),
                    i
                  );
                };
              },
              {},
            ],
            18: [
              function (e, t, i) {
                t.exports = function (e, t) {
                  var i = ' ',
                    r = e.level,
                    a = e.dataLevel,
                    o = e.schema[t],
                    n = e.schemaPath + e.util.getProperty(t),
                    s = e.errSchemaPath + '/' + t,
                    l = !e.opts.allErrors,
                    d = 'data' + (a || ''),
                    p = 'valid' + r,
                    c = 'errs__' + r,
                    h = e.util.copy(e),
                    u = '';
                  h.level++;
                  var f = 'valid' + h.level;
                  if (
                    o.every(function (t) {
                      return e.opts.strictKeywords
                        ? 'object' == typeof t && 0 < Object.keys(t).length
                        : e.util.schemaHasRules(t, e.RULES.all);
                    })
                  ) {
                    var m = h.baseId;
                    i += ' var ' + c + ' = errors; var ' + p + ' = false;  ';
                    var y = e.compositeRule;
                    e.compositeRule = h.compositeRule = !0;
                    var g = o;
                    if (g)
                      for (var b, v = -1, w = g.length - 1; v < w; )
                        (b = g[(v += 1)]),
                          (h.schema = b),
                          (h.schemaPath = n + '[' + v + ']'),
                          (h.errSchemaPath = s + '/' + v),
                          (i += '  ' + e.validate(h) + ' '),
                          (h.baseId = m),
                          (i +=
                            ' ' +
                            p +
                            ' = ' +
                            p +
                            ' || ' +
                            f +
                            '; if (!' +
                            p +
                            ') { '),
                          (u += '}');
                    (e.compositeRule = h.compositeRule = y),
                      (i += ' ' + u + ' if (!' + p + ') {   var err =   '),
                      !1 !== e.createErrors
                        ? ((i +=
                            " { keyword: 'anyOf' , dataPath: (dataPath || '') + " +
                            e.errorPath +
                            ' , schemaPath: ' +
                            e.util.toQuotedString(s) +
                            ' , params: {} '),
                          !1 !== e.opts.messages &&
                            (i +=
                              " , message: 'should match some schema in anyOf' "),
                          e.opts.verbose &&
                            (i +=
                              ' , schema: validate.schema' +
                              n +
                              ' , parentSchema: validate.schema' +
                              e.schemaPath +
                              ' , data: ' +
                              d +
                              ' '),
                          (i += ' } '))
                        : (i += ' {} '),
                      (i +=
                        ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; '),
                      !e.compositeRule &&
                        l &&
                        (e.async
                          ? (i += ' throw new ValidationError(vErrors); ')
                          : (i +=
                              ' validate.errors = vErrors; return false; ')),
                      (i +=
                        ' } else {  errors = ' +
                        c +
                        '; if (vErrors !== null) { if (' +
                        c +
                        ') vErrors.length = ' +
                        c +
                        '; else vErrors = null; } '),
                      e.opts.allErrors && (i += ' } ');
                  } else l && (i += ' if (true) { ');
                  return i;
                };
              },
              {},
            ],
            19: [
              function (e, t, i) {
                t.exports = function (e, t) {
                  var i = ' ',
                    r = e.schema[t],
                    a = e.errSchemaPath + '/' + t,
                    o = (e.opts.allErrors, e.util.toQuotedString(r));
                  return (
                    !0 === e.opts.$comment
                      ? (i += ' console.log(' + o + ');')
                      : 'function' == typeof e.opts.$comment &&
                        (i +=
                          ' self._opts.$comment(' +
                          o +
                          ', ' +
                          e.util.toQuotedString(a) +
                          ', validate.root.schema);'),
                    i
                  );
                };
              },
              {},
            ],
            20: [
              function (e, t, i) {
                t.exports = function (e, t) {
                  var i = ' ',
                    r = e.level,
                    a = e.dataLevel,
                    o = e.schema[t],
                    n = e.schemaPath + e.util.getProperty(t),
                    s = e.errSchemaPath + '/' + t,
                    l = !e.opts.allErrors,
                    d = 'data' + (a || ''),
                    p = 'valid' + r,
                    c = e.opts.$data && o && o.$data;
                  c &&
                    (i +=
                      ' var schema' +
                      r +
                      ' = ' +
                      e.util.getData(o.$data, a, e.dataPathArr) +
                      '; '),
                    c ||
                      (i += ' var schema' + r + ' = validate.schema' + n + ';'),
                    (i +=
                      'var ' +
                      p +
                      ' = equal(' +
                      d +
                      ', schema' +
                      r +
                      '); if (!' +
                      p +
                      ') {   ');
                  var h = h || [];
                  h.push(i),
                    (i = ''),
                    !1 !== e.createErrors
                      ? ((i +=
                          " { keyword: 'const' , dataPath: (dataPath || '') + " +
                          e.errorPath +
                          ' , schemaPath: ' +
                          e.util.toQuotedString(s) +
                          ' , params: { allowedValue: schema' +
                          r +
                          ' } '),
                        !1 !== e.opts.messages &&
                          (i += " , message: 'should be equal to constant' "),
                        e.opts.verbose &&
                          (i +=
                            ' , schema: validate.schema' +
                            n +
                            ' , parentSchema: validate.schema' +
                            e.schemaPath +
                            ' , data: ' +
                            d +
                            ' '),
                        (i += ' } '))
                      : (i += ' {} ');
                  var u = i;
                  return (
                    (i = h.pop()),
                    !e.compositeRule && l
                      ? e.async
                        ? (i += ' throw new ValidationError([' + u + ']); ')
                        : (i +=
                            ' validate.errors = [' + u + ']; return false; ')
                      : (i +=
                          ' var err = ' +
                          u +
                          ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; '),
                    (i += ' }'),
                    l && (i += ' else { '),
                    i
                  );
                };
              },
              {},
            ],
            21: [
              function (e, t, i) {
                t.exports = function (e, t) {
                  var i = ' ',
                    r = e.level,
                    a = e.dataLevel,
                    o = e.schema[t],
                    n = e.schemaPath + e.util.getProperty(t),
                    s = e.errSchemaPath + '/' + t,
                    l = !e.opts.allErrors,
                    d = 'data' + (a || ''),
                    p = 'valid' + r,
                    c = 'errs__' + r,
                    h = e.util.copy(e);
                  h.level++;
                  var u,
                    f,
                    m,
                    y = 'valid' + h.level,
                    g = 'i' + r,
                    b = (h.dataLevel = e.dataLevel + 1),
                    v = 'data' + b,
                    w = e.baseId,
                    j = e.opts.strictKeywords
                      ? 'object' == typeof o && 0 < Object.keys(o).length
                      : e.util.schemaHasRules(o, e.RULES.all);
                  (i += 'var ' + c + ' = errors;var ' + p + ';'),
                    j
                      ? ((u = e.compositeRule),
                        (e.compositeRule = h.compositeRule = !0),
                        (h.schema = o),
                        (h.schemaPath = n),
                        (h.errSchemaPath = s),
                        (i +=
                          ' var ' +
                          y +
                          ' = false; for (var ' +
                          g +
                          ' = 0; ' +
                          g +
                          ' < ' +
                          d +
                          '.length; ' +
                          g +
                          '++) { '),
                        (h.errorPath = e.util.getPathExpr(
                          e.errorPath,
                          g,
                          e.opts.jsonPointers,
                          !0,
                        )),
                        (f = d + '[' + g + ']'),
                        (h.dataPathArr[b] = g),
                        (m = e.validate(h)),
                        (h.baseId = w),
                        e.util.varOccurences(m, v) < 2
                          ? (i += ' ' + e.util.varReplace(m, v, f) + ' ')
                          : (i += ' var ' + v + ' = ' + f + '; ' + m + ' '),
                        (i += ' if (' + y + ') break; }  '),
                        (e.compositeRule = h.compositeRule = u),
                        (i += '  if (!' + y + ') {'))
                      : (i += ' if (' + d + '.length == 0) {');
                  var S = S || [];
                  S.push(i),
                    (i = ''),
                    !1 !== e.createErrors
                      ? ((i +=
                          " { keyword: 'contains' , dataPath: (dataPath || '') + " +
                          e.errorPath +
                          ' , schemaPath: ' +
                          e.util.toQuotedString(s) +
                          ' , params: {} '),
                        !1 !== e.opts.messages &&
                          (i += " , message: 'should contain a valid item' "),
                        e.opts.verbose &&
                          (i +=
                            ' , schema: validate.schema' +
                            n +
                            ' , parentSchema: validate.schema' +
                            e.schemaPath +
                            ' , data: ' +
                            d +
                            ' '),
                        (i += ' } '))
                      : (i += ' {} ');
                  var P = i;
                  return (
                    (i = S.pop()),
                    !e.compositeRule && l
                      ? e.async
                        ? (i += ' throw new ValidationError([' + P + ']); ')
                        : (i +=
                            ' validate.errors = [' + P + ']; return false; ')
                      : (i +=
                          ' var err = ' +
                          P +
                          ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; '),
                    (i += ' } else { '),
                    j &&
                      (i +=
                        '  errors = ' +
                        c +
                        '; if (vErrors !== null) { if (' +
                        c +
                        ') vErrors.length = ' +
                        c +
                        '; else vErrors = null; } '),
                    e.opts.allErrors && (i += ' } '),
                    i
                  );
                };
              },
              {},
            ],
            22: [
              function (e, t, i) {
                t.exports = function (e, t) {
                  var i,
                    r,
                    a,
                    o,
                    n,
                    s,
                    l = ' ',
                    d = e.level,
                    p = e.dataLevel,
                    c = e.schema[t],
                    h = e.schemaPath + e.util.getProperty(t),
                    u = e.errSchemaPath + '/' + t,
                    f = !e.opts.allErrors,
                    m = 'data' + (p || ''),
                    y = 'valid' + d,
                    g = 'errs__' + d,
                    b = e.opts.$data && c && c.$data,
                    v = b
                      ? ((l +=
                          ' var schema' +
                          d +
                          ' = ' +
                          e.util.getData(c.$data, p, e.dataPathArr) +
                          '; '),
                        'schema' + d)
                      : c,
                    w = this,
                    j = 'definition' + d,
                    S = w.definition,
                    P = '';
                  if (b && S.$data) {
                    s = 'keywordValidate' + d;
                    var I = S.validateSchema;
                    l +=
                      ' var ' +
                      j +
                      " = RULES.custom['" +
                      t +
                      "'].definition; var " +
                      s +
                      ' = ' +
                      j +
                      '.validate;';
                  } else {
                    if (!(n = e.useCustomRule(w, c, e.schema, e))) return;
                    (v = 'validate.schema' + h),
                      (s = n.code),
                      (r = S.compile),
                      (a = S.inline),
                      (o = S.macro);
                  }
                  var _,
                    x,
                    T,
                    A,
                    L,
                    E,
                    D,
                    $,
                    R,
                    F,
                    q = s + '.errors',
                    O = 'i' + d,
                    k = 'ruleErr' + d,
                    C = S.async;
                  if (C && !e.async)
                    throw new Error('async keyword in sync schema');
                  return (
                    a || o || (l += q + ' = null;'),
                    (l += 'var ' + g + ' = errors;var ' + y + ';'),
                    b &&
                      S.$data &&
                      ((P += '}'),
                      (l +=
                        ' if (' +
                        v +
                        ' === undefined) { ' +
                        y +
                        ' = true; } else { '),
                      I &&
                        ((P += '}'),
                        (l +=
                          ' ' +
                          y +
                          ' = ' +
                          j +
                          '.validateSchema(' +
                          v +
                          '); if (' +
                          y +
                          ') { '))),
                    a
                      ? S.statements
                        ? (l += ' ' + n.validate + ' ')
                        : (l += ' ' + y + ' = ' + n.validate + '; ')
                      : o
                      ? ((P = ''),
                        (_ = e.util.copy(e)).level++,
                        (x = 'valid' + _.level),
                        (_.schema = n.validate),
                        (_.schemaPath = ''),
                        (T = e.compositeRule),
                        (e.compositeRule = _.compositeRule = !0),
                        (A = e.validate(_).replace(/validate\.schema/g, s)),
                        (e.compositeRule = _.compositeRule = T),
                        (l += ' ' + A))
                      : (($ = $ || []).push(l),
                        (l = ''),
                        (l += '  ' + s + '.call( '),
                        e.opts.passContext ? (l += 'this') : (l += 'self'),
                        r || !1 === S.schema
                          ? (l += ' , ' + m + ' ')
                          : (l +=
                              ' , ' +
                              v +
                              ' , ' +
                              m +
                              ' , validate.schema' +
                              e.schemaPath +
                              ' '),
                        (l += " , (dataPath || '')"),
                        '""' != e.errorPath && (l += ' + ' + e.errorPath),
                        (D = l +=
                          ' , ' +
                          (L = p ? 'data' + (p - 1 || '') : 'parentData') +
                          ' , ' +
                          (E = p ? e.dataPathArr[p] : 'parentDataProperty') +
                          ' , rootData )  '),
                        (l = $.pop()),
                        !1 === S.errors
                          ? ((l += ' ' + y + ' = '),
                            C && (l += 'await '),
                            (l += D + '; '))
                          : (l += C
                              ? ' var ' +
                                (q = 'customErrors' + d) +
                                ' = null; try { ' +
                                y +
                                ' = await ' +
                                D +
                                '; } catch (e) { ' +
                                y +
                                ' = false; if (e instanceof ValidationError) ' +
                                q +
                                ' = e.errors; else throw e; } '
                              : ' ' + q + ' = null; ' + y + ' = ' + D + '; ')),
                    S.modifying &&
                      (l +=
                        ' if (' + L + ') ' + m + ' = ' + L + '[' + E + '];'),
                    (l += '' + P),
                    S.valid
                      ? f && (l += ' if (true) { ')
                      : ((l += ' if ( '),
                        void 0 === S.valid
                          ? ((l += ' !'), (l += o ? '' + x : y))
                          : (l += ' ' + !S.valid + ' '),
                        (l += ') { '),
                        (i = w.keyword),
                        ($ = $ || []).push(l),
                        ($ = $ || []).push((l = '')),
                        (l = ''),
                        !1 !== e.createErrors
                          ? ((l +=
                              " { keyword: '" +
                              (i || 'custom') +
                              "' , dataPath: (dataPath || '') + " +
                              e.errorPath +
                              ' , schemaPath: ' +
                              e.util.toQuotedString(u) +
                              " , params: { keyword: '" +
                              w.keyword +
                              "' } "),
                            !1 !== e.opts.messages &&
                              (l +=
                                ' , message: \'should pass "' +
                                w.keyword +
                                '" keyword validation\' '),
                            e.opts.verbose &&
                              (l +=
                                ' , schema: validate.schema' +
                                h +
                                ' , parentSchema: validate.schema' +
                                e.schemaPath +
                                ' , data: ' +
                                m +
                                ' '),
                            (l += ' } '))
                          : (l += ' {} '),
                        (R = l),
                        (l = $.pop()),
                        !e.compositeRule && f
                          ? e.async
                            ? (l += ' throw new ValidationError([' + R + ']); ')
                            : (l +=
                                ' validate.errors = [' +
                                R +
                                ']; return false; ')
                          : (l +=
                              ' var err = ' +
                              R +
                              ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; '),
                        (F = l),
                        (l = $.pop()),
                        a
                          ? S.errors
                            ? 'full' != S.errors &&
                              ((l +=
                                '  for (var ' +
                                O +
                                '=' +
                                g +
                                '; ' +
                                O +
                                '<errors; ' +
                                O +
                                '++) { var ' +
                                k +
                                ' = vErrors[' +
                                O +
                                ']; if (' +
                                k +
                                '.dataPath === undefined) ' +
                                k +
                                ".dataPath = (dataPath || '') + " +
                                e.errorPath +
                                '; if (' +
                                k +
                                '.schemaPath === undefined) { ' +
                                k +
                                '.schemaPath = "' +
                                u +
                                '"; } '),
                              e.opts.verbose &&
                                (l +=
                                  ' ' +
                                  k +
                                  '.schema = ' +
                                  v +
                                  '; ' +
                                  k +
                                  '.data = ' +
                                  m +
                                  '; '),
                              (l += ' } '))
                            : !1 === S.errors
                            ? (l += ' ' + F + ' ')
                            : ((l +=
                                ' if (' +
                                g +
                                ' == errors) { ' +
                                F +
                                ' } else {  for (var ' +
                                O +
                                '=' +
                                g +
                                '; ' +
                                O +
                                '<errors; ' +
                                O +
                                '++) { var ' +
                                k +
                                ' = vErrors[' +
                                O +
                                ']; if (' +
                                k +
                                '.dataPath === undefined) ' +
                                k +
                                ".dataPath = (dataPath || '') + " +
                                e.errorPath +
                                '; if (' +
                                k +
                                '.schemaPath === undefined) { ' +
                                k +
                                '.schemaPath = "' +
                                u +
                                '"; } '),
                              e.opts.verbose &&
                                (l +=
                                  ' ' +
                                  k +
                                  '.schema = ' +
                                  v +
                                  '; ' +
                                  k +
                                  '.data = ' +
                                  m +
                                  '; '),
                              (l += ' } } '))
                          : o
                          ? ((l += '   var err =   '),
                            !1 !== e.createErrors
                              ? ((l +=
                                  " { keyword: '" +
                                  (i || 'custom') +
                                  "' , dataPath: (dataPath || '') + " +
                                  e.errorPath +
                                  ' , schemaPath: ' +
                                  e.util.toQuotedString(u) +
                                  " , params: { keyword: '" +
                                  w.keyword +
                                  "' } "),
                                !1 !== e.opts.messages &&
                                  (l +=
                                    ' , message: \'should pass "' +
                                    w.keyword +
                                    '" keyword validation\' '),
                                e.opts.verbose &&
                                  (l +=
                                    ' , schema: validate.schema' +
                                    h +
                                    ' , parentSchema: validate.schema' +
                                    e.schemaPath +
                                    ' , data: ' +
                                    m +
                                    ' '),
                                (l += ' } '))
                              : (l += ' {} '),
                            (l +=
                              ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; '),
                            !e.compositeRule &&
                              f &&
                              (e.async
                                ? (l += ' throw new ValidationError(vErrors); ')
                                : (l +=
                                    ' validate.errors = vErrors; return false; ')))
                          : !1 === S.errors
                          ? (l += ' ' + F + ' ')
                          : ((l +=
                              ' if (Array.isArray(' +
                              q +
                              ')) { if (vErrors === null) vErrors = ' +
                              q +
                              '; else vErrors = vErrors.concat(' +
                              q +
                              '); errors = vErrors.length;  for (var ' +
                              O +
                              '=' +
                              g +
                              '; ' +
                              O +
                              '<errors; ' +
                              O +
                              '++) { var ' +
                              k +
                              ' = vErrors[' +
                              O +
                              ']; if (' +
                              k +
                              '.dataPath === undefined) ' +
                              k +
                              ".dataPath = (dataPath || '') + " +
                              e.errorPath +
                              ';  ' +
                              k +
                              '.schemaPath = "' +
                              u +
                              '";  '),
                            e.opts.verbose &&
                              (l +=
                                ' ' +
                                k +
                                '.schema = ' +
                                v +
                                '; ' +
                                k +
                                '.data = ' +
                                m +
                                '; '),
                            (l += ' } } else { ' + F + ' } ')),
                        (l += ' } '),
                        f && (l += ' else { ')),
                    l
                  );
                };
              },
              {},
            ],
            23: [
              function (e, t, i) {
                t.exports = function (e, t) {
                  var i = ' ',
                    r = e.level,
                    a = e.dataLevel,
                    o = e.schema[t],
                    n = e.schemaPath + e.util.getProperty(t),
                    s = e.errSchemaPath + '/' + t,
                    l = !e.opts.allErrors,
                    d = 'data' + (a || ''),
                    p = 'errs__' + r,
                    c = e.util.copy(e),
                    h = '';
                  c.level++;
                  var u,
                    f = 'valid' + c.level,
                    m = {},
                    y = {},
                    g = e.opts.ownProperties;
                  for (v in o)
                    '__proto__' != v &&
                      ((F = o[v]), ((u = Array.isArray(F) ? y : m)[v] = F));
                  i += 'var ' + p + ' = errors;';
                  var b = e.errorPath;
                  for (var v in ((i += 'var missing' + r + ';'), y))
                    if ((u = y[v]).length) {
                      if (
                        ((i +=
                          ' if ( ' +
                          d +
                          e.util.getProperty(v) +
                          ' !== undefined '),
                        g &&
                          (i +=
                            ' && Object.prototype.hasOwnProperty.call(' +
                            d +
                            ", '" +
                            e.util.escapeQuotes(v) +
                            "') "),
                        l)
                      ) {
                        i += ' && ( ';
                        var w = u;
                        if (w)
                          for (var j = -1, S = w.length - 1; j < S; )
                            (A = w[(j += 1)]),
                              j && (i += ' || '),
                              (i +=
                                ' ( ( ' +
                                ($ = d + (D = e.util.getProperty(A))) +
                                ' === undefined '),
                              g &&
                                (i +=
                                  ' || ! Object.prototype.hasOwnProperty.call(' +
                                  d +
                                  ", '" +
                                  e.util.escapeQuotes(A) +
                                  "') "),
                              (i +=
                                ') && (missing' +
                                r +
                                ' = ' +
                                e.util.toQuotedString(
                                  e.opts.jsonPointers ? A : D,
                                ) +
                                ') ) ');
                        i += ')) {  ';
                        var P = 'missing' + r,
                          I = "' + " + P + " + '";
                        e.opts._errorDataPathProperty &&
                          (e.errorPath = e.opts.jsonPointers
                            ? e.util.getPathExpr(b, P, !0)
                            : b + ' + ' + P);
                        var _ = _ || [];
                        _.push(i),
                          (i = ''),
                          !1 !== e.createErrors
                            ? ((i +=
                                " { keyword: 'dependencies' , dataPath: (dataPath || '') + " +
                                e.errorPath +
                                ' , schemaPath: ' +
                                e.util.toQuotedString(s) +
                                " , params: { property: '" +
                                e.util.escapeQuotes(v) +
                                "', missingProperty: '" +
                                I +
                                "', depsCount: " +
                                u.length +
                                ", deps: '" +
                                e.util.escapeQuotes(
                                  1 == u.length ? u[0] : u.join(', '),
                                ) +
                                "' } "),
                              !1 !== e.opts.messages &&
                                ((i += " , message: 'should have "),
                                1 == u.length
                                  ? (i +=
                                      'property ' + e.util.escapeQuotes(u[0]))
                                  : (i +=
                                      'properties ' +
                                      e.util.escapeQuotes(u.join(', '))),
                                (i +=
                                  ' when property ' +
                                  e.util.escapeQuotes(v) +
                                  " is present' ")),
                              e.opts.verbose &&
                                (i +=
                                  ' , schema: validate.schema' +
                                  n +
                                  ' , parentSchema: validate.schema' +
                                  e.schemaPath +
                                  ' , data: ' +
                                  d +
                                  ' '),
                              (i += ' } '))
                            : (i += ' {} ');
                        var x = i;
                        (i = _.pop()),
                          !e.compositeRule && l
                            ? e.async
                              ? (i +=
                                  ' throw new ValidationError([' + x + ']); ')
                              : (i +=
                                  ' validate.errors = [' +
                                  x +
                                  ']; return false; ')
                            : (i +=
                                ' var err = ' +
                                x +
                                ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ');
                      } else {
                        i += ' ) { ';
                        var T = u;
                        if (T)
                          for (var A, L = -1, E = T.length - 1; L < E; ) {
                            A = T[(L += 1)];
                            var D = e.util.getProperty(A),
                              $ = ((I = e.util.escapeQuotes(A)), d + D);
                            e.opts._errorDataPathProperty &&
                              (e.errorPath = e.util.getPath(
                                b,
                                A,
                                e.opts.jsonPointers,
                              )),
                              (i += ' if ( ' + $ + ' === undefined '),
                              g &&
                                (i +=
                                  ' || ! Object.prototype.hasOwnProperty.call(' +
                                  d +
                                  ", '" +
                                  e.util.escapeQuotes(A) +
                                  "') "),
                              (i += ') {  var err =   '),
                              !1 !== e.createErrors
                                ? ((i +=
                                    " { keyword: 'dependencies' , dataPath: (dataPath || '') + " +
                                    e.errorPath +
                                    ' , schemaPath: ' +
                                    e.util.toQuotedString(s) +
                                    " , params: { property: '" +
                                    e.util.escapeQuotes(v) +
                                    "', missingProperty: '" +
                                    I +
                                    "', depsCount: " +
                                    u.length +
                                    ", deps: '" +
                                    e.util.escapeQuotes(
                                      1 == u.length ? u[0] : u.join(', '),
                                    ) +
                                    "' } "),
                                  !1 !== e.opts.messages &&
                                    ((i += " , message: 'should have "),
                                    1 == u.length
                                      ? (i +=
                                          'property ' +
                                          e.util.escapeQuotes(u[0]))
                                      : (i +=
                                          'properties ' +
                                          e.util.escapeQuotes(u.join(', '))),
                                    (i +=
                                      ' when property ' +
                                      e.util.escapeQuotes(v) +
                                      " is present' ")),
                                  e.opts.verbose &&
                                    (i +=
                                      ' , schema: validate.schema' +
                                      n +
                                      ' , parentSchema: validate.schema' +
                                      e.schemaPath +
                                      ' , data: ' +
                                      d +
                                      ' '),
                                  (i += ' } '))
                                : (i += ' {} '),
                              (i +=
                                ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ');
                          }
                      }
                      (i += ' }   '), l && ((h += '}'), (i += ' else { '));
                    }
                  e.errorPath = b;
                  var R = c.baseId;
                  for (var v in m) {
                    var F = m[v];
                    (e.opts.strictKeywords
                      ? 'object' == typeof F && 0 < Object.keys(F).length
                      : e.util.schemaHasRules(F, e.RULES.all)) &&
                      ((i +=
                        ' ' +
                        f +
                        ' = true; if ( ' +
                        d +
                        e.util.getProperty(v) +
                        ' !== undefined '),
                      g &&
                        (i +=
                          ' && Object.prototype.hasOwnProperty.call(' +
                          d +
                          ", '" +
                          e.util.escapeQuotes(v) +
                          "') "),
                      (i += ') { '),
                      (c.schema = F),
                      (c.schemaPath = n + e.util.getProperty(v)),
                      (c.errSchemaPath = s + '/' + e.util.escapeFragment(v)),
                      (i += '  ' + e.validate(c) + ' '),
                      (c.baseId = R),
                      (i += ' }  '),
                      l && ((i += ' if (' + f + ') { '), (h += '}')));
                  }
                  return (
                    l && (i += '   ' + h + ' if (' + p + ' == errors) {'), i
                  );
                };
              },
              {},
            ],
            24: [
              function (e, t, i) {
                t.exports = function (e, t) {
                  var i = ' ',
                    r = e.level,
                    a = e.dataLevel,
                    o = e.schema[t],
                    n = e.schemaPath + e.util.getProperty(t),
                    s = e.errSchemaPath + '/' + t,
                    l = !e.opts.allErrors,
                    d = 'data' + (a || ''),
                    p = 'valid' + r,
                    c = e.opts.$data && o && o.$data,
                    h =
                      (c &&
                        (i +=
                          ' var schema' +
                          r +
                          ' = ' +
                          e.util.getData(o.$data, a, e.dataPathArr) +
                          '; '),
                      'i' + r),
                    u = 'schema' + r;
                  c || (i += ' var ' + u + ' = validate.schema' + n + ';'),
                    (i += 'var ' + p + ';'),
                    c &&
                      (i +=
                        ' if (schema' +
                        r +
                        ' === undefined) ' +
                        p +
                        ' = true; else if (!Array.isArray(schema' +
                        r +
                        ')) ' +
                        p +
                        ' = false; else {'),
                    (i +=
                      p +
                      ' = false;for (var ' +
                      h +
                      '=0; ' +
                      h +
                      '<' +
                      u +
                      '.length; ' +
                      h +
                      '++) if (equal(' +
                      d +
                      ', ' +
                      u +
                      '[' +
                      h +
                      '])) { ' +
                      p +
                      ' = true; break; }'),
                    c && (i += '  }  '),
                    (i += ' if (!' + p + ') {   ');
                  var f = f || [];
                  f.push(i),
                    (i = ''),
                    !1 !== e.createErrors
                      ? ((i +=
                          " { keyword: 'enum' , dataPath: (dataPath || '') + " +
                          e.errorPath +
                          ' , schemaPath: ' +
                          e.util.toQuotedString(s) +
                          ' , params: { allowedValues: schema' +
                          r +
                          ' } '),
                        !1 !== e.opts.messages &&
                          (i +=
                            " , message: 'should be equal to one of the allowed values' "),
                        e.opts.verbose &&
                          (i +=
                            ' , schema: validate.schema' +
                            n +
                            ' , parentSchema: validate.schema' +
                            e.schemaPath +
                            ' , data: ' +
                            d +
                            ' '),
                        (i += ' } '))
                      : (i += ' {} ');
                  var m = i;
                  return (
                    (i = f.pop()),
                    !e.compositeRule && l
                      ? e.async
                        ? (i += ' throw new ValidationError([' + m + ']); ')
                        : (i +=
                            ' validate.errors = [' + m + ']; return false; ')
                      : (i +=
                          ' var err = ' +
                          m +
                          ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; '),
                    (i += ' }'),
                    l && (i += ' else { '),
                    i
                  );
                };
              },
              {},
            ],
            25: [
              function (e, t, i) {
                t.exports = function (e, t, i) {
                  var r = ' ',
                    a = e.level,
                    o = e.dataLevel,
                    n = e.schema[t],
                    s = e.schemaPath + e.util.getProperty(t),
                    l = e.errSchemaPath + '/' + t,
                    d = !e.opts.allErrors,
                    p = 'data' + (o || '');
                  if (!1 === e.opts.format)
                    return d && (r += ' if (true) { '), r;
                  var c,
                    h = e.opts.$data && n && n.$data,
                    u = h
                      ? ((r +=
                          ' var schema' +
                          a +
                          ' = ' +
                          e.util.getData(n.$data, o, e.dataPathArr) +
                          '; '),
                        'schema' + a)
                      : n,
                    f = e.opts.unknownFormats,
                    m = Array.isArray(f);
                  if (h)
                    (r +=
                      ' var ' +
                      (c = 'format' + a) +
                      ' = formats[' +
                      u +
                      ']; var ' +
                      (y = 'isObject' + a) +
                      ' = typeof ' +
                      c +
                      " == 'object' && !(" +
                      c +
                      ' instanceof RegExp) && ' +
                      c +
                      '.validate; var ' +
                      (b = 'formatType' + a) +
                      ' = ' +
                      y +
                      ' && ' +
                      c +
                      ".type || 'string'; if (" +
                      y +
                      ') { '),
                      e.async &&
                        (r += ' var async' + a + ' = ' + c + '.async; '),
                      (r += ' ' + c + ' = ' + c + '.validate; } if (  '),
                      h &&
                        (r +=
                          ' (' +
                          u +
                          ' !== undefined && typeof ' +
                          u +
                          " != 'string') || "),
                      (r += ' ('),
                      'ignore' != f &&
                        ((r += ' (' + u + ' && !' + c + ' '),
                        m &&
                          (r +=
                            ' && self._opts.unknownFormats.indexOf(' +
                            u +
                            ') == -1 '),
                        (r += ') || ')),
                      (r +=
                        ' (' +
                        c +
                        ' && ' +
                        b +
                        " == '" +
                        i +
                        "' && !(typeof " +
                        c +
                        " == 'function' ? "),
                      e.async
                        ? (r +=
                            ' (async' +
                            a +
                            ' ? await ' +
                            c +
                            '(' +
                            p +
                            ') : ' +
                            c +
                            '(' +
                            p +
                            ')) ')
                        : (r += ' ' + c + '(' + p + ') '),
                      (r += ' : ' + c + '.test(' + p + '))))) {');
                  else {
                    if (!(c = e.formats[n])) {
                      if ('ignore' == f)
                        return (
                          e.logger.warn(
                            'unknown format "' +
                              n +
                              '" ignored in schema at path "' +
                              e.errSchemaPath +
                              '"',
                          ),
                          d && (r += ' if (true) { '),
                          r
                        );
                      if (m && 0 <= f.indexOf(n))
                        return d && (r += ' if (true) { '), r;
                      throw new Error(
                        'unknown format "' +
                          n +
                          '" is used in schema at path "' +
                          e.errSchemaPath +
                          '"',
                      );
                    }
                    var y,
                      g,
                      b =
                        ((y =
                          'object' == typeof c &&
                          !(c instanceof RegExp) &&
                          c.validate) &&
                          c.type) ||
                        'string';
                    if ((y && ((g = !0 === c.async), (c = c.validate)), b != i))
                      return d && (r += ' if (true) { '), r;
                    if (g) {
                      if (!e.async)
                        throw new Error('async format in sync schema');
                      r +=
                        ' if (!(await ' +
                        (v = 'formats' + e.util.getProperty(n) + '.validate') +
                        '(' +
                        p +
                        '))) { ';
                    } else {
                      r += ' if (! ';
                      var v = 'formats' + e.util.getProperty(n);
                      y && (v += '.validate'),
                        (r +=
                          'function' == typeof c
                            ? ' ' + v + '(' + p + ') '
                            : ' ' + v + '.test(' + p + ') '),
                        (r += ') { ');
                    }
                  }
                  var w = w || [];
                  w.push(r),
                    (r = ''),
                    !1 !== e.createErrors
                      ? ((r +=
                          " { keyword: 'format' , dataPath: (dataPath || '') + " +
                          e.errorPath +
                          ' , schemaPath: ' +
                          e.util.toQuotedString(l) +
                          ' , params: { format:  '),
                        (r += h ? '' + u : '' + e.util.toQuotedString(n)),
                        (r += '  } '),
                        !1 !== e.opts.messages &&
                          ((r += ' , message: \'should match format "'),
                          (r += h
                            ? "' + " + u + " + '"
                            : '' + e.util.escapeQuotes(n)),
                          (r += '"\' ')),
                        e.opts.verbose &&
                          ((r += ' , schema:  '),
                          (r += h
                            ? 'validate.schema' + s
                            : '' + e.util.toQuotedString(n)),
                          (r +=
                            '         , parentSchema: validate.schema' +
                            e.schemaPath +
                            ' , data: ' +
                            p +
                            ' ')),
                        (r += ' } '))
                      : (r += ' {} ');
                  var j = r;
                  return (
                    (r = w.pop()),
                    !e.compositeRule && d
                      ? e.async
                        ? (r += ' throw new ValidationError([' + j + ']); ')
                        : (r +=
                            ' validate.errors = [' + j + ']; return false; ')
                      : (r +=
                          ' var err = ' +
                          j +
                          ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; '),
                    (r += ' } '),
                    d && (r += ' else { '),
                    r
                  );
                };
              },
              {},
            ],
            26: [
              function (e, t, i) {
                t.exports = function (e, t) {
                  var i = ' ',
                    r = e.level,
                    a = e.dataLevel,
                    o = e.schema[t],
                    n = e.schemaPath + e.util.getProperty(t),
                    s = e.errSchemaPath + '/' + t,
                    l = !e.opts.allErrors,
                    d = 'data' + (a || ''),
                    p = 'valid' + r,
                    c = 'errs__' + r,
                    h = e.util.copy(e);
                  h.level++;
                  var u,
                    f,
                    m = 'valid' + h.level,
                    y = e.schema.then,
                    g = e.schema.else,
                    b =
                      void 0 !== y &&
                      (e.opts.strictKeywords
                        ? 'object' == typeof y && 0 < Object.keys(y).length
                        : e.util.schemaHasRules(y, e.RULES.all)),
                    v =
                      void 0 !== g &&
                      (e.opts.strictKeywords
                        ? 'object' == typeof g && 0 < Object.keys(g).length
                        : e.util.schemaHasRules(g, e.RULES.all)),
                    w = h.baseId;
                  return (
                    b || v
                      ? ((h.createErrors = !1),
                        (h.schema = o),
                        (h.schemaPath = n),
                        (h.errSchemaPath = s),
                        (i +=
                          ' var ' + c + ' = errors; var ' + p + ' = true;  '),
                        (f = e.compositeRule),
                        (e.compositeRule = h.compositeRule = !0),
                        (i += '  ' + e.validate(h) + ' '),
                        (h.baseId = w),
                        (h.createErrors = !0),
                        (i +=
                          '  errors = ' +
                          c +
                          '; if (vErrors !== null) { if (' +
                          c +
                          ') vErrors.length = ' +
                          c +
                          '; else vErrors = null; }  '),
                        (e.compositeRule = h.compositeRule = f),
                        b
                          ? ((i += ' if (' + m + ') {  '),
                            (h.schema = e.schema.then),
                            (h.schemaPath = e.schemaPath + '.then'),
                            (h.errSchemaPath = e.errSchemaPath + '/then'),
                            (i += '  ' + e.validate(h) + ' '),
                            (h.baseId = w),
                            (i += ' ' + p + ' = ' + m + '; '),
                            b && v
                              ? (i +=
                                  ' var ' +
                                  (u = 'ifClause' + r) +
                                  " = 'then'; ")
                              : (u = "'then'"),
                            (i += ' } '),
                            v && (i += ' else { '))
                          : (i += ' if (!' + m + ') { '),
                        v &&
                          ((h.schema = e.schema.else),
                          (h.schemaPath = e.schemaPath + '.else'),
                          (h.errSchemaPath = e.errSchemaPath + '/else'),
                          (i += '  ' + e.validate(h) + ' '),
                          (h.baseId = w),
                          (i += ' ' + p + ' = ' + m + '; '),
                          b && v
                            ? (i +=
                                ' var ' + (u = 'ifClause' + r) + " = 'else'; ")
                            : (u = "'else'"),
                          (i += ' } ')),
                        (i += ' if (!' + p + ') {   var err =   '),
                        !1 !== e.createErrors
                          ? ((i +=
                              " { keyword: 'if' , dataPath: (dataPath || '') + " +
                              e.errorPath +
                              ' , schemaPath: ' +
                              e.util.toQuotedString(s) +
                              ' , params: { failingKeyword: ' +
                              u +
                              ' } '),
                            !1 !== e.opts.messages &&
                              (i +=
                                " , message: 'should match \"' + " +
                                u +
                                " + '\" schema' "),
                            e.opts.verbose &&
                              (i +=
                                ' , schema: validate.schema' +
                                n +
                                ' , parentSchema: validate.schema' +
                                e.schemaPath +
                                ' , data: ' +
                                d +
                                ' '),
                            (i += ' } '))
                          : (i += ' {} '),
                        (i +=
                          ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; '),
                        !e.compositeRule &&
                          l &&
                          (e.async
                            ? (i += ' throw new ValidationError(vErrors); ')
                            : (i +=
                                ' validate.errors = vErrors; return false; ')),
                        (i += ' }   '),
                        l && (i += ' else { '))
                      : l && (i += ' if (true) { '),
                    i
                  );
                };
              },
              {},
            ],
            27: [
              function (e, t, i) {
                t.exports = {
                  $ref: e('./ref'),
                  allOf: e('./allOf'),
                  anyOf: e('./anyOf'),
                  $comment: e('./comment'),
                  const: e('./const'),
                  contains: e('./contains'),
                  dependencies: e('./dependencies'),
                  enum: e('./enum'),
                  format: e('./format'),
                  if: e('./if'),
                  items: e('./items'),
                  maximum: e('./_limit'),
                  minimum: e('./_limit'),
                  maxItems: e('./_limitItems'),
                  minItems: e('./_limitItems'),
                  maxLength: e('./_limitLength'),
                  minLength: e('./_limitLength'),
                  maxProperties: e('./_limitProperties'),
                  minProperties: e('./_limitProperties'),
                  multipleOf: e('./multipleOf'),
                  not: e('./not'),
                  oneOf: e('./oneOf'),
                  pattern: e('./pattern'),
                  properties: e('./properties'),
                  propertyNames: e('./propertyNames'),
                  required: e('./required'),
                  uniqueItems: e('./uniqueItems'),
                  validate: e('./validate'),
                };
              },
              {
                './_limit': 13,
                './_limitItems': 14,
                './_limitLength': 15,
                './_limitProperties': 16,
                './allOf': 17,
                './anyOf': 18,
                './comment': 19,
                './const': 20,
                './contains': 21,
                './dependencies': 23,
                './enum': 24,
                './format': 25,
                './if': 26,
                './items': 28,
                './multipleOf': 29,
                './not': 30,
                './oneOf': 31,
                './pattern': 32,
                './properties': 33,
                './propertyNames': 34,
                './ref': 35,
                './required': 36,
                './uniqueItems': 37,
                './validate': 38,
              },
            ],
            28: [
              function (e, t, i) {
                t.exports = function (e, t) {
                  var i = ' ',
                    r = e.level,
                    a = e.dataLevel,
                    o = e.schema[t],
                    n = e.schemaPath + e.util.getProperty(t),
                    s = e.errSchemaPath + '/' + t,
                    l = !e.opts.allErrors,
                    d = 'data' + (a || ''),
                    p = 'valid' + r,
                    c = 'errs__' + r,
                    h = e.util.copy(e),
                    u = '';
                  h.level++;
                  var f = 'valid' + h.level,
                    m = 'i' + r,
                    y = (h.dataLevel = e.dataLevel + 1),
                    g = 'data' + y,
                    b = e.baseId;
                  if (
                    ((i += 'var ' + c + ' = errors;var ' + p + ';'),
                    Array.isArray(o))
                  ) {
                    var v,
                      w,
                      j,
                      S = e.schema.additionalItems;
                    !1 === S &&
                      ((i +=
                        ' ' + p + ' = ' + d + '.length <= ' + o.length + '; '),
                      (v = s),
                      (s = e.errSchemaPath + '/additionalItems'),
                      (w = w || []).push((i += '  if (!' + p + ') {   ')),
                      (i = ''),
                      !1 !== e.createErrors
                        ? ((i +=
                            " { keyword: 'additionalItems' , dataPath: (dataPath || '') + " +
                            e.errorPath +
                            ' , schemaPath: ' +
                            e.util.toQuotedString(s) +
                            ' , params: { limit: ' +
                            o.length +
                            ' } '),
                          !1 !== e.opts.messages &&
                            (i +=
                              " , message: 'should NOT have more than " +
                              o.length +
                              " items' "),
                          e.opts.verbose &&
                            (i +=
                              ' , schema: false , parentSchema: validate.schema' +
                              e.schemaPath +
                              ' , data: ' +
                              d +
                              ' '),
                          (i += ' } '))
                        : (i += ' {} '),
                      (j = i),
                      (i = w.pop()),
                      !e.compositeRule && l
                        ? e.async
                          ? (i += ' throw new ValidationError([' + j + ']); ')
                          : (i +=
                              ' validate.errors = [' + j + ']; return false; ')
                        : (i +=
                            ' var err = ' +
                            j +
                            ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; '),
                      (i += ' } '),
                      (s = v),
                      l && ((u += '}'), (i += ' else { ')));
                    var P = o;
                    if (P)
                      for (var I = -1, _ = P.length - 1; I < _; ) {
                        var x,
                          T,
                          A = P[(I += 1)];
                        (e.opts.strictKeywords
                          ? 'object' == typeof A && 0 < Object.keys(A).length
                          : e.util.schemaHasRules(A, e.RULES.all)) &&
                          ((i +=
                            ' ' +
                            f +
                            ' = true; if (' +
                            d +
                            '.length > ' +
                            I +
                            ') { '),
                          (x = d + '[' + I + ']'),
                          (h.schema = A),
                          (h.schemaPath = n + '[' + I + ']'),
                          (h.errSchemaPath = s + '/' + I),
                          (h.errorPath = e.util.getPathExpr(
                            e.errorPath,
                            I,
                            e.opts.jsonPointers,
                            !0,
                          )),
                          (h.dataPathArr[y] = I),
                          (T = e.validate(h)),
                          (h.baseId = b),
                          e.util.varOccurences(T, g) < 2
                            ? (i += ' ' + e.util.varReplace(T, g, x) + ' ')
                            : (i += ' var ' + g + ' = ' + x + '; ' + T + ' '),
                          (i += ' }  '),
                          l && ((i += ' if (' + f + ') { '), (u += '}')));
                      }
                    'object' == typeof S &&
                      (e.opts.strictKeywords
                        ? 'object' == typeof S && 0 < Object.keys(S).length
                        : e.util.schemaHasRules(S, e.RULES.all)) &&
                      ((h.schema = S),
                      (h.schemaPath = e.schemaPath + '.additionalItems'),
                      (h.errSchemaPath = e.errSchemaPath + '/additionalItems'),
                      (i +=
                        ' ' +
                        f +
                        ' = true; if (' +
                        d +
                        '.length > ' +
                        o.length +
                        ') {  for (var ' +
                        m +
                        ' = ' +
                        o.length +
                        '; ' +
                        m +
                        ' < ' +
                        d +
                        '.length; ' +
                        m +
                        '++) { '),
                      (h.errorPath = e.util.getPathExpr(
                        e.errorPath,
                        m,
                        e.opts.jsonPointers,
                        !0,
                      )),
                      (x = d + '[' + m + ']'),
                      (h.dataPathArr[y] = m),
                      (T = e.validate(h)),
                      (h.baseId = b),
                      e.util.varOccurences(T, g) < 2
                        ? (i += ' ' + e.util.varReplace(T, g, x) + ' ')
                        : (i += ' var ' + g + ' = ' + x + '; ' + T + ' '),
                      l && (i += ' if (!' + f + ') break; '),
                      (i += ' } }  '),
                      l && ((i += ' if (' + f + ') { '), (u += '}')));
                  } else
                    (e.opts.strictKeywords
                      ? 'object' == typeof o && 0 < Object.keys(o).length
                      : e.util.schemaHasRules(o, e.RULES.all)) &&
                      ((h.schema = o),
                      (h.schemaPath = n),
                      (h.errSchemaPath = s),
                      (i +=
                        '  for (var ' +
                        m +
                        ' = 0; ' +
                        m +
                        ' < ' +
                        d +
                        '.length; ' +
                        m +
                        '++) { '),
                      (h.errorPath = e.util.getPathExpr(
                        e.errorPath,
                        m,
                        e.opts.jsonPointers,
                        !0,
                      )),
                      (x = d + '[' + m + ']'),
                      (h.dataPathArr[y] = m),
                      (T = e.validate(h)),
                      (h.baseId = b),
                      e.util.varOccurences(T, g) < 2
                        ? (i += ' ' + e.util.varReplace(T, g, x) + ' ')
                        : (i += ' var ' + g + ' = ' + x + '; ' + T + ' '),
                      l && (i += ' if (!' + f + ') break; '),
                      (i += ' }'));
                  return l && (i += ' ' + u + ' if (' + c + ' == errors) {'), i;
                };
              },
              {},
            ],
            29: [
              function (e, t, i) {
                t.exports = function (e, t) {
                  var i = ' ',
                    r = e.level,
                    a = e.dataLevel,
                    o = e.schema[t],
                    n = e.schemaPath + e.util.getProperty(t),
                    s = e.errSchemaPath + '/' + t,
                    l = !e.opts.allErrors,
                    d = 'data' + (a || ''),
                    p = e.opts.$data && o && o.$data,
                    c = p
                      ? ((i +=
                          ' var schema' +
                          r +
                          ' = ' +
                          e.util.getData(o.$data, a, e.dataPathArr) +
                          '; '),
                        'schema' + r)
                      : o;
                  if (!p && 'number' != typeof o)
                    throw new Error(t + ' must be number');
                  (i += 'var division' + r + ';if ('),
                    p &&
                      (i +=
                        ' ' +
                        c +
                        ' !== undefined && ( typeof ' +
                        c +
                        " != 'number' || "),
                    (i += ' (division' + r + ' = ' + d + ' / ' + c + ', '),
                    e.opts.multipleOfPrecision
                      ? (i +=
                          ' Math.abs(Math.round(division' +
                          r +
                          ') - division' +
                          r +
                          ') > 1e-' +
                          e.opts.multipleOfPrecision +
                          ' ')
                      : (i +=
                          ' division' +
                          r +
                          ' !== parseInt(division' +
                          r +
                          ') '),
                    (i += ' ) '),
                    p && (i += '  )  '),
                    (i += ' ) {   ');
                  var h = h || [];
                  h.push(i),
                    (i = ''),
                    !1 !== e.createErrors
                      ? ((i +=
                          " { keyword: 'multipleOf' , dataPath: (dataPath || '') + " +
                          e.errorPath +
                          ' , schemaPath: ' +
                          e.util.toQuotedString(s) +
                          ' , params: { multipleOf: ' +
                          c +
                          ' } '),
                        !1 !== e.opts.messages &&
                          ((i += " , message: 'should be multiple of "),
                          (i += p ? "' + " + c : c + "'")),
                        e.opts.verbose &&
                          ((i += ' , schema:  '),
                          (i += p ? 'validate.schema' + n : '' + o),
                          (i +=
                            '         , parentSchema: validate.schema' +
                            e.schemaPath +
                            ' , data: ' +
                            d +
                            ' ')),
                        (i += ' } '))
                      : (i += ' {} ');
                  var u = i;
                  return (
                    (i = h.pop()),
                    !e.compositeRule && l
                      ? e.async
                        ? (i += ' throw new ValidationError([' + u + ']); ')
                        : (i +=
                            ' validate.errors = [' + u + ']; return false; ')
                      : (i +=
                          ' var err = ' +
                          u +
                          ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; '),
                    (i += '} '),
                    l && (i += ' else { '),
                    i
                  );
                };
              },
              {},
            ],
            30: [
              function (e, t, i) {
                t.exports = function (e, t) {
                  var i = ' ',
                    r = e.level,
                    a = e.dataLevel,
                    o = e.schema[t],
                    n = e.schemaPath + e.util.getProperty(t),
                    s = e.errSchemaPath + '/' + t,
                    l = !e.opts.allErrors,
                    d = 'data' + (a || ''),
                    p = 'errs__' + r,
                    c = e.util.copy(e);
                  c.level++;
                  var h,
                    u,
                    f,
                    m,
                    y = 'valid' + c.level;
                  return (
                    (
                      e.opts.strictKeywords
                        ? 'object' == typeof o && 0 < Object.keys(o).length
                        : e.util.schemaHasRules(o, e.RULES.all)
                    )
                      ? ((c.schema = o),
                        (c.schemaPath = n),
                        (c.errSchemaPath = s),
                        (i += ' var ' + p + ' = errors;  '),
                        (h = e.compositeRule),
                        (e.compositeRule = c.compositeRule = !0),
                        (c.createErrors = !1),
                        c.opts.allErrors &&
                          ((u = c.opts.allErrors), (c.opts.allErrors = !1)),
                        (i += ' ' + e.validate(c) + ' '),
                        (c.createErrors = !0),
                        u && (c.opts.allErrors = u),
                        (e.compositeRule = c.compositeRule = h),
                        (f = f || []).push((i += ' if (' + y + ') {   ')),
                        (i = ''),
                        !1 !== e.createErrors
                          ? ((i +=
                              " { keyword: 'not' , dataPath: (dataPath || '') + " +
                              e.errorPath +
                              ' , schemaPath: ' +
                              e.util.toQuotedString(s) +
                              ' , params: {} '),
                            !1 !== e.opts.messages &&
                              (i += " , message: 'should NOT be valid' "),
                            e.opts.verbose &&
                              (i +=
                                ' , schema: validate.schema' +
                                n +
                                ' , parentSchema: validate.schema' +
                                e.schemaPath +
                                ' , data: ' +
                                d +
                                ' '),
                            (i += ' } '))
                          : (i += ' {} '),
                        (m = i),
                        (i = f.pop()),
                        !e.compositeRule && l
                          ? e.async
                            ? (i += ' throw new ValidationError([' + m + ']); ')
                            : (i +=
                                ' validate.errors = [' +
                                m +
                                ']; return false; ')
                          : (i +=
                              ' var err = ' +
                              m +
                              ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; '),
                        (i +=
                          ' } else {  errors = ' +
                          p +
                          '; if (vErrors !== null) { if (' +
                          p +
                          ') vErrors.length = ' +
                          p +
                          '; else vErrors = null; } '),
                        e.opts.allErrors && (i += ' } '))
                      : ((i += '  var err =   '),
                        !1 !== e.createErrors
                          ? ((i +=
                              " { keyword: 'not' , dataPath: (dataPath || '') + " +
                              e.errorPath +
                              ' , schemaPath: ' +
                              e.util.toQuotedString(s) +
                              ' , params: {} '),
                            !1 !== e.opts.messages &&
                              (i += " , message: 'should NOT be valid' "),
                            e.opts.verbose &&
                              (i +=
                                ' , schema: validate.schema' +
                                n +
                                ' , parentSchema: validate.schema' +
                                e.schemaPath +
                                ' , data: ' +
                                d +
                                ' '),
                            (i += ' } '))
                          : (i += ' {} '),
                        (i +=
                          ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; '),
                        l && (i += ' if (false) { ')),
                    i
                  );
                };
              },
              {},
            ],
            31: [
              function (e, t, i) {
                t.exports = function (e, t) {
                  var i = ' ',
                    r = e.level,
                    a = e.dataLevel,
                    o = e.schema[t],
                    n = e.schemaPath + e.util.getProperty(t),
                    s = e.errSchemaPath + '/' + t,
                    l = !e.opts.allErrors,
                    d = 'data' + (a || ''),
                    p = 'valid' + r,
                    c = 'errs__' + r,
                    h = e.util.copy(e),
                    u = '';
                  h.level++;
                  var f = 'valid' + h.level,
                    m = h.baseId,
                    y = 'prevValid' + r,
                    g = 'passingSchemas' + r;
                  i +=
                    'var ' +
                    c +
                    ' = errors , ' +
                    y +
                    ' = false , ' +
                    p +
                    ' = false , ' +
                    g +
                    ' = null; ';
                  var b = e.compositeRule;
                  e.compositeRule = h.compositeRule = !0;
                  var v = o;
                  if (v)
                    for (var w, j = -1, S = v.length - 1; j < S; )
                      (w = v[(j += 1)]),
                        (
                          e.opts.strictKeywords
                            ? 'object' == typeof w && 0 < Object.keys(w).length
                            : e.util.schemaHasRules(w, e.RULES.all)
                        )
                          ? ((h.schema = w),
                            (h.schemaPath = n + '[' + j + ']'),
                            (h.errSchemaPath = s + '/' + j),
                            (i += '  ' + e.validate(h) + ' '),
                            (h.baseId = m))
                          : (i += ' var ' + f + ' = true; '),
                        j &&
                          ((i +=
                            ' if (' +
                            f +
                            ' && ' +
                            y +
                            ') { ' +
                            p +
                            ' = false; ' +
                            g +
                            ' = [' +
                            g +
                            ', ' +
                            j +
                            ']; } else { '),
                          (u += '}')),
                        (i +=
                          ' if (' +
                          f +
                          ') { ' +
                          p +
                          ' = ' +
                          y +
                          ' = true; ' +
                          g +
                          ' = ' +
                          j +
                          '; }');
                  return (
                    (e.compositeRule = h.compositeRule = b),
                    (i += u + 'if (!' + p + ') {   var err =   '),
                    !1 !== e.createErrors
                      ? ((i +=
                          " { keyword: 'oneOf' , dataPath: (dataPath || '') + " +
                          e.errorPath +
                          ' , schemaPath: ' +
                          e.util.toQuotedString(s) +
                          ' , params: { passingSchemas: ' +
                          g +
                          ' } '),
                        !1 !== e.opts.messages &&
                          (i +=
                            " , message: 'should match exactly one schema in oneOf' "),
                        e.opts.verbose &&
                          (i +=
                            ' , schema: validate.schema' +
                            n +
                            ' , parentSchema: validate.schema' +
                            e.schemaPath +
                            ' , data: ' +
                            d +
                            ' '),
                        (i += ' } '))
                      : (i += ' {} '),
                    (i +=
                      ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; '),
                    !e.compositeRule &&
                      l &&
                      (e.async
                        ? (i += ' throw new ValidationError(vErrors); ')
                        : (i += ' validate.errors = vErrors; return false; ')),
                    (i +=
                      '} else {  errors = ' +
                      c +
                      '; if (vErrors !== null) { if (' +
                      c +
                      ') vErrors.length = ' +
                      c +
                      '; else vErrors = null; }'),
                    e.opts.allErrors && (i += ' } '),
                    i
                  );
                };
              },
              {},
            ],
            32: [
              function (e, t, i) {
                t.exports = function (e, t) {
                  var i = ' ',
                    r = e.level,
                    a = e.dataLevel,
                    o = e.schema[t],
                    n = e.schemaPath + e.util.getProperty(t),
                    s = e.errSchemaPath + '/' + t,
                    l = !e.opts.allErrors,
                    d = 'data' + (a || ''),
                    p = e.opts.$data && o && o.$data,
                    c = p
                      ? ((i +=
                          ' var schema' +
                          r +
                          ' = ' +
                          e.util.getData(o.$data, a, e.dataPathArr) +
                          '; '),
                        'schema' + r)
                      : o;
                  (i += 'if ( '),
                    p &&
                      (i +=
                        ' (' +
                        c +
                        ' !== undefined && typeof ' +
                        c +
                        " != 'string') || "),
                    (i +=
                      ' !' +
                      (p ? '(new RegExp(' + c + '))' : e.usePattern(o)) +
                      '.test(' +
                      d +
                      ') ) {   ');
                  var h = h || [];
                  h.push(i),
                    (i = ''),
                    !1 !== e.createErrors
                      ? ((i +=
                          " { keyword: 'pattern' , dataPath: (dataPath || '') + " +
                          e.errorPath +
                          ' , schemaPath: ' +
                          e.util.toQuotedString(s) +
                          ' , params: { pattern:  '),
                        (i += p ? '' + c : '' + e.util.toQuotedString(o)),
                        (i += '  } '),
                        !1 !== e.opts.messages &&
                          ((i += ' , message: \'should match pattern "'),
                          (i += p
                            ? "' + " + c + " + '"
                            : '' + e.util.escapeQuotes(o)),
                          (i += '"\' ')),
                        e.opts.verbose &&
                          ((i += ' , schema:  '),
                          (i += p
                            ? 'validate.schema' + n
                            : '' + e.util.toQuotedString(o)),
                          (i +=
                            '         , parentSchema: validate.schema' +
                            e.schemaPath +
                            ' , data: ' +
                            d +
                            ' ')),
                        (i += ' } '))
                      : (i += ' {} ');
                  var u = i;
                  return (
                    (i = h.pop()),
                    !e.compositeRule && l
                      ? e.async
                        ? (i += ' throw new ValidationError([' + u + ']); ')
                        : (i +=
                            ' validate.errors = [' + u + ']; return false; ')
                      : (i +=
                          ' var err = ' +
                          u +
                          ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; '),
                    (i += '} '),
                    l && (i += ' else { '),
                    i
                  );
                };
              },
              {},
            ],
            33: [
              function (e, t, i) {
                t.exports = function (e, t) {
                  var i = ' ',
                    r = e.level,
                    a = e.dataLevel,
                    o = e.schema[t],
                    n = e.schemaPath + e.util.getProperty(t),
                    s = e.errSchemaPath + '/' + t,
                    l = !e.opts.allErrors,
                    d = 'data' + (a || ''),
                    p = 'errs__' + r,
                    c = e.util.copy(e),
                    h = '';
                  c.level++;
                  var u,
                    f,
                    m,
                    y = 'valid' + c.level,
                    g = 'key' + r,
                    b = 'idx' + r,
                    v = (c.dataLevel = e.dataLevel + 1),
                    w = 'data' + v,
                    j = 'dataProperties' + r,
                    S = Object.keys(o || {}).filter(F),
                    P = e.schema.patternProperties || {},
                    I = Object.keys(P).filter(F),
                    _ = e.schema.additionalProperties,
                    x = S.length || I.length,
                    T = !1 === _,
                    A = 'object' == typeof _ && Object.keys(_).length,
                    L = e.opts.removeAdditional,
                    E = T || A || L,
                    D = e.opts.ownProperties,
                    $ = e.baseId,
                    R = e.schema.required;
                  function F(e) {
                    return '__proto__' !== e;
                  }
                  if (
                    (R &&
                      (!e.opts.$data || !R.$data) &&
                      R.length < e.opts.loopRequired &&
                      (u = e.util.toHash(R)),
                    (i += 'var ' + p + ' = errors;var ' + y + ' = true;'),
                    D && (i += ' var ' + j + ' = undefined;'),
                    E)
                  ) {
                    if (
                      ((i += D
                        ? ' ' +
                          j +
                          ' = ' +
                          j +
                          ' || Object.keys(' +
                          d +
                          '); for (var ' +
                          b +
                          '=0; ' +
                          b +
                          '<' +
                          j +
                          '.length; ' +
                          b +
                          '++) { var ' +
                          g +
                          ' = ' +
                          j +
                          '[' +
                          b +
                          ']; '
                        : ' for (var ' + g + ' in ' + d + ') { '),
                      x)
                    ) {
                      if (
                        ((i += ' var isAdditional' + r + ' = !(false '),
                        S.length)
                      )
                        if (8 < S.length)
                          i +=
                            ' || validate.schema' +
                            n +
                            '.hasOwnProperty(' +
                            g +
                            ') ';
                        else {
                          var q = S;
                          if (q)
                            for (var O = -1, k = q.length - 1; O < k; )
                              (N = q[(O += 1)]),
                                (i +=
                                  ' || ' +
                                  g +
                                  ' == ' +
                                  e.util.toQuotedString(N) +
                                  ' ');
                        }
                      if (I.length) {
                        var C = I;
                        if (C)
                          for (var z = -1, M = C.length - 1; z < M; )
                            (ie = C[(z += 1)]),
                              (i +=
                                ' || ' +
                                e.usePattern(ie) +
                                '.test(' +
                                g +
                                ') ');
                      }
                      i += ' ); if (isAdditional' + r + ') { ';
                    }
                    'all' == L
                      ? (i += ' delete ' + d + '[' + g + ']; ')
                      : ((H = e.errorPath),
                        (f = "' + " + g + " + '"),
                        e.opts._errorDataPathProperty &&
                          (e.errorPath = e.util.getPathExpr(
                            e.errorPath,
                            g,
                            e.opts.jsonPointers,
                          )),
                        T
                          ? L
                            ? (i += ' delete ' + d + '[' + g + ']; ')
                            : ((i += ' ' + y + ' = false; '),
                              (J = s),
                              (s = e.errSchemaPath + '/additionalProperties'),
                              (Z = Z || []).push(i),
                              (i = ''),
                              !1 !== e.createErrors
                                ? ((i +=
                                    " { keyword: 'additionalProperties' , dataPath: (dataPath || '') + " +
                                    e.errorPath +
                                    ' , schemaPath: ' +
                                    e.util.toQuotedString(s) +
                                    " , params: { additionalProperty: '" +
                                    f +
                                    "' } "),
                                  !1 !== e.opts.messages &&
                                    ((i += " , message: '"),
                                    e.opts._errorDataPathProperty
                                      ? (i +=
                                          'is an invalid additional property')
                                      : (i +=
                                          'should NOT have additional properties'),
                                    (i += "' ")),
                                  e.opts.verbose &&
                                    (i +=
                                      ' , schema: false , parentSchema: validate.schema' +
                                      e.schemaPath +
                                      ' , data: ' +
                                      d +
                                      ' '),
                                  (i += ' } '))
                                : (i += ' {} '),
                              (X = i),
                              (i = Z.pop()),
                              !e.compositeRule && l
                                ? e.async
                                  ? (i +=
                                      ' throw new ValidationError([' +
                                      X +
                                      ']); ')
                                  : (i +=
                                      ' validate.errors = [' +
                                      X +
                                      ']; return false; ')
                                : (i +=
                                    ' var err = ' +
                                    X +
                                    ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; '),
                              (s = J),
                              l && (i += ' break; '))
                          : A &&
                            ('failing' == L
                              ? ((i += ' var ' + p + ' = errors;  '),
                                (m = e.compositeRule),
                                (e.compositeRule = c.compositeRule = !0),
                                (c.schema = _),
                                (c.schemaPath =
                                  e.schemaPath + '.additionalProperties'),
                                (c.errSchemaPath =
                                  e.errSchemaPath + '/additionalProperties'),
                                (c.errorPath = e.opts._errorDataPathProperty
                                  ? e.errorPath
                                  : e.util.getPathExpr(
                                      e.errorPath,
                                      g,
                                      e.opts.jsonPointers,
                                    )),
                                (oe = d + '[' + g + ']'),
                                (c.dataPathArr[v] = g),
                                (ne = e.validate(c)),
                                (c.baseId = $),
                                e.util.varOccurences(ne, w) < 2
                                  ? (i +=
                                      ' ' + e.util.varReplace(ne, w, oe) + ' ')
                                  : (i +=
                                      ' var ' +
                                      w +
                                      ' = ' +
                                      oe +
                                      '; ' +
                                      ne +
                                      ' '),
                                (i +=
                                  ' if (!' +
                                  y +
                                  ') { errors = ' +
                                  p +
                                  '; if (validate.errors !== null) { if (errors) validate.errors.length = errors; else validate.errors = null; } delete ' +
                                  d +
                                  '[' +
                                  g +
                                  ']; }  '),
                                (e.compositeRule = c.compositeRule = m))
                              : ((c.schema = _),
                                (c.schemaPath =
                                  e.schemaPath + '.additionalProperties'),
                                (c.errSchemaPath =
                                  e.errSchemaPath + '/additionalProperties'),
                                (c.errorPath = e.opts._errorDataPathProperty
                                  ? e.errorPath
                                  : e.util.getPathExpr(
                                      e.errorPath,
                                      g,
                                      e.opts.jsonPointers,
                                    )),
                                (oe = d + '[' + g + ']'),
                                (c.dataPathArr[v] = g),
                                (ne = e.validate(c)),
                                (c.baseId = $),
                                e.util.varOccurences(ne, w) < 2
                                  ? (i +=
                                      ' ' + e.util.varReplace(ne, w, oe) + ' ')
                                  : (i +=
                                      ' var ' +
                                      w +
                                      ' = ' +
                                      oe +
                                      '; ' +
                                      ne +
                                      ' '),
                                l && (i += ' if (!' + y + ') break; '))),
                        (e.errorPath = H)),
                      x && (i += ' } '),
                      (i += ' }  '),
                      l && ((i += ' if (' + y + ') { '), (h += '}'));
                  }
                  var V = e.opts.useDefaults && !e.compositeRule;
                  if (S.length) {
                    var U = S;
                    if (U)
                      for (var N, B = -1, G = U.length - 1; B < G; ) {
                        var W,
                          Q,
                          K,
                          H,
                          J,
                          Y,
                          Z,
                          X,
                          ee = o[(N = U[(B += 1)])];
                        (e.opts.strictKeywords
                          ? 'object' == typeof ee && 0 < Object.keys(ee).length
                          : e.util.schemaHasRules(ee, e.RULES.all)) &&
                          ((oe = d + (W = e.util.getProperty(N))),
                          (Q = V && void 0 !== ee.default),
                          (c.schema = ee),
                          (c.schemaPath = n + W),
                          (c.errSchemaPath =
                            s + '/' + e.util.escapeFragment(N)),
                          (c.errorPath = e.util.getPath(
                            e.errorPath,
                            N,
                            e.opts.jsonPointers,
                          )),
                          (c.dataPathArr[v] = e.util.toQuotedString(N)),
                          (ne = e.validate(c)),
                          (c.baseId = $),
                          e.util.varOccurences(ne, w) < 2
                            ? ((ne = e.util.varReplace(ne, w, oe)), (K = oe))
                            : (i += ' var ' + (K = w) + ' = ' + oe + '; '),
                          Q
                            ? (i += ' ' + ne + ' ')
                            : (u && u[N]
                                ? ((i += ' if ( ' + K + ' === undefined '),
                                  D &&
                                    (i +=
                                      ' || ! Object.prototype.hasOwnProperty.call(' +
                                      d +
                                      ", '" +
                                      e.util.escapeQuotes(N) +
                                      "') "),
                                  (i += ') { ' + y + ' = false; '),
                                  (H = e.errorPath),
                                  (J = s),
                                  (Y = e.util.escapeQuotes(N)),
                                  e.opts._errorDataPathProperty &&
                                    (e.errorPath = e.util.getPath(
                                      H,
                                      N,
                                      e.opts.jsonPointers,
                                    )),
                                  (s = e.errSchemaPath + '/required'),
                                  (Z = Z || []).push(i),
                                  (i = ''),
                                  !1 !== e.createErrors
                                    ? ((i +=
                                        " { keyword: 'required' , dataPath: (dataPath || '') + " +
                                        e.errorPath +
                                        ' , schemaPath: ' +
                                        e.util.toQuotedString(s) +
                                        " , params: { missingProperty: '" +
                                        Y +
                                        "' } "),
                                      !1 !== e.opts.messages &&
                                        ((i += " , message: '"),
                                        e.opts._errorDataPathProperty
                                          ? (i += 'is a required property')
                                          : (i +=
                                              "should have required property \\'" +
                                              Y +
                                              "\\'"),
                                        (i += "' ")),
                                      e.opts.verbose &&
                                        (i +=
                                          ' , schema: validate.schema' +
                                          n +
                                          ' , parentSchema: validate.schema' +
                                          e.schemaPath +
                                          ' , data: ' +
                                          d +
                                          ' '),
                                      (i += ' } '))
                                    : (i += ' {} '),
                                  (X = i),
                                  (i = Z.pop()),
                                  !e.compositeRule && l
                                    ? e.async
                                      ? (i +=
                                          ' throw new ValidationError([' +
                                          X +
                                          ']); ')
                                      : (i +=
                                          ' validate.errors = [' +
                                          X +
                                          ']; return false; ')
                                    : (i +=
                                        ' var err = ' +
                                        X +
                                        ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; '),
                                  (s = J),
                                  (e.errorPath = H),
                                  (i += ' } else { '))
                                : l
                                ? ((i += ' if ( ' + K + ' === undefined '),
                                  D &&
                                    (i +=
                                      ' || ! Object.prototype.hasOwnProperty.call(' +
                                      d +
                                      ", '" +
                                      e.util.escapeQuotes(N) +
                                      "') "),
                                  (i += ') { ' + y + ' = true; } else { '))
                                : ((i += ' if (' + K + ' !== undefined '),
                                  D &&
                                    (i +=
                                      ' &&   Object.prototype.hasOwnProperty.call(' +
                                      d +
                                      ", '" +
                                      e.util.escapeQuotes(N) +
                                      "') "),
                                  (i += ' ) { ')),
                              (i += ' ' + ne + ' } '))),
                          l && ((i += ' if (' + y + ') { '), (h += '}'));
                      }
                  }
                  if (I.length) {
                    var te = I;
                    if (te)
                      for (var ie, re = -1, ae = te.length - 1; re < ae; ) {
                        var oe, ne;
                        (ee = P[(ie = te[(re += 1)])]),
                          (e.opts.strictKeywords
                            ? 'object' == typeof ee &&
                              0 < Object.keys(ee).length
                            : e.util.schemaHasRules(ee, e.RULES.all)) &&
                            ((c.schema = ee),
                            (c.schemaPath =
                              e.schemaPath +
                              '.patternProperties' +
                              e.util.getProperty(ie)),
                            (c.errSchemaPath =
                              e.errSchemaPath +
                              '/patternProperties/' +
                              e.util.escapeFragment(ie)),
                            (i += D
                              ? ' ' +
                                j +
                                ' = ' +
                                j +
                                ' || Object.keys(' +
                                d +
                                '); for (var ' +
                                b +
                                '=0; ' +
                                b +
                                '<' +
                                j +
                                '.length; ' +
                                b +
                                '++) { var ' +
                                g +
                                ' = ' +
                                j +
                                '[' +
                                b +
                                ']; '
                              : ' for (var ' + g + ' in ' + d + ') { '),
                            (i +=
                              ' if (' +
                              e.usePattern(ie) +
                              '.test(' +
                              g +
                              ')) { '),
                            (c.errorPath = e.util.getPathExpr(
                              e.errorPath,
                              g,
                              e.opts.jsonPointers,
                            )),
                            (oe = d + '[' + g + ']'),
                            (c.dataPathArr[v] = g),
                            (ne = e.validate(c)),
                            (c.baseId = $),
                            e.util.varOccurences(ne, w) < 2
                              ? (i += ' ' + e.util.varReplace(ne, w, oe) + ' ')
                              : (i +=
                                  ' var ' + w + ' = ' + oe + '; ' + ne + ' '),
                            l && (i += ' if (!' + y + ') break; '),
                            (i += ' } '),
                            l && (i += ' else ' + y + ' = true; '),
                            (i += ' }  '),
                            l && ((i += ' if (' + y + ') { '), (h += '}')));
                      }
                  }
                  return l && (i += ' ' + h + ' if (' + p + ' == errors) {'), i;
                };
              },
              {},
            ],
            34: [
              function (e, t, i) {
                t.exports = function (e, t) {
                  var i = ' ',
                    r = e.level,
                    a = e.dataLevel,
                    o = e.schema[t],
                    n = e.schemaPath + e.util.getProperty(t),
                    s = e.errSchemaPath + '/' + t,
                    l = !e.opts.allErrors,
                    d = 'data' + (a || ''),
                    p = 'errs__' + r,
                    c = e.util.copy(e);
                  c.level++;
                  var h,
                    u,
                    f,
                    m,
                    y,
                    g,
                    b,
                    v,
                    w,
                    j,
                    S,
                    P = 'valid' + c.level;
                  return (
                    (i += 'var ' + p + ' = errors;'),
                    (e.opts.strictKeywords
                      ? 'object' == typeof o && 0 < Object.keys(o).length
                      : e.util.schemaHasRules(o, e.RULES.all)) &&
                      ((c.schema = o),
                      (c.schemaPath = n),
                      (c.errSchemaPath = s),
                      (u = 'idx' + r),
                      (f = 'i' + r),
                      (m = "' + " + (h = 'key' + r) + " + '"),
                      (y = 'data' + (c.dataLevel = e.dataLevel + 1)),
                      (g = 'dataProperties' + r),
                      (b = e.opts.ownProperties),
                      (v = e.baseId),
                      b && (i += ' var ' + g + ' = undefined; '),
                      (i += b
                        ? ' ' +
                          g +
                          ' = ' +
                          g +
                          ' || Object.keys(' +
                          d +
                          '); for (var ' +
                          u +
                          '=0; ' +
                          u +
                          '<' +
                          g +
                          '.length; ' +
                          u +
                          '++) { var ' +
                          h +
                          ' = ' +
                          g +
                          '[' +
                          u +
                          ']; '
                        : ' for (var ' + h + ' in ' + d + ') { '),
                      (i += ' var startErrs' + r + ' = errors; '),
                      (w = h),
                      (j = e.compositeRule),
                      (e.compositeRule = c.compositeRule = !0),
                      (S = e.validate(c)),
                      (c.baseId = v),
                      e.util.varOccurences(S, y) < 2
                        ? (i += ' ' + e.util.varReplace(S, y, w) + ' ')
                        : (i += ' var ' + y + ' = ' + w + '; ' + S + ' '),
                      (e.compositeRule = c.compositeRule = j),
                      (i +=
                        ' if (!' +
                        P +
                        ') { for (var ' +
                        f +
                        '=startErrs' +
                        r +
                        '; ' +
                        f +
                        '<errors; ' +
                        f +
                        '++) { vErrors[' +
                        f +
                        '].propertyName = ' +
                        h +
                        '; }   var err =   '),
                      !1 !== e.createErrors
                        ? ((i +=
                            " { keyword: 'propertyNames' , dataPath: (dataPath || '') + " +
                            e.errorPath +
                            ' , schemaPath: ' +
                            e.util.toQuotedString(s) +
                            " , params: { propertyName: '" +
                            m +
                            "' } "),
                          !1 !== e.opts.messages &&
                            (i +=
                              " , message: 'property name \\'" +
                              m +
                              "\\' is invalid' "),
                          e.opts.verbose &&
                            (i +=
                              ' , schema: validate.schema' +
                              n +
                              ' , parentSchema: validate.schema' +
                              e.schemaPath +
                              ' , data: ' +
                              d +
                              ' '),
                          (i += ' } '))
                        : (i += ' {} '),
                      (i +=
                        ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; '),
                      !e.compositeRule &&
                        l &&
                        (e.async
                          ? (i += ' throw new ValidationError(vErrors); ')
                          : (i +=
                              ' validate.errors = vErrors; return false; ')),
                      l && (i += ' break; '),
                      (i += ' } }')),
                    l && (i += '  if (' + p + ' == errors) {'),
                    i
                  );
                };
              },
              {},
            ],
            35: [
              function (e, t, i) {
                t.exports = function (e, t) {
                  var i,
                    r,
                    a = ' ',
                    o = e.level,
                    n = e.dataLevel,
                    s = e.schema[t],
                    l = e.errSchemaPath + '/' + t,
                    d = !e.opts.allErrors,
                    p = 'data' + (n || ''),
                    c = 'valid' + o;
                  if ('#' == s || '#/' == s)
                    r = e.isRoot
                      ? ((i = e.async), 'validate')
                      : ((i = !0 === e.root.schema.$async), 'root.refVal[0]');
                  else {
                    var h,
                      u,
                      f = e.resolveRef(e.baseId, s, e.isRoot);
                    if (void 0 === f) {
                      var m,
                        y = e.MissingRefError.message(e.baseId, s);
                      if ('fail' == e.opts.missingRefs) {
                        e.logger.error(y),
                          (m = m || []).push(a),
                          (a = ''),
                          !1 !== e.createErrors
                            ? ((a +=
                                " { keyword: '$ref' , dataPath: (dataPath || '') + " +
                                e.errorPath +
                                ' , schemaPath: ' +
                                e.util.toQuotedString(l) +
                                " , params: { ref: '" +
                                e.util.escapeQuotes(s) +
                                "' } "),
                              !1 !== e.opts.messages &&
                                (a +=
                                  " , message: 'can\\'t resolve reference " +
                                  e.util.escapeQuotes(s) +
                                  "' "),
                              e.opts.verbose &&
                                (a +=
                                  ' , schema: ' +
                                  e.util.toQuotedString(s) +
                                  ' , parentSchema: validate.schema' +
                                  e.schemaPath +
                                  ' , data: ' +
                                  p +
                                  ' '),
                              (a += ' } '))
                            : (a += ' {} ');
                        var g = a;
                        (a = m.pop()),
                          !e.compositeRule && d
                            ? e.async
                              ? (a +=
                                  ' throw new ValidationError([' + g + ']); ')
                              : (a +=
                                  ' validate.errors = [' +
                                  g +
                                  ']; return false; ')
                            : (a +=
                                ' var err = ' +
                                g +
                                ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; '),
                          d && (a += ' if (false) { ');
                      } else {
                        if ('ignore' != e.opts.missingRefs)
                          throw new e.MissingRefError(e.baseId, s, y);
                        e.logger.warn(y), d && (a += ' if (true) { ');
                      }
                    } else
                      f.inline
                        ? ((h = e.util.copy(e)).level++,
                          (u = 'valid' + h.level),
                          (h.schema = f.schema),
                          (h.schemaPath = ''),
                          (h.errSchemaPath = s),
                          (a +=
                            ' ' +
                            e.validate(h).replace(/validate\.schema/g, f.code) +
                            ' '),
                          d && (a += ' if (' + u + ') { '))
                        : ((i =
                            !0 === f.$async || (e.async && !1 !== f.$async)),
                          (r = f.code));
                  }
                  if (r) {
                    (m = m || []).push(a),
                      (a = ''),
                      e.opts.passContext
                        ? (a += ' ' + r + '.call(this, ')
                        : (a += ' ' + r + '( '),
                      (a += ' ' + p + ", (dataPath || '')"),
                      '""' != e.errorPath && (a += ' + ' + e.errorPath);
                    var b = (a +=
                      ' , ' +
                      (n ? 'data' + (n - 1 || '') : 'parentData') +
                      ' , ' +
                      (n ? e.dataPathArr[n] : 'parentDataProperty') +
                      ', rootData)  ');
                    if (((a = m.pop()), i)) {
                      if (!e.async)
                        throw new Error(
                          'async schema referenced by sync schema',
                        );
                      d && (a += ' var ' + c + '; '),
                        (a += ' try { await ' + b + '; '),
                        d && (a += ' ' + c + ' = true; '),
                        (a +=
                          ' } catch (e) { if (!(e instanceof ValidationError)) throw e; if (vErrors === null) vErrors = e.errors; else vErrors = vErrors.concat(e.errors); errors = vErrors.length; '),
                        d && (a += ' ' + c + ' = false; '),
                        (a += ' } '),
                        d && (a += ' if (' + c + ') { ');
                    } else
                      (a +=
                        ' if (!' +
                        b +
                        ') { if (vErrors === null) vErrors = ' +
                        r +
                        '.errors; else vErrors = vErrors.concat(' +
                        r +
                        '.errors); errors = vErrors.length; } '),
                        d && (a += ' else { ');
                  }
                  return a;
                };
              },
              {},
            ],
            36: [
              function (e, t, i) {
                t.exports = function (e, t) {
                  var i = ' ',
                    r = e.level,
                    a = e.dataLevel,
                    o = e.schema[t],
                    n = e.schemaPath + e.util.getProperty(t),
                    s = e.errSchemaPath + '/' + t,
                    l = !e.opts.allErrors,
                    d = 'data' + (a || ''),
                    p = 'valid' + r,
                    c = e.opts.$data && o && o.$data,
                    h =
                      (c &&
                        (i +=
                          ' var schema' +
                          r +
                          ' = ' +
                          e.util.getData(o.$data, a, e.dataPathArr) +
                          '; '),
                      'schema' + r);
                  if (!c)
                    if (
                      o.length < e.opts.loopRequired &&
                      e.schema.properties &&
                      Object.keys(e.schema.properties).length
                    ) {
                      var u = [],
                        f = o;
                      if (f)
                        for (var m, y = -1, g = f.length - 1; y < g; ) {
                          m = f[(y += 1)];
                          var b = e.schema.properties[m];
                          (b &&
                            (e.opts.strictKeywords
                              ? 'object' == typeof b &&
                                0 < Object.keys(b).length
                              : e.util.schemaHasRules(b, e.RULES.all))) ||
                            (u[u.length] = m);
                        }
                    } else u = o;
                  if (c || u.length) {
                    var v = e.errorPath,
                      w = c || u.length >= e.opts.loopRequired,
                      j = e.opts.ownProperties;
                    if (l)
                      if (((i += ' var missing' + r + '; '), w)) {
                        c ||
                          (i += ' var ' + h + ' = validate.schema' + n + '; ');
                        var S =
                          "' + " +
                          (A = 'schema' + r + '[' + (x = 'i' + r) + ']') +
                          " + '";
                        e.opts._errorDataPathProperty &&
                          (e.errorPath = e.util.getPathExpr(
                            v,
                            A,
                            e.opts.jsonPointers,
                          )),
                          (i += ' var ' + p + ' = true; '),
                          c &&
                            (i +=
                              ' if (schema' +
                              r +
                              ' === undefined) ' +
                              p +
                              ' = true; else if (!Array.isArray(schema' +
                              r +
                              ')) ' +
                              p +
                              ' = false; else {'),
                          (i +=
                            ' for (var ' +
                            x +
                            ' = 0; ' +
                            x +
                            ' < ' +
                            h +
                            '.length; ' +
                            x +
                            '++) { ' +
                            p +
                            ' = ' +
                            d +
                            '[' +
                            h +
                            '[' +
                            x +
                            ']] !== undefined '),
                          j &&
                            (i +=
                              ' &&   Object.prototype.hasOwnProperty.call(' +
                              d +
                              ', ' +
                              h +
                              '[' +
                              x +
                              ']) '),
                          (i += '; if (!' + p + ') break; } '),
                          c && (i += '  }  '),
                          (I = I || []).push((i += '  if (!' + p + ') {   ')),
                          (i = ''),
                          !1 !== e.createErrors
                            ? ((i +=
                                " { keyword: 'required' , dataPath: (dataPath || '') + " +
                                e.errorPath +
                                ' , schemaPath: ' +
                                e.util.toQuotedString(s) +
                                " , params: { missingProperty: '" +
                                S +
                                "' } "),
                              !1 !== e.opts.messages &&
                                ((i += " , message: '"),
                                e.opts._errorDataPathProperty
                                  ? (i += 'is a required property')
                                  : (i +=
                                      "should have required property \\'" +
                                      S +
                                      "\\'"),
                                (i += "' ")),
                              e.opts.verbose &&
                                (i +=
                                  ' , schema: validate.schema' +
                                  n +
                                  ' , parentSchema: validate.schema' +
                                  e.schemaPath +
                                  ' , data: ' +
                                  d +
                                  ' '),
                              (i += ' } '))
                            : (i += ' {} ');
                        var P = i;
                        (i = I.pop()),
                          !e.compositeRule && l
                            ? e.async
                              ? (i +=
                                  ' throw new ValidationError([' + P + ']); ')
                              : (i +=
                                  ' validate.errors = [' +
                                  P +
                                  ']; return false; ')
                            : (i +=
                                ' var err = ' +
                                P +
                                ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; '),
                          (i += ' } else { ');
                      } else {
                        i += ' if ( ';
                        var I,
                          _ = u;
                        if (_)
                          for (var x = -1, T = _.length - 1; x < T; )
                            (E = _[(x += 1)]),
                              x && (i += ' || '),
                              (i +=
                                ' ( ( ' +
                                (F = d + (R = e.util.getProperty(E))) +
                                ' === undefined '),
                              j &&
                                (i +=
                                  ' || ! Object.prototype.hasOwnProperty.call(' +
                                  d +
                                  ", '" +
                                  e.util.escapeQuotes(E) +
                                  "') "),
                              (i +=
                                ') && (missing' +
                                r +
                                ' = ' +
                                e.util.toQuotedString(
                                  e.opts.jsonPointers ? E : R,
                                ) +
                                ') ) ');
                        (i += ') {  '),
                          (S = "' + " + (A = 'missing' + r) + " + '"),
                          e.opts._errorDataPathProperty &&
                            (e.errorPath = e.opts.jsonPointers
                              ? e.util.getPathExpr(v, A, !0)
                              : v + ' + ' + A),
                          (I = I || []).push(i),
                          (i = ''),
                          !1 !== e.createErrors
                            ? ((i +=
                                " { keyword: 'required' , dataPath: (dataPath || '') + " +
                                e.errorPath +
                                ' , schemaPath: ' +
                                e.util.toQuotedString(s) +
                                " , params: { missingProperty: '" +
                                S +
                                "' } "),
                              !1 !== e.opts.messages &&
                                ((i += " , message: '"),
                                e.opts._errorDataPathProperty
                                  ? (i += 'is a required property')
                                  : (i +=
                                      "should have required property \\'" +
                                      S +
                                      "\\'"),
                                (i += "' ")),
                              e.opts.verbose &&
                                (i +=
                                  ' , schema: validate.schema' +
                                  n +
                                  ' , parentSchema: validate.schema' +
                                  e.schemaPath +
                                  ' , data: ' +
                                  d +
                                  ' '),
                              (i += ' } '))
                            : (i += ' {} '),
                          (P = i),
                          (i = I.pop()),
                          !e.compositeRule && l
                            ? e.async
                              ? (i +=
                                  ' throw new ValidationError([' + P + ']); ')
                              : (i +=
                                  ' validate.errors = [' +
                                  P +
                                  ']; return false; ')
                            : (i +=
                                ' var err = ' +
                                P +
                                ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; '),
                          (i += ' } else { ');
                      }
                    else if (w) {
                      var A;
                      c || (i += ' var ' + h + ' = validate.schema' + n + '; '),
                        (S =
                          "' + " +
                          (A = 'schema' + r + '[' + (x = 'i' + r) + ']') +
                          " + '"),
                        e.opts._errorDataPathProperty &&
                          (e.errorPath = e.util.getPathExpr(
                            v,
                            A,
                            e.opts.jsonPointers,
                          )),
                        c &&
                          ((i +=
                            ' if (' +
                            h +
                            ' && !Array.isArray(' +
                            h +
                            ')) {  var err =   '),
                          !1 !== e.createErrors
                            ? ((i +=
                                " { keyword: 'required' , dataPath: (dataPath || '') + " +
                                e.errorPath +
                                ' , schemaPath: ' +
                                e.util.toQuotedString(s) +
                                " , params: { missingProperty: '" +
                                S +
                                "' } "),
                              !1 !== e.opts.messages &&
                                ((i += " , message: '"),
                                e.opts._errorDataPathProperty
                                  ? (i += 'is a required property')
                                  : (i +=
                                      "should have required property \\'" +
                                      S +
                                      "\\'"),
                                (i += "' ")),
                              e.opts.verbose &&
                                (i +=
                                  ' , schema: validate.schema' +
                                  n +
                                  ' , parentSchema: validate.schema' +
                                  e.schemaPath +
                                  ' , data: ' +
                                  d +
                                  ' '),
                              (i += ' } '))
                            : (i += ' {} '),
                          (i +=
                            ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } else if (' +
                            h +
                            ' !== undefined) { ')),
                        (i +=
                          ' for (var ' +
                          x +
                          ' = 0; ' +
                          x +
                          ' < ' +
                          h +
                          '.length; ' +
                          x +
                          '++) { if (' +
                          d +
                          '[' +
                          h +
                          '[' +
                          x +
                          ']] === undefined '),
                        j &&
                          (i +=
                            ' || ! Object.prototype.hasOwnProperty.call(' +
                            d +
                            ', ' +
                            h +
                            '[' +
                            x +
                            ']) '),
                        (i += ') {  var err =   '),
                        !1 !== e.createErrors
                          ? ((i +=
                              " { keyword: 'required' , dataPath: (dataPath || '') + " +
                              e.errorPath +
                              ' , schemaPath: ' +
                              e.util.toQuotedString(s) +
                              " , params: { missingProperty: '" +
                              S +
                              "' } "),
                            !1 !== e.opts.messages &&
                              ((i += " , message: '"),
                              e.opts._errorDataPathProperty
                                ? (i += 'is a required property')
                                : (i +=
                                    "should have required property \\'" +
                                    S +
                                    "\\'"),
                              (i += "' ")),
                            e.opts.verbose &&
                              (i +=
                                ' , schema: validate.schema' +
                                n +
                                ' , parentSchema: validate.schema' +
                                e.schemaPath +
                                ' , data: ' +
                                d +
                                ' '),
                            (i += ' } '))
                          : (i += ' {} '),
                        (i +=
                          ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } } '),
                        c && (i += '  }  ');
                    } else {
                      var L = u;
                      if (L)
                        for (var E, D = -1, $ = L.length - 1; D < $; ) {
                          E = L[(D += 1)];
                          var R = e.util.getProperty(E),
                            F = ((S = e.util.escapeQuotes(E)), d + R);
                          e.opts._errorDataPathProperty &&
                            (e.errorPath = e.util.getPath(
                              v,
                              E,
                              e.opts.jsonPointers,
                            )),
                            (i += ' if ( ' + F + ' === undefined '),
                            j &&
                              (i +=
                                ' || ! Object.prototype.hasOwnProperty.call(' +
                                d +
                                ", '" +
                                e.util.escapeQuotes(E) +
                                "') "),
                            (i += ') {  var err =   '),
                            !1 !== e.createErrors
                              ? ((i +=
                                  " { keyword: 'required' , dataPath: (dataPath || '') + " +
                                  e.errorPath +
                                  ' , schemaPath: ' +
                                  e.util.toQuotedString(s) +
                                  " , params: { missingProperty: '" +
                                  S +
                                  "' } "),
                                !1 !== e.opts.messages &&
                                  ((i += " , message: '"),
                                  e.opts._errorDataPathProperty
                                    ? (i += 'is a required property')
                                    : (i +=
                                        "should have required property \\'" +
                                        S +
                                        "\\'"),
                                  (i += "' ")),
                                e.opts.verbose &&
                                  (i +=
                                    ' , schema: validate.schema' +
                                    n +
                                    ' , parentSchema: validate.schema' +
                                    e.schemaPath +
                                    ' , data: ' +
                                    d +
                                    ' '),
                                (i += ' } '))
                              : (i += ' {} '),
                            (i +=
                              ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; } ');
                        }
                    }
                    e.errorPath = v;
                  } else l && (i += ' if (true) {');
                  return i;
                };
              },
              {},
            ],
            37: [
              function (e, t, i) {
                t.exports = function (e, t) {
                  var i,
                    r,
                    a,
                    o,
                    n,
                    s = ' ',
                    l = e.level,
                    d = e.dataLevel,
                    p = e.schema[t],
                    c = e.schemaPath + e.util.getProperty(t),
                    h = e.errSchemaPath + '/' + t,
                    u = !e.opts.allErrors,
                    f = 'data' + (d || ''),
                    m = 'valid' + l,
                    y = e.opts.$data && p && p.$data,
                    g = y
                      ? ((s +=
                          ' var schema' +
                          l +
                          ' = ' +
                          e.util.getData(p.$data, d, e.dataPathArr) +
                          '; '),
                        'schema' + l)
                      : p;
                  return (
                    (p || y) && !1 !== e.opts.uniqueItems
                      ? (y &&
                          (s +=
                            ' var ' +
                            m +
                            '; if (' +
                            g +
                            ' === false || ' +
                            g +
                            ' === undefined) ' +
                            m +
                            ' = true; else if (typeof ' +
                            g +
                            " != 'boolean') " +
                            m +
                            ' = false; else { '),
                        (s +=
                          ' var i = ' +
                          f +
                          '.length , ' +
                          m +
                          ' = true , j; if (i > 1) { '),
                        (i = e.schema.items && e.schema.items.type),
                        (r = Array.isArray(i)),
                        !i ||
                        'object' == i ||
                        'array' == i ||
                        (r &&
                          (0 <= i.indexOf('object') || 0 <= i.indexOf('array')))
                          ? (s +=
                              ' outer: for (;i--;) { for (j = i; j--;) { if (equal(' +
                              f +
                              '[i], ' +
                              f +
                              '[j])) { ' +
                              m +
                              ' = false; break outer; } } } ')
                          : ((s +=
                              ' var itemIndices = {}, item; for (;i--;) { var item = ' +
                              f +
                              '[i]; '),
                            (a = 'checkDataType' + (r ? 's' : '')),
                            (s +=
                              ' if (' +
                              e.util[a](i, 'item', e.opts.strictNumbers, !0) +
                              ') continue; '),
                            r &&
                              (s +=
                                " if (typeof item == 'string') item = '\"' + item; "),
                            (s +=
                              " if (typeof itemIndices[item] == 'number') { " +
                              m +
                              ' = false; j = itemIndices[item]; break; } itemIndices[item] = i; } ')),
                        (s += ' } '),
                        y && (s += '  }  '),
                        (o = o || []).push((s += ' if (!' + m + ') {   ')),
                        (s = ''),
                        !1 !== e.createErrors
                          ? ((s +=
                              " { keyword: 'uniqueItems' , dataPath: (dataPath || '') + " +
                              e.errorPath +
                              ' , schemaPath: ' +
                              e.util.toQuotedString(h) +
                              ' , params: { i: i, j: j } '),
                            !1 !== e.opts.messages &&
                              (s +=
                                " , message: 'should NOT have duplicate items (items ## ' + j + ' and ' + i + ' are identical)' "),
                            e.opts.verbose &&
                              ((s += ' , schema:  '),
                              (s += y ? 'validate.schema' + c : '' + p),
                              (s +=
                                '         , parentSchema: validate.schema' +
                                e.schemaPath +
                                ' , data: ' +
                                f +
                                ' ')),
                            (s += ' } '))
                          : (s += ' {} '),
                        (n = s),
                        (s = o.pop()),
                        !e.compositeRule && u
                          ? e.async
                            ? (s += ' throw new ValidationError([' + n + ']); ')
                            : (s +=
                                ' validate.errors = [' +
                                n +
                                ']; return false; ')
                          : (s +=
                              ' var err = ' +
                              n +
                              ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; '),
                        (s += ' } '),
                        u && (s += ' else { '))
                      : u && (s += ' if (true) { '),
                    s
                  );
                };
              },
              {},
            ],
            38: [
              function (e, t, i) {
                t.exports = function (e, t) {
                  var i = '',
                    r = !0 === e.schema.$async,
                    a = e.util.schemaHasRulesExcept(
                      e.schema,
                      e.RULES.all,
                      '$ref',
                    ),
                    o = e.self._getId(e.schema);
                  if (e.opts.strictKeywords) {
                    var n = e.util.schemaUnknownRules(
                      e.schema,
                      e.RULES.keywords,
                    );
                    if (n) {
                      var s = 'unknown keyword: ' + n;
                      if ('log' !== e.opts.strictKeywords) throw new Error(s);
                      e.logger.warn(s);
                    }
                  }
                  if (
                    (e.isTop &&
                      ((i += ' var validate = '),
                      r && ((e.async = !0), (i += 'async ')),
                      (i +=
                        "function(data, dataPath, parentData, parentDataProperty, rootData) { 'use strict'; "),
                      o &&
                        (e.opts.sourceCode || e.opts.processCode) &&
                        (i += ' /*# sourceURL=' + o + ' */ ')),
                    'boolean' == typeof e.schema || (!a && !e.schema.$ref))
                  ) {
                    t = 'false schema';
                    var l = e.level,
                      d = e.dataLevel,
                      p = e.schema[t],
                      c = e.schemaPath + e.util.getProperty(t),
                      h = e.errSchemaPath + '/' + t,
                      u = !e.opts.allErrors,
                      f = 'data' + (d || ''),
                      m = 'valid' + l;
                    return (
                      !1 === e.schema
                        ? (e.isTop
                            ? (u = !0)
                            : (i += ' var ' + m + ' = false; '),
                          (B = B || []).push(i),
                          (i = ''),
                          !1 !== e.createErrors
                            ? ((i +=
                                " { keyword: 'false schema' , dataPath: (dataPath || '') + " +
                                e.errorPath +
                                ' , schemaPath: ' +
                                e.util.toQuotedString(h) +
                                ' , params: {} '),
                              !1 !== e.opts.messages &&
                                (i += " , message: 'boolean schema is false' "),
                              e.opts.verbose &&
                                (i +=
                                  ' , schema: false , parentSchema: validate.schema' +
                                  e.schemaPath +
                                  ' , data: ' +
                                  f +
                                  ' '),
                              (i += ' } '))
                            : (i += ' {} '),
                          (D = i),
                          (i = B.pop()),
                          !e.compositeRule && u
                            ? e.async
                              ? (i +=
                                  ' throw new ValidationError([' + D + ']); ')
                              : (i +=
                                  ' validate.errors = [' +
                                  D +
                                  ']; return false; ')
                            : (i +=
                                ' var err = ' +
                                D +
                                ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; '))
                        : e.isTop
                        ? (i += r
                            ? ' return data; '
                            : ' validate.errors = null; return true; ')
                        : (i += ' var ' + m + ' = true; '),
                      e.isTop && (i += ' }; return validate; '),
                      i
                    );
                  }
                  if (e.isTop) {
                    var y = e.isTop;
                    if (
                      ((l = e.level = 0),
                      (d = e.dataLevel = 0),
                      (f = 'data'),
                      (e.rootId = e.resolve.fullPath(
                        e.self._getId(e.root.schema),
                      )),
                      (e.baseId = e.baseId || e.rootId),
                      delete e.isTop,
                      (e.dataPathArr = [void 0]),
                      void 0 !== e.schema.default &&
                        e.opts.useDefaults &&
                        e.opts.strictDefaults)
                    ) {
                      var g = 'default is ignored in the schema root';
                      if ('log' !== e.opts.strictDefaults) throw new Error(g);
                      e.logger.warn(g);
                    }
                    (i += ' var vErrors = null; '),
                      (i += ' var errors = 0;     '),
                      (i += ' if (rootData === undefined) rootData = data; ');
                  } else {
                    if (
                      ((l = e.level),
                      (f = 'data' + ((d = e.dataLevel) || '')),
                      o && (e.baseId = e.resolve.url(e.baseId, o)),
                      r && !e.async)
                    )
                      throw new Error('async schema in sync schema');
                    i += ' var errs_' + l + ' = errors;';
                  }
                  (m = 'valid' + l), (u = !e.opts.allErrors);
                  var b,
                    v = '',
                    w = '',
                    j = e.schema.type,
                    S = Array.isArray(j);
                  if (
                    (j &&
                      e.opts.nullable &&
                      !0 === e.schema.nullable &&
                      (S
                        ? -1 == j.indexOf('null') && (j = j.concat('null'))
                        : 'null' != j && ((j = [j, 'null']), (S = !0))),
                    S && 1 == j.length && ((j = j[0]), (S = !1)),
                    e.schema.$ref && a)
                  ) {
                    if ('fail' == e.opts.extendRefs)
                      throw new Error(
                        '$ref: validation keywords used in schema at path "' +
                          e.errSchemaPath +
                          '" (see option extendRefs)',
                      );
                    !0 !== e.opts.extendRefs &&
                      ((a = !1),
                      e.logger.warn(
                        '$ref: keywords ignored in schema at path "' +
                          e.errSchemaPath +
                          '"',
                      ));
                  }
                  if (
                    (e.schema.$comment &&
                      e.opts.$comment &&
                      (i += ' ' + e.RULES.all.$comment.code(e, '$comment')),
                    j)
                  ) {
                    e.opts.coerceTypes &&
                      (b = e.util.coerceToTypes(e.opts.coerceTypes, j));
                    var P = e.RULES.types[j];
                    if (b || S || !0 === P || (P && !J(P))) {
                      (c = e.schemaPath + '.type'),
                        (h = e.errSchemaPath + '/type'),
                        (c = e.schemaPath + '.type'),
                        (h = e.errSchemaPath + '/type');
                      var I = S ? 'checkDataTypes' : 'checkDataType';
                      if (
                        ((i +=
                          ' if (' +
                          e.util[I](j, f, e.opts.strictNumbers, !0) +
                          ') { '),
                        b)
                      ) {
                        var _ = 'dataType' + l,
                          x = 'coerced' + l;
                        (i +=
                          ' var ' +
                          _ +
                          ' = typeof ' +
                          f +
                          '; var ' +
                          x +
                          ' = undefined; '),
                          'array' == e.opts.coerceTypes &&
                            (i +=
                              ' if (' +
                              _ +
                              " == 'object' && Array.isArray(" +
                              f +
                              ') && ' +
                              f +
                              '.length == 1) { ' +
                              f +
                              ' = ' +
                              f +
                              '[0]; ' +
                              _ +
                              ' = typeof ' +
                              f +
                              '; if (' +
                              e.util.checkDataType(
                                e.schema.type,
                                f,
                                e.opts.strictNumbers,
                              ) +
                              ') ' +
                              x +
                              ' = ' +
                              f +
                              '; } '),
                          (i += ' if (' + x + ' !== undefined) ; ');
                        var T = b;
                        if (T)
                          for (var A, L = -1, E = T.length - 1; L < E; )
                            'string' == (A = T[(L += 1)])
                              ? (i +=
                                  ' else if (' +
                                  _ +
                                  " == 'number' || " +
                                  _ +
                                  " == 'boolean') " +
                                  x +
                                  " = '' + " +
                                  f +
                                  '; else if (' +
                                  f +
                                  ' === null) ' +
                                  x +
                                  " = ''; ")
                              : 'number' == A || 'integer' == A
                              ? ((i +=
                                  ' else if (' +
                                  _ +
                                  " == 'boolean' || " +
                                  f +
                                  ' === null || (' +
                                  _ +
                                  " == 'string' && " +
                                  f +
                                  ' && ' +
                                  f +
                                  ' == +' +
                                  f +
                                  ' '),
                                'integer' == A && (i += ' && !(' + f + ' % 1)'),
                                (i += ')) ' + x + ' = +' + f + '; '))
                              : 'boolean' == A
                              ? (i +=
                                  ' else if (' +
                                  f +
                                  " === 'false' || " +
                                  f +
                                  ' === 0 || ' +
                                  f +
                                  ' === null) ' +
                                  x +
                                  ' = false; else if (' +
                                  f +
                                  " === 'true' || " +
                                  f +
                                  ' === 1) ' +
                                  x +
                                  ' = true; ')
                              : 'null' == A
                              ? (i +=
                                  ' else if (' +
                                  f +
                                  " === '' || " +
                                  f +
                                  ' === 0 || ' +
                                  f +
                                  ' === false) ' +
                                  x +
                                  ' = null; ')
                              : 'array' == e.opts.coerceTypes &&
                                'array' == A &&
                                (i +=
                                  ' else if (' +
                                  _ +
                                  " == 'string' || " +
                                  _ +
                                  " == 'number' || " +
                                  _ +
                                  " == 'boolean' || " +
                                  f +
                                  ' == null) ' +
                                  x +
                                  ' = [' +
                                  f +
                                  ']; ');
                        (B = B || []).push((i += ' else {   ')),
                          (i = ''),
                          !1 !== e.createErrors
                            ? ((i +=
                                " { keyword: 'type' , dataPath: (dataPath || '') + " +
                                e.errorPath +
                                ' , schemaPath: ' +
                                e.util.toQuotedString(h) +
                                " , params: { type: '"),
                              (i += S ? '' + j.join(',') : '' + j),
                              (i += "' } "),
                              !1 !== e.opts.messages &&
                                ((i += " , message: 'should be "),
                                (i += S ? '' + j.join(',') : '' + j),
                                (i += "' ")),
                              e.opts.verbose &&
                                (i +=
                                  ' , schema: validate.schema' +
                                  c +
                                  ' , parentSchema: validate.schema' +
                                  e.schemaPath +
                                  ' , data: ' +
                                  f +
                                  ' '),
                              (i += ' } '))
                            : (i += ' {} ');
                        var D = i;
                        (i = B.pop()),
                          !e.compositeRule && u
                            ? e.async
                              ? (i +=
                                  ' throw new ValidationError([' + D + ']); ')
                              : (i +=
                                  ' validate.errors = [' +
                                  D +
                                  ']; return false; ')
                            : (i +=
                                ' var err = ' +
                                D +
                                ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; '),
                          (i += ' } if (' + x + ' !== undefined) {  ');
                        var $ = d ? 'data' + (d - 1 || '') : 'parentData';
                        (i += ' ' + f + ' = ' + x + '; '),
                          d || (i += 'if (' + $ + ' !== undefined)'),
                          (i +=
                            ' ' +
                            $ +
                            '[' +
                            (d ? e.dataPathArr[d] : 'parentDataProperty') +
                            '] = ' +
                            x +
                            '; } ');
                      } else
                        (B = B || []).push(i),
                          (i = ''),
                          !1 !== e.createErrors
                            ? ((i +=
                                " { keyword: 'type' , dataPath: (dataPath || '') + " +
                                e.errorPath +
                                ' , schemaPath: ' +
                                e.util.toQuotedString(h) +
                                " , params: { type: '"),
                              (i += S ? '' + j.join(',') : '' + j),
                              (i += "' } "),
                              !1 !== e.opts.messages &&
                                ((i += " , message: 'should be "),
                                (i += S ? '' + j.join(',') : '' + j),
                                (i += "' ")),
                              e.opts.verbose &&
                                (i +=
                                  ' , schema: validate.schema' +
                                  c +
                                  ' , parentSchema: validate.schema' +
                                  e.schemaPath +
                                  ' , data: ' +
                                  f +
                                  ' '),
                              (i += ' } '))
                            : (i += ' {} '),
                          (D = i),
                          (i = B.pop()),
                          !e.compositeRule && u
                            ? e.async
                              ? (i +=
                                  ' throw new ValidationError([' + D + ']); ')
                              : (i +=
                                  ' validate.errors = [' +
                                  D +
                                  ']; return false; ')
                            : (i +=
                                ' var err = ' +
                                D +
                                ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; ');
                      i += ' } ';
                    }
                  }
                  if (e.schema.$ref && !a)
                    (i += ' ' + e.RULES.all.$ref.code(e, '$ref') + ' '),
                      u &&
                        ((i += ' } if (errors === '),
                        (i += y ? '0' : 'errs_' + l),
                        (i += ') { '),
                        (w += '}'));
                  else {
                    var R = e.RULES;
                    if (R)
                      for (var F = -1, q = R.length - 1; F < q; )
                        if (J((P = R[(F += 1)]))) {
                          if (
                            (P.type &&
                              (i +=
                                ' if (' +
                                e.util.checkDataType(
                                  P.type,
                                  f,
                                  e.opts.strictNumbers,
                                ) +
                                ') { '),
                            e.opts.useDefaults)
                          )
                            if ('object' == P.type && e.schema.properties) {
                              p = e.schema.properties;
                              var O = Object.keys(p);
                              if (O)
                                for (var k, C = -1, z = O.length - 1; C < z; )
                                  if (
                                    void 0 !==
                                    (U = p[(k = O[(C += 1)])]).default
                                  ) {
                                    var M = f + e.util.getProperty(k);
                                    if (e.compositeRule) {
                                      if (e.opts.strictDefaults) {
                                        if (
                                          ((g = 'default is ignored for: ' + M),
                                          'log' !== e.opts.strictDefaults)
                                        )
                                          throw new Error(g);
                                        e.logger.warn(g);
                                      }
                                    } else
                                      (i += ' if (' + M + ' === undefined '),
                                        'empty' == e.opts.useDefaults &&
                                          (i +=
                                            ' || ' +
                                            M +
                                            ' === null || ' +
                                            M +
                                            " === '' "),
                                        (i += ' ) ' + M + ' = '),
                                        'shared' == e.opts.useDefaults
                                          ? (i +=
                                              ' ' +
                                              e.useDefault(U.default) +
                                              ' ')
                                          : (i +=
                                              ' ' +
                                              JSON.stringify(U.default) +
                                              ' '),
                                        (i += '; ');
                                  }
                            } else if (
                              'array' == P.type &&
                              Array.isArray(e.schema.items)
                            ) {
                              var V = e.schema.items;
                              if (V) {
                                L = -1;
                                for (var U, N = V.length - 1; L < N; )
                                  if (void 0 !== (U = V[(L += 1)]).default)
                                    if (
                                      ((M = f + '[' + L + ']'), e.compositeRule)
                                    ) {
                                      if (e.opts.strictDefaults) {
                                        if (
                                          ((g = 'default is ignored for: ' + M),
                                          'log' !== e.opts.strictDefaults)
                                        )
                                          throw new Error(g);
                                        e.logger.warn(g);
                                      }
                                    } else
                                      (i += ' if (' + M + ' === undefined '),
                                        'empty' == e.opts.useDefaults &&
                                          (i +=
                                            ' || ' +
                                            M +
                                            ' === null || ' +
                                            M +
                                            " === '' "),
                                        (i += ' ) ' + M + ' = '),
                                        'shared' == e.opts.useDefaults
                                          ? (i +=
                                              ' ' +
                                              e.useDefault(U.default) +
                                              ' ')
                                          : (i +=
                                              ' ' +
                                              JSON.stringify(U.default) +
                                              ' '),
                                        (i += '; ');
                              }
                            }
                          var B,
                            G = P.rules;
                          if (G)
                            for (var W, Q, K = -1, H = G.length - 1; K < H; )
                              !Y((Q = G[(K += 1)])) ||
                                ((W = Q.code(e, Q.keyword, P.type)) &&
                                  ((i += ' ' + W + ' '), u && (v += '}')));
                          u && ((i += ' ' + v + ' '), (v = '')),
                            P.type &&
                              ((i += ' } '),
                              j &&
                                j === P.type &&
                                !b &&
                                ((i += ' else { '),
                                (c = e.schemaPath + '.type'),
                                (h = e.errSchemaPath + '/type'),
                                (B = B || []).push(i),
                                (i = ''),
                                !1 !== e.createErrors
                                  ? ((i +=
                                      " { keyword: 'type' , dataPath: (dataPath || '') + " +
                                      e.errorPath +
                                      ' , schemaPath: ' +
                                      e.util.toQuotedString(h) +
                                      " , params: { type: '"),
                                    (i += S ? '' + j.join(',') : '' + j),
                                    (i += "' } "),
                                    !1 !== e.opts.messages &&
                                      ((i += " , message: 'should be "),
                                      (i += S ? '' + j.join(',') : '' + j),
                                      (i += "' ")),
                                    e.opts.verbose &&
                                      (i +=
                                        ' , schema: validate.schema' +
                                        c +
                                        ' , parentSchema: validate.schema' +
                                        e.schemaPath +
                                        ' , data: ' +
                                        f +
                                        ' '),
                                    (i += ' } '))
                                  : (i += ' {} '),
                                (D = i),
                                (i = B.pop()),
                                !e.compositeRule && u
                                  ? e.async
                                    ? (i +=
                                        ' throw new ValidationError([' +
                                        D +
                                        ']); ')
                                    : (i +=
                                        ' validate.errors = [' +
                                        D +
                                        ']; return false; ')
                                  : (i +=
                                      ' var err = ' +
                                      D +
                                      ';  if (vErrors === null) vErrors = [err]; else vErrors.push(err); errors++; '),
                                (i += ' } '))),
                            u &&
                              ((i += ' if (errors === '),
                              (i += y ? '0' : 'errs_' + l),
                              (i += ') { '),
                              (w += '}'));
                        }
                  }
                  function J(e) {
                    for (var t = e.rules, i = 0; i < t.length; i++)
                      if (Y(t[i])) return 1;
                  }
                  function Y(t) {
                    return (
                      void 0 !== e.schema[t.keyword] ||
                      (t.implements &&
                        (function (t) {
                          for (var i = t.implements, r = 0; r < i.length; r++)
                            if (void 0 !== e.schema[i[r]]) return !0;
                        })(t))
                    );
                  }
                  return (
                    u && (i += ' ' + w + ' '),
                    y
                      ? (r
                          ? ((i +=
                              ' if (errors === 0) return data;           '),
                            (i += ' else throw new ValidationError(vErrors); '))
                          : ((i += ' validate.errors = vErrors; '),
                            (i += ' return errors === 0;       ')),
                        (i += ' }; return validate;'))
                      : (i += ' var ' + m + ' = errors === errs_' + l + ';'),
                    i
                  );
                };
              },
              {},
            ],
            39: [
              function (e, t, i) {
                var r = /^[a-z_$][a-z0-9_$-]*$/i,
                  a = e('./dotjs/custom'),
                  o = e('./definition_schema');
                t.exports = {
                  add: function (e, t) {
                    var i = this.RULES;
                    if (i.keywords[e])
                      throw new Error('Keyword ' + e + ' is already defined');
                    if (!r.test(e))
                      throw new Error(
                        'Keyword ' + e + ' is not a valid identifier',
                      );
                    if (t) {
                      this.validateKeyword(t, !0);
                      var o = t.type;
                      if (Array.isArray(o))
                        for (var n = 0; n < o.length; n++) l(e, o[n], t);
                      else l(e, o, t);
                      var s = t.metaSchema;
                      s &&
                        (t.$data &&
                          this._opts.$data &&
                          (s = {
                            anyOf: [
                              s,
                              {
                                $ref: 'https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#',
                              },
                            ],
                          }),
                        (t.validateSchema = this.compile(s, !0)));
                    }
                    function l(e, t, r) {
                      for (var o, n = 0; n < i.length; n++) {
                        var s = i[n];
                        if (s.type == t) {
                          o = s;
                          break;
                        }
                      }
                      o || ((o = { type: t, rules: [] }), i.push(o));
                      var l = {
                        keyword: e,
                        definition: r,
                        custom: !0,
                        code: a,
                        implements: r.implements,
                      };
                      o.rules.push(l), (i.custom[e] = l);
                    }
                    return (i.keywords[e] = i.all[e] = !0), this;
                  },
                  get: function (e) {
                    var t = this.RULES.custom[e];
                    return t ? t.definition : this.RULES.keywords[e] || !1;
                  },
                  remove: function (e) {
                    var t = this.RULES;
                    delete t.keywords[e], delete t.all[e], delete t.custom[e];
                    for (var i = 0; i < t.length; i++)
                      for (var r = t[i].rules, a = 0; a < r.length; a++)
                        if (r[a].keyword == e) {
                          r.splice(a, 1);
                          break;
                        }
                    return this;
                  },
                  validate: function e(t, i) {
                    e.errors = null;
                    var r = (this._validateKeyword =
                      this._validateKeyword || this.compile(o, !0));
                    if (r(t)) return !0;
                    if (((e.errors = r.errors), i))
                      throw new Error(
                        'custom keyword definition is invalid: ' +
                          this.errorsText(r.errors),
                      );
                    return !1;
                  },
                };
              },
              { './definition_schema': 12, './dotjs/custom': 22 },
            ],
            40: [
              function (e, t, i) {
                t.exports = {
                  $schema: 'http://json-schema.org/draft-07/schema#',
                  $id: 'https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#',
                  description:
                    'Meta-schema for $data reference (JSON Schema extension proposal)',
                  type: 'object',
                  required: ['$data'],
                  properties: {
                    $data: {
                      type: 'string',
                      anyOf: [
                        { format: 'relative-json-pointer' },
                        { format: 'json-pointer' },
                      ],
                    },
                  },
                  additionalProperties: !1,
                };
              },
              {},
            ],
            41: [
              function (e, t, i) {
                t.exports = {
                  $schema: 'http://json-schema.org/draft-07/schema#',
                  $id: 'http://json-schema.org/draft-07/schema#',
                  title: 'Core schema meta-schema',
                  definitions: {
                    schemaArray: {
                      type: 'array',
                      minItems: 1,
                      items: { $ref: '#' },
                    },
                    nonNegativeInteger: { type: 'integer', minimum: 0 },
                    nonNegativeIntegerDefault0: {
                      allOf: [
                        { $ref: '#/definitions/nonNegativeInteger' },
                        { default: 0 },
                      ],
                    },
                    simpleTypes: {
                      enum: [
                        'array',
                        'boolean',
                        'integer',
                        'null',
                        'number',
                        'object',
                        'string',
                      ],
                    },
                    stringArray: {
                      type: 'array',
                      items: { type: 'string' },
                      uniqueItems: !0,
                      default: [],
                    },
                  },
                  type: ['object', 'boolean'],
                  properties: {
                    $id: { type: 'string', format: 'uri-reference' },
                    $schema: { type: 'string', format: 'uri' },
                    $ref: { type: 'string', format: 'uri-reference' },
                    $comment: { type: 'string' },
                    title: { type: 'string' },
                    description: { type: 'string' },
                    default: !0,
                    readOnly: { type: 'boolean', default: !1 },
                    examples: { type: 'array', items: !0 },
                    multipleOf: { type: 'number', exclusiveMinimum: 0 },
                    maximum: { type: 'number' },
                    exclusiveMaximum: { type: 'number' },
                    minimum: { type: 'number' },
                    exclusiveMinimum: { type: 'number' },
                    maxLength: { $ref: '#/definitions/nonNegativeInteger' },
                    minLength: {
                      $ref: '#/definitions/nonNegativeIntegerDefault0',
                    },
                    pattern: { type: 'string', format: 'regex' },
                    additionalItems: { $ref: '#' },
                    items: {
                      anyOf: [
                        { $ref: '#' },
                        { $ref: '#/definitions/schemaArray' },
                      ],
                      default: !0,
                    },
                    maxItems: { $ref: '#/definitions/nonNegativeInteger' },
                    minItems: {
                      $ref: '#/definitions/nonNegativeIntegerDefault0',
                    },
                    uniqueItems: { type: 'boolean', default: !1 },
                    contains: { $ref: '#' },
                    maxProperties: { $ref: '#/definitions/nonNegativeInteger' },
                    minProperties: {
                      $ref: '#/definitions/nonNegativeIntegerDefault0',
                    },
                    required: { $ref: '#/definitions/stringArray' },
                    additionalProperties: { $ref: '#' },
                    definitions: {
                      type: 'object',
                      additionalProperties: { $ref: '#' },
                      default: {},
                    },
                    properties: {
                      type: 'object',
                      additionalProperties: { $ref: '#' },
                      default: {},
                    },
                    patternProperties: {
                      type: 'object',
                      additionalProperties: { $ref: '#' },
                      propertyNames: { format: 'regex' },
                      default: {},
                    },
                    dependencies: {
                      type: 'object',
                      additionalProperties: {
                        anyOf: [
                          { $ref: '#' },
                          { $ref: '#/definitions/stringArray' },
                        ],
                      },
                    },
                    propertyNames: { $ref: '#' },
                    const: !0,
                    enum: {
                      type: 'array',
                      items: !0,
                      minItems: 1,
                      uniqueItems: !0,
                    },
                    type: {
                      anyOf: [
                        { $ref: '#/definitions/simpleTypes' },
                        {
                          type: 'array',
                          items: { $ref: '#/definitions/simpleTypes' },
                          minItems: 1,
                          uniqueItems: !0,
                        },
                      ],
                    },
                    format: { type: 'string' },
                    contentMediaType: { type: 'string' },
                    contentEncoding: { type: 'string' },
                    if: { $ref: '#' },
                    then: { $ref: '#' },
                    else: { $ref: '#' },
                    allOf: { $ref: '#/definitions/schemaArray' },
                    anyOf: { $ref: '#/definitions/schemaArray' },
                    oneOf: { $ref: '#/definitions/schemaArray' },
                    not: { $ref: '#' },
                  },
                  default: !0,
                };
              },
              {},
            ],
            42: [
              function (e, t, i) {
                t.exports = function e(t, i) {
                  if (t === i) return !0;
                  if (t && i && 'object' == typeof t && 'object' == typeof i) {
                    if (t.constructor !== i.constructor) return !1;
                    var r, a, o;
                    if (Array.isArray(t)) {
                      if ((r = t.length) != i.length) return !1;
                      for (a = r; 0 != a--; ) if (!e(t[a], i[a])) return !1;
                      return !0;
                    }
                    if (t.constructor === RegExp)
                      return t.source === i.source && t.flags === i.flags;
                    if (t.valueOf !== Object.prototype.valueOf)
                      return t.valueOf() === i.valueOf();
                    if (t.toString !== Object.prototype.toString)
                      return t.toString() === i.toString();
                    if (
                      (r = (o = Object.keys(t)).length) !==
                      Object.keys(i).length
                    )
                      return !1;
                    for (a = r; 0 != a--; )
                      if (!Object.prototype.hasOwnProperty.call(i, o[a]))
                        return !1;
                    for (a = r; 0 != a--; ) {
                      var n = o[a];
                      if (!e(t[n], i[n])) return !1;
                    }
                    return !0;
                  }
                  return t != t && i != i;
                };
              },
              {},
            ],
            43: [
              function (e, t, i) {
                t.exports = function (e, t) {
                  'function' == typeof (t = t || {}) && (t = { cmp: t });
                  var i,
                    r = 'boolean' == typeof t.cycles && t.cycles,
                    a =
                      t.cmp &&
                      ((i = t.cmp),
                      function (e) {
                        return function (t, r) {
                          var a = { key: t, value: e[t] },
                            o = { key: r, value: e[r] };
                          return i(a, o);
                        };
                      }),
                    o = [];
                  return (function e(t) {
                    if (
                      (t &&
                        t.toJSON &&
                        'function' == typeof t.toJSON &&
                        (t = t.toJSON()),
                      void 0 !== t)
                    ) {
                      if ('number' == typeof t)
                        return isFinite(t) ? '' + t : 'null';
                      if ('object' != typeof t) return JSON.stringify(t);
                      if (Array.isArray(t)) {
                        for (s = '[', l = 0; l < t.length; l++)
                          l && (s += ','), (s += e(t[l]) || 'null');
                        return s + ']';
                      }
                      if (null === t) return 'null';
                      if (-1 !== o.indexOf(t)) {
                        if (r) return JSON.stringify('__cycle__');
                        throw new TypeError(
                          'Converting circular structure to JSON',
                        );
                      }
                      for (
                        var i = o.push(t) - 1,
                          n = Object.keys(t).sort(a && a(t)),
                          s = '',
                          l = 0;
                        l < n.length;
                        l++
                      ) {
                        var d = n[l],
                          p = e(t[d]);
                        p &&
                          (s && (s += ','), (s += JSON.stringify(d) + ':' + p));
                      }
                      return o.splice(i, 1), '{' + s + '}';
                    }
                  })(e);
                };
              },
              {},
            ],
            44: [
              function (e, t, i) {
                var r = (t.exports = function (e, t, i) {
                  'function' == typeof t && ((i = t), (t = {})),
                    (function e(t, i, a, o, n, s, l, d, p, c) {
                      if (o && 'object' == typeof o && !Array.isArray(o)) {
                        for (var h in (i(o, n, s, l, d, p, c), o)) {
                          var u = o[h];
                          if (Array.isArray(u)) {
                            if (h in r.arrayKeywords)
                              for (var f = 0; f < u.length; f++)
                                e(
                                  t,
                                  i,
                                  a,
                                  u[f],
                                  n + '/' + h + '/' + f,
                                  s,
                                  n,
                                  h,
                                  o,
                                  f,
                                );
                          } else if (h in r.propsKeywords) {
                            if (u && 'object' == typeof u)
                              for (var m in u)
                                e(
                                  t,
                                  i,
                                  a,
                                  u[m],
                                  n +
                                    '/' +
                                    h +
                                    '/' +
                                    m.replace(/~/g, '~0').replace(/\//g, '~1'),
                                  s,
                                  n,
                                  h,
                                  o,
                                  m,
                                );
                          } else
                            (h in r.keywords ||
                              (t.allKeys && !(h in r.skipKeywords))) &&
                              e(t, i, a, u, n + '/' + h, s, n, h, o);
                        }
                        a(o, n, s, l, d, p, c);
                      }
                    })(
                      t,
                      'function' == typeof (i = t.cb || i)
                        ? i
                        : i.pre || function () {},
                      i.post || function () {},
                      e,
                      '',
                      e,
                    );
                });
                (r.keywords = {
                  additionalItems: !0,
                  items: !0,
                  contains: !0,
                  additionalProperties: !0,
                  propertyNames: !0,
                  not: !0,
                }),
                  (r.arrayKeywords = {
                    items: !0,
                    allOf: !0,
                    anyOf: !0,
                    oneOf: !0,
                  }),
                  (r.propsKeywords = {
                    definitions: !0,
                    properties: !0,
                    patternProperties: !0,
                    dependencies: !0,
                  }),
                  (r.skipKeywords = {
                    default: !0,
                    enum: !0,
                    const: !0,
                    required: !0,
                    maximum: !0,
                    minimum: !0,
                    exclusiveMaximum: !0,
                    exclusiveMinimum: !0,
                    multipleOf: !0,
                    maxLength: !0,
                    minLength: !0,
                    pattern: !0,
                    format: !0,
                    maxItems: !0,
                    minItems: !0,
                    uniqueItems: !0,
                    maxProperties: !0,
                    minProperties: !0,
                  });
              },
              {},
            ],
            45: [
              function (e, t, i) {
                !(function (e) {
                  function t() {
                    for (
                      var e = arguments.length, t = Array(e), i = 0;
                      i < e;
                      i++
                    )
                      t[i] = arguments[i];
                    if (1 < t.length) {
                      t[0] = t[0].slice(0, -1);
                      for (var r = t.length - 1, a = 1; a < r; ++a)
                        t[a] = t[a].slice(1, -1);
                      return (t[r] = t[r].slice(1)), t.join('');
                    }
                    return t[0];
                  }
                  function i(e) {
                    return '(?:' + e + ')';
                  }
                  function r(e) {
                    return void 0 === e
                      ? 'undefined'
                      : null === e
                      ? 'null'
                      : Object.prototype.toString
                          .call(e)
                          .split(' ')
                          .pop()
                          .split(']')
                          .shift()
                          .toLowerCase();
                  }
                  function a(e) {
                    return e.toUpperCase();
                  }
                  function o(e) {
                    var r = '[A-Za-z]',
                      a = '[0-9]',
                      o = t(a, '[A-Fa-f]'),
                      n = i(
                        i('%[EFef]' + o + '%' + o + o + '%' + o + o) +
                          '|' +
                          i('%[89A-Fa-f]' + o + '%' + o + o) +
                          '|' +
                          i('%' + o + o),
                      ),
                      s = "[\\!\\$\\&\\'\\(\\)\\*\\+\\,\\;\\=]",
                      l = t('[\\:\\/\\?\\#\\[\\]\\@]', s),
                      d = e ? '[\\uE000-\\uF8FF]' : '[]',
                      p = t(
                        r,
                        a,
                        '[\\-\\.\\_\\~]',
                        e
                          ? '[\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]'
                          : '[]',
                      );
                    i(r + t(r, a, '[\\+\\-\\.]') + '*'),
                      i(i(n + '|' + t(p, s, '[\\:]')) + '*');
                    var c = i(
                        '(?:25[0-5])|(?:2[0-4][0-9])|(?:1[0-9][0-9])|(?:0?[1-9][0-9])|0?0?' +
                          a,
                      ),
                      h = i(c + '\\.' + c + '\\.' + c + '\\.' + c),
                      u = i(o + '{1,4}'),
                      f = i(i(u + '\\:' + u) + '|' + h),
                      m = i(i(u + '\\:') + '{6}' + f),
                      y = i('\\:\\:' + i(u + '\\:') + '{5}' + f),
                      g = i(i(u) + '?\\:\\:' + i(u + '\\:') + '{4}' + f),
                      b = i(
                        i(i(u + '\\:') + '{0,1}' + u) +
                          '?\\:\\:' +
                          i(u + '\\:') +
                          '{3}' +
                          f,
                      ),
                      v = i(
                        i(i(u + '\\:') + '{0,2}' + u) +
                          '?\\:\\:' +
                          i(u + '\\:') +
                          '{2}' +
                          f,
                      ),
                      w = i(
                        i(i(u + '\\:') + '{0,3}' + u) +
                          '?\\:\\:' +
                          u +
                          '\\:' +
                          f,
                      ),
                      j = i(i(i(u + '\\:') + '{0,4}' + u) + '?\\:\\:' + f),
                      S = i(i(i(u + '\\:') + '{0,5}' + u) + '?\\:\\:' + u),
                      P = i(i(i(u + '\\:') + '{0,6}' + u) + '?\\:\\:'),
                      I = i([m, y, g, b, v, w, j, S, P].join('|')),
                      _ = i(i(p + '|' + n) + '+');
                    i('[vV]' + o + '+\\.' + t(p, s, '[\\:]') + '+'),
                      i(i(n + '|' + t(p, s)) + '*');
                    var x = i(n + '|' + t(p, s, '[\\:\\@]'));
                    return (
                      i(i(n + '|' + t(p, s, '[\\@]')) + '+'),
                      i(i(x + '|' + t('[\\/\\?]', d)) + '*'),
                      {
                        NOT_SCHEME: new RegExp(
                          t('[^]', r, a, '[\\+\\-\\.]'),
                          'g',
                        ),
                        NOT_USERINFO: new RegExp(t('[^\\%\\:]', p, s), 'g'),
                        NOT_HOST: new RegExp(t('[^\\%\\[\\]\\:]', p, s), 'g'),
                        NOT_PATH: new RegExp(t('[^\\%\\/\\:\\@]', p, s), 'g'),
                        NOT_PATH_NOSCHEME: new RegExp(
                          t('[^\\%\\/\\@]', p, s),
                          'g',
                        ),
                        NOT_QUERY: new RegExp(
                          t('[^\\%]', p, s, '[\\:\\@\\/\\?]', d),
                          'g',
                        ),
                        NOT_FRAGMENT: new RegExp(
                          t('[^\\%]', p, s, '[\\:\\@\\/\\?]'),
                          'g',
                        ),
                        ESCAPE: new RegExp(t('[^]', p, s), 'g'),
                        UNRESERVED: new RegExp(p, 'g'),
                        OTHER_CHARS: new RegExp(t('[^\\%]', p, l), 'g'),
                        PCT_ENCODED: new RegExp(n, 'g'),
                        IPV4ADDRESS: new RegExp('^(' + h + ')$'),
                        IPV6ADDRESS: new RegExp(
                          '^\\[?(' +
                            I +
                            ')' +
                            i(i('\\%25|\\%(?!' + o + '{2})') + '(' + _ + ')') +
                            '?\\]?$',
                        ),
                      }
                    );
                  }
                  var n = o(!1),
                    s = o(!0),
                    l = function (e, t) {
                      if (Array.isArray(e)) return e;
                      if (Symbol.iterator in Object(e))
                        return (function (e, t) {
                          var i = [],
                            r = !0,
                            a = !1,
                            o = void 0;
                          try {
                            for (
                              var n, s = e[Symbol.iterator]();
                              !(r = (n = s.next()).done) &&
                              (i.push(n.value), !t || i.length !== t);
                              r = !0
                            );
                          } catch (e) {
                            (a = !0), (o = e);
                          } finally {
                            try {
                              !r && s.return && s.return();
                            } finally {
                              if (a) throw o;
                            }
                          }
                          return i;
                        })(e, t);
                      throw new TypeError(
                        'Invalid attempt to destructure non-iterable instance',
                      );
                    },
                    d = 2147483647,
                    p = /^xn--/,
                    c = /[^\0-\x7E]/,
                    h = /[\x2E\u3002\uFF0E\uFF61]/g,
                    u = {
                      overflow:
                        'Overflow: input needs wider integers to process',
                      'not-basic':
                        'Illegal input >= 0x80 (not a basic code point)',
                      'invalid-input': 'Invalid input',
                    },
                    f = Math.floor,
                    m = String.fromCharCode;
                  function y(e) {
                    throw new RangeError(u[e]);
                  }
                  function g(e, t) {
                    var i = e.split('@'),
                      r = '';
                    return (
                      1 < i.length && ((r = i[0] + '@'), (e = i[1])),
                      r +
                        (function (e, t) {
                          for (var i = [], r = e.length; r--; ) i[r] = t(e[r]);
                          return i;
                        })((e = e.replace(h, '.')).split('.'), t).join('.')
                    );
                  }
                  function b(e, t) {
                    return e + 22 + 75 * (e < 26) - ((0 != t) << 5);
                  }
                  function v(e, t, i) {
                    var r = 0;
                    for (
                      e = i ? f(e / 700) : e >> 1, e += f(e / t);
                      455 < e;
                      r += 36
                    )
                      e = f(e / 35);
                    return f(r + (36 * e) / (e + 38));
                  }
                  var w = function (e) {
                      return g(e, function (e) {
                        return c.test(e)
                          ? 'xn--' +
                              (function (e) {
                                var t = [],
                                  i = (e = (function (e) {
                                    for (
                                      var t = [], i = 0, r = e.length;
                                      i < r;

                                    ) {
                                      var a,
                                        o = e.charCodeAt(i++);
                                      55296 <= o && o <= 56319 && i < r
                                        ? 56320 ==
                                          (64512 & (a = e.charCodeAt(i++)))
                                          ? t.push(
                                              ((1023 & o) << 10) +
                                                (1023 & a) +
                                                65536,
                                            )
                                          : (t.push(o), i--)
                                        : t.push(o);
                                    }
                                    return t;
                                  })(e)).length,
                                  r = 128,
                                  a = 0,
                                  o = 72,
                                  n = !0,
                                  s = !1,
                                  l = void 0;
                                try {
                                  for (
                                    var p, c = e[Symbol.iterator]();
                                    !(n = (p = c.next()).done);
                                    n = !0
                                  ) {
                                    var h = p.value;
                                    h < 128 && t.push(m(h));
                                  }
                                } catch (e) {
                                  (s = !0), (l = e);
                                } finally {
                                  try {
                                    !n && c.return && c.return();
                                  } finally {
                                    if (s) throw l;
                                  }
                                }
                                var u = t.length,
                                  g = u;
                                for (u && t.push('-'); g < i; ) {
                                  var w = d,
                                    j = !0,
                                    S = !1,
                                    P = void 0;
                                  try {
                                    for (
                                      var I, _ = e[Symbol.iterator]();
                                      !(j = (I = _.next()).done);
                                      j = !0
                                    ) {
                                      var x = I.value;
                                      r <= x && x < w && (w = x);
                                    }
                                  } catch (e) {
                                    (S = !0), (P = e);
                                  } finally {
                                    try {
                                      !j && _.return && _.return();
                                    } finally {
                                      if (S) throw P;
                                    }
                                  }
                                  var T = g + 1;
                                  w - r > f((d - a) / T) && y('overflow'),
                                    (a += (w - r) * T),
                                    (r = w);
                                  var A = !0,
                                    L = !1,
                                    E = void 0;
                                  try {
                                    for (
                                      var D, $ = e[Symbol.iterator]();
                                      !(A = (D = $.next()).done);
                                      A = !0
                                    ) {
                                      var R = D.value;
                                      if (
                                        (R < r && ++a > d && y('overflow'),
                                        R == r)
                                      ) {
                                        for (var F = a, q = 36; ; q += 36) {
                                          var O =
                                            q <= o
                                              ? 1
                                              : o + 26 <= q
                                              ? 26
                                              : q - o;
                                          if (F < O) break;
                                          var k = F - O,
                                            C = 36 - O;
                                          t.push(m(b(O + (k % C), 0))),
                                            (F = f(k / C));
                                        }
                                        t.push(m(b(F, 0))),
                                          (o = v(a, T, g == u)),
                                          (a = 0),
                                          ++g;
                                      }
                                    }
                                  } catch (e) {
                                    (L = !0), (E = e);
                                  } finally {
                                    try {
                                      !A && $.return && $.return();
                                    } finally {
                                      if (L) throw E;
                                    }
                                  }
                                  ++a, ++r;
                                }
                                return t.join('');
                              })(e)
                          : e;
                      });
                    },
                    j = function (e) {
                      return g(e, function (e) {
                        return p.test(e)
                          ? (function (e) {
                              var t = [],
                                i = e.length,
                                r = 0,
                                a = 128,
                                o = 72,
                                n = e.lastIndexOf('-');
                              n < 0 && (n = 0);
                              for (var s = 0; s < n; ++s)
                                128 <= e.charCodeAt(s) && y('not-basic'),
                                  t.push(e.charCodeAt(s));
                              for (var l, p = 0 < n ? n + 1 : 0; p < i; ) {
                                for (var c = r, h = 1, u = 36; ; u += 36) {
                                  i <= p && y('invalid-input');
                                  var m =
                                    (l = e.charCodeAt(p++)) - 48 < 10
                                      ? l - 22
                                      : l - 65 < 26
                                      ? l - 65
                                      : l - 97 < 26
                                      ? l - 97
                                      : 36;
                                  (36 <= m || m > f((d - r) / h)) &&
                                    y('overflow'),
                                    (r += m * h);
                                  var g = u <= o ? 1 : o + 26 <= u ? 26 : u - o;
                                  if (m < g) break;
                                  var b = 36 - g;
                                  h > f(d / b) && y('overflow'), (h *= b);
                                }
                                var w = t.length + 1;
                                (o = v(r - c, w, 0 == c)),
                                  f(r / w) > d - a && y('overflow'),
                                  (a += f(r / w)),
                                  (r %= w),
                                  t.splice(r++, 0, a);
                              }
                              return String.fromCodePoint.apply(String, t);
                            })(e.slice(4).toLowerCase())
                          : e;
                      });
                    },
                    S = {};
                  function P(e) {
                    var t = e.charCodeAt(0);
                    return t < 16
                      ? '%0' + t.toString(16).toUpperCase()
                      : t < 128
                      ? '%' + t.toString(16).toUpperCase()
                      : t < 2048
                      ? '%' +
                        ((t >> 6) | 192).toString(16).toUpperCase() +
                        '%' +
                        ((63 & t) | 128).toString(16).toUpperCase()
                      : '%' +
                        ((t >> 12) | 224).toString(16).toUpperCase() +
                        '%' +
                        (((t >> 6) & 63) | 128).toString(16).toUpperCase() +
                        '%' +
                        ((63 & t) | 128).toString(16).toUpperCase();
                  }
                  function I(e) {
                    for (var t = '', i = 0, r = e.length; i < r; ) {
                      var a,
                        o,
                        n,
                        s = parseInt(e.substr(i + 1, 2), 16);
                      s < 128
                        ? ((t += String.fromCharCode(s)), (i += 3))
                        : 194 <= s && s < 224
                        ? (6 <= r - i
                            ? ((a = parseInt(e.substr(i + 4, 2), 16)),
                              (t += String.fromCharCode(
                                ((31 & s) << 6) | (63 & a),
                              )))
                            : (t += e.substr(i, 6)),
                          (i += 6))
                        : 224 <= s
                        ? (9 <= r - i
                            ? ((o = parseInt(e.substr(i + 4, 2), 16)),
                              (n = parseInt(e.substr(i + 7, 2), 16)),
                              (t += String.fromCharCode(
                                ((15 & s) << 12) | ((63 & o) << 6) | (63 & n),
                              )))
                            : (t += e.substr(i, 9)),
                          (i += 9))
                        : ((t += e.substr(i, 3)), (i += 3));
                    }
                    return t;
                  }
                  function _(e, t) {
                    function i(e) {
                      var i = I(e);
                      return i.match(t.UNRESERVED) ? i : e;
                    }
                    return (
                      e.scheme &&
                        (e.scheme = String(e.scheme)
                          .replace(t.PCT_ENCODED, i)
                          .toLowerCase()
                          .replace(t.NOT_SCHEME, '')),
                      void 0 !== e.userinfo &&
                        (e.userinfo = String(e.userinfo)
                          .replace(t.PCT_ENCODED, i)
                          .replace(t.NOT_USERINFO, P)
                          .replace(t.PCT_ENCODED, a)),
                      void 0 !== e.host &&
                        (e.host = String(e.host)
                          .replace(t.PCT_ENCODED, i)
                          .toLowerCase()
                          .replace(t.NOT_HOST, P)
                          .replace(t.PCT_ENCODED, a)),
                      void 0 !== e.path &&
                        (e.path = String(e.path)
                          .replace(t.PCT_ENCODED, i)
                          .replace(
                            e.scheme ? t.NOT_PATH : t.NOT_PATH_NOSCHEME,
                            P,
                          )
                          .replace(t.PCT_ENCODED, a)),
                      void 0 !== e.query &&
                        (e.query = String(e.query)
                          .replace(t.PCT_ENCODED, i)
                          .replace(t.NOT_QUERY, P)
                          .replace(t.PCT_ENCODED, a)),
                      void 0 !== e.fragment &&
                        (e.fragment = String(e.fragment)
                          .replace(t.PCT_ENCODED, i)
                          .replace(t.NOT_FRAGMENT, P)
                          .replace(t.PCT_ENCODED, a)),
                      e
                    );
                  }
                  function x(e) {
                    return e.replace(/^0*(.*)/, '$1') || '0';
                  }
                  function T(e, t) {
                    var i = e.match(t.IPV4ADDRESS) || [],
                      r = l(i, 2)[1];
                    return r ? r.split('.').map(x).join('.') : e;
                  }
                  function A(e, t) {
                    var i = e.match(t.IPV6ADDRESS) || [],
                      r = l(i, 3),
                      a = r[1],
                      o = r[2];
                    if (a) {
                      for (
                        var n = a.toLowerCase().split('::').reverse(),
                          s = l(n, 2),
                          d = s[0],
                          p = s[1],
                          c = p ? p.split(':').map(x) : [],
                          h = d.split(':').map(x),
                          u = t.IPV4ADDRESS.test(h[h.length - 1]),
                          f = u ? 7 : 8,
                          m = h.length - f,
                          y = Array(f),
                          g = 0;
                        g < f;
                        ++g
                      )
                        y[g] = c[g] || h[m + g] || '';
                      u && (y[f - 1] = T(y[f - 1], t));
                      var b,
                        v,
                        w = y
                          .reduce(function (e, t, i) {
                            var r;
                            return (
                              (t && '0' !== t) ||
                                ((r = e[e.length - 1]) &&
                                r.index + r.length === i
                                  ? r.length++
                                  : e.push({ index: i, length: 1 })),
                              e
                            );
                          }, [])
                          .sort(function (e, t) {
                            return t.length - e.length;
                          })[0],
                        j = void 0;
                      return (
                        (j =
                          w && 1 < w.length
                            ? ((b = y.slice(0, w.index)),
                              (v = y.slice(w.index + w.length)),
                              b.join(':') + '::' + v.join(':'))
                            : y.join(':')),
                        o && (j += '%' + o),
                        j
                      );
                    }
                    return e;
                  }
                  var L =
                      /^(?:([^:\/?#]+):)?(?:\/\/((?:([^\/?#@]*)@)?(\[[^\/?#\]]+\]|[^\/?#:]*)(?:\:(\d*))?))?([^?#]*)(?:\?([^#]*))?(?:#((?:.|\n|\r)*))?/i,
                    E = void 0 === ''.match(/(){0}/)[1];
                  function D(e) {
                    var t =
                        1 < arguments.length && void 0 !== arguments[1]
                          ? arguments[1]
                          : {},
                      i = {},
                      r = !1 !== t.iri ? s : n;
                    'suffix' === t.reference &&
                      (e = (t.scheme ? t.scheme + ':' : '') + '//' + e);
                    var a = e.match(L);
                    if (a) {
                      E
                        ? ((i.scheme = a[1]),
                          (i.userinfo = a[3]),
                          (i.host = a[4]),
                          (i.port = parseInt(a[5], 10)),
                          (i.path = a[6] || ''),
                          (i.query = a[7]),
                          (i.fragment = a[8]),
                          isNaN(i.port) && (i.port = a[5]))
                        : ((i.scheme = a[1] || void 0),
                          (i.userinfo = -1 !== e.indexOf('@') ? a[3] : void 0),
                          (i.host = -1 !== e.indexOf('//') ? a[4] : void 0),
                          (i.port = parseInt(a[5], 10)),
                          (i.path = a[6] || ''),
                          (i.query = -1 !== e.indexOf('?') ? a[7] : void 0),
                          (i.fragment = -1 !== e.indexOf('#') ? a[8] : void 0),
                          isNaN(i.port) &&
                            (i.port = e.match(/\/\/(?:.|\n)*\:(?:\/|\?|\#|$)/)
                              ? a[4]
                              : void 0)),
                        i.host && (i.host = A(T(i.host, r), r)),
                        void 0 !== i.scheme ||
                        void 0 !== i.userinfo ||
                        void 0 !== i.host ||
                        void 0 !== i.port ||
                        i.path ||
                        void 0 !== i.query
                          ? void 0 === i.scheme
                            ? (i.reference = 'relative')
                            : void 0 === i.fragment
                            ? (i.reference = 'absolute')
                            : (i.reference = 'uri')
                          : (i.reference = 'same-document'),
                        t.reference &&
                          'suffix' !== t.reference &&
                          t.reference !== i.reference &&
                          (i.error =
                            i.error ||
                            'URI is not a ' + t.reference + ' reference.');
                      var o = S[(t.scheme || i.scheme || '').toLowerCase()];
                      if (t.unicodeSupport || (o && o.unicodeSupport)) _(i, r);
                      else {
                        if (i.host && (t.domainHost || (o && o.domainHost)))
                          try {
                            i.host = w(
                              i.host.replace(r.PCT_ENCODED, I).toLowerCase(),
                            );
                          } catch (e) {
                            i.error =
                              i.error ||
                              "Host's domain name can not be converted to ASCII via punycode: " +
                                e;
                          }
                        _(i, n);
                      }
                      o && o.parse && o.parse(i, t);
                    } else i.error = i.error || 'URI can not be parsed.';
                    return i;
                  }
                  var $ = /^\.\.?\//,
                    R = /^\/\.(\/|$)/,
                    F = /^\/\.\.(\/|$)/,
                    q = /^\/?(?:.|\n)*?(?=\/|$)/;
                  function O(e) {
                    for (var t = []; e.length; )
                      if (e.match($)) e = e.replace($, '');
                      else if (e.match(R)) e = e.replace(R, '/');
                      else if (e.match(F)) (e = e.replace(F, '/')), t.pop();
                      else if ('.' === e || '..' === e) e = '';
                      else {
                        var i = e.match(q);
                        if (!i)
                          throw new Error('Unexpected dot segment condition');
                        var r = i[0];
                        (e = e.slice(r.length)), t.push(r);
                      }
                    return t.join('');
                  }
                  function k(e) {
                    var t =
                        1 < arguments.length && void 0 !== arguments[1]
                          ? arguments[1]
                          : {},
                      i = t.iri ? s : n,
                      r = [],
                      a = S[(t.scheme || e.scheme || '').toLowerCase()];
                    if (
                      (a && a.serialize && a.serialize(e, t),
                      e.host &&
                        !i.IPV6ADDRESS.test(e.host) &&
                        (t.domainHost || (a && a.domainHost)))
                    )
                      try {
                        e.host = t.iri
                          ? j(e.host)
                          : w(e.host.replace(i.PCT_ENCODED, I).toLowerCase());
                      } catch (i) {
                        e.error =
                          e.error ||
                          "Host's domain name can not be converted to " +
                            (t.iri ? 'Unicode' : 'ASCII') +
                            ' via punycode: ' +
                            i;
                      }
                    _(e, i),
                      'suffix' !== t.reference &&
                        e.scheme &&
                        (r.push(e.scheme), r.push(':'));
                    var o,
                      l,
                      d,
                      p,
                      c =
                        ((o = e),
                        (l = !1 !== t.iri ? s : n),
                        (d = []),
                        void 0 !== o.userinfo &&
                          (d.push(o.userinfo), d.push('@')),
                        void 0 !== o.host &&
                          d.push(
                            A(T(String(o.host), l), l).replace(
                              l.IPV6ADDRESS,
                              function (e, t, i) {
                                return '[' + t + (i ? '%25' + i : '') + ']';
                              },
                            ),
                          ),
                        'number' == typeof o.port &&
                          (d.push(':'), d.push(o.port.toString(10))),
                        d.length ? d.join('') : void 0);
                    return (
                      void 0 !== c &&
                        ('suffix' !== t.reference && r.push('//'),
                        r.push(c),
                        e.path && '/' !== e.path.charAt(0) && r.push('/')),
                      void 0 !== e.path &&
                        ((p = e.path),
                        t.absolutePath || (a && a.absolutePath) || (p = O(p)),
                        void 0 === c && (p = p.replace(/^\/\//, '/%2F')),
                        r.push(p)),
                      void 0 !== e.query && (r.push('?'), r.push(e.query)),
                      void 0 !== e.fragment &&
                        (r.push('#'), r.push(e.fragment)),
                      r.join('')
                    );
                  }
                  function C(e, t) {
                    var i =
                        2 < arguments.length && void 0 !== arguments[2]
                          ? arguments[2]
                          : {},
                      r = {};
                    return (
                      arguments[3] ||
                        ((e = D(k(e, i), i)), (t = D(k(t, i), i))),
                      !(i = i || {}).tolerant && t.scheme
                        ? ((r.scheme = t.scheme),
                          (r.userinfo = t.userinfo),
                          (r.host = t.host),
                          (r.port = t.port),
                          (r.path = O(t.path || '')),
                          (r.query = t.query))
                        : (void 0 !== t.userinfo ||
                          void 0 !== t.host ||
                          void 0 !== t.port
                            ? ((r.userinfo = t.userinfo),
                              (r.host = t.host),
                              (r.port = t.port),
                              (r.path = O(t.path || '')),
                              (r.query = t.query))
                            : (t.path
                                ? ('/' === t.path.charAt(0)
                                    ? (r.path = O(t.path))
                                    : ((void 0 === e.userinfo &&
                                        void 0 === e.host &&
                                        void 0 === e.port) ||
                                      e.path
                                        ? e.path
                                          ? (r.path =
                                              e.path.slice(
                                                0,
                                                e.path.lastIndexOf('/') + 1,
                                              ) + t.path)
                                          : (r.path = t.path)
                                        : (r.path = '/' + t.path),
                                      (r.path = O(r.path))),
                                  (r.query = t.query))
                                : ((r.path = e.path),
                                  void 0 !== t.query
                                    ? (r.query = t.query)
                                    : (r.query = e.query)),
                              (r.userinfo = e.userinfo),
                              (r.host = e.host),
                              (r.port = e.port)),
                          (r.scheme = e.scheme)),
                      (r.fragment = t.fragment),
                      r
                    );
                  }
                  function z(e, t) {
                    return (
                      e &&
                      e
                        .toString()
                        .replace(t && t.iri ? s.PCT_ENCODED : n.PCT_ENCODED, I)
                    );
                  }
                  var M = {
                      scheme: 'http',
                      domainHost: !0,
                      parse: function (e) {
                        return (
                          e.host ||
                            (e.error =
                              e.error || 'HTTP URIs must have a host.'),
                          e
                        );
                      },
                      serialize: function (e) {
                        return (
                          (e.port !==
                            ('https' !== String(e.scheme).toLowerCase()
                              ? 80
                              : 443) &&
                            '' !== e.port) ||
                            (e.port = void 0),
                          e.path || (e.path = '/'),
                          e
                        );
                      },
                    },
                    V = {
                      scheme: 'https',
                      domainHost: M.domainHost,
                      parse: M.parse,
                      serialize: M.serialize,
                    },
                    U = {},
                    N =
                      '[A-Za-z0-9\\-\\.\\_\\~\\xA0-\\u200D\\u2010-\\u2029\\u202F-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFEF]',
                    B = t(
                      "[\\!\\$\\%\\'\\(\\)\\*\\+\\,\\-\\.0-9\\<\\>A-Z\\x5E-\\x7E]",
                      '[\\"\\\\]',
                    ),
                    G = new RegExp(N, 'g'),
                    W = new RegExp(
                      '(?:(?:%[EFef][0-9A-Fa-f]%[0-9A-Fa-f][0-9A-Fa-f]%[0-9A-Fa-f][0-9A-Fa-f])|(?:%[89A-Fa-f][0-9A-Fa-f]%[0-9A-Fa-f][0-9A-Fa-f])|(?:%[0-9A-Fa-f][0-9A-Fa-f]))',
                      'g',
                    ),
                    Q = new RegExp(
                      t(
                        '[^]',
                        "[A-Za-z0-9\\!\\$\\%\\'\\*\\+\\-\\^\\_\\`\\{\\|\\}\\~]",
                        '[\\.]',
                        '[\\"]',
                        B,
                      ),
                      'g',
                    ),
                    K = new RegExp(
                      t('[^]', N, "[\\!\\$\\'\\(\\)\\*\\+\\,\\;\\:\\@]"),
                      'g',
                    ),
                    H = K;
                  function J(e) {
                    var t = I(e);
                    return t.match(G) ? t : e;
                  }
                  var Y = {
                      scheme: 'mailto',
                      parse: function (e, t) {
                        var i = e,
                          r = (i.to = i.path ? i.path.split(',') : []);
                        if (((i.path = void 0), i.query)) {
                          for (
                            var a = !1,
                              o = {},
                              n = i.query.split('&'),
                              s = 0,
                              l = n.length;
                            s < l;
                            ++s
                          ) {
                            var d = n[s].split('=');
                            switch (d[0]) {
                              case 'to':
                                for (
                                  var p = d[1].split(','), c = 0, h = p.length;
                                  c < h;
                                  ++c
                                )
                                  r.push(p[c]);
                                break;
                              case 'subject':
                                i.subject = z(d[1], t);
                                break;
                              case 'body':
                                i.body = z(d[1], t);
                                break;
                              default:
                                (a = !0), (o[z(d[0], t)] = z(d[1], t));
                            }
                          }
                          a && (i.headers = o);
                        }
                        i.query = void 0;
                        for (var u = 0, f = r.length; u < f; ++u) {
                          var m = r[u].split('@');
                          if (((m[0] = z(m[0])), t.unicodeSupport))
                            m[1] = z(m[1], t).toLowerCase();
                          else
                            try {
                              m[1] = w(z(m[1], t).toLowerCase());
                            } catch (e) {
                              i.error =
                                i.error ||
                                "Email address's domain name can not be converted to ASCII via punycode: " +
                                  e;
                            }
                          r[u] = m.join('@');
                        }
                        return i;
                      },
                      serialize: function (e, t) {
                        var i,
                          r = e,
                          o =
                            null != (i = e.to)
                              ? i instanceof Array
                                ? i
                                : 'number' != typeof i.length ||
                                  i.split ||
                                  i.setInterval ||
                                  i.call
                                ? [i]
                                : Array.prototype.slice.call(i)
                              : [];
                        if (o) {
                          for (var n = 0, s = o.length; n < s; ++n) {
                            var l = String(o[n]),
                              d = l.lastIndexOf('@'),
                              p = l
                                .slice(0, d)
                                .replace(W, J)
                                .replace(W, a)
                                .replace(Q, P),
                              c = l.slice(d + 1);
                            try {
                              c = t.iri ? j(c) : w(z(c, t).toLowerCase());
                            } catch (e) {
                              r.error =
                                r.error ||
                                "Email address's domain name can not be converted to " +
                                  (t.iri ? 'Unicode' : 'ASCII') +
                                  ' via punycode: ' +
                                  e;
                            }
                            o[n] = p + '@' + c;
                          }
                          r.path = o.join(',');
                        }
                        var h = (e.headers = e.headers || {});
                        e.subject && (h.subject = e.subject),
                          e.body && (h.body = e.body);
                        var u = [];
                        for (var f in h)
                          h[f] !== U[f] &&
                            u.push(
                              f.replace(W, J).replace(W, a).replace(K, P) +
                                '=' +
                                h[f].replace(W, J).replace(W, a).replace(H, P),
                            );
                        return u.length && (r.query = u.join('&')), r;
                      },
                    },
                    Z = /^([^\:]+)\:(.*)/,
                    X = {
                      scheme: 'urn',
                      parse: function (e, t) {
                        var i,
                          r,
                          a,
                          o,
                          n,
                          s = e.path && e.path.match(Z),
                          l = e;
                        return (
                          s
                            ? ((i = t.scheme || l.scheme || 'urn'),
                              (r = s[1].toLowerCase()),
                              (a = s[2]),
                              (o = i + ':' + (t.nid || r)),
                              (n = S[o]),
                              (l.nid = r),
                              (l.nss = a),
                              (l.path = void 0),
                              n && (l = n.parse(l, t)))
                            : (l.error = l.error || 'URN can not be parsed.'),
                          l
                        );
                      },
                      serialize: function (e, t) {
                        var i = t.scheme || e.scheme || 'urn',
                          r = e.nid,
                          a = i + ':' + (t.nid || r),
                          o = S[a];
                        o && (e = o.serialize(e, t));
                        var n = e,
                          s = e.nss;
                        return (n.path = (r || t.nid) + ':' + s), n;
                      },
                    },
                    ee =
                      /^[0-9A-Fa-f]{8}(?:\-[0-9A-Fa-f]{4}){3}\-[0-9A-Fa-f]{12}$/,
                    te = {
                      scheme: 'urn:uuid',
                      parse: function (e, t) {
                        var i = e;
                        return (
                          (i.uuid = i.nss),
                          (i.nss = void 0),
                          t.tolerant ||
                            (i.uuid && i.uuid.match(ee)) ||
                            (i.error = i.error || 'UUID is not valid.'),
                          i
                        );
                      },
                      serialize: function (e) {
                        var t = e;
                        return (t.nss = (e.uuid || '').toLowerCase()), t;
                      },
                    };
                  (S[M.scheme] = M),
                    (S[V.scheme] = V),
                    (S[Y.scheme] = Y),
                    (S[X.scheme] = X),
                    (S[te.scheme] = te),
                    (e.SCHEMES = S),
                    (e.pctEncChar = P),
                    (e.pctDecChars = I),
                    (e.parse = D),
                    (e.removeDotSegments = O),
                    (e.serialize = k),
                    (e.resolveComponents = C),
                    (e.resolve = function (e, t, i) {
                      var r = (function (e, t) {
                        var i = { scheme: 'null' };
                        if (t) for (var r in t) i[r] = t[r];
                        return i;
                      })(0, i);
                      return k(C(D(e, r), D(t, r), r, !0), r);
                    }),
                    (e.normalize = function (e, t) {
                      return (
                        'string' == typeof e
                          ? (e = k(D(e, t), t))
                          : 'object' === r(e) && (e = D(k(e, t), t)),
                        e
                      );
                    }),
                    (e.equal = function (e, t, i) {
                      return (
                        'string' == typeof e
                          ? (e = k(D(e, i), i))
                          : 'object' === r(e) && (e = k(e, i)),
                        'string' == typeof t
                          ? (t = k(D(t, i), i))
                          : 'object' === r(t) && (t = k(t, i)),
                        e === t
                      );
                    }),
                    (e.escapeComponent = function (e, t) {
                      return (
                        e &&
                        e
                          .toString()
                          .replace(t && t.iri ? s.ESCAPE : n.ESCAPE, P)
                      );
                    }),
                    (e.unescapeComponent = z),
                    Object.defineProperty(e, '__esModule', { value: !0 });
                })(
                  'object' == typeof i && void 0 !== t
                    ? i
                    : (this.URI = this.URI || {}),
                );
              },
              {},
            ],
            ajv: [
              function (e, t, i) {
                var r = e('./compile'),
                  a = e('./compile/resolve'),
                  o = e('./cache'),
                  n = e('./compile/schema_obj'),
                  s = e('fast-json-stable-stringify'),
                  l = e('./compile/formats'),
                  d = e('./compile/rules'),
                  p = e('./data'),
                  c = e('./compile/util');
                ((t.exports = g).prototype.validate = function (e, t) {
                  var i;
                  if ('string' == typeof e) {
                    if (!(i = this.getSchema(e)))
                      throw new Error('no schema with key or ref "' + e + '"');
                  } else {
                    var r = this._addSchema(e);
                    i = r.validate || this._compile(r);
                  }
                  var a = i(t);
                  return !0 !== i.$async && (this.errors = i.errors), a;
                }),
                  (g.prototype.compile = function (e, t) {
                    var i = this._addSchema(e, void 0, t);
                    return i.validate || this._compile(i);
                  }),
                  (g.prototype.addSchema = function (e, t, i, r) {
                    if (Array.isArray(e)) {
                      for (var o = 0; o < e.length; o++)
                        this.addSchema(e[o], void 0, i, r);
                      return this;
                    }
                    var n = this._getId(e);
                    if (void 0 !== n && 'string' != typeof n)
                      throw new Error('schema id must be string');
                    return (
                      P(this, (t = a.normalizeId(t || n))),
                      (this._schemas[t] = this._addSchema(e, i, r, !0)),
                      this
                    );
                  }),
                  (g.prototype.addMetaSchema = function (e, t, i) {
                    return this.addSchema(e, t, i, !0), this;
                  }),
                  (g.prototype.validateSchema = function (e, t) {
                    var i = e.$schema;
                    if (void 0 !== i && 'string' != typeof i)
                      throw new Error('$schema must be a string');
                    if (
                      !(i =
                        i ||
                        this._opts.defaultMeta ||
                        (function (e) {
                          var t = e._opts.meta;
                          return (
                            (e._opts.defaultMeta =
                              'object' == typeof t
                                ? e._getId(t) || t
                                : e.getSchema(f)
                                ? f
                                : void 0),
                            e._opts.defaultMeta
                          );
                        })(this))
                    )
                      return (
                        this.logger.warn('meta-schema not available'),
                        !(this.errors = null)
                      );
                    var r = this.validate(i, e);
                    if (!r && t) {
                      var a = 'schema is invalid: ' + this.errorsText();
                      if ('log' != this._opts.validateSchema)
                        throw new Error(a);
                      this.logger.error(a);
                    }
                    return r;
                  }),
                  (g.prototype.getSchema = function (e) {
                    var t = b(this, e);
                    switch (typeof t) {
                      case 'object':
                        return t.validate || this._compile(t);
                      case 'string':
                        return this.getSchema(t);
                      case 'undefined':
                        return (function (e, t) {
                          var i = a.schema.call(e, { schema: {} }, t);
                          if (i) {
                            var o = i.schema,
                              s = i.root,
                              l = i.baseId,
                              d = r.call(e, o, s, void 0, l);
                            return (
                              (e._fragments[t] = new n({
                                ref: t,
                                fragment: !0,
                                schema: o,
                                root: s,
                                baseId: l,
                                validate: d,
                              })),
                              d
                            );
                          }
                        })(this, e);
                    }
                  }),
                  (g.prototype.removeSchema = function (e) {
                    if (e instanceof RegExp)
                      return (
                        v(this, this._schemas, e), v(this, this._refs, e), this
                      );
                    switch (typeof e) {
                      case 'undefined':
                        return (
                          v(this, this._schemas),
                          v(this, this._refs),
                          this._cache.clear(),
                          this
                        );
                      case 'string':
                        var t = b(this, e);
                        return (
                          t && this._cache.del(t.cacheKey),
                          delete this._schemas[e],
                          delete this._refs[e],
                          this
                        );
                      case 'object':
                        var i = this._opts.serialize,
                          r = i ? i(e) : e;
                        this._cache.del(r);
                        var o = this._getId(e);
                        o &&
                          ((o = a.normalizeId(o)),
                          delete this._schemas[o],
                          delete this._refs[o]);
                    }
                    return this;
                  }),
                  (g.prototype.addFormat = function (e, t) {
                    return (
                      'string' == typeof t && (t = new RegExp(t)),
                      (this._formats[e] = t),
                      this
                    );
                  }),
                  (g.prototype.errorsText = function (e, t) {
                    if (!(e = e || this.errors)) return 'No errors';
                    for (
                      var i =
                          void 0 === (t = t || {}).separator
                            ? ', '
                            : t.separator,
                        r = void 0 === t.dataVar ? 'data' : t.dataVar,
                        a = '',
                        o = 0;
                      o < e.length;
                      o++
                    ) {
                      var n = e[o];
                      n && (a += r + n.dataPath + ' ' + n.message + i);
                    }
                    return a.slice(0, -i.length);
                  }),
                  (g.prototype._addSchema = function (e, t, i, r) {
                    if ('object' != typeof e && 'boolean' != typeof e)
                      throw new Error('schema should be object or boolean');
                    var o = this._opts.serialize,
                      s = o ? o(e) : e,
                      l = this._cache.get(s);
                    if (l) return l;
                    r = r || !1 !== this._opts.addUsedSchema;
                    var d = a.normalizeId(this._getId(e));
                    d && r && P(this, d);
                    var p,
                      c = !1 !== this._opts.validateSchema && !t;
                    c &&
                      !(p = d && d == a.normalizeId(e.$schema)) &&
                      this.validateSchema(e, !0);
                    var h = a.ids.call(this, e),
                      u = new n({
                        id: d,
                        schema: e,
                        localRefs: h,
                        cacheKey: s,
                        meta: i,
                      });
                    return (
                      '#' != d[0] && r && (this._refs[d] = u),
                      this._cache.put(s, u),
                      c && p && this.validateSchema(e, !0),
                      u
                    );
                  }),
                  (g.prototype._compile = function (e, t) {
                    if (e.compiling)
                      return (
                        ((e.validate = o).schema = e.schema),
                        (o.errors = null),
                        (o.root = t || o),
                        !0 === e.schema.$async && (o.$async = !0),
                        o
                      );
                    var i, a;
                    (e.compiling = !0),
                      e.meta &&
                        ((i = this._opts), (this._opts = this._metaOpts));
                    try {
                      a = r.call(this, e.schema, t, e.localRefs);
                    } catch (t) {
                      throw (delete e.validate, t);
                    } finally {
                      (e.compiling = !1), e.meta && (this._opts = i);
                    }
                    return (
                      (e.validate = a),
                      (e.refs = a.refs),
                      (e.refVal = a.refVal),
                      (e.root = a.root),
                      a
                    );
                    function o() {
                      var t = e.validate,
                        i = t.apply(this, arguments);
                      return (o.errors = t.errors), i;
                    }
                  }),
                  (g.prototype.compileAsync = e('./compile/async'));
                var h = e('./keyword');
                (g.prototype.addKeyword = h.add),
                  (g.prototype.getKeyword = h.get),
                  (g.prototype.removeKeyword = h.remove),
                  (g.prototype.validateKeyword = h.validate);
                var u = e('./compile/error_classes');
                (g.ValidationError = u.Validation),
                  (g.MissingRefError = u.MissingRef),
                  (g.$dataMetaSchema = p);
                var f = 'http://json-schema.org/draft-07/schema',
                  m = [
                    'removeAdditional',
                    'useDefaults',
                    'coerceTypes',
                    'strictDefaults',
                  ],
                  y = ['/properties'];
                function g(t) {
                  if (!(this instanceof g)) return new g(t);
                  (t = this._opts = c.copy(t) || {}),
                    (function (e) {
                      var t = e._opts.logger;
                      if (!1 === t) e.logger = { log: I, warn: I, error: I };
                      else {
                        if (
                          (void 0 === t && (t = console),
                          !('object' == typeof t && t.log && t.warn && t.error))
                        )
                          throw new Error(
                            'logger must implement log, warn and error methods',
                          );
                        e.logger = t;
                      }
                    })(this),
                    (this._schemas = {}),
                    (this._refs = {}),
                    (this._fragments = {}),
                    (this._formats = l(t.format)),
                    (this._cache = t.cache || new o()),
                    (this._loadingSchemas = {}),
                    (this._compilations = []),
                    (this.RULES = d()),
                    (this._getId = (function (e) {
                      switch (e.schemaId) {
                        case 'auto':
                          return S;
                        case 'id':
                          return w;
                        default:
                          return j;
                      }
                    })(t)),
                    (t.loopRequired = t.loopRequired || 1 / 0),
                    'property' == t.errorDataPath &&
                      (t._errorDataPathProperty = !0),
                    void 0 === t.serialize && (t.serialize = s),
                    (this._metaOpts = (function (e) {
                      for (var t = c.copy(e._opts), i = 0; i < m.length; i++)
                        delete t[m[i]];
                      return t;
                    })(this)),
                    t.formats &&
                      (function (e) {
                        for (var t in e._opts.formats) {
                          var i = e._opts.formats[t];
                          e.addFormat(t, i);
                        }
                      })(this),
                    t.keywords &&
                      (function (e) {
                        for (var t in e._opts.keywords) {
                          var i = e._opts.keywords[t];
                          e.addKeyword(t, i);
                        }
                      })(this),
                    (function (t) {
                      var i;
                      if (
                        (t._opts.$data &&
                          ((i = e('./refs/data.json')),
                          t.addMetaSchema(i, i.$id, !0)),
                        !1 !== t._opts.meta)
                      ) {
                        var r = e('./refs/json-schema-draft-07.json');
                        t._opts.$data && (r = p(r, y)),
                          t.addMetaSchema(r, f, !0),
                          (t._refs['http://json-schema.org/schema'] = f);
                      }
                    })(this),
                    'object' == typeof t.meta && this.addMetaSchema(t.meta),
                    t.nullable &&
                      this.addKeyword('nullable', {
                        metaSchema: { type: 'boolean' },
                      }),
                    (function (e) {
                      var t = e._opts.schemas;
                      if (t)
                        if (Array.isArray(t)) e.addSchema(t);
                        else for (var i in t) e.addSchema(t[i], i);
                    })(this);
                }
                function b(e, t) {
                  return (
                    (t = a.normalizeId(t)),
                    e._schemas[t] || e._refs[t] || e._fragments[t]
                  );
                }
                function v(e, t, i) {
                  for (var r in t) {
                    var a = t[r];
                    a.meta ||
                      (i && !i.test(r)) ||
                      (e._cache.del(a.cacheKey), delete t[r]);
                  }
                }
                function w(e) {
                  return (
                    e.$id && this.logger.warn('schema $id ignored', e.$id), e.id
                  );
                }
                function j(e) {
                  return (
                    e.id && this.logger.warn('schema id ignored', e.id), e.$id
                  );
                }
                function S(e) {
                  if (e.$id && e.id && e.$id != e.id)
                    throw new Error('schema $id is different from id');
                  return e.$id || e.id;
                }
                function P(e, t) {
                  if (e._schemas[t] || e._refs[t])
                    throw new Error(
                      'schema with key or id "' + t + '" already exists',
                    );
                }
                function I() {}
              },
              {
                './cache': 1,
                './compile': 5,
                './compile/async': 2,
                './compile/error_classes': 3,
                './compile/formats': 4,
                './compile/resolve': 6,
                './compile/rules': 7,
                './compile/schema_obj': 8,
                './compile/util': 10,
                './data': 11,
                './keyword': 39,
                './refs/data.json': 40,
                './refs/json-schema-draft-07.json': 41,
                'fast-json-stable-stringify': 43,
              },
            ],
          },
          {},
          [],
        )('ajv');
      }),
        (n.exports = r());
      const s = (0, o.g)(n.exports),
        l = {
          'applicationProperties_schema.json': {
            title: 'applicationProperties',
            type: 'object',
            description: 'Configuration of application and UI elements.',
            properties: {
              viewing: {
                type: 'object',
                $ref: '#/definitions/viewing_schema.json',
              },
            },
            additionalProperties: !1,
          },
          'baseMap_schema.json': {
            title: 'baseMap',
            type: 'object',
            description:
              'The basemap provides geographic context to the map and scene.',
            properties: {
              baseMapLayers: {
                type: 'array',
                description:
                  'An array of baseMapLayer objects defining the basemaps used in the web scene.',
                items: { $ref: '#/definitions/baseMapLayer_schema.json' },
                uniqueItems: !0,
              },
              elevationLayers: {
                type: 'array',
                description:
                  '<em>Deprecated, use `ground.layers` instead <a href="#elevationLayers"><sup>1</sup></a>.</em> An array of elevationLayer objects defining the basemaps used in the web scene.',
                items: { $ref: '#/definitions/elevationLayers_schema.json' },
                uniqueItems: !0,
              },
              id: {
                type: 'string',
                description: 'A unique identifying string for the basemap.',
              },
              title: {
                type: 'string',
                description:
                  'Required string title for the basemap that can be used in a table of contents.',
              },
            },
            required: ['baseMapLayers', 'title'],
            additionalProperties: !1,
          },
          'clippingArea_schema.json': {
            title: 'clippingArea',
            type: 'object',
            description: 'Defines area to be clipped for display.',
            properties: {
              clip: {
                type: 'boolean',
                description: 'enable / disable clipping',
              },
              geometry: {
                description: 'envelope of clip area',
                $ref: '#/definitions/extent_schema.json',
              },
            },
          },
          'ground_schema.json': {
            title: 'Ground',
            type: 'object',
            description:
              'Ground defines the main surface of the web scene, based on elevation layers.',
            properties: {
              layers: {
                type: 'array',
                description:
                  'An array of elevationLayer objects defining the elevation of the ground in the web scene.',
                items: { $ref: '#/definitions/elevationLayers_schema.json' },
                uniqueItems: !0,
              },
              navigationConstraint: {
                description:
                  'Object determining whether the camera is constrained to navigate only above, or also under the ground surface. If not specified, navigation is constrained to above ground.',
                $ref: '#/definitions/navigationConstraint_schema.json',
              },
              surfaceColor: {
                description:
                  'Defines the color of the ground surface, displayed underneath the basemap. If no color, the default grid is shown.',
                $ref: '#/definitions/color_schema.json',
              },
              transparency: {
                type: 'integer',
                description:
                  'The transparency of the ground surface. It is used for seeing through the ground, therefore this property also changes the transparency of the basemap. Draped operational layers are not affected by this property. The value has to lie between `100` (full transparency) and `0` (full opacity).',
                minimum: 0,
                maximum: 100,
              },
            },
            required: ['layers'],
            additionalProperties: !1,
          },
          'heightModelInfo_schema.json': {
            title: 'heightModelInfo',
            type: 'object',
            description:
              'An object that defines the characteristics of the vertical coordinate system used by the web scene.',
            properties: {
              heightModel: {
                type: 'string',
                description:
                  'The surface type or height model of the vertical coordinate system.',
                enum: ['ellipsoidal', 'gravity_related_height'],
                default: 'ellipsoidal',
              },
              heightUnit: {
                type: 'string',
                description:
                  'The unit of the vertical coordinate system.<a href="#heightUnit"><sup>1</sup></a>',
                enum: [
                  '150-kilometers',
                  '50-kilometers',
                  'benoit-1895-b-chain',
                  'clarke-foot',
                  'clarke-link',
                  'clarke-yard',
                  'foot',
                  'gold-coast-foot',
                  'indian-1937-yard',
                  'indian-yard',
                  'meter',
                  'sears-1922-truncated-chain',
                  'sears-chain',
                  'sears-foot',
                  'sears-yard',
                  'us-foot',
                ],
              },
              vertCRS: {
                type: 'string',
                description:
                  '(Optional) The datum realization of the vertical coordinate system.',
              },
            },
            required: ['heightModel', 'heightUnit'],
            additionalProperties: !1,
          },
          'initialState_schema.json': {
            title: 'initialState',
            type: 'object',
            description:
              'An object that provides information about the initial environment settings and viewpoint of the web scene.',
            properties: {
              environment: {
                type: 'object',
                $ref: '#/definitions/environment_schema.json',
              },
              viewpoint: {
                description:
                  'Describes a point of view for a 2D or 3D view. In a 3D view, it is determined using a camera position.',
                $ref: '#/definitions/viewpoint_schema.json',
              },
            },
            required: ['environment', 'viewpoint'],
            additionalProperties: !1,
          },
          'mapFloorInfo_schema.json': {
            title: 'mapFloorInfo',
            type: 'object',
            description:
              'Contains floor-awareness information for the web scene. Defines the layers and required fields for each layer that are used for floor filtering.',
            properties: {
              facilityLayer: {
                description:
                  'Defines the layer and field properties for the Facility layer used for floor filtering.',
                $ref: '#/definitions/facilityLayerInfo_schema.json',
              },
              levelLayer: {
                description:
                  'Defines the layer and field properties for the Level layer used for floor filtering.',
                $ref: '#/definitions/levelLayerInfo_schema.json',
              },
              siteLayer: {
                description:
                  'Defines the layer and field properties for the Site layer used for floor filtering. This property is optional.',
                $ref: '#/definitions/siteLayerInfo_schema.json',
              },
            },
            required: ['facilityLayer', 'levelLayer'],
            additionalProperties: !1,
          },
          'mapRangeInfo_schema.json': {
            title: 'Map Range Information',
            description: 'Map range information',
            properties: {
              activeRangeName: {
                type: 'string',
                description: 'Active range ID that slider/picker acts upon.',
              },
              currentRangeExtent: {
                type: 'array',
                description: 'Current range for the active range.',
                items: { type: 'number' },
                minItems: 2,
                maxItems: 2,
              },
              fullRangeExtent: {
                type: 'array',
                description:
                  'Full range extent for the active range to be presented in the UI.',
                items: { type: 'number' },
                minItems: 2,
                maxItems: 2,
              },
            },
            required: ['activeRangeName'],
            additionalProperties: !1,
          },
          'operationalLayers_schema.json': {
            title: 'operationalLayers',
            type: 'object',
            description:
              'Operational layers contain your data. Usually, a basemap sits beneath your operational layers to give them geographic context.',
            oneOf: [
              { $ref: '#/definitions/buildingSceneLayer_schema.json' },
              { $ref: '#/definitions/csvLayer_schema.json' },
              { $ref: '#/definitions/featureLayer_schema.json' },
              { $ref: '#/definitions/geojsonLayer_schema.json' },
              { $ref: '#/definitions/groupLayer_schema.json' },
              { $ref: '#/definitions/imageServiceLayer_schema.json' },
              { $ref: '#/definitions/integratedMeshLayer_schema.json' },
              { $ref: '#/definitions/kmlLayer_schema.json' },
              { $ref: '#/definitions/mapServiceLayer_schema.json' },
              { $ref: '#/definitions/ogcFeatureLayer_schema.json' },
              { $ref: '#/definitions/pointCloudLayer_schema.json' },
              { $ref: '#/definitions/rasterDataLayer_schema.json' },
              { $ref: '#/definitions/sceneLayer_schema.json' },
              { $ref: '#/definitions/tiledImageServiceLayer_schema.json' },
              { $ref: '#/definitions/tiledMapServiceLayer_schema.json' },
              { $ref: '#/definitions/vectorTileLayer_schema.json' },
              { $ref: '#/definitions/voxelLayer_schema.json' },
              { $ref: '#/definitions/webTiledLayer_schema.json' },
              { $ref: '#/definitions/wfsLayer_schema.json' },
              { $ref: '#/definitions/wmsLayer_schema.json' },
            ],
          },
          'presentation_schema.json': {
            title: 'presentation',
            type: 'object',
            description:
              'A presentation consists of multiple slides, where each slide is a specific view into the web scene.',
            properties: {
              slides: {
                type: 'array',
                description: 'Array of slide objects.',
                items: { $ref: '#/definitions/slide_schema.json' },
              },
            },
            additionalProperties: !1,
          },
          'spatialReference_schema.json': {
            title: 'spatialReference',
            type: 'object',
            description:
              'The spatialReference object is located at the top level of the JSON hierarchy. In addition to this, it is also available within the operationalLayer and basemap objects.\n\nMany predefined spatial references have already been defined and are available for use. A spatial reference can be defined using a well-known ID (WKID) or well-known text (WKT). The default tolerance and resolution values for the associated coordinate system are used.\n\nA spatial reference can optionally include a definition for a vertical coordinate system (VCS), which is used to interpret the z values of a geometry.',
            properties: {
              latestVcsWkid: {
                type: 'integer',
                description:
                  '(Optional) The current wkid value of the vertical coordinate system.',
              },
              latestWkid: {
                type: 'integer',
                description:
                  "(Optional) Identifies the current wkid value associated with the same spatial reference. For example a WKID of '102100' (Web Mercator) has a latestWKid of '3857'.",
              },
              vcsWkid: {
                type: 'integer',
                description:
                  '(Optional) The wkid value of the vertical coordinate system.',
              },
              wkid: {
                type: 'integer',
                description:
                  'The well-known ID (WKID) of the coordinate system. Specify either WKID or the well-known text (WKT) of the coordinate system.',
              },
              wkt: {
                type: 'string',
                description:
                  'The well-known text (WKT) of the coordinate system. Specify either WKT or WKID of the coordinate system.',
              },
            },
            oneOf: [{ required: ['wkt'] }, { required: ['wkid'] }],
            additionalProperties: !1,
          },
          'table_schema.json': {
            title: 'table',
            type: 'object',
            description:
              'Root element in the web scene specifying an array of table objects.',
            properties: {
              capabilities: {
                type: 'string',
                description:
                  'A comma-separated string listing which editing operations are allowed on an editable feature service. Available operations include: `Create`, `Delete`, `Query`, `Update`, and `Editing`.',
              },
              customParameters: {
                $ref: '#/definitions/customParameters_schema.json',
              },
              definitionEditor: {
                description:
                  "Object indicating the definitionEditor used as a layer's interactive filter.",
                $ref: '#/definitions/definitionEditor_schema.json',
              },
              disablePopup: {
                type: 'boolean',
                description:
                  'Indicates whether to allow a client to ignore popups defined by the service item.',
              },
              id: {
                type: 'string',
                description: 'Unique string identifier for the table.',
              },
              itemId: {
                type: 'string',
                description:
                  "Unique string value indicating an item registered in ArcGIS Online or your organization's portal.",
              },
              layerDefinition: {
                description:
                  'A layerDefinition object defining a definition expression for the table.',
                $ref: '#/definitions/layerDefinition_schema.json',
              },
              path: {
                type: 'string',
                description:
                  "For offline data, a path to a geodatabase file. A URI format is used starting with `file:` followed by a file system path with a `.geodatabase` extension. A query parameter `itemId` must also be present specifying the ID of a table in the geodatabase's `GDB_ServiceItems` table. A relative path must be from the file which defines the table. For example `file:../p20/northamerica.geodatabase?itemId=5`.",
                pattern: '^file:.+\\.geodatabase\\?itemId=\\d+$',
              },
              popupInfo: {
                description:
                  'An object defining the content of popup windows when you query a record and the sort option for child related records.',
                $ref: '#/definitions/popupInfo_schema.json',
              },
              title: {
                type: 'string',
                description: 'String value for the title of the table.',
              },
              url: {
                type: 'string',
                description:
                  'String value indicating the URL reference of the hosted table.',
              },
            },
            required: ['title', 'url'],
            additionalProperties: !1,
          },
          'transportationNetwork_schema.json': {
            title: 'Transportation Network',
            type: 'object',
            description:
              'The transportation network used for routing in the scene.',
            properties: {
              name: {
                type: 'string',
                description:
                  'The name of the transportation network. The name must be unique within a scene.',
              },
              path: {
                type: 'string',
                description:
                  'The path to the geodatabase which contains the network.',
                pattern: '^file:.+\\.geodatabase?$',
              },
              title: {
                type: 'string',
                description:
                  'A title or alias of the network layer. This can be used in the client user interface.',
              },
            },
            required: ['name', 'path', 'title'],
            additionalProperties: !1,
          },
          'version_schema.json': {
            title: 'version',
            type: 'string',
            description:
              'Root element in the web scene specifying a string value indicating the web scene version.',
            enum: [
              '1.8',
              '1.9',
              '1.10',
              '1.11',
              '1.12',
              '1.13',
              '1.14',
              '1.15',
              '1.16',
              '1.17',
              '1.18',
              '1.19',
              '1.20',
              '1.21',
              '1.22',
              '1.23',
              '1.24',
              '1.25',
              '1.26',
              '1.27',
            ],
          },
          'widgets_schema.json': {
            title: 'widgets',
            type: 'object',
            description:
              'The widgets object contains widgets that should be exposed to the user.',
            properties: {
              floorFilter: {
                description:
                  'Configurable properties used by the floor filter widget.',
                $ref: '#/definitions/floorFilter_schema.json',
              },
              range: {
                description: 'Active range.',
                $ref: '#/definitions/range_schema.json',
              },
            },
            additionalProperties: !1,
          },
          'buildingSceneLayer_filter_schema.json': {
            title: 'Building Scene Layer Filter',
            type: 'object',
            description:
              'Filter allows client applications to reduce the drawn elements of a building to specific types and values. Filters on the webscene override the list of existing filters on the service.',
            properties: {
              description: {
                type: 'string',
                description: 'Description of the filter.',
              },
              filterAuthoringInfo: {
                description:
                  'Metadata about the athoring process for this filter.',
                $ref: '#/definitions/buildingSceneLayer_filterAuthoringInfoCheckbox_schema.json',
              },
              filterBlocks: {
                type: 'array',
                description:
                  'Array of filter blocks defining the filter. A filter contains at least one filter block.',
                items: {
                  $ref: '#/definitions/buildingSceneLayer_filterBlock_schema.json',
                },
                minItems: 1,
              },
              id: {
                type: 'string',
                description:
                  'unique filter id (uuid). Either a new id to extend the list of filters, or an existing id to override properties of an existing filter.',
              },
              name: { type: 'string', description: 'Name of the filter.' },
            },
            required: ['filterBlocks', 'id', 'name'],
            additionalProperties: !1,
          },
          'layerDefinition_schema.json': {
            title: 'layerDefinition',
            type: 'object',
            description:
              'An object that defines the attribute schema and drawing information for a layer drawn using client-side graphics.',
            properties: {
              allowGeometryUpdates: {
                type: 'boolean',
                description:
                  'Boolean value indicating whether the geometry of the features in the layer can be edited.',
              },
              capabilities: {
                type: 'string',
                description:
                  'A comma separated list of supported capabilities, e.g. `Query,Editing`.',
              },
              copyrightText: {
                type: 'string',
                description:
                  'String value for the copyright text information for the layer.',
              },
              currentVersion: {
                type: 'number',
                description:
                  'Numeric value indicating the server version of the layer.',
              },
              defaultVisibility: {
                type: 'boolean',
                description:
                  "Boolean value indicating whether the layer's visibility is turned on.",
              },
              definitionExpression: {
                type: ['string', 'null'],
                description:
                  'SQL-based definition expression string that narrows the data to be displayed in the layer.',
              },
              description: {
                type: 'string',
                description:
                  'String value of the layer as defined in the map service.',
              },
              displayField: {
                type: 'string',
                description: 'A string value that summarizes the feature.',
              },
              drawingInfo: {
                description: 'Contains the drawing and labeling information.',
                $ref: '#/definitions/drawingInfo_schema.json',
              },
              elevationInfo: {
                $ref: '#/definitions/elevationInfo_schema.json',
              },
              excludeObjectIds: {
                type: 'array',
                description:
                  'Excludes features with the given object ids from rendering.',
                items: { type: 'number' },
              },
              extent: {
                description: 'An object defining the rectangular area.',
                oneOf: [
                  { $ref: '#/definitions/extent_schema.json' },
                  { type: 'null' },
                ],
              },
              featureReduction: {
                $ref: '#/definitions/featureReduction_schema.json',
              },
              fields: {
                type: 'array',
                description:
                  'An array of field objects containing information about the attribute fields for the feature collection or layer.',
                items: { $ref: '#/definitions/field_schema.json' },
                uniqueItems: !0,
              },
              filters: {
                type: 'array',
                description: 'Filters for PointCloud layers',
                items: { $ref: '#/definitions/pointCloudFilter_schema.json' },
              },
              floorInfo: {
                description:
                  'Contains floor-awareness information for the layer.',
                $ref: '#/definitions/layerFloorInfo_schema.json',
              },
              geometryType: {
                type: 'string',
                description:
                  'A string defining the type of geometry. Possible geometry types are: `esriGeometryPoint`, `esriGeometryMultipoint`, `esriGeometryPolyline`, `esriGeometryPolygon`, and `esriGeometryEnvelope`.',
              },
              globalIdField: {
                type: 'string',
                description:
                  'The unique identifier for a feature or table row within a geodatabase.',
              },
              hasAttachments: {
                type: 'boolean',
                description:
                  'Indicates whether attachments should be loaded for the layer.',
              },
              hasM: {
                type: 'boolean',
                description:
                  'Boolean value indicating whether layer has M values.',
              },
              hasStaticData: {
                type: 'boolean',
                description:
                  'Boolean value indicating whether data changes. True if it does not.',
              },
              hasZ: {
                type: 'boolean',
                description:
                  'Boolean value indicating whether layer has Z values.',
              },
              htmlPopupType: {
                type: 'string',
                description: 'String value indicating the HTML popup type.',
                enum: [
                  'esriServerHTMLPopupTypeAsHTMLText',
                  'esriServerHTMLPopupTypeAsURL',
                  'esriServerHTMLPopupTypeNone',
                ],
              },
              id: {
                type: 'integer',
                description: 'The identifier assigned to the layer.',
              },
              isDataVersioned: {
                type: 'boolean',
                description:
                  'Boolean value indicating whether the data is versioned.',
              },
              maxRecordCount: {
                type: 'integer',
                description:
                  'Numeric value indicating tbe maximum number of records that will be returned at once for a query.',
              },
              maxScale: {
                type: 'number',
                description:
                  'Represents the maximum scale (most zoomed in) at which the layer is visible in the view. If the web scene is zoomed in beyond this scale, the layer will not be visible. A value of 0 means the layer does not have a maximum scale. If set, the maxScale value should always be smaller than the minScale value, and greater than or equal to the service specification.',
              },
              minScale: {
                type: 'number',
                description:
                  'Represents the minimum scale (most zoomed out) at which the layer is visible in the view. If the web scene is zoomed out beyond this scale, the layer will not be visible. A value of 0 means the layer does not have a minimum scale. If set, the minScale value should always be larger than the maxScale value, and lesser than or equal to the service specification.',
              },
              name: {
                type: 'string',
                description:
                  'Contains a unique name for the layer that can be displayed in a legend.',
              },
              objectIdField: {
                type: 'string',
                description:
                  'Indicates the name of the object ID field in the dataset.',
              },
              overrideSymbols: {
                type: 'boolean',
                description:
                  'Dictates whether a client can support having an end user modify symbols on individual features.',
              },
              rangeInfos: {
                type: 'array',
                description: 'Indicates range information',
                items: { $ref: '#/definitions/rangeInfo_schema.json' },
                minItems: 1,
              },
              source: {
                description:
                  "An object indicating the layerDefinition's layer source.",
                $ref: '#/definitions/source_schema.json',
              },
              spatialReference: {
                description:
                  "An object containing the WKID or WKT identifying the spatial reference of the layer's geometry.",
                $ref: '#/definitions/spatialReference_schema.json',
              },
              supportedQueryFormats: {
                type: 'string',
                description:
                  'String value indicating the output formats that are supported in a query.',
              },
              supportsAdvancedQueries: {
                type: 'boolean',
                description:
                  'Boolean value indicating whether the layer supports orderByFields in a query operation.',
              },
              supportsAttachmentsByUploadId: {
                type: 'boolean',
                description:
                  'Boolean value indicating whether the layer supports uploading attachments with the Uploads operation. This can then be used in the Add Attachment and Update Attachment operations.',
              },
              supportsCalculate: {
                type: 'boolean',
                description:
                  'Boolean value indicating whether the layer supports the Calculate REST operation when updating features.',
              },
              supportsRollbackOnFailureParameter: {
                type: 'boolean',
                description:
                  'Boolean value indicating whether the layer supports rolling back edits made on a feature layer if some of the edits fail.',
              },
              supportsStatistics: {
                type: 'boolean',
                description:
                  'Boolean value indicating whether feature layer query operations support statistical functions.',
              },
              supportsValidateSql: {
                type: 'boolean',
                description:
                  'Boolean value indicating whether the validateSQL operation is supported across a feature service layer.',
              },
              type: {
                type: 'string',
                description:
                  'Indicates whether the layerDefinition applies to a Feature Layer or a Table.',
                enum: ['Feature Layer', 'Table'],
                default: 'Feature Layer',
              },
              typeIdField: {
                type: 'string',
                description:
                  'Contains the name of the field holding the type ID for the features.',
              },
              types: {
                type: 'array',
                description: 'Contains information about an attribute field.',
                items: { $ref: '#/definitions/type_schema.json' },
                uniqueItems: !0,
              },
              visibilityField: {
                type: 'string',
                description:
                  "String value indicating the attribute field that is used to control the visibility of a feature. If applicable, when rendering a feature the client should use this field to control visibility. The field's values are 0 = do not display, 1 = display.",
              },
            },
            additionalProperties: !1,
          },
          'buildingSceneLayer_sublayer_schema.json': {
            title: 'Building Scene Sublayer',
            type: 'object',
            description:
              'The BuildingSceneLayer sublayer is a part of a building scene layer.',
            properties: {
              disablePopup: {
                type: 'boolean',
                description:
                  'disablePopups allows a client to ignore popups defined by the service item.',
              },
              id: {
                type: 'integer',
                description:
                  'Identifies the sublayer inside the building scene layer.',
              },
              layerDefinition: {
                type: 'object',
                description:
                  'Additional properties that can define drawing information and a definition expression for the sublayer.',
                allOf: [
                  { $ref: '#/definitions/layerDefinition_schema.json' },
                  {
                    properties: {
                      definitionExpression: {},
                      drawingInfo: {
                        allOf: [
                          { $ref: '#/definitions/drawingInfo_schema.json' },
                          {
                            properties: { renderer: {} },
                            additionalProperties: !1,
                          },
                        ],
                      },
                    },
                    additionalProperties: !1,
                  },
                ],
              },
              listMode: {
                type: 'string',
                description: 'To show or hide the sublayer in the layer list.',
                enum: ['hide', 'show'],
                default: 'show',
              },
              opacity: {
                type: 'number',
                description:
                  'The degree of transparency applied to the sublayer on the client side, where 0 is full transparency and 1 is no transparency. This is multiplied with the opacity of the containing layers.',
                minimum: 0,
                maximum: 1,
                default: 1,
              },
              popupInfo: {
                description:
                  'A popupInfo object defining the content of pop-up windows when you click or query a feature.',
                $ref: '#/definitions/popupInfo_schema.json',
              },
              title: {
                type: 'string',
                description:
                  'A user-friendly string title for the sublayer that can be used in a table of contents.',
              },
              visibility: {
                type: 'boolean',
                description:
                  'Boolean property determining whether the sublayer is initially visible in the web scene',
              },
            },
            required: ['id'],
            additionalProperties: !1,
          },
          'drawingInfo_schema.json': {
            title: 'drawingInfo',
            type: 'object',
            description:
              'The drawingInfo object contains drawing information for a feature layer.',
            properties: {
              labelingInfo: {
                type: 'array',
                description: 'An array of labelingInfo objects.',
                items: { $ref: '#/definitions/labelingInfo_schema.json' },
              },
              renderer: { $ref: '#/definitions/renderer_schema.json' },
              showLabels: {
                type: 'boolean',
                description:
                  'Labels will display if this property is set to `true` and the layer also has a [labelingInfo](labelingInfo.md) property associated with it.',
                default: !1,
              },
              transparency: {
                type: 'number',
                description:
                  'Number value ranging between 0 (no transparency) to 100 (completely transparent).',
                minimum: 0,
                maximum: 100,
              },
            },
            additionalProperties: !1,
          },
          'popupInfo_schema.json': {
            title: 'popupInfo',
            type: 'object',
            description:
              'Defines the look and feel of popup windows when a user clicks or queries a feature.',
            properties: {
              description: {
                type: ['string'],
                description:
                  'A string that appears in the body of the popup window as a description. A basic subset of HTML may also be used to enrich the text. The supported HTML for ArcGIS Online can be seen in the [Supported HTML](https://doc.arcgis.com/en/arcgis-online/reference/supported-html.htm) page.',
              },
              expressionInfos: {
                type: 'array',
                description: 'List of Arcade expressions added to the pop-up.',
                items: {
                  $ref: '#/definitions/popupExpressionInfo_schema.json',
                },
              },
              fieldInfos: {
                type: 'array',
                description:
                  'Array of fieldInfo information properties. This information is provided by the service layer definition.',
                items: { $ref: '#/definitions/fieldInfo_schema.json' },
              },
              layerOptions: {
                description:
                  'Additional options that can be defined for the popup layer.',
                $ref: '#/definitions/popupLayerOptions_schema.json',
              },
              mediaInfos: {
                type: 'array',
                description:
                  'Array of various mediaInfo to display. Can be of type `image`, `piechart`, `barchart`, `columnchart`, or `linechart`. The order given is the order in which it displays.',
                items: { $ref: '#/definitions/mediaInfo_schema.json' },
              },
              popupElements: {
                type: 'array',
                description:
                  'An array of popupElement objects that represent an ordered list of popup elements.',
                items: { $ref: '#/definitions/popupElement_schema.json' },
              },
              relatedRecordsInfo: {
                description:
                  'Indicates whether to enable related records if they exist on a layer.',
                $ref: '#/definitions/relatedRecordsInfo_schema.json',
              },
              showAttachments: {
                type: 'boolean',
                description:
                  'Indicates whether attachments will be loaded for feature layers that have attachments.',
              },
              showLastEditInfo: {
                type: 'boolean',
                description:
                  'Indicates whether popup will display information about when and who last edited the feature. Applicable only to layers that have been configured to keep track of such information.',
                default: !0,
              },
              title: {
                type: 'string',
                description:
                  'A string that appears at the top of the popup window as a title.',
              },
            },
            additionalProperties: !1,
          },
          'viewing_schema.json': {
            title: 'viewing',
            type: 'object',
            description:
              'View-specific properties of application and UI elements.',
            properties: {
              search: { $ref: '#/definitions/search_schema.json' },
            },
            additionalProperties: !1,
          },
          'baseMapLayer_schema.json': {
            title: 'baseMapLayer',
            type: 'object',
            description:
              'A basemap layer is a layer that provides geographic context to the scene. The following is a list of possible basemap layer types.',
            oneOf: [
              { $ref: '#/definitions/imageServiceLayer_schema.json' },
              { $ref: '#/definitions/mapServiceLayer_schema.json' },
              { $ref: '#/definitions/openStreetMapLayer_schema.json' },
              { $ref: '#/definitions/rasterDataLayer_schema.json' },
              { $ref: '#/definitions/tiledImageServiceLayer_schema.json' },
              { $ref: '#/definitions/tiledMapServiceLayer_schema.json' },
              { $ref: '#/definitions/vectorTileLayer_schema.json' },
              { $ref: '#/definitions/webTiledLayer_schema.json' },
              { $ref: '#/definitions/wmsLayer_schema.json' },
            ],
          },
          'elevationLayers_schema.json': {
            title: 'elevationLayers',
            type: 'object',
            description: 'Elevation layers provide elevation for the ground.',
            oneOf: [
              { $ref: '#/definitions/rasterDataElevationLayer_schema.json' },
              { $ref: '#/definitions/tiledElevationLayer_schema.json' },
            ],
          },
          'extent_schema.json': {
            title: 'extent',
            type: 'object',
            description:
              'This object defines the bounding geometry given the lower-left and upper-right corners of the bounding box. A [spatial reference](spatialReference.md) is also required.',
            properties: {
              spatialReference: {
                description:
                  'An object used to specify the spatial reference of the given geometry.',
                $ref: '#/definitions/spatialReference_schema.json',
              },
              xmax: {
                type: 'number',
                description:
                  'A numeric value indicating the top-right X-coordinate of an extent envelope.',
              },
              xmin: {
                description:
                  'A numeric value indicating the bottom-left X-coordinate of an extent envelope.',
                oneOf: [
                  { type: 'number' },
                  { type: 'null' },
                  { type: 'string', enum: ['NaN'] },
                ],
              },
              ymax: {
                type: 'number',
                description:
                  'A numeric value indicating the top-right Y-coordinate of an extent envelope.',
              },
              ymin: {
                type: 'number',
                description:
                  'A numeric value indicating the bottom-left Y-coordinate of an extent envelope.',
              },
            },
            additionalProperties: !1,
          },
          'navigationConstraint_schema.json': {
            title: 'Navigation Constraint',
            type: 'object',
            description:
              'Object determining whether the camera is constrained to navigate only above, or also under the ground surface.',
            properties: {
              type: { type: 'string', enum: ['none', 'stayAbove'] },
            },
            required: ['type'],
            additionalProperties: !1,
          },
          'color_schema.json': {
            title: 'color',
            type: 'array',
            description:
              'Color is represented as a three or four-element array. The four elements represent values for red, green, blue, and alpha in that order. Values range from 0 through 255. If color is undefined for a symbol, the color value is null.',
            items: { type: 'integer', minimum: 0, maximum: 255 },
            minItems: 3,
            maxItems: 4,
            additionalProperties: !1,
          },
          'environment_schema.json': {
            title: 'environment',
            type: 'object',
            description:
              'Represents settings that affect the environment in which the web scene is displayed. It is entirely stored as part of the initial state of the web scene, and partially in the slides in the presentation.',
            properties: {
              atmosphereEnabled: {
                type: 'boolean',
                description:
                  'Whether the atmosphere should be visualized. This includes sky and haze effects.',
                default: !0,
              },
              background: {
                description:
                  'The background is what is displayed behind any scene objects, stars and atmosphere.',
                $ref: '#/definitions/environment_background_color_schema.json',
              },
              lighting: { $ref: '#/definitions/lighting_schema.json' },
              starsEnabled: {
                type: 'boolean',
                description: 'Whether stars should be displayed in the sky.',
                default: !0,
              },
            },
            additionalProperties: !1,
          },
          'viewpoint_schema.json': {
            title: 'viewpoint',
            type: 'object',
            description:
              'The location or camera position from which to view the scene.',
            properties: {
              camera: { $ref: '#/definitions/camera_schema.json' },
              rotation: {
                type: 'number',
                description:
                  'The rotation of due north in relation to the top of the view in degrees.',
                minimum: 0,
                maximum: 360,
              },
              scale: {
                type: 'number',
                description: 'The scale of the viewpoint.',
              },
              targetGeometry: {
                description: 'The target geometry framed by the viewpoint.',
                oneOf: [
                  { description: '', $ref: '#/definitions/extent_schema.json' },
                  {
                    description: '',
                    $ref: '#/definitions/geometry_schema.json',
                  },
                ],
              },
            },
            required: ['camera'],
            additionalProperties: !1,
          },
          'facilityLayerInfo_schema.json': {
            title: 'facilityLayer',
            type: 'object',
            description:
              'Defines the layer and field properties for the Facility layer used for floor filtering.',
            properties: {
              facilityIdField: {
                type: 'string',
                description:
                  "The name of the attribute field that contains a facility feature's unique identifier.",
              },
              layerId: {
                type: 'string',
                description:
                  'A layer ID that refers to an operational layer in the map. The layer provides access to Facility features to use for floor filtering.',
              },
              nameField: {
                type: 'string',
                description:
                  "The name of the attribute field that contains a facility feature's name.",
              },
              siteIdField: {
                type: 'string',
                description:
                  "The name of the attribute field that contains a facility feature's site identifier (a foreign key to the Site layer).",
              },
            },
            required: ['facilityIdField', 'layerId', 'nameField'],
            additionalProperties: !1,
          },
          'levelLayerInfo_schema.json': {
            title: 'levelLayer',
            type: 'object',
            description:
              'Defines the layer and field properties for the Level layer used for floor filtering.',
            properties: {
              facilityIdField: {
                type: 'string',
                description:
                  "The name of the attribute field that contains a level feature's facility identifier (a foreign key to the Facility layer).",
              },
              layerId: {
                type: 'string',
                description:
                  'A layer ID that refers to an operational layer in the map. The layer provides access to Level features to use for floor filtering.',
              },
              levelIdField: {
                type: 'string',
                description:
                  "The name of the attribute field that contains a level feature's unique identifier.",
              },
              levelNumberField: {
                type: 'string',
                description:
                  "The name of the attribute field that contains a level feature's level number specific to its facility.",
              },
              longNameField: {
                type: 'string',
                description:
                  "The name of the attribute field that contains a level feature's long name.",
              },
              shortNameField: {
                type: 'string',
                description:
                  "The name of the attribute field that contains a level feature's short name.",
              },
              verticalOrderField: {
                type: 'string',
                description:
                  "The name of the attribute field that contains a level feature's vertical order. The vertical order defines the order of display in the floor filter widget, and it also references the floor levels of an Indoor Positioning System.",
              },
            },
            required: [
              'facilityIdField',
              'layerId',
              'levelIdField',
              'levelNumberField',
              'longNameField',
              'shortNameField',
              'verticalOrderField',
            ],
            additionalProperties: !1,
          },
          'siteLayerInfo_schema.json': {
            title: 'siteLayer',
            type: 'object',
            description:
              'Defines the layer and field properties for the Site layer used for floor filtering.',
            properties: {
              layerId: {
                type: 'string',
                description:
                  'A layer ID that refers to an operational layer in the map. The layer provides access to Site features to use for floor filtering.',
              },
              nameField: {
                type: 'string',
                description:
                  "The name of the attribute field that contains a site feature's name.",
              },
              siteIdField: {
                type: 'string',
                description:
                  "The name of the attribute field that contains a site feature's unique identifier.",
              },
            },
            required: ['layerId', 'nameField', 'siteIdField'],
            additionalProperties: !1,
          },
          'buildingSceneLayer_schema.json': {
            title: 'Building Scene Layer (BuildingSceneLayer)',
            type: 'object',
            description:
              'The BuildingSceneLayer is a layer type designed for on-demand streaming and displaying building data.',
            properties: {
              activeFilterId: {
                type: 'string',
                description: 'specifies the id of the currently active filter',
              },
              filters: {
                type: 'array',
                description:
                  'A list of filters available for this layer. Overrides filters defined on the service.',
                items: {
                  $ref: '#/definitions/buildingSceneLayer_filter_schema.json',
                },
                uniqueItems: !0,
              },
              id: {
                type: 'string',
                description: 'A unique identifying string for the layer.',
              },
              itemId: {
                type: 'string',
                description:
                  "Optional string containing the item ID of the service if it's registered on ArcGIS Online or your organization's portal.",
              },
              layerDefinition: {
                type: 'object',
                description:
                  'Additional properties that can define an elevation offset for the layer.',
                allOf: [
                  { $ref: '#/definitions/layerDefinition_schema.json' },
                  {
                    properties: {
                      elevationInfo: {},
                      maxScale: {},
                      minScale: {},
                    },
                    additionalProperties: !1,
                  },
                ],
              },
              layerType: {
                type: 'string',
                description: 'String indicating the layer type.',
                enum: ['BuildingSceneLayer'],
              },
              listMode: {
                type: 'string',
                description:
                  'To show or hide the sublayer in the layer list. If the layer has sublayers, selecting `hide-children` will hide them in the layer list.',
                enum: ['hide', 'hide-children', 'show'],
                default: 'show',
              },
              opacity: {
                type: 'number',
                description:
                  'The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.',
                minimum: 0,
                maximum: 1,
                default: 1,
              },
              sublayers: {
                type: 'array',
                description:
                  'An array of objects specifying overrides for building scene layer sublayers',
                items: {
                  $ref: '#/definitions/buildingSceneLayer_sublayer_schema.json',
                },
                uniqueItems: !0,
              },
              title: {
                type: 'string',
                description:
                  'A user-friendly string title for the layer that can be used in a table of contents.',
              },
              url: { type: 'string', description: 'The URL to the service.' },
              visibility: {
                type: 'boolean',
                description:
                  'Boolean property determining whether the layer is initially visible in the web scene',
                default: !0,
              },
            },
            required: ['id', 'layerType', 'title', 'url'],
            additionalProperties: !1,
          },
          'csvLayer_schema.json': {
            title: 'CSV Layer (CSV)',
            type: 'object',
            description:
              'The CSV layer type references a CSV or TXT file from a publicly-accessible web server. It then dynamically loads into the scene at run time. The CSV layer will maintain a reference to the CSV resource.',
            properties: {
              columnDelimiter: {
                type: 'string',
                description:
                  'A string defining the character used to separate columns in a CSV file.',
                enum: ['\t', ' ', ',', ';', '|'],
              },
              customParameters: {
                $ref: '#/definitions/customParameters_schema.json',
              },
              disablePopup: {
                type: 'boolean',
                description:
                  'Indicates whether to allow a client to ignore popups defined by the service item.',
              },
              id: {
                type: 'string',
                description: 'A unique identifying string for the layer.',
              },
              layerDefinition: {
                description:
                  'Additional properties that define drawing information and other configurations for the layer.',
                allOf: [
                  { $ref: '#/definitions/layerDefinition_schema.json' },
                  {
                    properties: {
                      definitionExpression: {},
                      drawingInfo: {
                        allOf: [
                          { $ref: '#/definitions/drawingInfo_schema.json' },
                          {
                            properties: {
                              labelingInfo: {},
                              renderer: {},
                              transparency: {},
                            },
                            additionalProperties: !1,
                          },
                        ],
                      },
                      elevationInfo: {},
                      featureReduction: {},
                      fields: {},
                      floorInfo: {},
                      maxScale: {},
                      minScale: {},
                    },
                    additionalProperties: !1,
                  },
                ],
              },
              layerType: {
                type: 'string',
                description: 'String indicating the layer type.',
                enum: ['CSV'],
              },
              listMode: {
                type: 'string',
                description: 'To show or hide the layer in the layer list',
                enum: ['hide', 'show'],
                default: 'show',
              },
              locationInfo: {
                description:
                  'A locationInfo object defining how location information will be retrieved from a CSV file.',
                $ref: '#/definitions/locationInfo_schema.json',
              },
              opacity: {
                type: 'number',
                description:
                  'The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.',
                minimum: 0,
                maximum: 1,
                default: 1,
              },
              popupInfo: {
                description:
                  'A popupInfo object defining the content of popup windows when you click or query a feature.',
                $ref: '#/definitions/popupInfo_schema.json',
              },
              refreshInterval: {
                type: 'number',
                description:
                  'Refresh interval of the layer in minutes. Non-zero value indicates automatic layer refresh at the specified interval. Value of 0 indicates auto refresh is not enabled.',
              },
              screenSizePerspective: {
                type: 'boolean',
                description:
                  'Apply [perspective scaling](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#screenSizePerspectiveEnabled) to screen-size symbols.',
                default: !0,
              },
              showLabels: {
                type: 'boolean',
                description:
                  'Labels will display if this property is set to `true` and the layer also has a [labelingInfo](labelingInfo.md) property associated with it.',
                default: !1,
              },
              showLegend: {
                type: 'boolean',
                description:
                  'Boolean value indicating whether to display the layer in the legend. Default value is `true`.',
                default: !0,
              },
              title: {
                type: 'string',
                description:
                  'A user-friendly string title for the layer that can be used in a table of contents.',
              },
              url: { type: 'string', description: 'The URL to the layer.' },
              visibility: {
                type: 'boolean',
                description:
                  'Boolean property determining whether the layer is initially visible in the web scene.',
                default: !0,
              },
            },
            required: ['id', 'layerType', 'title', 'url'],
            additionalProperties: !1,
          },
          'featureLayer_schema.json': {
            title: 'Feature Layer (ArcGISFeatureLayer)',
            type: 'object',
            description:
              "Feature layers can be created by referencing a layer from either a map service or a feature service. Use a map service if you just want to retrieve geometries and attributes from the server and symbolize them yourself. Use a feature service if you want to take advantage of symbols from the service's source map document. Also, use a feature service if you plan on doing editing with the feature layer. Feature layers honor any feature templates configured in the source map document. Feature collection objects are used to create a feature layer based on the supplied definition.",
            properties: {
              customParameters: {
                $ref: '#/definitions/customParameters_schema.json',
              },
              disablePopup: {
                type: 'boolean',
                description:
                  'Indicates whether to allow a client to ignore popups defined by the service item.',
              },
              id: {
                type: 'string',
                description: 'A unique identifying string for the layer.',
              },
              itemId: {
                type: 'string',
                description:
                  "Optional string containing the item ID of the service if it's registered on ArcGIS Online or your organization's portal.",
              },
              layerDefinition: {
                description:
                  'Additional properties that define drawing information and other configurations for the layer.',
                allOf: [
                  { $ref: '#/definitions/layerDefinition_schema.json' },
                  {
                    properties: {
                      capabilities: {},
                      definitionExpression: {},
                      drawingInfo: {
                        allOf: [
                          { $ref: '#/definitions/drawingInfo_schema.json' },
                          {
                            properties: {
                              labelingInfo: {},
                              renderer: {},
                              transparency: {},
                            },
                            additionalProperties: !1,
                          },
                        ],
                      },
                      elevationInfo: {},
                      featureReduction: {},
                      floorInfo: {},
                      maxScale: {},
                      minScale: {},
                    },
                    additionalProperties: !1,
                  },
                ],
              },
              layerType: {
                type: 'string',
                description: 'String indicating the layer type.',
                enum: ['ArcGISFeatureLayer'],
              },
              listMode: {
                type: 'string',
                description: 'To show or hide layers in the layer list',
                enum: ['hide', 'show'],
                default: 'show',
              },
              opacity: {
                type: 'number',
                description:
                  'The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.',
                minimum: 0,
                maximum: 1,
                default: 1,
              },
              path: {
                type: 'string',
                description:
                  "For offline data, a path to a geodatabase file. A URI format is used starting with `file:` followed by a file system path with a `.geodatabase` extension. A query parameter `itemId` must also be present specifying the ID of a table in the geodatabase's `GDB_ServiceItems` table. A relative path must be from the file which defines the layer. For example `file:../p20/northamerica.geodatabase?itemId=1`.",
                pattern: '^file:.+\\.geodatabase\\?itemId=\\d+$',
              },
              popupInfo: {
                description:
                  'A popupInfo object defining the content of popup windows when you click or query a feature.',
                $ref: '#/definitions/popupInfo_schema.json',
              },
              refreshInterval: {
                type: 'number',
                description:
                  'Refresh interval of the layer in minutes. Non-zero value indicates automatic layer refresh at the specified interval. Value of 0 indicates auto refresh is not enabled.',
              },
              screenSizePerspective: {
                type: 'boolean',
                description:
                  'Apply [perspective scaling](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#screenSizePerspectiveEnabled) to screen-size symbols.',
                default: !0,
              },
              showLabels: {
                type: 'boolean',
                description:
                  'Labels will display if this property is set to `true` and the layer also has a [labelingInfo](labelingInfo.md) property associated with it. This property can get stored in the web scene config and in the item/data.',
                default: !1,
              },
              showLegend: {
                type: 'boolean',
                description:
                  'Boolean value indicating whether to display the layer in the legend. Default value is `true`.',
                default: !0,
              },
              title: {
                type: 'string',
                description:
                  'A user-friendly string title for the layer that can be used in a table of contents.',
              },
              url: {
                type: 'string',
                description:
                  'The URL to the layer. If the layer is not from a web service but rather a feature collection, then the url property is omitted.',
              },
              visibility: {
                type: 'boolean',
                description:
                  'Boolean property determining whether the layer is initially visible in the web scene.',
                default: !0,
              },
            },
            required: ['id', 'layerType', 'title'],
            additionalProperties: !1,
          },
          'geojsonLayer_schema.json': {
            title: 'GeoJSON Layer (GeoJSON)',
            type: 'object',
            description:
              'The GeoJSON layer type references a GeoJSON file from a publicly-accessible web server. It then dynamically loads into the scene at run time. The GeoJSON layer will maintain a reference to the GeoJSON resource.',
            properties: {
              customParameters: {
                $ref: '#/definitions/customParameters_schema.json',
              },
              disablePopup: {
                type: 'boolean',
                description:
                  'Indicates whether to allow a client to ignore popups defined by the service item.',
                default: !1,
              },
              id: {
                type: 'string',
                description: 'A unique identifying string for the layer.',
              },
              layerDefinition: {
                description:
                  'Additional properties that define drawing information and other configurations for the layer.',
                allOf: [
                  { $ref: '#/definitions/layerDefinition_schema.json' },
                  {
                    properties: {
                      definitionExpression: {},
                      drawingInfo: {
                        allOf: [
                          { $ref: '#/definitions/drawingInfo_schema.json' },
                          {
                            properties: { labelingInfo: {}, renderer: {} },
                            additionalProperties: !1,
                          },
                        ],
                      },
                      elevationInfo: {},
                      featureReduction: {},
                      fields: {},
                      objectIdField: {},
                    },
                    additionalProperties: !1,
                  },
                ],
              },
              layerType: {
                type: 'string',
                description: 'String indicating the layer type.',
                enum: ['GeoJSON'],
              },
              listMode: {
                type: 'string',
                description: 'To show or hide layers in the layer list',
                enum: ['hide', 'show'],
                default: 'show',
              },
              maxScale: {
                type: 'number',
                description:
                  "A number representing the maximum scale at which the layer will be visible. The number is the scale's denominator.",
                minimum: 0,
              },
              minScale: {
                type: 'number',
                description:
                  "A number representing the minimum scale at which the layer will be visible. The number is the scale's denominator.",
                minimum: 0,
              },
              opacity: {
                type: 'number',
                description:
                  'The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.',
                minimum: 0,
                maximum: 1,
                default: 1,
              },
              popupInfo: {
                description:
                  'A popupInfo object defining the content of popup windows when you click or query a feature.',
                $ref: '#/definitions/popupInfo_schema.json',
              },
              refreshInterval: {
                type: 'number',
                description:
                  'Refresh interval of the layer in minutes. Non-zero value indicates automatic layer refresh at the specified interval. Value of 0 indicates auto refresh is not enabled.',
                default: 0,
              },
              screenSizePerspective: {
                type: 'boolean',
                description:
                  'Apply [perspective scaling](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#screenSizePerspectiveEnabled) to screen-size symbols.',
                default: !0,
              },
              showLabels: {
                type: 'boolean',
                description:
                  'Labels will display if this property is set to `true` and the layer also has a [labelingInfo](labelingInfo.md) property associated with it. This property can get stored in the web scene config.',
                default: !1,
              },
              showLegend: {
                type: 'boolean',
                description:
                  'Boolean value indicating whether to display the layer in the legend. Default value is `true`.',
                default: !0,
              },
              title: {
                type: 'string',
                description:
                  'A user-friendly string title for the layer that can be used in a table of contents.',
              },
              url: {
                type: 'string',
                description: 'The URL to the layer.',
                format: 'uri',
              },
              visibility: {
                type: 'boolean',
                description:
                  'Boolean property determining whether the layer is initially visible in the web scene.',
                default: !0,
              },
            },
            required: ['layerType', 'title', 'url'],
            additionalProperties: !1,
          },
          'groupLayer_schema.json': {
            title: 'Group Layer',
            type: 'object',
            description:
              'GroupLayer provides the ability to organize several sublayers into one common layer. Suppose there are several FeatureLayers that all represent water features in different dimensions. For example, wells (points), streams (lines), and lakes (polygons). The GroupLayer provides the functionality to treat them as one layer called Water Features even though they are stored as separate feature layers.<br><br>With respect to scale visibility, sublayers of a group layer will be visible only within the scale range defined for the group layer. A sublayer may further restrict itself to a narrow scale range. In other words, a sublayer will be visible only when the current map scale intersects the scale range of that sublayer as well as the scale range of all its parent group layers.',
            properties: {
              id: {
                type: 'string',
                description: 'A unique identifying string for the layer',
              },
              layers: {
                type: 'array',
                description: 'list of child operationalLayers',
                items: { $ref: '#/definitions/operationalLayers_schema.json' },
                uniqueItems: !0,
              },
              layerType: {
                type: 'string',
                description: 'String indicating the layer type',
                enum: ['GroupLayer'],
              },
              listMode: {
                type: 'string',
                description:
                  'To show or hide the group layer in the layer list',
                enum: ['hide', 'hide-children', 'show'],
                default: 'show',
              },
              maxScale: {
                type: 'number',
                description:
                  "A number representing the maximum scale at which the layer will be visible. The number is the scale's denominator.",
                minimum: 0,
              },
              minScale: {
                type: 'number',
                description:
                  "A number representing the minimum scale at which the layer will be visible. The number is the scale's denominator.",
                minimum: 0,
              },
              opacity: {
                type: 'number',
                description:
                  'The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.',
                default: 1,
              },
              title: {
                type: 'string',
                description:
                  'A user-friendly string title for the layer that can be used in a table of contents. If this is not included, a title is derived from the service',
              },
              visibility: {
                type: 'boolean',
                description:
                  'Boolean property determining whether the layer is initially visible in the web scene',
                default: !0,
              },
              visibilityMode: {
                type: 'string',
                description:
                  'How visibility of children is affected:independent, exclusive, inherited',
                enum: ['exclusive', 'independent', 'inherited'],
              },
            },
            required: ['id', 'layerType', 'title'],
            additionalProperties: !1,
          },
          'imageServiceLayer_schema.json': {
            title: 'Image Service Layer (ArcGISImageServiceLayer)',
            type: 'object',
            description:
              'An image service provides access to raster data through a web service. Multiple rasters can be served as one image service through mosaic dataset technology, dynamically processed and mosaicked on the fly. An image service supports accessing both the mosaicked image and its catalog, as well as individual rasters in the catalog. Also, image services can be cached (tiled) or uncached (dynamic). This object specifically details properties within uncached image services.',
            properties: {
              bandIds: {
                type: 'array',
                description:
                  'An array of bandIds that are visible for a multispectral dataset. It can specify bands to export or rearrange band order(from image service).',
                items: { type: 'integer' },
              },
              compressionQuality: {
                type: 'number',
                description:
                  'Controls how much loss the image will be subjected to by the compression algorithm (from image service).',
                minimum: 0,
                maximum: 100,
              },
              compressionTolerance: {
                type: 'number',
                description:
                  'Controls the tolerance of the lerc compression algorithm. The tolerance defines the maximum possible error of pixel values in the compressed image.',
                minimum: 0,
                default: 0.01,
              },
              customParameters: {
                $ref: '#/definitions/customParameters_schema.json',
              },
              disablePopup: {
                type: 'boolean',
                description:
                  'Boolean property indicating whether to ignore popups defined by the service item.',
              },
              format: {
                type: 'string',
                description: 'String value representing image format.',
                enum: [
                  'bmp',
                  'gif',
                  'jpg',
                  'jpgpng',
                  'lerc',
                  'png',
                  'png24',
                  'png32',
                  'png8',
                  'tiff',
                ],
                default: 'png',
              },
              id: {
                type: 'string',
                description: 'A unique identifying string for the layer.',
              },
              interpolation: {
                type: 'string',
                description: 'The algorithm used for interpolation.',
                enum: [
                  'RSP_BilinearInterpolation',
                  'RSP_CubicConvolution',
                  'RSP_Majority',
                  'RSP_NearestNeighbor',
                ],
              },
              isReference: {
                type: 'boolean',
                description:
                  'This is applicable if used as a baseMapLayer. A boolean value indicating whether or not the baseMapLayer draws on top (true) of other layers, including operationalLayers , or below (false).',
              },
              itemId: {
                type: 'string',
                description:
                  "Optional string containing the item ID of the service if it's registered on ArcGIS Online or your organization's portal.",
              },
              layerDefinition: {
                allOf: [
                  { $ref: '#/definitions/layerDefinition_schema.json' },
                  {
                    properties: {
                      definitionExpression: {},
                      drawingInfo: {
                        allOf: [
                          { $ref: '#/definitions/drawingInfo_schema.json' },
                          {
                            properties: { renderer: {}, transparency: {} },
                            additionalProperties: !1,
                          },
                        ],
                      },
                    },
                    additionalProperties: !1,
                  },
                ],
              },
              layerType: {
                type: 'string',
                description: 'String indicating the layer type.',
                enum: ['ArcGISImageServiceLayer'],
              },
              listMode: {
                type: 'string',
                description: 'To show or hide layers in the layer list',
                enum: ['hide', 'show'],
                default: 'show',
              },
              maxScale: {
                type: 'number',
                description:
                  "A number representing the maximum scale at which the layer will be visible. The number is the scale's denominator.",
                minimum: 0,
              },
              minScale: {
                type: 'number',
                description:
                  "A number representing the minimum scale at which the layer will be visible. The number is the scale's denominator.",
                minimum: 0,
              },
              mosaicRule: {
                description:
                  'Specifies the mosaic rule when defining how individual images should be mosaicked.',
                $ref: '#/definitions/mosaicRule_schema.json',
              },
              noData: {
                type: 'integer',
                description: 'The pixel value that represents no information.',
              },
              noDataInterpretation: {
                type: 'string',
                description:
                  'A string value of interpretation of noData setting. Default is `esriNoDataMatchAny` when noData is a number, and `esriNoDataMatchAll` when noData is an array.',
                enum: ['esriNoDataMatchAll', 'esriNoDataMatchAny'],
                default: 'esriNoDataMatchAny',
              },
              opacity: {
                type: 'number',
                description:
                  'The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.',
                minimum: 0,
                maximum: 1,
                default: 1,
              },
              pixelType: {
                type: 'string',
                description:
                  'Pertains to the type of values stored in the raster, such as signed integer, unsigned integer, or floating point.',
                enum: [
                  'C128',
                  'C64',
                  'F32',
                  'F64',
                  'S16',
                  'S32',
                  'S8',
                  'U1',
                  'U16',
                  'U2',
                  'U32',
                  'U4',
                  'U8',
                  'UNKNOWN',
                ],
              },
              popupInfo: {
                description:
                  'A popupInfo object defining the content of popup windows when you click on the image.',
                $ref: '#/definitions/popupInfo_schema.json',
              },
              refreshInterval: {
                type: 'number',
                description:
                  'Refresh interval of the layer in minutes. Non-zero value indicates automatic layer refresh at the specified interval. Value of 0 indicates auto refresh is not enabled.',
              },
              renderingRule: {
                description:
                  'Specifies the rendering rule for how the requested image should be rendered.',
                $ref: '#/definitions/renderingRule_schema.json',
              },
              showLegend: {
                type: 'boolean',
                description:
                  "Indicates whether to allow map authors the ability to control what layers should be shown in a client's legend control.",
                default: !0,
              },
              title: {
                type: 'string',
                description:
                  'A user-friendly string title for the layer that can be used in a table of contents.',
              },
              url: { type: 'string', description: 'The URL to the layer.' },
              visibility: {
                type: 'boolean',
                description:
                  'Boolean property determining whether the layer is initially visible in the web map.',
                default: !0,
              },
            },
            required: ['layerType', 'title', 'url'],
            additionalProperties: !1,
          },
          'integratedMeshLayer_schema.json': {
            title: 'Integrated Mesh Layer (IntegratedMeshLayer)',
            type: 'object',
            description:
              'An integrated mesh can represent built and natural 3D features, such as building walls, trees, valleys, and cliffs, with realistic textures and includes elevation information.',
            properties: {
              id: {
                type: 'string',
                description: 'A unique identifying string for the layer.',
              },
              itemId: {
                type: 'string',
                description:
                  "Optional string containing the item ID of the service if it's registered on ArcGIS Online or your organization's portal.",
              },
              layerDefinition: {
                type: 'object',
                description:
                  'A layerDefinition object defining the attribute schema and drawing information for the layer.',
                allOf: [
                  { $ref: '#/definitions/layerDefinition_schema.json' },
                  {
                    properties: {
                      elevationInfo: {},
                      maxScale: {},
                      minScale: {},
                    },
                    additionalProperties: !1,
                  },
                ],
              },
              layerType: {
                type: 'string',
                description: 'String indicating the layer type.',
                enum: ['IntegratedMeshLayer'],
              },
              listMode: {
                type: 'string',
                description: 'To show or hide layers in the layer list',
                enum: ['hide', 'show'],
                default: 'show',
              },
              modifications: {
                type: 'string',
                description:
                  'URL to modifications json file, typically stored in `ITEM/resources`. Content of the file follows the $ref:[Modifications schema](modifications_schema.json).',
              },
              opacity: {
                type: 'number',
                description:
                  'The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.',
                minimum: 0,
                maximum: 1,
                default: 1,
              },
              path: {
                type: 'string',
                description:
                  'For offline data, a path to integrated mesh data in a scene layer package file. A URI format is used, starting with `file:` followed by a file system path with an extension of `.slpk`. A relative path must be from the file which defines the layer. For example `file:../p20/edinburgh.slpk`.',
                pattern: '^file:.+\\.slpk$',
              },
              title: {
                type: 'string',
                description:
                  'A user-friendly string title for the layer that can be used in a table of contents. If this is not included, a title is derived from the service.',
              },
              url: {
                type: 'string',
                description:
                  'The URL to the layer. If the layer is not from a web service but rather a feature collection, then the url property is omitted.',
              },
              visibility: {
                type: 'boolean',
                description:
                  'Boolean property determining whether the layer is initially visible in the web scene.',
                default: !0,
              },
            },
            anyOf: [
              { required: ['id', 'layerType', 'title', 'url'] },
              { required: ['id', 'layerType', 'path', 'title'] },
            ],
            additionalProperties: !1,
          },
          'kmlLayer_schema.json': {
            title: 'KML Layer (KML)',
            type: 'object',
            description:
              'Keyhole Markup Language (KML) is an XML-based format for storing geographic data and associated content and is an official Open Geospatial Consortium (OGC) standard. KML is a common format for sharing geographic data with non-GIS users as it can be easily delivered on the Internet.',
            properties: {
              id: {
                type: 'string',
                description: 'A unique identifying string for the layer.',
              },
              itemId: {
                type: 'string',
                description:
                  "A string containing the item ID of the service if it's registered on ArcGIS Online or your organization's portal.",
              },
              layerType: {
                type: 'string',
                description: 'String indicating the layer type.',
                enum: ['KML'],
              },
              listMode: {
                type: 'string',
                description: 'To show or hide the sublayer in the layer list.',
                enum: ['hide', 'show'],
                default: 'show',
              },
              maxScale: {
                type: 'number',
                description:
                  "A number representing the maximum scale at which the layer will be visible. The number is the scale's denominator.",
                minimum: 0,
              },
              minScale: {
                type: 'number',
                description:
                  "A number representing the minimum scale at which the layer will be visible. The number is the scale's denominator.",
                minimum: 0,
              },
              opacity: {
                type: 'number',
                description:
                  'The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.',
                minimum: 0,
                maximum: 1,
                default: 1,
              },
              path: {
                type: 'string',
                description:
                  'For offline data, a path to a KML file. A URI format is used, starting with `file:` followed by a file system path with an extension of `.kml` or `.kmz`.  A relative path must be from the file which defines the layer. For example `file:../commondata/kml/paris.kml`.',
                pattern: '^file:.+\\.km[lz]$',
              },
              refreshInterval: {
                type: 'number',
                description:
                  'Refresh interval of the layer in minutes. Non-zero value indicates automatic layer refresh at the specified interval. Value of 0 indicates auto refresh is not enabled.',
              },
              showLegend: {
                type: 'boolean',
                description:
                  "Indicates whether to allow scene authors the ability to control what layers should be shown in a client's legend.",
                default: !0,
              },
              title: {
                type: 'string',
                description:
                  'A user-friendly string title for the layer that can be used in a table of contents.',
              },
              url: { type: 'string', description: 'The URL to the layer.' },
              visibility: {
                type: 'boolean',
                description:
                  'Boolean property determining whether the layer is initially visible in the web scene.',
                default: !0,
              },
              visibleFolders: {
                type: 'array',
                description:
                  'Array of numeric IDs of folders that will be made visible.',
                items: { type: 'integer' },
                uniqueItems: !0,
              },
            },
            anyOf: [
              { required: ['id', 'layerType', 'title', 'url'] },
              { required: ['id', 'layerType', 'path', 'title'] },
            ],
            additionalProperties: !1,
          },
          'mapServiceLayer_schema.json': {
            title: 'Map Service Layer (ArcGISMapServiceLayer)',
            type: 'object',
            description:
              'Map services can be cached (tiled) or uncached (dynamic). This object specifically details properties within uncached map services.',
            properties: {
              customParameters: {
                $ref: '#/definitions/customParameters_schema.json',
              },
              id: {
                type: 'string',
                description: 'A unique identifying string for the layer.',
              },
              isReference: {
                type: 'boolean',
                description:
                  'This is applicable if used as a baseMapLayer. A boolean value indicating whether or not the baseMapLayer draws on top (true) of other layers, including operationalLayers, or below (false).',
              },
              itemId: {
                type: 'string',
                description:
                  "Optional string containing the item ID of the service if it's registered on ArcGIS Online or your organization's portal.",
              },
              layers: {
                type: 'array',
                description:
                  'An array of layer objects defining the styling, geometry, and attribute information for the features.',
                items: {
                  allOf: [
                    { $ref: '#/definitions/layer_schema.json' },
                    {
                      properties: {
                        defaultVisibility: {},
                        disablePopup: {},
                        id: {},
                        layerDefinition: {},
                        listMode: {},
                        maxScale: {},
                        minScale: {},
                        name: {},
                        parentLayerId: {},
                        popupInfo: {},
                        showLegend: {},
                        subLayerIds: {},
                      },
                      additionalProperties: !1,
                    },
                  ],
                },
                uniqueItems: !0,
              },
              layerType: {
                type: 'string',
                description: 'String indicating the layer type.',
                enum: ['ArcGISMapServiceLayer'],
              },
              listMode: {
                type: 'string',
                description:
                  'To show or hide the sublayer in the layer list. If the layer has sublayers, selecting `hide-children` will hide them in the layer list.',
                enum: ['hide', 'hide-children', 'show'],
                default: 'show',
              },
              maxScale: {
                type: 'number',
                description:
                  "A number representing the maximum scale at which the layer will be visible. The number is the scale's denominator.",
                minimum: 0,
              },
              minScale: {
                type: 'number',
                description:
                  "A number representing the minimum scale at which the layer will be visible. The number is the scale's denominator.",
                minimum: 0,
              },
              opacity: {
                type: 'number',
                description:
                  'The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.',
                minimum: 0,
                maximum: 1,
                default: 1,
              },
              refreshInterval: {
                type: 'number',
                description:
                  'Refresh interval of the layer in minutes. Non-zero value indicates automatic layer refresh at the specified interval. Value of 0 indicates auto refresh is not enabled.',
              },
              showLegend: {
                type: 'boolean',
                description:
                  'Boolean value indicating whether to display the layer in the legend. Default value is `true`.',
                default: !0,
              },
              title: {
                type: 'string',
                description:
                  'A user-friendly string title for the layer that can be used in a table of contents.',
              },
              url: { type: 'string', description: 'The URL to the layer.' },
              visibility: {
                type: 'boolean',
                description:
                  'Boolean property determining whether the layer is initially visible in the web scene.',
                default: !0,
              },
              visibleLayers: {
                type: 'array',
                description:
                  'An array of sublayer ids that should appear visible. Used with map service layers that are not tiled.',
                items: { type: 'integer' },
                uniqueItems: !0,
              },
            },
            required: ['id', 'layerType', 'title', 'url'],
            additionalProperties: !1,
          },
          'ogcFeatureLayer_schema.json': {
            title: 'OGC Feature Layer',
            type: 'object',
            description:
              'OGC Feature Layer is a dynamic feature service that follows the specifications of OGC API - Features.',
            properties: {
              collectionId: {
                type: 'string',
                description:
                  'A unique identifying string for a feature collection.',
              },
              customParameters: {
                type: 'object',
                description:
                  'A sequence of parameters used to append custom or vendor specific parameters to all OGC API - Features requests.',
                patternProperties: { '.*': { type: 'string' } },
              },
              disablePopup: {
                type: 'boolean',
                description: 'Indicates whether popup is enabled or not.',
              },
              id: {
                type: 'string',
                description: 'A unique identifying string for the layer.',
              },
              itemId: {
                type: 'string',
                description:
                  "Unique string value indicating an item registered in ArcGIS Online or your organization's portal.",
              },
              layerDefinition: {
                description:
                  'Additional properties that define drawing information and other configurations for the layer.',
                allOf: [
                  { $ref: '#/definitions/layerDefinition_schema.json' },
                  {
                    properties: {
                      drawingInfo: {
                        allOf: [
                          { $ref: '#/definitions/drawingInfo_schema.json' },
                          {
                            properties: { labelingInfo: {}, renderer: {} },
                            additionalProperties: !1,
                          },
                        ],
                      },
                      elevationInfo: {},
                      featureReduction: {},
                    },
                    additionalProperties: !1,
                  },
                ],
              },
              layerType: {
                type: 'string',
                description: 'String indicating the layer type.',
                enum: ['OGCFeatureLayer'],
              },
              listMode: {
                type: 'string',
                description: 'To show or hide layers in the layer list',
                enum: ['hide', 'hide-children', 'show'],
                default: 'show',
              },
              maxScale: {
                type: 'number',
                description:
                  'Represents the maximum scale (most zoomed in) at which the layer is visible in the view. If the web scene is zoomed in beyond this scale, the layer will not be visible. A value of 0 means the layer does not have a maximum scale. If set, the maxScale value should always be smaller than the minScale value, and greater than or equal to the service specification.',
              },
              minScale: {
                type: 'number',
                description:
                  'Represents the minimum scale (most zoomed out) at which the layer is visible in the view. If the web scene is zoomed out beyond this scale, the layer will not be visible. A value of 0 means the layer does not have a minimum scale. If set, the minScale value should always be larger than the maxScale value, and lesser than or equal to the service specification.',
              },
              opacity: {
                type: 'number',
                description:
                  'The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.',
                minimum: 0,
                maximum: 1,
                default: 1,
              },
              popupInfo: {
                description:
                  'A popupInfo object defining the content of popup windows when you click or query a feature.',
                $ref: '#/definitions/popupInfo_schema.json',
              },
              refreshInterval: {
                type: 'number',
                description:
                  'Refresh interval of the layer in minutes. Non-zero value indicates automatic layer refresh at the specified interval. Value of 0 indicates auto refresh is not enabled.',
              },
              screenSizePerspective: {
                type: 'boolean',
                description:
                  'Apply [perspective scaling](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#screenSizePerspectiveEnabled) to screen-size symbols.',
                default: !0,
              },
              showLabels: {
                type: 'boolean',
                description:
                  'Boolean value indicating whether to display labels for this layer.',
                default: !1,
              },
              showLegend: {
                type: 'boolean',
                description:
                  'Boolean value indicating whether to display legend for this layer.',
                default: !0,
              },
              title: {
                type: 'string',
                description:
                  'A user-friendly string title for the layer that can be used in a table of contents.',
              },
              url: {
                type: 'string',
                description:
                  'The URL of the OGC API Features service landing page.',
                format: 'uri',
              },
              visibility: {
                type: 'boolean',
                description:
                  'Boolean property determining whether the layer is initially visible in the web map.',
                default: !0,
              },
            },
            required: ['layerType', 'title', 'url'],
            additionalProperties: !1,
          },
          'pointCloudLayer_schema.json': {
            title: 'PointCloud Layer',
            type: 'object',
            description:
              'Point cloud data is post-processed spatially organized lidar data that consists of large collections of 3D points. Elevations for the ground, buildings, forest canopy, highway overpasses, and anything else encountered during the lidar survey make up the point cloud data. Point cloud layers allow for fast visualisation of point cloud data in the browser.',
            properties: {
              disablePopup: {
                type: 'boolean',
                description:
                  'disablePopups allows a client to ignore popups defined by the service item.',
              },
              id: {
                type: 'string',
                description: 'A unique identifying string for the layer',
              },
              itemId: {
                type: 'string',
                description:
                  "Optional string containing the item ID of the service if it's registered on ArcGIS Online or your organization's portal",
              },
              layerDefinition: {
                type: 'object',
                description:
                  'A layerDefinition object defining the attribute schema and drawing information for the layer.',
                allOf: [
                  { $ref: '#/definitions/layerDefinition_schema.json' },
                  {
                    properties: {
                      drawingInfo: {
                        allOf: [
                          { $ref: '#/definitions/drawingInfo_schema.json' },
                          {
                            properties: { renderer: {}, transparency: {} },
                            additionalProperties: !1,
                          },
                        ],
                      },
                      elevationInfo: {},
                      filters: {},
                      maxScale: {},
                      minScale: {},
                    },
                    additionalProperties: !1,
                  },
                ],
              },
              layerType: {
                type: 'string',
                description: 'String indicating the layer type',
                enum: ['PointCloudLayer'],
              },
              listMode: {
                type: 'string',
                description: 'To show or hide the layer in the layer list',
                enum: ['hide', 'show'],
                default: 'show',
              },
              path: {
                type: 'string',
                description:
                  'For offline data, a path to point cloud layer data in a scene layer package file. A URI format is used, starting with `file:` followed by a file system path with an extension of `.slpk`. A relative path must be from the file which defines the layer. For example `file:../p20/zurich.slpk`.',
                pattern: '^file:.+\\.slpk$',
              },
              popupInfo: {
                description:
                  'A popupInfo object defining the content of pop-up windows when you click a point.',
                $ref: '#/definitions/popupInfo_schema.json',
              },
              showLegend: {
                type: 'boolean',
                description:
                  'Boolean value indicating whether to display the layer in the legend. Default value is `true`.',
                default: !0,
              },
              title: {
                type: 'string',
                description:
                  'A user-friendly string title for the layer that can be used in a table of contents. If this is not included, a title is derived from the service',
              },
              url: { type: 'string', description: 'The URL to the layer.' },
              visibility: {
                type: 'boolean',
                description:
                  'Boolean property determining whether the layer is initially visible',
                default: !0,
              },
            },
            anyOf: [
              { required: ['id', 'layerType', 'title', 'url'] },
              { required: ['id', 'layerType', 'path', 'title'] },
            ],
            additionalProperties: !1,
          },
          'rasterDataLayer_schema.json': {
            title: 'Raster Data Layer',
            type: 'object',
            description:
              'A layer for displaying raster data. This layer only applies to offline data.',
            properties: {
              copyright: {
                type: 'string',
                description:
                  'Attribution to the Raster Data Layer provider. It is displayed in the attribution on the scene. Input required by the user when the layer is added to the scene.',
              },
              id: {
                type: 'string',
                description: 'A unique identifying string for the layer.',
              },
              layerType: {
                type: 'string',
                description: 'String indicating the layer type.',
                enum: ['RasterDataLayer'],
              },
              listMode: {
                type: 'string',
                description: 'To show or hide the sublayer in the layer list.',
                enum: ['hide', 'show'],
                default: 'show',
              },
              maxScale: {
                type: 'number',
                description:
                  "A number representing the maximum scale at which the layer will be visible. The number is the scale's denominator.",
                minimum: 0,
              },
              minScale: {
                type: 'number',
                description:
                  "A number representing the minimum scale at which the layer will be visible. The number is the scale's denominator.",
                minimum: 0,
              },
              opacity: {
                type: 'number',
                description:
                  'The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.',
                minimum: 0,
                maximum: 1,
                default: 1,
              },
              path: {
                type: 'string',
                description:
                  'For offline data, a path to a raster data file. A URI format is used, starting with `file:` followed by a file system path. A relative path must be from the file which defines the layer. For example `file:../commondata/raster_data/beijing.tif`.',
                pattern: '^file:.+$',
              },
              title: {
                type: 'string',
                description:
                  'A user-friendly string title for the layer that can be used in a table of contents.',
              },
              visibility: {
                type: 'boolean',
                description:
                  'Boolean property determining whether the layer is initially visible in the scene.',
                default: !0,
              },
            },
            required: ['id', 'layerType', 'path', 'title'],
            additionalProperties: !1,
          },
          'sceneLayer_schema.json': {
            title: 'Scene Layer (ArcGISSceneServiceLayer)',
            type: 'object',
            description:
              'The SceneLayer is a layer type designed for on-demand streaming and displaying large amounts of data in a SceneView. SceneLayers support two geometry types: Point and 3D Objects (e.g. buildings). The SceneLayer displays data published to a Scene Service. Scene Services can hold large volumes of features in an open format that is suitable for web streaming. The SceneLayer loads these features progressively, starting from coarse representations and refines them to higher detail as necessary for close-up views.',
            properties: {
              disablePopup: {
                type: 'boolean',
                description:
                  'disablePopups allows a client to ignore popups defined by the service item.',
              },
              id: {
                type: 'string',
                description: 'A unique identifying string for the layer.',
              },
              itemId: {
                type: 'string',
                description:
                  "Optional string containing the item ID of the service if it's registered on ArcGIS Online or your organization's portal.",
              },
              layerDefinition: {
                type: 'object',
                description:
                  'A layerDefinition object defining the attribute schema and drawing information for the layer.',
                allOf: [
                  { $ref: '#/definitions/layerDefinition_schema.json' },
                  {
                    properties: {
                      definitionExpression: {},
                      drawingInfo: {
                        allOf: [
                          { $ref: '#/definitions/drawingInfo_schema.json' },
                          {
                            properties: {
                              labelingInfo: {},
                              renderer: {},
                              transparency: {},
                            },
                            additionalProperties: !1,
                          },
                        ],
                      },
                      elevationInfo: {},
                      excludeObjectIds: {},
                      featureReduction: {},
                      floorInfo: {},
                      maxScale: {},
                      minScale: {},
                      rangeInfos: {},
                    },
                    additionalProperties: !1,
                  },
                ],
              },
              layerType: {
                type: 'string',
                description: 'String indicating the layer type.',
                enum: ['ArcGISSceneServiceLayer'],
              },
              listMode: {
                type: 'string',
                description: 'To show or hide layers in the layer list',
                enum: ['hide', 'show'],
                default: 'show',
              },
              opacity: {
                type: 'number',
                description:
                  'The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.',
                minimum: 0,
                maximum: 1,
                default: 1,
              },
              path: {
                type: 'string',
                description:
                  'For offline data, a path to a scene layer package file. A URI format is used, starting with `file:` followed by a file system path with an extension of `.slpk`. A relative path must be from the file which defines the layer. For example `file:../p20/northamerica.slpk`.',
                pattern: '^file:.+\\.slpk$',
              },
              popupInfo: {
                description:
                  'A popupInfo object defining the content of pop-up windows when you click or query a feature.',
                $ref: '#/definitions/popupInfo_schema.json',
              },
              screenSizePerspective: {
                type: 'boolean',
                description:
                  'Apply [perspective scaling](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#screenSizePerspectiveEnabled) to screen-size symbols.',
                default: !0,
              },
              showLabels: {
                type: 'boolean',
                description:
                  'If the layer has a labelingInfo property then labels show on the scene only if the showLabels property it true.',
                default: !1,
              },
              showLegend: {
                type: 'boolean',
                description:
                  'Boolean value indicating whether to display the layer in the legend. Default value is `true`.',
                default: !0,
              },
              title: {
                type: 'string',
                description:
                  'A user-friendly string title for the layer that can be used in a table of contents.',
              },
              url: { type: 'string', description: 'The URL to the service.' },
              visibility: {
                type: 'boolean',
                description:
                  'Boolean property determining whether the layer is initially visible in the web scene',
                default: !0,
              },
            },
            anyOf: [
              { required: ['id', 'layerType', 'title', 'url'] },
              { required: ['id', 'layerType', 'path', 'title'] },
            ],
            additionalProperties: !1,
          },
          'tiledImageServiceLayer_schema.json': {
            title: 'Tiled Image Service Layer (ArcGISTiledImageServiceLayer)',
            type: 'object',
            description:
              'An ArcGIS Tiled Image Service layer displays content from an ArcGIS Server Image service that has been cached (tiled).',
            properties: {
              bandIds: {
                type: 'array',
                description:
                  'An array of bandIds that are visible for a multispectral dataset. It can specify bands to export or rearrange band order(from image service).',
                items: { type: 'integer' },
                minItems: 1,
              },
              customParameters: {
                $ref: '#/definitions/customParameters_schema.json',
              },
              disablePopup: {
                type: 'boolean',
                description:
                  'Indicates whether to allow a client to ignore popups defined by the service item.',
              },
              id: {
                type: 'string',
                description: 'A unique identifying string for the layer.',
              },
              interpolation: {
                type: 'string',
                description: 'String indicating the interpolation type.',
                enum: [
                  'RSP_BilinearInterpolation',
                  'RSP_CubicConvolution',
                  'RSP_Majority',
                  'RSP_NearestNeighbor',
                ],
              },
              isReference: {
                type: 'boolean',
                description:
                  'Applicable if used as a baseMapLayer. A boolean value indicating whether or not the baseMapLayer draws on top (true) of other layers, including operationalLayers , or below (false).',
              },
              itemId: {
                type: 'string',
                description:
                  "Optional string containing the item ID of the service if it's registered on ArcGIS Online or your organization's portal.",
              },
              layerDefinition: {
                allOf: [
                  { $ref: '#/definitions/layerDefinition_schema.json' },
                  {
                    properties: {
                      drawingInfo: {
                        allOf: [
                          { $ref: '#/definitions/drawingInfo_schema.json' },
                          {
                            properties: { renderer: {}, transparency: {} },
                            additionalProperties: !1,
                          },
                        ],
                      },
                    },
                    additionalProperties: !1,
                  },
                ],
              },
              layerType: {
                type: 'string',
                description: 'String indicating the layer type.',
                enum: ['ArcGISTiledImageServiceLayer'],
              },
              listMode: {
                type: 'string',
                description: 'To show or hide the sublayer in the layer list.',
                enum: ['hide', 'show'],
                default: 'show',
              },
              maxScale: {
                type: 'number',
                description:
                  "A number representing the maximum scale at which the layer will be visible. The number is the scale's denominator.",
                minimum: 0,
              },
              minScale: {
                type: 'number',
                description:
                  "A number representing the minimum scale at which the layer will be visible. The number is the scale's denominator.",
                minimum: 0,
              },
              multidimensionalDefinition: {
                type: 'array',
                description:
                  'An array of objects representing a slice from multidimensional data.',
                items: {
                  $ref: '#/definitions/multidimensionalDefinition_schema.json',
                },
              },
              opacity: {
                type: 'number',
                description:
                  'The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.',
                minimum: 0,
                maximum: 1,
                default: 1,
              },
              popupInfo: {
                description:
                  'A popupInfo object defining the content of popup windows when you click on the image.',
                $ref: '#/definitions/popupInfo_schema.json',
              },
              refreshInterval: {
                type: 'number',
                description:
                  'Refresh interval of the layer in minutes. Non-zero value indicates automatic layer refresh at the specified interval. Value of 0 indicates auto refresh is not enabled.',
              },
              showLegend: {
                type: 'boolean',
                description:
                  'Boolean value indicating whether to display the layer in the legend. Default value is `true`.',
                default: !0,
              },
              title: {
                type: 'string',
                description:
                  'A user-friendly string title for the layer that can be used in a table of contents.',
              },
              url: {
                type: 'string',
                description: 'URL to the ArcGIS Server Image Service.',
              },
              visibility: {
                type: 'boolean',
                description:
                  'Boolean property determining whether the layer is initially visible.',
                default: !0,
              },
            },
            required: ['id', 'layerType', 'title', 'url'],
            additionalProperties: !1,
          },
          'tiledMapServiceLayer_schema.json': {
            title: 'Tiled Map Service Layer (ArcGISTiledMapServiceLayer)',
            type: 'object',
            description:
              'An ArcGIS Tiled Map Service layer displays map content from an ArcGIS Server Map service that has been cached (tiled).',
            properties: {
              customParameters: {
                $ref: '#/definitions/customParameters_schema.json',
              },
              id: {
                type: 'string',
                description: 'A unique identifying string for the layer.',
              },
              isReference: {
                type: 'boolean',
                description:
                  'This property is applicable if used as a baseMapLayer. A boolean value indicating whether or not the baseMapLayer draws on top (true) of other layers, including operationalLayers , or below (false).',
              },
              itemId: {
                type: 'string',
                description:
                  "Optional string containing the item ID of the service if it's registered on ArcGIS Online or your organization's portal.",
              },
              layers: {
                type: 'array',
                description:
                  'An array of layer objects defining a URL for queries and the popup window content.',
                items: {
                  allOf: [
                    { $ref: '#/definitions/layer_schema.json' },
                    {
                      properties: {
                        disablePopup: {},
                        id: {},
                        layerUrl: {},
                        listMode: {},
                        name: {},
                        popupInfo: {},
                        showLegend: {},
                      },
                      additionalProperties: !1,
                    },
                  ],
                },
                uniqueItems: !0,
              },
              layerType: {
                type: 'string',
                description: 'String indicating the layer type.',
                enum: ['ArcGISTiledMapServiceLayer'],
              },
              listMode: {
                type: 'string',
                description:
                  'To show or hide the sublayer in the layer list. If the layer has sublayers, selecting `hide-children` will hide them in the layer list.',
                enum: ['hide', 'hide-children', 'show'],
                default: 'show',
              },
              maxScale: {
                type: 'number',
                description:
                  "A number representing the maximum scale at which the layer will be visible. The number is the scale's denominator.",
                minimum: 0,
              },
              minScale: {
                type: 'number',
                description:
                  "A number representing the minimum scale at which the layer will be visible. The number is the scale's denominator.",
                minimum: 0,
              },
              opacity: {
                type: 'number',
                description:
                  'The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.',
                minimum: 0,
                maximum: 1,
                default: 1,
              },
              path: {
                type: 'string',
                description:
                  'For offline data, a path to a tile package file. A URI format is used, starting with `file:` followed by a file system path with an extension of `.tpk` or `.tpkx`. A relative path must be from the file which defines the layer. For example `file:../p20/northamerica.tpk`.',
                pattern: '^file:.+\\.tpkx?$',
              },
              refreshInterval: {
                type: 'number',
                description:
                  'Refresh interval of the layer in minutes. Non-zero value indicates automatic layer refresh at the specified interval. Value of 0 indicates auto refresh is not enabled.',
              },
              showLegend: {
                type: 'boolean',
                description:
                  'Boolean value indicating whether to display the layer in the legend. Default value is `true`.',
                default: !0,
              },
              title: {
                type: 'string',
                description:
                  'A user-friendly string title for the layer that can be used in a table of contents. If this is not included, a title is derived from the service.',
              },
              url: {
                type: 'string',
                description: 'URL to the ArcGIS Server tiled Map Service',
              },
              visibility: {
                type: 'boolean',
                description:
                  'Boolean property determining whether the layer is initially visible in the map.',
                default: !0,
              },
            },
            anyOf: [
              { required: ['id', 'layerType', 'title', 'url'] },
              { required: ['id', 'layerType', 'path', 'title'] },
            ],
            additionalProperties: !1,
          },
          'vectorTileLayer_schema.json': {
            title: 'Vector Tile Layer (VectorTileLayer)',
            type: 'object',
            description:
              'A vector tile layer references a set of web-accessible vector tiles and the corresponding style for how those tiles should be drawn.',
            properties: {
              customParameters: {
                $ref: '#/definitions/customParameters_schema.json',
              },
              id: {
                type: 'string',
                description: 'A unique identifying string for the layer.',
              },
              isReference: {
                type: 'boolean',
                description:
                  'This property is applicable if used as a baseMapLayer. A boolean value indicating whether or not the baseMapLayer draws on top (true) of other layers, including operationalLayers, or below (false).',
              },
              itemId: {
                type: 'string',
                description:
                  "Optional string containing the item ID of the service if it's registered on ArcGIS Online or your organization's portal.",
              },
              layerType: {
                type: 'string',
                description: 'String indicating the layer type.',
                enum: ['VectorTileLayer'],
              },
              listMode: {
                type: 'string',
                description: 'To show or hide the layer in the layer list',
                enum: ['hide', 'show'],
                default: 'show',
              },
              maxScale: {
                type: 'number',
                description:
                  "A number representing the maximum scale at which the layer will be visible. The number is the scale's denominator.",
              },
              minScale: {
                type: 'number',
                description:
                  "A number representing the minimum scale at which the layer will be visible. The number is the scale's denominator.",
              },
              opacity: {
                type: 'number',
                description:
                  'The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.',
                minimum: 0,
                maximum: 1,
                default: 1,
              },
              path: {
                type: 'string',
                description:
                  'For offline data, a path to a vector tile layer package file. A URI format is used, starting with `file:` followed by a file system path with an extension of `.vtpk`. A relative path must be from the file which defines the layer. For example `file:../p20/northamerica.vtpk`.',
                pattern: '^file:.+\\.vtpk$',
              },
              styleUrl: {
                type: 'string',
                description:
                  'A url to a JSON file containing the stylesheet information used to render the layer. You may also pass an object containing the stylesheet information identical to the JSON file.',
              },
              title: {
                type: 'string',
                description:
                  'A user-friendly string title for the layer that can be used in a table of contents.',
              },
              visibility: {
                type: 'boolean',
                description:
                  'Boolean property determining whether the layer is initially visible.',
                default: !0,
              },
            },
            anyOf: [
              { required: ['id', 'layerType', 'styleUrl', 'title'] },
              { required: ['id', 'layerType', 'path', 'title'] },
            ],
            additionalProperties: !1,
          },
          'voxelLayer_schema.json': {
            title: 'Voxel Layer',
            type: 'object',
            description:
              'A voxel layer represents multidimensional spatial and temporal information in a 3D volumetric visualization. You can analyze the volume by slicing, creating sections or isosurfaces. For example, you can visualize atmospheric or oceanic data, a geological underground model, or space-time cubes as voxel layers.',
            properties: {
              disablePopup: {
                type: 'boolean',
                description:
                  'disablePopups allows a client to ignore popups defined by the service item.',
              },
              id: {
                type: 'string',
                description: 'A unique identifying string for the layer.',
              },
              itemId: {
                type: 'string',
                description:
                  "Optional string containing the item ID of the service if it's registered on ArcGIS Online or your organization's portal.",
              },
              layerDefinition: {
                type: 'object',
                description:
                  'Additional properties that define drawing of a voxel layer.',
                allOf: [
                  { $ref: '#/definitions/voxelLayerDefinition_schema.json' },
                  { properties: { sections: {}, style: {} } },
                ],
              },
              layerType: {
                type: 'string',
                description: 'String indicating the layer type.',
                enum: ['Voxel'],
              },
              listMode: {
                type: 'string',
                description: 'To show or hide the layer in the layer list.',
                enum: ['hide', 'show'],
                default: 'show',
              },
              showLegend: {
                type: 'boolean',
                description:
                  'Boolean value indicating whether to display the layer in the legend. Default value is `true`.',
                default: !0,
              },
              title: {
                type: 'string',
                description:
                  'A user-friendly string title for the layer that can be used in a table of contents. If this is not included, a title is derived from the service.',
              },
              url: { type: 'string', description: 'The URL to the layer.' },
              visibility: {
                type: 'boolean',
                description:
                  'Boolean property determining whether the layer is initially visible',
                default: !0,
              },
            },
            required: ['id', 'layerType', 'title', 'url'],
          },
          'webTiledLayer_schema.json': {
            title: 'Web Tiled Layer (WebTiledLayer)',
            type: 'object',
            description:
              'A tile layer is a derived from a set of web-accessible tiles which reside on a server. The tiles are accessed by a direct URL request from the web browser. Because the tiles in a tile layer are not available as a service, they must be in a specific format for a web app such as the ArcGIS.com scene viewer to display the layer on a scene.',
            properties: {
              copyright: {
                type: 'string',
                description:
                  'Attribution to the Web Tiled Layer provider. It is displayed in the attribution on the web scene. Input required by the user when the layer is added to the web scene.',
              },
              fullExtent: {
                description:
                  'An extent object representing the full extent envelope for the layer.',
                $ref: '#/definitions/extent_schema.json',
              },
              id: {
                type: 'string',
                description: 'A unique identifying string for the layer.',
              },
              isReference: {
                type: 'boolean',
                description:
                  'This is applicable if used as a basesceneLayer. A boolean value indicating whether or not the basesceneLayer draws on top (true) of other layers, including operationalLayers , or below (false).',
              },
              itemId: {
                type: 'string',
                description:
                  "Unique string value indicating an item registered in ArcGIS Online or your organization's portal.",
              },
              layerType: {
                type: 'string',
                description: 'String indicating the layer type.',
                enum: ['WebTiledLayer'],
              },
              listMode: {
                type: 'string',
                description: 'To show or hide the layer in the layer list',
                enum: ['hide', 'show'],
                default: 'show',
              },
              maxScale: {
                type: 'number',
                description:
                  "A number representing the maximum scale at which the layer will be visible. The number is the scale's denominator.",
                minimum: 0,
              },
              minScale: {
                type: 'number',
                description:
                  "A number representing the minimum scale at which the layer will be visible. The number is the scale's denominator.",
                minimum: 0,
              },
              opacity: {
                type: 'number',
                description:
                  'The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.',
                minimum: 0,
                maximum: 1,
                default: 1,
              },
              refreshInterval: {
                type: 'number',
                description:
                  'Refresh interval of the layer in minutes. Non-zero value indicates automatic layer refresh at the specified interval. Value of 0 indicates auto refresh is not enabled.',
              },
              subDomains: {
                type: 'array',
                description:
                  'If subdomains are detected, they must be specified. The scene viewer detects if the Web Tiled Layer has subdomains by parsing the templateURL value for {subDomain}.',
                items: { type: 'string' },
              },
              templateUrl: {
                type: 'string',
                description:
                  'URL to the Web Tiled Layer. Input required by the user when the layer is added to the web scene. The template URL contains a parameterized URL. The URL can contain the following templated parameters: `level`, `col`, `row`, and `subDomain`.',
              },
              tileInfo: {
                description:
                  'Contains the spatial reference and the tiling scheme of the layer. Typically retrieved from a WMTS OGC Web Service. If missing the layer must be in the WGS 1984 Web Mercator (Auxiliary Sphere) tiling scheme.',
                $ref: '#/definitions/tileInfo_schema.json',
              },
              title: {
                type: 'string',
                description:
                  'A user-friendly string title for the layer that can be used in a table of contents.',
              },
              visibility: {
                type: 'boolean',
                description:
                  'Boolean property determining whether the layer is initially visible in the web scene.',
                default: !0,
              },
              wmtsInfo: {
                description:
                  'Object containing information about the chosen WMTS service layer and tiling schema.',
                $ref: '#/definitions/wmtsInfo_schema.json',
              },
            },
            required: ['id', 'layerType', 'title'],
            additionalProperties: !1,
          },
          'wfsLayer_schema.json': {
            title: 'Web Feature Service Layer (WFS)',
            type: 'object',
            description:
              'OGC Web Feature Service (WFS) is a dynamic feature service that follows the specifications of OGC.',
            properties: {
              disablePopup: {
                type: 'boolean',
                description:
                  'Indicates whether to allow a client to ignore popups defined by the service item.',
              },
              id: {
                type: 'string',
                description: 'A unique identifying string for the layer.',
              },
              itemId: {
                type: 'string',
                description:
                  "Unique string value indicating an item registered in ArcGIS Online or your organization's portal.",
              },
              layerDefinition: {
                allOf: [
                  { $ref: '#/definitions/layerDefinition_schema.json' },
                  {
                    properties: {
                      definitionExpression: {},
                      drawingInfo: {
                        allOf: [
                          { $ref: '#/definitions/drawingInfo_schema.json' },
                          {
                            properties: {
                              labelingInfo: {},
                              renderer: {},
                              transparency: {},
                            },
                            additionalProperties: !1,
                          },
                        ],
                      },
                      elevationInfo: {},
                      featureReduction: {},
                      fields: {},
                      geometryType: {},
                      spatialReference: {},
                    },
                    additionalProperties: !1,
                  },
                ],
              },
              layerType: {
                type: 'string',
                description: 'String indicating the layer type.',
                enum: ['WFS'],
              },
              listMode: {
                type: 'string',
                description: 'To show or hide layers in the layer list',
                enum: ['hide', 'show'],
                default: 'show',
              },
              maxScale: {
                type: 'number',
                description:
                  'Represents the maximum scale (most zoomed in) at which the layer is visible in the view. If the web scene is zoomed in beyond this scale, the layer will not be visible. A value of 0 means the layer does not have a maximum scale. If set, the maxScale value should always be smaller than the minScale value, and greater than or equal to the service specification.',
              },
              minScale: {
                type: 'number',
                description:
                  'Represents the minimum scale (most zoomed out) at which the layer is visible in the view. If the web scene is zoomed out beyond this scale, the layer will not be visible. A value of 0 means the layer does not have a minimum scale. If set, the minScale value should always be larger than the maxScale value, and lesser than or equal to the service specification.',
              },
              opacity: {
                type: 'number',
                description:
                  'The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.',
                minimum: 0,
                maximum: 1,
                default: 1,
              },
              popupInfo: {
                description:
                  'A popupInfo object defining the content of popup windows when you click or query a feature.',
                $ref: '#/definitions/popupInfo_schema.json',
              },
              refreshInterval: {
                type: 'number',
                description:
                  'Refresh interval of the layer in minutes. Non-zero value indicates automatic layer refresh at the specified interval. Value of 0 indicates auto refresh is not enabled.',
              },
              screenSizePerspective: {
                type: 'boolean',
                description:
                  'Apply [perspective scaling](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#screenSizePerspectiveEnabled) to screen-size symbols.',
                default: !0,
              },
              showLabels: {
                type: 'boolean',
                description:
                  'Labels will display if this property is set to `true` and the layer also has a [labelingInfo](labelingInfo.md) property associated with it. This property can get stored in the web map config and in the item/data.',
                default: !1,
              },
              showLegend: {
                type: 'boolean',
                description:
                  'Boolean value indicating whether to display legend for this layer.',
                default: !0,
              },
              title: {
                type: 'string',
                description:
                  'A user-friendly string title for the layer that can be used in a table of contents.',
              },
              url: {
                type: 'string',
                description:
                  'The URL to the layer. If the layer is not from a web service but rather a feature collection, than the url property is omitted.',
              },
              visibility: {
                type: 'boolean',
                description:
                  'Boolean property determining whether the layer is initially visible in the web map.',
                default: !0,
              },
              wfsInfo: {
                description:
                  'Object that defines and provides information about layers in a WFS service.',
                $ref: '#/definitions/wfsInfo_schema.json',
              },
            },
            required: ['layerType', 'title', 'url'],
            additionalProperties: !1,
          },
          'wmsLayer_schema.json': {
            title: 'WMS Layer (WMS)',
            type: 'object',
            description:
              'A layer consuming a Web Map Service (WMS). The WMS specification is an international specification for serving and consuming dynamic maps on the web.',
            properties: {
              copyright: {
                type: 'string',
                description:
                  'A string containing copyright and access information for a WMS layer. This is copied from the capabilities document exposed by the WMS service.',
              },
              customLayerParameters: {
                type: 'object',
                description:
                  'A sequence of custom parameters to WMS layer requests. These parameters are applied to `GetMap` and `GetFeatureInfo` requests. The `customLayerParameters` property takes precedence if `customParameters` is also present.',
                patternProperties: { '.*': { type: 'string' } },
              },
              customParameters: {
                description:
                  'A sequence of custom parameters to all WMS requests. These parameters are applied to `GetCapabilities`, `GetMap`, and `GetFeatureinfo` requests. If used with the `customLayerParameters` property, `customParameters` will not take precedence.',
                $ref: '#/definitions/customParameters_schema.json',
              },
              extent: {
                type: 'array',
                description:
                  'The minimum bounding rectangle, in decimal degrees, of the area covered by the layer as specified in the capabilities.',
                items: {
                  type: 'array',
                  items: { type: 'number' },
                  minItems: 2,
                  maxItems: 2,
                },
                minItems: 2,
                maxItems: 2,
              },
              featureInfoFormat: {
                type: 'string',
                description: 'Format of the feature, e.g.`text/plain`',
              },
              featureInfoUrl: {
                type: 'string',
                description: 'The URL for the WMS GetFeatureInfo call.',
              },
              format: {
                type: 'string',
                description:
                  'A string containing the image format to be requested from a WMS service. Default is `png`.',
                enum: ['bmp', 'gif', 'jpg', 'png', 'svg'],
                default: 'png',
              },
              id: {
                type: 'string',
                description: 'A unique identifying string for the layer.',
              },
              isReference: {
                type: 'boolean',
                description:
                  'This is applicable if used as a baseMapLayer. A boolean value indicating whether or not the baseMapLayer draws on top (true) of other layers, including operationalLayers, or below (false).',
              },
              itemId: {
                type: 'string',
                description:
                  "Unique string value indicating an item registered in ArcGIS Online or your organization's portal.",
              },
              layers: {
                type: 'array',
                description: 'An array of layer objects from the WMS service.',
                items: { $ref: '#/definitions/wmsLayer_layer_schema.json' },
                uniqueItems: !0,
              },
              layerType: {
                type: 'string',
                description: 'String indicating the layer type.',
                enum: ['WMS'],
              },
              listMode: {
                type: 'string',
                description:
                  'To show or hide the sublayer in the layer list. If the layer has sublayers, selecting `hide-children` will hide them in the layer list.',
                enum: ['hide', 'hide-children', 'show'],
                default: 'show',
              },
              mapUrl: {
                type: 'string',
                description:
                  'A string containing the URL of the WMS map. When using a WMS layer, you should also supply the url property. `mapUrl` is the URL returned by the capabilities to be used for the getMap requests.',
              },
              maxHeight: {
                type: 'number',
                description:
                  'A number defining the maximum height, in pixels, that should be requested from the service.',
              },
              maxScale: {
                type: 'number',
                description:
                  "A number representing the maximum scale at which the layer will be visible. The number is the scale's denominator.",
                minimum: 0,
              },
              maxWidth: {
                type: 'number',
                description:
                  'A number defining the maximum width, in pixels, that should be requested from the service.',
              },
              minScale: {
                type: 'number',
                description:
                  "A number representing the minimum scale at which the layer will be visible. The number is the scale's denominator.",
                minimum: 0,
              },
              opacity: {
                type: 'number',
                description:
                  'The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.',
                minimum: 0,
                maximum: 1,
                default: 1,
              },
              refreshInterval: {
                type: 'number',
                description:
                  'Refresh interval of the layer in minutes. Non-zero value indicates automatic layer refresh at the specified interval. Value of 0 indicates auto refresh is not enabled.',
              },
              showLegend: {
                type: 'boolean',
                description:
                  'Boolean value indicating whether to display the layer in the legend.',
                default: !0,
              },
              spatialReferences: {
                type: 'array',
                description:
                  'An array of numbers containing well-known IDs for spatial references supported by the service.',
                items: { type: 'integer', description: 'well-known ID' },
              },
              title: {
                type: 'string',
                description:
                  'A user-friendly string title for the layer that can be used in a table of contents.',
              },
              url: {
                type: 'string',
                description:
                  'The URL to the WMS service (`getCapabilities` URL).',
              },
              version: {
                type: 'string',
                description:
                  'A string containing the version number of the service.',
              },
              visibility: {
                type: 'boolean',
                description:
                  'Boolean property determining whether the layer is initially visible in the web map.',
                default: !0,
              },
              visibleLayers: {
                type: 'array',
                description:
                  'An array of layers that should appear visible. The array contains the names of the visible layers.',
                items: { type: 'string' },
                uniqueItems: !0,
              },
            },
            required: ['layerType', 'title'],
            additionalProperties: !1,
          },
          'slide_schema.json': {
            title: 'slide',
            type: 'object',
            description: 'A slide object used within a presentation.',
            properties: {
              baseMap: {
                description: 'The basemap to be displayed on the slide.',
                allOf: [
                  { $ref: '#/definitions/baseMap_schema.json' },
                  {
                    properties: { baseMapLayers: {}, id: {}, title: {} },
                    additionalProperties: !1,
                  },
                ],
              },
              description: {
                description:
                  'Text description of the individual presentation slide.',
                $ref: '#/definitions/description_schema.json',
              },
              environment: {
                description:
                  'Represents settings that affect the environment in which the web scene is displayed.',
                allOf: [
                  { $ref: '#/definitions/environment_schema.json' },
                  { properties: { lighting: {} }, additionalProperties: !1 },
                ],
              },
              ground: {
                description: 'The ground properties to be set in the slide.',
                $ref: '#/definitions/slide_ground_schema.json',
              },
              id: {
                type: 'string',
                description:
                  'The unique id of a slide within the slides property of a Presentation.',
              },
              thumbnail: { $ref: '#/definitions/thumbnail_schema.json' },
              title: { $ref: '#/definitions/title_schema.json' },
              viewpoint: { $ref: '#/definitions/viewpoint_schema.json' },
              visibleLayers: {
                type: 'array',
                description:
                  'An array of objects used to indicate the visible layers of the web scene.',
                items: { $ref: '#/definitions/visibleLayer_schema.json' },
              },
            },
            required: [
              'id',
              'thumbnail',
              'title',
              'viewpoint',
              'visibleLayers',
            ],
            additionalProperties: !1,
          },
          'customParameters_schema.json': {
            title: 'customParameters',
            type: 'object',
            description:
              'A sequence of custom parameters appended to the URL of all requests related to a layer.',
            patternProperties: { '.*': { type: 'string' } },
          },
          'definitionEditor_schema.json': {
            title: 'definitionEditor',
            type: 'object',
            description:
              'The definitionEditor stores interactive filters at the same level as layerDefinition.',
            properties: {
              inputs: {
                type: 'array',
                description: 'An array of input objects.',
                items: { $ref: '#/definitions/input_schema.json' },
              },
              parameterizedExpression: {
                type: 'string',
                description:
                  'A string value representing the where clause for the interactive filter.',
              },
            },
            additionalProperties: !1,
          },
          'floorFilter_schema.json': {
            title: 'floorFilter',
            type: 'object',
            description:
              'Configurable properties used by the floor filter widget.',
            properties: {
              enabled: {
                type: 'boolean',
                description:
                  'Indicates whether the floor filter is actively filtering the displayed content according to the floor filter selection.',
                default: !1,
              },
              facility: {
                type: 'string',
                description:
                  'Contains a facility identifier for the initially selected facility in the floor filter.',
              },
              level: {
                type: 'string',
                description:
                  'Contains a level identifier for the initially selected floor, which is used when filtering floor-aware layers.',
              },
              longNames: {
                type: 'boolean',
                description:
                  'Indicates whether the floor filter is showing long names instead of short names for floor levels.',
                default: !1,
              },
              minimized: {
                type: 'boolean',
                description:
                  'Indicates whether the floor filter has been minimized to show only the levels list instead of showing the full set of breadcrumbs.',
                default: !1,
              },
              pinnedLevels: {
                type: 'boolean',
                description:
                  'Indicates whether the floor filter has been pinned to show the floor levels list, instead of including the levels as a breadcrumb dropdown.',
                default: !1,
              },
              site: {
                type: 'string',
                description:
                  'Contains a site identifier for the initially selected site in the floor filter.',
              },
            },
            additionalProperties: !1,
          },
          'range_schema.json': {
            title: 'Range',
            description: 'Range object.',
            properties: {
              interactionMode: {
                type: 'string',
                description:
                  'Indicates the mode in which the active range should be presented to the user.',
                enum: ['picker', 'slider'],
              },
              numberOfStops: {
                type: 'integer',
                description:
                  'This is used to generate the activeRangeValues if activeRangeValues are not specified.',
              },
              stopInterval: {
                type: 'number',
                description: 'Interval in which stops should be generated.',
              },
            },
            oneOf: [
              { required: ['interactionMode', 'numberOfStops'] },
              { required: ['interactionMode', 'stopInterval'] },
            ],
            additionalProperties: !1,
          },
          'buildingSceneLayer_filterAuthoringInfoCheckbox_schema.json': {
            title: 'Metadata for checkbox based filter UI',
            type: 'object',
            description:
              'Client UI with checkbox representation for each filter type and filter value.',
            properties: {
              filterBlocks: {
                type: 'array',
                description: 'Array of filter block authoring infos.',
                items: {
                  $ref: '#/definitions/buildingSceneLayer_filterAuthoringInfo_filterBlock_schema.json',
                },
              },
              type: {
                type: 'string',
                description: 'Type of filter authoring info.',
                enum: ['checkbox'],
              },
            },
            required: ['filterBlocks', 'type'],
            additionalProperties: !1,
          },
          'buildingSceneLayer_filterBlock_schema.json': {
            title: 'Building Scene Layer Filter Block',
            type: 'object',
            description:
              'A filter block defines what elements will be filtered with a specific filter mode.  To ensure performance on client applications, it is not recommended to declare multiple filter blocks with the same filter mode. Filter blocks are contained in a filter for a building scene layer. Each filter includes at least one filter block.',
            properties: {
              filterExpression: {
                type: 'string',
                description:
                  'SQL expression to select features that belong to this filter block.',
              },
              filterMode: {
                $ref: '#/definitions/buildingSceneLayer_filterMode_schema.json',
              },
              title: {
                type: 'string',
                description: 'Title of the filter block.',
              },
            },
            required: ['filterExpression', 'filterMode', 'title'],
            additionalProperties: !1,
          },
          'elevationInfo_schema.json': {
            title: 'elevationInfo',
            type: 'object',
            description:
              'Elevation info defines how features are aligned to ground or other layers.',
            properties: {
              featureExpression: {
                type: 'object',
                description:
                  '<em>Deprecated with 1.8, use `featureExpressionInfo` instead</em>. `{"value":0}` ignores geometry z-values.',
                properties: { value: { type: 'number', enum: [0] } },
                minProperties: 1,
                additionalProperties: !1,
              },
              featureExpressionInfo: {
                description:
                  'An object that defines an expression for per-feature elevation. If not set, geometry.z values are used for elevation. `unit` is applied to the resulting expression value.',
                $ref: '#/definitions/featureExpressionInfo_schema.json',
              },
              mode: {
                type: 'string',
                description:
                  'Determines how the service elevation values are combined with the elevation of the scene.',
                enum: [
                  'absoluteHeight',
                  'onTheGround',
                  'relativeToGround',
                  'relativeToScene',
                ],
              },
              offset: {
                type: 'number',
                description:
                  'Offset is always added to the result of the above logic except for onTheGround where offset is ignored.',
              },
              unit: {
                type: 'string',
                description:
                  'A string value indicating the unit for the values in elevationInfo. Applies to both `offset` and `featureExpressionInfo`. Defaults to `meter` if not set. <a href="#unit"><sup>1</sup></a>',
                default: 'meter',
              },
            },
            required: ['mode'],
            additionalProperties: !1,
          },
          'featureReduction_schema.json': {
            title: 'Feature Reduction',
            description:
              'An object that specifies how features are reduced or aggregated, with the goal of decluttering the view or presenting the user with an aggregate visualization. If unset, every feature is rendered individually.',
            oneOf: [
              { $ref: '#/definitions/featureReduction_select_schema.json' },
              { type: 'null' },
            ],
          },
          'field_schema.json': {
            title: 'field',
            type: 'object',
            description: 'Contains information about an attribute field.',
            properties: {
              alias: {
                type: 'string',
                description: 'A string defining the field alias.',
              },
              defaultValue: {
                type: ['null', 'number', 'string'],
                description: 'The default value set for the field.',
              },
              domain: {
                description: 'The domain objects if applicable.',
                $ref: '#/definitions/domain_schema.json',
              },
              editable: {
                type: 'boolean',
                description:
                  'A Boolean defining whether this field is editable.',
              },
              length: {
                type: 'integer',
                description:
                  'A number defining how many characters are allowed in a string field.',
              },
              name: {
                type: 'string',
                description: 'A string defining the field name.',
              },
              nullable: {
                type: 'boolean',
                description:
                  'A Boolean defining whether this field can have a null value.',
              },
              type: {
                type: 'string',
                description: 'A string defining the field type.',
                enum: [
                  'esriFieldTypeBlob',
                  'esriFieldTypeDate',
                  'esriFieldTypeDouble',
                  'esriFieldTypeGeometry',
                  'esriFieldTypeGlobalID',
                  'esriFieldTypeGUID',
                  'esriFieldTypeInteger',
                  'esriFieldTypeLong',
                  'esriFieldTypeOID',
                  'esriFieldTypeRaster',
                  'esriFieldTypeSingle',
                  'esriFieldTypeSmallInteger',
                  'esriFieldTypeString',
                  'esriFieldTypeXML',
                ],
              },
            },
            additionalProperties: !1,
          },
          'pointCloudFilter_schema.json': {
            title: 'PointCloud Filter',
            type: 'object',
            description:
              'Filters applied to the pointCloud which will hide a point.',
            oneOf: [
              { $ref: '#/definitions/pointCloudBitfieldFilter_schema.json' },
              { $ref: '#/definitions/pointCloudReturnFilter_schema.json' },
              { $ref: '#/definitions/pointCloudValueFilter_schema.json' },
            ],
          },
          'layerFloorInfo_schema.json': {
            title: 'floorInfo',
            type: 'object',
            description: 'Contains floor-awareness information for a layer.',
            properties: {
              floorField: {
                type: 'string',
                description:
                  "The name of the attribute field that contains a floor's level ID used for floor filtering.",
              },
            },
            required: ['floorField'],
            additionalProperties: !1,
          },
          'rangeInfo_schema.json': {
            title: 'Range Information',
            description: 'Range Information.',
            properties: {
              currentRangeExtent: {
                type: 'array',
                description:
                  'Contains the min and max values within which the features are visible.',
                items: { type: 'number' },
                minItems: 2,
                maxItems: 2,
              },
              field: {
                type: 'string',
                description: 'Field name to used for the range.',
              },
              fullRangeExtent: {
                type: 'array',
                description:
                  'Contains the min and max values of all the features for this rangeInfo.',
                items: { type: 'number' },
                minItems: 2,
                maxItems: 2,
              },
              name: {
                type: 'string',
                description:
                  'A unique name that can be referenced by webMap.activeRanges.',
              },
              type: {
                type: 'string',
                description: 'Type of range object.',
                enum: ['rangeInfo'],
              },
            },
            required: ['field', 'name', 'type'],
            additionalProperties: !1,
          },
          'source_schema.json': {
            title: 'source',
            type: 'object',
            description:
              "Contains [dynamicDataLayer](dynamicDataLayer_source.md) object and [dynamicMapLayer](dynamicDataLayer_source.md) object. If the service supports dynamic layers, the [layerDefinition's ](layerDefinition.md) source property must be specified.",
            oneOf: [
              { $ref: '#/definitions/dynamicDataLayer_source_schema.json' },
              { $ref: '#/definitions/dynamicMapLayer_source_schema.json' },
            ],
          },
          'type_schema.json': {
            title: 'type',
            type: 'object',
            description: 'Contains information about an attribute field.',
            properties: {
              domains: {
                type: 'object',
                description:
                  'A comma-delimited series of domain objects for each domain in the type.',
                patternProperties: {
                  '.*': { $ref: '#/definitions/domain_schema.json' },
                },
              },
              id: {
                type: ['number', 'string'],
                description: 'A unique string or numerical ID for the type.',
              },
              name: {
                type: 'string',
                description: 'A user-friendly name for the type.',
              },
              templates: {
                type: 'array',
                description:
                  'Defined as a property of the layer definition when there are no types defined; otherwise, templates are defined as properties of the types.',
                items: { $ref: '#/definitions/template_schema.json' },
                uniqueItems: !0,
              },
            },
            required: ['id'],
            additionalProperties: !1,
          },
          'labelingInfo_schema.json': {
            title: 'labelingInfo',
            type: 'object',
            description:
              'The labelingInfo object specifies the label definition for a layer.',
            properties: {
              labelExpression: {
                type: 'string',
                description:
                  'Defines the expression for text of labels. <em>Deprecated on FeatureLayer, Use `labelExpressionInfo` instead.</em>',
              },
              labelExpressionInfo: {
                $ref: '#/definitions/labelExpressionInfo_schema.json',
              },
              labelPlacement: {
                type: 'string',
                description:
                  'This string property specifies the label placement with respect to that of its feature. A list of label placement values categorized by feature geometry types.',
                enum: [
                  'esriServerLinePlacementAboveAfter',
                  'esriServerLinePlacementAboveAlong',
                  'esriServerLinePlacementAboveBefore',
                  'esriServerLinePlacementAboveEnd',
                  'esriServerLinePlacementAboveStart',
                  'esriServerLinePlacementBelowAfter',
                  'esriServerLinePlacementBelowAlong',
                  'esriServerLinePlacementBelowBefore',
                  'esriServerLinePlacementBelowEnd',
                  'esriServerLinePlacementBelowStart',
                  'esriServerLinePlacementCenterAfter',
                  'esriServerLinePlacementCenterAlong',
                  'esriServerLinePlacementCenterBefore',
                  'esriServerLinePlacementCenterEnd',
                  'esriServerLinePlacementCenterStart',
                  'esriServerPointLabelPlacementAboveCenter',
                  'esriServerPointLabelPlacementAboveLeft',
                  'esriServerPointLabelPlacementAboveRight',
                  'esriServerPointLabelPlacementBelowCenter',
                  'esriServerPointLabelPlacementBelowLeft',
                  'esriServerPointLabelPlacementBelowRight',
                  'esriServerPointLabelPlacementCenterCenter',
                  'esriServerPointLabelPlacementCenterLeft',
                  'esriServerPointLabelPlacementCenterRight',
                  'esriServerPolygonPlacementAlwaysHorizontal',
                ],
              },
              maxScale: {
                type: 'number',
                description:
                  'Represents the maximum scale at which the layer definition will be applied.',
              },
              minScale: {
                type: 'number',
                description:
                  'Represents the minimum scale at which the layer definition will be applied.',
              },
              name: {
                type: 'string',
                description: 'The name of the label class.',
              },
              symbol: {
                description: 'The text symbol used to label.',
                $ref: '#/definitions/labelSymbol3D_schema.json',
              },
              useCodedValues: {
                type: 'boolean',
                description:
                  'Boolean value indicating whether to display the coded values for the specified field name(s).',
              },
              where: {
                type: 'string',
                description:
                  'String template used to determine which features to label.',
              },
            },
            additionalProperties: !1,
          },
          'renderer_schema.json': {
            title: 'renderer',
            type: 'object',
            description:
              'The renderer object contains the drawing information for the operationalLayer. This is a list of links to all the renderer objects.',
            oneOf: [
              { $ref: '#/definitions/classBreaksRenderer_schema.json' },
              { $ref: '#/definitions/pointCloudRenderers_schema.json' },
              { $ref: '#/definitions/rasterRenderers_schema.json' },
              { $ref: '#/definitions/simpleRenderer_schema.json' },
              {
                $ref: '#/definitions/uniqueValueFromStyleRenderer_schema.json',
              },
              { $ref: '#/definitions/uniqueValueRenderer_schema.json' },
            ],
          },
          'popupExpressionInfo_schema.json': {
            title: 'popupExpressionInfo',
            description: 'Arcade expression added to the pop-up.',
            properties: {
              expression: {
                type: 'string',
                description: 'The Arcade expression.',
              },
              name: {
                type: 'string',
                description: 'Unique identifier for the expression.',
              },
              returnType: {
                type: 'string',
                description:
                  'Return type of the Arcade expression, can be number or string. Defaults to string value. Number values are assumed to be `double`. This can be determined by the authoring client by executing the expression using a sample feature(s), although it can be corrected by the user. Knowing the returnType allows the authoring client to present fields in relevant contexts. For example, numeric fields in numeric contexts such as charts.',
                enum: ['number', 'string'],
              },
              title: {
                type: 'string',
                description: 'Title of the expression.',
              },
            },
            additionalProperties: !1,
          },
          'fieldInfo_schema.json': {
            title: 'fieldInfo',
            type: 'object',
            description:
              'Defines how a field in the dataset participates (or does not participate) in a popup window.',
            properties: {
              fieldName: {
                type: 'string',
                description:
                  'A string containing the field name as defined by the service. Anywhere that a fieldname is referenced as `{field-name} in popupInfo, an Arcade expression can also be referenced as `{expression/<expression-name>}`.',
              },
              format: {
                description:
                  'A format object used with numerical or date fields to provide more detail about how the value should be displayed in a popup window.',
                $ref: '#/definitions/format_schema.json',
              },
              isEditable: {
                type: 'boolean',
                description:
                  'A Boolean determining whether users can edit this field. Not applicable to Arcade expressions.',
                default: !1,
              },
              label: {
                type: 'string',
                description:
                  'A string containing the field alias. This can be overridden by the web map author. Not applicable to Arcade expressions as `title` is used instead.',
              },
              statisticType: {
                type: 'string',
                description:
                  'Used in a 1:many or many:many relationship to compute the statistics on the field to show in the popup.',
                enum: ['avg', 'count', 'max', 'min', 'stddev', 'sum', 'var'],
              },
              stringFieldOption: {
                type: 'string',
                description:
                  'A string determining what type of input box editors see when editing the field. Applies only to string fields. Not applicable to Arcade expressions.',
                enum: ['richtext', 'textarea', 'textbox'],
                default: 'textbox',
              },
              tooltip: {
                type: 'string',
                description:
                  'A string providing an editing hint for editors of the field. Not applicable to Arcade expressions.',
              },
              visible: {
                type: 'boolean',
                description:
                  'A Boolean determining whether the field is visible in the popup window.',
              },
            },
            additionalProperties: !1,
          },
          'popupLayerOptions_schema.json': {
            title: 'Layer Options',
            type: 'object',
            description: 'Additional options available for the popup layer.',
            properties: {
              returnTopmostRaster: {
                type: 'boolean',
                description:
                  'Indicates whether or not only the topmost raster should be displayed.',
              },
              showNoDataRecords: {
                type: 'boolean',
                description:
                  'Indicates whether or not the NoData records should be displayed.',
              },
            },
          },
          'mediaInfo_schema.json': {
            title: 'mediaInfo',
            type: 'object',
            description:
              'Defines an image or a chart to be displayed in a popup window.',
            oneOf: [
              { $ref: '#/definitions/mediaInfo_chart_schema.json' },
              { $ref: '#/definitions/mediaInfo_image_schema.json' },
            ],
          },
          'popupElement_schema.json': {
            title: 'popupElement',
            type: 'object',
            description:
              'Popup elements allow users to author popups, using multiple elements such as tabular views, string description, media (charts and images), and attachments of the attributes and control the order in which they appear. Specifically, popupElements do the following: 1) provide the ability to explicitly add a field/ value table in addition to a description, 2) allow adding multiple description elements, and 3) allow a user to author and consume elements of a popup in the order of their choosing.',
            oneOf: [
              { $ref: '#/definitions/popupElement_attachments_schema.json' },
              { $ref: '#/definitions/popupElement_expression_schema.json' },
              { $ref: '#/definitions/popupElement_fields_schema.json' },
              { $ref: '#/definitions/popupElement_media_schema.json' },
              { $ref: '#/definitions/popupElement_text_schema.json' },
            ],
          },
          'relatedRecordsInfo_schema.json': {
            title: 'relatedRecordsInfo',
            type: 'object',
            description:
              'The sort in the popupInfo for the parent feature. This impacts the sorting order for the returned child records.',
            properties: {
              orderByFields: {
                type: 'array',
                description:
                  'Array of orderByField objects indicating the field display order for the related records and whether they should be sorted in ascending `asc` or descending `desc` order.',
                items: { $ref: '#/definitions/orderByField_schema.json' },
              },
              showRelatedRecords: {
                type: 'boolean',
                description:
                  'Required boolean value indicating whether to display related records. If <code>true</code>, client should let the user navigate to the related records. Defaults to <code>true</code> if the layer participates in a relationship AND the related layer/table has already been added to the scene (either as an operationalLayer or as a table).',
              },
            },
          },
          'search_schema.json': {
            title: 'search',
            type: 'object',
            description:
              'An object specifying the search parameters set within the web scene.',
            properties: {
              enabled: {
                type: 'boolean',
                description:
                  'A boolean value indicating whether search functionality is enabled in the web scene.',
                default: !0,
              },
              hintText: {
                type: 'string',
                description:
                  'A string value used to indicate the hint provided with the search dialog.',
              },
              layers: {
                type: 'array',
                description:
                  'An array of objects that define search fields and search criteria for layers.',
                items: { $ref: '#/definitions/search_layer_schema.json' },
                uniqueItems: !0,
              },
              tables: {
                type: 'array',
                description:
                  'An array of objects that define search fields and search criteria for tables in the web map.',
                items: { $ref: '#/definitions/search_table_schema.json' },
                uniqueItems: !0,
              },
            },
            required: [],
            additionalProperties: !1,
          },
          'openStreetMapLayer_schema.json': {
            title: 'OpenStreetMap Layer (OpenStreetMap)',
            type: 'object',
            description:
              'Allows use of OpenStreetMap data for use in basemaps only.',
            properties: {
              id: {
                type: 'string',
                description:
                  'An identifying string for the layer, unique per scene.',
              },
              layerType: {
                type: 'string',
                description: 'String indicating the layer type.',
                enum: ['OpenStreetMap'],
              },
              listMode: {
                type: 'string',
                description: 'To show or hide layers in the layer list',
                enum: ['hide', 'show'],
                default: 'show',
              },
              maxScale: {
                type: 'number',
                description:
                  'A numeric property used to determine the maximum scale at which the layer is displayed.',
                minimum: 0,
              },
              minScale: {
                type: 'number',
                description:
                  'A numeric property used to determine the minimum scale at which the layer is displayed.',
                minimum: 0,
              },
              opacity: {
                type: 'number',
                description:
                  'The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.',
                minimum: 0,
                maximum: 1,
                default: 1,
              },
              title: {
                type: 'string',
                description: 'String title for the basemap layer.',
              },
              visibility: {
                type: 'boolean',
                description:
                  'Boolean property determining whether the layer is initially visible.',
                default: !0,
              },
            },
            required: ['id', 'layerType', 'title'],
            additionalProperties: !1,
          },
          'rasterDataElevationLayer_schema.json': {
            title: 'Raster Data Elevation Layer',
            type: 'object',
            description:
              'RasterDataElevationLayer is a single-band raster layer used for rendering elevation.',
            properties: {
              id: {
                type: 'string',
                description: 'A unique identifying string for the layer',
              },
              layerType: {
                type: 'string',
                description: 'String indicating the layer type',
                enum: ['RasterDataElevationLayer'],
              },
              listMode: {
                type: 'string',
                description:
                  'To show or hide the elevation layer in the layer list',
                enum: ['hide', 'show'],
                default: 'show',
              },
              path: {
                type: 'string',
                description:
                  'For offline data, a path to an ArcGIS Runtime supported raster data file. A URI format is used, starting with file: followed by a file system path. A relative path must be from the file which defines the layer. For example `file:../commondata/raster_data/beijing.tif`',
                pattern: '^file:.+$',
              },
              title: {
                type: 'string',
                description:
                  'A user-friendly string title for the layer that can be used in a table of contents. If this is not included, a title is derived from the service.',
              },
              visibility: {
                type: 'boolean',
                description:
                  'Boolean property determining whether the layer is initially visible in the web scene.',
                default: !0,
              },
            },
            required: ['id', 'layerType', 'path', 'title'],
            additionalProperties: !1,
          },
          'tiledElevationLayer_schema.json': {
            title: 'Tiled Elevation Layer',
            type: 'object',
            description:
              'Tiled Elevation Layer is a tile layer used for rendering elevation.',
            properties: {
              id: {
                type: 'string',
                description: 'A unique identifying string for the layer',
              },
              itemId: {
                type: 'string',
                description:
                  "Optional string containing the item ID of the service if it's registered on ArcGIS Online or your organization's portal.",
              },
              layerType: {
                type: 'string',
                description: 'String indicating the layer type',
                enum: ['ArcGISTiledElevationServiceLayer'],
              },
              listMode: {
                type: 'string',
                description:
                  'To show or hide the elevation layer in the layer list',
                enum: ['hide', 'show'],
                default: 'show',
              },
              path: {
                type: 'string',
                description:
                  'For offline data, a path to a tile package containing elevation data. A URI format is used, starting with `file:` followed by a file system path with an extension of `.tpk` or `.tpkx`. A relative path must be from the file which defines the layer. For example `file:../p20/portland.tpk`.',
                pattern: '^file:.+\\.tpkx?$',
              },
              title: {
                type: 'string',
                description:
                  'A user-friendly string title for the layer that can be used in a table of contents. If this is not included, a title is derived from the service.',
              },
              url: {
                type: 'string',
                description:
                  'The URL to the layer.If the layer is not from a web service but rather a feature collection, then the url property is omitted',
              },
              visibility: {
                type: 'boolean',
                description:
                  'Boolean property determining whether the layer is initially visible in the web scene.',
                default: !0,
              },
            },
            anyOf: [
              { required: ['id', 'layerType', 'title', 'url'] },
              { required: ['id', 'layerType', 'path', 'title'] },
            ],
            additionalProperties: !1,
          },
          'environment_background_color_schema.json': {
            title: 'color background',
            type: 'object',
            description:
              'Specifies a single color to fill the background of the scene with. The scene background is displayed behind any scene objects, stars and atmosphere.',
            properties: {
              color: { $ref: '#/definitions/color_schema.json' },
              transparency: {
                type: 'integer',
                description:
                  'The value has to lie between `100` (full transparency) and `0` (full opacity).',
                minimum: 0,
                maximum: 100,
              },
              type: {
                type: 'string',
                description: 'The type of background.',
                enum: ['color'],
              },
            },
            default: { type: 'color', color: [0, 0, 0] },
            required: ['color', 'type'],
            additionalProperties: !1,
          },
          'lighting_schema.json': {
            title: 'lighting',
            type: 'object',
            description:
              'Object containing information on how the scene is lit.',
            properties: {
              datetime: {
                type: 'number',
                description:
                  'The current date and time of the simulated sun. It is a number representing the number of milliseconds since 1 January, 1970 UTC.',
              },
              directShadows: {
                type: 'boolean',
                description:
                  'Indicates whether to show shadows cast by the sun.',
                default: !1,
              },
              displayUTCOffset: {
                type: 'number',
                description:
                  'UTC offset in decimal hours. Not to be applied to datetime for sun position, only to adjust display of datetime in UI. If displayUTCOffset is null, offset is calculated for the current location (approximate only).',
              },
            },
            additionalProperties: !1,
          },
          'camera_schema.json': {
            title: 'Camera',
            type: 'object',
            description:
              "The camera defines the position, tilt, and heading of the point from which the SceneView's visible extent is observed.",
            properties: {
              heading: {
                type: 'number',
                description:
                  'The heading of the camera in degrees. Heading is zero when north is the top of the screen. It increases as the view rotates clockwise.',
              },
              position: {
                description:
                  'The position of the camera defined by a map point.',
                $ref: '#/definitions/point_geometry_schema.json',
              },
              tilt: {
                type: 'number',
                description:
                  'The tilt of the camera in degrees with respect to the surface as projected down from the camera position. Tilt is zero when looking straight down at the surface and 90 degrees when the camera is looking parallel to the surface.',
              },
            },
            required: ['heading', 'position', 'tilt'],
            additionalProperties: !1,
          },
          'geometry_schema.json': {
            title: 'geometry',
            type: 'object',
            description:
              'Please refer to the links below for objects which define the JSON formats of geometry and spatial reference objects.',
            oneOf: [
              { $ref: '#/definitions/multipoint_geometry_schema.json' },
              { $ref: '#/definitions/point_geometry_schema.json' },
              { $ref: '#/definitions/polygon_geometry_schema.json' },
              { $ref: '#/definitions/polyline_geometry_schema.json' },
            ],
          },
          'locationInfo_schema.json': {
            title: 'locationInfo',
            type: 'object',
            description:
              'Defines how location information will be retrieved from a [CSV](csvLayer.md) file referenced through the web, ie. referenced by URL.',
            properties: {
              latitudeFieldName: {
                type: 'string',
                description:
                  'A string defining the field name that holds the latitude (Y) coordinate.',
              },
              locationType: {
                type: 'string',
                description: 'String value indicating location type.',
                enum: ['coordinates'],
              },
              longitudeFieldName: {
                type: 'string',
                description:
                  'A string defining the field name that holds the longitude (X) coordinate.',
              },
            },
            required: ['locationType'],
            additionalProperties: !1,
          },
          'mosaicRule_schema.json': {
            title: 'mosaicRule',
            type: 'object',
            description:
              'The image service uses a mosaic rule to mosaick multiple rasters on the fly. The mosaic rule parameter is used by many image service operations, for example, export image and identify operations.',
            properties: {
              ascending: {
                type: 'boolean',
                description:
                  'Indicate whether to use ascending or descending order.',
                default: !0,
              },
              fids: {
                type: 'array',
                description:
                  'A list that defines a subset of rasters used in the mosaic, be aware that the rasters may not be visible at all scales.',
                items: { type: 'integer' },
              },
              itemRenderingRule: {
                description:
                  'The rendering rule applies on items before mosaicking.',
                $ref: '#/definitions/renderingRule_schema.json',
              },
              lockRasterIds: {
                type: 'array',
                description:
                  'Lock a few rasters in the image service. Used together with `esriMosaicLockRaster`.',
                items: { type: 'integer' },
              },
              mosaicMethod: {
                type: 'string',
                description:
                  'A string value that determines how the selected rasters are ordered.',
                enum: [
                  'esriMosaicAttribute',
                  'esriMosaicCenter',
                  'esriMosaicLockRaster',
                  'esriMosaicNadir',
                  'esriMosaicNone',
                  'esriMosaicNorthwest',
                  'esriMosaicSeamline',
                  'esriMosaicViewpoint',
                ],
              },
              mosaicOperation: {
                type: 'string',
                description:
                  'Use the mosaic operation to resolve overlap pixel values: from first or last raster, use the min, max or mean of the pixel values, or blend them.',
                enum: [
                  'MT_BLEND',
                  'MT_FIRST',
                  'MT_LAST',
                  'MT_MAX',
                  'MT_MEAN',
                  'MT_MIN',
                  'MT_SUM',
                ],
                default: 'MT_FIRST',
              },
              multidimensionalDefinition: {
                type: 'array',
                description:
                  'An array of objects representing a slice from multidimensional data.',
                items: {
                  $ref: '#/definitions/multidimensionalDefinition_schema.json',
                },
              },
              sortField: {
                type: 'string',
                description:
                  'The field name used together with `esriMosaicAttribute` method.',
              },
              sortValue: {
                type: ['null', 'number', 'string'],
                description:
                  'The base sort value used together with `esriMosaicAttribute` method and `sortField` parameter.',
                default: 0,
              },
              viewpoint: {
                description:
                  'Use a view point along with `esriMosaicViewpoint`.',
                $ref: '#/definitions/point_geometry_schema.json',
              },
              where: {
                type: 'string',
                description:
                  '<em>Deprecated. Use `layerDefinition.definitionExpression` instead.</em>',
              },
            },
            required: ['mosaicMethod'],
            additionalProperties: !1,
          },
          'renderingRule_schema.json': {
            title: 'renderingRule',
            type: 'object',
            description:
              'Specifies the rendering rule for how the requested image should be rendered.',
            properties: {
              outputPixelType: {
                type: 'string',
                description:
                  "the output pixel type defines the output image's pixel type.",
                enum: [
                  'C128',
                  'C64',
                  'F32',
                  'F64',
                  'S16',
                  'S32',
                  'S8',
                  'U1',
                  'U16',
                  'U2',
                  'U32',
                  'U4',
                  'U8',
                  'UNKNOWN',
                ],
                default: 'UNKNOWN',
              },
              rasterFunction: {
                type: 'string',
                description:
                  'The raster function name identifies the processing or rendering to be performed. For a list of possible types, please see the [Raster Functions](http://resources.arcgis.com/en/help/arcgis-rest-api/#/Raster_Function_Objects/02r3000000rv000000/) help topic for additional information on this.',
              },
              rasterFunctionArguments: {
                type: 'object',
                description:
                  'The arguments for the referenced `rasterFunction`. For a description of arguments per raster function type, please see the [Raster Functions](http://resources.arcgis.com/en/help/arcgis-rest-api/#/Raster_Function_Objects/02r3000000rv000000/) help topic for additional information on this.',
              },
              variableName: {
                type: 'string',
                description: 'Variable name for the raster function.',
              },
            },
            additionalProperties: !1,
          },
          'layer_schema.json': {
            title: 'layer',
            type: 'object',
            description:
              'A layer object may allow overrides on popup content and drawing behavior for individual layers of a web service. This object also contains geographic features and their attributes when used in a feature collection.',
            properties: {
              defaultVisibility: {
                type: 'boolean',
                description:
                  'Default visibility of the layers in the map service.',
              },
              disablePopup: {
                type: 'boolean',
                description:
                  'Indicates whether to allow a client to ignore the popups defined on the layer. The popupInfo object could be saved in the map or item.',
                default: !1,
              },
              id: {
                type: 'integer',
                description: 'The layer id, as a numeric value.',
              },
              layerDefinition: {
                description:
                  'Additional properties that define drawing information and other configurations for the layer.',
                allOf: [
                  { $ref: '#/definitions/layerDefinition_schema.json' },
                  {
                    properties: {
                      definitionExpression: {},
                      drawingInfo: {
                        allOf: [
                          { $ref: '#/definitions/drawingInfo_schema.json' },
                          {
                            properties: {
                              labelingInfo: {},
                              renderer: {},
                              showLabels: {},
                              transparency: {},
                            },
                            additionalProperties: !1,
                          },
                        ],
                      },
                      source: {},
                    },
                    additionalProperties: !1,
                  },
                ],
              },
              layerUrl: {
                type: 'string',
                description:
                  'A URL to a service that should be used for all queries against the layer.',
              },
              listMode: {
                type: 'string',
                description:
                  'To show or hide the sublayer in the layer list. If the layer has sublayers, selecting `hide-children` will hide them in the layer list.',
                enum: ['hide', 'hide-children', 'show'],
              },
              maxScale: {
                type: 'number',
                description:
                  "A number representing the maximum scale at which the layer will be visible. The number is the scale's denominator.",
              },
              minScale: {
                type: 'number',
                description:
                  "A number representing the minimum scale at which the layer will be visible. The number is the scale's denominator.",
              },
              name: { type: 'string', description: 'The name of the layer.' },
              parentLayerId: {
                type: 'integer',
                description:
                  'If working with nested layers, this is the numeric value indicating the layer id of the next layer (parent) directly above the current referenced layer.',
              },
              popupInfo: {
                description:
                  'A popupInfo object defining the popup window content for the layer.',
                $ref: '#/definitions/popupInfo_schema.json',
              },
              showLegend: {
                type: 'boolean',
                description:
                  'A Boolean indicating if the layer should be shown in the legend in client applications.',
                default: !0,
              },
              subLayerIds: {
                type: 'array',
                description:
                  'If the layer is a parent layer, it will have one or more sub layers included in an array.',
                items: { type: 'integer' },
              },
            },
            additionalProperties: !1,
          },
          'multidimensionalDefinition_schema.json': {
            title: 'Multi-dimensional Definition',
            type: 'object',
            properties: {
              dimensionName: {
                type: 'string',
                description: 'Type of dimension being used (ex. StdTime).',
              },
              isSlice: {
                type: 'boolean',
                description: 'Is slice?',
                default: !0,
              },
              values: {
                type: 'array',
                description:
                  'Array where every element is either a single value, or an array of two values (lower and upper bound).',
                items: {
                  oneOf: [
                    { type: 'number' },
                    {
                      type: 'array',
                      items: { type: 'number' },
                      minItems: 2,
                      maxItems: 2,
                    },
                  ],
                },
              },
              variableName: {
                type: 'string',
                description: 'Name of the variable.',
              },
            },
            anyOf: [
              { required: ['variableName'] },
              { required: ['dimensionName', 'values'] },
            ],
            additionalProperties: !1,
            dependencies: {
              dimensionName: ['values'],
              values: ['dimensionName'],
            },
          },
          'voxelLayerDefinition_schema.json': {
            title: 'voxelLayerDefinition',
            type: 'object',
            description:
              'The voxelLayerDefinition contains drawing information for a voxel layer.',
            properties: {
              sections: {
                type: 'array',
                description:
                  'Array of metadata about sections. A section is a static plane through the voxel layer showing the variable the section was created at.',
                items: { $ref: '#/definitions/voxelSection_schema.json' },
                minItems: 0,
              },
              style: {
                description:
                  'Voxel style describes how the layer will be drawn including rendering and voxel representions that will be visible.',
                $ref: '#/definitions/voxelStyle_schema.json',
              },
            },
            additionalProperties: !1,
          },
          'tileInfo_schema.json': {
            title: 'tileInfo',
            type: 'object',
            description:
              'Tile information, returned from the WMTS OGC Web Service. The tileInfo will contain the spatial reference of the layer. tileInfo is the same json representation as the ArcGIS Map/Image service tileInfo except that it may contain a levelValue on the lod objects that should be used instead of the level in the templateUrl.',
            properties: {
              cols: {
                type: 'integer',
                description: "Requested tile's column.",
              },
              compressionQuality: {
                type: 'number',
                description: 'Compression quality of the tile.',
                minimum: 0,
                maximum: 100,
              },
              dpi: {
                type: 'number',
                description: 'The dpi of the tiling scheme.',
              },
              lods: {
                type: 'array',
                description:
                  'An array of levels of detail that define the tiling scheme.',
                items: { $ref: '#/definitions/lod_schema.json' },
                uniqueItems: !0,
              },
              origin: {
                description: 'The tiling scheme origin.',
                $ref: '#/definitions/point_geometry_schema.json',
              },
              rows: { type: 'integer', description: "Requested tile's row." },
              spatialReference: {
                description: 'The spatial reference of the tiling schema.',
                $ref: '#/definitions/spatialReference_schema.json',
              },
            },
            additionalProperties: !1,
          },
          'wmtsInfo_schema.json': {
            title: 'Web Map Tile Service Info',
            type: 'object',
            description:
              'Object defines and provides information about layers in a [WMTSLayer](webTiledLayer.md) service.',
            properties: {
              customLayerParameters: {
                type: 'object',
                description:
                  'A sequence of parameters used to append different custom parameters to a WMTS tile request. These parameters are applied to `GetTile`. The `customLayerParameters` property takes precedence if `customParameters` is also present.',
                patternProperties: { '.*': { type: 'string' } },
              },
              customParameters: {
                description:
                  'A sequence of parameters used to append custom parameters to all WMTS requests. These parameters are applied to `GetCapabilities` and `GetTile`. If used with the `customLayerParameters` property, `customParameters` will not take precedence.',
                $ref: '#/definitions/customParameters_schema.json',
              },
              layerIdentifier: {
                type: 'string',
                description:
                  'Identifier for the specific layer used in the WMTS service. Required input by the user.',
              },
              tileMatrixSet: {
                type: 'string',
                description: 'Tiling schema, set by the WMTS service.',
              },
              url: {
                type: 'string',
                description:
                  'URL to the WMTS web service. Required input by the user.',
              },
            },
            additionalProperties: !1,
          },
          'wfsInfo_schema.json': {
            title: 'Web Feature Service Info',
            type: 'object',
            description:
              'Object that defines and provides information about layers in a WFS service.',
            properties: {
              customParameters: {
                type: 'object',
                description:
                  'A sequence of parameters used to append custom parameters to all WFS requests. These parameters are applied to `GetCapabilities`, `DescribeFeatureType`, and `GetFeatures`.',
                patternProperties: { '.*': { type: 'string' } },
              },
              featureUrl: {
                type: 'string',
                description: 'URL of the WFS service operation.',
              },
              maxFeatures: {
                type: 'integer',
                description:
                  'Set this to limit the number of requested features that a GetFeature request presents.',
              },
              name: {
                type: 'string',
                description:
                  'The name of the WFS layer. This is used to set layer visibility.',
              },
              supportedSpatialReferences: {
                type: 'array',
                description: 'List of supported spatial reference IDs',
                items: { type: 'integer' },
              },
              swapXY: {
                type: 'boolean',
                description:
                  'Boolean value indicating whether X and Y axis are flipped.',
                default: !1,
              },
              version: {
                type: 'string',
                description:
                  'Value indicating which version of the WFS specification is used.',
              },
              wfsNamespace: {
                type: 'string',
                description: 'String indicating namespace.',
              },
            },
            additionalProperties: !1,
          },
          'wmsLayer_layer_schema.json': {
            title: 'WMSLayer layer',
            type: 'object',
            description:
              'A layer object may allow overrides on popup content and drawing behavior for individual layers of a web service.',
            properties: {
              legendUrl: {
                type: 'string',
                description: 'A string URL to a legend graphic for the layer.',
              },
              name: {
                type: 'string',
                description: 'A string containing a unique name for the layer.',
              },
              queryable: {
                type: 'boolean',
                description:
                  'Boolean specifying whether a layer is queryable or not.',
              },
              showPopup: {
                type: 'boolean',
                description:
                  'Boolean specifying whether to display popup or not.',
              },
              title: {
                type: 'string',
                description:
                  'A user-friendly string title for the layer that can be used in a table of contents.',
              },
            },
            additionalProperties: !1,
          },
          'description_schema.json': {
            title: 'description',
            type: 'object',
            description: 'Description object with text.',
            properties: {
              text: {
                type: 'string',
                description: 'Text to display as slide description.',
              },
            },
            required: ['text'],
            additionalProperties: !1,
          },
          'slide_ground_schema.json': {
            title: 'Ground',
            type: 'object',
            description:
              'Ground defines the main surface of the web scene, based on elevation layers. This object defines the ground properties to be set in the slides.',
            properties: {
              transparency: {
                type: 'integer',
                description:
                  'The transparency of the ground surface (including basemap). The value has to lie between `100` (full transparency) and `0` (full opacity).',
                minimum: 0,
                maximum: 100,
              },
            },
            additionalProperties: !1,
          },
          'thumbnail_schema.json': {
            title: 'thumbnail',
            type: 'object',
            description: 'Object containing a thumbnail image.',
            properties: {
              url: {
                type: 'string',
                description:
                  'The URI pointing to the thumbnail image. Can be a URL or a base64-encoded image.',
              },
            },
            required: ['url'],
            additionalProperties: !1,
          },
          'title_schema.json': {
            title: 'title',
            type: 'object',
            description: 'Text for the title of the individual slide.',
            properties: {
              text: {
                type: 'string',
                description: 'Text to display as slide title.',
              },
            },
            required: ['text'],
            additionalProperties: !1,
          },
          'visibleLayer_schema.json': {
            title: 'visibleLayer',
            type: 'object',
            description:
              'Object with layer id, used to indicate layer visibility in a slide.',
            properties: {
              id: {
                type: 'string',
                description:
                  'The id of the layer as listed on the operational layer.',
              },
              subLayerIds: {
                type: 'array',
                description:
                  'List of visible sublayer ids, as listed on the service of the layer.',
                items: { type: 'integer' },
              },
            },
            additionalProperties: !1,
          },
          'input_schema.json': {
            title: 'input',
            type: 'object',
            description:
              'The input objects specified by the [definitionEditor](definitionEditor.md).',
            properties: {
              hint: {
                type: 'string',
                description:
                  'A string value representing a hint for the input.',
              },
              parameters: {
                type: 'array',
                description: 'An array of parameter objects.',
                items: { $ref: '#/definitions/parameter_schema.json' },
              },
              prompt: {
                type: 'string',
                description:
                  'A string value representing the prompt for the input.',
              },
            },
            additionalProperties: !1,
          },
          'buildingSceneLayer_filterAuthoringInfo_filterBlock_schema.json': {
            title: 'Filter Authoring Info for Filter Blocks',
            type: 'object',
            description:
              'The filter authoring info object contains metadata about the authoring process for creating a filter block object. This allows the authoring client to save specific, overridable settings.  The next time it is accessed via an authoring client, their selections are remembered. Non-authoring clients can ignore it.',
            properties: {
              filterTypes: {
                type: 'array',
                description:
                  'Array of defined filter types. Each filter type has an array of filter values.',
                items: {
                  $ref: '#/definitions/buildingSceneLayer_filterAuthoringInfo_filterType_schema.json',
                },
              },
            },
            required: ['filterTypes'],
            additionalProperties: !1,
          },
          'buildingSceneLayer_filterMode_schema.json': {
            title: 'Filter Mode',
            type: 'object',
            description:
              'Filter mode represents the way elements draw when participating in a filter block.',
            oneOf: [
              {
                $ref: '#/definitions/buildingSceneLayer_filterModeSolid_schema.json',
              },
              {
                $ref: '#/definitions/buildingSceneLayer_filterModeWireFrame_schema.json',
              },
              {
                $ref: '#/definitions/buildingSceneLayer_filterModeXray_schema.json',
              },
            ],
          },
          'featureExpressionInfo_schema.json': {
            title: 'featureExpressionInfo',
            type: 'object',
            description:
              'An object that defines an expression for per-feature elevation.',
            properties: {
              expression: {
                type: 'string',
                description:
                  'An [Arcade expression](https://developers.arcgis.com/arcade/) evaluating to a number.',
                minLength: 1,
              },
              title: {
                type: 'string',
                description: 'Title of the expression.',
                minLength: 1,
              },
            },
            required: ['expression'],
            additionalProperties: !1,
          },
          'featureReduction_select_schema.json': {
            title: 'Feature Reduction: Selection',
            type: 'object',
            description:
              'Feature reduction of type `selection` declutters the screen by hiding features that would otherwise intersect with other features on screen. The default behavior of this feature reduction type is to select features by depth order, i.e. hide all features that would otherwise be overlapped by at least one other feature which is closer to the viewer.',
            properties: {
              type: {
                type: 'string',
                description:
                  'A string value indicating the feature reduction type.',
                enum: ['selection'],
              },
            },
          },
          'domain_schema.json': {
            title: 'domain',
            type: 'object',
            description:
              'Domains specify the set of valid values for a field. The links below are the available domains.',
            oneOf: [
              { $ref: '#/definitions/codedValue_domain_schema.json' },
              { $ref: '#/definitions/inherited_domain_schema.json' },
              { $ref: '#/definitions/range_domain_schema.json' },
            ],
          },
          'pointCloudBitfieldFilter_schema.json': {
            title: 'PointCloud Bitfield Filter',
            type: 'object',
            description:
              'Filters points based on the value of the specified bitfield attribute.',
            properties: {
              field: {
                type: 'string',
                description:
                  'The name of the field that is used for the filter.',
              },
              requiredClearBits: {
                type: 'array',
                description:
                  'List ALL bit numbers that must cleared (=0) for the point to be kept. bit 0 is LSB.',
                items: { type: 'integer' },
              },
              requiredSetBits: {
                type: 'array',
                description:
                  ' List ALL bit numbers that must set (=1) for the point to be kept. bit 0 is LSB.',
                items: { type: 'integer' },
              },
              type: { type: 'string', enum: ['pointCloudBitfieldFilter'] },
            },
            anyOf: [
              { required: ['requiredClearBits'] },
              { required: ['requiredSetBits'] },
            ],
            required: ['field', 'type'],
            additionalProperties: !1,
          },
          'pointCloudReturnFilter_schema.json': {
            title: 'PointCloud Return Filter',
            type: 'object',
            description:
              'Filters points based on the value of the return number/return count.',
            properties: {
              field: {
                type: 'string',
                description:
                  'The name of the field that is used for the filter.',
              },
              includedReturns: {
                type: 'array',
                description:
                  'All points with at least one specified return status will be kept. Status values: `last`, `firstOfMany`, `lastOfMany`, `single`',
                items: {
                  type: 'string',
                  enum: ['firstOfMany', 'last', 'lastOfMany', 'single'],
                },
              },
              type: { type: 'string', enum: ['pointCloudReturnFilter'] },
            },
            required: ['field', 'includedReturns', 'type'],
            additionalProperties: !1,
          },
          'pointCloudValueFilter_schema.json': {
            title: 'PointCloud Value Filter',
            type: 'object',
            description:
              'Filters points based on the value of an specified attribute.',
            properties: {
              field: {
                type: 'string',
                description:
                  'The name of the field that is used for the filter.',
              },
              mode: {
                type: 'string',
                description:
                  'Defines if values should be included or excluded.',
                enum: ['exclude', 'include'],
              },
              type: {
                type: 'string',
                description:
                  'Filters points based on the value of an specified attribute.',
                enum: ['pointCloudValueFilter'],
              },
              values: {
                type: 'array',
                description: 'list of values',
                items: { type: 'number' },
              },
            },
            required: ['field', 'mode', 'type', 'values'],
            additionalProperties: !1,
          },
          'dynamicDataLayer_source_schema.json': {
            title: 'Dynamic data layer',
            type: 'object',
            description:
              'A dynamic data layer derived from a registered workspace. More information on this can be found in the [ArcGIS REST API help](http://resources.arcgis.com/en/help/rest/apiref/layersource.html).',
            properties: {
              dataSource: {
                description: "The layer's data source.",
                $ref: '#/definitions/dataSource_schema.json',
              },
              fields: {
                type: 'array',
                description:
                  'An array of objects specifying information about an attribute field.',
                items: { $ref: '#/definitions/field_schema.json' },
                uniqueItems: !0,
              },
              type: {
                type: 'string',
                description: 'A string value indicating the type.',
                enum: ['dataLayer'],
              },
            },
            required: ['dataSource', 'type'],
            additionalProperties: !1,
          },
          'dynamicMapLayer_source_schema.json': {
            title: 'Dynamic map layer',
            type: 'object',
            description:
              'A dynamic map layer refers to a layer in the current map service. More information on this can be found in the [ArcGIS REST API help](http://resources.arcgis.com/en/help/rest/apiref/layersource.html).',
            properties: {
              gdbVersion: {
                type: 'string',
                description:
                  'If applicable, specify this to use an alternate geodatabase version.',
              },
              mapLayerId: {
                type: 'integer',
                description: "The current map layer's id.",
              },
              type: {
                type: 'string',
                description: 'A string value indicating the type.',
                enum: ['mapLayer'],
              },
            },
            required: ['mapLayerId', 'type'],
            additionalProperties: !1,
          },
          'template_schema.json': {
            title: 'template',
            type: 'object',
            description:
              'Templates describe features that can be created in a layer. They are generally used with feature collections and editable web-based CSV layers. Templates are not used with ArcGIS feature services as these already have templates defined in the service. They are also defined as properties of the layer definition when there are no defined types. Otherwise, templates are defined as properties of the types.',
            properties: {
              description: {
                type: 'string',
                description:
                  'A string value containing a detailed description of the template.',
              },
              drawingTool: {
                type: 'string',
                description:
                  'An optional string that can define a client-side drawing tool to be used with this feature.',
                enum: [
                  'esriFeatureEditToolAutoCompletePolygon',
                  'esriFeatureEditToolCircle',
                  'esriFeatureEditToolDownArrow',
                  'esriFeatureEditToolEllipse',
                  'esriFeatureEditToolFreehand',
                  'esriFeatureEditToolLeftArrow',
                  'esriFeatureEditToolLine',
                  'esriFeatureEditToolNone',
                  'esriFeatureEditToolPoint',
                  'esriFeatureEditToolPolygon',
                  'esriFeatureEditToolRectangle',
                  'esriFeatureEditToolRightArrow',
                  'esriFeatureEditToolText',
                  'esriFeatureEditToolTriangle',
                  'esriFeatureEditToolUpArrow',
                ],
              },
              name: {
                type: 'string',
                description:
                  'A string containing a user-friendly name for the template.',
              },
              prototype: {
                description:
                  'A feature object representing a prototypical feature for the template.',
                $ref: '#/definitions/feature_schema.json',
              },
            },
            additionalProperties: !1,
          },
          'labelExpressionInfo_schema.json': {
            title: 'labelExpressionInfo',
            type: 'object',
            description:
              "The labelExpressionInfo allows label text to be read similar to that of Popups's description property.",
            properties: {
              expression: {
                type: 'string',
                description:
                  'An [Arcade expression](https://developers.arcgis.com/arcade/) evaluating to either a string or a number.',
              },
            },
            additionalProperties: !1,
          },
          'labelSymbol3D_schema.json': {
            title: 'LabelSymbol3D',
            type: 'object',
            description:
              'LabelSymbol3D is used to render labels for features from a FeatureLayer in a 3D SceneView.',
            properties: {
              callout: { $ref: '#/definitions/callout_schema.json' },
              symbolLayers: {
                type: 'array',
                description:
                  'A Collection of Symbol3DLayer objects used to visualize the graphic or feature.',
                items: {
                  oneOf: [
                    { $ref: '#/definitions/textSymbol3DLayer_schema.json' },
                  ],
                },
              },
              type: {
                type: 'string',
                description: 'Specifies the type of symbol used.',
                enum: ['LabelSymbol3D'],
              },
              verticalOffset: {
                $ref: '#/definitions/verticalOffset_schema.json',
              },
            },
            required: ['symbolLayers', 'type'],
            additionalProperties: !1,
          },
          'classBreaksRenderer_schema.json': {
            title: 'ClassBreaks Renderer',
            type: 'object',
            description:
              'A class breaks renderer symbolizes based on the value of some numeric attribute. The classBreakInfo define the values at which the symbology changes.',
            properties: {
              authoringInfo: {
                description:
                  'An object containing metadata about the authoring process for creating a renderer object. This allows the authoring clients to save specific overridable settings so that next time it is accessed via the UI, their selections are remembered. Non-authoring clients can ignore it.',
                $ref: '#/definitions/authoringInfo_schema.json',
              },
              backgroundFillSymbol: {
                description: 'Supported only for polygon features.',
                $ref: '#/definitions/polygonSymbol3D_schema.json',
              },
              classBreakInfos: {
                type: 'array',
                description: 'Array of classBreakInfo objects.',
                items: { $ref: '#/definitions/classBreakInfo_schema.json' },
              },
              defaultLabel: {
                type: 'string',
                description:
                  'Label for the default symbol used to draw unspecified values.',
              },
              defaultSymbol: {
                description: 'Symbol used when a value cannot be classified.',
                $ref: '#/definitions/symbol3D_schema.json',
              },
              field: {
                type: 'string',
                description: 'Attribute field used for renderer.',
              },
              legendOptions: {
                description:
                  'A legend containing one title, which is a string describing the renderer in the legend.',
                $ref: '#/definitions/rendererLegendOptions_schema.json',
              },
              minValue: {
                type: 'number',
                description:
                  'The minimum numeric data value needed to begin class breaks.',
              },
              normalizationField: {
                type: 'string',
                description:
                  'Used when normalizationType is field. The string value indicating the attribute field by which the data value is normalized.',
              },
              normalizationTotal: {
                type: 'number',
                description:
                  'Used when normalizationType is percent-of-total, this number property contains the total of all data values.',
              },
              normalizationType: {
                type: 'string',
                description: 'Determine how the data was normalized.',
                enum: [
                  'esriNormalizeByField',
                  'esriNormalizeByLog',
                  'esriNormalizeByPercentOfTotal',
                ],
              },
              type: {
                type: 'string',
                description: 'Specifies the type of renderer used.',
                enum: ['classBreaks'],
              },
              valueExpression: {
                type: 'string',
                description:
                  'An [Arcade expression](https://developers.arcgis.com/arcade/) evaluating to a number.',
              },
              valueExpressionTitle: {
                type: 'string',
                description:
                  'The title identifying and describing the associated [Arcade](https://developers.arcgis.com/arcade/) expression as defined in the `valueExpression` property.',
              },
              visualVariables: {
                type: 'array',
                description:
                  'An array of objects used to set rendering properties.',
                items: { $ref: '#/definitions/visualVariable_schema.json' },
              },
            },
            required: ['classBreakInfos', 'type'],
            additionalProperties: !1,
          },
          'pointCloudRenderers_schema.json': {
            title: 'PointCloud Renderers',
            type: 'object',
            description: 'Renderers for PointCloud Layers.',
            oneOf: [
              {
                $ref: '#/definitions/pointCloudClassBreaksRenderer_schema.json',
              },
              { $ref: '#/definitions/pointCloudRGBRenderer_schema.json' },
              { $ref: '#/definitions/pointCloudStretchRenderer_schema.json' },
              {
                $ref: '#/definitions/pointCloudUniqueValueRenderer_schema.json',
              },
            ],
          },
          'rasterRenderers_schema.json': {
            title: 'Raster Renderers',
            type: 'object',
            description: 'Renderers for Raster Layers.',
            oneOf: [
              { $ref: '#/definitions/rasterClassBreaksRenderer_schema.json' },
              { $ref: '#/definitions/rasterColormapRenderer_schema.json' },
              { $ref: '#/definitions/rasterShadedReliefRenderer_schema.json' },
              { $ref: '#/definitions/rasterStretchRenderer_schema.json' },
              { $ref: '#/definitions/rasterUniqueValueRenderer_schema.json' },
            ],
          },
          'simpleRenderer_schema.json': {
            title: 'Simple Renderer',
            type: 'object',
            description:
              'A simple renderer is a renderer that uses one symbol only.',
            properties: {
              authoringInfo: {
                description:
                  'An object containing metadata about the authoring process for creating a renderer object. This allows the authoring clients to save specific overridable settings so that next time it is accessed via the UI, their selections are remembered. Non-authoring clients can ignore it.',
                $ref: '#/definitions/authoringInfo_schema.json',
              },
              description: {
                type: 'string',
                description: 'Description of the renderer.',
              },
              label: {
                type: 'string',
                description:
                  'The text string that is displayed in the table of contents.',
              },
              symbol: {
                description:
                  'An object that represents how all features will be drawn.',
                $ref: '#/definitions/symbol3D_schema.json',
              },
              type: {
                type: 'string',
                description: 'Specifies the type of renderer used.',
                enum: ['simple'],
              },
              visualVariables: {
                type: 'array',
                description:
                  'An array of objects used to set rendering properties.',
                items: { $ref: '#/definitions/visualVariable_schema.json' },
              },
            },
            required: ['symbol', 'type'],
            additionalProperties: !1,
          },
          'uniqueValueFromStyleRenderer_schema.json': {
            title: 'UniqueValueFromStyle Renderer',
            type: 'object',
            description:
              'This is a special version of UniqueValue Renderer, which loads uniqueValue infos from a style definition.',
            properties: {
              defaultLabel: {
                type: 'string',
                description:
                  'Default string for the default symbol used to draw unspecified values.',
              },
              defaultSymbol: {
                description:
                  'The defaultSymbol on the renderer that get assigned to features with no value or features that do not fall within the configured data.',
                $ref: '#/definitions/symbol3D_schema.json',
              },
              field1: {
                type: 'string',
                description:
                  'String value specifying the first field used to render matching values.',
              },
              styleName: {
                type: 'string',
                description:
                  'A registered web style name. Can not be used in conjunction with styleUrl.',
              },
              styleUrl: {
                type: 'string',
                description:
                  'URL that points to the web style definition. Can not be used in conjunction with styleName.',
              },
              type: {
                type: 'string',
                description: 'Specifies the type of renderer used.',
                enum: ['uniqueValue'],
              },
              visualVariables: {
                type: 'array',
                description:
                  'An array of visualVariable objects used for continuous color or size, simple, and unique values with feature opacity.',
                items: { $ref: '#/definitions/visualVariable_schema.json' },
              },
            },
            oneOf: [
              { required: ['styleName', 'type'] },
              { required: ['styleUrl', 'type'] },
            ],
            additionalProperties: !1,
          },
          'uniqueValueRenderer_schema.json': {
            title: 'UniqueValue Renderer',
            type: 'object',
            description:
              'A unique value renderer symbolizes based on the value of an attribute.',
            properties: {
              authoringInfo: {
                description:
                  'An object containing metadata about the authoring process for creating a renderer object. This allows the authoring clients to save specific overridable settings so that next time it is accessed via the UI, their selections are remembered. Non-authoring clients can ignore it.',
                $ref: '#/definitions/authoringInfo_schema.json',
              },
              backgroundFillSymbol: {
                description:
                  'Used for polygon features. It can only be used for bivariate types and size rendering.',
                $ref: '#/definitions/polygonSymbol3D_schema.json',
              },
              defaultLabel: {
                type: 'string',
                description:
                  'Default label for the default symbol used to draw unspecified values.',
              },
              defaultSymbol: {
                description:
                  'The defaultSymbol on the renderer that get assigned to features with no value or features that do not fall within the configured data.',
                $ref: '#/definitions/symbol3D_schema.json',
              },
              field1: {
                type: 'string',
                description: 'Attribute field renderer uses to match values.',
              },
              field2: {
                type: 'string',
                description:
                  'If needed, specify an additional attribute field the renderer uses to match values.',
              },
              field3: {
                type: 'string',
                description:
                  'If needed, specify an additional attribute field the renderer uses to match values.',
              },
              fieldDelimiter: {
                type: 'string',
                description:
                  'String inserted between the values if multiple attribute fields are specified.',
                default: ', ',
              },
              legendOptions: {
                description:
                  'A legend containing one title, which is a string describing the renderer in the legend.',
                $ref: '#/definitions/rendererLegendOptions_schema.json',
              },
              type: {
                type: 'string',
                description: 'Specifies the type of renderer used.',
                enum: ['uniqueValue'],
              },
              uniqueValueInfos: {
                type: 'array',
                description: 'An array of uniqueValueInfo objects.',
                items: { $ref: '#/definitions/uniqueValueInfo_schema.json' },
              },
              valueExpression: {
                type: 'string',
                description:
                  'An [Arcade expression](https://developers.arcgis.com/arcade/) evaluating to either a string or a number.',
              },
              valueExpressionTitle: {
                type: 'string',
                description:
                  'The title identifying and describing the associated [Arcade](https://developers.arcgis.com/arcade/) expression as defined in the `valueExpression` property.',
              },
              visualVariables: {
                type: 'array',
                description:
                  'An array of objects used to set rendering properties.',
                items: { $ref: '#/definitions/visualVariable_schema.json' },
              },
            },
            required: ['type', 'uniqueValueInfos'],
            additionalProperties: !1,
          },
          'format_schema.json': {
            title: 'format',
            type: 'object',
            description:
              'The format object can be used with numerical or date fields to provide more detail about how values should be formatted for display.',
            properties: {
              dateFormat: {
                type: 'string',
                description:
                  'A string used with date fields to specify how the date should be formatted.',
                enum: [
                  'dayShortMonthYear',
                  'dayShortMonthYearLongTime',
                  'dayShortMonthYearLongTime24',
                  'dayShortMonthYearShortTime',
                  'dayShortMonthYearShortTime24',
                  'longDate',
                  'longDateLongTime',
                  'longDateLongTime24',
                  'longDateShortTime',
                  'longDateShortTime24',
                  'longMonthDayYear',
                  'longMonthDayYearLongTime',
                  'longMonthDayYearLongTime24',
                  'longMonthDayYearShortTime',
                  'longMonthDayYearShortTime24',
                  'longMonthYear',
                  'shortDate',
                  'shortDateLE',
                  'shortDateLELongTime',
                  'shortDateLELongTime24',
                  'shortDateLEShortTime',
                  'shortDateLEShortTime24',
                  'shortDateLongTime',
                  'shortDateLongTime24',
                  'shortDateShortTime',
                  'shortDateShortTime24',
                  'shortMonthYear',
                  'year',
                ],
              },
              digitSeparator: {
                type: 'boolean',
                description:
                  'A Boolean used with numerical fields. A value of true allows the number to have a digit (or thousands) separator. Depending on the locale, this separator is a decimal point or a comma. A value of false means that no separator will be used.',
              },
              places: {
                type: 'integer',
                description:
                  'An integer used with numerical fields to specify the number of decimal places. Any places beyond this value are rounded.',
              },
            },
            additionalProperties: !1,
          },
          'mediaInfo_chart_schema.json': {
            title: 'mediaInfo chart',
            type: 'object',
            description: 'Defines a chart to be displayed in a popup window.',
            properties: {
              altText: {
                type: 'string',
                description:
                  'A string providing the alternate text for the media.',
              },
              caption: {
                type: 'string',
                description: 'A string caption describing the media.',
              },
              title: {
                type: 'string',
                description: 'A string title for the media.',
              },
              type: {
                type: 'string',
                description: 'A string defining the type of media.',
                enum: ['barchart', 'columnchart', 'linechart', 'piechart'],
              },
              value: {
                $ref: '#/definitions/mediaInfo_chart_value_schema.json',
              },
            },
            required: ['type', 'value'],
            additionalProperties: !1,
          },
          'mediaInfo_image_schema.json': {
            title: 'mediaInfo image',
            type: 'object',
            description: 'Defines an image to be displayed in a popup window.',
            properties: {
              altText: {
                type: 'string',
                description:
                  'A string providing the alternate text for the media.',
              },
              caption: {
                type: 'string',
                description: 'A string caption describing the media.',
              },
              refreshInterval: {
                type: 'number',
                description:
                  "Refresh interval of the layer in minutes. Non-zero value indicates automatic layer refresh at the specified interval. Value of 0 indicates auto refresh is not enabled. If the property does not exist, it's equivalent to having a value of 0.",
              },
              title: {
                type: 'string',
                description: 'A string title for the media.',
              },
              type: {
                type: 'string',
                description: 'A string defining the type of media.',
                enum: ['image'],
              },
              value: {
                $ref: '#/definitions/mediaInfo_image_value_schema.json',
              },
            },
            required: ['type', 'value'],
            additionalProperties: !1,
          },
          'popupElement_attachments_schema.json': {
            title: 'popupElement attachments',
            type: 'object',
            description: 'Configures attachments in popup elements.',
            properties: {
              description: {
                type: 'string',
                description:
                  'An optional string value describing the element in detail. This property does not apply when the `type` is `text` or `expression`.',
              },
              displayType: {
                type: 'string',
                description:
                  'This property applies to elements of type `attachments`. A string value indicating how to display the attachment. If `list` is specified, attachments show as links. If `preview` is specified, attachments expand to the width of the pop-up. Setting the value to `auto` allows applications to choose the most suitable default experience for their application. ',
                enum: ['auto', 'list', 'preview'],
              },
              title: {
                type: 'string',
                description:
                  'An optional string value indicating what the element represents. This property does not apply when the `type` is `text` or `expression`.',
              },
              type: { type: 'string', enum: ['attachments'] },
            },
            required: ['type'],
            additionalProperties: !1,
          },
          'popupElement_expression_schema.json': {
            title: 'popupElement expression',
            type: 'object',
            description: 'A pop-up element defined by an arcade expression.',
            properties: {
              expressionInfo: {
                description:
                  'This property applies to elements of type `expression` . An Arcade expression that defines the pop-up element content. The return type will always be `dictionary` as outlined [here](https://developers.arcgis.com/arcade/guide/profiles/#popup-element).',
                $ref: '#/definitions/popupElementExpressionInfo_schema.json',
              },
              type: {
                type: 'string',
                description:
                  'String value indicating which elements to use. When an element is of type `expression` then `expressionInfo` is the only valid property.',
                enum: ['expression'],
              },
            },
          },
          'popupElement_fields_schema.json': {
            title: 'popupElement fields',
            type: 'object',
            description: 'Configures fields in popup elements.',
            properties: {
              attributes: {
                type: 'object',
                description:
                  'A dictionary of key value pairs representing attributes to be used instead of fields and their values. This property is only used when an element of type `fields` is being returned inside an element of type `expression` and should be returned as part of the arcade expression itself. This property allows passing arcade derived attribute values into `fields` elements. More details can be found [here](https://developers.arcgis.com/arcade/guide/profiles/#popup-element).',
              },
              description: {
                type: 'string',
                description:
                  'An optional string value describing the element in detail. This property does not apply when the `type` is `text` or `expression`.',
              },
              fieldInfos: {
                type: 'array',
                description:
                  'It is an array of `fieldInfo` objects representing a field/value pair displayed as a table within the popupElement. If the `fieldInfos` property is not provided, the popupElement will display whatever is specified directly in the `popupInfo.fieldInfos` property.',
                items: { $ref: '#/definitions/fieldInfo_schema.json' },
              },
              title: {
                type: 'string',
                description:
                  'An optional string value indicating what the element represents. This property does not apply when the `type` is `text` or `expression`.',
              },
              type: { type: 'string', enum: ['fields'] },
            },
            required: ['type'],
            additionalProperties: !1,
          },
          'popupElement_media_schema.json': {
            title: 'popupElement media',
            type: 'object',
            description: 'Configures media in popup elements.',
            properties: {
              attributes: {
                type: 'object',
                description:
                  'A dictionary of key value pairs representing attributes to be used instead of fields and their values.  This property is only used when an element of type  `media` is being returned inside an element of type `expression` and should be returned as part of the arcade expression itself. This property allows passing arcade derived attribute values into `mediaInfos` such as charts. More details can be found [here](https://developers.arcgis.com/arcade/guide/profiles/#popup-element).',
              },
              description: {
                type: 'string',
                description:
                  'An optional string value describing the element in detail. This property does not apply when the `type` is `text` or `expression`.',
              },
              mediaInfos: {
                type: 'array',
                description:
                  'An array of `mediaInfo` objects representing an image or chart for display. If no `mediaInfos` property is provided, the popupElement will display whatever is specified in the `popupInfo.mediaInfos` property.',
                items: { $ref: '#/definitions/mediaInfo_schema.json' },
              },
              title: {
                type: 'string',
                description:
                  'An optional string value indicating what the element represents. This property does not apply when the `type` is `text` or `expression`.',
              },
              type: { type: 'string', enum: ['media'] },
            },
            required: ['type'],
            additionalProperties: !1,
          },
          'popupElement_text_schema.json': {
            title: 'popupElement text',
            type: 'object',
            description: 'Configures text in popup elements.',
            properties: {
              text: {
                type: 'string',
                description:
                  'This property applies to elements of type `text`. This is string value indicating the text to be displayed within the popupElement. If no `text` property is provided, the popupElement will display whatever is specified in the [popupInfo.description](popupInfo.md) property.',
              },
              type: { type: 'string', enum: ['text'] },
            },
            required: ['type'],
            additionalProperties: !1,
          },
          'orderByField_schema.json': {
            title: 'orderByField',
            type: 'object',
            description:
              'Object indicating the field display order for the related records and whether they should be sorted in ascending or descending order.',
            properties: {
              field: {
                type: 'string',
                description:
                  'The attribute value of the field selected that will drive the sorting of related records.',
              },
              order: {
                type: 'string',
                description:
                  'Set the ascending or descending sort order of the returned related records.',
                enum: ['asc', 'desc'],
              },
            },
          },
          'search_layer_schema.json': {
            title: 'search layer',
            type: 'object',
            description: 'Layer configuration for search.',
            properties: {
              field: { $ref: '#/definitions/search_field_schema.json' },
              id: {
                type: 'string',
                description: 'A string identifying the layer.',
              },
              subLayer: {
                type: 'integer',
                description: 'Optional index for a sublayer.',
              },
            },
            required: ['field', 'id'],
            additionalProperties: !1,
          },
          'search_table_schema.json': {
            title: 'search table',
            type: 'object',
            description: 'Search configuration for table.',
            properties: {
              field: { $ref: '#/definitions/search_field_schema.json' },
              id: {
                type: 'string',
                description: 'A string identifying the table.',
              },
            },
            required: ['field', 'id'],
            additionalProperties: !1,
          },
          'point_geometry_schema.json': {
            title: 'pointGeometry',
            type: 'object',
            description:
              'Defines the JSON formats of the point and spatial reference objects.',
            properties: {
              m: {
                type: 'number',
                description:
                  'M coordinate which contains measures used for linear referencing.',
              },
              spatialReference: {
                description:
                  'The spatial reference can be defined using a well-known ID (WKID) or well-known text (WKT).',
                $ref: '#/definitions/spatialReference_schema.json',
              },
              x: {
                description:
                  'X coordinate which is measured along the east/west axis.',
                oneOf: [
                  { type: 'number' },
                  { type: 'null' },
                  { type: 'string', enum: ['NaN'] },
                ],
              },
              y: {
                type: 'number',
                description:
                  'Y coordinate which is measured along the north/south axis.',
              },
              z: {
                type: 'number',
                description: 'Z coordinate which measures height or elevation.',
              },
            },
            required: ['x'],
            additionalProperties: !1,
          },
          'multipoint_geometry_schema.json': {
            title: 'multipointGeometry',
            type: 'object',
            description:
              'Contains an array of points, along with a spatial reference field.',
            properties: {
              hasM: {
                type: 'boolean',
                description:
                  'Indicates whether the geometry contains M coordinate values.',
              },
              hasZ: {
                type: 'boolean',
                description:
                  'Indicates whether the geometry contains Z coordinate values.',
              },
              points: {
                type: 'array',
                description: 'An array that corresponds to 2D and 3D points.',
                items: {
                  type: 'array',
                  items: { type: 'number' },
                  minItems: 2,
                  maxItems: 4,
                },
              },
              spatialReference: {
                description:
                  'The spatial reference can be defined using a well-known ID (WKID) or well-known text (WKT).',
                $ref: '#/definitions/spatialReference_schema.json',
              },
            },
            required: ['points'],
            additionalProperties: !1,
          },
          'polygon_geometry_schema.json': {
            title: 'polygonGeometry',
            type: 'object',
            description:
              'A polygon contains an array of rings and a spatial reference.',
            properties: {
              hasM: {
                type: 'boolean',
                description:
                  'Indicates whether the geometry contains M coordinate values.',
              },
              hasZ: {
                type: 'boolean',
                description:
                  'Indicates whether the geometry contains Z coordinate values.',
              },
              rings: {
                type: 'array',
                description:
                  'Represents an array of rings. Each ring is an array of points.',
                items: {
                  type: 'array',
                  items: {
                    type: 'array',
                    items: { type: 'number' },
                    minItems: 2,
                    maxItems: 4,
                  },
                  minItems: 3,
                },
                minItems: 1,
              },
              spatialReference: {
                description:
                  'The spatial reference can be defined using a well-known ID (WKID) or well-known text (WKT).',
                $ref: '#/definitions/spatialReference_schema.json',
              },
            },
            required: ['rings'],
            additionalProperties: !1,
          },
          'polyline_geometry_schema.json': {
            title: 'polylineGeometry',
            type: 'object',
            description: 'Contains an array of paths and a spatialReference.',
            properties: {
              hasM: {
                type: 'boolean',
                description:
                  'Indicates whether the geometry contains M coordinate values.',
              },
              hasZ: {
                type: 'boolean',
                description:
                  'Indicates whether the geometry contains Z coordinate values.',
              },
              paths: {
                type: 'array',
                description:
                  'Three nested array levels describing a polyline. The first level describes individual paths; the second describes the points of these paths; and the third gives the coordinates of the points.',
                items: {
                  type: 'array',
                  items: {
                    type: 'array',
                    items: { type: 'number' },
                    minItems: 2,
                    maxItems: 4,
                  },
                  minItems: 2,
                },
              },
              spatialReference: {
                description:
                  'The spatial reference can be defined using a well-known ID (WKID) or well-known text (WKT).',
                $ref: '#/definitions/spatialReference_schema.json',
              },
            },
            required: ['paths'],
            additionalProperties: !1,
          },
          'voxelSection_schema.json': {
            title: 'Voxel Section',
            type: 'object',
            description:
              'A section that is locked in for a specific variable and/or time. Allowing you to view the section together with other variables. A locked (or static) section is `float32` raster. This JSON object contains the meta-data needed to display (and potentially re-generate) this raster.\n\n When creating a web scene the locked sections must have this information as all properties come the web scene. If no section information is given, it is assumed there are no sections in the web scene.',
            properties: {
              enabled: {
                type: 'boolean',
                description: 'Boolean defining section visibility.',
                default: !0,
              },
              href: {
                type: 'string',
                description:
                  'Relative href to the static section raster binary. href is relative to the layer document which contains the href. Inside an SLPK archive, must be of the form `resources/sections/<file>.bin.gz` and the section raster should be gzip-compressed.',
              },
              id: {
                type: 'integer',
                description:
                  'The id of the section. Must be unique from other sections in the array.',
              },
              label: {
                type: 'string',
                description: 'The label for the section.',
              },
              normal: {
                type: 'array',
                description: 'Normal vector to the plane in voxel space.',
                items: { type: 'number' },
                minItems: 3,
                maxItems: 3,
              },
              point: {
                type: 'array',
                description:
                  'Point belonging to the section plane in voxel space.',
                items: { type: 'number' },
                minItems: 3,
                maxItems: 3,
              },
              sizeInPixel: {
                type: 'array',
                description:
                  'Array of size 2 which describes the dimension of the raster data in pixels.',
                items: { type: 'integer' },
                minItems: 2,
                maxItems: 2,
              },
              slices: {
                type: 'array',
                description:
                  'A copy of the slices that were applied to the volume when the section was created when new UVs are discovered for subsequent time slices.',
                items: { $ref: '#/definitions/voxelSlice_schema.json' },
              },
              timeId: {
                type: 'integer',
                description:
                  'Time slice id at which the section was created. `timeId` is only applicable when time is the 4th dimension.',
              },
              variableId: {
                type: 'integer',
                description: 'Id of the variable.',
              },
            },
            required: [
              'href',
              'id',
              'normal',
              'point',
              'sizeInPixel',
              'variableId',
            ],
            additionalProperties: !1,
          },
          'voxelStyle_schema.json': {
            title: 'Voxel Style',
            type: 'object',
            description:
              'A voxel style allows you to define the visualization of the voxel layer. A voxel layer can be represented as volume or surface depending on your analysis needs. You can change the visibility of the different representations and change their drawing options.',
            properties: {
              currentVariableId: {
                type: 'integer',
                description: 'Id of the currently visible variable.',
              },
              enableDynamicSections: {
                type: 'boolean',
                description:
                  'Enable dynamic section (only if `renderMode = "surfaces"`).',
              },
              enableIsosurfaces: {
                type: 'boolean',
                description:
                  'Enable isosurfaces (only if `renderMode = "surfaces"`).',
              },
              enableSections: {
                type: 'boolean',
                description: 'Enable static sections.',
              },
              enableSlices: { type: 'boolean', description: 'Enable slices.' },
              renderMode: {
                type: 'string',
                description:
                  'Current rendering mode for the voxel layer. Depending on the rendering mode different voxel layer representations can be shown. `volume` draws the voxel layer as rectangular cuboid (but any slices defined for the voxel layer will change the volume to the area of interest). `surfaces` will represent the layer as a set of surfaces, for example, dynamic sections can define a plane through the volume or isosurfaces can show a specific value as surface.',
                enum: ['surfaces', 'volume'],
              },
              shading: {
                description: 'Defines the shading properties.',
                $ref: '#/definitions/voxelShading_schema.json',
              },
              variableStyles: {
                type: 'array',
                description:
                  'Array of variable styles. Each variable can have one variable style.',
                items: { $ref: '#/definitions/voxelVariableStyle_schema.json' },
                minItems: 1,
              },
              volumeStyles: {
                type: 'array',
                description:
                  'Array of volume styles. Currently only one volume style is allowed.',
                items: { $ref: '#/definitions/voxelVolumeStyle_schema.json' },
                minItems: 1,
              },
            },
            required: ['currentVariableId'],
            additionalProperties: !1,
          },
          'lod_schema.json': {
            title: 'lod',
            type: 'object',
            properties: {
              level: { type: 'integer', description: 'ID for each level.' },
              levelValue: {
                type: 'string',
                description:
                  'String to be used when constructing URL to access a tile from this LOD.',
              },
              resolution: {
                type: 'number',
                description:
                  'Resolution in map units of each pixel in a tile for each level.',
              },
              scale: { type: 'number', description: 'Scale for each level.' },
            },
            additionalProperties: !1,
          },
          'parameter_schema.json': {
            title: 'parameter',
            type: 'object',
            description:
              'Objects defined by a [definitionEditor](definitionEditor.md) input.',
            properties: {
              defaultValue: {
                type: ['number', 'string'],
                description:
                  'The default value that is automatically given is nothing is provided.',
              },
              fieldName: {
                type: 'string',
                description:
                  'A string value representing the name of the field to query.',
              },
              parameterId: {
                type: 'integer',
                description:
                  'Number given to uniquely identify the specified parameter.',
              },
              type: {
                type: 'string',
                description:
                  'The field type for the specified field parameter.',
                enum: [
                  'esriFieldTypeBlob',
                  'esriFieldTypeDate',
                  'esriFieldTypeDouble',
                  'esriFieldTypeGeometry',
                  'esriFieldTypeGlobalID',
                  'esriFieldTypeGUID',
                  'esriFieldTypeInteger',
                  'esriFieldTypeOID',
                  'esriFieldTypeRaster',
                  'esriFieldTypeSingle',
                  'esriFieldTypeSmallInteger',
                  'esriFieldTypeString',
                  'esriFieldTypeXML',
                ],
              },
              utcValue: {
                type: 'integer',
                description:
                  'An integer value representing exact UNIX time used when `defaultValue` is a date string.',
              },
            },
            additionalProperties: !1,
          },
          'buildingSceneLayer_filterAuthoringInfo_filterType_schema.json': {
            title: 'Filter Type',
            type: 'object',
            description:
              'The file authoring information for a filter, including the filter type and its value settings.',
            properties: {
              filterType: {
                type: 'string',
                description:
                  'Represents the filter type name. Name is a unique identifier.',
              },
              filterValues: {
                type: 'array',
                description:
                  'Array of filter values. Filter values are the attributes that can be stored for individual fields in a layer.',
                items: { type: 'string' },
              },
            },
            required: ['filterType', 'filterValues'],
            additionalProperties: !1,
          },
          'buildingSceneLayer_filterModeSolid_schema.json': {
            title: 'Filter mode solid',
            type: 'object',
            description:
              'Draw elements of this filter block in solid mode. This mode does not change the display of features.',
            properties: {
              type: {
                type: 'string',
                description: 'Declares filter mode of type solid.',
                enum: ['solid'],
              },
            },
            required: ['type'],
            additionalProperties: !1,
          },
          'buildingSceneLayer_filterModeWireFrame_schema.json': {
            title: 'Filter mode wire frame',
            type: 'object',
            description:
              'Draw elements of this filter block in wireframe mode. This mode draws only the edges of the features with the specified edge style.',
            properties: {
              edges: {
                description: 'An object defining edges of a feature.',
                $ref: '#/definitions/edges_schema.json',
              },
              type: {
                type: 'string',
                description: 'Declares filter mode of type wire frame.',
                enum: ['wireFrame'],
              },
            },
            required: ['edges', 'type'],
            additionalProperties: !1,
          },
          'buildingSceneLayer_filterModeXray_schema.json': {
            title: 'Filter mode x-ray',
            type: 'object',
            description:
              'Draw elements of this filter block in x-ray mode. `x-ray` renders elements semi-transparent with white color.',
            properties: {
              type: {
                type: 'string',
                description: 'Declares filter mode of type x-ray.',
                enum: ['x-ray'],
              },
            },
            required: ['type'],
            additionalProperties: !1,
          },
          'codedValue_domain_schema.json': {
            title: 'codedValue',
            type: 'object',
            description:
              'The coded value domain includes both the actual value that is stored in a database and a description of what the code value means.',
            properties: {
              codedValues: {
                type: 'array',
                description: 'A set of valid values with unique names.',
                items: { $ref: '#/definitions/codedValue_schema.json' },
                uniqueItems: !0,
              },
              name: { type: 'string', description: 'The domain name.' },
              type: {
                type: 'string',
                description: 'String value representing the domain type.',
                enum: ['codedValue'],
              },
            },
            required: ['codedValues', 'type'],
            additionalProperties: !1,
          },
          'inherited_domain_schema.json': {
            title: 'inheritedDomain',
            type: 'object',
            description:
              'This domain applies to domains on subtypes. It implies that the domain for a field at the subtype level is the same as the domain for the field at the layer level.',
            properties: {
              name: { type: 'string', description: 'The domain name.' },
              type: {
                type: 'string',
                description: 'String value representing the domain type.',
                enum: ['inherited'],
              },
            },
            required: ['type'],
            additionalProperties: !1,
          },
          'range_domain_schema.json': {
            title: 'rangeDomain',
            type: 'object',
            description:
              'Range domain specifies a range of valid values for a field.',
            properties: {
              name: { type: 'string', description: 'The domain name.' },
              range: {
                type: 'array',
                description:
                  'The first element is the minValue and the second element is the maxValue.',
                items: { type: 'number' },
                minItems: 2,
                maxItems: 2,
                uniqueItems: !0,
              },
              type: {
                type: 'string',
                description: 'String value representing the domain type.',
                enum: ['range'],
              },
            },
            required: ['range', 'type'],
            additionalProperties: !1,
          },
          'dataSource_schema.json': {
            title: 'dataSource',
            type: 'object',
            description:
              'This object applies if the [layerDefinition](layerDefinition.md) source is set to `DynamicDataLayer`.',
            oneOf: [
              { $ref: '#/definitions/joinTableDataSource_schema.json' },
              { $ref: '#/definitions/queryTableDataSource_schema.json' },
              { $ref: '#/definitions/rasterDataSource_schema.json' },
              { $ref: '#/definitions/tableDataSource_schema.json' },
            ],
          },
          'feature_schema.json': {
            title: 'feature',
            type: 'object',
            description:
              'Contains information about an attribute field and feature geometry.',
            properties: {
              attributes: {
                type: 'object',
                description:
                  'The feature attributes. A JSON object that contains a dictionary of name-value pairs. The names are the feature field names. The values are the field values, and they can be any of the standard JSON types: string, number, and boolean. Note that date values are encoded as numbers. The number represents the number of milliseconds since epoch (January 1, 1970) in UTC.',
              },
              geometry: {
                description: 'It can be any of the supported geometry types.',
                $ref: '#/definitions/geometry_schema.json',
              },
              symbol: {
                description: 'Symbol used for drawing the feature.',
                $ref: '#/definitions/symbol3D_schema.json',
              },
            },
            additionalProperties: !1,
          },
          'callout_schema.json': {
            title: 'Callout',
            type: 'object',
            description: 'Callout configuration for a symbol.',
            properties: {
              border: { $ref: '#/definitions/border_schema.json' },
              color: {
                description: 'The color of the line.',
                $ref: '#/definitions/color_schema.json',
              },
              size: {
                type: 'number',
                description: 'The width of the line in points.',
                minimum: 0,
              },
              transparency: {
                type: 'integer',
                description:
                  'A value between `100` (full transparency) and `0` (full opacity).',
                minimum: 0,
                maximum: 100,
              },
              type: {
                type: 'string',
                description:
                  'The type of the callout. A callout of type `line` connects an offset symbol or label with its location.',
                enum: ['line'],
              },
            },
            required: ['color', 'size', 'type'],
            additionalProperties: !1,
          },
          'textSymbol3DLayer_schema.json': {
            title: 'TextSymbol3DLayer',
            type: 'object',
            description: 'Symbol layer for text and font definitions.',
            properties: {
              background: { $ref: '#/definitions/textBackground_schema.json' },
              enable: { type: 'boolean' },
              font: { $ref: '#/definitions/font_schema.json' },
              halo: { $ref: '#/definitions/halo_schema.json' },
              horizontalAlignment: {
                type: 'string',
                description:
                  'One of the following string values representing the horizontal alignment of the text.',
                enum: ['center', 'left', 'right'],
                default: 'center',
              },
              lineHeight: {
                type: 'number',
                description:
                  'Multiplier to scale the vertical distance between the baselines of text with multiple lines.',
                minimum: 0.1,
                maximum: 4,
                default: 1,
              },
              material: { $ref: '#/definitions/material_schema.json' },
              size: {
                type: 'number',
                description: 'Font size in points, positive only',
                minimum: 0,
              },
              text: {
                type: 'string',
                description:
                  'Text content in the label. Typically this property is not set, as text content is read from labeling field.',
              },
              type: {
                type: 'string',
                description: 'Specifies the type of symbol used.',
                enum: ['Text'],
              },
              verticalAlignment: {
                type: 'string',
                description:
                  'One of the following string values representing the vertical alignment of the text.',
                enum: ['baseline', 'bottom', 'middle', 'top'],
                default: 'baseline',
              },
            },
            required: ['type'],
            additionalProperties: !1,
          },
          'verticalOffset_schema.json': {
            title: 'verticalOffset',
            type: 'object',
            description:
              'Shifts the symbol along the vertical world axis by a given length. The length is set in screen space units.',
            properties: {
              maxWorldLength: {
                type: 'number',
                description:
                  'The maximum vertical symbol lift in world units. It acts as an upper bound to avoid lift becoming too big.',
              },
              minWorldLength: {
                type: 'number',
                description:
                  'The minimum vertical symbol lift in world units. It acts as a lower bound to avoid lift becoming too small.',
                default: 0,
              },
              screenLength: {
                type: 'number',
                description: 'Maximal screen length of lift in points.',
              },
            },
            required: ['screenLength'],
            additionalProperties: !1,
          },
          'authoringInfo_schema.json': {
            title: 'authoringInfo',
            type: 'object',
            description:
              'The authoringInfo is an object containing metadata about the authoring process for creating a renderer object. This allows the authoring clients to save specific overridable settings so that next time it is accessed via an authoring client, their selections are remembered. Non-authoring clients can ignore it. Properties for color/size/transparency sliders, theme selection, classification information, and additional properties are saved within this object.',
            properties: {
              classificationMethod: {
                type: 'string',
                description:
                  'Used for classed color or size. The default value is `esriClassifyManual`.',
                enum: [
                  'esriClassifyDefinedInterval',
                  'esriClassifyEqualInterval',
                  'esriClassifyManual',
                  'esriClassifyNaturalBreaks',
                  'esriClassifyQuantile',
                  'esriClassifyStandardDeviation',
                ],
                default: 'esriClassifyManual',
              },
              colorRamp: { $ref: '#/definitions/colorRamp_schema.json' },
              field1: { $ref: '#/definitions/field_authoringInfo_schema.json' },
              field2: { $ref: '#/definitions/field_authoringInfo_schema.json' },
              fields: {
                type: 'array',
                description:
                  'An array of string values representing field names used for creating predominance renderers.',
                items: { type: 'string' },
              },
              focus: {
                type: 'string',
                description:
                  'Optional. Used for Relationship renderer. If not set, the legend will default to being square.',
                enum: ['HH', 'HL', 'LH', 'LL'],
              },
              lengthUnit: {
                type: 'string',
                description:
                  'Unit used in user interfaces to display world/map sizes and distances',
                enum: [
                  'centimeters',
                  'decimal-degrees',
                  'decimeters',
                  'feet',
                  'inches',
                  'kilometers',
                  'meters',
                  'miles',
                  'millimeters',
                  'nautical-miles',
                  'yards',
                ],
              },
              numClasses: {
                type: 'integer',
                description:
                  'Number of classes to be associated with the relationship. Used for Relationship renderer.',
                minimum: 2,
                maximum: 4,
              },
              standardDeviationInterval: {
                type: 'number',
                description:
                  'Use this property if the classificationMethod is `esriClassifyStandardDeviation`.',
                enum: [0.25, 0.33, 0.5, 1],
              },
              type: {
                type: 'string',
                enum: [
                  'classedColor',
                  'classedSize',
                  'dotDensity',
                  'predominance',
                  'relationship',
                  'univariateColorSize',
                ],
              },
              visualVariables: {
                type: 'array',
                description:
                  'An array of visualVariable objects containing additional information needed when authoring the renderer.',
                items: {
                  $ref: '#/definitions/authoringInfo_visualVariable_schema.json',
                },
              },
            },
            additionalProperties: !1,
          },
          'polygonSymbol3D_schema.json': {
            title: 'PolygonSymbol3D',
            type: 'object',
            description:
              'PolygonSymbol3D is used to render features with Polygon geometry in a 3D SceneView. Polygon features may also be rendered as points with icons or objects at the centroid of each polygon.',
            properties: {
              styleOrigin: { $ref: '#/definitions/styleOrigin_schema.json' },
              symbolLayers: {
                type: 'array',
                description:
                  'A Collection of Symbol3DLayer objects used to visualize the graphic or feature.',
                items: {
                  oneOf: [
                    { $ref: '#/definitions/extrudeSymbol3DLayer_schema.json' },
                    { $ref: '#/definitions/fillSymbol3DLayer_schema.json' },
                    { $ref: '#/definitions/iconSymbol3DLayer_schema.json' },
                    {
                      description:
                        '<em>Deprecated</em>, use [fillSymbol3DLayer with outline](fillSymbol3DLayer.md) instead',
                      $ref: '#/definitions/lineSymbol3DLayer_schema.json',
                    },
                    { $ref: '#/definitions/objectSymbol3DLayer_schema.json' },
                    { $ref: '#/definitions/textSymbol3DLayer_schema.json' },
                    { $ref: '#/definitions/waterSymbol3DLayer_schema.json' },
                  ],
                },
              },
              type: {
                type: 'string',
                description: 'Specifies the type of symbol used.',
                enum: ['PolygonSymbol3D'],
              },
            },
            required: ['symbolLayers', 'type'],
            additionalProperties: !1,
          },
          'classBreakInfo_schema.json': {
            title: 'classBreakInfo',
            type: 'object',
            description:
              'The classBreaksInfo object provides information about the class breaks associated with the renderer.',
            properties: {
              classMaxValue: {
                type: 'number',
                description:
                  'A numeric value used to specify the maximum value for a break.',
              },
              classMinValue: {
                type: 'number',
                description:
                  "A numeric value used to specify discontinuous class breaks. If this value is null or is missing, the map server will calculate the minimum value based on the preceding class' maximum value.",
              },
              description: {
                type: 'string',
                description: 'String value used to describe the drawn symbol.',
              },
              label: {
                type: 'string',
                description: 'String value used to label the drawn symbol.',
              },
              symbol: {
                description: 'An object used to display the value.',
                $ref: '#/definitions/symbol3D_schema.json',
              },
            },
            required: ['symbol'],
            additionalProperties: !1,
          },
          'symbol3D_schema.json': {
            title: 'Symbol3D',
            type: 'object',
            description:
              'Symbol3D is the base class for all 3D symbols. It is used to render 2D Point, Polyline, and Polygon features in a FeatureLayer and 3D mesh features in a SceneLayer. All 3D symbols must be used in a SceneView instance; there is no support for 3D rendering in MapViews.',
            oneOf: [
              { $ref: '#/definitions/cimSymbolReference_schema.json' },
              { $ref: '#/definitions/lineSymbol3D_schema.json' },
              { $ref: '#/definitions/meshSymbol3D_schema.json' },
              { $ref: '#/definitions/pointSymbol3D_schema.json' },
              { $ref: '#/definitions/polygonSymbol3D_schema.json' },
              { $ref: '#/definitions/styleSymbolReference_schema.json' },
            ],
          },
          'rendererLegendOptions_schema.json': {
            title: 'Renderer Legend Options',
            type: 'object',
            description: 'Options available for the renderer legend.',
            properties: {
              title: {
                type: 'string',
                description: 'The title of the legend.',
              },
            },
          },
          'visualVariable_schema.json': {
            title: 'visualVariable',
            type: 'object',
            description:
              'An object used to set rendering options. Please see the individual visual variable for specific information on how it is used.',
            oneOf: [
              { $ref: '#/definitions/colorInfo_visualVariable_schema.json' },
              { $ref: '#/definitions/rotationInfo_visualVariable_schema.json' },
              { $ref: '#/definitions/sizeInfo_visualVariable_schema.json' },
              {
                $ref: '#/definitions/transparencyInfo_visualVariable_schema.json',
              },
            ],
          },
          'pointCloudClassBreaksRenderer_schema.json': {
            title: 'PointCloud ClassBreaks Renderer',
            type: 'object',
            description:
              'PointCloudClassBreaksRenderer defines the color of each point in a PointCloudLayer based on the value of a numeric attribute. Colors are assigned based on classes or ranges of data. Each point is assigned a symbol based on the class break in which the value of the attribute falls.',
            properties: {
              colorClassBreakInfos: {
                type: 'array',
                description:
                  'Each element in the array is an object that provides information about a class break associated with the renderer.',
                items: {
                  $ref: '#/definitions/colorClassBreakInfo_schema.json',
                },
              },
              colorModulation: {
                $ref: '#/definitions/colorModulationInfo_schema.json',
              },
              field: {
                type: 'string',
                description:
                  '  The name of the field that is used for the renderer.',
              },
              fieldTransformType: {
                type: 'string',
                description:
                  'A transform that is applied to the field value before evaluating the renderer.',
                enum: [
                  'absoluteValue',
                  'highFourBit',
                  'lowFourBit',
                  'moduloTen',
                  'none',
                ],
              },
              legendOptions: {
                description:
                  'A legend containing one title, which is a string describing the renderer in the legend.',
                $ref: '#/definitions/rendererLegendOptions_schema.json',
              },
              pointSizeAlgorithm: {
                $ref: '#/definitions/pointSizeAlgorithm_schema.json',
              },
              pointsPerInch: {
                type: 'number',
                description: 'Number of point to draw per display inch.',
              },
              type: {
                type: 'string',
                description: 'Specifies the type of renderer used.',
                enum: ['pointCloudClassBreaksRenderer'],
              },
            },
            required: ['colorClassBreakInfos', 'field', 'type'],
            additionalProperties: !1,
          },
          'pointCloudRGBRenderer_schema.json': {
            title: 'PointCloud RGB Renderer',
            type: 'object',
            description:
              'PointCloudRGBRenderer defines the color of each point in a PointCloudLayer based on the value of a color attribute.',
            properties: {
              colorModulation: {
                $ref: '#/definitions/colorModulationInfo_schema.json',
              },
              field: {
                type: 'string',
                description:
                  'The name of the field that is used for the renderer.',
              },
              pointSizeAlgorithm: {
                $ref: '#/definitions/pointSizeAlgorithm_schema.json',
              },
              pointsPerInch: {
                type: 'number',
                description: 'Number of point to draw per display inch.',
              },
              type: {
                type: 'string',
                description: 'Specifies the type of renderer used.',
                enum: ['pointCloudRGBRenderer'],
              },
            },
            required: ['field', 'type'],
            additionalProperties: !1,
          },
          'pointCloudStretchRenderer_schema.json': {
            title: 'PointCloud Stretch Renderer',
            type: 'object',
            description:
              "PointCloudStretchRenderer defines the color of each point in a PointCloudLayer based on the value of a numeric attribute. They allow you to easily map continuous color ramps to minimum and maximum data values of one of the layer's numeric attribute fields.",
            properties: {
              colorModulation: {
                $ref: '#/definitions/colorModulationInfo_schema.json',
              },
              field: {
                type: 'string',
                description:
                  'The name of the field that is used for the renderer.',
              },
              fieldTransformType: {
                type: 'string',
                description:
                  'A transform that is applied to the field value before evaluating the renderer.',
                enum: [
                  'absoluteValue',
                  'highFourBit',
                  'lowFourBit',
                  'moduloTen',
                  'none',
                ],
              },
              legendOptions: {
                description:
                  'A legend containing one title, which is a string describing the renderer in the legend.',
                $ref: '#/definitions/rendererLegendOptions_schema.json',
              },
              pointSizeAlgorithm: {
                $ref: '#/definitions/pointSizeAlgorithm_schema.json',
              },
              pointsPerInch: {
                type: 'number',
                description: 'Number of points to draw per display inch.',
              },
              stops: {
                type: 'array',
                description: 'An array of color value pairs.',
                items: { $ref: '#/definitions/colorStop_schema.json' },
              },
              type: {
                type: 'string',
                description: 'Specifies the type of renderer used.',
                enum: ['pointCloudStretchRenderer'],
              },
            },
            required: ['field', 'stops', 'type'],
            additionalProperties: !1,
          },
          'pointCloudUniqueValueRenderer_schema.json': {
            title: 'PointCloud UniqueValue Renderer',
            type: 'object',
            description:
              'PointCloudUniqueValueRenderer allows you to colorize points in a PointCloudLayer based on an attribute. This is done by using unique colors to represent points with equal attribute values.',
            properties: {
              colorModulation: {
                $ref: '#/definitions/colorModulationInfo_schema.json',
              },
              colorUniqueValueInfos: {
                type: 'array',
                description: 'Unique value infos.',
                items: {
                  type: 'object',
                  $ref: '#/definitions/colorUniqueValueInfo_schema.json',
                },
              },
              field: {
                type: 'string',
                description:
                  'The name of the field that is used for the renderer.',
              },
              fieldTransformType: {
                type: 'string',
                description:
                  'A transform that is applied to the field value before evaluating the renderer.',
                enum: [
                  'absoluteValue',
                  'highFourBit',
                  'lowFourBit',
                  'moduloTen',
                  'none',
                ],
              },
              legendOptions: {
                description:
                  'A legend containing one title, which is a string describing the renderer in the legend.',
                $ref: '#/definitions/rendererLegendOptions_schema.json',
              },
              pointSizeAlgorithm: {
                $ref: '#/definitions/pointSizeAlgorithm_schema.json',
              },
              pointsPerInch: {
                type: 'number',
                description: 'Number of points to draw per display inch.',
              },
              type: {
                type: 'string',
                description: 'Specifies the type of renderer used.',
                enum: ['pointCloudUniqueValueRenderer'],
              },
            },
            required: ['colorUniqueValueInfos', 'field', 'type'],
            additionalProperties: !1,
          },
          'rasterClassBreaksRenderer_schema.json': {
            title: 'Raster ClassBreaks Renderer',
            type: 'object',
            description:
              'Defines the color of each raster cell based on the value of a numeric attribute. Colors are assigned based on classed ranges of data.',
            properties: {
              authoringInfo: {
                description:
                  'An object containing metadata about the authoring process for creating a renderer object. This allows the authoring clients to save specific overridable settings so that next time it is accessed via the UI, their selections are remembered. Non-authoring clients can ignore it.',
                $ref: '#/definitions/authoringInfo_schema.json',
              },
              colorClassBreakInfos: {
                type: 'array',
                description:
                  'Each element in the array is an object that provides information about a class break associated with the renderer.',
                items: {
                  $ref: '#/definitions/colorClassBreakInfo_schema.json',
                },
              },
              defaultColor: {
                description:
                  'The defaultColor on the renderer that get assigned to features with no value or features that do not fall within the configured data.',
                $ref: '#/definitions/color_schema.json',
              },
              defaultLabel: {
                type: 'string',
                description:
                  'Default label for the default symbol used to draw unspecified values.',
              },
              field: {
                type: 'string',
                description:
                  'The name of the field that is used for the renderer.',
              },
              legendOptions: {
                description:
                  'A legend containing one title, which is a string describing the renderer in the legend.',
                $ref: '#/definitions/rendererLegendOptions_schema.json',
              },
              normalizationField: {
                type: 'string',
                description:
                  'Used when normalizationType is field. The string value indicating the attribute field by which the data value is normalized.',
              },
              normalizationTotal: {
                type: 'number',
                description:
                  'Used when normalizationType is percent-of-total, this number property contains the total of all data values.',
              },
              normalizationType: {
                type: 'string',
                description: 'Determine how the data was normalized.',
                enum: [
                  'esriNormalizeByField',
                  'esriNormalizeByLog',
                  'esriNormalizeByPercentOfTotal',
                ],
              },
              type: {
                type: 'string',
                description: 'Specifies the type of renderer used.',
                enum: ['rasterClassBreaksRenderer'],
              },
            },
            required: ['colorClassBreakInfos', 'field', 'type'],
            additionalProperties: !1,
          },
          'rasterColormapRenderer_schema.json': {
            title: 'Raster Colormap Renderer',
            type: 'object',
            description:
              'A value/color look up table used for rendering raster data only.',
            properties: {
              colormapInfos: {
                type: 'array',
                description: 'An array of colormapInfo objects.',
                items: { $ref: '#/definitions/colormapInfo_schema.json' },
              },
              type: {
                type: 'string',
                description: 'Specifies the type of renderer used.',
                enum: ['rasterColormap'],
              },
            },
            required: ['colormapInfos', 'type'],
            additionalProperties: !1,
          },
          'rasterShadedReliefRenderer_schema.json': {
            title: 'Raster Shaded Relief Renderer',
            type: 'object',
            description:
              'This renderer produces a grayscale or a colored 3D representation of a shaded relief. This renderer can be used on either layers of type: [ImageServiceLayer](imageServiceLayer.md) or [TiledImageServiceLayer](tiledImageServiceLayer.md).',
            properties: {
              altitude: {
                type: 'number',
                description:
                  'Used when the `hillshadeType` is `traditional`. The  altitude of the illumination source.',
              },
              azimuth: {
                type: 'number',
                description:
                  'Used when the `hillshadeType` is `traditional`. The azimuth of the illumination source.',
              },
              colorRamp: {
                description:
                  'The color ramp to display the shaded relief. When not specified, a grayscale hillshade is produced. When this is specified, grayscale hillshade is fused with colorized elevation.',
                $ref: '#/definitions/colorRamp_schema.json',
              },
              hillshadeType: {
                type: 'string',
                description:
                  'Use single (traditional), or multiple illumination sources to generate hillshade.',
                enum: ['multi-directional', 'traditional'],
              },
              pixelSizeFactor: {
                type: 'number',
                description:
                  'Accounts for changes in scale as the viewer zooms in and out on the map display.',
              },
              pixelSizePower: {
                type: 'number',
                description:
                  'Accounts for the altitude changes (or scale) as the viewer zooms in and out on the map display.',
              },
              scalingType: {
                type: 'string',
                description:
                  'Apply a constant or adjusted z-factor based on resolution changes. The `adjusted` type is suitable for worldwide elevation dataset. An adjusted `zFactor` is determined using this equation: `Adjusted Z-Factor = (Z Factor) + (Pixel Size)` <sup>(Pixel Size Power)</sup> `x Pixel Size Factor`.',
                enum: ['adjusted', 'none'],
              },
              type: {
                type: 'string',
                description: 'Specifies the type of renderer used.',
                enum: ['rasterShadedRelief'],
              },
              zFactor: {
                type: 'number',
                description:
                  'A conversion factor that adjusts the units of measure for the vertical (or elevation) units when they are different from the horizontal coordinate (x,y) units of the input surface. It is the number of ground x,y units in one surface z-unit.',
              },
            },
            required: [
              'altitude',
              'azimuth',
              'hillshadeType',
              'scalingType',
              'type',
              'zFactor',
            ],
            additionalProperties: !1,
          },
          'rasterStretchRenderer_schema.json': {
            title: 'Raster Stretch Renderer',
            description:
              'Displays continuous raster cell values across a gradual ramp of colors. Use this renderer to draw a single band of continuous data. This renderer works well when you have a large range of values to display, such as with imagery or scientific data.',
            properties: {
              colorRamp: { $ref: '#/definitions/colorRamp_schema.json' },
              computeGamma: {
                type: 'boolean',
                description:
                  'Indicates if gamma values should be computed by default.',
              },
              dra: {
                type: 'boolean',
                description:
                  'Indicates if Dynamic Range Adjustment should be applied.',
              },
              gamma: {
                type: 'array',
                description: 'The list of Gamma value(s).',
                items: { type: 'number' },
              },
              max: {
                type: 'number',
                description: 'The current maximum output value.',
              },
              maxPercent: {
                type: 'number',
                description: 'The current maximum percent value.',
              },
              min: {
                type: 'number',
                description: 'The current minimum output value.',
              },
              minPercent: {
                type: 'number',
                description: 'The current minimum percent value.',
              },
              numberOfStandardDeviations: {
                type: 'number',
                description:
                  'The number of standard deviations for standard deviation stretch.',
              },
              sigmoidStrengthLevel: {
                type: 'number',
                description:
                  'Set this from (1 to 6) to adjust the curvature of Sigmoid curve used in color stretch.',
              },
              statistics: {
                type: 'array',
                description: 'The custom raster stretch statistics.',
                items: {
                  type: 'array',
                  items: { type: 'number', minItems: 4, maxItems: 4 },
                },
              },
              stretchType: {
                type: 'string',
                description: 'The stretch types for stretch raster function.',
                enum: [
                  'histogramEqualization',
                  'minMax',
                  'none',
                  'percentClip',
                  'sigmoid',
                  'standardDeviation',
                ],
              },
              type: {
                type: 'string',
                description: 'Specifies the type of renderer used.',
                enum: ['rasterStretch'],
              },
              useGamma: {
                type: 'boolean',
                description: 'Indicates if the renderer applies Gamma stretch.',
              },
            },
            additionalProperties: !1,
          },
          'rasterUniqueValueRenderer_schema.json': {
            title: 'Raster UniqueValue Renderer',
            type: 'object',
            description:
              'Defines the color of each raster cell based on an attribute. This is done by using unique colors to represent cells with equal attribute values.',
            properties: {
              authoringInfo: {
                description:
                  'An object containing metadata about the authoring process for creating a renderer object. This allows the authoring clients to save specific overridable settings so that next time it is accessed via the UI, their selections are remembered. Non-authoring clients can ignore it.',
                $ref: '#/definitions/authoringInfo_schema.json',
              },
              colorUniqueValueInfos: {
                type: 'array',
                description: 'Unique value infos.',
                items: {
                  $ref: '#/definitions/colorUniqueValueInfo_schema.json',
                },
              },
              defaultColor: {
                description:
                  'The defaultColor on the renderer that get assigned to features with no value or features that do not fall within the configured data.',
                $ref: '#/definitions/color_schema.json',
              },
              defaultLabel: {
                type: 'string',
                description:
                  'Default label for the default symbol used to draw unspecified values.',
              },
              field: {
                type: 'string',
                description:
                  'The name of the field that is used for the renderer.',
              },
              legendOptions: {
                description:
                  'A legend containing one title, which is a string describing the renderer in the legend.',
                $ref: '#/definitions/rendererLegendOptions_schema.json',
              },
              type: {
                type: 'string',
                description: 'Specifies the type of renderer used.',
                enum: ['rasterUniqueValueRenderer'],
              },
            },
            required: ['colorUniqueValueInfos', 'field', 'type'],
            additionalProperties: !1,
          },
          'uniqueValueInfo_schema.json': {
            title: 'uniqueValueInfo',
            type: 'object',
            description:
              "Info item for the Unique Value Renderer. Its symbol gets selected if the feature's field matches its value.",
            properties: {
              description: {
                type: 'string',
                description: 'String value used to describe the drawn symbol.',
              },
              label: {
                type: 'string',
                description: 'String value used to label the drawn symbol.',
              },
              symbol: {
                description: 'An object used to display the value.',
                $ref: '#/definitions/symbol3D_schema.json',
              },
              value: {
                type: 'string',
                description: 'String value indicating the unique value.',
              },
            },
            additionalProperties: !1,
          },
          'mediaInfo_chart_value_schema.json': {
            title: 'mediaInfo chart value',
            type: 'object',
            description:
              'The value object contains information for popup windows about how charts should be constructed.',
            properties: {
              fields: {
                type: 'array',
                description:
                  'An array of strings, with each string containing the name of a field to display in the chart.',
                items: { type: 'string' },
                uniqueItems: !0,
              },
              normalizeField: {
                type: 'string',
                description:
                  'An optional string containing the name of a field. The values of all fields in the chart will be normalized (divided) by the value of this field.',
              },
              tooltipField: {
                type: 'string',
                description:
                  'String value indicating the tooltip for a chart specified from another field. This field is needed when related records are not used. It is used for showing tooltips from another field in the same layer or related layer/table.',
              },
            },
            required: ['fields'],
            additionalProperties: !1,
          },
          'mediaInfo_image_value_schema.json': {
            title: 'mediaInfo image value',
            type: 'object',
            description:
              'The value object contains information for popup windows about how images should be retrieved.',
            properties: {
              linkURL: {
                type: 'string',
                description:
                  'A string containing a URL to be launched in a browser when a user clicks the image.',
              },
              sourceURL: {
                type: 'string',
                description: 'A string containing the URL to the image.',
              },
            },
            required: ['sourceURL'],
            additionalProperties: !1,
          },
          'popupElementExpressionInfo_schema.json': {
            title: 'popupElementExpressionInfo',
            description:
              'An Arcade expression that defines the pop-up element content. The return type will always be a `dictionary` that defines the desired pop-up element as outlined [here](https://developers.arcgis.com/arcade/guide/profiles/#popup-element).',
            properties: {
              expression: {
                type: 'string',
                description: 'The Arcade expression.',
              },
              returnType: {
                type: 'string',
                description:
                  'Return type of the Arcade expression, the expected return is always `dictionary.`',
                enum: ['dictionary'],
              },
              title: {
                type: 'string',
                description: 'Title of the expression.',
              },
            },
            additionalProperties: !1,
          },
          'search_field_schema.json': {
            title: 'search field',
            type: 'object',
            description:
              'Contains information about an attribute field in layer and table search configurations.',
            properties: {
              exactMatch: {
                type: 'boolean',
                description:
                  'A Boolean defining whether or not the field is an exact match.',
              },
              name: {
                type: 'string',
                description: 'A string defining the field name.',
              },
              type: {
                type: 'string',
                description: 'A string defining the field type.',
                enum: [
                  'esriFieldTypeBlob',
                  'esriFieldTypeDate',
                  'esriFieldTypeDouble',
                  'esriFieldTypeGeometry',
                  'esriFieldTypeGlobalID',
                  'esriFieldTypeGUID',
                  'esriFieldTypeInteger',
                  'esriFieldTypeLong',
                  'esriFieldTypeOID',
                  'esriFieldTypeRaster',
                  'esriFieldTypeSingle',
                  'esriFieldTypeSmallInteger',
                  'esriFieldTypeString',
                  'esriFieldTypeXML',
                ],
              },
            },
            additionalProperties: !1,
          },
          'voxelSlice_schema.json': {
            title: 'Voxel Slice',
            type: 'object',
            description:
              'A slice is a plane through the voxel layer. Slices visually cut the voxel layer by removing portion of it. A slice or a combination of slices can define an area of interest showing only a portion of the original extent or show the entire of a voxel layer.',
            properties: {
              enabled: {
                type: 'boolean',
                description: 'Boolean defining slice visibility.',
                default: !0,
              },
              label: { type: 'string', description: 'Label for the slice.' },
              normal: {
                type: 'array',
                description:
                  'Normal vector to the plane in voxel space. Defining the orientation of the slice.',
                items: { type: 'number' },
                minItems: 3,
                maxItems: 3,
              },
              point: {
                type: 'array',
                description:
                  'Point belonging to the section plane in voxel space. Defining the position of the slice.',
                items: { type: 'number' },
                minItems: 3,
                maxItems: 3,
              },
            },
            required: ['normal', 'point'],
            additionalProperties: !1,
          },
          'voxelShading_schema.json': {
            title: 'Voxel Shading',
            type: 'object',
            description:
              'Describes the shading properties of the voxel layer. Voxel layers use a simple shading model which provides specular highlights and diffuse shading proportional to the opacity of the voxel being accumulated during raycasting. Opaque voxels are shaded like a surface while semi-transparent voxels mostly contribute their color.',
            properties: {
              diffuseFactor: {
                type: 'number',
                description: 'Diffuse light coefficient.',
                minimum: 0,
                maximum: 1,
                default: 0.5,
              },
              specularFactor: {
                type: 'number',
                description: 'Specular highlight coefficient.',
                minimum: 0,
                maximum: 1,
                default: 0.5,
              },
            },
            additionalProperties: !1,
          },
          'voxelVariableStyle_schema.json': {
            title: 'Voxel Variable Style',
            type: 'object',
            description:
              'The voxel variable style defines how the voxel layer will render for a variable. A variable can be discrete (integer values) or continuous (float values).',
            properties: {
              isosurfaces: {
                type: 'array',
                description:
                  'Array of styles for isosurfaces. (Only if `variable.originalFormat.continuity = continuous`). An isosurface represents a surface at a specific value. A voxel layer can have up to four isosurfaces.',
                items: {
                  $ref: '#/definitions/voxelIsosurfaceStyle_schema.json',
                },
                minItems: 1,
              },
              label: { type: 'string', description: 'Label for the variable.' },
              transferFunction: {
                description:
                  'Defines the stretch rendering of the voxel layer. The transfer function maps voxel values to color and transparency. Scalar field only. (Only if `variable.originalFormat.continuity = continuous`).',
                $ref: '#/definitions/voxelTransferFunctionStyle_schema.json',
              },
              uniqueValues: {
                type: 'array',
                description:
                  'Defines the unique value rendering as an array of unique value styles (Only if `variable.originalFormat.continuity = discrete`).',
                items: { $ref: '#/definitions/voxelUniqueValue_schema.json' },
                minItems: 0,
              },
              variableId: {
                type: 'integer',
                description:
                  'Id of the variable. The variable styles will be defined for the variable with the given Id. If the `variableId` and the voxel style `currentVariableId` are identical the style will be shown. ',
              },
            },
            required: ['variableId'],
            additionalProperties: !1,
          },
          'voxelVolumeStyle_schema.json': {
            title: 'Volume Style',
            type: 'object',
            description:
              'The volume style allows you to define the exaggeration and offset.',
            properties: {
              dynamicSections: {
                type: 'array',
                description:
                  'Array of dynamic sections of the volume. (Only if `style.renderMode = surfaces`). Dynamic sections are planes through the voxel layer used for visual analysis to inspect the voxel layer at specified positions. Sections are visible if the voxel layer shows surfaces. For example, you can define a cross section diagram using dynamic sections.',
                items: {
                  $ref: '#/definitions/voxelDynamicSection_schema.json',
                },
              },
              exaggerationMode: {
                type: 'string',
                description:
                  'Determines how the vertical exaggeration is applied. `scale-height` scales from the voxel dataset origin only, for example, if a voxel layer has its minimum at sea level the layer will be exaggerated starting from sea level. `scale-height` is the default. `scale-position` also scales the space between voxel dataset origin in the coordinate system origin. This exaggeration mode is identical with exaggeration applied to other layers like feature layers (use the scale position option if you want to draw the voxel layer together with feature based data).',
                enum: ['scale-height', 'scale-position'],
                default: 'scale-height',
              },
              slices: {
                type: 'array',
                description:
                  'Array of slices applied to this volume. Slices reduce the voxel volume to an area of interest. Slices are applied to both voxel style renderModes (volume, surfaces).',
                items: { $ref: '#/definitions/voxelSlice_schema.json' },
                minItems: 1,
              },
              verticalExaggeration: {
                type: 'number',
                description: 'Vertical exaggeration factor.',
                default: 1,
              },
              verticalOffset: {
                type: 'number',
                description:
                  'Vertical offset value in vertical unit of the spatial reference of the voxel layer.',
                default: 0,
              },
              volumeId: {
                type: 'integer',
                description:
                  'Id of the volume in the volume array (a maximum of one style per volumeId).',
                default: 0,
              },
            },
            additionalProperties: !1,
          },
          'edges_schema.json': {
            title: 'Edges',
            type: 'object',
            description:
              'Specifies an edge visualization style (only applies to MeshSymbol3D). Edges describe the style applied to visually important edges of 3D objects.',
            oneOf: [
              { $ref: '#/definitions/sketchEdges_schema.json' },
              { $ref: '#/definitions/solidEdges_schema.json' },
            ],
          },
          'codedValue_schema.json': {
            title: 'codedValue',
            type: 'object',
            description: 'A set of valid coded values with unique names.',
            properties: {
              code: {
                type: ['number', 'string'],
                description: 'The value stored in the feature attribute.',
              },
              name: {
                type: 'string',
                description: 'User-friendly name for what the code means.',
              },
            },
            required: ['code', 'name'],
            additionalProperties: !1,
          },
          'joinTableDataSource_schema.json': {
            title: 'Join Table DataSource',
            type: 'object',
            description:
              'Join Table data source is the result of a join operation. Nested joins are supported. To use nested joins, set either leftTableSource or rightTableSource to be a joinTable.',
            properties: {
              joinType: {
                type: 'string',
                description: 'The type of join (left outer or left inner).',
                enum: ['esriLeftInnerJoin', 'esriLeftOuterJoin'],
              },
              leftTableKey: {
                type: 'string',
                description: 'Field name from the left table.',
              },
              leftTableSource: {
                description:
                  'The left source. If the leftTableSource is a table, the resulting joinTable is a table. If the leftTableSource is a layer, the resulting joinTable is a layer.',
                $ref: '#/definitions/source_schema.json',
              },
              rightTableKey: {
                type: 'string',
                description: 'Field name from the right table.',
              },
              rightTableSource: {
                description: 'The right table source.',
                $ref: '#/definitions/source_schema.json',
              },
              type: {
                type: 'string',
                description:
                  'String value indicating the type for the dataSource.',
                enum: ['joinTable'],
              },
            },
            required: ['type'],
            additionalProperties: !1,
          },
          'queryTableDataSource_schema.json': {
            title: 'Query Table DataSource',
            type: 'object',
            description:
              'Query table data source is a layer/table that is defined by a SQL query.',
            properties: {
              geometryType: {
                type: 'string',
                description:
                  'The geometry type. When querying a table that does not have a geometry column, do not include geometryType.',
                enum: [
                  'esriGeometryMultipoint',
                  'esriGeometryPoint',
                  'esriGeometryPolygon',
                  'esriGeometryPolyline',
                ],
              },
              oidFields: {
                type: 'string',
                description:
                  'Comma separated list of identifier fields. There are only certain field types that can be used as a unique identifier. These field types include integer, string, GUID, and date. If a single integer field is specified, map server uses the values in that field directly to uniquely identify all features and rows returned from a queryTable. However, if a single string field or a group of fields is used as the unique identifier, map server maps those unique values to an integer.',
              },
              query: { type: 'string', description: 'The SQL query.' },
              spatialReference: {
                description:
                  'The spatial reference of the geometry column. When querying a table that does not have a geometry column, do not include spatialReference.',
                $ref: '#/definitions/spatialReference_schema.json',
              },
              type: {
                type: 'string',
                description:
                  'String value indicating the type for the dataSource.',
                enum: ['queryTable'],
              },
              workspaceId: {
                type: 'string',
                description:
                  "The unique string value used to identify the datasource's workspace.",
              },
            },
            required: ['type'],
            additionalProperties: !1,
          },
          'rasterDataSource_schema.json': {
            title: 'Raster DataSource',
            type: 'object',
            description:
              'Raster data source is a file-based raster that resides in a registered raster workspace.',
            properties: {
              dataSourceName: {
                type: 'string',
                description: "The raster datasource's name.",
              },
              type: {
                type: 'string',
                description:
                  'String value indicating the type for the dataSource.',
                enum: ['raster'],
              },
              workspaceId: {
                type: 'string',
                description:
                  "The unique string value used to identify the datasource's workspace.",
              },
            },
            required: ['type'],
            additionalProperties: !1,
          },
          'tableDataSource_schema.json': {
            title: 'Table DataSource',
            type: 'object',
            description:
              'Table data source is a table, feature class, or raster that resides in a registered workspace (either a folder or geodatabase). In the case of a geodatabase, if versioned, use version to switch to an alternate geodatabase version. If version is empty or missing, the registered geodatabase version will be used.',
            properties: {
              dataSourceName: {
                type: 'string',
                description:
                  'The fully-qualified string value used to specify where the dataSource is derived.',
              },
              gdbVersion: {
                type: 'string',
                description:
                  'If applicable, the value indicating the version of the geodatabase.',
              },
              type: {
                type: 'string',
                description:
                  'String value indicating the type for the dataSource. The value for a Table DataSource is `table`.',
                enum: ['table'],
              },
              workspaceId: {
                type: 'string',
                description:
                  "The unique string value used to identify the datasource's workspace.",
              },
            },
            required: ['type'],
            additionalProperties: !1,
          },
          'border_schema.json': {
            title: 'border',
            type: 'object',
            description:
              'Optional border on the line that is used to improve the contrast of the line color against various background colors.',
            properties: {
              color: { $ref: '#/definitions/color_schema.json' },
              transparency: {
                type: 'integer',
                description:
                  'A value between `100` (full transparency) and `0` (full opacity).',
                minimum: 0,
                maximum: 100,
              },
            },
            required: ['color'],
            additionalProperties: !1,
          },
          'textBackground_schema.json': {
            title: 'text background',
            type: 'object',
            description: 'Text background definition.',
            properties: {
              color: { $ref: '#/definitions/color_schema.json' },
              transparency: {
                type: 'integer',
                description:
                  'A value between `100` (full transparency) and `0` (full opacity).',
                minimum: 0,
                maximum: 100,
              },
            },
            additionalProperties: !1,
          },
          'font_schema.json': {
            title: 'font',
            type: 'object',
            description: 'Font used for text symbols.',
            properties: {
              decoration: {
                type: 'string',
                description: 'The text decoration.',
                enum: ['line-through', 'none', 'underline'],
                default: 'none',
              },
              family: { type: 'string', description: 'The font family.' },
              size: {
                type: 'number',
                description:
                  'The font size in points. Ignored when font is used on TextSymbol3DLayer.',
              },
              style: {
                type: 'string',
                description: 'The text style.',
                enum: ['italic', 'normal', 'oblique'],
                default: 'normal',
              },
              weight: {
                type: 'string',
                description: 'The text weight.',
                enum: ['bold', 'bolder', 'lighter', 'normal'],
                default: 'normal',
              },
            },
            additionalProperties: !1,
          },
          'halo_schema.json': {
            title: 'halo',
            type: 'object',
            description: 'Halo definition.',
            properties: {
              color: { $ref: '#/definitions/color_schema.json' },
              size: {
                type: 'number',
                description: 'Width of the halo in points.',
              },
              transparency: {
                type: 'integer',
                description:
                  'A value between `100` (full transparency) and `0` (full opacity).',
                minimum: 0,
                maximum: 100,
              },
            },
            additionalProperties: !1,
          },
          'material_schema.json': {
            title: 'Material',
            type: 'object',
            description: 'The material used to shade the geometry.',
            properties: {
              color: { $ref: '#/definitions/color_schema.json' },
              transparency: {
                type: 'integer',
                description:
                  'A value between `100` (full transparency) and `0` (full opacity). Ignored if no color is specified.',
                minimum: 0,
                maximum: 100,
              },
            },
            additionalProperties: !1,
          },
          'colorRamp_schema.json': {
            title: 'Color Ramp',
            description:
              'A colorRamp object is used to specify a range of colors that are applied to a group of symbols.',
            oneOf: [
              { $ref: '#/definitions/colorRamp_algorithmic_schema.json' },
              { $ref: '#/definitions/colorRamp_multipart_schema.json' },
            ],
          },
          'field_authoringInfo_schema.json': {
            title: 'AuthoringInfo Field',
            type: 'object',
            description:
              'Contains information about an attribute field relating to Relationship renderers.',
            properties: {
              classBreakInfos: {
                type: 'array',
                items: {
                  $ref: '#/definitions/classBreakInfo_authoringInfo_schema.json',
                },
              },
              field: {
                type: 'string',
                description: 'Attribute field used for renderer.',
              },
              label: {
                type: 'string',
                description:
                  'The label used to describe the field or attribute in the legend.',
              },
              normalizationField: {
                type: 'string',
                description: 'Attribute field used to normalize the data.',
              },
            },
            additionalProperties: !1,
          },
          'authoringInfo_visualVariable_schema.json': {
            title: 'AuthoringInfo Visual Variable',
            type: 'object',
            description:
              'This visual variable pertains specifically to [authoringInfo](authoringInfo.md) and is different from visual variables directly on the [renderer](renderer.md).',
            properties: {
              endTime: {
                type: ['number', 'string'],
                description:
                  'A Unix stamp. Both `startTime` or `endTime` can be fields. If this is the case, their names must be different.',
              },
              field: {
                type: 'string',
                description:
                  'The attribute field the user chose in the Smart Mapping gallery. Must be the same as in either `startTime` or `endTime`.',
              },
              maxSliderValue: {
                type: 'number',
                description:
                  'A numeric value indicating the maximum value displayed.',
              },
              minSliderValue: {
                type: 'number',
                description:
                  'A numeric value indicating the minimum value displayed.',
              },
              startTime: {
                type: ['number', 'string'],
                description:
                  'A Unix time stamp. Both `startTime` or `endTime` can be fields. If this is the case, their names must be different.',
              },
              style: {
                type: 'string',
                description:
                  '(This property is used for comparison rendering). It is used to map the ratio between two numbers. It is possible to express that relationship as percentages, simple ratios, or an overall percentage.',
                enum: ['percent', 'percentTotal', 'ratio'],
              },
              theme: {
                type: 'string',
                description:
                  'Theme to be used only when working with visual variables of type `colorInfo`. Default is `high-to-low`.',
                enum: [
                  'above-and-below',
                  'centered-on',
                  'extremes',
                  'high-to-low',
                ],
              },
              type: {
                type: 'string',
                description:
                  "A string value specifying the type of renderer's visual variable.",
                enum: [
                  'colorInfo',
                  'rotationInfo',
                  'sizeInfo',
                  'transparencyInfo',
                ],
              },
              units: {
                type: 'string',
                description:
                  '(This property is used only with age renderers.) Units for startTime and endTime.',
                enum: [
                  'days',
                  'hours',
                  'minutes',
                  'months',
                  'seconds',
                  'years',
                ],
              },
            },
            additionalProperties: !1,
          },
          'styleOrigin_schema.json': {
            title: 'styleOrigin',
            type: 'object',
            description:
              'The origin of the style from which the symbol was originally referenced. A reference to the style origin can be either by styleName or by styleUrl (but not both). It may be used to understand where a symbol was originally sourced from, but does not affect actual appearance or rendering of the symbol.',
            properties: {
              name: {
                type: 'string',
                description: 'Identifies a symbol in the style by name.',
              },
              styleName: {
                type: 'string',
                description:
                  'A registered web style name, such as `EsriThematicShapesStyle`',
              },
              styleUrl: {
                description: 'URL to a style definition.',
                oneOf: [
                  { type: 'string', description: 'An absolute URL' },
                  {
                    type: 'string',
                    description: 'A relative path starting with ./',
                    pattern: '^\\./.+$',
                  },
                ],
              },
            },
            oneOf: [
              { required: ['name', 'styleName'] },
              { required: ['name', 'styleUrl'] },
            ],
            additionalProperties: !1,
          },
          'extrudeSymbol3DLayer_schema.json': {
            title: 'ExtrudeSymbol3DLayer',
            type: 'object',
            description:
              'ExtrudeSymbol3DLayer is used to render Polygon geometries by extruding them upward from the ground, creating a 3D volumetric object.',
            properties: {
              castShadows: {
                type: 'boolean',
                description:
                  'Boolean to control the shadow casting behaviour of the rendered geometries.',
                default: !0,
              },
              edges: {
                description: 'Specifies an edge visualization style.',
                $ref: '#/definitions/edges_schema.json',
              },
              enable: { type: 'boolean' },
              material: { $ref: '#/definitions/material_schema.json' },
              size: {
                type: 'number',
                description: 'Extrusion height in meters.',
              },
              type: {
                type: 'string',
                description: 'Specifies the type of symbol used.',
                enum: ['Extrude'],
              },
            },
            required: ['size', 'type'],
            additionalProperties: !1,
          },
          'fillSymbol3DLayer_schema.json': {
            title: 'FillSymbol3DLayer',
            type: 'object',
            description:
              'FillSymbol3DLayer is used to render the surfaces of flat 2D Polygon geometries and 3D volumetric meshes in a SceneView.',
            properties: {
              castShadows: {
                type: 'boolean',
                description:
                  'Boolean to control the shadow casting behaviour of the rendered geometries (only applies to MeshSymbol3D).',
                default: !0,
              },
              edges: { $ref: '#/definitions/edges_schema.json' },
              enable: { type: 'boolean' },
              material: {
                $ref: '#/definitions/materialColorMixMode_schema.json',
              },
              outline: {
                description:
                  'The outline of the symbol layer (only applies to PolygonSymbol3D).',
                $ref: '#/definitions/outline_schema.json',
              },
              pattern: { $ref: '#/definitions/polygonPattern_schema.json' },
              type: {
                type: 'string',
                description: 'Specifies the type of symbol used.',
                enum: ['Fill'],
              },
            },
            required: ['material', 'type'],
            additionalProperties: !1,
          },
          'iconSymbol3DLayer_schema.json': {
            title: 'IconSymbol3DLayer',
            type: 'object',
            description:
              'IconSymbol3DLayer is used to render Point geometries using a flat 2D icon (e.g. a circle) with a PointSymbol3D in a SceneView.',
            properties: {
              anchor: {
                type: 'string',
                enum: [
                  'bottom',
                  'bottomLeft',
                  'bottomRight',
                  'center',
                  'left',
                  'relative',
                  'right',
                  'top',
                  'topLeft',
                  'topRight',
                ],
                default: 'center',
              },
              anchorPosition: {
                type: 'array',
                description:
                  'When `anchor` equals `relative`, this property specifies the position within the icon that should coincide with the feature geometry. Otherwise it is ignored. The position is defined as a factor of the icon dimensions that is added to the icon center: `positionInIcon = (0.5 + anchorPosition) * size`, where `size` is the original size of the icon resource.',
                items: { type: 'number' },
                minItems: 2,
                maxItems: 2,
              },
              enable: { type: 'boolean' },
              material: { $ref: '#/definitions/material_schema.json' },
              outline: {
                type: 'object',
                description:
                  'Sets properties of the outline of the IconSymbol3DLayer.',
                allOf: [
                  { $ref: '#/definitions/outline_schema.json' },
                  {
                    properties: { color: {}, size: {}, transparency: {} },
                    additionalProperties: !1,
                  },
                ],
              },
              resource: {
                $ref: '#/definitions/iconSymbol3DLayer_resource_schema.json',
              },
              size: {
                type: 'number',
                description: 'Icon size in points, positive only',
                minimum: 0,
              },
              type: {
                type: 'string',
                description: 'Specifies the type of symbol used.',
                enum: ['Icon'],
              },
            },
            required: ['size', 'type'],
            additionalProperties: !1,
          },
          'lineSymbol3DLayer_schema.json': {
            title: 'LineSymbol3DLayer',
            type: 'object',
            description:
              'LineSymbol3DLayer renders Polyline geometries using a flat 2D line with a LineSymbol3D in a 3D SceneView.',
            properties: {
              cap: {
                type: 'string',
                $ref: '#/definitions/lineCap_schema.json',
              },
              enable: { type: 'boolean' },
              join: {
                type: 'string',
                description: 'Shape of the intersection of two line segments.',
                enum: ['bevel', 'miter', 'round'],
                default: 'miter',
              },
              marker: { $ref: '#/definitions/lineMarker_schema.json' },
              material: { $ref: '#/definitions/material_schema.json' },
              pattern: { $ref: '#/definitions/linePattern_schema.json' },
              size: {
                type: 'number',
                description: 'Line width in points, positive only',
                minimum: 0,
              },
              type: {
                type: 'string',
                description: 'Specifies the type of symbol used.',
                enum: ['Line'],
              },
            },
            required: ['size', 'type'],
            additionalProperties: !1,
          },
          'objectSymbol3DLayer_schema.json': {
            title: 'ObjectSymbol3DLayer',
            type: 'object',
            description:
              'ObjectSymbol3DLayer is used to render Point geometries using a volumetric 3D shape (e.g., a sphere or cylinder) with a Symbol3D in a SceneView.',
            properties: {
              anchor: {
                type: 'string',
                description:
                  'The positioning of the object relative to the geometry.',
                enum: ['bottom', 'center', 'origin', 'relative', 'top'],
                default: 'origin',
              },
              anchorPosition: {
                type: 'array',
                description:
                  "When `anchor` equals `relative`, this property specifies the positioning of the object relative to the geometry as a fraction of the symbol layer's bounding box. Otherwise it is ignored.",
                items: { type: 'number' },
                minItems: 3,
                maxItems: 3,
              },
              castShadows: {
                type: 'boolean',
                description:
                  'Boolean to control the shadow casting behaviour of the rendered geometries.',
                default: !0,
              },
              depth: {
                type: 'number',
                description: 'Object depth in meters, positive only',
                minimum: 0,
              },
              enable: { type: 'boolean' },
              heading: {
                type: 'number',
                description:
                  'Rotation angle around Z axis in degrees. At 0 degrees, the model points in the direction of the Y-axis. Positive values indicate clockwise rotation (when looked at from the top). [Detailed description](static/objectSymbolLayerOrientation.md).',
              },
              height: {
                type: 'number',
                description: 'Object height in meters, positive only',
                minimum: 0,
              },
              material: { $ref: '#/definitions/material_schema.json' },
              resource: {
                $ref: '#/definitions/objectSymbol3DLayer_resource_schema.json',
              },
              roll: {
                type: 'number',
                description:
                  'Rotation angle around Y axis in degrees. At 0 degrees, the model is level. A positive value lifts the left part and lowers the right part of the model. [Detailed description](static/objectSymbolLayerOrientation.md).',
              },
              tilt: {
                type: 'number',
                description:
                  'Rotation angle around X axis in degrees. At 0 degrees, the model is level. A positive value lifts the front and lowers the back of the model. [Detailed description](static/objectSymbolLayerOrientation.md).',
              },
              type: {
                type: 'string',
                description: 'Specifies the type of symbol used.',
                enum: ['Object'],
              },
              width: {
                type: 'number',
                description: 'Object width in meters, positive only',
                minimum: 0,
              },
            },
            required: ['type'],
            additionalProperties: !1,
          },
          'waterSymbol3DLayer_schema.json': {
            title: 'WaterSymbol3DLayer',
            type: 'object',
            description:
              'Symbol Layer that describes a water appearance on surfaces in a SceneView.',
            properties: {
              color: {
                description: 'The dominant water color.',
                $ref: '#/definitions/color_schema.json',
                default: [0, 119, 190],
              },
              enable: { type: 'boolean' },
              type: {
                type: 'string',
                description: 'Specifies the type of symbol used.',
                enum: ['Water'],
              },
              waterbodySize: {
                type: 'string',
                description:
                  'Size of the waterbody the symbol layer represents. Applications will display waves that are appropriate for the chosen body of water, for example ocean versus marina versus swimming pool.',
                enum: ['large', 'medium', 'small'],
                default: 'medium',
              },
              waveDirection: {
                type: 'number',
                description:
                  "Azimuthal bearing for direction of the waves. If ommitted, waves appear directionless. The value is interpreted as 'geographic' rotation, i.e. clockwise starting from north.",
                minimum: 0,
                maximum: 360,
              },
              waveStrength: {
                type: 'string',
                description:
                  'The magnitude of the waves displayed on the waterbody. Strings roughly follow the [Douglas sea scale](https://en.wikipedia.org/wiki/Douglas_sea_scale), currently limited to lower degrees.',
                enum: ['calm', 'moderate', 'rippled', 'slight'],
                default: 'moderate',
              },
            },
            required: ['type'],
            additionalProperties: !1,
          },
          'cimSymbolReference_schema.json': {
            title: 'CIMSymbolReference',
            type: 'object',
            description:
              'Represents a symbol reference that contains a CIM symbol. In addition to `type` listed below, a symbol reference will contain additional properties. More details on CIM symbol reference and CIM symbols are available on github: [Symbols Overview](https://github.com/Esri/cim-spec/blob/master/docs/v2/Overview-Symbols.md).',
            properties: {
              type: {
                type: 'string',
                description: 'Specifies the type of symbol used.',
                enum: ['CIMSymbolReference'],
              },
            },
            required: ['type'],
            additionalProperties: !0,
          },
          'lineSymbol3D_schema.json': {
            title: 'LineSymbol3D',
            type: 'object',
            description:
              'LineSymbol3D is used to render features with Polyline geometry in a 3D SceneView.',
            properties: {
              styleOrigin: { $ref: '#/definitions/styleOrigin_schema.json' },
              symbolLayers: {
                type: 'array',
                description:
                  'A Collection of Symbol3DLayer objects used to visualize the graphic or feature.',
                items: {
                  oneOf: [
                    { $ref: '#/definitions/lineSymbol3DLayer_schema.json' },
                    { $ref: '#/definitions/pathSymbol3DLayer_schema.json' },
                  ],
                },
              },
              type: {
                type: 'string',
                description: 'Specifies the type of symbol used.',
                enum: ['LineSymbol3D'],
              },
            },
            required: ['symbolLayers', 'type'],
            additionalProperties: !1,
          },
          'meshSymbol3D_schema.json': {
            title: 'MeshSymbol3D',
            type: 'object',
            description:
              'MeshSymbol3D is used to render 3D mesh features in a SceneLayer in a 3D SceneView.',
            properties: {
              styleOrigin: { $ref: '#/definitions/styleOrigin_schema.json' },
              symbolLayers: {
                type: 'array',
                description:
                  'A Collection of Symbol3DLayer objects used to visualize the graphic or feature.',
                items: {
                  oneOf: [
                    { $ref: '#/definitions/fillSymbol3DLayer_schema.json' },
                  ],
                },
              },
              type: {
                type: 'string',
                description: 'Specifies the type of symbol used',
                enum: ['MeshSymbol3D'],
              },
            },
            required: ['symbolLayers', 'type'],
            additionalProperties: !1,
          },
          'pointSymbol3D_schema.json': {
            title: 'PointSymbol3D',
            type: 'object',
            description:
              'PointSymbol3D is used to render features with Point geometry in a 3D SceneView.',
            properties: {
              callout: { $ref: '#/definitions/callout_schema.json' },
              styleOrigin: { $ref: '#/definitions/styleOrigin_schema.json' },
              symbolLayers: {
                type: 'array',
                description:
                  'A Collection of Symbol3DLayer objects used to visualize the graphic or feature.',
                items: {
                  oneOf: [
                    { $ref: '#/definitions/iconSymbol3DLayer_schema.json' },
                    { $ref: '#/definitions/objectSymbol3DLayer_schema.json' },
                    { $ref: '#/definitions/textSymbol3DLayer_schema.json' },
                  ],
                },
              },
              type: {
                type: 'string',
                description: 'Specifies the type of symbol used',
                enum: ['PointSymbol3D'],
              },
              verticalOffset: {
                $ref: '#/definitions/verticalOffset_schema.json',
              },
            },
            required: ['symbolLayers', 'type'],
            additionalProperties: !1,
          },
          'styleSymbolReference_schema.json': {
            title: 'StyleSymbolReference',
            type: 'object',
            description:
              'The StyleSymbolReference is used to reference a symbol from a portal styleItem',
            properties: {
              name: {
                type: 'string',
                description: 'Identifies a symbol in the style by name.',
              },
              styleName: {
                type: 'string',
                description:
                  'A registered web style name, such as `EsriThematicTreesStyle`',
              },
              styleUrl: {
                type: 'string',
                description: 'URL to a style definition.',
              },
              type: {
                type: 'string',
                description: 'The type of the symbol',
                enum: ['styleSymbolReference'],
              },
            },
            oneOf: [
              { required: ['name', 'styleUrl', 'type'] },
              { required: ['name', 'styleName', 'type'] },
            ],
            additionalProperties: !1,
          },
          'colorInfo_visualVariable_schema.json': {
            title: 'ColorInfo Visual Variable',
            type: 'object',
            description:
              'The colorInfo visual variable defines how a continuous color ramp is applied to features based on the values of a numeric field attribute.',
            properties: {
              field: {
                type: 'string',
                description:
                  'Attribute field used for color rendering if no valueExpression is provided.',
              },
              legendOptions: {
                type: 'object',
                allOf: [
                  {
                    $ref: '#/definitions/visualVariableLegendOptions_schema.json',
                  },
                  {
                    properties: { showLegend: {}, title: {} },
                    additionalProperties: !1,
                  },
                ],
              },
              normalizationField: {
                type: 'string',
                description: 'Attribute field used to normalize the data.',
              },
              stops: {
                type: 'array',
                description: 'An array of stop objects.',
                items: { $ref: '#/definitions/colorStop_schema.json' },
              },
              type: {
                type: 'string',
                description: 'Specifies the type of visual variable.',
                enum: ['colorInfo'],
              },
              valueExpression: {
                type: 'string',
                description:
                  'An [Arcade expression](https://developers.arcgis.com/arcade/) that computes a value in lieu of a value provided by an attribute `field`.',
              },
              valueExpressionTitle: {
                type: 'string',
                description:
                  'The title identifying and describing the associated [Arcade](https://developers.arcgis.com/arcade/) expression as defined in the `valueExpression` property.',
              },
            },
            required: ['type'],
            additionalProperties: !1,
          },
          'rotationInfo_visualVariable_schema.json': {
            title: 'RotationInfo Visual Variable',
            type: 'object',
            description:
              'The rotation visual variable defines how features rendered with marker symbols are rotated. The rotation value is determined by a value in a field or an Arcade expression calculating a value. Use either the `field` property or `valueExpression` when specifying rotation values.',
            properties: {
              axis: {
                type: 'string',
                description:
                  'Defines the rotation axis the visual variable should be applied to when rendering features with an ObjectSymbol3DLayer. [Detailed description](static/objectSymbolLayerOrientation.md).',
                enum: ['heading', 'roll', 'tilt'],
                default: 'heading',
              },
              field: {
                type: 'string',
                description:
                  'Attribute field used for setting the rotation of a symbol if no `valueExpression` is provided.',
              },
              legendOptions: {
                type: 'object',
                allOf: [
                  {
                    $ref: '#/definitions/visualVariableLegendOptions_schema.json',
                  },
                  {
                    properties: { showLegend: {}, title: {} },
                    additionalProperties: !1,
                  },
                ],
              },
              rotationType: {
                type: 'string',
                description:
                  'Defines the origin and direction of rotation depending on how the angle of rotation was measured. Possible values are `geographic` which rotates the symbol from the north in a clockwise direction and `arithmetic` which rotates the symbol from the east in a counter-clockwise direction.',
                enum: ['arithmetic', 'geographic'],
                default: 'geographic',
              },
              type: {
                type: 'string',
                description:
                  'A string value indicating the type of visual variable used for the renderer.',
                enum: ['rotationInfo'],
              },
              valueExpression: {
                type: 'string',
                description:
                  'An [Arcade expression](https://developers.arcgis.com/arcade/) evaluating to a number.',
              },
              valueExpressionTitle: {
                type: 'string',
                description:
                  'The title identifying and describing the associated [Arcade expression] (https://developers.arcgis.com/arcade/) as defined in the `valueExpression` property.',
              },
            },
            required: ['type'],
            additionalProperties: !1,
          },
          'sizeInfo_visualVariable_schema.json': {
            title: 'SizeInfo Visual Variable',
            type: 'object',
            description:
              'The sizeInfo visual variable defines how size is applied to features based on the values of a numeric field attribute. The minimum and maximum values of the data should be indicated along with their respective size values. You must specify either `minSize` and `maxSize`, or `stops`, or `valueUnit` to construct the size ramp. All features with values falling in between the specified min and max data values (or stops) will be scaled proportionally between the provided min and max sizes.',
            properties: {
              axis: {
                type: 'string',
                description:
                  'Defines the axis the size visual variable should be applied to when rendering features with an ObjectSymbol3DLayer.',
                enum: ['all', 'depth', 'height', 'width', 'widthAndDepth'],
                default: 'all',
              },
              field: {
                type: 'string',
                description:
                  'Attribute field used for size rendering if no valueExpression is provided.',
              },
              legendOptions: {
                type: 'object',
                allOf: [
                  {
                    $ref: '#/definitions/visualVariableLegendOptions_schema.json',
                  },
                  {
                    properties: { customValues: {}, showLegend: {}, title: {} },
                    additionalProperties: !1,
                  },
                ],
              },
              maxDataValue: {
                type: 'number',
                description: 'The maximum data value.',
              },
              maxSize: {
                type: 'number',
                description:
                  'Specifies the maximum size to be applied to the symbol. This is required if valueUnit is set to `unknown`.',
              },
              minDataValue: {
                type: 'number',
                description: 'The minimum data value.',
              },
              minSize: {
                type: 'number',
                description:
                  'Specifies the minimum size to be applied to the symbol. This is required if valueUnit is set to `unknown`.',
              },
              normalizationField: {
                type: 'string',
                description: 'Attribute field used to normalize the data.',
              },
              stops: {
                type: 'array',
                description:
                  'An array of objects that defines the thematic size ramp in a sequence of data or expression stops. At least two stops are required. The stops must be listed in ascending order based on the value of the `value` property in each stop. This property is required if `minDataValue`, `maxDataValue`, `minSize`, and `maxSize` are not defined.',
                items: { $ref: '#/definitions/sizeStop_schema.json' },
              },
              target: {
                type: 'string',
                description:
                  'Only used when sizeInfo is used for polygon outlines.',
                enum: ['outline'],
              },
              type: {
                type: 'string',
                description: 'Specifies the type of visual variable.',
                enum: ['sizeInfo'],
              },
              useSymbolValue: {
                type: 'boolean',
                description:
                  "When setting a size visual variable on a renderer using an ObjectSymbol3DLayer, this property indicates whether to apply the value defined by the height, width, or depth properties to the corresponding axis of this visual variable instead of proportionally scaling this axis' value after other axes.",
              },
              valueExpression: {
                type: 'string',
                description:
                  'An [Arcade expression](https://developers.arcgis.com/arcade/) evaluating to a number.',
              },
              valueExpressionTitle: {
                type: 'string',
                description:
                  'The title identifying and describing the associated [Arcade](https://developers.arcgis.com/arcade/) expression as defined in the `valueExpression` property.',
              },
              valueRepresentation: {
                type: 'string',
                description:
                  'Specifies how to apply the data value when mapping real-world sizes. See table below for supported values.',
                enum: ['area', 'diameter', 'distance', 'radius', 'width'],
              },
              valueUnit: {
                type: 'string',
                description:
                  'A string value indicating the unit of measurement. Defaults to `meters` if not set.',
                enum: [
                  'centimeters',
                  'decimal-degrees',
                  'decimeters',
                  'feet',
                  'inches',
                  'kilometers',
                  'meters',
                  'miles',
                  'millimeters',
                  'nautical-miles',
                  'unknown',
                  'yards',
                ],
                default: 'meters',
              },
            },
            required: ['type'],
            additionalProperties: !1,
          },
          'transparencyInfo_visualVariable_schema.json': {
            title: 'TransparencyInfo Visual Variable',
            type: 'object',
            description:
              "The transparencyInfo visual variable defines the transparency, or opacity, of each feature's symbol based on a numeric attribute field value.",
            properties: {
              field: {
                type: 'string',
                description:
                  'Attribute field used for setting the transparency of a feature if no `valueExpression` is provided.',
              },
              legendOptions: {
                type: 'object',
                allOf: [
                  {
                    $ref: '#/definitions/visualVariableLegendOptions_schema.json',
                  },
                  {
                    properties: { showLegend: {}, title: {} },
                    additionalProperties: !1,
                  },
                ],
              },
              normalizationField: {
                type: 'string',
                description: 'Attribute field used to normalize the data.',
              },
              stops: {
                type: 'array',
                description: 'An array of transparencyStop objects.',
                items: { $ref: '#/definitions/transparencyStop_schema.json' },
              },
              type: {
                type: 'string',
                description: 'Specifies the type of visual variable.',
                enum: ['transparencyInfo'],
              },
              valueExpression: {
                type: 'string',
                description:
                  'An [Arcade expression](https://developers.arcgis.com/arcade/) evaluating to a number.',
              },
              valueExpressionTitle: {
                type: 'string',
                description:
                  'The title identifying and describing the associated [Arcade](https://developers.arcgis.com/arcade/) expression as defined in the `valueExpression` property.',
              },
            },
            required: ['type'],
            additionalProperties: !1,
          },
          'colorClassBreakInfo_schema.json': {
            title: 'colorClassBreakInfo',
            type: 'object',
            description:
              'The classBreaksInfo object provides information about the class breaks associated with the renderer.',
            properties: {
              classMaxValue: {
                type: 'number',
                description:
                  'A numeric value used to specify the maximum value for a break.',
              },
              classMinValue: {
                type: 'number',
                description:
                  "A numeric value used to specify discontinuous class breaks. If this value is null or is missing, the map server will calculate the minimum value based on the preceding class' maximum value.",
              },
              color: { $ref: '#/definitions/color_schema.json' },
              description: {
                type: 'string',
                description: 'String value used to describe the class.',
              },
              label: {
                type: 'string',
                description: 'String value used to label the class.',
              },
            },
            required: ['classMaxValue', 'classMinValue', 'color'],
            additionalProperties: !1,
          },
          'colorModulationInfo_schema.json': {
            title: 'colorModulationInfo',
            type: 'object',
            description:
              'Indicates whether modulation should be used to render the point.',
            properties: {
              field: {
                type: 'string',
                description:
                  'the attribute to use as a source for the modulation amplitude',
              },
              maxValue: {
                type: 'number',
                description:
                  'maximum value to compute modulation linear mapping',
              },
              minValue: {
                type: 'number',
                description:
                  'minimum value to compute modulation linear mapping',
              },
            },
            required: ['field', 'maxValue', 'minValue'],
            additionalProperties: !1,
          },
          'pointSizeAlgorithm_schema.json': {
            title: 'PointCloud Size Algorithm',
            type: 'object',
            description: 'Size algorithms for point cloud performance.',
            oneOf: [
              {
                $ref: '#/definitions/pointCloudFixedSizeAlgorithm_schema.json',
              },
              { $ref: '#/definitions/pointCloudSplatAlgorithm_schema.json' },
            ],
          },
          'colorStop_schema.json': {
            title: 'colorStop',
            description:
              "A colorStop object describes the renderer's color ramp with more specificity than just colors.",
            properties: {
              color: {
                description:
                  'A CSS color string or an array of rbga values. The color to place at the stop indicated by either a ratio or value.',
                $ref: '#/definitions/color_schema.json',
              },
              label: {
                type: 'string',
                description:
                  'Value if a label is needed on the legend for a stop.',
              },
              value: {
                type: 'number',
                description:
                  'The pixel intensity value. Describes the pixel intensity value that the color should be associated with. Just like in colorInfo, using value will ignore `maxPixelIntensity` and `minPixelIntensity` properties. It will actually set those properties to maximum and minimum values you set in the colorStops array. The hard values are converted to ratios to create the color gradient that is used in the heatmap calculations. Setting `minPixelIntensity` or `maxPixelIntensity`, after setting colorStops with values, removes the hard link between the color ramp and the pixel intensity values that were used to create it.',
              },
            },
            required: ['color'],
          },
          'colorUniqueValueInfo_schema.json': {
            title: 'colorUniqueValueInfo',
            type: 'object',
            description:
              'The colorUniqueValueInfo object matches a unique value with a specific color.',
            properties: {
              color: { $ref: '#/definitions/color_schema.json' },
              description: {
                type: 'string',
                description: 'String value used to describe the class.',
              },
              label: {
                type: 'string',
                description: 'String value used to label the class.',
              },
              values: {
                type: 'array',
                description: 'List of string values used to classify points.',
                items: { oneOf: [{ type: 'string' }] },
              },
            },
            required: ['color', 'values'],
            additionalProperties: !1,
          },
          'colormapInfo_schema.json': {
            title: 'ColormapInfo',
            type: 'object',
            description:
              'The colormap information used when rendering raster data.',
            properties: {
              color: {
                description: 'The pixel color.',
                $ref: '#/definitions/color_schema.json',
              },
              label: {
                type: 'string',
                description: 'The label used for the pixel value.',
              },
              value: { type: 'number', description: 'The raster pixel value.' },
            },
            required: ['color', 'value'],
            additionalProperties: !1,
          },
          'voxelIsosurfaceStyle_schema.json': {
            title: 'Voxel Isosurface Style',
            type: 'object',
            description:
              'The isosurface style describes the value and coloring of the isosurface. For example, for a given variable temperature you can define up to four isosurfaces based on a temperature value.',
            properties: {
              color: { $ref: '#/definitions/color_schema.json' },
              enabled: {
                type: 'boolean',
                description:
                  'Determines if the isosurface should be shown or hidden.',
                default: !0,
              },
              label: {
                type: 'string',
                description: 'Label for the isosurface.',
              },
              value: { type: 'number', description: 'Value of the variable.' },
            },
            required: ['color', 'value'],
            additionalProperties: !1,
          },
          'voxelTransferFunctionStyle_schema.json': {
            title: 'Voxel Transfer Function Style',
            type: 'object',
            description:
              'Defines the mapping between voxel values and color and transparency.',
            properties: {
              alphaStops: {
                type: 'array',
                description:
                  'Describes the transparency stops (transparency mapping).',
                items: { $ref: '#/definitions/voxelAlphaStop_schema.json' },
                minItems: 2,
              },
              colorStops: {
                type: 'array',
                description:
                  'Describes the color stops defining the color ramp.',
                items: { $ref: '#/definitions/voxelColorStop_schema.json' },
                minItems: 2,
              },
              interpolation: {
                type: 'string',
                description: 'Interpolation mode',
                enum: ['linear', 'nearest'],
              },
              rangeFilter: {
                description:
                  'Defines the range of voxels displayed. Voxels with values outside of this range will be discarded.',
                $ref: '#/definitions/voxelRangeFilter_schema.json',
              },
              stretchRange: {
                type: 'array',
                description:
                  'Describes the low and high point for value-to-color mapping.',
                items: { type: 'number' },
                minItems: 2,
                maxItems: 2,
              },
            },
            required: ['stretchRange'],
            additionalProperties: !1,
          },
          'voxelUniqueValue_schema.json': {
            title: 'Voxel Unique Value',
            type: 'object',
            description:
              'Describes the unique value of a variable with a discrete data type.',
            properties: {
              color: { $ref: '#/definitions/color_schema.json' },
              enabled: {
                type: 'boolean',
                description: 'Show or hide all voxels equal to this value.',
                default: !0,
              },
              label: {
                type: 'string',
                description: 'Label for the unique value.',
              },
              value: {
                type: 'integer',
                description: 'Unique value of the variable.',
              },
            },
            required: ['color', 'value'],
            additionalProperties: !1,
          },
          'voxelDynamicSection_schema.json': {
            title: 'Voxel Dynamic Section',
            type: 'object',
            description:
              'A section is a plane through the voxel layer. A section can be moved by changing the position and orientation.',
            properties: {
              enabled: {
                type: 'boolean',
                description: 'Boolean defining section visibility.',
                default: !0,
              },
              label: {
                type: 'string',
                description: 'The label for the dynamic section.',
              },
              normal: {
                type: 'array',
                description:
                  'Normal vector to the plane in voxel space. Defining the orientation of the dynamic section.',
                items: { type: 'number' },
                minItems: 3,
                maxItems: 3,
              },
              point: {
                type: 'array',
                description:
                  'Point belonging to the section plane in voxel space. Defining the position of the dynamic section.',
                items: { type: 'number' },
                minItems: 3,
                maxItems: 3,
              },
            },
            required: ['normal', 'point'],
            additionalProperties: !1,
          },
          'sketchEdges_schema.json': {
            title: 'Sketch Edges',
            type: 'object',
            description:
              'The sketch edge rendering configuration of a symbol layer. Edges of type `sketch` are rendered with a hand-drawn look in mind.',
            properties: {
              color: { $ref: '#/definitions/color_schema.json' },
              extensionLength: {
                type: 'number',
                description:
                  'A size in points by which to extend edges beyond their original end points.',
              },
              size: {
                type: 'number',
                description: 'Edge size in points, positive only',
                minimum: 0,
              },
              transparency: {
                type: 'integer',
                description:
                  'The value has to lie between `100` (full transparency) and `0` (full opacity).',
                minimum: 0,
                maximum: 100,
              },
              type: {
                type: 'string',
                description: 'The type of edge visualization.',
                enum: ['sketch'],
              },
            },
            required: ['color', 'type'],
            additionalProperties: !1,
          },
          'solidEdges_schema.json': {
            title: 'Solid Edges',
            type: 'object',
            description:
              'The solid edge rendering configuration of a symbol layer. Edges of type `solid` are rendered in a single color, unaffected by scene lighting.',
            properties: {
              color: { $ref: '#/definitions/color_schema.json' },
              extensionLength: {
                type: 'number',
                description:
                  'A size in points by which to extend edges beyond their original end points.',
              },
              size: {
                type: 'number',
                description: 'Edge size in points, positive only',
                minimum: 0,
              },
              transparency: {
                type: 'integer',
                description:
                  'The value has to lie between `100` (full transparency) and `0` (full opacity).',
                minimum: 0,
                maximum: 100,
              },
              type: {
                type: 'string',
                description: 'The type of edge visualization.',
                enum: ['solid'],
              },
            },
            required: ['color', 'type'],
            additionalProperties: !1,
          },
          'colorRamp_algorithmic_schema.json': {
            title: 'Color Ramp Algorithmic',
            description:
              'A colorRamp object is used to specify a range of colors that are applied to a group of symbols.',
            properties: {
              algorithm: {
                type: 'string',
                description: 'Algorithm used for calculating the ramp.',
                enum: [
                  'esriCIELabAlgorithm',
                  'esriHSVAlgorithm',
                  'esriLabLChAlgorithm',
                ],
              },
              fromColor: {
                description:
                  'Array representing the initial color to start the ramp from.',
                $ref: '#/definitions/color_schema.json',
              },
              toColor: {
                description:
                  'Array representing the final color to end the ramp with.',
                $ref: '#/definitions/color_schema.json',
              },
              type: {
                type: 'string',
                description: 'Value indicating the type of colorRamp.',
                enum: ['algorithmic'],
              },
            },
            additionalProperties: !1,
          },
          'colorRamp_multipart_schema.json': {
            title: 'Color Ramp Multipart',
            description:
              'A colorRamp object is used to specify a range of colors that are applied to a group of symbols.',
            properties: {
              colorRamps: {
                type: 'array',
                description:
                  'A multipart color ramp is defined by a list of constituent color ramps.',
                items: {
                  $ref: '#/definitions/colorRamp_algorithmic_schema.json',
                },
              },
              type: {
                type: 'string',
                description: 'Value indicating the type of colorRamp.',
                enum: ['multipart'],
              },
            },
            additionalProperties: !1,
          },
          'classBreakInfo_authoringInfo_schema.json': {
            title: 'AuthoringInfo classBreakInfo',
            type: 'object',
            description:
              'The classBreaksInfo object provides information about the class breaks associated with the Relationship renderer.',
            properties: {
              maxValue: {
                type: 'number',
                description:
                  'A numeric value used to specify the maximum value for a break.',
              },
              minValue: {
                type: 'number',
                description:
                  'A numeric value used to specify the minimum value for a break.',
              },
            },
            additionalProperties: !1,
          },
          'materialColorMixMode_schema.json': {
            title: 'Material',
            type: 'object',
            description:
              'The material used to shade the geometry, including colorMixMode options.',
            properties: {
              color: { $ref: '#/definitions/color_schema.json' },
              colorMixMode: {
                type: 'string',
                description:
                  "Controls how symbolLayer or visualVariable color is applied onto the underlying geometry color/texture. This property only applies to FillSymbol3DLayer within MeshSymbol3D.<br><ul><li>`tint`: the feature's appearance (in terms of color) should be altered to match the symbol / visual variable color.</li><li>`replace`: the feature's color is replaced with the symbol / visual variable color.</li><li>`multiply`: the feature's color is multiplied with the symbol color.</li></ul>",
                enum: ['multiply', 'replace', 'tint'],
              },
              transparency: {
                type: 'integer',
                description:
                  'A value between `100` (full transparency) and `0` (full opacity). Ignored if no color is specified.',
                minimum: 0,
                maximum: 100,
              },
            },
            additionalProperties: !1,
          },
          'outline_schema.json': {
            title: 'Outline',
            type: 'object',
            description: 'The outline of the symbol layer.',
            properties: {
              color: { $ref: '#/definitions/color_schema.json' },
              pattern: { $ref: '#/definitions/linePattern_schema.json' },
              patternCap: {
                type: 'string',
                $ref: '#/definitions/lineCap_schema.json',
              },
              size: {
                type: 'number',
                description: 'Outline size in points, positive only',
                minimum: 0,
              },
              transparency: {
                type: 'integer',
                description:
                  'The value has to lie between `100` (full transparency) and `0` (full opacity).',
                minimum: 0,
                maximum: 100,
              },
            },
            required: ['color', 'size'],
            additionalProperties: !1,
          },
          'polygonPattern_schema.json': {
            title: 'Pattern',
            type: 'object',
            description:
              'The pattern used to render the fill of the polygon (only applies to PolygonSymbol3D).',
            properties: {
              style: {
                type: 'string',
                description:
                  'String value representing predefined styles that can be set as polygon fills.',
                enum: [
                  'backward-diagonal',
                  'cross',
                  'diagonal-cross',
                  'forward-diagonal',
                  'horizontal',
                  'none',
                  'solid',
                  'vertical',
                ],
              },
              type: {
                type: 'string',
                description: 'The type of pattern applied to the polygon fill.',
                enum: ['style'],
              },
            },
            required: ['style', 'type'],
            additionalProperties: !1,
          },
          'iconSymbol3DLayer_resource_schema.json': {
            title: 'IconSymbol3DLayer Resource',
            type: 'object',
            description:
              'The shape (primitive) or image URL (href) used to visualize the features.',
            properties: {
              dataURI: {
                type: 'string',
                description:
                  'an image encoded as base64 string, starting with `data:image/`',
                pattern: '^data:image/(.|\\n|\\r)+$',
              },
              href: {
                description: 'URL to the returned image.',
                oneOf: [
                  {
                    type: 'string',
                    description: 'An absolute URL',
                    pattern: '^https?://.+$',
                  },
                  {
                    type: 'string',
                    description: 'A relative path starting with ./',
                    pattern: '^\\./.+$',
                  },
                ],
              },
              primitive: {
                type: 'string',
                description: 'Specifies the type of symbol used.',
                enum: ['circle', 'cross', 'kite', 'square', 'triangle', 'x'],
              },
            },
            oneOf: [
              { required: ['primitive'] },
              { required: ['href'] },
              { required: ['dataURI'] },
            ],
            additionalProperties: !1,
          },
          'lineCap_schema.json': {
            title: 'Line cap',
            type: 'string',
            description:
              'Shape of the tips at the start and end of each line geometry. This also applies to the tips of each pattern segment along the line.',
            enum: ['butt', 'round', 'square'],
            default: 'butt',
          },
          'lineMarker_schema.json': {
            title: 'Line marker',
            type: 'object',
            description:
              'Represents markers placed at the start and end of each line geometry, or both. Markers size is proportional to the width of the line.',
            properties: {
              color: {
                description:
                  "An option to color the markers differently from the line. By default the markers inherit the line's color.",
                $ref: '#/definitions/color_schema.json',
              },
              placement: {
                type: 'string',
                description: 'Indicates where the marker is placed.',
                enum: ['begin', 'begin-end', 'end'],
              },
              style: {
                type: 'string',
                description: 'Style of the marker.',
                enum: ['arrow', 'circle', 'cross', 'diamond', 'square', 'x'],
              },
              type: {
                type: 'string',
                description: 'The type of marker applied to a line.',
                enum: ['style'],
              },
            },
            required: ['type'],
            additionalProperties: !1,
          },
          'linePattern_schema.json': {
            title: 'Line pattern',
            type: 'object',
            description: 'A pattern used to render a line.',
            properties: {
              style: {
                type: 'string',
                description:
                  'String value representing the pattern used to render a line.',
                enum: [
                  'dash',
                  'dash-dot',
                  'dash-dot-dot',
                  'dot',
                  'long-dash',
                  'long-dash-dot',
                  'null',
                  'short-dash',
                  'short-dash-dot',
                  'short-dash-dot-dot',
                  'short-dot',
                  'solid',
                ],
              },
              type: {
                type: 'string',
                description: 'The type of pattern applied to a line.',
                enum: ['style'],
              },
            },
            required: ['style', 'type'],
            additionalProperties: !1,
          },
          'objectSymbol3DLayer_resource_schema.json': {
            title: 'ObjectSymbol3DLayer Resource',
            type: 'object',
            description:
              'The primitive shape (primitive) or external 3D model (href) used to visualize the points.',
            properties: {
              href: {
                oneOf: [
                  {
                    type: 'string',
                    description: 'An absolute URL',
                    pattern: '^https?://.+$',
                  },
                  {
                    type: 'string',
                    description: 'A relative path starting with ./',
                    pattern: '^\\./.+$',
                  },
                ],
              },
              primitive: {
                type: 'string',
                enum: [
                  'cone',
                  'cube',
                  'cylinder',
                  'diamond',
                  'invertedCone',
                  'sphere',
                  'tetrahedron',
                ],
              },
            },
            oneOf: [{ required: ['primitive'] }, { required: ['href'] }],
            additionalProperties: !1,
          },
          'pathSymbol3DLayer_schema.json': {
            title: 'PathSymbol3DLayer',
            type: 'object',
            description:
              'PathSymbol3DLayer renders polyline geometries by extruding a 2D profile along the line, resulting in visualizations like tubes, walls, etc.',
            properties: {
              anchor: {
                type: 'string',
                description:
                  'The position of the extrusion profile with respect to the polyline geometry.',
                enum: ['bottom', 'center', 'top'],
                default: 'center',
              },
              cap: {
                type: 'string',
                $ref: '#/definitions/pathCap_schema.json',
              },
              castShadows: {
                type: 'boolean',
                description:
                  'Boolean to control the shadow casting behaviour of the rendered geometries.',
                default: !0,
              },
              enable: { type: 'boolean' },
              height: {
                type: 'number',
                description:
                  'Path height in meters. If unspecified, it is equal to `width`.',
                minimum: 0,
              },
              join: {
                type: 'string',
                description: 'Shape of the intersection of two line segments.',
                enum: ['bevel', 'miter', 'round'],
                default: 'miter',
              },
              material: { $ref: '#/definitions/material_schema.json' },
              profile: {
                type: 'string',
                description: 'The shape which is extruded along the line.',
                enum: ['circle', 'quad'],
                default: 'circle',
              },
              profileRotation: {
                type: 'string',
                description:
                  'Specifies the axes about which the profile may be rotated at the joins. Constraining the rotation axes leads to a fixed orientation of the profile for the specified directions.',
                enum: ['all', 'heading'],
                default: 'all',
              },
              size: {
                type: 'number',
                description:
                  'Path size (diameter) in meters. Ignored if either `width` or `height` are present.',
                minimum: 0,
              },
              type: {
                type: 'string',
                description: 'Specifies the type of symbol used.',
                enum: ['Path'],
              },
              width: {
                type: 'number',
                description:
                  'Path width in meters. If unspecified, it is equal to `height`.',
                minimum: 0,
              },
            },
            anyOf: [
              { required: ['size', 'type'] },
              { required: ['type', 'width'] },
              { required: ['height', 'type'] },
            ],
            additionalProperties: !1,
          },
          'visualVariableLegendOptions_schema.json': {
            title: 'Visual Variable Legend Options',
            type: 'object',
            description:
              'Options available for the legend for visual variables.',
            properties: {
              customValues: { type: 'array', items: { type: 'number' } },
              showLegend: {
                type: 'boolean',
                description:
                  'Indicates whether to show the color/size/opacity ramp in the legend.',
              },
              title: {
                type: 'string',
                description: 'The title of the legend.',
              },
            },
          },
          'sizeStop_schema.json': {
            title: 'sizeStop',
            description:
              'A `sizeStop` object describes the size of the symbol at various values of the expression.',
            properties: {
              label: {
                type: 'string',
                description:
                  'Value if a label is needed on the legend for a stop.',
              },
              size: {
                type: 'number',
                description:
                  'Specifies the marker size to use for the specified value.',
              },
              value: {
                type: 'number',
                description: 'The value to be mapped to a size.',
              },
            },
            required: ['size', 'value'],
            additionalProperties: !1,
          },
          'transparencyStop_schema.json': {
            title: 'transparencyStop',
            description:
              'The transparencyStop object defines the thematic opacity ramp in a sequence of stops. At least two stops are required. The stops must be listed in ascending order based on the value of the `value` property in each stop.',
            properties: {
              label: {
                type: 'string',
                description:
                  'A string value used to label the stop in the legend.',
              },
              transparency: {
                type: 'integer',
                description:
                  'A numeric transparancy value for a stop ranging from 0-100, where 0 is opaque and 100 is 100% transparent.',
                minimum: 0,
                maximum: 100,
              },
              value: {
                type: 'number',
                description:
                  'The pixel intensity value. Describes the pixel intensity value that the color should be associated with.',
              },
            },
            required: ['transparency', 'value'],
            additionalProperties: !1,
          },
          'pointCloudFixedSizeAlgorithm_schema.json': {
            title: 'PointCloud FixedSize Algorithm',
            type: 'object',
            description:
              'Render points with fixed real world or screen space size.',
            properties: {
              size: {
                type: 'number',
                description: 'Symbol size in real world units or display unit',
              },
              type: { type: 'string', enum: ['pointCloudFixedSizeAlgorithm'] },
              useRealWorldSymbolSizes: {
                type: 'boolean',
                description:
                  ' If true symbol size is in meters, display unit (pt) otherwise',
              },
            },
            required: ['size', 'type'],
            additionalProperties: !1,
          },
          'pointCloudSplatAlgorithm_schema.json': {
            title: 'PointCloud Splat Algorithm',
            type: 'object',
            description:
              'Render points using sizes depending on point density.',
            properties: {
              scaleFactor: {
                type: 'number',
                description:
                  'Scale factor to applied to the computed point size (in real world)',
              },
              type: { type: 'string', enum: ['pointCloudSplatAlgorithm'] },
            },
            required: ['scaleFactor', 'type'],
            additionalProperties: !1,
          },
          'voxelAlphaStop_schema.json': {
            title: 'Voxel Alpha Stop',
            type: 'object',
            description:
              'Defines transparency stop for a transfer function style.',
            properties: {
              alpha: {
                type: 'number',
                description: 'Opacity of the stop in [0,1]. 1 is fully opaque.',
                minimum: 0,
                maximum: 1,
              },
              position: {
                type: 'number',
                description: 'Normalized position of the stop in [0,1].',
                minimum: 0,
                maximum: 1,
              },
            },
            required: ['alpha', 'position'],
            additionalProperties: !1,
          },
          'voxelColorStop_schema.json': {
            title: 'Voxel Color Stop',
            type: 'object',
            description: 'Defines color stop for a transfer function style.',
            properties: {
              color: { $ref: '#/definitions/color_schema.json' },
              position: {
                type: 'number',
                description: 'Normalized position of the stop in [0,1].',
                minimum: 0,
                maximum: 1,
              },
            },
            required: ['color', 'position'],
            additionalProperties: !1,
          },
          'voxelRangeFilter_schema.json': {
            title: 'Voxel Range Filter',
            type: 'object',
            description:
              'Defines the range to filter values from. Voxel Values outside this range will be discarded.',
            properties: {
              enabled: {
                type: 'boolean',
                description: 'Determines if the range filter is enabled.',
                default: !1,
              },
              range: {
                type: 'array',
                description:
                  'Defines the minimum and maximum values of the range. Data outside of the range will be discarded.',
                items: { type: 'number' },
                minItems: 2,
                maxItems: 2,
              },
            },
            required: ['range'],
            additionalProperties: !1,
          },
          'pathCap_schema.json': {
            title: 'Path cap',
            type: 'string',
            description:
              'Shape of the tips at the start and end of each path geometry.',
            enum: ['butt', 'none', 'round', 'square'],
            default: 'butt',
          },
        },
        d = {
          title: 'Building Scene Layer config on layer item',
          type: 'object',
          properties: {
            layers: {
              type: 'array',
              items: {
                properties: {
                  activeFilterId: {
                    type: 'string',
                    description:
                      'specifies the id of the currently active filter',
                  },
                  filters: {
                    type: 'array',
                    description:
                      'A list of filters available for this layer. Overrides filters defined on the service.',
                    items: {
                      $ref: '#/definitions/buildingSceneLayer_filter_schema.json',
                    },
                    uniqueItems: !0,
                  },
                  id: {
                    type: 'integer',
                    description: 'ID of the service layer.',
                  },
                  layerDefinition: {
                    type: 'object',
                    description:
                      'Additional properties that can define an elevation offset for the layer.',
                    allOf: [
                      { $ref: '#/definitions/layerDefinition_schema.json' },
                      {
                        properties: {
                          elevationInfo: {},
                          maxScale: {},
                          minScale: {},
                        },
                        additionalProperties: !1,
                      },
                    ],
                  },
                  listMode: {
                    type: 'string',
                    description:
                      'To show or hide the sublayer in the layer list. If the layer has sublayers, selecting `hide-children` will hide them in the layer list.',
                    enum: ['hide', 'hide-children', 'show'],
                    default: 'show',
                  },
                  opacity: {
                    type: 'number',
                    description:
                      'The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.',
                    minimum: 0,
                    maximum: 1,
                    default: 1,
                  },
                  sublayers: {
                    type: 'array',
                    description:
                      'An array of objects specifying overrides for building scene layer sublayers',
                    items: {
                      $ref: '#/definitions/buildingSceneLayer_sublayer_schema.json',
                    },
                    uniqueItems: !0,
                  },
                  visibility: {
                    type: 'boolean',
                    description:
                      'Boolean property determining whether the layer is initially visible in the web scene',
                    default: !0,
                  },
                },
                additionalProperties: !1,
              },
            },
          },
          additionalProperties: !1,
          $schema: 'http://json-schema.org/draft-07/schema',
          definitions: l,
        },
        p = {
          title: 'Integrated Mesh Layer config on layer item',
          type: 'object',
          properties: {
            layers: {
              type: 'array',
              items: {
                properties: {
                  id: {
                    type: 'integer',
                    description: 'ID of the service layer.',
                  },
                  layerDefinition: {
                    type: 'object',
                    description:
                      'A layerDefinition object defining the attribute schema and drawing information for the layer.',
                    allOf: [
                      { $ref: '#/definitions/layerDefinition_schema.json' },
                      {
                        properties: {
                          elevationInfo: {},
                          maxScale: {},
                          minScale: {},
                        },
                        additionalProperties: !1,
                      },
                    ],
                  },
                  listMode: {
                    type: 'string',
                    description: 'To show or hide layers in the layer list',
                    enum: ['hide', 'show'],
                    default: 'show',
                  },
                  modifications: {
                    type: 'string',
                    description:
                      'URL to modifications json file, typically stored in `ITEM/resources`. Content of the file follows the $ref:[Modifications schema](modifications_schema.json).',
                  },
                  opacity: {
                    type: 'number',
                    description:
                      'The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.',
                    minimum: 0,
                    maximum: 1,
                    default: 1,
                  },
                  visibility: {
                    type: 'boolean',
                    description:
                      'Boolean property determining whether the layer is initially visible in the web scene.',
                    default: !0,
                  },
                },
                additionalProperties: !1,
              },
            },
          },
          additionalProperties: !1,
          $schema: 'http://json-schema.org/draft-07/schema',
          definitions: l,
        },
        c = {
          title: 'PointCloud Layer config on layer item',
          type: 'object',
          properties: {
            layers: {
              type: 'array',
              items: {
                properties: {
                  disablePopup: {
                    type: 'boolean',
                    description:
                      'disablePopups allows a client to ignore popups defined by the service item.',
                  },
                  id: {
                    type: 'integer',
                    description: 'ID of the service layer.',
                  },
                  layerDefinition: {
                    type: 'object',
                    description:
                      'A layerDefinition object defining the attribute schema and drawing information for the layer.',
                    allOf: [
                      { $ref: '#/definitions/layerDefinition_schema.json' },
                      {
                        properties: {
                          drawingInfo: {
                            allOf: [
                              { $ref: '#/definitions/drawingInfo_schema.json' },
                              {
                                properties: { renderer: {}, transparency: {} },
                                additionalProperties: !1,
                              },
                            ],
                          },
                          elevationInfo: {},
                          filters: {},
                          maxScale: {},
                          minScale: {},
                        },
                        additionalProperties: !1,
                      },
                    ],
                  },
                  listMode: {
                    type: 'string',
                    description: 'To show or hide the layer in the layer list',
                    enum: ['hide', 'show'],
                    default: 'show',
                  },
                  popupInfo: {
                    description:
                      'A popupInfo object defining the content of pop-up windows when you click a point.',
                    $ref: '#/definitions/popupInfo_schema.json',
                  },
                  showLegend: {
                    type: 'boolean',
                    description:
                      'Boolean value indicating whether to display the layer in the legend. Default value is `true`.',
                    default: !0,
                  },
                  visibility: {
                    type: 'boolean',
                    description:
                      'Boolean property determining whether the layer is initially visible',
                    default: !0,
                  },
                },
                additionalProperties: !1,
              },
            },
          },
          additionalProperties: !1,
          $schema: 'http://json-schema.org/draft-07/schema',
          definitions: l,
        },
        h = {
          title: 'Scene Layer config on layer item',
          type: 'object',
          properties: {
            layers: {
              type: 'array',
              items: {
                properties: {
                  disablePopup: {
                    type: 'boolean',
                    description:
                      'disablePopups allows a client to ignore popups defined by the service item.',
                  },
                  id: {
                    type: 'integer',
                    description: 'ID of the service layer.',
                  },
                  layerDefinition: {
                    type: 'object',
                    description:
                      'A layerDefinition object defining the attribute schema and drawing information for the layer.',
                    allOf: [
                      { $ref: '#/definitions/layerDefinition_schema.json' },
                      {
                        properties: {
                          definitionExpression: {},
                          drawingInfo: {
                            allOf: [
                              { $ref: '#/definitions/drawingInfo_schema.json' },
                              {
                                properties: {
                                  labelingInfo: {},
                                  renderer: {},
                                  transparency: {},
                                },
                                additionalProperties: !1,
                              },
                            ],
                          },
                          elevationInfo: {},
                          excludeObjectIds: {},
                          featureReduction: {},
                          floorInfo: {},
                          maxScale: {},
                          minScale: {},
                          rangeInfos: {},
                        },
                        additionalProperties: !1,
                      },
                    ],
                  },
                  listMode: {
                    type: 'string',
                    description: 'To show or hide layers in the layer list',
                    enum: ['hide', 'show'],
                    default: 'show',
                  },
                  opacity: {
                    type: 'number',
                    description:
                      'The degree of transparency applied to the layer on the client side, where 0 is full transparency and 1 is no transparency.',
                    minimum: 0,
                    maximum: 1,
                    default: 1,
                  },
                  popupInfo: {
                    description:
                      'A popupInfo object defining the content of pop-up windows when you click or query a feature.',
                    $ref: '#/definitions/popupInfo_schema.json',
                  },
                  screenSizePerspective: {
                    type: 'boolean',
                    description:
                      'Apply [perspective scaling](https://developers.arcgis.com/javascript/latest/api-reference/esri-layers-FeatureLayer.html#screenSizePerspectiveEnabled) to screen-size symbols.',
                    default: !0,
                  },
                  showLabels: {
                    type: 'boolean',
                    description:
                      'If the layer has a labelingInfo property then labels show on the scene only if the showLabels property it true.',
                    default: !1,
                  },
                  showLegend: {
                    type: 'boolean',
                    description:
                      'Boolean value indicating whether to display the layer in the legend. Default value is `true`.',
                    default: !0,
                  },
                  visibility: {
                    type: 'boolean',
                    description:
                      'Boolean property determining whether the layer is initially visible in the web scene',
                    default: !0,
                  },
                },
                additionalProperties: !1,
              },
            },
          },
          additionalProperties: !1,
          $schema: 'http://json-schema.org/draft-07/schema',
          definitions: l,
        };
      function u(e, t = 5) {
        if (
          (function (e) {
            return null != (e && e.allowedValues);
          })(e.params)
        ) {
          let i = e.params.allowedValues;
          if (i) {
            if (((i = i.map((e) => JSON.stringify(e))), i.length > t)) {
              const e = '(' + (i.length - t) + ' more...)';
              (i = i.slice(0, t)), i.push(e);
            }
            e.message = 'should be equal to one of: ' + i.join(', ');
          }
        } else
          (function (e) {
            return null != (e && e.additionalProperty);
          })(e.params) &&
            (e.message =
              'should NOT have additional property: ' +
              e.params.additionalProperty);
        return e;
      }
      const f = new s({ allErrors: !0, extendRefs: !0 });
      function m(e, t) {
        return (
          f.validate(
            (function (e) {
              switch (e) {
                case 'building-scene':
                  return d;
                case 'integrated-mesh':
                  return p;
                case 'point-cloud':
                  return c;
                case 'scene':
                  return h;
                default:
                  throw new a.Z(
                    'portalitemlayertype:unknown',
                    'Can not validate against unknown PortalItemLayerType.',
                  );
              }
            })(t),
            e,
          ),
          (function (e, t = 10) {
            const i = {};
            let r = e
              .map(u)
              .map((e, t) => ({ e, i: t }))
              .sort(({ e, i: t }, { e: i, i: r }) => {
                const a = e.dataPath ? e.dataPath.split('.').length : 0,
                  o = i.dataPath ? i.dataPath.split('.').length : 0;
                return a === o ? t - r : o - a;
              })
              .map(
                ({ e }) => `${e.dataPath ? e.dataPath + ': ' : ''}${e.message}`,
              )
              .filter((e) => {
                const t = !i[e];
                return (i[e] = !0), t;
              });
            if (r.length > t) {
              const e = '(' + (r.length - t) + ' more...)';
              (r = r.slice(0, t)), r.push(e);
            }
            return r;
          })(f.errors || [])
        );
      }
    },
  },
]);
