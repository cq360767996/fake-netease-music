import{u as x,h as o,F as I,j as r,r as a,q}from"./react-1b56b61c.js";import{c as _,D as y,b as R,d as T,r as j,K as B,U as D,V as H}from"./index-c941e042.js";import{P as z}from"./index-e8f2774d.js";import{au as F,k as w,av as S}from"./vendor-e7a31927.js";import{u as U}from"./react-redux-6f2a0ace.js";import{I as O}from"./index-3f56dd29.js";import"./lodash-87ac67d6.js";import"./react-router-dom-1f34616f.js";function A(t,i){const s=_("excellent"),{push:c}=x(),h=o(I,{children:[r(F,{}),"\u7B5B\u9009"]});function d(l){l!==i&&c(y.excellentList(l))}function n(){return o("div",{className:s("popover"),children:[r("header",{className:s("popover-header"),children:r("span",{className:w({"--active":i==="\u5168\u90E8"}),onClick:()=>d("\u5168\u90E8"),children:"\u5168\u90E8\u6B4C\u5355"})}),r("section",{className:s("popover-card"),children:t.map(l=>r("div",{children:r("span",{className:w({"--active":l.name===i}),onClick:()=>d(l.name),children:l.name})},l.id))})]})}return{buttonContext:h,renderPopover:n}}const Y=()=>{const t=_("excellent"),[i,s]=a.exports.useState([]),c=q().id,[h,d]=a.exports.useReducer(E,[]),n=a.exports.useRef(null),{push:l}=x(),b=U(),v=a.exports.useRef(),k=10,{buttonContext:C,renderPopover:N}=A(i,c),g=a.exports.useRef(!0);async function P(){const e=await D();s(e.tags)}async function m(){var p;const e=await H(c,k,v.current),u=v.current===void 0?"reset":"add";d({type:u,payload:e.playlists}),v.current=e.lasttime,e.lasttime||(p=n.current)==null||p.call(n,!1)}function E(e,u){const{type:p,payload:f}=u;return p==="add"?[...e,...f]:f}return a.exports.useEffect(()=>{P()},[]),a.exports.useEffect(()=>(g.current?g.current=!1:m(),R),[c]),o("div",{className:t(),children:[o("header",{className:t("control"),children:[o("div",{className:t("control-title"),children:["\u7CBE\u54C1\u6B4C\u5355 ",r(S,{})]}),r(z,{className:t("control-pick"),placement:"right",context:C,functionChildren:N})]}),r("div",{className:t("card"),children:h.map(e=>o("div",{className:t("item"),children:[r(T,{className:t("img"),icon:{hoverDisplay:!0,placement:"bottom"},src:j(e.coverImgUrl,150),onClick:()=>l(y.list(e.id)),onIconClick:()=>b(B(e.id))}),o("div",{className:t("right"),children:[r("h3",{children:e.name}),o("small",{children:["by ",e.creator.nickname]}),o("div",{className:t("description"),children:[r("span",{children:e.tags.join(",")})," ",e.copywriter]})]})]},e.id))}),r(O,{ref:n,cb:m})]})};export{Y as default};
