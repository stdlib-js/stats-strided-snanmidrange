"use strict";var s=function(e,a){return function(){return a||e((a={exports:{}}).exports,a),a.exports}};var o=s(function(A,c){
var j=require('@stdlib/math-base-assert-is-nanf/dist'),R=require('@stdlib/math-base-assert-is-negative-zerof/dist'),Z=require('@stdlib/math-base-assert-is-positive-zerof/dist'),m=require('@stdlib/number-float64-base-to-float32/dist');function _(e,a,n,q){var u,t,v,r,i;if(e<=0)return NaN;if(e===1||n===0)return a[q];for(v=q,i=0;i<e&&(r=a[v],r!==r);i++)v+=n;if(i===e)return NaN;for(t=r,u=t,i+=1,i;i<e;i++)v+=n,r=a[v],!j(r)&&(r<t||r===t&&R(r)?t=r:(r>u||r===u&&Z(r))&&(u=r));return m(m(u+t)/2)}c.exports=_
});var g=s(function(B,d){
var b=require('@stdlib/strided-base-stride2offset/dist'),k=o();function E(e,a,n){return k(e,a,n,b(e,n))}d.exports=E
});var y=s(function(C,p){
var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),l=g(),O=o();F(l,"ndarray",O);p.exports=l
});var P=require("path").join,T=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),w=y(),f,x=T(P(__dirname,"./native.js"));h(x)?f=w:f=x;module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
