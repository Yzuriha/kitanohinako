(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["npm.browserify-cipher"],{"956a":function(e,r,i){var t=i("1e3c"),n=i("fda6"),o=i("bac2"),p=i("0be8"),a=i("ae84");function c(e,r){var i,t;if(e=e.toLowerCase(),o[e])i=o[e].key,t=o[e].iv;else{if(!p[e])throw new TypeError("invalid suite type");i=8*p[e].key,t=p[e].iv}var n=a(r,!1,i,t);return w(e,n.key,n.iv)}function v(e,r){var i,t;if(e=e.toLowerCase(),o[e])i=o[e].key,t=o[e].iv;else{if(!p[e])throw new TypeError("invalid suite type");i=8*p[e].key,t=p[e].iv}var n=a(r,!1,i,t);return h(e,n.key,n.iv)}function w(e,r,i){if(e=e.toLowerCase(),o[e])return n.createCipheriv(e,r,i);if(p[e])return new t({key:r,iv:i,mode:e});throw new TypeError("invalid suite type")}function h(e,r,i){if(e=e.toLowerCase(),o[e])return n.createDecipheriv(e,r,i);if(p[e])return new t({key:r,iv:i,mode:e,decrypt:!0});throw new TypeError("invalid suite type")}function s(){return Object.keys(p).concat(n.getCiphers())}r.createCipher=r.Cipher=c,r.createCipheriv=r.Cipheriv=w,r.createDecipher=r.Decipher=v,r.createDecipheriv=r.Decipheriv=h,r.listCiphers=r.getCiphers=s}}]);
//# sourceMappingURL=npm.browserify-cipher.1f6233fd.js.map