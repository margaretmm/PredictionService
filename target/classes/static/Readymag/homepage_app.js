function _toConsumableArray(t) {
    if (Array.isArray(t)) {
        for (var e = 0, i = Array(t.length); e < t.length; e++) i[e] = t[e];
        return i;
    }
    return Array.from(t);
}

function preloadDesignImages(t) {
    if (preloadDesignImagesList[t] && !preloadDesignImagesList[t].preloaded) {
        preloadDesignImagesList[t].preloaded = !0;
        for (var e = preloadDesignImagesList[t].prefix, i = preloadDesignImagesList[t].imgs, n = [], o = 0; o < i.length; o++) n[o] = new Image(), 
        n[o].src = e + (Modernizr.retina ? i[o].replace(/\.(png|gif|jpg)$/, "@2x$&") : i[o]);
    }
}

var _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
    return typeof t;
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};

Modernizr.addTest("retina", function() {
    return window.devicePixelRatio > 1;
}), Modernizr.addTest("android", function() {
    return window.navigator.userAgent.toLowerCase().match(/Android/i);
}), Modernizr.addTest("amazonsilk", function() {
    return /\bSilk\b/.test(navigator.userAgent);
}), Modernizr.addTest("Mac", function() {
    return -1 != window.navigator.userAgent.indexOf("Mac");
}), Modernizr.addTest("webkit", function() {
    return -1 != window.navigator.userAgent.indexOf("AppleWebKit");
}), Modernizr.addTest("opera", function() {
    return !(!window.opera || !window.opera.buildNumber);
}), Modernizr.addTest("msie", function() {
    return !!Function("/*@cc_on return document.documentMode===10@*/")();
}), Modernizr.addTest("msie11", function() {
    return -1 != navigator.userAgent.indexOf("Trident/") && (-1 != navigator.userAgent.indexOf("rv:") || -1 != navigator.appName.indexOf("Netscape"));
}), Modernizr.addTest("winphone8", function() {
    return -1 != navigator.userAgent.indexOf("Trident/") && (-1 != navigator.userAgent.indexOf("Phone") || -1 != navigator.userAgent.indexOf("IEMobile/"));
}), Modernizr.addTest("safari", function() {
    return -1 != navigator.userAgent.indexOf("Safari") && (-1 != navigator.userAgent.indexOf("Mac") || navigator.userAgent.indexOf("Windows")) && -1 == navigator.userAgent.indexOf("Chrome");
}), Modernizr.addTest("safari5", function() {
    return !!navigator.userAgent.match(" Safari/") && !navigator.userAgent.match(" Chrom") && !!navigator.userAgent.match(" Version/5.");
}), Modernizr.addTest("isboxversion", function() {
    return 1 == window.isboxversion;
}), Modernizr.addTest("isdesktop", function() {
    return 1 == window.isdesktop;
}), Modernizr.addTest("istablet", function() {
    return 1 == window.istablet;
}), Modernizr.addTest("isphone", function() {
    return 1 == window.isphone;
}), Modernizr.addTest("firefox", function() {
    return window.navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
}), Modernizr.addTest("csspositionsticky", function() {
    var t = document.createElement("modernizr").style;
    return t.cssText = "position:" + Modernizr._prefixes.join("sticky;position:").slice(0, -"position:".length), 
    -1 !== t.position.indexOf("sticky");
}), window.RM = {
    models: {},
    collections: {},
    classes: {},
    blocks: {},
    controls: {},
    panels: {},
    widgets: {},
    views: {},
    data: {},
    common: {
        disableShortcuts: {}
    },
    templates: {}
}, window.ES6Promise && window.ES6Promise.polyfill(), RM.templates["template-common-alert"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) {
            __p += "\n\t";
            var categories = {
                "type-duplicate": "category-upgrade",
                "type-create": "category-upgrade",
                "type-export-pdf": "category-upgrade",
                "type-export-code": "category-upgrade",
                "type-more-pages": "category-upgrade",
                "type-upload-fonts": "category-upgrade",
                "type-custom-seo": "category-upgrade",
                "type-custom-sharing": "category-upgrade",
                "type-code-injection": "category-upgrade",
                "type-publish": "category-confirm-email",
                "type-switch-desktop-create": "category-mobile",
                "type-switch-desktop-continue": "category-mobile",
                "type-browsers": "category-browsers",
                "type-shared-failed": "category-shared-failed",
                "type-shared-unlock-page": "category-shared-unlock-page"
            }, headers = {
                "category-upgrade": "Push the Limits",
                "category-upgrade-skip": "Push the Limits",
                "category-browsers": "Browser Support",
                "category-shared-failed": "Sorry, something<br/>went wrong.",
                "category-confirm-email": "Account Activation"
            }, texts = {
                "type-duplicate": 'To duplicate this project you need to upgrade your account. You can find out more about our subscription plans <a href="/pricing" class="learn-more">here</a>.',
                "type-create": 'To create more projects you need to upgrade your account. You can find out more about our subscription plans <a href="/pricing" class="learn-more">here</a>.',
                "type-publish": "Please verify your email address<br />to publish this project.",
                "type-export-pdf": 'Please upgrade your account<br/>to export the project to PDF.<br/><a href="/pricing" class="learn-more">See the pricing</a>.',
                "type-export-code": 'Please upgrade your account<br/>in order to export the source<br/>code of your projects.<br/><a href="/pricing" class="learn-more">See the pricing</a>.',
                "type-more-pages": 'Please upgrade your account<br/>to create more pages.<br><a href="/pricing" class="learn-more">See the pricing</a>.',
                "type-custom-seo": 'Please upgrade your account<br/> to customize SEO parameters.<br/><a href="/pricing" class="learn-more">See the pricing</a>.',
                "type-custom-sharing": 'Please upgrade your account<br/>to customize social sharing info.<br/><a href="/pricing" class="learn-more">See the pricing</a>.',
                "type-code-injection": 'Please upgrade your account to<br/>make custom code work after<br/>you publish the project.<br/><a href="/pricing" class="learn-more">See the pricing</a>.',
                "type-browsers": "Sorry, our Editor doesn’t support Internet Explorer. This may change in the future, but for now please use Chrome, Firefox or Safari.",
                "type-switch-desktop-create": "To create a project, please use your laptop or desktop computer.",
                "type-switch-desktop-continue": "To continue, please use your laptop or desktop computer.",
                "type-shared-failed": 'Please contact <a href="mailto:support@readymag.com" class="learn-more">support</a>.',
                "type-upload-fonts": 'Please upgrade your account<br/>to upload your own fonts.<br/><a href="/pricing" class="learn-more">See the pricing</a>.'
            }, buttons = {
                "category-upgrade": '<a href="/settings/subscription/update" class="button main upgrade">Upgrade</a><div class="cancel-wrapper">or ' + ("type-code-injection" == opts.type ? '<span class="button cancel" data-type="skip">Skip</span>' : '<span class="button cancel">Cancel</span>') + "</div>",
                "category-browsers": '<div class="button main ok">Okay</div>',
                "category-mobile": '<div class="button main ok">Okay</div>',
                "category-shared-failed": '<div class="button close">Close</div>',
                "category-shared-unlock-page": '<div class="button ok">Ok</div>',
                "category-confirm-email": '<div  class="button main resend">Resend</div><div class="cancel-wrapper">or <span class="button cancel">Cancel</span></div>'
            }, category = categories[opts.type], header = headers[category], text = texts[opts.type] || opts.text, button = buttons[category];
            opts.is_contributor && (text = "Please upgrade owner’s account<br/>to be able to use this feature.", 
            button = '<a href="mailto:' + opts.owner_email + '" class="contact-link">Contact owner</a><div class="cancel-wrapper">' + ("type-code-injection" == opts.type ? 'or <span class="button cancel" data-type="skip">Skip</span>' : '<span class="button cancel">Cancel</span>') + "</div>"), 
            __p += '\n\n\t<div class="alert-popup ' + (null == (__t = category) ? "" : __t) + '">\n\t\t<div class="panel-wrapper">\n\t\t\t<div class="center-table">\n\t\t\t\t<div class="center-cell">\n\t\t\t\t\t<div class="panel">\n\n\t\t\t\t\t\t' + (null == (__t = header ? '<div class="header">' + header + "</div>" : "") ? "" : __t) + '\n\n\t\t\t\t\t\t<div class="icon" ' + (null == (__t = opts.icon ? 'style="background-image:url(' + opts.icon + ')"' : "") ? "" : __t) + "></div>\n\n\t\t\t\t\t\t" + (null == (__t = text ? '<div class="text">' + text + "</div>" : "") ? "" : __t) + "\n\n\t\t\t\t\t\t" + (null == (__t = button ? '<div class="buttons">' + button + "</div>" : "") ? "" : __t) + "\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n";
        }
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-common-audio-player-standard"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n\t<iframe class="common-audio-player standard" width="100%" height="100%" scrolling="no" frameborder="no" src="' + (null == (__t = src) ? "" : _.escape(__t)) + '"></iframe>\n';
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-common-audio-player-minimal"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n\t<div class="common-audio-player minimal loading">\n\n\t\t<div class="sc-artwork-list">\n\t\t\t<div class="sc-loaded-artwork"></div>\n\t\t\t<div class="sc-artworks-overlay"></div>\n\t\t</div>\n\n\t\t<div class="sc-info">\n\t\t\t<h3></h3>\n\t\t\t<h4></h4>\n\t\t</div>\n\n\t\t<div class="sc-scrubber no-rmswipe">\n\t\t\t<div class="sc-hover-indicator"></div>\n\t\t\t<div class="sc-time-span">\n\t\t\t\t<div class="sc-buffer"></div>\n\t\t\t\t<div class="sc-played"></div>\n\t\t\t\t<div class="sc-button-wrapper">\n\t\t\t\t\t<div class="sc-button">\n\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="12" height="12"><path d="M0 0 L12 6 L0 12  Z " style="fill:#1d1a1b; stroke:none; stroke-width:0"></path></svg>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="sc-time-indicators">\n\t\t\t\t<span class="sc-left"></span>\n\t\t\t</div>\n\t\t</div>\n\n\t</div>\n';
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-common-audio-player-engine-html5"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n\t<div class="common-audio-player-engine">\n\t\t<audio preload="auto"></audio>\n\t</div>\n';
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-common-audio-player-engine-flash"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n\t<div class="common-audio-player-engine">\n\t\t<object height="100%" width="100%" id="' + (null == (__t = id) ? "" : _.escape(__t)) + '">\n\t\t\t<embed allowscriptaccess="always" height="100%" width="100%" src="' + (null == (__t = swf) ? "" : __t) + '" type="application/x-shockwave-flash" name="' + (null == (__t = id) ? "" : _.escape(__t)) + '" />\n\t    </object>\n\t</div>\n';
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-common-audio-player-engine-flash-ie"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n\t<div class="common-audio-player-engine">\n\t\t<object height="100%" width="100%" id="' + (null == (__t = id) ? "" : _.escape(__t)) + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" data="' + (null == (__t = swf) ? "" : _.escape(__t)) + '">\n\t\t\t<param name="movie" value="' + (null == (__t = swf) ? "" : _.escape(__t)) + '" />\n\t\t\t<param name="allowscriptaccess" value="always" />\n\t\t</object>\n\t</div>\n';
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-common-button-widget"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n\n    <div class="common-button" data-id="' + (null == (__t = data._id) ? "" : _.escape(__t)) + '">\n\n        <div class="icon"></div>\n\n    </div>\n\n';
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-common-export-code"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n\t<div class="export-code-popup">\n\t\t<div class="panel-wrapper">\n\t\t\t<div class="close"></div>\n\n\t\t\t<div class="panel">\n\t\t\t\t<div class="header">Export code</div>\n\n\t\t\t\t\x3c!--__magterm--\x3e\n\t\t\t\t<div class="message">Please provide a domain name if the project</br>will be hosted on another server. Typekit</br>fonts will only work on this domain.</div>\n\n\t\t\t\t<input class="domain-input" type="text" placeholder="yourdomain.com"/>\n\n\t\t\t\t<a href="" class="download">\n\t\t\t\t\t<span>Download</span>\n\t\t\t\t\t<div class="rmpreloader">\n\t\t\t\t\t    <div class="arc"></div>\n\t\t\t\t\t</div>\n\t\t\t\t</a>\n\n\t\t\t\t<ul class="alerts">\n\t\t\t\t\t<li class="alert-item alert-forms">\n\t\t\t\t\t\t<div class="alert-item-icon">\n\t\t\t\t\t\t\t<span class="notification-sign">!</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="alert-text">\n\t\t\t\t\t\t\tForms will not send submitted data to emails, Google Docs, or Mailchimp.<br>Only URL option will work.\n\t\t\t\t\t\t\t<a href="http://help.readymag.com/form/" class="alert-learn-more" target="_blank">Learn more</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n\t</div>\n';
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-common-export-pdf"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n\t<div class="export-pdf-popup">\n\t\t<div class="panel-wrapper">\n\t\t\t<div class="close"></div>\n\n\t\t\t<div class="panel">\n\t\t\t\t<div class="header">Export to PDF<span>β</span></div>\n\n\t\t\t\t<div class="initial-block">\n\t\t\t\t\t<div class="radio-group">\n\t\t\t\t\t\t<div class="input-wrapper">\n\t\t\t\t\t\t\t<input type="radio" id="export-pdf-all" name="export-pdf-type" value="all" checked><label for="export-pdf-all" class="caption">All Pages</label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="input-wrapper">\n\t\t\t\t\t\t\t<input type="radio" id="export-pdf-custom" name="export-pdf-type" value="custom"><label for="export-pdf-custom" class="caption"><input type="text" required="required" placeholder="e.g. 1-8, 11"></label>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class="errors"></div>\n\n\t\t\t\t\t<div class="create-pdf">Create PDF</div>\n\n\t\t\t\t\t\x3c!--__magterm--\x3e\n\t\t\t\t\t<div class="typekit-issue">Please note that if your projects contains Typekit web fonts they will be replaced by alternatives due to license restrictions.</div>\n\t\t\t\t</div>\n\n\t\t\t\t<div class="done-block">\n\t\t\t\t\t\x3c!--__magterm--\x3e\n\t\t\t\t\t<div class="message">Your project is being converted.<br/>We will send you the download link to ' + (null == (__t = email) ? "" : _.escape(__t)) + ' when it’s ready.</div>\n\n\t\t\t\t\t<div class="done">Done</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n';
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-common-form-button"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n\t<div class="button">\n\t\t<div class="caption"></div>\n\t\t<svg class="error" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 26"><path d="M17 19.8c-1.4 0-2.6 1.1-2.6 2.6s1.1 2.6 2.6 2.6c1.4 0 2.6-1.1 2.6-2.6S18.4 19.8 17 19.8zM19 0.4h-4L15 17.4h4L19 0.4z"/></svg>\n\t\t<svg class="submitted" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 26"><path d="M31.4 3C30.6 2.3 29.4 2.3 28.6 3l0 0L13.1 18.6l-7.8-7.8 0 0c-0.8-0.7-2-0.7-2.7 0 -0.8 0.8-0.8 2 0 2.7l0 0L13.1 24.1l0.4-0.4h0L31.4 5.8l0 0C32.1 5 32.1 3.8 31.4 3z"/></svg>\n\t</div>\n';
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-common-gift"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n\n\t<div class="wrapper">\n\t\t<div class="form-wrapper">\n\t\t\t<div class="clearfix">\n\t\t\t\t<div class="left-column">\n\t\t\t\t\t<div class="choose-gift">CHOOSE GIFT</div>\n\t\t\t\t\t<div class="period-selector">\n\t\t\t\t\t\t<div class="period month active" data-plan="creator_monthly">\n\t\t\t\t\t\t\t<div class="caption">1 Month of<br>Creator plan</div>\n\t\t\t\t\t\t\t<div class="price">$' + (null == (__t = month_price) ? "" : __t) + '</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="period year" data-plan="creator_yearly">\n\t\t\t\t\t\t\t<div class="caption">1 Year of<br>Creator plan</div>\n\t\t\t\t\t\t\t<div class="price">$' + (null == (__t = year_price) ? "" : __t) + '</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class="field-wrapper email">\n\t\t\t\t\t\t<div class="caption">EMAIL TO</div>\n\t\t\t\t\t\t<input autocapitalize="off" autocorrect="off" type="email" spellcheck="false" value="" placeholder="@" />\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class="field-wrapper from">\n\t\t\t\t\t\t<div class="caption">FROM</div>\n\t\t\t\t\t\t<input autocapitalize="on" autocorrect="off" maxlength="56" type="text" spellcheck="false" value="" placeholder="Name" />\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class="field-wrapper message">\n\t\t\t\t\t\t<div class="caption">MESSAGE</div>\n\t\t\t\t\t\t<textarea maxlength="200" placeholder="Optional"></textarea>\n\t\t\t\t\t\t<div class="counter"></div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class="field-wrapper send">\n\t\t\t\t\t\t<div class="caption">SEND</div>\n\t\t\t\t\t\t<input readonly type="text"/>\n\t\t\t\t\t\t<div class="formated-date"></div>\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\n\n\t\t\t\t<div class="right-column">\n\t\t\t\t\t<div class="how-it-looks">HOW IT LOOKS</div>\n\n\t\t\t\t\t<div class="card-cover"></div>\n\n\t\t\t\t\t<div class="card-wrapper new-card clearfix ' + (null == (__t = _.isEmpty(existing_card) ? "" : "hidden") ? "" : __t) + '">\n\t\t\t\t\t\t', 
        _.isEmpty(existing_card) || (__p += '\n\t\t\t\t\t\t\t<div class="card-switcher" data-value="existing-card">Use existing card</div>\n\t\t\t\t\t\t'), 
        __p += '\n\n\t\t\t\t\t\t<div class="field-wrapper card-name">\n\t\t\t\t\t\t\t<div class="caption">NAME ON CARD</div>\n\t\t\t\t\t\t\t<input type="text" placeholder="Maggie Ready"/>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class="field-wrapper card-number">\n\t\t\t\t\t\t\t<div class="caption">CARD NUMBER</div>\n\t\t\t\t\t\t\t<input type="text" maxlength="19" placeholder="●●●● ●●●● ●●●● ●●●●"/>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class="field-wrapper card-date">\n\t\t\t\t\t\t\t<div class="caption">DATE</div>\n\t\t\t\t\t\t\t<input type="text" maxlength="5" placeholder="MM/YY"/>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class="field-wrapper card-cvc">\n\t\t\t\t\t\t\t<div class="caption">CVC</div>\n\t\t\t\t\t\t\t<input type="text" maxlength="4" placeholder="000"/>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t', 
        _.isEmpty(existing_card) || (__p += '\n\t\t\t\t\t\t<div class="card-wrapper existing-card clearfix">\n\t\t\t\t\t\t\t<div class="card-switcher" data-value="new-card">Use new card</div>\n\n\t\t\t\t\t\t\t<div class="field-wrapper card-name">\n\t\t\t\t\t\t\t\t<div class="caption">NAME ON CARD</div>\n\t\t\t\t\t\t\t\t<input type="text" readonly value="' + (null == (__t = existing_card.name) ? "" : __t) + '"/>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class="field-wrapper card-number">\n\t\t\t\t\t\t\t\t<div class="caption">CARD NUMBER</div>\n\t\t\t\t\t\t\t\t<input type="text" readonly value="●●●● ●●●● ●●●● ' + (null == (__t = existing_card.last4) ? "" : __t) + '"/>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class="field-wrapper card-type">\n\t\t\t\t\t\t\t\t<div class="caption">&nbsp;</div>\n\t\t\t\t\t\t\t\t<input type="text" readonly value="' + (null == (__t = existing_card.brand) ? "" : __t) + '"/>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t'), 
        __p += '\n\n\t\t\t\t\t<div class="secured"><span>Secured by</span><a href="https://stripe.com/" target="_blank"></a></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class="bottom-block inactive">\n\t\t\t\t<div class="send-button">Send Gift<div class="rmpreloader"><div class="arc"></div></div></div>\n\t\t\t\t<div class="charge-sum">YOU WILL BE<br/>CHARGED<br/><span>$' + (null == (__t = month_price) ? "" : __t) + '</span></div>\n\t\t\t\t<div class="error"></div>\n\t\t\t</div>\n\n\t\t\t<div class="charging-overlay"></div>\n\t\t</div>\n\n\t\t<div class="congrats-wrapper invisible">\n\t\t\t<div class="subscription">\n\t\t\t\t<div class="caption"></div>\n\t\t\t\t<div class="price"></div>\n\t\t\t</div>\n\n\t\t\t<div class="awesome"></div>\n\n\t\t\t<div class="order-info"><span class="info-email"></span><br/>will get the email with your gift<br/>on <span class="info-date"></span>.<br/><br/>Just in case, the gift code is:<br/><span class="info-code">adf</span></div>\n\n\t\t\t<div class="back-button">Send Another Gift</div>\n\n\t\t</div>\n\t</div>\n\n\n';
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-common-hotspot-widget"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n\n    <div class="common-hotspot">\n\n\t    <div class="pin"></div>\n\n    </div>\n\n';
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-common-hotspot-widget-mobile-wrapper"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n\n    <div class="hotspot-fullscreen-wrapper invisible">\n        <div class="center-table">\n            <div class="center-cell">\n\n            </div>\n        </div>\n    </div>\n\n';
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-common-login"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n\n\t<div class="login-popup hidden">\n\n\t\t<div class="login-popup-wrapper">\n\t\t\t<div class="login ljr-panel hidden">\n\t\t\t\t', 
        Modernizr.isboxversion ? __p += '\n\t\t\t\t\t<div class="header"><span>Log in</span></div>\n\t\t\t\t' : __p += '\n\t\t\t\t\t<div class="header"><span>Log in</span> or <a href="/join/" class="link">Join</a></div>\n\t\t\t\t', 
        __p += '\n\t\t\t\t<form method="post" action="/api/redirect" id="login_form">\n\t\t\t\t\t<input name="username" autocapitalize="off" autocorrect="off" required="required" class="email-input input-template"  autocomplete="on" type="email" spellcheck="false" value="" placeholder="Email"/>\n\t\t\t\t\t<input name="password" autocapitalize="off" autocorrect="off" required="required" class="password-input input-template" autocomplete="on"  type="password" spellcheck="false" value=""  placeholder="Password" />\n\t\t\t\t\t<input name="url" type="hidden" value="" />\n\t\t\t\t\t<div class="go">Log in</div>\n\t\t\t\t</form>\n\t\t\t\t', 
        Modernizr.isboxversion || (__p += '\n\t\t\t\t\t<div class="social-caption">Log in with</div>\n\t\t\t\t\t<div class="social-auth" data-provider=\'facebook\'>Facebook</div><div class="social-auth" data-provider=\'google\'>Google</div>\n\t\t\t\t'), 
        __p += '\n\t\t\t\t<a href="/recover/" class="link forgot">Forgot password?</a>\n\t\t\t\t<div class="error">Invalid email or password</div>\n\t\t\t</div>\n\n\n\t\t\t', 
        Modernizr.isboxversion || (__p += '\n\t\t\t\t<div class="join ljr-panel hidden">\n\t\t\t\t\t<div class="header"><a href="/login/" class="link">Log in</a> or <span>Join</span></div>\n\t\t\t\t\t<input autocapitalize="on"  autocorrect="off" required="required" class="fullname-input input-template"  maxlength="24" type="text"     spellcheck="false" value="" placeholder="Name" />\n\t\t\t\t\t<input autocapitalize="off" autocorrect="off" required="required" class="email-input input-template"     type="email"    spellcheck="false" value="" placeholder="Email" />\n\t\t\t\t\t<input autocapitalize="off" autocorrect="off" required="required" class="password-input input-template"  type="password" spellcheck="false" value="" placeholder="Password" />\n\t\t\t\t\t<div class="go">Join</div>\n\n\t\t\t\t\t<div class="social-caption">Sign up with</div>\n\t\t\t\t\t<div class="social-auth" data-provider=\'facebook\'>Facebook</div><div class="social-auth" data-provider=\'google\'>Google</div>\n\n\t\t\t\t\t<div class="info">By creating an account, I accept Readymag\'s  <a href="https://readymag.com/readymag/terms-and-privacy/" target="_blank">Terms of Service</a> and <a href="https://readymag.com/readymag/terms-and-privacy/2/" target="_blank">Privacy Policy</a>.</div>\n\t\t\t\t\t<div class="error"></div>\n\t\t\t\t</div>\n\t\t\t'), 
        __p += '\n\n\t\t\t<div class="recover ljr-panel hidden">\n\t\t\t\t<div class="header"><span>Reset Password</span></div>\n\t\t\t\t<div class="wrapper">\n\t\t\t\t\t<div class="info">Please enter your email address and we\'ll send you instructions:</div>\n\t\t\t\t\t<input name="username" autocapitalize="off" autocorrect="off" required="required" class="email-input input-template"  autocomplete="on" type="email" spellcheck="false" value="" placeholder="Email"/>\n\t\t\t\t\t<div class="go">Submit</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="send-message">Done! You should receive an email shortly.</div>\n\t\t\t\t<div class="go-back">Go Back</div>\n\t\t\t</div>\n\n\t\t\t<div class="reset ljr-panel hidden">\n\t\t\t\t<div class="header"><span>Reset Password</span></div>\n\t\t\t\t<input autocapitalize="off" autocorrect="off" required="required" class="new-password-input input-template"  type="password" spellcheck="false" value="" placeholder="New Password" />\n\t\t\t\t<input autocapitalize="off" autocorrect="off" required="required" class="verify-password-input input-template"  type="password" spellcheck="false" value="" placeholder="Verify Password" />\n\t\t\t\t<div class="go">Save</div>\n\t\t\t\t<div class="error"></div>\n\t\t\t</div>\n\n\t\t\t', 
        Modernizr.isboxversion || (__p += '\n\t\t\t\t<div class="close-popup"></div>\n\t\t\t\t<a href="/" class="link go-main"></a>\n\t\t\t'), 
        __p += "\n\t\t</div>\n\t</div>\n\n";
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-common-login-preloader"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n    <div class="rmpreloader button">\n        <div class="arc"></div>\n    </div>\n';
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-constructor-pages-panel-settings-domain"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n\t<div class="header-message section">' + (null == (__t = "mag" == type ? "Сustom domain name" : "Custom domain for profile page") ? "" : __t) + '</div>\n\n\t<div class="initial-preloader rmpreloader section invisible">\n\t\t<div class="shadow"></div>\n\t\t<div class="arc"></div>\n\t</div>\n\n\t<div class="register-switcher section"><span class="registered item active">Use registered</span><span class="dot">•</span><span class="item new">Register new</span></div>\n\n\t<div class="unmap-message section"><span class="unmap-button">Unmap</span> this domain name</div>\n\n\t<div class="test-block section">\n\t\t<input class="domain-input" type="text" spellcheck="false" value="" placeholder="yourdomain.com" />\n\t\t<div class="test-button common-button disabled">Test<div class="rmpreloader"><div class="arc"></div></div></div>\n\t</div>\n\n\t<div class="invalid-domain-message section"><span class="red">Domain name may contain only alphanumeric characters. No directories are allowed.</span><br/><br/><span class="bold">Examples:</span><br/><span class="grey">mydomain.com<br/>www.mydomain.com<br/>readymag.mydomain.com</span></div>\n\n\t<div class="notfound-domain-message section">Domain’s info is not available. Please check if the name is correct. Note, that sometimes it may take few hours for subdomain to be created.</div>\n\n\t<div class="other-user-domain-message section">This domain is already used by <a class="user-button" href="TEMP" target="_blank">TEMP</a>.</div>\n\n\t\x3c!--__magterm--\x3e\n\t<div class="same-user-domain-message section">\n\t\t<span class="red">This domain is already mapped to <span class="entity-type"></span><a class="mag-button" href="TEMP" target="_blank">TEMP</a>. Do you want to switch it to ' + (null == (__t = "mag" == type ? "the current project" : "your profile") ? "" : __t) + '?</span>\n\t\t<div class="switch-button common-button">Yes<div class="rmpreloader"><div class="arc"></div></div></div>\n\t\t<div class="switch-cancel-button">Cancel</div>\n\t</div>\n\n\t<div class="dns-domain-message section">\n\t\t<span class="red">This domain’s <span class="domain-record-type">TEMP</span><span class="domain-set-phrase"> is currently set to </span><span class="domain-set-phrase-unknown invisible"> is not currently set</span><span class="domain-current-value">TEMP</span>. Please change your <span class="domain-record-type">TEMP</span> to <span class="domain-needed-value">TEMP</span> at your registrar settings.</span><br/><br/><span class="grey">After changing the <span class="domain-record-type">TEMP</span> it may take up to 72 hours to update. Please return to these settings after 72 hours and hit “Map Now”.</span>\n\t\t<div class="map-fake-button common-button disabled">Map Now</div>\n\t</div>\n\n\t\x3c!--__magterm--\x3e\n\t<div class="ok-domain-message section">\n\t\t\x3c!--<span class="green">Your domain is pointing to Readymag and can be mapped to this project.</span>--\x3e\n\t\t<span class="green">Your domain is pointing to Readymag and can be mapped to ' + (null == (__t = "mag" == type ? "this project" : "your profile") ? "" : __t) + '.</span>\n\t\t<div class="map-button common-button">Map Now <div class="rmpreloader"><div class="arc"></div></div></div>\n\t\t<div class="map-cancel-button">Cancel</div>\n\t</div>\n\n\t<div class="domain-readonly-block section">\n\t\t<input class="domain-readonly-input" readonly type="text" spellcheck="false" value="" placeholder="yourdomain.com" />\n\t</div>\n\n\n\t<div class="domain-setting favicon section">\n\t\t<div class="caption">\n\t\t\t<span>Favicon</span>\n\t\t</div>\n\t\t<div class="upload-button">\n\t\t\t<span>Clear</span>\n\t\t\t<input class="favicon-uploader" type="file" name="upload" data-url="/api/upload"/>\n\t\t\t<div class="favicon-preloader">\n\t\t\t\t<div class="rmpreloader">\n\t\t\t\t\t<div class="arc"></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\t\t<div class="description">Recommended size 256px</div>\n\n\t</div>\n\n\t<div class="domain-setting ssl-setting section">\n\n\t\t<div class="caption">\n\t\t\t<span>SSL</span>\n\t\t</div>\n\n\t\t<div class="description">Secured with an SSL certificate</div>\n\t\t<div class="switcher"></div>\n\n\t</div>\n\n\t<div class="domain-register-block section">\n\t\t<input class="domain-input" type="text" spellcheck="false" value="" placeholder="iwantmyname.com" />\n\t\t<a class="go-button common-button disabled" href="https://iwantmyname.com" target="_blank">Go</a>\n\t\t<div class="register-message">\n\t\tIf you don’t have a domain name, you can<br/>\n\t\teasly purchase one via our official partner<br/>\n\t\tiwantmyname.com using the search field above<br/>\n\t\tand have it automatically set up to work<br/>\n\t\twith Readymag.</div>\n\t</div>\n\n\t<div class="domain-set-bad-message section">Seems like your DNS settings have been changed. This domain’s <span class="domain-record-type">TEMP</span><span class="domain-set-phrase"> is currently set to </span><span class="domain-set-phrase-unknown invisible"> is not currently set</span><span class="domain-current-value">TEMP</span>. Please change the <span class="domain-record-type">TEMP</span> to: <span class="domain-needed-value">TEMP</span></div>\n\n\t<div class="domain-set-notfound-message section">Domain’s info is not available. Please check if the name is correct. Note, that sometimes it may take few hours for subdomain to be created.</div>\n\n\n\t', 
        is_contributor ? __p += '\n\t<div class="expired-subscription-message section">Please upgrade owner’s account to map a custom domain.\n\t<div><a class="pricing-link" href="mailto:' + (null == (__t = owner_email) ? "" : __t) + '">Contact owner</a></div>\n\t</div>\n\t' : __p += '\n\t<div class="expired-subscription-message section">Please <a class="link" href="/settings/subscription/update">upgrade</a> your account<br/>to map a custom domain.\n\t<div><a class="pricing-link" href="/pricing" target="_blank">See the pricing</a></div>\n\t</div>\n\t', 
        __p += '\n\n\t\x3c!--__magterm--\x3e\n\t<div class="unpublished-message section">In order to use custom domain mapping, you need to publish this project first.</div>\n\n\t<div class="confirm-message section">\n\t\t<span class="black">Are you sure you want<br/>to unmap ' + (null == (__t = "mag" == type ? "this project" : "your profile") ? "" : __t) + ' from<br/><span class="domain-name">TEMP</span>?</span>\n\t\t<div class="confirm-unmap-button common-button">Yes<div class="rmpreloader"><div class="arc"></div></div></div>\n\t</div>\n\n\n\t<div class="error-message error-block section">\n\t\t<span class="black">Something went wrong.<br/>Please try again later.</span>\n\t\t<div class="try-again-button common-button">Ok</div>\n\t</div>\n\n\t<div class="dns-not-updated-yet error-block section">\n\t\t<span class="black">Seems like some DNS servers have not been updated yet.<br/>Please try again later.</span>\n\t\t<div class="try-again-button common-button">Ok</div>\n\t</div>\n\n\t<div class="wait-our-dns-server error-block section">\n\t\t<span class="black">Your domain settings are correct, but it seems like our DNS servers have not been updated yet.<br/>Please try again later.</span>\n\t\t<div class="try-again-button common-button">Ok</div>\n\t</div>\n\n\t\x3c!--__magterm--\x3e\n\t<div class="bottom">\n\n\t\t', 
        "mag" == type && (__p += '\n\t\t\t<div class="bottom-ga-gtm-active section">\n\t\t\t\t<div class="input-wrapper ga-block">\n\t\t\t\t\t<div class="caption">Google Analytics</div>\n\t\t\t\t\t<a class="info" target="_blank" href="http://help.readymag.com/ga/"></a>\n\t\t\t\t\t<input autocapitalize="off" autocorrect="off" autocomplete="off" spellcheck="false" type="text" name="ga_id" id="ga_id" placeholder="UA-XXXXXXX-Y">\n\t\t\t\t</div>\n\t\t\t\t<div class="input-wrapper gtm-block">\n\t\t\t\t\t<div class="caption">Google Tag Manager</div>\n\t\t\t\t\t<a class="info" target="_blank" href="http://help.readymag.com/gtm/"></a>\n\t\t\t\t\t<input autocapitalize="off" autocorrect="off" autocomplete="off" spellcheck="false" type="text" name="gtm_id" id="gtm_id" placeholder="GTM-XXXXXX">\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class="bottom-ga-gtm-inactive section">\n\t\t\t\t<div class="input-wrapper ga-block">\n\t\t\t\t\t<div class="caption">Google Analytics</div>\n\t\t\t\t\t<a class="info" target="_blank" href="http://help.readymag.com/ga/"></a>\n\t\t\t\t\t<input disabled readonly type="text" name="ga_id" id="ga_id" placeholder="UA-XXXXXXX-Y">\n\t\t\t\t</div>\n\t\t\t\t<div class="input-wrapper gtm-block">\n\t\t\t\t\t<div class="caption">Google Tag Manager</div>\n\t\t\t\t\t<a class="info" target="_blank" href="http://help.readymag.com/gtm/"></a>\n\t\t\t\t\t<input disabled readonly type="text" name="gtm_id" id="gtm_id" placeholder="GTM-XXXXXX">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t'), 
        __p += '\n\n\n\t\t<div class="bottom-72-message section">If you don’t see ' + (null == (__t = "mag" == type ? "your project" : "your profile") ? "" : __t) + ' or Readymag page when you visit <a class="your-site-button" href="" target="_blank">your website</a>, the DNS record might need more time to update. This can take up to 72 hours.</div>\n\n\t\t<a class="bottom-help-button section" target="_blank" href="http://help.readymag.com/domains/">Need help?</a>\n\n\t\t<div class="bottom-cancel-button section">Cancel</div>\n\n\t\t<a class="bottom-support-button section" href="mailto:' + (null == (__t = RM.constants.SUPPORT_MAIL) ? "" : __t) + '">Support</a>\n\n\t\t<div class="bottom-unmap-message section">Your domain name <span class="domain-name">TEMP</span> is currently using for ' + (null == (__t = "mag" == type ? "this project" : "your profile") ? "" : __t) + '. <div class="unmap-button">Unmap it?</div></div>\n\t</div>\n';
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-common-404"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n    <div id="page404">\n        <table>\n            <tr>\n                <td>\n                    <div class="caption">Page Not Found.</div>\n                    <div class="message">Sorry, there’s nothing here.<br/>Visit our <a class="front-page-link" href="/">front page</a>.</div>\n                </td>\n            </tr>\n        </table>\n    </div>\n';
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-common-mag-suspended"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n\t<div class="magsuspended-container">\n\t\t<div class="img-preloader"></div>\n\t\t<div class="center-table">\n\t\t\t<div class="center-cell">\n\t\t\t\t<div class="center-content">\n\t\t\t\t\t<div class="caption">Suspended</div>\n\t\t\t\t\t\x3c!--__magterm--\x3e\n\t\t\t\t\t<div class="text">Sorry, this project has been suspended due to violation of Readymag’s <a class="link guides-link nowrap" href="https://readymag.com/readymag/terms-and-privacy/">content guidelines</a>.</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<a class="link contact" href="mailto:' + (null == (__t = RM.constants.SUPPORT_MAIL) ? "" : __t) + '">Contact us</a>\n\t</div>\n';
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-common-user-suspended"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n\t<div class="usersuspended-container">\n\t\t<div class="img-preloader"></div>\n\t\t<div class="center-table">\n\t\t\t<div class="center-cell">\n\t\t\t\t<div class="center-content">\n\t\t\t\t\t<div class="caption">Suspended</div>\n\t\t\t\t\t\x3c!--__magterm--\x3e\n\t\t\t\t\t<div class="text">Sorry, this account has been suspended due to violation of Readymag’s <a class="link guides-link nowrap" href="https://readymag.com/readymag/terms-and-privacy/">content guidelines</a>.</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<a class="link contact" href="mailto:' + (null == (__t = RM.constants.SUPPORT_MAIL) ? "" : __t) + '">Contact us</a>\n\t</div>\n';
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-common-domain-errors"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n\n\t<div class="domain-errors">\n\t\t<div class="message">\n\t\t\t', (state.magNotFound || state.domainNotFound) && (__p += '\n\t\t\t<div class="message-caption">Website is almost here</div>\n\t\t\t\x3c!--__magterm--\x3e\n\t\t\t<div class="message-text">To complete the setup, please hit <br class="br-phone"/>the “Map Now” <br class="br-desktop"/>button in your <br class="br-phone"/>projects’s settings.</div>\n\t\t\t<a class="help-phone" href="http://help.readymag.com/domains/">Need Help?</a>\n\t\t\t'), 
        __p += "\n\t\t\t", state.magNotPublished && (__p += '\n\t\t\t<div class="message-caption">Website is Offline</div>\n\t\t\t\x3c!--__magterm--\x3e\n\t\t\t<div class="message-text">This project has been unpublished.</div>\n\t\t\t'), 
        __p += "\n\t\t\t", state.subscriptionExpired && (__p += '\n\t\t\t<div class="message-caption">Website is Offline</div>\n\t\t\t<div class="message-text"><a href="' + (null == (__t = RM.constants.readymag_auth_host) ? "" : __t) + '/settings/subscription/">Log in</a> to manage your subscription.</div>\n\t\t\t'), 
        __p += '\n\t\t</div>\n\n\t\t<a class="logo" href="' + (null == (__t = RM.constants.readymag_host) ? "" : __t) + '"></a>\n\n\t\t', 
        (state.magNotFound || state.domainNotFound) && (__p += '\n\t\t<a class="help" href="http://help.readymag.com/domains/">Need Help?</a>\n\t\t'), 
        __p += "\n\t</div>\n\n";
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-common-slideshow-player"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n\t<div class="common-slideshow environment-' + (null == (__t = tp) ? "" : _.escape(__t)) + '">\n\t\t<div class="images no-rmswipe">\n\t\t\t<div class="images-wrapper">\n\t\t\t</div>\n\t\t\t<div class="fullscreen">\n\t\t\t\t<svg class="fullscreen-off" xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24">\n\t\t\t\t\t<path class="fullscreen-path-1" d="M4 14 L4 20 L10 20  Z M14 4 L20 4 L20 10  Z " style="fill:#ffffff; stroke:none; stroke-width:0"></path>\n\t\t\t\t\t<path class="fullscreen-path-2" d="M10 14 L5 19 M14 10 L19 5" stroke-linecap="round" style="fill:none; stroke:#ffffff; stroke-width:2px"></path>\n\t\t\t\t</svg>\n\t\t\t\t<svg class="fullscreen-on" xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24">\n\t\t\t\t\t<path class="fullscreen-path-1" d="M5 13 L11 13 L11 19  Z M13 5 L19 11 L13 11  Z " style="fill:#ffffff; stroke:none; stroke-width:0"></path>\n\t\t\t\t\t<path class="fullscreen-path-2" d="M10 14 L5 19 M14 10 L19 5" stroke-linecap="round" style="fill:none; stroke:#ffffff; stroke-width:2px"></path>\n\t\t\t\t</svg>\n\t\t\t</div>\n\n\t\t\t<div class="bottom-arrows">\n\t\t\t\t<div class="prev-picture-arrow-bottom">\n\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="40" height="40">\n\t\t\t\t\t\t<path d="M23.5 11.5 L15.5 19.5 L23.5 27.5" stroke-linejoin="round" stroke-linecap="round" style="fill:none; stroke:#ffffff; stroke-width:3px"></path>\n\t\t\t\t\t</svg>\n\t\t\t\t</div>\n\n\t\t\t\t<div class="next-picture-arrow-bottom">\n\t\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="40" height="40">\n\t\t\t\t\t\t<path d="M16.5 11.5 L24.5 19.5 L16.5 27.5" stroke-linejoin="round" stroke-linecap="round" style="fill:none; stroke:#ffffff; stroke-width:3px"></path>\n\t\t\t\t\t</svg>\n\t\t\t\t</div>\n\n\t\t\t\t<div class="counters-text">\n\t\t\t\t\t<span class="counters-text-current">1</span>/<span class="counters-text-total">2</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\n\t\t\t<div class="prev-picture-arrow-middle">\n\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="40" height="40">\n\t\t\t\t\t<path d="M23.5 11.5 L15.5 19.5 L23.5 27.5" stroke-linejoin="round" stroke-linecap="round" style="fill:none; stroke:#ffffff; stroke-width:3px"></path>\n\t\t\t\t</svg>\n\t\t\t</div>\n\n\n\t\t\t<div class="next-picture-arrow-middle">\n\t\t\t\t<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="40" height="40">\n\t\t\t\t\t<path d="M16.5 11.5 L24.5 19.5 L16.5 27.5" stroke-linejoin="round" stroke-linecap="round" style="fill:none; stroke:#ffffff; stroke-width:3px"></path>\n\t\t\t\t</svg>\n\t\t\t</div>\n\n\n\t\t</div>\n\n\t\t<div class="thumbnails no-rmswipe">\n\t\t\t<div class="scroll-wrapper">\n\t\t\t\t<div class="items-wrapper has-horizontal-scroll">\n\t\t\t\t\t<div class="items">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="scroll"></div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class="counters no-rmswipe">\n\t\t\t<div class="scroll-wrapper">\n\t\t\t\t<div class="items-wrapper has-horizontal-scroll">\n\t\t\t\t\t<div class="items">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="scroll"></div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class="captions">\n\t\t\t', 
        "constructor" == tp && (__p += '\n\t\t\t\t<textarea class="caption" maxlength="9999" placeholder="Type image caption here"></textarea>\n\t\t\t'), 
        __p += "\n\t\t</div>\n\t</div>\n\n";
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-common-user-menu"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) {
            __p += '\n\t<div class="collector-menu ' + (null == (__t = showUpgradeButton ? "show-upgrade-button" : "") ? "" : __t) + '" id="global-menu">\n\t\t';
            var innerLink = "link", outerLink = "", meLink = me.getLink();
            "homepage" == tp && (innerLink = "", outerLink = "link", meLink = RM.constants.readymag_auth_host + me.getLink()), 
            __p += '\n\n\t\t<a href="' + (null == (__t = RM.constants.readymag_host) ? "" : _.escape(__t)) + '" class="logo ' + (null == (__t = outerLink) ? "" : _.escape(__t)) + '"></a>\n\n\t\t<div class="separator"></div>\n\n\t\t<a class="upgrade-button ' + (null == (__t = innerLink) ? "" : _.escape(__t)) + '" href="/settings/subscription/update"><div class="icon"></div>Upgrade</a>\n\n\t\t<div class="create-button"><div class="icon"></div>Create</div>\n\n\t\t<div class="user-button">\n\t\t\t<a class="userpic ' + (null == (__t = innerLink) ? "" : _.escape(__t)) + '" href="' + (null == (__t = meLink) ? "" : _.escape(__t)) + '" style="background-image:url(\'' + (null == (__t = me.getUserpic(48)) ? "" : _.escape(__t)) + '\')"></a>\n\t\t\t<div class="arrow"><div class="icon"></div></div>\n\t\t\t', 
            me.get("email_confirmation_date") || (__p += ' <div class="notification-icon">1</div> '), __p += '\n\t\t</div>\n\n\t\t<div class="user-popup">\n\t\t\t<a class="user-block ' + (null == (__t = innerLink) ? "" : _.escape(__t)) + '" href="' + (null == (__t = meLink) ? "" : _.escape(__t)) + '">\n\t\t\t\t<div class="username-wrapper-outer">\n\t\t\t\t\t<div class="username-wrapper">\n\t\t\t\t\t\t<div class="username">' + (null == (__t = me.get("name")) ? "" : _.escape(__t)) + '</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</a>\n\n\t\t\t<div class="popup-separator"></div>\n\n\t\t\t<a class="settings ' + (null == (__t = innerLink) ? "" : _.escape(__t)) + '" href="/settings"><div class="icon"></div>Settings</a>\n\n\t\t\t<div class="create-warning">\n\t\t\t\t<div class="icon"></div>\n\t\t\t\t\x3c!--__magterm--\x3e\n\t\t\t\t<div class="message">To create a project please switch to your laptop or desktop computer</div>\n\t\t\t</div>\n\n\t\t\t<div class="popup-separator"></div>\n\n\t\t\t<a class="logout" href="/logout/"><div class="icon"></div>Logout</a>\n\n\t\t\t<div class="popup-separator"></div>\n\n\t\t\t', 
            me.get("email_confirmation_date") || (__p += '\n\t\t\t\t<div class="notifications-wrapper">\n\t\t\t\t\t<div class="verify-email">Please verify your email. <span>Resend</span>.</div>\n\t\t\t\t</div>\n\t\t\t '), 
            __p += '\n\n\t\t\t<div class="popup-footer">\n\t\t\t\t<a href="https://readymag.com/readymag/terms-and-privacy/" class="' + (null == (__t = Modernizr.isboxversion ? "disabled" : "") ? "" : __t) + '" target="_blank">Privacy & Terms</a><span></span><a class="from-user-menu mailto-support" href="https://help.readymag.com" target="_blank">Support</a><span></span><a href="https://readymag.com/readymag/newsletter/" target="_blank">R/m Newsletter</a>\n\t\t\t</div>\n\n\t\t\t<div class="corner-wrapper">\n\t\t\t\t<div class="corner"></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n';
        }
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-common-user-menu-unlogged"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) {
            __p += "\n\t\t";
            var innerLink = "link", outerLink = "";
            "homepage" == tp && (innerLink = "", outerLink = "link"), __p += '\n\n\t<a class="collector-menu-unlogged ' + (null == (__t = outerLink) ? "" : _.escape(__t)) + '" id="global-menu" href="/"></a>\n';
        }
        return __p;
    }.apply(this, arguments));
}, RM.templates["template-common-whats-new"] = function() {
    return $.trim(function(obj) {
        var __t, __p = "", __j = Array.prototype.join, print = function() {
            __p += __j.call(arguments, "");
        };
        with (obj || {}) __p += '\n\t<div class="whats-new">\n\t\t<div class="panel-wrapper">\n\t\t\t<div class="panel">\n\t\t\t\t<div class="content">\n\t\t\t\t\t<div class="wn-page" data-date="2013-11-19">\n\t\t\t\t\t\t<div class="caption">What\'s new</div>\n\t\t\t\t\t\t<div class="date">November 19<span>th</span></div>\n\t\t\t\t\t\t<div class="picture"></div>\n\t\t\t\t\t\t<div class="text">Introducing Domain Mapping<br/>and New Price.</div>\n\t\t\t\t\t\t<a class="learn-more" href="https://readymag.com/p43952/" target="blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2013-12-16">\n\t\t\t\t\t\t<div class="caption">What\'s new</div>\n\t\t\t\t\t\t<div class="date">December 16<span>th</span></div>\n\t\t\t\t\t\t<div class="picture"></div>\n\t\t\t\t\t\t\x3c!--__magterm--\x3e\n\t\t\t\t\t\t<div class="text">Duplicating projects, Instagram<br/>and SVG support.</div>\n\t\t\t\t\t\t<a class="learn-more" href="https://readymag.com/p53035/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2014-01-20">\n\t\t\t\t\t\t<div class="caption">What\'s new</div>\n\t\t\t\t\t\t<div class="date">January 20<span>th</span></div>\n\t\t\t\t\t\t<div class="picture"></div>\n\t\t\t\t\t\t<div class="text">Rotation tool.<br/>Grouping widgets.<br/>Faster background images loading.<br/>Bug fixes.</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2014-02-03">\n\t\t\t\t\t\t<div class="caption">What\'s new</div>\n\t\t\t\t\t\t<div class="date">February 4<span>th</span></div>\n\t\t\t\t\t\t<div class="picture">\n\t\t\t\t\t\t\t<div class="line"></div>\n\t\t\t\t\t\t\t<div class="line"></div>\n\t\t\t\t\t\t\t<div class="line"></div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="text">Introducing<br/>Viewer 1.0</div>\n\t\t\t\t\t\t<a class="learn-more" href="https://readymag.com/p67765/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2014-03-04">\n\t\t\t\t\t\t<div class="caption">What\'s new</div>\n\t\t\t\t\t\t<div class="date">March 4<span>th</span></div>\n\t\t\t\t\t\t<div class="picture"></div>\n\t\t\t\t\t\t<div class="text">Custom Templates<br/>and iFrame</div>\n\t\t\t\t\t\t<a class="learn-more" href="https://readymag.com/p85654/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2014-03-19">\n\t\t\t\t\t\t<div class="caption">What\'s new</div>\n\t\t\t\t\t\t<div class="date">March 19<span>th</span></div>\n\t\t\t\t\t\t<div class="picture"></div>\n\t\t\t\t\t\t<div class="text">Track your audience with<br/>Google Analytics</div>\n\t\t\t\t\t\t<a class="learn-more" href="http://help.readymag.com/ga/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n                    <div class="wn-page" data-date="2014-04-14">\n                        <div class="caption">What\'s new</div>\n                        <div class="date">April 14<span>th</span></div>\n                        <div class="picture"></div>\n                        <div class="text">Introducing<br/>Viewport & Mobile Viewer</div>\n                        <a class="learn-more" href="https://readymag.com/p100897/" target="_blank">Learn More</a>\n                    </div>\n                    <div class="wn-page" data-date="2014-06-24">\n                        <div class="caption">What\'s new</div>\n                        <div class="date">June 24<span>th</span></div>\n                        <div class="picture"></div>\n                        <div class="text">Introducing<br/>Font Explorer</div>\n                        <a class="learn-more" href="https://readymag.com/p151687/" target="_blank">Learn More</a>\n                    </div>\n                    <div class="wn-page" data-date="2014-08-04">\n                        <div class="caption">What\'s new</div>\n                        <div class="date">August 4<span>th</span></div>\n                        <div class="picture"></div>\n                        <div class="text">Introducing New<br/>Webfonts</div>\n                        <a class="learn-more" href="https://readymag.com/p156787/" target="_blank">Learn More</a>\n                    </div>\n                    <div class="wn-page" data-date="2014-09-04">\n                        <div class="caption">What\'s new</div>\n                        <div class="date">September 4<span>th</span></div>\n                        <div class="picture"></div>\n                        <div class="text">Introducing<br/>Template Center</div>\n                        <a class="learn-more" href="https://readymag.com/p172473/" target="_blank">Learn More</a>\n                    </div>\n                    <div class="wn-page" data-date="2014-09-30">\n                        <div class="caption">What\'s new</div>\n                        <div class="date">September 30<span>th</span></div>\n                        <div class="picture"></div>\n                        <div class="text">Introducing<br/>PDF Export</div>\n                        <a class="learn-more" href="https://readymag.com/p185021/" target="_blank">Learn More</a>\n                    </div>\n                    <div class="wn-page" data-date="2014-11-05">\n                        <div class="caption">What\'s new</div>\n                        <div class="date">November 5<span>th</span></div>\n                        <div class="picture"></div>\n                        <div class="text">Introducing<br/>100,000 icons</div>\n                        <a class="learn-more" href="https://readymag.com/p220371/" target="_blank">Learn More</a>\n                    </div>\n                    <div class="wn-page" data-date="2014-12-09">\n                        <div class="caption">What\'s new</div>\n                        <div class="date">December 9<span>th</span></div>\n                        <div class="picture"></div>\n                        <div class="text">Introducing<br/>Link Styles & Fix Position</div>\n                        <a class="learn-more" href="https://readymag.com/p243325/" target="_blank">Learn More</a>\n                    </div>\n                    <div class="wn-page" data-date="2015-01-29">\n                        <div class="caption">What\'s new</div>\n                        <div class="date">January 29<span>th</span></div>\n                        <div class="picture"></div>\n                        <div class="text">Introducing<br/>New Embeds</div>\n                        <a class="learn-more" href="https://readymag.com/p288252/" target="_blank">Learn More</a>\n                    </div>\n\t\t\t\t\t<div class="wn-page" data-date="2015-02-10">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">February 10<span>th</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t    <div class="text">2 Little Things:<br/>Trash & Pages URLs</div>\n\t\t\t\t\t    <a class="learn-more" href="https://readymag.com/p304538/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2015-03-04">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">March 4<span>th</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t\t<div class="text">Introducing<br/>Viewer 2.0</div>\n\t\t\t\t\t    <a class="learn-more" href="https://readymag.com/p325057/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2015-04-14">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">April 14<span>th</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t\t<div class="text">Introducing<br/>Scroll Navigation</div>\n\t\t\t\t\t    <a class="learn-more" href="https://readymag.com/p360474/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2015-05-14">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">May 14<span>th</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t\t<div class="text">Introducing<br/>Buttons, Anchors &amp; Full Width</div>\n\t\t\t\t\t    <a class="learn-more" href="https://readymag.com/p430667/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t\x3c!-- Special terms agree message. For next terms change just increase version number in backend config and set new data-date to show. This block position inside template does not matter --\x3e\n\t\t\t\t\t<div class="wn-page agree-terms" data-version="' + (null == (__t = RM.constants.CURRENT_TERMS_VERSION) ? "" : __t) + '" data-date="2015-09-02">\n\t\t\t\t\t    <div class="caption">UPDATE</div>\n\t\t\t\t\t    <div class="date">Terms of Service</div>\n\t\t\t\t\t\t<div class="text">Hey!<br/>We’ve recently slightly updated our <a href="https://readymag.com/readymag/terms-and-privacy/" target="_blank">Terms of Service</a> due to launching the new Teamwork feature. Please review the changes, as by continuing to use Readymag you automatically accept them. Have a great day!</div>\n\t\t\t\t\t    <div class="learn-more agree-terms-button">I agree</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t\x3c!-- Special terms agree message end --\x3e\n\n\t\t\t\t\t<div class="wn-page" data-date="2015-09-03">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">Sep 3<span>rd</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t\t<div class="text">Introducing<br/>Teamwork</div>\n\t\t\t\t\t    <a class="learn-more" href="https://readymag.com/p683180/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class="wn-page" data-date="2015-10-09">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">Oct 9<span>th</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t\t<div class="text">Introducing<br/>Hotspot</div>\n\t\t\t\t\t    <a class="learn-more" href="https://readymag.com/p921047/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class="wn-page" data-date="2015-11-18">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">Nov 18<span>th</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t\t<div class="text">Introducing<br/>5 Tiny Features</div>\n\t\t\t\t\t    <a class="learn-more" href="https://readymag.com/p1016246/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2016-01-20">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">Jan 19<span>th</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t\t<div class="text">Introducing<br/>Animations</div>\n\t\t\t\t\t    <a class="learn-more" href="http://animations.readymag.com/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2016-04-12">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">Apr 12<span>th</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t    <a class="learn-more" href="https://readymag.com/p1351980/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2016-08-04">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">Aug 4<span>th</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t    <a class="learn-more" href="https://readymag.com/p1617587/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2016-09-29">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">Sep 29<span>th</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t    <a class="learn-more" href="https://readymag.com/p1730817/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2016-12-01">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">Dec 1<span>st</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t    <a class="learn-more" href="https://readymag.com/p1921011/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2017-02-07">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">Feb 7<span>th</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t    <a class="learn-more" href="https://readymag.com/p2117051/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2017-05-03">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">May 3<span>rd</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t    <a class="learn-more" href="https://readymag.com/p2346155/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2017-08-08">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">August 8<span>th</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t    <a class="learn-more" href="https://readymag.com/p2674515/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2017-09-20">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">Sep 20<span>th</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t    <a class="learn-more" href="https://readymag.com/p2809932/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2017-11-30">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">Nov 30<span>th</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t    <a class="learn-more" href="https://help.readymag.com/domains/" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="wn-page" data-date="2017-12-15">\n\t\t\t\t\t    <div class="caption">What\'s new</div>\n\t\t\t\t\t    <div class="date">Dec 15<span>th</span></div>\n\t\t\t\t\t    <div class="picture"></div>\n\t\t\t\t\t    <a class="learn-more" href="https://medium.com/@readymag/readymag-under-the-hood-faster-vertical-viewer-implementation-8615457fdf25" target="_blank">Learn More</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class="close"></div>\n\t\t\t\t<div class="arrow up disabled"></div>\n\t\t\t\t<div class="arrow down"></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n';
        return __p;
    }.apply(this, arguments));
}, Vue.directive("svginject", {
    inserted: function(t) {
        var e = $(t).find(".svg");
        SVGInjector(e);
    }
});

var _typeof = "function" == typeof Symbol && "symbol" === _typeof2(Symbol.iterator) ? function(t) {
    return void 0 === t ? "undefined" : _typeof2(t);
} : function(t) {
    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : void 0 === t ? "undefined" : _typeof2(t);
};

!function() {
    "use strict";
    function t(t) {
        function e(t) {
            t.parentElement.removeChild(t);
        }
        function i(t, e, i) {
            var n = 0 === i ? t.children[0] : t.children[i - 1].nextSibling;
            t.insertBefore(e, n);
        }
        function n(t, e) {
            var i = this;
            this.$nextTick(function() {
                return i.$emit(t.toLowerCase(), e);
            });
        }
        var o = [ "Start", "Add", "Remove", "Update", "End", "TouchMove" ], a = [ "Choose", "Sort", "Filter", "Clone" ], r = [ "Move" ].concat(o, a).map(function(t) {
            return "on" + t;
        }), s = null;
        return {
            name: "draggable",
            props: {
                options: Object,
                onList: {
                    type: Array,
                    required: !1,
                    default: null
                },
                value: {
                    type: Array,
                    required: !1,
                    default: null
                },
                noTransitionOnDrag: {
                    type: Boolean,
                    default: !1
                },
                clone: {
                    type: Function,
                    default: function(t) {
                        return t;
                    }
                },
                element: {
                    type: String,
                    default: "div"
                },
                move: {
                    type: Function,
                    default: null
                }
            },
            data: function() {
                return {
                    transitionMode: !1,
                    componentMode: !1
                };
            },
            render: function(t) {
                var e = this.$slots.default;
                if (e && 1 === e.length) {
                    var i = e[0];
                    i.componentOptions && "transition-group" === i.componentOptions.tag && (this.transitionMode = !0);
                }
                var n = e, o = this.$slots.footer;
                return o && (n = e ? [].concat(_toConsumableArray(e), _toConsumableArray(o)) : [].concat(_toConsumableArray(o))), 
                t(this.element, null, n);
            },
            mounted: function() {
                var e = this;
                if (this.componentMode = this.element.toLowerCase() !== this.$el.nodeName.toLowerCase(), this.componentMode && this.transitionMode) throw new Error("Transition-group inside component is not supported. Please alter element value or remove transition-group. Current element value: " + this.element);
                var i = {};
                o.forEach(function(t) {
                    i["on" + t] = function(t) {
                        var e = this;
                        return function(i) {
                            null !== e.realList && e["onDrag" + t](i), n.call(e, t, i);
                        };
                    }.call(e, t);
                }), a.forEach(function(t) {
                    i["on" + t] = n.bind(e, t);
                });
                var r = Object.assign({}, this.options, i, {
                    onMove: function(t, i) {
                        return e.onDragMove(t, i);
                    }
                });
                !("draggable" in r) && (r.draggable = ">*"), this._sortable = new t(this.rootContainer, r), this.computeIndexes(), 
                this.$el._draggable = this;
            },
            beforeDestroy: function() {
                this._sortable.destroy();
            },
            computed: {
                rootContainer: function() {
                    return this.transitionMode ? this.$el.children[0] : this.$el;
                },
                isCloning: function() {
                    return !!this.options && !!this.options.group && "clone" === this.options.group.pull;
                },
                realList: function() {
                    return this.list ? this.list : this.value;
                }
            },
            watch: {
                options: {
                    handler: function(t) {
                        for (var e in t) -1 == r.indexOf(e) && this._sortable.option(e, t[e]);
                    },
                    deep: !0
                },
                realList: function() {
                    this.computeIndexes();
                }
            },
            methods: {
                doDrop: function(t, e) {
                    this._sortable && this._sortable.forceDrop(t, e);
                },
                dropIntoGroup: function(t) {
                    this._sortable && this._sortable.dropIntoGroup(t);
                },
                getChildrenNodes: function() {
                    if (this.componentMode) return this.$children[0].$slots.default;
                    var t = this.$slots.default;
                    return this.transitionMode ? t[0].child.$slots.default : t;
                },
                computeIndexes: function() {
                    var t = this;
                    this.$nextTick(function() {
                        t.visibleIndexes = function(t, e, i) {
                            if (!t) return [];
                            var n = t.map(function(t) {
                                return t.elm;
                            }), o = [].concat(_toConsumableArray(e)).map(function(t) {
                                return n.indexOf(t);
                            });
                            return i ? o.filter(function(t) {
                                return -1 !== t;
                            }) : o;
                        }(t.getChildrenNodes(), t.rootContainer.children, t.transitionMode);
                    });
                },
                getUnderlyingVm: function(t) {
                    var e = function(t, e) {
                        return t.map(function(t) {
                            return t.elm;
                        }).indexOf(e);
                    }(this.getChildrenNodes() || [], t);
                    if (-1 === e) return null;
                    return {
                        index: e,
                        element: this.realList[e]
                    };
                },
                getUnderlyingPotencialDraggableComponent: function(t) {
                    var e = t.__vue__;
                    return e && e.$options && "transition-group" === e.$options._componentTag ? e.$parent : e;
                },
                emitChanges: function(t) {
                    var e = this;
                    this.$nextTick(function() {
                        e.$emit("change", t);
                    });
                },
                alterList: function(t) {
                    var e = this;
                    this.list ? t(this.list) : (this.alteredList || (this.alteredList = [].concat(_toConsumableArray(this.value))), 
                    t(this.alteredList), this.$nextTick(function() {
                        e.alteredList && (e.$emit("input", [].concat(_toConsumableArray(e.alteredList))), e.alteredList = null);
                    }));
                },
                spliceList: function() {
                    var t = arguments, e = function(e) {
                        return e.splice.apply(e, t);
                    };
                    this.alterList(e);
                },
                updatePosition: function(t, e) {
                    var i = function(i) {
                        return i.splice(e, 0, i.splice(t, 1)[0]);
                    };
                    this.alterList(i);
                },
                getRelatedContextFromMoveEvent: function(t) {
                    var e = t.to, i = t.related, n = this.getUnderlyingPotencialDraggableComponent(e);
                    if (!n) return {
                        component: n
                    };
                    var o = n.realList, a = {
                        list: o,
                        component: n
                    };
                    if (e !== i && o && n.getUnderlyingVm) {
                        var r = n.getUnderlyingVm(i);
                        if (r) return Object.assign(r, a);
                    }
                    return a;
                },
                getVmIndex: function(t) {
                    var e = this.visibleIndexes, i = e.length;
                    return t > i - 1 ? i : e[t];
                },
                getComponent: function() {
                    return this.$slots.default[0].componentInstance;
                },
                resetTransitionData: function(t) {
                    if (this.noTransitionOnDrag && this.transitionMode) {
                        this.getChildrenNodes()[t].data = null;
                        var e = this.getComponent();
                        e.children = [], e.kept = void 0;
                    }
                },
                onDragTouchMove: function(t) {
                    t.data.draggedContext = this.getUnderlyingVm(t.data.dragEl), t.data.nextDraggedContext = this.getUnderlyingVm(t.data.next), 
                    t.data.prevDraggedContext = this.getUnderlyingVm(t.data.prev), t.data.sortable = this, this.$emit("touchMove", t, t.item);
                },
                onDragStart: function(t) {
                    this.context = this.getUnderlyingVm(t.item), t.item._underlying_vm_ = this.clone(this.context.element), 
                    t.context = this.context, s = t.item;
                },
                onDragAdd: function(t) {
                    var i = t.item._underlying_vm_;
                    if (t.data && t.data.context && (i = t.data.context.element), void 0 !== i) {
                        e(t.item);
                        var n = this.getVmIndex(t.newIndex);
                        this.alteredList && t.data && t.data.prevContext && (n = this.alteredList.indexOf(t.data.prevContext.element) + 1), 
                        this.spliceList(n, 0, i), this.computeIndexes();
                        var o = {
                            element: i,
                            newIndex: n
                        };
                        this.emitChanges({
                            added: o
                        });
                    }
                },
                onDragRemove: function(t) {
                    if (i(this.rootContainer, t.item, t.oldIndex), this.isCloning) e(t.clone); else {
                        var n = this.context && this.context.index;
                        t.data && t.data.context && (n = this.alteredList ? this.alteredList.indexOf(t.data.context.element) : this.value.indexOf(t.data.context.element));
                        var o = this.context && this.context.element;
                        t.data && t.data.context && (o = t.data.context.element), this.spliceList(n, 1);
                        var a = {
                            element: o,
                            oldIndex: n
                        };
                        this.resetTransitionData(n), this.emitChanges({
                            removed: a
                        });
                    }
                },
                onDragUpdate: function(t) {
                    e(t.item), t.data.camebackTo ? t.data.camebackTo.before ? t.data.camebackTo.parent.insertBefore(t.item, t.data.camebackTo.before) : t.data.camebackTo.parent.appendChild(t.item) : i(t.from, t.item, t.oldIndex);
                    var n = this.context.index;
                    t.data && t.data.context && (n = this.alteredList ? this.alteredList.indexOf(t.data.context.element) : this.value.indexOf(t.data.context.element));
                    var o = this.getVmIndex(t.newIndex);
                    this.alteredList && t.data && t.data.prevContext && (o = this.alteredList.indexOf(t.data.prevContext.element)) < n && o++;
                    var a = this.context.element;
                    t.data && t.data.context && (a = t.data.context.element), this.updatePosition(n, o);
                    var r = {
                        element: a,
                        oldIndex: n,
                        newIndex: o
                    };
                    this.emitChanges({
                        moved: r
                    });
                },
                computeFutureIndex: function(t, e) {
                    if (!t.element) return 0;
                    var i = [].concat(_toConsumableArray(e.to.children)).filter(function(t) {
                        return "none" !== t.style.display;
                    }), n = i.indexOf(e.related), o = t.component.getVmIndex(n);
                    return -1 != i.indexOf(s) || !e.willInsertAfter ? o : o + 1;
                },
                onDragMove: function(t, e) {
                    var i = this.move;
                    if (!i || !this.realList) return !0;
                    var n = this.getRelatedContextFromMoveEvent(t), o = this.context, a = this.computeFutureIndex(n, t);
                    return Object.assign(o, {
                        futureIndex: a
                    }), Object.assign(t, {
                        relatedContext: n,
                        draggedContext: o
                    }), t.draggable = this, i(t, e);
                },
                onDragEnd: function(t) {
                    this.computeIndexes(), s = null;
                }
            }
        };
    }
    if (Array.from || (Array.from = function(t) {
        return [].slice.call(t);
    }), "object" == ("undefined" == typeof exports ? "undefined" : _typeof(exports))) {
        var e = require("sortablejs");
        module.exports = t(e);
    } else if ("function" == typeof define && define.amd) define([ "sortablejs" ], function(e) {
        return t(e);
    }); else if (window && window.Vue && window.Sortable) {
        var i = t(window.Sortable);
        Vue.component("draggable", i);
    }
}(), require.register({
    "common/color-picker.vue": function(t, e, i) {
        e("vueify/lib/insert-css").insert(".color-picker-container{position:relative;width:36px;height:20px;border-radius:10px}.color-picker-container.round{width:28px;height:28px;border-radius:100%}.color-picker-container.round .arrow-icon{position:absolute;right:8px;top:8px;width:12px;height:12px;border-radius:100%;background-image:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/controls/shape_settings/color-arrow.png);background-repeat:no-repeat;background-color:#fff}.color-picker-container.round:hover .arrow-icon{background-image:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/controls/shape_settings/color-arrow-hover.png)}.color-picker-container .color-preview,.color-picker-container .opacity-grid{position:absolute;left:0;top:0;bottom:0;right:0;border-radius:inherit}.color-picker-container .opacity-grid{background:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/controls/text_link/opacity-grid.png) 0 0}.color-picker-container .colorbox_container{transition:opacity .2s ease-in-out;-webkit-transform:translateZ(0);position:fixed;z-index:1;visibility:hidden;opacity:0;width:152px;height:240px}.color-picker-container .colorbox_container.visible{visibility:visible;opacity:1}.color-picker-container .arrow-icon,.color-picker-container .color-preview{cursor:pointer}");
        !function() {
            "use strict";
            i.exports = {
                model: {
                    event: "change"
                },
                computed: {
                    bg: function() {
                        return RM.utils.getRGBA(this.mutableColor, this.showAlpha ? this.opacity100based : 1);
                    },
                    opacity100based: function() {
                        return this.mutableAlpha / 100;
                    },
                    opacityResult: function() {
                        return this.mutableAlpha / this.opacityMultiplier;
                    }
                },
                watch: {
                    color: function(t) {
                        this.colorbox && (this.mutableColor = t, this.colorbox.setColor(this.mutableColor));
                    }
                },
                data: function() {
                    return {
                        mutableColor: this.color,
                        mutableAlpha: this.showAlpha ? this.alpha * this.opacityMultiplier : 1,
                        visibleBox: !1,
                        colorBoxStyles: {}
                    };
                },
                props: {
                    color: String,
                    alpha: Number,
                    showAlpha: {
                        type: Boolean,
                        default: !0
                    },
                    showArrowIcon: {
                        type: Boolean,
                        default: !1
                    },
                    hOffset: {
                        type: Number,
                        default: 0
                    },
                    opacityMultiplier: {
                        type: Number,
                        default: 1
                    },
                    vOffset: {
                        type: Number,
                        default: 0
                    },
                    alwaysVisible: {
                        tyoe: Boolean,
                        default: !1
                    },
                    colorboxType: {
                        type: String,
                        default: "small"
                    }
                },
                mounted: function() {
                    var t = 8;
                    if (this.alwaysVisible) this.colorBoxStyles.width = "168px", this.colorBoxStyles.overflow = "hidden", 
                    this.colorBoxStyles["border-radius"] = "6px 6px 0 0", this.onColorClick(); else {
                        $(this.$el).hasClass("round") && (t = 7);
                        this.$el.getBoundingClientRect().top > window.innerHeight / 2 || "top" == this.vAlign ? this.colorBoxStyles["margin-top"] = -(240 + t + this.vOffset) + "px" : this.colorBoxStyles["margin-top"] = $(this.$refs.button).height() + t + this.vOffset + "px", 
                        this.colorBoxStyles["margin-left"] = -(this.hOffset + 152 - $(this.$refs.button).width()) + "px";
                    }
                },
                methods: {
                    onColorClick: function() {
                        this.colorbox || (this.colorbox = new RM.classes.Colorbox({
                            $parent: this.$el.querySelector(".colorbox_container"),
                            type: this.colorboxType,
                            show_opacity: this.showAlpha
                        }), this.colorbox.on("colorchange", this.colorOpacityChanged), this.colorbox.on("opacitychange", this.colorOpacityChanged)), 
                        this.colorbox.setColor(this.mutableColor), this.colorbox.setOpacity(this.opacity100based), this.visibleBox || this.$emit("showPopup", this), 
                        this.visibleBox = !this.visibleBox;
                    },
                    colorOpacityChanged: function(t, e, i, n) {
                        this.mutableColor = this.colorbox.rgb2hex([ t, e, i ]), this.mutableAlpha = 100 * n, this.$emit("update:all", {
                            color: this.mutableColor,
                            alpha: this.opacityResult
                        }), this.$emit("update:color", this.mutableColor), this.$emit("update:alpha", this.opacityResult);
                    },
                    hide: function() {
                        this.visibleBox = !1;
                    }
                }
            };
        }(), i.exports.__esModule && (i.exports = i.exports.default);
        var n = "function" == typeof i.exports ? i.exports.options : i.exports;
        n.render = function() {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {
                ref: "button",
                staticClass: "color-picker-container"
            }, [ t.showAlpha ? i("div", {
                staticClass: "opacity-grid"
            }) : t._e(), t._v(" "), t.alwaysVisible ? t._e() : i("div", {
                staticClass: "color-preview",
                style: {
                    backgroundColor: t.bg
                },
                on: {
                    click: function(e) {
                        e.stopPropagation(), t.onColorClick(e);
                    }
                }
            }), t._v(" "), t.showArrowIcon ? i("div", {
                staticClass: "arrow-icon",
                on: {
                    click: function(e) {
                        e.stopPropagation(), t.onColorClick(e);
                    }
                }
            }) : t._e(), t._v(" "), i("div", {
                staticClass: "colorbox_container",
                class: {
                    visible: t.visibleBox
                },
                style: t.colorBoxStyles,
                on: {
                    click: function(t) {
                        t.stopPropagation();
                    }
                }
            }) ]);
        }, n.staticRenderFns = [];
    }
}), require.register({
    "common/ellipsis-plus.vue": function(t, e, i) {
        e("vueify/lib/insert-css").insert("@component-namespace ellipsis{@component plus{width:100%;position:relative;line-height:1.5;@descendent button{padding-top:0;padding-bottom:0;border:0;font-size:1em;vertical-align:middle;color:#8590a6;outline:none;line-height:1;background-color:transparent}@descendent ellipsis{display:inline-block}@descendent txt{font-size:inherit}}}");
        !function() {
            "use strict";
            i.exports = {
                name: "ellipsis-plus",
                props: {
                    text: String,
                    line: {
                        type: Number,
                        default: 2
                    },
                    ellipsis: {
                        type: String,
                        default: "..."
                    },
                    showButton: {
                        type: Boolean,
                        default: !1
                    },
                    expandText: {
                        type: String,
                        default: ""
                    },
                    collapseText: {
                        type: String,
                        default: ""
                    }
                },
                data: function() {
                    return {
                        tmpTxt: "",
                        show: !1,
                        marginLeft: 0,
                        collapseMarginLeft: 0
                    };
                },
                created: function() {},
                mounted: function() {
                    if (this.line) {
                        var t = this.$refs.txt.offsetWidth;
                        this.$refs.txt.innerHTML = this.text;
                        var e = this.$refs.container.offsetWidth, i = 0, n = 0, o = this.$refs.ellipsis.offsetWidth;
                        if (this.showButton) {
                            n = i = Math.ceil(parseFloat(getComputedStyle(this.$refs.more, null).width.replace("px", ""))), this.$refs.ellipsis.style.display = "none";
                            var a = 0, r = this.$refs.more.cloneNode();
                            this.expandText !== this.collapseText && (this.$refs.more.style.display = "none", r.innerHTML = this.collapseText, 
                            r.style.display = "inline-block", this.$refs.container.appendChild(r), n = Math.ceil(parseFloat(getComputedStyle(r, null).width.replace("px", ""))), 
                            a = r.offsetLeft), r.offsetTop <= this.$refs.ellipsis.offsetTop + 5 ? this.marginLeft = e - n - a + o : this.marginLeft = e - n - a, 
                            r.remove(), this.$refs.more.style.display = "inline-block", this.$refs.ellipsis.style.display = "inline-block";
                        }
                        var s = getComputedStyle(this.$refs.container, null), l = parseFloat(s.lineHeight.replace("px", ""));
                        if (this.$refs.txt.innerHTML = this.text, Math.floor(this.$refs.container.offsetHeight / l) <= this.line) return this.tmpTxt = this.text, 
                        this.show = !0, void (this.showButton = !1);
                        var c = Math.floor((e * this.line - i - o) / t), d = 1;
                        this.$refs.txt.innerHTML = this.text.substr(0, c), Math.round(this.$refs.container.offsetHeight / l) > this.line && (d = -1);
                        for (var p = c; p < this.text.length; p += d) {
                            if (p < 0 || p > this.text.length) return;
                            if (this.$refs.txt.innerHTML = this.text.substr(0, p), 1 === d && Math.round(this.$refs.container.offsetHeight / l) > this.line) {
                                if (this.tmpTxt = this.text.substr(0, p - 1), this.$refs.txt.innerHTML = this.tmpTxt, this.showButton) {
                                    var u = this.$refs.more.offsetLeft;
                                    this.collapseMarginLeft = e - i - u - 1;
                                }
                                break;
                            }
                            if (-1 === d && Math.round(this.$refs.container.offsetHeight / l) === this.line) {
                                if (this.tmpTxt = this.text.substr(0, p), this.$refs.txt.innerHTML = this.tmpTxt, this.showButton) {
                                    var h = this.$refs.more.offsetLeft;
                                    this.collapseMarginLeft = e - i - h - 1;
                                }
                                break;
                            }
                        }
                    }
                },
                methods: {
                    handleClick: function() {
                        this.show ? this.collapse() : this.expand();
                    },
                    expand: function() {
                        this.show || (this.show = !0, this.$refs.txt.innerHTML = this.text);
                    },
                    collapse: function() {
                        this.show && (this.show = !1, this.$refs.txt.innerHTML = this.tmpTxt);
                    }
                }
            };
        }(), i.exports.__esModule && (i.exports = i.exports.default);
        var n = "function" == typeof i.exports ? i.exports.options : i.exports;
        n.render = function() {
            var t = this.$createElement, e = this._self._c || t;
            return e("div", {
                ref: "container",
                staticClass: "ellipsis-plus"
            }, [ e("span", {
                ref: "txt",
                staticClass: "ellipsis-plus-txt"
            }, [ this._v("中") ]), e("span", {
                ref: "ellipsis",
                staticClass: "ellipsis-plus-ellipsis",
                style: {
                    display: this.show ? "none" : "inline-block"
                }
            }, [ this._v(this._s(this.ellipsis)) ]), this.showButton ? e("button", {
                ref: "more",
                staticClass: "ellipsis-plus-button",
                style: {
                    "margin-left": this.show ? this.marginLeft + "px" : this.collapseMarginLeft + "px"
                },
                on: {
                    click: this.handleClick
                }
            }, [ this._v(this._s(this.show ? this.collapseText : this.expandText)) ]) : this._e() ]);
        }, n.staticRenderFns = [];
    }
}), require.register({
    "common/font-family-selector.vue": function(t, e, i) {
        e("vueify/lib/insert-css").insert(".font-family-container{position:relative;width:100%;display:flex;flex-direction:row;align-items:center}.font-family-container .example{cursor:pointer;font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;flex:0 1 100%;overflow:hidden;text-overflow:ellipsis;line-height:20px}.font-family-container .box_container{-webkit-transform:translateZ(0);position:absolute;z-index:1;display:none;width:216px;height:408px}.font-family-container .box_container.visible{display:block}.font-family-container .expand-arrow{flex:0 0 17px;width:7px;height:5px;background-repeat:no-repeat;background-size:7px 5px;background-image:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/controls/button_settings/arrow.png);transition:all .2s ease-out;cursor:pointer}.font-family-container:hover .expand-arrow{background-image:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/controls/button_settings/arrow-active.png)}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2),only screen and (min-resolution:192dpi){.font-family-container .expand-arrow{background-size:7px 5px;background-image:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/controls/button_settings/arrow@2x.png)}.font-family-container:hover .expand-arrow{background-size:7px 5px;background-image:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/controls/button_settings/arrow-active@2x.png)}}");
        !function() {
            "use strict";
            i.exports = {
                model: {
                    event: "change"
                },
                data: function() {
                    return {
                        visibleBox: !1,
                        boxStyles: {},
                        exStyle: {
                            "font-family": this.family
                        }
                    };
                },
                props: {
                    family: {
                        type: String,
                        default: ""
                    },
                    vAlign: {
                        type: String,
                        default: "auto"
                    },
                    hAlign: {
                        type: String,
                        default: "right"
                    },
                    hOffset: {
                        type: Number,
                        default: 0
                    }
                },
                mounted: function() {
                    if ("auto" === this.vAlign) {
                        var t = this.$el.getBoundingClientRect(), e = "top";
                        t.top > window.innerHeight / 2 && (e = "bottom"), this.boxStyles[e] = t.height + "px";
                    }
                    this.boxStyles[this.hAlign] = this.hOffset + "px", this.fontselector = new RM.classes.FontSelector({
                        $parent: $(this.$el.querySelector(".box_container"))
                    }), this.fontselector.on("selectfont", this.fontChanged), this.fontselector.show();
                },
                methods: {
                    fontChanged: function(t) {
                        this.exStyle["font-family"] = t, this.$emit("change", t);
                    },
                    toggleVisible: function() {
                        this.visibleBox || this.$emit("showPopup", this), this.visibleBox = !this.visibleBox;
                    }
                }
            };
        }(), i.exports.__esModule && (i.exports = i.exports.default);
        var n = "function" == typeof i.exports ? i.exports.options : i.exports;
        n.render = function() {
            var t = this.$createElement, e = this._self._c || t;
            return e("div", {
                staticClass: "font-family-container"
            }, [ e("span", {
                staticClass: "example",
                style: this.exStyle,
                on: {
                    click: this.toggleVisible
                }
            }, [ this._v(this._s(this.family)) ]), this._v(" "), e("div", {
                staticClass: "expand-arrow",
                on: {
                    click: this.toggleVisible
                }
            }), this._v(" "), e("div", {
                staticClass: "box_container",
                class: {
                    visible: this.visibleBox
                },
                style: this.boxStyles
            }) ]);
        }, n.staticRenderFns = [];
    }
}), require.register({
    "common/font-style-selector.vue": function(t, e, i) {
        e("vueify/lib/insert-css").insert(".font-style-container{position:relative;width:100%;display:flex;flex-direction:row;align-items:center}.font-style-container .example{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;flex:0 1 100%;overflow:hidden;text-overflow:ellipsis;line-height:16px;cursor:pointer}.font-style-container .box_container{-webkit-transform:translateZ(0);position:absolute;z-index:1;display:none;width:152px;top:27px;left:-18px;border:1px solid #ddd;background:#fff;cursor:pointer}.font-style-container .box_container.from-top{top:auto;bottom:27px}.font-style-container .box_container.visible{display:block}.font-style-container .box_container .font-elem{padding:7px 23px 8px;position:relative}.font-style-container .box_container .font-elem .point{position:absolute;width:6px;height:6px;left:10px;top:12px}.font-style-container .box_container .font-elem:hover .point{background:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/controls/text_styles/point-hover.png) no-repeat 0 0}.font-style-container .box_container .font-elem.curr .point{background:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/controls/text_styles/point-active.png) no-repeat 0 0!important}.font-style-container .expand-arrow{flex:0 0 17px;width:7px;height:5px;background-repeat:no-repeat;background-size:7px 5px;background-image:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/controls/button_settings/arrow.png);transition:all .2s ease-out;cursor:pointer}.font-style-container:hover .expand-arrow{background-image:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/controls/button_settings/arrow-active.png)}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2),only screen and (min-resolution:192dpi){.font-style-container .expand-arrow{background-size:7px 5px;background-image:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/controls/button_settings/arrow@2x.png)}.font-style-container:hover .expand-arrow{background-size:7px 5px;background-image:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/controls/button_settings/arrow-active@2x.png)}.font-style-container .box_container .font-elem:hover .point{background-image:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/controls/text_styles/point-hover@2x.png);background-size:6px 6px}.font-style-container .box_container .font-elem.curr .point{background-image:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/controls/text_styles/point-active@2x.png)!important;background-size:6px 6px!important}}");
        !function() {
            "use strict";
            i.exports = {
                model: {
                    event: "change"
                },
                data: function() {
                    return {
                        visibleBox: !1,
                        boxStyles: {},
                        styleVariants: {}
                    };
                },
                props: {
                    fontStyle: {
                        type: String,
                        default: ""
                    },
                    fontFamily: {
                        type: String,
                        default: ""
                    },
                    fontWeight: {
                        type: Number,
                        default: 0
                    }
                },
                computed: {
                    exStyle: function() {
                        return {
                            "font-style": this.fontStyle,
                            "font-weight": this.fontWeight
                        };
                    },
                    fromTop: function() {
                        return _.keys(this.styleVariants).length > 5;
                    },
                    key: function() {
                        var t = ("italic" == this.fontStyle ? "i" : "n") + ("" + this.fontWeight)[0];
                        return this.styleVariants[t] || (t = this.styleVariants.n4 ? "n4" : _.keys(this.styleVariants)[0], this.$emit("update:fontStyle", "i" == t[0] ? "italic" : "normal"), 
                        this.$emit("update:fontWeight", 100 * parseInt(t[1], 10))), t;
                    }
                },
                watch: {
                    fontStyle: function() {},
                    fontFamily: {
                        handler: function(t) {
                            var e = this, i = RM.constructorRouter.fonts.findFontByCSSName(t), n = {
                                i: "italic",
                                n: "normal"
                            };
                            this.styleVariants = {}, _.map(i.variations, function(t) {
                                e.styleVariants[t] = {
                                    caption: e.generateName(t),
                                    style: {
                                        fontWeight: 100 * parseInt(t[1], 10),
                                        fontStyle: n[t[0]]
                                    }
                                };
                            });
                        },
                        immediate: !0
                    }
                },
                methods: {
                    generateName: function(t) {
                        var e = "i" == t[0], i = {
                            "1": "Thin",
                            "2": "ExtraLight",
                            "3": "Light",
                            "4": "Regular",
                            "5": "Medium",
                            "6": "SemiBold",
                            "7": "Bold",
                            "8": "ExtraBold",
                            "9": "Black"
                        }[t[1]];
                        return e && "Regular" == i ? "Italic" : i + (e ? " Italic" : "");
                    },
                    selectFont: function(t) {
                        this.$emit("update:fontStyle", t.style.fontStyle), this.$emit("update:fontWeight", t.style.fontWeight);
                    },
                    toggleVisible: function() {
                        this.visibleBox || this.$emit("showPopup", this), this.visibleBox = !this.visibleBox;
                    }
                }
            };
        }(), i.exports.__esModule && (i.exports = i.exports.default);
        var n = "function" == typeof i.exports ? i.exports.options : i.exports;
        n.render = function() {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {
                staticClass: "font-style-container"
            }, [ i("span", {
                staticClass: "example",
                style: t.exStyle,
                on: {
                    click: t.toggleVisible
                }
            }, [ t._v(t._s(t.styleVariants[t.key].caption)) ]), t._v(" "), i("div", {
                staticClass: "expand-arrow",
                on: {
                    click: t.toggleVisible
                }
            }), t._v(" "), i("div", {
                staticClass: "box_container",
                class: {
                    visible: t.visibleBox,
                    "from-top": t.fromTop
                },
                style: t.boxStyles
            }, t._l(t.styleVariants, function(e, n) {
                return i("div", {
                    staticClass: "font-elem",
                    class: t.key == n ? "curr" : "",
                    style: e.style,
                    on: {
                        click: function(i) {
                            t.selectFont(e, n);
                        }
                    }
                }, [ t._v(t._s(e.caption)), i("div", {
                    staticClass: "point"
                }) ]);
            })) ]);
        }, n.staticRenderFns = [];
    }
}), require.register({
    "common/init.vue": function(t, e, i) {
        !function() {
            "use strict";
            Vue.component("color-picker", e("common/color-picker")), Vue.component("font-family-selector", e("common/font-family-selector")), 
            Vue.component("font-style-selector", e("common/font-style-selector")), Vue.component("numeric-input", e("common/numeric-input")), 
            Vue.component("rm-apply-input", e("common/rm-apply-input")), Vue.component("rm-opacity-drag", e("common/rm-opacity-drag")), 
            Vue.component("rm-scroll", e("common/rm-scroll")), Vue.component("rm-select", e("common/rm-select")), 
            Vue.component("rm-spinner", e("common/rm-spinner")), Vue.component("rm-switcher", e("common/rm-switcher")), 
            Vue.component("rm-variant-input", e("common/rm-variant-input")), Vue.component("video-search", e("common/video-search")), 
            Vue.component("ellipsis-plus", e("common/ellipsis-plus"));
        }(), i.exports.__esModule && (i.exports = i.exports.default);
        "function" == typeof i.exports ? i.exports.options : i.exports;
    }
}), require.register({
    "common/numeric-input.vue": function(t, e, i) {
        e("vueify/lib/insert-css").insert(".param-input.inactive{opacity:.5}");
        !function() {
            "use strict";
            i.exports = {
                model: {
                    event: "change"
                },
                props: {
                    value: Number,
                    autofocus: {
                        type: Boolean,
                        default: !1
                    },
                    autosize: {
                        type: Boolean,
                        default: !1
                    },
                    wait: {
                        type: Number,
                        default: null
                    },
                    min: {
                        type: Number,
                        default: Number.NEGATIVE_INFINITY
                    },
                    max: {
                        type: Number,
                        default: Number.POSITIVE_INFINITY
                    },
                    dir: {
                        type: String,
                        default: "v"
                    },
                    speed: {
                        type: Number,
                        default: 3
                    },
                    step: {
                        type: Number,
                        default: 1
                    },
                    labelSelector: {
                        type: String,
                        default: ""
                    },
                    shiftStep: {
                        type: Number,
                        default: 10
                    },
                    useFloat: {
                        type: Boolean,
                        default: !1
                    },
                    mouseOnly: {
                        type: Boolean,
                        default: !1
                    },
                    mouseUse: {
                        type: Boolean,
                        default: !0
                    },
                    readonly: {
                        type: Boolean,
                        default: !1
                    },
                    disabled: {
                        type: Boolean,
                        default: !1
                    },
                    thousandDelimiter: {
                        type: String,
                        default: ""
                    }
                },
                computed: {
                    computedValue: {
                        get: function() {
                            var t, e = this;
                            return t = this.$$el ? this.$$el.data("formatValue")(this.value) : this.value, this.autosize && Vue.nextTick(function() {
                                RM.utils.setInputSize($(e.$el), 150);
                            }), t;
                        }
                    }
                },
                watch: {
                    mouseUse: function(t) {
                        var e = this;
                        Vue.nextTick(function() {
                            var t = e.$$el.data("destroy");
                            _.isFunction(t) && t(), e.$$el.RMNumericInput({
                                onChange: e.onChange,
                                labelSelector: e.labelSelector
                            });
                        });
                    }
                },
                mounted: function() {
                    this.$$el = $(this.$el);
                    var t = function() {
                        this.$$el.RMNumericInput({
                            onChange: this.onChange,
                            labelSelector: this.labelSelector
                        }), this.$$el.data("formatValue")(this.value), this.autosize && RM.utils.setInputSize($(this.$el), 150, this.$$el.val());
                    }.bind(this);
                    this.wait ? RM.utils.waitForTransitionEnd(this.$$el, this.wait, "opacity", function() {
                        t();
                    }.bind(this)) : t();
                },
                methods: {
                    onChange: function(t, e) {
                        this.$emit("change", e);
                    }
                }
            };
        }(), i.exports.__esModule && (i.exports = i.exports.default);
        var n = "function" == typeof i.exports ? i.exports.options : i.exports;
        n.render = function() {
            var t = this.$createElement;
            return (this._self._c || t)("input", {
                staticClass: "param-input",
                attrs: {
                    type: "text",
                    spellcheck: "false",
                    "data-useFloat": this.useFloat,
                    "data-step": this.step,
                    "data-min": this.min,
                    "data-max": this.max,
                    "data-mouseDir": this.dir,
                    "data-mouseSpeed": this.speed,
                    "data-shiftStep": 15,
                    "data-autofocus": this.autofocus,
                    "data-autoSize": this.autosize,
                    wait: this.wait,
                    "data-mouseOnly": this.mouseOnly,
                    readonly: this.readonly || this.mouseOnly,
                    disabled: this.disabled,
                    "data-mouseUse": this.mouseUse + "",
                    "data-thousandDelimiter": this.thousandDelimiter
                },
                domProps: {
                    value: this.computedValue
                }
            });
        }, n.staticRenderFns = [];
    }
}), require.register({
    "common/rm-apply-input.vue": function(t, e, i) {
        e("vueify/lib/insert-css").insert(".apply-input .input{font-family:Avenir Next,Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:600;font-style:normal;font-size:14px;color:#979ea8;border-radius:5px;box-sizing:border-box;width:100%;border:none;line-height:25px;padding:2px 25px 1px}.apply-input .input.no-prefix{padding:2px 26px 1px 8px}.apply-input .input::-webkit-input-placeholder{color:#979ea8;opacity:.5}.apply-input .input:-moz-placeholder{color:#979ea8;opacity:.5}.apply-input .input-prefix{font-family:Avenir Next,Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:600;font-style:normal;font-size:14px;color:#979ea8;top:9px;position:absolute;left:8px}.apply-input .input-control{position:absolute;top:5px;width:18px;height:18px;cursor:pointer;right:6px;transition:background .2s ease-out}.apply-input .input-control.clear{background:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/panels/twitter/input-delete.png) no-repeat 0 0}.apply-input .input-control.clear:hover{background:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/panels/twitter/input-delete-hover.png) no-repeat 0 0}.apply-input .input-control.apply{background:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/panels/twitter/input-go.png) no-repeat 0 0}.apply-input .input-control.apply:hover{background:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/panels/twitter/input-go-hover.png) no-repeat 0 0}.apply-input .input-control.hidden{display:none}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2),only screen and (min-resolution:192dpi){.apply-input .input-control.clear{background:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/panels/twitter/input-delete@2x.png) no-repeat 0 0;background-size:18px 18px}.apply-input .input-control.clear:hover{background:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/panels/twitter/input-delete-hover@2x.png) no-repeat 0 0;background-size:18px 18px}.apply-input .input-control.apply{background:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/panels/twitter/input-go@2x.png) no-repeat 0 0;background-size:18px 18px}.apply-input .input-control.apply:hover{background:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/panels/twitter/input-go-hover@2x.png) no-repeat 0 0;background-size:18px 18px}}");
        !function() {
            "use strict";
            i.exports = {
                props: {
                    value: {
                        type: String
                    },
                    prefix: {
                        type: String,
                        default: ""
                    }
                },
                data: function() {
                    return {
                        text: ""
                    };
                },
                mounted: function() {
                    this.text = this.value;
                }
            };
        }(), i.exports.__esModule && (i.exports = i.exports.default);
        var n = "function" == typeof i.exports ? i.exports.options : i.exports;
        n.render = function() {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {
                staticClass: "apply-input"
            }, [ i("input", {
                directives: [ {
                    name: "model",
                    rawName: "v-model",
                    value: t.text,
                    expression: "text"
                } ],
                staticClass: "input",
                class: {
                    "no-prefix": !t.prefix
                },
                attrs: {
                    placeholder: "Username"
                },
                domProps: {
                    value: t.text
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.text = e.target.value);
                    }
                }
            }), t._v(" "), i("div", {
                staticClass: "input-prefix"
            }, [ t._v(t._s(t.prefix)) ]), t._v(" "), t.value != t.text ? i("div", {
                staticClass: "input-control apply",
                on: {
                    click: function(e) {
                        e.stopPropagation(), t.$emit("input", t.text);
                    }
                }
            }) : t.value ? i("div", {
                staticClass: "input-control clear",
                on: {
                    click: function(e) {
                        e.stopPropagation(), t.$emit("input", ""), t.text = "";
                    }
                }
            }) : t._e() ]);
        }, n.staticRenderFns = [];
    }
}), require.register({
    "common/rm-opacity-drag.vue": function(t, e, i) {
        e("vueify/lib/insert-css").insert(".rm-opacity-slider{border-radius:15px;cursor:pointer;position:absolute;top:39px;left:50%;margin-left:-60px;width:120px;height:30px;background-image:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/controls/picture_settings/opacity-bg.png);background-repeat:no-repeat;background-size:120px 30px}.rm-opacity-slider .opacity-handle{cursor:hand;cursor:ew-resize;border-radius:50%;box-shadow:inset 0 0 0 2px #3d3d3d;position:absolute;width:26px;height:26px;top:0;left:0;margin:2px 0 0 -13px;transition:box-shadow .2s ease-in-out}.rm-opacity-slider .opacity-handle.opacity-dragging,.rm-opacity-slider .opacity-handle:hover{box-shadow:inset 0 0 0 2px #0078ff}");
        !function() {
            "use strict";
            i.exports = {
                model: {
                    event: "change"
                },
                computed: {
                    percent: function() {
                        return Math.round(100 * this.value);
                    },
                    gradientLeft: function() {
                        return RM.utils.getRGBA(this.gradientColor, 1);
                    },
                    gradientRight: function() {
                        return RM.utils.getRGBA(this.gradientColor, 0);
                    }
                },
                watch: {
                    value: function(t) {
                        t != $(this.$el).data("opacity") && $(this.$el).data("rmopacitydragChange")({
                            opacity: t
                        });
                    }
                },
                props: {
                    value: {
                        type: Number,
                        default: 1
                    },
                    width: {
                        type: Number,
                        default: 120
                    },
                    handleWidth: {
                        type: Number,
                        default: 30
                    },
                    gradientColor: {
                        type: String,
                        default: "none"
                    },
                    gap: {
                        type: Number,
                        default: 0
                    }
                },
                mounted: function() {
                    $(this.$el).rmOpacityDrag({
                        opacity: this.value,
                        onchange: this.onOpacityChange,
                        onenddrag: this.onOpacityEndDrag,
                        width: this.width,
                        handleWidth: this.handleWidth,
                        gap: this.gap
                    }).data("rmopacitydrag-change");
                },
                methods: {
                    opacityMouseEnter: function() {
                        this.$emit("opacity-active", !0);
                    },
                    opacityMouseLeave: function() {
                        this.$emit("opacity-active", !1);
                    },
                    onOpacityEndDrag: function() {
                        this.$emit("opacity-active", !1);
                    },
                    onOpacityChange: function(t) {
                        $(this.$refs.handle).hasClass("opacity-dragging") && this.$emit("opacity-active", !0), Math.abs(this.value - t) > .001 && this.$emit("change", t);
                    }
                }
            };
        }(), i.exports.__esModule && (i.exports = i.exports.default);
        var n = "function" == typeof i.exports ? i.exports.options : i.exports;
        n.render = function() {
            var t = this.$createElement, e = this._self._c || t;
            return e("div", {
                staticClass: "rm-opacity-slider",
                style: {
                    background: "linear-gradient(to right, " + this.gradientLeft + ", " + this.gradientRight + ")"
                },
                on: {
                    mouseenter: this.opacityMouseEnter,
                    mouseleave: this.opacityMouseLeave
                }
            }, [ e("div", {
                ref: "handle",
                staticClass: "opacity-handle"
            }, [ this._t("default") ], 2) ]);
        }, n.staticRenderFns = [];
    }
}), require.register({
    "common/rm-scroll.vue": function(t, e, i) {
        !function() {
            "use strict";
            i.exports = {
                props: {
                    onPanelScroll: {
                        type: Function,
                        default: function() {}
                    },
                    onScrollRecalc: {
                        type: Function,
                        default: function() {}
                    },
                    scrollGapStart: {
                        type: Number,
                        default: 16
                    },
                    scrollGapEnd: {
                        type: Number,
                        default: 16
                    },
                    systemScroll: {
                        type: Boolean,
                        default: !1
                    }
                },
                mounted: function() {
                    this.resizableScroll = $(this.$refs.scrollWrapper).RMScroll({
                        $container: $(this.$refs.contentWrapper),
                        $content: $(this.$refs.content),
                        $handle: $(this.$refs.scroll),
                        wheelScrollSpeed: .4,
                        gap_start: this.scrollGapStart,
                        gap_end: this.scrollGapEnd,
                        systemScroll: this.systemScroll,
                        onScroll: this.onPanelScroll
                    }).data("scroll"), this.__scrollRecalc_debounced = _.debounce(_.bind(function() {
                        this.resizableScroll.recalc(), this.onScrollRecalc("control-resize");
                    }, this), 300);
                },
                methods: {
                    recalcScroll: function() {
                        this.__scrollRecalc_debounced();
                    }
                }
            };
        }(), i.exports.__esModule && (i.exports = i.exports.default);
        var n = "function" == typeof i.exports ? i.exports.options : i.exports;
        n.render = function() {
            var t = this.$createElement, e = this._self._c || t;
            return e("div", {
                ref: "scrollWrapper",
                staticClass: "resizable-scroll-wrapper"
            }, [ e("div", {
                ref: "contentWrapper",
                staticClass: "resizable-content-wrapper"
            }, [ e("div", {
                ref: "content",
                staticClass: "resizable-content"
            }, [ this._t("default") ], 2) ]), this._v(" "), e("div", {
                ref: "scroll",
                staticClass: "resizable-scroll"
            }) ]);
        }, n.staticRenderFns = [];
    }
}), require.register({
    "common/rm-select.vue": function(t, e, i) {
        e("vueify/lib/insert-css").insert(".selector[data-v-1974a9e5]{position:relative;margin:12px auto 0;width:100%;height:32px;cursor:pointer;border-radius:3px;box-shadow:inset 0 0 0 1px rgba(0,0,0,.12);color:#44444c;transition:all .1s ease-out}.selector[data-v-1974a9e5]:hover{box-shadow:inset 0 0 0 1px rgba(0,0,0,.24)}.selector:hover .popup-arrow[data-v-1974a9e5]{opacity:1}.selector .caption[data-v-1974a9e5]{text-align:center;font-family:Avenir Next,Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:500;font-style:normal;font-size:14px}.selector .caption-inner[data-v-1974a9e5]{box-sizing:border-box;line-height:100%;padding:0 20px;line-height:32px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.selector .popup-arrow[data-v-1974a9e5]{position:absolute;top:13px;right:9px;width:0;height:0;border-right:3px solid transparent;border-left:3px solid transparent;border-top:4px solid #44444c;opacity:.24;transition:opacity .1s ease-out}.selector.opened .types-popup[data-v-1974a9e5]{transition:opacity .2s ease-in-out;opacity:1;visibility:visible}.selector .types-popup[data-v-1974a9e5]{transition:all .2s ease-in-out;opacity:0;visibility:hidden;z-index:2;position:absolute;left:0;top:0;box-shadow:0 0 0 1px rgba(0,0,0,.0666);background:hsla(0,0%,100%,.96);border-radius:3px;text-align:left;width:100%}.selector .types-popup .type-item[data-v-1974a9e5]{position:relative;padding:8px 13px 8px 21px;font-size:14px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;cursor:pointer;font-family:Avenir Next,Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:500;font-style:normal}.selector .types-popup .type-item .point[data-v-1974a9e5]{position:absolute;width:6px;height:6px;left:9px;top:12px}.selector .types-popup .type-item:hover .point[data-v-1974a9e5]{background:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/panels/twitter/point-hover.png) no-repeat 0 0}.selector .types-popup .type-item.curr .point[data-v-1974a9e5]{background:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/panels/twitter/point-active.png) no-repeat 0 0!important}");
        !function() {
            "use strict";
            i.exports = {
                data: function() {
                    return {
                        isOpened: !1
                    };
                },
                props: {
                    value: {},
                    options: {
                        type: Array,
                        default: []
                    }
                },
                computed: {
                    caption: function() {
                        return (_.findWhere(this.options, {
                            value: this.value
                        }) || {}).caption;
                    }
                },
                methods: {
                    onClick: function(t) {
                        this.isOpened = !this.isOpened;
                    },
                    emitValue: function(t) {
                        this.$emit("input", t);
                    }
                }
            };
        }(), i.exports.__esModule && (i.exports = i.exports.default);
        var n = "function" == typeof i.exports ? i.exports.options : i.exports;
        n.render = function() {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {
                staticClass: "selector",
                class: {
                    opened: t.isOpened
                },
                on: {
                    click: t.onClick
                }
            }, [ i("div", {
                staticClass: "types-popup"
            }, t._l(t.options, function(e) {
                return i("div", {
                    staticClass: "type-item",
                    class: {
                        curr: e.value == t.value
                    },
                    on: {
                        click: function(i) {
                            t.emitValue(e.value);
                        }
                    }
                }, [ t._v(t._s(e.caption)), i("div", {
                    staticClass: "point"
                }) ]);
            })), t._v(" "), i("div", {
                staticClass: "caption"
            }, [ i("div", {
                staticClass: "caption-inner"
            }, [ t._v(t._s(t.caption)) ]) ]), t._v(" "), i("div", {
                staticClass: "popup-arrow"
            }) ]);
        }, n.staticRenderFns = [], n._scopeId = "data-v-1974a9e5";
    }
}), require.register({
    "common/rm-spinner.vue": function(t, e, i) {
        e("vueify/lib/insert-css").insert(".spinner{position:relative;margin:14px 0 11px -5px;height:19px;letter-spacing:-.1px}.spinner .spin-title{font-family:Avenir Next,Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:600;font-style:normal;font-size:12px;color:#5d5d5d;text-align:center;padding-top:4px;position:absolute;left:0;right:0;top:0;cursor:default}.spinner .spin{position:absolute;width:12px;height:20px;top:0;cursor:pointer}.spinner .spin.left{left:2px;background-image:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/controls/audio_settings/spin-l.png)}.spinner .spin.left:hover{background-image:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/controls/audio_settings/spin-l-hover.png)}.spinner .spin.right{right:1px;background-image:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/controls/audio_settings/spin-r.png)}.spinner .spin.right:hover{background-image:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/controls/audio_settings/spin-r-hover.png)}.spinner .fade-enter-active,.spinner .fade-leave-active{transition:.3s ease}.spinner .fade-enter{transform:translateX(15px);opacity:0}.spinner .fade-enter-to{transform:translateX(0);opacity:1}.spinner .fade-leave-to{opacity:0}.spinner .fade-leave-to,.spinner.negative .fade-enter{transform:translateX(-15px)}.spinner.negative .fade-leave-to{transform:translateX(15px)}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2),only screen and (min-resolution:192dpi){.spinner .spin{background-size:12px 20px}.spinner .spin.left{background-image:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/controls/audio_settings/spin-l@2x.png)}.spinner .spin.left:hover{background-image:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/controls/audio_settings/spin-l-hover@2x.png)}.spinner .spin.right{background-image:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/controls/audio_settings/spin-r@2x.png)}.spinner .spin.right:hover{background-image:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/controls/audio_settings/spin-r-hover@2x.png)}}");
        !function() {
            "use strict";
            i.exports = {
                model: {
                    event: "change"
                },
                props: {
                    value: "",
                    variants: {
                        type: Array,
                        default: []
                    }
                },
                methods: {
                    spinType: function(t) {
                        var e = this, i = 0;
                        _.each(this.variants, function(t, n) {
                            t.value === e.value && (i = n);
                        }), i = (i += t) < 0 ? i + this.variants.length : i % this.variants.length, $(this.$el).toggleClass("negative", t < 0), 
                        this.$emit("change", this.variants[i].value);
                    }
                }
            };
        }(), i.exports.__esModule && (i.exports = i.exports.default);
        var n = "function" == typeof i.exports ? i.exports.options : i.exports;
        n.render = function() {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {
                staticClass: "spinner"
            }, [ i("transition", {
                attrs: {
                    name: "fade"
                }
            }, [ t._l(t.variants, function(e, n) {
                return [ e.value == t.value ? i("div", {
                    staticClass: "spin-title"
                }, [ t._v(t._s(e.title)) ]) : t._e() ];
            }) ], 2), t._v(" "), i("div", {
                staticClass: "spin left",
                on: {
                    click: function(e) {
                        e.stopPropagation(), t.spinType(-1);
                    }
                }
            }), t._v(" "), i("div", {
                staticClass: "spin right",
                on: {
                    click: function(e) {
                        e.stopPropagation(), t.spinType(1);
                    }
                }
            }) ], 1);
        }, n.staticRenderFns = [];
    }
}), require.register({
    "common/rm-switcher.vue": function(t, e, i) {
        e("vueify/lib/insert-css").insert(".rmswitcher-body{user-select:none;position:relative;overflow:hidden;margin-left:auto;margin-right:auto}.rmswitcher-panel{position:relative;top:0}.rmswitcher-panel-off,.rmswitcher-panel-on{position:absolute;top:0;white-space:nowrap;text-align:center;overflow:hidden;text-overflow:ellipsis;font-family:Avenir Next,Helvetica Neue,Helvetica,Arial,sans-serif}.rmswitcher-panel-slider{position:absolute;top:1px;left:50%}");
        !function() {
            "use strict";
            i.exports = {
                model: {
                    event: "stateChange"
                },
                props: {
                    value: {},
                    isDisabled: {
                        type: Boolean,
                        default: !1
                    },
                    width: {
                        type: Number,
                        default: 37
                    },
                    height: {
                        type: Number,
                        default: 20
                    },
                    shadow: {
                        default: "none"
                    },
                    colorOn: {
                        default: "#0074FF"
                    },
                    colorOff: {
                        default: "rgba(26, 26, 26, 0.4)"
                    },
                    textOn: {
                        default: ""
                    },
                    textOff: {
                        default: ""
                    },
                    textSizeOn: {
                        default: 12
                    },
                    textSizeOff: {
                        default: 12
                    },
                    textColorOn: {
                        default: "#fff"
                    },
                    textColorOff: {
                        default: "#fff"
                    },
                    handleColor: {
                        default: "#fff"
                    },
                    handleShadow: {
                        default: "none"
                    }
                },
                data: function() {
                    return {
                        internalState: !1,
                        bodyColorStyle: null,
                        panelPosStyle: null,
                        panelBackOpacity: null
                    };
                },
                created: function() {
                    this.internalState = this.value;
                },
                mounted: function() {
                    this.updateSwitcher();
                },
                methods: {
                    setSwitcherPos: function(t) {
                        this.cur_state = t, this.bodyColorStyle = {
                            "background-color": this.colorTransform(this.colorOn, this.colorOff, t)
                        }, this.panelPosStyle = {
                            left: Math.round(this.shiftWidth * t) + "px"
                        }, this.panelBackOpacityStyle = {
                            opacity: (1 - t).toFixed(2)
                        };
                    },
                    updateSwitcher: function() {
                        this.setSwitcherPos(this.internalState ? 0 : void 0 === this.internalState ? .5 : 1);
                    },
                    colorTransform: function(t, e, i) {
                        return t = parseCSSColor(t), e = parseCSSColor(e), "rgba(" + Math.max(Math.min(parseInt(i * (e[0] - t[0]) + t[0], 10), 255), 0) + "," + Math.max(Math.min(parseInt(i * (e[1] - t[1]) + t[1], 10), 255), 0) + "," + Math.max(Math.min(parseInt(i * (e[2] - t[2]) + t[2], 10), 255), 0) + "," + Math.max(Math.min(parseFloat(i * (e[3] - t[3]) + t[3], 10), 1), 0) + ")";
                    },
                    oneStepSwitcherPos: function(t) {
                        if (void 0 === t) return clearInterval(this.timer), this.setSwitcherPos(.5);
                        var e = (t = t ? 0 : 1) < this.internalState ? -1 : 1, i = Math.max(Math.min(this.cur_state + .1 * e, 1), 0);
                        (e > 0 && i >= t || e < 0 && i <= t) && (i = t, clearInterval(this.timer)), this.setSwitcherPos(i);
                    }
                },
                computed: {
                    handleSize: function() {
                        return this.height - 2;
                    },
                    bodyStyle: function() {
                        return {
                            width: this.width + "px",
                            height: this.height + "px",
                            "box-shadow": this.shadow,
                            "border-radius": Math.floor(this.height / 2) + "px",
                            opacity: this.isDisabled ? .5 : 1,
                            cursor: this.isDisabled ? "default" : "pointer"
                        };
                    },
                    fullWidth: function() {
                        return 2 * (this.width - this.handleSize - 1) + this.handleSize;
                    },
                    textWidth: function() {
                        return Math.round(.75 * this.width - 8 - 8);
                    },
                    shiftWidth: function() {
                        return this.width - this.fullWidth;
                    },
                    panelStyle: function() {
                        return {
                            width: this.fullWidth + "px",
                            height: this.height + "px"
                        };
                    },
                    textStyle: function() {
                        return {
                            width: this.textWidth + "px",
                            "line-height": this.height + "px"
                        };
                    },
                    textOffStyle: function() {
                        return {
                            "font-size": this.textSizeOn + "px",
                            color: this.textColorOn
                        };
                    },
                    textOnStyle: function() {
                        return {
                            "font-size": this.textSizeOff + "px",
                            color: this.textColorOff
                        };
                    },
                    handleStyle: function() {
                        return {
                            "margin-left": "-" + Math.floor(this.handleSize / 2) + "px",
                            width: this.handleSize + "px",
                            height: this.handleSize + "px",
                            "border-radius": Math.floor(this.handleSize / 2) + "px",
                            "box-shadow": this.handleShadow,
                            background: this.handleColor
                        };
                    }
                },
                watch: {
                    internalState: function(t) {
                        clearInterval(this.timer), this.timer = setInterval(function() {
                            this.oneStepSwitcherPos(t);
                        }.bind(this), 20), this.$emit("stateChange", t);
                    },
                    value: function(t) {
                        this.internalState = t;
                    }
                }
            };
        }(), i.exports.__esModule && (i.exports = i.exports.default);
        var n = "function" == typeof i.exports ? i.exports.options : i.exports;
        n.render = function() {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {
                staticClass: "rm-switcher"
            }, [ i("div", {
                staticClass: "rmswitcher-body",
                style: [ t.bodyStyle, t.bodyColorStyle ]
            }, [ i("div", {
                ref: "panelBack",
                staticClass: "rmswitcher-panel-back"
            }), t._v(" "), i("div", {
                staticClass: "rmswitcher-panel",
                style: [ t.panelStyle, t.panelPosStyle ],
                on: {
                    click: function(e) {
                        t.internalState = !t.internalState;
                    }
                }
            }, [ i("div", {
                staticClass: "rmswitcher-panel-on",
                style: [ t.textStyle, t.textOnStyle ]
            }, [ t._v(t._s(t.textOff)) ]), t._v(" "), i("div", {
                staticClass: "rmswitcher-panel-off",
                style: [ t.textStyle, t.textOffStyle ]
            }, [ t._v(t._s(t.textOn)) ]), t._v(" "), i("div", {
                staticClass: "rmswitcher-panel-slider",
                style: t.handleStyle
            }) ]) ]) ]);
        }, n.staticRenderFns = [];
    }
}), require.register({
    "common/rm-variant-input.vue": function(t, e, i) {
        e("vueify/lib/insert-css").insert('.variant-input .input{font-family:Avenir Next,Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:600;font-style:normal;font-size:14px;color:#979ea8;border-radius:5px;box-sizing:border-box;width:100%;border:none;line-height:25px;padding:2px 26px 1px 8px}.variant-input .input::-webkit-input-placeholder{color:#979ea8;opacity:.5}.variant-input .input:-moz-placeholder{color:#979ea8;opacity:.5}.variant-input .input-prefix{font-family:Avenir Next,Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:600;font-style:normal;font-size:14px;color:#979ea8;top:9px;position:absolute;left:8px}.variant-input .input-control{position:absolute;top:5px;width:18px;height:18px;cursor:pointer;right:6px;transition:background .2s ease-out}.variant-input .input-control.clear{background:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/panels/twitter/input-delete.png) no-repeat 0 0}.variant-input .input-control.clear:hover{background:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/panels/twitter/input-delete-hover.png) no-repeat 0 0}.variant-input .input-control.target{background:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/panels/twitter/input-target.png) no-repeat 0 0}.variant-input .input-control.target:hover{background:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/panels/twitter/input-target-hover.png) no-repeat 0 0}.variant-input .input-control.target:hover .use-url-popup{bottom:27px;opacity:1;visibility:visible}.variant-input .input-control.target .use-url-popup{opacity:0;visibility:hidden;bottom:19px;width:168px;background-color:#363234;border-radius:4px;left:50%;margin-left:-84px;position:absolute;transition:opacity .2s ease-in-out,visibility .2s ease-in-out,bottom .2s ease-in-out}.variant-input .input-control.target .use-url-popup.hidden{opacity:0;visibility:hidden;bottom:19px}.variant-input .input-control.target .use-url-popup li{height:34px;line-height:34px;display:block;font-size:14px;color:#fff;text-align:center;font-family:Avenir Next,Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:500;font-style:normal;transition:color .2s ease-out}.variant-input .input-control.target .use-url-popup li:hover{color:#1ce4c8}.variant-input .input-control.target .use-url-popup li:after{content:"";display:block;height:1px;background-color:#262324}.variant-input .input-control.target .use-url-popup li:last-child:after{display:none}.variant-input .input-control.target .use-url-popup .corner-wrapper{position:absolute;left:84px;width:16px;height:8px;bottom:-8px;margin-left:-8px;clip:rect(0,115px,107px,-99px)}.variant-input .input-control.target .use-url-popup .corner-wrapper .corner{position:absolute;width:11px;height:11px;left:2px;top:-6px;-webkit-transform:rotate(45deg);transform:rotate(45deg);box-shadow:0 0 0 4px rgba(0,0,0,.04),0 0 0 3px hsla(0,0%,100%,.28);background:hsla(0,0%,95%,.98);background-color:#363234;box-shadow:none;margin-left:0}.variant-input .input-control.target .use-url-popup .hover-zone{width:60px;height:15px;bottom:-15px;left:50%;margin-left:-30px;position:absolute}.variant-input .input-control.apply{background:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/panels/twitter/input-go.png) no-repeat 0 0}.variant-input .input-control.apply:hover{background:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/panels/twitter/input-go-hover.png) no-repeat 0 0}.variant-input .input-control.hidden{display:none}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2),only screen and (min-resolution:192dpi){.variant-input .input-control.clear{background:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/panels/twitter/input-delete@2x.png) no-repeat 0 0;background-size:18px 18px}.variant-input .input-control.clear:hover{background:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/panels/twitter/input-delete-hover@2x.png) no-repeat 0 0;background-size:18px 18px}.variant-input .input-control.target{background:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/panels/twitter/input-target@2x.png) no-repeat 0 0;background-size:18px 18px}.variant-input .input-control.target:hover{background:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/panels/twitter/input-target-hover@2x.png) no-repeat 0 0;background-size:18px 18px}.variant-input .input-control.apply{background:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/panels/twitter/input-go@2x.png) no-repeat 0 0;background-size:18px 18px}.variant-input .input-control.apply:hover{background:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/panels/twitter/input-go-hover@2x.png) no-repeat 0 0;background-size:18px 18px}}');
        !function() {
            "use strict";
            i.exports = {
                props: {
                    data: {
                        type: Object
                    }
                },
                data: function() {
                    return {
                        url: ""
                    };
                },
                ounted: function() {
                    this.url = this.updateUrl();
                },
                methods: {
                    updateUrl: function() {
                        return "page" === this.data.use_own_url ? "Using the page URL" : "mag" === this.data.use_own_url ? "Using the project URL" : this.data.url;
                    },
                    updateUrlData: function(t, e) {
                        this.data.url = t, this.data.use_own_url = e, this.url = this.updateUrl();
                    }
                }
            };
        }(), i.exports.__esModule && (i.exports = i.exports.default);
        var n = "function" == typeof i.exports ? i.exports.options : i.exports;
        n.render = function() {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {
                staticClass: "variant-input"
            }, [ i("input", {
                directives: [ {
                    name: "model",
                    rawName: "v-model",
                    value: t.url,
                    expression: "url"
                } ],
                staticClass: "input tweet-url",
                attrs: {
                    readonly: !!t.data.use_own_url,
                    placeholder: "URL"
                },
                domProps: {
                    value: t.url
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.url = e.target.value);
                    }
                }
            }), t._v(" "), t.data.use_own_url || t.data.url && t.data.url === t.url ? i("div", {
                staticClass: "input-control clear",
                on: {
                    click: function(e) {
                        e.stopPropagation(), t.updateUrlData("", "");
                    }
                }
            }) : t.data.use_own_url || t.data.url || t.url ? t.url !== t.data.url ? i("div", {
                staticClass: "input-control apply",
                on: {
                    click: function(e) {
                        e.stopPropagation(), t.updateUrlData(t.url, "");
                    }
                }
            }) : t._e() : i("div", {
                staticClass: "input-control target"
            }, [ i("div", {
                staticClass: "use-url-popup"
            }, [ i("ul", [ i("li", {
                on: {
                    click: function(e) {
                        e.stopPropagation(), t.updateUrlData("", "mag");
                    }
                }
            }, [ t._v("Using the project URL") ]), t._v(" "), i("li", {
                on: {
                    click: function(e) {
                        e.stopPropagation(), t.updateUrlData("", "page");
                    }
                }
            }, [ t._v("Using the page URL") ]) ]), t._v(" "), t._m(0, !1, !1), t._v(" "), i("div", {
                staticClass: "hover-zone"
            }) ]) ]) ]);
        }, n.staticRenderFns = [ function() {
            var t = this.$createElement, e = this._self._c || t;
            return e("div", {
                staticClass: "corner-wrapper"
            }, [ e("div", {
                staticClass: "corner"
            }) ]);
        } ];
    }
}), require.register({
    "common/video-search.vue": function(t, e, i) {
        e("vueify/lib/insert-css").insert(".video-panel-search{margin-bottom:12px}.video-panel-search .video-panel-icon{position:absolute;top:0;bottom:0;width:16px;height:16px;margin:auto;right:8px;cursor:pointer;background:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/widgetbar/background/search.svg) no-repeat 0 0;opacity:.4;background-size:16px 16px!important;transition:opacity .2s ease-out}.video-panel-search .video-panel-icon:hover{opacity:.6}.video-panel-search .video-panel-icon.is-upload{right:7px;width:18px;height:18px;background-image:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/controls/video_settings/social-upload.png);background-size:18px 18px!important}.video-panel-search .video-panel-icon.is-upload:hover{background-image:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/controls/video_settings/social-upload-hover.png)}.video-panel-search .video-panel-icon.is-remove{right:7px;width:18px;height:18px;background-image:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/controls/video_settings/delete.png);background-size:18px 18px!important}.video-panel-search .video-panel-icon.is-remove:hover{background-image:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/controls/video_settings/delete-hover.png)}.video-panel-search .video-panel-icon.hidden{display:none}.video-panel-input-wrapper{position:relative;width:100%;height:36px}.video-panel-input{width:100%;box-sizing:border-box;height:36px;padding:5px 9px;border:none;border-radius:8px;font:inherit;background:#fff;color:inherit;-moz-appearance:none}.video-panel-input::-webkit-input-placeholder{color:hsla(215,9%,63%,.5)}.video-panel-input:-moz-placeholder{color:hsla(215,9%,63%,.5)}.video-panel-input.has-icon{padding-right:30px}.video-panel-error{position:absolute;width:100%;height:100%;top:-1px;left:-1px;padding:1px;border-radius:8px;background:#f2f2f2;font-family:Avenir Next,Helvetica Neue,Helvetica,Arial,sans-serif;font-style:normal;font-weight:600;font-size:12px;color:#5d5d5d;letter-spacing:-.1px;display:flex;align-items:center;justify-content:center;text-align:center;cursor:pointer}.video-panel-social{margin-top:16px;font-size:0;text-align:center}.video-panel-social-icon{display:inline-block;width:32px;height:32px;margin:0 6px;cursor:pointer;transition:opacity .3s ease-in-out,background .15s ease-out}.video-panel-social-youtube{left:0;background:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/controls/video_settings/social-youtube.png) no-repeat 0 0;background-size:32px 32px!important}.video-panel-social-youtube:hover{background-image:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/controls/video_settings/social-youtube-hover.png)}.video-panel-social-vimeo{left:32px;background:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/controls/video_settings/social-vimeo.png) no-repeat 0 0;background-size:32px 32px!important}.video-panel-social-vimeo:hover{background-image:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/controls/video_settings/social-vimeo-hover.png)}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2),only screen and (min-resolution:192dpi){.video-panel-search .video-panel-input-wrapper .video-panel-icon.is-upload{background:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/controls/video_settings/social-upload@2x.png)}.video-panel-search .video-panel-input-wrapper .video-panel-icon.is-upload:hover{background:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/controls/video_settings/social-upload-hover@2x.png)}.video-panel-search .video-panel-input-wrapper .video-panel-icon.is-remove{background:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/controls/video_settings/delete@2x.png)}.video-panel-search .video-panel-input-wrapper .video-panel-icon.is-remove:hover{background:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/controls/video_settings/delete-hover@2x.png)}.video-panel-search .video-panel-social-youtube{background:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/controls/video_settings/social-youtube@2x.png)}.video-panel-search .video-panel-social-youtube:hover{background:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/controls/video_settings/social-youtube-hover@2x.png)}.video-panel-search .video-panel-social-vimeo{background:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/controls/video_settings/social-vimeo@2x.png)}.video-panel-search .video-panel-social-vimeo:hover{background:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/controls/video_settings/social-vimeo-hover@2x.png)}}");
        !function() {
            "use strict";
            i.exports = {
                model: {
                    event: "change:url",
                    prop: "url"
                },
                data: function() {
                    return {
                        isError: !1
                    };
                },
                computed: {
                    searchUrl: {
                        get: function() {
                            return this.url;
                        },
                        set: function(t) {
                            this.$emit("change:url", t);
                        }
                    },
                    showIcon: function() {
                        return Boolean(this.url);
                    },
                    isRemove: function() {
                        return this.isVideoProcessed || this.isError;
                    },
                    isUpload: function() {
                        return this.isURL(this.url) && !this.isVideoProcessed;
                    },
                    highlightInput: function() {
                        return this.highlightOnError && this.isError;
                    }
                },
                props: {
                    url: String,
                    highlightOnError: Boolean,
                    showSocial: !0,
                    isVideoProcessed: !1,
                    placeholder: {
                        type: String,
                        default: "Search, paste URL"
                    }
                },
                methods: {
                    onIconClick: function(t) {
                        this.isRemove ? (this.$emit("change:url", null), this.$emit("remove")) : this.processInputVideo();
                    },
                    onEnter: function() {
                        this.processInputVideo();
                    },
                    processInputVideo: function() {
                        this.url && (this.isURL(this.url) ? this.getVideoFromUrl(this.url) : RM.views.searchYouTube && RM.views.searchYouTube.show(this.url, {
                            choose: this.uploadVideoFromSearch
                        }));
                    },
                    parseStartTime: function(t) {
                        var e, i, n = 0;
                        return (e = RM.utils.queryUrlGetParam("t", t)) ? (i = e.match(/(\d+)(m?)(\d*)(s?)/), _.isEmpty(i) || !parseInt(i[1], 10) ? null : ("m" == i[2].toLowerCase() ? n += 60 * parseInt(i[1], 10) : n += parseInt(i[1], 10), 
                        parseInt(i[3], 10) && (n += parseInt(i[3], 10)), n)) : null;
                    },
                    getVideoFromUrl: function(t) {
                        var e, i, n, o;
                        if (i = /vimeo\.com\/.+/.test(t), !(e = !!this.parseYouTubeUrl(t)) && !i) return this.$emit("wrongUrl"), 
                        this.isError = !0, void (this.highlightremovalTimeout = setTimeout(function() {
                            this.isError = !1;
                        }.bind(this), 200));
                        o = this.parseStartTime(t);
                        var a = {
                            url: t = t.replace(/\/?#?$/, ""),
                            provider_name: e ? "YouTube" : "Vimeo"
                        };
                        o && (a.start_time = o), e ? (a.video_id = this.parseYouTubeUrl(t), n = "https://www.youtube.com/oembed?format=json&url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + a.video_id)) : n = "https://vimeo.com/api/oembed.json?url=" + encodeURIComponent(t), 
                        this.videoEmbedXHR && this.videoEmbedXHR.abort(), this.videoEmbedXHR = $.ajax({
                            type: "GET",
                            url: "/api/proxy/",
                            dataType: "json",
                            data: {
                                url: n
                            },
                            success: _.bind(function(t) {
                                t.url = t.url && t.url.toHttps(), t.thumbnail_url = t.thumbnail_url && t.thumbnail_url.toHttps(), this.url = t.url ? t.url : this.url, 
                                this.$emit("loaded", _.extend(t, a));
                            }, this),
                            error: _.bind(function(t, e, i) {
                                "abort" != e && this.$emit("error", t, e, i);
                            }, this),
                            global: !1
                        }), this.$emit("dataObtained", a);
                    },
                    isURL: function(t) {
                        return /^http(s?)\:\/\//i.test(t);
                    },
                    parseYouTubeUrl: function(t) {
                        var e = t.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/);
                        if (e && 11 == e[2].length) return e[2];
                        return !(!(e = t.match(/.*(youtu.*\&v=)([^#\&\?]*).*/)) || 11 != e[2].length) && e[2];
                    },
                    onYoutubeClick: function() {
                        RM.views.searchYouTube && RM.views.searchYouTube.show("", {
                            choose: this.uploadVideoFromSearch
                        });
                    },
                    onVimeoClick: function() {
                        RM.views.searchVimeo && RM.views.searchVimeo.show("", {
                            choose: this.uploadVideoFromSearch
                        });
                    },
                    uploadVideoFromSearch: function(t) {
                        this.getVideoFromUrl(t);
                    }
                }
            };
        }(), i.exports.__esModule && (i.exports = i.exports.default);
        var n = "function" == typeof i.exports ? i.exports.options : i.exports;
        n.render = function() {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {
                staticClass: "video-panel-search"
            }, [ i("div", {
                staticClass: "video-panel-input-wrapper"
            }, [ i("input", {
                directives: [ {
                    name: "model",
                    rawName: "v-model",
                    value: t.searchUrl,
                    expression: "searchUrl"
                } ],
                class: {
                    "video-panel-input": !0,
                    "has-icon": t.showIcon
                },
                attrs: {
                    type: "text",
                    spellcheck: "false",
                    placeholder: t.placeholder
                },
                domProps: {
                    value: t.searchUrl
                },
                on: {
                    keyup: function(e) {
                        if (!("button" in e) && t._k(e.keyCode, "enter", 13, e.key)) return null;
                        t.onEnter(e);
                    },
                    input: function(e) {
                        e.target.composing || (t.searchUrl = e.target.value);
                    }
                }
            }), t._v(" "), t.showIcon ? i("div", {
                staticClass: "video-panel-icon input-icon",
                class: {
                    "is-remove": t.isRemove,
                    "is-upload": t.isUpload
                },
                on: {
                    click: t.onIconClick
                }
            }) : t._e(), t._v(" "), i("transition", {
                attrs: {
                    name: "fade"
                }
            }, [ t.highlightInput ? i("div", {
                staticClass: "video-panel-error"
            }) : t._e() ]) ], 1), t._v(" "), i("transition", {
                attrs: {
                    name: "fade"
                }
            }, [ t.showSocial ? i("div", {
                staticClass: "video-panel-social"
            }, [ i("div", {
                staticClass: "video-panel-social-icon video-panel-social-youtube",
                attrs: {
                    title: "Youtube"
                },
                on: {
                    click: t.onYoutubeClick
                }
            }), t._v(" "), i("div", {
                staticClass: "video-panel-social-icon video-panel-social-vimeo",
                attrs: {
                    title: "Vimeo"
                },
                on: {
                    click: t.onVimeoClick
                }
            }) ]) : t._e() ]) ], 1);
        }, n.staticRenderFns = [];
    }
}), require.register({
    "homepage/explore.vue": function(t, e, i) {
        e("vueify/lib/insert-css").insert(".explore-wrapper{background-color:#232122;user-select:none}.explore-wrapper .new-card-panel{padding:45px;text-align:center}.explore-wrapper .new-card-panel span{color:#fff;cursor:pointer}.explore-wrapper.is-admin{border-radius:8px;overflow:hidden}.explore-wrapper .featured-block{max-width:977px;margin:0 auto}@media (max-width:977px){.explore-wrapper .featured-block{max-width:100%}.explore-wrapper .featured-block .tag-list-wrapper{overflow:hidden;height:41px;margin-bottom:41px}}");
        !function() {
            "use strict";
            i.exports = {
                components: {
                    "tag-list": e("homepage/explore/tag-list.vue"),
                    "card-grid": e("homepage/explore/card-grid.vue")
                },
                props: [ "tagList", "cardsList", "model", "host" ],
                mounted: function() {
                    var t = this;
                    if (this.isAdmin) this.tagListData = RA.collections.featuredTag.toJSON(), RA.collections.featuredTag.on("change add remove", function() {
                        t.tagListData = RA.collections.featuredTag.toJSON();
                    }), this.cardListData = RA.collections.featured.toJSON(), RA.collections.featured.on("change add remove", function() {
                        t.cardListData = RA.collections.featured.toJSON();
                    }); else if (this.tagListData = this.tagList, this.cardListData = this.cardsList, window.location.hash) {
                        var e = _.reduce(this.tagListData, function(t, e) {
                            return t[e.title.toLowerCase().replace(/[^a-z0-9]/g, "")] = e, t;
                        }, {});
                        this.filter = _.chain((window.location.hash || "").split("#")).map(function(t) {
                            return t.toLowerCase().replace(/[^a-z0-9]/g, "");
                        }).filter(function(t) {
                            return t && t in e;
                        }).map(function(t) {
                            return e[t].tag;
                        }).value();
                    }
                },
                methods: {
                    addProject: function() {
                        this.$refs.grid.addProjectCard();
                    },
                    addCard: function() {
                        this.$refs.grid.onAddCard();
                    }
                },
                data: function() {
                    return {
                        tagListData: [],
                        cardListData: [],
                        isAdmin: !!window.RA,
                        filter: []
                    };
                }
            };
        }(), i.exports.__esModule && (i.exports = i.exports.default);
        var n = "function" == typeof i.exports ? i.exports.options : i.exports;
        n.render = function() {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {
                staticClass: "explore-wrapper page-section unloaded",
                class: {
                    "is-admin": t.isAdmin
                }
            }, [ i("div", {
                staticClass: "featured-block content-block"
            }, [ t.isAdmin ? t._e() : i("div", {
                staticClass: "caption"
            }, [ t._v("Explore") ]), t._v(" "), t.isAdmin ? t._e() : i("div", {
                staticClass: "sub-caption"
            }, [ t._v("Best projects made with Readymag,  Interviews, Tips and Tutorials") ]), t._v(" "), t.isAdmin ? i("div", {
                staticClass: "new-card-panel"
            }, [ t._v("\n\t\t\tAdd "), i("span", {
                on: {
                    click: t.addProject
                }
            }, [ t._v("Project URL") ]), t._v(" or "), i("span", {
                on: {
                    click: t.addCard
                }
            }, [ t._v("Project Card") ]) ]) : t._e(), t._v(" "), i("div", {
                staticClass: "tag-list-wrapper"
            }, [ i("tag-list", {
                ref: "tagList",
                attrs: {
                    tagList: t.tagListData,
                    model: t.model,
                    startFilter: t.filter
                },
                on: {
                    onFilterChange: function(e) {
                        t.filter = e;
                    }
                }
            }) ], 1), t._v(" "), i("card-grid", {
                ref: "grid",
                attrs: {
                    tagList: t.tagListData,
                    cardsList: t.cardListData,
                    model: t.model,
                    filter: t.filter
                },
                on: {
                    onCardFilter: function(e) {
                        t.$refs.tagList.setFilter(e);
                    }
                }
            }) ], 1), t._v(" "), t.isAdmin ? t._e() : i("div", {
                staticClass: "join-block content-block show-if-not-logged "
            }, [ i("div", {
                staticClass: "top-line"
            }), t._v(" "), i("div", {
                staticClass: "big-text"
            }, [ t._v("Try Readymag now.") ]), t._v(" "), i("div", {
                staticClass: "small-text"
            }, [ t._v("Create unlimited projects for free.") ]), t._v(" "), i("div", {
                staticClass: "join-block-wrapper"
            }, [ i("iframe", {
                attrs: {
                    src: "//" + t.host + "/specials/landing_signup.html",
                    width: "100%",
                    height: "100%"
                }
            }) ]) ]), t._v(" "), i("div", {
                staticClass: "join-stub show-if-logged "
            }), t._v(" "), t._m(0, !1, !1) ]);
        }, n.staticRenderFns = [ function() {
            var t = this.$createElement, e = this._self._c || t;
            return e("div", {
                staticClass: "bottom-block content-block"
            }, [ e("div", {
                staticClass: "bottom-line"
            }) ]);
        } ];
    }
}), require.register({
    "homepage/explore/card-grid.vue": function(t, e, i) {
        e("vueify/lib/insert-css").insert(".explore-card-grid{position:relative}.explore-card-grid .fake-card-05x{width:136px}.explore-card-grid .card-bound{width:304px}.explore-card-grid .new-card-btn{position:absolute;top:-40px;left:0}.explore-card-grid .card-grid{display:-ms-flexbox;display:-ms-flex;display:flex;width:100%;flex-wrap:wrap;-ms-justify-content:space-between;justify-content:space-between;position:relative}.explore-card-grid .card-grid .card-row{display:flex;width:977px;justify-content:space-between}.explore-card-grid .card-grid .new-card{position:fixed;top:0;left:0;right:0;bottom:0;z-index:10000;background:rgba(0,0,0,.9);display:flex;flex-direction:column;justify-content:center;align-items:center}.explore-card-grid .card-grid .new-card .explore-card{margin-bottom:0!important;border-radius:0;border-top-left-radius:8px;border-top-right-radius:8px}.explore-card-grid .card-grid .new-card .double-cards{display:flex;flex-direction:row;width:304px;justify-content:space-between}.explore-card-grid .card-grid .new-card .double-cards.expanded-05x{width:977px}.explore-card-grid .card-grid .new-card .controlBlock{justify-content:center;display:flex}.explore-card-grid .card-grid .new-card .controlBlock.for-card-1x,.explore-card-grid .card-grid .new-card .controlBlock.for-card-1x-4x,.explore-card-grid .card-grid .new-card .controlBlock.for-card-05x{width:304px}.explore-card-grid .card-grid .new-card .controlBlock.for-card-3x{width:977px}.explore-card-grid .card-grid .new-card .controlBlock.sep{border-bottom:1px solid #000}.explore-card-grid .card-grid .new-card .controlBlock.cards-expand{justify-content:space-between;width:304px}.explore-card-grid .card-grid .new-card .controlBlock.cards-expand div{border-left:none;flex:0 0 136px}.explore-card-grid .card-grid .new-card .controlBlock.cards-collapse{width:977px}.explore-card-grid .card-grid .new-card .controlBlock input{width:100%;padding:20px 10px;background:#6e6e6e;color:hsla(0,0%,100%,.4);border:none;text-align:center}.explore-card-grid .card-grid .new-card .controlBlock input::placeholder{color:hsla(0,0%,100%,.4)}.explore-card-grid .card-grid .new-card .controlBlock.size-chooser{margin-bottom:20px}.explore-card-grid .card-grid .new-card .controlBlock.size-chooser div{color:#000;line-height:20px;padding:20px 0;flex:0 0 60px;font-size:20px}.explore-card-grid .card-grid .new-card .controlBlock.size-chooser div.x4{background-image:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/homepage/4x-bg.svg);background-repeat:no-repeat;background-position:43px 32px}.explore-card-grid .card-grid .new-card .controlBlock.size-chooser div:first-of-type{border-bottom-left-radius:8px;border-top-left-radius:8px;border-left:none}.explore-card-grid .card-grid .new-card .controlBlock.size-chooser div:last-of-type{border-bottom-right-radius:8px;border-top-right-radius:8px}.explore-card-grid .card-grid .new-card .controlBlock div{background:#6e6e6e;color:#fff;cursor:pointer;line-height:20px;padding:20px 10px;border-left:1px solid #000;white-space:nowrap;flex:1 1 0;text-align:center}.explore-card-grid .card-grid .new-card .controlBlock div:hover{background:#9e9e9e}.explore-card-grid .card-grid .new-card .controlBlock div:first-of-type:not(.expand-edit-cards){border-bottom-left-radius:8px;border-left:none}.explore-card-grid .card-grid .new-card .controlBlock div:last-of-type:not(.expand-edit-cards){border-bottom-right-radius:8px}.explore-card-grid .card-grid .new-card .controlBlock div.active{background:#fff;color:#000}.expand-enter-active,.expand-leave-active{transition:left .5s,right .5s}.expand-enter-to{left:0!important;right:0!important}@media (max-width:977px){.explore-card-grid{width:304px;margin:0 auto}.explore-card-grid .card-grid .card-row{flex-wrap:wrap;width:304px}}");
        !function() {
            "use strict";
            var t = e("homepage/explore/card.vue");
            i.exports = {
                components: {
                    card: t
                },
                props: [ "cardsList", "tagList", "filter" ],
                data: function() {
                    return {
                        isAdmin: !!window.RA,
                        newCard: !1,
                        editCard: !1,
                        editCardData: {},
                        expandedCard: {},
                        expandedTop: 0,
                        showExpanded: !1,
                        animationDone: !1,
                        doubleCards: [],
                        expandedCardidx: -1,
                        doubleCard: !1,
                        expandedOffset: {},
                        pairs: {},
                        firstInPair: [],
                        lastLineBound: 0
                    };
                },
                methods: {
                    onCardFilter: function(t) {
                        $(window.document.documentElement).animate({
                            scrollTop: 0
                        }), this.$emit("onCardFilter", t);
                    },
                    onExpandCard: function(t, e) {
                        this.expandedCard = _.clone(t), this.expandedOffset = e, this.expandedTop = e.top - $(this.$el).offset().top, 
                        this.showExpanded = !0, this.animationDone = !1;
                    },
                    onEditCard: function(t) {
                        this.editCard = !0, this.editCardData = t, "05x" == t.size && this.pairs[t.id] ? (this.doubleCard = !0, 
                        this.expandedCardidx = -1, -1 == this.firstInPair.indexOf(t.id) ? this.doubleCards = [ this.pairs[t.id], t ] : this.doubleCards = [ t, this.pairs[t.id] ]) : this.doubleCard = !1;
                    },
                    onClose: function(t) {
                        t.target == this.$refs.newCardCont && (this.newCard = !1, this.editCard = !1);
                    },
                    onChangeSize: function(t) {
                        if (this.editCardData.size != t) if (this.editCardData.size = t, "05x" == t) {
                            this.doubleCard = !0, this.expandedCardidx = -1;
                            JSON.parse(window.JSON.stringify(this.editCardData));
                            this.doubleCards = [ this.editCardData, JSON.parse(window.JSON.stringify(this.editCardData)) ], this.doubleCards[1].id = +new Date();
                        } else this.doubleCard = !1, this.editCardData.size = t;
                    },
                    saveCard: function() {
                        var t = this.$refs.editingCard;
                        t instanceof Array || (t = [ t ]), _.each(t, function(t) {
                            t.applyCard();
                        }), this.newCard = this.editCard = !1;
                    },
                    onAddCard: function() {
                        this.newCard = !0, this.expandedCardidx = -1, this.doubleCard = !1, this.editCardData = {
                            size: "1x",
                            id: +new Date(),
                            images: {},
                            title: "Card Title",
                            description: "Card description",
                            credits: "by Readymag team",
                            date: "",
                            actionUrls: [],
                            tags: []
                        };
                    },
                    addProjectCard: function() {
                        var t = prompt("Project Url") || "";
                        t && $.ajax({
                            type: "POST",
                            url: "/api/featured/loadMag",
                            data: {
                                url: t.replace(/^http(s?):\/\//, "")
                            },
                            success: function(e) {
                                var i = {
                                    size: "1x",
                                    id: +new Date(),
                                    images: e.images,
                                    projectUrl: t.replace(/^http(s?):\/\//, ""),
                                    cardLink: t,
                                    title: e.mag.title || "Untitled",
                                    description: e.mag.description,
                                    credits: "by " + e.mag.user.name,
                                    date: new Date(e.mag.published),
                                    tags: [],
                                    magid: e.mag.num_id,
                                    magUser: e.mag.user.num_id
                                };
                                RA.collections.featured.addCard(i, function() {});
                            },
                            error: function(t) {
                                console.log(arguments);
                            },
                            context: this
                        });
                    },
                    beforeEnterExpand: function(t) {
                        var e = this.expandedOffset.left - $(this.$el).offset().left, i = $(this.$el).width() - e - 304;
                        i < 0 && (e += i, i = 0), t.style.left = e + "px", t.style.right = i + "px";
                    },
                    enterExpand: function(t, e) {
                        $(t).animate({
                            left: 0,
                            right: 0
                        }, 150, "swing", e);
                    },
                    leaveExpand: function(t, e) {
                        var i = this.expandedOffset.left - $(this.$el).offset().left, n = $(this.$el).width() - i - 304;
                        n < 0 && (i += n, n = 0), $(t).animate({
                            left: i,
                            right: n
                        }, 150, "swing", e);
                    },
                    onExpandClick: function(t) {
                        this.expandedCardidx = t;
                    },
                    beforeLeaveExpand: function() {
                        this.animationDone = !1;
                    },
                    afterEnterExpand: function(t) {
                        t.style.left = "0px", t.style.right = "0px", this.animationDone = !0;
                    }
                },
                computed: {
                    expanded05x: function() {
                        return -1 != this.expandedCardidx;
                    },
                    tagsIndex: function() {
                        var t = {};
                        return _.each(this.tagList, function(e) {
                            t[e.tag] = e;
                        }), t;
                    },
                    rows: function() {
                        var t = 0;
                        return _.reduce(this.sortedCards, function(e, i) {
                            return t < 3 ? e[e.length - 1].push(i) : (e.push([ i ]), t = 0), t += {
                                "05x": .5,
                                "1x": 1,
                                "1x-4x": 1,
                                "3x": 3
                            }[i.size], e;
                        }, [ [] ]);
                    },
                    sortedCards: function() {
                        var t = this;
                        this.firstInPair = [];
                        var e = [], i = _.reduce(this.cardsList, function(e, i) {
                            return (!t.filter.length || i.tags && -1 != t.filter.indexOf(i.tags[0])) && ("1x-4x" == i.size ? e["1x"].push(i) : e[i.size].push(i)), 
                            e;
                        }, {
                            "1x": [],
                            "3x": [],
                            "05x": [],
                            "1x-4x": []
                        }), n = 0, o = 0;
                        return _.each(this.cardsList, function(a, r) {
                            if ((!t.filter.length || a.tags && -1 != t.filter.indexOf(a.tags[0])) && -1 == e.indexOf(a)) {
                                var s = [ a ];
                                if ("05x" == a.size) {
                                    var l = function(t) {
                                        for (var n = i[t.size].indexOf(t) + 1; n < i[t.size].length && -1 != e.indexOf(i[t.size][n]); ) n++;
                                        return i[t.size][n] || null;
                                    }(a);
                                    l ? (s.push(l), t.firstInPair.push(a.id), t.pairs[a.id] = l, t.pairs[l.id] = a) : s.push({
                                        fakeCard: "05x",
                                        size: "05x"
                                    });
                                }
                                "3x" == a.size ? n ? e.splice(o, 0, a) : e.push(a) : (e = e.concat(s), 3 == ++n && (n = 0, o = e.length));
                            }
                        }), this.lastLineBound = (3 - n) % 3, e;
                    }
                }
            };
        }(), i.exports.__esModule && (i.exports = i.exports.default);
        var n = "function" == typeof i.exports ? i.exports.options : i.exports;
        n.render = function() {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {
                staticClass: "explore-card-grid"
            }, [ i("div", {
                staticClass: "card-grid"
            }, [ t.isAdmin ? t._l(t.sortedCards, function(e) {
                return [ e.fakeCard ? i("div", {
                    staticClass: "fake-card",
                    class: "fake-card-" + e.fakeCard
                }) : i("card", {
                    key: e.id,
                    attrs: {
                        tagsIndex: t.tagsIndex,
                        pairs: t.pairs,
                        card: e
                    },
                    on: {
                        expandCard: t.onExpandCard,
                        editCard: t.onEditCard,
                        onCardFilter: t.onCardFilter
                    }
                }) ];
            }) : t._l(t.rows, function(e, n) {
                return i("div", {
                    staticClass: "card-row"
                }, [ t._l(e, function(e) {
                    return [ e.fakeCard ? i("div", {
                        staticClass: "fake-card",
                        class: "fake-card-" + e.fakeCard
                    }) : i("card", {
                        key: e.id,
                        attrs: {
                            tagsIndex: t.tagsIndex,
                            pairs: t.pairs,
                            card: e
                        },
                        on: {
                            expandCard: t.onExpandCard,
                            editCard: t.onEditCard,
                            onCardFilter: t.onCardFilter
                        }
                    }) ];
                }), t._v(" "), t._l(t.lastLineBound, function(e) {
                    return t.rows.length - 1 == n ? i("div", {
                        staticClass: "card-bound"
                    }) : t._e();
                }) ], 2);
            }), t._v(" "), t.newCard || t.editCard ? i("div", {
                ref: "newCardCont",
                staticClass: "new-card",
                on: {
                    click: t.onClose
                }
            }, [ t.newCard ? i("div", {
                staticClass: "controlBlock edit-state size-chooser"
            }, t._l({
                "05x": "½x",
                "1x": "1x",
                "1x-4x": "1x",
                "3x": "3x"
            }, function(e, n) {
                return i("div", {
                    class: {
                        active: n == t.editCardData.size,
                        x4: "1x-4x" == n
                    },
                    on: {
                        click: function(e) {
                            t.onChangeSize(n);
                        }
                    }
                }, [ t._v(t._s(e)) ]);
            })) : t._e(), t._v(" "), t.doubleCard ? i("div", {
                staticClass: "double-cards",
                class: {
                    "expanded-05x": t.expanded05x
                }
            }, t._l(t.doubleCards, function(e, n) {
                return i("card", {
                    directives: [ {
                        name: "show",
                        rawName: "v-show",
                        value: -1 == t.expandedCardidx || t.expandedCardidx == n,
                        expression: "expandedCardidx == -1 || expandedCardidx == idx"
                    } ],
                    key: n,
                    ref: "editingCard",
                    refInFor: !0,
                    attrs: {
                        card: e,
                        tagsIndex: t.tagsIndex,
                        expandedCard: t.expandedCardidx == n,
                        newCard: t.newCard,
                        editCard: t.editCard
                    }
                });
            })) : i("card", {
                key: "new",
                ref: "editingCard",
                class: [ "for-card-" + t.editCardData.size ],
                attrs: {
                    tagsIndex: t.tagsIndex,
                    card: t.editCardData,
                    newCard: t.newCard,
                    editCard: t.editCard
                }
            }), t._v(" "), t.doubleCard ? i("div", {
                directives: [ {
                    name: "show",
                    rawName: "v-show",
                    value: !t.expanded05x,
                    expression: "!expanded05x"
                } ],
                staticClass: "controlBlock cards-expand edit-state sep"
            }, t._l(t.doubleCards, function(e, n) {
                return i("div", {
                    staticClass: "expand-edit-cards",
                    on: {
                        click: function(e) {
                            t.onExpandClick(n);
                        }
                    }
                }, [ t._v("Expand") ]);
            })) : t._e(), t._v(" "), t.doubleCard ? i("div", {
                directives: [ {
                    name: "show",
                    rawName: "v-show",
                    value: t.expanded05x,
                    expression: "expanded05x"
                } ],
                staticClass: "controlBlock cards-collapse edit-state sep"
            }, [ i("div", {
                staticClass: "collapse-edit-cards",
                on: {
                    click: function(e) {
                        t.expandedCardidx = -1;
                    }
                }
            }, [ t._v("Collapse") ]) ]) : t._e(), t._v(" "), t.doubleCard ? t._e() : i("div", {
                staticClass: "controlBlock edit-state sep",
                class: [ "for-card-" + t.editCardData.size ]
            }, [ i("input", {
                directives: [ {
                    name: "model",
                    rawName: "v-model",
                    value: t.editCardData.cardLink,
                    expression: "editCardData.cardLink"
                } ],
                attrs: {
                    type: "text",
                    placeholder: "Paste URL to Project"
                },
                domProps: {
                    value: t.editCardData.cardLink
                },
                on: {
                    input: function(e) {
                        e.target.composing || t.$set(t.editCardData, "cardLink", e.target.value);
                    }
                }
            }) ]), t._v(" "), i("div", {
                staticClass: "controlBlock edit-state",
                class: [ "for-card-" + t.editCardData.size ]
            }, [ i("div", {
                on: {
                    click: function(e) {
                        e.stopPropagation(), t.saveCard(e);
                    }
                }
            }, [ t._v(t._s(t.newCard ? "Add card" : "Save card")) ]) ]) ], 1) : t._e(), t._v(" "), i("transition", {
                attrs: {
                    name: "expand",
                    css: !1
                },
                on: {
                    "before-enter": t.beforeEnterExpand,
                    "after-enter": t.afterEnterExpand,
                    enter: t.enterExpand,
                    leave: t.leaveExpand
                }
            }, [ t.showExpanded ? i("card", {
                attrs: {
                    animated: t.animationDone,
                    tagsIndex: t.tagsIndex,
                    card: t.expandedCard,
                    expandedCard: t.showExpanded,
                    topOffset: t.expandedTop
                },
                on: {
                    collapseCard: function(e) {
                        t.animationDone = t.showExpanded = !1;
                    }
                }
            }) : t._e() ], 1) ], 2) ]);
        }, n.staticRenderFns = [];
    }
}), require.register({
    "homepage/explore/card.vue": function(t, e, i) {
        e("vueify/lib/insert-css").insert('.explore-card{position:relative;border-radius:8px;display:-ms-flexbox;display:-ms-flex;display:flex;-ms-flex-direction:column;flex-direction:column;margin-bottom:32px;line-height:12px;overflow:hidden}.explore-card .title-link-wrapper{text-decoration:none}.explore-card .title-link-wrapper:not([href]) .card-title{color:#000!important}.explore-card .admin-control{display:none;flex-direction:row;justify-content:center;left:10px;position:absolute;top:10px}.explore-card .admin-control div{background:#3d3d3d;color:#fff;border:1px solid #9e9e9e;width:40px;height:40px;line-height:40px;text-align:center;border-radius:20px;cursor:pointer}.explore-card .admin-control div:hover{background:#9e9e9e}.explore-card:hover .admin-control{display:flex}.explore-card .card-collapse{position:absolute;top:9px;right:9px;width:56px;height:56px;background-size:56px 56px;background-image:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/homepage/explore/collapse.png);cursor:pointer}.explore-card .card-collapse:hover{opacity:.6}.explore-card.expanded-card{position:absolute}.explore-card:hover .controlBlock{display:flex}.explore-card .controlBlock{position:absolute;top:-40px;height:40px;justify-content:center;left:0;right:0;display:none}.explore-card .controlBlock.edit-state{display:flex}.explore-card .controlBlock.bottom-controls{bottom:-40px;top:auto}.explore-card .controlBlock div{background:#6e6e6e;color:#fff;cursor:pointer;line-height:20px;padding:10px;border-left:1px solid #000;white-space:nowrap;flex:1 1 0;text-align:center}.explore-card .controlBlock div:hover{background:#9e9e9e}.explore-card .controlBlock div:first-of-type{border-bottom-left-radius:8px;border-top-left-radius:8px;border-left:none}.explore-card .controlBlock div:last-of-type{border-bottom-right-radius:8px;border-top-right-radius:8px}.explore-card .controlBlock div.active{background:#fff;color:#000}.explore-card.is-admin .card-picture{background:#fff}.explore-card .card-picture{position:relative}.explore-card .card-picture .loader-place-holder{position:absolute;top:0;left:0;right:0;bottom:0;z-index:10000}.explore-card .card-picture .loader-place-holder:after{content:" ";display:block;position:absolute;left:55px;top:46px;width:192px;height:77px;background:hsla(0,0%,100%,.8);border-radius:36px;z-index:-1}.explore-card .card-picture .loader-place-holder:before{content:"Upload Image";font-size:20px;display:block;padding:53px 0 0;text-align:center;line-height:27px;color:rgba(0,0,0,.4)}.explore-card .card-picture .loader-place-holder input[type=file]{display:none}.explore-card .card-picture .loader-place-holder input{width:100%;padding:10px;background:#6e6e6e;color:rgba(0,0,0,.4);background:transparent;font-size:20px;border:none;text-align:center}.explore-card .card-picture .loader-place-holder input::placeholder{color:rgba(0,0,0,.4)}.explore-card .card-info{display:-ms-flexbox;display:-ms-flex;display:flex;-ms-flex-direction:column;flex-direction:column;background:#fff}.explore-card .card-title{font-family:Avenir Next,Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:500;font-style:normal;font-size:20px;letter-spacing:-.2px;text-align:left;padding:0 33px;line-height:24px;overflow:hidden;text-overflow:ellipsis;max-height:48px}.explore-card .card-title:not(:hover){color:#000!important}.explore-card .card-credits{font-family:Avenir Next,Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:400;font-style:normal;font-size:12px;letter-spacing:.1px;color:#000;text-align:left;opacity:.6;bottom:21px;left:34px;position:absolute}.explore-card.explore-card-1x{width:304px;height:344px}.explore-card.explore-card-1x .card-picture{width:304px;height:199px;background-size:304px 200px;border-bottom:1px solid #e0e0e0}.explore-card.explore-card-1x .card-info{height:144px}.explore-card.explore-card-1x-4x{width:304px;height:344px}.explore-card.explore-card-1x-4x .picture-wrapper{display:-ms-flexbox;display:-ms-flex;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-justify-content:space-between;justify-content:space-between;background:#232122}.explore-card.explore-card-1x-4x .card-info{height:144px}.explore-card.explore-card-1x-4x .card-picture{width:150px;height:98px;background-size:150px 98px;overflow:hidden}.explore-card.explore-card-1x-4x .card-picture:first-of-type{border-radius:8px 0 8px 0;margin-bottom:4px}.explore-card.explore-card-1x-4x .card-picture:nth-of-type(2){border-radius:0 8px 0 8px;margin-bottom:4px}.explore-card.explore-card-1x-4x .card-picture:nth-of-type(3){border-radius:0 8px 0 0}.explore-card.explore-card-1x-4x .card-picture:nth-of-type(4){border-radius:8px 0 0 0}.explore-card.explore-card-1x-4x .card-picture .loader-place-holder:before{padding:33px 5px 5px;content:"Upload Image";font-size:12px}.explore-card.explore-card-1x-4x .card-picture .loader-place-holder.not-loaded{background:#6e6e6e}.explore-card.explore-card-1x-4x .card-picture .loader-place-holder.not-loaded:before{color:hsla(0,0%,100%,.5)}.explore-card.explore-card-1x-4x .card-picture .loader-place-holder.not-loaded:after{display:none}.explore-card.explore-card-1x-4x .card-picture .loader-place-holder:not(.not-loaded):after{left:10px;top:29px;width:129px;height:37px}.explore-card.explore-card-05xexp.expanded-card{width:auto;height:344px;background:#fff;-ms-flex-direction:row;flex-direction:row;-ms-justify-content:flex-end;justify-content:flex-end;overflow:hidden}.explore-card.explore-card-05xexp.expanded-card .link-wrapper{-ms-flex:1 1 0;flex:1 1 0;display:-ms-flexbox;display:-ms-flex;display:flex}.explore-card.explore-card-05xexp.expanded-card.is-admin{width:977px;position:relative;overflow:visible}.explore-card.explore-card-05xexp.expanded-card.is-admin .card-info{overflow:visible}.explore-card.explore-card-05xexp.expanded-card .card-video{width:672px;height:344px;background-size:672px 344px}.explore-card.explore-card-05xexp.expanded-card .card-picture{-ms-flex:1 1 0;flex:1 1 0;background-size:672px 344px;background-position:50% 50%;border-right:1px solid #e0e0e0}.explore-card.explore-card-05xexp.expanded-card .card-picture .loader-place-holder:before{padding:77px 53px 0}.explore-card.explore-card-05xexp.expanded-card .card-picture .loader-place-holder:after{left:238px;top:67px;width:194px;height:90px;border-radius:45px}.explore-card.explore-card-05xexp.expanded-card .card-info{position:relative;-ms-flex:1 1 304px;flex:1 1 304px;overflow:hidden;max-width:304px}.explore-card.explore-card-05xexp.expanded-card .card-info .tag-list{margin-top:200px}.explore-card.explore-card-05xexp.expanded-card .card-info .card-description{font-size:12px;letter-spacing:.1px;font-family:Avenir Next,Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:400;font-style:normal;opacity:.6;position:absolute;bottom:19px;left:33px;text-align:left;width:235px;line-height:16px;max-height:66px;overflow:hidden}.explore-card.explore-card-3x:not(.expanded-card){-ms-flex-direction:row;flex-direction:row;width:977px;height:441px}.explore-card.explore-card-3x:not(.expanded-card) .card-picture{width:672px;height:441px;background-size:672px 441px;border-right:1px solid #e0e0e0}.explore-card.explore-card-3x:not(.expanded-card) .card-picture .loader-place-holder:before{padding:100px 100px 0}.explore-card.explore-card-3x:not(.expanded-card) .card-picture .loader-place-holder:after{left:238px;top:86px;width:194px;height:90px;border-radius:45px}.explore-card.explore-card-3x:not(.expanded-card) .card-video{width:672px;height:441px}.explore-card.explore-card-3x:not(.expanded-card) .card-info{position:relative;width:304px}.explore-card.explore-card-3x:not(.expanded-card) .card-info .card-description{font-family:Avenir Next,Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:400;font-style:normal;text-align:left;line-height:18px;font-size:12px;letter-spacing:.1px;opacity:.4;color:#000;position:absolute;bottom:58px;left:34px;width:238px;max-height:252px;overflow:hidden}.explore-card.explore-card-3x:not(.expanded-card) .card-info .card-date{font-family:Avenir Next,Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:400;font-style:normal;text-align:right;font-size:12px;letter-spacing:.1px;opacity:.4}.explore-card.explore-card-3x:not(.expanded-card) .card-info .card-credits-line{bottom:21px;left:34px;right:27px;position:absolute;display:-ms-flexbox;display:-ms-flex;display:flex;-ms-justify-content:space-between;justify-content:space-between}.explore-card.explore-card-3x:not(.expanded-card) .card-info .card-credits-line .card-credits{position:static;opacity:.4}.explore-card.explore-card-05x{width:136px;height:344px;cursor:pointer}.explore-card.explore-card-05x .card-picture{width:136px;height:199px;border-bottom:1px solid #e0e0e0;background-size:136px 199px}.explore-card.explore-card-05x .card-picture .loader-place-holder:before{padding:28px 28px 0}.explore-card.explore-card-05x .card-picture .loader-place-holder:after{left:5px;top:23px;width:125px;height:109px}.explore-card.explore-card-05x .card-info{height:144px}.explore-card.explore-card-05x .card-description{font-size:12px;letter-spacing:.1px;font-family:Avenir Next,Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:400;font-style:normal;opacity:.6;position:absolute;bottom:17px;left:33px;text-align:left;width:90px;line-height:16px;max-height:66px;overflow:hidden}@media only screen and (-webkit-min-device-pixel-ratio:2),only screen and (min-device-pixel-ratio:2),only screen and (min-resolution:192dpi){.explore-card .card-collapse{background-image:url(//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/homepage/explore/collapse@2x.png)}}@media (max-width:977px){.explore-card{margin-bottom:8px}.explore-card.explore-card-3x.expanded-card,.explore-card.explore-card-3x:not(.expanded-card){width:304px;height:344px;-ms-flex-direction:column;flex-direction:column}.explore-card.explore-card-3x.expanded-card .link-wrapper,.explore-card.explore-card-3x:not(.expanded-card) .link-wrapper{flex:0 0 200px}.explore-card.explore-card-3x.expanded-card .card-picture,.explore-card.explore-card-3x:not(.expanded-card) .card-picture{width:304px;height:199px;background-size:304px 200px;border-bottom:1px solid #e0e0e0}.explore-card.explore-card-3x.expanded-card .card-info,.explore-card.explore-card-3x:not(.expanded-card) .card-info{display:-ms-flexbox;display:-ms-flex;display:flex;-ms-flex-direction:column;flex-direction:column;position:static;width:304px;max-width:304px;height:144px}.explore-card.explore-card-3x.expanded-card .card-info .tag-list,.explore-card.explore-card-3x:not(.expanded-card) .card-info .tag-list{margin-top:-1px}.explore-card.explore-card-3x.expanded-card .card-credits-line,.explore-card.explore-card-3x:not(.expanded-card) .card-credits-line{bottom:21px;left:34px}.explore-card.explore-card-3x:not(.expanded-card) .card-description{display:none}.explore-card.explore-card-3x.expanded-card .card-video,.explore-card.explore-card-3x:not(.expanded-card) .card-video{width:304px;height:200px}.explore-card.explore-card-3x.expanded-card .card-info .card-description{bottom:18px}}');
        !function() {
            "use strict";
            i.exports = {
                components: {
                    "tag-list": e("homepage/explore/tag-list.vue"),
                    "ellipsis-plus": e("common/ellipsis-plus.vue")
                },
                props: {
                    card: {},
                    tagsIndex: {},
                    newCard: !1,
                    editCard: !1,
                    topOffset: 0,
                    expandedCard: !1,
                    animated: !1,
                    pairs: {}
                },
                data: function() {
                    return {
                        isAdmin: !!window.RA,
                        customUrl: "",
                        isMobile: window.Modernizr.mq("all and (max-width: 1023px)"),
                        isRetina: window.Modernizr.mq("only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi)")
                    };
                },
                mounted: function() {
                    if (this.isAdmin) this.bindUploader(); else if ("05x" == this.card.size && this.card.images && this.card.images["3x"]) {
                        new Image().src = this.card.images["3x"][this.imageSize];
                    }
                },
                computed: {
                    cardLink: function() {
                        return !this.isAdmin && (this.card.magid && this.card.magUser ? "/u" + this.card.magUser + "/" + this.card.magid + "/" : !this.isAdmin && "05x" != this.card.size && (this.card.cardLink || !1));
                    },
                    card_size: function() {
                        return this.expandedCard ? "05xexp" : this.card.size;
                    },
                    editState: function() {
                        return this.newCard || this.editCard;
                    },
                    imageSize: function() {
                        return this.isRetina ? "x2" : "x1";
                    },
                    currentImage: function() {
                        return "1x-4x" == this.card_size && (this.card.images[this.card_size] || Vue.set(this.card.images, "1x-4x", {
                            x1: [ "", "", "", "" ],
                            x2: [ "", "", "", "" ]
                        })), this.card.images && this.card.images[this.card_size] ? "1x-4x" == this.card_size && this.card.images[this.card_size][this.imageSize] instanceof Array ? this.card.images[this.card_size][this.imageSize] : 'url("' + this.card.images[this.card_size][this.imageSize] + '")' : "";
                    },
                    expandedTags: function() {
                        var t = this;
                        return _.reduce(this.card.tags, function(e, i) {
                            return t.tagsIndex[i] && e.push(t.tagsIndex[i]), e;
                        }, []);
                    },
                    tagColor: function() {
                        if (!this.card.tags || !this.card.tags.length) return "#000";
                        var t = this.tagsIndex[this.card.tags[0]];
                        return t ? t.color : "#000";
                    }
                },
                methods: {
                    bindUploader: function() {
                        var t = this;
                        this.isAdmin && this.$nextTick(function() {
                            if (t.$refs.uploader) {
                                var e = t.$refs.uploader;
                                e instanceof Array || (e = [ e ]), _.each(e, function(e, i) {
                                    t.uploader = $(e).fileupload({
                                        dataType: "json",
                                        fileInput: $(e),
                                        paramName: "upload",
                                        singleFileUploads: !0,
                                        acceptFileTypes: /(\.|\/)(gif|jpe?g|png|tiff?)$/i,
                                        pasteZone: null,
                                        dropZone: $(e.parentNode),
                                        done: function(e, n) {
                                            t.updateImages(n.result, t.card_size, i);
                                        },
                                        fail: function() {
                                            alert("Error load image");
                                        },
                                        add: function(e, i) {
                                            i.url = "/api/featured/upload/" + t.card_size, i.submit();
                                        }
                                    });
                                });
                            }
                        });
                    },
                    updateImages: function(t, e, i) {
                        var n = this;
                        this.card.images || (Vue.set(this.card, "images", {}), Vue.set(this.card.images, e, {})), "1x-4x" == e ? (this.card.images["1x-4x"].x1[i] = t["1x-4x"].x1, 
                        this.card.images["1x-4x"].x2[i] = t["1x-4x"].x2, Vue.set(this.card.images, "1x-4x", _.clone(this.card.images["1x-4x"]))) : _.each(_.keys(t), function(e) {
                            Vue.set(n.card.images, e, t[e]);
                        });
                    },
                    applyCard: function() {
                        var t = this, e = this.card;
                        this.$refs.title && (e.title = this.$refs.title.innerText.trim()), this.$refs.description && (e.description = this.$refs.description.innerText.trim()), 
                        this.$refs.credits && (e.credits = this.$refs.credits.innerText.trim()), this.$refs.date && (e.date = this.$refs.date.innerText.trim()), 
                        e.title = "#Card Title#" == e.title ? "" : e.title, e.description = "#description#" == e.description ? "" : e.description, 
                        e.credits = "#credits#" == e.credits ? "" : e.credits, e.date = "#date#" == e.date ? "" : e.date, this.saveCard(e, function() {
                            t.$emit("closeEditCard");
                        });
                    },
                    remove: function() {
                        if (confirm("Remove?")) {
                            var t = RA.collections.featured.findWhere({
                                id: this.card.id
                            });
                            RA.collections.featured.remove(t);
                            var e = this.pairs[this.card.id];
                            e && (t = RA.collections.featured.findWhere({
                                id: e.id
                            }), RA.collections.featured.remove(t)), RA.collections.featured.saveJSON(function() {});
                        }
                    },
                    move: function(t) {
                        var e = RA.collections.featured.findWhere({
                            id: this.card.id
                        }), i = RA.collections.featured.indexOf(e);
                        RA.collections.featured.remove(e), RA.collections.featured.add(e, {
                            at: i + t
                        }), RA.collections.featured.saveJSON(function() {});
                    },
                    saveCard: function(t, e) {
                        if (this.newCard) RA.collections.featured.addCard(t, e); else {
                            RA.collections.featured.findWhere({
                                id: this.card.id
                            }).set(t), RA.collections.featured.saveJSON(e);
                        }
                    },
                    onPickTag: function(t) {
                        this.card.tags = [ t ];
                    },
                    onClick: function() {
                        this.isAdmin ? this.$emit("editCard", this.card) : "05x" == this.card.size && this.$emit("expandCard", this.card, $(this.$el).offset());
                    },
                    sendEventAnalitics: function() {
                        this.cardLink && !this.isAdmin && RM.analytics.sendEvent("Featured mag", this.cardLink);
                    }
                },
                updated: function() {
                    this.bindUploader();
                },
                watch: {
                    customUrl: _.debounce(function() {
                        var t = this;
                        if (this.customUrl) {
                            var e = function(t) {
                                var e = t.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/);
                                if (e && 11 == e[2].length) return e[2];
                                return !(!(e = t.match(/.*(youtu.*\&v=)([^#\&\?]*).*/)) || 11 != e[2].length) && e[2];
                            }, i = e(this.customUrl);
                            $.ajax({
                                type: "POST",
                                url: "/api/featured/loadUrlImg",
                                data: {
                                    url: i ? "https://img.youtube.com/vi/" + e(this.customUrl) + "/0.jpg" : this.customUrl,
                                    size: this.card.size
                                },
                                success: function(e) {
                                    t.card.youtubeid = i, t.updateImages(e);
                                },
                                error: function(t) {},
                                context: this
                            });
                        }
                    }, 500),
                    "card.size": {
                        handler: function(t) {
                            "1x-4x" == t && (this.card.images["1x-4x"] || Vue.set(this.card.images, "1x-4x", {
                                x1: [ "", "", "", "" ],
                                x2: [ "", "", "", "" ]
                            }));
                        },
                        immediate: !0
                    }
                }
            };
        }(), i.exports.__esModule && (i.exports = i.exports.default);
        var n = "function" == typeof i.exports ? i.exports.options : i.exports;
        n.render = function() {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {
                staticClass: "explore-card",
                class: [ "explore-card-" + t.card_size, {
                    "is-admin": t.isAdmin,
                    "expanded-card": t.expandedCard
                } ],
                style: {
                    top: t.topOffset + "px"
                },
                on: {
                    click: t.onClick
                }
            }, [ i("a", {
                ref: "card_link",
                staticClass: "link-wrapper",
                attrs: {
                    href: t.cardLink,
                    target: "blank"
                },
                on: {
                    click: t.sendEventAnalitics
                }
            }, [ (t.expandedCard || "3x" == t.card.size) && t.card.youtubeid ? i("iframe", {
                directives: [ {
                    name: "show",
                    rawName: "v-show",
                    value: t.animated || t.isAdmin || "3x" == t.card.size,
                    expression: "animated || isAdmin || card.size == '3x'"
                } ],
                staticClass: "card-video",
                attrs: {
                    src: "https://www.youtube.com/embed/" + t.card.youtubeid
                }
            }) : "1x-4x" == t.card_size ? i("div", {
                staticClass: "picture-wrapper"
            }, t._l(t.currentImage, function(e, n) {
                return i("div", {
                    staticClass: "card-picture",
                    class: {
                        "card-picture-2x": t.isRetina
                    },
                    style: {
                        "background-image": "url(" + e + ")"
                    }
                }, [ t.isAdmin ? i("div", {
                    directives: [ {
                        name: "show",
                        rawName: "v-show",
                        value: t.editState,
                        expression: "editState"
                    } ],
                    ref: "dropZone",
                    refInFor: !0,
                    staticClass: "loader-place-holder",
                    class: {
                        "not-loaded": !e
                    },
                    on: {
                        click: function(e) {
                            e.target == t.$refs.dropZone[n] && t.$refs.uploader[n].click();
                        }
                    }
                }, [ i("input", {
                    ref: "uploader",
                    refInFor: !0,
                    attrs: {
                        type: "file",
                        name: "upload",
                        "data-url": "/api/featured/upload/" + t.card_size,
                        accept: "image/jpeg,image/png,image/gif,image/tiff"
                    }
                }) ]) : t._e() ]);
            })) : i("div", {
                staticClass: "card-picture",
                style: {
                    "background-image": t.currentImage
                }
            }, [ t.isAdmin ? i("div", {
                directives: [ {
                    name: "show",
                    rawName: "v-show",
                    value: t.editState,
                    expression: "editState"
                } ],
                ref: "dropZone",
                staticClass: "loader-place-holder",
                on: {
                    click: function(e) {
                        e.target == t.$refs.dropZone && t.$refs.uploader.click();
                    }
                }
            }, [ i("input", {
                ref: "uploader",
                attrs: {
                    type: "file",
                    name: "upload",
                    "data-url": "/api/featured/upload/" + t.card_size,
                    accept: "image/jpeg,image/png,image/gif,image/tiff"
                }
            }), t._v(" "), i("input", {
                directives: [ {
                    name: "model",
                    rawName: "v-model",
                    value: t.customUrl,
                    expression: "customUrl"
                } ],
                attrs: {
                    placeholder: "or Paste URL"
                },
                domProps: {
                    value: t.customUrl
                },
                on: {
                    input: function(e) {
                        e.target.composing || (t.customUrl = e.target.value);
                    }
                }
            }) ]) : t._e() ]) ]), t._v(" "), i("div", {
                staticClass: "card-info"
            }, [ i("tag-list", {
                attrs: {
                    editState: t.editState,
                    tagsIndex: t.tagsIndex,
                    onCard: !0,
                    tagList: t.expandedTags
                },
                on: {
                    pickTag: t.onPickTag,
                    onFilterChange: function(e) {
                        t.$emit("onCardFilter", e);
                    }
                }
            }), t._v(" "), i("a", {
                staticClass: "title-link-wrapper",
                attrs: {
                    href: t.cardLink
                },
                on: {
                    click: t.sendEventAnalitics
                }
            }, [ "05x" == t.card_size || t.expandedCard ? t._e() : i("div", {
                ref: "title",
                staticClass: "card-title",
                style: {
                    color: t.tagColor
                },
                attrs: {
                    contenteditable: t.editState
                }
            }, [ t._v(t._s(t.card.title || t.editState && "#Card Title#" || "")) ]) ]), t._v(" "), "3x" != t.card_size && "05xexp" != t.card_size || !t.isAdmin ? t._e() : i("div", {
                ref: "description",
                staticClass: "card-description",
                attrs: {
                    contenteditable: t.editState
                }
            }, [ t._v(t._s(t.card.description || t.editState && "#description#" || "")) ]), t._v(" "), "3x" != t.card_size && "05xexp" != t.card_size || t.isAdmin ? t._e() : i("ellipsis-plus", {
                staticClass: "card-description",
                attrs: {
                    line: 10,
                    text: t.card.description || ""
                }
            }), t._v(" "), "05x" == t.card_size && t.isAdmin ? i("div", {
                ref: "description",
                staticClass: "card-description",
                attrs: {
                    contenteditable: t.editState
                }
            }, [ t._v(t._s(t.card.description || t.editState && "#description#" || "")) ]) : t._e(), t._v(" "), "05x" != t.card_size || t.isAdmin ? t._e() : i("ellipsis-plus", {
                staticClass: "card-description",
                attrs: {
                    line: 4,
                    text: t.card.description || ""
                }
            }), t._v(" "), "1x" == t.card_size ? i("div", {
                ref: "credits",
                staticClass: "card-credits",
                attrs: {
                    contenteditable: t.editState
                }
            }, [ t._v(t._s(t.card.credits || t.editState && "#credits#" || "")) ]) : t._e(), t._v(" "), "3x" != t.card_size || t.expandedCard ? t._e() : i("div", {
                staticClass: "card-credits-line"
            }, [ i("div", {
                ref: "credits",
                staticClass: "card-credits",
                attrs: {
                    contenteditable: t.editState
                }
            }, [ t._v(t._s(t.card.credits || t.editState && "#credits#" || "")) ]), t._v(" "), i("div", {
                ref: "date",
                staticClass: "card-date",
                attrs: {
                    contenteditable: t.editState
                }
            }, [ t._v(t._s(t.card.date || t.editState && "#date#" || "")) ]) ]) ], 1), t._v(" "), t.expandedCard && t.animated ? i("div", {
                staticClass: "card-collapse",
                on: {
                    click: function(e) {
                        t.$emit("collapseCard");
                    }
                }
            }) : t._e(), t._v(" "), t.isAdmin && !t.editState ? i("div", {
                staticClass: "admin-control"
            }, [ i("div", {
                attrs: {
                    title: "Remove"
                },
                on: {
                    click: function(e) {
                        e.stopPropagation(), t.remove(e);
                    }
                }
            }, [ t._v("x") ]), t._v(" "), i("div", {
                attrs: {
                    title: "Move to left"
                },
                on: {
                    click: function(e) {
                        e.stopPropagation(), t.move(-1);
                    }
                }
            }, [ t._v("<") ]), t._v(" "), i("div", {
                attrs: {
                    title: "Move to right"
                },
                on: {
                    click: function(e) {
                        e.stopPropagation(), t.move(1);
                    }
                }
            }, [ t._v(">") ]) ]) : t._e() ]);
        }, n.staticRenderFns = [];
    }
}), require.register({
    "homepage/explore/tag-list.vue": function(t, e, i) {
        e("vueify/lib/insert-css").insert(".tag-list{display:-ms-flexbox;display:-ms-flex;display:flex;-ms-justify-content:center;justify-content:center;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative;margin-bottom:41px}.tag-list:not(.list-on-card){width:822px;margin:0 auto 41px}.tag-list.list-on-card{-ms-flex-wrap:nowrap;flex-wrap:nowrap}.tag-list .tag-chooser{display:-ms-flexbox;display:-ms-flex;display:flex;-ms-justify-content:center;justify-content:center;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-align-items:center;align-items:center;position:fixed;top:0;left:0;bottom:0;right:0;background-color:rgba(0,0,0,.8);z-index:10000;-ms-align-content:center;align-content:center}.tag-list .tag-chooser .admin-control{display:none!important}.tag-list .new-tag-btn{opacity:.6;border:1px solid #fff;color:#fff;line-height:0;padding:14px 30px;border-radius:20px;margin-top:1px;cursor:pointer}.tag-list .new-tag-btn span{white-space:nowrap;line-height:1}.tag-list.list-on-card .new-tag-btn{background:#000;padding:8px 16px 5px}.tag-list .new-tag-panel{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,.9);z-index:10000;display:flex;align-items:center;justify-content:center}.tag-list .new-tag-panel *{margin:0 5px}.tag-list.list-on-card{-ms-justify-content:flex-start;justify-content:flex-start;padding:15px 18px 0;margin-bottom:14px}.explore-card-3x .tag-list.list-on-card{padding:16px 18px 0}@media (max-width:977px){.tag-list{width:auto}.tag-list:not(.list-on-card){width:auto;overflow-x:scroll;padding-left:10px;overflow-scrolling:touch;-webkit-overflow-scrolling:touch;padding-bottom:10px;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-justify-content:left;justify-content:left}}");
        !function() {
            "use strict";
            i.exports = {
                components: {
                    tag: e("homepage/explore/tag.vue")
                },
                props: [ "tagList", "model", "onCard", "tagsIndex", "startFilter", "editState" ],
                data: function() {
                    return {
                        currFilter: [],
                        editTagData: {},
                        new_tag: "",
                        new_color: "",
                        addTag: !1,
                        editTag: !1,
                        onPick: !1,
                        isAdmin: !!window.RA
                    };
                },
                watch: {
                    startFilter: function() {
                        var t = this;
                        this.currFilter = this.startFilter, setTimeout(function() {
                            if (t.startFilter && t.startFilter.length) {
                                var e = $(t.$el).offset(), i = $(".active", t.$el).offset();
                                $(t.$el).animate({
                                    scrollLeft: Math.max(i.left - e.left - 30, 0)
                                });
                            }
                        }, 200);
                    }
                },
                methods: {
                    addNewTag: function() {
                        this.editTagData = {
                            tag: +new Date(),
                            title: "",
                            color: ""
                        }, this.addTag = !0;
                    },
                    onAddTag: function() {
                        if (this.editTagData.title = this.editTagData.title.trim(), this.editTagData.color = this.editTagData.color.trim(), 
                        this.editTagData.text_color = (this.editTagData.text_color || "").trim(), this.editTagData.title && this.editTagData.color) {
                            var t = RA.collections.featuredTag.findWhere({
                                tag: this.editTagData.tag
                            });
                            t ? t.set(this.editTagData) : RA.collections.featuredTag.addTag(this.editTagData), RA.collections.featuredTag.saveJSON(function() {}), 
                            this.addTag = this.editTag = !1;
                        }
                    },
                    pickTag: function(t) {
                        this.onPick = !1, this.$emit("pickTag", t.tag);
                    },
                    closeTagEdit: function(t) {
                        t.target == this.$refs.newTagPopup && (this.addTag = this.editTag = !1);
                    },
                    onClickTag: function(t, e) {
                        this.isAdmin && (this.onCard ? this.editState && (this.onPick = !0) : (this.editTagData = e, this.editTag = !0));
                    },
                    setFilter: function(t) {
                        var e = this;
                        this.currFilter.splice(0, this.currFilter.length), _.each(t, function(t) {
                            e.currFilter.push(t);
                        }), this.$emit("onFilterChange", this.currFilter);
                    },
                    onFilterChange: function(t, e) {
                        var i = this.currFilter.indexOf(t);
                        -1 !== i ? this.currFilter.splice(i, 1) : this.currFilter.push(t), this.$emit("onFilterChange", this.currFilter);
                    }
                }
            };
        }(), i.exports.__esModule && (i.exports = i.exports.default);
        var n = "function" == typeof i.exports ? i.exports.options : i.exports;
        n.render = function() {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {
                ref: "tag-list",
                staticClass: "tag-list",
                class: {
                    "list-on-card": t.onCard
                }
            }, [ t.editState && t.isAdmin && t.onCard && !t.tagList.length ? i("div", {
                staticClass: "new-tag-btn",
                on: {
                    click: function(e) {
                        t.onPick = !0;
                    }
                }
            }, [ i("span", [ t._v("Choose Tag") ]) ]) : t._e(), t._v(" "), t._l(t.tagList, function(e) {
                return i("tag", {
                    ref: "tags",
                    refInFor: !0,
                    attrs: {
                        tag: e,
                        active: -1 != t.currFilter.indexOf(e.tag),
                        onCard: t.onCard
                    },
                    on: {
                        onFilter: t.onFilterChange,
                        click: function(i) {
                            t.onClickTag(i, e);
                        }
                    }
                });
            }), t._v(" "), t.isAdmin && !t.onCard ? i("div", {
                staticClass: "new-tag-btn",
                on: {
                    click: t.addNewTag
                }
            }, [ i("span", [ t._v("+ Add Tag") ]) ]) : t._e(), t._v(" "), t.isAdmin && !t.onCard && (t.addTag || t.editTag) ? i("div", {
                ref: "newTagPopup",
                staticClass: "new-tag-panel",
                on: {
                    click: function(e) {
                        e.stopPropagation(), t.closeTagEdit(e);
                    }
                }
            }, [ i("input", {
                directives: [ {
                    name: "model",
                    rawName: "v-model",
                    value: t.editTagData.title,
                    expression: "editTagData.title"
                } ],
                attrs: {
                    placeholder: "Tag"
                },
                domProps: {
                    value: t.editTagData.title
                },
                on: {
                    input: function(e) {
                        e.target.composing || t.$set(t.editTagData, "title", e.target.value);
                    }
                }
            }), t._v(" "), i("input", {
                directives: [ {
                    name: "model",
                    rawName: "v-model",
                    value: t.editTagData.color,
                    expression: "editTagData.color"
                } ],
                attrs: {
                    placeholder: "BG Color"
                },
                domProps: {
                    value: t.editTagData.color
                },
                on: {
                    input: function(e) {
                        e.target.composing || t.$set(t.editTagData, "color", e.target.value);
                    }
                }
            }), t._v(" "), i("input", {
                directives: [ {
                    name: "model",
                    rawName: "v-model",
                    value: t.editTagData.text_color,
                    expression: "editTagData.text_color"
                } ],
                attrs: {
                    placeholder: "Text Color"
                },
                domProps: {
                    value: t.editTagData.text_color
                },
                on: {
                    input: function(e) {
                        e.target.composing || t.$set(t.editTagData, "text_color", e.target.value);
                    }
                }
            }), t._v(" "), i("button", {
                on: {
                    click: t.onAddTag
                }
            }, [ t._v(t._s(t.addTag ? "Add" : "Save")) ]) ]) : t._e(), t._v(" "), t.onPick ? i("div", {
                staticClass: "tag-chooser",
                on: {
                    click: function(e) {
                        e.stopPropagation(), t.onPick = !1;
                    }
                }
            }, t._l(t.tagsIndex, function(e) {
                return i("tag", {
                    attrs: {
                        tag: e
                    },
                    on: {
                        click: function(i) {
                            t.pickTag(e);
                        }
                    }
                });
            })) : t._e() ], 2);
        }, n.staticRenderFns = [];
    }
}), require.register({
    "homepage/explore/tag.vue": function(t, e, i) {
        e("vueify/lib/insert-css").insert(".tag{opacity:.4;padding:14px 30px;border-radius:20px;margin:1px 1px 0 0;cursor:pointer;position:relative;line-height:0}.tag .admin-control{display:none;flex-direction:row;justify-content:center;left:0;right:0;position:absolute;top:-40px}.tag .admin-control div{cursor:pointer;background:#3d3d3d;color:#fff;border:1px solid #9e9e9e;width:40px;height:40px;line-height:40px;text-align:center;border-radius:20px}.tag .admin-control div:hover{background:#9e9e9e}.tag:hover .admin-control{display:flex}.tag.no-hover,.tag:not(.active):not(:hover){background-color:hsla(0,0%,100%,.8)!important;opacity:.4!important}.tag.no-hover span,.tag:not(.active):not(:hover) span{color:#000!important;opacity:.6!important}.tag span{font-family:Avenir Next,Helvetica Neue,Helvetica,Arial,sans-serif;font-weight:500;font-style:normal;font-size:12px;color:#000;opacity:.6;white-space:nowrap;letter-spacing:.1px;line-height:12px}.tag.active,.tag:hover{opacity:1}.tag.active span,.tag:hover span{color:#fff;opacity:1}.tag.on-card{padding:8px 16px 5px;opacity:1;line-height:9px}");
        !function() {
            "use strict";
            i.exports = {
                props: [ "tag", "onCard", "active" ],
                data: function() {
                    return {
                        isAdmin: !!window.RA,
                        noHover: !1
                    };
                },
                methods: {
                    clickHandler: function() {
                        var t = this;
                        this.isAdmin ? this.$emit("click") : (this.noHover = !!this.active, setTimeout(function() {
                            t.$nextTick(function() {
                                t.$nextTick(function() {
                                    t.$emit("onFilter", t.tag.tag);
                                });
                            });
                        }, 0));
                    },
                    remove: function() {
                        if (confirm("Remove?")) {
                            var t = RA.collections.featuredTag.findWhere({
                                tag: this.tag.tag
                            });
                            RA.collections.featuredTag.remove(t), RA.collections.featuredTag.saveJSON(function() {});
                        }
                    },
                    move: function(t) {
                        var e = RA.collections.featuredTag.findWhere({
                            tag: this.tag.tag
                        }), i = RA.collections.featuredTag.indexOf(e);
                        RA.collections.featuredTag.remove(e), RA.collections.featuredTag.add(e, {
                            at: i + t
                        }), RA.collections.featuredTag.saveJSON(function() {});
                    }
                }
            };
        }(), i.exports.__esModule && (i.exports = i.exports.default);
        var n = "function" == typeof i.exports ? i.exports.options : i.exports;
        n.render = function() {
            var t = this, e = t.$createElement, i = t._self._c || e;
            return i("div", {
                staticClass: "tag",
                class: {
                    "no-hover": t.noHover,
                    active: t.active || t.isAdmin || t.onCard,
                    "on-card": t.onCard
                },
                style: {
                    "background-color": t.tag.color
                },
                on: {
                    mouseleave: function(e) {
                        t.noHover = !1;
                    },
                    click: function(e) {
                        e.stopPropagation(), t.clickHandler(e);
                    }
                }
            }, [ i("span", {
                style: {
                    color: t.tag.text_color || !1
                }
            }, [ t._v(t._s(t.tag.title)) ]), t._v(" "), t.isAdmin && !t.onCard ? i("div", {
                staticClass: "admin-control"
            }, [ i("div", {
                attrs: {
                    title: "Remove"
                },
                on: {
                    click: function(e) {
                        e.stopPropagation(), t.remove(e);
                    }
                }
            }, [ t._v("x") ]), t._v(" "), i("div", {
                attrs: {
                    title: "Move to left"
                },
                on: {
                    click: function(e) {
                        e.stopPropagation(), t.move(-1);
                    }
                }
            }, [ t._v("<") ]), t._v(" "), i("div", {
                attrs: {
                    title: "Move to right"
                },
                on: {
                    click: function(e) {
                        e.stopPropagation(), t.move(1);
                    }
                }
            }, [ t._v(">") ]) ]) : t._e() ]);
        }, n.staticRenderFns = [];
    }
}), function(t, e) {
    "use strict";
    t.classes.Login = Backbone.View.extend({
        events: {
            "click .link": "link",
            "click .close-popup": "closePopup",
            "input .login.ljr-panel input.password-input": "onPasswordInput",
            "keydown .login.ljr-panel input": "loginInputKey",
            "click .login.ljr-panel .go": "tryLogin",
            "submit .login.ljr-panel #login_form": "onLoginFormSubmit",
            "click .login.ljr-panel .social-auth": "socialAuth",
            "input .join.ljr-panel input.password-input": "onPasswordInput",
            "keydown .join.ljr-panel input": "joinInputKey",
            "click .join.ljr-panel .go": "createAccount",
            "click .join.ljr-panel .social-auth": "socialAuth",
            "click .recover.ljr-panel .go": "sendRecoverRequest",
            "click .recover.ljr-panel .go-back": "backFromRecover",
            "input .reset.ljr-panel input": "onPasswordInput",
            "click .reset.ljr-panel .go": "resetPassword",
            "click .login-popup-wrapper": "closeOutsideClick",
            touchstart: "onTouchStart",
            touchmove: "onTouchMove"
        },
        ERROR_MESSAGES: {
            invalid_email: "Not a valid email.",
            short_password: "Password must be at least 6 characters long.",
            password_dont_match: "Passwords don't match."
        },
        initialize: function(e) {
            _.bindAll(this), _.extend(this, e), _.extend(this.ERROR_MESSAGES, this.errorMessages), this.template = t.templates["template-common-login"], 
            this.template_button_preloader = t.templates["template-common-login-preloader"], this.logged = !1, this.animationSpeed = 0, 
            this.disableAnimations || _.delay(_.bind(function() {
                this.animationSpeed = 300;
            }, this), 100), this.enableCors(), $(window).on("message", this.processLoginMessages);
        },
        render: function() {
            this.setElement(this.$node || $(this.template({})).appendTo(this.$container)), this.disableScrollWatcher = !!this.$node, 
            this.setElement(this.$el), this.rendered = !0;
            var e = t.utils.queryUrlGetParam("email");
            e && this.$(".email-input").val(e);
        },
        link: function(t) {
            if (t.stopPropagation(), 2 != t.which && !t.metaKey && !t.ctrlKey) {
                var e = $(t.currentTarget).attr("href");
                if (!e) return !1;
                if (!this.useNavigate) return /login/i.test(e) && this.switchTo("login"), /join/i.test(e) && this.switchTo("join"), 
                /recover/i.test(e) && this.switchTo("recover"), !1;
                this.router.navigate(e, {
                    trigger: !0
                }), t.preventDefault();
            }
        },
        closePopup: function() {
            Modernizr.isboxversion || (this.useNavigate && (this.router.navigate(this.urlToBack || "/", {
                trigger: !1
            }), this.router.updateWindowCaptions()), this.hide(!0));
        },
        closeOutsideClick: function(t) {
            Modernizr.isdesktop && $(t.target).hasClass("login-popup-wrapper") && this.closePopup();
        },
        show: function(t) {
            this.shown || ($("body").addClass("disable-scroll"), this.urlToBack = t, 0 == this.animationSpeed && this.$el.flashClass("no-animation", 15), 
            this.$el.removeClass("hidden"), this.trigger("shown"), this.shown = !0, $("body").on("keyup", this.onBodyKeyUp), 
            $(window).bind("resize", this.onResize));
        },
        hide: function(t) {
            this.shown && (this.$el.addClass("hidden"), _.delay(function() {
                $("body").removeClass("disable-scroll");
            }, this.animationSpeed), this.trigger("hidden", t), this.shown = !1, $("body").off("keyup", this.onBodyKeyUp), 
            $(window).unbind("resize", this.onResize));
        },
        onBodyKeyUp: function(t) {
            27 == t.keyCode && this.closePopup();
        },
        switchTo: function(t) {
            var e = this.$(".ljr-panel." + t), i = e.siblings(".ljr-panel");
            "recover" == t && this.$(".recover.ljr-panel .email-input").val(this.$(".login.ljr-panel .email-input").val()), 
            e.removeClass("hidden"), this.onResize(), Modernizr.isdesktop && setTimeout(function() {
                e.find("input").eq(0).focus();
            }, 0), this.disableAnimations ? i.addClass("hidden") : _.delay(function() {
                i.addClass("hidden");
            }, this.animationSpeed / 4);
        },
        onResize: function() {
            var t = this.$(".ljr-panel:not(.hidden)");
            $(window).width() >= 768 ? this.$(".login-popup-wrapper").css("height", 670) : this.$(".login-popup-wrapper").css("height", t.outerHeight());
        },
        showButtonPreloader: function(t) {
            var e, i, n, o = t.width(), a = t.height();
            e = $(this.template_button_preloader()), t.append(e), t.css({
                color: "transparent",
                "background-image": "none"
            }), t.addClass("processing"), i = e.width(), n = e.height(), e.css({
                left: Math.floor((o - i) / 2),
                top: Math.floor((a - n) / 2)
            });
        },
        hideButtonPreloader: function(t) {
            t.find(".rmpreloader").remove(), t.css({
                color: "",
                "background-image": ""
            }), t.removeClass("processing");
        },
        loginInputKey: function(t) {
            13 == t.keyCode && this.tryLogin();
        },
        tryLogin: function() {
            var e = $.trim(this.$(".login.ljr-panel .email-input").val()), i = this.$(".login.ljr-panel .password-input").val(), n = this.$(".login.ljr-panel .go"), o = t.utils.queryUrlGetParam("redirect");
            n.hasClass("processing") || "" != e && "" != i && (this.showButtonPreloader(n), this.requestLogin(e, i, _.bind(function(e) {
                if (e && e.redirect) return window.location.href = e.redirect;
                if (e) {
                    if (o) return window.location.href = t.constants.readymag_auth_host + o;
                    this.logged = !0;
                    var i = Modernizr.sessionstorage && window.sessionStorage.getItem("rm.loginReturnUrl", window.location.pathname);
                    Modernizr.sessionstorage && window.sessionStorage.removeItem("rm.loginReturnUrl"), this.$('.login.ljr-panel #login_form input[name="url"]').val(t.constants.readymag_auth_host + (i || "/" + e.uri)), 
                    this.$(".login.ljr-panel #login_form").submit();
                } else this.hideButtonPreloader(n), clearTimeout(this.wrongTimeout), this.$(".login.ljr-panel").addClass("wrong-login"), 
                this.wrongTimeout = setTimeout(_.bind(function() {
                    this.$(".login.ljr-panel").removeClass("wrong-login");
                }, this), 2e3), this.isdesktop || this.$el.scrollTop(9999);
            }, this)));
        },
        requestLogin: function(e, i, n) {
            var o = {
                pass: md5(i)
            };
            return o[e.match(/@/) ? "email" : "uri"] = e, $.post(t.constants.readymag_auth_host + "/api/user/?timestamp=" + new Date().getTime(), o, function(t) {
                n && n(t);
            }).error(function(e) {
                404 == e.status ? n && n() : alert("Login problem. Contact tech support, please: " + t.constants.SUPPORT_MAIL);
            }), !1;
        },
        onLoginFormSubmit: function() {
            return this.logged;
        },
        showErrors: function(t) {
            clearTimeout(this.wrongTimeout), this.$(".join.ljr-panel").addClass("wrong-join"), this.$(".join.ljr-panel .error").html(t.join(" <br/>")), 
            this.wrongTimeout = setTimeout(_.bind(function() {
                this.$(".join.ljr-panel").removeClass("wrong-join");
            }, this), 2e3);
        },
        createAccount: function() {
            var e, i = $.trim(this.$(".join.ljr-panel .fullname-input").val()), n = this.$(".join.ljr-panel .password-input").val(), o = this.$(".join.ljr-panel .email-input").val(), a = [], r = this.$(".join.ljr-panel .go"), s = t.utils.queryUrlGetParam("redirect");
            r.hasClass("processing") || (s && (e = t.utils.queryUrlGetParam("giftCode", decodeURIComponent(s))), 
            "" != i && "" != o && "" != n ? (t.utils.isValidEmail(o) || a.push(this.ERROR_MESSAGES.invalid_email), 
            n.length < 6 && a.push(this.ERROR_MESSAGES.short_password), this.router.analytics && this.router.analytics.sendEvent("Join Button Click", {
                label: "native",
                value: a.length,
                _join_type: "native",
                _errors: a.join(", ")
            }), a.length ? this.showErrors(a) : (this.showButtonPreloader(r), $.ajax({
                type: "POST",
                data: {
                    email: o,
                    name: i,
                    pass: md5(n),
                    page: window.location.pathname,
                    gift_code: e
                },
                url: t.constants.readymag_auth_host + "/api/register",
                success: _.bind(function(t) {
                    if (this.putStorageData("native"), s) return window.location.href = s;
                    this.redirectAfterJoin(t.uri, r);
                }, this),
                error: _.bind(function(e) {
                    if (this.hideButtonPreloader(r), console.log(e), 403 == e.status) return alert("User with email " + o + " exists. Forgot password?");
                    alert("Registration problem. Contact tech support, please:" + t.constants.SUPPORT_MAIL);
                }, this)
            }))) : this.router.analytics && this.router.analytics.sendEvent("Join Button Click", {
                label: "native",
                value: 1,
                _join_type: "native",
                _errors: "Some fields are empty"
            }));
        },
        joinInputKey: function(t) {
            13 == t.keyCode && this.createAccount();
        },
        sendRecoverRequest: function() {
            var e = this.$(".recover.ljr-panel .email-input").val(), i = this.$(".recover.ljr-panel .go");
            i.hasClass("processing") || t.utils.isValidEmail(e) && (this.showButtonPreloader(i), this.requestRecover(e, _.bind(function(t) {
                this.hideButtonPreloader(i), this.$(".recover.ljr-panel").addClass("request-sended");
            }, this)));
        },
        requestRecover: function(e, i) {
            $.post(t.constants.readymag_auth_host + "/api/recoverypass", {
                email: e
            }, i).error(function(e) {
                404 == e.status ? i && i() : alert("Recovery problem. Contact tech support, please:" + t.constants.SUPPORT_MAIL);
            });
        },
        backFromRecover: function() {
            this.useNavigate ? this.router.navigate("login/", {
                trigger: !0
            }) : this.switchTo("login");
        },
        resetPassword: function() {
            var e = $.trim(this.$(".reset.ljr-panel .new-password-input").val()), i = $.trim(this.$(".reset.ljr-panel .verify-password-input").val()), n = window.ServerData.recover, o = [], a = this.$(".reset.ljr-panel .go");
            if (!a.hasClass("processing") && "" != e && "" != i) {
                if (e != i && o.push(this.ERROR_MESSAGES.password_dont_match), (e.length < 6 || i.length < 6) && o.push(this.ERROR_MESSAGES.short_password), 
                o.length) return clearTimeout(this.wrongTimeout), this.$(".reset.ljr-panel").addClass("wrong-reset"), 
                this.$(".reset.ljr-panel .error").html(o.join(" <br/>")), void (this.wrongTimeout = setTimeout(_.bind(function() {
                    this.$(".reset.ljr-panel").removeClass("wrong-reset");
                }, this), 2e3));
                n && n.recover_code && n.email && (this.showButtonPreloader(a), $.ajax({
                    type: "POST",
                    data: {
                        email: n.email,
                        pass: md5(e),
                        code: n.recover_code
                    },
                    url: t.constants.readymag_auth_host + "/api/changepass",
                    success: function() {
                        window.location.href = "/login/";
                    },
                    error: _.bind(function() {
                        this.hideButtonPreloader(a), alert("Change password problem. Contact tech support, please:" + t.constants.SUPPORT_MAIL);
                    }, this)
                }));
            }
        },
        onPasswordInput: function(e) {
            var i = $(e.currentTarget);
            t.utils.filterNonAscii(i) && (i.addClass("error-input"), _.defer(_.bind(function() {
                i.removeClass("error-input");
            }, this)));
        },
        socialAuth: function(e) {
            this.$button = $(e.currentTarget);
            var i = this.$button.attr("data-provider"), n = t.constants.readymag_auth_host + "/api/auth/" + i;
            if (!this.$button.hasClass("processing")) {
                this.showButtonPreloader(this.$button), this.$button.closest(".join.ljr-panel").length && this.router.analytics && this.router.analytics.sendEvent("Join Button Click", {
                    _join_type: i,
                    label: i
                });
                var o = screen.width, a = screen.height, r = Math.min(1e3, o), s = Math.min(700, a - 40), l = Math.ceil((o - r) / 2), c = Math.ceil((a - s) / 2);
                this.socialAuthWindow = window.open(n, "_blank", [ "toolbar=no", "location=" + (window.opera ? "no" : "yes"), "directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,copyhistory=no", "width=" + r, "height=" + s, "top=" + c, "left=" + l ].join()), 
                this.authInProgress = !0, this.popupCheckInterval = setInterval(_.bind(function() {
                    try {
                        (null == this.socialAuthWindow || this.socialAuthWindow.closed) && (this.authInProgress = !1, clearInterval(this.popupCheckInterval), 
                        this.hideButtonPreloader(this.$button));
                    } catch (t) {}
                }, this), 100);
            }
        },
        handleSocialAuthResult: function(e) {
            if (this.authInProgress = !1, !e || e.error || !e.user || !e.user.uri) return this.hideButtonPreloader(this.$button), 
            e.error && this.showErrors([ e.error.message ]), void (e.user && e.user.name && (this.switchTo("join"), 
            this.$(".join.ljr-panel .fullname-input").val(e.user.name), this.$(".join.ljr-panel .email-input").focus()));
            var i;
            if (e.user.createdViaFacebook && (i = "facebook"), e.user.createdViaGoogle && (i = "google"), i) this.putStorageData(i), 
            this.redirectAfterJoin(e.user.uri, this.$button); else {
                var n = t.utils.queryUrlGetParam("redirect");
                if (n) return window.location.href = t.constants.readymag_auth_host + n;
                window.location.href = t.constants.readymag_auth_host + "/" + e.user.uri;
            }
        },
        processLoginMessages: function(e) {
            if (this.authInProgress && (e = e.originalEvent || {}).origin == t.constants.readymag_auth_host) {
                var i = JSON.parse(decodeURIComponent(e.data));
                i && "social-auth" == i.event && (clearInterval(this.popupCheckInterval), this.socialAuthWindow && this.socialAuthWindow.close(), 
                this.handleSocialAuthResult(i.message));
            }
        },
        redirectAfterJoin: function(e) {
            var i = _.isFunction(this.joinCallback) ? 500 : 0;
            _.isFunction(this.joinCallback) && this.joinCallback();
            var n = t.utils.queryUrlGetParam("redirect");
            if (n) return window.location.href = t.constants.readymag_auth_host + n;
            setTimeout(_.bind(function() {
                if (!Modernizr.isdesktop || Modernizr.msie || Modernizr.msie11) window.location.href = t.constants.readymag_auth_host + "/" + e + "/"; else {
                    var i = Modernizr.sessionstorage && window.sessionStorage.getItem("rm.loginReturnUrl", window.location.pathname);
                    if (Modernizr.sessionstorage && window.sessionStorage.removeItem("rm.loginReturnUrl"), i) return window.location.href = t.constants.readymag_auth_host + i;
                    var n = this.createMagParams, o = n && n.templateID, a = n && n.tp ? n.tp + "-join-form" : "join-form";
                    new t.classes.CreateMag({
                        router: this.router,
                        me: {
                            permissions: {
                                can_create_mag: !0
                            },
                            uri: e
                        },
                        tp: a,
                        templateID: o,
                        noCreateRequestTracking: n && n.noCreateRequestTracking,
                        error: _.bind(function() {
                            this.hideButtonPreloader(this.$button);
                        }, this)
                    });
                }
            }, this), i);
        },
        enableCors: function() {
            $.ajaxPrefilter(function(e, i, n) {
                -1 != e.url.indexOf(t.constants.readymag_auth_host) && (e.xhrFields = {
                    withCredentials: !0
                });
            });
        },
        onTouchStart: function(t) {
            this.disableScrollWatcher || (this.scrollY = t.originalEvent.touches.item(0).clientY);
        },
        onTouchMove: function(t) {
            if (!this.disableScrollWatcher) {
                var e = $(t.currentTarget), i = this.scrollY - t.originalEvent.touches.item(0).clientY;
                (i < 0 && e.scrollTop() <= 0 || i > 0 && e.scrollTop() + e.height() >= e[0].scrollHeight) && t.preventDefault(), 
                this.scrollY = t.originalEvent.touches.item(0).clientY;
            }
        },
        destroy: function() {
            this.hide(), $(window).off("message", this.processLoginMessages), setTimeout(_.bind(function() {
                this.$el.remove();
            }, this), 400);
        },
        putStorageData: function(e) {
            var i = {}, n = new Date();
            i.type = e, i.utm_campaign = t.utils.queryUrlGetParam("utm_campaign"), i.utm_source = t.utils.queryUrlGetParam("utm_source"), 
            i.utm_medium = t.utils.queryUrlGetParam("utm_medium"), i.rm_url = window.location.href, i.rm_referrer = document.referrer, 
            i.timestamp = n.valueOf(), i._ga = t.utils.getCookie("_ga");
            var o = btoa(JSON.stringify(i));
            t.utils.createCookie("send_join_event", o, 10);
        }
    });
}(RM), "undefined" == typeof RM && (RM = {}), function(t) {
    t.constants = _.extend({
        UPLOAD_IMAGE_SIZE_LIMIT: 6291456,
        MSG_UPLOAD_IMAGE_SIZE_ERROR: "File size should be less than 6 Mb.",
        MSG_UPLOAD_IMAGE_SUPPORTED_ERROR: "We support only JPG, GIF, PNG, SVG and BMP picture formats.",
        MSG_UPLOAD_ONLY_SINGLE_FILE: "We support only 1 file upload via drop on workspace",
        THUMB_SIZE: 48,
        BG_EFFECT_THUMBSIZE: 40,
        UPLOAD_IMAGE_FORMATS: "jpeg|jpg|png|gif|bmp|svg\\+xml",
        EMBED_SCRIPT_INIT: window.ServerData.config.readymag_host + "/specials/assets/embed_init.js",
        EMBED_SCRIPT_MAIN: window.ServerData.config.readymag_host + "/specials/assets/embed_main.js",
        IS_LIVE: !(!window.ServerData || !window.ServerData.stripe_live),
        IS_FILE_PROTOCOL: "file:" == window.location.protocol
    }, window.ServerData.config), t.utils = {
        picSizes: [ 256, 304, 512, 608, 1024 ],
        isPageNativelyScaled: function() {
            return window.innerWidth != document.documentElement.clientWidth;
        },
        declination: function(t, e, i, n, o) {
            var a = n % 100;
            return a = a >= 11 && a <= 14 ? 0 : (a %= 10) < 5 ? a > 2 ? 2 : a : 0, o || (a = 1 == n ? 1 : 0), [ t, e, i ][a];
        },
        queryUrlGetParam: function(t, e) {
            try {
                q = e ? e.split("?")[1] : location.search.substring(1), v = q ? q.split("&") : [];
                for (var i = 0; i < v.length; i++) if (p = v[i].split("="), p[0] == t) return !(p.length > 1) || decodeURIComponent(p[1]);
            } catch (t) {
                console.log(t);
            }
        },
        autoWindowScroll: function(e, i, n) {
            this.autoWindowScrollClear();
            var o = 0;
            windowH = $(window).height(), e.pageY < 10 && (o = -Math.abs(Math.floor(3 * (10 - e.pageY)))), e.pageY > windowH - 10 && (o = Math.abs(Math.floor(3 * (10 - (windowH - e.pageY))))), 
            0 != (o = Math.max(Math.min(20, o), -20)) && (i.scrollTop(i.scrollTop() + o), t.common.autoWindowScrollTimeout = setTimeout(function() {
                n && n();
            }, 100));
        },
        autoWindowScrollClear: function() {
            clearTimeout(t.common.autoWindowScrollTimeout);
        },
        isValidEmail: function(t, e) {
            return e || (t = t.replace(/^\s+|\s+$/g, "")), /^([a-z0-9_\-]+[\.\+])*[a-z0-9_\-]+@([a-z0-9][a-z0-9\-]*[a-z0-9]\.)+[a-z]{2,}$/i.test(t);
        },
        isValidEmailLink: function(e) {
            return t.utils.isValidEmail(e.split("?")[0]);
        },
        getRGBA: function(t, e) {
            var i = "";
            if (t) {
                var n = [ parseInt(t.substring(0, 2), 16), parseInt(t.substring(2, 4), 16), parseInt(t.substring(4, 6), 16) ];
                i = e > .99 ? "rgb(" + n[0] + "," + n[1] + "," + n[2] + ")" : "rgba(" + n[0] + "," + n[1] + "," + n[2] + ", " + e + ")";
            }
            return i;
        },
        generateUUID: function() {
            var t = new Date().getTime();
            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                var i = (t + 16 * Math.random()) % 16 | 0;
                return t = Math.floor(t / 16), ("x" == e ? i : 3 & i | 8).toString(16);
            });
        },
        escapeSpecial: function(t, e) {
            return (t = (t + "").replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!\<\>\|\:])/g, "\\$1")) && e && (t = "'" + t + "'"), 
            t;
        },
        scanForURIs: function(t, e, i) {
            var n = [], o = 0;
            return t += " ", t = t.replace(/\b([a-z0-9_\.-]+)@([\da-z\.-]+)\.(biz|com|edu|gov|net|org|us|ru|ua|uk|su|se|co|no|jp|it|in|il|gb|fr|fi|es|de|cz|ch|ca|by|at|au)/gim, function(t) {
                return o++, n[o] = "<a " + (e ? 'class = "' + e + '"' : "") + ' href="mailto:' + t + '">' + t + "</a>", 
                "INNER_TMP_BLOCK_" + o + "_INNER_TMP_BLOCK";
            }), t = t.replace(/\b(https?:\/\/)?([\da-z\.-]+)\.(biz|com|edu|gov|net|org|us|ru|ua|uk|su|se|co|no|jp|it|in|il|gb|fr|fi|es|de|cz|ch|ca|by|at|au)(\/[^\s\(\)\[\]\{\}\<\>]*)*/gim, function(t, a, r, s, l, c) {
                var d = t;
                void 0 != a && "" != a || (d = "http://" + d);
                var p = r;
                return void 0 != s && "" != s && (p += "." + s), o++, i || (p = (p = d).replace(/^https?:\/\//, "")), 
                n[o] = "<a " + (e ? 'class = "' + e + '"' : "") + ' href="' + d + '" target="_blank" title="' + d + '">' + p + "</a>", 
                "INNER_TMP_BLOCK_" + o + "_INNER_TMP_BLOCK";
            }), t = t.replace(/INNER_TMP_BLOCK_([\d]+)_INNER_TMP_BLOCK/gim, function(t, e) {
                return n[e];
            });
        },
        plainTextToHtml: function(e, i) {
            return e = e || "", e = e.replace(/\&/gim, "&amp;"), e = e.replace(/\</gim, "&lt;"), e = e.replace(/\>/gim, "&gt;"), 
            e = e.replace(/\n/gim, "<br/>"), e = e.replace(/\s\s/gim, " &nbsp;"), i && i.detectLinks && (e = t.utils.scanForURIs(e)), 
            e;
        },
        screenshotSize: function(t) {
            return Modernizr.retina && (t *= 2), -1 == this.picSizes.indexOf(t) && (t = _.filter(this.picSizes, function(e) {
                return e > t;
            })[0]), -1 == this.picSizes.indexOf(t) ? (console.error("screenshot size not found! size: " + t), 512) : t;
        },
        addFilenameComponent: function(t, e) {
            var i = t.split(".");
            return i.length > 1 ? (i[i.length - 2] += "_" + e, i.join(".")) : t += "_" + e;
        },
        URLParts: function(t) {
            var e = /(.+:\/\/)?([^\/]+)(\/.*)*/i.exec(t);
            return e = e || [], {
                url: e[0] || "",
                protocol: e[1] || "",
                hostname: e[2] || "",
                path: e[3] || ""
            };
        },
        filterNonAscii: function(t) {
            if (t && t.val) {
                var e = t.val();
                return !!/[^\x00-\x7f]/.test(e) && (e = e.replace(/[^\x00-\x7f]/g, ""), t.val(e), !0);
            }
        },
        applyTransform: function(t, e) {
            t.css({
                "-webkit-transform": e,
                transform: e
            });
        },
        getCurrentTranslate: function(t) {
            var e = window.getComputedStyle(t, null), i = e.getPropertyValue("-webkit-transform") || e.getPropertyValue("transform");
            if (!i || "none" == i) return [ 0, 0 ];
            var n;
            return [ (n = (n = (n = i.split("(")[1]).split(")")[0]).split(","))[4] - 0, n[5] - 0 ];
        },
        applyTransition: function(t, e) {
            t.css({
                "-webkit-transition": e.replace("transform", "-webkit-transform"),
                transition: e
            });
        },
        waitForTransitionEnd: function(t, e, i, n) {
            t = t instanceof jQuery ? t : $(t);
            var o = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                msTransition: "MSTransitionEnd",
                transition: "transitionend"
            }[Modernizr.prefixed("transition")], a = function e(a) {
                if (a) {
                    var s = a.originalEvent.propertyName.toLowerCase();
                    if (!$(a.target).is(t)) return;
                    if (-1 == s.indexOf(i)) return;
                }
                t.off(o, e), clearTimeout(r), n();
            };
            t.on(o, a);
            var r = setTimeout(a, e);
            return function() {
                t.off(o, a), clearTimeout(r);
            };
        },
        vueTransitionsShow: function(e, i) {
            var n = i + "-enter", o = i + "-enter-active";
            e.addClass(n), window.requestAnimationFrame(function() {
                e.removeClass(n), e.addClass(o), t.utils.waitForTransitionEnd(e, 200, "opacity", function() {
                    e.removeClass(o);
                });
            });
        },
        vueTransitionsHide: function(e, i) {
            var n = i + "-leave-to", o = i + "-leave-active";
            return e.addClass(n + " " + o), new window.Promise(function(i) {
                t.utils.waitForTransitionEnd(e, 200, "opacity", i);
            }).then(function() {
                e.removeClass(n + " " + o);
            });
        },
        getFixedPositionCSS: function(t, e, i) {
            var n = e.left * i, o = e.top * i, a = e.width, r = e.height, s = a * (1 - i) / 2, l = r * (1 - i) / 2, c = {
                left: "",
                top: "",
                bottom: "",
                right: "",
                "margin-left": "",
                "margin-top": ""
            };
            return t ? ("c" != t && (t.indexOf("n") > -1 && (c.top = o - l), t.indexOf("w") > -1 && (c.left = n - s), 
            t.indexOf("e") > -1 && (c.right = n - s), t.indexOf("s") > -1 && (c.bottom = o - l)), [ "n", "c", "s" ].indexOf(t) > -1 && (c.left = "50%", 
            c["margin-left"] = -a / 2 + n), [ "w", "c", "e" ].indexOf(t) > -1 && (c.top = "50%", c["margin-top"] = -r / 2 + o), 
            c) : _.extend({}, c, e);
        },
        getFixedPositionBox: function(t, e, i, n) {
            i = i || 1;
            var o = e.x * i, a = e.y * i, r = e.w * i, s = e.h * i, l = {
                left: o,
                top: a,
                width: r,
                height: s
            };
            return t ? ("c" !== t && (-1 !== t.indexOf("s") && (l.top = n.height - a - s), -1 !== t.indexOf("e") && (l.left = n.width - o - r)), 
            -1 !== [ "n", "c", "s" ].indexOf(t) && (l.left = n.width / 2 - r / 2 + o), -1 !== [ "w", "c", "e" ].indexOf(t) && (l.top = n.height / 2 - s / 2 + a), 
            l.bottom = l.top + l.height, l.right = l.left + l.width, l) : l;
        },
        decimals: function(t, e) {
            var i = Math.pow(10, e);
            return Math.round(t * i) / i;
        },
        getFocusBack: function() {
            Modernizr.isdesktop && $('<input style="position: absolute;left: -999px;" type="text"/>').appendTo("body").css({
                top: $(window).scrollTop()
            }).focus().remove();
        },
        hex2rgb: function(t) {
            return [ parseInt(t.substring(0, 2), 16), parseInt(t.substring(2, 4), 16), parseInt(t.substring(4, 6), 16) ];
        },
        loadLoggedUser: function(e) {
            if (t.common.isDownloadedSource) return e && e();
            if (window.ServerData && window.ServerData.me && window.ServerData.me.user) return e && e();
            if (t.utils.__loadLoggedUserCallbackStack = t.utils.__loadLoggedUserCallbackStack || [], e && "function" == typeof e && t.utils.__loadLoggedUserCallbackStack.push(e), 
            !t.utils.__loadLoggedUserLoadStarted) {
                t.utils.__loadLoggedUserLoadStarted = !0, $(window).on("message", _.bind(function(e) {
                    if ((e = e.originalEvent || {}).origin == t.constants.readymag_auth_host) {
                        var n = JSON.parse(e.data);
                        if ("user" != n.event) return;
                        var o = n.message;
                        window.ServerData && (window.ServerData.me = {
                            user: o
                        });
                        for (var a = 0; a < t.utils.__loadLoggedUserCallbackStack.length; a++) t.utils.__loadLoggedUserCallbackStack[a].call(this, o);
                        t.utils.__loadLoggedUserCallbackStack = null, t.utils.__loadLoggedUserLoadStarted = null, i.remove();
                    }
                }, this));
                var i = $("<iframe>").attr("width", "0").attr("height", "0").css({
                    position: "absolute",
                    top: "-999px"
                }).on("load", function() {
                    i[0].contentWindow.postMessage("GetLoggedUser", "*");
                }).attr("src", t.constants.readymag_auth_host + "/get_user_cookies." + Date.now()).appendTo("body");
            }
        },
        selectProtocol: function(e) {
            return e && e.length ? (0 == e.indexOf("//") && t.constants.IS_FILE_PROTOCOL && (e = "http:" + e), e) : e;
        },
        _sendFBGraphRequest: function(t) {
            $.ajax({
                type: "GET",
                url: "https://graph.facebook.com/?id=" + encodeURIComponent(t) + "&scrape=true&method=post",
                success: function(t) {}
            });
        },
        facebookGraphRefresh: function(e) {
            var i, n, o, a = t.constants.readymag_host || window.location.origin;
            o = a + "/" + e.user_uri + "/" + e.mag_uri + "/", this._sendFBGraphRequest(o);
            var r = a + "/" + e.mag_numid + "/";
            this._sendFBGraphRequest(r), e.mag_domain ? (i = "http://" + e.mag_domain + "/", this._sendFBGraphRequest(i)) : e.user_domain && (n = "http://" + e.user_domain + "/" + e.mag_uri + "/", 
            this._sendFBGraphRequest(n));
            var s = e.pages;
            if (0 != s.length) {
                i || n || a + "/";
                for (var l in s) {
                    var c = a + "p" + (l = s[l]).num_id + "/";
                    this._sendFBGraphRequest(c);
                }
            }
        },
        simulateEvent: function(t, e) {
            function i(t, e) {
                for (var i in e) t[i] = e[i];
                return t;
            }
            var n, o = {
                HTMLEvents: /^(?:load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll)$/,
                MouseEvents: /^(?:click|dblclick|mouse(?:down|up|over|move|out))$/
            }, a = i({
                pointerX: 0,
                pointerY: 0,
                button: 0,
                ctrlKey: !1,
                altKey: !1,
                shiftKey: !1,
                metaKey: !1,
                bubbles: !0,
                cancelable: !0
            }, arguments[2] || {}), r = null;
            for (var s in o) if (o[s].test(e)) {
                r = s;
                break;
            }
            if (!r) throw new SyntaxError("Only HTMLEvents and MouseEvents interfaces are supported");
            if (document.createEvent) n = document.createEvent(r), "HTMLEvents" == r ? n.initEvent(e, a.bubbles, a.cancelable) : n.initMouseEvent(e, a.bubbles, a.cancelable, document.defaultView, a.button, a.pointerX, a.pointerY, a.pointerX, a.pointerY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, a.button, t), 
            t.dispatchEvent(n); else {
                a.clientX = a.pointerX, a.clientY = a.pointerY;
                n = i(document.createEventObject(), a), t.fireEvent("on" + e, n);
            }
            return t;
        },
        getTestIndexes: function() {
            if (t.common.rm_test) return t.common.rm_test;
            var e, i, n = {};
            for (e = 2; e <= 5; e++) n["_test_" + e] = -1;
            if (Modernizr.localstorage) for (e = 2; e <= 5; e++) n[i = "_test_" + e] = localStorage.getItem("rm_test_" + e), 
            (parseInt(n[i]) != n[i] || n[i] < 0 || n[i] >= e) && (n[i] = Math.floor(Math.random() * e), localStorage.setItem("rm_test_" + e, n[i])), 
            n[i] -= 0;
            return t.common.rm_test = n, n;
        },
        setInputSize: function(t, e, i) {
            var n = $('<div style="position:absolute; left:-9999px; right:auto; margin:0; white-space:pre; width:auto"></div>').appendTo(t.parent());
            n[0].className = t[0].className, n.text(i || t.val());
            var o = n.width();
            o = 2 * Math.ceil(o / 2) + 2, e && o > e && (o = e), t.width(o), n.remove();
        },
        PageVisibilityManager: function() {
            var t, e;
            void 0 !== document.hidden ? (t = "hidden", e = "visibilitychange") : void 0 !== document.mozHidden ? (t = "mozHidden", 
            e = "mozvisibilitychange") : void 0 !== document.msHidden ? (t = "msHidden", e = "msvisibilitychange") : void 0 !== document.webkitHidden && (t = "webkitHidden", 
            e = "webkitvisibilitychange");
            return {
                addEventListener: function(i) {
                    if (!t) return !1;
                    document.addEventListener(e, i);
                },
                removeEventListener: function(i) {
                    if (!t) return !1;
                    document.removeEventListener(e, i);
                },
                isPageHidden: function() {
                    return document[t];
                }
            };
        }(),
        getCookie: function(t) {
            var e = document.cookie.match(new RegExp("(?:^|; )" + t.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
            return e ? decodeURIComponent(e[1]) : void 0;
        },
        deleteCookie: function(t) {
            this.createCookie(t, "");
        },
        createCookie: function(e, i, n) {
            n = n || 36500;
            var o = new Date();
            o.setTime(o.getTime() + 24 * n * 60 * 60 * 1e3);
            var a, r = "; expires=" + o.toGMTString();
            a = (a = t.constants.readymag_host.replace(/https?:\/\//i, "")).replace("/", ""), document.cookie = e + "=" + i + r + "; path=/; domain=." + a;
        },
        isMongoObjectId: function(t) {
            return /^[0-9a-fA-F]{24}$/.test(t);
        },
        setNoTransitions: function(e) {
            return e = !!e || void 0 === e, t.constants.noanimations = e, $("html").toggleClass("notransitions"), 
            "Transitions are " + (e ? "disabled" : "enabled");
        }
    }, $.expr[":"].icontains = function(t, e, i, n) {
        var o = i[3] + "", a = t.textContent || t.innerText || jQuery(t).text() || "", r = new RegExp("(" + o + ")", "i");
        return !!a.match(r);
    }, $.expr[":"].econtains = function(t, e, i, n) {
        var o = i[3] + "", a = t.textContent || t.innerText || jQuery(t).text() || "", r = new RegExp("(^" + o + "$)", "");
        return !!a.match(r);
    }, String.prototype.capitalize = function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }, _.bindAll = function(t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return 0 === e.length && (e = _.functions(t)), _.each(e, function(e) {
            t[e] = _.bind(t[e], t);
        }), t;
    }, _.mixin({
        cloneWithObjects: function(t) {
            return t = _.clone(t), _.each(t, function(e, i) {
                if (_.isArray(e)) {
                    for (var n = [], o = 0; o < e.length; o++) n.push(_.clone(e[o]));
                    t[i] = n;
                } else _.isObject(e) && !_.isFunction(e) ? t[i] = _.clone(t[i]) : _.isFunction(e) && (t[i] = t[i]);
            }), t;
        },
        isContainsData: function(t, e) {
            return _.all(e, function(e) {
                return _.any(t, function(t) {
                    return _.isEqual(t, e);
                });
            });
        },
        objectDifference: function(t, e) {
            var i = {};
            return _.each(e, function(n, o) {
                if (_.isObject(n) && !_.isArray(n)) return i[o] = _.objectDifference(t[o], e[o]), void (_.isEmpty(i[o]) && !_.isEmpty(e[o]) ? delete i[o] : i[o] = e[o]);
                t && e && _.isEqual(t[o], e[o]) || (i[o] = e[o]);
            }), i;
        },
        deepExtend: function(t) {
            var e, i = /#{\s*?_\s*?}/, n = function(e, i, n) {
                return t[n] = _.clone(i);
            }, o = function(o) {
                var a = t[o], r = e[o];
                !function(t, e) {
                    return _.isUndefined(t) || _.isNull(t) || _.isFunction(t) || _.isNull(e) || _.isDate(e);
                }(a, r) ? function(t, e) {
                    return _.isString(e) && i.test(e);
                }(0, r) ? function(e, n, o) {
                    _.isString(e), t[o] = n.replace(i, e);
                }(a, r, o) : !function(t, e) {
                    return _.isArray(t) || _.isArray(e);
                }(a, r) && _.isObject(a) && _.isObject(r) ? function(e, i, n) {
                    if (!_.isObject(e) || !_.isObject(i)) throw new Error("Trying to combine an object with a non-object (" + n + ")");
                    t[n] = _.deepExtend(e, i);
                }(a, r, o) : n(0, r, o) : n(0, r, o);
            };
            return _.each(Array.prototype.slice.call(arguments, 1), function(t) {
                e = t, Object.keys(e).forEach(o);
            }), t;
        }
    });
    if (jQuery.fn.selectText = function() {
        var t, e, i = document, n = this[0];
        i.body.createTextRange ? ((t = document.body.createTextRange()).moveToElementText(n), t.select()) : window.getSelection && (e = window.getSelection(), 
        (t = document.createRange()).selectNodeContents(n), e.removeAllRanges(), e.addRange(t)), this.focus(), 
        n.selectionStart = 0, n.selectionEnd = 1;
    }, String.prototype.toHttps = function() {
        return this.replace(/^http:\/\//i, "https://");
    }, String.prototype.escapeRegExp = function() {
        var t = new RegExp("(\\" + [ "$", "^", "*", "(", ")", "+", "[", "]", "{", "}", "\\", "|", ".", "?", "/" ].join("|\\") + ")", "g");
        return this.replace(t, "\\$1");
    }, Number.prototype.formatWithDelimiters = function(t) {
        return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, t);
    }, Number.prototype.toFixedNonZero = function(t) {
        return this % 1 ? this.toFixed(t) : this.toString();
    }, $.fn.setCursorPos = function(t) {
        var e, i;
        if ((e = this.eq(0)) && e.is("input")) if ((i = e.get(0)).setSelectionRange) i.focus(), i.setSelectionRange(t, t); else if (i.createTextRange) {
            var n = i.createTextRange();
            n.collapse(!0), n.moveEnd("character", t), n.moveStart("character", t), n.select();
        }
    }, $.fn.getCursorPos = function() {
        var t, e;
        if ((t = this.eq(0)) && t.is("input")) {
            if ((e = t.get(0)).selectionStart) return e.selectionStart;
            if (document.selection) {
                e.focus();
                var i = document.selection.createRange(), n = document.selection.createRange().text.length;
                return i.moveStart("character", -e.value.length), i.text.length - n;
            }
        }
    }, $.fn.flashClass = function(t, e) {
        var i, n = this;
        return this.addClass(t), clearTimeout(this.data("timeout")), i = setTimeout(function() {
            "object" == (void 0 === n ? "undefined" : _typeof2(n)) && n.length && (n.removeClass(t), n.data("timeout", null));
        }, e), this.data("timeout", i), this;
    }, $.fn.cardNumberFormatter = function() {
        this.on("input", function() {
            var t, e, i, n;
            n = this.getCursorPos(), /[^\d\s]/g.test(this.val()) && (this.val(this.val().replace(/[^\d\s]/g, "")), 
            this.setCursorPos(n - 1)), t = this.val().replace(/\s/g, ""), this.data("prev_card_digits", this.data("prev_card_digits") || t), 
            window.Stripe && window.Stripe.card && window.Stripe.card.cardType && (e = Stripe.card.cardType(t)), 
            i = "American Express" == e ? function(t) {
                return t.replace(/^(\d{4})(\d{6})?/, "$1 $2 ").replace(/\s+/g, " ");
            } : function(t) {
                return $.trim(t.replace(/(\d{4})(\d{4})?(\d{4})?(\d{3,4})?/, "$1 $2 $3 $4").replace(/\s+/g, " "));
            }, (!this.data("prev_card_digits") || t.length > this.data("prev_card_digits").length && t.length < 17) && (n = this.getCursorPos(), 
            this.val(i(t)), n < $.trim(this.val()).length - 1 && this.data("prev_card_digits") && this.setCursorPos(n)), 
            this.data("prev_card_digits", t);
        }.bind(this));
    }, window.Backbone) {
        _.extend(Backbone.History.prototype, {
            universalStart: function(t) {
                if (Modernizr.history) Backbone.history.start(t); else {
                    t.pushState = !1, t.silent = !0, t.hashChange = !0, Backbone.history.start(t);
                    var e = Backbone.history.options.root.length, i = window.location.pathname.substr(e);
                    Backbone.history.navigate(i, {
                        trigger: !0
                    });
                }
            }
        });
        var e = Backbone.Router.prototype.navigate;
        Backbone.Router.prototype.navigate = function(t, i) {
            return t.indexOf("?") > -1 || i && i.skipQueryString ? e.apply(this, arguments) : (t += window.location.search, 
            e.call(this, t, i));
        }, Backbone.Model.prototype.getResetAttrs = function(t, e) {
            var i = t.toJSON();
            return _.each(i, function(t, n) {
                _.isObject(i[n] && _.isObject(e[n])) && (e[n] = this.getResetAttrs(i[n], e[n])), _.has(i, n) && !_.has(e, n) && (e[n] = void 0);
            }, this), e;
        };
    }
    for (var i = 0, n = [ "ms", "moz", "webkit", "o" ], o = 0; o < n.length && !window.requestAnimationFrame; ++o) window.requestAnimationFrame = window[n[o] + "RequestAnimationFrame"], 
    window.cancelAnimationFrame = window[n[o] + "CancelAnimationFrame"] || window[n[o] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(t, e) {
        var n = new Date().getTime(), o = Math.max(0, 16 - (n - i)), a = window.setTimeout(function() {
            t(n + o);
        }, o);
        return i = n + o, a;
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
        clearTimeout(t);
    });
}(RM), function(t) {
    "use strict";
    var e = "other", i = "anonymous", n = null;
    t.classes.extendAnalyticsPublic = {
        initialize: function(e) {
            _.bindAll(this), _.extend(this, e), this.router || (this.router = t.viewerRouter || t.homepageRouter || t.collectorRouter), 
            this.lastTrackedUrl = "", this.shortlink_redirect = t.utils.getCookie("shortlink_redirect"), this._saveFirstInteraction(), 
            t.common.readymagTracker && t.utils.loadLoggedUser(_.bind(function(t) {
                t._id && (window.ga && ga("readymag.set", "&uid", t._id), this.userId = t._id);
            }, this)), $(_.bind(function() {
                this.trackPage();
            }, this));
        },
        sendEvent: function(e, i, n, o) {
            if (window.ga) {
                var a = {
                    action: e
                };
                _.isObject(i) ? a = _.extend(a, i) : (a.label = i || void 0, a.value = n || void 0);
                var r = this._extendParams(a), s = {
                    hitType: "event",
                    eventCategory: r.category,
                    eventAction: r.action,
                    eventLabel: r.label,
                    eventValue: r.value,
                    page: r.page,
                    location: r.href,
                    screenName: r.screenName,
                    hitCallback: o || r.cb || void 0
                };
                return t.common.readymagTracker && (s.dimension1 = r.dims.pageType, s.dimension2 = r.dims.userId, s.dimension3 = null, 
                this._rmdata && (s.dimension4 = this._rmdata.dimension, s.dimension5 = this._rmdata.first_campaign, 
                s.dimension6 = this._rmdata.first_medium, this._rmdata = null), window.ga("readymag.send", s)), t.common.userTracker && "Project Actions" == r.category && window.ga("t0.send", s), 
                s;
            }
        },
        trackPage: function(e) {
            if (window.ga) {
                var i = this._extendParams(e);
                if (void 0 != this.shortlink_redirect && (i = _.extend(i, this._processRedirectUTM())), i.page != this.lastTrackedUrl) {
                    this.lastTrackedUrl = i.page;
                    var n = {
                        page: i.page,
                        location: i.href,
                        screenName: i.screenName,
                        campaignName: i.campaignName,
                        campaignSource: i.campaignSource,
                        campaignMedium: i.campaignMedium,
                        hitCallback: i.cb || void 0
                    };
                    return t.common.readymagTracker && (n.dimension1 = i.dims.pageType, n.dimension2 = i.dims.userId, n.dimension3 = null, 
                    n.metric1 = i.countProjectView, this._rmdata && (n.dimension4 = this._rmdata.dimension, n.dimension5 = this._rmdata.first_campaign, 
                    n.dimension6 = this._rmdata.first_medium, this._rmdata = null), window.ga("readymag.send", "pageview", n)), 
                    t.common.userTracker && window.ga("t0.send", "pageview", n), n;
                }
            }
        },
        _extendParams: function(e) {
            var i = e = e || {};
            return t.common.isDownloadedSource || (i.dims = this.router.getAnalyticsDimensions && this._parseDimensions(this.router.getAnalyticsDimensions())), 
            this.userId && (i.dims.userId = this.userId), i.page || t.common.isDownloadedSource ? !i.page && t.common.isDownloadedSource && (i.page = Backbone.history.location.pathname) : i.page = "/" + Backbone.history.getFragment(), 
            -1 != i.page.indexOf("?") && (i.page = i.page.substr(0, i.page.indexOf("?"))), i.page = this._correctUrl(i.page), 
            i.href = window.location.href, i.action && (i.category = this.getActionCategory(i.action)), this._triggerProjectView && !i.action && (i.countProjectView = 1, 
            this._triggerProjectView = !1), i.screenName = this._setScreenName(), i;
        },
        _correctUrl: function(t) {
            return "/" == t ? t : "/" == t[t.length - 1] ? t.substr(0, t.length - 1) : t;
        },
        _setScreenName: function() {
            var e;
            return t.viewerRouter && t.viewerRouter.mag && t.viewerRouter.magPasswordView && 1 == t.viewerRouter.mag.is_private && (e = "Private project " + t.viewerRouter.mag.num_id), 
            t.viewerRouter && t.viewerRouter.mag && 0 == t.viewerRouter.mag.is_private && (e = t.viewerRouter.mag.title), 
            e;
        },
        _parseDimensions: function(t) {
            return {
                pageType: t.pageType || e,
                userId: t.userId || i,
                subscription: t.subscription || n
            };
        },
        _processRedirectUTM: function() {
            if (this.shortlink_redirect) {
                var e = JSON.parse(atob(this.shortlink_redirect));
                return t.utils.deleteCookie("shortlink_redirect"), {
                    campaignName: e.utm_campaign,
                    campaignSource: e.utm_source,
                    campaignMedium: e.utm_medium
                };
            }
        },
        _saveFirstInteraction: function() {
            if (!(t.utils.getCookie("_rmdata") || Modernizr.localstorage && window.localStorage && window.localStorage.getItem("_rmdata"))) {
                var e = document.referrer || "direct", i = window.location.href, n = t.utils.queryUrlGetParam("utm_campaign"), o = t.utils.queryUrlGetParam("utm_source"), a = t.utils.queryUrlGetParam("utm_medium"), r = {
                    dimension: [ n, o, a, e, i ].join("|"),
                    first_medium: a,
                    first_campaign: n,
                    first_source: o,
                    rm_url: i,
                    rm_referrer: e
                }, s = btoa(JSON.stringify(r));
                this._rmdata = r, t.utils.createCookie("_rmdata", s), Modernizr.localstorage && window.localStorage && window.localStorage.setItem("_rmdata", s);
            }
        },
        getActionCategory: function(e) {
            return t.homepageRouter ? "Homepage Actions" : "First Widget Pack Loaded" == e ? "Performance" : "Project Actions";
        }
    };
}(RM), function(t) {
    "use strict";
    location.origin === t.constants.readymag_auth_host && t.classes.extendAnalyticsUsers ? t.classes.Analytics = Backbone.Model.extend(t.classes.extendAnalyticsUsers) : t.classes.extendAnalyticsPublic ? t.classes.Analytics = Backbone.Model.extend(t.classes.extendAnalyticsPublic) : alert("Analytics initialization error!");
}(RM);

var preloadDesignImagesList = {
    "collector-mobile-header": {
        prefix: "//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/_tablet/collector/header/",
        imgs: [ "back-active.png" ]
    },
    "collector-mobile-mags": {
        prefix: "//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/_tablet/collector/mags-list/",
        imgs: [ "close.png" ]
    },
    constructor: {
        prefix: "//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/blocks/",
        imgs: [ "block-dot-plus.png" ]
    },
    controls: {
        prefix: "//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/controls/",
        imgs: [ "arrow-hover.png" ]
    },
    "controls-common_align": {
        prefix: "//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/controls/common_align/",
        imgs: [ "bottom-hover.png", "center-hover.png", "icon-hover.png", "left-hover.png", "middle-hover.png", "right-hover.png", "top-hover.png" ]
    },
    "controls-common_layer": {
        prefix: "//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/controls/common_layer/",
        imgs: [ "icon-hover.png" ]
    },
    "controls-text_align": {
        prefix: "//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/controls/text_align/",
        imgs: [ "center-hover.png", "icon-hover.png", "justify-hover.png", "left-hover.png", "right-hover.png" ]
    },
    "controls-text_bius": {
        prefix: "//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/controls/text_bius/",
        imgs: [ "all-caps-hover.png", "bold-hover.png", "icon-hover.png", "italic-hover.png", "strike-hover.png", "underline-hover.png" ]
    },
    "controls-text_columns": {
        prefix: "//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/controls/text_columns/",
        imgs: [ "icon-hover.png" ]
    },
    "controls-text_edit": {
        prefix: "//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/controls/text_edit/",
        imgs: [ "icon-hover.png" ]
    },
    "controls-text_link": {
        prefix: "//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/controls/text_link/",
        imgs: [ "add-hover.png", "apply.png", "apply-hover.png", "cancel.png", "cancel-hover.png", "delete.png", "delete-hover.png", "icon-hover.png", "menu-arrow.png", "menu-arrow-hover.png", "placeholder-arrow-hover.png", "popup-arrow-hover.png", "target.png", "target-hover.png", "target-active.png" ]
    },
    "controls-text_typography": {
        prefix: "//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/controls/text_typography/",
        imgs: [ "font-arrows-hover.png", "icon-hover.png", "point-active.png", "point-hover.png", "style-arrows-hover.png", "unlinked.png" ]
    },
    "controls-text_styles": {
        prefix: "//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/controls/text_styles/",
        imgs: [ "add-hover.png", "align-center-active.png", "align-justify-active.png", "align-left-active.png", "align-right-active.png", "cancel-hover.png", "menu-arrow.png", "menu-arrow-hover.png", "point-active.png", "point-hover.png", "popup-arrow-hover.png", "text-strike-active.png", "text-transform-active.png", "text-underline-active.png" ]
    },
    "controls-slideshow_manager": {
        prefix: "//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/controls/slideshow_manager/",
        imgs: [ "add-hover.png", "image-placeholder.png", "remove.png", "remove-hover.png", "update.png", "update-hover.png", "preloader.png" ]
    },
    "controls-shape_settings": {
        prefix: "//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/controls/shape_settings/",
        imgs: [ "color-arrow.png", "color-arrow-hover.png", "icon.png", "icon-hover.png", "opacity-grid.png", "point-active.png", "point-hover.png", "popup-arrow.png", "popup-arrow-hover.png", "stroke-dashed.png", "stroke-dotted.png", "stroke-double.png", "stroke-solid.png" ]
    },
    "controls-video_settings": {
        prefix: "//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/controls/video_settings/",
        imgs: [ "social-upload.png", "social-upload-hover.png", "delete.png", "delete-hover.png", "social-youtube.png", "social-youtube-hover.png", "social-vimeo.png", "social-vimeo-hover.png" ]
    },
    "controls-common_rotation": {
        prefix: "//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/controls/common_rotation/",
        imgs: [ "flip-h.png", "flip-h-hover.png", "flip-v.png", "flip-v-hover.png", "rotate90.png", "rotate90-hover.png" ]
    },
    "controls-common_position": {
        prefix: "//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/controls/common_position/",
        imgs: [ "icon.png", "icon-hover.png" ]
    },
    "controls-audio_settings": {
        prefix: "//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/controls/audio_settings/",
        imgs: [ "close.png", "close-hover.png", "soundcloud.png", "soundcloud-hover.png", "soundcloud-logo-small.png", "soundcloud-logo-small-hover.png", "spin-l-hover.png", "spin-r-hover.png" ]
    },
    colorbox: {
        prefix: "//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/helpers/colorbox/",
        imgs: [ "add-hover.png", "fav-active.png", "fav-hover.png", "trash-active.png", "trash-hover.png" ]
    },
    fontexplorer: {
        prefix: "//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/helpers/font-explorer/",
        imgs: [ "add-font.png", "close-typekit-popup.png", "back-hover.png", "classification-blackletter-active.png", "classification-decorative-active.png", "classification-handmade-active.png", "classification-monospaced-active.png", "classification-sans-serif-active.png", "classification-script-active.png", "classification-serif-active.png", "classification-slab-serif-active.png", "filter-capitals-all-or-small-caps-active.png", "filter-capitals-uppercase-lowercase-active.png", "filter-contrast-high-active.png", "filter-contrast-low-active.png", "filter-contrast-regular-active.png", "filter-number-style-lowercase-active.png", "filter-number-style-uppercase-active.png", "filter-weight-heavy-active.png", "filter-weight-light-active.png", "filter-weight-regular-active.png", "filter-width-condensed-active.png", "filter-width-extended-active.png", "filter-width-regular-active.png", "filter-x-height-high-active.png", "filter-x-height-low-active.png", "filter-x-height-regular-active.png", "grid-view-black.png", "list-view-white.png", "provider-logo-google-hover.png", "provider-logo-typekit-hover.png", "provider-logo-webtype-hover.png", "provider-logo-typetoday-hover.png", "remove-font.png", "search-active.png", "search-corner.png" ]
    },
    fontselector: {
        prefix: "//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/helpers/font-selector/",
        imgs: [ "add-hover.png", "delete.png", "google.png", "restore.png", "typekit.png", "webtype.png", "gear.png", "gear-hover.png" ]
    },
    fontuploader: {
        prefix: "//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/helpers/font-selector/",
        imgs: [ "refresh.png", "refresh-hover.png", "close.png", "close-hover.png" ]
    },
    "page-settings": {
        prefix: "//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/helpers/page-settings/",
        imgs: [ "arrow-hover.png", "restore-hover.png", "upload-hover.png" ]
    },
    pagespanel: {
        prefix: "//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/pages-panel",
        imgs: [ "/back-click.png", "/back-hover.png", "/list-view-active.png", "/list-view-hover.png", "/plus-click.png", "/plus-hover.png", "/settings.png", "/settings-active.png", "/settings-active-hover.png", "/settings-hover.png", "/slide-view.png", "/slide-view-active.png", "/slide-view-hover.png", "/trash-active.png", "/trash-full-active.png", "/trash-full-hover.png", "/trash-full.png", "/trash-hover.png", "/trash.png", "/archive-hover.png", "/archive.png", "-contents/eye-invisible.png", "-contents/eye-invisible-active.png", "-contents/eye-visible.png", "-contents/eye-visible-active.png", "-contents/submenu-settings-hover.png", "-contents/submenu-clone-hover.png", "-contents/submenu-edit-hover.png", "-contents/submenu-invisible.png", "-contents/submenu-invisible-hover.png", "-contents/submenu-remove-hover.png", "-contents/submenu-visible.png", "-contents/submenu-visible-hover.png" ]
    },
    settings: {
        prefix: "//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/pages-panel-settings/",
        imgs: [ "context-panel-corner.png", "link-status-error.png", "link-status-ok.png", "republish-arrow.png", "republish-arrow-hover.png", "republish-settings.png", "settings-corner.png", "share-facebook.png", "share-facebook-hover.png", "share-mail.png", "share-mail-hover.png", "share-twitter.png", "share-twitter-hover.png", "textured-panel-corner.png", "switcher-pass-texture.png" ]
    },
    "help-tour": {
        prefix: "//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/help-tour/",
        imgs: [ "close-video.png", "close-video-hover.png", "cursor.png", "icon-tour-hover.png", "icon-video-hover.png", "star.png" ]
    },
    "help-panel": {
        prefix: "//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/help-panel/",
        imgs: [ "mac_keyboard/single.png", "win_keyboard/single.png", "mac_keyboard/blank.png", "win_keyboard/blank.png" ]
    },
    "help-shortcuts": {
        prefix: "//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/help-panel/",
        imgs: [ "mac_keyboard/alt.png", "mac_keyboard/cmd.png", "mac_keyboard/shift_cmd.png", "arrow.png", "mac_keyboard/cmd_symbol.png", "win_keyboard/alt.png", "win_keyboard/ctrl.png", "win_keyboard/ctrl_shift.png" ]
    },
    templates: {
        prefix: "//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/",
        imgs: [ "pages-panel-templates/arrow.png", "pages-panel-templates/arrow-active.png", "pages-panel-templates/long.png", "pages-panel-templates/del.png", "pages-panel-templates/del-hover.png", "pages-panel-templates/plus.png", "pages-panel-templates/plus-hover.png", "helpers/template-center/search.png", "helpers/template-center/search-active.png", "helpers/template-center/back.png", "helpers/template-center/back-hover.png", "helpers/template-center/checkmark.png" ]
    },
    "panels-background": {
        prefix: "//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/widgetbar/background/",
        imgs: [ "delete.png", "color.svg", "mask.png", "opacity-handle-hover.png", "picture.svg", "flickr.svg", "unsplash.svg", "search.svg", "slideshow.svg", "upload.svg", "video_bg.svg", "video.svg", "vimeo.svg", "youtube.svg" ]
    },
    "panels-twitter": {
        prefix: "//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/panels/twitter/",
        imgs: [ "input-delete-hover.png", "input-target-hover.png", "input-go-hover.png", "point-hover.png", "point-active.png" ]
    },
    "panels-shape": {
        prefix: "//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/panels/shape/",
        imgs: [ "ellipse.png", "ellipse-active.png", "ellipse-hover.png", "icon-ellipse.png", "icon-line.png", "icon-polygon.png", "icon-rectangle.png", "line.png", "line-active.png", "line-hover.png", "polygon.png", "polygon-active.png", "polygon-hover.png", "rectangle.png", "rectangle-active.png", "rectangle-hover.png" ]
    },
    searchpanel: {
        prefix: "//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/search-panels/",
        imgs: [ "clear.png", "clear-hover.png", "back-icon-hover.png", "search-hover.png" ]
    },
    "searchpanel-bing": {
        prefix: "//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/search-panels/bing/",
        imgs: [ "arrow-hover.png", "monochrome-circle.png", "corner-color.png", "curr.png", "error.png", "logo-hover.png", "point-hover.png" ]
    },
    "searchpanel-flickr": {
        prefix: "//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/search-panels/flickr/",
        imgs: [ "connect-logo.png", "logo-hover.png", "error.png" ]
    },
    "searchpanel-unsplash": {
        prefix: "//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/search-panels/unsplash/",
        imgs: [ "connect.png", "logo-hover.png" ]
    },
    "searchpanel-youtube": {
        prefix: "//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/search-panels/youtube/",
        imgs: [ "connect-logo.png", "logo-hover.png" ]
    },
    "searchpanel-vimeo": {
        prefix: "//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/search-panels/vimeo/",
        imgs: [ "connect-logo.png", "logo-hover.png" ]
    },
    "searchpanel-videocommon": {
        prefix: "//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/search-panels/common-video/",
        imgs: [ "play.png", "play-hover.png", "user.png" ]
    },
    widgetbar: {
        prefix: "//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/widgetbar/",
        imgs: [ "redo-active.png", "redo-active-hover.png", "undo-active.png", "undo-active-hover.png", "arrow-left-hover.png", "arrow-right-hover.png", "dot.png", "ellipsis.png", "ellipsis-hover.png", "eye-back.png", "eye-back-hidden.png", "eye-back-hidden-hover.png", "eye-back-hover.png", "eye-front.png", "eye-front-hover.png", "i.png", "i-hover.png", "selection-point.png", "x.png", "x-hover.png" ]
    },
    widgetselector: {
        prefix: "//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/constructor/widget-selector/",
        imgs: []
    },
    "collector-menu": {
        prefix: "//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/common/user-menu/",
        imgs: [ "create-hover.png", "settings-hover.png", "logout-hover.png", "unlogged-hover.png" ]
    },
    "collector-maglist": {
        prefix: "//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/collector/mags-list/",
        imgs: [ "arrow.png", "arrow-hover.png", "close.png", "close-hover.png", "edit.png", "edit-hover.png", "private.png", "menu-bg.png", "menu-corner.png", "menu-panel-bg.png", "settings.png", "settings-hover.png", "updated.png", "updated-hover.png", "suspended.png", "suspended-hover.png", "popup-close.png", "popup-close-hover.png", "eye.png", "eye-hover.png" ]
    },
    "user-settings": {
        prefix: "//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/",
        imgs: [ "constructor/preloader-dark.png", "collector/profile-edit/checkmark_ok.png", "collector/profile-edit/checkmark_bad.png", "collector/profile-edit/del_userpic_hover.png", "collector/profile-edit/preloader_grey_arc.png", "collector/profile-edit/icon-profile-active.png", "collector/profile-edit/icon-password-active.png", "collector/profile-edit/icon-billing-active.png", "collector/profile-edit/close-hover.png", "collector/profile-edit-subscription/main-bg.jpg", "collector/profile-edit-subscription/new-publisher.png", "collector/profile-edit-subscription/stripe-hover.png", "collector/profile-edit-subscription/upper-block-bg.jpg", "collector/profile-edit-subscription/arrow-back-hover.png", "collector/profile-edit-subscription/arrow-discount.png", "collector/profile-edit-subscription/arrow-discount-white.png", "collector/profile-edit-subscription/radio-hover.png", "collector/profile-edit-subscription/radio-checked.png" ]
    },
    homepage: {
        prefix: "//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/homepage/",
        imgs: [ "menu/logo-black.png", "menu/logo-blue.png", "menu/logo-blue-light.png", "menu/logo-white.png", "tour/left-arrow-hover.png", "tour/popup-close-hover.png", "tour/right-arrow-hover.png", "tour/responsive-play-hover.png", "tour/top-categories-img1-hover.png", "tour/top-categories-img2-hover.png", "tour/top-categories-img3-hover.png", "tour/top-categories-img4-hover.png", "tour/top-categories-img5-hover.png" ]
    },
    "whats-new": {
        prefix: "//d1id5eheivyv24.cloudfront.net/2017-12-25-44490a28b099676f/img/common/whats-new/",
        imgs: [ "close-hover.png", "arrow-up-hover.png", "arrow-down-hover.png", "2017-09-20/bg-button-hover.png" ]
    }
};

!function(t, e) {
    "use strict";
    t.models.User = Backbone.Model.extend({
        userpic_sizes: [ 64, 96, 128, 192, 256 ],
        mergePermissionsList: [ "can_publish" ],
        idAttribute: "uri",
        url: "/api/me/",
        SSLDOMAIN_URL: "/api/user/domain/ssl",
        initialize: function(t, e) {
            _.bindAll(this);
        },
        store: function(t, e) {
            t.name && !/^\s$/.test(t.name) || (t.name = this.get("name")), t = this.changedAttributes(t), this.set(t), 
            this.validate(t) || $.ajax({
                type: "PUT",
                url: this.url,
                data: t,
                success: e && "function" == typeof e.success && e.success,
                error: e && "function" == typeof e.error && e.error
            });
        },
        deletePic: function() {
            var t = this;
            $.ajax({
                type: "DELETE",
                url: "/api/me/userpic/",
                success: function() {
                    t.set("pic", "");
                }
            });
        },
        validate: function(t) {
            if (void 0 !== t.name && _.isEmpty($.trim(t.name))) return "Name yourself";
        },
        getUserpic: function(e) {
            var i, n = this.get("pic");
            if (Modernizr.retina && (e *= 2), e = _.find(this.userpic_sizes, function(t) {
                return t >= e;
            }), n) return 0 == (n = t.utils.addFilenameComponent(n, e)).indexOf("https://") || t.common.isDownloadedSource ? n : (-1 == n.indexOf("/api/upload/") && (n = "/api/upload/" + n), 
            n);
            i = this.get("name").match(/^[a-z0-9]{1}/i);
            var o = t.common.isDownloadedSource ? "" : "/";
            return i ? o + "img/stubs/avatar/" + i[0].toLowerCase() + ".gif" : o + "img/stubs/avatar/" + e + ".gif";
        },
        getLink: function() {
            return t.common.customDomainProfile ? "/" : t.common.isDomainViewer ? t.constants.readymag_host + "/" + this.get("uri") : "/" + this.get("uri");
        },
        getWebsiteButified: function() {
            var e, i = {
                link: "",
                label: ""
            };
            return this.get("website") && ((e = t.utils.URLParts(this.get("website"))).protocol = e.protocol || "http://", 
            i.link = e.protocol + e.hostname + e.path, i.label = e.hostname), i;
        },
        getTwitterButified: function() {
            var e, i = {
                link: "",
                nick: ""
            };
            return this.get("twitter") && ((e = t.utils.URLParts(this.get("twitter"))).protocol || e.path ? (e.protocol = e.protocol || "http://", 
            i.nick = e.path.split("/")[1]) : (e.protocol = "http://", i.nick = e.hostname, e.path = "/" + i.nick, 
            e.hostname = "twitter.com"), i.link = e.protocol + e.hostname + e.path), i;
        },
        getFacebookButified: function() {
            var e, i = {
                link: "",
                nick: ""
            };
            if (this.get("fb")) {
                e = t.utils.URLParts(this.get("fb"));
                try {
                    -1 != e.path.indexOf("profile.php") ? i.nick = "facebook" : "pages" == e.path.split("/")[1] ? i.nick = decodeURIComponent(e.path.split("/")[2]) || "" : e.protocol || e.path ? i.nick = e.path.split("/")[1].split("?")[0] || "" : (i.nick = e.hostname, 
                    e.hostname = "facebook.com", e.path = "/" + i.nick), e.protocol = e.protocol || "http://", i.link = e.protocol + e.hostname + e.path;
                } catch (t) {
                    console.log("Error parsing FB URL: ", t);
                }
            }
            return i;
        },
        mergePermissions: function(t) {
            var e = _.clone(this.get("permissions"));
            this.set("permissions", t), _.each(this.mergePermissionsList, function(t) {
                this.attributes.permissions[t] = this.attributes.permissions[t] && e[t];
            }, this);
        },
        resendConfirmationEmail: function() {
            $.get("/api/user/confirm/resend");
        },
        isPublisher: function() {
            return this.get("permissions").can_publish;
        },
        checkDomain: function(t, e) {
            return $.ajax({
                type: "POST",
                url: "/api/checkdomain",
                data: {
                    type: "user",
                    domain: t
                },
                success: _.bind(function(i) {
                    this.set({
                        last_checked_domain: t
                    }, {
                        silent: !0
                    }), e && e(i);
                }, this),
                error: _.bind(function() {
                    console.error(arguments), e && e(null);
                }, this)
            });
        },
        mapDomain: function(t, e) {
            return e = e || {}, $.ajax({
                type: "POST",
                url: "/api/user/domain/",
                data: {
                    domain: t,
                    status: "on"
                },
                success: _.bind(function(i) {
                    this.set({
                        domain: t
                    }, {
                        silent: !0
                    }), e.success && e.success(i);
                }, this),
                error: _.bind(function(t) {
                    return t && t.status >= 500 ? e.error(null) : e.error && e.error({
                        badDNSSettings: !0
                    });
                }, this)
            });
        },
        unmapDomain: function(t) {
            return $.ajax({
                type: "POST",
                url: "/api/user/domain/",
                data: {
                    status: "off"
                },
                success: _.bind(function(e) {
                    this.unset("domain", {
                        silent: !0
                    }), t && t(e);
                }, this),
                error: _.bind(function() {
                    console.error(arguments), t && t(null);
                }, this)
            });
        },
        changeSSL: function(t, e, i) {
            return i = i || {}, $.ajax({
                type: "POST",
                url: this.SSLDOMAIN_URL,
                data: {
                    domain: t,
                    status: e ? "on" : "off"
                },
                success: _.bind(function(t) {
                    i.success && i.success(t);
                }, this),
                error: _.bind(function(t) {
                    return console.log(t), t && t.status >= 500 ? i.error(null) : i.error && i.error(t.responseJSON);
                }, this)
            });
        },
        isBetaTester: function() {
            return !!(this.get("permissions") || {}).can_use_beta_testing;
        }
    }), t.collections.Users = Backbone.Collection.extend({
        model: t.models.User
    }), t.models.UsersLoader = function() {
        this.allUsers = new t.collections.Users(), this.userMags = {}, this.userFolders = {}, _.bindAll(this);
    }, t.models.UsersLoader.prototype = {
        LOAD_URL: "/api/readymags/user/",
        loadByUsername: function(e) {
            if (t.common.customDomainProfile && this.allUsers.at(0)) {
                var i = this.allUsers.at(0), n = this.userMags[this.allUsers.at(0).get("uri")];
                return i.folders = this.userFolders[this.allUsers.at(0).get("uri")], e.success && e.success({
                    user: i,
                    mags: n
                });
            }
            var o = this.allUsers.find(function(t) {
                return t.get("uri").toLowerCase() == e.user_uri.toLowerCase();
            }), a = _.bind(function(t) {
                var i, n;
                if (!t.user) return e.success({
                    user: t
                });
                this.load(t, e.is_me), i = this.allUsers.get(t.user.uri), n = this.userMags[t.user.uri], i.folders = this.userFolders[t.user.uri], 
                e.success && e.success({
                    user: i,
                    mags: n
                });
            }, this);
            o && !e.force ? (n = this.userMags[o.get("uri")], o.folders = this.userFolders[o.get("uri")], e.success({
                user: o,
                mags: n
            })) : this.request(e.user_uri, {
                success: a,
                error: e.error
            });
        },
        load: function(e, i) {
            var n;
            if (!_.isEmpty(e)) {
                var o = e.user || e, a = e.mags, r = o.folders || [];
                if (o) {
                    n = o.uri, t.collections.FolderList && (this.userFolders[n] = new t.collections.FolderList(r, {
                        parse: !0
                    }), delete o.folders), this.allUsers.remove(n), this.allUsers.add(o), i && o.contributors && _.each(o.contributors, function(e) {
                        e.member && (e.member = new t.models.User(e.member));
                    });
                    var s = _.pick(o, "_id", "uri", "desc", "pic");
                    i && (s.isMe = i), _.each(a, function(t) {
                        t.user = _.clone(s);
                    }), t.collections.MagList && (this.userMags[n] = new t.collections.MagList(a, {
                        parse: !0
                    }), i && !_.isEmpty(a) && this.userMags[n].each(function(t) {
                        t.user.set("isMe", !0);
                    }));
                }
            }
        },
        loadShared: function(e) {
            _.isEmpty(e) || (this.sharedMags = {}, _.each(e, function(e) {
                var i = _.pick(e.user, "_id", "uri", "desc", "pic");
                _.each(e.mags, function(t) {
                    t.user = _.clone(i);
                }), this.sharedMags[e.user.uri.toLowerCase()] = {
                    user: new t.models.User(e.user),
                    mags: new t.collections.MagList(e.mags, {
                        parse: !0
                    })
                };
            }, this));
        },
        request: function(e, i) {
            t.common.customDomainProfile && (this.LOAD_URL = "/api/domain/readymags/user/", e = ""), i = i || {}, 
            this.abortLoading();
            i.success || $.noop;
            this.loadingXHR = $.ajax(_.extend(i, {
                type: "GET",
                url: this.LOAD_URL + e
            }));
        },
        abortLoading: function() {
            this.loadingXHR && this.loadingXHR.abort && this.loadingXHR.abort();
        }
    }, $(function() {
        t.data.usersLoader = new t.models.UsersLoader();
        var e = window.ServerData.me;
        t.data.usersLoader.load(e, !0), e ? (e = e.user || e).uri && (t.data.usersLoader.me = t.data.usersLoader.allUsers.get(e.uri)) : t.data.usersLoader.me = !1, 
        window.ServerData.mags && window.ServerData.mags.user && window.ServerData.mags.mags && (!t.data.usersLoader.me || t.data.usersLoader.me.get("uri") != window.ServerData.mags.user.uri) && t.data.usersLoader.load(window.ServerData.mags), 
        window.ServerData.shared && t.data.usersLoader.loadShared(window.ServerData.shared), _.isEmpty(ServerData.sharedError) || (t.data.usersLoader.sharedError = ServerData.sharedError);
    });
}(RM), function(t, e) {
    "use strict";
    t.classes.UserMenu = Backbone.View.extend({
        events: {
            "click .create-button": "createNewMag",
            "click .user-button .userpic": "onUserClick",
            "click .user-button .arrow": "triggerUserPopup",
            mouseleave: "setPopupTimeout",
            mouseenter: "resetPopupTimeout",
            "click .user-popup .user-block": "onUserClick",
            "click .user-popup .notifications-wrapper .verify-email span": "resendConfirmationEmail"
        },
        initialize: function(e) {
            _.bindAll(this), _.extend(this, e), this.template = t.templates["template-common-user-menu"], this.template_unlogged = t.templates["template-common-user-menu-unlogged"], 
            Modernizr.isdesktop || this.router && this.router.on("transitionStart", this.updateView);
        },
        show: function() {
            this.rendered || this.render(), this.$el.show();
        },
        hide: function() {
            this.rendered && this.$el.hide();
        },
        render: function() {
            preloadDesignImages("collector-menu"), t.common.isDomainViewer || (this.me ? this.$el.html(this.template({
                me: this.me,
                tp: this.tp,
                showUpgradeButton: Modernizr.isdesktop && !Modernizr.isboxversion && !(this.me.get("stripe") && "canceled" != this.me.get("stripe").subscription_status)
            })) : this.$el.html(this.template_unlogged({
                tp: this.tp
            })), this.rendered = !0);
        },
        createNewMag: function(e) {
            new t.classes.CreateMag({
                router: this.router,
                me: this.me,
                tp: "user-menu",
                currentFolderId: this.currentFolderId,
                sharedUser: this.sharedUser
            });
        },
        resendConfirmationEmail: function() {
            this.me.resendConfirmationEmail(), this.$(".user-popup .notifications-wrapper .verify-email").text("Please check your email.");
        },
        triggerUserPopup: function(t) {
            this.$(".collector-menu").toggleClass("user-popup-opened"), $(window).off("touchstart", this.onBodyClick), 
            this.$(".collector-menu").hasClass("user-popup-opened") && $(window).on("touchstart", this.onBodyClick);
        },
        closeUserPopup: function(t) {
            $(window).off("touchstart", this.onBodyClick), this.$(".collector-menu").removeClass("user-popup-opened");
        },
        onBodyClick: function(t) {
            $(t.target).closest(this.$el).length || this.closeUserPopup();
        },
        setPopupTimeout: function() {
            this.$(".collector-menu").hasClass("user-popup-opened") && (this.popupTimer = setTimeout(_.bind(function() {
                this.closeUserPopup();
            }, this), 500));
        },
        resetPopupTimeout: function() {
            clearTimeout(this.popupTimer);
        },
        onUserClick: function(t) {
            Modernizr.isdesktop ? this.closeUserPopup(t) : this.navigateToUser(t);
        },
        updateView: function(t) {
            (t = t || {}).currentFolderId ? this.currentFolderId = t.currentFolderId : this.currentFolderId = null, 
            t.sharedUser ? this.sharedUser = t.sharedUser : this.sharedUser = null, this.router && this.router.me && (this.router.currentView && this.router.currentView.hideMenu ? this.hide() : this.show());
        },
        navigateToUser: function(t) {
            this.router && (this.router.menuRoute($(t.currentTarget).attr("href")), t.preventDefault());
        },
        switchOn: function() {},
        switchOff: function() {}
    });
}(RM), function(t, e) {
    "use strict";
    t.classes.Alert = Backbone.View.extend({
        template: t.templates["template-common-alert"],
        events: {
            "click .button": "onButtonClick",
            click: "hideOnBgClick",
            "click .button.upgrade": "upgrade",
            "click .button.cancel": "hide",
            "click .button.close": "hide",
            "click .button.ok": "hide",
            "click .contact-link": "hide",
            "click .button.resend": "resendConfirmationEmail"
        },
        initialize: function(e) {
            _.bindAll(this), _.extend(this, e), this.opts = this.opts || {}, this.router = this.router || t.homepageRouter || t.collectorRouter || t.constructorRouter, 
            this.router && this.router.analytics && this.router.analytics.sendEvent("Alert Show", {
                label: this.alert_source,
                _alert_source: this.alert_source
            });
        },
        render: function() {
            this.setElement($(this.template({
                opts: this.opts
            }))), this.$parent && this.$parent.append(this.$el).addClass("visible"), _.delay(_.bind(function() {
                this.$el.addClass("show");
            }, this), 50), $("body").on("keyup", this.onBodyKeyUp), t.common.disableShortcuts.alert = !0;
        },
        hide: function() {
            delete t.common.disableShortcuts.alert, $("body").off("keyup", this.onBodyKeyUp), this.$el.removeClass("show").addClass("hide"), 
            _.delay(_.bind(function() {
                this.remove(), this.$parent && this.$parent.removeClass("visible");
            }, this), 400), this.trigger("hide", {
                lastButtonClicked: this.lastButtonClicked
            });
        },
        upgrade: function(e) {
            Modernizr.sessionstorage && window.sessionStorage.setItem("rm.accountUpgradeReturnUrl", window.location.pathname), 
            this.router && this.router.analytics && this.router.analytics.sendEvent("Alert Upgrade", {
                label: this.alert_source,
                _alert_source: this.alert_source
            }), 2 == e.which || e.metaKey || e.ctrlKey || this.router && this.router == t.collectorRouter && (this.hide(), 
            this.router.navigate("/settings/subscription/update", {
                trigger: !0
            }), e.preventDefault());
        },
        onBodyKeyUp: function(t) {
            27 == t.keyCode && (t.stopPropagation(), t.preventDefault(), this.hide());
        },
        hideOnBgClick: function(t) {
            $(t.target).closest(".panel").length || this.hide();
        },
        resendConfirmationEmail: function() {
            $.get("/api/user/confirm/resend"), this.hide();
        },
        onButtonClick: function(t) {
            var e = $(t.currentTarget).attr("data-type");
            this.lastButtonClicked = e;
        }
    });
}(RM), function(t, e) {
    "use strict";
    var i;
    t.classes.CreateMag = i = function(e) {
        if (_.bindAll(this), _.extend(this, e), !t.common.magCreationInProgress) if (this.analytics = this.router && this.router.analytics, 
        this.router ? this.router == t.viewerRouter ? this.routerName = "viewer" : this.router == t.collectorRouter ? this.routerName = "collector" : this.router == t.homepageRouter ? this.routerName = "homepage" : this.router == t.constructorRouter ? this.routerName = "constructor" : this.routerName = "unknown" : this.routerName = "error", 
        this.analytics && !this.noCreateRequestTracking && this.analytics.sendEvent("Create Mag Request", {
            _tp: this.tp + "_" + (this.templateID ? "template" : "blank") + "_" + this.routerName + "_" + (this.me ? "has-me" : "no-me"),
            _template_id: this.templateID
        }), Modernizr.isdesktop) if (Modernizr.msie || Modernizr.msie11) this.showIEPopupWarning(); else if (this.me) {
            var i = "function" == typeof this.me.get ? this.me.get("permissions") : this.me.permissions;
            i && i.can_create_mag ? this.innerCreateMag() : this.showCreatePopupWarning();
        } else this.showJoinForm(); else this.showMobilePopupWarning();
    }, i.prototype.innerCreateMag = function() {
        var e = {};
        this.analytics && this.analytics.sendEvent("Create Mag", {
            _tp: this.tp + "_" + (this.templateID ? "template" : "blank") + "_" + this.routerName,
            _template_id: this.templateID
        }), this.currentFolderId && (e.folder = this.currentFolderId), this.sharedUser && (e.user = this.sharedUser), 
        t.common.magCreationInProgress = !0, $.ajax({
            url: t.constants.readymag_auth_host + (this.templateID ? "/api/magFromTemplate/" + this.templateID : "/api/mag/"),
            type: "POST",
            data: e,
            success: _.bind(function(e) {
                "function" == typeof this.success && this.success(), t.common.magCreationInProgress = !1, window.location.href = t.constants.readymag_auth_host + "/edit/" + e.num_id + "/contents/";
            }, this),
            error: _.bind(function() {
                if ("function" == typeof this.error && this.error(), t.common.magCreationInProgress = !1, console.log(arguments), 
                alert("Creating project problem. Contact tech support, please: " + t.constants.SUPPORT_MAIL), this.me) {
                    var e = "function" == typeof this.me.get ? this.me.get("uri") : this.me.uri;
                    e && (window.location.href = t.constants.readymag_auth_host + "/" + e);
                }
            }, this)
        });
    }, i.prototype.showCreatePopupWarning = function() {
        if (t.classes.Alert) {
            new t.classes.Alert({
                $parent: $("body > .popups"),
                router: this.router,
                opts: {
                    type: "type-create"
                },
                alert_source: "create mag"
            }).render();
        }
    }, i.prototype.showMobilePopupWarning = function() {
        if (t.classes.Alert) {
            new t.classes.Alert({
                $parent: $("body > .popups"),
                router: this.router,
                opts: {
                    type: "type-switch-desktop-create"
                },
                alert_source: "create mag mobile"
            }).render();
        }
    }, i.prototype.showIEPopupWarning = function() {
        if (t.classes.Alert) {
            new t.classes.Alert({
                $parent: $("body > .popups"),
                router: this.router,
                opts: {
                    type: "type-browsers"
                }
            }).render();
        }
    }, i.prototype.showJoinForm = function() {
        var e = new t.classes.Login({
            router: this.router,
            useNavigate: !1,
            $container: $("body")
        });
        e.render(), e.$el.css("z-index", 9999), e.createMagParams = {
            templateID: this.templateID,
            tp: this.tp,
            noCreateRequestTracking: !0
        }, _.delay(_.bind(function() {
            e.switchTo("join"), e.show();
        }, this), 100);
    };
}(RM), function(t, e) {
    "use strict";
    t.classes.HomepageRouter = Backbone.Router.extend({
        routes: Modernizr.isboxversion ? {
            "login(/)": "loginRoute",
            "recover(/)": "recover",
            "recover/:code(/)": "reset",
            "*notFound": "navigateToLogin"
        } : {
            "(/)": "tour",
            "edu(/)": "edu",
            "pricing(/)": "pricing",
            "templates(/)": "templates",
            "explore(/)": "explore",
            "about(/)": "about",
            "login(/)": "loginRoute",
            "join(/)": "join",
            "recover(/)": "recover",
            "recover/:code(/)": "reset",
            "start-with-template/:templateID(/)": "startWithTemplate",
            "affiliate(/)": "affiliate",
            "inv/:code(/)": "affiliateRedirect"
        },
        constructor: function() {
            return Backbone.Router.apply(this, arguments), this;
        },
        initialize: function() {
            _.bindAll(this), this.userLoaded = !1, t.utils.loadLoggedUser(this.onLoadLoggedUser), this.on("route", this.onRoute), 
            Modernizr.isboxversion || (this.homepage = new t.classes.Homepage({
                router: this
            })), this.homepage && this.homepage.render($("body")), this.createLoginForm(), t.analytics = t.analytics || new t.classes.Analytics({
                router: this
            }), this.analytics = t.analytics;
        },
        createLoginForm: function() {
            this.login = new t.classes.Login({
                router: this,
                useNavigate: !0,
                $container: $("body"),
                disableAnimations: !!Modernizr.isphone
            }), this.login.on("shown", _.bind(function() {
                this.trigger("login-shown");
            }, this)), this.login.on("hidden", _.bind(function() {
                this.trigger("login-hidden");
            }, this));
        },
        onLoadLoggedUser: function(e) {
            this.userLoaded = !0, _.isEmpty(e) || (this.userModel = new t.models.User(e)), this.trigger("user_loaded"), 
            this.userModel && t.classes.UserMenu && !Modernizr.isphone && (this.menuView = new t.classes.UserMenu({
                el: $(".user-menu"),
                me: this.userModel,
                tp: "homepage",
                router: this
            }), this.menuView.show());
        },
        main: function() {
            this.homepage && this.homepage.switchTo("main"), this.lastUrl = Backbone.history.getFragment(), this.login && this.login.hide();
        },
        tour: function() {
            this.homepage && this.homepage.switchTo("tour"), this.lastUrl = Backbone.history.getFragment(), this.login && this.login.hide();
        },
        edu: function() {
            this.homepage && this.homepage.switchTo("edu"), this.lastUrl = Backbone.history.getFragment(), this.login && this.login.hide();
        },
        pricing: function() {
            this.homepage && this.homepage.switchTo("pricing"), this.lastUrl = Backbone.history.getFragment(), this.login && this.login.hide();
        },
        templates: function() {
            this.homepage && this.homepage.switchTo("templates"), this.lastUrl = Backbone.history.getFragment(), 
            this.login && this.login.hide();
        },
        explore: function() {
            this.homepage && this.homepage.switchTo("explore"), this.lastUrl = Backbone.history.getFragment(), this.login && this.login.hide();
        },
        about: function() {
            this.homepage && this.homepage.switchTo("about"), this.lastUrl = Backbone.history.getFragment(), this.login && this.login.hide();
        },
        affiliate: function() {
            this.homepage && this.homepage.switchTo("affiliate"), this.lastUrl = Backbone.history.getFragment(), 
            this.login && this.login.hide();
        },
        forceNavigate: function(t, e) {
            var i = Backbone.history.getFragment();
            this.navigate(t, e);
            if (i == Backbone.history.getFragment()) try {
                this[this.getCurrentRouteInfo().route]();
            } catch (t) {}
        },
        showLoginForm: function(t) {
            this.homepage && !this.homepage.currentVisiblePage && this.homepage.switchTo("main"), this.login.rendered || this.login.render(), 
            this.login.switchTo(t), this.login.show(this.lastUrl);
        },
        loginRoute: function() {
            if (!this.userLoaded) return this.once("user_loaded", this.loginRoute);
            if (this.userModel) {
                var e = t.utils.queryUrlGetParam("redirect");
                window.location.href = e || t.constants.readymag_auth_host + "/" + this.userModel.get("uri") + "/";
            } else this.showLoginForm("login");
        },
        navigateToLogin: function() {
            this.navigate("login", {
                replace: !0,
                trigger: !0
            });
        },
        join: function() {
            if (!this.userLoaded) return this.once("user_loaded", this.join);
            if (this.userModel) {
                var e = t.utils.queryUrlGetParam("redirect");
                window.location.href = e || t.constants.readymag_auth_host + "/" + this.userModel.get("uri") + "/";
            } else this.showLoginForm("join");
        },
        recover: function() {
            this.showLoginForm("recover");
        },
        reset: function() {
            this.showLoginForm("reset");
        },
        startWithTemplate: function(t) {
            this.homepage && !this.homepage.currentVisiblePage && this.homepage.switchTo("main"), this.createMagFromTemplate("direct", t);
        },
        affiliateRedirect: function() {
            this.navigate("/", {
                trigger: !0
            });
        },
        createMagFromTemplate: function(e, i) {
            new t.classes.CreateMag({
                router: this,
                me: this.userModel,
                tp: e,
                templateID: i
            });
        },
        onRoute: function(t) {
            this.openRoute = this.entryRoute || t, this.setDocumentTitle(t);
        },
        setDocumentTitle: function(t) {
            var e = {
                main: "Readymag — Design anything on the web",
                tour: "Readymag — Design anything on the web",
                edu: "Readymag • Education",
                pricing: "Readymag • Pricing",
                templates: "Readymag • Templates",
                explore: "Readymag • Explore",
                about: "Readymag • About",
                login: "Readymag • Login",
                join: "Readymag • Join",
                recover: "Readymag • Recover Password",
                reset: "Readymag • Reset Password"
            };
            e[t] && (window.document.title = e[t]);
        },
        getAnalyticsDimensions: function() {
            return {
                magId: void 0,
                magCreatorId: void 0,
                pageType: "homepage",
                userId: this.userModel && this.userModel.get("_id")
            };
        },
        updateWindowCaptions: function() {
            this.setDocumentTitle(this.getCurrentRouteInfo().route);
        },
        getCurrentRouteInfo: function() {
            var t, e = this, i = Backbone.history.fragment, n = _.pairs(e.routes), o = null, a = null;
            return (t = _.find(n, function(t) {
                return (o = _.isRegExp(t[0]) ? t[0] : e._routeToRegExp(t[0])).test(i);
            })) && (a = e._extractParameters(o, i), o = t[1]), {
                route: o,
                fragment: i,
                params: a
            };
        },
        createLoginViewForIframe: function(e, i, n) {
            new t.classes.Login({
                useNavigate: !1,
                $node: $(e),
                router: this,
                joinCallback: i,
                errorMessages: n
            }).render();
        }
    }), $(function() {
        Modernizr.isdesktop || window.FastClick.attach(document.body);
    });
}(RM), function(t, e) {
    "use strict";
    t.classes.Homepage = Backbone.View.extend({
        events: {
            "blur input": "onInputBlur",
            keyup: "onBodyKeyUp",
            "click .link": "link",
            "click .blank-link": "blank_link",
            "click .mailto-link": "blank_link",
            "click .template-link": "onTemplateLinkClick",
            "click .affiliate-button:not(.link)": "onAffiliateButtonClick",
            "touchstart .tour-wrapper .top-block.content-block .mags-list": "onSliderSwipeStart",
            "click .tour-wrapper .top-block.content-block .arrows-wrapper .left-arrow": "onTourMagsScrollBackward",
            "click .tour-wrapper .top-block.content-block .arrows-wrapper .right-arrow": "onTourMagsScrollForward",
            "click .tour-wrapper .top-block.content-block .mags-list .mag a": "onTourMagsLinkClick",
            "click .tour-wrapper .responsive-block.content-block .open-video": "openPopupVideo",
            "click .popup-video .close": "closePopupVideo",
            "click .tour-wrapper .features-block.content-block .open-gallery": "openPopupGallery",
            "click .tour-wrapper .features-block.content-block .feature.fonts .icon": "openPopupGallery",
            "click .popup-gallery .close": "closePopupGallery",
            "click .tour-wrapper .others-block.content-block .open-embed": "openPopupEmbed",
            "click .popup-embed .close": "closePopupEmbed",
            "click .tour-wrapper .top-block.content-block .categories-wrapper .category": "onCategoryClick",
            "click .tour-wrapper .feedback-block.content-block .peoples-wrapper .people": "onPeopleClick",
            "touchstart .pricing-wrapper .tarifs-block.content-block .tarifs-list": "onSliderSwipeStart",
            "click .pricing-wrapper .tarifs-block.content-block .switcher": "onTarifPeriodSwitch",
            "click .templates-wrapper .templates-block.content-block .templates-list .template": "onTemplateClick",
            "click .templates-wrapper .templates-block.content-block": "onTemplatesBlockClick",
            "click .menu .menu-button": "toggleMenu",
            "touchstart .popup-menu": "onMenuTouchStart",
            "touchmove .popup-menu": "onMenuTouchMove",
            "mousewheel .popups": function(t) {
                t.preventDefault();
            },
            "click .edu-wrapper .send-request:not(.disabled):not(.uploading)": "onSendEduRequestClick",
            "input .edu-wrapper .edu-email": "validateEduForm",
            "click .affiliate-wrapper .button.fake": "onAffiliateFakeButtonClick",
            "click .affiliate-wrapper .button.signup": "onAffiliateSignupButtonClick"
        },
        MAG_WIDTH: 268,
        MAGS_SIZES: [ {
            ww: 320,
            width: 320,
            marginOuter: 26,
            marginInner: 8
        }, {
            ww: 1023,
            width: 1023,
            marginOuter: 78,
            marginInner: 24
        }, {
            ww: 1024,
            width: 872,
            marginOuter: 12,
            marginInner: 22
        }, {
            ww: 1280,
            width: 960,
            marginOuter: 32,
            marginInner: 46
        } ],
        PEOPLES_SIZES: [ {
            ww: 320,
            width: 320,
            margin: 20,
            peopleWidth: 232
        }, {
            ww: 767,
            width: 767,
            margin: 32,
            peopleWidth: 245
        }, {
            ww: 768,
            width: 736,
            margin: 16,
            peopleWidth: 240
        }, {
            ww: 1024,
            width: 992,
            margin: 62,
            peopleWidth: 310
        }, {
            ww: 1056,
            width: 1024,
            margin: 64,
            peopleWidth: 320
        } ],
        TARIFS_SIZES: [ {
            ww: 320,
            width: 320,
            tarifWidth: 240,
            marginOuter: 20,
            marginInner: 8
        }, {
            ww: 1024,
            width: 1024,
            tarifWidth: 240,
            marginOuter: 20,
            marginInner: 8
        } ],
        PRICES: {
            monthly: {
                creator: 20,
                professional: 80
            },
            annually: {
                creator: 16,
                professional: 64
            }
        },
        initialize: function(t) {
            _.bindAll(this), _.extend(this, t), this.animationSpeed = 0, Modernizr.isdesktop || ($("body").scrollTop(100), 
            $(window).on("orientationchange", function() {
                $("body").scrollTop(100);
            })), Modernizr.isdesktop && _.delay(_.bind(function() {
                this.animationSpeed = 300;
            }, this), 100), this.loadVisibleImages.__debounced = _.debounce(this.loadVisibleImages, 50);
        },
        render: function(t) {
            this.setElement(t), this.$scrollBox = Modernizr.isdesktop ? $(window) : $("body"), this.$scrollBoxAnimate = $("body, html"), 
            this.router.on("login-shown", _.bind(function() {
                this.$(".menu").addClass("login-shown"), this.hideMenu(), this.loginShown = !0, this.autoplayCodeVideo();
            }, this)), this.router.on("login-hidden", _.bind(function() {
                this.$(".menu").removeClass("login-shown"), this.loginShown = !1, this.autoplayCodeVideo();
            }, this)), this.router.on("user_loaded", this.onUserLoaded), $(window).bind("resize", this.onResize), 
            $(window).bind("scroll", this.onScroll), this.onScroll(), _.defer(this.onResize), this.nextMacbookImage(), 
            setInterval(this.nextMacbookImage, 4e3), setTimeout(this.resizeMagsCats, 1500), this.$("#edu-uploader").fileupload({
                dataType: "json",
                fileInput: this.$("#edu-uploader"),
                paramName: "edu-uploader",
                singleFileUploads: !0,
                acceptFileTypes: /(\.|\/)(gif|jpe?g|png|tiff?)$/i,
                pasteZone: null,
                start: this.showEduUploadPreloader,
                done: this.showEduSuccessMessage,
                fail: this.showEduErrorMessage,
                always: this.hideEduUploadPreloader,
                add: function(t, e) {
                    this.eduUploadData = e, this.$(".edu-wrapper .fake-file").val(e.files[0].name), this.validateEduForm(), 
                    this.hideEduMessages();
                }.bind(this)
            }), preloadDesignImages("homepage");
        },
        onUserLoaded: function() {
            if (this.router.userModel) {
                $("body").removeClass("not-logged").addClass("logged"), this.$(".menu .go-user").attr("href", t.constants.readymag_auth_host + this.router.userModel.getLink()), 
                this.$(".popup-menu .go-user").attr("href", t.constants.readymag_auth_host + this.router.userModel.getLink()), 
                this.$(".popup-menu .go-user .userpic").css("background-image", 'url("' + this.router.userModel.getUserpic(128) + '")'), 
                this.$(".popup-menu .go-user .username").text(this.router.userModel.get("name")), this.$(".pricing-wrapper .archive-wrapper").toggle(!!this.router.userModel.get("plan_is_archive")), 
                this.$(".pricing-wrapper .archive-wrapper .plan-name").text(this.router.userModel.get("plan_name")), 
                this.router.userModel.get("plan_is_archive") || this.$(".pricing-wrapper .tarifs-block.content-block .tarifs-wrapper").addClass("plan-level-" + (this.router.userModel.get("plan_level") || "beginner"));
                var e = this.router.userModel.get("affiliate_my_id");
                this.$(".affiliate-wrapper").toggleClass("has-terms", Modernizr.isdesktop && !e), this.$(".affiliate-wrapper .ideas-block .ideas .button-wrapper .button.fake").text(e ? "My Affiliate Program" : "Start Now"), 
                this.$(".affiliate-wrapper .ideas-block .ideas .button-wrapper a.button").removeClass("link").toggleClass("is-affiliate", e).toggleClass("signup", !e).attr("href", "/settings/affiliate").text(e ? "My Affiliate Program" : "Start Now"), 
                this.$(".affiliate-wrapper .faq-block .button-wrapper .button.fake").toggleClass("is-affiliate", e).text(e ? "My Affiliate Program" : "Start Now"), 
                this.$(".affiliate-wrapper .faq-block .button-wrapper a.button").removeClass("link").toggleClass("is-affiliate", e).toggleClass("signup", !e).attr("href", "/settings/affiliate").text(e ? "My Affiliate Program" : "Start Now"), 
                e && (this.$(".affiliate-wrapper .ideas-block .ideas .terms-wrapper").remove(), this.$(".affiliate-wrapper .faq-block .become").remove(), 
                this.$(".affiliate-wrapper .faq-block .terms-wrapper").remove());
            }
        },
        onAffiliateButtonClick: function(t) {
            if (this.sendHomepageEvent($(t.currentTarget)), 2 != t.which && !t.metaKey && !t.ctrlKey) {
                var e = $(t.currentTarget).attr("href");
                if (!e) return !1;
                setTimeout(_.bind(function() {
                    window.location.href = e;
                }, this), 300), t.preventDefault();
            }
        },
        link: function(t) {
            if (this.sendHomepageEvent($(t.currentTarget)), 2 != t.which && !t.metaKey && !t.ctrlKey) {
                var e = $(t.currentTarget).attr("href");
                if (!e) return !1;
                this.router.forceNavigate(e, {
                    trigger: !0
                }), t.preventDefault();
            }
        },
        blank_link: function(t) {
            if (this.sendHomepageEvent($(t.currentTarget)), 2 != t.which && !t.metaKey && !t.ctrlKey) {
                return !!$(t.currentTarget).attr("href") && void 0;
            }
        },
        onTemplateLinkClick: function(t) {
            if (2 != t.which && !t.metaKey && !t.ctrlKey) {
                var e = $(t.currentTarget), i = $.trim(e.attr("href")).match(/\/start\-with\-template\/(\d+)$/i), n = i && i[1];
                n && (t.preventDefault(), this.router.createMagFromTemplate("template-link", n));
            }
        },
        nextMacbookImage: function() {
            var t = this.$(".tour-wrapper .top-block.content-block .macbook .image").length, e = void 0 === this.curMacbookImage ? -1 : this.curMacbookImage, i = (e + 1) % t, n = (i + 1) % t, o = this.$(".tour-wrapper .top-block.content-block .macbook .image");
            this.curMacbookImage = i, o.eq(e).fadeOut(700), o.eq(i).fadeIn(700).removeClass("unloaded"), o.eq(n).removeClass("unloaded");
        },
        onBodyKeyUp: function(t) {
            27 == t.keyCode && (this.closePopupVideo(), this.closePopupGallery(), this.closePopupEmbed());
        },
        switchTo: function(t) {
            this.hideMenu(), this.$(".page-section").stop(!0, !1), this.$(".menu .link").add(".footer .link").removeClass("active"), 
            this.$(".menu .link.go-" + t).add(".footer .link.go-" + t).addClass("active");
            var e = this.$("." + t + "-wrapper"), i = e.siblings(".page-section:visible");
            e.removeClass("unloaded"), this.currentVisiblePage == t ? this.$scrollBoxAnimate.animate({
                scrollTop: 0
            }, this.animationSpeed) : (i.length || (i = e), i.fadeOut(this.animationSpeed, _.bind(function() {
                e.fadeIn(this.animationSpeed), this.$(".footer").show(0), this.currentVisiblePage = t, this.onResize(), 
                this.$scrollBox.scrollTop(0), "about" == t && this.initSocials(), "tour" == t && this.insertCodeVideo(), 
                this.autoplayCodeVideo(), this.setMenuState();
            }, this)));
        },
        setMenuState: function() {
            var t = this.currentVisiblePage;
            this.$(".menu").removeClass("hide-unloaded").toggleClass("white-theme", "main" == t || "explore" == t).toggleClass("disable-fixed", "main" == t);
        },
        initSocials: function() {
            this.socialsInitialized || (setTimeout(_.bind(function() {
                !function(t, e, i) {
                    var n, o = t.getElementsByTagName("script")[0], a = /^http:/.test(t.location) ? "http" : "https";
                    t.getElementById("twitter-wjs") || ((n = t.createElement("script")).id = "twitter-wjs", n.src = a + "://platform.twitter.com/widgets.js", 
                    o.parentNode.insertBefore(n, o));
                }(document), function(e, i, n) {
                    var o, a = e.getElementsByTagName("script")[0];
                    e.getElementById("facebook-jssdk") || ((o = e.createElement("script")).id = "facebook-jssdk", o.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=" + t.constants.FACEBOOK_APP_ID + "&version=v2.0", 
                    a.parentNode.insertBefore(o, a));
                }(document);
            }, this), 200), this.socialsInitialized = !0);
        },
        insertCodeVideo: function() {
            if (!this.codeVideoPlayer) {
                this.$(".tour-wrapper .constructor-block.content-block .video").html('<iframe id="code_video" src="https://player.vimeo.com/video/109437815?wmode=opaque&api=1&player_id=code_video&title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff&amp;loop=1" width="100%" height="100%" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'), 
                this.codeVideoPlayer = new n(this.$("#code_video")[0], {
                    ready: this.autoplayCodeVideo
                });
            }
        },
        autoplayCodeVideo: function() {
            if (this.codeVideoPlayer && this.codeVideoPlayer.isReady) {
                if ("tour" != this.currentVisiblePage || this.loginShown) return void this.codeVideoPlayer.pause();
                var t = this.$(".tour-wrapper .constructor-block.content-block .video"), e = t.offset().top - this.$scrollBox.scrollTop(), i = t.outerHeight(), n = e > 0 && e + i < $(window).height();
                Modernizr.isdesktop && n && this.codeVideoPlayer.play();
            }
        },
        openPopupVideo: function() {
            if (this.sendHomepageEvent("Start viewport quick demo"), !this.popupVideoPlayer) {
                this.$(".popup-video .center-block").html('<iframe id="popup_video" src="https://player.vimeo.com/video/91784965?wmode=opaque&api=1&player_id=popup_video&title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff" width="100%" height="100%" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'), 
                this.popupVideoPlayer = new n(this.$("#popup_video")[0], {
                    ready: this.autoplayPopupVideo
                });
            }
            this.popupVideoVisible = !0, this.$(".popup-video").fadeIn(300), this.resizePopupVideo(), this.autoplayPopupVideo();
        },
        closePopupVideo: function() {
            this.popupVideoVisible && (this.$(".popup-video").fadeOut(300), this.popupVideoPlayer && this.popupVideoPlayer.isReady && (this.popupVideoPlayer.getCurrentTime(_.bind(function(t) {
                this.sendHomepageEvent("Close viewport quick demo", Math.round(t));
            }, this)), this.popupVideoPlayer.pause()), this.popupVideoVisible = !1);
        },
        autoplayPopupVideo: function() {
            Modernizr.isdesktop && this.popupVideoPlayer && this.popupVideoPlayer.isReady && this.popupVideoPlayer.notPlayedYet && this.popupVideoVisible && this.popupVideoPlayer.play();
        },
        openPopupGallery: function() {
            this.popupGalleryVisible = !0, this.$(".popup-gallery").fadeIn(300), this.resizePopupGallery(), this.sendHomepageEvent("Open fonts gallery"), 
            this.tourPopupGallery = new i({
                $gallery: this.$(".popup-gallery .gallery"),
                $points: this.$(".popup-gallery .gallery-points"),
                $left: this.$(".popup-gallery .left-arrow"),
                $right: this.$(".popup-gallery .right-arrow"),
                continuous: !0,
                auto: null
            }), this.$(".popup-gallery *").removeClass("unloaded");
        },
        closePopupGallery: function() {
            this.popupGalleryVisible && (this.$(".popup-gallery").fadeOut(300), this.popupGalleryVisible = !1);
        },
        openPopupEmbed: function() {
            this.popupEmbedVisible = !0, this.$(".popup-embed").fadeIn(300), this.resizePopupEmbed();
        },
        closePopupEmbed: function() {
            this.popupEmbedVisible && (this.$(".popup-embed").fadeOut(300), this.popupEmbedVisible = !1);
        },
        onCategoryClick: function(t) {
            var e = $(t.currentTarget);
            e.addClass("active").siblings().removeClass("active"), this.sendHomepageEvent("Explore tour examples", e.attr("data-tp")), 
            this.$('.tour-wrapper .top-block .mags-list[data-tp="' + e.attr("data-tp") + '"]').addClass("active").removeClass("unloaded").siblings().removeClass("active"), 
            this.resizeMagsCats({
                animation: !0
            }), this.tourMagsCheckArrows();
        },
        onPeopleClick: function(t) {
            var e = $(t.currentTarget);
            "A" != t.target.tagName && (this.sendHomepageEvent("Toggle feedback slider", e.attr("data-tp")), e.addClass("active").siblings().removeClass("active"), 
            this.$('.tour-wrapper .feedback-block .quotes-wrapper .quote[data-tp="' + e.attr("data-tp") + '"]').addClass("active").siblings().removeClass("active"), 
            this.resizePeoples({
                animation: !0
            }));
        },
        onTemplateClick: function(t) {
            if (!Modernizr.isdesktop) {
                var e = $(t.currentTarget);
                $(t.target).is("a") || e.toggleClass("active").siblings(".template").removeClass("active");
            }
        },
        onTemplatesBlockClick: function(t) {
            Modernizr.isdesktop || $(t.target).closest(".template").length || this.$(".templates-wrapper .templates-block.content-block .templates-list .template").removeClass("active");
        },
        onResize: function() {
            this.$(".main-wrapper .top-block").height($(window).height()), this.resizePopupVideo(), this.resizePopupGallery(), 
            this.resizePopupEmbed(), this.resizeMagsCats(), this.resizePeoples(), this.resizeTarifs(), this.autoplayCodeVideo(), 
            this.loadVisibleImages.__debounced();
        },
        onScroll: function() {
            this.$(".menu").toggleClass("scrolled", !!(this.$scrollBox.scrollTop() > 0 && "main" != this.currentVisiblePage && this.currentVisiblePage)), 
            this.autoplayCodeVideo(), this.loadVisibleImages.__debounced();
        },
        loadVisibleImages: function() {
            function t(t, o) {
                e.currentVisiblePage == t && e.$(o).each(function() {
                    var t = $(this), e = t.height(), o = t.offset().top;
                    o + e > i - n && o < n + i + n && t.removeClass("unloaded");
                });
            }
            var e = this, i = e.$scrollBox.scrollTop(), n = e.$scrollBox.height();
            t("explore", ".explore-wrapper .featured-block.content-block .featured-wrapper > div.unloaded"), t("about", ".about-wrapper .team-block.content-block .team-wrapper > div.unloaded"), 
            t("templates", ".templates-wrapper .templates-block.content-block .templates-list > div.unloaded");
        },
        resizePopupVideo: function() {
            this.popupVideoVisible && this.resizePopupCenterBlock(this.$(".popup-video"));
        },
        resizePopupGallery: function() {
            this.popupGalleryVisible && this.resizePopupCenterBlock(this.$(".popup-gallery")), this.tourPopupGallery && this.tourPopupGallery.setup();
        },
        resizePopupEmbed: function() {
            if (this.popupEmbedVisible) {
                var t = this.$(".popup-embed"), e = t.find(".embed"), i = t.width(), n = t.height(), o = i < 632 || n < 536;
                e.toggleClass("small", o);
            }
        },
        resizePopupCenterBlock: function(t) {
            var e = t.find(".center-block"), i = t.width(), n = t.height(), o = e.attr("data-max-w") - 0, a = e.attr("data-max-h") - 0, r = e.attr("data-padding") - 0, s = r * Math.min(1.5 * n / a, 1), l = r * Math.min(i / o, 1), c = Math.min(i - 2 * l, o), d = Math.min(n - 2 * s, a);
            o / a < c / d ? c = d * o / a : d = c * a / o;
            for (var p = (n - d) / 2, u = 0, h = (i - c) / 2; p < 60 && h < 60; ) p = (n - (d *= .99)) / 2, h = (i - (c *= .99)) / 2, 
            u++;
            e.css({
                right: Math.round(h),
                top: Math.round(p),
                width: Math.round(c),
                height: Math.round(d)
            });
        },
        resizeMagsCats: function(t) {
            function e(t, e, i) {
                for (var n = e.marginOuter + t.MAG_WIDTH / 2 - t.catsWidths[0] / 2, o = e.width - n, a = t.catsWidths[0], r = 0, s = 0, l = (t.catsWidths[0] - t.catsWidths[i]) / 2, c = e.width - 2 * (n + l) - t.catsWidths[i], d = t.catsWidths.length, p = 1; p < d; p++) (o - a - t.catsWidths[p] / 2) / p > 32 && (r = (o - a - t.catsWidths[p] / 2) / p), 
                p == i && (s = a), a += t.catsWidths[p];
                return s += r * i - l, s -= c * (i / (d - 1)), {
                    total: a,
                    shiftToActive: s,
                    cnt: d,
                    margin: n,
                    margins: r,
                    diff: l
                };
            }
            t = t || {};
            var i = [];
            this.$(".tour-wrapper .top-block.content-block .categories-wrapper .category").each(function() {
                i.push($(this).width());
            }), this.catsWidths = i;
            var n = this.$(".tour-wrapper .top-block.content-block .mags-block"), o = $(".arrows-wrapper", n), a = n.width(), r = this.$(".tour-wrapper .top-block.content-block .categories-wrapper"), s = $(".categories-list", r), l = {}, c = this.MAGS_SIZES;
            a = Math.min(c[c.length - 1].ww, a), a = Math.max(c[0].ww, a);
            for (var d = 0; d < c.length && !(c[d].ww >= a); d++) ;
            if (l = _.clone(c[d]), a > c[0].ww) {
                var p = (a - c[d - 1].ww) / (c[d].ww - c[d - 1].ww);
                l.width = Math.ceil(c[d - 1].width + (c[d].width - c[d - 1].width) * p), l.marginOuter = Math.ceil(c[d - 1].marginOuter + (c[d].marginOuter - c[d - 1].marginOuter) * p), 
                l.marginInner = 2 * Math.ceil((c[d - 1].marginInner + (c[d].marginInner - c[d - 1].marginInner) * p) / 2);
            }
            var u = Math.max(1, Math.floor((l.marginInner + l.width - 2 * l.marginOuter) / (this.MAG_WIDTH + l.marginInner)));
            if (a >= 1024 ? u = 3 : l.marginOuter = Math.ceil(l.width - u * (this.MAG_WIDTH + l.marginInner) + l.marginInner) / 2, 
            a >= 768) r.width(l.width - 2 * l.marginOuter), s.width("100%"), s.find(".category:first-child").css("margin-left", 0), 
            s.find(".category:last-child").css("margin-right", 0), r.stop().scrollLeft(0); else {
                r.width(l.width), s.width("100%");
                var h = e(this, l, s.find(".category.active").index()), g = e(this, l, s.find(".category:last-child").index());
                s.width(h.total + (h.cnt - 1) * h.margins + 2 * h.margin + g.diff), s.find(".category:first-child").css("margin-left", h.margin + "px"), 
                s.find(".category:last-child").css("margin-right", h.margin + g.diff + "px"), t.animation ? r.stop().animate({
                    scrollLeft: h.shiftToActive
                }, 300) : r.stop().scrollLeft(h.shiftToActive);
            }
            var m = $(".mags-wrapper", n), f = $(".mags-list", m), v = this;
            m.width(l.width), o.css({
                width: l.width,
                "margin-left": 2 * -Math.round(l.width / 4)
            }), f.each(function() {
                var t = $(this), e = $(".mag", t), i = e.length * (v.MAG_WIDTH + l.marginInner) - l.marginInner + 2 * l.marginOuter, n = Math.ceil(l.marginInner / 2), o = v.MAG_WIDTH + 2 * n, a = (t.attr("data-shift") || 0) - 0, r = i - l.width;
                t.width(i).attr("data-max", r).attr("data-step", u * o).attr("data-item-width", o), v.sliderShift(t, -Math.min(a * o, r), !1), 
                e.css("margin", "0 " + n + "px"), e.eq(0).css("margin-left", l.marginOuter + "px"), e.eq(-1).css("margin-right", l.marginOuter + "px");
            });
        },
        resizePeoples: function(t) {
            t = t || {};
            var e = this.$(".tour-wrapper .feedback-block.content-block .peoples-block").width(), i = this.$(".tour-wrapper .feedback-block.content-block .peoples-wrapper"), n = $(".peoples-list", i), o = {}, a = this.PEOPLES_SIZES, r = n.find(".people").length, s = n.find(".people.active").index();
            e = Math.min(a[a.length - 1].ww, e), e = Math.max(a[0].ww, e);
            for (var l = 0; l < a.length && !(a[l].ww >= e); l++) ;
            if (o = _.clone(a[l]), e > a[0].ww) {
                var c = (e - a[l - 1].ww) / (a[l].ww - a[l - 1].ww);
                o.width = Math.ceil(a[l - 1].width + (a[l].width - a[l - 1].width) * c), o.margin = Math.ceil(a[l - 1].margin + (a[l].margin - a[l - 1].margin) * c), 
                o.peopleWidth = Math.floor(a[l - 1].peopleWidth + (a[l].peopleWidth - a[l - 1].peopleWidth) * c);
            }
            var d = Math.max(1, Math.floor((o.width - o.margin) / o.peopleWidth));
            if (e >= 1024 ? d = 3 : o.peopleWidth = Math.floor((o.width - o.margin - (d < r ? 68 : 0)) / d), i.width(o.width), 
            n.width(o.margin + r * o.peopleWidth), n.find(".people:first-child").css("margin-left", o.margin), n.find(".people").css("width", o.peopleWidth), 
            n.find(".corner").css("left", s * o.peopleWidth + o.margin), e >= 768) i.stop().scrollLeft(0); else {
                var p = s * o.peopleWidth;
                t.animation ? i.stop().animate({
                    scrollLeft: p
                }, 300) : i.stop().scrollLeft(p);
            }
        },
        resizeTarifs: function(t) {
            t = t || {};
            var e = this.$(".pricing-wrapper .tarifs-block"), i = e.width(), n = {}, o = this.TARIFS_SIZES;
            if (0 != i) {
                i = Math.min(o[o.length - 1].ww, i), i = Math.max(o[0].ww, i);
                for (var a = 0; a < o.length && !(o[a].ww >= i); a++) ;
                if (n = _.clone(o[a]), i > o[0].ww) {
                    var r = (i - o[a - 1].ww) / (o[a].ww - o[a - 1].ww);
                    n.width = Math.ceil(o[a - 1].width + (o[a].width - o[a - 1].width) * r), n.tarifWidth = Math.ceil(o[a - 1].tarifWidth + (o[a].tarifWidth - o[a - 1].tarifWidth) * r), 
                    n.marginOuter = Math.ceil(o[a - 1].marginOuter + (o[a].marginOuter - o[a - 1].marginOuter) * r), n.marginInner = 2 * Math.ceil((o[a - 1].marginInner + (o[a].marginInner - o[a - 1].marginInner) * r) / 2);
                }
                var s = Math.max(1, Math.floor((n.marginInner + n.width - 2 * n.marginOuter) / (n.tarifWidth + n.marginInner)));
                i >= 960 ? s = 4 : n.marginOuter = Math.ceil(n.width - s * (n.tarifWidth + n.marginInner) + n.marginInner) / 2;
                var l = $(".tarifs-wrapper", e), c = $(".tarifs-list", l);
                l.width(n.width);
                var d = $(".tarif", c), p = d.length * (n.tarifWidth + n.marginInner) - n.marginInner + 2 * n.marginOuter, u = Math.ceil(n.marginInner / 2), h = n.tarifWidth + 2 * u, g = (c.attr("data-shift") || 0) - 0, m = p - n.width;
                $(".pricing-wrapper .archive-wrapper").css("width", s * (n.tarifWidth + n.marginInner) - n.marginInner + 20 + 20), 
                c.width(p).attr("data-max", m).attr("data-step", s * h).attr("data-item-width", h), this.sliderShift(c, -Math.min(g * h, m), !1), 
                d.css({
                    margin: "0 " + u + "px",
                    width: n.tarifWidth
                }), d.eq(0).css("margin-left", n.marginOuter + "px"), d.eq(-1).css("margin-right", n.marginOuter + "px");
            }
        },
        onTourMagsLinkClick: function(t) {
            this.onSliderWasSwipe && t.preventDefault();
        },
        onSliderSwipeStart: function(t) {
            this.onSliderWasSwipe = !1;
            var e = t.currentTarget, i = $(e), n = (n = e.style.cssText.match(/translate3d\((.*?)px.*\)/)) && n.length ? -n[1] : 0, o = (t = t.originalEvent).touches[0];
            this.sliderIniTouch = {
                x: o.pageX,
                y: o.pageY
            }, this.sliderIniTouch.$wrapper = i, this.sliderIniTouch.initialX = n, this.sliderIniTouch.step = i.attr("data-step") - 0, 
            this.sliderIniTouch.startTime = +new Date(), this.sliderIniTouch.maxShift = i.attr("data-max") - 0, 
            this.sliderIniTouch.magWidth = i.attr("data-item-width") - 0, this.isScrolling = void 0, this.sliderSwipeShift = 0, 
            0 != this.sliderIniTouch.maxShift && ($("body").on("touchmove", this.onSliderSwipe), $("body").on("touchend", this.onSliderSwipeEnd));
        },
        onSliderSwipe: function(t) {
            if (!((t = t.originalEvent).touches.length > 1 || t.scale && 1 !== t.scale)) {
                var e = t.touches[0], i = this.sliderIniTouch.x - e.pageX, n = this.sliderIniTouch.y - e.pageY;
                void 0 === this.isScrolling && (this.isScrolling = !!(this.isScrolling || Math.abs(i) < Math.abs(n))), 
                this.isScrolling || (t.stopPropagation(), t.preventDefault(), this.sliderSwipeShift = i, -this.sliderIniTouch.initialX - this.sliderSwipeShift > 0 && (this.sliderSwipeShift = -this.sliderIniTouch.initialX - Math.pow(-this.sliderIniTouch.initialX - this.sliderSwipeShift, .7)), 
                this.sliderIniTouch.initialX + this.sliderSwipeShift > this.sliderIniTouch.maxShift && (this.sliderSwipeShift = this.sliderIniTouch.maxShift - this.sliderIniTouch.initialX + Math.pow(this.sliderIniTouch.initialX + this.sliderSwipeShift - this.sliderIniTouch.maxShift, .7)), 
                this.sliderShift(this.sliderIniTouch.$wrapper, -this.sliderIniTouch.initialX - this.sliderSwipeShift));
            }
        },
        onSliderSwipeEnd: function(t) {
            if ($("body").off("touchmove", this.onSliderSwipe), $("body").off("touchend", this.onSliderSwipeEnd), 
            !this.isScrolling) {
                var e = +new Date() - this.sliderIniTouch.startTime, i = Math.abs(this.sliderSwipeShift), n = e < 250 && i > 20, o = this.sliderSwipeShift > 0 ? 1 : -1;
                if (i > 5 && (this.onSliderWasSwipe = !0), n) {
                    var a = i > this.sliderIniTouch.step ? this.sliderSwipeShift : o * this.sliderIniTouch.step;
                    a += Math.floor(i / 512) * o * this.sliderIniTouch.step;
                } else {
                    a = this.sliderSwipeShift;
                    i > 35 && i < this.PAGE_SCREENSHOT_SIZE ? a = o * this.sliderIniTouch.step : i <= 35 && (a = 0);
                }
                var r = -this.sliderIniTouch.initialX - a, s = Math.ceil(-r / this.sliderIniTouch.step);
                a = -this.sliderIniTouch.step * s, a = Math.max(Math.min(a, 0), -this.sliderIniTouch.maxShift);
                this.sliderIniTouch.$wrapper.attr("data-shift", -a / this.sliderIniTouch.magWidth), this.sliderShift(this.sliderIniTouch.$wrapper, a, !0);
            }
            delete this.sliderIniTouch, delete this.sliderSwipeShift;
        },
        sliderShift: function(e, i, n) {
            e.toggleClass("no-animation", !n), t.utils.applyTransform(e, "translate3d(" + i + "px, 0, 0)"), this.tourMagsCheckArrows();
        },
        tourMagsCheckArrows: function() {
            var t = this.$(".tour-wrapper .top-block .mags-list.active"), e = (e = t[0].style.cssText.match(/translate3d\((.*?)px.*\)/)) && e.length ? -e[1] : 0, i = t.attr("data-max") - 0;
            this.$(".tour-wrapper .top-block .arrows-wrapper .left-arrow").toggleClass("disabled", e < 10), this.$(".tour-wrapper .top-block .arrows-wrapper .right-arrow").toggleClass("disabled", e > i - 10);
        },
        onTourMagsScrollBackward: function(t) {
            !$(t.currentTarget).hasClass("disabled") && this.tourMagsScroll(-1);
        },
        onTourMagsScrollForward: function(t) {
            !$(t.currentTarget).hasClass("disabled") && this.tourMagsScroll(1);
        },
        tourMagsScroll: function(t) {
            var e = this.$(".tour-wrapper .top-block .mags-list.active"), i = (i = e[0].style.cssText.match(/translate3d\((.*?)px.*\)/)) && i.length ? i[1] : 0, n = e.attr("data-step") - 0, o = (i = i - t * n, 
            e.attr("data-max") - 0), a = e.attr("data-item-width") - 0, r = -n * Math.ceil(-i / n);
            r = Math.max(Math.min(r, 0), -o);
            e.attr("data-shift", -r / a), this.sliderShift(e, r, !0);
        },
        onTarifPeriodSwitch: function(t) {
            var e = $(t.currentTarget);
            if (!e.hasClass("active")) {
                this.sendHomepageEvent("Toggle plans", e.attr("data-tp")), e.toggleClass("active").siblings().removeClass("active"), 
                this.$(".pricing-wrapper .tarifs-block.content-block .tarifs-list").attr("data-state", e.attr("data-tp"));
                var i = this.PRICES[e.attr("data-tp")];
                _.each(i, _.bind(function(t, e) {
                    var i = this.$('.pricing-wrapper .tarifs-block.content-block .tarifs-list .tarif[data-tp="' + e + '"] .price .number');
                    this.animateNumber(i, t, 600);
                }, this));
            }
        },
        animateNumber: function(t, e, i) {
            clearInterval(t.data("timer"));
            var n = t.text() - 0, o = n > e ? -1 : 1;
            t.data("timer", setInterval(function() {
                n == e ? clearInterval(t.data("timer")) : (n += o, t.text(n));
            }, i / Math.abs(n - e)));
        },
        toggleMenu: function(t) {
            this.menuShown ? this.hideMenu() : this.showMenu();
        },
        onInputBlur: function() {
            !Modernizr.isdesktop && this.loginShown && setTimeout(function() {
                $(":focus").length || $("body, html").scrollTop(0);
            }, 0);
        },
        showMenu: function(t) {
            Modernizr.isdesktop, Modernizr.android && this.globalScrollOff(), this.$(".menu").addClass("popup-menu-shown"), 
            this.$(".menu .menu-button").addClass("closed-state"), this.$(".popup-menu").removeClass("hidden"), 
            this.menuShown = !0;
        },
        hideMenu: function(t) {
            Modernizr.android && this.globalScrollOn(), this.$(".menu").removeClass("popup-menu-shown"), this.$(".menu .menu-button").removeClass("closed-state"), 
            this.$(".popup-menu").addClass("hidden"), this.menuShown = !1;
        },
        onMenuTouchStart: function(t) {
            this.menuScrollY = t.originalEvent.touches.item(0).clientY;
        },
        onMenuTouchMove: function(t) {
            var e = $(t.currentTarget), i = this.menuScrollY - t.originalEvent.touches.item(0).clientY;
            (i < 0 && e.scrollTop() <= 0 || i > 0 && e.scrollTop() + e.height() >= e[0].scrollHeight) && t.preventDefault(), 
            this.menuScrollY = t.originalEvent.touches.item(0).clientY;
        },
        globalScrollOff: function() {
            var t = document.body || document.getElementsByTagName("body")[0], e = document.getElementsByTagName("html")[0];
            this.globalScrollData = {
                body_o: t.style.overflow,
                body_ox: t.style.overflowX,
                body_oy: t.style.overflowY,
                html_o: e.style.overflow,
                html_ox: e.style.overflowX,
                html_oy: e.style.overflowY,
                scroll: t.scrollTop
            }, t.style.overflow = "hidden", t.style.overflowX = "hidden", t.style.overflowY = "hidden", e.style.overflow = "hidden", 
            e.style.overflowX = "hidden", e.style.overflowY = "hidden";
        },
        globalScrollOn: function() {
            if (this.globalScrollData) {
                var t = document.body || document.getElementsByTagName("body")[0], e = document.getElementsByTagName("html")[0], i = this.globalScrollData;
                t.style.overflow = i.body_o, t.style.overflowX = i.body_ox, t.style.overflowY = i.body_oy, e.style.overflow = i.html_o, 
                e.style.overflowX = i.html_ox, e.style.overflowY = i.html_oy, t.scrollTop = i.scroll;
            }
        },
        sendHomepageEvent: function(t, e) {
            var i = this.router.getCurrentRouteInfo().route;
            if (_.isObject(t)) {
                var n = t.attr("href");
                if (t.hasClass("go-join")) {
                    e = "";
                    t.hasClass("top-menu-link") && (e = "top menu"), t.hasClass("pricing-plans") && (e = "pricing"), this.router.analytics.sendEvent("Join", e);
                } else if (t.hasClass("featured-mag")) this.router.analytics.sendEvent("Featured mag", n); else if (t.hasClass("featured-publisher")) this.router.analytics.sendEvent("Featured publisher", n); else if (t.hasClass("announcement")) this.router.analytics.sendEvent("Announcement", n); else if (t.hasClass("go-tour")) {
                    e = "homepage";
                    t.hasClass("top-menu-link") && (e = "top menu"), t.hasClass("main-body-link") && (e = "main body"), 
                    t.hasClass("footer-link") && (e = "footer"), this.router.analytics.sendEvent("Tour", e);
                } else if (t.hasClass("go-pricing")) {
                    e = "";
                    t.hasClass("top-menu-link") && (e = "top menu"), t.hasClass("footer-link") && (e = "footer"), this.router.analytics.sendEvent("Pricing", e);
                } else if (t.hasClass("go-templates")) {
                    e = "tour";
                    t.hasClass("top-menu-link") && (e = "top menu"), t.hasClass("footer-link") && (e = "footer"), this.router.analytics.sendEvent("Templates", e);
                } else if (t.hasClass("go-explore")) {
                    e = "";
                    t.hasClass("top-menu-link") && (e = "top menu"), t.hasClass("footer-link") && (e = "footer"), this.router.analytics.sendEvent("Explore", e);
                } else if (t.hasClass("go-about")) {
                    e = "";
                    t.hasClass("footer-link") && (e = "footer"), this.router.analytics.sendEvent("About", e);
                } else if (t.hasClass("go-edu")) {
                    e = "pricing bottom";
                    this.router.analytics.sendEvent("Education", e);
                } else if (t.hasClass("facebook-profile") || t.hasClass("facebook")) {
                    e = "about";
                    t.hasClass("footer-link") && (e = "footer"), this.router.analytics.sendEvent("Facebook profile", e);
                } else if (t.hasClass("twitter-profile") || t.hasClass("twitter")) {
                    e = "about";
                    t.hasClass("footer-link") && (e = "footer"), this.router.analytics.sendEvent("Twitter profile", e);
                } else if (t.hasClass("vimeo")) this.router.analytics.sendEvent("Vimeo profile"); else if (t.hasClass("rm")) this.router.analytics.sendEvent("Readymag page"); else if (t.hasClass("mailto-hello")) {
                    e = "";
                    t.hasClass("footer-link") && (e = "footer"), t.hasClass("about-middle") && (e = "about"), t.hasClass("pricing-bottom") && (e = "pricing bottom"), 
                    t.hasClass("edu-bottom") && (e = "edu bottom"), t.hasClass("pricing-faq") && (e = "pricing faq"), this.router.analytics.sendEvent("Contact hello", e);
                } else if (t.hasClass("mailto-support")) {
                    e = "about";
                    t.hasClass("from-user-menu") && (e = "user menu"), this.router.analytics.sendEvent("Contact support", e);
                } else t.hasClass("cover") && "tour" == i ? this.router.analytics.sendEvent("View tour example", n) : t.hasClass("tour-publisher") ? this.router.analytics.sendEvent("View tour publisher", n) : t.hasClass("affiliate-button") && this.router.analytics.sendEvent("Affiliate Homepage Button Click", {
                    label: t.text(),
                    value: t.hasClass("top-affiliate-button") ? "top" : "bottom",
                    _button_caption: t.text(),
                    _button_position: t.hasClass("top-affiliate-button") ? "top" : "bottom"
                });
            } else this.router.analytics.sendEvent(t, e);
        },
        onSendEduRequestClick: function(t) {
            this.eduUploadData && this.eduUploadData.submit();
        },
        showEduUploadPreloader: function() {
            this.$(".edu-wrapper .send-request").addClass("uploading");
        },
        showEduSuccessMessage: function() {
            this.hideEduMessages(), this.$(".edu-wrapper .message.success").removeClass("hidden");
        },
        showEduErrorMessage: function() {
            this.hideEduMessages(), this.$(".edu-wrapper .message.error").removeClass("hidden");
        },
        hideEduMessages: function() {
            this.$(".edu-wrapper .message").addClass("hidden");
        },
        hideEduUploadPreloader: function() {
            this.$(".edu-wrapper .send-request").removeClass("uploading"), this.$(".edu-wrapper .fake-file").val(""), 
            this.validateEduForm();
        },
        validateEduForm: function() {
            var e = this.$(".edu-wrapper .edu-email").val().trim(), i = this.$(".edu-wrapper .fake-file").val().trim();
            this.$(".edu-wrapper .send-request").toggleClass("disabled", !(t.utils.isValidEmail(e) && i));
        },
        showMobilePopupWarning: function() {
            if (t.classes.Alert) {
                new t.classes.Alert({
                    $parent: $("body > .popups"),
                    router: this.router,
                    opts: {
                        type: "type-switch-desktop-continue"
                    },
                    alert_source: "affiliate settings mobile"
                }).render();
            }
        },
        onAffiliateFakeButtonClick: function(t) {
            if (Modernizr.isdesktop) return !0;
            this.showMobilePopupWarning();
        },
        onAffiliateSignupButtonClick: function(t) {
            Modernizr.sessionstorage && window.sessionStorage.setItem("rm.loginReturnUrl", "/settings/affiliate"), 
            this.router.login.once("hidden", function() {
                Modernizr.sessionstorage && window.sessionStorage.removeItem("rm.loginReturnUrl");
            });
        }
    });
    var i = function(t) {
        return _.bindAll(this), this.params = t, this.swipe = t.$gallery.Swipe({
            speed: 400,
            auto: t.auto,
            continuous: void 0 === t.continuous ? Modernizr.isdesktop : t.continuous,
            disableScroll: !1,
            stopPropagation: !Modernizr.isdesktop,
            callback: function(e, i) {
                e %= t.$points.find("div").length, t.$points.find("div").eq(e).addClass("active").siblings().removeClass("active");
            },
            transitionEnd: function(t, e) {
                $(e).removeClass("unloaded"), $(e).next().removeClass("unloaded");
            }
        }).data("Swipe"), _.extend(this.swipe, {
            refresh: function() {
                this.setup(), t.$gallery.hide(), _.defer(function() {
                    t.$gallery.show();
                });
            }
        }), Modernizr.isdesktop && t.$gallery.on("click", _.bind(function(t) {
            $(t.target).closest(".mag").length || this.swipe && this.swipe.next();
        }, this)), t.$points.on("click", "div", _.bind(function(t) {
            this.swipe && this.swipe.slide($(t.target).index(), 400);
        }, this)), t.$left && t.$left.on("click", _.bind(function(t) {
            this.swipe && this.swipe.prev();
        }, this)), t.$right && t.$right.on("click", _.bind(function(t) {
            this.swipe && this.swipe.next();
        }, this)), this.swipe;
    }, n = function(t, e) {
        _.bindAll(this), this.callbacks = e || {}, this.isReady = !1, this.notPlayedYet = !0, this.player = $f(t), 
        this.player.addEvent("ready", _.bind(function(t) {
            this.isReady = !0, this.fire("ready", t), this.player.addEvent("play", _.bind(function(t) {
                this.notPlayedYet = !1, this.fire("play", t);
            }, this)), this.player.addEvent("pause", _.bind(function(t) {
                this.fire("pause", t);
            }, this)), this.player.addEvent("finish", _.bind(function(t) {
                this.fire("finish", t);
            }, this)), this.player.addEvent("seek", _.bind(function(t) {
                this.fire("seek", t);
            }, this)), this.player.addEvent("playProgress", _.bind(function(t) {
                this.fire("playProgress", t);
            }, this));
        }, this));
    };
    n.prototype = {
        fire: function(t, e) {
            this.callbacks && "function" == typeof this.callbacks[t] && this.callbacks[t](this.player, e);
        },
        setVolume: function(t) {
            this.player.api("setVolume", t);
        },
        play: function() {
            this.player.api("play");
        },
        pause: function() {
            this.player.api("pause");
        },
        getCurrentTime: function(t) {
            return this.player.api("getCurrentTime", t);
        },
        getDuration: function(t) {
            return this.player.api("getDuration", t);
        }
    };
    (function(t) {
        _.bindAll(this), this.params = t || {};
        for (var e = 1; e <= this.params.cnt; e++) {
            var i = $("<div>").addClass("bg-image bg-image-" + e);
            i.toggleClass("unloaded", e > 2), i.toggleClass("current", 1 == e), this.params.$parent.append(i);
        }
        this.$images = this.params.$parent.find(".bg-image");
        var n, o = (n = (n = this.$images.filter(".bg-image-1")).length && n.css("background-image").match(/\((.*?)\)/)).length && n[1];
        if (o) {
            var a = new Image();
            $(a).on("load", this.params.cb), a.src = o;
        } else this.params.cb();
    }).prototype = {
        play: function() {
            this.playing || (this.playing = !0, this.animateCurrent(), this.interval = setInterval(this.animateCurrent, 3200));
        },
        animateCurrent: function() {
            this.$images.filter(".bg-image-1");
            var t = this.$images.filter(".current"), e = t.prev(".bg-image").length ? t.prev(".bg-image") : this.$images.filter(".bg-image-7"), i = e.prev(".bg-image").length ? e.prev(".bg-image") : this.$images.filter(".bg-image-7"), n = t.next(".bg-image").length ? t.next(".bg-image") : this.$images.filter(".bg-image-1"), o = n.next(".bg-image").length ? n.next(".bg-image") : this.$images.filter(".bg-image-1");
            e.hasClass("fade-out") && e.css("z-index", 3), i.hasClass("fade-out") && i.removeClass("fade-out").css("z-index", "auto"), 
            t.addClass("fade-out").removeClass("current").css("z-index", 2), n.addClass("current").css("z-index", 1), 
            o.removeClass("unloaded");
        },
        pause: function() {
            this.playing && (this.playing = !1, clearInterval(this.interval));
        }
    };
}(RM);