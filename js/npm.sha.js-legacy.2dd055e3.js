(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["npm.sha.js"],{"087f":function(t,i,h){var s=h("3fb5"),_=h("b672"),n=h("8707").Buffer,r=[1518500249,1859775393,-1894007588,-899497514],e=new Array(80);function o(){this.init(),this._w=e,_.call(this,64,56)}function a(t){return t<<5|t>>>27}function f(t){return t<<30|t>>>2}function c(t,i,h,s){return 0===t?i&h|~i&s:2===t?i&h|i&s|h&s:i^h^s}s(o,_),o.prototype.init=function(){return this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520,this},o.prototype._update=function(t){for(var i=this._w,h=0|this._a,s=0|this._b,_=0|this._c,n=0|this._d,e=0|this._e,o=0;o<16;++o)i[o]=t.readInt32BE(4*o);for(;o<80;++o)i[o]=i[o-3]^i[o-8]^i[o-14]^i[o-16];for(var l=0;l<80;++l){var u=~~(l/20),b=a(h)+c(u,s,_,n)+e+i[l]+r[u]|0;e=n,n=_,_=f(s),s=h,h=b}this._a=h+this._a|0,this._b=s+this._b|0,this._c=_+this._c|0,this._d=n+this._d|0,this._e=e+this._e|0},o.prototype._hash=function(){var t=n.allocUnsafe(20);return t.writeInt32BE(0|this._a,0),t.writeInt32BE(0|this._b,4),t.writeInt32BE(0|this._c,8),t.writeInt32BE(0|this._d,12),t.writeInt32BE(0|this._e,16),t},t.exports=o},"4fd1":function(t,i,h){var s=h("3fb5"),_=h("b672"),n=h("8707").Buffer,r=[1116352408,3609767458,1899447441,602891725,3049323471,3964484399,3921009573,2173295548,961987163,4081628472,1508970993,3053834265,2453635748,2937671579,2870763221,3664609560,3624381080,2734883394,310598401,1164996542,607225278,1323610764,1426881987,3590304994,1925078388,4068182383,2162078206,991336113,2614888103,633803317,3248222580,3479774868,3835390401,2666613458,4022224774,944711139,264347078,2341262773,604807628,2007800933,770255983,1495990901,1249150122,1856431235,1555081692,3175218132,1996064986,2198950837,2554220882,3999719339,2821834349,766784016,2952996808,2566594879,3210313671,3203337956,3336571891,1034457026,3584528711,2466948901,113926993,3758326383,338241895,168717936,666307205,1188179964,773529912,1546045734,1294757372,1522805485,1396182291,2643833823,1695183700,2343527390,1986661051,1014477480,2177026350,1206759142,2456956037,344077627,2730485921,1290863460,2820302411,3158454273,3259730800,3505952657,3345764771,106217008,3516065817,3606008344,3600352804,1432725776,4094571909,1467031594,275423344,851169720,430227734,3100823752,506948616,1363258195,659060556,3750685593,883997877,3785050280,958139571,3318307427,1322822218,3812723403,1537002063,2003034995,1747873779,3602036899,1955562222,1575990012,2024104815,1125592928,2227730452,2716904306,2361852424,442776044,2428436474,593698344,2756734187,3733110249,3204031479,2999351573,3329325298,3815920427,3391569614,3928383900,3515267271,566280711,3940187606,3454069534,4118630271,4000239992,116418474,1914138554,174292421,2731055270,289380356,3203993006,460393269,320620315,685471733,587496836,852142971,1086792851,1017036298,365543100,1126000580,2618297676,1288033470,3409855158,1501505948,4234509866,1607167915,987167468,1816402316,1246189591],e=new Array(160);function o(){this.init(),this._w=e,_.call(this,128,112)}function a(t,i,h){return h^t&(i^h)}function f(t,i,h){return t&i|h&(t|i)}function c(t,i){return(t>>>28|i<<4)^(i>>>2|t<<30)^(i>>>7|t<<25)}function l(t,i){return(t>>>14|i<<18)^(t>>>18|i<<14)^(i>>>9|t<<23)}function u(t,i){return(t>>>1|i<<31)^(t>>>8|i<<24)^t>>>7}function b(t,i){return(t>>>1|i<<31)^(t>>>8|i<<24)^(t>>>7|i<<25)}function p(t,i){return(t>>>19|i<<13)^(i>>>29|t<<3)^t>>>6}function w(t,i){return(t>>>19|i<<13)^(i>>>29|t<<3)^(t>>>6|i<<26)}function d(t,i){return t>>>0<i>>>0?1:0}s(o,_),o.prototype.init=function(){return this._ah=1779033703,this._bh=3144134277,this._ch=1013904242,this._dh=2773480762,this._eh=1359893119,this._fh=2600822924,this._gh=528734635,this._hh=1541459225,this._al=4089235720,this._bl=2227873595,this._cl=4271175723,this._dl=1595750129,this._el=2917565137,this._fl=725511199,this._gl=4215389547,this._hl=327033209,this},o.prototype._update=function(t){for(var i=this._w,h=0|this._ah,s=0|this._bh,_=0|this._ch,n=0|this._dh,e=0|this._eh,o=0|this._fh,B=0|this._gh,E=0|this._hh,I=0|this._al,v=0|this._bl,y=0|this._cl,g=0|this._dl,k=0|this._el,S=0|this._fl,U=0|this._gl,x=0|this._hl,z=0;z<32;z+=2)i[z]=t.readInt32BE(4*z),i[z+1]=t.readInt32BE(4*z+4);for(;z<160;z+=2){var m=i[z-30],A=i[z-30+1],J=u(m,A),j=b(A,m);m=i[z-4],A=i[z-4+1];var q=p(m,A),C=w(A,m),L=i[z-14],M=i[z-14+1],D=i[z-32],F=i[z-32+1],G=j+M|0,H=J+L+d(G,j)|0;G=G+C|0,H=H+q+d(G,C)|0,G=G+F|0,H=H+D+d(G,F)|0,i[z]=H,i[z+1]=G}for(var K=0;K<160;K+=2){H=i[K],G=i[K+1];var N=f(h,s,_),O=f(I,v,y),P=c(h,I),Q=c(I,h),R=l(e,k),T=l(k,e),V=r[K],W=r[K+1],X=a(e,o,B),Y=a(k,S,U),Z=x+T|0,$=E+R+d(Z,x)|0;Z=Z+Y|0,$=$+X+d(Z,Y)|0,Z=Z+W|0,$=$+V+d(Z,W)|0,Z=Z+G|0,$=$+H+d(Z,G)|0;var tt=Q+O|0,it=P+N+d(tt,Q)|0;E=B,x=U,B=o,U=S,o=e,S=k,k=g+Z|0,e=n+$+d(k,g)|0,n=_,g=y,_=s,y=v,s=h,v=I,I=Z+tt|0,h=$+it+d(I,Z)|0}this._al=this._al+I|0,this._bl=this._bl+v|0,this._cl=this._cl+y|0,this._dl=this._dl+g|0,this._el=this._el+k|0,this._fl=this._fl+S|0,this._gl=this._gl+U|0,this._hl=this._hl+x|0,this._ah=this._ah+h+d(this._al,I)|0,this._bh=this._bh+s+d(this._bl,v)|0,this._ch=this._ch+_+d(this._cl,y)|0,this._dh=this._dh+n+d(this._dl,g)|0,this._eh=this._eh+e+d(this._el,k)|0,this._fh=this._fh+o+d(this._fl,S)|0,this._gh=this._gh+B+d(this._gl,U)|0,this._hh=this._hh+E+d(this._hl,x)|0},o.prototype._hash=function(){var t=n.allocUnsafe(64);function i(i,h,s){t.writeInt32BE(i,s),t.writeInt32BE(h,s+4)}return i(this._ah,this._al,0),i(this._bh,this._bl,8),i(this._ch,this._cl,16),i(this._dh,this._dl,24),i(this._eh,this._el,32),i(this._fh,this._fl,40),i(this._gh,this._gl,48),i(this._hh,this._hl,56),t},t.exports=o},"69f2":function(t,i,h){i=t.exports=function(t){t=t.toLowerCase();var h=i[t];if(!h)throw new Error(t+" is not supported (we accept pull requests)");return new h};i.sha=h("087f"),i.sha1=h("7e78"),i.sha224=h("72aa"),i.sha256=h("a255"),i.sha384=h("b837"),i.sha512=h("4fd1")},"72aa":function(t,i,h){var s=h("3fb5"),_=h("a255"),n=h("b672"),r=h("8707").Buffer,e=new Array(64);function o(){this.init(),this._w=e,n.call(this,64,56)}s(o,_),o.prototype.init=function(){return this._a=3238371032,this._b=914150663,this._c=812702999,this._d=4144912697,this._e=4290775857,this._f=1750603025,this._g=1694076839,this._h=3204075428,this},o.prototype._hash=function(){var t=r.allocUnsafe(28);return t.writeInt32BE(this._a,0),t.writeInt32BE(this._b,4),t.writeInt32BE(this._c,8),t.writeInt32BE(this._d,12),t.writeInt32BE(this._e,16),t.writeInt32BE(this._f,20),t.writeInt32BE(this._g,24),t},t.exports=o},"7e78":function(t,i,h){var s=h("3fb5"),_=h("b672"),n=h("8707").Buffer,r=[1518500249,1859775393,-1894007588,-899497514],e=new Array(80);function o(){this.init(),this._w=e,_.call(this,64,56)}function a(t){return t<<1|t>>>31}function f(t){return t<<5|t>>>27}function c(t){return t<<30|t>>>2}function l(t,i,h,s){return 0===t?i&h|~i&s:2===t?i&h|i&s|h&s:i^h^s}s(o,_),o.prototype.init=function(){return this._a=1732584193,this._b=4023233417,this._c=2562383102,this._d=271733878,this._e=3285377520,this},o.prototype._update=function(t){for(var i=this._w,h=0|this._a,s=0|this._b,_=0|this._c,n=0|this._d,e=0|this._e,o=0;o<16;++o)i[o]=t.readInt32BE(4*o);for(;o<80;++o)i[o]=a(i[o-3]^i[o-8]^i[o-14]^i[o-16]);for(var u=0;u<80;++u){var b=~~(u/20),p=f(h)+l(b,s,_,n)+e+i[u]+r[b]|0;e=n,n=_,_=c(s),s=h,h=p}this._a=h+this._a|0,this._b=s+this._b|0,this._c=_+this._c|0,this._d=n+this._d|0,this._e=e+this._e|0},o.prototype._hash=function(){var t=n.allocUnsafe(20);return t.writeInt32BE(0|this._a,0),t.writeInt32BE(0|this._b,4),t.writeInt32BE(0|this._c,8),t.writeInt32BE(0|this._d,12),t.writeInt32BE(0|this._e,16),t},t.exports=o},a255:function(t,i,h){var s=h("3fb5"),_=h("b672"),n=h("8707").Buffer,r=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],e=new Array(64);function o(){this.init(),this._w=e,_.call(this,64,56)}function a(t,i,h){return h^t&(i^h)}function f(t,i,h){return t&i|h&(t|i)}function c(t){return(t>>>2|t<<30)^(t>>>13|t<<19)^(t>>>22|t<<10)}function l(t){return(t>>>6|t<<26)^(t>>>11|t<<21)^(t>>>25|t<<7)}function u(t){return(t>>>7|t<<25)^(t>>>18|t<<14)^t>>>3}function b(t){return(t>>>17|t<<15)^(t>>>19|t<<13)^t>>>10}s(o,_),o.prototype.init=function(){return this._a=1779033703,this._b=3144134277,this._c=1013904242,this._d=2773480762,this._e=1359893119,this._f=2600822924,this._g=528734635,this._h=1541459225,this},o.prototype._update=function(t){for(var i=this._w,h=0|this._a,s=0|this._b,_=0|this._c,n=0|this._d,e=0|this._e,o=0|this._f,p=0|this._g,w=0|this._h,d=0;d<16;++d)i[d]=t.readInt32BE(4*d);for(;d<64;++d)i[d]=b(i[d-2])+i[d-7]+u(i[d-15])+i[d-16]|0;for(var B=0;B<64;++B){var E=w+l(e)+a(e,o,p)+r[B]+i[B]|0,I=c(h)+f(h,s,_)|0;w=p,p=o,o=e,e=n+E|0,n=_,_=s,s=h,h=E+I|0}this._a=h+this._a|0,this._b=s+this._b|0,this._c=_+this._c|0,this._d=n+this._d|0,this._e=e+this._e|0,this._f=o+this._f|0,this._g=p+this._g|0,this._h=w+this._h|0},o.prototype._hash=function(){var t=n.allocUnsafe(32);return t.writeInt32BE(this._a,0),t.writeInt32BE(this._b,4),t.writeInt32BE(this._c,8),t.writeInt32BE(this._d,12),t.writeInt32BE(this._e,16),t.writeInt32BE(this._f,20),t.writeInt32BE(this._g,24),t.writeInt32BE(this._h,28),t},t.exports=o},b672:function(t,i,h){var s=h("8707").Buffer;function _(t,i){this._block=s.alloc(t),this._finalSize=i,this._blockSize=t,this._len=0}_.prototype.update=function(t,i){"string"===typeof t&&(i=i||"utf8",t=s.from(t,i));for(var h=this._block,_=this._blockSize,n=t.length,r=this._len,e=0;e<n;){for(var o=r%_,a=Math.min(n-e,_-o),f=0;f<a;f++)h[o+f]=t[e+f];r+=a,e+=a,r%_===0&&this._update(h)}return this._len+=n,this},_.prototype.digest=function(t){var i=this._len%this._blockSize;this._block[i]=128,this._block.fill(0,i+1),i>=this._finalSize&&(this._update(this._block),this._block.fill(0));var h=8*this._len;if(h<=4294967295)this._block.writeUInt32BE(h,this._blockSize-4);else{var s=(4294967295&h)>>>0,_=(h-s)/4294967296;this._block.writeUInt32BE(_,this._blockSize-8),this._block.writeUInt32BE(s,this._blockSize-4)}this._update(this._block);var n=this._hash();return t?n.toString(t):n},_.prototype._update=function(){throw new Error("_update must be implemented by subclass")},t.exports=_},b837:function(t,i,h){var s=h("3fb5"),_=h("4fd1"),n=h("b672"),r=h("8707").Buffer,e=new Array(160);function o(){this.init(),this._w=e,n.call(this,128,112)}s(o,_),o.prototype.init=function(){return this._ah=3418070365,this._bh=1654270250,this._ch=2438529370,this._dh=355462360,this._eh=1731405415,this._fh=2394180231,this._gh=3675008525,this._hh=1203062813,this._al=3238371032,this._bl=914150663,this._cl=812702999,this._dl=4144912697,this._el=4290775857,this._fl=1750603025,this._gl=1694076839,this._hl=3204075428,this},o.prototype._hash=function(){var t=r.allocUnsafe(48);function i(i,h,s){t.writeInt32BE(i,s),t.writeInt32BE(h,s+4)}return i(this._ah,this._al,0),i(this._bh,this._bl,8),i(this._ch,this._cl,16),i(this._dh,this._dl,24),i(this._eh,this._el,32),i(this._fh,this._fl,40),t},t.exports=o}}]);
//# sourceMappingURL=npm.sha.js-legacy.2dd055e3.js.map