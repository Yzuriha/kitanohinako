(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["npm.stream-browserify"],{d485:function(e,r,n){e.exports=i;var o=n("faa1").EventEmitter,t=n("3fb5");function i(){o.call(this)}t(i,o),i.Readable=n("e372"),i.Writable=n("2c63"),i.Duplex=n("0960"),i.Transform=n("d17b"),i.PassThrough=n("c2ae"),i.Stream=i,i.prototype.pipe=function(e,r){var n=this;function t(r){e.writable&&!1===e.write(r)&&n.pause&&n.pause()}function i(){n.readable&&n.resume&&n.resume()}n.on("data",t),e.on("drain",i),e._isStdio||r&&!1===r.end||(n.on("end",a),n.on("close",c));var s=!1;function a(){s||(s=!0,e.end())}function c(){s||(s=!0,"function"===typeof e.destroy&&e.destroy())}function d(e){if(u(),0===o.listenerCount(this,"error"))throw e}function u(){n.removeListener("data",t),e.removeListener("drain",i),n.removeListener("end",a),n.removeListener("close",c),n.removeListener("error",d),e.removeListener("error",d),n.removeListener("end",u),n.removeListener("close",u),e.removeListener("close",u)}return n.on("error",d),e.on("error",d),n.on("end",u),n.on("close",u),e.on("close",u),e.emit("pipe",n),e}}}]);
//# sourceMappingURL=npm.stream-browserify.7f3c2ebb.js.map