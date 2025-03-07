"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2986], // общий модуль: item-trasform-filter | item-trasform-slice | item-trasform-sort | item-geodata-bounding-box | item-geodata-centroid | item-visualization-bar-chart | item-visualization-histogram
  {
    30752: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return f;
        },
      });
      var r = e(67294), // Вероятно это реакт
        o = e(24750),
        u = e(47527); // Возможно это какой-то state менеджер 

    /**
     * Эта функция выполняет поиск в графовой структуре и делает следующее:
        Принимает параметр t - идентификатор целевого узла (target)
        Использует селекторы через u.Z для получения:
        - Списка всех узлов (nodes)
        - Списка всех рёбер (edges)
    
        Выполняет двухэтапный поиск:
            - Сначала ищет ребро, где target или targetHandle совпадает с входным параметром
            - Затем, если ребро найдено, ищет исходный узел (source node) по id, соответствующему source найденного ребра
        
            Возвращает:
            - Найденный исходный узел, если связь существует
            null, если связь не найдена
            - По сути, эта функция ищет "родительский" узел для заданного целевого узла в направленном графе.
     * 
        // Предположим у нас есть структура:
        const nodes = [
            { id: 'node1', ... },
            { id: 'node2', ... }
        ];
        const edges = [
            { source: 'node1', target: 'node2' }
        ];

        const sourceNode = i('node2'); // Вернёт узел node1, так как он является источником для node2
     */
      var i = function (t) {
          var n = (function (t, n, e) {
            // Ищет ребро (edge), где target или targetHandle совпадает с входным параметром
            var r = e.find(function (n) {
              return n.target === t || n.targetHandle === t;
            });
            // Если нашли ребро, ищем соответствующий исходный узел (source node)
            return r
              ? n.find(function (t) {
                  return t.id === r.source;
                })
              : null;
          })(
            t,
            (0, u.Z)(function (t) {
              return t.nodes;
            }),
            (0, u.Z)(function (t) {
              return t.edges;
            }),
          );
          return n;
        },
        c = e(67967);

    // функция которая отрезает массив до определенного индекса и возвращает новый массив
      function a(t, n) {
        (null == n || n > t.length) && (n = t.length);
        for (var e = 0, r = new Array(n); e < n; e++) r[e] = t[e];
        return r;
      }

      // Функция полифил для деструкуризации массивов
      function l(t, n) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, n) {
            var e =
              null == t
                ? null
                : ("undefined" !== typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != e) {
              var r,
                o,
                u = [],
                i = !0,
                c = !1;
              try {
                for (
                  e = e.call(t);
                  !(i = (r = e.next()).done) &&
                  (u.push(r.value), !n || u.length !== n);
                  i = !0
                );
              } catch (a) {
                (c = !0), (o = a);
              } finally {
                try {
                  i || null == e.return || e.return();
                } finally {
                  if (c) throw o;
                }
              }
              return u;
            }
          })(t, n) ||
          (function (t, n) {
            if (!t) return;
            if ("string" === typeof t) return a(t, n);
            var e = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === e && t.constructor && (e = t.constructor.name);
            if ("Map" === e || "Set" === e) return Array.from(e);
            if (
              "Arguments" === e ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
            )
              return a(t, n);
          })(t, n) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }

      var f = function (t, n) {
        var e,
          a = (0, u.Z)(function (t) {
            return t.setConnectionValid;
          }),
          f = (0, u.Z)(function (t) {
            return t.addLogs;
          }),
          s = i(t),
          d = l(
            (0, c.Z)(
              null === s ||
                void 0 === s ||
                null === (e = s.data) ||
                void 0 === e
                ? void 0
                : e.current,
            ),
            2,
          ),
          p = d[0],
          y = d[1],
          v = (0, r.useMemo)(
            function () {
              return n || Object.values(o.Z);
            },
            [n, o.Z],
          ),
          b = v.includes(y),
          h = null === s || void 0 === s ? void 0 : s.id;
        return (
          (0, r.useEffect)(
            function () {
              var n;
              a({ source: h, target: t, isValid: b }),
                !b &&
                  (null === s ||
                  void 0 === s ||
                  null === (n = s.data) ||
                  void 0 === n
                    ? void 0
                    : n.current) &&
                  f({
                    method: "error",
                    data: [
                      "Data input is not valid. Accepted types are: ".concat(
                        v.join(","),
                        ".",
                      ),
                    ],
                  });
            },
            [b, h, t, a, f, v, null === s || void 0 === s ? void 0 : s.data],
          ),
          [b ? p : null, y, b]
        );
      };
    },

    54603: function (t, n, e) {
      e.d(n, {
        Wp: function () {
          return h;
        },
        w_: function () {
          return g;
        },
      });
      var r = e(85893),
        o = (e(67294), e(95934)),
        u = e(9570),
        i = e(69647),
        c = e(47527);
      function a(t, n, e) {
        return (
          n in t
            ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[n] = e),
          t
        );
      }
      function l(t) {
        for (var n = 1; n < arguments.length; n++) {
          var e = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(e);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(e).filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              }),
            )),
            r.forEach(function (n) {
              a(t, n, e[n]);
            });
        }
        return t;
      }

      function f(t, n) {
        return (
          n || (n = t.slice(0)),
          Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(n) } }),
          )
        );
      }

      function s() {
        var t = f([
          "\n  && {\n    height: calc(100% + 2px);\n    width: 25px;\n    border-radius: 0;\n    border: none;\n    left: ",
          ";\n    right: ",
          ";\n  }\n\n  &:hover {\n    background: ",
          " !important;\n  }\n",
        ]);
        return (
          (s = function () {
            return t;
          }),
          t
        );
      }

      function d() {
        var t = f([
          "\n  &&& {\n    top: -1px;\n    right: -26px;\n    transform: translateY(0);\n    border-radius: 0 10px 10px 0;\n  }\n",
        ]);
        return (
          (d = function () {
            return t;
          }),
          t
        );
      }

      function p() {
        var t = f([
          "\n  &&& {\n    top: -1px;\n    right: auto;\n    left: -26px;\n    transform: translateY(0);\n    border-radius: 10px 0 0 10px;\n  }\n",
        ]);
        return (
          (p = function () {
            return t;
          }),
          t
        );
      }
      
      var y = (0, o.default)(i.HH)(
          s(),
          function (t) {
            return "target" === t.type ? "-32px" : "auto";
          },
          function (t) {
            return "source" === t.type ? "-32px" : "auto";
          },
          function (t) {
            return t.theme.colors.handleHover;
          },
        ),
        v = function (t) {
          var n = t.id,
            e = t.type,
            o = t.position,
            i = t.color,
            a = void 0 === i ? "#fff" : i,
            l = t.className,
            f = t.isValidConnection,
            s =
              void 0 === f
                ? function () {
                    return !0;
                  }
                : f,
            d = (0, u.a)(),
            p = (0, c.Z)(function (t) {
              return t.edges;
            }).some(function (t) {
              return t[e] === n || t["".concat(e, "Handle")] === n;
            });
          return (0, r.jsx)(y, {
            id: n,
            type: e,
            position: o,
            color: a,
            className: l,
            isValidConnection: s,
            style: { background: p ? d.colors.handleHover : d.colors.handle },
          });
        },
        b = (0, o.default)(v)(d()),
        h = function (t) {
          return (0, r.jsx)(b, l({}, t, { type: "source" }));
        },
        m = (0, o.default)(v)(p()),
        g = function (t) {
          return (0, r.jsx)(m, l({}, t, { type: "target" }));
        };
      n.ZP = v;
    },
    60607: function (t, n, e) {
      e.d(n, {
        Z: function () {
          return R;
        },
      });
      var r = e(85893),
        o = e(67294),
        u = e(46052),
        i = e(67967),
        c = e(95934),
        a = e(86893),
        l = e(68527),
        f = e(5434),
        s = e(54603),
        d = e(24750),
        p = e(76698);
      function y() {
        var t,
          n,
          e =
            ((t = [
              "\n  font-size: 11px;\n  color: ",
              ";\n  position: absolute;\n  bottom: -8px;\n  top: auto;\n  left: 0;\n  transform: translateY(100%);\n",
            ]),
            n || (n = t.slice(0)),
            Object.freeze(
              Object.defineProperties(t, { raw: { value: Object.freeze(n) } }),
            ));
        return (
          (y = function () {
            return e;
          }),
          e
        );
      }
      var v = (0, c.default)(l.xu)(y(), function (t) {
        return t.theme.colors.silverDarken15;
      });
      var b = function (t) {
          var n = t.data,
            e = (function (t) {
              if (!t) return null;
              switch (t.type) {
                case d.Z.DATASET:
                  return ""
                    .concat(t.current.length, " rows | ")
                    .concat((0, p.KX)(t.current).length, " columns");
                case d.Z.ARRAY:
                  return "".concat(t.current.length, " items");
                case d.Z.NUMBER:
                case d.Z.DATE:
                case d.Z.STRING:
                case d.Z.BOOLEAN:
                  return (0, p.KW)({ data: t.current, type: t.type });
                case d.Z.GEOJSON:
                  return t.current.type;
                case d.Z.TOPOJSON:
                  return "objects: ".concat(
                    Object.keys(t.current.objects).length,
                  );
                default:
                  return null;
              }
            })(n);
          if (!e) return null;
          var o = e.length > 64 ? "".concat(e.substr(0, 64), "\u2026") : e;
          return (0, r.jsxs)(v, { children: ["[", n.type, "] ", o] });
        },
        h = e(47527),
        m = e(26723),
        g = function (t) {
          var n = t.nodeId,
            e = (0, h.Z)(function (t) {
              return t.removeElements;
            });
          return (0, r.jsxs)(l.xu, {
            p: 2,
            children: [
              (0, r.jsx)(l.xu, {
                color: "red",
                mb: 2,
                children: "Something went wrong.",
              }),
              (0, r.jsx)(m.zx, {
                onClick: function () {
                  e([{ id: n }]);
                },
                children: "Remove Node",
              }),
            ],
          });
        };
      function j(t, n) {
        for (var e = 0; e < n.length; e++) {
          var r = n[e];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(t, r.key, r);
        }
      }
      function x(t) {
        return (x = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function O(t, n) {
        return !n || ("object" !== S(n) && "function" !== typeof n)
          ? (function (t) {
              if (void 0 === t)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called",
                );
              return t;
            })(t)
          : n;
      }
      function w(t, n) {
        return (w =
          Object.setPrototypeOf ||
          function (t, n) {
            return (t.__proto__ = n), t;
          })(t, n);
      }
      var S = function (t) {
        return t && "undefined" !== typeof Symbol && t.constructor === Symbol
          ? "symbol"
          : typeof t;
      };
      function Z(t) {
        var n = (function () {
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
          var e,
            r = x(t);
          if (n) {
            var o = x(this).constructor;
            e = Reflect.construct(r, arguments, o);
          } else e = r.apply(this, arguments);
          return O(this, e);
        };
      }
      var E = h.Z.getState().addLogs,
        k = (function (t) {
          !(function (t, n) {
            if ("function" !== typeof n && null !== n)
              throw new TypeError(
                "Super expression must either be null or a function",
              );
            (t.prototype = Object.create(n && n.prototype, {
              constructor: { value: t, writable: !0, configurable: !0 },
            })),
              n && w(t, n);
          })(i, t);
          var n,
            e,
            o,
            u = Z(i);
          function i(t) {
            var n;
            return (
              (function (t, n) {
                if (!(t instanceof n))
                  throw new TypeError("Cannot call a class as a function");
              })(this, i),
              ((n = u.call(this, t)).state = { hasError: !1 }),
              n
            );
          }
          return (
            (n = i),
            (o = [
              {
                key: "getDerivedStateFromError",
                value: function () {
                  return { hasError: !0 };
                },
              },
            ]),
            (e = [
              {
                key: "componentDidCatch",
                value: function (t) {
                  E({ method: "error", data: [t.name, t.message] });
                },
              },
              {
                key: "render",
                value: function () {
                  var t = this.props,
                    n = t.children,
                    e = t.nodeId;
                  return this.state.hasError ? (0, r.jsx)(g, { nodeId: e }) : n;
                },
              },
            ]) && j(n.prototype, e),
            o && j(n, o),
            i
          );
        })(o.Component),
        A = (0, o.memo)(function (t) {
          var n = t.data,
            e = void 0 === n ? {} : n,
            u = t.type,
            i = void 0 === u ? "default" : u,
            c = t.id,
            d = t.children,
            p = t.targetHandle,
            y = void 0 === p || p,
            v = t.sourceHandle,
            m = void 0 === v || v,
            g = t.color,
            j = (0, h.Z)(function (t) {
              return t.selectedNodeId;
            }),
            x = (0, h.Z)(function (t) {
              return t.removeElements;
            }),
            O = j === c,
            w = (0, o.useCallback)(
              function () {
                x([{ id: c }]);
              },
              [x, c],
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
            children: (0, r.jsxs)(k, {
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
                      children: [(0, r.jsx)(f.iVq, {}), " ", e.label],
                    }),
                    (0, r.jsx)(l.xu, {
                      color: "silver",
                      cursor: "pointer",
                      opacity: 0.25,
                      _hover: { opacity: 1 },
                      onClick: w,
                      "data-testid": "node__remove",
                      children: (0, r.jsx)(a.q5L, {}),
                    }),
                  ],
                }),
                (0, r.jsx)(b, { data: e, isTitle: !0 }),
                y && (0, r.jsx)(s.w_, { color: g, position: "left", id: c }),
                m && (0, r.jsx)(s.Wp, { color: g, position: "right", id: c }),
                (0, r.jsx)(l.xu, { children: d }),
                (0, r.jsx)(b, { data: e }),
              ],
            }),
          });
        });
      A.displayName = "NodeWrapper";
      var C = A;
      function P(t, n) {
        (null == n || n > t.length) && (n = t.length);
        for (var e = 0, r = new Array(n); e < n; e++) r[e] = t[e];
        return r;
      }
      function _(t, n, e) {
        return (
          n in t
            ? Object.defineProperty(t, n, {
                value: e,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[n] = e),
          t
        );
      }
      function I(t) {
        for (var n = 1; n < arguments.length; n++) {
          var e = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(e);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(e).filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
              }),
            )),
            r.forEach(function (n) {
              _(t, n, e[n]);
            });
        }
        return t;
      }
      function N(t, n) {
        return (
          (function (t) {
            if (Array.isArray(t)) return t;
          })(t) ||
          (function (t, n) {
            var e =
              null == t
                ? null
                : ("undefined" !== typeof Symbol && t[Symbol.iterator]) ||
                  t["@@iterator"];
            if (null != e) {
              var r,
                o,
                u = [],
                i = !0,
                c = !1;
              try {
                for (
                  e = e.call(t);
                  !(i = (r = e.next()).done) &&
                  (u.push(r.value), !n || u.length !== n);
                  i = !0
                );
              } catch (a) {
                (c = !0), (o = a);
              } finally {
                try {
                  i || null == e.return || e.return();
                } finally {
                  if (c) throw o;
                }
              }
              return u;
            }
          })(t, n) ||
          (function (t, n) {
            if (!t) return;
            if ("string" === typeof t) return P(t, n);
            var e = Object.prototype.toString.call(t).slice(8, -1);
            "Object" === e && t.constructor && (e = t.constructor.name);
            if ("Map" === e || "Set" === e) return Array.from(e);
            if (
              "Arguments" === e ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
            )
              return P(t, n);
          })(t, n) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      var R = function (t) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          e = (0, o.memo)(function (n) {
            return (0, r.jsx)(t, I({}, n));
          });
        return (0, o.memo)(
          function (t) {
            var o = t.data,
              c = t.type,
              a = t.id,
              l = N(
                (0, i.Z)(null === o || void 0 === o ? void 0 : o.current),
                2,
              ),
              f = l[0],
              s = l[1],
              d = (0, u.Fg)().colors.block,
              p = I({}, o, { current: f, type: s });
            return (0, r.jsx)(
              C,
              I({ id: a, data: p, type: c, color: d }, n, {
                children: (0, r.jsx)(e, { id: a, data: p, color: d }),
              }),
            );
          },
          function (t, n) {
            return t.data === n.data && t.type === n.type && t.id === n.id;
          },
        );
      };
    },
  },
]);
