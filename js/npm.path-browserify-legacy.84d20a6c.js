(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["npm.path-browserify"],{df7c:function(r,t,n){(function(r){function n(r,t){for(var n=0,e=r.length-1;e>=0;e--){var i=r[e];"."===i?r.splice(e,1):".."===i?(r.splice(e,1),n++):n&&(r.splice(e,1),n--)}if(t)for(;n--;n)r.unshift("..");return r}function e(r){"string"!==typeof r&&(r+="");var t,n=0,e=-1,i=!0;for(t=r.length-1;t>=0;--t)if(47===r.charCodeAt(t)){if(!i){n=t+1;break}}else-1===e&&(i=!1,e=t+1);return-1===e?"":r.slice(n,e)}function i(r,t){if(r.filter)return r.filter(t);for(var n=[],e=0;e<r.length;e++)t(r[e],e,r)&&n.push(r[e]);return n}t.resolve=function(){for(var t="",e=!1,o=arguments.length-1;o>=-1&&!e;o--){var s=o>=0?arguments[o]:r.cwd();if("string"!==typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(t=s+"/"+t,e="/"===s.charAt(0))}return t=n(i(t.split("/"),(function(r){return!!r})),!e).join("/"),(e?"/":"")+t||"."},t.normalize=function(r){var e=t.isAbsolute(r),s="/"===o(r,-1);return r=n(i(r.split("/"),(function(r){return!!r})),!e).join("/"),r||e||(r="."),r&&s&&(r+="/"),(e?"/":"")+r},t.isAbsolute=function(r){return"/"===r.charAt(0)},t.join=function(){var r=Array.prototype.slice.call(arguments,0);return t.normalize(i(r,(function(r,t){if("string"!==typeof r)throw new TypeError("Arguments to path.join must be strings");return r})).join("/"))},t.relative=function(r,n){function e(r){for(var t=0;t<r.length;t++)if(""!==r[t])break;for(var n=r.length-1;n>=0;n--)if(""!==r[n])break;return t>n?[]:r.slice(t,n-t+1)}r=t.resolve(r).substr(1),n=t.resolve(n).substr(1);for(var i=e(r.split("/")),o=e(n.split("/")),s=Math.min(i.length,o.length),u=s,f=0;f<s;f++)if(i[f]!==o[f]){u=f;break}var l=[];for(f=u;f<i.length;f++)l.push("..");return l=l.concat(o.slice(u)),l.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(r){if("string"!==typeof r&&(r+=""),0===r.length)return".";for(var t=r.charCodeAt(0),n=47===t,e=-1,i=!0,o=r.length-1;o>=1;--o)if(t=r.charCodeAt(o),47===t){if(!i){e=o;break}}else i=!1;return-1===e?n?"/":".":n&&1===e?"/":r.slice(0,e)},t.basename=function(r,t){var n=e(r);return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(r){"string"!==typeof r&&(r+="");for(var t=-1,n=0,e=-1,i=!0,o=0,s=r.length-1;s>=0;--s){var u=r.charCodeAt(s);if(47!==u)-1===e&&(i=!1,e=s+1),46===u?-1===t?t=s:1!==o&&(o=1):-1!==t&&(o=-1);else if(!i){n=s+1;break}}return-1===t||-1===e||0===o||1===o&&t===e-1&&t===n+1?"":r.slice(t,e)};var o="b"==="ab".substr(-1)?function(r,t,n){return r.substr(t,n)}:function(r,t,n){return t<0&&(t=r.length+t),r.substr(t,n)}}).call(this,n("4362"))}}]);
//# sourceMappingURL=npm.path-browserify-legacy.84d20a6c.js.map