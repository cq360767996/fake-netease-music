import{r as s,u as b,R as t}from"./react-69194784.js";import{H as y}from"./index-17cdcb9f.js";import{L as C}from"./index-473f0355.js";import{ay as E,D as g,c as h}from"./index-a8385452.js";import"./vendor-441fcb21.js";import"./lodash-16b1923a.js";import"./react-router-dom-fbac4128.js";import"./react-redux-9f5c3214.js";const $=()=>{const a=h("collection-video"),[r,o]=s.exports.useState([]),[c,i]=s.exports.useState(0),{push:n}=b();return s.exports.useEffect(()=>{(async()=>{const e=await E();i(e.count);const m=e.data.map(u=>{const{vid:d,coverUrl:l,title:p,creator:f}=u,j=f.reduce((v,x)=>`${v}/${x.userName}`,"").slice(1);return{id:d,imgUrl:l,description:p,author:j}});o(m)})()},[]),t.createElement("div",{className:a()},t.createElement(y,{title:"\u6536\u85CF\u7684\u89C6\u9891",count:c}),t.createElement("div",{className:a("list")},t.createElement(C,{data:r,onItemClick:e=>n(g.playVideo(e))})))};export{$ as default};
