/*! jQuery v1.12.3 | (c) jQuery Foundation | jquery.org/license */
function Swipe(e, t) {
    "use strict";
    function n() {
        d = g.children, v = d.length, d.length < 2 && (t.continuous = !1), f.transitions && t.continuous && d.length < 3 && (g.appendChild(d[0].cloneNode(!0)), 
        g.appendChild(g.children[1].cloneNode(!0)), d = g.children), p = new Array(d.length), h = e.getBoundingClientRect().width || e.offsetWidth, 
        g.style.width = d.length * h + "px";
        for (var n = d.length; n--; ) {
            var r = d[n];
            r.style.width = h + "px", r.setAttribute("data-index", n), f.transitions && (r.style.left = n * -h + "px", 
            a(n, m > n ? -h : m < n ? h : 0, 0));
        }
        t.continuous && f.transitions && (a(i(m - 1), -h, 0), a(i(m + 1), h, 0)), f.transitions || (g.style.left = m * -h + "px"), 
        e.style.visibility = "visible";
    }
    function r() {
        t.continuous ? o(m + 1) : m < d.length - 1 && o(m + 1);
    }
    function i(e) {
        return (d.length + e % d.length) % d.length;
    }
    function o(e, n) {
        if (m != e) {
            if (f.transitions) {
                var r = Math.abs(m - e) / (m - e);
                if (t.continuous) {
                    var o = r;
                    (r = -p[i(e)] / h) !== o && (e = -r * d.length + e);
                }
                for (var s = Math.abs(m - e) - 1; s--; ) a(i((e > m ? e : m) - s - 1), h * r, 0);
                e = i(e), a(m, h * r, n || y), a(e, 0, n || y), t.continuous && a(i(e - r), -h * r, 0);
            } else e = i(e), function(e, n, r) {
                if (!r) return void (g.style.left = n + "px");
                var i = +new Date(), o = setInterval(function() {
                    var a = +new Date() - i;
                    if (a > r) return g.style.left = n + "px", w && u(), t.transitionEnd && t.transitionEnd.call(event, m, d[m]), 
                    void clearInterval(o);
                    g.style.left = (n - e) * (Math.floor(a / r * 100) / 100) + e + "px";
                }, 4);
            }(m * -h, e * -h, n || y);
            m = e, c(t.callback && t.callback(m, d[m]));
        }
    }
    function a(e, t, n) {
        s(e, t, n), p[e] = t;
    }
    function s(e, t, n) {
        var r = d[e], i = r && r.style;
        i && (i.webkitTransitionDuration = i.MozTransitionDuration = i.msTransitionDuration = i.OTransitionDuration = i.transitionDuration = n + "ms", 
        i.webkitTransform = "translate(" + t + "px,0)translateZ(0)", i.msTransform = i.MozTransform = i.OTransform = "translateX(" + t + "px)");
    }
    function u() {
        x = setTimeout(r, w);
    }
    function l() {
        w = 0, clearTimeout(x);
    }
    var c = function(e) {
        setTimeout(e || function() {}, 0);
    }, f = {
        addEventListener: !!window.addEventListener,
        touch: "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch,
        transitions: function(e) {
            var t = [ "transitionProperty", "WebkitTransition", "MozTransition", "OTransition", "msTransition" ];
            for (var n in t) if (void 0 !== e.style[t[n]]) return !0;
            return !1;
        }(document.createElement("swipe"))
    };
    if (e) {
        var d, p, h, v, g = e.children[0];
        t = t || {};
        var m = parseInt(t.startSlide, 10) || 0, y = t.speed || 300;
        t.continuous = void 0 === t.continuous || t.continuous;
        var x, b, w = t.auto || 0, T = {}, E = {}, C = {
            handleEvent: function(e) {
                switch (e.type) {
                  case "touchstart":
                    this.start(e);
                    break;

                  case "touchmove":
                    this.move(e);
                    break;

                  case "touchend":
                    c(this.end(e));
                    break;

                  case "webkitTransitionEnd":
                  case "msTransitionEnd":
                  case "oTransitionEnd":
                  case "otransitionend":
                  case "transitionend":
                    c(this.transitionEnd(e));
                    break;

                  case "resize":
                    c(n);
                }
                t.stopPropagation && e.stopPropagation();
            },
            start: function(e) {
                var t = e.touches[0];
                T = {
                    x: t.pageX,
                    y: t.pageY,
                    time: +new Date()
                }, b = void 0, E = {}, g.addEventListener("touchmove", this, !1), g.addEventListener("touchend", this, !1);
            },
            move: function(e) {
                if (!(e.touches.length > 1 || e.scale && 1 !== e.scale)) {
                    t.disableScroll && e.preventDefault();
                    var n = e.touches[0];
                    E = {
                        x: n.pageX - T.x,
                        y: n.pageY - T.y
                    }, void 0 === b && (b = !!(b || Math.abs(E.x) < Math.abs(E.y))), b || (e.preventDefault(), l(), t.continuous ? (s(i(m - 1), E.x + p[i(m - 1)], 0), 
                    s(m, E.x + p[m], 0), s(i(m + 1), E.x + p[i(m + 1)], 0)) : (E.x = E.x / (!m && E.x > 0 || m == d.length - 1 && E.x < 0 ? Math.abs(E.x) / h + 1 : 1), 
                    s(m - 1, E.x + p[m - 1], 0), s(m, E.x + p[m], 0), s(m + 1, E.x + p[m + 1], 0)));
                }
            },
            end: function(e) {
                var n = +new Date() - T.time, r = Number(n) < 250 && Math.abs(E.x) > 20 || Math.abs(E.x) > h / 2, o = !m && E.x > 0 || m == d.length - 1 && E.x < 0;
                t.continuous && (o = !1);
                var s = E.x < 0;
                b || (r && !o ? (s ? (t.continuous ? (a(i(m - 1), -h, 0), a(i(m + 2), h, 0)) : a(m - 1, -h, 0), a(m, p[m] - h, y), 
                a(i(m + 1), p[i(m + 1)] - h, y), m = i(m + 1)) : (t.continuous ? (a(i(m + 1), h, 0), a(i(m - 2), -h, 0)) : a(m + 1, h, 0), 
                a(m, p[m] + h, y), a(i(m - 1), p[i(m - 1)] + h, y), m = i(m - 1)), t.callback && t.callback(m, d[m])) : t.continuous ? (a(i(m - 1), -h, y), 
                a(m, 0, y), a(i(m + 1), h, y)) : (a(m - 1, -h, y), a(m, 0, y), a(m + 1, h, y))), g.removeEventListener("touchmove", C, !1), 
                g.removeEventListener("touchend", C, !1);
            },
            transitionEnd: function(e) {
                parseInt(e.target.getAttribute("data-index"), 10) == m && (w && u(), t.transitionEnd && t.transitionEnd.call(e, m, d[m]));
            }
        };
        return n(), w && u(), f.addEventListener ? (f.touch && g.addEventListener("touchstart", C, !1), f.transitions && (g.addEventListener("webkitTransitionEnd", C, !1), 
        g.addEventListener("msTransitionEnd", C, !1), g.addEventListener("oTransitionEnd", C, !1), g.addEventListener("otransitionend", C, !1), 
        g.addEventListener("transitionend", C, !1)), window.addEventListener("resize", C, !1)) : window.onresize = function() {
            n();
        }, {
            setup: function() {
                n();
            },
            slide: function(e, t) {
                l(), o(e, t);
            },
            prev: function() {
                l(), t.continuous ? o(m - 1) : m && o(m - 1);
            },
            next: function() {
                l(), r();
            },
            stop: function() {
                l();
            },
            getPos: function() {
                return m;
            },
            getNumSlides: function() {
                return v;
            },
            kill: function() {
                l(), g.style.width = "", g.style.left = "";
                for (var e = d.length; e--; ) {
                    var t = d[e];
                    t.style.width = "", t.style.left = "", f.transitions && s(e, 0, 0);
                }
                f.addEventListener ? (g.removeEventListener("touchstart", C, !1), g.removeEventListener("webkitTransitionEnd", C, !1), 
                g.removeEventListener("msTransitionEnd", C, !1), g.removeEventListener("oTransitionEnd", C, !1), g.removeEventListener("otransitionend", C, !1), 
                g.removeEventListener("transitionend", C, !1), window.removeEventListener("resize", C, !1)) : window.onresize = null;
            }
        };
    }
}

!function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e);
    } : t(e);
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = !!e && "length" in e && e.length, n = ae.type(e);
        return "function" !== n && !ae.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
    }
    function r(e, t, n) {
        if (ae.isFunction(t)) return ae.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n;
        });
        if (t.nodeType) return ae.grep(e, function(e) {
            return e === t !== n;
        });
        if ("string" == typeof t) {
            if (ge.test(t)) return ae.filter(t, e, n);
            t = ae.filter(t, e);
        }
        return ae.grep(e, function(e) {
            return ae.inArray(e, t) > -1 !== n;
        });
    }
    function i(e, t) {
        do {
            e = e[t];
        } while (e && 1 !== e.nodeType);
        return e;
    }
    function o() {
        G.addEventListener ? (G.removeEventListener("DOMContentLoaded", a), e.removeEventListener("load", a)) : (G.detachEvent("onreadystatechange", a), 
        e.detachEvent("onload", a));
    }
    function a() {
        (G.addEventListener || "load" === e.event.type || "complete" === G.readyState) && (o(), ae.ready());
    }
    function s(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var r = "data-" + t.replace(Ne, "-$1").toLowerCase();
            if ("string" == typeof (n = e.getAttribute(r))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : ke.test(n) ? ae.parseJSON(n) : n);
                } catch (e) {}
                ae.data(e, t, n);
            } else n = void 0;
        }
        return n;
    }
    function u(e) {
        var t;
        for (t in e) if (("data" !== t || !ae.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0;
    }
    function l(e, t, n, r) {
        if (Ce(e)) {
            var i, o, a = ae.expando, s = e.nodeType, u = s ? ae.cache : e, l = s ? e[a] : e[a] && a;
            if (l && u[l] && (r || u[l].data) || void 0 !== n || "string" != typeof t) return l || (l = s ? e[a] = K.pop() || ae.guid++ : a), 
            u[l] || (u[l] = s ? {} : {
                toJSON: ae.noop
            }), "object" != typeof t && "function" != typeof t || (r ? u[l] = ae.extend(u[l], t) : u[l].data = ae.extend(u[l].data, t)), 
            o = u[l], r || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[ae.camelCase(t)] = n), "string" == typeof t ? null == (i = o[t]) && (i = o[ae.camelCase(t)]) : i = o, 
            i;
        }
    }
    function c(e, t, n) {
        if (Ce(e)) {
            var r, i, o = e.nodeType, a = o ? ae.cache : e, s = o ? e[ae.expando] : ae.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    ae.isArray(t) ? t = t.concat(ae.map(t, ae.camelCase)) : t in r ? t = [ t ] : (t = ae.camelCase(t), t = t in r ? [ t ] : t.split(" ")), 
                    i = t.length;
                    for (;i--; ) delete r[t[i]];
                    if (n ? !u(r) : !ae.isEmptyObject(r)) return;
                }
                (n || (delete a[s].data, u(a[s]))) && (o ? ae.cleanData([ e ], !0) : oe.deleteExpando || a != a.window ? delete a[s] : a[s] = void 0);
            }
        }
    }
    function f(e, t, n, r) {
        var i, o = 1, a = 20, s = r ? function() {
            return r.cur();
        } : function() {
            return ae.css(e, t, "");
        }, u = s(), l = n && n[3] || (ae.cssNumber[t] ? "" : "px"), c = (ae.cssNumber[t] || "px" !== l && +u) && Ae.exec(ae.css(e, t));
        if (c && c[3] !== l) {
            l = l || c[3], n = n || [], c = +u || 1;
            do {
                o = o || ".5", c /= o, ae.style(e, t, c + l);
            } while (o !== (o = s() / u) && 1 !== o && --a);
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, 
        r.end = i)), i;
    }
    function d(e) {
        var t = Me.split("|"), n = e.createDocumentFragment();
        if (n.createElement) for (;t.length; ) n.createElement(t.pop());
        return n;
    }
    function p(e, t) {
        var n, r, i = 0, o = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
        if (!o) for (o = [], n = e.childNodes || e; null != (r = n[i]); i++) !t || ae.nodeName(r, t) ? o.push(r) : ae.merge(o, p(r, t));
        return void 0 === t || t && ae.nodeName(e, t) ? ae.merge([ e ], o) : o;
    }
    function h(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++) ae._data(n, "globalEval", !t || ae._data(t[r], "globalEval"));
    }
    function v(e) {
        _e.test(e.type) && (e.defaultChecked = e.checked);
    }
    function g(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f, g = e.length, m = d(t), y = [], x = 0; g > x; x++) if ((a = e[x]) || 0 === a) if ("object" === ae.type(a)) ae.merge(y, a.nodeType ? [ a ] : a); else if (Re.test(a)) {
            for (u = u || m.appendChild(t.createElement("div")), l = (He.exec(a) || [ "", "" ])[1].toLowerCase(), 
            f = Fe[l] || Fe._default, u.innerHTML = f[1] + ae.htmlPrefilter(a) + f[2], o = f[0]; o--; ) u = u.lastChild;
            if (!oe.leadingWhitespace && Oe.test(a) && y.push(t.createTextNode(Oe.exec(a)[0])), !oe.tbody) for (o = (a = "table" !== l || Be.test(a) ? "<table>" !== f[1] || Be.test(a) ? 0 : u : u.firstChild) && a.childNodes.length; o--; ) ae.nodeName(c = a.childNodes[o], "tbody") && !c.childNodes.length && a.removeChild(c);
            for (ae.merge(y, u.childNodes), u.textContent = ""; u.firstChild; ) u.removeChild(u.firstChild);
            u = m.lastChild;
        } else y.push(t.createTextNode(a));
        for (u && m.removeChild(u), oe.appendChecked || ae.grep(p(y, "input"), v), x = 0; a = y[x++]; ) if (r && ae.inArray(a, r) > -1) i && i.push(a); else if (s = ae.contains(a.ownerDocument, a), 
        u = p(m.appendChild(a), "script"), s && h(u), n) for (o = 0; a = u[o++]; ) qe.test(a.type || "") && n.push(a);
        return u = null, m;
    }
    function m() {
        return !0;
    }
    function y() {
        return !1;
    }
    function x() {
        try {
            return G.activeElement;
        } catch (e) {}
    }
    function b(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (s in t) b(e, s, n, r, t[s], o);
            return e;
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, 
        r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = y; else if (!i) return e;
        return 1 === o && (a = i, i = function(e) {
            return ae().off(e), a.apply(this, arguments);
        }, i.guid = a.guid || (a.guid = ae.guid++)), e.each(function() {
            ae.event.add(this, t, i, r, n);
        });
    }
    function w(e, t) {
        return ae.nodeName(e, "table") && ae.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
    }
    function T(e) {
        return e.type = (null !== ae.find.attr(e, "type")) + "/" + e.type, e;
    }
    function E(e) {
        var t = Ke.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e;
    }
    function C(e, t) {
        if (1 === t.nodeType && ae.hasData(e)) {
            var n, r, i, o = ae._data(e), a = ae._data(t, o), s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s) for (r = 0, i = s[n].length; i > r; r++) ae.event.add(t, n, s[n][r]);
            }
            a.data && (a.data = ae.extend({}, a.data));
        }
    }
    function k(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !oe.noCloneEvent && t[ae.expando]) {
                i = ae._data(t);
                for (r in i.events) ae.removeEvent(t, r, i.handle);
                t.removeAttribute(ae.expando);
            }
            "script" === n && t.text !== e.text ? (T(t).text = e.text, E(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), 
            oe.html5Clone && e.innerHTML && !ae.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && _e.test(e.type) ? (t.defaultChecked = t.checked = e.checked, 
            t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
        }
    }
    function N(e, t, n, r) {
        t = Z.apply([], t);
        var i, o, a, s, u, l, c = 0, f = e.length, d = f - 1, h = t[0], v = ae.isFunction(h);
        if (v || f > 1 && "string" == typeof h && !oe.checkClone && Je.test(h)) return e.each(function(i) {
            var o = e.eq(i);
            v && (t[0] = h.call(this, i, o.html())), N(o, t, n, r);
        });
        if (f && (l = g(t, e[0].ownerDocument, !1, e, r), i = l.firstChild, 1 === l.childNodes.length && (l = i), 
        i || r)) {
            for (a = (s = ae.map(p(l, "script"), T)).length; f > c; c++) o = l, c !== d && (o = ae.clone(o, !0, !0), 
            a && ae.merge(s, p(o, "script"))), n.call(e[c], o, c);
            if (a) for (u = s[s.length - 1].ownerDocument, ae.map(s, E), c = 0; a > c; c++) o = s[c], qe.test(o.type || "") && !ae._data(o, "globalEval") && ae.contains(u, o) && (o.src ? ae._evalUrl && ae._evalUrl(o.src) : ae.globalEval((o.text || o.textContent || o.innerHTML || "").replace(Ge, "")));
            l = i = null;
        }
        return e;
    }
    function S(e, t, n) {
        for (var r, i = t ? ae.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || ae.cleanData(p(r)), 
        r.parentNode && (n && ae.contains(r.ownerDocument, r) && h(p(r, "script")), r.parentNode.removeChild(r));
        return e;
    }
    function A(e, t) {
        var n = ae(t.createElement(e)).appendTo(t.body), r = ae.css(n[0], "display");
        return n.detach(), r;
    }
    function j(e) {
        var t = G, n = et[e];
        return n || ("none" !== (n = A(e, t)) && n || (Ze = (Ze || ae("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), 
        (t = (Ze[0].contentWindow || Ze[0].contentDocument).document).write(), t.close(), n = A(e, t), Ze.detach()), 
        et[e] = n), n;
    }
    function D(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments);
            }
        };
    }
    function L(e) {
        if (e in vt) return e;
        for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = ht.length; n--; ) if ((e = ht[n] + t) in vt) return e;
    }
    function _(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++) (r = e[a]).style && (o[a] = ae._data(r, "olddisplay"), 
        n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && De(r) && (o[a] = ae._data(r, "olddisplay", j(r.nodeName)))) : (i = De(r), 
        (n && "none" !== n || !i) && ae._data(r, "olddisplay", i ? n : ae.css(r, "display"))));
        for (a = 0; s > a; a++) (r = e[a]).style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e;
    }
    function H(e, t, n) {
        var r = ft.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
    }
    function q(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += ae.css(e, n + je[o], !0, i)), 
        r ? ("content" === n && (a -= ae.css(e, "padding" + je[o], !0, i)), "margin" !== n && (a -= ae.css(e, "border" + je[o] + "Width", !0, i))) : (a += ae.css(e, "padding" + je[o], !0, i), 
        "padding" !== n && (a += ae.css(e, "border" + je[o] + "Width", !0, i)));
        return a;
    }
    function O(t, n, r) {
        var i = !0, o = "width" === n ? t.offsetWidth : t.offsetHeight, a = ot(t), s = oe.boxSizing && "border-box" === ae.css(t, "boxSizing", !1, a);
        if (G.msFullscreenElement && e.top !== e && t.getClientRects().length && (o = Math.round(100 * t.getBoundingClientRect()[n])), 
        0 >= o || null == o) {
            if ((0 > (o = at(t, n, a)) || null == o) && (o = t.style[n]), nt.test(o)) return o;
            i = s && (oe.boxSizingReliable() || o === t.style[n]), o = parseFloat(o) || 0;
        }
        return o + q(t, n, r || (s ? "border" : "content"), i, a) + "px";
    }
    function M(e, t, n, r, i) {
        return new M.prototype.init(e, t, n, r, i);
    }
    function F() {
        return e.setTimeout(function() {
            gt = void 0;
        }), gt = ae.now();
    }
    function R(e, t) {
        var n, r = {
            height: e
        }, i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = je[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r;
    }
    function B(e, t, n) {
        for (var r, i = (P.tweeners[t] || []).concat(P.tweeners["*"]), o = 0, a = i.length; a > o; o++) if (r = i[o].call(n, t, e)) return r;
    }
    function P(e, t, n) {
        var r, i, o = 0, a = P.prefilters.length, s = ae.Deferred().always(function() {
            delete u.elem;
        }), u = function() {
            if (i) return !1;
            for (var t = gt || F(), n = Math.max(0, l.startTime + l.duration - t), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; a > o; o++) l.tweens[o].run(r);
            return s.notifyWith(e, [ l, r, n ]), 1 > r && a ? n : (s.resolveWith(e, [ l ]), !1);
        }, l = s.promise({
            elem: e,
            props: ae.extend({}, t),
            opts: ae.extend(!0, {
                specialEasing: {},
                easing: ae.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: gt || F(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = ae.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r), r;
            },
            stop: function(t) {
                var n = 0, r = t ? l.tweens.length : 0;
                if (i) return this;
                for (i = !0; r > n; n++) l.tweens[n].run(1);
                return t ? (s.notifyWith(e, [ l, 1, 0 ]), s.resolveWith(e, [ l, t ])) : s.rejectWith(e, [ l, t ]), this;
            }
        }), c = l.props;
        for (function(e, t) {
            var n, r, i, o, a;
            for (n in e) if (r = ae.camelCase(n), i = t[r], o = e[n], ae.isArray(o) && (i = o[1], o = e[n] = o[0]), 
            n !== r && (e[r] = o, delete e[n]), (a = ae.cssHooks[r]) && "expand" in a) {
                o = a.expand(o), delete e[r];
                for (n in o) n in e || (e[n] = o[n], t[n] = i);
            } else t[r] = i;
        }(c, l.opts.specialEasing); a > o; o++) if (r = P.prefilters[o].call(l, e, c, l.opts)) return ae.isFunction(r.stop) && (ae._queueHooks(l.elem, l.opts.queue).stop = ae.proxy(r.stop, r)), 
        r;
        return ae.map(c, B, l), ae.isFunction(l.opts.start) && l.opts.start.call(e, l), ae.fx.timer(ae.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always);
    }
    function I(e) {
        return ae.attr(e, "class") || "";
    }
    function W(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0, o = t.toLowerCase().match(we) || [];
            if (ae.isFunction(n)) for (;r = o[i++]; ) "+" === r.charAt(0) ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
        };
    }
    function z(e, t, n, r) {
        function i(s) {
            var u;
            return o[s] = !0, ae.each(e[s] || [], function(e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1);
            }), u;
        }
        var o = {}, a = e === Wt;
        return i(t.dataTypes[0]) || !o["*"] && i("*");
    }
    function $(e, t) {
        var n, r, i = ae.ajaxSettings.flatOptions || {};
        for (r in t) void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
        return n && ae.extend(!0, e, n), e;
    }
    function X(e) {
        return e.style && e.style.display || ae.css(e, "display");
    }
    function U(e, t, n, r) {
        var i;
        if (ae.isArray(t)) ae.each(t, function(t, i) {
            n || Vt.test(e) ? r(e, i) : U(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r);
        }); else if (n || "object" !== ae.type(t)) r(e, t); else for (i in t) U(e + "[" + i + "]", t[i], n, r);
    }
    function V() {
        try {
            return new e.XMLHttpRequest();
        } catch (e) {}
    }
    function Y() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {}
    }
    function J(e) {
        return ae.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow);
    }
    var K = [], G = e.document, Q = K.slice, Z = K.concat, ee = K.push, te = K.indexOf, ne = {}, re = ne.toString, ie = ne.hasOwnProperty, oe = {}, ae = function(e, t) {
        return new ae.fn.init(e, t);
    }, se = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ue = /^-ms-/, le = /-([\da-z])/gi, ce = function(e, t) {
        return t.toUpperCase();
    };
    ae.fn = ae.prototype = {
        jquery: "1.12.3",
        constructor: ae,
        selector: "",
        length: 0,
        toArray: function() {
            return Q.call(this);
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : Q.call(this);
        },
        pushStack: function(e) {
            var t = ae.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t;
        },
        each: function(e) {
            return ae.each(this, e);
        },
        map: function(e) {
            return this.pushStack(ae.map(this, function(t, n) {
                return e.call(t, n, t);
            }));
        },
        slice: function() {
            return this.pushStack(Q.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(e) {
            var t = this.length, n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [ this[n] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        push: ee,
        sort: K.sort,
        splice: K.splice
    }, ae.extend = ae.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || ae.isFunction(a) || (a = {}), 
        s === u && (a = this, s--); u > s; s++) if (null != (i = arguments[s])) for (r in i) e = a[r], n = i[r], 
        a !== n && (l && n && (ae.isPlainObject(n) || (t = ae.isArray(n))) ? (t ? (t = !1, o = e && ae.isArray(e) ? e : []) : o = e && ae.isPlainObject(e) ? e : {}, 
        a[r] = ae.extend(l, o, n)) : void 0 !== n && (a[r] = n));
        return a;
    }, ae.extend({
        expando: "jQuery" + ("1.12.3" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e);
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === ae.type(e);
        },
        isArray: Array.isArray || function(e) {
            return "array" === ae.type(e);
        },
        isWindow: function(e) {
            return null != e && e == e.window;
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !ae.isArray(e) && t - parseFloat(t) + 1 >= 0;
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0;
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== ae.type(e) || e.nodeType || ae.isWindow(e)) return !1;
            try {
                if (e.constructor && !ie.call(e, "constructor") && !ie.call(e.constructor.prototype, "isPrototypeOf")) return !1;
            } catch (e) {
                return !1;
            }
            if (!oe.ownFirst) for (t in e) return ie.call(e, t);
            for (t in e) ;
            return void 0 === t || ie.call(e, t);
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? ne[re.call(e)] || "object" : typeof e;
        },
        globalEval: function(t) {
            t && ae.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t);
            })(t);
        },
        camelCase: function(e) {
            return e.replace(ue, "ms-").replace(le, ce);
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        },
        each: function(e, t) {
            var r, i = 0;
            if (n(e)) for (r = e.length; r > i && !1 !== t.call(e[i], i, e[i]); i++) ; else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;
            return e;
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(se, "");
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? ae.merge(r, "string" == typeof e ? [ e ] : e) : ee.call(r, e)), 
            r;
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (te) return te.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++) if (n in t && t[n] === e) return n;
            }
            return -1;
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; n > r; ) e[i++] = t[r++];
            if (n != n) for (;void 0 !== t[r]; ) e[i++] = t[r++];
            return e.length = i, e;
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; o > i; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r;
        },
        map: function(e, t, r) {
            var i, o, a = 0, s = [];
            if (n(e)) for (i = e.length; i > a; a++) null != (o = t(e[a], a, r)) && s.push(o); else for (a in e) null != (o = t(e[a], a, r)) && s.push(o);
            return Z.apply([], s);
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            return "string" == typeof t && (i = e[t], t = e, e = i), ae.isFunction(e) ? (n = Q.call(arguments, 2), 
            r = function() {
                return e.apply(t || this, n.concat(Q.call(arguments)));
            }, r.guid = e.guid = e.guid || ae.guid++, r) : void 0;
        },
        now: function() {
            return +new Date();
        },
        support: oe
    }), "function" == typeof Symbol && (ae.fn[Symbol.iterator] = K[Symbol.iterator]), ae.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        ne["[object " + t + "]"] = t.toLowerCase();
    });
    var fe = function(e) {
        function t(e, t, n, r) {
            var i, o, a, s, u, l, f, p, h = t && t.ownerDocument, v = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== v && 9 !== v && 11 !== v) return n;
            if (!r && ((t ? t.ownerDocument || t : R) !== D && j(t), t = t || D, _)) {
                if (11 !== v && (l = ve.exec(e))) if (i = l[1]) {
                    if (9 === v) {
                        if (!(a = t.getElementById(i))) return n;
                        if (a.id === i) return n.push(a), n;
                    } else if (h && (a = h.getElementById(i)) && M(t, a) && a.id === i) return n.push(a), n;
                } else {
                    if (l[2]) return K.apply(n, t.getElementsByTagName(e)), n;
                    if ((i = l[3]) && x.getElementsByClassName && t.getElementsByClassName) return K.apply(n, t.getElementsByClassName(i)), 
                    n;
                }
                if (x.qsa && !z[e + " "] && (!H || !H.test(e))) {
                    if (1 !== v) h = t, p = e; else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((s = t.getAttribute("id")) ? s = s.replace(me, "\\$&") : t.setAttribute("id", s = F), o = (f = E(e)).length, 
                        u = ce.test(s) ? "#" + s : "[id='" + s + "']"; o--; ) f[o] = u + " " + d(f[o]);
                        p = f.join(","), h = ge.test(e) && c(t.parentNode) || t;
                    }
                    if (p) try {
                        return K.apply(n, h.querySelectorAll(p)), n;
                    } catch (e) {} finally {
                        s === F && t.removeAttribute("id");
                    }
                }
            }
            return k(e.replace(oe, "$1"), t, n, r);
        }
        function n() {
            function e(n, r) {
                return t.push(n + " ") > b.cacheLength && delete e[t.shift()], e[n + " "] = r;
            }
            var t = [];
            return e;
        }
        function r(e) {
            return e[F] = !0, e;
        }
        function i(e) {
            var t = D.createElement("div");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null;
            }
        }
        function o(e, t) {
            for (var n = e.split("|"), r = n.length; r--; ) b.attrHandle[n[r]] = t;
        }
        function a(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || X) - (~e.sourceIndex || X);
            if (r) return r;
            if (n) for (;n = n.nextSibling; ) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function s(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
        }
        function u(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
            };
        }
        function l(e) {
            return r(function(t) {
                return t = +t, r(function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--; ) n[i = o[a]] && (n[i] = !(r[i] = n[i]));
                });
            });
        }
        function c(e) {
            return e && void 0 !== e.getElementsByTagName && e;
        }
        function f() {}
        function d(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;
            return r;
        }
        function p(e, t, n) {
            var r = t.dir, i = n && "parentNode" === r, o = P++;
            return t.first ? function(t, n, o) {
                for (;t = t[r]; ) if (1 === t.nodeType || i) return e(t, n, o);
            } : function(t, n, a) {
                var s, u, l, c = [ B, o ];
                if (a) {
                    for (;t = t[r]; ) if ((1 === t.nodeType || i) && e(t, n, a)) return !0;
                } else for (;t = t[r]; ) if (1 === t.nodeType || i) {
                    if (l = t[F] || (t[F] = {}), u = l[t.uniqueID] || (l[t.uniqueID] = {}), (s = u[r]) && s[0] === B && s[1] === o) return c[2] = s[2];
                    if (u[r] = c, c[2] = e(t, n, a)) return !0;
                }
            };
        }
        function h(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                return !0;
            } : e[0];
        }
        function v(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), 
            l && t.push(s)));
            return a;
        }
        function g(e, n, i, o, a, s) {
            return o && !o[F] && (o = g(o)), a && !a[F] && (a = g(a, s)), r(function(r, s, u, l) {
                var c, f, d, p = [], h = [], g = s.length, m = r || function(e, n, r) {
                    for (var i = 0, o = n.length; o > i; i++) t(e, n[i], r);
                    return r;
                }(n || "*", u.nodeType ? [ u ] : u, []), y = !e || !r && n ? m : v(m, p, e, u, l), x = i ? a || (r ? e : g || o) ? [] : s : y;
                if (i && i(y, x, u, l), o) for (c = v(x, h), o(c, [], u, l), f = c.length; f--; ) (d = c[f]) && (x[h[f]] = !(y[h[f]] = d));
                if (r) {
                    if (a || e) {
                        if (a) {
                            for (c = [], f = x.length; f--; ) (d = x[f]) && c.push(y[f] = d);
                            a(null, x = [], c, l);
                        }
                        for (f = x.length; f--; ) (d = x[f]) && (c = a ? Q(r, d) : p[f]) > -1 && (r[c] = !(s[c] = d));
                    }
                } else x = v(x === s ? x.splice(g, x.length) : x), a ? a(null, s, x, l) : K.apply(s, x);
            });
        }
        function m(e) {
            for (var t, n, r, i = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = p(function(e) {
                return e === t;
            }, a, !0), l = p(function(e) {
                return Q(t, e) > -1;
            }, a, !0), c = [ function(e, n, r) {
                var i = !o && (r || n !== N) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r));
                return t = null, i;
            } ]; i > s; s++) if (n = b.relative[e[s].type]) c = [ p(h(c), n) ]; else {
                if ((n = b.filter[e[s].type].apply(null, e[s].matches))[F]) {
                    for (r = ++s; i > r && !b.relative[e[r].type]; r++) ;
                    return g(s > 1 && h(c), s > 1 && d(e.slice(0, s - 1).concat({
                        value: " " === e[s - 2].type ? "*" : ""
                    })).replace(oe, "$1"), n, r > s && m(e.slice(s, r)), i > r && m(e = e.slice(r)), i > r && d(e));
                }
                c.push(n);
            }
            return h(c);
        }
        var y, x, b, w, T, E, C, k, N, S, A, j, D, L, _, H, q, O, M, F = "sizzle" + 1 * new Date(), R = e.document, B = 0, P = 0, I = n(), W = n(), z = n(), $ = function(e, t) {
            return e === t && (A = !0), 0;
        }, X = 1 << 31, U = {}.hasOwnProperty, V = [], Y = V.pop, J = V.push, K = V.push, G = V.slice, Q = function(e, t) {
            for (var n = 0, r = e.length; r > n; n++) if (e[n] === t) return n;
            return -1;
        }, Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ee = "[\\x20\\t\\r\\n\\f]", te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]", re = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)", ie = new RegExp(ee + "+", "g"), oe = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"), ae = new RegExp("^" + ee + "*," + ee + "*"), se = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"), ue = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"), le = new RegExp(re), ce = new RegExp("^" + te + "$"), fe = {
            ID: new RegExp("^#(" + te + ")"),
            CLASS: new RegExp("^\\.(" + te + ")"),
            TAG: new RegExp("^(" + te + "|[*])"),
            ATTR: new RegExp("^" + ne),
            PSEUDO: new RegExp("^" + re),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + Z + ")$", "i"),
            needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
        }, de = /^(?:input|select|textarea|button)$/i, pe = /^h\d$/i, he = /^[^{]+\{\s*\[native \w/, ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ge = /[+~]/, me = /'|\\/g, ye = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"), xe = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r != r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
        }, be = function() {
            j();
        };
        try {
            K.apply(V = G.call(R.childNodes), R.childNodes), V[R.childNodes.length].nodeType;
        } catch (e) {
            K = {
                apply: V.length ? function(e, t) {
                    J.apply(e, G.call(t));
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++]; ) ;
                    e.length = n - 1;
                }
            };
        }
        x = t.support = {}, T = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName;
        }, j = t.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : R;
            return r !== D && 9 === r.nodeType && r.documentElement ? (D = r, L = D.documentElement, _ = !T(D), 
            (n = D.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", be, !1) : n.attachEvent && n.attachEvent("onunload", be)), 
            x.attributes = i(function(e) {
                return e.className = "i", !e.getAttribute("className");
            }), x.getElementsByTagName = i(function(e) {
                return e.appendChild(D.createComment("")), !e.getElementsByTagName("*").length;
            }), x.getElementsByClassName = he.test(D.getElementsByClassName), x.getById = i(function(e) {
                return L.appendChild(e).id = F, !D.getElementsByName || !D.getElementsByName(F).length;
            }), x.getById ? (b.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && _) {
                    var n = t.getElementById(e);
                    return n ? [ n ] : [];
                }
            }, b.filter.ID = function(e) {
                var t = e.replace(ye, xe);
                return function(e) {
                    return e.getAttribute("id") === t;
                };
            }) : (delete b.find.ID, b.filter.ID = function(e) {
                var t = e.replace(ye, xe);
                return function(e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t;
                };
            }), b.find.TAG = x.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0;
            } : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (;n = o[i++]; ) 1 === n.nodeType && r.push(n);
                    return r;
                }
                return o;
            }, b.find.CLASS = x.getElementsByClassName && function(e, t) {
                return void 0 !== t.getElementsByClassName && _ ? t.getElementsByClassName(e) : void 0;
            }, q = [], H = [], (x.qsa = he.test(D.querySelectorAll)) && (i(function(e) {
                L.appendChild(e).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\r\\' msallowcapture=''><option selected=''></option></select>", 
                e.querySelectorAll("[msallowcapture^='']").length && H.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || H.push("\\[" + ee + "*(?:value|" + Z + ")"), 
                e.querySelectorAll("[id~=" + F + "-]").length || H.push("~="), e.querySelectorAll(":checked").length || H.push(":checked"), 
                e.querySelectorAll("a#" + F + "+*").length || H.push(".#.+[+~]");
            }), i(function(e) {
                var t = D.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && H.push("name" + ee + "*[*^$|!~]?="), 
                e.querySelectorAll(":enabled").length || H.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), 
                H.push(",.*:");
            })), (x.matchesSelector = he.test(O = L.matches || L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && i(function(e) {
                x.disconnectedMatch = O.call(e, "div"), O.call(e, "[s!='']:x"), q.push("!=", re);
            }), H = H.length && new RegExp(H.join("|")), q = q.length && new RegExp(q.join("|")), t = he.test(L.compareDocumentPosition), 
            M = t || he.test(L.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
            } : function(e, t) {
                if (t) for (;t = t.parentNode; ) if (t === e) return !0;
                return !1;
            }, $ = t ? function(e, t) {
                if (e === t) return A = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === D || e.ownerDocument === R && M(R, e) ? -1 : t === D || t.ownerDocument === R && M(R, t) ? 1 : S ? Q(S, e) - Q(S, t) : 0 : 4 & n ? -1 : 1);
            } : function(e, t) {
                if (e === t) return A = !0, 0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, s = [ e ], u = [ t ];
                if (!i || !o) return e === D ? -1 : t === D ? 1 : i ? -1 : o ? 1 : S ? Q(S, e) - Q(S, t) : 0;
                if (i === o) return a(e, t);
                for (n = e; n = n.parentNode; ) s.unshift(n);
                for (n = t; n = n.parentNode; ) u.unshift(n);
                for (;s[r] === u[r]; ) r++;
                return r ? a(s[r], u[r]) : s[r] === R ? -1 : u[r] === R ? 1 : 0;
            }, D) : D;
        }, t.matches = function(e, n) {
            return t(e, null, null, n);
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== D && j(e), n = n.replace(ue, "='$1']"), x.matchesSelector && _ && !z[n + " "] && (!q || !q.test(n)) && (!H || !H.test(n))) try {
                var r = O.call(e, n);
                if (r || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
            } catch (e) {}
            return t(n, D, null, [ e ]).length > 0;
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== D && j(e), M(e, t);
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== D && j(e);
            var n = b.attrHandle[t.toLowerCase()], r = n && U.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !_) : void 0;
            return void 0 !== r ? r : x.attributes || !_ ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }, t.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (A = !x.detectDuplicates, S = !x.sortStable && e.slice(0), e.sort($), A) {
                for (;t = e[i++]; ) t === e[i] && (r = n.push(i));
                for (;r--; ) e.splice(n[r], 1);
            }
            return S = null, e;
        }, w = t.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += w(e);
                } else if (3 === i || 4 === i) return e.nodeValue;
            } else for (;t = e[r++]; ) n += w(t);
            return n;
        }, (b = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: fe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(ye, xe), e[3] = (e[3] || e[4] || e[5] || "").replace(ye, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), 
                    e.slice(0, 4);
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), 
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e;
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && le.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), 
                    e[2] = n.slice(0, t)), e.slice(0, 3));
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(ye, xe).toLowerCase();
                    return "*" === e ? function() {
                        return !0;
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
                },
                CLASS: function(e) {
                    var t = I[e + " "];
                    return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && I(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
                    });
                },
                ATTR: function(e, n, r) {
                    return function(i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ie, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"));
                    };
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode;
                    } : function(t, n, u) {
                        var l, c, f, d, p, h, v = o !== a ? "nextSibling" : "previousSibling", g = t.parentNode, m = s && t.nodeName.toLowerCase(), y = !u && !s, x = !1;
                        if (g) {
                            if (o) {
                                for (;v; ) {
                                    for (d = t; d = d[v]; ) if (s ? d.nodeName.toLowerCase() === m : 1 === d.nodeType) return !1;
                                    h = v = "only" === e && !h && "nextSibling";
                                }
                                return !0;
                            }
                            if (h = [ a ? g.firstChild : g.lastChild ], a && y) {
                                for (x = (p = (l = (c = (f = (d = g)[F] || (d[F] = {}))[d.uniqueID] || (f[d.uniqueID] = {}))[e] || [])[0] === B && l[1]) && l[2], 
                                d = p && g.childNodes[p]; d = ++p && d && d[v] || (x = p = 0) || h.pop(); ) if (1 === d.nodeType && ++x && d === t) {
                                    c[e] = [ B, p, x ];
                                    break;
                                }
                            } else if (y && (d = t, f = d[F] || (d[F] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), l = c[e] || [], 
                            p = l[0] === B && l[1], x = p), !1 === x) for (;(d = ++p && d && d[v] || (x = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== m : 1 !== d.nodeType) || !++x || (y && (f = d[F] || (d[F] = {}), 
                            c = f[d.uniqueID] || (f[d.uniqueID] = {}), c[e] = [ B, x ]), d !== t)); ) ;
                            return (x -= i) === r || x % r == 0 && x / r >= 0;
                        }
                    };
                },
                PSEUDO: function(e, n) {
                    var i, o = b.pseudos[e] || b.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[F] ? o(n) : o.length > 1 ? (i = [ e, e, "", n ], b.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, i = o(e, n), a = i.length; a--; ) r = Q(e, i[a]), e[r] = !(t[r] = i[a]);
                    }) : function(e) {
                        return o(e, 0, i);
                    }) : o;
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = [], n = [], i = C(e.replace(oe, "$1"));
                    return i[F] ? r(function(e, t, n, r) {
                        for (var o, a = i(e, null, r, []), s = e.length; s--; ) (o = a[s]) && (e[s] = !(t[s] = o));
                    }) : function(e, r, o) {
                        return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop();
                    };
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0;
                    };
                }),
                contains: r(function(e) {
                    return e = e.replace(ye, xe), function(t) {
                        return (t.textContent || t.innerText || w(t)).indexOf(e) > -1;
                    };
                }),
                lang: r(function(e) {
                    return ce.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ye, xe).toLowerCase(), function(t) {
                        var n;
                        do {
                            if (n = _ ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                    };
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                },
                root: function(e) {
                    return e === L;
                },
                focus: function(e) {
                    return e === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: function(e) {
                    return !1 === e.disabled;
                },
                disabled: function(e) {
                    return !0 === e.disabled;
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected;
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(e) {
                    return !b.pseudos.empty(e);
                },
                header: function(e) {
                    return pe.test(e.nodeName);
                },
                input: function(e) {
                    return de.test(e.nodeName);
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t;
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                },
                first: l(function() {
                    return [ 0 ];
                }),
                last: l(function(e, t) {
                    return [ t - 1 ];
                }),
                eq: l(function(e, t, n) {
                    return [ 0 > n ? n + t : n ];
                }),
                even: l(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e;
                }),
                odd: l(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e;
                }),
                lt: l(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0; ) e.push(r);
                    return e;
                }),
                gt: l(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t; ) e.push(r);
                    return e;
                })
            }
        }).pseudos.nth = b.pseudos.eq;
        for (y in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) b.pseudos[y] = s(y);
        for (y in {
            submit: !0,
            reset: !0
        }) b.pseudos[y] = u(y);
        return f.prototype = b.filters = b.pseudos, b.setFilters = new f(), E = t.tokenize = function(e, n) {
            var r, i, o, a, s, u, l, c = W[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (s = e, u = [], l = b.preFilter; s; ) {
                r && !(i = ae.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = se.exec(s)) && (r = i.shift(), 
                o.push({
                    value: r,
                    type: i[0].replace(oe, " ")
                }), s = s.slice(r.length));
                for (a in b.filter) !(i = fe[a].exec(s)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: a,
                    matches: i
                }), s = s.slice(r.length));
                if (!r) break;
            }
            return n ? s.length : s ? t.error(e) : W(e, u).slice(0);
        }, C = t.compile = function(e, n) {
            var i, o = [], a = [], s = z[e + " "];
            if (!s) {
                for (n || (n = E(e)), i = n.length; i--; ) (s = m(n[i]))[F] ? o.push(s) : a.push(s);
                (s = z(e, function(e, n) {
                    var i = n.length > 0, o = e.length > 0, a = function(r, a, s, u, l) {
                        var c, f, d, p = 0, h = "0", g = r && [], m = [], y = N, x = r || o && b.find.TAG("*", l), w = B += null == y ? 1 : Math.random() || .1, T = x.length;
                        for (l && (N = a === D || a || l); h !== T && null != (c = x[h]); h++) {
                            if (o && c) {
                                for (f = 0, a || c.ownerDocument === D || (j(c), s = !_); d = e[f++]; ) if (d(c, a || D, s)) {
                                    u.push(c);
                                    break;
                                }
                                l && (B = w);
                            }
                            i && ((c = !d && c) && p--, r && g.push(c));
                        }
                        if (p += h, i && h !== p) {
                            for (f = 0; d = n[f++]; ) d(g, m, a, s);
                            if (r) {
                                if (p > 0) for (;h--; ) g[h] || m[h] || (m[h] = Y.call(u));
                                m = v(m);
                            }
                            K.apply(u, m), l && !r && m.length > 0 && p + n.length > 1 && t.uniqueSort(u);
                        }
                        return l && (B = w, N = y), g;
                    };
                    return i ? r(a) : a;
                }(a, o))).selector = e;
            }
            return s;
        }, k = t.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e, f = !r && E(e = l.selector || e);
            if (n = n || [], 1 === f.length) {
                if ((o = f[0] = f[0].slice(0)).length > 2 && "ID" === (a = o[0]).type && x.getById && 9 === t.nodeType && _ && b.relative[o[1].type]) {
                    if (!(t = (b.find.ID(a.matches[0].replace(ye, xe), t) || [])[0])) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length);
                }
                for (i = fe.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !b.relative[s = a.type]); ) if ((u = b.find[s]) && (r = u(a.matches[0].replace(ye, xe), ge.test(o[0].type) && c(t.parentNode) || t))) {
                    if (o.splice(i, 1), !(e = r.length && d(o))) return K.apply(n, r), n;
                    break;
                }
            }
            return (l || C(e, f))(r, t, !_, n, !t || ge.test(e) && c(t.parentNode) || t), n;
        }, x.sortStable = F.split("").sort($).join("") === F, x.detectDuplicates = !!A, j(), x.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(D.createElement("div"));
        }), i(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
        }) || o("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }), x.attributes && i(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
        }) || o("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue;
        }), i(function(e) {
            return null == e.getAttribute("disabled");
        }) || o(Z, function(e, t, n) {
            var r;
            return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
        }), t;
    }(e);
    ae.find = fe, ae.expr = fe.selectors, ae.expr[":"] = ae.expr.pseudos, ae.uniqueSort = ae.unique = fe.uniqueSort, 
    ae.text = fe.getText, ae.isXMLDoc = fe.isXML, ae.contains = fe.contains;
    var de = function(e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; ) if (1 === e.nodeType) {
            if (i && ae(e).is(n)) break;
            r.push(e);
        }
        return r;
    }, pe = function(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n;
    }, he = ae.expr.match.needsContext, ve = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, ge = /^.[^:#\[\.,]*$/;
    ae.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ae.find.matchesSelector(r, e) ? [ r ] : [] : ae.find.matches(e, ae.grep(t, function(e) {
            return 1 === e.nodeType;
        }));
    }, ae.fn.extend({
        find: function(e) {
            var t, n = [], r = this, i = r.length;
            if ("string" != typeof e) return this.pushStack(ae(e).filter(function() {
                for (t = 0; i > t; t++) if (ae.contains(r[t], this)) return !0;
            }));
            for (t = 0; i > t; t++) ae.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? ae.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, 
            n;
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1));
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0));
        },
        is: function(e) {
            return !!r(this, "string" == typeof e && he.test(e) ? ae(e) : e || [], !1).length;
        }
    });
    var me, ye = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (ae.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || me, "string" == typeof e) {
            if (!(r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [ null, e, null ] : ye.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof ae ? t[0] : t, ae.merge(this, ae.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : G, !0)), 
                ve.test(r[1]) && ae.isPlainObject(t)) for (r in t) ae.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this;
            }
            if ((i = G.getElementById(r[2])) && i.parentNode) {
                if (i.id !== r[2]) return me.find(e);
                this.length = 1, this[0] = i;
            }
            return this.context = G, this.selector = e, this;
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ae.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(ae) : (void 0 !== e.selector && (this.selector = e.selector, 
        this.context = e.context), ae.makeArray(e, this));
    }).prototype = ae.fn, me = ae(G);
    var xe = /^(?:parents|prev(?:Until|All))/, be = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    ae.fn.extend({
        has: function(e) {
            var t, n = ae(e, this), r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++) if (ae.contains(this, n[t])) return !0;
            });
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], a = he.test(e) || "string" != typeof e ? ae(e, t || this.context) : 0; i > r; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ae.find.matchesSelector(n, e))) {
                o.push(n);
                break;
            }
            return this.pushStack(o.length > 1 ? ae.uniqueSort(o) : o);
        },
        index: function(e) {
            return e ? "string" == typeof e ? ae.inArray(this[0], ae(e)) : ae.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(e, t) {
            return this.pushStack(ae.uniqueSort(ae.merge(this.get(), ae(e, t))));
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        }
    }), ae.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
        },
        parents: function(e) {
            return de(e, "parentNode");
        },
        parentsUntil: function(e, t, n) {
            return de(e, "parentNode", n);
        },
        next: function(e) {
            return i(e, "nextSibling");
        },
        prev: function(e) {
            return i(e, "previousSibling");
        },
        nextAll: function(e) {
            return de(e, "nextSibling");
        },
        prevAll: function(e) {
            return de(e, "previousSibling");
        },
        nextUntil: function(e, t, n) {
            return de(e, "nextSibling", n);
        },
        prevUntil: function(e, t, n) {
            return de(e, "previousSibling", n);
        },
        siblings: function(e) {
            return pe((e.parentNode || {}).firstChild, e);
        },
        children: function(e) {
            return pe(e.firstChild);
        },
        contents: function(e) {
            return ae.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ae.merge([], e.childNodes);
        }
    }, function(e, t) {
        ae.fn[e] = function(n, r) {
            var i = ae.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = ae.filter(r, i)), this.length > 1 && (be[e] || (i = ae.uniqueSort(i)), 
            xe.test(e) && (i = i.reverse())), this.pushStack(i);
        };
    });
    var we = /\S+/g;
    ae.Callbacks = function(e) {
        e = "string" == typeof e ? function(e) {
            var t = {};
            return ae.each(e.match(we) || [], function(e, n) {
                t[n] = !0;
            }), t;
        }(e) : ae.extend({}, e);
        var t, n, r, i, o = [], a = [], s = -1, u = function() {
            for (i = e.once, r = t = !0; a.length; s = -1) for (n = a.shift(); ++s < o.length; ) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, 
            n = !1);
            e.memory || (n = !1), t = !1, i && (o = n ? [] : "");
        }, l = {
            add: function() {
                return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                    ae.each(n, function(n, r) {
                        ae.isFunction(r) ? e.unique && l.has(r) || o.push(r) : r && r.length && "string" !== ae.type(r) && t(r);
                    });
                }(arguments), n && !t && u()), this;
            },
            remove: function() {
                return ae.each(arguments, function(e, t) {
                    for (var n; (n = ae.inArray(t, o, n)) > -1; ) o.splice(n, 1), s >= n && s--;
                }), this;
            },
            has: function(e) {
                return e ? ae.inArray(e, o) > -1 : o.length > 0;
            },
            empty: function() {
                return o && (o = []), this;
            },
            disable: function() {
                return i = a = [], o = n = "", this;
            },
            disabled: function() {
                return !o;
            },
            lock: function() {
                return i = !0, n || l.disable(), this;
            },
            locked: function() {
                return !!i;
            },
            fireWith: function(e, n) {
                return i || (n = n || [], n = [ e, n.slice ? n.slice() : n ], a.push(n), t || u()), this;
            },
            fire: function() {
                return l.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!r;
            }
        };
        return l;
    }, ae.extend({
        Deferred: function(e) {
            var t = [ [ "resolve", "done", ae.Callbacks("once memory"), "resolved" ], [ "reject", "fail", ae.Callbacks("once memory"), "rejected" ], [ "notify", "progress", ae.Callbacks("memory") ] ], n = "pending", r = {
                state: function() {
                    return n;
                },
                always: function() {
                    return i.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var e = arguments;
                    return ae.Deferred(function(n) {
                        ae.each(t, function(t, o) {
                            var a = ae.isFunction(e[t]) && e[t];
                            i[o[1]](function() {
                                var e = a && a.apply(this, arguments);
                                e && ae.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [ e ] : arguments);
                            });
                        }), e = null;
                    }).promise();
                },
                promise: function(e) {
                    return null != e ? ae.extend(e, r) : r;
                }
            }, i = {};
            return r.pipe = r.then, ae.each(t, function(e, o) {
                var a = o[2], s = o[3];
                r[o[1]] = a.add, s && a.add(function() {
                    n = s;
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this;
                }, i[o[0] + "With"] = a.fireWith;
            }), r.promise(i), e && e.call(i, i), i;
        },
        when: function(e) {
            var t, n, r, i = 0, o = Q.call(arguments), a = o.length, s = 1 !== a || e && ae.isFunction(e.promise) ? a : 0, u = 1 === s ? e : ae.Deferred(), l = function(e, n, r) {
                return function(i) {
                    n[e] = this, r[e] = arguments.length > 1 ? Q.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r);
                };
            };
            if (a > 1) for (t = new Array(a), n = new Array(a), r = new Array(a); a > i; i++) o[i] && ae.isFunction(o[i].promise) ? o[i].promise().progress(l(i, n, t)).done(l(i, r, o)).fail(u.reject) : --s;
            return s || u.resolveWith(r, o), u.promise();
        }
    });
    var Te;
    ae.fn.ready = function(e) {
        return ae.ready.promise().done(e), this;
    }, ae.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? ae.readyWait++ : ae.ready(!0);
        },
        ready: function(e) {
            (!0 === e ? --ae.readyWait : ae.isReady) || (ae.isReady = !0, !0 !== e && --ae.readyWait > 0 || (Te.resolveWith(G, [ ae ]), 
            ae.fn.triggerHandler && (ae(G).triggerHandler("ready"), ae(G).off("ready"))));
        }
    }), ae.ready.promise = function(t) {
        if (!Te) if (Te = ae.Deferred(), "complete" === G.readyState || "loading" !== G.readyState && !G.documentElement.doScroll) e.setTimeout(ae.ready); else if (G.addEventListener) G.addEventListener("DOMContentLoaded", a), 
        e.addEventListener("load", a); else {
            G.attachEvent("onreadystatechange", a), e.attachEvent("onload", a);
            var n = !1;
            try {
                n = null == e.frameElement && G.documentElement;
            } catch (e) {}
            n && n.doScroll && function t() {
                if (!ae.isReady) {
                    try {
                        n.doScroll("left");
                    } catch (n) {
                        return e.setTimeout(t, 50);
                    }
                    o(), ae.ready();
                }
            }();
        }
        return Te.promise(t);
    }, ae.ready.promise();
    var Ee;
    for (Ee in ae(oe)) break;
    oe.ownFirst = "0" === Ee, oe.inlineBlockNeedsLayout = !1, ae(function() {
        var e, t, n, r;
        (n = G.getElementsByTagName("body")[0]) && n.style && (t = G.createElement("div"), r = G.createElement("div"), 
        r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), 
        void 0 !== t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", 
        oe.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(r));
    }), function() {
        var e = G.createElement("div");
        oe.deleteExpando = !0;
        try {
            delete e.test;
        } catch (e) {
            oe.deleteExpando = !1;
        }
        e = null;
    }();
    var Ce = function(e) {
        var t = ae.noData[(e.nodeName + " ").toLowerCase()], n = +e.nodeType || 1;
        return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t);
    }, ke = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Ne = /([A-Z])/g;
    ae.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return !!(e = e.nodeType ? ae.cache[e[ae.expando]] : e[ae.expando]) && !u(e);
        },
        data: function(e, t, n) {
            return l(e, t, n);
        },
        removeData: function(e, t) {
            return c(e, t);
        },
        _data: function(e, t, n) {
            return l(e, t, n, !0);
        },
        _removeData: function(e, t) {
            return c(e, t, !0);
        }
    }), ae.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = ae.data(o), 1 === o.nodeType && !ae._data(o, "parsedAttrs"))) {
                    for (n = a.length; n--; ) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = ae.camelCase(r.slice(5)), 
                    s(o, r, i[r]));
                    ae._data(o, "parsedAttrs", !0);
                }
                return i;
            }
            return "object" == typeof e ? this.each(function() {
                ae.data(this, e);
            }) : arguments.length > 1 ? this.each(function() {
                ae.data(this, e, t);
            }) : o ? s(o, e, ae.data(o, e)) : void 0;
        },
        removeData: function(e) {
            return this.each(function() {
                ae.removeData(this, e);
            });
        }
    }), ae.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = ae._data(e, t), n && (!r || ae.isArray(n) ? r = ae._data(e, t, ae.makeArray(n)) : r.push(n)), 
            r || []) : void 0;
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = ae.queue(e, t), r = n.length, i = n.shift(), o = ae._queueHooks(e, t);
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, 
            i.call(e, function() {
                ae.dequeue(e, t);
            }, o)), !r && o && o.empty.fire();
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return ae._data(e, n) || ae._data(e, n, {
                empty: ae.Callbacks("once memory").add(function() {
                    ae._removeData(e, t + "queue"), ae._removeData(e, n);
                })
            });
        }
    }), ae.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ae.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = ae.queue(this, e, t);
                ae._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ae.dequeue(this, e);
            });
        },
        dequeue: function(e) {
            return this.each(function() {
                ae.dequeue(this, e);
            });
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", []);
        },
        promise: function(e, t) {
            var n, r = 1, i = ae.Deferred(), o = this, a = this.length, s = function() {
                --r || i.resolveWith(o, [ o ]);
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--; ) (n = ae._data(o[a], e + "queueHooks")) && n.empty && (r++, 
            n.empty.add(s));
            return s(), i.promise(t);
        }
    }), function() {
        var e;
        oe.shrinkWrapBlocks = function() {
            if (null != e) return e;
            e = !1;
            var t, n, r;
            return (n = G.getElementsByTagName("body")[0]) && n.style ? (t = G.createElement("div"), r = G.createElement("div"), 
            r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(t), 
            void 0 !== t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", 
            t.appendChild(G.createElement("div")).style.width = "5px", e = 3 !== t.offsetWidth), n.removeChild(r), 
            e) : void 0;
        };
    }();
    var Se = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Ae = new RegExp("^(?:([+-])=|)(" + Se + ")([a-z%]*)$", "i"), je = [ "Top", "Right", "Bottom", "Left" ], De = function(e, t) {
        return e = t || e, "none" === ae.css(e, "display") || !ae.contains(e.ownerDocument, e);
    }, Le = function(e, t, n, r, i, o, a) {
        var s = 0, u = e.length, l = null == n;
        if ("object" === ae.type(n)) {
            i = !0;
            for (s in n) Le(e, t, s, n[s], !0, o, a);
        } else if (void 0 !== r && (i = !0, ae.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, 
        t = function(e, t, n) {
            return l.call(ae(e), n);
        })), t)) for (;u > s; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    }, _e = /^(?:checkbox|radio)$/i, He = /<([\w:-]+)/, qe = /^$|\/(?:java|ecma)script/i, Oe = /^\s+/, Me = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    !function() {
        var e = G.createElement("div"), t = G.createDocumentFragment(), n = G.createElement("input");
        e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", oe.leadingWhitespace = 3 === e.firstChild.nodeType, 
        oe.tbody = !e.getElementsByTagName("tbody").length, oe.htmlSerialize = !!e.getElementsByTagName("link").length, 
        oe.html5Clone = "<:nav></:nav>" !== G.createElement("nav").cloneNode(!0).outerHTML, n.type = "checkbox", 
        n.checked = !0, t.appendChild(n), oe.appendChecked = n.checked, e.innerHTML = "<textarea>x</textarea>", 
        oe.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, t.appendChild(e), (n = G.createElement("input")).setAttribute("type", "radio"), 
        n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), oe.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, 
        oe.noCloneEvent = !!e.addEventListener, e[ae.expando] = 1, oe.attributes = !e.getAttribute(ae.expando);
    }();
    var Fe = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        legend: [ 1, "<fieldset>", "</fieldset>" ],
        area: [ 1, "<map>", "</map>" ],
        param: [ 1, "<object>", "</object>" ],
        thead: [ 1, "<table>", "</table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: oe.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
    };
    Fe.optgroup = Fe.option, Fe.tbody = Fe.tfoot = Fe.colgroup = Fe.caption = Fe.thead, Fe.th = Fe.td;
    var Re = /<|&#?\w+;/, Be = /<tbody/i;
    !function() {
        var t, n, r = G.createElement("div");
        for (t in {
            submit: !0,
            change: !0,
            focusin: !0
        }) n = "on" + t, (oe[t] = n in e) || (r.setAttribute(n, "t"), oe[t] = !1 === r.attributes[n].expando);
        r = null;
    }();
    var Pe = /^(?:input|select|textarea)$/i, Ie = /^key/, We = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, ze = /^(?:focusinfocus|focusoutblur)$/, $e = /^([^.]*)(?:\.(.+)|)/;
    ae.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, d, p, h, v, g = ae._data(e);
            if (g) {
                for (n.handler && (u = n, n = u.handler, i = u.selector), n.guid || (n.guid = ae.guid++), (a = g.events) || (a = g.events = {}), 
                (c = g.handle) || (c = g.handle = function(e) {
                    return void 0 === ae || e && ae.event.triggered === e.type ? void 0 : ae.event.dispatch.apply(c.elem, arguments);
                }, c.elem = e), s = (t = (t || "").match(we) || [ "" ]).length; s--; ) o = $e.exec(t[s]) || [], p = v = o[1], 
                h = (o[2] || "").split(".").sort(), p && (l = ae.event.special[p] || {}, p = (i ? l.delegateType : l.bindType) || p, 
                l = ae.event.special[p] || {}, f = ae.extend({
                    type: p,
                    origType: v,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && ae.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, u), (d = a[p]) || (d = a[p] = [], d.delegateCount = 0, l.setup && !1 !== l.setup.call(e, r, h, c) || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))), 
                l.add && (l.add.call(e, f), f.handler.guid || (f.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, f) : d.push(f), 
                ae.event.global[p] = !0);
                e = null;
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, d, p, h, v, g = ae.hasData(e) && ae._data(e);
            if (g && (c = g.events)) {
                for (l = (t = (t || "").match(we) || [ "" ]).length; l--; ) if (s = $e.exec(t[l]) || [], p = v = s[1], 
                h = (s[2] || "").split(".").sort(), p) {
                    for (f = ae.event.special[p] || {}, d = c[p = (r ? f.delegateType : f.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), 
                    u = o = d.length; o--; ) a = d[o], !i && v !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (d.splice(o, 1), 
                    a.selector && d.delegateCount--, f.remove && f.remove.call(e, a));
                    u && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, g.handle) || ae.removeEvent(e, p, g.handle), 
                    delete c[p]);
                } else for (p in c) ae.event.remove(e, p + t[l], n, r, !0);
                ae.isEmptyObject(c) && (delete g.handle, ae._removeData(e, "events"));
            }
        },
        trigger: function(t, n, r, i) {
            var o, a, s, u, l, c, f, d = [ r || G ], p = ie.call(t, "type") ? t.type : t, h = ie.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = c = r = r || G, 3 !== r.nodeType && 8 !== r.nodeType && !ze.test(p + ae.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), 
            p = h.shift(), h.sort()), a = p.indexOf(":") < 0 && "on" + p, t = t[ae.expando] ? t : new ae.Event(p, "object" == typeof t && t), 
            t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            t.result = void 0, t.target || (t.target = r), n = null == n ? [ t ] : ae.makeArray(n, [ t ]), l = ae.event.special[p] || {}, 
            i || !l.trigger || !1 !== l.trigger.apply(r, n))) {
                if (!i && !l.noBubble && !ae.isWindow(r)) {
                    for (u = l.delegateType || p, ze.test(u + p) || (s = s.parentNode); s; s = s.parentNode) d.push(s), 
                    c = s;
                    c === (r.ownerDocument || G) && d.push(c.defaultView || c.parentWindow || e);
                }
                for (f = 0; (s = d[f++]) && !t.isPropagationStopped(); ) t.type = f > 1 ? u : l.bindType || p, (o = (ae._data(s, "events") || {})[t.type] && ae._data(s, "handle")) && o.apply(s, n), 
                (o = a && s[a]) && o.apply && Ce(s) && (t.result = o.apply(s, n), !1 === t.result && t.preventDefault());
                if (t.type = p, !i && !t.isDefaultPrevented() && (!l._default || !1 === l._default.apply(d.pop(), n)) && Ce(r) && a && r[p] && !ae.isWindow(r)) {
                    (c = r[a]) && (r[a] = null), ae.event.triggered = p;
                    try {
                        r[p]();
                    } catch (e) {}
                    ae.event.triggered = void 0, c && (r[a] = c);
                }
                return t.result;
            }
        },
        dispatch: function(e) {
            e = ae.event.fix(e);
            var t, n, r, i, o, a = [], s = Q.call(arguments), u = (ae._data(this, "events") || {})[e.type] || [], l = ae.event.special[e.type] || {};
            if (s[0] = e, e.delegateTarget = this, !l.preDispatch || !1 !== l.preDispatch.call(this, e)) {
                for (a = ae.event.handlers.call(this, e, u), t = 0; (i = a[t++]) && !e.isPropagationStopped(); ) for (e.currentTarget = i.elem, 
                n = 0; (o = i.handlers[n++]) && !e.isImmediatePropagationStopped(); ) e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, 
                e.data = o.data, void 0 !== (r = ((ae.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (e.result = r) && (e.preventDefault(), 
                e.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, e), e.result;
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a = [], s = t.delegateCount, u = e.target;
            if (s && u.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1)) for (;u != this; u = u.parentNode || this) if (1 === u.nodeType && (!0 !== u.disabled || "click" !== e.type)) {
                for (r = [], n = 0; s > n; n++) o = t[n], i = o.selector + " ", void 0 === r[i] && (r[i] = o.needsContext ? ae(i, this).index(u) > -1 : ae.find(i, this, null, [ u ]).length), 
                r[i] && r.push(o);
                r.length && a.push({
                    elem: u,
                    handlers: r
                });
            }
            return s < t.length && a.push({
                elem: this,
                handlers: t.slice(s)
            }), a;
        },
        fix: function(e) {
            if (e[ae.expando]) return e;
            var t, n, r, i = e.type, o = e, a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = We.test(i) ? this.mouseHooks : Ie.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, 
            e = new ae.Event(o), t = r.length; t--; ) n = r[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || G), 3 === e.target.nodeType && (e.target = e.target.parentNode), 
            e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, o = t.button, a = t.fromElement;
                return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || G, i = r.documentElement, 
                n = r.body, e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), 
                e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), 
                !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), 
                e;
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== x() && this.focus) try {
                        return this.focus(), !1;
                    } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === x() && this.blur ? (this.blur(), !1) : void 0;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return ae.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0;
                },
                _default: function(e) {
                    return ae.nodeName(e.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                }
            }
        },
        simulate: function(e, t, n) {
            var r = ae.extend(new ae.Event(), n, {
                type: e,
                isSimulated: !0
            });
            ae.event.trigger(r, null, t), r.isDefaultPrevented() && n.preventDefault();
        }
    }, ae.removeEvent = G.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
    } : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && (void 0 === e[r] && (e[r] = null), e.detachEvent(r, n));
    }, ae.Event = function(e, t) {
        return this instanceof ae.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? m : y) : this.type = e, 
        t && ae.extend(this, t), this.timeStamp = e && e.timeStamp || ae.now(), void (this[ae.expando] = !0)) : new ae.Event(e, t);
    }, ae.Event.prototype = {
        constructor: ae.Event,
        isDefaultPrevented: y,
        isPropagationStopped: y,
        isImmediatePropagationStopped: y,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = m, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1);
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = m, e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(), 
            e.cancelBubble = !0);
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = m, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), 
            this.stopPropagation();
        }
    }, ae.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        ae.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = e.relatedTarget, i = e.handleObj;
                return r && (r === this || ae.contains(this, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), 
                e.type = t), n;
            }
        };
    }), oe.submit || (ae.event.special.submit = {
        setup: function() {
            return !ae.nodeName(this, "form") && void ae.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target, n = ae.nodeName(t, "input") || ae.nodeName(t, "button") ? ae.prop(t, "form") : void 0;
                n && !ae._data(n, "submit") && (ae.event.add(n, "submit._submit", function(e) {
                    e._submitBubble = !0;
                }), ae._data(n, "submit", !0));
            });
        },
        postDispatch: function(e) {
            e._submitBubble && (delete e._submitBubble, this.parentNode && !e.isTrigger && ae.event.simulate("submit", this.parentNode, e));
        },
        teardown: function() {
            return !ae.nodeName(this, "form") && void ae.event.remove(this, "._submit");
        }
    }), oe.change || (ae.event.special.change = {
        setup: function() {
            return Pe.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (ae.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._justChanged = !0);
            }), ae.event.add(this, "click._change", function(e) {
                this._justChanged && !e.isTrigger && (this._justChanged = !1), ae.event.simulate("change", this, e);
            })), !1) : void ae.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Pe.test(t.nodeName) && !ae._data(t, "change") && (ae.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || ae.event.simulate("change", this.parentNode, e);
                }), ae._data(t, "change", !0));
            });
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0;
        },
        teardown: function() {
            return ae.event.remove(this, "._change"), !Pe.test(this.nodeName);
        }
    }), oe.focusin || ae.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            ae.event.simulate(t, e.target, ae.event.fix(e));
        };
        ae.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this, i = ae._data(r, t);
                i || r.addEventListener(e, n, !0), ae._data(r, t, (i || 0) + 1);
            },
            teardown: function() {
                var r = this.ownerDocument || this, i = ae._data(r, t) - 1;
                i ? ae._data(r, t, i) : (r.removeEventListener(e, n, !0), ae._removeData(r, t));
            }
        };
    }), ae.fn.extend({
        on: function(e, t, n, r) {
            return b(this, e, t, n, r);
        },
        one: function(e, t, n, r) {
            return b(this, e, t, n, r, 1);
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, ae(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), 
            this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this;
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = y), this.each(function() {
                ae.event.remove(this, e, n, t);
            });
        },
        trigger: function(e, t) {
            return this.each(function() {
                ae.event.trigger(e, t, this);
            });
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? ae.event.trigger(e, t, n, !0) : void 0;
        }
    });
    var Xe = / jQuery\d+="(?:null|\d+)"/g, Ue = new RegExp("<(?:" + Me + ")[\\s/>]", "i"), Ve = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, Ye = /<script|<style|<link/i, Je = /checked\s*(?:[^=]|=\s*.checked.)/i, Ke = /^true\/(.*)/, Ge = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, Qe = d(G).appendChild(G.createElement("div"));
    ae.extend({
        htmlPrefilter: function(e) {
            return e.replace(Ve, "<$1></$2>");
        },
        clone: function(e, t, n) {
            var r, i, o, a, s, u = ae.contains(e.ownerDocument, e);
            if (oe.html5Clone || ae.isXMLDoc(e) || !Ue.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Qe.innerHTML = e.outerHTML, 
            Qe.removeChild(o = Qe.firstChild)), !(oe.noCloneEvent && oe.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ae.isXMLDoc(e))) for (r = p(o), 
            s = p(e), a = 0; null != (i = s[a]); ++a) r[a] && k(i, r[a]);
            if (t) if (n) for (s = s || p(e), r = r || p(o), a = 0; null != (i = s[a]); a++) C(i, r[a]); else C(e, o);
            return (r = p(o, "script")).length > 0 && h(r, !u && p(e, "script")), r = s = i = null, o;
        },
        cleanData: function(e, t) {
            for (var n, r, i, o, a = 0, s = ae.expando, u = ae.cache, l = oe.attributes, c = ae.event.special; null != (n = e[a]); a++) if ((t || Ce(n)) && (i = n[s], 
            o = i && u[i])) {
                if (o.events) for (r in o.events) c[r] ? ae.event.remove(n, r) : ae.removeEvent(n, r, o.handle);
                u[i] && (delete u[i], l || void 0 === n.removeAttribute ? n[s] = void 0 : n.removeAttribute(s), K.push(i));
            }
        }
    }), ae.fn.extend({
        domManip: N,
        detach: function(e) {
            return S(this, e, !0);
        },
        remove: function(e) {
            return S(this, e);
        },
        text: function(e) {
            return Le(this, function(e) {
                return void 0 === e ? ae.text(this) : this.empty().append((this[0] && this[0].ownerDocument || G).createTextNode(e));
            }, null, e, arguments.length);
        },
        append: function() {
            return N(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    w(this, e).appendChild(e);
                }
            });
        },
        prepend: function() {
            return N(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = w(this, e);
                    t.insertBefore(e, t.firstChild);
                }
            });
        },
        before: function() {
            return N(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
            });
        },
        after: function() {
            return N(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
            });
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && ae.cleanData(p(e, !1)); e.firstChild; ) e.removeChild(e.firstChild);
                e.options && ae.nodeName(e, "select") && (e.options.length = 0);
            }
            return this;
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return ae.clone(this, e, t);
            });
        },
        html: function(e) {
            return Le(this, function(e) {
                var t = this[0] || {}, n = 0, r = this.length;
                if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(Xe, "") : void 0;
                if ("string" == typeof e && !Ye.test(e) && (oe.htmlSerialize || !Ue.test(e)) && (oe.leadingWhitespace || !Oe.test(e)) && !Fe[(He.exec(e) || [ "", "" ])[1].toLowerCase()]) {
                    e = ae.htmlPrefilter(e);
                    try {
                        for (;r > n; n++) 1 === (t = this[n] || {}).nodeType && (ae.cleanData(p(t, !1)), t.innerHTML = e);
                        t = 0;
                    } catch (e) {}
                }
                t && this.empty().append(e);
            }, null, e, arguments.length);
        },
        replaceWith: function() {
            var e = [];
            return N(this, arguments, function(t) {
                var n = this.parentNode;
                ae.inArray(this, e) < 0 && (ae.cleanData(p(this)), n && n.replaceChild(t, this));
            }, e);
        }
    }), ae.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        ae.fn[e] = function(e) {
            for (var n, r = 0, i = [], o = ae(e), a = o.length - 1; a >= r; r++) n = r === a ? this : this.clone(!0), 
            ae(o[r])[t](n), ee.apply(i, n.get());
            return this.pushStack(i);
        };
    });
    var Ze, et = {
        HTML: "block",
        BODY: "block"
    }, tt = /^margin/, nt = new RegExp("^(" + Se + ")(?!px)[a-z%]+$", "i"), rt = function(e, t, n, r) {
        var i, o, a = {};
        for (o in t) a[o] = e.style[o], e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t) e.style[o] = a[o];
        return i;
    }, it = G.documentElement;
    !function() {
        var t, n, r, i, o, a, s = G.createElement("div"), u = G.createElement("div");
        if (u.style) {
            u.style.cssText = "float:left;opacity:.5", oe.opacity = "0.5" === u.style.opacity, oe.cssFloat = !!u.style.cssFloat, 
            u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", oe.clearCloneStyle = "content-box" === u.style.backgroundClip, 
            (s = G.createElement("div")).style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", 
            u.innerHTML = "", s.appendChild(u), oe.boxSizing = "" === u.style.boxSizing || "" === u.style.MozBoxSizing || "" === u.style.WebkitBoxSizing, 
            ae.extend(oe, {
                reliableHiddenOffsets: function() {
                    return null == t && l(), i;
                },
                boxSizingReliable: function() {
                    return null == t && l(), r;
                },
                pixelMarginRight: function() {
                    return null == t && l(), n;
                },
                pixelPosition: function() {
                    return null == t && l(), t;
                },
                reliableMarginRight: function() {
                    return null == t && l(), o;
                },
                reliableMarginLeft: function() {
                    return null == t && l(), a;
                }
            });
            function l() {
                var l, c, f = G.documentElement;
                f.appendChild(s), u.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", 
                t = r = a = !1, n = o = !0, e.getComputedStyle && (c = e.getComputedStyle(u), t = "1%" !== (c || {}).top, 
                a = "2px" === (c || {}).marginLeft, r = "4px" === (c || {
                    width: "4px"
                }).width, u.style.marginRight = "50%", n = "4px" === (c || {
                    marginRight: "4px"
                }).marginRight, l = u.appendChild(G.createElement("div")), l.style.cssText = u.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", 
                l.style.marginRight = l.style.width = "0", u.style.width = "1px", o = !parseFloat((e.getComputedStyle(l) || {}).marginRight), 
                u.removeChild(l)), u.style.display = "none", (i = 0 === u.getClientRects().length) && (u.style.display = "", 
                u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", l = u.getElementsByTagName("td"), l[0].style.cssText = "margin:0;border:0;padding:0;display:none", 
                (i = 0 === l[0].offsetHeight) && (l[0].style.display = "", l[1].style.display = "none", i = 0 === l[0].offsetHeight)), 
                f.removeChild(s);
            }
        }
    }();
    var ot, at, st = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (ot = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e), n.getComputedStyle(t);
    }, at = function(e, t, n) {
        var r, i, o, a, s = e.style;
        return n = n || ot(e), "" !== (a = n ? n.getPropertyValue(t) || n[t] : void 0) && void 0 !== a || ae.contains(e.ownerDocument, e) || (a = ae.style(e, t)), 
        n && !oe.pixelMarginRight() && nt.test(a) && tt.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, 
        s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o), void 0 === a ? a : a + "";
    }) : it.currentStyle && (ot = function(e) {
        return e.currentStyle;
    }, at = function(e, t, n) {
        var r, i, o, a, s = e.style;
        return n = n || ot(e), null == (a = n ? n[t] : void 0) && s && s[t] && (a = s[t]), nt.test(a) && !st.test(t) && (r = s.left, 
        i = e.runtimeStyle, (o = i && i.left) && (i.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, 
        a = s.pixelLeft + "px", s.left = r, o && (i.left = o)), void 0 === a ? a : a + "" || "auto";
    });
    var ut = /alpha\([^)]*\)/i, lt = /opacity\s*=\s*([^)]*)/i, ct = /^(none|table(?!-c[ea]).+)/, ft = new RegExp("^(" + Se + ")(.*)$", "i"), dt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, pt = {
        letterSpacing: "0",
        fontWeight: "400"
    }, ht = [ "Webkit", "O", "Moz", "ms" ], vt = G.createElement("div").style;
    ae.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = at(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: oe.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = ae.camelCase(t), u = e.style;
                if (t = ae.cssProps[s] || (ae.cssProps[s] = L(s) || s), a = ae.cssHooks[t] || ae.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t];
                if ("string" === (o = typeof n) && (i = Ae.exec(n)) && i[1] && (n = f(e, t, i), o = "number"), null != n && n == n && ("number" === o && (n += i && i[3] || (ae.cssNumber[s] ? "" : "px")), 
                oe.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, r))))) try {
                    u[t] = n;
                } catch (e) {}
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = ae.camelCase(t);
            return t = ae.cssProps[s] || (ae.cssProps[s] = L(s) || s), (a = ae.cssHooks[t] || ae.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)), 
            void 0 === o && (o = at(e, t, r)), "normal" === o && t in pt && (o = pt[t]), "" === n || n ? (i = parseFloat(o), 
            !0 === n || isFinite(i) ? i || 0 : o) : o;
        }
    }), ae.each([ "height", "width" ], function(e, t) {
        ae.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? ct.test(ae.css(e, "display")) && 0 === e.offsetWidth ? rt(e, dt, function() {
                    return O(e, t, r);
                }) : O(e, t, r) : void 0;
            },
            set: function(e, n, r) {
                var i = r && ot(e);
                return H(0, n, r ? q(e, t, r, oe.boxSizing && "border-box" === ae.css(e, "boxSizing", !1, i), i) : 0);
            }
        };
    }), oe.opacity || (ae.cssHooks.opacity = {
        get: function(e, t) {
            return lt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "";
        },
        set: function(e, t) {
            var n = e.style, r = e.currentStyle, i = ae.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === ae.trim(o.replace(ut, "")) && n.removeAttribute && (n.removeAttribute("filter"), 
            "" === t || r && !r.filter) || (n.filter = ut.test(o) ? o.replace(ut, i) : o + " " + i);
        }
    }), ae.cssHooks.marginRight = D(oe.reliableMarginRight, function(e, t) {
        return t ? rt(e, {
            display: "inline-block"
        }, at, [ e, "marginRight" ]) : void 0;
    }), ae.cssHooks.marginLeft = D(oe.reliableMarginLeft, function(e, t) {
        return t ? (parseFloat(at(e, "marginLeft")) || (ae.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - rt(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left;
        }) : 0)) + "px" : void 0;
    }), ae.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        ae.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [ n ]; 4 > r; r++) i[e + je[r] + t] = o[r] || o[r - 2] || o[0];
                return i;
            }
        }, tt.test(e) || (ae.cssHooks[e + t].set = H);
    }), ae.fn.extend({
        css: function(e, t) {
            return Le(this, function(e, t, n) {
                var r, i, o = {}, a = 0;
                if (ae.isArray(t)) {
                    for (r = ot(e), i = t.length; i > a; a++) o[t[a]] = ae.css(e, t[a], !1, r);
                    return o;
                }
                return void 0 !== n ? ae.style(e, t, n) : ae.css(e, t);
            }, e, t, arguments.length > 1);
        },
        show: function() {
            return _(this, !0);
        },
        hide: function() {
            return _(this);
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                De(this) ? ae(this).show() : ae(this).hide();
            });
        }
    }), ae.Tween = M, (M.prototype = {
        constructor: M,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || ae.easing._default, this.options = t, this.start = this.now = this.cur(), 
            this.end = r, this.unit = o || (ae.cssNumber[n] ? "" : "px");
        },
        cur: function() {
            var e = M.propHooks[this.prop];
            return e && e.get ? e.get(this) : M.propHooks._default.get(this);
        },
        run: function(e) {
            var t, n = M.propHooks[this.prop];
            return this.options.duration ? this.pos = t = ae.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, 
            this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            n && n.set ? n.set(this) : M.propHooks._default.set(this), this;
        }
    }).init.prototype = M.prototype, (M.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = ae.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
            },
            set: function(e) {
                ae.fx.step[e.prop] ? ae.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[ae.cssProps[e.prop]] && !ae.cssHooks[e.prop] ? e.elem[e.prop] = e.now : ae.style(e.elem, e.prop, e.now + e.unit);
            }
        }
    }).scrollTop = M.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
    }, ae.easing = {
        linear: function(e) {
            return e;
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2;
        },
        _default: "swing"
    }, ae.fx = M.prototype.init, ae.fx.step = {};
    var gt, mt, yt = /^(?:toggle|show|hide)$/, xt = /queueHooks$/;
    ae.Animation = ae.extend(P, {
        tweeners: {
            "*": [ function(e, t) {
                var n = this.createTween(e, t);
                return f(n.elem, e, Ae.exec(t), n), n;
            } ]
        },
        tweener: function(e, t) {
            ae.isFunction(e) ? (t = e, e = [ "*" ]) : e = e.match(we);
            for (var n, r = 0, i = e.length; i > r; r++) n = e[r], P.tweeners[n] = P.tweeners[n] || [], P.tweeners[n].unshift(t);
        },
        prefilters: [ function(e, t, n) {
            var r, i, o, a, s, u, l, c = this, f = {}, d = e.style, p = e.nodeType && De(e), h = ae._data(e, "fxshow");
            n.queue || (null == (s = ae._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, u = s.empty.fire, s.empty.fire = function() {
                s.unqueued || u();
            }), s.unqueued++, c.always(function() {
                c.always(function() {
                    s.unqueued--, ae.queue(e, "fx").length || s.empty.fire();
                });
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [ d.overflow, d.overflowX, d.overflowY ], 
            "inline" === ("none" === (l = ae.css(e, "display")) ? ae._data(e, "olddisplay") || j(e.nodeName) : l) && "none" === ae.css(e, "float") && (oe.inlineBlockNeedsLayout && "inline" !== j(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")), 
            n.overflow && (d.overflow = "hidden", oe.shrinkWrapBlocks() || c.always(function() {
                d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2];
            }));
            for (r in t) if (i = t[r], yt.exec(i)) {
                if (delete t[r], o = o || "toggle" === i, i === (p ? "hide" : "show")) {
                    if ("show" !== i || !h || void 0 === h[r]) continue;
                    p = !0;
                }
                f[r] = h && h[r] || ae.style(e, r);
            } else l = void 0;
            if (ae.isEmptyObject(f)) "inline" === ("none" === l ? j(e.nodeName) : l) && (d.display = l); else {
                h ? "hidden" in h && (p = h.hidden) : h = ae._data(e, "fxshow", {}), o && (h.hidden = !p), p ? ae(e).show() : c.done(function() {
                    ae(e).hide();
                }), c.done(function() {
                    var t;
                    ae._removeData(e, "fxshow");
                    for (t in f) ae.style(e, t, f[t]);
                });
                for (r in f) a = B(p ? h[r] : 0, r, c), r in h || (h[r] = a.start, p && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0));
            }
        } ],
        prefilter: function(e, t) {
            t ? P.prefilters.unshift(e) : P.prefilters.push(e);
        }
    }), ae.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? ae.extend({}, e) : {
            complete: n || !n && t || ae.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !ae.isFunction(t) && t
        };
        return r.duration = ae.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ae.fx.speeds ? ae.fx.speeds[r.duration] : ae.fx.speeds._default, 
        null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            ae.isFunction(r.old) && r.old.call(this), r.queue && ae.dequeue(this, r.queue);
        }, r;
    }, ae.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(De).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r);
        },
        animate: function(e, t, n, r) {
            var i = ae.isEmptyObject(e), o = ae.speed(t, n, r), a = function() {
                var t = P(this, ae.extend({}, e), o);
                (i || ae._data(this, "finish")) && t.stop(!0);
            };
            return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop, t(n);
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), 
            this.each(function() {
                var t = !0, i = null != e && e + "queueHooks", o = ae.timers, a = ae._data(this);
                if (i) a[i] && a[i].stop && r(a[i]); else for (i in a) a[i] && a[i].stop && xt.test(i) && r(a[i]);
                for (i = o.length; i--; ) o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), 
                t = !1, o.splice(i, 1));
                !t && n || ae.dequeue(this, e);
            });
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"), this.each(function() {
                var t, n = ae._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = ae.timers, a = r ? r.length : 0;
                for (n.finish = !0, ae.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--; ) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), 
                o.splice(t, 1));
                for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish;
            });
        }
    }), ae.each([ "toggle", "show", "hide" ], function(e, t) {
        var n = ae.fn[t];
        ae.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(R(t, !0), e, r, i);
        };
    }), ae.each({
        slideDown: R("show"),
        slideUp: R("hide"),
        slideToggle: R("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        ae.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r);
        };
    }), ae.timers = [], ae.fx.tick = function() {
        var e, t = ae.timers, n = 0;
        for (gt = ae.now(); n < t.length; n++) (e = t[n])() || t[n] !== e || t.splice(n--, 1);
        t.length || ae.fx.stop(), gt = void 0;
    }, ae.fx.timer = function(e) {
        ae.timers.push(e), e() ? ae.fx.start() : ae.timers.pop();
    }, ae.fx.interval = 13, ae.fx.start = function() {
        mt || (mt = e.setInterval(ae.fx.tick, ae.fx.interval));
    }, ae.fx.stop = function() {
        e.clearInterval(mt), mt = null;
    }, ae.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, ae.fn.delay = function(t, n) {
        return t = ae.fx ? ae.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function() {
                e.clearTimeout(i);
            };
        });
    }, function() {
        var e, t = G.createElement("input"), n = G.createElement("div"), r = G.createElement("select"), i = r.appendChild(G.createElement("option"));
        (n = G.createElement("div")).setAttribute("className", "t"), n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
        e = n.getElementsByTagName("a")[0], t.setAttribute("type", "checkbox"), n.appendChild(t), (e = n.getElementsByTagName("a")[0]).style.cssText = "top:1px", 
        oe.getSetAttribute = "t" !== n.className, oe.style = /top/.test(e.getAttribute("style")), oe.hrefNormalized = "/a" === e.getAttribute("href"), 
        oe.checkOn = !!t.value, oe.optSelected = i.selected, oe.enctype = !!G.createElement("form").enctype, 
        r.disabled = !0, oe.optDisabled = !i.disabled, (t = G.createElement("input")).setAttribute("value", ""), 
        oe.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), oe.radioValue = "t" === t.value;
    }();
    var bt = /\r/g, wt = /[\x20\t\r\n\f]+/g;
    ae.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = ae.isFunction(e), this.each(function(n) {
                var i;
                1 === this.nodeType && (null == (i = r ? e.call(this, n, ae(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : ae.isArray(i) && (i = ae.map(i, function(e) {
                    return null == e ? "" : e + "";
                })), (t = ae.valHooks[this.type] || ae.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i));
            })) : i ? (t = ae.valHooks[i.type] || ae.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(bt, "") : null == n ? "" : n : void 0;
        }
    }), ae.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = ae.find.attr(e, "value");
                    return null != t ? t : ae.trim(ae.text(e)).replace(wt, " ");
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0; s > u; u++) if (((n = r[u]).selected || u === i) && (oe.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ae.nodeName(n.parentNode, "optgroup"))) {
                        if (t = ae(n).val(), o) return t;
                        a.push(t);
                    }
                    return a;
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = ae.makeArray(t), a = i.length; a--; ) if (r = i[a], ae.inArray(ae.valHooks.option.get(r), o) > -1) try {
                        r.selected = n = !0;
                    } catch (e) {
                        r.scrollHeight;
                    } else r.selected = !1;
                    return n || (e.selectedIndex = -1), i;
                }
            }
        }
    }), ae.each([ "radio", "checkbox" ], function() {
        ae.valHooks[this] = {
            set: function(e, t) {
                return ae.isArray(t) ? e.checked = ae.inArray(ae(e).val(), t) > -1 : void 0;
            }
        }, oe.checkOn || (ae.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value;
        });
    });
    var Tt, Et, Ct = ae.expr.attrHandle, kt = /^(?:checked|selected)$/i, Nt = oe.getSetAttribute, St = oe.input;
    ae.fn.extend({
        attr: function(e, t) {
            return Le(this, ae.attr, e, t, arguments.length > 1);
        },
        removeAttr: function(e) {
            return this.each(function() {
                ae.removeAttr(this, e);
            });
        }
    }), ae.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? ae.prop(e, t, n) : (1 === o && ae.isXMLDoc(e) || (t = t.toLowerCase(), 
            i = ae.attrHooks[t] || (ae.expr.match.bool.test(t) ? Et : Tt)), void 0 !== n ? null === n ? void ae.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), 
            n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = ae.find.attr(e, t)) ? void 0 : r);
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!oe.radioValue && "radio" === t && ae.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r, i = 0, o = t && t.match(we);
            if (o && 1 === e.nodeType) for (;n = o[i++]; ) r = ae.propFix[n] || n, ae.expr.match.bool.test(n) ? St && Nt || !kt.test(n) ? e[r] = !1 : e[ae.camelCase("default-" + n)] = e[r] = !1 : ae.attr(e, n, ""), 
            e.removeAttribute(Nt ? n : r);
        }
    }), Et = {
        set: function(e, t, n) {
            return !1 === t ? ae.removeAttr(e, n) : St && Nt || !kt.test(n) ? e.setAttribute(!Nt && ae.propFix[n] || n, n) : e[ae.camelCase("default-" + n)] = e[n] = !0, 
            n;
        }
    }, ae.each(ae.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = Ct[t] || ae.find.attr;
        St && Nt || !kt.test(t) ? Ct[t] = function(e, t, r) {
            var i, o;
            return r || (o = Ct[t], Ct[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, Ct[t] = o), i;
        } : Ct[t] = function(e, t, n) {
            return n ? void 0 : e[ae.camelCase("default-" + t)] ? t.toLowerCase() : null;
        };
    }), St && Nt || (ae.attrHooks.value = {
        set: function(e, t, n) {
            return ae.nodeName(e, "input") ? void (e.defaultValue = t) : Tt && Tt.set(e, t, n);
        }
    }), Nt || (Tt = {
        set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)), r.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0;
        }
    }, Ct.id = Ct.name = Ct.coords = function(e, t, n) {
        var r;
        return n ? void 0 : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null;
    }, ae.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0;
        },
        set: Tt.set
    }, ae.attrHooks.contenteditable = {
        set: function(e, t, n) {
            Tt.set(e, "" !== t && t, n);
        }
    }, ae.each([ "width", "height" ], function(e, t) {
        ae.attrHooks[t] = {
            set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0;
            }
        };
    })), oe.style || (ae.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0;
        },
        set: function(e, t) {
            return e.style.cssText = t + "";
        }
    });
    var At = /^(?:input|select|textarea|button|object)$/i, jt = /^(?:a|area)$/i;
    ae.fn.extend({
        prop: function(e, t) {
            return Le(this, ae.prop, e, t, arguments.length > 1);
        },
        removeProp: function(e) {
            return e = ae.propFix[e] || e, this.each(function() {
                try {
                    this[e] = void 0, delete this[e];
                } catch (e) {}
            });
        }
    }), ae.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && ae.isXMLDoc(e) || (t = ae.propFix[t] || t, i = ae.propHooks[t]), 
            void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = ae.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : At.test(e.nodeName) || jt.test(e.nodeName) && e.href ? 0 : -1;
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), oe.hrefNormalized || ae.each([ "href", "src" ], function(e, t) {
        ae.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4);
            }
        };
    }), oe.optSelected || (ae.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        }
    }), ae.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        ae.propFix[this.toLowerCase()] = this;
    }), oe.enctype || (ae.propFix.enctype = "encoding");
    var Dt = /[\t\r\n\f]/g;
    ae.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (ae.isFunction(e)) return this.each(function(t) {
                ae(this).addClass(e.call(this, t, I(this)));
            });
            if ("string" == typeof e && e) for (t = e.match(we) || []; n = this[u++]; ) if (i = I(n), r = 1 === n.nodeType && (" " + i + " ").replace(Dt, " ")) {
                for (a = 0; o = t[a++]; ) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                i !== (s = ae.trim(r)) && ae.attr(n, "class", s);
            }
            return this;
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, s, u = 0;
            if (ae.isFunction(e)) return this.each(function(t) {
                ae(this).removeClass(e.call(this, t, I(this)));
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e) for (t = e.match(we) || []; n = this[u++]; ) if (i = I(n), r = 1 === n.nodeType && (" " + i + " ").replace(Dt, " ")) {
                for (a = 0; o = t[a++]; ) for (;r.indexOf(" " + o + " ") > -1; ) r = r.replace(" " + o + " ", " ");
                i !== (s = ae.trim(r)) && ae.attr(n, "class", s);
            }
            return this;
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ae.isFunction(e) ? this.each(function(n) {
                ae(this).toggleClass(e.call(this, n, I(this), t), t);
            }) : this.each(function() {
                var t, r, i, o;
                if ("string" === n) for (r = 0, i = ae(this), o = e.match(we) || []; t = o[r++]; ) i.hasClass(t) ? i.removeClass(t) : i.addClass(t); else void 0 !== e && "boolean" !== n || ((t = I(this)) && ae._data(this, "__className__", t), 
                ae.attr(this, "class", t || !1 === e ? "" : ae._data(this, "__className__") || ""));
            });
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++]; ) if (1 === n.nodeType && (" " + I(n) + " ").replace(Dt, " ").indexOf(t) > -1) return !0;
            return !1;
        }
    }), ae.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        ae.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
        };
    }), ae.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e);
        }
    });
    var Lt = e.location, _t = ae.now(), Ht = /\?/, qt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    ae.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse) return e.JSON.parse(t + "");
        var n, r = null, i = ae.trim(t + "");
        return i && !ae.trim(i.replace(qt, function(e, t, i, o) {
            return n && t && (r = 0), 0 === r ? e : (n = i || t, r += !o - !i, "");
        })) ? Function("return " + i)() : ae.error("Invalid JSON: " + t);
    }, ae.parseXML = function(t) {
        var n, r;
        if (!t || "string" != typeof t) return null;
        try {
            e.DOMParser ? (r = new e.DOMParser(), n = r.parseFromString(t, "text/xml")) : (n = new e.ActiveXObject("Microsoft.XMLDOM"), 
            n.async = "false", n.loadXML(t));
        } catch (e) {
            n = void 0;
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || ae.error("Invalid XML: " + t), 
        n;
    };
    var Ot = /#.*$/, Mt = /([?&])_=[^&]*/, Ft = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Rt = /^(?:GET|HEAD)$/, Bt = /^\/\//, Pt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, It = {}, Wt = {}, zt = "*/".concat("*"), $t = Lt.href, Xt = Pt.exec($t.toLowerCase()) || [];
    ae.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: $t,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Xt[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": zt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ae.parseJSON,
                "text xml": ae.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? $($(e, ae.ajaxSettings), t) : $(ae.ajaxSettings, e);
        },
        ajaxPrefilter: W(It),
        ajaxTransport: W(Wt),
        ajax: function(t, n) {
            function r(t, n, r, i) {
                var o, f, y, x, w, E = n;
                2 !== b && (b = 2, u && e.clearTimeout(u), c = void 0, s = i || "", T.readyState = t > 0 ? 4 : 0, o = t >= 200 && 300 > t || 304 === t, 
                r && (x = function(e, t, n) {
                    for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0]; ) u.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i) for (a in s) if (s[a] && s[a].test(i)) {
                        u.unshift(a);
                        break;
                    }
                    if (u[0] in n) o = u[0]; else {
                        for (a in n) {
                            if (!u[0] || e.converters[a + " " + u[0]]) {
                                o = a;
                                break;
                            }
                            r || (r = a);
                        }
                        o = o || r;
                    }
                    return o ? (o !== u[0] && u.unshift(o), n[o]) : void 0;
                }(d, T, r)), x = function(e, t, n, r) {
                    var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
                    if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
                    for (o = c.shift(); o; ) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), 
                    u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
                        if (!(a = l[u + " " + o] || l["* " + o])) for (i in l) if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                            !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0], c.unshift(s[1]));
                            break;
                        }
                        if (!0 !== a) if (a && e.throws) t = a(t); else try {
                            t = a(t);
                        } catch (e) {
                            return {
                                state: "parsererror",
                                error: a ? e : "No conversion from " + u + " to " + o
                            };
                        }
                    }
                    return {
                        state: "success",
                        data: t
                    };
                }(d, x, T, o), o ? (d.ifModified && ((w = T.getResponseHeader("Last-Modified")) && (ae.lastModified[a] = w), 
                (w = T.getResponseHeader("etag")) && (ae.etag[a] = w)), 204 === t || "HEAD" === d.type ? E = "nocontent" : 304 === t ? E = "notmodified" : (E = x.state, 
                f = x.data, y = x.error, o = !y)) : (y = E, !t && E || (E = "error", 0 > t && (t = 0))), T.status = t, 
                T.statusText = (n || E) + "", o ? v.resolveWith(p, [ f, E, T ]) : v.rejectWith(p, [ T, E, y ]), T.statusCode(m), 
                m = void 0, l && h.trigger(o ? "ajaxSuccess" : "ajaxError", [ T, d, o ? f : y ]), g.fireWith(p, [ T, E ]), 
                l && (h.trigger("ajaxComplete", [ T, d ]), --ae.active || ae.event.trigger("ajaxStop")));
            }
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var i, o, a, s, u, l, c, f, d = ae.ajaxSetup({}, n), p = d.context || d, h = d.context && (p.nodeType || p.jquery) ? ae(p) : ae.event, v = ae.Deferred(), g = ae.Callbacks("once memory"), m = d.statusCode || {}, y = {}, x = {}, b = 0, w = "canceled", T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === b) {
                        if (!f) for (f = {}; t = Ft.exec(s); ) f[t[1].toLowerCase()] = t[2];
                        t = f[e.toLowerCase()];
                    }
                    return null == t ? null : t;
                },
                getAllResponseHeaders: function() {
                    return 2 === b ? s : null;
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return b || (e = x[n] = x[n] || e, y[e] = t), this;
                },
                overrideMimeType: function(e) {
                    return b || (d.mimeType = e), this;
                },
                statusCode: function(e) {
                    var t;
                    if (e) if (2 > b) for (t in e) m[t] = [ m[t], e[t] ]; else T.always(e[T.status]);
                    return this;
                },
                abort: function(e) {
                    var t = e || w;
                    return c && c.abort(t), r(0, t), this;
                }
            };
            if (v.promise(T).complete = g.add, T.success = T.done, T.error = T.fail, d.url = ((t || d.url || $t) + "").replace(Ot, "").replace(Bt, Xt[1] + "//"), 
            d.type = n.method || n.type || d.method || d.type, d.dataTypes = ae.trim(d.dataType || "*").toLowerCase().match(we) || [ "" ], 
            null == d.crossDomain && (i = Pt.exec(d.url.toLowerCase()), d.crossDomain = !(!i || i[1] === Xt[1] && i[2] === Xt[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Xt[3] || ("http:" === Xt[1] ? "80" : "443")))), 
            d.data && d.processData && "string" != typeof d.data && (d.data = ae.param(d.data, d.traditional)), 
            z(It, d, n, T), 2 === b) return T;
            (l = ae.event && d.global) && 0 == ae.active++ && ae.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), 
            d.hasContent = !Rt.test(d.type), a = d.url, d.hasContent || (d.data && (a = d.url += (Ht.test(a) ? "&" : "?") + d.data, 
            delete d.data), !1 === d.cache && (d.url = Mt.test(a) ? a.replace(Mt, "$1_=" + _t++) : a + (Ht.test(a) ? "&" : "?") + "_=" + _t++)), 
            d.ifModified && (ae.lastModified[a] && T.setRequestHeader("If-Modified-Since", ae.lastModified[a]), 
            ae.etag[a] && T.setRequestHeader("If-None-Match", ae.etag[a])), (d.data && d.hasContent && !1 !== d.contentType || n.contentType) && T.setRequestHeader("Content-Type", d.contentType), 
            T.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : d.accepts["*"]);
            for (o in d.headers) T.setRequestHeader(o, d.headers[o]);
            if (d.beforeSend && (!1 === d.beforeSend.call(p, T, d) || 2 === b)) return T.abort();
            w = "abort";
            for (o in {
                success: 1,
                error: 1,
                complete: 1
            }) T[o](d[o]);
            if (c = z(Wt, d, n, T)) {
                if (T.readyState = 1, l && h.trigger("ajaxSend", [ T, d ]), 2 === b) return T;
                d.async && d.timeout > 0 && (u = e.setTimeout(function() {
                    T.abort("timeout");
                }, d.timeout));
                try {
                    b = 1, c.send(y, r);
                } catch (e) {
                    if (!(2 > b)) throw e;
                    r(-1, e);
                }
            } else r(-1, "No Transport");
            return T;
        },
        getJSON: function(e, t, n) {
            return ae.get(e, t, n, "json");
        },
        getScript: function(e, t) {
            return ae.get(e, void 0, t, "script");
        }
    }), ae.each([ "get", "post" ], function(e, t) {
        ae[t] = function(e, n, r, i) {
            return ae.isFunction(n) && (i = i || r, r = n, n = void 0), ae.ajax(ae.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, ae.isPlainObject(e) && e));
        };
    }), ae._evalUrl = function(e) {
        return ae.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        });
    }, ae.fn.extend({
        wrapAll: function(e) {
            if (ae.isFunction(e)) return this.each(function(t) {
                ae(this).wrapAll(e.call(this, t));
            });
            if (this[0]) {
                var t = ae(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; ) e = e.firstChild;
                    return e;
                }).append(this);
            }
            return this;
        },
        wrapInner: function(e) {
            return ae.isFunction(e) ? this.each(function(t) {
                ae(this).wrapInner(e.call(this, t));
            }) : this.each(function() {
                var t = ae(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
            });
        },
        wrap: function(e) {
            var t = ae.isFunction(e);
            return this.each(function(n) {
                ae(this).wrapAll(t ? e.call(this, n) : e);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                ae.nodeName(this, "body") || ae(this).replaceWith(this.childNodes);
            }).end();
        }
    }), ae.expr.filters.hidden = function(e) {
        return oe.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : function(e) {
            for (;e && 1 === e.nodeType; ) {
                if ("none" === X(e) || "hidden" === e.type) return !0;
                e = e.parentNode;
            }
            return !1;
        }(e);
    }, ae.expr.filters.visible = function(e) {
        return !ae.expr.filters.hidden(e);
    };
    var Ut = /%20/g, Vt = /\[\]$/, Yt = /\r?\n/g, Jt = /^(?:submit|button|image|reset|file)$/i, Kt = /^(?:input|select|textarea|keygen)/i;
    ae.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            t = ae.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
        };
        if (void 0 === t && (t = ae.ajaxSettings && ae.ajaxSettings.traditional), ae.isArray(e) || e.jquery && !ae.isPlainObject(e)) ae.each(e, function() {
            i(this.name, this.value);
        }); else for (n in e) U(n, e[n], t, i);
        return r.join("&").replace(Ut, "+");
    }, ae.fn.extend({
        serialize: function() {
            return ae.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var e = ae.prop(this, "elements");
                return e ? ae.makeArray(e) : this;
            }).filter(function() {
                var e = this.type;
                return this.name && !ae(this).is(":disabled") && Kt.test(this.nodeName) && !Jt.test(e) && (this.checked || !_e.test(e));
            }).map(function(e, t) {
                var n = ae(this).val();
                return null == n ? null : ae.isArray(n) ? ae.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Yt, "\r\n")
                    };
                }) : {
                    name: t.name,
                    value: n.replace(Yt, "\r\n")
                };
            }).get();
        }
    }), ae.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return this.isLocal ? Y() : G.documentMode > 8 ? V() : /^(get|post|head|put|delete|options)$/i.test(this.type) && V() || Y();
    } : V;
    var Gt = 0, Qt = {}, Zt = ae.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in Qt) Qt[e](void 0, !0);
    }), oe.cors = !!Zt && "withCredentials" in Zt, (Zt = oe.ajax = !!Zt) && ae.ajaxTransport(function(t) {
        if (!t.crossDomain || oe.cors) {
            var n;
            return {
                send: function(r, i) {
                    var o, a = t.xhr(), s = ++Gt;
                    if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (o in t.xhrFields) a[o] = t.xhrFields[o];
                    t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (o in r) void 0 !== r[o] && a.setRequestHeader(o, r[o] + "");
                    a.send(t.hasContent && t.data || null), n = function(e, r) {
                        var o, u, l;
                        if (n && (r || 4 === a.readyState)) if (delete Qt[s], n = void 0, a.onreadystatechange = ae.noop, r) 4 !== a.readyState && a.abort(); else {
                            l = {}, o = a.status, "string" == typeof a.responseText && (l.text = a.responseText);
                            try {
                                u = a.statusText;
                            } catch (e) {
                                u = "";
                            }
                            o || !t.isLocal || t.crossDomain ? 1223 === o && (o = 204) : o = l.text ? 200 : 404;
                        }
                        l && i(o, u, l, a.getAllResponseHeaders());
                    }, t.async ? 4 === a.readyState ? e.setTimeout(n) : a.onreadystatechange = Qt[s] = n : n();
                },
                abort: function() {
                    n && n(void 0, !0);
                }
            };
        }
    }), ae.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return ae.globalEval(e), e;
            }
        }
    }), ae.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1);
    }), ae.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n = G.head || ae("head")[0] || G.documentElement;
            return {
                send: function(r, i) {
                    (t = G.createElement("script")).async = !0, e.scriptCharset && (t.charset = e.scriptCharset), t.src = e.url, 
                    t.onload = t.onreadystatechange = function(e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null, 
                        t.parentNode && t.parentNode.removeChild(t), t = null, n || i(200, "success"));
                    }, n.insertBefore(t, n.firstChild);
                },
                abort: function() {
                    t && t.onload(void 0, !0);
                }
            };
        }
    });
    var en = [], tn = /(=)\?(?=&|$)|\?\?/;
    ae.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = en.pop() || ae.expando + "_" + _t++;
            return this[e] = !0, e;
        }
    }), ae.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, a, s = !1 !== t.jsonp && (tn.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && tn.test(t.data) && "data");
        return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = ae.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, 
        s ? t[s] = t[s].replace(tn, "$1" + i) : !1 !== t.jsonp && (t.url += (Ht.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), 
        t.converters["script json"] = function() {
            return a || ae.error(i + " was not called"), a[0];
        }, t.dataTypes[0] = "json", o = e[i], e[i] = function() {
            a = arguments;
        }, r.always(function() {
            void 0 === o ? ae(e).removeProp(i) : e[i] = o, t[i] && (t.jsonpCallback = n.jsonpCallback, en.push(i)), 
            a && ae.isFunction(o) && o(a[0]), a = o = void 0;
        }), "script") : void 0;
    }), ae.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || G;
        var r = ve.exec(e), i = !n && [];
        return r ? [ t.createElement(r[1]) ] : (r = g([ e ], t, i), i && i.length && ae(i).remove(), ae.merge([], r.childNodes));
    };
    var nn = ae.fn.load;
    ae.fn.load = function(e, t, n) {
        if ("string" != typeof e && nn) return nn.apply(this, arguments);
        var r, i, o, a = this, s = e.indexOf(" ");
        return s > -1 && (r = ae.trim(e.slice(s, e.length)), e = e.slice(0, s)), ae.isFunction(t) ? (n = t, 
        t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && ae.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? ae("<div>").append(ae.parseHTML(e)).find(r) : e);
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [ e.responseText, t, e ]);
            });
        }), this;
    }, ae.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(e, t) {
        ae.fn[t] = function(e) {
            return this.on(t, e);
        };
    }), ae.expr.filters.animated = function(e) {
        return ae.grep(ae.timers, function(t) {
            return e === t.elem;
        }).length;
    }, ae.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l = ae.css(e, "position"), c = ae(e), f = {};
            "static" === l && (e.style.position = "relative"), s = c.offset(), o = ae.css(e, "top"), u = ae.css(e, "left"), 
            ("absolute" === l || "fixed" === l) && ae.inArray("auto", [ o, u ]) > -1 ? (r = c.position(), a = r.top, 
            i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), ae.isFunction(t) && (t = t.call(e, n, ae.extend({}, s))), 
            null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f);
        }
    }, ae.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                ae.offset.setOffset(this, e, t);
            });
            var t, n, r = {
                top: 0,
                left: 0
            }, i = this[0], o = i && i.ownerDocument;
            return o ? (t = o.documentElement, ae.contains(t, i) ? (void 0 !== i.getBoundingClientRect && (r = i.getBoundingClientRect()), 
            n = J(o), {
                top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
            }) : r) : void 0;
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                    top: 0,
                    left: 0
                }, r = this[0];
                return "fixed" === ae.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), 
                t = this.offset(), ae.nodeName(e[0], "html") || (n = e.offset()), n.top += ae.css(e[0], "borderTopWidth", !0), 
                n.left += ae.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - ae.css(r, "marginTop", !0),
                    left: t.left - n.left - ae.css(r, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && !ae.nodeName(e, "html") && "static" === ae.css(e, "position"); ) e = e.offsetParent;
                return e || it;
            });
        }
    }), ae.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = /Y/.test(t);
        ae.fn[e] = function(r) {
            return Le(this, function(e, r, i) {
                var o = J(e);
                return void 0 === i ? o ? t in o ? o[t] : o.document.documentElement[r] : e[r] : void (o ? o.scrollTo(n ? ae(o).scrollLeft() : i, n ? i : ae(o).scrollTop()) : e[r] = i);
            }, e, r, arguments.length, null);
        };
    }), ae.each([ "top", "left" ], function(e, t) {
        ae.cssHooks[t] = D(oe.pixelPosition, function(e, n) {
            return n ? (n = at(e, t), nt.test(n) ? ae(e).position()[t] + "px" : n) : void 0;
        });
    }), ae.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        ae.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            ae.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r), a = n || (!0 === r || !0 === i ? "margin" : "border");
                return Le(this, function(t, n, r) {
                    var i;
                    return ae.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, 
                    Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? ae.css(t, n, a) : ae.style(t, n, r, a);
                }, t, o ? r : void 0, o, null);
            };
        });
    }), ae.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n);
        },
        unbind: function(e, t) {
            return this.off(e, null, t);
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r);
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
        }
    }), ae.fn.size = function() {
        return this.length;
    }, ae.fn.andSelf = ae.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return ae;
    });
    var rn = e.jQuery, on = e.$;
    return ae.noConflict = function(t) {
        return e.$ === ae && (e.$ = on), t && e.jQuery === ae && (e.jQuery = rn), ae;
    }, t || (e.jQuery = e.$ = ae), ae;
}), //     Underscore may be freely distributed under the MIT license.
function() {
    function e(e) {
        return function(t, n, r, i) {
            n = x(n, i, 4);
            var o = !N(t) && y.keys(t), a = (o || t).length, s = e > 0 ? 0 : a - 1;
            return arguments.length < 3 && (r = t[o ? o[s] : s], s += e), function(t, n, r, i, o, a) {
                for (;o >= 0 && o < a; o += e) {
                    var s = i ? i[o] : o;
                    r = n(r, t[s], s, t);
                }
                return r;
            }(t, n, r, o, s, a);
        };
    }
    function t(e) {
        return function(t, n, r) {
            n = b(n, r);
            for (var i = k(t), o = e > 0 ? 0 : i - 1; o >= 0 && o < i; o += e) if (n(t[o], o, t)) return o;
            return -1;
        };
    }
    function n(e, t, n) {
        return function(r, i, o) {
            var a = 0, s = k(r);
            if ("number" == typeof o) e > 0 ? a = o >= 0 ? o : Math.max(o + s, a) : s = o >= 0 ? Math.min(o + 1, s) : o + s + 1; else if (n && o && s) return o = n(r, i), 
            r[o] === i ? o : -1;
            if (i != i) return (o = t(c.call(r, a, s), y.isNaN)) >= 0 ? o + a : -1;
            for (o = e > 0 ? a : s - 1; o >= 0 && o < s; o += e) if (r[o] === i) return o;
            return -1;
        };
    }
    function r(e, t) {
        var n = L.length, r = e.constructor, i = y.isFunction(r) && r.prototype || s, o = "constructor";
        for (y.has(e, o) && !y.contains(t, o) && t.push(o); n--; ) (o = L[n]) in e && e[o] !== i[o] && !y.contains(t, o) && t.push(o);
    }
    var i = this, o = i._, a = Array.prototype, s = Object.prototype, u = Function.prototype, l = a.push, c = a.slice, f = s.toString, d = s.hasOwnProperty, p = Array.isArray, h = Object.keys, v = u.bind, g = Object.create, m = function() {}, y = function(e) {
        return e instanceof y ? e : this instanceof y ? void (this._wrapped = e) : new y(e);
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = y), 
    exports._ = y) : i._ = y, y.VERSION = "1.8.3";
    var x = function(e, t, n) {
        if (void 0 === t) return e;
        switch (null == n ? 3 : n) {
          case 1:
            return function(n) {
                return e.call(t, n);
            };

          case 2:
            return function(n, r) {
                return e.call(t, n, r);
            };

          case 3:
            return function(n, r, i) {
                return e.call(t, n, r, i);
            };

          case 4:
            return function(n, r, i, o) {
                return e.call(t, n, r, i, o);
            };
        }
        return function() {
            return e.apply(t, arguments);
        };
    }, b = function(e, t, n) {
        return null == e ? y.identity : y.isFunction(e) ? x(e, t, n) : y.isObject(e) ? y.matcher(e) : y.property(e);
    };
    y.iteratee = function(e, t) {
        return b(e, t, 1 / 0);
    };
    var w = function(e, t) {
        return function(n) {
            var r = arguments.length;
            if (r < 2 || null == n) return n;
            for (var i = 1; i < r; i++) for (var o = arguments[i], a = e(o), s = a.length, u = 0; u < s; u++) {
                var l = a[u];
                t && void 0 !== n[l] || (n[l] = o[l]);
            }
            return n;
        };
    }, T = function(e) {
        if (!y.isObject(e)) return {};
        if (g) return g(e);
        m.prototype = e;
        var t = new m();
        return m.prototype = null, t;
    }, E = function(e) {
        return function(t) {
            return null == t ? void 0 : t[e];
        };
    }, C = Math.pow(2, 53) - 1, k = E("length"), N = function(e) {
        var t = k(e);
        return "number" == typeof t && t >= 0 && t <= C;
    };
    y.each = y.forEach = function(e, t, n) {
        t = x(t, n);
        var r, i;
        if (N(e)) for (r = 0, i = e.length; r < i; r++) t(e[r], r, e); else {
            var o = y.keys(e);
            for (r = 0, i = o.length; r < i; r++) t(e[o[r]], o[r], e);
        }
        return e;
    }, y.map = y.collect = function(e, t, n) {
        t = b(t, n);
        for (var r = !N(e) && y.keys(e), i = (r || e).length, o = Array(i), a = 0; a < i; a++) {
            var s = r ? r[a] : a;
            o[a] = t(e[s], s, e);
        }
        return o;
    }, y.reduce = y.foldl = y.inject = e(1), y.reduceRight = y.foldr = e(-1), y.find = y.detect = function(e, t, n) {
        var r;
        if (void 0 !== (r = N(e) ? y.findIndex(e, t, n) : y.findKey(e, t, n)) && -1 !== r) return e[r];
    }, y.filter = y.select = function(e, t, n) {
        var r = [];
        return t = b(t, n), y.each(e, function(e, n, i) {
            t(e, n, i) && r.push(e);
        }), r;
    }, y.reject = function(e, t, n) {
        return y.filter(e, y.negate(b(t)), n);
    }, y.every = y.all = function(e, t, n) {
        t = b(t, n);
        for (var r = !N(e) && y.keys(e), i = (r || e).length, o = 0; o < i; o++) {
            var a = r ? r[o] : o;
            if (!t(e[a], a, e)) return !1;
        }
        return !0;
    }, y.some = y.any = function(e, t, n) {
        t = b(t, n);
        for (var r = !N(e) && y.keys(e), i = (r || e).length, o = 0; o < i; o++) {
            var a = r ? r[o] : o;
            if (t(e[a], a, e)) return !0;
        }
        return !1;
    }, y.contains = y.includes = y.include = function(e, t, n, r) {
        return N(e) || (e = y.values(e)), ("number" != typeof n || r) && (n = 0), y.indexOf(e, t, n) >= 0;
    }, y.invoke = function(e, t) {
        var n = c.call(arguments, 2), r = y.isFunction(t);
        return y.map(e, function(e) {
            var i = r ? t : e[t];
            return null == i ? i : i.apply(e, n);
        });
    }, y.pluck = function(e, t) {
        return y.map(e, y.property(t));
    }, y.where = function(e, t) {
        return y.filter(e, y.matcher(t));
    }, y.findWhere = function(e, t) {
        return y.find(e, y.matcher(t));
    }, y.max = function(e, t, n) {
        var r, i, o = -1 / 0, a = -1 / 0;
        if (null == t && null != e) for (var s = 0, u = (e = N(e) ? e : y.values(e)).length; s < u; s++) (r = e[s]) > o && (o = r); else t = b(t, n), 
        y.each(e, function(e, n, r) {
            ((i = t(e, n, r)) > a || i === -1 / 0 && o === -1 / 0) && (o = e, a = i);
        });
        return o;
    }, y.min = function(e, t, n) {
        var r, i, o = 1 / 0, a = 1 / 0;
        if (null == t && null != e) for (var s = 0, u = (e = N(e) ? e : y.values(e)).length; s < u; s++) (r = e[s]) < o && (o = r); else t = b(t, n), 
        y.each(e, function(e, n, r) {
            ((i = t(e, n, r)) < a || i === 1 / 0 && o === 1 / 0) && (o = e, a = i);
        });
        return o;
    }, y.shuffle = function(e) {
        for (var t, n = N(e) ? e : y.values(e), r = n.length, i = Array(r), o = 0; o < r; o++) (t = y.random(0, o)) !== o && (i[o] = i[t]), 
        i[t] = n[o];
        return i;
    }, y.sample = function(e, t, n) {
        return null == t || n ? (N(e) || (e = y.values(e)), e[y.random(e.length - 1)]) : y.shuffle(e).slice(0, Math.max(0, t));
    }, y.sortBy = function(e, t, n) {
        return t = b(t, n), y.pluck(y.map(e, function(e, n, r) {
            return {
                value: e,
                index: n,
                criteria: t(e, n, r)
            };
        }).sort(function(e, t) {
            var n = e.criteria, r = t.criteria;
            if (n !== r) {
                if (n > r || void 0 === n) return 1;
                if (n < r || void 0 === r) return -1;
            }
            return e.index - t.index;
        }), "value");
    };
    var S = function(e) {
        return function(t, n, r) {
            var i = {};
            return n = b(n, r), y.each(t, function(r, o) {
                var a = n(r, o, t);
                e(i, r, a);
            }), i;
        };
    };
    y.groupBy = S(function(e, t, n) {
        y.has(e, n) ? e[n].push(t) : e[n] = [ t ];
    }), y.indexBy = S(function(e, t, n) {
        e[n] = t;
    }), y.countBy = S(function(e, t, n) {
        y.has(e, n) ? e[n]++ : e[n] = 1;
    }), y.toArray = function(e) {
        return e ? y.isArray(e) ? c.call(e) : N(e) ? y.map(e, y.identity) : y.values(e) : [];
    }, y.size = function(e) {
        return null == e ? 0 : N(e) ? e.length : y.keys(e).length;
    }, y.partition = function(e, t, n) {
        t = b(t, n);
        var r = [], i = [];
        return y.each(e, function(e, n, o) {
            (t(e, n, o) ? r : i).push(e);
        }), [ r, i ];
    }, y.first = y.head = y.take = function(e, t, n) {
        if (null != e) return null == t || n ? e[0] : y.initial(e, e.length - t);
    }, y.initial = function(e, t, n) {
        return c.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)));
    }, y.last = function(e, t, n) {
        if (null != e) return null == t || n ? e[e.length - 1] : y.rest(e, Math.max(0, e.length - t));
    }, y.rest = y.tail = y.drop = function(e, t, n) {
        return c.call(e, null == t || n ? 1 : t);
    }, y.compact = function(e) {
        return y.filter(e, y.identity);
    };
    var A = function(e, t, n, r) {
        for (var i = [], o = 0, a = r || 0, s = k(e); a < s; a++) {
            var u = e[a];
            if (N(u) && (y.isArray(u) || y.isArguments(u))) {
                t || (u = A(u, t, n));
                var l = 0, c = u.length;
                for (i.length += c; l < c; ) i[o++] = u[l++];
            } else n || (i[o++] = u);
        }
        return i;
    };
    y.flatten = function(e, t) {
        return A(e, t, !1);
    }, y.without = function(e) {
        return y.difference(e, c.call(arguments, 1));
    }, y.uniq = y.unique = function(e, t, n, r) {
        y.isBoolean(t) || (r = n, n = t, t = !1), null != n && (n = b(n, r));
        for (var i = [], o = [], a = 0, s = k(e); a < s; a++) {
            var u = e[a], l = n ? n(u, a, e) : u;
            t ? (a && o === l || i.push(u), o = l) : n ? y.contains(o, l) || (o.push(l), i.push(u)) : y.contains(i, u) || i.push(u);
        }
        return i;
    }, y.union = function() {
        return y.uniq(A(arguments, !0, !0));
    }, y.intersection = function(e) {
        for (var t = [], n = arguments.length, r = 0, i = k(e); r < i; r++) {
            var o = e[r];
            if (!y.contains(t, o)) {
                for (var a = 1; a < n && y.contains(arguments[a], o); a++) ;
                a === n && t.push(o);
            }
        }
        return t;
    }, y.difference = function(e) {
        var t = A(arguments, !0, !0, 1);
        return y.filter(e, function(e) {
            return !y.contains(t, e);
        });
    }, y.zip = function() {
        return y.unzip(arguments);
    }, y.unzip = function(e) {
        for (var t = e && y.max(e, k).length || 0, n = Array(t), r = 0; r < t; r++) n[r] = y.pluck(e, r);
        return n;
    }, y.object = function(e, t) {
        for (var n = {}, r = 0, i = k(e); r < i; r++) t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
        return n;
    }, y.findIndex = t(1), y.findLastIndex = t(-1), y.sortedIndex = function(e, t, n, r) {
        for (var i = (n = b(n, r, 1))(t), o = 0, a = k(e); o < a; ) {
            var s = Math.floor((o + a) / 2);
            n(e[s]) < i ? o = s + 1 : a = s;
        }
        return o;
    }, y.indexOf = n(1, y.findIndex, y.sortedIndex), y.lastIndexOf = n(-1, y.findLastIndex), y.range = function(e, t, n) {
        null == t && (t = e || 0, e = 0), n = n || 1;
        for (var r = Math.max(Math.ceil((t - e) / n), 0), i = Array(r), o = 0; o < r; o++, e += n) i[o] = e;
        return i;
    };
    var j = function(e, t, n, r, i) {
        if (!(r instanceof t)) return e.apply(n, i);
        var o = T(e.prototype), a = e.apply(o, i);
        return y.isObject(a) ? a : o;
    };
    y.bind = function(e, t) {
        if (v && e.bind === v) return v.apply(e, c.call(arguments, 1));
        if (!y.isFunction(e)) throw new TypeError("Bind must be called on a function");
        var n = c.call(arguments, 2), r = function() {
            return j(e, r, t, this, n.concat(c.call(arguments)));
        };
        return r;
    }, y.partial = function(e) {
        var t = c.call(arguments, 1), n = function() {
            for (var r = 0, i = t.length, o = Array(i), a = 0; a < i; a++) o[a] = t[a] === y ? arguments[r++] : t[a];
            for (;r < arguments.length; ) o.push(arguments[r++]);
            return j(e, n, this, this, o);
        };
        return n;
    }, y.bindAll = function(e) {
        var t, n, r = arguments.length;
        if (r <= 1) throw new Error("bindAll must be passed function names");
        for (t = 1; t < r; t++) e[n = arguments[t]] = y.bind(e[n], e);
        return e;
    }, y.memoize = function(e, t) {
        var n = function(r) {
            var i = n.cache, o = "" + (t ? t.apply(this, arguments) : r);
            return y.has(i, o) || (i[o] = e.apply(this, arguments)), i[o];
        };
        return n.cache = {}, n;
    }, y.delay = function(e, t) {
        var n = c.call(arguments, 2);
        return setTimeout(function() {
            return e.apply(null, n);
        }, t);
    }, y.defer = y.partial(y.delay, y, 1), y.throttle = function(e, t, n) {
        var r, i, o, a = null, s = 0;
        n || (n = {});
        var u = function() {
            s = !1 === n.leading ? 0 : y.now(), a = null, o = e.apply(r, i), a || (r = i = null);
        };
        return function() {
            var l = y.now();
            s || !1 !== n.leading || (s = l);
            var c = t - (l - s);
            return r = this, i = arguments, c <= 0 || c > t ? (a && (clearTimeout(a), a = null), s = l, o = e.apply(r, i), 
            a || (r = i = null)) : a || !1 === n.trailing || (a = setTimeout(u, c)), o;
        };
    }, y.debounce = function(e, t, n) {
        var r, i, o, a, s, u = function() {
            var l = y.now() - a;
            l < t && l >= 0 ? r = setTimeout(u, t - l) : (r = null, n || (s = e.apply(o, i), r || (o = i = null)));
        };
        return function() {
            o = this, i = arguments, a = y.now();
            var l = n && !r;
            return r || (r = setTimeout(u, t)), l && (s = e.apply(o, i), o = i = null), s;
        };
    }, y.wrap = function(e, t) {
        return y.partial(t, e);
    }, y.negate = function(e) {
        return function() {
            return !e.apply(this, arguments);
        };
    }, y.compose = function() {
        var e = arguments, t = e.length - 1;
        return function() {
            for (var n = t, r = e[t].apply(this, arguments); n--; ) r = e[n].call(this, r);
            return r;
        };
    }, y.after = function(e, t) {
        return function() {
            if (--e < 1) return t.apply(this, arguments);
        };
    }, y.before = function(e, t) {
        var n;
        return function() {
            return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = null), n;
        };
    }, y.once = y.partial(y.before, 2);
    var D = !{
        toString: null
    }.propertyIsEnumerable("toString"), L = [ "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString" ];
    y.keys = function(e) {
        if (!y.isObject(e)) return [];
        if (h) return h(e);
        var t = [];
        for (var n in e) y.has(e, n) && t.push(n);
        return D && r(e, t), t;
    }, y.allKeys = function(e) {
        if (!y.isObject(e)) return [];
        var t = [];
        for (var n in e) t.push(n);
        return D && r(e, t), t;
    }, y.values = function(e) {
        for (var t = y.keys(e), n = t.length, r = Array(n), i = 0; i < n; i++) r[i] = e[t[i]];
        return r;
    }, y.mapObject = function(e, t, n) {
        t = b(t, n);
        for (var r, i = y.keys(e), o = i.length, a = {}, s = 0; s < o; s++) a[r = i[s]] = t(e[r], r, e);
        return a;
    }, y.pairs = function(e) {
        for (var t = y.keys(e), n = t.length, r = Array(n), i = 0; i < n; i++) r[i] = [ t[i], e[t[i]] ];
        return r;
    }, y.invert = function(e) {
        for (var t = {}, n = y.keys(e), r = 0, i = n.length; r < i; r++) t[e[n[r]]] = n[r];
        return t;
    }, y.functions = y.methods = function(e) {
        var t = [];
        for (var n in e) y.isFunction(e[n]) && t.push(n);
        return t.sort();
    }, y.extend = w(y.allKeys), y.extendOwn = y.assign = w(y.keys), y.findKey = function(e, t, n) {
        t = b(t, n);
        for (var r, i = y.keys(e), o = 0, a = i.length; o < a; o++) if (r = i[o], t(e[r], r, e)) return r;
    }, y.pick = function(e, t, n) {
        var r, i, o = {}, a = e;
        if (null == a) return o;
        y.isFunction(t) ? (i = y.allKeys(a), r = x(t, n)) : (i = A(arguments, !1, !1, 1), r = function(e, t, n) {
            return t in n;
        }, a = Object(a));
        for (var s = 0, u = i.length; s < u; s++) {
            var l = i[s], c = a[l];
            r(c, l, a) && (o[l] = c);
        }
        return o;
    }, y.omit = function(e, t, n) {
        if (y.isFunction(t)) t = y.negate(t); else {
            var r = y.map(A(arguments, !1, !1, 1), String);
            t = function(e, t) {
                return !y.contains(r, t);
            };
        }
        return y.pick(e, t, n);
    }, y.defaults = w(y.allKeys, !0), y.create = function(e, t) {
        var n = T(e);
        return t && y.extendOwn(n, t), n;
    }, y.clone = function(e) {
        return y.isObject(e) ? y.isArray(e) ? e.slice() : y.extend({}, e) : e;
    }, y.tap = function(e, t) {
        return t(e), e;
    }, y.isMatch = function(e, t) {
        var n = y.keys(t), r = n.length;
        if (null == e) return !r;
        for (var i = Object(e), o = 0; o < r; o++) {
            var a = n[o];
            if (t[a] !== i[a] || !(a in i)) return !1;
        }
        return !0;
    };
    var _ = function(e, t, n, r) {
        if (e === t) return 0 !== e || 1 / e == 1 / t;
        if (null == e || null == t) return e === t;
        e instanceof y && (e = e._wrapped), t instanceof y && (t = t._wrapped);
        var i = f.call(e);
        if (i !== f.call(t)) return !1;
        switch (i) {
          case "[object RegExp]":
          case "[object String]":
            return "" + e == "" + t;

          case "[object Number]":
            return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;

          case "[object Date]":
          case "[object Boolean]":
            return +e == +t;
        }
        var o = "[object Array]" === i;
        if (!o) {
            if ("object" != typeof e || "object" != typeof t) return !1;
            var a = e.constructor, s = t.constructor;
            if (a !== s && !(y.isFunction(a) && a instanceof a && y.isFunction(s) && s instanceof s) && "constructor" in e && "constructor" in t) return !1;
        }
        n = n || [], r = r || [];
        for (var u = n.length; u--; ) if (n[u] === e) return r[u] === t;
        if (n.push(e), r.push(t), o) {
            if ((u = e.length) !== t.length) return !1;
            for (;u--; ) if (!_(e[u], t[u], n, r)) return !1;
        } else {
            var l, c = y.keys(e);
            if (u = c.length, y.keys(t).length !== u) return !1;
            for (;u--; ) if (l = c[u], !y.has(t, l) || !_(e[l], t[l], n, r)) return !1;
        }
        return n.pop(), r.pop(), !0;
    };
    y.isEqual = function(e, t) {
        return _(e, t);
    }, y.isEmpty = function(e) {
        return null == e || (N(e) && (y.isArray(e) || y.isString(e) || y.isArguments(e)) ? 0 === e.length : 0 === y.keys(e).length);
    }, y.isElement = function(e) {
        return !(!e || 1 !== e.nodeType);
    }, y.isArray = p || function(e) {
        return "[object Array]" === f.call(e);
    }, y.isObject = function(e) {
        var t = typeof e;
        return "function" === t || "object" === t && !!e;
    }, y.each([ "Arguments", "Function", "String", "Number", "Date", "RegExp", "Error" ], function(e) {
        y["is" + e] = function(t) {
            return f.call(t) === "[object " + e + "]";
        };
    }), y.isArguments(arguments) || (y.isArguments = function(e) {
        return y.has(e, "callee");
    }), "function" != typeof /./ && "object" != typeof Int8Array && (y.isFunction = function(e) {
        return "function" == typeof e || !1;
    }), y.isFinite = function(e) {
        return isFinite(e) && !isNaN(parseFloat(e));
    }, y.isNaN = function(e) {
        return y.isNumber(e) && e !== +e;
    }, y.isBoolean = function(e) {
        return !0 === e || !1 === e || "[object Boolean]" === f.call(e);
    }, y.isNull = function(e) {
        return null === e;
    }, y.isUndefined = function(e) {
        return void 0 === e;
    }, y.has = function(e, t) {
        return null != e && d.call(e, t);
    }, y.noConflict = function() {
        return i._ = o, this;
    }, y.identity = function(e) {
        return e;
    }, y.constant = function(e) {
        return function() {
            return e;
        };
    }, y.noop = function() {}, y.property = E, y.propertyOf = function(e) {
        return null == e ? function() {} : function(t) {
            return e[t];
        };
    }, y.matcher = y.matches = function(e) {
        return e = y.extendOwn({}, e), function(t) {
            return y.isMatch(t, e);
        };
    }, y.times = function(e, t, n) {
        var r = Array(Math.max(0, e));
        t = x(t, n, 1);
        for (var i = 0; i < e; i++) r[i] = t(i);
        return r;
    }, y.random = function(e, t) {
        return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1));
    }, y.now = Date.now || function() {
        return new Date().getTime();
    };
    var H = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    }, q = y.invert(H), O = function(e) {
        var t = function(t) {
            return e[t];
        }, n = "(?:" + y.keys(e).join("|") + ")", r = RegExp(n), i = RegExp(n, "g");
        return function(e) {
            return e = null == e ? "" : "" + e, r.test(e) ? e.replace(i, t) : e;
        };
    };
    y.escape = O(H), y.unescape = O(q), y.result = function(e, t, n) {
        var r = null == e ? void 0 : e[t];
        return void 0 === r && (r = n), y.isFunction(r) ? r.call(e) : r;
    };
    var M = 0;
    y.uniqueId = function(e) {
        var t = ++M + "";
        return e ? e + t : t;
    }, y.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var F = /(.)^/, R = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }, B = /\\|'|\r|\n|\u2028|\u2029/g, P = function(e) {
        return "\\" + R[e];
    };
    y.template = function(e, t, n) {
        !t && n && (t = n), t = y.defaults({}, t, y.templateSettings);
        var r = RegExp([ (t.escape || F).source, (t.interpolate || F).source, (t.evaluate || F).source ].join("|") + "|$", "g"), i = 0, o = "__p+='";
        e.replace(r, function(t, n, r, a, s) {
            return o += e.slice(i, s).replace(B, P), i = s + t.length, n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? o += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : a && (o += "';\n" + a + "\n__p+='"), 
            t;
        }), o += "';\n", t.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
        try {
            var a = new Function(t.variable || "obj", "_", o);
        } catch (e) {
            throw e.source = o, e;
        }
        var s = function(e) {
            return a.call(this, e, y);
        }, u = t.variable || "obj";
        return s.source = "function(" + u + "){\n" + o + "}", s;
    }, y.chain = function(e) {
        var t = y(e);
        return t._chain = !0, t;
    };
    var I = function(e, t) {
        return e._chain ? y(t).chain() : t;
    };
    y.mixin = function(e) {
        y.each(y.functions(e), function(t) {
            var n = y[t] = e[t];
            y.prototype[t] = function() {
                var e = [ this._wrapped ];
                return l.apply(e, arguments), I(this, n.apply(y, e));
            };
        });
    }, y.mixin(y), y.each([ "pop", "push", "reverse", "shift", "sort", "splice", "unshift" ], function(e) {
        var t = a[e];
        y.prototype[e] = function() {
            var n = this._wrapped;
            return t.apply(n, arguments), "shift" !== e && "splice" !== e || 0 !== n.length || delete n[0], I(this, n);
        };
    }), y.each([ "concat", "join", "slice" ], function(e) {
        var t = a[e];
        y.prototype[e] = function() {
            return I(this, t.apply(this._wrapped, arguments));
        };
    }), y.prototype.value = function() {
        return this._wrapped;
    }, y.prototype.valueOf = y.prototype.toJSON = y.prototype.value, y.prototype.toString = function() {
        return "" + this._wrapped;
    }, "function" == typeof define && define.amd && define("underscore", [], function() {
        return y;
    });
}.call(this), (window.jQuery || window.Zepto) && function(e) {
    e.fn.Swipe = function(t) {
        return this.each(function() {
            e(this).data("Swipe", new Swipe(e(this)[0], t));
        });
    };
}(window.jQuery || window.Zepto);/*  Copyright (C) 2012-2014  Kurt Milam - http://xioup.com | Source: https://gist.github.com/1868955
 *  
 *  This mixin now has its own github repository: https://github.com/kurtmilam/underscoreDeepExtend
 *  It's also available through npm and bower
 *  
 *  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
**/