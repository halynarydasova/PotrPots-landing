parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";window.addEventListener("hashchange",function(){"#menu"===window.location.hash?document.body.classList.add("page__body--no-scroll"):document.body.classList.remove("page__body--no-scroll")});var e=window.screen.width;e<768&&s(0);var t=document.querySelectorAll(".slider__button");function o(e){s(e)}function s(e){var t=document.getElementsByClassName("slider__item"),o=document.getElementsByClassName("slider__button");Array.from(t).forEach(function(e){e.classList.remove("slider__item--active")}),Array.from(o).forEach(function(e){e.classList.remove("slider__button--active")}),t[e].className+=" slider__item--active",o[e].className+=" slider__button--active"}t.forEach(function(e,t){e.addEventListener("click",function(e){o(t)})});var i=document.querySelectorAll(".slider__spoiler");i.forEach(function(e){e.addEventListener("click",function(t){e.classList.toggle("slider__spoiler--active"),e.previousElementSibling.classList.toggle("slider__description--active")})});var n=document.querySelector(".contacts__form");n.addEventListener("submit",function(e){e.preventDefault(),n.reset(),window.scrollTo({top:0,left:0,behavior:"smooth"})});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.d52906ee.js.map