// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).incrmmax=e()}(this,(function(){"use strict";function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,i=Object.prototype,a=i.toString,o=i.__defineGetter__,u=i.__defineSetter__,c=i.__lookupGetter__,f=i.__lookupSetter__;var s=function(r,e,t){var n,s,l,p;if("object"!=typeof r||null===r||"[object Array]"===a.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===a.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((s="value"in t)&&(c.call(r,e)||f.call(r,e)?(n=r.__proto__,r.__proto__=i,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),l="get"in t,p="set"in t,s&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&o&&o.call(r,e,t.get),p&&u&&u.call(r,e,t.set),r},l=n,p=s,v=t()?l:p;var g=function(r,e,t){v(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},d=g;var m=function(r){return"number"==typeof r};var h=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var b=function(){return h&&"symbol"==typeof Symbol.toStringTag},y=Object.prototype.toString,w=y;var E=function(r){return w.call(r)},j=Object.prototype.hasOwnProperty;var P=function(r,e){return null!=r&&j.call(r,e)},_="function"==typeof Symbol?Symbol.toStringTag:"",O=P,T=_,x=y;var V=E,S=function(r){var e,t,n;if(null==r)return x.call(r);t=r[T],e=O(r,T);try{r[T]=void 0}catch(e){return x.call(r)}return n=x.call(r),e?r[T]=t:delete r[T],n},k=b()?S:V,A=Number,F=A.prototype.toString;var I=k,R=A,$=function(r){try{return F.call(r),!0}catch(r){return!1}},M=b();var N=function(r){return"object"==typeof r&&(r instanceof R||(M?$(r):"[object Number]"===I(r)))},C=m,B=N;var G=d,L=function(r){return C(r)||B(r)},Z=N;G(L,"isPrimitive",m),G(L,"isObject",Z);var W=L,X=Number.POSITIVE_INFINITY,z=A.NEGATIVE_INFINITY,U=Math.floor;var Y=function(r){return U(r)===r},D=X,q=z,H=Y;var J=function(r){return r<D&&r>q&&H(r)},K=W.isPrimitive,Q=J;var rr=function(r){return K(r)&&Q(r)},er=W.isObject,tr=J;var nr=function(r){return er(r)&&tr(r.valueOf())},ir=rr,ar=nr;var or=d,ur=function(r){return ir(r)||ar(r)},cr=nr;or(ur,"isPrimitive",rr),or(ur,"isObject",cr);var fr=ur,sr=fr.isPrimitive;var lr=function(r){return sr(r)&&r>0},pr=fr.isObject;var vr=function(r){return pr(r)&&r.valueOf()>0},gr=lr,dr=vr;var mr=d,hr=function(r){return gr(r)||dr(r)},br=vr;mr(hr,"isPrimitive",lr),mr(hr,"isObject",br);var yr=hr;var wr=function(r){return r!=r},Er=X;var jr=function(r){return 0===r&&1/r===Er},Pr=k,_r="function"==typeof Float64Array;var Or="function"==typeof Float64Array?Float64Array:null,Tr=function(r){return _r&&r instanceof Float64Array||"[object Float64Array]"===Pr(r)},xr=Or;var Vr="function"==typeof Float64Array?Float64Array:void 0,Sr=function(){throw new Error("not implemented")},kr=function(){var r,e;if("function"!=typeof xr)return!1;try{e=new xr([1,3.14,-3.14,NaN]),r=Tr(e)&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Vr:Sr;var Ar=function(r){return"string"==typeof r},Fr=String.prototype.valueOf;var Ir=k,Rr=function(r){try{return Fr.call(r),!0}catch(r){return!1}},$r=b();var Mr=function(r){return"object"==typeof r&&(r instanceof String||($r?Rr(r):"[object String]"===Ir(r)))},Nr=Ar,Cr=Mr;var Br=d,Gr=function(r){return Nr(r)||Cr(r)},Lr=Mr;Br(Gr,"isPrimitive",Ar),Br(Gr,"isObject",Lr);var Zr=Gr,Wr=Y;var Xr=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Wr(r.length)&&r.length>=0&&r.length<=9007199254740991},zr=W.isPrimitive,Ur=wr;var Yr=function(r){return zr(r)&&Ur(r)},Dr=W.isObject,qr=wr;var Hr=function(r){return Dr(r)&&qr(r.valueOf())},Jr=Yr,Kr=Hr;var Qr=d,re=function(r){return Jr(r)||Kr(r)},ee=Hr;Qr(re,"isPrimitive",Yr),Qr(re,"isObject",ee);var te=Xr,ne=fr.isPrimitive,ie=Zr.isPrimitive,ae=re.isPrimitive;var oe=function(r,e,t){var n,i,a;if(!te(r)&&!ie(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!ne(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(ie(r)){if(!ie(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,ae(e)){for(a=i;a<n;a++)if(ae(r[a]))return!0;return!1}for(a=i;a<n;a++)if(r[a]===e)return!0;return!1},ue=oe,ce=Zr.isPrimitive;var fe=function(r){if(!ce(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},se=Zr.isPrimitive;var le=function(r){if(!se(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},pe=fe,ve=le,ge=Zr.isPrimitive;var de=function(r){return ge(r)&&r===ve(r)&&r!==pe(r)},me=X,he=z;var be=function(r){return r==r&&r>he&&r<me},ye=fr.isPrimitive;var we=function(r){return ye(r)&&r>=0},Ee=fr.isObject;var je=function(r){return Ee(r)&&r.valueOf()>=0},Pe=we,_e=je;var Oe=d,Te=function(r){return Pe(r)||_e(r)},xe=je;Oe(Te,"isPrimitive",we),Oe(Te,"isObject",xe);var Ve=Te.isPrimitive,Se=Zr.isPrimitive;var ke=function(r,e){var t,n;if(!Se(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!Ve(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},Ae=fr.isPrimitive,Fe=Zr.isPrimitive;var Ie=function(r,e,t){var n,i;if(!Fe(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!Fe(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!Ae(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0},Re=ke,$e=Ie;var Me=function(r,e,t){var n=!1,i=e-r.length;return i<0||($e(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+Re("0",i):Re("0",i)+r,n&&(r="-"+r)),r},Ne=de,Ce=le,Be=fe,Ge=be,Le=W.isPrimitive,Ze=Me;var We=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!Ge(n)){if(!Le(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=Ze(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=Ze(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=Ne(r.specifier)?Ce(t):Be(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},Xe=Zr.isPrimitive,ze=/[-\/\\^$*+?.()|[\]{}]/g;var Ue=function(r){var e,t;if(!Xe(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(ze,"\\$&"):(e=(e=r.substring(1,t)).replace(ze,"\\$&"),r=r[0]+e+r.substring(t))},Ye=/./;var De=function(r){return"boolean"==typeof r},qe=Boolean.prototype.toString;var He=k,Je=function(r){try{return qe.call(r),!0}catch(r){return!1}},Ke=b();var Qe=function(r){return"object"==typeof r&&(r instanceof Boolean||(Ke?Je(r):"[object Boolean]"===He(r)))},rt=De,et=Qe;var tt=d,nt=function(r){return rt(r)||et(r)},it=Qe;tt(nt,"isPrimitive",De),tt(nt,"isObject",it);var at=nt;var ot=function(){return new Function("return this;")()},ut="object"==typeof self?self:null,ct="object"==typeof window?window:null,ft="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},st="object"==typeof ft?ft:null;module.exports=st;var lt=at.isPrimitive,pt=ot,vt=ut,gt=ct,dt=r(Object.freeze({__proto__:null}));var mt=function(r){if(arguments.length){if(!lt(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return pt()}if(vt)return vt;if(gt)return gt;if(dt)return dt;throw new Error("unexpected error. Unable to resolve global object.")},ht=mt(),bt=ht.document&&ht.document.childNodes,yt=Int8Array,wt=Ye,Et=bt,jt=yt;var Pt=function(){return"function"==typeof wt||"object"==typeof jt||"function"==typeof Et};var _t=function(){return/^\s*function\s*([^(]*)/i},Ot=_t;d(Ot,"REGEXP",_t());var Tt=Ot,xt=k;var Vt=Array.isArray?Array.isArray:function(r){return"[object Array]"===xt(r)};var St=function(r){return null!==r&&"object"==typeof r};d(St,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!Vt(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(St));var kt=St;var At=k,Ft=Tt.REGEXP,It=function(r){return kt(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var Rt=function(r){var e,t,n;if(("Object"===(t=At(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Ft.exec(n.toString()))return e[1]}return It(r)?"Buffer":t},$t=Rt;var Mt=Rt;var Nt=function(r){var e;return null===r?"null":"object"===(e=typeof r)?$t(r).toLowerCase():e},Ct=function(r){return Mt(r).toLowerCase()},Bt=Pt()?Ct:Nt;var Gt=function(r){return"function"===Bt(r)},Lt=RegExp.prototype.exec;var Zt=k,Wt=function(r){try{return Lt.call(r),!0}catch(r){return!1}},Xt=b();var zt=Ue,Ut=Gt,Yt=Zr.isPrimitive,Dt=function(r){return"object"==typeof r&&(r instanceof RegExp||(Xt?Wt(r):"[object RegExp]"===Zt(r)))};var qt=de,Ht=le,Jt=fe,Kt=function(r,e,t){if(!Yt(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(Yt(e))e=zt(e),e=new RegExp(e,"g");else if(!Dt(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!Yt(t)&&!Ut(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},Qt=be,rn=W.isPrimitive,en=function(r){return Math.abs(r)},tn=/e\+(\d)$/,nn=/e-(\d)$/,an=/^(\d+)$/,on=/^(\d+)e/,un=/\.0$/,cn=/\.0*e/,fn=/(\..*[^0])0*e/;var sn=function(r){var e,t,n=parseFloat(r.arg);if(!Qt(n)){if(!rn(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":en(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Kt(t,fn,"$1e"),t=Kt(t,cn,"e"),t=Kt(t,un,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Kt(t,tn,"e+0$1"),t=Kt(t,nn,"e-0$1"),r.alternate&&(t=Kt(t,an,"$1."),t=Kt(t,on,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=qt(r.specifier)?Ht(t):Jt(t)},ln=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var pn=ke;var vn=Zr.isPrimitive,gn=ue,dn=wr,mn=We,hn=sn,bn=function(r){var e,t,n,i,a;for(e=0,n=[],a=ln.exec(r);a;)(t=r.slice(e,ln.lastIndex-a[0].length)).length&&n.push(t),(i=o(a,n.length))&&n.push(i),e=ln.lastIndex,a=ln.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function o(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},yn=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+pn(" ",n):pn(" ",n)+r},wn=Me,En=String.fromCharCode;var jn=function(r){var e,t,n,i,a,o,u,c,f;if(!vn(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=bn(r),o="",u=1,c=0;c<e.length;c++)if(n=e[c],vn(n))o+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!gn(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,dn(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,dn(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=mn(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!dn(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=dn(a)?String(n.arg):En(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=hn(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=wn(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=yn(n.arg,n.width,n.padRight)),o+=n.arg||"",u+=1}return o},Pn=yr.isPrimitive,_n=wr,On=jr,Tn=z,xn=kr,Vn=jn;var Sn=function(r){var e,t,n,i;if(!Pn(r))throw new TypeError(Vn("invalid argument. Must provide a positive integer. Value: `%s`.",r));return e=new xn(r),t=Tn,i=-1,n=0,function(a){var o,u;if(0===arguments.length)return 0===n?null:t;if(i=(i+1)%r,n<r)n+=1,(_n(a)||a>t||a===t&&On(a))&&(t=a);else if(_n(a)||a>t)t=a;else if(e[i]===t&&a<t||_n(e[i])){for(t=a,u=0;u<r;u++)if(u!==i){if(o=e[u],_n(o)){t=o;break}(o>t||o===t&&On(o))&&(t=o)}}else if(e[i]===t&&a===t&&0===a)if(On(a))t=a;else if(On(e[i]))for(t=a,u=0;u<r;u++)if(u!==i&&On(e[u])){t=e[u];break}return e[i]=a,t}};return Sn}));
//# sourceMappingURL=bundle.js.map
