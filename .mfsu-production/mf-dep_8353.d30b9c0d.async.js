(self['webpackChunk'] = self['webpackChunk'] || []).push([
  ['mf-dep_8353'],
  {
    21687: function (e, t, n) {
      'use strict';
      var o = n(80334);
      t['Z'] = function (e, t, n) {
        (0, o.ZP)(e, '[antd: '.concat(t, '] ').concat(n));
      };
    },
    96159: function (e, t, n) {
      'use strict';
      n.d(t, {
        l$: function () {
          return r;
        },
        Tm: function () {
          return l;
        },
      });
      var o = n(67294),
        r = o.isValidElement;
      function i(e, t, n) {
        return r(e)
          ? o.cloneElement(e, 'function' === typeof n ? n(e.props || {}) : n)
          : t;
      }
      function l(e, t) {
        return i(e, e, t);
      }
    },
    93355: function (e, t, n) {
      'use strict';
      n.d(t, {
        b: function () {
          return o;
        },
      });
      var o = function () {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return t;
      };
    },
    48353: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return $t;
        },
      });
      var o = n(22122),
        r = n(6610),
        i = n(5991),
        l = n(10379),
        a = n(44144),
        c = n(67294),
        u = n(96156),
        s = n(28991),
        f = n(85061),
        d = n(28481),
        p = n(81253),
        v = n(94184),
        m = n.n(v),
        y = n(96774),
        h = n.n(y),
        g = n(21770),
        b = n(80334),
        C = n(19214),
        Z = n(15105),
        E = n(98423),
        x = n(56982),
        w = c.createContext(null);
      function N(e, t) {
        var n = (0, s.Z)({}, e);
        return (
          Object.keys(t).forEach(function (e) {
            var o = t[e];
            void 0 !== o && (n[e] = o);
          }),
          n
        );
      }
      function O(e) {
        var t = e.children,
          n = e.locked,
          o = (0, p.Z)(e, ['children', 'locked']),
          r = c.useContext(w),
          i = (0, x.Z)(
            function () {
              return N(r, o);
            },
            [r, o],
            function (e, t) {
              return !n && (e[0] !== t[0] || !h()(e[1], t[1]));
            },
          );
        return c.createElement(w.Provider, { value: i }, t);
      }
      function P(e, t, n, o) {
        var r = c.useContext(w),
          i = r.activeKey,
          l = r.onActive,
          a = r.onInactive,
          u = { active: i === e };
        return (
          t ||
            ((u.onMouseEnter = function (t) {
              null === n || void 0 === n || n({ key: e, domEvent: t }), l(e);
            }),
            (u.onMouseLeave = function (t) {
              null === o || void 0 === o || o({ key: e, domEvent: t }), a(e);
            })),
          u
        );
      }
      function S(e) {
        var t = e.item,
          n = (0, p.Z)(e, ['item']);
        return (
          Object.defineProperty(n, 'item', {
            get: function () {
              return (
                (0, b.ZP)(
                  !1,
                  '`info.item` is deprecated since we will move to function component that not provides React Node instance in future.',
                ),
                t
              );
            },
          }),
          n
        );
      }
      function k(e) {
        var t,
          n = e.icon,
          o = e.props,
          r = e.children;
        return (
          (t =
            'function' === typeof n ? c.createElement(n, (0, s.Z)({}, o)) : n),
          t || r || null
        );
      }
      function I(e) {
        var t = c.useContext(w),
          n = t.mode,
          o = t.rtl,
          r = t.inlineIndent;
        if ('inline' !== n) return null;
        var i = e;
        return o ? { paddingRight: i * r } : { paddingLeft: i * r };
      }
      var M = [],
        K = c.createContext(null);
      function T() {
        return c.useContext(K);
      }
      var R = c.createContext(M);
      function A(e) {
        var t = c.useContext(R);
        return c.useMemo(
          function () {
            return void 0 !== e ? [].concat((0, f.Z)(t), [e]) : t;
          },
          [t, e],
        );
      }
      var j = c.createContext(null),
        L = c.createContext(null);
      function D(e, t) {
        return void 0 === e ? null : ''.concat(e, '-').concat(t);
      }
      function z(e) {
        var t = c.useContext(L);
        return D(t, e);
      }
      var V = (function (e) {
          (0, l.Z)(n, e);
          var t = (0, a.Z)(n);
          function n() {
            return (0, r.Z)(this, n), t.apply(this, arguments);
          }
          return (
            (0, i.Z)(n, [
              {
                key: 'render',
                value: function () {
                  var e = this.props,
                    t = e.title,
                    n = e.attribute,
                    r = e.elementRef,
                    i = (0, p.Z)(e, ['title', 'attribute', 'elementRef']),
                    l = (0, E.Z)(i, ['eventKey']);
                  return (
                    (0, b.ZP)(
                      !n,
                      '`attribute` of Menu.Item is deprecated. Please pass attribute directly.',
                    ),
                    c.createElement(
                      C.Z.Item,
                      (0, o.Z)(
                        {},
                        n,
                        { title: 'string' === typeof t ? t : void 0 },
                        l,
                        { ref: r },
                      ),
                    )
                  );
                },
              },
            ]),
            n
          );
        })(c.Component),
        _ = function (e) {
          var t,
            n = e.style,
            r = e.className,
            i = e.eventKey,
            l = (e.warnKey, e.disabled),
            a = e.itemIcon,
            d = e.children,
            v = e.role,
            y = e.onMouseEnter,
            h = e.onMouseLeave,
            g = e.onClick,
            b = e.onKeyDown,
            C = e.onFocus,
            E = (0, p.Z)(e, [
              'style',
              'className',
              'eventKey',
              'warnKey',
              'disabled',
              'itemIcon',
              'children',
              'role',
              'onMouseEnter',
              'onMouseLeave',
              'onClick',
              'onKeyDown',
              'onFocus',
            ]),
            x = z(i),
            N = c.useContext(w),
            O = N.prefixCls,
            M = N.onItemClick,
            K = N.disabled,
            T = N.overflowDisabled,
            R = N.itemIcon,
            j = N.selectedKeys,
            L = N.onActive,
            D = ''.concat(O, '-item'),
            _ = c.useRef(),
            B = c.useRef(),
            H = K || l,
            F = A(i);
          var W = function (e) {
              return {
                key: i,
                keyPath: (0, f.Z)(F).reverse(),
                item: _.current,
                domEvent: e,
              };
            },
            $ = a || R,
            X = P(i, H, y, h),
            Y = X.active,
            q = (0, p.Z)(X, ['active']),
            G = j.includes(i),
            U = I(F.length),
            J = function (e) {
              if (!H) {
                var t = W(e);
                null === g || void 0 === g || g(S(t)), M(t);
              }
            },
            Q = function (e) {
              if ((null === b || void 0 === b || b(e), e.which === Z.Z.ENTER)) {
                var t = W(e);
                null === g || void 0 === g || g(S(t)), M(t);
              }
            },
            ee = function (e) {
              L(i), null === C || void 0 === C || C(e);
            },
            te = {};
          return (
            'option' === e.role && (te['aria-selected'] = G),
            c.createElement(
              V,
              (0, o.Z)(
                {
                  ref: _,
                  elementRef: B,
                  role: null === v ? 'none' : v || 'menuitem',
                  tabIndex: l ? null : -1,
                  'data-menu-id': T && x ? null : x,
                },
                E,
                q,
                te,
                {
                  component: 'li',
                  'aria-disabled': l,
                  style: (0, s.Z)((0, s.Z)({}, U), n),
                  className: m()(
                    D,
                    ((t = {}),
                    (0, u.Z)(t, ''.concat(D, '-active'), Y),
                    (0, u.Z)(t, ''.concat(D, '-selected'), G),
                    (0, u.Z)(t, ''.concat(D, '-disabled'), H),
                    t),
                    r,
                  ),
                  onClick: J,
                  onKeyDown: Q,
                  onFocus: ee,
                },
              ),
              d,
              c.createElement(k, {
                props: (0, s.Z)((0, s.Z)({}, e), {}, { isSelected: G }),
                icon: $,
              }),
            )
          );
        };
      function B(e) {
        var t = e.eventKey,
          n = T(),
          o = A(t);
        return (
          c.useEffect(
            function () {
              if (n)
                return (
                  n.registerPath(t, o),
                  function () {
                    n.unregisterPath(t, o);
                  }
                );
            },
            [o],
          ),
          n ? null : c.createElement(_, e)
        );
      }
      var H = B,
        F = n(50344);
      function W(e, t) {
        return (0, F.Z)(e).map(function (e, n) {
          if (c.isValidElement(e)) {
            var o,
              r,
              i = e.key,
              l =
                null !==
                  (o =
                    null === (r = e.props) || void 0 === r
                      ? void 0
                      : r.eventKey) && void 0 !== o
                  ? o
                  : i,
              a = null === l || void 0 === l;
            a && (l = 'tmp_key-'.concat([].concat((0, f.Z)(t), [n]).join('-')));
            var u = { key: l, eventKey: l };
            return c.cloneElement(e, u);
          }
          return e;
        });
      }
      function $(e) {
        var t = c.useRef(e);
        t.current = e;
        var n = c.useCallback(function () {
          for (var e, n = arguments.length, o = new Array(n), r = 0; r < n; r++)
            o[r] = arguments[r];
          return null === (e = t.current) || void 0 === e
            ? void 0
            : e.call.apply(e, [t].concat(o));
        }, []);
        return e ? n : void 0;
      }
      var X = function (e, t) {
          var n = e.className,
            r = e.children,
            i = (0, p.Z)(e, ['className', 'children']),
            l = c.useContext(w),
            a = l.prefixCls,
            u = l.mode;
          return c.createElement(
            'ul',
            (0, o.Z)(
              {
                className: m()(
                  a,
                  ''.concat(a, '-sub'),
                  ''
                    .concat(a, '-')
                    .concat('inline' === u ? 'inline' : 'vertical'),
                  n,
                ),
              },
              i,
              { 'data-menu-list': !0, ref: t },
            ),
            r,
          );
        },
        Y = c.forwardRef(X);
      Y.displayName = 'SubMenuList';
      var q = Y,
        G = n(52052),
        U = n(75164),
        J = { adjustX: 1, adjustY: 1 },
        Q = {
          topLeft: { points: ['bl', 'tl'], overflow: J, offset: [0, -7] },
          bottomLeft: { points: ['tl', 'bl'], overflow: J, offset: [0, 7] },
          leftTop: { points: ['tr', 'tl'], overflow: J, offset: [-4, 0] },
          rightTop: { points: ['tl', 'tr'], overflow: J, offset: [4, 0] },
        },
        ee = {
          topLeft: { points: ['bl', 'tl'], overflow: J, offset: [0, -7] },
          bottomLeft: { points: ['tl', 'bl'], overflow: J, offset: [0, 7] },
          rightTop: { points: ['tr', 'tl'], overflow: J, offset: [-4, 0] },
          leftTop: { points: ['tl', 'tr'], overflow: J, offset: [4, 0] },
        };
      function te(e, t, n) {
        return t || (n ? n[e] || n.other : void 0);
      }
      var ne = {
        horizontal: 'bottomLeft',
        vertical: 'rightTop',
        'vertical-left': 'rightTop',
        'vertical-right': 'leftTop',
      };
      function oe(e) {
        var t = e.prefixCls,
          n = e.visible,
          o = e.children,
          r = e.popup,
          i = e.popupClassName,
          l = e.popupOffset,
          a = e.disabled,
          f = e.mode,
          p = e.onVisibleChange,
          v = c.useContext(w),
          y = v.getPopupContainer,
          h = v.rtl,
          g = v.subMenuOpenDelay,
          b = v.subMenuCloseDelay,
          C = v.builtinPlacements,
          Z = v.triggerSubMenuAction,
          E = v.forceSubMenuRender,
          x = v.motion,
          N = v.defaultMotions,
          O = c.useState(!1),
          P = (0, d.Z)(O, 2),
          S = P[0],
          k = P[1],
          I = h ? (0, s.Z)((0, s.Z)({}, ee), C) : (0, s.Z)((0, s.Z)({}, Q), C),
          M = ne[f],
          K = te(f, x, N),
          T = (0, s.Z)(
            (0, s.Z)({}, K),
            {},
            {
              leavedClassName: ''.concat(t, '-hidden'),
              removeOnLeave: !1,
              motionAppear: !0,
            },
          ),
          R = c.useRef();
        return (
          c.useEffect(
            function () {
              return (
                (R.current = (0, U.Z)(function () {
                  k(n);
                })),
                function () {
                  U.Z.cancel(R.current);
                }
              );
            },
            [n],
          ),
          c.createElement(
            G.Z,
            {
              prefixCls: t,
              popupClassName: m()(
                ''.concat(t, '-popup'),
                (0, u.Z)({}, ''.concat(t, '-rtl'), h),
                i,
              ),
              stretch: 'horizontal' === f ? 'minWidth' : null,
              getPopupContainer: y,
              builtinPlacements: I,
              popupPlacement: M,
              popupVisible: S,
              popup: r,
              popupAlign: l && { offset: l },
              action: a ? [] : [Z],
              mouseEnterDelay: g,
              mouseLeaveDelay: b,
              onPopupVisibleChange: p,
              forceRender: E,
              popupMotion: T,
            },
            o,
          )
        );
      }
      var re = n(60444);
      function ie(e) {
        var t = e.id,
          n = e.open,
          r = e.keyPath,
          i = e.children,
          l = 'inline',
          a = c.useContext(w),
          u = a.prefixCls,
          f = a.forceSubMenuRender,
          p = a.motion,
          v = a.defaultMotions,
          m = a.mode,
          y = c.useRef(!1);
        y.current = m === l;
        var h = c.useState(!y.current),
          g = (0, d.Z)(h, 2),
          b = g[0],
          C = g[1],
          Z = !!y.current && n;
        c.useEffect(
          function () {
            y.current && C(!1);
          },
          [m],
        );
        var E = (0, s.Z)({}, te(l, p, v));
        r.length > 1 && (E.motionAppear = !1);
        var x = E.onVisibleChanged;
        return (
          (E.onVisibleChanged = function (e) {
            return (
              y.current || e || C(!0),
              null === x || void 0 === x ? void 0 : x(e)
            );
          }),
          b
            ? null
            : c.createElement(
                O,
                { mode: l, locked: !y.current },
                c.createElement(
                  re.Z,
                  (0, o.Z)({ visible: Z }, E, {
                    forceRender: f,
                    removeOnLeave: !1,
                    leavedClassName: ''.concat(u, '-hidden'),
                  }),
                  function (e) {
                    var n = e.className,
                      o = e.style;
                    return c.createElement(
                      q,
                      { id: t, className: n, style: o },
                      i,
                    );
                  },
                ),
              )
        );
      }
      var le = function (e) {
        var t,
          n = e.style,
          r = e.className,
          i = e.title,
          l = e.eventKey,
          a = (e.warnKey, e.disabled),
          f = e.internalPopupClose,
          v = e.children,
          y = e.itemIcon,
          h = e.expandIcon,
          g = e.popupClassName,
          b = e.popupOffset,
          Z = e.onClick,
          E = e.onMouseEnter,
          x = e.onMouseLeave,
          N = e.onTitleClick,
          M = e.onTitleMouseEnter,
          K = e.onTitleMouseLeave,
          T = (0, p.Z)(e, [
            'style',
            'className',
            'title',
            'eventKey',
            'warnKey',
            'disabled',
            'internalPopupClose',
            'children',
            'itemIcon',
            'expandIcon',
            'popupClassName',
            'popupOffset',
            'onClick',
            'onMouseEnter',
            'onMouseLeave',
            'onTitleClick',
            'onTitleMouseEnter',
            'onTitleMouseLeave',
          ]),
          R = z(l),
          L = c.useContext(w),
          D = L.prefixCls,
          V = L.mode,
          _ = L.openKeys,
          B = L.disabled,
          H = L.overflowDisabled,
          F = L.activeKey,
          W = L.selectedKeys,
          X = L.itemIcon,
          Y = L.expandIcon,
          G = L.onItemClick,
          U = L.onOpenChange,
          J = L.onActive,
          Q = c.useContext(j),
          ee = Q.isSubPathKey,
          te = A(),
          ne = ''.concat(D, '-submenu'),
          re = B || a,
          le = c.useRef(),
          ae = c.useRef();
        var ce = y || X,
          ue = h || Y,
          se = _.includes(l),
          fe = !H && se,
          de = ee(W, l),
          pe = P(l, re, M, K),
          ve = pe.active,
          me = (0, p.Z)(pe, ['active']),
          ye = c.useState(!1),
          he = (0, d.Z)(ye, 2),
          ge = he[0],
          be = he[1],
          Ce = function (e) {
            re || be(e);
          },
          Ze = function (e) {
            Ce(!0), null === E || void 0 === E || E({ key: l, domEvent: e });
          },
          Ee = function (e) {
            Ce(!1), null === x || void 0 === x || x({ key: l, domEvent: e });
          },
          xe = c.useMemo(
            function () {
              return ve || ('inline' !== V && (ge || ee([F], l)));
            },
            [V, ve, F, ge, l, ee],
          ),
          we = I(te.length),
          Ne = function (e) {
            re ||
              (null === N || void 0 === N || N({ key: l, domEvent: e }),
              'inline' === V && U(l, !se));
          },
          Oe = $(function (e) {
            null === Z || void 0 === Z || Z(S(e)), G(e);
          }),
          Pe = function (e) {
            'inline' !== V && U(l, e);
          },
          Se = function () {
            J(l);
          },
          ke = R && ''.concat(R, '-popup'),
          Ie = c.createElement(
            'div',
            (0, o.Z)(
              {
                role: 'menuitem',
                style: we,
                className: ''.concat(ne, '-title'),
                tabIndex: re ? null : -1,
                ref: le,
                title: 'string' === typeof i ? i : null,
                'data-menu-id': H && R ? null : R,
                'aria-expanded': fe,
                'aria-haspopup': !0,
                'aria-controls': ke,
                'aria-disabled': re,
                onClick: Ne,
                onFocus: Se,
              },
              me,
            ),
            i,
            c.createElement(
              k,
              {
                icon: 'horizontal' !== V ? ue : null,
                props: (0, s.Z)(
                  (0, s.Z)({}, e),
                  {},
                  { isOpen: fe, isSubMenu: !0 },
                ),
              },
              c.createElement('i', { className: ''.concat(ne, '-arrow') }),
            ),
          ),
          Me = c.useRef(V);
        if (
          ('inline' !== V && (Me.current = te.length > 1 ? 'vertical' : V), !H)
        ) {
          var Ke = Me.current;
          Ie = c.createElement(
            oe,
            {
              mode: Ke,
              prefixCls: ne,
              visible: !f && fe && 'inline' !== V,
              popupClassName: g,
              popupOffset: b,
              popup: c.createElement(
                O,
                { mode: 'horizontal' === Ke ? 'vertical' : Ke },
                c.createElement(q, { id: ke, ref: ae }, v),
              ),
              disabled: re,
              onVisibleChange: Pe,
            },
            Ie,
          );
        }
        return c.createElement(
          O,
          {
            onItemClick: Oe,
            mode: 'horizontal' === V ? 'vertical' : V,
            itemIcon: ce,
            expandIcon: ue,
          },
          c.createElement(
            C.Z.Item,
            (0, o.Z)({ role: 'none' }, T, {
              component: 'li',
              style: n,
              className: m()(
                ne,
                ''.concat(ne, '-').concat(V),
                r,
                ((t = {}),
                (0, u.Z)(t, ''.concat(ne, '-open'), fe),
                (0, u.Z)(t, ''.concat(ne, '-active'), xe),
                (0, u.Z)(t, ''.concat(ne, '-selected'), de),
                (0, u.Z)(t, ''.concat(ne, '-disabled'), re),
                t),
              ),
              onMouseEnter: Ze,
              onMouseLeave: Ee,
            }),
            Ie,
            !H && c.createElement(ie, { id: ke, open: fe, keyPath: te }, v),
          ),
        );
      };
      function ae(e) {
        var t,
          n = e.eventKey,
          o = e.children,
          r = A(n),
          i = W(o, r),
          l = T();
        return (
          c.useEffect(
            function () {
              if (l)
                return (
                  l.registerPath(n, r),
                  function () {
                    l.unregisterPath(n, r);
                  }
                );
            },
            [r],
          ),
          (t = l ? i : c.createElement(le, e, i)),
          c.createElement(R.Provider, { value: r }, t)
        );
      }
      var ce = n(5110);
      function ue(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if ((0, ce.Z)(e)) {
          var n = e.nodeName.toLowerCase(),
            o =
              ['input', 'select', 'textarea', 'button'].includes(n) ||
              e.isContentEditable ||
              ('a' === n && !!e.getAttribute('href')),
            r = e.getAttribute('tabindex'),
            i = Number(r),
            l = null;
          return (
            r && !Number.isNaN(i) ? (l = i) : o && null === l && (l = 0),
            o && e.disabled && (l = null),
            null !== l && (l >= 0 || (t && l < 0))
          );
        }
        return !1;
      }
      function se(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = (0, f.Z)(e.querySelectorAll('*')).filter(function (e) {
            return ue(e, t);
          });
        return ue(e, t) && n.unshift(e), n;
      }
      var fe = Z.Z.LEFT,
        de = Z.Z.RIGHT,
        pe = Z.Z.UP,
        ve = Z.Z.DOWN,
        me = Z.Z.ENTER,
        ye = Z.Z.ESC,
        he = [pe, ve, fe, de];
      function ge(e, t, n, o) {
        var r,
          i,
          l,
          a,
          c = 'prev',
          s = 'next',
          f = 'children',
          d = 'parent';
        if ('inline' === e && o === me) return { inlineTrigger: !0 };
        var p = ((r = {}), (0, u.Z)(r, pe, c), (0, u.Z)(r, ve, s), r),
          v =
            ((i = {}),
            (0, u.Z)(i, fe, n ? s : c),
            (0, u.Z)(i, de, n ? c : s),
            (0, u.Z)(i, ve, f),
            (0, u.Z)(i, me, f),
            i),
          m =
            ((l = {}),
            (0, u.Z)(l, pe, c),
            (0, u.Z)(l, ve, s),
            (0, u.Z)(l, me, f),
            (0, u.Z)(l, ye, d),
            (0, u.Z)(l, fe, n ? f : d),
            (0, u.Z)(l, de, n ? d : f),
            l),
          y = {
            inline: p,
            horizontal: v,
            vertical: m,
            inlineSub: p,
            horizontalSub: m,
            verticalSub: m,
          },
          h =
            null === (a = y[''.concat(e).concat(t ? '' : 'Sub')]) ||
            void 0 === a
              ? void 0
              : a[o];
        switch (h) {
          case c:
            return { offset: -1, sibling: !0 };
          case s:
            return { offset: 1, sibling: !0 };
          case d:
            return { offset: -1, sibling: !1 };
          case f:
            return { offset: 1, sibling: !1 };
          default:
            return null;
        }
      }
      function be(e) {
        var t = e;
        while (t) {
          if (t.getAttribute('data-menu-list')) return t;
          t = t.parentElement;
        }
        return null;
      }
      function Ce(e, t) {
        var n = e || document.activeElement;
        while (n) {
          if (t.has(n)) return n;
          n = n.parentElement;
        }
        return null;
      }
      function Ze(e, t) {
        var n = se(e, !0);
        return n.filter(function (e) {
          return t.has(e);
        });
      }
      function Ee(e, t, n) {
        var o =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
        if (!e) return null;
        var r = Ze(e, t),
          i = r.length,
          l = r.findIndex(function (e) {
            return n === e;
          });
        return (
          o < 0 ? (-1 === l ? (l = i - 1) : (l -= 1)) : o > 0 && (l += 1),
          (l = (l + i) % i),
          r[l]
        );
      }
      function xe(e, t, n, o, r, i, l, a, u, s) {
        var f = c.useRef(),
          d = c.useRef();
        d.current = t;
        var p = function () {
          U.Z.cancel(f.current);
        };
        return (
          c.useEffect(function () {
            return function () {
              p();
            };
          }, []),
          function (c) {
            var v = c.which;
            if ([].concat(he, [me, ye]).includes(v)) {
              var m,
                y,
                h,
                g = function () {
                  (m = new Set()), (y = new Map()), (h = new Map());
                  var e = i();
                  return (
                    e.forEach(function (e) {
                      var t = document.querySelector(
                        "[data-menu-id='".concat(D(o, e), "']"),
                      );
                      t && (m.add(t), h.set(t, e), y.set(e, t));
                    }),
                    m
                  );
                };
              g();
              var b = y.get(t),
                C = Ce(b, m),
                Z = h.get(C),
                E = ge(e, 1 === l(Z, !0).length, n, v);
              if (!E) return;
              he.includes(v) && c.preventDefault();
              var x = function (e) {
                if (e) {
                  var t = e,
                    n = e.querySelector('a');
                  (null === n || void 0 === n
                    ? void 0
                    : n.getAttribute('href')) && (t = n);
                  var o = h.get(e);
                  a(o),
                    p(),
                    (f.current = (0, U.Z)(function () {
                      d.current === o && t.focus();
                    }));
                }
              };
              if (E.sibling || !C) {
                var w;
                w = C && 'inline' !== e ? be(C) : r.current;
                var N = Ee(w, m, C, E.offset);
                x(N);
              } else if (E.inlineTrigger) u(Z);
              else if (E.offset > 0)
                u(Z, !0),
                  p(),
                  (f.current = (0, U.Z)(function () {
                    g();
                    var e = C.getAttribute('aria-controls'),
                      t = document.getElementById(e),
                      n = Ee(t, m);
                    x(n);
                  }, 5));
              else if (E.offset < 0) {
                var O = l(Z, !0),
                  P = O[O.length - 2],
                  S = y.get(P);
                u(P, !1), x(S);
              }
            }
            null === s || void 0 === s || s(c);
          }
        );
      }
      var we = Math.random().toFixed(5).toString().slice(2),
        Ne = 0;
      function Oe(e) {
        var t = (0, g.Z)(e, { value: e }),
          n = (0, d.Z)(t, 2),
          o = n[0],
          r = n[1];
        return (
          c.useEffect(function () {
            Ne += 1;
            var e = ''.concat(we, '-').concat(Ne);
            r('rc-menu-uuid-'.concat(e));
          }, []),
          o
        );
      }
      function Pe(e) {
        Promise.resolve().then(e);
      }
      var Se = '__RC_UTIL_PATH_SPLIT__',
        ke = function (e) {
          return e.join(Se);
        },
        Ie = function (e) {
          return e.split(Se);
        },
        Me = 'rc-menu-more';
      function Ke() {
        var e = c.useState({}),
          t = (0, d.Z)(e, 2),
          n = t[1],
          o = (0, c.useRef)(new Map()),
          r = (0, c.useRef)(new Map()),
          i = c.useState([]),
          l = (0, d.Z)(i, 2),
          a = l[0],
          u = l[1],
          s = (0, c.useRef)(0),
          p = (0, c.useRef)(!1),
          v = function () {
            p.current || n({});
          },
          m = (0, c.useCallback)(function (e, t) {
            var n = ke(t);
            r.current.set(n, e), o.current.set(e, n), (s.current += 1);
            var i = s.current;
            Pe(function () {
              i === s.current && v();
            });
          }, []),
          y = (0, c.useCallback)(function (e, t) {
            var n = ke(t);
            r.current.delete(n), o.current.delete(e);
          }, []),
          h = (0, c.useCallback)(function (e) {
            u(e);
          }, []),
          g = (0, c.useCallback)(
            function (e, t) {
              var n = o.current.get(e) || '',
                r = Ie(n);
              return t && a.includes(r[0]) && r.unshift(Me), r;
            },
            [a],
          ),
          b = (0, c.useCallback)(
            function (e, t) {
              return e.some(function (e) {
                var n = g(e, !0);
                return n.includes(t);
              });
            },
            [g],
          ),
          C = function () {
            var e = (0, f.Z)(o.current.keys());
            return a.length && e.push(Me), e;
          },
          Z = (0, c.useCallback)(function (e) {
            var t = ''.concat(o.current.get(e)).concat(Se),
              n = new Set();
            return (
              (0, f.Z)(r.current.keys()).forEach(function (e) {
                e.startsWith(t) && n.add(r.current.get(e));
              }),
              n
            );
          }, []);
        return (
          c.useEffect(function () {
            return function () {
              p.current = !0;
            };
          }, []),
          {
            registerPath: m,
            unregisterPath: y,
            refreshOverflowKeys: h,
            isSubPathKey: b,
            getKeyPath: g,
            getKeys: C,
            getSubPathKeys: Z,
          }
        );
      }
      var Te = [],
        Re = function (e) {
          var t,
            n,
            r = e.prefixCls,
            i = void 0 === r ? 'rc-menu' : r,
            l = e.style,
            a = e.className,
            v = e.tabIndex,
            y = void 0 === v ? 0 : v,
            b = e.children,
            Z = e.direction,
            E = e.id,
            x = e.mode,
            w = void 0 === x ? 'vertical' : x,
            N = e.inlineCollapsed,
            P = e.disabled,
            k = e.disabledOverflow,
            I = e.subMenuOpenDelay,
            M = void 0 === I ? 0.1 : I,
            T = e.subMenuCloseDelay,
            R = void 0 === T ? 0.1 : T,
            A = e.forceSubMenuRender,
            D = e.defaultOpenKeys,
            z = e.openKeys,
            V = e.activeKey,
            _ = e.defaultActiveFirst,
            B = e.selectable,
            F = void 0 === B || B,
            X = e.multiple,
            Y = void 0 !== X && X,
            q = e.defaultSelectedKeys,
            G = e.selectedKeys,
            U = e.onSelect,
            J = e.onDeselect,
            Q = e.inlineIndent,
            ee = void 0 === Q ? 24 : Q,
            te = e.motion,
            ne = e.defaultMotions,
            oe = e.triggerSubMenuAction,
            re = void 0 === oe ? 'hover' : oe,
            ie = e.builtinPlacements,
            le = e.itemIcon,
            ce = e.expandIcon,
            ue = e.overflowedIndicator,
            se = void 0 === ue ? '...' : ue,
            fe = e.overflowedIndicatorPopupClassName,
            de = e.getPopupContainer,
            pe = e.onClick,
            ve = e.onOpenChange,
            me = e.onKeyDown,
            ye =
              (e.openAnimation,
              e.openTransitionName,
              (0, p.Z)(e, [
                'prefixCls',
                'style',
                'className',
                'tabIndex',
                'children',
                'direction',
                'id',
                'mode',
                'inlineCollapsed',
                'disabled',
                'disabledOverflow',
                'subMenuOpenDelay',
                'subMenuCloseDelay',
                'forceSubMenuRender',
                'defaultOpenKeys',
                'openKeys',
                'activeKey',
                'defaultActiveFirst',
                'selectable',
                'multiple',
                'defaultSelectedKeys',
                'selectedKeys',
                'onSelect',
                'onDeselect',
                'inlineIndent',
                'motion',
                'defaultMotions',
                'triggerSubMenuAction',
                'builtinPlacements',
                'itemIcon',
                'expandIcon',
                'overflowedIndicator',
                'overflowedIndicatorPopupClassName',
                'getPopupContainer',
                'onClick',
                'onOpenChange',
                'onKeyDown',
                'openAnimation',
                'openTransitionName',
              ])),
            he = W(b, Te),
            ge = c.useState(!1),
            be = (0, d.Z)(ge, 2),
            Ce = be[0],
            Ze = be[1],
            Ee = c.useRef(),
            we = Oe(E),
            Ne = 'rtl' === Z;
          var Pe = c.useMemo(
              function () {
                return ('inline' !== w && 'vertical' !== w) || !N
                  ? [w, !1]
                  : ['vertical', N];
              },
              [w, N],
            ),
            Se = (0, d.Z)(Pe, 2),
            ke = Se[0],
            Ie = Se[1],
            Re = c.useState(0),
            Ae = (0, d.Z)(Re, 2),
            je = Ae[0],
            Le = Ae[1],
            De = je >= he.length - 1 || 'horizontal' !== ke || k,
            ze = (0, g.Z)(D, {
              value: z,
              postState: function (e) {
                return e || Te;
              },
            }),
            Ve = (0, d.Z)(ze, 2),
            _e = Ve[0],
            Be = Ve[1],
            He = function (e) {
              Be(e), null === ve || void 0 === ve || ve(e);
            },
            Fe = c.useState(_e),
            We = (0, d.Z)(Fe, 2),
            $e = We[0],
            Xe = We[1],
            Ye = 'inline' === ke,
            qe = c.useRef(!1);
          c.useEffect(
            function () {
              Ye && Xe(_e);
            },
            [_e],
          ),
            c.useEffect(
              function () {
                qe.current ? (Ye ? Be($e) : He(Te)) : (qe.current = !0);
              },
              [Ye],
            );
          var Ge = Ke(),
            Ue = Ge.registerPath,
            Je = Ge.unregisterPath,
            Qe = Ge.refreshOverflowKeys,
            et = Ge.isSubPathKey,
            tt = Ge.getKeyPath,
            nt = Ge.getKeys,
            ot = Ge.getSubPathKeys,
            rt = c.useMemo(
              function () {
                return { registerPath: Ue, unregisterPath: Je };
              },
              [Ue, Je],
            ),
            it = c.useMemo(
              function () {
                return { isSubPathKey: et };
              },
              [et],
            );
          c.useEffect(
            function () {
              Qe(
                De
                  ? Te
                  : he.slice(je + 1).map(function (e) {
                      return e.key;
                    }),
              );
            },
            [je, De],
          );
          var lt = (0, g.Z)(
              V ||
                (_ && (null === (t = he[0]) || void 0 === t ? void 0 : t.key)),
              { value: V },
            ),
            at = (0, d.Z)(lt, 2),
            ct = at[0],
            ut = at[1],
            st = $(function (e) {
              ut(e);
            }),
            ft = $(function () {
              ut(void 0);
            }),
            dt = (0, g.Z)(q || [], {
              value: G,
              postState: function (e) {
                return Array.isArray(e)
                  ? e
                  : null === e || void 0 === e
                  ? Te
                  : [e];
              },
            }),
            pt = (0, d.Z)(dt, 2),
            vt = pt[0],
            mt = pt[1],
            yt = function (e) {
              if (F) {
                var t,
                  n = e.key,
                  o = vt.includes(n);
                (t = Y
                  ? o
                    ? vt.filter(function (e) {
                        return e !== n;
                      })
                    : [].concat((0, f.Z)(vt), [n])
                  : [n]),
                  mt(t);
                var r = (0, s.Z)((0, s.Z)({}, e), {}, { selectedKeys: t });
                o
                  ? null === J || void 0 === J || J(r)
                  : null === U || void 0 === U || U(r);
              }
              !Y && _e.length && 'inline' !== ke && He(Te);
            },
            ht = $(function (e) {
              null === pe || void 0 === pe || pe(S(e)), yt(e);
            }),
            gt = $(function (e, t) {
              var n = _e.filter(function (t) {
                return t !== e;
              });
              if (t) n.push(e);
              else if ('inline' !== ke) {
                var o = ot(e);
                n = n.filter(function (e) {
                  return !o.has(e);
                });
              }
              h()(_e, n) || He(n);
            }),
            bt = $(de),
            Ct = function (e, t) {
              var n = null !== t && void 0 !== t ? t : !_e.includes(e);
              gt(e, n);
            },
            Zt = xe(ke, ct, Ne, we, Ee, nt, tt, ut, Ct, me);
          c.useEffect(function () {
            Ze(!0);
          }, []);
          var Et =
              'horizontal' !== ke || k
                ? he
                : he.map(function (e, t) {
                    return c.createElement(
                      O,
                      { key: e.key, overflowDisabled: t > je },
                      e,
                    );
                  }),
            xt = c.createElement(
              C.Z,
              (0, o.Z)(
                {
                  id: E,
                  ref: Ee,
                  prefixCls: ''.concat(i, '-overflow'),
                  component: 'ul',
                  itemComponent: H,
                  className: m()(
                    i,
                    ''.concat(i, '-root'),
                    ''.concat(i, '-').concat(ke),
                    a,
                    ((n = {}),
                    (0, u.Z)(n, ''.concat(i, '-inline-collapsed'), Ie),
                    (0, u.Z)(n, ''.concat(i, '-rtl'), Ne),
                    n),
                  ),
                  dir: Z,
                  style: l,
                  role: 'menu',
                  tabIndex: y,
                  data: Et,
                  renderRawItem: function (e) {
                    return e;
                  },
                  renderRawRest: function (e) {
                    var t = e.length,
                      n = t ? he.slice(-t) : null;
                    return c.createElement(
                      ae,
                      {
                        eventKey: Me,
                        title: se,
                        disabled: De,
                        internalPopupClose: 0 === t,
                        popupClassName: fe,
                      },
                      n,
                    );
                  },
                  maxCount:
                    'horizontal' !== ke || k ? C.Z.INVALIDATE : C.Z.RESPONSIVE,
                  ssr: 'full',
                  'data-menu-list': !0,
                  onVisibleChange: function (e) {
                    Le(e);
                  },
                  onKeyDown: Zt,
                },
                ye,
              ),
            );
          return c.createElement(
            L.Provider,
            { value: we },
            c.createElement(
              O,
              {
                prefixCls: i,
                mode: ke,
                openKeys: _e,
                rtl: Ne,
                disabled: P,
                motion: Ce ? te : null,
                defaultMotions: Ce ? ne : null,
                activeKey: ct,
                onActive: st,
                onInactive: ft,
                selectedKeys: vt,
                inlineIndent: ee,
                subMenuOpenDelay: M,
                subMenuCloseDelay: R,
                forceSubMenuRender: A,
                builtinPlacements: ie,
                triggerSubMenuAction: re,
                getPopupContainer: bt,
                itemIcon: le,
                expandIcon: ce,
                onItemClick: ht,
                onOpenChange: gt,
              },
              c.createElement(j.Provider, { value: it }, xt),
              c.createElement(
                'div',
                { style: { display: 'none' }, 'aria-hidden': !0 },
                c.createElement(K.Provider, { value: rt }, he),
              ),
            ),
          );
        },
        Ae = Re,
        je = function (e) {
          var t = e.className,
            n = e.title,
            r = (e.eventKey, e.children),
            i = (0, p.Z)(e, ['className', 'title', 'eventKey', 'children']),
            l = c.useContext(w),
            a = l.prefixCls,
            u = ''.concat(a, '-item-group');
          return c.createElement(
            'li',
            (0, o.Z)({}, i, {
              onClick: function (e) {
                return e.stopPropagation();
              },
              className: m()(u, t),
            }),
            c.createElement(
              'div',
              {
                className: ''.concat(u, '-title'),
                title: 'string' === typeof n ? n : void 0,
              },
              n,
            ),
            c.createElement('ul', { className: ''.concat(u, '-list') }, r),
          );
        };
      function Le(e) {
        var t = e.children,
          n = (0, p.Z)(e, ['children']),
          o = A(n.eventKey),
          r = W(t, o),
          i = T();
        return i ? r : c.createElement(je, (0, E.Z)(n, ['warnKey']), r);
      }
      function De(e) {
        var t = e.className,
          n = e.style,
          o = c.useContext(w),
          r = o.prefixCls,
          i = T();
        return i
          ? null
          : c.createElement('li', {
              className: m()(''.concat(r, '-item-divider'), t),
              style: n,
            });
      }
      var ze = A,
        Ve = Ae;
      (Ve.Item = H), (Ve.SubMenu = ae), (Ve.ItemGroup = Le), (Ve.Divider = De);
      var _e = Ve,
        Be = n(85452),
        He = (0, c.createContext)({
          prefixCls: '',
          firstLevel: !0,
          inlineCollapsed: !1,
        }),
        Fe = He,
        We = n(96159);
      function $e(e) {
        var t,
          n,
          r = e.popupClassName,
          i = e.icon,
          l = e.title,
          a = c.useContext(Fe),
          u = a.prefixCls,
          s = a.inlineCollapsed,
          f = a.antdMenuTheme,
          d = ze();
        if (i) {
          var p = (0, We.l$)(l) && 'span' === l.type;
          n = c.createElement(
            c.Fragment,
            null,
            (0, We.Tm)(i, {
              className: m()(
                (0, We.l$)(i)
                  ? null === (t = i.props) || void 0 === t
                    ? void 0
                    : t.className
                  : '',
                ''.concat(u, '-item-icon'),
              ),
            }),
            p
              ? l
              : c.createElement(
                  'span',
                  { className: ''.concat(u, '-title-content') },
                  l,
                ),
          );
        } else
          n =
            s && !d.length && l && 'string' === typeof l
              ? c.createElement(
                  'div',
                  { className: ''.concat(u, '-inline-collapsed-noicon') },
                  l.charAt(0),
                )
              : c.createElement(
                  'span',
                  { className: ''.concat(u, '-title-content') },
                  l,
                );
        return c.createElement(
          Fe.Provider,
          { value: (0, o.Z)((0, o.Z)({}, a), { firstLevel: !1 }) },
          c.createElement(
            ae,
            (0, o.Z)({}, (0, E.Z)(e, ['icon']), {
              title: n,
              popupClassName: m()(u, ''.concat(u, '-').concat(f), r),
            }),
          ),
        );
      }
      var Xe = $e,
        Ye = n(90484),
        qe = { adjustX: 1, adjustY: 1 },
        Ge = [0, 0],
        Ue = {
          left: {
            points: ['cr', 'cl'],
            overflow: qe,
            offset: [-4, 0],
            targetOffset: Ge,
          },
          right: {
            points: ['cl', 'cr'],
            overflow: qe,
            offset: [4, 0],
            targetOffset: Ge,
          },
          top: {
            points: ['bc', 'tc'],
            overflow: qe,
            offset: [0, -4],
            targetOffset: Ge,
          },
          bottom: {
            points: ['tc', 'bc'],
            overflow: qe,
            offset: [0, 4],
            targetOffset: Ge,
          },
          topLeft: {
            points: ['bl', 'tl'],
            overflow: qe,
            offset: [0, -4],
            targetOffset: Ge,
          },
          leftTop: {
            points: ['tr', 'tl'],
            overflow: qe,
            offset: [-4, 0],
            targetOffset: Ge,
          },
          topRight: {
            points: ['br', 'tr'],
            overflow: qe,
            offset: [0, -4],
            targetOffset: Ge,
          },
          rightTop: {
            points: ['tl', 'tr'],
            overflow: qe,
            offset: [4, 0],
            targetOffset: Ge,
          },
          bottomRight: {
            points: ['tr', 'br'],
            overflow: qe,
            offset: [0, 4],
            targetOffset: Ge,
          },
          rightBottom: {
            points: ['bl', 'br'],
            overflow: qe,
            offset: [4, 0],
            targetOffset: Ge,
          },
          bottomLeft: {
            points: ['tl', 'bl'],
            overflow: qe,
            offset: [0, 4],
            targetOffset: Ge,
          },
          leftBottom: {
            points: ['br', 'bl'],
            overflow: qe,
            offset: [-4, 0],
            targetOffset: Ge,
          },
        },
        Je = function (e) {
          var t = e.overlay,
            n = e.prefixCls,
            o = e.id,
            r = e.overlayInnerStyle;
          return c.createElement(
            'div',
            {
              className: ''.concat(n, '-inner'),
              id: o,
              role: 'tooltip',
              style: r,
            },
            'function' === typeof t ? t() : t,
          );
        },
        Qe = Je,
        et = function (e, t) {
          var n = e.overlayClassName,
            r = e.trigger,
            i = void 0 === r ? ['hover'] : r,
            l = e.mouseEnterDelay,
            a = void 0 === l ? 0 : l,
            u = e.mouseLeaveDelay,
            f = void 0 === u ? 0.1 : u,
            d = e.overlayStyle,
            v = e.prefixCls,
            m = void 0 === v ? 'rc-tooltip' : v,
            y = e.children,
            h = e.onVisibleChange,
            g = e.afterVisibleChange,
            b = e.transitionName,
            C = e.animation,
            Z = e.motion,
            E = e.placement,
            x = void 0 === E ? 'right' : E,
            w = e.align,
            N = void 0 === w ? {} : w,
            O = e.destroyTooltipOnHide,
            P = void 0 !== O && O,
            S = e.defaultVisible,
            k = e.getTooltipContainer,
            I = e.overlayInnerStyle,
            M = (0, p.Z)(e, [
              'overlayClassName',
              'trigger',
              'mouseEnterDelay',
              'mouseLeaveDelay',
              'overlayStyle',
              'prefixCls',
              'children',
              'onVisibleChange',
              'afterVisibleChange',
              'transitionName',
              'animation',
              'motion',
              'placement',
              'align',
              'destroyTooltipOnHide',
              'defaultVisible',
              'getTooltipContainer',
              'overlayInnerStyle',
            ]),
            K = (0, c.useRef)(null);
          (0, c.useImperativeHandle)(t, function () {
            return K.current;
          });
          var T = (0, s.Z)({}, M);
          'visible' in e && (T.popupVisible = e.visible);
          var R = function () {
              var t = e.arrowContent,
                n = void 0 === t ? null : t,
                o = e.overlay,
                r = e.id;
              return [
                c.createElement(
                  'div',
                  { className: ''.concat(m, '-arrow'), key: 'arrow' },
                  n,
                ),
                c.createElement(Qe, {
                  key: 'content',
                  prefixCls: m,
                  id: r,
                  overlay: o,
                  overlayInnerStyle: I,
                }),
              ];
            },
            A = !1,
            j = !1;
          if ('boolean' === typeof P) A = P;
          else if (P && 'object' === (0, Ye.Z)(P)) {
            var L = P.keepParent;
            (A = !0 === L), (j = !1 === L);
          }
          return c.createElement(
            G.Z,
            (0, o.Z)(
              {
                popupClassName: n,
                prefixCls: m,
                popup: R,
                action: i,
                builtinPlacements: Ue,
                popupPlacement: x,
                ref: K,
                popupAlign: N,
                getPopupContainer: k,
                onPopupVisibleChange: h,
                afterPopupVisibleChange: g,
                popupTransitionName: b,
                popupAnimation: C,
                popupMotion: Z,
                defaultPopupVisible: S,
                destroyPopupOnHide: A,
                autoDestroy: j,
                mouseLeaveDelay: f,
                popupStyle: d,
                mouseEnterDelay: a,
              },
              T,
            ),
            y,
          );
        },
        tt = (0, c.forwardRef)(et),
        nt = tt,
        ot = { adjustX: 1, adjustY: 1 },
        rt = { adjustX: 0, adjustY: 0 },
        it = [0, 0];
      function lt(e) {
        return 'boolean' === typeof e
          ? e
            ? ot
            : rt
          : (0, o.Z)((0, o.Z)({}, rt), e);
      }
      function at(e) {
        var t = e.arrowWidth,
          n = void 0 === t ? 4 : t,
          r = e.horizontalArrowShift,
          i = void 0 === r ? 16 : r,
          l = e.verticalArrowShift,
          a = void 0 === l ? 8 : l,
          c = e.autoAdjustOverflow,
          u = {
            left: { points: ['cr', 'cl'], offset: [-4, 0] },
            right: { points: ['cl', 'cr'], offset: [4, 0] },
            top: { points: ['bc', 'tc'], offset: [0, -4] },
            bottom: { points: ['tc', 'bc'], offset: [0, 4] },
            topLeft: { points: ['bl', 'tc'], offset: [-(i + n), -4] },
            leftTop: { points: ['tr', 'cl'], offset: [-4, -(a + n)] },
            topRight: { points: ['br', 'tc'], offset: [i + n, -4] },
            rightTop: { points: ['tl', 'cr'], offset: [4, -(a + n)] },
            bottomRight: { points: ['tr', 'bc'], offset: [i + n, 4] },
            rightBottom: { points: ['bl', 'cr'], offset: [4, a + n] },
            bottomLeft: { points: ['tl', 'bc'], offset: [-(i + n), 4] },
            leftBottom: { points: ['br', 'cl'], offset: [-4, a + n] },
          };
        return (
          Object.keys(u).forEach(function (t) {
            (u[t] = e.arrowPointAtCenter
              ? (0, o.Z)((0, o.Z)({}, u[t]), {
                  overflow: lt(c),
                  targetOffset: it,
                })
              : (0, o.Z)((0, o.Z)({}, Ue[t]), { overflow: lt(c) })),
              (u[t].ignoreShake = !0);
          }),
          u
        );
      }
      var ct = n(86032),
        ut = n(93355),
        st =
          ((0, ut.b)('success', 'processing', 'error', 'default', 'warning'),
          (0, ut.b)(
            'pink',
            'red',
            'yellow',
            'orange',
            'cyan',
            'green',
            'blue',
            'purple',
            'geekblue',
            'magenta',
            'volcano',
            'gold',
            'lime',
          )),
        ft = n(33603),
        dt = function (e, t) {
          var n = {};
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              t.indexOf(o) < 0 &&
              (n[o] = e[o]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
              t.indexOf(o[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                (n[o[r]] = e[o[r]]);
          }
          return n;
        },
        pt = function (e, t) {
          var n = {},
            r = (0, o.Z)({}, e);
          return (
            t.forEach(function (t) {
              e && t in e && ((n[t] = e[t]), delete r[t]);
            }),
            { picked: n, omitted: r }
          );
        },
        vt = new RegExp('^('.concat(st.join('|'), ')(-inverse)?$'));
      function mt(e, t) {
        var n = e.type;
        if (
          (!0 === n.__ANT_BUTTON ||
            !0 === n.__ANT_SWITCH ||
            !0 === n.__ANT_CHECKBOX ||
            'button' === e.type) &&
          e.props.disabled
        ) {
          var r = pt(e.props.style, [
              'position',
              'left',
              'right',
              'top',
              'bottom',
              'float',
              'display',
              'zIndex',
            ]),
            i = r.picked,
            l = r.omitted,
            a = (0, o.Z)((0, o.Z)({ display: 'inline-block' }, i), {
              cursor: 'not-allowed',
              width: e.props.block ? '100%' : null,
            }),
            u = (0, o.Z)((0, o.Z)({}, l), { pointerEvents: 'none' }),
            s = (0, We.Tm)(e, { style: u, className: null });
          return c.createElement(
            'span',
            {
              style: a,
              className: m()(
                e.props.className,
                ''.concat(t, '-disabled-compatible-wrapper'),
              ),
            },
            s,
          );
        }
        return e;
      }
      var yt = c.forwardRef(function (e, t) {
        var n,
          r = c.useContext(ct.E_),
          i = r.getPopupContainer,
          l = r.getPrefixCls,
          a = r.direction,
          s = (0, g.Z)(!1, {
            value: e.visible,
            defaultValue: e.defaultVisible,
          }),
          f = (0, d.Z)(s, 2),
          p = f[0],
          v = f[1],
          y = function () {
            var t = e.title,
              n = e.overlay;
            return !t && !n && 0 !== t;
          },
          h = function (t) {
            var n;
            v(!y() && t),
              y() ||
                null === (n = e.onVisibleChange) ||
                void 0 === n ||
                n.call(e, t);
          },
          b = function () {
            var t = e.builtinPlacements,
              n = e.arrowPointAtCenter,
              o = e.autoAdjustOverflow;
            return t || at({ arrowPointAtCenter: n, autoAdjustOverflow: o });
          },
          C = function (e, t) {
            var n = b(),
              o = Object.keys(n).filter(function (e) {
                return (
                  n[e].points[0] === t.points[0] &&
                  n[e].points[1] === t.points[1]
                );
              })[0];
            if (o) {
              var r = e.getBoundingClientRect(),
                i = { top: '50%', left: '50%' };
              o.indexOf('top') >= 0 || o.indexOf('Bottom') >= 0
                ? (i.top = ''.concat(r.height - t.offset[1], 'px'))
                : (o.indexOf('Top') >= 0 || o.indexOf('bottom') >= 0) &&
                  (i.top = ''.concat(-t.offset[1], 'px')),
                o.indexOf('left') >= 0 || o.indexOf('Right') >= 0
                  ? (i.left = ''.concat(r.width - t.offset[0], 'px'))
                  : (o.indexOf('right') >= 0 || o.indexOf('Left') >= 0) &&
                    (i.left = ''.concat(-t.offset[0], 'px')),
                (e.style.transformOrigin = ''
                  .concat(i.left, ' ')
                  .concat(i.top));
            }
          },
          Z = function () {
            var t = e.title,
              n = e.overlay;
            return 0 === t ? t : n || t || '';
          },
          E = e.getPopupContainer,
          x = dt(e, ['getPopupContainer']),
          w = e.prefixCls,
          N = e.openClassName,
          O = e.getTooltipContainer,
          P = e.overlayClassName,
          S = e.color,
          k = e.overlayInnerStyle,
          I = e.children,
          M = l('tooltip', w),
          K = l(),
          T = p;
        !('visible' in e) && y() && (T = !1);
        var R,
          A = mt((0, We.l$)(I) ? I : c.createElement('span', null, I), M),
          j = A.props,
          L = m()(j.className, (0, u.Z)({}, N || ''.concat(M, '-open'), !0)),
          D = m()(
            P,
            ((n = {}),
            (0, u.Z)(n, ''.concat(M, '-rtl'), 'rtl' === a),
            (0, u.Z)(n, ''.concat(M, '-').concat(S), S && vt.test(S)),
            n),
          ),
          z = k;
        return (
          S &&
            !vt.test(S) &&
            ((z = (0, o.Z)((0, o.Z)({}, k), { background: S })),
            (R = { background: S })),
          c.createElement(
            nt,
            (0, o.Z)({}, x, {
              prefixCls: M,
              overlayClassName: D,
              getTooltipContainer: E || O || i,
              ref: t,
              builtinPlacements: b(),
              overlay: Z(),
              visible: T,
              onVisibleChange: h,
              onPopupAlign: C,
              overlayInnerStyle: z,
              arrowContent: c.createElement('span', {
                className: ''.concat(M, '-arrow-content'),
                style: R,
              }),
              motion: {
                motionName: (0, ft.m)(K, 'zoom-big-fast', e.transitionName),
                motionDeadline: 1e3,
              },
            }),
            T ? (0, We.Tm)(A, { className: L }) : A,
          )
        );
      });
      (yt.displayName = 'Tooltip'),
        (yt.defaultProps = {
          placement: 'top',
          mouseEnterDelay: 0.1,
          mouseLeaveDelay: 0.1,
          arrowPointAtCenter: !1,
          autoAdjustOverflow: !0,
        });
      var ht = yt,
        gt = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z',
                },
              },
            ],
          },
          name: 'bars',
          theme: 'outlined',
        },
        bt = gt,
        Ct = n(23676),
        Zt = function (e, t) {
          return c.createElement(
            Ct.Z,
            (0, s.Z)((0, s.Z)({}, e), {}, { ref: t, icon: bt }),
          );
        };
      Zt.displayName = 'BarsOutlined';
      var Et = c.forwardRef(Zt),
        xt = n(51874),
        wt = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z',
                },
              },
            ],
          },
          name: 'left',
          theme: 'outlined',
        },
        Nt = wt,
        Ot = function (e, t) {
          return c.createElement(
            Ct.Z,
            (0, s.Z)((0, s.Z)({}, e), {}, { ref: t, icon: Nt }),
          );
        };
      Ot.displayName = 'LeftOutlined';
      var Pt = c.forwardRef(Ot),
        St = function (e, t) {
          var n = {};
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              t.indexOf(o) < 0 &&
              (n[o] = e[o]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
              t.indexOf(o[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                (n[o[r]] = e[o[r]]);
          }
          return n;
        },
        kt = c.createContext({
          siderHook: {
            addSider: function () {
              return null;
            },
            removeSider: function () {
              return null;
            },
          },
        });
      function It(e) {
        var t = e.suffixCls,
          n = e.tagName,
          r = e.displayName;
        return function (e) {
          var i = function (r) {
            var i = c.useContext(ct.E_),
              l = i.getPrefixCls,
              a = r.prefixCls,
              u = l(t, a);
            return c.createElement(
              e,
              (0, o.Z)({ prefixCls: u, tagName: n }, r),
            );
          };
          return (i.displayName = r), i;
        };
      }
      var Mt = function (e) {
          var t = e.prefixCls,
            n = e.className,
            r = e.children,
            i = e.tagName,
            l = St(e, ['prefixCls', 'className', 'children', 'tagName']),
            a = m()(t, n);
          return c.createElement(i, (0, o.Z)({ className: a }, l), r);
        },
        Kt = function (e) {
          var t,
            n = c.useContext(ct.E_),
            r = n.direction,
            i = c.useState([]),
            l = (0, d.Z)(i, 2),
            a = l[0],
            s = l[1],
            p = e.prefixCls,
            v = e.className,
            y = e.children,
            h = e.hasSider,
            g = e.tagName,
            b = St(e, [
              'prefixCls',
              'className',
              'children',
              'hasSider',
              'tagName',
            ]),
            C = m()(
              p,
              ((t = {}),
              (0, u.Z)(
                t,
                ''.concat(p, '-has-sider'),
                'boolean' === typeof h ? h : a.length > 0,
              ),
              (0, u.Z)(t, ''.concat(p, '-rtl'), 'rtl' === r),
              t),
              v,
            );
          return c.createElement(
            kt.Provider,
            {
              value: {
                siderHook: {
                  addSider: function (e) {
                    s(function (t) {
                      return [].concat((0, f.Z)(t), [e]);
                    });
                  },
                  removeSider: function (e) {
                    s(function (t) {
                      return t.filter(function (t) {
                        return t !== e;
                      });
                    });
                  },
                },
              },
            },
            c.createElement(g, (0, o.Z)({ className: C }, b), y),
          );
        },
        Tt =
          (It({
            suffixCls: 'layout',
            tagName: 'section',
            displayName: 'Layout',
          })(Kt),
          It({
            suffixCls: 'layout-header',
            tagName: 'header',
            displayName: 'Header',
          })(Mt),
          It({
            suffixCls: 'layout-footer',
            tagName: 'footer',
            displayName: 'Footer',
          })(Mt),
          It({
            suffixCls: 'layout-content',
            tagName: 'main',
            displayName: 'Content',
          })(Mt),
          function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e);
          }),
        Rt = Tt,
        At = function (e, t) {
          var n = {};
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              t.indexOf(o) < 0 &&
              (n[o] = e[o]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
              t.indexOf(o[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                (n[o[r]] = e[o[r]]);
          }
          return n;
        },
        jt = {
          xs: '479.98px',
          sm: '575.98px',
          md: '767.98px',
          lg: '991.98px',
          xl: '1199.98px',
          xxl: '1599.98px',
        },
        Lt = c.createContext({}),
        Dt = (function () {
          var e = 0;
          return function () {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : '';
            return (e += 1), ''.concat(t).concat(e);
          };
        })(),
        zt = c.forwardRef(function (e, t) {
          var n = e.prefixCls,
            r = e.className,
            i = e.trigger,
            l = e.children,
            a = e.defaultCollapsed,
            s = void 0 !== a && a,
            f = e.theme,
            p = void 0 === f ? 'dark' : f,
            v = e.style,
            y = void 0 === v ? {} : v,
            h = e.collapsible,
            g = void 0 !== h && h,
            b = e.reverseArrow,
            C = void 0 !== b && b,
            Z = e.width,
            x = void 0 === Z ? 200 : Z,
            w = e.collapsedWidth,
            N = void 0 === w ? 80 : w,
            O = e.zeroWidthTriggerStyle,
            P = e.breakpoint,
            S = e.onCollapse,
            k = e.onBreakpoint,
            I = At(e, [
              'prefixCls',
              'className',
              'trigger',
              'children',
              'defaultCollapsed',
              'theme',
              'style',
              'collapsible',
              'reverseArrow',
              'width',
              'collapsedWidth',
              'zeroWidthTriggerStyle',
              'breakpoint',
              'onCollapse',
              'onBreakpoint',
            ]),
            M = (0, c.useContext)(kt),
            K = M.siderHook,
            T = (0, c.useState)('collapsed' in I ? I.collapsed : s),
            R = (0, d.Z)(T, 2),
            A = R[0],
            j = R[1],
            L = (0, c.useState)(!1),
            D = (0, d.Z)(L, 2),
            z = D[0],
            V = D[1];
          (0, c.useEffect)(
            function () {
              'collapsed' in I && j(I.collapsed);
            },
            [I.collapsed],
          );
          var _ = function (e, t) {
              'collapsed' in I || j(e), null === S || void 0 === S || S(e, t);
            },
            B = (0, c.useRef)();
          (B.current = function (e) {
            V(e.matches),
              null === k || void 0 === k || k(e.matches),
              A !== e.matches && _(e.matches, 'responsive');
          }),
            (0, c.useEffect)(function () {
              function e(e) {
                return B.current(e);
              }
              var t;
              if ('undefined' !== typeof window) {
                var n = window,
                  o = n.matchMedia;
                if (o && P && P in jt) {
                  t = o('(max-width: '.concat(jt[P], ')'));
                  try {
                    t.addEventListener('change', e);
                  } catch (r) {
                    t.addListener(e);
                  }
                  e(t);
                }
              }
              return function () {
                try {
                  null === t ||
                    void 0 === t ||
                    t.removeEventListener('change', e);
                } catch (r) {
                  null === t || void 0 === t || t.removeListener(e);
                }
              };
            }, []),
            (0, c.useEffect)(function () {
              var e = Dt('ant-sider-');
              return (
                K.addSider(e),
                function () {
                  return K.removeSider(e);
                }
              );
            }, []);
          var H = function () {
              _(!A, 'clickTrigger');
            },
            F = (0, c.useContext)(ct.E_),
            W = F.getPrefixCls,
            $ = function () {
              var e,
                a = W('layout-sider', n),
                s = (0, E.Z)(I, ['collapsed']),
                f = A ? N : x,
                d = Rt(f) ? ''.concat(f, 'px') : String(f),
                v =
                  0 === parseFloat(String(N || 0))
                    ? c.createElement(
                        'span',
                        {
                          onClick: H,
                          className: m()(
                            ''.concat(a, '-zero-width-trigger'),
                            ''
                              .concat(a, '-zero-width-trigger-')
                              .concat(C ? 'right' : 'left'),
                          ),
                          style: O,
                        },
                        i || c.createElement(Et, null),
                      )
                    : null,
                h = {
                  expanded: C
                    ? c.createElement(xt.Z, null)
                    : c.createElement(Pt, null),
                  collapsed: C
                    ? c.createElement(Pt, null)
                    : c.createElement(xt.Z, null),
                },
                b = A ? 'collapsed' : 'expanded',
                Z = h[b],
                w =
                  null !== i
                    ? v ||
                      c.createElement(
                        'div',
                        {
                          className: ''.concat(a, '-trigger'),
                          onClick: H,
                          style: { width: d },
                        },
                        i || Z,
                      )
                    : null,
                P = (0, o.Z)((0, o.Z)({}, y), {
                  flex: '0 0 '.concat(d),
                  maxWidth: d,
                  minWidth: d,
                  width: d,
                }),
                S = m()(
                  a,
                  ''.concat(a, '-').concat(p),
                  ((e = {}),
                  (0, u.Z)(e, ''.concat(a, '-collapsed'), !!A),
                  (0, u.Z)(
                    e,
                    ''.concat(a, '-has-trigger'),
                    g && null !== i && !v,
                  ),
                  (0, u.Z)(e, ''.concat(a, '-below'), !!z),
                  (0, u.Z)(e, ''.concat(a, '-zero-width'), 0 === parseFloat(d)),
                  e),
                  r,
                );
              return c.createElement(
                'aside',
                (0, o.Z)({ className: S }, s, { style: P, ref: t }),
                c.createElement(
                  'div',
                  { className: ''.concat(a, '-children') },
                  l,
                ),
                g || (z && v) ? w : null,
              );
            };
          return c.createElement(
            Lt.Provider,
            { value: { siderCollapsed: A } },
            $(),
          );
        });
      zt.displayName = 'Sider';
      var Vt = function (e, t) {
          var n = {};
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              t.indexOf(o) < 0 &&
              (n[o] = e[o]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
              t.indexOf(o[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                (n[o[r]] = e[o[r]]);
          }
          return n;
        },
        _t = (function (e) {
          (0, l.Z)(n, e);
          var t = (0, a.Z)(n);
          function n() {
            var e;
            return (
              (0, r.Z)(this, n),
              (e = t.apply(this, arguments)),
              (e.renderItem = function (t) {
                var n,
                  r,
                  i = t.siderCollapsed,
                  l = e.context,
                  a = l.prefixCls,
                  s = l.firstLevel,
                  f = l.inlineCollapsed,
                  d = l.direction,
                  p = e.props,
                  v = p.className,
                  y = p.children,
                  h = e.props,
                  g = h.title,
                  b = h.icon,
                  C = h.danger,
                  Z = Vt(h, ['title', 'icon', 'danger']),
                  E = g;
                'undefined' === typeof g
                  ? (E = s ? y : '')
                  : !1 === g && (E = '');
                var x = { title: E };
                i || f || ((x.title = null), (x.visible = !1));
                var w = (0, F.Z)(y).length;
                return c.createElement(
                  ht,
                  (0, o.Z)({}, x, {
                    placement: 'rtl' === d ? 'left' : 'right',
                    overlayClassName: ''.concat(a, '-inline-collapsed-tooltip'),
                  }),
                  c.createElement(
                    H,
                    (0, o.Z)({}, Z, {
                      className: m()(
                        ((n = {}),
                        (0, u.Z)(n, ''.concat(a, '-item-danger'), C),
                        (0, u.Z)(
                          n,
                          ''.concat(a, '-item-only-child'),
                          1 === (b ? w + 1 : w),
                        ),
                        n),
                        v,
                      ),
                      title: 'string' === typeof g ? g : void 0,
                    }),
                    (0, We.Tm)(b, {
                      className: m()(
                        (0, We.l$)(b)
                          ? null === (r = b.props) || void 0 === r
                            ? void 0
                            : r.className
                          : '',
                        ''.concat(a, '-item-icon'),
                      ),
                    }),
                    e.renderItemChildren(f),
                  ),
                );
              }),
              e
            );
          }
          return (
            (0, i.Z)(n, [
              {
                key: 'renderItemChildren',
                value: function (e) {
                  var t = this.context,
                    n = t.prefixCls,
                    o = t.firstLevel,
                    r = this.props,
                    i = r.icon,
                    l = r.children,
                    a = c.createElement(
                      'span',
                      { className: ''.concat(n, '-title-content') },
                      l,
                    );
                  return (!i || ((0, We.l$)(l) && 'span' === l.type)) &&
                    l &&
                    e &&
                    o &&
                    'string' === typeof l
                    ? c.createElement(
                        'div',
                        { className: ''.concat(n, '-inline-collapsed-noicon') },
                        l.charAt(0),
                      )
                    : a;
                },
              },
              {
                key: 'render',
                value: function () {
                  return c.createElement(Lt.Consumer, null, this.renderItem);
                },
              },
            ]),
            n
          );
        })(c.Component);
      _t.contextType = Fe;
      var Bt = n(21687),
        Ht = function (e, t) {
          var n = {};
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              t.indexOf(o) < 0 &&
              (n[o] = e[o]);
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0;
            for (o = Object.getOwnPropertySymbols(e); r < o.length; r++)
              t.indexOf(o[r]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, o[r]) &&
                (n[o[r]] = e[o[r]]);
          }
          return n;
        },
        Ft = (function (e) {
          (0, l.Z)(n, e);
          var t = (0, a.Z)(n);
          function n(e) {
            var i;
            return (
              (0, r.Z)(this, n),
              (i = t.call(this, e)),
              (i.renderMenu = function (e) {
                var t = e.getPopupContainer,
                  n = e.getPrefixCls,
                  r = e.direction,
                  l = n(),
                  a = i.props,
                  u = a.prefixCls,
                  s = a.className,
                  f = a.theme,
                  d = a.expandIcon,
                  p = Ht(a, ['prefixCls', 'className', 'theme', 'expandIcon']),
                  v = (0, E.Z)(p, ['siderCollapsed', 'collapsedWidth']),
                  y = i.getInlineCollapsed(),
                  h = {
                    horizontal: { motionName: ''.concat(l, '-slide-up') },
                    inline: ft.Z,
                    other: { motionName: ''.concat(l, '-zoom-big') },
                  },
                  g = n('menu', u),
                  b = m()(''.concat(g, '-').concat(f), s);
                return c.createElement(
                  Fe.Provider,
                  {
                    value: {
                      prefixCls: g,
                      inlineCollapsed: y || !1,
                      antdMenuTheme: f,
                      direction: r,
                      firstLevel: !0,
                    },
                  },
                  c.createElement(
                    _e,
                    (0, o.Z)(
                      {
                        getPopupContainer: t,
                        overflowedIndicator: c.createElement(Be.Z, null),
                        overflowedIndicatorPopupClassName: ''
                          .concat(g, '-')
                          .concat(f),
                      },
                      v,
                      {
                        inlineCollapsed: y,
                        className: b,
                        prefixCls: g,
                        direction: r,
                        defaultMotions: h,
                        expandIcon: (0, We.Tm)(d, {
                          className: ''.concat(g, '-submenu-expand-icon'),
                        }),
                      },
                    ),
                  ),
                );
              }),
              (0, Bt.Z)(
                !('inlineCollapsed' in e && 'inline' !== e.mode),
                'Menu',
                '`inlineCollapsed` should only be used when `mode` is inline.',
              ),
              (0, Bt.Z)(
                !(void 0 !== e.siderCollapsed && 'inlineCollapsed' in e),
                'Menu',
                '`inlineCollapsed` not control Menu under Sider. Should set `collapsed` on Sider instead.',
              ),
              i
            );
          }
          return (
            (0, i.Z)(n, [
              {
                key: 'getInlineCollapsed',
                value: function () {
                  var e = this.props,
                    t = e.inlineCollapsed,
                    n = e.siderCollapsed;
                  return void 0 !== n ? n : t;
                },
              },
              {
                key: 'render',
                value: function () {
                  return c.createElement(ct.C, null, this.renderMenu);
                },
              },
            ]),
            n
          );
        })(c.Component);
      Ft.defaultProps = { theme: 'light' };
      var Wt = (function (e) {
        (0, l.Z)(n, e);
        var t = (0, a.Z)(n);
        function n() {
          return (0, r.Z)(this, n), t.apply(this, arguments);
        }
        return (
          (0, i.Z)(n, [
            {
              key: 'render',
              value: function () {
                var e = this;
                return c.createElement(Lt.Consumer, null, function (t) {
                  return c.createElement(Ft, (0, o.Z)({}, e.props, t));
                });
              },
            },
          ]),
          n
        );
      })(c.Component);
      (Wt.Divider = De), (Wt.Item = _t), (Wt.SubMenu = Xe), (Wt.ItemGroup = Le);
      var $t = Wt;
    },
    85452: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var o = n(28991),
        r = n(67294),
        i = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z',
                },
              },
            ],
          },
          name: 'ellipsis',
          theme: 'outlined',
        },
        l = i,
        a = n(23676),
        c = function (e, t) {
          return r.createElement(
            a.Z,
            (0, o.Z)((0, o.Z)({}, e), {}, { ref: t, icon: l }),
          );
        };
      c.displayName = 'EllipsisOutlined';
      var u = r.forwardRef(c);
    },
    51874: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var o = n(28991),
        r = n(67294),
        i = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z',
                },
              },
            ],
          },
          name: 'right',
          theme: 'outlined',
        },
        l = i,
        a = n(23676),
        c = function (e, t) {
          return r.createElement(
            a.Z,
            (0, o.Z)((0, o.Z)({}, e), {}, { ref: t, icon: l }),
          );
        };
      c.displayName = 'RightOutlined';
      var u = r.forwardRef(c);
    },
    96774: function (e) {
      e.exports = function (e, t, n, o) {
        var r = n ? n.call(o, e, t) : void 0;
        if (void 0 !== r) return !!r;
        if (e === t) return !0;
        if ('object' !== typeof e || !e || 'object' !== typeof t || !t)
          return !1;
        var i = Object.keys(e),
          l = Object.keys(t);
        if (i.length !== l.length) return !1;
        for (
          var a = Object.prototype.hasOwnProperty.bind(t), c = 0;
          c < i.length;
          c++
        ) {
          var u = i[c];
          if (!a(u)) return !1;
          var s = e[u],
            f = t[u];
          if (
            ((r = n ? n.call(o, s, f, u) : void 0),
            !1 === r || (void 0 === r && s !== f))
          )
            return !1;
        }
        return !0;
      };
    },
  },
]);
