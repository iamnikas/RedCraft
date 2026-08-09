"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8495],
  {
    18495: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return ft;
          },
        });
      var r = t(85893),
        o = t(67294),
        i = t(69647),
        a = t(46052),
        u = t(68527),
        l = t(94480),
        c = t(26723),
        s = t(47527);
      function f(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      function d(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(t).filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              }),
            )),
            r.forEach(function (n) {
              f(e, n, t[n]);
            });
        }
        return e;
      }
      var p = function (e) {
        var n = e.items,
          t = void 0 === n ? [] : n,
          o = e.label,
          i = void 0 === o ? "Dropdown" : o,
          a = e.menuButtonProps,
          u = void 0 === a ? {} : a,
          f = (0, s.Z)(function (e) {
            return e.setDropDownOpen;
          });
        return (0, r.jsxs)(l.v2, {
          onOpen: function () {
            return f(!0);
          },
          onClose: function () {
            return f(!1);
          },
          children: [
            (0, r.jsx)(
              l.j2,
              d(
                {
                  as: c.zx,
                  bg: "transparent",
                  _active: { outline: "none" },
                  _focus: { outline: "none" },
                  className: "dropdown-label",
                  textAlign: "center",
                  px: 2,
                },
                u,
                { children: i },
              ),
            ),
            (0, r.jsx)(l.qy, {
              zIndex: 1e3,
              children: t.map(function (e) {
                return (0, r.jsx)(
                  l.sN,
                  { onClick: e.onSelect, children: e.label },
                  e.label,
                );
              }),
            }),
          ],
        });
      };
      function m(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
        return r;
      }
      function v(e, n) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, n) {
            var t =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != t) {
              var r,
                o,
                i = [],
                a = !0,
                u = !1;
              try {
                for (
                  t = t.call(e);
                  !(a = (r = t.next()).done) &&
                  (i.push(r.value), !n || i.length !== n);
                  a = !0
                );
              } catch (l) {
                (u = !0), (o = l);
              } finally {
                try {
                  a || null == t.return || t.return();
                } finally {
                  if (u) throw o;
                }
              }
              return i;
            }
          })(e, n) ||
          (function (e, n) {
            if (!e) return;
            if ("string" === typeof e) return m(e, n);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === t && e.constructor && (t = e.constructor.name);
            if ("Map" === t || "Set" === t) return Array.from(t);
            if (
              "Arguments" === t ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
            )
              return m(e, n);
          })(e, n) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      var h = function () {
          var e = (0, s.Z)(function (e) {
              return e.setElements;
            }),
            n = (0, s.Z)(function (e) {
              return e.clearLogs;
            }),
            t = (0, s.Z)(function (e) {
              return e.onFlowSaveCallback;
            }),
            r = (0, i.AC)(),
            a = (0, i._K)(),
            u = a.setViewport,
            l = a.viewportInitialized,
            c = (0, o.useCallback)(
              function () {
                l &&
                  confirm("Are you sure?") &&
                  (e([]), u({ x: 0, y: 0, zoom: 1 }), n());
              },
              [l, e, u, n],
            ),
            f = (0, o.useCallback)(
              function () {
                var e = r.getState(),
                  n = e.nodeInternals,
                  o = e.edges,
                  i = e.transform,
                  a = Array.from(n.values()),
                  u = v(i, 3),
                  l = u[0],
                  c = u[1],
                  s = u[2];
                t && t({ nodes: a, edges: o, x: l, y: c, zoom: s });
              },
              [r, t],
            );
          return { clear: c, save: f };
        },
        b = t(24750),
        g = (0, o.lazy)(function () {
          return Promise.all([t.e(1228), t.e(8920)]).then(t.bind(t, 78920));
        }),
        y = (0, o.lazy)(function () {
          return Promise.all([t.e(1228), t.e(9134)]).then(t.bind(t, 99134));
        }),
        x = (0, o.lazy)(function () {
          return Promise.all([t.e(1228), t.e(2278)]).then(t.bind(t, 82278));
        }),
        w = (0, o.lazy)(function () {
          return Promise.all([t.e(1228), t.e(4949)]).then(t.bind(t, 44949));
        }),
        j = (0, o.lazy)(function () {
          return Promise.all([t.e(1228), t.e(5913)]).then(t.bind(t, 35913));
        }),
        O = [
          {
            type: "file",
            component: y,
            description: "Handles csv, json, geojson or topojson files.",
            input: null,
            output: [b.Z.DATASET, b.Z.GEOJSON],
            data: { label: "File", group: "input" },
          },
          {
            type: "paste",
            component: x,
            description:
              "Paste input: string, number, csv, json, geojson or topojson.",
            input: null,
            output: [
              b.Z.DATASET,
              b.Z.OBJECT,
              b.Z.STRING,
              b.Z.NUMBER,
              b.Z.GEOJSON,
            ],
            data: {
              label: "Paste",
              group: "input",
              inputValue: "",
              inputType: "json",
              inputTypeOptions: ["json", "csv", "text"],
            },
          },
          {
            type: "request",
            component: j,
            description: "Loads data via a http request.",
            input: null,
            output: [b.Z.DATASET, b.Z.OBJECT, b.Z.GEOJSON],
            data: { label: "HTTP Request", group: "input", url: "" },
          },
          {
            type: "spreadsheet",
            component: w,
            description: "Loads data from google sheets.",
            input: null,
            output: [b.Z.DATASET],
            data: { label: "Sheets", group: "input", sheetIdInput: "" },
          },
          {
            type: "exampledata",
            component: g,
            description:
              "Some example data for playing around with data blocks.",
            output: [b.Z.DATASET, b.Z.GEOJSON],
            data: { label: "Example Data", group: "input", index: 0 },
          },
        ],
        S = (0, o.lazy)(function () {
          return Promise.all([t.e(1228), t.e(2986), t.e(4881)]).then(
            t.bind(t, 34881),
          );
        }),
        A = (0, o.lazy)(function () {
          return Promise.all([t.e(1228), t.e(562), t.e(2986), t.e(4307)]).then(
            t.bind(t, 34307),
          );
        }),
        E = (0, o.lazy)(function () {
          return Promise.all([
            t.e(1228),
            t.e(8018),
            t.e(2993),
            t.e(146),
            t.e(2986),
            t.e(246),
          ]).then(t.bind(t, 13628));
        }),
        Z = (0, o.lazy)(function () {
          return Promise.all([t.e(1228), t.e(2986), t.e(7735)]).then(
            t.bind(t, 97735),
          );
        }),
        T = (0, o.lazy)(function () {
          return Promise.all([t.e(1228), t.e(2986), t.e(33)]).then(
            t.bind(t, 40033),
          );
        }),
        k = (0, o.lazy)(function () {
          return Promise.all([t.e(1228), t.e(9085), t.e(2986), t.e(8608)]).then(
            t.bind(t, 38608),
          );
        }),
        P = (0, o.lazy)(function () {
          return Promise.all([t.e(1228), t.e(2986), t.e(2422)]).then(
            t.bind(t, 72422),
          );
        }),
        C = (0, o.lazy)(function () {
          return Promise.all([t.e(1228), t.e(2986), t.e(8054)]).then(
            t.bind(t, 38054),
          );
        }),
        N = (0, o.lazy)(function () {
          return Promise.all([
            t.e(1228),
            t.e(5482),
            t.e(5036),
            t.e(2986),
            t.e(9417),
          ]).then(t.bind(t, 89417));
        }),
        D = [
          {
            type: "filter",
            component: P,
            description: "Groups a data set based on a given column name.",
            input: [b.Z.DATASET],
            output: [b.Z.DATASET],
            data: {
              label: "Filter",
              group: "transform",
              column: "",
              conditionValue: "",
              conditionId: "",
            },
          },
          {
            type: "merge",
            component: S,
            description:
              "Merges two data sets based on the given column names.",
            input: [b.Z.DATASET, b.Z.GEOJSON],
            output: [b.Z.DATASET],
            data: {
              label: "Merge",
              group: "transform",
              baseColumn: "",
              baseData: null,
              insertColumn: "",
              insertData: null,
              mergeCount: 0,
            },
          },
          {
            type: "grouping",
            component: k,
            description: "Groups a data set based on a given column name.",
            input: [b.Z.DATASET, b.Z.GEOJSON],
            output: [b.Z.DATASET],
            data: { label: "Group", group: "transform", column: "" },
          },
          {
            type: "slice",
            component: T,
            description: "Slices a data set based on indices.",
            input: [b.Z.DATASET, b.Z.ARRAY],
            output: [b.Z.DATASET],
            data: {
              label: "Slice",
              group: "transform",
              startIndex: 0,
              endIndex: "",
            },
          },
          {
            type: "sort",
            component: A,
            description: "Sorts data based on a given column.",
            input: [b.Z.DATASET],
            output: [b.Z.DATASET],
            data: {
              label: "Sort",
              group: "transform",
              order: "asc",
              column: "",
            },
          },
          {
            type: "rename-cols",
            component: Z,
            description: "Renames multiple columns.",
            input: [b.Z.DATASET],
            output: [b.Z.DATASET],
            data: {
              label: "Rename Columns",
              group: "transform",
              inputs: [{ old: "", new: null }],
            },
          },
          {
            type: "js",
            component: E,
            input: Object.values(b.Z),
            output: Object.values(b.Z),
            description:
              "The most powerful node! Takes two inputs (can be everything) and lets you transform it with Javascript.",
            data: {
              label: "Javascript",
              group: "transform",
              code: "// your code here\n\nreturn null;",
            },
          },
          {
            type: "geocode",
            component: C,
            input: [b.Z.DATASET],
            output: [b.Z.DATASET],
            description:
              "Adds latitude and longitude to each entry of a data set. Can be used with Here or Google Maps.",
            data: {
              label: "Geocode",
              group: "transform",
              apiKey: "",
              column: "",
              provider: "googlemaps",
            },
          },
          {
            type: "colorize",
            component: N,
            input: [b.Z.DATASET, b.Z.GEOJSON],
            output: [b.Z.DATASET],
            description:
              'Adds "color" property to each entry of a data set or geojson.',
            data: {
              label: "Colorize",
              group: "transform",
              colorScale: [
                "#fafa6e",
                "#9cdf7c",
                "#4abd8c",
                "#00968e",
                "#106e7c",
                "#2a4858",
              ],
            },
          },
        ];
      function z(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      var I = function (e) {
          var n = e.component;
          e.fallback;
          return function (e) {
            return (0, r.jsx)(
              n,
              (function (e) {
                for (var n = 1; n < arguments.length; n++) {
                  var t = null != arguments[n] ? arguments[n] : {},
                    r = Object.keys(t);
                  "function" === typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                      Object.getOwnPropertySymbols(t).filter(function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                      }),
                    )),
                    r.forEach(function (n) {
                      z(e, n, t[n]);
                    });
                }
                return e;
              })({}, e),
            );
          };
        },
        _ = t(95934);
      function F() {
        var e,
          n,
          t =
            ((e = [
              "\n  border: 1px solid ",
              ";\n  box-shadow: none !important;\n  color: #fff;\n",
            ]),
            n || (n = e.slice(0)),
            Object.freeze(
              Object.defineProperties(e, { raw: { value: Object.freeze(n) } }),
            ));
        return (
          (F = function () {
            return t;
          }),
          t
        );
      }
      var L = (0, _.default)(u.xu)(F(), function (e) {
          return e.isSelected ? e.color : e.theme.colors.bg.light;
        }),
        G = function () {
          return (0, r.jsx)(L, {
            p: 2,
            bg: "bg.grey",
            borderRadius: 1,
            children: "Loading...",
          });
        },
        J = I({
          component: (0, o.lazy)(function () {
            return Promise.all([
              t.e(1228),
              t.e(9034),
              t.e(2986),
              t.e(8809),
            ]).then(t.bind(t, 68809));
          }),
          fallback: G,
        }),
        M = I({
          component: (0, o.lazy)(function () {
            return Promise.all([
              t.e(1228),
              t.e(9034),
              t.e(2986),
              t.e(3411),
            ]).then(t.bind(t, 83411));
          }),
          fallback: G,
        }),
        R = I({
          component: (0, o.lazy)(function () {
            return Promise.all([
              t.e(1228),
              t.e(9034),
              t.e(2986),
              t.e(9937),
            ]).then(t.bind(t, 9937));
          }),
          fallback: G,
        }),
        U = I({
          component: (0, o.lazy)(function () {
            return Promise.all([
              t.e(1228),
              t.e(3715),
              t.e(9034),
              t.e(9363),
              t.e(2986),
              t.e(8179),
            ]).then(t.bind(t, 78179));
          }),
          fallback: G,
        }),
        B = I({
          component: (0, o.lazy)(function () {
            return Promise.all([
              t.e(1228),
              t.e(5036),
              t.e(7706),
              t.e(2986),
              t.e(2283),
            ]).then(t.bind(t, 5209));
          }),
          fallback: G,
        }),
        Y = I({
          component: (0, o.lazy)(function () {
            return Promise.all([t.e(1228), t.e(2986), t.e(2110)]).then(
              t.bind(t, 2110),
            );
          }),
          fallback: G,
        }),
        H = I({
          component: (0, o.lazy)(function () {
            return Promise.all([t.e(1228), t.e(2986), t.e(9398)]).then(
              t.bind(t, 59398),
            );
          }),
          fallback: G,
        }),
        V = [
          {
            type: "bbox",
            component: J,
            description: "Calculates the bounding box of a given geojson.",
            input: [b.Z.GEOJSON],
            output: [b.Z.GEOJSON],
            data: { label: "Bounding Box", group: "geo data" },
          },
          {
            type: "centroid",
            component: M,
            description: "Calculates the centroid of a given geojson.",
            input: [b.Z.GEOJSON],
            output: [b.Z.GEOJSON],
            data: { label: "Centroid", group: "geo data" },
          },
          {
            type: "area",
            component: R,
            input: [b.Z.GEOJSON],
            output: [b.Z.NUMBER],
            description:
              "Calculates the area in square meters of a given geojson.",
            data: { label: "Area", group: "geo data" },
          },
          {
            type: "buffer",
            component: U,
            input: [b.Z.GEOJSON],
            output: [b.Z.GEOJSON],
            description: "Buffers a geojson.",
            data: { label: "Buffer", group: "geo data", distance: 0 },
          },
          {
            type: "simplify",
            component: B,
            input: [b.Z.GEOJSON],
            output: [b.Z.GEOJSON],
            description: "Simplifies a geojson.",
            data: { label: "Simplify", group: "geo data", sliderValue: 1 },
          },
          {
            type: "data2points",
            component: H,
            input: [b.Z.DATASET],
            output: [b.Z.GEOJSON],
            description:
              "Converts data rows to a feature collection with points.",
            data: {
              label: "Data to Points",
              group: "geo data",
              latColumn: "",
              lngColumn: "",
            },
          },
          {
            type: "topo2geo",
            component: Y,
            input: [b.Z.TOPOJSON],
            output: [b.Z.GEOJSON],
            description: "Converts a Topojson to Geojson.",
            data: {
              label: "Topojson to Geojson",
              group: "geo data",
              layer: "",
              layers: null,
            },
          },
        ],
        W = (0, o.lazy)(function () {
          return Promise.all([
            t.e(1228),
            t.e(5036),
            t.e(2571),
            t.e(8133),
            t.e(2986),
            t.e(8493),
          ]).then(t.bind(t, 28493));
        }),
        K = (0, o.lazy)(function () {
          return Promise.all([
            t.e(1228),
            t.e(5036),
            t.e(2571),
            t.e(2986),
            t.e(8884),
          ]).then(t.bind(t, 78884));
        }),
        q = (0, o.lazy)(function () {
          return Promise.all([
            t.e(1228),
            t.e(5036),
            t.e(2571),
            t.e(2986),
            t.e(7873),
          ]).then(t.bind(t, 67873));
        }),
        X = (0, o.lazy)(function () {
          return Promise.all([
            t.e(1228),
            t.e(5036),
            t.e(2571),
            t.e(2986),
            t.e(1270),
          ]).then(t.bind(t, 31270));
        }),
        $ = [
          {
            type: "barchart",
            component: W,
            description: "Displays a bar chart of given x and y column names.",
            input: [b.Z.DATASET],
            output: [b.Z.DATASET],
            data: {
              label: "Barchart",
              group: "visualization",
              isHorizontal: !0,
              xColumn: "",
              yColumn: "",
            },
          },
          {
            type: "histogram",
            component: K,
            description: "Displays a histogram of a given column name.",
            input: [b.Z.DATASET],
            output: [b.Z.DATASET],
            data: { label: "Histogram", group: "visualization", column: "" },
          },
          {
            type: "scatterplot",
            component: q,
            description:
              "Displays a scatterplot of given x and y column names.",
            input: [b.Z.DATASET],
            output: [b.Z.DATASET],
            data: {
              label: "Scatterplot",
              group: "visualization",
              xColumn: "",
              yColumn: "",
            },
          },
          {
            type: "timeseries",
            component: X,
            description:
              "Displays a timeseries line chart of given x and y column names.",
            input: [b.Z.DATASET],
            output: [b.Z.DATASET],
            data: {
              label: "Time Series",
              group: "visualization",
              xColumn: "",
              yColumn: "",
            },
          },
        ],
        Q = (0, o.lazy)(function () {
          return Promise.all([t.e(1228), t.e(2986), t.e(3486)]).then(
            t.bind(t, 93486),
          );
        }),
        ee = (0, o.lazy)(function () {
          return Promise.all([t.e(1911), t.e(247)]).then(t.bind(t, 90247));
        }),
        ne = (0, o.lazy)(function () {
          return Promise.all([t.e(1228), t.e(2986), t.e(8835)]).then(
            t.bind(t, 48835),
          );
        }),
        te = [
          {
            type: "statistics",
            component: Q,
            description:
              "Gives you min, max, avg, mean and count of a given column name.",
            input: [b.Z.DATASET],
            output: null,
            data: { label: "Stats", group: "misc" },
          },
          {
            type: "markdown",
            component: ee,
            description: "Lets you write some markdown.",
            input: null,
            output: null,
            data: {
              label: "Markdown",
              group: "misc",
              mode: "write",
              inputValue: "## hello datablocks",
            },
          },
          {
            type: "export",
            component: ne,
            description: "Lets you export data as csv, json or geojson.",
            input: [b.Z.DATASET, b.Z.GEOJSON, b.Z.TOPOJSON, b.Z.OBJECT],
            output: null,
            data: { label: "Export", group: "misc" },
          },
        ];
      function re(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
        return r;
      }
      function oe(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return re(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (function (e, n) {
            if (!e) return;
            if ("string" === typeof e) return re(e, n);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === t && e.constructor && (t = e.constructor.name);
            if ("Map" === t || "Set" === t) return Array.from(t);
            if (
              "Arguments" === t ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
            )
              return re(e, n);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      var ie = oe(O).concat(oe(D), oe(V), oe($), oe(te)),
        ae = ie.reduce(function (e, n) {
          return (e[n.type] = n.component), e;
        }, {}),
        ue = ie.map(function (e) {
          return {
            id: e.type,
            data: e.data,
            type: e.type,
            position: { x: 0, y: 0 },
          };
        });
      var le = function () {
          var e = (0, s.Z)(function (e) {
              return e.setElements;
            }),
            n = (0, i._K)(),
            t = n.setViewport,
            r = n.viewportInitialized;
          return {
            loadAllNodes: (0, o.useCallback)(
              function () {
                r && (e(ue), t({ x: 0, y: 0, zoom: 1 }));
              },
              [r, e, t],
            ),
          };
        },
        ce = t(70681),
        se = t.n(ce),
        fe = t(83465),
        de = t.n(fe);
      function pe(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
        return r;
      }
      function me(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      function ve(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return pe(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (function (e, n) {
            if (!e) return;
            if ("string" === typeof e) return pe(e, n);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === t && e.constructor && (t = e.constructor.name);
            if ("Map" === t || "Set" === t) return Array.from(t);
            if (
              "Arguments" === t ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
            )
              return pe(e, n);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function he(e) {
        var n = new (se().graphlib.Graph)();
        return (
          n.setDefaultEdgeLabel(function () {
            return {};
          }),
          n.setGraph({ rankdir: "LR", ranksep: 100 }),
          e.forEach(function (e) {
            (0, i.UG)(e)
              ? n.setNode(e.id, { width: e.width, height: e.height })
              : n.setEdge(e.source, e.target);
          }),
          se().layout(n),
          e.map(function (e) {
            var t = de()(e);
            if ((0, i.UG)(t)) {
              var r = n.node(t.id);
              return (function (e) {
                for (var n = 1; n < arguments.length; n++) {
                  var t = null != arguments[n] ? arguments[n] : {},
                    r = Object.keys(t);
                  "function" === typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                      Object.getOwnPropertySymbols(t).filter(function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                      }),
                    )),
                    r.forEach(function (n) {
                      me(e, n, t[n]);
                    });
                }
                return e;
              })({}, t, { position: { x: r.x + Math.random() / 1e3, y: r.y } });
            }
            return t;
          })
        );
      }
      var be = function () {
          var e = (0, s.Z)(function (e) {
              return e.setElements;
            }),
            n = (0, i.AC)();
          return (0, o.useCallback)(
            function () {
              var t = n.getState(),
                r = t.nodeInternals,
                o = t.edges,
                i = he(ve(Array.from(r.values())).concat(ve(o)));
              e(i);
            },
            [e, n],
          );
        },
        ge = t(73552),
        ye = t(86893),
        xe = t(66653),
        we = t(4612);
      function je(e, n) {
        return (
          n || (n = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(n) } }),
          )
        );
      }
      function Oe() {
        var e = je([
          "\n  display: flex;\n  position: absolute;\n  left: 50%;\n  transform: translate(-50%, 0);\n  font-weight: 700;\n",
        ]);
        return (
          (Oe = function () {
            return e;
          }),
          e
        );
      }
      function Se() {
        var e = je([
          "\n  position: relative;\n  padding: 0 15px;\n\n  svg {\n    display: none !important;\n  }\n",
        ]);
        return (
          (Se = function () {
            return e;
          }),
          e
        );
      }
      function Ae() {
        var e = je([
          "\n  display: flex;\n  margin-bottom: 5px;\n  flex-grow: 1;\n  border: 1px solid ",
          ";\n  border-radius: 2px;\n  overflow: hidden;\n  width: 100%;\n\n  input {\n    font-weight: 700;\n    width: 100%;\n    border: none;\n    border-radius: 2px 0 0 2px;\n    width: 100%;\n\n    &:focus\xa0 {\n      outline: none;\n    }\n  }\n",
        ]);
        return (
          (Ae = function () {
            return e;
          }),
          e
        );
      }
      var Ee = (0, _.default)(u.xu)(Oe()),
        Ze = (0, _.default)(u.xu)(Se()),
        Te = _.default.form(Ae(), function (e) {
          return e.theme.colors.silverDarken30;
        });
      var ke = function (e) {
          var n = e.onFlowTitleChange,
            t = (0, s.Z)(function (e) {
              return e.demoMode;
            }),
            i = (0, s.Z)(function (e) {
              return e.title;
            }),
            a = (0, s.Z)(function (e) {
              return e.setTitle;
            }),
            u = (0, o.useRef)(null),
            l = (0, o.useState)(!1),
            f = l[0],
            d = l[1],
            p = t
              ? {}
              : {
                  cursor: "pointer",
                  svg: {
                    position: "absolute",
                    display: "block !important",
                    right: 0,
                    top: 0,
                  },
                };
          (0, o.useEffect)(
            function () {
              f && u.current.focus();
            },
            [f],
          );
          var m = function (e) {
              e.preventDefault(), e.stopPropagation();
            },
            v = function (e) {
              var r;
              if (t) return null;
              e.preventDefault(), e.stopPropagation();
              var o =
                null === u ||
                void 0 === u ||
                null === (r = u.current) ||
                void 0 === r
                  ? void 0
                  : r.value;
              o && (a(o), n(o)), d(!1);
            };
          (0, o.useEffect)(
            function () {
              f && u.current.focus();
            },
            [f],
          );
          var h = (0, o.useCallback)(
            function () {
              if (t) return null;
              d(!0);
            },
            [t],
          );
          return (0, r.jsx)(Ee, {
            children:
              f && !t
                ? (0, r.jsxs)(Te, {
                    onSubmit: v,
                    children: [
                      (0, r.jsx)(we.II, {
                        type: "text",
                        defaultValue: i,
                        onFocus: m,
                        onClick: m,
                        onBlur: v,
                        ref: u,
                      }),
                      (0, r.jsx)(c.zx, {
                        type: "submit",
                        children: (0, r.jsx)(ye.UgA, { size: 16 }),
                      }),
                    ],
                  })
                : (0, r.jsxs)(Ze, {
                    onClick: h,
                    _hover: p,
                    children: [i, !t && (0, r.jsx)(xe.LBv, { size: 12 })],
                  }),
          });
        },
        Pe = function (e) {
          var n = e.onFlowTitleChange,
            t = void 0 === n ? function () {} : n,
            o = (0, s.Z)(function (e) {
              return e.demoMode;
            }),
            a = (0, s.Z)(function (e) {
              return e.loadFlow;
            }),
            l = (0, i._K)(),
            c = l.zoomIn,
            f = l.zoomOut,
            d = l.zoomTo,
            m = l.fitView,
            v = h(),
            b = v.save,
            g = v.clear,
            y = le().loadAllNodes,
            x = be();
          return (0, r.jsxs)(ge.ZP, {
            children: [
              (0, r.jsxs)(ge.br, {
                children: [
                  !o &&
                    (0, r.jsx)(p, {
                      items: [
                        { label: "Save", onSelect: b },
                        { label: "Clear", onSelect: g },
                      ],
                      label: (0, r.jsx)(ge.LY, {
                        style: { marginRight: 0 },
                        children: "File",
                      }),
                    }),
                  (0, r.jsx)(p, {
                    items: [
                      { label: "Auto Layout Nodes", onSelect: x },
                      { label: "Fit View", onSelect: m },
                      {
                        label: "Zoom 100%",
                        onSelect: function () {
                          return d(1);
                        },
                      },
                      { label: "Zoom In", onSelect: c },
                      { label: "Zoom Out", onSelect: f },
                      { label: "All nodes", onSelect: y },
                    ],
                    label: (0, r.jsx)(ge.LY, {
                      style: { marginRight: 0 },
                      children: "View",
                    }),
                  }),
                  (0, r.jsx)(p, {
                    items: [
                      {
                        label: "Introduction Flow",
                        onSelect: function () {
                          return a("introduction");
                        },
                      },
                    ],
                    label: (0, r.jsx)(ge.LY, {
                      style: { marginRight: 0 },
                      children: "Help",
                    }),
                  }),
                  o &&
                    (0, r.jsxs)(u.kC, {
                      ml: "auto",
                      children: [
                        (0, r.jsx)(ge.LY, {
                          style: { marginRight: 0, marginLeft: "1em" },
                          children: (0, r.jsx)("a", {
                            href: "/login",
                            children: "Login",
                          }),
                        }),
                        (0, r.jsx)(ge.LY, {
                          style: { marginRight: 0, marginLeft: "1em" },
                          children: (0, r.jsx)("a", {
                            href: "/signup",
                            children: "Sign up",
                          }),
                        }),
                      ],
                    }),
                ],
              }),
              (0, r.jsx)(ke, { onFlowTitleChange: t }),
            ],
          });
        };
      function Ce(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      function Ne(e, n) {
        if (null == e) return {};
        var t,
          r,
          o = (function (e, n) {
            if (null == e) return {};
            var t,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (t = i[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
            return o;
          })(e, n);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (t = i[r]),
              n.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (o[t] = e[t]));
        }
        return o;
      }
      var De = function (e) {
        var n = e.children,
          t = Ne(e, ["children"]);
        return (0, r.jsx)(
          u.xu,
          (function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = null != arguments[n] ? arguments[n] : {},
                r = Object.keys(t);
              "function" === typeof Object.getOwnPropertySymbols &&
                (r = r.concat(
                  Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                  }),
                )),
                r.forEach(function (n) {
                  Ce(e, n, t[n]);
                });
            }
            return e;
          })(
            {
              fontSize: "11px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.13em",
              lineHeight: "1",
            },
            t,
            { children: n },
          ),
        );
      };
      function ze() {
        var e,
          n,
          t =
            ((e = [
              "\n  border-top: ",
              ";\n  border-right: ",
              ";\n  border-bottom: ",
              ";\n  border-left: ",
              ";\n  height: 30px;\n  width: 100%;\n  flex-shrink: 0;\n  flex-grow: 0;\n  overflow: visible;\n  position: relative;\n",
            ]),
            n || (n = e.slice(0)),
            Object.freeze(
              Object.defineProperties(e, { raw: { value: Object.freeze(n) } }),
            ));
        return (
          (ze = function () {
            return t;
          }),
          t
        );
      }
      var Ie = (0, _.default)(u.kC)(
        ze(),
        function (e) {
          return e.borderTop
            ? "1px solid ".concat(e.theme.colors.bg.light)
            : "none";
        },
        function (e) {
          return e.borderRight
            ? "1px solid ".concat(e.theme.colors.bg.light)
            : "none";
        },
        function (e) {
          return e.borderBottom
            ? "1px solid ".concat(e.theme.colors.bg.light)
            : "none";
        },
        function (e) {
          return e.borderLeft
            ? "1px solid ".concat(e.theme.colors.bg.light)
            : "none";
        },
      );
      Ie.defaultProps = { p: 2, alignItems: "center" };
      var _e = Ie,
        Fe = t(70910),
        Le = t(31564),
        Ge = (0, o.memo)(function (e) {
          var n = e.logs,
            t = e.addLogs,
            i = (0, a.Fg)();
          return (
            (0, o.useState)(function () {
              return (0, Le.Hook)(
                Fe.Z.iFrame.contentWindow.console,
                function (e) {
                  return t((0, Le.Decode)(e));
                },
              );
            }, []),
            (0, r.jsx)(u.xu, {
              children: (0, r.jsx)(Le.Console, {
                styles: { BASE_FONT_FAMILY: i.fonts.mono },
                logs: n,
                variant: "dark",
              }),
            })
          );
        });
      Ge.displayName = "ConsoleComponent";
      var Je = Ge,
        Me = [
          { method: "command", data: ["help"] },
          {
            method: "log",
            data: [
              "You can use the following commands:\n> help - shows this information\n> intro - loads the intro a flow\n> clear - clears this view",
            ],
          },
          {
            method: "log",
            data: [
              "Hint: You can see the console.log outputs of your Javascript blocks here.",
            ],
          },
        ],
        Re = (0, o.memo)(function () {
          var e = (0, s.Z)(function (e) {
              return e.logs;
            }),
            n = (0, s.Z)(function (e) {
              return e.addLogs;
            }),
            t = (0, s.Z)(function (e) {
              return e.clearLogs;
            }),
            o = (0, s.Z)(function (e) {
              return e.loadFlow;
            });
          return (0, r.jsxs)(u.kC, {
            flexDirection: "column",
            flexGrow: 1,
            overflow: "hidden",
            "data-testid": "terminal",
            children: [
              (0, r.jsx)(u.xu, {
                bg: "bg.dark",
                overflowY: "auto",
                flexGrow: 1,
                position: "relative",
                children: (0, r.jsx)(u.xu, {
                  position: "absolute",
                  left: 0,
                  top: 0,
                  bottom: 0,
                  right: 0,
                  "data-testid": "terminal__output",
                  children: (0, r.jsx)(Je, { logs: e, addLogs: n }),
                }),
              }),
              (0, r.jsx)("form", {
                onSubmit: function (e) {
                  e.preventDefault();
                  var r = e.target.input.value;
                  return r
                    ? "help" === r
                      ? ((e.target.input.value = ""), n(Me))
                      : "intro" === r
                        ? ((e.target.input.value = ""), o("introduction"), t())
                        : "clear" === r
                          ? ((e.target.input.value = ""), t())
                          : ((e.target.input.value = ""),
                            n({
                              method: "error",
                              data: [
                                'command "'.concat(
                                  r,
                                  '" not found. Type "help" to see the list of commands.',
                                ),
                              ],
                            }))
                    : null;
                },
                autoComplete: "off",
                children: (0, r.jsx)(we.II, {
                  placeholder: "type 'help' to see the commands",
                  name: "input",
                  border: "none",
                  "data-testid": "terminal__input",
                  borderRadius: 0,
                  boxShadow: "none",
                  borderTop: "none",
                  _focus: { outline: "none" },
                }),
              }),
            ],
          });
        });
      Re.displayName = "Terminal";
      var Ue = Re,
        Be = t(76698);
      function Ye() {
        var e,
          n,
          t =
            ((e = [
              "\n  resize: none;\n  width: 100%;\n  height: 100%;\n  border: none;\n  flex-grow: 1;\n  display: block;\n  box-sizing: border-box;\n  background: ",
              ";\n  color: ",
              ";\n\n  &:focus {\n    outline: none;\n  }\n",
            ]),
            n || (n = e.slice(0)),
            Object.freeze(
              Object.defineProperties(e, { raw: { value: Object.freeze(n) } }),
            ));
        return (
          (Ye = function () {
            return t;
          }),
          t
        );
      }
      var He = _.default.textarea(
          Ye(),
          function (e) {
            return e.theme.colors.bg.dark;
          },
          function (e) {
            return e.theme.colors.text;
          },
        ),
        Ve = function (e) {
          var n = e.data,
            t = e.type,
            o = (0, Be.KW)({ data: n, type: t }),
            i = o.length > 64;
          return (0, r.jsx)(u.kC, {
            alignItems: "center",
            justifyContent: "center",
            p: 2,
            sx: {
              fontSize: i ? 14 : 70,
              fontWeight: i ? 400 : 700,
              height: "100%",
            },
            children: i ? (0, r.jsx)(He, { readOnly: !0, value: o }) : o,
          });
        };
      Ve.displayName = "SimpleTypeView";
      var We = Ve,
        Ke = t(76883),
        qe = function (e) {
          var n = e.data,
            t = e.type,
            o = (0, Ke.XM)(t).map(function (e) {
              return (
                (e.onSelect = function () {
                  return e.handler(n, t);
                }),
                (e.label = ".".concat(e.filetype)),
                e
              );
            });
          return (0, r.jsxs)(_e, {
            borderBottom: !0,
            children: [
              (0, r.jsx)(De, { mr: 2, children: "Output" }),
              o.length > 0 &&
                (0, r.jsx)(p, {
                  label: (0, r.jsxs)(u.kC, {
                    alignItems: "center",
                    children: ["Export ", (0, r.jsx)(ye.bTu, { size: "12px" })],
                  }),
                  items: o,
                  menuButtonProps: { bg: "bg", size: "sm" },
                }),
            ],
          });
        },
        Xe = t(67967);
      function $e(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
        return r;
      }
      function Qe(e, n) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, n) {
            var t =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != t) {
              var r,
                o,
                i = [],
                a = !0,
                u = !1;
              try {
                for (
                  t = t.call(e);
                  !(a = (r = t.next()).done) &&
                  (i.push(r.value), !n || i.length !== n);
                  a = !0
                );
              } catch (l) {
                (u = !0), (o = l);
              } finally {
                try {
                  a || null == t.return || t.return();
                } finally {
                  if (u) throw o;
                }
              }
              return i;
            }
          })(e, n) ||
          (function (e, n) {
            if (!e) return;
            if ("string" === typeof e) return $e(e, n);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === t && e.constructor && (t = e.constructor.name);
            if ("Map" === t || "Set" === t) return Array.from(t);
            if (
              "Arguments" === t ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
            )
              return $e(e, n);
          })(e, n) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      var en = (0, o.lazy)(
          function () {
            return Promise.all([t.e(4262), t.e(1470)]).then(t.bind(t, 53006));
          },
          { ssr: !1 },
        ),
        nn = (0, o.lazy)(
          function () {
            return Promise.all([t.e(9343), t.e(2064)]).then(t.bind(t, 82064));
          },
          { ssr: !1 },
        ),
        tn = (0, o.lazy)(
          function () {
            return Promise.all([
              t.e(9034),
              t.e(4262),
              t.e(3681),
              t.e(9538),
            ]).then(t.bind(t, 59538));
          },
          { ssr: !1 },
        ),
        rn = { height: "100%" },
        on = (0, o.memo)(function (e) {
          var n = e.dataId,
            t = Qe((0, Xe.Z)(n), 2),
            i = t[0],
            a = t[1],
            l = (0, o.useMemo)(
              function () {
                return (function (e) {
                  switch (e) {
                    case b.Z.DATASET:
                      return en;
                    case b.Z.TOPOJSON:
                    case b.Z.GEOJSON:
                      return tn;
                    case b.Z.ARRAY:
                    case b.Z.OBJECT:
                      return nn;
                    case b.Z.NUMBER:
                    case b.Z.STRING:
                    case b.Z.DATE:
                    case b.Z.BOOLEAN:
                    case b.Z.UNDEFINED:
                    case b.Z.NULL:
                      return We;
                    default:
                      return function () {
                        return null;
                      };
                  }
                })(a);
              },
              [a],
            );
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(qe, { data: i, type: a }),
              (0, r.jsx)(u.xu, {
                style: rn,
                children: (0, r.jsx)(o.Suspense, {
                  fallback: (0, r.jsx)("div", {}),
                  children: (0, r.jsx)(l, { data: i, type: a, dataId: n }),
                }),
              }),
            ],
          });
        });
      on.displayName = "DataView";
      var an = on,
        un = t(47936),
        ln = t(34734);
      function cn(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
        return r;
      }
      function sn(e, n) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, n) {
            var t =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != t) {
              var r,
                o,
                i = [],
                a = !0,
                u = !1;
              try {
                for (
                  t = t.call(e);
                  !(a = (r = t.next()).done) &&
                  (i.push(r.value), !n || i.length !== n);
                  a = !0
                );
              } catch (l) {
                (u = !0), (o = l);
              } finally {
                try {
                  a || null == t.return || t.return();
                } finally {
                  if (u) throw o;
                }
              }
              return i;
            }
          })(e, n) ||
          (function (e, n) {
            if (!e) return;
            if ("string" === typeof e) return cn(e, n);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === t && e.constructor && (t = e.constructor.name);
            if ("Map" === t || "Set" === t) return Array.from(t);
            if (
              "Arguments" === t ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
            )
              return cn(e, n);
          })(e, n) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      var fn = {
        default: function (e) {
          var n = e.id,
            t = e.sourceX,
            a = e.sourceY,
            u = e.targetX,
            l = e.targetY,
            c = e.sourcePosition,
            f = e.targetPosition,
            d = e.style,
            p = void 0 === d ? {} : d,
            m = e.arrowHeadType,
            v = e.markerEndId,
            h = e.label,
            b = (0, s.Z)(function (e) {
              return e.removeElements;
            }),
            g = sn(
              (0, i.Pp)({ sourceX: t, sourceY: a, targetX: u, targetY: l }),
              2,
            ),
            y = g[0],
            x = g[1],
            w = (0, i.OQ)({
              sourceX: t,
              sourceY: a,
              sourcePosition: c,
              targetX: u,
              targetY: l,
              targetPosition: f,
            }),
            j = (0, i.cf)(m, v),
            O = (0, o.useCallback)(
              function () {
                return b([{ id: n }]);
              },
              [n, b],
            );
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)("path", {
                id: n,
                style: p,
                className: "react-flow__edge-path",
                d: w,
                markerEnd: j,
              }),
              (0, r.jsx)("path", {
                strokeWidth: 16,
                fill: "none",
                strokeOpacity: 0,
                d: w,
              }),
              (0, r.jsxs)("g", {
                transform: "translate(".concat(y, " ").concat(x, ")"),
                className: "react-flow__edge-label",
                children: [
                  (0, r.jsx)("circle", {
                    width: 26,
                    cx: 0,
                    cy: 0,
                    r: 13,
                    className: "react-flow__edge-textbg",
                    onClick: O,
                  }),
                  (0, r.jsx)("text", {
                    x: 0,
                    y: 0,
                    className: "react-flow__edge-text",
                    dy: "0.3em",
                    children: h,
                  }),
                ],
              }),
            ],
          });
        },
      };
      function dn() {
        var e,
          n,
          t =
            ((e = [
              "\n  .react-flow__controls-button {\n    width: 12px;\n    height: 12px;\n    background: ",
              ";\n    border-bottom-color: rgba(226, 232, 240, 0.2);\n\n    &:last-child {\n      border: none;\n    }\n\n    path {\n      fill: ",
              ";\n    }\n  }\n\n  .react-flow__grid path {\n    fill: #777;\n  }\n\n  .react-flow__edge .react-flow__edge-path {\n    stroke-width: 2;\n  }\n\n  .react-flow__edge.selected .react-flow__edge-path,\n  .react-flow__edge:hover .react-flow__edge-path {\n    stroke: white;\n  }\n\n  .react-flow__edge {\n    .react-flow__edge-label {\n      cursor: pointer;\n    }\n\n    .react-flow__edge-text {\n      font-size: 20px;\n      text-anchor: middle;\n      fill: #fff;\n      pointer-events: none;\n    }\n  }\n\n  // valid edge\n  .react-flow__edge.animated {\n    .react-flow__edge-label {\n      display: none;\n    }\n\n    &.selected .react-flow__edge-label {\n      display: block;\n    }\n  }\n\n  .react-flow__edge {\n    .react-flow__edge-label circle {\n      fill: ",
              ";\n    }\n\n    .react-flow__edge-label:hover circle {\n      fill: ",
              ";\n    }\n  }\n",
            ]),
            n || (n = e.slice(0)),
            Object.freeze(
              Object.defineProperties(e, { raw: { value: Object.freeze(n) } }),
            ));
        return (
          (dn = function () {
            return t;
          }),
          t
        );
      }
      var pn = (0, _.default)(i.ZP)(
          dn(),
          function (e) {
            return e.theme.colors.bg.grey;
          },
          function (e) {
            return e.theme.colors.text;
          },
          function (e) {
            return e.theme.colors.violetLighten15;
          },
          function (e) {
            return e.theme.colors.violetLighten30;
          },
        ),
        mn = function () {
          var e = (0, a.Fg)(),
            n = be(),
            t = (0, s.Z)(function (e) {
              return e.nodes;
            }),
            u = (0, s.Z)(function (e) {
              return e.edges;
            }),
            l = (0, s.Z)(function (e) {
              return e.onNodesChange;
            }),
            c = (0, s.Z)(function (e) {
              return e.onEdgesChange;
            }),
            f = (0, s.Z)(function (e) {
              return e.addEdge;
            }),
            d = (0, s.Z)(function (e) {
              return e.setFlowInstance;
            }),
            p = (0, s.Z)(function (e) {
              return e.selectNode;
            }),
            m = (0, s.Z)(function (e) {
              return e.setModal;
            }),
            v = (0, o.useCallback)(
              function (e) {
                var n = e.nodes;
                return n && 0 !== n.length
                  ? 1 === n.length && (0, i.UG)(n[0])
                    ? p(n[0])
                    : void 0
                  : p(null);
              },
              [p],
            ),
            h = (0, o.useCallback)(
              function (e) {
                d(e);
              },
              [d],
            ),
            b = (0, o.useCallback)(
              function (e) {
                e.preventDefault(), e.stopPropagation();
                var n = (0, un.rc)() || { top: 100, left: 20 },
                  t = n.top,
                  r = n.left;
                m({
                  type: "library",
                  data: {
                    position: { x: e.pageX - r - 100, y: e.pageY - t - 20 },
                  },
                });
              },
              [m],
            ),
            g = (0, o.useMemo)(
              function () {
                return { background: e.colors.bg.dark, height: 100 };
              },
              [e],
            );
          return (0, r.jsx)(o.Suspense, {
            fallback: (0, r.jsx)("div", {}),
            children: (0, r.jsxs)(pn, {
              nodes: t,
              edges: u,
              onNodesChange: l,
              onEdgesChange: c,
              onConnect: f,
              onSelectionChange: v,
              nodeTypes: ae,
              edgeTypes: fn,
              onInit: h,
              onlyRenderVisibleElements: !1,
              minZoom: 0.5,
              maxZoom: 2,
              onPaneContextMenu: b,
              id: ln.wY,
              children: [
                (0, r.jsx)(i.ZX, {
                  showInteractive: !1,
                  children: (0, r.jsx)(i.Bw, {
                    id: "react-flow__controls-layout",
                    onClick: n,
                    title: "layout nodes",
                    "aria-label": "layout nodes",
                    children: (0, r.jsx)(ye.aCJ, {}),
                  }),
                }),
                (0, r.jsx)(i.a9, {
                  maskColor: "rgba(34,33,56,0.7)",
                  style: g,
                  nodeColor: e.colors.bg.light,
                }),
                (0, r.jsx)(i.Aq, { color: "#343C43" }),
              ],
            }),
          });
        };
      mn.displayName = "Flow";
      var vn = mn;
      function hn(e, n) {
        return (
          n || (n = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(n) } }),
          )
        );
      }
      function bn() {
        var e = hn(["\n  flex: 1;\n  width: 100%;\n  position: relative;\n"]);
        return (
          (bn = function () {
            return e;
          }),
          e
        );
      }
      function gn() {
        var e = hn([
          "\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  z-index: 999;\n  position: absolute;\n",
        ]);
        return (
          (gn = function () {
            return e;
          }),
          e
        );
      }
      var yn = (0, _.default)(u.xu)(bn()),
        xn = (0, _.default)(u.xu)(gn()),
        wn = function () {
          var e = (0, s.Z)(function (e) {
            return e.dropDownOpen;
          });
          return (0, r.jsx)(yn, {
            bg: "bg.dark",
            className: "flowrapper",
            children: (0, r.jsxs)(u.xu, {
              width: "100%",
              height: "100%",
              children: [e && (0, r.jsx)(xn, {}), (0, r.jsx)(vn, {})],
            }),
          });
        };
      wn.displayName = "FlowView";
      var jn = wn,
        On = t(34051),
        Sn = t.n(On),
        An = t(32512),
        En = t(2292);
      function Zn(e, n) {
        if (null == e) return {};
        var t,
          r,
          o = (function (e, n) {
            if (null == e) return {};
            var t,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (t = i[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
            return o;
          })(e, n);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (t = i[r]),
              n.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (o[t] = e[t]));
        }
        return o;
      }
      var Tn = function (e) {
          var n = e.children,
            t =
              (e.maxWidth,
              Zn(e, ["children", "maxWidth"]),
              (0, s.Z)(function (e) {
                return e.setModal;
              }));
          return (0, r.jsxs)(En.u_, {
            scrollBehavior: "inside",
            size: "6xl",
            isOpen: !0,
            onClose: function () {
              return t(null);
            },
            children: [
              (0, r.jsx)(En.ZA, {}),
              (0, r.jsxs)(En.hz, {
                bg: "bg.grey",
                children: [
                  (0, r.jsx)(En.ol, {}),
                  (0, r.jsx)(En.fe, { children: n }),
                ],
              }),
            ],
          });
        },
        kn = t(19582),
        Pn = t(84004);
      function Cn(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
        return r;
      }
      function Nn(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      function Dn(e, n) {
        return (
          n || (n = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(n) } }),
          )
        );
      }
      function zn(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return Cn(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (function (e, n) {
            if (!e) return;
            if ("string" === typeof e) return Cn(e, n);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === t && e.constructor && (t = e.constructor.name);
            if ("Map" === t || "Set" === t) return Array.from(t);
            if (
              "Arguments" === t ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
            )
              return Cn(e, n);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      function In() {
        var e = Dn([
          "\n  padding-left: 0;\n  cursor: pointer;\n  user-select: none;\n  display: flex;\n  color: ",
          ";\n\n  &:hover {\n    color: ",
          ";\n  }\n",
        ]);
        return (
          (In = function () {
            return e;
          }),
          e
        );
      }
      function _n() {
        var e = Dn([
          "\n  overflow: auto;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-auto-rows: 1fr;\n\n  grid-column-gap: 15px;\n  grid-row-gap: 15px;\n",
        ]);
        return (
          (_n = function () {
            return e;
          }),
          e
        );
      }
      function Fn() {
        var e = Dn([
          "\n  cursor: pointer;\n  user-select: none;\n  border: 1px solid ",
          ";\n  color: ",
          ";\n  border-radius: 4px;\n  transform: scale(1);\n  transition: transform 0.1s;\n  display: flex;\n  flex-direction: column;\n\n  &:hover {\n    color: ",
          ";\n    border-color: ",
          ";\n    transform: scale(1.03);\n  }\n",
        ]);
        return (
          (Fn = function () {
            return e;
          }),
          e
        );
      }
      function Ln() {
        var e = Dn([
          "\n  font-size: 12px;\n  margin-top: auto;\n  padding-top: 10px;\n",
        ]);
        return (
          (Ln = function () {
            return e;
          }),
          e
        );
      }
      function Gn() {
        var e = Dn(["\n  width: 100%;\n"]);
        return (
          (Gn = function () {
            return e;
          }),
          e
        );
      }
      var Jn = (0, _.default)(_e)(
          In(),
          function (e) {
            return e.isActive ? e.theme.colors.primary : e.theme.colors.text;
          },
          function (e) {
            return e.isActive ? e.theme.colors.primary : e.theme.colors.gray;
          },
        ),
        Mn = (0, _.default)(u.xu)(_n()),
        Rn = (0, _.default)(u.xu)(
          Fn(),
          function (e) {
            return e.theme.colors.bg.light;
          },
          function (e) {
            return e.theme.colors.text;
          },
          function (e) {
            return e.theme.colors.text;
          },
          function (e) {
            return e.theme.colors.bg.lighter;
          },
        ),
        Un = (0, _.default)(u.xu)(Ln()),
        Bn = (0, _.default)(we.II)(Gn()),
        Yn = Object.keys(b.Z).length,
        Hn = function (e) {
          if (!e) return "-";
          var n = e.map(b.Y);
          return n.length === Yn ? "All types" : n.join(", ");
        },
        Vn = function (e) {
          var n = e.title,
            t = e.description,
            o = e.data,
            i = e.Icon,
            a = e.position,
            l = e.input,
            c = e.output,
            f = e.type,
            d = (0, s.Z)(function (e) {
              return e.addNode;
            }),
            p = (0, s.Z)(function (e) {
              return e.setModal;
            });
          return (0, r.jsxs)(Rn, {
            bg: "bg.light",
            p: "10px",
            onClick: function () {
              d(
                (function (e) {
                  for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                      r = Object.keys(t);
                    "function" === typeof Object.getOwnPropertySymbols &&
                      (r = r.concat(
                        Object.getOwnPropertySymbols(t).filter(function (e) {
                          return Object.getOwnPropertyDescriptor(t, e)
                            .enumerable;
                        }),
                      )),
                      r.forEach(function (n) {
                        Nn(e, n, t[n]);
                      });
                  }
                  return e;
                })({}, o, { position: a }),
              ),
                p(null);
            },
            "data-testid": "blockitem-".concat(f),
            className: "blockitem",
            children: [
              (0, r.jsxs)(u.xu, {
                fontSize: "xl",
                fontWeight: "bold",
                mb: 2,
                children: [i && (0, r.jsx)(i, {}), " ", n],
              }),
              (0, r.jsx)(u.xu, { color: "silverDarken15", children: t }),
              (0, r.jsxs)(Un, {
                color: "silverDarken30",
                children: [
                  (0, r.jsxs)(u.xu, { children: ["Input: ", Hn(l)] }),
                  (0, r.jsxs)(u.xu, { children: ["Output: ", Hn(c)] }),
                ],
              }),
            ],
          });
        },
        Wn = {
          input: xe.PV2,
          visualization: xe.k44,
          output: xe.LHo,
          transform: xe.EFt,
          "geo data": xe.Sw5,
          misc: xe.zbS,
        };
      var Kn = function (e) {
          var n = e.data,
            t = void 0 === n ? {} : n,
            i = (0, o.useState)(null),
            a = i[0],
            l = i[1],
            c = (0, o.useState)(""),
            s = c[0],
            f = c[1],
            d = (0, o.useRef)();
          (0, o.useEffect)(function () {
            d.current.focus();
          }, []);
          var p = ie.filter(function (e) {
              var n,
                t,
                r = ""
                  .concat(
                    null === (n = e.data) || void 0 === n ? void 0 : n.label,
                    " ",
                  )
                  .concat(e.description)
                  .toLowerCase(),
                o =
                  !a ||
                  (null === (t = e.data) || void 0 === t ? void 0 : t.group) ===
                    a,
                i = !s || r.includes(s);
              return o && i;
            }),
            m = zn(
              new Set(
                ie.map(function (e) {
                  var n;
                  return null === (n = e.data) || void 0 === n
                    ? void 0
                    : n.group;
                }),
              ),
            ),
            v = (0, kn.Xx)(p, function (e) {
              var n;
              return null === (n = e.data) || void 0 === n ? void 0 : n.group;
            }),
            h = m.map(function (e) {
              var n = Wn[e];
              return (0, r.jsxs)(
                Jn,
                {
                  isActive: a === e,
                  onClick: function () {
                    return (function (e) {
                      return l(a === e ? null : e);
                    })(e);
                  },
                  "data-testid": "groupfilter-".concat((0, Pn.Z)(e)),
                  children: [
                    n &&
                      (0, r.jsx)(u.xu, { mr: 2, children: (0, r.jsx)(n, {}) }),
                    (0, r.jsx)(De, { children: e }),
                  ],
                },
                e,
              );
            });
          return (0, r.jsxs)(u.kC, {
            children: [
              (0, r.jsxs)(u.xu, {
                flex: "180px 0 0",
                py: 3,
                pr: 2,
                children: [
                  (0, r.jsx)(u.xu, {
                    fontSize: "2xl",
                    fontWeight: "bold",
                    mb: 3,
                    children: "Block Library",
                  }),
                  (0, r.jsx)(u.xu, {
                    mb: 3,
                    children: (0, r.jsx)(Bn, {
                      value: s,
                      onChange: function (e) {
                        f(e.target.value.toLowerCase()), l(null);
                      },
                      placeholder: "Search...",
                      ref: d,
                      "data-testid": "search",
                    }),
                  }),
                  h,
                ],
              }),
              (0, r.jsx)(u.xu, {
                height: "100%",
                children: v.map(function (e) {
                  return (0, r.jsxs)(
                    o.Fragment,
                    {
                      children: [
                        (0, r.jsx)(u.kC, {
                          pt: 4,
                          pb: 2,
                          px: 3,
                          className: "blockgroup",
                          "data-testid": "blockgroup-".concat((0, Pn.Z)(e[0])),
                          children: (0, r.jsx)(De, { children: e[0] }),
                        }),
                        (0, r.jsx)(Mn, {
                          p: 3,
                          children: e[1].map(function (e) {
                            return (0, r.jsx)(
                              Vn,
                              {
                                type: e.type,
                                title: e.data.label,
                                description: e.description,
                                data: e,
                                position: t.position,
                                input: e.input,
                                output: e.output,
                              },
                              e.type,
                            );
                          }),
                        }),
                      ],
                    },
                    e[0],
                  );
                }),
              }),
            ],
          });
        },
        qn = function () {
          var e = (0, s.Z)(function (e) {
            return e.modal;
          });
          return e
            ? (0, r.jsx)(Tn, {
                maxWidth: "960px",
                "data-testid": "modal-library",
                children: (0, r.jsx)(Kn, { data: e }),
              })
            : null;
        },
        Xn = t(49218);
      var $n = function () {
          var e = h(),
            n = e.save,
            t = e.clear;
          (0, Xn.y1)(
            "ctrl+s, command+s",
            function (e) {
              e.preventDefault(), n();
            },
            [n],
          ),
            (0, Xn.y1)(
              "ctrl+k, command+k",
              function (e) {
                e.preventDefault(), t();
              },
              [t],
            );
        },
        Qn = t(28518);
      function et(e, n, t, r, o, i, a) {
        try {
          var u = e[i](a),
            l = u.value;
        } catch (c) {
          return void t(c);
        }
        u.done ? n(l) : Promise.resolve(l).then(r, o);
      }
      function nt(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      function tt(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(t).filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              }),
            )),
            r.forEach(function (n) {
              nt(e, n, t[n]);
            });
        }
        return e;
      }
      var rt = function (e) {
        var n = e.children,
          t = (0, s.Z)(function (e) {
            return e.addNode;
          }),
          o = (0, s.Z)(function (e) {
            return e.addLogs;
          });
        $n();
        var i = (function () {
          var e,
            n =
              ((e = Sn().mark(function e(n, r) {
                var i, a, u, l, c, s;
                return Sn().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (i = (0, un.rc)()),
                          (a = {
                            x:
                              r.clientX -
                              (null === i || void 0 === i ? void 0 : i.left),
                            y:
                              r.clientY -
                              (null === i || void 0 === i ? void 0 : i.top),
                          }),
                          (u = n[0].name),
                          (e.next = 5),
                          (0, Qn.P4)(n[0])
                        );
                      case 5:
                        if (((l = e.sent), (c = l.error), (s = l.data), !c)) {
                          e.next = 10;
                          break;
                        }
                        return e.abrupt(
                          "return",
                          o({ method: "error", data: [c] }),
                        );
                      case 10:
                        return e.abrupt(
                          "return",
                          t({
                            type: "file",
                            position: a,
                            data: {
                              group: "input",
                              label: "File",
                              fileName: u,
                              current: s,
                            },
                          }),
                        );
                      case 11:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })),
              function () {
                var n = this,
                  t = arguments;
                return new Promise(function (r, o) {
                  var i = e.apply(n, t);
                  function a(e) {
                    et(i, r, o, a, u, "next", e);
                  }
                  function u(e) {
                    et(i, r, o, a, u, "throw", e);
                  }
                  a(void 0);
                });
              });
          return function (e, t) {
            return n.apply(this, arguments);
          };
        })();
        return (0, r.jsx)(An.ZP, {
          noClick: !0,
          onDropAccepted: i,
          children: function (e) {
            var t = e.getRootProps,
              o = e.getInputProps,
              i = e.isDragActive;
            return (0, r.jsxs)(
              u.kC,
              tt(
                {
                  flexDirection: "column",
                  height: "100%",
                  bg: "bg.dark",
                  flexGrow: 1,
                  opacity: i ? 0.9 : 1,
                },
                t(),
                {
                  children: [
                    (0, r.jsx)("input", tt({}, o())),
                    (0, r.jsx)(qn, {}),
                    n,
                  ],
                },
              ),
            );
          },
        });
      };
      function ot() {
        var e,
          n,
          t =
            ((e = [
              "\n  position: absolute;\n  z-index: 100;\n  top: 10px;\n  left: 10px;\n  font-size: 12px;\n  border-radius: 20px;\n  border: 1px solid ",
              ";\n  background: ",
              ";\n  color: ",
              ";\n",
            ]),
            n || (n = e.slice(0)),
            Object.freeze(
              Object.defineProperties(e, { raw: { value: Object.freeze(n) } }),
            ));
        return (
          (ot = function () {
            return t;
          }),
          t
        );
      }
      var it = (0, _.default)(c.zx)(
        ot(),
        function (e) {
          return e.theme.colors.violetLighten30;
        },
        function (e) {
          return e.theme.colors.bg.dark;
        },
        function (e) {
          return e.theme.colors.violetLighten85;
        },
      );
      var at = function () {
          var e = (0, s.Z)(function (e) {
            return e.setModal;
          });
          return (0, r.jsx)(it, {
            "data-testid": "addblock",
            onClick: function () {
              return e({ type: "library" });
            },
            children: "+ block",
          });
        },
        ut = {
          borderTopColor: "bg.light",
          borderTopWidth: "1px",
          borderTopStyle: "solid",
        },
        lt = {
          borderLeftColor: "bg.light",
          borderLeftWidth: "1px",
          borderLeftStyle: "solid",
          maxWidth: 500,
        },
        ct = {
          flow: [
            {
              elements: [],
              id: null,
              title: "demo flow",
              is_public: !1,
              created_at: new Date(),
              updated_at: new Date(),
              demoMode: !0,
            },
          ],
        },
        st = function (e) {
          var n, t;
          return null ===
            (n = e.nodes.find(function (n) {
              var t;
              return (
                n.id ===
                (null === (t = e.selectedNode) || void 0 === t ? void 0 : t.id)
              );
            })) ||
            void 0 === n ||
            null === (t = n.data) ||
            void 0 === t
            ? void 0
            : t.current;
        };
      var ft = function (e) {
        var n = e.data,
          t = void 0 === n ? ct : n,
          l = e.demoMode,
          c = void 0 !== l && l,
          f = e.loading,
          d = void 0 !== f && f,
          p = e.onFlowSave,
          m = void 0 === p ? function () {} : p,
          v = e.onFlowTitleChange,
          h = void 0 === v ? function () {} : v,
          b = (0, s.Z)(st),
          g = (0, s.Z)(function (e) {
            return e.flowTransform;
          }),
          y = (0, s.Z)(function (e) {
            return e.setFlowData;
          }),
          x = (0, s.Z)(function (e) {
            return e.setElements;
          }),
          w = (0, s.Z)(function (e) {
            return e.clearLogs;
          }),
          j = (0, s.Z)(function (e) {
            return e.addLogs;
          }),
          O = (0, s.Z)(function (e) {
            return e.setDemoMode;
          }),
          S = (0, s.Z)(function (e) {
            return e.setOnFlowSaveCallback;
          }),
          A = (0, i._K)(),
          E = A.setViewport,
          Z = A.viewportInitialized;
        return (
          (0, o.useEffect)(
            function () {
              return function () {
                x([]), w();
              };
            },
            [x, w],
          ),
          (0, o.useEffect)(
            function () {
              var e;
              (null === t || void 0 === t ? void 0 : t.flow) &&
                Z &&
                y(null === (e = t.flow) || void 0 === e ? void 0 : e[0]);
            },
            [t, Z, y],
          ),
          (0, o.useEffect)(
            function () {
              g && E(g);
            },
            [g, E],
          ),
          (0, o.useEffect)(
            function () {
              m && S(m);
            },
            [m, S],
          ),
          (0, o.useEffect)(
            function () {
              O(c),
                c &&
                  j({
                    method: "info",
                    data: [
                      "This is just a demo! To use all features login or create an account.",
                    ],
                  });
            },
            [c, j, O],
          ),
          (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsx)(a.ZL, {}),
              (0, r.jsx)(u.kC, {
                position: "relative",
                overflow: "hidden",
                height: "100%",
                children: (0, r.jsxs)(u.kC, {
                  flexDirection: "column",
                  flexGrow: 1,
                  height: "100%",
                  children: [
                    (0, r.jsx)(Pe, { onFlowTitleChange: h }),
                    (0, r.jsxs)(u.kC, {
                      height: "65%",
                      resize: "vertical",
                      overflow: "auto",
                      flexShrink: 0,
                      position: "relative",
                      minHeight: "150px",
                      children: [
                        (0, r.jsx)(at, {}),
                        (0, r.jsx)(rt, { children: !d && (0, r.jsx)(jn, {}) }),
                      ],
                    }),
                    (0, r.jsxs)(u.kC, {
                      flexGrow: 1,
                      bg: "bg.dark",
                      sx: ut,
                      height: "100%",
                      children: [
                        (0, r.jsx)(u.kC, {
                          flexDirection: "column",
                          flexGrow: 1,
                          width: "100%",
                          height: "100%",
                          bg: "bg.dark",
                          children: (0, r.jsx)(an, { dataId: b }),
                        }),
                        (0, r.jsxs)(u.kC, {
                          height: "100%",
                          width: "40%",
                          flexDirection: "column",
                          sx: lt,
                          children: [
                            (0, r.jsx)(_e, {
                              borderBottom: !0,
                              children: (0, r.jsx)(De, { children: "Logs" }),
                            }),
                            (0, r.jsx)(Ue, {}),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      };
    },
    73552: function (e, n, t) {
      t.d(n, {
        LY: function () {
          return b;
        },
        br: function () {
          return h;
        },
        ZP: function () {
          return x;
        },
      });
      var r = t(85893),
        o = t(95934),
        i = (t(67294), t(68527));
      function a() {
        var e,
          n,
          t =
            ((e = [
              "\n  align-items: center;\n  user-select: none;\n  margin-right: 10px;\n",
            ]),
            n || (n = e.slice(0)),
            Object.freeze(
              Object.defineProperties(e, { raw: { value: Object.freeze(n) } }),
            ));
        return (
          (a = function () {
            return t;
          }),
          t
        );
      }
      var u = (0, o.default)(i.kC)(a()),
        l = function (e) {
          var n = e.logoStyle,
            t = void 0 === n ? { width: 25 } : n;
          return (0, r.jsx)(u, {
            children: (0, r.jsxs)("svg", {
              style: t,
              viewBox: "0 0 300 209",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              children: [
                (0, r.jsx)("path", {
                  d: "M109 0H1C0.447715 0 0 0.447715 0 1V64C0 64.5523 0.447715 65 1 65H109C109.552 65 110 64.5523 110 64V1C110 0.447715 109.552 0 109 0Z",
                  fill: "white",
                }),
                (0, r.jsx)("path", {
                  d: "M110.5 32.5C123.089 30.923 134.255 35.756 144 47C157 62 153.573 63.798 166 78C175.333 88.667 183.5 93.833 190.5 93.5M156.5 176.5C182.312 177.658 202.478 174.158 217 166C231.522 157.842 241.022 144.675 245.5 126.5",
                  stroke: "white",
                  strokeWidth: "10",
                  strokeLinecap: "square",
                }),
                (0, r.jsx)("path", {
                  d: "M155 144H47C46.4477 144 46 144.448 46 145V208C46 208.552 46.4477 209 47 209H155C155.552 209 156 208.552 156 208V145C156 144.448 155.552 144 155 144Z",
                  fill: "white",
                }),
                (0, r.jsx)("path", {
                  d: "M299 61H191C190.448 61 190 61.4477 190 62V125C190 125.552 190.448 126 191 126H299C299.552 126 300 125.552 300 125V62C300 61.4477 299.552 61 299 61Z",
                  fill: "#FF0072",
                }),
              ],
            }),
          });
        };
      function c(e, n) {
        return (
          n || (n = e.slice(0)),
          Object.freeze(
            Object.defineProperties(e, { raw: { value: Object.freeze(n) } }),
          )
        );
      }
      function s() {
        var e = c([
          "\n  border-bottom: 1px solid ",
          ";\n  align-items: center;\n  flex-shrink: 0;\n  width: 100%;\n  background: ",
          ";\n  padding: 12px 16px;\n",
        ]);
        return (
          (s = function () {
            return e;
          }),
          e
        );
      }
      function f() {
        var e = c(["\n  width: 100%;\n"]);
        return (
          (f = function () {
            return e;
          }),
          e
        );
      }
      function d() {
        var e = c([
          "\n  color: ",
          ";\n  font-size: 11px;\n  margin-right: 1em;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  cursor: pointer;\n  user-select: none;\n  text-align: center;\n\n  &:hover {\n    color: ",
          ";\n  }\n",
        ]);
        return (
          (d = function () {
            return e;
          }),
          e
        );
      }
      function p() {
        var e = c([
          "\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  &:hover {\n    opacity: 0.75;\n  }\n",
        ]);
        return (
          (p = function () {
            return e;
          }),
          e
        );
      }
      function m() {
        var e = c([
          "\n  font-weight: 700;\n  font-size: 14px;\n  color: ",
          ";\n",
        ]);
        return (
          (m = function () {
            return e;
          }),
          e
        );
      }
      var v = (0, o.default)(i.kC)(
          s(),
          function (e) {
            var n, t;
            return null === (n = e.theme) ||
              void 0 === n ||
              null === (t = n.colors) ||
              void 0 === t
              ? void 0
              : t.bg.light;
          },
          function (e) {
            var n, t;
            return null === (n = e.theme) ||
              void 0 === n ||
              null === (t = n.colors) ||
              void 0 === t
              ? void 0
              : t.bg.dark;
          },
        ),
        h = (0, o.default)(i.kC)(f()),
        b = (0, o.default)(i.xu)(
          d(),
          function (e) {
            var n, t;
            return null === (n = e.theme) ||
              void 0 === n ||
              null === (t = n.colors) ||
              void 0 === t
              ? void 0
              : t.text;
          },
          function (e) {
            var n, t;
            return null === (n = e.theme) ||
              void 0 === n ||
              null === (t = n.colors) ||
              void 0 === t
              ? void 0
              : t.primary;
          },
        ),
        g = o.default.div(p()),
        y = o.default.div(m(), function (e) {
          var n, t;
          return null === (n = e.theme) ||
            void 0 === n ||
            null === (t = n.colors) ||
            void 0 === t
            ? void 0
            : t.silver;
        });
      var x = function (e) {
        var n = e.children,
          t = e.showDatablocksLabel,
          o = void 0 !== t && t;
        return (0, r.jsxs)(v, {
          "data-testid": "header",
          children: [
            (0, r.jsx)("a", {
              href: "/",
              children: (0, r.jsxs)(g, {
                children: [
                  (0, r.jsx)(l, {}),
                  o && (0, r.jsx)(y, { children: "datablocks" }),
                ],
              }),
            }),
            n,
          ],
        });
      };
    },
    24750: function (e, n, t) {
      t.d(n, {
        Y: function () {
          return o;
        },
      });
      var r = {
          DATASET: "DATASET",
          ARRAY: "ARRAY",
          OBJECT: "OBJECT",
          GEOJSON: "GEOJSON",
          TOPOJSON: "TOPOJSON",
          STRING: "STRING",
          NUMBER: "NUMBER",
          DATE: "DATE",
          BOOLEAN: "BOOLEAN",
          UNDEFINED: "UNDEFINED",
          NULL: "NULL",
          UNKNOWN: "UNKNOWN",
        },
        o = function (e) {
          if (!r[e]) return e;
          var n = r[e];
          return "".concat(n[0]).concat(n.substr(1, n.length).toLowerCase());
        };
      n.Z = r;
    },
    34734: function (e, n, t) {
      t.d(n, {
        wY: function () {
          return o;
        },
      });
      var r = t(24750),
        o = "reactflow";
      r.Z;
    },
    28518: function (e, n, t) {
      t.d(n, {
        Q9: function () {
          return s;
        },
        Sk: function () {
          return d;
        },
        P4: function () {
          return x;
        },
        nz: function () {
          return E;
        },
        en: function () {
          return C;
        },
      });
      var r = t(57460),
        o = t.n(r);
      function i(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      function a(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(t).filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              }),
            )),
            r.forEach(function (n) {
              i(e, n, t[n]);
            });
        }
        return e;
      }
      var u = { header: !0, dynamicTyping: !0 };
      function l(e, n) {
        var t,
          r = a({}, u, n),
          i = o().parse(e, r);
        return (
          null === i || void 0 === i || null === (t = i.data) || void 0 === t
            ? void 0
            : t.length
        )
          ? { data: i.data, error: null }
          : { error: "Parse Error." };
      }
      var c = { quotes: !0 };
      function s(e) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          t = a({}, c, n),
          r = o().unparse(e, t);
        return r;
      }
      function f(e) {
        try {
          return { data: JSON.parse(e), error: null };
        } catch (n) {
          return { error: n };
        }
      }
      function d(e) {
        return JSON.stringify(e, null, 2);
      }
      var p = t(34051),
        m = t.n(p),
        v = [
          { id: "json", mime: "application/json", ext: [".json"], parser: f },
          { id: "csv", mime: "text/csv", ext: [".csv"], parser: l },
          {
            id: "tsv",
            mime: "text/tab-separated-values",
            ext: [".tsv"],
            parser: l,
          },
          {
            id: "geojson",
            mime: "application/geo+json",
            ext: [".geojson", ".json"],
            parser: f,
          },
          {
            id: "topojson",
            mime: "application/json",
            ext: [".json", ".topojson"],
            parser: f,
          },
        ];
      function h(e, n, t, r, o, i, a) {
        try {
          var u = e[i](a),
            l = u.value;
        } catch (c) {
          return void t(c);
        }
        u.done ? n(l) : Promise.resolve(l).then(r, o);
      }
      function b(e) {
        return function () {
          var n = this,
            t = arguments;
          return new Promise(function (r, o) {
            var i = e.apply(n, t);
            function a(e) {
              h(i, r, o, a, u, "next", e);
            }
            function u(e) {
              h(i, r, o, a, u, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function g(e) {
        var n = e.type,
          t = e.name.match(/\.[0-9a-z]+$/i)[0],
          r = v.find(function (e) {
            return e.mime === n;
          }),
          o = v.find(function (e) {
            return e.ext.includes(t);
          });
        return r || o ? (r || o).parser : null;
      }
      function y(e) {
        return new Promise(function (n, t) {
          var r = new FileReader();
          (r.onload = function (e) {
            return n(e.target.result);
          }),
            (r.onerror = function (e) {
              return t(e);
            }),
            r.readAsText(e);
        });
      }
      function x(e) {
        return w.apply(this, arguments);
      }
      function w() {
        return (w = b(
          m().mark(function e(n) {
            var t, r, o;
            return m().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if ((t = g(n))) {
                        e.next = 3;
                        break;
                      }
                      return e.abrupt("return", {
                        error: "".concat(n.name, ": File type not supported."),
                      });
                    case 3:
                      return (e.prev = 3), (e.next = 6), y(n);
                    case 6:
                      return (r = e.sent), (e.next = 9), t(r);
                    case 9:
                      return (o = e.sent), e.abrupt("return", o);
                    case 13:
                      return (
                        (e.prev = 13),
                        (e.t0 = e.catch(3)),
                        console.log(e.t0),
                        e.abrupt("return", {
                          error: "Error while parsing file: ".concat(n.name),
                        })
                      );
                    case 17:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[3, 13]],
            );
          }),
        )).apply(this, arguments);
      }
      function j(e, n, t, r, o, i, a) {
        try {
          var u = e[i](a),
            l = u.value;
        } catch (c) {
          return void t(c);
        }
        u.done ? n(l) : Promise.resolve(l).then(r, o);
      }
      function O(e) {
        return function () {
          var n = this,
            t = arguments;
          return new Promise(function (r, o) {
            var i = e.apply(n, t);
            function a(e) {
              j(i, r, o, a, u, "next", e);
            }
            function u(e) {
              j(i, r, o, a, u, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function S(e) {
        return { data: "".concat(e), error: null };
      }
      function A(e) {
        return "json" === e ? f : "csv" === e ? l : "text" === e ? S : null;
      }
      function E(e, n) {
        return Z.apply(this, arguments);
      }
      function Z() {
        return (Z = O(
          m().mark(function e(n, t) {
            var r, o;
            return m().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if ((r = A(t))) {
                        e.next = 3;
                        break;
                      }
                      return e.abrupt("return", {
                        error: "Couldn't parse text",
                      });
                    case 3:
                      return (e.prev = 3), (e.next = 6), r(n);
                    case 6:
                      return (o = e.sent), e.abrupt("return", o);
                    case 10:
                      return (
                        (e.prev = 10),
                        (e.t0 = e.catch(3)),
                        console.log(e.t0),
                        e.abrupt("return", {
                          error: "Error while parsing text",
                        })
                      );
                    case 14:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[3, 10]],
            );
          }),
        )).apply(this, arguments);
      }
      function T(e, n, t, r, o, i, a) {
        try {
          var u = e[i](a),
            l = u.value;
        } catch (c) {
          return void t(c);
        }
        u.done ? n(l) : Promise.resolve(l).then(r, o);
      }
      function k(e) {
        return function () {
          var n = this,
            t = arguments;
          return new Promise(function (r, o) {
            var i = e.apply(n, t);
            function a(e) {
              T(i, r, o, a, u, "next", e);
            }
            function u(e) {
              T(i, r, o, a, u, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function P(e) {
        var n;
        return null ===
          (n = v.find(function (n) {
            return e.includes(n.mime);
          })) || void 0 === n
          ? void 0
          : n.parser;
      }
      function C(e) {
        return N.apply(this, arguments);
      }
      function N() {
        return (N = k(
          m().mark(function e(n) {
            var t, r, o, i;
            return m().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.prev = 0), (e.next = 3), fetch(n);
                    case 3:
                      if (
                        ((t = e.sent),
                        (r = t.headers.get("Content-Type")),
                        (o = P(r)))
                      ) {
                        e.next = 8;
                        break;
                      }
                      return e.abrupt("return", {
                        error: "File type not supported: ".concat(r),
                      });
                    case 8:
                      return (e.next = 10), t.text();
                    case 10:
                      return (i = e.sent), e.abrupt("return", o(i));
                    case 14:
                      return (
                        (e.prev = 14),
                        (e.t0 = e.catch(0)),
                        console.log(e.t0),
                        e.abrupt("return", {
                          error: "Error while fetching url: ".concat(n),
                        })
                      );
                    case 18:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 14]],
            );
          }),
        )).apply(this, arguments);
      }
    },
    44715: function (e, n, t) {
      var r = t(53416),
        o = t(76698);
      function i(e, n) {
        for (var t = 0; t < n.length; t++) {
          var r = n[t];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var a = new ((function () {
        function e() {
          !(function (e, n) {
            if (!(e instanceof n))
              throw new TypeError("Cannot call a class as a function");
          })(this, e),
            (this.store = new Map());
        }
        var n, t, a;
        return (
          (n = e),
          (t = [
            {
              key: "set",
              value: function (e, n) {
                var t = (0, r.x0)(),
                  i = n || (0, o.Em)(e),
                  a = (0, o.sR)(i)(e);
                return this.store.set(t, { data: a, type: i }), t;
              },
            },
            {
              key: "get",
              value: function (e) {
                return this.store.get(e);
              },
            },
            {
              key: "remove",
              value: function (e) {
                return this.store.delete(e);
              },
            },
          ]) && i(n.prototype, t),
          a && i(n, a),
          e
        );
      })())();
      n.Z = a;
    },
    70910: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return f;
        },
      });
      var r = "use-execution-iframe",
        o = "data-dependency",
        i = "undefined" !== typeof document ? document : null;
      function a() {
        if (!i) return null;
        var e = i.getElementById(r);
        if (e) return e;
        var n = i.createElement("iframe");
        return (
          (n.style.display = "none"),
          (n.id = r),
          document.body.appendChild(n),
          n
        );
      }
      function u(e) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          t = e.contentWindow.document,
          r = t.querySelectorAll("[".concat(o, "]"));
        [].forEach.call(r, function (e) {
          var r = e.getAttribute(o);
          n.includes(r) || t.body.removeChild(e);
        });
      }
      function l(e, n) {
        if (!(e instanceof n))
          throw new TypeError("Cannot call a class as a function");
      }
      function c(e, n) {
        for (var t = 0; t < n.length; t++) {
          var r = n[t];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      var s = (function () {
          function e() {
            var n =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : ["lodash"];
            l(this, e), (this.iFrame = a()), this.updateDependencies(n);
          }
          var n, t, r;
          return (
            (n = e),
            (t = [
              {
                key: "updateDependencies",
                value: function (e) {
                  var n = this;
                  (null === e || void 0 === e ? void 0 : e.length) ||
                    u(this.iFrame, e),
                    e.forEach(function (e) {
                      var t, r;
                      (t = n.iFrame),
                        (r = e),
                        new Promise(function (e, n) {
                          var i = t.contentWindow.document,
                            a = "".concat("https://unpkg.com/").concat(r),
                            u = i.querySelector(
                              "[".concat(o, "='").concat(r, "']"),
                            );
                          if (u) e(u);
                          else {
                            var l = i.createElement("script");
                            l.setAttribute(o, r),
                              i.body.appendChild(l),
                              (l.onLoad = function () {
                                e(l);
                              }),
                              (l.onError = function (e) {
                                return n(e);
                              }),
                              (l.src = a);
                          }
                        });
                    }),
                    u(this.iFrame, e);
                },
              },
              {
                key: "execute",
                value: function (e) {
                  var n =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                    t = this;
                  if (!this.iFrame) throw new Error("No Iframe created.");
                  Object.keys(n).forEach(function (e) {
                    t.iFrame.contentWindow[e] = n[e];
                  });
                  var r = this.iFrame.contentWindow.eval(e);
                  return r;
                },
              },
            ]),
            t && c(n.prototype, t),
            r && c(n, r),
            e
          );
        })(),
        f = new s();
    },
    67967: function (e, n, t) {
      var r = t(67294),
        o = t(44715);
      n.Z = function (e) {
        var n = o.Z.get(e);
        return (0, r.useMemo)(
          function () {
            return n ? [n.data, n.type] : [];
          },
          [n],
        );
      };
    },
    47527: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return F;
        },
      });
      var r = t(36902),
        o = t(70910),
        i = function (e, n) {
          return {
            dropDownOpen: !1,
            demoMode: !1,
            modal: null,
            sidebarTooltip: null,
            logs: [],
            dependencies: [],
            onFlowSaveCallback: null,
            setDemoMode: function (n) {
              e({ demoMode: n });
            },
            setDropDownOpen: function (n) {
              e({ dropDownOpen: n });
            },
            setModal: function (n) {
              e({ modal: n });
            },
            setOnFlowSaveCallback: function (n) {
              e({ onFlowSaveCallback: n });
            },
            addDependency: function (t) {
              var r = n().dependencies;
              if (
                !r.some(function (e) {
                  return e.name === t.name;
                })
              ) {
                var i = r.concat([t]);
                e({ dependencies: i }),
                  o.Z.updateDependencies(
                    i.map(function (e) {
                      return e.name;
                    }),
                  );
              }
            },
            removeDependency: function (t) {
              var r = n().dependencies.filter(function (e) {
                return e.name !== t.name;
              });
              e({ dependencies: r }),
                o.Z.updateDependencies(
                  r.map(function (e) {
                    return e.name;
                  }),
                );
            },
            addLogs: function (t) {
              var r = n().logs,
                o = Array.isArray(t) ? t : [t];
              e({ logs: r.concat(o) });
            },
            clearLogs: function () {
              e({ logs: [] });
            },
          };
        },
        a = t(34051),
        u = t.n(a),
        l = t(53416),
        c = t(69647),
        s = t(38394),
        f = t.n(s),
        d = t(69483),
        p = t.n(d),
        m = t(83465),
        v = t.n(m),
        h = t(44715);
      function b(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
        return r;
      }
      function g(e, n, t, r, o, i, a) {
        try {
          var u = e[i](a),
            l = u.value;
        } catch (c) {
          return void t(c);
        }
        u.done ? n(l) : Promise.resolve(l).then(r, o);
      }
      function y(e) {
        return function () {
          var n = this,
            t = arguments;
          return new Promise(function (r, o) {
            var i = e.apply(n, t);
            function a(e) {
              g(i, r, o, a, u, "next", e);
            }
            function u(e) {
              g(i, r, o, a, u, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function x(e, n) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, n) {
            var t =
              null == e
                ? null
                : ("undefined" !== typeof Symbol && e[Symbol.iterator]) ||
                  e["@@iterator"];
            if (null != t) {
              var r,
                o,
                i = [],
                a = !0,
                u = !1;
              try {
                for (
                  t = t.call(e);
                  !(a = (r = t.next()).done) &&
                  (i.push(r.value), !n || i.length !== n);
                  a = !0
                );
              } catch (l) {
                (u = !0), (o = l);
              } finally {
                try {
                  a || null == t.return || t.return();
                } finally {
                  if (u) throw o;
                }
              }
              return i;
            }
          })(e, n) ||
          (function (e, n) {
            if (!e) return;
            if ("string" === typeof e) return b(e, n);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === t && e.constructor && (t = e.constructor.name);
            if ("Map" === t || "Set" === t) return Array.from(t);
            if (
              "Arguments" === t ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
            )
              return b(e, n);
          })(e, n) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      var w = "flow__settings",
        j = { settingKey: !1 },
        O = function (e) {
          (null === e || void 0 === e ? void 0 : e.elements) &&
            (e.elements = e.elements.map(function (e) {
              if ((0, c.UG)(e) && e.data.current) {
                var n = e.data.current,
                  t = n.data,
                  r = n.type;
                e.data.current = h.Z.set(t, r);
              }
              return e;
            }));
        },
        S = {
          init: function () {
            p().config({ name: "datablocks", storeName: "flows" }),
              this.initSettings();
          },
          saveFlow: (function () {
            var e = y(
              u().mark(function e(n) {
                var t, r, o, i, a, l, s, f, d, m;
                return u().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (t = n.key),
                          (r = void 0 === t ? "flow__default" : t),
                          (o = n.elements),
                          (i = n.transform),
                          (a = x(i, 3)),
                          (l = a[0]),
                          (s = a[1]),
                          (f = a[2]),
                          (d = {
                            elements: v()(o).map(function (e) {
                              var n;
                              (0, c.UG)(e) &&
                                ((null === (n = e.data) || void 0 === n
                                  ? void 0
                                  : n.current) &&
                                  (e.data.current = h.Z.get(e.data.current)),
                                delete e.handleBounds);
                              return e;
                            }),
                            x: l,
                            y: s,
                            zoom: f,
                          }),
                          (e.next = 5),
                          p().setItem(r, d)
                        );
                      case 5:
                        return (m = e.sent), e.abrupt("return", m);
                      case 7:
                      case "end":
                        return e.stop();
                    }
                }, e);
              }),
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })(),
          restoreFlow: y(
            u().mark(function e() {
              var n,
                t,
                r = arguments;
              return u().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n =
                          r.length > 0 && void 0 !== r[0]
                            ? r[0]
                            : "flow__default"),
                        (e.next = 3),
                        p().getItem(n)
                      );
                    case 3:
                      return (t = e.sent), O(t), e.abrupt("return", t);
                    case 6:
                    case "end":
                      return e.stop();
                  }
              }, e);
            }),
          ),
          loadFlow: y(
            u().mark(function e() {
              var n,
                t,
                r,
                o = arguments;
              return u().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n =
                          o.length > 0 && void 0 !== o[0]
                            ? o[0]
                            : "introduction"),
                        (e.next = 3),
                        fetch("/data/flows/".concat(n, ".json"))
                      );
                    case 3:
                      return (t = e.sent), (e.next = 6), t.json();
                    case 6:
                      return (r = e.sent), O(r), e.abrupt("return", r);
                    case 9:
                    case "end":
                      return e.stop();
                  }
              }, e);
            }),
          ),
          initSettings: y(
            u().mark(function e() {
              return u().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), p().getItem(w);
                    case 2:
                      if (e.sent) {
                        e.next = 6;
                        break;
                      }
                      return (e.next = 6), p().setItem(w, j);
                    case 6:
                    case "end":
                      return e.stop();
                  }
              }, e);
            }),
          ),
          updateSettings: (function () {
            var e = y(
              u().mark(function e(n, t) {
                var r, o;
                return u().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), p().getItem(w);
                      case 2:
                        return (
                          ((r = e.sent)[n] = t), (e.next = 6), p().setItem(w, r)
                        );
                      case 6:
                        return (o = e.sent), e.abrupt("return", o);
                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e);
              }),
            );
            return function (n, t) {
              return e.apply(this, arguments);
            };
          })(),
          getSettings: y(
            u().mark(function e() {
              var n;
              return u().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (e.next = 2), p().getItem(w);
                    case 2:
                      return (n = e.sent), e.abrupt("return", n);
                    case 4:
                    case "end":
                      return e.stop();
                  }
              }, e);
            }),
          ),
        },
        A = S,
        E = t(47936);
      function Z(e, n) {
        (null == n || n > e.length) && (n = e.length);
        for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
        return r;
      }
      function T(e, n, t, r, o, i, a) {
        try {
          var u = e[i](a),
            l = u.value;
        } catch (c) {
          return void t(c);
        }
        u.done ? n(l) : Promise.resolve(l).then(r, o);
      }
      function k(e) {
        return function () {
          var n = this,
            t = arguments;
          return new Promise(function (r, o) {
            var i = e.apply(n, t);
            function a(e) {
              T(i, r, o, a, u, "next", e);
            }
            function u(e) {
              T(i, r, o, a, u, "throw", e);
            }
            a(void 0);
          });
        };
      }
      function P(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      function C(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(t);
          "function" === typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
              Object.getOwnPropertySymbols(t).filter(function (e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
              }),
            )),
            r.forEach(function (n) {
              P(e, n, t[n]);
            });
        }
        return e;
      }
      function N(e, n) {
        if (null == e) return {};
        var t,
          r,
          o = (function (e, n) {
            if (null == e) return {};
            var t,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (t = i[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
            return o;
          })(e, n);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (t = i[r]),
              n.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (o[t] = e[t]));
        }
        return o;
      }
      function D(e) {
        return (
          (function (e) {
            if (Array.isArray(e)) return Z(e);
          })(e) ||
          (function (e) {
            if (
              ("undefined" !== typeof Symbol && null != e[Symbol.iterator]) ||
              null != e["@@iterator"]
            )
              return Array.from(e);
          })(e) ||
          (function (e, n) {
            if (!e) return;
            if ("string" === typeof e) return Z(e, n);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === t && e.constructor && (t = e.constructor.name);
            if ("Map" === t || "Set" === t) return Array.from(t);
            if (
              "Arguments" === t ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
            )
              return Z(e, n);
          })(e) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      var z = function (e, n) {
        return {
          id: null,
          title: null,
          isPublic: !1,
          updatedAt: null,
          createdAt: null,
          nodes: [],
          edges: [],
          inputNodeModalData: null,
          flowInstance: null,
          flowTransform: null,
          selectedNodeId: null,
          selectedNode: null,
          codeEditorFocus: !1,
          setTitle: function (n) {
            n && e({ title: n });
          },
          addElement: function (t) {
            if (t.target) {
              var r = n().edges.filter(function (e) {
                return !(
                  e.target === t.target && e.targetHandle === t.targetHandle
                );
              });
              e({ edges: r.concat([t]) });
            } else {
              var o = n().nodes;
              e({ nodes: o.concat([t]) });
            }
          },
          addNode: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = n(),
              r = t.flowInstance,
              o = t.addElement,
              i = e.data || {},
              a = (i.type, i.current),
              u = N(i, ["type", "current"]),
              c = (0, E.rc)(),
              s = c
                ? { x: c.width / 2 - 150, y: c.height / 2 - 40 }
                : { x: 0, y: 0 },
              f = r && e.position ? r.project(e.position) : s;
            a && (u.current = h.Z.set(a));
            var d = {
              id: e.id || (0, l.x0)(),
              type: e.type || "default",
              data: u,
              position: f,
            };
            return o(d);
          },
          updateNodeData: function (t) {
            var r = t.id,
              o = t.data,
              i = void 0 === o ? {} : o,
              a = n().nodes.map(function (e) {
                if (e.id === r)
                  if (f()(i, "current")) {
                    var n = h.Z.set(i.current);
                    e.data = C({}, e.data, i, { current: n });
                  } else e.data = C({}, e.data, i);
                return e;
              });
            e({ nodes: a });
          },
          addEdge: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : {},
              t = n().addElement;
            if (!e.source || !e.target || e.target === e.source) return !1;
            var r = {
              id: e.id || (0, l.x0)(),
              type: e.type || "default",
              source: e.source,
              target: e.target,
              sourceHandle: e.sourceHandle,
              targetHandle: e.targetHandle,
              animated: !0,
              style: e.style,
            };
            return t(r);
          },
          setConnectionValid: function (t) {
            var r = t.source,
              o = t.target,
              i = t.isValid,
              a = n().edges.map(function (e) {
                return (e.source !== r && e.sourceHandle !== r) ||
                  (e.target !== o && e.targetHandle !== o)
                  ? e
                  : C({}, e, { animated: i, label: i ? "\xd7" : "\u26a0" });
              });
            e({ edges: a });
          },
          setId: function (n) {
            e({ id: n });
          },
          setMeta: function (n) {
            var t = n.id,
              r = n.title,
              o = n.is_public,
              i = n.updated_at,
              a = n.created_at;
            e({ id: t, title: r, isPublic: o, createdAt: a, updatedAt: i });
          },
          setFlowData: (function () {
            var e = k(
              u().mark(function e(t) {
                var r, o, i, a, l, s, f, d, p, m;
                return u().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        (a = (
                          (null === t || void 0 === t ? void 0 : t.elements) ||
                          []
                        ).filter(c.UG)),
                          (l = (
                            (null === t || void 0 === t
                              ? void 0
                              : t.elements) || []
                          ).filter(c.un)),
                          (s = n()),
                          (f = s.addEdges),
                          (d = s.setMeta),
                          (p = s.setElements),
                          (m = s.setFlowTransform),
                          d(t),
                          p(a),
                          m({
                            x:
                              (null === t ||
                              void 0 === t ||
                              null === (r = t.viewport) ||
                              void 0 === r
                                ? void 0
                                : r.x) || 0,
                            y:
                              (null === t ||
                              void 0 === t ||
                              null === (o = t.viewport) ||
                              void 0 === o
                                ? void 0
                                : o.y) || 0,
                            zoom:
                              (null === t ||
                              void 0 === t ||
                              null === (i = t.viewport) ||
                              void 0 === i
                                ? void 0
                                : i.zoom) || 1,
                          }),
                          setTimeout(function () {
                            f(l);
                          }, 250);
                      case 8:
                      case "end":
                        return e.stop();
                    }
                }, e);
              }),
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })(),
          loadFlow: (function () {
            var e = k(
              u().mark(function e(t) {
                var r, o, i, a, l, s, f;
                return u().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (r = n()),
                          (o = r.setElements),
                          (i = r.setFlowTransform),
                          (a = r.addEdges),
                          (e.next = 3),
                          A.loadFlow(t)
                        );
                      case 3:
                        (l = e.sent),
                          (s = (
                            (null === l || void 0 === l
                              ? void 0
                              : l.elements) || []
                          ).filter(c.UG)),
                          (f = (
                            (null === l || void 0 === l
                              ? void 0
                              : l.elements) || []
                          ).filter(c.un)),
                          o(s),
                          i({
                            x: (null === l || void 0 === l ? void 0 : l.x) || 0,
                            y: (null === l || void 0 === l ? void 0 : l.y) || 0,
                            zoom:
                              (null === l || void 0 === l ? void 0 : l.zoom) ||
                              1,
                          }),
                          setTimeout(function () {
                            return a(f);
                          }, 250);
                      case 9:
                      case "end":
                        return e.stop();
                    }
                }, e);
              }),
            );
            return function (n) {
              return e.apply(this, arguments);
            };
          })(),
          removeElements: function (t) {
            var r = t.map(function (e) {
                return e.id;
              }),
              o = n(),
              i = o.nodes,
              a = o.edges,
              u = i.filter(function (e) {
                return !r.includes(e.id);
              }),
              l = a.filter(function (e) {
                return !r.includes(e.id);
              });
            e({ nodes: u, edges: l });
          },
          closeInputNodeModal: function () {
            e({ inputNodeModalData: null });
          },
          setInputNodeModalData: function (n) {
            e({ inputNodeModalData: n });
          },
          setFlowInstance: function (n) {
            e({ flowInstance: n });
          },
          setElements: function (n) {
            var t = n.filter(c.UG),
              r = n.filter(c.un);
            e({ nodes: t, edges: r });
          },
          addNodes: function (t) {
            var r = n().nodes;
            e({ nodes: D(r).concat(D(t)) });
          },
          addEdges: function (t) {
            var r = n().edges;
            e({ edges: D(r).concat(D(t)) });
          },
          onNodesChange: function (t) {
            var r = n(),
              o = r.codeEditorFocus,
              i = r.nodes;
            o || e({ nodes: (0, c.Fb)(t, i) });
          },
          onEdgesChange: function (t) {
            var r = n().edges;
            e({ edges: (0, c.yn)(t, r) });
          },
          setFlowTransform: function (n) {
            e({ flowTransform: n });
          },
          selectNode: function (n) {
            var t = n || null,
              r = n ? n.id : null;
            e({ selectedNode: t, selectedNodeId: r });
          },
          setCodeEditorFocused: function (n) {
            e({ codeEditorFocus: n });
          },
        };
      };
      function I(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      var _ = (0, r.ZP)(function (e, n) {
          return (function (e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = null != arguments[n] ? arguments[n] : {},
                r = Object.keys(t);
              "function" === typeof Object.getOwnPropertySymbols &&
                (r = r.concat(
                  Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                  }),
                )),
                r.forEach(function (n) {
                  I(e, n, t[n]);
                });
            }
            return e;
          })({}, i(e, n), z(e, n));
        }),
        F = _;
    },
    47936: function (e, n, t) {
      t.d(n, {
        Sv: function () {
          return o;
        },
        rc: function () {
          return i;
        },
      });
      var r = t(34734);
      function o(e, n, t) {
        var r = window.document.createElement("a");
        (r.href = window.URL.createObjectURL(new Blob([e], { type: n }))),
          (r.download = t),
          document.body.appendChild(r),
          r.click(),
          document.body.removeChild(r);
      }
      function i() {
        var e = document.getElementById(r.wY);
        return e ? e.getBoundingClientRect() : null;
      }
    },
    76698: function (e, n, t) {
      t.d(n, {
        Em: function () {
          return T;
        },
        It: function () {
          return A;
        },
        KG: function () {
          return Z;
        },
        KW: function () {
          return N;
        },
        KX: function () {
          return k;
        },
        Pu: function () {
          return C;
        },
        T$: function () {
          return P;
        },
        sR: function () {
          return D;
        },
      });
      var r = t(53778),
        o = t.n(r),
        i = t(62753),
        a = t.n(i),
        u = t(8146),
        l = t.n(u),
        c = t(25751),
        s = t.n(c),
        f = t(23126),
        d = t.n(f),
        p = t(47413),
        m = t.n(p),
        v = t(48094),
        h = t.n(v),
        b = t(28801),
        g = t.n(b),
        y = t(64748),
        x = t.n(y),
        w = t(23362),
        j = t.n(w),
        O = t(24750),
        S = t(97067);
      function A(e) {
        return (
          !(!o()(e) || !e.length) &&
          (function (e) {
            return (
              !!l()(e) &&
              Object.values(e).every(function (e) {
                return m()(e) || !a()(e);
              })
            );
          })(e[0])
        );
      }
      function E(e) {
        return (
          !!l()(e) &&
          e.type &&
          [
            "Feature",
            "FeatureCollection",
            "Point",
            "MultiPoint",
            "LineString",
            "MultiLineString",
            "Polygon",
            "MultiPolygon",
            "GeometryCollection",
          ].includes(e.type)
        );
      }
      function Z(e) {
        return E(e) && "FeatureCollection" === e.type;
      }
      function T(e) {
        return s()(e)
          ? O.Z.STRING
          : d()(e)
            ? O.Z.NUMBER
            : h()(e)
              ? O.Z.BOOLEAN
              : m()(e)
                ? O.Z.DATE
                : g()(e)
                  ? O.Z.UNDEFINED
                  : x()(e)
                    ? O.Z.NULL
                    : A(e)
                      ? O.Z.DATASET
                      : E(e)
                        ? O.Z.GEOJSON
                        : (function (e) {
                              return (
                                !!l()(e) && e.type && "Topology" === e.type
                              );
                            })(e)
                          ? O.Z.TOPOJSON
                          : o()(e)
                            ? O.Z.ARRAY
                            : a()(e)
                              ? O.Z.OBJECT
                              : O.Z.UNKNOWN;
      }
      function k(e) {
        if (!A(e) && !Z(e)) return [];
        var n = Z(e) ? (0, S.qU)(e) : e,
          t = j()(n, function (e) {
            return Object.keys(e).length;
          });
        return Object.keys(t);
      }
      function P(e, n) {
        var t = O.Z.UNKNOWN;
        return (
          e.some(function (e) {
            return (t = T(e[n])) !== O.Z.UNDEFINED && t !== O.Z.NULL;
          }),
          t
        );
      }
      function C(e) {
        return k(e).map(function (n) {
          return { name: n, type: P(e, n) };
        });
      }
      function N(e) {
        var n = e.data;
        switch (e.type || T(n)) {
          case O.Z.DATASET:
          case O.Z.ARRAY:
          case O.Z.OBJECT:
          case O.Z.GEOJSON:
          case O.Z.TOPOJSON:
            return JSON.stringify(n, null, 2);
          case O.Z.BOOLEAN:
            return n ? "true" : "false";
          case O.Z.DATE:
            return n.toLocaleString();
          case O.Z.UNDEFINED:
            return "undefined";
          case O.Z.NULL:
            return "null";
          default:
            return "".concat(n);
        }
      }
      function D(e) {
        return e === O.Z.GEOJSON
          ? function (e) {
              return (
                e.features &&
                  e.features.length &&
                  (e.features = e.features.filter(function (e) {
                    return e.geometry;
                  })),
                e
              );
            }
          : function (e) {
              return e;
            };
      }
    },
    76883: function (e, n, t) {
      t.d(n, {
        XM: function () {
          return v;
        },
      });
      var r = t(47936),
        o = t(76698),
        i = t(97067),
        a = t(24750),
        u = t(28518),
        l = function (e) {
          var n = (0, u.Q9)(e);
          (0, r.Sv)(n, "text/csv", "data.csv");
        },
        c = function (e) {
          var n = (0, u.Sk)(e);
          (0, r.Sv)(n, "application/json", "data.json");
        },
        s = function (e, n) {
          var t = n === a.Z.TOPOJSON ? (0, i.Jt)(e) : e,
            o = (0, u.Sk)(t);
          (0, r.Sv)(o, "application/geo+json", "data.geojson");
        },
        f = function (e, n) {
          var t = n === a.Z.GEOJSON ? (0, i.Ao)(e) : e,
            o = (0, u.Sk)(t);
          (0, r.Sv)(o, "application/json", "data.topo.json");
        },
        d = function (e, n) {
          var t = n === a.Z.TOPOJSON ? (0, i.Jt)(e) : e,
            r = (0, i.qU)(t);
          l(r);
        },
        p = function (e, n) {
          var t = n === a.Z.TOPOJSON ? (0, i.Jt)(e) : e,
            r = (0, i.qU)(t);
          c(r);
        },
        m = function (e, n) {
          var t = (0, o.KW)({ data: e, type: n });
          (0, r.Sv)(t, "text/plain", "data.txt");
        },
        v = function (e) {
          switch (e) {
            case a.Z.DATASET:
              return [
                { filetype: "csv", handler: l },
                { filetype: "json", handler: c },
              ];
            case a.Z.OBJECT:
            case a.Z.ARRAY:
              return [{ filetype: "json", handler: c }];
            case a.Z.TOPOJSON:
            case a.Z.GEOJSON:
              return [
                { filetype: "geojson", handler: s },
                { filetype: "topojson", handler: f },
                { filetype: "csv", handler: d },
                { filetype: "json", handler: p },
              ];
            case a.Z.DATE:
            case a.Z.STRING:
            case a.Z.NUMBER:
              return [{ filetype: "txt", handler: m }];
            default:
              return [];
          }
        };
    },
    97067: function (e, n, t) {
      t.d(n, {
        Ao: function () {
          return f;
        },
        Jt: function () {
          return d;
        },
        L0: function () {
          return s;
        },
        qU: function () {
          return c;
        },
      });
      var r = t(50269),
        o = t(32154),
        i = t(1449),
        a = t(76698);
      function u(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      function l(e, n) {
        if (null == e) return {};
        var t,
          r,
          o = (function (e, n) {
            if (null == e) return {};
            var t,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (t = i[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
            return o;
          })(e, n);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (t = i[r]),
              n.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (o[t] = e[t]));
        }
        return o;
      }
      function c(e) {
        return (0, a.KG)(e)
          ? e.features.map(function (e) {
              return (function (e) {
                for (var n = 1; n < arguments.length; n++) {
                  var t = null != arguments[n] ? arguments[n] : {},
                    r = Object.keys(t);
                  "function" === typeof Object.getOwnPropertySymbols &&
                    (r = r.concat(
                      Object.getOwnPropertySymbols(t).filter(function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                      }),
                    )),
                    r.forEach(function (n) {
                      u(e, n, t[n]);
                    });
                }
                return e;
              })({}, e.properties, {
                __geometry: JSON.stringify(e.geometry),
                __type: e.type,
              });
            })
          : [];
      }
      function s(e) {
        if (!(0, a.It)(e) || !(0, a.KX)(e).includes("__geometry")) return e;
        var n = e.map(function (e) {
          var n = e.__geometry,
            t = e.__type,
            r = l(e, ["__geometry", "__type"]);
          return { geometry: JSON.parse(n), type: t, properties: r };
        });
        return (0, i.uf)(n);
      }
      function f(e) {
        return (0, r.M)({ data: e });
      }
      function d(e) {
        var n = Object.keys(e.objects)[0];
        return (0, o.Z)(e, e.objects[n]);
      }
    },
  },
]);
