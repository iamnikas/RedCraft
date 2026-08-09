"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2278], // input-paste
  {
    11391: function (e, t, n) {
      n.d(t, {
        Ph: function () {
          return m;
        },
      });
      var r = n(79762),
        o = n(46052),
        a = n(94244),
        i = n(15031),
        c = n(38554),
        u = n.n(c),
        l = n(67294);
      function s() {
        return (
          (s =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          s.apply(this, arguments)
        );
      }
      function f(e, t) {
        if (null == e) return {};
        var n,
          r,
          o = {},
          a = Object.keys(e);
        for (r = 0; r < a.length; r++)
          (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o;
      }
      var d = ["children", "placeholder", "className"],
        p = [
          "rootProps",
          "placeholder",
          "icon",
          "color",
          "height",
          "h",
          "minH",
          "minHeight",
          "iconColor",
          "iconSize",
          "isFullWidth",
        ],
        h = ["children"],
        v = (0, o.Gp)(function (e, t) {
          var n = e.children,
            r = e.placeholder,
            a = e.className,
            c = f(e, d);
          return l.createElement(
            o.m$.select,
            s({}, c, { ref: t, className: (0, i.cx)("chakra-select", a) }),
            r && l.createElement("option", { value: "" }, r),
            n,
          );
        });
      i.Ts && (v.displayName = "SelectField");
      var m = (0, o.Gp)(function (e, t) {
        var n = (0, o.jC)("Select", e),
          c = (0, o.Lr)(e),
          d = c.rootProps,
          h = c.placeholder,
          m = c.icon,
          y = c.color,
          b = c.height,
          x = c.h,
          j = c.minH,
          O = c.minHeight,
          w = c.iconColor,
          E = c.iconSize;
        c.isFullWidth;
        var k = f(c, p),
          _ = (0, i.Vl)(k, a.oE),
          N = _[0],
          P = _[1],
          S = (0, r.Yp)(P),
          C = {
            width: "100%",
            height: "fit-content",
            position: "relative",
            color: y,
          },
          Z = u()({ paddingEnd: "2rem" }, n.field, {
            _focus: { zIndex: "unset" },
          });
        return l.createElement(
          o.m$.div,
          s({ className: "chakra-select__wrapper", __css: C }, N, d),
          l.createElement(
            v,
            s(
              {
                ref: t,
                height: null != x ? x : b,
                minH: null != j ? j : O,
                placeholder: h,
              },
              S,
              { __css: Z },
            ),
            e.children,
          ),
          l.createElement(
            g,
            s(
              { "data-disabled": (0, i.PB)(S.disabled) },
              (w || y) && { color: w || y },
              { __css: n.icon },
              E && { fontSize: E },
            ),
            m,
          ),
        );
      });
      i.Ts && (m.displayName = "Select");
      var y = function (e) {
          return l.createElement(
            "svg",
            s({ viewBox: "0 0 24 24" }, e),
            l.createElement("path", {
              fill: "currentColor",
              d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z",
            }),
          );
        },
        b = (0, o.m$)("div", {
          baseStyle: {
            position: "absolute",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            pointerEvents: "none",
            top: "50%",
            transform: "translateY(-50%)",
          },
        }),
        g = function (e) {
          var t = e.children,
            n = void 0 === t ? l.createElement(y, null) : t,
            r = f(e, h),
            o = l.cloneElement(n, {
              role: "presentation",
              className: "chakra-select__icon",
              focusable: !1,
              "aria-hidden": !0,
              style: { width: "1em", height: "1em", color: "currentColor" },
            });
          return l.createElement(
            b,
            s({}, r, { className: "chakra-select__icon-wrapper" }),
            l.isValidElement(n) ? o : null,
          );
        };
      i.Ts && (g.displayName = "SelectIcon");
    },
    33441: function (e, t, n) {
      n.d(t, {
        g: function () {
          return l;
        },
      });
      var r = n(79762),
        o = n(46052),
        a = n(15031),
        i = n(67294);
      function c() {
        return (
          (c =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          c.apply(this, arguments)
        );
      }
      var u = ["className", "rows"],
        l = (0, o.Gp)(function (e, t) {
          var n = (0, o.mq)("Textarea", e),
            l = (0, o.Lr)(e),
            s = l.className,
            f = l.rows,
            d = (function (e, t) {
              if (null == e) return {};
              var n,
                r,
                o = {},
                a = Object.keys(e);
              for (r = 0; r < a.length; r++)
                (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
              return o;
            })(l, u),
            p = (0, r.Yp)(d),
            h = f ? (0, a.CE)(n, ["h", "minH", "height", "minHeight"]) : n;
          return i.createElement(
            o.m$.textarea,
            c({ ref: t, rows: f }, p, {
              className: (0, a.cx)("chakra-textarea", s),
              __css: h,
            }),
          );
        });
      a.Ts && (l.displayName = "Textarea");
    },
    54603: function (e, t, n) {
      n.d(t, {
        Wp: function () {
          return y;
        },
        w_: function () {
          return g;
        },
      });
      var r = n(85893),
        o = (n(67294), n(95934)),
        a = n(9570),
        i = n(69647),
        c = n(47527);
      function u(e, t, n) {
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
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              }),
            )),
            r.forEach(function (t) {
              u(e, t, n[t]);
            });
        }
        return e;
      }
      function s(e, t) {
        return (
          t || (t = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(t) } }),
          )
        );
      }
      function f() {
        var e = s([
          "\n  && {\n    height: calc(100% + 2px);\n    width: 25px;\n    border-radius: 0;\n    border: none;\n    left: ",
          ";\n    right: ",
          ";\n  }\n\n  &:hover {\n    background: ",
          " !important;\n  }\n",
        ]);
        return (
          (f = function () {
            return e;
          }),
          e
        );
      }
      function d() {
        var e = s([
          "\n  &&& {\n    top: -1px;\n    right: -26px;\n    transform: translateY(0);\n    border-radius: 0 10px 10px 0;\n  }\n",
        ]);
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      function p() {
        var e = s([
          "\n  &&& {\n    top: -1px;\n    right: auto;\n    left: -26px;\n    transform: translateY(0);\n    border-radius: 10px 0 0 10px;\n  }\n",
        ]);
        return (
          (p = function () {
            return e;
          }),
          e
        );
      }
      var h = (0, o.default)(i.HH)(
          f(),
          function (e) {
            return "target" === e.type ? "-32px" : "auto";
          },
          function (e) {
            return "source" === e.type ? "-32px" : "auto";
          },
          function (e) {
            return e.theme.colors.handleHover;
          },
        ),
        v = function (e) {
          var t = e.id,
            n = e.type,
            o = e.position,
            i = e.color,
            u = void 0 === i ? "#fff" : i,
            l = e.className,
            s = e.isValidConnection,
            f =
              void 0 === s
                ? function () {
                    return !0;
                  }
                : s,
            d = (0, a.a)(),
            p = (0, c.Z)(function (e) {
              return e.edges;
            }).some(function (e) {
              return e[n] === t || e["".concat(n, "Handle")] === t;
            });
          return (0, r.jsx)(h, {
            id: t,
            type: n,
            position: o,
            color: u,
            className: l,
            isValidConnection: f,
            style: { background: p ? d.colors.handleHover : d.colors.handle },
          });
        },
        m = (0, o.default)(v)(d()),
        y = function (e) {
          return (0, r.jsx)(m, l({}, e, { type: "source" }));
        },
        b = (0, o.default)(v)(p()),
        g = function (e) {
          return (0, r.jsx)(b, l({}, e, { type: "target" }));
        };
      t.ZP = v;
    },
    60607: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return I;
        },
      });
      var r = n(85893),
        o = n(67294),
        a = n(46052),
        i = n(67967),
        c = n(95934),
        u = n(86893),
        l = n(68527),
        s = n(5434),
        f = n(54603),
        d = n(24750),
        p = n(76698);
      function h() {
        var e,
          t,
          n =
            ((e = [
              "\n  font-size: 11px;\n  color: ",
              ";\n  position: absolute;\n  bottom: -8px;\n  top: auto;\n  left: 0;\n  transform: translateY(100%);\n",
            ]),
            t || (t = e.slice(0)),
            Object.freeze(
              Object.defineProperties(e, { raw: { value: Object.freeze(t) } }),
            ));
        return (
          (h = function () {
            return n;
          }),
          n
        );
      }
      var v = (0, c.default)(l.xu)(h(), function (e) {
        return e.theme.colors.silverDarken15;
      });
      var m = function (e) {
          var t = e.data,
            n = (function (e) {
              if (!e) return null;
              switch (e.type) {
                case d.Z.DATASET:
                  return ""
                    .concat(e.current.length, " rows | ")
                    .concat((0, p.KX)(e.current).length, " columns");
                case d.Z.ARRAY:
                  return "".concat(e.current.length, " items");
                case d.Z.NUMBER:
                case d.Z.DATE:
                case d.Z.STRING:
                case d.Z.BOOLEAN:
                  return (0, p.KW)({ data: e.current, type: e.type });
                case d.Z.GEOJSON:
                  return e.current.type;
                case d.Z.TOPOJSON:
                  return "objects: ".concat(
                    Object.keys(e.current.objects).length,
                  );
                default:
                  return null;
              }
            })(t);
          if (!n) return null;
          var o = n.length > 64 ? "".concat(n.substr(0, 64), "\u2026") : n;
          return (0, r.jsxs)(v, { children: ["[", t.type, "] ", o] });
        },
        y = n(47527),
        b = n(26723),
        g = function (e) {
          var t = e.nodeId,
            n = (0, y.Z)(function (e) {
              return e.removeElements;
            });
          return (0, r.jsxs)(l.xu, {
            p: 2,
            children: [
              (0, r.jsx)(l.xu, {
                color: "red",
                mb: 2,
                children: "Something went wrong.",
              }),
              (0, r.jsx)(b.zx, {
                onClick: function () {
                  n([{ id: t }]);
                },
                children: "Remove Node",
              }),
            ],
          });
        };
      function x(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function j(e) {
        return (j = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function O(e, t) {
        return !t || ("object" !== E(t) && "function" !== typeof t)
          ? (function (e) {
              if (void 0 === e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return e;
            })(e)
          : t;
      }
      function w(e, t) {
        return (w =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var E = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function k(e) {
        var t = (function () {
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
          } catch (e) {
            return !1;
          }
        })();
        return function () {
          var n,
            r = j(e);
          if (t) {
            var o = j(this).constructor;
            n = Reflect.construct(r, arguments, o);
          } else n = r.apply(this, arguments);
          return O(this, n);
        };
      }
      var _ = y.Z.getState().addLogs,
        N = (function (e) {
          !(function (e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && w(e, t);
          })(i, e);
          var t,
            n,
            o,
            a = k(i);
          function i(e) {
            var t;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, i),
              ((t = a.call(this, e)).state = { hasError: !1 }),
              t
            );
          }
          return (
            (t = i),
            (o = [
              {
                key: "getDerivedStateFromError",
                value: function () {
                  return { hasError: !0 };
                },
              },
            ]),
            (n = [
              {
                key: "componentDidCatch",
                value: function (e) {
                  _({ method: "error", data: [e.name, e.message] });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.nodeId;
                  return this.state.hasError ? (0, r.jsx)(g, { nodeId: n }) : t;
                },
              },
            ]) && x(t.prototype, n),
            o && x(t, o),
            i
          );
        })(o.Component),
        P = (0, o.memo)(function (e) {
          var t = e.data,
            n = void 0 === t ? {} : t,
            a = e.type,
            i = void 0 === a ? "default" : a,
            c = e.id,
            d = e.children,
            p = e.targetHandle,
            h = void 0 === p || p,
            v = e.sourceHandle,
            b = void 0 === v || v,
            g = e.color,
            x = (0, y.Z)(function (e) {
              return e.selectedNodeId;
            }),
            j = (0, y.Z)(function (e) {
              return e.removeElements;
            }),
            O = x === c,
            w = (0, o.useCallback)(
              function () {
                j([{ id: c }]);
              },
              [j, c],
            );
          return (0, r.jsx)(l.xu, {
            px: 0,
            py: 0,
            bg: "bg.grey",
            borderRadius: 1,
            borderColor: O ? g : "bg.light",
            borderWidth: "1px",
            borderStyle: "solid",
            "data-testid": "node-".concat(i),
            position: "relative",
            children: (0, r.jsxs)(N, {
              nodeId: c,
              children: [
                (0, r.jsxs)(l.kC, {
                  alignItems: "center",
                  justifyContent: "space-between",
                  p: 2,
                  borderBottomColor: "bg.light",
                  borderBottomWidth: "1px",
                  borderBottomStyle: "solid",
                  children: [
                    (0, r.jsxs)(l.kC, {
                      alignItems: "center",
                      children: [(0, r.jsx)(s.iVq, {}), " ", n.label],
                    }),
                    (0, r.jsx)(l.xu, {
                      color: "silver",
                      cursor: "pointer",
                      opacity: 0.25,
                      _hover: { opacity: 1 },
                      onClick: w,
                      "data-testid": "node__remove",
                      children: (0, r.jsx)(u.q5L, {}),
                    }),
                  ],
                }),
                (0, r.jsx)(m, { data: n, isTitle: !0 }),
                h && (0, r.jsx)(f.w_, { color: g, position: "left", id: c }),
                b && (0, r.jsx)(f.Wp, { color: g, position: "right", id: c }),
                (0, r.jsx)(l.xu, { children: d }),
                (0, r.jsx)(m, { data: n }),
              ],
            }),
          });
        });
      P.displayName = "NodeWrapper";
      var S = P;
      function C(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function Z(e, t, n) {
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
      function T(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(n).filter(function (e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable;
              }),
            )),
            r.forEach(function (t) {
              Z(e, t, n[t]);
            });
        }
        return e;
      }
      function H(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var n =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != n) {
              var r,
                o,
                a = [],
                i = !0,
                c = !1;
              try {
                for (
                  n = n.call(e);
                  !(i = (r = n.next()).done) &&
                  (a.push(r.value), !t || a.length !== t);
                  i = !0
                );
              } catch (u) {
                (c = !0), (o = u);
              } finally {
                try {
                  i || null == n.return || n.return();
                } finally {
                  if (c) throw o;
                }
              }
              return a;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return C(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(n);
            if (
              "Arguments" === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            )
              return C(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      var I = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = (0, o.memo)(function (t) {
            return (0, r.jsx)(e, T({}, t));
          });
        return (0, o.memo)(
          function (e) {
            var o = e.data,
              c = e.type,
              u = e.id,
              l = H(
                (0, i.Z)(null === o || void 0 === o ? void 0 : o.current),
                2,
              ),
              s = l[0],
              f = l[1],
              d = (0, a.Fg)().colors.block,
              p = T({}, o, { current: s, type: f });
            return (0, r.jsx)(
              S,
              T({ id: u, data: p, type: c, color: d }, t, {
                children: (0, r.jsx)(n, { id: u, data: p, color: d }),
              }),
            );
          },
          function (e, t) {
            return e.data === t.data && e.type === t.type && e.id === t.id;
          },
        );
      };
    },
    82278: function (e, t, n) {
      n.r(t);
      var r = n(34051),
        o = n.n(r),
        a = n(85893),
        i = n(67294),
        c = n(68527),
        u = n(79762),
        l = n(11391),
        s = n(33441),
        f = n(28518),
        d = n(60607),
        p = n(47527);
      function h(e, t, n, r, o, a, i) {
        try {
          var c = e[a](i),
            u = c.value;
        } catch (l) {
          return void n(l);
        }
        c.done ? t(u) : Promise.resolve(u).then(r, o);
      }
      var v = function (e) {
          return { method: "error", data: [e] };
        },
        m = function (e) {
          var t = e.id,
            n = e.data,
            r = n.inputValue,
            d = n.inputType,
            m = n.inputTypeOptions,
            y = (0, p.Z)(function (e) {
              return e.updateNodeData;
            }),
            b = (0, p.Z)(function (e) {
              return e.addLogs;
            }),
            g = (0, i.useCallback)(
              function (e) {
                return y({ id: t, data: { inputValue: e.target.value } });
              },
              [t, y],
            ),
            x = (0, i.useCallback)(
              function (e) {
                return y({ id: t, data: { inputType: e.target.value } });
              },
              [t, y],
            );
          return (
            (0, i.useEffect)(
              function () {
                if (0 !== r.length) {
                  var e = (function () {
                    var e,
                      n =
                        ((e = o().mark(function e() {
                          var n, a, i;
                          return o().wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (e.next = 2), (0, f.nz)(r, d);
                                case 2:
                                  if (
                                    ((n = e.sent),
                                    (a = n.error),
                                    (i = n.data),
                                    !a)
                                  ) {
                                    e.next = 7;
                                    break;
                                  }
                                  return e.abrupt("return", b(v(a)));
                                case 7:
                                  return e.abrupt(
                                    "return",
                                    y({ id: t, data: { current: i } }),
                                  );
                                case 8:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })),
                        function () {
                          var t = this,
                            n = arguments;
                          return new Promise(function (r, o) {
                            var a = e.apply(t, n);
                            function i(e) {
                              h(a, r, o, i, c, "next", e);
                            }
                            function c(e) {
                              h(a, r, o, i, c, "throw", e);
                            }
                            i(void 0);
                          });
                        });
                    return function () {
                      return n.apply(this, arguments);
                    };
                  })();
                  e();
                }
              },
              [d, r, b, y, t],
            ),
            (0, a.jsxs)(c.xu, {
              p: 2,
              children: [
                (0, a.jsx)(u.lX, {
                  mb: 1,
                  color: "silverDarken30",
                  children: "Data type",
                }),
                (0, a.jsx)(l.Ph, {
                  mb: 2,
                  value: d,
                  onChange: x,
                  children: m.map(function (e) {
                    return (0, a.jsx)(
                      "option",
                      { value: e, children: e.toUpperCase() },
                      e,
                    );
                  }),
                }),
                (0, a.jsx)(s.g, {
                  placeholder: "Paste data here\u2026",
                  className: "nodrag nowheel",
                  value: r,
                  onChange: g,
                  height: 150,
                  width: 250,
                }),
              ],
            })
          );
        };
      (m.displayName = "PasteInput"),
        (t.default = (0, d.Z)(m, { targetHandle: !1 }));
    },
  },
]);
