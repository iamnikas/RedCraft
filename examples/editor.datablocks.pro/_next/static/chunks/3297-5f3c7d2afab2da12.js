(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3297],
    {
      86010: function (t, e, n) {
        "use strict";
        function r(t) {
          var e,
            n,
            o = "";
          if ("string" === typeof t || "number" === typeof t) o += t;
          else if ("object" === typeof t)
            if (Array.isArray(t))
              for (e = 0; e < t.length; e++)
                t[e] && (n = r(t[e])) && (o && (o += " "), (o += n));
            else for (e in t) t[e] && (o && (o += " "), (o += e));
          return o;
        }
        function o() {
          for (var t, e, n = 0, o = ""; n < arguments.length; )
            (t = arguments[n++]) && (e = r(t)) && (o && (o += " "), (o += e));
          return o;
        }
        n.r(e),
          n.d(e, {
            default: function () {
              return o;
            },
          });
      },
      92703: function (t, e, n) {
        "use strict";
        var r = n(50414);
        function o() {}
        function i() {}
        (i.resetWarningCache = o),
          (t.exports = function () {
            function t(t, e, n, o, i, a) {
              if (a !== r) {
                var u = new Error(
                  "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types",
                );
                throw ((u.name = "Invariant Violation"), u);
              }
            }
            function e() {
              return t;
            }
            t.isRequired = t;
            var n = {
              array: t,
              bigint: t,
              bool: t,
              func: t,
              number: t,
              object: t,
              string: t,
              symbol: t,
              any: t,
              arrayOf: e,
              element: t,
              elementType: t,
              instanceOf: e,
              node: t,
              objectOf: e,
              oneOf: e,
              oneOfType: e,
              shape: e,
              exact: e,
              checkPropTypes: i,
              resetWarningCache: o,
            };
            return (n.PropTypes = n), n;
          });
      },
      45697: function (t, e, n) {
        t.exports = n(92703)();
      },
      50414: function (t) {
        "use strict";
        t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
      },
      75668: function (t, e, n) {
        "use strict";
        function r(t) {
          return (
            (r =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            r(t)
          );
        }
        Object.defineProperty(e, "__esModule", { value: !0 }),
          Object.defineProperty(e, "DraggableCore", {
            enumerable: !0,
            get: function () {
              return f.default;
            },
          }),
          (e.default = void 0);
        var o = (function (t, e) {
            if (!e && t && t.__esModule) return t;
            if (null === t || ("object" !== r(t) && "function" !== typeof t))
              return { default: t };
            var n = g(e);
            if (n && n.has(t)) return n.get(t);
            var o = {},
              i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in t)
              if ("default" !== a && Object.prototype.hasOwnProperty.call(t, a)) {
                var u = i ? Object.getOwnPropertyDescriptor(t, a) : null;
                u && (u.get || u.set)
                  ? Object.defineProperty(o, a, u)
                  : (o[a] = t[a]);
              }
            (o.default = t), n && n.set(t, o);
            return o;
          })(n(67294)),
          i = p(n(45697)),
          a = p(n(73935)),
          u = p(n(86010)),
          c = n(81825),
          s = n(2849),
          l = n(9280),
          f = p(n(80783)),
          h = p(n(55904)),
          d = [
            "axis",
            "bounds",
            "children",
            "defaultPosition",
            "defaultClassName",
            "defaultClassNameDragging",
            "defaultClassNameDragged",
            "position",
            "positionOffset",
            "scale",
          ];
        function p(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function g(t) {
          if ("function" !== typeof WeakMap) return null;
          var e = new WeakMap(),
            n = new WeakMap();
          return (g = function (t) {
            return t ? n : e;
          })(t);
        }
        function y() {
          return (
            (y =
              Object.assign ||
              function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = arguments[e];
                  for (var r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                }
                return t;
              }),
            y.apply(this, arguments)
          );
        }
        function v(t, e) {
          if (null == t) return {};
          var n,
            r,
            o = (function (t, e) {
              if (null == t) return {};
              var n,
                r,
                o = {},
                i = Object.keys(t);
              for (r = 0; r < i.length; r++)
                (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
              return o;
            })(t, e);
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
        function m(t, e) {
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
        function b(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? m(Object(n), !0).forEach(function (e) {
                  D(t, e, n[e]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : m(Object(n)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(n, e),
                    );
                  });
          }
          return t;
        }
        function w(t, e) {
          return (
            (function (t) {
              if (Array.isArray(t)) return t;
            })(t) ||
            (function (t, e) {
              var n =
                null == t
                  ? null
                  : ("undefined" !== typeof Symbol && t[Symbol.iterator]) ||
                    t["@@iterator"];
              if (null == n) return;
              var r,
                o,
                i = [],
                a = !0,
                u = !1;
              try {
                for (
                  n = n.call(t);
                  !(a = (r = n.next()).done) &&
                  (i.push(r.value), !e || i.length !== e);
                  a = !0
                );
              } catch (c) {
                (u = !0), (o = c);
              } finally {
                try {
                  a || null == n.return || n.return();
                } finally {
                  if (u) throw o;
                }
              }
              return i;
            })(t, e) ||
            (function (t, e) {
              if (!t) return;
              if ("string" === typeof t) return _(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return _(t, e);
            })(t, e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
              );
            })()
          );
        }
        function _(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
          return r;
        }
        function O(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        function x(t, e) {
          return (
            (x =
              Object.setPrototypeOf ||
              function (t, e) {
                return (t.__proto__ = e), t;
              }),
            x(t, e)
          );
        }
        function S(t) {
          var e = (function () {
            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" === typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {}),
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            var n,
              r = j(t);
            if (e) {
              var o = j(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return E(this, n);
          };
        }
        function E(t, e) {
          if (e && ("object" === r(e) || "function" === typeof e)) return e;
          if (void 0 !== e)
            throw new TypeError(
              "Derived constructors may only return object or undefined",
            );
          return P(t);
        }
        function P(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return t;
        }
        function j(t) {
          return (
            (j = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            j(t)
          );
        }
        function D(t, e, n) {
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
        var N = (function (t) {
          !(function (t, e) {
            if ("function" !== typeof e && null !== e)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(e && e.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              Object.defineProperty(t, "prototype", { writable: !1 }),
              e && x(t, e);
          })(l, t);
          var e,
            n,
            r,
            i = S(l);
          function l(t) {
            var e;
            return (
              (function (t, e) {
                if (!(t instanceof e))
                  throw new TypeError("Cannot call a class as a function");
              })(this, l),
              D(P((e = i.call(this, t))), "onDragStart", function (t, n) {
                if (
                  ((0, h.default)("Draggable: onDragStart: %j", n),
                  !1 === e.props.onStart(t, (0, s.createDraggableData)(P(e), n)))
                )
                  return !1;
                e.setState({ dragging: !0, dragged: !0 });
              }),
              D(P(e), "onDrag", function (t, n) {
                if (!e.state.dragging) return !1;
                (0, h.default)("Draggable: onDrag: %j", n);
                var r = (0, s.createDraggableData)(P(e), n),
                  o = { x: r.x, y: r.y };
                if (e.props.bounds) {
                  var i = o.x,
                    a = o.y;
                  (o.x += e.state.slackX), (o.y += e.state.slackY);
                  var u = w((0, s.getBoundPosition)(P(e), o.x, o.y), 2),
                    c = u[0],
                    l = u[1];
                  (o.x = c),
                    (o.y = l),
                    (o.slackX = e.state.slackX + (i - o.x)),
                    (o.slackY = e.state.slackY + (a - o.y)),
                    (r.x = o.x),
                    (r.y = o.y),
                    (r.deltaX = o.x - e.state.x),
                    (r.deltaY = o.y - e.state.y);
                }
                if (!1 === e.props.onDrag(t, r)) return !1;
                e.setState(o);
              }),
              D(P(e), "onDragStop", function (t, n) {
                if (!e.state.dragging) return !1;
                if (!1 === e.props.onStop(t, (0, s.createDraggableData)(P(e), n)))
                  return !1;
                (0, h.default)("Draggable: onDragStop: %j", n);
                var r = { dragging: !1, slackX: 0, slackY: 0 };
                if (Boolean(e.props.position)) {
                  var o = e.props.position,
                    i = o.x,
                    a = o.y;
                  (r.x = i), (r.y = a);
                }
                e.setState(r);
              }),
              (e.state = {
                dragging: !1,
                dragged: !1,
                x: t.position ? t.position.x : t.defaultPosition.x,
                y: t.position ? t.position.y : t.defaultPosition.y,
                prevPropsPosition: b({}, t.position),
                slackX: 0,
                slackY: 0,
                isElementSVG: !1,
              }),
              !t.position ||
                t.onDrag ||
                t.onStop ||
                console.warn(
                  "A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.",
                ),
              e
            );
          }
          return (
            (e = l),
            (r = [
              {
                key: "getDerivedStateFromProps",
                value: function (t, e) {
                  var n = t.position,
                    r = e.prevPropsPosition;
                  return !n || (r && n.x === r.x && n.y === r.y)
                    ? null
                    : ((0, h.default)("Draggable: getDerivedStateFromProps %j", {
                        position: n,
                        prevPropsPosition: r,
                      }),
                      { x: n.x, y: n.y, prevPropsPosition: b({}, n) });
                },
              },
            ]),
            (n = [
              {
                key: "componentDidMount",
                value: function () {
                  "undefined" !== typeof window.SVGElement &&
                    this.findDOMNode() instanceof window.SVGElement &&
                    this.setState({ isElementSVG: !0 });
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.setState({ dragging: !1 });
                },
              },
              {
                key: "findDOMNode",
                value: function () {
                  var t, e, n;
                  return null !==
                    (t =
                      null === (e = this.props) ||
                      void 0 === e ||
                      null === (n = e.nodeRef) ||
                      void 0 === n
                        ? void 0
                        : n.current) && void 0 !== t
                    ? t
                    : a.default.findDOMNode(this);
                },
              },
              {
                key: "render",
                value: function () {
                  var t,
                    e = this.props,
                    n = (e.axis, e.bounds, e.children),
                    r = e.defaultPosition,
                    i = e.defaultClassName,
                    a = e.defaultClassNameDragging,
                    l = e.defaultClassNameDragged,
                    h = e.position,
                    p = e.positionOffset,
                    g = (e.scale, v(e, d)),
                    m = {},
                    w = null,
                    _ = !Boolean(h) || this.state.dragging,
                    O = h || r,
                    x = {
                      x: (0, s.canDragX)(this) && _ ? this.state.x : O.x,
                      y: (0, s.canDragY)(this) && _ ? this.state.y : O.y,
                    };
                  this.state.isElementSVG
                    ? (w = (0, c.createSVGTransform)(x, p))
                    : (m = (0, c.createCSSTransform)(x, p));
                  var S = (0, u.default)(
                    n.props.className || "",
                    i,
                    (D((t = {}), a, this.state.dragging),
                    D(t, l, this.state.dragged),
                    t),
                  );
                  return o.createElement(
                    f.default,
                    y({}, g, {
                      onStart: this.onDragStart,
                      onDrag: this.onDrag,
                      onStop: this.onDragStop,
                    }),
                    o.cloneElement(o.Children.only(n), {
                      className: S,
                      style: b(b({}, n.props.style), m),
                      transform: w,
                    }),
                  );
                },
              },
            ]) && O(e.prototype, n),
            r && O(e, r),
            Object.defineProperty(e, "prototype", { writable: !1 }),
            l
          );
        })(o.Component);
        (e.default = N),
          D(N, "displayName", "Draggable"),
          D(
            N,
            "propTypes",
            b(
              b({}, f.default.propTypes),
              {},
              {
                axis: i.default.oneOf(["both", "x", "y", "none"]),
                bounds: i.default.oneOfType([
                  i.default.shape({
                    left: i.default.number,
                    right: i.default.number,
                    top: i.default.number,
                    bottom: i.default.number,
                  }),
                  i.default.string,
                  i.default.oneOf([!1]),
                ]),
                defaultClassName: i.default.string,
                defaultClassNameDragging: i.default.string,
                defaultClassNameDragged: i.default.string,
                defaultPosition: i.default.shape({
                  x: i.default.number,
                  y: i.default.number,
                }),
                positionOffset: i.default.shape({
                  x: i.default.oneOfType([i.default.number, i.default.string]),
                  y: i.default.oneOfType([i.default.number, i.default.string]),
                }),
                position: i.default.shape({
                  x: i.default.number,
                  y: i.default.number,
                }),
                className: l.dontSetMe,
                style: l.dontSetMe,
                transform: l.dontSetMe,
              },
            ),
          ),
          D(
            N,
            "defaultProps",
            b(
              b({}, f.default.defaultProps),
              {},
              {
                axis: "both",
                bounds: !1,
                defaultClassName: "react-draggable",
                defaultClassNameDragging: "react-draggable-dragging",
                defaultClassNameDragged: "react-draggable-dragged",
                defaultPosition: { x: 0, y: 0 },
                scale: 1,
              },
            ),
          );
      },
      80783: function (t, e, n) {
        "use strict";
        function r(t) {
          return (
            (r =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            r(t)
          );
        }
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0);
        var o = (function (t, e) {
            if (!e && t && t.__esModule) return t;
            if (null === t || ("object" !== r(t) && "function" !== typeof t))
              return { default: t };
            var n = h(e);
            if (n && n.has(t)) return n.get(t);
            var o = {},
              i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var a in t)
              if ("default" !== a && Object.prototype.hasOwnProperty.call(t, a)) {
                var u = i ? Object.getOwnPropertyDescriptor(t, a) : null;
                u && (u.get || u.set)
                  ? Object.defineProperty(o, a, u)
                  : (o[a] = t[a]);
              }
            (o.default = t), n && n.set(t, o);
            return o;
          })(n(67294)),
          i = f(n(45697)),
          a = f(n(73935)),
          u = n(81825),
          c = n(2849),
          s = n(9280),
          l = f(n(55904));
        function f(t) {
          return t && t.__esModule ? t : { default: t };
        }
        function h(t) {
          if ("function" !== typeof WeakMap) return null;
          var e = new WeakMap(),
            n = new WeakMap();
          return (h = function (t) {
            return t ? n : e;
          })(t);
        }
        function d(t, e) {
          return (
            (function (t) {
              if (Array.isArray(t)) return t;
            })(t) ||
            (function (t, e) {
              var n =
                null == t
                  ? null
                  : ("undefined" !== typeof Symbol && t[Symbol.iterator]) ||
                    t["@@iterator"];
              if (null == n) return;
              var r,
                o,
                i = [],
                a = !0,
                u = !1;
              try {
                for (
                  n = n.call(t);
                  !(a = (r = n.next()).done) &&
                  (i.push(r.value), !e || i.length !== e);
                  a = !0
                );
              } catch (c) {
                (u = !0), (o = c);
              } finally {
                try {
                  a || null == n.return || n.return();
                } finally {
                  if (u) throw o;
                }
              }
              return i;
            })(t, e) ||
            (function (t, e) {
              if (!t) return;
              if ("string" === typeof t) return p(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              "Object" === n && t.constructor && (n = t.constructor.name);
              if ("Map" === n || "Set" === n) return Array.from(t);
              if (
                "Arguments" === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return p(t, e);
            })(t, e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
              );
            })()
          );
        }
        function p(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
          return r;
        }
        function g(t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        }
        function y(t, e) {
          for (var n = 0; n < e.length; n++) {
            var r = e[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(t, r.key, r);
          }
        }
        function v(t, e) {
          return (
            (v =
              Object.setPrototypeOf ||
              function (t, e) {
                return (t.__proto__ = e), t;
              }),
            v(t, e)
          );
        }
        function m(t) {
          var e = (function () {
            if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" === typeof Proxy) return !0;
            try {
              return (
                Boolean.prototype.valueOf.call(
                  Reflect.construct(Boolean, [], function () {}),
                ),
                !0
              );
            } catch (t) {
              return !1;
            }
          })();
          return function () {
            var n,
              r = _(t);
            if (e) {
              var o = _(this).constructor;
              n = Reflect.construct(r, arguments, o);
            } else n = r.apply(this, arguments);
            return b(this, n);
          };
        }
        function b(t, e) {
          if (e && ("object" === r(e) || "function" === typeof e)) return e;
          if (void 0 !== e)
            throw new TypeError(
              "Derived constructors may only return object or undefined",
            );
          return w(t);
        }
        function w(t) {
          if (void 0 === t)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called",
            );
          return t;
        }
        function _(t) {
          return (
            (_ = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (t) {
                  return t.__proto__ || Object.getPrototypeOf(t);
                }),
            _(t)
          );
        }
        function O(t, e, n) {
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
        var x = { start: "touchstart", move: "touchmove", stop: "touchend" },
          S = { start: "mousedown", move: "mousemove", stop: "mouseup" },
          E = S,
          P = (function (t) {
            !(function (t, e) {
              if ("function" !== typeof e && null !== e)
                throw new TypeError(
                  "Super expression must either be null or a function",
                );
              (t.prototype = Object.create(e && e.prototype, {
                constructor: { value: t, writable: !0, configurable: !0 },
              })),
                Object.defineProperty(t, "prototype", { writable: !1 }),
                e && v(t, e);
            })(s, t);
            var e,
              n,
              r,
              i = m(s);
            function s() {
              var t;
              g(this, s);
              for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
                n[r] = arguments[r];
              return (
                O(w((t = i.call.apply(i, [this].concat(n)))), "state", {
                  dragging: !1,
                  lastX: NaN,
                  lastY: NaN,
                  touchIdentifier: null,
                }),
                O(w(t), "mounted", !1),
                O(w(t), "handleDragStart", function (e) {
                  if (
                    (t.props.onMouseDown(e),
                    !t.props.allowAnyClick &&
                      "number" === typeof e.button &&
                      0 !== e.button)
                  )
                    return !1;
                  var n = t.findDOMNode();
                  if (!n || !n.ownerDocument || !n.ownerDocument.body)
                    throw new Error("<DraggableCore> not mounted on DragStart!");
                  var r = n.ownerDocument;
                  if (
                    !(
                      t.props.disabled ||
                      !(e.target instanceof r.defaultView.Node) ||
                      (t.props.handle &&
                        !(0, u.matchesSelectorAndParentsTo)(
                          e.target,
                          t.props.handle,
                          n,
                        )) ||
                      (t.props.cancel &&
                        (0, u.matchesSelectorAndParentsTo)(
                          e.target,
                          t.props.cancel,
                          n,
                        ))
                    )
                  ) {
                    "touchstart" === e.type && e.preventDefault();
                    var o = (0, u.getTouchIdentifier)(e);
                    t.setState({ touchIdentifier: o });
                    var i = (0, c.getControlPosition)(e, o, w(t));
                    if (null != i) {
                      var a = i.x,
                        s = i.y,
                        f = (0, c.createCoreData)(w(t), a, s);
                      (0, l.default)("DraggableCore: handleDragStart: %j", f),
                        (0, l.default)("calling", t.props.onStart),
                        !1 !== t.props.onStart(e, f) &&
                          !1 !== t.mounted &&
                          (t.props.enableUserSelectHack &&
                            (0, u.addUserSelectStyles)(r),
                          t.setState({ dragging: !0, lastX: a, lastY: s }),
                          (0, u.addEvent)(r, E.move, t.handleDrag),
                          (0, u.addEvent)(r, E.stop, t.handleDragStop));
                    }
                  }
                }),
                O(w(t), "handleDrag", function (e) {
                  var n = (0, c.getControlPosition)(
                    e,
                    t.state.touchIdentifier,
                    w(t),
                  );
                  if (null != n) {
                    var r = n.x,
                      o = n.y;
                    if (Array.isArray(t.props.grid)) {
                      var i = r - t.state.lastX,
                        a = o - t.state.lastY,
                        u = d((0, c.snapToGrid)(t.props.grid, i, a), 2);
                      if (((i = u[0]), (a = u[1]), !i && !a)) return;
                      (r = t.state.lastX + i), (o = t.state.lastY + a);
                    }
                    var s = (0, c.createCoreData)(w(t), r, o);
                    if (
                      ((0, l.default)("DraggableCore: handleDrag: %j", s),
                      !1 !== t.props.onDrag(e, s) && !1 !== t.mounted)
                    )
                      t.setState({ lastX: r, lastY: o });
                    else
                      try {
                        t.handleDragStop(new MouseEvent("mouseup"));
                      } catch (h) {
                        var f = document.createEvent("MouseEvents");
                        f.initMouseEvent(
                          "mouseup",
                          !0,
                          !0,
                          window,
                          0,
                          0,
                          0,
                          0,
                          0,
                          !1,
                          !1,
                          !1,
                          !1,
                          0,
                          null,
                        ),
                          t.handleDragStop(f);
                      }
                  }
                }),
                O(w(t), "handleDragStop", function (e) {
                  if (t.state.dragging) {
                    var n = (0, c.getControlPosition)(
                      e,
                      t.state.touchIdentifier,
                      w(t),
                    );
                    if (null != n) {
                      var r = n.x,
                        o = n.y;
                      if (Array.isArray(t.props.grid)) {
                        var i = r - t.state.lastX || 0,
                          a = o - t.state.lastY || 0,
                          s = d((0, c.snapToGrid)(t.props.grid, i, a), 2);
                        (i = s[0]),
                          (a = s[1]),
                          (r = t.state.lastX + i),
                          (o = t.state.lastY + a);
                      }
                      var f = (0, c.createCoreData)(w(t), r, o);
                      if (!1 === t.props.onStop(e, f) || !1 === t.mounted)
                        return !1;
                      var h = t.findDOMNode();
                      h &&
                        t.props.enableUserSelectHack &&
                        (0, u.removeUserSelectStyles)(h.ownerDocument),
                        (0, l.default)("DraggableCore: handleDragStop: %j", f),
                        t.setState({ dragging: !1, lastX: NaN, lastY: NaN }),
                        h &&
                          ((0, l.default)("DraggableCore: Removing handlers"),
                          (0, u.removeEvent)(
                            h.ownerDocument,
                            E.move,
                            t.handleDrag,
                          ),
                          (0, u.removeEvent)(
                            h.ownerDocument,
                            E.stop,
                            t.handleDragStop,
                          ));
                    }
                  }
                }),
                O(w(t), "onMouseDown", function (e) {
                  return (E = S), t.handleDragStart(e);
                }),
                O(w(t), "onMouseUp", function (e) {
                  return (E = S), t.handleDragStop(e);
                }),
                O(w(t), "onTouchStart", function (e) {
                  return (E = x), t.handleDragStart(e);
                }),
                O(w(t), "onTouchEnd", function (e) {
                  return (E = x), t.handleDragStop(e);
                }),
                t
              );
            }
            return (
              (e = s),
              (n = [
                {
                  key: "componentDidMount",
                  value: function () {
                    this.mounted = !0;
                    var t = this.findDOMNode();
                    t &&
                      (0, u.addEvent)(t, x.start, this.onTouchStart, {
                        passive: !1,
                      });
                  },
                },
                {
                  key: "componentWillUnmount",
                  value: function () {
                    this.mounted = !1;
                    var t = this.findDOMNode();
                    if (t) {
                      var e = t.ownerDocument;
                      (0, u.removeEvent)(e, S.move, this.handleDrag),
                        (0, u.removeEvent)(e, x.move, this.handleDrag),
                        (0, u.removeEvent)(e, S.stop, this.handleDragStop),
                        (0, u.removeEvent)(e, x.stop, this.handleDragStop),
                        (0, u.removeEvent)(t, x.start, this.onTouchStart, {
                          passive: !1,
                        }),
                        this.props.enableUserSelectHack &&
                          (0, u.removeUserSelectStyles)(e);
                    }
                  },
                },
                {
                  key: "findDOMNode",
                  value: function () {
                    var t, e, n;
                    return null !== (t = this.props) && void 0 !== t && t.nodeRef
                      ? null === (e = this.props) ||
                        void 0 === e ||
                        null === (n = e.nodeRef) ||
                        void 0 === n
                        ? void 0
                        : n.current
                      : a.default.findDOMNode(this);
                  },
                },
                {
                  key: "render",
                  value: function () {
                    return o.cloneElement(o.Children.only(this.props.children), {
                      onMouseDown: this.onMouseDown,
                      onMouseUp: this.onMouseUp,
                      onTouchEnd: this.onTouchEnd,
                    });
                  },
                },
              ]) && y(e.prototype, n),
              r && y(e, r),
              Object.defineProperty(e, "prototype", { writable: !1 }),
              s
            );
          })(o.Component);
        (e.default = P),
          O(P, "displayName", "DraggableCore"),
          O(P, "propTypes", {
            allowAnyClick: i.default.bool,
            disabled: i.default.bool,
            enableUserSelectHack: i.default.bool,
            offsetParent: function (t, e) {
              if (t[e] && 1 !== t[e].nodeType)
                throw new Error("Draggable's offsetParent must be a DOM Node.");
            },
            grid: i.default.arrayOf(i.default.number),
            handle: i.default.string,
            cancel: i.default.string,
            nodeRef: i.default.object,
            onStart: i.default.func,
            onDrag: i.default.func,
            onStop: i.default.func,
            onMouseDown: i.default.func,
            scale: i.default.number,
            className: s.dontSetMe,
            style: s.dontSetMe,
            transform: s.dontSetMe,
          }),
          O(P, "defaultProps", {
            allowAnyClick: !1,
            disabled: !1,
            enableUserSelectHack: !0,
            onStart: function () {},
            onDrag: function () {},
            onStop: function () {},
            onMouseDown: function () {},
            scale: 1,
          });
      },
      61193: function (t, e, n) {
        "use strict";
        var r = n(75668),
          o = r.default,
          i = r.DraggableCore;
        (t.exports = o), (t.exports.default = o), (t.exports.DraggableCore = i);
      },
      81825: function (t, e, n) {
        "use strict";
        function r(t) {
          return (
            (r =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            r(t)
          );
        }
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.addClassName = d),
          (e.addEvent = function (t, e, n, r) {
            if (!t) return;
            var o = c({ capture: !0 }, r);
            t.addEventListener
              ? t.addEventListener(e, n, o)
              : t.attachEvent
                ? t.attachEvent("on" + e, n)
                : (t["on" + e] = n);
          }),
          (e.addUserSelectStyles = function (t) {
            if (!t) return;
            var e = t.getElementById("react-draggable-style-el");
            e ||
              (((e = t.createElement("style")).type = "text/css"),
              (e.id = "react-draggable-style-el"),
              (e.innerHTML =
                ".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n"),
              (e.innerHTML +=
                ".react-draggable-transparent-selection *::selection {all: inherit;}\n"),
              t.getElementsByTagName("head")[0].appendChild(e));
            t.body && d(t.body, "react-draggable-transparent-selection");
          }),
          (e.createCSSTransform = function (t, e) {
            var n = h(t, e, "px");
            return s({}, (0, i.browserPrefixToKey)("transform", i.default), n);
          }),
          (e.createSVGTransform = function (t, e) {
            return h(t, e, "");
          }),
          (e.getTouch = function (t, e) {
            return (
              (t.targetTouches &&
                (0, o.findInArray)(t.targetTouches, function (t) {
                  return e === t.identifier;
                })) ||
              (t.changedTouches &&
                (0, o.findInArray)(t.changedTouches, function (t) {
                  return e === t.identifier;
                }))
            );
          }),
          (e.getTouchIdentifier = function (t) {
            if (t.targetTouches && t.targetTouches[0])
              return t.targetTouches[0].identifier;
            if (t.changedTouches && t.changedTouches[0])
              return t.changedTouches[0].identifier;
          }),
          (e.getTranslation = h),
          (e.innerHeight = function (t) {
            var e = t.clientHeight,
              n = t.ownerDocument.defaultView.getComputedStyle(t);
            return (
              (e -= (0, o.int)(n.paddingTop)), (e -= (0, o.int)(n.paddingBottom))
            );
          }),
          (e.innerWidth = function (t) {
            var e = t.clientWidth,
              n = t.ownerDocument.defaultView.getComputedStyle(t);
            return (
              (e -= (0, o.int)(n.paddingLeft)), (e -= (0, o.int)(n.paddingRight))
            );
          }),
          (e.matchesSelector = f),
          (e.matchesSelectorAndParentsTo = function (t, e, n) {
            var r = t;
            do {
              if (f(r, e)) return !0;
              if (r === n) return !1;
              r = r.parentNode;
            } while (r);
            return !1;
          }),
          (e.offsetXYFromParent = function (t, e, n) {
            var r =
                e === e.ownerDocument.body
                  ? { left: 0, top: 0 }
                  : e.getBoundingClientRect(),
              o = (t.clientX + e.scrollLeft - r.left) / n,
              i = (t.clientY + e.scrollTop - r.top) / n;
            return { x: o, y: i };
          }),
          (e.outerHeight = function (t) {
            var e = t.clientHeight,
              n = t.ownerDocument.defaultView.getComputedStyle(t);
            return (
              (e += (0, o.int)(n.borderTopWidth)),
              (e += (0, o.int)(n.borderBottomWidth))
            );
          }),
          (e.outerWidth = function (t) {
            var e = t.clientWidth,
              n = t.ownerDocument.defaultView.getComputedStyle(t);
            return (
              (e += (0, o.int)(n.borderLeftWidth)),
              (e += (0, o.int)(n.borderRightWidth))
            );
          }),
          (e.removeClassName = p),
          (e.removeEvent = function (t, e, n, r) {
            if (!t) return;
            var o = c({ capture: !0 }, r);
            t.removeEventListener
              ? t.removeEventListener(e, n, o)
              : t.detachEvent
                ? t.detachEvent("on" + e, n)
                : (t["on" + e] = null);
          }),
          (e.removeUserSelectStyles = function (t) {
            if (!t) return;
            try {
              if (
                (t.body && p(t.body, "react-draggable-transparent-selection"),
                t.selection)
              )
                t.selection.empty();
              else {
                var e = (t.defaultView || window).getSelection();
                e && "Caret" !== e.type && e.removeAllRanges();
              }
            } catch (n) {}
          });
        var o = n(9280),
          i = (function (t, e) {
            if (!e && t && t.__esModule) return t;
            if (null === t || ("object" !== r(t) && "function" !== typeof t))
              return { default: t };
            var n = a(e);
            if (n && n.has(t)) return n.get(t);
            var o = {},
              i = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var u in t)
              if ("default" !== u && Object.prototype.hasOwnProperty.call(t, u)) {
                var c = i ? Object.getOwnPropertyDescriptor(t, u) : null;
                c && (c.get || c.set)
                  ? Object.defineProperty(o, u, c)
                  : (o[u] = t[u]);
              }
            (o.default = t), n && n.set(t, o);
            return o;
          })(n(38650));
        function a(t) {
          if ("function" !== typeof WeakMap) return null;
          var e = new WeakMap(),
            n = new WeakMap();
          return (a = function (t) {
            return t ? n : e;
          })(t);
        }
        function u(t, e) {
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
              ? u(Object(n), !0).forEach(function (e) {
                  s(t, e, n[e]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : u(Object(n)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(n, e),
                    );
                  });
          }
          return t;
        }
        function s(t, e, n) {
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
        var l = "";
        function f(t, e) {
          return (
            l ||
              (l = (0, o.findInArray)(
                [
                  "matches",
                  "webkitMatchesSelector",
                  "mozMatchesSelector",
                  "msMatchesSelector",
                  "oMatchesSelector",
                ],
                function (e) {
                  return (0, o.isFunction)(t[e]);
                },
              )),
            !!(0, o.isFunction)(t[l]) && t[l](e)
          );
        }
        function h(t, e, n) {
          var r = t.x,
            o = t.y,
            i = "translate(".concat(r).concat(n, ",").concat(o).concat(n, ")");
          if (e) {
            var a = "".concat("string" === typeof e.x ? e.x : e.x + n),
              u = "".concat("string" === typeof e.y ? e.y : e.y + n);
            i = "translate(".concat(a, ", ").concat(u, ")") + i;
          }
          return i;
        }
        function d(t, e) {
          t.classList
            ? t.classList.add(e)
            : t.className.match(new RegExp("(?:^|\\s)".concat(e, "(?!\\S)"))) ||
              (t.className += " ".concat(e));
        }
        function p(t, e) {
          t.classList
            ? t.classList.remove(e)
            : (t.className = t.className.replace(
                new RegExp("(?:^|\\s)".concat(e, "(?!\\S)"), "g"),
                "",
              ));
        }
      },
      38650: function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.browserPrefixToKey = o),
          (e.browserPrefixToStyle = function (t, e) {
            return e ? "-".concat(e.toLowerCase(), "-").concat(t) : t;
          }),
          (e.default = void 0),
          (e.getPrefix = r);
        var n = ["Moz", "Webkit", "O", "ms"];
        function r() {
          var t,
            e,
            r =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "transform";
          if ("undefined" === typeof window) return "";
          var i =
            null === (t = window.document) ||
            void 0 === t ||
            null === (e = t.documentElement) ||
            void 0 === e
              ? void 0
              : e.style;
          if (!i) return "";
          if (r in i) return "";
          for (var a = 0; a < n.length; a++) if (o(r, n[a]) in i) return n[a];
          return "";
        }
        function o(t, e) {
          return e
            ? "".concat(e).concat(
                (function (t) {
                  for (var e = "", n = !0, r = 0; r < t.length; r++)
                    n
                      ? ((e += t[r].toUpperCase()), (n = !1))
                      : "-" === t[r]
                        ? (n = !0)
                        : (e += t[r]);
                  return e;
                })(t),
              )
            : t;
        }
        var i = r();
        e.default = i;
      },
      55904: function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = function () {
            0;
          });
      },
      2849: function (t, e, n) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.canDragX = function (t) {
            return "both" === t.props.axis || "x" === t.props.axis;
          }),
          (e.canDragY = function (t) {
            return "both" === t.props.axis || "y" === t.props.axis;
          }),
          (e.createCoreData = function (t, e, n) {
            var o = t.state,
              a = !(0, r.isNum)(o.lastX),
              u = i(t);
            return a
              ? { node: u, deltaX: 0, deltaY: 0, lastX: e, lastY: n, x: e, y: n }
              : {
                  node: u,
                  deltaX: e - o.lastX,
                  deltaY: n - o.lastY,
                  lastX: o.lastX,
                  lastY: o.lastY,
                  x: e,
                  y: n,
                };
          }),
          (e.createDraggableData = function (t, e) {
            var n = t.props.scale;
            return {
              node: e.node,
              x: t.state.x + e.deltaX / n,
              y: t.state.y + e.deltaY / n,
              deltaX: e.deltaX / n,
              deltaY: e.deltaY / n,
              lastX: t.state.x,
              lastY: t.state.y,
            };
          }),
          (e.getBoundPosition = function (t, e, n) {
            if (!t.props.bounds) return [e, n];
            var a = t.props.bounds;
            a =
              "string" === typeof a
                ? a
                : (function (t) {
                    return {
                      left: t.left,
                      top: t.top,
                      right: t.right,
                      bottom: t.bottom,
                    };
                  })(a);
            var u = i(t);
            if ("string" === typeof a) {
              var c,
                s = u.ownerDocument,
                l = s.defaultView;
              if (
                !(
                  (c =
                    "parent" === a ? u.parentNode : s.querySelector(a)) instanceof
                  l.HTMLElement
                )
              )
                throw new Error(
                  'Bounds selector "' + a + '" could not find an element.',
                );
              var f = c,
                h = l.getComputedStyle(u),
                d = l.getComputedStyle(f);
              a = {
                left:
                  -u.offsetLeft +
                  (0, r.int)(d.paddingLeft) +
                  (0, r.int)(h.marginLeft),
                top:
                  -u.offsetTop +
                  (0, r.int)(d.paddingTop) +
                  (0, r.int)(h.marginTop),
                right:
                  (0, o.innerWidth)(f) -
                  (0, o.outerWidth)(u) -
                  u.offsetLeft +
                  (0, r.int)(d.paddingRight) -
                  (0, r.int)(h.marginRight),
                bottom:
                  (0, o.innerHeight)(f) -
                  (0, o.outerHeight)(u) -
                  u.offsetTop +
                  (0, r.int)(d.paddingBottom) -
                  (0, r.int)(h.marginBottom),
              };
            }
            (0, r.isNum)(a.right) && (e = Math.min(e, a.right));
            (0, r.isNum)(a.bottom) && (n = Math.min(n, a.bottom));
            (0, r.isNum)(a.left) && (e = Math.max(e, a.left));
            (0, r.isNum)(a.top) && (n = Math.max(n, a.top));
            return [e, n];
          }),
          (e.getControlPosition = function (t, e, n) {
            var r = "number" === typeof e ? (0, o.getTouch)(t, e) : null;
            if ("number" === typeof e && !r) return null;
            var a = i(n),
              u = n.props.offsetParent || a.offsetParent || a.ownerDocument.body;
            return (0, o.offsetXYFromParent)(r || t, u, n.props.scale);
          }),
          (e.snapToGrid = function (t, e, n) {
            var r = Math.round(e / t[0]) * t[0],
              o = Math.round(n / t[1]) * t[1];
            return [r, o];
          });
        var r = n(9280),
          o = n(81825);
        function i(t) {
          var e = t.findDOMNode();
          if (!e) throw new Error("<DraggableCore>: Unmounted during event!");
          return e;
        }
      },
      9280: function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.dontSetMe = function (t, e, n) {
            if (t[e])
              return new Error(
                "Invalid prop "
                  .concat(e, " passed to ")
                  .concat(n, " - do not set this, set it on the child."),
              );
          }),
          (e.findInArray = function (t, e) {
            for (var n = 0, r = t.length; n < r; n++)
              if (e.apply(e, [t[n], n, t])) return t[n];
          }),
          (e.int = function (t) {
            return parseInt(t, 10);
          }),
          (e.isFunction = function (t) {
            return (
              "function" === typeof t ||
              "[object Function]" === Object.prototype.toString.call(t)
            );
          }),
          (e.isNum = function (t) {
            return "number" === typeof t && !isNaN(t);
          });
      },
      75303: function (t, e, n) {
        "use strict";
        n.d(e, {
          i: function () {
            return h;
          },
        });
        var r,
          o = n(95336),
          i = n(67294),
          a = n(83840);
        function u(t, e) {
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
              ? u(Object(n), !0).forEach(function (e) {
                  (0, o.a)(t, e, n[e]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : u(Object(n)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(n, e),
                    );
                  });
          }
          return t;
        }
        var s =
            ((r = {}),
            (0, o.a)(r, o.B.Dots, "#81818a"),
            (0, o.a)(r, o.B.Lines, "#eee"),
            r),
          l = function (t) {
            return t.transform;
          },
          f = function (t) {
            var e = t.variant,
              n = void 0 === e ? o.B.Dots : e,
              r = t.gap,
              u = void 0 === r ? 15 : r,
              f = t.size,
              h = void 0 === f ? 0.4 : f,
              d = t.color,
              p = t.style,
              g = t.className,
              y = (0, i.useRef)(null),
              v = (0, i.useState)(null),
              m = (0, o._)(v, 2),
              b = m[0],
              w = m[1],
              _ = (0, o.b)(l),
              O = (0, o._)(_, 3),
              x = O[0],
              S = O[1],
              E = O[2];
            (0, i.useEffect)(function () {
              var t = document.querySelectorAll(".react-flow__background"),
                e = Array.from(t).findIndex(function (t) {
                  return t === y.current;
                });
              w("pattern-".concat(e));
            }, []);
            var P = (0, a.Z)([
                "react-flow__background",
                "react-flow__container",
                g,
              ]),
              j = u * E,
              D = x % j,
              N = S % j,
              M = n === o.B.Lines,
              k = d || s[n],
              A = M
                ? (function (t, e, n) {
                    return i.createElement("path", {
                      stroke: n,
                      strokeWidth: e,
                      d: "M"
                        .concat(t / 2, " 0 V")
                        .concat(t, " M0 ")
                        .concat(t / 2, " H")
                        .concat(t),
                    });
                  })(j, h, k)
                : (function (t, e) {
                    return i.createElement("circle", {
                      cx: t,
                      cy: t,
                      r: t,
                      fill: e,
                    });
                  })(h * E, k);
            return i.createElement(
              "svg",
              {
                className: P,
                style: c(c({}, p), {}, { width: "100%", height: "100%" }),
                ref: y,
              },
              b &&
                i.createElement(
                  i.Fragment,
                  null,
                  i.createElement(
                    "pattern",
                    {
                      id: b,
                      x: D,
                      y: N,
                      width: j,
                      height: j,
                      patternUnits: "userSpaceOnUse",
                    },
                    A,
                  ),
                  i.createElement("rect", {
                    x: "0",
                    y: "0",
                    width: "100%",
                    height: "100%",
                    fill: "url(#".concat(b, ")"),
                  }),
                ),
            );
          };
        f.displayName = "Background";
        var h = (0, i.memo)(f);
      },
      95336: function (t, e, n) {
        "use strict";
        n.d(e, {
          A: function () {
            return E;
          },
          B: function () {
            return c;
          },
          C: function () {
            return u;
          },
          D: function () {
            return g;
          },
          E: function () {
            return y;
          },
          F: function () {
            return q;
          },
          G: function () {
            return nt;
          },
          H: function () {
            return $;
          },
          M: function () {
            return f;
          },
          P: function () {
            return h;
          },
          _: function () {
            return v;
          },
          a: function () {
            return p;
          },
          b: function () {
            return ft;
          },
          c: function () {
            return X;
          },
          d: function () {
            return Y;
          },
          e: function () {
            return U;
          },
          f: function () {
            return m;
          },
          g: function () {
            return _;
          },
          h: function () {
            return s;
          },
          i: function () {
            return b;
          },
          j: function () {
            return W;
          },
          k: function () {
            return T;
          },
          l: function () {
            return L;
          },
          m: function () {
            return l;
          },
          n: function () {
            return P;
          },
          o: function () {
            return lt;
          },
          p: function () {
            return dt;
          },
          q: function () {
            return A;
          },
          r: function () {
            return x;
          },
          s: function () {
            return k;
          },
          t: function () {
            return H;
          },
          u: function () {
            return ht;
          },
          v: function () {
            return V;
          },
          z: function () {
            return F;
          },
        });
        var r = n(67294);
        function o(t) {
          let e;
          const n = new Set(),
            r = (t, r) => {
              const o = "function" === typeof t ? t(e) : t;
              if (o !== e) {
                const t = e;
                (e = r ? o : Object.assign({}, e, o)), n.forEach((n) => n(e, t));
              }
            },
            o = () => e,
            i = {
              setState: r,
              getState: o,
              subscribe: (t, r, i) =>
                r || i
                  ? ((t, r = o, i = Object.is) => {
                      console.warn(
                        "[DEPRECATED] Please use `subscribeWithSelector` middleware",
                      );
                      let a = r(e);
                      function u() {
                        const n = r(e);
                        if (!i(a, n)) {
                          const e = a;
                          t((a = n), e);
                        }
                      }
                      return n.add(u), () => n.delete(u);
                    })(t, r, i)
                  : (n.add(t), () => n.delete(t)),
              destroy: () => n.clear(),
            };
          return (e = t(r, o, i)), i;
        }
        const i =
          "undefined" === typeof window ||
          !window.navigator ||
          /ServerSideRendering|^Deno\//.test(window.navigator.userAgent)
            ? r.useEffect
            : r.useLayoutEffect;
        function a(t) {
          const e = "function" === typeof t ? o(t) : t,
            n = (t = e.getState, n = Object.is) => {
              const [, o] = (0, r.useReducer)((t) => t + 1, 0),
                a = e.getState(),
                u = (0, r.useRef)(a),
                c = (0, r.useRef)(t),
                s = (0, r.useRef)(n),
                l = (0, r.useRef)(!1),
                f = (0, r.useRef)();
              let h;
              void 0 === f.current && (f.current = t(a));
              let d = !1;
              (u.current !== a ||
                c.current !== t ||
                s.current !== n ||
                l.current) &&
                ((h = t(a)), (d = !n(f.current, h))),
                i(() => {
                  d && (f.current = h),
                    (u.current = a),
                    (c.current = t),
                    (s.current = n),
                    (l.current = !1);
                });
              const p = (0, r.useRef)(a);
              i(() => {
                const t = () => {
                    try {
                      const t = e.getState(),
                        n = c.current(t);
                      s.current(f.current, n) ||
                        ((u.current = t), (f.current = n), o());
                    } catch (t) {
                      (l.current = !0), o();
                    }
                  },
                  n = e.subscribe(t);
                return e.getState() !== p.current && t(), n;
              }, []);
              const g = d ? h : f.current;
              return (0, r.useDebugValue)(g), g;
            };
          return (
            Object.assign(n, e),
            (n[Symbol.iterator] = function () {
              console.warn(
                "[useStore, api] = create() is deprecated and will be removed in v4",
              );
              const t = [n, e];
              return {
                next() {
                  const e = t.length <= 0;
                  return { value: t.shift(), done: e };
                },
              };
            }),
            n
          );
        }
        var u,
          c,
          s,
          l,
          f,
          h,
          d = n(96780);
        function p(t, e, n) {
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
        function g(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
          return r;
        }
        function y(t, e) {
          if (t) {
            if ("string" === typeof t) return g(t, e);
            var n = Object.prototype.toString.call(t).slice(8, -1);
            return (
              "Object" === n && t.constructor && (n = t.constructor.name),
              "Map" === n || "Set" === n
                ? Array.from(t)
                : "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? g(t, e)
                  : void 0
            );
          }
        }
        function v(t, e) {
          return (
            (function (t) {
              if (Array.isArray(t)) return t;
            })(t) ||
            (function (t, e) {
              var n =
                null == t
                  ? null
                  : ("undefined" !== typeof Symbol && t[Symbol.iterator]) ||
                    t["@@iterator"];
              if (null != n) {
                var r,
                  o,
                  i = [],
                  a = !0,
                  u = !1;
                try {
                  for (
                    n = n.call(t);
                    !(a = (r = n.next()).done) &&
                    (i.push(r.value), !e || i.length !== e);
                    a = !0
                  );
                } catch (c) {
                  (u = !0), (o = c);
                } finally {
                  try {
                    a || null == n.return || n.return();
                  } finally {
                    if (u) throw o;
                  }
                }
                return i;
              }
            })(t, e) ||
            y(t, e) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
              );
            })()
          );
        }
        !(function (t) {
          (t.Strict = "strict"), (t.Loose = "loose");
        })(u || (u = {})),
          (function (t) {
            (t.Lines = "lines"), (t.Dots = "dots");
          })(c || (c = {})),
          (function (t) {
            (t.Free = "free"),
              (t.Vertical = "vertical"),
              (t.Horizontal = "horizontal");
          })(s || (s = {})),
          (function (t) {
            (t.Bezier = "default"),
              (t.Straight = "straight"),
              (t.Step = "step"),
              (t.SmoothStep = "smoothstep"),
              (t.SimpleBezier = "simplebezier");
          })(l || (l = {})),
          (function (t) {
            (t.Arrow = "arrow"), (t.ArrowClosed = "arrowclosed");
          })(f || (f = {})),
          (function (t) {
            (t.Left = "left"),
              (t.Top = "top"),
              (t.Right = "right"),
              (t.Bottom = "bottom");
          })(h || (h = {}));
        var m = function (t) {
            return { width: t.offsetWidth, height: t.offsetHeight };
          },
          b = function (t) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0,
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : 1;
            return Math.min(Math.max(t, e), n);
          },
          w = function (t, e) {
            return { x: b(t.x, e[0][0], e[1][0]), y: b(t.y, e[0][1], e[1][1]) };
          },
          _ = function (t) {
            var e, n;
            return (
              (null === (e = t.getRootNode) || void 0 === e
                ? void 0
                : e.call(t)) ||
              (null === (n = window) || void 0 === n ? void 0 : n.document)
            );
          },
          O = function (t, e) {
            return {
              x: Math.min(t.x, e.x),
              y: Math.min(t.y, e.y),
              x2: Math.max(t.x2, e.x2),
              y2: Math.max(t.y2, e.y2),
            };
          },
          x = function (t) {
            var e = t.x,
              n = t.y;
            return { x: e, y: n, x2: e + t.width, y2: n + t.height };
          },
          S = function (t) {
            var e = t.x,
              n = t.y;
            return { x: e, y: n, width: t.x2 - e, height: t.y2 - n };
          },
          E = function (t, e) {
            return S(O(x(t), x(e)));
          },
          P = function (t) {
            return !isNaN(t) && isFinite(t);
          };
        function j(t, e) {
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
        function D(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? j(Object(n), !0).forEach(function (e) {
                  p(t, e, n[e]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : j(Object(n)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(n, e),
                    );
                  });
          }
          return t;
        }
        function N(t, e) {
          var n = t.find(function (t) {
            return t.id === e.parentNode;
          });
          if (n) {
            var r = e.position.x + e.width - n.width,
              o = e.position.y + e.height - n.height;
            if (r > 0 || o > 0 || e.position.x < 0 || e.position.y < 0) {
              if (
                ((n.style = D({}, n.style) || {}),
                r > 0 &&
                  (n.style.width || (n.style.width = n.width),
                  (n.style.width += r)),
                o > 0 &&
                  (n.style.height || (n.style.height = n.height),
                  (n.style.height += o)),
                e.position.x < 0)
              ) {
                var i = Math.abs(e.position.x);
                (n.position.x = n.position.x - i),
                  (n.style.width += i),
                  (e.position.x = 0);
              }
              if (e.position.y < 0) {
                var a = Math.abs(e.position.y);
                (n.position.y = n.position.y - a),
                  (n.style.height += a),
                  (e.position.y = 0);
              }
              (n.width = n.style.width), (n.height = n.style.height);
            }
          }
        }
        function M(t, e) {
          if (
            t.some(function (t) {
              return "reset" === t.type;
            })
          )
            return t
              .filter(function (t) {
                return "reset" === t.type;
              })
              .map(function (t) {
                return t.item;
              });
          var n = t
            .filter(function (t) {
              return "add" === t.type;
            })
            .map(function (t) {
              return t.item;
            });
          return e.reduce(function (e, n) {
            var r = t.find(function (t) {
              return t.id === n.id;
            });
            if (r)
              switch (r.type) {
                case "select":
                  return e.push(D(D({}, n), {}, { selected: r.selected })), e;
                case "position":
                  var o = D({}, n);
                  return (
                    "undefined" !== typeof r.position &&
                      (o.position = r.position),
                    "undefined" !== typeof r.dragging &&
                      (o.dragging = r.dragging),
                    o.expandParent && N(e, o),
                    e.push(o),
                    e
                  );
                case "dimensions":
                  var i = D({}, n);
                  return (
                    "undefined" !== typeof r.dimensions &&
                      ((i.width = r.dimensions.width),
                      (i.height = r.dimensions.height)),
                    i.expandParent && N(e, i),
                    e.push(i),
                    e
                  );
                case "remove":
                  return e;
              }
            return e.push(n), e;
          }, n);
        }
        function k(t, e) {
          return M(t, e);
        }
        function A(t, e) {
          return M(t, e);
        }
        var C = function (t, e) {
          return { id: t, type: "select", selected: e };
        };
        function T(t, e) {
          return t.reduce(function (t, n) {
            var r = e.includes(n.id);
            return (
              !n.selected && r
                ? ((n.selected = !0), t.push(C(n.id, !0)))
                : n.selected && !r && ((n.selected = !1), t.push(C(n.id, !1))),
              t
            );
          }, []);
        }
        function z(t, e) {
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
        var Z = function (t, e, n, r) {
          var o = e.querySelectorAll(t);
          return o && o.length
            ? Array.from(o).map(function (t) {
                var e = t.getBoundingClientRect(),
                  o = m(t);
                return (function (t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2
                      ? z(Object(n), !0).forEach(function (e) {
                          p(t, e, n[e]);
                        })
                      : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            t,
                            Object.getOwnPropertyDescriptors(n),
                          )
                        : z(Object(n)).forEach(function (e) {
                            Object.defineProperty(
                              t,
                              e,
                              Object.getOwnPropertyDescriptor(n, e),
                            );
                          });
                  }
                  return t;
                })(
                  {
                    id: t.getAttribute("data-handleid"),
                    position: t.getAttribute("data-handlepos"),
                    x: (e.left - n.left) / r,
                    y: (e.top - n.top) / r,
                  },
                  o,
                );
              })
            : null;
        };
        function I(t, e) {
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
        function R(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? I(Object(n), !0).forEach(function (e) {
                  p(t, e, n[e]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : I(Object(n)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(n, e),
                    );
                  });
          }
          return t;
        }
        var V = function (t) {
            return "id" in t && "source" in t && "target" in t;
          },
          H = function (t) {
            return "id" in t && !("source" in t) && !("target" in t);
          },
          B = function (t) {
            var e = t.source,
              n = t.sourceHandle,
              r = t.target,
              o = t.targetHandle;
            return "reactflow__edge-"
              .concat(e)
              .concat(n || "", "-")
              .concat(r)
              .concat(o || "");
          },
          Y = function (t) {
            return "undefined" === typeof t
              ? ""
              : "string" === typeof t
                ? t
                : Object.keys(t)
                    .sort()
                    .map(function (e) {
                      return "".concat(e, "=").concat(t[e]);
                    })
                    .join("&");
          },
          X = function (t, e) {
            return t.source && t.target
              ? (function (t, e) {
                  return e.some(function (e) {
                    return (
                      e.source === t.source &&
                      e.target === t.target &&
                      (e.sourceHandle === t.sourceHandle ||
                        (!e.sourceHandle && !t.sourceHandle)) &&
                      (e.targetHandle === t.targetHandle ||
                        (!e.targetHandle && !t.targetHandle))
                    );
                  });
                })((n = V(t) ? R({}, t) : R(R({}, t), {}, { id: B(t) })), e)
                ? e
                : e.concat(n)
              : e;
            var n;
          },
          $ = function (t, e, n, r) {
            var o = t.x,
              i = t.y,
              a = v(e, 3),
              u = a[0],
              c = a[1],
              s = a[2],
              l = v(r, 2),
              f = l[0],
              h = l[1],
              d = { x: (o - u) / s, y: (i - c) / s };
            return n
              ? { x: f * Math.round(d.x / f), y: h * Math.round(d.y / h) }
              : d;
          },
          L = function (t) {
            var e = t.reduce(
              function (t, e) {
                var n = e.positionAbsolute,
                  r = e.position,
                  o = e.width,
                  i = e.height;
                return O(
                  t,
                  x({
                    x: n ? n.x : r.x,
                    y: n ? n.y : r.y,
                    width: o || 0,
                    height: i || 0,
                  }),
                );
              },
              { x: 1 / 0, y: 1 / 0, x2: -1 / 0, y2: -1 / 0 },
            );
            return S(e);
          },
          W = function (t, e) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : [0, 0, 1],
              r = v(n, 3),
              o = r[0],
              i = r[1],
              a = r[2],
              u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              c = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
              s = x({
                x: (e.x - o) / a,
                y: (e.y - i) / a,
                width: e.width / a,
                height: e.height / a,
              }),
              l = [];
            return (
              t.forEach(function (t) {
                var e = t.positionAbsolute,
                  n = t.width,
                  r = t.height,
                  o = t.dragging,
                  i = t.selectable;
                if (c && !(void 0 === i || i)) return !1;
                var a = x(R(R({}, e), {}, { width: n || 0, height: r || 0 })),
                  f = Math.max(0, Math.min(s.x2, a.x2) - Math.max(s.x, a.x)),
                  h = Math.max(0, Math.min(s.y2, a.y2) - Math.max(s.y, a.y)),
                  d = Math.ceil(f * h);
                ("undefined" === typeof n ||
                  "undefined" === typeof r ||
                  null === n ||
                  null === r ||
                  o ||
                  (u && d > 0) ||
                  d >= (n || 0) * (r || 0)) &&
                  l.push(t);
              }),
              l
            );
          },
          U = function (t, e) {
            var n = t.map(function (t) {
              return t.id;
            });
            return e.filter(function (t) {
              return n.includes(t.source) || n.includes(t.target);
            });
          },
          F = function (t, e, n, r, o) {
            var i =
                arguments.length > 5 && void 0 !== arguments[5]
                  ? arguments[5]
                  : 0.1,
              a = e / (t.width * (1 + i)),
              u = n / (t.height * (1 + i)),
              c = Math.min(a, u),
              s = b(c, r, o),
              l = t.x + t.width / 2,
              f = t.y + t.height / 2,
              h = e / 2 - l * s,
              d = n / 2 - f * s;
            return [h, d, s];
          },
          q = function (t) {
            var e =
              arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return t.transition().duration(e);
          };
        function G(t, e) {
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
        function K(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? G(Object(n), !0).forEach(function (e) {
                  p(t, e, n[e]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : G(Object(n)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(n, e),
                    );
                  });
          }
          return t;
        }
        function J(t, e, n, r) {
          var o, i, a, u, c, s, l, f, h, d;
          if (!t.parentNode) return r;
          var p = e.get(t.parentNode);
          return J(p, e, n, {
            x:
              (null !== (o = r.x) && void 0 !== o ? o : 0) +
              (null !==
                (i = null === (a = p.position) || void 0 === a ? void 0 : a.x) &&
              void 0 !== i
                ? i
                : 0),
            y:
              (null !== (u = r.y) && void 0 !== u ? u : 0) +
              (null !==
                (c = null === (s = p.position) || void 0 === s ? void 0 : s.y) &&
              void 0 !== c
                ? c
                : 0),
            z:
              (null !== (l = p.z) && void 0 !== l ? l : 0) >
              (null !== (f = r.z) && void 0 !== f ? f : 0)
                ? null !== (h = p.z) && void 0 !== h
                  ? h
                  : 0
                : null !== (d = r.z) && void 0 !== d
                  ? d
                  : 0,
          });
        }
        function Q(t, e) {
          var n = new Map(),
            r = {};
          return (
            t.forEach(function (t) {
              var o = P(t.zIndex) ? t.zIndex : t.dragging || t.selected ? 1e3 : 0,
                i = e.get(t.id),
                a = K(
                  K(
                    {
                      width: null === i || void 0 === i ? void 0 : i.width,
                      height: null === i || void 0 === i ? void 0 : i.height,
                      handleBounds:
                        null === i || void 0 === i ? void 0 : i.handleBounds,
                    },
                    t,
                  ),
                  {},
                  {
                    positionAbsolute: { x: t.position.x, y: t.position.y },
                    z: o,
                  },
                );
              t.parentNode &&
                ((a.parentNode = t.parentNode), (r[t.parentNode] = !0)),
                n.set(t.id, a);
            }),
            n.forEach(function (t) {
              if (t.parentNode && !n.has(t.parentNode))
                throw new Error(
                  "Parent node ".concat(t.parentNode, " not found"),
                );
              if (t.parentNode || r[t.id]) {
                var e,
                  o = J(
                    t,
                    n,
                    r,
                    K(
                      K({}, t.position),
                      {},
                      { z: null !== (e = t.z) && void 0 !== e ? e : 0 },
                    ),
                  ),
                  i = o.x,
                  a = o.y,
                  u = o.z;
                (t.positionAbsolute = { x: i, y: a }),
                  (t.z = u),
                  r[t.id] && (t.isParent = !0);
              }
            }),
            n
          );
        }
        function tt(t, e) {
          if (!t.parentNode) return !1;
          var n = e.get(t.parentNode);
          return !!n && (!!n.selected || tt(n, e));
        }
        function et(t) {
          var e = t.node,
            n = t.diff,
            r = t.dragging,
            o = t.nodeExtent,
            i = t.nodeInternals,
            a = { id: e.id, type: "position", dragging: !!r };
          if (n) {
            var u = { x: e.position.x + n.x, y: e.position.y + n.y },
              c = e.extent || o;
            if ("parent" === e.extent)
              if (e.parentNode && e.width && e.height) {
                var s = i.get(e.parentNode);
                c =
                  null !== s &&
                  void 0 !== s &&
                  s.width &&
                  null !== s &&
                  void 0 !== s &&
                  s.height
                    ? [
                        [0, 0],
                        [s.width - e.width, s.height - e.height],
                      ]
                    : c;
              } else c = o;
            a.position = c ? w(u, c) : u;
          }
          return a;
        }
        function nt(t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = t(),
            r = n.nodeInternals,
            o = n.width,
            i = n.height,
            a = n.minZoom,
            u = n.maxZoom,
            c = n.d3Zoom,
            s = n.d3Selection,
            l = n.fitViewOnInitDone,
            f = n.fitViewOnInit;
          if (((e.initial && !l && f) || !e.initial) && c && s) {
            var h = Array.from(r.values()).filter(function (t) {
                return e.includeHiddenNodes
                  ? !t.parentNode && t.width && t.height
                  : !t.parentNode && !t.hidden;
              }),
              p = h.every(function (t) {
                return t.width && t.height;
              });
            if (h.length > 0 && p) {
              var g,
                y,
                m,
                b = L(h),
                w = F(
                  b,
                  o,
                  i,
                  null !== (g = e.minZoom) && void 0 !== g ? g : a,
                  null !== (y = e.maxZoom) && void 0 !== y ? y : u,
                  null !== (m = e.padding) && void 0 !== m ? m : 0.1,
                ),
                _ = v(w, 3),
                O = _[0],
                x = _[1],
                S = _[2],
                E = d.CR.translate(O, x).scale(S);
              return (
                "number" === typeof e.duration && e.duration > 0
                  ? c.transform(q(s, e.duration), E)
                  : c.transform(s, E),
                !0
              );
            }
          }
          return !1;
        }
        function rt(t, e) {
          return (
            t.forEach(function (t) {
              var n = e.get(t.id);
              n && e.set(n.id, K(K({}, n), {}, { selected: t.selected }));
            }),
            new Map(e)
          );
        }
        function ot(t, e) {
          return e.map(function (e) {
            var n = t.find(function (t) {
              return t.id === e.id;
            });
            return n && (e.selected = n.selected), e;
          });
        }
        var it = [
            [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
            [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY],
          ],
          at = {
            width: 0,
            height: 0,
            transform: [0, 0, 1],
            nodeInternals: new Map(),
            edges: [],
            onNodesChange: null,
            onEdgesChange: null,
            hasDefaultNodes: !1,
            hasDefaultEdges: !1,
            selectedNodesBbox: { x: 0, y: 0, width: 0, height: 0 },
            d3Zoom: null,
            d3Selection: null,
            d3ZoomHandler: void 0,
            minZoom: 0.5,
            maxZoom: 2,
            translateExtent: it,
            nodeExtent: it,
            nodesSelectionActive: !1,
            userSelectionActive: !1,
            connectionNodeId: null,
            connectionHandleId: null,
            connectionHandleType: "source",
            connectionPosition: { x: 0, y: 0 },
            connectionMode: u.Strict,
            snapGrid: [15, 15],
            snapToGrid: !1,
            nodesDraggable: !0,
            nodesConnectable: !0,
            elementsSelectable: !0,
            fitViewOnInit: !1,
            fitViewOnInitDone: !1,
            fitViewOnInitOptions: void 0,
            multiSelectionActive: !1,
            reactFlowVersion: "10.2.2",
            connectionStartHandle: null,
            connectOnClick: !0,
          };
        function ut(t, e) {
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
        function ct(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? ut(Object(n), !0).forEach(function (e) {
                  p(t, e, n[e]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : ut(Object(n)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(n, e),
                    );
                  });
          }
          return t;
        }
        var st = (function () {
            const t = (0, r.createContext)(void 0);
            return {
              Provider: ({ initialStore: e, createStore: n, children: o }) => {
                const i = (0, r.useRef)();
                return (
                  i.current ||
                    (e &&
                      (console.warn(
                        "Provider initialStore is deprecated and will be removed in the next version.",
                      ),
                      n || (n = () => e)),
                    (i.current = n())),
                  (0, r.createElement)(t.Provider, { value: i.current }, o)
                );
              },
              useStore: (e, n = Object.is) => {
                const o = (0, r.useContext)(t);
                if (!o)
                  throw new Error(
                    "Seems like you have not used zustand provider as an ancestor.",
                  );
                return o(e, n);
              },
              useStoreApi: () => {
                const e = (0, r.useContext)(t);
                if (!e)
                  throw new Error(
                    "Seems like you have not used zustand provider as an ancestor.",
                  );
                return (0, r.useMemo)(
                  () => ({
                    getState: e.getState,
                    setState: e.setState,
                    subscribe: e.subscribe,
                    destroy: e.destroy,
                  }),
                  [e],
                );
              },
            };
          })(),
          lt = st.Provider,
          ft = st.useStore,
          ht = st.useStoreApi,
          dt = function () {
            return a(function (t, e) {
              return ct(
                ct({}, at),
                {},
                {
                  setNodes: function (n) {
                    t({ nodeInternals: Q(n, e().nodeInternals) });
                  },
                  setEdges: function (n) {
                    var r = e().defaultEdgeOptions;
                    t(
                      r
                        ? {
                            edges: n.map(function (t) {
                              return ct(ct({}, r), t);
                            }),
                          }
                        : { edges: n },
                    );
                  },
                  setDefaultNodesAndEdges: function (e, n) {
                    var r = "undefined" !== typeof e,
                      o = "undefined" !== typeof n,
                      i = r ? Q(e, new Map()) : new Map();
                    t({
                      nodeInternals: i,
                      edges: o ? n : [],
                      hasDefaultNodes: r,
                      hasDefaultEdges: o,
                    });
                  },
                  updateNodeDimensions: function (n) {
                    var r = e(),
                      o = r.onNodesChange,
                      i = r.transform,
                      a = r.nodeInternals,
                      u = r.fitViewOnInit,
                      c = r.fitViewOnInitDone,
                      s = r.fitViewOnInitOptions,
                      l = n.reduce(function (t, e) {
                        var n = a.get(e.id);
                        if (n) {
                          var r = m(e.nodeElement);
                          if (
                            !(
                              !r.width ||
                              !r.height ||
                              (n.width === r.width &&
                                n.height === r.height &&
                                !e.forceUpdate)
                            )
                          ) {
                            var o = (function (t, e) {
                              var n = t.getBoundingClientRect();
                              return {
                                source: Z(".source", t, n, e),
                                target: Z(".target", t, n, e),
                              };
                            })(e.nodeElement, i[2]);
                            a.set(
                              n.id,
                              ct(ct({}, n), {}, { handleBounds: o }, r),
                            ),
                              t.push({
                                id: n.id,
                                type: "dimensions",
                                dimensions: r,
                              });
                          }
                        }
                        return t;
                      }, []),
                      f = c || (u && !c && nt(e, ct({ initial: !0 }, s)));
                    t({ nodeInternals: new Map(a), fitViewOnInitDone: f }),
                      (null === l || void 0 === l ? void 0 : l.length) > 0 &&
                        (null === o || void 0 === o || o(l));
                  },
                  updateNodePosition: function (n) {
                    var r = n.id,
                      o = n.diff,
                      i = n.dragging,
                      a = e(),
                      u = a.onNodesChange,
                      c = a.nodeExtent,
                      s = a.nodeInternals,
                      l = a.hasDefaultNodes;
                    if (l || u) {
                      var f = [];
                      if (
                        (s.forEach(function (t) {
                          t.selected
                            ? (t.parentNode && tt(t, s)) ||
                              f.push(
                                et({
                                  node: t,
                                  diff: o,
                                  dragging: i,
                                  nodeExtent: c,
                                  nodeInternals: s,
                                }),
                              )
                            : t.id === r &&
                              f.push(
                                et({
                                  node: t,
                                  diff: o,
                                  dragging: i,
                                  nodeExtent: c,
                                  nodeInternals: s,
                                }),
                              );
                        }),
                        null !== f && void 0 !== f && f.length)
                      ) {
                        if (l) {
                          var h = Q(k(f, Array.from(s.values())), s);
                          t({ nodeInternals: h });
                        }
                        null === u || void 0 === u || u(f);
                      }
                    }
                  },
                  addSelectedNodes: function (n) {
                    var r,
                      o,
                      i = e(),
                      a = i.multiSelectionActive,
                      u = i.onNodesChange,
                      c = i.nodeInternals,
                      s = i.hasDefaultNodes,
                      l = i.onEdgesChange,
                      f = i.hasDefaultEdges,
                      h = i.edges,
                      d = null;
                    a
                      ? (o = n.map(function (t) {
                          return C(t, !0);
                        }))
                      : ((o = T(Array.from(c.values()), n)), (d = T(h, []))),
                      o.length &&
                        (s && t({ nodeInternals: rt(o, c) }),
                        null === u || void 0 === u || u(o)),
                      null !== (r = d) &&
                        void 0 !== r &&
                        r.length &&
                        (f && t({ edges: ot(d, h) }),
                        null === l || void 0 === l || l(d));
                  },
                  addSelectedEdges: function (n) {
                    var r,
                      o,
                      i = e(),
                      a = i.multiSelectionActive,
                      u = i.onEdgesChange,
                      c = i.edges,
                      s = i.hasDefaultEdges,
                      l = i.nodeInternals,
                      f = i.hasDefaultNodes,
                      h = i.onNodesChange,
                      d = null;
                    a
                      ? (o = n.map(function (t) {
                          return C(t, !0);
                        }))
                      : ((o = T(c, n)), (d = T(Array.from(l.values()), []))),
                      o.length &&
                        (s && t({ edges: ot(o, c) }),
                        null === u || void 0 === u || u(o)),
                      null !== (r = d) &&
                        void 0 !== r &&
                        r.length &&
                        (f && t({ nodeInternals: rt(d, l) }),
                        null === h || void 0 === h || h(d));
                  },
                  unselectNodesAndEdges: function () {
                    var n = e(),
                      r = n.nodeInternals,
                      o = n.edges,
                      i = n.onNodesChange,
                      a = n.onEdgesChange,
                      u = n.hasDefaultNodes,
                      c = n.hasDefaultEdges,
                      s = Array.from(r.values()).map(function (t) {
                        return (t.selected = !1), C(t.id, !1);
                      }),
                      l = o.map(function (t) {
                        return C(t.id, !1);
                      });
                    s.length &&
                      (u && t({ nodeInternals: rt(s, r) }),
                      null === i || void 0 === i || i(s)),
                      l.length &&
                        (c && t({ edges: ot(l, o) }),
                        null === a || void 0 === a || a(l));
                  },
                  setMinZoom: function (n) {
                    var r = e(),
                      o = r.d3Zoom,
                      i = r.maxZoom;
                    null === o || void 0 === o || o.scaleExtent([n, i]),
                      t({ minZoom: n });
                  },
                  setMaxZoom: function (n) {
                    var r = e(),
                      o = r.d3Zoom,
                      i = r.minZoom;
                    null === o || void 0 === o || o.scaleExtent([i, n]),
                      t({ maxZoom: n });
                  },
                  setTranslateExtent: function (n) {
                    var r = e().d3Zoom;
                    null === r || void 0 === r || r.translateExtent(n),
                      t({ translateExtent: n });
                  },
                  resetSelectedElements: function () {
                    var n = e(),
                      r = n.nodeInternals,
                      o = n.edges,
                      i = n.onNodesChange,
                      a = n.onEdgesChange,
                      u = n.hasDefaultNodes,
                      c = n.hasDefaultEdges,
                      s = Array.from(r.values())
                        .filter(function (t) {
                          return t.selected;
                        })
                        .map(function (t) {
                          return C(t.id, !1);
                        }),
                      l = o
                        .filter(function (t) {
                          return t.selected;
                        })
                        .map(function (t) {
                          return C(t.id, !1);
                        });
                    s.length &&
                      (u && t({ nodeInternals: rt(s, r) }),
                      null === i || void 0 === i || i(s)),
                      l.length &&
                        (c && t({ edges: ot(l, o) }),
                        null === a || void 0 === a || a(l));
                  },
                  setNodeExtent: function (n) {
                    var r = e().nodeInternals;
                    r.forEach(function (t) {
                      t.positionAbsolute = w(t.position, n);
                    }),
                      t({ nodeExtent: n, nodeInternals: new Map(r) });
                  },
                  reset: function () {
                    return t(ct({}, at));
                  },
                },
              );
            });
          };
      },
      53645: function (t, e, n) {
        "use strict";
        n.d(e, {
          i: function () {
            return f;
          },
        });
        var r = n(95336),
          o = n(67294),
          i = n(83840),
          a = n(533),
          u = function (t) {
            var e = t.x,
              n = t.y,
              r = t.width,
              a = t.height,
              u = t.style,
              c = t.color,
              s = t.strokeColor,
              l = t.strokeWidth,
              f = t.className,
              h = t.borderRadius,
              d = t.shapeRendering,
              p = u || {},
              g = p.background,
              y = p.backgroundColor,
              v = c || g || y;
            return o.createElement("rect", {
              className: (0, i.Z)(["react-flow__minimap-node", f]),
              x: e,
              y: n,
              rx: h,
              ry: h,
              width: r,
              height: a,
              fill: v,
              stroke: s,
              strokeWidth: l,
              shapeRendering: d,
            });
          };
        u.displayName = "MiniMapNode";
        var c = (0, o.memo)(u),
          s = function (t) {
            return {
              width: t.width,
              height: t.height,
              transform: t.transform,
              nodeInternals: t.nodeInternals,
            };
          },
          l = function (t) {
            var e = t.style,
              n = t.className,
              u = t.nodeStrokeColor,
              l = void 0 === u ? "#555" : u,
              f = t.nodeColor,
              h = void 0 === f ? "#fff" : f,
              d = t.nodeClassName,
              p = void 0 === d ? "" : d,
              g = t.nodeBorderRadius,
              y = void 0 === g ? 5 : g,
              v = t.nodeStrokeWidth,
              m = void 0 === v ? 2 : v,
              b = t.maskColor,
              w = void 0 === b ? "rgb(240, 242, 243, 0.7)" : b,
              _ = (0, r.b)(s, a.Z),
              O = _.width,
              x = _.height,
              S = _.transform,
              E = _.nodeInternals,
              P = (0, r._)(S, 3),
              j = P[0],
              D = P[1],
              N = P[2],
              M = (0, i.Z)(["react-flow__minimap", n]),
              k = (null === e || void 0 === e ? void 0 : e.width) || 200,
              A = (null === e || void 0 === e ? void 0 : e.height) || 150,
              C =
                h instanceof Function
                  ? h
                  : function () {
                      return h;
                    },
              T =
                l instanceof Function
                  ? l
                  : function () {
                      return l;
                    },
              z =
                p instanceof Function
                  ? p
                  : function () {
                      return p;
                    },
              Z = E && E.size > 0,
              I = Array.from(E).map(function (t) {
                var e = (0, r._)(t, 2);
                return e[0], e[1];
              }),
              R = (0, r.l)(I),
              V = { x: -j / N, y: -D / N, width: O / N, height: x / N },
              H = Z ? (0, r.A)(R, V) : V,
              B = H.width / k,
              Y = H.height / A,
              X = Math.max(B, Y),
              $ = X * k,
              L = X * A,
              W = 5 * X,
              U = H.x - ($ - H.width) / 2 - W,
              F = H.y - (L - H.height) / 2 - W,
              q = $ + 2 * W,
              G = L + 2 * W,
              K =
                "undefined" === typeof window || window.chrome
                  ? "crispEdges"
                  : "geometricPrecision";
            return o.createElement(
              "svg",
              {
                width: k,
                height: A,
                viewBox: ""
                  .concat(U, " ")
                  .concat(F, " ")
                  .concat(q, " ")
                  .concat(G),
                style: e,
                className: M,
              },
              Array.from(E)
                .filter(function (t) {
                  var e = (0, r._)(t, 2);
                  e[0];
                  var n = e[1];
                  return !n.hidden && n.width && n.height;
                })
                .map(function (t) {
                  var e,
                    n = (0, r._)(t, 2);
                  n[0];
                  var i = n[1],
                    a =
                      null === (e = E.get(i.id)) || void 0 === e
                        ? void 0
                        : e.positionAbsolute;
                  return o.createElement(c, {
                    key: i.id,
                    x: (null === a || void 0 === a ? void 0 : a.x) || 0,
                    y: (null === a || void 0 === a ? void 0 : a.y) || 0,
                    width: i.width,
                    height: i.height,
                    style: i.style,
                    className: z(i),
                    color: C(i),
                    borderRadius: y,
                    strokeColor: T(i),
                    strokeWidth: m,
                    shapeRendering: K,
                  });
                }),
              o.createElement("path", {
                className: "react-flow__minimap-mask",
                d: "M"
                  .concat(U - W, ",")
                  .concat(F - W, "h")
                  .concat(q + 2 * W, "v")
                  .concat(G + 2 * W, "h")
                  .concat(-q - 2 * W, "z\n        M")
                  .concat(V.x, ",")
                  .concat(V.y, "h")
                  .concat(V.width, "v")
                  .concat(V.height, "h")
                  .concat(-V.width, "z"),
                fill: w,
                fillRule: "evenodd",
              }),
            );
          };
        l.displayName = "MiniMap";
        var f = (0, o.memo)(l);
      },
      56266: function (t, e, n) {
        "use strict";
        n.d(e, {
          C: function () {
            return p;
          },
          i: function () {
            return v;
          },
        });
        var r = n(95336),
          o = n(94570),
          i = n(67294),
          a = n(83840);
        function u() {
          return i.createElement(
            "svg",
            { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32" },
            i.createElement("path", {
              d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z",
            }),
          );
        }
        function c() {
          return i.createElement(
            "svg",
            { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 5" },
            i.createElement("path", { d: "M0 0h32v4.2H0z" }),
          );
        }
        function s() {
          return i.createElement(
            "svg",
            { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 30" },
            i.createElement("path", {
              d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0027.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94c-.531 0-.939-.4-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z",
            }),
          );
        }
        function l() {
          return i.createElement(
            "svg",
            { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32" },
            i.createElement("path", {
              d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z",
            }),
          );
        }
        function f() {
          return i.createElement(
            "svg",
            { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 25 32" },
            i.createElement("path", {
              d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 000 13.714v15.238A3.056 3.056 0 003.048 32h18.285a3.056 3.056 0 003.048-3.048V13.714a3.056 3.056 0 00-3.048-3.047zM12.19 24.533a3.056 3.056 0 01-3.047-3.047 3.056 3.056 0 013.047-3.048 3.056 3.056 0 013.048 3.048 3.056 3.056 0 01-3.048 3.047z",
            }),
          );
        }
        var h = ["children", "className"];
        function d(t, e) {
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
        var p = function (t) {
            var e = t.children,
              n = t.className,
              u = (0, o.a)(t, h);
            return i.createElement(
              "button",
              (function (t) {
                for (var e = 1; e < arguments.length; e++) {
                  var n = null != arguments[e] ? arguments[e] : {};
                  e % 2
                    ? d(Object(n), !0).forEach(function (e) {
                        (0, r.a)(t, e, n[e]);
                      })
                    : Object.getOwnPropertyDescriptors
                      ? Object.defineProperties(
                          t,
                          Object.getOwnPropertyDescriptors(n),
                        )
                      : d(Object(n)).forEach(function (e) {
                          Object.defineProperty(
                            t,
                            e,
                            Object.getOwnPropertyDescriptor(n, e),
                          );
                        });
                }
                return t;
              })(
                {
                  type: "button",
                  className: (0, a.Z)(["react-flow__controls-button", n]),
                },
                u,
              ),
              e,
            );
          },
          g = function (t) {
            return t.nodesDraggable && t.nodesConnectable && t.elementsSelectable;
          },
          y = function (t) {
            var e = t.style,
              n = t.showZoom,
              h = void 0 === n || n,
              d = t.showFitView,
              y = void 0 === d || d,
              v = t.showInteractive,
              m = void 0 === v || v,
              b = t.fitViewOptions,
              w = t.onZoomIn,
              _ = t.onZoomOut,
              O = t.onFitView,
              x = t.onInteractiveChange,
              S = t.className,
              E = t.children,
              P = (0, r.u)(),
              j = (0, i.useState)(!1),
              D = (0, r._)(j, 2),
              N = D[0],
              M = D[1],
              k = (0, r.b)(g),
              A = (0, o.u)(),
              C = A.zoomIn,
              T = A.zoomOut,
              z = A.fitView,
              Z = (0, a.Z)(["react-flow__controls", S]),
              I = (0, i.useCallback)(
                function () {
                  null === C || void 0 === C || C(),
                    null === w || void 0 === w || w();
                },
                [C, w],
              ),
              R = (0, i.useCallback)(
                function () {
                  null === T || void 0 === T || T(),
                    null === _ || void 0 === _ || _();
                },
                [T, _],
              ),
              V = (0, i.useCallback)(
                function () {
                  null === z || void 0 === z || z(b),
                    null === O || void 0 === O || O();
                },
                [z, b, O],
              ),
              H = (0, i.useCallback)(
                function () {
                  P.setState({
                    nodesDraggable: !k,
                    nodesConnectable: !k,
                    elementsSelectable: !k,
                  }),
                    null === x || void 0 === x || x(!k);
                },
                [k, x],
              );
            return (
              (0, i.useEffect)(function () {
                M(!0);
              }, []),
              N
                ? i.createElement(
                    "div",
                    { className: Z, style: e },
                    h &&
                      i.createElement(
                        i.Fragment,
                        null,
                        i.createElement(
                          p,
                          {
                            onClick: I,
                            className: "react-flow__controls-zoomin",
                            title: "zoom in",
                            "aria-label": "zoom in",
                          },
                          i.createElement(u, null),
                        ),
                        i.createElement(
                          p,
                          {
                            onClick: R,
                            className: "react-flow__controls-zoomout",
                            title: "zoom out",
                            "aria-label": "zoom out",
                          },
                          i.createElement(c, null),
                        ),
                      ),
                    y &&
                      i.createElement(
                        p,
                        {
                          className: "react-flow__controls-fitview",
                          onClick: V,
                          title: "fit view",
                          "aria-label": "fit view",
                        },
                        i.createElement(s, null),
                      ),
                    m &&
                      i.createElement(
                        p,
                        {
                          className: "react-flow__controls-interactive",
                          onClick: H,
                          title: "toggle interactivity",
                          "aria-label": "toggle interactivity",
                        },
                        k ? i.createElement(f, null) : i.createElement(l, null),
                      ),
                    E,
                  )
                : null
            );
          };
        y.displayName = "Controls";
        var v = (0, i.memo)(y);
      },
      4331: function (t, e, n) {
        "use strict";
        n(95336);
      },
      75535: function (t, e, n) {
        "use strict";
        n(95336);
      },
      94570: function (t, e, n) {
        "use strict";
        n.d(e, {
          _: function () {
            return c;
          },
          a: function () {
            return u;
          },
          u: function () {
            return p;
          },
        });
        var r = n(95336),
          o = n(67294),
          i = n(96780),
          a = n(533);
        function u(t, e) {
          if (null == t) return {};
          var n,
            r,
            o = (function (t, e) {
              if (null == t) return {};
              var n,
                r,
                o = {},
                i = Object.keys(t);
              for (r = 0; r < i.length; r++)
                (n = i[r]), e.indexOf(n) >= 0 || (o[n] = t[n]);
              return o;
            })(t, e);
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
        function c(t) {
          return (
            (function (t) {
              if (Array.isArray(t)) return (0, r.D)(t);
            })(t) ||
            (function (t) {
              if (
                ("undefined" !== typeof Symbol && null != t[Symbol.iterator]) ||
                null != t["@@iterator"]
              )
                return Array.from(t);
            })(t) ||
            (0, r.E)(t) ||
            (function () {
              throw new TypeError(
                "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
              );
            })()
          );
        }
        var s = {
            zoomIn: function () {},
            zoomOut: function () {},
            zoomTo: function (t) {},
            getZoom: function () {
              return 1;
            },
            setViewport: function (t) {},
            getViewport: function () {
              return { x: 0, y: 0, zoom: 1 };
            },
            fitView: function () {},
            setCenter: function (t, e) {},
            fitBounds: function (t) {},
            project: function (t) {
              return t;
            },
            initialized: !1,
          },
          l = function (t) {
            return { d3Zoom: t.d3Zoom, d3Selection: t.d3Selection };
          },
          f = ["initialized"];
        function h(t, e) {
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
        function d(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2
              ? h(Object(n), !0).forEach(function (e) {
                  (0, r.a)(t, e, n[e]);
                })
              : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                : h(Object(n)).forEach(function (e) {
                    Object.defineProperty(
                      t,
                      e,
                      Object.getOwnPropertyDescriptor(n, e),
                    );
                  });
          }
          return t;
        }
        function p() {
          var t = (function () {
              var t = (0, r.u)(),
                e = (0, r.b)(l, a.Z),
                n = e.d3Zoom,
                u = e.d3Selection;
              return (0, o.useMemo)(
                function () {
                  return u && n
                    ? {
                        zoomIn: function (t) {
                          return n.scaleBy(
                            (0, r.F)(
                              u,
                              null === t || void 0 === t ? void 0 : t.duration,
                            ),
                            1.2,
                          );
                        },
                        zoomOut: function (t) {
                          return n.scaleBy(
                            (0, r.F)(
                              u,
                              null === t || void 0 === t ? void 0 : t.duration,
                            ),
                            1 / 1.2,
                          );
                        },
                        zoomTo: function (t, e) {
                          return n.scaleTo(
                            (0, r.F)(
                              u,
                              null === e || void 0 === e ? void 0 : e.duration,
                            ),
                            t,
                          );
                        },
                        getZoom: function () {
                          return (0, r._)(t.getState().transform, 3)[2];
                        },
                        setViewport: function (t, e) {
                          var o = i.CR.translate(t.x, t.y).scale(t.zoom);
                          n.transform(
                            (0, r.F)(
                              u,
                              null === e || void 0 === e ? void 0 : e.duration,
                            ),
                            o,
                          );
                        },
                        getViewport: function () {
                          var e = (0, r._)(t.getState().transform, 3);
                          return { x: e[0], y: e[1], zoom: e[2] };
                        },
                        fitView: function (e) {
                          return (0, r.G)(t.getState, e);
                        },
                        setCenter: function (e, o, a) {
                          var c = t.getState(),
                            s = c.width,
                            l = c.height,
                            f = c.maxZoom,
                            h =
                              "undefined" !==
                              typeof (null === a || void 0 === a
                                ? void 0
                                : a.zoom)
                                ? a.zoom
                                : f,
                            d = s / 2 - e * h,
                            p = l / 2 - o * h,
                            g = i.CR.translate(d, p).scale(h);
                          n.transform(
                            (0, r.F)(
                              u,
                              null === a || void 0 === a ? void 0 : a.duration,
                            ),
                            g,
                          );
                        },
                        fitBounds: function (e, o) {
                          var a,
                            c = t.getState(),
                            s = c.width,
                            l = c.height,
                            f = c.minZoom,
                            h = c.maxZoom,
                            d = (0, r.z)(
                              e,
                              s,
                              l,
                              f,
                              h,
                              null !==
                                (a =
                                  null === o || void 0 === o
                                    ? void 0
                                    : o.padding) && void 0 !== a
                                ? a
                                : 0.1,
                            ),
                            p = (0, r._)(d, 3),
                            g = p[0],
                            y = p[1],
                            v = p[2],
                            m = i.CR.translate(g, y).scale(v);
                          n.transform(
                            (0, r.F)(
                              u,
                              null === o || void 0 === o ? void 0 : o.duration,
                            ),
                            m,
                          );
                        },
                        project: function (e) {
                          var n = t.getState(),
                            o = n.transform,
                            i = n.snapToGrid,
                            a = n.snapGrid;
                          return (0, r.H)(e, o, i, a);
                        },
                        initialized: !0,
                      }
                    : s;
                },
                [n, u],
              );
            })(),
            e = t.initialized,
            n = u(t, f),
            h = (0, r.u)(),
            p = (0, o.useCallback)(function () {
              var t = h.getState().nodeInternals;
              return Array.from(t.values()).map(function (t) {
                return d({}, t);
              });
            }, []),
            g = (0, o.useCallback)(function (t) {
              return h.getState().nodeInternals.get(t);
            }, []),
            y = (0, o.useCallback)(function () {
              var t = h.getState().edges;
              return (void 0 === t ? [] : t).map(function (t) {
                return d({}, t);
              });
            }, []),
            v = (0, o.useCallback)(function (t) {
              var e = h.getState().edges;
              return (void 0 === e ? [] : e).find(function (e) {
                return e.id === t;
              });
            }, []),
            m = (0, o.useCallback)(function (t) {
              var e = h.getState(),
                n = e.nodeInternals,
                r = e.setNodes,
                o = e.hasDefaultNodes,
                i = e.onNodesChange,
                a = Array.from(n.values()),
                u = "function" === typeof t ? t(a) : t;
              if (o) r(u);
              else if (i) {
                i(
                  u.map(function (t) {
                    return { item: t, type: "reset" };
                  }),
                );
              }
            }, []),
            b = (0, o.useCallback)(function (t) {
              var e = h.getState(),
                n = e.edges,
                r = void 0 === n ? [] : n,
                o = e.setEdges,
                i = e.hasDefaultEdges,
                a = e.onEdgesChange,
                u = "function" === typeof t ? t(r) : t;
              if (i) o(u);
              else if (a) {
                a(
                  u.map(function (t) {
                    return { item: t, type: "reset" };
                  }),
                );
              }
            }, []),
            w = (0, o.useCallback)(function (t) {
              var e = Array.isArray(t) ? t : [t],
                n = h.getState(),
                r = n.nodeInternals,
                o = n.setNodes,
                i = n.hasDefaultNodes,
                a = n.onNodesChange;
              if (i) {
                var u = Array.from(r.values());
                o([].concat(c(u), c(e)));
              } else if (a) {
                a(
                  e.map(function (t) {
                    return { item: t, type: "add" };
                  }),
                );
              }
            }, []),
            _ = (0, o.useCallback)(function (t) {
              var e = Array.isArray(t) ? t : [t],
                n = h.getState(),
                r = n.edges,
                o = void 0 === r ? [] : r,
                i = n.setEdges,
                a = n.hasDefaultEdges,
                u = n.onEdgesChange;
              if (a) i([].concat(c(o), c(e)));
              else if (u) {
                u(
                  e.map(function (t) {
                    return { item: t, type: "add" };
                  }),
                );
              }
            }, []),
            O = (0, o.useCallback)(function () {
              var t = h.getState(),
                e = t.nodeInternals,
                n = t.edges,
                o = void 0 === n ? [] : n,
                i = t.transform,
                a = Array.from(e.values()),
                u = (0, r._)(i, 3),
                c = u[0],
                s = u[1],
                l = u[2];
              return {
                nodes: a.map(function (t) {
                  return d({}, t);
                }),
                edges: o.map(function (t) {
                  return d({}, t);
                }),
                viewport: { x: c, y: s, zoom: l },
              };
            }, []);
          return d(
            d({}, n),
            {},
            {
              viewportInitialized: e,
              getNodes: p,
              getNode: g,
              getEdges: y,
              getEdge: v,
              setNodes: m,
              setEdges: b,
              addNodes: w,
              addEdges: _,
              toObject: O,
            },
          );
        }
      },
      6810: function (t, e, n) {
        "use strict";
        n(67294), n(95336);
      },
      84804: function (t, e, n) {
        "use strict";
        n(95336);
      },
      533: function (t, e, n) {
        "use strict";
        function r(t, e) {
          if (Object.is(t, e)) return !0;
          if (
            "object" !== typeof t ||
            null === t ||
            "object" !== typeof e ||
            null === e
          )
            return !1;
          const n = Object.keys(t);
          if (n.length !== Object.keys(e).length) return !1;
          for (let r = 0; r < n.length; r++)
            if (
              !Object.prototype.hasOwnProperty.call(e, n[r]) ||
              !Object.is(t[n[r]], e[n[r]])
            )
              return !1;
          return !0;
        }
        n.d(e, {
          Z: function () {
            return r;
          },
        });
      },
      83840: function (t, e, n) {
        "use strict";
        function r(t) {
          if ("string" === typeof t || "number" === typeof t) return "" + t;
          let e = "";
          if (Array.isArray(t))
            for (let n, o = 0; o < t.length; o++)
              "" !== (n = r(t[o])) && (e += (e && " ") + n);
          else for (let n in t) t[n] && (e += (e && " ") + n);
          return e;
        }
        n.d(e, {
          Z: function () {
            return r;
          },
        });
      },
      4447: function (t, e, n) {
        "use strict";
        n.d(e, {
          B8: function () {
            return S;
          },
          Il: function () {
            return o;
          },
          J5: function () {
            return a;
          },
          SU: function () {
            return x;
          },
          Ss: function () {
            return E;
          },
          Ym: function () {
            return C;
          },
          ZP: function () {
            return w;
          },
          xV: function () {
            return i;
          },
        });
        var r = n(49531);
        function o() {}
        var i = 0.7,
          a = 1 / i,
          u = "\\s*([+-]?\\d+)\\s*",
          c = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
          s = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
          l = /^#([0-9a-f]{3,8})$/,
          f = new RegExp(`^rgb\\(${u},${u},${u}\\)$`),
          h = new RegExp(`^rgb\\(${s},${s},${s}\\)$`),
          d = new RegExp(`^rgba\\(${u},${u},${u},${c}\\)$`),
          p = new RegExp(`^rgba\\(${s},${s},${s},${c}\\)$`),
          g = new RegExp(`^hsl\\(${c},${s},${s}\\)$`),
          y = new RegExp(`^hsla\\(${c},${s},${s},${c}\\)$`),
          v = {
            aliceblue: 15792383,
            antiquewhite: 16444375,
            aqua: 65535,
            aquamarine: 8388564,
            azure: 15794175,
            beige: 16119260,
            bisque: 16770244,
            black: 0,
            blanchedalmond: 16772045,
            blue: 255,
            blueviolet: 9055202,
            brown: 10824234,
            burlywood: 14596231,
            cadetblue: 6266528,
            chartreuse: 8388352,
            chocolate: 13789470,
            coral: 16744272,
            cornflowerblue: 6591981,
            cornsilk: 16775388,
            crimson: 14423100,
            cyan: 65535,
            darkblue: 139,
            darkcyan: 35723,
            darkgoldenrod: 12092939,
            darkgray: 11119017,
            darkgreen: 25600,
            darkgrey: 11119017,
            darkkhaki: 12433259,
            darkmagenta: 9109643,
            darkolivegreen: 5597999,
            darkorange: 16747520,
            darkorchid: 10040012,
            darkred: 9109504,
            darksalmon: 15308410,
            darkseagreen: 9419919,
            darkslateblue: 4734347,
            darkslategray: 3100495,
            darkslategrey: 3100495,
            darkturquoise: 52945,
            darkviolet: 9699539,
            deeppink: 16716947,
            deepskyblue: 49151,
            dimgray: 6908265,
            dimgrey: 6908265,
            dodgerblue: 2003199,
            firebrick: 11674146,
            floralwhite: 16775920,
            forestgreen: 2263842,
            fuchsia: 16711935,
            gainsboro: 14474460,
            ghostwhite: 16316671,
            gold: 16766720,
            goldenrod: 14329120,
            gray: 8421504,
            green: 32768,
            greenyellow: 11403055,
            grey: 8421504,
            honeydew: 15794160,
            hotpink: 16738740,
            indianred: 13458524,
            indigo: 4915330,
            ivory: 16777200,
            khaki: 15787660,
            lavender: 15132410,
            lavenderblush: 16773365,
            lawngreen: 8190976,
            lemonchiffon: 16775885,
            lightblue: 11393254,
            lightcoral: 15761536,
            lightcyan: 14745599,
            lightgoldenrodyellow: 16448210,
            lightgray: 13882323,
            lightgreen: 9498256,
            lightgrey: 13882323,
            lightpink: 16758465,
            lightsalmon: 16752762,
            lightseagreen: 2142890,
            lightskyblue: 8900346,
            lightslategray: 7833753,
            lightslategrey: 7833753,
            lightsteelblue: 11584734,
            lightyellow: 16777184,
            lime: 65280,
            limegreen: 3329330,
            linen: 16445670,
            magenta: 16711935,
            maroon: 8388608,
            mediumaquamarine: 6737322,
            mediumblue: 205,
            mediumorchid: 12211667,
            mediumpurple: 9662683,
            mediumseagreen: 3978097,
            mediumslateblue: 8087790,
            mediumspringgreen: 64154,
            mediumturquoise: 4772300,
            mediumvioletred: 13047173,
            midnightblue: 1644912,
            mintcream: 16121850,
            mistyrose: 16770273,
            moccasin: 16770229,
            navajowhite: 16768685,
            navy: 128,
            oldlace: 16643558,
            olive: 8421376,
            olivedrab: 7048739,
            orange: 16753920,
            orangered: 16729344,
            orchid: 14315734,
            palegoldenrod: 15657130,
            palegreen: 10025880,
            paleturquoise: 11529966,
            palevioletred: 14381203,
            papayawhip: 16773077,
            peachpuff: 16767673,
            peru: 13468991,
            pink: 16761035,
            plum: 14524637,
            powderblue: 11591910,
            purple: 8388736,
            rebeccapurple: 6697881,
            red: 16711680,
            rosybrown: 12357519,
            royalblue: 4286945,
            saddlebrown: 9127187,
            salmon: 16416882,
            sandybrown: 16032864,
            seagreen: 3050327,
            seashell: 16774638,
            sienna: 10506797,
            silver: 12632256,
            skyblue: 8900331,
            slateblue: 6970061,
            slategray: 7372944,
            slategrey: 7372944,
            snow: 16775930,
            springgreen: 65407,
            steelblue: 4620980,
            tan: 13808780,
            teal: 32896,
            thistle: 14204888,
            tomato: 16737095,
            turquoise: 4251856,
            violet: 15631086,
            wheat: 16113331,
            white: 16777215,
            whitesmoke: 16119285,
            yellow: 16776960,
            yellowgreen: 10145074,
          };
        function m() {
          return this.rgb().formatHex();
        }
        function b() {
          return this.rgb().formatRgb();
        }
        function w(t) {
          var e, n;
          return (
            (t = (t + "").trim().toLowerCase()),
            (e = l.exec(t))
              ? ((n = e[1].length),
                (e = parseInt(e[1], 16)),
                6 === n
                  ? _(e)
                  : 3 === n
                    ? new E(
                        ((e >> 8) & 15) | ((e >> 4) & 240),
                        ((e >> 4) & 15) | (240 & e),
                        ((15 & e) << 4) | (15 & e),
                        1,
                      )
                    : 8 === n
                      ? O(
                          (e >> 24) & 255,
                          (e >> 16) & 255,
                          (e >> 8) & 255,
                          (255 & e) / 255,
                        )
                      : 4 === n
                        ? O(
                            ((e >> 12) & 15) | ((e >> 8) & 240),
                            ((e >> 8) & 15) | ((e >> 4) & 240),
                            ((e >> 4) & 15) | (240 & e),
                            (((15 & e) << 4) | (15 & e)) / 255,
                          )
                        : null)
              : (e = f.exec(t))
                ? new E(e[1], e[2], e[3], 1)
                : (e = h.exec(t))
                  ? new E(
                      (255 * e[1]) / 100,
                      (255 * e[2]) / 100,
                      (255 * e[3]) / 100,
                      1,
                    )
                  : (e = d.exec(t))
                    ? O(e[1], e[2], e[3], e[4])
                    : (e = p.exec(t))
                      ? O(
                          (255 * e[1]) / 100,
                          (255 * e[2]) / 100,
                          (255 * e[3]) / 100,
                          e[4],
                        )
                      : (e = g.exec(t))
                        ? k(e[1], e[2] / 100, e[3] / 100, 1)
                        : (e = y.exec(t))
                          ? k(e[1], e[2] / 100, e[3] / 100, e[4])
                          : v.hasOwnProperty(t)
                            ? _(v[t])
                            : "transparent" === t
                              ? new E(NaN, NaN, NaN, 0)
                              : null
          );
        }
        function _(t) {
          return new E((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
        }
        function O(t, e, n, r) {
          return r <= 0 && (t = e = n = NaN), new E(t, e, n, r);
        }
        function x(t) {
          return (
            t instanceof o || (t = w(t)),
            t ? new E((t = t.rgb()).r, t.g, t.b, t.opacity) : new E()
          );
        }
        function S(t, e, n, r) {
          return 1 === arguments.length
            ? x(t)
            : new E(t, e, n, null == r ? 1 : r);
        }
        function E(t, e, n, r) {
          (this.r = +t), (this.g = +e), (this.b = +n), (this.opacity = +r);
        }
        function P() {
          return `#${M(this.r)}${M(this.g)}${M(this.b)}`;
        }
        function j() {
          const t = D(this.opacity);
          return `${1 === t ? "rgb(" : "rgba("}${N(this.r)}, ${N(this.g)}, ${N(this.b)}${1 === t ? ")" : `, ${t})`}`;
        }
        function D(t) {
          return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
        }
        function N(t) {
          return Math.max(0, Math.min(255, Math.round(t) || 0));
        }
        function M(t) {
          return ((t = N(t)) < 16 ? "0" : "") + t.toString(16);
        }
        function k(t, e, n, r) {
          return (
            r <= 0
              ? (t = e = n = NaN)
              : n <= 0 || n >= 1
                ? (t = e = NaN)
                : e <= 0 && (t = NaN),
            new T(t, e, n, r)
          );
        }
        function A(t) {
          if (t instanceof T) return new T(t.h, t.s, t.l, t.opacity);
          if ((t instanceof o || (t = w(t)), !t)) return new T();
          if (t instanceof T) return t;
          var e = (t = t.rgb()).r / 255,
            n = t.g / 255,
            r = t.b / 255,
            i = Math.min(e, n, r),
            a = Math.max(e, n, r),
            u = NaN,
            c = a - i,
            s = (a + i) / 2;
          return (
            c
              ? ((u =
                  e === a
                    ? (n - r) / c + 6 * (n < r)
                    : n === a
                      ? (r - e) / c + 2
                      : (e - n) / c + 4),
                (c /= s < 0.5 ? a + i : 2 - a - i),
                (u *= 60))
              : (c = s > 0 && s < 1 ? 0 : u),
            new T(u, c, s, t.opacity)
          );
        }
        function C(t, e, n, r) {
          return 1 === arguments.length
            ? A(t)
            : new T(t, e, n, null == r ? 1 : r);
        }
        function T(t, e, n, r) {
          (this.h = +t), (this.s = +e), (this.l = +n), (this.opacity = +r);
        }
        function z(t) {
          return (t = (t || 0) % 360) < 0 ? t + 360 : t;
        }
        function Z(t) {
          return Math.max(0, Math.min(1, t || 0));
        }
        function I(t, e, n) {
          return (
            255 *
            (t < 60
              ? e + ((n - e) * t) / 60
              : t < 180
                ? n
                : t < 240
                  ? e + ((n - e) * (240 - t)) / 60
                  : e)
          );
        }
        (0, r.Z)(o, w, {
          copy(t) {
            return Object.assign(new this.constructor(), this, t);
          },
          displayable() {
            return this.rgb().displayable();
          },
          hex: m,
          formatHex: m,
          formatHex8: function () {
            return this.rgb().formatHex8();
          },
          formatHsl: function () {
            return A(this).formatHsl();
          },
          formatRgb: b,
          toString: b,
        }),
          (0, r.Z)(
            E,
            S,
            (0, r.l)(o, {
              brighter(t) {
                return (
                  (t = null == t ? a : Math.pow(a, t)),
                  new E(this.r * t, this.g * t, this.b * t, this.opacity)
                );
              },
              darker(t) {
                return (
                  (t = null == t ? i : Math.pow(i, t)),
                  new E(this.r * t, this.g * t, this.b * t, this.opacity)
                );
              },
              rgb() {
                return this;
              },
              clamp() {
                return new E(N(this.r), N(this.g), N(this.b), D(this.opacity));
              },
              displayable() {
                return (
                  -0.5 <= this.r &&
                  this.r < 255.5 &&
                  -0.5 <= this.g &&
                  this.g < 255.5 &&
                  -0.5 <= this.b &&
                  this.b < 255.5 &&
                  0 <= this.opacity &&
                  this.opacity <= 1
                );
              },
              hex: P,
              formatHex: P,
              formatHex8: function () {
                return `#${M(this.r)}${M(this.g)}${M(this.b)}${M(255 * (isNaN(this.opacity) ? 1 : this.opacity))}`;
              },
              formatRgb: j,
              toString: j,
            }),
          ),
          (0, r.Z)(
            T,
            C,
            (0, r.l)(o, {
              brighter(t) {
                return (
                  (t = null == t ? a : Math.pow(a, t)),
                  new T(this.h, this.s, this.l * t, this.opacity)
                );
              },
              darker(t) {
                return (
                  (t = null == t ? i : Math.pow(i, t)),
                  new T(this.h, this.s, this.l * t, this.opacity)
                );
              },
              rgb() {
                var t = (this.h % 360) + 360 * (this.h < 0),
                  e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                  n = this.l,
                  r = n + (n < 0.5 ? n : 1 - n) * e,
                  o = 2 * n - r;
                return new E(
                  I(t >= 240 ? t - 240 : t + 120, o, r),
                  I(t, o, r),
                  I(t < 120 ? t + 240 : t - 120, o, r),
                  this.opacity,
                );
              },
              clamp() {
                return new T(z(this.h), Z(this.s), Z(this.l), D(this.opacity));
              },
              displayable() {
                return (
                  ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
                  0 <= this.l &&
                  this.l <= 1 &&
                  0 <= this.opacity &&
                  this.opacity <= 1
                );
              },
              formatHsl() {
                const t = D(this.opacity);
                return `${1 === t ? "hsl(" : "hsla("}${z(this.h)}, ${100 * Z(this.s)}%, ${100 * Z(this.l)}%${1 === t ? ")" : `, ${t})`}`;
              },
            }),
          );
      },
      49531: function (t, e, n) {
        "use strict";
        function r(t, e, n) {
          (t.prototype = e.prototype = n), (n.constructor = t);
        }
        function o(t, e) {
          var n = Object.create(t.prototype);
          for (var r in e) n[r] = e[r];
          return n;
        }
        n.d(e, {
          Z: function () {
            return r;
          },
          l: function () {
            return o;
          },
        });
      },
      96057: function (t, e) {
        "use strict";
        var n = { value: () => {} };
        function r() {
          for (var t, e = 0, n = arguments.length, r = {}; e < n; ++e) {
            if (!(t = arguments[e] + "") || t in r || /[\s.]/.test(t))
              throw new Error("illegal type: " + t);
            r[t] = [];
          }
          return new o(r);
        }
        function o(t) {
          this._ = t;
        }
        function i(t, e) {
          return t
            .trim()
            .split(/^|\s+/)
            .map(function (t) {
              var n = "",
                r = t.indexOf(".");
              if (
                (r >= 0 && ((n = t.slice(r + 1)), (t = t.slice(0, r))),
                t && !e.hasOwnProperty(t))
              )
                throw new Error("unknown type: " + t);
              return { type: t, name: n };
            });
        }
        function a(t, e) {
          for (var n, r = 0, o = t.length; r < o; ++r)
            if ((n = t[r]).name === e) return n.value;
        }
        function u(t, e, r) {
          for (var o = 0, i = t.length; o < i; ++o)
            if (t[o].name === e) {
              (t[o] = n), (t = t.slice(0, o).concat(t.slice(o + 1)));
              break;
            }
          return null != r && t.push({ name: e, value: r }), t;
        }
        (o.prototype = r.prototype =
          {
            constructor: o,
            on: function (t, e) {
              var n,
                r = this._,
                o = i(t + "", r),
                c = -1,
                s = o.length;
              if (!(arguments.length < 2)) {
                if (null != e && "function" !== typeof e)
                  throw new Error("invalid callback: " + e);
                for (; ++c < s; )
                  if ((n = (t = o[c]).type)) r[n] = u(r[n], t.name, e);
                  else if (null == e) for (n in r) r[n] = u(r[n], t.name, null);
                return this;
              }
              for (; ++c < s; )
                if ((n = (t = o[c]).type) && (n = a(r[n], t.name))) return n;
            },
            copy: function () {
              var t = {},
                e = this._;
              for (var n in e) t[n] = e[n].slice();
              return new o(t);
            },
            call: function (t, e) {
              if ((n = arguments.length - 2) > 0)
                for (var n, r, o = new Array(n), i = 0; i < n; ++i)
                  o[i] = arguments[i + 2];
              if (!this._.hasOwnProperty(t))
                throw new Error("unknown type: " + t);
              for (i = 0, n = (r = this._[t]).length; i < n; ++i)
                r[i].value.apply(e, o);
            },
            apply: function (t, e, n) {
              if (!this._.hasOwnProperty(t))
                throw new Error("unknown type: " + t);
              for (var r = this._[t], o = 0, i = r.length; o < i; ++o)
                r[o].value.apply(e, n);
            },
          }),
          (e.Z = r);
      },
      27265: function (t, e, n) {
        "use strict";
        function r(t, e, n, r, o) {
          var i = t * t,
            a = i * t;
          return (
            ((1 - 3 * t + 3 * i - a) * e +
              (4 - 6 * i + 3 * a) * n +
              (1 + 3 * t + 3 * i - 3 * a) * r +
              a * o) /
            6
          );
        }
        function o(t) {
          var e = t.length - 1;
          return function (n) {
            var o =
                n <= 0 ? (n = 0) : n >= 1 ? ((n = 1), e - 1) : Math.floor(n * e),
              i = t[o],
              a = t[o + 1],
              u = o > 0 ? t[o - 1] : 2 * i - a,
              c = o < e - 1 ? t[o + 2] : 2 * a - i;
            return r((n - o / e) * e, u, i, a, c);
          };
        }
        n.d(e, {
          Z: function () {
            return o;
          },
          t: function () {
            return r;
          },
        });
      },
      76068: function (t, e, n) {
        "use strict";
        n.d(e, {
          Z: function () {
            return o;
          },
        });
        var r = n(27265);
        function o(t) {
          var e = t.length;
          return function (n) {
            var o = Math.floor(((n %= 1) < 0 ? ++n : n) * e),
              i = t[(o + e - 1) % e],
              a = t[o % e],
              u = t[(o + 1) % e],
              c = t[(o + 2) % e];
            return (0, r.t)((n - o / e) * e, i, a, u, c);
          };
        }
      },
      98280: function (t, e, n) {
        "use strict";
        n.d(e, {
          ZP: function () {
            return u;
          },
          wx: function () {
            return i;
          },
          yi: function () {
            return a;
          },
        });
        var r = n(22954);
        function o(t, e) {
          return function (n) {
            return t + n * e;
          };
        }
        function i(t, e) {
          var n = e - t;
          return n
            ? o(t, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n)
            : (0, r.Z)(isNaN(t) ? e : t);
        }
        function a(t) {
          return 1 === (t = +t)
            ? u
            : function (e, n) {
                return n - e
                  ? (function (t, e, n) {
                      return (
                        (t = Math.pow(t, n)),
                        (e = Math.pow(e, n) - t),
                        (n = 1 / n),
                        function (r) {
                          return Math.pow(t + r * e, n);
                        }
                      );
                    })(e, n, t)
                  : (0, r.Z)(isNaN(e) ? n : e);
              };
        }
        function u(t, e) {
          var n = e - t;
          return n ? o(t, n) : (0, r.Z)(isNaN(t) ? e : t);
        }
      },
      22954: function (t, e) {
        "use strict";
        e.Z = (t) => () => t;
      },
      68063: function (t, e, n) {
        "use strict";
        function r(t, e) {
          return (
            (t = +t),
            (e = +e),
            function (n) {
              return t * (1 - n) + e * n;
            }
          );
        }
        n.d(e, {
          Z: function () {
            return r;
          },
        });
      },
      6354: function (t, e, n) {
        "use strict";
        n.d(e, {
          YD: function () {
            return s;
          },
          hD: function () {
            return c;
          },
        });
        var r = n(4447),
          o = n(27265),
          i = n(76068),
          a = n(98280);
        function u(t) {
          return function (e) {
            var n,
              o,
              i = e.length,
              a = new Array(i),
              u = new Array(i),
              c = new Array(i);
            for (n = 0; n < i; ++n)
              (o = (0, r.B8)(e[n])),
                (a[n] = o.r || 0),
                (u[n] = o.g || 0),
                (c[n] = o.b || 0);
            return (
              (a = t(a)),
              (u = t(u)),
              (c = t(c)),
              (o.opacity = 1),
              function (t) {
                return (o.r = a(t)), (o.g = u(t)), (o.b = c(t)), o + "";
              }
            );
          };
        }
        e.ZP = (function t(e) {
          var n = (0, a.yi)(e);
          function o(t, e) {
            var o = n((t = (0, r.B8)(t)).r, (e = (0, r.B8)(e)).r),
              i = n(t.g, e.g),
              u = n(t.b, e.b),
              c = (0, a.ZP)(t.opacity, e.opacity);
            return function (e) {
              return (
                (t.r = o(e)),
                (t.g = i(e)),
                (t.b = u(e)),
                (t.opacity = c(e)),
                t + ""
              );
            };
          }
          return (o.gamma = t), o;
        })(1);
        var c = u(o.Z),
          s = u(i.Z);
      },
      16773: function (t, e, n) {
        "use strict";
        n.d(e, {
          Z: function () {
            return a;
          },
        });
        var r = n(68063),
          o = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
          i = new RegExp(o.source, "g");
        function a(t, e) {
          var n,
            a,
            u,
            c = (o.lastIndex = i.lastIndex = 0),
            s = -1,
            l = [],
            f = [];
          for (t += "", e += ""; (n = o.exec(t)) && (a = i.exec(e)); )
            (u = a.index) > c &&
              ((u = e.slice(c, u)), l[s] ? (l[s] += u) : (l[++s] = u)),
              (n = n[0]) === (a = a[0])
                ? l[s]
                  ? (l[s] += a)
                  : (l[++s] = a)
                : ((l[++s] = null), f.push({ i: s, x: (0, r.Z)(n, a) })),
              (c = i.lastIndex);
          return (
            c < e.length && ((u = e.slice(c)), l[s] ? (l[s] += u) : (l[++s] = u)),
            l.length < 2
              ? f[0]
                ? (function (t) {
                    return function (e) {
                      return t(e) + "";
                    };
                  })(f[0].x)
                : (function (t) {
                    return function () {
                      return t;
                    };
                  })(e)
              : ((e = f.length),
                function (t) {
                  for (var n, r = 0; r < e; ++r) l[(n = f[r]).i] = n.x(t);
                  return l.join("");
                })
          );
        }
      },
      99321: function (t, e, n) {
        "use strict";
        n.d(e, {
          Y: function () {
            return s;
          },
          w: function () {
            return l;
          },
        });
        var r,
          o = n(68063),
          i = 180 / Math.PI,
          a = {
            translateX: 0,
            translateY: 0,
            rotate: 0,
            skewX: 0,
            scaleX: 1,
            scaleY: 1,
          };
        function u(t, e, n, r, o, a) {
          var u, c, s;
          return (
            (u = Math.sqrt(t * t + e * e)) && ((t /= u), (e /= u)),
            (s = t * n + e * r) && ((n -= t * s), (r -= e * s)),
            (c = Math.sqrt(n * n + r * r)) && ((n /= c), (r /= c), (s /= c)),
            t * r < e * n && ((t = -t), (e = -e), (s = -s), (u = -u)),
            {
              translateX: o,
              translateY: a,
              rotate: Math.atan2(e, t) * i,
              skewX: Math.atan(s) * i,
              scaleX: u,
              scaleY: c,
            }
          );
        }
        function c(t, e, n, r) {
          function i(t) {
            return t.length ? t.pop() + " " : "";
          }
          return function (a, u) {
            var c = [],
              s = [];
            return (
              (a = t(a)),
              (u = t(u)),
              (function (t, r, i, a, u, c) {
                if (t !== i || r !== a) {
                  var s = u.push("translate(", null, e, null, n);
                  c.push(
                    { i: s - 4, x: (0, o.Z)(t, i) },
                    { i: s - 2, x: (0, o.Z)(r, a) },
                  );
                } else (i || a) && u.push("translate(" + i + e + a + n);
              })(a.translateX, a.translateY, u.translateX, u.translateY, c, s),
              (function (t, e, n, a) {
                t !== e
                  ? (t - e > 180 ? (e += 360) : e - t > 180 && (t += 360),
                    a.push({
                      i: n.push(i(n) + "rotate(", null, r) - 2,
                      x: (0, o.Z)(t, e),
                    }))
                  : e && n.push(i(n) + "rotate(" + e + r);
              })(a.rotate, u.rotate, c, s),
              (function (t, e, n, a) {
                t !== e
                  ? a.push({
                      i: n.push(i(n) + "skewX(", null, r) - 2,
                      x: (0, o.Z)(t, e),
                    })
                  : e && n.push(i(n) + "skewX(" + e + r);
              })(a.skewX, u.skewX, c, s),
              (function (t, e, n, r, a, u) {
                if (t !== n || e !== r) {
                  var c = a.push(i(a) + "scale(", null, ",", null, ")");
                  u.push(
                    { i: c - 4, x: (0, o.Z)(t, n) },
                    { i: c - 2, x: (0, o.Z)(e, r) },
                  );
                } else
                  (1 === n && 1 === r) ||
                    a.push(i(a) + "scale(" + n + "," + r + ")");
              })(a.scaleX, a.scaleY, u.scaleX, u.scaleY, c, s),
              (a = u = null),
              function (t) {
                for (var e, n = -1, r = s.length; ++n < r; )
                  c[(e = s[n]).i] = e.x(t);
                return c.join("");
              }
            );
          };
        }
        var s = c(
            function (t) {
              const e = new (
                "function" === typeof DOMMatrix ? DOMMatrix : WebKitCSSMatrix
              )(t + "");
              return e.isIdentity ? a : u(e.a, e.b, e.c, e.d, e.e, e.f);
            },
            "px, ",
            "px)",
            "deg)",
          ),
          l = c(
            function (t) {
              return null == t
                ? a
                : (r ||
                    (r = document.createElementNS(
                      "http://www.w3.org/2000/svg",
                      "g",
                    )),
                  r.setAttribute("transform", t),
                  (t = r.transform.baseVal.consolidate())
                    ? u((t = t.matrix).a, t.b, t.c, t.d, t.e, t.f)
                    : a);
            },
            ", ",
            ")",
            ")",
          );
      },
      8167: function (t, e) {
        "use strict";
        function n(t) {
          return ((t = Math.exp(t)) + 1 / t) / 2;
        }
        e.Z = (function t(e, r, o) {
          function i(t, i) {
            var a,
              u,
              c = t[0],
              s = t[1],
              l = t[2],
              f = i[0],
              h = i[1],
              d = i[2],
              p = f - c,
              g = h - s,
              y = p * p + g * g;
            if (y < 1e-12)
              (u = Math.log(d / l) / e),
                (a = function (t) {
                  return [c + t * p, s + t * g, l * Math.exp(e * t * u)];
                });
            else {
              var v = Math.sqrt(y),
                m = (d * d - l * l + o * y) / (2 * l * r * v),
                b = (d * d - l * l - o * y) / (2 * d * r * v),
                w = Math.log(Math.sqrt(m * m + 1) - m),
                _ = Math.log(Math.sqrt(b * b + 1) - b);
              (u = (_ - w) / e),
                (a = function (t) {
                  var o,
                    i = t * u,
                    a = n(w),
                    f =
                      (l / (r * v)) *
                      (a *
                        ((o = e * i + w), ((o = Math.exp(2 * o)) - 1) / (o + 1)) -
                        (function (t) {
                          return ((t = Math.exp(t)) - 1 / t) / 2;
                        })(w));
                  return [c + f * p, s + f * g, (l * a) / n(e * i + w)];
                });
            }
            return (a.duration = (1e3 * u * e) / Math.SQRT2), a;
          }
          return (
            (i.rho = function (e) {
              var n = Math.max(0.001, +e),
                r = n * n;
              return t(n, r, r * r);
            }),
            i
          );
        })(Math.SQRT2, 2, 4);
      },
      24421: function (t, e, n) {
        "use strict";
        function r(t) {
          return function () {
            return this.matches(t);
          };
        }
        function o(t) {
          return function (e) {
            return e.matches(t);
          };
        }
        n.d(e, {
          P: function () {
            return o;
          },
          Z: function () {
            return r;
          },
        });
      },
      31663: function (t, e, n) {
        "use strict";
        n.d(e, {
          Z: function () {
            return o;
          },
        });
        var r = n(91226);
        function o(t) {
          var e = (t += ""),
            n = e.indexOf(":");
          return (
            n >= 0 && "xmlns" !== (e = t.slice(0, n)) && (t = t.slice(n + 1)),
            r.Z.hasOwnProperty(e) ? { space: r.Z[e], local: t } : t
          );
        }
      },
      91226: function (t, e, n) {
        "use strict";
        n.d(e, {
          P: function () {
            return r;
          },
        });
        var r = "http://www.w3.org/1999/xhtml";
        e.Z = {
          svg: "http://www.w3.org/2000/svg",
          xhtml: r,
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
          xmlns: "http://www.w3.org/2000/xmlns/",
        };
      },
      46939: function (t, e, n) {
        "use strict";
        function r(t, e) {
          if (
            ((t = (function (t) {
              let e;
              for (; (e = t.sourceEvent); ) t = e;
              return t;
            })(t)),
            void 0 === e && (e = t.currentTarget),
            e)
          ) {
            var n = e.ownerSVGElement || e;
            if (n.createSVGPoint) {
              var r = n.createSVGPoint();
              return (
                (r.x = t.clientX),
                (r.y = t.clientY),
                [(r = r.matrixTransform(e.getScreenCTM().inverse())).x, r.y]
              );
            }
            if (e.getBoundingClientRect) {
              var o = e.getBoundingClientRect();
              return [
                t.clientX - o.left - e.clientLeft,
                t.clientY - o.top - e.clientTop,
              ];
            }
          }
          return [t.pageX, t.pageY];
        }
        n.d(e, {
          Z: function () {
            return r;
          },
        });
      },
      23838: function (t, e, n) {
        "use strict";
        n.d(e, {
          Z: function () {
            return o;
          },
        });
        var r = n(21680);
        function o(t) {
          return "string" === typeof t
            ? new r.Y1([[document.querySelector(t)]], [document.documentElement])
            : new r.Y1([[t]], r.Jz);
        }
      },
      21680: function (t, e, n) {
        "use strict";
        n.d(e, {
          Y1: function () {
            return ct;
          },
          ZP: function () {
            return lt;
          },
          Jz: function () {
            return ut;
          },
        });
        var r = n(83010);
        function o(t) {
          return null == t ? [] : Array.isArray(t) ? t : Array.from(t);
        }
        var i = n(19701);
        var a = n(24421),
          u = Array.prototype.find;
        function c() {
          return this.firstElementChild;
        }
        var s = Array.prototype.filter;
        function l() {
          return Array.from(this.children);
        }
        function f(t) {
          return new Array(t.length);
        }
        function h(t, e) {
          (this.ownerDocument = t.ownerDocument),
            (this.namespaceURI = t.namespaceURI),
            (this._next = null),
            (this._parent = t),
            (this.__data__ = e);
        }
        function d(t) {
          return function () {
            return t;
          };
        }
        function p(t, e, n, r, o, i) {
          for (var a, u = 0, c = e.length, s = i.length; u < s; ++u)
            (a = e[u])
              ? ((a.__data__ = i[u]), (r[u] = a))
              : (n[u] = new h(t, i[u]));
          for (; u < c; ++u) (a = e[u]) && (o[u] = a);
        }
        function g(t, e, n, r, o, i, a) {
          var u,
            c,
            s,
            l = new Map(),
            f = e.length,
            d = i.length,
            p = new Array(f);
          for (u = 0; u < f; ++u)
            (c = e[u]) &&
              ((p[u] = s = a.call(c, c.__data__, u, e) + ""),
              l.has(s) ? (o[u] = c) : l.set(s, c));
          for (u = 0; u < d; ++u)
            (s = a.call(t, i[u], u, i) + ""),
              (c = l.get(s))
                ? ((r[u] = c), (c.__data__ = i[u]), l.delete(s))
                : (n[u] = new h(t, i[u]));
          for (u = 0; u < f; ++u) (c = e[u]) && l.get(p[u]) === c && (o[u] = c);
        }
        function y(t) {
          return t.__data__;
        }
        function v(t) {
          return "object" === typeof t && "length" in t ? t : Array.from(t);
        }
        function m(t, e) {
          return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
        }
        h.prototype = {
          constructor: h,
          appendChild: function (t) {
            return this._parent.insertBefore(t, this._next);
          },
          insertBefore: function (t, e) {
            return this._parent.insertBefore(t, e);
          },
          querySelector: function (t) {
            return this._parent.querySelector(t);
          },
          querySelectorAll: function (t) {
            return this._parent.querySelectorAll(t);
          },
        };
        var b = n(31663);
        function w(t) {
          return function () {
            this.removeAttribute(t);
          };
        }
        function _(t) {
          return function () {
            this.removeAttributeNS(t.space, t.local);
          };
        }
        function O(t, e) {
          return function () {
            this.setAttribute(t, e);
          };
        }
        function x(t, e) {
          return function () {
            this.setAttributeNS(t.space, t.local, e);
          };
        }
        function S(t, e) {
          return function () {
            var n = e.apply(this, arguments);
            null == n ? this.removeAttribute(t) : this.setAttribute(t, n);
          };
        }
        function E(t, e) {
          return function () {
            var n = e.apply(this, arguments);
            null == n
              ? this.removeAttributeNS(t.space, t.local)
              : this.setAttributeNS(t.space, t.local, n);
          };
        }
        var P = n(52627);
        function j(t) {
          return function () {
            delete this[t];
          };
        }
        function D(t, e) {
          return function () {
            this[t] = e;
          };
        }
        function N(t, e) {
          return function () {
            var n = e.apply(this, arguments);
            null == n ? delete this[t] : (this[t] = n);
          };
        }
        function M(t) {
          return t.trim().split(/^|\s+/);
        }
        function k(t) {
          return t.classList || new A(t);
        }
        function A(t) {
          (this._node = t), (this._names = M(t.getAttribute("class") || ""));
        }
        function C(t, e) {
          for (var n = k(t), r = -1, o = e.length; ++r < o; ) n.add(e[r]);
        }
        function T(t, e) {
          for (var n = k(t), r = -1, o = e.length; ++r < o; ) n.remove(e[r]);
        }
        function z(t) {
          return function () {
            C(this, t);
          };
        }
        function Z(t) {
          return function () {
            T(this, t);
          };
        }
        function I(t, e) {
          return function () {
            (e.apply(this, arguments) ? C : T)(this, t);
          };
        }
        function R() {
          this.textContent = "";
        }
        function V(t) {
          return function () {
            this.textContent = t;
          };
        }
        function H(t) {
          return function () {
            var e = t.apply(this, arguments);
            this.textContent = null == e ? "" : e;
          };
        }
        function B() {
          this.innerHTML = "";
        }
        function Y(t) {
          return function () {
            this.innerHTML = t;
          };
        }
        function X(t) {
          return function () {
            var e = t.apply(this, arguments);
            this.innerHTML = null == e ? "" : e;
          };
        }
        function $() {
          this.nextSibling && this.parentNode.appendChild(this);
        }
        function L() {
          this.previousSibling &&
            this.parentNode.insertBefore(this, this.parentNode.firstChild);
        }
        A.prototype = {
          add: function (t) {
            this._names.indexOf(t) < 0 &&
              (this._names.push(t),
              this._node.setAttribute("class", this._names.join(" ")));
          },
          remove: function (t) {
            var e = this._names.indexOf(t);
            e >= 0 &&
              (this._names.splice(e, 1),
              this._node.setAttribute("class", this._names.join(" ")));
          },
          contains: function (t) {
            return this._names.indexOf(t) >= 0;
          },
        };
        var W = n(91226);
        function U(t) {
          return function () {
            var e = this.ownerDocument,
              n = this.namespaceURI;
            return n === W.P && e.documentElement.namespaceURI === W.P
              ? e.createElement(t)
              : e.createElementNS(n, t);
          };
        }
        function F(t) {
          return function () {
            return this.ownerDocument.createElementNS(t.space, t.local);
          };
        }
        function q(t) {
          var e = (0, b.Z)(t);
          return (e.local ? F : U)(e);
        }
        function G() {
          return null;
        }
        function K() {
          var t = this.parentNode;
          t && t.removeChild(this);
        }
        function J() {
          var t = this.cloneNode(!1),
            e = this.parentNode;
          return e ? e.insertBefore(t, this.nextSibling) : t;
        }
        function Q() {
          var t = this.cloneNode(!0),
            e = this.parentNode;
          return e ? e.insertBefore(t, this.nextSibling) : t;
        }
        function tt(t) {
          return t
            .trim()
            .split(/^|\s+/)
            .map(function (t) {
              var e = "",
                n = t.indexOf(".");
              return (
                n >= 0 && ((e = t.slice(n + 1)), (t = t.slice(0, n))),
                { type: t, name: e }
              );
            });
        }
        function et(t) {
          return function () {
            var e = this.__on;
            if (e) {
              for (var n, r = 0, o = -1, i = e.length; r < i; ++r)
                (n = e[r]),
                  (t.type && n.type !== t.type) || n.name !== t.name
                    ? (e[++o] = n)
                    : this.removeEventListener(n.type, n.listener, n.options);
              ++o ? (e.length = o) : delete this.__on;
            }
          };
        }
        function nt(t, e, n) {
          return function () {
            var r,
              o = this.__on,
              i = (function (t) {
                return function (e) {
                  t.call(this, e, this.__data__);
                };
              })(e);
            if (o)
              for (var a = 0, u = o.length; a < u; ++a)
                if ((r = o[a]).type === t.type && r.name === t.name)
                  return (
                    this.removeEventListener(r.type, r.listener, r.options),
                    this.addEventListener(
                      r.type,
                      (r.listener = i),
                      (r.options = n),
                    ),
                    void (r.value = e)
                  );
            this.addEventListener(t.type, i, n),
              (r = {
                type: t.type,
                name: t.name,
                value: e,
                listener: i,
                options: n,
              }),
              o ? o.push(r) : (this.__on = [r]);
          };
        }
        var rt = n(89920);
        function ot(t, e, n) {
          var r = (0, rt.Z)(t),
            o = r.CustomEvent;
          "function" === typeof o
            ? (o = new o(e, n))
            : ((o = r.document.createEvent("Event")),
              n
                ? (o.initEvent(e, n.bubbles, n.cancelable), (o.detail = n.detail))
                : o.initEvent(e, !1, !1)),
            t.dispatchEvent(o);
        }
        function it(t, e) {
          return function () {
            return ot(this, t, e);
          };
        }
        function at(t, e) {
          return function () {
            return ot(this, t, e.apply(this, arguments));
          };
        }
        var ut = [null];
        function ct(t, e) {
          (this._groups = t), (this._parents = e);
        }
        function st() {
          return new ct([[document.documentElement]], ut);
        }
        ct.prototype = st.prototype = {
          constructor: ct,
          select: function (t) {
            "function" !== typeof t && (t = (0, r.Z)(t));
            for (
              var e = this._groups, n = e.length, o = new Array(n), i = 0;
              i < n;
              ++i
            )
              for (
                var a,
                  u,
                  c = e[i],
                  s = c.length,
                  l = (o[i] = new Array(s)),
                  f = 0;
                f < s;
                ++f
              )
                (a = c[f]) &&
                  (u = t.call(a, a.__data__, f, c)) &&
                  ("__data__" in a && (u.__data__ = a.__data__), (l[f] = u));
            return new ct(o, this._parents);
          },
          selectAll: function (t) {
            t =
              "function" === typeof t
                ? (function (t) {
                    return function () {
                      return o(t.apply(this, arguments));
                    };
                  })(t)
                : (0, i.Z)(t);
            for (
              var e = this._groups, n = e.length, r = [], a = [], u = 0;
              u < n;
              ++u
            )
              for (var c, s = e[u], l = s.length, f = 0; f < l; ++f)
                (c = s[f]) && (r.push(t.call(c, c.__data__, f, s)), a.push(c));
            return new ct(r, a);
          },
          selectChild: function (t) {
            return this.select(
              null == t
                ? c
                : (function (t) {
                    return function () {
                      return u.call(this.children, t);
                    };
                  })("function" === typeof t ? t : (0, a.P)(t)),
            );
          },
          selectChildren: function (t) {
            return this.selectAll(
              null == t
                ? l
                : (function (t) {
                    return function () {
                      return s.call(this.children, t);
                    };
                  })("function" === typeof t ? t : (0, a.P)(t)),
            );
          },
          filter: function (t) {
            "function" !== typeof t && (t = (0, a.Z)(t));
            for (
              var e = this._groups, n = e.length, r = new Array(n), o = 0;
              o < n;
              ++o
            )
              for (
                var i, u = e[o], c = u.length, s = (r[o] = []), l = 0;
                l < c;
                ++l
              )
                (i = u[l]) && t.call(i, i.__data__, l, u) && s.push(i);
            return new ct(r, this._parents);
          },
          data: function (t, e) {
            if (!arguments.length) return Array.from(this, y);
            var n = e ? g : p,
              r = this._parents,
              o = this._groups;
            "function" !== typeof t && (t = d(t));
            for (
              var i = o.length,
                a = new Array(i),
                u = new Array(i),
                c = new Array(i),
                s = 0;
              s < i;
              ++s
            ) {
              var l = r[s],
                f = o[s],
                h = f.length,
                m = v(t.call(l, l && l.__data__, s, r)),
                b = m.length,
                w = (u[s] = new Array(b)),
                _ = (a[s] = new Array(b)),
                O = (c[s] = new Array(h));
              n(l, f, w, _, O, m, e);
              for (var x, S, E = 0, P = 0; E < b; ++E)
                if ((x = w[E])) {
                  for (E >= P && (P = E + 1); !(S = _[P]) && ++P < b; );
                  x._next = S || null;
                }
            }
            return ((a = new ct(a, r))._enter = u), (a._exit = c), a;
          },
          enter: function () {
            return new ct(this._enter || this._groups.map(f), this._parents);
          },
          exit: function () {
            return new ct(this._exit || this._groups.map(f), this._parents);
          },
          join: function (t, e, n) {
            var r = this.enter(),
              o = this,
              i = this.exit();
            return (
              "function" === typeof t
                ? (r = t(r)) && (r = r.selection())
                : (r = r.append(t + "")),
              null != e && (o = e(o)) && (o = o.selection()),
              null == n ? i.remove() : n(i),
              r && o ? r.merge(o).order() : o
            );
          },
          merge: function (t) {
            for (
              var e = t.selection ? t.selection() : t,
                n = this._groups,
                r = e._groups,
                o = n.length,
                i = r.length,
                a = Math.min(o, i),
                u = new Array(o),
                c = 0;
              c < a;
              ++c
            )
              for (
                var s,
                  l = n[c],
                  f = r[c],
                  h = l.length,
                  d = (u[c] = new Array(h)),
                  p = 0;
                p < h;
                ++p
              )
                (s = l[p] || f[p]) && (d[p] = s);
            for (; c < o; ++c) u[c] = n[c];
            return new ct(u, this._parents);
          },
          selection: function () {
            return this;
          },
          order: function () {
            for (var t = this._groups, e = -1, n = t.length; ++e < n; )
              for (var r, o = t[e], i = o.length - 1, a = o[i]; --i >= 0; )
                (r = o[i]) &&
                  (a &&
                    4 ^ r.compareDocumentPosition(a) &&
                    a.parentNode.insertBefore(r, a),
                  (a = r));
            return this;
          },
          sort: function (t) {
            function e(e, n) {
              return e && n ? t(e.__data__, n.__data__) : !e - !n;
            }
            t || (t = m);
            for (
              var n = this._groups, r = n.length, o = new Array(r), i = 0;
              i < r;
              ++i
            ) {
              for (
                var a, u = n[i], c = u.length, s = (o[i] = new Array(c)), l = 0;
                l < c;
                ++l
              )
                (a = u[l]) && (s[l] = a);
              s.sort(e);
            }
            return new ct(o, this._parents).order();
          },
          call: function () {
            var t = arguments[0];
            return (arguments[0] = this), t.apply(null, arguments), this;
          },
          nodes: function () {
            return Array.from(this);
          },
          node: function () {
            for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
              for (var r = t[e], o = 0, i = r.length; o < i; ++o) {
                var a = r[o];
                if (a) return a;
              }
            return null;
          },
          size: function () {
            let t = 0;
            for (const e of this) ++t;
            return t;
          },
          empty: function () {
            return !this.node();
          },
          each: function (t) {
            for (var e = this._groups, n = 0, r = e.length; n < r; ++n)
              for (var o, i = e[n], a = 0, u = i.length; a < u; ++a)
                (o = i[a]) && t.call(o, o.__data__, a, i);
            return this;
          },
          attr: function (t, e) {
            var n = (0, b.Z)(t);
            if (arguments.length < 2) {
              var r = this.node();
              return n.local
                ? r.getAttributeNS(n.space, n.local)
                : r.getAttribute(n);
            }
            return this.each(
              (null == e
                ? n.local
                  ? _
                  : w
                : "function" === typeof e
                  ? n.local
                    ? E
                    : S
                  : n.local
                    ? x
                    : O)(n, e),
            );
          },
          style: P.Z,
          property: function (t, e) {
            return arguments.length > 1
              ? this.each((null == e ? j : "function" === typeof e ? N : D)(t, e))
              : this.node()[t];
          },
          classed: function (t, e) {
            var n = M(t + "");
            if (arguments.length < 2) {
              for (var r = k(this.node()), o = -1, i = n.length; ++o < i; )
                if (!r.contains(n[o])) return !1;
              return !0;
            }
            return this.each(("function" === typeof e ? I : e ? z : Z)(n, e));
          },
          text: function (t) {
            return arguments.length
              ? this.each(null == t ? R : ("function" === typeof t ? H : V)(t))
              : this.node().textContent;
          },
          html: function (t) {
            return arguments.length
              ? this.each(null == t ? B : ("function" === typeof t ? X : Y)(t))
              : this.node().innerHTML;
          },
          raise: function () {
            return this.each($);
          },
          lower: function () {
            return this.each(L);
          },
          append: function (t) {
            var e = "function" === typeof t ? t : q(t);
            return this.select(function () {
              return this.appendChild(e.apply(this, arguments));
            });
          },
          insert: function (t, e) {
            var n = "function" === typeof t ? t : q(t),
              o = null == e ? G : "function" === typeof e ? e : (0, r.Z)(e);
            return this.select(function () {
              return this.insertBefore(
                n.apply(this, arguments),
                o.apply(this, arguments) || null,
              );
            });
          },
          remove: function () {
            return this.each(K);
          },
          clone: function (t) {
            return this.select(t ? Q : J);
          },
          datum: function (t) {
            return arguments.length
              ? this.property("__data__", t)
              : this.node().__data__;
          },
          on: function (t, e, n) {
            var r,
              o,
              i = tt(t + ""),
              a = i.length;
            if (!(arguments.length < 2)) {
              for (u = e ? nt : et, r = 0; r < a; ++r) this.each(u(i[r], e, n));
              return this;
            }
            var u = this.node().__on;
            if (u)
              for (var c, s = 0, l = u.length; s < l; ++s)
                for (r = 0, c = u[s]; r < a; ++r)
                  if ((o = i[r]).type === c.type && o.name === c.name)
                    return c.value;
          },
          dispatch: function (t, e) {
            return this.each(("function" === typeof e ? at : it)(t, e));
          },
          [Symbol.iterator]: function* () {
            for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
              for (var r, o = t[e], i = 0, a = o.length; i < a; ++i)
                (r = o[i]) && (yield r);
          },
        };
        var lt = st;
      },
      52627: function (t, e, n) {
        "use strict";
        n.d(e, {
          S: function () {
            return c;
          },
          Z: function () {
            return u;
          },
        });
        var r = n(89920);
        function o(t) {
          return function () {
            this.style.removeProperty(t);
          };
        }
        function i(t, e, n) {
          return function () {
            this.style.setProperty(t, e, n);
          };
        }
        function a(t, e, n) {
          return function () {
            var r = e.apply(this, arguments);
            null == r
              ? this.style.removeProperty(t)
              : this.style.setProperty(t, r, n);
          };
        }
        function u(t, e, n) {
          return arguments.length > 1
            ? this.each(
                (null == e ? o : "function" === typeof e ? a : i)(
                  t,
                  e,
                  null == n ? "" : n,
                ),
              )
            : c(this.node(), t);
        }
        function c(t, e) {
          return (
            t.style.getPropertyValue(e) ||
            (0, r.Z)(t).getComputedStyle(t, null).getPropertyValue(e)
          );
        }
      },
      83010: function (t, e, n) {
        "use strict";
        function r() {}
        function o(t) {
          return null == t
            ? r
            : function () {
                return this.querySelector(t);
              };
        }
        n.d(e, {
          Z: function () {
            return o;
          },
        });
      },
      19701: function (t, e, n) {
        "use strict";
        function r() {
          return [];
        }
        function o(t) {
          return null == t
            ? r
            : function () {
                return this.querySelectorAll(t);
              };
        }
        n.d(e, {
          Z: function () {
            return o;
          },
        });
      },
      89920: function (t, e, n) {
        "use strict";
        function r(t) {
          return (
            (t.ownerDocument && t.ownerDocument.defaultView) ||
            (t.document && t) ||
            t.defaultView
          );
        }
        n.d(e, {
          Z: function () {
            return r;
          },
        });
      },
      91739: function (t, e, n) {
        "use strict";
        n.d(e, {
          B7: function () {
            return g;
          },
          HT: function () {
            return y;
          },
          zO: function () {
            return d;
          },
        });
        var r,
          o,
          i = 0,
          a = 0,
          u = 0,
          c = 0,
          s = 0,
          l = 0,
          f =
            "object" === typeof performance && performance.now
              ? performance
              : Date,
          h =
            "object" === typeof window && window.requestAnimationFrame
              ? window.requestAnimationFrame.bind(window)
              : function (t) {
                  setTimeout(t, 17);
                };
        function d() {
          return s || (h(p), (s = f.now() + l));
        }
        function p() {
          s = 0;
        }
        function g() {
          this._call = this._time = this._next = null;
        }
        function y(t, e, n) {
          var r = new g();
          return r.restart(t, e, n), r;
        }
        function v() {
          (s = (c = f.now()) + l), (i = a = 0);
          try {
            !(function () {
              d(), ++i;
              for (var t, e = r; e; )
                (t = s - e._time) >= 0 && e._call.call(void 0, t), (e = e._next);
              --i;
            })();
          } finally {
            (i = 0),
              (function () {
                var t,
                  e,
                  n = r,
                  i = 1 / 0;
                for (; n; )
                  n._call
                    ? (i > n._time && (i = n._time), (t = n), (n = n._next))
                    : ((e = n._next),
                      (n._next = null),
                      (n = t ? (t._next = e) : (r = e)));
                (o = t), b(i);
              })(),
              (s = 0);
          }
        }
        function m() {
          var t = f.now(),
            e = t - c;
          e > 1e3 && ((l -= e), (c = t));
        }
        function b(t) {
          i ||
            (a && (a = clearTimeout(a)),
            t - s > 24
              ? (t < 1 / 0 && (a = setTimeout(v, t - f.now() - l)),
                u && (u = clearInterval(u)))
              : (u || ((c = f.now()), (u = setInterval(m, 1e3))), (i = 1), h(v)));
        }
        g.prototype = y.prototype = {
          constructor: g,
          restart: function (t, e, n) {
            if ("function" !== typeof t)
              throw new TypeError("callback is not a function");
            (n = (null == n ? d() : +n) + (null == e ? 0 : +e)),
              this._next ||
                o === this ||
                (o ? (o._next = this) : (r = this), (o = this)),
              (this._call = t),
              (this._time = n),
              b();
          },
          stop: function () {
            this._call && ((this._call = null), (this._time = 1 / 0), b());
          },
        };
      },
      96780: function (t, e, n) {
        "use strict";
        n.d(e, {
          sP: function () {
            return _t;
          },
          CR: function () {
            return ht;
          },
        });
        var r = n(96057),
          o = n(23838);
        const i = { capture: !0, passive: !1 };
        function a(t) {
          t.preventDefault(), t.stopImmediatePropagation();
        }
        function u(t) {
          var e = t.document.documentElement,
            n = (0, o.Z)(t).on("dragstart.drag", a, i);
          "onselectstart" in e
            ? n.on("selectstart.drag", a, i)
            : ((e.__noselect = e.style.MozUserSelect),
              (e.style.MozUserSelect = "none"));
        }
        function c(t, e) {
          var n = t.document.documentElement,
            r = (0, o.Z)(t).on("dragstart.drag", null);
          e &&
            (r.on("click.drag", a, i),
            setTimeout(function () {
              r.on("click.drag", null);
            }, 0)),
            "onselectstart" in n
              ? r.on("selectstart.drag", null)
              : ((n.style.MozUserSelect = n.__noselect), delete n.__noselect);
        }
        var s = n(8167),
          l = n(46939),
          f = n(21680),
          h = n(91739);
        function d(t, e, n) {
          var r = new h.B7();
          return (
            (e = null == e ? 0 : +e),
            r.restart(
              (n) => {
                r.stop(), t(n + e);
              },
              e,
              n,
            ),
            r
          );
        }
        var p = (0, r.Z)("start", "end", "cancel", "interrupt"),
          g = [];
        function y(t, e, n, r, o, i) {
          var a = t.__transition;
          if (a) {
            if (n in a) return;
          } else t.__transition = {};
          !(function (t, e, n) {
            var r,
              o = t.__transition;
            function i(t) {
              (n.state = 1),
                n.timer.restart(a, n.delay, n.time),
                n.delay <= t && a(t - n.delay);
            }
            function a(i) {
              var s, l, f, h;
              if (1 !== n.state) return c();
              for (s in o)
                if ((h = o[s]).name === n.name) {
                  if (3 === h.state) return d(a);
                  4 === h.state
                    ? ((h.state = 6),
                      h.timer.stop(),
                      h.on.call("interrupt", t, t.__data__, h.index, h.group),
                      delete o[s])
                    : +s < e &&
                      ((h.state = 6),
                      h.timer.stop(),
                      h.on.call("cancel", t, t.__data__, h.index, h.group),
                      delete o[s]);
                }
              if (
                (d(function () {
                  3 === n.state &&
                    ((n.state = 4), n.timer.restart(u, n.delay, n.time), u(i));
                }),
                (n.state = 2),
                n.on.call("start", t, t.__data__, n.index, n.group),
                2 === n.state)
              ) {
                for (
                  n.state = 3, r = new Array((f = n.tween.length)), s = 0, l = -1;
                  s < f;
                  ++s
                )
                  (h = n.tween[s].value.call(t, t.__data__, n.index, n.group)) &&
                    (r[++l] = h);
                r.length = l + 1;
              }
            }
            function u(e) {
              for (
                var o =
                    e < n.duration
                      ? n.ease.call(null, e / n.duration)
                      : (n.timer.restart(c), (n.state = 5), 1),
                  i = -1,
                  a = r.length;
                ++i < a;
  
              )
                r[i].call(t, o);
              5 === n.state &&
                (n.on.call("end", t, t.__data__, n.index, n.group), c());
            }
            function c() {
              for (var r in ((n.state = 6), n.timer.stop(), delete o[e], o))
                return;
              delete t.__transition;
            }
            (o[e] = n), (n.timer = (0, h.HT)(i, 0, n.time));
          })(t, n, {
            name: e,
            index: r,
            group: o,
            on: p,
            tween: g,
            time: i.time,
            delay: i.delay,
            duration: i.duration,
            ease: i.ease,
            timer: null,
            state: 0,
          });
        }
        function v(t, e) {
          var n = b(t, e);
          if (n.state > 0) throw new Error("too late; already scheduled");
          return n;
        }
        function m(t, e) {
          var n = b(t, e);
          if (n.state > 3) throw new Error("too late; already running");
          return n;
        }
        function b(t, e) {
          var n = t.__transition;
          if (!n || !(n = n[e])) throw new Error("transition not found");
          return n;
        }
        function w(t, e) {
          var n,
            r,
            o,
            i = t.__transition,
            a = !0;
          if (i) {
            for (o in ((e = null == e ? null : e + ""), i))
              (n = i[o]).name === e
                ? ((r = n.state > 2 && n.state < 5),
                  (n.state = 6),
                  n.timer.stop(),
                  n.on.call(
                    r ? "interrupt" : "cancel",
                    t,
                    t.__data__,
                    n.index,
                    n.group,
                  ),
                  delete i[o])
                : (a = !1);
            a && delete t.__transition;
          }
        }
        var _ = n(99321),
          O = n(31663);
        function x(t, e) {
          var n, r;
          return function () {
            var o = m(this, t),
              i = o.tween;
            if (i !== n)
              for (var a = 0, u = (r = n = i).length; a < u; ++a)
                if (r[a].name === e) {
                  (r = r.slice()).splice(a, 1);
                  break;
                }
            o.tween = r;
          };
        }
        function S(t, e, n) {
          var r, o;
          if ("function" !== typeof n) throw new Error();
          return function () {
            var i = m(this, t),
              a = i.tween;
            if (a !== r) {
              o = (r = a).slice();
              for (var u = { name: e, value: n }, c = 0, s = o.length; c < s; ++c)
                if (o[c].name === e) {
                  o[c] = u;
                  break;
                }
              c === s && o.push(u);
            }
            i.tween = o;
          };
        }
        function E(t, e, n) {
          var r = t._id;
          return (
            t.each(function () {
              var t = m(this, r);
              (t.value || (t.value = {}))[e] = n.apply(this, arguments);
            }),
            function (t) {
              return b(t, r).value[e];
            }
          );
        }
        var P = n(4447),
          j = n(68063),
          D = n(6354),
          N = n(16773);
        function M(t, e) {
          var n;
          return (
            "number" === typeof e
              ? j.Z
              : e instanceof P.ZP
                ? D.ZP
                : (n = (0, P.ZP)(e))
                  ? ((e = n), D.ZP)
                  : N.Z
          )(t, e);
        }
        function k(t) {
          return function () {
            this.removeAttribute(t);
          };
        }
        function A(t) {
          return function () {
            this.removeAttributeNS(t.space, t.local);
          };
        }
        function C(t, e, n) {
          var r,
            o,
            i = n + "";
          return function () {
            var a = this.getAttribute(t);
            return a === i ? null : a === r ? o : (o = e((r = a), n));
          };
        }
        function T(t, e, n) {
          var r,
            o,
            i = n + "";
          return function () {
            var a = this.getAttributeNS(t.space, t.local);
            return a === i ? null : a === r ? o : (o = e((r = a), n));
          };
        }
        function z(t, e, n) {
          var r, o, i;
          return function () {
            var a,
              u,
              c = n(this);
            if (null != c)
              return (a = this.getAttribute(t)) === (u = c + "")
                ? null
                : a === r && u === o
                  ? i
                  : ((o = u), (i = e((r = a), c)));
            this.removeAttribute(t);
          };
        }
        function Z(t, e, n) {
          var r, o, i;
          return function () {
            var a,
              u,
              c = n(this);
            if (null != c)
              return (a = this.getAttributeNS(t.space, t.local)) === (u = c + "")
                ? null
                : a === r && u === o
                  ? i
                  : ((o = u), (i = e((r = a), c)));
            this.removeAttributeNS(t.space, t.local);
          };
        }
        function I(t, e) {
          return function (n) {
            this.setAttribute(t, e.call(this, n));
          };
        }
        function R(t, e) {
          return function (n) {
            this.setAttributeNS(t.space, t.local, e.call(this, n));
          };
        }
        function V(t, e) {
          var n, r;
          function o() {
            var o = e.apply(this, arguments);
            return o !== r && (n = (r = o) && R(t, o)), n;
          }
          return (o._value = e), o;
        }
        function H(t, e) {
          var n, r;
          function o() {
            var o = e.apply(this, arguments);
            return o !== r && (n = (r = o) && I(t, o)), n;
          }
          return (o._value = e), o;
        }
        function B(t, e) {
          return function () {
            v(this, t).delay = +e.apply(this, arguments);
          };
        }
        function Y(t, e) {
          return (
            (e = +e),
            function () {
              v(this, t).delay = e;
            }
          );
        }
        function X(t, e) {
          return function () {
            m(this, t).duration = +e.apply(this, arguments);
          };
        }
        function $(t, e) {
          return (
            (e = +e),
            function () {
              m(this, t).duration = e;
            }
          );
        }
        function L(t, e) {
          if ("function" !== typeof e) throw new Error();
          return function () {
            m(this, t).ease = e;
          };
        }
        var W = n(24421);
        function U(t, e, n) {
          var r,
            o,
            i = (function (t) {
              return (t + "")
                .trim()
                .split(/^|\s+/)
                .every(function (t) {
                  var e = t.indexOf(".");
                  return e >= 0 && (t = t.slice(0, e)), !t || "start" === t;
                });
            })(e)
              ? v
              : m;
          return function () {
            var a = i(this, t),
              u = a.on;
            u !== r && (o = (r = u).copy()).on(e, n), (a.on = o);
          };
        }
        var F = n(83010);
        var q = n(19701);
        var G = f.ZP.prototype.constructor;
        var K = n(52627);
        function J(t) {
          return function () {
            this.style.removeProperty(t);
          };
        }
        function Q(t, e, n) {
          return function (r) {
            this.style.setProperty(t, e.call(this, r), n);
          };
        }
        function tt(t, e, n) {
          var r, o;
          function i() {
            var i = e.apply(this, arguments);
            return i !== o && (r = (o = i) && Q(t, i, n)), r;
          }
          return (i._value = e), i;
        }
        function et(t) {
          return function (e) {
            this.textContent = t.call(this, e);
          };
        }
        function nt(t) {
          var e, n;
          function r() {
            var r = t.apply(this, arguments);
            return r !== n && (e = (n = r) && et(r)), e;
          }
          return (r._value = t), r;
        }
        var rt = 0;
        function ot(t, e, n, r) {
          (this._groups = t),
            (this._parents = e),
            (this._name = n),
            (this._id = r);
        }
        function it() {
          return ++rt;
        }
        var at = f.ZP.prototype;
        ot.prototype = function (t) {
          return (0, f.ZP)().transition(t);
        }.prototype = {
          constructor: ot,
          select: function (t) {
            var e = this._name,
              n = this._id;
            "function" !== typeof t && (t = (0, F.Z)(t));
            for (
              var r = this._groups, o = r.length, i = new Array(o), a = 0;
              a < o;
              ++a
            )
              for (
                var u,
                  c,
                  s = r[a],
                  l = s.length,
                  f = (i[a] = new Array(l)),
                  h = 0;
                h < l;
                ++h
              )
                (u = s[h]) &&
                  (c = t.call(u, u.__data__, h, s)) &&
                  ("__data__" in u && (c.__data__ = u.__data__),
                  (f[h] = c),
                  y(f[h], e, n, h, f, b(u, n)));
            return new ot(i, this._parents, e, n);
          },
          selectAll: function (t) {
            var e = this._name,
              n = this._id;
            "function" !== typeof t && (t = (0, q.Z)(t));
            for (
              var r = this._groups, o = r.length, i = [], a = [], u = 0;
              u < o;
              ++u
            )
              for (var c, s = r[u], l = s.length, f = 0; f < l; ++f)
                if ((c = s[f])) {
                  for (
                    var h,
                      d = t.call(c, c.__data__, f, s),
                      p = b(c, n),
                      g = 0,
                      v = d.length;
                    g < v;
                    ++g
                  )
                    (h = d[g]) && y(h, e, n, g, d, p);
                  i.push(d), a.push(c);
                }
            return new ot(i, a, e, n);
          },
          selectChild: at.selectChild,
          selectChildren: at.selectChildren,
          filter: function (t) {
            "function" !== typeof t && (t = (0, W.Z)(t));
            for (
              var e = this._groups, n = e.length, r = new Array(n), o = 0;
              o < n;
              ++o
            )
              for (
                var i, a = e[o], u = a.length, c = (r[o] = []), s = 0;
                s < u;
                ++s
              )
                (i = a[s]) && t.call(i, i.__data__, s, a) && c.push(i);
            return new ot(r, this._parents, this._name, this._id);
          },
          merge: function (t) {
            if (t._id !== this._id) throw new Error();
            for (
              var e = this._groups,
                n = t._groups,
                r = e.length,
                o = n.length,
                i = Math.min(r, o),
                a = new Array(r),
                u = 0;
              u < i;
              ++u
            )
              for (
                var c,
                  s = e[u],
                  l = n[u],
                  f = s.length,
                  h = (a[u] = new Array(f)),
                  d = 0;
                d < f;
                ++d
              )
                (c = s[d] || l[d]) && (h[d] = c);
            for (; u < r; ++u) a[u] = e[u];
            return new ot(a, this._parents, this._name, this._id);
          },
          selection: function () {
            return new G(this._groups, this._parents);
          },
          transition: function () {
            for (
              var t = this._name,
                e = this._id,
                n = it(),
                r = this._groups,
                o = r.length,
                i = 0;
              i < o;
              ++i
            )
              for (var a, u = r[i], c = u.length, s = 0; s < c; ++s)
                if ((a = u[s])) {
                  var l = b(a, e);
                  y(a, t, n, s, u, {
                    time: l.time + l.delay + l.duration,
                    delay: 0,
                    duration: l.duration,
                    ease: l.ease,
                  });
                }
            return new ot(r, this._parents, t, n);
          },
          call: at.call,
          nodes: at.nodes,
          node: at.node,
          size: at.size,
          empty: at.empty,
          each: at.each,
          on: function (t, e) {
            var n = this._id;
            return arguments.length < 2
              ? b(this.node(), n).on.on(t)
              : this.each(U(n, t, e));
          },
          attr: function (t, e) {
            var n = (0, O.Z)(t),
              r = "transform" === n ? _.w : M;
            return this.attrTween(
              t,
              "function" === typeof e
                ? (n.local ? Z : z)(n, r, E(this, "attr." + t, e))
                : null == e
                  ? (n.local ? A : k)(n)
                  : (n.local ? T : C)(n, r, e),
            );
          },
          attrTween: function (t, e) {
            var n = "attr." + t;
            if (arguments.length < 2) return (n = this.tween(n)) && n._value;
            if (null == e) return this.tween(n, null);
            if ("function" !== typeof e) throw new Error();
            var r = (0, O.Z)(t);
            return this.tween(n, (r.local ? V : H)(r, e));
          },
          style: function (t, e, n) {
            var r = "transform" === (t += "") ? _.Y : M;
            return null == e
              ? this.styleTween(
                  t,
                  (function (t, e) {
                    var n, r, o;
                    return function () {
                      var i = (0, K.S)(this, t),
                        a = (this.style.removeProperty(t), (0, K.S)(this, t));
                      return i === a
                        ? null
                        : i === n && a === r
                          ? o
                          : (o = e((n = i), (r = a)));
                    };
                  })(t, r),
                ).on("end.style." + t, J(t))
              : "function" === typeof e
                ? this.styleTween(
                    t,
                    (function (t, e, n) {
                      var r, o, i;
                      return function () {
                        var a = (0, K.S)(this, t),
                          u = n(this),
                          c = u + "";
                        return (
                          null == u &&
                            (this.style.removeProperty(t),
                            (c = u = (0, K.S)(this, t))),
                          a === c
                            ? null
                            : a === r && c === o
                              ? i
                              : ((o = c), (i = e((r = a), u)))
                        );
                      };
                    })(t, r, E(this, "style." + t, e)),
                  ).each(
                    (function (t, e) {
                      var n,
                        r,
                        o,
                        i,
                        a = "style." + e,
                        u = "end." + a;
                      return function () {
                        var c = m(this, t),
                          s = c.on,
                          l = null == c.value[a] ? i || (i = J(e)) : void 0;
                        (s === n && o === l) ||
                          (r = (n = s).copy()).on(u, (o = l)),
                          (c.on = r);
                      };
                    })(this._id, t),
                  )
                : this.styleTween(
                    t,
                    (function (t, e, n) {
                      var r,
                        o,
                        i = n + "";
                      return function () {
                        var a = (0, K.S)(this, t);
                        return a === i ? null : a === r ? o : (o = e((r = a), n));
                      };
                    })(t, r, e),
                    n,
                  ).on("end.style." + t, null);
          },
          styleTween: function (t, e, n) {
            var r = "style." + (t += "");
            if (arguments.length < 2) return (r = this.tween(r)) && r._value;
            if (null == e) return this.tween(r, null);
            if ("function" !== typeof e) throw new Error();
            return this.tween(r, tt(t, e, null == n ? "" : n));
          },
          text: function (t) {
            return this.tween(
              "text",
              "function" === typeof t
                ? (function (t) {
                    return function () {
                      var e = t(this);
                      this.textContent = null == e ? "" : e;
                    };
                  })(E(this, "text", t))
                : (function (t) {
                    return function () {
                      this.textContent = t;
                    };
                  })(null == t ? "" : t + ""),
            );
          },
          textTween: function (t) {
            var e = "text";
            if (arguments.length < 1) return (e = this.tween(e)) && e._value;
            if (null == t) return this.tween(e, null);
            if ("function" !== typeof t) throw new Error();
            return this.tween(e, nt(t));
          },
          remove: function () {
            return this.on(
              "end.remove",
              (function (t) {
                return function () {
                  var e = this.parentNode;
                  for (var n in this.__transition) if (+n !== t) return;
                  e && e.removeChild(this);
                };
              })(this._id),
            );
          },
          tween: function (t, e) {
            var n = this._id;
            if (((t += ""), arguments.length < 2)) {
              for (
                var r, o = b(this.node(), n).tween, i = 0, a = o.length;
                i < a;
                ++i
              )
                if ((r = o[i]).name === t) return r.value;
              return null;
            }
            return this.each((null == e ? x : S)(n, t, e));
          },
          delay: function (t) {
            var e = this._id;
            return arguments.length
              ? this.each(("function" === typeof t ? B : Y)(e, t))
              : b(this.node(), e).delay;
          },
          duration: function (t) {
            var e = this._id;
            return arguments.length
              ? this.each(("function" === typeof t ? X : $)(e, t))
              : b(this.node(), e).duration;
          },
          ease: function (t) {
            var e = this._id;
            return arguments.length ? this.each(L(e, t)) : b(this.node(), e).ease;
          },
          easeVarying: function (t) {
            if ("function" !== typeof t) throw new Error();
            return this.each(
              (function (t, e) {
                return function () {
                  var n = e.apply(this, arguments);
                  if ("function" !== typeof n) throw new Error();
                  m(this, t).ease = n;
                };
              })(this._id, t),
            );
          },
          end: function () {
            var t,
              e,
              n = this,
              r = n._id,
              o = n.size();
            return new Promise(function (i, a) {
              var u = { value: a },
                c = {
                  value: function () {
                    0 === --o && i();
                  },
                };
              n.each(function () {
                var n = m(this, r),
                  o = n.on;
                o !== t &&
                  ((e = (t = o).copy())._.cancel.push(u),
                  e._.interrupt.push(u),
                  e._.end.push(c)),
                  (n.on = e);
              }),
                0 === o && i();
            });
          },
          [Symbol.iterator]: at[Symbol.iterator],
        };
        var ut = {
          time: null,
          delay: 0,
          duration: 250,
          ease: function (t) {
            return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
          },
        };
        function ct(t, e) {
          for (var n; !(n = t.__transition) || !(n = n[e]); )
            if (!(t = t.parentNode)) throw new Error(`transition ${e} not found`);
          return n;
        }
        (f.ZP.prototype.interrupt = function (t) {
          return this.each(function () {
            w(this, t);
          });
        }),
          (f.ZP.prototype.transition = function (t) {
            var e, n;
            t instanceof ot
              ? ((e = t._id), (t = t._name))
              : ((e = it()),
                ((n = ut).time = (0, h.zO)()),
                (t = null == t ? null : t + ""));
            for (var r = this._groups, o = r.length, i = 0; i < o; ++i)
              for (var a, u = r[i], c = u.length, s = 0; s < c; ++s)
                (a = u[s]) && y(a, t, e, s, u, n || ct(a, e));
            return new ot(r, this._parents, t, e);
          });
        var st = (t) => () => t;
        function lt(t, { sourceEvent: e, target: n, transform: r, dispatch: o }) {
          Object.defineProperties(this, {
            type: { value: t, enumerable: !0, configurable: !0 },
            sourceEvent: { value: e, enumerable: !0, configurable: !0 },
            target: { value: n, enumerable: !0, configurable: !0 },
            transform: { value: r, enumerable: !0, configurable: !0 },
            _: { value: o },
          });
        }
        function ft(t, e, n) {
          (this.k = t), (this.x = e), (this.y = n);
        }
        ft.prototype = {
          constructor: ft,
          scale: function (t) {
            return 1 === t ? this : new ft(this.k * t, this.x, this.y);
          },
          translate: function (t, e) {
            return (0 === t) & (0 === e)
              ? this
              : new ft(this.k, this.x + this.k * t, this.y + this.k * e);
          },
          apply: function (t) {
            return [t[0] * this.k + this.x, t[1] * this.k + this.y];
          },
          applyX: function (t) {
            return t * this.k + this.x;
          },
          applyY: function (t) {
            return t * this.k + this.y;
          },
          invert: function (t) {
            return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
          },
          invertX: function (t) {
            return (t - this.x) / this.k;
          },
          invertY: function (t) {
            return (t - this.y) / this.k;
          },
          rescaleX: function (t) {
            return t
              .copy()
              .domain(t.range().map(this.invertX, this).map(t.invert, t));
          },
          rescaleY: function (t) {
            return t
              .copy()
              .domain(t.range().map(this.invertY, this).map(t.invert, t));
          },
          toString: function () {
            return (
              "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
            );
          },
        };
        var ht = new ft(1, 0, 0);
        function dt(t) {
          t.stopImmediatePropagation();
        }
        function pt(t) {
          t.preventDefault(), t.stopImmediatePropagation();
        }
        function gt(t) {
          return (!t.ctrlKey || "wheel" === t.type) && !t.button;
        }
        function yt() {
          var t = this;
          return t instanceof SVGElement
            ? (t = t.ownerSVGElement || t).hasAttribute("viewBox")
              ? [
                  [(t = t.viewBox.baseVal).x, t.y],
                  [t.x + t.width, t.y + t.height],
                ]
              : [
                  [0, 0],
                  [t.width.baseVal.value, t.height.baseVal.value],
                ]
            : [
                [0, 0],
                [t.clientWidth, t.clientHeight],
              ];
        }
        function vt() {
          return this.__zoom || ht;
        }
        function mt(t) {
          return (
            -t.deltaY *
            (1 === t.deltaMode ? 0.05 : t.deltaMode ? 1 : 0.002) *
            (t.ctrlKey ? 10 : 1)
          );
        }
        function bt() {
          return navigator.maxTouchPoints || "ontouchstart" in this;
        }
        function wt(t, e, n) {
          var r = t.invertX(e[0][0]) - n[0][0],
            o = t.invertX(e[1][0]) - n[1][0],
            i = t.invertY(e[0][1]) - n[0][1],
            a = t.invertY(e[1][1]) - n[1][1];
          return t.translate(
            o > r ? (r + o) / 2 : Math.min(0, r) || Math.max(0, o),
            a > i ? (i + a) / 2 : Math.min(0, i) || Math.max(0, a),
          );
        }
        function _t() {
          var t,
            e,
            n,
            i = gt,
            a = yt,
            f = wt,
            h = mt,
            d = bt,
            p = [0, 1 / 0],
            g = [
              [-1 / 0, -1 / 0],
              [1 / 0, 1 / 0],
            ],
            y = 250,
            v = s.Z,
            m = (0, r.Z)("start", "zoom", "end"),
            b = 500,
            _ = 0,
            O = 10;
          function x(t) {
            t.property("__zoom", vt)
              .on("wheel.zoom", M, { passive: !1 })
              .on("mousedown.zoom", k)
              .on("dblclick.zoom", A)
              .filter(d)
              .on("touchstart.zoom", C)
              .on("touchmove.zoom", T)
              .on("touchend.zoom touchcancel.zoom", z)
              .style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
          }
          function S(t, e) {
            return (e = Math.max(p[0], Math.min(p[1], e))) === t.k
              ? t
              : new ft(e, t.x, t.y);
          }
          function E(t, e, n) {
            var r = e[0] - n[0] * t.k,
              o = e[1] - n[1] * t.k;
            return r === t.x && o === t.y ? t : new ft(t.k, r, o);
          }
          function P(t) {
            return [(+t[0][0] + +t[1][0]) / 2, (+t[0][1] + +t[1][1]) / 2];
          }
          function j(t, e, n, r) {
            t.on("start.zoom", function () {
              D(this, arguments).event(r).start();
            })
              .on("interrupt.zoom end.zoom", function () {
                D(this, arguments).event(r).end();
              })
              .tween("zoom", function () {
                var t = this,
                  o = arguments,
                  i = D(t, o).event(r),
                  u = a.apply(t, o),
                  c =
                    null == n
                      ? P(u)
                      : "function" === typeof n
                        ? n.apply(t, o)
                        : n,
                  s = Math.max(u[1][0] - u[0][0], u[1][1] - u[0][1]),
                  l = t.__zoom,
                  f = "function" === typeof e ? e.apply(t, o) : e,
                  h = v(l.invert(c).concat(s / l.k), f.invert(c).concat(s / f.k));
                return function (t) {
                  if (1 === t) t = f;
                  else {
                    var e = h(t),
                      n = s / e[2];
                    t = new ft(n, c[0] - e[0] * n, c[1] - e[1] * n);
                  }
                  i.zoom(null, t);
                };
              });
          }
          function D(t, e, n) {
            return (!n && t.__zooming) || new N(t, e);
          }
          function N(t, e) {
            (this.that = t),
              (this.args = e),
              (this.active = 0),
              (this.sourceEvent = null),
              (this.extent = a.apply(t, e)),
              (this.taps = 0);
          }
          function M(t, ...e) {
            if (i.apply(this, arguments)) {
              var n = D(this, e).event(t),
                r = this.__zoom,
                o = Math.max(
                  p[0],
                  Math.min(p[1], r.k * Math.pow(2, h.apply(this, arguments))),
                ),
                a = (0, l.Z)(t);
              if (n.wheel)
                (n.mouse[0][0] === a[0] && n.mouse[0][1] === a[1]) ||
                  (n.mouse[1] = r.invert((n.mouse[0] = a))),
                  clearTimeout(n.wheel);
              else {
                if (r.k === o) return;
                (n.mouse = [a, r.invert(a)]), w(this), n.start();
              }
              pt(t),
                (n.wheel = setTimeout(u, 150)),
                n.zoom(
                  "mouse",
                  f(E(S(r, o), n.mouse[0], n.mouse[1]), n.extent, g),
                );
            }
            function u() {
              (n.wheel = null), n.end();
            }
          }
          function k(t, ...e) {
            if (!n && i.apply(this, arguments)) {
              var r = t.currentTarget,
                a = D(this, e, !0).event(t),
                s = (0, o.Z)(t.view)
                  .on("mousemove.zoom", y, !0)
                  .on("mouseup.zoom", v, !0),
                h = (0, l.Z)(t, r),
                d = t.clientX,
                p = t.clientY;
              u(t.view),
                dt(t),
                (a.mouse = [h, this.__zoom.invert(h)]),
                w(this),
                a.start();
            }
            function y(t) {
              if ((pt(t), !a.moved)) {
                var e = t.clientX - d,
                  n = t.clientY - p;
                a.moved = e * e + n * n > _;
              }
              a.event(t).zoom(
                "mouse",
                f(
                  E(a.that.__zoom, (a.mouse[0] = (0, l.Z)(t, r)), a.mouse[1]),
                  a.extent,
                  g,
                ),
              );
            }
            function v(t) {
              s.on("mousemove.zoom mouseup.zoom", null),
                c(t.view, a.moved),
                pt(t),
                a.event(t).end();
            }
          }
          function A(t, ...e) {
            if (i.apply(this, arguments)) {
              var n = this.__zoom,
                r = (0, l.Z)(t.changedTouches ? t.changedTouches[0] : t, this),
                u = n.invert(r),
                c = n.k * (t.shiftKey ? 0.5 : 2),
                s = f(E(S(n, c), r, u), a.apply(this, e), g);
              pt(t),
                y > 0
                  ? (0, o.Z)(this).transition().duration(y).call(j, s, r, t)
                  : (0, o.Z)(this).call(x.transform, s, r, t);
            }
          }
          function C(n, ...r) {
            if (i.apply(this, arguments)) {
              var o,
                a,
                u,
                c,
                s = n.touches,
                f = s.length,
                h = D(this, r, n.changedTouches.length === f).event(n);
              for (dt(n), a = 0; a < f; ++a)
                (u = s[a]),
                  (c = [
                    (c = (0, l.Z)(u, this)),
                    this.__zoom.invert(c),
                    u.identifier,
                  ]),
                  h.touch0
                    ? h.touch1 ||
                      h.touch0[2] === c[2] ||
                      ((h.touch1 = c), (h.taps = 0))
                    : ((h.touch0 = c), (o = !0), (h.taps = 1 + !!t));
              t && (t = clearTimeout(t)),
                o &&
                  (h.taps < 2 &&
                    ((e = c[0]),
                    (t = setTimeout(function () {
                      t = null;
                    }, b))),
                  w(this),
                  h.start());
            }
          }
          function T(t, ...e) {
            if (this.__zooming) {
              var n,
                r,
                o,
                i,
                a = D(this, e).event(t),
                u = t.changedTouches,
                c = u.length;
              for (pt(t), n = 0; n < c; ++n)
                (r = u[n]),
                  (o = (0, l.Z)(r, this)),
                  a.touch0 && a.touch0[2] === r.identifier
                    ? (a.touch0[0] = o)
                    : a.touch1 &&
                      a.touch1[2] === r.identifier &&
                      (a.touch1[0] = o);
              if (((r = a.that.__zoom), a.touch1)) {
                var s = a.touch0[0],
                  h = a.touch0[1],
                  d = a.touch1[0],
                  p = a.touch1[1],
                  y = (y = d[0] - s[0]) * y + (y = d[1] - s[1]) * y,
                  v = (v = p[0] - h[0]) * v + (v = p[1] - h[1]) * v;
                (r = S(r, Math.sqrt(y / v))),
                  (o = [(s[0] + d[0]) / 2, (s[1] + d[1]) / 2]),
                  (i = [(h[0] + p[0]) / 2, (h[1] + p[1]) / 2]);
              } else {
                if (!a.touch0) return;
                (o = a.touch0[0]), (i = a.touch0[1]);
              }
              a.zoom("touch", f(E(r, o, i), a.extent, g));
            }
          }
          function z(t, ...r) {
            if (this.__zooming) {
              var i,
                a,
                u = D(this, r).event(t),
                c = t.changedTouches,
                s = c.length;
              for (
                dt(t),
                  n && clearTimeout(n),
                  n = setTimeout(function () {
                    n = null;
                  }, b),
                  i = 0;
                i < s;
                ++i
              )
                (a = c[i]),
                  u.touch0 && u.touch0[2] === a.identifier
                    ? delete u.touch0
                    : u.touch1 && u.touch1[2] === a.identifier && delete u.touch1;
              if (
                (u.touch1 &&
                  !u.touch0 &&
                  ((u.touch0 = u.touch1), delete u.touch1),
                u.touch0)
              )
                u.touch0[1] = this.__zoom.invert(u.touch0[0]);
              else if (
                (u.end(),
                2 === u.taps &&
                  ((a = (0, l.Z)(a, this)),
                  Math.hypot(e[0] - a[0], e[1] - a[1]) < O))
              ) {
                var f = (0, o.Z)(this).on("dblclick.zoom");
                f && f.apply(this, arguments);
              }
            }
          }
          return (
            (x.transform = function (t, e, n, r) {
              var o = t.selection ? t.selection() : t;
              o.property("__zoom", vt),
                t !== o
                  ? j(t, e, n, r)
                  : o.interrupt().each(function () {
                      D(this, arguments)
                        .event(r)
                        .start()
                        .zoom(
                          null,
                          "function" === typeof e ? e.apply(this, arguments) : e,
                        )
                        .end();
                    });
            }),
            (x.scaleBy = function (t, e, n, r) {
              x.scaleTo(
                t,
                function () {
                  var t = this.__zoom.k,
                    n = "function" === typeof e ? e.apply(this, arguments) : e;
                  return t * n;
                },
                n,
                r,
              );
            }),
            (x.scaleTo = function (t, e, n, r) {
              x.transform(
                t,
                function () {
                  var t = a.apply(this, arguments),
                    r = this.__zoom,
                    o =
                      null == n
                        ? P(t)
                        : "function" === typeof n
                          ? n.apply(this, arguments)
                          : n,
                    i = r.invert(o),
                    u = "function" === typeof e ? e.apply(this, arguments) : e;
                  return f(E(S(r, u), o, i), t, g);
                },
                n,
                r,
              );
            }),
            (x.translateBy = function (t, e, n, r) {
              x.transform(
                t,
                function () {
                  return f(
                    this.__zoom.translate(
                      "function" === typeof e ? e.apply(this, arguments) : e,
                      "function" === typeof n ? n.apply(this, arguments) : n,
                    ),
                    a.apply(this, arguments),
                    g,
                  );
                },
                null,
                r,
              );
            }),
            (x.translateTo = function (t, e, n, r, o) {
              x.transform(
                t,
                function () {
                  var t = a.apply(this, arguments),
                    o = this.__zoom,
                    i =
                      null == r
                        ? P(t)
                        : "function" === typeof r
                          ? r.apply(this, arguments)
                          : r;
                  return f(
                    ht
                      .translate(i[0], i[1])
                      .scale(o.k)
                      .translate(
                        "function" === typeof e ? -e.apply(this, arguments) : -e,
                        "function" === typeof n ? -n.apply(this, arguments) : -n,
                      ),
                    t,
                    g,
                  );
                },
                r,
                o,
              );
            }),
            (N.prototype = {
              event: function (t) {
                return t && (this.sourceEvent = t), this;
              },
              start: function () {
                return (
                  1 === ++this.active &&
                    ((this.that.__zooming = this), this.emit("start")),
                  this
                );
              },
              zoom: function (t, e) {
                return (
                  this.mouse &&
                    "mouse" !== t &&
                    (this.mouse[1] = e.invert(this.mouse[0])),
                  this.touch0 &&
                    "touch" !== t &&
                    (this.touch0[1] = e.invert(this.touch0[0])),
                  this.touch1 &&
                    "touch" !== t &&
                    (this.touch1[1] = e.invert(this.touch1[0])),
                  (this.that.__zoom = e),
                  this.emit("zoom"),
                  this
                );
              },
              end: function () {
                return (
                  0 === --this.active &&
                    (delete this.that.__zooming, this.emit("end")),
                  this
                );
              },
              emit: function (t) {
                var e = (0, o.Z)(this.that).datum();
                m.call(
                  t,
                  this.that,
                  new lt(t, {
                    sourceEvent: this.sourceEvent,
                    target: x,
                    type: t,
                    transform: this.that.__zoom,
                    dispatch: m,
                  }),
                  e,
                );
              },
            }),
            (x.wheelDelta = function (t) {
              return arguments.length
                ? ((h = "function" === typeof t ? t : st(+t)), x)
                : h;
            }),
            (x.filter = function (t) {
              return arguments.length
                ? ((i = "function" === typeof t ? t : st(!!t)), x)
                : i;
            }),
            (x.touchable = function (t) {
              return arguments.length
                ? ((d = "function" === typeof t ? t : st(!!t)), x)
                : d;
            }),
            (x.extent = function (t) {
              return arguments.length
                ? ((a =
                    "function" === typeof t
                      ? t
                      : st([
                          [+t[0][0], +t[0][1]],
                          [+t[1][0], +t[1][1]],
                        ])),
                  x)
                : a;
            }),
            (x.scaleExtent = function (t) {
              return arguments.length
                ? ((p[0] = +t[0]), (p[1] = +t[1]), x)
                : [p[0], p[1]];
            }),
            (x.translateExtent = function (t) {
              return arguments.length
                ? ((g[0][0] = +t[0][0]),
                  (g[1][0] = +t[1][0]),
                  (g[0][1] = +t[0][1]),
                  (g[1][1] = +t[1][1]),
                  x)
                : [
                    [g[0][0], g[0][1]],
                    [g[1][0], g[1][1]],
                  ];
            }),
            (x.constrain = function (t) {
              return arguments.length ? ((f = t), x) : f;
            }),
            (x.duration = function (t) {
              return arguments.length ? ((y = +t), x) : y;
            }),
            (x.interpolate = function (t) {
              return arguments.length ? ((v = t), x) : v;
            }),
            (x.on = function () {
              var t = m.on.apply(m, arguments);
              return t === m ? x : t;
            }),
            (x.clickDistance = function (t) {
              return arguments.length ? ((_ = (t = +t) * t), x) : Math.sqrt(_);
            }),
            (x.tapDistance = function (t) {
              return arguments.length ? ((O = +t), x) : O;
            }),
            x
          );
        }
        ft.prototype;
      },
    },
  ]);
  