!function(n,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.LibSampleRate=r():n.LibSampleRate=r()}(self,(function(){return(()=>{var n={17:(n,r,e)=>{var t;function o(n){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}n=e.nmd(n),console.log("old glue");var i,a=(i="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,function(n){var r,e,t=void 0!==(n=n||{})?n:{};t.ready=new Promise((function(n,t){r=n,e=t}));var a,u={};for(a in t)t.hasOwnProperty(a)&&(u[a]=t[a]);var f=[],c=function(n,r){throw r},l="";"undefined"!=typeof document&&document.currentScript&&(l=document.currentScript.src),i&&(l=i),l=0!==l.indexOf("blob:")?l.substr(0,l.lastIndexOf("/")+1):"",t.print||console.log.bind(console);var s,d,p,h=t.printErr||console.warn.bind(console);for(a in u)u.hasOwnProperty(a)&&(t[a]=u[a]);u=null,t.arguments&&(f=t.arguments),t.thisProgram&&t.thisProgram,t.quit&&(c=t.quit),t.wasmBinary&&(s=t.wasmBinary),t.noExitRuntime&&(d=t.noExitRuntime),"object"!==("undefined"==typeof WebAssembly?"undefined":o(WebAssembly))&&V("no native wasm support detected");var v=!1,y="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function m(n,r){return n?function(n,r,e){for(var t=r+e,o=r;n[o]&&!(o>=t);)++o;if(o-r>16&&n.subarray&&y)return y.decode(n.subarray(r,o));for(var i="";r<o;){var a=n[r++];if(128&a){var u=63&n[r++];if(192!=(224&a)){var f=63&n[r++];if((a=224==(240&a)?(15&a)<<12|u<<6|f:(7&a)<<18|u<<12|f<<6|63&n[r++])<65536)i+=String.fromCharCode(a);else{var c=a-65536;i+=String.fromCharCode(55296|c>>10,56320|1023&c)}}else i+=String.fromCharCode((31&a)<<6|u)}else i+=String.fromCharCode(a)}return i}(b,n,r):""}var g,w,b,_,A,T,S,C,E,R="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function P(n,r){for(var e=n,t=e>>1,o=t+r/2;!(t>=o)&&A[t];)++t;if((e=t<<1)-n>32&&R)return R.decode(b.subarray(n,e));for(var i="",a=0;!(a>=r/2);++a){var u=_[n+2*a>>1];if(0==u)break;i+=String.fromCharCode(u)}return i}function k(n,r,e){if(void 0===e&&(e=2147483647),e<2)return 0;for(var t=r,o=(e-=2)<2*n.length?e/2:n.length,i=0;i<o;++i){var a=n.charCodeAt(i);_[r>>1]=a,r+=2}return _[r>>1]=0,r-t}function W(n){return 2*n.length}function I(n,r){for(var e=0,t="";!(e>=r/4);){var o=T[n+4*e>>2];if(0==o)break;if(++e,o>=65536){var i=o-65536;t+=String.fromCharCode(55296|i>>10,56320|1023&i)}else t+=String.fromCharCode(o)}return t}function F(n,r,e){if(void 0===e&&(e=2147483647),e<4)return 0;for(var t=r,o=t+e-4,i=0;i<n.length;++i){var a=n.charCodeAt(i);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&n.charCodeAt(++i)),T[r>>2]=a,(r+=4)+4>o)break}return T[r>>2]=0,r-t}function x(n){for(var r=0,e=0;e<n.length;++e){var t=n.charCodeAt(e);t>=55296&&t<=57343&&++e,r+=4}return r}function O(n){g=n,t.HEAP8=w=new Int8Array(n),t.HEAP16=_=new Int16Array(n),t.HEAP32=T=new Int32Array(n),t.HEAPU8=b=new Uint8Array(n),t.HEAPU16=A=new Uint16Array(n),t.HEAPU32=S=new Uint32Array(n),t.HEAPF32=C=new Float32Array(n),t.HEAPF64=E=new Float64Array(n)}t.INITIAL_MEMORY;var U,j=[],D=[],M=[],B=[],N=0,L=null,H=null;function V(n){t.onAbort&&t.onAbort(n),h(n+=""),v=!0,n="abort("+n+"). Build with -s ASSERTIONS=1 for more info.";var r=new WebAssembly.RuntimeError(n);throw e(r),r}function z(n){return r=n,e="data:application/octet-stream;base64,",String.prototype.startsWith?r.startsWith(e):0===r.indexOf(e);var r,e}t.preloadedImages={},t.preloadedAudios={};var Y,q="glue.wasm";function Q(n){try{if(n==q&&s)return new Uint8Array(s);throw"both async and sync fetching of the wasm failed"}catch(n){V(n)}}function Z(n){for(;n.length>0;){var r=n.shift();if("function"!=typeof r){var e=r.func;"number"==typeof e?void 0===r.arg?U.get(e)():U.get(e)(r.arg):e(void 0===r.arg?null:r.arg)}else r(t)}}function J(n){switch(n){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+n)}}z(q)||(Y=q,q=t.locateFile?t.locateFile(Y,l):l+Y);var $=void 0;function G(n){for(var r="",e=n;b[e];)r+=$[b[e++]];return r}var K={},X={},nn={};function rn(n){if(void 0===n)return"_unknown";var r=(n=n.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return r>=48&&r<=57?"_"+n:n}function en(n,r){return n=rn(n),new Function("body","return function "+n+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(r)}function tn(n,r){var e=en(r,(function(n){this.name=r,this.message=n;var e=new Error(n).stack;void 0!==e&&(this.stack=this.toString()+"\n"+e.replace(/^Error(:[^\n]*)?\n/,""))}));return e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},e}var on=void 0;function an(n){throw new on(n)}var un=void 0;function fn(n){throw new un(n)}function cn(n,r,e){if(e=e||{},!("argPackAdvance"in r))throw new TypeError("registerType registeredInstance requires argPackAdvance");var t=r.name;if(n||an('type "'+t+'" must have a positive integer typeid pointer'),X.hasOwnProperty(n)){if(e.ignoreDuplicateRegistrations)return;an("Cannot register type '"+t+"' twice")}if(X[n]=r,delete nn[n],K.hasOwnProperty(n)){var o=K[n];delete K[n],o.forEach((function(n){n()}))}}var ln=[],sn=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function dn(n){n>4&&0==--sn[n].refcount&&(sn[n]=void 0,ln.push(n))}function pn(n){switch(n){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var r=ln.length?ln.pop():sn.length;return sn[r]={refcount:1,value:n},r}}function hn(n){return this.fromWireType(S[n>>2])}function vn(n){if(null===n)return"null";var r=o(n);return"object"===r||"array"===r||"function"===r?n.toString():""+n}function yn(n,r){switch(r){case 2:return function(n){return this.fromWireType(C[n>>2])};case 3:return function(n){return this.fromWireType(E[n>>3])};default:throw new TypeError("Unknown float type: "+n)}}function mn(n){for(;n.length;){var r=n.pop();n.pop()(r)}}function gn(n,r,e){return-1!=n.indexOf("j")?function(n,r,e){return e&&e.length?t["dynCall_"+n].apply(null,[r].concat(e)):t["dynCall_"+n].call(null,r)}(n,r,e):U.get(r).apply(null,e)}var wn=void 0;function bn(n){var r=Pn(n),e=G(r);return En(r),e}function _n(n,r,e){switch(r){case 0:return e?function(n){return w[n]}:function(n){return b[n]};case 1:return e?function(n){return _[n>>1]}:function(n){return A[n>>1]};case 2:return e?function(n){return T[n>>2]}:function(n){return S[n>>2]};default:throw new TypeError("Unknown integer type: "+n)}}function An(n){try{return p.grow(n-g.byteLength+65535>>>16),O(p.buffer),1}catch(n){}}!function(){for(var n=new Array(256),r=0;r<256;++r)n[r]=String.fromCharCode(r);$=n}(),on=t.BindingError=tn(Error,"BindingError"),un=t.InternalError=tn(Error,"InternalError"),t.count_emval_handles=function(){for(var n=0,r=5;r<sn.length;++r)void 0!==sn[r]&&++n;return n},t.get_first_emval=function(){for(var n=5;n<sn.length;++n)if(void 0!==sn[n])return sn[n];return null},wn=t.UnboundTypeError=tn(Error,"UnboundTypeError"),D.push({func:function(){Cn()}});var Tn,Sn={a:function(n,r,e,t){V("Assertion failed: "+m(n)+", at: "+[r?m(r):"unknown filename",e,t?m(t):"unknown function"])},k:function(n,r,e,t,o){var i=J(e);cn(n,{name:r=G(r),fromWireType:function(n){return!!n},toWireType:function(n,r){return r?t:o},argPackAdvance:8,readValueFromPointer:function(n){var t;if(1===e)t=w;else if(2===e)t=_;else{if(4!==e)throw new TypeError("Unknown boolean type size: "+r);t=T}return this.fromWireType(t[n>>i])},destructorFunction:null})},j:function(n,r){cn(n,{name:r=G(r),fromWireType:function(n){var r=sn[n].value;return dn(n),r},toWireType:function(n,r){return pn(r)},argPackAdvance:8,readValueFromPointer:hn,destructorFunction:null})},h:function(n,r,e){var t=J(e);cn(n,{name:r=G(r),fromWireType:function(n){return n},toWireType:function(n,r){if("number"!=typeof r&&"boolean"!=typeof r)throw new TypeError('Cannot convert "'+vn(r)+'" to '+this.name);return r},argPackAdvance:8,readValueFromPointer:yn(r,t),destructorFunction:null})},d:function(n,r,e,i,a,u){var f=function(n,r){for(var e=[],t=0;t<n;t++)e.push(T[(r>>2)+t]);return e}(r,e);n=G(n),a=function(n,r){var e=-1!=(n=G(n)).indexOf("j")?function(n,r){n.indexOf("j")>=0||V("Assertion failed: getDynCaller should only be called with i64 sigs");var e=[];return function(){e.length=arguments.length;for(var t=0;t<arguments.length;t++)e[t]=arguments[t];return gn(n,r,e)}}(n,r):U.get(r);return"function"!=typeof e&&an("unknown function pointer with signature "+n+": "+r),e}(i,a),function(n,r,e){t.hasOwnProperty(n)?((void 0===e||void 0!==t[n].overloadTable&&void 0!==t[n].overloadTable[e])&&an("Cannot register public name '"+n+"' twice"),function(n,r,e){if(void 0===n[r].overloadTable){var t=n[r];n[r]=function(){return n[r].overloadTable.hasOwnProperty(arguments.length)||an("Function '"+e+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+n[r].overloadTable+")!"),n[r].overloadTable[arguments.length].apply(this,arguments)},n[r].overloadTable=[],n[r].overloadTable[t.argCount]=t}}(t,n,n),t.hasOwnProperty(e)&&an("Cannot register multiple overloads of a function with the same number of arguments ("+e+")!"),t[n].overloadTable[e]=r):(t[n]=r,void 0!==e&&(t[n].numArguments=e))}(n,(function(){!function(n,r){var e=[],t={};throw r.forEach((function n(r){t[r]||X[r]||(nn[r]?nn[r].forEach(n):(e.push(r),t[r]=!0))})),new wn(n+": "+e.map(bn).join([", "]))}("Cannot call "+n+" due to unbound types",f)}),r-1),function(e,i,f){function c(i){var f=function(e){var i=[e[0],null].concat(e.slice(1));return function(n,r,e){t.hasOwnProperty(n)||fn("Replacing nonexistant public symbol"),void 0!==t[n].overloadTable&&void 0!==e?t[n].overloadTable[e]=r:(t[n]=r,t[n].argCount=e)}(n,function(n,r,e,t,i){var a=r.length;a<2&&an("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var u=null!==r[1]&&null!==e,f=!1,c=1;c<r.length;++c)if(null!==r[c]&&void 0===r[c].destructorFunction){f=!0;break}var l="void"!==r[0].name,s="",d="";for(c=0;c<a-2;++c)s+=(0!==c?", ":"")+"arg"+c,d+=(0!==c?", ":"")+"arg"+c+"Wired";var p="return function "+rn(n)+"("+s+") {\nif (arguments.length !== "+(a-2)+") {\nthrowBindingError('function "+n+" called with ' + arguments.length + ' arguments, expected "+(a-2)+" args!');\n}\n";f&&(p+="var destructors = [];\n");var h=f?"destructors":"null",v=["throwBindingError","invoker","fn","runDestructors","retType","classParam"],y=[an,t,i,mn,r[0],r[1]];for(u&&(p+="var thisWired = classParam.toWireType("+h+", this);\n"),c=0;c<a-2;++c)p+="var arg"+c+"Wired = argType"+c+".toWireType("+h+", arg"+c+"); // "+r[c+2].name+"\n",v.push("argType"+c),y.push(r[c+2]);if(u&&(d="thisWired"+(d.length>0?", ":"")+d),p+=(l?"var rv = ":"")+"invoker(fn"+(d.length>0?", ":"")+d+");\n",f)p+="runDestructors(destructors);\n";else for(c=u?1:2;c<r.length;++c){var m=1===c?"thisWired":"arg"+(c-2)+"Wired";null!==r[c].destructorFunction&&(p+=m+"_dtor("+m+"); // "+r[c].name+"\n",v.push(m+"_dtor"),y.push(r[c].destructorFunction))}return l&&(p+="var ret = retType.fromWireType(rv);\nreturn ret;\n"),p+="}\n",v.push(p),function(n,r){if(!(n instanceof Function))throw new TypeError("new_ called with constructor type "+o(n)+" which is not a function");var e=en(n.name||"unknownFunctionName",(function(){}));e.prototype=n.prototype;var t=new e,i=n.apply(t,r);return i instanceof Object?i:t}(Function,v).apply(null,y)}(n,i,null,a,u),r-1),[]}(i);f.length!==e.length&&fn("Mismatched type converter count");for(var c=0;c<e.length;++c)cn(e[c],f[c])}e.forEach((function(n){nn[n]=i}));var l=new Array(i.length),s=[],d=0;i.forEach((function(n,r){X.hasOwnProperty(n)?l[r]=X[n]:(s.push(n),K.hasOwnProperty(n)||(K[n]=[]),K[n].push((function(){l[r]=X[n],++d===s.length&&c(l)})))})),0===s.length&&c(l)}([],f)},c:function(n,r,e,t,o){r=G(r),-1===o&&(o=4294967295);var i=J(e),a=function(n){return n};if(0===t){var u=32-8*e;a=function(n){return n<<u>>>u}}var f=-1!=r.indexOf("unsigned");cn(n,{name:r,fromWireType:a,toWireType:function(n,e){if("number"!=typeof e&&"boolean"!=typeof e)throw new TypeError('Cannot convert "'+vn(e)+'" to '+this.name);if(e<t||e>o)throw new TypeError('Passing a number "'+vn(e)+'" from JS side to C/C++ side to an argument of type "'+r+'", which is outside the valid range ['+t+", "+o+"]!");return f?e>>>0:0|e},argPackAdvance:8,readValueFromPointer:_n(r,i,0!==t),destructorFunction:null})},b:function(n,r,e){var t=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][r];function o(n){var r=S,e=r[n>>=2],o=r[n+1];return new t(g,o,e)}cn(n,{name:e=G(e),fromWireType:o,argPackAdvance:8,readValueFromPointer:o},{ignoreDuplicateRegistrations:!0})},f:function(n,r){var e="std::string"===(r=G(r));cn(n,{name:r,fromWireType:function(n){var r,t=S[n>>2];if(e)for(var o=n+4,i=0;i<=t;++i){var a=n+4+i;if(i==t||0==b[a]){var u=m(o,a-o);void 0===r?r=u:(r+=String.fromCharCode(0),r+=u),o=a+1}}else{var f=new Array(t);for(i=0;i<t;++i)f[i]=String.fromCharCode(b[n+4+i]);r=f.join("")}return En(n),r},toWireType:function(n,r){r instanceof ArrayBuffer&&(r=new Uint8Array(r));var t="string"==typeof r;t||r instanceof Uint8Array||r instanceof Uint8ClampedArray||r instanceof Int8Array||an("Cannot pass non-string to std::string");var o=(e&&t?function(){return function(n){for(var r=0,e=0;e<n.length;++e){var t=n.charCodeAt(e);t>=55296&&t<=57343&&(t=65536+((1023&t)<<10)|1023&n.charCodeAt(++e)),t<=127?++r:r+=t<=2047?2:t<=65535?3:4}return r}(r)}:function(){return r.length})(),i=Rn(4+o+1);if(S[i>>2]=o,e&&t)!function(n,r,e,t){if(!(t>0))return 0;for(var o=e+t-1,i=0;i<n.length;++i){var a=n.charCodeAt(i);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&n.charCodeAt(++i)),a<=127){if(e>=o)break;r[e++]=a}else if(a<=2047){if(e+1>=o)break;r[e++]=192|a>>6,r[e++]=128|63&a}else if(a<=65535){if(e+2>=o)break;r[e++]=224|a>>12,r[e++]=128|a>>6&63,r[e++]=128|63&a}else{if(e+3>=o)break;r[e++]=240|a>>18,r[e++]=128|a>>12&63,r[e++]=128|a>>6&63,r[e++]=128|63&a}}r[e]=0}(r,b,i+4,o+1);else if(t)for(var a=0;a<o;++a){var u=r.charCodeAt(a);u>255&&(En(i),an("String has UTF-16 code units that do not fit in 8 bits")),b[i+4+a]=u}else for(a=0;a<o;++a)b[i+4+a]=r[a];return null!==n&&n.push(En,i),i},argPackAdvance:8,readValueFromPointer:hn,destructorFunction:function(n){En(n)}})},e:function(n,r,e){var t,o,i,a,u;e=G(e),2===r?(t=P,o=k,a=W,i=function(){return A},u=1):4===r&&(t=I,o=F,a=x,i=function(){return S},u=2),cn(n,{name:e,fromWireType:function(n){for(var e,o=S[n>>2],a=i(),f=n+4,c=0;c<=o;++c){var l=n+4+c*r;if(c==o||0==a[l>>u]){var s=t(f,l-f);void 0===e?e=s:(e+=String.fromCharCode(0),e+=s),f=l+r}}return En(n),e},toWireType:function(n,t){"string"!=typeof t&&an("Cannot pass non-string to C++ string type "+e);var i=a(t),f=Rn(4+i+r);return S[f>>2]=i>>u,o(t,f+4,i+r),null!==n&&n.push(En,f),f},argPackAdvance:8,readValueFromPointer:hn,destructorFunction:function(n){En(n)}})},l:function(n,r){cn(n,{isVoid:!0,name:r=G(r),argPackAdvance:0,fromWireType:function(){},toWireType:function(n,r){}})},m:dn,n:function(n){n>4&&(sn[n].refcount+=1)},i:function(n,r){var e,t;return"_emval_take_value",void 0===(t=X[e=n])&&an("_emval_take_value has unknown type "+bn(e)),pn((n=t).readValueFromPointer(r))},g:function(){V()},o:function(n,r,e){b.copyWithin(n,r,r+e)},p:function(n){n>>>=0;var r=b.length,e=2147483648;if(n>e)return!1;for(var t,o=1;o<=4;o*=2){var i=r*(1+.2/o);if(i=Math.min(i,n+100663296),An(Math.min(e,((t=Math.max(16777216,n,i))%65536>0&&(t+=65536-t%65536),t))))return!0}return!1}},Cn=(function(){var n={a:Sn};function r(n,r){var e=n.exports;t.asm=e,O((p=t.asm.q).buffer),U=t.asm.r,function(n){if(N--,t.monitorRunDependencies&&t.monitorRunDependencies(N),0==N&&(null!==L&&(clearInterval(L),L=null),H)){var r=H;H=null,r()}}()}function o(n){r(n.instance)}function i(r){return(s||"function"!=typeof fetch?Promise.resolve().then((function(){return Q(q)})):fetch(q,{credentials:"same-origin"}).then((function(n){if(!n.ok)throw"failed to load wasm binary file at '"+q+"'";return n.arrayBuffer()})).catch((function(){return Q(q)}))).then((function(r){return WebAssembly.instantiate(r,n)})).then(r,(function(n){h("failed to asynchronously prepare wasm: "+n),V(n)}))}if(N++,t.monitorRunDependencies&&t.monitorRunDependencies(N),t.instantiateWasm)try{return t.instantiateWasm(n,r)}catch(n){return h("Module.instantiateWasm callback failed with error: "+n),!1}(s||"function"!=typeof WebAssembly.instantiateStreaming||z(q)||"function"!=typeof fetch?i(o):fetch(q,{credentials:"same-origin"}).then((function(r){return WebAssembly.instantiateStreaming(r,n).then(o,(function(n){return h("wasm streaming compile failed: "+n),h("falling back to ArrayBuffer instantiation"),i(o)}))}))).catch(e)}(),t.___wasm_call_ctors=function(){return(Cn=t.___wasm_call_ctors=t.asm.s).apply(null,arguments)}),En=(t._main=function(){return(t._main=t.asm.t).apply(null,arguments)},t._free=function(){return(En=t._free=t.asm.u).apply(null,arguments)}),Rn=t._malloc=function(){return(Rn=t._malloc=t.asm.v).apply(null,arguments)},Pn=t.___getTypeName=function(){return(Pn=t.___getTypeName=t.asm.w).apply(null,arguments)};function kn(n){this.name="ExitStatus",this.message="Program terminated with exit("+n+")",this.status=n}function Wn(n){function e(){Tn||(Tn=!0,t.calledRun=!0,v||(Z(D),Z(M),r(t),t.onRuntimeInitialized&&t.onRuntimeInitialized(),In&&function(n){var r,e=t._main;try{r=e(0,0),d&&0===r||(d||(t.onExit&&t.onExit(r),v=!0),c(r,new kn(r)))}catch(n){if(n instanceof kn)return;if("unwind"==n)return void(d=!0);var i=n;n&&"object"===o(n)&&n.stack&&(i=[n,n.stack]),h("exception thrown: "+i),c(1,n)}}(),function(){if(t.postRun)for("function"==typeof t.postRun&&(t.postRun=[t.postRun]);t.postRun.length;)n=t.postRun.shift(),B.unshift(n);var n;Z(B)}()))}n=n||f,N>0||(function(){if(t.preRun)for("function"==typeof t.preRun&&(t.preRun=[t.preRun]);t.preRun.length;)n=t.preRun.shift(),j.unshift(n);var n;Z(j)}(),N>0||(t.setStatus?(t.setStatus("Running..."),setTimeout((function(){setTimeout((function(){t.setStatus("")}),1),e()}),1)):e()))}if(t.___embind_register_native_and_builtin_types=function(){return(t.___embind_register_native_and_builtin_types=t.asm.x).apply(null,arguments)},H=function n(){Tn||Wn(),Tn||(H=n)},t.run=Wn,t.preInit)for("function"==typeof t.preInit&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.pop()();var In=!0;return t.noInitialRun&&(In=!1),d=!0,Wn(),n.ready});"object"===o(r)&&"object"===o(n)?n.exports=a:void 0===(t=function(){return a}.apply(r,[]))||(n.exports=t)},498:(n,r,e)=>{"use strict";e.r(r),e.d(r,{ConverterType:()=>c,create:()=>l});var t=e(17),o=e.n(t);function i(n,r){for(var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,t=null===e?new Float32Array(n):e,o=0;o<n;o++)t[o]=r[o];return t}function a(n,r){for(var e=0;e<r.length;e++){var t=r[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}var u=1008e3,f=function(){function n(r,e,t,o,i){!function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(this,n),this.module=r,this.converterType=e,this.nChannels=t,this.inputSampleRate=o,this.outputSampleRate=i,this.ratio=i/o,this.isDestroyed=!1,r.init(t,e,o,i),this.sourceArray=r.sourceArray(u),this.targetArray=r.targetArray(u)}var r,e;return r=n,(e=[{key:"simple",value:function(n){return this._resample(this.module.simple,n)}},{key:"full",value:function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return this._resample(this.module.full,n,r)}},{key:"destroy",value:function(){!0===this.isDestroyed?console.warn("destroy() has already been called on this instance"):(this.module.destroy(),this.isDestroyed=!0)}},{key:"_chunkAndResample",value:function(n){for(var r=0,e=[],t=function(n,r,e){for(var t=0,o=[],i=0;i<n.length;i+=r){var a=Math.min(r,n.length-t),u=new e(n.buffer,t*n.BYTES_PER_ELEMENT,a);t+=r,o.push(u)}return o}(n,this.inputSampleRate/10*this.nChannels,Float32Array),o=0;o<t.length;o++){var i=this._resample(this.module.full,t[o]);r+=i.length,e.push(i)}for(var a=new Float32Array(r),u=0,f=0;f<e.length;f++)for(var c=0;c<e[f].length;c++)a[u++]=e[f][c];return a}},{key:"_resample",value:function(n,r){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(this.inputSampleRate===this.outputSampleRate)return r;if(null!==e&&e.length<this.ratio*r.length)throw"dataOut must be at least ceil(srcRatio * dataIn.length) samples long";var t=Math.ceil(r.length*this.ratio);if(t>u)return this._chunkAndResample(r);this.sourceArray.set(r);var o=n(r.length,this.nChannels,this.converterType,this.inputSampleRate,this.outputSampleRate);return i(o*this.nChannels,this.targetArray,e)}}])&&a(r.prototype,e),n}(),c={SRC_SINC_BEST_QUALITY:0,SRC_SINC_MEDIUM_QUALITY:1,SRC_SINC_FASTEST:2,SRC_ZERO_ORDER_HOLD:3,SRC_LINEAR:4};function l(n,r,e){var t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=void 0===t.converterType?c.SRC_SINC_FASTEST:t.converterType,a=t.wasmPath||"/libsamplerate.wasm";if(void 0===n)throw"nChannels is undefined";if(void 0===r)throw"inputSampleRate is undefined";if(void 0===e)throw"outputSampleRate is undefined";if(n<1)throw"invalid nChannels submitted";if(r<1||r>192e3)throw"invalid inputSampleRate";if(e<1||e>192e3)throw"invalid outputSampleRate";if(i<c.SRC_SINC_BEST_QUALITY||i>c.SRC_LINEAR)throw"invalid converterType";var u={locateFile:function(n){return a}};return new Promise((function(t,a){o()(u).then((function(o){var a=new f(o,i,n,r,e);t(a)})).catch((function(n){a(n)}))}))}}},r={};function e(t){if(r[t])return r[t].exports;var o=r[t]={id:t,loaded:!1,exports:{}};return n[t](o,o.exports,e),o.loaded=!0,o.exports}return e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),e.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.nmd=n=>(n.paths=[],n.children||(n.children=[]),n),e(498)})()}));