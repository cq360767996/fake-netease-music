import{r as t,u as o,j as r,g as l}from"./react-ac4fd5c4.js";import{D as n,b as p,c as d,aC as j}from"./index-f4592ea4.js";import"./vendor-a0dadf07.js";import"./lodash-44bc1aaf.js";import"./react-router-dom-0434928e.js";import"./react-redux-5a199f59.js";const g="_similar_i8ijj_1",u="_similar__item_i8ijj_6",f="_similar__img_i8ijj_9",x="_similar__description_i8ijj_14";var S={similar:g,similar__item:u,similar__img:f,similar__description:x};const D=({id:a})=>{const s=d("similar",S),[m,e]=t.exports.useState([]),{push:c}=o();async function _(){const i=await j(a);e(i.artists)}return t.exports.useEffect(()=>{_()},[a]),r("div",{className:s(),children:m.map(i=>l("div",{className:s("item"),onClick:()=>c(n.singer(i.id)),children:[r(p,{src:i.picUrl,className:s("img")}),r("div",{className:s("description"),children:i.name})]},i.id))})};export{D as default};
