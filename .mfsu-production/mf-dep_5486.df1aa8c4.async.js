(self['webpackChunk'] = self['webpackChunk'] || []).push([
  ['mf-dep_5486'],
  {
    5486: function (t, e, n) {
      'use strict';
      n.r(e),
        n.d(e, {
          renderClient: function () {
            return _;
          },
          renderRoutes: function () {
            return I;
          },
        });
      var r = n(73935),
        o = n(67294),
        i = n(36901),
        a = n(19630);
      function u(t, e, n) {
        return (
          void 0 === n && (n = []),
          t.some(function (t) {
            var r = t.path
              ? (0, a.LX)(e, t)
              : n.length
              ? n[n.length - 1].match
              : a.F0.computeRootMatch(e);
            return (
              r &&
                (n.push({ route: t, match: r }), t.routes && u(t.routes, e, n)),
              r
            );
          }),
          n
        );
      }
      function l(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e &&
            (r = r.filter(function (e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function c(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {};
          e % 2
            ? l(Object(n), !0).forEach(function (e) {
                f(t, e, n[e]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : l(Object(n)).forEach(function (e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e),
                );
              });
        }
        return t;
      }
      function s(t, e, n, r, o, i, a) {
        try {
          var u = t[i](a),
            l = u.value;
        } catch (c) {
          return void n(c);
        }
        u.done ? e(l) : Promise.resolve(l).then(r, o);
      }
      function p(t) {
        return function () {
          var e = this,
            n = arguments;
          return new Promise(function (r, o) {
            var i = t.apply(e, n);
            function a(t) {
              s(i, r, o, a, u, 'next', t);
            }
            function u(t) {
              s(i, r, o, a, u, 'throw', t);
            }
            a(void 0);
          });
        };
      }
      function f(t, e, n) {
        return (
          e in t
            ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[e] = n),
          t
        );
      }
      function d() {
        return (
          (d =
            Object.assign ||
            function (t) {
              for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
              }
              return t;
            }),
          d.apply(this, arguments)
        );
      }
      function m(t, e) {
        if (null == t) return {};
        var n,
          r,
          o = {},
          i = Object.keys(t);
        for (r = 0; r < i.length; r++)
          (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
        return o;
      }
      function h(t, e) {
        if (null == t) return {};
        var n,
          r,
          o = m(t, e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              e.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(t, n) &&
                  (o[n] = t[n]));
        }
        return o;
      }
      function y(t, e) {
        return v(t) || g(t, e) || b(t, e) || P();
      }
      function v(t) {
        if (Array.isArray(t)) return t;
      }
      function g(t, e) {
        var n =
          t &&
          (('undefined' !== typeof Symbol && t[Symbol.iterator]) ||
            t['@@iterator']);
        if (null != n) {
          var r,
            o,
            i = [],
            a = !0,
            u = !1;
          try {
            for (n = n.call(t); !(a = (r = n.next()).done); a = !0)
              if ((i.push(r.value), e && i.length === e)) break;
          } catch (l) {
            (u = !0), (o = l);
          } finally {
            try {
              a || null == n['return'] || n['return']();
            } finally {
              if (u) throw o;
            }
          }
          return i;
        }
      }
      function b(t, e) {
        if (t) {
          if ('string' === typeof t) return w(t, e);
          var n = Object.prototype.toString.call(t).slice(8, -1);
          return (
            'Object' === n && t.constructor && (n = t.constructor.name),
            'Map' === n || 'Set' === n
              ? Array.from(t)
              : 'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              ? w(t, e)
              : void 0
          );
        }
      }
      function w(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
        return r;
      }
      function P() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        );
      }
      function O(t, e) {
        var n =
          ('undefined' !== typeof Symbol && t[Symbol.iterator]) ||
          t['@@iterator'];
        if (!n) {
          if (
            Array.isArray(t) ||
            (n = b(t)) ||
            (e && t && 'number' === typeof t.length)
          ) {
            n && (t = n);
            var r = 0,
              o = function () {};
            return {
              s: o,
              n: function () {
                return r >= t.length
                  ? { done: !0 }
                  : { done: !1, value: t[r++] };
              },
              e: function (t) {
                throw t;
              },
              f: o,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          );
        }
        var i,
          a = !0,
          u = !1;
        return {
          s: function () {
            n = n.call(t);
          },
          n: function () {
            var t = n.next();
            return (a = t.done), t;
          },
          e: function (t) {
            (u = !0), (i = t);
          },
          f: function () {
            try {
              a || null == n.return || n.return();
            } finally {
              if (u) throw i;
            }
          },
        };
      }
      function x(t) {
        return o.createElement(a.s6.Consumer, null, function (e) {
          var n,
            r = t.children,
            i = h(t, ['children']),
            u = t.location || e.location,
            l = null;
          return (
            o.Children.forEach(r, function (t) {
              if (null === l && (0, o.isValidElement)(t)) {
                n = t;
                var r = t.props.path || t.props.from;
                l = r
                  ? (0, a.LX)(u.pathname, c(c({}, t.props), {}, { path: r }))
                  : e.match;
              }
            }),
            l
              ? (0, o.cloneElement)(n, {
                  location: u,
                  computedMatch: l,
                  layoutProps: i,
                })
              : null
          );
        });
      }
      function E(t) {
        return o.createElement(a.s6.Consumer, null, function (e) {
          var n = t.location || e.location,
            r = t.computedMatch,
            i = c(c({}, e), {}, { location: n, match: r }),
            u = t.render;
          return o.createElement(
            a.s6.Provider,
            { value: i },
            i.match ? u(c(c({}, t.layoutProps), i)) : null,
          );
        });
      }
      function j(t, e) {
        t.component;
        var n = h(t, ['component']),
          r = t.component;
        function a(a) {
          var u = (0, o.useState)(function () {
              return window.g_initialProps;
            }),
            l = y(u, 2),
            s = l[0],
            f = l[1];
          return (
            (0, o.useEffect)(
              function () {
                var o = (function () {
                  var o = p(
                    regeneratorRuntime.mark(function o() {
                      var u, l, s, p, d;
                      return regeneratorRuntime.wrap(function (o) {
                        while (1)
                          switch ((o.prev = o.next)) {
                            case 0:
                              if (((l = r), !r.preload)) {
                                o.next = 6;
                                break;
                              }
                              return (o.next = 4), r.preload();
                            case 4:
                              (l = o.sent), (l = l.default || l);
                            case 6:
                              if (
                                ((s = c(
                                  c(
                                    {
                                      isServer: !1,
                                      match:
                                        null === a || void 0 === a
                                          ? void 0
                                          : a.match,
                                      history:
                                        null === a || void 0 === a
                                          ? void 0
                                          : a.history,
                                      route: t,
                                    },
                                    e.getInitialPropsCtx || {},
                                  ),
                                  n,
                                )),
                                !(null === (u = l) || void 0 === u
                                  ? void 0
                                  : u.getInitialProps))
                              ) {
                                o.next = 15;
                                break;
                              }
                              return (
                                (o.next = 10),
                                e.plugin.applyPlugins({
                                  key: 'ssr.modifyGetInitialPropsCtx',
                                  type: i.Ac.modify,
                                  initialValue: s,
                                  async: !0,
                                })
                              );
                            case 10:
                              return (
                                (p = o.sent),
                                (o.next = 13),
                                l.getInitialProps(p || s)
                              );
                            case 13:
                              (d = o.sent), f(d);
                            case 15:
                            case 'end':
                              return o.stop();
                          }
                      }, o);
                    }),
                  );
                  return function () {
                    return o.apply(this, arguments);
                  };
                })();
                window.g_initialProps || o();
              },
              [window.location.pathname, window.location.search],
            ),
            o.createElement(r, d({}, a, s))
          );
        }
        return (
          (a.wrapInitialPropsLoaded = !0),
          (a.displayName = 'ComponentWithInitialPropsFetch'),
          a
        );
      }
      function k(t) {
        var e = t.route,
          n = t.opts,
          r = t.props,
          i = I(
            c(
              c({}, n),
              {},
              { routes: e.routes || [], rootRoutes: n.rootRoutes },
            ),
            { location: r.location },
          ),
          a = e.component,
          u = e.wrappers;
        if (a) {
          var l = n.isServer ? {} : window.g_initialProps,
            s = c(
              c(c(c({}, r), n.extraProps), n.pageInitialProps || l),
              {},
              { route: e, routes: n.rootRoutes },
            ),
            p = o.createElement(a, s, i);
          if (u) {
            var f = u.length - 1;
            while (f >= 0) (p = (0, o.createElement)(u[f], s, p)), (f -= 1);
          }
          return p;
        }
        return i;
      }
      function S(t) {
        var e,
          n,
          r,
          i = t.route,
          u = t.index,
          l = t.opts,
          c = {
            key: i.key || u,
            exact: i.exact,
            strict: i.strict,
            sensitive: i.sensitive,
            path: i.path,
          };
        return i.redirect
          ? o.createElement(a.l_, d({}, c, { from: i.path, to: i.redirect }))
          : (!l.ssrProps ||
              l.isServer ||
              (null === (e = i.component) || void 0 === e
                ? void 0
                : e.wrapInitialPropsLoaded) ||
              (!(null === (n = i.component) || void 0 === n
                ? void 0
                : n.getInitialProps) &&
                !(null === (r = i.component) || void 0 === r
                  ? void 0
                  : r.preload)) ||
              (i.component = j(i, l)),
            o.createElement(
              E,
              d({}, c, {
                render: function (t) {
                  return k({ route: i, opts: l, props: t });
                },
              }),
            ));
      }
      function I(t) {
        var e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return t.routes
          ? o.createElement(
              x,
              e,
              t.routes.map(function (e, n) {
                return S({
                  route: e,
                  index: n,
                  opts: c(
                    c({}, t),
                    {},
                    { rootRoutes: t.rootRoutes || t.routes },
                  ),
                });
              }),
            )
          : null;
      }
      function R(t) {
        var e = t.history,
          n = h(t, ['history']);
        return (
          (0, o.useEffect)(
            function () {
              function r(e, r) {
                var o = u(t.routes, e.pathname);
                'undefined' !== typeof document &&
                  void 0 !== n.defaultTitle &&
                  (document.title =
                    (o.length && o[o.length - 1].route.title) ||
                    n.defaultTitle ||
                    ''),
                  t.plugin.applyPlugins({
                    key: 'onRouteChange',
                    type: i.Ac.event,
                    args: {
                      routes: t.routes,
                      matchedRoutes: o,
                      location: e,
                      action: r,
                    },
                  });
              }
              return (
                window.g_useSSR && (window.g_initialProps = null),
                r(e.location, 'POP'),
                e.listen(r)
              );
            },
            [e],
          ),
          o.createElement(a.F0, { history: e }, I(n))
        );
      }
      function C(t) {
        return A.apply(this, arguments);
      }
      function A() {
        return (
          (A = p(
            regeneratorRuntime.mark(function t(e) {
              var n,
                r,
                o,
                i,
                a,
                l,
                c,
                s,
                p = arguments;
              return regeneratorRuntime.wrap(
                function (t) {
                  while (1)
                    switch ((t.prev = t.next)) {
                      case 0:
                        (n =
                          p.length > 1 && void 0 !== p[1]
                            ? p[1]
                            : window.location.pathname),
                          (r = u(e, n)),
                          (o = O(r)),
                          (t.prev = 3),
                          o.s();
                      case 5:
                        if ((i = o.n()).done) {
                          t.next = 19;
                          break;
                        }
                        if (
                          ((l = i.value),
                          (c = l.route),
                          'string' === typeof c.component ||
                            !(null === (a = c.component) || void 0 === a
                              ? void 0
                              : a.preload))
                        ) {
                          t.next = 13;
                          break;
                        }
                        return (t.next = 11), c.component.preload();
                      case 11:
                        (s = t.sent), (c.component = s.default || s);
                      case 13:
                        if (!c.routes) {
                          t.next = 17;
                          break;
                        }
                        return (t.next = 16), C(c.routes, n);
                      case 16:
                        c.routes = t.sent;
                      case 17:
                        t.next = 5;
                        break;
                      case 19:
                        t.next = 24;
                        break;
                      case 21:
                        (t.prev = 21), (t.t0 = t['catch'](3)), o.e(t.t0);
                      case 24:
                        return (t.prev = 24), o.f(), t.finish(24);
                      case 27:
                        return t.abrupt('return', e);
                      case 28:
                      case 'end':
                        return t.stop();
                    }
                },
                t,
                null,
                [[3, 21, 24, 27]],
              );
            }),
          )),
          A.apply(this, arguments)
        );
      }
      function _(t) {
        var e = t.plugin.applyPlugins({
          type: i.Ac.modify,
          key: 'rootContainer',
          initialValue: o.createElement(R, {
            history: t.history,
            routes: t.routes,
            plugin: t.plugin,
            ssrProps: t.ssrProps,
            defaultTitle: t.defaultTitle,
          }),
          args: { history: t.history, routes: t.routes, plugin: t.plugin },
        });
        if (!t.rootElement) return e;
        var n =
            'string' === typeof t.rootElement
              ? document.getElementById(t.rootElement)
              : t.rootElement,
          a = t.callback || function () {};
        window.g_useSSR
          ? t.dynamicImport
            ? C(t.routes).then(function () {
                (0, r.hydrate)(e, n, a);
              })
            : (0, r.hydrate)(e, n, a)
          : (0, r.render)(e, n, a);
      }
    },
  },
]);
