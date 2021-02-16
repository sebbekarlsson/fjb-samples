if (typeof exports == "undefined" && typeof window != "undefined"){  var exports = {};  var module = {'exports': exports};  window.exports = exports;} ;var _0x55e36793add0= (function(module={}, exports={}){function bug (v) {console.log(`Debug: ${v}`);
} ;this.bug=bug;
/* `./helpers/./bug.js` */
; return (Object.assign(this, module.exports || exports));}).apply({});let bug=(_0x55e36793add0.bug || _0x55e36793add0); ;var _0x55e3678e5990= (function(module={}, exports={}){
 function add (x , y) {bug(x);return x + y;
} ;this.add=add;
/* `./helpers/add.js` */
; return (Object.assign(this, module.exports || exports));}).apply({});let add=(_0x55e3678e5990.add || _0x55e3678e5990); ;var _0x55e3678e9e20= (function(module={}, exports={}){
 function sub (x , y) {bug(y);return x - y;
} ;this.sub=sub;
/* `./helpers/sub.js` */
; return (Object.assign(this, module.exports || exports));}).apply({});let sub=(_0x55e3678e9e20.sub || _0x55e3678e9e20);
/* IMPORT `index.js` */ 

function main () {const x=4;const y=8;const z=add(x , y);const v=sub(z , x);console.log(`Output: ${v}`);
} 

/* `index.js` */
;main();

