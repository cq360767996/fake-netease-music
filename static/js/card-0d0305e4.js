import{u as n,R as a}from"./react-f2ce6df7.js";import{s as u}from"./index-21e9be10.js";import{b as d,r as p,J as f,c as E,D as c}from"./index-42c9aaa4.js";import{h as g,n as h}from"./vendor-989d90fd.js";import{u as C,a as D}from"./react-redux-df697b15.js";import"./lodash-753d2698.js";import"./react-router-dom-afba9a75.js";const x=({data:i,isAlbum:r})=>{const s=E("card",u),o=C(),{push:t}=n(),m=D(e=>!!e.user.cookie);function l(e){!e||(r?t(c.list(e,"album")):m?t(c.list(e)):h.error("\u9700\u8981\u767B\u5F55\uFF0C\u624D\u80FD\u67E5\u770B\u4ED6\u4EBA\u6B4C\u5355\u4FE1\u606F>_<"))}return a.createElement("div",{className:s()},i.map(e=>a.createElement("div",{key:e.id,className:s("item")},a.createElement("div",{className:s("img-wrapper")},a.createElement(d,{src:p(e.picUrl,150),className:s("img"),icon:{size:"big",hoverDisplay:!0},onClick:()=>l(e.id),onIconClick:()=>o(f({id:e.id,isAlbum:r}))})),a.createElement("div",{className:s("description")},a.createElement("div",{className:s("title")},e.name),a.createElement("div",{className:s("subtitle")},g(e.publishTime).format("YYYY-MM-DD"))))))};export{x as default};