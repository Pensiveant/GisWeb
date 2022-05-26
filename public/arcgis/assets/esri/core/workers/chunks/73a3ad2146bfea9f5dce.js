/*! For license information please see 73a3ad2146bfea9f5dce.js.LICENSE.txt */
'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [280],
  {
    77210: (t, e, r) => {
      r.d(e, { YY: () => o });
      const n = 'undefined' != typeof window ? window : {},
        i =
          (n.document,
          n.HTMLElement,
          {
            $flags$: 0,
            $resourcesUrl$: '',
            jmp: (t) => t(),
            raf: (t) => requestAnimationFrame(t),
            ael: (t, e, r, n) => t.addEventListener(e, r, n),
            rel: (t, e, r, n) => t.removeEventListener(e, r, n),
            ce: (t, e) => new CustomEvent(t, e),
          }),
        o = (new WeakMap(), (t) => (i.$resourcesUrl$ = t));
      new WeakMap(), new Map();
    },
    44291: (t, e, r) => {
      r.d(e, { v: () => A });
      var n = [
          'input',
          'select',
          'textarea',
          'a[href]',
          'button',
          '[tabindex]',
          'audio[controls]',
          'video[controls]',
          '[contenteditable]:not([contenteditable="false"])',
          'details>summary:first-of-type',
          'details',
        ],
        i = n.join(','),
        o =
          'undefined' == typeof Element
            ? function () {}
            : Element.prototype.matches ||
              Element.prototype.msMatchesSelector ||
              Element.prototype.webkitMatchesSelector,
        a = function (t, e, r) {
          var n = Array.prototype.slice.apply(t.querySelectorAll(i));
          return e && o.call(t, i) && n.unshift(t), n.filter(r);
        },
        s = function (t) {
          var e = parseInt(t.getAttribute('tabindex'), 10);
          return isNaN(e)
            ? (function (t) {
                return 'true' === t.contentEditable;
              })(t)
              ? 0
              : ('AUDIO' !== t.nodeName &&
                  'VIDEO' !== t.nodeName &&
                  'DETAILS' !== t.nodeName) ||
                null !== t.getAttribute('tabindex')
              ? t.tabIndex
              : 0
            : e;
        },
        l = function (t, e) {
          return t.tabIndex === e.tabIndex
            ? t.documentOrder - e.documentOrder
            : t.tabIndex - e.tabIndex;
        },
        c = function (t) {
          return 'INPUT' === t.tagName;
        },
        u = function (t, e) {
          return !(
            e.disabled ||
            (function (t) {
              return c(t) && 'hidden' === t.type;
            })(e) ||
            (function (t, e) {
              if ('hidden' === getComputedStyle(t).visibility) return !0;
              var r = o.call(t, 'details>summary:first-of-type')
                ? t.parentElement
                : t;
              if (o.call(r, 'details:not([open]) *')) return !0;
              if (e && 'full' !== e) {
                if ('non-zero-area' === e) {
                  var n = t.getBoundingClientRect(),
                    i = n.width,
                    a = n.height;
                  return 0 === i && 0 === a;
                }
              } else
                for (; t; ) {
                  if ('none' === getComputedStyle(t).display) return !0;
                  t = t.parentElement;
                }
              return !1;
            })(e, t.displayCheck) ||
            (function (t) {
              return (
                'DETAILS' === t.tagName &&
                Array.prototype.slice.apply(t.children).some(function (t) {
                  return 'SUMMARY' === t.tagName;
                })
              );
            })(e) ||
            (function (t) {
              if (
                c(t) ||
                'SELECT' === t.tagName ||
                'TEXTAREA' === t.tagName ||
                'BUTTON' === t.tagName
              )
                for (var e = t.parentElement; e; ) {
                  if ('FIELDSET' === e.tagName && e.disabled) {
                    for (var r = 0; r < e.children.length; r++) {
                      var n = e.children.item(r);
                      if ('LEGEND' === n.tagName) return !n.contains(t);
                    }
                    return !0;
                  }
                  e = e.parentElement;
                }
              return !1;
            })(e)
          );
        },
        d = function (t, e) {
          return !(
            !u(t, e) ||
            (function (t) {
              return (
                (function (t) {
                  return c(t) && 'radio' === t.type;
                })(t) &&
                !(function (t) {
                  if (!t.name) return !0;
                  var e,
                    r = t.form || t.ownerDocument,
                    n = function (t) {
                      return r.querySelectorAll(
                        'input[type="radio"][name="' + t + '"]',
                      );
                    };
                  if (
                    'undefined' != typeof window &&
                    void 0 !== window.CSS &&
                    'function' == typeof window.CSS.escape
                  )
                    e = n(window.CSS.escape(t.name));
                  else
                    try {
                      e = n(t.name);
                    } catch (t) {
                      return (
                        console.error(
                          'Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s',
                          t.message,
                        ),
                        !1
                      );
                    }
                  var i = (function (t, e) {
                    for (var r = 0; r < t.length; r++)
                      if (t[r].checked && t[r].form === e) return t[r];
                  })(e, t.form);
                  return !i || i === t;
                })(t)
              );
            })(e) ||
            s(e) < 0
          );
        },
        f = function (t, e) {
          if (((e = e || {}), !t)) throw new Error('No node provided');
          return !1 !== o.call(t, i) && d(e, t);
        },
        p = n.concat('iframe').join(','),
        g = function (t, e) {
          if (((e = e || {}), !t)) throw new Error('No node provided');
          return !1 !== o.call(t, p) && u(e, t);
        };
      function m(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          e &&
            (n = n.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function b(t, e, r) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = r),
          t
        );
      }
      var h,
        v =
          ((h = []),
          {
            activateTrap: function (t) {
              if (h.length > 0) {
                var e = h[h.length - 1];
                e !== t && e.pause();
              }
              var r = h.indexOf(t);
              -1 === r || h.splice(r, 1), h.push(t);
            },
            deactivateTrap: function (t) {
              var e = h.indexOf(t);
              -1 !== e && h.splice(e, 1),
                h.length > 0 && h[h.length - 1].unpause();
            },
          }),
        y = function (t) {
          return setTimeout(t, 0);
        },
        w = function (t, e) {
          var r = -1;
          return (
            t.every(function (t, n) {
              return !e(t) || ((r = n), !1);
            }),
            r
          );
        },
        k = function (t) {
          for (
            var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1;
            n < e;
            n++
          )
            r[n - 1] = arguments[n];
          return 'function' == typeof t ? t.apply(void 0, r) : t;
        },
        x = function (t) {
          return t.target.shadowRoot && 'function' == typeof t.composedPath
            ? t.composedPath()[0]
            : t.target;
        },
        A = function (t, e) {
          var r,
            n = (null == e ? void 0 : e.document) || document,
            i = (function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var r = null != arguments[e] ? arguments[e] : {};
                e % 2
                  ? m(Object(r), !0).forEach(function (e) {
                      b(t, e, r[e]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(r),
                    )
                  : m(Object(r)).forEach(function (e) {
                      Object.defineProperty(
                        t,
                        e,
                        Object.getOwnPropertyDescriptor(r, e),
                      );
                    });
              }
              return t;
            })(
              {
                returnFocusOnDeactivate: !0,
                escapeDeactivates: !0,
                delayInitialFocus: !0,
              },
              e,
            ),
            o = {
              containers: [],
              tabbableGroups: [],
              nodeFocusedBeforeActivation: null,
              mostRecentlyFocusedNode: null,
              active: !1,
              paused: !1,
              delayInitialFocusTimer: void 0,
            },
            c = function (t, e, r) {
              return t && void 0 !== t[e] ? t[e] : i[r || e];
            },
            p = function (t) {
              return !(
                !t ||
                !o.containers.some(function (e) {
                  return e.contains(t);
                })
              );
            },
            h = function (t) {
              var e = i[t];
              if ('function' == typeof e) {
                for (
                  var r = arguments.length,
                    o = new Array(r > 1 ? r - 1 : 0),
                    a = 1;
                  a < r;
                  a++
                )
                  o[a - 1] = arguments[a];
                e = e.apply(void 0, o);
              }
              if (!e) {
                if (void 0 === e || !1 === e) return e;
                throw new Error(
                  '`'.concat(
                    t,
                    '` was specified but was not a node, or did not return a node',
                  ),
                );
              }
              var s = e;
              if ('string' == typeof e && !(s = n.querySelector(e)))
                throw new Error(
                  '`'.concat(t, '` as selector refers to no known node'),
                );
              return s;
            },
            A = function () {
              var t = h('initialFocus');
              if (!1 === t) return !1;
              if (void 0 === t)
                if (p(n.activeElement)) t = n.activeElement;
                else {
                  var e = o.tabbableGroups[0];
                  t = (e && e.firstTabbableNode) || h('fallbackFocus');
                }
              if (!t)
                throw new Error(
                  'Your focus-trap needs to have at least one focusable element',
                );
              return t;
            },
            T = function () {
              if (
                ((o.tabbableGroups = o.containers
                  .map(function (t) {
                    var e,
                      r,
                      n,
                      i =
                        ((r = []),
                        (n = []),
                        a(
                          t,
                          (e = e || {}).includeContainer,
                          d.bind(null, e),
                        ).forEach(function (t, e) {
                          var i = s(t);
                          0 === i
                            ? r.push(t)
                            : n.push({
                                documentOrder: e,
                                tabIndex: i,
                                node: t,
                              });
                        }),
                        n
                          .sort(l)
                          .map(function (t) {
                            return t.node;
                          })
                          .concat(r)),
                      o = (function (t, e) {
                        return a(
                          t,
                          (e = e || {}).includeContainer,
                          u.bind(null, e),
                        );
                      })(t);
                    if (i.length > 0)
                      return {
                        container: t,
                        firstTabbableNode: i[0],
                        lastTabbableNode: i[i.length - 1],
                        nextTabbableNode: function (t) {
                          var e =
                              !(
                                arguments.length > 1 && void 0 !== arguments[1]
                              ) || arguments[1],
                            r = o.findIndex(function (e) {
                              return e === t;
                            });
                          return e
                            ? o.slice(r + 1).find(function (t) {
                                return f(t);
                              })
                            : o
                                .slice(0, r)
                                .reverse()
                                .find(function (t) {
                                  return f(t);
                                });
                        },
                      };
                  })
                  .filter(function (t) {
                    return !!t;
                  })),
                o.tabbableGroups.length <= 0 && !h('fallbackFocus'))
              )
                throw new Error(
                  'Your focus-trap must have at least one container with at least one tabbable node in it at all times',
                );
            },
            O = function t(e) {
              !1 !== e &&
                e !== n.activeElement &&
                (e && e.focus
                  ? (e.focus({ preventScroll: !!i.preventScroll }),
                    (o.mostRecentlyFocusedNode = e),
                    (function (t) {
                      return (
                        t.tagName &&
                        'input' === t.tagName.toLowerCase() &&
                        'function' == typeof t.select
                      );
                    })(e) && e.select())
                  : t(A()));
            },
            E = function (t) {
              var e = h('setReturnFocus', t);
              return e || (!1 !== e && t);
            },
            S = function (t) {
              var e = x(t);
              p(e) ||
                (k(i.clickOutsideDeactivates, t)
                  ? r.deactivate({
                      returnFocus: i.returnFocusOnDeactivate && !g(e),
                    })
                  : k(i.allowOutsideClick, t) || t.preventDefault());
            },
            I = function (t) {
              var e = x(t),
                r = p(e);
              r || e instanceof Document
                ? r && (o.mostRecentlyFocusedNode = e)
                : (t.stopImmediatePropagation(),
                  O(o.mostRecentlyFocusedNode || A()));
            },
            j = function (t) {
              if (
                (function (t) {
                  return (
                    'Escape' === t.key || 'Esc' === t.key || 27 === t.keyCode
                  );
                })(t) &&
                !1 !== k(i.escapeDeactivates, t)
              )
                return t.preventDefault(), void r.deactivate();
              (function (t) {
                return 'Tab' === t.key || 9 === t.keyCode;
              })(t) &&
                (function (t) {
                  var e = x(t);
                  T();
                  var r = null;
                  if (o.tabbableGroups.length > 0) {
                    var n = w(o.tabbableGroups, function (t) {
                        return t.container.contains(e);
                      }),
                      i = n >= 0 ? o.tabbableGroups[n] : void 0;
                    if (n < 0)
                      r = t.shiftKey
                        ? o.tabbableGroups[o.tabbableGroups.length - 1]
                            .lastTabbableNode
                        : o.tabbableGroups[0].firstTabbableNode;
                    else if (t.shiftKey) {
                      var a = w(o.tabbableGroups, function (t) {
                        var r = t.firstTabbableNode;
                        return e === r;
                      });
                      if (
                        (a < 0 &&
                          (i.container === e ||
                            (g(e) && !f(e) && !i.nextTabbableNode(e, !1))) &&
                          (a = n),
                        a >= 0)
                      ) {
                        var s = 0 === a ? o.tabbableGroups.length - 1 : a - 1;
                        r = o.tabbableGroups[s].lastTabbableNode;
                      }
                    } else {
                      var l = w(o.tabbableGroups, function (t) {
                        var r = t.lastTabbableNode;
                        return e === r;
                      });
                      if (
                        (l < 0 &&
                          (i.container === e ||
                            (g(e) && !f(e) && !i.nextTabbableNode(e))) &&
                          (l = n),
                        l >= 0)
                      ) {
                        var c = l === o.tabbableGroups.length - 1 ? 0 : l + 1;
                        r = o.tabbableGroups[c].firstTabbableNode;
                      }
                    }
                  } else r = h('fallbackFocus');
                  r && (t.preventDefault(), O(r));
                })(t);
            },
            C = function (t) {
              if (!k(i.clickOutsideDeactivates, t)) {
                var e = x(t);
                p(e) ||
                  k(i.allowOutsideClick, t) ||
                  (t.preventDefault(), t.stopImmediatePropagation());
              }
            },
            F = function () {
              if (o.active)
                return (
                  v.activateTrap(r),
                  (o.delayInitialFocusTimer = i.delayInitialFocus
                    ? y(function () {
                        O(A());
                      })
                    : O(A())),
                  n.addEventListener('focusin', I, !0),
                  n.addEventListener('mousedown', S, {
                    capture: !0,
                    passive: !1,
                  }),
                  n.addEventListener('touchstart', S, {
                    capture: !0,
                    passive: !1,
                  }),
                  n.addEventListener('click', C, { capture: !0, passive: !1 }),
                  n.addEventListener('keydown', j, {
                    capture: !0,
                    passive: !1,
                  }),
                  r
                );
            },
            L = function () {
              if (o.active)
                return (
                  n.removeEventListener('focusin', I, !0),
                  n.removeEventListener('mousedown', S, !0),
                  n.removeEventListener('touchstart', S, !0),
                  n.removeEventListener('click', C, !0),
                  n.removeEventListener('keydown', j, !0),
                  r
                );
            };
          return (
            (r = {
              activate: function (t) {
                if (o.active) return this;
                var e = c(t, 'onActivate'),
                  r = c(t, 'onPostActivate'),
                  i = c(t, 'checkCanFocusTrap');
                i || T(),
                  (o.active = !0),
                  (o.paused = !1),
                  (o.nodeFocusedBeforeActivation = n.activeElement),
                  e && e();
                var a = function () {
                  i && T(), F(), r && r();
                };
                return i
                  ? (i(o.containers.concat()).then(a, a), this)
                  : (a(), this);
              },
              deactivate: function (t) {
                if (!o.active) return this;
                clearTimeout(o.delayInitialFocusTimer),
                  (o.delayInitialFocusTimer = void 0),
                  L(),
                  (o.active = !1),
                  (o.paused = !1),
                  v.deactivateTrap(r);
                var e = c(t, 'onDeactivate'),
                  n = c(t, 'onPostDeactivate'),
                  i = c(t, 'checkCanReturnFocus');
                e && e();
                var a = c(t, 'returnFocus', 'returnFocusOnDeactivate'),
                  s = function () {
                    y(function () {
                      a && O(E(o.nodeFocusedBeforeActivation)), n && n();
                    });
                  };
                return a && i
                  ? (i(E(o.nodeFocusedBeforeActivation)).then(s, s), this)
                  : (s(), this);
              },
              pause: function () {
                return o.paused || !o.active || ((o.paused = !0), L()), this;
              },
              unpause: function () {
                return o.paused && o.active
                  ? ((o.paused = !1), T(), F(), this)
                  : this;
              },
              updateContainerElements: function (t) {
                var e = [].concat(t).filter(Boolean);
                return (
                  (o.containers = e.map(function (t) {
                    return 'string' == typeof t ? n.querySelector(t) : t;
                  })),
                  o.active && T(),
                  this
                );
              },
            }).updateContainerElements(t),
            r
          );
        };
    },
    8728: (t, e, r) => {
      r.d(e, { Z: () => dt });
      var n,
        i,
        o = Function.prototype,
        a = Object.prototype,
        s = o.toString,
        l = a.hasOwnProperty,
        c = s.call(Object),
        u = a.toString,
        d =
          ((n = Object.getPrototypeOf),
          (i = Object),
          function (t) {
            return n(i(t));
          }),
        f = { exports: {} },
        p = {},
        g = { exports: {} },
        m = {};
      function b() {
        return {
          'align-content': !1,
          'align-items': !1,
          'align-self': !1,
          'alignment-adjust': !1,
          'alignment-baseline': !1,
          all: !1,
          'anchor-point': !1,
          animation: !1,
          'animation-delay': !1,
          'animation-direction': !1,
          'animation-duration': !1,
          'animation-fill-mode': !1,
          'animation-iteration-count': !1,
          'animation-name': !1,
          'animation-play-state': !1,
          'animation-timing-function': !1,
          azimuth: !1,
          'backface-visibility': !1,
          background: !0,
          'background-attachment': !0,
          'background-clip': !0,
          'background-color': !0,
          'background-image': !0,
          'background-origin': !0,
          'background-position': !0,
          'background-repeat': !0,
          'background-size': !0,
          'baseline-shift': !1,
          binding: !1,
          bleed: !1,
          'bookmark-label': !1,
          'bookmark-level': !1,
          'bookmark-state': !1,
          border: !0,
          'border-bottom': !0,
          'border-bottom-color': !0,
          'border-bottom-left-radius': !0,
          'border-bottom-right-radius': !0,
          'border-bottom-style': !0,
          'border-bottom-width': !0,
          'border-collapse': !0,
          'border-color': !0,
          'border-image': !0,
          'border-image-outset': !0,
          'border-image-repeat': !0,
          'border-image-slice': !0,
          'border-image-source': !0,
          'border-image-width': !0,
          'border-left': !0,
          'border-left-color': !0,
          'border-left-style': !0,
          'border-left-width': !0,
          'border-radius': !0,
          'border-right': !0,
          'border-right-color': !0,
          'border-right-style': !0,
          'border-right-width': !0,
          'border-spacing': !0,
          'border-style': !0,
          'border-top': !0,
          'border-top-color': !0,
          'border-top-left-radius': !0,
          'border-top-right-radius': !0,
          'border-top-style': !0,
          'border-top-width': !0,
          'border-width': !0,
          bottom: !1,
          'box-decoration-break': !0,
          'box-shadow': !0,
          'box-sizing': !0,
          'box-snap': !0,
          'box-suppress': !0,
          'break-after': !0,
          'break-before': !0,
          'break-inside': !0,
          'caption-side': !1,
          chains: !1,
          clear: !0,
          clip: !1,
          'clip-path': !1,
          'clip-rule': !1,
          color: !0,
          'color-interpolation-filters': !0,
          'column-count': !1,
          'column-fill': !1,
          'column-gap': !1,
          'column-rule': !1,
          'column-rule-color': !1,
          'column-rule-style': !1,
          'column-rule-width': !1,
          'column-span': !1,
          'column-width': !1,
          columns: !1,
          contain: !1,
          content: !1,
          'counter-increment': !1,
          'counter-reset': !1,
          'counter-set': !1,
          crop: !1,
          cue: !1,
          'cue-after': !1,
          'cue-before': !1,
          cursor: !1,
          direction: !1,
          display: !0,
          'display-inside': !0,
          'display-list': !0,
          'display-outside': !0,
          'dominant-baseline': !1,
          elevation: !1,
          'empty-cells': !1,
          filter: !1,
          flex: !1,
          'flex-basis': !1,
          'flex-direction': !1,
          'flex-flow': !1,
          'flex-grow': !1,
          'flex-shrink': !1,
          'flex-wrap': !1,
          float: !1,
          'float-offset': !1,
          'flood-color': !1,
          'flood-opacity': !1,
          'flow-from': !1,
          'flow-into': !1,
          font: !0,
          'font-family': !0,
          'font-feature-settings': !0,
          'font-kerning': !0,
          'font-language-override': !0,
          'font-size': !0,
          'font-size-adjust': !0,
          'font-stretch': !0,
          'font-style': !0,
          'font-synthesis': !0,
          'font-variant': !0,
          'font-variant-alternates': !0,
          'font-variant-caps': !0,
          'font-variant-east-asian': !0,
          'font-variant-ligatures': !0,
          'font-variant-numeric': !0,
          'font-variant-position': !0,
          'font-weight': !0,
          grid: !1,
          'grid-area': !1,
          'grid-auto-columns': !1,
          'grid-auto-flow': !1,
          'grid-auto-rows': !1,
          'grid-column': !1,
          'grid-column-end': !1,
          'grid-column-start': !1,
          'grid-row': !1,
          'grid-row-end': !1,
          'grid-row-start': !1,
          'grid-template': !1,
          'grid-template-areas': !1,
          'grid-template-columns': !1,
          'grid-template-rows': !1,
          'hanging-punctuation': !1,
          height: !0,
          hyphens: !1,
          icon: !1,
          'image-orientation': !1,
          'image-resolution': !1,
          'ime-mode': !1,
          'initial-letters': !1,
          'inline-box-align': !1,
          'justify-content': !1,
          'justify-items': !1,
          'justify-self': !1,
          left: !1,
          'letter-spacing': !0,
          'lighting-color': !0,
          'line-box-contain': !1,
          'line-break': !1,
          'line-grid': !1,
          'line-height': !1,
          'line-snap': !1,
          'line-stacking': !1,
          'line-stacking-ruby': !1,
          'line-stacking-shift': !1,
          'line-stacking-strategy': !1,
          'list-style': !0,
          'list-style-image': !0,
          'list-style-position': !0,
          'list-style-type': !0,
          margin: !0,
          'margin-bottom': !0,
          'margin-left': !0,
          'margin-right': !0,
          'margin-top': !0,
          'marker-offset': !1,
          'marker-side': !1,
          marks: !1,
          mask: !1,
          'mask-box': !1,
          'mask-box-outset': !1,
          'mask-box-repeat': !1,
          'mask-box-slice': !1,
          'mask-box-source': !1,
          'mask-box-width': !1,
          'mask-clip': !1,
          'mask-image': !1,
          'mask-origin': !1,
          'mask-position': !1,
          'mask-repeat': !1,
          'mask-size': !1,
          'mask-source-type': !1,
          'mask-type': !1,
          'max-height': !0,
          'max-lines': !1,
          'max-width': !0,
          'min-height': !0,
          'min-width': !0,
          'move-to': !1,
          'nav-down': !1,
          'nav-index': !1,
          'nav-left': !1,
          'nav-right': !1,
          'nav-up': !1,
          'object-fit': !1,
          'object-position': !1,
          opacity: !1,
          order: !1,
          orphans: !1,
          outline: !1,
          'outline-color': !1,
          'outline-offset': !1,
          'outline-style': !1,
          'outline-width': !1,
          overflow: !1,
          'overflow-wrap': !1,
          'overflow-x': !1,
          'overflow-y': !1,
          padding: !0,
          'padding-bottom': !0,
          'padding-left': !0,
          'padding-right': !0,
          'padding-top': !0,
          page: !1,
          'page-break-after': !1,
          'page-break-before': !1,
          'page-break-inside': !1,
          'page-policy': !1,
          pause: !1,
          'pause-after': !1,
          'pause-before': !1,
          perspective: !1,
          'perspective-origin': !1,
          pitch: !1,
          'pitch-range': !1,
          'play-during': !1,
          position: !1,
          'presentation-level': !1,
          quotes: !1,
          'region-fragment': !1,
          resize: !1,
          rest: !1,
          'rest-after': !1,
          'rest-before': !1,
          richness: !1,
          right: !1,
          rotation: !1,
          'rotation-point': !1,
          'ruby-align': !1,
          'ruby-merge': !1,
          'ruby-position': !1,
          'shape-image-threshold': !1,
          'shape-outside': !1,
          'shape-margin': !1,
          size: !1,
          speak: !1,
          'speak-as': !1,
          'speak-header': !1,
          'speak-numeral': !1,
          'speak-punctuation': !1,
          'speech-rate': !1,
          stress: !1,
          'string-set': !1,
          'tab-size': !1,
          'table-layout': !1,
          'text-align': !0,
          'text-align-last': !0,
          'text-combine-upright': !0,
          'text-decoration': !0,
          'text-decoration-color': !0,
          'text-decoration-line': !0,
          'text-decoration-skip': !0,
          'text-decoration-style': !0,
          'text-emphasis': !0,
          'text-emphasis-color': !0,
          'text-emphasis-position': !0,
          'text-emphasis-style': !0,
          'text-height': !0,
          'text-indent': !0,
          'text-justify': !0,
          'text-orientation': !0,
          'text-overflow': !0,
          'text-shadow': !0,
          'text-space-collapse': !0,
          'text-transform': !0,
          'text-underline-position': !0,
          'text-wrap': !0,
          top: !1,
          transform: !1,
          'transform-origin': !1,
          'transform-style': !1,
          transition: !1,
          'transition-delay': !1,
          'transition-duration': !1,
          'transition-property': !1,
          'transition-timing-function': !1,
          'unicode-bidi': !1,
          'vertical-align': !1,
          visibility: !1,
          'voice-balance': !1,
          'voice-duration': !1,
          'voice-family': !1,
          'voice-pitch': !1,
          'voice-range': !1,
          'voice-rate': !1,
          'voice-stress': !1,
          'voice-volume': !1,
          volume: !1,
          'white-space': !1,
          widows: !1,
          width: !0,
          'will-change': !1,
          'word-break': !0,
          'word-spacing': !0,
          'word-wrap': !0,
          'wrap-flow': !1,
          'wrap-through': !1,
          'writing-mode': !1,
          'z-index': !1,
        };
      }
      var h = /javascript\s*\:/gim;
      (m.whiteList = {
        'align-content': !1,
        'align-items': !1,
        'align-self': !1,
        'alignment-adjust': !1,
        'alignment-baseline': !1,
        all: !1,
        'anchor-point': !1,
        animation: !1,
        'animation-delay': !1,
        'animation-direction': !1,
        'animation-duration': !1,
        'animation-fill-mode': !1,
        'animation-iteration-count': !1,
        'animation-name': !1,
        'animation-play-state': !1,
        'animation-timing-function': !1,
        azimuth: !1,
        'backface-visibility': !1,
        background: !0,
        'background-attachment': !0,
        'background-clip': !0,
        'background-color': !0,
        'background-image': !0,
        'background-origin': !0,
        'background-position': !0,
        'background-repeat': !0,
        'background-size': !0,
        'baseline-shift': !1,
        binding: !1,
        bleed: !1,
        'bookmark-label': !1,
        'bookmark-level': !1,
        'bookmark-state': !1,
        border: !0,
        'border-bottom': !0,
        'border-bottom-color': !0,
        'border-bottom-left-radius': !0,
        'border-bottom-right-radius': !0,
        'border-bottom-style': !0,
        'border-bottom-width': !0,
        'border-collapse': !0,
        'border-color': !0,
        'border-image': !0,
        'border-image-outset': !0,
        'border-image-repeat': !0,
        'border-image-slice': !0,
        'border-image-source': !0,
        'border-image-width': !0,
        'border-left': !0,
        'border-left-color': !0,
        'border-left-style': !0,
        'border-left-width': !0,
        'border-radius': !0,
        'border-right': !0,
        'border-right-color': !0,
        'border-right-style': !0,
        'border-right-width': !0,
        'border-spacing': !0,
        'border-style': !0,
        'border-top': !0,
        'border-top-color': !0,
        'border-top-left-radius': !0,
        'border-top-right-radius': !0,
        'border-top-style': !0,
        'border-top-width': !0,
        'border-width': !0,
        bottom: !1,
        'box-decoration-break': !0,
        'box-shadow': !0,
        'box-sizing': !0,
        'box-snap': !0,
        'box-suppress': !0,
        'break-after': !0,
        'break-before': !0,
        'break-inside': !0,
        'caption-side': !1,
        chains: !1,
        clear: !0,
        clip: !1,
        'clip-path': !1,
        'clip-rule': !1,
        color: !0,
        'color-interpolation-filters': !0,
        'column-count': !1,
        'column-fill': !1,
        'column-gap': !1,
        'column-rule': !1,
        'column-rule-color': !1,
        'column-rule-style': !1,
        'column-rule-width': !1,
        'column-span': !1,
        'column-width': !1,
        columns: !1,
        contain: !1,
        content: !1,
        'counter-increment': !1,
        'counter-reset': !1,
        'counter-set': !1,
        crop: !1,
        cue: !1,
        'cue-after': !1,
        'cue-before': !1,
        cursor: !1,
        direction: !1,
        display: !0,
        'display-inside': !0,
        'display-list': !0,
        'display-outside': !0,
        'dominant-baseline': !1,
        elevation: !1,
        'empty-cells': !1,
        filter: !1,
        flex: !1,
        'flex-basis': !1,
        'flex-direction': !1,
        'flex-flow': !1,
        'flex-grow': !1,
        'flex-shrink': !1,
        'flex-wrap': !1,
        float: !1,
        'float-offset': !1,
        'flood-color': !1,
        'flood-opacity': !1,
        'flow-from': !1,
        'flow-into': !1,
        font: !0,
        'font-family': !0,
        'font-feature-settings': !0,
        'font-kerning': !0,
        'font-language-override': !0,
        'font-size': !0,
        'font-size-adjust': !0,
        'font-stretch': !0,
        'font-style': !0,
        'font-synthesis': !0,
        'font-variant': !0,
        'font-variant-alternates': !0,
        'font-variant-caps': !0,
        'font-variant-east-asian': !0,
        'font-variant-ligatures': !0,
        'font-variant-numeric': !0,
        'font-variant-position': !0,
        'font-weight': !0,
        grid: !1,
        'grid-area': !1,
        'grid-auto-columns': !1,
        'grid-auto-flow': !1,
        'grid-auto-rows': !1,
        'grid-column': !1,
        'grid-column-end': !1,
        'grid-column-start': !1,
        'grid-row': !1,
        'grid-row-end': !1,
        'grid-row-start': !1,
        'grid-template': !1,
        'grid-template-areas': !1,
        'grid-template-columns': !1,
        'grid-template-rows': !1,
        'hanging-punctuation': !1,
        height: !0,
        hyphens: !1,
        icon: !1,
        'image-orientation': !1,
        'image-resolution': !1,
        'ime-mode': !1,
        'initial-letters': !1,
        'inline-box-align': !1,
        'justify-content': !1,
        'justify-items': !1,
        'justify-self': !1,
        left: !1,
        'letter-spacing': !0,
        'lighting-color': !0,
        'line-box-contain': !1,
        'line-break': !1,
        'line-grid': !1,
        'line-height': !1,
        'line-snap': !1,
        'line-stacking': !1,
        'line-stacking-ruby': !1,
        'line-stacking-shift': !1,
        'line-stacking-strategy': !1,
        'list-style': !0,
        'list-style-image': !0,
        'list-style-position': !0,
        'list-style-type': !0,
        margin: !0,
        'margin-bottom': !0,
        'margin-left': !0,
        'margin-right': !0,
        'margin-top': !0,
        'marker-offset': !1,
        'marker-side': !1,
        marks: !1,
        mask: !1,
        'mask-box': !1,
        'mask-box-outset': !1,
        'mask-box-repeat': !1,
        'mask-box-slice': !1,
        'mask-box-source': !1,
        'mask-box-width': !1,
        'mask-clip': !1,
        'mask-image': !1,
        'mask-origin': !1,
        'mask-position': !1,
        'mask-repeat': !1,
        'mask-size': !1,
        'mask-source-type': !1,
        'mask-type': !1,
        'max-height': !0,
        'max-lines': !1,
        'max-width': !0,
        'min-height': !0,
        'min-width': !0,
        'move-to': !1,
        'nav-down': !1,
        'nav-index': !1,
        'nav-left': !1,
        'nav-right': !1,
        'nav-up': !1,
        'object-fit': !1,
        'object-position': !1,
        opacity: !1,
        order: !1,
        orphans: !1,
        outline: !1,
        'outline-color': !1,
        'outline-offset': !1,
        'outline-style': !1,
        'outline-width': !1,
        overflow: !1,
        'overflow-wrap': !1,
        'overflow-x': !1,
        'overflow-y': !1,
        padding: !0,
        'padding-bottom': !0,
        'padding-left': !0,
        'padding-right': !0,
        'padding-top': !0,
        page: !1,
        'page-break-after': !1,
        'page-break-before': !1,
        'page-break-inside': !1,
        'page-policy': !1,
        pause: !1,
        'pause-after': !1,
        'pause-before': !1,
        perspective: !1,
        'perspective-origin': !1,
        pitch: !1,
        'pitch-range': !1,
        'play-during': !1,
        position: !1,
        'presentation-level': !1,
        quotes: !1,
        'region-fragment': !1,
        resize: !1,
        rest: !1,
        'rest-after': !1,
        'rest-before': !1,
        richness: !1,
        right: !1,
        rotation: !1,
        'rotation-point': !1,
        'ruby-align': !1,
        'ruby-merge': !1,
        'ruby-position': !1,
        'shape-image-threshold': !1,
        'shape-outside': !1,
        'shape-margin': !1,
        size: !1,
        speak: !1,
        'speak-as': !1,
        'speak-header': !1,
        'speak-numeral': !1,
        'speak-punctuation': !1,
        'speech-rate': !1,
        stress: !1,
        'string-set': !1,
        'tab-size': !1,
        'table-layout': !1,
        'text-align': !0,
        'text-align-last': !0,
        'text-combine-upright': !0,
        'text-decoration': !0,
        'text-decoration-color': !0,
        'text-decoration-line': !0,
        'text-decoration-skip': !0,
        'text-decoration-style': !0,
        'text-emphasis': !0,
        'text-emphasis-color': !0,
        'text-emphasis-position': !0,
        'text-emphasis-style': !0,
        'text-height': !0,
        'text-indent': !0,
        'text-justify': !0,
        'text-orientation': !0,
        'text-overflow': !0,
        'text-shadow': !0,
        'text-space-collapse': !0,
        'text-transform': !0,
        'text-underline-position': !0,
        'text-wrap': !0,
        top: !1,
        transform: !1,
        'transform-origin': !1,
        'transform-style': !1,
        transition: !1,
        'transition-delay': !1,
        'transition-duration': !1,
        'transition-property': !1,
        'transition-timing-function': !1,
        'unicode-bidi': !1,
        'vertical-align': !1,
        visibility: !1,
        'voice-balance': !1,
        'voice-duration': !1,
        'voice-family': !1,
        'voice-pitch': !1,
        'voice-range': !1,
        'voice-rate': !1,
        'voice-stress': !1,
        'voice-volume': !1,
        volume: !1,
        'white-space': !1,
        widows: !1,
        width: !0,
        'will-change': !1,
        'word-break': !0,
        'word-spacing': !0,
        'word-wrap': !0,
        'wrap-flow': !1,
        'wrap-through': !1,
        'writing-mode': !1,
        'z-index': !1,
      }),
        (m.getDefaultWhiteList = b),
        (m.onAttr = function (t, e, r) {}),
        (m.onIgnoreAttr = function (t, e, r) {}),
        (m.safeAttrValue = function (t, e) {
          return h.test(e) ? '' : e;
        });
      var v = function (t) {
          return String.prototype.trim
            ? t.trim()
            : t.replace(/(^\s*)|(\s*$)/g, '');
        },
        y = function (t) {
          return String.prototype.trimRight
            ? t.trimRight()
            : t.replace(/(\s*$)/g, '');
        },
        w = m,
        k = function (t, e) {
          ';' !== (t = y(t))[t.length - 1] && (t += ';');
          var r = t.length,
            n = !1,
            i = 0,
            o = 0,
            a = '';
          function s() {
            if (!n) {
              var r = v(t.slice(i, o)),
                s = r.indexOf(':');
              if (-1 !== s) {
                var l = v(r.slice(0, s)),
                  c = v(r.slice(s + 1));
                if (l) {
                  var u = e(i, a.length, l, c, r);
                  u && (a += u + '; ');
                }
              }
            }
            i = o + 1;
          }
          for (; o < r; o++) {
            var l = t[o];
            if ('/' === l && '*' === t[o + 1]) {
              var c = t.indexOf('*/', o + 2);
              if (-1 === c) break;
              (i = (o = c + 1) + 1), (n = !1);
            } else
              '(' === l
                ? (n = !0)
                : ')' === l
                ? (n = !1)
                : ';' === l
                ? n || s()
                : '\n' === l && s();
          }
          return v(a);
        };
      function x(t) {
        return null == t;
      }
      function A(t) {
        ((t = (function (t) {
          var e = {};
          for (var r in t) e[r] = t[r];
          return e;
        })(t || {})).whiteList = t.whiteList || w.whiteList),
          (t.onAttr = t.onAttr || w.onAttr),
          (t.onIgnoreAttr = t.onIgnoreAttr || w.onIgnoreAttr),
          (t.safeAttrValue = t.safeAttrValue || w.safeAttrValue),
          (this.options = t);
      }
      A.prototype.process = function (t) {
        if (!(t = (t = t || '').toString())) return '';
        var e = this.options,
          r = e.whiteList,
          n = e.onAttr,
          i = e.onIgnoreAttr,
          o = e.safeAttrValue;
        return k(t, function (t, e, a, s, l) {
          var c = r[a],
            u = !1;
          if (
            (!0 === c
              ? (u = c)
              : 'function' == typeof c
              ? (u = c(s))
              : c instanceof RegExp && (u = c.test(s)),
            !0 !== u && (u = !1),
            (s = o(a, s)))
          ) {
            var d,
              f = { position: e, sourcePosition: t, source: l, isWhite: u };
            return u
              ? x((d = n(a, s, f)))
                ? a + ':' + s
                : d
              : x((d = i(a, s, f)))
              ? void 0
              : d;
          }
        });
      };
      var T = A;
      !(function (t, e) {
        var r = m,
          n = T;
        for (var i in (((e = t.exports =
          function (t, e) {
            return new n(e).process(t);
          }).FilterCSS = n),
        r))
          e[i] = r[i];
      })(g, g.exports);
      var O = {
          indexOf: function (t, e) {
            var r, n;
            if (Array.prototype.indexOf) return t.indexOf(e);
            for (r = 0, n = t.length; r < n; r++) if (t[r] === e) return r;
            return -1;
          },
          forEach: function (t, e, r) {
            var n, i;
            if (Array.prototype.forEach) return t.forEach(e, r);
            for (n = 0, i = t.length; n < i; n++) e.call(r, t[n], n, t);
          },
          trim: function (t) {
            return String.prototype.trim
              ? t.trim()
              : t.replace(/(^\s*)|(\s*$)/g, '');
          },
          spaceIndex: function (t) {
            var e = /\s|\n|\t/.exec(t);
            return e ? e.index : -1;
          },
        },
        E = g.exports.FilterCSS,
        S = g.exports.getDefaultWhiteList,
        I = O;
      var j = new E();
      function C(t) {
        return t.replace(F, '&lt;').replace(L, '&gt;');
      }
      var F = /</g,
        L = />/g,
        N = /"/g,
        z = /&quot;/g,
        D = /&#([a-zA-Z0-9]*);?/gim,
        P = /&colon;?/gim,
        V = /&newline;?/gim,
        G =
          /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi,
        R = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,
        B = /u\s*r\s*l\s*\(.*/gi;
      function W(t) {
        return t.replace(N, '&quot;');
      }
      function q(t) {
        return t.replace(z, '"');
      }
      function U(t) {
        return t.replace(D, function (t, e) {
          return 'x' === e[0] || 'X' === e[0]
            ? String.fromCharCode(parseInt(e.substr(1), 16))
            : String.fromCharCode(parseInt(e, 10));
        });
      }
      function $(t) {
        return t.replace(P, ':').replace(V, ' ');
      }
      function H(t) {
        for (var e = '', r = 0, n = t.length; r < n; r++)
          e += t.charCodeAt(r) < 32 ? ' ' : t.charAt(r);
        return I.trim(e);
      }
      function M(t) {
        return H((t = $((t = U((t = q(t)))))));
      }
      function _(t) {
        return C((t = W(t)));
      }
      (p.whiteList = {
        a: ['target', 'href', 'title'],
        abbr: ['title'],
        address: [],
        area: ['shape', 'coords', 'href', 'alt'],
        article: [],
        aside: [],
        audio: [
          'autoplay',
          'controls',
          'crossorigin',
          'loop',
          'muted',
          'preload',
          'src',
        ],
        b: [],
        bdi: ['dir'],
        bdo: ['dir'],
        big: [],
        blockquote: ['cite'],
        br: [],
        caption: [],
        center: [],
        cite: [],
        code: [],
        col: ['align', 'valign', 'span', 'width'],
        colgroup: ['align', 'valign', 'span', 'width'],
        dd: [],
        del: ['datetime'],
        details: ['open'],
        div: [],
        dl: [],
        dt: [],
        em: [],
        figcaption: [],
        figure: [],
        font: ['color', 'size', 'face'],
        footer: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        header: [],
        hr: [],
        i: [],
        img: ['src', 'alt', 'title', 'width', 'height'],
        ins: ['datetime'],
        li: [],
        mark: [],
        nav: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        section: [],
        small: [],
        span: [],
        sub: [],
        summary: [],
        sup: [],
        strong: [],
        strike: [],
        table: ['width', 'border', 'align', 'valign'],
        tbody: ['align', 'valign'],
        td: ['width', 'rowspan', 'colspan', 'align', 'valign'],
        tfoot: ['align', 'valign'],
        th: ['width', 'rowspan', 'colspan', 'align', 'valign'],
        thead: ['align', 'valign'],
        tr: ['rowspan', 'align', 'valign'],
        tt: [],
        u: [],
        ul: [],
        video: [
          'autoplay',
          'controls',
          'crossorigin',
          'loop',
          'muted',
          'playsinline',
          'poster',
          'preload',
          'src',
          'height',
          'width',
        ],
      }),
        (p.getDefaultWhiteList = function () {
          return {
            a: ['target', 'href', 'title'],
            abbr: ['title'],
            address: [],
            area: ['shape', 'coords', 'href', 'alt'],
            article: [],
            aside: [],
            audio: [
              'autoplay',
              'controls',
              'crossorigin',
              'loop',
              'muted',
              'preload',
              'src',
            ],
            b: [],
            bdi: ['dir'],
            bdo: ['dir'],
            big: [],
            blockquote: ['cite'],
            br: [],
            caption: [],
            center: [],
            cite: [],
            code: [],
            col: ['align', 'valign', 'span', 'width'],
            colgroup: ['align', 'valign', 'span', 'width'],
            dd: [],
            del: ['datetime'],
            details: ['open'],
            div: [],
            dl: [],
            dt: [],
            em: [],
            figcaption: [],
            figure: [],
            font: ['color', 'size', 'face'],
            footer: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            header: [],
            hr: [],
            i: [],
            img: ['src', 'alt', 'title', 'width', 'height'],
            ins: ['datetime'],
            li: [],
            mark: [],
            nav: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            section: [],
            small: [],
            span: [],
            sub: [],
            summary: [],
            sup: [],
            strong: [],
            strike: [],
            table: ['width', 'border', 'align', 'valign'],
            tbody: ['align', 'valign'],
            td: ['width', 'rowspan', 'colspan', 'align', 'valign'],
            tfoot: ['align', 'valign'],
            th: ['width', 'rowspan', 'colspan', 'align', 'valign'],
            thead: ['align', 'valign'],
            tr: ['rowspan', 'align', 'valign'],
            tt: [],
            u: [],
            ul: [],
            video: [
              'autoplay',
              'controls',
              'crossorigin',
              'loop',
              'muted',
              'playsinline',
              'poster',
              'preload',
              'src',
              'height',
              'width',
            ],
          };
        }),
        (p.onTag = function (t, e, r) {}),
        (p.onIgnoreTag = function (t, e, r) {}),
        (p.onTagAttr = function (t, e, r) {}),
        (p.onIgnoreTagAttr = function (t, e, r) {}),
        (p.safeAttrValue = function (t, e, r, n) {
          if (((r = M(r)), 'href' === e || 'src' === e)) {
            if ('#' === (r = I.trim(r))) return '#';
            if (
              'http://' !== r.substr(0, 7) &&
              'https://' !== r.substr(0, 8) &&
              'mailto:' !== r.substr(0, 7) &&
              'tel:' !== r.substr(0, 4) &&
              'data:image/' !== r.substr(0, 11) &&
              'ftp://' !== r.substr(0, 6) &&
              './' !== r.substr(0, 2) &&
              '../' !== r.substr(0, 3) &&
              '#' !== r[0] &&
              '/' !== r[0]
            )
              return '';
          } else if ('background' === e) {
            if (((G.lastIndex = 0), G.test(r))) return '';
          } else if ('style' === e) {
            if (((R.lastIndex = 0), R.test(r))) return '';
            if (
              ((B.lastIndex = 0), B.test(r) && ((G.lastIndex = 0), G.test(r)))
            )
              return '';
            !1 !== n && (r = (n = n || j).process(r));
          }
          return _(r);
        }),
        (p.escapeHtml = C),
        (p.escapeQuote = W),
        (p.unescapeQuote = q),
        (p.escapeHtmlEntities = U),
        (p.escapeDangerHtml5Entities = $),
        (p.clearNonPrintableCharacter = H),
        (p.friendlyAttrValue = M),
        (p.escapeAttrValue = _),
        (p.onIgnoreTagStripAll = function () {
          return '';
        }),
        (p.StripTagBody = function (t, e) {
          'function' != typeof e && (e = function () {});
          var r = !Array.isArray(t),
            n = [],
            i = !1;
          return {
            onIgnoreTag: function (o, a, s) {
              if (
                (function (e) {
                  return !!r || -1 !== I.indexOf(t, e);
                })(o)
              ) {
                if (s.isClosing) {
                  var l = '[/removed]',
                    c = s.position + l.length;
                  return n.push([!1 !== i ? i : s.position, c]), (i = !1), l;
                }
                return i || (i = s.position), '[removed]';
              }
              return e(o, a, s);
            },
            remove: function (t) {
              var e = '',
                r = 0;
              return (
                I.forEach(n, function (n) {
                  (e += t.slice(r, n[0])), (r = n[1]);
                }),
                (e += t.slice(r))
              );
            },
          };
        }),
        (p.stripCommentTag = function (t) {
          for (var e = '', r = 0; r < t.length; ) {
            var n = t.indexOf('\x3c!--', r);
            if (-1 === n) {
              e += t.slice(r);
              break;
            }
            e += t.slice(r, n);
            var i = t.indexOf('--\x3e', n);
            if (-1 === i) break;
            r = i + 3;
          }
          return e;
        }),
        (p.stripBlankChar = function (t) {
          var e = t.split('');
          return (e = e.filter(function (t) {
            var e = t.charCodeAt(0);
            return !(127 === e || (e <= 31 && 10 !== e && 13 !== e));
          })).join('');
        }),
        (p.cssFilter = j),
        (p.getDefaultCSSWhiteList = S);
      var X = {},
        Y = O;
      function Z(t) {
        var e = Y.spaceIndex(t);
        if (-1 === e) var r = t.slice(1, -1);
        else r = t.slice(1, e + 1);
        return (
          '/' === (r = Y.trim(r).toLowerCase()).slice(0, 1) && (r = r.slice(1)),
          '/' === r.slice(-1) && (r = r.slice(0, -1)),
          r
        );
      }
      function K(t) {
        return '</' === t.slice(0, 2);
      }
      var Q = /[^a-zA-Z0-9_:\.\-]/gim;
      function J(t, e) {
        for (; e < t.length; e++) {
          var r = t[e];
          if (' ' !== r) return '=' === r ? e : -1;
        }
      }
      function tt(t, e) {
        for (; e > 0; e--) {
          var r = t[e];
          if (' ' !== r) return '=' === r ? e : -1;
        }
      }
      function et(t) {
        return (function (t) {
          return (
            ('"' === t[0] && '"' === t[t.length - 1]) ||
            ("'" === t[0] && "'" === t[t.length - 1])
          );
        })(t)
          ? t.substr(1, t.length - 2)
          : t;
      }
      (X.parseTag = function (t, e, r) {
        var n = '',
          i = 0,
          o = !1,
          a = !1,
          s = 0,
          l = t.length,
          c = '',
          u = '';
        t: for (s = 0; s < l; s++) {
          var d = t.charAt(s);
          if (!1 === o) {
            if ('<' === d) {
              o = s;
              continue;
            }
          } else if (!1 === a) {
            if ('<' === d) {
              (n += r(t.slice(i, s))), (o = s), (i = s);
              continue;
            }
            if ('>' === d) {
              (n += r(t.slice(i, o))),
                (c = Z((u = t.slice(o, s + 1)))),
                (n += e(o, n.length, c, u, K(u))),
                (i = s + 1),
                (o = !1);
              continue;
            }
            if ('"' === d || "'" === d)
              for (
                var f = 1, p = t.charAt(s - f);
                '' === p.trim() || '=' === p;

              ) {
                if ('=' === p) {
                  a = d;
                  continue t;
                }
                p = t.charAt(s - ++f);
              }
          } else if (d === a) {
            a = !1;
            continue;
          }
        }
        return i < t.length && (n += r(t.substr(i))), n;
      }),
        (X.parseAttr = function (t, e) {
          var r = 0,
            n = [],
            i = !1,
            o = t.length;
          function a(t, r) {
            if (
              !((t = (t = Y.trim(t)).replace(Q, '').toLowerCase()).length < 1)
            ) {
              var i = e(t, r || '');
              i && n.push(i);
            }
          }
          for (var s = 0; s < o; s++) {
            var l,
              c = t.charAt(s);
            if (!1 !== i || '=' !== c)
              if (
                !1 === i ||
                s !== r ||
                ('"' !== c && "'" !== c) ||
                '=' !== t.charAt(s - 1)
              ) {
                if (/\s|\n|\t/.test(c)) {
                  if (((t = t.replace(/\s|\n|\t/g, ' ')), !1 === i)) {
                    if (-1 === (l = J(t, s))) {
                      a(Y.trim(t.slice(r, s))), (i = !1), (r = s + 1);
                      continue;
                    }
                    s = l - 1;
                    continue;
                  }
                  if (-1 === (l = tt(t, s - 1))) {
                    a(i, et(Y.trim(t.slice(r, s)))), (i = !1), (r = s + 1);
                    continue;
                  }
                }
              } else {
                if (-1 === (l = t.indexOf(c, s + 1))) break;
                a(i, Y.trim(t.slice(r + 1, l))), (i = !1), (r = (s = l) + 1);
              }
            else (i = t.slice(r, s)), (r = s + 1);
          }
          return (
            r < t.length &&
              (!1 === i ? a(t.slice(r)) : a(i, et(Y.trim(t.slice(r))))),
            Y.trim(n.join(' '))
          );
        });
      var rt = g.exports.FilterCSS,
        nt = p,
        it = X,
        ot = it.parseTag,
        at = it.parseAttr,
        st = O;
      function lt(t) {
        return null == t;
      }
      function ct(t) {
        (t = (function (t) {
          var e = {};
          for (var r in t) e[r] = t[r];
          return e;
        })(t || {})).stripIgnoreTag &&
          (t.onIgnoreTag &&
            console.error(
              'Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time',
            ),
          (t.onIgnoreTag = nt.onIgnoreTagStripAll)),
          (t.whiteList = t.whiteList || nt.whiteList),
          (t.onTag = t.onTag || nt.onTag),
          (t.onTagAttr = t.onTagAttr || nt.onTagAttr),
          (t.onIgnoreTag = t.onIgnoreTag || nt.onIgnoreTag),
          (t.onIgnoreTagAttr = t.onIgnoreTagAttr || nt.onIgnoreTagAttr),
          (t.safeAttrValue = t.safeAttrValue || nt.safeAttrValue),
          (t.escapeHtml = t.escapeHtml || nt.escapeHtml),
          (this.options = t),
          !1 === t.css
            ? (this.cssFilter = !1)
            : ((t.css = t.css || {}), (this.cssFilter = new rt(t.css)));
      }
      ct.prototype.process = function (t) {
        if (!(t = (t = t || '').toString())) return '';
        var e = this.options,
          r = e.whiteList,
          n = e.onTag,
          i = e.onIgnoreTag,
          o = e.onTagAttr,
          a = e.onIgnoreTagAttr,
          s = e.safeAttrValue,
          l = e.escapeHtml,
          c = this.cssFilter;
        e.stripBlankChar && (t = nt.stripBlankChar(t)),
          e.allowCommentTag || (t = nt.stripCommentTag(t));
        var u = !1;
        e.stripIgnoreTagBody &&
          ((u = nt.StripTagBody(e.stripIgnoreTagBody, i)), (i = u.onIgnoreTag));
        var d = ot(
          t,
          function (t, e, u, d, f) {
            var p,
              g = {
                sourcePosition: t,
                position: e,
                isClosing: f,
                isWhite: r.hasOwnProperty(u),
              };
            if (!lt((p = n(u, d, g)))) return p;
            if (g.isWhite) {
              if (g.isClosing) return '</' + u + '>';
              var m = (function (t) {
                  var e = st.spaceIndex(t);
                  if (-1 === e)
                    return { html: '', closing: '/' === t[t.length - 2] };
                  var r =
                    '/' === (t = st.trim(t.slice(e + 1, -1)))[t.length - 1];
                  return (
                    r && (t = st.trim(t.slice(0, -1))), { html: t, closing: r }
                  );
                })(d),
                b = r[u],
                h = at(m.html, function (t, e) {
                  var r,
                    n = -1 !== st.indexOf(b, t);
                  return lt((r = o(u, t, e, n)))
                    ? n
                      ? (e = s(u, t, e, c))
                        ? t + '="' + e + '"'
                        : t
                      : lt((r = a(u, t, e, n)))
                      ? void 0
                      : r
                    : r;
                });
              return (
                (d = '<' + u),
                h && (d += ' ' + h),
                m.closing && (d += ' /'),
                d + '>'
              );
            }
            return lt((p = i(u, d, g))) ? l(d) : p;
          },
          l,
        );
        return u && (d = u.remove(d)), d;
      };
      var ut = ct;
      !(function (t, e) {
        var r = p,
          n = X,
          i = ut;
        function o(t, e) {
          return new i(e).process(t);
        }
        for (var a in (((e = t.exports = o).filterXSS = o),
        (e.FilterXSS = i),
        r))
          e[a] = r[a];
        for (var a in n) e[a] = n[a];
        'undefined' != typeof self &&
          'undefined' != typeof DedicatedWorkerGlobalScope &&
          self instanceof DedicatedWorkerGlobalScope &&
          (self.filterXSS = t.exports);
      })(f, f.exports);
      var dt = (function () {
        function t(t, e) {
          var r,
            n = this;
          (this.arcgisWhiteList = {
            a: ['href', 'style', 'target'],
            abbr: ['title'],
            audio: ['autoplay', 'controls', 'loop', 'muted', 'preload'],
            b: [],
            br: [],
            dd: ['style'],
            div: ['align', 'style'],
            dl: ['style'],
            dt: ['style'],
            em: [],
            figcaption: ['style'],
            figure: ['style'],
            font: ['color', 'face', 'size', 'style'],
            h1: ['style'],
            h2: ['style'],
            h3: ['style'],
            h4: ['style'],
            h5: ['style'],
            h6: ['style'],
            hr: [],
            i: [],
            img: ['alt', 'border', 'height', 'src', 'style', 'width'],
            li: [],
            ol: [],
            p: ['style'],
            source: ['media', 'src', 'type'],
            span: ['style'],
            strong: [],
            sub: ['style'],
            sup: ['style'],
            table: [
              'border',
              'cellpadding',
              'cellspacing',
              'height',
              'style',
              'width',
            ],
            tbody: [],
            tr: ['align', 'height', 'style', 'valign'],
            td: [
              'align',
              'colspan',
              'height',
              'nowrap',
              'rowspan',
              'style',
              'valign',
              'width',
            ],
            th: [
              'align',
              'colspan',
              'height',
              'nowrap',
              'rowspan',
              'style',
              'valign',
              'width',
            ],
            u: [],
            ul: [],
            video: [
              'autoplay',
              'controls',
              'height',
              'loop',
              'muted',
              'poster',
              'preload',
              'width',
            ],
          }),
            (this.allowedProtocols = [
              'http',
              'https',
              'mailto',
              'iform',
              'tel',
              'flow',
              'lfmobile',
              'arcgis-navigator',
              'arcgis-appstudio-player',
              'arcgis-survey123',
              'arcgis-collector',
              'arcgis-workforce',
              'arcgis-explorer',
              'arcgis-trek2there',
              'arcgis-quickcapture',
              'mspbi',
              'comgooglemaps',
              'pdfefile',
              'pdfehttp',
              'pdfehttps',
              'boxapp',
              'boxemm',
              'awb',
              'awbs',
              'gropen',
              'radarscope',
            ]),
            (this.arcgisFilterOptions = {
              allowCommentTag: !0,
              safeAttrValue: function (t, e, r, i) {
                return ('a' === t && 'href' === e) ||
                  (('img' === t || 'source' === t) && 'src' === e)
                  ? n.sanitizeUrl(r)
                  : f.exports.safeAttrValue(t, e, r, i);
              },
            }),
            t && !e
              ? (r = t)
              : t && e
              ? ((r = Object.create(this.arcgisFilterOptions)),
                Object.keys(t).forEach(function (e) {
                  'whiteList' === e
                    ? (r.whiteList = n._extendObjectOfArrays([
                        n.arcgisWhiteList,
                        t.whiteList || {},
                      ]))
                    : (r[e] = t[e]);
                }))
              : ((r = Object.create(this.arcgisFilterOptions)).whiteList =
                  this.arcgisWhiteList),
            (this.xssFilterOptions = r),
            (this._xssFilter = new f.exports.FilterXSS(r));
        }
        return (
          (t.prototype.sanitize = function (t, e) {
            switch ((void 0 === e && (e = {}), typeof t)) {
              case 'number':
                return isNaN(t) || !isFinite(t) ? null : t;
              case 'boolean':
                return t;
              case 'string':
                return this._xssFilter.process(t);
              case 'object':
                return this._iterateOverObject(t, e);
              default:
                if (e.allowUndefined && void 0 === t) return;
                return null;
            }
          }),
          (t.prototype.sanitizeUrl = function (t) {
            var e = this._trim(t.substring(0, t.indexOf(':')));
            return '/' === t ||
              '#' === t ||
              '#' === t[0] ||
              this.allowedProtocols.indexOf(e.toLowerCase()) > -1
              ? f.exports.escapeAttrValue(t)
              : '';
          }),
          (t.prototype.sanitizeHTMLAttribute = function (t, e, r, n) {
            return 'function' == typeof this.xssFilterOptions.safeAttrValue
              ? this.xssFilterOptions.safeAttrValue(t, e, r, n)
              : f.exports.safeAttrValue(t, e, r, n);
          }),
          (t.prototype.validate = function (t, e) {
            void 0 === e && (e = {});
            var r = this.sanitize(t, e);
            return { isValid: t === r, sanitized: r };
          }),
          (t.prototype._extendObjectOfArrays = function (t) {
            var e = {};
            return (
              t.forEach(function (t) {
                Object.keys(t).forEach(function (r) {
                  Array.isArray(t[r]) && Array.isArray(e[r])
                    ? (e[r] = e[r].concat(t[r]))
                    : (e[r] = t[r]);
                });
              }),
              e
            );
          }),
          (t.prototype._iterateOverObject = function (t, e) {
            var r = this;
            void 0 === e && (e = {});
            try {
              var n = !1,
                i = void 0;
              if (Array.isArray(t))
                i = t.reduce(function (t, i) {
                  var o = r.validate(i, e);
                  return o.isValid
                    ? t.concat([i])
                    : ((n = !0), t.concat([o.sanitized]));
                }, []);
              else {
                if (
                  !(function (t) {
                    if (
                      !(function (t) {
                        return !!t && 'object' == typeof t;
                      })(t) ||
                      '[object Object]' != u.call(t) ||
                      (function (t) {
                        var e = !1;
                        if (null != t && 'function' != typeof t.toString)
                          try {
                            e = !!(t + '');
                          } catch (t) {}
                        return e;
                      })(t)
                    )
                      return !1;
                    var e = d(t);
                    if (null === e) return !0;
                    var r = l.call(e, 'constructor') && e.constructor;
                    return (
                      'function' == typeof r && r instanceof r && s.call(r) == c
                    );
                  })(t)
                ) {
                  if (e.allowUndefined && void 0 === t) return;
                  return null;
                }
                i = Object.keys(t).reduce(function (i, o) {
                  var a = t[o],
                    s = r.validate(a, e);
                  return (
                    s.isValid ? (i[o] = a) : ((n = !0), (i[o] = s.sanitized)), i
                  );
                }, {});
              }
              return n ? i : t;
            } catch (t) {
              return null;
            }
          }),
          (t.prototype._trim = function (t) {
            return String.prototype.trim
              ? t.trim()
              : t.replace(/(^\s*)|(\s*$)/g, '');
          }),
          t
        );
      })();
    },
  },
]);
