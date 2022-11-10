(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["npm.object-assign"],{"320c":function(r,t,e){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function a(r){if(null===r||void 0===r)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}function i(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de","5"===Object.getOwnPropertyNames(r)[0])return!1;for(var t={},e=0;e<10;e++)t["_"+String.fromCharCode(e)]=e;var n=Object.getOwnPropertyNames(t).map((function(r){return t[r]}));if("0123456789"!==n.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(r){o[r]=r})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(c){return!1}}r.exports=i()?Object.assign:function(r,t){for(var e,i,s=a(r),p=1;p<arguments.length;p++){for(var b in e=Object(arguments[p]),e)o.call(e,b)&&(s[b]=e[b]);if(n){i=n(e);for(var f=0;f<i.length;f++)c.call(e,i[f])&&(s[i[f]]=e[i[f]])}}return s}}}]);
//# sourceMappingURL=npm.object-assign.62f32616.js.map