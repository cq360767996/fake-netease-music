import{u as c,R as m}from"./react-69194784.js";import{L as n}from"./index-f84ba34d.js";import{h as d,n as l}from"./vendor-441fcb21.js";import{a as f}from"./react-redux-9f5c3214.js";import{D as r}from"./index-a8385452.js";import"./lodash-16b1923a.js";import"./react-router-dom-fbac4128.js";const x=({data:u,isAlbum:e})=>{const{push:a}=c(),o=u.map(s=>({id:s.id,imgUrl:s.picUrl,name:s.name,col2:`${s.size}\u9996`,col3:`\u53D1\u884C\u65F6\u95F4\uFF1A ${d(s.publishTime).format("YYYY-MM-DD")}`})),t=f(s=>!!s.user.cookie);function i(s){!s.id||(e?a(r.list(s.id,"album")):t?a(r.list(s.id)):l.error("\u9700\u8981\u767B\u5F55\uFF0C\u624D\u80FD\u67E5\u770B\u4ED6\u4EBA\u6B4C\u5355\u4FE1\u606F>_<"))}return m.createElement(n,{imgType:"extra",data:o,onItemClick:i})};export{x as default};
