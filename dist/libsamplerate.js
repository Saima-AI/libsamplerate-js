!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.LibSampleRate=n():t.LibSampleRate=n()}(this,(()=>(()=>{"use strict";var t={d:(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},o:(t,n)=>Object.prototype.hasOwnProperty.call(t,n),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},n={};t.r(n),t.d(n,{ConverterType:()=>s,create:()=>c});var e,r={isDefault:!0,createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t},i=t=>t;try{r=globalThis.trustedTypes.createPolicy("libsamplerate",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t}),i=globalThis.eval}catch(t){window.trustedTypes&&(r=window.trustedTypes.createPolicy("libsamplerate",{createHTML:t=>t,createScript:t=>t,createScriptURL:t=>t})),i=window.eval}const o=(e="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,function(t){var n,o,a=void 0!==(t=t||{})?t:{};a.ready=new Promise((function(t,e){n=t,o=e}));var u,s=Object.assign({},a),c=[],f=(t,n)=>{throw n},l="object"==typeof window,p="function"==typeof importScripts,h=("object"==typeof process&&"object"==typeof process.versions&&process.versions.node,"");(l||p)&&(p?h=self.location.href:"undefined"!=typeof document&&document.currentScript&&(h=document.currentScript.src),e&&(h=e),h=0!==h.indexOf("blob:")?h.substr(0,h.replace(/[?#].*/,"").lastIndexOf("/")+1):"",p&&(u=t=>{var n=new XMLHttpRequest;return n.open("GET",t,!1),n.responseType="arraybuffer",n.send(null),new Uint8Array(n.response)})),a.print||console.log.bind(console);var d,v=a.printErr||console.warn.bind(console);Object.assign(a,s),s=null,a.arguments&&(c=a.arguments),a.thisProgram&&a.thisProgram,a.quit&&(f=a.quit),a.wasmBinary&&(d=a.wasmBinary);var y,m=a.noExitRuntime||!0;"object"!=typeof WebAssembly&&Q("no native wasm support detected");var g,_=!1,w="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function b(t,n){return t?function(t,n,e){for(var r=n+e,i=n;t[i]&&!(i>=r);)++i;if(i-n>16&&t.buffer&&w)return w.decode(t.subarray(n,i));for(var o="";n<i;){var a=t[n++];if(128&a){var u=63&t[n++];if(192!=(224&a)){var s=63&t[n++];if((a=224==(240&a)?(15&a)<<12|u<<6|s:(7&a)<<18|u<<12|s<<6|63&t[n++])<65536)o+=String.fromCharCode(a);else{var c=a-65536;o+=String.fromCharCode(55296|c>>10,56320|1023&c)}}else o+=String.fromCharCode((31&a)<<6|u)}else o+=String.fromCharCode(a)}return o}(S,t,n):""}var T,A,S,R,C,P,E,k,W,F="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function I(t,n){for(var e=t,r=e>>1,i=r+n/2;!(r>=i)&&C[r];)++r;if((e=r<<1)-t>32&&F)return F.decode(S.subarray(t,e));for(var o="",a=0;!(a>=n/2);++a){var u=R[t+2*a>>1];if(0==u)break;o+=String.fromCharCode(u)}return o}function O(t,n,e){if(void 0===e&&(e=2147483647),e<2)return 0;for(var r=n,i=(e-=2)<2*t.length?e/2:t.length,o=0;o<i;++o){var a=t.charCodeAt(o);R[n>>1]=a,n+=2}return R[n>>1]=0,n-r}function j(t){return 2*t.length}function U(t,n){for(var e=0,r="";!(e>=n/4);){var i=P[t+4*e>>2];if(0==i)break;if(++e,i>=65536){var o=i-65536;r+=String.fromCharCode(55296|o>>10,56320|1023&o)}else r+=String.fromCharCode(i)}return r}function x(t,n,e){if(void 0===e&&(e=2147483647),e<4)return 0;for(var r=n,i=r+e-4,o=0;o<t.length;++o){var a=t.charCodeAt(o);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&t.charCodeAt(++o)),P[n>>2]=a,(n+=4)+4>i)break}return P[n>>2]=0,n-r}function D(t){for(var n=0,e=0;e<t.length;++e){var r=t.charCodeAt(e);r>=55296&&r<=57343&&++e,n+=4}return n}function M(t){T=t,a.HEAP8=A=new Int8Array(t),a.HEAP16=R=new Int16Array(t),a.HEAP32=P=new Int32Array(t),a.HEAPU8=S=new Uint8Array(t),a.HEAPU16=C=new Uint16Array(t),a.HEAPU32=E=new Uint32Array(t),a.HEAPF32=k=new Float32Array(t),a.HEAPF64=W=new Float64Array(t)}a.INITIAL_MEMORY;var L,B=[],H=[],N=[],V=[],z=0,q=null,Y=null;function Q(t){a.onAbort&&a.onAbort(t),v(t="Aborted("+t+")"),_=!0,g=1,t+=". Build with -sASSERTIONS for more info.";var n=new WebAssembly.RuntimeError(t);throw o(n),n}var $,Z;function G(t){return t.startsWith("data:application/octet-stream;base64,")}function X(t){try{if(t==$&&d)return new Uint8Array(d);if(u)return u(t);throw"both async and sync fetching of the wasm failed"}catch(t){Q(t)}}function J(t){for(;t.length>0;){var n=t.shift();if("function"!=typeof n){var e=n.func;"number"==typeof e?void 0===n.arg?tt(e)():tt(e)(n.arg):e(void 0===n.arg?null:n.arg)}else n(a)}}G($="glue.wasm")||(Z=$,$=a.locateFile?a.locateFile(Z,h):h+Z);var K=[];function tt(t){var n=K[t];return n||(t>=K.length&&(K.length=t+1),K[t]=n=L.get(t)),n}function nt(t){this.excPtr=t,this.ptr=t-24,this.set_type=function(t){E[this.ptr+4>>2]=t},this.get_type=function(){return E[this.ptr+4>>2]},this.set_destructor=function(t){E[this.ptr+8>>2]=t},this.get_destructor=function(){return E[this.ptr+8>>2]},this.set_refcount=function(t){P[this.ptr>>2]=t},this.set_caught=function(t){t=t?1:0,A[this.ptr+12|0]=t},this.get_caught=function(){return 0!=A[this.ptr+12|0]},this.set_rethrown=function(t){t=t?1:0,A[this.ptr+13|0]=t},this.get_rethrown=function(){return 0!=A[this.ptr+13|0]},this.init=function(t,n){this.set_adjusted_ptr(0),this.set_type(t),this.set_destructor(n),this.set_refcount(0),this.set_caught(!1),this.set_rethrown(!1)},this.add_ref=function(){var t=P[this.ptr>>2];P[this.ptr>>2]=t+1},this.release_ref=function(){var t=P[this.ptr>>2];return P[this.ptr>>2]=t-1,1===t},this.set_adjusted_ptr=function(t){E[this.ptr+16>>2]=t},this.get_adjusted_ptr=function(){return E[this.ptr+16>>2]},this.get_exception_ptr=function(){if(Ut(this.get_type()))return E[this.excPtr>>2];var t=this.get_adjusted_ptr();return 0!==t?t:this.excPtr}}function et(t){switch(t){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+t)}}var rt=void 0;function it(t){for(var n="",e=t;S[e];)n+=rt[S[e++]];return n}var ot={},at={},ut={},st=48,ct=57;function ft(t){if(void 0===t)return"_unknown";var n=(t=t.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return n>=st&&n<=ct?"_"+t:t}function lt(t,n){return t=ft(t),r.isDefault?new Function("body","return function "+t+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(n):i(r.createScript(`\n            function ${t} () {\n                "use strict";\n                return (${n}).apply(this, arguments);\n            }\n          `))}function pt(t,n){var e=lt(n,(function(t){this.name=n,this.message=t;var e=new Error(t).stack;void 0!==e&&(this.stack=this.toString()+"\n"+e.replace(/^Error(:[^\n]*)?\n/,""))}));return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},e}var ht=void 0;function dt(t){throw new ht(t)}var vt=void 0;function yt(t){throw new vt(t)}function mt(t,n,e={}){if(!("argPackAdvance"in n))throw new TypeError("registerType registeredInstance requires argPackAdvance");var r=n.name;if(t||dt('type "'+r+'" must have a positive integer typeid pointer'),at.hasOwnProperty(t)){if(e.ignoreDuplicateRegistrations)return;dt("Cannot register type '"+r+"' twice")}if(at[t]=n,delete ut[t],ot.hasOwnProperty(t)){var i=ot[t];delete ot[t],i.forEach((t=>t()))}}var gt=[],_t=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function wt(t){t>4&&0==--_t[t].refcount&&(_t[t]=void 0,gt.push(t))}var bt=t=>{switch(t){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var n=gt.length?gt.pop():_t.length;return _t[n]={refcount:1,value:t},n}};function Tt(t){return this.fromWireType(E[t>>2])}function At(t,n){switch(n){case 2:return function(t){return this.fromWireType(k[t>>2])};case 3:return function(t){return this.fromWireType(W[t>>3])};default:throw new TypeError("Unknown float type: "+t)}}function St(t){for(;t.length;){var n=t.pop();t.pop()(n)}}function Rt(t,n){var e,r,i,o=(t=it(t)).includes("j")?(e=t,r=n,i=[],function(){return i.length=0,Object.assign(i,arguments),function(t,n,e){return t.includes("j")?function(t,n,e){var r=a["dynCall_"+t];return e&&e.length?r.apply(null,[n].concat(e)):r.call(null,n)}(t,n,e):tt(n).apply(null,e)}(e,r,i)}):tt(n);return"function"!=typeof o&&dt("unknown function pointer with signature "+t+": "+n),o}var Ct=void 0;function Pt(t){var n=jt(t),e=it(n);return It(n),e}function Et(t,n,e){switch(n){case 0:return e?function(t){return A[t]}:function(t){return S[t]};case 1:return e?function(t){return R[t>>1]}:function(t){return C[t>>1]};case 2:return e?function(t){return P[t>>2]}:function(t){return E[t>>2]};default:throw new TypeError("Unknown integer type: "+t)}}function kt(t){try{return y.grow(t-T.byteLength+65535>>>16),M(y.buffer),1}catch(t){}}!function(){for(var t=new Array(256),n=0;n<256;++n)t[n]=String.fromCharCode(n);rt=t}(),ht=a.BindingError=pt(Error,"BindingError"),vt=a.InternalError=pt(Error,"InternalError"),a.count_emval_handles=function(){for(var t=0,n=5;n<_t.length;++n)void 0!==_t[n]&&++t;return t},a.get_first_emval=function(){for(var t=5;t<_t.length;++t)if(void 0!==_t[t])return _t[t];return null},Ct=a.UnboundTypeError=pt(Error,"UnboundTypeError");var Wt,Ft={a:function(t,n,e,r){Q("Assertion failed: "+b(t)+", at: "+[n?b(n):"unknown filename",e,r?b(r):"unknown function"])},n:function(t){return Ot(t+24)+24},m:function(t,n,e){throw new nt(t).init(n,e),t},o:function(t,n,e,r,i){},i:function(t,n,e,r,i){var o=et(e);mt(t,{name:n=it(n),fromWireType:function(t){return!!t},toWireType:function(t,n){return n?r:i},argPackAdvance:8,readValueFromPointer:function(t){var r;if(1===e)r=A;else if(2===e)r=R;else{if(4!==e)throw new TypeError("Unknown boolean type size: "+n);r=P}return this.fromWireType(r[t>>o])},destructorFunction:null})},s:function(t,n){mt(t,{name:n=it(n),fromWireType:function(t){var n=(t=>(t||dt("Cannot use deleted val. handle = "+t),_t[t].value))(t);return wt(t),n},toWireType:function(t,n){return bt(n)},argPackAdvance:8,readValueFromPointer:Tt,destructorFunction:null})},g:function(t,n,e){var r=et(e);mt(t,{name:n=it(n),fromWireType:function(t){return t},toWireType:function(t,n){return n},argPackAdvance:8,readValueFromPointer:At(n,r),destructorFunction:null})},d:function(t,n,e,r,i,o){var u=function(t,n){for(var e=[],r=0;r<t;r++)e.push(P[(n>>2)+r]);return e}(n,e);t=it(t),i=Rt(r,i),function(t,n,e){a.hasOwnProperty(t)?((void 0===e||void 0!==a[t].overloadTable&&void 0!==a[t].overloadTable[e])&&dt("Cannot register public name '"+t+"' twice"),function(t,n,e){if(void 0===t[n].overloadTable){var r=t[n];t[n]=function(){return t[n].overloadTable.hasOwnProperty(arguments.length)||dt("Function '"+e+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+t[n].overloadTable+")!"),t[n].overloadTable[arguments.length].apply(this,arguments)},t[n].overloadTable=[],t[n].overloadTable[r.argCount]=r}}(a,t,t),a.hasOwnProperty(e)&&dt("Cannot register multiple overloads of a function with the same number of arguments ("+e+")!"),a[t].overloadTable[e]=n):(a[t]=n,void 0!==e&&(a[t].numArguments=e))}(t,(function(){!function(t,n){var e=[],r={};throw n.forEach((function t(n){r[n]||at[n]||(ut[n]?ut[n].forEach(t):(e.push(n),r[n]=!0))})),new Ct(t+": "+e.map(Pt).join([", "]))}("Cannot call "+t+" due to unbound types",u)}),n-1),function(e,r){function u(r){var u=function(e){var r=[e[0],null].concat(e.slice(1));return function(t,n,e){a.hasOwnProperty(t)||yt("Replacing nonexistant public symbol"),void 0!==a[t].overloadTable&&void 0!==e?a[t].overloadTable[e]=n:(a[t]=n,a[t].argCount=e)}(t,function(t,n,e,r,i){var o=n.length;o<2&&dt("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var a=null!==n[1]&&null!==e,u=!1,s=1;s<n.length;++s)if(null!==n[s]&&void 0===n[s].destructorFunction){u=!0;break}var c="void"!==n[0].name,f="",l="";for(s=0;s<o-2;++s)f+=(0!==s?", ":"")+"arg"+s,l+=(0!==s?", ":"")+"arg"+s+"Wired";var p="return function "+ft(t)+"("+f+") {\nif (arguments.length !== "+(o-2)+") {\nthrowBindingError('function "+t+" called with ' + arguments.length + ' arguments, expected "+(o-2)+" args!');\n}\n";u&&(p+="var destructors = [];\n");var h=u?"destructors":"null",d=["throwBindingError","invoker","fn","runDestructors","retType","classParam"],v=[dt,r,i,St,n[0],n[1]];for(a&&(p+="var thisWired = classParam.toWireType("+h+", this);\n"),s=0;s<o-2;++s)p+="var arg"+s+"Wired = argType"+s+".toWireType("+h+", arg"+s+"); // "+n[s+2].name+"\n",d.push("argType"+s),v.push(n[s+2]);if(a&&(l="thisWired"+(l.length>0?", ":"")+l),p+=(c?"var rv = ":"")+"invoker(fn"+(l.length>0?", ":"")+l+");\n",u)p+="runDestructors(destructors);\n";else for(s=a?1:2;s<n.length;++s){var y=1===s?"thisWired":"arg"+(s-2)+"Wired";null!==n[s].destructorFunction&&(p+=y+"_dtor("+y+"); // "+n[s].name+"\n",d.push(y+"_dtor"),v.push(n[s].destructorFunction))}return c&&(p+="var ret = retType.fromWireType(rv);\nreturn ret;\n"),p+="}\n",d.push(p),function(t,n){if(!(t instanceof Function))throw new TypeError("new_ called with constructor type "+typeof t+" which is not a function");var e=lt(t.name||"unknownFunctionName",(function(){}));e.prototype=t.prototype;var r=new e,i=t.apply(r,n);return i instanceof Object?i:r}(Function,d).apply(null,v)}(t,r,null,i,o),n-1),[]}(r);u.length!==e.length&&yt("Mismatched type converter count");for(var s=0;s<e.length;++s)mt(e[s],u[s])}e.forEach((function(t){ut[t]=r}));var s=new Array(r.length),c=[],f=0;r.forEach(((t,n)=>{at.hasOwnProperty(t)?s[n]=at[t]:(c.push(t),ot.hasOwnProperty(t)||(ot[t]=[]),ot[t].push((()=>{s[n]=at[t],++f===c.length&&u(s)})))})),0===c.length&&u(s)}([],u)},c:function(t,n,e,r,i){n=it(n),-1===i&&(i=4294967295);var o=et(e),a=t=>t;if(0===r){var u=32-8*e;a=t=>t<<u>>>u}var s=n.includes("unsigned");mt(t,{name:n,fromWireType:a,toWireType:s?function(t,n){return this.name,n>>>0}:function(t,n){return this.name,n},argPackAdvance:8,readValueFromPointer:Et(n,o,0!==r),destructorFunction:null})},b:function(t,n,e){var r=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][n];function i(t){var n=E,e=n[t>>=2],i=n[t+1];return new r(T,i,e)}mt(t,{name:e=it(e),fromWireType:i,argPackAdvance:8,readValueFromPointer:i},{ignoreDuplicateRegistrations:!0})},f:function(t,n){var e="std::string"===(n=it(n));mt(t,{name:n,fromWireType:function(t){var n,r=E[t>>2];if(e)for(var i=t+4,o=0;o<=r;++o){var a=t+4+o;if(o==r||0==S[a]){var u=b(i,a-i);void 0===n?n=u:(n+=String.fromCharCode(0),n+=u),i=a+1}}else{var s=new Array(r);for(o=0;o<r;++o)s[o]=String.fromCharCode(S[t+4+o]);n=s.join("")}return It(t),n},toWireType:function(t,n){var r;n instanceof ArrayBuffer&&(n=new Uint8Array(n));var i="string"==typeof n;i||n instanceof Uint8Array||n instanceof Uint8ClampedArray||n instanceof Int8Array||dt("Cannot pass non-string to std::string"),r=e&&i?()=>function(t){for(var n=0,e=0;e<t.length;++e){var r=t.charCodeAt(e);r>=55296&&r<=57343&&(r=65536+((1023&r)<<10)|1023&t.charCodeAt(++e)),r<=127?++n:n+=r<=2047?2:r<=65535?3:4}return n}(n):()=>n.length;var o=r(),a=Ot(4+o+1);if(E[a>>2]=o,e&&i)!function(t,n,e,r){if(!(r>0))return 0;for(var i=e+r-1,o=0;o<t.length;++o){var a=t.charCodeAt(o);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&t.charCodeAt(++o)),a<=127){if(e>=i)break;n[e++]=a}else if(a<=2047){if(e+1>=i)break;n[e++]=192|a>>6,n[e++]=128|63&a}else if(a<=65535){if(e+2>=i)break;n[e++]=224|a>>12,n[e++]=128|a>>6&63,n[e++]=128|63&a}else{if(e+3>=i)break;n[e++]=240|a>>18,n[e++]=128|a>>12&63,n[e++]=128|a>>6&63,n[e++]=128|63&a}}n[e]=0}(n,S,a+4,o+1);else if(i)for(var u=0;u<o;++u){var s=n.charCodeAt(u);s>255&&(It(a),dt("String has UTF-16 code units that do not fit in 8 bits")),S[a+4+u]=s}else for(u=0;u<o;++u)S[a+4+u]=n[u];return null!==t&&t.push(It,a),a},argPackAdvance:8,readValueFromPointer:Tt,destructorFunction:function(t){It(t)}})},e:function(t,n,e){var r,i,o,a,u;e=it(e),2===n?(r=I,i=O,a=j,o=()=>C,u=1):4===n&&(r=U,i=x,a=D,o=()=>E,u=2),mt(t,{name:e,fromWireType:function(t){for(var e,i=E[t>>2],a=o(),s=t+4,c=0;c<=i;++c){var f=t+4+c*n;if(c==i||0==a[f>>u]){var l=r(s,f-s);void 0===e?e=l:(e+=String.fromCharCode(0),e+=l),s=f+n}}return It(t),e},toWireType:function(t,r){"string"!=typeof r&&dt("Cannot pass non-string to C++ string type "+e);var o=a(r),s=Ot(4+o+n);return E[s>>2]=o>>u,i(r,s+4,o+n),null!==t&&t.push(It,s),s},argPackAdvance:8,readValueFromPointer:Tt,destructorFunction:function(t){It(t)}})},j:function(t,n){mt(t,{isVoid:!0,name:n=it(n),argPackAdvance:0,fromWireType:function(){},toWireType:function(t,n){}})},k:wt,l:function(t){t>4&&(_t[t].refcount+=1)},h:function(t,n){var e,r;void 0===(r=at[e=t])&&dt("_emval_take_value has unknown type "+Pt(e));var i=(t=r).readValueFromPointer(n);return bt(i)},p:function(){Q("")},r:function(t,n,e){S.copyWithin(t,n,n+e)},q:function(t){var n,e=S.length,r=2147483648;if((t>>>=0)>r)return!1;for(var i=1;i<=4;i*=2){var o=e*(1+.2/i);if(o=Math.min(o,t+100663296),kt(Math.min(r,(n=Math.max(t,o))+(65536-n%65536)%65536)))return!0}return!1}},It=(function(){var t={a:Ft};function n(t,n){var e,r=t.exports;a.asm=r,M((y=a.asm.t).buffer),L=a.asm.w,e=a.asm.u,H.unshift(e),function(){if(z--,a.monitorRunDependencies&&a.monitorRunDependencies(z),0==z&&(null!==q&&(clearInterval(q),q=null),Y)){var t=Y;Y=null,t()}}()}function e(t){n(t.instance)}function r(n){return(d||!l&&!p||"function"!=typeof fetch?Promise.resolve().then((function(){return X($)})):fetch($,{credentials:"same-origin"}).then((function(t){if(!t.ok)throw"failed to load wasm binary file at '"+$+"'";return t.arrayBuffer()})).catch((function(){return X($)}))).then((function(n){return WebAssembly.instantiate(n,t)})).then((function(t){return t})).then(n,(function(t){v("failed to asynchronously prepare wasm: "+t),Q(t)}))}if(z++,a.monitorRunDependencies&&a.monitorRunDependencies(z),a.instantiateWasm)try{return a.instantiateWasm(t,n)}catch(t){return v("Module.instantiateWasm callback failed with error: "+t),!1}(d||"function"!=typeof WebAssembly.instantiateStreaming||G($)||"function"!=typeof fetch?r(e):fetch($,{credentials:"same-origin"}).then((function(n){return WebAssembly.instantiateStreaming(n,t).then(e,(function(t){return v("wasm streaming compile failed: "+t),v("falling back to ArrayBuffer instantiation"),r(e)}))}))).catch(o)}(),a.___wasm_call_ctors=function(){return(a.___wasm_call_ctors=a.asm.u).apply(null,arguments)},a._main=function(){return(a._main=a.asm.v).apply(null,arguments)},a._free=function(){return(It=a._free=a.asm.x).apply(null,arguments)}),Ot=a._malloc=function(){return(Ot=a._malloc=a.asm.y).apply(null,arguments)},jt=a.___getTypeName=function(){return(jt=a.___getTypeName=a.asm.z).apply(null,arguments)},Ut=(a.___embind_register_native_and_builtin_types=function(){return(a.___embind_register_native_and_builtin_types=a.asm.A).apply(null,arguments)},a.___cxa_is_pointer_type=function(){return(Ut=a.___cxa_is_pointer_type=a.asm.B).apply(null,arguments)});function xt(t){this.name="ExitStatus",this.message="Program terminated with exit("+t+")",this.status=t}function Dt(t){function e(){Wt||(Wt=!0,a.calledRun=!0,_||(J(H),J(N),n(a),a.onRuntimeInitialized&&a.onRuntimeInitialized(),Mt&&function(){var t,n,e=a._main;try{var r=e(0,0);return g=n=r,g=t=n,m||(a.onExit&&a.onExit(t),_=!0),f(t,new xt(t)),r}catch(t){return function(t){if(t instanceof xt||"unwind"==t)return g;f(1,t)}(t)}}(),function(){if(a.postRun)for("function"==typeof a.postRun&&(a.postRun=[a.postRun]);a.postRun.length;)t=a.postRun.shift(),V.unshift(t);var t;J(V)}()))}t=t||c,z>0||(function(){if(a.preRun)for("function"==typeof a.preRun&&(a.preRun=[a.preRun]);a.preRun.length;)t=a.preRun.shift(),B.unshift(t);var t;J(B)}(),z>0||(a.setStatus?(a.setStatus("Running..."),setTimeout((function(){setTimeout((function(){a.setStatus("")}),1),e()}),1)):e()))}if(Y=function t(){Wt||Dt(),Wt||(Y=t)},a.run=Dt,a.preInit)for("function"==typeof a.preInit&&(a.preInit=[a.preInit]);a.preInit.length>0;)a.preInit.pop()();var Mt=!0;return a.noInitialRun&&(Mt=!1),Dt(),t.ready});var a=1008e3,u=function(){function t(t,n,e,r,i){this.module=t,this._converterType=n,this._nChannels=e,this._inputSampleRate=r,this._outputSampleRate=i,this.ratio=i/r,this.isDestroyed=!1,t.init(e,n,r,i),this.sourceArray=t.sourceArray(a),this.targetArray=t.targetArray(a)}return t.prototype.simple=function(t){return this._resample(this.module.simple,t)},t.prototype.full=function(t,n){return void 0===n&&(n=null),this._resample(this.module.full,t,n)},t.prototype.destroy=function(){!0===this.isDestroyed?console.warn("destroy() has already been called on this instance"):(this.module.destroy(),this.isDestroyed=!0)},Object.defineProperty(t.prototype,"inputSampleRate",{get:function(){return this._inputSampleRate},set:function(t){this._inputSampleRate=t,this.module.destroy(),this.module.init(this.nChannels,this.converterType,this.inputSampleRate,this.outputSampleRate)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"outputSampleRate",{get:function(){return this._outputSampleRate},set:function(t){this._outputSampleRate=t,this.module.destroy(),this.module.init(this.nChannels,this.converterType,this.inputSampleRate,this.outputSampleRate)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"nChannels",{get:function(){return this._nChannels},set:function(t){this._nChannels=t,this.module.destroy(),this.module.init(this.nChannels,this.converterType,this.inputSampleRate,this.outputSampleRate)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"converterType",{get:function(){return this._converterType},set:function(t){this._converterType=t,this.module.destroy(),this.module.init(this.nChannels,this.converterType,this.inputSampleRate,this.outputSampleRate)},enumerable:!1,configurable:!0}),t.prototype._chunkAndResample=function(t){for(var n=0,e=[],r=function(t,n,e){for(var r=0,i=[],o=0;o<t.length;o+=n){var a=Math.min(n,t.length-r),u=new e(t.buffer,r*t.BYTES_PER_ELEMENT,a);r+=n,i.push(u)}return i}(t,this.inputSampleRate/10*this.nChannels,Float32Array),i=0;i<r.length;i++){var o=this._resample(this.module.full,r[i]);n+=o.length,e.push(o)}var a=new Float32Array(n),u=0;for(i=0;i<e.length;i++)for(var s=0;s<e[i].length;s++)a[u++]=e[i][s];return a},t.prototype._resample=function(t,n,e){if(void 0===e&&(e=null),this.inputSampleRate===this.outputSampleRate)return n;if(null!==e&&e.length<this.ratio*n.length)throw"dataOut must be at least ceil(srcRatio * dataIn.length) samples long";return Math.ceil(n.length*this.ratio)>a?this._chunkAndResample(n):(this.sourceArray.set(n),function(t,n,e){void 0===e&&(e=null);for(var r=null===e?new Float32Array(t):e,i=0;i<t;i++)r[i]=n[i];return r}(t(n.length,this.nChannels,this.converterType,this.inputSampleRate,this.outputSampleRate)*this.nChannels,this.targetArray,e))},t}(),s={SRC_SINC_BEST_QUALITY:0,SRC_SINC_MEDIUM_QUALITY:1,SRC_SINC_FASTEST:2,SRC_ZERO_ORDER_HOLD:3,SRC_LINEAR:4};function c(t,n,e,r){var i=void 0===(null==r?void 0:r.converterType)?s.SRC_SINC_FASTEST:null==r?void 0:r.converterType,a=(null==r?void 0:r.wasmPath)||"/libsamplerate.wasm";!function(t,n,e,r){if(void 0===t)throw"nChannels is undefined";if(void 0===n)throw"inputSampleRate is undefined";if(void 0===e)throw"outputSampleRate is undefined";if(t<1||t>128)throw"invalid nChannels submitted";if(n<1||n>192e3)throw"invalid inputSampleRate";if(e<1||e>192e3)throw"invalid outputSampleRate";if(r<s.SRC_SINC_BEST_QUALITY||r>s.SRC_LINEAR)throw"invalid converterType"}(t,n,e,i);var c={locateFile:function(){return a}};return new Promise((function(r,a){o(c).then((function(o){var a=new u(o,i,t,n,e);r(a)})).catch((function(t){a(t)}))}))}return n})()));