import{r as s,u as j,R as e}from"./react-f2ce6df7.js";import{L as x}from"./index-4708f9ce.js";import{ax as F,D as E,c as S}from"./index-42c9aaa4.js";import{H as b}from"./index-3fe5d91e.js";import"./vendor-989d90fd.js";import"./lodash-753d2698.js";import"./react-router-dom-afba9a75.js";import"./react-redux-df697b15.js";const B=()=>{const a=S("collection-singer"),[r,o]=s.exports.useState([]),{push:c}=j();return s.exports.useEffect(()=>{(async()=>{const i=(await F()).data.map(n=>{const{id:m,picUrl:u,name:l,mvSize:d,albumSize:f}=n,p=`\u4E13\u8F91\uFF1A${f}`,g=`MV\uFF1A${d}`;return{id:m,imgUrl:u,col2:l,col3:p,col4:g}});o(i)})()},[]),e.createElement("div",{className:a()},e.createElement(b,{title:"\u6536\u85CF\u7684\u6B4C\u624B",count:26}),e.createElement(x,{data:r,onItemClick:t=>c(E.singer(t))}))};export{B as default};