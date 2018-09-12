/*! jQuery v2.2.3 | (c) jQuery Foundation | jquery.org/license */ function Swipe(e, t) {
    "use strict";
    function n() {
        h = v.children, m = h.length, h.length < 2 && (t.continuous = !1), f.transitions && t.continuous && h.length < 3 && (v.appendChild(h[0].cloneNode(!0)), 
        v.appendChild(v.children[1].cloneNode(!0)), h = v.children), d = new Array(h.length), p = e.getBoundingClientRect().width || e.offsetWidth, 
        v.style.width = h.length * p + "px";
        for (var n = h.length; n--; ) {
            var i = h[n];
            i.style.width = p + "px", i.setAttribute("data-index", n), f.transitions && (i.style.left = n * -p + "px", 
            s(n, g > n ? -p : g < n ? p : 0, 0));
        }
        t.continuous && f.transitions && (s(r(g - 1), -p, 0), s(r(g + 1), p, 0)), f.transitions || (v.style.left = g * -p + "px"), 
        e.style.visibility = "visible";
    }
    function i() {
        t.continuous ? o(g + 1) : g < h.length - 1 && o(g + 1);
    }
    function r(e) {
        return (h.length + e % h.length) % h.length;
    }
    function o(e, n) {
        if (g != e) {
            if (f.transitions) {
                var i = Math.abs(g - e) / (g - e);
                if (t.continuous) {
                    var o = i;
                    (i = -d[r(e)] / p) !== o && (e = -i * h.length + e);
                }
                for (var a = Math.abs(g - e) - 1; a--; ) s(r((e > g ? e : g) - a - 1), p * i, 0);
                e = r(e), s(g, p * i, n || y), s(e, 0, n || y), t.continuous && s(r(e - i), -p * i, 0);
            } else e = r(e), function(e, n, i) {
                if (!i) return void (v.style.left = n + "px");
                var r = +new Date(), o = setInterval(function() {
                    var s = +new Date() - r;
                    if (s > i) return v.style.left = n + "px", w && l(), t.transitionEnd && t.transitionEnd.call(event, g, h[g]), 
                    void clearInterval(o);
                    v.style.left = (n - e) * (Math.floor(s / i * 100) / 100) + e + "px";
                }, 4);
            }(g * -p, e * -p, n || y);
            g = e, c(t.callback && t.callback(g, h[g]));
        }
    }
    function s(e, t, n) {
        a(e, t, n), d[e] = t;
    }
    function a(e, t, n) {
        var i = h[e], r = i && i.style;
        r && (r.webkitTransitionDuration = r.MozTransitionDuration = r.msTransitionDuration = r.OTransitionDuration = r.transitionDuration = n + "ms", 
        r.webkitTransform = "translate(" + t + "px,0)translateZ(0)", r.msTransform = r.MozTransform = r.OTransform = "translateX(" + t + "px)");
    }
    function l() {
        b = setTimeout(i, w);
    }
    function u() {
        w = 0, clearTimeout(b);
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
        var h, d, p, m, v = e.children[0];
        t = t || {};
        var g = parseInt(t.startSlide, 10) || 0, y = t.speed || 300;
        t.continuous = void 0 === t.continuous || t.continuous;
        var b, _, w = t.auto || 0, x = {}, C = {}, k = {
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
                x = {
                    x: t.pageX,
                    y: t.pageY,
                    time: +new Date()
                }, _ = void 0, C = {}, v.addEventListener("touchmove", this, !1), v.addEventListener("touchend", this, !1);
            },
            move: function(e) {
                if (!(e.touches.length > 1 || e.scale && 1 !== e.scale)) {
                    t.disableScroll && e.preventDefault();
                    var n = e.touches[0];
                    C = {
                        x: n.pageX - x.x,
                        y: n.pageY - x.y
                    }, void 0 === _ && (_ = !!(_ || Math.abs(C.x) < Math.abs(C.y))), _ || (e.preventDefault(), u(), t.continuous ? (a(r(g - 1), C.x + d[r(g - 1)], 0), 
                    a(g, C.x + d[g], 0), a(r(g + 1), C.x + d[r(g + 1)], 0)) : (C.x = C.x / (!g && C.x > 0 || g == h.length - 1 && C.x < 0 ? Math.abs(C.x) / p + 1 : 1), 
                    a(g - 1, C.x + d[g - 1], 0), a(g, C.x + d[g], 0), a(g + 1, C.x + d[g + 1], 0)));
                }
            },
            end: function(e) {
                var n = +new Date() - x.time, i = Number(n) < 250 && Math.abs(C.x) > 20 || Math.abs(C.x) > p / 2, o = !g && C.x > 0 || g == h.length - 1 && C.x < 0;
                t.continuous && (o = !1);
                var a = C.x < 0;
                _ || (i && !o ? (a ? (t.continuous ? (s(r(g - 1), -p, 0), s(r(g + 2), p, 0)) : s(g - 1, -p, 0), s(g, d[g] - p, y), 
                s(r(g + 1), d[r(g + 1)] - p, y), g = r(g + 1)) : (t.continuous ? (s(r(g + 1), p, 0), s(r(g - 2), -p, 0)) : s(g + 1, p, 0), 
                s(g, d[g] + p, y), s(r(g - 1), d[r(g - 1)] + p, y), g = r(g - 1)), t.callback && t.callback(g, h[g])) : t.continuous ? (s(r(g - 1), -p, y), 
                s(g, 0, y), s(r(g + 1), p, y)) : (s(g - 1, -p, y), s(g, 0, y), s(g + 1, p, y))), v.removeEventListener("touchmove", k, !1), 
                v.removeEventListener("touchend", k, !1);
            },
            transitionEnd: function(e) {
                parseInt(e.target.getAttribute("data-index"), 10) == g && (w && l(), t.transitionEnd && t.transitionEnd.call(e, g, h[g]));
            }
        };
        return n(), w && l(), f.addEventListener ? (f.touch && v.addEventListener("touchstart", k, !1), f.transitions && (v.addEventListener("webkitTransitionEnd", k, !1), 
        v.addEventListener("msTransitionEnd", k, !1), v.addEventListener("oTransitionEnd", k, !1), v.addEventListener("otransitionend", k, !1), 
        v.addEventListener("transitionend", k, !1)), window.addEventListener("resize", k, !1)) : window.onresize = function() {
            n();
        }, {
            setup: function() {
                n();
            },
            slide: function(e, t) {
                u(), o(e, t);
            },
            prev: function() {
                u(), t.continuous ? o(g - 1) : g && o(g - 1);
            },
            next: function() {
                u(), i();
            },
            stop: function() {
                u();
            },
            getPos: function() {
                return g;
            },
            getNumSlides: function() {
                return m;
            },
            kill: function() {
                u(), v.style.width = "", v.style.left = "";
                for (var e = h.length; e--; ) {
                    var t = h[e];
                    t.style.width = "", t.style.left = "", f.transitions && a(e, 0, 0);
                }
                f.addEventListener ? (v.removeEventListener("touchstart", k, !1), v.removeEventListener("webkitTransitionEnd", k, !1), 
                v.removeEventListener("msTransitionEnd", k, !1), v.removeEventListener("oTransitionEnd", k, !1), v.removeEventListener("otransitionend", k, !1), 
                v.removeEventListener("transitionend", k, !1), window.removeEventListener("resize", k, !1)) : window.onresize = null;
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
        var t = !!e && "length" in e && e.length, n = Q.type(e);
        return "function" !== n && !Q.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
    }
    function i(e, t, n) {
        if (Q.isFunction(t)) return Q.grep(e, function(e, i) {
            return !!t.call(e, i, e) !== n;
        });
        if (t.nodeType) return Q.grep(e, function(e) {
            return e === t !== n;
        });
        if ("string" == typeof t) {
            if (ue.test(t)) return Q.filter(t, e, n);
            t = Q.filter(t, e);
        }
        return Q.grep(e, function(e) {
            return Y.call(t, e) > -1 !== n;
        });
    }
    function r(e, t) {
        for (;(e = e[t]) && 1 !== e.nodeType; ) ;
        return e;
    }
    function o() {
        z.removeEventListener("DOMContentLoaded", o), e.removeEventListener("load", o), Q.ready();
    }
    function s() {
        this.expando = Q.expando + s.uid++;
    }
    function a(e, t, n) {
        var i;
        if (void 0 === n && 1 === e.nodeType) if (i = "data-" + t.replace(we, "-$&").toLowerCase(), "string" == typeof (n = e.getAttribute(i))) {
            try {
                n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : _e.test(n) ? Q.parseJSON(n) : n);
            } catch (e) {}
            be.set(e, t, n);
        } else n = void 0;
        return n;
    }
    function l(e, t, n, i) {
        var r, o = 1, s = 20, a = i ? function() {
            return i.cur();
        } : function() {
            return Q.css(e, t, "");
        }, l = a(), u = n && n[3] || (Q.cssNumber[t] ? "" : "px"), c = (Q.cssNumber[t] || "px" !== u && +l) && Ce.exec(Q.css(e, t));
        if (c && c[3] !== u) {
            u = u || c[3], n = n || [], c = +l || 1;
            do {
                o = o || ".5", c /= o, Q.style(e, t, c + u);
            } while (o !== (o = a() / l) && 1 !== o && --s);
        }
        return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, 
        i.end = r)), r;
    }
    function u(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && Q.nodeName(e, t) ? Q.merge([ e ], n) : n;
    }
    function c(e, t) {
        for (var n = 0, i = e.length; i > n; n++) ye.set(e[n], "globalEval", !t || ye.get(t[n], "globalEval"));
    }
    function f(e, t, n, i, r) {
        for (var o, s, a, l, f, h, d = t.createDocumentFragment(), p = [], m = 0, v = e.length; v > m; m++) if ((o = e[m]) || 0 === o) if ("object" === Q.type(o)) Q.merge(p, o.nodeType ? [ o ] : o); else if (Ne.test(o)) {
            for (s = s || d.appendChild(t.createElement("div")), a = (Ee.exec(o) || [ "", "" ])[1].toLowerCase(), 
            l = Oe[a] || Oe._default, s.innerHTML = l[1] + Q.htmlPrefilter(o) + l[2], h = l[0]; h--; ) s = s.lastChild;
            Q.merge(p, s.childNodes), (s = d.firstChild).textContent = "";
        } else p.push(t.createTextNode(o));
        for (d.textContent = "", m = 0; o = p[m++]; ) if (i && Q.inArray(o, i) > -1) r && r.push(o); else if (f = Q.contains(o.ownerDocument, o), 
        s = u(d.appendChild(o), "script"), f && c(s), n) for (h = 0; o = s[h++]; ) Ae.test(o.type || "") && n.push(o);
        return d;
    }
    function h() {
        return !0;
    }
    function d() {
        return !1;
    }
    function p() {
        try {
            return z.activeElement;
        } catch (e) {}
    }
    function m(e, t, n, i, r, o) {
        var s, a;
        if ("object" == typeof t) {
            "string" != typeof n && (i = i || n, n = void 0);
            for (a in t) m(e, a, n, i, t[a], o);
            return e;
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, 
        i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = d; else if (!r) return e;
        return 1 === o && (s = r, r = function(e) {
            return Q().off(e), s.apply(this, arguments);
        }, r.guid = s.guid || (s.guid = Q.guid++)), e.each(function() {
            Q.event.add(this, t, r, i, n);
        });
    }
    function v(e, t) {
        return Q.nodeName(e, "table") && Q.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
    }
    function g(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
    }
    function y(e) {
        var t = He.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e;
    }
    function b(e, t) {
        var n, i, r, o, s, a, l, u;
        if (1 === t.nodeType) {
            if (ye.hasData(e) && (o = ye.access(e), s = ye.set(t, o), u = o.events)) {
                delete s.handle, s.events = {};
                for (r in u) for (n = 0, i = u[r].length; i > n; n++) Q.event.add(t, r, u[r][n]);
            }
            be.hasData(e) && (a = be.access(e), l = Q.extend({}, a), be.set(t, l));
        }
    }
    function _(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && Se.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
    }
    function w(e, t, n, i) {
        t = V.apply([], t);
        var r, o, s, a, l, c, h = 0, d = e.length, p = d - 1, m = t[0], v = Q.isFunction(m);
        if (v || d > 1 && "string" == typeof m && !K.checkClone && Me.test(m)) return e.each(function(r) {
            var o = e.eq(r);
            v && (t[0] = m.call(this, r, o.html())), w(o, t, n, i);
        });
        if (d && (r = f(t, e[0].ownerDocument, !1, e, i), o = r.firstChild, 1 === r.childNodes.length && (r = o), 
        o || i)) {
            for (a = (s = Q.map(u(r, "script"), g)).length; d > h; h++) l = r, h !== p && (l = Q.clone(l, !0, !0), 
            a && Q.merge(s, u(l, "script"))), n.call(e[h], l, h);
            if (a) for (c = s[s.length - 1].ownerDocument, Q.map(s, y), h = 0; a > h; h++) l = s[h], Ae.test(l.type || "") && !ye.access(l, "globalEval") && Q.contains(c, l) && (l.src ? Q._evalUrl && Q._evalUrl(l.src) : Q.globalEval(l.textContent.replace(Le, "")));
        }
        return e;
    }
    function x(e, t, n) {
        for (var i, r = t ? Q.filter(t, e) : e, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || Q.cleanData(u(i)), 
        i.parentNode && (n && Q.contains(i.ownerDocument, i) && c(u(i, "script")), i.parentNode.removeChild(i));
        return e;
    }
    function C(e, t) {
        var n = Q(t.createElement(e)).appendTo(t.body), i = Q.css(n[0], "display");
        return n.detach(), i;
    }
    function k(e) {
        var t = z, n = Re[e];
        return n || ("none" !== (n = C(e, t)) && n || (Fe = (Fe || Q("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), 
        (t = Fe[0].contentDocument).write(), t.close(), n = C(e, t), Fe.detach()), Re[e] = n), n;
    }
    function T(e, t, n) {
        var i, r, o, s, a = e.style;
        return n = n || Be(e), "" !== (s = n ? n.getPropertyValue(t) || n[t] : void 0) && void 0 !== s || Q.contains(e.ownerDocument, e) || (s = Q.style(e, t)), 
        n && !K.pixelMarginRight() && qe.test(s) && We.test(t) && (i = a.width, r = a.minWidth, o = a.maxWidth, 
        a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o), void 0 !== s ? s + "" : s;
    }
    function S(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments);
            }
        };
    }
    function E(e) {
        if (e in Ge) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = Je.length; n--; ) if ((e = Je[n] + t) in Ge) return e;
    }
    function A(e, t, n) {
        var i = Ce.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t;
    }
    function O(e, t, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2) "margin" === n && (s += Q.css(e, n + ke[o], !0, r)), 
        i ? ("content" === n && (s -= Q.css(e, "padding" + ke[o], !0, r)), "margin" !== n && (s -= Q.css(e, "border" + ke[o] + "Width", !0, r))) : (s += Q.css(e, "padding" + ke[o], !0, r), 
        "padding" !== n && (s += Q.css(e, "border" + ke[o] + "Width", !0, r)));
        return s;
    }
    function N(t, n, i) {
        var r = !0, o = "width" === n ? t.offsetWidth : t.offsetHeight, s = Be(t), a = "border-box" === Q.css(t, "boxSizing", !1, s);
        if (z.msFullscreenElement && e.top !== e && t.getClientRects().length && (o = Math.round(100 * t.getBoundingClientRect()[n])), 
        0 >= o || null == o) {
            if ((0 > (o = T(t, n, s)) || null == o) && (o = t.style[n]), qe.test(o)) return o;
            r = a && (K.boxSizingReliable() || o === t.style[n]), o = parseFloat(o) || 0;
        }
        return o + O(t, n, i || (a ? "border" : "content"), r, s) + "px";
    }
    function P(e, t) {
        for (var n, i, r, o = [], s = 0, a = e.length; a > s; s++) (i = e[s]).style && (o[s] = ye.get(i, "olddisplay"), 
        n = i.style.display, t ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Te(i) && (o[s] = ye.access(i, "olddisplay", k(i.nodeName)))) : (r = Te(i), 
        "none" === n && r || ye.set(i, "olddisplay", r ? n : Q.css(i, "display"))));
        for (s = 0; a > s; s++) (i = e[s]).style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[s] || "" : "none"));
        return e;
    }
    function I(e, t, n, i, r) {
        return new I.prototype.init(e, t, n, i, r);
    }
    function j() {
        return e.setTimeout(function() {
            Ze = void 0;
        }), Ze = Q.now();
    }
    function D(e, t) {
        var n, i = 0, r = {
            height: e
        };
        for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = ke[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r;
    }
    function $(e, t, n) {
        for (var i, r = (M.tweeners[t] || []).concat(M.tweeners["*"]), o = 0, s = r.length; s > o; o++) if (i = r[o].call(n, t, e)) return i;
    }
    function M(e, t, n) {
        var i, r, o = 0, s = M.prefilters.length, a = Q.Deferred().always(function() {
            delete l.elem;
        }), l = function() {
            if (r) return !1;
            for (var t = Ze || j(), n = Math.max(0, u.startTime + u.duration - t), i = 1 - (n / u.duration || 0), o = 0, s = u.tweens.length; s > o; o++) u.tweens[o].run(i);
            return a.notifyWith(e, [ u, i, n ]), 1 > i && s ? n : (a.resolveWith(e, [ u ]), !1);
        }, u = a.promise({
            elem: e,
            props: Q.extend({}, t),
            opts: Q.extend(!0, {
                specialEasing: {},
                easing: Q.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Ze || j(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var i = Q.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(i), i;
            },
            stop: function(t) {
                var n = 0, i = t ? u.tweens.length : 0;
                if (r) return this;
                for (r = !0; i > n; n++) u.tweens[n].run(1);
                return t ? (a.notifyWith(e, [ u, 1, 0 ]), a.resolveWith(e, [ u, t ])) : a.rejectWith(e, [ u, t ]), this;
            }
        }), c = u.props;
        for (function(e, t) {
            var n, i, r, o, s;
            for (n in e) if (i = Q.camelCase(n), r = t[i], o = e[n], Q.isArray(o) && (r = o[1], o = e[n] = o[0]), 
            n !== i && (e[i] = o, delete e[n]), (s = Q.cssHooks[i]) && "expand" in s) {
                o = s.expand(o), delete e[i];
                for (n in o) n in e || (e[n] = o[n], t[n] = r);
            } else t[i] = r;
        }(c, u.opts.specialEasing); s > o; o++) if (i = M.prefilters[o].call(u, e, c, u.opts)) return Q.isFunction(i.stop) && (Q._queueHooks(u.elem, u.opts.queue).stop = Q.proxy(i.stop, i)), 
        i;
        return Q.map(c, $, u), Q.isFunction(u.opts.start) && u.opts.start.call(e, u), Q.fx.timer(Q.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always);
    }
    function H(e) {
        return e.getAttribute && e.getAttribute("class") || "";
    }
    function L(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0, o = t.toLowerCase().match(pe) || [];
            if (Q.isFunction(n)) for (;i = o[r++]; ) "+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n);
        };
    }
    function F(e, t, n, i) {
        function r(a) {
            var l;
            return o[a] = !0, Q.each(e[a] || [], function(e, a) {
                var u = a(t, n, i);
                return "string" != typeof u || s || o[u] ? s ? !(l = u) : void 0 : (t.dataTypes.unshift(u), r(u), !1);
            }), l;
        }
        var o = {}, s = e === yt;
        return r(t.dataTypes[0]) || !o["*"] && r("*");
    }
    function R(e, t) {
        var n, i, r = Q.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i || (i = {}))[n] = t[n]);
        return i && Q.extend(!0, e, i), e;
    }
    function W(e, t, n, i) {
        var r;
        if (Q.isArray(t)) Q.each(t, function(t, r) {
            n || xt.test(e) ? i(e, r) : W(e + "[" + ("object" == typeof r && null != r ? t : "") + "]", r, n, i);
        }); else if (n || "object" !== Q.type(t)) i(e, t); else for (r in t) W(e + "[" + r + "]", t[r], n, i);
    }
    function q(e) {
        return Q.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
    }
    var B = [], z = e.document, U = B.slice, V = B.concat, X = B.push, Y = B.indexOf, J = {}, G = J.toString, Z = J.hasOwnProperty, K = {}, Q = function(e, t) {
        return new Q.fn.init(e, t);
    }, ee = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, te = /^-ms-/, ne = /-([\da-z])/gi, ie = function(e, t) {
        return t.toUpperCase();
    };
    Q.fn = Q.prototype = {
        jquery: "2.2.3",
        constructor: Q,
        selector: "",
        length: 0,
        toArray: function() {
            return U.call(this);
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : U.call(this);
        },
        pushStack: function(e) {
            var t = Q.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t;
        },
        each: function(e) {
            return Q.each(this, e);
        },
        map: function(e) {
            return this.pushStack(Q.map(this, function(t, n) {
                return e.call(t, n, t);
            }));
        },
        slice: function() {
            return this.pushStack(U.apply(this, arguments));
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
        push: X,
        sort: B.sort,
        splice: B.splice
    }, Q.extend = Q.fn.extend = function() {
        var e, t, n, i, r, o, s = arguments[0] || {}, a = 1, l = arguments.length, u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || Q.isFunction(s) || (s = {}), 
        a === l && (s = this, a--); l > a; a++) if (null != (e = arguments[a])) for (t in e) n = s[t], i = e[t], 
        s !== i && (u && i && (Q.isPlainObject(i) || (r = Q.isArray(i))) ? (r ? (r = !1, o = n && Q.isArray(n) ? n : []) : o = n && Q.isPlainObject(n) ? n : {}, 
        s[t] = Q.extend(u, o, i)) : void 0 !== i && (s[t] = i));
        return s;
    }, Q.extend({
        expando: "jQuery" + ("2.2.3" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e);
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === Q.type(e);
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window;
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !Q.isArray(e) && t - parseFloat(t) + 1 >= 0;
        },
        isPlainObject: function(e) {
            var t;
            if ("object" !== Q.type(e) || e.nodeType || Q.isWindow(e)) return !1;
            if (e.constructor && !Z.call(e, "constructor") && !Z.call(e.constructor.prototype || {}, "isPrototypeOf")) return !1;
            for (t in e) ;
            return void 0 === t || Z.call(e, t);
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0;
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? J[G.call(e)] || "object" : typeof e;
        },
        globalEval: function(e) {
            var t, n = eval;
            (e = Q.trim(e)) && (1 === e.indexOf("use strict") ? (t = z.createElement("script"), t.text = e, z.head.appendChild(t).parentNode.removeChild(t)) : n(e));
        },
        camelCase: function(e) {
            return e.replace(te, "ms-").replace(ne, ie);
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        },
        each: function(e, t) {
            var i, r = 0;
            if (n(e)) for (i = e.length; i > r && !1 !== t.call(e[r], r, e[r]); r++) ; else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
            return e;
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(ee, "");
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? Q.merge(i, "string" == typeof e ? [ e ] : e) : X.call(i, e)), i;
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : Y.call(t, e, n);
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; n > i; i++) e[r++] = t[i];
            return e.length = r, e;
        },
        grep: function(e, t, n) {
            for (var i = [], r = 0, o = e.length, s = !n; o > r; r++) !t(e[r], r) !== s && i.push(e[r]);
            return i;
        },
        map: function(e, t, i) {
            var r, o, s = 0, a = [];
            if (n(e)) for (r = e.length; r > s; s++) null != (o = t(e[s], s, i)) && a.push(o); else for (s in e) null != (o = t(e[s], s, i)) && a.push(o);
            return V.apply([], a);
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, r;
            return "string" == typeof t && (n = e[t], t = e, e = n), Q.isFunction(e) ? (i = U.call(arguments, 2), 
            r = function() {
                return e.apply(t || this, i.concat(U.call(arguments)));
            }, r.guid = e.guid = e.guid || Q.guid++, r) : void 0;
        },
        now: Date.now,
        support: K
    }), "function" == typeof Symbol && (Q.fn[Symbol.iterator] = B[Symbol.iterator]), Q.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        J["[object " + t + "]"] = t.toLowerCase();
    });
    var re = function(e) {
        function t(e, t, n, i) {
            var r, o, s, a, l, u, f, d, p = t && t.ownerDocument, m = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m) return n;
            if (!i && ((t ? t.ownerDocument || t : L) !== N && O(t), t = t || N, I)) {
                if (11 !== m && (u = me.exec(e))) if (r = u[1]) {
                    if (9 === m) {
                        if (!(s = t.getElementById(r))) return n;
                        if (s.id === r) return n.push(s), n;
                    } else if (p && (s = p.getElementById(r)) && M(t, s) && s.id === r) return n.push(s), n;
                } else {
                    if (u[2]) return G.apply(n, t.getElementsByTagName(e)), n;
                    if ((r = u[3]) && b.getElementsByClassName && t.getElementsByClassName) return G.apply(n, t.getElementsByClassName(r)), 
                    n;
                }
                if (b.qsa && !B[e + " "] && (!j || !j.test(e))) {
                    if (1 !== m) p = t, d = e; else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(ge, "\\$&") : t.setAttribute("id", a = H), o = (f = C(e)).length, 
                        l = ce.test(a) ? "#" + a : "[id='" + a + "']"; o--; ) f[o] = l + " " + h(f[o]);
                        d = f.join(","), p = ve.test(e) && c(t.parentNode) || t;
                    }
                    if (d) try {
                        return G.apply(n, p.querySelectorAll(d)), n;
                    } catch (e) {} finally {
                        a === H && t.removeAttribute("id");
                    }
                }
            }
            return T(e.replace(oe, "$1"), t, n, i);
        }
        function n() {
            function e(n, i) {
                return t.push(n + " ") > _.cacheLength && delete e[t.shift()], e[n + " "] = i;
            }
            var t = [];
            return e;
        }
        function i(e) {
            return e[H] = !0, e;
        }
        function r(e) {
            var t = N.createElement("div");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null;
            }
        }
        function o(e, t) {
            for (var n = e.split("|"), i = n.length; i--; ) _.attrHandle[n[i]] = t;
        }
        function s(e, t) {
            var n = t && e, i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || U) - (~e.sourceIndex || U);
            if (i) return i;
            if (n) for (;n = n.nextSibling; ) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function a(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
        }
        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e;
            };
        }
        function u(e) {
            return i(function(t) {
                return t = +t, i(function(n, i) {
                    for (var r, o = e([], n.length, t), s = o.length; s--; ) n[r = o[s]] && (n[r] = !(i[r] = n[r]));
                });
            });
        }
        function c(e) {
            return e && void 0 !== e.getElementsByTagName && e;
        }
        function f() {}
        function h(e) {
            for (var t = 0, n = e.length, i = ""; n > t; t++) i += e[t].value;
            return i;
        }
        function d(e, t, n) {
            var i = t.dir, r = n && "parentNode" === i, o = R++;
            return t.first ? function(t, n, o) {
                for (;t = t[i]; ) if (1 === t.nodeType || r) return e(t, n, o);
            } : function(t, n, s) {
                var a, l, u, c = [ F, o ];
                if (s) {
                    for (;t = t[i]; ) if ((1 === t.nodeType || r) && e(t, n, s)) return !0;
                } else for (;t = t[i]; ) if (1 === t.nodeType || r) {
                    if (u = t[H] || (t[H] = {}), l = u[t.uniqueID] || (u[t.uniqueID] = {}), (a = l[i]) && a[0] === F && a[1] === o) return c[2] = a[2];
                    if (l[i] = c, c[2] = e(t, n, s)) return !0;
                }
            };
        }
        function p(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var r = e.length; r--; ) if (!e[r](t, n, i)) return !1;
                return !0;
            } : e[0];
        }
        function m(e, t, n, i, r) {
            for (var o, s = [], a = 0, l = e.length, u = null != t; l > a; a++) (o = e[a]) && (n && !n(o, i, r) || (s.push(o), 
            u && t.push(a)));
            return s;
        }
        function v(e, n, r, o, s, a) {
            return o && !o[H] && (o = v(o)), s && !s[H] && (s = v(s, a)), i(function(i, a, l, u) {
                var c, f, h, d = [], p = [], v = a.length, g = i || function(e, n, i) {
                    for (var r = 0, o = n.length; o > r; r++) t(e, n[r], i);
                    return i;
                }(n || "*", l.nodeType ? [ l ] : l, []), y = !e || !i && n ? g : m(g, d, e, l, u), b = r ? s || (i ? e : v || o) ? [] : a : y;
                if (r && r(y, b, l, u), o) for (c = m(b, p), o(c, [], l, u), f = c.length; f--; ) (h = c[f]) && (b[p[f]] = !(y[p[f]] = h));
                if (i) {
                    if (s || e) {
                        if (s) {
                            for (c = [], f = b.length; f--; ) (h = b[f]) && c.push(y[f] = h);
                            s(null, b = [], c, u);
                        }
                        for (f = b.length; f--; ) (h = b[f]) && (c = s ? K(i, h) : d[f]) > -1 && (i[c] = !(a[c] = h));
                    }
                } else b = m(b === a ? b.splice(v, b.length) : b), s ? s(null, a, b, u) : G.apply(a, b);
            });
        }
        function g(e) {
            for (var t, n, i, r = e.length, o = _.relative[e[0].type], s = o || _.relative[" "], a = o ? 1 : 0, l = d(function(e) {
                return e === t;
            }, s, !0), u = d(function(e) {
                return K(t, e) > -1;
            }, s, !0), c = [ function(e, n, i) {
                var r = !o && (i || n !== S) || ((t = n).nodeType ? l(e, n, i) : u(e, n, i));
                return t = null, r;
            } ]; r > a; a++) if (n = _.relative[e[a].type]) c = [ d(p(c), n) ]; else {
                if ((n = _.filter[e[a].type].apply(null, e[a].matches))[H]) {
                    for (i = ++a; r > i && !_.relative[e[i].type]; i++) ;
                    return v(a > 1 && p(c), a > 1 && h(e.slice(0, a - 1).concat({
                        value: " " === e[a - 2].type ? "*" : ""
                    })).replace(oe, "$1"), n, i > a && g(e.slice(a, i)), r > i && g(e = e.slice(i)), r > i && h(e));
                }
                c.push(n);
            }
            return p(c);
        }
        var y, b, _, w, x, C, k, T, S, E, A, O, N, P, I, j, D, $, M, H = "sizzle" + 1 * new Date(), L = e.document, F = 0, R = 0, W = n(), q = n(), B = n(), z = function(e, t) {
            return e === t && (A = !0), 0;
        }, U = 1 << 31, V = {}.hasOwnProperty, X = [], Y = X.pop, J = X.push, G = X.push, Z = X.slice, K = function(e, t) {
            for (var n = 0, i = e.length; i > n; n++) if (e[n] === t) return n;
            return -1;
        }, Q = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ee = "[\\x20\\t\\r\\n\\f]", te = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]", ie = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)", re = new RegExp(ee + "+", "g"), oe = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"), se = new RegExp("^" + ee + "*," + ee + "*"), ae = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"), le = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"), ue = new RegExp(ie), ce = new RegExp("^" + te + "$"), fe = {
            ID: new RegExp("^#(" + te + ")"),
            CLASS: new RegExp("^\\.(" + te + ")"),
            TAG: new RegExp("^(" + te + "|[*])"),
            ATTR: new RegExp("^" + ne),
            PSEUDO: new RegExp("^" + ie),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + Q + ")$", "i"),
            needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
        }, he = /^(?:input|select|textarea|button)$/i, de = /^h\d$/i, pe = /^[^{]+\{\s*\[native \w/, me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ve = /[+~]/, ge = /'|\\/g, ye = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"), be = function(e, t, n) {
            var i = "0x" + t - 65536;
            return i != i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320);
        }, _e = function() {
            O();
        };
        try {
            G.apply(X = Z.call(L.childNodes), L.childNodes), X[L.childNodes.length].nodeType;
        } catch (e) {
            G = {
                apply: X.length ? function(e, t) {
                    J.apply(e, Z.call(t));
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++]; ) ;
                    e.length = n - 1;
                }
            };
        }
        b = t.support = {}, x = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName;
        }, O = t.setDocument = function(e) {
            var t, n, i = e ? e.ownerDocument || e : L;
            return i !== N && 9 === i.nodeType && i.documentElement ? (N = i, P = N.documentElement, I = !x(N), 
            (n = N.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", _e, !1) : n.attachEvent && n.attachEvent("onunload", _e)), 
            b.attributes = r(function(e) {
                return e.className = "i", !e.getAttribute("className");
            }), b.getElementsByTagName = r(function(e) {
                return e.appendChild(N.createComment("")), !e.getElementsByTagName("*").length;
            }), b.getElementsByClassName = pe.test(N.getElementsByClassName), b.getById = r(function(e) {
                return P.appendChild(e).id = H, !N.getElementsByName || !N.getElementsByName(H).length;
            }), b.getById ? (_.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && I) {
                    var n = t.getElementById(e);
                    return n ? [ n ] : [];
                }
            }, _.filter.ID = function(e) {
                var t = e.replace(ye, be);
                return function(e) {
                    return e.getAttribute("id") === t;
                };
            }) : (delete _.find.ID, _.filter.ID = function(e) {
                var t = e.replace(ye, be);
                return function(e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t;
                };
            }), _.find.TAG = b.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : b.qsa ? t.querySelectorAll(e) : void 0;
            } : function(e, t) {
                var n, i = [], r = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (;n = o[r++]; ) 1 === n.nodeType && i.push(n);
                    return i;
                }
                return o;
            }, _.find.CLASS = b.getElementsByClassName && function(e, t) {
                return void 0 !== t.getElementsByClassName && I ? t.getElementsByClassName(e) : void 0;
            }, D = [], j = [], (b.qsa = pe.test(N.querySelectorAll)) && (r(function(e) {
                P.appendChild(e).innerHTML = "<a id='" + H + "'></a><select id='" + H + "-\r\\' msallowcapture=''><option selected=''></option></select>", 
                e.querySelectorAll("[msallowcapture^='']").length && j.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || j.push("\\[" + ee + "*(?:value|" + Q + ")"), 
                e.querySelectorAll("[id~=" + H + "-]").length || j.push("~="), e.querySelectorAll(":checked").length || j.push(":checked"), 
                e.querySelectorAll("a#" + H + "+*").length || j.push(".#.+[+~]");
            }), r(function(e) {
                var t = N.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && j.push("name" + ee + "*[*^$|!~]?="), 
                e.querySelectorAll(":enabled").length || j.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), 
                j.push(",.*:");
            })), (b.matchesSelector = pe.test($ = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && r(function(e) {
                b.disconnectedMatch = $.call(e, "div"), $.call(e, "[s!='']:x"), D.push("!=", ie);
            }), j = j.length && new RegExp(j.join("|")), D = D.length && new RegExp(D.join("|")), t = pe.test(P.compareDocumentPosition), 
            M = t || pe.test(P.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)));
            } : function(e, t) {
                if (t) for (;t = t.parentNode; ) if (t === e) return !0;
                return !1;
            }, z = t ? function(e, t) {
                if (e === t) return A = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !b.sortDetached && t.compareDocumentPosition(e) === n ? e === N || e.ownerDocument === L && M(L, e) ? -1 : t === N || t.ownerDocument === L && M(L, t) ? 1 : E ? K(E, e) - K(E, t) : 0 : 4 & n ? -1 : 1);
            } : function(e, t) {
                if (e === t) return A = !0, 0;
                var n, i = 0, r = e.parentNode, o = t.parentNode, a = [ e ], l = [ t ];
                if (!r || !o) return e === N ? -1 : t === N ? 1 : r ? -1 : o ? 1 : E ? K(E, e) - K(E, t) : 0;
                if (r === o) return s(e, t);
                for (n = e; n = n.parentNode; ) a.unshift(n);
                for (n = t; n = n.parentNode; ) l.unshift(n);
                for (;a[i] === l[i]; ) i++;
                return i ? s(a[i], l[i]) : a[i] === L ? -1 : l[i] === L ? 1 : 0;
            }, N) : N;
        }, t.matches = function(e, n) {
            return t(e, null, null, n);
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== N && O(e), n = n.replace(le, "='$1']"), b.matchesSelector && I && !B[n + " "] && (!D || !D.test(n)) && (!j || !j.test(n))) try {
                var i = $.call(e, n);
                if (i || b.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i;
            } catch (e) {}
            return t(n, N, null, [ e ]).length > 0;
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== N && O(e), M(e, t);
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== N && O(e);
            var n = _.attrHandle[t.toLowerCase()], i = n && V.call(_.attrHandle, t.toLowerCase()) ? n(e, t, !I) : void 0;
            return void 0 !== i ? i : b.attributes || !I ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }, t.uniqueSort = function(e) {
            var t, n = [], i = 0, r = 0;
            if (A = !b.detectDuplicates, E = !b.sortStable && e.slice(0), e.sort(z), A) {
                for (;t = e[r++]; ) t === e[r] && (i = n.push(r));
                for (;i--; ) e.splice(n[i], 1);
            }
            return E = null, e;
        }, w = t.getText = function(e) {
            var t, n = "", i = 0, r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += w(e);
                } else if (3 === r || 4 === r) return e.nodeValue;
            } else for (;t = e[i++]; ) n += w(t);
            return n;
        }, (_ = t.selectors = {
            cacheLength: 50,
            createPseudo: i,
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
                    return e[1] = e[1].replace(ye, be), e[3] = (e[3] || e[4] || e[5] || "").replace(ye, be), "~=" === e[2] && (e[3] = " " + e[3] + " "), 
                    e.slice(0, 4);
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), 
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e;
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ue.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), 
                    e[2] = n.slice(0, t)), e.slice(0, 3));
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(ye, be).toLowerCase();
                    return "*" === e ? function() {
                        return !0;
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
                },
                CLASS: function(e) {
                    var t = W[e + " "];
                    return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && W(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
                    });
                },
                ATTR: function(e, n, i) {
                    return function(r) {
                        var o = t.attr(r, e);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(re, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"));
                    };
                },
                CHILD: function(e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3), s = "last" !== e.slice(-4), a = "of-type" === t;
                    return 1 === i && 0 === r ? function(e) {
                        return !!e.parentNode;
                    } : function(t, n, l) {
                        var u, c, f, h, d, p, m = o !== s ? "nextSibling" : "previousSibling", v = t.parentNode, g = a && t.nodeName.toLowerCase(), y = !l && !a, b = !1;
                        if (v) {
                            if (o) {
                                for (;m; ) {
                                    for (h = t; h = h[m]; ) if (a ? h.nodeName.toLowerCase() === g : 1 === h.nodeType) return !1;
                                    p = m = "only" === e && !p && "nextSibling";
                                }
                                return !0;
                            }
                            if (p = [ s ? v.firstChild : v.lastChild ], s && y) {
                                for (b = (d = (u = (c = (f = (h = v)[H] || (h[H] = {}))[h.uniqueID] || (f[h.uniqueID] = {}))[e] || [])[0] === F && u[1]) && u[2], 
                                h = d && v.childNodes[d]; h = ++d && h && h[m] || (b = d = 0) || p.pop(); ) if (1 === h.nodeType && ++b && h === t) {
                                    c[e] = [ F, d, b ];
                                    break;
                                }
                            } else if (y && (h = t, f = h[H] || (h[H] = {}), c = f[h.uniqueID] || (f[h.uniqueID] = {}), u = c[e] || [], 
                            d = u[0] === F && u[1], b = d), !1 === b) for (;(h = ++d && h && h[m] || (b = d = 0) || p.pop()) && ((a ? h.nodeName.toLowerCase() !== g : 1 !== h.nodeType) || !++b || (y && (f = h[H] || (h[H] = {}), 
                            c = f[h.uniqueID] || (f[h.uniqueID] = {}), c[e] = [ F, b ]), h !== t)); ) ;
                            return (b -= r) === i || b % i == 0 && b / i >= 0;
                        }
                    };
                },
                PSEUDO: function(e, n) {
                    var r, o = _.pseudos[e] || _.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[H] ? o(n) : o.length > 1 ? (r = [ e, e, "", n ], _.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                        for (var i, r = o(e, n), s = r.length; s--; ) i = K(e, r[s]), e[i] = !(t[i] = r[s]);
                    }) : function(e) {
                        return o(e, 0, r);
                    }) : o;
                }
            },
            pseudos: {
                not: i(function(e) {
                    var t = [], n = [], r = k(e.replace(oe, "$1"));
                    return r[H] ? i(function(e, t, n, i) {
                        for (var o, s = r(e, null, i, []), a = e.length; a--; ) (o = s[a]) && (e[a] = !(t[a] = o));
                    }) : function(e, i, o) {
                        return t[0] = e, r(t, null, o, n), t[0] = null, !n.pop();
                    };
                }),
                has: i(function(e) {
                    return function(n) {
                        return t(e, n).length > 0;
                    };
                }),
                contains: i(function(e) {
                    return e = e.replace(ye, be), function(t) {
                        return (t.textContent || t.innerText || w(t)).indexOf(e) > -1;
                    };
                }),
                lang: i(function(e) {
                    return ce.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(ye, be).toLowerCase(), function(t) {
                        var n;
                        do {
                            if (n = I ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                    };
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id;
                },
                root: function(e) {
                    return e === P;
                },
                focus: function(e) {
                    return e === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
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
                    return !_.pseudos.empty(e);
                },
                header: function(e) {
                    return de.test(e.nodeName);
                },
                input: function(e) {
                    return he.test(e.nodeName);
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t;
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                },
                first: u(function() {
                    return [ 0 ];
                }),
                last: u(function(e, t) {
                    return [ t - 1 ];
                }),
                eq: u(function(e, t, n) {
                    return [ 0 > n ? n + t : n ];
                }),
                even: u(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e;
                }),
                odd: u(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e;
                }),
                lt: u(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; --i >= 0; ) e.push(i);
                    return e;
                }),
                gt: u(function(e, t, n) {
                    for (var i = 0 > n ? n + t : n; ++i < t; ) e.push(i);
                    return e;
                })
            }
        }).pseudos.nth = _.pseudos.eq;
        for (y in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) _.pseudos[y] = a(y);
        for (y in {
            submit: !0,
            reset: !0
        }) _.pseudos[y] = l(y);
        return f.prototype = _.filters = _.pseudos, _.setFilters = new f(), C = t.tokenize = function(e, n) {
            var i, r, o, s, a, l, u, c = q[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (a = e, l = [], u = _.preFilter; a; ) {
                i && !(r = se.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), i = !1, (r = ae.exec(a)) && (i = r.shift(), 
                o.push({
                    value: i,
                    type: r[0].replace(oe, " ")
                }), a = a.slice(i.length));
                for (s in _.filter) !(r = fe[s].exec(a)) || u[s] && !(r = u[s](r)) || (i = r.shift(), o.push({
                    value: i,
                    type: s,
                    matches: r
                }), a = a.slice(i.length));
                if (!i) break;
            }
            return n ? a.length : a ? t.error(e) : q(e, l).slice(0);
        }, k = t.compile = function(e, n) {
            var r, o = [], s = [], a = B[e + " "];
            if (!a) {
                for (n || (n = C(e)), r = n.length; r--; ) (a = g(n[r]))[H] ? o.push(a) : s.push(a);
                (a = B(e, function(e, n) {
                    var r = n.length > 0, o = e.length > 0, s = function(i, s, a, l, u) {
                        var c, f, h, d = 0, p = "0", v = i && [], g = [], y = S, b = i || o && _.find.TAG("*", u), w = F += null == y ? 1 : Math.random() || .1, x = b.length;
                        for (u && (S = s === N || s || u); p !== x && null != (c = b[p]); p++) {
                            if (o && c) {
                                for (f = 0, s || c.ownerDocument === N || (O(c), a = !I); h = e[f++]; ) if (h(c, s || N, a)) {
                                    l.push(c);
                                    break;
                                }
                                u && (F = w);
                            }
                            r && ((c = !h && c) && d--, i && v.push(c));
                        }
                        if (d += p, r && p !== d) {
                            for (f = 0; h = n[f++]; ) h(v, g, s, a);
                            if (i) {
                                if (d > 0) for (;p--; ) v[p] || g[p] || (g[p] = Y.call(l));
                                g = m(g);
                            }
                            G.apply(l, g), u && !i && g.length > 0 && d + n.length > 1 && t.uniqueSort(l);
                        }
                        return u && (F = w, S = y), v;
                    };
                    return r ? i(s) : s;
                }(s, o))).selector = e;
            }
            return a;
        }, T = t.select = function(e, t, n, i) {
            var r, o, s, a, l, u = "function" == typeof e && e, f = !i && C(e = u.selector || e);
            if (n = n || [], 1 === f.length) {
                if ((o = f[0] = f[0].slice(0)).length > 2 && "ID" === (s = o[0]).type && b.getById && 9 === t.nodeType && I && _.relative[o[1].type]) {
                    if (!(t = (_.find.ID(s.matches[0].replace(ye, be), t) || [])[0])) return n;
                    u && (t = t.parentNode), e = e.slice(o.shift().value.length);
                }
                for (r = fe.needsContext.test(e) ? 0 : o.length; r-- && (s = o[r], !_.relative[a = s.type]); ) if ((l = _.find[a]) && (i = l(s.matches[0].replace(ye, be), ve.test(o[0].type) && c(t.parentNode) || t))) {
                    if (o.splice(r, 1), !(e = i.length && h(o))) return G.apply(n, i), n;
                    break;
                }
            }
            return (u || k(e, f))(i, t, !I, n, !t || ve.test(e) && c(t.parentNode) || t), n;
        }, b.sortStable = H.split("").sort(z).join("") === H, b.detectDuplicates = !!A, O(), b.sortDetached = r(function(e) {
            return 1 & e.compareDocumentPosition(N.createElement("div"));
        }), r(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
        }) || o("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }), b.attributes && r(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
        }) || o("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue;
        }), r(function(e) {
            return null == e.getAttribute("disabled");
        }) || o(Q, function(e, t, n) {
            var i;
            return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null;
        }), t;
    }(e);
    Q.find = re, Q.expr = re.selectors, Q.expr[":"] = Q.expr.pseudos, Q.uniqueSort = Q.unique = re.uniqueSort, 
    Q.text = re.getText, Q.isXMLDoc = re.isXML, Q.contains = re.contains;
    var oe = function(e, t, n) {
        for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; ) if (1 === e.nodeType) {
            if (r && Q(e).is(n)) break;
            i.push(e);
        }
        return i;
    }, se = function(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n;
    }, ae = Q.expr.match.needsContext, le = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/, ue = /^.[^:#\[\.,]*$/;
    Q.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? Q.find.matchesSelector(i, e) ? [ i ] : [] : Q.find.matches(e, Q.grep(t, function(e) {
            return 1 === e.nodeType;
        }));
    }, Q.fn.extend({
        find: function(e) {
            var t, n = this.length, i = [], r = this;
            if ("string" != typeof e) return this.pushStack(Q(e).filter(function() {
                for (t = 0; n > t; t++) if (Q.contains(r[t], this)) return !0;
            }));
            for (t = 0; n > t; t++) Q.find(e, r[t], i);
            return i = this.pushStack(n > 1 ? Q.unique(i) : i), i.selector = this.selector ? this.selector + " " + e : e, 
            i;
        },
        filter: function(e) {
            return this.pushStack(i(this, e || [], !1));
        },
        not: function(e) {
            return this.pushStack(i(this, e || [], !0));
        },
        is: function(e) {
            return !!i(this, "string" == typeof e && ae.test(e) ? Q(e) : e || [], !1).length;
        }
    });
    var ce, fe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (Q.fn.init = function(e, t, n) {
        var i, r;
        if (!e) return this;
        if (n = n || ce, "string" == typeof e) {
            if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [ null, e, null ] : fe.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (i[1]) {
                if (t = t instanceof Q ? t[0] : t, Q.merge(this, Q.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : z, !0)), 
                le.test(i[1]) && Q.isPlainObject(t)) for (i in t) Q.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
                return this;
            }
            return (r = z.getElementById(i[2])) && r.parentNode && (this.length = 1, this[0] = r), this.context = z, 
            this.selector = e, this;
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : Q.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(Q) : (void 0 !== e.selector && (this.selector = e.selector, 
        this.context = e.context), Q.makeArray(e, this));
    }).prototype = Q.fn, ce = Q(z);
    var he = /^(?:parents|prev(?:Until|All))/, de = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    Q.fn.extend({
        has: function(e) {
            var t = Q(e, this), n = t.length;
            return this.filter(function() {
                for (var e = 0; n > e; e++) if (Q.contains(this, t[e])) return !0;
            });
        },
        closest: function(e, t) {
            for (var n, i = 0, r = this.length, o = [], s = ae.test(e) || "string" != typeof e ? Q(e, t || this.context) : 0; r > i; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && Q.find.matchesSelector(n, e))) {
                o.push(n);
                break;
            }
            return this.pushStack(o.length > 1 ? Q.uniqueSort(o) : o);
        },
        index: function(e) {
            return e ? "string" == typeof e ? Y.call(Q(e), this[0]) : Y.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(e, t) {
            return this.pushStack(Q.uniqueSort(Q.merge(this.get(), Q(e, t))));
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        }
    }), Q.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
        },
        parents: function(e) {
            return oe(e, "parentNode");
        },
        parentsUntil: function(e, t, n) {
            return oe(e, "parentNode", n);
        },
        next: function(e) {
            return r(e, "nextSibling");
        },
        prev: function(e) {
            return r(e, "previousSibling");
        },
        nextAll: function(e) {
            return oe(e, "nextSibling");
        },
        prevAll: function(e) {
            return oe(e, "previousSibling");
        },
        nextUntil: function(e, t, n) {
            return oe(e, "nextSibling", n);
        },
        prevUntil: function(e, t, n) {
            return oe(e, "previousSibling", n);
        },
        siblings: function(e) {
            return se((e.parentNode || {}).firstChild, e);
        },
        children: function(e) {
            return se(e.firstChild);
        },
        contents: function(e) {
            return e.contentDocument || Q.merge([], e.childNodes);
        }
    }, function(e, t) {
        Q.fn[e] = function(n, i) {
            var r = Q.map(this, t, n);
            return "Until" !== e.slice(-5) && (i = n), i && "string" == typeof i && (r = Q.filter(i, r)), this.length > 1 && (de[e] || Q.uniqueSort(r), 
            he.test(e) && r.reverse()), this.pushStack(r);
        };
    });
    var pe = /\S+/g;
    Q.Callbacks = function(e) {
        e = "string" == typeof e ? function(e) {
            var t = {};
            return Q.each(e.match(pe) || [], function(e, n) {
                t[n] = !0;
            }), t;
        }(e) : Q.extend({}, e);
        var t, n, i, r, o = [], s = [], a = -1, l = function() {
            for (r = e.once, i = t = !0; s.length; a = -1) for (n = s.shift(); ++a < o.length; ) !1 === o[a].apply(n[0], n[1]) && e.stopOnFalse && (a = o.length, 
            n = !1);
            e.memory || (n = !1), t = !1, r && (o = n ? [] : "");
        }, u = {
            add: function() {
                return o && (n && !t && (a = o.length - 1, s.push(n)), function t(n) {
                    Q.each(n, function(n, i) {
                        Q.isFunction(i) ? e.unique && u.has(i) || o.push(i) : i && i.length && "string" !== Q.type(i) && t(i);
                    });
                }(arguments), n && !t && l()), this;
            },
            remove: function() {
                return Q.each(arguments, function(e, t) {
                    for (var n; (n = Q.inArray(t, o, n)) > -1; ) o.splice(n, 1), a >= n && a--;
                }), this;
            },
            has: function(e) {
                return e ? Q.inArray(e, o) > -1 : o.length > 0;
            },
            empty: function() {
                return o && (o = []), this;
            },
            disable: function() {
                return r = s = [], o = n = "", this;
            },
            disabled: function() {
                return !o;
            },
            lock: function() {
                return r = s = [], n || (o = n = ""), this;
            },
            locked: function() {
                return !!r;
            },
            fireWith: function(e, n) {
                return r || (n = n || [], n = [ e, n.slice ? n.slice() : n ], s.push(n), t || l()), this;
            },
            fire: function() {
                return u.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!i;
            }
        };
        return u;
    }, Q.extend({
        Deferred: function(e) {
            var t = [ [ "resolve", "done", Q.Callbacks("once memory"), "resolved" ], [ "reject", "fail", Q.Callbacks("once memory"), "rejected" ], [ "notify", "progress", Q.Callbacks("memory") ] ], n = "pending", i = {
                state: function() {
                    return n;
                },
                always: function() {
                    return r.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var e = arguments;
                    return Q.Deferred(function(n) {
                        Q.each(t, function(t, o) {
                            var s = Q.isFunction(e[t]) && e[t];
                            r[o[1]](function() {
                                var e = s && s.apply(this, arguments);
                                e && Q.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === i ? n.promise() : this, s ? [ e ] : arguments);
                            });
                        }), e = null;
                    }).promise();
                },
                promise: function(e) {
                    return null != e ? Q.extend(e, i) : i;
                }
            }, r = {};
            return i.pipe = i.then, Q.each(t, function(e, o) {
                var s = o[2], a = o[3];
                i[o[1]] = s.add, a && s.add(function() {
                    n = a;
                }, t[1 ^ e][2].disable, t[2][2].lock), r[o[0]] = function() {
                    return r[o[0] + "With"](this === r ? i : this, arguments), this;
                }, r[o[0] + "With"] = s.fireWith;
            }), i.promise(r), e && e.call(r, r), r;
        },
        when: function(e) {
            var t, n, i, r = 0, o = U.call(arguments), s = o.length, a = 1 !== s || e && Q.isFunction(e.promise) ? s : 0, l = 1 === a ? e : Q.Deferred(), u = function(e, n, i) {
                return function(r) {
                    n[e] = this, i[e] = arguments.length > 1 ? U.call(arguments) : r, i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i);
                };
            };
            if (s > 1) for (t = new Array(s), n = new Array(s), i = new Array(s); s > r; r++) o[r] && Q.isFunction(o[r].promise) ? o[r].promise().progress(u(r, n, t)).done(u(r, i, o)).fail(l.reject) : --a;
            return a || l.resolveWith(i, o), l.promise();
        }
    });
    var me;
    Q.fn.ready = function(e) {
        return Q.ready.promise().done(e), this;
    }, Q.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? Q.readyWait++ : Q.ready(!0);
        },
        ready: function(e) {
            (!0 === e ? --Q.readyWait : Q.isReady) || (Q.isReady = !0, !0 !== e && --Q.readyWait > 0 || (me.resolveWith(z, [ Q ]), 
            Q.fn.triggerHandler && (Q(z).triggerHandler("ready"), Q(z).off("ready"))));
        }
    }), Q.ready.promise = function(t) {
        return me || (me = Q.Deferred(), "complete" === z.readyState || "loading" !== z.readyState && !z.documentElement.doScroll ? e.setTimeout(Q.ready) : (z.addEventListener("DOMContentLoaded", o), 
        e.addEventListener("load", o))), me.promise(t);
    }, Q.ready.promise();
    var ve = function(e, t, n, i, r, o, s) {
        var a = 0, l = e.length, u = null == n;
        if ("object" === Q.type(n)) {
            r = !0;
            for (a in n) ve(e, t, a, n[a], !0, o, s);
        } else if (void 0 !== i && (r = !0, Q.isFunction(i) || (s = !0), u && (s ? (t.call(e, i), t = null) : (u = t, 
        t = function(e, t, n) {
            return u.call(Q(e), n);
        })), t)) for (;l > a; a++) t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)));
        return r ? e : u ? t.call(e) : l ? t(e[0], n) : o;
    }, ge = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
    s.uid = 1, s.prototype = {
        register: function(e, t) {
            var n = t || {};
            return e.nodeType ? e[this.expando] = n : Object.defineProperty(e, this.expando, {
                value: n,
                writable: !0,
                configurable: !0
            }), e[this.expando];
        },
        cache: function(e) {
            if (!ge(e)) return {};
            var t = e[this.expando];
            return t || (t = {}, ge(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t;
        },
        set: function(e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t) r[t] = n; else for (i in t) r[i] = t[i];
            return r;
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t];
        },
        access: function(e, t, n) {
            var i;
            return void 0 === t || t && "string" == typeof t && void 0 === n ? void 0 !== (i = this.get(e, t)) ? i : this.get(e, Q.camelCase(t)) : (this.set(e, t, n), 
            void 0 !== n ? n : t);
        },
        remove: function(e, t) {
            var n, i, r, o = e[this.expando];
            if (void 0 !== o) {
                if (void 0 === t) this.register(e); else {
                    Q.isArray(t) ? i = t.concat(t.map(Q.camelCase)) : (r = Q.camelCase(t), t in o ? i = [ t, r ] : (i = r, 
                    i = i in o ? [ i ] : i.match(pe) || [])), n = i.length;
                    for (;n--; ) delete o[i[n]];
                }
                (void 0 === t || Q.isEmptyObject(o)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !Q.isEmptyObject(t);
        }
    };
    var ye = new s(), be = new s(), _e = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, we = /[A-Z]/g;
    Q.extend({
        hasData: function(e) {
            return be.hasData(e) || ye.hasData(e);
        },
        data: function(e, t, n) {
            return be.access(e, t, n);
        },
        removeData: function(e, t) {
            be.remove(e, t);
        },
        _data: function(e, t, n) {
            return ye.access(e, t, n);
        },
        _removeData: function(e, t) {
            ye.remove(e, t);
        }
    }), Q.fn.extend({
        data: function(e, t) {
            var n, i, r, o = this[0], s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (r = be.get(o), 1 === o.nodeType && !ye.get(o, "hasDataAttrs"))) {
                    for (n = s.length; n--; ) s[n] && 0 === (i = s[n].name).indexOf("data-") && (i = Q.camelCase(i.slice(5)), 
                    a(o, i, r[i]));
                    ye.set(o, "hasDataAttrs", !0);
                }
                return r;
            }
            return "object" == typeof e ? this.each(function() {
                be.set(this, e);
            }) : ve(this, function(t) {
                var n, i;
                if (o && void 0 === t) {
                    if (void 0 !== (n = be.get(o, e) || be.get(o, e.replace(we, "-$&").toLowerCase()))) return n;
                    if (i = Q.camelCase(e), void 0 !== (n = be.get(o, i))) return n;
                    if (void 0 !== (n = a(o, i, void 0))) return n;
                } else i = Q.camelCase(e), this.each(function() {
                    var n = be.get(this, i);
                    be.set(this, i, t), e.indexOf("-") > -1 && void 0 !== n && be.set(this, e, t);
                });
            }, null, t, arguments.length > 1, null, !0);
        },
        removeData: function(e) {
            return this.each(function() {
                be.remove(this, e);
            });
        }
    }), Q.extend({
        queue: function(e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = ye.get(e, t), n && (!i || Q.isArray(n) ? i = ye.access(e, t, Q.makeArray(n)) : i.push(n)), 
            i || []) : void 0;
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = Q.queue(e, t), i = n.length, r = n.shift(), o = Q._queueHooks(e, t);
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, 
            r.call(e, function() {
                Q.dequeue(e, t);
            }, o)), !i && o && o.empty.fire();
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return ye.get(e, n) || ye.access(e, n, {
                empty: Q.Callbacks("once memory").add(function() {
                    ye.remove(e, [ t + "queue", n ]);
                })
            });
        }
    }), Q.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? Q.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = Q.queue(this, e, t);
                Q._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && Q.dequeue(this, e);
            });
        },
        dequeue: function(e) {
            return this.each(function() {
                Q.dequeue(this, e);
            });
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", []);
        },
        promise: function(e, t) {
            var n, i = 1, r = Q.Deferred(), o = this, s = this.length, a = function() {
                --i || r.resolveWith(o, [ o ]);
            };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--; ) (n = ye.get(o[s], e + "queueHooks")) && n.empty && (i++, 
            n.empty.add(a));
            return a(), r.promise(t);
        }
    });
    var xe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Ce = new RegExp("^(?:([+-])=|)(" + xe + ")([a-z%]*)$", "i"), ke = [ "Top", "Right", "Bottom", "Left" ], Te = function(e, t) {
        return e = t || e, "none" === Q.css(e, "display") || !Q.contains(e.ownerDocument, e);
    }, Se = /^(?:checkbox|radio)$/i, Ee = /<([\w:-]+)/, Ae = /^$|\/(?:java|ecma)script/i, Oe = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    Oe.optgroup = Oe.option, Oe.tbody = Oe.tfoot = Oe.colgroup = Oe.caption = Oe.thead, Oe.th = Oe.td;
    var Ne = /<|&#?\w+;/;
    !function() {
        var e = z.createDocumentFragment().appendChild(z.createElement("div")), t = z.createElement("input");
        t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), 
        e.appendChild(t), K.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", 
        K.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue;
    }();
    var Pe = /^key/, Ie = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, je = /^([^.]*)(?:\.(.+)|)/;
    Q.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var o, s, a, l, u, c, f, h, d, p, m, v = ye.get(e);
            if (v) for (n.handler && (o = n, n = o.handler, r = o.selector), n.guid || (n.guid = Q.guid++), (l = v.events) || (l = v.events = {}), 
            (s = v.handle) || (s = v.handle = function(t) {
                return void 0 !== Q && Q.event.triggered !== t.type ? Q.event.dispatch.apply(e, arguments) : void 0;
            }), u = (t = (t || "").match(pe) || [ "" ]).length; u--; ) a = je.exec(t[u]) || [], d = m = a[1], p = (a[2] || "").split(".").sort(), 
            d && (f = Q.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, f = Q.event.special[d] || {}, 
            c = Q.extend({
                type: d,
                origType: m,
                data: i,
                handler: n,
                guid: n.guid,
                selector: r,
                needsContext: r && Q.expr.match.needsContext.test(r),
                namespace: p.join(".")
            }, o), (h = l[d]) || (h = l[d] = [], h.delegateCount = 0, f.setup && !1 !== f.setup.call(e, i, p, s) || e.addEventListener && e.addEventListener(d, s)), 
            f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, c) : h.push(c), 
            Q.event.global[d] = !0);
        },
        remove: function(e, t, n, i, r) {
            var o, s, a, l, u, c, f, h, d, p, m, v = ye.hasData(e) && ye.get(e);
            if (v && (l = v.events)) {
                for (u = (t = (t || "").match(pe) || [ "" ]).length; u--; ) if (a = je.exec(t[u]) || [], d = m = a[1], 
                p = (a[2] || "").split(".").sort(), d) {
                    for (f = Q.event.special[d] || {}, h = l[d = (i ? f.delegateType : f.bindType) || d] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), 
                    s = o = h.length; o--; ) c = h[o], !r && m !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (h.splice(o, 1), 
                    c.selector && h.delegateCount--, f.remove && f.remove.call(e, c));
                    s && !h.length && (f.teardown && !1 !== f.teardown.call(e, p, v.handle) || Q.removeEvent(e, d, v.handle), 
                    delete l[d]);
                } else for (d in l) Q.event.remove(e, d + t[u], n, i, !0);
                Q.isEmptyObject(l) && ye.remove(e, "handle events");
            }
        },
        dispatch: function(e) {
            e = Q.event.fix(e);
            var t, n, i, r, o, s = [], a = U.call(arguments), l = (ye.get(this, "events") || {})[e.type] || [], u = Q.event.special[e.type] || {};
            if (a[0] = e, e.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
                for (s = Q.event.handlers.call(this, e, l), t = 0; (r = s[t++]) && !e.isPropagationStopped(); ) for (e.currentTarget = r.elem, 
                n = 0; (o = r.handlers[n++]) && !e.isImmediatePropagationStopped(); ) e.rnamespace && !e.rnamespace.test(o.namespace) || (e.handleObj = o, 
                e.data = o.data, void 0 !== (i = ((Q.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a)) && !1 === (e.result = i) && (e.preventDefault(), 
                e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e), e.result;
            }
        },
        handlers: function(e, t) {
            var n, i, r, o, s = [], a = t.delegateCount, l = e.target;
            if (a && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1)) for (;l !== this; l = l.parentNode || this) if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                for (i = [], n = 0; a > n; n++) o = t[n], r = o.selector + " ", void 0 === i[r] && (i[r] = o.needsContext ? Q(r, this).index(l) > -1 : Q.find(r, this, null, [ l ]).length), 
                i[r] && i.push(o);
                i.length && s.push({
                    elem: l,
                    handlers: i
                });
            }
            return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }), s;
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
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, i, r, o = t.button;
                return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || z, i = n.documentElement, 
                r = n.body, e.pageX = t.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), 
                e.pageY = t.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), 
                e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e;
            }
        },
        fix: function(e) {
            if (e[Q.expando]) return e;
            var t, n, i, r = e.type, o = e, s = this.fixHooks[r];
            for (s || (this.fixHooks[r] = s = Ie.test(r) ? this.mouseHooks : Pe.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, 
            e = new Q.Event(o), t = i.length; t--; ) n = i[t], e[n] = o[n];
            return e.target || (e.target = z), 3 === e.target.nodeType && (e.target = e.target.parentNode), s.filter ? s.filter(e, o) : e;
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== p() && this.focus ? (this.focus(), !1) : void 0;
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === p() && this.blur ? (this.blur(), !1) : void 0;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && Q.nodeName(this, "input") ? (this.click(), !1) : void 0;
                },
                _default: function(e) {
                    return Q.nodeName(e.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                }
            }
        }
    }, Q.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
    }, Q.Event = function(e, t) {
        return this instanceof Q.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? h : d) : this.type = e, 
        t && Q.extend(this, t), this.timeStamp = e && e.timeStamp || Q.now(), void (this[Q.expando] = !0)) : new Q.Event(e, t);
    }, Q.Event.prototype = {
        constructor: Q.Event,
        isDefaultPrevented: d,
        isPropagationStopped: d,
        isImmediatePropagationStopped: d,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = h, e && e.preventDefault();
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = h, e && e.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = h, e && e.stopImmediatePropagation(), this.stopPropagation();
        }
    }, Q.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        Q.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = e.relatedTarget, r = e.handleObj;
                return i && (i === this || Q.contains(this, i)) || (e.type = r.origType, n = r.handler.apply(this, arguments), 
                e.type = t), n;
            }
        };
    }), Q.fn.extend({
        on: function(e, t, n, i) {
            return m(this, e, t, n, i);
        },
        one: function(e, t, n, i) {
            return m(this, e, t, n, i, 1);
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, Q(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), 
            this;
            if ("object" == typeof e) {
                for (r in e) this.off(r, t, e[r]);
                return this;
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = d), this.each(function() {
                Q.event.remove(this, e, n, t);
            });
        }
    });
    var De = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi, $e = /<script|<style|<link/i, Me = /checked\s*(?:[^=]|=\s*.checked.)/i, He = /^true\/(.*)/, Le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    Q.extend({
        htmlPrefilter: function(e) {
            return e.replace(De, "<$1></$2>");
        },
        clone: function(e, t, n) {
            var i, r, o, s, a = e.cloneNode(!0), l = Q.contains(e.ownerDocument, e);
            if (!(K.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || Q.isXMLDoc(e))) for (s = u(a), o = u(e), 
            i = 0, r = o.length; r > i; i++) _(o[i], s[i]);
            if (t) if (n) for (o = o || u(e), s = s || u(a), i = 0, r = o.length; r > i; i++) b(o[i], s[i]); else b(e, a);
            return (s = u(a, "script")).length > 0 && c(s, !l && u(e, "script")), a;
        },
        cleanData: function(e) {
            for (var t, n, i, r = Q.event.special, o = 0; void 0 !== (n = e[o]); o++) if (ge(n)) {
                if (t = n[ye.expando]) {
                    if (t.events) for (i in t.events) r[i] ? Q.event.remove(n, i) : Q.removeEvent(n, i, t.handle);
                    n[ye.expando] = void 0;
                }
                n[be.expando] && (n[be.expando] = void 0);
            }
        }
    }), Q.fn.extend({
        domManip: w,
        detach: function(e) {
            return x(this, e, !0);
        },
        remove: function(e) {
            return x(this, e);
        },
        text: function(e) {
            return ve(this, function(e) {
                return void 0 === e ? Q.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
                });
            }, null, e, arguments.length);
        },
        append: function() {
            return w(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    v(this, e).appendChild(e);
                }
            });
        },
        prepend: function() {
            return w(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = v(this, e);
                    t.insertBefore(e, t.firstChild);
                }
            });
        },
        before: function() {
            return w(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
            });
        },
        after: function() {
            return w(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
            });
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (Q.cleanData(u(e, !1)), e.textContent = "");
            return this;
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return Q.clone(this, e, t);
            });
        },
        html: function(e) {
            return ve(this, function(e) {
                var t = this[0] || {}, n = 0, i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !$e.test(e) && !Oe[(Ee.exec(e) || [ "", "" ])[1].toLowerCase()]) {
                    e = Q.htmlPrefilter(e);
                    try {
                        for (;i > n; n++) 1 === (t = this[n] || {}).nodeType && (Q.cleanData(u(t, !1)), t.innerHTML = e);
                        t = 0;
                    } catch (e) {}
                }
                t && this.empty().append(e);
            }, null, e, arguments.length);
        },
        replaceWith: function() {
            var e = [];
            return w(this, arguments, function(t) {
                var n = this.parentNode;
                Q.inArray(this, e) < 0 && (Q.cleanData(u(this)), n && n.replaceChild(t, this));
            }, e);
        }
    }), Q.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        Q.fn[e] = function(e) {
            for (var n, i = [], r = Q(e), o = r.length - 1, s = 0; o >= s; s++) n = s === o ? this : this.clone(!0), 
            Q(r[s])[t](n), X.apply(i, n.get());
            return this.pushStack(i);
        };
    });
    var Fe, Re = {
        HTML: "block",
        BODY: "block"
    }, We = /^margin/, qe = new RegExp("^(" + xe + ")(?!px)[a-z%]+$", "i"), Be = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e), n.getComputedStyle(t);
    }, ze = function(e, t, n, i) {
        var r, o, s = {};
        for (o in t) s[o] = e.style[o], e.style[o] = t[o];
        r = n.apply(e, i || []);
        for (o in t) e.style[o] = s[o];
        return r;
    }, Ue = z.documentElement;
    !function() {
        var t, n, i, r, o = z.createElement("div"), s = z.createElement("div");
        if (s.style) {
            s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", K.clearCloneStyle = "content-box" === s.style.backgroundClip, 
            o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", 
            o.appendChild(s);
            function a() {
                s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", 
                s.innerHTML = "", Ue.appendChild(o);
                var a = e.getComputedStyle(s);
                t = "1%" !== a.top, r = "2px" === a.marginLeft, n = "4px" === a.width, s.style.marginRight = "50%", 
                i = "4px" === a.marginRight, Ue.removeChild(o);
            }
            Q.extend(K, {
                pixelPosition: function() {
                    return a(), t;
                },
                boxSizingReliable: function() {
                    return null == n && a(), n;
                },
                pixelMarginRight: function() {
                    return null == n && a(), i;
                },
                reliableMarginLeft: function() {
                    return null == n && a(), r;
                },
                reliableMarginRight: function() {
                    var t, n = s.appendChild(z.createElement("div"));
                    return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", 
                    n.style.marginRight = n.style.width = "0", s.style.width = "1px", Ue.appendChild(o), t = !parseFloat(e.getComputedStyle(n).marginRight), 
                    Ue.removeChild(o), s.removeChild(n), t;
                }
            });
        }
    }();
    var Ve = /^(none|table(?!-c[ea]).+)/, Xe = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Ye = {
        letterSpacing: "0",
        fontWeight: "400"
    }, Je = [ "Webkit", "O", "Moz", "ms" ], Ge = z.createElement("div").style;
    Q.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = T(e, "opacity");
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
            float: "cssFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, o, s, a = Q.camelCase(t), u = e.style;
                return t = Q.cssProps[a] || (Q.cssProps[a] = E(a) || a), s = Q.cssHooks[t] || Q.cssHooks[a], void 0 === n ? s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : u[t] : ("string" === (o = typeof n) && (r = Ce.exec(n)) && r[1] && (n = l(e, t, r), 
                o = "number"), void (null != n && n == n && ("number" === o && (n += r && r[3] || (Q.cssNumber[a] ? "" : "px")), 
                K.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (u[t] = n))));
            }
        },
        css: function(e, t, n, i) {
            var r, o, s, a = Q.camelCase(t);
            return t = Q.cssProps[a] || (Q.cssProps[a] = E(a) || a), (s = Q.cssHooks[t] || Q.cssHooks[a]) && "get" in s && (r = s.get(e, !0, n)), 
            void 0 === r && (r = T(e, t, i)), "normal" === r && t in Ye && (r = Ye[t]), "" === n || n ? (o = parseFloat(r), 
            !0 === n || isFinite(o) ? o || 0 : r) : r;
        }
    }), Q.each([ "height", "width" ], function(e, t) {
        Q.cssHooks[t] = {
            get: function(e, n, i) {
                return n ? Ve.test(Q.css(e, "display")) && 0 === e.offsetWidth ? ze(e, Xe, function() {
                    return N(e, t, i);
                }) : N(e, t, i) : void 0;
            },
            set: function(e, n, i) {
                var r, o = i && Be(e), s = i && O(e, t, i, "border-box" === Q.css(e, "boxSizing", !1, o), o);
                return s && (r = Ce.exec(n)) && "px" !== (r[3] || "px") && (e.style[t] = n, n = Q.css(e, t)), A(0, n, s);
            }
        };
    }), Q.cssHooks.marginLeft = S(K.reliableMarginLeft, function(e, t) {
        return t ? (parseFloat(T(e, "marginLeft")) || e.getBoundingClientRect().left - ze(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left;
        })) + "px" : void 0;
    }), Q.cssHooks.marginRight = S(K.reliableMarginRight, function(e, t) {
        return t ? ze(e, {
            display: "inline-block"
        }, T, [ e, "marginRight" ]) : void 0;
    }), Q.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        Q.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [ n ]; 4 > i; i++) r[e + ke[i] + t] = o[i] || o[i - 2] || o[0];
                return r;
            }
        }, We.test(e) || (Q.cssHooks[e + t].set = A);
    }), Q.fn.extend({
        css: function(e, t) {
            return ve(this, function(e, t, n) {
                var i, r, o = {}, s = 0;
                if (Q.isArray(t)) {
                    for (i = Be(e), r = t.length; r > s; s++) o[t[s]] = Q.css(e, t[s], !1, i);
                    return o;
                }
                return void 0 !== n ? Q.style(e, t, n) : Q.css(e, t);
            }, e, t, arguments.length > 1);
        },
        show: function() {
            return P(this, !0);
        },
        hide: function() {
            return P(this);
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Te(this) ? Q(this).show() : Q(this).hide();
            });
        }
    }), Q.Tween = I, (I.prototype = {
        constructor: I,
        init: function(e, t, n, i, r, o) {
            this.elem = e, this.prop = n, this.easing = r || Q.easing._default, this.options = t, this.start = this.now = this.cur(), 
            this.end = i, this.unit = o || (Q.cssNumber[n] ? "" : "px");
        },
        cur: function() {
            var e = I.propHooks[this.prop];
            return e && e.get ? e.get(this) : I.propHooks._default.get(this);
        },
        run: function(e) {
            var t, n = I.propHooks[this.prop];
            return this.options.duration ? this.pos = t = Q.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, 
            this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            n && n.set ? n.set(this) : I.propHooks._default.set(this), this;
        }
    }).init.prototype = I.prototype, (I.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = Q.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
            },
            set: function(e) {
                Q.fx.step[e.prop] ? Q.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[Q.cssProps[e.prop]] && !Q.cssHooks[e.prop] ? e.elem[e.prop] = e.now : Q.style(e.elem, e.prop, e.now + e.unit);
            }
        }
    }).scrollTop = I.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
    }, Q.easing = {
        linear: function(e) {
            return e;
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2;
        },
        _default: "swing"
    }, Q.fx = I.prototype.init, Q.fx.step = {};
    var Ze, Ke, Qe = /^(?:toggle|show|hide)$/, et = /queueHooks$/;
    Q.Animation = Q.extend(M, {
        tweeners: {
            "*": [ function(e, t) {
                var n = this.createTween(e, t);
                return l(n.elem, e, Ce.exec(t), n), n;
            } ]
        },
        tweener: function(e, t) {
            Q.isFunction(e) ? (t = e, e = [ "*" ]) : e = e.match(pe);
            for (var n, i = 0, r = e.length; r > i; i++) n = e[i], M.tweeners[n] = M.tweeners[n] || [], M.tweeners[n].unshift(t);
        },
        prefilters: [ function(e, t, n) {
            var i, r, o, s, a, l, u, c = this, f = {}, h = e.style, d = e.nodeType && Te(e), p = ye.get(e, "fxshow");
            n.queue || (null == (a = Q._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                a.unqueued || l();
            }), a.unqueued++, c.always(function() {
                c.always(function() {
                    a.unqueued--, Q.queue(e, "fx").length || a.empty.fire();
                });
            })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [ h.overflow, h.overflowX, h.overflowY ], 
            "inline" === ("none" === (u = Q.css(e, "display")) ? ye.get(e, "olddisplay") || k(e.nodeName) : u) && "none" === Q.css(e, "float") && (h.display = "inline-block")), 
            n.overflow && (h.overflow = "hidden", c.always(function() {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
            }));
            for (i in t) if (r = t[i], Qe.exec(r)) {
                if (delete t[i], o = o || "toggle" === r, r === (d ? "hide" : "show")) {
                    if ("show" !== r || !p || void 0 === p[i]) continue;
                    d = !0;
                }
                f[i] = p && p[i] || Q.style(e, i);
            } else u = void 0;
            if (Q.isEmptyObject(f)) "inline" === ("none" === u ? k(e.nodeName) : u) && (h.display = u); else {
                p ? "hidden" in p && (d = p.hidden) : p = ye.access(e, "fxshow", {}), o && (p.hidden = !d), d ? Q(e).show() : c.done(function() {
                    Q(e).hide();
                }), c.done(function() {
                    var t;
                    ye.remove(e, "fxshow");
                    for (t in f) Q.style(e, t, f[t]);
                });
                for (i in f) s = $(d ? p[i] : 0, i, c), i in p || (p[i] = s.start, d && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0));
            }
        } ],
        prefilter: function(e, t) {
            t ? M.prefilters.unshift(e) : M.prefilters.push(e);
        }
    }), Q.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? Q.extend({}, e) : {
            complete: n || !n && t || Q.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !Q.isFunction(t) && t
        };
        return i.duration = Q.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in Q.fx.speeds ? Q.fx.speeds[i.duration] : Q.fx.speeds._default, 
        null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            Q.isFunction(i.old) && i.old.call(this), i.queue && Q.dequeue(this, i.queue);
        }, i;
    }, Q.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(Te).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i);
        },
        animate: function(e, t, n, i) {
            var r = Q.isEmptyObject(e), o = Q.speed(t, n, i), s = function() {
                var t = M(this, Q.extend({}, e), o);
                (r || ye.get(this, "finish")) && t.stop(!0);
            };
            return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s);
        },
        stop: function(e, t, n) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop, t(n);
            };
            return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), 
            this.each(function() {
                var t = !0, r = null != e && e + "queueHooks", o = Q.timers, s = ye.get(this);
                if (r) s[r] && s[r].stop && i(s[r]); else for (r in s) s[r] && s[r].stop && et.test(r) && i(s[r]);
                for (r = o.length; r--; ) o[r].elem !== this || null != e && o[r].queue !== e || (o[r].anim.stop(n), 
                t = !1, o.splice(r, 1));
                !t && n || Q.dequeue(this, e);
            });
        },
        finish: function(e) {
            return !1 !== e && (e = e || "fx"), this.each(function() {
                var t, n = ye.get(this), i = n[e + "queue"], r = n[e + "queueHooks"], o = Q.timers, s = i ? i.length : 0;
                for (n.finish = !0, Q.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--; ) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), 
                o.splice(t, 1));
                for (t = 0; s > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish;
            });
        }
    }), Q.each([ "toggle", "show", "hide" ], function(e, t) {
        var n = Q.fn[t];
        Q.fn[t] = function(e, i, r) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(D(t, !0), e, i, r);
        };
    }), Q.each({
        slideDown: D("show"),
        slideUp: D("hide"),
        slideToggle: D("toggle"),
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
        Q.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i);
        };
    }), Q.timers = [], Q.fx.tick = function() {
        var e, t = 0, n = Q.timers;
        for (Ze = Q.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || Q.fx.stop(), Ze = void 0;
    }, Q.fx.timer = function(e) {
        Q.timers.push(e), e() ? Q.fx.start() : Q.timers.pop();
    }, Q.fx.interval = 13, Q.fx.start = function() {
        Ke || (Ke = e.setInterval(Q.fx.tick, Q.fx.interval));
    }, Q.fx.stop = function() {
        e.clearInterval(Ke), Ke = null;
    }, Q.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, Q.fn.delay = function(t, n) {
        return t = Q.fx ? Q.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, i) {
            var r = e.setTimeout(n, t);
            i.stop = function() {
                e.clearTimeout(r);
            };
        });
    }, function() {
        var e = z.createElement("input"), t = z.createElement("select"), n = t.appendChild(z.createElement("option"));
        e.type = "checkbox", K.checkOn = "" !== e.value, K.optSelected = n.selected, t.disabled = !0, K.optDisabled = !n.disabled, 
        (e = z.createElement("input")).value = "t", e.type = "radio", K.radioValue = "t" === e.value;
    }();
    var tt, nt = Q.expr.attrHandle;
    Q.fn.extend({
        attr: function(e, t) {
            return ve(this, Q.attr, e, t, arguments.length > 1);
        },
        removeAttr: function(e) {
            return this.each(function() {
                Q.removeAttr(this, e);
            });
        }
    }), Q.extend({
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? Q.prop(e, t, n) : (1 === o && Q.isXMLDoc(e) || (t = t.toLowerCase(), 
            r = Q.attrHooks[t] || (Q.expr.match.bool.test(t) ? tt : void 0)), void 0 !== n ? null === n ? void Q.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), 
            n) : r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = Q.find.attr(e, t)) ? void 0 : i);
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!K.radioValue && "radio" === t && Q.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i, r = 0, o = t && t.match(pe);
            if (o && 1 === e.nodeType) for (;n = o[r++]; ) i = Q.propFix[n] || n, Q.expr.match.bool.test(n) && (e[i] = !1), 
            e.removeAttribute(n);
        }
    }), tt = {
        set: function(e, t, n) {
            return !1 === t ? Q.removeAttr(e, n) : e.setAttribute(n, n), n;
        }
    }, Q.each(Q.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = nt[t] || Q.find.attr;
        nt[t] = function(e, t, i) {
            var r, o;
            return i || (o = nt[t], nt[t] = r, r = null != n(e, t, i) ? t.toLowerCase() : null, nt[t] = o), r;
        };
    });
    var it = /^(?:input|select|textarea|button)$/i, rt = /^(?:a|area)$/i;
    Q.fn.extend({
        prop: function(e, t) {
            return ve(this, Q.prop, e, t, arguments.length > 1);
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[Q.propFix[e] || e];
            });
        }
    }), Q.extend({
        prop: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && Q.isXMLDoc(e) || (t = Q.propFix[t] || t, r = Q.propHooks[t]), 
            void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t];
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = Q.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : it.test(e.nodeName) || rt.test(e.nodeName) && e.href ? 0 : -1;
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), K.optSelected || (Q.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        }
    }), Q.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        Q.propFix[this.toLowerCase()] = this;
    });
    var ot = /[\t\r\n\f]/g;
    Q.fn.extend({
        addClass: function(e) {
            var t, n, i, r, o, s, a, l = 0;
            if (Q.isFunction(e)) return this.each(function(t) {
                Q(this).addClass(e.call(this, t, H(this)));
            });
            if ("string" == typeof e && e) for (t = e.match(pe) || []; n = this[l++]; ) if (r = H(n), i = 1 === n.nodeType && (" " + r + " ").replace(ot, " ")) {
                for (s = 0; o = t[s++]; ) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                r !== (a = Q.trim(i)) && n.setAttribute("class", a);
            }
            return this;
        },
        removeClass: function(e) {
            var t, n, i, r, o, s, a, l = 0;
            if (Q.isFunction(e)) return this.each(function(t) {
                Q(this).removeClass(e.call(this, t, H(this)));
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e) for (t = e.match(pe) || []; n = this[l++]; ) if (r = H(n), i = 1 === n.nodeType && (" " + r + " ").replace(ot, " ")) {
                for (s = 0; o = t[s++]; ) for (;i.indexOf(" " + o + " ") > -1; ) i = i.replace(" " + o + " ", " ");
                r !== (a = Q.trim(i)) && n.setAttribute("class", a);
            }
            return this;
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : Q.isFunction(e) ? this.each(function(n) {
                Q(this).toggleClass(e.call(this, n, H(this), t), t);
            }) : this.each(function() {
                var t, i, r, o;
                if ("string" === n) for (i = 0, r = Q(this), o = e.match(pe) || []; t = o[i++]; ) r.hasClass(t) ? r.removeClass(t) : r.addClass(t); else void 0 !== e && "boolean" !== n || ((t = H(this)) && ye.set(this, "__className__", t), 
                this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : ye.get(this, "__className__") || ""));
            });
        },
        hasClass: function(e) {
            var t, n, i = 0;
            for (t = " " + e + " "; n = this[i++]; ) if (1 === n.nodeType && (" " + H(n) + " ").replace(ot, " ").indexOf(t) > -1) return !0;
            return !1;
        }
    });
    var st = /\r/g, at = /[\x20\t\r\n\f]+/g;
    Q.fn.extend({
        val: function(e) {
            var t, n, i, r = this[0];
            return arguments.length ? (i = Q.isFunction(e), this.each(function(n) {
                var r;
                1 === this.nodeType && (null == (r = i ? e.call(this, n, Q(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : Q.isArray(r) && (r = Q.map(r, function(e) {
                    return null == e ? "" : e + "";
                })), (t = Q.valHooks[this.type] || Q.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r));
            })) : r ? (t = Q.valHooks[r.type] || Q.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(st, "") : null == n ? "" : n : void 0;
        }
    }), Q.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = Q.find.attr(e, "value");
                    return null != t ? t : Q.trim(Q.text(e)).replace(at, " ");
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || 0 > r, s = o ? null : [], a = o ? r + 1 : i.length, l = 0 > r ? a : o ? r : 0; a > l; l++) if (((n = i[l]).selected || l === r) && (K.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !Q.nodeName(n.parentNode, "optgroup"))) {
                        if (t = Q(n).val(), o) return t;
                        s.push(t);
                    }
                    return s;
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, o = Q.makeArray(t), s = r.length; s--; ) i = r[s], (i.selected = Q.inArray(Q.valHooks.option.get(i), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o;
                }
            }
        }
    }), Q.each([ "radio", "checkbox" ], function() {
        Q.valHooks[this] = {
            set: function(e, t) {
                return Q.isArray(t) ? e.checked = Q.inArray(Q(e).val(), t) > -1 : void 0;
            }
        }, K.checkOn || (Q.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value;
        });
    });
    var lt = /^(?:focusinfocus|focusoutblur)$/;
    Q.extend(Q.event, {
        trigger: function(t, n, i, r) {
            var o, s, a, l, u, c, f, h = [ i || z ], d = Z.call(t, "type") ? t.type : t, p = Z.call(t, "namespace") ? t.namespace.split(".") : [];
            if (s = a = i = i || z, 3 !== i.nodeType && 8 !== i.nodeType && !lt.test(d + Q.event.triggered) && (d.indexOf(".") > -1 && (p = d.split("."), 
            d = p.shift(), p.sort()), u = d.indexOf(":") < 0 && "on" + d, t = t[Q.expando] ? t : new Q.Event(d, "object" == typeof t && t), 
            t.isTrigger = r ? 2 : 3, t.namespace = p.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            t.result = void 0, t.target || (t.target = i), n = null == n ? [ t ] : Q.makeArray(n, [ t ]), f = Q.event.special[d] || {}, 
            r || !f.trigger || !1 !== f.trigger.apply(i, n))) {
                if (!r && !f.noBubble && !Q.isWindow(i)) {
                    for (l = f.delegateType || d, lt.test(l + d) || (s = s.parentNode); s; s = s.parentNode) h.push(s), 
                    a = s;
                    a === (i.ownerDocument || z) && h.push(a.defaultView || a.parentWindow || e);
                }
                for (o = 0; (s = h[o++]) && !t.isPropagationStopped(); ) t.type = o > 1 ? l : f.bindType || d, (c = (ye.get(s, "events") || {})[t.type] && ye.get(s, "handle")) && c.apply(s, n), 
                (c = u && s[u]) && c.apply && ge(s) && (t.result = c.apply(s, n), !1 === t.result && t.preventDefault());
                return t.type = d, r || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(h.pop(), n) || !ge(i) || u && Q.isFunction(i[d]) && !Q.isWindow(i) && ((a = i[u]) && (i[u] = null), 
                Q.event.triggered = d, i[d](), Q.event.triggered = void 0, a && (i[u] = a)), t.result;
            }
        },
        simulate: function(e, t, n) {
            var i = Q.extend(new Q.Event(), n, {
                type: e,
                isSimulated: !0
            });
            Q.event.trigger(i, null, t), i.isDefaultPrevented() && n.preventDefault();
        }
    }), Q.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                Q.event.trigger(e, t, this);
            });
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? Q.event.trigger(e, t, n, !0) : void 0;
        }
    }), Q.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        Q.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
        };
    }), Q.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e);
        }
    }), K.focusin = "onfocusin" in e, K.focusin || Q.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            Q.event.simulate(t, e.target, Q.event.fix(e));
        };
        Q.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this, r = ye.access(i, t);
                r || i.addEventListener(e, n, !0), ye.access(i, t, (r || 0) + 1);
            },
            teardown: function() {
                var i = this.ownerDocument || this, r = ye.access(i, t) - 1;
                r ? ye.access(i, t, r) : (i.removeEventListener(e, n, !0), ye.remove(i, t));
            }
        };
    });
    var ut = e.location, ct = Q.now(), ft = /\?/;
    Q.parseJSON = function(e) {
        return JSON.parse(e + "");
    }, Q.parseXML = function(t) {
        var n;
        if (!t || "string" != typeof t) return null;
        try {
            n = new e.DOMParser().parseFromString(t, "text/xml");
        } catch (e) {
            n = void 0;
        }
        return n && !n.getElementsByTagName("parsererror").length || Q.error("Invalid XML: " + t), n;
    };
    var ht = /#.*$/, dt = /([?&])_=[^&]*/, pt = /^(.*?):[ \t]*([^\r\n]*)$/gm, mt = /^(?:GET|HEAD)$/, vt = /^\/\//, gt = {}, yt = {}, bt = "*/".concat("*"), _t = z.createElement("a");
    _t.href = ut.href, Q.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ut.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ut.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": bt,
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
                "text json": Q.parseJSON,
                "text xml": Q.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? R(R(e, Q.ajaxSettings), t) : R(Q.ajaxSettings, e);
        },
        ajaxPrefilter: L(gt),
        ajaxTransport: L(yt),
        ajax: function(t, n) {
            function i(t, n, i, a) {
                var u, f, y, b, w, C = n;
                2 !== _ && (_ = 2, l && e.clearTimeout(l), r = void 0, s = a || "", x.readyState = t > 0 ? 4 : 0, u = t >= 200 && 300 > t || 304 === t, 
                i && (b = function(e, t, n) {
                    for (var i, r, o, s, a = e.contents, l = e.dataTypes; "*" === l[0]; ) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i) for (r in a) if (a[r] && a[r].test(i)) {
                        l.unshift(r);
                        break;
                    }
                    if (l[0] in n) o = l[0]; else {
                        for (r in n) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                                o = r;
                                break;
                            }
                            s || (s = r);
                        }
                        o = o || s;
                    }
                    return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0;
                }(h, x, i)), b = function(e, t, n, i) {
                    var r, o, s, a, l, u = {}, c = e.dataTypes.slice();
                    if (c[1]) for (s in e.converters) u[s.toLowerCase()] = e.converters[s];
                    for (o = c.shift(); o; ) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), 
                    l = o, o = c.shift()) if ("*" === o) o = l; else if ("*" !== l && l !== o) {
                        if (!(s = u[l + " " + o] || u["* " + o])) for (r in u) if ((a = r.split(" "))[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                            !0 === s ? s = u[r] : !0 !== u[r] && (o = a[0], c.unshift(a[1]));
                            break;
                        }
                        if (!0 !== s) if (s && e.throws) t = s(t); else try {
                            t = s(t);
                        } catch (e) {
                            return {
                                state: "parsererror",
                                error: s ? e : "No conversion from " + l + " to " + o
                            };
                        }
                    }
                    return {
                        state: "success",
                        data: t
                    };
                }(h, b, x, u), u ? (h.ifModified && ((w = x.getResponseHeader("Last-Modified")) && (Q.lastModified[o] = w), 
                (w = x.getResponseHeader("etag")) && (Q.etag[o] = w)), 204 === t || "HEAD" === h.type ? C = "nocontent" : 304 === t ? C = "notmodified" : (C = b.state, 
                f = b.data, y = b.error, u = !y)) : (y = C, !t && C || (C = "error", 0 > t && (t = 0))), x.status = t, 
                x.statusText = (n || C) + "", u ? m.resolveWith(d, [ f, C, x ]) : m.rejectWith(d, [ x, C, y ]), x.statusCode(g), 
                g = void 0, c && p.trigger(u ? "ajaxSuccess" : "ajaxError", [ x, h, u ? f : y ]), v.fireWith(d, [ x, C ]), 
                c && (p.trigger("ajaxComplete", [ x, h ]), --Q.active || Q.event.trigger("ajaxStop")));
            }
            "object" == typeof t && (n = t, t = void 0), n = n || {};
            var r, o, s, a, l, u, c, f, h = Q.ajaxSetup({}, n), d = h.context || h, p = h.context && (d.nodeType || d.jquery) ? Q(d) : Q.event, m = Q.Deferred(), v = Q.Callbacks("once memory"), g = h.statusCode || {}, y = {}, b = {}, _ = 0, w = "canceled", x = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === _) {
                        if (!a) for (a = {}; t = pt.exec(s); ) a[t[1].toLowerCase()] = t[2];
                        t = a[e.toLowerCase()];
                    }
                    return null == t ? null : t;
                },
                getAllResponseHeaders: function() {
                    return 2 === _ ? s : null;
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return _ || (e = b[n] = b[n] || e, y[e] = t), this;
                },
                overrideMimeType: function(e) {
                    return _ || (h.mimeType = e), this;
                },
                statusCode: function(e) {
                    var t;
                    if (e) if (2 > _) for (t in e) g[t] = [ g[t], e[t] ]; else x.always(e[x.status]);
                    return this;
                },
                abort: function(e) {
                    var t = e || w;
                    return r && r.abort(t), i(0, t), this;
                }
            };
            if (m.promise(x).complete = v.add, x.success = x.done, x.error = x.fail, h.url = ((t || h.url || ut.href) + "").replace(ht, "").replace(vt, ut.protocol + "//"), 
            h.type = n.method || n.type || h.method || h.type, h.dataTypes = Q.trim(h.dataType || "*").toLowerCase().match(pe) || [ "" ], 
            null == h.crossDomain) {
                u = z.createElement("a");
                try {
                    u.href = h.url, u.href = u.href, h.crossDomain = _t.protocol + "//" + _t.host != u.protocol + "//" + u.host;
                } catch (e) {
                    h.crossDomain = !0;
                }
            }
            if (h.data && h.processData && "string" != typeof h.data && (h.data = Q.param(h.data, h.traditional)), 
            F(gt, h, n, x), 2 === _) return x;
            (c = Q.event && h.global) && 0 == Q.active++ && Q.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), 
            h.hasContent = !mt.test(h.type), o = h.url, h.hasContent || (h.data && (o = h.url += (ft.test(o) ? "&" : "?") + h.data, 
            delete h.data), !1 === h.cache && (h.url = dt.test(o) ? o.replace(dt, "$1_=" + ct++) : o + (ft.test(o) ? "&" : "?") + "_=" + ct++)), 
            h.ifModified && (Q.lastModified[o] && x.setRequestHeader("If-Modified-Since", Q.lastModified[o]), Q.etag[o] && x.setRequestHeader("If-None-Match", Q.etag[o])), 
            (h.data && h.hasContent && !1 !== h.contentType || n.contentType) && x.setRequestHeader("Content-Type", h.contentType), 
            x.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + bt + "; q=0.01" : "") : h.accepts["*"]);
            for (f in h.headers) x.setRequestHeader(f, h.headers[f]);
            if (h.beforeSend && (!1 === h.beforeSend.call(d, x, h) || 2 === _)) return x.abort();
            w = "abort";
            for (f in {
                success: 1,
                error: 1,
                complete: 1
            }) x[f](h[f]);
            if (r = F(yt, h, n, x)) {
                if (x.readyState = 1, c && p.trigger("ajaxSend", [ x, h ]), 2 === _) return x;
                h.async && h.timeout > 0 && (l = e.setTimeout(function() {
                    x.abort("timeout");
                }, h.timeout));
                try {
                    _ = 1, r.send(y, i);
                } catch (e) {
                    if (!(2 > _)) throw e;
                    i(-1, e);
                }
            } else i(-1, "No Transport");
            return x;
        },
        getJSON: function(e, t, n) {
            return Q.get(e, t, n, "json");
        },
        getScript: function(e, t) {
            return Q.get(e, void 0, t, "script");
        }
    }), Q.each([ "get", "post" ], function(e, t) {
        Q[t] = function(e, n, i, r) {
            return Q.isFunction(n) && (r = r || i, i = n, n = void 0), Q.ajax(Q.extend({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            }, Q.isPlainObject(e) && e));
        };
    }), Q._evalUrl = function(e) {
        return Q.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            throws: !0
        });
    }, Q.fn.extend({
        wrapAll: function(e) {
            var t;
            return Q.isFunction(e) ? this.each(function(t) {
                Q(this).wrapAll(e.call(this, t));
            }) : (this[0] && (t = Q(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), 
            t.map(function() {
                for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                return e;
            }).append(this)), this);
        },
        wrapInner: function(e) {
            return Q.isFunction(e) ? this.each(function(t) {
                Q(this).wrapInner(e.call(this, t));
            }) : this.each(function() {
                var t = Q(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e);
            });
        },
        wrap: function(e) {
            var t = Q.isFunction(e);
            return this.each(function(n) {
                Q(this).wrapAll(t ? e.call(this, n) : e);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                Q.nodeName(this, "body") || Q(this).replaceWith(this.childNodes);
            }).end();
        }
    }), Q.expr.filters.hidden = function(e) {
        return !Q.expr.filters.visible(e);
    }, Q.expr.filters.visible = function(e) {
        return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0;
    };
    var wt = /%20/g, xt = /\[\]$/, Ct = /\r?\n/g, kt = /^(?:submit|button|image|reset|file)$/i, Tt = /^(?:input|select|textarea|keygen)/i;
    Q.param = function(e, t) {
        var n, i = [], r = function(e, t) {
            t = Q.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
        };
        if (void 0 === t && (t = Q.ajaxSettings && Q.ajaxSettings.traditional), Q.isArray(e) || e.jquery && !Q.isPlainObject(e)) Q.each(e, function() {
            r(this.name, this.value);
        }); else for (n in e) W(n, e[n], t, r);
        return i.join("&").replace(wt, "+");
    }, Q.fn.extend({
        serialize: function() {
            return Q.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var e = Q.prop(this, "elements");
                return e ? Q.makeArray(e) : this;
            }).filter(function() {
                var e = this.type;
                return this.name && !Q(this).is(":disabled") && Tt.test(this.nodeName) && !kt.test(e) && (this.checked || !Se.test(e));
            }).map(function(e, t) {
                var n = Q(this).val();
                return null == n ? null : Q.isArray(n) ? Q.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Ct, "\r\n")
                    };
                }) : {
                    name: t.name,
                    value: n.replace(Ct, "\r\n")
                };
            }).get();
        }
    }), Q.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest();
        } catch (e) {}
    };
    var St = {
        0: 200,
        1223: 204
    }, Et = Q.ajaxSettings.xhr();
    K.cors = !!Et && "withCredentials" in Et, K.ajax = Et = !!Et, Q.ajaxTransport(function(t) {
        var n, i;
        return K.cors || Et && !t.crossDomain ? {
            send: function(r, o) {
                var s, a = t.xhr();
                if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields) for (s in t.xhrFields) a[s] = t.xhrFields[s];
                t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                for (s in r) a.setRequestHeader(s, r[s]);
                n = function(e) {
                    return function() {
                        n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === e ? a.abort() : "error" === e ? "number" != typeof a.status ? o(0, "error") : o(a.status, a.statusText) : o(St[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                            binary: a.response
                        } : {
                            text: a.responseText
                        }, a.getAllResponseHeaders()));
                    };
                }, a.onload = n(), i = a.onerror = n("error"), void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                    4 === a.readyState && e.setTimeout(function() {
                        n && i();
                    });
                }, n = n("abort");
                try {
                    a.send(t.hasContent && t.data || null);
                } catch (e) {
                    if (n) throw e;
                }
            },
            abort: function() {
                n && n();
            }
        } : void 0;
    }), Q.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return Q.globalEval(e), e;
            }
        }
    }), Q.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }), Q.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(i, r) {
                    t = Q("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove(), n = null, e && r("error" === e.type ? 404 : 200, e.type);
                    }), z.head.appendChild(t[0]);
                },
                abort: function() {
                    n && n();
                }
            };
        }
    });
    var At = [], Ot = /(=)\?(?=&|$)|\?\?/;
    Q.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = At.pop() || Q.expando + "_" + ct++;
            return this[e] = !0, e;
        }
    }), Q.ajaxPrefilter("json jsonp", function(t, n, i) {
        var r, o, s, a = !1 !== t.jsonp && (Ot.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ot.test(t.data) && "data");
        return a || "jsonp" === t.dataTypes[0] ? (r = t.jsonpCallback = Q.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, 
        a ? t[a] = t[a].replace(Ot, "$1" + r) : !1 !== t.jsonp && (t.url += (ft.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), 
        t.converters["script json"] = function() {
            return s || Q.error(r + " was not called"), s[0];
        }, t.dataTypes[0] = "json", o = e[r], e[r] = function() {
            s = arguments;
        }, i.always(function() {
            void 0 === o ? Q(e).removeProp(r) : e[r] = o, t[r] && (t.jsonpCallback = n.jsonpCallback, At.push(r)), 
            s && Q.isFunction(o) && o(s[0]), s = o = void 0;
        }), "script") : void 0;
    }), Q.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e) return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || z;
        var i = le.exec(e), r = !n && [];
        return i ? [ t.createElement(i[1]) ] : (i = f([ e ], t, r), r && r.length && Q(r).remove(), Q.merge([], i.childNodes));
    };
    var Nt = Q.fn.load;
    Q.fn.load = function(e, t, n) {
        if ("string" != typeof e && Nt) return Nt.apply(this, arguments);
        var i, r, o, s = this, a = e.indexOf(" ");
        return a > -1 && (i = Q.trim(e.slice(a)), e = e.slice(0, a)), Q.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), 
        s.length > 0 && Q.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, s.html(i ? Q("<div>").append(Q.parseHTML(e)).find(i) : e);
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, o || [ e.responseText, t, e ]);
            });
        }), this;
    }, Q.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(e, t) {
        Q.fn[t] = function(e) {
            return this.on(t, e);
        };
    }), Q.expr.filters.animated = function(e) {
        return Q.grep(Q.timers, function(t) {
            return e === t.elem;
        }).length;
    }, Q.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, s, a, l, u = Q.css(e, "position"), c = Q(e), f = {};
            "static" === u && (e.style.position = "relative"), a = c.offset(), o = Q.css(e, "top"), l = Q.css(e, "left"), 
            ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1 ? (i = c.position(), s = i.top, 
            r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), Q.isFunction(t) && (t = t.call(e, n, Q.extend({}, a))), 
            null != t.top && (f.top = t.top - a.top + s), null != t.left && (f.left = t.left - a.left + r), "using" in t ? t.using.call(e, f) : c.css(f);
        }
    }, Q.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                Q.offset.setOffset(this, e, t);
            });
            var t, n, i = this[0], r = {
                top: 0,
                left: 0
            }, o = i && i.ownerDocument;
            return o ? (t = o.documentElement, Q.contains(t, i) ? (r = i.getBoundingClientRect(), n = q(o), {
                top: r.top + n.pageYOffset - t.clientTop,
                left: r.left + n.pageXOffset - t.clientLeft
            }) : r) : void 0;
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0], i = {
                    top: 0,
                    left: 0
                };
                return "fixed" === Q.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), 
                t = this.offset(), Q.nodeName(e[0], "html") || (i = e.offset()), i.top += Q.css(e[0], "borderTopWidth", !0), 
                i.left += Q.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - i.top - Q.css(n, "marginTop", !0),
                    left: t.left - i.left - Q.css(n, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === Q.css(e, "position"); ) e = e.offsetParent;
                return e || Ue;
            });
        }
    }), Q.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        Q.fn[e] = function(i) {
            return ve(this, function(e, i, r) {
                var o = q(e);
                return void 0 === r ? o ? o[t] : e[i] : void (o ? o.scrollTo(n ? o.pageXOffset : r, n ? r : o.pageYOffset) : e[i] = r);
            }, e, i, arguments.length);
        };
    }), Q.each([ "top", "left" ], function(e, t) {
        Q.cssHooks[t] = S(K.pixelPosition, function(e, n) {
            return n ? (n = T(e, t), qe.test(n) ? Q(e).position()[t] + "px" : n) : void 0;
        });
    }), Q.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        Q.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            Q.fn[i] = function(i, r) {
                var o = arguments.length && (n || "boolean" != typeof i), s = n || (!0 === i || !0 === r ? "margin" : "border");
                return ve(this, function(t, n, i) {
                    var r;
                    return Q.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, 
                    Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? Q.css(t, n, s) : Q.style(t, n, i, s);
                }, t, o ? i : void 0, o, null);
            };
        });
    }), Q.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n);
        },
        unbind: function(e, t) {
            return this.off(e, null, t);
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i);
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
        },
        size: function() {
            return this.length;
        }
    }), Q.fn.andSelf = Q.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return Q;
    });
    var Pt = e.jQuery, It = e.$;
    return Q.noConflict = function(t) {
        return e.$ === Q && (e.$ = It), t && e.jQuery === Q && (e.jQuery = Pt), Q;
    }, t || (e.jQuery = e.$ = Q), Q;
}), //     Underscore may be freely distributed under the MIT license.
function() {
    function e(e) {
        return function(t, n, i, r) {
            n = b(n, r, 4);
            var o = !S(t) && y.keys(t), s = (o || t).length, a = e > 0 ? 0 : s - 1;
            return arguments.length < 3 && (i = t[o ? o[a] : a], a += e), function(t, n, i, r, o, s) {
                for (;o >= 0 && o < s; o += e) {
                    var a = r ? r[o] : o;
                    i = n(i, t[a], a, t);
                }
                return i;
            }(t, n, i, o, a, s);
        };
    }
    function t(e) {
        return function(t, n, i) {
            n = _(n, i);
            for (var r = T(t), o = e > 0 ? 0 : r - 1; o >= 0 && o < r; o += e) if (n(t[o], o, t)) return o;
            return -1;
        };
    }
    function n(e, t, n) {
        return function(i, r, o) {
            var s = 0, a = T(i);
            if ("number" == typeof o) e > 0 ? s = o >= 0 ? o : Math.max(o + a, s) : a = o >= 0 ? Math.min(o + 1, a) : o + a + 1; else if (n && o && a) return o = n(i, r), 
            i[o] === r ? o : -1;
            if (r != r) return (o = t(c.call(i, s, a), y.isNaN)) >= 0 ? o + s : -1;
            for (o = e > 0 ? s : a - 1; o >= 0 && o < a; o += e) if (i[o] === r) return o;
            return -1;
        };
    }
    function i(e, t) {
        var n = P.length, i = e.constructor, r = y.isFunction(i) && i.prototype || a, o = "constructor";
        for (y.has(e, o) && !y.contains(t, o) && t.push(o); n--; ) (o = P[n]) in e && e[o] !== r[o] && !y.contains(t, o) && t.push(o);
    }
    var r = this, o = r._, s = Array.prototype, a = Object.prototype, l = Function.prototype, u = s.push, c = s.slice, f = a.toString, h = a.hasOwnProperty, d = Array.isArray, p = Object.keys, m = l.bind, v = Object.create, g = function() {}, y = function(e) {
        return e instanceof y ? e : this instanceof y ? void (this._wrapped = e) : new y(e);
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = y), 
    exports._ = y) : r._ = y, y.VERSION = "1.8.3";
    var b = function(e, t, n) {
        if (void 0 === t) return e;
        switch (null == n ? 3 : n) {
          case 1:
            return function(n) {
                return e.call(t, n);
            };

          case 2:
            return function(n, i) {
                return e.call(t, n, i);
            };

          case 3:
            return function(n, i, r) {
                return e.call(t, n, i, r);
            };

          case 4:
            return function(n, i, r, o) {
                return e.call(t, n, i, r, o);
            };
        }
        return function() {
            return e.apply(t, arguments);
        };
    }, _ = function(e, t, n) {
        return null == e ? y.identity : y.isFunction(e) ? b(e, t, n) : y.isObject(e) ? y.matcher(e) : y.property(e);
    };
    y.iteratee = function(e, t) {
        return _(e, t, 1 / 0);
    };
    var w = function(e, t) {
        return function(n) {
            var i = arguments.length;
            if (i < 2 || null == n) return n;
            for (var r = 1; r < i; r++) for (var o = arguments[r], s = e(o), a = s.length, l = 0; l < a; l++) {
                var u = s[l];
                t && void 0 !== n[u] || (n[u] = o[u]);
            }
            return n;
        };
    }, x = function(e) {
        if (!y.isObject(e)) return {};
        if (v) return v(e);
        g.prototype = e;
        var t = new g();
        return g.prototype = null, t;
    }, C = function(e) {
        return function(t) {
            return null == t ? void 0 : t[e];
        };
    }, k = Math.pow(2, 53) - 1, T = C("length"), S = function(e) {
        var t = T(e);
        return "number" == typeof t && t >= 0 && t <= k;
    };
    y.each = y.forEach = function(e, t, n) {
        t = b(t, n);
        var i, r;
        if (S(e)) for (i = 0, r = e.length; i < r; i++) t(e[i], i, e); else {
            var o = y.keys(e);
            for (i = 0, r = o.length; i < r; i++) t(e[o[i]], o[i], e);
        }
        return e;
    }, y.map = y.collect = function(e, t, n) {
        t = _(t, n);
        for (var i = !S(e) && y.keys(e), r = (i || e).length, o = Array(r), s = 0; s < r; s++) {
            var a = i ? i[s] : s;
            o[s] = t(e[a], a, e);
        }
        return o;
    }, y.reduce = y.foldl = y.inject = e(1), y.reduceRight = y.foldr = e(-1), y.find = y.detect = function(e, t, n) {
        var i;
        if (void 0 !== (i = S(e) ? y.findIndex(e, t, n) : y.findKey(e, t, n)) && -1 !== i) return e[i];
    }, y.filter = y.select = function(e, t, n) {
        var i = [];
        return t = _(t, n), y.each(e, function(e, n, r) {
            t(e, n, r) && i.push(e);
        }), i;
    }, y.reject = function(e, t, n) {
        return y.filter(e, y.negate(_(t)), n);
    }, y.every = y.all = function(e, t, n) {
        t = _(t, n);
        for (var i = !S(e) && y.keys(e), r = (i || e).length, o = 0; o < r; o++) {
            var s = i ? i[o] : o;
            if (!t(e[s], s, e)) return !1;
        }
        return !0;
    }, y.some = y.any = function(e, t, n) {
        t = _(t, n);
        for (var i = !S(e) && y.keys(e), r = (i || e).length, o = 0; o < r; o++) {
            var s = i ? i[o] : o;
            if (t(e[s], s, e)) return !0;
        }
        return !1;
    }, y.contains = y.includes = y.include = function(e, t, n, i) {
        return S(e) || (e = y.values(e)), ("number" != typeof n || i) && (n = 0), y.indexOf(e, t, n) >= 0;
    }, y.invoke = function(e, t) {
        var n = c.call(arguments, 2), i = y.isFunction(t);
        return y.map(e, function(e) {
            var r = i ? t : e[t];
            return null == r ? r : r.apply(e, n);
        });
    }, y.pluck = function(e, t) {
        return y.map(e, y.property(t));
    }, y.where = function(e, t) {
        return y.filter(e, y.matcher(t));
    }, y.findWhere = function(e, t) {
        return y.find(e, y.matcher(t));
    }, y.max = function(e, t, n) {
        var i, r, o = -1 / 0, s = -1 / 0;
        if (null == t && null != e) for (var a = 0, l = (e = S(e) ? e : y.values(e)).length; a < l; a++) (i = e[a]) > o && (o = i); else t = _(t, n), 
        y.each(e, function(e, n, i) {
            ((r = t(e, n, i)) > s || r === -1 / 0 && o === -1 / 0) && (o = e, s = r);
        });
        return o;
    }, y.min = function(e, t, n) {
        var i, r, o = 1 / 0, s = 1 / 0;
        if (null == t && null != e) for (var a = 0, l = (e = S(e) ? e : y.values(e)).length; a < l; a++) (i = e[a]) < o && (o = i); else t = _(t, n), 
        y.each(e, function(e, n, i) {
            ((r = t(e, n, i)) < s || r === 1 / 0 && o === 1 / 0) && (o = e, s = r);
        });
        return o;
    }, y.shuffle = function(e) {
        for (var t, n = S(e) ? e : y.values(e), i = n.length, r = Array(i), o = 0; o < i; o++) (t = y.random(0, o)) !== o && (r[o] = r[t]), 
        r[t] = n[o];
        return r;
    }, y.sample = function(e, t, n) {
        return null == t || n ? (S(e) || (e = y.values(e)), e[y.random(e.length - 1)]) : y.shuffle(e).slice(0, Math.max(0, t));
    }, y.sortBy = function(e, t, n) {
        return t = _(t, n), y.pluck(y.map(e, function(e, n, i) {
            return {
                value: e,
                index: n,
                criteria: t(e, n, i)
            };
        }).sort(function(e, t) {
            var n = e.criteria, i = t.criteria;
            if (n !== i) {
                if (n > i || void 0 === n) return 1;
                if (n < i || void 0 === i) return -1;
            }
            return e.index - t.index;
        }), "value");
    };
    var E = function(e) {
        return function(t, n, i) {
            var r = {};
            return n = _(n, i), y.each(t, function(i, o) {
                var s = n(i, o, t);
                e(r, i, s);
            }), r;
        };
    };
    y.groupBy = E(function(e, t, n) {
        y.has(e, n) ? e[n].push(t) : e[n] = [ t ];
    }), y.indexBy = E(function(e, t, n) {
        e[n] = t;
    }), y.countBy = E(function(e, t, n) {
        y.has(e, n) ? e[n]++ : e[n] = 1;
    }), y.toArray = function(e) {
        return e ? y.isArray(e) ? c.call(e) : S(e) ? y.map(e, y.identity) : y.values(e) : [];
    }, y.size = function(e) {
        return null == e ? 0 : S(e) ? e.length : y.keys(e).length;
    }, y.partition = function(e, t, n) {
        t = _(t, n);
        var i = [], r = [];
        return y.each(e, function(e, n, o) {
            (t(e, n, o) ? i : r).push(e);
        }), [ i, r ];
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
    var A = function(e, t, n, i) {
        for (var r = [], o = 0, s = i || 0, a = T(e); s < a; s++) {
            var l = e[s];
            if (S(l) && (y.isArray(l) || y.isArguments(l))) {
                t || (l = A(l, t, n));
                var u = 0, c = l.length;
                for (r.length += c; u < c; ) r[o++] = l[u++];
            } else n || (r[o++] = l);
        }
        return r;
    };
    y.flatten = function(e, t) {
        return A(e, t, !1);
    }, y.without = function(e) {
        return y.difference(e, c.call(arguments, 1));
    }, y.uniq = y.unique = function(e, t, n, i) {
        y.isBoolean(t) || (i = n, n = t, t = !1), null != n && (n = _(n, i));
        for (var r = [], o = [], s = 0, a = T(e); s < a; s++) {
            var l = e[s], u = n ? n(l, s, e) : l;
            t ? (s && o === u || r.push(l), o = u) : n ? y.contains(o, u) || (o.push(u), r.push(l)) : y.contains(r, l) || r.push(l);
        }
        return r;
    }, y.union = function() {
        return y.uniq(A(arguments, !0, !0));
    }, y.intersection = function(e) {
        for (var t = [], n = arguments.length, i = 0, r = T(e); i < r; i++) {
            var o = e[i];
            if (!y.contains(t, o)) {
                for (var s = 1; s < n && y.contains(arguments[s], o); s++) ;
                s === n && t.push(o);
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
        for (var t = e && y.max(e, T).length || 0, n = Array(t), i = 0; i < t; i++) n[i] = y.pluck(e, i);
        return n;
    }, y.object = function(e, t) {
        for (var n = {}, i = 0, r = T(e); i < r; i++) t ? n[e[i]] = t[i] : n[e[i][0]] = e[i][1];
        return n;
    }, y.findIndex = t(1), y.findLastIndex = t(-1), y.sortedIndex = function(e, t, n, i) {
        for (var r = (n = _(n, i, 1))(t), o = 0, s = T(e); o < s; ) {
            var a = Math.floor((o + s) / 2);
            n(e[a]) < r ? o = a + 1 : s = a;
        }
        return o;
    }, y.indexOf = n(1, y.findIndex, y.sortedIndex), y.lastIndexOf = n(-1, y.findLastIndex), y.range = function(e, t, n) {
        null == t && (t = e || 0, e = 0), n = n || 1;
        for (var i = Math.max(Math.ceil((t - e) / n), 0), r = Array(i), o = 0; o < i; o++, e += n) r[o] = e;
        return r;
    };
    var O = function(e, t, n, i, r) {
        if (!(i instanceof t)) return e.apply(n, r);
        var o = x(e.prototype), s = e.apply(o, r);
        return y.isObject(s) ? s : o;
    };
    y.bind = function(e, t) {
        if (m && e.bind === m) return m.apply(e, c.call(arguments, 1));
        if (!y.isFunction(e)) throw new TypeError("Bind must be called on a function");
        var n = c.call(arguments, 2), i = function() {
            return O(e, i, t, this, n.concat(c.call(arguments)));
        };
        return i;
    }, y.partial = function(e) {
        var t = c.call(arguments, 1), n = function() {
            for (var i = 0, r = t.length, o = Array(r), s = 0; s < r; s++) o[s] = t[s] === y ? arguments[i++] : t[s];
            for (;i < arguments.length; ) o.push(arguments[i++]);
            return O(e, n, this, this, o);
        };
        return n;
    }, y.bindAll = function(e) {
        var t, n, i = arguments.length;
        if (i <= 1) throw new Error("bindAll must be passed function names");
        for (t = 1; t < i; t++) e[n = arguments[t]] = y.bind(e[n], e);
        return e;
    }, y.memoize = function(e, t) {
        var n = function(i) {
            var r = n.cache, o = "" + (t ? t.apply(this, arguments) : i);
            return y.has(r, o) || (r[o] = e.apply(this, arguments)), r[o];
        };
        return n.cache = {}, n;
    }, y.delay = function(e, t) {
        var n = c.call(arguments, 2);
        return setTimeout(function() {
            return e.apply(null, n);
        }, t);
    }, y.defer = y.partial(y.delay, y, 1), y.throttle = function(e, t, n) {
        var i, r, o, s = null, a = 0;
        n || (n = {});
        var l = function() {
            a = !1 === n.leading ? 0 : y.now(), s = null, o = e.apply(i, r), s || (i = r = null);
        };
        return function() {
            var u = y.now();
            a || !1 !== n.leading || (a = u);
            var c = t - (u - a);
            return i = this, r = arguments, c <= 0 || c > t ? (s && (clearTimeout(s), s = null), a = u, o = e.apply(i, r), 
            s || (i = r = null)) : s || !1 === n.trailing || (s = setTimeout(l, c)), o;
        };
    }, y.debounce = function(e, t, n) {
        var i, r, o, s, a, l = function() {
            var u = y.now() - s;
            u < t && u >= 0 ? i = setTimeout(l, t - u) : (i = null, n || (a = e.apply(o, r), i || (o = r = null)));
        };
        return function() {
            o = this, r = arguments, s = y.now();
            var u = n && !i;
            return i || (i = setTimeout(l, t)), u && (a = e.apply(o, r), o = r = null), a;
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
            for (var n = t, i = e[t].apply(this, arguments); n--; ) i = e[n].call(this, i);
            return i;
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
    var N = !{
        toString: null
    }.propertyIsEnumerable("toString"), P = [ "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString" ];
    y.keys = function(e) {
        if (!y.isObject(e)) return [];
        if (p) return p(e);
        var t = [];
        for (var n in e) y.has(e, n) && t.push(n);
        return N && i(e, t), t;
    }, y.allKeys = function(e) {
        if (!y.isObject(e)) return [];
        var t = [];
        for (var n in e) t.push(n);
        return N && i(e, t), t;
    }, y.values = function(e) {
        for (var t = y.keys(e), n = t.length, i = Array(n), r = 0; r < n; r++) i[r] = e[t[r]];
        return i;
    }, y.mapObject = function(e, t, n) {
        t = _(t, n);
        for (var i, r = y.keys(e), o = r.length, s = {}, a = 0; a < o; a++) s[i = r[a]] = t(e[i], i, e);
        return s;
    }, y.pairs = function(e) {
        for (var t = y.keys(e), n = t.length, i = Array(n), r = 0; r < n; r++) i[r] = [ t[r], e[t[r]] ];
        return i;
    }, y.invert = function(e) {
        for (var t = {}, n = y.keys(e), i = 0, r = n.length; i < r; i++) t[e[n[i]]] = n[i];
        return t;
    }, y.functions = y.methods = function(e) {
        var t = [];
        for (var n in e) y.isFunction(e[n]) && t.push(n);
        return t.sort();
    }, y.extend = w(y.allKeys), y.extendOwn = y.assign = w(y.keys), y.findKey = function(e, t, n) {
        t = _(t, n);
        for (var i, r = y.keys(e), o = 0, s = r.length; o < s; o++) if (i = r[o], t(e[i], i, e)) return i;
    }, y.pick = function(e, t, n) {
        var i, r, o = {}, s = e;
        if (null == s) return o;
        y.isFunction(t) ? (r = y.allKeys(s), i = b(t, n)) : (r = A(arguments, !1, !1, 1), i = function(e, t, n) {
            return t in n;
        }, s = Object(s));
        for (var a = 0, l = r.length; a < l; a++) {
            var u = r[a], c = s[u];
            i(c, u, s) && (o[u] = c);
        }
        return o;
    }, y.omit = function(e, t, n) {
        if (y.isFunction(t)) t = y.negate(t); else {
            var i = y.map(A(arguments, !1, !1, 1), String);
            t = function(e, t) {
                return !y.contains(i, t);
            };
        }
        return y.pick(e, t, n);
    }, y.defaults = w(y.allKeys, !0), y.create = function(e, t) {
        var n = x(e);
        return t && y.extendOwn(n, t), n;
    }, y.clone = function(e) {
        return y.isObject(e) ? y.isArray(e) ? e.slice() : y.extend({}, e) : e;
    }, y.tap = function(e, t) {
        return t(e), e;
    }, y.isMatch = function(e, t) {
        var n = y.keys(t), i = n.length;
        if (null == e) return !i;
        for (var r = Object(e), o = 0; o < i; o++) {
            var s = n[o];
            if (t[s] !== r[s] || !(s in r)) return !1;
        }
        return !0;
    };
    var I = function(e, t, n, i) {
        if (e === t) return 0 !== e || 1 / e == 1 / t;
        if (null == e || null == t) return e === t;
        e instanceof y && (e = e._wrapped), t instanceof y && (t = t._wrapped);
        var r = f.call(e);
        if (r !== f.call(t)) return !1;
        switch (r) {
          case "[object RegExp]":
          case "[object String]":
            return "" + e == "" + t;

          case "[object Number]":
            return +e != +e ? +t != +t : 0 == +e ? 1 / +e == 1 / t : +e == +t;

          case "[object Date]":
          case "[object Boolean]":
            return +e == +t;
        }
        var o = "[object Array]" === r;
        if (!o) {
            if ("object" != typeof e || "object" != typeof t) return !1;
            var s = e.constructor, a = t.constructor;
            if (s !== a && !(y.isFunction(s) && s instanceof s && y.isFunction(a) && a instanceof a) && "constructor" in e && "constructor" in t) return !1;
        }
        n = n || [], i = i || [];
        for (var l = n.length; l--; ) if (n[l] === e) return i[l] === t;
        if (n.push(e), i.push(t), o) {
            if ((l = e.length) !== t.length) return !1;
            for (;l--; ) if (!I(e[l], t[l], n, i)) return !1;
        } else {
            var u, c = y.keys(e);
            if (l = c.length, y.keys(t).length !== l) return !1;
            for (;l--; ) if (u = c[l], !y.has(t, u) || !I(e[u], t[u], n, i)) return !1;
        }
        return n.pop(), i.pop(), !0;
    };
    y.isEqual = function(e, t) {
        return I(e, t);
    }, y.isEmpty = function(e) {
        return null == e || (S(e) && (y.isArray(e) || y.isString(e) || y.isArguments(e)) ? 0 === e.length : 0 === y.keys(e).length);
    }, y.isElement = function(e) {
        return !(!e || 1 !== e.nodeType);
    }, y.isArray = d || function(e) {
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
        return null != e && h.call(e, t);
    }, y.noConflict = function() {
        return r._ = o, this;
    }, y.identity = function(e) {
        return e;
    }, y.constant = function(e) {
        return function() {
            return e;
        };
    }, y.noop = function() {}, y.property = C, y.propertyOf = function(e) {
        return null == e ? function() {} : function(t) {
            return e[t];
        };
    }, y.matcher = y.matches = function(e) {
        return e = y.extendOwn({}, e), function(t) {
            return y.isMatch(t, e);
        };
    }, y.times = function(e, t, n) {
        var i = Array(Math.max(0, e));
        t = b(t, n, 1);
        for (var r = 0; r < e; r++) i[r] = t(r);
        return i;
    }, y.random = function(e, t) {
        return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1));
    }, y.now = Date.now || function() {
        return new Date().getTime();
    };
    var j = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    }, D = y.invert(j), $ = function(e) {
        var t = function(t) {
            return e[t];
        }, n = "(?:" + y.keys(e).join("|") + ")", i = RegExp(n), r = RegExp(n, "g");
        return function(e) {
            return e = null == e ? "" : "" + e, i.test(e) ? e.replace(r, t) : e;
        };
    };
    y.escape = $(j), y.unescape = $(D), y.result = function(e, t, n) {
        var i = null == e ? void 0 : e[t];
        return void 0 === i && (i = n), y.isFunction(i) ? i.call(e) : i;
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
    var H = /(.)^/, L = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }, F = /\\|'|\r|\n|\u2028|\u2029/g, R = function(e) {
        return "\\" + L[e];
    };
    y.template = function(e, t, n) {
        !t && n && (t = n), t = y.defaults({}, t, y.templateSettings);
        var i = RegExp([ (t.escape || H).source, (t.interpolate || H).source, (t.evaluate || H).source ].join("|") + "|$", "g"), r = 0, o = "__p+='";
        e.replace(i, function(t, n, i, s, a) {
            return o += e.slice(r, a).replace(F, R), r = a + t.length, n ? o += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : i ? o += "'+\n((__t=(" + i + "))==null?'':__t)+\n'" : s && (o += "';\n" + s + "\n__p+='"), 
            t;
        }), o += "';\n", t.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
        try {
            var s = new Function(t.variable || "obj", "_", o);
        } catch (e) {
            throw e.source = o, e;
        }
        var a = function(e) {
            return s.call(this, e, y);
        }, l = t.variable || "obj";
        return a.source = "function(" + l + "){\n" + o + "}", a;
    }, y.chain = function(e) {
        var t = y(e);
        return t._chain = !0, t;
    };
    var W = function(e, t) {
        return e._chain ? y(t).chain() : t;
    };
    y.mixin = function(e) {
        y.each(y.functions(e), function(t) {
            var n = y[t] = e[t];
            y.prototype[t] = function() {
                var e = [ this._wrapped ];
                return u.apply(e, arguments), W(this, n.apply(y, e));
            };
        });
    }, y.mixin(y), y.each([ "pop", "push", "reverse", "shift", "sort", "splice", "unshift" ], function(e) {
        var t = s[e];
        y.prototype[e] = function() {
            var n = this._wrapped;
            return t.apply(n, arguments), "shift" !== e && "splice" !== e || 0 !== n.length || delete n[0], W(this, n);
        };
    }), y.each([ "concat", "join", "slice" ], function(e) {
        var t = s[e];
        y.prototype[e] = function() {
            return W(this, t.apply(this._wrapped, arguments));
        };
    }), y.prototype.value = function() {
        return this._wrapped;
    }, y.prototype.valueOf = y.prototype.toJSON = y.prototype.value, y.prototype.toString = function() {
        return "" + this._wrapped;
    }, "function" == typeof define && define.amd && define("underscore", [], function() {
        return y;
    });
}.call(this), //     Backbone may be freely distributed under the MIT license.
function(e) {
    var t = "object" == typeof self && self.self === self && self || "object" == typeof global && global.global === global && global;
    if ("function" == typeof define && define.amd) define([ "underscore", "jquery", "exports" ], function(n, i, r) {
        t.Backbone = e(t, r, n, i);
    }); else if ("undefined" != typeof exports) {
        var n, i = require("underscore");
        try {
            n = require("jquery");
        } catch (e) {}
        e(t, exports, i, n);
    } else t.Backbone = e(t, {}, t._, t.jQuery || t.Zepto || t.ender || t.$);
}(function(e, t, n, i) {
    var r = e.Backbone, o = Array.prototype.slice;
    t.VERSION = "1.3.3", t.$ = i, t.noConflict = function() {
        return e.Backbone = r, this;
    }, t.emulateHTTP = !1, t.emulateJSON = !1;
    var s = function(e, t, i) {
        n.each(t, function(t, r) {
            n[r] && (e.prototype[r] = function(e, t, i) {
                switch (e) {
                  case 1:
                    return function() {
                        return n[t](this[i]);
                    };

                  case 2:
                    return function(e) {
                        return n[t](this[i], e);
                    };

                  case 3:
                    return function(e, r) {
                        return n[t](this[i], a(e, this), r);
                    };

                  case 4:
                    return function(e, r, o) {
                        return n[t](this[i], a(e, this), r, o);
                    };

                  default:
                    return function() {
                        var e = o.call(arguments);
                        return e.unshift(this[i]), n[t].apply(n, e);
                    };
                }
            }(t, r, i));
        });
    }, a = function(e, t) {
        return n.isFunction(e) ? e : n.isObject(e) && !t._isModel(e) ? l(e) : n.isString(e) ? function(t) {
            return t.get(e);
        } : e;
    }, l = function(e) {
        var t = n.matches(e);
        return function(e) {
            return t(e.attributes);
        };
    }, u = t.Events = {}, c = /\s+/, f = function(e, t, i, r, o) {
        var s, a = 0;
        if (i && "object" == typeof i) {
            void 0 !== r && "context" in o && void 0 === o.context && (o.context = r);
            for (s = n.keys(i); a < s.length; a++) t = f(e, t, s[a], i[s[a]], o);
        } else if (i && c.test(i)) for (s = i.split(c); a < s.length; a++) t = e(t, s[a], r, o); else t = e(t, i, r, o);
        return t;
    };
    u.on = function(e, t, n) {
        return h(this, e, t, n);
    };
    var h = function(e, t, n, i, r) {
        if (e._events = f(d, e._events || {}, t, n, {
            context: i,
            ctx: e,
            listening: r
        }), r) {
            (e._listeners || (e._listeners = {}))[r.id] = r;
        }
        return e;
    };
    u.listenTo = function(e, t, i) {
        if (!e) return this;
        var r = e._listenId || (e._listenId = n.uniqueId("l")), o = this._listeningTo || (this._listeningTo = {}), s = o[r];
        if (!s) {
            var a = this._listenId || (this._listenId = n.uniqueId("l"));
            s = o[r] = {
                obj: e,
                objId: r,
                id: a,
                listeningTo: o,
                count: 0
            };
        }
        return h(e, t, i, this, s), this;
    };
    var d = function(e, t, n, i) {
        if (n) {
            var r = e[t] || (e[t] = []), o = i.context, s = i.ctx, a = i.listening;
            a && a.count++, r.push({
                callback: n,
                context: o,
                ctx: o || s,
                listening: a
            });
        }
        return e;
    };
    u.off = function(e, t, n) {
        return this._events ? (this._events = f(p, this._events, e, t, {
            context: n,
            listeners: this._listeners
        }), this) : this;
    }, u.stopListening = function(e, t, i) {
        var r = this._listeningTo;
        if (!r) return this;
        for (var o = e ? [ e._listenId ] : n.keys(r), s = 0; s < o.length; s++) {
            var a = r[o[s]];
            if (!a) break;
            a.obj.off(t, i, this);
        }
        return this;
    };
    var p = function(e, t, i, r) {
        if (e) {
            var o, s = 0, a = r.context, l = r.listeners;
            if (t || i || a) {
                for (var u = t ? [ t ] : n.keys(e); s < u.length; s++) {
                    var c = e[t = u[s]];
                    if (!c) break;
                    for (var f = [], h = 0; h < c.length; h++) {
                        var d = c[h];
                        i && i !== d.callback && i !== d.callback._callback || a && a !== d.context ? f.push(d) : (o = d.listening) && 0 == --o.count && (delete l[o.id], 
                        delete o.listeningTo[o.objId]);
                    }
                    f.length ? e[t] = f : delete e[t];
                }
                return e;
            }
            for (var p = n.keys(l); s < p.length; s++) delete l[(o = l[p[s]]).id], delete o.listeningTo[o.objId];
        }
    };
    u.once = function(e, t, i) {
        var r = f(m, {}, e, t, n.bind(this.off, this));
        return "string" == typeof e && null == i && (t = void 0), this.on(r, t, i);
    }, u.listenToOnce = function(e, t, i) {
        var r = f(m, {}, t, i, n.bind(this.stopListening, this, e));
        return this.listenTo(e, r);
    };
    var m = function(e, t, i, r) {
        if (i) {
            var o = e[t] = n.once(function() {
                r(t, o), i.apply(this, arguments);
            });
            o._callback = i;
        }
        return e;
    };
    u.trigger = function(e) {
        if (!this._events) return this;
        for (var t = Math.max(0, arguments.length - 1), n = Array(t), i = 0; i < t; i++) n[i] = arguments[i + 1];
        return f(v, this._events, e, void 0, n), this;
    };
    var v = function(e, t, n, i) {
        if (e) {
            var r = e[t], o = e.all;
            r && o && (o = o.slice()), r && g(r, i), o && g(o, [ t ].concat(i));
        }
        return e;
    }, g = function(e, t) {
        var n, i = -1, r = e.length, o = t[0], s = t[1], a = t[2];
        switch (t.length) {
          case 0:
            for (;++i < r; ) (n = e[i]).callback.call(n.ctx);
            return;

          case 1:
            for (;++i < r; ) (n = e[i]).callback.call(n.ctx, o);
            return;

          case 2:
            for (;++i < r; ) (n = e[i]).callback.call(n.ctx, o, s);
            return;

          case 3:
            for (;++i < r; ) (n = e[i]).callback.call(n.ctx, o, s, a);
            return;

          default:
            for (;++i < r; ) (n = e[i]).callback.apply(n.ctx, t);
            return;
        }
    };
    u.bind = u.on, u.unbind = u.off, n.extend(t, u);
    var y = t.Model = function(e, t) {
        var i = e || {};
        t || (t = {}), this.cid = n.uniqueId(this.cidPrefix), this.attributes = {}, t.collection && (this.collection = t.collection), 
        t.parse && (i = this.parse(i, t) || {});
        var r = n.result(this, "defaults");
        i = n.defaults(n.extend({}, r, i), r), this.set(i, t), this.changed = {}, this.initialize.apply(this, arguments);
    };
    n.extend(y.prototype, u, {
        changed: null,
        validationError: null,
        idAttribute: "id",
        cidPrefix: "c",
        initialize: function() {},
        toJSON: function(e) {
            return n.clone(this.attributes);
        },
        sync: function() {
            return t.sync.apply(this, arguments);
        },
        get: function(e) {
            return this.attributes[e];
        },
        escape: function(e) {
            return n.escape(this.get(e));
        },
        has: function(e) {
            return null != this.get(e);
        },
        matches: function(e) {
            return !!n.iteratee(e, this)(this.attributes);
        },
        set: function(e, t, i) {
            if (null == e) return this;
            var r;
            if ("object" == typeof e ? (r = e, i = t) : (r = {})[e] = t, i || (i = {}), !this._validate(r, i)) return !1;
            var o = i.unset, s = i.silent, a = [], l = this._changing;
            this._changing = !0, l || (this._previousAttributes = n.clone(this.attributes), this.changed = {});
            var u = this.attributes, c = this.changed, f = this._previousAttributes;
            for (var h in r) t = r[h], n.isEqual(u[h], t) || a.push(h), n.isEqual(f[h], t) ? delete c[h] : c[h] = t, 
            o ? delete u[h] : u[h] = t;
            if (this.idAttribute in r && (this.id = this.get(this.idAttribute)), !s) {
                a.length && (this._pending = i);
                for (var d = 0; d < a.length; d++) this.trigger("change:" + a[d], this, u[a[d]], i);
            }
            if (l) return this;
            if (!s) for (;this._pending; ) i = this._pending, this._pending = !1, this.trigger("change", this, i);
            return this._pending = !1, this._changing = !1, this;
        },
        unset: function(e, t) {
            return this.set(e, void 0, n.extend({}, t, {
                unset: !0
            }));
        },
        clear: function(e) {
            var t = {};
            for (var i in this.attributes) t[i] = void 0;
            return this.set(t, n.extend({}, e, {
                unset: !0
            }));
        },
        hasChanged: function(e) {
            return null == e ? !n.isEmpty(this.changed) : n.has(this.changed, e);
        },
        changedAttributes: function(e) {
            if (!e) return !!this.hasChanged() && n.clone(this.changed);
            var t = this._changing ? this._previousAttributes : this.attributes, i = {};
            for (var r in e) {
                var o = e[r];
                n.isEqual(t[r], o) || (i[r] = o);
            }
            return !!n.size(i) && i;
        },
        previous: function(e) {
            return null != e && this._previousAttributes ? this._previousAttributes[e] : null;
        },
        previousAttributes: function() {
            return n.clone(this._previousAttributes);
        },
        fetch: function(e) {
            var t = this, i = (e = n.extend({
                parse: !0
            }, e)).success;
            return e.success = function(n) {
                var r = e.parse ? t.parse(n, e) : n;
                if (!t.set(r, e)) return !1;
                i && i.call(e.context, t, n, e), t.trigger("sync", t, n, e);
            }, H(this, e), this.sync("read", this, e);
        },
        save: function(e, t, i) {
            var r;
            null == e || "object" == typeof e ? (r = e, i = t) : (r = {})[e] = t;
            var o = (i = n.extend({
                validate: !0,
                parse: !0
            }, i)).wait;
            if (r && !o) {
                if (!this.set(r, i)) return !1;
            } else if (!this._validate(r, i)) return !1;
            var s = this, a = i.success, l = this.attributes;
            i.success = function(e) {
                s.attributes = l;
                var t = i.parse ? s.parse(e, i) : e;
                if (o && (t = n.extend({}, r, t)), t && !s.set(t, i)) return !1;
                a && a.call(i.context, s, e, i), s.trigger("sync", s, e, i);
            }, H(this, i), r && o && (this.attributes = n.extend({}, l, r));
            var u = this.isNew() ? "create" : i.patch ? "patch" : "update";
            "patch" !== u || i.attrs || (i.attrs = r);
            var c = this.sync(u, this, i);
            return this.attributes = l, c;
        },
        destroy: function(e) {
            var t = this, i = (e = e ? n.clone(e) : {}).success, r = e.wait, o = function() {
                t.stopListening(), t.trigger("destroy", t, t.collection, e);
            };
            e.success = function(n) {
                r && o(), i && i.call(e.context, t, n, e), t.isNew() || t.trigger("sync", t, n, e);
            };
            var s = !1;
            return this.isNew() ? n.defer(e.success) : (H(this, e), s = this.sync("delete", this, e)), r || o(), 
            s;
        },
        url: function() {
            var e = n.result(this, "urlRoot") || n.result(this.collection, "url") || M();
            if (this.isNew()) return e;
            var t = this.get(this.idAttribute);
            return e.replace(/[^\/]$/, "$&/") + encodeURIComponent(t);
        },
        parse: function(e, t) {
            return e;
        },
        clone: function() {
            return new this.constructor(this.attributes);
        },
        isNew: function() {
            return !this.has(this.idAttribute);
        },
        isValid: function(e) {
            return this._validate({}, n.extend({}, e, {
                validate: !0
            }));
        },
        _validate: function(e, t) {
            if (!t.validate || !this.validate) return !0;
            e = n.extend({}, this.attributes, e);
            var i = this.validationError = this.validate(e, t) || null;
            return !i || (this.trigger("invalid", this, i, n.extend(t, {
                validationError: i
            })), !1);
        }
    });
    s(y, {
        keys: 1,
        values: 1,
        pairs: 1,
        invert: 1,
        pick: 0,
        omit: 0,
        chain: 1,
        isEmpty: 1
    }, "attributes");
    var b = t.Collection = function(e, t) {
        t || (t = {}), t.model && (this.model = t.model), void 0 !== t.comparator && (this.comparator = t.comparator), 
        this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, n.extend({
            silent: !0
        }, t));
    }, _ = {
        add: !0,
        remove: !0,
        merge: !0
    }, w = {
        add: !0,
        remove: !1
    }, x = function(e, t, n) {
        n = Math.min(Math.max(n, 0), e.length);
        var i, r = Array(e.length - n), o = t.length;
        for (i = 0; i < r.length; i++) r[i] = e[i + n];
        for (i = 0; i < o; i++) e[i + n] = t[i];
        for (i = 0; i < r.length; i++) e[i + o + n] = r[i];
    };
    n.extend(b.prototype, u, {
        model: y,
        initialize: function() {},
        toJSON: function(e) {
            return this.map(function(t) {
                return t.toJSON(e);
            });
        },
        sync: function() {
            return t.sync.apply(this, arguments);
        },
        add: function(e, t) {
            return this.set(e, n.extend({
                merge: !1
            }, t, w));
        },
        remove: function(e, t) {
            t = n.extend({}, t);
            var i = !n.isArray(e);
            e = i ? [ e ] : e.slice();
            var r = this._removeModels(e, t);
            return !t.silent && r.length && (t.changes = {
                added: [],
                merged: [],
                removed: r
            }, this.trigger("update", this, t)), i ? r[0] : r;
        },
        set: function(e, t) {
            if (null != e) {
                (t = n.extend({}, _, t)).parse && !this._isModel(e) && (e = this.parse(e, t) || []);
                var i = !n.isArray(e);
                e = i ? [ e ] : e.slice();
                var r = t.at;
                null != r && (r = +r), r > this.length && (r = this.length), r < 0 && (r += this.length + 1);
                var o, s, a = [], l = [], u = [], c = [], f = {}, h = t.add, d = t.merge, p = t.remove, m = !1, v = this.comparator && null == r && !1 !== t.sort, g = n.isString(this.comparator) ? this.comparator : null;
                for (s = 0; s < e.length; s++) {
                    o = e[s];
                    var y = this.get(o);
                    if (y) {
                        if (d && o !== y) {
                            var b = this._isModel(o) ? o.attributes : o;
                            t.parse && (b = y.parse(b, t)), y.set(b, t), u.push(y), v && !m && (m = y.hasChanged(g));
                        }
                        f[y.cid] || (f[y.cid] = !0, a.push(y)), e[s] = y;
                    } else h && (o = e[s] = this._prepareModel(o, t)) && (l.push(o), this._addReference(o, t), f[o.cid] = !0, 
                    a.push(o));
                }
                if (p) {
                    for (s = 0; s < this.length; s++) f[(o = this.models[s]).cid] || c.push(o);
                    c.length && this._removeModels(c, t);
                }
                var w = !1, C = !v && h && p;
                if (a.length && C ? (w = this.length !== a.length || n.some(this.models, function(e, t) {
                    return e !== a[t];
                }), this.models.length = 0, x(this.models, a, 0), this.length = this.models.length) : l.length && (v && (m = !0), 
                x(this.models, l, null == r ? this.length : r), this.length = this.models.length), m && this.sort({
                    silent: !0
                }), !t.silent) {
                    for (s = 0; s < l.length; s++) null != r && (t.index = r + s), (o = l[s]).trigger("add", o, this, t);
                    (m || w) && this.trigger("sort", this, t), (l.length || c.length || u.length) && (t.changes = {
                        added: l,
                        removed: c,
                        merged: u
                    }, this.trigger("update", this, t));
                }
                return i ? e[0] : e;
            }
        },
        reset: function(e, t) {
            t = t ? n.clone(t) : {};
            for (var i = 0; i < this.models.length; i++) this._removeReference(this.models[i], t);
            return t.previousModels = this.models, this._reset(), e = this.add(e, n.extend({
                silent: !0
            }, t)), t.silent || this.trigger("reset", this, t), e;
        },
        push: function(e, t) {
            return this.add(e, n.extend({
                at: this.length
            }, t));
        },
        pop: function(e) {
            var t = this.at(this.length - 1);
            return this.remove(t, e);
        },
        unshift: function(e, t) {
            return this.add(e, n.extend({
                at: 0
            }, t));
        },
        shift: function(e) {
            var t = this.at(0);
            return this.remove(t, e);
        },
        slice: function() {
            return o.apply(this.models, arguments);
        },
        get: function(e) {
            if (null != e) return this._byId[e] || this._byId[this.modelId(e.attributes || e)] || e.cid && this._byId[e.cid];
        },
        has: function(e) {
            return null != this.get(e);
        },
        at: function(e) {
            return e < 0 && (e += this.length), this.models[e];
        },
        where: function(e, t) {
            return this[t ? "find" : "filter"](e);
        },
        findWhere: function(e) {
            return this.where(e, !0);
        },
        sort: function(e) {
            var t = this.comparator;
            if (!t) throw new Error("Cannot sort a set without a comparator");
            e || (e = {});
            var i = t.length;
            return n.isFunction(t) && (t = n.bind(t, this)), 1 === i || n.isString(t) ? this.models = this.sortBy(t) : this.models.sort(t), 
            e.silent || this.trigger("sort", this, e), this;
        },
        pluck: function(e) {
            return this.map(e + "");
        },
        fetch: function(e) {
            var t = (e = n.extend({
                parse: !0
            }, e)).success, i = this;
            return e.success = function(n) {
                var r = e.reset ? "reset" : "set";
                i[r](n, e), t && t.call(e.context, i, n, e), i.trigger("sync", i, n, e);
            }, H(this, e), this.sync("read", this, e);
        },
        create: function(e, t) {
            var i = (t = t ? n.clone(t) : {}).wait;
            if (!(e = this._prepareModel(e, t))) return !1;
            i || this.add(e, t);
            var r = this, o = t.success;
            return t.success = function(e, t, n) {
                i && r.add(e, n), o && o.call(n.context, e, t, n);
            }, e.save(null, t), e;
        },
        parse: function(e, t) {
            return e;
        },
        clone: function() {
            return new this.constructor(this.models, {
                model: this.model,
                comparator: this.comparator
            });
        },
        modelId: function(e) {
            return e[this.model.prototype.idAttribute || "id"];
        },
        _reset: function() {
            this.length = 0, this.models = [], this._byId = {};
        },
        _prepareModel: function(e, t) {
            if (this._isModel(e)) return e.collection || (e.collection = this), e;
            (t = t ? n.clone(t) : {}).collection = this;
            var i = new this.model(e, t);
            return i.validationError ? (this.trigger("invalid", this, i.validationError, t), !1) : i;
        },
        _removeModels: function(e, t) {
            for (var n = [], i = 0; i < e.length; i++) {
                var r = this.get(e[i]);
                if (r) {
                    var o = this.indexOf(r);
                    this.models.splice(o, 1), this.length--, delete this._byId[r.cid];
                    var s = this.modelId(r.attributes);
                    null != s && delete this._byId[s], t.silent || (t.index = o, r.trigger("remove", r, this, t)), n.push(r), 
                    this._removeReference(r, t);
                }
            }
            return n;
        },
        _isModel: function(e) {
            return e instanceof y;
        },
        _addReference: function(e, t) {
            this._byId[e.cid] = e;
            var n = this.modelId(e.attributes);
            null != n && (this._byId[n] = e), e.on("all", this._onModelEvent, this);
        },
        _removeReference: function(e, t) {
            delete this._byId[e.cid];
            var n = this.modelId(e.attributes);
            null != n && delete this._byId[n], this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this);
        },
        _onModelEvent: function(e, t, n, i) {
            if (t) {
                if (("add" === e || "remove" === e) && n !== this) return;
                if ("destroy" === e && this.remove(t, i), "change" === e) {
                    var r = this.modelId(t.previousAttributes()), o = this.modelId(t.attributes);
                    r !== o && (null != r && delete this._byId[r], null != o && (this._byId[o] = t));
                }
            }
            this.trigger.apply(this, arguments);
        }
    });
    s(b, {
        forEach: 3,
        each: 3,
        map: 3,
        collect: 3,
        reduce: 0,
        foldl: 0,
        inject: 0,
        reduceRight: 0,
        foldr: 0,
        find: 3,
        detect: 3,
        filter: 3,
        select: 3,
        reject: 3,
        every: 3,
        all: 3,
        some: 3,
        any: 3,
        include: 3,
        includes: 3,
        contains: 3,
        invoke: 0,
        max: 3,
        min: 3,
        toArray: 1,
        size: 1,
        first: 3,
        head: 3,
        take: 3,
        initial: 3,
        rest: 3,
        tail: 3,
        drop: 3,
        last: 3,
        without: 0,
        difference: 0,
        indexOf: 3,
        shuffle: 1,
        lastIndexOf: 3,
        isEmpty: 1,
        chain: 1,
        sample: 3,
        partition: 3,
        groupBy: 3,
        countBy: 3,
        sortBy: 3,
        indexBy: 3,
        findIndex: 3,
        findLastIndex: 3
    }, "models");
    var C = t.View = function(e) {
        this.cid = n.uniqueId("view"), n.extend(this, n.pick(e, T)), this._ensureElement(), this.initialize.apply(this, arguments);
    }, k = /^(\S+)\s*(.*)$/, T = [ "model", "collection", "el", "id", "attributes", "className", "tagName", "events" ];
    n.extend(C.prototype, u, {
        tagName: "div",
        $: function(e) {
            return this.$el.find(e);
        },
        initialize: function() {},
        render: function() {
            return this;
        },
        remove: function() {
            return this._removeElement(), this.stopListening(), this;
        },
        _removeElement: function() {
            this.$el.remove();
        },
        setElement: function(e) {
            return this.undelegateEvents(), this._setElement(e), this.delegateEvents(), this;
        },
        _setElement: function(e) {
            this.$el = e instanceof t.$ ? e : t.$(e), this.el = this.$el[0];
        },
        delegateEvents: function(e) {
            if (e || (e = n.result(this, "events")), !e) return this;
            this.undelegateEvents();
            for (var t in e) {
                var i = e[t];
                if (n.isFunction(i) || (i = this[i]), i) {
                    var r = t.match(k);
                    this.delegate(r[1], r[2], n.bind(i, this));
                }
            }
            return this;
        },
        delegate: function(e, t, n) {
            return this.$el.on(e + ".delegateEvents" + this.cid, t, n), this;
        },
        undelegateEvents: function() {
            return this.$el && this.$el.off(".delegateEvents" + this.cid), this;
        },
        undelegate: function(e, t, n) {
            return this.$el.off(e + ".delegateEvents" + this.cid, t, n), this;
        },
        _createElement: function(e) {
            return document.createElement(e);
        },
        _ensureElement: function() {
            if (this.el) this.setElement(n.result(this, "el")); else {
                var e = n.extend({}, n.result(this, "attributes"));
                this.id && (e.id = n.result(this, "id")), this.className && (e.class = n.result(this, "className")), 
                this.setElement(this._createElement(n.result(this, "tagName"))), this._setAttributes(e);
            }
        },
        _setAttributes: function(e) {
            this.$el.attr(e);
        }
    }), t.sync = function(e, i, r) {
        var o = S[e];
        n.defaults(r || (r = {}), {
            emulateHTTP: t.emulateHTTP,
            emulateJSON: t.emulateJSON
        });
        var s = {
            type: o,
            dataType: "json"
        };
        if (r.url || (s.url = n.result(i, "url") || M()), null != r.data || !i || "create" !== e && "update" !== e && "patch" !== e || (s.contentType = "application/json", 
        s.data = JSON.stringify(r.attrs || i.toJSON(r))), r.emulateJSON && (s.contentType = "application/x-www-form-urlencoded", 
        s.data = s.data ? {
            model: s.data
        } : {}), r.emulateHTTP && ("PUT" === o || "DELETE" === o || "PATCH" === o)) {
            s.type = "POST", r.emulateJSON && (s.data._method = o);
            var a = r.beforeSend;
            r.beforeSend = function(e) {
                if (e.setRequestHeader("X-HTTP-Method-Override", o), a) return a.apply(this, arguments);
            };
        }
        "GET" === s.type || r.emulateJSON || (s.processData = !1);
        var l = r.error;
        r.error = function(e, t, n) {
            r.textStatus = t, r.errorThrown = n, l && l.call(r.context, e, t, n);
        };
        var u = r.xhr = t.ajax(n.extend(s, r));
        return i.trigger("request", i, u, r), u;
    };
    var S = {
        create: "POST",
        update: "PUT",
        patch: "PATCH",
        delete: "DELETE",
        read: "GET"
    };
    t.ajax = function() {
        return t.$.ajax.apply(t.$, arguments);
    };
    var E = t.Router = function(e) {
        e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments);
    }, A = /\((.*?)\)/g, O = /(\(\?)?:\w+/g, N = /\*\w+/g, P = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    n.extend(E.prototype, u, {
        initialize: function() {},
        route: function(e, i, r) {
            n.isRegExp(e) || (e = this._routeToRegExp(e)), n.isFunction(i) && (r = i, i = ""), r || (r = this[i]);
            var o = this;
            return t.history.route(e, function(n) {
                var s = o._extractParameters(e, n);
                !1 !== o.execute(r, s, i) && (o.trigger.apply(o, [ "route:" + i ].concat(s)), o.trigger("route", i, s), 
                t.history.trigger("route", o, i, s));
            }), this;
        },
        execute: function(e, t, n) {
            e && e.apply(this, t);
        },
        navigate: function(e, n) {
            return t.history.navigate(e, n), this;
        },
        _bindRoutes: function() {
            if (this.routes) {
                this.routes = n.result(this, "routes");
                for (var e, t = n.keys(this.routes); null != (e = t.pop()); ) this.route(e, this.routes[e]);
            }
        },
        _routeToRegExp: function(e) {
            return e = e.replace(P, "\\$&").replace(A, "(?:$1)?").replace(O, function(e, t) {
                return t ? e : "([^/?]+)";
            }).replace(N, "([^?]*?)"), new RegExp("^" + e + "(?:\\?([\\s\\S]*))?$");
        },
        _extractParameters: function(e, t) {
            var i = e.exec(t).slice(1);
            return n.map(i, function(e, t) {
                return t === i.length - 1 ? e || null : e ? decodeURIComponent(e) : null;
            });
        }
    });
    var I = t.History = function() {
        this.handlers = [], this.checkUrl = n.bind(this.checkUrl, this), "undefined" != typeof window && (this.location = window.location, 
        this.history = window.history);
    }, j = /^[#\/]|\s+$/g, D = /^\/+|\/+$/g, $ = /#.*$/;
    I.started = !1, n.extend(I.prototype, u, {
        interval: 50,
        atRoot: function() {
            return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root && !this.getSearch();
        },
        matchRoot: function() {
            return this.decodeFragment(this.location.pathname).slice(0, this.root.length - 1) + "/" === this.root;
        },
        decodeFragment: function(e) {
            return decodeURI(e.replace(/%25/g, "%2525"));
        },
        getSearch: function() {
            var e = this.location.href.replace(/#.*/, "").match(/\?.+/);
            return e ? e[0] : "";
        },
        getHash: function(e) {
            var t = (e || this).location.href.match(/#(.*)$/);
            return t ? t[1] : "";
        },
        getPath: function() {
            var e = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
            return "/" === e.charAt(0) ? e.slice(1) : e;
        },
        getFragment: function(e) {
            return null == e && (e = this._usePushState || !this._wantsHashChange ? this.getPath() : this.getHash()), 
            e.replace(j, "");
        },
        start: function(e) {
            if (I.started) throw new Error("Backbone.history has already been started");
            if (I.started = !0, this.options = n.extend({
                root: "/"
            }, this.options, e), this.root = this.options.root, this._wantsHashChange = !1 !== this.options.hashChange, 
            this._hasHashChange = "onhashchange" in window && (void 0 === document.documentMode || document.documentMode > 7), 
            this._useHashChange = this._wantsHashChange && this._hasHashChange, this._wantsPushState = !!this.options.pushState, 
            this._hasPushState = !(!this.history || !this.history.pushState), this._usePushState = this._wantsPushState && this._hasPushState, 
            this.fragment = this.getFragment(), this.root = ("/" + this.root + "/").replace(D, "/"), this._wantsHashChange && this._wantsPushState) {
                if (!this._hasPushState && !this.atRoot()) {
                    var t = this.root.slice(0, -1) || "/";
                    return this.location.replace(t + "#" + this.getPath()), !0;
                }
                this._hasPushState && this.atRoot() && this.navigate(this.getHash(), {
                    replace: !0
                });
            }
            if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
                this.iframe = document.createElement("iframe"), this.iframe.src = "javascript:0", this.iframe.style.display = "none", 
                this.iframe.tabIndex = -1;
                var i = document.body, r = i.insertBefore(this.iframe, i.firstChild).contentWindow;
                r.document.open(), r.document.close(), r.location.hash = "#" + this.fragment;
            }
            var o = window.addEventListener || function(e, t) {
                return attachEvent("on" + e, t);
            };
            if (this._usePushState ? o("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe ? o("hashchange", this.checkUrl, !1) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), 
            !this.options.silent) return this.loadUrl();
        },
        stop: function() {
            var e = window.removeEventListener || function(e, t) {
                return detachEvent("on" + e, t);
            };
            this._usePushState ? e("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe && e("hashchange", this.checkUrl, !1), 
            this.iframe && (document.body.removeChild(this.iframe), this.iframe = null), this._checkUrlInterval && clearInterval(this._checkUrlInterval), 
            I.started = !1;
        },
        route: function(e, t) {
            this.handlers.unshift({
                route: e,
                callback: t
            });
        },
        checkUrl: function(e) {
            var t = this.getFragment();
            if (t === this.fragment && this.iframe && (t = this.getHash(this.iframe.contentWindow)), t === this.fragment) return !1;
            this.iframe && this.navigate(t), this.loadUrl();
        },
        loadUrl: function(e) {
            return !!this.matchRoot() && (e = this.fragment = this.getFragment(e), n.some(this.handlers, function(t) {
                if (t.route.test(e)) return t.callback(e), !0;
            }));
        },
        navigate: function(e, t) {
            if (!I.started) return !1;
            t && !0 !== t || (t = {
                trigger: !!t
            }), e = this.getFragment(e || "");
            var n = this.root;
            "" !== e && "?" !== e.charAt(0) || (n = n.slice(0, -1) || "/");
            var i = n + e;
            if (e = this.decodeFragment(e.replace($, "")), this.fragment !== e) {
                if (this.fragment = e, this._usePushState) this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, i); else {
                    if (!this._wantsHashChange) return this.location.assign(i);
                    if (this._updateHash(this.location, e, t.replace), this.iframe && e !== this.getHash(this.iframe.contentWindow)) {
                        var r = this.iframe.contentWindow;
                        t.replace || (r.document.open(), r.document.close()), this._updateHash(r.location, e, t.replace);
                    }
                }
                return t.trigger ? this.loadUrl(e) : void 0;
            }
        },
        _updateHash: function(e, t, n) {
            if (n) {
                var i = e.href.replace(/(javascript:|#).*$/, "");
                e.replace(i + "#" + t);
            } else e.hash = "#" + t;
        }
    }), t.history = new I();
    y.extend = b.extend = E.extend = C.extend = I.extend = function(e, t) {
        var i, r = this;
        return i = e && n.has(e, "constructor") ? e.constructor : function() {
            return r.apply(this, arguments);
        }, n.extend(i, r, t), i.prototype = n.create(r.prototype, e), i.prototype.constructor = i, i.__super__ = r.prototype, 
        i;
    };
    var M = function() {
        throw new Error('A "url" property or function must be specified');
    }, H = function(e, t) {
        var n = t.error;
        t.error = function(i) {
            n && n.call(t.context, e, i, t), e.trigger("error", e, i, t);
        };
    };
    return t;
}), /**! Calculate the md5 hash of a string
 * +   original by: Webtoolkit.info (http://www.webtoolkit.info/)
 * + namespaced by: Michael White (http://crestidg.com)
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
**/
md5 = function(e) {
    var t, n, i, r, o, s, a, l, u, c = function(e, t) {
        return e << t | e >>> 32 - t;
    }, f = function(e, t) {
        var n, i, r, o, s;
        return r = 2147483648 & e, o = 2147483648 & t, n = 1073741824 & e, i = 1073741824 & t, s = (1073741823 & e) + (1073741823 & t), 
        n & i ? 2147483648 ^ s ^ r ^ o : n | i ? 1073741824 & s ? 3221225472 ^ s ^ r ^ o : 1073741824 ^ s ^ r ^ o : s ^ r ^ o;
    }, h = function(e, t, n, i, r, o, s) {
        return e = f(e, f(f(function(e, t, n) {
            return e & t | ~e & n;
        }(t, n, i), r), s)), f(c(e, o), t);
    }, d = function(e, t, n, i, r, o, s) {
        return e = f(e, f(f(function(e, t, n) {
            return e & n | t & ~n;
        }(t, n, i), r), s)), f(c(e, o), t);
    }, p = function(e, t, n, i, r, o, s) {
        return e = f(e, f(f(function(e, t, n) {
            return e ^ t ^ n;
        }(t, n, i), r), s)), f(c(e, o), t);
    }, m = function(e, t, n, i, r, o, s) {
        return e = f(e, f(f(function(e, t, n) {
            return t ^ (e | ~n);
        }(t, n, i), r), s)), f(c(e, o), t);
    }, v = function(e) {
        var t, n = "", i = "";
        for (t = 0; t <= 3; t++) n += (i = "0" + (e >>> 8 * t & 255).toString(16)).substr(i.length - 2, 2);
        return n;
    }, g = Array();
    for (g = function(e) {
        for (var t, n = e.length, i = n + 8, r = 16 * ((i - i % 64) / 64 + 1), o = Array(r - 1), s = 0, a = 0; a < n; ) s = a % 4 * 8, 
        o[t = (a - a % 4) / 4] = o[t] | e.charCodeAt(a) << s, a++;
        return t = (a - a % 4) / 4, s = a % 4 * 8, o[t] = o[t] | 128 << s, o[r - 2] = n << 3, o[r - 1] = n >>> 29, 
        o;
    }(e), s = 1732584193, a = 4023233417, l = 2562383102, u = 271733878, t = 0; t < g.length; t += 16) n = s, 
    i = a, r = l, o = u, a = m(a = m(a = m(a = m(a = p(a = p(a = p(a = p(a = d(a = d(a = d(a = d(a = h(a = h(a = h(a = h(a, l = h(l, u = h(u, s = h(s, a, l, u, g[t + 0], 7, 3614090360), a, l, g[t + 1], 12, 3905402710), s, a, g[t + 2], 17, 606105819), u, s, g[t + 3], 22, 3250441966), l = h(l, u = h(u, s = h(s, a, l, u, g[t + 4], 7, 4118548399), a, l, g[t + 5], 12, 1200080426), s, a, g[t + 6], 17, 2821735955), u, s, g[t + 7], 22, 4249261313), l = h(l, u = h(u, s = h(s, a, l, u, g[t + 8], 7, 1770035416), a, l, g[t + 9], 12, 2336552879), s, a, g[t + 10], 17, 4294925233), u, s, g[t + 11], 22, 2304563134), l = h(l, u = h(u, s = h(s, a, l, u, g[t + 12], 7, 1804603682), a, l, g[t + 13], 12, 4254626195), s, a, g[t + 14], 17, 2792965006), u, s, g[t + 15], 22, 1236535329), l = d(l, u = d(u, s = d(s, a, l, u, g[t + 1], 5, 4129170786), a, l, g[t + 6], 9, 3225465664), s, a, g[t + 11], 14, 643717713), u, s, g[t + 0], 20, 3921069994), l = d(l, u = d(u, s = d(s, a, l, u, g[t + 5], 5, 3593408605), a, l, g[t + 10], 9, 38016083), s, a, g[t + 15], 14, 3634488961), u, s, g[t + 4], 20, 3889429448), l = d(l, u = d(u, s = d(s, a, l, u, g[t + 9], 5, 568446438), a, l, g[t + 14], 9, 3275163606), s, a, g[t + 3], 14, 4107603335), u, s, g[t + 8], 20, 1163531501), l = d(l, u = d(u, s = d(s, a, l, u, g[t + 13], 5, 2850285829), a, l, g[t + 2], 9, 4243563512), s, a, g[t + 7], 14, 1735328473), u, s, g[t + 12], 20, 2368359562), l = p(l, u = p(u, s = p(s, a, l, u, g[t + 5], 4, 4294588738), a, l, g[t + 8], 11, 2272392833), s, a, g[t + 11], 16, 1839030562), u, s, g[t + 14], 23, 4259657740), l = p(l, u = p(u, s = p(s, a, l, u, g[t + 1], 4, 2763975236), a, l, g[t + 4], 11, 1272893353), s, a, g[t + 7], 16, 4139469664), u, s, g[t + 10], 23, 3200236656), l = p(l, u = p(u, s = p(s, a, l, u, g[t + 13], 4, 681279174), a, l, g[t + 0], 11, 3936430074), s, a, g[t + 3], 16, 3572445317), u, s, g[t + 6], 23, 76029189), l = p(l, u = p(u, s = p(s, a, l, u, g[t + 9], 4, 3654602809), a, l, g[t + 12], 11, 3873151461), s, a, g[t + 15], 16, 530742520), u, s, g[t + 2], 23, 3299628645), l = m(l, u = m(u, s = m(s, a, l, u, g[t + 0], 6, 4096336452), a, l, g[t + 7], 10, 1126891415), s, a, g[t + 14], 15, 2878612391), u, s, g[t + 5], 21, 4237533241), l = m(l, u = m(u, s = m(s, a, l, u, g[t + 12], 6, 1700485571), a, l, g[t + 3], 10, 2399980690), s, a, g[t + 10], 15, 4293915773), u, s, g[t + 1], 21, 2240044497), l = m(l, u = m(u, s = m(s, a, l, u, g[t + 8], 6, 1873313359), a, l, g[t + 15], 10, 4264355552), s, a, g[t + 6], 15, 2734768916), u, s, g[t + 13], 21, 1309151649), l = m(l, u = m(u, s = m(s, a, l, u, g[t + 4], 6, 4149444226), a, l, g[t + 11], 10, 3174756917), s, a, g[t + 2], 15, 718787259), u, s, g[t + 9], 21, 3951481745), 
    s = f(s, n), a = f(a, i), l = f(l, r), u = f(u, o);
    return (v(s) + v(a) + v(l) + v(u)).toLowerCase();
}, /*!
 * Modernizr v2.8.3
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */
window.Modernizr = function(e, t, n) {
    function i(e) {
        p.cssText = e;
    }
    function r(e, t) {
        return typeof e === t;
    }
    function o(e, t) {
        return !!~("" + e).indexOf(t);
    }
    function s(e, t) {
        for (var i in e) {
            var r = e[i];
            if (!o(r, "-") && p[r] !== n) return "pfx" != t || r;
        }
        return !1;
    }
    function a(e, t, i) {
        var o = e.charAt(0).toUpperCase() + e.slice(1), a = (e + " " + b.join(o + " ") + o).split(" ");
        return r(t, "string") || r(t, "undefined") ? s(a, t) : (a = (e + " " + _.join(o + " ") + o).split(" "), 
        function(e, t, i) {
            for (var o in e) {
                var s = t[e[o]];
                if (s !== n) return !1 === i ? e[o] : r(s, "function") ? s.bind(i || t) : s;
            }
            return !1;
        }(a, t, i));
    }
    var l, u, c = {}, f = t.documentElement, h = "modernizr", d = t.createElement(h), p = d.style, m = t.createElement("input"), v = ":)", g = {}.toString, y = " -webkit- -moz- -o- -ms- ".split(" "), b = "Webkit Moz O ms".split(" "), _ = "Webkit Moz O ms".toLowerCase().split(" "), w = "http://www.w3.org/2000/svg", x = {}, C = {}, k = {}, T = [], S = T.slice, E = function(e, n, i, r) {
        var o, s, a, l, u = t.createElement("div"), c = t.body, d = c || t.createElement("body");
        if (parseInt(i, 10)) for (;i--; ) (a = t.createElement("div")).id = r ? r[i] : h + (i + 1), u.appendChild(a);
        return o = [ "&#173;", '<style id="s', h, '">', e, "</style>" ].join(""), u.id = h, (c ? u : d).innerHTML += o, 
        d.appendChild(u), c || (d.style.background = "", d.style.overflow = "hidden", l = f.style.overflow, 
        f.style.overflow = "hidden", f.appendChild(d)), s = n(u, e), c ? u.parentNode.removeChild(u) : (d.parentNode.removeChild(d), 
        f.style.overflow = l), !!s;
    }, A = function() {
        var e = {
            select: "input",
            change: "input",
            submit: "form",
            reset: "form",
            error: "img",
            load: "img",
            abort: "img"
        };
        return function(i, o) {
            o = o || t.createElement(e[i] || "div");
            var s = (i = "on" + i) in o;
            return s || (o.setAttribute || (o = t.createElement("div")), o.setAttribute && o.removeAttribute && (o.setAttribute(i, ""), 
            s = r(o[i], "function"), r(o[i], "undefined") || (o[i] = n), o.removeAttribute(i))), o = null, s;
        };
    }(), O = {}.hasOwnProperty;
    u = r(O, "undefined") || r(O.call, "undefined") ? function(e, t) {
        return t in e && r(e.constructor.prototype[t], "undefined");
    } : function(e, t) {
        return O.call(e, t);
    }, Function.prototype.bind || (Function.prototype.bind = function(e) {
        var t = this;
        if ("function" != typeof t) throw new TypeError();
        var n = S.call(arguments, 1), i = function() {
            if (this instanceof i) {
                var r = function() {};
                r.prototype = t.prototype;
                var o = new r(), s = t.apply(o, n.concat(S.call(arguments)));
                return Object(s) === s ? s : o;
            }
            return t.apply(e, n.concat(S.call(arguments)));
        };
        return i;
    }), x.flexbox = function() {
        return a("flexWrap");
    }, x.flexboxlegacy = function() {
        return a("boxDirection");
    }, x.canvas = function() {
        var e = t.createElement("canvas");
        return !(!e.getContext || !e.getContext("2d"));
    }, x.canvastext = function() {
        return !(!c.canvas || !r(t.createElement("canvas").getContext("2d").fillText, "function"));
    }, x.webgl = function() {
        return !!e.WebGLRenderingContext;
    }, x.touch = function() {
        var n;
        return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : E([ "@media (", y.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}" ].join(""), function(e) {
            n = 9 === e.offsetTop;
        }), n;
    }, x.geolocation = function() {
        return "geolocation" in navigator;
    }, x.postmessage = function() {
        return !!e.postMessage;
    }, x.websqldatabase = function() {
        return !!e.openDatabase;
    }, x.indexedDB = function() {
        return !!a("indexedDB", e);
    }, x.hashchange = function() {
        return A("hashchange", e) && (t.documentMode === n || t.documentMode > 7);
    }, x.history = function() {
        return !(!e.history || !history.pushState);
    }, x.draganddrop = function() {
        var e = t.createElement("div");
        return "draggable" in e || "ondragstart" in e && "ondrop" in e;
    }, x.websockets = function() {
        return "WebSocket" in e || "MozWebSocket" in e;
    }, x.rgba = function() {
        return i("background-color:rgba(150,255,150,.5)"), o(p.backgroundColor, "rgba");
    }, x.hsla = function() {
        return i("background-color:hsla(120,40%,100%,.5)"), o(p.backgroundColor, "rgba") || o(p.backgroundColor, "hsla");
    }, x.multiplebgs = function() {
        return i("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(p.background);
    }, x.backgroundsize = function() {
        return a("backgroundSize");
    }, x.borderimage = function() {
        return a("borderImage");
    }, x.borderradius = function() {
        return a("borderRadius");
    }, x.boxshadow = function() {
        return a("boxShadow");
    }, x.textshadow = function() {
        return "" === t.createElement("div").style.textShadow;
    }, x.opacity = function() {
        return function(e, t) {
            i(y.join(e + ";") + (t || ""));
        }("opacity:.55"), /^0.55$/.test(p.opacity);
    }, x.cssanimations = function() {
        return a("animationName");
    }, x.csscolumns = function() {
        return a("columnCount");
    }, x.cssgradients = function() {
        var e = "background-image:";
        return i((e + "-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));" + e) + y.join("linear-gradient(left top,#9f9, white);" + e)).slice(0, -e.length)), 
        o(p.backgroundImage, "gradient");
    }, x.cssreflections = function() {
        return a("boxReflect");
    }, x.csstransforms = function() {
        return !!a("transform");
    }, x.csstransforms3d = function() {
        var e = !!a("perspective");
        return e && "webkitPerspective" in f.style && E("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(t, n) {
            e = 9 === t.offsetLeft && 3 === t.offsetHeight;
        }), e;
    }, x.csstransitions = function() {
        return a("transition");
    }, x.fontface = function() {
        var e;
        return E('@font-face {font-family:"font";src:url("https://")}', function(n, i) {
            var r = t.getElementById("smodernizr"), o = r.sheet || r.styleSheet, s = o ? o.cssRules && o.cssRules[0] ? o.cssRules[0].cssText : o.cssText || "" : "";
            e = /src/i.test(s) && 0 === s.indexOf(i.split(" ")[0]);
        }), e;
    }, x.generatedcontent = function() {
        var e;
        return E([ "#", h, "{font:0/0 a}#", h, ':after{content:"', v, '";visibility:hidden;font:3px/1 a}' ].join(""), function(t) {
            e = t.offsetHeight >= 3;
        }), e;
    }, x.video = function() {
        var e = t.createElement("video"), n = !1;
        try {
            (n = !!e.canPlayType) && ((n = new Boolean(n)).ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), 
            n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""));
        } catch (e) {}
        return n;
    }, x.audio = function() {
        var e = t.createElement("audio"), n = !1;
        try {
            (n = !!e.canPlayType) && ((n = new Boolean(n)).ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), 
            n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), 
            n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""));
        } catch (e) {}
        return n;
    }, x.localstorage = function() {
        try {
            return localStorage.setItem(h, h), localStorage.removeItem(h), !0;
        } catch (e) {
            return !1;
        }
    }, x.sessionstorage = function() {
        try {
            return sessionStorage.setItem(h, h), sessionStorage.removeItem(h), !0;
        } catch (e) {
            return !1;
        }
    }, x.webworkers = function() {
        return !!e.Worker;
    }, x.applicationcache = function() {
        return !!e.applicationCache;
    }, x.svg = function() {
        return !!t.createElementNS && !!t.createElementNS(w, "svg").createSVGRect;
    }, x.inlinesvg = function() {
        var e = t.createElement("div");
        return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) == w;
    }, x.smil = function() {
        return !!t.createElementNS && /SVGAnimate/.test(g.call(t.createElementNS(w, "animate")));
    }, x.svgclippaths = function() {
        return !!t.createElementNS && /SVGClipPath/.test(g.call(t.createElementNS(w, "clipPath")));
    };
    for (var N in x) u(x, N) && (l = N.toLowerCase(), c[l] = x[N](), T.push((c[l] ? "" : "no-") + l));
    return c.input || (c.input = function(n) {
        for (var i = 0, r = n.length; i < r; i++) k[n[i]] = !!(n[i] in m);
        return k.list && (k.list = !(!t.createElement("datalist") || !e.HTMLDataListElement)), k;
    }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), c.inputtypes = function(e) {
        for (var i, r, o, s = 0, a = e.length; s < a; s++) m.setAttribute("type", r = e[s]), (i = "text" !== m.type) && (m.value = v, 
        m.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(r) && m.style.WebkitAppearance !== n ? (f.appendChild(m), 
        i = (o = t.defaultView).getComputedStyle && "textfield" !== o.getComputedStyle(m, null).WebkitAppearance && 0 !== m.offsetHeight, 
        f.removeChild(m)) : /^(search|tel)$/.test(r) || (i = /^(url|email)$/.test(r) ? m.checkValidity && !1 === m.checkValidity() : m.value != v)), 
        C[e[s]] = !!i;
        return C;
    }("search tel url email datetime date month week time datetime-local number range color".split(" "))), 
    c.addTest = function(e, t) {
        if ("object" == typeof e) for (var i in e) u(e, i) && c.addTest(i, e[i]); else {
            if (e = e.toLowerCase(), c[e] !== n) return c;
            t = "function" == typeof t ? t() : t, f.className += " " + (t ? "" : "no-") + e, c[e] = t;
        }
        return c;
    }, i(""), d = m = null, function(e, t) {
        function n() {
            var e = p.elements;
            return "string" == typeof e ? e.split(" ") : e;
        }
        function i(e) {
            var t = d[e[f]];
            return t || (t = {}, h++, e[f] = h, d[h] = t), t;
        }
        function r(e, n, r) {
            if (n || (n = t), a) return n.createElement(e);
            r || (r = i(n));
            var o;
            return !(o = r.cache[e] ? r.cache[e].cloneNode() : c.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e)).canHaveChildren || u.test(e) || o.tagUrn ? o : r.frag.appendChild(o);
        }
        function o(e) {
            e || (e = t);
            var o = i(e);
            return !p.shivCSS || s || o.hasCSS || (o.hasCSS = !!function(e, t) {
                var n = e.createElement("p"), i = e.getElementsByTagName("head")[0] || e.documentElement;
                return n.innerHTML = "x<style>" + t + "</style>", i.insertBefore(n.lastChild, i.firstChild);
            }(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), 
            a || function(e, t) {
                t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), 
                e.createElement = function(n) {
                    return p.shivMethods ? r(n, e, t) : t.createElem(n);
                }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + n().join().replace(/[\w\-]+/g, function(e) {
                    return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")';
                }) + ");return n}")(p, t.frag);
            }(e, o), e;
        }
        var s, a, l = e.html5 || {}, u = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, c = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, f = "_html5shiv", h = 0, d = {};
        !function() {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", s = "hidden" in e, a = 1 == e.childNodes.length || function() {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return void 0 === e.cloneNode || void 0 === e.createDocumentFragment || void 0 === e.createElement;
                }();
            } catch (e) {
                s = !0, a = !0;
            }
        }();
        var p = {
            elements: l.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
            version: "3.7.0",
            shivCSS: !1 !== l.shivCSS,
            supportsUnknownElements: a,
            shivMethods: !1 !== l.shivMethods,
            type: "default",
            shivDocument: o,
            createElement: r,
            createDocumentFragment: function(e, r) {
                if (e || (e = t), a) return e.createDocumentFragment();
                for (var o = (r = r || i(e)).frag.cloneNode(), s = 0, l = n(), u = l.length; s < u; s++) o.createElement(l[s]);
                return o;
            }
        };
        e.html5 = p, o(t);
    }(this, t), c._version = "2.8.3", c._prefixes = y, c._domPrefixes = _, c._cssomPrefixes = b, c.mq = function(t) {
        var n = e.matchMedia || e.msMatchMedia;
        if (n) return n(t) && n(t).matches || !1;
        var i;
        return E("@media " + t + " { #" + h + " { position: absolute; } }", function(t) {
            i = "absolute" == (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position;
        }), i;
    }, c.hasEvent = A, c.testProp = function(e) {
        return s([ e ]);
    }, c.testAllProps = a, c.testStyles = E, c.prefixed = function(e, t, n) {
        return t ? a(e, t, n) : a(e, "pfx");
    }, f.className = f.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + " js " + T.join(" "), c;
}(this, this.document), (window.jQuery || window.Zepto) && function(e) {
    e.fn.Swipe = function(t) {
        return this.each(function() {
            e(this).data("Swipe", new Swipe(e(this)[0], t));
        });
    };
}(window.jQuery || window.Zepto);

var Froogaloop = function() {
    function e(t) {
        return new e.fn.init(t);
    }
    function t(e, t, n) {
        if (!n.contentWindow.postMessage) return !1;
        var i = JSON.stringify({
            method: e,
            value: t
        });
        n.contentWindow.postMessage(i, a);
    }
    function n(e) {
        var t, n;
        try {
            n = (t = JSON.parse(e.data)).event || t.method;
        } catch (e) {}
        if ("ready" != n || s || (s = !0), !/^https?:\/\/player.vimeo.com/.test(e.origin)) return !1;
        var i = t.value, r = t.data, a = "" === a ? null : t.player_id, l = function(e, t) {
            return t ? o[t] && o[t][e] : o[e];
        }(n, a), u = [];
        return !!l && (void 0 !== i && u.push(i), r && u.push(r), a && u.push(a), u.length > 0 ? l.apply(null, u) : l.call());
    }
    function i(e, t, n) {
        n ? (o[n] || (o[n] = {}), o[n][e] = t) : o[e] = t;
    }
    function r(e) {
        return !!(e && e.constructor && e.call && e.apply);
    }
    var o = {}, s = !1, a = (Array.prototype.slice, "*");
    return e.fn = e.prototype = {
        element: null,
        init: function(e) {
            return "string" == typeof e && (e = document.getElementById(e)), this.element = e, this.element ? this : null;
        },
        api: function(e, n) {
            if (!this.element || !e) return !1;
            var o = this.element, s = "" !== o.id ? o.id : null, a = r(n) ? null : n, l = r(n) ? n : null;
            return l && i(e, l, s), t(e, a, o), this;
        },
        addEvent: function(e, n) {
            if (!this.element) return !1;
            var r = this.element, o = "" !== r.id ? r.id : null;
            return i(e, n, o), "ready" != e ? t("addEventListener", e, r) : "ready" == e && s && n.call(null, o), 
            this;
        },
        removeEvent: function(e) {
            if (!this.element) return !1;
            var n = this.element, i = function(e, t) {
                if (t && o[t]) {
                    if (!o[t][e]) return !1;
                    o[t][e] = null;
                } else {
                    if (!o[e]) return !1;
                    o[e] = null;
                }
                return !0;
            }(e, "" !== n.id ? n.id : null);
            "ready" != e && i && t("removeEventListener", e, n);
        }
    }, e.fn.init.prototype = e.fn, window.addEventListener ? window.addEventListener("message", n, !1) : window.attachEvent("onmessage", n), 
    window.Froogaloop = window.$f = e;
}();

!function(e) {
    "function" == typeof define && define.amd ? define([ "jquery" ], e) : e(jQuery);
}(function(e) {
    function t(t, i) {
        var r, o, s, a = t.nodeName.toLowerCase();
        return "area" === a ? (r = t.parentNode, o = r.name, !(!t.href || !o || "map" !== r.nodeName.toLowerCase()) && (!!(s = e("img[usemap='#" + o + "']")[0]) && n(s))) : (/^(input|select|textarea|button|object)$/.test(a) ? !t.disabled : "a" === a ? t.href || i : i) && n(t);
    }
    function n(t) {
        return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
            return "hidden" === e.css(this, "visibility");
        }).length;
    }
    e.ui = e.ui || {}, e.extend(e.ui, {
        version: "1.11.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), e.fn.extend({
        scrollParent: function(t) {
            var n = this.css("position"), i = "absolute" === n, r = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/, o = this.parents().filter(function() {
                var t = e(this);
                return (!i || "static" !== t.css("position")) && r.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"));
            }).eq(0);
            return "fixed" !== n && o.length ? o : e(this[0].ownerDocument || document);
        },
        uniqueId: function() {
            var e = 0;
            return function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++e);
                });
            };
        }(),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id");
            });
        }
    }), e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
            return function(n) {
                return !!e.data(n, t);
            };
        }) : function(t, n, i) {
            return !!e.data(t, i[3]);
        },
        focusable: function(n) {
            return t(n, !isNaN(e.attr(n, "tabindex")));
        },
        tabbable: function(n) {
            var i = e.attr(n, "tabindex"), r = isNaN(i);
            return (r || i >= 0) && t(n, !r);
        }
    }), e("<a>").outerWidth(1).jquery || e.each([ "Width", "Height" ], function(t, n) {
        function i(t, n, i, o) {
            return e.each(r, function() {
                n -= parseFloat(e.css(t, "padding" + this)) || 0, i && (n -= parseFloat(e.css(t, "border" + this + "Width")) || 0), 
                o && (n -= parseFloat(e.css(t, "margin" + this)) || 0);
            }), n;
        }
        var r = "Width" === n ? [ "Left", "Right" ] : [ "Top", "Bottom" ], o = n.toLowerCase(), s = {
            innerWidth: e.fn.innerWidth,
            innerHeight: e.fn.innerHeight,
            outerWidth: e.fn.outerWidth,
            outerHeight: e.fn.outerHeight
        };
        e.fn["inner" + n] = function(t) {
            return void 0 === t ? s["inner" + n].call(this) : this.each(function() {
                e(this).css(o, i(this, t) + "px");
            });
        }, e.fn["outer" + n] = function(t, r) {
            return "number" != typeof t ? s["outer" + n].call(this, t) : this.each(function() {
                e(this).css(o, i(this, t, !0, r) + "px");
            });
        };
    }), e.fn.addBack || (e.fn.addBack = function(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
        return function(n) {
            return arguments.length ? t.call(this, e.camelCase(n)) : t.call(this);
        };
    }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.fn.extend({
        focus: function(t) {
            return function(n, i) {
                return "number" == typeof n ? this.each(function() {
                    var t = this;
                    setTimeout(function() {
                        e(t).focus(), i && i.call(t);
                    }, n);
                }) : t.apply(this, arguments);
            };
        }(e.fn.focus),
        disableSelection: function() {
            var e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function() {
                return this.bind(e + ".ui-disableSelection", function(e) {
                    e.preventDefault();
                });
            };
        }(),
        enableSelection: function() {
            return this.unbind(".ui-disableSelection");
        },
        zIndex: function(t) {
            if (void 0 !== t) return this.css("zIndex", t);
            if (this.length) for (var n, i, r = e(this[0]); r.length && r[0] !== document; ) {
                if (("absolute" === (n = r.css("position")) || "relative" === n || "fixed" === n) && (i = parseInt(r.css("zIndex"), 10), 
                !isNaN(i) && 0 !== i)) return i;
                r = r.parent();
            }
            return 0;
        }
    }), e.ui.plugin = {
        add: function(t, n, i) {
            var r, o = e.ui[t].prototype;
            for (r in i) o.plugins[r] = o.plugins[r] || [], o.plugins[r].push([ n, i[r] ]);
        },
        call: function(e, t, n, i) {
            var r, o = e.plugins[t];
            if (o && (i || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)) for (r = 0; o.length > r; r++) e.options[o[r][0]] && o[r][1].apply(e.element, n);
        }
    };
    var i = 0, r = Array.prototype.slice;
    e.cleanData = function(t) {
        return function(n) {
            var i, r, o;
            for (o = 0; null != (r = n[o]); o++) try {
                (i = e._data(r, "events")) && i.remove && e(r).triggerHandler("remove");
            } catch (e) {}
            t(n);
        };
    }(e.cleanData), e.widget = function(t, n, i) {
        var r, o, s, a, l = {}, u = t.split(".")[0];
        return t = t.split(".")[1], r = u + "-" + t, i || (i = n, n = e.Widget), e.expr[":"][r.toLowerCase()] = function(t) {
            return !!e.data(t, r);
        }, e[u] = e[u] || {}, o = e[u][t], s = e[u][t] = function(e, t) {
            return this._createWidget ? void (arguments.length && this._createWidget(e, t)) : new s(e, t);
        }, e.extend(s, o, {
            version: i.version,
            _proto: e.extend({}, i),
            _childConstructors: []
        }), a = new n(), a.options = e.widget.extend({}, a.options), e.each(i, function(t, i) {
            return e.isFunction(i) ? void (l[t] = function() {
                var e = function() {
                    return n.prototype[t].apply(this, arguments);
                }, r = function(e) {
                    return n.prototype[t].apply(this, e);
                };
                return function() {
                    var t, n = this._super, o = this._superApply;
                    return this._super = e, this._superApply = r, t = i.apply(this, arguments), this._super = n, this._superApply = o, 
                    t;
                };
            }()) : void (l[t] = i);
        }), s.prototype = e.widget.extend(a, {
            widgetEventPrefix: o ? a.widgetEventPrefix || t : t
        }, l, {
            constructor: s,
            namespace: u,
            widgetName: t,
            widgetFullName: r
        }), o ? (e.each(o._childConstructors, function(t, n) {
            var i = n.prototype;
            e.widget(i.namespace + "." + i.widgetName, s, n._proto);
        }), delete o._childConstructors) : n._childConstructors.push(s), e.widget.bridge(t, s), s;
    }, e.widget.extend = function(t) {
        for (var n, i, o = r.call(arguments, 1), s = 0, a = o.length; a > s; s++) for (n in o[s]) i = o[s][n], 
        o[s].hasOwnProperty(n) && void 0 !== i && (t[n] = e.isPlainObject(i) ? e.isPlainObject(t[n]) ? e.widget.extend({}, t[n], i) : e.widget.extend({}, i) : i);
        return t;
    }, e.widget.bridge = function(t, n) {
        var i = n.prototype.widgetFullName || t;
        e.fn[t] = function(o) {
            var s = "string" == typeof o, a = r.call(arguments, 1), l = this;
            return s ? this.each(function() {
                var n, r = e.data(this, i);
                return "instance" === o ? (l = r, !1) : r ? e.isFunction(r[o]) && "_" !== o.charAt(0) ? (n = r[o].apply(r, a)) !== r && void 0 !== n ? (l = n && n.jquery ? l.pushStack(n.get()) : n, 
                !1) : void 0 : e.error("no such method '" + o + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + o + "'");
            }) : (a.length && (o = e.widget.extend.apply(null, [ o ].concat(a))), this.each(function() {
                var t = e.data(this, i);
                t ? (t.option(o || {}), t._init && t._init()) : e.data(this, i, new n(o, this));
            })), l;
        };
    }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(t, n) {
            n = e(n || this.defaultElement || this)[0], this.element = e(n), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, 
            this.bindings = e(), this.hoverable = e(), this.focusable = e(), n !== this && (e.data(n, this.widgetFullName, this), 
            this._on(!0, this.element, {
                remove: function(e) {
                    e.target === n && this.destroy();
                }
            }), this.document = e(n.style ? n.ownerDocument : n.document || n), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), 
            this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this._trigger("create", null, this._getCreateEventData()), 
            this._init();
        },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), 
            this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), 
            this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus");
        },
        _destroy: e.noop,
        widget: function() {
            return this.element;
        },
        option: function(t, n) {
            var i, r, o, s = t;
            if (0 === arguments.length) return e.widget.extend({}, this.options);
            if ("string" == typeof t) if (s = {}, i = t.split("."), t = i.shift(), i.length) {
                for (r = s[t] = e.widget.extend({}, this.options[t]), o = 0; i.length - 1 > o; o++) r[i[o]] = r[i[o]] || {}, 
                r = r[i[o]];
                if (t = i.pop(), 1 === arguments.length) return void 0 === r[t] ? null : r[t];
                r[t] = n;
            } else {
                if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                s[t] = n;
            }
            return this._setOptions(s), this;
        },
        _setOptions: function(e) {
            var t;
            for (t in e) this._setOption(t, e[t]);
            return this;
        },
        _setOption: function(e, t) {
            return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), 
            t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), 
            this;
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            });
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            });
        },
        _on: function(t, n, i) {
            var r, o = this;
            "boolean" != typeof t && (i = n, n = t, t = !1), i ? (n = r = e(n), this.bindings = this.bindings.add(n)) : (i = n, 
            n = this.element, r = this.widget()), e.each(i, function(i, s) {
                function a() {
                    return t || !0 !== o.options.disabled && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof s ? o[s] : s).apply(o, arguments) : void 0;
                }
                "string" != typeof s && (a.guid = s.guid = s.guid || a.guid || e.guid++);
                var l = i.match(/^([\w:-]*)\s*(.*)$/), u = l[1] + o.eventNamespace, c = l[2];
                c ? r.delegate(c, u, a) : n.bind(u, a);
            });
        },
        _off: function(t, n) {
            n = (n || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(n).undelegate(n), 
            this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get());
        },
        _delay: function(e, t) {
            var n = this;
            return setTimeout(function() {
                return ("string" == typeof e ? n[e] : e).apply(n, arguments);
            }, t || 0);
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function(t) {
                    e(t.currentTarget).addClass("ui-state-hover");
                },
                mouseleave: function(t) {
                    e(t.currentTarget).removeClass("ui-state-hover");
                }
            });
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function(t) {
                    e(t.currentTarget).addClass("ui-state-focus");
                },
                focusout: function(t) {
                    e(t.currentTarget).removeClass("ui-state-focus");
                }
            });
        },
        _trigger: function(t, n, i) {
            var r, o, s = this.options[t];
            if (i = i || {}, n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), 
            n.target = this.element[0], o = n.originalEvent) for (r in o) r in n || (n[r] = o[r]);
            return this.element.trigger(n, i), !(e.isFunction(s) && !1 === s.apply(this.element[0], [ n ].concat(i)) || n.isDefaultPrevented());
        }
    }, e.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(t, n) {
        e.Widget.prototype["_" + t] = function(i, r, o) {
            "string" == typeof r && (r = {
                effect: r
            });
            var s, a = r ? !0 === r || "number" == typeof r ? n : r.effect || n : t;
            "number" == typeof (r = r || {}) && (r = {
                duration: r
            }), s = !e.isEmptyObject(r), r.complete = o, r.delay && i.delay(r.delay), s && e.effects && e.effects.effect[a] ? i[t](r) : a !== t && i[a] ? i[a](r.duration, r.easing, o) : i.queue(function(n) {
                e(this)[t](), o && o.call(i[0]), n();
            });
        };
    }), e.widget;
    var o = !1;
    e(document).mouseup(function() {
        o = !1;
    }), e.widget("ui.mouse", {
        version: "1.11.4",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var t = this;
            this.element.bind("mousedown." + this.widgetName, function(e) {
                return t._mouseDown(e);
            }).bind("click." + this.widgetName, function(n) {
                return !0 === e.data(n.target, t.widgetName + ".preventClickEvent") ? (e.removeData(n.target, t.widgetName + ".preventClickEvent"), 
                n.stopImmediatePropagation(), !1) : void 0;
            }), this.started = !1;
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
        },
        _mouseDown: function(t) {
            if (!o) {
                this._mouseMoved = !1, this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
                var n = this, i = 1 === t.which, r = !("string" != typeof this.options.cancel || !t.target.nodeName) && e(t.target).closest(this.options.cancel).length;
                return !(i && !r && this._mouseCapture(t)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    n.mouseDelayMet = !0;
                }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(t), 
                !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), 
                this._mouseMoveDelegate = function(e) {
                    return n._mouseMove(e);
                }, this._mouseUpDelegate = function(e) {
                    return n._mouseUp(e);
                }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), 
                t.preventDefault(), o = !0, !0));
            }
        },
        _mouseMove: function(t) {
            if (this._mouseMoved) {
                if (e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button) return this._mouseUp(t);
                if (!t.which) return this._mouseUp(t);
            }
            return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, t), 
            this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted);
        },
        _mouseUp: function(t) {
            return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), 
            this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), 
            this._mouseStop(t)), o = !1, !1;
        },
        _mouseDistanceMet: function(e) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance;
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet;
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0;
        }
    }), function() {
        function t(e, t, n) {
            return [ parseFloat(e[0]) * (h.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (h.test(e[1]) ? n / 100 : 1) ];
        }
        function n(t, n) {
            return parseInt(e.css(t, n), 10) || 0;
        }
        e.ui = e.ui || {};
        var i, r, o = Math.max, s = Math.abs, a = Math.round, l = /left|center|right/, u = /top|center|bottom/, c = /[\+\-]\d+(\.[\d]+)?%?/, f = /^\w+/, h = /%$/, d = e.fn.position;
        e.position = {
            scrollbarWidth: function() {
                if (void 0 !== i) return i;
                var t, n, r = e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"), o = r.children()[0];
                return e("body").append(r), t = o.offsetWidth, r.css("overflow", "scroll"), n = o.offsetWidth, t === n && (n = r[0].clientWidth), 
                r.remove(), i = t - n;
            },
            getScrollInfo: function(t) {
                var n = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"), i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"), r = "scroll" === n || "auto" === n && t.width < t.element[0].scrollWidth;
                return {
                    width: "scroll" === i || "auto" === i && t.height < t.element[0].scrollHeight ? e.position.scrollbarWidth() : 0,
                    height: r ? e.position.scrollbarWidth() : 0
                };
            },
            getWithinInfo: function(t) {
                var n = e(t || window), i = e.isWindow(n[0]), r = !!n[0] && 9 === n[0].nodeType;
                return {
                    element: n,
                    isWindow: i,
                    isDocument: r,
                    offset: n.offset() || {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: n.scrollLeft(),
                    scrollTop: n.scrollTop(),
                    width: i || r ? n.width() : n.outerWidth(),
                    height: i || r ? n.height() : n.outerHeight()
                };
            }
        }, e.fn.position = function(i) {
            if (!i || !i.of) return d.apply(this, arguments);
            i = e.extend({}, i);
            var h, p, m, v, g, y, b = e(i.of), _ = e.position.getWithinInfo(i.within), w = e.position.getScrollInfo(_), x = (i.collision || "flip").split(" "), C = {};
            return y = function(t) {
                var n = t[0];
                return 9 === n.nodeType ? {
                    width: t.width(),
                    height: t.height(),
                    offset: {
                        top: 0,
                        left: 0
                    }
                } : e.isWindow(n) ? {
                    width: t.width(),
                    height: t.height(),
                    offset: {
                        top: t.scrollTop(),
                        left: t.scrollLeft()
                    }
                } : n.preventDefault ? {
                    width: 0,
                    height: 0,
                    offset: {
                        top: n.pageY,
                        left: n.pageX
                    }
                } : {
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    offset: t.offset()
                };
            }(b), b[0].preventDefault && (i.at = "left top"), p = y.width, m = y.height, v = y.offset, g = e.extend({}, v), 
            e.each([ "my", "at" ], function() {
                var e, t, n = (i[this] || "").split(" ");
                1 === n.length && (n = l.test(n[0]) ? n.concat([ "center" ]) : u.test(n[0]) ? [ "center" ].concat(n) : [ "center", "center" ]), 
                n[0] = l.test(n[0]) ? n[0] : "center", n[1] = u.test(n[1]) ? n[1] : "center", e = c.exec(n[0]), t = c.exec(n[1]), 
                C[this] = [ e ? e[0] : 0, t ? t[0] : 0 ], i[this] = [ f.exec(n[0])[0], f.exec(n[1])[0] ];
            }), 1 === x.length && (x[1] = x[0]), "right" === i.at[0] ? g.left += p : "center" === i.at[0] && (g.left += p / 2), 
            "bottom" === i.at[1] ? g.top += m : "center" === i.at[1] && (g.top += m / 2), h = t(C.at, p, m), g.left += h[0], 
            g.top += h[1], this.each(function() {
                var l, u, c = e(this), f = c.outerWidth(), d = c.outerHeight(), y = n(this, "marginLeft"), k = n(this, "marginTop"), T = f + y + n(this, "marginRight") + w.width, S = d + k + n(this, "marginBottom") + w.height, E = e.extend({}, g), A = t(C.my, c.outerWidth(), c.outerHeight());
                "right" === i.my[0] ? E.left -= f : "center" === i.my[0] && (E.left -= f / 2), "bottom" === i.my[1] ? E.top -= d : "center" === i.my[1] && (E.top -= d / 2), 
                E.left += A[0], E.top += A[1], r || (E.left = a(E.left), E.top = a(E.top)), l = {
                    marginLeft: y,
                    marginTop: k
                }, e.each([ "left", "top" ], function(t, n) {
                    e.ui.position[x[t]] && e.ui.position[x[t]][n](E, {
                        targetWidth: p,
                        targetHeight: m,
                        elemWidth: f,
                        elemHeight: d,
                        collisionPosition: l,
                        collisionWidth: T,
                        collisionHeight: S,
                        offset: [ h[0] + A[0], h[1] + A[1] ],
                        my: i.my,
                        at: i.at,
                        within: _,
                        elem: c
                    });
                }), i.using && (u = function(e) {
                    var t = v.left - E.left, n = t + p - f, r = v.top - E.top, a = r + m - d, l = {
                        target: {
                            element: b,
                            left: v.left,
                            top: v.top,
                            width: p,
                            height: m
                        },
                        element: {
                            element: c,
                            left: E.left,
                            top: E.top,
                            width: f,
                            height: d
                        },
                        horizontal: 0 > n ? "left" : t > 0 ? "right" : "center",
                        vertical: 0 > a ? "top" : r > 0 ? "bottom" : "middle"
                    };
                    f > p && p > s(t + n) && (l.horizontal = "center"), d > m && m > s(r + a) && (l.vertical = "middle"), 
                    l.important = o(s(t), s(n)) > o(s(r), s(a)) ? "horizontal" : "vertical", i.using.call(this, e, l);
                }), c.offset(e.extend(E, {
                    using: u
                }));
            });
        }, e.ui.position = {
            fit: {
                left: function(e, t) {
                    var n, i = t.within, r = i.isWindow ? i.scrollLeft : i.offset.left, s = i.width, a = e.left - t.collisionPosition.marginLeft, l = r - a, u = a + t.collisionWidth - s - r;
                    t.collisionWidth > s ? l > 0 && 0 >= u ? (n = e.left + l + t.collisionWidth - s - r, e.left += l - n) : e.left = u > 0 && 0 >= l ? r : l > u ? r + s - t.collisionWidth : r : l > 0 ? e.left += l : u > 0 ? e.left -= u : e.left = o(e.left - a, e.left);
                },
                top: function(e, t) {
                    var n, i = t.within, r = i.isWindow ? i.scrollTop : i.offset.top, s = t.within.height, a = e.top - t.collisionPosition.marginTop, l = r - a, u = a + t.collisionHeight - s - r;
                    t.collisionHeight > s ? l > 0 && 0 >= u ? (n = e.top + l + t.collisionHeight - s - r, e.top += l - n) : e.top = u > 0 && 0 >= l ? r : l > u ? r + s - t.collisionHeight : r : l > 0 ? e.top += l : u > 0 ? e.top -= u : e.top = o(e.top - a, e.top);
                }
            },
            flip: {
                left: function(e, t) {
                    var n, i, r = t.within, o = r.offset.left + r.scrollLeft, a = r.width, l = r.isWindow ? r.scrollLeft : r.offset.left, u = e.left - t.collisionPosition.marginLeft, c = u - l, f = u + t.collisionWidth - a - l, h = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0, d = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0, p = -2 * t.offset[0];
                    0 > c ? (0 > (n = e.left + h + d + p + t.collisionWidth - a - o) || s(c) > n) && (e.left += h + d + p) : f > 0 && ((i = e.left - t.collisionPosition.marginLeft + h + d + p - l) > 0 || f > s(i)) && (e.left += h + d + p);
                },
                top: function(e, t) {
                    var n, i, r = t.within, o = r.offset.top + r.scrollTop, a = r.height, l = r.isWindow ? r.scrollTop : r.offset.top, u = e.top - t.collisionPosition.marginTop, c = u - l, f = u + t.collisionHeight - a - l, h = "top" === t.my[1] ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0, d = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0, p = -2 * t.offset[1];
                    0 > c ? (0 > (i = e.top + h + d + p + t.collisionHeight - a - o) || s(c) > i) && (e.top += h + d + p) : f > 0 && ((n = e.top - t.collisionPosition.marginTop + h + d + p - l) > 0 || f > s(n)) && (e.top += h + d + p);
                }
            },
            flipfit: {
                left: function() {
                    e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments);
                },
                top: function() {
                    e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments);
                }
            }
        }, function() {
            var t, n, i, o, s, a = document.getElementsByTagName("body")[0], l = document.createElement("div");
            t = document.createElement(a ? "div" : "body"), i = {
                visibility: "hidden",
                width: 0,
                height: 0,
                border: 0,
                margin: 0,
                background: "none"
            }, a && e.extend(i, {
                position: "absolute",
                left: "-1000px",
                top: "-1000px"
            });
            for (s in i) t.style[s] = i[s];
            t.appendChild(l), (n = a || document.documentElement).insertBefore(t, n.firstChild), l.style.cssText = "position: absolute; left: 10.7432222px;", 
            o = e(l).offset().left, r = o > 10 && 11 > o, t.innerHTML = "", n.removeChild(t);
        }();
    }(), e.ui.position, e.widget("ui.sortable", e.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _isOverAxis: function(e, t, n) {
            return e >= t && t + n > e;
        },
        _isFloating: function(e) {
            return /left|right/.test(e.css("float")) || /inline|table-cell/.test(e.css("display"));
        },
        _create: function() {
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), 
            this._mouseInit(), this._setHandleClassName(), this.ready = !0;
        },
        _setOption: function(e, t) {
            this._super(e, t), "handle" === e && this._setHandleClassName();
        },
        _setHandleClassName: function() {
            this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"), e.each(this.items, function() {
                (this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle");
            });
        },
        _destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"), 
            this._mouseDestroy();
            for (var e = this.items.length - 1; e >= 0; e--) this.items[e].item.removeData(this.widgetName + "-item");
            return this;
        },
        _mouseCapture: function(t, n) {
            var i = null, r = !1, o = this;
            return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(t), 
            e(t.target).parents().each(function() {
                return e.data(this, o.widgetName + "-item") === o ? (i = e(this), !1) : void 0;
            }), e.data(t.target, o.widgetName + "-item") === o && (i = e(t.target)), !!i && (!(this.options.handle && !n && (e(this.options.handle, i).find("*").addBack().each(function() {
                this === t.target && (r = !0);
            }), !r)) && (this.currentItem = i, this._removeCurrentsFromItems(), !0))));
        },
        _mouseStart: function(t, n, i) {
            var r, o, s = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), 
            this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), 
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, e.extend(this.offset, {
                click: {
                    left: t.pageX - this.offset.left,
                    top: t.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), 
            this.originalPageX = t.pageX, this.originalPageY = t.pageY, s.cursorAt && this._adjustOffsetFromHelper(s.cursorAt), 
            this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), s.containment && this._setContainment(), 
            s.cursor && "auto" !== s.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), 
            o.css("cursor", s.cursor), this.storedStylesheet = e("<style>*{ cursor: " + s.cursor + " !important; }</style>").appendTo(o)), 
            s.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", s.opacity)), 
            s.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", s.zIndex)), 
            this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), 
            this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), 
            !i) for (r = this.containers.length - 1; r >= 0; r--) this.containers[r]._trigger("activate", t, this._uiHash(this));
            return e.ui.ddmanager && (e.ui.ddmanager.current = this), e.ui.ddmanager && !s.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), 
            this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0;
        },
        _mouseDrag: function(t) {
            var n, i, r, o, s = this.options, a = !1;
            for (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), 
            this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < s.scrollSensitivity ? this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop + s.scrollSpeed : t.pageY - this.overflowOffset.top < s.scrollSensitivity && (this.scrollParent[0].scrollTop = a = this.scrollParent[0].scrollTop - s.scrollSpeed), 
            this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < s.scrollSensitivity ? this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft + s.scrollSpeed : t.pageX - this.overflowOffset.left < s.scrollSensitivity && (this.scrollParent[0].scrollLeft = a = this.scrollParent[0].scrollLeft - s.scrollSpeed)) : (t.pageY - this.document.scrollTop() < s.scrollSensitivity ? a = this.document.scrollTop(this.document.scrollTop() - s.scrollSpeed) : this.window.height() - (t.pageY - this.document.scrollTop()) < s.scrollSensitivity && (a = this.document.scrollTop(this.document.scrollTop() + s.scrollSpeed)), 
            t.pageX - this.document.scrollLeft() < s.scrollSensitivity ? a = this.document.scrollLeft(this.document.scrollLeft() - s.scrollSpeed) : this.window.width() - (t.pageX - this.document.scrollLeft()) < s.scrollSensitivity && (a = this.document.scrollLeft(this.document.scrollLeft() + s.scrollSpeed))), 
            !1 !== a && e.ui.ddmanager && !s.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo("absolute"), 
            this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), 
            this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), 
            n = this.items.length - 1; n >= 0; n--) if (i = this.items[n], r = i.item[0], (o = this._intersectsWithPointer(i)) && i.instance === this.currentContainer && r !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== r && !e.contains(this.placeholder[0], r) && ("semi-dynamic" !== this.options.type || !e.contains(this.element[0], r))) {
                if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(i)) break;
                this._rearrange(t, i), this._trigger("change", t, this._uiHash());
                break;
            }
            return this._contactContainers(t), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), 
            this.lastPositionAbs = this.positionAbs, !1;
        },
        _mouseStop: function(t, n) {
            if (t) {
                if (e.ui.ddmanager && !this.options.dropBehaviour && e.ui.ddmanager.drop(this, t), this.options.revert) {
                    var i = this, r = this.placeholder.offset(), o = this.options.axis, s = {};
                    o && "x" !== o || (s.left = r.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), 
                    o && "y" !== o || (s.top = r.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), 
                    this.reverting = !0, e(this.helper).animate(s, parseInt(this.options.revert, 10) || 500, function() {
                        i._clear(t);
                    });
                } else this._clear(t, n);
                return !1;
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var t = this.containers.length - 1; t >= 0; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)), 
                this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), 
                this.containers[t].containerCache.over = 0);
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), 
            "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), 
            e.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? e(this.domPosition.prev).after(this.currentItem) : e(this.domPosition.parent).prepend(this.currentItem)), 
            this;
        },
        serialize: function(t) {
            var n = this._getItemsAsjQuery(t && t.connected), i = [];
            return t = t || {}, e(n).each(function() {
                var n = (e(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);
                n && i.push((t.key || n[1] + "[]") + "=" + (t.key && t.expression ? n[1] : n[2]));
            }), !i.length && t.key && i.push(t.key + "="), i.join("&");
        },
        toArray: function(t) {
            var n = this._getItemsAsjQuery(t && t.connected), i = [];
            return t = t || {}, n.each(function() {
                i.push(e(t.item || this).attr(t.attribute || "id") || "");
            }), i;
        },
        _intersectsWith: function(e) {
            var t = this.positionAbs.left, n = t + this.helperProportions.width, i = this.positionAbs.top, r = i + this.helperProportions.height, o = e.left, s = o + e.width, a = e.top, l = a + e.height, u = this.offset.click.top, c = this.offset.click.left, f = "x" === this.options.axis || i + u > a && l > i + u, h = "y" === this.options.axis || t + c > o && s > t + c, d = f && h;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > e[this.floating ? "width" : "height"] ? d : t + this.helperProportions.width / 2 > o && s > n - this.helperProportions.width / 2 && i + this.helperProportions.height / 2 > a && l > r - this.helperProportions.height / 2;
        },
        _intersectsWithPointer: function(e) {
            var t = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top, e.height), n = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left, e.width), i = t && n, r = this._getDragVerticalDirection(), o = this._getDragHorizontalDirection();
            return !!i && (this.floating ? o && "right" === o || "down" === r ? 2 : 1 : r && ("down" === r ? 2 : 1));
        },
        _intersectsWithSides: function(e) {
            var t = this._isOverAxis(this.positionAbs.top + this.offset.click.top, e.top + e.height / 2, e.height), n = this._isOverAxis(this.positionAbs.left + this.offset.click.left, e.left + e.width / 2, e.width), i = this._getDragVerticalDirection(), r = this._getDragHorizontalDirection();
            return this.floating && r ? "right" === r && n || "left" === r && !n : i && ("down" === i && t || "up" === i && !t);
        },
        _getDragVerticalDirection: function() {
            var e = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== e && (e > 0 ? "down" : "up");
        },
        _getDragHorizontalDirection: function() {
            var e = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== e && (e > 0 ? "right" : "left");
        },
        refresh: function(e) {
            return this._refreshItems(e), this._setHandleClassName(), this.refreshPositions(), this;
        },
        _connectWith: function() {
            var e = this.options;
            return e.connectWith.constructor === String ? [ e.connectWith ] : e.connectWith;
        },
        _getItemsAsjQuery: function(t) {
            function n() {
                a.push(this);
            }
            var i, r, o, s, a = [], l = [], u = this._connectWith();
            if (u && t) for (i = u.length - 1; i >= 0; i--) for (o = e(u[i], this.document[0]), r = o.length - 1; r >= 0; r--) (s = e.data(o[r], this.widgetFullName)) && s !== this && !s.options.disabled && l.push([ e.isFunction(s.options.items) ? s.options.items.call(s.element) : e(s.options.items, s.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), s ]);
            for (l.push([ e.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : e(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this ]), 
            i = l.length - 1; i >= 0; i--) l[i][0].each(n);
            return e(a);
        },
        _removeCurrentsFromItems: function() {
            var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = e.grep(this.items, function(e) {
                for (var n = 0; t.length > n; n++) if (t[n] === e.item[0]) return !1;
                return !0;
            });
        },
        _refreshItems: function(t) {
            this.items = [], this.containers = [ this ];
            var n, i, r, o, s, a, l, u, c = this.items, f = [ [ e.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
                item: this.currentItem
            }) : e(this.options.items, this.element), this ] ], h = this._connectWith();
            if (h && this.ready) for (n = h.length - 1; n >= 0; n--) for (r = e(h[n], this.document[0]), i = r.length - 1; i >= 0; i--) (o = e.data(r[i], this.widgetFullName)) && o !== this && !o.options.disabled && (f.push([ e.isFunction(o.options.items) ? o.options.items.call(o.element[0], t, {
                item: this.currentItem
            }) : e(o.options.items, o.element), o ]), this.containers.push(o));
            for (n = f.length - 1; n >= 0; n--) for (s = f[n][1], a = f[n][0], i = 0, u = a.length; u > i; i++) (l = e(a[i])).data(this.widgetName + "-item", s), 
            c.push({
                item: l,
                instance: s,
                width: 0,
                height: 0,
                left: 0,
                top: 0
            });
        },
        refreshPositions: function(t) {
            this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)), 
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var n, i, r, o;
            for (n = this.items.length - 1; n >= 0; n--) (i = this.items[n]).instance !== this.currentContainer && this.currentContainer && i.item[0] !== this.currentItem[0] || (r = this.options.toleranceElement ? e(this.options.toleranceElement, i.item) : i.item, 
            t || (i.width = r.outerWidth(), i.height = r.outerHeight()), o = r.offset(), i.left = o.left, i.top = o.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this); else for (n = this.containers.length - 1; n >= 0; n--) o = this.containers[n].element.offset(), 
            this.containers[n].containerCache.left = o.left, this.containers[n].containerCache.top = o.top, this.containers[n].containerCache.width = this.containers[n].element.outerWidth(), 
            this.containers[n].containerCache.height = this.containers[n].element.outerHeight();
            return this;
        },
        _createPlaceholder: function(t) {
            var n, i = (t = t || this).options;
            i.placeholder && i.placeholder.constructor !== String || (n = i.placeholder, i.placeholder = {
                element: function() {
                    var i = t.currentItem[0].nodeName.toLowerCase(), r = e("<" + i + ">", t.document[0]).addClass(n || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                    return "tbody" === i ? t._createTrPlaceholder(t.currentItem.find("tr").eq(0), e("<tr>", t.document[0]).appendTo(r)) : "tr" === i ? t._createTrPlaceholder(t.currentItem, r) : "img" === i && r.attr("src", t.currentItem.attr("src")), 
                    n || r.css("visibility", "hidden"), r;
                },
                update: function(e, r) {
                    (!n || i.forcePlaceholderSize) && (r.height() || r.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), 
                    r.width() || r.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10)));
                }
            }), t.placeholder = e(i.placeholder.element.call(t.element, t.currentItem)), t.currentItem.after(t.placeholder), 
            i.placeholder.update(t, t.placeholder);
        },
        _createTrPlaceholder: function(t, n) {
            var i = this;
            t.children().each(function() {
                e("<td>&#160;</td>", i.document[0]).attr("colspan", e(this).attr("colspan") || 1).appendTo(n);
            });
        },
        _contactContainers: function(t) {
            var n, i, r, o, s, a, l, u, c, f, h = null, d = null;
            for (n = this.containers.length - 1; n >= 0; n--) if (!e.contains(this.currentItem[0], this.containers[n].element[0])) if (this._intersectsWith(this.containers[n].containerCache)) {
                if (h && e.contains(this.containers[n].element[0], h.element[0])) continue;
                h = this.containers[n], d = n;
            } else this.containers[n].containerCache.over && (this.containers[n]._trigger("out", t, this._uiHash(this)), 
            this.containers[n].containerCache.over = 0);
            if (h) if (1 === this.containers.length) this.containers[d].containerCache.over || (this.containers[d]._trigger("over", t, this._uiHash(this)), 
            this.containers[d].containerCache.over = 1); else {
                for (r = 1e4, o = null, s = (c = h.floating || this._isFloating(this.currentItem)) ? "left" : "top", 
                a = c ? "width" : "height", f = c ? "clientX" : "clientY", i = this.items.length - 1; i >= 0; i--) e.contains(this.containers[d].element[0], this.items[i].item[0]) && this.items[i].item[0] !== this.currentItem[0] && (l = this.items[i].item.offset()[s], 
                u = !1, t[f] - l > this.items[i][a] / 2 && (u = !0), r > Math.abs(t[f] - l) && (r = Math.abs(t[f] - l), 
                o = this.items[i], this.direction = u ? "up" : "down"));
                if (!o && !this.options.dropOnEmpty) return;
                if (this.currentContainer === this.containers[d]) return void (this.currentContainer.containerCache.over || (this.containers[d]._trigger("over", t, this._uiHash()), 
                this.currentContainer.containerCache.over = 1));
                o ? this._rearrange(t, o, null, !0) : this._rearrange(t, null, this.containers[d].element, !0), this._trigger("change", t, this._uiHash()), 
                this.containers[d]._trigger("change", t, this._uiHash(this)), this.currentContainer = this.containers[d], 
                this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[d]._trigger("over", t, this._uiHash(this)), 
                this.containers[d].containerCache.over = 1;
            }
        },
        _createHelper: function(t) {
            var n = this.options, i = e.isFunction(n.helper) ? e(n.helper.apply(this.element[0], [ t, this.currentItem ])) : "clone" === n.helper ? this.currentItem.clone() : this.currentItem;
            return i.parents("body").length || e("parent" !== n.appendTo ? n.appendTo : this.currentItem[0].parentNode)[0].appendChild(i[0]), 
            i[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (!i[0].style.width || n.forceHelperSize) && i.width(this.currentItem.width()), (!i[0].style.height || n.forceHelperSize) && i.height(this.currentItem.height()), 
            i;
        },
        _adjustOffsetFromHelper: function(t) {
            "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
                left: +t[0],
                top: +t[1] || 0
            }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), 
            "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top);
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var t = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), 
            t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {
                top: 0,
                left: 0
            }), {
                top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            };
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var e = this.currentItem.position();
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                };
            }
            return {
                top: 0,
                left: 0
            };
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            };
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            };
        },
        _setContainment: function() {
            var t, n, i, r = this.options;
            "parent" === r.containment && (r.containment = this.helper[0].parentNode), ("document" === r.containment || "window" === r.containment) && (this.containment = [ 0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === r.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === r.containment ? this.document.width() : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top ]), 
            /^(document|window|parent)$/.test(r.containment) || (t = e(r.containment)[0], n = e(r.containment).offset(), 
            i = "hidden" !== e(t).css("overflow"), this.containment = [ n.left + (parseInt(e(t).css("borderLeftWidth"), 10) || 0) + (parseInt(e(t).css("paddingLeft"), 10) || 0) - this.margins.left, n.top + (parseInt(e(t).css("borderTopWidth"), 10) || 0) + (parseInt(e(t).css("paddingTop"), 10) || 0) - this.margins.top, n.left + (i ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(e(t).css("borderLeftWidth"), 10) || 0) - (parseInt(e(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, n.top + (i ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(e(t).css("borderTopWidth"), 10) || 0) - (parseInt(e(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top ]);
        },
        _convertPositionTo: function(t, n) {
            n || (n = this.position);
            var i = "absolute" === t ? 1 : -1, r = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, o = /(html|body)/i.test(r[0].tagName);
            return {
                top: n.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : r.scrollTop()) * i,
                left: n.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : r.scrollLeft()) * i
            };
        },
        _generatePosition: function(t) {
            var n, i, r = this.options, o = t.pageX, s = t.pageY, a = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent, l = /(html|body)/i.test(a[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), 
            this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), 
            t.pageY - this.offset.click.top < this.containment[1] && (s = this.containment[1] + this.offset.click.top), 
            t.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), 
            t.pageY - this.offset.click.top > this.containment[3] && (s = this.containment[3] + this.offset.click.top)), 
            r.grid && (n = this.originalPageY + Math.round((s - this.originalPageY) / r.grid[1]) * r.grid[1], s = this.containment ? n - this.offset.click.top >= this.containment[1] && n - this.offset.click.top <= this.containment[3] ? n : n - this.offset.click.top >= this.containment[1] ? n - r.grid[1] : n + r.grid[1] : n, 
            i = this.originalPageX + Math.round((o - this.originalPageX) / r.grid[0]) * r.grid[0], o = this.containment ? i - this.offset.click.left >= this.containment[0] && i - this.offset.click.left <= this.containment[2] ? i : i - this.offset.click.left >= this.containment[0] ? i - r.grid[0] : i + r.grid[0] : i)), 
            {
                top: s - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : a.scrollTop()),
                left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : a.scrollLeft())
            };
        },
        _rearrange: function(e, t, n, i) {
            n ? n[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? t.item[0] : t.item[0].nextSibling), 
            this.counter = this.counter ? ++this.counter : 1;
            var r = this.counter;
            this._delay(function() {
                r === this.counter && this.refreshPositions(!i);
            });
        },
        _clear: function(e, t) {
            function n(e, t, n) {
                return function(i) {
                    n._trigger(e, i, t._uiHash(t));
                };
            }
            this.reverting = !1;
            var i, r = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), 
            this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (i in this._storedCSS) ("auto" === this._storedCSS[i] || "static" === this._storedCSS[i]) && (this._storedCSS[i] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
            } else this.currentItem.show();
            for (this.fromOutside && !t && r.push(function(e) {
                this._trigger("receive", e, this._uiHash(this.fromOutside));
            }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || t || r.push(function(e) {
                this._trigger("update", e, this._uiHash());
            }), this !== this.currentContainer && (t || (r.push(function(e) {
                this._trigger("remove", e, this._uiHash());
            }), r.push(function(e) {
                return function(t) {
                    e._trigger("receive", t, this._uiHash(this));
                };
            }.call(this, this.currentContainer)), r.push(function(e) {
                return function(t) {
                    e._trigger("update", t, this._uiHash(this));
                };
            }.call(this, this.currentContainer)))), i = this.containers.length - 1; i >= 0; i--) t || r.push(n("deactivate", this, this.containers[i])), 
            this.containers[i].containerCache.over && (r.push(n("out", this, this.containers[i])), this.containers[i].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), 
            this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), 
            this.dragging = !1, t || this._trigger("beforeStop", e, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), 
            this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), 
            !t) {
                for (i = 0; r.length > i; i++) r[i].call(this, e);
                this._trigger("stop", e, this._uiHash());
            }
            return this.fromOutside = !1, !this.cancelHelperRemoval;
        },
        _trigger: function() {
            !1 === e.Widget.prototype._trigger.apply(this, arguments) && this.cancel();
        },
        _uiHash: function(t) {
            var n = t || this;
            return {
                helper: n.helper,
                placeholder: n.placeholder || e([]),
                position: n.position,
                originalPosition: n.originalPosition,
                offset: n.positionAbs,
                item: n.currentItem,
                sender: t ? t.element : null
            };
        }
    }), e.widget("ui.slider", e.ui.mouse, {
        version: "1.11.4",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        numPages: 5,
        _create: function() {
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), 
            this._mouseInit(), this._calculateNewMax(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all"), 
            this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1;
        },
        _refresh: function() {
            this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue();
        },
        _createHandles: function() {
            var t, n, i = this.options, r = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"), o = [];
            for (n = i.values && i.values.length || 1, r.length > n && (r.slice(n).remove(), r = r.slice(0, n)), 
            t = r.length; n > t; t++) o.push("<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>");
            this.handles = r.add(e(o.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function(t) {
                e(this).data("ui-slider-handle-index", t);
            });
        },
        _createRange: function() {
            var t = this.options, n = "";
            t.range ? (!0 === t.range && (t.values ? t.values.length && 2 !== t.values.length ? t.values = [ t.values[0], t.values[0] ] : e.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [ this._valueMin(), this._valueMin() ]), 
            this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                left: "",
                bottom: ""
            }) : (this.range = e("<div></div>").appendTo(this.element), n = "ui-slider-range ui-widget-header ui-corner-all"), 
            this.range.addClass(n + ("min" === t.range || "max" === t.range ? " ui-slider-range-" + t.range : ""))) : (this.range && this.range.remove(), 
            this.range = null);
        },
        _setupEvents: function() {
            this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), 
            this._focusable(this.handles);
        },
        _destroy: function() {
            this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), 
            this._mouseDestroy();
        },
        _mouseCapture: function(t) {
            var n, i, r, o, s, a, l, u = this, c = this.options;
            return !c.disabled && (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), n = {
                x: t.pageX,
                y: t.pageY
            }, i = this._normValueFromMouse(n), r = this._valueMax() - this._valueMin() + 1, this.handles.each(function(t) {
                var n = Math.abs(i - u.values(t));
                (r > n || r === n && (t === u._lastChangedValue || u.values(t) === c.min)) && (r = n, o = e(this), s = t);
            }), !1 !== this._start(t, s) && (this._mouseSliding = !0, this._handleIndex = s, o.addClass("ui-state-active").focus(), 
            a = o.offset(), l = !e(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
                left: 0,
                top: 0
            } : {
                left: t.pageX - a.left - o.width() / 2,
                top: t.pageY - a.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(t, s, i), this._animateOff = !0, !0));
        },
        _mouseStart: function() {
            return !0;
        },
        _mouseDrag: function(e) {
            var t = {
                x: e.pageX,
                y: e.pageY
            }, n = this._normValueFromMouse(t);
            return this._slide(e, this._handleIndex, n), !1;
        },
        _mouseStop: function(e) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(e, this._handleIndex), 
            this._change(e, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, 
            !1;
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal";
        },
        _normValueFromMouse: function(e) {
            var t, n, i, r, o;
            return "horizontal" === this.orientation ? (t = this.elementSize.width, n = e.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (t = this.elementSize.height, 
            n = e.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), (i = n / t) > 1 && (i = 1), 
            0 > i && (i = 0), "vertical" === this.orientation && (i = 1 - i), r = this._valueMax() - this._valueMin(), 
            o = this._valueMin() + i * r, this._trimAlignValue(o);
        },
        _start: function(e, t) {
            var n = {
                handle: this.handles[t],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), 
            this._trigger("start", e, n);
        },
        _slide: function(e, t, n) {
            var i, r, o;
            this.options.values && this.options.values.length ? (i = this.values(t ? 0 : 1), 2 === this.options.values.length && !0 === this.options.range && (0 === t && n > i || 1 === t && i > n) && (n = i), 
            n !== this.values(t) && (r = this.values(), r[t] = n, o = this._trigger("slide", e, {
                handle: this.handles[t],
                value: n,
                values: r
            }), i = this.values(t ? 0 : 1), !1 !== o && this.values(t, n))) : n !== this.value() && !1 !== (o = this._trigger("slide", e, {
                handle: this.handles[t],
                value: n
            })) && this.value(n);
        },
        _stop: function(e, t) {
            var n = {
                handle: this.handles[t],
                value: this.value()
            };
            this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), 
            this._trigger("stop", e, n);
        },
        _change: function(e, t) {
            if (!this._keySliding && !this._mouseSliding) {
                var n = {
                    handle: this.handles[t],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (n.value = this.values(t), n.values = this.values()), 
                this._lastChangedValue = t, this._trigger("change", e, n);
            }
        },
        value: function(e) {
            return arguments.length ? (this.options.value = this._trimAlignValue(e), this._refreshValue(), void this._change(null, 0)) : this._value();
        },
        values: function(t, n) {
            var i, r, o;
            if (arguments.length > 1) return this.options.values[t] = this._trimAlignValue(n), this._refreshValue(), 
            void this._change(null, t);
            if (!arguments.length) return this._values();
            if (!e.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(t) : this.value();
            for (i = this.options.values, r = arguments[0], o = 0; i.length > o; o += 1) i[o] = this._trimAlignValue(r[o]), 
            this._change(null, o);
            this._refreshValue();
        },
        _setOption: function(t, n) {
            var i, r = 0;
            switch ("range" === t && !0 === this.options.range && ("min" === n ? (this.options.value = this._values(0), 
            this.options.values = null) : "max" === n && (this.options.value = this._values(this.options.values.length - 1), 
            this.options.values = null)), e.isArray(this.options.values) && (r = this.options.values.length), "disabled" === t && this.element.toggleClass("ui-state-disabled", !!n), 
            this._super(t, n), t) {
              case "orientation":
                this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), 
                this._refreshValue(), this.handles.css("horizontal" === n ? "bottom" : "left", "");
                break;

              case "value":
                this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                break;

              case "values":
                for (this._animateOff = !0, this._refreshValue(), i = 0; r > i; i += 1) this._change(null, i);
                this._animateOff = !1;
                break;

              case "step":
              case "min":
              case "max":
                this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                break;

              case "range":
                this._animateOff = !0, this._refresh(), this._animateOff = !1;
            }
        },
        _value: function() {
            var e = this.options.value;
            return e = this._trimAlignValue(e);
        },
        _values: function(e) {
            var t, n, i;
            if (arguments.length) return t = this.options.values[e], t = this._trimAlignValue(t);
            if (this.options.values && this.options.values.length) {
                for (n = this.options.values.slice(), i = 0; n.length > i; i += 1) n[i] = this._trimAlignValue(n[i]);
                return n;
            }
            return [];
        },
        _trimAlignValue: function(e) {
            if (this._valueMin() >= e) return this._valueMin();
            if (e >= this._valueMax()) return this._valueMax();
            var t = this.options.step > 0 ? this.options.step : 1, n = (e - this._valueMin()) % t, i = e - n;
            return 2 * Math.abs(n) >= t && (i += n > 0 ? t : -t), parseFloat(i.toFixed(5));
        },
        _calculateNewMax: function() {
            var e = this.options.max, t = this._valueMin(), n = this.options.step;
            e = Math.floor(+(e - t).toFixed(this._precision()) / n) * n + t, this.max = parseFloat(e.toFixed(this._precision()));
        },
        _precision: function() {
            var e = this._precisionOf(this.options.step);
            return null !== this.options.min && (e = Math.max(e, this._precisionOf(this.options.min))), e;
        },
        _precisionOf: function(e) {
            var t = "" + e, n = t.indexOf(".");
            return -1 === n ? 0 : t.length - n - 1;
        },
        _valueMin: function() {
            return this.options.min;
        },
        _valueMax: function() {
            return this.max;
        },
        _refreshValue: function() {
            var t, n, i, r, o, s = this.options.range, a = this.options, l = this, u = !this._animateOff && a.animate, c = {};
            this.options.values && this.options.values.length ? this.handles.each(function(i) {
                n = (l.values(i) - l._valueMin()) / (l._valueMax() - l._valueMin()) * 100, c["horizontal" === l.orientation ? "left" : "bottom"] = n + "%", 
                e(this).stop(1, 1)[u ? "animate" : "css"](c, a.animate), !0 === l.options.range && ("horizontal" === l.orientation ? (0 === i && l.range.stop(1, 1)[u ? "animate" : "css"]({
                    left: n + "%"
                }, a.animate), 1 === i && l.range[u ? "animate" : "css"]({
                    width: n - t + "%"
                }, {
                    queue: !1,
                    duration: a.animate
                })) : (0 === i && l.range.stop(1, 1)[u ? "animate" : "css"]({
                    bottom: n + "%"
                }, a.animate), 1 === i && l.range[u ? "animate" : "css"]({
                    height: n - t + "%"
                }, {
                    queue: !1,
                    duration: a.animate
                }))), t = n;
            }) : (i = this.value(), r = this._valueMin(), o = this._valueMax(), n = o !== r ? (i - r) / (o - r) * 100 : 0, 
            c["horizontal" === this.orientation ? "left" : "bottom"] = n + "%", this.handle.stop(1, 1)[u ? "animate" : "css"](c, a.animate), 
            "min" === s && "horizontal" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({
                width: n + "%"
            }, a.animate), "max" === s && "horizontal" === this.orientation && this.range[u ? "animate" : "css"]({
                width: 100 - n + "%"
            }, {
                queue: !1,
                duration: a.animate
            }), "min" === s && "vertical" === this.orientation && this.range.stop(1, 1)[u ? "animate" : "css"]({
                height: n + "%"
            }, a.animate), "max" === s && "vertical" === this.orientation && this.range[u ? "animate" : "css"]({
                height: 100 - n + "%"
            }, {
                queue: !1,
                duration: a.animate
            }));
        },
        _handleEvents: {
            keydown: function(t) {
                var n, i, r, o = e(t.target).data("ui-slider-handle-index");
                switch (t.keyCode) {
                  case e.ui.keyCode.HOME:
                  case e.ui.keyCode.END:
                  case e.ui.keyCode.PAGE_UP:
                  case e.ui.keyCode.PAGE_DOWN:
                  case e.ui.keyCode.UP:
                  case e.ui.keyCode.RIGHT:
                  case e.ui.keyCode.DOWN:
                  case e.ui.keyCode.LEFT:
                    if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, e(t.target).addClass("ui-state-active"), 
                    !1 === this._start(t, o))) return;
                }
                switch (r = this.options.step, n = i = this.options.values && this.options.values.length ? this.values(o) : this.value(), 
                t.keyCode) {
                  case e.ui.keyCode.HOME:
                    i = this._valueMin();
                    break;

                  case e.ui.keyCode.END:
                    i = this._valueMax();
                    break;

                  case e.ui.keyCode.PAGE_UP:
                    i = this._trimAlignValue(n + (this._valueMax() - this._valueMin()) / this.numPages);
                    break;

                  case e.ui.keyCode.PAGE_DOWN:
                    i = this._trimAlignValue(n - (this._valueMax() - this._valueMin()) / this.numPages);
                    break;

                  case e.ui.keyCode.UP:
                  case e.ui.keyCode.RIGHT:
                    if (n === this._valueMax()) return;
                    i = this._trimAlignValue(n + r);
                    break;

                  case e.ui.keyCode.DOWN:
                  case e.ui.keyCode.LEFT:
                    if (n === this._valueMin()) return;
                    i = this._trimAlignValue(n - r);
                }
                this._slide(t, o, i);
            },
            keyup: function(t) {
                var n = e(t.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(t, n), this._change(t, n), e(t.target).removeClass("ui-state-active"));
            }
        }
    });
    var s = e;
    e.effects = {
        effect: {}
    }, function(e, t) {
        function n(e, t, n) {
            var i = c[t.type] || {};
            return null == e ? n || !t.def ? null : t.def : (e = i.floor ? ~~e : parseFloat(e), isNaN(e) ? t.def : i.mod ? (e + i.mod) % i.mod : 0 > e ? 0 : e > i.max ? i.max : e);
        }
        function i(n) {
            var i = l(), r = i._rgba = [];
            return n = n.toLowerCase(), d(a, function(e, o) {
                var s, a = o.re.exec(n), l = a && o.parse(a), c = o.space || "rgba";
                return l ? (s = i[c](l), i[u[c].cache] = s[u[c].cache], r = i._rgba = s._rgba, !1) : t;
            }), r.length ? ("0,0,0,0" === r.join() && e.extend(r, o.transparent), i) : o[n];
        }
        function r(e, t, n) {
            return 1 > 6 * (n = (n + 1) % 1) ? e + 6 * (t - e) * n : 1 > 2 * n ? t : 2 > 3 * n ? e + 6 * (t - e) * (2 / 3 - n) : e;
        }
        var o, s = /^([\-+])=\s*(\d+\.?\d*)/, a = [ {
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(e) {
                return [ e[1], e[2], e[3], e[4] ];
            }
        }, {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function(e) {
                return [ 2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4] ];
            }
        }, {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
            parse: function(e) {
                return [ parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16) ];
            }
        }, {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
            parse: function(e) {
                return [ parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16) ];
            }
        }, {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function(e) {
                return [ e[1], e[2] / 100, e[3] / 100, e[4] ];
            }
        } ], l = e.Color = function(t, n, i, r) {
            return new e.Color.fn.parse(t, n, i, r);
        }, u = {
            rgba: {
                props: {
                    red: {
                        idx: 0,
                        type: "byte"
                    },
                    green: {
                        idx: 1,
                        type: "byte"
                    },
                    blue: {
                        idx: 2,
                        type: "byte"
                    }
                }
            },
            hsla: {
                props: {
                    hue: {
                        idx: 0,
                        type: "degrees"
                    },
                    saturation: {
                        idx: 1,
                        type: "percent"
                    },
                    lightness: {
                        idx: 2,
                        type: "percent"
                    }
                }
            }
        }, c = {
            byte: {
                floor: !0,
                max: 255
            },
            percent: {
                max: 1
            },
            degrees: {
                mod: 360,
                floor: !0
            }
        }, f = l.support = {}, h = e("<p>")[0], d = e.each;
        h.style.cssText = "background-color:rgba(1,1,1,.5)", f.rgba = h.style.backgroundColor.indexOf("rgba") > -1, 
        d(u, function(e, t) {
            t.cache = "_" + e, t.props.alpha = {
                idx: 3,
                type: "percent",
                def: 1
            };
        }), l.fn = e.extend(l.prototype, {
            parse: function(r, s, a, c) {
                if (r === t) return this._rgba = [ null, null, null, null ], this;
                (r.jquery || r.nodeType) && (r = e(r).css(s), s = t);
                var f = this, h = e.type(r), p = this._rgba = [];
                return s !== t && (r = [ r, s, a, c ], h = "array"), "string" === h ? this.parse(i(r) || o._default) : "array" === h ? (d(u.rgba.props, function(e, t) {
                    p[t.idx] = n(r[t.idx], t);
                }), this) : "object" === h ? (r instanceof l ? d(u, function(e, t) {
                    r[t.cache] && (f[t.cache] = r[t.cache].slice());
                }) : d(u, function(t, i) {
                    var o = i.cache;
                    d(i.props, function(e, t) {
                        if (!f[o] && i.to) {
                            if ("alpha" === e || null == r[e]) return;
                            f[o] = i.to(f._rgba);
                        }
                        f[o][t.idx] = n(r[e], t, !0);
                    }), f[o] && 0 > e.inArray(null, f[o].slice(0, 3)) && (f[o][3] = 1, i.from && (f._rgba = i.from(f[o])));
                }), this) : t;
            },
            is: function(e) {
                var n = l(e), i = !0, r = this;
                return d(u, function(e, o) {
                    var s, a = n[o.cache];
                    return a && (s = r[o.cache] || o.to && o.to(r._rgba) || [], d(o.props, function(e, n) {
                        return null != a[n.idx] ? i = a[n.idx] === s[n.idx] : t;
                    })), i;
                }), i;
            },
            _space: function() {
                var e = [], t = this;
                return d(u, function(n, i) {
                    t[i.cache] && e.push(n);
                }), e.pop();
            },
            transition: function(e, t) {
                var i = l(e), r = i._space(), o = u[r], s = 0 === this.alpha() ? l("transparent") : this, a = s[o.cache] || o.to(s._rgba), f = a.slice();
                return i = i[o.cache], d(o.props, function(e, r) {
                    var o = r.idx, s = a[o], l = i[o], u = c[r.type] || {};
                    null !== l && (null === s ? f[o] = l : (u.mod && (l - s > u.mod / 2 ? s += u.mod : s - l > u.mod / 2 && (s -= u.mod)), 
                    f[o] = n((l - s) * t + s, r)));
                }), this[r](f);
            },
            blend: function(t) {
                if (1 === this._rgba[3]) return this;
                var n = this._rgba.slice(), i = n.pop(), r = l(t)._rgba;
                return l(e.map(n, function(e, t) {
                    return (1 - i) * r[t] + i * e;
                }));
            },
            toRgbaString: function() {
                var t = "rgba(", n = e.map(this._rgba, function(e, t) {
                    return null == e ? t > 2 ? 1 : 0 : e;
                });
                return 1 === n[3] && (n.pop(), t = "rgb("), t + n.join() + ")";
            },
            toHslaString: function() {
                var t = "hsla(", n = e.map(this.hsla(), function(e, t) {
                    return null == e && (e = t > 2 ? 1 : 0), t && 3 > t && (e = Math.round(100 * e) + "%"), e;
                });
                return 1 === n[3] && (n.pop(), t = "hsl("), t + n.join() + ")";
            },
            toHexString: function(t) {
                var n = this._rgba.slice(), i = n.pop();
                return t && n.push(~~(255 * i)), "#" + e.map(n, function(e) {
                    return 1 === (e = (e || 0).toString(16)).length ? "0" + e : e;
                }).join("");
            },
            toString: function() {
                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString();
            }
        }), l.fn.parse.prototype = l.fn, u.hsla.to = function(e) {
            if (null == e[0] || null == e[1] || null == e[2]) return [ null, null, null, e[3] ];
            var t, n, i = e[0] / 255, r = e[1] / 255, o = e[2] / 255, s = e[3], a = Math.max(i, r, o), l = Math.min(i, r, o), u = a - l, c = a + l, f = .5 * c;
            return t = l === a ? 0 : i === a ? 60 * (r - o) / u + 360 : r === a ? 60 * (o - i) / u + 120 : 60 * (i - r) / u + 240, 
            n = 0 === u ? 0 : .5 >= f ? u / c : u / (2 - c), [ Math.round(t) % 360, n, f, null == s ? 1 : s ];
        }, u.hsla.from = function(e) {
            if (null == e[0] || null == e[1] || null == e[2]) return [ null, null, null, e[3] ];
            var t = e[0] / 360, n = e[1], i = e[2], o = e[3], s = .5 >= i ? i * (1 + n) : i + n - i * n, a = 2 * i - s;
            return [ Math.round(255 * r(a, s, t + 1 / 3)), Math.round(255 * r(a, s, t)), Math.round(255 * r(a, s, t - 1 / 3)), o ];
        }, d(u, function(i, r) {
            var o = r.props, a = r.cache, u = r.to, c = r.from;
            l.fn[i] = function(i) {
                if (u && !this[a] && (this[a] = u(this._rgba)), i === t) return this[a].slice();
                var r, s = e.type(i), f = "array" === s || "object" === s ? i : arguments, h = this[a].slice();
                return d(o, function(e, t) {
                    var i = f["object" === s ? e : t.idx];
                    null == i && (i = h[t.idx]), h[t.idx] = n(i, t);
                }), c ? (r = l(c(h)), r[a] = h, r) : l(h);
            }, d(o, function(t, n) {
                l.fn[t] || (l.fn[t] = function(r) {
                    var o, a = e.type(r), l = "alpha" === t ? this._hsla ? "hsla" : "rgba" : i, u = this[l](), c = u[n.idx];
                    return "undefined" === a ? c : ("function" === a && (r = r.call(this, c), a = e.type(r)), null == r && n.empty ? this : ("string" === a && (o = s.exec(r)) && (r = c + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1)), 
                    u[n.idx] = r, this[l](u)));
                });
            });
        }), l.hook = function(t) {
            var n = t.split(" ");
            d(n, function(t, n) {
                e.cssHooks[n] = {
                    set: function(t, r) {
                        var o, s, a = "";
                        if ("transparent" !== r && ("string" !== e.type(r) || (o = i(r)))) {
                            if (r = l(o || r), !f.rgba && 1 !== r._rgba[3]) {
                                for (s = "backgroundColor" === n ? t.parentNode : t; ("" === a || "transparent" === a) && s && s.style; ) try {
                                    a = e.css(s, "backgroundColor"), s = s.parentNode;
                                } catch (e) {}
                                r = r.blend(a && "transparent" !== a ? a : "_default");
                            }
                            r = r.toRgbaString();
                        }
                        try {
                            t.style[n] = r;
                        } catch (e) {}
                    }
                }, e.fx.step[n] = function(t) {
                    t.colorInit || (t.start = l(t.elem, n), t.end = l(t.end), t.colorInit = !0), e.cssHooks[n].set(t.elem, t.start.transition(t.end, t.pos));
                };
            });
        }, l.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"), 
        e.cssHooks.borderColor = {
            expand: function(e) {
                var t = {};
                return d([ "Top", "Right", "Bottom", "Left" ], function(n, i) {
                    t["border" + i + "Color"] = e;
                }), t;
            }
        }, o = e.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [ null, null, null, 0 ],
            _default: "#ffffff"
        };
    }(s), function() {
        function t(t) {
            var n, i, r = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle, o = {};
            if (r && r.length && r[0] && r[r[0]]) for (i = r.length; i--; ) n = r[i], "string" == typeof r[n] && (o[e.camelCase(n)] = r[n]); else for (n in r) "string" == typeof r[n] && (o[n] = r[n]);
            return o;
        }
        var n = [ "add", "remove", "toggle" ], i = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
        e.each([ "borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle" ], function(t, n) {
            e.fx.step[n] = function(e) {
                ("none" !== e.end && !e.setAttr || 1 === e.pos && !e.setAttr) && (s.style(e.elem, n, e.end), e.setAttr = !0);
            };
        }), e.fn.addBack || (e.fn.addBack = function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        }), e.effects.animateClass = function(r, o, s, a) {
            var l = e.speed(o, s, a);
            return this.queue(function() {
                var o, s = e(this), a = s.attr("class") || "", u = l.children ? s.find("*").addBack() : s;
                u = u.map(function() {
                    return {
                        el: e(this),
                        start: t(this)
                    };
                }), (o = function() {
                    e.each(n, function(e, t) {
                        r[t] && s[t + "Class"](r[t]);
                    });
                })(), u = u.map(function() {
                    return this.end = t(this.el[0]), this.diff = function(t, n) {
                        var r, o, s = {};
                        for (r in n) o = n[r], t[r] !== o && (i[r] || (e.fx.step[r] || !isNaN(parseFloat(o))) && (s[r] = o));
                        return s;
                    }(this.start, this.end), this;
                }), s.attr("class", a), u = u.map(function() {
                    var t = this, n = e.Deferred(), i = e.extend({}, l, {
                        queue: !1,
                        complete: function() {
                            n.resolve(t);
                        }
                    });
                    return this.el.animate(this.diff, i), n.promise();
                }), e.when.apply(e, u.get()).done(function() {
                    o(), e.each(arguments, function() {
                        var t = this.el;
                        e.each(this.diff, function(e) {
                            t.css(e, "");
                        });
                    }), l.complete.call(s[0]);
                });
            });
        }, e.fn.extend({
            addClass: function(t) {
                return function(n, i, r, o) {
                    return i ? e.effects.animateClass.call(this, {
                        add: n
                    }, i, r, o) : t.apply(this, arguments);
                };
            }(e.fn.addClass),
            removeClass: function(t) {
                return function(n, i, r, o) {
                    return arguments.length > 1 ? e.effects.animateClass.call(this, {
                        remove: n
                    }, i, r, o) : t.apply(this, arguments);
                };
            }(e.fn.removeClass),
            toggleClass: function(t) {
                return function(n, i, r, o, s) {
                    return "boolean" == typeof i || void 0 === i ? r ? e.effects.animateClass.call(this, i ? {
                        add: n
                    } : {
                        remove: n
                    }, r, o, s) : t.apply(this, arguments) : e.effects.animateClass.call(this, {
                        toggle: n
                    }, i, r, o);
                };
            }(e.fn.toggleClass),
            switchClass: function(t, n, i, r, o) {
                return e.effects.animateClass.call(this, {
                    add: n,
                    remove: t
                }, i, r, o);
            }
        });
    }(), function() {
        function t(t, n, i, r) {
            return e.isPlainObject(t) && (n = t, t = t.effect), t = {
                effect: t
            }, null == n && (n = {}), e.isFunction(n) && (r = n, i = null, n = {}), ("number" == typeof n || e.fx.speeds[n]) && (r = i, 
            i = n, n = {}), e.isFunction(i) && (r = i, i = null), n && e.extend(t, n), i = i || n.duration, t.duration = e.fx.off ? 0 : "number" == typeof i ? i : i in e.fx.speeds ? e.fx.speeds[i] : e.fx.speeds._default, 
            t.complete = r || n.complete, t;
        }
        function n(t) {
            return !(t && "number" != typeof t && !e.fx.speeds[t]) || ("string" == typeof t && !e.effects.effect[t] || (!!e.isFunction(t) || "object" == typeof t && !t.effect));
        }
        e.extend(e.effects, {
            version: "1.11.4",
            save: function(e, t) {
                for (var n = 0; t.length > n; n++) null !== t[n] && e.data("ui-effects-" + t[n], e[0].style[t[n]]);
            },
            restore: function(e, t) {
                var n, i;
                for (i = 0; t.length > i; i++) null !== t[i] && (void 0 === (n = e.data("ui-effects-" + t[i])) && (n = ""), 
                e.css(t[i], n));
            },
            setMode: function(e, t) {
                return "toggle" === t && (t = e.is(":hidden") ? "show" : "hide"), t;
            },
            getBaseline: function(e, t) {
                var n, i;
                switch (e[0]) {
                  case "top":
                    n = 0;
                    break;

                  case "middle":
                    n = .5;
                    break;

                  case "bottom":
                    n = 1;
                    break;

                  default:
                    n = e[0] / t.height;
                }
                switch (e[1]) {
                  case "left":
                    i = 0;
                    break;

                  case "center":
                    i = .5;
                    break;

                  case "right":
                    i = 1;
                    break;

                  default:
                    i = e[1] / t.width;
                }
                return {
                    x: i,
                    y: n
                };
            },
            createWrapper: function(t) {
                if (t.parent().is(".ui-effects-wrapper")) return t.parent();
                var n = {
                    width: t.outerWidth(!0),
                    height: t.outerHeight(!0),
                    float: t.css("float")
                }, i = e("<div></div>").addClass("ui-effects-wrapper").css({
                    fontSize: "100%",
                    background: "transparent",
                    border: "none",
                    margin: 0,
                    padding: 0
                }), r = {
                    width: t.width(),
                    height: t.height()
                }, o = document.activeElement;
                try {
                    o.id;
                } catch (e) {
                    o = document.body;
                }
                return t.wrap(i), (t[0] === o || e.contains(t[0], o)) && e(o).focus(), i = t.parent(), "static" === t.css("position") ? (i.css({
                    position: "relative"
                }), t.css({
                    position: "relative"
                })) : (e.extend(n, {
                    position: t.css("position"),
                    zIndex: t.css("z-index")
                }), e.each([ "top", "left", "bottom", "right" ], function(e, i) {
                    n[i] = t.css(i), isNaN(parseInt(n[i], 10)) && (n[i] = "auto");
                }), t.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })), t.css(r), i.css(n).show();
            },
            removeWrapper: function(t) {
                var n = document.activeElement;
                return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === n || e.contains(t[0], n)) && e(n).focus()), 
                t;
            },
            setTransition: function(t, n, i, r) {
                return r = r || {}, e.each(n, function(e, n) {
                    var o = t.cssUnit(n);
                    o[0] > 0 && (r[n] = o[0] * i + o[1]);
                }), r;
            }
        }), e.fn.extend({
            effect: function() {
                function n(t) {
                    function n() {
                        e.isFunction(o) && o.call(r[0]), e.isFunction(t) && t();
                    }
                    var r = e(this), o = i.complete, a = i.mode;
                    (r.is(":hidden") ? "hide" === a : "show" === a) ? (r[a](), n()) : s.call(r[0], i, n);
                }
                var i = t.apply(this, arguments), r = i.mode, o = i.queue, s = e.effects.effect[i.effect];
                return e.fx.off || !s ? r ? this[r](i.duration, i.complete) : this.each(function() {
                    i.complete && i.complete.call(this);
                }) : !1 === o ? this.each(n) : this.queue(o || "fx", n);
            },
            show: function(e) {
                return function(i) {
                    if (n(i)) return e.apply(this, arguments);
                    var r = t.apply(this, arguments);
                    return r.mode = "show", this.effect.call(this, r);
                };
            }(e.fn.show),
            hide: function(e) {
                return function(i) {
                    if (n(i)) return e.apply(this, arguments);
                    var r = t.apply(this, arguments);
                    return r.mode = "hide", this.effect.call(this, r);
                };
            }(e.fn.hide),
            toggle: function(e) {
                return function(i) {
                    if (n(i) || "boolean" == typeof i) return e.apply(this, arguments);
                    var r = t.apply(this, arguments);
                    return r.mode = "toggle", this.effect.call(this, r);
                };
            }(e.fn.toggle),
            cssUnit: function(t) {
                var n = this.css(t), i = [];
                return e.each([ "em", "px", "%", "pt" ], function(e, t) {
                    n.indexOf(t) > 0 && (i = [ parseFloat(n), t ]);
                }), i;
            }
        });
    }(), function() {
        var t = {};
        e.each([ "Quad", "Cubic", "Quart", "Quint", "Expo" ], function(e, n) {
            t[n] = function(t) {
                return Math.pow(t, e + 2);
            };
        }), e.extend(t, {
            Sine: function(e) {
                return 1 - Math.cos(e * Math.PI / 2);
            },
            Circ: function(e) {
                return 1 - Math.sqrt(1 - e * e);
            },
            Elastic: function(e) {
                return 0 === e || 1 === e ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin((80 * (e - 1) - 7.5) * Math.PI / 15);
            },
            Back: function(e) {
                return e * e * (3 * e - 2);
            },
            Bounce: function(e) {
                for (var t, n = 4; ((t = Math.pow(2, --n)) - 1) / 11 > e; ) ;
                return 1 / Math.pow(4, 3 - n) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2);
            }
        }), e.each(t, function(t, n) {
            e.easing["easeIn" + t] = n, e.easing["easeOut" + t] = function(e) {
                return 1 - n(1 - e);
            }, e.easing["easeInOut" + t] = function(e) {
                return .5 > e ? n(2 * e) / 2 : 1 - n(-2 * e + 2) / 2;
            };
        });
    }(), e.effects, e.effects.effect.blind = function(t, n) {
        var i, r, o, s = e(this), a = [ "position", "top", "bottom", "left", "right", "height", "width" ], l = e.effects.setMode(s, t.mode || "hide"), u = t.direction || "up", c = /up|down|vertical/.test(u), f = c ? "height" : "width", h = c ? "top" : "left", d = /up|left|vertical|horizontal/.test(u), p = {}, m = "show" === l;
        s.parent().is(".ui-effects-wrapper") ? e.effects.save(s.parent(), a) : e.effects.save(s, a), s.show(), 
        r = (i = e.effects.createWrapper(s).css({
            overflow: "hidden"
        }))[f](), o = parseFloat(i.css(h)) || 0, p[f] = m ? r : 0, d || (s.css(c ? "bottom" : "right", 0).css(c ? "top" : "left", "auto").css({
            position: "absolute"
        }), p[h] = m ? o : r + o), m && (i.css(f, 0), d || i.css(h, o + r)), i.animate(p, {
            duration: t.duration,
            easing: t.easing,
            queue: !1,
            complete: function() {
                "hide" === l && s.hide(), e.effects.restore(s, a), e.effects.removeWrapper(s), n();
            }
        });
    }, e.effects.effect.bounce = function(t, n) {
        var i, r, o, s = e(this), a = [ "position", "top", "bottom", "left", "right", "height", "width" ], l = e.effects.setMode(s, t.mode || "effect"), u = "hide" === l, c = "show" === l, f = t.direction || "up", h = t.distance, d = t.times || 5, p = 2 * d + (c || u ? 1 : 0), m = t.duration / p, v = t.easing, g = "up" === f || "down" === f ? "top" : "left", y = "up" === f || "left" === f, b = s.queue(), _ = b.length;
        for ((c || u) && a.push("opacity"), e.effects.save(s, a), s.show(), e.effects.createWrapper(s), h || (h = s["top" === g ? "outerHeight" : "outerWidth"]() / 3), 
        c && (o = {
            opacity: 1
        }, o[g] = 0, s.css("opacity", 0).css(g, y ? 2 * -h : 2 * h).animate(o, m, v)), u && (h /= Math.pow(2, d - 1)), 
        (o = {})[g] = 0, i = 0; d > i; i++) r = {}, r[g] = (y ? "-=" : "+=") + h, s.animate(r, m, v).animate(o, m, v), 
        h = u ? 2 * h : h / 2;
        u && (r = {
            opacity: 0
        }, r[g] = (y ? "-=" : "+=") + h, s.animate(r, m, v)), s.queue(function() {
            u && s.hide(), e.effects.restore(s, a), e.effects.removeWrapper(s), n();
        }), _ > 1 && b.splice.apply(b, [ 1, 0 ].concat(b.splice(_, p + 1))), s.dequeue();
    }, e.effects.effect.clip = function(t, n) {
        var i, r, o, s = e(this), a = [ "position", "top", "bottom", "left", "right", "height", "width" ], l = "show" === e.effects.setMode(s, t.mode || "hide"), u = "vertical" === (t.direction || "vertical"), c = u ? "height" : "width", f = u ? "top" : "left", h = {};
        e.effects.save(s, a), s.show(), i = e.effects.createWrapper(s).css({
            overflow: "hidden"
        }), o = (r = "IMG" === s[0].tagName ? i : s)[c](), l && (r.css(c, 0), r.css(f, o / 2)), h[c] = l ? o : 0, 
        h[f] = l ? 0 : o / 2, r.animate(h, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function() {
                l || s.hide(), e.effects.restore(s, a), e.effects.removeWrapper(s), n();
            }
        });
    }, e.effects.effect.drop = function(t, n) {
        var i, r = e(this), o = [ "position", "top", "bottom", "left", "right", "opacity", "height", "width" ], s = e.effects.setMode(r, t.mode || "hide"), a = "show" === s, l = t.direction || "left", u = "up" === l || "down" === l ? "top" : "left", c = "up" === l || "left" === l ? "pos" : "neg", f = {
            opacity: a ? 1 : 0
        };
        e.effects.save(r, o), r.show(), e.effects.createWrapper(r), i = t.distance || r["top" === u ? "outerHeight" : "outerWidth"](!0) / 2, 
        a && r.css("opacity", 0).css(u, "pos" === c ? -i : i), f[u] = (a ? "pos" === c ? "+=" : "-=" : "pos" === c ? "-=" : "+=") + i, 
        r.animate(f, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function() {
                "hide" === s && r.hide(), e.effects.restore(r, o), e.effects.removeWrapper(r), n();
            }
        });
    }, e.effects.effect.explode = function(t, n) {
        function i() {
            g.push(this), g.length === c * f && (h.css({
                visibility: "visible"
            }), e(g).remove(), d || h.hide(), n());
        }
        var r, o, s, a, l, u, c = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3, f = c, h = e(this), d = "show" === e.effects.setMode(h, t.mode || "hide"), p = h.show().css("visibility", "hidden").offset(), m = Math.ceil(h.outerWidth() / f), v = Math.ceil(h.outerHeight() / c), g = [];
        for (r = 0; c > r; r++) for (a = p.top + r * v, u = r - (c - 1) / 2, o = 0; f > o; o++) s = p.left + o * m, 
        l = o - (f - 1) / 2, h.clone().appendTo("body").wrap("<div></div>").css({
            position: "absolute",
            visibility: "visible",
            left: -o * m,
            top: -r * v
        }).parent().addClass("ui-effects-explode").css({
            position: "absolute",
            overflow: "hidden",
            width: m,
            height: v,
            left: s + (d ? l * m : 0),
            top: a + (d ? u * v : 0),
            opacity: d ? 0 : 1
        }).animate({
            left: s + (d ? 0 : l * m),
            top: a + (d ? 0 : u * v),
            opacity: d ? 1 : 0
        }, t.duration || 500, t.easing, i);
    }, e.effects.effect.fade = function(t, n) {
        var i = e(this), r = e.effects.setMode(i, t.mode || "toggle");
        i.animate({
            opacity: r
        }, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: n
        });
    }, e.effects.effect.fold = function(t, n) {
        var i, r, o = e(this), s = [ "position", "top", "bottom", "left", "right", "height", "width" ], a = e.effects.setMode(o, t.mode || "hide"), l = "show" === a, u = "hide" === a, c = t.size || 15, f = /([0-9]+)%/.exec(c), h = !!t.horizFirst, d = l !== h, p = d ? [ "width", "height" ] : [ "height", "width" ], m = t.duration / 2, v = {}, g = {};
        e.effects.save(o, s), o.show(), i = e.effects.createWrapper(o).css({
            overflow: "hidden"
        }), r = d ? [ i.width(), i.height() ] : [ i.height(), i.width() ], f && (c = parseInt(f[1], 10) / 100 * r[u ? 0 : 1]), 
        l && i.css(h ? {
            height: 0,
            width: c
        } : {
            height: c,
            width: 0
        }), v[p[0]] = l ? r[0] : c, g[p[1]] = l ? r[1] : 0, i.animate(v, m, t.easing).animate(g, m, t.easing, function() {
            u && o.hide(), e.effects.restore(o, s), e.effects.removeWrapper(o), n();
        });
    }, e.effects.effect.highlight = function(t, n) {
        var i = e(this), r = [ "backgroundImage", "backgroundColor", "opacity" ], o = e.effects.setMode(i, t.mode || "show"), s = {
            backgroundColor: i.css("backgroundColor")
        };
        "hide" === o && (s.opacity = 0), e.effects.save(i, r), i.show().css({
            backgroundImage: "none",
            backgroundColor: t.color || "#ffff99"
        }).animate(s, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function() {
                "hide" === o && i.hide(), e.effects.restore(i, r), n();
            }
        });
    }, e.effects.effect.size = function(t, n) {
        var i, r, o, s = e(this), a = [ "position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity" ], l = [ "width", "height", "overflow" ], u = [ "fontSize" ], c = [ "borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom" ], f = [ "borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight" ], h = e.effects.setMode(s, t.mode || "effect"), d = t.restore || "effect" !== h, p = t.scale || "both", m = t.origin || [ "middle", "center" ], v = s.css("position"), g = d ? a : [ "position", "top", "bottom", "left", "right", "overflow", "opacity" ], y = {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        };
        "show" === h && s.show(), i = {
            height: s.height(),
            width: s.width(),
            outerHeight: s.outerHeight(),
            outerWidth: s.outerWidth()
        }, "toggle" === t.mode && "show" === h ? (s.from = t.to || y, s.to = t.from || i) : (s.from = t.from || ("show" === h ? y : i), 
        s.to = t.to || ("hide" === h ? y : i)), o = {
            from: {
                y: s.from.height / i.height,
                x: s.from.width / i.width
            },
            to: {
                y: s.to.height / i.height,
                x: s.to.width / i.width
            }
        }, ("box" === p || "both" === p) && (o.from.y !== o.to.y && (g = g.concat(c), s.from = e.effects.setTransition(s, c, o.from.y, s.from), 
        s.to = e.effects.setTransition(s, c, o.to.y, s.to)), o.from.x !== o.to.x && (g = g.concat(f), s.from = e.effects.setTransition(s, f, o.from.x, s.from), 
        s.to = e.effects.setTransition(s, f, o.to.x, s.to))), ("content" === p || "both" === p) && o.from.y !== o.to.y && (g = g.concat(u).concat(l), 
        s.from = e.effects.setTransition(s, u, o.from.y, s.from), s.to = e.effects.setTransition(s, u, o.to.y, s.to)), 
        e.effects.save(s, g), s.show(), e.effects.createWrapper(s), s.css("overflow", "hidden").css(s.from), 
        m && (r = e.effects.getBaseline(m, i), s.from.top = (i.outerHeight - s.outerHeight()) * r.y, s.from.left = (i.outerWidth - s.outerWidth()) * r.x, 
        s.to.top = (i.outerHeight - s.to.outerHeight) * r.y, s.to.left = (i.outerWidth - s.to.outerWidth) * r.x), 
        s.css(s.from), ("content" === p || "both" === p) && (c = c.concat([ "marginTop", "marginBottom" ]).concat(u), 
        f = f.concat([ "marginLeft", "marginRight" ]), l = a.concat(c).concat(f), s.find("*[width]").each(function() {
            var n = e(this), i = n.height(), r = n.width(), s = n.outerHeight(), a = n.outerWidth();
            d && e.effects.save(n, l), n.from = {
                height: i * o.from.y,
                width: r * o.from.x,
                outerHeight: s * o.from.y,
                outerWidth: a * o.from.x
            }, n.to = {
                height: i * o.to.y,
                width: r * o.to.x,
                outerHeight: i * o.to.y,
                outerWidth: r * o.to.x
            }, o.from.y !== o.to.y && (n.from = e.effects.setTransition(n, c, o.from.y, n.from), n.to = e.effects.setTransition(n, c, o.to.y, n.to)), 
            o.from.x !== o.to.x && (n.from = e.effects.setTransition(n, f, o.from.x, n.from), n.to = e.effects.setTransition(n, f, o.to.x, n.to)), 
            n.css(n.from), n.animate(n.to, t.duration, t.easing, function() {
                d && e.effects.restore(n, l);
            });
        })), s.animate(s.to, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function() {
                0 === s.to.opacity && s.css("opacity", s.from.opacity), "hide" === h && s.hide(), e.effects.restore(s, g), 
                d || ("static" === v ? s.css({
                    position: "relative",
                    top: s.to.top,
                    left: s.to.left
                }) : e.each([ "top", "left" ], function(e, t) {
                    s.css(t, function(t, n) {
                        var i = parseInt(n, 10), r = e ? s.to.left : s.to.top;
                        return "auto" === n ? r + "px" : i + r + "px";
                    });
                })), e.effects.removeWrapper(s), n();
            }
        });
    }, e.effects.effect.scale = function(t, n) {
        var i = e(this), r = e.extend(!0, {}, t), o = e.effects.setMode(i, t.mode || "effect"), s = parseInt(t.percent, 10) || (0 === parseInt(t.percent, 10) ? 0 : "hide" === o ? 0 : 100), a = t.direction || "both", l = t.origin, u = {
            height: i.height(),
            width: i.width(),
            outerHeight: i.outerHeight(),
            outerWidth: i.outerWidth()
        }, c = "horizontal" !== a ? s / 100 : 1, f = "vertical" !== a ? s / 100 : 1;
        r.effect = "size", r.queue = !1, r.complete = n, "effect" !== o && (r.origin = l || [ "middle", "center" ], 
        r.restore = !0), r.from = t.from || ("show" === o ? {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        } : u), r.to = {
            height: u.height * c,
            width: u.width * f,
            outerHeight: u.outerHeight * c,
            outerWidth: u.outerWidth * f
        }, r.fade && ("show" === o && (r.from.opacity = 0, r.to.opacity = 1), "hide" === o && (r.from.opacity = 1, 
        r.to.opacity = 0)), i.effect(r);
    }, e.effects.effect.puff = function(t, n) {
        var i = e(this), r = e.effects.setMode(i, t.mode || "hide"), o = "hide" === r, s = parseInt(t.percent, 10) || 150, a = s / 100, l = {
            height: i.height(),
            width: i.width(),
            outerHeight: i.outerHeight(),
            outerWidth: i.outerWidth()
        };
        e.extend(t, {
            effect: "scale",
            queue: !1,
            fade: !0,
            mode: r,
            complete: n,
            percent: o ? s : 100,
            from: o ? l : {
                height: l.height * a,
                width: l.width * a,
                outerHeight: l.outerHeight * a,
                outerWidth: l.outerWidth * a
            }
        }), i.effect(t);
    }, e.effects.effect.pulsate = function(t, n) {
        var i, r = e(this), o = e.effects.setMode(r, t.mode || "show"), s = "show" === o, a = "hide" === o, l = s || "hide" === o, u = 2 * (t.times || 5) + (l ? 1 : 0), c = t.duration / u, f = 0, h = r.queue(), d = h.length;
        for ((s || !r.is(":visible")) && (r.css("opacity", 0).show(), f = 1), i = 1; u > i; i++) r.animate({
            opacity: f
        }, c, t.easing), f = 1 - f;
        r.animate({
            opacity: f
        }, c, t.easing), r.queue(function() {
            a && r.hide(), n();
        }), d > 1 && h.splice.apply(h, [ 1, 0 ].concat(h.splice(d, u + 1))), r.dequeue();
    }, e.effects.effect.shake = function(t, n) {
        var i, r = e(this), o = [ "position", "top", "bottom", "left", "right", "height", "width" ], s = e.effects.setMode(r, t.mode || "effect"), a = t.direction || "left", l = t.distance || 20, u = t.times || 3, c = 2 * u + 1, f = Math.round(t.duration / c), h = "up" === a || "down" === a ? "top" : "left", d = "up" === a || "left" === a, p = {}, m = {}, v = {}, g = r.queue(), y = g.length;
        for (e.effects.save(r, o), r.show(), e.effects.createWrapper(r), p[h] = (d ? "-=" : "+=") + l, m[h] = (d ? "+=" : "-=") + 2 * l, 
        v[h] = (d ? "-=" : "+=") + 2 * l, r.animate(p, f, t.easing), i = 1; u > i; i++) r.animate(m, f, t.easing).animate(v, f, t.easing);
        r.animate(m, f, t.easing).animate(p, f / 2, t.easing).queue(function() {
            "hide" === s && r.hide(), e.effects.restore(r, o), e.effects.removeWrapper(r), n();
        }), y > 1 && g.splice.apply(g, [ 1, 0 ].concat(g.splice(y, c + 1))), r.dequeue();
    }, e.effects.effect.slide = function(t, n) {
        var i, r = e(this), o = [ "position", "top", "bottom", "left", "right", "width", "height" ], s = e.effects.setMode(r, t.mode || "show"), a = "show" === s, l = t.direction || "left", u = "up" === l || "down" === l ? "top" : "left", c = "up" === l || "left" === l, f = {};
        e.effects.save(r, o), r.show(), i = t.distance || r["top" === u ? "outerHeight" : "outerWidth"](!0), 
        e.effects.createWrapper(r).css({
            overflow: "hidden"
        }), a && r.css(u, c ? isNaN(i) ? "-" + i : -i : i), f[u] = (a ? c ? "+=" : "-=" : c ? "-=" : "+=") + i, 
        r.animate(f, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: function() {
                "hide" === s && r.hide(), e.effects.restore(r, o), e.effects.removeWrapper(r), n();
            }
        });
    }, e.effects.effect.transfer = function(t, n) {
        var i = e(this), r = e(t.to), o = "fixed" === r.css("position"), s = e("body"), a = o ? s.scrollTop() : 0, l = o ? s.scrollLeft() : 0, u = r.offset(), c = {
            top: u.top - a,
            left: u.left - l,
            height: r.innerHeight(),
            width: r.innerWidth()
        }, f = i.offset(), h = e("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(t.className).css({
            top: f.top - a,
            left: f.left - l,
            height: i.innerHeight(),
            width: i.innerWidth(),
            position: o ? "fixed" : "absolute"
        }).animate(c, t.duration, t.easing, function() {
            h.remove(), n();
        });
    };
}), /*
 * jQuery File Upload Plugin
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2010, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */
function(e) {
    "use strict";
    "function" == typeof define && define.amd ? define([ "jquery", "jquery.ui.widget" ], e) : "object" == typeof exports ? e(require("jquery"), require("./vendor/jquery.ui.widget")) : e(window.jQuery);
}(function(e) {
    "use strict";
    function t(t) {
        var n = "dragover" === t;
        return function(i) {
            i.dataTransfer = i.originalEvent && i.originalEvent.dataTransfer;
            var r = i.dataTransfer;
            r && -1 !== e.inArray("Files", r.types) && !1 !== this._trigger(t, e.Event(t, {
                delegatedEvent: i
            })) && (i.preventDefault(), n && (r.dropEffect = "copy"));
        };
    }
    e.support.fileInput = !(new RegExp("(Android (1\\.[0156]|2\\.[01]))|(Windows Phone (OS 7|8\\.0))|(XBLWP)|(ZuneWP)|(WPDesktop)|(w(eb)?OSBrowser)|(webOS)|(Kindle/(1\\.0|2\\.[05]|3\\.0))").test(window.navigator.userAgent) || e('<input type="file">').prop("disabled")), 
    e.support.xhrFileUpload = !(!window.ProgressEvent || !window.FileReader), e.support.xhrFormDataFileUpload = !!window.FormData, 
    e.support.blobSlice = window.Blob && (Blob.prototype.slice || Blob.prototype.webkitSlice || Blob.prototype.mozSlice), 
    e.widget("blueimp.fileupload", {
        options: {
            dropZone: e(document),
            pasteZone: void 0,
            fileInput: void 0,
            replaceFileInput: !0,
            paramName: void 0,
            singleFileUploads: !0,
            limitMultiFileUploads: void 0,
            limitMultiFileUploadSize: void 0,
            limitMultiFileUploadSizeOverhead: 512,
            sequentialUploads: !1,
            limitConcurrentUploads: void 0,
            forceIframeTransport: !1,
            redirect: void 0,
            redirectParamName: void 0,
            postMessage: void 0,
            multipart: !0,
            maxChunkSize: void 0,
            uploadedBytes: void 0,
            recalculateProgress: !0,
            progressInterval: 100,
            bitrateInterval: 500,
            autoUpload: !0,
            messages: {
                uploadedBytes: "Uploaded bytes exceed file size"
            },
            i18n: function(t, n) {
                return t = this.messages[t] || t.toString(), n && e.each(n, function(e, n) {
                    t = t.replace("{" + e + "}", n);
                }), t;
            },
            formData: function(e) {
                return e.serializeArray();
            },
            add: function(t, n) {
                if (t.isDefaultPrevented()) return !1;
                (n.autoUpload || !1 !== n.autoUpload && e(this).fileupload("option", "autoUpload")) && n.process().done(function() {
                    n.submit();
                });
            },
            processData: !1,
            contentType: !1,
            cache: !1,
            timeout: 0
        },
        _specialOptions: [ "fileInput", "dropZone", "pasteZone", "multipart", "forceIframeTransport" ],
        _blobSlice: e.support.blobSlice && function() {
            return (this.slice || this.webkitSlice || this.mozSlice).apply(this, arguments);
        },
        _BitrateTimer: function() {
            this.timestamp = Date.now ? Date.now() : new Date().getTime(), this.loaded = 0, this.bitrate = 0, this.getBitrate = function(e, t, n) {
                var i = e - this.timestamp;
                return (!this.bitrate || !n || i > n) && (this.bitrate = (t - this.loaded) * (1e3 / i) * 8, this.loaded = t, 
                this.timestamp = e), this.bitrate;
            };
        },
        _isXHRUpload: function(t) {
            return !t.forceIframeTransport && (!t.multipart && e.support.xhrFileUpload || e.support.xhrFormDataFileUpload);
        },
        _getFormData: function(t) {
            var n;
            return "function" === e.type(t.formData) ? t.formData(t.form) : e.isArray(t.formData) ? t.formData : "object" === e.type(t.formData) ? (n = [], 
            e.each(t.formData, function(e, t) {
                n.push({
                    name: e,
                    value: t
                });
            }), n) : [];
        },
        _getTotal: function(t) {
            var n = 0;
            return e.each(t, function(e, t) {
                n += t.size || 1;
            }), n;
        },
        _initProgressObject: function(t) {
            var n = {
                loaded: 0,
                total: 0,
                bitrate: 0
            };
            t._progress ? e.extend(t._progress, n) : t._progress = n;
        },
        _initResponseObject: function(e) {
            var t;
            if (e._response) for (t in e._response) e._response.hasOwnProperty(t) && delete e._response[t]; else e._response = {};
        },
        _onProgress: function(t, n) {
            if (t.lengthComputable) {
                var i, r = Date.now ? Date.now() : new Date().getTime();
                if (n._time && n.progressInterval && r - n._time < n.progressInterval && t.loaded !== t.total) return;
                n._time = r, i = Math.floor(t.loaded / t.total * (n.chunkSize || n._progress.total)) + (n.uploadedBytes || 0), 
                this._progress.loaded += i - n._progress.loaded, this._progress.bitrate = this._bitrateTimer.getBitrate(r, this._progress.loaded, n.bitrateInterval), 
                n._progress.loaded = n.loaded = i, n._progress.bitrate = n.bitrate = n._bitrateTimer.getBitrate(r, i, n.bitrateInterval), 
                this._trigger("progress", e.Event("progress", {
                    delegatedEvent: t
                }), n), this._trigger("progressall", e.Event("progressall", {
                    delegatedEvent: t
                }), this._progress);
            }
        },
        _initProgressListener: function(t) {
            var n = this, i = t.xhr ? t.xhr() : e.ajaxSettings.xhr();
            i.upload && (e(i.upload).bind("progress", function(e) {
                var i = e.originalEvent;
                e.lengthComputable = i.lengthComputable, e.loaded = i.loaded, e.total = i.total, n._onProgress(e, t);
            }), t.xhr = function() {
                return i;
            });
        },
        _isInstanceOf: function(e, t) {
            return Object.prototype.toString.call(t) === "[object " + e + "]";
        },
        _initXHRData: function(t) {
            var n, i = this, r = t.files[0], o = t.multipart || !e.support.xhrFileUpload, s = "array" === e.type(t.paramName) ? t.paramName[0] : t.paramName;
            t.headers = e.extend({}, t.headers), t.contentRange && (t.headers["Content-Range"] = t.contentRange), 
            o && !t.blob && this._isInstanceOf("File", r) || (t.headers["Content-Disposition"] = 'attachment; filename="' + encodeURI(r.name) + '"'), 
            o ? e.support.xhrFormDataFileUpload && (t.postMessage ? (n = this._getFormData(t), t.blob ? n.push({
                name: s,
                value: t.blob
            }) : e.each(t.files, function(i, r) {
                n.push({
                    name: "array" === e.type(t.paramName) && t.paramName[i] || s,
                    value: r
                });
            })) : (i._isInstanceOf("FormData", t.formData) ? n = t.formData : (n = new FormData(), e.each(this._getFormData(t), function(e, t) {
                n.append(t.name, t.value);
            })), t.blob ? n.append(s, t.blob, r.name) : e.each(t.files, function(r, o) {
                (i._isInstanceOf("File", o) || i._isInstanceOf("Blob", o)) && n.append("array" === e.type(t.paramName) && t.paramName[r] || s, o, o.uploadName || o.name);
            })), t.data = n) : (t.contentType = r.type || "application/octet-stream", t.data = t.blob || r), t.blob = null;
        },
        _initIframeSettings: function(t) {
            var n = e("<a></a>").prop("href", t.url).prop("host");
            t.dataType = "iframe " + (t.dataType || ""), t.formData = this._getFormData(t), t.redirect && n && n !== location.host && t.formData.push({
                name: t.redirectParamName || "redirect",
                value: t.redirect
            });
        },
        _initDataSettings: function(e) {
            this._isXHRUpload(e) ? (this._chunkedUpload(e, !0) || (e.data || this._initXHRData(e), this._initProgressListener(e)), 
            e.postMessage && (e.dataType = "postmessage " + (e.dataType || ""))) : this._initIframeSettings(e);
        },
        _getParamName: function(t) {
            var n = e(t.fileInput), i = t.paramName;
            return i ? e.isArray(i) || (i = [ i ]) : (i = [], n.each(function() {
                for (var t = e(this), n = t.prop("name") || "files[]", r = (t.prop("files") || [ 1 ]).length; r; ) i.push(n), 
                r -= 1;
            }), i.length || (i = [ n.prop("name") || "files[]" ])), i;
        },
        _initFormSettings: function(t) {
            t.form && t.form.length || (t.form = e(t.fileInput.prop("form")), t.form.length || (t.form = e(this.options.fileInput.prop("form")))), 
            t.paramName = this._getParamName(t), t.url || (t.url = t.form.prop("action") || location.href), t.type = (t.type || "string" === e.type(t.form.prop("method")) && t.form.prop("method") || "").toUpperCase(), 
            "POST" !== t.type && "PUT" !== t.type && "PATCH" !== t.type && (t.type = "POST"), t.formAcceptCharset || (t.formAcceptCharset = t.form.attr("accept-charset"));
        },
        _getAJAXSettings: function(t) {
            var n = e.extend({}, this.options, t);
            return this._initFormSettings(n), this._initDataSettings(n), n;
        },
        _getDeferredState: function(e) {
            return e.state ? e.state() : e.isResolved() ? "resolved" : e.isRejected() ? "rejected" : "pending";
        },
        _enhancePromise: function(e) {
            return e.success = e.done, e.error = e.fail, e.complete = e.always, e;
        },
        _getXHRPromise: function(t, n, i) {
            var r = e.Deferred(), o = r.promise();
            return n = n || this.options.context || o, !0 === t ? r.resolveWith(n, i) : !1 === t && r.rejectWith(n, i), 
            o.abort = r.promise, this._enhancePromise(o);
        },
        _addConvenienceMethods: function(t, n) {
            var i = this, r = function(t) {
                return e.Deferred().resolveWith(i, t).promise();
            };
            n.process = function(t, o) {
                return (t || o) && (n._processQueue = this._processQueue = (this._processQueue || r([ this ])).then(function() {
                    return n.errorThrown ? e.Deferred().rejectWith(i, [ n ]).promise() : r(arguments);
                }).then(t, o)), this._processQueue || r([ this ]);
            }, n.submit = function() {
                return "pending" !== this.state() && (n.jqXHR = this.jqXHR = !1 !== i._trigger("submit", e.Event("submit", {
                    delegatedEvent: t
                }), this) && i._onSend(t, this)), this.jqXHR || i._getXHRPromise();
            }, n.abort = function() {
                return this.jqXHR ? this.jqXHR.abort() : (this.errorThrown = "abort", i._trigger("fail", null, this), 
                i._getXHRPromise(!1));
            }, n.state = function() {
                return this.jqXHR ? i._getDeferredState(this.jqXHR) : this._processQueue ? i._getDeferredState(this._processQueue) : void 0;
            }, n.processing = function() {
                return !this.jqXHR && this._processQueue && "pending" === i._getDeferredState(this._processQueue);
            }, n.progress = function() {
                return this._progress;
            }, n.response = function() {
                return this._response;
            };
        },
        _getUploadedBytes: function(e) {
            var t = e.getResponseHeader("Range"), n = t && t.split("-"), i = n && n.length > 1 && parseInt(n[1], 10);
            return i && i + 1;
        },
        _chunkedUpload: function(t, n) {
            t.uploadedBytes = t.uploadedBytes || 0;
            var i, r, o = this, s = t.files[0], a = s.size, l = t.uploadedBytes, u = t.maxChunkSize || a, c = this._blobSlice, f = e.Deferred(), h = f.promise();
            return !(!(this._isXHRUpload(t) && c && (l || u < a)) || t.data) && (!!n || (l >= a ? (s.error = t.i18n("uploadedBytes"), 
            this._getXHRPromise(!1, t.context, [ null, "error", s.error ])) : (r = function() {
                var n = e.extend({}, t), h = n._progress.loaded;
                n.blob = c.call(s, l, l + u, s.type), n.chunkSize = n.blob.size, n.contentRange = "bytes " + l + "-" + (l + n.chunkSize - 1) + "/" + a, 
                o._initXHRData(n), o._initProgressListener(n), i = (!1 !== o._trigger("chunksend", null, n) && e.ajax(n) || o._getXHRPromise(!1, n.context)).done(function(i, s, u) {
                    l = o._getUploadedBytes(u) || l + n.chunkSize, h + n.chunkSize - n._progress.loaded && o._onProgress(e.Event("progress", {
                        lengthComputable: !0,
                        loaded: l - n.uploadedBytes,
                        total: l - n.uploadedBytes
                    }), n), t.uploadedBytes = n.uploadedBytes = l, n.result = i, n.textStatus = s, n.jqXHR = u, o._trigger("chunkdone", null, n), 
                    o._trigger("chunkalways", null, n), l < a ? r() : f.resolveWith(n.context, [ i, s, u ]);
                }).fail(function(e, t, i) {
                    n.jqXHR = e, n.textStatus = t, n.errorThrown = i, o._trigger("chunkfail", null, n), o._trigger("chunkalways", null, n), 
                    f.rejectWith(n.context, [ e, t, i ]);
                });
            }, this._enhancePromise(h), h.abort = function() {
                return i.abort();
            }, r(), h)));
        },
        _beforeSend: function(e, t) {
            0 === this._active && (this._trigger("start"), this._bitrateTimer = new this._BitrateTimer(), this._progress.loaded = this._progress.total = 0, 
            this._progress.bitrate = 0), this._initResponseObject(t), this._initProgressObject(t), t._progress.loaded = t.loaded = t.uploadedBytes || 0, 
            t._progress.total = t.total = this._getTotal(t.files) || 1, t._progress.bitrate = t.bitrate = 0, this._active += 1, 
            this._progress.loaded += t.loaded, this._progress.total += t.total;
        },
        _onDone: function(t, n, i, r) {
            var o = r._progress.total, s = r._response;
            r._progress.loaded < o && this._onProgress(e.Event("progress", {
                lengthComputable: !0,
                loaded: o,
                total: o
            }), r), s.result = r.result = t, s.textStatus = r.textStatus = n, s.jqXHR = r.jqXHR = i, this._trigger("done", null, r);
        },
        _onFail: function(e, t, n, i) {
            var r = i._response;
            i.recalculateProgress && (this._progress.loaded -= i._progress.loaded, this._progress.total -= i._progress.total), 
            r.jqXHR = i.jqXHR = e, r.textStatus = i.textStatus = t, r.errorThrown = i.errorThrown = n, this._trigger("fail", null, i);
        },
        _onAlways: function(e, t, n, i) {
            this._trigger("always", null, i);
        },
        _onSend: function(t, n) {
            n.submit || this._addConvenienceMethods(t, n);
            var i, r, o, s, a = this, l = a._getAJAXSettings(n), u = function() {
                return a._sending += 1, l._bitrateTimer = new a._BitrateTimer(), i = i || ((r || !1 === a._trigger("send", e.Event("send", {
                    delegatedEvent: t
                }), l)) && a._getXHRPromise(!1, l.context, r) || a._chunkedUpload(l) || e.ajax(l)).done(function(e, t, n) {
                    a._onDone(e, t, n, l);
                }).fail(function(e, t, n) {
                    a._onFail(e, t, n, l);
                }).always(function(e, t, n) {
                    if (a._onAlways(e, t, n, l), a._sending -= 1, a._active -= 1, l.limitConcurrentUploads && l.limitConcurrentUploads > a._sending) for (var i = a._slots.shift(); i; ) {
                        if ("pending" === a._getDeferredState(i)) {
                            i.resolve();
                            break;
                        }
                        i = a._slots.shift();
                    }
                    0 === a._active && a._trigger("stop");
                });
            };
            return this._beforeSend(t, l), this.options.sequentialUploads || this.options.limitConcurrentUploads && this.options.limitConcurrentUploads <= this._sending ? (this.options.limitConcurrentUploads > 1 ? (o = e.Deferred(), 
            this._slots.push(o), s = o.then(u)) : (this._sequence = this._sequence.then(u, u), s = this._sequence), 
            s.abort = function() {
                return r = [ void 0, "abort", "abort" ], i ? i.abort() : (o && o.rejectWith(l.context, r), u());
            }, this._enhancePromise(s)) : u();
        },
        _onAdd: function(t, n) {
            var i, r, o, s, a = this, l = !0, u = e.extend({}, this.options, n), c = n.files, f = c.length, h = u.limitMultiFileUploads, d = u.limitMultiFileUploadSize, p = u.limitMultiFileUploadSizeOverhead, m = 0, v = this._getParamName(u), g = 0;
            if (!f) return !1;
            if (d && void 0 === c[0].size && (d = void 0), (u.singleFileUploads || h || d) && this._isXHRUpload(u)) if (u.singleFileUploads || d || !h) if (!u.singleFileUploads && d) for (o = [], 
            i = [], s = 0; s < f; s += 1) m += c[s].size + p, (s + 1 === f || m + c[s + 1].size + p > d || h && s + 1 - g >= h) && (o.push(c.slice(g, s + 1)), 
            (r = v.slice(g, s + 1)).length || (r = v), i.push(r), g = s + 1, m = 0); else i = v; else for (o = [], 
            i = [], s = 0; s < f; s += h) o.push(c.slice(s, s + h)), (r = v.slice(s, s + h)).length || (r = v), 
            i.push(r); else o = [ c ], i = [ v ];
            return n.originalFiles = c, e.each(o || c, function(r, s) {
                var u = e.extend({}, n);
                return u.files = o ? s : [ s ], u.paramName = i[r], a._initResponseObject(u), a._initProgressObject(u), 
                a._addConvenienceMethods(t, u), l = a._trigger("add", e.Event("add", {
                    delegatedEvent: t
                }), u);
            }), l;
        },
        _replaceFileInput: function(t) {
            var n = t.fileInput, i = n.clone(!0), r = n.is(document.activeElement);
            t.fileInputClone = i, e("<form></form>").append(i)[0].reset(), n.after(i).detach(), r && i.focus(), 
            e.cleanData(n.unbind("remove")), this.options.fileInput = this.options.fileInput.map(function(e, t) {
                return t === n[0] ? i[0] : t;
            }), n[0] === this.element[0] && (this.element = i);
        },
        _handleFileTreeEntry: function(t, n) {
            var i, r = this, o = e.Deferred(), s = function(e) {
                e && !e.entry && (e.entry = t), o.resolve([ e ]);
            }, a = function() {
                i.readEntries(function(e) {
                    e.length ? (l = l.concat(e), a()) : function(e) {
                        r._handleFileTreeEntries(e, n + t.name + "/").done(function(e) {
                            o.resolve(e);
                        }).fail(s);
                    }(l);
                }, s);
            }, l = [];
            return n = n || "", t.isFile ? t._file ? (t._file.relativePath = n, o.resolve(t._file)) : t.file(function(e) {
                e.relativePath = n, o.resolve(e);
            }, s) : t.isDirectory ? (i = t.createReader(), a()) : o.resolve([]), o.promise();
        },
        _handleFileTreeEntries: function(t, n) {
            var i = this;
            return e.when.apply(e, e.map(t, function(e) {
                return i._handleFileTreeEntry(e, n);
            })).then(function() {
                return Array.prototype.concat.apply([], arguments);
            });
        },
        _getDroppedFiles: function(t) {
            var n = (t = t || {}).items;
            return n && n.length && (n[0].webkitGetAsEntry || n[0].getAsEntry) ? this._handleFileTreeEntries(e.map(n, function(e) {
                var t;
                return e.webkitGetAsEntry ? ((t = e.webkitGetAsEntry()) && (t._file = e.getAsFile()), t) : e.getAsEntry();
            })) : e.Deferred().resolve(e.makeArray(t.files)).promise();
        },
        _getSingleFileInputFiles: function(t) {
            var n, i, r = (t = e(t)).prop("webkitEntries") || t.prop("entries");
            if (r && r.length) return this._handleFileTreeEntries(r);
            if ((n = e.makeArray(t.prop("files"))).length) void 0 === n[0].name && n[0].fileName && e.each(n, function(e, t) {
                t.name = t.fileName, t.size = t.fileSize;
            }); else {
                if (!(i = t.prop("value"))) return e.Deferred().resolve([]).promise();
                n = [ {
                    name: i.replace(/^.*\\/, "")
                } ];
            }
            return e.Deferred().resolve(n).promise();
        },
        _getFileInputFiles: function(t) {
            return t instanceof e && 1 !== t.length ? e.when.apply(e, e.map(t, this._getSingleFileInputFiles)).then(function() {
                return Array.prototype.concat.apply([], arguments);
            }) : this._getSingleFileInputFiles(t);
        },
        _onChange: function(t) {
            var n = this, i = {
                fileInput: e(t.target),
                form: e(t.target.form)
            };
            this._getFileInputFiles(i.fileInput).always(function(r) {
                i.files = r, n.options.replaceFileInput && n._replaceFileInput(i), !1 !== n._trigger("change", e.Event("change", {
                    delegatedEvent: t
                }), i) && n._onAdd(t, i);
            });
        },
        _onPaste: function(t) {
            var n = t.originalEvent && t.originalEvent.clipboardData && t.originalEvent.clipboardData.items, i = {
                files: []
            };
            n && n.length && (e.each(n, function(e, t) {
                var n = t.getAsFile && t.getAsFile();
                n && i.files.push(n);
            }), !1 !== this._trigger("paste", e.Event("paste", {
                delegatedEvent: t
            }), i) && this._onAdd(t, i));
        },
        _onDrop: function(t) {
            t.dataTransfer = t.originalEvent && t.originalEvent.dataTransfer;
            var n = this, i = t.dataTransfer, r = {};
            i && i.files && i.files.length && (t.preventDefault(), this._getDroppedFiles(i).always(function(i) {
                r.files = i, !1 !== n._trigger("drop", e.Event("drop", {
                    delegatedEvent: t
                }), r) && n._onAdd(t, r);
            }));
        },
        _onDragOver: t("dragover"),
        _onDragEnter: t("dragenter"),
        _onDragLeave: t("dragleave"),
        _initEventHandlers: function() {
            this._isXHRUpload(this.options) && (this._on(this.options.dropZone, {
                dragover: this._onDragOver,
                drop: this._onDrop,
                dragenter: this._onDragEnter,
                dragleave: this._onDragLeave
            }), this._on(this.options.pasteZone, {
                paste: this._onPaste
            })), e.support.fileInput && this._on(this.options.fileInput, {
                change: this._onChange
            });
        },
        _destroyEventHandlers: function() {
            this._off(this.options.dropZone, "dragenter dragleave dragover drop"), this._off(this.options.pasteZone, "paste"), 
            this._off(this.options.fileInput, "change");
        },
        _setOption: function(t, n) {
            var i = -1 !== e.inArray(t, this._specialOptions);
            i && this._destroyEventHandlers(), this._super(t, n), i && (this._initSpecialOptions(), this._initEventHandlers());
        },
        _initSpecialOptions: function() {
            var t = this.options;
            void 0 === t.fileInput ? t.fileInput = this.element.is('input[type="file"]') ? this.element : this.element.find('input[type="file"]') : t.fileInput instanceof e || (t.fileInput = e(t.fileInput)), 
            t.dropZone instanceof e || (t.dropZone = e(t.dropZone)), t.pasteZone instanceof e || (t.pasteZone = e(t.pasteZone));
        },
        _getRegExp: function(e) {
            var t = e.split("/"), n = t.pop();
            return t.shift(), new RegExp(t.join("/"), n);
        },
        _isRegExpOption: function(t, n) {
            return "url" !== t && "string" === e.type(n) && /^\/.*\/[igm]{0,3}$/.test(n);
        },
        _initDataAttributes: function() {
            var t = this, n = this.options, i = this.element.data();
            e.each(this.element[0].attributes, function(e, r) {
                var o, s = r.name.toLowerCase();
                /^data-/.test(s) && (s = s.slice(5).replace(/-[a-z]/g, function(e) {
                    return e.charAt(1).toUpperCase();
                }), o = i[s], t._isRegExpOption(s, o) && (o = t._getRegExp(o)), n[s] = o);
            });
        },
        _create: function() {
            this._initDataAttributes(), this._initSpecialOptions(), this._slots = [], this._sequence = this._getXHRPromise(!0), 
            this._sending = this._active = 0, this._initProgressObject(this), this._initEventHandlers();
        },
        active: function() {
            return this._active;
        },
        progress: function() {
            return this._progress;
        },
        add: function(t) {
            var n = this;
            t && !this.options.disabled && (t.fileInput && !t.files ? this._getFileInputFiles(t.fileInput).always(function(e) {
                t.files = e, n._onAdd(null, t);
            }) : (t.files = e.makeArray(t.files), this._onAdd(null, t)));
        },
        send: function(t) {
            if (t && !this.options.disabled) {
                if (t.fileInput && !t.files) {
                    var n, i, r = this, o = e.Deferred(), s = o.promise();
                    return s.abort = function() {
                        return i = !0, n ? n.abort() : (o.reject(null, "abort", "abort"), s);
                    }, this._getFileInputFiles(t.fileInput).always(function(e) {
                        i || (e.length ? (t.files = e, (n = r._onSend(null, t)).then(function(e, t, n) {
                            o.resolve(e, t, n);
                        }, function(e, t, n) {
                            o.reject(e, t, n);
                        })) : o.reject());
                    }), this._enhancePromise(s);
                }
                if (t.files = e.makeArray(t.files), t.files.length) return this._onSend(null, t);
            }
            return this._getXHRPromise(!1, t && t.context);
        }
    });
}), function(e, t) {
    "use strict";
    var n = "vendor", i = "version", r = "architecture", o = function(e, t) {
        var n = {};
        for (var i in e) t[i] && t[i].length % 2 == 0 ? n[i] = t[i].concat(e[i]) : n[i] = e[i];
        return n;
    }, s = function(e, t) {
        return "string" == typeof e && -1 !== t.toLowerCase().indexOf(e.toLowerCase());
    }, a = function(e) {
        return e.toLowerCase();
    }, l = function(e) {
        return "string" == typeof e ? e.split(".")[0] : void 0;
    }, u = {
        rgx: function() {
            for (var e, t, n, i, r, o, s, a = 0, l = arguments; a < l.length && !o; ) {
                var u = l[a], c = l[a + 1];
                if (void 0 === e) {
                    e = {};
                    for (i in c) c.hasOwnProperty(i) && ("object" == typeof (r = c[i]) ? e[r[0]] = void 0 : e[r] = void 0);
                }
                for (t = n = 0; t < u.length && !o; ) if (o = u[t++].exec(this.getUA())) for (i = 0; i < c.length; i++) s = o[++n], 
                "object" == typeof (r = c[i]) && r.length > 0 ? 2 == r.length ? "function" == typeof r[1] ? e[r[0]] = r[1].call(this, s) : e[r[0]] = r[1] : 3 == r.length ? "function" != typeof r[1] || r[1].exec && r[1].test ? e[r[0]] = s ? s.replace(r[1], r[2]) : void 0 : e[r[0]] = s ? r[1].call(this, s, r[2]) : void 0 : 4 == r.length && (e[r[0]] = s ? r[3].call(this, s.replace(r[1], r[2])) : void 0) : e[r] = s || void 0;
                a += 2;
            }
            return e;
        },
        str: function(e, t) {
            for (var n in t) if ("object" == typeof t[n] && t[n].length > 0) {
                for (var i = 0; i < t[n].length; i++) if (s(t[n][i], e)) return "?" === n ? void 0 : n;
            } else if (s(t[n], e)) return "?" === n ? void 0 : n;
            return e;
        }
    }, c = {
        oldsafari: {
            version: {
                "1.0": "/8",
                1.2: "/1",
                1.3: "/3",
                "2.0": "/412",
                "2.0.2": "/416",
                "2.0.3": "/417",
                "2.0.4": "/419",
                "?": "/"
            }
        }
    }, f = {
        amazon: {
            model: {
                "Fire Phone": [ "SD", "KF" ]
            }
        },
        sprint: {
            model: {
                "Evo Shift 4G": "7373KT"
            },
            vendor: {
                HTC: "APA",
                Sprint: "Sprint"
            }
        }
    }, h = {
        windows: {
            version: {
                ME: "4.90",
                "NT 3.11": "NT3.51",
                "NT 4.0": "NT4.0",
                2e3: "NT 5.0",
                XP: [ "NT 5.1", "NT 5.2" ],
                Vista: "NT 6.0",
                7: "NT 6.1",
                8: "NT 6.2",
                8.1: "NT 6.3",
                10: [ "NT 6.4", "NT 10.0" ],
                RT: "ARM"
            }
        }
    }, d = {
        browser: [ [ /(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i ], [ "name", i ], [ /(OPiOS)[\/\s]+([\w\.]+)/i ], [ [ "name", "Opera Mini" ], i ], [ /\s(opr)\/([\w\.]+)/i ], [ [ "name", "Opera" ], i ], [ /(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs)\/([\w\.-]+)/i ], [ "name", i ], [ /(trident).+rv[:\s]([\w\.]+).+like\sgecko/i ], [ [ "name", "IE" ], i ], [ /(edge)\/((\d+)?[\w\.]+)/i ], [ "name", i ], [ /(yabrowser)\/([\w\.]+)/i ], [ [ "name", "Yandex" ], i ], [ /(comodo_dragon)\/([\w\.]+)/i ], [ [ "name", /_/g, " " ], i ], [ /(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i, /(qqbrowser)[\/\s]?([\w\.]+)/i ], [ "name", i ], [ /(uc\s?browser)[\/\s]?([\w\.]+)/i, /ucweb.+(ucbrowser)[\/\s]?([\w\.]+)/i, /JUC.+(ucweb)[\/\s]?([\w\.]+)/i ], [ [ "name", "UCBrowser" ], i ], [ /(dolfin)\/([\w\.]+)/i ], [ [ "name", "Dolphin" ], i ], [ /((?:android.+)crmo|crios)\/([\w\.]+)/i ], [ [ "name", "Chrome" ], i ], [ /XiaoMi\/MiuiBrowser\/([\w\.]+)/i ], [ i, [ "name", "MIUI Browser" ] ], [ /android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)/i ], [ i, [ "name", "Android Browser" ] ], [ /FBAV\/([\w\.]+);/i ], [ i, [ "name", "Facebook" ] ], [ /fxios\/([\w\.-]+)/i ], [ i, [ "name", "Firefox" ] ], [ /version\/([\w\.]+).+?mobile\/\w+\s(safari)/i ], [ i, [ "name", "Mobile Safari" ] ], [ /version\/([\w\.]+).+?(mobile\s?safari|safari)/i ], [ i, "name" ], [ /webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i ], [ "name", [ i, u.str, c.oldsafari.version ] ], [ /(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i ], [ "name", i ], [ /(navigator|netscape)\/([\w\.-]+)/i ], [ [ "name", "Netscape" ], i ], [ /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i ], [ "name", i ] ],
        cpu: [ [ /(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i ], [ [ r, "amd64" ] ], [ /(ia32(?=;))/i ], [ [ r, a ] ], [ /((?:i[346]|x)86)[;\)]/i ], [ [ r, "ia32" ] ], [ /windows\s(ce|mobile);\sppc;/i ], [ [ r, "arm" ] ], [ /((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i ], [ [ r, /ower/, "", a ] ], [ /(sun4\w)[;\)]/i ], [ [ r, "sparc" ] ], [ /((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i ], [ [ r, a ] ] ],
        device: [ [ /\((ipad|playbook);[\w\s\);-]+(rim|apple)/i ], [ "model", n, [ "type", "tablet" ] ], [ /applecoremedia\/[\w\.]+ \((ipad)/ ], [ "model", [ n, "Apple" ], [ "type", "tablet" ] ], [ /(apple\s{0,1}tv)/i ], [ [ "model", "Apple TV" ], [ n, "Apple" ] ], [ /(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i ], [ n, "model", [ "type", "tablet" ] ], [ /(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i ], [ "model", [ n, "Amazon" ], [ "type", "tablet" ] ], [ /(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i ], [ [ "model", u.str, f.amazon.model ], [ n, "Amazon" ], [ "type", "mobile" ] ], [ /\((ip[honed|\s\w*]+);.+(apple)/i ], [ "model", n, [ "type", "mobile" ] ], [ /\((ip[honed|\s\w*]+);/i ], [ "model", [ n, "Apple" ], [ "type", "mobile" ] ], [ /(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|huawei|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i ], [ n, "model", [ "type", "mobile" ] ], [ /\(bb10;\s(\w+)/i ], [ "model", [ n, "BlackBerry" ], [ "type", "mobile" ] ], [ /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7)/i ], [ "model", [ n, "Asus" ], [ "type", "tablet" ] ], [ /(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i ], [ [ n, "Sony" ], [ "model", "Xperia Tablet" ], [ "type", "tablet" ] ], [ /(?:sony)?(?:(?:(?:c|d)\d{4})|(?:so[-l].+))\sbuild\//i ], [ [ n, "Sony" ], [ "model", "Xperia Phone" ], [ "type", "mobile" ] ], [ /\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i ], [ n, "model", [ "type", "console" ] ], [ /android.+;\s(shield)\sbuild/i ], [ "model", [ n, "Nvidia" ], [ "type", "console" ] ], [ /(playstation\s[34portablevi]+)/i ], [ "model", [ n, "Sony" ], [ "type", "console" ] ], [ /(sprint\s(\w+))/i ], [ [ n, u.str, f.sprint.vendor ], [ "model", u.str, f.sprint.model ], [ "type", "mobile" ] ], [ /(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i ], [ n, "model", [ "type", "tablet" ] ], [ /(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|huawei|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i ], [ n, [ "model", /_/g, " " ], [ "type", "mobile" ] ], [ /(nexus\s9)/i ], [ "model", [ n, "HTC" ], [ "type", "tablet" ] ], [ /[\s\(;](xbox(?:\sone)?)[\s\);]/i ], [ "model", [ n, "Microsoft" ], [ "type", "console" ] ], [ /(kin\.[onetw]{3})/i ], [ [ "model", /\./g, " " ], [ n, "Microsoft" ], [ "type", "mobile" ] ], [ /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w+)*/i, /(XT\d{3,4}) build\//i, /(nexus\s[6])/i ], [ "model", [ n, "Motorola" ], [ "type", "mobile" ] ], [ /android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i ], [ "model", [ n, "Motorola" ], [ "type", "tablet" ] ], [ /android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n8000|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i ], [ [ n, "Samsung" ], "model", [ "type", "tablet" ] ], [ /((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-n900))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i ], [ [ n, "Samsung" ], "model", [ "type", "mobile" ] ], [ /(samsung);smarttv/i ], [ n, "model", [ "type", "smarttv" ] ], [ /\(dtv[\);].+(aquos)/i ], [ "model", [ n, "Sharp" ], [ "type", "smarttv" ] ], [ /sie-(\w+)*/i ], [ "model", [ n, "Siemens" ], [ "type", "mobile" ] ], [ /(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i ], [ [ n, "Nokia" ], "model", [ "type", "mobile" ] ], [ /android\s3\.[\s\w;-]{10}(a\d{3})/i ], [ "model", [ n, "Acer" ], [ "type", "tablet" ] ], [ /android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i ], [ [ n, "LG" ], "model", [ "type", "tablet" ] ], [ /(lg) netcast\.tv/i ], [ n, "model", [ "type", "smarttv" ] ], [ /(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i ], [ "model", [ n, "LG" ], [ "type", "mobile" ] ], [ /android.+(ideatab[a-z0-9\-\s]+)/i ], [ "model", [ n, "Lenovo" ], [ "type", "tablet" ] ], [ /linux;.+((jolla));/i ], [ n, "model", [ "type", "mobile" ] ], [ /((pebble))app\/[\d\.]+\s/i ], [ n, "model", [ "type", "wearable" ] ], [ /android.+;\s(glass)\s\d/i ], [ "model", [ n, "Google" ], [ "type", "wearable" ] ], [ /android.+(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus)?[\s_]*(?:\d\w)?)\s+build/i ], [ [ "model", /_/g, " " ], [ n, "Xiaomi" ], [ "type", "mobile" ] ], [ /\s(tablet)[;\/\s]/i, /\s(mobile)[;\/\s]/i ], [ [ "type", a ], n, "model" ] ],
        engine: [ [ /windows.+\sedge\/([\w\.]+)/i ], [ i, [ "name", "EdgeHTML" ] ], [ /(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i ], [ "name", i ], [ /rv\:([\w\.]+).*(gecko)/i ], [ i, "name" ] ],
        os: [ [ /microsoft\s(windows)\s(vista|xp)/i ], [ "name", i ], [ /(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*|windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i ], [ "name", [ i, u.str, h.windows.version ] ], [ /(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i ], [ [ "name", "Windows" ], [ i, u.str, h.windows.version ] ], [ /\((bb)(10);/i ], [ [ "name", "BlackBerry" ], i ], [ /(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i, /linux;.+(sailfish);/i ], [ "name", i ], [ /(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i ], [ [ "name", "Symbian" ], i ], [ /\((series40);/i ], [ "name" ], [ /mozilla.+\(mobile;.+gecko.+firefox/i ], [ [ "name", "Firefox OS" ], i ], [ /(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?([\w\.-]+)*/i, /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i ], [ "name", i ], [ /(cros)\s[\w]+\s([\w\.]+\w)/i ], [ [ "name", "Chromium OS" ], i ], [ /(sunos)\s?([\w\.]+\d)*/i ], [ [ "name", "Solaris" ], i ], [ /\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i ], [ "name", i ], [ /(ip[honead]+)(?:.*os\s([\w]+)*\slike\smac|;\sopera)/i ], [ [ "name", "iOS" ], [ i, /_/g, "." ] ], [ /(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i ], [ [ "name", "Mac OS" ], [ i, /_/g, "." ] ], [ /((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(haiku)\s(\w+)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i, /(unix)\s?([\w\.]+)*/i ], [ "name", i ] ]
    }, p = function(t, n) {
        if (!(this instanceof p)) return new p(t, n).getResult();
        var i = t || (e && e.navigator && e.navigator.userAgent ? e.navigator.userAgent : ""), r = n ? o(d, n) : d;
        return this.getBrowser = function() {
            var e = u.rgx.apply(this, r.browser);
            return e.major = l(e.version), e;
        }, this.getCPU = function() {
            return u.rgx.apply(this, r.cpu);
        }, this.getDevice = function() {
            return u.rgx.apply(this, r.device);
        }, this.getEngine = function() {
            return u.rgx.apply(this, r.engine);
        }, this.getOS = function() {
            return u.rgx.apply(this, r.os);
        }, this.getResult = function() {
            return {
                ua: this.getUA(),
                browser: this.getBrowser(),
                engine: this.getEngine(),
                os: this.getOS(),
                device: this.getDevice(),
                cpu: this.getCPU()
            };
        }, this.getUA = function() {
            return i;
        }, this.setUA = function(e) {
            return i = e, this;
        }, this;
    };
    p.VERSION = "0.7.10", p.BROWSER = {
        NAME: "name",
        MAJOR: "major",
        VERSION: i
    }, p.CPU = {
        ARCHITECTURE: r
    }, p.DEVICE = {
        MODEL: "model",
        VENDOR: n,
        TYPE: "type",
        CONSOLE: "console",
        MOBILE: "mobile",
        SMARTTV: "smarttv",
        TABLET: "tablet",
        WEARABLE: "wearable",
        EMBEDDED: "embedded"
    }, p.ENGINE = {
        NAME: "name",
        VERSION: i
    }, p.OS = {
        NAME: "name",
        VERSION: i
    }, "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = p), 
    exports.UAParser = p) : "function" == typeof define && define.amd ? define("ua-parser-js", [], function() {
        return p;
    }) : e.UAParser = p;
    var m = e.jQuery || e.Zepto;
    if (void 0 !== m) {
        var v = new p();
        m.ua = v.getResult(), m.ua.get = function() {
            return v.getUA();
        }, m.ua.set = function(e) {
            v.setUA(e);
            var t = v.getResult();
            for (var n in t) m.ua[n] = t[n];
        };
    }
}("object" == typeof window ? window : this), function() {
    "use strict";
    var e = "undefined" == typeof global ? self : global;
    if ("function" != typeof e.require) {
        var t = {}, n = {}, i = {}, r = {}.hasOwnProperty, o = /^\.\.?(\/|$)/, s = function(e, t) {
            for (var n, i = [], r = (o.test(t) ? e + "/" + t : t).split("/"), s = 0, a = r.length; s < a; s++) ".." === (n = r[s]) ? i.pop() : "." !== n && "" !== n && i.push(n);
            return i.join("/");
        }, a = function(e) {
            return e.split("/").slice(0, -1).join("/");
        }, l = function(t, i) {
            var r = {
                id: t,
                exports: {},
                hot: d && d.createHot(t)
            };
            return n[t] = r, i(r.exports, function(t) {
                return function(n) {
                    var i = s(a(t), n);
                    return e.require(i, t);
                };
            }(t), r), r.exports;
        }, u = function(e) {
            return i[e] ? u(i[e]) : e;
        }, c = function(e, i) {
            null == i && (i = "/");
            var o = u(e);
            if (r.call(n, o)) return n[o].exports;
            if (r.call(t, o)) return l(o, t[o]);
            throw new Error("Cannot find module '" + e + "' from '" + i + "'");
        };
        c.alias = function(e, t) {
            i[t] = e;
        };
        var f = /\.[^.\/]+$/, h = /\/index(\.[^\/]+)?$/;
        c.register = c.define = function(e, o) {
            if (e && "object" == typeof e) for (var s in e) r.call(e, s) && c.register(s, e[s]); else t[e] = o, 
            delete n[e], function(e) {
                if (f.test(e)) {
                    var t = e.replace(f, "");
                    r.call(i, t) && i[t].replace(f, "") !== t + "/index" || (i[t] = e);
                }
                if (h.test(e)) {
                    var n = e.replace(h, "");
                    r.call(i, n) || (i[n] = e);
                }
            }(e);
        }, c.list = function() {
            var e = [];
            for (var n in t) r.call(t, n) && e.push(n);
            return e;
        };
        var d = e._hmr && new e._hmr(function(e, t) {
            return u(s(a(e), t));
        }, c, t, n);
        c._cache = n, c.hmr = d && d.wrap, c.brunch = !0, e.require = c;
    }
}(), require.register("vueify/lib/insert-css", function(e, t, n) {
    function i(e, t) {
        if (t = t || {}, void 0 === e) throw new Error(s);
        var n = !0 === t.prepend ? "prepend" : "append", i = void 0 !== t.container ? t.container : document.querySelector("head"), a = r.indexOf(i);
        -1 === a && (a = r.push(i) - 1, o[a] = {});
        var l;
        return void 0 !== o[a] && void 0 !== o[a][n] ? l = o[a][n] : (l = o[a][n] = function() {
            var e = document.createElement("style");
            return e.setAttribute("type", "text/css"), e;
        }(), "prepend" === n ? i.insertBefore(l, i.childNodes[0]) : i.appendChild(l)), 65279 === e.charCodeAt(0) && (e = e.substr(1, e.length)), 
        l.styleSheet ? l.styleSheet.cssText += e : l.textContent += e, l;
    }
    var r = [], o = [], s = "insert-css: You need to provide a CSS string. Usage: insertCss(cssString[, options]).";
    n.exports = i, n.exports.insert = i;
}), function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Vue = t();
}(this, function() {
    "use strict";
    function e(e) {
        return void 0 === e || null === e;
    }
    function t(e) {
        return void 0 !== e && null !== e;
    }
    function n(e) {
        return !0 === e;
    }
    function i(e) {
        return "string" == typeof e || "number" == typeof e || "boolean" == typeof e;
    }
    function r(e) {
        return null !== e && "object" == typeof e;
    }
    function o(e) {
        return "[object Object]" === wn.call(e);
    }
    function s(e) {
        var t = parseFloat(e);
        return t >= 0 && Math.floor(t) === t && isFinite(e);
    }
    function a(e) {
        return null == e ? "" : "object" == typeof e ? JSON.stringify(e, null, 2) : String(e);
    }
    function l(e) {
        var t = parseFloat(e);
        return isNaN(t) ? e : t;
    }
    function u(e, t) {
        for (var n = Object.create(null), i = e.split(","), r = 0; r < i.length; r++) n[i[r]] = !0;
        return t ? function(e) {
            return n[e.toLowerCase()];
        } : function(e) {
            return n[e];
        };
    }
    function c(e, t) {
        if (e.length) {
            var n = e.indexOf(t);
            if (n > -1) return e.splice(n, 1);
        }
    }
    function f(e, t) {
        return kn.call(e, t);
    }
    function h(e) {
        var t = Object.create(null);
        return function(n) {
            return t[n] || (t[n] = e(n));
        };
    }
    function d(e, t) {
        function n(n) {
            var i = arguments.length;
            return i ? i > 1 ? e.apply(t, arguments) : e.call(t, n) : e.call(t);
        }
        return n._length = e.length, n;
    }
    function p(e, t) {
        t = t || 0;
        for (var n = e.length - t, i = new Array(n); n--; ) i[n] = e[n + t];
        return i;
    }
    function m(e, t) {
        for (var n in t) e[n] = t[n];
        return e;
    }
    function v(e) {
        for (var t = {}, n = 0; n < e.length; n++) e[n] && m(t, e[n]);
        return t;
    }
    function g(e, t, n) {}
    function y(e, t) {
        if (e === t) return !0;
        var n = r(e), i = r(t);
        if (!n || !i) return !n && !i && String(e) === String(t);
        try {
            var o = Array.isArray(e), s = Array.isArray(t);
            if (o && s) return e.length === t.length && e.every(function(e, n) {
                return y(e, t[n]);
            });
            if (o || s) return !1;
            var a = Object.keys(e), l = Object.keys(t);
            return a.length === l.length && a.every(function(n) {
                return y(e[n], t[n]);
            });
        } catch (e) {
            return !1;
        }
    }
    function b(e, t) {
        for (var n = 0; n < e.length; n++) if (y(e[n], t)) return n;
        return -1;
    }
    function _(e) {
        var t = !1;
        return function() {
            t || (t = !0, e.apply(this, arguments));
        };
    }
    function w(e) {
        var t = (e + "").charCodeAt(0);
        return 36 === t || 95 === t;
    }
    function x(e, t, n, i) {
        Object.defineProperty(e, t, {
            value: n,
            enumerable: !!i,
            writable: !0,
            configurable: !0
        });
    }
    function C(e, t, n) {
        if ($n.errorHandler) $n.errorHandler.call(null, e, t, n); else {
            if (Ln("Error in " + n + ': "' + e.toString() + '"', t), !Un || "undefined" == typeof console) throw e;
            console.error(e);
        }
    }
    function k(e) {
        return "function" == typeof e && /native code/.test(e.toString());
    }
    function T(e, t) {
        if (r(e)) {
            var n;
            return f(e, "__ob__") && e.__ob__ instanceof mi ? n = e.__ob__ : pi.shouldConvert && !ri() && (Array.isArray(e) || o(e)) && Object.isExtensible(e) && !e._isVue && (n = new mi(e)), 
            t && n && n.vmCount++, n;
        }
    }
    function S(e, t, n, i, r) {
        var o = new ui(), s = Object.getOwnPropertyDescriptor(e, t);
        if (!s || !1 !== s.configurable) {
            var a = s && s.get, l = s && s.set, u = !r && T(n);
            Object.defineProperty(e, t, {
                enumerable: !0,
                configurable: !0,
                get: function() {
                    var t = a ? a.call(e) : n;
                    return ui.target && (o.depend(), u && u.dep.depend(), Array.isArray(t) && O(t)), t;
                },
                set: function(t) {
                    var s = a ? a.call(e) : n;
                    t === s || t != t && s != s || (i && i(), l ? l.call(e, t) : n = t, u = !r && T(t), o.notify());
                }
            });
        }
    }
    function E(e, t, n) {
        if (Array.isArray(e) && s(t)) return e.length = Math.max(e.length, t), e.splice(t, 1, n), n;
        if (f(e, t)) return e[t] = n, n;
        var i = e.__ob__;
        return e._isVue || i && i.vmCount ? (Ln("Avoid adding reactive properties to a Vue instance or its root $data at runtime - declare it upfront in the data option."), 
        n) : i ? (S(i.value, t, n), i.dep.notify(), n) : (e[t] = n, n);
    }
    function A(e, t) {
        if (Array.isArray(e) && s(t)) e.splice(t, 1); else {
            var n = e.__ob__;
            e._isVue || n && n.vmCount ? Ln("Avoid deleting properties on a Vue instance or its root $data - just set it to null.") : f(e, t) && (delete e[t], 
            n && n.dep.notify());
        }
    }
    function O(e) {
        for (var t = void 0, n = 0, i = e.length; n < i; n++) (t = e[n]) && t.__ob__ && t.__ob__.dep.depend(), 
        Array.isArray(t) && O(t);
    }
    function N(e, t) {
        if (!t) return e;
        for (var n, i, r, s = Object.keys(t), a = 0; a < s.length; a++) i = e[n = s[a]], r = t[n], f(e, n) ? o(i) && o(r) && N(i, r) : E(e, n, r);
        return e;
    }
    function P(e, t, n) {
        return n ? e || t ? function() {
            var i = "function" == typeof t ? t.call(n) : t, r = "function" == typeof e ? e.call(n) : void 0;
            return i ? N(i, r) : r;
        } : void 0 : t ? e ? function() {
            return N("function" == typeof t ? t.call(this) : t, "function" == typeof e ? e.call(this) : e);
        } : t : e;
    }
    function I(e, t) {
        return t ? e ? e.concat(t) : Array.isArray(t) ? t : [ t ] : e;
    }
    function j(e, t) {
        var n = Object.create(e || null);
        return t ? m(n, t) : n;
    }
    function D(e, t, n) {
        function i(i) {
            var r = vi[i] || bi;
            u[i] = r(e[i], t[i], n, i);
        }
        !function(e) {
            for (var t in e.components) {
                var n = t.toLowerCase();
                (xn(n) || $n.isReservedTag(n)) && Ln("Do not use built-in or reserved HTML elements as component id: " + t);
            }
        }(t), "function" == typeof t && (t = t.options), function(e) {
            var t = e.props;
            if (t) {
                var n, i, r = {};
                if (Array.isArray(t)) for (n = t.length; n--; ) "string" == typeof (i = t[n]) ? r[Sn(i)] = {
                    type: null
                } : Ln("props must be strings when using array syntax."); else if (o(t)) for (var s in t) i = t[s], 
                r[Sn(s)] = o(i) ? i : {
                    type: i
                };
                e.props = r;
            }
        }(t), function(e) {
            var t = e.inject;
            if (Array.isArray(t)) for (var n = e.inject = {}, i = 0; i < t.length; i++) n[t[i]] = t[i];
        }(t), function(e) {
            var t = e.directives;
            if (t) for (var n in t) {
                var i = t[n];
                "function" == typeof i && (t[n] = {
                    bind: i,
                    update: i
                });
            }
        }(t);
        var r = t.extends;
        if (r && (e = D(e, r, n)), t.mixins) for (var s = 0, a = t.mixins.length; s < a; s++) e = D(e, t.mixins[s], n);
        var l, u = {};
        for (l in e) i(l);
        for (l in t) f(e, l) || i(l);
        return u;
    }
    function $(e, t, n, i) {
        if ("string" == typeof n) {
            var r = e[t];
            if (f(r, n)) return r[n];
            var o = Sn(n);
            if (f(r, o)) return r[o];
            var s = En(o);
            if (f(r, s)) return r[s];
            var a = r[n] || r[o] || r[s];
            return i && !a && Ln("Failed to resolve " + t.slice(0, -1) + ": " + n, e), a;
        }
    }
    function M(e, t, n, i) {
        var s = t[e], a = !f(n, e), l = n[e];
        if (L(Boolean, s.type) && (a && !f(s, "default") ? l = !1 : L(String, s.type) || "" !== l && l !== On(e) || (l = !0)), 
        void 0 === l) {
            l = function(e, t, n) {
                if (!f(t, "default")) return;
                var i = t.default;
                r(i) && Ln('Invalid default value for prop "' + n + '": Props with type Object/Array must use a factory function to return the default value.', e);
                if (e && e.$options.propsData && void 0 === e.$options.propsData[n] && void 0 !== e._props[n]) return e._props[n];
                return "function" == typeof i && "Function" !== H(t.type) ? i.call(e) : i;
            }(i, s, e);
            var u = pi.shouldConvert;
            pi.shouldConvert = !0, T(l), pi.shouldConvert = u;
        }
        return function(e, t, n, i, r) {
            if (e.required && r) return void Ln('Missing required prop: "' + t + '"', i);
            if (null == n && !e.required) return;
            var s = e.type, a = !s || !0 === s, l = [];
            if (s) {
                Array.isArray(s) || (s = [ s ]);
                for (var u = 0; u < s.length && !a; u++) {
                    var c = function(e, t) {
                        var n, i = H(t);
                        n = _i.test(i) ? typeof e === i.toLowerCase() : "Object" === i ? o(e) : "Array" === i ? Array.isArray(e) : e instanceof t;
                        return {
                            valid: n,
                            expectedType: i
                        };
                    }(n, s[u]);
                    l.push(c.expectedType || ""), a = c.valid;
                }
            }
            if (!a) return void Ln('Invalid prop: type check failed for prop "' + t + '". Expected ' + l.map(En).join(", ") + ", got " + Object.prototype.toString.call(n).slice(8, -1) + ".", i);
            var f = e.validator;
            f && (f(n) || Ln('Invalid prop: custom validator check failed for prop "' + t + '".', i));
        }(s, e, l, i, a), l;
    }
    function H(e) {
        var t = e && e.toString().match(/^\s*function (\w+)/);
        return t ? t[1] : "";
    }
    function L(e, t) {
        if (!Array.isArray(t)) return H(t) === H(e);
        for (var n = 0, i = t.length; n < i; n++) if (H(t[n]) === H(e)) return !0;
        return !1;
    }
    function F(e) {
        return new Oi(void 0, void 0, void 0, String(e));
    }
    function R(e) {
        var t = new Oi(e.tag, e.data, e.children, e.text, e.elm, e.context, e.componentOptions, e.asyncFactory);
        return t.ns = e.ns, t.isStatic = e.isStatic, t.key = e.key, t.isComment = e.isComment, t.isCloned = !0, 
        t;
    }
    function W(e) {
        for (var t = e.length, n = new Array(t), i = 0; i < t; i++) n[i] = R(e[i]);
        return n;
    }
    function q(e) {
        function t() {
            var e = arguments, n = t.fns;
            if (!Array.isArray(n)) return n.apply(null, arguments);
            for (var i = n.slice(), r = 0; r < i.length; r++) i[r].apply(null, e);
        }
        return t.fns = e, t;
    }
    function B(t, n, i, r, o) {
        var s, a, l, u;
        for (s in t) a = t[s], l = n[s], u = ji(s), e(a) ? Ln('Invalid handler for event "' + u.name + '": got ' + String(a), o) : e(l) ? (e(a.fns) && (a = t[s] = q(a)), 
        i(u.name, a, u.once, u.capture, u.passive)) : a !== l && (l.fns = a, t[s] = l);
        for (s in n) e(t[s]) && r((u = ji(s)).name, n[s], u.capture);
    }
    function z(i, r, o) {
        function s() {
            o.apply(this, arguments), c(a.fns, s);
        }
        var a, l = i[r];
        e(l) ? a = q([ s ]) : t(l.fns) && n(l.merged) ? (a = l).fns.push(s) : a = q([ l, s ]), a.merged = !0, 
        i[r] = a;
    }
    function U(e, n, i, r, o) {
        if (t(n)) {
            if (f(n, i)) return e[i] = n[i], o || delete n[i], !0;
            if (f(n, r)) return e[i] = n[r], o || delete n[r], !0;
        }
        return !1;
    }
    function V(e) {
        return t(e) && t(e.text) && function(e) {
            return !1 === e;
        }(e.isComment);
    }
    function X(r, o) {
        var s, a, l, u = [];
        for (s = 0; s < r.length; s++) e(a = r[s]) || "boolean" == typeof a || (l = u[u.length - 1], Array.isArray(a) ? u.push.apply(u, X(a, (o || "") + "_" + s)) : i(a) ? V(l) ? l.text += String(a) : "" !== a && u.push(F(a)) : V(a) && V(l) ? u[u.length - 1] = F(l.text + a.text) : (n(r._isVList) && t(a.tag) && e(a.key) && t(o) && (a.key = "__vlist" + o + "_" + s + "__"), 
        u.push(a)));
        return u;
    }
    function Y(e, t) {
        return e.__esModule && e.default && (e = e.default), r(e) ? t.extend(e) : e;
    }
    function J(e) {
        if (Array.isArray(e)) for (var n = 0; n < e.length; n++) {
            var i = e[n];
            if (t(i) && t(i.componentOptions)) return i;
        }
    }
    function G(e, t, n) {
        n ? Pi.$once(e, t) : Pi.$on(e, t);
    }
    function Z(e, t) {
        Pi.$off(e, t);
    }
    function K(e, t, n) {
        Pi = e, B(t, n || {}, G, Z, e);
    }
    function Q(e, t) {
        var n = {};
        if (!e) return n;
        for (var i = [], r = 0, o = e.length; r < o; r++) {
            var s = e[r];
            if (s.context !== t && s.functionalContext !== t || !s.data || null == s.data.slot) i.push(s); else {
                var a = s.data.slot, l = n[a] || (n[a] = []);
                "template" === s.tag ? l.push.apply(l, s.children) : l.push(s);
            }
        }
        return i.every(ee) || (n.default = i), n;
    }
    function ee(e) {
        return e.isComment || " " === e.text;
    }
    function te(e, t) {
        t = t || {};
        for (var n = 0; n < e.length; n++) Array.isArray(e[n]) ? te(e[n], t) : t[e[n].key] = e[n].fn;
        return t;
    }
    function ne(e) {
        for (;e && (e = e.$parent); ) if (e._inactive) return !0;
        return !1;
    }
    function ie(e, t) {
        if (t) {
            if (e._directInactive = !1, ne(e)) return;
        } else if (e._directInactive) return;
        if (e._inactive || null === e._inactive) {
            e._inactive = !1;
            for (var n = 0; n < e.$children.length; n++) ie(e.$children[n]);
            oe(e, "activated");
        }
    }
    function re(e, t) {
        if (!(t && (e._directInactive = !0, ne(e)) || e._inactive)) {
            e._inactive = !0;
            for (var n = 0; n < e.$children.length; n++) re(e.$children[n]);
            oe(e, "deactivated");
        }
    }
    function oe(e, t) {
        var n = e.$options[t];
        if (n) for (var i = 0, r = n.length; i < r; i++) try {
            n[i].call(e);
        } catch (n) {
            C(n, e, t + " hook");
        }
        e._hasHookEvent && e.$emit("hook:" + t);
    }
    function se() {
        qi = !0;
        var e, t;
        for (Hi.sort(function(e, t) {
            return e.id - t.id;
        }), Bi = 0; Bi < Hi.length; Bi++) if (e = Hi[Bi], t = e.id, Fi[t] = null, e.run(), null != Fi[t] && (Ri[t] = (Ri[t] || 0) + 1, 
        Ri[t] > Mi)) {
            Ln("You may have an infinite update loop " + (e.user ? 'in watcher with expression "' + e.expression + '"' : "in a component render function."), e.vm);
            break;
        }
        var n = Li.slice(), i = Hi.slice();
        Bi = Hi.length = Li.length = 0, Fi = {}, Ri = {}, Wi = qi = !1, function(e) {
            for (var t = 0; t < e.length; t++) e[t]._inactive = !0, ie(e[t], !0);
        }(n), function(e) {
            var t = e.length;
            for (;t--; ) {
                var n = e[t], i = n.vm;
                i._watcher === n && i._isMounted && oe(i, "updated");
            }
        }(i), oi && $n.devtools && oi.emit("flush");
    }
    function ae(e, t) {
        var n, i, o = Array.isArray(e);
        if ((o || r(e)) && Object.isExtensible(e)) {
            if (e.__ob__) {
                var s = e.__ob__.dep.id;
                if (t.has(s)) return;
                t.add(s);
            }
            if (o) for (n = e.length; n--; ) ae(e[n], t); else for (n = (i = Object.keys(e)).length; n--; ) ae(e[i[n]], t);
        }
    }
    function le(e, t, n) {
        Xi.get = function() {
            return this[t][n];
        }, Xi.set = function(e) {
            this[t][n] = e;
        }, Object.defineProperty(e, n, Xi);
    }
    function ue(e) {
        e._watchers = [];
        var t = e.$options;
        t.props && function(e, t) {
            var n = e.$options.propsData || {}, i = e._props = {}, r = e.$options._propKeys = [], o = !e.$parent;
            pi.shouldConvert = o;
            var s = function(o) {
                r.push(o);
                var s = M(o, t, n, e);
                (Cn(o) || $n.isReservedAttr(o)) && Ln('"' + o + '" is a reserved attribute and cannot be used as component prop.', e), 
                S(i, o, s, function() {
                    e.$parent && !$i && Ln("Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders. Instead, use a data or computed property based on the prop's value. Prop being mutated: \"" + o + '"', e);
                }), o in e || le(e, "_props", o);
            };
            for (var a in t) s(a);
            pi.shouldConvert = !0;
        }(e, t.props), t.methods && function(e, t) {
            ce(e, "methods");
            var n = e.$options.props;
            for (var i in t) e[i] = null == t[i] ? g : d(t[i], e), null == t[i] && Ln('method "' + i + '" has an undefined value in the component definition. Did you reference the function correctly?', e), 
            n && f(n, i) && Ln('method "' + i + '" has already been defined as a prop.', e);
        }(e, t.methods), t.data ? function(e) {
            var t = e.$options.data;
            t = e._data = "function" == typeof t ? function(e, t) {
                try {
                    return e.call(t);
                } catch (e) {
                    return C(e, t, "data()"), {};
                }
            }(t, e) : t || {}, o(t) || (t = {}, Ln("data functions should return an object:\nhttps://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function", e));
            var n = Object.keys(t), i = e.$options.props, r = e.$options.methods, s = n.length;
            for (;s--; ) {
                var a = n[s];
                r && f(r, a) && Ln('method "' + a + '" has already been defined as a data property.', e), i && f(i, a) ? Ln('The data property "' + a + '" is already declared as a prop. Use prop default value instead.', e) : w(a) || le(e, "_data", a);
            }
            T(t, !0);
        }(e) : T(e._data = {}, !0), t.computed && function(e, t) {
            ce(e, "computed");
            var n = e._computedWatchers = Object.create(null);
            for (var i in t) {
                var r = t[i], o = "function" == typeof r ? r : r.get;
                null == o && Ln('Getter is missing for computed property "' + i + '".', e), n[i] = new Ui(e, o || g, g, Yi), 
                i in e ? i in e.$data ? Ln('The computed property "' + i + '" is already defined in data.', e) : e.$options.props && i in e.$options.props && Ln('The computed property "' + i + '" is already defined as a prop.', e) : fe(e, i, r);
            }
        }(e, t.computed), t.watch && t.watch !== Qn && function(e, t) {
            ce(e, "watch");
            for (var n in t) {
                var i = t[n];
                if (Array.isArray(i)) for (var r = 0; r < i.length; r++) de(e, n, i[r]); else de(e, n, i);
            }
        }(e, t.watch);
    }
    function ce(e, t) {
        o(e.$options[t]) || Ln('component option "' + t + '" should be an object.', e);
    }
    function fe(e, t, n) {
        "function" == typeof n ? (Xi.get = he(t), Xi.set = g) : (Xi.get = n.get ? !1 !== n.cache ? he(t) : n.get : g, 
        Xi.set = n.set ? n.set : g), Xi.set === g && (Xi.set = function() {
            Ln('Computed property "' + t + '" was assigned to but it has no setter.', this);
        }), Object.defineProperty(e, t, Xi);
    }
    function he(e) {
        return function() {
            var t = this._computedWatchers && this._computedWatchers[e];
            if (t) return t.dirty && t.evaluate(), ui.target && t.depend(), t.value;
        };
    }
    function de(e, t, n, i) {
        return o(n) && (i = n, n = n.handler), "string" == typeof n && (n = e[n]), e.$watch(t, n, i);
    }
    function pe(e, t) {
        if (e) {
            for (var n = Object.create(null), i = si ? Reflect.ownKeys(e) : Object.keys(e), r = 0; r < i.length; r++) {
                for (var o = i[r], s = e[o], a = t; a; ) {
                    if (a._provided && s in a._provided) {
                        n[o] = a._provided[s];
                        break;
                    }
                    a = a.$parent;
                }
                a || Ln('Injection "' + o + '" not found', t);
            }
            return n;
        }
    }
    function me(e, t) {
        for (var n in t) e[Sn(n)] = t[n];
    }
    function ve(i, o, s, a, l) {
        if (!e(i)) {
            var u = s.$options._base;
            if (r(i) && (i = u.extend(i)), "function" == typeof i) {
                var c;
                if (e(i.cid) && (c = i, void 0 === (i = function(i, o, s) {
                    if (n(i.error) && t(i.errorComp)) return i.errorComp;
                    if (t(i.resolved)) return i.resolved;
                    if (n(i.loading) && t(i.loadingComp)) return i.loadingComp;
                    if (!t(i.contexts)) {
                        var a = i.contexts = [ s ], l = !0, u = function() {
                            for (var e = 0, t = a.length; e < t; e++) a[e].$forceUpdate();
                        }, c = _(function(e) {
                            i.resolved = Y(e, o), l || u();
                        }), f = _(function(e) {
                            Ln("Failed to resolve async component: " + String(i) + (e ? "\nReason: " + e : "")), t(i.errorComp) && (i.error = !0, 
                            u());
                        }), h = i(c, f);
                        return r(h) && ("function" == typeof h.then ? e(i.resolved) && h.then(c, f) : t(h.component) && "function" == typeof h.component.then && (h.component.then(c, f), 
                        t(h.error) && (i.errorComp = Y(h.error, o)), t(h.loading) && (i.loadingComp = Y(h.loading, o), 0 === h.delay ? i.loading = !0 : setTimeout(function() {
                            e(i.resolved) && e(i.error) && (i.loading = !0, u());
                        }, h.delay || 200)), t(h.timeout) && setTimeout(function() {
                            e(i.resolved) && f("timeout (" + h.timeout + "ms)");
                        }, h.timeout))), l = !1, i.loading ? i.loadingComp : i.resolved;
                    }
                    i.contexts.push(s);
                }(c, u, s)))) return function(e, t, n, i, r) {
                    var o = Ii();
                    return o.asyncFactory = e, o.asyncMeta = {
                        data: t,
                        context: n,
                        children: i,
                        tag: r
                    }, o;
                }(c, o, s, a, l);
                o = o || {}, Oe(i), t(o.model) && function(e, n) {
                    var i = e.model && e.model.prop || "value", r = e.model && e.model.event || "input";
                    (n.props || (n.props = {}))[i] = n.model.value;
                    var o = n.on || (n.on = {});
                    t(o[r]) ? o[r] = [ n.model.callback ].concat(o[r]) : o[r] = n.model.callback;
                }(i.options, o);
                var h = function(n, i, r) {
                    var o = i.options.props;
                    if (!e(o)) {
                        var s = {}, a = n.attrs, l = n.props;
                        if (t(a) || t(l)) for (var u in o) {
                            var c = On(u), h = u.toLowerCase();
                            u !== h && a && f(a, h) && Fn('Prop "' + h + '" is passed to component ' + Rn(r || i) + ', but the declared prop name is "' + u + '". Note that HTML attributes are case-insensitive and camelCased props need to use their kebab-case equivalents when using in-DOM templates. You should probably use "' + c + '" instead of "' + u + '".'), 
                            U(s, l, u, c, !0) || U(s, a, u, c, !1);
                        }
                        return s;
                    }
                }(o, i, l);
                if (n(i.options.functional)) return function(e, n, i, r, o) {
                    var s = {}, a = e.options.props;
                    if (t(a)) for (var l in a) s[l] = M(l, a, n || {}); else t(i.attrs) && me(s, i.attrs), t(i.props) && me(s, i.props);
                    var u = Object.create(r), c = e.options.render.call(null, function(e, t, n, i) {
                        return ge(u, e, t, n, i, !0);
                    }, {
                        data: i,
                        props: s,
                        children: o,
                        parent: r,
                        listeners: i.on || {},
                        injections: pe(e.options.inject, r),
                        slots: function() {
                            return Q(o, r);
                        }
                    });
                    return c instanceof Oi && (c.functionalContext = r, c.functionalOptions = e.options, i.slot && ((c.data || (c.data = {})).slot = i.slot)), 
                    c;
                }(i, h, o, s, a);
                var d = o.on;
                if (o.on = o.nativeOn, n(i.options.abstract)) {
                    var p = o.slot;
                    o = {}, p && (o.slot = p);
                }
                !function(e) {
                    e.hook || (e.hook = {});
                    for (var t = 0; t < Gi.length; t++) {
                        var n = Gi[t], i = e.hook[n], r = Ji[n];
                        e.hook[n] = i ? function(e, t) {
                            return function(n, i, r, o) {
                                e(n, i, r, o), t(n, i, r, o);
                            };
                        }(r, i) : r;
                    }
                }(o);
                var m = i.options.name || l;
                return new Oi("vue-component-" + i.cid + (m ? "-" + m : ""), o, void 0, void 0, void 0, s, {
                    Ctor: i,
                    propsData: h,
                    listeners: d,
                    tag: l,
                    children: a
                }, c);
            }
            Ln("Invalid Component definition: " + String(i), s);
        }
    }
    function ge(e, r, o, s, a, l) {
        return (Array.isArray(o) || i(o)) && (a = s, s = o, o = void 0), n(l) && (a = Ki), function(e, n, r, o, s) {
            if (t(r) && t(r.__ob__)) return Ln("Avoid using observed data object as vnode data: " + JSON.stringify(r) + "\nAlways create fresh vnode data objects in each render!", e), 
            Ii();
            t(r) && t(r.is) && (n = r.is);
            if (!n) return Ii();
            t(r) && t(r.key) && !i(r.key) && Ln("Avoid using non-primitive value as key, use string/number value instead.", e);
            Array.isArray(o) && "function" == typeof o[0] && ((r = r || {}).scopedSlots = {
                default: o[0]
            }, o.length = 0);
            s === Ki ? o = function(e) {
                return i(e) ? [ F(e) ] : Array.isArray(e) ? X(e) : void 0;
            }(o) : s === Zi && (o = function(e) {
                for (var t = 0; t < e.length; t++) if (Array.isArray(e[t])) return Array.prototype.concat.apply([], e);
                return e;
            }(o));
            var a, l;
            if ("string" == typeof n) {
                var u;
                l = $n.getTagNamespace(n), a = $n.isReservedTag(n) ? new Oi($n.parsePlatformTagName(n), r, o, void 0, void 0, e) : t(u = $(e.$options, "components", n)) ? ve(u, r, e, o, n) : new Oi(n, r, o, void 0, void 0, e);
            } else a = ve(n, r, e, o);
            return t(a) ? (l && ye(a, l), a) : Ii();
        }(e, r, o, s, a);
    }
    function ye(n, i) {
        if (n.ns = i, "foreignObject" !== n.tag && t(n.children)) for (var r = 0, o = n.children.length; r < o; r++) {
            var s = n.children[r];
            t(s.tag) && e(s.ns) && ye(s, i);
        }
    }
    function be(e, n) {
        var i, o, s, a, l;
        if (Array.isArray(e) || "string" == typeof e) for (i = new Array(e.length), o = 0, s = e.length; o < s; o++) i[o] = n(e[o], o); else if ("number" == typeof e) for (i = new Array(e), 
        o = 0; o < e; o++) i[o] = n(o + 1, o); else if (r(e)) for (a = Object.keys(e), i = new Array(a.length), 
        o = 0, s = a.length; o < s; o++) l = a[o], i[o] = n(e[l], l, o);
        return t(i) && (i._isVList = !0), i;
    }
    function _e(e, t, n, i) {
        var r = this.$scopedSlots[e];
        if (r) return n = n || {}, i && (n = m(m({}, i), n)), r(n) || t;
        var o = this.$slots[e];
        return o && (o._rendered && Ln('Duplicate presence of slot "' + e + '" found in the same render tree - this will likely cause render errors.', this), 
        o._rendered = !0), o || t;
    }
    function we(e) {
        return $(this.$options, "filters", e, !0) || Pn;
    }
    function xe(e, t, n) {
        var i = $n.keyCodes[t] || n;
        return Array.isArray(i) ? -1 === i.indexOf(e) : i !== e;
    }
    function Ce(e, t, n, i, o) {
        if (n) if (r(n)) {
            Array.isArray(n) && (n = v(n));
            var s, a = function(r) {
                if ("class" === r || "style" === r || Cn(r)) s = e; else {
                    var a = e.attrs && e.attrs.type;
                    s = i || $n.mustUseProp(t, a, r) ? e.domProps || (e.domProps = {}) : e.attrs || (e.attrs = {});
                }
                if (!(r in s) && (s[r] = n[r], o)) {
                    (e.on || (e.on = {}))["update:" + r] = function(e) {
                        n[r] = e;
                    };
                }
            };
            for (var l in n) a(l);
        } else Ln("v-bind without argument expects an Object or Array value", this);
        return e;
    }
    function ke(e, t) {
        var n = this._staticTrees[e];
        return n && !t ? Array.isArray(n) ? W(n) : R(n) : (n = this._staticTrees[e] = this.$options.staticRenderFns[e].call(this._renderProxy), 
        Se(n, "__static__" + e, !1), n);
    }
    function Te(e, t, n) {
        return Se(e, "__once__" + t + (n ? "_" + n : ""), !0), e;
    }
    function Se(e, t, n) {
        if (Array.isArray(e)) for (var i = 0; i < e.length; i++) e[i] && "string" != typeof e[i] && Ee(e[i], t + "_" + i, n); else Ee(e, t, n);
    }
    function Ee(e, t, n) {
        e.isStatic = !0, e.key = t, e.isOnce = n;
    }
    function Ae(e, t) {
        if (t) if (o(t)) {
            var n = e.on = e.on ? m({}, e.on) : {};
            for (var i in t) {
                var r = n[i], s = t[i];
                n[i] = r ? [].concat(s, r) : s;
            }
        } else Ln("v-on without argument expects an Object value", this);
        return e;
    }
    function Oe(e) {
        var t = e.options;
        if (e.super) {
            var n = Oe(e.super);
            if (n !== e.superOptions) {
                e.superOptions = n;
                var i = function(e) {
                    var t, n = e.options, i = e.extendOptions, r = e.sealedOptions;
                    for (var o in n) n[o] !== r[o] && (t || (t = {}), t[o] = function(e, t, n) {
                        if (Array.isArray(e)) {
                            var i = [];
                            n = Array.isArray(n) ? n : [ n ], t = Array.isArray(t) ? t : [ t ];
                            for (var r = 0; r < e.length; r++) (t.indexOf(e[r]) >= 0 || n.indexOf(e[r]) < 0) && i.push(e[r]);
                            return i;
                        }
                        return e;
                    }(n[o], i[o], r[o]));
                    return t;
                }(e);
                i && m(e.extendOptions, i), (t = e.options = D(n, e.extendOptions)).name && (t.components[t.name] = e);
            }
        }
        return t;
    }
    function Ne(e) {
        this instanceof Ne || Ln("Vue is a constructor and should be called with the `new` keyword"), this._init(e);
    }
    function Pe(e) {
        e.cid = 0;
        var t = 1;
        e.extend = function(e) {
            e = e || {};
            var n = this, i = n.cid, r = e._Ctor || (e._Ctor = {});
            if (r[i]) return r[i];
            var o = e.name || n.options.name;
            /^[a-zA-Z][\w-]*$/.test(o) || Ln('Invalid component name: "' + o + '". Component names can only contain alphanumeric characters and the hyphen, and must start with a letter.');
            var s = function(e) {
                this._init(e);
            };
            return s.prototype = Object.create(n.prototype), s.prototype.constructor = s, s.cid = t++, s.options = D(n.options, e), 
            s.super = n, s.options.props && function(e) {
                var t = e.options.props;
                for (var n in t) le(e.prototype, "_props", n);
            }(s), s.options.computed && function(e) {
                var t = e.options.computed;
                for (var n in t) fe(e.prototype, n, t[n]);
            }(s), s.extend = n.extend, s.mixin = n.mixin, s.use = n.use, jn.forEach(function(e) {
                s[e] = n[e];
            }), o && (s.options.components[o] = s), s.superOptions = n.options, s.extendOptions = e, s.sealedOptions = m({}, s.options), 
            r[i] = s, s;
        };
    }
    function Ie(e) {
        return e && (e.Ctor.options.name || e.tag);
    }
    function je(e, t) {
        return Array.isArray(e) ? e.indexOf(t) > -1 : "string" == typeof e ? e.split(",").indexOf(t) > -1 : !!function(e) {
            return "[object RegExp]" === wn.call(e);
        }(e) && e.test(t);
    }
    function De(e, t, n) {
        for (var i in e) {
            var r = e[i];
            if (r) {
                var o = Ie(r.componentOptions);
                o && !n(o) && (r !== t && $e(r), e[i] = null);
            }
        }
    }
    function $e(e) {
        e && e.componentInstance.$destroy();
    }
    function Me(e) {
        for (var n = e.data, i = e, r = e; t(r.componentInstance); ) (r = r.componentInstance._vnode).data && (n = He(r.data, n));
        for (;t(i = i.parent); ) i.data && (n = He(n, i.data));
        return function(e, n) {
            if (t(e) || t(n)) return Le(e, Fe(n));
            return "";
        }(n.staticClass, n.class);
    }
    function He(e, n) {
        return {
            staticClass: Le(e.staticClass, n.staticClass),
            class: t(e.class) ? [ e.class, n.class ] : n.class
        };
    }
    function Le(e, t) {
        return e ? t ? e + " " + t : e : t || "";
    }
    function Fe(e) {
        return Array.isArray(e) ? function(e) {
            for (var n, i = "", r = 0, o = e.length; r < o; r++) t(n = Fe(e[r])) && "" !== n && (i && (i += " "), 
            i += n);
            return i;
        }(e) : r(e) ? function(e) {
            var t = "";
            for (var n in e) e[n] && (t && (t += " "), t += n);
            return t;
        }(e) : "string" == typeof e ? e : "";
    }
    function Re(e) {
        return xr(e) ? "svg" : "math" === e ? "math" : void 0;
    }
    function We(e) {
        if ("string" == typeof e) {
            var t = document.querySelector(e);
            return t || (Ln("Cannot find element: " + e), document.createElement("div"));
        }
        return e;
    }
    function qe(e, t) {
        var n = e.data.ref;
        if (n) {
            var i = e.context, r = e.componentInstance || e.elm, o = i.$refs;
            t ? Array.isArray(o[n]) ? c(o[n], r) : o[n] === r && (o[n] = void 0) : e.data.refInFor ? Array.isArray(o[n]) ? o[n].indexOf(r) < 0 && o[n].push(r) : o[n] = [ r ] : o[n] = r;
        }
    }
    function Be(i, r) {
        return i.key === r.key && (i.tag === r.tag && i.isComment === r.isComment && t(i.data) === t(r.data) && function(e, n) {
            if ("input" !== e.tag) return !0;
            var i, r = t(i = e.data) && t(i = i.attrs) && i.type, o = t(i = n.data) && t(i = i.attrs) && i.type;
            return r === o;
        }(i, r) || n(i.isAsyncPlaceholder) && i.asyncFactory === r.asyncFactory && e(r.asyncFactory.error));
    }
    function ze(e, n, i) {
        var r, o, s = {};
        for (r = n; r <= i; ++r) t(o = e[r].key) && (s[o] = r);
        return s;
    }
    function Ue(e, t) {
        (e.data.directives || t.data.directives) && function(e, t) {
            var n, i, r, o = e === Er, s = t === Er, a = Ve(e.data.directives, e.context), l = Ve(t.data.directives, t.context), u = [], c = [];
            for (n in l) i = a[n], r = l[n], i ? (r.oldValue = i.value, Xe(r, "update", t, e), r.def && r.def.componentUpdated && c.push(r)) : (Xe(r, "bind", t, e), 
            r.def && r.def.inserted && u.push(r));
            if (u.length) {
                var f = function() {
                    for (var n = 0; n < u.length; n++) Xe(u[n], "inserted", t, e);
                };
                o ? z(t.data.hook || (t.data.hook = {}), "insert", f) : f();
            }
            c.length && z(t.data.hook || (t.data.hook = {}), "postpatch", function() {
                for (var n = 0; n < c.length; n++) Xe(c[n], "componentUpdated", t, e);
            });
            if (!o) for (n in a) l[n] || Xe(a[n], "unbind", e, e, s);
        }(e, t);
    }
    function Ve(e, t) {
        var n = Object.create(null);
        if (!e) return n;
        var i, r;
        for (i = 0; i < e.length; i++) (r = e[i]).modifiers || (r.modifiers = Nr), n[function(e) {
            return e.rawName || e.name + "." + Object.keys(e.modifiers || {}).join(".");
        }(r)] = r, r.def = $(t.$options, "directives", r.name, !0);
        return n;
    }
    function Xe(e, t, n, i, r) {
        var o = e.def && e.def[t];
        if (o) try {
            o(n.elm, e, n, i, r);
        } catch (i) {
            C(i, n.context, "directive " + e.name + " " + t + " hook");
        }
    }
    function Ye(n, i) {
        var r = i.componentOptions;
        if (!(t(r) && !1 === r.Ctor.options.inheritAttrs || e(n.data.attrs) && e(i.data.attrs))) {
            var o, s, a = i.elm, l = n.data.attrs || {}, u = i.data.attrs || {};
            t(u.__ob__) && (u = i.data.attrs = m({}, u));
            for (o in u) s = u[o], l[o] !== s && Je(a, o, s);
            Yn && u.value !== l.value && Je(a, "value", u.value);
            for (o in l) e(u[o]) && (gr(o) ? a.removeAttributeNS(vr, yr(o)) : pr(o) || a.removeAttribute(o));
        }
    }
    function Je(e, t, n) {
        mr(t) ? br(n) ? e.removeAttribute(t) : e.setAttribute(t, t) : pr(t) ? e.setAttribute(t, br(n) || "false" === n ? "false" : "true") : gr(t) ? br(n) ? e.removeAttributeNS(vr, yr(t)) : e.setAttributeNS(vr, t, n) : br(n) ? e.removeAttribute(t) : e.setAttribute(t, n);
    }
    function Ge(n, i) {
        var r = i.elm, o = i.data, s = n.data;
        if (!(e(o.staticClass) && e(o.class) && (e(s) || e(s.staticClass) && e(s.class)))) {
            var a = Me(i), l = r._transitionClasses;
            t(l) && (a = Le(a, Fe(l))), a !== r._prevClass && (r.setAttribute("class", a), r._prevClass = a);
        }
    }
    function Ze(e) {
        function t() {
            (s || (s = [])).push(e.slice(p, r).trim()), p = r + 1;
        }
        var n, i, r, o, s, a = !1, l = !1, u = !1, c = !1, f = 0, h = 0, d = 0, p = 0;
        for (r = 0; r < e.length; r++) if (i = n, n = e.charCodeAt(r), a) 39 === n && 92 !== i && (a = !1); else if (l) 34 === n && 92 !== i && (l = !1); else if (u) 96 === n && 92 !== i && (u = !1); else if (c) 47 === n && 92 !== i && (c = !1); else if (124 !== n || 124 === e.charCodeAt(r + 1) || 124 === e.charCodeAt(r - 1) || f || h || d) {
            switch (n) {
              case 34:
                l = !0;
                break;

              case 39:
                a = !0;
                break;

              case 96:
                u = !0;
                break;

              case 40:
                d++;
                break;

              case 41:
                d--;
                break;

              case 91:
                h++;
                break;

              case 93:
                h--;
                break;

              case 123:
                f++;
                break;

              case 125:
                f--;
            }
            if (47 === n) {
                for (var m = r - 1, v = void 0; m >= 0 && " " === (v = e.charAt(m)); m--) ;
                v && Dr.test(v) || (c = !0);
            }
        } else void 0 === o ? (p = r + 1, o = e.slice(0, r).trim()) : t();
        if (void 0 === o ? o = e.slice(0, r).trim() : 0 !== p && t(), s) for (r = 0; r < s.length; r++) o = function(e, t) {
            var n = t.indexOf("(");
            if (n < 0) return '_f("' + t + '")(' + e + ")";
            var i = t.slice(0, n), r = t.slice(n + 1);
            return '_f("' + i + '")(' + e + "," + r;
        }(o, s[r]);
        return o;
    }
    function Ke(e) {
        console.error("[Vue compiler]: " + e);
    }
    function Qe(e, t) {
        return e ? e.map(function(e) {
            return e[t];
        }).filter(function(e) {
            return e;
        }) : [];
    }
    function et(e, t, n) {
        (e.props || (e.props = [])).push({
            name: t,
            value: n
        });
    }
    function tt(e, t, n) {
        (e.attrs || (e.attrs = [])).push({
            name: t,
            value: n
        });
    }
    function nt(e, t, n, i, r, o) {
        (e.directives || (e.directives = [])).push({
            name: t,
            rawName: n,
            value: i,
            arg: r,
            modifiers: o
        });
    }
    function it(e, t, n, i, r, o) {
        o && i && i.prevent && i.passive && o("passive and prevent can't be used together. Passive handler can't prevent default event."), 
        i && i.capture && (delete i.capture, t = "!" + t), i && i.once && (delete i.once, t = "~" + t), i && i.passive && (delete i.passive, 
        t = "&" + t);
        var s;
        i && i.native ? (delete i.native, s = e.nativeEvents || (e.nativeEvents = {})) : s = e.events || (e.events = {});
        var a = {
            value: n,
            modifiers: i
        }, l = s[t];
        Array.isArray(l) ? r ? l.unshift(a) : l.push(a) : s[t] = l ? r ? [ a, l ] : [ l, a ] : a;
    }
    function rt(e, t, n) {
        var i = ot(e, ":" + t) || ot(e, "v-bind:" + t);
        if (null != i) return Ze(i);
        if (!1 !== n) {
            var r = ot(e, t);
            if (null != r) return JSON.stringify(r);
        }
    }
    function ot(e, t) {
        var n;
        if (null != (n = e.attrsMap[t])) for (var i = e.attrsList, r = 0, o = i.length; r < o; r++) if (i[r].name === t) {
            i.splice(r, 1);
            break;
        }
        return n;
    }
    function st(e, t, n) {
        var i = n || {}, r = "$$v";
        i.trim && (r = "(typeof $$v === 'string'? $$v.trim(): $$v)"), i.number && (r = "_n(" + r + ")");
        var o = at(t, r);
        e.model = {
            value: "(" + t + ")",
            expression: '"' + t + '"',
            callback: "function ($$v) {" + o + "}"
        };
    }
    function at(e, t) {
        var n = function(e) {
            if (ir = e, nr = ir.length, or = sr = ar = 0, e.indexOf("[") < 0 || e.lastIndexOf("]") < nr - 1) return {
                exp: e,
                idx: null
            };
            for (;!ut(); ) ct(rr = lt()) ? ft(rr) : 91 === rr && function(e) {
                var t = 1;
                sr = or;
                for (;!ut(); ) if (e = lt(), ct(e)) ft(e); else if (91 === e && t++, 93 === e && t--, 0 === t) {
                    ar = or;
                    break;
                }
            }(rr);
            return {
                exp: e.substring(0, sr),
                idx: e.substring(sr + 1, ar)
            };
        }(e);
        return null === n.idx ? e + "=" + t : "$set(" + n.exp + ", " + n.idx + ", " + t + ")";
    }
    function lt() {
        return ir.charCodeAt(++or);
    }
    function ut() {
        return or >= nr;
    }
    function ct(e) {
        return 34 === e || 39 === e;
    }
    function ft(e) {
        for (var t = e; !ut() && (e = lt()) !== t; ) ;
    }
    function ht(e, t, n, i, r) {
        if (n) {
            var o = t, s = ur;
            t = function(n) {
                null !== (1 === arguments.length ? o(n) : o.apply(null, arguments)) && dt(e, t, i, s);
            };
        }
        ur.addEventListener(e, t, ei ? {
            capture: i,
            passive: r
        } : i);
    }
    function dt(e, t, n, i) {
        (i || ur).removeEventListener(e, t, n);
    }
    function pt(n, i) {
        if (!e(n.data.on) || !e(i.data.on)) {
            var r = i.data.on || {}, o = n.data.on || {};
            ur = i.elm, function(e) {
                var n;
                t(e[$r]) && (e[n = Xn ? "change" : "input"] = [].concat(e[$r], e[n] || []), delete e[$r]), t(e[Mr]) && (e[n = Kn ? "click" : "change"] = [].concat(e[Mr], e[n] || []), 
                delete e[Mr]);
            }(r), B(r, o, ht, dt, i.context);
        }
    }
    function mt(n, i) {
        if (!e(n.data.domProps) || !e(i.data.domProps)) {
            var r, o, s = i.elm, a = n.data.domProps || {}, u = i.data.domProps || {};
            t(u.__ob__) && (u = i.data.domProps = m({}, u));
            for (r in a) e(u[r]) && (s[r] = "");
            for (r in u) if (o = u[r], "textContent" !== r && "innerHTML" !== r || (i.children && (i.children.length = 0), 
            o !== a[r])) if ("value" === r) {
                s._value = o;
                var c = e(o) ? "" : String(o);
                (function(e, n, i) {
                    return !e.composing && ("option" === n.tag || function(e, t) {
                        var n = !0;
                        try {
                            n = document.activeElement !== e;
                        } catch (e) {}
                        return n && e.value !== t;
                    }(e, i) || function(e, n) {
                        var i = e.value, r = e._vModifiers;
                        if (t(r) && r.number) return l(i) !== l(n);
                        if (t(r) && r.trim) return i.trim() !== n.trim();
                        return i !== n;
                    }(e, i));
                })(s, i, c) && (s.value = c);
            } else s[r] = o;
        }
    }
    function vt(e) {
        var t = gt(e.style);
        return e.staticStyle ? m(e.staticStyle, t) : t;
    }
    function gt(e) {
        return Array.isArray(e) ? v(e) : "string" == typeof e ? Fr(e) : e;
    }
    function yt(n, i) {
        var r = i.data, o = n.data;
        if (!(e(r.staticStyle) && e(r.style) && e(o.staticStyle) && e(o.style))) {
            var s, a, l = i.elm, u = o.staticStyle, c = o.normalizedStyle || o.style || {}, f = u || c, h = gt(i.data.style) || {};
            i.data.normalizedStyle = t(h.__ob__) ? m({}, h) : h;
            var d = function(e, t) {
                var n, i = {};
                if (t) for (var r = e; r.componentInstance; ) (r = r.componentInstance._vnode).data && (n = vt(r.data)) && m(i, n);
                (n = vt(e.data)) && m(i, n);
                for (var o = e; o = o.parent; ) o.data && (n = vt(o.data)) && m(i, n);
                return i;
            }(i, !0);
            for (a in f) e(d[a]) && qr(l, a, "");
            for (a in d) (s = d[a]) !== f[a] && qr(l, a, null == s ? "" : s);
        }
    }
    function bt(e, t) {
        if (t && (t = t.trim())) if (e.classList) t.indexOf(" ") > -1 ? t.split(/\s+/).forEach(function(t) {
            return e.classList.add(t);
        }) : e.classList.add(t); else {
            var n = " " + (e.getAttribute("class") || "") + " ";
            n.indexOf(" " + t + " ") < 0 && e.setAttribute("class", (n + t).trim());
        }
    }
    function _t(e, t) {
        if (t && (t = t.trim())) if (e.classList) t.indexOf(" ") > -1 ? t.split(/\s+/).forEach(function(t) {
            return e.classList.remove(t);
        }) : e.classList.remove(t), e.classList.length || e.removeAttribute("class"); else {
            for (var n = " " + (e.getAttribute("class") || "") + " ", i = " " + t + " "; n.indexOf(i) >= 0; ) n = n.replace(i, " ");
            (n = n.trim()) ? e.setAttribute("class", n) : e.removeAttribute("class");
        }
    }
    function wt(e) {
        if (e) {
            if ("object" == typeof e) {
                var t = {};
                return !1 !== e.css && m(t, Vr(e.name || "v")), m(t, e), t;
            }
            return "string" == typeof e ? Vr(e) : void 0;
        }
    }
    function xt(e) {
        eo(function() {
            eo(e);
        });
    }
    function Ct(e, t) {
        var n = e._transitionClasses || (e._transitionClasses = []);
        n.indexOf(t) < 0 && (n.push(t), bt(e, t));
    }
    function kt(e, t) {
        e._transitionClasses && c(e._transitionClasses, t), _t(e, t);
    }
    function Tt(e, t, n) {
        var i = St(e, t), r = i.type, o = i.timeout, s = i.propCount;
        if (!r) return n();
        var a = r === Yr ? Zr : Qr, l = 0, u = function() {
            e.removeEventListener(a, c), n();
        }, c = function(t) {
            t.target === e && ++l >= s && u();
        };
        setTimeout(function() {
            l < s && u();
        }, o + 1), e.addEventListener(a, c);
    }
    function St(e, t) {
        var n, i = window.getComputedStyle(e), r = i[Gr + "Delay"].split(", "), o = i[Gr + "Duration"].split(", "), s = Et(r, o), a = i[Kr + "Delay"].split(", "), l = i[Kr + "Duration"].split(", "), u = Et(a, l), c = 0, f = 0;
        t === Yr ? s > 0 && (n = Yr, c = s, f = o.length) : t === Jr ? u > 0 && (n = Jr, c = u, f = l.length) : f = (n = (c = Math.max(s, u)) > 0 ? s > u ? Yr : Jr : null) ? n === Yr ? o.length : l.length : 0;
        return {
            type: n,
            timeout: c,
            propCount: f,
            hasTransform: n === Yr && to.test(i[Gr + "Property"])
        };
    }
    function Et(e, t) {
        for (;e.length < t.length; ) e = e.concat(e);
        return Math.max.apply(null, t.map(function(t, n) {
            return At(t) + At(e[n]);
        }));
    }
    function At(e) {
        return 1e3 * Number(e.slice(0, -1));
    }
    function Ot(n, i) {
        var o = n.elm;
        t(o._leaveCb) && (o._leaveCb.cancelled = !0, o._leaveCb());
        var s = wt(n.data.transition);
        if (!e(s) && !t(o._enterCb) && 1 === o.nodeType) {
            for (var a = s.css, u = s.type, c = s.enterClass, f = s.enterToClass, h = s.enterActiveClass, d = s.appearClass, p = s.appearToClass, m = s.appearActiveClass, v = s.beforeEnter, g = s.enter, y = s.afterEnter, b = s.enterCancelled, w = s.beforeAppear, x = s.appear, C = s.afterAppear, k = s.appearCancelled, T = s.duration, S = Di, E = Di.$vnode; E && E.parent; ) S = (E = E.parent).context;
            var A = !S._isMounted || !n.isRootInsert;
            if (!A || x || "" === x) {
                var O = A && d ? d : c, N = A && m ? m : h, P = A && p ? p : f, I = A ? w || v : v, j = A && "function" == typeof x ? x : g, D = A ? C || y : y, $ = A ? k || b : b, M = l(r(T) ? T.enter : T);
                null != M && Pt(M, "enter", n);
                var H = !1 !== a && !Yn, L = jt(j), F = o._enterCb = _(function() {
                    H && (kt(o, P), kt(o, N)), F.cancelled ? (H && kt(o, O), $ && $(o)) : D && D(o), o._enterCb = null;
                });
                n.data.show || z(n.data.hook || (n.data.hook = {}), "insert", function() {
                    var e = o.parentNode, t = e && e._pending && e._pending[n.key];
                    t && t.tag === n.tag && t.elm._leaveCb && t.elm._leaveCb(), j && j(o, F);
                }), I && I(o), H && (Ct(o, O), Ct(o, N), xt(function() {
                    Ct(o, P), kt(o, O), F.cancelled || L || (It(M) ? setTimeout(F, M) : Tt(o, u, F));
                })), n.data.show && (i && i(), j && j(o, F)), H || L || F();
            }
        }
    }
    function Nt(n, i) {
        function o() {
            k.cancelled || (n.data.show || ((s.parentNode._pending || (s.parentNode._pending = {}))[n.key] = n), 
            p && p(s), w && (Ct(s, f), Ct(s, d), xt(function() {
                Ct(s, h), kt(s, f), k.cancelled || x || (It(C) ? setTimeout(k, C) : Tt(s, c, k));
            })), m && m(s, k), w || x || k());
        }
        var s = n.elm;
        t(s._enterCb) && (s._enterCb.cancelled = !0, s._enterCb());
        var a = wt(n.data.transition);
        if (e(a)) return i();
        if (!t(s._leaveCb) && 1 === s.nodeType) {
            var u = a.css, c = a.type, f = a.leaveClass, h = a.leaveToClass, d = a.leaveActiveClass, p = a.beforeLeave, m = a.leave, v = a.afterLeave, g = a.leaveCancelled, y = a.delayLeave, b = a.duration, w = !1 !== u && !Yn, x = jt(m), C = l(r(b) ? b.leave : b);
            t(C) && Pt(C, "leave", n);
            var k = s._leaveCb = _(function() {
                s.parentNode && s.parentNode._pending && (s.parentNode._pending[n.key] = null), w && (kt(s, h), kt(s, d)), 
                k.cancelled ? (w && kt(s, f), g && g(s)) : (i(), v && v(s)), s._leaveCb = null;
            });
            y ? y(o) : o();
        }
    }
    function Pt(e, t, n) {
        "number" != typeof e ? Ln("<transition> explicit " + t + " duration is not a valid number - got " + JSON.stringify(e) + ".", n.context) : isNaN(e) && Ln("<transition> explicit " + t + " duration is NaN - the duration expression might be incorrect.", n.context);
    }
    function It(e) {
        return "number" == typeof e && !isNaN(e);
    }
    function jt(n) {
        if (e(n)) return !1;
        var i = n.fns;
        return t(i) ? jt(Array.isArray(i) ? i[0] : i) : (n._length || n.length) > 1;
    }
    function Dt(e, t) {
        !0 !== t.data.show && Ot(t);
    }
    function $t(e, t, n) {
        var i = t.value, r = e.multiple;
        if (!r || Array.isArray(i)) {
            for (var o, s, a = 0, l = e.options.length; a < l; a++) if (s = e.options[a], r) o = b(i, Mt(s)) > -1, 
            s.selected !== o && (s.selected = o); else if (y(Mt(s), i)) return void (e.selectedIndex !== a && (e.selectedIndex = a));
            r || (e.selectedIndex = -1);
        } else Ln('<select multiple v-model="' + t.expression + '"> expects an Array value for its binding, but got ' + Object.prototype.toString.call(i).slice(8, -1), n);
    }
    function Mt(e) {
        return "_value" in e ? e._value : e.value;
    }
    function Ht(e) {
        e.target.composing = !0;
    }
    function Lt(e) {
        e.target.composing && (e.target.composing = !1, Ft(e.target, "input"));
    }
    function Ft(e, t) {
        var n = document.createEvent("HTMLEvents");
        n.initEvent(t, !0, !0), e.dispatchEvent(n);
    }
    function Rt(e) {
        return !e.componentInstance || e.data && e.data.transition ? e : Rt(e.componentInstance._vnode);
    }
    function Wt(e) {
        var t = e && e.componentOptions;
        return t && t.Ctor.options.abstract ? Wt(J(t.children)) : e;
    }
    function qt(e) {
        var t = {}, n = e.$options;
        for (var i in n.propsData) t[i] = e[i];
        var r = n._parentListeners;
        for (var o in r) t[Sn(o)] = r[o];
        return t;
    }
    function Bt(e, t) {
        if (/\d-keep-alive$/.test(t.tag)) return e("keep-alive", {
            props: t.componentOptions.propsData
        });
    }
    function zt(e) {
        return e.isComment && e.asyncFactory;
    }
    function Ut(e) {
        e.elm._moveCb && e.elm._moveCb(), e.elm._enterCb && e.elm._enterCb();
    }
    function Vt(e) {
        e.data.newPos = e.elm.getBoundingClientRect();
    }
    function Xt(e) {
        var t = e.data.pos, n = e.data.newPos, i = t.left - n.left, r = t.top - n.top;
        if (i || r) {
            e.data.moved = !0;
            var o = e.elm.style;
            o.transform = o.WebkitTransform = "translate(" + i + "px," + r + "px)", o.transitionDuration = "0s";
        }
    }
    function Yt(e, t) {
        var n = t ? po(t) : fo;
        if (n.test(e)) {
            for (var i, r, o = [], s = n.lastIndex = 0; i = n.exec(e); ) {
                (r = i.index) > s && o.push(JSON.stringify(e.slice(s, r)));
                var a = Ze(i[1].trim());
                o.push("_s(" + a + ")"), s = r + i[0].length;
            }
            return s < e.length && o.push(JSON.stringify(e.slice(s))), o.join("+");
        }
    }
    function Jt(e, t) {
        var n = t ? Vo : Uo;
        return e.replace(n, function(e) {
            return zo[e];
        });
    }
    function Gt(e, t) {
        function n(t) {
            c += t, e = e.substring(t);
        }
        function i(e, n, i) {
            var r, a;
            if (null == n && (n = c), null == i && (i = c), e && (a = e.toLowerCase()), e) for (r = s.length - 1; r >= 0 && s[r].lowerCasedTag !== a; r--) ; else r = 0;
            if (r >= 0) {
                for (var l = s.length - 1; l >= r; l--) (l > r || !e) && t.warn && t.warn("tag <" + s[l].tag + "> has no matching end tag."), 
                t.end && t.end(s[l].tag, n, i);
                s.length = r, o = r && s[r - 1].tag;
            } else "br" === a ? t.start && t.start(e, [], !0, n, i) : "p" === a && (t.start && t.start(e, [], !1, n, i), 
            t.end && t.end(e, n, i));
        }
        for (var r, o, s = [], a = t.expectHTML, l = t.isUnaryTag || Nn, u = t.canBeLeftOpenTag || Nn, c = 0; e; ) {
            if (r = e, o && qo(o)) {
                var f = 0, h = o.toLowerCase(), d = Bo[h] || (Bo[h] = new RegExp("([\\s\\S]*?)(</" + h + "[^>]*>)", "i")), p = e.replace(d, function(e, n, i) {
                    return f = i.length, qo(h) || "noscript" === h || (n = n.replace(/<!--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")), 
                    Yo(h, n) && (n = n.slice(1)), t.chars && t.chars(n), "";
                });
                c += e.length - p.length, e = p, i(h, c - f, c);
            } else {
                var m = e.indexOf("<");
                if (0 === m) {
                    if (Oo.test(e)) {
                        var v = e.indexOf("--\x3e");
                        if (v >= 0) {
                            t.shouldKeepComment && t.comment(e.substring(4, v)), n(v + 3);
                            continue;
                        }
                    }
                    if (No.test(e)) {
                        var g = e.indexOf("]>");
                        if (g >= 0) {
                            n(g + 2);
                            continue;
                        }
                    }
                    var y = e.match(Ao);
                    if (y) {
                        n(y[0].length);
                        continue;
                    }
                    var b = e.match(Eo);
                    if (b) {
                        var _ = c;
                        n(b[0].length), i(b[1], _, c);
                        continue;
                    }
                    var w = function() {
                        var t = e.match(To);
                        if (t) {
                            var i = {
                                tagName: t[1],
                                attrs: [],
                                start: c
                            };
                            n(t[0].length);
                            for (var r, o; !(r = e.match(So)) && (o = e.match(Co)); ) n(o[0].length), i.attrs.push(o);
                            if (r) return i.unarySlash = r[1], n(r[0].length), i.end = c, i;
                        }
                    }();
                    if (w) {
                        !function(e) {
                            var n = e.tagName, r = e.unarySlash;
                            a && ("p" === o && bo(n) && i(o), u(n) && o === n && i(n));
                            for (var c = l(n) || !!r, f = e.attrs.length, h = new Array(f), d = 0; d < f; d++) {
                                var p = e.attrs[d];
                                Po && -1 === p[0].indexOf('""') && ("" === p[3] && delete p[3], "" === p[4] && delete p[4], "" === p[5] && delete p[5]);
                                var m = p[3] || p[4] || p[5] || "";
                                h[d] = {
                                    name: p[1],
                                    value: Jt(m, t.shouldDecodeNewlines)
                                };
                            }
                            c || (s.push({
                                tag: n,
                                lowerCasedTag: n.toLowerCase(),
                                attrs: h
                            }), o = n), t.start && t.start(n, h, c, e.start, e.end);
                        }(w), Yo(o, e) && n(1);
                        continue;
                    }
                }
                var x = void 0, C = void 0, k = void 0;
                if (m >= 0) {
                    for (C = e.slice(m); !(Eo.test(C) || To.test(C) || Oo.test(C) || No.test(C) || (k = C.indexOf("<", 1)) < 0); ) m += k, 
                    C = e.slice(m);
                    x = e.substring(0, m), n(m);
                }
                m < 0 && (x = e, e = ""), t.chars && x && t.chars(x);
            }
            if (e === r) {
                t.chars && t.chars(e), !s.length && t.warn && t.warn('Mal-formatted tag at end of template: "' + e + '"');
                break;
            }
        }
        i();
    }
    function Zt(e, t) {
        function n(e) {
            c || (c = !0, Io(e));
        }
        function i(e) {
            e.pre && (l = !1), Ho(e.tag) && (u = !1);
        }
        Io = t.warn || Ke, Ho = t.isPreTag || Nn, Lo = t.mustUseProp || Nn, Fo = t.getTagNamespace || Nn, Do = Qe(t.modules, "transformNode"), 
        $o = Qe(t.modules, "preTransformNode"), Mo = Qe(t.modules, "postTransformNode"), jo = t.delimiters;
        var r, o, s = [], a = !1 !== t.preserveWhitespace, l = !1, u = !1, c = !1;
        return Gt(e, {
            warn: Io,
            expectHTML: t.expectHTML,
            isUnaryTag: t.isUnaryTag,
            canBeLeftOpenTag: t.canBeLeftOpenTag,
            shouldDecodeNewlines: t.shouldDecodeNewlines,
            shouldKeepComment: t.comments,
            start: function(e, a, c) {
                function f(e) {
                    "slot" !== e.tag && "template" !== e.tag || n("Cannot use <" + e.tag + "> as component root element because it may contain multiple nodes."), 
                    e.attrsMap.hasOwnProperty("v-for") && n("Cannot use v-for on stateful component root element because it renders multiple elements.");
                }
                var h = o && o.ns || Fo(e);
                Xn && "svg" === h && (a = function(e) {
                    for (var t = [], n = 0; n < e.length; n++) {
                        var i = e[n];
                        is.test(i.name) || (i.name = i.name.replace(rs, ""), t.push(i));
                    }
                    return t;
                }(a));
                var d = {
                    type: 1,
                    tag: e,
                    attrsList: a,
                    attrsMap: function(e) {
                        for (var t = {}, n = 0, i = e.length; n < i; n++) !t[e[n].name] || Xn || Jn || Io("duplicate attribute: " + e[n].name), 
                        t[e[n].name] = e[n].value;
                        return t;
                    }(a),
                    parent: o,
                    children: []
                };
                h && (d.ns = h), function(e) {
                    return "style" === e.tag || "script" === e.tag && (!e.attrsMap.type || "text/javascript" === e.attrsMap.type);
                }(d) && !ri() && (d.forbidden = !0, Io("Templates should only be responsible for mapping the state to the UI. Avoid placing tags with side-effects in your templates, such as <" + e + ">, as they will not be parsed."));
                for (var p = 0; p < $o.length; p++) $o[p](d, t);
                if (l || (!function(e) {
                    null != ot(e, "v-pre") && (e.pre = !0);
                }(d), d.pre && (l = !0)), Ho(d.tag) && (u = !0), l) !function(e) {
                    var t = e.attrsList.length;
                    if (t) for (var n = e.attrs = new Array(t), i = 0; i < t; i++) n[i] = {
                        name: e.attrsList[i].name,
                        value: JSON.stringify(e.attrsList[i].value)
                    }; else e.pre || (e.plain = !0);
                }(d); else {
                    !function(e) {
                        var t;
                        if (t = ot(e, "v-for")) {
                            var n = t.match(Zo);
                            if (!n) return void Io("Invalid v-for expression: " + t);
                            e.for = n[2].trim();
                            var i = n[1].trim(), r = i.match(Ko);
                            r ? (e.alias = r[1].trim(), e.iterator1 = r[2].trim(), r[3] && (e.iterator2 = r[3].trim())) : e.alias = i;
                        }
                    }(d), function(e) {
                        var t = ot(e, "v-if");
                        if (t) e.if = t, Kt(e, {
                            exp: t,
                            block: e
                        }); else {
                            null != ot(e, "v-else") && (e.else = !0);
                            var n = ot(e, "v-else-if");
                            n && (e.elseif = n);
                        }
                    }(d), function(e) {
                        null != ot(e, "v-once") && (e.once = !0);
                    }(d), function(e) {
                        var t = rt(e, "key");
                        t && ("template" === e.tag && Io("<template> cannot be keyed. Place the key on real elements instead."), 
                        e.key = t);
                    }(d), d.plain = !d.key && !a.length, function(e) {
                        var t = rt(e, "ref");
                        t && (e.ref = t, e.refInFor = function(e) {
                            var t = e;
                            for (;t; ) {
                                if (void 0 !== t.for) return !0;
                                t = t.parent;
                            }
                            return !1;
                        }(e));
                    }(d), function(e) {
                        if ("slot" === e.tag) e.slotName = rt(e, "name"), e.key && Io("`key` does not work on <slot> because slots are abstract outlets and can possibly expand into multiple elements. Use the key on a wrapping element instead."); else {
                            var t = rt(e, "slot");
                            t && (e.slotTarget = '""' === t ? '"default"' : t), "template" === e.tag && (e.slotScope = ot(e, "scope"));
                        }
                    }(d), function(e) {
                        var t;
                        (t = rt(e, "is")) && (e.component = t);
                        null != ot(e, "inline-template") && (e.inlineTemplate = !0);
                    }(d);
                    for (var m = 0; m < Do.length; m++) Do[m](d, t);
                    !function(e) {
                        var t, n, i, r, o, s, a, l = e.attrsList;
                        for (t = 0, n = l.length; t < n; t++) if (i = r = l[t].name, o = l[t].value, Go.test(i)) if (e.hasBindings = !0, 
                        (s = function(e) {
                            var t = e.match(ts);
                            if (t) {
                                var n = {};
                                return t.forEach(function(e) {
                                    n[e.slice(1)] = !0;
                                }), n;
                            }
                        }(i)) && (i = i.replace(ts, "")), es.test(i)) i = i.replace(es, ""), o = Ze(o), a = !1, s && (s.prop && (a = !0, 
                        "innerHtml" === (i = Sn(i)) && (i = "innerHTML")), s.camel && (i = Sn(i)), s.sync && it(e, "update:" + Sn(i), at(o, "$event"))), 
                        a || !e.component && Lo(e.tag, e.attrsMap.type, i) ? et(e, i, o) : tt(e, i, o); else if (Jo.test(i)) i = i.replace(Jo, ""), 
                        it(e, i, o, s, !1, Io); else {
                            var u = (i = i.replace(Go, "")).match(Qo), c = u && u[1];
                            c && (i = i.slice(0, -(c.length + 1))), nt(e, i, r, o, c, s), "model" === i && function(e, t) {
                                var n = e;
                                for (;n; ) n.for && n.alias === t && Io("<" + e.tag + ' v-model="' + t + '">: You are binding v-model directly to a v-for iteration alias. This will not be able to modify the v-for source array because writing to the alias is like modifying a function local variable. Consider using an array of objects and use v-model on an object property instead.'), 
                                n = n.parent;
                            }(e, o);
                        } else {
                            var f = Yt(o, jo);
                            f && Io(i + '="' + o + '": Interpolation inside attributes has been removed. Use v-bind or the colon shorthand instead. For example, instead of <div id="{{ val }}">, use <div :id="val">.'), 
                            tt(e, i, JSON.stringify(o));
                        }
                    }(d);
                }
                if (r ? s.length || (r.if && (d.elseif || d.else) ? (f(d), Kt(r, {
                    exp: d.elseif,
                    block: d
                })) : n("Component template should contain exactly one root element. If you are using v-if on multiple elements, use v-else-if to chain them instead.")) : f(r = d), 
                o && !d.forbidden) if (d.elseif || d.else) !function(e, t) {
                    var n = function(e) {
                        var t = e.length;
                        for (;t--; ) {
                            if (1 === e[t].type) return e[t];
                            " " !== e[t].text && Io('text "' + e[t].text.trim() + '" between v-if and v-else(-if) will be ignored.'), 
                            e.pop();
                        }
                    }(t.children);
                    n && n.if ? Kt(n, {
                        exp: e.elseif,
                        block: e
                    }) : Io("v-" + (e.elseif ? 'else-if="' + e.elseif + '"' : "else") + " used on element <" + e.tag + "> without corresponding v-if.");
                }(d, o); else if (d.slotScope) {
                    o.plain = !1;
                    var v = d.slotTarget || '"default"';
                    (o.scopedSlots || (o.scopedSlots = {}))[v] = d;
                } else o.children.push(d), d.parent = o;
                c ? i(d) : (o = d, s.push(d));
                for (var g = 0; g < Mo.length; g++) Mo[g](d, t);
            },
            end: function() {
                var e = s[s.length - 1], t = e.children[e.children.length - 1];
                t && 3 === t.type && " " === t.text && !u && e.children.pop(), s.length -= 1, o = s[s.length - 1], i(e);
            },
            chars: function(t) {
                if (o) {
                    if (!Xn || "textarea" !== o.tag || o.attrsMap.placeholder !== t) {
                        var i = o.children;
                        if (t = u || t.trim() ? function(e) {
                            return "script" === e.tag || "style" === e.tag;
                        }(o) ? t : ns(t) : a && i.length ? " " : "") {
                            var r;
                            !l && " " !== t && (r = Yt(t, jo)) ? i.push({
                                type: 2,
                                expression: r,
                                text: t
                            }) : " " === t && i.length && " " === i[i.length - 1].text || i.push({
                                type: 3,
                                text: t
                            });
                        }
                    }
                } else t === e ? n("Component template requires a root element, rather than just text.") : (t = t.trim()) && n('text "' + t + '" outside root element will be ignored.');
            },
            comment: function(e) {
                o.children.push({
                    type: 3,
                    text: e,
                    isComment: !0
                });
            }
        }), r;
    }
    function Kt(e, t) {
        e.ifConditions || (e.ifConditions = []), e.ifConditions.push(t);
    }
    function Qt(e) {
        if (e.static = function(e) {
            if (2 === e.type) return !1;
            if (3 === e.type) return !0;
            return !(!e.pre && (e.hasBindings || e.if || e.for || xn(e.tag) || !Wo(e.tag) || function(e) {
                for (;e.parent; ) {
                    if ("template" !== (e = e.parent).tag) return !1;
                    if (e.for) return !0;
                }
                return !1;
            }(e) || !Object.keys(e).every(Ro)));
        }(e), 1 === e.type) {
            if (!Wo(e.tag) && "slot" !== e.tag && null == e.attrsMap["inline-template"]) return;
            for (var t = 0, n = e.children.length; t < n; t++) {
                var i = e.children[t];
                Qt(i), i.static || (e.static = !1);
            }
            if (e.ifConditions) for (var r = 1, o = e.ifConditions.length; r < o; r++) {
                var s = e.ifConditions[r].block;
                Qt(s), s.static || (e.static = !1);
            }
        }
    }
    function en(e, t) {
        if (1 === e.type) {
            if ((e.static || e.once) && (e.staticInFor = t), e.static && e.children.length && (1 !== e.children.length || 3 !== e.children[0].type)) return void (e.staticRoot = !0);
            if (e.staticRoot = !1, e.children) for (var n = 0, i = e.children.length; n < i; n++) en(e.children[n], t || !!e.for);
            if (e.ifConditions) for (var r = 1, o = e.ifConditions.length; r < o; r++) en(e.ifConditions[r].block, t);
        }
    }
    function tn(e, t, n) {
        var i = t ? "nativeOn:{" : "on:{";
        for (var r in e) {
            var o = e[r];
            "click" === r && o && o.modifiers && o.modifiers.right && n('Use "contextmenu" instead of "click.right" since right clicks do not actually fire "click" events.'), 
            i += '"' + r + '":' + nn(r, o) + ",";
        }
        return i.slice(0, -1) + "}";
    }
    function nn(e, t) {
        if (!t) return "function(){}";
        if (Array.isArray(t)) return "[" + t.map(function(t) {
            return nn(e, t);
        }).join(",") + "]";
        var n = as.test(t.value), i = ss.test(t.value);
        if (t.modifiers) {
            var r = "", o = "", s = [];
            for (var a in t.modifiers) cs[a] ? (o += cs[a], ls[a] && s.push(a)) : s.push(a);
            s.length && (r += function(e) {
                return "if(!('button' in $event)&&" + e.map(rn).join("&&") + ")return null;";
            }(s)), o && (r += o);
            return "function($event){" + r + (n ? t.value + "($event)" : i ? "(" + t.value + ")($event)" : t.value) + "}";
        }
        return n || i ? t.value : "function($event){" + t.value + "}";
    }
    function rn(e) {
        var t = parseInt(e, 10);
        if (t) return "$event.keyCode!==" + t;
        var n = ls[e];
        return "_k($event.keyCode," + JSON.stringify(e) + (n ? "," + JSON.stringify(n) : "") + ")";
    }
    function on(e, t) {
        var n = new hs(t);
        return {
            render: "with(this){return " + (e ? sn(e, n) : '_c("div")') + "}",
            staticRenderFns: n.staticRenderFns
        };
    }
    function sn(e, t) {
        if (e.staticRoot && !e.staticProcessed) return an(e, t);
        if (e.once && !e.onceProcessed) return ln(e, t);
        if (e.for && !e.forProcessed) return function(e, t, n, i) {
            var r = e.for, o = e.alias, s = e.iterator1 ? "," + e.iterator1 : "", a = e.iterator2 ? "," + e.iterator2 : "";
            t.maybeComponent(e) && "slot" !== e.tag && "template" !== e.tag && !e.key && t.warn("<" + e.tag + ' v-for="' + o + " in " + r + '">: component lists rendered with v-for should have explicit keys. See https://vuejs.org/guide/list.html#key for more info.', !0);
            return e.forProcessed = !0, (i || "_l") + "((" + r + "),function(" + o + s + a + "){return " + (n || sn)(e, t) + "})";
        }(e, t);
        if (e.if && !e.ifProcessed) return un(e, t);
        if ("template" !== e.tag || e.slotTarget) {
            if ("slot" === e.tag) return function(e, t) {
                var n = e.slotName || '"default"', i = dn(e, t), r = "_t(" + n + (i ? "," + i : ""), o = e.attrs && "{" + e.attrs.map(function(e) {
                    return Sn(e.name) + ":" + e.value;
                }).join(",") + "}", s = e.attrsMap["v-bind"];
                !o && !s || i || (r += ",null");
                o && (r += "," + o);
                s && (r += (o ? "" : ",null") + "," + s);
                return r + ")";
            }(e, t);
            var n;
            if (e.component) n = function(e, t, n) {
                var i = t.inlineTemplate ? null : dn(t, n, !0);
                return "_c(" + e + "," + fn(t, n) + (i ? "," + i : "") + ")";
            }(e.component, e, t); else {
                var i = e.plain ? void 0 : fn(e, t), r = e.inlineTemplate ? null : dn(e, t, !0);
                n = "_c('" + e.tag + "'" + (i ? "," + i : "") + (r ? "," + r : "") + ")";
            }
            for (var o = 0; o < t.transforms.length; o++) n = t.transforms[o](e, n);
            return n;
        }
        return dn(e, t) || "void 0";
    }
    function an(e, t) {
        return e.staticProcessed = !0, t.staticRenderFns.push("with(this){return " + sn(e, t) + "}"), "_m(" + (t.staticRenderFns.length - 1) + (e.staticInFor ? ",true" : "") + ")";
    }
    function ln(e, t) {
        if (e.onceProcessed = !0, e.if && !e.ifProcessed) return un(e, t);
        if (e.staticInFor) {
            for (var n = "", i = e.parent; i; ) {
                if (i.for) {
                    n = i.key;
                    break;
                }
                i = i.parent;
            }
            return n ? "_o(" + sn(e, t) + "," + t.onceId++ + (n ? "," + n : "") + ")" : (t.warn("v-once can only be used inside v-for that is keyed. "), 
            sn(e, t));
        }
        return an(e, t);
    }
    function un(e, t, n, i) {
        return e.ifProcessed = !0, cn(e.ifConditions.slice(), t, n, i);
    }
    function cn(e, t, n, i) {
        function r(e) {
            return n ? n(e, t) : e.once ? ln(e, t) : sn(e, t);
        }
        if (!e.length) return i || "_e()";
        var o = e.shift();
        return o.exp ? "(" + o.exp + ")?" + r(o.block) + ":" + cn(e, t, n, i) : "" + r(o.block);
    }
    function fn(e, t) {
        var n = "{", i = function(e, t) {
            var n = e.directives;
            if (!n) return;
            var i, r, o, s, a = "directives:[", l = !1;
            for (i = 0, r = n.length; i < r; i++) {
                o = n[i], s = !0;
                var u = t.directives[o.name];
                u && (s = !!u(e, o, t.warn)), s && (l = !0, a += '{name:"' + o.name + '",rawName:"' + o.rawName + '"' + (o.value ? ",value:(" + o.value + "),expression:" + JSON.stringify(o.value) : "") + (o.arg ? ',arg:"' + o.arg + '"' : "") + (o.modifiers ? ",modifiers:" + JSON.stringify(o.modifiers) : "") + "},");
            }
            if (l) return a.slice(0, -1) + "]";
        }(e, t);
        i && (n += i + ","), e.key && (n += "key:" + e.key + ","), e.ref && (n += "ref:" + e.ref + ","), e.refInFor && (n += "refInFor:true,"), 
        e.pre && (n += "pre:true,"), e.component && (n += 'tag:"' + e.tag + '",');
        for (var r = 0; r < t.dataGenFns.length; r++) n += t.dataGenFns[r](e);
        if (e.attrs && (n += "attrs:{" + mn(e.attrs) + "},"), e.props && (n += "domProps:{" + mn(e.props) + "},"), 
        e.events && (n += tn(e.events, !1, t.warn) + ","), e.nativeEvents && (n += tn(e.nativeEvents, !0, t.warn) + ","), 
        e.slotTarget && (n += "slot:" + e.slotTarget + ","), e.scopedSlots && (n += function(e, t) {
            return "scopedSlots:_u([" + Object.keys(e).map(function(n) {
                return hn(n, e[n], t);
            }).join(",") + "])";
        }(e.scopedSlots, t) + ","), e.model && (n += "model:{value:" + e.model.value + ",callback:" + e.model.callback + ",expression:" + e.model.expression + "},"), 
        e.inlineTemplate) {
            var o = function(e, t) {
                var n = e.children[0];
                (e.children.length > 1 || 1 !== n.type) && t.warn("Inline-template components must have exactly one child element.");
                if (1 === n.type) {
                    var i = on(n, t.options);
                    return "inlineTemplate:{render:function(){" + i.render + "},staticRenderFns:[" + i.staticRenderFns.map(function(e) {
                        return "function(){" + e + "}";
                    }).join(",") + "]}";
                }
            }(e, t);
            o && (n += o + ",");
        }
        return n = n.replace(/,$/, "") + "}", e.wrapData && (n = e.wrapData(n)), e.wrapListeners && (n = e.wrapListeners(n)), 
        n;
    }
    function hn(e, t, n) {
        return t.for && !t.forProcessed ? function(e, t, n) {
            var i = t.for, r = t.alias, o = t.iterator1 ? "," + t.iterator1 : "", s = t.iterator2 ? "," + t.iterator2 : "";
            return t.forProcessed = !0, "_l((" + i + "),function(" + r + o + s + "){return " + hn(e, t, n) + "})";
        }(e, t, n) : "{key:" + e + ",fn:function(" + String(t.attrsMap.scope) + "){return " + ("template" === t.tag ? dn(t, n) || "void 0" : sn(t, n)) + "}}";
    }
    function dn(e, t, n, i, r) {
        var o = e.children;
        if (o.length) {
            var s = o[0];
            if (1 === o.length && s.for && "template" !== s.tag && "slot" !== s.tag) return (i || sn)(s, t);
            var a = n ? function(e, t) {
                for (var n = 0, i = 0; i < e.length; i++) {
                    var r = e[i];
                    if (1 === r.type) {
                        if (pn(r) || r.ifConditions && r.ifConditions.some(function(e) {
                            return pn(e.block);
                        })) {
                            n = 2;
                            break;
                        }
                        (t(r) || r.ifConditions && r.ifConditions.some(function(e) {
                            return t(e.block);
                        })) && (n = 1);
                    }
                }
                return n;
            }(o, t.maybeComponent) : 0, l = r || function(e, t) {
                if (1 === e.type) return sn(e, t);
                return 3 === e.type && e.isComment ? function(e) {
                    return "_e(" + JSON.stringify(e.text) + ")";
                }(e) : function(e) {
                    return "_v(" + (2 === e.type ? e.expression : vn(JSON.stringify(e.text))) + ")";
                }(e);
            };
            return "[" + o.map(function(e) {
                return l(e, t);
            }).join(",") + "]" + (a ? "," + a : "");
        }
    }
    function pn(e) {
        return void 0 !== e.for || "template" === e.tag || "slot" === e.tag;
    }
    function mn(e) {
        for (var t = "", n = 0; n < e.length; n++) {
            var i = e[n];
            t += '"' + i.name + '":' + vn(i.value) + ",";
        }
        return t.slice(0, -1);
    }
    function vn(e) {
        return e.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    function gn(e, t) {
        if (1 === e.type) {
            for (var n in e.attrsMap) if (Go.test(n)) {
                var i = e.attrsMap[n];
                i && ("v-for" === n ? function(e, t, n) {
                    bn(e.for || "", t, n), yn(e.alias, "v-for alias", t, n), yn(e.iterator1, "v-for iterator", t, n), yn(e.iterator2, "v-for iterator", t, n);
                }(e, 'v-for="' + i + '"', t) : Jo.test(n) ? function(e, t, n) {
                    var i = e.replace(vs, ""), r = i.match(ps);
                    r && "$" !== i.charAt(r.index - 1) && n.push('avoid using JavaScript unary operator as property name: "' + r[0] + '" in expression ' + t.trim());
                    bn(e, t, n);
                }(i, n + '="' + i + '"', t) : bn(i, n + '="' + i + '"', t));
            }
            if (e.children) for (var r = 0; r < e.children.length; r++) gn(e.children[r], t);
        } else 2 === e.type && bn(e.expression, e.text, t);
    }
    function yn(e, t, n, i) {
        "string" != typeof e || ms.test(e) || i.push("invalid " + t + ' "' + e + '" in expression: ' + n.trim());
    }
    function bn(e, t, n) {
        try {
            new Function("return " + e);
        } catch (r) {
            var i = e.replace(vs, "").match(ds);
            i ? n.push('avoid using JavaScript keyword as property name: "' + i[0] + '" in expression ' + t.trim()) : n.push("invalid expression: " + t.trim());
        }
    }
    function _n(e, t) {
        try {
            return new Function(e);
        } catch (n) {
            return t.push({
                err: n,
                code: e
            }), g;
        }
    }
    var wn = Object.prototype.toString, xn = u("slot,component", !0), Cn = u("key,ref,slot,is"), kn = Object.prototype.hasOwnProperty, Tn = /-(\w)/g, Sn = h(function(e) {
        return e.replace(Tn, function(e, t) {
            return t ? t.toUpperCase() : "";
        });
    }), En = h(function(e) {
        return e.charAt(0).toUpperCase() + e.slice(1);
    }), An = /([^-])([A-Z])/g, On = h(function(e) {
        return e.replace(An, "$1-$2").replace(An, "$1-$2").toLowerCase();
    }), Nn = function(e, t, n) {
        return !1;
    }, Pn = function(e) {
        return e;
    }, In = "data-server-rendered", jn = [ "component", "directive", "filter" ], Dn = [ "beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated" ], $n = {
        optionMergeStrategies: Object.create(null),
        silent: !1,
        productionTip: !0,
        devtools: !0,
        performance: !1,
        errorHandler: null,
        warnHandler: null,
        ignoredElements: [],
        keyCodes: Object.create(null),
        isReservedTag: Nn,
        isReservedAttr: Nn,
        isUnknownElement: Nn,
        getTagNamespace: g,
        parsePlatformTagName: Pn,
        mustUseProp: Nn,
        _lifecycleHooks: Dn
    }, Mn = Object.freeze({}), Hn = /[^\w.$]/, Ln = g, Fn = g, Rn = null, Wn = "undefined" != typeof console, qn = /(?:^|[-_])(\w)/g;
    Ln = function(e, t) {
        var n = t ? Bn(t) : "";
        $n.warnHandler ? $n.warnHandler.call(null, e, t, n) : Wn && !$n.silent && console.error("[Vue warn]: " + e + n);
    }, Fn = function(e, t) {
        Wn && !$n.silent && console.warn("[Vue tip]: " + e + (t ? Bn(t) : ""));
    }, Rn = function(e, t) {
        if (e.$root === e) return "<Root>";
        var n = "string" == typeof e ? e : "function" == typeof e && e.options ? e.options.name : e._isVue ? e.$options.name || e.$options._componentTag : e.name, i = e._isVue && e.$options.__file;
        if (!n && i) {
            var r = i.match(/([^/\\]+)\.vue$/);
            n = r && r[1];
        }
        return (n ? "<" + function(e) {
            return e.replace(qn, function(e) {
                return e.toUpperCase();
            }).replace(/[-_]/g, "");
        }(n) + ">" : "<Anonymous>") + (i && !1 !== t ? " at " + i : "");
    };
    var Bn = function(e) {
        if (e._isVue && e.$parent) {
            for (var t = [], n = 0; e; ) {
                if (t.length > 0) {
                    var i = t[t.length - 1];
                    if (i.constructor === e.constructor) {
                        n++, e = e.$parent;
                        continue;
                    }
                    n > 0 && (t[t.length - 1] = [ i, n ], n = 0);
                }
                t.push(e), e = e.$parent;
            }
            return "\n\nfound in\n\n" + t.map(function(e, t) {
                return "" + (0 === t ? "---\x3e " : function(e, t) {
                    for (var n = ""; t; ) t % 2 == 1 && (n += e), t > 1 && (e += e), t >>= 1;
                    return n;
                }(" ", 5 + 2 * t)) + (Array.isArray(e) ? Rn(e[0]) + "... (" + e[1] + " recursive calls)" : Rn(e));
            }).join("\n");
        }
        return "\n\n(found in " + Rn(e) + ")";
    }, zn = "__proto__" in {}, Un = "undefined" != typeof window, Vn = Un && window.navigator.userAgent.toLowerCase(), Xn = Vn && /msie|trident/.test(Vn), Yn = Vn && Vn.indexOf("msie 9.0") > 0, Jn = Vn && Vn.indexOf("edge/") > 0, Gn = Vn && Vn.indexOf("android") > 0, Zn = Vn && /iphone|ipad|ipod|ios/.test(Vn), Kn = Vn && /chrome\/\d+/.test(Vn) && !Jn, Qn = {}.watch, ei = !1;
    if (Un) try {
        var ti = {};
        Object.defineProperty(ti, "passive", {
            get: function() {
                ei = !0;
            }
        }), window.addEventListener("test-passive", null, ti);
    } catch (e) {}
    var ni, ii, ri = function() {
        return void 0 === ni && (ni = !Un && "undefined" != typeof global && "server" === global.process.env.VUE_ENV), 
        ni;
    }, oi = Un && window.__VUE_DEVTOOLS_GLOBAL_HOOK__, si = "undefined" != typeof Symbol && k(Symbol) && "undefined" != typeof Reflect && k(Reflect.ownKeys), ai = function() {
        function e() {
            i = !1;
            var e = n.slice(0);
            n.length = 0;
            for (var t = 0; t < e.length; t++) e[t]();
        }
        var t, n = [], i = !1;
        if ("undefined" != typeof Promise && k(Promise)) {
            var r = Promise.resolve(), o = function(e) {
                console.error(e);
            };
            t = function() {
                r.then(e).catch(o), Zn && setTimeout(g);
            };
        } else if ("undefined" == typeof MutationObserver || !k(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) t = function() {
            setTimeout(e, 0);
        }; else {
            var s = 1, a = new MutationObserver(e), l = document.createTextNode(String(s));
            a.observe(l, {
                characterData: !0
            }), t = function() {
                s = (s + 1) % 2, l.data = String(s);
            };
        }
        return function(e, r) {
            var o;
            if (n.push(function() {
                if (e) try {
                    e.call(r);
                } catch (e) {
                    C(e, r, "nextTick");
                } else o && o(r);
            }), i || (i = !0, t()), !e && "undefined" != typeof Promise) return new Promise(function(e, t) {
                o = e;
            });
        };
    }();
    ii = "undefined" != typeof Set && k(Set) ? Set : function() {
        function e() {
            this.set = Object.create(null);
        }
        return e.prototype.has = function(e) {
            return !0 === this.set[e];
        }, e.prototype.add = function(e) {
            this.set[e] = !0;
        }, e.prototype.clear = function() {
            this.set = Object.create(null);
        }, e;
    }();
    var li = 0, ui = function() {
        this.id = li++, this.subs = [];
    };
    ui.prototype.addSub = function(e) {
        this.subs.push(e);
    }, ui.prototype.removeSub = function(e) {
        c(this.subs, e);
    }, ui.prototype.depend = function() {
        ui.target && ui.target.addDep(this);
    }, ui.prototype.notify = function() {
        for (var e = this.subs.slice(), t = 0, n = e.length; t < n; t++) e[t].update();
    }, ui.target = null;
    var ci = [], fi = Array.prototype, hi = Object.create(fi);
    [ "push", "pop", "shift", "unshift", "splice", "sort", "reverse" ].forEach(function(e) {
        var t = fi[e];
        x(hi, e, function() {
            for (var n = [], i = arguments.length; i--; ) n[i] = arguments[i];
            var r, o = t.apply(this, n), s = this.__ob__;
            switch (e) {
              case "push":
              case "unshift":
                r = n;
                break;

              case "splice":
                r = n.slice(2);
            }
            return r && s.observeArray(r), s.dep.notify(), o;
        });
    });
    var di = Object.getOwnPropertyNames(hi), pi = {
        shouldConvert: !0
    }, mi = function(e) {
        if (this.value = e, this.dep = new ui(), this.vmCount = 0, x(e, "__ob__", this), Array.isArray(e)) {
            (zn ? function(e, t, n) {
                e.__proto__ = t;
            } : function(e, t, n) {
                for (var i = 0, r = n.length; i < r; i++) {
                    var o = n[i];
                    x(e, o, t[o]);
                }
            })(e, hi, di), this.observeArray(e);
        } else this.walk(e);
    };
    mi.prototype.walk = function(e) {
        for (var t = Object.keys(e), n = 0; n < t.length; n++) S(e, t[n], e[t[n]]);
    }, mi.prototype.observeArray = function(e) {
        for (var t = 0, n = e.length; t < n; t++) T(e[t]);
    };
    var vi = $n.optionMergeStrategies;
    vi.el = vi.propsData = function(e, t, n, i) {
        return n || Ln('option "' + i + '" can only be used during instance creation with the `new` keyword.'), 
        bi(e, t);
    }, vi.data = function(e, t, n) {
        return n ? P(e, t, n) : t && "function" != typeof t ? (Ln('The "data" option should be a function that returns a per-instance value in component definitions.', n), 
        e) : P.call(this, e, t);
    }, Dn.forEach(function(e) {
        vi[e] = I;
    }), jn.forEach(function(e) {
        vi[e + "s"] = j;
    }), vi.watch = function(e, t) {
        if (e === Qn && (e = void 0), t === Qn && (t = void 0), !t) return Object.create(e || null);
        if (!e) return t;
        var n = {};
        m(n, e);
        for (var i in t) {
            var r = n[i], o = t[i];
            r && !Array.isArray(r) && (r = [ r ]), n[i] = r ? r.concat(o) : Array.isArray(o) ? o : [ o ];
        }
        return n;
    }, vi.props = vi.methods = vi.inject = vi.computed = function(e, t) {
        if (!e) return t;
        var n = Object.create(null);
        return m(n, e), t && m(n, t), n;
    }, vi.provide = P;
    var gi, yi, bi = function(e, t) {
        return void 0 === t ? e : t;
    }, _i = /^(String|Number|Boolean|Function|Symbol)$/, wi = Un && window.performance;
    wi && wi.mark && wi.measure && wi.clearMarks && wi.clearMeasures && (gi = function(e) {
        return wi.mark(e);
    }, yi = function(e, t, n) {
        wi.measure(e, t, n), wi.clearMarks(t), wi.clearMarks(n), wi.clearMeasures(e);
    });
    var xi, Ci = u("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,require"), ki = function(e, t) {
        Ln('Property or method "' + t + '" is not defined on the instance but referenced during render. Make sure to declare reactive data properties in the data option.', e);
    }, Ti = "undefined" != typeof Proxy && Proxy.toString().match(/native code/);
    if (Ti) {
        var Si = u("stop,prevent,self,ctrl,shift,alt,meta");
        $n.keyCodes = new Proxy($n.keyCodes, {
            set: function(e, t, n) {
                return Si(t) ? (Ln("Avoid overwriting built-in modifier in config.keyCodes: ." + t), !1) : (e[t] = n, 
                !0);
            }
        });
    }
    var Ei = {
        has: function(e, t) {
            var n = t in e, i = Ci(t) || "_" === t.charAt(0);
            return n || i || ki(e, t), n || !i;
        }
    }, Ai = {
        get: function(e, t) {
            return "string" != typeof t || t in e || ki(e, t), e[t];
        }
    };
    xi = function(e) {
        if (Ti) {
            var t = e.$options, n = t.render && t.render._withStripped ? Ai : Ei;
            e._renderProxy = new Proxy(e, n);
        } else e._renderProxy = e;
    };
    var Oi = function(e, t, n, i, r, o, s, a) {
        this.tag = e, this.data = t, this.children = n, this.text = i, this.elm = r, this.ns = void 0, this.context = o, 
        this.functionalContext = void 0, this.key = t && t.key, this.componentOptions = s, this.componentInstance = void 0, 
        this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, 
        this.isCloned = !1, this.isOnce = !1, this.asyncFactory = a, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1;
    }, Ni = {
        child: {}
    };
    Ni.child.get = function() {
        return this.componentInstance;
    }, Object.defineProperties(Oi.prototype, Ni);
    var Pi, Ii = function(e) {
        void 0 === e && (e = "");
        var t = new Oi();
        return t.text = e, t.isComment = !0, t;
    }, ji = h(function(e) {
        var t = "&" === e.charAt(0), n = "~" === (e = t ? e.slice(1) : e).charAt(0), i = "!" === (e = n ? e.slice(1) : e).charAt(0);
        return e = i ? e.slice(1) : e, {
            name: e,
            once: n,
            capture: i,
            passive: t
        };
    }), Di = null, $i = !1, Mi = 100, Hi = [], Li = [], Fi = {}, Ri = {}, Wi = !1, qi = !1, Bi = 0, zi = 0, Ui = function(e, t, n, i) {
        this.vm = e, e._watchers.push(this), i ? (this.deep = !!i.deep, this.user = !!i.user, this.lazy = !!i.lazy, 
        this.sync = !!i.sync) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++zi, 
        this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new ii(), 
        this.newDepIds = new ii(), this.expression = t.toString(), "function" == typeof t ? this.getter = t : (this.getter = function(e) {
            if (!Hn.test(e)) {
                var t = e.split(".");
                return function(e) {
                    for (var n = 0; n < t.length; n++) {
                        if (!e) return;
                        e = e[t[n]];
                    }
                    return e;
                };
            }
        }(t), this.getter || (this.getter = function() {}, Ln('Failed watching path: "' + t + '" Watcher only accepts simple dot-delimited paths. For full control, use a function instead.', e))), 
        this.value = this.lazy ? void 0 : this.get();
    };
    Ui.prototype.get = function() {
        !function(e) {
            ui.target && ci.push(ui.target), ui.target = e;
        }(this);
        var e, t = this.vm;
        try {
            e = this.getter.call(t, t);
        } catch (e) {
            if (!this.user) throw e;
            C(e, t, 'getter for watcher "' + this.expression + '"');
        } finally {
            this.deep && function(e) {
                Vi.clear(), ae(e, Vi);
            }(e), ui.target = ci.pop(), this.cleanupDeps();
        }
        return e;
    }, Ui.prototype.addDep = function(e) {
        var t = e.id;
        this.newDepIds.has(t) || (this.newDepIds.add(t), this.newDeps.push(e), this.depIds.has(t) || e.addSub(this));
    }, Ui.prototype.cleanupDeps = function() {
        for (var e = this.deps.length; e--; ) {
            var t = this.deps[e];
            this.newDepIds.has(t.id) || t.removeSub(this);
        }
        var n = this.depIds;
        this.depIds = this.newDepIds, this.newDepIds = n, this.newDepIds.clear(), n = this.deps, this.deps = this.newDeps, 
        this.newDeps = n, this.newDeps.length = 0;
    }, Ui.prototype.update = function() {
        this.lazy ? this.dirty = !0 : this.sync ? this.run() : function(e) {
            var t = e.id;
            if (null == Fi[t]) {
                if (Fi[t] = !0, qi) {
                    for (var n = Hi.length - 1; n > Bi && Hi[n].id > e.id; ) n--;
                    Hi.splice(n + 1, 0, e);
                } else Hi.push(e);
                Wi || (Wi = !0, ai(se));
            }
        }(this);
    }, Ui.prototype.run = function() {
        if (this.active) {
            var e = this.get();
            if (e !== this.value || r(e) || this.deep) {
                var t = this.value;
                if (this.value = e, this.user) try {
                    this.cb.call(this.vm, e, t);
                } catch (e) {
                    C(e, this.vm, 'callback for watcher "' + this.expression + '"');
                } else this.cb.call(this.vm, e, t);
            }
        }
    }, Ui.prototype.evaluate = function() {
        this.value = this.get(), this.dirty = !1;
    }, Ui.prototype.depend = function() {
        for (var e = this.deps.length; e--; ) this.deps[e].depend();
    }, Ui.prototype.teardown = function() {
        if (this.active) {
            this.vm._isBeingDestroyed || c(this.vm._watchers, this);
            for (var e = this.deps.length; e--; ) this.deps[e].removeSub(this);
            this.active = !1;
        }
    };
    var Vi = new ii(), Xi = {
        enumerable: !0,
        configurable: !0,
        get: g,
        set: g
    }, Yi = {
        lazy: !0
    }, Ji = {
        init: function(e, n, i, r) {
            if (!e.componentInstance || e.componentInstance._isDestroyed) {
                (e.componentInstance = function(e, n, i, r) {
                    var o = e.componentOptions, s = {
                        _isComponent: !0,
                        parent: n,
                        propsData: o.propsData,
                        _componentTag: o.tag,
                        _parentVnode: e,
                        _parentListeners: o.listeners,
                        _renderChildren: o.children,
                        _parentElm: i || null,
                        _refElm: r || null
                    }, a = e.data.inlineTemplate;
                    return t(a) && (s.render = a.render, s.staticRenderFns = a.staticRenderFns), new o.Ctor(s);
                }(e, Di, i, r)).$mount(n ? e.elm : void 0, n);
            } else if (e.data.keepAlive) {
                var o = e;
                Ji.prepatch(o, o);
            }
        },
        prepatch: function(e, t) {
            var n = t.componentOptions;
            !function(e, t, n, i, r) {
                $i = !0;
                var o = !!(r || e.$options._renderChildren || i.data.scopedSlots || e.$scopedSlots !== Mn);
                if (e.$options._parentVnode = i, e.$vnode = i, e._vnode && (e._vnode.parent = i), e.$options._renderChildren = r, 
                e.$attrs = i.data && i.data.attrs, e.$listeners = n, t && e.$options.props) {
                    pi.shouldConvert = !1;
                    for (var s = e._props, a = e.$options._propKeys || [], l = 0; l < a.length; l++) {
                        var u = a[l];
                        s[u] = M(u, e.$options.props, t, e);
                    }
                    pi.shouldConvert = !0, e.$options.propsData = t;
                }
                if (n) {
                    var c = e.$options._parentListeners;
                    e.$options._parentListeners = n, K(e, n, c);
                }
                o && (e.$slots = Q(r, i.context), e.$forceUpdate()), $i = !1;
            }(t.componentInstance = e.componentInstance, n.propsData, n.listeners, t, n.children);
        },
        insert: function(e) {
            var t = e.context, n = e.componentInstance;
            n._isMounted || (n._isMounted = !0, oe(n, "mounted")), e.data.keepAlive && (t._isMounted ? function(e) {
                e._inactive = !1, Li.push(e);
            }(n) : ie(n, !0));
        },
        destroy: function(e) {
            var t = e.componentInstance;
            t._isDestroyed || (e.data.keepAlive ? re(t, !0) : t.$destroy());
        }
    }, Gi = Object.keys(Ji), Zi = 1, Ki = 2, Qi = 0;
    !function(e) {
        e.prototype._init = function(e) {
            this._uid = Qi++;
            var t, n;
            $n.performance && gi && (t = "vue-perf-init:" + this._uid, n = "vue-perf-end:" + this._uid, gi(t)), 
            this._isVue = !0, e && e._isComponent ? function(e, t) {
                var n = e.$options = Object.create(e.constructor.options);
                n.parent = t.parent, n.propsData = t.propsData, n._parentVnode = t._parentVnode, n._parentListeners = t._parentListeners, 
                n._renderChildren = t._renderChildren, n._componentTag = t._componentTag, n._parentElm = t._parentElm, 
                n._refElm = t._refElm, t.render && (n.render = t.render, n.staticRenderFns = t.staticRenderFns);
            }(this, e) : this.$options = D(Oe(this.constructor), e || {}, this), xi(this), this._self = this, function(e) {
                var t = e.$options, n = t.parent;
                if (n && !t.abstract) {
                    for (;n.$options.abstract && n.$parent; ) n = n.$parent;
                    n.$children.push(e);
                }
                e.$parent = n, e.$root = n ? n.$root : e, e.$children = [], e.$refs = {}, e._watcher = null, e._inactive = null, 
                e._directInactive = !1, e._isMounted = !1, e._isDestroyed = !1, e._isBeingDestroyed = !1;
            }(this), function(e) {
                e._events = Object.create(null), e._hasHookEvent = !1;
                var t = e.$options._parentListeners;
                t && K(e, t);
            }(this), function(e) {
                e._vnode = null, e._staticTrees = null;
                var t = e.$vnode = e.$options._parentVnode, n = t && t.context;
                e.$slots = Q(e.$options._renderChildren, n), e.$scopedSlots = Mn, e._c = function(t, n, i, r) {
                    return ge(e, t, n, i, r, !1);
                }, e.$createElement = function(t, n, i, r) {
                    return ge(e, t, n, i, r, !0);
                };
                var i = t && t.data;
                S(e, "$attrs", i && i.attrs, function() {
                    !$i && Ln("$attrs is readonly.", e);
                }, !0), S(e, "$listeners", e.$options._parentListeners, function() {
                    !$i && Ln("$listeners is readonly.", e);
                }, !0);
            }(this), oe(this, "beforeCreate"), function(e) {
                var t = pe(e.$options.inject, e);
                t && (pi.shouldConvert = !1, Object.keys(t).forEach(function(n) {
                    S(e, n, t[n], function() {
                        Ln('Avoid mutating an injected value directly since the changes will be overwritten whenever the provided component re-renders. injection being mutated: "' + n + '"', e);
                    });
                }), pi.shouldConvert = !0);
            }(this), ue(this), function(e) {
                var t = e.$options.provide;
                t && (e._provided = "function" == typeof t ? t.call(e) : t);
            }(this), oe(this, "created"), $n.performance && gi && (this._name = Rn(this, !1), gi(n), yi(this._name + " init", t, n)), 
            this.$options.el && this.$mount(this.$options.el);
        };
    }(Ne), function(e) {
        var t = {};
        t.get = function() {
            return this._data;
        };
        var n = {};
        n.get = function() {
            return this._props;
        }, t.set = function(e) {
            Ln("Avoid replacing instance root $data. Use nested data properties instead.", this);
        }, n.set = function() {
            Ln("$props is readonly.", this);
        }, Object.defineProperty(e.prototype, "$data", t), Object.defineProperty(e.prototype, "$props", n), 
        e.prototype.$set = E, e.prototype.$delete = A, e.prototype.$watch = function(e, t, n) {
            if (o(t)) return de(this, e, t, n);
            (n = n || {}).user = !0;
            var i = new Ui(this, e, t, n);
            return n.immediate && t.call(this, i.value), function() {
                i.teardown();
            };
        };
    }(Ne), function(e) {
        var t = /^hook:/;
        e.prototype.$on = function(e, n) {
            if (Array.isArray(e)) for (var i = 0, r = e.length; i < r; i++) this.$on(e[i], n); else (this._events[e] || (this._events[e] = [])).push(n), 
            t.test(e) && (this._hasHookEvent = !0);
            return this;
        }, e.prototype.$once = function(e, t) {
            function n() {
                i.$off(e, n), t.apply(i, arguments);
            }
            var i = this;
            return n.fn = t, i.$on(e, n), i;
        }, e.prototype.$off = function(e, t) {
            if (!arguments.length) return this._events = Object.create(null), this;
            if (Array.isArray(e)) {
                for (var n = 0, i = e.length; n < i; n++) this.$off(e[n], t);
                return this;
            }
            var r = this._events[e];
            if (!r) return this;
            if (1 === arguments.length) return this._events[e] = null, this;
            for (var o, s = r.length; s--; ) if ((o = r[s]) === t || o.fn === t) {
                r.splice(s, 1);
                break;
            }
            return this;
        }, e.prototype.$emit = function(e) {
            var t = e.toLowerCase();
            t !== e && this._events[t] && Fn('Event "' + t + '" is emitted in component ' + Rn(this) + ' but the handler is registered for "' + e + '". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "' + On(e) + '" instead of "' + e + '".');
            var n = this._events[e];
            if (n) {
                n = n.length > 1 ? p(n) : n;
                for (var i = p(arguments, 1), r = 0, o = n.length; r < o; r++) try {
                    n[r].apply(this, i);
                } catch (t) {
                    C(t, this, 'event handler for "' + e + '"');
                }
            }
            return this;
        };
    }(Ne), function(e) {
        e.prototype._update = function(e, t) {
            this._isMounted && oe(this, "beforeUpdate");
            var n = this.$el, i = this._vnode, r = Di;
            Di = this, this._vnode = e, i ? this.$el = this.__patch__(i, e) : (this.$el = this.__patch__(this.$el, e, t, !1, this.$options._parentElm, this.$options._refElm), 
            this.$options._parentElm = this.$options._refElm = null), Di = r, n && (n.__vue__ = null), this.$el && (this.$el.__vue__ = this), 
            this.$vnode && this.$parent && this.$vnode === this.$parent._vnode && (this.$parent.$el = this.$el);
        }, e.prototype.$forceUpdate = function() {
            this._watcher && this._watcher.update();
        }, e.prototype.$destroy = function() {
            if (!this._isBeingDestroyed) {
                oe(this, "beforeDestroy"), this._isBeingDestroyed = !0;
                var e = this.$parent;
                !e || e._isBeingDestroyed || this.$options.abstract || c(e.$children, this), this._watcher && this._watcher.teardown();
                for (var t = this._watchers.length; t--; ) this._watchers[t].teardown();
                this._data.__ob__ && this._data.__ob__.vmCount--, this._isDestroyed = !0, this.__patch__(this._vnode, null), 
                oe(this, "destroyed"), this.$off(), this.$el && (this.$el.__vue__ = null);
            }
        };
    }(Ne), function(e) {
        e.prototype.$nextTick = function(e) {
            return ai(e, this);
        }, e.prototype._render = function() {
            var e = this.$options, t = e.render, n = e.staticRenderFns, i = e._parentVnode;
            if (this._isMounted) for (var r in this.$slots) this.$slots[r] = W(this.$slots[r]);
            this.$scopedSlots = i && i.data.scopedSlots || Mn, n && !this._staticTrees && (this._staticTrees = []), 
            this.$vnode = i;
            var o;
            try {
                o = t.call(this._renderProxy, this.$createElement);
            } catch (e) {
                C(e, this, "render function"), o = this.$options.renderError ? this.$options.renderError.call(this._renderProxy, this.$createElement, e) : this._vnode;
            }
            return o instanceof Oi || (Array.isArray(o) && Ln("Multiple root nodes returned from render function. Render function should return a single root node.", this), 
            o = Ii()), o.parent = i, o;
        }, e.prototype._o = Te, e.prototype._n = l, e.prototype._s = a, e.prototype._l = be, e.prototype._t = _e, 
        e.prototype._q = y, e.prototype._i = b, e.prototype._m = ke, e.prototype._f = we, e.prototype._k = xe, 
        e.prototype._b = Ce, e.prototype._v = F, e.prototype._e = Ii, e.prototype._u = te, e.prototype._g = Ae;
    }(Ne);
    var er = [ String, RegExp, Array ], tr = {
        KeepAlive: {
            name: "keep-alive",
            abstract: !0,
            props: {
                include: er,
                exclude: er
            },
            created: function() {
                this.cache = Object.create(null);
            },
            destroyed: function() {
                for (var e in this.cache) $e(this.cache[e]);
            },
            watch: {
                include: function(e) {
                    De(this.cache, this._vnode, function(t) {
                        return je(e, t);
                    });
                },
                exclude: function(e) {
                    De(this.cache, this._vnode, function(t) {
                        return !je(e, t);
                    });
                }
            },
            render: function() {
                var e = J(this.$slots.default), t = e && e.componentOptions;
                if (t) {
                    var n = Ie(t);
                    if (n && (this.include && !je(this.include, n) || this.exclude && je(this.exclude, n))) return e;
                    var i = null == e.key ? t.Ctor.cid + (t.tag ? "::" + t.tag : "") : e.key;
                    this.cache[i] ? e.componentInstance = this.cache[i].componentInstance : this.cache[i] = e, e.data.keepAlive = !0;
                }
                return e;
            }
        }
    };
    !function(e) {
        var t = {};
        t.get = function() {
            return $n;
        }, t.set = function() {
            Ln("Do not replace the Vue.config object, set individual fields instead.");
        }, Object.defineProperty(e, "config", t), e.util = {
            warn: Ln,
            extend: m,
            mergeOptions: D,
            defineReactive: S
        }, e.set = E, e.delete = A, e.nextTick = ai, e.options = Object.create(null), jn.forEach(function(t) {
            e.options[t + "s"] = Object.create(null);
        }), e.options._base = e, m(e.options.components, tr), function(e) {
            e.use = function(e) {
                var t = this._installedPlugins || (this._installedPlugins = []);
                if (t.indexOf(e) > -1) return this;
                var n = p(arguments, 1);
                return n.unshift(this), "function" == typeof e.install ? e.install.apply(e, n) : "function" == typeof e && e.apply(null, n), 
                t.push(e), this;
            };
        }(e), function(e) {
            e.mixin = function(e) {
                return this.options = D(this.options, e), this;
            };
        }(e), Pe(e), function(e) {
            jn.forEach(function(t) {
                e[t] = function(e, n) {
                    return n ? ("component" === t && $n.isReservedTag(e) && Ln("Do not use built-in or reserved HTML elements as component id: " + e), 
                    "component" === t && o(n) && (n.name = n.name || e, n = this.options._base.extend(n)), "directive" === t && "function" == typeof n && (n = {
                        bind: n,
                        update: n
                    }), this.options[t + "s"][e] = n, n) : this.options[t + "s"][e];
                };
            });
        }(e);
    }(Ne), Object.defineProperty(Ne.prototype, "$isServer", {
        get: ri
    }), Object.defineProperty(Ne.prototype, "$ssrContext", {
        get: function() {
            return this.$vnode && this.$vnode.ssrContext;
        }
    }), Ne.version = "2.4.2";
    var nr, ir, rr, or, sr, ar, lr, ur, cr, fr = u("style,class"), hr = u("input,textarea,option,select"), dr = function(e, t, n) {
        return "value" === n && hr(e) && "button" !== t || "selected" === n && "option" === e || "checked" === n && "input" === e || "muted" === n && "video" === e;
    }, pr = u("contenteditable,draggable,spellcheck"), mr = u("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"), vr = "http://www.w3.org/1999/xlink", gr = function(e) {
        return ":" === e.charAt(5) && "xlink" === e.slice(0, 5);
    }, yr = function(e) {
        return gr(e) ? e.slice(6, e.length) : "";
    }, br = function(e) {
        return null == e || !1 === e;
    }, _r = {
        svg: "http://www.w3.org/2000/svg",
        math: "http://www.w3.org/1998/Math/MathML"
    }, wr = u("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"), xr = u("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0), Cr = function(e) {
        return wr(e) || xr(e);
    }, kr = Object.create(null), Tr = Object.freeze({
        createElement: function(e, t) {
            var n = document.createElement(e);
            return "select" !== e ? n : (t.data && t.data.attrs && void 0 !== t.data.attrs.multiple && n.setAttribute("multiple", "multiple"), 
            n);
        },
        createElementNS: function(e, t) {
            return document.createElementNS(_r[e], t);
        },
        createTextNode: function(e) {
            return document.createTextNode(e);
        },
        createComment: function(e) {
            return document.createComment(e);
        },
        insertBefore: function(e, t, n) {
            e.insertBefore(t, n);
        },
        removeChild: function(e, t) {
            e.removeChild(t);
        },
        appendChild: function(e, t) {
            e.appendChild(t);
        },
        parentNode: function(e) {
            return e.parentNode;
        },
        nextSibling: function(e) {
            return e.nextSibling;
        },
        tagName: function(e) {
            return e.tagName;
        },
        setTextContent: function(e, t) {
            e.textContent = t;
        },
        setAttribute: function(e, t, n) {
            e.setAttribute(t, n);
        }
    }), Sr = {
        create: function(e, t) {
            qe(t);
        },
        update: function(e, t) {
            e.data.ref !== t.data.ref && (qe(e, !0), qe(t));
        },
        destroy: function(e) {
            qe(e, !0);
        }
    }, Er = new Oi("", {}, []), Ar = [ "create", "activate", "update", "remove", "destroy" ], Or = {
        create: Ue,
        update: Ue,
        destroy: function(e) {
            Ue(e, Er);
        }
    }, Nr = Object.create(null), Pr = [ Sr, Or ], Ir = {
        create: Ye,
        update: Ye
    }, jr = {
        create: Ge,
        update: Ge
    }, Dr = /[\w).+\-_$\]]/, $r = "__r", Mr = "__c", Hr = {
        create: pt,
        update: pt
    }, Lr = {
        create: mt,
        update: mt
    }, Fr = h(function(e) {
        var t = {}, n = /:(.+)/;
        return e.split(/;(?![^(]*\))/g).forEach(function(e) {
            if (e) {
                var i = e.split(n);
                i.length > 1 && (t[i[0].trim()] = i[1].trim());
            }
        }), t;
    }), Rr = /^--/, Wr = /\s*!important$/, qr = function(e, t, n) {
        if (Rr.test(t)) e.style.setProperty(t, n); else if (Wr.test(n)) e.style.setProperty(t, n.replace(Wr, ""), "important"); else {
            var i = zr(t);
            if (Array.isArray(n)) for (var r = 0, o = n.length; r < o; r++) e.style[i] = n[r]; else e.style[i] = n;
        }
    }, Br = [ "Webkit", "Moz", "ms" ], zr = h(function(e) {
        if (cr = cr || document.createElement("div").style, "filter" !== (e = Sn(e)) && e in cr) return e;
        for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < Br.length; n++) {
            var i = Br[n] + t;
            if (i in cr) return i;
        }
    }), Ur = {
        create: yt,
        update: yt
    }, Vr = h(function(e) {
        return {
            enterClass: e + "-enter",
            enterToClass: e + "-enter-to",
            enterActiveClass: e + "-enter-active",
            leaveClass: e + "-leave",
            leaveToClass: e + "-leave-to",
            leaveActiveClass: e + "-leave-active"
        };
    }), Xr = Un && !Yn, Yr = "transition", Jr = "animation", Gr = "transition", Zr = "transitionend", Kr = "animation", Qr = "animationend";
    Xr && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (Gr = "WebkitTransition", 
    Zr = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (Kr = "WebkitAnimation", 
    Qr = "webkitAnimationEnd"));
    var eo = Un && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout, to = /\b(transform|all)(,|$)/, no = function(r) {
        function o(e) {
            var n = T.parentNode(e);
            t(n) && T.removeChild(n, e);
        }
        function s(e, i, r, o, s) {
            if (e.isRootInsert = !s, !function(e, i, r, o) {
                var s = e.data;
                if (t(s)) {
                    var u = t(e.componentInstance) && s.keepAlive;
                    if (t(s = s.hook) && t(s = s.init) && s(e, !1, r, o), t(e.componentInstance)) return a(e, i), n(u) && function(e, n, i, r) {
                        for (var o, s = e; s.componentInstance; ) if (s = s.componentInstance._vnode, t(o = s.data) && t(o = o.transition)) {
                            for (o = 0; o < C.activate.length; ++o) C.activate[o](Er, s);
                            n.push(s);
                            break;
                        }
                        l(i, e.elm, r);
                    }(e, i, r, o), !0;
                }
            }(e, i, r, o)) {
                var u = e.data, f = e.children, p = e.tag;
                t(p) ? (u && u.pre && S++, S || e.ns || $n.ignoredElements.length && $n.ignoredElements.indexOf(p) > -1 || !$n.isUnknownElement(p) || Ln("Unknown custom element: <" + p + '> - did you register the component correctly? For recursive components, make sure to provide the "name" option.', e.context), 
                e.elm = e.ns ? T.createElementNS(e.ns, p) : T.createElement(p, e), d(e), c(e, f, i), t(u) && h(e, i), 
                l(r, e.elm, o), u && u.pre && S--) : n(e.isComment) ? (e.elm = T.createComment(e.text), l(r, e.elm, o)) : (e.elm = T.createTextNode(e.text), 
                l(r, e.elm, o));
            }
        }
        function a(e, n) {
            t(e.data.pendingInsert) && (n.push.apply(n, e.data.pendingInsert), e.data.pendingInsert = null), e.elm = e.componentInstance.$el, 
            f(e) ? (h(e, n), d(e)) : (qe(e), n.push(e));
        }
        function l(e, n, i) {
            t(e) && (t(i) ? i.parentNode === e && T.insertBefore(e, n, i) : T.appendChild(e, n));
        }
        function c(e, t, n) {
            if (Array.isArray(t)) for (var r = 0; r < t.length; ++r) s(t[r], n, e.elm, null, !0); else i(e.text) && T.appendChild(e.elm, T.createTextNode(e.text));
        }
        function f(e) {
            for (;e.componentInstance; ) e = e.componentInstance._vnode;
            return t(e.tag);
        }
        function h(e, n) {
            for (var i = 0; i < C.create.length; ++i) C.create[i](Er, e);
            t(w = e.data.hook) && (t(w.create) && w.create(Er, e), t(w.insert) && n.push(e));
        }
        function d(e) {
            for (var n, i = e; i; ) t(n = i.context) && t(n = n.$options._scopeId) && T.setAttribute(e.elm, n, ""), 
            i = i.parent;
            t(n = Di) && n !== e.context && t(n = n.$options._scopeId) && T.setAttribute(e.elm, n, "");
        }
        function p(e, t, n, i, r, o) {
            for (;i <= r; ++i) s(n[i], o, e, t);
        }
        function m(e) {
            var n, i, r = e.data;
            if (t(r)) for (t(n = r.hook) && t(n = n.destroy) && n(e), n = 0; n < C.destroy.length; ++n) C.destroy[n](e);
            if (t(n = e.children)) for (i = 0; i < e.children.length; ++i) m(e.children[i]);
        }
        function v(e, n, i, r) {
            for (;i <= r; ++i) {
                var s = n[i];
                t(s) && (t(s.tag) ? (g(s), m(s)) : o(s.elm));
            }
        }
        function g(e, n) {
            if (t(n) || t(e.data)) {
                var i, r = C.remove.length + 1;
                for (t(n) ? n.listeners += r : n = function(e, t) {
                    function n() {
                        0 == --n.listeners && o(e);
                    }
                    return n.listeners = t, n;
                }(e.elm, r), t(i = e.componentInstance) && t(i = i._vnode) && t(i.data) && g(i, n), i = 0; i < C.remove.length; ++i) C.remove[i](e, n);
                t(i = e.data.hook) && t(i = i.remove) ? i(e, n) : n();
            } else o(e.elm);
        }
        function y(i, r, o, a) {
            if (i !== r) {
                var l = r.elm = i.elm;
                if (n(i.isAsyncPlaceholder)) t(r.asyncFactory.resolved) ? _(i.elm, r, o) : r.isAsyncPlaceholder = !0; else if (n(r.isStatic) && n(i.isStatic) && r.key === i.key && (n(r.isCloned) || n(r.isOnce))) r.componentInstance = i.componentInstance; else {
                    var u, c = r.data;
                    t(c) && t(u = c.hook) && t(u = u.prepatch) && u(i, r);
                    var h = i.children, d = r.children;
                    if (t(c) && f(r)) {
                        for (u = 0; u < C.update.length; ++u) C.update[u](i, r);
                        t(u = c.hook) && t(u = u.update) && u(i, r);
                    }
                    e(r.text) ? t(h) && t(d) ? h !== d && function(n, i, r, o, a) {
                        for (var l, u, c, f = 0, h = 0, d = i.length - 1, m = i[0], g = i[d], b = r.length - 1, _ = r[0], w = r[b], x = !a; f <= d && h <= b; ) e(m) ? m = i[++f] : e(g) ? g = i[--d] : Be(m, _) ? (y(m, _, o), 
                        m = i[++f], _ = r[++h]) : Be(g, w) ? (y(g, w, o), g = i[--d], w = r[--b]) : Be(m, w) ? (y(m, w, o), 
                        x && T.insertBefore(n, m.elm, T.nextSibling(g.elm)), m = i[++f], w = r[--b]) : Be(g, _) ? (y(g, _, o), 
                        x && T.insertBefore(n, g.elm, m.elm), g = i[--d], _ = r[++h]) : (e(l) && (l = ze(i, f, d)), e(u = t(_.key) ? l[_.key] : null) ? (s(_, o, n, m.elm), 
                        _ = r[++h]) : ((c = i[u]) || Ln("It seems there are duplicate keys that is causing an update error. Make sure each v-for item has a unique key."), 
                        Be(c, _) ? (y(c, _, o), i[u] = void 0, x && T.insertBefore(n, c.elm, m.elm), _ = r[++h]) : (s(_, o, n, m.elm), 
                        _ = r[++h])));
                        f > d ? p(n, e(r[b + 1]) ? null : r[b + 1].elm, r, h, b, o) : h > b && v(0, i, f, d);
                    }(l, h, d, o, a) : t(d) ? (t(i.text) && T.setTextContent(l, ""), p(l, null, d, 0, d.length - 1, o)) : t(h) ? v(0, h, 0, h.length - 1) : t(i.text) && T.setTextContent(l, "") : i.text !== r.text && T.setTextContent(l, r.text), 
                    t(c) && t(u = c.hook) && t(u = u.postpatch) && u(i, r);
                }
            }
        }
        function b(e, i, r) {
            if (n(r) && t(e.parent)) e.parent.data.pendingInsert = i; else for (var o = 0; o < i.length; ++o) i[o].data.hook.insert(i[o]);
        }
        function _(e, i, r) {
            if (n(i.isComment) && t(i.asyncFactory)) return i.elm = e, i.isAsyncPlaceholder = !0, !0;
            if (!function(e, n) {
                return t(n.tag) ? 0 === n.tag.indexOf("vue-component") || n.tag.toLowerCase() === (e.tagName && e.tagName.toLowerCase()) : e.nodeType === (n.isComment ? 8 : 3);
            }(e, i)) return !1;
            i.elm = e;
            var o = i.tag, s = i.data, l = i.children;
            if (t(s) && (t(w = s.hook) && t(w = w.init) && w(i, !0), t(w = i.componentInstance))) return a(i, r), 
            !0;
            if (t(o)) {
                if (t(l)) if (e.hasChildNodes()) {
                    for (var u = !0, f = e.firstChild, d = 0; d < l.length; d++) {
                        if (!f || !_(f, l[d], r)) {
                            u = !1;
                            break;
                        }
                        f = f.nextSibling;
                    }
                    if (!u || f) return "undefined" == typeof console || E || (E = !0, console.warn("Parent: ", e), console.warn("Mismatching childNodes vs. VNodes: ", e.childNodes, l)), 
                    !1;
                } else c(i, l, r);
                if (t(s)) for (var p in s) if (!A(p)) {
                    h(i, r);
                    break;
                }
            } else e.data !== i.text && (e.data = i.text);
            return !0;
        }
        var w, x, C = {}, k = r.modules, T = r.nodeOps;
        for (w = 0; w < Ar.length; ++w) for (C[Ar[w]] = [], x = 0; x < k.length; ++x) t(k[x][Ar[w]]) && C[Ar[w]].push(k[x][Ar[w]]);
        var S = 0, E = !1, A = u("attrs,style,class,staticClass,staticStyle,key");
        return function(i, r, o, a, l, u) {
            if (!e(r)) {
                var c = !1, h = [];
                if (e(i)) c = !0, s(r, h, l, u); else {
                    var d = t(i.nodeType);
                    if (!d && Be(i, r)) y(i, r, h, a); else {
                        if (d) {
                            if (1 === i.nodeType && i.hasAttribute(In) && (i.removeAttribute(In), o = !0), n(o)) {
                                if (_(i, r, h)) return b(r, h, !0), i;
                                Ln("The client-side rendered virtual DOM tree is not matching server-rendered content. This is likely caused by incorrect HTML markup, for example nesting block-level elements inside <p>, or missing <tbody>. Bailing hydration and performing full client-side render.");
                            }
                            i = function(e) {
                                return new Oi(T.tagName(e).toLowerCase(), {}, [], void 0, e);
                            }(i);
                        }
                        var p = i.elm, g = T.parentNode(p);
                        if (s(r, h, p._leaveCb ? null : g, T.nextSibling(p)), t(r.parent)) {
                            for (var w = r.parent; w; ) w.elm = r.elm, w = w.parent;
                            if (f(r)) for (var x = 0; x < C.create.length; ++x) C.create[x](Er, r.parent);
                        }
                        t(g) ? v(0, [ i ], 0, 0) : t(i.tag) && m(i);
                    }
                }
                return b(r, h, c), r.elm;
            }
            t(i) && m(i);
        };
    }({
        nodeOps: Tr,
        modules: [ Ir, jr, Hr, Lr, Ur, Un ? {
            create: Dt,
            activate: Dt,
            remove: function(e, t) {
                !0 !== e.data.show ? Nt(e, t) : t();
            }
        } : {} ].concat(Pr)
    }), io = u("text,number,password,search,email,tel,url");
    Yn && document.addEventListener("selectionchange", function() {
        var e = document.activeElement;
        e && e.vmodel && Ft(e, "input");
    });
    var ro = {
        model: {
            inserted: function(e, t, n) {
                if ("select" === n.tag) {
                    var i = function() {
                        $t(e, t, n.context);
                    };
                    i(), (Xn || Jn) && setTimeout(i, 0), e._vOptions = [].map.call(e.options, Mt);
                } else ("textarea" === n.tag || io(e.type)) && (e._vModifiers = t.modifiers, t.modifiers.lazy || (e.addEventListener("change", Lt), 
                Gn || (e.addEventListener("compositionstart", Ht), e.addEventListener("compositionend", Lt)), Yn && (e.vmodel = !0)));
            },
            componentUpdated: function(e, t, n) {
                if ("select" === n.tag) {
                    $t(e, t, n.context);
                    var i = e._vOptions;
                    (e._vOptions = [].map.call(e.options, Mt)).some(function(e, t) {
                        return !y(e, i[t]);
                    }) && Ft(e, "change");
                }
            }
        },
        show: {
            bind: function(e, t, n) {
                var i = t.value, r = (n = Rt(n)).data && n.data.transition, o = e.__vOriginalDisplay = "none" === e.style.display ? "" : e.style.display;
                i && r ? (n.data.show = !0, Ot(n, function() {
                    e.style.display = o;
                })) : e.style.display = i ? o : "none";
            },
            update: function(e, t, n) {
                var i = t.value;
                if (i !== t.oldValue) {
                    (n = Rt(n)).data && n.data.transition ? (n.data.show = !0, i ? Ot(n, function() {
                        e.style.display = e.__vOriginalDisplay;
                    }) : Nt(n, function() {
                        e.style.display = "none";
                    })) : e.style.display = i ? e.__vOriginalDisplay : "none";
                }
            },
            unbind: function(e, t, n, i, r) {
                r || (e.style.display = e.__vOriginalDisplay);
            }
        }
    }, oo = {
        name: String,
        appear: Boolean,
        css: Boolean,
        mode: String,
        type: String,
        enterClass: String,
        leaveClass: String,
        enterToClass: String,
        leaveToClass: String,
        enterActiveClass: String,
        leaveActiveClass: String,
        appearClass: String,
        appearActiveClass: String,
        appearToClass: String,
        duration: [ Number, String, Object ]
    }, so = {
        name: "transition",
        props: oo,
        abstract: !0,
        render: function(e) {
            var t = this, n = this.$options._renderChildren;
            if (n && (n = n.filter(function(e) {
                return e.tag || zt(e);
            })).length) {
                n.length > 1 && Ln("<transition> can only be used on a single element. Use <transition-group> for lists.", this.$parent);
                var r = this.mode;
                r && "in-out" !== r && "out-in" !== r && Ln("invalid <transition> mode: " + r, this.$parent);
                var o = n[0];
                if (function(e) {
                    for (;e = e.parent; ) if (e.data.transition) return !0;
                }(this.$vnode)) return o;
                var s = Wt(o);
                if (!s) return o;
                if (this._leaving) return Bt(e, o);
                var a = "__transition-" + this._uid + "-";
                s.key = null == s.key ? s.isComment ? a + "comment" : a + s.tag : i(s.key) ? 0 === String(s.key).indexOf(a) ? s.key : a + s.key : s.key;
                var l = (s.data || (s.data = {})).transition = qt(this), u = this._vnode, c = Wt(u);
                if (s.data.directives && s.data.directives.some(function(e) {
                    return "show" === e.name;
                }) && (s.data.show = !0), c && c.data && !function(e, t) {
                    return t.key === e.key && t.tag === e.tag;
                }(s, c) && !zt(c)) {
                    var f = c && (c.data.transition = m({}, l));
                    if ("out-in" === r) return this._leaving = !0, z(f, "afterLeave", function() {
                        t._leaving = !1, t.$forceUpdate();
                    }), Bt(e, o);
                    if ("in-out" === r) {
                        if (zt(s)) return u;
                        var h, d = function() {
                            h();
                        };
                        z(l, "afterEnter", d), z(l, "enterCancelled", d), z(f, "delayLeave", function(e) {
                            h = e;
                        });
                    }
                }
                return o;
            }
        }
    }, ao = m({
        tag: String,
        moveClass: String
    }, oo);
    delete ao.mode;
    var lo = {
        Transition: so,
        TransitionGroup: {
            props: ao,
            render: function(e) {
                for (var t = this.tag || this.$vnode.data.tag || "span", n = Object.create(null), i = this.prevChildren = this.children, r = this.$slots.default || [], o = this.children = [], s = qt(this), a = 0; a < r.length; a++) {
                    var l = r[a];
                    if (l.tag) if (null != l.key && 0 !== String(l.key).indexOf("__vlist")) o.push(l), n[l.key] = l, (l.data || (l.data = {})).transition = s; else {
                        var u = l.componentOptions, c = u ? u.Ctor.options.name || u.tag || "" : l.tag;
                        Ln("<transition-group> children must be keyed: <" + c + ">");
                    }
                }
                if (i) {
                    for (var f = [], h = [], d = 0; d < i.length; d++) {
                        var p = i[d];
                        p.data.transition = s, p.data.pos = p.elm.getBoundingClientRect(), n[p.key] ? f.push(p) : h.push(p);
                    }
                    this.kept = e(t, null, f), this.removed = h;
                }
                return e(t, null, o);
            },
            beforeUpdate: function() {
                this.__patch__(this._vnode, this.kept, !1, !0), this._vnode = this.kept;
            },
            updated: function() {
                var e = this.prevChildren, t = this.moveClass || (this.name || "v") + "-move";
                if (e.length && this.hasMove(e[0].elm, t)) {
                    e.forEach(Ut), e.forEach(Vt), e.forEach(Xt);
                    document.body.offsetHeight;
                    e.forEach(function(e) {
                        if (e.data.moved) {
                            var n = e.elm, i = n.style;
                            Ct(n, t), i.transform = i.WebkitTransform = i.transitionDuration = "", n.addEventListener(Zr, n._moveCb = function e(i) {
                                i && !/transform$/.test(i.propertyName) || (n.removeEventListener(Zr, e), n._moveCb = null, kt(n, t));
                            });
                        }
                    });
                }
            },
            methods: {
                hasMove: function(e, t) {
                    if (!Xr) return !1;
                    if (this._hasMove) return this._hasMove;
                    var n = e.cloneNode();
                    e._transitionClasses && e._transitionClasses.forEach(function(e) {
                        _t(n, e);
                    }), bt(n, t), n.style.display = "none", this.$el.appendChild(n);
                    var i = St(n);
                    return this.$el.removeChild(n), this._hasMove = i.hasTransform;
                }
            }
        }
    };
    Ne.config.mustUseProp = dr, Ne.config.isReservedTag = Cr, Ne.config.isReservedAttr = fr, Ne.config.getTagNamespace = Re, 
    Ne.config.isUnknownElement = function(e) {
        if (!Un) return !0;
        if (Cr(e)) return !1;
        if (e = e.toLowerCase(), null != kr[e]) return kr[e];
        var t = document.createElement(e);
        return e.indexOf("-") > -1 ? kr[e] = t.constructor === window.HTMLUnknownElement || t.constructor === window.HTMLElement : kr[e] = /HTMLUnknownElement/.test(t.toString());
    }, m(Ne.options.directives, ro), m(Ne.options.components, lo), Ne.prototype.__patch__ = Un ? no : g, 
    Ne.prototype.$mount = function(e, t) {
        return e = e && Un ? We(e) : void 0, function(e, t, n) {
            e.$el = t, e.$options.render || (e.$options.render = Ii, e.$options.template && "#" !== e.$options.template.charAt(0) || e.$options.el || t ? Ln("You are using the runtime-only build of Vue where the template compiler is not available. Either pre-compile the templates into render functions, or use the compiler-included build.", e) : Ln("Failed to mount component: template or render function not defined.", e)), 
            oe(e, "beforeMount");
            var i;
            return i = $n.performance && gi ? function() {
                var t = e._name, i = e._uid, r = "vue-perf-start:" + i, o = "vue-perf-end:" + i;
                gi(r);
                var s = e._render();
                gi(o), yi(t + " render", r, o), gi(r), e._update(s, n), gi(o), yi(t + " patch", r, o);
            } : function() {
                e._update(e._render(), n);
            }, e._watcher = new Ui(e, i, g), n = !1, null == e.$vnode && (e._isMounted = !0, oe(e, "mounted")), 
            e;
        }(this, e, t);
    }, setTimeout(function() {
        $n.devtools && (oi ? oi.emit("init", Ne) : Kn && console[console.info ? "info" : "log"]("Download the Vue Devtools extension for a better development experience:\nhttps://github.com/vuejs/vue-devtools")), 
        !1 !== $n.productionTip && Un && "undefined" != typeof console && console[console.info ? "info" : "log"]("You are running Vue in development mode.\nMake sure to turn on production mode when deploying for production.\nSee more tips at https://vuejs.org/guide/deployment.html");
    }, 0);
    var uo, co = !!Un && function(e, t) {
        var n = document.createElement("div");
        return n.innerHTML = '<div a="' + e + '"/>', n.innerHTML.indexOf(t) > 0;
    }("\n", "&#10;"), fo = /\{\{((?:.|\n)+?)\}\}/g, ho = /[-.*+?^${}()|[\]\/\\]/g, po = h(function(e) {
        var t = e[0].replace(ho, "\\$&"), n = e[1].replace(ho, "\\$&");
        return new RegExp(t + "((?:.|\\n)+?)" + n, "g");
    }), mo = [ {
        staticKeys: [ "staticClass" ],
        transformNode: function(e, t) {
            var n = t.warn || Ke, i = ot(e, "class");
            i && Yt(i, t.delimiters) && n('class="' + i + '": Interpolation inside attributes has been removed. Use v-bind or the colon shorthand instead. For example, instead of <div class="{{ val }}">, use <div :class="val">.');
            i && (e.staticClass = JSON.stringify(i));
            var r = rt(e, "class", !1);
            r && (e.classBinding = r);
        },
        genData: function(e) {
            var t = "";
            return e.staticClass && (t += "staticClass:" + e.staticClass + ","), e.classBinding && (t += "class:" + e.classBinding + ","), 
            t;
        }
    }, {
        staticKeys: [ "staticStyle" ],
        transformNode: function(e, t) {
            var n = t.warn || Ke, i = ot(e, "style");
            i && (Yt(i, t.delimiters) && n('style="' + i + '": Interpolation inside attributes has been removed. Use v-bind or the colon shorthand instead. For example, instead of <div style="{{ val }}">, use <div :style="val">.'), 
            e.staticStyle = JSON.stringify(Fr(i)));
            var r = rt(e, "style", !1);
            r && (e.styleBinding = r);
        },
        genData: function(e) {
            var t = "";
            return e.staticStyle && (t += "staticStyle:" + e.staticStyle + ","), e.styleBinding && (t += "style:(" + e.styleBinding + "),"), 
            t;
        }
    } ], vo = {
        model: function(e, t, n) {
            lr = n;
            var i = t.value, r = t.modifiers, o = e.tag, s = e.attrsMap.type, a = e.attrsMap["v-bind:type"] || e.attrsMap[":type"];
            if ("input" === o && a && lr('<input :type="' + a + '" v-model="' + i + '">:\nv-model does not support dynamic input types. Use v-if branches instead.'), 
            "input" === o && "file" === s && lr("<" + e.tag + ' v-model="' + i + '" type="file">:\nFile inputs are read only. Use a v-on:change listener instead.'), 
            e.component) return st(e, i, r), !1;
            if ("select" === o) !function(e, t, n) {
                var i = 'var $$selectedVal = Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' + (n && n.number ? "_n(val)" : "val") + "});";
                i = i + " " + at(t, "$event.target.multiple ? $$selectedVal : $$selectedVal[0]"), it(e, "change", i, null, !0);
            }(e, i, r); else if ("input" === o && "checkbox" === s) !function(e, t, n) {
                var i = n && n.number, r = rt(e, "value") || "null", o = rt(e, "true-value") || "true", s = rt(e, "false-value") || "false";
                et(e, "checked", "Array.isArray(" + t + ")?_i(" + t + "," + r + ")>-1" + ("true" === o ? ":(" + t + ")" : ":_q(" + t + "," + o + ")")), 
                it(e, Mr, "var $$a=" + t + ",$$el=$event.target,$$c=$$el.checked?(" + o + "):(" + s + ");if(Array.isArray($$a)){var $$v=" + (i ? "_n(" + r + ")" : r) + ",$$i=_i($$a,$$v);if($$el.checked){$$i<0&&(" + t + "=$$a.concat($$v))}else{$$i>-1&&(" + t + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{" + at(t, "$$c") + "}", null, !0);
            }(e, i, r); else if ("input" === o && "radio" === s) !function(e, t, n) {
                var i = n && n.number, r = rt(e, "value") || "null";
                et(e, "checked", "_q(" + t + "," + (r = i ? "_n(" + r + ")" : r) + ")"), it(e, Mr, at(t, r), null, !0);
            }(e, i, r); else if ("input" === o || "textarea" === o) !function(e, t, n) {
                var i = e.attrsMap.type, r = n || {}, o = r.lazy, s = r.number, a = r.trim, l = !o && "range" !== i, u = o ? "change" : "range" === i ? $r : "input", c = "$event.target.value";
                a && (c = "$event.target.value.trim()"), s && (c = "_n(" + c + ")");
                var f = at(t, c);
                l && (f = "if($event.target.composing)return;" + f), et(e, "value", "(" + t + ")"), it(e, u, f, null, !0), 
                (a || s) && it(e, "blur", "$forceUpdate()");
            }(e, i, r); else {
                if (!$n.isReservedTag(o)) return st(e, i, r), !1;
                lr("<" + e.tag + ' v-model="' + i + "\">: v-model is not supported on this element type. If you are working with contenteditable, it's recommended to wrap a library dedicated for that purpose inside a custom component.");
            }
            return !0;
        },
        text: function(e, t) {
            t.value && et(e, "textContent", "_s(" + t.value + ")");
        },
        html: function(e, t) {
            t.value && et(e, "innerHTML", "_s(" + t.value + ")");
        }
    }, go = u("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"), yo = u("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"), bo = u("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"), _o = {
        expectHTML: !0,
        modules: mo,
        directives: vo,
        isPreTag: function(e) {
            return "pre" === e;
        },
        isUnaryTag: go,
        mustUseProp: dr,
        canBeLeftOpenTag: yo,
        isReservedTag: Cr,
        getTagNamespace: Re,
        staticKeys: function(e) {
            return e.reduce(function(e, t) {
                return e.concat(t.staticKeys || []);
            }, []).join(",");
        }(mo)
    }, wo = function(e) {
        return uo = uo || document.createElement("div"), uo.innerHTML = e, uo.textContent;
    }, xo = [ /"([^"]*)"+/.source, /'([^']*)'+/.source, /([^\s"'=<>`]+)/.source ], Co = new RegExp("^\\s*" + /([^\s"'<>/=]+)/.source + "(?:\\s*(" + /(?:=)/.source + ")\\s*(?:" + xo.join("|") + "))?"), ko = "((?:[a-zA-Z_][\\w\\-\\.]*\\:)?[a-zA-Z_][\\w\\-\\.]*)", To = new RegExp("^<" + ko), So = /^\s*(\/?)>/, Eo = new RegExp("^<\\/" + ko + "[^>]*>"), Ao = /^<!DOCTYPE [^>]+>/i, Oo = /^<!--/, No = /^<!\[/, Po = !1;
    "x".replace(/x(.)?/g, function(e, t) {
        Po = "" === t;
    });
    var Io, jo, Do, $o, Mo, Ho, Lo, Fo, Ro, Wo, qo = u("script,style,textarea", !0), Bo = {}, zo = {
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&amp;": "&",
        "&#10;": "\n"
    }, Uo = /&(?:lt|gt|quot|amp);/g, Vo = /&(?:lt|gt|quot|amp|#10);/g, Xo = u("pre,textarea", !0), Yo = function(e, t) {
        return e && Xo(e) && "\n" === t[0];
    }, Jo = /^@|^v-on:/, Go = /^v-|^@|^:/, Zo = /(.*?)\s+(?:in|of)\s+(.*)/, Ko = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/, Qo = /:(.*)$/, es = /^:|^v-bind:/, ts = /\.[^.]+/g, ns = h(wo), is = /^xmlns:NS\d+/, rs = /^NS\d+:/, os = h(function(e) {
        return u("type,tag,attrsList,attrsMap,plain,parent,children,attrs" + (e ? "," + e : ""));
    }), ss = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/, as = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/, ls = {
        esc: 27,
        tab: 9,
        enter: 13,
        space: 32,
        up: 38,
        left: 37,
        right: 39,
        down: 40,
        delete: [ 8, 46 ]
    }, us = function(e) {
        return "if(" + e + ")return null;";
    }, cs = {
        stop: "$event.stopPropagation();",
        prevent: "$event.preventDefault();",
        self: us("$event.target !== $event.currentTarget"),
        ctrl: us("!$event.ctrlKey"),
        shift: us("!$event.shiftKey"),
        alt: us("!$event.altKey"),
        meta: us("!$event.metaKey"),
        left: us("'button' in $event && $event.button !== 0"),
        middle: us("'button' in $event && $event.button !== 1"),
        right: us("'button' in $event && $event.button !== 2")
    }, fs = {
        on: function(e, t) {
            t.modifiers && Ln("v-on without argument does not support modifiers."), e.wrapListeners = function(e) {
                return "_g(" + e + "," + t.value + ")";
            };
        },
        bind: function(e, t) {
            e.wrapData = function(n) {
                return "_b(" + n + ",'" + e.tag + "'," + t.value + "," + (t.modifiers && t.modifiers.prop ? "true" : "false") + (t.modifiers && t.modifiers.sync ? ",true" : "") + ")";
            };
        },
        cloak: g
    }, hs = function(e) {
        this.options = e, this.warn = e.warn || Ke, this.transforms = Qe(e.modules, "transformCode"), this.dataGenFns = Qe(e.modules, "genData"), 
        this.directives = m(m({}, fs), e.directives);
        var t = e.isReservedTag || Nn;
        this.maybeComponent = function(e) {
            return !t(e.tag);
        }, this.onceId = 0, this.staticRenderFns = [];
    }, ds = new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b") + "\\b"), ps = new RegExp("\\b" + "delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b") + "\\s*\\([^\\)]*\\)"), ms = /[A-Za-z_$][\w$]*/, vs = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g, gs = function(e) {
        return function(t) {
            function n(n, i) {
                var r = Object.create(t), o = [], s = [];
                if (r.warn = function(e, t) {
                    (t ? s : o).push(e);
                }, i) {
                    i.modules && (r.modules = (t.modules || []).concat(i.modules)), i.directives && (r.directives = m(Object.create(t.directives), i.directives));
                    for (var a in i) "modules" !== a && "directives" !== a && (r[a] = i[a]);
                }
                var l = e(n, r);
                return o.push.apply(o, function(e) {
                    var t = [];
                    return e && gn(e, t), t;
                }(l.ast)), l.errors = o, l.tips = s, l;
            }
            return {
                compile: n,
                compileToFunctions: function(e) {
                    var t = Object.create(null);
                    return function(n, i, r) {
                        i = i || {};
                        try {
                            new Function("return 1");
                        } catch (e) {
                            e.toString().match(/unsafe-eval|CSP/) && Ln("It seems you are using the standalone build of Vue.js in an environment with Content Security Policy that prohibits unsafe-eval. The template compiler cannot work in this environment. Consider relaxing the policy to allow unsafe-eval or pre-compiling your templates into render functions.");
                        }
                        var o = i.delimiters ? String(i.delimiters) + n : n;
                        if (t[o]) return t[o];
                        var s = e(n, i);
                        s.errors && s.errors.length && Ln("Error compiling template:\n\n" + n + "\n\n" + s.errors.map(function(e) {
                            return "- " + e;
                        }).join("\n") + "\n", r), s.tips && s.tips.length && s.tips.forEach(function(e) {
                            return Fn(e, r);
                        });
                        var a = {}, l = [];
                        return a.render = _n(s.render, l), a.staticRenderFns = s.staticRenderFns.map(function(e) {
                            return _n(e, l);
                        }), s.errors && s.errors.length || !l.length || Ln("Failed to generate render function:\n\n" + l.map(function(e) {
                            var t = e.err, n = e.code;
                            return t.toString() + " in\n\n" + n + "\n";
                        }).join("\n"), r), t[o] = a;
                    };
                }(n)
            };
        };
    }(function(e, t) {
        var n = Zt(e.trim(), t);
        !function(e, t) {
            e && (Ro = os(t.staticKeys || ""), Wo = t.isReservedTag || Nn, Qt(e), en(e, !1));
        }(n, t);
        var i = on(n, t);
        return {
            ast: n,
            render: i.render,
            staticRenderFns: i.staticRenderFns
        };
    })(_o).compileToFunctions, ys = h(function(e) {
        var t = We(e);
        return t && t.innerHTML;
    }), bs = Ne.prototype.$mount;
    return Ne.prototype.$mount = function(e, t) {
        if ((e = e && We(e)) === document.body || e === document.documentElement) return Ln("Do not mount Vue to <html> or <body> - mount to normal elements instead."), 
        this;
        var n = this.$options;
        if (!n.render) {
            var i = n.template;
            if (i) if ("string" == typeof i) "#" === i.charAt(0) && ((i = ys(i)) || Ln("Template element not found or is empty: " + n.template, this)); else {
                if (!i.nodeType) return Ln("invalid template option:" + i, this), this;
                i = i.innerHTML;
            } else e && (i = function(e) {
                if (e.outerHTML) return e.outerHTML;
                var t = document.createElement("div");
                return t.appendChild(e.cloneNode(!0)), t.innerHTML;
            }(e));
            if (i) {
                $n.performance && gi && gi("compile");
                var r = gs(i, {
                    shouldDecodeNewlines: co,
                    delimiters: n.delimiters,
                    comments: n.comments
                }, this), o = r.render, s = r.staticRenderFns;
                n.render = o, n.staticRenderFns = s, $n.performance && gi && (gi("compile end"), yi(this._name + " compile", "compile", "compile end"));
            }
        }
        return bs.call(this, e, t);
    }, Ne.compile = gs, Ne;
}), function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.ES6Promise = t();
}(this, function() {
    "use strict";
    function e(e) {
        return "function" == typeof e;
    }
    function t() {
        var e = setTimeout;
        return function() {
            return e(n, 1);
        };
    }
    function n() {
        for (var e = 0; e < _; e += 2) {
            (0, O[e])(O[e + 1]), O[e] = void 0, O[e + 1] = void 0;
        }
        _ = 0;
    }
    function i(e, t) {
        var n = arguments, i = this, r = new this.constructor(o);
        void 0 === r[P] && v(r);
        var s = i._state;
        return s ? function() {
            var e = n[s - 1];
            C(function() {
                return m(s, r, e, i._result);
            });
        }() : h(i, r, e, t), r;
    }
    function r(e) {
        if (e && "object" == typeof e && e.constructor === this) return e;
        var t = new this(o);
        return l(t, e), t;
    }
    function o() {}
    function s(e) {
        try {
            return e.then;
        } catch (e) {
            return $.error = e, $;
        }
    }
    function a(t, n, o) {
        n.constructor === t.constructor && o === i && n.constructor.resolve === r ? function(e, t) {
            t._state === j ? c(e, t._result) : t._state === D ? f(e, t._result) : h(t, void 0, function(t) {
                return l(e, t);
            }, function(t) {
                return f(e, t);
            });
        }(t, n) : o === $ ? f(t, $.error) : void 0 === o ? c(t, n) : e(o) ? function(e, t, n) {
            C(function(e) {
                var i = !1, r = function(e, t, n, i) {
                    try {
                        e.call(t, n, i);
                    } catch (e) {
                        return e;
                    }
                }(n, t, function(n) {
                    i || (i = !0, t !== n ? l(e, n) : c(e, n));
                }, function(t) {
                    i || (i = !0, f(e, t));
                }, e._label);
                !i && r && (i = !0, f(e, r));
            }, e);
        }(t, n, o) : c(t, n);
    }
    function l(e, t) {
        e === t ? f(e, new TypeError("You cannot resolve a promise with itself")) : function(e) {
            return "function" == typeof e || "object" == typeof e && null !== e;
        }(t) ? a(e, t, s(t)) : c(e, t);
    }
    function u(e) {
        e._onerror && e._onerror(e._result), d(e);
    }
    function c(e, t) {
        e._state === I && (e._result = t, e._state = j, 0 !== e._subscribers.length && C(d, e));
    }
    function f(e, t) {
        e._state === I && (e._state = D, e._result = t, C(u, e));
    }
    function h(e, t, n, i) {
        var r = e._subscribers, o = r.length;
        e._onerror = null, r[o] = t, r[o + j] = n, r[o + D] = i, 0 === o && e._state && C(d, e);
    }
    function d(e) {
        var t = e._subscribers, n = e._state;
        if (0 !== t.length) {
            for (var i = void 0, r = void 0, o = e._result, s = 0; s < t.length; s += 3) i = t[s], r = t[s + n], 
            i ? m(n, i, r, o) : r(o);
            e._subscribers.length = 0;
        }
    }
    function p() {
        this.error = null;
    }
    function m(t, n, i, r) {
        var o = e(i), s = void 0, a = void 0, u = void 0, h = void 0;
        if (o) {
            if ((s = function(e, t) {
                try {
                    return e(t);
                } catch (e) {
                    return M.error = e, M;
                }
            }(i, r)) === M ? (h = !0, a = s.error, s = null) : u = !0, n === s) return void f(n, new TypeError("A promises callback cannot return that same promise."));
        } else s = r, u = !0;
        n._state !== I || (o && u ? l(n, s) : h ? f(n, a) : t === j ? c(n, s) : t === D && f(n, s));
    }
    function v(e) {
        e[P] = H++, e._state = void 0, e._result = void 0, e._subscribers = [];
    }
    function g(e, t) {
        this._instanceConstructor = e, this.promise = new e(o), this.promise[P] || v(this.promise), b(t) ? (this._input = t, 
        this.length = t.length, this._remaining = t.length, this._result = new Array(this.length), 0 === this.length ? c(this.promise, this._result) : (this.length = this.length || 0, 
        this._enumerate(), 0 === this._remaining && c(this.promise, this._result))) : f(this.promise, new Error("Array Methods must be provided an Array"));
    }
    function y(e) {
        this[P] = H++, this._result = this._state = void 0, this._subscribers = [], o !== e && ("function" != typeof e && function() {
            throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
        }(), this instanceof y ? function(e, t) {
            try {
                t(function(t) {
                    l(e, t);
                }, function(t) {
                    f(e, t);
                });
            } catch (t) {
                f(e, t);
            }
        }(this, e) : function() {
            throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
        }());
    }
    var b = Array.isArray ? Array.isArray : function(e) {
        return "[object Array]" === Object.prototype.toString.call(e);
    }, _ = 0, w = void 0, x = void 0, C = function(e, t) {
        O[_] = e, O[_ + 1] = t, 2 === (_ += 2) && (x ? x(n) : N());
    }, k = "undefined" != typeof window ? window : void 0, T = k || {}, S = T.MutationObserver || T.WebKitMutationObserver, E = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process), A = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel, O = new Array(1e3), N = void 0;
    N = E ? function() {
        return process.nextTick(n);
    } : S ? function() {
        var e = 0, t = new S(n), i = document.createTextNode("");
        return t.observe(i, {
            characterData: !0
        }), function() {
            i.data = e = ++e % 2;
        };
    }() : A ? function() {
        var e = new MessageChannel();
        return e.port1.onmessage = n, function() {
            return e.port2.postMessage(0);
        };
    }() : void 0 === k && "function" == typeof require ? function() {
        try {
            var e = require("vertx");
            return void 0 !== (w = e.runOnLoop || e.runOnContext) ? function() {
                w(n);
            } : t();
        } catch (e) {
            return t();
        }
    }() : t();
    var P = Math.random().toString(36).substring(16), I = void 0, j = 1, D = 2, $ = new p(), M = new p(), H = 0;
    return g.prototype._enumerate = function() {
        for (var e = this.length, t = this._input, n = 0; this._state === I && n < e; n++) this._eachEntry(t[n], n);
    }, g.prototype._eachEntry = function(e, t) {
        var n = this._instanceConstructor, l = n.resolve;
        if (l === r) {
            var u = s(e);
            if (u === i && e._state !== I) this._settledAt(e._state, t, e._result); else if ("function" != typeof u) this._remaining--, 
            this._result[t] = e; else if (n === y) {
                var c = new n(o);
                a(c, e, u), this._willSettleAt(c, t);
            } else this._willSettleAt(new n(function(t) {
                return t(e);
            }), t);
        } else this._willSettleAt(l(e), t);
    }, g.prototype._settledAt = function(e, t, n) {
        var i = this.promise;
        i._state === I && (this._remaining--, e === D ? f(i, n) : this._result[t] = n), 0 === this._remaining && c(i, this._result);
    }, g.prototype._willSettleAt = function(e, t) {
        var n = this;
        h(e, void 0, function(e) {
            return n._settledAt(j, t, e);
        }, function(e) {
            return n._settledAt(D, t, e);
        });
    }, y.all = function(e) {
        return new g(this, e).promise;
    }, y.race = function(e) {
        var t = this;
        return new t(b(e) ? function(n, i) {
            for (var r = e.length, o = 0; o < r; o++) t.resolve(e[o]).then(n, i);
        } : function(e, t) {
            return t(new TypeError("You must pass an array to race."));
        });
    }, y.resolve = r, y.reject = function(e) {
        var t = new this(o);
        return f(t, e), t;
    }, y._setScheduler = function(e) {
        x = e;
    }, y._setAsap = function(e) {
        C = e;
    }, y._asap = C, y.prototype = {
        constructor: y,
        then: i,
        catch: function(e) {
            return this.then(null, e);
        }
    }, y.polyfill = function() {
        var e = void 0;
        if ("undefined" != typeof global) e = global; else if ("undefined" != typeof self) e = self; else try {
            e = Function("return this")();
        } catch (e) {
            throw new Error("polyfill failed because global object is unavailable in this environment");
        }
        var t = e.Promise;
        if (t) {
            var n = null;
            try {
                n = Object.prototype.toString.call(t.resolve());
            } catch (e) {}
            if ("[object Promise]" === n && !t.cast) return;
        }
        e.Promise = y;
    }, y.Promise = y, y;
});/*  Copyright (C) 2012-2014  Kurt Milam - http://xioup.com | Source: https://gist.github.com/1868955
 *  
 *  This mixin now has its own github repository: https://github.com/kurtmilam/underscoreDeepExtend
 *  It's also available through npm and bower
 *  
 *  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
**/