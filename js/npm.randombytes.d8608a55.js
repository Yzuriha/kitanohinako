(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["npm.randombytes"],{"11dc":function(e,n,o){"use strict";(function(n,r){var t=65536,s=4294967295;function a(){throw new Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11")}var i=o("8707").Buffer,u=n.crypto||n.msCrypto;function c(e,n){if(e>s)throw new RangeError("requested too many random bytes");var o=i.allocUnsafe(e);if(e>0)if(e>t)for(var a=0;a<e;a+=t)u.getRandomValues(o.slice(a,a+t));else u.getRandomValues(o);return"function"===typeof n?r.nextTick((function(){n(null,o)})):o}u&&u.getRandomValues?e.exports=c:e.exports=a}).call(this,o("c8ba"),o("4362"))}}]);
//# sourceMappingURL=npm.randombytes.d8608a55.js.map