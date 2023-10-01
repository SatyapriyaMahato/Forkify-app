!function(){function t(t,r,e,n){Object.defineProperty(t,r,{get:e,set:n,enumerable:!0,configurable:!0})}function r(t){return t&&t.__esModule?t.default:t}var e,n,o,i,a,c,u,f,l,s,p,y,h,v,g,d,m,b,w="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},O={},E={},j=w.parcelRequire3a11;null==j&&((j=function(t){if(t in O)return O[t].exports;if(t in E){var r=E[t];delete E[t];var e={id:t,exports:{}};return O[t]=e,r.call(e.exports,e,e.exports),e.exports}var n=Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(t,r){E[t]=r},w.parcelRequire3a11=j),j.register("aNJCr",function(r,e){t(r.exports,"getBundleURL",function(){return n},function(t){return n=t});var n,o={};n=function(t){var r=o[t];return r||(r=function(){try{throw Error()}catch(r){var t=(""+r.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);if(t)// Use the 3rd one, which will be a runtime in the original bundle.
return(""+t[2]).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}return"/"}(),o[t]=r),r}});var S={},_=function(t){return t&&t.Math===Math&&t};// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
S=_("object"==typeof globalThis&&globalThis)||_("object"==typeof window&&window)||// eslint-disable-next-line no-restricted-globals -- safe
_("object"==typeof self&&self)||_("object"==typeof w&&w)||// eslint-disable-next-line no-new-func -- fallback
function(){return this}()||S||Function("return this")();var T={},A={};// Detect IE8's incomplete defineProperty implementation
T=!(A=function(t){try{return!!t()}catch(t){return!0}})(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var L={},x={},P={},I={};I=!A(function(){// eslint-disable-next-line es/no-function-prototype-bind -- safe
var t=(function(){}).bind();// eslint-disable-next-line no-prototype-builtins -- safe
return"function"!=typeof t||t.hasOwnProperty("prototype")});var k=Function.prototype,R=k.call,F=I&&k.bind.bind(R,R);P=I?F:function(t){return function(){return R.apply(t,arguments)}};var M={},C={},D="object"==typeof document&&document.all,N=(C={all:D,IS_HTMLDDA:void 0===D&&void 0!==D}).all;// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
M=C.IS_HTMLDDA?function(t){return"function"==typeof t||t===N}:function(t){return"function"==typeof t};var U={},B={},G={},z={};// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
z=function(t){return null==t};var Y=TypeError;// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
G=function(t){if(z(t))throw Y("Can't call method on "+t);return t};var V=Object;// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
B=function(t){return V(G(t))};var W=P({}.hasOwnProperty);// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
U=Object.hasOwn||function(t,r){return W(B(t),r)};var $=Function.prototype,q=T&&Object.getOwnPropertyDescriptor,H=U($,"name"),J=H&&(!T||T&&q($,"name").configurable),K={},Q={},X={},Z=Object.defineProperty;X=function(t,r){try{Z(S,t,{value:r,configurable:!0,writable:!0})}catch(e){S[t]=r}return r};var tt="__core-js_shared__";Q=S[tt]||X(tt,{});var tr=P(Function.toString);M(Q.inspectSource)||(Q.inspectSource=function(t){return tr(t)}),K=Q.inspectSource;var te={},tn={},to=S.WeakMap;tn=M(to)&&/native code/.test(String(to));var ti={},ta=C.all;ti=C.IS_HTMLDDA?function(t){return"object"==typeof t?null!==t:M(t)||t===ta}:function(t){return"object"==typeof t?null!==t:M(t)};var tc={},tu={},tf={},tl=S.document,ts=ti(tl)&&ti(tl.createElement);tf=function(t){return ts?tl.createElement(t):{}},// Thanks to IE8 for its funny defineProperty
tu=!T&&!A(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 7!==Object.defineProperty(tf("div"),"a",{get:function(){return 7}}).a});var tp={};// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
tp=T&&A(function(){// eslint-disable-next-line es/no-object-defineproperty -- required for testing
return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var ty={},th=String,tv=TypeError;// `Assert: Type(argument) is Object`
ty=function(t){if(ti(t))return t;throw tv(th(t)+" is not an object")};var tg={},td={},tm={},tb=Function.prototype.call;tm=I?tb.bind(tb):function(){return tb.apply(tb,arguments)};var tw={},tO={};tO=function(t,r){var e;return arguments.length<2?(e=S[t],M(e)?e:void 0):S[t]&&S[t][r]};var tE={};tE=P({}.isPrototypeOf);var tj={},tS={},t_={},tT={};tT="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var tA=S.process,tL=S.Deno,tx=tA&&tA.versions||tL&&tL.version,tP=tx&&tx.v8;tP&&// in old Chrome, versions of V8 isn't V8 = Chrome / 10
// but their correct versions are not interesting for us
(i=(o=tP.split("."))[0]>0&&o[0]<4?1:+(o[0]+o[1])),!i&&tT&&(!(o=tT.match(/Edge\/(\d+)/))||o[1]>=74)&&(o=tT.match(/Chrome\/(\d+)/))&&(i=+o[1]),t_=i;var tI=S.String;tj=// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
(tS=!!Object.getOwnPropertySymbols&&!A(function(){var t=Symbol("symbol detection");// Chrome 38 Symbol has incorrect toString conversion
// `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
// nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
// of course, fail.
return!tI(t)||!(Object(t) instanceof Symbol)||// Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
!Symbol.sham&&t_&&t_<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var tk=Object;tw=tj?function(t){return"symbol"==typeof t}:function(t){var r=tO("Symbol");return M(r)&&tE(r.prototype,tk(t))};var tR={},tF={},tM={},tC=String;tM=function(t){try{return tC(t)}catch(t){return"Object"}};var tD=TypeError;// `Assert: IsCallable(argument) is true`
tF=function(t){if(M(t))return t;throw tD(tM(t)+" is not a function")},// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
tR=function(t,r){var e=t[r];return z(e)?void 0:tF(e)};var tN={},tU=TypeError;// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
tN=function(t,r){var e,n;if("string"===r&&M(e=t.toString)&&!ti(n=tm(e,t))||M(e=t.valueOf)&&!ti(n=tm(e,t))||"string"!==r&&M(e=t.toString)&&!ti(n=tm(e,t)))return n;throw tU("Can't convert object to primitive value")};var tB={},tG={},tz={};tz=!1,(tG=function(t,r){return Q[t]||(Q[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.32.2",mode:tz?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.32.2/LICENSE",source:"https://github.com/zloirock/core-js"});var tY={},tV=0,tW=Math.random(),t$=P(1..toString);tY=function(t){return"Symbol("+(void 0===t?"":t)+")_"+t$(++tV+tW,36)};var tq=S.Symbol,tH=tG("wks"),tJ=tj?tq.for||tq:tq&&tq.withoutSetter||tY,tK=TypeError,tQ=(tB=function(t){return U(tH,t)||(tH[t]=tS&&U(tq,t)?tq[t]:tJ("Symbol."+t)),tH[t]})("toPrimitive");// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
td=function(t,r){if(!ti(t)||tw(t))return t;var e,n=tR(t,tQ);if(n){if(void 0===r&&(r="default"),e=tm(n,t,r),!ti(e)||tw(e))return e;throw tK("Can't convert object to primitive value")}return void 0===r&&(r="number"),tN(t,r)},// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
tg=function(t){var r=td(t,"string");return tw(r)?r:r+""};var tX=TypeError,tZ=Object.defineProperty,t0=Object.getOwnPropertyDescriptor,t1="enumerable",t2="configurable",t3="writable";n=T?tp?function(t,r,e){if(ty(t),r=tg(r),ty(e),"function"==typeof t&&"prototype"===r&&"value"in e&&t3 in e&&!e[t3]){var n=t0(t,r);n&&n[t3]&&(t[r]=e.value,e={configurable:t2 in e?e[t2]:n[t2],enumerable:t1 in e?e[t1]:n[t1],writable:!1})}return tZ(t,r,e)}:tZ:function(t,r,e){if(ty(t),r=tg(r),ty(e),tu)try{return tZ(t,r,e)}catch(t){}if("get"in e||"set"in e)throw tX("Accessors not supported");return"value"in e&&(t[r]=e.value),t};var t4={};t4=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}},tc=T?function(t,r,e){return n(t,r,t4(1,e))}:function(t,r,e){return t[r]=e,t};var t8={},t7=tG("keys");t8=function(t){return t7[t]||(t7[t]=tY(t))};var t6={};t6={};var t9="Object already initialized",t5=S.TypeError,rt=S.WeakMap;if(tn||Q.state){var rr=Q.state||(Q.state=new rt);/* eslint-disable no-self-assign -- prototype methods protection */rr.get=rr.get,rr.has=rr.has,rr.set=rr.set,/* eslint-enable no-self-assign -- prototype methods protection */a=function(t,r){if(rr.has(t))throw t5(t9);return r.facade=t,rr.set(t,r),r},c=function(t){return rr.get(t)||{}},u=function(t){return rr.has(t)}}else{var re=t8("state");t6[re]=!0,a=function(t,r){if(U(t,re))throw t5(t9);return r.facade=t,tc(t,re,r),r},c=function(t){return U(t,re)?t[re]:{}},u=function(t){return U(t,re)}}var rn=(te={set:a,get:c,has:u,enforce:function(t){return u(t)?c(t):a(t,{})},getterFor:function(t){return function(r){var e;if(!ti(r)||(e=c(r)).type!==t)throw t5("Incompatible receiver, "+t+" required");return e}}}).enforce,ro=te.get,ri=String,ra=Object.defineProperty,rc=P("".slice),ru=P("".replace),rf=P([].join),rl=T&&!A(function(){return 8!==ra(function(){},"length",{value:8}).length}),rs=String(String).split("String"),rp=x=function(t,r,e){"Symbol("===rc(ri(r),0,7)&&(r="["+ru(ri(r),/^Symbol\(([^)]*)\)/,"$1")+"]"),e&&e.getter&&(r="get "+r),e&&e.setter&&(r="set "+r),(!U(t,"name")||J&&t.name!==r)&&(T?ra(t,"name",{value:r,configurable:!0}):t.name=r),rl&&e&&U(e,"arity")&&t.length!==e.arity&&ra(t,"length",{value:e.arity});try{e&&U(e,"constructor")&&e.constructor?T&&ra(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var n=rn(t);return U(n,"source")||(n.source=rf(rs,"string"==typeof r?r:"")),t};// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString=rp(function(){return M(this)&&ro(this).source||K(this)},"toString"),L=function(t,r,e){return e.get&&x(e.get,r,{getter:!0}),e.set&&x(e.set,r,{setter:!0}),n(t,r,e)};var ry={};// `RegExp.prototype.flags` getter implementation
// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
ry=function(){var t=ty(this),r="";return t.hasIndices&&(r+="d"),t.global&&(r+="g"),t.ignoreCase&&(r+="i"),t.multiline&&(r+="m"),t.dotAll&&(r+="s"),t.unicode&&(r+="u"),t.unicodeSets&&(r+="v"),t.sticky&&(r+="y"),r};// babel-minify and Closure Compiler transpiles RegExp('.', 'd') -> /./d and it causes SyntaxError
var rh=S.RegExp,rv=rh.prototype;T&&A(function(){var t=!0;try{rh(".","d")}catch(r){t=!1}var r={},e="",n=t?"dgimsy":"gimsy",o=function(t,n){// eslint-disable-next-line es/no-object-defineproperty -- safe
Object.defineProperty(r,t,{get:function(){return e+=n,!0}})},i={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var a in t&&(i.hasIndices="d"),i)o(a,i[a]);return Object.getOwnPropertyDescriptor(rv,"flags").get.call(r)!==n||e!==n})&&L(rv,"flags",{configurable:!0,get:ry});var rg={},rd={};// eslint-disable-next-line es/no-typed-arrays -- safe
rd="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView;var rm={},rb={},rw=tB("toStringTag"),rO={};rO[rw]="z",rb="[object z]"===String(rO);var rE={},rj=P({}.toString),rS=P("".slice);rE=function(t){return rS(rj(t),8,-1)};var r_=tB("toStringTag"),rT=Object,rA="Arguments"===rE(function(){return arguments}()),rL=function(t,r){try{return t[r]}catch(t){}};// getting tag from ES6+ `Object.prototype.toString`
rm=rb?rE:function(t){var r,e,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(e=rL(r=rT(t),r_))?e:rA?rE(r):"Object"===(n=rE(r))&&M(r.callee)?"Arguments":n};var rx={};rx=function(t,r,e,o){o||(o={});var i=o.enumerable,a=void 0!==o.name?o.name:r;if(M(e)&&x(e,a,o),o.global)i?t[r]=e:X(r,e);else{try{o.unsafe?t[r]&&(i=!0):delete t[r]}catch(t){}i?t[r]=e:n(t,r,{value:e,enumerable:!1,configurable:!o.nonConfigurable,writable:!o.nonWritable})}return t};var rP={},rI={};rI=!A(function(){function t(){}// eslint-disable-next-line es/no-object-getprototypeof -- required for testing
return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype});var rk=t8("IE_PROTO"),rR=Object,rF=rR.prototype;// `Object.getPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.getprototypeof
// eslint-disable-next-line es/no-object-getprototypeof -- safe
rP=rI?rR.getPrototypeOf:function(t){var r=B(t);if(U(r,rk))return r[rk];var e=r.constructor;return M(e)&&r instanceof e?e.prototype:r instanceof rR?rF:null};var rM={},rC={};rC=function(t,r,e){try{// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
return P(tF(Object.getOwnPropertyDescriptor(t,r)[e]))}catch(t){}};var rD={},rN=String,rU=TypeError;rD=function(t){if("object"==typeof t||M(t))return t;throw rU("Can't set "+rN(t)+" as a prototype")},// `Object.setPrototypeOf` method
// https://tc39.es/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
// eslint-disable-next-line es/no-object-setprototypeof -- safe
rM=Object.setPrototypeOf||("__proto__"in{}?function(){var t,r=!1,e={};try{(t=rC(Object.prototype,"__proto__","set"))(e,[]),r=e instanceof Array}catch(t){}return function(e,n){return ty(e),rD(n),r?t(e,n):e.__proto__=n,e}}():void 0);var rB=te.enforce,rG=te.get,rz=S.Int8Array,rY=rz&&rz.prototype,rV=S.Uint8ClampedArray,rW=rV&&rV.prototype,r$=rz&&rP(rz),rq=rY&&rP(rY),rH=Object.prototype,rJ=S.TypeError,rK=tB("toStringTag"),rQ=tY("TYPED_ARRAY_TAG"),rX="TypedArrayConstructor",rZ=rd&&!!rM&&"Opera"!==rm(S.opera),r0=!1,r1={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},r2={BigInt64Array:8,BigUint64Array:8},r3=function(t){var r=rP(t);if(ti(r)){var e=rG(r);return e&&U(e,rX)?e[rX]:r3(r)}},r4=function(t){if(!ti(t))return!1;var r=rm(t);return U(r1,r)||U(r2,r)};for(f in r1)(s=(l=S[f])&&l.prototype)?rB(s)[rX]=l:rZ=!1;for(f in r2)(s=(l=S[f])&&l.prototype)&&(rB(s)[rX]=l);// WebKit bug - typed arrays constructors prototype is Object.prototype
if((!rZ||!M(r$)||r$===Function.prototype)&&(// eslint-disable-next-line no-shadow -- safe
r$=function(){throw rJ("Incorrect invocation")},rZ))for(f in r1)S[f]&&rM(S[f],r$);if((!rZ||!rq||rq===rH)&&(rq=r$.prototype,rZ))for(f in r1)S[f]&&rM(S[f].prototype,rq);if(rZ&&rP(rW)!==rq&&rM(rW,rq),T&&!U(rq,rK))for(f in r0=!0,L(rq,rK,{configurable:!0,get:function(){return ti(this)?this[rQ]:void 0}}),r1)S[f]&&tc(S[f],rQ,f);rg={NATIVE_ARRAY_BUFFER_VIEWS:rZ,TYPED_ARRAY_TAG:r0&&rQ,aTypedArray:function(t){if(r4(t))return t;throw rJ("Target is not a typed array")},aTypedArrayConstructor:function(t){if(M(t)&&(!rM||tE(r$,t)))return t;throw rJ(tM(t)+" is not a typed array constructor")},exportTypedArrayMethod:function(t,r,e,n){if(T){if(e)for(var o in r1){var i=S[o];if(i&&U(i.prototype,t))try{delete i.prototype[t]}catch(e){// old WebKit bug - some methods are non-configurable
try{i.prototype[t]=r}catch(t){}}}(!rq[t]||e)&&rx(rq,t,e?r:rZ&&rY[t]||r,n)}},exportTypedArrayStaticMethod:function(t,r,e){var n,o;if(T){if(rM){if(e){for(n in r1)if((o=S[n])&&U(o,t))try{delete o[t]}catch(t){}}if(r$[t]&&!e)return;try{return rx(r$,t,e?r:rZ&&r$[t]||r)}catch(t){}}for(n in r1)(o=S[n])&&(!o[t]||e)&&rx(o,t,r)}},getTypedArrayConstructor:r3,isView:function(t){if(!ti(t))return!1;var r=rm(t);return"DataView"===r||U(r1,r)||U(r2,r)},isTypedArray:r4,TypedArray:r$,TypedArrayPrototype:rq};var r8={},r7={},r6={},r9={},r5=Math.ceil,et=Math.floor;// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
r9=Math.trunc||function(t){var r=+t;return(r>0?et:r5)(r)},// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
r6=function(t){var r=+t;// eslint-disable-next-line no-self-compare -- NaN check
return r!=r||0===r?0:r9(r)};var er=Math.min;// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
r7=function(t){return t>0?er(r6(t),9007199254740991):0;// 2 ** 53 - 1 == 9007199254740991
},// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
r8=function(t){return r7(t.length)};var ee={},en={},eo=RangeError;en=function(t){var r=r6(t);if(r<0)throw eo("The argument can't be less than 0");return r};var ei=RangeError;ee=function(t,r){var e=en(t);if(e%r)throw ei("Wrong offset");return e};var ea=S.RangeError,ec=S.Int8Array,eu=ec&&ec.prototype,ef=eu&&eu.set,el=rg.aTypedArray,es=rg.exportTypedArrayMethod,ep=!A(function(){// eslint-disable-next-line es/no-typed-arrays -- required for testing
var t=new Uint8ClampedArray(2);return tm(ef,t,{length:1,0:3},1),3!==t[1]}),ey=ep&&rg.NATIVE_ARRAY_BUFFER_VIEWS&&A(function(){var t=new ec(2);return t.set(1),t.set("2",1),0!==t[0]||2!==t[1]});// `%TypedArray%.prototype.set` method
// https://tc39.es/ecma262/#sec-%typedarray%.prototype.set
es("set",function(t/* , offset */){el(this);var r=ee(arguments.length>1?arguments[1]:void 0,1),e=B(t);if(ep)return tm(ef,this,e,r);var n=this.length,o=r8(e),i=0;if(o+r>n)throw ea("Wrong length");for(;i<o;)this[r+i]=e[i++]},!ep||ey);var eh={},ev={}.propertyIsEnumerable,eg=Object.getOwnPropertyDescriptor;y=eg&&!ev.call({1:2},1)?function(t){var r=eg(this,t);return!!r&&r.enumerable}:ev;var ed={},em={},eb=Object,ew=P("".split);// fallback for non-array-like ES3 and non-enumerable old V8 strings
em=A(function(){// throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
// eslint-disable-next-line no-prototype-builtins -- safe
return!eb("z").propertyIsEnumerable(0)})?function(t){return"String"===rE(t)?ew(t,""):eb(t)}:eb,ed=function(t){return em(G(t))};// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var eO=Object.getOwnPropertyDescriptor;p=T?eO:function(t,r){if(t=ed(t),r=tg(r),tu)try{return eO(t,r)}catch(t){}if(U(t,r))return t4(!tm(y,t,r),t[r])};var eE={},ej={},eS={},e_={},eT=Math.max,eA=Math.min;// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
e_=function(t,r){var e=r6(t);return e<0?eT(e+r,0):eA(e,r)};// `Array.prototype.{ indexOf, includes }` methods implementation
var eL=function(t){return function(r,e,n){var o,i=ed(r),a=r8(i),c=e_(n,a);// Array#includes uses SameValueZero equality algorithm
// eslint-disable-next-line no-self-compare -- NaN check
if(t&&e!=e){for(;a>c;)// eslint-disable-next-line no-self-compare -- NaN check
if((o=i[c++])!=o)return!0;// Array#indexOf ignores holes, Array#includes - not
}else for(;a>c;c++)if((t||c in i)&&i[c]===e)return t||c||0;return!t&&-1}},ex={// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
includes:eL(!0),// `Array.prototype.indexOf` method
// https://tc39.es/ecma262/#sec-array.prototype.indexof
indexOf:eL(!1)}.indexOf,eP=P([].push);eS=function(t,r){var e,n=ed(t),o=0,i=[];for(e in n)!U(t6,e)&&U(n,e)&&eP(i,e);// Don't enum bug & hidden keys
for(;r.length>o;)U(n,e=r[o++])&&(~ex(i,e)||eP(i,e));return i};var eI=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");h=Object.getOwnPropertyNames||function(t){return eS(t,eI)},v=Object.getOwnPropertySymbols;var ek=P([].concat);// all object keys, includes non-enumerable and symbols
ej=tO("Reflect","ownKeys")||function(t){var r=h(ty(t));return v?ek(r,v(t)):r},eE=function(t,r,e){for(var o=ej(r),i=0;i<o.length;i++){var a=o[i];U(t,a)||e&&U(e,a)||n(t,a,p(r,a))}};var eR={},eF=/#|\.prototype\./,eM=function(t,r){var e=eD[eC(t)];return e===eU||e!==eN&&(M(r)?A(r):!!r)},eC=eM.normalize=function(t){return String(t).replace(eF,".").toLowerCase()},eD=eM.data={},eN=eM.NATIVE="N",eU=eM.POLYFILL="P";eR=eM,/*
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
*/eh=function(t,r){var e,n,o,i,a,c=t.target,u=t.global,f=t.stat;if(e=u?S:f?S[c]||X(c,{}):(S[c]||{}).prototype)for(n in r){// contained in target
if(i=r[n],o=t.dontCallGetSet?(a=p(e,n))&&a.value:e[n],!eR(u?n:c+(f?".":"#")+n,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;eE(i,o)}(t.sham||o&&o.sham)&&tc(i,"sham",!0),rx(e,n,i,t)}};var eB={},eG={},ez=Function.prototype,eY=ez.apply,eV=ez.call;// eslint-disable-next-line es/no-reflect -- safe
eG="object"==typeof Reflect&&Reflect.apply||(I?eV.bind(eY):function(){return eV.apply(eY,arguments)});var eW={},e$={},eq=(e$=function(t){// Nashorn bug:
//   https://github.com/zloirock/core-js/issues/1128
//   https://github.com/zloirock/core-js/issues/1130
if("Function"===rE(t))return P(t)})(e$.bind);// optional / simple context binding
eW=function(t,r){return tF(t),void 0===r?t:I?eq(t,r):function(){return t.apply(r,arguments)}};var eH={};eH=tO("document","documentElement");var eJ={};eJ=P([].slice);var eK={},eQ=TypeError;eK=function(t,r){if(t<r)throw eQ("Not enough arguments");return t};var eX={};// eslint-disable-next-line redos/no-vulnerable -- safe
eX=/(?:ipad|iphone|ipod).*applewebkit/i.test(tT);var eZ={};eZ="process"===rE(S.process);var e0=S.setImmediate,e1=S.clearImmediate,e2=S.process,e3=S.Dispatch,e4=S.Function,e8=S.MessageChannel,e7=S.String,e6=0,e9={},e5="onreadystatechange";A(function(){// Deno throws a ReferenceError on `location` access without `--location` flag
g=S.location});var nt=function(t){if(U(e9,t)){var r=e9[t];delete e9[t],r()}},nr=function(t){return function(){nt(t)}},ne=function(t){nt(t.data)},nn=function(t){// old engines have not location.origin
S.postMessage(e7(t),g.protocol+"//"+g.host)};e0&&e1||(e0=function(t){eK(arguments.length,1);var r=M(t)?t:e4(t),e=eJ(arguments,1);return e9[++e6]=function(){eG(r,void 0,e)},d(e6),e6},e1=function(t){delete e9[t]},eZ?d=function(t){e2.nextTick(nr(t))}:e3&&e3.now?d=function(t){e3.now(nr(t))}:e8&&!eX?(b=(m=new e8).port2,m.port1.onmessage=ne,d=eW(b.postMessage,b)):S.addEventListener&&M(S.postMessage)&&!S.importScripts&&g&&"file:"!==g.protocol&&!A(nn)?(d=nn,S.addEventListener("message",ne,!1)):d=e5 in tf("script")?function(t){eH.appendChild(tf("script"))[e5]=function(){eH.removeChild(this),nt(t)}}:function(t){setTimeout(nr(t),0)});var no=(eB={set:e0,clear:e1}).clear;// `clearImmediate` method
// http://w3c.github.io/setImmediate/#si-clearImmediate
eh({global:!0,bind:!0,enumerable:!0,forced:S.clearImmediate!==no},{clearImmediate:no});var ni=eB.set,na={},nc={};/* global Bun -- Deno case */nc="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var nu=S.Function,nf=/MSIE .\./.test(tT)||nc&&((e=S.Bun.version.split(".")).length<3||"0"===e[0]&&(e[1]<3||"3"===e[1]&&"0"===e[2]));// IE9- / Bun 0.3.0- setTimeout / setInterval / setImmediate additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
// https://github.com/oven-sh/bun/issues/1633
na=function(t,r){var e=r?2:1;return nf?function(n,o/* , ...arguments */){var i=eK(arguments.length,1)>e,a=M(n)?n:nu(n),c=i?eJ(arguments,e):[],u=i?function(){eG(a,this,c)}:a;return r?t(u,o):t(u)}:t};// https://github.com/oven-sh/bun/issues/1633
var nl=S.setImmediate?na(ni,!1):ni;// `setImmediate` method
// http://w3c.github.io/setImmediate/#si-setImmediate
eh({global:!0,bind:!0,enumerable:!0,forced:S.setImmediate!==nl},{setImmediate:nl});var ns={};t(ns,"state",function(){return ny}),t(ns,"loadRecipe",function(){return nh});/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var np=function(t){var r,e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function f(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{// IE 8 has a broken Object.defineProperty that only works on DOM objects.
f({},"")}catch(t){f=function(t,r,e){return t[r]=e}}function l(t,e,n,i){var a,c,u=Object.create((e&&e.prototype instanceof g?e:g).prototype);return(// The ._invoke method unifies the implementations of the .next,
// .throw, and .return methods.
o(u,"_invoke",{value:(a=new A(i||[]),c=p,function(e,o){if(c===y)throw Error("Generator is already running");if(c===h){if("throw"===e)throw o;// Be forgiving, per 25.3.3.3.3 of the spec:
// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
return{value:r,done:!0}}for(a.method=e,a.arg=o;;){var i=a.delegate;if(i){var u=// Call delegate.iterator[context.method](context.arg) and handle the
// result, either by returning a { value, done } result from the
// delegate iterator, or by modifying context.method and context.arg,
// setting context.delegate to null, and returning the ContinueSentinel.
function t(e,n){var o=n.method,i=e.iterator[o];if(i===r)return(// A .throw or .return when the delegate iterator has no .throw
// method, or a missing .next mehtod, always terminate the
// yield* loop.
n.delegate=null,"throw"===o&&e.iterator.return&&(// If the delegate iterator has a return method, give it a
// chance to clean up.
n.method="return",n.arg=r,t(e,n),"throw"===n.method)||"return"!==o&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+o+"' method")),v);var a=s(i,e.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var c=a.arg;return c?c.done?(// Assign the result of the finished delegate to the temporary
// variable specified by delegate.resultName (see delegateYield).
n[e.resultName]=c.value,// Resume execution at the desired location (see delegateYield).
n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=r),// The delegate iterator is finished, so forget it and continue with
// the outer generator.
n.delegate=null,v):c:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,v)}(i,a);if(u){if(u===v)continue;return u}}if("next"===a.method)// function.sent implementation.
a.sent=a._sent=a.arg;else if("throw"===a.method){if(c===p)throw c=h,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);c=y;var f=s(t,n,a);if("normal"===f.type){if(// If an exception is thrown from innerFn, we leave state ===
// GenStateExecuting and loop back for another invocation.
c=a.done?h:"suspendedYield",f.arg===v)continue;return{value:f.arg,done:a.done}}"throw"===f.type&&(c=h,// Dispatch the exception by looping back around to the
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
function s(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var p="suspendedStart",y="executing",h="completed",v={};// Dummy constructor functions that we use as the .constructor and
// .constructor.prototype properties for functions that return Generator
// objects. For full spec compliance, you may wish to configure your
// minifier not to mangle the names of these two functions.
function g(){}function d(){}function m(){}// This is a polyfill for %IteratorPrototype% for environments that
// don't natively support it.
var b={};f(b,a,function(){return this});var w=Object.getPrototypeOf,O=w&&w(w(L([])));O&&O!==e&&n.call(O,a)&&// of the polyfill.
(b=O);var E=m.prototype=g.prototype=Object.create(b);// Helper for defining the .next, .throw, and .return methods of the
// Iterator interface in terms of a single ._invoke method.
function j(t){["next","throw","return"].forEach(function(r){f(t,r,function(t){return this._invoke(r,t)})})}function S(t,r){var e;// Define the unified helper method that is used to implement .next,
// .throw, and .return (see defineIteratorMethods).
o(this,"_invoke",{value:function(o,i){function a(){return new r(function(e,a){!function e(o,i,a,c){var u=s(t[o],t,i);if("throw"===u.type)c(u.arg);else{var f=u.arg,l=f.value;return l&&"object"==typeof l&&n.call(l,"__await")?r.resolve(l.__await).then(function(t){e("next",t,a,c)},function(t){e("throw",t,a,c)}):r.resolve(l).then(function(t){// When a yielded Promise is resolved, its final value becomes
// the .value of the Promise<{value,done}> result for the
// current iteration.
f.value=t,a(f)},function(t){// If a rejected Promise was yielded, throw the rejection back
// into the async generator function so it can be handled there.
return e("throw",t,a,c)})}}(o,i,e,a)})}return e=// all previous Promises have been resolved before calling invoke,
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
e?e.then(a,// invocations of the iterator.
a):a()}})}function _(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function T(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function A(t){// The root entry object (effectively a try statement without a catch
// or a finally block) gives us a place to store values thrown from
// locations where there is no enclosing try statement.
this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function L(t){if(t||""===t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}throw TypeError(typeof t+" is not iterable")}return d.prototype=m,o(E,"constructor",{value:m,configurable:!0}),o(m,"constructor",{value:d,configurable:!0}),d.displayName=f(m,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===d||"GeneratorFunction"===// For the native GeneratorFunction constructor, the best we can
// do is to check its .name property.
(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,f(t,u,"GeneratorFunction")),t.prototype=Object.create(E),t},// Within the body of any async function, `await x` is transformed to
// `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
// `hasOwn.call(value, "__await")` to determine if the yielded value is
// meant to be awaited.
t.awrap=function(t){return{__await:t}},j(S.prototype),f(S.prototype,c,function(){return this}),t.AsyncIterator=S,// Note that simple async functions are implemented on top of
// AsyncIterator objects; they just return a Promise for the value of
// the final result produced by the iterator.
t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new S(l(r,e,n,o),i);return t.isGeneratorFunction(e)?a// If outerFn is a generator, return the full iterator.
:a.next().then(function(t){return t.done?t.value:a.next()})},// Define Generator.prototype.{next,throw,return} in terms of the
// unified ._invoke helper method.
j(E),f(E,u,"Generator"),// A Generator should always return itself as the iterator object when the
// @@iterator function is called on it. Some browsers' implementations of the
// iterator prototype chain incorrectly implement this, causing the Generator
// object to not be returned from this call. This ensures that doesn't happen.
// See https://github.com/facebook/regenerator/issues/274 for more details.
f(E,a,function(){return this}),f(E,"toString",function(){return"[object Generator]"}),t.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);// Rather than returning an object with a next method, we keep
// things simple and return the next function itself.
return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return(// To avoid creating an additional object, we just hang the .value
// and .done properties off the next function object itself. This
// also ensures that the minifier will not anonymize the function.
t.done=!0,t)}},t.values=L,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,// Resetting context._sent for legacy support of Babel's
// function.sent implementation.
this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(T),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(// If the dispatched exception was caught by a catch block,
// then let that catch block handle the exception normally.
e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)// it, so set the completion value of the entire function to
// throw the exception.
return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),f=n.call(a,"finallyLoc");if(u&&f){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else if(f){if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&// location outside the try/catch block.
(i=null);var a=i?i.completion:{};return(a.type=t,a.arg=r,i)?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),T(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;T(e)}return o}}// The context.catch method must only be called with a location
// argument that corresponds to a known catch block.
throw Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:L(t),resultName:e,nextLoc:n},"next"===this.method&&// accidentally pass it on to the delegate.
(this.arg=r),v}},t}({});try{regeneratorRuntime=np}catch(t){// This module should not be running in strict mode, so the above
// assignment should always work unless something is misconfigured. Just
// in case runtime.js accidentally runs in strict mode, in modern engines
// we can explicitly access globalThis. In older engines we can escape
// strict mode using a global Function call. This could conceivably fail
// if a Content Security Policy forbids using Function, but in that case
// the proper solution is to fix the accidental strict mode problem. If
// you've misconfigured your bundler to force strict mode and applied a
// CSP to forbid Function, and you're not willing to fix either of those
// problems, please detail your unique predicament in a GitHub issue.
"object"==typeof globalThis?globalThis.regeneratorRuntime=np:Function("r","regeneratorRuntime = r")(np)}let ny={recipe:{}},nh=async function(t){try{let r=await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${t}`),e=await r.json();if(!r.ok)throw Error(`${message} {${r.status}}`);let{recipe:n}=e.data;ny.recipe={cookingTime:n.cooking_time,id:n.id,imageUrl:n.image_url,ingredients:n.ingredients,publisher:n.publisher,servings:n.servings,sourceUrl:n.source_url,title:n.title}}catch(t){alert(t)}};var nv={};console.log(/*@__PURE__*/r(nv=j("aNJCr").getBundleURL("4ko55")+j("iE7OH").resolve("aJBYK"))),console.log(ns),document.querySelector(".recipe");// https://forkify-api.herokuapp.com/v2
///////////////////////////////////////
let ng=async function(){try{let t=window.location.hash.slice(1);if(!t)return;/*@__PURE__*/r(nv).renderSpinner(),// Getting t he recipe data
await ns.loadRecipe(t),/*@__PURE__*/r(nv).render(ns.state.recipe);// rendering the recipe data
}catch(t){alert(t)}};["load","hashchange"].forEach(t=>{window.addEventListener(t,ng)}),ng()}();//# sourceMappingURL=index.9f81a5ce.js.map

//# sourceMappingURL=index.9f81a5ce.js.map
