!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.LibSampleRate=n():t.LibSampleRate=n()}(this,(()=>(()=>{"use strict";var t={d:(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},o:(t,n)=>Object.prototype.hasOwnProperty.call(t,n),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},n={};t.r(n),t.d(n,{ConverterType:()=>u,create:()=>s});var e,r={createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t};try{r=globalThis.trustedTypes.createPolicy("libsamplerate",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})}catch(t){window.trustedTypes&&(r=window.trustedTypes.createPolicy("libsamplerate",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t}))}const i=(e="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,function(t){var n,i,o=void 0!==(t=t||{})?t:{};o.ready=new Promise((function(t,e){n=t,i=e}));var a,u=Object.assign({},o),s=[],c=(t,n)=>{throw n},f="object"==typeof window,l="function"==typeof importScripts,p=("object"==typeof process&&"object"==typeof process.versions&&process.versions.node,"");(f||l)&&(l?p=self.location.href:"undefined"!=typeof document&&document.currentScript&&(p=document.currentScript.src),e&&(p=e),p=0!==p.indexOf("blob:")?p.substr(0,p.replace(/[?#].*/,"").lastIndexOf("/")+1):"",l&&(a=t=>{var n=new XMLHttpRequest;return n.open("GET",t,!1),n.responseType="arraybuffer",n.send(null),new Uint8Array(n.response)})),o.print||console.log.bind(console);var h,d=o.printErr||console.warn.bind(console);Object.assign(o,u),u=null,o.arguments&&(s=o.arguments),o.thisProgram&&o.thisProgram,o.quit&&(c=o.quit),o.wasmBinary&&(h=o.wasmBinary);var v,y=o.noExitRuntime||!0;"object"!=typeof WebAssembly&&Y("no native wasm support detected");var m,g=!1,_="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function w(t,n){return t?function(t,n,e){for(var r=n+e,i=n;t[i]&&!(i>=r);)++i;if(i-n>16&&t.buffer&&_)return _.decode(t.subarray(n,i));for(var o="";n<i;){var a=t[n++];if(128&a){var u=63&t[n++];if(192!=(224&a)){var s=63&t[n++];if((a=224==(240&a)?(15&a)<<12|u<<6|s:(7&a)<<18|u<<12|s<<6|63&t[n++])<65536)o+=String.fromCharCode(a);else{var c=a-65536;o+=String.fromCharCode(55296|c>>10,56320|1023&c)}}else o+=String.fromCharCode((31&a)<<6|u)}else o+=String.fromCharCode(a)}return o}(A,t,n):""}var b,T,A,S,R,C,P,E,k,W="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function F(t,n){for(var e=t,r=e>>1,i=r+n/2;!(r>=i)&&R[r];)++r;if((e=r<<1)-t>32&&W)return W.decode(A.subarray(t,e));for(var o="",a=0;!(a>=n/2);++a){var u=S[t+2*a>>1];if(0==u)break;o+=String.fromCharCode(u)}return o}function I(t,n,e){if(void 0===e&&(e=2147483647),e<2)return 0;for(var r=n,i=(e-=2)<2*t.length?e/2:t.length,o=0;o<i;++o){var a=t.charCodeAt(o);S[n>>1]=a,n+=2}return S[n>>1]=0,n-r}function O(t){return 2*t.length}function j(t,n){for(var e=0,r="";!(e>=n/4);){var i=C[t+4*e>>2];if(0==i)break;if(++e,i>=65536){var o=i-65536;r+=String.fromCharCode(55296|o>>10,56320|1023&o)}else r+=String.fromCharCode(i)}return r}function U(t,n,e){if(void 0===e&&(e=2147483647),e<4)return 0;for(var r=n,i=r+e-4,o=0;o<t.length;++o){var a=t.charCodeAt(o);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&t.charCodeAt(++o)),C[n>>2]=a,(n+=4)+4>i)break}return C[n>>2]=0,n-r}function x(t){for(var n=0,e=0;e<t.length;++e){var r=t.charCodeAt(e);r>=55296&&r<=57343&&++e,n+=4}return n}function M(t){b=t,o.HEAP8=T=new Int8Array(t),o.HEAP16=S=new Int16Array(t),o.HEAP32=C=new Int32Array(t),o.HEAPU8=A=new Uint8Array(t),o.HEAPU16=R=new Uint16Array(t),o.HEAPU32=P=new Uint32Array(t),o.HEAPF32=E=new Float32Array(t),o.HEAPF64=k=new Float64Array(t)}o.INITIAL_MEMORY;var D,L=[],B=[],H=[],N=[],V=0,z=null,q=null;function Y(t){o.onAbort&&o.onAbort(t),d(t="Aborted("+t+")"),g=!0,m=1,t+=". Build with -sASSERTIONS for more info.";var n=new WebAssembly.RuntimeError(t);throw i(n),n}var Q,Z;function G(t){return t.startsWith("data:application/octet-stream;base64,")}function X(t){try{if(t==Q&&h)return new Uint8Array(h);if(a)return a(t);throw"both async and sync fetching of the wasm failed"}catch(t){Y(t)}}function $(t){for(;t.length>0;){var n=t.shift();if("function"!=typeof n){var e=n.func;"number"==typeof e?void 0===n.arg?K(e)():K(e)(n.arg):e(void 0===n.arg?null:n.arg)}else n(o)}}G(Q="glue.wasm")||(Z=Q,Q=o.locateFile?o.locateFile(Z,p):p+Z);var J=[];function K(t){var n=J[t];return n||(t>=J.length&&(J.length=t+1),J[t]=n=D.get(t)),n}function tt(t){this.excPtr=t,this.ptr=t-24,this.set_type=function(t){P[this.ptr+4>>2]=t},this.get_type=function(){return P[this.ptr+4>>2]},this.set_destructor=function(t){P[this.ptr+8>>2]=t},this.get_destructor=function(){return P[this.ptr+8>>2]},this.set_refcount=function(t){C[this.ptr>>2]=t},this.set_caught=function(t){t=t?1:0,T[this.ptr+12|0]=t},this.get_caught=function(){return 0!=T[this.ptr+12|0]},this.set_rethrown=function(t){t=t?1:0,T[this.ptr+13|0]=t},this.get_rethrown=function(){return 0!=T[this.ptr+13|0]},this.init=function(t,n){this.set_adjusted_ptr(0),this.set_type(t),this.set_destructor(n),this.set_refcount(0),this.set_caught(!1),this.set_rethrown(!1)},this.add_ref=function(){var t=C[this.ptr>>2];C[this.ptr>>2]=t+1},this.release_ref=function(){var t=C[this.ptr>>2];return C[this.ptr>>2]=t-1,1===t},this.set_adjusted_ptr=function(t){P[this.ptr+16>>2]=t},this.get_adjusted_ptr=function(){return P[this.ptr+16>>2]},this.get_exception_ptr=function(){if(jt(this.get_type()))return P[this.excPtr>>2];var t=this.get_adjusted_ptr();return 0!==t?t:this.excPtr}}function nt(t){switch(t){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+t)}}var et=void 0;function rt(t){for(var n="",e=t;A[e];)n+=et[A[e++]];return n}var it={},ot={},at={},ut=48,st=57;function ct(t){if(void 0===t)return"_unknown";var n=(t=t.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return n>=ut&&n<=st?"_"+t:t}function ft(t,n){return t=ct(t),new Function("body",r.createScript("return function "+t+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n'))(n)}function lt(t,n){var e=ft(n,(function(t){this.name=n,this.message=t;var e=new Error(t).stack;void 0!==e&&(this.stack=this.toString()+"\n"+e.replace(/^Error(:[^\n]*)?\n/,""))}));return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},e}var pt=void 0;function ht(t){throw new pt(t)}var dt=void 0;function vt(t){throw new dt(t)}function yt(t,n,e={}){if(!("argPackAdvance"in n))throw new TypeError("registerType registeredInstance requires argPackAdvance");var r=n.name;if(t||ht('type "'+r+'" must have a positive integer typeid pointer'),ot.hasOwnProperty(t)){if(e.ignoreDuplicateRegistrations)return;ht("Cannot register type '"+r+"' twice")}if(ot[t]=n,delete at[t],it.hasOwnProperty(t)){var i=it[t];delete it[t],i.forEach((t=>t()))}}var mt=[],gt=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function _t(t){t>4&&0==--gt[t].refcount&&(gt[t]=void 0,mt.push(t))}var wt=t=>{switch(t){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var n=mt.length?mt.pop():gt.length;return gt[n]={refcount:1,value:t},n}};function bt(t){return this.fromWireType(P[t>>2])}function Tt(t,n){switch(n){case 2:return function(t){return this.fromWireType(E[t>>2])};case 3:return function(t){return this.fromWireType(k[t>>3])};default:throw new TypeError("Unknown float type: "+t)}}function At(t){for(;t.length;){var n=t.pop();t.pop()(n)}}function St(t,n){var e,r,i,a=(t=rt(t)).includes("j")?(e=t,r=n,i=[],function(){return i.length=0,Object.assign(i,arguments),function(t,n,e){return t.includes("j")?function(t,n,e){var r=o["dynCall_"+t];return e&&e.length?r.apply(null,[n].concat(e)):r.call(null,n)}(t,n,e):K(n).apply(null,e)}(e,r,i)}):K(n);return"function"!=typeof a&&ht("unknown function pointer with signature "+t+": "+n),a}var Rt=void 0;function Ct(t){var n=Ot(t),e=rt(n);return Ft(n),e}function Pt(t,n,e){switch(n){case 0:return e?function(t){return T[t]}:function(t){return A[t]};case 1:return e?function(t){return S[t>>1]}:function(t){return R[t>>1]};case 2:return e?function(t){return C[t>>2]}:function(t){return P[t>>2]};default:throw new TypeError("Unknown integer type: "+t)}}function Et(t){try{return v.grow(t-b.byteLength+65535>>>16),M(v.buffer),1}catch(t){}}!function(){for(var t=new Array(256),n=0;n<256;++n)t[n]=String.fromCharCode(n);et=t}(),pt=o.BindingError=lt(Error,"BindingError"),dt=o.InternalError=lt(Error,"InternalError"),o.count_emval_handles=function(){for(var t=0,n=5;n<gt.length;++n)void 0!==gt[n]&&++t;return t},o.get_first_emval=function(){for(var t=5;t<gt.length;++t)if(void 0!==gt[t])return gt[t];return null},Rt=o.UnboundTypeError=lt(Error,"UnboundTypeError");var kt,Wt={a:function(t,n,e,r){Y("Assertion failed: "+w(t)+", at: "+[n?w(n):"unknown filename",e,r?w(r):"unknown function"])},n:function(t){return It(t+24)+24},m:function(t,n,e){throw new tt(t).init(n,e),t},o:function(t,n,e,r,i){},i:function(t,n,e,r,i){var o=nt(e);yt(t,{name:n=rt(n),fromWireType:function(t){return!!t},toWireType:function(t,n){return n?r:i},argPackAdvance:8,readValueFromPointer:function(t){var r;if(1===e)r=T;else if(2===e)r=S;else{if(4!==e)throw new TypeError("Unknown boolean type size: "+n);r=C}return this.fromWireType(r[t>>o])},destructorFunction:null})},s:function(t,n){yt(t,{name:n=rt(n),fromWireType:function(t){var n=(t=>(t||ht("Cannot use deleted val. handle = "+t),gt[t].value))(t);return _t(t),n},toWireType:function(t,n){return wt(n)},argPackAdvance:8,readValueFromPointer:bt,destructorFunction:null})},g:function(t,n,e){var r=nt(e);yt(t,{name:n=rt(n),fromWireType:function(t){return t},toWireType:function(t,n){return n},argPackAdvance:8,readValueFromPointer:Tt(n,r),destructorFunction:null})},d:function(t,n,e,r,i,a){var u=function(t,n){for(var e=[],r=0;r<t;r++)e.push(C[(n>>2)+r]);return e}(n,e);t=rt(t),i=St(r,i),function(t,n,e){o.hasOwnProperty(t)?((void 0===e||void 0!==o[t].overloadTable&&void 0!==o[t].overloadTable[e])&&ht("Cannot register public name '"+t+"' twice"),function(t,n,e){if(void 0===t[n].overloadTable){var r=t[n];t[n]=function(){return t[n].overloadTable.hasOwnProperty(arguments.length)||ht("Function '"+e+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+t[n].overloadTable+")!"),t[n].overloadTable[arguments.length].apply(this,arguments)},t[n].overloadTable=[],t[n].overloadTable[r.argCount]=r}}(o,t,t),o.hasOwnProperty(e)&&ht("Cannot register multiple overloads of a function with the same number of arguments ("+e+")!"),o[t].overloadTable[e]=n):(o[t]=n,void 0!==e&&(o[t].numArguments=e))}(t,(function(){!function(t,n){var e=[],r={};throw n.forEach((function t(n){r[n]||ot[n]||(at[n]?at[n].forEach(t):(e.push(n),r[n]=!0))})),new Rt(t+": "+e.map(Ct).join([", "]))}("Cannot call "+t+" due to unbound types",u)}),n-1),function(e,r){function u(r){var u=function(e){var r=[e[0],null].concat(e.slice(1));return function(t,n,e){o.hasOwnProperty(t)||vt("Replacing nonexistant public symbol"),void 0!==o[t].overloadTable&&void 0!==e?o[t].overloadTable[e]=n:(o[t]=n,o[t].argCount=e)}(t,function(t,n,e,r,i){var o=n.length;o<2&&ht("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var a=null!==n[1]&&null!==e,u=!1,s=1;s<n.length;++s)if(null!==n[s]&&void 0===n[s].destructorFunction){u=!0;break}var c="void"!==n[0].name,f="",l="";for(s=0;s<o-2;++s)f+=(0!==s?", ":"")+"arg"+s,l+=(0!==s?", ":"")+"arg"+s+"Wired";var p="return function "+ct(t)+"("+f+") {\nif (arguments.length !== "+(o-2)+") {\nthrowBindingError('function "+t+" called with ' + arguments.length + ' arguments, expected "+(o-2)+" args!');\n}\n";u&&(p+="var destructors = [];\n");var h=u?"destructors":"null",d=["throwBindingError","invoker","fn","runDestructors","retType","classParam"],v=[ht,r,i,At,n[0],n[1]];for(a&&(p+="var thisWired = classParam.toWireType("+h+", this);\n"),s=0;s<o-2;++s)p+="var arg"+s+"Wired = argType"+s+".toWireType("+h+", arg"+s+"); // "+n[s+2].name+"\n",d.push("argType"+s),v.push(n[s+2]);if(a&&(l="thisWired"+(l.length>0?", ":"")+l),p+=(c?"var rv = ":"")+"invoker(fn"+(l.length>0?", ":"")+l+");\n",u)p+="runDestructors(destructors);\n";else for(s=a?1:2;s<n.length;++s){var y=1===s?"thisWired":"arg"+(s-2)+"Wired";null!==n[s].destructorFunction&&(p+=y+"_dtor("+y+"); // "+n[s].name+"\n",d.push(y+"_dtor"),v.push(n[s].destructorFunction))}return c&&(p+="var ret = retType.fromWireType(rv);\nreturn ret;\n"),p+="}\n",d.push(p),function(t,n){if(!(t instanceof Function))throw new TypeError("new_ called with constructor type "+typeof t+" which is not a function");var e=ft(t.name||"unknownFunctionName",(function(){}));e.prototype=t.prototype;var r=new e,i=t.apply(r,n);return i instanceof Object?i:r}(Function,d).apply(null,v)}(t,r,null,i,a),n-1),[]}(r);u.length!==e.length&&vt("Mismatched type converter count");for(var s=0;s<e.length;++s)yt(e[s],u[s])}e.forEach((function(t){at[t]=r}));var s=new Array(r.length),c=[],f=0;r.forEach(((t,n)=>{ot.hasOwnProperty(t)?s[n]=ot[t]:(c.push(t),it.hasOwnProperty(t)||(it[t]=[]),it[t].push((()=>{s[n]=ot[t],++f===c.length&&u(s)})))})),0===c.length&&u(s)}([],u)},c:function(t,n,e,r,i){n=rt(n),-1===i&&(i=4294967295);var o=nt(e),a=t=>t;if(0===r){var u=32-8*e;a=t=>t<<u>>>u}var s=n.includes("unsigned");yt(t,{name:n,fromWireType:a,toWireType:s?function(t,n){return this.name,n>>>0}:function(t,n){return this.name,n},argPackAdvance:8,readValueFromPointer:Pt(n,o,0!==r),destructorFunction:null})},b:function(t,n,e){var r=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][n];function i(t){var n=P,e=n[t>>=2],i=n[t+1];return new r(b,i,e)}yt(t,{name:e=rt(e),fromWireType:i,argPackAdvance:8,readValueFromPointer:i},{ignoreDuplicateRegistrations:!0})},f:function(t,n){var e="std::string"===(n=rt(n));yt(t,{name:n,fromWireType:function(t){var n,r=P[t>>2];if(e)for(var i=t+4,o=0;o<=r;++o){var a=t+4+o;if(o==r||0==A[a]){var u=w(i,a-i);void 0===n?n=u:(n+=String.fromCharCode(0),n+=u),i=a+1}}else{var s=new Array(r);for(o=0;o<r;++o)s[o]=String.fromCharCode(A[t+4+o]);n=s.join("")}return Ft(t),n},toWireType:function(t,n){var r;n instanceof ArrayBuffer&&(n=new Uint8Array(n));var i="string"==typeof n;i||n instanceof Uint8Array||n instanceof Uint8ClampedArray||n instanceof Int8Array||ht("Cannot pass non-string to std::string"),r=e&&i?()=>function(t){for(var n=0,e=0;e<t.length;++e){var r=t.charCodeAt(e);r>=55296&&r<=57343&&(r=65536+((1023&r)<<10)|1023&t.charCodeAt(++e)),r<=127?++n:n+=r<=2047?2:r<=65535?3:4}return n}(n):()=>n.length;var o=r(),a=It(4+o+1);if(P[a>>2]=o,e&&i)!function(t,n,e,r){if(!(r>0))return 0;for(var i=e+r-1,o=0;o<t.length;++o){var a=t.charCodeAt(o);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&t.charCodeAt(++o)),a<=127){if(e>=i)break;n[e++]=a}else if(a<=2047){if(e+1>=i)break;n[e++]=192|a>>6,n[e++]=128|63&a}else if(a<=65535){if(e+2>=i)break;n[e++]=224|a>>12,n[e++]=128|a>>6&63,n[e++]=128|63&a}else{if(e+3>=i)break;n[e++]=240|a>>18,n[e++]=128|a>>12&63,n[e++]=128|a>>6&63,n[e++]=128|63&a}}n[e]=0}(n,A,a+4,o+1);else if(i)for(var u=0;u<o;++u){var s=n.charCodeAt(u);s>255&&(Ft(a),ht("String has UTF-16 code units that do not fit in 8 bits")),A[a+4+u]=s}else for(u=0;u<o;++u)A[a+4+u]=n[u];return null!==t&&t.push(Ft,a),a},argPackAdvance:8,readValueFromPointer:bt,destructorFunction:function(t){Ft(t)}})},e:function(t,n,e){var r,i,o,a,u;e=rt(e),2===n?(r=F,i=I,a=O,o=()=>R,u=1):4===n&&(r=j,i=U,a=x,o=()=>P,u=2),yt(t,{name:e,fromWireType:function(t){for(var e,i=P[t>>2],a=o(),s=t+4,c=0;c<=i;++c){var f=t+4+c*n;if(c==i||0==a[f>>u]){var l=r(s,f-s);void 0===e?e=l:(e+=String.fromCharCode(0),e+=l),s=f+n}}return Ft(t),e},toWireType:function(t,r){"string"!=typeof r&&ht("Cannot pass non-string to C++ string type "+e);var o=a(r),s=It(4+o+n);return P[s>>2]=o>>u,i(r,s+4,o+n),null!==t&&t.push(Ft,s),s},argPackAdvance:8,readValueFromPointer:bt,destructorFunction:function(t){Ft(t)}})},j:function(t,n){yt(t,{isVoid:!0,name:n=rt(n),argPackAdvance:0,fromWireType:function(){},toWireType:function(t,n){}})},k:_t,l:function(t){t>4&&(gt[t].refcount+=1)},h:function(t,n){var e,r;void 0===(r=ot[e=t])&&ht("_emval_take_value has unknown type "+Ct(e));var i=(t=r).readValueFromPointer(n);return wt(i)},p:function(){Y("")},r:function(t,n,e){A.copyWithin(t,n,n+e)},q:function(t){var n,e=A.length,r=2147483648;if((t>>>=0)>r)return!1;for(var i=1;i<=4;i*=2){var o=e*(1+.2/i);if(o=Math.min(o,t+100663296),Et(Math.min(r,(n=Math.max(t,o))+(65536-n%65536)%65536)))return!0}return!1}},Ft=(function(){var t={a:Wt};function n(t,n){var e,r=t.exports;o.asm=r,M((v=o.asm.t).buffer),D=o.asm.w,e=o.asm.u,B.unshift(e),function(){if(V--,o.monitorRunDependencies&&o.monitorRunDependencies(V),0==V&&(null!==z&&(clearInterval(z),z=null),q)){var t=q;q=null,t()}}()}function e(t){n(t.instance)}function r(n){return(h||!f&&!l||"function"!=typeof fetch?Promise.resolve().then((function(){return X(Q)})):fetch(Q,{credentials:"same-origin"}).then((function(t){if(!t.ok)throw"failed to load wasm binary file at '"+Q+"'";return t.arrayBuffer()})).catch((function(){return X(Q)}))).then((function(n){return WebAssembly.instantiate(n,t)})).then((function(t){return t})).then(n,(function(t){d("failed to asynchronously prepare wasm: "+t),Y(t)}))}if(V++,o.monitorRunDependencies&&o.monitorRunDependencies(V),o.instantiateWasm)try{return o.instantiateWasm(t,n)}catch(t){return d("Module.instantiateWasm callback failed with error: "+t),!1}(h||"function"!=typeof WebAssembly.instantiateStreaming||G(Q)||"function"!=typeof fetch?r(e):fetch(Q,{credentials:"same-origin"}).then((function(n){return WebAssembly.instantiateStreaming(n,t).then(e,(function(t){return d("wasm streaming compile failed: "+t),d("falling back to ArrayBuffer instantiation"),r(e)}))}))).catch(i)}(),o.___wasm_call_ctors=function(){return(o.___wasm_call_ctors=o.asm.u).apply(null,arguments)},o._main=function(){return(o._main=o.asm.v).apply(null,arguments)},o._free=function(){return(Ft=o._free=o.asm.x).apply(null,arguments)}),It=o._malloc=function(){return(It=o._malloc=o.asm.y).apply(null,arguments)},Ot=o.___getTypeName=function(){return(Ot=o.___getTypeName=o.asm.z).apply(null,arguments)},jt=(o.___embind_register_native_and_builtin_types=function(){return(o.___embind_register_native_and_builtin_types=o.asm.A).apply(null,arguments)},o.___cxa_is_pointer_type=function(){return(jt=o.___cxa_is_pointer_type=o.asm.B).apply(null,arguments)});function Ut(t){this.name="ExitStatus",this.message="Program terminated with exit("+t+")",this.status=t}function xt(t){function e(){kt||(kt=!0,o.calledRun=!0,g||($(B),$(H),n(o),o.onRuntimeInitialized&&o.onRuntimeInitialized(),Mt&&function(){var t,n,e=o._main;try{var r=e(0,0);return m=n=r,m=t=n,y||(o.onExit&&o.onExit(t),g=!0),c(t,new Ut(t)),r}catch(t){return function(t){if(t instanceof Ut||"unwind"==t)return m;c(1,t)}(t)}}(),function(){if(o.postRun)for("function"==typeof o.postRun&&(o.postRun=[o.postRun]);o.postRun.length;)t=o.postRun.shift(),N.unshift(t);var t;$(N)}()))}t=t||s,V>0||(function(){if(o.preRun)for("function"==typeof o.preRun&&(o.preRun=[o.preRun]);o.preRun.length;)t=o.preRun.shift(),L.unshift(t);var t;$(L)}(),V>0||(o.setStatus?(o.setStatus("Running..."),setTimeout((function(){setTimeout((function(){o.setStatus("")}),1),e()}),1)):e()))}if(q=function t(){kt||xt(),kt||(q=t)},o.run=xt,o.preInit)for("function"==typeof o.preInit&&(o.preInit=[o.preInit]);o.preInit.length>0;)o.preInit.pop()();var Mt=!0;return o.noInitialRun&&(Mt=!1),xt(),t.ready});var o=1008e3,a=function(){function t(t,n,e,r,i){this.module=t,this._converterType=n,this._nChannels=e,this._inputSampleRate=r,this._outputSampleRate=i,this.ratio=i/r,this.isDestroyed=!1,t.init(e,n,r,i),this.sourceArray=t.sourceArray(o),this.targetArray=t.targetArray(o)}return t.prototype.simple=function(t){return this._resample(this.module.simple,t)},t.prototype.full=function(t,n){return void 0===n&&(n=null),this._resample(this.module.full,t,n)},t.prototype.destroy=function(){!0===this.isDestroyed?console.warn("destroy() has already been called on this instance"):(this.module.destroy(),this.isDestroyed=!0)},Object.defineProperty(t.prototype,"inputSampleRate",{get:function(){return this._inputSampleRate},set:function(t){this._inputSampleRate=t,this.module.destroy(),this.module.init(this.nChannels,this.converterType,this.inputSampleRate,this.outputSampleRate)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"outputSampleRate",{get:function(){return this._outputSampleRate},set:function(t){this._outputSampleRate=t,this.module.destroy(),this.module.init(this.nChannels,this.converterType,this.inputSampleRate,this.outputSampleRate)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"nChannels",{get:function(){return this._nChannels},set:function(t){this._nChannels=t,this.module.destroy(),this.module.init(this.nChannels,this.converterType,this.inputSampleRate,this.outputSampleRate)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"converterType",{get:function(){return this._converterType},set:function(t){this._converterType=t,this.module.destroy(),this.module.init(this.nChannels,this.converterType,this.inputSampleRate,this.outputSampleRate)},enumerable:!1,configurable:!0}),t.prototype._chunkAndResample=function(t){for(var n=0,e=[],r=function(t,n,e){for(var r=0,i=[],o=0;o<t.length;o+=n){var a=Math.min(n,t.length-r),u=new e(t.buffer,r*t.BYTES_PER_ELEMENT,a);r+=n,i.push(u)}return i}(t,this.inputSampleRate/10*this.nChannels,Float32Array),i=0;i<r.length;i++){var o=this._resample(this.module.full,r[i]);n+=o.length,e.push(o)}var a=new Float32Array(n),u=0;for(i=0;i<e.length;i++)for(var s=0;s<e[i].length;s++)a[u++]=e[i][s];return a},t.prototype._resample=function(t,n,e){if(void 0===e&&(e=null),this.inputSampleRate===this.outputSampleRate)return n;if(null!==e&&e.length<this.ratio*n.length)throw"dataOut must be at least ceil(srcRatio * dataIn.length) samples long";return Math.ceil(n.length*this.ratio)>o?this._chunkAndResample(n):(this.sourceArray.set(n),function(t,n,e){void 0===e&&(e=null);for(var r=null===e?new Float32Array(t):e,i=0;i<t;i++)r[i]=n[i];return r}(t(n.length,this.nChannels,this.converterType,this.inputSampleRate,this.outputSampleRate)*this.nChannels,this.targetArray,e))},t}(),u={SRC_SINC_BEST_QUALITY:0,SRC_SINC_MEDIUM_QUALITY:1,SRC_SINC_FASTEST:2,SRC_ZERO_ORDER_HOLD:3,SRC_LINEAR:4};function s(t,n,e,r){var o=void 0===(null==r?void 0:r.converterType)?u.SRC_SINC_FASTEST:null==r?void 0:r.converterType,s=(null==r?void 0:r.wasmPath)||"/libsamplerate.wasm";!function(t,n,e,r){if(void 0===t)throw"nChannels is undefined";if(void 0===n)throw"inputSampleRate is undefined";if(void 0===e)throw"outputSampleRate is undefined";if(t<1||t>128)throw"invalid nChannels submitted";if(n<1||n>192e3)throw"invalid inputSampleRate";if(e<1||e>192e3)throw"invalid outputSampleRate";if(r<u.SRC_SINC_BEST_QUALITY||r>u.SRC_LINEAR)throw"invalid converterType"}(t,n,e,o);var c={locateFile:function(){return s}};return new Promise((function(r,u){i(c).then((function(i){var u=new a(i,o,t,n,e);r(u)})).catch((function(t){u(t)}))}))}return n})()));