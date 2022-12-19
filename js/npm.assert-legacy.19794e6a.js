(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["npm.assert"],{f654:function(t,e,r){"use strict";(function(e){var n=r("320c");
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */function i(t,e){if(t===e)return 0;for(var r=t.length,n=e.length,i=0,o=Math.min(r,n);i<o;++i)if(t[i]!==e[i]){r=t[i],n=e[i];break}return r<n?-1:n<r?1:0}function o(t){return e.Buffer&&"function"===typeof e.Buffer.isBuffer?e.Buffer.isBuffer(t):!(null==t||!t._isBuffer)}var u=r("3022"),a=Object.prototype.hasOwnProperty,c=Array.prototype.slice,f=function(){return"foo"===function(){}.name}();function s(t){return Object.prototype.toString.call(t)}function l(t){return!o(t)&&("function"===typeof e.ArrayBuffer&&("function"===typeof ArrayBuffer.isView?ArrayBuffer.isView(t):!!t&&(t instanceof DataView||!!(t.buffer&&t.buffer instanceof ArrayBuffer))))}var p=t.exports=b,E=/\s*function\s+([^\(\s]*)\s*/;function g(t){if(u.isFunction(t)){if(f)return t.name;var e=t.toString(),r=e.match(E);return r&&r[1]}}function h(t,e){return"string"===typeof t?t.length<e?t:t.slice(0,e):t}function y(t){if(f||!u.isFunction(t))return u.inspect(t);var e=g(t),r=e?": "+e:"";return"[Function"+r+"]"}function d(t){return h(y(t.actual),128)+" "+t.operator+" "+h(y(t.expected),128)}function q(t,e,r,n,i){throw new p.AssertionError({message:r,actual:t,expected:e,operator:n,stackStartFunction:i})}function b(t,e){t||q(t,!0,e,"==",p.ok)}function v(t,e,r,n){if(t===e)return!0;if(o(t)&&o(e))return 0===i(t,e);if(u.isDate(t)&&u.isDate(e))return t.getTime()===e.getTime();if(u.isRegExp(t)&&u.isRegExp(e))return t.source===e.source&&t.global===e.global&&t.multiline===e.multiline&&t.lastIndex===e.lastIndex&&t.ignoreCase===e.ignoreCase;if(null!==t&&"object"===typeof t||null!==e&&"object"===typeof e){if(l(t)&&l(e)&&s(t)===s(e)&&!(t instanceof Float32Array||t instanceof Float64Array))return 0===i(new Uint8Array(t.buffer),new Uint8Array(e.buffer));if(o(t)!==o(e))return!1;n=n||{actual:[],expected:[]};var a=n.actual.indexOf(t);return-1!==a&&a===n.expected.indexOf(e)||(n.actual.push(t),n.expected.push(e),w(t,e,r,n))}return r?t===e:t==e}function m(t){return"[object Arguments]"==Object.prototype.toString.call(t)}function w(t,e,r,n){if(null===t||void 0===t||null===e||void 0===e)return!1;if(u.isPrimitive(t)||u.isPrimitive(e))return t===e;if(r&&Object.getPrototypeOf(t)!==Object.getPrototypeOf(e))return!1;var i=m(t),o=m(e);if(i&&!o||!i&&o)return!1;if(i)return t=c.call(t),e=c.call(e),v(t,e,r);var a,f,s=j(t),l=j(e);if(s.length!==l.length)return!1;for(s.sort(),l.sort(),f=s.length-1;f>=0;f--)if(s[f]!==l[f])return!1;for(f=s.length-1;f>=0;f--)if(a=s[f],!v(t[a],e[a],r,n))return!1;return!0}function x(t,e,r){v(t,e,!0)&&q(t,e,r,"notDeepStrictEqual",x)}function S(t,e){if(!t||!e)return!1;if("[object RegExp]"==Object.prototype.toString.call(e))return e.test(t);try{if(t instanceof e)return!0}catch(r){}return!Error.isPrototypeOf(e)&&!0===e.call({},t)}function O(t){var e;try{t()}catch(r){e=r}return e}function k(t,e,r,n){var i;if("function"!==typeof e)throw new TypeError('"block" argument must be a function');"string"===typeof r&&(n=r,r=null),i=O(e),n=(r&&r.name?" ("+r.name+").":".")+(n?" "+n:"."),t&&!i&&q(i,r,"Missing expected exception"+n);var o="string"===typeof n,a=!t&&u.isError(i),c=!t&&i&&!r;if((a&&o&&S(i,r)||c)&&q(i,r,"Got unwanted exception"+n),t&&i&&r&&!S(i,r)||!t&&i)throw i}function A(t,e){t||q(t,!0,e,"==",A)}p.AssertionError=function(t){this.name="AssertionError",this.actual=t.actual,this.expected=t.expected,this.operator=t.operator,t.message?(this.message=t.message,this.generatedMessage=!1):(this.message=d(this),this.generatedMessage=!0);var e=t.stackStartFunction||q;if(Error.captureStackTrace)Error.captureStackTrace(this,e);else{var r=new Error;if(r.stack){var n=r.stack,i=g(e),o=n.indexOf("\n"+i);if(o>=0){var u=n.indexOf("\n",o+1);n=n.substring(u+1)}this.stack=n}}},u.inherits(p.AssertionError,Error),p.fail=q,p.ok=b,p.equal=function(t,e,r){t!=e&&q(t,e,r,"==",p.equal)},p.notEqual=function(t,e,r){t==e&&q(t,e,r,"!=",p.notEqual)},p.deepEqual=function(t,e,r){v(t,e,!1)||q(t,e,r,"deepEqual",p.deepEqual)},p.deepStrictEqual=function(t,e,r){v(t,e,!0)||q(t,e,r,"deepStrictEqual",p.deepStrictEqual)},p.notDeepEqual=function(t,e,r){v(t,e,!1)&&q(t,e,r,"notDeepEqual",p.notDeepEqual)},p.notDeepStrictEqual=x,p.strictEqual=function(t,e,r){t!==e&&q(t,e,r,"===",p.strictEqual)},p.notStrictEqual=function(t,e,r){t===e&&q(t,e,r,"!==",p.notStrictEqual)},p.throws=function(t,e,r){k(!0,t,e,r)},p.doesNotThrow=function(t,e,r){k(!1,t,e,r)},p.ifError=function(t){if(t)throw t},p.strict=n(A,p,{equal:p.strictEqual,deepEqual:p.deepStrictEqual,notEqual:p.notStrictEqual,notDeepEqual:p.notDeepStrictEqual}),p.strict.strict=p.strict;var j=Object.keys||function(t){var e=[];for(var r in t)a.call(t,r)&&e.push(r);return e}}).call(this,r("c8ba"))}}]);
//# sourceMappingURL=npm.assert-legacy.19794e6a.js.map