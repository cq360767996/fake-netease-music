import{k as m,o as n}from"./vendor-da34c035.js";import{u as l}from"./react-redux-a59d985d.js";import{D as o}from"./index-2448f94e.js";import{L as c}from"./index-95ef70ef.js";import{u as p,j as f}from"./react-db2799b6.js";import"./lodash-536b9069.js";import"./react-router-dom-66f75ae1.js";const B=({data:r,isAlbum:i})=>{const{push:s}=p(),a=r.map(u=>({id:u.id,imgUrl:u.picUrl,name:u.name,col2:`${u.size}\u9996`,col3:`\u53D1\u884C\u65F6\u95F4\uFF1A ${m(u.publishTime).format("YYYY-MM-DD")}`})),t=l(u=>!!u.user.cookie);function e(u){!u.id||(i?s(o.list(u.id,"album")):t?s(o.list(u.id)):n.error("\u9700\u8981\u767B\u5F55\uFF0C\u624D\u80FD\u67E5\u770B\u4ED6\u4EBA\u6B4C\u5355\u4FE1\u606F>_<"))}return f(c,{imgType:"extra",data:a,onItemClick:e})};export{B as default};