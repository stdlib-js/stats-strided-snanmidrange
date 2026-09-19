"use strict";var s=function(a,e){return function(){try{return e||a((e={exports:{}}).exports,e),e.exports}catch(i){throw (e=0, i)}};};var o=s(function(A,c){
var j=require('@stdlib/math-base-assert-is-nanf/dist'),R=require('@stdlib/math-base-assert-is-negative-zerof/dist'),Z=require('@stdlib/math-base-assert-is-positive-zerof/dist'),m=require('@stdlib/number-float64-base-to-float32/dist');function _(a,e,i,q){var u,t,v,r,n;if(a<=0)return NaN;if(a===1||i===0)return e[q];for(v=q,n=0;n<a&&(r=e[v],r!==r);n++)v+=i;if(n===a)return NaN;for(t=r,u=t,n+=1,n;n<a;n++)v+=i,r=e[v],!j(r)&&(r<t||r===t&&R(r)?t=r:(r>u||r===u&&Z(r))&&(u=r));return m(m(u+t)/2)}c.exports=_
});var g=s(function(B,d){
var b=require('@stdlib/strided-base-stride2offset/dist'),k=o();function E(a,e,i){return k(a,e,i,b(a,i))}d.exports=E
});var y=s(function(C,p){
var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=g(),O=o();F(l,"ndarray",O);p.exports=l
});var P=require("path").join,T=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),w=y(),f,x=T(P(__dirname,"./native.js"));h(x)?f=w:f=x;module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
