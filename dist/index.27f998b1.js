function t(t,e,r,n){Object.defineProperty(t,e,{get:r,set:n,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var r,n,o,i,a,c,u,f,l,s,p,h,v,y,g,d,m="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},b={},w={},O=m.parcelRequire3a11;null==O&&((O=function(t){if(t in b)return b[t].exports;if(t in w){var e=w[t];delete w[t];var r={id:t,exports:{}};return b[t]=r,e.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(t,e){w[t]=e},m.parcelRequire3a11=O),O.register("kyEFX",function(e,r){t(e.exports,"register",function(){return n},function(t){return n=t}),t(e.exports,"resolve",function(){return o},function(t){return o=t});var n,o,i={};n=function(t){for(var e=Object.keys(t),r=0;r<e.length;r++)i[e[r]]=t[e[r]]},o=function(t){var e=i[t];if(null==e)throw Error("Could not resolve bundle with id "+t);return e}}),O("kyEFX").register(JSON.parse('{"3EsVB":"index.27f998b1.js","4ngZM":"viewRecipe.1e3a0902.js","cPzGy":"icons.c14567a0.svg"}'));var S={},E=function(t){return t&&t.Math===Math&&t};// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
S=E("object"==typeof globalThis&&globalThis)||E("object"==typeof window&&window)||// eslint-disable-next-line no-restricted-globals -- safe
E("object"==typeof self&&self)||E("object"==typeof m&&m)||// eslint-disable-next-line no-new-func -- fallback
function(){return this}()||S||Function("return this")();var j={},L={};// Detect IE8's incomplete defineProperty implementation
j=!(L=function(t){try{return!!t()}catch(t){return!0}})(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var x={},_={},P={},k={};k=!L(function(){// eslint-disable-next-line es/no-function-prototype-bind -- safe
var t=(function(){}).bind();// eslint-disable-next-line no-prototype-builtins -- safe
return"function"!=typeof t||t.hasOwnProperty("prototype")});var T=Function.prototype,F=T.call,I=k&&T.bind.bind(F,F);P=k?I:function(t){return function(){return F.apply(t,arguments)}};var M={},D={},N="object"==typeof document&&document.all,R=(D={all:N,IS_HTMLDDA:void 0===N&&void 0!==N}).all;// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
M=D.IS_HTMLDDA?function(t){return"function"==typeof t||t===R}:function(t){return"function"==typeof t};var C={},A={},G={},H={};// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
H=function(t){return null==t};var z=TypeError;// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
G=function(t){if(H(t))throw z("Can't call method on "+t);return t};var B=Object;// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
A=function(t){return B(G(t))};var U=P({}.hasOwnProperty);// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
C=Object.hasOwn||function(t,e){return U(A(t),e)};var q=Function.prototype,$=j&&Object.getOwnPropertyDescriptor,W=C(q,"name")&&(!j||j&&$(q,"name").configurable),X={},Y={},V={},Z=Object.defineProperty;V=function(t,e){try{Z(S,t,{value:e,configurable:!0,writable:!0})}catch(r){S[t]=e}return e};var J="__core-js_shared__";Y=S[J]||V(J,{});var K=P(Function.toString);M(Y.inspectSource)||(Y.inspectSource=function(t){return K(t)}),X=Y.inspectSource;var Q={},tt={},te=S.WeakMap;tt=M(te)&&/native code/.test(String(te));var tr={},tn=D.all;tr=D.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:M(t)||t===tn}:function(t){return"object"==typeof t?null!==t:M(t)};var to={},ti={},ta={},tc=S.document,tu=tr(tc)&&tr(tc.createElement);ta=function(t){return tu?tc.createElement(t):{}},// Thanks to IE8 for its funny defineProperty
ti=!j&&!L(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty(ta("div"),"a",{get:function(){return 7}}).a});var tf={};// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
tf=j&&L(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var tl={},ts=String,tp=TypeError;// `Assert: Type(argument) is Object`
tl=function(t){if(tr(t))return t;throw tp(ts(t)+" is not an object")};var th={},tv={},ty={},tg=Function.prototype.call;ty=k?tg.bind(tg):function(){return tg.apply(tg,arguments)};var td={},tm={};tm=function(t,e){var r;return arguments.length<2?(r=S[t],M(r)?r:void 0):S[t]&&S[t][e]};var tb={};tb=P({}.isPrototypeOf);var tw={},tO={},tS={},tE={};tE="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var tj=S.process,tL=S.Deno,tx=tj&&tj.versions||tL&&tL.version,t_=tx&&tx.v8;t_&&// in old Chrome, versions of V8 isn't V8 = Chrome / 10
// but their correct versions are not interesting for us
(a=(i=t_.split("."))[0]>0&&i[0]<4?1:+(i[0]+i[1])),!a&&tE&&(!(i=tE.match(/Edge\/(\d+)/))||i[1]>=74)&&(i=tE.match(/Chrome\/(\d+)/))&&(a=+i[1]),tS=a;var tP=S.String;tw=// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
(tO=!!Object.getOwnPropertySymbols&&!L(function(){var t=Symbol("symbol detection");// Chrome 38 Symbol has incorrect toString conversion
// `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
// nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
// of course, fail.
return!tP(t)||!(Object(t) instanceof Symbol)||// Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
!Symbol.sham&&tS&&tS<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var tk=Object;td=tw?function(t){return"symbol"==typeof t}:function(t){var e=tm("Symbol");return M(e)&&tb(e.prototype,tk(t))};var tT={},tF={},tI={},tM=String;tI=function(t){try{return tM(t)}catch(t){return"Object"}};var tD=TypeError;// `Assert: IsCallable(argument) is true`
tF=function(t){if(M(t))return t;throw tD(tI(t)+" is not a function")},// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
tT=function(t,e){var r=t[e];return H(r)?void 0:tF(r)};var tN={},tR=TypeError;// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
tN=function(t,e){var r,n;if("string"===e&&M(r=t.toString)&&!tr(n=ty(r,t))||M(r=t.valueOf)&&!tr(n=ty(r,t))||"string"!==e&&M(r=t.toString)&&!tr(n=ty(r,t)))return n;throw tR("Can't convert object to primitive value")};var tC={},tA={};tA=!1,(tC=function(t,e){return Y[t]||(Y[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.32.2",mode:tA?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.32.2/LICENSE",source:"https://github.com/zloirock/core-js"});var tG={},tH=0,tz=Math.random(),tB=P(1..toString);tG=function(t){return"Symbol("+(void 0===t?"":t)+")_"+tB(++tH+tz,36)};var tU=S.Symbol,tq=tC("wks"),t$=tw?tU.for||tU:tU&&tU.withoutSetter||tG,tW=TypeError,tX=(C(tq,r="toPrimitive")||(tq[r]=tO&&C(tU,r)?tU[r]:t$("Symbol."+r)),tq[r]);// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
tv=function(t,e){if(!tr(t)||td(t))return t;var r,n=tT(t,tX);if(n){if(void 0===e&&(e="default"),r=ty(n,t,e),!tr(r)||td(r))return r;throw tW("Can't convert object to primitive value")}return void 0===e&&(e="number"),tN(t,e)},// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
th=function(t){var e=tv(t,"string");return td(e)?e:e+""};var tY=TypeError,tV=Object.defineProperty,tZ=Object.getOwnPropertyDescriptor,tJ="enumerable",tK="configurable",tQ="writable";o=j?tf?function(t,e,r){if(tl(t),e=th(e),tl(r),"function"==typeof t&&"prototype"===e&&"value"in r&&tQ in r&&!r[tQ]){var n=tZ(t,e);n&&n[tQ]&&(t[e]=r.value,r={configurable:tK in r?r[tK]:n[tK],enumerable:tJ in r?r[tJ]:n[tJ],writable:!1})}return tV(t,e,r)}:tV:function(t,e,r){if(tl(t),e=th(e),tl(r),ti)try{return tV(t,e,r)}catch(t){}if("get"in r||"set"in r)throw tY("Accessors not supported");return"value"in r&&(t[e]=r.value),t};var t0={};t0=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},to=j?function(t,e,r){return o(t,e,t0(1,r))}:function(t,e,r){return t[e]=r,t};var t1={},t2=tC("keys");t1=function(t){return t2[t]||(t2[t]=tG(t))};var t3={};t3={};var t4="Object already initialized",t7=S.TypeError,t9=S.WeakMap;if(tt||Y.state){var t8=Y.state||(Y.state=new t9);/* eslint-disable no-self-assign -- prototype methods protection */t8.get=t8.get,t8.has=t8.has,t8.set=t8.set,/* eslint-enable no-self-assign -- prototype methods protection */c=function(t,e){if(t8.has(t))throw t7(t4);return e.facade=t,t8.set(t,e),e},u=function(t){return t8.get(t)||{}},f=function(t){return t8.has(t)}}else{var t5=t1("state");t3[t5]=!0,c=function(t,e){if(C(t,t5))throw t7(t4);return e.facade=t,to(t,t5,e),e},u=function(t){return C(t,t5)?t[t5]:{}},f=function(t){return C(t,t5)}}var t6=(Q={set:c,get:u,has:f,enforce:function(t){return f(t)?u(t):c(t,{})},getterFor:function(t){return function(e){var r;if(!tr(e)||(r=u(e)).type!==t)throw t7("Incompatible receiver, "+t+" required");return r}}}).enforce,et=Q.get,ee=String,er=Object.defineProperty,en=P("".slice),eo=P("".replace),ei=P([].join),ea=j&&!L(function(){return 8!==er(function(){},"length",{value:8}).length}),ec=String(String).split("String"),eu=_=function(t,e,r){"Symbol("===en(ee(e),0,7)&&(e="["+eo(ee(e),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(e="get "+e),r&&r.setter&&(e="set "+e),(!C(t,"name")||W&&t.name!==e)&&(j?er(t,"name",{value:e,configurable:!0}):t.name=e),ea&&r&&C(r,"arity")&&t.length!==r.arity&&er(t,"length",{value:r.arity});try{r&&C(r,"constructor")&&r.constructor?j&&er(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var n=t6(t);return C(n,"source")||(n.source=ei(ec,"string"==typeof e?e:"")),t};// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString=eu(function(){return M(this)&&et(this).source||X(this)},"toString"),x=function(t,e,r){return r.get&&_(r.get,e,{getter:!0}),r.set&&_(r.set,e,{setter:!0}),o(t,e,r)};var ef={};// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
ef=function(){var t=tl(this),e="";return t.hasIndices&&(e+="d"),t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.unicodeSets&&(e+="v"),t.sticky&&(e+="y"),e};// babel-minify and Closure Compiler transpiles RegExp('.', 'd') -> /./d and it causes SyntaxError
var el=S.RegExp,es=el.prototype;j&&L(function(){var t=!0;try{el(".","d")}catch(e){t=!1}var e={},r="",n=t?"dgimsy":"gimsy",o=function(t,n){// eslint-disable-next-line es/no-object-defineproperty -- safe
Object.defineProperty(e,t,{get:function(){return r+=n,!0}})},i={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var a in t&&(i.hasIndices="d"),i)o(a,i[a]);return Object.getOwnPropertyDescriptor(es,"flags").get.call(e)!==n||r!==n})&&x(es,"flags",{configurable:!0,get:ef});var ep={},eh={}.propertyIsEnumerable,ev=Object.getOwnPropertyDescriptor;s=ev&&!eh.call({1:2},1)?function(t){var e=ev(this,t);return!!e&&e.enumerable}:eh;var ey={},eg={},ed={},em=P({}.toString),eb=P("".slice);ed=function(t){return eb(em(t),8,-1)};var ew=Object,eO=P("".split);// fallback for non-array-like ES3 and non-enumerable old V8 strings
eg=L(function(){// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
// eslint-disable-next-line no-prototype-builtins -- safe
return!ew("z").propertyIsEnumerable(0)})?function(t){return"String"===ed(t)?eO(t,""):ew(t)}:ew,ey=function(t){return eg(G(t))};// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var eS=Object.getOwnPropertyDescriptor;l=j?eS:function(t,e){if(t=ey(t),e=th(e),ti)try{return eS(t,e)}catch(t){}if(C(t,e))return t0(!ty(s,t,e),t[e])};var eE={};eE=function(t,e,r,n){n||(n={});var i=n.enumerable,a=void 0!==n.name?n.name:e;if(M(r)&&_(r,a,n),n.global)i?t[e]=r:V(e,r);else{try{n.unsafe?t[e]&&(i=!0):delete t[e]}catch(t){}i?t[e]=r:o(t,e,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return t};var ej={},eL={},ex={},e_={},eP={},ek={},eT=Math.ceil,eF=Math.floor;// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
ek=Math.trunc||function(t){var e=+t;return(e>0?eF:eT)(e)},// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
eP=function(t){var e=+t;// eslint-disable-next-line no-self-compare -- NaN check
return e!=e||0===e?0:ek(e)};var eI=Math.max,eM=Math.min;// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
e_=function(t,e){var r=eP(t);return r<0?eI(r+e,0):eM(r,e)};var eD={},eN={},eR=Math.min;// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
eN=function(t){return t>0?eR(eP(t),9007199254740991):0;// 2 ** 53 - 1 == 9007199254740991
},// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
eD=function(t){return eN(t.length)};// `Array.prototype.{ indexOf, includes }` methods implementation
var eC=function(t){return function(e,r,n){var o,i=ey(e),a=eD(i),c=e_(n,a);// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare -- NaN check
if(t&&r!=r){for(;a>c;)// eslint-disable-next-line no-self-compare -- NaN check
if((o=i[c++])!=o)return!0;// Array#indexOf ignores holes, Array#includes - not
}else for(;a>c;c++)if((t||c in i)&&i[c]===r)return t||c||0;return!t&&-1}},eA={// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
includes:eC(!0),// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
indexOf:eC(!1)}.indexOf,eG=P([].push);ex=function(t,e){var r,n=ey(t),o=0,i=[];for(r in n)!C(t3,r)&&C(n,r)&&eG(i,r);// Don't enum bug & hidden keys
for(;e.length>o;)C(n,r=e[o++])&&(~eA(i,r)||eG(i,r));return i};var eH=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");p=Object.getOwnPropertyNames||function(t){return ex(t,eH)},h=Object.getOwnPropertySymbols;var ez=P([].concat);// all object keys, includes non-enumerable and symbols
eL=tm("Reflect","ownKeys")||function(t){var e=p(tl(t));return h?ez(e,h(t)):e},ej=function(t,e,r){for(var n=eL(e),i=0;i<n.length;i++){var a=n[i];C(t,a)||r&&C(r,a)||o(t,a,l(e,a))}};var eB={},eU=/#|\.prototype\./,eq=function(t,e){var r=eW[e$(t)];return r===eY||r!==eX&&(M(e)?L(e):!!e)},e$=eq.normalize=function(t){return String(t).replace(eU,".").toLowerCase()},eW=eq.data={},eX=eq.NATIVE="N",eY=eq.POLYFILL="P";eB=eq,/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/ep=function(t,e){var r,n,o,i,a,c=t.target,u=t.global,f=t.stat;if(r=u?S:f?S[c]||V(c,{}):(S[c]||{}).prototype)for(n in e){// contained in target
if(i=e[n],o=t.dontCallGetSet?(a=l(r,n))&&a.value:r[n],!eB(u?n:c+(f?".":"#")+n,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;ej(i,o)}(t.sham||o&&o.sham)&&to(i,"sham",!0),eE(r,n,i,t)}};var eV={},eZ={},eJ=Function.prototype,eK=eJ.apply,eQ=eJ.call;// eslint-disable-next-line es/no-reflect -- safe
eZ="object"==typeof Reflect&&Reflect.apply||(k?eQ.bind(eK):function(){return eQ.apply(eK,arguments)});var e0={},e1={},e2=(e1=function(t){// Nashorn bug:
//   https://github.com/zloirock/core-js/issues/1128
//   https://github.com/zloirock/core-js/issues/1130
if("Function"===ed(t))return P(t)})(e1.bind);// optional / simple context binding
e0=function(t,e){return tF(t),void 0===e?t:k?e2(t,e):function(){return t.apply(e,arguments)}};var e3={};e3=tm("document","documentElement");var e4={};e4=P([].slice);var e7={},e9=TypeError;e7=function(t,e){if(t<e)throw e9("Not enough arguments");return t};var e8={};// eslint-disable-next-line redos/no-vulnerable -- safe
e8=/(?:ipad|iphone|ipod).*applewebkit/i.test(tE);var e5={};e5="process"===ed(S.process);var e6=S.setImmediate,rt=S.clearImmediate,re=S.process,rr=S.Dispatch,rn=S.Function,ro=S.MessageChannel,ri=S.String,ra=0,rc={},ru="onreadystatechange";L(function(){// Deno throws a ReferenceError on `location` access without `--location` flag
v=S.location});var rf=function(t){if(C(rc,t)){var e=rc[t];delete rc[t],e()}},rl=function(t){return function(){rf(t)}},rs=function(t){rf(t.data)},rp=function(t){// old engines have not location.origin
S.postMessage(ri(t),v.protocol+"//"+v.host)};e6&&rt||(e6=function(t){e7(arguments.length,1);var e=M(t)?t:rn(t),r=e4(arguments,1);return rc[++ra]=function(){eZ(e,void 0,r)},y(ra),ra},rt=function(t){delete rc[t]},e5?y=function(t){re.nextTick(rl(t))}:rr&&rr.now?y=function(t){rr.now(rl(t))}:ro&&!e8?(d=(g=new ro).port2,g.port1.onmessage=rs,y=e0(d.postMessage,d)):S.addEventListener&&M(S.postMessage)&&!S.importScripts&&v&&"file:"!==v.protocol&&!L(rp)?(y=rp,S.addEventListener("message",rs,!1)):y=ru in ta("script")?function(t){e3.appendChild(ta("script"))[ru]=function(){e3.removeChild(this),rf(t)}}:function(t){setTimeout(rl(t),0)});var rh=(eV={set:e6,clear:rt}).clear;// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
ep({global:!0,bind:!0,enumerable:!0,forced:S.clearImmediate!==rh},{clearImmediate:rh});var rv=eV.set,ry={},rg={};/* global Bun -- Deno case */rg="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rd=S.Function,rm=/MSIE .\./.test(tE)||rg&&((n=S.Bun.version.split(".")).length<3||"0"===n[0]&&(n[1]<3||"3"===n[1]&&"0"===n[2]));// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
ry=function(t,e){var r=e?2:1;return rm?function(n,o/* , ...arguments */){var i=e7(arguments.length,1)>r,a=M(n)?n:rd(n),c=i?e4(arguments,r):[],u=i?function(){eZ(a,this,c)}:a;return e?t(u,o):t(u)}:t};// https://github.com/oven-sh/bun/issues/1633
var rb=S.setImmediate?ry(rv,!1):rv;// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
ep({global:!0,bind:!0,enumerable:!0,forced:S.setImmediate!==rb},{setImmediate:rb});var rw={};t(rw,"state",function(){return rS}),t(rw,"loadRecipe",function(){return rE});/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rO=function(t){var e,r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{// IE 8 has a broken Object.defineProperty that only works on DOM objects.
f({},"")}catch(t){f=function(t,e,r){return t[e]=r}}function l(t,r,n,i){var a,c,u=Object.create((r&&r.prototype instanceof g?r:g).prototype);return(// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
o(u,"_invoke",{value:(a=new _(i||[]),c=p,function(r,o){if(c===h)throw Error("Generator is already running");if(c===v){if("throw"===r)throw o;// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return{value:e,done:!0}}for(a.method=r,a.arg=o;;){var i=a.delegate;if(i){var u=// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function t(r,n){var o=n.method,i=r.iterator[o];if(i===e)return(// A .throw or .return when the delegate iterator has no .throw
// method, or a missing .next mehtod, always terminate the
// yield* loop.
n.delegate=null,"throw"===o&&r.iterator.return&&(// If the delegate iterator has a return method, give it a
// chance to clean up.
n.method="return",n.arg=e,t(r,n),"throw"===n.method)||"return"!==o&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+o+"' method")),y);var a=s(i,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,y;var c=a.arg;return c?c.done?(// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
n[r.resultName]=c.value,// Resume execution at the desired location (see delegateYield).
n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),// The delegate iterator is finished, so forget it and continue with
// the outer generator.
n.delegate=null,y):c:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,y)}(i,a);if(u){if(u===y)continue;return u}}if("next"===a.method)// function.sent implementation.
a.sent=a._sent=a.arg;else if("throw"===a.method){if(c===p)throw c=v,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);c=h;var f=s(t,n,a);if("normal"===f.type){if(// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
c=a.done?v:"suspendedYield",f.arg===y)continue;return{value:f.arg,done:a.done}}"throw"===f.type&&(c=v,// Dispatch the exception by looping back around to the
// context.dispatchException(context.arg) call above.
a.method="throw",a.arg=f.arg)}})}),u)}// Try/catch helper to minimize deoptimizations. Returns a completion
// record like context.tryEntries[i].completion. This interface could
// have been (and was previously) designed to take a closure to be
// invoked without arguments, but in all the cases we care about we
// already have an existing method we want to call, so there's no need
// to create a new function object. We can even get away with assuming
// the method takes exactly one argument, since that happens to be true
// in every case, so we don't have to touch the arguments object. The
// only additional allocation required is the completion record, which
// has a stable shape and so hopefully should be cheap to allocate.
function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var p="suspendedStart",h="executing",v="completed",y={};// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function g(){}function d(){}function m(){}// This is a polyfill for %IteratorPrototype% for environments that
// don't natively support it.
var b={};f(b,a,function(){return this});var w=Object.getPrototypeOf,O=w&&w(w(P([])));O&&O!==r&&n.call(O,a)&&// of the polyfill.
(b=O);var S=m.prototype=g.prototype=Object.create(b);// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function E(t){["next","throw","return"].forEach(function(e){f(t,e,function(t){return this._invoke(e,t)})})}function j(t,e){var r;// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
o(this,"_invoke",{value:function(o,i){function a(){return new e(function(r,a){!function r(o,i,a,c){var u=s(t[o],t,i);if("throw"===u.type)c(u.arg);else{var f=u.arg,l=f.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then(function(t){r("next",t,a,c)},function(t){r("throw",t,a,c)}):e.resolve(l).then(function(t){// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration.
f.value=t,a(f)},function(t){// If a rejected Promise was yielded, throw the rejection back
// into the async generator function so it can be handled there.
return r("throw",t,a,c)})}}(o,i,r,a)})}return r=// all previous Promises have been resolved before calling invoke,
// so that results are always delivered in the correct order. If
// enqueue has not been called before, then it is important to
// call invoke immediately, without waiting on a callback to fire,
// so that the async generator function has the opportunity to do
// any necessary setup in a predictable way. This predictability
// is why the Promise constructor synchronously invokes its
// executor callback, and why async functions synchronously
// execute code before the first await. Since we implement simple
// async functions in terms of async generators, it is especially
// important to get this right, even though it requires care.
r?r.then(a,// invocations of the iterator.
a):a()}})}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function P(t){if(t||""===t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}throw TypeError(typeof t+" is not iterable")}return d.prototype=m,o(S,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:d,configurable:!0}),d.displayName=f(m,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,f(t,u,"GeneratorFunction")),t.prototype=Object.create(S),t},// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
t.awrap=function(t){return{__await:t}},E(j.prototype),f(j.prototype,c,function(){return this}),t.AsyncIterator=j,// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new j(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a// If outerFn is a generator, return the full iterator.
:a.next().then(function(t){return t.done?t.value:a.next()})},// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
E(S),f(S,u,"Generator"),// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
f(S,a,function(){return this}),f(S,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return(// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
t.done=!0,t)}},t.values=P,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(x),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)// it, so set the completion value of the entire function to
// throw the exception.
return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),f=n.call(a,"finallyLoc");if(u&&f){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else if(f){if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&// location outside the try/catch block.
(i=null);var a=i?i.completion:{};return(a.type=t,a.arg=e,i)?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:P(t),resultName:r,nextLoc:n},"next"===this.method&&// accidentally pass it on to the delegate.
(this.arg=e),y}},t}({});try{regeneratorRuntime=rO}catch(t){// This module should not be running in strict mode, so the above
// assignment should always work unless something is misconfigured. Just
// in case runtime.js accidentally runs in strict mode, in modern engines
// we can explicitly access globalThis. In older engines we can escape
// strict mode using a global Function call. This could conceivably fail
// if a Content Security Policy forbids using Function, but in that case
// the proper solution is to fix the accidental strict mode problem. If
// you've misconfigured your bundler to force strict mode and applied a
// CSP to forbid Function, and you're not willing to fix either of those
// problems, please detail your unique predicament in a GitHub issue.
"object"==typeof globalThis?globalThis.regeneratorRuntime=rO:Function("r","regeneratorRuntime = r")(rO)}const rS={recipe:{}},rE=async function(t){try{let e=await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${t}`),r=await e.json();if(!e.ok)throw Error(`${message} {${e.status}}`);let{recipe:n}=r.data;rS.recipe={cookingTime:n.cooking_time,id:n.id,imageUrl:n.image_url,ingredients:n.ingredients,publisher:n.publisher,servings:n.servings,sourceUrl:n.source_url,title:n.title}}catch(t){alert(t)}};var rj={};console.log(/*@__PURE__*/e(rj=new URL(O("kyEFX").resolve("4ngZM"),import.meta.url).toString())),console.log(rw),document.querySelector(".recipe");// https://forkify-api.herokuapp.com/v2
///////////////////////////////////////
const rL=async function(){try{let t=window.location.hash.slice(1);if(!t)return;/*@__PURE__*/e(rj).renderSpinner(),// Getting t he recipe data
await rw.loadRecipe(t),/*@__PURE__*/e(rj).render(rw.state.recipe);// rendering the recipe data
}catch(t){alert(t)}};["load","hashchange"].forEach(t=>{window.addEventListener(t,rL)}),rL();//# sourceMappingURL=index.27f998b1.js.map

//# sourceMappingURL=index.27f998b1.js.map
