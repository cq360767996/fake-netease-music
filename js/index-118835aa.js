import{r as o,u as g,g as c,F as h,j as s}from"./react-34ba0285.js";import{d as x,r as P,D as j,c as D,Z as N}from"./index-01b98e4e.js";import{I as v}from"./index-182d61e7.js";import"./lodash-536b9069.js";import"./vendor-ddfd0f27.js";import"./react-redux-b094955d.js";import"./react-router-dom-46eb6367.js";const k=()=>{const r=D("pay-excellent"),[p,m]=o.exports.useReducer(y,[]),n=o.exports.useRef(0),l=10,e=o.exports.useRef(null),{push:u}=g();async function f(){var t;const a=await N(n.current,l),i=n.current===0?"reset":"add";m({type:i,payload:a.data.list}),(t=e.current)==null||t.call(e,a.data.hasMore),n.current+=l}function y(a,i){const{type:t,payload:d}=i;return t==="reset"?d:[...a,...d]}return c(h,{children:[s("div",{className:r(),children:p.map(a=>c("div",{className:r("item"),children:[s(x,{className:r("img"),src:P(a.picUrl,150),onClick:()=>u(j.radioList(a.id,"pay"))}),c("div",{className:r("right"),children:[s("h3",{children:a.name}),s("p",{children:a.rcmdText}),s("small",{children:a.lastProgramName}),c("div",{children:["\xA5 ",a.originalPrice/100]})]})]},a.id))}),s(v,{ref:e,cb:f})]})};export{k as default};
