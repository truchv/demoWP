!function(n){function t(r){if(e[r])return e[r].exports;var c=e[r]={i:r,l:!1,exports:{}};return n[r].call(c.exports,c,c.exports,t),c.l=!0,c.exports}var e={};t.m=n,t.c=e,t.i=function(n){return n},t.d=function(n,e,r){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:r})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="",t(t.s=1143)}({1143:function(n,t,e){n.exports=e(581)},581:function(n,t,e){"use strict";var r=e(98),c=function(n){return n&&n.__esModule?n:{default:n}}(r);e(889),(0,c.default)(document).ready(function(n){n(".woocommerce-services__connect-jetpack").one("click",function(t){function e(){return"installed"===wcs_nux_notice.initial_install_status||"uninstalled"===wcs_nux_notice.initial_install_status?n.when().then(function(){return c.html(wcs_nux_notice.translations.activating),n.post(ajaxurl,{action:"woocommerce_services_activate_jetpack",_ajax_nonce:wcs_nux_notice.nonce})}).then(function(t){if("success"!==t)return n.Deferred().reject(t)}):n.Deferred().resolve()}function r(){return n.when().then(function(){return c.html(wcs_nux_notice.translations.connecting),n.post(ajaxurl,{action:"woocommerce_services_get_jetpack_connect_url",_ajax_nonce:wcs_nux_notice.nonce,redirect_url:wcs_nux_notice.redirect_url})}).then(function(n){window.location.href=n})}t.preventDefault();var c=n(this);c.addClass("disabled"),function(){return"uninstalled"===wcs_nux_notice.initial_install_status?n.when().then(function(){return c.html(wp.updates.l10n.installing),wp.updates.installPlugin({slug:"jetpack"})}):n.Deferred().resolve()}().then(e).then(r).fail(function(t){var e=t;t||(e=wcs_nux_notice.translations.defaultError),t&&t.install&&"plugin"===t.install&&(e=wcs_nux_notice.translations.installError),n("<p/>",{class:"woocommerce-services__jetpack-install-error-message",text:e}).insertAfter(c),c.remove()})})})},889:function(n,t){},98:function(n,t){n.exports=jQuery}});