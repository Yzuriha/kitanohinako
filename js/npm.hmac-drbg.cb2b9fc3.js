(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["npm.hmac-drbg"],{"6aa2":function(t,e,i){"use strict";var s=i("7d92"),h=i("7658"),n=i("da3e");function r(t){if(!(this instanceof r))return new r(t);this.hash=t.hash,this.predResist=!!t.predResist,this.outLen=this.hash.outSize,this.minEntropy=t.minEntropy||this.hash.hmacStrength,this._reseed=null,this.reseedInterval=null,this.K=null,this.V=null;var e=h.toArray(t.entropy,t.entropyEnc||"hex"),i=h.toArray(t.nonce,t.nonceEnc||"hex"),s=h.toArray(t.pers,t.persEnc||"hex");n(e.length>=this.minEntropy/8,"Not enough entropy. Minimum is: "+this.minEntropy+" bits"),this._init(e,i,s)}t.exports=r,r.prototype._init=function(t,e,i){var s=t.concat(e).concat(i);this.K=new Array(this.outLen/8),this.V=new Array(this.outLen/8);for(var h=0;h<this.V.length;h++)this.K[h]=0,this.V[h]=1;this._update(s),this._reseed=1,this.reseedInterval=281474976710656},r.prototype._hmac=function(){return new s.hmac(this.hash,this.K)},r.prototype._update=function(t){var e=this._hmac().update(this.V).update([0]);t&&(e=e.update(t)),this.K=e.digest(),this.V=this._hmac().update(this.V).digest(),t&&(this.K=this._hmac().update(this.V).update([1]).update(t).digest(),this.V=this._hmac().update(this.V).digest())},r.prototype.reseed=function(t,e,i,s){"string"!==typeof e&&(s=i,i=e,e=null),t=h.toArray(t,e),i=h.toArray(i,s),n(t.length>=this.minEntropy/8,"Not enough entropy. Minimum is: "+this.minEntropy+" bits"),this._update(t.concat(i||[])),this._reseed=1},r.prototype.generate=function(t,e,i,s){if(this._reseed>this.reseedInterval)throw new Error("Reseed is required");"string"!==typeof e&&(s=i,i=e,e=null),i&&(i=h.toArray(i,s||"hex"),this._update(i));var n=[];while(n.length<t)this.V=this._hmac().update(this.V).digest(),n=n.concat(this.V);var r=n.slice(0,t);return this._update(i),this._reseed++,h.encode(r,e)}}}]);
//# sourceMappingURL=npm.hmac-drbg.cb2b9fc3.js.map