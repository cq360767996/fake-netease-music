import{L as m}from"./index-f90eaf8b.js";import{h as n,n as l}from"./vendor-a0dadf07.js";import{a as c}from"./react-redux-5a199f59.js";import{D as o}from"./index-f4592ea4.js";import{u as p,j as f}from"./react-ac4fd5c4.js";import"./lodash-44bc1aaf.js";import"./react-router-dom-0434928e.js";const B=({data:r,isAlbum:a})=>{const{push:s}=p(),i=r.map(u=>({id:u.id,imgUrl:u.picUrl,name:u.name,col2:`${u.size}\u9996`,col3:`\u53D1\u884C\u65F6\u95F4\uFF1A ${n(u.publishTime).format("YYYY-MM-DD")}`})),t=c(u=>!!u.user.cookie);function e(u){!u.id||(a?s(o.list(u.id,"album")):t?s(o.list(u.id)):l.error("\u9700\u8981\u767B\u5F55\uFF0C\u624D\u80FD\u67E5\u770B\u4ED6\u4EBA\u6B4C\u5355\u4FE1\u606F>_<"))}return f(m,{imgType:"extra",data:i,onItemClick:e})};export{B as default};
