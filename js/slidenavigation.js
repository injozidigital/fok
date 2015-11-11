!function (e, t) {
    function n(e) {
        var t = e.length, n = ut.type(e);
        return ut.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function r(e) {
        var t = Nt[e] = {};
        return ut.each(e.match(ct) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    function i(e, n, r, i) {
        if (ut.acceptData(e)) {
            var o, a, s = ut.expando, u = "string" == typeof n, l = e.nodeType, c = l ? ut.cache : e, f = l ? e[s] : e[s] && s;
            if (f && c[f] && (i || c[f].data) || !u || r !== t)return f || (l ? e[s] = f = Z.pop() || ut.guid++ : f = s), c[f] || (c[f] = {}, l || (c[f].toJSON = ut.noop)), ("object" == typeof n || "function" == typeof n) && (i ? c[f] = ut.extend(c[f], n) : c[f].data = ut.extend(c[f].data, n)), o = c[f], i || (o.data || (o.data = {}), o = o.data), r !== t && (o[ut.camelCase(n)] = r), u ? (a = o[n], null == a && (a = o[ut.camelCase(n)])) : a = o, a
        }
    }

    function o(e, t, n) {
        if (ut.acceptData(e)) {
            var r, i, o, a = e.nodeType, u = a ? ut.cache : e, l = a ? e[ut.expando] : ut.expando;
            if (u[l]) {
                if (t && (o = n ? u[l] : u[l].data)) {
                    ut.isArray(t) ? t = t.concat(ut.map(t, ut.camelCase)) : t in o ? t = [t] : (t = ut.camelCase(t), t = t in o ? [t] : t.split(" "));
                    for (r = 0, i = t.length; i > r; r++)delete o[t[r]];
                    if (!(n ? s : ut.isEmptyObject)(o))return
                }
                (n || (delete u[l].data, s(u[l]))) && (a ? ut.cleanData([e], !0) : ut.support.deleteExpando || u != u.window ? delete u[l] : u[l] = null)
            }
        }
    }

    function a(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(kt, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : Ct.test(r) ? ut.parseJSON(r) : r
                } catch (o) {
                }
                ut.data(e, n, r)
            } else r = t
        }
        return r
    }

    function s(e) {
        var t;
        for (t in e)if (("data" !== t || !ut.isEmptyObject(e[t])) && "toJSON" !== t)return !1;
        return !0
    }

    function u() {
        return !0
    }

    function l() {
        return !1
    }

    function c(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    function f(e, t, n) {
        if (t = t || 0, ut.isFunction(t))return ut.grep(e, function (e, r) {
            var i = !!t.call(e, r, e);
            return i === n
        });
        if (t.nodeType)return ut.grep(e, function (e) {
            return e === t === n
        });
        if ("string" == typeof t) {
            var r = ut.grep(e, function (e) {
                return 1 === e.nodeType
            });
            if (It.test(t))return ut.filter(t, r, !n);
            t = ut.filter(t, r)
        }
        return ut.grep(e, function (e) {
            return ut.inArray(e, t) >= 0 === n
        })
    }

    function p(e) {
        var t = Ut.split("|"), n = e.createDocumentFragment();
        if (n.createElement)for (; t.length;)n.createElement(t.pop());
        return n
    }

    function d(e, t) {
        return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t))
    }

    function h(e) {
        var t = e.getAttributeNode("type");
        return e.type = (t && t.specified) + "/" + e.type, e
    }

    function g(e) {
        var t = on.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function m(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++)ut._data(n, "globalEval", !t || ut._data(t[r], "globalEval"))
    }

    function y(e, t) {
        if (1 === t.nodeType && ut.hasData(e)) {
            var n, r, i, o = ut._data(e), a = ut._data(t, o), s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)for (r = 0, i = s[n].length; i > r; r++)ut.event.add(t, n, s[n][r])
            }
            a.data && (a.data = ut.extend({}, a.data))
        }
    }

    function v(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !ut.support.noCloneEvent && t[ut.expando]) {
                i = ut._data(t);
                for (r in i.events)ut.removeEvent(t, r, i.handle);
                t.removeAttribute(ut.expando)
            }
            "script" === n && t.text !== e.text ? (h(t).text = e.text, g(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ut.support.html5Clone && e.innerHTML && !ut.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && tn.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    function b(e, n) {
        var r, i, o = 0, a = typeof e.getElementsByTagName !== V ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== V ? e.querySelectorAll(n || "*") : t;
        if (!a)for (a = [], r = e.childNodes || e; null != (i = r[o]); o++)!n || ut.nodeName(i, n) ? a.push(i) : ut.merge(a, b(i, n));
        return n === t || n && ut.nodeName(e, n) ? ut.merge([e], a) : a
    }

    function x(e) {
        tn.test(e.type) && (e.defaultChecked = e.checked)
    }

    function w(e, t) {
        if (t in e)return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = kn.length; i--;)if (t = kn[i] + n, t in e)return t;
        return r
    }

    function T(e, t) {
        return e = t || e, "none" === ut.css(e, "display") || !ut.contains(e.ownerDocument, e)
    }

    function N(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++)r = e[a], r.style && (o[a] = ut._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && T(r) && (o[a] = ut._data(r, "olddisplay", S(r.nodeName)))) : o[a] || (i = T(r), (n && "none" !== n || !i) && ut._data(r, "olddisplay", i ? n : ut.css(r, "display"))));
        for (a = 0; s > a; a++)r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }

    function C(e, t, n) {
        var r = vn.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function k(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2)"margin" === n && (a += ut.css(e, n + Cn[o], !0, i)), r ? ("content" === n && (a -= ut.css(e, "padding" + Cn[o], !0, i)), "margin" !== n && (a -= ut.css(e, "border" + Cn[o] + "Width", !0, i))) : (a += ut.css(e, "padding" + Cn[o], !0, i), "padding" !== n && (a += ut.css(e, "border" + Cn[o] + "Width", !0, i)));
        return a
    }

    function E(e, t, n) {
        var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = fn(e), a = ut.support.boxSizing && "border-box" === ut.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = pn(e, t, o), (0 > i || null == i) && (i = e.style[t]), bn.test(i))return i;
            r = a && (ut.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + k(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function S(e) {
        var t = Y, n = wn[e];
        return n || (n = A(e, t), "none" !== n && n || (cn = (cn || ut("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (cn[0].contentWindow || cn[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = A(e, t), cn.detach()), wn[e] = n), n
    }

    function A(e, t) {
        var n = ut(t.createElement(e)).appendTo(t.body), r = ut.css(n[0], "display");
        return n.remove(), r
    }

    function j(e, t, n, r) {
        var i;
        if (ut.isArray(t))ut.each(t, function (t, i) {
            n || Sn.test(e) ? r(e, i) : j(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        }); else if (n || "object" !== ut.type(t))r(e, t); else for (i in t)j(e + "[" + i + "]", t[i], n, r)
    }

    function D(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0, o = t.toLowerCase().match(ct) || [];
            if (ut.isFunction(n))for (; r = o[i++];)"+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function L(e, t, n, r) {
        function i(s) {
            var u;
            return o[s] = !0, ut.each(e[s] || [], function (e, s) {
                var l = s(t, n, r);
                return "string" != typeof l || a || o[l] ? a ? !(u = l) : void 0 : (t.dataTypes.unshift(l), i(l), !1)
            }), u
        }

        var o = {}, a = e === zn;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }

    function H(e, n) {
        var r, i, o = ut.ajaxSettings.flatOptions || {};
        for (i in n)n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
        return r && ut.extend(!0, e, r), e
    }

    function q(e, n, r) {
        var i, o, a, s, u = e.contents, l = e.dataTypes, c = e.responseFields;
        for (s in c)s in r && (n[c[s]] = r[s]);
        for (; "*" === l[0];)l.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
        if (o)for (s in u)if (u[s] && u[s].test(o)) {
            l.unshift(s);
            break
        }
        if (l[0]in r)a = l[0]; else {
            for (s in r) {
                if (!l[0] || e.converters[s + " " + l[0]]) {
                    a = s;
                    break
                }
                i || (i = s)
            }
            a = a || i
        }
        return a ? (a !== l[0] && l.unshift(a), r[a]) : void 0
    }

    function M(e, t) {
        var n, r, i, o, a = {}, s = 0, u = e.dataTypes.slice(), l = u[0];
        if (e.dataFilter && (t = e.dataFilter(t, e.dataType)), u[1])for (i in e.converters)a[i.toLowerCase()] = e.converters[i];
        for (; r = u[++s];)if ("*" !== r) {
            if ("*" !== l && l !== r) {
                if (i = a[l + " " + r] || a["* " + r], !i)for (n in a)if (o = n.split(" "), o[1] === r && (i = a[l + " " + o[0]] || a["* " + o[0]])) {
                    i === !0 ? i = a[n] : a[n] !== !0 && (r = o[0], u.splice(s--, 0, r));
                    break
                }
                if (i !== !0)if (i && e["throws"])t = i(t); else try {
                    t = i(t)
                } catch (c) {
                    return {state: "parsererror", error: i ? c : "No conversion from " + l + " to " + r}
                }
            }
            l = r
        }
        return {state: "success", data: t}
    }

    function _() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {
        }
    }

    function F() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {
        }
    }

    function O() {
        return setTimeout(function () {
            Zn = t
        }), Zn = ut.now()
    }

    function B(e, t) {
        ut.each(t, function (t, n) {
            for (var r = (or[t] || []).concat(or["*"]), i = 0, o = r.length; o > i; i++)if (r[i].call(e, t, n))return
        })
    }

    function P(e, t, n) {
        var r, i, o = 0, a = ir.length, s = ut.Deferred().always(function () {
            delete u.elem
        }), u = function () {
            if (i)return !1;
            for (var t = Zn || O(), n = Math.max(0, l.startTime + l.duration - t), r = n / l.duration || 0, o = 1 - r, a = 0, u = l.tweens.length; u > a; a++)l.tweens[a].run(o);
            return s.notifyWith(e, [l, o, n]), 1 > o && u ? n : (s.resolveWith(e, [l]), !1)
        }, l = s.promise({
            elem: e,
            props: ut.extend({}, t),
            opts: ut.extend(!0, {specialEasing: {}}, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Zn || O(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
                var r = ut.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
                return l.tweens.push(r), r
            },
            stop: function (t) {
                var n = 0, r = t ? l.tweens.length : 0;
                if (i)return this;
                for (i = !0; r > n; n++)l.tweens[n].run(1);
                return t ? s.resolveWith(e, [l, t]) : s.rejectWith(e, [l, t]), this
            }
        }), c = l.props;
        for (R(c, l.opts.specialEasing); a > o; o++)if (r = ir[o].call(l, e, c, l.opts))return r;
        return B(l, c), ut.isFunction(l.opts.start) && l.opts.start.call(e, l), ut.fx.timer(ut.extend(u, {
            elem: e,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function R(e, t) {
        var n, r, i, o, a;
        for (i in e)if (r = ut.camelCase(i), o = t[r], n = e[i], ut.isArray(n) && (o = n[1], n = e[i] = n[0]), i !== r && (e[r] = n, delete e[i]), a = ut.cssHooks[r], a && "expand"in a) {
            n = a.expand(n), delete e[r];
            for (i in n)i in e || (e[i] = n[i], t[i] = o)
        } else t[r] = o
    }

    function W(e, t, n) {
        var r, i, o, a, s, u, l, c, f, p = this, d = e.style, h = {}, g = [], m = e.nodeType && T(e);
        n.queue || (c = ut._queueHooks(e, "fx"), null == c.unqueued && (c.unqueued = 0, f = c.empty.fire, c.empty.fire = function () {
            c.unqueued || f()
        }), c.unqueued++, p.always(function () {
            p.always(function () {
                c.unqueued--, ut.queue(e, "fx").length || c.empty.fire()
            })
        })), 1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === ut.css(e, "display") && "none" === ut.css(e, "float") && (ut.support.inlineBlockNeedsLayout && "inline" !== S(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", ut.support.shrinkWrapBlocks || p.always(function () {
            d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
        }));
        for (i in t)if (a = t[i], tr.exec(a)) {
            if (delete t[i], u = u || "toggle" === a, a === (m ? "hide" : "show"))continue;
            g.push(i)
        }
        if (o = g.length) {
            s = ut._data(e, "fxshow") || ut._data(e, "fxshow", {}), "hidden"in s && (m = s.hidden), u && (s.hidden = !m), m ? ut(e).show() : p.done(function () {
                ut(e).hide()
            }), p.done(function () {
                var t;
                ut._removeData(e, "fxshow");
                for (t in h)ut.style(e, t, h[t])
            });
            for (i = 0; o > i; i++)r = g[i], l = p.createTween(r, m ? s[r] : 0), h[r] = s[r] || ut.style(e, r), r in s || (s[r] = l.start, m && (l.end = l.start, l.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function $(e, t, n, r, i) {
        return new $.prototype.init(e, t, n, r, i)
    }

    function I(e, t) {
        var n, r = {height: e}, i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t)n = Cn[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function z(e) {
        return ut.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }

    var X, U, V = typeof t, Y = e.document, J = e.location, G = e.jQuery, Q = e.$, K = {}, Z = [], et = "1.9.1", tt = Z.concat, nt = Z.push, rt = Z.slice, it = Z.indexOf, ot = K.toString, at = K.hasOwnProperty, st = et.trim, ut = function (e, t) {
        return new ut.fn.init(e, t, U)
    }, lt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ct = /\S+/g, ft = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, pt = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/, dt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, ht = /^[\],:{}\s]*$/, gt = /(?:^|:|,)(?:\s*\[)+/g, mt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, yt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, vt = /^-ms-/, bt = /-([\da-z])/gi, xt = function (e, t) {
        return t.toUpperCase()
    }, wt = function (e) {
        (Y.addEventListener || "load" === e.type || "complete" === Y.readyState) && (Tt(), ut.ready())
    }, Tt = function () {
        Y.addEventListener ? (Y.removeEventListener("DOMContentLoaded", wt, !1), e.removeEventListener("load", wt, !1)) : (Y.detachEvent("onreadystatechange", wt), e.detachEvent("onload", wt))
    };
    ut.fn = ut.prototype = {
        jquery: et, constructor: ut, init: function (e, n, r) {
            var i, o;
            if (!e)return this;
            if ("string" == typeof e) {
                if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : pt.exec(e), !i || !i[1] && n)return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
                if (i[1]) {
                    if (n = n instanceof ut ? n[0] : n, ut.merge(this, ut.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : Y, !0)), dt.test(i[1]) && ut.isPlainObject(n))for (i in n)ut.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                    return this
                }
                if (o = Y.getElementById(i[2]), o && o.parentNode) {
                    if (o.id !== i[2])return r.find(e);
                    this.length = 1, this[0] = o
                }
                return this.context = Y, this.selector = e, this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ut.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), ut.makeArray(e, this))
        }, selector: "", length: 0, size: function () {
            return this.length
        }, toArray: function () {
            return rt.call(this)
        }, get: function (e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        }, pushStack: function (e) {
            var t = ut.merge(this.constructor(), e);
            return t.prevObject = this, t.context = this.context, t
        }, each: function (e, t) {
            return ut.each(this, e, t)
        }, ready: function (e) {
            return ut.ready.promise().done(e), this
        }, slice: function () {
            return this.pushStack(rt.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (e) {
            var t = this.length, n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        }, map: function (e) {
            return this.pushStack(ut.map(this, function (t, n) {
                return e.call(t, n, t)
            }))
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: nt, sort: [].sort, splice: [].splice
    }, ut.fn.init.prototype = ut.fn, ut.extend = ut.fn.extend = function () {
        var e, n, r, i, o, a, s = arguments[0] || {}, u = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, u = 2), "object" == typeof s || ut.isFunction(s) || (s = {}), l === u && (s = this, --u); l > u; u++)if (null != (o = arguments[u]))for (i in o)e = s[i], r = o[i], s !== r && (c && r && (ut.isPlainObject(r) || (n = ut.isArray(r))) ? (n ? (n = !1, a = e && ut.isArray(e) ? e : []) : a = e && ut.isPlainObject(e) ? e : {}, s[i] = ut.extend(c, a, r)) : r !== t && (s[i] = r));
        return s
    }, ut.extend({
        noConflict: function (t) {
            return e.$ === ut && (e.$ = Q), t && e.jQuery === ut && (e.jQuery = G), ut
        }, isReady: !1, readyWait: 1, holdReady: function (e) {
            e ? ut.readyWait++ : ut.ready(!0)
        }, ready: function (e) {
            if (e === !0 ? !--ut.readyWait : !ut.isReady) {
                if (!Y.body)return setTimeout(ut.ready);
                ut.isReady = !0, e !== !0 && --ut.readyWait > 0 || (X.resolveWith(Y, [ut]), ut.fn.trigger && ut(Y).trigger("ready").off("ready"))
            }
        }, isFunction: function (e) {
            return "function" === ut.type(e)
        }, isArray: Array.isArray || function (e) {
            return "array" === ut.type(e)
        }, isWindow: function (e) {
            return null != e && e == e.window
        }, isNumeric: function (e) {
            return !isNaN(parseFloat(e)) && isFinite(e)
        }, type: function (e) {
            return null == e ? String(e) : "object" == typeof e || "function" == typeof e ? K[ot.call(e)] || "object" : typeof e
        }, isPlainObject: function (e) {
            if (!e || "object" !== ut.type(e) || e.nodeType || ut.isWindow(e))return !1;
            try {
                if (e.constructor && !at.call(e, "constructor") && !at.call(e.constructor.prototype, "isPrototypeOf"))return !1
            } catch (n) {
                return !1
            }
            var r;
            for (r in e);
            return r === t || at.call(e, r)
        }, isEmptyObject: function (e) {
            var t;
            for (t in e)return !1;
            return !0
        }, error: function (e) {
            throw new Error(e)
        }, parseHTML: function (e, t, n) {
            if (!e || "string" != typeof e)return null;
            "boolean" == typeof t && (n = t, t = !1), t = t || Y;
            var r = dt.exec(e), i = !n && [];
            return r ? [t.createElement(r[1])] : (r = ut.buildFragment([e], t, i), i && ut(i).remove(), ut.merge([], r.childNodes))
        }, parseJSON: function (t) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(t) : null === t ? t : "string" == typeof t && (t = ut.trim(t), t && ht.test(t.replace(mt, "@").replace(yt, "]").replace(gt, ""))) ? new Function("return " + t)() : void ut.error("Invalid JSON: " + t)
        }, parseXML: function (n) {
            var r, i;
            if (!n || "string" != typeof n)return null;
            try {
                e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
            } catch (o) {
                r = t
            }
            return r && r.documentElement && !r.getElementsByTagName("parsererror").length || ut.error("Invalid XML: " + n), r
        }, noop: function () {
        }, globalEval: function (t) {
            t && ut.trim(t) && (e.execScript || function (t) {
                e.eval.call(e, t)
            })(t)
        }, camelCase: function (e) {
            return e.replace(vt, "ms-").replace(bt, xt)
        }, nodeName: function (e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, each: function (e, t, r) {
            var i, o = 0, a = e.length, s = n(e);
            if (r) {
                if (s)for (; a > o && (i = t.apply(e[o], r), i !== !1); o++); else for (o in e)if (i = t.apply(e[o], r), i === !1)break
            } else if (s)for (; a > o && (i = t.call(e[o], o, e[o]), i !== !1); o++); else for (o in e)if (i = t.call(e[o], o, e[o]), i === !1)break;
            return e
        }, trim: st && !st.call("﻿ ") ? function (e) {
            return null == e ? "" : st.call(e)
        } : function (e) {
            return null == e ? "" : (e + "").replace(ft, "")
        }, makeArray: function (e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? ut.merge(r, "string" == typeof e ? [e] : e) : nt.call(r, e)), r
        }, inArray: function (e, t, n) {
            var r;
            if (t) {
                if (it)return it.call(t, e, n);
                for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)if (n in t && t[n] === e)return n
            }
            return -1
        }, merge: function (e, n) {
            var r = n.length, i = e.length, o = 0;
            if ("number" == typeof r)for (; r > o; o++)e[i++] = n[o]; else for (; n[o] !== t;)e[i++] = n[o++];
            return e.length = i, e
        }, grep: function (e, t, n) {
            var r, i = [], o = 0, a = e.length;
            for (n = !!n; a > o; o++)r = !!t(e[o], o), n !== r && i.push(e[o]);
            return i
        }, map: function (e, t, r) {
            var i, o = 0, a = e.length, s = n(e), u = [];
            if (s)for (; a > o; o++)i = t(e[o], o, r), null != i && (u[u.length] = i); else for (o in e)i = t(e[o], o, r), null != i && (u[u.length] = i);
            return tt.apply([], u)
        }, guid: 1, proxy: function (e, n) {
            var r, i, o;
            return "string" == typeof n && (o = e[n], n = e, e = o), ut.isFunction(e) ? (r = rt.call(arguments, 2), i = function () {
                return e.apply(n || this, r.concat(rt.call(arguments)))
            }, i.guid = e.guid = e.guid || ut.guid++, i) : t
        }, access: function (e, n, r, i, o, a, s) {
            var u = 0, l = e.length, c = null == r;
            if ("object" === ut.type(r)) {
                o = !0;
                for (u in r)ut.access(e, n, u, r[u], !0, a, s)
            } else if (i !== t && (o = !0, ut.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function (e, t, n) {
                    return c.call(ut(e), n)
                })), n))for (; l > u; u++)n(e[u], r, s ? i : i.call(e[u], u, n(e[u], r)));
            return o ? e : c ? n.call(e) : l ? n(e[0], r) : a
        }, now: function () {
            return (new Date).getTime()
        }
    }), ut.ready.promise = function (t) {
        if (!X)if (X = ut.Deferred(), "complete" === Y.readyState)setTimeout(ut.ready); else if (Y.addEventListener)Y.addEventListener("DOMContentLoaded", wt, !1), e.addEventListener("load", wt, !1); else {
            Y.attachEvent("onreadystatechange", wt), e.attachEvent("onload", wt);
            var n = !1;
            try {
                n = null == e.frameElement && Y.documentElement
            } catch (r) {
            }
            n && n.doScroll && !function i() {
                if (!ut.isReady) {
                    try {
                        n.doScroll("left")
                    } catch (e) {
                        return setTimeout(i, 50)
                    }
                    Tt(), ut.ready()
                }
            }()
        }
        return X.promise(t)
    }, ut.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        K["[object " + t + "]"] = t.toLowerCase()
    }), U = ut(Y);
    var Nt = {};
    ut.Callbacks = function (e) {
        e = "string" == typeof e ? Nt[e] || r(e) : ut.extend({}, e);
        var n, i, o, a, s, u, l = [], c = !e.once && [], f = function (t) {
            for (i = e.memory && t, o = !0, s = u || 0, u = 0, a = l.length, n = !0; l && a > s; s++)if (l[s].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                i = !1;
                break
            }
            n = !1, l && (c ? c.length && f(c.shift()) : i ? l = [] : p.disable())
        }, p = {
            add: function () {
                if (l) {
                    var t = l.length;
                    !function r(t) {
                        ut.each(t, function (t, n) {
                            var i = ut.type(n);
                            "function" === i ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== i && r(n)
                        })
                    }(arguments), n ? a = l.length : i && (u = t, f(i))
                }
                return this
            }, remove: function () {
                return l && ut.each(arguments, function (e, t) {
                    for (var r; (r = ut.inArray(t, l, r)) > -1;)l.splice(r, 1), n && (a >= r && a--, s >= r && s--)
                }), this
            }, has: function (e) {
                return e ? ut.inArray(e, l) > -1 : !(!l || !l.length)
            }, empty: function () {
                return l = [], this
            }, disable: function () {
                return l = c = i = t, this
            }, disabled: function () {
                return !l
            }, lock: function () {
                return c = t, i || p.disable(), this
            }, locked: function () {
                return !c
            }, fireWith: function (e, t) {
                return t = t || [], t = [e, t.slice ? t.slice() : t], !l || o && !c || (n ? c.push(t) : f(t)), this
            }, fire: function () {
                return p.fireWith(this, arguments), this
            }, fired: function () {
                return !!o
            }
        };
        return p
    }, ut.extend({
        Deferred: function (e) {
            var t = [["resolve", "done", ut.Callbacks("once memory"), "resolved"], ["reject", "fail", ut.Callbacks("once memory"), "rejected"], ["notify", "progress", ut.Callbacks("memory")]], n = "pending", r = {
                state: function () {
                    return n
                }, always: function () {
                    return i.done(arguments).fail(arguments), this
                }, then: function () {
                    var e = arguments;
                    return ut.Deferred(function (n) {
                        ut.each(t, function (t, o) {
                            var a = o[0], s = ut.isFunction(e[t]) && e[t];
                            i[o[1]](function () {
                                var e = s && s.apply(this, arguments);
                                e && ut.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                            })
                        }), e = null
                    }).promise()
                }, promise: function (e) {
                    return null != e ? ut.extend(e, r) : r
                }
            }, i = {};
            return r.pipe = r.then, ut.each(t, function (e, o) {
                var a = o[2], s = o[3];
                r[o[1]] = a.add, s && a.add(function () {
                    n = s
                }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
                    return i[o[0] + "With"](this === i ? r : this, arguments), this
                }, i[o[0] + "With"] = a.fireWith
            }), r.promise(i), e && e.call(i, i), i
        }, when: function (e) {
            var t, n, r, i = 0, o = rt.call(arguments), a = o.length, s = 1 !== a || e && ut.isFunction(e.promise) ? a : 0, u = 1 === s ? e : ut.Deferred(), l = function (e, n, r) {
                return function (i) {
                    n[e] = this, r[e] = arguments.length > 1 ? rt.call(arguments) : i, r === t ? u.notifyWith(n, r) : --s || u.resolveWith(n, r)
                }
            };
            if (a > 1)for (t = new Array(a), n = new Array(a), r = new Array(a); a > i; i++)o[i] && ut.isFunction(o[i].promise) ? o[i].promise().done(l(i, r, o)).fail(u.reject).progress(l(i, n, t)) : --s;
            return s || u.resolveWith(r, o), u.promise()
        }
    }), ut.support = function () {
        var t, n, r, i, o, a, s, u, l, c, f = Y.createElement("div");
        if (f.setAttribute("className", "t"), f.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = f.getElementsByTagName("*"), r = f.getElementsByTagName("a")[0], !n || !r || !n.length)return {};
        o = Y.createElement("select"), s = o.appendChild(Y.createElement("option")), i = f.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t = {
            getSetAttribute: "t" !== f.className,
            leadingWhitespace: 3 === f.firstChild.nodeType,
            tbody: !f.getElementsByTagName("tbody").length,
            htmlSerialize: !!f.getElementsByTagName("link").length,
            style: /top/.test(r.getAttribute("style")),
            hrefNormalized: "/a" === r.getAttribute("href"),
            opacity: /^0.5/.test(r.style.opacity),
            cssFloat: !!r.style.cssFloat,
            checkOn: !!i.value,
            optSelected: s.selected,
            enctype: !!Y.createElement("form").enctype,
            html5Clone: "<:nav></:nav>" !== Y.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === Y.compatMode,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1
        }, i.checked = !0, t.noCloneChecked = i.cloneNode(!0).checked, o.disabled = !0, t.optDisabled = !s.disabled;
        try {
            delete f.test
        } catch (p) {
            t.deleteExpando = !1
        }
        i = Y.createElement("input"), i.setAttribute("value", ""), t.input = "" === i.getAttribute("value"), i.value = "t", i.setAttribute("type", "radio"), t.radioValue = "t" === i.value, i.setAttribute("checked", "t"), i.setAttribute("name", "t"), a = Y.createDocumentFragment(), a.appendChild(i), t.appendChecked = i.checked, t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, f.attachEvent && (f.attachEvent("onclick", function () {
            t.noCloneEvent = !1
        }), f.cloneNode(!0).click());
        for (c in{
            submit: !0,
            change: !0,
            focusin: !0
        })f.setAttribute(u = "on" + c, "t"), t[c + "Bubbles"] = u in e || f.attributes[u].expando === !1;
        return f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === f.style.backgroundClip, ut(function () {
            var n, r, i, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", a = Y.getElementsByTagName("body")[0];
            a && (n = Y.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(f), f.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = f.getElementsByTagName("td"), i[0].style.cssText = "padding:0;margin:0;border:0;display:none", l = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", t.reliableHiddenOffsets = l && 0 === i[0].offsetHeight, f.innerHTML = "", f.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = 4 === f.offsetWidth, t.doesNotIncludeMarginInBodyOffset = 1 !== a.offsetTop, e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(f, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(f, null) || {width: "4px"}).width, r = f.appendChild(Y.createElement("div")), r.style.cssText = f.style.cssText = o, r.style.marginRight = r.style.width = "0", f.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof f.style.zoom !== V && (f.innerHTML = "", f.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === f.offsetWidth, f.style.display = "block", f.innerHTML = "<div></div>", f.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== f.offsetWidth, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(n), n = f = i = r = null)
        }), n = o = a = s = r = i = null, t
    }();
    var Ct = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, kt = /([A-Z])/g;
    ut.extend({
        cache: {},
        expando: "jQuery" + (et + Math.random()).replace(/\D/g, ""),
        noData: {embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0},
        hasData: function (e) {
            return e = e.nodeType ? ut.cache[e[ut.expando]] : e[ut.expando], !!e && !s(e)
        },
        data: function (e, t, n) {
            return i(e, t, n)
        },
        removeData: function (e, t) {
            return o(e, t)
        },
        _data: function (e, t, n) {
            return i(e, t, n, !0)
        },
        _removeData: function (e, t) {
            return o(e, t, !0)
        },
        acceptData: function (e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType)return !1;
            var t = e.nodeName && ut.noData[e.nodeName.toLowerCase()];
            return !t || t !== !0 && e.getAttribute("classid") === t
        }
    }), ut.fn.extend({
        data: function (e, n) {
            var r, i, o = this[0], s = 0, u = null;
            if (e === t) {
                if (this.length && (u = ut.data(o), 1 === o.nodeType && !ut._data(o, "parsedAttrs"))) {
                    for (r = o.attributes; s < r.length; s++)i = r[s].name, i.indexOf("data-") || (i = ut.camelCase(i.slice(5)), a(o, i, u[i]));
                    ut._data(o, "parsedAttrs", !0)
                }
                return u
            }
            return "object" == typeof e ? this.each(function () {
                ut.data(this, e)
            }) : ut.access(this, function (n) {
                return n === t ? o ? a(o, e, ut.data(o, e)) : null : void this.each(function () {
                    ut.data(this, e, n)
                })
            }, null, n, arguments.length > 1, null, !0)
        }, removeData: function (e) {
            return this.each(function () {
                ut.removeData(this, e)
            })
        }
    }), ut.extend({
        queue: function (e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue", r = ut._data(e, t), n && (!r || ut.isArray(n) ? r = ut._data(e, t, ut.makeArray(n)) : r.push(n)), r || []) : void 0
        }, dequeue: function (e, t) {
            t = t || "fx";
            var n = ut.queue(e, t), r = n.length, i = n.shift(), o = ut._queueHooks(e, t), a = function () {
                ut.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(), r--), o.cur = i, i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        }, _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return ut._data(e, n) || ut._data(e, n, {
                    empty: ut.Callbacks("once memory").add(function () {
                        ut._removeData(e, t + "queue"), ut._removeData(e, n)
                    })
                })
        }
    }), ut.fn.extend({
        queue: function (e, n) {
            var r = 2;
            return "string" != typeof e && (n = e, e = "fx", r--), arguments.length < r ? ut.queue(this[0], e) : n === t ? this : this.each(function () {
                var t = ut.queue(this, e, n);
                ut._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && ut.dequeue(this, e)
            })
        }, dequeue: function (e) {
            return this.each(function () {
                ut.dequeue(this, e)
            })
        }, delay: function (e, t) {
            return e = ut.fx ? ut.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
                var r = setTimeout(t, e);
                n.stop = function () {
                    clearTimeout(r)
                }
            })
        }, clearQueue: function (e) {
            return this.queue(e || "fx", [])
        }, promise: function (e, n) {
            var r, i = 1, o = ut.Deferred(), a = this, s = this.length, u = function () {
                --i || o.resolveWith(a, [a])
            };
            for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--;)r = ut._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(u));
            return u(), o.promise(n)
        }
    });
    var Et, St, At = /[\t\r\n]/g, jt = /\r/g, Dt = /^(?:input|select|textarea|button|object)$/i, Lt = /^(?:a|area)$/i, Ht = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i, qt = /^(?:checked|selected)$/i, Mt = ut.support.getSetAttribute, _t = ut.support.input;
    ut.fn.extend({
        attr: function (e, t) {
            return ut.access(this, ut.attr, e, t, arguments.length > 1)
        }, removeAttr: function (e) {
            return this.each(function () {
                ut.removeAttr(this, e)
            })
        }, prop: function (e, t) {
            return ut.access(this, ut.prop, e, t, arguments.length > 1)
        }, removeProp: function (e) {
            return e = ut.propFix[e] || e, this.each(function () {
                try {
                    this[e] = t, delete this[e]
                } catch (n) {
                }
            })
        }, addClass: function (e) {
            var t, n, r, i, o, a = 0, s = this.length, u = "string" == typeof e && e;
            if (ut.isFunction(e))return this.each(function (t) {
                ut(this).addClass(e.call(this, t, this.className))
            });
            if (u)for (t = (e || "").match(ct) || []; s > a; a++)if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(At, " ") : " ")) {
                for (o = 0; i = t[o++];)r.indexOf(" " + i + " ") < 0 && (r += i + " ");
                n.className = ut.trim(r)
            }
            return this
        }, removeClass: function (e) {
            var t, n, r, i, o, a = 0, s = this.length, u = 0 === arguments.length || "string" == typeof e && e;
            if (ut.isFunction(e))return this.each(function (t) {
                ut(this).removeClass(e.call(this, t, this.className))
            });
            if (u)for (t = (e || "").match(ct) || []; s > a; a++)if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(At, " ") : "")) {
                for (o = 0; i = t[o++];)for (; r.indexOf(" " + i + " ") >= 0;)r = r.replace(" " + i + " ", " ");
                n.className = e ? ut.trim(r) : ""
            }
            return this
        }, toggleClass: function (e, t) {
            var n = typeof e, r = "boolean" == typeof t;
            return this.each(ut.isFunction(e) ? function (n) {
                ut(this).toggleClass(e.call(this, n, this.className, t), t)
            } : function () {
                if ("string" === n)for (var i, o = 0, a = ut(this), s = t, u = e.match(ct) || []; i = u[o++];)s = r ? s : !a.hasClass(i), a[s ? "addClass" : "removeClass"](i); else(n === V || "boolean" === n) && (this.className && ut._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : ut._data(this, "__className__") || "")
            })
        }, hasClass: function (e) {
            for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++)if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(At, " ").indexOf(t) >= 0)return !0;
            return !1
        }, val: function (e) {
            var n, r, i, o = this[0];
            {
                if (arguments.length)return i = ut.isFunction(e), this.each(function (n) {
                    var o, a = ut(this);
                    1 === this.nodeType && (o = i ? e.call(this, n, a.val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : ut.isArray(o) && (o = ut.map(o, function (e) {
                        return null == e ? "" : e + ""
                    })), r = ut.valHooks[this.type] || ut.valHooks[this.nodeName.toLowerCase()], r && "set"in r && r.set(this, o, "value") !== t || (this.value = o))
                });
                if (o)return r = ut.valHooks[o.type] || ut.valHooks[o.nodeName.toLowerCase()], r && "get"in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(jt, "") : null == n ? "" : n)
            }
        }
    }), ut.extend({
        valHooks: {
            option: {
                get: function (e) {
                    var t = e.attributes.value;
                    return !t || t.specified ? e.value : e.text
                }
            }, select: {
                get: function (e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, u = 0 > i ? s : o ? i : 0; s > u; u++)if (n = r[u], !(!n.selected && u !== i || (ut.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ut.nodeName(n.parentNode, "optgroup"))) {
                        if (t = ut(n).val(), o)return t;
                        a.push(t)
                    }
                    return a
                }, set: function (e, t) {
                    var n = ut.makeArray(t);
                    return ut(e).find("option").each(function () {
                        this.selected = ut.inArray(ut(this).val(), n) >= 0
                    }), n.length || (e.selectedIndex = -1), n
                }
            }
        },
        attr: function (e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s)return typeof e.getAttribute === V ? ut.prop(e, n, r) : (o = 1 !== s || !ut.isXMLDoc(e), o && (n = n.toLowerCase(), i = ut.attrHooks[n] || (Ht.test(n) ? St : Et)), r === t ? i && o && "get"in i && null !== (a = i.get(e, n)) ? a : (typeof e.getAttribute !== V && (a = e.getAttribute(n)), null == a ? t : a) : null !== r ? i && o && "set"in i && (a = i.set(e, r, n)) !== t ? a : (e.setAttribute(n, r + ""), r) : void ut.removeAttr(e, n))
        },
        removeAttr: function (e, t) {
            var n, r, i = 0, o = t && t.match(ct);
            if (o && 1 === e.nodeType)for (; n = o[i++];)r = ut.propFix[n] || n, Ht.test(n) ? !Mt && qt.test(n) ? e[ut.camelCase("default-" + n)] = e[r] = !1 : e[r] = !1 : ut.attr(e, n, ""), e.removeAttribute(Mt ? n : r)
        },
        attrHooks: {
            type: {
                set: function (e, t) {
                    if (!ut.support.radioValue && "radio" === t && ut.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        propFix: {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        prop: function (e, n, r) {
            var i, o, a, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s)return a = 1 !== s || !ut.isXMLDoc(e), a && (n = ut.propFix[n] || n, o = ut.propHooks[n]), r !== t ? o && "set"in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get"in o && null !== (i = o.get(e, n)) ? i : e[n]
        },
        propHooks: {
            tabIndex: {
                get: function (e) {
                    var n = e.getAttributeNode("tabindex");
                    return n && n.specified ? parseInt(n.value, 10) : Dt.test(e.nodeName) || Lt.test(e.nodeName) && e.href ? 0 : t
                }
            }
        }
    }), St = {
        get: function (e, n) {
            var r = ut.prop(e, n), i = "boolean" == typeof r && e.getAttribute(n), o = "boolean" == typeof r ? _t && Mt ? null != i : qt.test(n) ? e[ut.camelCase("default-" + n)] : !!i : e.getAttributeNode(n);
            return o && o.value !== !1 ? n.toLowerCase() : t
        }, set: function (e, t, n) {
            return t === !1 ? ut.removeAttr(e, n) : _t && Mt || !qt.test(n) ? e.setAttribute(!Mt && ut.propFix[n] || n, n) : e[ut.camelCase("default-" + n)] = e[n] = !0, n
        }
    }, _t && Mt || (ut.attrHooks.value = {
        get: function (e, n) {
            var r = e.getAttributeNode(n);
            return ut.nodeName(e, "input") ? e.defaultValue : r && r.specified ? r.value : t
        }, set: function (e, t, n) {
            return ut.nodeName(e, "input") ? void(e.defaultValue = t) : Et && Et.set(e, t, n)
        }
    }), Mt || (Et = ut.valHooks.button = {
        get: function (e, n) {
            var r = e.getAttributeNode(n);
            return r && ("id" === n || "name" === n || "coords" === n ? "" !== r.value : r.specified) ? r.value : t
        }, set: function (e, n, r) {
            var i = e.getAttributeNode(r);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
        }
    }, ut.attrHooks.contenteditable = {
        get: Et.get, set: function (e, t, n) {
            Et.set(e, "" === t ? !1 : t, n)
        }
    }, ut.each(["width", "height"], function (e, t) {
        ut.attrHooks[t] = ut.extend(ut.attrHooks[t], {
            set: function (e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        })
    })), ut.support.hrefNormalized || (ut.each(["href", "src", "width", "height"], function (e, n) {
        ut.attrHooks[n] = ut.extend(ut.attrHooks[n], {
            get: function (e) {
                var r = e.getAttribute(n, 2);
                return null == r ? t : r
            }
        })
    }), ut.each(["href", "src"], function (e, t) {
        ut.propHooks[t] = {
            get: function (e) {
                return e.getAttribute(t, 4)
            }
        }
    })), ut.support.style || (ut.attrHooks.style = {
        get: function (e) {
            return e.style.cssText || t
        }, set: function (e, t) {
            return e.style.cssText = t + ""
        }
    }), ut.support.optSelected || (ut.propHooks.selected = ut.extend(ut.propHooks.selected, {
        get: function (e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
        }
    })), ut.support.enctype || (ut.propFix.enctype = "encoding"), ut.support.checkOn || ut.each(["radio", "checkbox"], function () {
        ut.valHooks[this] = {
            get: function (e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }
        }
    }), ut.each(["radio", "checkbox"], function () {
        ut.valHooks[this] = ut.extend(ut.valHooks[this], {
            set: function (e, t) {
                return ut.isArray(t) ? e.checked = ut.inArray(ut(e).val(), t) >= 0 : void 0
            }
        })
    });
    var Ft = /^(?:input|select|textarea)$/i, Ot = /^key/, Bt = /^(?:mouse|contextmenu)|click/, Pt = /^(?:focusinfocus|focusoutblur)$/, Rt = /^([^.]*)(?:\.(.+)|)$/;
    ut.event = {
        global: {},
        add: function (e, n, r, i, o) {
            var a, s, u, l, c, f, p, d, h, g, m, y = ut._data(e);
            if (y) {
                for (r.handler && (l = r, r = l.handler, o = l.selector), r.guid || (r.guid = ut.guid++), (s = y.events) || (s = y.events = {}), (f = y.handle) || (f = y.handle = function (e) {
                    return typeof ut === V || e && ut.event.triggered === e.type ? t : ut.event.dispatch.apply(f.elem, arguments)
                }, f.elem = e), n = (n || "").match(ct) || [""], u = n.length; u--;)a = Rt.exec(n[u]) || [], h = m = a[1], g = (a[2] || "").split(".").sort(), c = ut.event.special[h] || {}, h = (o ? c.delegateType : c.bindType) || h, c = ut.event.special[h] || {}, p = ut.extend({
                    type: h,
                    origType: m,
                    data: i,
                    handler: r,
                    guid: r.guid,
                    selector: o,
                    needsContext: o && ut.expr.match.needsContext.test(o),
                    namespace: g.join(".")
                }, l), (d = s[h]) || (d = s[h] = [], d.delegateCount = 0, c.setup && c.setup.call(e, i, g, f) !== !1 || (e.addEventListener ? e.addEventListener(h, f, !1) : e.attachEvent && e.attachEvent("on" + h, f))), c.add && (c.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), o ? d.splice(d.delegateCount++, 0, p) : d.push(p), ut.event.global[h] = !0;
                e = null
            }
        },
        remove: function (e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, m = ut.hasData(e) && ut._data(e);
            if (m && (c = m.events)) {
                for (t = (t || "").match(ct) || [""], l = t.length; l--;)if (s = Rt.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                    for (f = ut.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, p = c[d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), u = o = p.length; o--;)a = p[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (p.splice(o, 1), a.selector && p.delegateCount--, f.remove && f.remove.call(e, a));
                    u && !p.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || ut.removeEvent(e, d, m.handle), delete c[d])
                } else for (d in c)ut.event.remove(e, d + t[l], n, r, !0);
                ut.isEmptyObject(c) && (delete m.handle, ut._removeData(e, "events"))
            }
        },
        trigger: function (n, r, i, o) {
            var a, s, u, l, c, f, p, d = [i || Y], h = at.call(n, "type") ? n.type : n, g = at.call(n, "namespace") ? n.namespace.split(".") : [];
            if (u = f = i = i || Y, 3 !== i.nodeType && 8 !== i.nodeType && !Pt.test(h + ut.event.triggered) && (h.indexOf(".") >= 0 && (g = h.split("."), h = g.shift(), g.sort()), s = h.indexOf(":") < 0 && "on" + h, n = n[ut.expando] ? n : new ut.Event(h, "object" == typeof n && n), n.isTrigger = !0, n.namespace = g.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : ut.makeArray(r, [n]), c = ut.event.special[h] || {}, o || !c.trigger || c.trigger.apply(i, r) !== !1)) {
                if (!o && !c.noBubble && !ut.isWindow(i)) {
                    for (l = c.delegateType || h, Pt.test(l + h) || (u = u.parentNode); u; u = u.parentNode)d.push(u), f = u;
                    f === (i.ownerDocument || Y) && d.push(f.defaultView || f.parentWindow || e)
                }
                for (p = 0; (u = d[p++]) && !n.isPropagationStopped();)n.type = p > 1 ? l : c.bindType || h, a = (ut._data(u, "events") || {})[n.type] && ut._data(u, "handle"), a && a.apply(u, r), a = s && u[s], a && ut.acceptData(u) && a.apply && a.apply(u, r) === !1 && n.preventDefault();
                if (n.type = h, !(o || n.isDefaultPrevented() || c._default && c._default.apply(i.ownerDocument, r) !== !1 || "click" === h && ut.nodeName(i, "a") || !ut.acceptData(i) || !s || !i[h] || ut.isWindow(i))) {
                    f = i[s], f && (i[s] = null), ut.event.triggered = h;
                    try {
                        i[h]()
                    } catch (m) {
                    }
                    ut.event.triggered = t, f && (i[s] = f)
                }
                return n.result
            }
        },
        dispatch: function (e) {
            e = ut.event.fix(e);
            var n, r, i, o, a, s = [], u = rt.call(arguments), l = (ut._data(this, "events") || {})[e.type] || [], c = ut.event.special[e.type] || {};
            if (u[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (s = ut.event.handlers.call(this, e, l), n = 0; (o = s[n++]) && !e.isPropagationStopped();)for (e.currentTarget = o.elem, a = 0; (i = o.handlers[a++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((ut.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, u), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e), e.result
            }
        },
        handlers: function (e, n) {
            var r, i, o, a, s = [], u = n.delegateCount, l = e.target;
            if (u && l.nodeType && (!e.button || "click" !== e.type))for (; l != this; l = l.parentNode || this)if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                for (o = [], a = 0; u > a; a++)i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? ut(r, this).index(l) >= 0 : ut.find(r, this, null, [l]).length), o[r] && o.push(i);
                o.length && s.push({elem: l, handlers: o})
            }
            return u < n.length && s.push({elem: this, handlers: n.slice(u)}), s
        },
        fix: function (e) {
            if (e[ut.expando])return e;
            var t, n, r, i = e.type, o = e, a = this.fixHooks[i];
            for (a || (this.fixHooks[i] = a = Bt.test(i) ? this.mouseHooks : Ot.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new ut.Event(o), t = r.length; t--;)n = r[t], e[n] = o[n];
            return e.target || (e.target = o.srcElement || Y), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (e, n) {
                var r, i, o, a = n.button, s = n.fromElement;
                return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || Y, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s), e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
            }
        },
        special: {
            load: {noBubble: !0}, click: {
                trigger: function () {
                    return ut.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                }
            }, focus: {
                trigger: function () {
                    if (this !== Y.activeElement && this.focus)try {
                        return this.focus(), !1
                    } catch (e) {
                    }
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === Y.activeElement && this.blur ? (this.blur(), !1) : void 0
                }, delegateType: "focusout"
            }, beforeunload: {
                postDispatch: function (e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function (e, t, n, r) {
            var i = ut.extend(new ut.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
            r ? ut.event.trigger(i, null, t) : ut.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
        }
    }, ut.removeEvent = Y.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === V && (e[r] = null), e.detachEvent(r, n))
    }, ut.Event = function (e, t) {
        return this instanceof ut.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? u : l) : this.type = e, t && ut.extend(this, t), this.timeStamp = e && e.timeStamp || ut.now(), void(this[ut.expando] = !0)) : new ut.Event(e, t)
    }, ut.Event.prototype = {
        isDefaultPrevented: l,
        isPropagationStopped: l,
        isImmediatePropagationStopped: l,
        preventDefault: function () {
            var e = this.originalEvent;
            this.isDefaultPrevented = u, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function () {
            var e = this.originalEvent;
            this.isPropagationStopped = u, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            this.isImmediatePropagationStopped = u, this.stopPropagation()
        }
    }, ut.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (e, t) {
        ut.event.special[e] = {
            delegateType: t, bindType: t, handle: function (e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return (!i || i !== r && !ut.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), ut.support.submitBubbles || (ut.event.special.submit = {
        setup: function () {
            return ut.nodeName(this, "form") ? !1 : void ut.event.add(this, "click._submit keypress._submit", function (e) {
                var n = e.target, r = ut.nodeName(n, "input") || ut.nodeName(n, "button") ? n.form : t;
                r && !ut._data(r, "submitBubbles") && (ut.event.add(r, "submit._submit", function (e) {
                    e._submit_bubble = !0
                }), ut._data(r, "submitBubbles", !0))
            })
        }, postDispatch: function (e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ut.event.simulate("submit", this.parentNode, e, !0))
        }, teardown: function () {
            return ut.nodeName(this, "form") ? !1 : void ut.event.remove(this, "._submit")
        }
    }), ut.support.changeBubbles || (ut.event.special.change = {
        setup: function () {
            return Ft.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ut.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), ut.event.add(this, "click._change", function (e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1), ut.event.simulate("change", this, e, !0)
            })), !1) : void ut.event.add(this, "beforeactivate._change", function (e) {
                var t = e.target;
                Ft.test(t.nodeName) && !ut._data(t, "changeBubbles") && (ut.event.add(t, "change._change", function (e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || ut.event.simulate("change", this.parentNode, e, !0)
                }), ut._data(t, "changeBubbles", !0))
            })
        }, handle: function (e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        }, teardown: function () {
            return ut.event.remove(this, "._change"), !Ft.test(this.nodeName)
        }
    }), ut.support.focusinBubbles || ut.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = 0, r = function (e) {
            ut.event.simulate(t, e.target, ut.event.fix(e), !0)
        };
        ut.event.special[t] = {
            setup: function () {
                0 === n++ && Y.addEventListener(e, r, !0)
            }, teardown: function () {
                0 === --n && Y.removeEventListener(e, r, !0)
            }
        }
    }), ut.fn.extend({
        on: function (e, n, r, i, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = t);
                for (a in e)this.on(a, n, r, e[a], o);
                return this
            }
            if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1)i = l; else if (!i)return this;
            return 1 === o && (s = i, i = function (e) {
                return ut().off(e), s.apply(this, arguments)
            }, i.guid = s.guid || (s.guid = ut.guid++)), this.each(function () {
                ut.event.add(this, e, i, r, n)
            })
        }, one: function (e, t, n, r) {
            return this.on(e, t, n, r, 1)
        }, off: function (e, n, r) {
            var i, o;
            if (e && e.preventDefault && e.handleObj)return i = e.handleObj, ut(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof e) {
                for (o in e)this.off(o, n, e[o]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = l), this.each(function () {
                ut.event.remove(this, e, r, n)
            })
        }, bind: function (e, t, n) {
            return this.on(e, null, t, n)
        }, unbind: function (e, t) {
            return this.off(e, null, t)
        }, delegate: function (e, t, n, r) {
            return this.on(t, e, n, r)
        }, undelegate: function (e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }, trigger: function (e, t) {
            return this.each(function () {
                ut.event.trigger(e, t, this)
            })
        }, triggerHandler: function (e, t) {
            var n = this[0];
            return n ? ut.event.trigger(e, t, n, !0) : void 0
        }
    }), function (e, t) {
        function n(e) {
            return ht.test(e + "")
        }

        function r() {
            var e, t = [];
            return e = function (n, r) {
                return t.push(n += " ") > C.cacheLength && delete e[t.shift()], e[n] = r
            }
        }

        function i(e) {
            return e[P] = !0, e
        }

        function o(e) {
            var t = L.createElement("div");
            try {
                return e(t)
            } catch (n) {
                return !1
            } finally {
                t = null
            }
        }

        function a(e, t, n, r) {
            var i, o, a, s, u, l, c, d, h, g;
            if ((t ? t.ownerDocument || t : R) !== L && D(t), t = t || L, n = n || [], !e || "string" != typeof e)return n;
            if (1 !== (s = t.nodeType) && 9 !== s)return [];
            if (!q && !r) {
                if (i = gt.exec(e))if (a = i[1]) {
                    if (9 === s) {
                        if (o = t.getElementById(a), !o || !o.parentNode)return n;
                        if (o.id === a)return n.push(o), n
                    } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && O(t, o) && o.id === a)return n.push(o), n
                } else {
                    if (i[2])return Q.apply(n, K.call(t.getElementsByTagName(e), 0)), n;
                    if ((a = i[3]) && W.getByClassName && t.getElementsByClassName)return Q.apply(n, K.call(t.getElementsByClassName(a), 0)), n
                }
                if (W.qsa && !M.test(e)) {
                    if (c = !0, d = P, h = t, g = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
                        for (l = f(e), (c = t.getAttribute("id")) ? d = c.replace(vt, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", u = l.length; u--;)l[u] = d + p(l[u]);
                        h = dt.test(e) && t.parentNode || t, g = l.join(",")
                    }
                    if (g)try {
                        return Q.apply(n, K.call(h.querySelectorAll(g), 0)), n
                    } catch (m) {
                    } finally {
                        c || t.removeAttribute("id")
                    }
                }
            }
            return x(e.replace(at, "$1"), t, n, r)
        }

        function s(e, t) {
            var n = t && e, r = n && (~t.sourceIndex || Y) - (~e.sourceIndex || Y);
            if (r)return r;
            if (n)for (; n = n.nextSibling;)if (n === t)return -1;
            return e ? 1 : -1
        }

        function u(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }

        function l(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }

        function c(e) {
            return i(function (t) {
                return t = +t, i(function (n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;)n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function f(e, t) {
            var n, r, i, o, s, u, l, c = X[e + " "];
            if (c)return t ? 0 : c.slice(0);
            for (s = e, u = [], l = C.preFilter; s;) {
                (!n || (r = st.exec(s))) && (r && (s = s.slice(r[0].length) || s), u.push(i = [])), n = !1, (r = lt.exec(s)) && (n = r.shift(), i.push({
                    value: n,
                    type: r[0].replace(at, " ")
                }), s = s.slice(n.length));
                for (o in C.filter)!(r = pt[o].exec(s)) || l[o] && !(r = l[o](r)) || (n = r.shift(), i.push({
                    value: n,
                    type: o,
                    matches: r
                }), s = s.slice(n.length));
                if (!n)break
            }
            return t ? s.length : s ? a.error(e) : X(e, u).slice(0)
        }

        function p(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++)r += e[t].value;
            return r
        }

        function d(e, t, n) {
            var r = t.dir, i = n && "parentNode" === r, o = I++;
            return t.first ? function (t, n, o) {
                for (; t = t[r];)if (1 === t.nodeType || i)return e(t, n, o)
            } : function (t, n, a) {
                var s, u, l, c = $ + " " + o;
                if (a) {
                    for (; t = t[r];)if ((1 === t.nodeType || i) && e(t, n, a))return !0
                } else for (; t = t[r];)if (1 === t.nodeType || i)if (l = t[P] || (t[P] = {}), (u = l[r]) && u[0] === c) {
                    if ((s = u[1]) === !0 || s === N)return s === !0
                } else if (u = l[r] = [c], u[1] = e(t, n, a) || N, u[1] === !0)return !0
            }
        }

        function h(e) {
            return e.length > 1 ? function (t, n, r) {
                for (var i = e.length; i--;)if (!e[i](t, n, r))return !1;
                return !0
            } : e[0]
        }

        function g(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; u > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), l && t.push(s));
            return a
        }

        function m(e, t, n, r, o, a) {
            return r && !r[P] && (r = m(r)), o && !o[P] && (o = m(o, a)), i(function (i, a, s, u) {
                var l, c, f, p = [], d = [], h = a.length, m = i || b(t || "*", s.nodeType ? [s] : s, []), y = !e || !i && t ? m : g(m, p, e, s, u), v = n ? o || (i ? e : h || r) ? [] : a : y;
                if (n && n(y, v, s, u), r)for (l = g(v, d), r(l, [], s, u), c = l.length; c--;)(f = l[c]) && (v[d[c]] = !(y[d[c]] = f));
                if (i) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = v.length; c--;)(f = v[c]) && l.push(y[c] = f);
                            o(null, v = [], l, u)
                        }
                        for (c = v.length; c--;)(f = v[c]) && (l = o ? Z.call(i, f) : p[c]) > -1 && (i[l] = !(a[l] = f))
                    }
                } else v = g(v === a ? v.splice(h, v.length) : v), o ? o(null, a, v, u) : Q.apply(a, v)
            })
        }

        function y(e) {
            for (var t, n, r, i = e.length, o = C.relative[e[0].type], a = o || C.relative[" "], s = o ? 1 : 0, u = d(function (e) {
                return e === t
            }, a, !0), l = d(function (e) {
                return Z.call(t, e) > -1
            }, a, !0), c = [function (e, n, r) {
                return !o && (r || n !== j) || ((t = n).nodeType ? u(e, n, r) : l(e, n, r))
            }]; i > s; s++)if (n = C.relative[e[s].type])c = [d(h(c), n)]; else {
                if (n = C.filter[e[s].type].apply(null, e[s].matches), n[P]) {
                    for (r = ++s; i > r && !C.relative[e[r].type]; r++);
                    return m(s > 1 && h(c), s > 1 && p(e.slice(0, s - 1)).replace(at, "$1"), n, r > s && y(e.slice(s, r)), i > r && y(e = e.slice(r)), i > r && p(e))
                }
                c.push(n)
            }
            return h(c)
        }

        function v(e, t) {
            var n = 0, r = t.length > 0, o = e.length > 0, s = function (i, s, u, l, c) {
                var f, p, d, h = [], m = 0, y = "0", v = i && [], b = null != c, x = j, w = i || o && C.find.TAG("*", c && s.parentNode || s), T = $ += null == x ? 1 : Math.random() || .1;
                for (b && (j = s !== L && s, N = n); null != (f = w[y]); y++) {
                    if (o && f) {
                        for (p = 0; d = e[p++];)if (d(f, s, u)) {
                            l.push(f);
                            break
                        }
                        b && ($ = T, N = ++n)
                    }
                    r && ((f = !d && f) && m--, i && v.push(f))
                }
                if (m += y, r && y !== m) {
                    for (p = 0; d = t[p++];)d(v, h, s, u);
                    if (i) {
                        if (m > 0)for (; y--;)v[y] || h[y] || (h[y] = G.call(l));
                        h = g(h)
                    }
                    Q.apply(l, h), b && !i && h.length > 0 && m + t.length > 1 && a.uniqueSort(l)
                }
                return b && ($ = T, j = x), v
            };
            return r ? i(s) : s
        }

        function b(e, t, n) {
            for (var r = 0, i = t.length; i > r; r++)a(e, t[r], n);
            return n
        }

        function x(e, t, n, r) {
            var i, o, a, s, u, l = f(e);
            if (!r && 1 === l.length) {
                if (o = l[0] = l[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && !q && C.relative[o[1].type]) {
                    if (t = C.find.ID(a.matches[0].replace(xt, wt), t)[0], !t)return n;
                    e = e.slice(o.shift().value.length)
                }
                for (i = pt.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !C.relative[s = a.type]);)if ((u = C.find[s]) && (r = u(a.matches[0].replace(xt, wt), dt.test(o[0].type) && t.parentNode || t))) {
                    if (o.splice(i, 1), e = r.length && p(o), !e)return Q.apply(n, K.call(r, 0)), n;
                    break
                }
            }
            return S(e, l)(r, t, q, n, dt.test(e)), n
        }

        function w() {
        }

        var T, N, C, k, E, S, A, j, D, L, H, q, M, _, F, O, B, P = "sizzle" + -new Date, R = e.document, W = {}, $ = 0, I = 0, z = r(), X = r(), U = r(), V = typeof t, Y = 1 << 31, J = [], G = J.pop, Q = J.push, K = J.slice, Z = J.indexOf || function (e) {
                for (var t = 0, n = this.length; n > t; t++)if (this[t] === e)return t;
                return -1
            }, et = "[\\x20\\t\\r\\n\\f]", tt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", nt = tt.replace("w", "w#"), rt = "([*^$|!~]?=)", it = "\\[" + et + "*(" + tt + ")" + et + "*(?:" + rt + et + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + nt + ")|)|)" + et + "*\\]", ot = ":(" + tt + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + it.replace(3, 8) + ")*)|.*)\\)|)", at = new RegExp("^" + et + "+|((?:^|[^\\\\])(?:\\\\.)*)" + et + "+$", "g"), st = new RegExp("^" + et + "*," + et + "*"), lt = new RegExp("^" + et + "*([\\x20\\t\\r\\n\\f>+~])" + et + "*"), ct = new RegExp(ot), ft = new RegExp("^" + nt + "$"), pt = {
            ID: new RegExp("^#(" + tt + ")"),
            CLASS: new RegExp("^\\.(" + tt + ")"),
            NAME: new RegExp("^\\[name=['\"]?(" + tt + ")['\"]?\\]"),
            TAG: new RegExp("^(" + tt.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + it),
            PSEUDO: new RegExp("^" + ot),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + et + "*(even|odd|(([+-]|)(\\d*)n|)" + et + "*(?:([+-]|)" + et + "*(\\d+)|))" + et + "*\\)|)", "i"),
            needsContext: new RegExp("^" + et + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + et + "*((?:-\\d)?\\d*)" + et + "*\\)|)(?=[^-]|$)", "i")
        }, dt = /[\x20\t\r\n\f]*[+~]/, ht = /^[^{]+\{\s*\[native code/, gt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, mt = /^(?:input|select|textarea|button)$/i, yt = /^h\d$/i, vt = /'|\\/g, bt = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, xt = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g, wt = function (e, t) {
            var n = "0x" + t - 65536;
            return n !== n ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
        };
        try {
            K.call(R.documentElement.childNodes, 0)[0].nodeType
        } catch (Tt) {
            K = function (e) {
                for (var t, n = []; t = this[e++];)n.push(t);
                return n
            }
        }
        E = a.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, D = a.setDocument = function (e) {
            var r = e ? e.ownerDocument || e : R;
            return r !== L && 9 === r.nodeType && r.documentElement ? (L = r, H = r.documentElement, q = E(r), W.tagNameNoComments = o(function (e) {
                return e.appendChild(r.createComment("")), !e.getElementsByTagName("*").length
            }), W.attributes = o(function (e) {
                e.innerHTML = "<select></select>";
                var t = typeof e.lastChild.getAttribute("multiple");
                return "boolean" !== t && "string" !== t
            }), W.getByClassName = o(function (e) {
                return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", e.getElementsByClassName && e.getElementsByClassName("e").length ? (e.lastChild.className = "e", 2 === e.getElementsByClassName("e").length) : !1
            }), W.getByName = o(function (e) {
                e.id = P + 0, e.innerHTML = "<a name='" + P + "'></a><div name='" + P + "'></div>", H.insertBefore(e, H.firstChild);
                var t = r.getElementsByName && r.getElementsByName(P).length === 2 + r.getElementsByName(P + 0).length;
                return W.getIdNotName = !r.getElementById(P), H.removeChild(e), t
            }), C.attrHandle = o(function (e) {
                return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== V && "#" === e.firstChild.getAttribute("href")
            }) ? {} : {
                href: function (e) {
                    return e.getAttribute("href", 2)
                }, type: function (e) {
                    return e.getAttribute("type")
                }
            }, W.getIdNotName ? (C.find.ID = function (e, t) {
                if (typeof t.getElementById !== V && !q) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, C.filter.ID = function (e) {
                var t = e.replace(xt, wt);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (C.find.ID = function (e, n) {
                if (typeof n.getElementById !== V && !q) {
                    var r = n.getElementById(e);
                    return r ? r.id === e || typeof r.getAttributeNode !== V && r.getAttributeNode("id").value === e ? [r] : t : []
                }
            }, C.filter.ID = function (e) {
                var t = e.replace(xt, wt);
                return function (e) {
                    var n = typeof e.getAttributeNode !== V && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), C.find.TAG = W.tagNameNoComments ? function (e, t) {
                return typeof t.getElementsByTagName !== V ? t.getElementsByTagName(e) : void 0
            } : function (e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];)1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, C.find.NAME = W.getByName && function (e, t) {
                return typeof t.getElementsByName !== V ? t.getElementsByName(name) : void 0
            }, C.find.CLASS = W.getByClassName && function (e, t) {
                return typeof t.getElementsByClassName === V || q ? void 0 : t.getElementsByClassName(e)
            }, _ = [], M = [":focus"], (W.qsa = n(r.querySelectorAll)) && (o(function (e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || M.push("\\[" + et + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || M.push(":checked")
            }), o(function (e) {
                e.innerHTML = "<input type='hidden' i=''/>", e.querySelectorAll("[i^='']").length && M.push("[*^$]=" + et + "*(?:\"\"|'')"), e.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), M.push(",.*:")
            })), (W.matchesSelector = n(F = H.matchesSelector || H.mozMatchesSelector || H.webkitMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && o(function (e) {
                W.disconnectedMatch = F.call(e, "div"), F.call(e, "[s!='']:x"), _.push("!=", ot)
            }), M = new RegExp(M.join("|")), _ = new RegExp(_.join("|")), O = n(H.contains) || H.compareDocumentPosition ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t)for (; t = t.parentNode;)if (t === e)return !0;
                return !1
            }, B = H.compareDocumentPosition ? function (e, t) {
                var n;
                return e === t ? (A = !0, 0) : (n = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t)) ? 1 & n || e.parentNode && 11 === e.parentNode.nodeType ? e === r || O(R, e) ? -1 : t === r || O(R, t) ? 1 : 0 : 4 & n ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            } : function (e, t) {
                var n, i = 0, o = e.parentNode, a = t.parentNode, u = [e], l = [t];
                if (e === t)return A = !0, 0;
                if (!o || !a)return e === r ? -1 : t === r ? 1 : o ? -1 : a ? 1 : 0;
                if (o === a)return s(e, t);
                for (n = e; n = n.parentNode;)u.unshift(n);
                for (n = t; n = n.parentNode;)l.unshift(n);
                for (; u[i] === l[i];)i++;
                return i ? s(u[i], l[i]) : u[i] === R ? -1 : l[i] === R ? 1 : 0
            }, A = !1, [0, 0].sort(B), W.detectDuplicates = A, L) : L
        }, a.matches = function (e, t) {
            return a(e, null, null, t)
        }, a.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== L && D(e), t = t.replace(bt, "='$1']"), !(!W.matchesSelector || q || _ && _.test(t) || M.test(t)))try {
                var n = F.call(e, t);
                if (n || W.disconnectedMatch || e.document && 11 !== e.document.nodeType)return n
            } catch (r) {
            }
            return a(t, L, null, [e]).length > 0
        }, a.contains = function (e, t) {
            return (e.ownerDocument || e) !== L && D(e), O(e, t)
        }, a.attr = function (e, t) {
            var n;
            return (e.ownerDocument || e) !== L && D(e), q || (t = t.toLowerCase()), (n = C.attrHandle[t]) ? n(e) : q || W.attributes ? e.getAttribute(t) : ((n = e.getAttributeNode(t)) || e.getAttribute(t)) && e[t] === !0 ? t : n && n.specified ? n.value : null
        }, a.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, a.uniqueSort = function (e) {
            var t, n = [], r = 1, i = 0;
            if (A = !W.detectDuplicates, e.sort(B), A) {
                for (; t = e[r]; r++)t === e[r - 1] && (i = n.push(r));
                for (; i--;)e.splice(n[i], 1)
            }
            return e
        }, k = a.getText = function (e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)n += k(e)
                } else if (3 === i || 4 === i)return e.nodeValue
            } else for (; t = e[r]; r++)n += k(t);
            return n
        }, C = a.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: pt,
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (e) {
                    return e[1] = e[1].replace(xt, wt), e[3] = (e[4] || e[5] || "").replace(xt, wt), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                }, CHILD: function (e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || a.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && a.error(e[0]), e
                }, PSEUDO: function (e) {
                    var t, n = !e[5] && e[2];
                    return pt.CHILD.test(e[0]) ? null : (e[4] ? e[2] = e[4] : n && ct.test(n) && (t = f(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function (e) {
                    return "*" === e ? function () {
                        return !0
                    } : (e = e.replace(xt, wt).toLowerCase(), function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    })
                }, CLASS: function (e) {
                    var t = z[e + " "];
                    return t || (t = new RegExp("(^|" + et + ")" + e + "(" + et + "|$)")) && z(e, function (e) {
                            return t.test(e.className || typeof e.getAttribute !== V && e.getAttribute("class") || "")
                        })
                }, ATTR: function (e, t, n) {
                    return function (r) {
                        var i = a.attr(r, e);
                        return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
                    }
                }, CHILD: function (e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
                    return 1 === r && 0 === i ? function (e) {
                        return !!e.parentNode
                    } : function (t, n, u) {
                        var l, c, f, p, d, h, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode, y = s && t.nodeName.toLowerCase(), v = !u && !s;
                        if (m) {
                            if (o) {
                                for (; g;) {
                                    for (f = t; f = f[g];)if (s ? f.nodeName.toLowerCase() === y : 1 === f.nodeType)return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? m.firstChild : m.lastChild], a && v) {
                                for (c = m[P] || (m[P] = {}), l = c[e] || [], d = l[0] === $ && l[1], p = l[0] === $ && l[2], f = d && m.childNodes[d]; f = ++d && f && f[g] || (p = d = 0) || h.pop();)if (1 === f.nodeType && ++p && f === t) {
                                    c[e] = [$, d, p];
                                    break
                                }
                            } else if (v && (l = (t[P] || (t[P] = {}))[e]) && l[0] === $)p = l[1]; else for (; (f = ++d && f && f[g] || (p = d = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== y : 1 !== f.nodeType) || !++p || (v && ((f[P] || (f[P] = {}))[e] = [$, p]), f !== t)););
                            return p -= i, p === r || p % r === 0 && p / r >= 0
                        }
                    }
                }, PSEUDO: function (e, t) {
                    var n, r = C.pseudos[e] || C.setFilters[e.toLowerCase()] || a.error("unsupported pseudo: " + e);
                    return r[P] ? r(t) : r.length > 1 ? (n = [e, e, "", t], C.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function (e, n) {
                        for (var i, o = r(e, t), a = o.length; a--;)i = Z.call(e, o[a]), e[i] = !(n[i] = o[a])
                    }) : function (e) {
                        return r(e, 0, n)
                    }) : r
                }
            },
            pseudos: {
                not: i(function (e) {
                    var t = [], n = [], r = S(e.replace(at, "$1"));
                    return r[P] ? i(function (e, t, n, i) {
                        for (var o, a = r(e, null, i, []), s = e.length; s--;)(o = a[s]) && (e[s] = !(t[s] = o))
                    }) : function (e, i, o) {
                        return t[0] = e, r(t, null, o, n), !n.pop()
                    }
                }), has: i(function (e) {
                    return function (t) {
                        return a(e, t).length > 0
                    }
                }), contains: i(function (e) {
                    return function (t) {
                        return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                    }
                }), lang: i(function (e) {
                    return ft.test(e || "") || a.error("unsupported lang: " + e), e = e.replace(xt, wt).toLowerCase(), function (t) {
                        var n;
                        do if (n = q ? t.getAttribute("xml:lang") || t.getAttribute("lang") : t.lang)return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }), target: function (t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                }, root: function (e) {
                    return e === H
                }, focus: function (e) {
                    return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                }, enabled: function (e) {
                    return e.disabled === !1
                }, disabled: function (e) {
                    return e.disabled === !0
                }, checked: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                }, selected: function (e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
                }, empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType)return !1;
                    return !0
                }, parent: function (e) {
                    return !C.pseudos.empty(e)
                }, header: function (e) {
                    return yt.test(e.nodeName)
                }, input: function (e) {
                    return mt.test(e.nodeName)
                }, button: function (e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                }, text: function (e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                }, first: c(function () {
                    return [0]
                }), last: c(function (e, t) {
                    return [t - 1]
                }), eq: c(function (e, t, n) {
                    return [0 > n ? n + t : n]
                }), even: c(function (e, t) {
                    for (var n = 0; t > n; n += 2)e.push(n);
                    return e
                }), odd: c(function (e, t) {
                    for (var n = 1; t > n; n += 2)e.push(n);
                    return e
                }), lt: c(function (e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0;)e.push(r);
                    return e
                }), gt: c(function (e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t;)e.push(r);
                    return e
                })
            }
        };
        for (T in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})C.pseudos[T] = u(T);
        for (T in{submit: !0, reset: !0})C.pseudos[T] = l(T);
        S = a.compile = function (e, t) {
            var n, r = [], i = [], o = U[e + " "];
            if (!o) {
                for (t || (t = f(e)), n = t.length; n--;)o = y(t[n]), o[P] ? r.push(o) : i.push(o);
                o = U(e, v(i, r))
            }
            return o
        }, C.pseudos.nth = C.pseudos.eq, C.filters = w.prototype = C.pseudos, C.setFilters = new w, D(), a.attr = ut.attr, ut.find = a, ut.expr = a.selectors, ut.expr[":"] = ut.expr.pseudos, ut.unique = a.uniqueSort, ut.text = a.getText, ut.isXMLDoc = a.isXML, ut.contains = a.contains
    }(e);
    var Wt = /Until$/, $t = /^(?:parents|prev(?:Until|All))/, It = /^.[^:#\[\.,]*$/, zt = ut.expr.match.needsContext, Xt = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    ut.fn.extend({
        find: function (e) {
            var t, n, r, i = this.length;
            if ("string" != typeof e)return r = this, this.pushStack(ut(e).filter(function () {
                for (t = 0; i > t; t++)if (ut.contains(r[t], this))return !0
            }));
            for (n = [], t = 0; i > t; t++)ut.find(e, this[t], n);
            return n = this.pushStack(i > 1 ? ut.unique(n) : n), n.selector = (this.selector ? this.selector + " " : "") + e, n
        }, has: function (e) {
            var t, n = ut(e, this), r = n.length;
            return this.filter(function () {
                for (t = 0; r > t; t++)if (ut.contains(this, n[t]))return !0
            })
        }, not: function (e) {
            return this.pushStack(f(this, e, !1))
        }, filter: function (e) {
            return this.pushStack(f(this, e, !0))
        }, is: function (e) {
            return !!e && ("string" == typeof e ? zt.test(e) ? ut(e, this.context).index(this[0]) >= 0 : ut.filter(e, this).length > 0 : this.filter(e).length > 0)
        }, closest: function (e, t) {
            for (var n, r = 0, i = this.length, o = [], a = zt.test(e) || "string" != typeof e ? ut(e, t || this.context) : 0; i > r; r++)for (n = this[r]; n && n.ownerDocument && n !== t && 11 !== n.nodeType;) {
                if (a ? a.index(n) > -1 : ut.find.matchesSelector(n, e)) {
                    o.push(n);
                    break
                }
                n = n.parentNode
            }
            return this.pushStack(o.length > 1 ? ut.unique(o) : o)
        }, index: function (e) {
            return e ? "string" == typeof e ? ut.inArray(this[0], ut(e)) : ut.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (e, t) {
            var n = "string" == typeof e ? ut(e, t) : ut.makeArray(e && e.nodeType ? [e] : e), r = ut.merge(this.get(), n);
            return this.pushStack(ut.unique(r))
        }, addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), ut.fn.andSelf = ut.fn.addBack, ut.each({
        parent: function (e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        }, parents: function (e) {
            return ut.dir(e, "parentNode")
        }, parentsUntil: function (e, t, n) {
            return ut.dir(e, "parentNode", n)
        }, next: function (e) {
            return c(e, "nextSibling")
        }, prev: function (e) {
            return c(e, "previousSibling")
        }, nextAll: function (e) {
            return ut.dir(e, "nextSibling")
        }, prevAll: function (e) {
            return ut.dir(e, "previousSibling")
        }, nextUntil: function (e, t, n) {
            return ut.dir(e, "nextSibling", n)
        }, prevUntil: function (e, t, n) {
            return ut.dir(e, "previousSibling", n)
        }, siblings: function (e) {
            return ut.sibling((e.parentNode || {}).firstChild, e)
        }, children: function (e) {
            return ut.sibling(e.firstChild)
        }, contents: function (e) {
            return ut.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ut.merge([], e.childNodes)
        }
    }, function (e, t) {
        ut.fn[e] = function (n, r) {
            var i = ut.map(this, t, n);
            return Wt.test(e) || (r = n), r && "string" == typeof r && (i = ut.filter(r, i)), i = this.length > 1 && !Xt[e] ? ut.unique(i) : i, this.length > 1 && $t.test(e) && (i = i.reverse()), this.pushStack(i)
        }
    }), ut.extend({
        filter: function (e, t, n) {
            return n && (e = ":not(" + e + ")"), 1 === t.length ? ut.find.matchesSelector(t[0], e) ? [t[0]] : [] : ut.find.matches(e, t)
        }, dir: function (e, n, r) {
            for (var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !ut(o).is(r));)1 === o.nodeType && i.push(o), o = o[n];
            return i
        }, sibling: function (e, t) {
            for (var n = []; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var Ut = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Vt = / jQuery\d+="(?:null|\d+)"/g, Yt = new RegExp("<(?:" + Ut + ")[\\s/>]", "i"), Jt = /^\s+/, Gt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Qt = /<([\w:]+)/, Kt = /<tbody/i, Zt = /<|&#?\w+;/, en = /<(?:script|style|link)/i, tn = /^(?:checkbox|radio)$/i, nn = /checked\s*(?:[^=]|=\s*.checked.)/i, rn = /^$|\/(?:java|ecma)script/i, on = /^true\/(.*)/, an = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, sn = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: ut.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }, un = p(Y), ln = un.appendChild(Y.createElement("div"));
    sn.optgroup = sn.option, sn.tbody = sn.tfoot = sn.colgroup = sn.caption = sn.thead, sn.th = sn.td, ut.fn.extend({
        text: function (e) {
            return ut.access(this, function (e) {
                return e === t ? ut.text(this) : this.empty().append((this[0] && this[0].ownerDocument || Y).createTextNode(e))
            }, null, e, arguments.length)
        }, wrapAll: function (e) {
            if (ut.isFunction(e))return this.each(function (t) {
                ut(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = ut(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;)e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        }, wrapInner: function (e) {
            return this.each(ut.isFunction(e) ? function (t) {
                ut(this).wrapInner(e.call(this, t))
            } : function () {
                var t = ut(this), n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        }, wrap: function (e) {
            var t = ut.isFunction(e);
            return this.each(function (n) {
                ut(this).wrapAll(t ? e.call(this, n) : e)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                ut.nodeName(this, "body") || ut(this).replaceWith(this.childNodes)
            }).end()
        }, append: function () {
            return this.domManip(arguments, !0, function (e) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.appendChild(e)
            })
        }, prepend: function () {
            return this.domManip(arguments, !0, function (e) {
                (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && this.insertBefore(e, this.firstChild)
            })
        }, before: function () {
            return this.domManip(arguments, !1, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        }, after: function () {
            return this.domManip(arguments, !1, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        }, remove: function (e, t) {
            for (var n, r = 0; null != (n = this[r]); r++)(!e || ut.filter(e, [n]).length > 0) && (t || 1 !== n.nodeType || ut.cleanData(b(n)), n.parentNode && (t && ut.contains(n.ownerDocument, n) && m(b(n, "script")), n.parentNode.removeChild(n)));
            return this
        }, empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && ut.cleanData(b(e, !1)); e.firstChild;)e.removeChild(e.firstChild);
                e.options && ut.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        }, clone: function (e, t) {
            return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
                return ut.clone(this, e, t)
            })
        }, html: function (e) {
            return ut.access(this, function (e) {
                var n = this[0] || {}, r = 0, i = this.length;
                if (e === t)return 1 === n.nodeType ? n.innerHTML.replace(Vt, "") : t;
                if (!("string" != typeof e || en.test(e) || !ut.support.htmlSerialize && Yt.test(e) || !ut.support.leadingWhitespace && Jt.test(e) || sn[(Qt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Gt, "<$1></$2>");
                    try {
                        for (; i > r; r++)n = this[r] || {}, 1 === n.nodeType && (ut.cleanData(b(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch (o) {
                    }
                }
                n && this.empty().append(e)
            }, null, e, arguments.length)
        }, replaceWith: function (e) {
            var t = ut.isFunction(e);
            return t || "string" == typeof e || (e = ut(e).not(this).detach()), this.domManip([e], !0, function (e) {
                var t = this.nextSibling, n = this.parentNode;
                n && (ut(this).remove(), n.insertBefore(e, t))
            })
        }, detach: function (e) {
            return this.remove(e, !0)
        }, domManip: function (e, n, r) {
            e = tt.apply([], e);
            var i, o, a, s, u, l, c = 0, f = this.length, p = this, m = f - 1, y = e[0], v = ut.isFunction(y);
            if (v || !(1 >= f || "string" != typeof y || ut.support.checkClone) && nn.test(y))return this.each(function (i) {
                var o = p.eq(i);
                v && (e[0] = y.call(this, i, n ? o.html() : t)), o.domManip(e, n, r)
            });
            if (f && (l = ut.buildFragment(e, this[0].ownerDocument, !1, this), i = l.firstChild, 1 === l.childNodes.length && (l = i), i)) {
                for (n = n && ut.nodeName(i, "tr"), s = ut.map(b(l, "script"), h), a = s.length; f > c; c++)o = l, c !== m && (o = ut.clone(o, !0, !0), a && ut.merge(s, b(o, "script"))), r.call(n && ut.nodeName(this[c], "table") ? d(this[c], "tbody") : this[c], o, c);
                if (a)for (u = s[s.length - 1].ownerDocument, ut.map(s, g), c = 0; a > c; c++)o = s[c], rn.test(o.type || "") && !ut._data(o, "globalEval") && ut.contains(u, o) && (o.src ? ut.ajax({
                    url: o.src,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    "throws": !0
                }) : ut.globalEval((o.text || o.textContent || o.innerHTML || "").replace(an, "")));
                l = i = null
            }
            return this
        }
    }), ut.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (e, t) {
        ut.fn[e] = function (e) {
            for (var n, r = 0, i = [], o = ut(e), a = o.length - 1; a >= r; r++)n = r === a ? this : this.clone(!0), ut(o[r])[t](n), nt.apply(i, n.get());
            return this.pushStack(i)
        }
    }), ut.extend({
        clone: function (e, t, n) {
            var r, i, o, a, s, u = ut.contains(e.ownerDocument, e);
            if (ut.support.html5Clone || ut.isXMLDoc(e) || !Yt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (ln.innerHTML = e.outerHTML, ln.removeChild(o = ln.firstChild)), !(ut.support.noCloneEvent && ut.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ut.isXMLDoc(e)))for (r = b(o), s = b(e), a = 0; null != (i = s[a]); ++a)r[a] && v(i, r[a]);
            if (t)if (n)for (s = s || b(e), r = r || b(o), a = 0; null != (i = s[a]); a++)y(i, r[a]); else y(e, o);
            return r = b(o, "script"), r.length > 0 && m(r, !u && b(e, "script")), r = s = i = null, o
        }, buildFragment: function (e, t, n, r) {
            for (var i, o, a, s, u, l, c, f = e.length, d = p(t), h = [], g = 0; f > g; g++)if (o = e[g], o || 0 === o)if ("object" === ut.type(o))ut.merge(h, o.nodeType ? [o] : o); else if (Zt.test(o)) {
                for (s = s || d.appendChild(t.createElement("div")), u = (Qt.exec(o) || ["", ""])[1].toLowerCase(), c = sn[u] || sn._default, s.innerHTML = c[1] + o.replace(Gt, "<$1></$2>") + c[2], i = c[0]; i--;)s = s.lastChild;
                if (!ut.support.leadingWhitespace && Jt.test(o) && h.push(t.createTextNode(Jt.exec(o)[0])), !ut.support.tbody)for (o = "table" !== u || Kt.test(o) ? "<table>" !== c[1] || Kt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length; i--;)ut.nodeName(l = o.childNodes[i], "tbody") && !l.childNodes.length && o.removeChild(l);
                for (ut.merge(h, s.childNodes), s.textContent = ""; s.firstChild;)s.removeChild(s.firstChild);
                s = d.lastChild
            } else h.push(t.createTextNode(o));
            for (s && d.removeChild(s), ut.support.appendChecked || ut.grep(b(h, "input"), x), g = 0; o = h[g++];)if ((!r || -1 === ut.inArray(o, r)) && (a = ut.contains(o.ownerDocument, o), s = b(d.appendChild(o), "script"), a && m(s), n))for (i = 0; o = s[i++];)rn.test(o.type || "") && n.push(o);
            return s = null, d
        }, cleanData: function (e, t) {
            for (var n, r, i, o, a = 0, s = ut.expando, u = ut.cache, l = ut.support.deleteExpando, c = ut.event.special; null != (n = e[a]); a++)if ((t || ut.acceptData(n)) && (i = n[s], o = i && u[i])) {
                if (o.events)for (r in o.events)c[r] ? ut.event.remove(n, r) : ut.removeEvent(n, r, o.handle);
                u[i] && (delete u[i], l ? delete n[s] : typeof n.removeAttribute !== V ? n.removeAttribute(s) : n[s] = null, Z.push(i))
            }
        }
    });
    var cn, fn, pn, dn = /alpha\([^)]*\)/i, hn = /opacity\s*=\s*([^)]*)/, gn = /^(top|right|bottom|left)$/, mn = /^(none|table(?!-c[ea]).+)/, yn = /^margin/, vn = new RegExp("^(" + lt + ")(.*)$", "i"), bn = new RegExp("^(" + lt + ")(?!px)[a-z%]+$", "i"), xn = new RegExp("^([+-])=(" + lt + ")", "i"), wn = {BODY: "block"}, Tn = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Nn = {
        letterSpacing: 0,
        fontWeight: 400
    }, Cn = ["Top", "Right", "Bottom", "Left"], kn = ["Webkit", "O", "Moz", "ms"];
    ut.fn.extend({
        css: function (e, n) {
            return ut.access(this, function (e, n, r) {
                var i, o, a = {}, s = 0;
                if (ut.isArray(n)) {
                    for (o = fn(e), i = n.length; i > s; s++)a[n[s]] = ut.css(e, n[s], !1, o);
                    return a
                }
                return r !== t ? ut.style(e, n, r) : ut.css(e, n)
            }, e, n, arguments.length > 1)
        }, show: function () {
            return N(this, !0)
        }, hide: function () {
            return N(this)
        }, toggle: function (e) {
            var t = "boolean" == typeof e;
            return this.each(function () {
                (t ? e : T(this)) ? ut(this).show() : ut(this).hide()
            })
        }
    }), ut.extend({
        cssHooks: {
            opacity: {
                get: function (e, t) {
                    if (t) {
                        var n = pn(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": ut.support.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (e, n, r, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, a, s, u = ut.camelCase(n), l = e.style;
                if (n = ut.cssProps[u] || (ut.cssProps[u] = w(l, u)), s = ut.cssHooks[n] || ut.cssHooks[u], r === t)return s && "get"in s && (o = s.get(e, !1, i)) !== t ? o : l[n];
                if (a = typeof r, "string" === a && (o = xn.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(ut.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || ut.cssNumber[u] || (r += "px"), ut.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (l[n] = "inherit"), s && "set"in s && (r = s.set(e, r, i)) === t)))try {
                    l[n] = r
                } catch (c) {
                }
            }
        },
        css: function (e, n, r, i) {
            var o, a, s, u = ut.camelCase(n);
            return n = ut.cssProps[u] || (ut.cssProps[u] = w(e.style, u)), s = ut.cssHooks[n] || ut.cssHooks[u], s && "get"in s && (a = s.get(e, !0, r)), a === t && (a = pn(e, n, i)), "normal" === a && n in Nn && (a = Nn[n]), "" === r || r ? (o = parseFloat(a), r === !0 || ut.isNumeric(o) ? o || 0 : a) : a
        },
        swap: function (e, t, n, r) {
            var i, o, a = {};
            for (o in t)a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t)e.style[o] = a[o];
            return i
        }
    }), e.getComputedStyle ? (fn = function (t) {
        return e.getComputedStyle(t, null)
    }, pn = function (e, n, r) {
        var i, o, a, s = r || fn(e), u = s ? s.getPropertyValue(n) || s[n] : t, l = e.style;
        return s && ("" !== u || ut.contains(e.ownerDocument, e) || (u = ut.style(e, n)), bn.test(u) && yn.test(n) && (i = l.width, o = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = u, u = s.width, l.width = i, l.minWidth = o, l.maxWidth = a)), u
    }) : Y.documentElement.currentStyle && (fn = function (e) {
        return e.currentStyle
    }, pn = function (e, n, r) {
        var i, o, a, s = r || fn(e), u = s ? s[n] : t, l = e.style;
        return null == u && l && l[n] && (u = l[n]), bn.test(u) && !gn.test(n) && (i = l.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), l.left = "fontSize" === n ? "1em" : u, u = l.pixelLeft + "px", l.left = i, a && (o.left = a)), "" === u ? "auto" : u
    }), ut.each(["height", "width"], function (e, t) {
        ut.cssHooks[t] = {
            get: function (e, n, r) {
                return n ? 0 === e.offsetWidth && mn.test(ut.css(e, "display")) ? ut.swap(e, Tn, function () {
                    return E(e, t, r)
                }) : E(e, t, r) : void 0
            }, set: function (e, n, r) {
                var i = r && fn(e);
                return C(e, n, r ? k(e, t, r, ut.support.boxSizing && "border-box" === ut.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }), ut.support.opacity || (ut.cssHooks.opacity = {
        get: function (e, t) {
            return hn.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        }, set: function (e, t) {
            var n = e.style, r = e.currentStyle, i = ut.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", o = r && r.filter || n.filter || "";
            n.zoom = 1, (t >= 1 || "" === t) && "" === ut.trim(o.replace(dn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = dn.test(o) ? o.replace(dn, i) : o + " " + i)
        }
    }), ut(function () {
        ut.support.reliableMarginRight || (ut.cssHooks.marginRight = {
            get: function (e, t) {
                return t ? ut.swap(e, {display: "inline-block"}, pn, [e, "marginRight"]) : void 0
            }
        }), !ut.support.pixelPosition && ut.fn.position && ut.each(["top", "left"], function (e, t) {
            ut.cssHooks[t] = {
                get: function (e, n) {
                    return n ? (n = pn(e, t), bn.test(n) ? ut(e).position()[t] + "px" : n) : void 0
                }
            }
        })
    }), ut.expr && ut.expr.filters && (ut.expr.filters.hidden = function (e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ut.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || ut.css(e, "display"))
    }, ut.expr.filters.visible = function (e) {
        return !ut.expr.filters.hidden(e)
    }), ut.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        ut.cssHooks[e + t] = {
            expand: function (n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++)i[e + Cn[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        }, yn.test(e) || (ut.cssHooks[e + t].set = C)
    });
    var En = /%20/g, Sn = /\[\]$/, An = /\r?\n/g, jn = /^(?:submit|button|image|reset|file)$/i, Dn = /^(?:input|select|textarea|keygen)/i;
    ut.fn.extend({
        serialize: function () {
            return ut.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var e = ut.prop(this, "elements");
                return e ? ut.makeArray(e) : this
            }).filter(function () {
                var e = this.type;
                return this.name && !ut(this).is(":disabled") && Dn.test(this.nodeName) && !jn.test(e) && (this.checked || !tn.test(e))
            }).map(function (e, t) {
                var n = ut(this).val();
                return null == n ? null : ut.isArray(n) ? ut.map(n, function (e) {
                    return {name: t.name, value: e.replace(An, "\r\n")}
                }) : {name: t.name, value: n.replace(An, "\r\n")}
            }).get()
        }
    }), ut.param = function (e, n) {
        var r, i = [], o = function (e, t) {
            t = ut.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (n === t && (n = ut.ajaxSettings && ut.ajaxSettings.traditional), ut.isArray(e) || e.jquery && !ut.isPlainObject(e))ut.each(e, function () {
            o(this.name, this.value)
        }); else for (r in e)j(r, e[r], n, o);
        return i.join("&").replace(En, "+")
    }, ut.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        ut.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), ut.fn.hover = function (e, t) {
        return this.mouseenter(e).mouseleave(t || e)
    };
    var Ln, Hn, qn = ut.now(), Mn = /\?/, _n = /#.*$/, Fn = /([?&])_=[^&]*/, On = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Bn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Pn = /^(?:GET|HEAD)$/, Rn = /^\/\//, Wn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, $n = ut.fn.load, In = {}, zn = {}, Xn = "*/".concat("*");
    try {
        Hn = J.href
    } catch (Un) {
        Hn = Y.createElement("a"), Hn.href = "", Hn = Hn.href
    }
    Ln = Wn.exec(Hn.toLowerCase()) || [], ut.fn.load = function (e, n, r) {
        if ("string" != typeof e && $n)return $n.apply(this, arguments);
        var i, o, a, s = this, u = e.indexOf(" ");
        return u >= 0 && (i = e.slice(u, e.length), e = e.slice(0, u)), ut.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && ut.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: n
        }).done(function (e) {
            o = arguments, s.html(i ? ut("<div>").append(ut.parseHTML(e)).find(i) : e)
        }).complete(r && function (e, t) {
            s.each(r, o || [e.responseText, t, e])
        }), this
    }, ut.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        ut.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), ut.each(["get", "post"], function (e, n) {
        ut[n] = function (e, r, i, o) {
            return ut.isFunction(r) && (o = o || i, i = r, r = t), ut.ajax({
                url: e,
                type: n,
                dataType: o,
                data: r,
                success: i
            })
        }
    }), ut.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Hn,
            type: "GET",
            isLocal: Bn.test(Ln[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Xn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText"},
            converters: {"* text": e.String, "text html": !0, "text json": ut.parseJSON, "text xml": ut.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (e, t) {
            return t ? H(H(e, ut.ajaxSettings), t) : H(ut.ajaxSettings, e)
        },
        ajaxPrefilter: D(In),
        ajaxTransport: D(zn),
        ajax: function (e, n) {
            function r(e, n, r, i) {
                var o, f, v, b, w, N = n;
                2 !== x && (x = 2, u && clearTimeout(u), c = t, s = i || "", T.readyState = e > 0 ? 4 : 0, r && (b = q(p, T, r)), e >= 200 && 300 > e || 304 === e ? (p.ifModified && (w = T.getResponseHeader("Last-Modified"), w && (ut.lastModified[a] = w), w = T.getResponseHeader("etag"), w && (ut.etag[a] = w)), 204 === e ? (o = !0, N = "nocontent") : 304 === e ? (o = !0, N = "notmodified") : (o = M(p, b), N = o.state, f = o.data, v = o.error, o = !v)) : (v = N, (e || !N) && (N = "error", 0 > e && (e = 0))), T.status = e, T.statusText = (n || N) + "", o ? g.resolveWith(d, [f, N, T]) : g.rejectWith(d, [T, N, v]), T.statusCode(y), y = t, l && h.trigger(o ? "ajaxSuccess" : "ajaxError", [T, p, o ? f : v]), m.fireWith(d, [T, N]), l && (h.trigger("ajaxComplete", [T, p]), --ut.active || ut.event.trigger("ajaxStop")))
            }

            "object" == typeof e && (n = e, e = t), n = n || {};
            var i, o, a, s, u, l, c, f, p = ut.ajaxSetup({}, n), d = p.context || p, h = p.context && (d.nodeType || d.jquery) ? ut(d) : ut.event, g = ut.Deferred(), m = ut.Callbacks("once memory"), y = p.statusCode || {}, v = {}, b = {}, x = 0, w = "canceled", T = {
                readyState: 0,
                getResponseHeader: function (e) {
                    var t;
                    if (2 === x) {
                        if (!f)for (f = {}; t = On.exec(s);)f[t[1].toLowerCase()] = t[2];
                        t = f[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function () {
                    return 2 === x ? s : null
                },
                setRequestHeader: function (e, t) {
                    var n = e.toLowerCase();
                    return x || (e = b[n] = b[n] || e, v[e] = t), this
                },
                overrideMimeType: function (e) {
                    return x || (p.mimeType = e), this
                },
                statusCode: function (e) {
                    var t;
                    if (e)if (2 > x)for (t in e)y[t] = [y[t], e[t]]; else T.always(e[T.status]);
                    return this
                },
                abort: function (e) {
                    var t = e || w;
                    return c && c.abort(t), r(0, t), this
                }
            };
            if (g.promise(T).complete = m.add, T.success = T.done, T.error = T.fail, p.url = ((e || p.url || Hn) + "").replace(_n, "").replace(Rn, Ln[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = ut.trim(p.dataType || "*").toLowerCase().match(ct) || [""], null == p.crossDomain && (i = Wn.exec(p.url.toLowerCase()), p.crossDomain = !(!i || i[1] === Ln[1] && i[2] === Ln[2] && (i[3] || ("http:" === i[1] ? 80 : 443)) == (Ln[3] || ("http:" === Ln[1] ? 80 : 443)))), p.data && p.processData && "string" != typeof p.data && (p.data = ut.param(p.data, p.traditional)), L(In, p, n, T), 2 === x)return T;
            l = p.global, l && 0 === ut.active++ && ut.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Pn.test(p.type), a = p.url, p.hasContent || (p.data && (a = p.url += (Mn.test(a) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = Fn.test(a) ? a.replace(Fn, "$1_=" + qn++) : a + (Mn.test(a) ? "&" : "?") + "_=" + qn++)), p.ifModified && (ut.lastModified[a] && T.setRequestHeader("If-Modified-Since", ut.lastModified[a]), ut.etag[a] && T.setRequestHeader("If-None-Match", ut.etag[a])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && T.setRequestHeader("Content-Type", p.contentType), T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Xn + "; q=0.01" : "") : p.accepts["*"]);
            for (o in p.headers)T.setRequestHeader(o, p.headers[o]);
            if (p.beforeSend && (p.beforeSend.call(d, T, p) === !1 || 2 === x))return T.abort();
            w = "abort";
            for (o in{success: 1, error: 1, complete: 1})T[o](p[o]);
            if (c = L(zn, p, n, T)) {
                T.readyState = 1, l && h.trigger("ajaxSend", [T, p]), p.async && p.timeout > 0 && (u = setTimeout(function () {
                    T.abort("timeout")
                }, p.timeout));
                try {
                    x = 1, c.send(v, r)
                } catch (N) {
                    if (!(2 > x))throw N;
                    r(-1, N)
                }
            } else r(-1, "No Transport");
            return T
        },
        getScript: function (e, n) {
            return ut.get(e, t, n, "script")
        },
        getJSON: function (e, t, n) {
            return ut.get(e, t, n, "json")
        }
    }), ut.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (e) {
                return ut.globalEval(e), e
            }
        }
    }), ut.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), ut.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var n, r = Y.head || ut("head")[0] || Y.documentElement;
            return {
                send: function (t, i) {
                    n = Y.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
                        (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                    }, r.insertBefore(n, r.firstChild)
                }, abort: function () {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var Vn = [], Yn = /(=)\?(?=&|$)|\?\?/;
    ut.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var e = Vn.pop() || ut.expando + "_" + qn++;
            return this[e] = !0, e
        }
    }), ut.ajaxPrefilter("json jsonp", function (n, r, i) {
        var o, a, s, u = n.jsonp !== !1 && (Yn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Yn.test(n.data) && "data");
        return u || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = ut.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, u ? n[u] = n[u].replace(Yn, "$1" + o) : n.jsonp !== !1 && (n.url += (Mn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function () {
            return s || ut.error(o + " was not called"), s[0]
        }, n.dataTypes[0] = "json", a = e[o], e[o] = function () {
            s = arguments
        }, i.always(function () {
            e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Vn.push(o)), s && ut.isFunction(a) && a(s[0]), s = a = t
        }), "script") : void 0
    });
    var Jn, Gn, Qn = 0, Kn = e.ActiveXObject && function () {
            var e;
            for (e in Jn)Jn[e](t, !0)
        };
    ut.ajaxSettings.xhr = e.ActiveXObject ? function () {
        return !this.isLocal && _() || F()
    } : _, Gn = ut.ajaxSettings.xhr(), ut.support.cors = !!Gn && "withCredentials"in Gn, Gn = ut.support.ajax = !!Gn, Gn && ut.ajaxTransport(function (n) {
        if (!n.crossDomain || ut.support.cors) {
            var r;
            return {
                send: function (i, o) {
                    var a, s, u = n.xhr();
                    if (n.username ? u.open(n.type, n.url, n.async, n.username, n.password) : u.open(n.type, n.url, n.async), n.xhrFields)for (s in n.xhrFields)u[s] = n.xhrFields[s];
                    n.mimeType && u.overrideMimeType && u.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (s in i)u.setRequestHeader(s, i[s])
                    } catch (l) {
                    }
                    u.send(n.hasContent && n.data || null), r = function (e, i) {
                        var s, l, c, f;
                        try {
                            if (r && (i || 4 === u.readyState))if (r = t, a && (u.onreadystatechange = ut.noop, Kn && delete Jn[a]), i)4 !== u.readyState && u.abort(); else {
                                f = {}, s = u.status, l = u.getAllResponseHeaders(), "string" == typeof u.responseText && (f.text = u.responseText);
                                try {
                                    c = u.statusText
                                } catch (p) {
                                    c = ""
                                }
                                s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = f.text ? 200 : 404
                            }
                        } catch (d) {
                            i || o(-1, d)
                        }
                        f && o(s, c, f, l)
                    }, n.async ? 4 === u.readyState ? setTimeout(r) : (a = ++Qn, Kn && (Jn || (Jn = {}, ut(e).unload(Kn)), Jn[a] = r), u.onreadystatechange = r) : r()
                }, abort: function () {
                    r && r(t, !0)
                }
            }
        }
    });
    var Zn, er, tr = /^(?:toggle|show|hide)$/, nr = new RegExp("^(?:([+-])=|)(" + lt + ")([a-z%]*)$", "i"), rr = /queueHooks$/, ir = [W], or = {
        "*": [function (e, t) {
            var n, r, i = this.createTween(e, t), o = nr.exec(t), a = i.cur(), s = +a || 0, u = 1, l = 20;
            if (o) {
                if (n = +o[2], r = o[3] || (ut.cssNumber[e] ? "" : "px"), "px" !== r && s) {
                    s = ut.css(i.elem, e, !0) || n || 1;
                    do u = u || ".5", s /= u, ut.style(i.elem, e, s + r); while (u !== (u = i.cur() / a) && 1 !== u && --l)
                }
                i.unit = r, i.start = s, i.end = o[1] ? s + (o[1] + 1) * n : n
            }
            return i
        }]
    };
    ut.Animation = ut.extend(P, {
        tweener: function (e, t) {
            ut.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, r = 0, i = e.length; i > r; r++)n = e[r], or[n] = or[n] || [], or[n].unshift(t)
        }, prefilter: function (e, t) {
            t ? ir.unshift(e) : ir.push(e)
        }
    }), ut.Tween = $, $.prototype = {
        constructor: $, init: function (e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ut.cssNumber[n] ? "" : "px")
        }, cur: function () {
            var e = $.propHooks[this.prop];
            return e && e.get ? e.get(this) : $.propHooks._default.get(this)
        }, run: function (e) {
            var t, n = $.propHooks[this.prop];
            return this.pos = t = this.options.duration ? ut.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : $.propHooks._default.set(this), this
        }
    }, $.prototype.init.prototype = $.prototype, $.propHooks = {
        _default: {
            get: function (e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ut.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
            }, set: function (e) {
                ut.fx.step[e.prop] ? ut.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ut.cssProps[e.prop]] || ut.cssHooks[e.prop]) ? ut.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    }, $.propHooks.scrollTop = $.propHooks.scrollLeft = {
        set: function (e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, ut.each(["toggle", "show", "hide"], function (e, t) {
        var n = ut.fn[t];
        ut.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(I(t, !0), e, r, i)
        }
    }), ut.fn.extend({
        fadeTo: function (e, t, n, r) {
            return this.filter(T).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
        }, animate: function (e, t, n, r) {
            var i = ut.isEmptyObject(e), o = ut.speed(t, n, r), a = function () {
                var t = P(this, ut.extend({}, e), o);
                a.finish = function () {
                    t.stop(!0)
                }, (i || ut._data(this, "finish")) && t.stop(!0)
            };
            return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
        }, stop: function (e, n, r) {
            var i = function (e) {
                var t = e.stop;
                delete e.stop, t(r)
            };
            return "string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
                var t = !0, n = null != e && e + "queueHooks", o = ut.timers, a = ut._data(this);
                if (n)a[n] && a[n].stop && i(a[n]); else for (n in a)a[n] && a[n].stop && rr.test(n) && i(a[n]);
                for (n = o.length; n--;)o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
                (t || !r) && ut.dequeue(this, e)
            })
        }, finish: function (e) {
            return e !== !1 && (e = e || "fx"), this.each(function () {
                var t, n = ut._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = ut.timers, a = r ? r.length : 0;
                for (n.finish = !0, ut.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), t = o.length; t--;)o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; a > t; t++)r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }), ut.each({
        slideDown: I("show"),
        slideUp: I("hide"),
        slideToggle: I("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (e, t) {
        ut.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), ut.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? ut.extend({}, e) : {
            complete: n || !n && t || ut.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !ut.isFunction(t) && t
        };
        return r.duration = ut.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ut.fx.speeds ? ut.fx.speeds[r.duration] : ut.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            ut.isFunction(r.old) && r.old.call(this), r.queue && ut.dequeue(this, r.queue)
        }, r
    }, ut.easing = {
        linear: function (e) {
            return e
        }, swing: function (e) {
            return .5 - Math.cos(e * Math.PI) / 2
        }
    }, ut.timers = [], ut.fx = $.prototype.init, ut.fx.tick = function () {
        var e, n = ut.timers, r = 0;
        for (Zn = ut.now(); r < n.length; r++)e = n[r], e() || n[r] !== e || n.splice(r--, 1);
        n.length || ut.fx.stop(), Zn = t
    }, ut.fx.timer = function (e) {
        e() && ut.timers.push(e) && ut.fx.start()
    }, ut.fx.interval = 13, ut.fx.start = function () {
        er || (er = setInterval(ut.fx.tick, ut.fx.interval))
    }, ut.fx.stop = function () {
        clearInterval(er), er = null
    }, ut.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, ut.fx.step = {}, ut.expr && ut.expr.filters && (ut.expr.filters.animated = function (e) {
        return ut.grep(ut.timers, function (t) {
            return e === t.elem
        }).length
    }), ut.fn.offset = function (e) {
        if (arguments.length)return e === t ? this : this.each(function (t) {
            ut.offset.setOffset(this, e, t)
        });
        var n, r, i = {top: 0, left: 0}, o = this[0], a = o && o.ownerDocument;
        if (a)return n = a.documentElement, ut.contains(n, o) ? (typeof o.getBoundingClientRect !== V && (i = o.getBoundingClientRect()), r = z(a), {
            top: i.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: i.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : i
    }, ut.offset = {
        setOffset: function (e, t, n) {
            var r = ut.css(e, "position");
            "static" === r && (e.style.position = "relative");
            var i, o, a = ut(e), s = a.offset(), u = ut.css(e, "top"), l = ut.css(e, "left"), c = ("absolute" === r || "fixed" === r) && ut.inArray("auto", [u, l]) > -1, f = {}, p = {};
            c ? (p = a.position(), i = p.top, o = p.left) : (i = parseFloat(u) || 0, o = parseFloat(l) || 0), ut.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + i), null != t.left && (f.left = t.left - s.left + o), "using"in t ? t.using.call(e, f) : a.css(f)
        }
    }, ut.fn.extend({
        position: function () {
            if (this[0]) {
                var e, t, n = {top: 0, left: 0}, r = this[0];
                return "fixed" === ut.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ut.nodeName(e[0], "html") || (n = e.offset()), n.top += ut.css(e[0], "borderTopWidth", !0), n.left += ut.css(e[0], "borderLeftWidth", !0)), {
                    top: t.top - n.top - ut.css(r, "marginTop", !0),
                    left: t.left - n.left - ut.css(r, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                for (var e = this.offsetParent || Y.documentElement; e && !ut.nodeName(e, "html") && "static" === ut.css(e, "position");)e = e.offsetParent;
                return e || Y.documentElement
            })
        }
    }), ut.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, n) {
        var r = /Y/.test(n);
        ut.fn[e] = function (i) {
            return ut.access(this, function (e, i, o) {
                var a = z(e);
                return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : void(a ? a.scrollTo(r ? ut(a).scrollLeft() : o, r ? o : ut(a).scrollTop()) : e[i] = o)
            }, e, i, arguments.length, null)
        }
    }), ut.each({Height: "height", Width: "width"}, function (e, n) {
        ut.each({padding: "inner" + e, content: n, "": "outer" + e}, function (r, i) {
            ut.fn[i] = function (i, o) {
                var a = arguments.length && (r || "boolean" != typeof i), s = r || (i === !0 || o === !0 ? "margin" : "border");
                return ut.access(this, function (n, r, i) {
                    var o;
                    return ut.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? ut.css(n, r, s) : ut.style(n, r, i, s)
                }, n, a ? i : t, a, null)
            }
        })
    }), e.jQuery = e.$ = ut, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function () {
        return ut
    })
}(window);
(function () {
    var t = this, e = e || {};
    e.WEBGL_RENDERER = 0, e.CANVAS_RENDERER = 1, e.VERSION = "v2.2.5", e.blendModes = {
        NORMAL: 0,
        ADD: 1,
        MULTIPLY: 2,
        SCREEN: 3,
        OVERLAY: 4,
        DARKEN: 5,
        LIGHTEN: 6,
        COLOR_DODGE: 7,
        COLOR_BURN: 8,
        HARD_LIGHT: 9,
        SOFT_LIGHT: 10,
        DIFFERENCE: 11,
        EXCLUSION: 12,
        HUE: 13,
        SATURATION: 14,
        COLOR: 15,
        LUMINOSITY: 16
    }, e.scaleModes = {
        DEFAULT: 0,
        LINEAR: 0,
        NEAREST: 1
    }, e._UID = 0, "undefined" != typeof Float32Array ? (e.Float32Array = Float32Array, e.Uint16Array = Uint16Array, e.Uint32Array = Uint32Array, e.ArrayBuffer = ArrayBuffer) : (e.Float32Array = Array, e.Uint16Array = Array), e.INTERACTION_FREQUENCY = 30, e.AUTO_PREVENT_DEFAULT = !0, e.PI_2 = 2 * Math.PI, e.RAD_TO_DEG = 180 / Math.PI, e.DEG_TO_RAD = Math.PI / 180, e.RETINA_PREFIX = "@2x", e.dontSayHello = !1, e.defaultRenderOptions = {
        view: null,
        transparent: !1,
        antialias: !1,
        preserveDrawingBuffer: !1,
        resolution: 1,
        clearBeforeRender: !0,
        autoResize: !1
    }, e.sayHello = function (t) {
        if (!e.dontSayHello) {
            if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
                var i = ["%c %c %c Pixi.js " + e.VERSION + " - " + t + "  %c  %c  http://www.pixijs.com/  %c %c ♥%c♥%c♥ ", "background: #ff66a5", "background: #ff66a5", "color: #ff66a5; background: #030307;", "background: #ff66a5", "background: #ffc3dc", "background: #ff66a5", "color: #ff2424; background: #fff", "color: #ff2424; background: #fff", "color: #ff2424; background: #fff"];
                console.log.apply(console, i)
            } else window.console && console.log("Pixi.js " + e.VERSION + " - http://www.pixijs.com/");
            e.dontSayHello = !0
        }
    }, e.Point = function (t, e) {
        this.x = t || 0, this.y = e || 0
    }, e.Point.prototype.clone = function () {
        return new e.Point(this.x, this.y)
    }, e.Point.prototype.set = function (t, e) {
        this.x = t || 0, this.y = e || (0 !== e ? this.x : 0)
    }, e.Point.prototype.constructor = e.Point, e.Rectangle = function (t, e, i, r) {
        this.x = t || 0, this.y = e || 0, this.width = i || 0, this.height = r || 0
    }, e.Rectangle.prototype.clone = function () {
        return new e.Rectangle(this.x, this.y, this.width, this.height)
    }, e.Rectangle.prototype.contains = function (t, e) {
        if (this.width <= 0 || this.height <= 0)return !1;
        var i = this.x;
        if (t >= i && t <= i + this.width) {
            var r = this.y;
            if (e >= r && e <= r + this.height)return !0
        }
        return !1
    }, e.Rectangle.prototype.constructor = e.Rectangle, e.EmptyRectangle = new e.Rectangle(0, 0, 0, 0), e.Polygon = function (t) {
        if (t instanceof Array || (t = Array.prototype.slice.call(arguments)), t[0]instanceof e.Point) {
            for (var i = [], r = 0, s = t.length; s > r; r++)i.push(t[r].x, t[r].y);
            t = i
        }
        this.closed = !0, this.points = t
    }, e.Polygon.prototype.clone = function () {
        var t = this.points.slice();
        return new e.Polygon(t)
    }, e.Polygon.prototype.contains = function (t, e) {
        for (var i = !1, r = this.points.length / 2, s = 0, n = r - 1; r > s; n = s++) {
            var o = this.points[2 * s], a = this.points[2 * s + 1], h = this.points[2 * n], l = this.points[2 * n + 1], u = a > e != l > e && (h - o) * (e - a) / (l - a) + o > t;
            u && (i = !i)
        }
        return i
    }, e.Polygon.prototype.constructor = e.Polygon, e.Circle = function (t, e, i) {
        this.x = t || 0, this.y = e || 0, this.radius = i || 0
    }, e.Circle.prototype.clone = function () {
        return new e.Circle(this.x, this.y, this.radius)
    }, e.Circle.prototype.contains = function (t, e) {
        if (this.radius <= 0)return !1;
        var i = this.x - t, r = this.y - e, s = this.radius * this.radius;
        return i *= i, r *= r, s >= i + r
    }, e.Circle.prototype.getBounds = function () {
        return new e.Rectangle(this.x - this.radius, this.y - this.radius, 2 * this.radius, 2 * this.radius)
    }, e.Circle.prototype.constructor = e.Circle, e.Ellipse = function (t, e, i, r) {
        this.x = t || 0, this.y = e || 0, this.width = i || 0, this.height = r || 0
    }, e.Ellipse.prototype.clone = function () {
        return new e.Ellipse(this.x, this.y, this.width, this.height)
    }, e.Ellipse.prototype.contains = function (t, e) {
        if (this.width <= 0 || this.height <= 0)return !1;
        var i = (t - this.x) / this.width, r = (e - this.y) / this.height;
        return i *= i, r *= r, 1 >= i + r
    }, e.Ellipse.prototype.getBounds = function () {
        return new e.Rectangle(this.x - this.width, this.y - this.height, this.width, this.height)
    }, e.Ellipse.prototype.constructor = e.Ellipse, e.RoundedRectangle = function (t, e, i, r, s) {
        this.x = t || 0, this.y = e || 0, this.width = i || 0, this.height = r || 0, this.radius = s || 20
    }, e.RoundedRectangle.prototype.clone = function () {
        return new e.RoundedRectangle(this.x, this.y, this.width, this.height, this.radius)
    }, e.RoundedRectangle.prototype.contains = function (t, e) {
        if (this.width <= 0 || this.height <= 0)return !1;
        var i = this.x;
        if (t >= i && t <= i + this.width) {
            var r = this.y;
            if (e >= r && e <= r + this.height)return !0
        }
        return !1
    }, e.RoundedRectangle.prototype.constructor = e.RoundedRectangle, e.Matrix = function () {
        this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0
    }, e.Matrix.prototype.fromArray = function (t) {
        this.a = t[0], this.b = t[1], this.c = t[3], this.d = t[4], this.tx = t[2], this.ty = t[5]
    }, e.Matrix.prototype.toArray = function (t) {
        this.array || (this.array = new e.Float32Array(9));
        var i = this.array;
        return t ? (i[0] = this.a, i[1] = this.b, i[2] = 0, i[3] = this.c, i[4] = this.d, i[5] = 0, i[6] = this.tx, i[7] = this.ty, i[8] = 1) : (i[0] = this.a, i[1] = this.c, i[2] = this.tx, i[3] = this.b, i[4] = this.d, i[5] = this.ty, i[6] = 0, i[7] = 0, i[8] = 1), i
    }, e.Matrix.prototype.apply = function (t, i) {
        return i = i || new e.Point, i.x = this.a * t.x + this.c * t.y + this.tx, i.y = this.b * t.x + this.d * t.y + this.ty, i
    }, e.Matrix.prototype.applyInverse = function (t, i) {
        i = i || new e.Point;
        var r = 1 / (this.a * this.d + this.c * -this.b);
        return i.x = this.d * r * t.x + -this.c * r * t.y + (this.ty * this.c - this.tx * this.d) * r, i.y = this.a * r * t.y + -this.b * r * t.x + (-this.ty * this.a + this.tx * this.b) * r, i
    }, e.Matrix.prototype.translate = function (t, e) {
        return this.tx += t, this.ty += e, this
    }, e.Matrix.prototype.scale = function (t, e) {
        return this.a *= t, this.d *= e, this.c *= t, this.b *= e, this.tx *= t, this.ty *= e, this
    }, e.Matrix.prototype.rotate = function (t) {
        var e = Math.cos(t), i = Math.sin(t), r = this.a, s = this.c, n = this.tx;
        return this.a = r * e - this.b * i, this.b = r * i + this.b * e, this.c = s * e - this.d * i, this.d = s * i + this.d * e, this.tx = n * e - this.ty * i, this.ty = n * i + this.ty * e, this
    }, e.Matrix.prototype.append = function (t) {
        var e = this.a, i = this.b, r = this.c, s = this.d;
        return this.a = t.a * e + t.b * r, this.b = t.a * i + t.b * s, this.c = t.c * e + t.d * r, this.d = t.c * i + t.d * s, this.tx = t.tx * e + t.ty * r + this.tx, this.ty = t.tx * i + t.ty * s + this.ty, this
    }, e.Matrix.prototype.identity = function () {
        return this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, this
    }, e.identityMatrix = new e.Matrix, e.DisplayObject = function () {
        this.position = new e.Point, this.scale = new e.Point(1, 1), this.pivot = new e.Point(0, 0), this.rotation = 0, this.alpha = 1, this.visible = !0, this.hitArea = null, this.buttonMode = !1, this.renderable = !1, this.parent = null, this.stage = null, this.worldAlpha = 1, this._interactive = !1, this.defaultCursor = "pointer", this.worldTransform = new e.Matrix, this._sr = 0, this._cr = 1, this.filterArea = null, this._bounds = new e.Rectangle(0, 0, 1, 1), this._currentBounds = null, this._mask = null, this._cacheAsBitmap = !1, this._cacheIsDirty = !1
    }, e.DisplayObject.prototype.constructor = e.DisplayObject, Object.defineProperty(e.DisplayObject.prototype, "interactive", {
        get: function () {
            return this._interactive
        }, set: function (t) {
            this._interactive = t, this.stage && (this.stage.dirty = !0)
        }
    }), Object.defineProperty(e.DisplayObject.prototype, "worldVisible", {
        get: function () {
            var t = this;
            do {
                if (!t.visible)return !1;
                t = t.parent
            } while (t);
            return !0
        }
    }), Object.defineProperty(e.DisplayObject.prototype, "mask", {
        get: function () {
            return this._mask
        }, set: function (t) {
            this._mask && (this._mask.isMask = !1), this._mask = t, this._mask && (this._mask.isMask = !0)
        }
    }), Object.defineProperty(e.DisplayObject.prototype, "filters", {
        get: function () {
            return this._filters
        }, set: function (t) {
            if (t) {
                for (var e = [], i = 0; i < t.length; i++)for (var r = t[i].passes, s = 0; s < r.length; s++)e.push(r[s]);
                this._filterBlock = {target: this, filterPasses: e}
            }
            this._filters = t
        }
    }), Object.defineProperty(e.DisplayObject.prototype, "cacheAsBitmap", {
        get: function () {
            return this._cacheAsBitmap
        }, set: function (t) {
            this._cacheAsBitmap !== t && (t ? this._generateCachedSprite() : this._destroyCachedSprite(), this._cacheAsBitmap = t)
        }
    }), e.DisplayObject.prototype.updateTransform = function () {
        var t, i, r, s, n, o, a = this.parent.worldTransform, h = this.worldTransform;
        this.rotation % e.PI_2 ? (this.rotation !== this.rotationCache && (this.rotationCache = this.rotation, this._sr = Math.sin(this.rotation), this._cr = Math.cos(this.rotation)), t = this._cr * this.scale.x, i = this._sr * this.scale.x, r = -this._sr * this.scale.y, s = this._cr * this.scale.y, n = this.position.x, o = this.position.y, (this.pivot.x || this.pivot.y) && (n -= this.pivot.x * t + this.pivot.y * r, o -= this.pivot.x * i + this.pivot.y * s), h.a = t * a.a + i * a.c, h.b = t * a.b + i * a.d, h.c = r * a.a + s * a.c, h.d = r * a.b + s * a.d, h.tx = n * a.a + o * a.c + a.tx, h.ty = n * a.b + o * a.d + a.ty) : (t = this.scale.x, s = this.scale.y, n = this.position.x - this.pivot.x * t, o = this.position.y - this.pivot.y * s, h.a = t * a.a, h.b = t * a.b, h.c = s * a.c, h.d = s * a.d, h.tx = n * a.a + o * a.c + a.tx, h.ty = n * a.b + o * a.d + a.ty), this.worldAlpha = this.alpha * this.parent.worldAlpha
    }, e.DisplayObject.prototype.displayObjectUpdateTransform = e.DisplayObject.prototype.updateTransform, e.DisplayObject.prototype.getBounds = function (t) {
        return t = t, e.EmptyRectangle
    }, e.DisplayObject.prototype.getLocalBounds = function () {
        return this.getBounds(e.identityMatrix)
    }, e.DisplayObject.prototype.setStageReference = function (t) {
        this.stage = t, this._interactive && (this.stage.dirty = !0)
    }, e.DisplayObject.prototype.generateTexture = function (t, i, r) {
        var s = this.getLocalBounds(), n = new e.RenderTexture(0 | s.width, 0 | s.height, r, i, t);
        return e.DisplayObject._tempMatrix.tx = -s.x, e.DisplayObject._tempMatrix.ty = -s.y, n.render(this, e.DisplayObject._tempMatrix), n
    }, e.DisplayObject.prototype.updateCache = function () {
        this._generateCachedSprite()
    }, e.DisplayObject.prototype.toGlobal = function (t) {
        return this.displayObjectUpdateTransform(), this.worldTransform.apply(t)
    }, e.DisplayObject.prototype.toLocal = function (t, e) {
        return e && (t = e.toGlobal(t)), this.displayObjectUpdateTransform(), this.worldTransform.applyInverse(t)
    }, e.DisplayObject.prototype._renderCachedSprite = function (t) {
        this._cachedSprite.worldAlpha = this.worldAlpha, t.gl ? e.Sprite.prototype._renderWebGL.call(this._cachedSprite, t) : e.Sprite.prototype._renderCanvas.call(this._cachedSprite, t)
    }, e.DisplayObject.prototype._generateCachedSprite = function () {
        this._cacheAsBitmap = !1;
        var t = this.getLocalBounds();
        if (this._cachedSprite)this._cachedSprite.texture.resize(0 | t.width, 0 | t.height); else {
            var i = new e.RenderTexture(0 | t.width, 0 | t.height);
            this._cachedSprite = new e.Sprite(i), this._cachedSprite.worldTransform = this.worldTransform
        }
        var r = this._filters;
        this._filters = null, this._cachedSprite.filters = r, e.DisplayObject._tempMatrix.tx = -t.x, e.DisplayObject._tempMatrix.ty = -t.y, this._cachedSprite.texture.render(this, e.DisplayObject._tempMatrix, !0), this._cachedSprite.anchor.x = -(t.x / t.width), this._cachedSprite.anchor.y = -(t.y / t.height), this._filters = r, this._cacheAsBitmap = !0
    }, e.DisplayObject.prototype._destroyCachedSprite = function () {
        this._cachedSprite && (this._cachedSprite.texture.destroy(!0), this._cachedSprite = null)
    }, e.DisplayObject.prototype._renderWebGL = function (t) {
        t = t
    }, e.DisplayObject.prototype._renderCanvas = function (t) {
        t = t
    }, e.DisplayObject._tempMatrix = new e.Matrix, Object.defineProperty(e.DisplayObject.prototype, "x", {
        get: function () {
            return this.position.x
        }, set: function (t) {
            this.position.x = t
        }
    }), Object.defineProperty(e.DisplayObject.prototype, "y", {
        get: function () {
            return this.position.y
        }, set: function (t) {
            this.position.y = t
        }
    }), e.DisplayObjectContainer = function () {
        e.DisplayObject.call(this), this.children = []
    }, e.DisplayObjectContainer.prototype = Object.create(e.DisplayObject.prototype), e.DisplayObjectContainer.prototype.constructor = e.DisplayObjectContainer, Object.defineProperty(e.DisplayObjectContainer.prototype, "width", {
        get: function () {
            return this.scale.x * this.getLocalBounds().width
        }, set: function (t) {
            var e = this.getLocalBounds().width;
            this.scale.x = 0 !== e ? t / e : 1, this._width = t
        }
    }), Object.defineProperty(e.DisplayObjectContainer.prototype, "height", {
        get: function () {
            return this.scale.y * this.getLocalBounds().height
        }, set: function (t) {
            var e = this.getLocalBounds().height;
            this.scale.y = 0 !== e ? t / e : 1, this._height = t
        }
    }), e.DisplayObjectContainer.prototype.addChild = function (t) {
        return this.addChildAt(t, this.children.length)
    }, e.DisplayObjectContainer.prototype.addChildAt = function (t, e) {
        if (e >= 0 && e <= this.children.length)return t.parent && t.parent.removeChild(t), t.parent = this, this.children.splice(e, 0, t), this.stage && t.setStageReference(this.stage), t;
        throw new Error(t + "addChildAt: The index " + e + " supplied is out of bounds " + this.children.length)
    }, e.DisplayObjectContainer.prototype.swapChildren = function (t, e) {
        if (t !== e) {
            var i = this.getChildIndex(t), r = this.getChildIndex(e);
            if (0 > i || 0 > r)throw new Error("swapChildren: Both the supplied DisplayObjects must be a child of the caller.");
            this.children[i] = e, this.children[r] = t
        }
    }, e.DisplayObjectContainer.prototype.getChildIndex = function (t) {
        var e = this.children.indexOf(t);
        if (-1 === e)throw new Error("The supplied DisplayObject must be a child of the caller");
        return e
    }, e.DisplayObjectContainer.prototype.setChildIndex = function (t, e) {
        if (0 > e || e >= this.children.length)throw new Error("The supplied index is out of bounds");
        var i = this.getChildIndex(t);
        this.children.splice(i, 1), this.children.splice(e, 0, t)
    }, e.DisplayObjectContainer.prototype.getChildAt = function (t) {
        if (0 > t || t >= this.children.length)throw new Error("getChildAt: Supplied index " + t + " does not exist in the child list, or the supplied DisplayObject must be a child of the caller");
        return this.children[t]
    }, e.DisplayObjectContainer.prototype.removeChild = function (t) {
        var e = this.children.indexOf(t);
        if (-1 !== e)return this.removeChildAt(e)
    }, e.DisplayObjectContainer.prototype.removeChildAt = function (t) {
        var e = this.getChildAt(t);
        return this.stage && e.removeStageReference(), e.parent = void 0, this.children.splice(t, 1), e
    }, e.DisplayObjectContainer.prototype.removeChildren = function (t, e) {
        var i = t || 0, r = "number" == typeof e ? e : this.children.length, s = r - i;
        if (s > 0 && r >= s) {
            for (var n = this.children.splice(i, s), o = 0; o < n.length; o++) {
                var a = n[o];
                this.stage && a.removeStageReference(), a.parent = void 0
            }
            return n
        }
        if (0 === s && 0 === this.children.length)return [];
        throw new Error("removeChildren: Range Error, numeric values are outside the acceptable range")
    }, e.DisplayObjectContainer.prototype.updateTransform = function () {
        if (this.visible && (this.displayObjectUpdateTransform(), !this._cacheAsBitmap))for (var t = 0, e = this.children.length; e > t; t++)this.children[t].updateTransform()
    }, e.DisplayObjectContainer.prototype.displayObjectContainerUpdateTransform = e.DisplayObjectContainer.prototype.updateTransform, e.DisplayObjectContainer.prototype.getBounds = function () {
        if (0 === this.children.length)return e.EmptyRectangle;
        for (var t, i, r, s = 1 / 0, n = 1 / 0, o = -1 / 0, a = -1 / 0, h = !1, l = 0, u = this.children.length; u > l; l++) {
            var c = this.children[l];
            c.visible && (h = !0, t = this.children[l].getBounds(), s = s < t.x ? s : t.x, n = n < t.y ? n : t.y, i = t.width + t.x, r = t.height + t.y, o = o > i ? o : i, a = a > r ? a : r)
        }
        if (!h)return e.EmptyRectangle;
        var d = this._bounds;
        return d.x = s, d.y = n, d.width = o - s, d.height = a - n, d
    }, e.DisplayObjectContainer.prototype.getLocalBounds = function () {
        var t = this.worldTransform;
        this.worldTransform = e.identityMatrix;
        for (var i = 0, r = this.children.length; r > i; i++)this.children[i].updateTransform();
        var s = this.getBounds();
        return this.worldTransform = t, s
    }, e.DisplayObjectContainer.prototype.setStageReference = function (t) {
        this.stage = t, this._interactive && (this.stage.dirty = !0);
        for (var e = 0, i = this.children.length; i > e; e++) {
            var r = this.children[e];
            r.setStageReference(t)
        }
    }, e.DisplayObjectContainer.prototype.removeStageReference = function () {
        for (var t = 0, e = this.children.length; e > t; t++) {
            var i = this.children[t];
            i.removeStageReference()
        }
        this._interactive && (this.stage.dirty = !0), this.stage = null
    }, e.DisplayObjectContainer.prototype._renderWebGL = function (t) {
        if (this.visible && !(this.alpha <= 0)) {
            if (this._cacheAsBitmap)return void this._renderCachedSprite(t);
            var e, i;
            if (this._mask || this._filters) {
                for (this._filters && (t.spriteBatch.flush(), t.filterManager.pushFilter(this._filterBlock)), this._mask && (t.spriteBatch.stop(), t.maskManager.pushMask(this.mask, t), t.spriteBatch.start()), e = 0, i = this.children.length; i > e; e++)this.children[e]._renderWebGL(t);
                t.spriteBatch.stop(), this._mask && t.maskManager.popMask(this._mask, t), this._filters && t.filterManager.popFilter(), t.spriteBatch.start()
            } else for (e = 0, i = this.children.length; i > e; e++)this.children[e]._renderWebGL(t)
        }
    }, e.DisplayObjectContainer.prototype._renderCanvas = function (t) {
        if (this.visible !== !1 && 0 !== this.alpha) {
            if (this._cacheAsBitmap)return void this._renderCachedSprite(t);
            this._mask && t.maskManager.pushMask(this._mask, t);
            for (var e = 0, i = this.children.length; i > e; e++) {
                var r = this.children[e];
                r._renderCanvas(t)
            }
            this._mask && t.maskManager.popMask(t)
        }
    }, e.Sprite = function (t) {
        e.DisplayObjectContainer.call(this), this.anchor = new e.Point, this.texture = t || e.Texture.emptyTexture, this._width = 0, this._height = 0, this.tint = 16777215, this.blendMode = e.blendModes.NORMAL, this.shader = null, this.texture.baseTexture.hasLoaded ? this.onTextureUpdate() : this.texture.on("update", this.onTextureUpdate.bind(this)), this.renderable = !0
    },e.Sprite.prototype = Object.create(e.DisplayObjectContainer.prototype),e.Sprite.prototype.constructor = e.Sprite,Object.defineProperty(e.Sprite.prototype, "width", {
        get: function () {
            return this.scale.x * this.texture.frame.width
        }, set: function (t) {
            this.scale.x = t / this.texture.frame.width, this._width = t
        }
    }),Object.defineProperty(e.Sprite.prototype, "height", {
        get: function () {
            return this.scale.y * this.texture.frame.height
        }, set: function (t) {
            this.scale.y = t / this.texture.frame.height, this._height = t
        }
    }),e.Sprite.prototype.setTexture = function (t) {
        this.texture = t, this.cachedTint = 16777215
    },e.Sprite.prototype.onTextureUpdate = function () {
        this._width && (this.scale.x = this._width / this.texture.frame.width), this._height && (this.scale.y = this._height / this.texture.frame.height)
    },e.Sprite.prototype.getBounds = function (t) {
        var e = this.texture.frame.width, i = this.texture.frame.height, r = e * (1 - this.anchor.x), s = e * -this.anchor.x, n = i * (1 - this.anchor.y), o = i * -this.anchor.y, a = t || this.worldTransform, h = a.a, l = a.b, u = a.c, c = a.d, d = a.tx, p = a.ty, f = -1 / 0, g = -1 / 0, m = 1 / 0, v = 1 / 0;
        if (0 === l && 0 === u)0 > h && (h *= -1), 0 > c && (c *= -1), m = h * s + d, f = h * r + d, v = c * o + p, g = c * n + p; else {
            var x = h * s + u * o + d, y = c * o + l * s + p, b = h * r + u * o + d, T = c * o + l * r + p, S = h * r + u * n + d, w = c * n + l * r + p, C = h * s + u * n + d, A = c * n + l * s + p;
            m = m > x ? x : m, m = m > b ? b : m, m = m > S ? S : m, m = m > C ? C : m, v = v > y ? y : v, v = v > T ? T : v, v = v > w ? w : v, v = v > A ? A : v, f = x > f ? x : f, f = b > f ? b : f, f = S > f ? S : f, f = C > f ? C : f, g = y > g ? y : g, g = T > g ? T : g, g = w > g ? w : g, g = A > g ? A : g
        }
        var _ = this._bounds;
        return _.x = m, _.width = f - m, _.y = v, _.height = g - v, this._currentBounds = _, _
    },e.Sprite.prototype._renderWebGL = function (t) {
        if (this.visible && !(this.alpha <= 0)) {
            var e, i;
            if (this._mask || this._filters) {
                var r = t.spriteBatch;
                for (this._filters && (r.flush(), t.filterManager.pushFilter(this._filterBlock)), this._mask && (r.stop(), t.maskManager.pushMask(this.mask, t), r.start()), r.render(this), e = 0, i = this.children.length; i > e; e++)this.children[e]._renderWebGL(t);
                r.stop(), this._mask && t.maskManager.popMask(this._mask, t), this._filters && t.filterManager.popFilter(), r.start()
            } else for (t.spriteBatch.render(this), e = 0, i = this.children.length; i > e; e++)this.children[e]._renderWebGL(t)
        }
    },e.Sprite.prototype._renderCanvas = function (t) {
        if (!(this.visible === !1 || 0 === this.alpha || this.texture.crop.width <= 0 || this.texture.crop.height <= 0)) {
            if (this.blendMode !== t.currentBlendMode && (t.currentBlendMode = this.blendMode, t.context.globalCompositeOperation = e.blendModesCanvas[t.currentBlendMode]), this._mask && t.maskManager.pushMask(this._mask, t), this.texture.valid) {
                var i = this.texture.baseTexture.resolution / t.resolution;
                t.context.globalAlpha = this.worldAlpha, t.smoothProperty && t.scaleMode !== this.texture.baseTexture.scaleMode && (t.scaleMode = this.texture.baseTexture.scaleMode, t.context[t.smoothProperty] = t.scaleMode === e.scaleModes.LINEAR);
                var r = this.texture.trim ? this.texture.trim.x - this.anchor.x * this.texture.trim.width : this.anchor.x * -this.texture.frame.width, s = this.texture.trim ? this.texture.trim.y - this.anchor.y * this.texture.trim.height : this.anchor.y * -this.texture.frame.height;
                t.roundPixels ? (t.context.setTransform(this.worldTransform.a, this.worldTransform.b, this.worldTransform.c, this.worldTransform.d, this.worldTransform.tx * t.resolution | 0, this.worldTransform.ty * t.resolution | 0), r = 0 | r, s = 0 | s) : t.context.setTransform(this.worldTransform.a, this.worldTransform.b, this.worldTransform.c, this.worldTransform.d, this.worldTransform.tx * t.resolution, this.worldTransform.ty * t.resolution), 16777215 !== this.tint ? (this.cachedTint !== this.tint && (this.cachedTint = this.tint, this.tintedTexture = e.CanvasTinter.getTintedTexture(this, this.tint)), t.context.drawImage(this.tintedTexture, 0, 0, this.texture.crop.width, this.texture.crop.height, r / i, s / i, this.texture.crop.width / i, this.texture.crop.height / i)) : t.context.drawImage(this.texture.baseTexture.source, this.texture.crop.x, this.texture.crop.y, this.texture.crop.width, this.texture.crop.height, r / i, s / i, this.texture.crop.width / i, this.texture.crop.height / i)
            }
            for (var n = 0, o = this.children.length; o > n; n++)this.children[n]._renderCanvas(t);
            this._mask && t.maskManager.popMask(t)
        }
    },e.Sprite.fromFrame = function (t) {
        var i = e.TextureCache[t];
        if (!i)throw new Error('The frameId "' + t + '" does not exist in the texture cache' + this);
        return new e.Sprite(i)
    },e.Sprite.fromImage = function (t, i, r) {
        var s = e.Texture.fromImage(t, i, r);
        return new e.Sprite(s)
    },e.SpriteBatch = function (t) {
        e.DisplayObjectContainer.call(this), this.textureThing = t, this.ready = !1
    },e.SpriteBatch.prototype = Object.create(e.DisplayObjectContainer.prototype),e.SpriteBatch.prototype.constructor = e.SpriteBatch,e.SpriteBatch.prototype.initWebGL = function (t) {
        this.fastSpriteBatch = new e.WebGLFastSpriteBatch(t), this.ready = !0
    },e.SpriteBatch.prototype.updateTransform = function () {
        this.displayObjectUpdateTransform()
    },e.SpriteBatch.prototype._renderWebGL = function (t) {
        !this.visible || this.alpha <= 0 || !this.children.length || (this.ready || this.initWebGL(t.gl), t.spriteBatch.stop(), t.shaderManager.setShader(t.shaderManager.fastShader), this.fastSpriteBatch.begin(this, t), this.fastSpriteBatch.render(this), t.spriteBatch.start())
    },e.SpriteBatch.prototype._renderCanvas = function (t) {
        if (this.visible && !(this.alpha <= 0) && this.children.length) {
            var e = t.context;
            e.globalAlpha = this.worldAlpha, this.displayObjectUpdateTransform();
            for (var i = this.worldTransform, r = !0, s = 0; s < this.children.length; s++) {
                var n = this.children[s];
                if (n.visible) {
                    var o = n.texture, a = o.frame;
                    if (e.globalAlpha = this.worldAlpha * n.alpha, n.rotation % (2 * Math.PI) === 0)r && (e.setTransform(i.a, i.b, i.c, i.d, i.tx, i.ty), r = !1), e.drawImage(o.baseTexture.source, a.x, a.y, a.width, a.height, n.anchor.x * -a.width * n.scale.x + n.position.x + .5 | 0, n.anchor.y * -a.height * n.scale.y + n.position.y + .5 | 0, a.width * n.scale.x, a.height * n.scale.y); else {
                        r || (r = !0), n.displayObjectUpdateTransform();
                        var h = n.worldTransform;
                        t.roundPixels ? e.setTransform(h.a, h.b, h.c, h.d, 0 | h.tx, 0 | h.ty) : e.setTransform(h.a, h.b, h.c, h.d, h.tx, h.ty), e.drawImage(o.baseTexture.source, a.x, a.y, a.width, a.height, n.anchor.x * -a.width + .5 | 0, n.anchor.y * -a.height + .5 | 0, a.width, a.height)
                    }
                }
            }
        }
    },e.MovieClip = function (t) {
        e.Sprite.call(this, t[0]), this.textures = t, this.animationSpeed = 1, this.loop = !0, this.onComplete = null, this.currentFrame = 0, this.playing = !1
    },e.MovieClip.prototype = Object.create(e.Sprite.prototype),e.MovieClip.prototype.constructor = e.MovieClip,Object.defineProperty(e.MovieClip.prototype, "totalFrames", {
        get: function () {
            return this.textures.length
        }
    }),e.MovieClip.prototype.stop = function () {
        this.playing = !1
    },e.MovieClip.prototype.play = function () {
        this.playing = !0
    },e.MovieClip.prototype.gotoAndStop = function (t) {
        this.playing = !1, this.currentFrame = t;
        var e = this.currentFrame + .5 | 0;
        this.setTexture(this.textures[e % this.textures.length])
    },e.MovieClip.prototype.gotoAndPlay = function (t) {
        this.currentFrame = t, this.playing = !0
    },e.MovieClip.prototype.updateTransform = function () {
        if (this.displayObjectContainerUpdateTransform(), this.playing) {
            this.currentFrame += this.animationSpeed;
            var t = this.currentFrame + .5 | 0;
            this.currentFrame = this.currentFrame % this.textures.length, this.loop || t < this.textures.length ? this.setTexture(this.textures[t % this.textures.length]) : t >= this.textures.length && (this.gotoAndStop(this.textures.length - 1), this.onComplete && this.onComplete())
        }
    },e.MovieClip.fromFrames = function (t) {
        for (var i = [], r = 0; r < t.length; r++)i.push(new e.Texture.fromFrame(t[r]));
        return new e.MovieClip(i)
    },e.MovieClip.fromImages = function (t) {
        for (var i = [], r = 0; r < t.length; r++)i.push(new e.Texture.fromImage(t[r]));
        return new e.MovieClip(i)
    },e.FilterBlock = function () {
        this.visible = !0, this.renderable = !0
    },e.FilterBlock.prototype.constructor = e.FilterBlock,e.Text = function (t, i) {
        this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.resolution = 1, e.Sprite.call(this, e.Texture.fromCanvas(this.canvas)), this.setText(t), this.setStyle(i)
    },e.Text.prototype = Object.create(e.Sprite.prototype),e.Text.prototype.constructor = e.Text,Object.defineProperty(e.Text.prototype, "width", {
        get: function () {
            return this.dirty && (this.updateText(), this.dirty = !1), this.scale.x * this.texture.frame.width
        }, set: function (t) {
            this.scale.x = t / this.texture.frame.width, this._width = t
        }
    }),Object.defineProperty(e.Text.prototype, "height", {
        get: function () {
            return this.dirty && (this.updateText(), this.dirty = !1), this.scale.y * this.texture.frame.height
        }, set: function (t) {
            this.scale.y = t / this.texture.frame.height, this._height = t
        }
    }),e.Text.prototype.setStyle = function (t) {
        t = t || {}, t.font = t.font || "bold 20pt Arial", t.fill = t.fill || "black", t.align = t.align || "left", t.stroke = t.stroke || "black", t.strokeThickness = t.strokeThickness || 0, t.wordWrap = t.wordWrap || !1, t.wordWrapWidth = t.wordWrapWidth || 100, t.dropShadow = t.dropShadow || !1, t.dropShadowAngle = t.dropShadowAngle || Math.PI / 6, t.dropShadowDistance = t.dropShadowDistance || 4, t.dropShadowColor = t.dropShadowColor || "black", this.style = t, this.dirty = !0
    },e.Text.prototype.setText = function (t) {
        this.text = t.toString() || " ", this.dirty = !0
    },e.Text.prototype.updateText = function () {
        this.texture.baseTexture.resolution = this.resolution, this.context.font = this.style.font;
        var t = this.text;
        this.style.wordWrap && (t = this.wordWrap(this.text));
        for (var e = t.split(/(?:\r\n|\r|\n)/), i = [], r = 0, s = this.determineFontProperties(this.style.font), n = 0; n < e.length; n++) {
            var o = this.context.measureText(e[n]).width;
            i[n] = o, r = Math.max(r, o)
        }
        var a = r + this.style.strokeThickness;
        this.style.dropShadow && (a += this.style.dropShadowDistance), this.canvas.width = (a + this.context.lineWidth) * this.resolution;
        var h = s.fontSize + this.style.strokeThickness, l = h * e.length;
        this.style.dropShadow && (l += this.style.dropShadowDistance), this.canvas.height = l * this.resolution, this.context.scale(this.resolution, this.resolution), navigator.isCocoonJS && this.context.clearRect(0, 0, this.canvas.width, this.canvas.height), this.context.font = this.style.font, this.context.strokeStyle = this.style.stroke, this.context.lineWidth = this.style.strokeThickness, this.context.textBaseline = "alphabetic";
        var u, c;
        if (this.style.dropShadow) {
            this.context.fillStyle = this.style.dropShadowColor;
            var d = Math.sin(this.style.dropShadowAngle) * this.style.dropShadowDistance, p = Math.cos(this.style.dropShadowAngle) * this.style.dropShadowDistance;
            for (n = 0; n < e.length; n++)u = this.style.strokeThickness / 2, c = this.style.strokeThickness / 2 + n * h + s.ascent, "right" === this.style.align ? u += r - i[n] : "center" === this.style.align && (u += (r - i[n]) / 2), this.style.fill && this.context.fillText(e[n], u + d, c + p)
        }
        for (this.context.fillStyle = this.style.fill, n = 0; n < e.length; n++)u = this.style.strokeThickness / 2, c = this.style.strokeThickness / 2 + n * h + s.ascent, "right" === this.style.align ? u += r - i[n] : "center" === this.style.align && (u += (r - i[n]) / 2), this.style.stroke && this.style.strokeThickness && this.context.strokeText(e[n], u, c), this.style.fill && this.context.fillText(e[n], u, c);
        this.updateTexture()
    },e.Text.prototype.updateTexture = function () {
        this.texture.baseTexture.width = this.canvas.width, this.texture.baseTexture.height = this.canvas.height, this.texture.crop.width = this.texture.frame.width = this.canvas.width, this.texture.crop.height = this.texture.frame.height = this.canvas.height, this._width = this.canvas.width, this._height = this.canvas.height, this.texture.baseTexture.dirty()
    },e.Text.prototype._renderWebGL = function (t) {
        this.dirty && (this.resolution = t.resolution, this.updateText(), this.dirty = !1), e.Sprite.prototype._renderWebGL.call(this, t)
    },e.Text.prototype._renderCanvas = function (t) {
        this.dirty && (this.resolution = t.resolution, this.updateText(), this.dirty = !1), e.Sprite.prototype._renderCanvas.call(this, t)
    },e.Text.prototype.determineFontProperties = function (t) {
        var i = e.Text.fontPropertiesCache[t];
        if (!i) {
            i = {};
            var r = e.Text.fontPropertiesCanvas, s = e.Text.fontPropertiesContext;
            s.font = t;
            var n = Math.ceil(s.measureText("|Mq").width), o = Math.ceil(s.measureText("M").width), a = 2 * o;
            o = 1.4 * o | 0, r.width = n, r.height = a, s.fillStyle = "#f00", s.fillRect(0, 0, n, a), s.font = t, s.textBaseline = "alphabetic", s.fillStyle = "#000", s.fillText("|MÉq", 0, o);
            var h, l, u = s.getImageData(0, 0, n, a).data, c = u.length, d = 4 * n, p = 0, f = !1;
            for (h = 0; o > h; h++) {
                for (l = 0; d > l; l += 4)if (255 !== u[p + l]) {
                    f = !0;
                    break
                }
                if (f)break;
                p += d
            }
            for (i.ascent = o - h, p = c - d, f = !1, h = a; h > o; h--) {
                for (l = 0; d > l; l += 4)if (255 !== u[p + l]) {
                    f = !0;
                    break
                }
                if (f)break;
                p -= d
            }
            i.descent = h - o, i.descent += 6, i.fontSize = i.ascent + i.descent, e.Text.fontPropertiesCache[t] = i
        }
        return i
    },e.Text.prototype.wordWrap = function (t) {
        for (var e = "", i = t.split("\n"), r = 0; r < i.length; r++) {
            for (var s = this.style.wordWrapWidth, n = i[r].split(" "), o = 0; o < n.length; o++) {
                var a = this.context.measureText(n[o]).width, h = a + this.context.measureText(" ").width;
                0 === o || h > s ? (o > 0 && (e += "\n"), e += n[o], s = this.style.wordWrapWidth - a) : (s -= h, e += " " + n[o])
            }
            r < i.length - 1 && (e += "\n")
        }
        return e
    },e.Text.prototype.getBounds = function (t) {
        return this.dirty && (this.updateText(), this.dirty = !1), e.Sprite.prototype.getBounds.call(this, t)
    },e.Text.prototype.destroy = function (t) {
        this.context = null, this.canvas = null, this.texture.destroy(void 0 === t ? !0 : t)
    },e.Text.fontPropertiesCache = {},e.Text.fontPropertiesCanvas = document.createElement("canvas"),e.Text.fontPropertiesContext = e.Text.fontPropertiesCanvas.getContext("2d"),e.BitmapText = function (t, i) {
        e.DisplayObjectContainer.call(this), this.textWidth = 0, this.textHeight = 0, this._pool = [], this.setText(t), this.setStyle(i), this.updateText(), this.dirty = !1
    },e.BitmapText.prototype = Object.create(e.DisplayObjectContainer.prototype),e.BitmapText.prototype.constructor = e.BitmapText,e.BitmapText.prototype.setText = function (t) {
        this.text = t || " ", this.dirty = !0
    },e.BitmapText.prototype.setStyle = function (t) {
        t = t || {}, t.align = t.align || "left", this.style = t;
        var i = t.font.split(" ");
        this.fontName = i[i.length - 1], this.fontSize = i.length >= 2 ? parseInt(i[i.length - 2], 10) : e.BitmapText.fonts[this.fontName].size, this.dirty = !0, this.tint = t.tint
    },e.BitmapText.prototype.updateText = function () {
        for (var t = e.BitmapText.fonts[this.fontName], i = new e.Point, r = null, s = [], n = 0, o = [], a = 0, h = this.fontSize / t.size, l = 0; l < this.text.length; l++) {
            var u = this.text.charCodeAt(l);
            if (/(?:\r\n|\r|\n)/.test(this.text.charAt(l)))o.push(i.x), n = Math.max(n, i.x), a++, i.x = 0, i.y += t.lineHeight, r = null; else {
                var c = t.chars[u];
                c && (r && c.kerning[r] && (i.x += c.kerning[r]), s.push({
                    texture: c.texture,
                    line: a,
                    charCode: u,
                    position: new e.Point(i.x + c.xOffset, i.y + c.yOffset)
                }), i.x += c.xAdvance, r = u)
            }
        }
        o.push(i.x), n = Math.max(n, i.x);
        var d = [];
        for (l = 0; a >= l; l++) {
            var p = 0;
            "right" === this.style.align ? p = n - o[l] : "center" === this.style.align && (p = (n - o[l]) / 2), d.push(p)
        }
        var f = this.children.length, g = s.length, m = this.tint || 16777215;
        for (l = 0; g > l; l++) {
            var v = f > l ? this.children[l] : this._pool.pop();
            v ? v.setTexture(s[l].texture) : v = new e.Sprite(s[l].texture), v.position.x = (s[l].position.x + d[s[l].line]) * h, v.position.y = s[l].position.y * h, v.scale.x = v.scale.y = h, v.tint = m, v.parent || this.addChild(v)
        }
        for (; this.children.length > g;) {
            var x = this.getChildAt(this.children.length - 1);
            this._pool.push(x), this.removeChild(x)
        }
        this.textWidth = n * h, this.textHeight = (i.y + t.lineHeight) * h
    },e.BitmapText.prototype.updateTransform = function () {
        this.dirty && (this.updateText(), this.dirty = !1), e.DisplayObjectContainer.prototype.updateTransform.call(this)
    },e.BitmapText.fonts = {},e.InteractionData = function () {
        this.global = new e.Point, this.target = null, this.originalEvent = null
    },e.InteractionData.prototype.getLocalPosition = function (t, i) {
        var r = t.worldTransform, s = this.global, n = r.a, o = r.c, a = r.tx, h = r.b, l = r.d, u = r.ty, c = 1 / (n * l + o * -h);
        return i = i || new e.Point, i.x = l * c * s.x + -o * c * s.y + (u * o - a * l) * c, i.y = n * c * s.y + -h * c * s.x + (-u * n + a * h) * c, i
    },e.InteractionData.prototype.constructor = e.InteractionData,e.InteractionManager = function (t) {
        this.stage = t, this.mouse = new e.InteractionData, this.touches = {}, this.tempPoint = new e.Point, this.mouseoverEnabled = !0, this.pool = [], this.interactiveItems = [], this.interactionDOMElement = null, this.onMouseMove = this.onMouseMove.bind(this), this.onMouseDown = this.onMouseDown.bind(this), this.onMouseOut = this.onMouseOut.bind(this), this.onMouseUp = this.onMouseUp.bind(this), this.onTouchStart = this.onTouchStart.bind(this), this.onTouchEnd = this.onTouchEnd.bind(this), this.onTouchMove = this.onTouchMove.bind(this), this.last = 0, this.currentCursorStyle = "inherit", this.mouseOut = !1, this.resolution = 1, this._tempPoint = new e.Point
    },e.InteractionManager.prototype.constructor = e.InteractionManager,e.InteractionManager.prototype.collectInteractiveSprite = function (t, e) {
        for (var i = t.children, r = i.length, s = r - 1; s >= 0; s--) {
            var n = i[s];
            n._interactive ? (e.interactiveChildren = !0, this.interactiveItems.push(n), n.children.length > 0 && this.collectInteractiveSprite(n, n)) : (n.__iParent = null, n.children.length > 0 && this.collectInteractiveSprite(n, e))
        }
    },e.InteractionManager.prototype.setTarget = function (t) {
        this.target = t, this.resolution = t.resolution, null === this.interactionDOMElement && this.setTargetDomElement(t.view)
    },e.InteractionManager.prototype.setTargetDomElement = function (t) {
        this.removeEvents(), window.navigator.msPointerEnabled && (t.style["-ms-content-zooming"] = "none", t.style["-ms-touch-action"] = "none"), this.interactionDOMElement = t, t.addEventListener("mousemove", this.onMouseMove, !0), t.addEventListener("mousedown", this.onMouseDown, !0), t.addEventListener("mouseout", this.onMouseOut, !0), t.addEventListener("touchstart", this.onTouchStart, !0), t.addEventListener("touchend", this.onTouchEnd, !0), t.addEventListener("touchmove", this.onTouchMove, !0), window.addEventListener("mouseup", this.onMouseUp, !0)
    },e.InteractionManager.prototype.removeEvents = function () {
        this.interactionDOMElement && (this.interactionDOMElement.style["-ms-content-zooming"] = "", this.interactionDOMElement.style["-ms-touch-action"] = "", this.interactionDOMElement.removeEventListener("mousemove", this.onMouseMove, !0), this.interactionDOMElement.removeEventListener("mousedown", this.onMouseDown, !0), this.interactionDOMElement.removeEventListener("mouseout", this.onMouseOut, !0), this.interactionDOMElement.removeEventListener("touchstart", this.onTouchStart, !0), this.interactionDOMElement.removeEventListener("touchend", this.onTouchEnd, !0), this.interactionDOMElement.removeEventListener("touchmove", this.onTouchMove, !0), this.interactionDOMElement = null, window.removeEventListener("mouseup", this.onMouseUp, !0))
    },e.InteractionManager.prototype.update = function () {
        if (this.target) {
            var t = Date.now(), i = t - this.last;
            if (i = i * e.INTERACTION_FREQUENCY / 1e3, !(1 > i)) {
                this.last = t;
                var r = 0;
                this.dirty && this.rebuildInteractiveGraph();
                var s = this.interactiveItems.length, n = "inherit", o = !1;
                for (r = 0; s > r; r++) {
                    var a = this.interactiveItems[r];
                    a.__hit = this.hitTest(a, this.mouse), this.mouse.target = a, a.__hit && !o ? (a.buttonMode && (n = a.defaultCursor), a.interactiveChildren || (o = !0), a.__isOver || (a.mouseover && a.mouseover(this.mouse), a.__isOver = !0)) : a.__isOver && (a.mouseout && a.mouseout(this.mouse), a.__isOver = !1)
                }
                this.currentCursorStyle !== n && (this.currentCursorStyle = n, this.interactionDOMElement.style.cursor = n)
            }
        }
    },e.InteractionManager.prototype.rebuildInteractiveGraph = function () {
        this.dirty = !1;
        for (var t = this.interactiveItems.length, e = 0; t > e; e++)this.interactiveItems[e].interactiveChildren = !1;
        this.interactiveItems = [], this.stage.interactive && this.interactiveItems.push(this.stage), this.collectInteractiveSprite(this.stage, this.stage)
    },e.InteractionManager.prototype.onMouseMove = function (t) {
        this.dirty && this.rebuildInteractiveGraph(), this.mouse.originalEvent = t;
        var e = this.interactionDOMElement.getBoundingClientRect();
        this.mouse.global.x = (t.clientX - e.left) * (this.target.width / e.width) / this.resolution, this.mouse.global.y = (t.clientY - e.top) * (this.target.height / e.height) / this.resolution;
        for (var i = this.interactiveItems.length, r = 0; i > r; r++) {
            var s = this.interactiveItems[r];
            s.mousemove && s.mousemove(this.mouse)
        }
    },e.InteractionManager.prototype.onMouseDown = function (t) {
        this.dirty && this.rebuildInteractiveGraph(), this.mouse.originalEvent = t, e.AUTO_PREVENT_DEFAULT && this.mouse.originalEvent.preventDefault();
        for (var i = this.interactiveItems.length, r = this.mouse.originalEvent, s = 2 === r.button || 3 === r.which, n = s ? "rightdown" : "mousedown", o = s ? "rightclick" : "click", a = s ? "__rightIsDown" : "__mouseIsDown", h = s ? "__isRightDown" : "__isDown", l = 0; i > l; l++) {
            var u = this.interactiveItems[l];
            if ((u[n] || u[o]) && (u[a] = !0, u.__hit = this.hitTest(u, this.mouse), u.__hit && (u[n] && u[n](this.mouse), u[h] = !0, !u.interactiveChildren)))break
        }
    },e.InteractionManager.prototype.onMouseOut = function (t) {
        this.dirty && this.rebuildInteractiveGraph(), this.mouse.originalEvent = t;
        var e = this.interactiveItems.length;
        this.interactionDOMElement.style.cursor = "inherit";
        for (var i = 0; e > i; i++) {
            var r = this.interactiveItems[i];
            r.__isOver && (this.mouse.target = r, r.mouseout && r.mouseout(this.mouse), r.__isOver = !1)
        }
        this.mouseOut = !0, this.mouse.global.x = -1e4, this.mouse.global.y = -1e4
    },e.InteractionManager.prototype.onMouseUp = function (t) {
        this.dirty && this.rebuildInteractiveGraph(), this.mouse.originalEvent = t;
        for (var e = this.interactiveItems.length, i = !1, r = this.mouse.originalEvent, s = 2 === r.button || 3 === r.which, n = s ? "rightup" : "mouseup", o = s ? "rightclick" : "click", a = s ? "rightupoutside" : "mouseupoutside", h = s ? "__isRightDown" : "__isDown", l = 0; e > l; l++) {
            var u = this.interactiveItems[l];
            (u[o] || u[n] || u[a]) && (u.__hit = this.hitTest(u, this.mouse), u.__hit && !i ? (u[n] && u[n](this.mouse), u[h] && u[o] && u[o](this.mouse), u.interactiveChildren || (i = !0)) : u[h] && u[a] && u[a](this.mouse), u[h] = !1)
        }
    },e.InteractionManager.prototype.hitTest = function (t, i) {
        var r = i.global;
        if (!t.worldVisible)return !1;
        t.worldTransform.applyInverse(r, this._tempPoint);
        var s, n = this._tempPoint.x, o = this._tempPoint.y;
        if (i.target = t, t.hitArea && t.hitArea.contains)return t.hitArea.contains(n, o);
        if (t instanceof e.Sprite) {
            var a, h = t.texture.frame.width, l = t.texture.frame.height, u = -h * t.anchor.x;
            if (n > u && u + h > n && (a = -l * t.anchor.y, o > a && a + l > o))return !0
        } else if (t instanceof e.Graphics) {
            var c = t.graphicsData;
            for (s = 0; s < c.length; s++) {
                var d = c[s];
                if (d.fill && d.shape && d.shape.contains(n, o))return !0
            }
        }
        var p = t.children.length;
        for (s = 0; p > s; s++) {
            var f = t.children[s], g = this.hitTest(f, i);
            if (g)return i.target = t, !0
        }
        return !1
    },e.InteractionManager.prototype.onTouchMove = function (t) {
        this.dirty && this.rebuildInteractiveGraph();
        var e, i = this.interactionDOMElement.getBoundingClientRect(), r = t.changedTouches, s = 0;
        for (s = 0; s < r.length; s++) {
            var n = r[s];
            e = this.touches[n.identifier], e.originalEvent = t, e.global.x = (n.clientX - i.left) * (this.target.width / i.width) / this.resolution, e.global.y = (n.clientY - i.top) * (this.target.height / i.height) / this.resolution, !navigator.isCocoonJS || i.left || i.top || t.target.style.width || t.target.style.height || (e.global.x = n.clientX, e.global.y = n.clientY);
            for (var o = 0; o < this.interactiveItems.length; o++) {
                var a = this.interactiveItems[o];
                a.touchmove && a.__touchData && a.__touchData[n.identifier] && a.touchmove(e)
            }
        }
    },e.InteractionManager.prototype.onTouchStart = function (t) {
        this.dirty && this.rebuildInteractiveGraph();
        var i = this.interactionDOMElement.getBoundingClientRect();
        e.AUTO_PREVENT_DEFAULT && t.preventDefault();
        for (var r = t.changedTouches, s = 0; s < r.length; s++) {
            var n = r[s], o = this.pool.pop();
            o || (o = new e.InteractionData), o.originalEvent = t, this.touches[n.identifier] = o, o.global.x = (n.clientX - i.left) * (this.target.width / i.width) / this.resolution, o.global.y = (n.clientY - i.top) * (this.target.height / i.height) / this.resolution, !navigator.isCocoonJS || i.left || i.top || t.target.style.width || t.target.style.height || (o.global.x = n.clientX, o.global.y = n.clientY);
            for (var a = this.interactiveItems.length, h = 0; a > h; h++) {
                var l = this.interactiveItems[h];
                if ((l.touchstart || l.tap) && (l.__hit = this.hitTest(l, o), l.__hit && (l.touchstart && l.touchstart(o), l.__isDown = !0, l.__touchData = l.__touchData || {}, l.__touchData[n.identifier] = o, !l.interactiveChildren)))break
            }
        }
    },e.InteractionManager.prototype.onTouchEnd = function (t) {
        this.dirty && this.rebuildInteractiveGraph();
        for (var e = this.interactionDOMElement.getBoundingClientRect(), i = t.changedTouches, r = 0; r < i.length; r++) {
            var s = i[r], n = this.touches[s.identifier], o = !1;
            n.global.x = (s.clientX - e.left) * (this.target.width / e.width) / this.resolution, n.global.y = (s.clientY - e.top) * (this.target.height / e.height) / this.resolution, !navigator.isCocoonJS || e.left || e.top || t.target.style.width || t.target.style.height || (n.global.x = s.clientX, n.global.y = s.clientY);
            for (var a = this.interactiveItems.length, h = 0; a > h; h++) {
                var l = this.interactiveItems[h];
                l.__touchData && l.__touchData[s.identifier] && (l.__hit = this.hitTest(l, l.__touchData[s.identifier]), n.originalEvent = t, (l.touchend || l.tap) && (l.__hit && !o ? (l.touchend && l.touchend(n), l.__isDown && l.tap && l.tap(n), l.interactiveChildren || (o = !0)) : l.__isDown && l.touchendoutside && l.touchendoutside(n), l.__isDown = !1), l.__touchData[s.identifier] = null)
            }
            this.pool.push(n), this.touches[s.identifier] = null
        }
    },e.Stage = function (t) {
        e.DisplayObjectContainer.call(this), this.worldTransform = new e.Matrix, this.interactive = !0, this.interactionManager = new e.InteractionManager(this), this.dirty = !0, this.stage = this, this.stage.hitArea = new e.Rectangle(0, 0, 1e5, 1e5), this.setBackgroundColor(t)
    },e.Stage.prototype = Object.create(e.DisplayObjectContainer.prototype),e.Stage.prototype.constructor = e.Stage,e.Stage.prototype.setInteractionDelegate = function (t) {
        this.interactionManager.setTargetDomElement(t)
    },e.Stage.prototype.updateTransform = function () {
        this.worldAlpha = 1;
        for (var t = 0, e = this.children.length; e > t; t++)this.children[t].updateTransform();
        this.dirty && (this.dirty = !1, this.interactionManager.dirty = !0), this.interactive && this.interactionManager.update()
    },e.Stage.prototype.setBackgroundColor = function (t) {
        this.backgroundColor = t || 0, this.backgroundColorSplit = e.hex2rgb(this.backgroundColor);
        var i = this.backgroundColor.toString(16);
        i = "000000".substr(0, 6 - i.length) + i, this.backgroundColorString = "#" + i
    },e.Stage.prototype.getMousePosition = function () {
        return this.interactionManager.mouse.global
    },function (t) {
        for (var e = 0, i = ["ms", "moz", "webkit", "o"], r = 0; r < i.length && !t.requestAnimationFrame; ++r)t.requestAnimationFrame = t[i[r] + "RequestAnimationFrame"], t.cancelAnimationFrame = t[i[r] + "CancelAnimationFrame"] || t[i[r] + "CancelRequestAnimationFrame"];
        t.requestAnimationFrame || (t.requestAnimationFrame = function (i) {
            var r = (new Date).getTime(), s = Math.max(0, 16 - (r - e)), n = t.setTimeout(function () {
                i(r + s)
            }, s);
            return e = r + s, n
        }), t.cancelAnimationFrame || (t.cancelAnimationFrame = function (t) {
            clearTimeout(t)
        }), t.requestAnimFrame = t.requestAnimationFrame
    }(this),e.hex2rgb = function (t) {
        return [(t >> 16 & 255) / 255, (t >> 8 & 255) / 255, (255 & t) / 255]
    },e.rgb2hex = function (t) {
        return (255 * t[0] << 16) + (255 * t[1] << 8) + 255 * t[2]
    },"function" != typeof Function.prototype.bind && (Function.prototype.bind = function () {
        return function (t) {
            function e() {
                for (var r = arguments.length, n = new Array(r); r--;)n[r] = arguments[r];
                return n = s.concat(n), i.apply(this instanceof e ? this : t, n)
            }

            var i = this, r = arguments.length - 1, s = [];
            if (r > 0)for (s.length = r; r--;)s[r] = arguments[r + 1];
            if ("function" != typeof i)throw new TypeError;
            return e.prototype = function n(t) {
                return t && (n.prototype = t), this instanceof n ? void 0 : new n
            }(i.prototype), e
        }
    }()),e.AjaxRequest = function () {
        var t = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0", "Microsoft.XMLHTTP"];
        if (!window.ActiveXObject)return window.XMLHttpRequest ? new window.XMLHttpRequest : !1;
        for (var e = 0; e < t.length; e++)try {
            return new window.ActiveXObject(t[e])
        } catch (i) {
        }
    },e.canUseNewCanvasBlendModes = function () {
        if ("undefined" == typeof document)return !1;
        var t = document.createElement("canvas");
        t.width = 1, t.height = 1;
        var e = t.getContext("2d");
        return e.fillStyle = "#000", e.fillRect(0, 0, 1, 1), e.globalCompositeOperation = "multiply", e.fillStyle = "#fff", e.fillRect(0, 0, 1, 1), 0 === e.getImageData(0, 0, 1, 1).data[0]
    },e.getNextPowerOfTwo = function (t) {
        if (t > 0 && 0 === (t & t - 1))return t;
        for (var e = 1; t > e;)e <<= 1;
        return e
    },e.isPowerOfTwo = function (t, e) {
        return t > 0 && 0 === (t & t - 1) && e > 0 && 0 === (e & e - 1)
    },e.EventTarget = {
        call: function (t) {
            t && (t = t.prototype || t, e.EventTarget.mixin(t))
        }, mixin: function (t) {
            t.listeners = function (t) {
                return this._listeners = this._listeners || {}, this._listeners[t] ? this._listeners[t].slice() : []
            }, t.emit = t.dispatchEvent = function (t, i) {
                if (this._listeners = this._listeners || {}, "object" == typeof t && (i = t, t = t.type), i && i.__isEventObject === !0 || (i = new e.Event(this, t, i)), this._listeners && this._listeners[t]) {
                    var r, s = this._listeners[t].slice(0), n = s.length, o = s[0];
                    for (r = 0; n > r; o = s[++r])if (o.call(this, i), i.stoppedImmediate)return this;
                    if (i.stopped)return this
                }
                return this.parent && this.parent.emit && this.parent.emit.call(this.parent, t, i), this
            }, t.on = t.addEventListener = function (t, e) {
                return this._listeners = this._listeners || {}, (this._listeners[t] = this._listeners[t] || []).push(e), this
            }, t.once = function (t, e) {
                function i() {
                    e.apply(r.off(t, i), arguments)
                }

                this._listeners = this._listeners || {};
                var r = this;
                return i._originalHandler = e, this.on(t, i)
            }, t.off = t.removeEventListener = function (t, e) {
                if (this._listeners = this._listeners || {}, !this._listeners[t])return this;
                for (var i = this._listeners[t], r = e ? i.length : 0; r-- > 0;)(i[r] === e || i[r]._originalHandler === e) && i.splice(r, 1);
                return 0 === i.length && delete this._listeners[t], this
            }, t.removeAllListeners = function (t) {
                return this._listeners = this._listeners || {}, this._listeners[t] ? (delete this._listeners[t], this) : this
            }
        }
    },e.Event = function (t, e, i) {
        this.__isEventObject = !0, this.stopped = !1, this.stoppedImmediate = !1, this.target = t, this.type = e, this.data = i, this.content = i, this.timeStamp = Date.now()
    },e.Event.prototype.stopPropagation = function () {
        this.stopped = !0
    },e.Event.prototype.stopImmediatePropagation = function () {
        this.stoppedImmediate = !0
    },e.autoDetectRenderer = function (t, i, r) {
        t || (t = 800), i || (i = 600);
        var s = function () {
            try {
                var t = document.createElement("canvas");
                return !!window.WebGLRenderingContext && (t.getContext("webgl") || t.getContext("experimental-webgl"))
            } catch (e) {
                return !1
            }
        }();
        return s ? new e.WebGLRenderer(t, i, r) : new e.CanvasRenderer(t, i, r)
    },e.autoDetectRecommendedRenderer = function (t, i, r) {
        t || (t = 800), i || (i = 600);
        var s = function () {
            try {
                var t = document.createElement("canvas");
                return !!window.WebGLRenderingContext && (t.getContext("webgl") || t.getContext("experimental-webgl"))
            } catch (e) {
                return !1
            }
        }(), n = /Android/i.test(navigator.userAgent);
        return s && !n ? new e.WebGLRenderer(t, i, r) : new e.CanvasRenderer(t, i, r)
    },e.PolyK = {},e.PolyK.Triangulate = function (t) {
        var i = !0, r = t.length >> 1;
        if (3 > r)return [];
        for (var s = [], n = [], o = 0; r > o; o++)n.push(o);
        o = 0;
        for (var a = r; a > 3;) {
            var h = n[(o + 0) % a], l = n[(o + 1) % a], u = n[(o + 2) % a], c = t[2 * h], d = t[2 * h + 1], p = t[2 * l], f = t[2 * l + 1], g = t[2 * u], m = t[2 * u + 1], v = !1;
            if (e.PolyK._convex(c, d, p, f, g, m, i)) {
                v = !0;
                for (var x = 0; a > x; x++) {
                    var y = n[x];
                    if (y !== h && y !== l && y !== u && e.PolyK._PointInTriangle(t[2 * y], t[2 * y + 1], c, d, p, f, g, m)) {
                        v = !1;
                        break
                    }
                }
            }
            if (v)s.push(h, l, u), n.splice((o + 1) % a, 1), a--, o = 0; else if (o++ > 3 * a) {
                if (!i)return null;
                for (s = [], n = [], o = 0; r > o; o++)n.push(o);
                o = 0, a = r, i = !1
            }
        }
        return s.push(n[0], n[1], n[2]), s
    },e.PolyK._PointInTriangle = function (t, e, i, r, s, n, o, a) {
        var h = o - i, l = a - r, u = s - i, c = n - r, d = t - i, p = e - r, f = h * h + l * l, g = h * u + l * c, m = h * d + l * p, v = u * u + c * c, x = u * d + c * p, y = 1 / (f * v - g * g), b = (v * m - g * x) * y, T = (f * x - g * m) * y;
        return b >= 0 && T >= 0 && 1 > b + T
    },e.PolyK._convex = function (t, e, i, r, s, n, o) {
        return (e - r) * (s - i) + (i - t) * (n - r) >= 0 === o
    },e.initDefaultShaders = function () {
    },e.CompileVertexShader = function (t, i) {
        return e._CompileShader(t, i, t.VERTEX_SHADER)
    },e.CompileFragmentShader = function (t, i) {
        return e._CompileShader(t, i, t.FRAGMENT_SHADER)
    },e._CompileShader = function (t, e, i) {
        var r = e.join("\n"), s = t.createShader(i);
        return t.shaderSource(s, r), t.compileShader(s), t.getShaderParameter(s, t.COMPILE_STATUS) ? s : (window.console.log(t.getShaderInfoLog(s)), null)
    },e.compileProgram = function (t, i, r) {
        var s = e.CompileFragmentShader(t, r), n = e.CompileVertexShader(t, i), o = t.createProgram();
        return t.attachShader(o, n), t.attachShader(o, s), t.linkProgram(o), t.getProgramParameter(o, t.LINK_STATUS) || window.console.log("Could not initialise shaders"), o
    },e.PixiShader = function (t) {
        this._UID = e._UID++, this.gl = t, this.program = null, this.fragmentSrc = ["precision lowp float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D uSampler;", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;", "}"], this.textureCount = 0, this.firstRun = !0, this.dirty = !0, this.attributes = [], this.init()
    },e.PixiShader.prototype.constructor = e.PixiShader,e.PixiShader.prototype.init = function () {
        var t = this.gl, i = e.compileProgram(t, this.vertexSrc || e.PixiShader.defaultVertexSrc, this.fragmentSrc);
        t.useProgram(i), this.uSampler = t.getUniformLocation(i, "uSampler"), this.projectionVector = t.getUniformLocation(i, "projectionVector"), this.offsetVector = t.getUniformLocation(i, "offsetVector"), this.dimensions = t.getUniformLocation(i, "dimensions"), this.aVertexPosition = t.getAttribLocation(i, "aVertexPosition"), this.aTextureCoord = t.getAttribLocation(i, "aTextureCoord"), this.colorAttribute = t.getAttribLocation(i, "aColor"), -1 === this.colorAttribute && (this.colorAttribute = 2), this.attributes = [this.aVertexPosition, this.aTextureCoord, this.colorAttribute];
        for (var r in this.uniforms)this.uniforms[r].uniformLocation = t.getUniformLocation(i, r);
        this.initUniforms(), this.program = i
    },e.PixiShader.prototype.initUniforms = function () {
        this.textureCount = 1;
        var t, e = this.gl;
        for (var i in this.uniforms) {
            t = this.uniforms[i];
            var r = t.type;
            "sampler2D" === r ? (t._init = !1, null !== t.value && this.initSampler2D(t)) : "mat2" === r || "mat3" === r || "mat4" === r ? (t.glMatrix = !0, t.glValueLength = 1, "mat2" === r ? t.glFunc = e.uniformMatrix2fv : "mat3" === r ? t.glFunc = e.uniformMatrix3fv : "mat4" === r && (t.glFunc = e.uniformMatrix4fv)) : (t.glFunc = e["uniform" + r], t.glValueLength = "2f" === r || "2i" === r ? 2 : "3f" === r || "3i" === r ? 3 : "4f" === r || "4i" === r ? 4 : 1)
        }
    },e.PixiShader.prototype.initSampler2D = function (t) {
        if (t.value && t.value.baseTexture && t.value.baseTexture.hasLoaded) {
            var e = this.gl;
            if (e.activeTexture(e["TEXTURE" + this.textureCount]), e.bindTexture(e.TEXTURE_2D, t.value.baseTexture._glTextures[e.id]), t.textureData) {
                var i = t.textureData, r = i.magFilter ? i.magFilter : e.LINEAR, s = i.minFilter ? i.minFilter : e.LINEAR, n = i.wrapS ? i.wrapS : e.CLAMP_TO_EDGE, o = i.wrapT ? i.wrapT : e.CLAMP_TO_EDGE, a = i.luminance ? e.LUMINANCE : e.RGBA;
                if (i.repeat && (n = e.REPEAT, o = e.REPEAT), e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !!i.flipY), i.width) {
                    var h = i.width ? i.width : 512, l = i.height ? i.height : 2, u = i.border ? i.border : 0;
                    e.texImage2D(e.TEXTURE_2D, 0, a, h, l, u, a, e.UNSIGNED_BYTE, null)
                } else e.texImage2D(e.TEXTURE_2D, 0, a, e.RGBA, e.UNSIGNED_BYTE, t.value.baseTexture.source);
                e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, r), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, s), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, n), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, o)
            }
            e.uniform1i(t.uniformLocation, this.textureCount), t._init = !0, this.textureCount++
        }
    },e.PixiShader.prototype.syncUniforms = function () {
        this.textureCount = 1;
        var t, i = this.gl;
        for (var r in this.uniforms)t = this.uniforms[r], 1 === t.glValueLength ? t.glMatrix === !0 ? t.glFunc.call(i, t.uniformLocation, t.transpose, t.value) : t.glFunc.call(i, t.uniformLocation, t.value) : 2 === t.glValueLength ? t.glFunc.call(i, t.uniformLocation, t.value.x, t.value.y) : 3 === t.glValueLength ? t.glFunc.call(i, t.uniformLocation, t.value.x, t.value.y, t.value.z) : 4 === t.glValueLength ? t.glFunc.call(i, t.uniformLocation, t.value.x, t.value.y, t.value.z, t.value.w) : "sampler2D" === t.type && (t._init ? (i.activeTexture(i["TEXTURE" + this.textureCount]), t.value.baseTexture._dirty[i.id] ? e.instances[i.id].updateTexture(t.value.baseTexture) : i.bindTexture(i.TEXTURE_2D, t.value.baseTexture._glTextures[i.id]), i.uniform1i(t.uniformLocation, this.textureCount), this.textureCount++) : this.initSampler2D(t))
    },e.PixiShader.prototype.destroy = function () {
        this.gl.deleteProgram(this.program), this.uniforms = null, this.gl = null, this.attributes = null
    },e.PixiShader.defaultVertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "attribute vec4 aColor;", "uniform vec2 projectionVector;", "uniform vec2 offsetVector;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "const vec2 center = vec2(-1.0, 1.0);", "void main(void) {", "   gl_Position = vec4( ((aVertexPosition + offsetVector) / projectionVector) + center , 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "   vColor = vec4(aColor.rgb * aColor.a, aColor.a);", "}"],e.PixiFastShader = function (t) {
        this._UID = e._UID++, this.gl = t, this.program = null, this.fragmentSrc = ["precision lowp float;", "varying vec2 vTextureCoord;", "varying float vColor;", "uniform sampler2D uSampler;", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;", "}"], this.vertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec2 aPositionCoord;", "attribute vec2 aScale;", "attribute float aRotation;", "attribute vec2 aTextureCoord;", "attribute float aColor;", "uniform vec2 projectionVector;", "uniform vec2 offsetVector;", "uniform mat3 uMatrix;", "varying vec2 vTextureCoord;", "varying float vColor;", "const vec2 center = vec2(-1.0, 1.0);", "void main(void) {", "   vec2 v;", "   vec2 sv = aVertexPosition * aScale;", "   v.x = (sv.x) * cos(aRotation) - (sv.y) * sin(aRotation);", "   v.y = (sv.x) * sin(aRotation) + (sv.y) * cos(aRotation);", "   v = ( uMatrix * vec3(v + aPositionCoord , 1.0) ).xy ;", "   gl_Position = vec4( ( v / projectionVector) + center , 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "   vColor = aColor;", "}"], this.textureCount = 0, this.init()
    },e.PixiFastShader.prototype.constructor = e.PixiFastShader,e.PixiFastShader.prototype.init = function () {
        var t = this.gl, i = e.compileProgram(t, this.vertexSrc, this.fragmentSrc);
        t.useProgram(i), this.uSampler = t.getUniformLocation(i, "uSampler"), this.projectionVector = t.getUniformLocation(i, "projectionVector"), this.offsetVector = t.getUniformLocation(i, "offsetVector"), this.dimensions = t.getUniformLocation(i, "dimensions"), this.uMatrix = t.getUniformLocation(i, "uMatrix"), this.aVertexPosition = t.getAttribLocation(i, "aVertexPosition"), this.aPositionCoord = t.getAttribLocation(i, "aPositionCoord"), this.aScale = t.getAttribLocation(i, "aScale"), this.aRotation = t.getAttribLocation(i, "aRotation"), this.aTextureCoord = t.getAttribLocation(i, "aTextureCoord"), this.colorAttribute = t.getAttribLocation(i, "aColor"), -1 === this.colorAttribute && (this.colorAttribute = 2), this.attributes = [this.aVertexPosition, this.aPositionCoord, this.aScale, this.aRotation, this.aTextureCoord, this.colorAttribute], this.program = i
    },e.PixiFastShader.prototype.destroy = function () {
        this.gl.deleteProgram(this.program), this.uniforms = null, this.gl = null, this.attributes = null
    },e.StripShader = function (t) {
        this._UID = e._UID++, this.gl = t, this.program = null, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "uniform float alpha;", "uniform sampler2D uSampler;", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y)) * alpha;", "}"], this.vertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "uniform mat3 translationMatrix;", "uniform vec2 projectionVector;", "uniform vec2 offsetVector;", "varying vec2 vTextureCoord;", "void main(void) {", "   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);", "   v -= offsetVector.xyx;", "   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "}"], this.init()
    },e.StripShader.prototype.constructor = e.StripShader,e.StripShader.prototype.init = function () {
        var t = this.gl, i = e.compileProgram(t, this.vertexSrc, this.fragmentSrc);
        t.useProgram(i), this.uSampler = t.getUniformLocation(i, "uSampler"), this.projectionVector = t.getUniformLocation(i, "projectionVector"), this.offsetVector = t.getUniformLocation(i, "offsetVector"), this.colorAttribute = t.getAttribLocation(i, "aColor"), this.aVertexPosition = t.getAttribLocation(i, "aVertexPosition"), this.aTextureCoord = t.getAttribLocation(i, "aTextureCoord"), this.attributes = [this.aVertexPosition, this.aTextureCoord], this.translationMatrix = t.getUniformLocation(i, "translationMatrix"), this.alpha = t.getUniformLocation(i, "alpha"), this.program = i
    },e.StripShader.prototype.destroy = function () {
        this.gl.deleteProgram(this.program), this.uniforms = null, this.gl = null, this.attribute = null
    },e.PrimitiveShader = function (t) {
        this._UID = e._UID++, this.gl = t, this.program = null, this.fragmentSrc = ["precision mediump float;", "varying vec4 vColor;", "void main(void) {", "   gl_FragColor = vColor;", "}"], this.vertexSrc = ["attribute vec2 aVertexPosition;", "attribute vec4 aColor;", "uniform mat3 translationMatrix;", "uniform vec2 projectionVector;", "uniform vec2 offsetVector;", "uniform float alpha;", "uniform float flipY;", "uniform vec3 tint;", "varying vec4 vColor;", "void main(void) {", "   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);", "   v -= offsetVector.xyx;", "   gl_Position = vec4( v.x / projectionVector.x -1.0, (v.y / projectionVector.y * -flipY) + flipY , 0.0, 1.0);", "   vColor = aColor * vec4(tint * alpha, alpha);", "}"], this.init()
    },e.PrimitiveShader.prototype.constructor = e.PrimitiveShader,e.PrimitiveShader.prototype.init = function () {
        var t = this.gl, i = e.compileProgram(t, this.vertexSrc, this.fragmentSrc);
        t.useProgram(i), this.projectionVector = t.getUniformLocation(i, "projectionVector"), this.offsetVector = t.getUniformLocation(i, "offsetVector"), this.tintColor = t.getUniformLocation(i, "tint"), this.flipY = t.getUniformLocation(i, "flipY"), this.aVertexPosition = t.getAttribLocation(i, "aVertexPosition"), this.colorAttribute = t.getAttribLocation(i, "aColor"), this.attributes = [this.aVertexPosition, this.colorAttribute], this.translationMatrix = t.getUniformLocation(i, "translationMatrix"), this.alpha = t.getUniformLocation(i, "alpha"), this.program = i
    },e.PrimitiveShader.prototype.destroy = function () {
        this.gl.deleteProgram(this.program), this.uniforms = null, this.gl = null, this.attributes = null
    },e.ComplexPrimitiveShader = function (t) {
        this._UID = e._UID++, this.gl = t, this.program = null, this.fragmentSrc = ["precision mediump float;", "varying vec4 vColor;", "void main(void) {", "   gl_FragColor = vColor;", "}"], this.vertexSrc = ["attribute vec2 aVertexPosition;", "uniform mat3 translationMatrix;", "uniform vec2 projectionVector;", "uniform vec2 offsetVector;", "uniform vec3 tint;", "uniform float alpha;", "uniform vec3 color;", "uniform float flipY;", "varying vec4 vColor;", "void main(void) {", "   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);", "   v -= offsetVector.xyx;", "   gl_Position = vec4( v.x / projectionVector.x -1.0, (v.y / projectionVector.y * -flipY) + flipY , 0.0, 1.0);", "   vColor = vec4(color * alpha * tint, alpha);", "}"], this.init()
    },e.ComplexPrimitiveShader.prototype.constructor = e.ComplexPrimitiveShader,e.ComplexPrimitiveShader.prototype.init = function () {
        var t = this.gl, i = e.compileProgram(t, this.vertexSrc, this.fragmentSrc);
        t.useProgram(i), this.projectionVector = t.getUniformLocation(i, "projectionVector"), this.offsetVector = t.getUniformLocation(i, "offsetVector"), this.tintColor = t.getUniformLocation(i, "tint"), this.color = t.getUniformLocation(i, "color"), this.flipY = t.getUniformLocation(i, "flipY"), this.aVertexPosition = t.getAttribLocation(i, "aVertexPosition"), this.attributes = [this.aVertexPosition, this.colorAttribute], this.translationMatrix = t.getUniformLocation(i, "translationMatrix"), this.alpha = t.getUniformLocation(i, "alpha"), this.program = i
    },e.ComplexPrimitiveShader.prototype.destroy = function () {
        this.gl.deleteProgram(this.program), this.uniforms = null, this.gl = null, this.attribute = null
    },e.WebGLGraphics = function () {
    },e.WebGLGraphics.renderGraphics = function (t, i) {
        var r, s = i.gl, n = i.projection, o = i.offset, a = i.shaderManager.primitiveShader;
        t.dirty && e.WebGLGraphics.updateGraphics(t, s);
        for (var h = t._webGL[s.id], l = 0; l < h.data.length; l++)1 === h.data[l].mode ? (r = h.data[l], i.stencilManager.pushStencil(t, r, i), s.drawElements(s.TRIANGLE_FAN, 4, s.UNSIGNED_SHORT, 2 * (r.indices.length - 4)), i.stencilManager.popStencil(t, r, i)) : (r = h.data[l], i.shaderManager.setShader(a), a = i.shaderManager.primitiveShader, s.uniformMatrix3fv(a.translationMatrix, !1, t.worldTransform.toArray(!0)), s.uniform1f(a.flipY, 1), s.uniform2f(a.projectionVector, n.x, -n.y), s.uniform2f(a.offsetVector, -o.x, -o.y), s.uniform3fv(a.tintColor, e.hex2rgb(t.tint)), s.uniform1f(a.alpha, t.worldAlpha), s.bindBuffer(s.ARRAY_BUFFER, r.buffer), s.vertexAttribPointer(a.aVertexPosition, 2, s.FLOAT, !1, 24, 0), s.vertexAttribPointer(a.colorAttribute, 4, s.FLOAT, !1, 24, 8), s.bindBuffer(s.ELEMENT_ARRAY_BUFFER, r.indexBuffer), s.drawElements(s.TRIANGLE_STRIP, r.indices.length, s.UNSIGNED_SHORT, 0))
    },e.WebGLGraphics.updateGraphics = function (t, i) {
        var r = t._webGL[i.id];
        r || (r = t._webGL[i.id] = {lastIndex: 0, data: [], gl: i}), t.dirty = !1;
        var s;
        if (t.clearDirty) {
            for (t.clearDirty = !1, s = 0; s < r.data.length; s++) {
                var n = r.data[s];
                n.reset(), e.WebGLGraphics.graphicsDataPool.push(n)
            }
            r.data = [], r.lastIndex = 0
        }
        var o;
        for (s = r.lastIndex; s < t.graphicsData.length; s++) {
            var a = t.graphicsData[s];
            if (a.type === e.Graphics.POLY) {
                if (a.points = a.shape.points.slice(), a.shape.closed && (a.points[0] !== a.points[a.points.length - 2] || a.points[1] !== a.points[a.points.length - 1]) && a.points.push(a.points[0], a.points[1]), a.fill && a.points.length >= 6)if (a.points.length < 12) {
                    o = e.WebGLGraphics.switchMode(r, 0);
                    var h = e.WebGLGraphics.buildPoly(a, o);
                    h || (o = e.WebGLGraphics.switchMode(r, 1), e.WebGLGraphics.buildComplexPoly(a, o))
                } else o = e.WebGLGraphics.switchMode(r, 1), e.WebGLGraphics.buildComplexPoly(a, o);
                a.lineWidth > 0 && (o = e.WebGLGraphics.switchMode(r, 0), e.WebGLGraphics.buildLine(a, o))
            } else o = e.WebGLGraphics.switchMode(r, 0), a.type === e.Graphics.RECT ? e.WebGLGraphics.buildRectangle(a, o) : a.type === e.Graphics.CIRC || a.type === e.Graphics.ELIP ? e.WebGLGraphics.buildCircle(a, o) : a.type === e.Graphics.RREC && e.WebGLGraphics.buildRoundedRectangle(a, o);
            r.lastIndex++
        }
        for (s = 0; s < r.data.length; s++)o = r.data[s], o.dirty && o.upload()
    },e.WebGLGraphics.switchMode = function (t, i) {
        var r;
        return t.data.length ? (r = t.data[t.data.length - 1], (r.mode !== i || 1 === i) && (r = e.WebGLGraphics.graphicsDataPool.pop() || new e.WebGLGraphicsData(t.gl), r.mode = i, t.data.push(r))) : (r = e.WebGLGraphics.graphicsDataPool.pop() || new e.WebGLGraphicsData(t.gl), r.mode = i, t.data.push(r)), r.dirty = !0, r
    },e.WebGLGraphics.buildRectangle = function (t, i) {
        var r = t.shape, s = r.x, n = r.y, o = r.width, a = r.height;
        if (t.fill) {
            var h = e.hex2rgb(t.fillColor), l = t.fillAlpha, u = h[0] * l, c = h[1] * l, d = h[2] * l, p = i.points, f = i.indices, g = p.length / 6;
            p.push(s, n), p.push(u, c, d, l), p.push(s + o, n), p.push(u, c, d, l), p.push(s, n + a), p.push(u, c, d, l), p.push(s + o, n + a), p.push(u, c, d, l), f.push(g, g, g + 1, g + 2, g + 3, g + 3)
        }
        if (t.lineWidth) {
            var m = t.points;
            t.points = [s, n, s + o, n, s + o, n + a, s, n + a, s, n], e.WebGLGraphics.buildLine(t, i), t.points = m
        }
    },e.WebGLGraphics.buildRoundedRectangle = function (t, i) {
        var r = t.shape, s = r.x, n = r.y, o = r.width, a = r.height, h = r.radius, l = [];
        if (l.push(s, n + h), l = l.concat(e.WebGLGraphics.quadraticBezierCurve(s, n + a - h, s, n + a, s + h, n + a)), l = l.concat(e.WebGLGraphics.quadraticBezierCurve(s + o - h, n + a, s + o, n + a, s + o, n + a - h)), l = l.concat(e.WebGLGraphics.quadraticBezierCurve(s + o, n + h, s + o, n, s + o - h, n)), l = l.concat(e.WebGLGraphics.quadraticBezierCurve(s + h, n, s, n, s, n + h)), t.fill) {
            var u = e.hex2rgb(t.fillColor), c = t.fillAlpha, d = u[0] * c, p = u[1] * c, f = u[2] * c, g = i.points, m = i.indices, v = g.length / 6, x = e.PolyK.Triangulate(l), y = 0;
            for (y = 0; y < x.length; y += 3)m.push(x[y] + v), m.push(x[y] + v), m.push(x[y + 1] + v), m.push(x[y + 2] + v), m.push(x[y + 2] + v);
            for (y = 0; y < l.length; y++)g.push(l[y], l[++y], d, p, f, c)
        }
        if (t.lineWidth) {
            var b = t.points;
            t.points = l, e.WebGLGraphics.buildLine(t, i), t.points = b
        }
    },e.WebGLGraphics.quadraticBezierCurve = function (t, e, i, r, s, n) {
        function o(t, e, i) {
            var r = e - t;
            return t + r * i
        }

        for (var a, h, l, u, c, d, p = 20, f = [], g = 0, m = 0; p >= m; m++)g = m / p, a = o(t, i, g), h = o(e, r, g), l = o(i, s, g), u = o(r, n, g), c = o(a, l, g), d = o(h, u, g), f.push(c, d);
        return f
    },e.WebGLGraphics.buildCircle = function (t, i) {
        var r, s, n = t.shape, o = n.x, a = n.y;
        t.type === e.Graphics.CIRC ? (r = n.radius, s = n.radius) : (r = n.width, s = n.height);
        var h = 40, l = 2 * Math.PI / h, u = 0;
        if (t.fill) {
            var c = e.hex2rgb(t.fillColor), d = t.fillAlpha, p = c[0] * d, f = c[1] * d, g = c[2] * d, m = i.points, v = i.indices, x = m.length / 6;
            for (v.push(x), u = 0; h + 1 > u; u++)m.push(o, a, p, f, g, d), m.push(o + Math.sin(l * u) * r, a + Math.cos(l * u) * s, p, f, g, d), v.push(x++, x++);
            v.push(x - 1)
        }
        if (t.lineWidth) {
            var y = t.points;
            for (t.points = [], u = 0; h + 1 > u; u++)t.points.push(o + Math.sin(l * u) * r, a + Math.cos(l * u) * s);
            e.WebGLGraphics.buildLine(t, i), t.points = y
        }
    },e.WebGLGraphics.buildLine = function (t, i) {
        var r = 0, s = t.points;
        if (0 !== s.length) {
            if (t.lineWidth % 2)for (r = 0; r < s.length; r++)s[r] += .5;
            var n = new e.Point(s[0], s[1]), o = new e.Point(s[s.length - 2], s[s.length - 1]);
            if (n.x === o.x && n.y === o.y) {
                s = s.slice(), s.pop(), s.pop(), o = new e.Point(s[s.length - 2], s[s.length - 1]);
                var a = o.x + .5 * (n.x - o.x), h = o.y + .5 * (n.y - o.y);
                s.unshift(a, h), s.push(a, h)
            }
            var l, u, c, d, p, f, g, m, v, x, y, b, T, S, w, C, A, _, E, R, M, L, F, B = i.points, P = i.indices, D = s.length / 2, I = s.length, O = B.length / 6, G = t.lineWidth / 2, U = e.hex2rgb(t.lineColor), k = t.lineAlpha, N = U[0] * k, j = U[1] * k, W = U[2] * k;
            for (c = s[0], d = s[1], p = s[2], f = s[3], v = -(d - f), x = c - p, F = Math.sqrt(v * v + x * x), v /= F, x /= F, v *= G, x *= G, B.push(c - v, d - x, N, j, W, k), B.push(c + v, d + x, N, j, W, k), r = 1; D - 1 > r; r++)c = s[2 * (r - 1)], d = s[2 * (r - 1) + 1], p = s[2 * r], f = s[2 * r + 1], g = s[2 * (r + 1)], m = s[2 * (r + 1) + 1], v = -(d - f), x = c - p, F = Math.sqrt(v * v + x * x), v /= F, x /= F, v *= G, x *= G, y = -(f - m), b = p - g, F = Math.sqrt(y * y + b * b), y /= F, b /= F, y *= G, b *= G, w = -x + d - (-x + f), C = -v + p - (-v + c), A = (-v + c) * (-x + f) - (-v + p) * (-x + d), _ = -b + m - (-b + f), E = -y + p - (-y + g), R = (-y + g) * (-b + f) - (-y + p) * (-b + m), M = w * E - _ * C, Math.abs(M) < .1 ? (M += 10.1, B.push(p - v, f - x, N, j, W, k), B.push(p + v, f + x, N, j, W, k)) : (l = (C * R - E * A) / M, u = (_ * A - w * R) / M, L = (l - p) * (l - p) + (u - f) + (u - f), L > 19600 ? (T = v - y, S = x - b, F = Math.sqrt(T * T + S * S), T /= F, S /= F, T *= G, S *= G, B.push(p - T, f - S), B.push(N, j, W, k), B.push(p + T, f + S), B.push(N, j, W, k), B.push(p - T, f - S), B.push(N, j, W, k), I++) : (B.push(l, u), B.push(N, j, W, k), B.push(p - (l - p), f - (u - f)), B.push(N, j, W, k)));
            for (c = s[2 * (D - 2)], d = s[2 * (D - 2) + 1], p = s[2 * (D - 1)], f = s[2 * (D - 1) + 1], v = -(d - f), x = c - p, F = Math.sqrt(v * v + x * x), v /= F, x /= F, v *= G, x *= G, B.push(p - v, f - x), B.push(N, j, W, k), B.push(p + v, f + x), B.push(N, j, W, k), P.push(O), r = 0; I > r; r++)P.push(O++);
            P.push(O - 1)
        }
    },e.WebGLGraphics.buildComplexPoly = function (t, i) {
        var r = t.points.slice();
        if (!(r.length < 6)) {
            var s = i.indices;
            i.points = r, i.alpha = t.fillAlpha, i.color = e.hex2rgb(t.fillColor);
            for (var n, o, a = 1 / 0, h = -1 / 0, l = 1 / 0, u = -1 / 0, c = 0; c < r.length; c += 2)n = r[c], o = r[c + 1], a = a > n ? n : a, h = n > h ? n : h, l = l > o ? o : l, u = o > u ? o : u;
            r.push(a, l, h, l, h, u, a, u);
            var d = r.length / 2;
            for (c = 0; d > c; c++)s.push(c)
        }
    },e.WebGLGraphics.buildPoly = function (t, i) {
        var r = t.points;
        if (!(r.length < 6)) {
            var s = i.points, n = i.indices, o = r.length / 2, a = e.hex2rgb(t.fillColor), h = t.fillAlpha, l = a[0] * h, u = a[1] * h, c = a[2] * h, d = e.PolyK.Triangulate(r);
            if (!d)return !1;
            var p = s.length / 6, f = 0;
            for (f = 0; f < d.length; f += 3)n.push(d[f] + p), n.push(d[f] + p), n.push(d[f + 1] + p), n.push(d[f + 2] + p), n.push(d[f + 2] + p);
            for (f = 0; o > f; f++)s.push(r[2 * f], r[2 * f + 1], l, u, c, h);
            return !0
        }
    },e.WebGLGraphics.graphicsDataPool = [],e.WebGLGraphicsData = function (t) {
        this.gl = t, this.color = [0, 0, 0], this.points = [], this.indices = [], this.buffer = t.createBuffer(), this.indexBuffer = t.createBuffer(), this.mode = 1, this.alpha = 1, this.dirty = !0
    },e.WebGLGraphicsData.prototype.reset = function () {
        this.points = [], this.indices = []
    },e.WebGLGraphicsData.prototype.upload = function () {
        var t = this.gl;
        this.glPoints = new e.Float32Array(this.points), t.bindBuffer(t.ARRAY_BUFFER, this.buffer), t.bufferData(t.ARRAY_BUFFER, this.glPoints, t.STATIC_DRAW), this.glIndicies = new e.Uint16Array(this.indices), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer), t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.glIndicies, t.STATIC_DRAW), this.dirty = !1
    },e.glContexts = [],e.instances = [],e.WebGLRenderer = function (t, i, r) {
        if (r)for (var s in e.defaultRenderOptions)"undefined" == typeof r[s] && (r[s] = e.defaultRenderOptions[s]); else r = e.defaultRenderOptions;
        e.defaultRenderer || (e.sayHello("webGL"), e.defaultRenderer = this), this.type = e.WEBGL_RENDERER, this.resolution = r.resolution, this.transparent = r.transparent, this.autoResize = r.autoResize || !1, this.preserveDrawingBuffer = r.preserveDrawingBuffer, this.clearBeforeRender = r.clearBeforeRender, this.width = t || 800, this.height = i || 600, this.view = r.view || document.createElement("canvas"), this.contextLostBound = this.handleContextLost.bind(this), this.contextRestoredBound = this.handleContextRestored.bind(this), this.view.addEventListener("webglcontextlost", this.contextLostBound, !1), this.view.addEventListener("webglcontextrestored", this.contextRestoredBound, !1), this._contextOptions = {
            alpha: this.transparent,
            antialias: r.antialias,
            premultipliedAlpha: this.transparent && "notMultiplied" !== this.transparent,
            stencil: !0,
            preserveDrawingBuffer: r.preserveDrawingBuffer
        }, this.projection = new e.Point, this.offset = new e.Point(0, 0), this.shaderManager = new e.WebGLShaderManager, this.spriteBatch = new e.WebGLSpriteBatch, this.maskManager = new e.WebGLMaskManager, this.filterManager = new e.WebGLFilterManager, this.stencilManager = new e.WebGLStencilManager, this.blendModeManager = new e.WebGLBlendModeManager, this.renderSession = {}, this.renderSession.gl = this.gl, this.renderSession.drawCount = 0, this.renderSession.shaderManager = this.shaderManager, this.renderSession.maskManager = this.maskManager, this.renderSession.filterManager = this.filterManager, this.renderSession.blendModeManager = this.blendModeManager, this.renderSession.spriteBatch = this.spriteBatch, this.renderSession.stencilManager = this.stencilManager, this.renderSession.renderer = this, this.renderSession.resolution = this.resolution, this.initContext(), this.mapBlendModes()
    },e.WebGLRenderer.prototype.constructor = e.WebGLRenderer,e.WebGLRenderer.prototype.initContext = function () {
        var t = this.view.getContext("webgl", this._contextOptions) || this.view.getContext("experimental-webgl", this._contextOptions);
        if (this.gl = t, !t)throw new Error("This browser does not support webGL. Try using the canvas renderer");
        this.glContextId = t.id = e.WebGLRenderer.glContextId++, e.glContexts[this.glContextId] = t, e.instances[this.glContextId] = this, t.disable(t.DEPTH_TEST), t.disable(t.CULL_FACE), t.enable(t.BLEND), this.shaderManager.setContext(t), this.spriteBatch.setContext(t), this.maskManager.setContext(t), this.filterManager.setContext(t), this.blendModeManager.setContext(t), this.stencilManager.setContext(t), this.renderSession.gl = this.gl, this.resize(this.width, this.height)
    },e.WebGLRenderer.prototype.render = function (t) {
        if (!this.contextLost) {
            this.__stage !== t && (t.interactive && t.interactionManager.removeEvents(), this.__stage = t), t.updateTransform();
            var e = this.gl;
            t._interactive ? t._interactiveEventsAdded || (t._interactiveEventsAdded = !0, t.interactionManager.setTarget(this)) : t._interactiveEventsAdded && (t._interactiveEventsAdded = !1, t.interactionManager.setTarget(this)), e.viewport(0, 0, this.width, this.height), e.bindFramebuffer(e.FRAMEBUFFER, null), this.clearBeforeRender && (this.transparent ? e.clearColor(0, 0, 0, 0) : e.clearColor(t.backgroundColorSplit[0], t.backgroundColorSplit[1], t.backgroundColorSplit[2], 1), e.clear(e.COLOR_BUFFER_BIT)), this.renderDisplayObject(t, this.projection)
        }
    },e.WebGLRenderer.prototype.renderDisplayObject = function (t, i, r) {
        this.renderSession.blendModeManager.setBlendMode(e.blendModes.NORMAL), this.renderSession.drawCount = 0, this.renderSession.flipY = r ? -1 : 1, this.renderSession.projection = i, this.renderSession.offset = this.offset, this.spriteBatch.begin(this.renderSession), this.filterManager.begin(this.renderSession, r), t._renderWebGL(this.renderSession), this.spriteBatch.end()
    },e.WebGLRenderer.prototype.resize = function (t, e) {
        this.width = t * this.resolution, this.height = e * this.resolution, this.view.width = this.width, this.view.height = this.height, this.autoResize && (this.view.style.width = this.width / this.resolution + "px", this.view.style.height = this.height / this.resolution + "px"), this.gl.viewport(0, 0, this.width, this.height), this.projection.x = this.width / 2 / this.resolution, this.projection.y = -this.height / 2 / this.resolution
    },e.WebGLRenderer.prototype.updateTexture = function (t) {
        if (t.hasLoaded) {
            var i = this.gl;
            return t._glTextures[i.id] || (t._glTextures[i.id] = i.createTexture()), i.bindTexture(i.TEXTURE_2D, t._glTextures[i.id]), i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL, t.premultipliedAlpha), i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, i.RGBA, i.UNSIGNED_BYTE, t.source), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MAG_FILTER, t.scaleMode === e.scaleModes.LINEAR ? i.LINEAR : i.NEAREST), t.mipmap && e.isPowerOfTwo(t.width, t.height) ? (i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MIN_FILTER, t.scaleMode === e.scaleModes.LINEAR ? i.LINEAR_MIPMAP_LINEAR : i.NEAREST_MIPMAP_NEAREST), i.generateMipmap(i.TEXTURE_2D)) : i.texParameteri(i.TEXTURE_2D, i.TEXTURE_MIN_FILTER, t.scaleMode === e.scaleModes.LINEAR ? i.LINEAR : i.NEAREST), t._powerOf2 ? (i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_S, i.REPEAT), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_T, i.REPEAT)) : (i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_S, i.CLAMP_TO_EDGE), i.texParameteri(i.TEXTURE_2D, i.TEXTURE_WRAP_T, i.CLAMP_TO_EDGE)), t._dirty[i.id] = !1, t._glTextures[i.id]
        }
    },e.WebGLRenderer.prototype.handleContextLost = function (t) {
        t.preventDefault(), this.contextLost = !0
    },e.WebGLRenderer.prototype.handleContextRestored = function () {
        this.initContext();
        for (var t in e.TextureCache) {
            var i = e.TextureCache[t].baseTexture;
            i._glTextures = []
        }
        this.contextLost = !1
    },e.WebGLRenderer.prototype.destroy = function () {
        this.view.removeEventListener("webglcontextlost", this.contextLostBound), this.view.removeEventListener("webglcontextrestored", this.contextRestoredBound), e.glContexts[this.glContextId] = null, this.projection = null, this.offset = null, this.shaderManager.destroy(), this.spriteBatch.destroy(), this.maskManager.destroy(), this.filterManager.destroy(), this.shaderManager = null, this.spriteBatch = null, this.maskManager = null, this.filterManager = null, this.gl = null, this.renderSession = null
    },e.WebGLRenderer.prototype.mapBlendModes = function () {
        var t = this.gl;
        e.blendModesWebGL || (e.blendModesWebGL = [], e.blendModesWebGL[e.blendModes.NORMAL] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e.blendModesWebGL[e.blendModes.ADD] = [t.SRC_ALPHA, t.DST_ALPHA], e.blendModesWebGL[e.blendModes.MULTIPLY] = [t.DST_COLOR, t.ONE_MINUS_SRC_ALPHA], e.blendModesWebGL[e.blendModes.SCREEN] = [t.SRC_ALPHA, t.ONE], e.blendModesWebGL[e.blendModes.OVERLAY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e.blendModesWebGL[e.blendModes.DARKEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e.blendModesWebGL[e.blendModes.LIGHTEN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e.blendModesWebGL[e.blendModes.COLOR_DODGE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e.blendModesWebGL[e.blendModes.COLOR_BURN] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e.blendModesWebGL[e.blendModes.HARD_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e.blendModesWebGL[e.blendModes.SOFT_LIGHT] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e.blendModesWebGL[e.blendModes.DIFFERENCE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e.blendModesWebGL[e.blendModes.EXCLUSION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e.blendModesWebGL[e.blendModes.HUE] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e.blendModesWebGL[e.blendModes.SATURATION] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e.blendModesWebGL[e.blendModes.COLOR] = [t.ONE, t.ONE_MINUS_SRC_ALPHA], e.blendModesWebGL[e.blendModes.LUMINOSITY] = [t.ONE, t.ONE_MINUS_SRC_ALPHA])
    },e.WebGLRenderer.glContextId = 0,e.WebGLBlendModeManager = function () {
        this.currentBlendMode = 99999
    },e.WebGLBlendModeManager.prototype.constructor = e.WebGLBlendModeManager,e.WebGLBlendModeManager.prototype.setContext = function (t) {
        this.gl = t
    },e.WebGLBlendModeManager.prototype.setBlendMode = function (t) {
        if (this.currentBlendMode === t)return !1;
        this.currentBlendMode = t;
        var i = e.blendModesWebGL[this.currentBlendMode];
        return this.gl.blendFunc(i[0], i[1]), !0
    },e.WebGLBlendModeManager.prototype.destroy = function () {
        this.gl = null
    },e.WebGLMaskManager = function () {
    },e.WebGLMaskManager.prototype.constructor = e.WebGLMaskManager,e.WebGLMaskManager.prototype.setContext = function (t) {
        this.gl = t
    },e.WebGLMaskManager.prototype.pushMask = function (t, i) {
        var r = i.gl;
        t.dirty && e.WebGLGraphics.updateGraphics(t, r), t._webGL[r.id].data.length && i.stencilManager.pushStencil(t, t._webGL[r.id].data[0], i)
    },e.WebGLMaskManager.prototype.popMask = function (t, e) {
        var i = this.gl;
        e.stencilManager.popStencil(t, t._webGL[i.id].data[0], e)
    },e.WebGLMaskManager.prototype.destroy = function () {
        this.gl = null
    },e.WebGLStencilManager = function () {
        this.stencilStack = [], this.reverse = !0, this.count = 0
    },e.WebGLStencilManager.prototype.setContext = function (t) {
        this.gl = t
    },e.WebGLStencilManager.prototype.pushStencil = function (t, e, i) {
        var r = this.gl;
        this.bindGraphics(t, e, i), 0 === this.stencilStack.length && (r.enable(r.STENCIL_TEST), r.clear(r.STENCIL_BUFFER_BIT), this.reverse = !0, this.count = 0), this.stencilStack.push(e);
        var s = this.count;
        r.colorMask(!1, !1, !1, !1), r.stencilFunc(r.ALWAYS, 0, 255), r.stencilOp(r.KEEP, r.KEEP, r.INVERT), 1 === e.mode ? (r.drawElements(r.TRIANGLE_FAN, e.indices.length - 4, r.UNSIGNED_SHORT, 0), this.reverse ? (r.stencilFunc(r.EQUAL, 255 - s, 255), r.stencilOp(r.KEEP, r.KEEP, r.DECR)) : (r.stencilFunc(r.EQUAL, s, 255), r.stencilOp(r.KEEP, r.KEEP, r.INCR)), r.drawElements(r.TRIANGLE_FAN, 4, r.UNSIGNED_SHORT, 2 * (e.indices.length - 4)), this.reverse ? r.stencilFunc(r.EQUAL, 255 - (s + 1), 255) : r.stencilFunc(r.EQUAL, s + 1, 255), this.reverse = !this.reverse) : (this.reverse ? (r.stencilFunc(r.EQUAL, s, 255), r.stencilOp(r.KEEP, r.KEEP, r.INCR)) : (r.stencilFunc(r.EQUAL, 255 - s, 255), r.stencilOp(r.KEEP, r.KEEP, r.DECR)), r.drawElements(r.TRIANGLE_STRIP, e.indices.length, r.UNSIGNED_SHORT, 0), this.reverse ? r.stencilFunc(r.EQUAL, s + 1, 255) : r.stencilFunc(r.EQUAL, 255 - (s + 1), 255)), r.colorMask(!0, !0, !0, !0), r.stencilOp(r.KEEP, r.KEEP, r.KEEP), this.count++
    },e.WebGLStencilManager.prototype.bindGraphics = function (t, i, r) {
        this._currentGraphics = t;
        var s, n = this.gl, o = r.projection, a = r.offset;
        1 === i.mode ? (s = r.shaderManager.complexPrimitiveShader, r.shaderManager.setShader(s), n.uniform1f(s.flipY, r.flipY), n.uniformMatrix3fv(s.translationMatrix, !1, t.worldTransform.toArray(!0)), n.uniform2f(s.projectionVector, o.x, -o.y), n.uniform2f(s.offsetVector, -a.x, -a.y), n.uniform3fv(s.tintColor, e.hex2rgb(t.tint)), n.uniform3fv(s.color, i.color), n.uniform1f(s.alpha, t.worldAlpha * i.alpha), n.bindBuffer(n.ARRAY_BUFFER, i.buffer), n.vertexAttribPointer(s.aVertexPosition, 2, n.FLOAT, !1, 8, 0), n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, i.indexBuffer)) : (s = r.shaderManager.primitiveShader, r.shaderManager.setShader(s), n.uniformMatrix3fv(s.translationMatrix, !1, t.worldTransform.toArray(!0)), n.uniform1f(s.flipY, r.flipY), n.uniform2f(s.projectionVector, o.x, -o.y), n.uniform2f(s.offsetVector, -a.x, -a.y), n.uniform3fv(s.tintColor, e.hex2rgb(t.tint)), n.uniform1f(s.alpha, t.worldAlpha), n.bindBuffer(n.ARRAY_BUFFER, i.buffer), n.vertexAttribPointer(s.aVertexPosition, 2, n.FLOAT, !1, 24, 0), n.vertexAttribPointer(s.colorAttribute, 4, n.FLOAT, !1, 24, 8), n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, i.indexBuffer))
    },e.WebGLStencilManager.prototype.popStencil = function (t, e, i) {
        var r = this.gl;
        if (this.stencilStack.pop(), this.count--, 0 === this.stencilStack.length)r.disable(r.STENCIL_TEST); else {
            var s = this.count;
            this.bindGraphics(t, e, i), r.colorMask(!1, !1, !1, !1), 1 === e.mode ? (this.reverse = !this.reverse, this.reverse ? (r.stencilFunc(r.EQUAL, 255 - (s + 1), 255), r.stencilOp(r.KEEP, r.KEEP, r.INCR)) : (r.stencilFunc(r.EQUAL, s + 1, 255), r.stencilOp(r.KEEP, r.KEEP, r.DECR)), r.drawElements(r.TRIANGLE_FAN, 4, r.UNSIGNED_SHORT, 2 * (e.indices.length - 4)), r.stencilFunc(r.ALWAYS, 0, 255), r.stencilOp(r.KEEP, r.KEEP, r.INVERT), r.drawElements(r.TRIANGLE_FAN, e.indices.length - 4, r.UNSIGNED_SHORT, 0), this.reverse ? r.stencilFunc(r.EQUAL, s, 255) : r.stencilFunc(r.EQUAL, 255 - s, 255)) : (this.reverse ? (r.stencilFunc(r.EQUAL, s + 1, 255), r.stencilOp(r.KEEP, r.KEEP, r.DECR)) : (r.stencilFunc(r.EQUAL, 255 - (s + 1), 255), r.stencilOp(r.KEEP, r.KEEP, r.INCR)), r.drawElements(r.TRIANGLE_STRIP, e.indices.length, r.UNSIGNED_SHORT, 0), this.reverse ? r.stencilFunc(r.EQUAL, s, 255) : r.stencilFunc(r.EQUAL, 255 - s, 255)), r.colorMask(!0, !0, !0, !0), r.stencilOp(r.KEEP, r.KEEP, r.KEEP)
        }
    },e.WebGLStencilManager.prototype.destroy = function () {
        this.stencilStack = null, this.gl = null
    },e.WebGLShaderManager = function () {
        this.maxAttibs = 10, this.attribState = [], this.tempAttribState = [];
        for (var t = 0; t < this.maxAttibs; t++)this.attribState[t] = !1;
        this.stack = []
    },e.WebGLShaderManager.prototype.constructor = e.WebGLShaderManager,e.WebGLShaderManager.prototype.setContext = function (t) {
        this.gl = t, this.primitiveShader = new e.PrimitiveShader(t), this.complexPrimitiveShader = new e.ComplexPrimitiveShader(t), this.defaultShader = new e.PixiShader(t), this.fastShader = new e.PixiFastShader(t), this.stripShader = new e.StripShader(t), this.setShader(this.defaultShader)
    },e.WebGLShaderManager.prototype.setAttribs = function (t) {
        var e;
        for (e = 0; e < this.tempAttribState.length; e++)this.tempAttribState[e] = !1;
        for (e = 0; e < t.length; e++) {
            var i = t[e];
            this.tempAttribState[i] = !0
        }
        var r = this.gl;
        for (e = 0; e < this.attribState.length; e++)this.attribState[e] !== this.tempAttribState[e] && (this.attribState[e] = this.tempAttribState[e], this.tempAttribState[e] ? r.enableVertexAttribArray(e) : r.disableVertexAttribArray(e))
    },e.WebGLShaderManager.prototype.setShader = function (t) {
        return this._currentId === t._UID ? !1 : (this._currentId = t._UID, this.currentShader = t, this.gl.useProgram(t.program), this.setAttribs(t.attributes), !0)
    },e.WebGLShaderManager.prototype.destroy = function () {
        this.attribState = null, this.tempAttribState = null, this.primitiveShader.destroy(), this.complexPrimitiveShader.destroy(), this.defaultShader.destroy(), this.fastShader.destroy(), this.stripShader.destroy(), this.gl = null
    },e.WebGLSpriteBatch = function () {
        this.vertSize = 5, this.size = 2e3;
        var t = 4 * this.size * 4 * this.vertSize, i = 6 * this.size;
        this.vertices = new e.ArrayBuffer(t), this.positions = new e.Float32Array(this.vertices), this.colors = new e.Uint32Array(this.vertices), this.indices = new e.Uint16Array(i), this.lastIndexCount = 0;
        for (var r = 0, s = 0; i > r; r += 6, s += 4)this.indices[r + 0] = s + 0, this.indices[r + 1] = s + 1, this.indices[r + 2] = s + 2, this.indices[r + 3] = s + 0, this.indices[r + 4] = s + 2, this.indices[r + 5] = s + 3;
        this.drawing = !1, this.currentBatchSize = 0, this.currentBaseTexture = null, this.dirty = !0, this.textures = [], this.blendModes = [], this.shaders = [], this.sprites = [], this.defaultShader = new e.AbstractFilter(["precision lowp float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D uSampler;", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;", "}"])
    },e.WebGLSpriteBatch.prototype.setContext = function (t) {
        this.gl = t, this.vertexBuffer = t.createBuffer(), this.indexBuffer = t.createBuffer(), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer), t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.indices, t.STATIC_DRAW), t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer), t.bufferData(t.ARRAY_BUFFER, this.vertices, t.DYNAMIC_DRAW), this.currentBlendMode = 99999;
        var i = new e.PixiShader(t);
        i.fragmentSrc = this.defaultShader.fragmentSrc, i.uniforms = {}, i.init(), this.defaultShader.shaders[t.id] = i
    },e.WebGLSpriteBatch.prototype.begin = function (t) {
        this.renderSession = t, this.shader = this.renderSession.shaderManager.defaultShader, this.start()
    },e.WebGLSpriteBatch.prototype.end = function () {
        this.flush()
    },e.WebGLSpriteBatch.prototype.render = function (t) {
        var e = t.texture;
        this.currentBatchSize >= this.size && (this.flush(), this.currentBaseTexture = e.baseTexture);
        var i = e._uvs;
        if (i) {
            var r, s, n, o, a = t.anchor.x, h = t.anchor.y;
            if (e.trim) {
                var l = e.trim;
                s = l.x - a * l.width, r = s + e.crop.width, o = l.y - h * l.height, n = o + e.crop.height
            } else r = e.frame.width * (1 - a), s = e.frame.width * -a, n = e.frame.height * (1 - h), o = e.frame.height * -h;
            var u = 4 * this.currentBatchSize * this.vertSize, c = e.baseTexture.resolution, d = t.worldTransform, p = d.a / c, f = d.b / c, g = d.c / c, m = d.d / c, v = d.tx, x = d.ty, y = this.colors, b = this.positions;
            this.renderSession.roundPixels ? (b[u] = p * s + g * o + v | 0, b[u + 1] = m * o + f * s + x | 0, b[u + 5] = p * r + g * o + v | 0, b[u + 6] = m * o + f * r + x | 0, b[u + 10] = p * r + g * n + v | 0, b[u + 11] = m * n + f * r + x | 0, b[u + 15] = p * s + g * n + v | 0, b[u + 16] = m * n + f * s + x | 0) : (b[u] = p * s + g * o + v, b[u + 1] = m * o + f * s + x, b[u + 5] = p * r + g * o + v, b[u + 6] = m * o + f * r + x, b[u + 10] = p * r + g * n + v, b[u + 11] = m * n + f * r + x, b[u + 15] = p * s + g * n + v, b[u + 16] = m * n + f * s + x), b[u + 2] = i.x0, b[u + 3] = i.y0, b[u + 7] = i.x1, b[u + 8] = i.y1, b[u + 12] = i.x2, b[u + 13] = i.y2, b[u + 17] = i.x3, b[u + 18] = i.y3;
            var T = t.tint;
            y[u + 4] = y[u + 9] = y[u + 14] = y[u + 19] = (T >> 16) + (65280 & T) + ((255 & T) << 16) + (255 * t.worldAlpha << 24), this.sprites[this.currentBatchSize++] = t
        }
    },e.WebGLSpriteBatch.prototype.renderTilingSprite = function (t) {
        var i = t.tilingTexture;
        this.currentBatchSize >= this.size && (this.flush(), this.currentBaseTexture = i.baseTexture), t._uvs || (t._uvs = new e.TextureUvs);
        var r = t._uvs;
        t.tilePosition.x %= i.baseTexture.width * t.tileScaleOffset.x, t.tilePosition.y %= i.baseTexture.height * t.tileScaleOffset.y;
        var s = t.tilePosition.x / (i.baseTexture.width * t.tileScaleOffset.x), n = t.tilePosition.y / (i.baseTexture.height * t.tileScaleOffset.y), o = t.width / i.baseTexture.width / (t.tileScale.x * t.tileScaleOffset.x), a = t.height / i.baseTexture.height / (t.tileScale.y * t.tileScaleOffset.y);
        r.x0 = 0 - s, r.y0 = 0 - n, r.x1 = 1 * o - s, r.y1 = 0 - n, r.x2 = 1 * o - s, r.y2 = 1 * a - n, r.x3 = 0 - s, r.y3 = 1 * a - n;
        var h = t.tint, l = (h >> 16) + (65280 & h) + ((255 & h) << 16) + (255 * t.alpha << 24), u = this.positions, c = this.colors, d = t.width, p = t.height, f = t.anchor.x, g = t.anchor.y, m = d * (1 - f), v = d * -f, x = p * (1 - g), y = p * -g, b = 4 * this.currentBatchSize * this.vertSize, T = i.baseTexture.resolution, S = t.worldTransform, w = S.a / T, C = S.b / T, A = S.c / T, _ = S.d / T, E = S.tx, R = S.ty;
        u[b++] = w * v + A * y + E, u[b++] = _ * y + C * v + R, u[b++] = r.x0, u[b++] = r.y0, c[b++] = l, u[b++] = w * m + A * y + E, u[b++] = _ * y + C * m + R, u[b++] = r.x1, u[b++] = r.y1, c[b++] = l, u[b++] = w * m + A * x + E, u[b++] = _ * x + C * m + R, u[b++] = r.x2, u[b++] = r.y2, c[b++] = l, u[b++] = w * v + A * x + E, u[b++] = _ * x + C * v + R, u[b++] = r.x3, u[b++] = r.y3, c[b++] = l, this.sprites[this.currentBatchSize++] = t
    },e.WebGLSpriteBatch.prototype.flush = function () {
        if (0 !== this.currentBatchSize) {
            var t, i = this.gl;
            if (this.dirty) {
                this.dirty = !1, i.activeTexture(i.TEXTURE0), i.bindBuffer(i.ARRAY_BUFFER, this.vertexBuffer), i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, this.indexBuffer), t = this.defaultShader.shaders[i.id];
                var r = 4 * this.vertSize;
                i.vertexAttribPointer(t.aVertexPosition, 2, i.FLOAT, !1, r, 0), i.vertexAttribPointer(t.aTextureCoord, 2, i.FLOAT, !1, r, 8), i.vertexAttribPointer(t.colorAttribute, 4, i.UNSIGNED_BYTE, !0, r, 16)
            }
            if (this.currentBatchSize > .5 * this.size)i.bufferSubData(i.ARRAY_BUFFER, 0, this.vertices); else {
                var s = this.positions.subarray(0, 4 * this.currentBatchSize * this.vertSize);
                i.bufferSubData(i.ARRAY_BUFFER, 0, s)
            }
            for (var n, o, a, h, l = 0, u = 0, c = null, d = this.renderSession.blendModeManager.currentBlendMode, p = null, f = !1, g = !1, m = 0, v = this.currentBatchSize; v > m; m++) {
                if (h = this.sprites[m], n = h.texture.baseTexture, o = h.blendMode, a = h.shader || this.defaultShader, f = d !== o, g = p !== a, (c !== n || f || g) && (this.renderBatch(c, l, u), u = m, l = 0, c = n, f && (d = o, this.renderSession.blendModeManager.setBlendMode(d)), g)) {
                    p = a, t = p.shaders[i.id], t || (t = new e.PixiShader(i), t.fragmentSrc = p.fragmentSrc, t.uniforms = p.uniforms, t.init(), p.shaders[i.id] = t), this.renderSession.shaderManager.setShader(t), t.dirty && t.syncUniforms();
                    var x = this.renderSession.projection;
                    i.uniform2f(t.projectionVector, x.x, x.y);
                    var y = this.renderSession.offset;
                    i.uniform2f(t.offsetVector, y.x, y.y)
                }
                l++
            }
            this.renderBatch(c, l, u), this.currentBatchSize = 0
        }
    },e.WebGLSpriteBatch.prototype.renderBatch = function (t, e, i) {
        if (0 !== e) {
            var r = this.gl;
            t._dirty[r.id] ? this.renderSession.renderer.updateTexture(t) : r.bindTexture(r.TEXTURE_2D, t._glTextures[r.id]), r.drawElements(r.TRIANGLES, 6 * e, r.UNSIGNED_SHORT, 6 * i * 2), this.renderSession.drawCount++
        }
    },e.WebGLSpriteBatch.prototype.stop = function () {
        this.flush(), this.dirty = !0
    },e.WebGLSpriteBatch.prototype.start = function () {
        this.dirty = !0
    },e.WebGLSpriteBatch.prototype.destroy = function () {
        this.vertices = null, this.indices = null, this.gl.deleteBuffer(this.vertexBuffer), this.gl.deleteBuffer(this.indexBuffer), this.currentBaseTexture = null, this.gl = null
    },e.WebGLFastSpriteBatch = function (t) {
        this.vertSize = 10, this.maxSize = 6e3, this.size = this.maxSize;
        var i = 4 * this.size * this.vertSize, r = 6 * this.maxSize;
        this.vertices = new e.Float32Array(i), this.indices = new e.Uint16Array(r), this.vertexBuffer = null, this.indexBuffer = null, this.lastIndexCount = 0;
        for (var s = 0, n = 0; r > s; s += 6, n += 4)this.indices[s + 0] = n + 0, this.indices[s + 1] = n + 1, this.indices[s + 2] = n + 2, this.indices[s + 3] = n + 0, this.indices[s + 4] = n + 2, this.indices[s + 5] = n + 3;
        this.drawing = !1, this.currentBatchSize = 0, this.currentBaseTexture = null, this.currentBlendMode = 0, this.renderSession = null, this.shader = null, this.matrix = null, this.setContext(t)
    },e.WebGLFastSpriteBatch.prototype.constructor = e.WebGLFastSpriteBatch,e.WebGLFastSpriteBatch.prototype.setContext = function (t) {
        this.gl = t, this.vertexBuffer = t.createBuffer(), this.indexBuffer = t.createBuffer(), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer), t.bufferData(t.ELEMENT_ARRAY_BUFFER, this.indices, t.STATIC_DRAW), t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer), t.bufferData(t.ARRAY_BUFFER, this.vertices, t.DYNAMIC_DRAW)
    },e.WebGLFastSpriteBatch.prototype.begin = function (t, e) {
        this.renderSession = e, this.shader = this.renderSession.shaderManager.fastShader, this.matrix = t.worldTransform.toArray(!0), this.start()
    },e.WebGLFastSpriteBatch.prototype.end = function () {
        this.flush()
    },e.WebGLFastSpriteBatch.prototype.render = function (t) {
        var e = t.children, i = e[0];
        if (i.texture._uvs) {
            this.currentBaseTexture = i.texture.baseTexture, i.blendMode !== this.renderSession.blendModeManager.currentBlendMode && (this.flush(), this.renderSession.blendModeManager.setBlendMode(i.blendMode));
            for (var r = 0, s = e.length; s > r; r++)this.renderSprite(e[r]);
            this.flush()
        }
    },e.WebGLFastSpriteBatch.prototype.renderSprite = function (t) {
        if (t.visible && (t.texture.baseTexture === this.currentBaseTexture || (this.flush(), this.currentBaseTexture = t.texture.baseTexture, t.texture._uvs))) {
            var e, i, r, s, n, o, a, h, l = this.vertices;
            if (e = t.texture._uvs, i = t.texture.frame.width, r = t.texture.frame.height, t.texture.trim) {
                var u = t.texture.trim;
                n = u.x - t.anchor.x * u.width, s = n + t.texture.crop.width, a = u.y - t.anchor.y * u.height, o = a + t.texture.crop.height
            } else s = t.texture.frame.width * (1 - t.anchor.x), n = t.texture.frame.width * -t.anchor.x, o = t.texture.frame.height * (1 - t.anchor.y), a = t.texture.frame.height * -t.anchor.y;
            h = 4 * this.currentBatchSize * this.vertSize, l[h++] = n, l[h++] = a, l[h++] = t.position.x, l[h++] = t.position.y, l[h++] = t.scale.x, l[h++] = t.scale.y, l[h++] = t.rotation, l[h++] = e.x0, l[h++] = e.y1, l[h++] = t.alpha, l[h++] = s, l[h++] = a, l[h++] = t.position.x, l[h++] = t.position.y, l[h++] = t.scale.x, l[h++] = t.scale.y, l[h++] = t.rotation, l[h++] = e.x1, l[h++] = e.y1, l[h++] = t.alpha, l[h++] = s, l[h++] = o, l[h++] = t.position.x, l[h++] = t.position.y, l[h++] = t.scale.x, l[h++] = t.scale.y, l[h++] = t.rotation, l[h++] = e.x2, l[h++] = e.y2, l[h++] = t.alpha, l[h++] = n, l[h++] = o, l[h++] = t.position.x, l[h++] = t.position.y, l[h++] = t.scale.x, l[h++] = t.scale.y, l[h++] = t.rotation, l[h++] = e.x3, l[h++] = e.y3, l[h++] = t.alpha, this.currentBatchSize++, this.currentBatchSize >= this.size && this.flush()
        }
    },e.WebGLFastSpriteBatch.prototype.flush = function () {
        if (0 !== this.currentBatchSize) {
            var t = this.gl;
            if (this.currentBaseTexture._glTextures[t.id] || this.renderSession.renderer.updateTexture(this.currentBaseTexture, t), t.bindTexture(t.TEXTURE_2D, this.currentBaseTexture._glTextures[t.id]), this.currentBatchSize > .5 * this.size)t.bufferSubData(t.ARRAY_BUFFER, 0, this.vertices); else {
                var e = this.vertices.subarray(0, 4 * this.currentBatchSize * this.vertSize);
                t.bufferSubData(t.ARRAY_BUFFER, 0, e)
            }
            t.drawElements(t.TRIANGLES, 6 * this.currentBatchSize, t.UNSIGNED_SHORT, 0), this.currentBatchSize = 0, this.renderSession.drawCount++
        }
    },e.WebGLFastSpriteBatch.prototype.stop = function () {
        this.flush()
    },e.WebGLFastSpriteBatch.prototype.start = function () {
        var t = this.gl;
        t.activeTexture(t.TEXTURE0), t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        var e = this.renderSession.projection;
        t.uniform2f(this.shader.projectionVector, e.x, e.y), t.uniformMatrix3fv(this.shader.uMatrix, !1, this.matrix);
        var i = 4 * this.vertSize;
        t.vertexAttribPointer(this.shader.aVertexPosition, 2, t.FLOAT, !1, i, 0), t.vertexAttribPointer(this.shader.aPositionCoord, 2, t.FLOAT, !1, i, 8), t.vertexAttribPointer(this.shader.aScale, 2, t.FLOAT, !1, i, 16), t.vertexAttribPointer(this.shader.aRotation, 1, t.FLOAT, !1, i, 24), t.vertexAttribPointer(this.shader.aTextureCoord, 2, t.FLOAT, !1, i, 28), t.vertexAttribPointer(this.shader.colorAttribute, 1, t.FLOAT, !1, i, 36)
    },e.WebGLFilterManager = function () {
        this.filterStack = [], this.offsetX = 0, this.offsetY = 0
    },e.WebGLFilterManager.prototype.constructor = e.WebGLFilterManager,e.WebGLFilterManager.prototype.setContext = function (t) {
        this.gl = t, this.texturePool = [], this.initShaderBuffers()
    },e.WebGLFilterManager.prototype.begin = function (t, e) {
        this.renderSession = t, this.defaultShader = t.shaderManager.defaultShader;
        var i = this.renderSession.projection;
        this.width = 2 * i.x, this.height = 2 * -i.y, this.buffer = e
    },e.WebGLFilterManager.prototype.pushFilter = function (t) {
        var i = this.gl, r = this.renderSession.projection, s = this.renderSession.offset;
        t._filterArea = t.target.filterArea || t.target.getBounds(), this.filterStack.push(t);
        var n = t.filterPasses[0];
        this.offsetX += t._filterArea.x, this.offsetY += t._filterArea.y;
        var o = this.texturePool.pop();
        o ? o.resize(this.width, this.height) : o = new e.FilterTexture(this.gl, this.width, this.height), i.bindTexture(i.TEXTURE_2D, o.texture);
        var a = t._filterArea, h = n.padding;
        a.x -= h, a.y -= h, a.width += 2 * h, a.height += 2 * h, a.x < 0 && (a.x = 0), a.width > this.width && (a.width = this.width), a.y < 0 && (a.y = 0), a.height > this.height && (a.height = this.height), i.bindFramebuffer(i.FRAMEBUFFER, o.frameBuffer), i.viewport(0, 0, a.width, a.height), r.x = a.width / 2, r.y = -a.height / 2, s.x = -a.x, s.y = -a.y, i.colorMask(!0, !0, !0, !0), i.clearColor(0, 0, 0, 0), i.clear(i.COLOR_BUFFER_BIT), t._glFilterTexture = o
    },e.WebGLFilterManager.prototype.popFilter = function () {
        var t = this.gl, i = this.filterStack.pop(), r = i._filterArea, s = i._glFilterTexture, n = this.renderSession.projection, o = this.renderSession.offset;
        if (i.filterPasses.length > 1) {
            t.viewport(0, 0, r.width, r.height), t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer), this.vertexArray[0] = 0, this.vertexArray[1] = r.height, this.vertexArray[2] = r.width, this.vertexArray[3] = r.height, this.vertexArray[4] = 0, this.vertexArray[5] = 0, this.vertexArray[6] = r.width, this.vertexArray[7] = 0, t.bufferSubData(t.ARRAY_BUFFER, 0, this.vertexArray), t.bindBuffer(t.ARRAY_BUFFER, this.uvBuffer), this.uvArray[2] = r.width / this.width, this.uvArray[5] = r.height / this.height, this.uvArray[6] = r.width / this.width, this.uvArray[7] = r.height / this.height, t.bufferSubData(t.ARRAY_BUFFER, 0, this.uvArray);
            var a = s, h = this.texturePool.pop();
            h || (h = new e.FilterTexture(this.gl, this.width, this.height)), h.resize(this.width, this.height), t.bindFramebuffer(t.FRAMEBUFFER, h.frameBuffer), t.clear(t.COLOR_BUFFER_BIT), t.disable(t.BLEND);
            for (var l = 0; l < i.filterPasses.length - 1; l++) {
                var u = i.filterPasses[l];
                t.bindFramebuffer(t.FRAMEBUFFER, h.frameBuffer), t.activeTexture(t.TEXTURE0), t.bindTexture(t.TEXTURE_2D, a.texture), this.applyFilterPass(u, r, r.width, r.height);
                var c = a;
                a = h, h = c
            }
            t.enable(t.BLEND), s = a, this.texturePool.push(h)
        }
        var d = i.filterPasses[i.filterPasses.length - 1];
        this.offsetX -= r.x, this.offsetY -= r.y;
        var p = this.width, f = this.height, g = 0, m = 0, v = this.buffer;
        if (0 === this.filterStack.length)t.colorMask(!0, !0, !0, !0); else {
            var x = this.filterStack[this.filterStack.length - 1];
            r = x._filterArea, p = r.width, f = r.height, g = r.x, m = r.y, v = x._glFilterTexture.frameBuffer
        }
        n.x = p / 2, n.y = -f / 2, o.x = g, o.y = m, r = i._filterArea;
        var y = r.x - g, b = r.y - m;
        t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer), this.vertexArray[0] = y, this.vertexArray[1] = b + r.height, this.vertexArray[2] = y + r.width, this.vertexArray[3] = b + r.height, this.vertexArray[4] = y, this.vertexArray[5] = b, this.vertexArray[6] = y + r.width, this.vertexArray[7] = b, t.bufferSubData(t.ARRAY_BUFFER, 0, this.vertexArray), t.bindBuffer(t.ARRAY_BUFFER, this.uvBuffer), this.uvArray[2] = r.width / this.width, this.uvArray[5] = r.height / this.height, this.uvArray[6] = r.width / this.width, this.uvArray[7] = r.height / this.height, t.bufferSubData(t.ARRAY_BUFFER, 0, this.uvArray), t.viewport(0, 0, p, f), t.bindFramebuffer(t.FRAMEBUFFER, v), t.activeTexture(t.TEXTURE0), t.bindTexture(t.TEXTURE_2D, s.texture), this.applyFilterPass(d, r, p, f), this.texturePool.push(s), i._glFilterTexture = null
    },e.WebGLFilterManager.prototype.applyFilterPass = function (t, i, r, s) {
        var n = this.gl, o = t.shaders[n.id];
        o || (o = new e.PixiShader(n), o.fragmentSrc = t.fragmentSrc, o.uniforms = t.uniforms, o.init(), t.shaders[n.id] = o), this.renderSession.shaderManager.setShader(o), n.uniform2f(o.projectionVector, r / 2, -s / 2), n.uniform2f(o.offsetVector, 0, 0), t.uniforms.dimensions && (t.uniforms.dimensions.value[0] = this.width, t.uniforms.dimensions.value[1] = this.height, t.uniforms.dimensions.value[2] = this.vertexArray[0], t.uniforms.dimensions.value[3] = this.vertexArray[5]), o.syncUniforms(), n.bindBuffer(n.ARRAY_BUFFER, this.vertexBuffer), n.vertexAttribPointer(o.aVertexPosition, 2, n.FLOAT, !1, 0, 0), n.bindBuffer(n.ARRAY_BUFFER, this.uvBuffer), n.vertexAttribPointer(o.aTextureCoord, 2, n.FLOAT, !1, 0, 0), n.bindBuffer(n.ARRAY_BUFFER, this.colorBuffer), n.vertexAttribPointer(o.colorAttribute, 2, n.FLOAT, !1, 0, 0), n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, this.indexBuffer), n.drawElements(n.TRIANGLES, 6, n.UNSIGNED_SHORT, 0), this.renderSession.drawCount++
    },e.WebGLFilterManager.prototype.initShaderBuffers = function () {
        var t = this.gl;
        this.vertexBuffer = t.createBuffer(), this.uvBuffer = t.createBuffer(), this.colorBuffer = t.createBuffer(), this.indexBuffer = t.createBuffer(), this.vertexArray = new e.Float32Array([0, 0, 1, 0, 0, 1, 1, 1]), t.bindBuffer(t.ARRAY_BUFFER, this.vertexBuffer), t.bufferData(t.ARRAY_BUFFER, this.vertexArray, t.STATIC_DRAW), this.uvArray = new e.Float32Array([0, 0, 1, 0, 0, 1, 1, 1]), t.bindBuffer(t.ARRAY_BUFFER, this.uvBuffer), t.bufferData(t.ARRAY_BUFFER, this.uvArray, t.STATIC_DRAW), this.colorArray = new e.Float32Array([1, 16777215, 1, 16777215, 1, 16777215, 1, 16777215]), t.bindBuffer(t.ARRAY_BUFFER, this.colorBuffer), t.bufferData(t.ARRAY_BUFFER, this.colorArray, t.STATIC_DRAW), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, this.indexBuffer), t.bufferData(t.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 1, 3, 2]), t.STATIC_DRAW)
    },e.WebGLFilterManager.prototype.destroy = function () {
        var t = this.gl;
        this.filterStack = null, this.offsetX = 0, this.offsetY = 0;
        for (var e = 0; e < this.texturePool.length; e++)this.texturePool[e].destroy();
        this.texturePool = null, t.deleteBuffer(this.vertexBuffer), t.deleteBuffer(this.uvBuffer), t.deleteBuffer(this.colorBuffer), t.deleteBuffer(this.indexBuffer)
    },e.FilterTexture = function (t, i, r, s) {
        this.gl = t, this.frameBuffer = t.createFramebuffer(), this.texture = t.createTexture(), s = s || e.scaleModes.DEFAULT, t.bindTexture(t.TEXTURE_2D, this.texture), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, s === e.scaleModes.LINEAR ? t.LINEAR : t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, s === e.scaleModes.LINEAR ? t.LINEAR : t.NEAREST), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.bindFramebuffer(t.FRAMEBUFFER, this.frameBuffer), t.bindFramebuffer(t.FRAMEBUFFER, this.frameBuffer), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, this.texture, 0), this.renderBuffer = t.createRenderbuffer(), t.bindRenderbuffer(t.RENDERBUFFER, this.renderBuffer), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.RENDERBUFFER, this.renderBuffer), this.resize(i, r)
    },e.FilterTexture.prototype.constructor = e.FilterTexture,e.FilterTexture.prototype.clear = function () {
        var t = this.gl;
        t.clearColor(0, 0, 0, 0), t.clear(t.COLOR_BUFFER_BIT)
    },e.FilterTexture.prototype.resize = function (t, e) {
        if (this.width !== t || this.height !== e) {
            this.width = t, this.height = e;
            var i = this.gl;
            i.bindTexture(i.TEXTURE_2D, this.texture), i.texImage2D(i.TEXTURE_2D, 0, i.RGBA, t, e, 0, i.RGBA, i.UNSIGNED_BYTE, null), i.bindRenderbuffer(i.RENDERBUFFER, this.renderBuffer), i.renderbufferStorage(i.RENDERBUFFER, i.DEPTH_STENCIL, t, e)
        }
    },e.FilterTexture.prototype.destroy = function () {
        var t = this.gl;
        t.deleteFramebuffer(this.frameBuffer), t.deleteTexture(this.texture), this.frameBuffer = null, this.texture = null
    },e.CanvasBuffer = function (t, e) {
        this.width = t, this.height = e, this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.canvas.width = t, this.canvas.height = e
    },e.CanvasBuffer.prototype.constructor = e.CanvasBuffer,e.CanvasBuffer.prototype.clear = function () {
        this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.clearRect(0, 0, this.width, this.height)
    },e.CanvasBuffer.prototype.resize = function (t, e) {
        this.width = this.canvas.width = t, this.height = this.canvas.height = e
    },e.CanvasMaskManager = function () {
    },e.CanvasMaskManager.prototype.constructor = e.CanvasMaskManager,e.CanvasMaskManager.prototype.pushMask = function (t, i) {
        var r = i.context;
        r.save();
        var s = t.alpha, n = t.worldTransform, o = i.resolution;
        r.setTransform(n.a * o, n.b * o, n.c * o, n.d * o, n.tx * o, n.ty * o), e.CanvasGraphics.renderGraphicsMask(t, r), r.clip(), t.worldAlpha = s
    },e.CanvasMaskManager.prototype.popMask = function (t) {
        t.context.restore()
    },e.CanvasTinter = function () {
    },e.CanvasTinter.getTintedTexture = function (t, i) {
        var r = t.texture;
        i = e.CanvasTinter.roundColor(i);
        var s = "#" + ("00000" + (0 | i).toString(16)).substr(-6);
        if (r.tintCache = r.tintCache || {}, r.tintCache[s])return r.tintCache[s];
        var n = e.CanvasTinter.canvas || document.createElement("canvas");
        if (e.CanvasTinter.tintMethod(r, i, n), e.CanvasTinter.convertTintToImage) {
            var o = new Image;
            o.src = n.toDataURL(), r.tintCache[s] = o
        } else r.tintCache[s] = n, e.CanvasTinter.canvas = null;
        return n
    },e.CanvasTinter.tintWithMultiply = function (t, e, i) {
        var r = i.getContext("2d"), s = t.crop;
        i.width = s.width, i.height = s.height, r.fillStyle = "#" + ("00000" + (0 | e).toString(16)).substr(-6), r.fillRect(0, 0, s.width, s.height), r.globalCompositeOperation = "multiply", r.drawImage(t.baseTexture.source, s.x, s.y, s.width, s.height, 0, 0, s.width, s.height), r.globalCompositeOperation = "destination-atop", r.drawImage(t.baseTexture.source, s.x, s.y, s.width, s.height, 0, 0, s.width, s.height)
    },e.CanvasTinter.tintWithOverlay = function (t, e, i) {
        var r = i.getContext("2d"), s = t.crop;
        i.width = s.width, i.height = s.height, r.globalCompositeOperation = "copy", r.fillStyle = "#" + ("00000" + (0 | e).toString(16)).substr(-6), r.fillRect(0, 0, s.width, s.height), r.globalCompositeOperation = "destination-atop", r.drawImage(t.baseTexture.source, s.x, s.y, s.width, s.height, 0, 0, s.width, s.height)
    },e.CanvasTinter.tintWithPerPixel = function (t, i, r) {
        var s = r.getContext("2d"), n = t.crop;
        r.width = n.width, r.height = n.height, s.globalCompositeOperation = "copy", s.drawImage(t.baseTexture.source, n.x, n.y, n.width, n.height, 0, 0, n.width, n.height);
        for (var o = e.hex2rgb(i), a = o[0], h = o[1], l = o[2], u = s.getImageData(0, 0, n.width, n.height), c = u.data, d = 0; d < c.length; d += 4)c[d + 0] *= a, c[d + 1] *= h, c[d + 2] *= l;
        s.putImageData(u, 0, 0)
    },e.CanvasTinter.roundColor = function (t) {
        var i = e.CanvasTinter.cacheStepsPerColorChannel, r = e.hex2rgb(t);
        return r[0] = Math.min(255, r[0] / i * i), r[1] = Math.min(255, r[1] / i * i), r[2] = Math.min(255, r[2] / i * i), e.rgb2hex(r)
    },e.CanvasTinter.cacheStepsPerColorChannel = 8,e.CanvasTinter.convertTintToImage = !1,e.CanvasTinter.canUseMultiply = e.canUseNewCanvasBlendModes(),e.CanvasTinter.tintMethod = e.CanvasTinter.canUseMultiply ? e.CanvasTinter.tintWithMultiply : e.CanvasTinter.tintWithPerPixel,e.CanvasRenderer = function (t, i, r) {
        if (r)for (var s in e.defaultRenderOptions)"undefined" == typeof r[s] && (r[s] = e.defaultRenderOptions[s]); else r = e.defaultRenderOptions;
        e.defaultRenderer || (e.sayHello("Canvas"), e.defaultRenderer = this), this.type = e.CANVAS_RENDERER, this.resolution = r.resolution, this.clearBeforeRender = r.clearBeforeRender, this.transparent = r.transparent, this.autoResize = r.autoResize || !1, this.width = t || 800, this.height = i || 600, this.width *= this.resolution, this.height *= this.resolution, this.view = r.view || document.createElement("canvas"), this.context = this.view.getContext("2d", {alpha: this.transparent}), this.refresh = !0, this.view.width = this.width * this.resolution, this.view.height = this.height * this.resolution, this.count = 0, this.maskManager = new e.CanvasMaskManager, this.renderSession = {
            context: this.context,
            maskManager: this.maskManager,
            scaleMode: null,
            smoothProperty: null,
            roundPixels: !1
        }, this.mapBlendModes(), this.resize(t, i), "imageSmoothingEnabled"in this.context ? this.renderSession.smoothProperty = "imageSmoothingEnabled" : "webkitImageSmoothingEnabled"in this.context ? this.renderSession.smoothProperty = "webkitImageSmoothingEnabled" : "mozImageSmoothingEnabled"in this.context ? this.renderSession.smoothProperty = "mozImageSmoothingEnabled" : "oImageSmoothingEnabled"in this.context ? this.renderSession.smoothProperty = "oImageSmoothingEnabled" : "msImageSmoothingEnabled"in this.context && (this.renderSession.smoothProperty = "msImageSmoothingEnabled")
    },e.CanvasRenderer.prototype.constructor = e.CanvasRenderer,e.CanvasRenderer.prototype.render = function (t) {
        t.updateTransform(), this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.globalAlpha = 1, this.renderSession.currentBlendMode = e.blendModes.NORMAL, this.context.globalCompositeOperation = e.blendModesCanvas[e.blendModes.NORMAL], navigator.isCocoonJS && this.view.screencanvas && (this.context.fillStyle = "black", this.context.clear()), this.clearBeforeRender && (this.transparent ? this.context.clearRect(0, 0, this.width, this.height) : (this.context.fillStyle = t.backgroundColorString, this.context.fillRect(0, 0, this.width, this.height))), this.renderDisplayObject(t), t.interactive && (t._interactiveEventsAdded || (t._interactiveEventsAdded = !0, t.interactionManager.setTarget(this)))
    },e.CanvasRenderer.prototype.destroy = function (t) {
        "undefined" == typeof t && (t = !0), t && this.view.parent && this.view.parent.removeChild(this.view), this.view = null, this.context = null, this.maskManager = null, this.renderSession = null
    },e.CanvasRenderer.prototype.resize = function (t, e) {
        this.width = t * this.resolution, this.height = e * this.resolution, this.view.width = this.width, this.view.height = this.height, this.autoResize && (this.view.style.width = this.width / this.resolution + "px", this.view.style.height = this.height / this.resolution + "px")
    },e.CanvasRenderer.prototype.renderDisplayObject = function (t, e) {
        this.renderSession.context = e || this.context, this.renderSession.resolution = this.resolution, t._renderCanvas(this.renderSession)
    },e.CanvasRenderer.prototype.mapBlendModes = function () {
        e.blendModesCanvas || (e.blendModesCanvas = [], e.canUseNewCanvasBlendModes() ? (e.blendModesCanvas[e.blendModes.NORMAL] = "source-over", e.blendModesCanvas[e.blendModes.ADD] = "lighter", e.blendModesCanvas[e.blendModes.MULTIPLY] = "multiply", e.blendModesCanvas[e.blendModes.SCREEN] = "screen", e.blendModesCanvas[e.blendModes.OVERLAY] = "overlay", e.blendModesCanvas[e.blendModes.DARKEN] = "darken", e.blendModesCanvas[e.blendModes.LIGHTEN] = "lighten", e.blendModesCanvas[e.blendModes.COLOR_DODGE] = "color-dodge", e.blendModesCanvas[e.blendModes.COLOR_BURN] = "color-burn", e.blendModesCanvas[e.blendModes.HARD_LIGHT] = "hard-light", e.blendModesCanvas[e.blendModes.SOFT_LIGHT] = "soft-light", e.blendModesCanvas[e.blendModes.DIFFERENCE] = "difference", e.blendModesCanvas[e.blendModes.EXCLUSION] = "exclusion", e.blendModesCanvas[e.blendModes.HUE] = "hue", e.blendModesCanvas[e.blendModes.SATURATION] = "saturation", e.blendModesCanvas[e.blendModes.COLOR] = "color", e.blendModesCanvas[e.blendModes.LUMINOSITY] = "luminosity") : (e.blendModesCanvas[e.blendModes.NORMAL] = "source-over", e.blendModesCanvas[e.blendModes.ADD] = "lighter", e.blendModesCanvas[e.blendModes.MULTIPLY] = "source-over", e.blendModesCanvas[e.blendModes.SCREEN] = "source-over", e.blendModesCanvas[e.blendModes.OVERLAY] = "source-over", e.blendModesCanvas[e.blendModes.DARKEN] = "source-over", e.blendModesCanvas[e.blendModes.LIGHTEN] = "source-over", e.blendModesCanvas[e.blendModes.COLOR_DODGE] = "source-over", e.blendModesCanvas[e.blendModes.COLOR_BURN] = "source-over", e.blendModesCanvas[e.blendModes.HARD_LIGHT] = "source-over", e.blendModesCanvas[e.blendModes.SOFT_LIGHT] = "source-over", e.blendModesCanvas[e.blendModes.DIFFERENCE] = "source-over", e.blendModesCanvas[e.blendModes.EXCLUSION] = "source-over", e.blendModesCanvas[e.blendModes.HUE] = "source-over", e.blendModesCanvas[e.blendModes.SATURATION] = "source-over", e.blendModesCanvas[e.blendModes.COLOR] = "source-over", e.blendModesCanvas[e.blendModes.LUMINOSITY] = "source-over"))
    },e.CanvasGraphics = function () {
    },e.CanvasGraphics.renderGraphics = function (t, i) {
        var r = t.worldAlpha;
        t.dirty && (this.updateGraphicsTint(t), t.dirty = !1);
        for (var s = 0; s < t.graphicsData.length; s++) {
            var n = t.graphicsData[s], o = n.shape, a = n._fillTint, h = n._lineTint;
            if (i.lineWidth = n.lineWidth, n.type === e.Graphics.POLY) {
                i.beginPath();
                var l = o.points;
                i.moveTo(l[0], l[1]);
                for (var u = 1; u < l.length / 2; u++)i.lineTo(l[2 * u], l[2 * u + 1]);
                o.closed && i.lineTo(l[0], l[1]), l[0] === l[l.length - 2] && l[1] === l[l.length - 1] && i.closePath(), n.fill && (i.globalAlpha = n.fillAlpha * r, i.fillStyle = "#" + ("00000" + (0 | a).toString(16)).substr(-6), i.fill()), n.lineWidth && (i.globalAlpha = n.lineAlpha * r, i.strokeStyle = "#" + ("00000" + (0 | h).toString(16)).substr(-6), i.stroke())
            } else if (n.type === e.Graphics.RECT)(n.fillColor || 0 === n.fillColor) && (i.globalAlpha = n.fillAlpha * r, i.fillStyle = "#" + ("00000" + (0 | a).toString(16)).substr(-6), i.fillRect(o.x, o.y, o.width, o.height)), n.lineWidth && (i.globalAlpha = n.lineAlpha * r, i.strokeStyle = "#" + ("00000" + (0 | h).toString(16)).substr(-6), i.strokeRect(o.x, o.y, o.width, o.height)); else if (n.type === e.Graphics.CIRC)i.beginPath(), i.arc(o.x, o.y, o.radius, 0, 2 * Math.PI), i.closePath(), n.fill && (i.globalAlpha = n.fillAlpha * r, i.fillStyle = "#" + ("00000" + (0 | a).toString(16)).substr(-6), i.fill()), n.lineWidth && (i.globalAlpha = n.lineAlpha * r, i.strokeStyle = "#" + ("00000" + (0 | h).toString(16)).substr(-6), i.stroke()); else if (n.type === e.Graphics.ELIP) {
                var c = 2 * o.width, d = 2 * o.height, p = o.x - c / 2, f = o.y - d / 2;
                i.beginPath();
                var g = .5522848, m = c / 2 * g, v = d / 2 * g, x = p + c, y = f + d, b = p + c / 2, T = f + d / 2;
                i.moveTo(p, T), i.bezierCurveTo(p, T - v, b - m, f, b, f), i.bezierCurveTo(b + m, f, x, T - v, x, T), i.bezierCurveTo(x, T + v, b + m, y, b, y), i.bezierCurveTo(b - m, y, p, T + v, p, T), i.closePath(), n.fill && (i.globalAlpha = n.fillAlpha * r, i.fillStyle = "#" + ("00000" + (0 | a).toString(16)).substr(-6), i.fill()), n.lineWidth && (i.globalAlpha = n.lineAlpha * r, i.strokeStyle = "#" + ("00000" + (0 | h).toString(16)).substr(-6), i.stroke())
            } else if (n.type === e.Graphics.RREC) {
                var S = o.x, w = o.y, C = o.width, A = o.height, _ = o.radius, E = Math.min(C, A) / 2 | 0;
                _ = _ > E ? E : _, i.beginPath(), i.moveTo(S, w + _), i.lineTo(S, w + A - _), i.quadraticCurveTo(S, w + A, S + _, w + A), i.lineTo(S + C - _, w + A), i.quadraticCurveTo(S + C, w + A, S + C, w + A - _), i.lineTo(S + C, w + _), i.quadraticCurveTo(S + C, w, S + C - _, w), i.lineTo(S + _, w), i.quadraticCurveTo(S, w, S, w + _), i.closePath(), (n.fillColor || 0 === n.fillColor) && (i.globalAlpha = n.fillAlpha * r, i.fillStyle = "#" + ("00000" + (0 | a).toString(16)).substr(-6), i.fill()), n.lineWidth && (i.globalAlpha = n.lineAlpha * r, i.strokeStyle = "#" + ("00000" + (0 | h).toString(16)).substr(-6), i.stroke())
            }
        }
    },e.CanvasGraphics.renderGraphicsMask = function (t, i) {
        var r = t.graphicsData.length;
        if (0 !== r) {
            r > 1 && (r = 1, window.console.log("Pixi.js warning: masks in canvas can only mask using the first path in the graphics object"));
            for (var s = 0; 1 > s; s++) {
                var n = t.graphicsData[s], o = n.shape;
                if (n.type === e.Graphics.POLY) {
                    i.beginPath();
                    var a = o.points;
                    i.moveTo(a[0], a[1]);
                    for (var h = 1; h < a.length / 2; h++)i.lineTo(a[2 * h], a[2 * h + 1]);
                    a[0] === a[a.length - 2] && a[1] === a[a.length - 1] && i.closePath()
                } else if (n.type === e.Graphics.RECT)i.beginPath(), i.rect(o.x, o.y, o.width, o.height), i.closePath(); else if (n.type === e.Graphics.CIRC)i.beginPath(), i.arc(o.x, o.y, o.radius, 0, 2 * Math.PI), i.closePath(); else if (n.type === e.Graphics.ELIP) {
                    var l = 2 * o.width, u = 2 * o.height, c = o.x - l / 2, d = o.y - u / 2;
                    i.beginPath();
                    var p = .5522848, f = l / 2 * p, g = u / 2 * p, m = c + l, v = d + u, x = c + l / 2, y = d + u / 2;
                    i.moveTo(c, y), i.bezierCurveTo(c, y - g, x - f, d, x, d), i.bezierCurveTo(x + f, d, m, y - g, m, y), i.bezierCurveTo(m, y + g, x + f, v, x, v), i.bezierCurveTo(x - f, v, c, y + g, c, y), i.closePath()
                } else if (n.type === e.Graphics.RREC) {
                    var b = o.points, T = b[0], S = b[1], w = b[2], C = b[3], A = b[4], _ = Math.min(w, C) / 2 | 0;
                    A = A > _ ? _ : A, i.beginPath(), i.moveTo(T, S + A), i.lineTo(T, S + C - A), i.quadraticCurveTo(T, S + C, T + A, S + C), i.lineTo(T + w - A, S + C), i.quadraticCurveTo(T + w, S + C, T + w, S + C - A), i.lineTo(T + w, S + A), i.quadraticCurveTo(T + w, S, T + w - A, S), i.lineTo(T + A, S), i.quadraticCurveTo(T, S, T, S + A), i.closePath()
                }
            }
        }
    },e.CanvasGraphics.updateGraphicsTint = function (t) {
        if (16777215 !== t.tint)for (var e = (t.tint >> 16 & 255) / 255, i = (t.tint >> 8 & 255) / 255, r = (255 & t.tint) / 255, s = 0; s < t.graphicsData.length; s++) {
            var n = t.graphicsData[s], o = 0 | n.fillColor, a = 0 | n.lineColor;
            n._fillTint = ((o >> 16 & 255) / 255 * e * 255 << 16) + ((o >> 8 & 255) / 255 * i * 255 << 8) + (255 & o) / 255 * r * 255, n._lineTint = ((a >> 16 & 255) / 255 * e * 255 << 16) + ((a >> 8 & 255) / 255 * i * 255 << 8) + (255 & a) / 255 * r * 255
        }
    },e.Graphics = function () {
        e.DisplayObjectContainer.call(this), this.renderable = !0, this.fillAlpha = 1, this.lineWidth = 0, this.lineColor = 0, this.graphicsData = [], this.tint = 16777215, this.blendMode = e.blendModes.NORMAL, this.currentPath = null, this._webGL = [], this.isMask = !1, this.boundsPadding = 0, this._localBounds = new e.Rectangle(0, 0, 1, 1), this.dirty = !0, this.webGLDirty = !1, this.cachedSpriteDirty = !1
    },e.Graphics.prototype = Object.create(e.DisplayObjectContainer.prototype),e.Graphics.prototype.constructor = e.Graphics,Object.defineProperty(e.Graphics.prototype, "cacheAsBitmap", {
        get: function () {
            return this._cacheAsBitmap
        }, set: function (t) {
            this._cacheAsBitmap = t, this._cacheAsBitmap ? this._generateCachedSprite() : (this.destroyCachedSprite(), this.dirty = !0)
        }
    }),e.Graphics.prototype.lineStyle = function (t, i, r) {
        if (this.lineWidth = t || 0, this.lineColor = i || 0, this.lineAlpha = arguments.length < 3 ? 1 : r, this.currentPath) {
            if (this.currentPath.shape.points.length)return this.drawShape(new e.Polygon(this.currentPath.shape.points.slice(-2))), this;
            this.currentPath.lineWidth = this.lineWidth, this.currentPath.lineColor = this.lineColor, this.currentPath.lineAlpha = this.lineAlpha
        }
        return this
    },e.Graphics.prototype.moveTo = function (t, i) {
        return this.drawShape(new e.Polygon([t, i])), this
    },e.Graphics.prototype.lineTo = function (t, e) {
        return this.currentPath.shape.points.push(t, e), this.dirty = !0, this
    },e.Graphics.prototype.quadraticCurveTo = function (t, e, i, r) {
        this.currentPath ? 0 === this.currentPath.shape.points.length && (this.currentPath.shape.points = [0, 0]) : this.moveTo(0, 0);
        var s, n, o = 20, a = this.currentPath.shape.points;
        0 === a.length && this.moveTo(0, 0);
        for (var h = a[a.length - 2], l = a[a.length - 1], u = 0, c = 1; o >= c; c++)u = c / o, s = h + (t - h) * u, n = l + (e - l) * u, a.push(s + (t + (i - t) * u - s) * u, n + (e + (r - e) * u - n) * u);
        return this.dirty = !0, this
    },e.Graphics.prototype.bezierCurveTo = function (t, e, i, r, s, n) {
        this.currentPath ? 0 === this.currentPath.shape.points.length && (this.currentPath.shape.points = [0, 0]) : this.moveTo(0, 0);
        for (var o, a, h, l, u, c = 20, d = this.currentPath.shape.points, p = d[d.length - 2], f = d[d.length - 1], g = 0, m = 1; c >= m; m++)g = m / c, o = 1 - g, a = o * o, h = a * o, l = g * g, u = l * g, d.push(h * p + 3 * a * g * t + 3 * o * l * i + u * s, h * f + 3 * a * g * e + 3 * o * l * r + u * n);
        return this.dirty = !0, this
    },e.Graphics.prototype.arcTo = function (t, e, i, r, s) {
        this.currentPath ? 0 === this.currentPath.shape.points.length && this.currentPath.shape.points.push(t, e) : this.moveTo(t, e);
        var n = this.currentPath.shape.points, o = n[n.length - 2], a = n[n.length - 1], h = a - e, l = o - t, u = r - e, c = i - t, d = Math.abs(h * c - l * u);
        if (1e-8 > d || 0 === s)(n[n.length - 2] !== t || n[n.length - 1] !== e) && n.push(t, e); else {
            var p = h * h + l * l, f = u * u + c * c, g = h * u + l * c, m = s * Math.sqrt(p) / d, v = s * Math.sqrt(f) / d, x = m * g / p, y = v * g / f, b = m * c + v * l, T = m * u + v * h, S = l * (v + x), w = h * (v + x), C = c * (m + y), A = u * (m + y), _ = Math.atan2(w - T, S - b), E = Math.atan2(A - T, C - b);
            this.arc(b + t, T + e, s, _, E, l * u > c * h)
        }
        return this.dirty = !0, this
    },e.Graphics.prototype.arc = function (t, e, i, r, s, n) {
        var o, a = t + Math.cos(r) * i, h = e + Math.sin(r) * i;
        if (this.currentPath ? (o = this.currentPath.shape.points, 0 === o.length ? o.push(a, h) : (o[o.length - 2] !== a || o[o.length - 1] !== h) && o.push(a, h)) : (this.moveTo(a, h), o = this.currentPath.shape.points), r === s)return this;
        !n && r >= s ? s += 2 * Math.PI : n && s >= r && (r += 2 * Math.PI);
        var l = n ? -1 * (r - s) : s - r, u = Math.abs(l) / (2 * Math.PI) * 40;
        if (0 === l)return this;
        for (var c = l / (2 * u), d = 2 * c, p = Math.cos(c), f = Math.sin(c), g = u - 1, m = g % 1 / g, v = 0; g >= v; v++) {
            var x = v + m * v, y = c + r + d * x, b = Math.cos(y), T = -Math.sin(y);
            o.push((p * b + f * T) * i + t, (p * -T + f * b) * i + e)
        }
        return this.dirty = !0, this
    },e.Graphics.prototype.beginFill = function (t, e) {
        return this.filling = !0, this.fillColor = t || 0, this.fillAlpha = void 0 === e ? 1 : e, this.currentPath && this.currentPath.shape.points.length <= 2 && (this.currentPath.fill = this.filling, this.currentPath.fillColor = this.fillColor, this.currentPath.fillAlpha = this.fillAlpha), this
    },e.Graphics.prototype.endFill = function () {
        return this.filling = !1, this.fillColor = null, this.fillAlpha = 1, this
    },e.Graphics.prototype.drawRect = function (t, i, r, s) {
        return this.drawShape(new e.Rectangle(t, i, r, s)), this
    },e.Graphics.prototype.drawRoundedRect = function (t, i, r, s, n) {
        return this.drawShape(new e.RoundedRectangle(t, i, r, s, n)), this
    },e.Graphics.prototype.drawCircle = function (t, i, r) {
        return this.drawShape(new e.Circle(t, i, r)), this
    },e.Graphics.prototype.drawEllipse = function (t, i, r, s) {
        return this.drawShape(new e.Ellipse(t, i, r, s)), this
    },e.Graphics.prototype.drawPolygon = function (t) {
        return t instanceof Array || (t = Array.prototype.slice.call(arguments)), this.drawShape(new e.Polygon(t)), this
    },e.Graphics.prototype.clear = function () {
        return this.lineWidth = 0, this.filling = !1, this.dirty = !0, this.clearDirty = !0, this.graphicsData = [], this
    },e.Graphics.prototype.generateTexture = function (t, i) {
        t = t || 1;
        var r = this.getBounds(), s = new e.CanvasBuffer(r.width * t, r.height * t), n = e.Texture.fromCanvas(s.canvas, i);
        return n.baseTexture.resolution = t, s.context.scale(t, t), s.context.translate(-r.x, -r.y), e.CanvasGraphics.renderGraphics(this, s.context), n
    },e.Graphics.prototype._renderWebGL = function (t) {
        if (this.visible !== !1 && 0 !== this.alpha && this.isMask !== !0) {
            if (this._cacheAsBitmap)return (this.dirty || this.cachedSpriteDirty) && (this._generateCachedSprite(), this.updateCachedSpriteTexture(), this.cachedSpriteDirty = !1, this.dirty = !1), this._cachedSprite.worldAlpha = this.worldAlpha, void e.Sprite.prototype._renderWebGL.call(this._cachedSprite, t);
            if (t.spriteBatch.stop(), t.blendModeManager.setBlendMode(this.blendMode), this._mask && t.maskManager.pushMask(this._mask, t), this._filters && t.filterManager.pushFilter(this._filterBlock), this.blendMode !== t.spriteBatch.currentBlendMode) {
                t.spriteBatch.currentBlendMode = this.blendMode;
                var i = e.blendModesWebGL[t.spriteBatch.currentBlendMode];
                t.spriteBatch.gl.blendFunc(i[0], i[1])
            }
            if (this.webGLDirty && (this.dirty = !0, this.webGLDirty = !1), e.WebGLGraphics.renderGraphics(this, t), this.children.length) {
                t.spriteBatch.start();
                for (var r = 0, s = this.children.length; s > r; r++)this.children[r]._renderWebGL(t);
                t.spriteBatch.stop()
            }
            this._filters && t.filterManager.popFilter(), this._mask && t.maskManager.popMask(this.mask, t), t.drawCount++, t.spriteBatch.start()
        }
    },e.Graphics.prototype._renderCanvas = function (t) {
        if (this.visible !== !1 && 0 !== this.alpha && this.isMask !== !0) {
            if (this._cacheAsBitmap)return (this.dirty || this.cachedSpriteDirty) && (this._generateCachedSprite(), this.updateCachedSpriteTexture(), this.cachedSpriteDirty = !1, this.dirty = !1), this._cachedSprite.alpha = this.alpha, void e.Sprite.prototype._renderCanvas.call(this._cachedSprite, t);
            var i = t.context, r = this.worldTransform;
            this.blendMode !== t.currentBlendMode && (t.currentBlendMode = this.blendMode, i.globalCompositeOperation = e.blendModesCanvas[t.currentBlendMode]), this._mask && t.maskManager.pushMask(this._mask, t);
            var s = t.resolution;
            i.setTransform(r.a * s, r.b * s, r.c * s, r.d * s, r.tx * s, r.ty * s), e.CanvasGraphics.renderGraphics(this, i);
            for (var n = 0, o = this.children.length; o > n; n++)this.children[n]._renderCanvas(t);
            this._mask && t.maskManager.popMask(t)
        }
    },e.Graphics.prototype.getBounds = function (t) {
        if (this.isMask)return e.EmptyRectangle;
        this.dirty && (this.updateLocalBounds(), this.webGLDirty = !0, this.cachedSpriteDirty = !0, this.dirty = !1);
        var i = this._localBounds, r = i.x, s = i.width + i.x, n = i.y, o = i.height + i.y, a = t || this.worldTransform, h = a.a, l = a.b, u = a.c, c = a.d, d = a.tx, p = a.ty, f = h * s + u * o + d, g = c * o + l * s + p, m = h * r + u * o + d, v = c * o + l * r + p, x = h * r + u * n + d, y = c * n + l * r + p, b = h * s + u * n + d, T = c * n + l * s + p, S = f, w = g, C = f, A = g;
        return C = C > m ? m : C, C = C > x ? x : C, C = C > b ? b : C, A = A > v ? v : A, A = A > y ? y : A, A = A > T ? T : A, S = m > S ? m : S, S = x > S ? x : S, S = b > S ? b : S, w = v > w ? v : w, w = y > w ? y : w, w = T > w ? T : w, this._bounds.x = C, this._bounds.width = S - C, this._bounds.y = A, this._bounds.height = w - A, this._bounds
    },e.Graphics.prototype.updateLocalBounds = function () {
        var t = 1 / 0, i = -1 / 0, r = 1 / 0, s = -1 / 0;
        if (this.graphicsData.length)for (var n, o, a, h, l, u, c = 0; c < this.graphicsData.length; c++) {
            var d = this.graphicsData[c], p = d.type, f = d.lineWidth;
            if (n = d.shape, p === e.Graphics.RECT || p === e.Graphics.RREC)a = n.x - f / 2, h = n.y - f / 2, l = n.width + f, u = n.height + f, t = t > a ? a : t, i = a + l > i ? a + l : i, r = r > h ? h : r, s = h + u > s ? h + u : s; else if (p === e.Graphics.CIRC)a = n.x, h = n.y, l = n.radius + f / 2, u = n.radius + f / 2, t = t > a - l ? a - l : t, i = a + l > i ? a + l : i, r = r > h - u ? h - u : r, s = h + u > s ? h + u : s; else if (p === e.Graphics.ELIP)a = n.x, h = n.y, l = n.width + f / 2, u = n.height + f / 2, t = t > a - l ? a - l : t, i = a + l > i ? a + l : i, r = r > h - u ? h - u : r, s = h + u > s ? h + u : s; else {
                o = n.points;
                for (var g = 0; g < o.length; g += 2)a = o[g], h = o[g + 1], t = t > a - f ? a - f : t, i = a + f > i ? a + f : i, r = r > h - f ? h - f : r, s = h + f > s ? h + f : s
            }
        } else t = 0, i = 0, r = 0, s = 0;
        var m = this.boundsPadding;
        this._localBounds.x = t - m, this._localBounds.width = i - t + 2 * m, this._localBounds.y = r - m, this._localBounds.height = s - r + 2 * m
    },e.Graphics.prototype._generateCachedSprite = function () {
        var t = this.getLocalBounds();
        if (this._cachedSprite)this._cachedSprite.buffer.resize(t.width, t.height); else {
            var i = new e.CanvasBuffer(t.width, t.height), r = e.Texture.fromCanvas(i.canvas);
            this._cachedSprite = new e.Sprite(r), this._cachedSprite.buffer = i, this._cachedSprite.worldTransform = this.worldTransform
        }
        this._cachedSprite.anchor.x = -(t.x / t.width), this._cachedSprite.anchor.y = -(t.y / t.height), this._cachedSprite.buffer.context.translate(-t.x, -t.y), this.worldAlpha = 1, e.CanvasGraphics.renderGraphics(this, this._cachedSprite.buffer.context), this._cachedSprite.alpha = this.alpha
    },e.Graphics.prototype.updateCachedSpriteTexture = function () {
        var t = this._cachedSprite, e = t.texture, i = t.buffer.canvas;
        e.baseTexture.width = i.width, e.baseTexture.height = i.height, e.crop.width = e.frame.width = i.width, e.crop.height = e.frame.height = i.height, t._width = i.width, t._height = i.height, e.baseTexture.dirty()
    },e.Graphics.prototype.destroyCachedSprite = function () {
        this._cachedSprite.texture.destroy(!0), this._cachedSprite = null
    },e.Graphics.prototype.drawShape = function (t) {
        this.currentPath && this.currentPath.shape.points.length <= 2 && this.graphicsData.pop(), this.currentPath = null;
        var i = new e.GraphicsData(this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.filling, t);
        return this.graphicsData.push(i), i.type === e.Graphics.POLY && (i.shape.closed = this.filling, this.currentPath = i), this.dirty = !0, i
    },e.GraphicsData = function (t, e, i, r, s, n, o) {
        this.lineWidth = t, this.lineColor = e, this.lineAlpha = i, this._lineTint = e, this.fillColor = r, this.fillAlpha = s, this._fillTint = r, this.fill = n, this.shape = o, this.type = o.type
    },e.Graphics.POLY = 0,e.Graphics.RECT = 1,e.Graphics.CIRC = 2,e.Graphics.ELIP = 3,e.Graphics.RREC = 4,e.Polygon.prototype.type = e.Graphics.POLY,e.Rectangle.prototype.type = e.Graphics.RECT,e.Circle.prototype.type = e.Graphics.CIRC,e.Ellipse.prototype.type = e.Graphics.ELIP,e.RoundedRectangle.prototype.type = e.Graphics.RREC,e.Strip = function (t) {
        e.DisplayObjectContainer.call(this), this.texture = t, this.uvs = new e.Float32Array([0, 1, 1, 1, 1, 0, 0, 1]), this.vertices = new e.Float32Array([0, 0, 100, 0, 100, 100, 0, 100]), this.colors = new e.Float32Array([1, 1, 1, 1]), this.indices = new e.Uint16Array([0, 1, 2, 3]), this.dirty = !0, this.blendMode = e.blendModes.NORMAL, this.canvasPadding = 0, this.drawMode = e.Strip.DrawModes.TRIANGLE_STRIP
    },e.Strip.prototype = Object.create(e.DisplayObjectContainer.prototype),e.Strip.prototype.constructor = e.Strip,e.Strip.prototype._renderWebGL = function (t) {
        !this.visible || this.alpha <= 0 || (t.spriteBatch.stop(), this._vertexBuffer || this._initWebGL(t), t.shaderManager.setShader(t.shaderManager.stripShader), this._renderStrip(t), t.spriteBatch.start())
    },e.Strip.prototype._initWebGL = function (t) {
        var e = t.gl;
        this._vertexBuffer = e.createBuffer(), this._indexBuffer = e.createBuffer(), this._uvBuffer = e.createBuffer(), this._colorBuffer = e.createBuffer(), e.bindBuffer(e.ARRAY_BUFFER, this._vertexBuffer), e.bufferData(e.ARRAY_BUFFER, this.vertices, e.DYNAMIC_DRAW), e.bindBuffer(e.ARRAY_BUFFER, this._uvBuffer), e.bufferData(e.ARRAY_BUFFER, this.uvs, e.STATIC_DRAW), e.bindBuffer(e.ARRAY_BUFFER, this._colorBuffer), e.bufferData(e.ARRAY_BUFFER, this.colors, e.STATIC_DRAW), e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this._indexBuffer), e.bufferData(e.ELEMENT_ARRAY_BUFFER, this.indices, e.STATIC_DRAW)
    },e.Strip.prototype._renderStrip = function (t) {
        var i = t.gl, r = t.projection, s = t.offset, n = t.shaderManager.stripShader, o = this.drawMode === e.Strip.DrawModes.TRIANGLE_STRIP ? i.TRIANGLE_STRIP : i.TRIANGLES;
        t.blendModeManager.setBlendMode(this.blendMode), i.uniformMatrix3fv(n.translationMatrix, !1, this.worldTransform.toArray(!0)), i.uniform2f(n.projectionVector, r.x, -r.y), i.uniform2f(n.offsetVector, -s.x, -s.y), i.uniform1f(n.alpha, this.worldAlpha), this.dirty ? (this.dirty = !1, i.bindBuffer(i.ARRAY_BUFFER, this._vertexBuffer), i.bufferData(i.ARRAY_BUFFER, this.vertices, i.STATIC_DRAW), i.vertexAttribPointer(n.aVertexPosition, 2, i.FLOAT, !1, 0, 0), i.bindBuffer(i.ARRAY_BUFFER, this._uvBuffer), i.bufferData(i.ARRAY_BUFFER, this.uvs, i.STATIC_DRAW), i.vertexAttribPointer(n.aTextureCoord, 2, i.FLOAT, !1, 0, 0), i.activeTexture(i.TEXTURE0), this.texture.baseTexture._dirty[i.id] ? t.renderer.updateTexture(this.texture.baseTexture) : i.bindTexture(i.TEXTURE_2D, this.texture.baseTexture._glTextures[i.id]), i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, this._indexBuffer), i.bufferData(i.ELEMENT_ARRAY_BUFFER, this.indices, i.STATIC_DRAW)) : (i.bindBuffer(i.ARRAY_BUFFER, this._vertexBuffer), i.bufferSubData(i.ARRAY_BUFFER, 0, this.vertices), i.vertexAttribPointer(n.aVertexPosition, 2, i.FLOAT, !1, 0, 0), i.bindBuffer(i.ARRAY_BUFFER, this._uvBuffer), i.vertexAttribPointer(n.aTextureCoord, 2, i.FLOAT, !1, 0, 0), i.activeTexture(i.TEXTURE0), this.texture.baseTexture._dirty[i.id] ? t.renderer.updateTexture(this.texture.baseTexture) : i.bindTexture(i.TEXTURE_2D, this.texture.baseTexture._glTextures[i.id]), i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, this._indexBuffer)), i.drawElements(o, this.indices.length, i.UNSIGNED_SHORT, 0)
    },e.Strip.prototype._renderCanvas = function (t) {
        var i = t.context, r = this.worldTransform;
        t.roundPixels ? i.setTransform(r.a, r.b, r.c, r.d, 0 | r.tx, 0 | r.ty) : i.setTransform(r.a, r.b, r.c, r.d, r.tx, r.ty), this.drawMode === e.Strip.DrawModes.TRIANGLE_STRIP ? this._renderCanvasTriangleStrip(i) : this._renderCanvasTriangles(i)
    },e.Strip.prototype._renderCanvasTriangleStrip = function (t) {
        var e = this.vertices, i = this.uvs, r = e.length / 2;
        this.count++;
        for (var s = 0; r - 2 > s; s++) {
            var n = 2 * s;
            this._renderCanvasDrawTriangle(t, e, i, n, n + 2, n + 4)
        }
    },e.Strip.prototype._renderCanvasTriangles = function (t) {
        var e = this.vertices, i = this.uvs, r = this.indices, s = r.length;
        this.count++;
        for (var n = 0; s > n; n += 3) {
            var o = 2 * r[n], a = 2 * r[n + 1], h = 2 * r[n + 2];
            this._renderCanvasDrawTriangle(t, e, i, o, a, h)
        }
    },e.Strip.prototype._renderCanvasDrawTriangle = function (t, e, i, r, s, n) {
        var o = this.texture.baseTexture.source, a = this.texture.width, h = this.texture.height, l = e[r], u = e[s], c = e[n], d = e[r + 1], p = e[s + 1], f = e[n + 1], g = i[r] * a, m = i[s] * a, v = i[n] * a, x = i[r + 1] * h, y = i[s + 1] * h, b = i[n + 1] * h;
        if (this.canvasPadding > 0) {
            var T = this.canvasPadding / this.worldTransform.a, S = this.canvasPadding / this.worldTransform.d, w = (l + u + c) / 3, C = (d + p + f) / 3, A = l - w, _ = d - C, E = Math.sqrt(A * A + _ * _);
            l = w + A / E * (E + T), d = C + _ / E * (E + S), A = u - w, _ = p - C, E = Math.sqrt(A * A + _ * _), u = w + A / E * (E + T), p = C + _ / E * (E + S), A = c - w, _ = f - C, E = Math.sqrt(A * A + _ * _), c = w + A / E * (E + T), f = C + _ / E * (E + S)
        }
        t.save(), t.beginPath(), t.moveTo(l, d), t.lineTo(u, p), t.lineTo(c, f), t.closePath(), t.clip();
        var R = g * y + x * v + m * b - y * v - x * m - g * b, M = l * y + x * c + u * b - y * c - x * u - l * b, L = g * u + l * v + m * c - u * v - l * m - g * c, F = g * y * c + x * u * v + l * m * b - l * y * v - x * m * c - g * u * b, B = d * y + x * f + p * b - y * f - x * p - d * b, P = g * p + d * v + m * f - p * v - d * m - g * f, D = g * y * f + x * p * v + d * m * b - d * y * v - x * m * f - g * p * b;
        t.transform(M / R, B / R, L / R, P / R, F / R, D / R), t.drawImage(o, 0, 0), t.restore()
    },e.Strip.prototype.renderStripFlat = function (t) {
        var e = this.context, i = t.vertices, r = i.length / 2;
        this.count++, e.beginPath();
        for (var s = 1; r - 2 > s; s++) {
            var n = 2 * s, o = i[n], a = i[n + 2], h = i[n + 4], l = i[n + 1], u = i[n + 3], c = i[n + 5];
            e.moveTo(o, l), e.lineTo(a, u), e.lineTo(h, c)
        }
        e.fillStyle = "#FF0000", e.fill(), e.closePath()
    },e.Strip.prototype.onTextureUpdate = function () {
        this.updateFrame = !0
    },e.Strip.prototype.getBounds = function (t) {
        for (var i = t || this.worldTransform, r = i.a, s = i.b, n = i.c, o = i.d, a = i.tx, h = i.ty, l = -1 / 0, u = -1 / 0, c = 1 / 0, d = 1 / 0, p = this.vertices, f = 0, g = p.length; g > f; f += 2) {
            var m = p[f], v = p[f + 1], x = r * m + n * v + a, y = o * v + s * m + h;
            c = c > x ? x : c, d = d > y ? y : d, l = x > l ? x : l, u = y > u ? y : u
        }
        if (c === -1 / 0 || 1 / 0 === u)return e.EmptyRectangle;
        var b = this._bounds;
        return b.x = c, b.width = l - c, b.y = d, b.height = u - d, this._currentBounds = b, b
    },e.Strip.DrawModes = {TRIANGLE_STRIP: 0, TRIANGLES: 1},e.Rope = function (t, i) {
        e.Strip.call(this, t), this.points = i, this.vertices = new e.Float32Array(4 * i.length), this.uvs = new e.Float32Array(4 * i.length), this.colors = new e.Float32Array(2 * i.length), this.indices = new e.Uint16Array(2 * i.length), this.refresh()
    },e.Rope.prototype = Object.create(e.Strip.prototype),e.Rope.prototype.constructor = e.Rope,e.Rope.prototype.refresh = function () {
        var t = this.points;
        if (!(t.length < 1)) {
            var e = this.uvs, i = t[0], r = this.indices, s = this.colors;
            this.count -= .2, e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 1, s[0] = 1, s[1] = 1, r[0] = 0, r[1] = 1;
            for (var n, o, a, h = t.length, l = 1; h > l; l++)n = t[l], o = 4 * l, a = l / (h - 1), l % 2 ? (e[o] = a, e[o + 1] = 0, e[o + 2] = a, e[o + 3] = 1) : (e[o] = a, e[o + 1] = 0, e[o + 2] = a, e[o + 3] = 1), o = 2 * l, s[o] = 1, s[o + 1] = 1, o = 2 * l, r[o] = o, r[o + 1] = o + 1, i = n
        }
    },e.Rope.prototype.updateTransform = function () {
        var t = this.points;
        if (!(t.length < 1)) {
            var i, r = t[0], s = {x: 0, y: 0};
            this.count -= .2;
            for (var n, o, a, h, l, u = this.vertices, c = t.length, d = 0; c > d; d++)n = t[d], o = 4 * d, i = d < t.length - 1 ? t[d + 1] : n, s.y = -(i.x - r.x), s.x = i.y - r.y, a = 10 * (1 - d / (c - 1)), a > 1 && (a = 1), h = Math.sqrt(s.x * s.x + s.y * s.y), l = this.texture.height / 2, s.x /= h, s.y /= h, s.x *= l, s.y *= l, u[o] = n.x + s.x, u[o + 1] = n.y + s.y, u[o + 2] = n.x - s.x, u[o + 3] = n.y - s.y, r = n;
            e.DisplayObjectContainer.prototype.updateTransform.call(this)
        }
    },e.Rope.prototype.setTexture = function (t) {
        this.texture = t
    },e.TilingSprite = function (t, i, r) {
        e.Sprite.call(this, t), this._width = i || 100, this._height = r || 100, this.tileScale = new e.Point(1, 1), this.tileScaleOffset = new e.Point(1, 1), this.tilePosition = new e.Point(0, 0), this.renderable = !0, this.tint = 16777215, this.blendMode = e.blendModes.NORMAL
    },e.TilingSprite.prototype = Object.create(e.Sprite.prototype),e.TilingSprite.prototype.constructor = e.TilingSprite,Object.defineProperty(e.TilingSprite.prototype, "width", {
        get: function () {
            return this._width
        }, set: function (t) {
            this._width = t
        }
    }),Object.defineProperty(e.TilingSprite.prototype, "height", {
        get: function () {
            return this._height
        }, set: function (t) {
            this._height = t
        }
    }),e.TilingSprite.prototype.setTexture = function (t) {
        this.texture !== t && (this.texture = t, this.refreshTexture = !0, this.cachedTint = 16777215)
    },e.TilingSprite.prototype._renderWebGL = function (t) {
        if (this.visible !== !1 && 0 !== this.alpha) {
            var e, i;
            for (this._mask && (t.spriteBatch.stop(), t.maskManager.pushMask(this.mask, t), t.spriteBatch.start()), this._filters && (t.spriteBatch.flush(), t.filterManager.pushFilter(this._filterBlock)), !this.tilingTexture || this.refreshTexture ? (this.generateTilingTexture(!0), this.tilingTexture && this.tilingTexture.needsUpdate && (t.renderer.updateTexture(this.tilingTexture.baseTexture), this.tilingTexture.needsUpdate = !1)) : t.spriteBatch.renderTilingSprite(this), e = 0, i = this.children.length; i > e; e++)this.children[e]._renderWebGL(t);
            t.spriteBatch.stop(), this._filters && t.filterManager.popFilter(), this._mask && t.maskManager.popMask(this._mask, t), t.spriteBatch.start()
        }
    },e.TilingSprite.prototype._renderCanvas = function (t) {
        if (this.visible !== !1 && 0 !== this.alpha) {
            var i = t.context;
            this._mask && t.maskManager.pushMask(this._mask, i), i.globalAlpha = this.worldAlpha;
            var r, s, n = this.worldTransform, o = t.resolution;
            if (i.setTransform(n.a * o, n.b * o, n.c * o, n.d * o, n.tx * o, n.ty * o), !this.__tilePattern || this.refreshTexture) {
                if (this.generateTilingTexture(!1), !this.tilingTexture)return;
                this.__tilePattern = i.createPattern(this.tilingTexture.baseTexture.source, "repeat")
            }
            this.blendMode !== t.currentBlendMode && (t.currentBlendMode = this.blendMode, i.globalCompositeOperation = e.blendModesCanvas[t.currentBlendMode]);
            var a = this.tilePosition, h = this.tileScale;
            for (a.x %= this.tilingTexture.baseTexture.width, a.y %= this.tilingTexture.baseTexture.height, i.scale(h.x, h.y), i.translate(a.x + this.anchor.x * -this._width, a.y + this.anchor.y * -this._height), i.fillStyle = this.__tilePattern, i.fillRect(-a.x, -a.y, this._width / h.x, this._height / h.y), i.scale(1 / h.x, 1 / h.y), i.translate(-a.x + this.anchor.x * this._width, -a.y + this.anchor.y * this._height), this._mask && t.maskManager.popMask(t.context), r = 0, s = this.children.length; s > r; r++)this.children[r]._renderCanvas(t)
        }
    },e.TilingSprite.prototype.getBounds = function () {
        var t = this._width, e = this._height, i = t * (1 - this.anchor.x), r = t * -this.anchor.x, s = e * (1 - this.anchor.y), n = e * -this.anchor.y, o = this.worldTransform, a = o.a, h = o.b, l = o.c, u = o.d, c = o.tx, d = o.ty, p = a * r + l * n + c, f = u * n + h * r + d, g = a * i + l * n + c, m = u * n + h * i + d, v = a * i + l * s + c, x = u * s + h * i + d, y = a * r + l * s + c, b = u * s + h * r + d, T = -1 / 0, S = -1 / 0, w = 1 / 0, C = 1 / 0;
        w = w > p ? p : w, w = w > g ? g : w, w = w > v ? v : w, w = w > y ? y : w, C = C > f ? f : C, C = C > m ? m : C, C = C > x ? x : C, C = C > b ? b : C, T = p > T ? p : T, T = g > T ? g : T, T = v > T ? v : T, T = y > T ? y : T, S = f > S ? f : S, S = m > S ? m : S, S = x > S ? x : S, S = b > S ? b : S;
        var A = this._bounds;
        return A.x = w, A.width = T - w, A.y = C, A.height = S - C, this._currentBounds = A, A
    },e.TilingSprite.prototype.onTextureUpdate = function () {
    },e.TilingSprite.prototype.generateTilingTexture = function (t) {
        if (this.texture.baseTexture.hasLoaded) {
            var i, r, s = this.originalTexture || this.texture, n = s.frame, o = n.width !== s.baseTexture.width || n.height !== s.baseTexture.height, a = !1;
            if (t ? (i = e.getNextPowerOfTwo(n.width), r = e.getNextPowerOfTwo(n.height), (n.width !== i || n.height !== r || s.baseTexture.width !== i || s.baseTexture.height || r) && (a = !0)) : o && (i = n.width, r = n.height, a = !0), a) {
                var h;
                this.tilingTexture && this.tilingTexture.isTiling ? (h = this.tilingTexture.canvasBuffer, h.resize(i, r), this.tilingTexture.baseTexture.width = i, this.tilingTexture.baseTexture.height = r, this.tilingTexture.needsUpdate = !0) : (h = new e.CanvasBuffer(i, r), this.tilingTexture = e.Texture.fromCanvas(h.canvas), this.tilingTexture.canvasBuffer = h, this.tilingTexture.isTiling = !0), h.context.drawImage(s.baseTexture.source, s.crop.x, s.crop.y, s.crop.width, s.crop.height, 0, 0, i, r), this.tileScaleOffset.x = n.width / i, this.tileScaleOffset.y = n.height / r
            } else this.tilingTexture && this.tilingTexture.isTiling && this.tilingTexture.destroy(!0), this.tileScaleOffset.x = 1, this.tileScaleOffset.y = 1, this.tilingTexture = s;
            this.refreshTexture = !1, this.originalTexture = this.texture, this.texture = this.tilingTexture, this.tilingTexture.baseTexture._powerOf2 = !0
        }
    },e.TilingSprite.prototype.destroy = function () {
        e.Sprite.prototype.destroy.call(this), this.tileScale = null, this.tileScaleOffset = null, this.tilePosition = null, this.tilingTexture.destroy(!0), this.tilingTexture = null
    };
    var i = {
        radDeg: 180 / Math.PI,
        degRad: Math.PI / 180,
        temp: [],
        Float32Array: "undefined" == typeof Float32Array ? Array : Float32Array,
        Uint16Array: "undefined" == typeof Uint16Array ? Array : Uint16Array
    };
    i.BoneData = function (t, e) {
        this.name = t, this.parent = e
    }, i.BoneData.prototype = {
        length: 0,
        x: 0,
        y: 0,
        rotation: 0,
        scaleX: 1,
        scaleY: 1,
        inheritScale: !0,
        inheritRotation: !0,
        flipX: !1,
        flipY: !1
    }, i.SlotData = function (t, e) {
        this.name = t, this.boneData = e
    }, i.SlotData.prototype = {
        r: 1,
        g: 1,
        b: 1,
        a: 1,
        attachmentName: null,
        additiveBlending: !1
    }, i.IkConstraintData = function (t) {
        this.name = t, this.bones = []
    }, i.IkConstraintData.prototype = {target: null, bendDirection: 1, mix: 1}, i.Bone = function (t, e, i) {
        this.data = t, this.skeleton = e, this.parent = i, this.setToSetupPose()
    }, i.Bone.yDown = !1, i.Bone.prototype = {
        x: 0,
        y: 0,
        rotation: 0,
        rotationIK: 0,
        scaleX: 1,
        scaleY: 1,
        flipX: !1,
        flipY: !1,
        m00: 0,
        m01: 0,
        worldX: 0,
        m10: 0,
        m11: 0,
        worldY: 0,
        worldRotation: 0,
        worldScaleX: 1,
        worldScaleY: 1,
        worldFlipX: !1,
        worldFlipY: !1,
        updateWorldTransform: function () {
            var t = this.parent;
            if (t)this.worldX = this.x * t.m00 + this.y * t.m01 + t.worldX, this.worldY = this.x * t.m10 + this.y * t.m11 + t.worldY, this.data.inheritScale ? (this.worldScaleX = t.worldScaleX * this.scaleX, this.worldScaleY = t.worldScaleY * this.scaleY) : (this.worldScaleX = this.scaleX, this.worldScaleY = this.scaleY), this.worldRotation = this.data.inheritRotation ? t.worldRotation + this.rotationIK : this.rotationIK, this.worldFlipX = t.worldFlipX != this.flipX, this.worldFlipY = t.worldFlipY != this.flipY; else {
                var e = this.skeleton.flipX, r = this.skeleton.flipY;
                this.worldX = e ? -this.x : this.x, this.worldY = r != i.Bone.yDown ? -this.y : this.y, this.worldScaleX = this.scaleX, this.worldScaleY = this.scaleY, this.worldRotation = this.rotationIK, this.worldFlipX = e != this.flipX, this.worldFlipY = r != this.flipY
            }
            var s = this.worldRotation * i.degRad, n = Math.cos(s), o = Math.sin(s);
            this.worldFlipX ? (this.m00 = -n * this.worldScaleX, this.m01 = o * this.worldScaleY) : (this.m00 = n * this.worldScaleX, this.m01 = -o * this.worldScaleY), this.worldFlipY != i.Bone.yDown ? (this.m10 = -o * this.worldScaleX, this.m11 = -n * this.worldScaleY) : (this.m10 = o * this.worldScaleX, this.m11 = n * this.worldScaleY)
        },
        setToSetupPose: function () {
            var t = this.data;
            this.x = t.x, this.y = t.y, this.rotation = t.rotation, this.rotationIK = this.rotation, this.scaleX = t.scaleX, this.scaleY = t.scaleY, this.flipX = t.flipX, this.flipY = t.flipY
        },
        worldToLocal: function (t) {
            var e = t[0] - this.worldX, r = t[1] - this.worldY, s = this.m00, n = this.m10, o = this.m01, a = this.m11;
            this.worldFlipX != (this.worldFlipY != i.Bone.yDown) && (s = -s, a = -a);
            var h = 1 / (s * a - o * n);
            t[0] = e * s * h - r * o * h, t[1] = r * a * h - e * n * h
        },
        localToWorld: function (t) {
            var e = t[0], i = t[1];
            t[0] = e * this.m00 + i * this.m01 + this.worldX, t[1] = e * this.m10 + i * this.m11 + this.worldY
        }
    }, i.Slot = function (t, e) {
        this.data = t, this.bone = e, this.setToSetupPose()
    }, i.Slot.prototype = {
        r: 1,
        g: 1,
        b: 1,
        a: 1,
        _attachmentTime: 0,
        attachment: null,
        attachmentVertices: [],
        setAttachment: function (t) {
            this.attachment = t, this._attachmentTime = this.bone.skeleton.time, this.attachmentVertices.length = 0
        },
        setAttachmentTime: function (t) {
            this._attachmentTime = this.bone.skeleton.time - t
        },
        getAttachmentTime: function () {
            return this.bone.skeleton.time - this._attachmentTime
        },
        setToSetupPose: function () {
            var t = this.data;
            this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a;
            for (var e = this.bone.skeleton.data.slots, i = 0, r = e.length; r > i; i++)if (e[i] == t) {
                this.setAttachment(t.attachmentName ? this.bone.skeleton.getAttachmentBySlotIndex(i, t.attachmentName) : null);
                break
            }
        }
    }, i.IkConstraint = function (t, e) {
        this.data = t, this.mix = t.mix, this.bendDirection = t.bendDirection, this.bones = [];
        for (var i = 0, r = t.bones.length; r > i; i++)this.bones.push(e.findBone(t.bones[i].name));
        this.target = e.findBone(t.target.name)
    }, i.IkConstraint.prototype = {
        apply: function () {
            var t = this.target, e = this.bones;
            switch (e.length) {
                case 1:
                    i.IkConstraint.apply1(e[0], t.worldX, t.worldY, this.mix);
                    break;
                case 2:
                    i.IkConstraint.apply2(e[0], e[1], t.worldX, t.worldY, this.bendDirection, this.mix)
            }
        }
    }, i.IkConstraint.apply1 = function (t, e, r, s) {
        var n = t.data.inheritRotation && t.parent ? t.parent.worldRotation : 0, o = t.rotation, a = Math.atan2(r - t.worldY, e - t.worldX) * i.radDeg - n;
        t.rotationIK = o + (a - o) * s
    }, i.IkConstraint.apply2 = function (t, e, r, s, n, o) {
        var a = e.rotation, h = t.rotation;
        if (!o)return e.rotationIK = a, void(t.rotationIK = h);
        var l, u, c = i.temp, d = t.parent;
        d ? (c[0] = r, c[1] = s, d.worldToLocal(c), r = (c[0] - t.x) * d.worldScaleX, s = (c[1] - t.y) * d.worldScaleY) : (r -= t.x, s -= t.y), e.parent == t ? (l = e.x, u = e.y) : (c[0] = e.x, c[1] = e.y, e.parent.localToWorld(c), t.worldToLocal(c), l = c[0], u = c[1]);
        var p = l * t.worldScaleX, f = u * t.worldScaleY, g = Math.atan2(f, p), m = Math.sqrt(p * p + f * f), v = e.data.length * e.worldScaleX, x = 2 * m * v;
        if (1e-4 > x)return void(e.rotationIK = a + (Math.atan2(s, r) * i.radDeg - h - a) * o);
        var y = (r * r + s * s - m * m - v * v) / x;
        -1 > y ? y = -1 : y > 1 && (y = 1);
        var b = Math.acos(y) * n, T = m + v * y, S = v * Math.sin(b), w = Math.atan2(s * T - r * S, r * T + s * S), C = (w - g) * i.radDeg - h;
        C > 180 ? C -= 360 : -180 > C && (C += 360), t.rotationIK = h + C * o, C = (b + g) * i.radDeg - a, C > 180 ? C -= 360 : -180 > C && (C += 360), e.rotationIK = a + (C + t.worldRotation - e.parent.worldRotation) * o
    }, i.Skin = function (t) {
        this.name = t, this.attachments = {}
    }, i.Skin.prototype = {
        addAttachment: function (t, e, i) {
            this.attachments[t + ":" + e] = i
        }, getAttachment: function (t, e) {
            return this.attachments[t + ":" + e]
        }, _attachAll: function (t, e) {
            for (var i in e.attachments) {
                var r = i.indexOf(":"), s = parseInt(i.substring(0, r)), n = i.substring(r + 1), o = t.slots[s];
                if (o.attachment && o.attachment.name == n) {
                    var a = this.getAttachment(s, n);
                    a && o.setAttachment(a)
                }
            }
        }
    }, i.Animation = function (t, e, i) {
        this.name = t, this.timelines = e, this.duration = i
    }, i.Animation.prototype = {
        apply: function (t, e, i, r, s) {
            r && 0 != this.duration && (i %= this.duration, e %= this.duration);
            for (var n = this.timelines, o = 0, a = n.length; a > o; o++)n[o].apply(t, e, i, s, 1)
        }, mix: function (t, e, i, r, s, n) {
            r && 0 != this.duration && (i %= this.duration, e %= this.duration);
            for (var o = this.timelines, a = 0, h = o.length; h > a; a++)o[a].apply(t, e, i, s, n)
        }
    }, i.Animation.binarySearch = function (t, e, i) {
        var r = 0, s = Math.floor(t.length / i) - 2;
        if (!s)return i;
        for (var n = s >>> 1; ;) {
            if (t[(n + 1) * i] <= e ? r = n + 1 : s = n, r == s)return (r + 1) * i;
            n = r + s >>> 1
        }
    }, i.Animation.binarySearch1 = function (t, e) {
        var i = 0, r = t.length - 2;
        if (!r)return 1;
        for (var s = r >>> 1; ;) {
            if (t[s + 1] <= e ? i = s + 1 : r = s, i == r)return i + 1;
            s = i + r >>> 1
        }
    }, i.Animation.linearSearch = function (t, e, i) {
        for (var r = 0, s = t.length - i; s >= r; r += i)if (t[r] > e)return r;
        return -1
    }, i.Curves = function () {
        this.curves = []
    }, i.Curves.prototype = {
        setLinear: function (t) {
            this.curves[19 * t] = 0
        }, setStepped: function (t) {
            this.curves[19 * t] = 1
        }, setCurve: function (t, e, i, r, s) {
            var n = .1, o = n * n, a = o * n, h = 3 * n, l = 3 * o, u = 6 * o, c = 6 * a, d = 2 * -e + r, p = 2 * -i + s, f = 3 * (e - r) + 1, g = 3 * (i - s) + 1, m = e * h + d * l + f * a, v = i * h + p * l + g * a, x = d * u + f * c, y = p * u + g * c, b = f * c, T = g * c, S = 19 * t, w = this.curves;
            w[S++] = 2;
            for (var C = m, A = v, _ = S + 19 - 1; _ > S; S += 2)w[S] = C, w[S + 1] = A, m += x, v += y, x += b, y += T, C += m, A += v
        }, getCurvePercent: function (t, e) {
            e = 0 > e ? 0 : e > 1 ? 1 : e;
            var i = this.curves, r = 19 * t, s = i[r];
            if (0 === s)return e;
            if (1 == s)return 0;
            r++;
            for (var n = 0, o = r, a = r + 19 - 1; a > r; r += 2)if (n = i[r], n >= e) {
                var h, l;
                return r == o ? (h = 0, l = 0) : (h = i[r - 2], l = i[r - 1]), l + (i[r + 1] - l) * (e - h) / (n - h)
            }
            var u = i[r - 1];
            return u + (1 - u) * (e - n) / (1 - n)
        }
    }, i.RotateTimeline = function (t) {
        this.curves = new i.Curves(t), this.frames = [], this.frames.length = 2 * t
    }, i.RotateTimeline.prototype = {
        boneIndex: 0, getFrameCount: function () {
            return this.frames.length / 2
        }, setFrame: function (t, e, i) {
            t *= 2, this.frames[t] = e, this.frames[t + 1] = i
        }, apply: function (t, e, r, s, n) {
            var o = this.frames;
            if (!(r < o[0])) {
                var a = t.bones[this.boneIndex];
                if (r >= o[o.length - 2]) {
                    for (var h = a.data.rotation + o[o.length - 1] - a.rotation; h > 180;)h -= 360;
                    for (; -180 > h;)h += 360;
                    return void(a.rotation += h * n)
                }
                var l = i.Animation.binarySearch(o, r, 2), u = o[l - 1], c = o[l], d = 1 - (r - c) / (o[l - 2] - c);
                d = this.curves.getCurvePercent(l / 2 - 1, d);
                for (var h = o[l + 1] - u; h > 180;)h -= 360;
                for (; -180 > h;)h += 360;
                for (h = a.data.rotation + (u + h * d) - a.rotation; h > 180;)h -= 360;
                for (; -180 > h;)h += 360;
                a.rotation += h * n
            }
        }
    }, i.TranslateTimeline = function (t) {
        this.curves = new i.Curves(t), this.frames = [], this.frames.length = 3 * t
    }, i.TranslateTimeline.prototype = {
        boneIndex: 0, getFrameCount: function () {
            return this.frames.length / 3
        }, setFrame: function (t, e, i, r) {
            t *= 3, this.frames[t] = e, this.frames[t + 1] = i, this.frames[t + 2] = r
        }, apply: function (t, e, r, s, n) {
            var o = this.frames;
            if (!(r < o[0])) {
                var a = t.bones[this.boneIndex];
                if (r >= o[o.length - 3])return a.x += (a.data.x + o[o.length - 2] - a.x) * n, void(a.y += (a.data.y + o[o.length - 1] - a.y) * n);
                var h = i.Animation.binarySearch(o, r, 3), l = o[h - 2], u = o[h - 1], c = o[h], d = 1 - (r - c) / (o[h + -3] - c);
                d = this.curves.getCurvePercent(h / 3 - 1, d), a.x += (a.data.x + l + (o[h + 1] - l) * d - a.x) * n, a.y += (a.data.y + u + (o[h + 2] - u) * d - a.y) * n
            }
        }
    }, i.ScaleTimeline = function (t) {
        this.curves = new i.Curves(t), this.frames = [], this.frames.length = 3 * t
    }, i.ScaleTimeline.prototype = {
        boneIndex: 0, getFrameCount: function () {
            return this.frames.length / 3
        }, setFrame: function (t, e, i, r) {
            t *= 3, this.frames[t] = e, this.frames[t + 1] = i, this.frames[t + 2] = r
        }, apply: function (t, e, r, s, n) {
            var o = this.frames;
            if (!(r < o[0])) {
                var a = t.bones[this.boneIndex];
                if (r >= o[o.length - 3])return a.scaleX += (a.data.scaleX * o[o.length - 2] - a.scaleX) * n, void(a.scaleY += (a.data.scaleY * o[o.length - 1] - a.scaleY) * n);
                var h = i.Animation.binarySearch(o, r, 3), l = o[h - 2], u = o[h - 1], c = o[h], d = 1 - (r - c) / (o[h + -3] - c);
                d = this.curves.getCurvePercent(h / 3 - 1, d), a.scaleX += (a.data.scaleX * (l + (o[h + 1] - l) * d) - a.scaleX) * n, a.scaleY += (a.data.scaleY * (u + (o[h + 2] - u) * d) - a.scaleY) * n
            }
        }
    }, i.ColorTimeline = function (t) {
        this.curves = new i.Curves(t), this.frames = [], this.frames.length = 5 * t
    }, i.ColorTimeline.prototype = {
        slotIndex: 0, getFrameCount: function () {
            return this.frames.length / 5
        }, setFrame: function (t, e, i, r, s, n) {
            t *= 5, this.frames[t] = e, this.frames[t + 1] = i, this.frames[t + 2] = r, this.frames[t + 3] = s, this.frames[t + 4] = n
        }, apply: function (t, e, r, s, n) {
            var o = this.frames;
            if (!(r < o[0])) {
                var a, h, l, u;
                if (r >= o[o.length - 5]) {
                    var c = o.length - 1;
                    a = o[c - 3], h = o[c - 2], l = o[c - 1], u = o[c]
                } else {
                    var d = i.Animation.binarySearch(o, r, 5), p = o[d - 4], f = o[d - 3], g = o[d - 2], m = o[d - 1], v = o[d], x = 1 - (r - v) / (o[d - 5] - v);
                    x = this.curves.getCurvePercent(d / 5 - 1, x), a = p + (o[d + 1] - p) * x, h = f + (o[d + 2] - f) * x, l = g + (o[d + 3] - g) * x, u = m + (o[d + 4] - m) * x
                }
                var y = t.slots[this.slotIndex];
                1 > n ? (y.r += (a - y.r) * n, y.g += (h - y.g) * n, y.b += (l - y.b) * n, y.a += (u - y.a) * n) : (y.r = a, y.g = h, y.b = l, y.a = u)
            }
        }
    }, i.AttachmentTimeline = function (t) {
        this.curves = new i.Curves(t), this.frames = [], this.frames.length = t, this.attachmentNames = [], this.attachmentNames.length = t
    }, i.AttachmentTimeline.prototype = {
        slotIndex: 0, getFrameCount: function () {
            return this.frames.length
        }, setFrame: function (t, e, i) {
            this.frames[t] = e, this.attachmentNames[t] = i
        }, apply: function (t, e, r) {
            var s = this.frames;
            if (r < s[0])return void(e > r && this.apply(t, e, Number.MAX_VALUE, null, 0));
            e > r && (e = -1);
            var n = r >= s[s.length - 1] ? s.length - 1 : i.Animation.binarySearch1(s, r) - 1;
            if (!(s[n] < e)) {
                var o = this.attachmentNames[n];
                t.slots[this.slotIndex].setAttachment(o ? t.getAttachmentBySlotIndex(this.slotIndex, o) : null)
            }
        }
    }, i.EventTimeline = function (t) {
        this.frames = [], this.frames.length = t, this.events = [], this.events.length = t
    }, i.EventTimeline.prototype = {
        getFrameCount: function () {
            return this.frames.length
        }, setFrame: function (t, e, i) {
            this.frames[t] = e, this.events[t] = i
        }, apply: function (t, e, r, s, n) {
            if (s) {
                var o = this.frames, a = o.length;
                if (e > r)this.apply(t, e, Number.MAX_VALUE, s, n), e = -1; else if (e >= o[a - 1])return;
                if (!(r < o[0])) {
                    var h;
                    if (e < o[0])h = 0; else {
                        h = i.Animation.binarySearch1(o, e);
                        for (var l = o[h]; h > 0 && o[h - 1] == l;)h--
                    }
                    for (var u = this.events; a > h && r >= o[h]; h++)s.push(u[h])
                }
            }
        }
    }, i.DrawOrderTimeline = function (t) {
        this.frames = [], this.frames.length = t, this.drawOrders = [], this.drawOrders.length = t
    }, i.DrawOrderTimeline.prototype = {
        getFrameCount: function () {
            return this.frames.length
        }, setFrame: function (t, e, i) {
            this.frames[t] = e, this.drawOrders[t] = i
        }, apply: function (t, e, r) {
            var s = this.frames;
            if (!(r < s[0])) {
                var n;
                n = r >= s[s.length - 1] ? s.length - 1 : i.Animation.binarySearch1(s, r) - 1;
                var o = t.drawOrder, a = t.slots, h = this.drawOrders[n];
                if (h)for (var l = 0, u = h.length; u > l; l++)o[l] = t.slots[h[l]]; else for (var l = 0, u = a.length; u > l; l++)o[l] = a[l]
            }
        }
    }, i.FfdTimeline = function (t) {
        this.curves = new i.Curves(t), this.frames = [], this.frames.length = t, this.frameVertices = [], this.frameVertices.length = t
    }, i.FfdTimeline.prototype = {
        slotIndex: 0, attachment: 0, getFrameCount: function () {
            return this.frames.length
        }, setFrame: function (t, e, i) {
            this.frames[t] = e, this.frameVertices[t] = i
        }, apply: function (t, e, r, s, n) {
            var o = t.slots[this.slotIndex];
            if (o.attachment == this.attachment) {
                var a = this.frames;
                if (!(r < a[0])) {
                    var h = this.frameVertices, l = h[0].length, u = o.attachmentVertices;
                    if (u.length != l && (n = 1), u.length = l, r >= a[a.length - 1]) {
                        var c = h[a.length - 1];
                        if (1 > n)for (var d = 0; l > d; d++)u[d] += (c[d] - u[d]) * n; else for (var d = 0; l > d; d++)u[d] = c[d]
                    } else {
                        var p = i.Animation.binarySearch1(a, r), f = a[p], g = 1 - (r - f) / (a[p - 1] - f);
                        g = this.curves.getCurvePercent(p - 1, 0 > g ? 0 : g > 1 ? 1 : g);
                        var m = h[p - 1], v = h[p];
                        if (1 > n)for (var d = 0; l > d; d++) {
                            var x = m[d];
                            u[d] += (x + (v[d] - x) * g - u[d]) * n
                        } else for (var d = 0; l > d; d++) {
                            var x = m[d];
                            u[d] = x + (v[d] - x) * g
                        }
                    }
                }
            }
        }
    }, i.IkConstraintTimeline = function (t) {
        this.curves = new i.Curves(t), this.frames = [], this.frames.length = 3 * t
    }, i.IkConstraintTimeline.prototype = {
        ikConstraintIndex: 0, getFrameCount: function () {
            return this.frames.length / 3
        }, setFrame: function (t, e, i, r) {
            t *= 3, this.frames[t] = e, this.frames[t + 1] = i, this.frames[t + 2] = r
        }, apply: function (t, e, r, s, n) {
            var o = this.frames;
            if (!(r < o[0])) {
                var a = t.ikConstraints[this.ikConstraintIndex];
                if (r >= o[o.length - 3])return a.mix += (o[o.length - 2] - a.mix) * n, void(a.bendDirection = o[o.length - 1]);
                var h = i.Animation.binarySearch(o, r, 3), l = o[h + -2], u = o[h], c = 1 - (r - u) / (o[h + -3] - u);
                c = this.curves.getCurvePercent(h / 3 - 1, c);
                var d = l + (o[h + 1] - l) * c;
                a.mix += (d - a.mix) * n, a.bendDirection = o[h + -1]
            }
        }
    }, i.FlipXTimeline = function (t) {
        this.curves = new i.Curves(t), this.frames = [], this.frames.length = 2 * t
    }, i.FlipXTimeline.prototype = {
        boneIndex: 0, getFrameCount: function () {
            return this.frames.length / 2
        }, setFrame: function (t, e, i) {
            t *= 2, this.frames[t] = e, this.frames[t + 1] = i ? 1 : 0
        }, apply: function (t, e, r) {
            var s = this.frames;
            if (r < s[0])return void(e > r && this.apply(t, e, Number.MAX_VALUE, null, 0));
            e > r && (e = -1);
            var n = (r >= s[s.length - 2] ? s.length : i.Animation.binarySearch(s, r, 2)) - 2;
            s[n] < e || (t.bones[boneIndex].flipX = 0 != s[n + 1])
        }
    }, i.FlipYTimeline = function (t) {
        this.curves = new i.Curves(t), this.frames = [], this.frames.length = 2 * t
    }, i.FlipYTimeline.prototype = {
        boneIndex: 0, getFrameCount: function () {
            return this.frames.length / 2
        }, setFrame: function (t, e, i) {
            t *= 2, this.frames[t] = e, this.frames[t + 1] = i ? 1 : 0
        }, apply: function (t, e, r) {
            var s = this.frames;
            if (r < s[0])return void(e > r && this.apply(t, e, Number.MAX_VALUE, null, 0));
            e > r && (e = -1);
            var n = (r >= s[s.length - 2] ? s.length : i.Animation.binarySearch(s, r, 2)) - 2;
            s[n] < e || (t.bones[boneIndex].flipY = 0 != s[n + 1])
        }
    }, i.SkeletonData = function () {
        this.bones = [], this.slots = [], this.skins = [], this.events = [], this.animations = [], this.ikConstraints = []
    }, i.SkeletonData.prototype = {
        name: null,
        defaultSkin: null,
        width: 0,
        height: 0,
        version: null,
        hash: null,
        findBone: function (t) {
            for (var e = this.bones, i = 0, r = e.length; r > i; i++)if (e[i].name == t)return e[i];
            return null
        },
        findBoneIndex: function (t) {
            for (var e = this.bones, i = 0, r = e.length; r > i; i++)if (e[i].name == t)return i;
            return -1
        },
        findSlot: function (t) {
            for (var e = this.slots, i = 0, r = e.length; r > i; i++)if (e[i].name == t)return slot[i];
            return null
        },
        findSlotIndex: function (t) {
            for (var e = this.slots, i = 0, r = e.length; r > i; i++)if (e[i].name == t)return i;
            return -1
        },
        findSkin: function (t) {
            for (var e = this.skins, i = 0, r = e.length; r > i; i++)if (e[i].name == t)return e[i];
            return null
        },
        findEvent: function (t) {
            for (var e = this.events, i = 0, r = e.length; r > i; i++)if (e[i].name == t)return e[i];
            return null
        },
        findAnimation: function (t) {
            for (var e = this.animations, i = 0, r = e.length; r > i; i++)if (e[i].name == t)return e[i];
            return null
        },
        findIkConstraint: function (t) {
            for (var e = this.ikConstraints, i = 0, r = e.length; r > i; i++)if (e[i].name == t)return e[i];
            return null
        }
    }, i.Skeleton = function (t) {
        this.data = t, this.bones = [];
        for (var e = 0, r = t.bones.length; r > e; e++) {
            var s = t.bones[e], n = s.parent ? this.bones[t.bones.indexOf(s.parent)] : null;
            this.bones.push(new i.Bone(s, this, n))
        }
        this.slots = [], this.drawOrder = [];
        for (var e = 0, r = t.slots.length; r > e; e++) {
            var o = t.slots[e], a = this.bones[t.bones.indexOf(o.boneData)], h = new i.Slot(o, a);
            this.slots.push(h), this.drawOrder.push(h)
        }
        this.ikConstraints = [];
        for (var e = 0, r = t.ikConstraints.length; r > e; e++)this.ikConstraints.push(new i.IkConstraint(t.ikConstraints[e], this));
        this.boneCache = [], this.updateCache()
    }, i.Skeleton.prototype = {
        x: 0,
        y: 0,
        skin: null,
        r: 1,
        g: 1,
        b: 1,
        a: 1,
        time: 0,
        flipX: !1,
        flipY: !1,
        updateCache: function () {
            var t = this.ikConstraints, e = t.length, i = e + 1, r = this.boneCache;
            r.length > i && (r.length = i);
            for (var s = 0, n = r.length; n > s; s++)r[s].length = 0;
            for (; r.length < i;)r[r.length] = [];
            var o = r[0], a = this.bones;
            t:for (var s = 0, n = a.length; n > s; s++) {
                var h = a[s], l = h;
                do {
                    for (var u = 0; e > u; u++)for (var c = t[u], d = c.bones[0], p = c.bones[c.bones.length - 1]; ;) {
                        if (l == p) {
                            r[u].push(h), r[u + 1].push(h);
                            continue t
                        }
                        if (p == d)break;
                        p = p.parent
                    }
                    l = l.parent
                } while (l);
                o[o.length] = h
            }
        },
        updateWorldTransform: function () {
            for (var t = this.bones, e = 0, i = t.length; i > e; e++) {
                var r = t[e];
                r.rotationIK = r.rotation
            }
            for (var e = 0, s = this.boneCache.length - 1; ;) {
                for (var n = this.boneCache[e], o = 0, a = n.length; a > o; o++)n[o].updateWorldTransform();
                if (e == s)break;
                this.ikConstraints[e].apply(), e++
            }
        },
        setToSetupPose: function () {
            this.setBonesToSetupPose(), this.setSlotsToSetupPose()
        },
        setBonesToSetupPose: function () {
            for (var t = this.bones, e = 0, i = t.length; i > e; e++)t[e].setToSetupPose();
            for (var r = this.ikConstraints, e = 0, i = r.length; i > e; e++) {
                var s = r[e];
                s.bendDirection = s.data.bendDirection, s.mix = s.data.mix
            }
        },
        setSlotsToSetupPose: function () {
            for (var t = this.slots, e = this.drawOrder, i = 0, r = t.length; r > i; i++)e[i] = t[i], t[i].setToSetupPose(i)
        },
        getRootBone: function () {
            return this.bones.length ? this.bones[0] : null
        },
        findBone: function (t) {
            for (var e = this.bones, i = 0, r = e.length; r > i; i++)if (e[i].data.name == t)return e[i];
            return null
        },
        findBoneIndex: function (t) {
            for (var e = this.bones, i = 0, r = e.length; r > i; i++)if (e[i].data.name == t)return i;
            return -1
        },
        findSlot: function (t) {
            for (var e = this.slots, i = 0, r = e.length; r > i; i++)if (e[i].data.name == t)return e[i];
            return null
        },
        findSlotIndex: function (t) {
            for (var e = this.slots, i = 0, r = e.length; r > i; i++)if (e[i].data.name == t)return i;
            return -1
        },
        setSkinByName: function (t) {
            var e = this.data.findSkin(t);
            if (!e)throw"Skin not found: " + t;
            this.setSkin(e)
        },
        setSkin: function (t) {
            if (t)if (this.skin)t._attachAll(this, this.skin); else for (var e = this.slots, i = 0, r = e.length; r > i; i++) {
                var s = e[i], n = s.data.attachmentName;
                if (n) {
                    var o = t.getAttachment(i, n);
                    o && s.setAttachment(o)
                }
            }
            this.skin = t
        },
        getAttachmentBySlotName: function (t, e) {
            return this.getAttachmentBySlotIndex(this.data.findSlotIndex(t), e)
        },
        getAttachmentBySlotIndex: function (t, e) {
            if (this.skin) {
                var i = this.skin.getAttachment(t, e);
                if (i)return i
            }
            return this.data.defaultSkin ? this.data.defaultSkin.getAttachment(t, e) : null
        },
        setAttachment: function (t, e) {
            for (var i = this.slots, r = 0, s = i.length; s > r; r++) {
                var n = i[r];
                if (n.data.name == t) {
                    var o = null;
                    if (e && (o = this.getAttachmentBySlotIndex(r, e), !o))throw"Attachment not found: " + e + ", for slot: " + t;
                    return void n.setAttachment(o)
                }
            }
            throw"Slot not found: " + t
        },
        findIkConstraint: function (t) {
            for (var e = this.ikConstraints, i = 0, r = e.length; r > i; i++)if (e[i].data.name == t)return e[i];
            return null
        },
        update: function (t) {
            this.time += t
        }
    }, i.EventData = function (t) {
        this.name = t
    }, i.EventData.prototype = {intValue: 0, floatValue: 0, stringValue: null}, i.Event = function (t) {
        this.data = t
    }, i.Event.prototype = {intValue: 0, floatValue: 0, stringValue: null}, i.AttachmentType = {
        region: 0,
        boundingbox: 1,
        mesh: 2,
        skinnedmesh: 3
    }, i.RegionAttachment = function (t) {
        this.name = t, this.offset = [], this.offset.length = 8, this.uvs = [], this.uvs.length = 8
    }, i.RegionAttachment.prototype = {
        type: i.AttachmentType.region,
        x: 0,
        y: 0,
        rotation: 0,
        scaleX: 1,
        scaleY: 1,
        width: 0,
        height: 0,
        r: 1,
        g: 1,
        b: 1,
        a: 1,
        path: null,
        rendererObject: null,
        regionOffsetX: 0,
        regionOffsetY: 0,
        regionWidth: 0,
        regionHeight: 0,
        regionOriginalWidth: 0,
        regionOriginalHeight: 0,
        setUVs: function (t, e, i, r, s) {
            var n = this.uvs;
            s ? (n[2] = t, n[3] = r, n[4] = t, n[5] = e, n[6] = i, n[7] = e, n[0] = i, n[1] = r) : (n[0] = t, n[1] = r, n[2] = t, n[3] = e, n[4] = i, n[5] = e, n[6] = i, n[7] = r)
        },
        updateOffset: function () {
            var t = this.width / this.regionOriginalWidth * this.scaleX, e = this.height / this.regionOriginalHeight * this.scaleY, r = -this.width / 2 * this.scaleX + this.regionOffsetX * t, s = -this.height / 2 * this.scaleY + this.regionOffsetY * e, n = r + this.regionWidth * t, o = s + this.regionHeight * e, a = this.rotation * i.degRad, h = Math.cos(a), l = Math.sin(a), u = r * h + this.x, c = r * l, d = s * h + this.y, p = s * l, f = n * h + this.x, g = n * l, m = o * h + this.y, v = o * l, x = this.offset;
            x[0] = u - p, x[1] = d + c, x[2] = u - v, x[3] = m + c, x[4] = f - v, x[5] = m + g, x[6] = f - p, x[7] = d + g
        },
        computeVertices: function (t, e, i, r) {
            t += i.worldX, e += i.worldY;
            var s = i.m00, n = i.m01, o = i.m10, a = i.m11, h = this.offset;
            r[0] = h[0] * s + h[1] * n + t, r[1] = h[0] * o + h[1] * a + e, r[2] = h[2] * s + h[3] * n + t, r[3] = h[2] * o + h[3] * a + e, r[4] = h[4] * s + h[5] * n + t, r[5] = h[4] * o + h[5] * a + e, r[6] = h[6] * s + h[7] * n + t, r[7] = h[6] * o + h[7] * a + e
        }
    }, i.MeshAttachment = function (t) {
        this.name = t
    }, i.MeshAttachment.prototype = {
        type: i.AttachmentType.mesh,
        vertices: null,
        uvs: null,
        regionUVs: null,
        triangles: null,
        hullLength: 0,
        r: 1,
        g: 1,
        b: 1,
        a: 1,
        path: null,
        rendererObject: null,
        regionU: 0,
        regionV: 0,
        regionU2: 0,
        regionV2: 0,
        regionRotate: !1,
        regionOffsetX: 0,
        regionOffsetY: 0,
        regionWidth: 0,
        regionHeight: 0,
        regionOriginalWidth: 0,
        regionOriginalHeight: 0,
        edges: null,
        width: 0,
        height: 0,
        updateUVs: function () {
            var t = this.regionU2 - this.regionU, e = this.regionV2 - this.regionV, r = this.regionUVs.length;
            if (this.uvs && this.uvs.length == r || (this.uvs = new i.Float32Array(r)), this.regionRotate)for (var s = 0; r > s; s += 2)this.uvs[s] = this.regionU + this.regionUVs[s + 1] * t, this.uvs[s + 1] = this.regionV + e - this.regionUVs[s] * e; else for (var s = 0; r > s; s += 2)this.uvs[s] = this.regionU + this.regionUVs[s] * t, this.uvs[s + 1] = this.regionV + this.regionUVs[s + 1] * e
        },
        computeWorldVertices: function (t, e, i, r) {
            var s = i.bone;
            t += s.worldX, e += s.worldY;
            var n = s.m00, o = s.m01, a = s.m10, h = s.m11, l = this.vertices, u = l.length;
            i.attachmentVertices.length == u && (l = i.attachmentVertices);
            for (var c = 0; u > c; c += 2) {
                var d = l[c], p = l[c + 1];
                r[c] = d * n + p * o + t, r[c + 1] = d * a + p * h + e
            }
        }
    }, i.SkinnedMeshAttachment = function (t) {
        this.name = t
    }, i.SkinnedMeshAttachment.prototype = {
        type: i.AttachmentType.skinnedmesh,
        bones: null,
        weights: null,
        uvs: null,
        regionUVs: null,
        triangles: null,
        hullLength: 0,
        r: 1,
        g: 1,
        b: 1,
        a: 1,
        path: null,
        rendererObject: null,
        regionU: 0,
        regionV: 0,
        regionU2: 0,
        regionV2: 0,
        regionRotate: !1,
        regionOffsetX: 0,
        regionOffsetY: 0,
        regionWidth: 0,
        regionHeight: 0,
        regionOriginalWidth: 0,
        regionOriginalHeight: 0,
        edges: null,
        width: 0,
        height: 0,
        updateUVs: function () {
            var t = this.regionU2 - this.regionU, e = this.regionV2 - this.regionV, r = this.regionUVs.length;
            if (this.uvs && this.uvs.length == r || (this.uvs = new i.Float32Array(r)), this.regionRotate)for (var s = 0; r > s; s += 2)this.uvs[s] = this.regionU + this.regionUVs[s + 1] * t, this.uvs[s + 1] = this.regionV + e - this.regionUVs[s] * e; else for (var s = 0; r > s; s += 2)this.uvs[s] = this.regionU + this.regionUVs[s] * t, this.uvs[s + 1] = this.regionV + this.regionUVs[s + 1] * e
        },
        computeWorldVertices: function (t, e, i, r) {
            var s, n, o, a, h, l, u, c = i.bone.skeleton.bones, d = this.weights, p = this.bones, f = 0, g = 0, m = 0, v = 0, x = p.length;
            if (i.attachmentVertices.length)for (var y = i.attachmentVertices; x > g; f += 2) {
                for (n = 0, o = 0, s = p[g++] + g; s > g; g++, m += 3, v += 2)a = c[p[g]], h = d[m] + y[v], l = d[m + 1] + y[v + 1], u = d[m + 2], n += (h * a.m00 + l * a.m01 + a.worldX) * u, o += (h * a.m10 + l * a.m11 + a.worldY) * u;
                r[f] = n + t, r[f + 1] = o + e
            } else for (; x > g; f += 2) {
                for (n = 0, o = 0, s = p[g++] + g; s > g; g++, m += 3)a = c[p[g]], h = d[m], l = d[m + 1], u = d[m + 2], n += (h * a.m00 + l * a.m01 + a.worldX) * u, o += (h * a.m10 + l * a.m11 + a.worldY) * u;
                r[f] = n + t, r[f + 1] = o + e
            }
        }
    }, i.BoundingBoxAttachment = function (t) {
        this.name = t, this.vertices = []
    }, i.BoundingBoxAttachment.prototype = {
        type: i.AttachmentType.boundingbox,
        computeWorldVertices: function (t, e, i, r) {
            t += i.worldX, e += i.worldY;
            for (var s = i.m00, n = i.m01, o = i.m10, a = i.m11, h = this.vertices, l = 0, u = h.length; u > l; l += 2) {
                var c = h[l], d = h[l + 1];
                r[l] = c * s + d * n + t, r[l + 1] = c * o + d * a + e
            }
        }
    }, i.AnimationStateData = function (t) {
        this.skeletonData = t, this.animationToMixTime = {}
    }, i.AnimationStateData.prototype = {
        defaultMix: 0, setMixByName: function (t, e, i) {
            var r = this.skeletonData.findAnimation(t);
            if (!r)throw"Animation not found: " + t;
            var s = this.skeletonData.findAnimation(e);
            if (!s)throw"Animation not found: " + e;
            this.setMix(r, s, i)
        }, setMix: function (t, e, i) {
            this.animationToMixTime[t.name + ":" + e.name] = i
        }, getMix: function (t, e) {
            var i = t.name + ":" + e.name;
            return this.animationToMixTime.hasOwnProperty(i) ? this.animationToMixTime[i] : this.defaultMix
        }
    }, i.TrackEntry = function () {
    }, i.TrackEntry.prototype = {
        next: null,
        previous: null,
        animation: null,
        loop: !1,
        delay: 0,
        time: 0,
        lastTime: -1,
        endTime: 0,
        timeScale: 1,
        mixTime: 0,
        mixDuration: 0,
        mix: 1,
        onStart: null,
        onEnd: null,
        onComplete: null,
        onEvent: null
    }, i.AnimationState = function (t) {
        this.data = t, this.tracks = [], this.events = []
    }, i.AnimationState.prototype = {
        onStart: null,
        onEnd: null,
        onComplete: null,
        onEvent: null,
        timeScale: 1,
        update: function (t) {
            t *= this.timeScale;
            for (var e = 0; e < this.tracks.length; e++) {
                var i = this.tracks[e];
                if (i) {
                    if (i.time += t * i.timeScale, i.previous) {
                        var r = t * i.previous.timeScale;
                        i.previous.time += r, i.mixTime += r
                    }
                    var s = i.next;
                    s ? (s.time = i.lastTime - s.delay, s.time >= 0 && this.setCurrent(e, s)) : !i.loop && i.lastTime >= i.endTime && this.clearTrack(e)
                }
            }
        },
        apply: function (t) {
            for (var e = 0; e < this.tracks.length; e++) {
                var i = this.tracks[e];
                if (i) {
                    this.events.length = 0;
                    var r = i.time, s = i.lastTime, n = i.endTime, o = i.loop;
                    !o && r > n && (r = n);
                    var a = i.previous;
                    if (a) {
                        var h = a.time;
                        !a.loop && h > a.endTime && (h = a.endTime), a.animation.apply(t, h, h, a.loop, null);
                        var l = i.mixTime / i.mixDuration * i.mix;
                        l >= 1 && (l = 1, i.previous = null), i.animation.mix(t, i.lastTime, r, o, this.events, l)
                    } else 1 == i.mix ? i.animation.apply(t, i.lastTime, r, o, this.events) : i.animation.mix(t, i.lastTime, r, o, this.events, i.mix);
                    for (var u = 0, c = this.events.length; c > u; u++) {
                        var d = this.events[u];
                        i.onEvent && i.onEvent(e, d), this.onEvent && this.onEvent(e, d)
                    }
                    if (o ? s % n > r % n : n > s && r >= n) {
                        var p = Math.floor(r / n);
                        i.onComplete && i.onComplete(e, p), this.onComplete && this.onComplete(e, p)
                    }
                    i.lastTime = i.time
                }
            }
        },
        clearTracks: function () {
            for (var t = 0, e = this.tracks.length; e > t; t++)this.clearTrack(t);
            this.tracks.length = 0
        },
        clearTrack: function (t) {
            if (!(t >= this.tracks.length)) {
                var e = this.tracks[t];
                e && (e.onEnd && e.onEnd(t), this.onEnd && this.onEnd(t), this.tracks[t] = null)
            }
        },
        _expandToIndex: function (t) {
            if (t < this.tracks.length)return this.tracks[t];
            for (; t >= this.tracks.length;)this.tracks.push(null);
            return null
        },
        setCurrent: function (t, e) {
            var i = this._expandToIndex(t);
            if (i) {
                var r = i.previous;
                i.previous = null, i.onEnd && i.onEnd(t), this.onEnd && this.onEnd(t), e.mixDuration = this.data.getMix(i.animation, e.animation), e.mixDuration > 0 && (e.mixTime = 0, e.previous = r && i.mixTime / i.mixDuration < .5 ? r : i)
            }
            this.tracks[t] = e, e.onStart && e.onStart(t), this.onStart && this.onStart(t)
        },
        setAnimationByName: function (t, e, i) {
            var r = this.data.skeletonData.findAnimation(e);
            if (!r)throw"Animation not found: " + e;
            return this.setAnimation(t, r, i)
        },
        setAnimation: function (t, e, r) {
            var s = new i.TrackEntry;
            return s.animation = e, s.loop = r, s.endTime = e.duration, this.setCurrent(t, s), s
        },
        addAnimationByName: function (t, e, i, r) {
            var s = this.data.skeletonData.findAnimation(e);
            if (!s)throw"Animation not found: " + e;
            return this.addAnimation(t, s, i, r)
        },
        addAnimation: function (t, e, r, s) {
            var n = new i.TrackEntry;
            n.animation = e, n.loop = r, n.endTime = e.duration;
            var o = this._expandToIndex(t);
            if (o) {
                for (; o.next;)o = o.next;
                o.next = n
            } else this.tracks[t] = n;
            return 0 >= s && (o ? s += o.endTime - this.data.getMix(o.animation, e) : s = 0), n.delay = s, n
        },
        getCurrent: function (t) {
            return t >= this.tracks.length ? null : this.tracks[t]
        }
    }, i.SkeletonJson = function (t) {
        this.attachmentLoader = t
    }, i.SkeletonJson.prototype = {
        scale: 1, readSkeletonData: function (t, e) {
            var r = new i.SkeletonData;
            r.name = e;
            var s = t.skeleton;
            s && (r.hash = s.hash, r.version = s.spine, r.width = s.width || 0, r.height = s.height || 0);
            for (var n = t.bones, o = 0, a = n.length; a > o; o++) {
                var h = n[o], l = null;
                if (h.parent && (l = r.findBone(h.parent), !l))throw"Parent bone not found: " + h.parent;
                var u = new i.BoneData(h.name, l);
                u.length = (h.length || 0) * this.scale, u.x = (h.x || 0) * this.scale, u.y = (h.y || 0) * this.scale, u.rotation = h.rotation || 0, u.scaleX = h.hasOwnProperty("scaleX") ? h.scaleX : 1, u.scaleY = h.hasOwnProperty("scaleY") ? h.scaleY : 1, u.inheritScale = h.hasOwnProperty("inheritScale") ? h.inheritScale : !0, u.inheritRotation = h.hasOwnProperty("inheritRotation") ? h.inheritRotation : !0, r.bones.push(u)
            }
            var c = t.ik;
            if (c)for (var o = 0, a = c.length; a > o; o++) {
                for (var d = c[o], p = new i.IkConstraintData(d.name), n = d.bones, f = 0, g = n.length; g > f; f++) {
                    var m = r.findBone(n[f]);
                    if (!m)throw"IK bone not found: " + n[f];
                    p.bones.push(m)
                }
                if (p.target = r.findBone(d.target), !p.target)throw"Target bone not found: " + d.target;
                p.bendDirection = !d.hasOwnProperty("bendPositive") || d.bendPositive ? 1 : -1, p.mix = d.hasOwnProperty("mix") ? d.mix : 1, r.ikConstraints.push(p)
            }
            for (var v = t.slots, o = 0, a = v.length; a > o; o++) {
                var x = v[o], u = r.findBone(x.bone);
                if (!u)throw"Slot bone not found: " + x.bone;
                var y = new i.SlotData(x.name, u), b = x.color;
                b && (y.r = this.toColor(b, 0), y.g = this.toColor(b, 1), y.b = this.toColor(b, 2), y.a = this.toColor(b, 3)), y.attachmentName = x.attachment, y.additiveBlending = x.additive && "true" == x.additive, r.slots.push(y)
            }
            var T = t.skins;
            for (var S in T)if (T.hasOwnProperty(S)) {
                var w = T[S], C = new i.Skin(S);
                for (var A in w)if (w.hasOwnProperty(A)) {
                    var _ = r.findSlotIndex(A), E = w[A];
                    for (var R in E)if (E.hasOwnProperty(R)) {
                        var M = this.readAttachment(C, R, E[R]);
                        M && C.addAttachment(_, R, M)
                    }
                }
                r.skins.push(C), "default" == C.name && (r.defaultSkin = C)
            }
            var L = t.events;
            for (var F in L)if (L.hasOwnProperty(F)) {
                var B = L[F], P = new i.EventData(F);
                P.intValue = B["int"] || 0, P.floatValue = B["float"] || 0, P.stringValue = B.string || null, r.events.push(P)
            }
            var D = t.animations;
            for (var I in D)D.hasOwnProperty(I) && this.readAnimation(I, D[I], r);
            return r
        }, readAttachment: function (t, e, r) {
            e = r.name || e;
            var s = i.AttachmentType[r.type || "region"], n = r.path || e, o = this.scale;
            if (s == i.AttachmentType.region) {
                var a = this.attachmentLoader.newRegionAttachment(t, e, n);
                if (!a)return null;
                a.path = n, a.x = (r.x || 0) * o, a.y = (r.y || 0) * o, a.scaleX = r.hasOwnProperty("scaleX") ? r.scaleX : 1, a.scaleY = r.hasOwnProperty("scaleY") ? r.scaleY : 1, a.rotation = r.rotation || 0, a.width = (r.width || 0) * o, a.height = (r.height || 0) * o;
                var h = r.color;
                return h && (a.r = this.toColor(h, 0), a.g = this.toColor(h, 1), a.b = this.toColor(h, 2), a.a = this.toColor(h, 3)), a.updateOffset(), a
            }
            if (s == i.AttachmentType.mesh) {
                var l = this.attachmentLoader.newMeshAttachment(t, e, n);
                return l ? (l.path = n, l.vertices = this.getFloatArray(r, "vertices", o), l.triangles = this.getIntArray(r, "triangles"), l.regionUVs = this.getFloatArray(r, "uvs", 1), l.updateUVs(), h = r.color, h && (l.r = this.toColor(h, 0), l.g = this.toColor(h, 1), l.b = this.toColor(h, 2), l.a = this.toColor(h, 3)), l.hullLength = 2 * (r.hull || 0), r.edges && (l.edges = this.getIntArray(r, "edges")), l.width = (r.width || 0) * o, l.height = (r.height || 0) * o, l) : null
            }
            if (s == i.AttachmentType.skinnedmesh) {
                var l = this.attachmentLoader.newSkinnedMeshAttachment(t, e, n);
                if (!l)return null;
                l.path = n;
                for (var u = this.getFloatArray(r, "uvs", 1), c = this.getFloatArray(r, "vertices", 1), d = [], p = [], f = 0, g = c.length; g > f;) {
                    var m = 0 | c[f++];
                    p[p.length] = m;
                    for (var v = f + 4 * m; v > f;)p[p.length] = c[f], d[d.length] = c[f + 1] * o, d[d.length] = c[f + 2] * o, d[d.length] = c[f + 3], f += 4
                }
                return l.bones = p, l.weights = d, l.triangles = this.getIntArray(r, "triangles"), l.regionUVs = u, l.updateUVs(), h = r.color, h && (l.r = this.toColor(h, 0), l.g = this.toColor(h, 1), l.b = this.toColor(h, 2), l.a = this.toColor(h, 3)), l.hullLength = 2 * (r.hull || 0), r.edges && (l.edges = this.getIntArray(r, "edges")), l.width = (r.width || 0) * o, l.height = (r.height || 0) * o, l
            }
            if (s == i.AttachmentType.boundingbox) {
                for (var x = this.attachmentLoader.newBoundingBoxAttachment(t, e), c = r.vertices, f = 0, g = c.length; g > f; f++)x.vertices.push(c[f] * o);
                return x
            }
            throw"Unknown attachment type: " + s
        }, readAnimation: function (t, e, r) {
            var s = [], n = 0, o = e.slots;
            for (var a in o)if (o.hasOwnProperty(a)) {
                var h = o[a], l = r.findSlotIndex(a);
                for (var u in h)if (h.hasOwnProperty(u)) {
                    var c = h[u];
                    if ("color" == u) {
                        var d = new i.ColorTimeline(c.length);
                        d.slotIndex = l;
                        for (var p = 0, f = 0, g = c.length; g > f; f++) {
                            var m = c[f], v = m.color, x = this.toColor(v, 0), y = this.toColor(v, 1), b = this.toColor(v, 2), T = this.toColor(v, 3);
                            d.setFrame(p, m.time, x, y, b, T), this.readCurve(d, p, m), p++
                        }
                        s.push(d), n = Math.max(n, d.frames[5 * d.getFrameCount() - 5])
                    } else {
                        if ("attachment" != u)throw"Invalid timeline type for a slot: " + u + " (" + a + ")";
                        var d = new i.AttachmentTimeline(c.length);
                        d.slotIndex = l;
                        for (var p = 0, f = 0, g = c.length; g > f; f++) {
                            var m = c[f];
                            d.setFrame(p++, m.time, m.name)
                        }
                        s.push(d), n = Math.max(n, d.frames[d.getFrameCount() - 1])
                    }
                }
            }
            var S = e.bones;
            for (var w in S)if (S.hasOwnProperty(w)) {
                var C = r.findBoneIndex(w);
                if (-1 == C)throw"Bone not found: " + w;
                var A = S[w];
                for (var u in A)if (A.hasOwnProperty(u)) {
                    var c = A[u];
                    if ("rotate" == u) {
                        var d = new i.RotateTimeline(c.length);
                        d.boneIndex = C;
                        for (var p = 0, f = 0, g = c.length; g > f; f++) {
                            var m = c[f];
                            d.setFrame(p, m.time, m.angle), this.readCurve(d, p, m), p++
                        }
                        s.push(d), n = Math.max(n, d.frames[2 * d.getFrameCount() - 2])
                    } else if ("translate" == u || "scale" == u) {
                        var d, _ = 1;
                        "scale" == u ? d = new i.ScaleTimeline(c.length) : (d = new i.TranslateTimeline(c.length), _ = this.scale), d.boneIndex = C;
                        for (var p = 0, f = 0, g = c.length; g > f; f++) {
                            var m = c[f], E = (m.x || 0) * _, R = (m.y || 0) * _;
                            d.setFrame(p, m.time, E, R), this.readCurve(d, p, m), p++
                        }
                        s.push(d), n = Math.max(n, d.frames[3 * d.getFrameCount() - 3])
                    } else {
                        if ("flipX" != u && "flipY" != u)throw"Invalid timeline type for a bone: " + u + " (" + w + ")";
                        var E = "flipX" == u, d = E ? new i.FlipXTimeline(c.length) : new i.FlipYTimeline(c.length);
                        d.boneIndex = C;
                        for (var M = E ? "x" : "y", p = 0, f = 0, g = c.length; g > f; f++) {
                            var m = c[f];
                            d.setFrame(p, m.time, m[M] || !1), p++
                        }
                        s.push(d), n = Math.max(n, d.frames[2 * d.getFrameCount() - 2])
                    }
                }
            }
            var L = e.ik;
            for (var F in L)if (L.hasOwnProperty(F)) {
                var B = r.findIkConstraint(F), c = L[F], d = new i.IkConstraintTimeline(c.length);
                d.ikConstraintIndex = r.ikConstraints.indexOf(B);
                for (var p = 0, f = 0, g = c.length; g > f; f++) {
                    var m = c[f], P = m.hasOwnProperty("mix") ? m.mix : 1, D = !m.hasOwnProperty("bendPositive") || m.bendPositive ? 1 : -1;
                    d.setFrame(p, m.time, P, D), this.readCurve(d, p, m), p++
                }
                s.push(d), n = Math.max(n, d.frames[3 * d.frameCount - 3])
            }
            var I = e.ffd;
            for (var O in I) {
                var G = r.findSkin(O), h = I[O];
                for (a in h) {
                    var l = r.findSlotIndex(a), U = h[a];
                    for (var k in U) {
                        var c = U[k], d = new i.FfdTimeline(c.length), N = G.getAttachment(l, k);
                        if (!N)throw"FFD attachment not found: " + k;
                        d.slotIndex = l, d.attachment = N;
                        var j, W = N.type == i.AttachmentType.mesh;
                        j = W ? N.vertices.length : N.weights.length / 3 * 2;
                        for (var p = 0, f = 0, g = c.length; g > f; f++) {
                            var Y, m = c[f];
                            if (m.vertices) {
                                var V = m.vertices, Y = [];
                                Y.length = j;
                                var X = m.offset || 0, H = V.length;
                                if (1 == this.scale)for (var z = 0; H > z; z++)Y[z + X] = V[z]; else for (var z = 0; H > z; z++)Y[z + X] = V[z] * this.scale;
                                if (W)for (var q = N.vertices, z = 0, H = Y.length; H > z; z++)Y[z] += q[z]
                            } else W ? Y = N.vertices : (Y = [], Y.length = j);
                            d.setFrame(p, m.time, Y), this.readCurve(d, p, m), p++
                        }
                        s[s.length] = d, n = Math.max(n, d.frames[d.frameCount - 1])
                    }
                }
            }
            var K = e.drawOrder;
            if (K || (K = e.draworder), K) {
                for (var d = new i.DrawOrderTimeline(K.length), J = r.slots.length, p = 0, f = 0, g = K.length; g > f; f++) {
                    var Q = K[f], $ = null;
                    if (Q.offsets) {
                        $ = [], $.length = J;
                        for (var z = J - 1; z >= 0; z--)$[z] = -1;
                        var Z = Q.offsets, te = [];
                        te.length = J - Z.length;
                        for (var ee = 0, ie = 0, z = 0, H = Z.length; H > z; z++) {
                            var re = Z[z], l = r.findSlotIndex(re.slot);
                            if (-1 == l)throw"Slot not found: " + re.slot;
                            for (; ee != l;)te[ie++] = ee++;
                            $[ee + re.offset] = ee++
                        }
                        for (; J > ee;)te[ie++] = ee++;
                        for (var z = J - 1; z >= 0; z--)-1 == $[z] && ($[z] = te[--ie])
                    }
                    d.setFrame(p++, Q.time, $)
                }
                s.push(d), n = Math.max(n, d.frames[d.getFrameCount() - 1])
            }
            var se = e.events;
            if (se) {
                for (var d = new i.EventTimeline(se.length), p = 0, f = 0, g = se.length; g > f; f++) {
                    var ne = se[f], oe = r.findEvent(ne.name);
                    if (!oe)throw"Event not found: " + ne.name;
                    var ae = new i.Event(oe);
                    ae.intValue = ne.hasOwnProperty("int") ? ne["int"] : oe.intValue, ae.floatValue = ne.hasOwnProperty("float") ? ne["float"] : oe.floatValue, ae.stringValue = ne.hasOwnProperty("string") ? ne.string : oe.stringValue, d.setFrame(p++, ne.time, ae)
                }
                s.push(d), n = Math.max(n, d.frames[d.getFrameCount() - 1])
            }
            r.animations.push(new i.Animation(t, s, n))
        }, readCurve: function (t, e, i) {
            var r = i.curve;
            r ? "stepped" == r ? t.curves.setStepped(e) : r instanceof Array && t.curves.setCurve(e, r[0], r[1], r[2], r[3]) : t.curves.setLinear(e)
        }, toColor: function (t, e) {
            if (8 != t.length)throw"Color hexidecimal length must be 8, recieved: " + t;
            return parseInt(t.substring(2 * e, 2 * e + 2), 16) / 255
        }, getFloatArray: function (t, e, r) {
            var s = t[e], n = new i.Float32Array(s.length), o = 0, a = s.length;
            if (1 == r)for (; a > o; o++)n[o] = s[o]; else for (; a > o; o++)n[o] = s[o] * r;
            return n
        }, getIntArray: function (t, e) {
            for (var r = t[e], s = new i.Uint16Array(r.length), n = 0, o = r.length; o > n; n++)s[n] = 0 | r[n];
            return s
        }
    }, i.Atlas = function (t, e) {
        this.textureLoader = e, this.pages = [], this.regions = [];
        var r = new i.AtlasReader(t), s = [];
        s.length = 4;
        for (var n = null; ;) {
            var o = r.readLine();
            if (null === o)break;
            if (o = r.trim(o), o.length)if (n) {
                var a = new i.AtlasRegion;
                a.name = o, a.page = n, a.rotate = "true" == r.readValue(), r.readTuple(s);
                var h = parseInt(s[0]), l = parseInt(s[1]);
                r.readTuple(s);
                var u = parseInt(s[0]), c = parseInt(s[1]);
                a.u = h / n.width, a.v = l / n.height, a.rotate ? (a.u2 = (h + c) / n.width, a.v2 = (l + u) / n.height) : (a.u2 = (h + u) / n.width, a.v2 = (l + c) / n.height), a.x = h, a.y = l, a.width = Math.abs(u), a.height = Math.abs(c), 4 == r.readTuple(s) && (a.splits = [parseInt(s[0]), parseInt(s[1]), parseInt(s[2]), parseInt(s[3])], 4 == r.readTuple(s) && (a.pads = [parseInt(s[0]), parseInt(s[1]), parseInt(s[2]), parseInt(s[3])], r.readTuple(s))), a.originalWidth = parseInt(s[0]), a.originalHeight = parseInt(s[1]), r.readTuple(s), a.offsetX = parseInt(s[0]), a.offsetY = parseInt(s[1]), a.index = parseInt(r.readValue()), this.regions.push(a)
            } else {
                n = new i.AtlasPage, n.name = o, 2 == r.readTuple(s) && (n.width = parseInt(s[0]), n.height = parseInt(s[1]), r.readTuple(s)), n.format = i.Atlas.Format[s[0]], r.readTuple(s), n.minFilter = i.Atlas.TextureFilter[s[0]], n.magFilter = i.Atlas.TextureFilter[s[1]];
                var d = r.readValue();
                n.uWrap = i.Atlas.TextureWrap.clampToEdge, n.vWrap = i.Atlas.TextureWrap.clampToEdge, "x" == d ? n.uWrap = i.Atlas.TextureWrap.repeat : "y" == d ? n.vWrap = i.Atlas.TextureWrap.repeat : "xy" == d && (n.uWrap = n.vWrap = i.Atlas.TextureWrap.repeat), e.load(n, o, this), this.pages.push(n)
            } else n = null
        }
    }, i.Atlas.prototype = {
        findRegion: function (t) {
            for (var e = this.regions, i = 0, r = e.length; r > i; i++)if (e[i].name == t)return e[i];
            return null
        }, dispose: function () {
            for (var t = this.pages, e = 0, i = t.length; i > e; e++)this.textureLoader.unload(t[e].rendererObject)
        }, updateUVs: function (t) {
            for (var e = this.regions, i = 0, r = e.length; r > i; i++) {
                var s = e[i];
                s.page == t && (s.u = s.x / t.width, s.v = s.y / t.height, s.rotate ? (s.u2 = (s.x + s.height) / t.width, s.v2 = (s.y + s.width) / t.height) : (s.u2 = (s.x + s.width) / t.width, s.v2 = (s.y + s.height) / t.height))
            }
        }
    }, i.Atlas.Format = {
        alpha: 0,
        intensity: 1,
        luminanceAlpha: 2,
        rgb565: 3,
        rgba4444: 4,
        rgb888: 5,
        rgba8888: 6
    }, i.Atlas.TextureFilter = {
        nearest: 0,
        linear: 1,
        mipMap: 2,
        mipMapNearestNearest: 3,
        mipMapLinearNearest: 4,
        mipMapNearestLinear: 5,
        mipMapLinearLinear: 6
    }, i.Atlas.TextureWrap = {mirroredRepeat: 0, clampToEdge: 1, repeat: 2}, i.AtlasPage = function () {
    }, i.AtlasPage.prototype = {
        name: null,
        format: null,
        minFilter: null,
        magFilter: null,
        uWrap: null,
        vWrap: null,
        rendererObject: null,
        width: 0,
        height: 0
    }, i.AtlasRegion = function () {
    }, i.AtlasRegion.prototype = {
        page: null,
        name: null,
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        u: 0,
        v: 0,
        u2: 0,
        v2: 0,
        offsetX: 0,
        offsetY: 0,
        originalWidth: 0,
        originalHeight: 0,
        index: 0,
        rotate: !1,
        splits: null,
        pads: null
    }, i.AtlasReader = function (t) {
        this.lines = t.split(/\r\n|\r|\n/)
    }, i.AtlasReader.prototype = {
        index: 0, trim: function (t) {
            return t.replace(/^\s+|\s+$/g, "")
        }, readLine: function () {
            return this.index >= this.lines.length ? null : this.lines[this.index++]
        }, readValue: function () {
            var t = this.readLine(), e = t.indexOf(":");
            if (-1 == e)throw"Invalid line: " + t;
            return this.trim(t.substring(e + 1))
        }, readTuple: function (t) {
            var e = this.readLine(), i = e.indexOf(":");
            if (-1 == i)throw"Invalid line: " + e;
            for (var r = 0, s = i + 1; 3 > r; r++) {
                var n = e.indexOf(",", s);
                if (-1 == n)break;
                t[r] = this.trim(e.substr(s, n - s)), s = n + 1
            }
            return t[r] = this.trim(e.substring(s)), r + 1
        }
    }, i.AtlasAttachmentLoader = function (t) {
        this.atlas = t
    }, i.AtlasAttachmentLoader.prototype = {
        newRegionAttachment: function (t, e, r) {
            var s = this.atlas.findRegion(r);
            if (!s)throw"Region not found in atlas: " + r + " (region attachment: " + e + ")";
            var n = new i.RegionAttachment(e);
            return n.rendererObject = s, n.setUVs(s.u, s.v, s.u2, s.v2, s.rotate), n.regionOffsetX = s.offsetX, n.regionOffsetY = s.offsetY, n.regionWidth = s.width, n.regionHeight = s.height, n.regionOriginalWidth = s.originalWidth, n.regionOriginalHeight = s.originalHeight, n
        }, newMeshAttachment: function (t, e, r) {
            var s = this.atlas.findRegion(r);
            if (!s)throw"Region not found in atlas: " + r + " (mesh attachment: " + e + ")";
            var n = new i.MeshAttachment(e);
            return n.rendererObject = s, n.regionU = s.u, n.regionV = s.v, n.regionU2 = s.u2, n.regionV2 = s.v2, n.regionRotate = s.rotate, n.regionOffsetX = s.offsetX, n.regionOffsetY = s.offsetY, n.regionWidth = s.width, n.regionHeight = s.height, n.regionOriginalWidth = s.originalWidth, n.regionOriginalHeight = s.originalHeight, n
        }, newSkinnedMeshAttachment: function (t, e, r) {
            var s = this.atlas.findRegion(r);
            if (!s)throw"Region not found in atlas: " + r + " (skinned mesh attachment: " + e + ")";
            var n = new i.SkinnedMeshAttachment(e);
            return n.rendererObject = s, n.regionU = s.u, n.regionV = s.v, n.regionU2 = s.u2, n.regionV2 = s.v2, n.regionRotate = s.rotate, n.regionOffsetX = s.offsetX, n.regionOffsetY = s.offsetY, n.regionWidth = s.width, n.regionHeight = s.height, n.regionOriginalWidth = s.originalWidth, n.regionOriginalHeight = s.originalHeight, n
        }, newBoundingBoxAttachment: function (t, e) {
            return new i.BoundingBoxAttachment(e)
        }
    }, i.SkeletonBounds = function () {
        this.polygonPool = [], this.polygons = [], this.boundingBoxes = []
    }, i.SkeletonBounds.prototype = {
        minX: 0, minY: 0, maxX: 0, maxY: 0, update: function (t, e) {
            var r = t.slots, s = r.length, n = t.x, o = t.y, a = this.boundingBoxes, h = this.polygonPool, l = this.polygons;
            a.length = 0;
            for (var u = 0, c = l.length; c > u; u++)h.push(l[u]);
            l.length = 0;
            for (var u = 0; s > u; u++) {
                var d = r[u], p = d.attachment;
                if (p.type == i.AttachmentType.boundingbox) {
                    a.push(p);
                    var f, g = h.length;
                    g > 0 ? (f = h[g - 1], h.splice(g - 1, 1)) : f = [], l.push(f), f.length = p.vertices.length, p.computeWorldVertices(n, o, d.bone, f)
                }
            }
            e && this.aabbCompute()
        }, aabbCompute: function () {
            for (var t = this.polygons, e = Number.MAX_VALUE, i = Number.MAX_VALUE, r = Number.MIN_VALUE, s = Number.MIN_VALUE, n = 0, o = t.length; o > n; n++)for (var a = t[n], h = 0, l = a.length; l > h; h += 2) {
                var u = a[h], c = a[h + 1];
                e = Math.min(e, u), i = Math.min(i, c), r = Math.max(r, u), s = Math.max(s, c)
            }
            this.minX = e, this.minY = i, this.maxX = r, this.maxY = s
        }, aabbContainsPoint: function (t, e) {
            return t >= this.minX && t <= this.maxX && e >= this.minY && e <= this.maxY
        }, aabbIntersectsSegment: function (t, e, i, r) {
            var s = this.minX, n = this.minY, o = this.maxX, a = this.maxY;
            if (s >= t && s >= i || n >= e && n >= r || t >= o && i >= o || e >= a && r >= a)return !1;
            var h = (r - e) / (i - t), l = h * (s - t) + e;
            if (l > n && a > l)return !0;
            if (l = h * (o - t) + e, l > n && a > l)return !0;
            var u = (n - e) / h + t;
            return u > s && o > u ? !0 : (u = (a - e) / h + t, u > s && o > u ? !0 : !1)
        }, aabbIntersectsSkeleton: function (t) {
            return this.minX < t.maxX && this.maxX > t.minX && this.minY < t.maxY && this.maxY > t.minY
        }, containsPoint: function (t, e) {
            for (var i = this.polygons, r = 0, s = i.length; s > r; r++)if (this.polygonContainsPoint(i[r], t, e))return this.boundingBoxes[r];
            return null
        }, intersectsSegment: function (t, e, i, r) {
            for (var s = this.polygons, n = 0, o = s.length; o > n; n++)if (s[n].intersectsSegment(t, e, i, r))return this.boundingBoxes[n];
            return null
        }, polygonContainsPoint: function (t, e, i) {
            for (var r = t.length, s = r - 2, n = !1, o = 0; r > o; o += 2) {
                var a = t[o + 1], h = t[s + 1];
                if (i > a && h >= i || i > h && a >= i) {
                    var l = t[o];
                    l + (i - a) / (h - a) * (t[s] - l) < e && (n = !n)
                }
                s = o
            }
            return n
        }, polygonIntersectsSegment: function (t, e, i, r, s) {
            for (var n = t.length, o = e - r, a = i - s, h = e * s - i * r, l = t[n - 2], u = t[n - 1], c = 0; n > c; c += 2) {
                var d = t[c], p = t[c + 1], f = l * p - u * d, g = l - d, m = u - p, v = o * m - a * g, x = (h * g - o * f) / v;
                if ((x >= l && d >= x || x >= d && l >= x) && (x >= e && r >= x || x >= r && e >= x)) {
                    var y = (h * m - a * f) / v;
                    if ((y >= u && p >= y || y >= p && u >= y) && (y >= i && s >= y || y >= s && i >= y))return !0
                }
                l = d, u = p
            }
            return !1
        }, getPolygon: function (t) {
            var e = this.boundingBoxes.indexOf(t);
            return -1 == e ? null : this.polygons[e]
        }, getWidth: function () {
            return this.maxX - this.minX
        }, getHeight: function () {
            return this.maxY - this.minY
        }
    }, i.Bone.yDown = !0, e.AnimCache = {}, e.SpineTextureLoader = function (t, i) {
        e.EventTarget.call(this), this.basePath = t, this.crossorigin = i, this.loadingCount = 0
    }, e.SpineTextureLoader.prototype = e.SpineTextureLoader, e.SpineTextureLoader.prototype.load = function (t, i) {
        if (t.rendererObject = e.BaseTexture.fromImage(this.basePath + "/" + i, this.crossorigin), !t.rendererObject.hasLoaded) {
            var r = this;
            ++r.loadingCount, t.rendererObject.addEventListener("loaded", function () {
                --r.loadingCount, r.dispatchEvent({type: "loadedBaseTexture", content: r})
            })
        }
    }, e.SpineTextureLoader.prototype.unload = function (t) {
        t.destroy(!0)
    }, e.Spine = function (t) {
        if (e.DisplayObjectContainer.call(this), this.spineData = e.AnimCache[t], !this.spineData)throw new Error("Spine data must be preloaded using PIXI.SpineLoader or PIXI.AssetLoader: " + t);
        this.skeleton = new i.Skeleton(this.spineData), this.skeleton.updateWorldTransform(), this.stateData = new i.AnimationStateData(this.spineData), this.state = new i.AnimationState(this.stateData), this.slotContainers = [];
        for (var r = 0, s = this.skeleton.drawOrder.length; s > r; r++) {
            var n = this.skeleton.drawOrder[r], o = n.attachment, a = new e.DisplayObjectContainer;
            if (this.slotContainers.push(a), this.addChild(a), o instanceof i.RegionAttachment) {
                var h = o.rendererObject.name, l = this.createSprite(n, o);
                n.currentSprite = l, n.currentSpriteName = h, a.addChild(l)
            } else {
                if (!(o instanceof i.MeshAttachment))continue;
                var u = this.createMesh(n, o);
                n.currentMesh = u, n.currentMeshName = o.name, a.addChild(u)
            }
        }
        this.autoUpdate = !0
    }, e.Spine.prototype = Object.create(e.DisplayObjectContainer.prototype), e.Spine.prototype.constructor = e.Spine, Object.defineProperty(e.Spine.prototype, "autoUpdate", {
        get: function () {
            return this.updateTransform === e.Spine.prototype.autoUpdateTransform
        }, set: function (t) {
            this.updateTransform = t ? e.Spine.prototype.autoUpdateTransform : e.DisplayObjectContainer.prototype.updateTransform
        }
    }), e.Spine.prototype.update = function (t) {
        this.state.update(t), this.state.apply(this.skeleton), this.skeleton.updateWorldTransform();
        for (var r = this.skeleton.drawOrder, s = 0, n = r.length; n > s; s++) {
            var o = r[s], a = o.attachment, h = this.slotContainers[s];
            if (a) {
                var l = a.type;
                if (l === i.AttachmentType.region) {
                    if (a.rendererObject && (!o.currentSpriteName || o.currentSpriteName !== a.name)) {
                        var u = a.rendererObject.name;
                        if (void 0 !== o.currentSprite && (o.currentSprite.visible = !1), o.sprites = o.sprites || {}, void 0 !== o.sprites[u])o.sprites[u].visible = !0; else {
                            var c = this.createSprite(o, a);
                            h.addChild(c)
                        }
                        o.currentSprite = o.sprites[u], o.currentSpriteName = u
                    }
                    var d = o.bone;
                    h.position.x = d.worldX + a.x * d.m00 + a.y * d.m01, h.position.y = d.worldY + a.x * d.m10 + a.y * d.m11, h.scale.x = d.worldScaleX, h.scale.y = d.worldScaleY, h.rotation = -(o.bone.worldRotation * i.degRad), o.currentSprite.tint = e.rgb2hex([o.r, o.g, o.b])
                } else {
                    if (l !== i.AttachmentType.skinnedmesh) {
                        h.visible = !1;
                        continue
                    }
                    if (!o.currentMeshName || o.currentMeshName !== a.name) {
                        var p = a.name;
                        if (void 0 !== o.currentMesh && (o.currentMesh.visible = !1), o.meshes = o.meshes || {}, void 0 !== o.meshes[p])o.meshes[p].visible = !0; else {
                            var f = this.createMesh(o, a);
                            h.addChild(f)
                        }
                        o.currentMesh = o.meshes[p], o.currentMeshName = p
                    }
                    a.computeWorldVertices(o.bone.skeleton.x, o.bone.skeleton.y, o, o.currentMesh.vertices)
                }
                h.visible = !0, h.alpha = o.a
            } else h.visible = !1
        }
    }, e.Spine.prototype.autoUpdateTransform = function () {
        this.lastTime = this.lastTime || Date.now();
        var t = .001 * (Date.now() - this.lastTime);
        this.lastTime = Date.now(), this.update(t), e.DisplayObjectContainer.prototype.updateTransform.call(this)
    }, e.Spine.prototype.createSprite = function (t, r) {
        var s = r.rendererObject, n = s.page.rendererObject, o = new e.Rectangle(s.x, s.y, s.rotate ? s.height : s.width, s.rotate ? s.width : s.height), a = new e.Texture(n, o), h = new e.Sprite(a), l = s.rotate ? .5 * Math.PI : 0;
        return h.scale.set(s.width / s.originalWidth, s.height / s.originalHeight), h.rotation = l - r.rotation * i.degRad, h.anchor.x = h.anchor.y = .5, t.sprites = t.sprites || {}, t.sprites[s.name] = h, h
    }, e.Spine.prototype.createMesh = function (t, i) {
        var r = i.rendererObject, s = r.page.rendererObject, n = new e.Texture(s), o = new e.Strip(n);
        return o.drawMode = e.Strip.DrawModes.TRIANGLES, o.canvasPadding = 1.5, o.vertices = new e.Float32Array(i.uvs.length), o.uvs = i.uvs, o.indices = i.triangles, t.meshes = t.meshes || {}, t.meshes[i.name] = o, o
    }, e.BaseTextureCache = {},e.BaseTextureCacheIdGenerator = 0,e.BaseTexture = function (t, i) {
        if (this.resolution = 1, this.width = 100, this.height = 100, this.scaleMode = i || e.scaleModes.DEFAULT, this.hasLoaded = !1, this.source = t, this._UID = e._UID++, this.premultipliedAlpha = !0, this._glTextures = [], this.mipmap = !1, this._dirty = [!0, !0, !0, !0], t) {
            if ((this.source.complete || this.source.getContext) && this.source.width && this.source.height)this.hasLoaded = !0, this.width = this.source.naturalWidth || this.source.width, this.height = this.source.naturalHeight || this.source.height, this.dirty(); else {
                var r = this;
                this.source.onload = function () {
                    r.hasLoaded = !0, r.width = r.source.naturalWidth || r.source.width, r.height = r.source.naturalHeight || r.source.height, r.dirty(), r.dispatchEvent({
                        type: "loaded",
                        content: r
                    })
                }, this.source.onerror = function () {
                    r.dispatchEvent({type: "error", content: r})
                }
            }
            this.imageUrl = null, this._powerOf2 = !1
        }
    },e.BaseTexture.prototype.constructor = e.BaseTexture,e.EventTarget.mixin(e.BaseTexture.prototype),e.BaseTexture.prototype.destroy = function () {
        this.imageUrl ? (delete e.BaseTextureCache[this.imageUrl], delete e.TextureCache[this.imageUrl], this.imageUrl = null, navigator.isCocoonJS || (this.source.src = "")) : this.source && this.source._pixiId && delete e.BaseTextureCache[this.source._pixiId], this.source = null, this.unloadFromGPU()
    },e.BaseTexture.prototype.updateSourceImage = function (t) {
        this.hasLoaded = !1, this.source.src = null, this.source.src = t
    },e.BaseTexture.prototype.dirty = function () {
        for (var t = 0; t < this._glTextures.length; t++)this._dirty[t] = !0
    },e.BaseTexture.prototype.unloadFromGPU = function () {
        this.dirty();
        for (var t = this._glTextures.length - 1; t >= 0; t--) {
            var i = this._glTextures[t], r = e.glContexts[t];
            r && i && r.deleteTexture(i)
        }
        this._glTextures.length = 0, this.dirty()
    },e.BaseTexture.fromImage = function (t, i, r) {
        var s = e.BaseTextureCache[t];
        if (void 0 === i && -1 === t.indexOf("data:") && (i = !0), !s) {
            var n = new Image;
            i && (n.crossOrigin = ""), n.src = t, s = new e.BaseTexture(n, r), s.imageUrl = t, e.BaseTextureCache[t] = s, -1 !== t.indexOf(e.RETINA_PREFIX + ".") && (s.resolution = 2)
        }
        return s
    },e.BaseTexture.fromCanvas = function (t, i) {
        t._pixiId || (t._pixiId = "canvas_" + e.TextureCacheIdGenerator++);
        var r = e.BaseTextureCache[t._pixiId];
        return r || (r = new e.BaseTexture(t, i), e.BaseTextureCache[t._pixiId] = r), r
    },e.TextureCache = {},e.FrameCache = {},e.TextureCacheIdGenerator = 0,e.Texture = function (t, i, r, s) {
        this.noFrame = !1, i || (this.noFrame = !0, i = new e.Rectangle(0, 0, 1, 1)), t instanceof e.Texture && (t = t.baseTexture), this.baseTexture = t, this.frame = i, this.trim = s, this.valid = !1, this.requiresUpdate = !1, this._uvs = null, this.width = 0, this.height = 0, this.crop = r || new e.Rectangle(0, 0, 1, 1), t.hasLoaded ? (this.noFrame && (i = new e.Rectangle(0, 0, t.width, t.height)), this.setFrame(i)) : t.addEventListener("loaded", this.onBaseTextureLoaded.bind(this))
    },e.Texture.prototype.constructor = e.Texture,e.EventTarget.mixin(e.Texture.prototype),e.Texture.prototype.onBaseTextureLoaded = function () {
        var t = this.baseTexture;
        t.removeEventListener("loaded", this.onLoaded), this.noFrame && (this.frame = new e.Rectangle(0, 0, t.width, t.height)), this.setFrame(this.frame), this.dispatchEvent({
            type: "update",
            content: this
        })
    },e.Texture.prototype.destroy = function (t) {
        t && this.baseTexture.destroy(), this.valid = !1
    },e.Texture.prototype.setFrame = function (t) {
        if (this.noFrame = !1, this.frame = t, this.width = t.width, this.height = t.height, this.crop.x = t.x, this.crop.y = t.y, this.crop.width = t.width, this.crop.height = t.height, !this.trim && (t.x + t.width > this.baseTexture.width || t.y + t.height > this.baseTexture.height))throw new Error("Texture Error: frame does not fit inside the base Texture dimensions " + this);
        this.valid = t && t.width && t.height && this.baseTexture.source && this.baseTexture.hasLoaded, this.trim && (this.width = this.trim.width, this.height = this.trim.height, this.frame.width = this.trim.width, this.frame.height = this.trim.height), this.valid && this._updateUvs()
    },e.Texture.prototype._updateUvs = function () {
        this._uvs || (this._uvs = new e.TextureUvs);
        var t = this.crop, i = this.baseTexture.width, r = this.baseTexture.height;
        this._uvs.x0 = t.x / i, this._uvs.y0 = t.y / r, this._uvs.x1 = (t.x + t.width) / i, this._uvs.y1 = t.y / r, this._uvs.x2 = (t.x + t.width) / i, this._uvs.y2 = (t.y + t.height) / r, this._uvs.x3 = t.x / i, this._uvs.y3 = (t.y + t.height) / r
    },e.Texture.fromImage = function (t, i, r) {
        var s = e.TextureCache[t];
        return s || (s = new e.Texture(e.BaseTexture.fromImage(t, i, r)), e.TextureCache[t] = s), s
    },e.Texture.fromFrame = function (t) {
        var i = e.TextureCache[t];
        if (!i)throw new Error('The frameId "' + t + '" does not exist in the texture cache ');
        return i
    },e.Texture.fromCanvas = function (t, i) {
        var r = e.BaseTexture.fromCanvas(t, i);
        return new e.Texture(r)
    },e.Texture.addTextureToCache = function (t, i) {
        e.TextureCache[i] = t
    },e.Texture.removeTextureFromCache = function (t) {
        var i = e.TextureCache[t];
        return delete e.TextureCache[t], delete e.BaseTextureCache[t], i
    },e.TextureUvs = function () {
        this.x0 = 0, this.y0 = 0, this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.x3 = 0, this.y3 = 0
    },e.Texture.emptyTexture = new e.Texture(new e.BaseTexture),e.RenderTexture = function (t, i, r, s, n) {
        if (this.width = t || 100, this.height = i || 100, this.resolution = n || 1, this.frame = new e.Rectangle(0, 0, this.width * this.resolution, this.height * this.resolution), this.crop = new e.Rectangle(0, 0, this.width * this.resolution, this.height * this.resolution), this.baseTexture = new e.BaseTexture, this.baseTexture.width = this.width * this.resolution, this.baseTexture.height = this.height * this.resolution, this.baseTexture._glTextures = [], this.baseTexture.resolution = this.resolution, this.baseTexture.scaleMode = s || e.scaleModes.DEFAULT, this.baseTexture.hasLoaded = !0, e.Texture.call(this, this.baseTexture, new e.Rectangle(0, 0, this.width, this.height)), this.renderer = r || e.defaultRenderer, this.renderer.type === e.WEBGL_RENDERER) {
            var o = this.renderer.gl;
            this.baseTexture._dirty[o.id] = !1, this.textureBuffer = new e.FilterTexture(o, this.width * this.resolution, this.height * this.resolution, this.baseTexture.scaleMode), this.baseTexture._glTextures[o.id] = this.textureBuffer.texture, this.render = this.renderWebGL, this.projection = new e.Point(.5 * this.width, .5 * -this.height)
        } else this.render = this.renderCanvas, this.textureBuffer = new e.CanvasBuffer(this.width * this.resolution, this.height * this.resolution), this.baseTexture.source = this.textureBuffer.canvas;
        this.valid = !0, this._updateUvs()
    },e.RenderTexture.prototype = Object.create(e.Texture.prototype),e.RenderTexture.prototype.constructor = e.RenderTexture,e.RenderTexture.prototype.resize = function (t, i, r) {
        (t !== this.width || i !== this.height) && (this.valid = t > 0 && i > 0, this.width = this.frame.width = this.crop.width = t, this.height = this.frame.height = this.crop.height = i, r && (this.baseTexture.width = this.width, this.baseTexture.height = this.height), this.renderer.type === e.WEBGL_RENDERER && (this.projection.x = this.width / 2, this.projection.y = -this.height / 2), this.valid && this.textureBuffer.resize(this.width * this.resolution, this.height * this.resolution))
    },e.RenderTexture.prototype.clear = function () {
        this.valid && (this.renderer.type === e.WEBGL_RENDERER && this.renderer.gl.bindFramebuffer(this.renderer.gl.FRAMEBUFFER, this.textureBuffer.frameBuffer), this.textureBuffer.clear())
    },e.RenderTexture.prototype.renderWebGL = function (t, e, i) {
        if (this.valid) {
            var r = t.worldTransform;
            r.identity(), r.translate(0, 2 * this.projection.y), e && r.append(e), r.scale(1, -1), t.worldAlpha = 1;
            for (var s = t.children, n = 0, o = s.length; o > n; n++)s[n].updateTransform();
            var a = this.renderer.gl;
            a.viewport(0, 0, this.width * this.resolution, this.height * this.resolution), a.bindFramebuffer(a.FRAMEBUFFER, this.textureBuffer.frameBuffer), i && this.textureBuffer.clear(), this.renderer.spriteBatch.dirty = !0, this.renderer.renderDisplayObject(t, this.projection, this.textureBuffer.frameBuffer), this.renderer.spriteBatch.dirty = !0
        }
    },e.RenderTexture.prototype.renderCanvas = function (t, e, i) {
        if (this.valid) {
            var r = t.worldTransform;
            r.identity(), e && r.append(e), t.worldAlpha = 1;
            for (var s = t.children, n = 0, o = s.length; o > n; n++)s[n].updateTransform();
            i && this.textureBuffer.clear();
            var a = this.textureBuffer.context, h = this.renderer.resolution;
            this.renderer.resolution = this.resolution, this.renderer.renderDisplayObject(t, a), this.renderer.resolution = h
        }
    },e.RenderTexture.prototype.getImage = function () {
        var t = new Image;
        return t.src = this.getBase64(), t
    },e.RenderTexture.prototype.getBase64 = function () {
        return this.getCanvas().toDataURL()
    },e.RenderTexture.prototype.getCanvas = function () {
        if (this.renderer.type === e.WEBGL_RENDERER) {
            var t = this.renderer.gl, i = this.textureBuffer.width, r = this.textureBuffer.height, s = new Uint8Array(4 * i * r);
            t.bindFramebuffer(t.FRAMEBUFFER, this.textureBuffer.frameBuffer), t.readPixels(0, 0, i, r, t.RGBA, t.UNSIGNED_BYTE, s), t.bindFramebuffer(t.FRAMEBUFFER, null);
            var n = new e.CanvasBuffer(i, r), o = n.context.getImageData(0, 0, i, r);
            return o.data.set(s), n.context.putImageData(o, 0, 0), n.canvas
        }
        return this.textureBuffer.canvas
    },e.RenderTexture.tempMatrix = new e.Matrix,e.VideoTexture = function (t, i) {
        if (!t)throw new Error("No video source element specified.");
        (t.readyState === t.HAVE_ENOUGH_DATA || t.readyState === t.HAVE_FUTURE_DATA) && t.width && t.height && (t.complete = !0), e.BaseTexture.call(this, t, i), this.autoUpdate = !1, this.updateBound = this._onUpdate.bind(this), t.complete || (this._onCanPlay = this.onCanPlay.bind(this), t.addEventListener("canplay", this._onCanPlay), t.addEventListener("canplaythrough", this._onCanPlay), t.addEventListener("play", this.onPlayStart.bind(this)), t.addEventListener("pause", this.onPlayStop.bind(this)))
    },e.VideoTexture.prototype = Object.create(e.BaseTexture.prototype),e.VideoTexture.constructor = e.VideoTexture,e.VideoTexture.prototype._onUpdate = function () {
        this.autoUpdate && (window.requestAnimationFrame(this.updateBound), this.dirty())
    },e.VideoTexture.prototype.onPlayStart = function () {
        this.autoUpdate || (window.requestAnimationFrame(this.updateBound), this.autoUpdate = !0)
    },e.VideoTexture.prototype.onPlayStop = function () {
        this.autoUpdate = !1
    },e.VideoTexture.prototype.onCanPlay = function () {
        "canplaythrough" === event.type && (this.hasLoaded = !0, this.source && (this.source.removeEventListener("canplay", this._onCanPlay), this.source.removeEventListener("canplaythrough", this._onCanPlay), this.width = this.source.videoWidth, this.height = this.source.videoHeight, this.__loaded || (this.__loaded = !0, this.dispatchEvent({
            type: "loaded",
            content: this
        }))))
    },e.VideoTexture.prototype.destroy = function () {
        this.source && this.source._pixiId && (e.BaseTextureCache[this.source._pixiId] = null, delete e.BaseTextureCache[this.source._pixiId], this.source._pixiId = null, delete this.source._pixiId), e.BaseTexture.prototype.destroy.call(this)
    },e.VideoTexture.baseTextureFromVideo = function (t, i) {
        t._pixiId || (t._pixiId = "video_" + e.TextureCacheIdGenerator++);
        var r = e.BaseTextureCache[t._pixiId];
        return r || (r = new e.VideoTexture(t, i), e.BaseTextureCache[t._pixiId] = r), r
    },e.VideoTexture.textureFromVideo = function (t, i) {
        var r = e.VideoTexture.baseTextureFromVideo(t, i);
        return new e.Texture(r)
    },e.VideoTexture.fromUrl = function (t, i) {
        var r = document.createElement("video");
        return r.src = t, r.autoPlay = !0, r.play(), e.VideoTexture.textureFromVideo(r, i)
    },e.AssetLoader = function (t, i) {
        this.assetURLs = t, this.crossorigin = i, this.loadersByType = {
            jpg: e.ImageLoader,
            jpeg: e.ImageLoader,
            png: e.ImageLoader,
            gif: e.ImageLoader,
            webp: e.ImageLoader,
            json: e.JsonLoader,
            atlas: e.AtlasLoader,
            anim: e.SpineLoader,
            xml: e.BitmapFontLoader,
            fnt: e.BitmapFontLoader
        }
    },e.EventTarget.mixin(e.AssetLoader.prototype),e.AssetLoader.prototype.constructor = e.AssetLoader,e.AssetLoader.prototype._getDataType = function (t) {
        var e = "data:", i = t.slice(0, e.length).toLowerCase();
        if (i === e) {
            var r = t.slice(e.length), s = r.indexOf(",");
            if (-1 === s)return null;
            var n = r.slice(0, s).split(";")[0];
            return n && "text/plain" !== n.toLowerCase() ? n.split("/").pop().toLowerCase() : "txt"
        }
        return null
    },e.AssetLoader.prototype.load = function () {
        function t(t) {
            e.onAssetLoaded(t.data.content)
        }

        var e = this;
        this.loadCount = this.assetURLs.length;
        for (var i = 0; i < this.assetURLs.length; i++) {
            var r = this.assetURLs[i], s = this._getDataType(r);
            s || (s = r.split("?").shift().split(".").pop().toLowerCase());
            var n = this.loadersByType[s];
            if (!n)throw new Error(s + " is an unsupported file type");
            var o = new n(r, this.crossorigin);
            o.on("loaded", t), o.load()
        }
    },e.AssetLoader.prototype.onAssetLoaded = function (t) {
        this.loadCount--, this.emit("onProgress", {
            content: this,
            loader: t
        }), this.onProgress && this.onProgress(t), this.loadCount || (this.emit("onComplete", {content: this}), this.onComplete && this.onComplete())
    },e.JsonLoader = function (t, e) {
        this.url = t, this.crossorigin = e, this.baseUrl = t.replace(/[^\/]*$/, ""), this.loaded = !1
    },e.JsonLoader.prototype.constructor = e.JsonLoader,e.EventTarget.mixin(e.JsonLoader.prototype),e.JsonLoader.prototype.load = function () {
        window.XDomainRequest && this.crossorigin ? (this.ajaxRequest = new window.XDomainRequest, this.ajaxRequest.timeout = 3e3, this.ajaxRequest.onerror = this.onError.bind(this), this.ajaxRequest.ontimeout = this.onError.bind(this), this.ajaxRequest.onprogress = function () {
        }, this.ajaxRequest.onload = this.onJSONLoaded.bind(this)) : (this.ajaxRequest = window.XMLHttpRequest ? new window.XMLHttpRequest : new window.ActiveXObject("Microsoft.XMLHTTP"), this.ajaxRequest.onreadystatechange = this.onReadyStateChanged.bind(this)), this.ajaxRequest.open("GET", this.url, !0), this.ajaxRequest.send()
    },e.JsonLoader.prototype.onReadyStateChanged = function () {
        4 !== this.ajaxRequest.readyState || 200 !== this.ajaxRequest.status && -1 !== window.location.href.indexOf("http") || this.onJSONLoaded()
    },e.JsonLoader.prototype.onJSONLoaded = function () {
        if (!this.ajaxRequest.responseText)return void this.onError();
        if (this.json = JSON.parse(this.ajaxRequest.responseText), this.json.frames && this.json.meta && this.json.meta.image) {
            var t = this.baseUrl + this.json.meta.image, r = new e.ImageLoader(t, this.crossorigin), s = this.json.frames;
            this.texture = r.texture.baseTexture, r.addEventListener("loaded", this.onLoaded.bind(this));
            for (var n in s) {
                var o = s[n].frame;
                if (o) {
                    var a = new e.Rectangle(o.x, o.y, o.w, o.h), h = a.clone(), l = null;
                    if (s[n].trimmed) {
                        var u = s[n].sourceSize, c = s[n].spriteSourceSize;
                        l = new e.Rectangle(c.x, c.y, u.w, u.h)
                    }
                    e.TextureCache[n] = new e.Texture(this.texture, a, h, l)
                }
            }
            r.load()
        } else if (this.json.bones)if (e.AnimCache[this.url])this.onLoaded(); else {
            var d = this.url.substr(0, this.url.lastIndexOf(".")) + ".atlas", p = new e.JsonLoader(d, this.crossorigin), f = this;
            p.onJSONLoaded = function () {
                if (!this.ajaxRequest.responseText)return void this.onError();
                var t = new e.SpineTextureLoader(this.url.substring(0, this.url.lastIndexOf("/"))), r = new i.Atlas(this.ajaxRequest.responseText, t), s = new i.AtlasAttachmentLoader(r), n = new i.SkeletonJson(s), o = n.readSkeletonData(f.json);
                e.AnimCache[f.url] = o, f.spine = o, f.spineAtlas = r, f.spineAtlasLoader = p, t.loadingCount > 0 ? t.addEventListener("loadedBaseTexture", function (t) {
                    t.content.content.loadingCount <= 0 && f.onLoaded()
                }) : f.onLoaded()
            }, p.load()
        } else this.onLoaded()
    },e.JsonLoader.prototype.onLoaded = function () {
        this.loaded = !0, this.dispatchEvent({type: "loaded", content: this})
    },e.JsonLoader.prototype.onError = function () {
        this.dispatchEvent({type: "error", content: this})
    },e.AtlasLoader = function (t, e) {
        this.url = t, this.baseUrl = t.replace(/[^\/]*$/, ""), this.crossorigin = e, this.loaded = !1
    },e.AtlasLoader.constructor = e.AtlasLoader,e.EventTarget.mixin(e.AtlasLoader.prototype),e.AtlasLoader.prototype.load = function () {
        this.ajaxRequest = new e.AjaxRequest, this.ajaxRequest.onreadystatechange = this.onAtlasLoaded.bind(this), this.ajaxRequest.open("GET", this.url, !0), this.ajaxRequest.overrideMimeType && this.ajaxRequest.overrideMimeType("application/json"), this.ajaxRequest.send(null)
    },e.AtlasLoader.prototype.onAtlasLoaded = function () {
        if (4 === this.ajaxRequest.readyState)if (200 === this.ajaxRequest.status || -1 === window.location.href.indexOf("http")) {
            this.atlas = {meta: {image: []}, frames: []};
            var t = this.ajaxRequest.responseText.split(/\r?\n/), i = -3, r = 0, s = null, n = !1, o = 0, a = 0, h = this.onLoaded.bind(this);
            for (o = 0; o < t.length; o++)if (t[o] = t[o].replace(/^\s+|\s+$/g, ""), "" === t[o] && (n = o + 1), t[o].length > 0) {
                if (n === o)this.atlas.meta.image.push(t[o]), r = this.atlas.meta.image.length - 1, this.atlas.frames.push({}), i = -3;
                else if (i > 0)if (i % 7 === 1)null != s && (this.atlas.frames[r][s.name] = s), s = {
                    name: t[o],
                    frame: {}
                }; else {
                    var l = t[o].split(" ");
                    if (i % 7 === 3)s.frame.x = Number(l[1].replace(",", "")), s.frame.y = Number(l[2]); else if (i % 7 === 4)s.frame.w = Number(l[1].replace(",", "")), s.frame.h = Number(l[2]); else if (i % 7 === 5) {
                        var u = {x: 0, y: 0, w: Number(l[1].replace(",", "")), h: Number(l[2])};
                        u.w > s.frame.w || u.h > s.frame.h ? (s.trimmed = !0, s.realSize = u) : s.trimmed = !1
                    }
                }
                i++
            }
            if (null != s && (this.atlas.frames[r][s.name] = s), this.atlas.meta.image.length > 0) {
                for (this.images = [], a = 0; a < this.atlas.meta.image.length; a++) {
                    var c = this.baseUrl + this.atlas.meta.image[a], d = this.atlas.frames[a];
                    this.images.push(new e.ImageLoader(c, this.crossorigin));
                    for (o in d) {
                        var p = d[o].frame;
                        p && (e.TextureCache[o] = new e.Texture(this.images[a].texture.baseTexture, {
                            x: p.x,
                            y: p.y,
                            width: p.w,
                            height: p.h
                        }), d[o].trimmed && (e.TextureCache[o].realSize = d[o].realSize, e.TextureCache[o].trim.x = 0, e.TextureCache[o].trim.y = 0))
                    }
                }
                for (this.currentImageId = 0, a = 0; a < this.images.length; a++)this.images[a].on("loaded", h);
                this.images[this.currentImageId].load()
            } else this.onLoaded()
        } else this.onError()
    },e.AtlasLoader.prototype.onLoaded = function () {
        this.images.length - 1 > this.currentImageId ? (this.currentImageId++, this.images[this.currentImageId].load()) : (this.loaded = !0, this.emit("loaded", {content: this}))
    },e.AtlasLoader.prototype.onError = function () {
        this.emit("error", {content: this})
    },e.SpriteSheetLoader = function (t, e) {
        this.url = t, this.crossorigin = e, this.baseUrl = t.replace(/[^\/]*$/, ""), this.texture = null, this.frames = {}
    },e.SpriteSheetLoader.prototype.constructor = e.SpriteSheetLoader,e.EventTarget.mixin(e.SpriteSheetLoader.prototype),e.SpriteSheetLoader.prototype.load = function () {
        var t = this, i = new e.JsonLoader(this.url, this.crossorigin);
        i.on("loaded", function (e) {
            t.json = e.data.content.json, t.onLoaded()
        }), i.load()
    },e.SpriteSheetLoader.prototype.onLoaded = function () {
        this.emit("loaded", {content: this})
    },e.ImageLoader = function (t, i) {
        this.texture = e.Texture.fromImage(t, i), this.frames = []
    },e.ImageLoader.prototype.constructor = e.ImageLoader,e.EventTarget.mixin(e.ImageLoader.prototype),e.ImageLoader.prototype.load = function () {
        this.texture.baseTexture.hasLoaded ? this.onLoaded() : this.texture.baseTexture.on("loaded", this.onLoaded.bind(this))
    },e.ImageLoader.prototype.onLoaded = function () {
        this.emit("loaded", {content: this})
    },e.ImageLoader.prototype.loadFramedSpriteSheet = function (t, i, r) {
        this.frames = [];
        for (var s = Math.floor(this.texture.width / t), n = Math.floor(this.texture.height / i), o = 0, a = 0; n > a; a++)for (var h = 0; s > h; h++, o++) {
            var l = new e.Texture(this.texture.baseTexture, {x: h * t, y: a * i, width: t, height: i});
            this.frames.push(l), r && (e.TextureCache[r + "-" + o] = l)
        }
        this.load()
    },e.BitmapFontLoader = function (t, e) {
        this.url = t, this.crossorigin = e, this.baseUrl = t.replace(/[^\/]*$/, ""), this.texture = null
    },e.BitmapFontLoader.prototype.constructor = e.BitmapFontLoader,e.EventTarget.mixin(e.BitmapFontLoader.prototype),e.BitmapFontLoader.prototype.load = function () {
        this.ajaxRequest = new e.AjaxRequest, this.ajaxRequest.onreadystatechange = this.onXMLLoaded.bind(this), this.ajaxRequest.open("GET", this.url, !0), this.ajaxRequest.overrideMimeType && this.ajaxRequest.overrideMimeType("application/xml"), this.ajaxRequest.send(null)
    },e.BitmapFontLoader.prototype.onXMLLoaded = function () {
        if (4 === this.ajaxRequest.readyState && (200 === this.ajaxRequest.status || -1 === window.location.protocol.indexOf("http"))) {
            var t = this.ajaxRequest.responseXML;
            if (!t || /MSIE 9/i.test(navigator.userAgent) || navigator.isCocoonJS)if ("function" == typeof window.DOMParser) {
                var i = new DOMParser;
                t = i.parseFromString(this.ajaxRequest.responseText, "text/xml")
            } else {
                var r = document.createElement("div");
                r.innerHTML = this.ajaxRequest.responseText, t = r
            }
            var s = this.baseUrl + t.getElementsByTagName("page")[0].getAttribute("file"), n = new e.ImageLoader(s, this.crossorigin);
            this.texture = n.texture.baseTexture;
            var o = {}, a = t.getElementsByTagName("info")[0], h = t.getElementsByTagName("common")[0];
            o.font = a.getAttribute("face"), o.size = parseInt(a.getAttribute("size"), 10), o.lineHeight = parseInt(h.getAttribute("lineHeight"), 10), o.chars = {};
            for (var l = t.getElementsByTagName("char"), u = 0; u < l.length; u++) {
                var c = parseInt(l[u].getAttribute("id"), 10), d = new e.Rectangle(parseInt(l[u].getAttribute("x"), 10), parseInt(l[u].getAttribute("y"), 10), parseInt(l[u].getAttribute("width"), 10), parseInt(l[u].getAttribute("height"), 10));
                o.chars[c] = {
                    xOffset: parseInt(l[u].getAttribute("xoffset"), 10),
                    yOffset: parseInt(l[u].getAttribute("yoffset"), 10),
                    xAdvance: parseInt(l[u].getAttribute("xadvance"), 10),
                    kerning: {},
                    texture: e.TextureCache[c] = new e.Texture(this.texture, d)
                }
            }
            var p = t.getElementsByTagName("kerning");
            for (u = 0; u < p.length; u++) {
                var f = parseInt(p[u].getAttribute("first"), 10), g = parseInt(p[u].getAttribute("second"), 10), m = parseInt(p[u].getAttribute("amount"), 10);
                o.chars[g].kerning[f] = m
            }
            e.BitmapText.fonts[o.font] = o, n.addEventListener("loaded", this.onLoaded.bind(this)), n.load()
        }
    },e.BitmapFontLoader.prototype.onLoaded = function () {
        this.emit("loaded", {content: this})
    },e.SpineLoader = function (t, e) {
        this.url = t, this.crossorigin = e, this.loaded = !1
    },e.SpineLoader.prototype.constructor = e.SpineLoader,e.EventTarget.mixin(e.SpineLoader.prototype),e.SpineLoader.prototype.load = function () {
        var t = this, i = new e.JsonLoader(this.url, this.crossorigin);
        i.on("loaded", function (e) {
            t.json = e.data.content.json, t.onLoaded()
        }), i.load()
    },e.SpineLoader.prototype.onLoaded = function () {
        this.loaded = !0, this.emit("loaded", {content: this})
    },e.AbstractFilter = function (t, e) {
        this.passes = [this], this.shaders = [], this.dirty = !0, this.padding = 0, this.uniforms = e || {}, this.fragmentSrc = t || []
    },e.AbstractFilter.prototype.constructor = e.AbstractFilter,e.AbstractFilter.prototype.syncUniforms = function () {
        for (var t = 0, e = this.shaders.length; e > t; t++)this.shaders[t].dirty = !0
    },e.AlphaMaskFilter = function (t) {
        e.AbstractFilter.call(this), this.passes = [this], t.baseTexture._powerOf2 = !0, this.uniforms = {
            mask: {
                type: "sampler2D",
                value: t
            }, mapDimensions: {type: "2f", value: {x: 1, y: 5112}}, dimensions: {type: "4fv", value: [0, 0, 0, 0]}
        }, t.baseTexture.hasLoaded ? (this.uniforms.mask.value.x = t.width, this.uniforms.mask.value.y = t.height) : (this.boundLoadedFunction = this.onTextureLoaded.bind(this), t.baseTexture.on("loaded", this.boundLoadedFunction)), this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D mask;", "uniform sampler2D uSampler;", "uniform vec2 offset;", "uniform vec4 dimensions;", "uniform vec2 mapDimensions;", "void main(void) {", "   vec2 mapCords = vTextureCoord.xy;", "   mapCords += (dimensions.zw + offset)/ dimensions.xy ;", "   mapCords.y *= -1.0;", "   mapCords.y += 1.0;", "   mapCords *= dimensions.xy / mapDimensions;", "   vec4 original =  texture2D(uSampler, vTextureCoord);", "   float maskAlpha =  texture2D(mask, mapCords).r;", "   original *= maskAlpha;", "   gl_FragColor =  original;", "}"]
    },e.AlphaMaskFilter.prototype = Object.create(e.AbstractFilter.prototype),e.AlphaMaskFilter.prototype.constructor = e.AlphaMaskFilter,e.AlphaMaskFilter.prototype.onTextureLoaded = function () {
        this.uniforms.mapDimensions.value.x = this.uniforms.mask.value.width, this.uniforms.mapDimensions.value.y = this.uniforms.mask.value.height, this.uniforms.mask.value.baseTexture.off("loaded", this.boundLoadedFunction)
    },Object.defineProperty(e.AlphaMaskFilter.prototype, "map", {
        get: function () {
            return this.uniforms.mask.value
        }, set: function (t) {
            this.uniforms.mask.value = t
        }
    }),e.ColorMatrixFilter = function () {
        e.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
            matrix: {
                type: "mat4",
                value: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
            }
        }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform float invert;", "uniform mat4 matrix;", "uniform sampler2D uSampler;", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vTextureCoord) * matrix;", "}"]
    },e.ColorMatrixFilter.prototype = Object.create(e.AbstractFilter.prototype),e.ColorMatrixFilter.prototype.constructor = e.ColorMatrixFilter,Object.defineProperty(e.ColorMatrixFilter.prototype, "matrix", {
        get: function () {
            return this.uniforms.matrix.value
        }, set: function (t) {
            this.uniforms.matrix.value = t
        }
    }),e.GrayFilter = function () {
        e.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
            gray: {
                type: "1f",
                value: 1
            }
        }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D uSampler;", "uniform float gray;", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vTextureCoord);", "   gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.2126*gl_FragColor.r + 0.7152*gl_FragColor.g + 0.0722*gl_FragColor.b), gray);", "}"]
    },e.GrayFilter.prototype = Object.create(e.AbstractFilter.prototype),e.GrayFilter.prototype.constructor = e.GrayFilter,Object.defineProperty(e.GrayFilter.prototype, "gray", {
        get: function () {
            return this.uniforms.gray.value
        }, set: function (t) {
            this.uniforms.gray.value = t
        }
    }),e.DisplacementFilter = function (t) {
        e.AbstractFilter.call(this), this.passes = [this], t.baseTexture._powerOf2 = !0, this.uniforms = {
            displacementMap: {
                type: "sampler2D",
                value: t
            },
            scale: {type: "2f", value: {x: 30, y: 30}},
            offset: {type: "2f", value: {x: 0, y: 0}},
            mapDimensions: {type: "2f", value: {x: 1, y: 5112}},
            dimensions: {type: "4fv", value: [0, 0, 0, 0]}
        }, t.baseTexture.hasLoaded ? (this.uniforms.mapDimensions.value.x = t.width, this.uniforms.mapDimensions.value.y = t.height) : (this.boundLoadedFunction = this.onTextureLoaded.bind(this), t.baseTexture.on("loaded", this.boundLoadedFunction)), this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D displacementMap;", "uniform sampler2D uSampler;", "uniform vec2 scale;", "uniform vec2 offset;", "uniform vec4 dimensions;", "uniform vec2 mapDimensions;", "void main(void) {", "   vec2 mapCords = vTextureCoord.xy;", "   mapCords += (dimensions.zw + offset)/ dimensions.xy ;", "   mapCords.y *= -1.0;", "   mapCords.y += 1.0;", "   vec2 matSample = texture2D(displacementMap, mapCords).xy;", "   matSample -= 0.5;", "   matSample *= scale;", "   matSample /= mapDimensions;", "   gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x + matSample.x, vTextureCoord.y + matSample.y));", "   gl_FragColor.rgb = mix( gl_FragColor.rgb, gl_FragColor.rgb, 1.0);", "   vec2 cord = vTextureCoord;", "}"]
    },e.DisplacementFilter.prototype = Object.create(e.AbstractFilter.prototype),e.DisplacementFilter.prototype.constructor = e.DisplacementFilter,e.DisplacementFilter.prototype.onTextureLoaded = function () {
        this.uniforms.mapDimensions.value.x = this.uniforms.displacementMap.value.width, this.uniforms.mapDimensions.value.y = this.uniforms.displacementMap.value.height, this.uniforms.displacementMap.value.baseTexture.off("loaded", this.boundLoadedFunction)
    },Object.defineProperty(e.DisplacementFilter.prototype, "map", {
        get: function () {
            return this.uniforms.displacementMap.value
        }, set: function (t) {
            this.uniforms.displacementMap.value = t
        }
    }),Object.defineProperty(e.DisplacementFilter.prototype, "scale", {
        get: function () {
            return this.uniforms.scale.value
        }, set: function (t) {
            this.uniforms.scale.value = t
        }
    }),Object.defineProperty(e.DisplacementFilter.prototype, "offset", {
        get: function () {
            return this.uniforms.offset.value
        }, set: function (t) {
            this.uniforms.offset.value = t
        }
    }),e.PixelateFilter = function () {
        e.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
            invert: {type: "1f", value: 0},
            dimensions: {type: "4fv", value: new e.Float32Array([1e4, 100, 10, 10])},
            pixelSize: {type: "2f", value: {x: 10, y: 10}}
        }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform vec2 testDim;", "uniform vec4 dimensions;", "uniform vec2 pixelSize;", "uniform sampler2D uSampler;", "void main(void) {", "   vec2 coord = vTextureCoord;", "   vec2 size = dimensions.xy/pixelSize;", "   vec2 color = floor( ( vTextureCoord * size ) ) / size + pixelSize/dimensions.xy * 0.5;", "   gl_FragColor = texture2D(uSampler, color);", "}"]
    },e.PixelateFilter.prototype = Object.create(e.AbstractFilter.prototype),e.PixelateFilter.prototype.constructor = e.PixelateFilter,Object.defineProperty(e.PixelateFilter.prototype, "size", {
        get: function () {
            return this.uniforms.pixelSize.value
        }, set: function (t) {
            this.dirty = !0, this.uniforms.pixelSize.value = t
        }
    }),e.BlurXFilter = function () {
        e.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
            blur: {
                type: "1f",
                value: 1 / 512
            }
        }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform float blur;", "uniform sampler2D uSampler;", "void main(void) {", "   vec4 sum = vec4(0.0);", "   sum += texture2D(uSampler, vec2(vTextureCoord.x - 4.0*blur, vTextureCoord.y)) * 0.05;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x - 3.0*blur, vTextureCoord.y)) * 0.09;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x - 2.0*blur, vTextureCoord.y)) * 0.12;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x - blur, vTextureCoord.y)) * 0.15;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y)) * 0.16;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x + blur, vTextureCoord.y)) * 0.15;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x + 2.0*blur, vTextureCoord.y)) * 0.12;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x + 3.0*blur, vTextureCoord.y)) * 0.09;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x + 4.0*blur, vTextureCoord.y)) * 0.05;", "   gl_FragColor = sum;", "}"]
    },e.BlurXFilter.prototype = Object.create(e.AbstractFilter.prototype),e.BlurXFilter.prototype.constructor = e.BlurXFilter,Object.defineProperty(e.BlurXFilter.prototype, "blur", {
        get: function () {
            return this.uniforms.blur.value / (1 / 7e3)
        }, set: function (t) {
            this.dirty = !0, this.uniforms.blur.value = 1 / 7e3 * t
        }
    }),e.BlurYFilter = function () {
        e.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
            blur: {
                type: "1f",
                value: 1 / 512
            }
        }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform float blur;", "uniform sampler2D uSampler;", "void main(void) {", "   vec4 sum = vec4(0.0);", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - 4.0*blur)) * 0.05;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - 3.0*blur)) * 0.09;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - 2.0*blur)) * 0.12;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y - blur)) * 0.15;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y)) * 0.16;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + blur)) * 0.15;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + 2.0*blur)) * 0.12;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + 3.0*blur)) * 0.09;", "   sum += texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y + 4.0*blur)) * 0.05;", "   gl_FragColor = sum;", "}"]
    },e.BlurYFilter.prototype = Object.create(e.AbstractFilter.prototype),e.BlurYFilter.prototype.constructor = e.BlurYFilter,Object.defineProperty(e.BlurYFilter.prototype, "blur", {
        get: function () {
            return this.uniforms.blur.value / (1 / 7e3)
        }, set: function (t) {
            this.uniforms.blur.value = 1 / 7e3 * t
        }
    }),e.BlurFilter = function () {
        this.blurXFilter = new e.BlurXFilter, this.blurYFilter = new e.BlurYFilter, this.passes = [this.blurXFilter, this.blurYFilter]
    },e.BlurFilter.prototype = Object.create(e.AbstractFilter.prototype),e.BlurFilter.prototype.constructor = e.BlurFilter,Object.defineProperty(e.BlurFilter.prototype, "blur", {
        get: function () {
            return this.blurXFilter.blur
        }, set: function (t) {
            this.blurXFilter.blur = this.blurYFilter.blur = t
        }
    }),Object.defineProperty(e.BlurFilter.prototype, "blurX", {
        get: function () {
            return this.blurXFilter.blur
        }, set: function (t) {
            this.blurXFilter.blur = t
        }
    }),Object.defineProperty(e.BlurFilter.prototype, "blurY", {
        get: function () {
            return this.blurYFilter.blur
        }, set: function (t) {
            this.blurYFilter.blur = t
        }
    }),e.InvertFilter = function () {
        e.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
            invert: {
                type: "1f",
                value: 1
            }
        }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform float invert;", "uniform sampler2D uSampler;", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vTextureCoord);", "   gl_FragColor.rgb = mix( (vec3(1)-gl_FragColor.rgb) * gl_FragColor.a, gl_FragColor.rgb, 1.0 - invert);", "}"]
    },e.InvertFilter.prototype = Object.create(e.AbstractFilter.prototype),e.InvertFilter.prototype.constructor = e.InvertFilter,Object.defineProperty(e.InvertFilter.prototype, "invert", {
        get: function () {
            return this.uniforms.invert.value
        }, set: function (t) {
            this.uniforms.invert.value = t
        }
    }),e.SepiaFilter = function () {
        e.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
            sepia: {
                type: "1f",
                value: 1
            }
        }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform float sepia;", "uniform sampler2D uSampler;", "const mat3 sepiaMatrix = mat3(0.3588, 0.7044, 0.1368, 0.2990, 0.5870, 0.1140, 0.2392, 0.4696, 0.0912);", "void main(void) {", "   gl_FragColor = texture2D(uSampler, vTextureCoord);", "   gl_FragColor.rgb = mix( gl_FragColor.rgb, gl_FragColor.rgb * sepiaMatrix, sepia);", "}"]
    },e.SepiaFilter.prototype = Object.create(e.AbstractFilter.prototype),e.SepiaFilter.prototype.constructor = e.SepiaFilter,Object.defineProperty(e.SepiaFilter.prototype, "sepia", {
        get: function () {
            return this.uniforms.sepia.value
        }, set: function (t) {
            this.uniforms.sepia.value = t
        }
    }),e.TwistFilter = function () {
        e.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
            radius: {type: "1f", value: .5},
            angle: {type: "1f", value: 5},
            offset: {type: "2f", value: {x: .5, y: .5}}
        }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform vec4 dimensions;", "uniform sampler2D uSampler;", "uniform float radius;", "uniform float angle;", "uniform vec2 offset;", "void main(void) {", "   vec2 coord = vTextureCoord - offset;", "   float distance = length(coord);", "   if (distance < radius) {", "       float ratio = (radius - distance) / radius;", "       float angleMod = ratio * ratio * angle;", "       float s = sin(angleMod);", "       float c = cos(angleMod);", "       coord = vec2(coord.x * c - coord.y * s, coord.x * s + coord.y * c);", "   }", "   gl_FragColor = texture2D(uSampler, coord+offset);", "}"]
    },e.TwistFilter.prototype = Object.create(e.AbstractFilter.prototype),e.TwistFilter.prototype.constructor = e.TwistFilter,Object.defineProperty(e.TwistFilter.prototype, "offset", {
        get: function () {
            return this.uniforms.offset.value
        }, set: function (t) {
            this.dirty = !0, this.uniforms.offset.value = t
        }
    }),Object.defineProperty(e.TwistFilter.prototype, "radius", {
        get: function () {
            return this.uniforms.radius.value
        }, set: function (t) {
            this.dirty = !0, this.uniforms.radius.value = t
        }
    }),Object.defineProperty(e.TwistFilter.prototype, "angle", {
        get: function () {
            return this.uniforms.angle.value
        }, set: function (t) {
            this.dirty = !0, this.uniforms.angle.value = t
        }
    }),e.ColorStepFilter = function () {
        e.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
            step: {
                type: "1f",
                value: 5
            }
        }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D uSampler;", "uniform float step;", "void main(void) {", "   vec4 color = texture2D(uSampler, vTextureCoord);", "   color = floor(color * step) / step;", "   gl_FragColor = color;", "}"]
    },e.ColorStepFilter.prototype = Object.create(e.AbstractFilter.prototype),e.ColorStepFilter.prototype.constructor = e.ColorStepFilter,Object.defineProperty(e.ColorStepFilter.prototype, "step", {
        get: function () {
            return this.uniforms.step.value
        }, set: function (t) {
            this.uniforms.step.value = t
        }
    }),e.DotScreenFilter = function () {
        e.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
            scale: {type: "1f", value: 1},
            angle: {type: "1f", value: 5},
            dimensions: {type: "4fv", value: [0, 0, 0, 0]}
        }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform vec4 dimensions;", "uniform sampler2D uSampler;", "uniform float angle;", "uniform float scale;", "float pattern() {", "   float s = sin(angle), c = cos(angle);", "   vec2 tex = vTextureCoord * dimensions.xy;", "   vec2 point = vec2(", "       c * tex.x - s * tex.y,", "       s * tex.x + c * tex.y", "   ) * scale;", "   return (sin(point.x) * sin(point.y)) * 4.0;", "}", "void main() {", "   vec4 color = texture2D(uSampler, vTextureCoord);", "   float average = (color.r + color.g + color.b) / 3.0;", "   gl_FragColor = vec4(vec3(average * 10.0 - 5.0 + pattern()), color.a);", "}"]
    },e.DotScreenFilter.prototype = Object.create(e.AbstractFilter.prototype),e.DotScreenFilter.prototype.constructor = e.DotScreenFilter,Object.defineProperty(e.DotScreenFilter.prototype, "scale", {
        get: function () {
            return this.uniforms.scale.value
        }, set: function (t) {
            this.dirty = !0, this.uniforms.scale.value = t
        }
    }),Object.defineProperty(e.DotScreenFilter.prototype, "angle", {
        get: function () {
            return this.uniforms.angle.value
        }, set: function (t) {
            this.dirty = !0, this.uniforms.angle.value = t
        }
    }),e.CrossHatchFilter = function () {
        e.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
            blur: {
                type: "1f",
                value: 1 / 512
            }
        }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform float blur;", "uniform sampler2D uSampler;", "void main(void) {", "    float lum = length(texture2D(uSampler, vTextureCoord.xy).rgb);", "    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);", "    if (lum < 1.00) {", "        if (mod(gl_FragCoord.x + gl_FragCoord.y, 10.0) == 0.0) {", "            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);", "        }", "    }", "    if (lum < 0.75) {", "        if (mod(gl_FragCoord.x - gl_FragCoord.y, 10.0) == 0.0) {", "            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);", "        }", "    }", "    if (lum < 0.50) {", "        if (mod(gl_FragCoord.x + gl_FragCoord.y - 5.0, 10.0) == 0.0) {", "            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);", "        }", "    }", "    if (lum < 0.3) {", "        if (mod(gl_FragCoord.x - gl_FragCoord.y - 5.0, 10.0) == 0.0) {", "            gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);", "        }", "    }", "}"]
    },e.CrossHatchFilter.prototype = Object.create(e.AbstractFilter.prototype),e.CrossHatchFilter.prototype.constructor = e.CrossHatchFilter,Object.defineProperty(e.CrossHatchFilter.prototype, "blur", {
        get: function () {
            return this.uniforms.blur.value / (1 / 7e3)
        }, set: function (t) {
            this.uniforms.blur.value = 1 / 7e3 * t
        }
    }),e.RGBSplitFilter = function () {
        e.AbstractFilter.call(this), this.passes = [this], this.uniforms = {
            red: {type: "2f", value: {x: 20, y: 20}},
            green: {type: "2f", value: {x: -20, y: 20}},
            blue: {type: "2f", value: {x: 20, y: -20}},
            dimensions: {type: "4fv", value: [0, 0, 0, 0]}
        }, this.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform vec2 red;", "uniform vec2 green;", "uniform vec2 blue;", "uniform vec4 dimensions;", "uniform sampler2D uSampler;", "void main(void) {", "   gl_FragColor.r = texture2D(uSampler, vTextureCoord + red/dimensions.xy).r;", "   gl_FragColor.g = texture2D(uSampler, vTextureCoord + green/dimensions.xy).g;", "   gl_FragColor.b = texture2D(uSampler, vTextureCoord + blue/dimensions.xy).b;", "   gl_FragColor.a = texture2D(uSampler, vTextureCoord).a;", "}"]
    },e.RGBSplitFilter.prototype = Object.create(e.AbstractFilter.prototype),e.RGBSplitFilter.prototype.constructor = e.RGBSplitFilter,Object.defineProperty(e.RGBSplitFilter.prototype, "red", {
        get: function () {
            return this.uniforms.red.value
        }, set: function (t) {
            this.uniforms.red.value = t
        }
    }),Object.defineProperty(e.RGBSplitFilter.prototype, "green", {
        get: function () {
            return this.uniforms.green.value
        }, set: function (t) {
            this.uniforms.green.value = t
        }
    }),Object.defineProperty(e.RGBSplitFilter.prototype, "blue", {
        get: function () {
            return this.uniforms.blue.value
        }, set: function (t) {
            this.uniforms.blue.value = t
        }
    }),"undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = e), exports.PIXI = e) : "undefined" != typeof define && define.amd ? define(e) : t.PIXI = e
}).call(this);
(function () {
    var n, e, o, t, i, r, d, a, c, l;
    e = window.device, n = {}, window.device = n, t = window.document.documentElement, l = window.navigator.userAgent.toLowerCase(), n.ios = function () {
        return n.iphone() || n.ipod() || n.ipad()
    }, n.iphone = function () {
        return i("iphone")
    }, n.ipod = function () {
        return i("ipod")
    }, n.ipad = function () {
        return i("ipad")
    }, n.android = function () {
        return i("android")
    }, n.androidPhone = function () {
        return n.android() && i("mobile")
    }, n.androidTablet = function () {
        return n.android() && !i("mobile")
    }, n.blackberry = function () {
        return i("blackberry") || i("bb10") || i("rim")
    }, n.blackberryPhone = function () {
        return n.blackberry() && !i("tablet")
    }, n.blackberryTablet = function () {
        return n.blackberry() && i("tablet")
    }, n.windows = function () {
        return i("windows")
    }, n.windowsPhone = function () {
        return n.windows() && i("phone")
    }, n.windowsTablet = function () {
        return n.windows() && i("touch") && !n.windowsPhone()
    }, n.fxos = function () {
        return (i("(mobile;") || i("(tablet;")) && i("; rv:")
    }, n.fxosPhone = function () {
        return n.fxos() && i("mobile")
    }, n.fxosTablet = function () {
        return n.fxos() && i("tablet")
    }, n.meego = function () {
        return i("meego")
    }, n.cordova = function () {
        return window.cordova && "file:" === location.protocol
    }, n.nodeWebkit = function () {
        return "object" == typeof window.process
    }, n.mobile = function () {
        return n.androidPhone() || n.iphone() || n.ipod() || n.windowsPhone() || n.blackberryPhone() || n.fxosPhone() || n.meego()
    }, n.tablet = function () {
        return n.ipad() || n.androidTablet() || n.blackberryTablet() || n.windowsTablet() || n.fxosTablet()
    }, n.desktop = function () {
        return !n.tablet() && !n.mobile()
    }, n.safari = function () {
        return -1 !== l.indexOf("safari")
    }, n.chrome = function () {
        return -1 !== l.indexOf("chrome")
    }, n.television = function () {
        var n;
        for (television = ["googletv", "viera", "smarttv", "internet.tv", "netcast", "nettv", "appletv", "boxee", "kylo", "roku", "dlnadoc", "roku", "pov_tv", "hbbtv", "ce-html"], n = 0; n < television.length;) {
            if (i(television[n]))return !0;
            n++
        }
        return !1
    }, n.portrait = function () {
        return window.innerHeight / window.innerWidth > 1
    }, n.landscape = function () {
        return window.innerHeight / window.innerWidth < 1
    }, n.noConflict = function () {
        return window.device = e, this
    }, i = function (n) {
        return -1 !== l.indexOf(n)
    }, d = function (n) {
        var e;
        return e = new RegExp(n, "i"), t.className.match(e)
    }, o = function (n) {
        d(n) || (t.className = t.className.trim() + " " + n)
    }, c = function (n) {
        d(n) && (t.className = t.className.replace(" " + n, ""))
    }, n.ios() ? n.ipad() ? o("ios ipad tablet") : n.iphone() ? o("ios iphone mobile") : n.ipod() && o("ios ipod mobile") : n.android() ? o(n.androidTablet() ? "android tablet" : "android mobile") : n.blackberry() ? o(n.blackberryTablet() ? "blackberry tablet" : "blackberry mobile") : n.windows() ? o(n.windowsTablet() ? "windows tablet" : n.windowsPhone() ? "windows mobile" : "desktop") : n.fxos() ? o(n.fxosTablet() ? "fxos tablet" : "fxos mobile") : n.meego() ? o("meego mobile") : n.nodeWebkit() ? o("node-webkit") : n.television() ? o("television") : n.desktop() && o("desktop"), n.cordova() && o("cordova"), r = function () {
        n.landscape() ? (c("portrait"), o("landscape")) : (c("landscape"), o("portrait"))
    }, a = window.hasOwnProperty("onorientationchange") ? "orientationchange" : "resize", window.addEventListener ? window.addEventListener(a, r, !1) : window.attachEvent ? window.attachEvent(a, r) : window[a] = r, r(), "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function () {
        return n
    }) : "undefined" != typeof module && module.exports ? module.exports = n : window.device = n
}).call(this);
Array.prototype.indexOf || (Array.prototype.indexOf = function (t, e) {
    if (void 0 === this || null === this)throw new TypeError('"this" is null or not defined');
    var n = this.length >>> 0;
    for (e = +e || 0, 1 / 0 === Math.abs(e) && (e = 0), 0 > e && (e += n, 0 > e && (e = 0)); n > e; e++)if (this[e] === t)return e;
    return -1
}), !window.addEventListener && function (t, e, n, r, i, o, a) {
    t[r] = e[r] = n[r] = function (t, e) {
        var n = this;
        a.unshift([n, t, e, function (t) {
            t.currentTarget = n, t.preventDefault = function () {
                t.returnValue = !1
            }, t.stopPropagation = function () {
                t.cancelBubble = !0
            }, t.target = t.srcElement || n, e.call(n, t)
        }]), this.attachEvent("on" + t, a[0][3])
    }, t[i] = e[i] = n[i] = function (t, e) {
        for (var n, r = 0; n = a[r]; ++r)if (n[0] == this && n[1] == t && n[2] == e)return this.detachEvent("on" + t, a.splice(r, 1)[0][3])
    }, t[o] = e[o] = n[o] = function (t) {
        return this.fireEvent("on" + t.type, t)
    }
}(Window.prototype, HTMLDocument.prototype, Element.prototype, "addEventListener", "removeEventListener", "dispatchEvent", []), window.matchMedia || (window.matchMedia = function () {
    "use strict";
    var t = window.styleMedia || window.media;
    if (!t) {
        var e = document.createElement("style"), n = document.getElementsByTagName("script")[0], r = null;
        e.type = "text/css", e.id = "matchmediajs-test", n.parentNode.insertBefore(e, n), r = "getComputedStyle"in window && window.getComputedStyle(e, null) || e.currentStyle, t = {
            matchMedium: function (t) {
                var n = "@media " + t + "{ #matchmediajs-test { width: 1px; } }";
                return e.styleSheet ? e.styleSheet.cssText = n : e.textContent = n, "1px" === r.width
            }
        }
    }
    return function (e) {
        return {matches: t.matchMedium(e || "all"), media: e || "all"}
    }
}()), "undefined" == typeof document || "classList"in document.documentElement || !function (t) {
    "use strict";
    if ("HTMLElement"in t || "Element"in t) {
        var e = "classList", n = "prototype", r = (t.HTMLElement || t.Element)[n], i = Object, o = String[n].trim || function () {
                return this.replace(/^\s+|\s+$/g, "")
            }, a = function (t, e) {
            this.name = t, this.code = DOMException[t], this.message = e
        }, u = function (t, e) {
            if ("" === e)throw new a("SYNTAX_ERR", "An invalid or illegal string was specified");
            if (/\s/.test(e))throw new a("INVALID_CHARACTER_ERR", "String contains an invalid character");
            return Array[n].indexOf.call(t, e)
        }, h = function (t) {
            for (var e = o.call(t.className), n = e ? e.split(/\s+/) : [], r = 0, i = n.length; i > r; r++)this.push(n[r]);
            this._updateClassName = function () {
                t.className = this.toString()
            }
        }, c = h[n] = [], s = function () {
            return new h(this)
        };
        if (a[n] = Error[n], c.item = function (t) {
                return this[t] || null
            }, c.contains = function (t) {
                return t += "", -1 !== u(this, t)
            }, c.add = function () {
                var t, e = arguments, n = 0, r = e.length, i = !1;
                do t = e[n] + "", -1 === u(this, t) && (this.push(t), i = !0); while (++n < r);
                i && this._updateClassName()
            }, c.remove = function () {
                var t, e = arguments, n = 0, r = e.length, i = !1;
                do {
                    t = e[n] + "";
                    var o = u(this, t);
                    -1 !== o && (this.splice(o, 1), i = !0)
                } while (++n < r);
                i && this._updateClassName()
            }, c.toggle = function (t, e) {
                t += "";
                var n = this.contains(t), r = n ? e !== !0 && "remove" : e !== !1 && "add";
                return r && this[r](t), !n
            }, c.toString = function () {
                return this.join(" ")
            }, i.defineProperty) {
            var l = {get: s, enumerable: !0, configurable: !0};
            try {
                i.defineProperty(r, e, l)
            } catch (f) {
                -2146823252 === f.number && (l.enumerable = !1, i.defineProperty(r, e, l))
            }
        } else i[n].__defineGetter__ && r.__defineGetter__(e, s)
    }
}(self), Object.create || (Object.create = function () {
    function t() {
    }

    return function (e) {
        if (1 != arguments.length)throw new Error("Object.create implementation only accepts one parameter");
        return t.prototype = e, new t
    }
}()), Function.prototype.bind || (Function.prototype.bind = function (t) {
    if ("function" != typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
    var e = Array.prototype.slice.call(arguments, 1), n = this, r = function () {
    }, i = function () {
        return n.apply(this instanceof r && t ? this : t, e.concat(Array.prototype.slice.call(arguments)))
    };
    return r.prototype = this.prototype, i.prototype = new r, i
}), Date.now || (Date.now = function () {
    return (new Date).getTime()
}), "function" != typeof Array.prototype.reduce && (Array.prototype.reduce = function (t) {
    "use strict";
    if (null === this || "undefined" == typeof this)throw new TypeError("Array.prototype.reduce called on null or undefined");
    if ("function" != typeof t)throw new TypeError(t + " is not a function");
    var e, n = Object(this), r = n.length >>> 0, i = 0;
    if (arguments.length >= 2)e = arguments[1]; else {
        for (; r > i && !i in n;)i++;
        if (i >= r)throw new TypeError("Reduce of empty array with no initial value");
        e = n[i++]
    }
    for (; r > i; i++)i in n && (e = t(e, n[i], i, n));
    return e
}), Math.sign || (Math.sign = function (t) {
    return t = Number(t), t ? 0 > t ? -1 : 1 : t === t ? t : 0 / 0
}), Math.log2 || (Math.log2 = function (t) {
    return Math.log(t) / Math.LN2
}), Math.trunc || (Math.trunc = function (t) {
    return 0 > t ? Math.ceil(t) : Math.floor(t)
}), Math.tanh || (Math.tanh = function (t) {
    if (1 / 0 === t)return 1;
    if (t === -1 / 0)return -1;
    var e = Math.exp(2 * t);
    return (e - 1) / (e + 1)
}), Math.sinh || (Math.sinh = function (t) {
    var e = Math.exp(t);
    return (e - 1 / e) / 2
}), Math.log1p || (Math.log1p = function (t) {
    return Math.log(1 + t)
}), Math.log10 || (Math.log10 = function (t) {
    return Math.log(t) / Math.LN10
}), Math.imul || (Math.imul = function (t, e) {
    var n = t >>> 16 & 65535, r = 65535 & t, i = e >>> 16 & 65535, o = 65535 & e;
    return r * o + (n * o + r * i << 16 >>> 0) | 0
}), Math.hypot || (Math.hypot = function () {
    for (var t, e = 0, n = arguments.length; n--;) {
        if (t = arguments[n], 1 / 0 === t || t === -1 / 0)return 1 / 0;
        e += t * t
    }
    return Math.sqrt(e)
}), Math.fround || (Math.fround = function (t) {
    var e = new Float32Array(1);
    return e[0] = t, e[0]
}), Math.expm1 || (Math.expm1 = function (t) {
    return Math.exp(t) - 1
}), Math.cosh || (Math.cosh = function (t) {
    var e = Math.exp(t);
    return (e + 1 / e) / 2
}), Math.clz32 || (Math.clz32 = function (t) {
    return t = Number(t) >>> 0, t ? 32 - t.toString(2).length : 32
}), Math.cbrt || (Math.cbrt = function (t) {
    var e = Math.pow(Math.abs(t), 1 / 3);
    return 0 > t ? -e : e
}), Math.atanh || (Math.atanh = function (t) {
    return Math.log((1 + t) / (1 - t)) / 2
}), Math.asinh || (Math.asinh = function (t) {
    return t === -1 / 0 ? t : Math.log(t + Math.sqrt(t * t + 1))
}), Math.acosh || (Math.acosh = function (t) {
    return Math.log(t + Math.sqrt(t * t - 1))
});
!function () {
    "use strict";
    function e(e, n) {
        return e.replace(/{module}/g, n)
    }

    function n(n, t, r) {
        function o(n) {
            this.message = r ? e(r, n) : n
        }

        return o.prototype = Object.create(n.prototype), o.prototype.name = t, o.prototype.constructor = o, o
    }

    function t(e, n) {
        return new (Function.prototype.bind.apply(e, [{}].concat(n)))
    }

    function r(e, n) {
        if (arguments.length < 1 || arguments.length > 2 || "string" != typeof e)throw new M("`require()` accepts only one or two arguments");
        var o, i = e.split("."), u = i[0], s = i[1];
        if (n) {
            if (!(e in g))throw new _(e);
            for (var a = [], l = 0; l < g[e].dependencies.length; l++) {
                var f = g[e].dependencies[l];
                a.push(f in n ? n[f] : r(f))
            }
            o = t(g[e].constructor, a)
        } else o = c[u];
        if (o) {
            if ("undefined" == typeof s)return o;
            if (s in o)return o[s]
        }
        throw new _(e)
    }

    function o(e) {
        var n, i = [];
        if (arguments.length < 2 || arguments.length > 3)throw new h("`define()` accepts only two or three arguments");
        if ("string" != typeof e)throw new y(e);
        if (!p.test(e)) {
            var u = r("settings"), s = u("ALIASES", {});
            if (e in s) {
                var a = [s[e]].concat(Array.prototype.slice.call(arguments, 1));
                return o.apply(void 0, a)
            }
            throw new y(e)
        }
        if (e in c && "settings" !== e || m && "settings" === e)throw new E(e);
        if (n = arguments[arguments.length - 1], 3 === arguments.length) {
            if ("function" != typeof n)throw new w("redundant dependecies specified when module is not a function");
            i = arguments[1]
        }
        if ("function" == typeof n) {
            g[e] = {constructor: n, dependencies: i};
            for (var l = [], f = 0; f < i.length; f++)l.push(r(i[f]));
            n = t(n, l)
        }
        if (arguments.length < 2 || "undefined" == typeof n)throw new v(e);
        if ("settings" === e) {
            m = !0;
            for (var d in n)d in c._settings || (c._settings[d] = n[d])
        } else c[e] = n
    }

    function i(e) {
        var n = /^\s*function\s+([^\s\(]+).*/i, t = String(e), r = n.exec(t);
        return 2 === r.length ? r[1] : null
    }

    function u() {
        for (var e, n = {}, t = 0; t < arguments.length; t++) {
            if ("function" != typeof arguments[t])throw new TypeError("argument " + (t + 1) + " is not a function");
            if (e = i(arguments[t]), null === e)throw new Error("couldn't get function name for argument " + (t + 1));
            n[e] = arguments[t]
        }
        return n
    }

    function s(e, n) {
        if (arguments.length < 1 || arguments.length > 2)throw new TypeError("settings getter accepts only one or two arguments");
        var t = c._settings || {};
        return e in t ? t[e] : n
    }

    function a(e) {
        e = e || {};
        var n = f.document.querySelectorAll(d);
        if (n.length > 1)throw new w("multiple settings defined in HTML, only one `<script>` tag with settings is allowed");
        if (n.length) {
            try {
                var t = f.JSON.parse(n[0].innerHTML)
            } catch (r) {
                if (r instanceof SyntaxError)throw new w("invalid syntax in the HTML settings: " + r.message);
                throw r
            }
            for (var o in t)e[o] = t[o]
        }
        return e
    }

    function l(e, n, t) {
        var r = c;
        return f = t || window, m = !1, o._constructors = g = n || {}, o._modules = c = e || {
            settings: s,
            _settings: {}
        }, c._settings = a(), r
    }

    var f, d = 'script[type="application/vnd.nebula-settings+json"]', c = {}, g = {}, p = /^[a-z0-9_]+(?:\/[a-z0-9_]+)*$/, m = !1, w = n(TypeError, "define.Error"), h = n(w, "define.ArgumentCountError"), y = n(w, "define.InvalidModuleNameError", "module name '{module}' is invalid, allowed characters: a-z, 0-9, _ and /"), v = n(w, "define.InvalidModuleError", "module '{module}' doesn't export any definitions"), E = n(w, "define.DuplicateModuleError", "module '{module}' is already defined"), _ = n(TypeError, "require.Error", "no module named '{module}'"), M = n(_, "require.ArgumentsError");
    r.Error = _, r.ArgumentsError = M, o.Error = w, o.ArgumentCountError = h, o.InvalidModuleNameError = y, o.InvalidModuleError = v, o.DuplicateModuleError = E, o.functions = u, o.amd = {jQuery: !0}, o._init = l, o._modules = c, o._constructors = g, window.define = o, window.require = r, l(null, null, window)
}();
define("settings", {
    JQUERY_NO_CONFLICT: !0,
    VIEWPORTS: {
        320: [0, 479],
        480: [480, 719],
        720: [720, 959],
        960: [960, 1279],
        1280: [1280, 1599],
        1600: [1600, 1919],
        1920: [1920, 1 / 0]
    },
    SMART_BLOCKS: {}
});
define("jquery", ["settings"], function (e) {
    "use strict";
    var r = window.jQuery;
    if ("undefined" == typeof r)throw new Error("The jQuery library was not loaded.");
    return e("JQUERY_NO_CONFLICT") && r.noConflict(!0), r
});
define("pixi", function () {
    "use strict";
    var e = window.PIXI;
    if ("undefined" == typeof e)throw new Error("The PIXI library was not loaded.");
    delete window.PIXI;
    var o = e.JsonLoader.prototype.onJSONLoaded;
    return e.JsonLoader.prototype.onJSONLoaded = function () {
        return this.ajaxRequest.responseText ? (this.json = JSON.parse(this.ajaxRequest.responseText), void(this.json.bones ? (e.AnimCache[this.url] = this.json, this.onLoaded()) : o.apply(this, arguments))) : void this.onError()
    }, e
});
define("nebula/window", function () {
    "use strict";
    return window
});
define("nebula/signal", function () {
    "use strict";
    function e() {
        var e = "function" == typeof arguments[0] ? {receiver: arguments[0]} : arguments[0];
        if ("function" != typeof e.receiver)throw new Error("can't connect receiver to a signal, receiver is not a function");
        for (var r = 0; r < this.receivers.length; r++)if (this.receivers[r].receiver === e.receiver && this.receivers[r].context === e.context && this.receivers[r].sender === e.sender)throw new Error("can't connect receiver to a signal, this receiver with same context and same sender is already connected");
        this.receivers.push({receiver: e.receiver, sender: e.sender, context: e.context})
    }

    function r() {
        for (var e = "function" == typeof arguments[0] ? arguments[0] : arguments[0].receiver, r = 0; r < this.receivers.length; r++)if (this.receivers[r].receiver === e)return void this.receivers.splice(r, 1)
    }

    function n(e) {
        for (var r = 0; r < this.receivers.length; r++) {
            var n = this.receivers[r];
            ("undefined" == typeof n.sender || n.sender === e) && n.receiver.apply(n.context, arguments)
        }
    }

    function t() {
        function t() {
            e.apply(t, arguments)
        }

        return t.receivers = [], t.connect = e.bind(t), t.disconnect = r.bind(t), t.send = n.bind(t), t
    }

    return t
});
define("nebula/viewport", ["nebula/window", "settings", "nebula/signal"], function (e, t, n) {
    "use strict";
    function r(t) {
        if ("function" == typeof t)return t();
        if (t instanceof Array && 2 === t.length && "number" == typeof t[0] && "number" == typeof t[1] && t[0] <= t[1])return t[0] <= f() && f() <= t[1];
        if ("string" == typeof t) {
            if (!e.matchMedia)throw new Error("matchMedia is not available in this browser, please add a polyfill");
            return e.matchMedia(t).matches
        }
        throw new Error("Invalid viewport specification: " + t)
    }

    function i(n) {
        if (n !== E) {
            if (t("VIEWPORT_ORIENTATION_CLASS", !0)) {
                var r = t("VIEWPORT_CLASS_PREFIX", "viewport-");
                e.document.body.classList.remove(r + (E ? "portrait" : "landscape")), e.document.body.classList.add(r + (n ? "portrait" : "landscape"))
            }
            E = n
        }
    }

    function o(n) {
        var r = m || null;
        if (n !== m) {
            var i = t("VIEWPORT_CLASS_PREFIX", "viewport-");
            m && e.document.body.classList.remove(i + m), n && e.document.body.classList.add(i + n), m = n, b.send(r, m)
        }
    }

    function a() {
        var e = t("VIEWPORTS", {}), n = null;
        for (var a in e)if (r(e[a])) {
            n = a;
            break
        }
        o(n), i(l() >= f())
    }

    function u(e) {
        var n = t("VIEWPORTS", {});
        if (e in n)return e === m;
        throw new Error("Unknown viewport alias: " + e)
    }

    function s(e) {
        if (!h())throw new Error("You must call `viewport.enable()` first to use `viewport.is()`");
        e = e.split(" ");
        for (var t = 0; t < e.length; t++)if (u(e[t]))return !0;
        return !1
    }

    function c() {
        if (!h())throw new Error("You must call `viewport.enable()` first to use `viewport.get()`");
        return m
    }

    function f() {
        return e.innerWidth || e.document.documentElement.clientWidth
    }

    function l() {
        return e.innerHeight || e.document.documentElement.clientHeight
    }

    function d() {
        if (!h())throw new Error("You must call `viewport.enable()` first to use `viewport.isPortrait()`");
        return E
    }

    function w() {
        if (!h())throw new Error("You must call `viewport.enable()` first to use `viewport.isLandscape()`");
        return !E
    }

    function v() {
        a(), e.addEventListener("resize", a)
    }

    function p() {
        e.removeEventListener("resize", a), m = E = void 0
    }

    function h() {
        return "undefined" != typeof m
    }

    var m = void 0, E = void 0, b = new n;
    return {
        _changeOrientation: i,
        _changeViewport: o,
        _check: r,
        _update: a,
        width: f,
        height: l,
        is: s,
        get: c,
        isPortrait: d,
        isLandscape: w,
        onChange: b,
        enable: v,
        disable: p,
        isEnabled: h
    }
});
define("nebula/smart_blocks", ["nebula/window", "settings", "nebula/signal", "nebula/viewport"], function (e, n, t, r) {
    "use strict";
    function i(e, n) {
        if ("function" == typeof n)return n(e);
        if (n instanceof Array && (2 == n.length || 3 == n.length && "self" === n[2]) && "number" == typeof n[0] && "number" == typeof n[1] && n[0] <= n[1]) {
            var t = "self" === n[2] ? e.offsetWidth : e.parentNode.offsetWidth;
            return n[0] <= t && t <= n[1]
        }
        if ("string" == typeof n)return r.is(n);
        throw new Error("Invalid smart blocks args: " + n)
    }

    function o(e, n, t) {
        var r = !1;
        for (var o in n) {
            var s = e.classList.contains(o);
            i(e, n[o]) ? s || (e.classList.add(o), r = !0) : s && (e.classList.remove(o), r = !0)
        }
        r && l.send(t, e)
    }

    function s(e) {
        var t, r, i, s = n("SMART_BLOCKS", {});
        for (t in s)for (r = e.querySelectorAll(t), i = 0; i < r.length; i++)o(r[i], s[t], t)
    }

    function a() {
        s(e.document.body)
    }

    function f() {
        e.addEventListener("resize", a)
    }

    function u() {
        e.removeEventListener("resize", a)
    }

    var l = new t;
    return {onUpdate: l, updateBlock: o, updateTree: s, updateDocument: a, enable: f, disable: u}
});
!function () {
    function e(e) {
        return c.raw ? e : encodeURIComponent(e)
    }

    function n(e) {
        return c.raw ? e : decodeURIComponent(e)
    }

    function o(n) {
        return e(c.json ? JSON.stringify(n) : String(n))
    }

    function i(e) {
        0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return e = decodeURIComponent(e.replace(t, " ")), c.json ? JSON.parse(e) : e
        } catch (n) {
        }
    }

    function r(e, n) {
        var o = c.raw ? e : i(e);
        return $.isFunction(n) ? n(o) : o
    }

    $ = require("jquery");
    var t = /\+/g, c = $.cookie = function (i, t, u) {
        if (arguments.length > 1 && !$.isFunction(t)) {
            if (u = $.extend({}, c.defaults, u), "number" == typeof u.expires) {
                var a = u.expires, s = u.expires = new Date;
                s.setTime(+s + 864e5 * a)
            }
            return document.cookie = [e(i), "=", o(t), u.expires ? "; expires=" + u.expires.toUTCString() : "", u.path ? "; path=" + u.path : "", u.domain ? "; domain=" + u.domain : "", u.secure ? "; secure" : ""].join("")
        }
        for (var p = i ? void 0 : {}, d = document.cookie ? document.cookie.split("; ") : [], f = 0, m = d.length; m > f; f++) {
            var l = d[f].split("="), x = n(l.shift()), g = l.join("=");
            if (i && i === x) {
                p = r(g, t);
                break
            }
            i || void 0 === (g = r(g)) || (p[x] = g)
        }
        return p
    };
    c.defaults = {}, $.removeCookie = function (e, n) {
        return void 0 === $.cookie(e) ? !1 : ($.cookie(e, "", $.extend({}, n, {expires: -1})), !$.cookie(e))
    }
}();
define("mousewheel", ["jquery"], function (e) {
    function t(e) {
        var t = e || window.event, a = r.call(arguments, 1), h = 0, u = 0, d = 0, g = 0, m = 0, c = 0;
        if (e = s.event.fix(t), e.type = "mousewheel", "detail"in t && (d = -1 * t.detail), "wheelDelta"in t && (d = t.wheelDelta), "wheelDeltaY"in t && (d = t.wheelDeltaY), "wheelDeltaX"in t && (u = -1 * t.wheelDeltaX), "axis"in t && t.axis === t.HORIZONTAL_AXIS && (u = -1 * d, d = 0), h = 0 === d ? u : d, "deltaY"in t && (d = -1 * t.deltaY, h = d), "deltaX"in t && (u = t.deltaX, 0 === d && (h = -1 * u)), 0 !== d || 0 !== u) {
            if (1 === t.deltaMode) {
                var w = s.data(this, "mousewheel-line-height");
                h *= w, d *= w, u *= w
            } else if (2 === t.deltaMode) {
                var v = s.data(this, "mousewheel-page-height");
                h *= v, d *= v, u *= v
            }
            if (g = Math.max(Math.abs(d), Math.abs(u)), (!o || o > g) && (o = g, n(t, g) && (o /= 40)), n(t, g) && (h /= 40, u /= 40, d /= 40), h = Math[h >= 1 ? "floor" : "ceil"](h / o), u = Math[u >= 1 ? "floor" : "ceil"](u / o), d = Math[d >= 1 ? "floor" : "ceil"](d / o), f.settings.normalizeOffset && this.getBoundingClientRect) {
                var M = this.getBoundingClientRect();
                m = e.clientX - M.left, c = e.clientY - M.top
            }
            return e.deltaX = u, e.deltaY = d, e.deltaFactor = o, e.offsetX = m, e.offsetY = c, e.deltaMode = 0, a.unshift(e, h, u, d), l && clearTimeout(l), l = setTimeout(i, 200), (s.event.dispatch || s.event.handle).apply(this, a)
        }
    }

    function i() {
        o = null
    }

    function n(e, t) {
        return f.settings.adjustOldDeltas && "mousewheel" === e.type && t % 120 === 0
    }

    var l, o, s = e, a = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"], h = "onwheel"in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"], r = Array.prototype.slice;
    if (s.event.fixHooks)for (var u = a.length; u;)s.event.fixHooks[a[--u]] = s.event.mouseHooks;
    var f = s.event.special.mousewheel = {
        version: "3.1.12", setup: function () {
            if (this.addEventListener)for (var e = h.length; e;)this.addEventListener(h[--e], t, !1); else this.onmousewheel = t;
            s.data(this, "mousewheel-line-height", f.getLineHeight(this)), s.data(this, "mousewheel-page-height", f.getPageHeight(this))
        }, teardown: function () {
            if (this.removeEventListener)for (var e = h.length; e;)this.removeEventListener(h[--e], t, !1); else this.onmousewheel = null;
            s.removeData(this, "mousewheel-line-height"), s.removeData(this, "mousewheel-page-height")
        }, getLineHeight: function (e) {
            var t = s(e), i = t["offsetParent"in s.fn ? "offsetParent" : "parent"]();
            return i.length || (i = s("body")), parseInt(i.css("fontSize"), 10) || parseInt(t.css("fontSize"), 10) || 16
        }, getPageHeight: function (e) {
            return s(e).height()
        }, settings: {adjustOldDeltas: !0, normalizeOffset: !0}
    };
    s.fn.extend({
        mousewheel: function (e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        }, unmousewheel: function (e) {
            return this.unbind("mousewheel", e)
        }
    })
});
!function () {
    function e() {
        var e = c();
        e !== r && (r = e, p.trigger("orientationchange"))
    }

    function t(e, t, n, o) {
        var i = n.type;
        n.type = t, a.event.dispatch.call(e, n, o), n.type = i
    }

    var a = require("jquery");
    a.attrFn = a.attrFn || {};
    var n = navigator.userAgent.toLowerCase(), o = n.indexOf("chrome") > -1 && (n.indexOf("windows") > -1 || n.indexOf("macintosh") > -1 || n.indexOf("linux") > -1) && n.indexOf("mobile") < 0 && n.indexOf("android") < 0, i = {
        tap_pixel_range: 5,
        swipe_h_threshold: 25,
        swipe_v_threshold: 25,
        taphold_threshold: 750,
        doubletap_int: 500,
        touch_capable: "ontouchstart"in window && !o,
        orientation_support: "orientation"in window && "onorientationchange"in window,
        startevent: "ontouchstart"in window && !o ? "touchstart" : "",
        endevent: "ontouchstart"in window && !o ? "touchend" : "",
        moveevent: "ontouchstart"in window && !o ? "touchmove" : "",
        tapevent: "ontouchstart"in window && !o ? "tap" : "",
        scrollevent: "ontouchstart"in window && !o ? "touchmove" : "",
        hold_timer: null,
        tap_timer: null
    };
    a.isTouchCapable = function () {
        return i.touch_capable
    }, a.getStartEvent = function () {
        return i.startevent
    }, a.getEndEvent = function () {
        return i.endevent
    }, a.getMoveEvent = function () {
        return i.moveevent
    }, a.getTapEvent = function () {
        return i.tapevent
    }, a.getScrollEvent = function () {
        return i.scrollevent
    }, a.each(["tapstart", "tapend", "tapmove", "tap", "tap2", "tap3", "tap4", "singletap", "doubletap", "taphold", "swipe", "swipeup", "swiperight", "swipedown", "swipeleft", "swipeend", "scrollstart", "scrollend", "orientationchange"], function (e, t) {
        a.fn[t] = function (e) {
            return e ? this.on(t, e) : this.trigger(t)
        }, a.attrFn[t] = !0
    }), a.event.special.tapstart = {
        setup: function () {
            var e = this, n = a(e);
            n.on(i.startevent, function (a) {
                if (n.data("callee", arguments.callee), a.which && 1 !== a.which)return !1;
                var o = a.originalEvent, s = {
                    position: {
                        x: i.touch_capable ? o.touches[0].screenX : a.screenX,
                        y: i.touch_capable ? o.touches[0].screenY : a.screenY
                    },
                    offset: {
                        x: i.touch_capable ? o.touches[0].pageX - o.touches[0].target.offsetLeft : a.offsetX,
                        y: i.touch_capable ? o.touches[0].pageY - o.touches[0].target.offsetTop : a.offsetY
                    },
                    time: Date.now(),
                    target: a.target
                };
                return t(e, "tapstart", a, s), !0
            })
        }, remove: function () {
            a(this).off(i.startevent, a(this).data.callee)
        }
    }, a.event.special.tapmove = {
        setup: function () {
            var e = this, n = a(e);
            n.on(i.moveevent, function (a) {
                n.data("callee", arguments.callee);
                var o = a.originalEvent, s = {
                    position: {
                        x: i.touch_capable ? o.touches[0].screenX : a.screenX,
                        y: i.touch_capable ? o.touches[0].screenY : a.screenY
                    },
                    offset: {
                        x: i.touch_capable ? o.touches[0].pageX - o.touches[0].target.offsetLeft : a.offsetX,
                        y: i.touch_capable ? o.touches[0].pageY - o.touches[0].target.offsetTop : a.offsetY
                    },
                    time: Date.now(),
                    target: a.target
                };
                return t(e, "tapmove", a, s), !0
            })
        }, remove: function () {
            a(this).off(i.moveevent, a(this).data.callee)
        }
    }, a.event.special.tapend = {
        setup: function () {
            var e = this, n = a(e);
            n.on(i.endevent, function (a) {
                n.data("callee", arguments.callee);
                var o = a.originalEvent, s = {
                    position: {
                        x: i.touch_capable ? o.changedTouches[0].screenX : a.screenX,
                        y: i.touch_capable ? o.changedTouches[0].screenY : a.screenY
                    },
                    offset: {
                        x: i.touch_capable ? o.changedTouches[0].pageX - o.changedTouches[0].target.offsetLeft : a.offsetX,
                        y: i.touch_capable ? o.changedTouches[0].pageY - o.changedTouches[0].target.offsetTop : a.offsetY
                    },
                    time: Date.now(),
                    target: a.target
                };
                return t(e, "tapend", a, s), !0
            })
        }, remove: function () {
            a(this).off(i.endevent, a(this).data.callee)
        }
    }, a.event.special.taphold = {
        setup: function () {
            var e, n = this, o = a(n), s = {x: 0, y: 0}, c = 0, r = 0;
            o.on(i.startevent, function (a) {
                if (a.which && 1 !== a.which)return !1;
                o.data("tapheld", !1), e = a.target;
                var h = a.originalEvent, u = Date.now(), p = {
                    x: i.touch_capable ? h.touches[0].screenX : a.screenX,
                    y: i.touch_capable ? h.touches[0].screenY : a.screenY
                }, l = {
                    x: i.touch_capable ? h.touches[0].pageX - h.touches[0].target.offsetLeft : a.offsetX,
                    y: i.touch_capable ? h.touches[0].pageY - h.touches[0].target.offsetTop : a.offsetY
                };
                return s.x = a.originalEvent.targetTouches ? a.originalEvent.targetTouches[0].pageX : a.pageX, s.y = a.originalEvent.targetTouches ? a.originalEvent.targetTouches[0].pageY : a.pageY, c = s.x, r = s.y, i.hold_timer = window.setTimeout(function () {
                    var g = s.x - c, f = s.y - r;
                    if (a.target == e && (s.x == c && s.y == r || g >= -i.tap_pixel_range && g <= i.tap_pixel_range && f >= -i.tap_pixel_range && f <= i.tap_pixel_range)) {
                        o.data("tapheld", !0);
                        var d = Date.now(), v = {
                            x: i.touch_capable ? h.touches[0].screenX : a.screenX,
                            y: i.touch_capable ? h.touches[0].screenY : a.screenY
                        }, w = {
                            x: i.touch_capable ? h.touches[0].pageX - h.touches[0].target.offsetLeft : a.offsetX,
                            y: i.touch_capable ? h.touches[0].pageY - h.touches[0].target.offsetTop : a.offsetY
                        };
                        duration = d - u;
                        var _ = {
                            startTime: u,
                            endTime: d,
                            startPosition: p,
                            startOffset: l,
                            endPosition: v,
                            endOffset: w,
                            duration: duration,
                            target: a.target
                        };
                        o.data("callee1", arguments.callee), t(n, "taphold", a, _)
                    }
                }, i.taphold_threshold), !0
            }).on(i.endevent, function () {
                o.data("callee2", arguments.callee), o.data("tapheld", !1), window.clearTimeout(i.hold_timer)
            }).on(i.moveevent, function (e) {
                o.data("callee3", arguments.callee), c = e.originalEvent.targetTouches ? e.originalEvent.targetTouches[0].pageX : e.pageX, r = e.originalEvent.targetTouches ? e.originalEvent.targetTouches[0].pageY : e.pageY
            })
        }, remove: function () {
            a(this).off(i.startevent, a(this).data.callee1).off(i.endevent, a(this).data.callee2).off(i.moveevent, a(this).data.callee3)
        }
    }, a.event.special.doubletap = {
        setup: function () {
            var e, n, o, s, c, r = this, h = a(r), u = !1;
            h.on(i.startevent, function (t) {
                return t.which && 1 !== t.which ? !1 : (h.data("doubletapped", !1), e = t.target, h.data("callee1", arguments.callee), s = t.originalEvent, o = {
                    position: {
                        x: i.touch_capable ? s.touches[0].screenX : t.screenX,
                        y: i.touch_capable ? s.touches[0].screenY : t.screenY
                    },
                    offset: {
                        x: i.touch_capable ? s.touches[0].pageX - s.touches[0].target.offsetLeft : t.offsetX,
                        y: i.touch_capable ? s.touches[0].pageY - s.touches[0].target.offsetTop : t.offsetY
                    },
                    time: Date.now(),
                    target: t.target
                }, !0)
            }).on(i.endevent, function (a) {
                var s = Date.now(), p = h.data("lastTouch") || s + 1, l = s - p;
                if (window.clearTimeout(n), h.data("callee2", arguments.callee), l < i.doubletap_int && a.target == e && l > 100) {
                    h.data("doubletapped", !0), window.clearTimeout(i.tap_timer);
                    var g = {
                        position: {
                            x: i.touch_capable ? a.originalEvent.changedTouches[0].screenX : a.screenX,
                            y: i.touch_capable ? a.originalEvent.changedTouches[0].screenY : a.screenY
                        },
                        offset: {
                            x: i.touch_capable ? a.originalEvent.changedTouches[0].pageX - a.originalEvent.changedTouches[0].target.offsetLeft : a.offsetX,
                            y: i.touch_capable ? a.originalEvent.changedTouches[0].pageY - a.originalEvent.changedTouches[0].target.offsetTop : a.offsetY
                        },
                        time: Date.now(),
                        target: a.target
                    }, f = {firstTap: o, secondTap: g, interval: g.time - o.time};
                    u || t(r, "doubletap", a, f), u = !0, c = window.setTimeout(function () {
                        u = !1
                    }, i.doubletap_int)
                } else h.data("lastTouch", s), n = window.setTimeout(function () {
                    window.clearTimeout(n)
                }, i.doubletap_int, [a]);
                h.data("lastTouch", s)
            })
        }, remove: function () {
            a(this).off(i.startevent, a(this).data.callee1).off(i.endevent, a(this).data.callee2)
        }
    }, a.event.special.singletap = {
        setup: function () {
            var e = this, n = a(e), o = null, s = null, c = {x: 0, y: 0};
            n.on(i.startevent, function (e) {
                return e.which && 1 !== e.which ? !1 : (s = Date.now(), o = e.target, n.data("callee1", arguments.callee), c.x = e.originalEvent.targetTouches ? e.originalEvent.targetTouches[0].pageX : e.pageX, c.y = e.originalEvent.targetTouches ? e.originalEvent.targetTouches[0].pageY : e.pageY, !0)
            }).on(i.endevent, function (a) {
                n.data("callee2", arguments.callee), a.target == o && (end_pos_x = a.originalEvent.changedTouches ? a.originalEvent.changedTouches[0].pageX : a.pageX, end_pos_y = a.originalEvent.changedTouches ? a.originalEvent.changedTouches[0].pageY : a.pageY, i.tap_timer = window.setTimeout(function () {
                    if (!n.data("doubletapped") && !n.data("tapheld") && c.x == end_pos_x && c.y == end_pos_y) {
                        var o = a.originalEvent, r = {
                            position: {
                                x: i.touch_capable ? o.changedTouches[0].screenX : a.screenX,
                                y: i.touch_capable ? o.changedTouches[0].screenY : a.screenY
                            },
                            offset: {
                                x: i.touch_capable ? o.changedTouches[0].pageX - o.changedTouches[0].target.offsetLeft : a.offsetX,
                                y: i.touch_capable ? o.changedTouches[0].pageY - o.changedTouches[0].target.offsetTop : a.offsetY
                            },
                            time: Date.now(),
                            target: a.target
                        };
                        r.time - s < i.taphold_threshold && t(e, "singletap", a, r)
                    }
                }, i.doubletap_int))
            })
        }, remove: function () {
            a(this).off(i.startevent, a(this).data.callee1).off(i.endevent, a(this).data.callee2)
        }
    }, a.event.special.tap = {
        setup: function () {
            var e, n, o = this, s = a(o), c = !1, r = null, h = {x: 0, y: 0};
            s.on(i.startevent, function (t) {
                return s.data("callee1", arguments.callee), t.which && 1 !== t.which ? !1 : (c = !0, h.x = t.originalEvent.targetTouches ? t.originalEvent.targetTouches[0].pageX : t.pageX, h.y = t.originalEvent.targetTouches ? t.originalEvent.targetTouches[0].pageY : t.pageY, e = Date.now(), r = t.target, n = t.originalEvent.targetTouches ? t.originalEvent.targetTouches : [t], !0)
            }).on(i.endevent, function (a) {
                s.data("callee2", arguments.callee);
                var u, p = a.originalEvent.targetTouches ? a.originalEvent.changedTouches[0].pageX : a.pageX, l = a.originalEvent.targetTouches ? a.originalEvent.changedTouches[0].pageY : a.pageY, g = h.x - p, f = h.y - l;
                if (r == a.target && c && Date.now() - e < i.taphold_threshold && (h.x == p && h.y == l || g >= -i.tap_pixel_range && g <= i.tap_pixel_range && f >= -i.tap_pixel_range && f <= i.tap_pixel_range)) {
                    for (var d = a.originalEvent, v = [], w = 0; w < n.length; w++) {
                        var _ = {
                            position: {
                                x: i.touch_capable ? d.changedTouches[w].screenX : a.screenX,
                                y: i.touch_capable ? d.changedTouches[w].screenY : a.screenY
                            },
                            offset: {
                                x: i.touch_capable ? d.changedTouches[w].pageX - d.changedTouches[w].target.offsetLeft : a.offsetX,
                                y: i.touch_capable ? d.changedTouches[w].pageY - d.changedTouches[w].target.offsetTop : a.offsetY
                            },
                            time: Date.now(),
                            target: a.target
                        };
                        v.push(_)
                    }
                    switch (n.length) {
                        case 1:
                            u = "tap";
                            break;
                        case 2:
                            u = "tap2";
                            break;
                        case 3:
                            u = "tap3";
                            break;
                        case 4:
                            u = "tap4"
                    }
                    t(o, u, a, v)
                }
            })
        }, remove: function () {
            a(this).off(i.startevent, a(this).data.callee1).off(i.endevent, a(this).data.callee2)
        }
    }, a.event.special.swipe = {
        setup: function () {
            function e(e) {
                c = a(e.target), c.data("callee1", arguments.callee), u.x = e.originalEvent.targetTouches ? e.originalEvent.targetTouches[0].pageX : e.pageX, u.y = e.originalEvent.targetTouches ? e.originalEvent.targetTouches[0].pageY : e.pageY, p.x = u.x, p.y = u.y, r = !0;
                var t = e.originalEvent;
                o = {
                    position: {
                        x: i.touch_capable ? t.touches[0].screenX : e.screenX,
                        y: i.touch_capable ? t.touches[0].screenY : e.screenY
                    },
                    offset: {
                        x: i.touch_capable ? t.touches[0].pageX - t.touches[0].target.offsetLeft : e.offsetX,
                        y: i.touch_capable ? t.touches[0].pageY - t.touches[0].target.offsetTop : e.offsetY
                    },
                    time: Date.now(),
                    target: e.target
                }
            }

            function t(e) {
                c = a(e.target), c.data("callee2", arguments.callee), p.x = e.originalEvent.targetTouches ? e.originalEvent.targetTouches[0].pageX : e.pageX, p.y = e.originalEvent.targetTouches ? e.originalEvent.targetTouches[0].pageY : e.pageY;
                var t, n = c.data("xthreshold"), s = c.data("ythreshold"), l = "undefined" != typeof n && n !== !1 && parseInt(n) ? parseInt(n) : i.swipe_h_threshold, g = "undefined" != typeof s && s !== !1 && parseInt(s) ? parseInt(s) : i.swipe_v_threshold;
                if (u.y > p.y && u.y - p.y > g && (t = "swipeup"), u.x < p.x && p.x - u.x > l && (t = "swiperight"), u.y < p.y && p.y - u.y > g && (t = "swipedown"), u.x > p.x && u.x - p.x > l && (t = "swipeleft"), void 0 != t && r) {
                    u.x = 0, u.y = 0, p.x = 0, p.y = 0, r = !1;
                    var f = e.originalEvent;
                    endEvnt = {
                        position: {
                            x: i.touch_capable ? f.touches[0].screenX : e.screenX,
                            y: i.touch_capable ? f.touches[0].screenY : e.screenY
                        },
                        offset: {
                            x: i.touch_capable ? f.touches[0].pageX - f.touches[0].target.offsetLeft : e.offsetX,
                            y: i.touch_capable ? f.touches[0].pageY - f.touches[0].target.offsetTop : e.offsetY
                        },
                        time: Date.now(),
                        target: e.target
                    };
                    var d = Math.abs(o.position.x - endEvnt.position.x), v = Math.abs(o.position.y - endEvnt.position.y), w = {
                        startEvnt: o,
                        endEvnt: endEvnt,
                        direction: t.replace("swipe", ""),
                        xAmount: d,
                        yAmount: v,
                        duration: endEvnt.time - o.time
                    };
                    h = !0, c.trigger("swipe", w).trigger(t, w)
                }
            }

            function n(e) {
                c = a(e.target);
                var t = "";
                if (c.data("callee3", arguments.callee), h) {
                    var n = c.data("xthreshold"), s = c.data("ythreshold"), u = "undefined" != typeof n && n !== !1 && parseInt(n) ? parseInt(n) : i.swipe_h_threshold, p = "undefined" != typeof s && s !== !1 && parseInt(s) ? parseInt(s) : i.swipe_v_threshold, l = e.originalEvent;
                    endEvnt = {
                        position: {
                            x: i.touch_capable ? l.changedTouches[0].screenX : e.screenX,
                            y: i.touch_capable ? l.changedTouches[0].screenY : e.screenY
                        },
                        offset: {
                            x: i.touch_capable ? l.changedTouches[0].pageX - l.changedTouches[0].target.offsetLeft : e.offsetX,
                            y: i.touch_capable ? l.changedTouches[0].pageY - l.changedTouches[0].target.offsetTop : e.offsetY
                        },
                        time: Date.now(),
                        target: e.target
                    }, o.position.y > endEvnt.position.y && o.position.y - endEvnt.position.y > p && (t = "swipeup"), o.position.x < endEvnt.position.x && endEvnt.position.x - o.position.x > u && (t = "swiperight"), o.position.y < endEvnt.position.y && endEvnt.position.y - o.position.y > p && (t = "swipedown"), o.position.x > endEvnt.position.x && o.position.x - endEvnt.position.x > u && (t = "swipeleft");
                    var g = Math.abs(o.position.x - endEvnt.position.x), f = Math.abs(o.position.y - endEvnt.position.y), d = {
                        startEvnt: o,
                        endEvnt: endEvnt,
                        direction: t.replace("swipe", ""),
                        xAmount: g,
                        yAmount: f,
                        duration: endEvnt.time - o.time
                    };
                    c.trigger("swipeend", d)
                }
                r = !1, h = !1
            }

            var o, s = this, c = a(s), r = !1, h = !1, u = {x: 0, y: 0}, p = {x: 0, y: 0};
            c.on(i.startevent, e), c.on(i.moveevent, t), c.on(i.endevent, n)
        }, remove: function () {
            a(this).off(i.startevent, a(this).data.callee1).off(i.moveevent, a(this).data.callee2).off(i.endevent, a(this).data.callee3)
        }
    }, a.event.special.scrollstart = {
        setup: function () {
            function e(e, a) {
                n = a, t(s, n ? "scrollstart" : "scrollend", e)
            }

            var n, o, s = this, c = a(s);
            c.on(i.scrollevent, function (t) {
                c.data("callee", arguments.callee), n || e(t, !0), clearTimeout(o), o = setTimeout(function () {
                    e(t, !1)
                }, 50)
            })
        }, remove: function () {
            a(this).off(i.scrollevent, a(this).data.callee)
        }
    };
    var s, c, r, h, u, p = a(window), l = {0: !0, 180: !0};
    if (i.orientation_support) {
        var g = window.innerWidth || p.width(), f = window.innerHeight || p.height(), d = 50;
        h = g > f && g - f > d, u = l[window.orientation], (h && u || !h && !u) && (l = {"-90": !0, 90: !0})
    }
    a.event.special.orientationchange = s = {
        setup: function () {
            return i.orientation_support ? !1 : (r = c(), p.on("throttledresize", e), !0)
        }, teardown: function () {
            return i.orientation_support ? !1 : (p.off("throttledresize", e), !0)
        }, add: function (e) {
            var t = e.handler;
            e.handler = function (e) {
                return e.orientation = c(), t.apply(this, arguments)
            }
        }
    }, a.event.special.orientationchange.orientation = c = function () {
        var e = !0, t = document.documentElement;
        return e = i.orientation_support ? l[window.orientation] : t && t.clientWidth / t.clientHeight < 1.1, e ? "portrait" : "landscape"
    }, a.event.special.throttledresize = {
        setup: function () {
            a(this).on("resize", m)
        }, teardown: function () {
            a(this).off("resize", m)
        }
    };
    var v, w, _, T = 250, m = function () {
        w = Date.now(), _ = w - x, _ >= T ? (x = w, a(this).trigger("throttledresize")) : (v && window.clearTimeout(v), v = window.setTimeout(e, T - _))
    }, x = 0;
    a.each({
        scrollend: "scrollstart",
        swipeup: "swipe",
        swiperight: "swipe",
        swipedown: "swipe",
        swipeleft: "swipe",
        swipeend: "swipe",
        tap2: "tap"
    }, function (e, t) {
        a.event.special[e] = {
            setup: function () {
                a(this).on(t, a.noop)
            }
        }
    })
}();
var Froogaloop = function () {
    function t(n) {
        return new t.fn.init(n)
    }

    function n(t, n, e) {
        if (!e.contentWindow.postMessage)return !1;
        var r = e.getAttribute("src").split("?")[0], i = JSON.stringify({method: t, value: n});
        "//" === r.substr(0, 2) && (r = window.location.protocol + r), e.contentWindow.postMessage(i, r)
    }

    function e(t) {
        var n, e;
        try {
            n = JSON.parse(t.data), e = n.event || n.method
        } catch (r) {
        }
        if ("ready" != e || s || (s = !0), t.origin != d)return !1;
        var o = n.value, l = n.data, u = "" === u ? null : n.player_id, a = i(e, u), c = [];
        return a ? (void 0 !== o && c.push(o), l && c.push(l), u && c.push(u), c.length > 0 ? a.apply(null, c) : a.call()) : !1
    }

    function r(t, n, e) {
        e ? (a[e] || (a[e] = {}), a[e][t] = n) : a[t] = n
    }

    function i(t, n) {
        return n ? a[n][t] : a[t]
    }

    function o(t, n) {
        if (n && a[n]) {
            if (!a[n][t])return !1;
            a[n][t] = null
        } else {
            if (!a[t])return !1;
            a[t] = null
        }
        return !0
    }

    function l(t) {
        "//" === t.substr(0, 2) && (t = window.location.protocol + t);
        for (var n = t.split("/"), e = "", r = 0, i = n.length; i > r && 3 > r; r++)e += n[r], 2 > r && (e += "/");
        return e
    }

    function u(t) {
        return !!(t && t.constructor && t.call && t.apply)
    }

    var a = {}, s = !1, d = (Array.prototype.slice, "");
    return t.fn = t.prototype = {
        element: null, init: function (t) {
            return "string" == typeof t && (t = document.getElementById(t)), this.element = t, d = l(this.element.getAttribute("src")), this
        }, api: function (t, e) {
            if (!this.element || !t)return !1;
            var i = this, o = i.element, l = "" !== o.id ? o.id : null, a = u(e) ? null : e, s = u(e) ? e : null;
            return s && r(t, s, l), n(t, a, o), i
        }, addEvent: function (t, e) {
            if (!this.element)return !1;
            var i = this, o = i.element, l = "" !== o.id ? o.id : null;
            return r(t, e, l), "ready" != t ? n("addEventListener", t, o) : "ready" == t && s && e.call(null, l), i
        }, removeEvent: function (t) {
            if (!this.element)return !1;
            var e = this, r = e.element, i = "" !== r.id ? r.id : null, l = o(t, i);
            "ready" != t && l && n("removeEventListener", t, r)
        }
    }, t.fn.init.prototype = t.fn, window.addEventListener ? window.addEventListener("message", e, !1) : window.attachEvent("onmessage", e), window.Froogaloop = window.$f = t
}();
define("widgets/set_hash", ["jquery"], function () {
    function t(t) {
        var e = document.getElementById(t);
        e && (e.id = ""), history.pushState ? history.replaceState(null, null, "#" + t) : location.hash = t, e && (e.id = t)
    }

    return t
});
define("widgets/render", ["jquery", "nebula/viewport", "pixi", "nebula/signal"], function (t, i, s, a) {
    function o(i) {
        this.element = i, this.renderer = device.safari() && !device.chrome() ? new s.CanvasRenderer(1920, 1200) : s.autoDetectRenderer(1920, 1200), this.loaded = new a, this.active = 0, this.fadeSpeed = 2, this.stage = new s.Stage, this.lastTime = Date.now(), this.loop = this.loop.bind(this), this.globalScale = 1.09, this.scalingTime = .004, this.path = "", t("body").hasClass("en")
    }

    return o.prototype.positionCanvas = function () {
        var i = (this.renderer.view, 1920), s = 1200, a = t(window).innerWidth(), o = t(window).innerHeight(), e = Math.max(a / i, o / s);
        this.group.scale.set(e, e), this.group.position.x = (a - i * e) / 2, this.group.position.y = (o - s * e) / 2, this.renderer.view.width = a, this.renderer.view.height = o, this.renderer.resize(a, o)
    }, o.prototype.setSections = function () {
        function t() {
            this.customScale > i.globalScale ? (this.customScale = i.globalScale, this.direction = -1) : this.customScale < 1 && (this.customScale = 1, this.direction = 1)
        }


    }, o.prototype.activateSection = function (t) {
        this.active = t
    }, o.prototype._onLoad = function () {
        this.setSections(), this.positionCanvas(), this.assets = {}, this.activateSection(this.active), this.element.append(this.renderer.view), t(this.renderer.view).wrap('<div class="glitch-wrap"></div>'), this.loaded.send(), this.loop()
    }, o.prototype.loop = function () {
        var t = Date.now(), i = (t - this.lastTime) / 1e3;
        this.lastTime = t;
        for (var s = 0; s < this.group.children.length; s++) {
            var a = this.group.children[s];
            a.alpha = s === this.active ? Math.min(1, a.alpha + this.fadeSpeed * i) : Math.max(0, a.alpha - this.fadeSpeed * i)
        }
        this.group.children[this.active].update && this.group.children[this.active].update(i), this.render(), requestAnimationFrame(this.loop)
    }, o.prototype.render = function () {
        this.renderer.render(this.stage)
    }, o
});
define("widgets/frame", ["jquery", "nebula/viewport"], function (i, t) {
    function n(n, e) {
        var s = this;
        this.overlay = i(n), this.canvas = i("<canvas/>").prependTo(this.overlay)[0], this.ctx = this.canvas.getContext("2d"), this.pagination = this.overlay.find(".pagination"), this.main = i("main"), this.paginationLinks = this.pagination.find("button"), this.paginationLines = [], this.paginationLinesCurrent = [];
        for (var a = 0; a < 6 * this.paginationLinks.length + 1; a++)this.paginationLines.push(12), this.paginationLinesCurrent.push(12);
        this.activate(e, !0), this.paginationLinks.on("click", function (t) {
            t.preventDefault(), s.setActive(i(this).index())
        }), this.update = this.update.bind(this), this.viewport(), this.getElements(), this.update(), t.onChange.connect(this.viewport.bind(this)), t.onChange.connect(this.getElements.bind(this)), i(window).on("resize touchmove scroll", function () {
            clearTimeout(s.timeout), s.timeout = setTimeout(s.getDimensions.bind(s), 500)
        })
    }

    return n.prototype.viewport = function () {
        "480" === t.get() ? (this.Hmargin = 30, this.Vmargin = 30, this.padding = 5, this.pagination.addClass("hidden").css("display", "none")) : "320" === t.get() ? (this.Hmargin = 15, this.Vmargin = 30, this.padding = 5, this.pagination.addClass("hidden").css("display", "none")) : (this.Hmargin = 50, this.Vmargin = 50, this.padding = 20, this.pagination.removeClass("hidden").css("display", "block")), this.BVmargin = this.Vmargin, this.renderer = i(".backgrounds canvas")
    }, n.prototype.getElements = function () {
        this.header = this.overlay.find(".logo, .languages, .offers").filter(":not(.hidden)"), this.footer = this.overlay.find(".next").filter(":not(.hidden)"), this.sidebar = this.overlay.find(".more, .pagination").filter(":not(.hidden)"), this.getElementsDimensions()
    }, n.prototype.getDimensions = function () {
        this.setCanvasDimensions(), this.getElementsDimensions()
    }, n.prototype.getElementsDimensions = function () {
        this.header.each(function (i, t) {
            t.rect = t.getClientRects()[0]
        }), this.footer.each(function (i, t) {
            t.rect = t.getClientRects()[0]
        }), this.sidebar.each(function (i, t) {
            t.rect = t.getClientRects()[0]
        }), this.paginationRect = this.pagination[0].getClientRects()[0], t.get() > 480 && (i(window).outerHeight() - this.paginationRect.height) / 2 !== this.paginationRect.top && (this.paginationRect.top = (i(window).outerHeight() - this.paginationRect.height) / 2)
    }, n.prototype.setCanvasDimensions = function () {
        this.canvas.width = this.overlay.outerWidth(), this.renderer.length ? this.canvas.height = this.overlay.outerHeight() : (this.canvasHeight = this.main.outerHeight() - i(document).scrollTop(), this.canvasHeight > i(window).outerHeight() + 300 ? (this.canvas.height = i(window).outerHeight(), this.BVmargin = 0) : (this.canvas.height = this.canvasHeight, this.BVmargin = this.Vmargin))
    }, n.prototype.update = function () {
        var i = this;
        this.setCanvasDimensions(), this.ctx.beginPath(), this.ctx.lineWidth = 2, this.ctx.strokeStyle = "rgba(0, 0, 0, 0)", this.ctx.moveTo(this.Hmargin, this.Vmargin), this.header.each(function (t, n) {
            i.ctx.lineTo(n.rect.left - i.padding, i.Vmargin), i.ctx.moveTo(n.rect.right + i.padding, i.Vmargin)
        }), this.ctx.lineTo(this.canvas.width - this.Hmargin, this.Vmargin), this.sidebar.each(function (t, n) {
            i.ctx.lineTo(i.canvas.width - i.Hmargin, n.rect.top - i.padding), i.ctx.moveTo(i.canvas.width - i.Hmargin, n.rect.bottom + i.padding)
        }), this.ctx.lineTo(this.canvas.width - this.Hmargin, this.canvas.height - this.BVmargin), this.footer.each(function (t, n) {
            i.ctx.lineTo(n.rect.right + i.padding, i.canvas.height - i.Vmargin), i.ctx.moveTo(n.rect.left - i.padding, i.canvas.height - i.Vmargin)
        }), 0 == this.BVmargin ? this.ctx.moveTo(this.Hmargin, this.canvas.height - this.BVmargin) : this.ctx.lineTo(this.Hmargin, this.canvas.height - this.BVmargin), this.ctx.lineTo(this.Hmargin, this.Vmargin), this.ctx.stroke(), this.ctx.lineWidth = 1;
        var n = this.paginationRect, e = this.paginationLines.length;
        if (t.get() > 480) {
            this.paginationPositionCurrent += .125 * (this.paginationPosition - this.paginationPositionCurrent);
            for (var s = 0; e > s; s++) {
                var a = Math.abs(this.paginationPositionCurrent - s), h = 43 * Math.max(0, 4 - a) / 4 + 12, o = this.paginationLinesCurrent[s];
                o += h > o ? .125 * (h - o) : .25 * (h - o), this.paginationLinesCurrent[s] = o;
                var r = Math.round(n.top + n.height * (s / (e - 1))) - .5;
                this.ctx.strokeStyle = o > 24 ? "#1EF1B1" : "#b9bdbc", this.ctx.beginPath(), this.ctx.moveTo(this.canvas.width - this.Hmargin + 12, r), this.ctx.lineTo(this.canvas.width - this.Hmargin + 12 - o, r), this.ctx.stroke()
            }
        }
        requestAnimationFrame(this.update)
    }, n.prototype.activate = function (i, t) {
        for (var n = this.paginationLines.length, e = 0; n > e; e++)this.paginationLines[e] = 12;
        this.paginationPosition = 2 * Math.round(i / 8 * n / 2) + 3, t === !0 && (this.paginationPositionCurrent = this.paginationPosition)
    }, n.prototype.setActive = function (i) {
        this.activate(i)
    }, n.handler = function (i, t) {
        return new n(i, t)
    }, n
});
define("widgets/fader", ["jquery", "nebula/signal", "widgets/frame", "widgets/set_hash"], function (t, s, e, i) {
    function n(e) {
        this.onChange = new s;
        this.active = 0, this.main = t(e), this.backgroundsWrapper = this.main.find(".backgrounds"), this.backgrounds = this.backgroundsWrapper.find(".background-item"), this.sections = this.main.find("section:not(.backgrounds)"), this.animatedContents = this.sections.find(".section-content, .main-logo, .subheader, .sidebar-teasers, .section-header, .dropdown, .offer-title, .offers, .content-footer, .spec-header, .robots-spec").addClass("animate"), this.overlay = t(".overlay"), this.setPosition(), this.bindEvents = this.bindEvents.bind(this), this.unBindEvents = this.unBindEvents.bind(this), this.scroll = this.scroll.bind(this), this.keypress = this.keypress.bind(this), this.bindEvents()
    }

    return n.prototype.setPosition = function () {
        this.backgroundsWrapper.css({
            height: "100vh",
            "min-height": 0
        }), this.backgrounds.css("position", "absolute"), this.sections.css("position", "absolute"), t("html, body").addClass("no-scroll")
    }, n.prototype.setActive = function (t, s) {
        var e = this;
        0 > t || t > this.sections.length - 1 || (this.unBindEvents(), this.active = t, this.sections.removeClass("active").css({opacity: "0"}).eq(this.active).css({opacity: "1"}).addClass("active"), this.animatedContents.removeClass("active"), this.sections.eq(this.active).find(".section-content, .main-logo, .subheader, .sidebar-teasers, .section-header, .dropdown, .offer-title, .offers, .content-footer, .spec-header, .robots-spec").addClass("active"), setTimeout(function () {
            s !== !0 && e.bindEvents()
        }, 400), s !== !0 && this.setHash(), this.onChange.send(this.active))
    }, n.prototype.setHash = function () {
        i(this.sections.eq(this.active).attr("id"))
    }, n.prototype.bindEvents = function () {
        0 === this.active && this.backgroundsWrapper.addClass("glitch"), t(window).on("mousewheel", this.scroll), t(document).on("keydown", this.keypress)
    }, n.prototype.unBindEvents = function () {
        this.backgroundsWrapper.removeClass("glitch"), t(window).off("mousewheel", this.scroll), t(document).off("keydown", this.keypress)
    }, n.prototype.previous = function () {
        this.setActive(this.active - 1)
    }, n.prototype.next = function () {
        this.setActive(this.active + 1)
    }, n.prototype.scroll = function (t) {
        t.preventDefault();
        t.deltaY > 0 ? this.previous() : this.next()
    }, n.prototype.keypress = function (t) {
        38 == t.which ? this.previous() : 40 == t.which && this.next()
    }, n.handler = function () {
        return new n(this)
    }, n
});
define("widgets/scroller", ["jquery", "nebula/signal", "widgets/set_hash"], function (t, s, i) {
    function o(i) {
        this.onScroll = new s, this.main = t(i), this.sections = this.main.find("section").filter(":not(.backgrounds)"), this.fromTop = 0, this.links = t(".pagination button"), this.scroll = this.scroll.bind(this), t("html").css("overflow-y", "scroll")
    }

    return o.prototype.scroll = function () {
        for (var t = 0; t < this.sections.length; t++) {
            var s = this.sections[t].getClientRects()[0].top;
            0 >= s && s > -1080 && (this.setActive(t), this.onScroll.send(t))
        }
    }, o.prototype.setActive = function (t) {
        this.link = this.links.eq(t), this.link.addClass("active").siblings().removeClass("active"), this.id = this.link.data("href"), i(this.link.data("href"))
    }, o.prototype.scrollTo = function (s, i) {
        this.unBindEvents(), this.setActive(s), this.active = this.sections.filter("#" + this.id), this.fromTop = t(document).scrollTop() + this.active[0].getClientRects()[0].top, i === !0 ? t("html, body").stop().scrollTop(this.fromTop) : t("html, body").stop().animate({scrollTop: this.fromTop}, 1e3), this.onScroll.send(s), this.bindEvents()
    }, o.prototype.bindEvents = function () {
        t(window).on("scroll", this.scroll)
    }, o.prototype.unBindEvents = function () {
        t(window).off("scroll", this.scroll)
    }, o
});
define("widgets/dropdown", ["jquery"], function (t) {
    function i(i) {
        this.dropdown = t(i), this.content = this.dropdown.find(".content"), this.select = this.dropdown.find(".selected"), this.options = this.dropdown.find(".fake-select"), t("body").on("click", this.hideOptions.bind(this)), this.showOptions = this.showOptions.bind(this), this.bindOpen()
    }

    return i.prototype.bindOpen = function () {
        this.select.on("click", this.showOptions)
    }, i.prototype.unBindOpen = function () {
        this.select.off("click", this.showOptions)
    }, i.prototype.showOptions = function (t) {
        t.stopPropagation(), this.unBindOpen(), this.options.css("top", this.select.outerHeight()).slideDown(300), this.setSelected()
    }, i.prototype.hideOptions = function () {
        this.options.slideUp(300).find("li").off("click"), this.bindOpen()
    }, i.prototype.setSelected = function () {
        var i = this;
        this.select.on("click", this.hideOptions.bind(this)), this.options.find("li").on("click", function () {
            var n = t(this);
            i.select.text(n.text()), i.hideOptions(), i.showContent(n.data("show")), i.select.off("click", i.hideOptions.bind(i))
        })
    }, i.prototype.showContent = function (t) {
        this.content.find('[data-content="' + t + '"]').show().siblings().hide()
    }, i.handler = function () {
        return new i(this)
    }, i
});
define("widgets/video", ["jquery", "nebula/signal"], function (i) {
    function s(s) {
        this.section = i(s), this.play = this.section.find(".play-video"), this.overlay = i(".overlay"), this.videoOverlay = this.section.find(".video-overlay"), this.play.on("click", this.show.bind(this)), this.close = this.section.find(".close-video"), this.doc = i("html")
    }

    return s.prototype.show = function () {
        var i = this;
        this.iframe = this.section.find("iframe")[0], this.player = $f(this.iframe), this.overlay.css("z-index", "-1"), this.videoOverlay.fadeIn(), this.player.api("play"), this.doc.addClass("no-scroll"), this.section.css("z-index", ""), this.close.on("click", function () {
            i.overlay.css("z-index", ""), i.videoOverlay.fadeOut(function () {
                i.player.api("pause"), i.player.api("unload"), i.doc.removeClass("no-scroll"), i.section.css("z-index", "")
            })
        })
    }, s.prototype.hide = function () {
        this.close.trigger("click")
    }, s
});
define("widgets/overlay", ["jquery", "nebula/signal", "widgets/set_hash", "nebula/viewport"], function (e, t, i, s) {
    function n(i) {
        this.onOpen = new t, this.onClose = new t, this.element = e(i), this.overlays = this.element.find("section"), this.index = 0, this.element.find(".overlay-close").on("click", this.hide.bind(this)), this.element.find(".overlay-next").on("click", this.next.bind(this)), this.element.find(".overlay-prev").on("click", this.prev.bind(this)), e(document).on("keydown", this.keypress.bind(this)), this.equalGrid = this.element.find("[data-equal-heights]"), this.equalElements = this.equalGrid.children(), this.equalHeight = 0, e(window).on("resize", this.setHeight.bind(this)), this.swipeEvents(), s.onChange(this.swipeEvents.bind(this))
    }

    return n.prototype.swipeEvents = function () {
        this.element.on("swiperight", this.prev.bind(this)), this.element.on("swipeleft", this.next.bind(this))
    }, n.prototype.open = function (t) {
        this.setHeight(), this.index = this.element.find(t).index(), this.element.show(), this.slide(), (s.get() < 1280 || device.tablet()) && (e("body").css("margin-right", "17px"), e("html, body").addClass("no-scroll")), this.onOpen.send(), this.element.on("mousewheel", function () {
        })
    }, n.prototype.hide = function () {
        this.element.removeClass("open"), this.element.css({
            transition: "",
            transform: ""
        }), (s.get() < 1280 || device.tablet()) && (e("body").css("margin-right", ""), e("html, body").removeClass("no-scroll")), this.onClose.send(), e(document).off("keydown", this.keypress.bind(this))
    }, n.prototype.slide = function () {
        this.active = this.overlays.eq(this.index), this.overlays.hide(), this.active.show(), this.element.addClass("open"), this.id = this.active.attr("id"), i(this.id.replace("#", ""))
    }, n.prototype.show = function () {
        this.active = this.overlays.eq(this.index), this.element.css({
            transition: "none",
            transform: "translateX(0)"
        }), this.overlays.hide(), this.active.show(), this.id = this.active.attr("id"), i(this.id.replace("#", ""))
    }, n.prototype.slideBetween = function (t) {
        this.prev = this.active, this.active = this.overlays.eq(this.index), this.element.css({
            transition: "none",
            transform: "translateX(0)"
        }), this.left = "next" === t ? 100 : -100, this.active.css({
            left: this.left + "%",
            display: "block"
        }).animate({left: "0"}), this.prev.stop(!0, !0).animate({
            display: "block",
            left: -this.left + "%"
        }, 400, function () {
            e(this).hide().css({left: "0"})
        }), this.id = this.active.attr("id"), i(this.id.replace("#", ""))
    }, n.prototype.removeNoSlide = function () {
        this.element.removeClass("no-slide"), this.element.find("img").each(function () {
            var t = e(this).data("src");
            e(this).attr("src", t).removeClass("dont-load")
        })
    }, n.prototype.keypress = function (e) {
        39 == e.which ? this.next() : 37 == e.which ? this.prev() : 27 == e.which && this.hide()
    }, n.prototype.next = function () {
        this.index++, this.index > this.overlays.length - 1 && (this.index = 0), this.slideBetween("next")
    }, n.prototype.prev = function () {
        this.index--, this.index < 0 && (this.index = this.overlays.length - 1), this.slideBetween("prev")
    }, n.prototype.setHeight = function () {
        function t() {
            s.get() > 720 && (e.each(i.equalElements, function (t, s) {
                var n = e(s).children().css("height", "").outerHeight();
                n > i.equalHeight && (i.equalHeight = n)
            }), i.equalElements.children().css({height: i.equalHeight}))
        }

        var i = this;
        this.equalElements.children().css({height: ""}), t(), this.equalGrid.find("img").each(function () {
            function i() {
                t()
            }

            var s = new Image;
            s.onload = i, s.src = e(this).attr("src"), s.width && i()
        })
    }, n
});
define("site", ["jquery", "nebula/viewport", "nebula/smart_blocks"], function (e, t, i) {
    "use strict";
    function n() {
        if (t.enable(), i.enable(), window.location.hash) {
            this.section = e(window.location.hash);
            var n = this.section.index(), s = e(".dont-load").eq(n - 1);
            s.removeClass("dont-load")
        } else e(".dont-load").eq(0).removeClass("dont-load").css("opacity", "1");
        e("section img").each(function () {
            var t = e(this).data("src");
            e(this).attr("src", t).removeClass("dont-load")
        }), this.frame = new o(e(".overlay"), !0), this.video = new c(e(".video-section")), this.overlay = new l(e(".content-overlays")), this.main = e("main"), this.lastSection = e("main section:last-child"), this.next = e(".overlay .next"), this.offers = e(".overlay .offers"), this.canvasSupported = t.is("1280 1600 1920") && !!window.HTMLCanvasElement, this.canvasSupported && !device.tablet() ? (this.render = new r(e(".backgrounds")), this.render.loaded.connect(this.frame.viewport.bind(this.frame))) : e(".background-item").removeClass("dont-load"), t.get() > 960 && !device.tablet() ? (this.Fader(), this.firstSection = this.fader.setActive.bind(this.fader)) : (this.Scroller(), this.firstSection = this.scroller.scrollTo.bind(this.scroller)), this.setStartingLocation(), this.parseContent(document.body), this.setLastSection(), this.frame.viewport()
    }

    var o = require("widgets/frame"), s = require("widgets/fader"), a = require("widgets/scroller"), r = require("widgets/render"), c = require("widgets/video"), l = require("widgets/overlay");
    return function () {
        for (var e = 0, t = ["ms", "moz", "webkit", "o"], i = 0; i < t.length && !window.requestAnimationFrame; ++i)window.requestAnimationFrame = window[t[i] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[t[i] + "CancelAnimationFrame"] || window[t[i] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame || (window.requestAnimationFrame = function (t) {
            var i = (new Date).getTime(), n = Math.max(0, 16 - (i - e)), o = window.setTimeout(function () {
                t(i + n)
            }, n);
            return e = i + n, o
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (e) {
            clearTimeout(e)
        })
    }(), n.prototype.setStartingLocation = function () {
        this.section ? this.section.parent().hasClass("content-overlays") ? ("undefined" == typeof this.scroller && this.firstSection(0, !0), this.overlay.open(window.location.hash)) : this.firstSection(e(window.location.hash).index() - 1) : this.firstSection(0), this.overlay.removeNoSlide()
    }, n.prototype.Fader = function () {
        var t = this;
        this.fader = new s(e("main")), this.fader.onChange.connect(this.onFaderChange.bind(this)), this.overlay.onOpen.connect(this.faderOverlayOpen.bind(this)), this.overlay.onClose.connect(this.faderOverlayClose.bind(this)), e(".overlay .next button").click(this.fader.next.bind(this.fader)), e(".pagination button").on("click", function (i) {
            i.preventDefault(), t.fader.setActive(e(this).index())
        })
    }, n.prototype.onFaderChange = function (t) {
        this.canvasSupported && this.render.activateSection(t), this.frame.setActive(t), e(".pagination button").removeClass("active").eq(t).addClass("active"), this.setLastSection(), this.video.hide()
    }, n.prototype.faderOverlayOpen = function () {
        setTimeout(this.main.hide, 400), this.fader.unBindEvents()
    }, n.prototype.faderOverlayClose = function () {
        this.main.show(), this.fader.bindEvents(), this.fader.setHash()
    }, n.prototype.Scroller = function () {
        var t = this;
        this.scroller = new a(e("main")), this.scroller.onScroll.connect(this.onSectionChange.bind(this)), this.overlay.onOpen.connect(this.scrollerOverlayOpen.bind(this)), this.overlay.onClose.connect(this.scrollerOverlayClose.bind(this)), e(".pagination button").on("click", function (i) {
            i.preventDefault(), t.scroller.scrollTo(e(this).index())
        }), e(".overlay .next").addClass("hidden"), this.frame.getElements()
    }, n.prototype.onSectionChange = function (e) {
        this.frame.setActive(e)
    }, n.prototype.scrollerOverlayOpen = function () {
        this.scroller.unBindEvents()
    }, n.prototype.scrollerOverlayClose = function () {
        this.scroller.bindEvents(), this.scroller.scrollTo(5, !0)
    }, n.prototype.setLastSection = function () {
        var i = this;
        this.lastSection.each(function () {
            t.get() > 960 && (e(this).hasClass("active") ? (i.next.addClass("hidden"), setTimeout(function () {
                i.offers.addClass("hidden"), i.frame.getElements()
            }, 200)) : (i.next.removeClass("hidden"), i.offers.removeClass("hidden"), i.frame.getElements()))
        })
    }, n.prototype.parseContent = function (n) {
        function o(t) {
            return e(n).is(t) ? e(n) : e(n).find("*").filter(t)
        }

        var s = this;
        o(".dropdown").each(require("widgets/dropdown").handler), o(".icon-button a").on("click", function (e) {
            e.preventDefault()
        }), o("main section .next").on("click", function () {
            var t = e(document).scrollTop() + e(this).closest("section").next()[0].getClientRects()[0].top;
            e("html, body").animate({scrollTop: t}, 800)
        }), o(".overlay-open").on("click", function () {
            s.overlay.open(e(this).data("href"))
        }), o(".robots-spec").each(function () {
            function i() {
                t.get() < 720 && 1 === o.index() ? o.insertBefore(s) : t.get() > 480 && 0 === o.index() && s.insertBefore(o)
            }

            var n = e(this).find(".right-side"), o = n.find(".robot"), s = n.find(".spec");
            i(), t.onChange.connect(i)
        }), o(".mailto").on("click", function () {
            var t = e(this), i = t.data("mail"), n = t.data("domain"), o = "mailto:" + i + "@" + n;
            t.attr("href", o)
        }), o(".offers.modal a").on("click", function (t) {
            t.preventDefault(), e(".offers-overlay").addClass("open")
        }), o(".offers-overlay").each(function () {
            var t = e(this), i = t.find(".close-modal");
            i.on("click", function () {
                t.removeClass("open")
            })
        }), o(".cookie-info").each(function () {
            var t = e(this);
            e.cookie("cookie-info") || t.show(), t.find(".close-cookie").on("click", function () {
                t.hide(), e.cookie("cookie-info", "closed", {expires: 365, path: "/"})
            })
        }), i.updateTree(n)
    }, n
});
define("nebula/main", ["site"], function (e) {
    "use strict";
    return new e
});/**
 * Created by macbookpro on 15/11/11.
 */
