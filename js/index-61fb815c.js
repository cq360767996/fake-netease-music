import{j as a,F as g,h as l,r as f}from"./react-1b56b61c.js";import{a as _,u as d}from"./react-redux-6f2a0ace.js";import{t as m,r as p,I as h,c as v,s as y,a as C,B as k,L as N,C as w,g as b,W as F,n as M}from"./index-c941e042.js";import{k as j,H as O,X as U,Y as G,Z as H}from"./vendor-e7a31927.js";import"./lodash-87ac67d6.js";import"./react-router-dom-1f34616f.js";const I="_cover_tuak0_1",L="_cover__img_tuak0_20",x="_cover__play_tuak0_25";var u={cover:I,"cover__pre-img":"_cover__pre-img_tuak0_14",cover__img:L,cover__play:x,"--pause":"_--pause_tuak0_33"};const z=({current:s,next:r})=>{var t;const e=v("cover",u),c=_(o=>o.controller.pause),n=d(),i=()=>{n(y(!c))};return a(g,{children:l("div",{className:e(),children:[((t=r==null?void 0:r.album)==null?void 0:t.picUrl)&&a("img",{className:e("pre-img"),src:m(p(r.album.picUrl,300)),alt:"pre-cover"}),(s==null?void 0:s.album.picUrl)&&l("div",{className:e("img"),children:[a("img",{src:m(p(s.album.picUrl,300)),alt:"cover"}),a("div",{className:j(e("play"),{[u["--pause"]]:!c}),onClick:i,children:a(h,{type:c?"play":"pause",size:"large"})})]})]})})},T=()=>{const s=v("fm"),r=d(),[e,c]=_(i=>{const{fm:t,current:o}=i.currentTrack;return t[o]?[t[o],t[o+1]]:[]}),n=[{icon:O},{icon:U},{icon:G,event:()=>{r(M())}},{icon:H}];return f.exports.useEffect(()=>{e||r(C(!0))},[]),l("div",{className:"fm",children:[l("section",{className:s("player"),children:[l("div",{className:s("cover-wrapper"),children:[a(z,{current:e,next:c}),a(k,{data:n})]}),a(N,{music:e})]}),a(w,{id:e==null?void 0:e.id,api:b,functionChildren:i=>a(F,{count:i})})]})};export{T as default};
