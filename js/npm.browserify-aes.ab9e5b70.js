(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["npm.browserify-aes"],{"0145":function(e,t){t.encrypt=function(e,t){return e._cipher.encryptBlock(t)},t.decrypt=function(e,t){return e._cipher.decryptBlock(t)}},"09f5":function(e,t,r){var i=r("39f5"),c=r("8707").Buffer,n=r("6430"),a=r("3fb5");function h(e,t,r,a){n.call(this),this._cipher=new i.AES(t),this._prev=c.from(r),this._cache=c.allocUnsafe(0),this._secCache=c.allocUnsafe(0),this._decrypt=a,this._mode=e}a(h,n),h.prototype._update=function(e){return this._mode.encrypt(this,e,this._decrypt)},h.prototype._final=function(){this._cipher.scrub()},e.exports=h},3505:function(e,t,r){var i=r("8707").Buffer,c=r("8c8a");function n(e,t,r){var n=t.length,a=c(t,e._cache);return e._cache=e._cache.slice(n),e._prev=i.concat([e._prev,r?t:a]),a}t.encrypt=function(e,t,r){var c,a=i.allocUnsafe(0);while(t.length){if(0===e._cache.length&&(e._cache=e._cipher.encryptBlock(e._prev),e._prev=i.allocUnsafe(0)),!(e._cache.length<=t.length)){a=i.concat([a,n(e,t,r)]);break}c=e._cache.length,a=i.concat([a,n(e,t.slice(0,c),r)]),t=t.slice(c)}return a}},"39f5":function(e,t,r){var i=r("8707").Buffer;function c(e){i.isBuffer(e)||(e=i.from(e));for(var t=e.length/4|0,r=new Array(t),c=0;c<t;c++)r[c]=e.readUInt32BE(4*c);return r}function n(e){for(var t=0;t<e.length;e++)e[t]=0}function a(e,t,r,i,c){for(var n,a,h,o,s=r[0],p=r[1],l=r[2],u=r[3],f=e[0]^t[0],_=e[1]^t[1],y=e[2]^t[2],v=e[3]^t[3],d=4,B=1;B<c;B++)n=s[f>>>24]^p[_>>>16&255]^l[y>>>8&255]^u[255&v]^t[d++],a=s[_>>>24]^p[y>>>16&255]^l[v>>>8&255]^u[255&f]^t[d++],h=s[y>>>24]^p[v>>>16&255]^l[f>>>8&255]^u[255&_]^t[d++],o=s[v>>>24]^p[f>>>16&255]^l[_>>>8&255]^u[255&y]^t[d++],f=n,_=a,y=h,v=o;return n=(i[f>>>24]<<24|i[_>>>16&255]<<16|i[y>>>8&255]<<8|i[255&v])^t[d++],a=(i[_>>>24]<<24|i[y>>>16&255]<<16|i[v>>>8&255]<<8|i[255&f])^t[d++],h=(i[y>>>24]<<24|i[v>>>16&255]<<16|i[f>>>8&255]<<8|i[255&_])^t[d++],o=(i[v>>>24]<<24|i[f>>>16&255]<<16|i[_>>>8&255]<<8|i[255&y])^t[d++],n>>>=0,a>>>=0,h>>>=0,o>>>=0,[n,a,h,o]}var h=[0,1,2,4,8,16,32,64,128,27,54],o=function(){for(var e=new Array(256),t=0;t<256;t++)e[t]=t<128?t<<1:t<<1^283;for(var r=[],i=[],c=[[],[],[],[]],n=[[],[],[],[]],a=0,h=0,o=0;o<256;++o){var s=h^h<<1^h<<2^h<<3^h<<4;s=s>>>8^255&s^99,r[a]=s,i[s]=a;var p=e[a],l=e[p],u=e[l],f=257*e[s]^16843008*s;c[0][a]=f<<24|f>>>8,c[1][a]=f<<16|f>>>16,c[2][a]=f<<8|f>>>24,c[3][a]=f,f=16843009*u^65537*l^257*p^16843008*a,n[0][s]=f<<24|f>>>8,n[1][s]=f<<16|f>>>16,n[2][s]=f<<8|f>>>24,n[3][s]=f,0===a?a=h=1:(a=p^e[e[e[u^p]]],h^=e[e[h]])}return{SBOX:r,INV_SBOX:i,SUB_MIX:c,INV_SUB_MIX:n}}();function s(e){this._key=c(e),this._reset()}s.blockSize=16,s.keySize=32,s.prototype.blockSize=s.blockSize,s.prototype.keySize=s.keySize,s.prototype._reset=function(){for(var e=this._key,t=e.length,r=t+6,i=4*(r+1),c=[],n=0;n<t;n++)c[n]=e[n];for(n=t;n<i;n++){var a=c[n-1];n%t===0?(a=a<<8|a>>>24,a=o.SBOX[a>>>24]<<24|o.SBOX[a>>>16&255]<<16|o.SBOX[a>>>8&255]<<8|o.SBOX[255&a],a^=h[n/t|0]<<24):t>6&&n%t===4&&(a=o.SBOX[a>>>24]<<24|o.SBOX[a>>>16&255]<<16|o.SBOX[a>>>8&255]<<8|o.SBOX[255&a]),c[n]=c[n-t]^a}for(var s=[],p=0;p<i;p++){var l=i-p,u=c[l-(p%4?0:4)];s[p]=p<4||l<=4?u:o.INV_SUB_MIX[0][o.SBOX[u>>>24]]^o.INV_SUB_MIX[1][o.SBOX[u>>>16&255]]^o.INV_SUB_MIX[2][o.SBOX[u>>>8&255]]^o.INV_SUB_MIX[3][o.SBOX[255&u]]}this._nRounds=r,this._keySchedule=c,this._invKeySchedule=s},s.prototype.encryptBlockRaw=function(e){return e=c(e),a(e,this._keySchedule,o.SUB_MIX,o.SBOX,this._nRounds)},s.prototype.encryptBlock=function(e){var t=this.encryptBlockRaw(e),r=i.allocUnsafe(16);return r.writeUInt32BE(t[0],0),r.writeUInt32BE(t[1],4),r.writeUInt32BE(t[2],8),r.writeUInt32BE(t[3],12),r},s.prototype.decryptBlock=function(e){e=c(e);var t=e[1];e[1]=e[3],e[3]=t;var r=a(e,this._invKeySchedule,o.INV_SUB_MIX,o.INV_SBOX,this._nRounds),n=i.allocUnsafe(16);return n.writeUInt32BE(r[0],0),n.writeUInt32BE(r[3],4),n.writeUInt32BE(r[2],8),n.writeUInt32BE(r[1],12),n},s.prototype.scrub=function(){n(this._keySchedule),n(this._invKeySchedule),n(this._key)},e.exports.AES=s},"3f62":function(e,t,r){var i=r("8707").Buffer,c=i.alloc(16,0);function n(e){return[e.readUInt32BE(0),e.readUInt32BE(4),e.readUInt32BE(8),e.readUInt32BE(12)]}function a(e){var t=i.allocUnsafe(16);return t.writeUInt32BE(e[0]>>>0,0),t.writeUInt32BE(e[1]>>>0,4),t.writeUInt32BE(e[2]>>>0,8),t.writeUInt32BE(e[3]>>>0,12),t}function h(e){this.h=e,this.state=i.alloc(16,0),this.cache=i.allocUnsafe(0)}h.prototype.ghash=function(e){var t=-1;while(++t<e.length)this.state[t]^=e[t];this._multiply()},h.prototype._multiply=function(){var e,t,r,i=n(this.h),c=[0,0,0,0],h=-1;while(++h<128){for(t=0!==(this.state[~~(h/8)]&1<<7-h%8),t&&(c[0]^=i[0],c[1]^=i[1],c[2]^=i[2],c[3]^=i[3]),r=0!==(1&i[3]),e=3;e>0;e--)i[e]=i[e]>>>1|(1&i[e-1])<<31;i[0]=i[0]>>>1,r&&(i[0]=i[0]^225<<24)}this.state=a(c)},h.prototype.update=function(e){var t;this.cache=i.concat([this.cache,e]);while(this.cache.length>=16)t=this.cache.slice(0,16),this.cache=this.cache.slice(16),this.ghash(t)},h.prototype.final=function(e,t){return this.cache.length&&this.ghash(i.concat([this.cache,c],16)),this.ghash(a([0,e,0,t])),this.state},e.exports=h},4228:function(e,t,r){var i=r("82f0"),c=r("8707").Buffer,n=r("bac2"),a=r("09f5"),h=r("6430"),o=r("39f5"),s=r("ae84"),p=r("3fb5");function l(e,t,r){h.call(this),this._cache=new u,this._last=void 0,this._cipher=new o.AES(t),this._prev=c.from(r),this._mode=e,this._autopadding=!0}function u(){this.cache=c.allocUnsafe(0)}function f(e){var t=e[15];if(t<1||t>16)throw new Error("unable to decrypt data");var r=-1;while(++r<t)if(e[r+(16-t)]!==t)throw new Error("unable to decrypt data");if(16!==t)return e.slice(0,16-t)}function _(e,t,r){var h=n[e.toLowerCase()];if(!h)throw new TypeError("invalid suite type");if("string"===typeof r&&(r=c.from(r)),"GCM"!==h.mode&&r.length!==h.iv)throw new TypeError("invalid iv length "+r.length);if("string"===typeof t&&(t=c.from(t)),t.length!==h.key/8)throw new TypeError("invalid key length "+t.length);return"stream"===h.type?new a(h.module,t,r,!0):"auth"===h.type?new i(h.module,t,r,!0):new l(h.module,t,r)}function y(e,t){var r=n[e.toLowerCase()];if(!r)throw new TypeError("invalid suite type");var i=s(t,!1,r.key,r.iv);return _(e,i.key,i.iv)}p(l,h),l.prototype._update=function(e){var t,r;this._cache.add(e);var i=[];while(t=this._cache.get(this._autopadding))r=this._mode.decrypt(this,t),i.push(r);return c.concat(i)},l.prototype._final=function(){var e=this._cache.flush();if(this._autopadding)return f(this._mode.decrypt(this,e));if(e)throw new Error("data not multiple of block length")},l.prototype.setAutoPadding=function(e){return this._autopadding=!!e,this},u.prototype.add=function(e){this.cache=c.concat([this.cache,e])},u.prototype.get=function(e){var t;if(e){if(this.cache.length>16)return t=this.cache.slice(0,16),this.cache=this.cache.slice(16),t}else if(this.cache.length>=16)return t=this.cache.slice(0,16),this.cache=this.cache.slice(16),t;return null},u.prototype.flush=function(){if(this.cache.length)return this.cache},t.createDecipher=y,t.createDecipheriv=_},5165:function(e,t,r){(function(e){var i=r("8c8a");function c(e){return e._prev=e._cipher.encryptBlock(e._prev),e._prev}t.encrypt=function(t,r){while(t._cache.length<r.length)t._cache=e.concat([t._cache,c(t)]);var n=t._cache.slice(0,r.length);return t._cache=t._cache.slice(r.length),i(r,n)}}).call(this,r("b639").Buffer)},5239:function(e,t,r){var i=r("8707").Buffer;function c(e,t,r){var i,c,a,h=-1,o=8,s=0;while(++h<o)i=e._cipher.encryptBlock(e._prev),c=t&1<<7-h?128:0,a=i[0]^c,s+=(128&a)>>h%8,e._prev=n(e._prev,r?c:a);return s}function n(e,t){var r=e.length,c=-1,n=i.allocUnsafe(e.length);e=i.concat([e,i.from([t])]);while(++c<r)n[c]=e[c]<<1|e[c+1]>>7;return n}t.encrypt=function(e,t,r){var n=t.length,a=i.allocUnsafe(n),h=-1;while(++h<n)a[h]=c(e,t[h],r);return a}},"62c9":function(e,t,r){var i=r("8707").Buffer;function c(e,t,r){var c=e._cipher.encryptBlock(e._prev),n=c[0]^t;return e._prev=i.concat([e._prev.slice(1),i.from([r?t:n])]),n}t.encrypt=function(e,t,r){var n=t.length,a=i.allocUnsafe(n),h=-1;while(++h<n)a[h]=c(e,t[h],r);return a}},"6ade":function(e,t,r){var i=r("8c8a"),c=r("8707").Buffer,n=r("bd9d");function a(e){var t=e._cipher.encryptBlockRaw(e._prev);return n(e._prev),t}var h=16;t.encrypt=function(e,t){var r=Math.ceil(t.length/h),n=e._cache.length;e._cache=c.concat([e._cache,c.allocUnsafe(r*h)]);for(var o=0;o<r;o++){var s=a(e),p=n+o*h;e._cache.writeUInt32BE(s[0],p+0),e._cache.writeUInt32BE(s[1],p+4),e._cache.writeUInt32BE(s[2],p+8),e._cache.writeUInt32BE(s[3],p+12)}var l=e._cache.slice(0,t.length);return e._cache=e._cache.slice(t.length),i(t,l)}},"82f0":function(e,t,r){var i=r("39f5"),c=r("8707").Buffer,n=r("6430"),a=r("3fb5"),h=r("3f62"),o=r("8c8a"),s=r("bd9d");function p(e,t){var r=0;e.length!==t.length&&r++;for(var i=Math.min(e.length,t.length),c=0;c<i;++c)r+=e[c]^t[c];return r}function l(e,t,r){if(12===t.length)return e._finID=c.concat([t,c.from([0,0,0,1])]),c.concat([t,c.from([0,0,0,2])]);var i=new h(r),n=t.length,a=n%16;i.update(t),a&&(a=16-a,i.update(c.alloc(a,0))),i.update(c.alloc(8,0));var o=8*n,p=c.alloc(8);p.writeUIntBE(o,0,8),i.update(p),e._finID=i.state;var l=c.from(e._finID);return s(l),l}function u(e,t,r,a){n.call(this);var o=c.alloc(4,0);this._cipher=new i.AES(t);var s=this._cipher.encryptBlock(o);this._ghash=new h(s),r=l(this,r,s),this._prev=c.from(r),this._cache=c.allocUnsafe(0),this._secCache=c.allocUnsafe(0),this._decrypt=a,this._alen=0,this._len=0,this._mode=e,this._authTag=null,this._called=!1}a(u,n),u.prototype._update=function(e){if(!this._called&&this._alen){var t=16-this._alen%16;t<16&&(t=c.alloc(t,0),this._ghash.update(t))}this._called=!0;var r=this._mode.encrypt(this,e);return this._decrypt?this._ghash.update(e):this._ghash.update(r),this._len+=e.length,r},u.prototype._final=function(){if(this._decrypt&&!this._authTag)throw new Error("Unsupported state or unable to authenticate data");var e=o(this._ghash.final(8*this._alen,8*this._len),this._cipher.encryptBlock(this._finID));if(this._decrypt&&p(e,this._authTag))throw new Error("Unsupported state or unable to authenticate data");this._authTag=e,this._cipher.scrub()},u.prototype.getAuthTag=function(){if(this._decrypt||!c.isBuffer(this._authTag))throw new Error("Attempting to get auth tag in unsupported state");return this._authTag},u.prototype.setAuthTag=function(e){if(!this._decrypt)throw new Error("Attempting to set auth tag in unsupported state");this._authTag=e},u.prototype.setAAD=function(e){if(this._called)throw new Error("Attempting to set AAD in unsupported state");this._ghash.update(e),this._alen+=e.length},e.exports=u},8947:function(e,t,r){var i=r("bac2"),c=r("82f0"),n=r("8707").Buffer,a=r("09f5"),h=r("6430"),o=r("39f5"),s=r("ae84"),p=r("3fb5");function l(e,t,r){h.call(this),this._cache=new f,this._cipher=new o.AES(t),this._prev=n.from(r),this._mode=e,this._autopadding=!0}p(l,h),l.prototype._update=function(e){var t,r;this._cache.add(e);var i=[];while(t=this._cache.get())r=this._mode.encrypt(this,t),i.push(r);return n.concat(i)};var u=n.alloc(16,16);function f(){this.cache=n.allocUnsafe(0)}function _(e,t,r){var h=i[e.toLowerCase()];if(!h)throw new TypeError("invalid suite type");if("string"===typeof t&&(t=n.from(t)),t.length!==h.key/8)throw new TypeError("invalid key length "+t.length);if("string"===typeof r&&(r=n.from(r)),"GCM"!==h.mode&&r.length!==h.iv)throw new TypeError("invalid iv length "+r.length);return"stream"===h.type?new a(h.module,t,r):"auth"===h.type?new c(h.module,t,r):new l(h.module,t,r)}function y(e,t){var r=i[e.toLowerCase()];if(!r)throw new TypeError("invalid suite type");var c=s(t,!1,r.key,r.iv);return _(e,c.key,c.iv)}l.prototype._final=function(){var e=this._cache.flush();if(this._autopadding)return e=this._mode.encrypt(this,e),this._cipher.scrub(),e;if(!e.equals(u))throw this._cipher.scrub(),new Error("data not multiple of block length")},l.prototype.setAutoPadding=function(e){return this._autopadding=!!e,this},f.prototype.add=function(e){this.cache=n.concat([this.cache,e])},f.prototype.get=function(){if(this.cache.length>15){var e=this.cache.slice(0,16);return this.cache=this.cache.slice(16),e}return null},f.prototype.flush=function(){var e=16-this.cache.length,t=n.allocUnsafe(e),r=-1;while(++r<e)t.writeUInt8(e,r);return n.concat([this.cache,t])},t.createCipheriv=_,t.createCipher=y},bac2:function(e,t,r){var i={ECB:r("0145"),CBC:r("c119"),CFB:r("3505"),CFB8:r("62c9"),CFB1:r("5239"),OFB:r("5165"),CTR:r("6ade"),GCM:r("6ade")},c=r("e85f");for(var n in c)c[n].module=i[c[n].mode];e.exports=c},bd9d:function(e,t){function r(e){var t,r=e.length;while(r--){if(t=e.readUInt8(r),255!==t){t++,e.writeUInt8(t,r);break}e.writeUInt8(0,r)}}e.exports=r},c119:function(e,t,r){var i=r("8c8a");t.encrypt=function(e,t){var r=i(t,e._prev);return e._prev=e._cipher.encryptBlock(r),e._prev},t.decrypt=function(e,t){var r=e._prev;e._prev=t;var c=e._cipher.decryptBlock(t);return i(c,r)}},e85f:function(e){e.exports=JSON.parse('{"aes-128-ecb":{"cipher":"AES","key":128,"iv":0,"mode":"ECB","type":"block"},"aes-192-ecb":{"cipher":"AES","key":192,"iv":0,"mode":"ECB","type":"block"},"aes-256-ecb":{"cipher":"AES","key":256,"iv":0,"mode":"ECB","type":"block"},"aes-128-cbc":{"cipher":"AES","key":128,"iv":16,"mode":"CBC","type":"block"},"aes-192-cbc":{"cipher":"AES","key":192,"iv":16,"mode":"CBC","type":"block"},"aes-256-cbc":{"cipher":"AES","key":256,"iv":16,"mode":"CBC","type":"block"},"aes128":{"cipher":"AES","key":128,"iv":16,"mode":"CBC","type":"block"},"aes192":{"cipher":"AES","key":192,"iv":16,"mode":"CBC","type":"block"},"aes256":{"cipher":"AES","key":256,"iv":16,"mode":"CBC","type":"block"},"aes-128-cfb":{"cipher":"AES","key":128,"iv":16,"mode":"CFB","type":"stream"},"aes-192-cfb":{"cipher":"AES","key":192,"iv":16,"mode":"CFB","type":"stream"},"aes-256-cfb":{"cipher":"AES","key":256,"iv":16,"mode":"CFB","type":"stream"},"aes-128-cfb8":{"cipher":"AES","key":128,"iv":16,"mode":"CFB8","type":"stream"},"aes-192-cfb8":{"cipher":"AES","key":192,"iv":16,"mode":"CFB8","type":"stream"},"aes-256-cfb8":{"cipher":"AES","key":256,"iv":16,"mode":"CFB8","type":"stream"},"aes-128-cfb1":{"cipher":"AES","key":128,"iv":16,"mode":"CFB1","type":"stream"},"aes-192-cfb1":{"cipher":"AES","key":192,"iv":16,"mode":"CFB1","type":"stream"},"aes-256-cfb1":{"cipher":"AES","key":256,"iv":16,"mode":"CFB1","type":"stream"},"aes-128-ofb":{"cipher":"AES","key":128,"iv":16,"mode":"OFB","type":"stream"},"aes-192-ofb":{"cipher":"AES","key":192,"iv":16,"mode":"OFB","type":"stream"},"aes-256-ofb":{"cipher":"AES","key":256,"iv":16,"mode":"OFB","type":"stream"},"aes-128-ctr":{"cipher":"AES","key":128,"iv":16,"mode":"CTR","type":"stream"},"aes-192-ctr":{"cipher":"AES","key":192,"iv":16,"mode":"CTR","type":"stream"},"aes-256-ctr":{"cipher":"AES","key":256,"iv":16,"mode":"CTR","type":"stream"},"aes-128-gcm":{"cipher":"AES","key":128,"iv":12,"mode":"GCM","type":"auth"},"aes-192-gcm":{"cipher":"AES","key":192,"iv":12,"mode":"GCM","type":"auth"},"aes-256-gcm":{"cipher":"AES","key":256,"iv":12,"mode":"GCM","type":"auth"}}')},fda6:function(e,t,r){var i=r("8947"),c=r("4228"),n=r("e85f");function a(){return Object.keys(n)}t.createCipher=t.Cipher=i.createCipher,t.createCipheriv=t.Cipheriv=i.createCipheriv,t.createDecipher=t.Decipher=c.createDecipher,t.createDecipheriv=t.Decipheriv=c.createDecipheriv,t.listCiphers=t.getCiphers=a}}]);
//# sourceMappingURL=npm.browserify-aes.ab9e5b70.js.map