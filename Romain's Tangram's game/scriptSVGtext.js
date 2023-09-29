/*! @svgdotjs/svg.js v3.0.16 MIT*/ var SVG = (function () {
  "use strict";
  var t =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : "undefined" != typeof self
      ? self
      : {};
  function e(t, e) {
    return t((e = { exports: {} }), e.exports), e.exports;
  }
  var n,
    r,
    i,
    o = function (t) {
      return t && t.Math == Math && t;
    },
    y =
      o("object" == typeof globalThis && globalThis) ||
      o("object" == typeof window && window) ||
      o("object" == typeof self && self) ||
      o("object" == typeof t && t) ||
      Function("return this")(),
    m = function (t) {
      try {
        return !!t();
      } catch (t) {
        return !0;
      }
    },
    f = !m(function () {
      return (
        7 !=
        Object.defineProperty({}, "a", {
          get: function () {
            return 7;
          },
        }).a
      );
    }),
    s = {}.propertyIsEnumerable,
    u = Object.getOwnPropertyDescriptor,
    v = {
      f:
        u && !s.call({ 1: 2 }, 1)
          ? function (t) {
              var e = u(this, t);
              return !!e && e.enumerable;
            }
          : s,
    },
    b = function (t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e,
      };
    },
    a = {}.toString,
    h = function (t) {
      return a.call(t).slice(8, -1);
    },
    l = "".split,
    _ = m(function () {
      return !Object("z").propertyIsEnumerable(0);
    })
      ? function (t) {
          return "String" == h(t) ? l.call(t, "") : Object(t);
        }
      : Object,
    c = function (t) {
      if (null == t) throw TypeError("Can't call method on " + t);
      return t;
    },
    d = function (t) {
      return _(c(t));
    },
    g = function (t) {
      return "object" == typeof t ? null !== t : "function" == typeof t;
    },
    p = function (t, e) {
      if (!g(t)) return t;
      var n, r;
      if (e && "function" == typeof (n = t.toString) && !g((r = n.call(t))))
        return r;
      if ("function" == typeof (n = t.valueOf) && !g((r = n.call(t)))) return r;
      if (!e && "function" == typeof (n = t.toString) && !g((r = n.call(t))))
        return r;
      throw TypeError("Can't convert object to primitive value");
    },
    w = {}.hasOwnProperty,
    x = function (t, e) {
      return w.call(t, e);
    },
    k = y.document,
    O = g(k) && g(k.createElement),
    S = function (t) {
      return O ? k.createElement(t) : {};
    },
    j =
      !f &&
      !m(function () {
        return (
          7 !=
          Object.defineProperty(S("div"), "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      }),
    M = Object.getOwnPropertyDescriptor,
    E = {
      f: f
        ? M
        : function (t, e) {
            if (((t = d(t)), (e = p(e, !0)), j))
              try {
                return M(t, e);
              } catch (t) {}
            if (x(t, e)) return b(!v.f.call(t, e), t[e]);
          },
    },
    T = function (t) {
      if (!g(t)) throw TypeError(String(t) + " is not an object");
      return t;
    },
    C = Object.defineProperty,
    P = {
      f: f
        ? C
        : function (t, e, n) {
            if ((T(t), (e = p(e, !0)), T(n), j))
              try {
                return C(t, e, n);
              } catch (t) {}
            if ("get" in n || "set" in n)
              throw TypeError("Accessors not supported");
            return "value" in n && (t[e] = n.value), t;
          },
    },
    I = f
      ? function (t, e, n) {
          return P.f(t, e, b(1, n));
        }
      : function (t, e, n) {
          return (t[e] = n), t;
        },
    N = function (e, n) {
      try {
        I(y, e, n);
      } catch (t) {
        y[e] = n;
      }
      return n;
    },
    D = "__core-js_shared__",
    R = y[D] || N(D, {}),
    L = e(function (t) {
      (t.exports = function (t, e) {
        return R[t] || (R[t] = void 0 !== e ? e : {});
      })("versions", []).push({
        version: "3.3.6",
        mode: "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)",
      });
    }),
    F = L("native-function-to-string", Function.toString),
    z = y.WeakMap,
    q = "function" == typeof z && /native code/.test(F.call(z)),
    Y = 0,
    X = Math.random(),
    V = function (t) {
      return (
        "Symbol(" +
        String(void 0 === t ? "" : t) +
        ")_" +
        (++Y + X).toString(36)
      );
    },
    H = L("keys"),
    B = function (t) {
      return H[t] || (H[t] = V(t));
    },
    U = {},
    $ = y.WeakMap;
  if (q) {
    var Q = new $(),
      W = Q.get,
      J = Q.has,
      Z = Q.set;
    (n = function (t, e) {
      return Z.call(Q, t, e), e;
    }),
      (r = function (t) {
        return W.call(Q, t) || {};
      }),
      (i = function (t) {
        return J.call(Q, t);
      });
  } else {
    var K = B("state");
    (U[K] = !0),
      (n = function (t, e) {
        return I(t, K, e), e;
      }),
      (r = function (t) {
        return x(t, K) ? t[K] : {};
      }),
      (i = function (t) {
        return x(t, K);
      });
  }
  var tt = {
      set: n,
      get: r,
      has: i,
      enforce: function (t) {
        return i(t) ? r(t) : n(t, {});
      },
      getterFor: function (n) {
        return function (t) {
          var e;
          if (!g(t) || (e = r(t)).type !== n)
            throw TypeError("Incompatible receiver, " + n + " required");
          return e;
        };
      },
    },
    et = e(function (t) {
      var e = tt.get,
        u = tt.enforce,
        a = String(F).split("toString");
      L("inspectSource", function (t) {
        return F.call(t);
      }),
        (t.exports = function (t, e, n, r) {
          var i = !!r && !!r.unsafe,
            o = !!r && !!r.enumerable,
            s = !!r && !!r.noTargetGet;
          "function" == typeof n &&
            ("string" != typeof e || x(n, "name") || I(n, "name", e),
            (u(n).source = a.join("string" == typeof e ? e : ""))),
            t !== y
              ? (i ? !s && t[e] && (o = !0) : delete t[e],
                o ? (t[e] = n) : I(t, e, n))
              : o
              ? (t[e] = n)
              : N(e, n);
        })(Function.prototype, "toString", function () {
          return ("function" == typeof this && e(this).source) || F.call(this);
        });
    }),
    nt = y,
    rt = function (t) {
      return "function" == typeof t ? t : void 0;
    },
    it = function (t, e) {
      return arguments.length < 2
        ? rt(nt[t]) || rt(y[t])
        : (nt[t] && nt[t][e]) || (y[t] && y[t][e]);
    },
    ot = Math.ceil,
    st = Math.floor,
    ut = function (t) {
      return isNaN((t = +t)) ? 0 : (0 < t ? st : ot)(t);
    },
    at = Math.min,
    ht = function (t) {
      return 0 < t ? at(ut(t), 9007199254740991) : 0;
    },
    lt = Math.max,
    ct = Math.min,
    ft = function (t, e) {
      var n = ut(t);
      return n < 0 ? lt(n + e, 0) : ct(n, e);
    },
    vt = function (u) {
      return function (t, e, n) {
        var r,
          i = d(t),
          o = ht(i.length),
          s = ft(n, o);
        if (u && e != e) {
          for (; s < o; ) if ((r = i[s++]) != r) return !0;
        } else
          for (; s < o; s++)
            if ((u || s in i) && i[s] === e) return u || s || 0;
        return !u && -1;
      };
    },
    dt = { includes: vt(!0), indexOf: vt(!1) },
    pt = dt.indexOf,
    yt = function (t, e) {
      var n,
        r = d(t),
        i = 0,
        o = [];
      for (n in r) !x(U, n) && x(r, n) && o.push(n);
      for (; e.length > i; ) x(r, (n = e[i++])) && (~pt(o, n) || o.push(n));
      return o;
    },
    mt = [
      "constructor",
      "hasOwnProperty",
      "isPrototypeOf",
      "propertyIsEnumerable",
      "toLocaleString",
      "toString",
      "valueOf",
    ],
    gt = mt.concat("length", "prototype"),
    wt = {
      f:
        Object.getOwnPropertyNames ||
        function (t) {
          return yt(t, gt);
        },
    },
    bt = { f: Object.getOwnPropertySymbols },
    _t =
      it("Reflect", "ownKeys") ||
      function (t) {
        var e = wt.f(T(t)),
          n = bt.f;
        return n ? e.concat(n(t)) : e;
      },
    xt = function (t, e) {
      for (var n = _t(e), r = P.f, i = E.f, o = 0; o < n.length; o++) {
        var s = n[o];
        x(t, s) || r(t, s, i(e, s));
      }
    },
    kt = /#|\.prototype\./,
    Ot = function (t, e) {
      var n = At[St(t)];
      return n == Mt || (n != jt && ("function" == typeof e ? m(e) : !!e));
    },
    St = (Ot.normalize = function (t) {
      return String(t).replace(kt, ".").toLowerCase();
    }),
    At = (Ot.data = {}),
    jt = (Ot.NATIVE = "N"),
    Mt = (Ot.POLYFILL = "P"),
    Et = Ot,
    Tt = E.f,
    Ct = function (t, e) {
      var n,
        r,
        i,
        o,
        s,
        u = t.target,
        a = t.global,
        h = t.stat;
      if ((n = a ? y : h ? y[u] || N(u, {}) : (y[u] || {}).prototype))
        for (r in e) {
          if (
            ((o = e[r]),
            (i = t.noTargetGet ? (s = Tt(n, r)) && s.value : n[r]),
            !Et(a ? r : u + (h ? "." : "#") + r, t.forced) && void 0 !== i)
          ) {
            if (typeof o == typeof i) continue;
            xt(o, i);
          }
          (t.sham || (i && i.sham)) && I(o, "sham", !0), et(n, r, o, t);
        }
    },
    Pt =
      Object.keys ||
      function (t) {
        return yt(t, mt);
      },
    It = function (t) {
      return Object(c(t));
    },
    Nt = Object.assign,
    Dt =
      !Nt ||
      m(function () {
        var A = {},
          e = {},
          t = Symbol(),
          n = "abcdefghijklmnopqrst";
        return (
          (A[t] = 7),
          n.split("").forEach(function (t) {
            e[t] = t;
          }),
          7 != Nt({}, A)[t] || Pt(Nt({}, e)).join("") != n
        );
      })
        ? function (t, e) {
            for (
              var n = It(t), r = arguments.length, i = 1, o = bt.f, s = v.f;
              i < r;

            )
              for (
                var u,
                  a = _(arguments[i++]),
                  h = o ? Pt(a).concat(o(a)) : Pt(a),
                  l = h.length,
                  c = 0;
                c < l;

              )
                (u = h[c++]), (f && !s.call(a, u)) || (n[u] = a[u]);
            return n;
          }
        : Nt;
  Ct(
    { target: "Object", stat: !0, forced: Object.assign !== Dt },
    { assign: Dt }
  );
  var Rt,
    Lt,
    Ft =
      Array.isArray ||
      function (t) {
        return "Array" == h(t);
      },
    zt = function (t, e, n) {
      var r = p(e);
      r in t ? P.f(t, r, b(0, n)) : (t[r] = n);
    },
    qt =
      !!Object.getOwnPropertySymbols &&
      !m(function () {
        return !String(Symbol());
      }),
    Yt = y.Symbol,
    Xt = L("wks"),
    Gt = function (t) {
      return Xt[t] || (Xt[t] = (qt && Yt[t]) || (qt ? Yt : V)("Symbol." + t));
    },
    Vt = it("navigator", "userAgent") || "",
    Ht = y.process,
    Bt = Ht && Ht.versions,
    Ut = Bt && Bt.v8;
  Ut
    ? (Lt = (Rt = Ut.split("."))[0] + Rt[1])
    : Vt &&
      (!(Rt = Vt.match(/Edge\/(\d+)/)) || 74 <= Rt[1]) &&
      (Rt = Vt.match(/Chrome\/(\d+)/)) &&
      (Lt = Rt[1]);
  var $t = Lt && +Lt,
    Qt = Gt("species"),
    Wt = function (e) {
      return (
        51 <= $t ||
        !m(function () {
          var t = [];
          return (
            ((t.constructor = {})[Qt] = function () {
              return { foo: 1 };
            }),
            1 !== t[e](Boolean).foo
          );
        })
      );
    },
    Jt = Gt("species"),
    Zt = [].slice,
    Kt = Math.max;
  Ct(
    { target: "Array", proto: !0, forced: !Wt("slice") },
    {
      slice: function (t, e) {
        var n,
          r,
          i,
          o = d(this),
          s = ht(o.length),
          u = ft(t, s),
          a = ft(void 0 === e ? s : e, s);
        if (
          Ft(o) &&
          ("function" != typeof (n = o.constructor) ||
          (n !== Array && !Ft(n.prototype))
            ? g(n) && null === (n = n[Jt]) && (n = void 0)
            : (n = void 0),
          n === Array || void 0 === n)
        )
          return Zt.call(o, u, a);
        for (
          r = new (void 0 === n ? Array : n)(Kt(a - u, 0)), i = 0;
          u < a;
          u++, i++
        )
          u in o && zt(r, i, o[u]);
        return (r.length = i), r;
      },
    }
  );
  var te = P.f,
    ee = Function.prototype,
    ne = ee.toString,
    re = /^\s*function ([^ (]*)/;
  !f ||
    "name" in ee ||
    te(ee, "name", {
      configurable: !0,
      get: function () {
        try {
          return ne.call(this).match(re)[1];
        } catch (t) {
          return "";
        }
      },
    });
  var ie = wt.f,
    oe = {}.toString,
    se =
      "object" == typeof window && window && Object.getOwnPropertyNames
        ? Object.getOwnPropertyNames(window)
        : [],
    ue = {
      f: function (t) {
        return se && "[object Window]" == oe.call(t)
          ? (function (t) {
              try {
                return ie(t);
              } catch (t) {
                return se.slice();
              }
            })(t)
          : ie(d(t));
      },
    },
    ae = ue.f,
    he = m(function () {
      return !Object.getOwnPropertyNames(1);
    });
  function le(t) {
    return (le =
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
          })(t);
  }
  function ce(t) {
    return (ce =
      "function" == typeof Symbol && "symbol" === le(Symbol.iterator)
        ? function (t) {
            return le(t);
          }
        : function (t) {
            return t &&
              "function" == typeof Symbol &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : le(t);
          })(t);
  }
  Ct({ target: "Object", stat: !0, forced: he }, { getOwnPropertyNames: ae });
  var fe = f
      ? Object.defineProperties
      : function (t, e) {
          T(t);
          for (var n, r = Pt(e), i = r.length, o = 0; o < i; )
            P.f(t, (n = r[o++]), e[n]);
          return t;
        },
    ve = it("document", "documentElement"),
    de = B("IE_PROTO"),
    pe = "prototype",
    ye = function () {},
    me = function () {
      var t,
        e = S("iframe"),
        n = mt.length,
        r = "script";
      for (
        e.style.display = "none",
          ve.appendChild(e),
          e.src = String("javascript:"),
          (t = e.contentWindow.document).open(),
          t.write("<script>document.F=Object</" + r + ">"),
          t.close(),
          me = t.F;
        n--;

      )
        delete me[pe][mt[n]];
      return me();
    },
    ge =
      Object.create ||
      function (t, e) {
        var n;
        return (
          null !== t
            ? ((ye[pe] = T(t)), (n = new ye()), (ye[pe] = null), (n[de] = t))
            : (n = me()),
          void 0 === e ? n : fe(n, e)
        );
      };
  U[de] = !0;
  var we = { f: Gt },
    be = P.f,
    _e = function (t) {
      var Symbol = nt.Symbol || (nt.Symbol = {});
      x(Symbol, t) || be(Symbol, t, { value: we.f(t) });
    },
    xe = P.f,
    ke = Gt("toStringTag"),
    Oe = function (t, e, n) {
      t &&
        !x((t = n ? t : t.prototype), ke) &&
        xe(t, ke, { configurable: !0, value: e });
    },
    Se = function (t) {
      if ("function" != typeof t)
        throw TypeError(String(t) + " is not a function");
      return t;
    },
    Ae = function (r, i, t) {
      if ((Se(r), void 0 === i)) return r;
      switch (t) {
        case 0:
          return function () {
            return r.call(i);
          };
        case 1:
          return function (t) {
            return r.call(i, t);
          };
        case 2:
          return function (t, e) {
            return r.call(i, t, e);
          };
        case 3:
          return function (t, e, n) {
            return r.call(i, t, e, n);
          };
      }
      return function () {
        return r.apply(i, arguments);
      };
    },
    je = Gt("species"),
    Me = function (t, e) {
      var n;
      return (
        Ft(t) &&
          ("function" != typeof (n = t.constructor) ||
          (n !== Array && !Ft(n.prototype))
            ? g(n) && null === (n = n[je]) && (n = void 0)
            : (n = void 0)),
        new (void 0 === n ? Array : n)(0 === e ? 0 : e)
      );
    },
    Ee = [].push,
    Te = function (v) {
      var d = 1 == v,
        p = 2 == v,
        y = 3 == v,
        m = 4 == v,
        g = 6 == v,
        w = 5 == v || g;
      return function (t, e, n, r) {
        for (
          var i,
            o,
            s = It(t),
            u = _(s),
            a = Ae(e, n, 3),
            h = ht(u.length),
            l = 0,
            c = r || Me,
            f = d ? c(t, h) : p ? c(t, 0) : void 0;
          l < h;
          l++
        )
          if ((w || l in u) && ((o = a((i = u[l]), l, s)), v))
            if (d) f[l] = o;
            else if (o)
              switch (v) {
                case 3:
                  return !0;
                case 5:
                  return i;
                case 6:
                  return l;
                case 2:
                  Ee.call(f, i);
              }
            else if (m) return !1;
        return g ? -1 : y || m ? m : f;
      };
    },
    Ce = {
      forEach: Te(0),
      map: Te(1),
      filter: Te(2),
      some: Te(3),
      every: Te(4),
      find: Te(5),
      findIndex: Te(6),
    },
    Pe = Ce.forEach,
    Ie = B("hidden"),
    Ne = "Symbol",
    De = "prototype",
    Re = Gt("toPrimitive"),
    Le = tt.set,
    Fe = tt.getterFor(Ne),
    ze = Object[De],
    qe = y.Symbol,
    Ye = y.JSON,
    Xe = Ye && Ye.stringify,
    Ge = E.f,
    Ve = P.f,
    He = ue.f,
    Be = v.f,
    Ue = L("symbols"),
    $e = L("op-symbols"),
    Qe = L("string-to-symbol-registry"),
    We = L("symbol-to-string-registry"),
    Je = L("wks"),
    Ze = y.QObject,
    Ke = !Ze || !Ze[De] || !Ze[De].findChild,
    tn =
      f &&
      m(function () {
        return (
          7 !=
          ge(
            Ve({}, "a", {
              get: function () {
                return Ve(this, "a", { value: 7 }).a;
              },
            })
          ).a
        );
      })
        ? function (t, e, n) {
            var r = Ge(ze, e);
            r && delete ze[e], Ve(t, e, n), r && t !== ze && Ve(ze, e, r);
          }
        : Ve,
    en = function (t, e) {
      var n = (Ue[t] = ge(qe[De]));
      return (
        Le(n, { type: Ne, tag: t, description: e }), f || (n.description = e), n
      );
    },
    nn =
      qt && "symbol" == typeof qe.iterator
        ? function (t) {
            return "symbol" == typeof t;
          }
        : function (t) {
            return Object(t) instanceof qe;
          },
    rn = function (t, e, n) {
      t === ze && rn($e, e, n), T(t);
      var r = p(e, !0);
      return (
        T(n),
        x(Ue, r)
          ? (n.enumerable
              ? (x(t, Ie) && t[Ie][r] && (t[Ie][r] = !1),
                (n = ge(n, { enumerable: b(0, !1) })))
              : (x(t, Ie) || Ve(t, Ie, b(1, {})), (t[Ie][r] = !0)),
            tn(t, r, n))
          : Ve(t, r, n)
      );
    },
    on = function (e, t) {
      T(e);
      var n = d(t),
        r = Pt(n).concat(hn(n));
      return (
        Pe(r, function (t) {
          (f && !sn.call(n, t)) || rn(e, t, n[t]);
        }),
        e
      );
    },
    sn = function (t) {
      var e = p(t, !0),
        n = Be.call(this, e);
      return (
        !(this === ze && x(Ue, e) && !x($e, e)) &&
        (!(n || !x(this, e) || !x(Ue, e) || (x(this, Ie) && this[Ie][e])) || n)
      );
    },
    un = function (t, e) {
      var n = d(t),
        r = p(e, !0);
      if (n !== ze || !x(Ue, r) || x($e, r)) {
        var i = Ge(n, r);
        return (
          !i || !x(Ue, r) || (x(n, Ie) && n[Ie][r]) || (i.enumerable = !0), i
        );
      }
    },
    an = function (t) {
      var e = He(d(t)),
        n = [];
      return (
        Pe(e, function (t) {
          x(Ue, t) || x(U, t) || n.push(t);
        }),
        n
      );
    },
    hn = function (t) {
      var e = t === ze,
        n = He(e ? $e : d(t)),
        r = [];
      return (
        Pe(n, function (t) {
          !x(Ue, t) || (e && !x(ze, t)) || r.push(Ue[t]);
        }),
        r
      );
    };
  qt ||
    (et(
      (qe = function () {
        if (this instanceof qe) throw TypeError("Symbol is not a constructor");
        var t =
            arguments.length && void 0 !== arguments[0]
              ? String(arguments[0])
              : void 0,
          e = V(t),
          n = function (t) {
            this === ze && n.call($e, t),
              x(this, Ie) && x(this[Ie], e) && (this[Ie][e] = !1),
              tn(this, e, b(1, t));
          };
        return f && Ke && tn(ze, e, { configurable: !0, set: n }), en(e, t);
      })[De],
      "toString",
      function () {
        return Fe(this).tag;
      }
    ),
    (v.f = sn),
    (P.f = rn),
    (E.f = un),
    (wt.f = ue.f = an),
    (bt.f = hn),
    f &&
      (Ve(qe[De], "description", {
        configurable: !0,
        get: function () {
          return Fe(this).description;
        },
      }),
      et(ze, "propertyIsEnumerable", sn, { unsafe: !0 })),
    (we.f = function (t) {
      return en(Gt(t), t);
    })),
    Ct({ global: !0, wrap: !0, forced: !qt, sham: !qt }, { Symbol: qe }),
    Pe(Pt(Je), function (t) {
      _e(t);
    }),
    Ct(
      { target: Ne, stat: !0, forced: !qt },
      {
        for: function (t) {
          var e = String(t);
          if (x(Qe, e)) return Qe[e];
          var n = qe(e);
          return (Qe[e] = n), (We[n] = e), n;
        },
        keyFor: function (t) {
          if (!nn(t)) throw TypeError(t + " is not a symbol");
          if (x(We, t)) return We[t];
        },
        useSetter: function () {
          Ke = !0;
        },
        useSimple: function () {
          Ke = !1;
        },
      }
    ),
    Ct(
      { target: "Object", stat: !0, forced: !qt, sham: !f },
      {
        create: function (t, e) {
          return void 0 === e ? ge(t) : on(ge(t), e);
        },
        defineProperty: rn,
        defineProperties: on,
        getOwnPropertyDescriptor: un,
      }
    ),
    Ct(
      { target: "Object", stat: !0, forced: !qt },
      { getOwnPropertyNames: an, getOwnPropertySymbols: hn }
    ),
    Ct(
      {
        target: "Object",
        stat: !0,
        forced: m(function () {
          bt.f(1);
        }),
      },
      {
        getOwnPropertySymbols: function (t) {
          return bt.f(It(t));
        },
      }
    ),
    Ye &&
      Ct(
        {
          target: "JSON",
          stat: !0,
          forced:
            !qt ||
            m(function () {
              var t = qe();
              return (
                "[null]" != Xe([t]) ||
                "{}" != Xe({ a: t }) ||
                "{}" != Xe(Object(t))
              );
            }),
        },
        {
          stringify: function (t) {
            for (var e, n, r = [t], i = 1; arguments.length > i; )
              r.push(arguments[i++]);
            if (((n = e = r[1]), (g(e) || void 0 !== t) && !nn(t)))
              return (
                Ft(e) ||
                  (e = function (t, e) {
                    if (
                      ("function" == typeof n && (e = n.call(this, t, e)),
                      !nn(e))
                    )
                      return e;
                  }),
                (r[1] = e),
                Xe.apply(Ye, r)
              );
          },
        }
      ),
    qe[De][Re] || I(qe[De], Re, qe[De].valueOf),
    Oe(qe, Ne),
    (U[Ie] = !0);
  var ln = P.f,
    cn = y.Symbol;
  if (
    f &&
    "function" == typeof cn &&
    (!("description" in cn.prototype) || void 0 !== cn().description)
  ) {
    var fn = {},
      vn = function () {
        var t =
            arguments.length < 1 || void 0 === arguments[0]
              ? void 0
              : String(arguments[0]),
          e = this instanceof vn ? new cn(t) : void 0 === t ? cn() : cn(t);
        return "" === t && (fn[e] = !0), e;
      };
    xt(vn, cn);
    var dn = (vn.prototype = cn.prototype);
    dn.constructor = vn;
    var pn = dn.toString,
      yn = "Symbol(test)" == String(cn("test")),
      mn = /^Symbol\((.*)\)[^)]+$/;
    ln(dn, "description", {
      configurable: !0,
      get: function () {
        var t = g(this) ? this.valueOf() : this,
          e = pn.call(t);
        if (x(fn, t)) return "";
        var n = yn ? e.slice(7, -1) : e.replace(mn, "$1");
        return "" === n ? void 0 : n;
      },
    }),
      Ct({ global: !0, forced: !0 }, { Symbol: vn });
  }
  _e("iterator");
  var gn = Gt("unscopables"),
    wn = Array.prototype;
  null == wn[gn] && I(wn, gn, ge(null));
  var bn,
    _n,
    xn,
    kn = function (t) {
      wn[gn][t] = !0;
    },
    On = {},
    Sn = !m(function () {
      function t() {}
      return (
        (t.prototype.constructor = null),
        Object.getPrototypeOf(new t()) !== t.prototype
      );
    }),
    An = B("IE_PROTO"),
    jn = Object.prototype,
    Mn = Sn
      ? Object.getPrototypeOf
      : function (t) {
          return (
            (t = It(t)),
            x(t, An)
              ? t[An]
              : "function" == typeof t.constructor && t instanceof t.constructor
              ? t.constructor.prototype
              : t instanceof Object
              ? jn
              : null
          );
        },
    En = Gt("iterator"),
    Tn = !1;
  [].keys &&
    ("next" in (xn = [].keys())
      ? (_n = Mn(Mn(xn))) !== Object.prototype && (bn = _n)
      : (Tn = !0)),
    null == bn && (bn = {}),
    x(bn, En) ||
      I(bn, En, function () {
        return this;
      });
  var Cn = { IteratorPrototype: bn, BUGGY_SAFARI_ITERATORS: Tn },
    Pn = Cn.IteratorPrototype,
    In = function () {
      return this;
    },
    Nn =
      Object.setPrototypeOf ||
      ("__proto__" in {}
        ? (function () {
            var n,
              r = !1,
              t = {};
            try {
              (n = Object.getOwnPropertyDescriptor(
                Object.prototype,
                "__proto__"
              ).set).call(t, []),
                (r = t instanceof Array);
            } catch (t) {}
            return function (t, e) {
              return (
                T(t),
                (function (t) {
                  if (!g(t) && null !== t)
                    throw TypeError(
                      "Can't set " + String(t) + " as a prototype"
                    );
                })(e),
                r ? n.call(t, e) : (t.__proto__ = e),
                t
              );
            };
          })()
        : void 0),
    Dn = Cn.IteratorPrototype,
    Rn = Cn.BUGGY_SAFARI_ITERATORS,
    Ln = Gt("iterator"),
    Fn = "values",
    zn = "entries",
    qn = function () {
      return this;
    },
    Yn = function (t, e, n, r, i, o, s) {
      var u, a, h;
      (a = r),
        (h = e + " Iterator"),
        ((u = n).prototype = ge(Pn, { next: b(1, a) })),
        Oe(u, h, !1),
        (On[h] = In);
      var l,
        c,
        f,
        v = function (t) {
          if (t === i && g) return g;
          if (!Rn && t in y) return y[t];
          switch (t) {
            case "keys":
            case Fn:
            case zn:
              return function () {
                return new n(this, t);
              };
          }
          return function () {
            return new n(this);
          };
        },
        d = e + " Iterator",
        p = !1,
        y = t.prototype,
        m = y[Ln] || y["@@iterator"] || (i && y[i]),
        g = (!Rn && m) || v(i),
        w = ("Array" == e && y.entries) || m;
      if (
        (w &&
          ((l = Mn(w.call(new t()))),
          Dn !== Object.prototype &&
            l.next &&
            (Mn(l) !== Dn &&
              (Nn ? Nn(l, Dn) : "function" != typeof l[Ln] && I(l, Ln, qn)),
            Oe(l, d, !0))),
        i == Fn &&
          m &&
          m.name !== Fn &&
          ((p = !0),
          (g = function () {
            return m.call(this);
          })),
        y[Ln] !== g && I(y, Ln, g),
        (On[e] = g),
        i)
      )
        if (
          ((c = { values: v(Fn), keys: o ? g : v("keys"), entries: v(zn) }), s)
        )
          for (f in c) (!Rn && !p && f in y) || et(y, f, c[f]);
        else Ct({ target: e, proto: !0, forced: Rn || p }, c);
      return c;
    },
    Xn = "Array Iterator",
    Gn = tt.set,
    Vn = tt.getterFor(Xn),
    Hn = Yn(
      Array,
      "Array",
      function (t, e) {
        Gn(this, { type: Xn, target: d(t), index: 0, kind: e });
      },
      function () {
        var t = Vn(this),
          e = t.target,
          n = t.kind,
          r = t.index++;
        return !e || r >= e.length
          ? { value: (t.target = void 0), done: !0 }
          : "keys" == n
          ? { value: r, done: !1 }
          : "values" == n
          ? { value: e[r], done: !1 }
          : { value: [r, e[r]], done: !1 };
      },
      "values"
    );
  (On.Arguments = On.Array), kn("keys"), kn("values"), kn("entries");
  var Bn = Gt("toStringTag"),
    Un =
      "Arguments" ==
      h(
        (function () {
          return arguments;
        })()
      ),
    $n = function (t) {
      var e, n, r;
      return void 0 === t
        ? "Undefined"
        : null === t
        ? "Null"
        : "string" ==
          typeof (n = (function (t, e) {
            try {
              return t[e];
            } catch (t) {}
          })((e = Object(t)), Bn))
        ? n
        : Un
        ? h(e)
        : "Object" == (r = h(e)) && "function" == typeof e.callee
        ? "Arguments"
        : r;
    },
    Qn = {};
  Qn[Gt("toStringTag")] = "z";
  var Wn =
      "[object z]" !== String(Qn)
        ? function () {
            return "[object " + $n(this) + "]";
          }
        : Qn.toString,
    Jn = Object.prototype;
  Wn !== Jn.toString && et(Jn, "toString", Wn, { unsafe: !0 });
  var Zn = !m(function () {
      return Object.isExtensible(Object.preventExtensions({}));
    }),
    Kn = e(function (t) {
      var e = P.f,
        n = V("meta"),
        r = 0,
        i =
          Object.isExtensible ||
          function () {
            return !0;
          },
        o = function (t) {
          e(t, n, { value: { objectID: "O" + ++r, weakData: {} } });
        },
        s = (t.exports = {
          REQUIRED: !1,
          fastKey: function (t, e) {
            if (!g(t))
              return "symbol" == typeof t
                ? t
                : ("string" == typeof t ? "S" : "P") + t;
            if (!x(t, n)) {
              if (!i(t)) return "F";
              if (!e) return "E";
              o(t);
            }
            return t[n].objectID;
          },
          getWeakData: function (t, e) {
            if (!x(t, n)) {
              if (!i(t)) return !0;
              if (!e) return !1;
              o(t);
            }
            return t[n].weakData;
          },
          onFreeze: function (t) {
            return Zn && s.REQUIRED && i(t) && !x(t, n) && o(t), t;
          },
        });
      U[n] = !0;
    }),
    tr = Gt("iterator"),
    er = Array.prototype,
    nr = Gt("iterator"),
    rr = function (e, t, n, r) {
      try {
        return r ? t(T(n)[0], n[1]) : t(n);
      } catch (t) {
        var i = e.return;
        throw (void 0 !== i && T(i.call(e)), t);
      }
    },
    ir = e(function (t) {
      var d = function (t, e) {
        (this.stopped = t), (this.result = e);
      };
      (t.exports = function (t, e, n, r, i) {
        var o,
          s,
          u,
          a,
          h,
          l,
          c,
          f,
          v = Ae(e, n, r ? 2 : 1);
        if (i) o = t;
        else {
          if (
            "function" !=
            typeof (s = (function (t) {
              if (null != t) return t[nr] || t["@@iterator"] || On[$n(t)];
            })(t))
          )
            throw TypeError("Target is not iterable");
          if (void 0 !== (f = s) && (On.Array === f || er[tr] === f)) {
            for (u = 0, a = ht(t.length); u < a; u++)
              if (
                (h = r ? v(T((c = t[u]))[0], c[1]) : v(t[u])) &&
                h instanceof d
              )
                return h;
            return new d(!1);
          }
          o = s.call(t);
        }
        for (l = o.next; !(c = l.call(o)).done; )
          if (
            "object" == typeof (h = rr(o, v, c.value, r)) &&
            h &&
            h instanceof d
          )
            return h;
        return new d(!1);
      }).stop = function (t) {
        return new d(!0, t);
      };
    }),
    or = function (t, e, n) {
      if (!(t instanceof e))
        throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
      return t;
    },
    sr = Gt("iterator"),
    ur = !1;
  try {
    var ar = 0,
      hr = {
        next: function () {
          return { done: !!ar++ };
        },
        return: function () {
          ur = !0;
        },
      };
    (hr[sr] = function () {
      return this;
    }),
      Array.from(hr, function () {
        throw 2;
      });
  } catch (t) {}
  var lr = function (t, e, n) {
      var r, i;
      return (
        Nn &&
          "function" == typeof (r = e.constructor) &&
          r !== n &&
          g((i = r.prototype)) &&
          i !== n.prototype &&
          Nn(t, i),
        t
      );
    },
    cr = function (t, e, n) {
      for (var r in e) et(t, r, e[r], n);
      return t;
    },
    fr = Gt("species"),
    vr = P.f,
    dr = Kn.fastKey,
    pr = tt.set,
    yr = tt.getterFor,
    mr =
      ((function (r, t, e, i, o) {
        var s = y[r],
          u = s && s.prototype,
          a = s,
          h = i ? "set" : "add",
          n = {},
          l = function (t) {
            var n = u[t];
            et(
              u,
              t,
              "add" == t
                ? function (t) {
                    return n.call(this, 0 === t ? 0 : t), this;
                  }
                : "delete" == t
                ? function (t) {
                    return !(o && !g(t)) && n.call(this, 0 === t ? 0 : t);
                  }
                : "get" == t
                ? function (t) {
                    return o && !g(t) ? void 0 : n.call(this, 0 === t ? 0 : t);
                  }
                : "has" == t
                ? function (t) {
                    return !(o && !g(t)) && n.call(this, 0 === t ? 0 : t);
                  }
                : function (t, e) {
                    return n.call(this, 0 === t ? 0 : t, e), this;
                  }
            );
          };
        if (
          Et(
            r,
            "function" != typeof s ||
              !(
                o ||
                (u.forEach &&
                  !m(function () {
                    new s().entries().next();
                  }))
              )
          )
        )
          (a = e.getConstructor(t, r, i, h)), (Kn.REQUIRED = !0);
        else if (Et(r, !0)) {
          var c = new a(),
            f = c[h](o ? {} : -0, 1) != c,
            v = m(function () {
              c.has(1);
            }),
            d = (function (t, e) {
              if (!e && !ur) return !1;
              var n = !1;
              try {
                var r = {};
                (r[sr] = function () {
                  return {
                    next: function () {
                      return { done: (n = !0) };
                    },
                  };
                }),
                  t(r);
              } catch (t) {}
              return n;
            })(function (t) {
              new s(t);
            }),
            p =
              !o &&
              m(function () {
                for (var t = new s(), e = 5; e--; ) t[h](e, e);
                return !t.has(-0);
              });
          d ||
            (((a = t(function (t, e) {
              or(t, a, r);
              var n = lr(new s(), t, a);
              return null != e && ir(e, n[h], n, i), n;
            })).prototype = u).constructor = a),
            (v || p) && (l("delete"), l("has"), i && l("get")),
            (p || f) && l(h),
            o && u.clear && delete u.clear;
        }
        (n[r] = a),
          Ct({ global: !0, forced: a != s }, n),
          Oe(a, r),
          o || e.setStrong(a, r, i);
      })(
        "Set",
        function (t) {
          return function () {
            return t(this, arguments.length ? arguments[0] : void 0);
          };
        },
        {
          getConstructor: function (t, n, r, i) {
            var o = t(function (t, e) {
                or(t, o, n),
                  pr(t, {
                    type: n,
                    index: ge(null),
                    first: void 0,
                    last: void 0,
                    size: 0,
                  }),
                  f || (t.size = 0),
                  null != e && ir(e, t[i], t, r);
              }),
              u = yr(n),
              s = function (t, e, n) {
                var r,
                  i,
                  o = u(t),
                  s = a(t, e);
                return (
                  s
                    ? (s.value = n)
                    : ((o.last = s =
                        {
                          index: (i = dr(e, !0)),
                          key: e,
                          value: n,
                          previous: (r = o.last),
                          next: void 0,
                          removed: !1,
                        }),
                      o.first || (o.first = s),
                      r && (r.next = s),
                      f ? o.size++ : t.size++,
                      "F" !== i && (o.index[i] = s)),
                  t
                );
              },
              a = function (t, e) {
                var n,
                  r = u(t),
                  i = dr(e);
                if ("F" !== i) return r.index[i];
                for (n = r.first; n; n = n.next) if (n.key == e) return n;
              };
            return (
              cr(o.prototype, {
                clear: function () {
                  for (var t = u(this), e = t.index, n = t.first; n; )
                    (n.removed = !0),
                      n.previous && (n.previous = n.previous.next = void 0),
                      delete e[n.index],
                      (n = n.next);
                  (t.first = t.last = void 0),
                    f ? (t.size = 0) : (this.size = 0);
                },
                delete: function (t) {
                  var e = u(this),
                    n = a(this, t);
                  if (n) {
                    var r = n.next,
                      i = n.previous;
                    delete e.index[n.index],
                      (n.removed = !0),
                      i && (i.next = r),
                      r && (r.previous = i),
                      e.first == n && (e.first = r),
                      e.last == n && (e.last = i),
                      f ? e.size-- : this.size--;
                  }
                  return !!n;
                },
                forEach: function (t) {
                  for (
                    var e,
                      n = u(this),
                      r = Ae(
                        t,
                        1 < arguments.length ? arguments[1] : void 0,
                        3
                      );
                    (e = e ? e.next : n.first);

                  )
                    for (r(e.value, e.key, this); e && e.removed; )
                      e = e.previous;
                },
                has: function (t) {
                  return !!a(this, t);
                },
              }),
              cr(
                o.prototype,
                r
                  ? {
                      get: function (t) {
                        var e = a(this, t);
                        return e && e.value;
                      },
                      set: function (t, e) {
                        return s(this, 0 === t ? 0 : t, e);
                      },
                    }
                  : {
                      add: function (t) {
                        return s(this, (t = 0 === t ? 0 : t), t);
                      },
                    }
              ),
              f &&
                vr(o.prototype, "size", {
                  get: function () {
                    return u(this).size;
                  },
                }),
              o
            );
          },
          setStrong: function (t, e, n) {
            var r,
              i,
              o = e + " Iterator",
              s = yr(e),
              u = yr(o);
            Yn(
              t,
              e,
              function (t, e) {
                pr(this, {
                  type: o,
                  target: t,
                  state: s(t),
                  kind: e,
                  last: void 0,
                });
              },
              function () {
                for (var t = u(this), e = t.kind, n = t.last; n && n.removed; )
                  n = n.previous;
                return t.target && (t.last = n = n ? n.next : t.state.first)
                  ? "keys" == e
                    ? { value: n.key, done: !1 }
                    : "values" == e
                    ? { value: n.value, done: !1 }
                    : { value: [n.key, n.value], done: !1 }
                  : { value: (t.target = void 0), done: !0 };
              },
              n ? "entries" : "values",
              !n,
              !0
            ),
              (r = it(e)),
              (i = P.f),
              f &&
                r &&
                !r[fr] &&
                i(r, fr, {
                  configurable: !0,
                  get: function () {
                    return this;
                  },
                });
          },
        }
      ),
      function (u) {
        return function (t, e) {
          var n,
            r,
            i = String(c(t)),
            o = ut(e),
            s = i.length;
          return o < 0 || s <= o
            ? u
              ? ""
              : void 0
            : (n = i.charCodeAt(o)) < 55296 ||
              56319 < n ||
              o + 1 === s ||
              (r = i.charCodeAt(o + 1)) < 56320 ||
              57343 < r
            ? u
              ? i.charAt(o)
              : n
            : u
            ? i.slice(o, o + 2)
            : r - 56320 + ((n - 55296) << 10) + 65536;
        };
      }),
    gr = { codeAt: mr(!1), charAt: mr(!0) },
    wr = gr.charAt,
    br = "String Iterator",
    _r = tt.set,
    xr = tt.getterFor(br);
  Yn(
    String,
    "String",
    function (t) {
      _r(this, { type: br, string: String(t), index: 0 });
    },
    function () {
      var t,
        e = xr(this),
        n = e.string,
        r = e.index;
      return r >= n.length
        ? { value: void 0, done: !0 }
        : ((t = wr(n, r)), (e.index += t.length), { value: t, done: !1 });
    }
  );
  var kr = {
      CSSRuleList: 0,
      CSSStyleDeclaration: 0,
      CSSValueList: 0,
      ClientRectList: 0,
      DOMRectList: 0,
      DOMStringList: 0,
      DOMTokenList: 1,
      DataTransferItemList: 0,
      FileList: 0,
      HTMLAllCollection: 0,
      HTMLCollection: 0,
      HTMLFormElement: 0,
      HTMLSelectElement: 0,
      MediaList: 0,
      MimeTypeArray: 0,
      NamedNodeMap: 0,
      NodeList: 1,
      PaintRequestList: 0,
      Plugin: 0,
      PluginArray: 0,
      SVGLengthList: 0,
      SVGNumberList: 0,
      SVGPathSegList: 0,
      SVGPointList: 0,
      SVGStringList: 0,
      SVGTransformList: 0,
      SourceBufferList: 0,
      StyleSheetList: 0,
      TextTrackCueList: 0,
      TextTrackList: 0,
      TouchList: 0,
    },
    Or = Gt("iterator"),
    Sr = Gt("toStringTag"),
    Ar = Hn.values;
  for (var jr in kr) {
    var Mr = y[jr],
      Er = Mr && Mr.prototype;
    if (Er) {
      if (Er[Or] !== Ar)
        try {
          I(Er, Or, Ar);
        } catch (t) {
          Er[Or] = Ar;
        }
      if ((Er[Sr] || I(Er, Sr, jr), kr[jr]))
        for (var Tr in Hn)
          if (Er[Tr] !== Hn[Tr])
            try {
              I(Er, Tr, Hn[Tr]);
            } catch (t) {
              Er[Tr] = Hn[Tr];
            }
    }
  }
  function Cr(t) {
    return (
      (function (t) {
        if (Array.isArray(t)) {
          for (var e = 0, n = new Array(t.length); e < t.length; e++)
            n[e] = t[e];
          return n;
        }
      })(t) ||
      (function (t) {
        if (
          Symbol.iterator in Object(t) ||
          "[object Arguments]" === Object.prototype.toString.call(t)
        )
          return Array.from(t);
      })(t) ||
      (function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance");
      })()
    );
  }
  var Pr = {},
    Ir = [];
  function Nr(t, e) {
    if (Array.isArray(t)) {
      var n = !0,
        r = !1,
        i = void 0;
      try {
        for (
          var o, s = t[Symbol.iterator]();
          !(n = (o = s.next()).done);
          n = !0
        ) {
          Nr(o.value, e);
        }
      } catch (t) {
        (r = !0), (i = t);
      } finally {
        try {
          n || null == s.return || s.return();
        } finally {
          if (r) throw i;
        }
      }
    } else if ("object" !== ce(t))
      Rr(Object.getOwnPropertyNames(e)),
        (Pr[t] = Object.assign(Pr[t] || {}, e));
    else for (var u in t) Nr(u, t[u]);
  }
  function Dr(t) {
    return Pr[t] || {};
  }
  function Rr(t) {
    Ir.push.apply(Ir, Cr(t));
  }
  var Lr = dt.includes;
  Ct(
    { target: "Array", proto: !0 },
    {
      includes: function (t) {
        return Lr(this, t, 1 < arguments.length ? arguments[1] : void 0);
      },
    }
  ),
    kn("includes");
  var Fr,
    zr,
    qr = function () {
      var t = T(this),
        e = "";
      return (
        t.global && (e += "g"),
        t.ignoreCase && (e += "i"),
        t.multiline && (e += "m"),
        t.dotAll && (e += "s"),
        t.unicode && (e += "u"),
        t.sticky && (e += "y"),
        e
      );
    },
    Yr = RegExp.prototype.exec,
    Xr = String.prototype.replace,
    Gr = Yr,
    Vr =
      ((Fr = /a/),
      (zr = /b*/g),
      Yr.call(Fr, "a"),
      Yr.call(zr, "a"),
      0 !== Fr.lastIndex || 0 !== zr.lastIndex),
    Hr = void 0 !== /()??/.exec("")[1];
  (Vr || Hr) &&
    (Gr = function (t) {
      var e,
        n,
        r,
        i,
        o = this;
      return (
        Hr && (n = new RegExp("^" + o.source + "$(?!\\s)", qr.call(o))),
        Vr && (e = o.lastIndex),
        (r = Yr.call(o, t)),
        Vr && r && (o.lastIndex = o.global ? r.index + r[0].length : e),
        Hr &&
          r &&
          1 < r.length &&
          Xr.call(r[0], n, function () {
            for (i = 1; i < arguments.length - 2; i++)
              void 0 === arguments[i] && (r[i] = void 0);
          }),
        r
      );
    });
  var Br = Gr;
  Ct({ target: "RegExp", proto: !0, forced: /./.exec !== Br }, { exec: Br });
  var Ur = Gt("match"),
    $r = function (t) {
      var e;
      return g(t) && (void 0 !== (e = t[Ur]) ? !!e : "RegExp" == h(t));
    },
    Qr = Gt("match");
  Ct(
    {
      target: "String",
      proto: !0,
      forced: !(function (e) {
        var n = /./;
        try {
          "/./"[e](n);
        } catch (t) {
          try {
            return (n[Qr] = !1), "/./"[e](n);
          } catch (t) {}
        }
        return !1;
      })("includes"),
    },
    {
      includes: function (t) {
        return !!~String(c(this)).indexOf(
          (function (t) {
            if ($r(t))
              throw TypeError("The method doesn't accept regular expressions");
            return t;
          })(t),
          1 < arguments.length ? arguments[1] : void 0
        );
      },
    }
  );
  var Wr = Gt("species"),
    Jr = !m(function () {
      var t = /./;
      return (
        (t.exec = function () {
          var t = [];
          return (t.groups = { a: "7" }), t;
        }),
        "7" !== "".replace(t, "$<a>")
      );
    }),
    Zr = !m(function () {
      var t = /(?:)/,
        e = t.exec;
      t.exec = function () {
        return e.apply(this, arguments);
      };
      var n = "ab".split(t);
      return 2 !== n.length || "a" !== n[0] || "b" !== n[1];
    }),
    Kr = function (n, t, e, r) {
      var i = Gt(n),
        o = !m(function () {
          var t = {};
          return (
            (t[i] = function () {
              return 7;
            }),
            7 != ""[n](t)
          );
        }),
        s =
          o &&
          !m(function () {
            var t = !1,
              e = /a/;
            return (
              "split" === n &&
                (((e = { constructor: {} }).constructor[Wr] = function () {
                  return e;
                }),
                (e.flags = ""),
                (e[i] = /./[i])),
              (e.exec = function () {
                return (t = !0), null;
              }),
              e[i](""),
              !t
            );
          });
      if (!o || !s || ("replace" === n && !Jr) || ("split" === n && !Zr)) {
        var u = /./[i],
          a = e(i, ""[n], function (t, e, n, r, i) {
            return e.exec === Br
              ? o && !i
                ? { done: !0, value: u.call(e, n, r) }
                : { done: !0, value: t.call(n, e, r) }
              : { done: !1 };
          }),
          h = a[0],
          l = a[1];
        et(String.prototype, n, h),
          et(
            RegExp.prototype,
            i,
            2 == t
              ? function (t, e) {
                  return l.call(t, this, e);
                }
              : function (t) {
                  return l.call(t, this);
                }
          ),
          r && I(RegExp.prototype[i], "sham", !0);
      }
    },
    ti = gr.charAt,
    ei = function (t, e, n) {
      return e + (n ? ti(t, e).length : 1);
    },
    ni = function (t, e) {
      var n = t.exec;
      if ("function" == typeof n) {
        var r = n.call(t, e);
        if ("object" != typeof r)
          throw TypeError(
            "RegExp exec method returned something other than an Object or null"
          );
        return r;
      }
      if ("RegExp" !== h(t))
        throw TypeError("RegExp#exec called on incompatible receiver");
      return Br.call(t, e);
    },
    ri = Math.max,
    ii = Math.min,
    oi = Math.floor,
    si = /\$([$&'`]|\d\d?|<[^>]*>)/g,
    ui = /\$([$&'`]|\d\d?)/g;
  Kr("replace", 2, function (i, _, x) {
    return [
      function (t, e) {
        var n = c(this),
          r = null == t ? void 0 : t[i];
        return void 0 !== r ? r.call(t, n, e) : _.call(String(n), t, e);
      },
      function (t, e) {
        var n = x(_, t, this, e);
        if (n.done) return n.value;
        var r = T(t),
          i = String(this),
          o = "function" == typeof e;
        o || (e = String(e));
        var s = r.global;
        if (s) {
          var u = r.unicode;
          r.lastIndex = 0;
        }
        for (var a = []; ; ) {
          var h = ni(r, i);
          if (null === h) break;
          if ((a.push(h), !s)) break;
          "" === String(h[0]) && (r.lastIndex = ei(i, ht(r.lastIndex), u));
        }
        for (var l, c = "", f = 0, v = 0; v < a.length; v++) {
          h = a[v];
          for (
            var d = String(h[0]),
              p = ri(ii(ut(h.index), i.length), 0),
              y = [],
              m = 1;
            m < h.length;
            m++
          )
            y.push(void 0 === (l = h[m]) ? l : String(l));
          var g = h.groups;
          if (o) {
            var w = [d].concat(y, p, i);
            void 0 !== g && w.push(g);
            var b = String(e.apply(void 0, w));
          } else b = k(d, i, p, y, g, e);
          f <= p && ((c += i.slice(f, p) + b), (f = p + d.length));
        }
        return c + i.slice(f);
      },
    ];
    function k(o, s, u, a, h, t) {
      var l = u + o.length,
        c = a.length,
        e = ui;
      return (
        void 0 !== h && ((h = It(h)), (e = si)),
        _.call(t, e, function (t, e) {
          var n;
          switch (e.charAt(0)) {
            case "$":
              return "$";
            case "&":
              return o;
            case "`":
              return s.slice(0, u);
            case "'":
              return s.slice(l);
            case "<":
              n = h[e.slice(1, -1)];
              break;
            default:
              var r = +e;
              if (0 === r) return t;
              if (c < r) {
                var i = oi(r / 10);
                return 0 === i
                  ? t
                  : i <= c
                  ? void 0 === a[i - 1]
                    ? e.charAt(1)
                    : a[i - 1] + e.charAt(1)
                  : t;
              }
              n = a[r - 1];
          }
          return void 0 === n ? "" : n;
        })
      );
    }
  });
  var ai,
    hi = "\t\n\v\f\r                　\u2028\u2029\ufeff",
    li = "[" + hi + "]",
    ci = RegExp("^" + li + li + "*"),
    fi = RegExp(li + li + "*$"),
    vi = function (n) {
      return function (t) {
        var e = String(c(t));
        return (
          1 & n && (e = e.replace(ci, "")), 2 & n && (e = e.replace(fi, "")), e
        );
      };
    },
    di = { start: vi(1), end: vi(2), trim: vi(3) },
    pi = di.trim;
  function yi(t, e) {
    var n,
      r = t.length,
      i = [];
    for (n = 0; n < r; n++) i.push(e(t[n]));
    return i;
  }
  function mi(t) {
    return ((t % 360) * Math.PI) / 180;
  }
  function gi(t) {
    return t.toLowerCase().replace(/-(.)/g, function (t, e) {
      return e.toUpperCase();
    });
  }
  function wi(t) {
    return t.replace(/([A-Z])/g, function (t, e) {
      return "-" + e.toLowerCase();
    });
  }
  function bi(t) {
    return t.charAt(0).toUpperCase() + t.slice(1);
  }
  function _i(t, e, n, r) {
    return (
      (null != e && null != n) ||
        ((r = r || t.bbox()),
        null == e
          ? (e = (r.width / r.height) * n)
          : null == n && (n = (r.height / r.width) * e)),
      { width: e, height: n }
    );
  }
  function xi(t, e) {
    var n,
      r,
      i = t.origin;
    if ("string" == typeof i || null == i) {
      var o = (i || "center").toLowerCase().trim(),
        s = e.bbox(),
        u = s.height,
        a = s.width,
        h = s.x,
        l = s.y,
        c = o.includes("left") ? h : o.includes("right") ? h + a : h + a / 2,
        f = o.includes("top") ? l : o.includes("bottom") ? l + u : l + u / 2;
      (n = null != t.ox ? t.ox : c), (r = null != t.oy ? t.oy : f);
    } else (n = i[0]), (r = i[1]);
    return [n, r];
  }
  Ct(
    {
      target: "String",
      proto: !0,
      forced:
        ((ai = "trim"),
        m(function () {
          return !!hi[ai]() || "​᠎" != "​᠎"[ai]() || hi[ai].name !== ai;
        })),
    },
    {
      trim: function () {
        return pi(this);
      },
    }
  );
  var ki = {
      __proto__: null,
      map: yi,
      filter: function (t, e) {
        var n,
          r = t.length,
          i = [];
        for (n = 0; n < r; n++) e(t[n]) && i.push(t[n]);
        return i;
      },
      radians: mi,
      degrees: function (t) {
        return ((180 * t) / Math.PI) % 360;
      },
      camelCase: gi,
      unCamelCase: wi,
      capitalize: bi,
      proportionalSize: _i,
      getOrigin: xi,
    },
    Oi = "http://www.w3.org/2000/svg",
    Si = "http://www.w3.org/2000/xmlns/",
    Ai = "http://www.w3.org/1999/xlink",
    ji = "http://svgjs.com/svgjs",
    Mi = { __proto__: null, ns: Oi, xmlns: Si, xlink: Ai, svgjs: ji },
    Ei = {
      window: "undefined" == typeof window ? null : window,
      document: "undefined" == typeof document ? null : document,
    };
  function Ti(t, e) {
    if (!(t instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  var Ci = function t() {
      Ti(this, t);
    },
    Pi = {},
    Ii = "___SYMBOL___ROOT___";
  function Ni(t) {
    return Ei.document.createElementNS(Oi, t);
  }
  function Di(t) {
    if (t instanceof Ci) return t;
    if ("object" === ce(t)) return Fi(t);
    if (null == t) return new Pi[Ii]();
    if ("string" == typeof t && "<" !== t.charAt(0))
      return Fi(Ei.document.querySelector(t));
    var e = Ni("svg");
    return (e.innerHTML = t), (t = Fi(e.firstChild));
  }
  function Ri(t, e) {
    return e instanceof Ei.window.Node ? e : Ni(t);
  }
  function Li(t) {
    if (!t) return null;
    if (t.instance instanceof Ci) return t.instance;
    var e = bi(t.nodeName || "Dom");
    return (
      "LinearGradient" === e || "RadialGradient" === e
        ? (e = "Gradient")
        : Pi[e] || (e = "Dom"),
      new Pi[e](t)
    );
  }
  var Fi = Li;
  function zi(t) {
    var e =
        1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : t.name,
      n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
    return (
      (Pi[e] = t),
      n && (Pi[Ii] = t),
      Rr(Object.getOwnPropertyNames(t.prototype)),
      t
    );
  }
  function qi(t) {
    return Pi[t];
  }
  var Yi = 1e3;
  function Xi(t) {
    return "Svgjs" + bi(t) + Yi++;
  }
  function Gi(t) {
    for (var e = t.children.length - 1; 0 <= e; e--) Gi(t.children[e]);
    return t.id ? Li(t).id(Xi(t.nodeName)) : Li(t);
  }
  function Vi(t, e, n) {
    var r, i;
    for (i = (t = Array.isArray(t) ? t : [t]).length - 1; 0 <= i; i--)
      for (r in e) {
        var o = e[r];
        n && (o = Hi(e[r])), (t[i].prototype[r] = o);
      }
  }
  function Hi(i) {
    return function () {
      for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
        e[n] = arguments[n];
      var r = e[e.length - 1];
      return !r || r.constructor !== Object || r instanceof Array
        ? i.apply(this, e)
        : i.apply(this, e.slice(0, -1)).attr(r);
    };
  }
  Nr("Dom", {
    siblings: function () {
      return this.parent().children();
    },
    position: function () {
      return this.parent().index(this);
    },
    next: function () {
      return this.siblings()[this.position() + 1];
    },
    prev: function () {
      return this.siblings()[this.position() - 1];
    },
    forward: function () {
      var t = this.position() + 1,
        e = this.parent();
      return (
        e.removeElement(this).add(this, t),
        "function" == typeof e.isRoot &&
          e.isRoot() &&
          e.node.appendChild(e.defs().node),
        this
      );
    },
    backward: function () {
      var t = this.position();
      return (
        0 < t &&
          this.parent()
            .removeElement(this)
            .add(this, t - 1),
        this
      );
    },
    front: function () {
      var t = this.parent();
      return (
        t.node.appendChild(this.node),
        "function" == typeof t.isRoot &&
          t.isRoot() &&
          t.node.appendChild(t.defs().node),
        this
      );
    },
    back: function () {
      return (
        0 < this.position() && this.parent().removeElement(this).add(this, 0),
        this
      );
    },
    before: function (t) {
      (t = Di(t)).remove();
      var e = this.position();
      return this.parent().add(t, e), this;
    },
    after: function (t) {
      (t = Di(t)).remove();
      var e = this.position();
      return this.parent().add(t, e + 1), this;
    },
    insertBefore: function (t) {
      return (t = Di(t)).before(this), this;
    },
    insertAfter: function (t) {
      return (t = Di(t)).after(this), this;
    },
  });
  var Bi = Ce.filter;
  Ct(
    { target: "Array", proto: !0, forced: !Wt("filter") },
    {
      filter: function (t) {
        return Bi(this, t, 1 < arguments.length ? arguments[1] : void 0);
      },
    }
  );
  var Ui = function (t, e) {
      var n = [][t];
      return (
        !n ||
        !m(function () {
          n.call(
            null,
            e ||
              function () {
                throw 1;
              },
            1
          );
        })
      );
    },
    $i = dt.indexOf,
    Qi = [].indexOf,
    Wi = !!Qi && 1 / [1].indexOf(1, -0) < 0,
    Ji = Ui("indexOf");
  Ct(
    { target: "Array", proto: !0, forced: Wi || Ji },
    {
      indexOf: function (t) {
        return Wi
          ? Qi.apply(this, arguments) || 0
          : $i(this, t, 1 < arguments.length ? arguments[1] : void 0);
      },
    }
  );
  var Zi = [].join,
    Ki = _ != Object,
    to = Ui("join", ",");
  Ct(
    { target: "Array", proto: !0, forced: Ki || to },
    {
      join: function (t) {
        return Zi.call(d(this), void 0 === t ? "," : t);
      },
    }
  );
  var eo = Gt("species"),
    no = [].push,
    ro = Math.min,
    io = 4294967295,
    oo = !m(function () {
      return !RegExp(io, "y");
    });
  Kr(
    "split",
    2,
    function (i, g, w) {
      var b;
      return (
        (b =
          "c" == "abbc".split(/(b)*/)[1] ||
          4 != "test".split(/(?:)/, -1).length ||
          2 != "ab".split(/(?:ab)*/).length ||
          4 != ".".split(/(.?)(.?)/).length ||
          1 < ".".split(/()()/).length ||
          "".split(/.?/).length
            ? function (t, e) {
                var n = String(c(this)),
                  r = void 0 === e ? io : e >>> 0;
                if (0 === r) return [];
                if (void 0 === t) return [n];
                if (!$r(t)) return g.call(n, t, r);
                for (
                  var i,
                    o,
                    s,
                    u = [],
                    a =
                      (t.ignoreCase ? "i" : "") +
                      (t.multiline ? "m" : "") +
                      (t.unicode ? "u" : "") +
                      (t.sticky ? "y" : ""),
                    h = 0,
                    l = new RegExp(t.source, a + "g");
                  (i = Br.call(l, n)) &&
                  !(
                    h < (o = l.lastIndex) &&
                    (u.push(n.slice(h, i.index)),
                    1 < i.length &&
                      i.index < n.length &&
                      no.apply(u, i.slice(1)),
                    (s = i[0].length),
                    (h = o),
                    u.length >= r)
                  );

                )
                  l.lastIndex === i.index && l.lastIndex++;
                return (
                  h === n.length
                    ? (!s && l.test("")) || u.push("")
                    : u.push(n.slice(h)),
                  u.length > r ? u.slice(0, r) : u
                );
              }
            : "0".split(void 0, 0).length
            ? function (t, e) {
                return void 0 === t && 0 === e ? [] : g.call(this, t, e);
              }
            : g),
        [
          function (t, e) {
            var n = c(this),
              r = null == t ? void 0 : t[i];
            return void 0 !== r ? r.call(t, n, e) : b.call(String(n), t, e);
          },
          function (t, e) {
            var n = w(b, t, this, e, b !== g);
            if (n.done) return n.value;
            var r,
              i,
              o,
              s = T(t),
              u = String(this),
              a =
                ((r = RegExp),
                void 0 === (o = T(s).constructor) || null == (i = T(o)[eo])
                  ? r
                  : Se(i)),
              h = s.unicode,
              l =
                (s.ignoreCase ? "i" : "") +
                (s.multiline ? "m" : "") +
                (s.unicode ? "u" : "") +
                (oo ? "y" : "g"),
              c = new a(oo ? s : "^(?:" + s.source + ")", l),
              f = void 0 === e ? io : e >>> 0;
            if (0 === f) return [];
            if (0 === u.length) return null === ni(c, u) ? [u] : [];
            for (var v = 0, d = 0, A = []; d < u.length; ) {
              c.lastIndex = oo ? d : 0;
              var p,
                y = ni(c, oo ? u : u.slice(d));
              if (
                null === y ||
                (p = ro(ht(c.lastIndex + (oo ? 0 : d)), u.length)) === v
              )
                d = ei(u, d, h);
              else {
                if ((A.push(u.slice(v, d)), A.length === f)) return A;
                for (var m = 1; m <= y.length - 1; m++)
                  if ((A.push(y[m]), A.length === f)) return A;
                d = v = p;
              }
            }
            return A.push(u.slice(v)), A;
          },
        ]
      );
    },
    !oo
  );
  var so = /^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i,
    uo = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
    ao = /rgb\((\d+),(\d+),(\d+)\)/,
    ho = /(#[a-z0-9\-_]+)/i,
    lo = /\)\s*,?\s*/,
    co = /\s/g,
    fo = /^#[a-f0-9]{3,6}$/i,
    vo = /^rgb\(/,
    po = /^(\s+)?$/,
    yo = /^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
    mo = /\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i,
    go = /[\s,]+/,
    wo = /([^e])-/gi,
    bo = /[MLHVCSQTAZ]/gi,
    _o = /[MLHVCSQTAZ]/i,
    xo = /((\d?\.\d+(?:e[+-]?\d+)?)((?:\.\d+(?:e[+-]?\d+)?)+))+/gi,
    ko = /\./g,
    Oo = {
      __proto__: null,
      numberAndUnit: so,
      hex: uo,
      rgb: ao,
      reference: ho,
      transforms: lo,
      whitespace: co,
      isHex: fo,
      isRgb: vo,
      isCss: /[^:]+:[^;]+;?/,
      isBlank: po,
      isNumber: yo,
      isPercent: /^-?[\d.]+%$/,
      isImage: mo,
      delimiter: go,
      hyphen: wo,
      pathLetters: bo,
      isPathLetter: _o,
      numbersWithDots: xo,
      dots: ko,
    };
  Nr("Dom", {
    classes: function () {
      var t = this.attr("class");
      return null == t ? [] : t.trim().split(go);
    },
    hasClass: function (t) {
      return -1 !== this.classes().indexOf(t);
    },
    addClass: function (t) {
      if (!this.hasClass(t)) {
        var e = this.classes();
        e.push(t), this.attr("class", e.join(" "));
      }
      return this;
    },
    removeClass: function (e) {
      return (
        this.hasClass(e) &&
          this.attr(
            "class",
            this.classes()
              .filter(function (t) {
                return t !== e;
              })
              .join(" ")
          ),
        this
      );
    },
    toggleClass: function (t) {
      return this.hasClass(t) ? this.removeClass(t) : this.addClass(t);
    },
  });
  var So = Ce.forEach,
    Ao = Ui("forEach")
      ? function (t) {
          return So(this, t, 1 < arguments.length ? arguments[1] : void 0);
        }
      : [].forEach;
  for (var jo in (Ct(
    { target: "Array", proto: !0, forced: [].forEach != Ao },
    { forEach: Ao }
  ),
  kr)) {
    var Mo = y[jo],
      Eo = Mo && Mo.prototype;
    if (Eo && Eo.forEach !== Ao)
      try {
        I(Eo, "forEach", Ao);
      } catch (t) {
        Eo.forEach = Ao;
      }
  }
  Nr("Dom", {
    css: function (t, e) {
      var n = {};
      if (0 === arguments.length)
        return (
          this.node.style.cssText
            .split(/\s*;\s*/)
            .filter(function (t) {
              return !!t.length;
            })
            .forEach(function (t) {
              var e = t.split(/\s*:\s*/);
              n[e[0]] = e[1];
            }),
          n
        );
      if (arguments.length < 2) {
        if (Array.isArray(t)) {
          var r = !0,
            i = !1,
            o = void 0;
          try {
            for (
              var s, u = t[Symbol.iterator]();
              !(r = (s = u.next()).done);
              r = !0
            ) {
              var a = gi(s.value);
              n[a] = this.node.style[a];
            }
          } catch (t) {
            (i = !0), (o = t);
          } finally {
            try {
              r || null == u.return || u.return();
            } finally {
              if (i) throw o;
            }
          }
          return n;
        }
        if ("string" == typeof t) return this.node.style[gi(t)];
        if ("object" === ce(t))
          for (var h in t)
            this.node.style[gi(h)] = null == t[h] || po.test(t[h]) ? "" : t[h];
      }
      return (
        2 === arguments.length &&
          (this.node.style[gi(t)] = null == e || po.test(e) ? "" : e),
        this
      );
    },
    show: function () {
      return this.css("display", "");
    },
    hide: function () {
      return this.css("display", "none");
    },
    visible: function () {
      return "none" !== this.css("display");
    },
  }),
    Nr("Dom", {
      data: function (e, t, n) {
        if ("object" === ce(e)) for (t in e) this.data(t, e[t]);
        else if (arguments.length < 2)
          try {
            return JSON.parse(this.attr("data-" + e));
          } catch (t) {
            return this.attr("data-" + e);
          }
        else
          this.attr(
            "data-" + e,
            null === t
              ? null
              : !0 === n || "string" == typeof t || "number" == typeof t
              ? t
              : JSON.stringify(t)
          );
        return this;
      },
    }),
    Nr("Dom", {
      remember: function (t, e) {
        if ("object" === ce(t)) for (var n in t) this.remember(n, t[n]);
        else {
          if (1 === arguments.length) return this.memory()[t];
          this.memory()[t] = e;
        }
        return this;
      },
      forget: function () {
        if (0 === arguments.length) this._memory = {};
        else
          for (var t = arguments.length - 1; 0 <= t; t--)
            delete this.memory()[arguments[t]];
        return this;
      },
      memory: function () {
        return (this._memory = this._memory || {});
      },
    });
  var To = function (h) {
      return function (t, e, n, r) {
        Se(e);
        var i = It(t),
          o = _(i),
          s = ht(i.length),
          u = h ? s - 1 : 0,
          a = h ? -1 : 1;
        if (n < 2)
          for (;;) {
            if (u in o) {
              (r = o[u]), (u += a);
              break;
            }
            if (((u += a), h ? u < 0 : s <= u))
              throw TypeError("Reduce of empty array with no initial value");
          }
        for (; h ? 0 <= u : u < s; u += a) u in o && (r = e(r, o[u], u, i));
        return r;
      };
    },
    Co = { left: To(!1), right: To(!0) }.left;
  Ct(
    { target: "Array", proto: !0, forced: Ui("reduce") },
    {
      reduce: function (t) {
        return Co(
          this,
          t,
          arguments.length,
          1 < arguments.length ? arguments[1] : void 0
        );
      },
    }
  );
  var Po = 0,
    Io = {};
  function No(t) {
    var e = t.getEventHolder();
    return e === Ei.window && (e = Io), e.events || (e.events = {}), e.events;
  }
  function Do(t) {
    return t.getEventTarget();
  }
  function Ro(t, e, r, n, i) {
    var o = r.bind(n || t),
      s = Di(t),
      u = No(s),
      a = Do(s);
    (e = Array.isArray(e) ? e : e.split(go)),
      r._svgjsListenerId || (r._svgjsListenerId = ++Po),
      e.forEach(function (t) {
        var e = t.split(".")[0],
          n = t.split(".")[1] || "*";
        (u[e] = u[e] || {}),
          (u[e][n] = u[e][n] || {}),
          (u[e][n][r._svgjsListenerId] = o),
          a.addEventListener(e, o, i || !1);
      });
  }
  function Lo(t, e, s, u) {
    var a = Di(t),
      h = No(a),
      l = Do(a);
    ("function" != typeof s || (s = s._svgjsListenerId)) &&
      (e = Array.isArray(e) ? e : (e || "").split(go)).forEach(function (t) {
        var e,
          n,
          r,
          i = t && t.split(".")[0],
          o = t && t.split(".")[1];
        if (s)
          h[i] &&
            h[i][o || "*"] &&
            (l.removeEventListener(i, h[i][o || "*"][s], u || !1),
            delete h[i][o || "*"][s]);
        else if (i && o) {
          if (h[i] && h[i][o]) {
            for (n in h[i][o]) Lo(l, [i, o].join("."), n);
            delete h[i][o];
          }
        } else if (o)
          for (t in h) for (e in h[t]) o === e && Lo(l, [t, o].join("."));
        else if (i) {
          if (h[i]) {
            for (e in h[i]) Lo(l, [i, e].join("."));
            delete h[i];
          }
        } else {
          for (t in h) Lo(l, t);
          (r = a.getEventHolder()).events && (r.events = {});
        }
      });
  }
  function Fo(t, e, n) {
    var r = Do(t);
    return (
      e instanceof Ei.window.Event ||
        (e = new Ei.window.CustomEvent(e, { detail: n, cancelable: !0 })),
      r.dispatchEvent(e),
      e
    );
  }
  var zo = Gt("isConcatSpreadable"),
    qo = 9007199254740991,
    Yo = "Maximum allowed index exceeded",
    Xo =
      51 <= $t ||
      !m(function () {
        var t = [];
        return (t[zo] = !1), t.concat()[0] !== t;
      }),
    Go = Wt("concat"),
    Vo = function (t) {
      if (!g(t)) return !1;
      var e = t[zo];
      return void 0 !== e ? !!e : Ft(t);
    };
  Ct(
    { target: "Array", proto: !0, forced: !Xo || !Go },
    {
      concat: function (t) {
        var e,
          n,
          r,
          i,
          o,
          s = It(this),
          A = Me(s, 0),
          u = 0;
        for (e = -1, r = arguments.length; e < r; e++)
          if (((o = -1 === e ? s : arguments[e]), Vo(o))) {
            if (((i = ht(o.length)), qo < u + i)) throw TypeError(Yo);
            for (n = 0; n < i; n++, u++) n in o && zt(A, u, o[n]);
          } else {
            if (qo <= u) throw TypeError(Yo);
            zt(A, u++, o);
          }
        return (A.length = u), A;
      },
    }
  );
  var Ho = Ce.map;
  Ct(
    { target: "Array", proto: !0, forced: !Wt("map") },
    {
      map: function (t) {
        return Ho(this, t, 1 < arguments.length ? arguments[1] : void 0);
      },
    }
  );
  var Bo = Date.prototype,
    Uo = "Invalid Date",
    $o = "toString",
    Qo = Bo[$o],
    Wo = Bo.getTime;
  new Date(NaN) + "" != Uo &&
    et(Bo, $o, function () {
      var t = Wo.call(this);
      return t == t ? Qo.call(this) : Uo;
    });
  var Jo = di.trim,
    Zo = y.parseInt,
    Ko = /^[+-]?0[Xx]/,
    ts =
      8 !== Zo(hi + "08") || 22 !== Zo(hi + "0x16")
        ? function (t, e) {
            var n = Jo(String(t));
            return Zo(n, e >>> 0 || (Ko.test(n) ? 16 : 10));
          }
        : Zo;
  Ct({ global: !0, forced: parseInt != ts }, { parseInt: ts });
  var es = "toString",
    ns = RegExp.prototype,
    rs = ns[es],
    is = m(function () {
      return "/a/b" != rs.call({ source: "a", flags: "b" });
    }),
    os = rs.name != es;
  function ss(t, e) {
    return (
      (function (t) {
        if (Array.isArray(t)) return t;
      })(t) ||
      (function (t, e) {
        if (
          Symbol.iterator in Object(t) ||
          "[object Arguments]" === Object.prototype.toString.call(t)
        ) {
          var n = [],
            r = !0,
            i = !1,
            o = void 0;
          try {
            for (
              var s, u = t[Symbol.iterator]();
              !(r = (s = u.next()).done) &&
              (n.push(s.value), !e || n.length !== e);
              r = !0
            );
          } catch (t) {
            (i = !0), (o = t);
          } finally {
            try {
              r || null == u.return || u.return();
            } finally {
              if (i) throw o;
            }
          }
          return n;
        }
      })(t, e) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      })()
    );
  }
  function us(t, e) {
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(t, r.key, r);
    }
  }
  function as(t, e, n) {
    return e && us(t.prototype, e), n && us(t, n), t;
  }
  function hs(t) {
    var e = Math.round(t),
      n = Math.max(0, Math.min(255, e)).toString(16);
    return 1 === n.length ? "0" + n : n;
  }
  function ls(t, e) {
    for (var n = e.length; n--; ) if (null == t[e[n]]) return !1;
    return !0;
  }
  function cs(t, e, n) {
    return (
      n < 0 && (n += 1),
      1 < n && (n -= 1),
      n < 1 / 6
        ? t + 6 * (e - t) * n
        : n < 0.5
        ? e
        : n < 2 / 3
        ? t + (e - t) * (2 / 3 - n) * 6
        : t
    );
  }
  (is || os) &&
    et(
      RegExp.prototype,
      es,
      function () {
        var t = T(this),
          e = String(t.source),
          n = t.flags;
        return (
          "/" +
          e +
          "/" +
          String(
            void 0 === n && t instanceof RegExp && !("flags" in ns)
              ? qr.call(t)
              : n
          )
        );
      },
      { unsafe: !0 }
    );
  var fs = (function () {
      function T() {
        Ti(this, T), this.init.apply(this, arguments);
      }
      return (
        as(
          T,
          [
            {
              key: "init",
              value: function () {
                var t,
                  e,
                  n,
                  r,
                  i =
                    0 < arguments.length && void 0 !== arguments[0]
                      ? arguments[0]
                      : 0,
                  o =
                    1 < arguments.length && void 0 !== arguments[1]
                      ? arguments[1]
                      : 0,
                  s =
                    2 < arguments.length && void 0 !== arguments[2]
                      ? arguments[2]
                      : 0,
                  u =
                    3 < arguments.length && void 0 !== arguments[3]
                      ? arguments[3]
                      : 0,
                  a =
                    4 < arguments.length && void 0 !== arguments[4]
                      ? arguments[4]
                      : "rgb";
                if (((i = i || 0), this.space))
                  for (var h in this.space) delete this[this.space[h]];
                if ("number" == typeof i)
                  (a = "string" == typeof u ? u : a),
                    (u = "string" == typeof u ? 0 : u),
                    Object.assign(this, {
                      _a: i,
                      _b: o,
                      _c: s,
                      _d: u,
                      space: a,
                    });
                else if (i instanceof Array)
                  (this.space =
                    o || ("string" == typeof i[3] ? i[3] : i[4]) || "rgb"),
                    Object.assign(this, {
                      _a: i[0],
                      _b: i[1],
                      _c: i[2],
                      _d: i[3] || 0,
                    });
                else if (i instanceof Object) {
                  var l =
                    ((n = o),
                    ((r = ls((e = i), "rgb")
                      ? { _a: e.r, _b: e.g, _c: e.b, space: "rgb" }
                      : ls(e, "xyz")
                      ? { _a: e.x, _b: e.y, _c: e.z, _d: 0, space: "xyz" }
                      : ls(e, "hsl")
                      ? { _a: e.h, _b: e.s, _c: e.l, _d: 0, space: "hsl" }
                      : ls(e, "lab")
                      ? { _a: e.l, _b: e.a, _c: e.b, _d: 0, space: "lab" }
                      : ls(e, "lch")
                      ? { _a: e.l, _b: e.c, _c: e.h, _d: 0, space: "lch" }
                      : ls(e, "cmyk")
                      ? { _a: e.c, _b: e.m, _c: e.y, _d: e.k, space: "cmyk" }
                      : { _a: 0, _b: 0, _c: 0, space: "rgb" }).space =
                      n || r.space),
                    r);
                  Object.assign(this, l);
                } else if ("string" == typeof i)
                  if (vo.test(i)) {
                    var c = i.replace(co, ""),
                      f = ss(
                        ao
                          .exec(c)
                          .slice(1, 4)
                          .map(function (t) {
                            return parseInt(t);
                          }),
                        3
                      ),
                      v = f[0],
                      d = f[1],
                      p = f[2];
                    Object.assign(this, {
                      _a: v,
                      _b: d,
                      _c: p,
                      _d: 0,
                      space: "rgb",
                    });
                  } else {
                    if (!fo.test(i))
                      throw Error(
                        "Unsupported string format, can't construct Color"
                      );
                    var y = ss(
                        uo
                          .exec(
                            ((t = i),
                            4 === t.length
                              ? [
                                  "#",
                                  t.substring(1, 2),
                                  t.substring(1, 2),
                                  t.substring(2, 3),
                                  t.substring(2, 3),
                                  t.substring(3, 4),
                                  t.substring(3, 4),
                                ].join("")
                              : t)
                          )
                          .map(function (t) {
                            return parseInt(t, 16);
                          }),
                        4
                      ),
                      m = y[1],
                      g = y[2],
                      w = y[3];
                    Object.assign(this, {
                      _a: m,
                      _b: g,
                      _c: w,
                      _d: 0,
                      space: "rgb",
                    });
                  }
                var b = this._a,
                  _ = this._b,
                  x = this._c,
                  k = this._d,
                  O =
                    "rgb" === this.space
                      ? { r: b, g: _, b: x }
                      : "xyz" === this.space
                      ? { x: b, y: _, z: x }
                      : "hsl" === this.space
                      ? { h: b, s: _, l: x }
                      : "lab" === this.space
                      ? { l: b, a: _, b: x }
                      : "lch" === this.space
                      ? { l: b, c: _, h: x }
                      : "cmyk" === this.space
                      ? { c: b, m: _, y: x, k: k }
                      : {};
                Object.assign(this, O);
              },
            },
            {
              key: "rgb",
              value: function () {
                if ("rgb" === this.space) return this;
                if ("lab" === (O = this.space) || "xyz" === O || "lch" === O) {
                  var t = this.x,
                    e = this.y,
                    n = this.z;
                  if ("lab" === this.space || "lch" === this.space) {
                    var r = this.l,
                      i = this.a,
                      o = this.b;
                    if ("lch" === this.space) {
                      var s = this.c,
                        u = this.h,
                        a = Math.PI / 180;
                      (i = s * Math.cos(a * u)), (o = s * Math.sin(a * u));
                    }
                    var h = (r + 16) / 116,
                      l = i / 500 + h,
                      c = h - o / 200,
                      f = 16 / 116,
                      v = 0.008856;
                    (t =
                      0.95047 *
                      (Math.pow(l, 3) > v ? Math.pow(l, 3) : (l - f) / 7.787)),
                      (e =
                        1 *
                        (Math.pow(h, 3) > v
                          ? Math.pow(h, 3)
                          : (h - f) / 7.787)),
                      (n =
                        1.08883 *
                        (Math.pow(c, 3) > v
                          ? Math.pow(c, 3)
                          : (c - f) / 7.787));
                  }
                  var d = 3.2406 * t + -1.5372 * e + -0.4986 * n,
                    p = -0.9689 * t + 1.8758 * e + 0.0415 * n,
                    y = 0.0557 * t + -0.204 * e + 1.057 * n,
                    m = Math.pow,
                    g = 0.0031308;
                  return new T(
                    255 * (g < d ? 1.055 * m(d, 1 / 2.4) - 0.055 : 12.92 * d),
                    255 * (g < p ? 1.055 * m(p, 1 / 2.4) - 0.055 : 12.92 * p),
                    255 * (g < y ? 1.055 * m(y, 1 / 2.4) - 0.055 : 12.92 * y)
                  );
                }
                if ("hsl" === this.space) {
                  var w = this.h,
                    b = this.s,
                    _ = this.l;
                  if (((w /= 360), (_ /= 100), 0 === (b /= 100)))
                    return new T((_ *= 255), _, _);
                  var x = _ < 0.5 ? _ * (1 + b) : _ + b - _ * b,
                    k = 2 * _ - x;
                  return new T(
                    255 * cs(k, x, w + 1 / 3),
                    255 * cs(k, x, w),
                    255 * cs(k, x, w - 1 / 3)
                  );
                }
                if ("cmyk" !== this.space) return this;
                var O,
                  S = this.c,
                  j = this.m,
                  M = this.y,
                  E = this.k;
                return new T(
                  255 * (1 - Math.min(1, S * (1 - E) + E)),
                  255 * (1 - Math.min(1, j * (1 - E) + E)),
                  255 * (1 - Math.min(1, M * (1 - E) + E))
                );
              },
            },
            {
              key: "lab",
              value: function () {
                var t = this.xyz(),
                  e = t.x,
                  n = t.y;
                return new T(
                  116 * n - 16,
                  500 * (e - n),
                  200 * (n - t.z),
                  "lab"
                );
              },
            },
            {
              key: "xyz",
              value: function () {
                var t = this.rgb(),
                  e = ss(
                    [t._a, t._b, t._c].map(function (t) {
                      return t / 255;
                    }),
                    3
                  ),
                  n = e[0],
                  r = e[1],
                  i = e[2],
                  o =
                    0.04045 < n
                      ? Math.pow((n + 0.055) / 1.055, 2.4)
                      : n / 12.92,
                  s =
                    0.04045 < r
                      ? Math.pow((r + 0.055) / 1.055, 2.4)
                      : r / 12.92,
                  u =
                    0.04045 < i
                      ? Math.pow((i + 0.055) / 1.055, 2.4)
                      : i / 12.92,
                  a = (0.4124 * o + 0.3576 * s + 0.1805 * u) / 0.95047,
                  h = (0.2126 * o + 0.7152 * s + 0.0722 * u) / 1,
                  l = (0.0193 * o + 0.1192 * s + 0.9505 * u) / 1.08883;
                return new T(
                  0.008856 < a ? Math.pow(a, 1 / 3) : 7.787 * a + 16 / 116,
                  0.008856 < h ? Math.pow(h, 1 / 3) : 7.787 * h + 16 / 116,
                  0.008856 < l ? Math.pow(l, 1 / 3) : 7.787 * l + 16 / 116,
                  "xyz"
                );
              },
            },
            {
              key: "lch",
              value: function () {
                var t = this.lab(),
                  e = t.l,
                  n = t.a,
                  r = t.b,
                  i = Math.sqrt(Math.pow(n, 2) + Math.pow(r, 2)),
                  o = (180 * Math.atan2(r, n)) / Math.PI;
                return o < 0 && (o = 360 - (o *= -1)), new T(e, i, o, "lch");
              },
            },
            {
              key: "hsl",
              value: function () {
                var t = this.rgb(),
                  e = ss(
                    [t._a, t._b, t._c].map(function (t) {
                      return t / 255;
                    }),
                    3
                  ),
                  n = e[0],
                  r = e[1],
                  i = e[2],
                  o = Math.max(n, r, i),
                  s = Math.min(n, r, i),
                  u = (o + s) / 2,
                  a = o === s,
                  h = o - s;
                return new T(
                  360 *
                    (a
                      ? 0
                      : o === n
                      ? ((r - i) / h + (r < i ? 6 : 0)) / 6
                      : o === r
                      ? ((i - n) / h + 2) / 6
                      : o === i
                      ? ((n - r) / h + 4) / 6
                      : 0),
                  100 * (a ? 0 : 0.5 < u ? h / (2 - o - s) : h / (o + s)),
                  100 * u,
                  "hsl"
                );
              },
            },
            {
              key: "cmyk",
              value: function () {
                var t = this.rgb(),
                  e = ss(
                    [t._a, t._b, t._c].map(function (t) {
                      return t / 255;
                    }),
                    3
                  ),
                  n = e[0],
                  r = e[1],
                  i = e[2],
                  o = Math.min(1 - n, 1 - r, 1 - i);
                return 1 === o
                  ? new T(0, 0, 0, 1, "cmyk")
                  : new T(
                      (1 - n - o) / (1 - o),
                      (1 - r - o) / (1 - o),
                      (1 - i - o) / (1 - o),
                      o,
                      "cmyk"
                    );
              },
            },
            {
              key: "_clamped",
              value: function () {
                var t = this.rgb(),
                  e = t._a,
                  n = t._b,
                  r = t._c,
                  i = Math.max,
                  o = Math.min,
                  s = Math.round;
                return [e, n, r].map(function (t) {
                  return i(0, o(s(t), 255));
                });
              },
            },
            {
              key: "toHex",
              value: function () {
                var t = ss(this._clamped().map(hs), 3),
                  e = t[0],
                  n = t[1],
                  r = t[2];
                return "#".concat(e).concat(n).concat(r);
              },
            },
            {
              key: "toString",
              value: function () {
                return this.toHex();
              },
            },
            {
              key: "toRgb",
              value: function () {
                var t = ss(this._clamped(), 3),
                  e = t[0],
                  n = t[1],
                  r = t[2];
                return "rgb(".concat(e, ",").concat(n, ",").concat(r, ")");
              },
            },
            {
              key: "toArray",
              value: function () {
                return [this._a, this._b, this._c, this._d, this.space];
              },
            },
          ],
          [
            {
              key: "random",
              value: function () {
                var t =
                    0 < arguments.length && void 0 !== arguments[0]
                      ? arguments[0]
                      : "vibrant",
                  e = 1 < arguments.length ? arguments[1] : void 0,
                  n = Math.random,
                  r = Math.round,
                  i = Math.sin,
                  o = Math.PI;
                if ("vibrant" === t)
                  return new T(24 * n() + 57, 38 * n() + 45, 360 * n(), "lch");
                if ("sine" === t)
                  return new T(
                    r(
                      80 * i((2 * o * (e = null == e ? n() : e)) / 0.5 + 0.01) +
                        150
                    ),
                    r(50 * i((2 * o * e) / 0.5 + 4.6) + 200),
                    r(100 * i((2 * o * e) / 0.5 + 2.3) + 150)
                  );
                if ("pastel" === t)
                  return new T(8 * n() + 86, 17 * n() + 9, 360 * n(), "lch");
                if ("dark" === t)
                  return new T(10 + 10 * n(), 50 * n() + 86, 360 * n(), "lch");
                if ("rgb" === t) return new T(255 * n(), 255 * n(), 255 * n());
                if ("lab" === t)
                  return new T(
                    100 * n(),
                    256 * n() - 128,
                    256 * n() - 128,
                    "lab"
                  );
                if ("grey" === t) {
                  var s = 255 * n();
                  return new T(s, s, s);
                }
              },
            },
            {
              key: "test",
              value: function (t) {
                return "string" == typeof t && (fo.test(t) || vo.test(t));
              },
            },
            {
              key: "isRgb",
              value: function (t) {
                return (
                  t &&
                  "number" == typeof t.r &&
                  "number" == typeof t.g &&
                  "number" == typeof t.b
                );
              },
            },
            {
              key: "isColor",
              value: function (t) {
                return t && (t instanceof T || this.isRgb(t) || this.test(t));
              },
            },
          ]
        ),
        T
      );
    })(),
    vs = m(function () {
      Pt(1);
    });
  function ds(t) {
    if (void 0 === t)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  function ps(t, e) {
    return !e || ("object" !== ce(e) && "function" != typeof e) ? ds(t) : e;
  }
  function ys(t) {
    return (ys = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        })(t);
  }
  function ms(t, e, n) {
    return (ms =
      "undefined" != typeof Reflect && Reflect.get
        ? Reflect.get
        : function (t, e, n) {
            var r = (function (t, e) {
              for (
                ;
                !Object.prototype.hasOwnProperty.call(t, e) &&
                null !== (t = ys(t));

              );
              return t;
            })(t, e);
            if (r) {
              var i = Object.getOwnPropertyDescriptor(r, e);
              return i.get ? i.get.call(n) : i.value;
            }
          })(t, e, n || t);
  }
  function gs(t, e) {
    return (gs =
      Object.setPrototypeOf ||
      function (t, e) {
        return (t.__proto__ = e), t;
      })(t, e);
  }
  function ws(t, e) {
    if ("function" != typeof e && null !== e)
      throw new TypeError("Super expression must either be null or a function");
    (t.prototype = Object.create(e && e.prototype, {
      constructor: { value: t, writable: !0, configurable: !0 },
    })),
      e && gs(t, e);
  }
  Ct(
    { target: "Object", stat: !0, forced: vs },
    {
      keys: function (t) {
        return Pt(It(t));
      },
    }
  ),
    Kr("match", 1, function (r, a, h) {
      return [
        function (t) {
          var e = c(this),
            n = null == t ? void 0 : t[r];
          return void 0 !== n ? n.call(t, e) : new RegExp(t)[r](String(e));
        },
        function (t) {
          var e = h(a, t, this);
          if (e.done) return e.value;
          var n = T(t),
            r = String(this);
          if (!n.global) return ni(n, r);
          for (
            var i, o = n.unicode, A = [], s = (n.lastIndex = 0);
            null !== (i = ni(n, r));

          ) {
            var u = String(i[0]);
            "" === (A[s] = u) && (n.lastIndex = ei(r, ht(n.lastIndex), o)), s++;
          }
          return 0 === s ? null : A;
        },
      ];
    });
  var bs = wt.f,
    _s = E.f,
    xs = P.f,
    ks = di.trim,
    Os = "Number",
    Ss = y[Os],
    As = Ss.prototype,
    js = h(ge(As)) == Os,
    Ms = function (t) {
      var e,
        n,
        r,
        i,
        o,
        s,
        u,
        a,
        h = p(t, !1);
      if ("string" == typeof h && 2 < h.length)
        if (43 === (e = (h = ks(h)).charCodeAt(0)) || 45 === e) {
          if (88 === (n = h.charCodeAt(2)) || 120 === n) return NaN;
        } else if (48 === e) {
          switch (h.charCodeAt(1)) {
            case 66:
            case 98:
              (r = 2), (i = 49);
              break;
            case 79:
            case 111:
              (r = 8), (i = 55);
              break;
            default:
              return +h;
          }
          for (s = (o = h.slice(2)).length, u = 0; u < s; u++)
            if ((a = o.charCodeAt(u)) < 48 || i < a) return NaN;
          return parseInt(o, r);
        }
      return +h;
    };
  if (Et(Os, !Ss(" 0o1") || !Ss("0b1") || Ss("+0x1"))) {
    for (
      var Es,
        Ts = function (t) {
          var e = arguments.length < 1 ? 0 : t,
            n = this;
          return n instanceof Ts &&
            (js
              ? m(function () {
                  As.valueOf.call(n);
                })
              : h(n) != Os)
            ? lr(new Ss(Ms(e)), n, Ts)
            : Ms(e);
        },
        Cs = f
          ? bs(Ss)
          : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(
              ","
            ),
        Ps = 0;
      Cs.length > Ps;
      Ps++
    )
      x(Ss, (Es = Cs[Ps])) && !x(Ts, Es) && xs(Ts, Es, _s(Ss, Es));
    ((Ts.prototype = As).constructor = Ts), et(y, Os, Ts);
  }
  var Is = di.trim,
    Ns = y.parseFloat,
    Ds =
      1 / Ns(hi + "-0") != -1 / 0
        ? function (t) {
            var e = Is(String(t)),
              n = Ns(e);
            return 0 === n && "-" == e.charAt(0) ? -0 : n;
          }
        : Ns;
  Ct({ global: !0, forced: parseFloat != Ds }, { parseFloat: Ds });
  var Rs = (function () {
    function t() {
      Ti(this, t), this.init.apply(this, arguments);
    }
    return (
      as(t, [
        {
          key: "init",
          value: function (t, e) {
            var n = 0,
              r = 0,
              i = Array.isArray(t)
                ? { x: t[0], y: t[1] }
                : "object" === ce(t)
                ? { x: t.x, y: t.y }
                : { x: t, y: e };
            return (
              (this.x = null == i.x ? n : i.x),
              (this.y = null == i.y ? r : i.y),
              this
            );
          },
        },
        {
          key: "clone",
          value: function () {
            return new t(this);
          },
        },
        {
          key: "transform",
          value: function (t) {
            return this.clone().transformO(t);
          },
        },
        {
          key: "transformO",
          value: function (t) {
            Fs.isMatrixLike(t) || (t = new Fs(t));
            var e = this.x,
              n = this.y;
            return (
              (this.x = t.a * e + t.c * n + t.e),
              (this.y = t.b * e + t.d * n + t.f),
              this
            );
          },
        },
        {
          key: "toArray",
          value: function () {
            return [this.x, this.y];
          },
        },
      ]),
      t
    );
  })();
  function Ls(t, e, n) {
    return Math.abs(e - t) < (n || 1e-6);
  }
  var Fs = (function () {
    function h() {
      Ti(this, h), this.init.apply(this, arguments);
    }
    return (
      as(
        h,
        [
          {
            key: "init",
            value: function (t) {
              var e = h.fromArray([1, 0, 0, 1, 0, 0]);
              return (
                (t =
                  t instanceof Element
                    ? t.matrixify()
                    : "string" == typeof t
                    ? h.fromArray(t.split(go).map(parseFloat))
                    : Array.isArray(t)
                    ? h.fromArray(t)
                    : "object" === ce(t) && h.isMatrixLike(t)
                    ? t
                    : "object" === ce(t)
                    ? new h().transform(t)
                    : 6 === arguments.length
                    ? h.fromArray([].slice.call(arguments))
                    : e),
                (this.a = null != t.a ? t.a : e.a),
                (this.b = null != t.b ? t.b : e.b),
                (this.c = null != t.c ? t.c : e.c),
                (this.d = null != t.d ? t.d : e.d),
                (this.e = null != t.e ? t.e : e.e),
                (this.f = null != t.f ? t.f : e.f),
                this
              );
            },
          },
          {
            key: "clone",
            value: function () {
              return new h(this);
            },
          },
          {
            key: "transform",
            value: function (t) {
              if (h.isMatrixLike(t)) return new h(t).multiplyO(this);
              var e = h.formatTransforms(t),
                n = new Rs(e.ox, e.oy).transform(this),
                r = n.x,
                i = n.y,
                o = new h()
                  .translateO(e.rx, e.ry)
                  .lmultiplyO(this)
                  .translateO(-r, -i)
                  .scaleO(e.scaleX, e.scaleY)
                  .skewO(e.skewX, e.skewY)
                  .shearO(e.shear)
                  .rotateO(e.theta)
                  .translateO(r, i);
              if (isFinite(e.px) || isFinite(e.py)) {
                var s = new Rs(r, i).transform(o),
                  u = e.px ? e.px - s.x : 0,
                  a = e.py ? e.py - s.y : 0;
                o.translateO(u, a);
              }
              return o.translateO(e.tx, e.ty), o;
            },
          },
          {
            key: "compose",
            value: function (t) {
              t.origin &&
                ((t.originX = t.origin[0]), (t.originY = t.origin[1]));
              var e = t.originX || 0,
                n = t.originY || 0,
                r = t.scaleX || 1,
                i = t.scaleY || 1,
                o = t.shear || 0,
                s = t.rotate || 0,
                u = t.translateX || 0,
                a = t.translateY || 0;
              return new h()
                .translateO(-e, -n)
                .scaleO(r, i)
                .shearO(o)
                .rotateO(s)
                .translateO(u, a)
                .lmultiplyO(this)
                .translateO(e, n);
            },
          },
          {
            key: "decompose",
            value: function () {
              var t =
                  0 < arguments.length && void 0 !== arguments[0]
                    ? arguments[0]
                    : 0,
                e =
                  1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0,
                n = this.a,
                r = this.b,
                i = this.c,
                o = this.d,
                s = this.e,
                u = this.f,
                a = n * o - r * i,
                h = 0 < a ? 1 : -1,
                l = h * Math.sqrt(n * n + r * r),
                c = Math.atan2(h * r, h * n),
                f = (180 / Math.PI) * c,
                v = Math.cos(c),
                d = Math.sin(c),
                p = (n * i + r * o) / a,
                y = (i * l) / (p * n - r) || (o * l) / (p * r + n);
              return {
                scaleX: l,
                scaleY: y,
                shear: p,
                rotate: f,
                translateX: s - t + t * v * l + e * (p * v * l - d * y),
                translateY: u - e + t * d * l + e * (p * d * l + v * y),
                originX: t,
                originY: e,
                a: this.a,
                b: this.b,
                c: this.c,
                d: this.d,
                e: this.e,
                f: this.f,
              };
            },
          },
          {
            key: "multiply",
            value: function (t) {
              return this.clone().multiplyO(t);
            },
          },
          {
            key: "multiplyO",
            value: function (t) {
              var e = t instanceof h ? t : new h(t);
              return h.matrixMultiply(this, e, this);
            },
          },
          {
            key: "lmultiply",
            value: function (t) {
              return this.clone().lmultiplyO(t);
            },
          },
          {
            key: "lmultiplyO",
            value: function (t) {
              var e = t instanceof h ? t : new h(t);
              return h.matrixMultiply(e, this, this);
            },
          },
          {
            key: "inverseO",
            value: function () {
              var t = this.a,
                e = this.b,
                n = this.c,
                r = this.d,
                i = this.e,
                o = this.f,
                s = t * r - e * n;
              if (!s) throw new Error("Cannot invert " + this);
              var u = r / s,
                a = -e / s,
                h = -n / s,
                l = t / s,
                c = -(u * i + h * o),
                f = -(a * i + l * o);
              return (
                (this.a = u),
                (this.b = a),
                (this.c = h),
                (this.d = l),
                (this.e = c),
                (this.f = f),
                this
              );
            },
          },
          {
            key: "inverse",
            value: function () {
              return this.clone().inverseO();
            },
          },
          {
            key: "translate",
            value: function (t, e) {
              return this.clone().translateO(t, e);
            },
          },
          {
            key: "translateO",
            value: function (t, e) {
              return (this.e += t || 0), (this.f += e || 0), this;
            },
          },
          {
            key: "scale",
            value: function (t, e, n, r) {
              var i;
              return (i = this.clone()).scaleO.apply(i, arguments);
            },
          },
          {
            key: "scaleO",
            value: function (t) {
              var e =
                  1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : t,
                n =
                  2 < arguments.length && void 0 !== arguments[2]
                    ? arguments[2]
                    : 0,
                r =
                  3 < arguments.length && void 0 !== arguments[3]
                    ? arguments[3]
                    : 0;
              3 === arguments.length && ((r = n), (n = e), (e = t));
              var i = this.a,
                o = this.b,
                s = this.c,
                u = this.d,
                a = this.e,
                h = this.f;
              return (
                (this.a = i * t),
                (this.b = o * e),
                (this.c = s * t),
                (this.d = u * e),
                (this.e = a * t - n * t + n),
                (this.f = h * e - r * e + r),
                this
              );
            },
          },
          {
            key: "rotate",
            value: function (t, e, n) {
              return this.clone().rotateO(t, e, n);
            },
          },
          {
            key: "rotateO",
            value: function (t) {
              var e =
                  1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0,
                n =
                  2 < arguments.length && void 0 !== arguments[2]
                    ? arguments[2]
                    : 0;
              t = mi(t);
              var r = Math.cos(t),
                i = Math.sin(t),
                o = this.a,
                s = this.b,
                u = this.c,
                a = this.d,
                h = this.e,
                l = this.f;
              return (
                (this.a = o * r - s * i),
                (this.b = s * r + o * i),
                (this.c = u * r - a * i),
                (this.d = a * r + u * i),
                (this.e = h * r - l * i + n * i - e * r + e),
                (this.f = l * r + h * i - e * i - n * r + n),
                this
              );
            },
          },
          {
            key: "flip",
            value: function (t, e) {
              return this.clone().flipO(t, e);
            },
          },
          {
            key: "flipO",
            value: function (t, e) {
              return "x" === t
                ? this.scaleO(-1, 1, e, 0)
                : "y" === t
                ? this.scaleO(1, -1, 0, e)
                : this.scaleO(-1, -1, t, e || t);
            },
          },
          {
            key: "shear",
            value: function (t, e, n) {
              return this.clone().shearO(t, e, n);
            },
          },
          {
            key: "shearO",
            value: function (t) {
              var e =
                  2 < arguments.length && void 0 !== arguments[2]
                    ? arguments[2]
                    : 0,
                n = this.a,
                r = this.b,
                i = this.c,
                o = this.d,
                s = this.e,
                u = this.f;
              return (
                (this.a = n + r * t),
                (this.c = i + o * t),
                (this.e = s + u * t - e * t),
                this
              );
            },
          },
          {
            key: "skew",
            value: function (t, e, n, r) {
              var i;
              return (i = this.clone()).skewO.apply(i, arguments);
            },
          },
          {
            key: "skewO",
            value: function (t) {
              var e =
                  1 < arguments.length && void 0 !== arguments[1]
                    ? arguments[1]
                    : t,
                n =
                  2 < arguments.length && void 0 !== arguments[2]
                    ? arguments[2]
                    : 0,
                r =
                  3 < arguments.length && void 0 !== arguments[3]
                    ? arguments[3]
                    : 0;
              3 === arguments.length && ((r = n), (n = e), (e = t)),
                (t = mi(t)),
                (e = mi(e));
              var i = Math.tan(t),
                o = Math.tan(e),
                s = this.a,
                u = this.b,
                a = this.c,
                h = this.d,
                l = this.e,
                c = this.f;
              return (
                (this.a = s + u * i),
                (this.b = u + s * o),
                (this.c = a + h * i),
                (this.d = h + a * o),
                (this.e = l + c * i - r * i),
                (this.f = c + l * o - n * o),
                this
              );
            },
          },
          {
            key: "skewX",
            value: function (t, e, n) {
              return this.skew(t, 0, e, n);
            },
          },
          {
            key: "skewXO",
            value: function (t, e, n) {
              return this.skewO(t, 0, e, n);
            },
          },
          {
            key: "skewY",
            value: function (t, e, n) {
              return this.skew(0, t, e, n);
            },
          },
          {
            key: "skewYO",
            value: function (t, e, n) {
              return this.skewO(0, t, e, n);
            },
          },
          {
            key: "aroundO",
            value: function (t, e, n) {
              var r = t || 0,
                i = e || 0;
              return this.translateO(-r, -i).lmultiplyO(n).translateO(r, i);
            },
          },
          {
            key: "around",
            value: function (t, e, n) {
              return this.clone().aroundO(t, e, n);
            },
          },
          {
            key: "equals",
            value: function (t) {
              var e = new h(t);
              return (
                Ls(this.a, e.a) &&
                Ls(this.b, e.b) &&
                Ls(this.c, e.c) &&
                Ls(this.d, e.d) &&
                Ls(this.e, e.e) &&
                Ls(this.f, e.f)
              );
            },
          },
          {
            key: "toString",
            value: function () {
              return (
                "matrix(" +
                this.a +
                "," +
                this.b +
                "," +
                this.c +
                "," +
                this.d +
                "," +
                this.e +
                "," +
                this.f +
                ")"
              );
            },
          },
          {
            key: "toArray",
            value: function () {
              return [this.a, this.b, this.c, this.d, this.e, this.f];
            },
          },
          {
            key: "valueOf",
            value: function () {
              return {
                a: this.a,
                b: this.b,
                c: this.c,
                d: this.d,
                e: this.e,
                f: this.f,
              };
            },
          },
        ],
        [
          {
            key: "fromArray",
            value: function (t) {
              return { a: t[0], b: t[1], c: t[2], d: t[3], e: t[4], f: t[5] };
            },
          },
          {
            key: "isMatrixLike",
            value: function (t) {
              return (
                null != t.a ||
                null != t.b ||
                null != t.c ||
                null != t.d ||
                null != t.e ||
                null != t.f
              );
            },
          },
          {
            key: "formatTransforms",
            value: function (t) {
              var e = "both" === t.flip || !0 === t.flip,
                n = t.flip && (e || "x" === t.flip) ? -1 : 1,
                r = t.flip && (e || "y" === t.flip) ? -1 : 1,
                i =
                  t.skew && t.skew.length
                    ? t.skew[0]
                    : isFinite(t.skew)
                    ? t.skew
                    : isFinite(t.skewX)
                    ? t.skewX
                    : 0,
                o =
                  t.skew && t.skew.length
                    ? t.skew[1]
                    : isFinite(t.skew)
                    ? t.skew
                    : isFinite(t.skewY)
                    ? t.skewY
                    : 0,
                s =
                  t.scale && t.scale.length
                    ? t.scale[0] * n
                    : isFinite(t.scale)
                    ? t.scale * n
                    : isFinite(t.scaleX)
                    ? t.scaleX * n
                    : n,
                u =
                  t.scale && t.scale.length
                    ? t.scale[1] * r
                    : isFinite(t.scale)
                    ? t.scale * r
                    : isFinite(t.scaleY)
                    ? t.scaleY * r
                    : r,
                a = t.shear || 0,
                h = t.rotate || t.theta || 0,
                l = new Rs(
                  t.origin || t.around || t.ox || t.originX,
                  t.oy || t.originY
                ),
                c = l.x,
                f = l.y,
                v = new Rs(
                  t.position || t.px || t.positionX,
                  t.py || t.positionY
                ),
                d = v.x,
                p = v.y,
                y = new Rs(
                  t.translate || t.tx || t.translateX,
                  t.ty || t.translateY
                ),
                m = y.x,
                g = y.y,
                w = new Rs(
                  t.relative || t.rx || t.relativeX,
                  t.ry || t.relativeY
                );
              return {
                scaleX: s,
                scaleY: u,
                skewX: i,
                skewY: o,
                shear: a,
                theta: h,
                rx: w.x,
                ry: w.y,
                tx: m,
                ty: g,
                ox: c,
                oy: f,
                px: d,
                py: p,
              };
            },
          },
          {
            key: "matrixMultiply",
            value: function (t, e, n) {
              var r = t.a * e.a + t.c * e.b,
                i = t.b * e.a + t.d * e.b,
                o = t.a * e.c + t.c * e.d,
                s = t.b * e.c + t.d * e.d,
                u = t.e + t.a * e.e + t.c * e.f,
                a = t.f + t.b * e.e + t.d * e.f;
              return (
                (n.a = r),
                (n.b = i),
                (n.c = o),
                (n.d = s),
                (n.e = u),
                (n.f = a),
                n
              );
            },
          },
        ]
      ),
      h
    );
  })();
  function zs() {
    if (!zs.nodes) {
      var t = Di().size(2, 0);
      (t.node.style.cssText = [
        "opacity: 0",
        "position: absolute",
        "left: -100%",
        "top: -100%",
        "overflow: hidden",
      ].join(";")),
        t.attr("focusable", "false"),
        t.attr("aria-hidden", "true");
      var e = t.path().node;
      zs.nodes = { svg: t, path: e };
    }
    if (!zs.nodes.svg.node.parentNode) {
      var n = Ei.document.body || Ei.document.documentElement;
      zs.nodes.svg.addTo(n);
    }
    return zs.nodes;
  }
  function qs(t) {
    return !(t.width || t.height || t.x || t.y);
  }
  zi(Fs, "Matrix");
  var Ys = (function () {
    function s() {
      Ti(this, s), this.init.apply(this, arguments);
    }
    return (
      as(s, [
        {
          key: "init",
          value: function (t) {
            return (
              (t =
                "string" == typeof t
                  ? t.split(go).map(parseFloat)
                  : Array.isArray(t)
                  ? t
                  : "object" === ce(t)
                  ? [
                      null != t.left ? t.left : t.x,
                      null != t.top ? t.top : t.y,
                      t.width,
                      t.height,
                    ]
                  : 4 === arguments.length
                  ? [].slice.call(arguments)
                  : [0, 0, 0, 0]),
              (this.x = t[0] || 0),
              (this.y = t[1] || 0),
              (this.width = this.w = t[2] || 0),
              (this.height = this.h = t[3] || 0),
              (this.x2 = this.x + this.w),
              (this.y2 = this.y + this.h),
              (this.cx = this.x + this.w / 2),
              (this.cy = this.y + this.h / 2),
              this
            );
          },
        },
        {
          key: "merge",
          value: function (t) {
            var e = Math.min(this.x, t.x),
              n = Math.min(this.y, t.y);
            return new s(
              e,
              n,
              Math.max(this.x + this.width, t.x + t.width) - e,
              Math.max(this.y + this.height, t.y + t.height) - n
            );
          },
        },
        {
          key: "transform",
          value: function (e) {
            e instanceof Fs || (e = new Fs(e));
            var n = 1 / 0,
              r = -1 / 0,
              i = 1 / 0,
              o = -1 / 0;
            return (
              [
                new Rs(this.x, this.y),
                new Rs(this.x2, this.y),
                new Rs(this.x, this.y2),
                new Rs(this.x2, this.y2),
              ].forEach(function (t) {
                (t = t.transform(e)),
                  (n = Math.min(n, t.x)),
                  (r = Math.max(r, t.x)),
                  (i = Math.min(i, t.y)),
                  (o = Math.max(o, t.y));
              }),
              new s(n, i, r - n, o - i)
            );
          },
        },
        {
          key: "addOffset",
          value: function () {
            return (
              (this.x += Ei.window.pageXOffset),
              (this.y += Ei.window.pageYOffset),
              this
            );
          },
        },
        {
          key: "toString",
          value: function () {
            return this.x + " " + this.y + " " + this.width + " " + this.height;
          },
        },
        {
          key: "toArray",
          value: function () {
            return [this.x, this.y, this.width, this.height];
          },
        },
        {
          key: "isNulled",
          value: function () {
            return qs(this);
          },
        },
      ]),
      s
    );
  })();
  function Xs(t, e) {
    var n, r;
    try {
      if (
        qs((n = t(this.node))) &&
        (r = this.node) !== Ei.document &&
        !(
          Ei.document.documentElement.contains ||
          function (t) {
            for (; t.parentNode; ) t = t.parentNode;
            return t === Ei.document;
          }
        ).call(Ei.document.documentElement, r)
      )
        throw new Error("Element not in the dom");
    } catch (t) {
      n = e(this);
    }
    return n;
  }
  Nr({
    viewbox: {
      viewbox: function (t, e, n, r) {
        return null == t
          ? new Ys(this.attr("viewBox"))
          : this.attr("viewBox", new Ys(t, e, n, r));
      },
      zoom: function (t, e) {
        var n = this.node.clientWidth,
          r = this.node.clientHeight,
          i = this.viewbox();
        if (!n && !r) {
          var o = window.getComputedStyle(this.node);
          (n = parseFloat(o.getPropertyValue("width"))),
            (r = parseFloat(o.getPropertyValue("height")));
        }
        var s = n / i.width,
          u = r / i.height,
          a = Math.min(s, u);
        if (null == t) return a;
        var h = a / t;
        h === 1 / 0 && (h = Number.MIN_VALUE),
          (e = e || new Rs(n / 2 / s + i.x, r / 2 / u + i.y));
        var l = new Ys(i).transform(new Fs({ scale: h, origin: e }));
        return this.viewbox(l);
      },
    },
  }),
    zi(Ys, "Box");
  var Gs = (function () {
      try {
        return Function(
          "name",
          "baseClass",
          "_constructor",
          [
            "baseClass = baseClass || Array",
            "return {",
            "  [name]: class extends baseClass {",
            "    constructor (...args) {",
            "      super(...args)",
            "      _constructor && _constructor.apply(this, args)",
            "    }",
            "  }",
            "}[name]",
          ].join("\n")
        );
      } catch (t) {
        return function (t) {
          var e =
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : Array,
            n = 2 < arguments.length ? arguments[2] : void 0,
            r = function () {
              e.apply(this, arguments), n && n.apply(this, arguments);
            };
          return (
            (((r.prototype = Object.create(e.prototype)).constructor =
              r).prototype.map = function (t) {
              var e = new r();
              return e.push.apply(e, Array.prototype.map.call(this, t)), e;
            }),
            r
          );
        };
      }
    })(),
    Vs = Gs("List", Array, function () {
      var t =
        0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
      if ("number" == typeof t) return this;
      (this.length = 0), this.push.apply(this, Cr(t));
    });
  Vi(Vs, {
    each: function (e) {
      for (
        var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1;
        r < t;
        r++
      )
        n[r - 1] = arguments[r];
      return "function" == typeof e
        ? this.map(function (t) {
            return e.call(t, t);
          })
        : this.map(function (t) {
            return t[e].apply(t, n);
          });
    },
    toArray: function () {
      return Array.prototype.concat.apply([], this);
    },
  });
  var Hs = ["toArray", "constructor", "each"];
  function Bs(t, e) {
    return new Vs(
      yi((e || Ei.document).querySelectorAll(t), function (t) {
        return Li(t);
      })
    );
  }
  Vs.extend = function (t) {
    (t = t.reduce(function (t, r) {
      return (
        Hs.includes(r) ||
          "_" === r[0] ||
          (t[r] = function () {
            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
              e[n] = arguments[n];
            return this.each.apply(this, [r].concat(e));
          }),
        t
      );
    }, {})),
      Vi(Vs, t);
  };
  var Us = (function (t) {
    function r() {
      var t,
        e = (
          0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}
        ).events,
        n = void 0 === e ? {} : e;
      return Ti(this, r), ((t = ps(this, ys(r).call(this))).events = n), t;
    }
    return (
      ws(r, Ci),
      as(r, [
        { key: "addEventListener", value: function () {} },
        {
          key: "dispatch",
          value: function (t, e) {
            return Fo(this, t, e);
          },
        },
        {
          key: "dispatchEvent",
          value: function (t) {
            var e = this.getEventHolder().events;
            if (!e) return !0;
            var n = e[t.type];
            for (var r in n) for (var i in n[r]) n[r][i](t);
            return !t.defaultPrevented;
          },
        },
        {
          key: "fire",
          value: function (t, e) {
            return this.dispatch(t, e), this;
          },
        },
        {
          key: "getEventHolder",
          value: function () {
            return this;
          },
        },
        {
          key: "getEventTarget",
          value: function () {
            return this;
          },
        },
        {
          key: "off",
          value: function (t, e) {
            return Lo(this, t, e), this;
          },
        },
        {
          key: "on",
          value: function (t, e, n, r) {
            return Ro(this, t, e, n, r), this;
          },
        },
        { key: "removeEventListener", value: function () {} },
      ]),
      r
    );
  })();
  function $s() {}
  zi(Us, "EventTarget");
  var Qs = { duration: 400, ease: ">", delay: 0 },
    Ws = {
      "fill-opacity": 1,
      "stroke-opacity": 1,
      "stroke-width": 0,
      "stroke-linejoin": "miter",
      "stroke-linecap": "butt",
      fill: "#000000",
      stroke: "#000000",
      opacity: 1,
      x: 0,
      y: 0,
      cx: 0,
      cy: 0,
      width: 0,
      height: 0,
      r: 0,
      rx: 0,
      ry: 0,
      offset: 0,
      "stop-opacity": 1,
      "stop-color": "#000000",
      "text-anchor": "start",
    },
    Js = { __proto__: null, noop: $s, timeline: Qs, attrs: Ws },
    Zs = Gs("SVGArray", Array, function (t) {
      this.init(t);
    });
  Vi(Zs, {
    init: function (t) {
      return (
        "number" == typeof t ||
          ((this.length = 0), this.push.apply(this, Cr(this.parse(t)))),
        this
      );
    },
    toArray: function () {
      return Array.prototype.concat.apply([], this);
    },
    toString: function () {
      return this.join(" ");
    },
    valueOf: function () {
      var t = [];
      return t.push.apply(t, Cr(this)), t;
    },
    parse: function () {
      var t =
        0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
      return t instanceof Array ? t : t.trim().split(go).map(parseFloat);
    },
    clone: function () {
      return new this.constructor(this);
    },
    toSet: function () {
      return new Set(this);
    },
  });
  var Ks = (function () {
      function n() {
        Ti(this, n), this.init.apply(this, arguments);
      }
      return (
        as(n, [
          {
            key: "init",
            value: function (t, e) {
              return (
                (e = Array.isArray(t) ? t[1] : e),
                (t = Array.isArray(t) ? t[0] : t),
                (this.value = 0),
                (this.unit = e || ""),
                "number" == typeof t
                  ? (this.value = isNaN(t)
                      ? 0
                      : isFinite(t)
                      ? t
                      : t < 0
                      ? -34e37
                      : 34e37)
                  : "string" == typeof t
                  ? (e = t.match(so)) &&
                    ((this.value = parseFloat(e[1])),
                    "%" === e[5]
                      ? (this.value /= 100)
                      : "s" === e[5] && (this.value *= 1e3),
                    (this.unit = e[5]))
                  : t instanceof n &&
                    ((this.value = t.valueOf()), (this.unit = t.unit)),
                this
              );
            },
          },
          {
            key: "toString",
            value: function () {
              return (
                ("%" === this.unit
                  ? ~~(1e8 * this.value) / 1e6
                  : "s" === this.unit
                  ? this.value / 1e3
                  : this.value) + this.unit
              );
            },
          },
          {
            key: "toJSON",
            value: function () {
              return this.toString();
            },
          },
          {
            key: "toArray",
            value: function () {
              return [this.value, this.unit];
            },
          },
          {
            key: "valueOf",
            value: function () {
              return this.value;
            },
          },
          {
            key: "plus",
            value: function (t) {
              return new n(this + (t = new n(t)), this.unit || t.unit);
            },
          },
          {
            key: "minus",
            value: function (t) {
              return new n(this - (t = new n(t)), this.unit || t.unit);
            },
          },
          {
            key: "times",
            value: function (t) {
              return new n(this * (t = new n(t)), this.unit || t.unit);
            },
          },
          {
            key: "divide",
            value: function (t) {
              return new n(this / (t = new n(t)), this.unit || t.unit);
            },
          },
          {
            key: "convert",
            value: function (t) {
              return new n(this.value, t);
            },
          },
        ]),
        n
      );
    })(),
    tu = [];
  var Dom = (function (t) {
    function Dom(t, e) {
      var n;
      return (
        Ti(this, Dom),
        ((n = ps(this, ys(Dom).call(this, t))).node = t),
        (n.type = t.nodeName),
        e && t !== e && n.attr(e),
        n
      );
    }
    return (
      ws(Dom, Us),
      as(Dom, [
        {
          key: "add",
          value: function (t, e) {
            return (
              (t = Di(t)),
              null == e
                ? this.node.appendChild(t.node)
                : t.node !== this.node.childNodes[e] &&
                  this.node.insertBefore(t.node, this.node.childNodes[e]),
              this
            );
          },
        },
        {
          key: "addTo",
          value: function (t) {
            return Di(t).put(this);
          },
        },
        {
          key: "children",
          value: function () {
            return new Vs(
              yi(this.node.children, function (t) {
                return Li(t);
              })
            );
          },
        },
        {
          key: "clear",
          value: function () {
            for (; this.node.hasChildNodes(); )
              this.node.removeChild(this.node.lastChild);
            return this;
          },
        },
        {
          key: "clone",
          value: function () {
            return this.writeDataToDom(), Gi(this.node.cloneNode(!0));
          },
        },
        {
          key: "each",
          value: function (t, e) {
            var n,
              r,
              i = this.children();
            for (n = 0, r = i.length; n < r; n++)
              t.apply(i[n], [n, i]), e && i[n].each(t, e);
            return this;
          },
        },
        {
          key: "element",
          value: function (t) {
            return this.put(new Dom(Ni(t)));
          },
        },
        {
          key: "first",
          value: function () {
            return Li(this.node.firstChild);
          },
        },
        {
          key: "get",
          value: function (t) {
            return Li(this.node.childNodes[t]);
          },
        },
        {
          key: "getEventHolder",
          value: function () {
            return this.node;
          },
        },
        {
          key: "getEventTarget",
          value: function () {
            return this.node;
          },
        },
        {
          key: "has",
          value: function (t) {
            return 0 <= this.index(t);
          },
        },
        {
          key: "id",
          value: function (t) {
            return (
              void 0 !== t || this.node.id || (this.node.id = Xi(this.type)),
              this.attr("id", t)
            );
          },
        },
        {
          key: "index",
          value: function (t) {
            return [].slice.call(this.node.childNodes).indexOf(t.node);
          },
        },
        {
          key: "last",
          value: function () {
            return Li(this.node.lastChild);
          },
        },
        {
          key: "matches",
          value: function (t) {
            var e = this.node;
            return (
              e.matches ||
              e.matchesSelector ||
              e.msMatchesSelector ||
              e.mozMatchesSelector ||
              e.webkitMatchesSelector ||
              e.oMatchesSelector
            ).call(e, t);
          },
        },
        {
          key: "parent",
          value: function (t) {
            var e = this;
            if (!e.node.parentNode) return null;
            if (((e = Li(e.node.parentNode)), !t)) return e;
            for (; e; ) {
              if ("string" == typeof t ? e.matches(t) : e instanceof t)
                return e;
              if (
                !e.node.parentNode ||
                "#document" === e.node.parentNode.nodeName ||
                "#document-fragment" === e.node.parentNode.nodeName
              )
                return null;
              e = Li(e.node.parentNode);
            }
          },
        },
        {
          key: "put",
          value: function (t, e) {
            return this.add(t, e), t;
          },
        },
        {
          key: "putIn",
          value: function (t) {
            return Di(t).add(this);
          },
        },
        {
          key: "remove",
          value: function () {
            return this.parent() && this.parent().removeElement(this), this;
          },
        },
        {
          key: "removeElement",
          value: function (t) {
            return this.node.removeChild(t.node), this;
          },
        },
        {
          key: "replace",
          value: function (t) {
            return (
              (t = Di(t)),
              this.node.parentNode.replaceChild(t.node, this.node),
              t
            );
          },
        },
        {
          key: "round",
          value: function () {
            var t =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : 2,
              e = 1 < arguments.length ? arguments[1] : void 0,
              n = Math.pow(10, t),
              r = this.attr();
            e || (e = Object.keys(r));
            var i = {};
            return (
              e.forEach(function (t) {
                i[t] = Math.round(r[t] * n) / n;
              }),
              this.attr(i),
              this
            );
          },
        },
        {
          key: "toString",
          value: function () {
            return this.id();
          },
        },
        {
          key: "svg",
          value: function (n, t) {
            var e, r, i;
            if (
              (!1 === n && ((t = !1), (n = null)),
              null == n || "function" == typeof n)
            ) {
              (t = null == t || t), this.writeDataToDom();
              var o = this;
              if (null != n) {
                if (((o = Li(o.node.cloneNode(!0))), t)) {
                  var s = n(o);
                  if (((o = s || o), !1 === s)) return "";
                }
                o.each(function () {
                  var t = n(this),
                    e = t || this;
                  !1 === t ? this.remove() : t && this !== e && this.replace(e);
                }, !0);
              }
              return t ? o.node.outerHTML : o.node.innerHTML;
            }
            for (
              t = null != t && t,
                e = Ei.document.createElementNS(Oi, "svg"),
                i = Ei.document.createDocumentFragment(),
                e.innerHTML = n,
                r = e.children.length;
              r--;

            )
              i.appendChild(e.firstElementChild);
            var u = this.parent();
            return t ? this.replace(i) && u : this.add(i);
          },
        },
        {
          key: "words",
          value: function (t) {
            return (this.node.textContent = t), this;
          },
        },
        {
          key: "writeDataToDom",
          value: function () {
            return (
              this.each(function () {
                this.writeDataToDom();
              }),
              this
            );
          },
        },
      ]),
      Dom
    );
  })();
  Vi(Dom, {
    attr: function (n, t, e) {
      var r = this;
      if (null == n) {
        (n = {}), (t = this.node.attributes);
        var i = !0,
          o = !1,
          s = void 0;
        try {
          for (
            var u, a = t[Symbol.iterator]();
            !(i = (u = a.next()).done);
            i = !0
          ) {
            var h = u.value;
            n[h.nodeName] = yo.test(h.nodeValue)
              ? parseFloat(h.nodeValue)
              : h.nodeValue;
          }
        } catch (t) {
          (o = !0), (s = t);
        } finally {
          try {
            i || null == a.return || a.return();
          } finally {
            if (o) throw s;
          }
        }
        return n;
      }
      if (n instanceof Array)
        return n.reduce(function (t, e) {
          return (t[e] = r.attr(e)), t;
        }, {});
      if ("object" === ce(n) && n.constructor === Object)
        for (t in n) this.attr(t, n[t]);
      else if (null === t) this.node.removeAttribute(n);
      else {
        if (null == t)
          return null == (t = this.node.getAttribute(n))
            ? Ws[n]
            : yo.test(t)
            ? parseFloat(t)
            : t;
        "number" ==
        typeof (t = tu.reduce(function (t, e) {
          return e(n, t, r);
        }, t))
          ? (t = new Ks(t))
          : fs.isColor(t)
          ? (t = new fs(t))
          : t.constructor === Array && (t = new Zs(t)),
          "leading" === n
            ? this.leading && this.leading(t)
            : "string" == typeof e
            ? this.node.setAttributeNS(e, n, t.toString())
            : this.node.setAttribute(n, t.toString()),
          !this.rebuild || ("font-size" !== n && "x" !== n) || this.rebuild();
      }
      return this;
    },
    find: function (t) {
      return Bs(t, this.node);
    },
    findOne: function (t) {
      return Li(this.node.querySelector(t));
    },
  }),
    zi(Dom, "Dom");
  var Element = (function (t) {
    function Element(t, e) {
      var n;
      return (
        Ti(this, Element),
        ((n = ps(this, ys(Element).call(this, t, e))).dom = {}),
        (n.node.instance = ds(n)),
        t.hasAttribute("svgjs:data") &&
          n.setData(JSON.parse(t.getAttribute("svgjs:data")) || {}),
        n
      );
    }
    return (
      ws(Element, Dom),
      as(Element, [
        {
          key: "center",
          value: function (t, e) {
            return this.cx(t).cy(e);
          },
        },
        {
          key: "cx",
          value: function (t) {
            return null == t
              ? this.x() + this.width() / 2
              : this.x(t - this.width() / 2);
          },
        },
        {
          key: "cy",
          value: function (t) {
            return null == t
              ? this.y() + this.height() / 2
              : this.y(t - this.height() / 2);
          },
        },
        {
          key: "defs",
          value: function () {
            return this.root().defs();
          },
        },
        {
          key: "dmove",
          value: function (t, e) {
            return this.dx(t).dy(e);
          },
        },
        {
          key: "dx",
          value: function () {
            var t =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : 0;
            return this.x(new Ks(t).plus(this.x()));
          },
        },
        {
          key: "dy",
          value: function () {
            var t =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : 0;
            return this.y(new Ks(t).plus(this.y()));
          },
        },
        {
          key: "root",
          value: function () {
            var t = this.parent(qi(Ii));
            return t && t.root();
          },
        },
        {
          key: "getEventHolder",
          value: function () {
            return this;
          },
        },
        {
          key: "height",
          value: function (t) {
            return this.attr("height", t);
          },
        },
        {
          key: "inside",
          value: function (t, e) {
            var n = this.bbox();
            return (
              t > n.x && e > n.y && t < n.x + n.width && e < n.y + n.height
            );
          },
        },
        {
          key: "move",
          value: function (t, e) {
            return this.x(t).y(e);
          },
        },
        {
          key: "parents",
          value: function () {
            var t =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : Ei.document;
            t = Di(t);
            for (
              var e = new Vs(), n = this;
              (n = n.parent()) && n.node !== t.node && n.node !== Ei.document;

            )
              e.push(n);
            return e;
          },
        },
        {
          key: "reference",
          value: function (t) {
            if (!(t = this.attr(t))) return null;
            var e = t.match(ho);
            return e ? Di(e[1]) : null;
          },
        },
        {
          key: "setData",
          value: function (t) {
            return (this.dom = t), this;
          },
        },
        {
          key: "size",
          value: function (t, e) {
            var n = _i(this, t, e);
            return this.width(new Ks(n.width)).height(new Ks(n.height));
          },
        },
        {
          key: "width",
          value: function (t) {
            return this.attr("width", t);
          },
        },
        {
          key: "writeDataToDom",
          value: function () {
            return (
              this.node.removeAttribute("svgjs:data"),
              Object.keys(this.dom).length &&
                this.node.setAttribute("svgjs:data", JSON.stringify(this.dom)),
              ms(ys(Element.prototype), "writeDataToDom", this).call(this)
            );
          },
        },
        {
          key: "x",
          value: function (t) {
            return this.attr("x", t);
          },
        },
        {
          key: "y",
          value: function (t) {
            return this.attr("y", t);
          },
        },
      ]),
      Element
    );
  })();
  Vi(Element, {
    bbox: function () {
      return new Ys(
        Xs.call(
          this,
          function (t) {
            return t.getBBox();
          },
          function (e) {
            try {
              var t = e.clone().addTo(zs().svg).show(),
                n = t.node.getBBox();
              return t.remove(), n;
            } catch (t) {
              throw new Error(
                'Getting bbox of element "' +
                  e.node.nodeName +
                  '" is not possible. ' +
                  t.toString()
              );
            }
          }
        )
      );
    },
    rbox: function (t) {
      var e = new Ys(
        Xs.call(
          this,
          function (t) {
            return t.getBoundingClientRect();
          },
          function (t) {
            throw new Error(
              'Getting rbox of element "' +
                t.node.nodeName +
                '" is not possible'
            );
          }
        )
      );
      return t ? e.transform(t.screenCTM().inverse()) : e.addOffset();
    },
    point: function (t, e) {
      return new Rs(t, e).transform(this.screenCTM().inverse());
    },
    ctm: function () {
      return new Fs(this.node.getCTM());
    },
    screenCTM: function () {
      if ("function" != typeof this.isRoot || this.isRoot())
        return new Fs(this.node.getScreenCTM());
      var t = this.rect(1, 1),
        e = t.node.getScreenCTM();
      return t.remove(), new Fs(e);
    },
  }),
    zi(Element, "Element");
  var eu = {
    stroke: [
      "color",
      "width",
      "opacity",
      "linecap",
      "linejoin",
      "miterlimit",
      "dasharray",
      "dashoffset",
    ],
    fill: ["color", "opacity", "rule"],
    prefix: function (t, e) {
      return "color" === e ? t : t + "-" + e;
    },
  };
  ["fill", "stroke"].forEach(function (e) {
    var n,
      t = {};
    (t[e] = function (t) {
      if (void 0 === t) return this.attr(e);
      if (
        "string" == typeof t ||
        t instanceof fs ||
        fs.isRgb(t) ||
        t instanceof Element
      )
        this.attr(e, t);
      else
        for (n = eu[e].length - 1; 0 <= n; n--)
          null != t[eu[e][n]] && this.attr(eu.prefix(e, eu[e][n]), t[eu[e][n]]);
      return this;
    }),
      Nr(["Element", "Runner"], t);
  }),
    Nr(["Element", "Runner"], {
      matrix: function (t, e, n, r, i, o) {
        return null == t
          ? new Fs(this)
          : this.attr("transform", new Fs(t, e, n, r, i, o));
      },
      rotate: function (t, e, n) {
        return this.transform({ rotate: t, ox: e, oy: n }, !0);
      },
      skew: function (t, e, n, r) {
        return 1 === arguments.length || 3 === arguments.length
          ? this.transform({ skew: t, ox: e, oy: n }, !0)
          : this.transform({ skew: [t, e], ox: n, oy: r }, !0);
      },
      shear: function (t, e, n) {
        return this.transform({ shear: t, ox: e, oy: n }, !0);
      },
      scale: function (t, e, n, r) {
        return 1 === arguments.length || 3 === arguments.length
          ? this.transform({ scale: t, ox: e, oy: n }, !0)
          : this.transform({ scale: [t, e], ox: n, oy: r }, !0);
      },
      translate: function (t, e) {
        return this.transform({ translate: [t, e] }, !0);
      },
      relative: function (t, e) {
        return this.transform({ relative: [t, e] }, !0);
      },
      flip: function (t, e) {
        var n = "string" == typeof t ? t : (isFinite(t), "both"),
          r =
            "both" === t && isFinite(e)
              ? [e, e]
              : "x" === t
              ? [e, 0]
              : "y" === t
              ? [0, e]
              : isFinite(t)
              ? [t, t]
              : [0, 0];
        return this.transform({ flip: n, origin: r }, !0);
      },
      opacity: function (t) {
        return this.attr("opacity", t);
      },
    }),
    Nr("radius", {
      radius: function (t, e) {
        var n = (this._element || this).type;
        return "radialGradient" === n || "radialGradient" === n
          ? this.attr("r", new Ks(t))
          : this.rx(t).ry(null == e ? t : e);
      },
    }),
    Nr("Path", {
      length: function () {
        return this.node.getTotalLength();
      },
      pointAt: function (t) {
        return new Rs(this.node.getPointAtLength(t));
      },
    }),
    Nr(["Element", "Runner"], {
      font: function (t, e) {
        if ("object" !== ce(t))
          return "leading" === t
            ? this.leading(e)
            : "anchor" === t
            ? this.attr("text-anchor", e)
            : "size" === t ||
              "family" === t ||
              "weight" === t ||
              "stretch" === t ||
              "variant" === t ||
              "style" === t
            ? this.attr("font-" + t, e)
            : this.attr(t, e);
        for (e in t) this.font(e, t[e]);
        return this;
      },
    }),
    Nr("Text", {
      ax: function (t) {
        return this.attr("x", t);
      },
      ay: function (t) {
        return this.attr("y", t);
      },
      amove: function (t, e) {
        return this.ax(t).ay(e);
      },
    }),
    Nr(
      "Element",
      [
        "click",
        "dblclick",
        "mousedown",
        "mouseup",
        "mouseover",
        "mouseout",
        "mousemove",
        "mouseenter",
        "mouseleave",
        "touchstart",
        "touchmove",
        "touchleave",
        "touchend",
        "touchcancel",
      ].reduce(function (t, e) {
        return (
          (t[e] = function (t) {
            return null === t ? Lo(this, e) : Ro(this, e, t), this;
          }),
          t
        );
      }, {})
    );
  var nu = [].reverse,
    ru = [1, 2];
  Ct(
    { target: "Array", proto: !0, forced: String(ru) === String(ru.reverse()) },
    {
      reverse: function () {
        return Ft(this) && (this.length = this.length), nu.call(this);
      },
    }
  ),
    Ct(
      { target: "Object", stat: !0, forced: !f, sham: !f },
      { defineProperties: fe }
    ),
    Ct(
      { target: "Object", stat: !0, forced: !f, sham: !f },
      { defineProperty: P.f }
    );
  var iu = E.f,
    ou = m(function () {
      iu(1);
    });
  function su(t, e, n) {
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
  function uu(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function au(t) {
    return this.attr("rx", t);
  }
  function hu(t) {
    return this.attr("ry", t);
  }
  function lu(t) {
    return null == t ? this.cx() - this.rx() : this.cx(t + this.rx());
  }
  function cu(t) {
    return null == t ? this.cy() - this.ry() : this.cy(t + this.ry());
  }
  function fu(t) {
    return null == t ? this.attr("cx") : this.attr("cx", t);
  }
  function vu(t) {
    return null == t ? this.attr("cy") : this.attr("cy", t);
  }
  function du(t) {
    return null == t ? 2 * this.rx() : this.rx(new Ks(t).divide(2));
  }
  function pu(t) {
    return null == t ? 2 * this.ry() : this.ry(new Ks(t).divide(2));
  }
  Ct(
    { target: "Object", stat: !0, forced: !f || ou, sham: !f },
    {
      getOwnPropertyDescriptor: function (t, e) {
        return iu(d(t), e);
      },
    }
  ),
    Ct(
      { target: "Object", stat: !0, sham: !f },
      {
        getOwnPropertyDescriptors: function (t) {
          for (
            var e, n, r = d(t), i = E.f, o = _t(r), s = {}, u = 0;
            o.length > u;

          )
            void 0 !== (n = i(r, (e = o[u++]))) && zt(s, e, n);
          return s;
        },
      }
    ),
    Nr("Element", {
      untransform: function () {
        return this.attr("transform", null);
      },
      matrixify: function () {
        return (this.attr("transform") || "")
          .split(lo)
          .slice(0, -1)
          .map(function (t) {
            var e = t.trim().split("(");
            return [
              e[0],
              e[1].split(go).map(function (t) {
                return parseFloat(t);
              }),
            ];
          })
          .reverse()
          .reduce(function (t, e) {
            return "matrix" === e[0]
              ? t.lmultiply(Fs.fromArray(e[1]))
              : t[e[0]].apply(t, e[1]);
          }, new Fs());
      },
      toParent: function (t) {
        if (this === t) return this;
        var e = this.screenCTM(),
          n = t.screenCTM().inverse();
        return this.addTo(t).untransform().transform(n.multiply(e)), this;
      },
      toRoot: function () {
        return this.toParent(this.root());
      },
      transform: function (t, e) {
        if (null == t || "string" == typeof t) {
          var n = new Fs(this).decompose();
          return null == t ? n : n[t];
        }
        Fs.isMatrixLike(t) ||
          (t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {};
              t % 2
                ? uu(n, !0).forEach(function (t) {
                    su(e, t, n[t]);
                  })
                : Object.getOwnPropertyDescriptors
                ? Object.defineProperties(
                    e,
                    Object.getOwnPropertyDescriptors(n)
                  )
                : uu(n).forEach(function (t) {
                    Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(n, t)
                    );
                  });
            }
            return e;
          })({}, t, { origin: xi(t, this) }));
        var r = new Fs(!0 === e ? this : e || !1).transform(t);
        return this.attr("transform", r);
      },
    });
  var yu = {
      __proto__: null,
      rx: au,
      ry: hu,
      x: lu,
      y: cu,
      cx: fu,
      cy: vu,
      width: du,
      height: pu,
    },
    Shape = (function (t) {
      function Shape() {
        return Ti(this, Shape), ps(this, ys(Shape).apply(this, arguments));
      }
      return ws(Shape, Element), Shape;
    })();
  zi(Shape, "Shape");
  var Circle = (function (t) {
    function Circle(t) {
      return (
        Ti(this, Circle), ps(this, ys(Circle).call(this, Ri("circle", t), t))
      );
    }
    return (
      ws(Circle, Shape),
      as(Circle, [
        {
          key: "radius",
          value: function (t) {
            return this.attr("r", t);
          },
        },
        {
          key: "rx",
          value: function (t) {
            return this.attr("r", t);
          },
        },
        {
          key: "ry",
          value: function (t) {
            return this.rx(t);
          },
        },
        {
          key: "size",
          value: function (t) {
            return this.radius(new Ks(t).divide(2));
          },
        },
      ]),
      Circle
    );
  })();
  Vi(Circle, { x: lu, y: cu, cx: fu, cy: vu, width: du, height: pu }),
    Nr({
      Container: {
        circle: Hi(function (t) {
          return this.put(new Circle()).size(t).move(0, 0);
        }),
      },
    }),
    zi(Circle, "Circle");
  var Container = (function (t) {
    function Container() {
      return (
        Ti(this, Container), ps(this, ys(Container).apply(this, arguments))
      );
    }
    return (
      ws(Container, Element),
      as(Container, [
        {
          key: "flatten",
          value: function (t) {
            return (
              this.each(function () {
                return this instanceof Container
                  ? this.flatten(t).ungroup(t)
                  : this.toParent(t);
              }),
              this.node.firstElementChild || this.remove(),
              this
            );
          },
        },
        {
          key: "ungroup",
          value: function (t) {
            return (
              (t = t || this.parent()),
              this.each(function () {
                return this.toParent(t);
              }),
              this.remove(),
              this
            );
          },
        },
      ]),
      Container
    );
  })();
  zi(Container, "Container");
  var Defs = (function (t) {
    function Defs(t) {
      return Ti(this, Defs), ps(this, ys(Defs).call(this, Ri("defs", t), t));
    }
    return (
      ws(Defs, Container),
      as(Defs, [
        {
          key: "flatten",
          value: function () {
            return this;
          },
        },
        {
          key: "ungroup",
          value: function () {
            return this;
          },
        },
      ]),
      Defs
    );
  })();
  zi(Defs, "Defs");
  var Ellipse = (function (t) {
    function Ellipse(t) {
      return (
        Ti(this, Ellipse), ps(this, ys(Ellipse).call(this, Ri("ellipse", t), t))
      );
    }
    return (
      ws(Ellipse, Shape),
      as(Ellipse, [
        {
          key: "size",
          value: function (t, e) {
            var n = _i(this, t, e);
            return this.rx(new Ks(n.width).divide(2)).ry(
              new Ks(n.height).divide(2)
            );
          },
        },
      ]),
      Ellipse
    );
  })();
  Vi(Ellipse, yu),
    Nr("Container", {
      ellipse: Hi(function () {
        var t =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
          e =
            1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : t;
        return this.put(new Ellipse()).size(t, e).move(0, 0);
      }),
    }),
    zi(Ellipse, "Ellipse");
  var Stop = (function (t) {
    function Stop(t) {
      return Ti(this, Stop), ps(this, ys(Stop).call(this, Ri("stop", t), t));
    }
    return (
      ws(Stop, Element),
      as(Stop, [
        {
          key: "update",
          value: function (t) {
            return (
              ("number" == typeof t || t instanceof Ks) &&
                (t = {
                  offset: arguments[0],
                  color: arguments[1],
                  opacity: arguments[2],
                }),
              null != t.opacity && this.attr("stop-opacity", t.opacity),
              null != t.color && this.attr("stop-color", t.color),
              null != t.offset && this.attr("offset", new Ks(t.offset)),
              this
            );
          },
        },
      ]),
      Stop
    );
  })();
  function mu(t, e) {
    return "radialGradient" === (this._element || this).type
      ? this.attr({ fx: new Ks(t), fy: new Ks(e) })
      : this.attr({ x1: new Ks(t), y1: new Ks(e) });
  }
  function gu(t, e) {
    return "radialGradient" === (this._element || this).type
      ? this.attr({ cx: new Ks(t), cy: new Ks(e) })
      : this.attr({ x2: new Ks(t), y2: new Ks(e) });
  }
  zi(Stop, "Stop");
  var wu = { __proto__: null, from: mu, to: gu },
    Gradient = (function (t) {
      function Gradient(t, e) {
        return (
          Ti(this, Gradient),
          ps(
            this,
            ys(Gradient).call(
              this,
              Ri(t + "Gradient", "string" == typeof t ? null : t),
              e
            )
          )
        );
      }
      return (
        ws(Gradient, Container),
        as(Gradient, [
          {
            key: "stop",
            value: function (t, e, n) {
              return this.put(new Stop()).update(t, e, n);
            },
          },
          {
            key: "update",
            value: function (t) {
              return (
                this.clear(), "function" == typeof t && t.call(this, this), this
              );
            },
          },
          {
            key: "url",
            value: function () {
              return "url(#" + this.id() + ")";
            },
          },
          {
            key: "toString",
            value: function () {
              return this.url();
            },
          },
          {
            key: "attr",
            value: function (t, e, n) {
              return (
                "transform" === t && (t = "gradientTransform"),
                ms(ys(Gradient.prototype), "attr", this).call(this, t, e, n)
              );
            },
          },
          {
            key: "targets",
            value: function () {
              return Bs('svg [fill*="' + this.id() + '"]');
            },
          },
          {
            key: "bbox",
            value: function () {
              return new Ys();
            },
          },
        ]),
        Gradient
      );
    })();
  Vi(Gradient, wu),
    Nr({
      Container: {
        gradient: Hi(function (t, e) {
          return this.defs().gradient(t, e);
        }),
      },
      Defs: {
        gradient: Hi(function (t, e) {
          return this.put(new Gradient(t)).update(e);
        }),
      },
    }),
    zi(Gradient, "Gradient");
  var Pattern = (function (t) {
    function Pattern(t) {
      return (
        Ti(this, Pattern), ps(this, ys(Pattern).call(this, Ri("pattern", t), t))
      );
    }
    return (
      ws(Pattern, Container),
      as(Pattern, [
        {
          key: "url",
          value: function () {
            return "url(#" + this.id() + ")";
          },
        },
        {
          key: "update",
          value: function (t) {
            return (
              this.clear(), "function" == typeof t && t.call(this, this), this
            );
          },
        },
        {
          key: "toString",
          value: function () {
            return this.url();
          },
        },
        {
          key: "attr",
          value: function (t, e, n) {
            return (
              "transform" === t && (t = "patternTransform"),
              ms(ys(Pattern.prototype), "attr", this).call(this, t, e, n)
            );
          },
        },
        {
          key: "targets",
          value: function () {
            return Bs('svg [fill*="' + this.id() + '"]');
          },
        },
        {
          key: "bbox",
          value: function () {
            return new Ys();
          },
        },
      ]),
      Pattern
    );
  })();
  Nr({
    Container: {
      pattern: function () {
        var t;
        return (t = this.defs()).pattern.apply(t, arguments);
      },
    },
    Defs: {
      pattern: Hi(function (t, e, n) {
        return this.put(new Pattern()).update(n).attr({
          x: 0,
          y: 0,
          width: t,
          height: e,
          patternUnits: "userSpaceOnUse",
        });
      }),
    },
  }),
    zi(Pattern, "Pattern");
  var bu,
    Image = (function (t) {
      function Image(t) {
        return (
          Ti(this, Image), ps(this, ys(Image).call(this, Ri("image", t), t))
        );
      }
      return (
        ws(Image, Shape),
        as(Image, [
          {
            key: "load",
            value: function (t, n) {
              if (!t) return this;
              var r = new Ei.window.Image();
              return (
                Ro(
                  r,
                  "load",
                  function (t) {
                    var e = this.parent(Pattern);
                    0 === this.width() &&
                      0 === this.height() &&
                      this.size(r.width, r.height),
                      e instanceof Pattern &&
                        0 === e.width() &&
                        0 === e.height() &&
                        e.size(this.width(), this.height()),
                      "function" == typeof n && n.call(this, t);
                  },
                  this
                ),
                Ro(r, "load error", function () {
                  Lo(r);
                }),
                this.attr("href", (r.src = t), Ai)
              );
            },
          },
        ]),
        Image
      );
    })();
  (bu = function (t, e, n) {
    return (
      ("fill" !== t && "stroke" !== t) ||
        (mo.test(e) && (e = n.root().defs().image(e))),
      e instanceof Image &&
        (e = n
          .root()
          .defs()
          .pattern(0, 0, function (t) {
            t.add(e);
          })),
      e
    );
  }),
    tu.push(bu),
    Nr({
      Container: {
        image: Hi(function (t, e) {
          return this.put(new Image()).size(0, 0).load(t, e);
        }),
      },
    }),
    zi(Image, "Image");
  var _u = Gs("PointArray", Zs);
  Vi(_u, {
    toString: function () {
      for (var t = 0, e = this.length, n = []; t < e; t++)
        n.push(this[t].join(","));
      return n.join(" ");
    },
    toLine: function () {
      return { x1: this[0][0], y1: this[0][1], x2: this[1][0], y2: this[1][1] };
    },
    at: function (t) {
      if (!this.destination) return this;
      for (var e = 0, n = this.length, r = []; e < n; e++)
        r.push([
          this[e][0] + (this.destination[e][0] - this[e][0]) * t,
          this[e][1] + (this.destination[e][1] - this[e][1]) * t,
        ]);
      return new _u(r);
    },
    parse: function () {
      var t =
          0 < arguments.length && void 0 !== arguments[0]
            ? arguments[0]
            : [[0, 0]],
        e = [];
      if (t instanceof Array) {
        if (t[0] instanceof Array) return t;
      } else t = t.trim().split(go).map(parseFloat);
      t.length % 2 != 0 && t.pop();
      for (var n = 0, r = t.length; n < r; n += 2) e.push([t[n], t[n + 1]]);
      return e;
    },
    transform: function (t) {
      for (var e = [], n = 0; n < this.length; n++) {
        var r = this[n];
        e.push([t.a * r[0] + t.c * r[1] + t.e, t.b * r[0] + t.d * r[1] + t.f]);
      }
      return new _u(e);
    },
    move: function (t, e) {
      var n = this.bbox();
      if (((t -= n.x), (e -= n.y), !isNaN(t) && !isNaN(e)))
        for (var r = this.length - 1; 0 <= r; r--)
          this[r] = [this[r][0] + t, this[r][1] + e];
      return this;
    },
    size: function (t, e) {
      var n,
        r = this.bbox();
      for (n = this.length - 1; 0 <= n; n--)
        r.width && (this[n][0] = ((this[n][0] - r.x) * t) / r.width + r.x),
          r.height && (this[n][1] = ((this[n][1] - r.y) * e) / r.height + r.y);
      return this;
    },
    bbox: function () {
      var e = -1 / 0,
        n = -1 / 0,
        r = 1 / 0,
        i = 1 / 0;
      return (
        this.forEach(function (t) {
          (e = Math.max(t[0], e)),
            (n = Math.max(t[1], n)),
            (r = Math.min(t[0], r)),
            (i = Math.min(t[1], i));
        }),
        { x: r, y: i, width: e - r, height: n - i }
      );
    },
  });
  var xu = {
      __proto__: null,
      MorphArray: _u,
      x: function (t) {
        return null == t ? this.bbox().x : this.move(t, this.bbox().y);
      },
      y: function (t) {
        return null == t ? this.bbox().y : this.move(this.bbox().x, t);
      },
      width: function (t) {
        var e = this.bbox();
        return null == t ? e.width : this.size(t, e.height);
      },
      height: function (t) {
        var e = this.bbox();
        return null == t ? e.height : this.size(e.width, t);
      },
    },
    Line = (function (t) {
      function Line(t) {
        return Ti(this, Line), ps(this, ys(Line).call(this, Ri("line", t), t));
      }
      return (
        ws(Line, Shape),
        as(Line, [
          {
            key: "array",
            value: function () {
              return new _u([
                [this.attr("x1"), this.attr("y1")],
                [this.attr("x2"), this.attr("y2")],
              ]);
            },
          },
          {
            key: "plot",
            value: function (t, e, n, r) {
              return null == t
                ? this.array()
                : ((t =
                    void 0 !== e
                      ? { x1: t, y1: e, x2: n, y2: r }
                      : new _u(t).toLine()),
                  this.attr(t));
            },
          },
          {
            key: "move",
            value: function (t, e) {
              return this.attr(this.array().move(t, e).toLine());
            },
          },
          {
            key: "size",
            value: function (t, e) {
              var n = _i(this, t, e);
              return this.attr(this.array().size(n.width, n.height).toLine());
            },
          },
        ]),
        Line
      );
    })();
  Vi(Line, xu),
    Nr({
      Container: {
        line: Hi(function () {
          for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)
            e[n] = arguments[n];
          return Line.prototype.plot.apply(
            this.put(new Line()),
            null != e[0] ? e : [0, 0, 0, 0]
          );
        }),
      },
    }),
    zi(Line, "Line");
  var Marker = (function (t) {
    function Marker(t) {
      return (
        Ti(this, Marker), ps(this, ys(Marker).call(this, Ri("marker", t), t))
      );
    }
    return (
      ws(Marker, Container),
      as(Marker, [
        {
          key: "width",
          value: function (t) {
            return this.attr("markerWidth", t);
          },
        },
        {
          key: "height",
          value: function (t) {
            return this.attr("markerHeight", t);
          },
        },
        {
          key: "ref",
          value: function (t, e) {
            return this.attr("refX", t).attr("refY", e);
          },
        },
        {
          key: "update",
          value: function (t) {
            return (
              this.clear(), "function" == typeof t && t.call(this, this), this
            );
          },
        },
        {
          key: "toString",
          value: function () {
            return "url(#" + this.id() + ")";
          },
        },
      ]),
      Marker
    );
  })();
  Nr({
    Container: {
      marker: function () {
        var t;
        return (t = this.defs()).marker.apply(t, arguments);
      },
    },
    Defs: {
      marker: Hi(function (t, e, n) {
        return this.put(new Marker())
          .size(t, e)
          .ref(t / 2, e / 2)
          .viewbox(0, 0, t, e)
          .attr("orient", "auto")
          .update(n);
      }),
    },
    marker: {
      marker: function (t, e, n, r) {
        var i = ["marker"];
        return (
          "all" !== t && i.push(t),
          (i = i.join("-")),
          (t = e instanceof Marker ? e : this.defs().marker(e, n, r)),
          this.attr(i, t)
        );
      },
    },
  }),
    zi(Marker, "Marker");
  var ku = [].sort,
    Ou = [1, 2, 3],
    Su = m(function () {
      Ou.sort(void 0);
    }),
    Au = m(function () {
      Ou.sort(null);
    }),
    ju = Ui("sort");
  function Mu(e, n) {
    return function (t) {
      return null == t ? this[t] : ((this[e] = t), n && n.call(this), this);
    };
  }
  Ct(
    { target: "Array", proto: !0, forced: Su || !Au || ju },
    {
      sort: function (t) {
        return void 0 === t ? ku.call(It(this)) : ku.call(It(this), Se(t));
      },
    }
  );
  var Eu = {
      "-": function (t) {
        return t;
      },
      "<>": function (t) {
        return -Math.cos(t * Math.PI) / 2 + 0.5;
      },
      ">": function (t) {
        return Math.sin((t * Math.PI) / 2);
      },
      "<": function (t) {
        return 1 - Math.cos((t * Math.PI) / 2);
      },
      bezier: function (e, n, r, i) {
        return function (t) {
          return t < 0
            ? 0 < e
              ? (n / e) * t
              : 0 < r
              ? (i / r) * t
              : 0
            : 1 < t
            ? r < 1
              ? ((1 - i) / (1 - r)) * t + (i - r) / (1 - r)
              : e < 1
              ? ((1 - n) / (1 - e)) * t + (n - e) / (1 - e)
              : 1
            : 3 * t * Math.pow(1 - t, 2) * n +
              3 * Math.pow(t, 2) * (1 - t) * i +
              Math.pow(t, 3);
        };
      },
      steps: function (i) {
        var o =
          1 < arguments.length && void 0 !== arguments[1]
            ? arguments[1]
            : "end";
        o = o.split("-").reverse()[0];
        var s = i;
        return (
          "none" === o ? --s : "both" === o && ++s,
          function (t) {
            var e =
                1 < arguments.length && void 0 !== arguments[1] && arguments[1],
              n = Math.floor(t * i),
              r = (t * n) % 1 == 0;
            return (
              ("start" !== o && "both" !== o) || ++n,
              e && r && --n,
              0 <= t && n < 0 && (n = 0),
              t <= 1 && s < n && (n = s),
              n / s
            );
          }
        );
      },
    },
    Tu = (function () {
      function t() {
        Ti(this, t);
      }
      return (
        as(t, [
          {
            key: "done",
            value: function () {
              return !1;
            },
          },
        ]),
        t
      );
    })(),
    Cu = (function (t) {
      function n(t) {
        var e;
        return (
          Ti(this, n),
          ((e = ps(this, ys(n).call(this))).ease = Eu[t || Qs.ease] || t),
          e
        );
      }
      return (
        ws(n, Tu),
        as(n, [
          {
            key: "step",
            value: function (t, e, n) {
              return "number" != typeof t
                ? n < 1
                  ? t
                  : e
                : t + (e - t) * this.ease(n);
            },
          },
        ]),
        n
      );
    })(),
    Pu = (function (t) {
      function n(t) {
        var e;
        return Ti(this, n), ((e = ps(this, ys(n).call(this))).stepper = t), e;
      }
      return (
        ws(n, Tu),
        as(n, [
          {
            key: "step",
            value: function (t, e, n, r) {
              return this.stepper(t, e, n, r);
            },
          },
          {
            key: "done",
            value: function (t) {
              return t.done;
            },
          },
        ]),
        n
      );
    })();
  function Iu() {
    var t = (this._duration || 500) / 1e3,
      e = this._overshoot || 0,
      n = Math.PI,
      r = Math.log(e / 100 + 1e-10),
      i = -r / Math.sqrt(n * n + r * r),
      o = 3.9 / (i * t);
    (this.d = 2 * i * o), (this.k = o * o);
  }
  var Nu = (function (t) {
    function r(t, e) {
      var n;
      return (
        Ti(this, r),
        (n = ps(this, ys(r).call(this))).duration(t || 500).overshoot(e || 0),
        n
      );
    }
    return (
      ws(r, Pu),
      as(r, [
        {
          key: "step",
          value: function (t, e, n, r) {
            if ("string" == typeof t) return t;
            if (((r.done = n === 1 / 0), n === 1 / 0)) return e;
            if (0 === n) return t;
            100 < n && (n = 16), (n /= 1e3);
            var i = r.velocity || 0,
              o = -this.d * i - this.k * (t - e),
              s = t + i * n + (o * n * n) / 2;
            return (
              (r.velocity = i + o * n),
              (r.done = Math.abs(e - s) + Math.abs(i) < 0.002),
              r.done ? e : s
            );
          },
        },
      ]),
      r
    );
  })();
  Vi(Nu, { duration: Mu("_duration", Iu), overshoot: Mu("_overshoot", Iu) });
  var Du = (function (t) {
    function o(t, e, n, r) {
      var i;
      return (
        Ti(this, o),
        (t = null == t ? 0.1 : t),
        (e = null == e ? 0.01 : e),
        (n = null == n ? 0 : n),
        (r = null == r ? 1e3 : r),
        (i = ps(this, ys(o).call(this))).p(t).i(e).d(n).windup(r),
        i
      );
    }
    return (
      ws(o, Pu),
      as(o, [
        {
          key: "step",
          value: function (t, e, n, r) {
            if ("string" == typeof t) return t;
            if (((r.done = n === 1 / 0), n === 1 / 0)) return e;
            if (0 === n) return t;
            var i = e - t,
              o = (r.integral || 0) + i * n,
              s = (i - (r.error || 0)) / n,
              u = this.windup;
            return (
              !1 !== u && (o = Math.max(-u, Math.min(o, u))),
              (r.error = i),
              (r.integral = o),
              (r.done = Math.abs(i) < 0.001),
              r.done ? e : t + (this.P * i + this.I * o + this.D * s)
            );
          },
        },
      ]),
      o
    );
  })();
  Vi(Du, { windup: Mu("windup"), p: Mu("P"), i: Mu("I"), d: Mu("D") });
  var Ru = Gs("PathArray", Zs);
  function Lu(t, e, n, r) {
    return n + r.replace(ko, " .");
  }
  for (
    var Fu = {
        M: function (t, e, n) {
          return (e.x = n.x = t[0]), (e.y = n.y = t[1]), ["M", e.x, e.y];
        },
        L: function (t, e) {
          return (e.x = t[0]), (e.y = t[1]), ["L", t[0], t[1]];
        },
        H: function (t, e) {
          return (e.x = t[0]), ["H", t[0]];
        },
        V: function (t, e) {
          return (e.y = t[0]), ["V", t[0]];
        },
        C: function (t, e) {
          return (
            (e.x = t[4]),
            (e.y = t[5]),
            ["C", t[0], t[1], t[2], t[3], t[4], t[5]]
          );
        },
        S: function (t, e) {
          return (e.x = t[2]), (e.y = t[3]), ["S", t[0], t[1], t[2], t[3]];
        },
        Q: function (t, e) {
          return (e.x = t[2]), (e.y = t[3]), ["Q", t[0], t[1], t[2], t[3]];
        },
        T: function (t, e) {
          return (e.x = t[0]), (e.y = t[1]), ["T", t[0], t[1]];
        },
        Z: function (t, e, n) {
          return (e.x = n.x), (e.y = n.y), ["Z"];
        },
        A: function (t, e) {
          return (
            (e.x = t[5]),
            (e.y = t[6]),
            ["A", t[0], t[1], t[2], t[3], t[4], t[5], t[6]]
          );
        },
      },
      zu = "mlhvqtcsaz".split(""),
      qu = 0,
      Yu = zu.length;
    qu < Yu;
    ++qu
  )
    Fu[zu[qu]] = (function (o) {
      return function (t, e, n) {
        if ("H" === o) t[0] = t[0] + e.x;
        else if ("V" === o) t[0] = t[0] + e.y;
        else if ("A" === o) (t[5] = t[5] + e.x), (t[6] = t[6] + e.y);
        else
          for (var r = 0, i = t.length; r < i; ++r)
            t[r] = t[r] + (r % 2 ? e.y : e.x);
        return Fu[o](t, e, n);
      };
    })(zu[qu].toUpperCase());
  Vi(Ru, {
    toString: function () {
      return (function (t) {
        for (var e = 0, n = t.length, r = ""; e < n; e++)
          (r += t[e][0]),
            null != t[e][1] &&
              ((r += t[e][1]),
              null != t[e][2] &&
                ((r += " "),
                (r += t[e][2]),
                null != t[e][3] &&
                  ((r += " "),
                  (r += t[e][3]),
                  (r += " "),
                  (r += t[e][4]),
                  null != t[e][5] &&
                    ((r += " "),
                    (r += t[e][5]),
                    (r += " "),
                    (r += t[e][6]),
                    null != t[e][7] && ((r += " "), (r += t[e][7]))))));
        return r + " ";
      })(this);
    },
    move: function (t, e) {
      var n = this.bbox();
      if (((t -= n.x), (e -= n.y), !isNaN(t) && !isNaN(e)))
        for (var r, i = this.length - 1; 0 <= i; i--)
          "M" === (r = this[i][0]) || "L" === r || "T" === r
            ? ((this[i][1] += t), (this[i][2] += e))
            : "H" === r
            ? (this[i][1] += t)
            : "V" === r
            ? (this[i][1] += e)
            : "C" === r || "S" === r || "Q" === r
            ? ((this[i][1] += t),
              (this[i][2] += e),
              (this[i][3] += t),
              (this[i][4] += e),
              "C" === r && ((this[i][5] += t), (this[i][6] += e)))
            : "A" === r && ((this[i][6] += t), (this[i][7] += e));
      return this;
    },
    size: function (t, e) {
      var n,
        r,
        i = this.bbox();
      for (
        i.width = 0 === i.width ? 1 : i.width,
          i.height = 0 === i.height ? 1 : i.height,
          n = this.length - 1;
        0 <= n;
        n--
      )
        "M" === (r = this[n][0]) || "L" === r || "T" === r
          ? ((this[n][1] = ((this[n][1] - i.x) * t) / i.width + i.x),
            (this[n][2] = ((this[n][2] - i.y) * e) / i.height + i.y))
          : "H" === r
          ? (this[n][1] = ((this[n][1] - i.x) * t) / i.width + i.x)
          : "V" === r
          ? (this[n][1] = ((this[n][1] - i.y) * e) / i.height + i.y)
          : "C" === r || "S" === r || "Q" === r
          ? ((this[n][1] = ((this[n][1] - i.x) * t) / i.width + i.x),
            (this[n][2] = ((this[n][2] - i.y) * e) / i.height + i.y),
            (this[n][3] = ((this[n][3] - i.x) * t) / i.width + i.x),
            (this[n][4] = ((this[n][4] - i.y) * e) / i.height + i.y),
            "C" === r &&
              ((this[n][5] = ((this[n][5] - i.x) * t) / i.width + i.x),
              (this[n][6] = ((this[n][6] - i.y) * e) / i.height + i.y)))
          : "A" === r &&
            ((this[n][1] = (this[n][1] * t) / i.width),
            (this[n][2] = (this[n][2] * e) / i.height),
            (this[n][6] = ((this[n][6] - i.x) * t) / i.width + i.x),
            (this[n][7] = ((this[n][7] - i.y) * e) / i.height + i.y));
      return this;
    },
    equalCommands: function (t) {
      var e, n, r;
      for (
        t = new Ru(t), r = this.length === t.length, e = 0, n = this.length;
        r && e < n;
        e++
      )
        r = this[e][0] === t[e][0];
      return r;
    },
    morph: function (t) {
      return (
        (t = new Ru(t)),
        this.equalCommands(t)
          ? (this.destination = t)
          : (this.destination = null),
        this
      );
    },
    at: function (t) {
      if (!this.destination) return this;
      var e,
        n,
        r,
        i,
        o = this,
        s = this.destination.value,
        u = [],
        a = new Ru();
      for (e = 0, n = o.length; e < n; e++) {
        for (u[e] = [o[e][0]], r = 1, i = o[e].length; r < i; r++)
          u[e][r] = o[e][r] + (s[e][r] - o[e][r]) * t;
        "A" === u[e][0] &&
          ((u[e][4] = +(0 !== u[e][4])), (u[e][5] = +(0 !== u[e][5])));
      }
      return (a.value = u), a;
    },
    parse: function () {
      var t,
        e =
          0 < arguments.length && void 0 !== arguments[0]
            ? arguments[0]
            : [["M", 0, 0]];
      if (e instanceof Ru) return e;
      var n = { M: 2, L: 2, H: 1, V: 1, C: 6, S: 4, Q: 4, T: 2, A: 7, Z: 0 };
      e =
        "string" == typeof e
          ? e
              .replace(xo, Lu)
              .replace(bo, " $& ")
              .replace(wo, "$1 -")
              .trim()
              .split(go)
          : e.reduce(function (t, e) {
              return [].concat.call(t, e);
            }, []);
      for (
        var r = [], i = new Rs(), o = new Rs(), s = 0, u = e.length;
        _o.test(e[s])
          ? ((t = e[s]), ++s)
          : "M" === t
          ? (t = "L")
          : "m" === t && (t = "l"),
          r.push(
            Fu[t].call(
              null,
              e.slice(s, (s += n[t.toUpperCase()])).map(parseFloat),
              i,
              o
            )
          ),
          s < u;

      );
      return r;
    },
    bbox: function () {
      return (
        zs().path.setAttribute("d", this.toString()), zs.nodes.path.getBBox()
      );
    },
  });
  var Xu = (function () {
      function e(t) {
        Ti(this, e),
          (this._stepper = t || new Cu("-")),
          (this._from = null),
          (this._to = null),
          (this._type = null),
          (this._context = null),
          (this._morphObj = null);
      }
      return (
        as(e, [
          {
            key: "from",
            value: function (t) {
              return null == t
                ? this._from
                : ((this._from = this._set(t)), this);
            },
          },
          {
            key: "to",
            value: function (t) {
              return null == t ? this._to : ((this._to = this._set(t)), this);
            },
          },
          {
            key: "type",
            value: function (t) {
              return null == t ? this._type : ((this._type = t), this);
            },
          },
          {
            key: "_set",
            value: function (t) {
              if (!this._type) {
                var e = ce(t);
                "number" === e
                  ? this.type(Ks)
                  : "string" === e
                  ? fs.isColor(t)
                    ? this.type(fs)
                    : go.test(t)
                    ? this.type(bo.test(t) ? Ru : Zs)
                    : so.test(t)
                    ? this.type(Ks)
                    : this.type(Gu)
                  : -1 < Bu.indexOf(t.constructor)
                  ? this.type(t.constructor)
                  : Array.isArray(t)
                  ? this.type(Zs)
                  : "object" === e
                  ? this.type(Hu)
                  : this.type(Gu);
              }
              var n = new this._type(t);
              return (
                this._type === fs &&
                  (n = this._to
                    ? n[this._to[4]]()
                    : this._from
                    ? n[this._from[4]]()
                    : n),
                (n = n.toArray()),
                (this._morphObj = this._morphObj || new this._type()),
                (this._context =
                  this._context ||
                  Array.apply(null, Array(n.length))
                    .map(Object)
                    .map(function (t) {
                      return (t.done = !0), t;
                    })),
                n
              );
            },
          },
          {
            key: "stepper",
            value: function (t) {
              return null == t ? this._stepper : ((this._stepper = t), this);
            },
          },
          {
            key: "done",
            value: function () {
              return this._context
                .map(this._stepper.done)
                .reduce(function (t, e) {
                  return t && e;
                }, !0);
            },
          },
          {
            key: "at",
            value: function (n) {
              var r = this;
              return this._morphObj.fromArray(
                this._from.map(function (t, e) {
                  return r._stepper.step(
                    t,
                    r._to[e],
                    n,
                    r._context[e],
                    r._context
                  );
                })
              );
            },
          },
        ]),
        e
      );
    })(),
    Gu = (function () {
      function t() {
        Ti(this, t), this.init.apply(this, arguments);
      }
      return (
        as(t, [
          {
            key: "init",
            value: function (t) {
              return (t = Array.isArray(t) ? t[0] : t), (this.value = t), this;
            },
          },
          {
            key: "valueOf",
            value: function () {
              return this.value;
            },
          },
          {
            key: "toArray",
            value: function () {
              return [this.value];
            },
          },
        ]),
        t
      );
    })(),
    Vu = (function () {
      function e() {
        Ti(this, e), this.init.apply(this, arguments);
      }
      return (
        as(e, [
          {
            key: "init",
            value: function (t) {
              return (
                Array.isArray(t) &&
                  (t = {
                    scaleX: t[0],
                    scaleY: t[1],
                    shear: t[2],
                    rotate: t[3],
                    translateX: t[4],
                    translateY: t[5],
                    originX: t[6],
                    originY: t[7],
                  }),
                Object.assign(this, e.defaults, t),
                this
              );
            },
          },
          {
            key: "toArray",
            value: function () {
              var t = this;
              return [
                t.scaleX,
                t.scaleY,
                t.shear,
                t.rotate,
                t.translateX,
                t.translateY,
                t.originX,
                t.originY,
              ];
            },
          },
        ]),
        e
      );
    })();
  Vu.defaults = {
    scaleX: 1,
    scaleY: 1,
    shear: 0,
    rotate: 0,
    translateX: 0,
    translateY: 0,
    originX: 0,
    originY: 0,
  };
  var Hu = (function () {
      function t() {
        Ti(this, t), this.init.apply(this, arguments);
      }
      return (
        as(t, [
          {
            key: "init",
            value: function (t) {
              if (((this.values = []), !Array.isArray(t))) {
                t = t || {};
                var e = [];
                for (var n in t) e.push([n, t[n]]);
                return (
                  e.sort(function (t, e) {
                    return t[0] - e[0];
                  }),
                  (this.values = e.reduce(function (t, e) {
                    return t.concat(e);
                  }, [])),
                  this
                );
              }
              this.values = t;
            },
          },
          {
            key: "valueOf",
            value: function () {
              for (
                var t = {}, e = this.values, n = 0, r = e.length;
                n < r;
                n += 2
              )
                t[e[n]] = e[n + 1];
              return t;
            },
          },
          {
            key: "toArray",
            value: function () {
              return this.values;
            },
          },
        ]),
        t
      );
    })(),
    Bu = [Gu, Vu, Hu];
  function Uu() {
    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
    Bu.push.apply(Bu, Cr([].concat(t)));
  }
  function $u() {
    Vi(Bu, {
      to: function (t) {
        return new Xu().type(this.constructor).from(this.valueOf()).to(t);
      },
      fromArray: function (t) {
        return this.init(t), this;
      },
    });
  }
  var Path = (function (t) {
    function Path(t) {
      return Ti(this, Path), ps(this, ys(Path).call(this, Ri("path", t), t));
    }
    return (
      ws(Path, Shape),
      as(Path, [
        {
          key: "array",
          value: function () {
            return this._array || (this._array = new Ru(this.attr("d")));
          },
        },
        {
          key: "plot",
          value: function (t) {
            return null == t
              ? this.array()
              : this.clear().attr(
                  "d",
                  "string" == typeof t ? t : (this._array = new Ru(t))
                );
          },
        },
        {
          key: "clear",
          value: function () {
            return delete this._array, this;
          },
        },
        {
          key: "move",
          value: function (t, e) {
            return this.attr("d", this.array().move(t, e));
          },
        },
        {
          key: "x",
          value: function (t) {
            return null == t ? this.bbox().x : this.move(t, this.bbox().y);
          },
        },
        {
          key: "y",
          value: function (t) {
            return null == t ? this.bbox().y : this.move(this.bbox().x, t);
          },
        },
        {
          key: "size",
          value: function (t, e) {
            var n = _i(this, t, e);
            return this.attr("d", this.array().size(n.width, n.height));
          },
        },
        {
          key: "width",
          value: function (t) {
            return null == t
              ? this.bbox().width
              : this.size(t, this.bbox().height);
          },
        },
        {
          key: "height",
          value: function (t) {
            return null == t
              ? this.bbox().height
              : this.size(this.bbox().width, t);
          },
        },
        {
          key: "targets",
          value: function () {
            return Bs('svg textpath [href*="' + this.id() + '"]');
          },
        },
      ]),
      Path
    );
  })();
  (Path.prototype.MorphArray = Ru),
    Nr({
      Container: {
        path: Hi(function (t) {
          return this.put(new Path()).plot(t || new Ru());
        }),
      },
    }),
    zi(Path, "Path");
  var Qu = {
      __proto__: null,
      array: function () {
        return this._array || (this._array = new _u(this.attr("points")));
      },
      plot: function (t) {
        return null == t
          ? this.array()
          : this.clear().attr(
              "points",
              "string" == typeof t ? t : (this._array = new _u(t))
            );
      },
      clear: function () {
        return delete this._array, this;
      },
      move: function (t, e) {
        return this.attr("points", this.array().move(t, e));
      },
      size: function (t, e) {
        var n = _i(this, t, e);
        return this.attr("points", this.array().size(n.width, n.height));
      },
    },
    Polygon = (function (t) {
      function Polygon(t) {
        return (
          Ti(this, Polygon),
          ps(this, ys(Polygon).call(this, Ri("polygon", t), t))
        );
      }
      return ws(Polygon, Shape), Polygon;
    })();
  Nr({
    Container: {
      polygon: Hi(function (t) {
        return this.put(new Polygon()).plot(t || new _u());
      }),
    },
  }),
    Vi(Polygon, xu),
    Vi(Polygon, Qu),
    zi(Polygon, "Polygon");
  var Polyline = (function (t) {
    function Polyline(t) {
      return (
        Ti(this, Polyline),
        ps(this, ys(Polyline).call(this, Ri("polyline", t), t))
      );
    }
    return ws(Polyline, Shape), Polyline;
  })();
  Nr({
    Container: {
      polyline: Hi(function (t) {
        return this.put(new Polyline()).plot(t || new _u());
      }),
    },
  }),
    Vi(Polyline, xu),
    Vi(Polyline, Qu),
    zi(Polyline, "Polyline");
  var Rect = (function (t) {
    function Rect(t) {
      return Ti(this, Rect), ps(this, ys(Rect).call(this, Ri("rect", t), t));
    }
    return ws(Rect, Shape), Rect;
  })();
  Vi(Rect, { rx: au, ry: hu }),
    Nr({
      Container: {
        rect: Hi(function (t, e) {
          return this.put(new Rect()).size(t, e);
        }),
      },
    }),
    zi(Rect, "Rect");
  var Wu = Math.max,
    Ju = Math.min;
  Ct(
    { target: "Array", proto: !0, forced: !Wt("splice") },
    {
      splice: function (t, e) {
        var n,
          r,
          A,
          i,
          o,
          s,
          u = It(this),
          a = ht(u.length),
          h = ft(t, a),
          l = arguments.length;
        if (
          (0 === l
            ? (n = r = 0)
            : (r =
                1 === l
                  ? ((n = 0), a - h)
                  : ((n = l - 2), Ju(Wu(ut(e), 0), a - h))),
          9007199254740991 < a + n - r)
        )
          throw TypeError("Maximum allowed length exceeded");
        for (A = Me(u, r), i = 0; i < r; i++)
          (o = h + i) in u && zt(A, i, u[o]);
        if (n < (A.length = r)) {
          for (i = h; i < a - r; i++)
            (s = i + n), (o = i + r) in u ? (u[s] = u[o]) : delete u[s];
          for (i = a; a - r + n < i; i--) delete u[i - 1];
        } else if (r < n)
          for (i = a - r; h < i; i--)
            (s = i + n - 1), (o = i + r - 1) in u ? (u[s] = u[o]) : delete u[s];
        for (i = 0; i < n; i++) u[i + h] = arguments[i + 2];
        return (u.length = a - r + n), A;
      },
    }
  );
  var Zu = (function () {
      function t() {
        Ti(this, t), (this._first = null), (this._last = null);
      }
      return (
        as(t, [
          {
            key: "push",
            value: function (t) {
              var e = t.next ? t : { value: t, next: null, prev: null };
              return (
                this._last
                  ? ((e.prev = this._last),
                    (this._last.next = e),
                    (this._last = e))
                  : ((this._last = e), (this._first = e)),
                e
              );
            },
          },
          {
            key: "shift",
            value: function () {
              var t = this._first;
              return t
                ? ((this._first = t.next),
                  this._first && (this._first.prev = null),
                  (this._last = this._first ? this._last : null),
                  t.value)
                : null;
            },
          },
          {
            key: "first",
            value: function () {
              return this._first && this._first.value;
            },
          },
          {
            key: "last",
            value: function () {
              return this._last && this._last.value;
            },
          },
          {
            key: "remove",
            value: function (t) {
              t.prev && (t.prev.next = t.next),
                t.next && (t.next.prev = t.prev),
                t === this._last && (this._last = t.prev),
                t === this._first && (this._first = t.next),
                (t.prev = null),
                (t.next = null);
            },
          },
        ]),
        t
      );
    })(),
    Ku = {
      nextDraw: null,
      frames: new Zu(),
      timeouts: new Zu(),
      immediates: new Zu(),
      timer: function () {
        return Ei.window.performance || Ei.window.Date;
      },
      transforms: [],
      frame: function (t) {
        var e = Ku.frames.push({ run: t });
        return (
          null === Ku.nextDraw &&
            (Ku.nextDraw = Ei.window.requestAnimationFrame(Ku._draw)),
          e
        );
      },
      timeout: function (t, e) {
        e = e || 0;
        var n = Ku.timer().now() + e,
          r = Ku.timeouts.push({ run: t, time: n });
        return (
          null === Ku.nextDraw &&
            (Ku.nextDraw = Ei.window.requestAnimationFrame(Ku._draw)),
          r
        );
      },
      immediate: function (t) {
        var e = Ku.immediates.push(t);
        return (
          null === Ku.nextDraw &&
            (Ku.nextDraw = Ei.window.requestAnimationFrame(Ku._draw)),
          e
        );
      },
      cancelFrame: function (t) {
        null != t && Ku.frames.remove(t);
      },
      clearTimeout: function (t) {
        null != t && Ku.timeouts.remove(t);
      },
      cancelImmediate: function (t) {
        null != t && Ku.immediates.remove(t);
      },
      _draw: function (t) {
        for (
          var e = null, n = Ku.timeouts.last();
          (e = Ku.timeouts.shift()) &&
          (t >= e.time ? e.run() : Ku.timeouts.push(e), e !== n);

        );
        for (
          var r = null, i = Ku.frames.last();
          r !== i && (r = Ku.frames.shift());

        )
          r.run(t);
        for (var o = null; (o = Ku.immediates.shift()); ) o();
        Ku.nextDraw =
          Ku.timeouts.first() || Ku.frames.first()
            ? Ei.window.requestAnimationFrame(Ku._draw)
            : null;
      },
    },
    ta = function (t) {
      var e = t.start,
        n = t.runner.duration();
      return { start: e, duration: n, end: e + n, runner: t.runner };
    },
    ea = function () {
      var t = Ei.window;
      return (t.performance || t.Date).now();
    },
    na = (function (t) {
      function n() {
        var t,
          e =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ea;
        return (
          Ti(this, n),
          ((t = ps(this, ys(n).call(this)))._timeSource = e),
          (t._startTime = 0),
          (t._speed = 1),
          (t._persist = 0),
          (t._nextFrame = null),
          (t._paused = !0),
          (t._runners = []),
          (t._runnerIds = []),
          (t._lastRunnerId = -1),
          (t._time = 0),
          (t._lastSourceTime = 0),
          (t._lastStepTime = 0),
          (t._step = t._stepFn.bind(ds(t), !1)),
          (t._stepImmediate = t._stepFn.bind(ds(t), !0)),
          t
        );
      }
      return (
        ws(n, Us),
        as(n, [
          {
            key: "schedule",
            value: function (t, e, n) {
              if (null == t) return this._runners.map(ta);
              var r = 0,
                i = this.getEndTime();
              if (((e = e || 0), null == n || "last" === n || "after" === n))
                r = i;
              else if ("absolute" === n || "start" === n) (r = e), (e = 0);
              else if ("now" === n) r = this._time;
              else {
                if ("relative" !== n)
                  throw new Error('Invalid value for the "when" parameter');
                var o = this._runners[t.id];
                o && ((r = o.start + e), (e = 0));
              }
              t.unschedule(), t.timeline(this);
              var s = t.persist(),
                u = {
                  persist: null === s ? this._persist : s,
                  start: r + e,
                  runner: t,
                };
              return (
                (this._lastRunnerId = t.id),
                this._runners.push(u),
                this._runners.sort(function (t, e) {
                  return t.start - e.start;
                }),
                (this._runnerIds = this._runners.map(function (t) {
                  return t.runner.id;
                })),
                this.updateTime()._continue(),
                this
              );
            },
          },
          {
            key: "unschedule",
            value: function (t) {
              var e = this._runnerIds.indexOf(t.id);
              return (
                e < 0 ||
                  (this._runners.splice(e, 1),
                  this._runnerIds.splice(e, 1),
                  t.timeline(null)),
                this
              );
            },
          },
          {
            key: "getEndTime",
            value: function () {
              var t =
                  this._runners[this._runnerIds.indexOf(this._lastRunnerId)],
                e = t ? t.runner.duration() : 0;
              return (t ? t.start : 0) + e;
            },
          },
          {
            key: "getEndTimeOfTimeline",
            value: function () {
              for (var t = 0, e = 0; e < this._runners.length; e++) {
                var n = this._runners[e],
                  r = n ? n.runner.duration() : 0,
                  i = (n ? n.start : 0) + r;
                t < i && (t = i);
              }
              return t;
            },
          },
          {
            key: "updateTime",
            value: function () {
              return (
                this.active() || (this._lastSourceTime = this._timeSource()),
                this
              );
            },
          },
          {
            key: "play",
            value: function () {
              return (this._paused = !1), this.updateTime()._continue();
            },
          },
          {
            key: "pause",
            value: function () {
              return (this._paused = !0), this._continue();
            },
          },
          {
            key: "stop",
            value: function () {
              return this.time(0), this.pause();
            },
          },
          {
            key: "finish",
            value: function () {
              return this.time(this.getEndTimeOfTimeline() + 1), this.pause();
            },
          },
          {
            key: "speed",
            value: function (t) {
              return null == t ? this._speed : ((this._speed = t), this);
            },
          },
          {
            key: "reverse",
            value: function (t) {
              var e = this.speed();
              if (null == t) return this.speed(-e);
              var n = Math.abs(e);
              return this.speed(t ? n : -n);
            },
          },
          {
            key: "seek",
            value: function (t) {
              return this.time(this._time + t);
            },
          },
          {
            key: "time",
            value: function (t) {
              return null == t
                ? this._time
                : ((this._time = t), this._continue(!0));
            },
          },
          {
            key: "persist",
            value: function (t) {
              return null == t ? this._persist : ((this._persist = t), this);
            },
          },
          {
            key: "source",
            value: function (t) {
              return null == t
                ? this._timeSource
                : ((this._timeSource = t), this);
            },
          },
          {
            key: "_stepFn",
            value: function () {
              var t =
                  0 < arguments.length &&
                  void 0 !== arguments[0] &&
                  arguments[0],
                e = this._timeSource(),
                n = e - this._lastSourceTime;
              t && (n = 0);
              var r = this._speed * n + (this._time - this._lastStepTime);
              (this._lastSourceTime = e),
                t ||
                  ((this._time += r),
                  (this._time = this._time < 0 ? 0 : this._time)),
                (this._lastStepTime = this._time),
                this.fire("time", this._time);
              for (var i = this._runners.length; i--; ) {
                var o = this._runners[i],
                  s = o.runner;
                this._time - o.start <= 0 && s.reset();
              }
              for (var u = !1, a = 0, h = this._runners.length; a < h; a++) {
                var l = this._runners[a],
                  c = l.runner,
                  f = r,
                  v = this._time - l.start;
                if (v <= 0) u = !0;
                else if ((v < f && (f = v), c.active()))
                  if (c.step(f).done) {
                    if (!0 !== l.persist) {
                      c.duration() - c.time() + this._time + l.persist <
                        this._time && (c.unschedule(), --a, --h);
                    }
                  } else u = !0;
              }
              return (
                (u && !(this._speed < 0 && 0 === this._time)) ||
                (this._runnerIds.length && this._speed < 0 && 0 < this._time)
                  ? this._continue()
                  : (this.pause(), this.fire("finished")),
                this
              );
            },
          },
          {
            key: "_continue",
            value: function () {
              var t =
                0 < arguments.length && void 0 !== arguments[0] && arguments[0];
              return (
                Ku.cancelFrame(this._nextFrame),
                (this._nextFrame = null),
                t
                  ? this._stepImmediate()
                  : (this._paused || (this._nextFrame = Ku.frame(this._step)),
                    this)
              );
            },
          },
          {
            key: "active",
            value: function () {
              return !!this._nextFrame;
            },
          },
        ]),
        n
      );
    })();
  function ra(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function ia(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? ra(n, !0).forEach(function (t) {
            su(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ra(n).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
  }
  Nr({
    Element: {
      timeline: function (t) {
        return null == t
          ? ((this._timeline = this._timeline || new na()), this._timeline)
          : ((this._timeline = t), this);
      },
    },
  });
  var oa = (function (t) {
    function o(t) {
      var e;
      return (
        Ti(this, o),
        ((e = ps(this, ys(o).call(this))).id = o.id++),
        (t =
          "function" == typeof (t = null == t ? Qs.duration : t)
            ? new Pu(t)
            : t),
        (e._element = null),
        (e._timeline = null),
        (e.done = !1),
        (e._queue = []),
        (e._duration = "number" == typeof t && t),
        (e._isDeclarative = t instanceof Pu),
        (e._stepper = e._isDeclarative ? t : new Cu()),
        (e._history = {}),
        (e.enabled = !0),
        (e._time = 0),
        (e._lastTime = 0),
        (e._reseted = !0),
        (e.transforms = new Fs()),
        (e.transformId = 1),
        (e._haveReversed = !1),
        (e._reverse = !1),
        (e._loopsDone = 0),
        (e._swing = !1),
        (e._wait = 0),
        (e._times = 1),
        (e._frameId = null),
        (e._persist = !!e._isDeclarative || null),
        e
      );
    }
    return (
      ws(o, Us),
      as(
        o,
        [
          {
            key: "element",
            value: function (t) {
              return null == t
                ? this._element
                : ((this._element = t)._prepareRunner(), this);
            },
          },
          {
            key: "timeline",
            value: function (t) {
              return void 0 === t
                ? this._timeline
                : ((this._timeline = t), this);
            },
          },
          {
            key: "animate",
            value: function (t, e, n) {
              var r = o.sanitise(t, e, n),
                i = new o(r.duration);
              return (
                this._timeline && i.timeline(this._timeline),
                this._element && i.element(this._element),
                i.loop(r).schedule(r.delay, r.when)
              );
            },
          },
          {
            key: "schedule",
            value: function (t, e, n) {
              if (
                (t instanceof na || ((n = e), (e = t), (t = this.timeline())),
                !t)
              )
                throw Error("Runner cannot be scheduled without timeline");
              return t.schedule(this, e, n), this;
            },
          },
          {
            key: "unschedule",
            value: function () {
              var t = this.timeline();
              return t && t.unschedule(this), this;
            },
          },
          {
            key: "loop",
            value: function (t, e, n) {
              return (
                "object" === ce(t) &&
                  ((e = t.swing), (n = t.wait), (t = t.times)),
                (this._times = t || 1 / 0),
                (this._swing = e || !1),
                (this._wait = n || 0),
                !0 === this._times && (this._times = 1 / 0),
                this
              );
            },
          },
          {
            key: "delay",
            value: function (t) {
              return this.animate(0, t);
            },
          },
          {
            key: "queue",
            value: function (t, e, n, r) {
              return (
                this._queue.push({
                  initialiser: t || $s,
                  runner: e || $s,
                  retarget: n,
                  isTransform: r,
                  initialised: !1,
                  finished: !1,
                }),
                this.timeline() && this.timeline()._continue(),
                this
              );
            },
          },
          {
            key: "during",
            value: function (t) {
              return this.queue(null, t);
            },
          },
          {
            key: "after",
            value: function (t) {
              return this.on("finished", t);
            },
          },
          {
            key: "time",
            value: function (t) {
              if (null == t) return this._time;
              var e = t - this._time;
              return this.step(e), this;
            },
          },
          {
            key: "duration",
            value: function () {
              return this._times * (this._wait + this._duration) - this._wait;
            },
          },
          {
            key: "loops",
            value: function (t) {
              var e = this._duration + this._wait;
              if (null == t) {
                var n = Math.floor(this._time / e),
                  r = (this._time - n * e) / this._duration;
                return Math.min(n + r, this._times);
              }
              var i = t % 1,
                o = e * Math.floor(t) + this._duration * i;
              return this.time(o);
            },
          },
          {
            key: "persist",
            value: function (t) {
              return null == t ? this._persist : ((this._persist = t), this);
            },
          },
          {
            key: "position",
            value: function (t) {
              var e,
                n = this._time,
                i = this._duration,
                o = this._wait,
                r = this._times,
                s = this._swing,
                u = this._reverse;
              if (null == t) {
                var a = function (t) {
                    var e = s * Math.floor((t % (2 * (o + i))) / (o + i)),
                      n = (e && !u) || (!e && u),
                      r = (Math.pow(-1, n) * (t % (o + i))) / i + n;
                    return Math.max(Math.min(r, 1), 0);
                  },
                  h = r * (o + i) - o;
                return (
                  (e =
                    n <= 0
                      ? Math.round(a(1e-5))
                      : n < h
                      ? a(n)
                      : Math.round(a(h - 1e-5))),
                  e
                );
              }
              var l = Math.floor(this.loops()),
                c = s && l % 2 == 0;
              return (
                (e = l + ((c && !u) || (u && c) ? t : 1 - t)), this.loops(e)
              );
            },
          },
          {
            key: "progress",
            value: function (t) {
              return null == t
                ? Math.min(1, this._time / this.duration())
                : this.time(t * this.duration());
            },
          },
          {
            key: "step",
            value: function (t) {
              if (!this.enabled) return this;
              (t = null == t ? 16 : t), (this._time += t);
              var e = this.position(),
                n = this._lastPosition !== e && 0 <= this._time;
              this._lastPosition = e;
              var r = this.duration(),
                i = this._lastTime <= 0 && 0 < this._time,
                o = this._lastTime < r && this._time >= r;
              (this._lastTime = this._time), i && this.fire("start", this);
              var s = this._isDeclarative;
              if (
                ((this.done = !s && !o && this._time >= r),
                (this._reseted = !1),
                n || s)
              ) {
                this._initialise(n), (this.transforms = new Fs());
                var u = this._run(s ? t : e);
                this.fire("step", this);
              }
              return (
                (this.done = this.done || (u && s)),
                o && this.fire("finished", this),
                this
              );
            },
          },
          {
            key: "reset",
            value: function () {
              return (
                this._reseted || (this.time(0), (this._reseted = !0)), this
              );
            },
          },
          {
            key: "finish",
            value: function () {
              return this.step(1 / 0);
            },
          },
          {
            key: "reverse",
            value: function (t) {
              return (this._reverse = null == t ? !this._reverse : t), this;
            },
          },
          {
            key: "ease",
            value: function (t) {
              return (this._stepper = new Cu(t)), this;
            },
          },
          {
            key: "active",
            value: function (t) {
              return null == t ? this.enabled : ((this.enabled = t), this);
            },
          },
          {
            key: "_rememberMorpher",
            value: function (t, e) {
              if (
                ((this._history[t] = {
                  morpher: e,
                  caller: this._queue[this._queue.length - 1],
                }),
                this._isDeclarative)
              ) {
                var n = this.timeline();
                n && n.play();
              }
            },
          },
          {
            key: "_tryRetarget",
            value: function (t, e, n) {
              if (this._history[t]) {
                if (!this._history[t].caller.initialised) {
                  var r = this._queue.indexOf(this._history[t].caller);
                  return this._queue.splice(r, 1), !1;
                }
                this._history[t].caller.retarget
                  ? this._history[t].caller.retarget(e, n)
                  : this._history[t].morpher.to(e),
                  (this._history[t].caller.finished = !1);
                var i = this.timeline();
                return i && i.play(), !0;
              }
              return !1;
            },
          },
          {
            key: "_initialise",
            value: function (t) {
              if (t || this._isDeclarative)
                for (var e = 0, n = this._queue.length; e < n; ++e) {
                  var r = this._queue[e],
                    i = this._isDeclarative || (!r.initialised && t);
                  (t = !r.finished),
                    i && t && (r.initialiser.call(this), (r.initialised = !0));
                }
            },
          },
          {
            key: "_run",
            value: function (t) {
              for (var e = !0, n = 0, r = this._queue.length; n < r; ++n) {
                var i = this._queue[n],
                  o = i.runner.call(this, t);
                (i.finished = i.finished || !0 === o), (e = e && i.finished);
              }
              return e;
            },
          },
          {
            key: "addTransform",
            value: function (t, e) {
              return this.transforms.lmultiplyO(t), this;
            },
          },
          {
            key: "clearTransform",
            value: function () {
              return (this.transforms = new Fs()), this;
            },
          },
          {
            key: "clearTransformsFromQueue",
            value: function () {
              (this.done &&
                this._timeline &&
                this._timeline._runnerIds.includes(this.id)) ||
                (this._queue = this._queue.filter(function (t) {
                  return !t.isTransform;
                }));
            },
          },
        ],
        [
          {
            key: "sanitise",
            value: function (t, e, n) {
              var r = 1,
                i = !1,
                o = 0;
              return (
                (e = e || Qs.delay),
                (n = n || "last"),
                "object" !== ce((t = t || Qs.duration)) ||
                  t instanceof Tu ||
                  ((e = t.delay || e),
                  (n = t.when || n),
                  (i = t.swing || i),
                  (r = t.times || r),
                  (o = t.wait || o),
                  (t = t.duration || Qs.duration)),
                { duration: t, delay: e, swing: i, times: r, wait: o, when: n }
              );
            },
          },
        ]
      ),
      o
    );
  })();
  oa.id = 0;
  var sa = (function () {
    function r() {
      var t =
          0 < arguments.length && void 0 !== arguments[0]
            ? arguments[0]
            : new Fs(),
        e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : -1,
        n = !(2 < arguments.length && void 0 !== arguments[2]) || arguments[2];
      Ti(this, r), (this.transforms = t), (this.id = e), (this.done = n);
    }
    return (
      as(r, [{ key: "clearTransformsFromQueue", value: function () {} }]), r
    );
  })();
  Vi([oa, sa], {
    mergeWith: function (t) {
      return new sa(t.transforms.lmultiply(this.transforms), t.id);
    },
  });
  var ua = function (t, e) {
      return t.lmultiplyO(e);
    },
    aa = function (t) {
      return t.transforms;
    };
  var ha = (function () {
    function t() {
      Ti(this, t), (this.runners = []), (this.ids = []);
    }
    return (
      as(t, [
        {
          key: "add",
          value: function (t) {
            if (!this.runners.includes(t)) {
              var e = t.id + 1;
              return this.runners.push(t), this.ids.push(e), this;
            }
          },
        },
        {
          key: "getByID",
          value: function (t) {
            return this.runners[this.ids.indexOf(t + 1)];
          },
        },
        {
          key: "remove",
          value: function (t) {
            var e = this.ids.indexOf(t + 1);
            return this.ids.splice(e, 1), this.runners.splice(e, 1), this;
          },
        },
        {
          key: "merge",
          value: function () {
            var n = this,
              r = null;
            return (
              this.runners.forEach(function (t, e) {
                r &&
                  t.done &&
                  r.done &&
                  (!t._timeline || !t._timeline._runnerIds.includes(t.id)) &&
                  (!r._timeline || !r._timeline._runnerIds.includes(r.id)) &&
                  (n.remove(t.id), n.edit(r.id, t.mergeWith(r))),
                  (r = t);
              }),
              this
            );
          },
        },
        {
          key: "edit",
          value: function (t, e) {
            var n = this.ids.indexOf(t + 1);
            return (
              this.ids.splice(n, 1, t + 1), this.runners.splice(n, 1, e), this
            );
          },
        },
        {
          key: "length",
          value: function () {
            return this.ids.length;
          },
        },
        {
          key: "clearBefore",
          value: function (t) {
            var e = this.ids.indexOf(t + 1) || 1;
            return (
              this.ids.splice(0, e, 0),
              this.runners.splice(0, e, new sa()).forEach(function (t) {
                return t.clearTransformsFromQueue();
              }),
              this
            );
          },
        },
      ]),
      t
    );
  })();
  Nr({
    Element: {
      animate: function (t, e, n) {
        var r = oa.sanitise(t, e, n),
          i = this.timeline();
        return new oa(r.duration)
          .loop(r)
          .element(this)
          .timeline(i.play())
          .schedule(r.delay, r.when);
      },
      delay: function (t, e) {
        return this.animate(0, t, e);
      },
      _clearTransformRunnersBefore: function (t) {
        this._transformationRunners.clearBefore(t.id);
      },
      _currentTransform: function (e) {
        return this._transformationRunners.runners
          .filter(function (t) {
            return t.id <= e.id;
          })
          .map(aa)
          .reduce(ua, new Fs());
      },
      _addRunner: function (t) {
        this._transformationRunners.add(t),
          Ku.cancelImmediate(this._frameId),
          (this._frameId = Ku.immediate(
            function () {
              var t = this._transformationRunners.runners
                .map(aa)
                .reduce(ua, new Fs());
              this.transform(t),
                this._transformationRunners.merge(),
                1 === this._transformationRunners.length() &&
                  (this._frameId = null);
            }.bind(this)
          ));
      },
      _prepareRunner: function () {
        null == this._frameId &&
          (this._transformationRunners = new ha().add(new sa(new Fs(this))));
      },
    },
  }),
    Vi(oa, {
      attr: function (t, e) {
        return this.styleAttr("attr", t, e);
      },
      css: function (t, e) {
        return this.styleAttr("css", t, e);
      },
      styleAttr: function (e, n, t) {
        if ("object" === ce(n)) {
          for (var r in n) this.styleAttr(e, r, n[r]);
          return this;
        }
        var i = new Xu(this._stepper).to(t);
        return (
          this.queue(
            function () {
              i = i.from(this.element()[e](n));
            },
            function (t) {
              return this.element()[e](n, i.at(t)), i.done();
            }
          ),
          this
        );
      },
      zoom: function (t, n) {
        if (this._tryRetarget("zoom", gu, n)) return this;
        var r = new Xu(this._stepper).to(new Ks(t));
        return (
          this.queue(
            function () {
              r = r.from(this.element().zoom());
            },
            function (t) {
              return this.element().zoom(r.at(t), n), r.done();
            },
            function (t, e) {
              (n = e), r.to(t);
            }
          ),
          this._rememberMorpher("zoom", r),
          this
        );
      },
      transform: function (v, d, p) {
        if (
          ((d = v.relative || d),
          this._isDeclarative && !d && this._tryRetarget("transform", v))
        )
          return this;
        var y = Fs.isMatrixLike(v);
        p = null != v.affine ? v.affine : null != p ? p : !y;
        var m,
          g,
          w,
          b,
          _,
          x = new Xu(this._stepper).type(p ? Vu : Fs);
        return (
          this.queue(
            function () {
              (g = g || this.element()),
                (m = m || xi(v, g)),
                (_ = new Fs(d ? void 0 : g)),
                g._addRunner(this),
                d || g._clearTransformRunnersBefore(this);
            },
            function (t) {
              d || this.clearTransform();
              var e = new Rs(m).transform(g._currentTransform(this)),
                n = e.x,
                r = e.y,
                i = new Fs(ia({}, v, { origin: [n, r] })),
                o = this._isDeclarative && w ? w : _;
              if (p) {
                (i = i.decompose(n, r)), (o = o.decompose(n, r));
                var s = i.rotate,
                  u = o.rotate,
                  a = [s - 360, s, s + 360],
                  h = a.map(function (t) {
                    return Math.abs(t - u);
                  }),
                  l = Math.min.apply(Math, Cr(h)),
                  c = h.indexOf(l);
                i.rotate = a[c];
              }
              d &&
                (y || (i.rotate = v.rotate || 0),
                this._isDeclarative && b && (o.rotate = b)),
                x.from(o),
                x.to(i);
              var f = x.at(t);
              return (
                (b = f.rotate),
                (w = new Fs(f)),
                this.addTransform(w),
                g._addRunner(this),
                x.done()
              );
            },
            function (t) {
              (t.origin || "center").toString() !==
                (v.origin || "center").toString() && (m = xi(v, g)),
                (v = ia({}, t, { origin: m }));
            },
            !0
          ),
          this._isDeclarative && this._rememberMorpher("transform", x),
          this
        );
      },
      x: function (t, e) {
        return this._queueNumber("x", t);
      },
      y: function (t) {
        return this._queueNumber("y", t);
      },
      dx: function () {
        var t =
          0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._queueNumberDelta("x", t);
      },
      dy: function () {
        var t =
          0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
        return this._queueNumberDelta("y", t);
      },
      dmove: function (t, e) {
        return this.dx(t).dy(e);
      },
      _queueNumberDelta: function (e, t) {
        if (((t = new Ks(t)), this._tryRetarget(e, t))) return this;
        var n = new Xu(this._stepper).to(t),
          r = null;
        return (
          this.queue(
            function () {
              (r = this.element()[e]()), n.from(r), n.to(r + t);
            },
            function (t) {
              return this.element()[e](n.at(t)), n.done();
            },
            function (t) {
              n.to(r + new Ks(t));
            }
          ),
          this._rememberMorpher(e, n),
          this
        );
      },
      _queueObject: function (e, t) {
        if (this._tryRetarget(e, t)) return this;
        var n = new Xu(this._stepper).to(t);
        return (
          this.queue(
            function () {
              n.from(this.element()[e]());
            },
            function (t) {
              return this.element()[e](n.at(t)), n.done();
            }
          ),
          this._rememberMorpher(e, n),
          this
        );
      },
      _queueNumber: function (t, e) {
        return this._queueObject(t, new Ks(e));
      },
      cx: function (t) {
        return this._queueNumber("cx", t);
      },
      cy: function (t) {
        return this._queueNumber("cy", t);
      },
      move: function (t, e) {
        return this.x(t).y(e);
      },
      center: function (t, e) {
        return this.cx(t).cy(e);
      },
      size: function (t, e) {
        var n;
        return (
          (t && e) || (n = this._element.bbox()),
          t || (t = (n.width / n.height) * e),
          e || (e = (n.height / n.width) * t),
          this.width(t).height(e)
        );
      },
      width: function (t) {
        return this._queueNumber("width", t);
      },
      height: function (t) {
        return this._queueNumber("height", t);
      },
      plot: function (t, e, n, r) {
        if (4 === arguments.length) return this.plot([t, e, n, r]);
        if (this._tryRetarget("plot", t)) return this;
        var i = new Xu(this._stepper).type(this._element.MorphArray).to(t);
        return (
          this.queue(
            function () {
              i.from(this._element.array());
            },
            function (t) {
              return this._element.plot(i.at(t)), i.done();
            }
          ),
          this._rememberMorpher("plot", i),
          this
        );
      },
      leading: function (t) {
        return this._queueNumber("leading", t);
      },
      viewbox: function (t, e, n, r) {
        return this._queueObject("viewbox", new Ys(t, e, n, r));
      },
      update: function (t) {
        return "object" !== ce(t)
          ? this.update({
              offset: t,
              color: arguments[1],
              opacity: arguments[2],
            })
          : (null != t.opacity && this.attr("stop-opacity", t.opacity),
            null != t.color && this.attr("stop-color", t.color),
            null != t.offset && this.attr("offset", t.offset),
            this);
      },
    }),
    Vi(oa, { rx: au, ry: hu, from: mu, to: gu }),
    zi(oa, "Runner");
  var Svg = (function (t) {
    function Svg(t) {
      var e;
      return (
        Ti(this, Svg),
        (e = ps(this, ys(Svg).call(this, Ri("svg", t), t))).namespace(),
        e
      );
    }
    return (
      ws(Svg, Container),
      as(Svg, [
        {
          key: "isRoot",
          value: function () {
            return !(
              this.node.parentNode &&
              this.node.parentNode instanceof Ei.window.SVGElement &&
              "#document" !== this.node.parentNode.nodeName
            );
          },
        },
        {
          key: "root",
          value: function () {
            return this.isRoot()
              ? this
              : ms(ys(Svg.prototype), "root", this).call(this);
          },
        },
        {
          key: "namespace",
          value: function () {
            return this.isRoot()
              ? this.attr({ xmlns: Oi, version: "1.1" })
                  .attr("xmlns:xlink", Ai, Si)
                  .attr("xmlns:svgjs", ji, Si)
              : this.root().namespace();
          },
        },
        {
          key: "defs",
          value: function () {
            return this.isRoot()
              ? Li(this.node.querySelector("defs")) || this.put(new Defs())
              : this.root().defs();
          },
        },
        {
          key: "parent",
          value: function (t) {
            return this.isRoot()
              ? "#document" === this.node.parentNode.nodeName
                ? null
                : Li(this.node.parentNode)
              : ms(ys(Svg.prototype), "parent", this).call(this, t);
          },
        },
        {
          key: "clear",
          value: function () {
            for (; this.node.hasChildNodes(); )
              this.node.removeChild(this.node.lastChild);
            return delete this._defs, this;
          },
        },
      ]),
      Svg
    );
  })();
  Nr({
    Container: {
      nested: Hi(function () {
        return this.put(new Svg());
      }),
    },
  }),
    zi(Svg, "Svg", !0);
  var la = (function (t) {
    function e(t) {
      return Ti(this, e), ps(this, ys(e).call(this, Ri("symbol", t), t));
    }
    return ws(e, Container), e;
  })();
  Nr({
    Container: {
      symbol: Hi(function () {
        return this.put(new la());
      }),
    },
  }),
    zi(la, "Symbol");
  var ca = {
      __proto__: null,
      plain: function (t) {
        return (
          !1 === this._build && this.clear(),
          this.node.appendChild(Ei.document.createTextNode(t)),
          this
        );
      },
      length: function () {
        return this.node.getComputedTextLength();
      },
    },
    Text = (function (t) {
      function Text(t) {
        var e;
        return (
          Ti(this, Text),
          ((e = ps(this, ys(Text).call(this, Ri("text", t), t))).dom.leading =
            new Ks(1.3)),
          (e._rebuild = !0),
          (e._build = !1),
          e
        );
      }
      return (
        ws(Text, Shape),
        as(Text, [
          {
            key: "x",
            value: function (t) {
              var e =
                1 < arguments.length && void 0 !== arguments[1]
                  ? arguments[1]
                  : this.bbox();
              return null == t ? e.x : this.attr("x", this.attr("x") + t - e.x);
            },
          },
          {
            key: "y",
            value: function (t) {
              var e =
                1 < arguments.length && void 0 !== arguments[1]
                  ? arguments[1]
                  : this.bbox();
              return null == t ? e.y : this.attr("y", this.attr("y") + t - e.y);
            },
          },
          {
            key: "move",
            value: function (t, e) {
              var n =
                2 < arguments.length && void 0 !== arguments[2]
                  ? arguments[2]
                  : this.bbox();
              return this.x(t, n).y(e, n);
            },
          },
          {
            key: "cx",
            value: function (t) {
              var e =
                1 < arguments.length && void 0 !== arguments[1]
                  ? arguments[1]
                  : this.bbox();
              return null == t
                ? e.cx
                : this.attr("x", this.attr("x") + t - e.cx);
            },
          },
          {
            key: "cy",
            value: function (t) {
              var e =
                1 < arguments.length && void 0 !== arguments[1]
                  ? arguments[1]
                  : this.bbox();
              return null == t
                ? e.cy
                : this.attr("y", this.attr("y") + t - e.cy);
            },
          },
          {
            key: "center",
            value: function (t, e) {
              var n =
                2 < arguments.length && void 0 !== arguments[2]
                  ? arguments[2]
                  : this.bbox();
              return this.cx(t, n).cy(e, n);
            },
          },
          {
            key: "text",
            value: function (t) {
              if (void 0 === t) {
                var e = this.node.childNodes,
                  n = 0;
                t = "";
                for (var r = 0, i = e.length; r < i; ++r)
                  "textPath" !== e[r].nodeName
                    ? (r !== n &&
                        3 !== e[r].nodeType &&
                        !0 === Li(e[r]).dom.newLined &&
                        (t += "\n"),
                      (t += e[r].textContent))
                    : 0 === r && (n = 1);
                return t;
              }
              if ((this.clear().build(!0), "function" == typeof t))
                t.call(this, this);
              else
                for (var o = 0, s = (t = t.split("\n")).length; o < s; o++)
                  this.tspan(t[o]).newLine();
              return this.build(!1).rebuild();
            },
          },
          {
            key: "leading",
            value: function (t) {
              return null == t
                ? this.dom.leading
                : ((this.dom.leading = new Ks(t)), this.rebuild());
            },
          },
          {
            key: "rebuild",
            value: function (t) {
              if (
                ("boolean" == typeof t && (this._rebuild = t), this._rebuild)
              ) {
                var n = this,
                  r = 0,
                  i = this.dom.leading;
                this.each(function () {
                  var t = Ei.window
                      .getComputedStyle(this.node)
                      .getPropertyValue("font-size"),
                    e = i * new Ks(t);
                  this.dom.newLined &&
                    (this.attr("x", n.attr("x")),
                    "\n" === this.text()
                      ? (r += e)
                      : (this.attr("dy", e + r), (r = 0)));
                }),
                  this.fire("rebuild");
              }
              return this;
            },
          },
          {
            key: "build",
            value: function (t) {
              return (this._build = !!t), this;
            },
          },
          {
            key: "setData",
            value: function (t) {
              return (
                (this.dom = t),
                (this.dom.leading = new Ks(t.leading || 1.3)),
                this
              );
            },
          },
        ]),
        Text
      );
    })();
  Vi(Text, ca),
    Nr({
      Container: {
        text: Hi(function (t) {
          return this.put(new Text()).text(t);
        }),
        plain: Hi(function (t) {
          return this.put(new Text()).plain(t);
        }),
      },
    }),
    zi(Text, "Text");
  var Tspan = (function (t) {
    function Tspan(t) {
      return Ti(this, Tspan), ps(this, ys(Tspan).call(this, Ri("tspan", t), t));
    }
    return (
      ws(Tspan, Text),
      as(Tspan, [
        {
          key: "text",
          value: function (t) {
            return null == t
              ? this.node.textContent + (this.dom.newLined ? "\n" : "")
              : ("function" == typeof t ? t.call(this, this) : this.plain(t),
                this);
          },
        },
        {
          key: "dx",
          value: function (t) {
            return this.attr("dx", t);
          },
        },
        {
          key: "dy",
          value: function (t) {
            return this.attr("dy", t);
          },
        },
        {
          key: "x",
          value: function (t) {
            return this.attr("x", t);
          },
        },
        {
          key: "y",
          value: function (t) {
            return this.attr("x", t);
          },
        },
        {
          key: "move",
          value: function (t, e) {
            return this.x(t).y(e);
          },
        },
        {
          key: "newLine",
          value: function () {
            var t = this.parent(Text);
            this.dom.newLined = !0;
            var e = Ei.window
                .getComputedStyle(this.node)
                .getPropertyValue("font-size"),
              n = t.dom.leading * new Ks(e);
            return this.dy(n).attr("x", t.x());
          },
        },
      ]),
      Tspan
    );
  })();
  Vi(Tspan, ca),
    Nr({
      Tspan: {
        tspan: Hi(function (t) {
          var e = new Tspan();
          return (
            this._build || this.clear(),
            this.node.appendChild(e.node),
            e.text(t)
          );
        }),
      },
    }),
    zi(Tspan, "Tspan");
  var ClipPath = (function (t) {
    function ClipPath(t) {
      return (
        Ti(this, ClipPath),
        ps(this, ys(ClipPath).call(this, Ri("clipPath", t), t))
      );
    }
    return (
      ws(ClipPath, Container),
      as(ClipPath, [
        {
          key: "remove",
          value: function () {
            return (
              this.targets().forEach(function (t) {
                t.unclip();
              }),
              ms(ys(ClipPath.prototype), "remove", this).call(this)
            );
          },
        },
        {
          key: "targets",
          value: function () {
            return Bs('svg [clip-path*="' + this.id() + '"]');
          },
        },
      ]),
      ClipPath
    );
  })();
  Nr({
    Container: {
      clip: Hi(function () {
        return this.defs().put(new ClipPath());
      }),
    },
    Element: {
      clipWith: function (t) {
        var e = t instanceof ClipPath ? t : this.parent().clip().add(t);
        return this.attr("clip-path", 'url("#' + e.id() + '")');
      },
      unclip: function () {
        return this.attr("clip-path", null);
      },
      clipper: function () {
        return this.reference("clip-path");
      },
    },
  }),
    zi(ClipPath, "ClipPath");
  var fa = (function (t) {
    function e(t) {
      return Ti(this, e), ps(this, ys(e).call(this, Ri("foreignObject", t), t));
    }
    return ws(e, Element), e;
  })();
  Nr({
    Container: {
      foreignObject: Hi(function (t, e) {
        return this.put(new fa()).size(t, e);
      }),
    },
  }),
    zi(fa, "ForeignObject");
  var G = (function (t) {
    function G(t) {
      return Ti(this, G), ps(this, ys(G).call(this, Ri("g", t), t));
    }
    return (
      ws(G, Container),
      as(G, [
        {
          key: "x",
          value: function (t) {
            var e =
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : this.bbox();
            return null == t ? e.x : this.move(t, e.y, e);
          },
        },
        {
          key: "y",
          value: function (t) {
            var e =
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : this.bbox();
            return null == t ? e.y : this.move(e.x, t, e);
          },
        },
        {
          key: "move",
          value: function () {
            var t =
                0 < arguments.length && void 0 !== arguments[0]
                  ? arguments[0]
                  : 0,
              e =
                1 < arguments.length && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0,
              n =
                2 < arguments.length && void 0 !== arguments[2]
                  ? arguments[2]
                  : this.bbox(),
              r = t - n.x,
              i = e - n.y;
            return this.dmove(r, i);
          },
        },
        {
          key: "dx",
          value: function (t) {
            return this.dmove(t, 0);
          },
        },
        {
          key: "dy",
          value: function (t) {
            return this.dmove(0, t);
          },
        },
        {
          key: "dmove",
          value: function (s, u) {
            return (
              this.children().forEach(function (t, e) {
                var n = t.bbox(),
                  r = new Fs(t),
                  i = r.translate(s, u).transform(r.inverse()),
                  o = new Rs(n.x, n.y).transform(i);
                t.move(o.x, o.y);
              }),
              this
            );
          },
        },
        {
          key: "width",
          value: function (t) {
            var e =
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : this.bbox();
            return null == t ? e.width : this.size(t, e.height, e);
          },
        },
        {
          key: "height",
          value: function (t) {
            var e =
              1 < arguments.length && void 0 !== arguments[1]
                ? arguments[1]
                : this.bbox();
            return null == t ? e.height : this.size(e.width, t, e);
          },
        },
        {
          key: "size",
          value: function (t, e) {
            var r =
                2 < arguments.length && void 0 !== arguments[2]
                  ? arguments[2]
                  : this.bbox(),
              n = _i(this, t, e, r),
              i = n.width / r.width,
              o = n.height / r.height;
            return (
              this.children().forEach(function (t, e) {
                var n = new Rs(r).transform(new Fs(t).inverse());
                t.scale(i, o, n.x, n.y);
              }),
              this
            );
          },
        },
      ]),
      G
    );
  })();
  Nr({
    Container: {
      group: Hi(function () {
        return this.put(new G());
      }),
    },
  }),
    zi(G, "G");
  var A = (function (t) {
    function A(t) {
      return Ti(this, A), ps(this, ys(A).call(this, Ri("a", t), t));
    }
    return (
      ws(A, Container),
      as(A, [
        {
          key: "to",
          value: function (t) {
            return this.attr("href", t, Ai);
          },
        },
        {
          key: "target",
          value: function (t) {
            return this.attr("target", t);
          },
        },
      ]),
      A
    );
  })();
  Nr({
    Container: {
      link: Hi(function (t) {
        return this.put(new A()).to(t);
      }),
    },
    Element: {
      linkTo: function (t) {
        var e = new A();
        return (
          "function" == typeof t ? t.call(e, e) : e.to(t),
          this.parent().put(e).put(this)
        );
      },
    },
  }),
    zi(A, "A");
  var Mask = (function (t) {
    function Mask(t) {
      return Ti(this, Mask), ps(this, ys(Mask).call(this, Ri("mask", t), t));
    }
    return (
      ws(Mask, Container),
      as(Mask, [
        {
          key: "remove",
          value: function () {
            return (
              this.targets().forEach(function (t) {
                t.unmask();
              }),
              ms(ys(Mask.prototype), "remove", this).call(this)
            );
          },
        },
        {
          key: "targets",
          value: function () {
            return Bs('svg [mask*="' + this.id() + '"]');
          },
        },
      ]),
      Mask
    );
  })();
  function va(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  Nr({
    Container: {
      mask: Hi(function () {
        return this.defs().put(new Mask());
      }),
    },
    Element: {
      maskWith: function (t) {
        var e = t instanceof Mask ? t : this.parent().mask().add(t);
        return this.attr("mask", 'url("#' + e.id() + '")');
      },
      unmask: function () {
        return this.attr("mask", null);
      },
      masker: function () {
        return this.reference("mask");
      },
    },
  }),
    zi(Mask, "Mask");
  var Style = (function (t) {
    function Style(t) {
      return Ti(this, Style), ps(this, ys(Style).call(this, Ri("style", t), t));
    }
    return (
      ws(Style, Element),
      as(Style, [
        {
          key: "addText",
          value: function () {
            var t =
              0 < arguments.length && void 0 !== arguments[0]
                ? arguments[0]
                : "";
            return (this.node.textContent += t), this;
          },
        },
        {
          key: "font",
          value: function (t, e) {
            var n =
              2 < arguments.length && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            return this.rule(
              "@font-face",
              (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = null != arguments[t] ? arguments[t] : {};
                  t % 2
                    ? va(n, !0).forEach(function (t) {
                        su(e, t, n[t]);
                      })
                    : Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(
                        e,
                        Object.getOwnPropertyDescriptors(n)
                      )
                    : va(n).forEach(function (t) {
                        Object.defineProperty(
                          e,
                          t,
                          Object.getOwnPropertyDescriptor(n, t)
                        );
                      });
                }
                return e;
              })({ fontFamily: t, src: e }, n)
            );
          },
        },
        {
          key: "rule",
          value: function (t, e) {
            return this.addText(
              (function (t, e) {
                if (!t) return "";
                if (!e) return t;
                var n = t + "{";
                for (var r in e) n += wi(r) + ":" + e[r] + ";";
                return (n += "}");
              })(t, e)
            );
          },
        },
      ]),
      Style
    );
  })();
  Nr("Dom", {
    style: Hi(function (t, e) {
      return this.put(new Style()).rule(t, e);
    }),
    fontface: Hi(function (t, e, n) {
      return this.put(new Style()).font(t, e, n);
    }),
  }),
    zi(Style, "Style");
  var TextPath = (function (t) {
    function TextPath(t) {
      return (
        Ti(this, TextPath),
        ps(this, ys(TextPath).call(this, Ri("textPath", t), t))
      );
    }
    return (
      ws(TextPath, Text),
      as(TextPath, [
        {
          key: "array",
          value: function () {
            var t = this.track();
            return t ? t.array() : null;
          },
        },
        {
          key: "plot",
          value: function (t) {
            var e = this.track(),
              n = null;
            return e && (n = e.plot(t)), null == t ? n : this;
          },
        },
        {
          key: "track",
          value: function () {
            return this.reference("href");
          },
        },
      ]),
      TextPath
    );
  })();
  Nr({
    Container: {
      textPath: Hi(function (t, e) {
        return t instanceof Text || (t = this.text(t)), t.path(e);
      }),
    },
    Text: {
      path: Hi(function (t) {
        var e,
          n =
            !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1],
          r = new TextPath();
        if (
          (t instanceof Path || (t = this.defs().path(t)),
          r.attr("href", "#" + t, Ai),
          n)
        )
          for (; (e = this.node.firstChild); ) r.node.appendChild(e);
        return this.put(r);
      }),
      textPath: function () {
        return this.findOne("textPath");
      },
    },
    Path: {
      text: Hi(function (t) {
        return (
          t instanceof Text || (t = new Text().addTo(this.parent()).text(t)),
          t.path(this)
        );
      }),
      targets: function () {
        return Bs('svg [href*="' + this.id() + '"]');
      },
    },
  }),
    (TextPath.prototype.MorphArray = Ru),
    zi(TextPath, "TextPath");
  var Use = (function (t) {
    function Use(t) {
      return Ti(this, Use), ps(this, ys(Use).call(this, Ri("use", t), t));
    }
    return (
      ws(Use, Shape),
      as(Use, [
        {
          key: "element",
          value: function (t, e) {
            return this.attr("href", (e || "") + "#" + t, Ai);
          },
        },
      ]),
      Use
    );
  })();
  Nr({
    Container: {
      use: Hi(function (t, e) {
        return this.put(new Use()).element(t, e);
      }),
    },
  }),
    zi(Use, "Use");
  var da = Di;
  Vi([Svg, la, Image, Pattern, Marker], Dr("viewbox")),
    Vi([Line, Polyline, Polygon, Path], Dr("marker")),
    Vi(Text, Dr("Text")),
    Vi(Path, Dr("Path")),
    Vi(Defs, Dr("Defs")),
    Vi([Text, Tspan], Dr("Tspan")),
    Vi([Rect, Ellipse, Circle, Gradient], Dr("radius")),
    Vi(Us, Dr("EventTarget")),
    Vi(Dom, Dr("Dom")),
    Vi(Element, Dr("Element")),
    Vi(Shape, Dr("Shape")),
    Vi(Container, Dr("Container")),
    Vi(oa, Dr("Runner")),
    Vs.extend(Cr(new Set(Ir))),
    Uu([Ks, fs, Ys, Fs, Zs, _u, Ru]),
    $u();
  var pa = {
    __proto__: null,
    Morphable: Xu,
    registerMorphableType: Uu,
    makeMorphable: $u,
    TransformBag: Vu,
    ObjectBag: Hu,
    NonMorphable: Gu,
    defaults: Js,
    utils: ki,
    namespaces: Mi,
    regex: Oo,
    SVG: da,
    parser: zs,
    find: Bs,
    registerWindow: function () {
      var t =
          0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null,
        e =
          1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
      (Ei.window = t), (Ei.document = e);
    },
    Animator: Ku,
    Controller: Pu,
    Ease: Cu,
    PID: Du,
    Spring: Nu,
    easing: Eu,
    Queue: Zu,
    Runner: oa,
    Timeline: na,
    Array: Zs,
    Box: Ys,
    Color: fs,
    EventTarget: Us,
    Matrix: Fs,
    Number: Ks,
    PathArray: Ru,
    Point: Rs,
    PointArray: _u,
    List: Vs,
    Circle: Circle,
    ClipPath: ClipPath,
    Container: Container,
    Defs: Defs,
    Dom: Dom,
    Element: Element,
    Ellipse: Ellipse,
    ForeignObject: fa,
    Gradient: Gradient,
    G: G,
    A: A,
    Image: Image,
    Line: Line,
    Marker: Marker,
    Mask: Mask,
    Path: Path,
    Pattern: Pattern,
    Polygon: Polygon,
    Polyline: Polyline,
    Rect: Rect,
    Shape: Shape,
    Stop: Stop,
    Style: Style,
    Svg: Svg,
    Symbol: la,
    Text: Text,
    TextPath: TextPath,
    Tspan: Tspan,
    Use: Use,
    on: Ro,
    off: Lo,
    dispatch: Fo,
    root: Ii,
    create: Ni,
    makeInstance: Di,
    nodeOrNew: Ri,
    adopt: Li,
    mockAdopt: function () {
      var t =
        0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : Li;
      Fi = t;
    },
    register: zi,
    getClass: qi,
    eid: Xi,
    assignNewId: Gi,
    extend: Vi,
    wrapWithAttrCheck: Hi,
    invent: function (e) {
      var t =
        "function" == typeof e.create
          ? e.create
          : function (t) {
              this.constructor(t || Ni(e.create));
            };
      return (
        e.inherit &&
          ((t.prototype = new e.inherit()), (t.prototype.constructor = t)),
        e.extend && Vi(t, e.extend),
        e.construct && Vi(e.parent || Pi.Container, e.construct),
        t
      );
    },
  };
  function ya(t) {
    return Di(t);
  }
  return Object.assign(ya, pa), ya;
})();
//# sourceMappingURL=svg.min.js.map
