// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-positive-zero@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function o(o){var m,d,f,l;if(!s(o))throw new TypeError(n("0e38T",o));return m=new r(o),d=i,l=-1,f=0,function(s){var i,r;if(0===arguments.length)return 0===f?null:d;if(l=(l+1)%o,f<o)f+=1,(e(s)||s>d||s===d&&t(s))&&(d=s);else if(e(s)||s>d)d=s;else if(m[l]===d&&s<d||e(m[l])){for(d=s,r=0;r<o;r++)if(r!==l){if(i=m[r],e(i)){d=i;break}(i>d||i===d&&t(i))&&(d=i)}}else if(m[l]===d&&s===d&&0===s)if(t(s))d=s;else if(t(m[l]))for(d=s,r=0;r<o;r++)if(r!==l&&t(m[r])){d=m[r];break}return m[l]=s,d}}export{o as default};
//# sourceMappingURL=index.mjs.map
