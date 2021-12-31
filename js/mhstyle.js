/*!
 * MH-Style Bata v1.0.0 (https://mhstyle.net)
 * Copyright 2022 MH-Style
 * Licensed under MIT (https://github.com/mh-style/mh-style/blob/v1.0/LICENSE)
 */
try {
    var tabs = document.querySelectorAll(".mh-tab-style-1 .mh-tabs ul li"),
        tabs_wrap = document.querySelectorAll(".mh-tab-style-1 .mh-tab-content .mh-tab-wrap");
    tabs.forEach(function (e, t) {
        e.addEventListener("click", function () {
            tabs.forEach(function (e) {
                e.classList.remove("active")
            }), e.classList.add("active"), tabs_wrap.forEach(function (e, n) {
                e.style.display = n == t ? "block" : "none"
            })
        })
    })
} catch {}
try {
    var i, acc = document.getElementsByClassName("mh-accordion");
    for (i = 0; i < acc.length; i++) acc[i].addEventListener("click", function () {
        this.classList.toggle("mh-accordion-active");
        var e = this.nextElementSibling;
        e.style.maxHeight ? e.style.maxHeight = null : e.style.maxHeight = e.scrollHeight + "px"
    })
} catch {}
try {
    const e = document.querySelector(".mh-range-slider input"),
        t = document.querySelector(".mh-range-style-1 .mh-range-value");
    t.textContent = e.value, e.oninput = function () {
        t.textContent = this.value
    }
} catch {}
try {
    let e = document.querySelector(".mh-navbar-style-1-body .mh-toggle-button"),
        t = document.querySelector("nav.mh-navbar-style-1");
    e.onclick = function (e) {
        t.classList.toggle("mh-nav-collapse")
    }
} catch {}
try {
    ! function (e) {
        e(document).ready(function () {
            e(".mh-image-filter-button").click(function () {
                var t = e(this).attr("mh-image-data-filter");
                "all" == t ? e(".mh-image-filter").show("2000") : (e(".mh-image-filter").not("." + t).hide("2000"), e(".mh-image-filter").filter("." + t).show("2000"))
            }), e(".mh-image-filter-navigation a").click(function () {
                e(this).addClass("active").siblings().removeClass("active")
            })
        })
    }(jQuery)
} catch {}
try {
    function makesvg(e, t = "") {
        var n = Math.abs(e).toString(),
            i = e.toString(),
            a = '<svg class="mh-circle-chart" viewbox="0 0 33.83098862 33.83098862" xmlns="http://www.w3.org/2000/svg"><circle class="mh-circle-chart__background" cx="16.9" cy="16.9" r="15.9" /><circle class="mh-circle-chart__circle ' + (e < 0 ? "mh-danger-stroke mh-circle-chart__circle--negative" : e > 0 && e <= 30 ? "mh-warning-stroke" : "mh-success-stroke") + '"stroke-dasharray="' + n + ',100"    cx="16.9" cy="16.9" r="15.9" /><g class="mh-circle-chart__info">   <text class="mh-circle-chart__percent" x="17.9" y="15.5">' + i + "%</text>";
        return t && (a += '<text class="mh-circle-chart__subline" x="16.91549431" y="22">' + t + "</text>"), a += " </g></svg>"
    }! function (e) {
        e.fn.mh_circlechart = function () {
            return this.each(function () {
                var t = e(this).data("percentage"),
                    n = e(this).text();
                e(this).html(makesvg(t, n))
            }), this
        }
    }(jQuery)
} catch {}
try {
    var mh_form_login = document.querySelector(".mh-form-style-1 #mh-form-login"),
        mh_form_register = document.querySelector(".mh-form-style-1 #mh-form-register"),
        mh_form_btn = document.querySelector(".mh-form-style-1 #mh-form-btn");

    function register() {
        mh_form_login.style.left = "-400px", mh_form_register.style.left = "50px", mh_form_btn.style.left = "110px"
    }

    function login() {
        mh_form_login.style.left = "50px", mh_form_register.style.left = "450px", mh_form_btn.style.left = "0"
    }
} catch {}
try {
    var imagegallerymainImg = document.querySelectorAll(".mh-image-gallery-style-1 .mh-image-gallery-main-img"),
        imagegallerymodalImg = document.querySelector(".mh-image-gallery-style-1 .mh-image-gallery-display-img"),
        imagegalleryclose = document.querySelector(".mh-image-gallery-style-1 .mh-image-gallery-close-button"),
        imagegallerydisplayId = document.querySelector(".mh-image-gallery-style-1 #mh-image-gallery-display-section");
    for (let e = 0; e < imagegallerymainImg.length; e++) imagegallerymainImg[e].addEventListener("click", function () {
        imagegallerydisplayId.style.display = "block", imagegallerymodalImg.src = imagegallerymainImg[e].src
    });
    imagegalleryclose.addEventListener("click", function () {
        imagegallerydisplayId.style.display = "none"
    })
} catch {}
try {
    ! function (e, t) {
        if ("function" == typeof define && define.amd) define(["module", "exports"], t);
        else if ("undefined" != typeof exports) t(module, exports);
        else {
            var n = {
                exports: {}
            };
            t(n, n.exports), e.mhstyle_animate = n.exports
        }
    }(this, function (e, t) {
        "use strict";
        var n, i;

        function a(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var o = function () {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                }
            }
            return function (t, n, i) {
                return n && e(t.prototype, n), i && e(t, i), t
            }
        }();

        function s(e, t) {
            return t.indexOf(e) >= 0
        }

        function l(e, t, n) {
            null != e.addEventListener ? e.addEventListener(t, n, !1) : null != e.attachEvent ? e.attachEvent("on" + t, n) : e[t] = n
        }

        function r(e, t, n) {
            null != e.removeEventListener ? e.removeEventListener(t, n, !1) : null != e.detachEvent ? e.detachEvent("on" + t, n) : delete e[t]
        }
        var c = window.WeakMap || window.MozWeakMap || function () {
                function e() {
                    a(this, e), this.keys = [], this.values = []
                }
                return o(e, [{
                    key: "get",
                    value: function (e) {
                        for (var t = 0; t < this.keys.length; t++) {
                            if (this.keys[t] === e) return this.values[t]
                        }
                    }
                }, {
                    key: "set",
                    value: function (e, t) {
                        for (var n = 0; n < this.keys.length; n++) {
                            if (this.keys[n] === e) return this.values[n] = t, this
                        }
                        return this.keys.push(e), this.values.push(t), this
                    }
                }]), e
            }(),
            h = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver || (i = n = function () {
                function e() {
                    a(this, e), "undefined" != typeof console && null !== console && (console.warn("MutationObserver is not supported by your browser."), console.warn("mhstyle_animate.js cannot detect dom mutations, please call .sync() after loading new content."))
                }
                return o(e, [{
                    key: "observe",
                    value: function () {}
                }]), e
            }(), n.notSupported = !0, i),
            d = window.getComputedStyle || function (e) {
                var t = /(\-([a-z]){1})/g;
                return {
                    getPropertyValue: function (n) {
                        "float" === n && (n = "styleFloat"), t.test(n) && n.replace(t, function (e, t) {
                            return t.toUpperCase()
                        });
                        var i = e.currentStyle;
                        return (null != i ? i[n] : void 0) || null
                    }
                }
            },
            m = function () {
                function e() {
                    var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                    a(this, e), this.defaults = {
                        boxClass: "mh-animated",
                        animateClass: "mh-animate",
                        offset: 0,
                        mobile: !0,
                        live: !0,
                        callback: null,
                        scrollContainer: null,
                        resetAnimation: !0
                    }, this.animate = "requestAnimationFrame" in window ? function (e) {
                        return window.requestAnimationFrame(e)
                    } : function (e) {
                        return e()
                    }, this.vendors = ["moz", "webkit"], this.start = this.start.bind(this), this.resetAnimation = this.resetAnimation.bind(this), this.scrollHandler = this.scrollHandler.bind(this), this.scrollCallback = this.scrollCallback.bind(this), this.scrolled = !0, this.config = function (e, t) {
                        for (var n in t)
                            if (null == e[n]) {
                                var i = t[n];
                                e[n] = i
                            } return e
                    }(t, this.defaults), null != t.scrollContainer && (this.config.scrollContainer = document.querySelector(t.scrollContainer)), this.animationNameCache = new c, this.mhEvent = function (e) {
                        var t = !(arguments.length <= 1 || void 0 === arguments[1]) && arguments[1],
                            n = !(arguments.length <= 2 || void 0 === arguments[2]) && arguments[2],
                            i = arguments.length <= 3 || void 0 === arguments[3] ? null : arguments[3],
                            a = void 0;
                        return null != document.createEvent ? (a = document.createEvent("CustomEvent")).initCustomEvent(e, t, n, i) : null != document.createEventObject ? (a = document.createEventObject()).eventType = e : a.eventName = e, a
                    }(this.config.boxClass)
                }
                return o(e, [{
                    key: "init",
                    value: function () {
                        this.element = window.document.documentElement, s(document.readyState, ["interactive", "complete"]) ? this.start() : l(document, "DOMContentLoaded", this.start), this.finished = []
                    }
                }, {
                    key: "start",
                    value: function () {
                        var e = this;
                        if (this.stopped = !1, this.boxes = [].slice.call(this.element.querySelectorAll("." + this.config.boxClass)), this.all = this.boxes.slice(0), this.boxes.length)
                            if (this.disabled()) this.resetStyle();
                            else
                                for (var t = 0; t < this.boxes.length; t++) {
                                    var n = this.boxes[t];
                                    this.applyStyle(n, !0)
                                }(this.disabled() || (l(this.config.scrollContainer || window, "scroll", this.scrollHandler), l(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live) && new h(function (t) {
                                    for (var n = 0; n < t.length; n++)
                                        for (var i = t[n], a = 0; a < i.addedNodes.length; a++) {
                                            var o = i.addedNodes[a];
                                            e.doSync(o)
                                        }
                                }).observe(document.body, {
                                    childList: !0,
                                    subtree: !0
                                })
                    }
                }, {
                    key: "stop",
                    value: function () {
                        this.stopped = !0, r(this.config.scrollContainer || window, "scroll", this.scrollHandler), r(window, "resize", this.scrollHandler), null != this.interval && clearInterval(this.interval)
                    }
                }, {
                    key: "sync",
                    value: function () {
                        h.notSupported && this.doSync(this.element)
                    }
                }, {
                    key: "doSync",
                    value: function (e) {
                        if (null == e && (e = this.element), 1 === e.nodeType)
                            for (var t = (e = e.parentNode || e).querySelectorAll("." + this.config.boxClass), n = 0; n < t.length; n++) {
                                var i = t[n];
                                s(i, this.all) || (this.boxes.push(i), this.all.push(i), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(i, !0), this.scrolled = !0)
                            }
                    }
                }, {
                    key: "show",
                    value: function (e) {
                        var t, n;
                        return this.applyStyle(e), e.className = e.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(e), t = e, n = this.mhEvent, null != t.dispatchEvent ? t.dispatchEvent(n) : n in (null != t) ? t[n]() : "on" + n in (null != t) && t["on" + n](), this.config.resetAnimation && (l(e, "animationend", this.resetAnimation), l(e, "oanimationend", this.resetAnimation), l(e, "webkitAnimationEnd", this.resetAnimation), l(e, "MSAnimationEnd", this.resetAnimation)), e
                    }
                }, {
                    key: "applyStyle",
                    value: function (e, t) {
                        var n = this,
                            i = e.getAttribute("data-mh-animated-duration"),
                            a = e.getAttribute("data-mh-animated-delay"),
                            o = e.getAttribute("data-mh-animated-iteration");
                        return this.animate(function () {
                            return n.customStyle(e, t, i, a, o)
                        })
                    }
                }, {
                    key: "resetStyle",
                    value: function () {
                        for (var e = 0; e < this.boxes.length; e++) {
                            this.boxes[e].style.visibility = "visible"
                        }
                    }
                }, {
                    key: "resetAnimation",
                    value: function (e) {
                        if (e.type.toLowerCase().indexOf("animationend") >= 0) {
                            var t = e.target || e.srcElement;
                            t.className = t.className.replace(this.config.animateClass, "").trim()
                        }
                    }
                }, {
                    key: "customStyle",
                    value: function (e, t, n, i, a) {
                        return t && this.cacheAnimationName(e), e.style.visibility = t ? "hidden" : "visible", n && this.vendorSet(e.style, {
                            animationDuration: n
                        }), i && this.vendorSet(e.style, {
                            animationDelay: i
                        }), a && this.vendorSet(e.style, {
                            animationIterationCount: a
                        }), this.vendorSet(e.style, {
                            animationName: t ? "none" : this.cachedAnimationName(e)
                        }), e
                    }
                }, {
                    key: "vendorSet",
                    value: function (e, t) {
                        for (var n in t)
                            if (t.hasOwnProperty(n)) {
                                var i = t[n];
                                e["" + n] = i;
                                for (var a = 0; a < this.vendors.length; a++) {
                                    e["" + this.vendors[a] + n.charAt(0).toUpperCase() + n.substr(1)] = i
                                }
                            }
                    }
                }, {
                    key: "vendorCSS",
                    value: function (e, t) {
                        for (var n = d(e), i = n.getPropertyCSSValue(t), a = 0; a < this.vendors.length; a++) {
                            var o = this.vendors[a];
                            i = i || n.getPropertyCSSValue("-" + o + "-" + t)
                        }
                        return i
                    }
                }, {
                    key: "animationName",
                    value: function (e) {
                        var t = void 0;
                        try {
                            t = this.vendorCSS(e, "animation-name").cssText
                        } catch (n) {
                            t = d(e).getPropertyValue("animation-name")
                        }
                        return "none" === t ? "" : t
                    }
                }, {
                    key: "cacheAnimationName",
                    value: function (e) {
                        return this.animationNameCache.set(e, this.animationName(e))
                    }
                }, {
                    key: "cachedAnimationName",
                    value: function (e) {
                        return this.animationNameCache.get(e)
                    }
                }, {
                    key: "scrollHandler",
                    value: function () {
                        this.scrolled = !0
                    }
                }, {
                    key: "scrollCallback",
                    value: function () {
                        if (this.scrolled) {
                            this.scrolled = !1;
                            for (var e = [], t = 0; t < this.boxes.length; t++) {
                                var n = this.boxes[t];
                                if (n) {
                                    if (this.isVisible(n)) {
                                        this.show(n);
                                        continue
                                    }
                                    e.push(n)
                                }
                            }
                            this.boxes = e, this.boxes.length || this.config.live || this.stop()
                        }
                    }
                }, {
                    key: "offsetTop",
                    value: function (e) {
                        for (; void 0 === e.offsetTop;) e = e.parentNode;
                        for (var t = e.offsetTop; e.offsetParent;) t += (e = e.offsetParent).offsetTop;
                        return t
                    }
                }, {
                    key: "isVisible",
                    value: function (e) {
                        var t = e.getAttribute("data-mh-animated-offset") || this.config.offset,
                            n = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset,
                            i = n + Math.min(this.element.clientHeight, "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight) - t,
                            a = this.offsetTop(e),
                            o = a + e.clientHeight;
                        return a <= i && o >= n
                    }
                }, {
                    key: "disabled",
                    value: function () {
                        return !this.config.mobile && (e = navigator.userAgent, /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e));
                        var e
                    }
                }]), e
            }();
        t.default = m, e.exports = t.default
    })
} catch {}
try {
    const e = document.querySelector(".mh-drag-drop"),
        t = e.querySelector(".mh-drag-drop-header"),
        n = e.querySelector(".mh-drag-drop-button"),
        i = e.querySelector(".mh-drag-drop-input");
    let a;

    function showFile() {
        let t = a.type;
        if (["image/jpeg", "image/jpg", "image/png"].includes(t)) {
            let t = new FileReader;
            t.onload = (() => {
                let n = `<img src="${t.result}" alt="">`;
                e.innerHTML = n
            }), t.readAsDataURL(a)
        } else e.classList.remove("active"), alert("It's don't support")
    }
    n.onclick = (() => {
        i.click()
    }), i.addEventListener("change", function () {
        a = this.files[0], showFile(), e.classList.add("active")
    }), e.addEventListener("dragover", n => {
        n.preventDefault(), e.classList.add("active"), t.textContent = "Release to Upload File"
    }), e.addEventListener("dragleave", () => {
        e.classList.remove("active"), t.textContent = "Drag & Drop to Upload File"
    }), e.addEventListener("drop", e => {
        e.preventDefault(), a = e.dataTransfer.files[0], showFile()
    })
} catch {}
try {
    ! function (e) {
        e(document).ready(function () {
            e(".mh-sidebar-menu li").click(function () {
                e(".mh-sidebar-menu li").removeClass("active"), e(this).addClass("active")
            }), e(".mh-hamburger").click(function () {
                e(".mh-sidebar-style-2").addClass("active")
            }), e(".mh-hamburger-nav").click(function () {
                e(".mh-navbar-style-4").toggleClass("active")
            }), e(".mh-close, .mh-bg-shadow").click(function () {
                e(".mh-sidebar-style-2").removeClass("active")
            })
        })
    }(jQuery)
} catch {}
try {
    ! function (e) {
        function t(t) {
            var n = !1,
                i = !1;
            t.find(".mh-supermodal-window").length ? (n = t.find(".mh-supermodal-window"), i = t) : t.parents(".mh-supermodal-window:first").length && (n = t.parents(".mh-supermodal-window:first"), i = t.parents(".mh-supermodal-container:first")), n && (n.removeClass("show").addClass("hide"), setTimeout(function () {
                i.remove(), e(".mh-supermodal-container").length || e("html").css("overflow", "auto")
            }, 300))
        }
        e.supermodal = function (n) {
            var i = e.extend({
                backButton: !0,
                maxWidth: "90%",
                maxHeight: "90%",
                background: "#fff",
                color: "",
                shadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
                containerBackground: "rgba(0,0,0,0.2)",
                containerClass: "",
                containerZIndex: "1000",
                showTitle: !0,
                title: "",
                titleColor: "#fff",
                titleBackground: "#02A1FF",
                closeButton: !0,
                closeButtonIcon: "mh mhi-times",
                lazyLoading: !1,
                ajax: !1
            }, n);
            e("[data-modal]").click(function () {
                ! function n(i, a) {
                    var o = Object.assign({}, a);
                    var s = e(i).attr("data-modal");
                    var l = "";
                    var r;
                    for ([key, value] of Object.entries(a))
                        if (e(i).attr("data-modal-" + key)) {
                            var c = e(i).attr("data-modal-" + key);
                            "true" == c && (c = !0), "false" == c && (c = !1), o[key] = c
                        } o.ajax ? (e.ajaxSetup({
                        async: !1
                    }), e.get(s, function (e) {
                        r = e, s = (new Date).getTime()
                    })) : r = e("#" + s).html();
                    if (r) {
                        var h = '.mh-supermodal-container[id="modal_' + s + '"]',
                            d = 1;
                        e(".mh-supermodal-container").length && (d = e(".mh-supermodal-container").length + 1), e("body").append('<div id="modal_' + s + '" data-modal-level="' + d + '" class="mh-supermodal-container"><div class="mh-supermodal-window"><div class="mh-supermodal-body">' + r + "</div></div></div>"), o.showTitle && (l = o.title ? o.title : s, e(h + " .mh-supermodal-window").prepend('<div class="mh-supermodal-title">' + l + "</div>")), o.closeButton && e(h + " .mh-supermodal-window .mh-supermodal-title").prepend('<div class="mh-supermodal-close"><i class="' + o.closeButtonIcon + '"></i></div>'), e(h + " .mh-supermodal-window").css("max-height", o.maxHeight), e(h + " .mh-supermodal-window").css("max-width", o.maxWidth), e(h + " .mh-supermodal-window").css("background", o.background), e(h + " .mh-supermodal-window").css("color", o.color), e(h + " .mh-supermodal-window").css("box-shadow", o.shadow), e(h).css("background", o.containerBackground), e(h).css("z-index", o.containerZIndex), e(h + " .mh-supermodal-window .mh-supermodal-title").css("background", o.titleBackground), e(h + " .mh-supermodal-window .mh-supermodal-title").css("color", o.titleColor), "" != o.containerClass && e(h).addClass(o.containerClass), e(h + " .mh-supermodal-window").addClass("show"), o.backButton && (window.location.hash = d + "_" + s), e(h + " .mh-supermodal-window .mh-supermodal-close, " + h + " [data-modal-close]").click(function () {
                            ! function (e, n = Array()) {
                                n.backButton ? window.history.back() : t(e)
                            }(e(h), o)
                        }), e("html").css("overflow", "hidden"), e(h + " [data-modal]").click(function () {
                            n(this, o)
                        }), o.lazyLoading && e(h + " img[data-src]").each(function () {
                            e(this).attr("src", e(this).attr("data-src"))
                        })
                    }
                }(this, i)
            })
        }, e(window).on("hashchange", function () {
            if ("" == window.location.hash) t(e(".mh-supermodal-container"));
            else {
                var n = window.location.hash.replace("#", "").split("_");
                e(".mh-supermodal-container").each(function () {
                    e(this).attr("data-modal-level") > n[0] && t(e(this))
                })
            }
        }), e(document).ready(function () {
            if ("" != window.location.hash) {
                var t = window.location.hash.replace("#", "").split("_");
                e('[data-modal="' + t[1] + '"').click()
            }
        })
    }(jQuery)
} catch {}