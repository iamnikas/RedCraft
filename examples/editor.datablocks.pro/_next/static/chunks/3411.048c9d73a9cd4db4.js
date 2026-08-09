"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3411],
  {
    87639: function (n, r, t) {
      var e = t(67294),
        o = t(47527);
      r.Z = function (n, r) {
        var t = (0, o.Z)(function (n) {
          return n.updateNodeData;
        });
        return (
          (0, e.useEffect)(
            function () {
              t({ id: n, data: { current: r } });
            },
            [t, n, r],
          ),
          r
        );
      };
    },
    83411: function (n, r, t) {
      t.r(r),
        t.d(r, {
          default: function () {
            return f;
          },
        });
      var e = t(85893),
        o = (t(67294), t(39034)),
        u = t(1449);
      var i = function (n, r) {
          void 0 === r && (r = {});
          var t = 0,
            e = 0,
            i = 0;
          return (
            (0, o.pZ)(
              n,
              function (n) {
                (t += n[0]), (e += n[1]), i++;
              },
              !0,
            ),
            (0, u.xm)([t / i, e / i], r.properties)
          );
        },
        a = t(60607),
        c = t(96352),
        l = function (n) {
          var r;
          return JSON.stringify(
            null === n ||
              void 0 === n ||
              null === (r = n.geometry) ||
              void 0 === r
              ? void 0
              : r.coordinates,
            null,
            2,
          );
        },
        f = (0, a.Z)(function (n) {
          var r = n.id;
          return (0, e.jsx)(c.Z, {
            id: r,
            transformFunc: i,
            format: l,
            isJsonOutput: !1,
            nodeName: "Centroid",
          });
        });
    },
    96352: function (n, r, t) {
      t.d(r, {
        Z: function () {
          return y;
        },
      });
      var e = t(85893),
        o = t(67294),
        u = t(68527),
        i = t(87639),
        a = t(30752),
        c = t(24750);
      function l() {
        var n,
          r,
          t =
            ((n = ["\n  margin: 0;\n  user-select: all;\n  cursor: text;\n"]),
            r || (r = n.slice(0)),
            Object.freeze(
              Object.defineProperties(n, { raw: { value: Object.freeze(r) } }),
            ));
        return (
          (l = function () {
            return t;
          }),
          t
        );
      }
      var f = t(95934).default.pre(l()),
        s = t(47527);
      function d(n, r) {
        (null == r || r > n.length) && (r = n.length);
        for (var t = 0, e = new Array(r); t < r; t++) e[t] = n[t];
        return e;
      }
      function v(n, r) {
        return (
          (function (n) {
            if (Array.isArray(n)) return n;
          })(n) ||
          (function (n, r) {
            var t =
              null == n
                ? null
                : ("undefined" !== typeof Symbol && n[Symbol.iterator]) ||
                  n["@@iterator"];
            if (null != t) {
              var e,
                o,
                u = [],
                i = !0,
                a = !1;
              try {
                for (
                  t = t.call(n);
                  !(i = (e = t.next()).done) &&
                  (u.push(e.value), !r || u.length !== r);
                  i = !0
                );
              } catch (c) {
                (a = !0), (o = c);
              } finally {
                try {
                  i || null == t.return || t.return();
                } finally {
                  if (a) throw o;
                }
              }
              return u;
            }
          })(n, r) ||
          (function (n, r) {
            if (!n) return;
            if ("string" === typeof n) return d(n, r);
            var t = Object.prototype.toString.call(n).slice(8, -1);
            "Object" === t && n.constructor && (t = n.constructor.name);
            if ("Map" === t || "Set" === t) return Array.from(t);
            if (
              "Arguments" === t ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
            )
              return d(n, r);
          })(n, r) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          })()
        );
      }
      var m = function (n) {
          return n;
        },
        p = [c.Z.GEOJSON],
        y = function (n) {
          var r = n.nodeName,
            t = n.id,
            c = n.transformFunc,
            l = n.isJsonOutput,
            d = void 0 === l || l,
            y = n.format,
            h = void 0 === y ? m : y,
            b = v((0, a.Z)(t, p), 3),
            g = b[0],
            O = b[1],
            j = b[2],
            Z = (0, s.Z)(function (n) {
              return n.addLogs;
            }),
            N = (0, o.useMemo)(
              function () {
                if (!j)
                  return (
                    "undefined" !== typeof O &&
                      Z({
                        method: "error",
                        data: [
                          ""
                            .concat(r, ": ")
                            .concat(
                              O,
                              " is not a valid input type. Only Geojson is allowed.",
                            ),
                        ],
                      }),
                    null
                  );
                try {
                  return c(g);
                } catch (n) {
                  return Z({ method: "error", data: [n.message] }), null;
                }
              },
              [j, g, O, c, Z, r],
            );
          return (
            (0, i.Z)(t, N),
            (0, e.jsx)(u.xu, {
              p: 2,
              minWidth: 200,
              children:
                null !== N
                  ? (0, e.jsx)(f, {
                      className: "nodrag",
                      children: h(d ? JSON.stringify(N, null, 2) : N),
                    })
                  : "\u2190 connect geojson\u2026",
            })
          );
        };
    },
  },
]);
