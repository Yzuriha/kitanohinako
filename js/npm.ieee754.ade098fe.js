(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["npm.ieee754"],{9152:function(o,a){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
a.read=function(o,a,t,w,p){var h,n,r=8*p-w-1,M=(1<<r)-1,e=M>>1,i=-7,f=t?p-1:0,s=t?-1:1,N=o[a+f];for(f+=s,h=N&(1<<-i)-1,N>>=-i,i+=r;i>0;h=256*h+o[a+f],f+=s,i-=8);for(n=h&(1<<-i)-1,h>>=-i,i+=w;i>0;n=256*n+o[a+f],f+=s,i-=8);if(0===h)h=1-e;else{if(h===M)return n?NaN:1/0*(N?-1:1);n+=Math.pow(2,w),h-=e}return(N?-1:1)*n*Math.pow(2,h-w)},a.write=function(o,a,t,w,p,h){var n,r,M,e=8*h-p-1,i=(1<<e)-1,f=i>>1,s=23===p?Math.pow(2,-24)-Math.pow(2,-77):0,N=w?0:h-1,u=w?1:-1,c=a<0||0===a&&1/a<0?1:0;for(a=Math.abs(a),isNaN(a)||a===1/0?(r=isNaN(a)?1:0,n=i):(n=Math.floor(Math.log(a)/Math.LN2),a*(M=Math.pow(2,-n))<1&&(n--,M*=2),a+=n+f>=1?s/M:s*Math.pow(2,1-f),a*M>=2&&(n++,M/=2),n+f>=i?(r=0,n=i):n+f>=1?(r=(a*M-1)*Math.pow(2,p),n+=f):(r=a*Math.pow(2,f-1)*Math.pow(2,p),n=0));p>=8;o[t+N]=255&r,N+=u,r/=256,p-=8);for(n=n<<p|r,e+=p;e>0;o[t+N]=255&n,N+=u,n/=256,e-=8);o[t+N-u]|=128*c}}}]);
//# sourceMappingURL=npm.ieee754.ade098fe.js.map