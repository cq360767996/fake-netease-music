import{r as t,u as F,g as x,j as r}from"./react-ac4fd5c4.js";import{L as S}from"./index-3760a896.js";import{ay as y,D as C,c as j}from"./index-f4592ea4.js";import{H as v}from"./index-73233d15.js";import"./vendor-a0dadf07.js";import"./lodash-44bc1aaf.js";import"./react-router-dom-0434928e.js";import"./react-redux-5a199f59.js";const L=()=>{const a=j("collection-singer"),[e,o]=t.exports.useState([]),{push:i}=F();return t.exports.useEffect(()=>{(async()=>{const c=(await y()).data.map(n=>{const{id:u,picUrl:m,name:l,mvSize:p,albumSize:g}=n,d=`\u4E13\u8F91\uFF1A${g}`,f=`MV\uFF1A${p}`;return{id:u,imgUrl:m,col2:l,col3:d,col4:f}});o(c)})()},[]),x("div",{className:a(),children:[r(v,{title:"\u6536\u85CF\u7684\u6B4C\u624B",count:26}),r(S,{data:e,onItemClick:s=>i(C.singer(s))})]})};export{L as default};
