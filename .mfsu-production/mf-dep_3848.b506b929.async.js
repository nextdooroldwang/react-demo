(self['webpackChunk'] = self['webpackChunk'] || []).push([
  ['mf-dep_3848'],
  {
    3848: function (e, t, n) {
      'use strict';
      n.r(t),
        n.d(t, {
          default: function () {
            return A;
          },
        });
      var o = n(22122),
        r = n(96156),
        a = n(67294),
        i = n(28481),
        l = n(81253),
        s = n(52052),
        c = n(94184),
        p = n.n(c),
        u = { adjustX: 1, adjustY: 1 },
        f = [0, 0],
        m = {
          topLeft: {
            points: ['bl', 'tl'],
            overflow: u,
            offset: [0, -4],
            targetOffset: f,
          },
          topCenter: {
            points: ['bc', 'tc'],
            overflow: u,
            offset: [0, -4],
            targetOffset: f,
          },
          topRight: {
            points: ['br', 'tr'],
            overflow: u,
            offset: [0, -4],
            targetOffset: f,
          },
          bottomLeft: {
            points: ['tl', 'bl'],
            overflow: u,
            offset: [0, 4],
            targetOffset: f,
          },
          bottomCenter: {
            points: ['tc', 'bc'],
            overflow: u,
            offset: [0, 4],
            targetOffset: f,
          },
          bottomRight: {
            points: ['tr', 'br'],
            overflow: u,
            offset: [0, 4],
            targetOffset: f,
          },
        },
        d = m;
      function v(e, t) {
        var n = e.arrow,
          o = void 0 !== n && n,
          c = e.prefixCls,
          u = void 0 === c ? 'rc-dropdown' : c,
          f = e.transitionName,
          m = e.animation,
          v = e.align,
          g = e.placement,
          y = void 0 === g ? 'bottomLeft' : g,
          b = e.placements,
          C = void 0 === b ? d : b,
          h = e.getPopupContainer,
          w = e.showAction,
          N = e.hideAction,
          E = e.overlayClassName,
          O = e.overlayStyle,
          x = e.visible,
          Z = e.trigger,
          P = void 0 === Z ? ['hover'] : Z,
          R = (0, l.Z)(e, [
            'arrow',
            'prefixCls',
            'transitionName',
            'animation',
            'align',
            'placement',
            'placements',
            'getPopupContainer',
            'showAction',
            'hideAction',
            'overlayClassName',
            'overlayStyle',
            'visible',
            'trigger',
          ]),
          k = a.useState(),
          L = (0, i.Z)(k, 2),
          T = L[0],
          A = L[1],
          D = 'visible' in e ? x : T,
          S = a.useRef(null);
        a.useImperativeHandle(t, function () {
          return S.current;
        });
        var V = function () {
            var t,
              n = e.overlay;
            return (t = 'function' === typeof n ? n() : n), t;
          },
          j = function (t) {
            var n = e.onOverlayClick,
              o = V().props;
            A(!1), n && n(t), o.onClick && o.onClick(t);
          },
          M = function (t) {
            var n = e.onVisibleChange;
            A(t), 'function' === typeof n && n(t);
          },
          _ = function () {
            var e = V(),
              t = { prefixCls: ''.concat(u, '-menu'), onClick: j };
            return (
              'string' === typeof e.type && delete t.prefixCls,
              a.createElement(
                a.Fragment,
                null,
                o &&
                  a.createElement('div', { className: ''.concat(u, '-arrow') }),
                a.cloneElement(e, t),
              )
            );
          },
          z = function () {
            var t = e.overlay;
            return 'function' === typeof t ? _ : _();
          },
          B = function () {
            var t = e.minOverlayWidthMatchTrigger,
              n = e.alignPoint;
            return 'minOverlayWidthMatchTrigger' in e ? t : !n;
          },
          I = function () {
            var t = e.openClassName;
            return void 0 !== t ? t : ''.concat(u, '-open');
          },
          W = function () {
            var t = e.children,
              n = t.props ? t.props : {},
              o = p()(n.className, I());
            return T && t ? a.cloneElement(t, { className: o }) : t;
          },
          F = N;
        return (
          F || -1 === P.indexOf('contextMenu') || (F = ['click']),
          a.createElement(
            s.Z,
            Object.assign({}, R, {
              prefixCls: u,
              ref: S,
              popupClassName: p()(
                E,
                (0, r.Z)({}, ''.concat(u, '-show-arrow'), o),
              ),
              popupStyle: O,
              builtinPlacements: C,
              action: P,
              showAction: w,
              hideAction: F || [],
              popupPlacement: y,
              popupAlign: v,
              popupTransitionName: f,
              popupAnimation: m,
              popupVisible: D,
              stretch: B() ? 'minWidth' : '',
              popup: z(),
              onPopupVisibleChange: M,
              getPopupContainer: h,
            }),
            W(),
          )
        );
      }
      var g = a.forwardRef(v),
        y = g,
        b = n(51874),
        C = n(85452),
        h = n(27884),
        w = n(86032),
        N = function (e, t) {
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
        E = h.Z.Group,
        O = function (e) {
          var t = a.useContext(w.E_),
            n = t.getPopupContainer,
            r = t.getPrefixCls,
            l = t.direction,
            s = e.prefixCls,
            c = e.type,
            u = e.disabled,
            f = e.onClick,
            m = e.htmlType,
            d = e.children,
            v = e.className,
            g = e.overlay,
            y = e.trigger,
            b = e.align,
            O = e.visible,
            x = e.onVisibleChange,
            Z = e.placement,
            P = e.getPopupContainer,
            R = e.href,
            k = e.icon,
            T = void 0 === k ? a.createElement(C.Z, null) : k,
            A = e.title,
            D = e.buttonsRender,
            S = e.mouseEnterDelay,
            V = e.mouseLeaveDelay,
            j = e.overlayClassName,
            M = e.overlayStyle,
            _ = N(e, [
              'prefixCls',
              'type',
              'disabled',
              'onClick',
              'htmlType',
              'children',
              'className',
              'overlay',
              'trigger',
              'align',
              'visible',
              'onVisibleChange',
              'placement',
              'getPopupContainer',
              'href',
              'icon',
              'title',
              'buttonsRender',
              'mouseEnterDelay',
              'mouseLeaveDelay',
              'overlayClassName',
              'overlayStyle',
            ]),
            z = r('dropdown-button', s),
            B = {
              align: b,
              overlay: g,
              disabled: u,
              trigger: u ? [] : y,
              onVisibleChange: x,
              getPopupContainer: P || n,
              mouseEnterDelay: S,
              mouseLeaveDelay: V,
              overlayClassName: j,
              overlayStyle: M,
            };
          'visible' in e && (B.visible = O),
            (B.placement =
              'placement' in e
                ? Z
                : 'rtl' === l
                ? 'bottomLeft'
                : 'bottomRight');
          var I = a.createElement(
              h.Z,
              {
                type: c,
                disabled: u,
                onClick: f,
                htmlType: m,
                href: R,
                title: A,
              },
              d,
            ),
            W = a.createElement(h.Z, { type: c, icon: T }),
            F = D([I, W]),
            G = (0, i.Z)(F, 2),
            H = G[0],
            U = G[1];
          return a.createElement(
            E,
            (0, o.Z)({}, _, { className: p()(z, v) }),
            H,
            a.createElement(L, B, U),
          );
        };
      (O.__ANT_BUTTON = !0),
        (O.defaultProps = {
          type: 'default',
          buttonsRender: function (e) {
            return e;
          },
        });
      var x = O,
        Z = n(21687),
        P = n(93355),
        R = n(96159),
        k =
          ((0, P.b)(
            'topLeft',
            'topCenter',
            'topRight',
            'bottomLeft',
            'bottomCenter',
            'bottomRight',
          ),
          function (e) {
            var t,
              n = a.useContext(w.E_),
              i = n.getPopupContainer,
              l = n.getPrefixCls,
              s = n.direction,
              c = function () {
                var t = l(),
                  n = e.placement,
                  o = void 0 === n ? '' : n,
                  r = e.transitionName;
                return void 0 !== r
                  ? r
                  : o.indexOf('top') >= 0
                  ? ''.concat(t, '-slide-down')
                  : ''.concat(t, '-slide-up');
              },
              u = function (t) {
                var n,
                  o = e.overlay;
                (n = 'function' === typeof o ? o() : o),
                  (n = a.Children.only(
                    'string' === typeof n
                      ? a.createElement('span', null, n)
                      : n,
                  ));
                var r = n.props;
                (0, Z.Z)(
                  !r.mode || 'vertical' === r.mode,
                  'Dropdown',
                  'mode="'.concat(
                    r.mode,
                    '" is not supported for Dropdown\'s Menu.',
                  ),
                );
                var i = r.selectable,
                  l = void 0 !== i && i,
                  s = r.expandIcon,
                  c =
                    'undefined' !== typeof s && a.isValidElement(s)
                      ? s
                      : a.createElement(
                          'span',
                          { className: ''.concat(t, '-menu-submenu-arrow') },
                          a.createElement(b.Z, {
                            className: ''.concat(t, '-menu-submenu-arrow-icon'),
                          }),
                        ),
                  p =
                    'string' === typeof n.type
                      ? n
                      : (0, R.Tm)(n, {
                          mode: 'vertical',
                          selectable: l,
                          expandIcon: c,
                        });
                return p;
              },
              f = function () {
                var t = e.placement;
                return void 0 !== t
                  ? t
                  : 'rtl' === s
                  ? 'bottomRight'
                  : 'bottomLeft';
              },
              m = e.arrow,
              d = e.prefixCls,
              v = e.children,
              g = e.trigger,
              C = e.disabled,
              h = e.getPopupContainer,
              N = e.overlayClassName,
              E = l('dropdown', d),
              O = a.Children.only(v),
              x = (0, R.Tm)(O, {
                className: p()(
                  ''.concat(E, '-trigger'),
                  (0, r.Z)({}, ''.concat(E, '-rtl'), 'rtl' === s),
                  O.props.className,
                ),
                disabled: C,
              }),
              P = p()(N, (0, r.Z)({}, ''.concat(E, '-rtl'), 'rtl' === s)),
              k = C ? [] : g;
            return (
              k && -1 !== k.indexOf('contextMenu') && (t = !0),
              a.createElement(
                y,
                (0, o.Z)({ arrow: m, alignPoint: t }, e, {
                  overlayClassName: P,
                  prefixCls: E,
                  getPopupContainer: h || i,
                  transitionName: c(),
                  trigger: k,
                  overlay: function () {
                    return u(E);
                  },
                  placement: f(),
                }),
                x,
              )
            );
          });
      (k.Button = x),
        (k.defaultProps = { mouseEnterDelay: 0.15, mouseLeaveDelay: 0.1 });
      var L = k,
        T = L,
        A = T;
    },
    85452: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var o = n(28991),
        r = n(67294),
        a = {
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
        i = a,
        l = n(23676),
        s = function (e, t) {
          return r.createElement(
            l.Z,
            (0, o.Z)((0, o.Z)({}, e), {}, { ref: t, icon: i }),
          );
        };
      s.displayName = 'EllipsisOutlined';
      var c = r.forwardRef(s);
    },
    51874: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var o = n(28991),
        r = n(67294),
        a = {
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
        i = a,
        l = n(23676),
        s = function (e, t) {
          return r.createElement(
            l.Z,
            (0, o.Z)((0, o.Z)({}, e), {}, { ref: t, icon: i }),
          );
        };
      s.displayName = 'RightOutlined';
      var c = r.forwardRef(s);
    },
  },
]);
