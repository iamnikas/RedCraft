"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5913],
  {
    54603: function (e, t, r) {
      r.d(t, {
        Wp: function () {
          return v;
        },
        w_: function () {
          return x;
        },
      });
      var n = r(85893),
        o = (r(67294), r(95934)),
        u = r(9570),
        a = r(69647),
        c = r(47527);
      function i(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function l(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(r).filter(function (e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable;
              }),
            )),
            n.forEach(function (t) {
              i(e, t, r[t]);
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
      var b = (0, o.default)(a.HH)(
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
        y = function (e) {
          var t = e.id,
            r = e.type,
            o = e.position,
            a = e.color,
            i = void 0 === a ? "#fff" : a,
            l = e.className,
            s = e.isValidConnection,
            f =
              void 0 === s
                ? function () {
                    return !0;
                  }
                : s,
            d = (0, u.a)(),
            p = (0, c.Z)(function (e) {
              return e.edges;
            }).some(function (e) {
              return e[r] === t || e["".concat(r, "Handle")] === t;
            });
          return (0, n.jsx)(b, {
            id: t,
            type: r,
            position: o,
            color: i,
            className: l,
            isValidConnection: f,
            style: { background: p ? d.colors.handleHover : d.colors.handle },
          });
        },
        h = (0, o.default)(y)(d()),
        v = function (e) {
          return (0, n.jsx)(h, l({}, e, { type: "source" }));
        },
        m = (0, o.default)(y)(p()),
        x = function (e) {
          return (0, n.jsx)(m, l({}, e, { type: "target" }));
        };
      t.ZP = y;
    },
    60607: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return A;
        },
      });
      var n = r(85893),
        o = r(67294),
        u = r(46052),
        a = r(67967),
        c = r(95934),
        i = r(86893),
        l = r(68527),
        s = r(5434),
        f = r(54603),
        d = r(24750),
        p = r(76698);
      function b() {
        var e,
          t,
          r =
            ((e = [
              "\n  font-size: 11px;\n  color: ",
              ";\n  position: absolute;\n  bottom: -8px;\n  top: auto;\n  left: 0;\n  transform: translateY(100%);\n",
            ]),
            t || (t = e.slice(0)),
            Object.freeze(
              Object.defineProperties(e, { raw: { value: Object.freeze(t) } }),
            ));
        return (
          (b = function () {
            return r;
          }),
          r
        );
      }
      var y = (0, c.default)(l.xu)(b(), function (e) {
        return e.theme.colors.silverDarken15;
      });
      var h = function (e) {
          var t = e.data,
            r = (function (e) {
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
          if (!r) return null;
          var o = r.length > 64 ? "".concat(r.substr(0, 64), "\u2026") : r;
          return (0, n.jsxs)(y, { children: ["[", t.type, "] ", o] });
        },
        v = r(47527),
        m = r(26723),
        x = function (e) {
          var t = e.nodeId,
            r = (0, v.Z)(function (e) {
              return e.removeElements;
            });
          return (0, n.jsxs)(l.xu, {
            p: 2,
            children: [
              (0, n.jsx)(l.xu, {
                color: "red",
                mb: 2,
                children: "Something went wrong.",
              }),
              (0, n.jsx)(m.zx, {
                onClick: function () {
                  r([{ id: t }]);
                },
                children: "Remove Node",
              }),
            ],
          });
        };
      function j(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          (n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            "value" in n && (n.writable = !0),
            Object.defineProperty(e, n.key, n);
        }
      }
      function g(e) {
        return (g = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function O(e, t) {
        return !t || ("object" !== k(t) && "function" !== typeof t)
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
      var k = function (e) {
        return e && "undefined" !== typeof Symbol && e.constructor === Symbol
          ? "symbol"
          : typeof e;
      };
      function S(e) {
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
          var r,
            n = g(e);
          if (t) {
            var o = g(this).constructor;
            r = Reflect.construct(n, arguments, o);
          } else r = n.apply(this, arguments);
          return O(this, r);
        };
      }
      var P = v.Z.getState().addLogs,
        C = (function (e) {
          !(function (e, t) {
            if ("function" !== typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: { value: e, writable: !0, configurable: !0 },
            })),
              t && w(e, t);
          })(a, e);
          var t,
            r,
            o,
            u = S(a);
          function a(e) {
            var t;
            return (
              (function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, a),
              ((t = u.call(this, e)).state = { hasError: !1 }),
              t
            );
          }
          return (
            (t = a),
            (o = [
              {
                key: "getDerivedStateFromError",
                value: function () {
                  return { hasError: !0 };
                },
              },
            ]),
            (r = [
              {
                key: "componentDidCatch",
                value: function (e) {
                  P({ method: "error", data: [e.name, e.message] });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.children,
                    r = e.nodeId;
                  return this.state.hasError ? (0, n.jsx)(x, { nodeId: r }) : t;
                },
              },
            ]) && j(t.prototype, r),
            o && j(t, o),
            a
          );
        })(o.Component),
        E = (0, o.memo)(function (e) {
          var t = e.data,
            r = void 0 === t ? {} : t,
            u = e.type,
            a = void 0 === u ? "default" : u,
            c = e.id,
            d = e.children,
            p = e.targetHandle,
            b = void 0 === p || p,
            y = e.sourceHandle,
            m = void 0 === y || y,
            x = e.color,
            j = (0, v.Z)(function (e) {
              return e.selectedNodeId;
            }),
            g = (0, v.Z)(function (e) {
              return e.removeElements;
            }),
            O = j === c,
            w = (0, o.useCallback)(
              function () {
                g([{ id: c }]);
              },
              [g, c],
            );
          return (0, n.jsx)(l.xu, {
            px: 0,
            py: 0,
            bg: "bg.grey",
            borderRadius: 1,
            borderColor: O ? x : "bg.light",
            borderWidth: "1px",
            borderStyle: "solid",
            "data-testid": "node-".concat(a),
            position: "relative",
            children: (0, n.jsxs)(C, {
              nodeId: c,
              children: [
                (0, n.jsxs)(l.kC, {
                  alignItems: "center",
                  justifyContent: "space-between",
                  p: 2,
                  borderBottomColor: "bg.light",
                  borderBottomWidth: "1px",
                  borderBottomStyle: "solid",
                  children: [
                    (0, n.jsxs)(l.kC, {
                      alignItems: "center",
                      children: [(0, n.jsx)(s.iVq, {}), " ", r.label],
                    }),
                    (0, n.jsx)(l.xu, {
                      color: "silver",
                      cursor: "pointer",
                      opacity: 0.25,
                      _hover: { opacity: 1 },
                      onClick: w,
                      "data-testid": "node__remove",
                      children: (0, n.jsx)(i.q5L, {}),
                    }),
                  ],
                }),
                (0, n.jsx)(h, { data: r, isTitle: !0 }),
                b && (0, n.jsx)(f.w_, { color: x, position: "left", id: c }),
                m && (0, n.jsx)(f.Wp, { color: x, position: "right", id: c }),
                (0, n.jsx)(l.xu, { children: d }),
                (0, n.jsx)(h, { data: r }),
              ],
            }),
          });
        });
      E.displayName = "NodeWrapper";
      var Z = E;
      function _(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      function N(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function R(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" === typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
              Object.getOwnPropertySymbols(r).filter(function (e) {
                return Object.getOwnPropertyDescriptor(r, e).enumerable;
              }),
            )),
            n.forEach(function (t) {
              N(e, t, r[t]);
            });
        }
        return e;
      }
      function I(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            var r =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != r) {
              var n,
                o,
                u = [],
                a = !0,
                c = !1;
              try {
                for (
                  r = r.call(e);
                  !(a = (n = r.next()).done) &&
                  (u.push(n.value), !t || u.length !== t);
                  a = !0
                );
              } catch (i) {
                (c = !0), (o = i);
              } finally {
                try {
                  a || null == r.return || r.return();
                } finally {
                  if (c) throw o;
                }
              }
              return u;
            }
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" === typeof e) return _(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(r);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return _(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      var A = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          r = (0, o.memo)(function (t) {
            return (0, n.jsx)(e, R({}, t));
          });
        return (0, o.memo)(
          function (e) {
            var o = e.data,
              c = e.type,
              i = e.id,
              l = I(
                (0, a.Z)(null === o || void 0 === o ? void 0 : o.current),
                2,
              ),
              s = l[0],
              f = l[1],
              d = (0, u.Fg)().colors.block,
              p = R({}, o, { current: s, type: f });
            return (0, n.jsx)(
              Z,
              R({ id: i, data: p, type: c, color: d }, t, {
                children: (0, n.jsx)(r, { id: i, data: p, color: d }),
              }),
            );
          },
          function (e, t) {
            return e.data === t.data && e.type === t.type && e.id === t.id;
          },
        );
      };
    },
    35913: function (e, t, r) {
      r.r(t);
      var n = r(34051),
        o = r.n(n),
        u = r(85893),
        a = r(67294),
        c = r(95934),
        i = r(68527),
        l = r(79762),
        s = r(4612),
        f = r(26723),
        d = r(60607),
        p = r(28518),
        b = r(47527);
      function y(e, t, r, n, o, u, a) {
        try {
          var c = e[u](a),
            i = c.value;
        } catch (l) {
          return void r(l);
        }
        c.done ? t(i) : Promise.resolve(i).then(n, o);
      }
      function h() {
        var e,
          t,
          r =
            ((e = ["\n  min-width: 300px;\n"]),
            t || (t = e.slice(0)),
            Object.freeze(
              Object.defineProperties(e, { raw: { value: Object.freeze(t) } }),
            ));
        return (
          (h = function () {
            return r;
          }),
          r
        );
      }
      var v = function (e) {
          return { method: "error", data: [e] };
        },
        m = (0, c.default)(i.xu)(h()),
        x = function (e) {
          var t,
            r = e.data,
            n = e.id,
            c = r.url,
            i = (0, a.useState)(!1),
            d = i[0],
            h = i[1],
            x = (0, b.Z)(function (e) {
              return e.updateNodeData;
            }),
            j = (0, b.Z)(function (e) {
              return e.addLogs;
            }),
            g = (0, a.useCallback)(
              ((t = o().mark(function e() {
                var t, r, u;
                return o().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if ((h(!0), c)) {
                          e.next = 4;
                          break;
                        }
                        return (
                          h(!1),
                          e.abrupt(
                            "return",
                            j({
                              method: "error",
                              data: ["Request: Please type in an URL."],
                            }),
                          )
                        );
                      case 4:
                        return (e.next = 6), (0, p.en)(c);
                      case 6:
                        if (
                          ((t = e.sent), (r = t.error), (u = t.data), h(!1), !r)
                        ) {
                          e.next = 12;
                          break;
                        }
                        return e.abrupt("return", j(v(r)));
                      case 12:
                        x({ id: n, data: { current: u } });
                      case 13:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })),
              function () {
                var e = this,
                  r = arguments;
                return new Promise(function (n, o) {
                  var u = t.apply(e, r);
                  function a(e) {
                    y(u, n, o, a, c, "next", e);
                  }
                  function c(e) {
                    y(u, n, o, a, c, "throw", e);
                  }
                  a(void 0);
                });
              }),
              [j, n, x, c],
            ),
            O = (0, a.useCallback)(
              function (e) {
                x({ id: n, data: { url: e.target.value } });
              },
              [x, n],
            ),
            w = (0, a.useCallback)(
              function (e) {
                e.preventDefault(), g();
              },
              [g],
            );
          return (0, u.jsxs)(m, {
            p: 2,
            children: [
              (0, u.jsx)(l.lX, {
                mb: 1,
                color: "silverDarken30",
                children: "URL:",
              }),
              (0, u.jsxs)("form", {
                onSubmit: w,
                children: [
                  (0, u.jsx)(s.II, {
                    value: c,
                    onChange: O,
                    className: "nodrag",
                  }),
                  (0, u.jsx)(f.zx, {
                    type: "submit",
                    mt: 2,
                    disabled: d,
                    children: d ? "Loading\u2026" : "Load Data",
                  }),
                ],
              }),
            ],
          });
        };
      (x.displayName = "Request"),
        (t.default = (0, d.Z)(x, { targetHandle: !1 }));
    },
  },
]);
