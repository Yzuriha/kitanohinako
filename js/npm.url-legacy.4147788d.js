(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["npm.url"],{"0b16":function(t,s,h){"use strict";var e=h("1985"),a=h("35e8");function r(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}s.parse=j,s.resolve=x,s.resolveObject=w,s.format=q,s.Url=r;var n=/^([a-z0-9.+-]+:)/i,o=/:[0-9]*$/,i=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,l=["<",">",'"',"`"," ","\r","\n","\t"],p=["{","}","|","\\","^","`"].concat(l),c=["'"].concat(p),u=["%","/","?",";","#"].concat(c),f=["/","?","#"],m=255,v=/^[+a-z0-9A-Z_-]{0,63}$/,g=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,y={javascript:!0,"javascript:":!0},b={javascript:!0,"javascript:":!0},O={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0},d=h("b383");function j(t,s,h){if(t&&a.isObject(t)&&t instanceof r)return t;var e=new r;return e.parse(t,s,h),e}function q(t){return a.isString(t)&&(t=j(t)),t instanceof r?t.format():r.prototype.format.call(t)}function x(t,s){return j(t,!1,!0).resolve(s)}function w(t,s){return t?j(t,!1,!0).resolveObject(s):s}r.prototype.parse=function(t,s,h){if(!a.isString(t))throw new TypeError("Parameter 'url' must be a string, not "+typeof t);var r=t.indexOf("?"),o=-1!==r&&r<t.indexOf("#")?"?":"#",l=t.split(o),p=/\\/g;l[0]=l[0].replace(p,"/"),t=l.join(o);var j=t;if(j=j.trim(),!h&&1===t.split("#").length){var q=i.exec(j);if(q)return this.path=j,this.href=j,this.pathname=q[1],q[2]?(this.search=q[2],this.query=s?d.parse(this.search.substr(1)):this.search.substr(1)):s&&(this.search="",this.query={}),this}var x=n.exec(j);if(x){x=x[0];var w=x.toLowerCase();this.protocol=w,j=j.substr(x.length)}if(h||x||j.match(/^\/\/[^@\/]+@[^@\/]+/)){var A="//"===j.substr(0,2);!A||x&&b[x]||(j=j.substr(2),this.slashes=!0)}if(!b[x]&&(A||x&&!O[x])){for(var C,I,k=-1,N=0;N<f.length;N++){var U=j.indexOf(f[N]);-1!==U&&(-1===k||U<k)&&(k=U)}I=-1===k?j.lastIndexOf("@"):j.lastIndexOf("@",k),-1!==I&&(C=j.slice(0,I),j=j.slice(I+1),this.auth=decodeURIComponent(C)),k=-1;for(N=0;N<u.length;N++){U=j.indexOf(u[N]);-1!==U&&(-1===k||U<k)&&(k=U)}-1===k&&(k=j.length),this.host=j.slice(0,k),j=j.slice(k),this.parseHost(),this.hostname=this.hostname||"";var S="["===this.hostname[0]&&"]"===this.hostname[this.hostname.length-1];if(!S)for(var R=this.hostname.split(/\./),$=(N=0,R.length);N<$;N++){var z=R[N];if(z&&!z.match(v)){for(var H="",J=0,L=z.length;J<L;J++)z.charCodeAt(J)>127?H+="x":H+=z[J];if(!H.match(v)){var Z=R.slice(0,N),_=R.slice(N+1),E=z.match(g);E&&(Z.push(E[1]),_.unshift(E[2])),_.length&&(j="/"+_.join(".")+j),this.hostname=Z.join(".");break}}}this.hostname.length>m?this.hostname="":this.hostname=this.hostname.toLowerCase(),S||(this.hostname=e.toASCII(this.hostname));var P=this.port?":"+this.port:"",T=this.hostname||"";this.host=T+P,this.href+=this.host,S&&(this.hostname=this.hostname.substr(1,this.hostname.length-2),"/"!==j[0]&&(j="/"+j))}if(!y[w])for(N=0,$=c.length;N<$;N++){var B=c[N];if(-1!==j.indexOf(B)){var D=encodeURIComponent(B);D===B&&(D=escape(B)),j=j.split(B).join(D)}}var F=j.indexOf("#");-1!==F&&(this.hash=j.substr(F),j=j.slice(0,F));var G=j.indexOf("?");if(-1!==G?(this.search=j.substr(G),this.query=j.substr(G+1),s&&(this.query=d.parse(this.query)),j=j.slice(0,G)):s&&(this.search="",this.query={}),j&&(this.pathname=j),O[w]&&this.hostname&&!this.pathname&&(this.pathname="/"),this.pathname||this.search){P=this.pathname||"";var K=this.search||"";this.path=P+K}return this.href=this.format(),this},r.prototype.format=function(){var t=this.auth||"";t&&(t=encodeURIComponent(t),t=t.replace(/%3A/i,":"),t+="@");var s=this.protocol||"",h=this.pathname||"",e=this.hash||"",r=!1,n="";this.host?r=t+this.host:this.hostname&&(r=t+(-1===this.hostname.indexOf(":")?this.hostname:"["+this.hostname+"]"),this.port&&(r+=":"+this.port)),this.query&&a.isObject(this.query)&&Object.keys(this.query).length&&(n=d.stringify(this.query));var o=this.search||n&&"?"+n||"";return s&&":"!==s.substr(-1)&&(s+=":"),this.slashes||(!s||O[s])&&!1!==r?(r="//"+(r||""),h&&"/"!==h.charAt(0)&&(h="/"+h)):r||(r=""),e&&"#"!==e.charAt(0)&&(e="#"+e),o&&"?"!==o.charAt(0)&&(o="?"+o),h=h.replace(/[?#]/g,(function(t){return encodeURIComponent(t)})),o=o.replace("#","%23"),s+r+h+o+e},r.prototype.resolve=function(t){return this.resolveObject(j(t,!1,!0)).format()},r.prototype.resolveObject=function(t){if(a.isString(t)){var s=new r;s.parse(t,!1,!0),t=s}for(var h=new r,e=Object.keys(this),n=0;n<e.length;n++){var o=e[n];h[o]=this[o]}if(h.hash=t.hash,""===t.href)return h.href=h.format(),h;if(t.slashes&&!t.protocol){for(var i=Object.keys(t),l=0;l<i.length;l++){var p=i[l];"protocol"!==p&&(h[p]=t[p])}return O[h.protocol]&&h.hostname&&!h.pathname&&(h.path=h.pathname="/"),h.href=h.format(),h}if(t.protocol&&t.protocol!==h.protocol){if(!O[t.protocol]){for(var c=Object.keys(t),u=0;u<c.length;u++){var f=c[u];h[f]=t[f]}return h.href=h.format(),h}if(h.protocol=t.protocol,t.host||b[t.protocol])h.pathname=t.pathname;else{var m=(t.pathname||"").split("/");while(m.length&&!(t.host=m.shift()));t.host||(t.host=""),t.hostname||(t.hostname=""),""!==m[0]&&m.unshift(""),m.length<2&&m.unshift(""),h.pathname=m.join("/")}if(h.search=t.search,h.query=t.query,h.host=t.host||"",h.auth=t.auth,h.hostname=t.hostname||t.host,h.port=t.port,h.pathname||h.search){var v=h.pathname||"",g=h.search||"";h.path=v+g}return h.slashes=h.slashes||t.slashes,h.href=h.format(),h}var y=h.pathname&&"/"===h.pathname.charAt(0),d=t.host||t.pathname&&"/"===t.pathname.charAt(0),j=d||y||h.host&&t.pathname,q=j,x=h.pathname&&h.pathname.split("/")||[],w=(m=t.pathname&&t.pathname.split("/")||[],h.protocol&&!O[h.protocol]);if(w&&(h.hostname="",h.port=null,h.host&&(""===x[0]?x[0]=h.host:x.unshift(h.host)),h.host="",t.protocol&&(t.hostname=null,t.port=null,t.host&&(""===m[0]?m[0]=t.host:m.unshift(t.host)),t.host=null),j=j&&(""===m[0]||""===x[0])),d)h.host=t.host||""===t.host?t.host:h.host,h.hostname=t.hostname||""===t.hostname?t.hostname:h.hostname,h.search=t.search,h.query=t.query,x=m;else if(m.length)x||(x=[]),x.pop(),x=x.concat(m),h.search=t.search,h.query=t.query;else if(!a.isNullOrUndefined(t.search)){if(w){h.hostname=h.host=x.shift();var A=!!(h.host&&h.host.indexOf("@")>0)&&h.host.split("@");A&&(h.auth=A.shift(),h.host=h.hostname=A.shift())}return h.search=t.search,h.query=t.query,a.isNull(h.pathname)&&a.isNull(h.search)||(h.path=(h.pathname?h.pathname:"")+(h.search?h.search:"")),h.href=h.format(),h}if(!x.length)return h.pathname=null,h.search?h.path="/"+h.search:h.path=null,h.href=h.format(),h;for(var C=x.slice(-1)[0],I=(h.host||t.host||x.length>1)&&("."===C||".."===C)||""===C,k=0,N=x.length;N>=0;N--)C=x[N],"."===C?x.splice(N,1):".."===C?(x.splice(N,1),k++):k&&(x.splice(N,1),k--);if(!j&&!q)for(;k--;k)x.unshift("..");!j||""===x[0]||x[0]&&"/"===x[0].charAt(0)||x.unshift(""),I&&"/"!==x.join("/").substr(-1)&&x.push("");var U=""===x[0]||x[0]&&"/"===x[0].charAt(0);if(w){h.hostname=h.host=U?"":x.length?x.shift():"";A=!!(h.host&&h.host.indexOf("@")>0)&&h.host.split("@");A&&(h.auth=A.shift(),h.host=h.hostname=A.shift())}return j=j||h.host&&x.length,j&&!U&&x.unshift(""),x.length?h.pathname=x.join("/"):(h.pathname=null,h.path=null),a.isNull(h.pathname)&&a.isNull(h.search)||(h.path=(h.pathname?h.pathname:"")+(h.search?h.search:"")),h.auth=t.auth||h.auth,h.slashes=h.slashes||t.slashes,h.href=h.format(),h},r.prototype.parseHost=function(){var t=this.host,s=o.exec(t);s&&(s=s[0],":"!==s&&(this.port=s.substr(1)),t=t.substr(0,t.length-s.length)),t&&(this.hostname=t)}},"35e8":function(t,s,h){"use strict";t.exports={isString:function(t){return"string"===typeof t},isObject:function(t){return"object"===typeof t&&null!==t},isNull:function(t){return null===t},isNullOrUndefined:function(t){return null==t}}}}]);
//# sourceMappingURL=npm.url-legacy.4147788d.js.map