(self['webpackChunk'] = self['webpackChunk'] || []).push([
  ['mf-dep_2052'],
  {
    92137: function (e, t, n) {
      'use strict';
      function o(e, t, n, o, i, r, u) {
        try {
          var a = e[r](u),
            s = a.value;
        } catch (c) {
          return void n(c);
        }
        a.done ? t(s) : Promise.resolve(s).then(o, i);
      }
      function i(e) {
        return function () {
          var t = this,
            n = arguments;
          return new Promise(function (i, r) {
            var u = e.apply(t, n);
            function a(e) {
              o(u, i, r, a, s, 'next', e);
            }
            function s(e) {
              o(u, i, r, a, s, 'throw', e);
            }
            a(void 0);
          });
        };
      }
      n.d(t, {
        Z: function () {
          return i;
        },
      });
    },
    87757: function (e, t, n) {
      e.exports = n(17445);
    },
    52052: function (e, t, n) {
      'use strict';
      n.d(t, {
        Z: function () {
          return Rt;
        },
      });
      var o = n(28991),
        i = n(22122),
        r = n(6610),
        u = n(5991),
        a = n(63349),
        s = n(10379),
        c = n(44144),
        l = n(67294),
        p = n(73935),
        f = n(75164);
      function d(e, t) {
        return !!e && e.contains(t);
      }
      var h = n(34203),
        m = n(42550);
      function v(e, t, n, o) {
        var i = p.unstable_batchedUpdates
          ? function (e) {
              p.unstable_batchedUpdates(n, e);
            }
          : n;
        return (
          e.addEventListener && e.addEventListener(t, i, o),
          {
            remove: function () {
              e.removeEventListener && e.removeEventListener(t, i);
            },
          }
        );
      }
      var g = n(98924),
        w = (0, l.forwardRef)(function (e, t) {
          var n = e.didUpdate,
            o = e.getContainer,
            i = e.children,
            r = (0, l.useRef)();
          (0, l.useImperativeHandle)(t, function () {
            return {};
          });
          var u = (0, l.useRef)(!1);
          return (
            !u.current && (0, g.Z)() && ((r.current = o()), (u.current = !0)),
            (0, l.useEffect)(function () {
              null === n || void 0 === n || n(e);
            }),
            (0, l.useEffect)(function () {
              return function () {
                var e, t;
                null === (e = r.current) ||
                  void 0 === e ||
                  null === (t = e.parentNode) ||
                  void 0 === t ||
                  t.removeChild(r.current);
              };
            }, []),
            r.current ? p.createPortal(i, r.current) : null
          );
        }),
        y = w,
        b = n(94184),
        x = n.n(b);
      function T(e, t, n) {
        return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
      }
      function C(e, t, n) {
        var i = e[t] || {};
        return (0, o.Z)((0, o.Z)({}, i), n);
      }
      function M(e, t, n, o) {
        for (
          var i = n.points, r = Object.keys(e), u = 0;
          u < r.length;
          u += 1
        ) {
          var a = r[u];
          if (T(e[a].points, i, o))
            return ''.concat(t, '-placement-').concat(a);
        }
        return '';
      }
      var k = n(28481),
        P = n(81253),
        E = n(31131),
        D = n(60444);
      function O(e) {
        var t = e.prefixCls,
          n = e.motion,
          o = e.animation,
          i = e.transitionName;
        return (
          n ||
          (o
            ? { motionName: ''.concat(t, '-').concat(o) }
            : i
            ? { motionName: i }
            : null)
        );
      }
      function S(e) {
        var t = e.prefixCls,
          n = e.visible,
          r = e.zIndex,
          u = e.mask,
          a = e.maskMotion,
          s = e.maskAnimation,
          c = e.maskTransitionName;
        if (!u) return null;
        var p = {};
        return (
          (a || c || s) &&
            (p = (0, o.Z)(
              { motionAppear: !0 },
              O({ motion: a, prefixCls: t, transitionName: c, animation: s }),
            )),
          l.createElement(
            D.Z,
            (0, i.Z)({}, p, { visible: n, removeOnLeave: !0 }),
            function (e) {
              var n = e.className;
              return l.createElement('div', {
                style: { zIndex: r },
                className: x()(''.concat(t, '-mask'), n),
              });
            },
          )
        );
      }
      var R,
        H = n(90484),
        N = n(5110);
      function V(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, o);
        }
        return n;
      }
      function Z(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? V(Object(n), !0).forEach(function (t) {
                W(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : V(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t),
                );
              });
        }
        return e;
      }
      function A(e) {
        return (
          (A =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    'function' === typeof Symbol &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? 'symbol'
                    : typeof e;
                }),
          A(e)
        );
      }
      function W(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var L = { Webkit: '-webkit-', Moz: '-moz-', ms: '-ms-', O: '-o-' };
      function j() {
        if (void 0 !== R) return R;
        R = '';
        var e = document.createElement('p').style,
          t = 'Transform';
        for (var n in L) n + t in e && (R = n);
        return R;
      }
      function B() {
        return j()
          ? ''.concat(j(), 'TransitionProperty')
          : 'transitionProperty';
      }
      function z() {
        return j() ? ''.concat(j(), 'Transform') : 'transform';
      }
      function F(e, t) {
        var n = B();
        n &&
          ((e.style[n] = t),
          'transitionProperty' !== n && (e.style.transitionProperty = t));
      }
      function Y(e, t) {
        var n = z();
        n && ((e.style[n] = t), 'transform' !== n && (e.style.transform = t));
      }
      function X(e) {
        return e.style.transitionProperty || e.style[B()];
      }
      function I(e) {
        var t = window.getComputedStyle(e, null),
          n = t.getPropertyValue('transform') || t.getPropertyValue(z());
        if (n && 'none' !== n) {
          var o = n.replace(/[^0-9\-.,]/g, '').split(',');
          return {
            x: parseFloat(o[12] || o[4], 0),
            y: parseFloat(o[13] || o[5], 0),
          };
        }
        return { x: 0, y: 0 };
      }
      var U = /matrix\((.*)\)/,
        _ = /matrix3d\((.*)\)/;
      function q(e, t) {
        var n = window.getComputedStyle(e, null),
          o = n.getPropertyValue('transform') || n.getPropertyValue(z());
        if (o && 'none' !== o) {
          var i,
            r = o.match(U);
          if (r)
            (r = r[1]),
              (i = r.split(',').map(function (e) {
                return parseFloat(e, 10);
              })),
              (i[4] = t.x),
              (i[5] = t.y),
              Y(e, 'matrix('.concat(i.join(','), ')'));
          else {
            var u = o.match(_)[1];
            (i = u.split(',').map(function (e) {
              return parseFloat(e, 10);
            })),
              (i[12] = t.x),
              (i[13] = t.y),
              Y(e, 'matrix3d('.concat(i.join(','), ')'));
          }
        } else
          Y(
            e,
            'translateX('
              .concat(t.x, 'px) translateY(')
              .concat(t.y, 'px) translateZ(0)'),
          );
      }
      var $,
        Q = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source;
      function G(e) {
        var t = e.style.display;
        (e.style.display = 'none'), e.offsetHeight, (e.style.display = t);
      }
      function J(e, t, n) {
        var o = n;
        if ('object' !== A(t))
          return 'undefined' !== typeof o
            ? ('number' === typeof o && (o = ''.concat(o, 'px')),
              void (e.style[t] = o))
            : $(e, t);
        for (var i in t) t.hasOwnProperty(i) && J(e, i, t[i]);
      }
      function K(e) {
        var t,
          n,
          o,
          i = e.ownerDocument,
          r = i.body,
          u = i && i.documentElement;
        return (
          (t = e.getBoundingClientRect()),
          (n = t.left),
          (o = t.top),
          (n -= u.clientLeft || r.clientLeft || 0),
          (o -= u.clientTop || r.clientTop || 0),
          { left: n, top: o }
        );
      }
      function ee(e, t) {
        var n = e['page'.concat(t ? 'Y' : 'X', 'Offset')],
          o = 'scroll'.concat(t ? 'Top' : 'Left');
        if ('number' !== typeof n) {
          var i = e.document;
          (n = i.documentElement[o]), 'number' !== typeof n && (n = i.body[o]);
        }
        return n;
      }
      function te(e) {
        return ee(e);
      }
      function ne(e) {
        return ee(e, !0);
      }
      function oe(e) {
        var t = K(e),
          n = e.ownerDocument,
          o = n.defaultView || n.parentWindow;
        return (t.left += te(o)), (t.top += ne(o)), t;
      }
      function ie(e) {
        return null !== e && void 0 !== e && e == e.window;
      }
      function re(e) {
        return ie(e) ? e.document : 9 === e.nodeType ? e : e.ownerDocument;
      }
      function ue(e, t, n) {
        var o = n,
          i = '',
          r = re(e);
        return (
          (o = o || r.defaultView.getComputedStyle(e, null)),
          o && (i = o.getPropertyValue(t) || o[t]),
          i
        );
      }
      var ae = new RegExp('^('.concat(Q, ')(?!px)[a-z%]+$'), 'i'),
        se = /^(top|right|bottom|left)$/,
        ce = 'currentStyle',
        le = 'runtimeStyle',
        pe = 'left',
        fe = 'px';
      function de(e, t) {
        var n = e[ce] && e[ce][t];
        if (ae.test(n) && !se.test(t)) {
          var o = e.style,
            i = o[pe],
            r = e[le][pe];
          (e[le][pe] = e[ce][pe]),
            (o[pe] = 'fontSize' === t ? '1em' : n || 0),
            (n = o.pixelLeft + fe),
            (o[pe] = i),
            (e[le][pe] = r);
        }
        return '' === n ? 'auto' : n;
      }
      function he(e, t) {
        return 'left' === e
          ? t.useCssRight
            ? 'right'
            : e
          : t.useCssBottom
          ? 'bottom'
          : e;
      }
      function me(e) {
        return 'left' === e
          ? 'right'
          : 'right' === e
          ? 'left'
          : 'top' === e
          ? 'bottom'
          : 'bottom' === e
          ? 'top'
          : void 0;
      }
      function ve(e, t, n) {
        'static' === J(e, 'position') && (e.style.position = 'relative');
        var o = -999,
          i = -999,
          r = he('left', n),
          u = he('top', n),
          a = me(r),
          s = me(u);
        'left' !== r && (o = 999), 'top' !== u && (i = 999);
        var c = '',
          l = oe(e);
        ('left' in t || 'top' in t) && ((c = X(e) || ''), F(e, 'none')),
          'left' in t && ((e.style[a] = ''), (e.style[r] = ''.concat(o, 'px'))),
          'top' in t && ((e.style[s] = ''), (e.style[u] = ''.concat(i, 'px'))),
          G(e);
        var p = oe(e),
          f = {};
        for (var d in t)
          if (t.hasOwnProperty(d)) {
            var h = he(d, n),
              m = 'left' === d ? o : i,
              v = l[d] - p[d];
            f[h] = h === d ? m + v : m - v;
          }
        J(e, f), G(e), ('left' in t || 'top' in t) && F(e, c);
        var g = {};
        for (var w in t)
          if (t.hasOwnProperty(w)) {
            var y = he(w, n),
              b = t[w] - l[w];
            g[y] = w === y ? f[y] + b : f[y] - b;
          }
        J(e, g);
      }
      function ge(e, t) {
        var n = oe(e),
          o = I(e),
          i = { x: o.x, y: o.y };
        'left' in t && (i.x = o.x + t.left - n.left),
          'top' in t && (i.y = o.y + t.top - n.top),
          q(e, i);
      }
      function we(e, t, n) {
        if (n.ignoreShake) {
          var o = oe(e),
            i = o.left.toFixed(0),
            r = o.top.toFixed(0),
            u = t.left.toFixed(0),
            a = t.top.toFixed(0);
          if (i === u && r === a) return;
        }
        n.useCssRight || n.useCssBottom
          ? ve(e, t, n)
          : n.useCssTransform && z() in document.body.style
          ? ge(e, t)
          : ve(e, t, n);
      }
      function ye(e, t) {
        for (var n = 0; n < e.length; n++) t(e[n]);
      }
      function be(e) {
        return 'border-box' === $(e, 'boxSizing');
      }
      'undefined' !== typeof window && ($ = window.getComputedStyle ? ue : de);
      var xe = ['margin', 'border', 'padding'],
        Te = -1,
        Ce = 2,
        Me = 1,
        ke = 0;
      function Pe(e, t, n) {
        var o,
          i = {},
          r = e.style;
        for (o in t) t.hasOwnProperty(o) && ((i[o] = r[o]), (r[o] = t[o]));
        for (o in (n.call(e), t)) t.hasOwnProperty(o) && (r[o] = i[o]);
      }
      function Ee(e, t, n) {
        var o,
          i,
          r,
          u = 0;
        for (i = 0; i < t.length; i++)
          if (((o = t[i]), o))
            for (r = 0; r < n.length; r++) {
              var a = void 0;
              (a =
                'border' === o ? ''.concat(o).concat(n[r], 'Width') : o + n[r]),
                (u += parseFloat($(e, a)) || 0);
            }
        return u;
      }
      var De = {
        getParent: function (e) {
          var t = e;
          do {
            t = 11 === t.nodeType && t.host ? t.host : t.parentNode;
          } while (t && 1 !== t.nodeType && 9 !== t.nodeType);
          return t;
        },
      };
      function Oe(e, t, n) {
        var o = n;
        if (ie(e))
          return 'width' === t ? De.viewportWidth(e) : De.viewportHeight(e);
        if (9 === e.nodeType)
          return 'width' === t ? De.docWidth(e) : De.docHeight(e);
        var i = 'width' === t ? ['Left', 'Right'] : ['Top', 'Bottom'],
          r =
            'width' === t
              ? e.getBoundingClientRect().width
              : e.getBoundingClientRect().height,
          u = be(e),
          a = 0;
        (null === r || void 0 === r || r <= 0) &&
          ((r = void 0),
          (a = $(e, t)),
          (null === a || void 0 === a || Number(a) < 0) &&
            (a = e.style[t] || 0),
          (a = parseFloat(a) || 0)),
          void 0 === o && (o = u ? Me : Te);
        var s = void 0 !== r || u,
          c = r || a;
        return o === Te
          ? s
            ? c - Ee(e, ['border', 'padding'], i)
            : a
          : s
          ? o === Me
            ? c
            : c + (o === Ce ? -Ee(e, ['border'], i) : Ee(e, ['margin'], i))
          : a + Ee(e, xe.slice(o), i);
      }
      ye(['Width', 'Height'], function (e) {
        (De['doc'.concat(e)] = function (t) {
          var n = t.document;
          return Math.max(
            n.documentElement['scroll'.concat(e)],
            n.body['scroll'.concat(e)],
            De['viewport'.concat(e)](n),
          );
        }),
          (De['viewport'.concat(e)] = function (t) {
            var n = 'client'.concat(e),
              o = t.document,
              i = o.body,
              r = o.documentElement,
              u = r[n];
            return ('CSS1Compat' === o.compatMode && u) || (i && i[n]) || u;
          });
      });
      var Se = { position: 'absolute', visibility: 'hidden', display: 'block' };
      function Re() {
        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        var o,
          i = t[0];
        return (
          0 !== i.offsetWidth
            ? (o = Oe.apply(void 0, t))
            : Pe(i, Se, function () {
                o = Oe.apply(void 0, t);
              }),
          o
        );
      }
      function He(e, t) {
        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
        return e;
      }
      ye(['width', 'height'], function (e) {
        var t = e.charAt(0).toUpperCase() + e.slice(1);
        De['outer'.concat(t)] = function (t, n) {
          return t && Re(t, e, n ? ke : Me);
        };
        var n = 'width' === e ? ['Left', 'Right'] : ['Top', 'Bottom'];
        De[e] = function (t, o) {
          var i = o;
          if (void 0 === i) return t && Re(t, e, Te);
          if (t) {
            var r = be(t);
            return r && (i += Ee(t, ['padding', 'border'], n)), J(t, e, i);
          }
        };
      });
      var Ne = {
        getWindow: function (e) {
          if (e && e.document && e.setTimeout) return e;
          var t = e.ownerDocument || e;
          return t.defaultView || t.parentWindow;
        },
        getDocument: re,
        offset: function (e, t, n) {
          if ('undefined' === typeof t) return oe(e);
          we(e, t, n || {});
        },
        isWindow: ie,
        each: ye,
        css: J,
        clone: function (e) {
          var t,
            n = {};
          for (t in e) e.hasOwnProperty(t) && (n[t] = e[t]);
          var o = e.overflow;
          if (o)
            for (t in e) e.hasOwnProperty(t) && (n.overflow[t] = e.overflow[t]);
          return n;
        },
        mix: He,
        getWindowScrollLeft: function (e) {
          return te(e);
        },
        getWindowScrollTop: function (e) {
          return ne(e);
        },
        merge: function () {
          for (var e = {}, t = 0; t < arguments.length; t++)
            Ne.mix(e, t < 0 || arguments.length <= t ? void 0 : arguments[t]);
          return e;
        },
        viewportWidth: 0,
        viewportHeight: 0,
      };
      He(Ne, De);
      var Ve = Ne.getParent;
      function Ze(e) {
        if (Ne.isWindow(e) || 9 === e.nodeType) return null;
        var t,
          n = Ne.getDocument(e),
          o = n.body,
          i = Ne.css(e, 'position'),
          r = 'fixed' === i || 'absolute' === i;
        if (!r) return 'html' === e.nodeName.toLowerCase() ? null : Ve(e);
        for (t = Ve(e); t && t !== o && 9 !== t.nodeType; t = Ve(t))
          if (((i = Ne.css(t, 'position')), 'static' !== i)) return t;
        return null;
      }
      var Ae = Ne.getParent;
      function We(e) {
        if (Ne.isWindow(e) || 9 === e.nodeType) return !1;
        var t = Ne.getDocument(e),
          n = t.body,
          o = null;
        for (o = Ae(e); o && o !== n && o !== t; o = Ae(o)) {
          var i = Ne.css(o, 'position');
          if ('fixed' === i) return !0;
        }
        return !1;
      }
      function Le(e, t) {
        var n = { left: 0, right: 1 / 0, top: 0, bottom: 1 / 0 },
          o = Ze(e),
          i = Ne.getDocument(e),
          r = i.defaultView || i.parentWindow,
          u = i.body,
          a = i.documentElement;
        while (o) {
          if (
            (-1 !== navigator.userAgent.indexOf('MSIE') &&
              0 === o.clientWidth) ||
            o === u ||
            o === a ||
            'visible' === Ne.css(o, 'overflow')
          ) {
            if (o === u || o === a) break;
          } else {
            var s = Ne.offset(o);
            (s.left += o.clientLeft),
              (s.top += o.clientTop),
              (n.top = Math.max(n.top, s.top)),
              (n.right = Math.min(n.right, s.left + o.clientWidth)),
              (n.bottom = Math.min(n.bottom, s.top + o.clientHeight)),
              (n.left = Math.max(n.left, s.left));
          }
          o = Ze(o);
        }
        var c = null;
        if (!Ne.isWindow(e) && 9 !== e.nodeType) {
          c = e.style.position;
          var l = Ne.css(e, 'position');
          'absolute' === l && (e.style.position = 'fixed');
        }
        var p = Ne.getWindowScrollLeft(r),
          f = Ne.getWindowScrollTop(r),
          d = Ne.viewportWidth(r),
          h = Ne.viewportHeight(r),
          m = a.scrollWidth,
          v = a.scrollHeight,
          g = window.getComputedStyle(u);
        if (
          ('hidden' === g.overflowX && (m = r.innerWidth),
          'hidden' === g.overflowY && (v = r.innerHeight),
          e.style && (e.style.position = c),
          t || We(e))
        )
          (n.left = Math.max(n.left, p)),
            (n.top = Math.max(n.top, f)),
            (n.right = Math.min(n.right, p + d)),
            (n.bottom = Math.min(n.bottom, f + h));
        else {
          var w = Math.max(m, p + d);
          n.right = Math.min(n.right, w);
          var y = Math.max(v, f + h);
          n.bottom = Math.min(n.bottom, y);
        }
        return n.top >= 0 && n.left >= 0 && n.bottom > n.top && n.right > n.left
          ? n
          : null;
      }
      function je(e, t, n, o) {
        var i = Ne.clone(e),
          r = { width: t.width, height: t.height };
        return (
          o.adjustX && i.left < n.left && (i.left = n.left),
          o.resizeWidth &&
            i.left >= n.left &&
            i.left + r.width > n.right &&
            (r.width -= i.left + r.width - n.right),
          o.adjustX &&
            i.left + r.width > n.right &&
            (i.left = Math.max(n.right - r.width, n.left)),
          o.adjustY && i.top < n.top && (i.top = n.top),
          o.resizeHeight &&
            i.top >= n.top &&
            i.top + r.height > n.bottom &&
            (r.height -= i.top + r.height - n.bottom),
          o.adjustY &&
            i.top + r.height > n.bottom &&
            (i.top = Math.max(n.bottom - r.height, n.top)),
          Ne.mix(i, r)
        );
      }
      function Be(e) {
        var t, n, o;
        if (Ne.isWindow(e) || 9 === e.nodeType) {
          var i = Ne.getWindow(e);
          (t = {
            left: Ne.getWindowScrollLeft(i),
            top: Ne.getWindowScrollTop(i),
          }),
            (n = Ne.viewportWidth(i)),
            (o = Ne.viewportHeight(i));
        } else
          (t = Ne.offset(e)), (n = Ne.outerWidth(e)), (o = Ne.outerHeight(e));
        return (t.width = n), (t.height = o), t;
      }
      function ze(e, t) {
        var n = t.charAt(0),
          o = t.charAt(1),
          i = e.width,
          r = e.height,
          u = e.left,
          a = e.top;
        return (
          'c' === n ? (a += r / 2) : 'b' === n && (a += r),
          'c' === o ? (u += i / 2) : 'r' === o && (u += i),
          { left: u, top: a }
        );
      }
      function Fe(e, t, n, o, i) {
        var r = ze(t, n[1]),
          u = ze(e, n[0]),
          a = [u.left - r.left, u.top - r.top];
        return {
          left: Math.round(e.left - a[0] + o[0] - i[0]),
          top: Math.round(e.top - a[1] + o[1] - i[1]),
        };
      }
      function Ye(e, t, n) {
        return e.left < n.left || e.left + t.width > n.right;
      }
      function Xe(e, t, n) {
        return e.top < n.top || e.top + t.height > n.bottom;
      }
      function Ie(e, t, n) {
        return e.left > n.right || e.left + t.width < n.left;
      }
      function Ue(e, t, n) {
        return e.top > n.bottom || e.top + t.height < n.top;
      }
      function _e(e, t, n) {
        var o = [];
        return (
          Ne.each(e, function (e) {
            o.push(
              e.replace(t, function (e) {
                return n[e];
              }),
            );
          }),
          o
        );
      }
      function qe(e, t) {
        return (e[t] = -e[t]), e;
      }
      function $e(e, t) {
        var n;
        return (
          (n = /%$/.test(e)
            ? (parseInt(e.substring(0, e.length - 1), 10) / 100) * t
            : parseInt(e, 10)),
          n || 0
        );
      }
      function Qe(e, t) {
        (e[0] = $e(e[0], t.width)), (e[1] = $e(e[1], t.height));
      }
      function Ge(e, t, n, o) {
        var i = n.points,
          r = n.offset || [0, 0],
          u = n.targetOffset || [0, 0],
          a = n.overflow,
          s = n.source || e;
        (r = [].concat(r)), (u = [].concat(u)), (a = a || {});
        var c = {},
          l = 0,
          p = !(!a || !a.alwaysByViewport),
          f = Le(s, p),
          d = Be(s);
        Qe(r, d), Qe(u, t);
        var h = Fe(d, t, i, r, u),
          m = Ne.merge(d, h);
        if (f && (a.adjustX || a.adjustY) && o) {
          if (a.adjustX && Ye(h, d, f)) {
            var v = _e(i, /[lr]/gi, { l: 'r', r: 'l' }),
              g = qe(r, 0),
              w = qe(u, 0),
              y = Fe(d, t, v, g, w);
            Ie(y, d, f) || ((l = 1), (i = v), (r = g), (u = w));
          }
          if (a.adjustY && Xe(h, d, f)) {
            var b = _e(i, /[tb]/gi, { t: 'b', b: 't' }),
              x = qe(r, 1),
              T = qe(u, 1),
              C = Fe(d, t, b, x, T);
            Ue(C, d, f) || ((l = 1), (i = b), (r = x), (u = T));
          }
          l && ((h = Fe(d, t, i, r, u)), Ne.mix(m, h));
          var M = Ye(h, d, f),
            k = Xe(h, d, f);
          if (M || k) {
            var P = i;
            M && (P = _e(i, /[lr]/gi, { l: 'r', r: 'l' })),
              k && (P = _e(i, /[tb]/gi, { t: 'b', b: 't' })),
              (i = P),
              (r = n.offset || [0, 0]),
              (u = n.targetOffset || [0, 0]);
          }
          (c.adjustX = a.adjustX && M),
            (c.adjustY = a.adjustY && k),
            (c.adjustX || c.adjustY) && (m = je(h, d, f, c));
        }
        return (
          m.width !== d.width &&
            Ne.css(s, 'width', Ne.width(s) + m.width - d.width),
          m.height !== d.height &&
            Ne.css(s, 'height', Ne.height(s) + m.height - d.height),
          Ne.offset(
            s,
            { left: m.left, top: m.top },
            {
              useCssRight: n.useCssRight,
              useCssBottom: n.useCssBottom,
              useCssTransform: n.useCssTransform,
              ignoreShake: n.ignoreShake,
            },
          ),
          { points: i, offset: r, targetOffset: u, overflow: c }
        );
      }
      function Je(e, t) {
        var n = Le(e, t),
          o = Be(e);
        return (
          !n ||
          o.left + o.width <= n.left ||
          o.top + o.height <= n.top ||
          o.left >= n.right ||
          o.top >= n.bottom
        );
      }
      function Ke(e, t, n) {
        var o = n.target || t,
          i = Be(o),
          r = !Je(o, n.overflow && n.overflow.alwaysByViewport);
        return Ge(e, i, n, r);
      }
      function et(e, t, n) {
        var o,
          i,
          r = Ne.getDocument(e),
          u = r.defaultView || r.parentWindow,
          a = Ne.getWindowScrollLeft(u),
          s = Ne.getWindowScrollTop(u),
          c = Ne.viewportWidth(u),
          l = Ne.viewportHeight(u);
        (o = 'pageX' in t ? t.pageX : a + t.clientX),
          (i = 'pageY' in t ? t.pageY : s + t.clientY);
        var p = { left: o, top: i, width: 0, height: 0 },
          f = o >= 0 && o <= a + c && i >= 0 && i <= s + l,
          d = [n.points[0], 'cc'];
        return Ge(e, p, Z(Z({}, n), {}, { points: d }), f);
      }
      (Ke.__getOffsetParent = Ze), (Ke.__getVisibleRectForElement = Le);
      var tt = n(91033);
      function nt(e, t) {
        return (
          e === t ||
          (!(!e || !t) &&
            ('pageX' in t && 'pageY' in t
              ? e.pageX === t.pageX && e.pageY === t.pageY
              : 'clientX' in t &&
                'clientY' in t &&
                e.clientX === t.clientX &&
                e.clientY === t.clientY))
        );
      }
      function ot(e, t) {
        e !== document.activeElement &&
          d(t, e) &&
          'function' === typeof e.focus &&
          e.focus();
      }
      function it(e, t) {
        var n = null,
          o = null;
        function i(e) {
          var i = (0, k.Z)(e, 1),
            r = i[0].target;
          if (document.documentElement.contains(r)) {
            var u = r.getBoundingClientRect(),
              a = u.width,
              s = u.height,
              c = Math.floor(a),
              l = Math.floor(s);
            (n === c && o === l) ||
              Promise.resolve().then(function () {
                t({ width: c, height: l });
              }),
              (n = c),
              (o = l);
          }
        }
        var r = new tt.Z(i);
        return (
          e && r.observe(e),
          function () {
            r.disconnect();
          }
        );
      }
      var rt = function (e, t) {
        var n = l.useRef(!1),
          o = l.useRef(null);
        function i() {
          window.clearTimeout(o.current);
        }
        function r(u) {
          if (n.current && !0 !== u)
            i(),
              (o.current = window.setTimeout(function () {
                (n.current = !1), r();
              }, t));
          else {
            if (!1 === e()) return;
            (n.current = !0),
              i(),
              (o.current = window.setTimeout(function () {
                n.current = !1;
              }, t));
          }
        }
        return [
          r,
          function () {
            (n.current = !1), i();
          },
        ];
      };
      function ut(e) {
        return 'function' !== typeof e ? null : e();
      }
      function at(e) {
        return 'object' === (0, H.Z)(e) && e ? e : null;
      }
      var st = function (e, t) {
          var n = e.children,
            o = e.disabled,
            i = e.target,
            r = e.align,
            u = e.onAlign,
            a = e.monitorWindowResize,
            s = e.monitorBufferTime,
            c = void 0 === s ? 0 : s,
            p = l.useRef({}),
            f = l.useRef(),
            d = l.Children.only(n),
            h = l.useRef({});
          (h.current.disabled = o),
            (h.current.target = i),
            (h.current.onAlign = u);
          var g = rt(function () {
              var e = h.current,
                t = e.disabled,
                n = e.target,
                o = e.onAlign;
              if (!t && n) {
                var i,
                  u = f.current,
                  a = ut(n),
                  s = at(n);
                (p.current.element = a), (p.current.point = s);
                var c = document,
                  l = c.activeElement;
                return (
                  a && (0, N.Z)(a) ? (i = Ke(u, a, r)) : s && (i = et(u, s, r)),
                  ot(l, u),
                  o && i && o(u, i),
                  !0
                );
              }
              return !1;
            }, c),
            w = (0, k.Z)(g, 2),
            y = w[0],
            b = w[1],
            x = l.useRef({ cancel: function () {} }),
            T = l.useRef({ cancel: function () {} });
          l.useEffect(function () {
            var e = ut(i),
              t = at(i);
            f.current !== T.current.element &&
              (T.current.cancel(),
              (T.current.element = f.current),
              (T.current.cancel = it(f.current, y))),
              (p.current.element === e && nt(p.current.point, t)) ||
                (y(),
                x.current.element !== e &&
                  (x.current.cancel(),
                  (x.current.element = e),
                  (x.current.cancel = it(e, y))));
          }),
            l.useEffect(
              function () {
                o ? b() : y();
              },
              [o],
            );
          var C = l.useRef(null);
          return (
            l.useEffect(
              function () {
                a
                  ? C.current || (C.current = v(window, 'resize', y))
                  : C.current && (C.current.remove(), (C.current = null));
              },
              [a],
            ),
            l.useEffect(function () {
              return function () {
                x.current.cancel(),
                  T.current.cancel(),
                  C.current && C.current.remove(),
                  b();
              };
            }, []),
            l.useImperativeHandle(t, function () {
              return {
                forceAlign: function () {
                  return y(!0);
                },
              };
            }),
            l.isValidElement(d) &&
              (d = l.cloneElement(d, { ref: (0, m.sQ)(d.ref, f) })),
            d
          );
        },
        ct = l.forwardRef(st);
      ct.displayName = 'Align';
      var lt = ct,
        pt = lt,
        ft = n(87757),
        dt = n.n(ft),
        ht = n(92137),
        mt = ['measure', 'align', null, 'motion'],
        vt = function (e, t) {
          var n = (0, l.useState)(null),
            o = (0, k.Z)(n, 2),
            i = o[0],
            r = o[1],
            u = (0, l.useRef)(),
            a = (0, l.useRef)(!1);
          function s(e) {
            a.current || r(e);
          }
          function c() {
            f.Z.cancel(u.current);
          }
          function p(e) {
            c(),
              (u.current = (0, f.Z)(function () {
                s(function (e) {
                  switch (i) {
                    case 'align':
                      return 'motion';
                    case 'motion':
                      return 'stable';
                    default:
                  }
                  return e;
                }),
                  null === e || void 0 === e || e();
              }));
          }
          return (
            (0, l.useEffect)(
              function () {
                s('measure');
              },
              [e],
            ),
            (0, l.useEffect)(
              function () {
                switch (i) {
                  case 'measure':
                    t();
                    break;
                  default:
                }
                i &&
                  (u.current = (0, f.Z)(
                    (0, ht.Z)(
                      dt().mark(function e() {
                        var t, n;
                        return dt().wrap(function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                (t = mt.indexOf(i)),
                                  (n = mt[t + 1]),
                                  n && -1 !== t && s(n);
                              case 3:
                              case 'end':
                                return e.stop();
                            }
                        }, e);
                      }),
                    ),
                  ));
              },
              [i],
            ),
            (0, l.useEffect)(function () {
              return function () {
                (a.current = !0), c();
              };
            }, []),
            [i, p]
          );
        },
        gt = function (e) {
          var t = l.useState({ width: 0, height: 0 }),
            n = (0, k.Z)(t, 2),
            o = n[0],
            i = n[1];
          function r(e) {
            i({ width: e.offsetWidth, height: e.offsetHeight });
          }
          var u = l.useMemo(
            function () {
              var t = {};
              if (e) {
                var n = o.width,
                  i = o.height;
                -1 !== e.indexOf('height') && i
                  ? (t.height = i)
                  : -1 !== e.indexOf('minHeight') && i && (t.minHeight = i),
                  -1 !== e.indexOf('width') && n
                    ? (t.width = n)
                    : -1 !== e.indexOf('minWidth') && n && (t.minWidth = n);
              }
              return t;
            },
            [e, o],
          );
          return [u, r];
        },
        wt = l.forwardRef(function (e, t) {
          var n = e.visible,
            r = e.prefixCls,
            u = e.className,
            a = e.style,
            s = e.children,
            c = e.zIndex,
            p = e.stretch,
            f = e.destroyPopupOnHide,
            d = e.forceRender,
            h = e.align,
            m = e.point,
            v = e.getRootDomNode,
            g = e.getClassNameFromAlign,
            w = e.onAlign,
            y = e.onMouseEnter,
            b = e.onMouseLeave,
            T = e.onMouseDown,
            C = e.onTouchStart,
            M = (0, l.useRef)(),
            P = (0, l.useRef)(),
            E = (0, l.useState)(),
            S = (0, k.Z)(E, 2),
            R = S[0],
            H = S[1],
            N = gt(p),
            V = (0, k.Z)(N, 2),
            Z = V[0],
            A = V[1];
          function W() {
            p && A(v());
          }
          var L = vt(n, W),
            j = (0, k.Z)(L, 2),
            B = j[0],
            z = j[1],
            F = (0, l.useRef)();
          function Y() {
            return m || v;
          }
          function X() {
            var e;
            null === (e = M.current) || void 0 === e || e.forceAlign();
          }
          function I(e, t) {
            if ('align' === B) {
              var n = g(t);
              H(n),
                R !== n
                  ? Promise.resolve().then(function () {
                      X();
                    })
                  : z(function () {
                      var e;
                      null === (e = F.current) || void 0 === e || e.call(F);
                    }),
                null === w || void 0 === w || w(e, t);
            }
          }
          var U = (0, o.Z)({}, O(e));
          function _() {
            return new Promise(function (e) {
              F.current = e;
            });
          }
          ['onAppearEnd', 'onEnterEnd', 'onLeaveEnd'].forEach(function (e) {
            var t = U[e];
            U[e] = function (e, n) {
              return z(), null === t || void 0 === t ? void 0 : t(e, n);
            };
          }),
            l.useEffect(
              function () {
                U.motionName || 'motion' !== B || z();
              },
              [U.motionName, B],
            ),
            l.useImperativeHandle(t, function () {
              return {
                forceAlign: X,
                getElement: function () {
                  return P.current;
                },
              };
            });
          var q = (0, o.Z)(
              (0, o.Z)({}, Z),
              {},
              {
                zIndex: c,
                opacity: 'motion' !== B && 'stable' !== B && n ? 0 : void 0,
                pointerEvents: 'stable' === B ? void 0 : 'none',
              },
              a,
            ),
            $ = !0;
          !(null === h || void 0 === h ? void 0 : h.points) ||
            ('align' !== B && 'stable' !== B) ||
            ($ = !1);
          var Q = s;
          return (
            l.Children.count(s) > 1 &&
              (Q = l.createElement(
                'div',
                { className: ''.concat(r, '-content') },
                s,
              )),
            l.createElement(
              D.Z,
              (0, i.Z)(
                {
                  visible: n,
                  ref: P,
                  leavedClassName: ''.concat(r, '-hidden'),
                },
                U,
                {
                  onAppearPrepare: _,
                  onEnterPrepare: _,
                  removeOnLeave: f,
                  forceRender: d,
                },
              ),
              function (e, t) {
                var n = e.className,
                  i = e.style,
                  a = x()(r, u, R, n);
                return l.createElement(
                  pt,
                  {
                    target: Y(),
                    key: 'popup',
                    ref: M,
                    monitorWindowResize: !0,
                    disabled: $,
                    align: h,
                    onAlign: I,
                  },
                  l.createElement(
                    'div',
                    {
                      ref: t,
                      className: a,
                      onMouseEnter: y,
                      onMouseLeave: b,
                      onMouseDownCapture: T,
                      onTouchStartCapture: C,
                      style: (0, o.Z)((0, o.Z)({}, i), q),
                    },
                    Q,
                  ),
                );
              },
            )
          );
        });
      wt.displayName = 'PopupInner';
      var yt = wt,
        bt = l.forwardRef(function (e, t) {
          var n = e.prefixCls,
            r = e.visible,
            u = e.zIndex,
            a = e.children,
            s = e.mobile;
          s = void 0 === s ? {} : s;
          var c = s.popupClassName,
            p = s.popupStyle,
            f = s.popupMotion,
            d = void 0 === f ? {} : f,
            h = s.popupRender,
            m = l.useRef();
          l.useImperativeHandle(t, function () {
            return {
              forceAlign: function () {},
              getElement: function () {
                return m.current;
              },
            };
          });
          var v = (0, o.Z)({ zIndex: u }, p),
            g = a;
          return (
            l.Children.count(a) > 1 &&
              (g = l.createElement(
                'div',
                { className: ''.concat(n, '-content') },
                a,
              )),
            h && (g = h(g)),
            l.createElement(
              D.Z,
              (0, i.Z)({ visible: r, ref: m, removeOnLeave: !0 }, d),
              function (e, t) {
                var i = e.className,
                  r = e.style,
                  u = x()(n, c, i);
                return l.createElement(
                  'div',
                  { ref: t, className: u, style: (0, o.Z)((0, o.Z)({}, r), v) },
                  g,
                );
              },
            )
          );
        });
      bt.displayName = 'MobilePopupInner';
      var xt = bt,
        Tt = l.forwardRef(function (e, t) {
          var n = e.visible,
            r = e.mobile,
            u = (0, P.Z)(e, ['visible', 'mobile']),
            a = (0, l.useState)(n),
            s = (0, k.Z)(a, 2),
            c = s[0],
            p = s[1],
            f = (0, l.useState)(!1),
            d = (0, k.Z)(f, 2),
            h = d[0],
            m = d[1],
            v = (0, o.Z)((0, o.Z)({}, u), {}, { visible: c });
          (0, l.useEffect)(
            function () {
              p(n), n && r && m((0, E.Z)());
            },
            [n, r],
          );
          var g = h
            ? l.createElement(xt, (0, i.Z)({}, v, { mobile: r, ref: t }))
            : l.createElement(yt, (0, i.Z)({}, v, { ref: t }));
          return l.createElement('div', null, l.createElement(S, v), g);
        });
      Tt.displayName = 'Popup';
      var Ct = Tt,
        Mt = l.createContext(null),
        kt = Mt;
      function Pt() {}
      function Et() {
        return '';
      }
      function Dt(e) {
        return e ? e.ownerDocument : window.document;
      }
      var Ot = [
        'onClick',
        'onMouseDown',
        'onTouchStart',
        'onMouseEnter',
        'onMouseLeave',
        'onFocus',
        'onBlur',
        'onContextMenu',
      ];
      function St(e) {
        var t = (function (t) {
          (0, s.Z)(g, t);
          var n = (0, c.Z)(g);
          function g(e) {
            var t, o;
            return (
              (0, r.Z)(this, g),
              (t = n.call(this, e)),
              (t.popupRef = l.createRef()),
              (t.triggerRef = l.createRef()),
              (t.onMouseEnter = function (e) {
                var n = t.props.mouseEnterDelay;
                t.fireEvents('onMouseEnter', e),
                  t.delaySetPopupVisible(!0, n, n ? null : e);
              }),
              (t.onMouseMove = function (e) {
                t.fireEvents('onMouseMove', e), t.setPoint(e);
              }),
              (t.onMouseLeave = function (e) {
                t.fireEvents('onMouseLeave', e),
                  t.delaySetPopupVisible(!1, t.props.mouseLeaveDelay);
              }),
              (t.onPopupMouseEnter = function () {
                t.clearDelayTimer();
              }),
              (t.onPopupMouseLeave = function (e) {
                var n;
                (e.relatedTarget &&
                  !e.relatedTarget.setTimeout &&
                  d(
                    null === (n = t.popupRef.current) || void 0 === n
                      ? void 0
                      : n.getElement(),
                    e.relatedTarget,
                  )) ||
                  t.delaySetPopupVisible(!1, t.props.mouseLeaveDelay);
              }),
              (t.onFocus = function (e) {
                t.fireEvents('onFocus', e),
                  t.clearDelayTimer(),
                  t.isFocusToShow() &&
                    ((t.focusTime = Date.now()),
                    t.delaySetPopupVisible(!0, t.props.focusDelay));
              }),
              (t.onMouseDown = function (e) {
                t.fireEvents('onMouseDown', e), (t.preClickTime = Date.now());
              }),
              (t.onTouchStart = function (e) {
                t.fireEvents('onTouchStart', e), (t.preTouchTime = Date.now());
              }),
              (t.onBlur = function (e) {
                t.fireEvents('onBlur', e),
                  t.clearDelayTimer(),
                  t.isBlurToHide() &&
                    t.delaySetPopupVisible(!1, t.props.blurDelay);
              }),
              (t.onContextMenu = function (e) {
                e.preventDefault(),
                  t.fireEvents('onContextMenu', e),
                  t.setPopupVisible(!0, e);
              }),
              (t.onContextMenuClose = function () {
                t.isContextMenuToShow() && t.close();
              }),
              (t.onClick = function (e) {
                if ((t.fireEvents('onClick', e), t.focusTime)) {
                  var n;
                  if (
                    (t.preClickTime && t.preTouchTime
                      ? (n = Math.min(t.preClickTime, t.preTouchTime))
                      : t.preClickTime
                      ? (n = t.preClickTime)
                      : t.preTouchTime && (n = t.preTouchTime),
                    Math.abs(n - t.focusTime) < 20)
                  )
                    return;
                  t.focusTime = 0;
                }
                (t.preClickTime = 0),
                  (t.preTouchTime = 0),
                  t.isClickToShow() &&
                    (t.isClickToHide() || t.isBlurToHide()) &&
                    e &&
                    e.preventDefault &&
                    e.preventDefault();
                var o = !t.state.popupVisible;
                ((t.isClickToHide() && !o) || (o && t.isClickToShow())) &&
                  t.setPopupVisible(!t.state.popupVisible, e);
              }),
              (t.onPopupMouseDown = function () {
                var e;
                ((t.hasPopupMouseDown = !0),
                clearTimeout(t.mouseDownTimeout),
                (t.mouseDownTimeout = window.setTimeout(function () {
                  t.hasPopupMouseDown = !1;
                }, 0)),
                t.context) &&
                  (e = t.context).onPopupMouseDown.apply(e, arguments);
              }),
              (t.onDocumentClick = function (e) {
                if (!t.props.mask || t.props.maskClosable) {
                  var n = e.target,
                    o = t.getRootDomNode(),
                    i = t.getPopupDomNode();
                  (d(o, n) && !t.isContextMenuOnly()) ||
                    d(i, n) ||
                    t.hasPopupMouseDown ||
                    t.close();
                }
              }),
              (t.getRootDomNode = function () {
                var e = t.props.getTriggerDOMNode;
                if (e) return e(t.triggerRef.current);
                try {
                  var n = (0, h.Z)(t.triggerRef.current);
                  if (n) return n;
                } catch (o) {}
                return p.findDOMNode((0, a.Z)(t));
              }),
              (t.getPopupClassNameFromAlign = function (e) {
                var n = [],
                  o = t.props,
                  i = o.popupPlacement,
                  r = o.builtinPlacements,
                  u = o.prefixCls,
                  a = o.alignPoint,
                  s = o.getPopupClassNameFromAlign;
                return (
                  i && r && n.push(M(r, u, e, a)),
                  s && n.push(s(e)),
                  n.join(' ')
                );
              }),
              (t.getComponent = function () {
                var e = t.props,
                  n = e.prefixCls,
                  o = e.destroyPopupOnHide,
                  r = e.popupClassName,
                  u = e.onPopupAlign,
                  a = e.popupMotion,
                  s = e.popupAnimation,
                  c = e.popupTransitionName,
                  p = e.popupStyle,
                  f = e.mask,
                  d = e.maskAnimation,
                  h = e.maskTransitionName,
                  m = e.maskMotion,
                  v = e.zIndex,
                  g = e.popup,
                  w = e.stretch,
                  y = e.alignPoint,
                  b = e.mobile,
                  x = e.forceRender,
                  T = t.state,
                  C = T.popupVisible,
                  M = T.point,
                  k = t.getPopupAlign(),
                  P = {};
                return (
                  t.isMouseEnterToShow() &&
                    (P.onMouseEnter = t.onPopupMouseEnter),
                  t.isMouseLeaveToHide() &&
                    (P.onMouseLeave = t.onPopupMouseLeave),
                  (P.onMouseDown = t.onPopupMouseDown),
                  (P.onTouchStart = t.onPopupMouseDown),
                  l.createElement(
                    Ct,
                    (0, i.Z)(
                      {
                        prefixCls: n,
                        destroyPopupOnHide: o,
                        visible: C,
                        point: y && M,
                        className: r,
                        align: k,
                        onAlign: u,
                        animation: s,
                        getClassNameFromAlign: t.getPopupClassNameFromAlign,
                      },
                      P,
                      {
                        stretch: w,
                        getRootDomNode: t.getRootDomNode,
                        style: p,
                        mask: f,
                        zIndex: v,
                        transitionName: c,
                        maskAnimation: d,
                        maskTransitionName: h,
                        maskMotion: m,
                        ref: t.popupRef,
                        motion: a,
                        mobile: b,
                        forceRender: x,
                      },
                    ),
                    'function' === typeof g ? g() : g,
                  )
                );
              }),
              (t.attachParent = function (e) {
                f.Z.cancel(t.attachId);
                var n,
                  o = t.props,
                  i = o.getPopupContainer,
                  r = o.getDocument,
                  u = t.getRootDomNode();
                i
                  ? (u || 0 === i.length) && (n = i(u))
                  : (n = r(t.getRootDomNode()).body),
                  n
                    ? n.appendChild(e)
                    : (t.attachId = (0, f.Z)(function () {
                        t.attachParent(e);
                      }));
              }),
              (t.getContainer = function () {
                var e = t.props.getDocument,
                  n = e(t.getRootDomNode()).createElement('div');
                return (
                  (n.style.position = 'absolute'),
                  (n.style.top = '0'),
                  (n.style.left = '0'),
                  (n.style.width = '100%'),
                  t.attachParent(n),
                  n
                );
              }),
              (t.setPoint = function (e) {
                var n = t.props.alignPoint;
                n &&
                  e &&
                  t.setState({ point: { pageX: e.pageX, pageY: e.pageY } });
              }),
              (t.handlePortalUpdate = function () {
                t.state.prevPopupVisible !== t.state.popupVisible &&
                  t.props.afterPopupVisibleChange(t.state.popupVisible);
              }),
              (t.triggerContextValue = {
                onPopupMouseDown: t.onPopupMouseDown,
              }),
              (o =
                'popupVisible' in e
                  ? !!e.popupVisible
                  : !!e.defaultPopupVisible),
              (t.state = { prevPopupVisible: o, popupVisible: o }),
              Ot.forEach(function (e) {
                t['fire'.concat(e)] = function (n) {
                  t.fireEvents(e, n);
                };
              }),
              t
            );
          }
          return (
            (0, u.Z)(
              g,
              [
                {
                  key: 'componentDidMount',
                  value: function () {
                    this.componentDidUpdate();
                  },
                },
                {
                  key: 'componentDidUpdate',
                  value: function () {
                    var e,
                      t = this.props,
                      n = this.state;
                    if (n.popupVisible)
                      return (
                        this.clickOutsideHandler ||
                          (!this.isClickToHide() &&
                            !this.isContextMenuToShow()) ||
                          ((e = t.getDocument(this.getRootDomNode())),
                          (this.clickOutsideHandler = v(
                            e,
                            'mousedown',
                            this.onDocumentClick,
                          ))),
                        this.touchOutsideHandler ||
                          ((e = e || t.getDocument(this.getRootDomNode())),
                          (this.touchOutsideHandler = v(
                            e,
                            'touchstart',
                            this.onDocumentClick,
                          ))),
                        !this.contextMenuOutsideHandler1 &&
                          this.isContextMenuToShow() &&
                          ((e = e || t.getDocument(this.getRootDomNode())),
                          (this.contextMenuOutsideHandler1 = v(
                            e,
                            'scroll',
                            this.onContextMenuClose,
                          ))),
                        void (
                          !this.contextMenuOutsideHandler2 &&
                          this.isContextMenuToShow() &&
                          (this.contextMenuOutsideHandler2 = v(
                            window,
                            'blur',
                            this.onContextMenuClose,
                          ))
                        )
                      );
                    this.clearOutsideHandler();
                  },
                },
                {
                  key: 'componentWillUnmount',
                  value: function () {
                    this.clearDelayTimer(),
                      this.clearOutsideHandler(),
                      clearTimeout(this.mouseDownTimeout),
                      f.Z.cancel(this.attachId);
                  },
                },
                {
                  key: 'getPopupDomNode',
                  value: function () {
                    var e;
                    return (
                      (null === (e = this.popupRef.current) || void 0 === e
                        ? void 0
                        : e.getElement()) || null
                    );
                  },
                },
                {
                  key: 'getPopupAlign',
                  value: function () {
                    var e = this.props,
                      t = e.popupPlacement,
                      n = e.popupAlign,
                      o = e.builtinPlacements;
                    return t && o ? C(o, t, n) : n;
                  },
                },
                {
                  key: 'setPopupVisible',
                  value: function (e, t) {
                    var n = this.props.alignPoint,
                      o = this.state.popupVisible;
                    this.clearDelayTimer(),
                      o !== e &&
                        ('popupVisible' in this.props ||
                          this.setState({
                            popupVisible: e,
                            prevPopupVisible: o,
                          }),
                        this.props.onPopupVisibleChange(e)),
                      n && t && e && this.setPoint(t);
                  },
                },
                {
                  key: 'delaySetPopupVisible',
                  value: function (e, t, n) {
                    var o = this,
                      i = 1e3 * t;
                    if ((this.clearDelayTimer(), i)) {
                      var r = n ? { pageX: n.pageX, pageY: n.pageY } : null;
                      this.delayTimer = window.setTimeout(function () {
                        o.setPopupVisible(e, r), o.clearDelayTimer();
                      }, i);
                    } else this.setPopupVisible(e, n);
                  },
                },
                {
                  key: 'clearDelayTimer',
                  value: function () {
                    this.delayTimer &&
                      (clearTimeout(this.delayTimer), (this.delayTimer = null));
                  },
                },
                {
                  key: 'clearOutsideHandler',
                  value: function () {
                    this.clickOutsideHandler &&
                      (this.clickOutsideHandler.remove(),
                      (this.clickOutsideHandler = null)),
                      this.contextMenuOutsideHandler1 &&
                        (this.contextMenuOutsideHandler1.remove(),
                        (this.contextMenuOutsideHandler1 = null)),
                      this.contextMenuOutsideHandler2 &&
                        (this.contextMenuOutsideHandler2.remove(),
                        (this.contextMenuOutsideHandler2 = null)),
                      this.touchOutsideHandler &&
                        (this.touchOutsideHandler.remove(),
                        (this.touchOutsideHandler = null));
                  },
                },
                {
                  key: 'createTwoChains',
                  value: function (e) {
                    var t = this.props.children.props,
                      n = this.props;
                    return t[e] && n[e] ? this['fire'.concat(e)] : t[e] || n[e];
                  },
                },
                {
                  key: 'isClickToShow',
                  value: function () {
                    var e = this.props,
                      t = e.action,
                      n = e.showAction;
                    return (
                      -1 !== t.indexOf('click') || -1 !== n.indexOf('click')
                    );
                  },
                },
                {
                  key: 'isContextMenuOnly',
                  value: function () {
                    var e = this.props.action;
                    return (
                      'contextMenu' === e ||
                      (1 === e.length && 'contextMenu' === e[0])
                    );
                  },
                },
                {
                  key: 'isContextMenuToShow',
                  value: function () {
                    var e = this.props,
                      t = e.action,
                      n = e.showAction;
                    return (
                      -1 !== t.indexOf('contextMenu') ||
                      -1 !== n.indexOf('contextMenu')
                    );
                  },
                },
                {
                  key: 'isClickToHide',
                  value: function () {
                    var e = this.props,
                      t = e.action,
                      n = e.hideAction;
                    return (
                      -1 !== t.indexOf('click') || -1 !== n.indexOf('click')
                    );
                  },
                },
                {
                  key: 'isMouseEnterToShow',
                  value: function () {
                    var e = this.props,
                      t = e.action,
                      n = e.showAction;
                    return (
                      -1 !== t.indexOf('hover') ||
                      -1 !== n.indexOf('mouseEnter')
                    );
                  },
                },
                {
                  key: 'isMouseLeaveToHide',
                  value: function () {
                    var e = this.props,
                      t = e.action,
                      n = e.hideAction;
                    return (
                      -1 !== t.indexOf('hover') ||
                      -1 !== n.indexOf('mouseLeave')
                    );
                  },
                },
                {
                  key: 'isFocusToShow',
                  value: function () {
                    var e = this.props,
                      t = e.action,
                      n = e.showAction;
                    return (
                      -1 !== t.indexOf('focus') || -1 !== n.indexOf('focus')
                    );
                  },
                },
                {
                  key: 'isBlurToHide',
                  value: function () {
                    var e = this.props,
                      t = e.action,
                      n = e.hideAction;
                    return (
                      -1 !== t.indexOf('focus') || -1 !== n.indexOf('blur')
                    );
                  },
                },
                {
                  key: 'forcePopupAlign',
                  value: function () {
                    var e;
                    this.state.popupVisible &&
                      (null === (e = this.popupRef.current) ||
                        void 0 === e ||
                        e.forceAlign());
                  },
                },
                {
                  key: 'fireEvents',
                  value: function (e, t) {
                    var n = this.props.children.props[e];
                    n && n(t);
                    var o = this.props[e];
                    o && o(t);
                  },
                },
                {
                  key: 'close',
                  value: function () {
                    this.setPopupVisible(!1);
                  },
                },
                {
                  key: 'render',
                  value: function () {
                    var t = this.state.popupVisible,
                      n = this.props,
                      i = n.children,
                      r = n.forceRender,
                      u = n.alignPoint,
                      a = n.className,
                      s = n.autoDestroy,
                      c = l.Children.only(i),
                      p = { key: 'trigger' };
                    this.isContextMenuToShow()
                      ? (p.onContextMenu = this.onContextMenu)
                      : (p.onContextMenu =
                          this.createTwoChains('onContextMenu')),
                      this.isClickToHide() || this.isClickToShow()
                        ? ((p.onClick = this.onClick),
                          (p.onMouseDown = this.onMouseDown),
                          (p.onTouchStart = this.onTouchStart))
                        : ((p.onClick = this.createTwoChains('onClick')),
                          (p.onMouseDown = this.createTwoChains('onMouseDown')),
                          (p.onTouchStart =
                            this.createTwoChains('onTouchStart'))),
                      this.isMouseEnterToShow()
                        ? ((p.onMouseEnter = this.onMouseEnter),
                          u && (p.onMouseMove = this.onMouseMove))
                        : (p.onMouseEnter =
                            this.createTwoChains('onMouseEnter')),
                      this.isMouseLeaveToHide()
                        ? (p.onMouseLeave = this.onMouseLeave)
                        : (p.onMouseLeave =
                            this.createTwoChains('onMouseLeave')),
                      this.isFocusToShow() || this.isBlurToHide()
                        ? ((p.onFocus = this.onFocus), (p.onBlur = this.onBlur))
                        : ((p.onFocus = this.createTwoChains('onFocus')),
                          (p.onBlur = this.createTwoChains('onBlur')));
                    var f = x()(c && c.props && c.props.className, a);
                    f && (p.className = f);
                    var d = (0, o.Z)({}, p);
                    (0, m.Yr)(c) && (d.ref = (0, m.sQ)(this.triggerRef, c.ref));
                    var h,
                      v = l.cloneElement(c, d);
                    return (
                      (t || this.popupRef.current || r) &&
                        (h = l.createElement(
                          e,
                          {
                            key: 'portal',
                            getContainer: this.getContainer,
                            didUpdate: this.handlePortalUpdate,
                          },
                          this.getComponent(),
                        )),
                      !t && s && (h = null),
                      l.createElement(
                        kt.Provider,
                        { value: this.triggerContextValue },
                        v,
                        h,
                      )
                    );
                  },
                },
              ],
              [
                {
                  key: 'getDerivedStateFromProps',
                  value: function (e, t) {
                    var n = e.popupVisible,
                      o = {};
                    return (
                      void 0 !== n &&
                        t.popupVisible !== n &&
                        ((o.popupVisible = n),
                        (o.prevPopupVisible = t.popupVisible)),
                      o
                    );
                  },
                },
              ],
            ),
            g
          );
        })(l.Component);
        return (
          (t.contextType = kt),
          (t.defaultProps = {
            prefixCls: 'rc-trigger-popup',
            getPopupClassNameFromAlign: Et,
            getDocument: Dt,
            onPopupVisibleChange: Pt,
            afterPopupVisibleChange: Pt,
            onPopupAlign: Pt,
            popupClassName: '',
            mouseEnterDelay: 0,
            mouseLeaveDelay: 0.1,
            focusDelay: 0,
            blurDelay: 0.15,
            popupStyle: {},
            destroyPopupOnHide: !1,
            popupAlign: {},
            defaultPopupVisible: !1,
            mask: !1,
            maskClosable: !0,
            action: [],
            showAction: [],
            hideAction: [],
            autoDestroy: !1,
          }),
          t
        );
      }
      var Rt = St(y);
    },
    5110: function (e, t) {
      'use strict';
      t['Z'] = function (e) {
        if (!e) return !1;
        if (e.offsetParent) return !0;
        if (e.getBBox) {
          var t = e.getBBox();
          if (t.width || t.height) return !0;
        }
        if (e.getBoundingClientRect) {
          var n = e.getBoundingClientRect();
          if (n.width || n.height) return !0;
        }
        return !1;
      };
    },
    31131: function (e, t) {
      'use strict';
      t['Z'] = function () {
        if ('undefined' === typeof navigator || 'undefined' === typeof window)
          return !1;
        var e = navigator.userAgent || navigator.vendor || window.opera;
        return !(
          !/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
            e,
          ) &&
          !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
            null === e || void 0 === e ? void 0 : e.substr(0, 4),
          )
        );
      };
    },
  },
]);
