import{_ as l,b as P,r as h,i as E,D as B,c as F,p as N,q as k}from"./index-a8385452.js";import{r as a,o as C,j as T,u as z,R as e}from"./react-69194784.js";import{ak as D,ab as I,aj as u}from"./vendor-441fcb21.js";import{A as V}from"./index-fcc8aab3.js";import"./react-router-dom-fbac4128.js";import"./react-redux-9f5c3214.js";import"./lodash-16b1923a.js";const O=a.exports.lazy(()=>l(()=>import("./index-26c80716.js").then(function(s){return s.i}),["static/js/index-26c80716.js","static/css/index-69065f68.css","static/js/index-a8385452.js","static/css/index-f8f8dd2a.css","static/js/react-69194784.js","static/js/vendor-441fcb21.js","static/css/vendor-0dfb1c16.css","static/js/lodash-16b1923a.js","static/js/react-router-dom-fbac4128.js","static/js/react-redux-9f5c3214.js"])),R=a.exports.lazy(()=>l(()=>import("./index-fb89f338.js"),["static/js/index-fb89f338.js","static/css/index-fc84e0c7.css","static/js/react-69194784.js","static/js/vendor-441fcb21.js","static/css/vendor-0dfb1c16.css","static/js/lodash-16b1923a.js","static/js/index-a8385452.js","static/css/index-f8f8dd2a.css","static/js/react-router-dom-fbac4128.js","static/js/react-redux-9f5c3214.js"])),L=a.exports.lazy(()=>l(()=>import("./index-4705b90b.js"),["static/js/index-4705b90b.js","static/css/index-d2f1db5f.css","static/js/react-69194784.js","static/js/vendor-441fcb21.js","static/css/vendor-0dfb1c16.css","static/js/lodash-16b1923a.js","static/js/index-a8385452.js","static/css/index-f8f8dd2a.css","static/js/react-router-dom-fbac4128.js","static/js/react-redux-9f5c3214.js"])),M=a.exports.lazy(()=>l(()=>import("./index-f43b0272.js"),["static/js/index-f43b0272.js","static/css/index-8ac05e56.css","static/js/react-69194784.js","static/js/vendor-441fcb21.js","static/css/vendor-0dfb1c16.css","static/js/lodash-16b1923a.js","static/js/index-a8385452.js","static/css/index-f8f8dd2a.css","static/js/react-router-dom-fbac4128.js","static/js/react-redux-9f5c3214.js"])),Q=()=>{var i;const s=F("singer"),o=C(),n=a.exports.useMemo(()=>Number(o.id),[o.id]),b=T().state,[d,p]=a.exports.useState("album"),[t,A]=a.exports.useState(),[c,x]=a.exports.useState(),[_,f]=a.exports.useState([]),[m,v]=a.exports.useState("overview"),{push:g}=z(),y=d==="album"?{right:e.createElement(V,{activeButton:m,setActiveButton:v})}:void 0;async function j(){const r=await N(n);r.data.artist.alias=b,A(r.data.artist),x(r.data.user)}async function S(){const r=await k(n);f(r.hotAlbums)}return a.exports.useEffect(()=>{Number.isNaN(n)||(j(),S())},[n]),e.createElement("div",{className:s()},e.createElement("header",{className:s("header")},e.createElement(P,{src:(t==null?void 0:t.cover)&&h(t.cover),className:s("img")}),e.createElement("section",{className:s("right")},e.createElement("h2",null,t==null?void 0:t.name),e.createElement("h3",null,(i=t==null?void 0:t.alias)==null?void 0:i.join(" ")),e.createElement("div",null,e.createElement(E,{className:s("button")},e.createElement(D,null),"\u6536\u85CF"),e.createElement(E,{className:s("button"),onClick:()=>g(B.user(c==null?void 0:c.userId))},e.createElement(I,null),"\u4E2A\u4EBA\u4E3B\u9875")),e.createElement("div",{className:s("description")},e.createElement("span",null,"\u5355\u66F2\u6570:",e.createElement("strong",null,t==null?void 0:t.musicSize)),e.createElement("span",null,"\u4E13\u8F91\u6570:",e.createElement("strong",null,t==null?void 0:t.albumSize)),e.createElement("span",null,"MV\u6570:",e.createElement("strong",null,t==null?void 0:t.mvSize))))),e.createElement(u,{destroyInactiveTabPane:!0,tabBarExtraContent:y,onChange:p},e.createElement(u.TabPane,{tab:"\u4E13\u8F91",key:"album"},e.createElement(a.exports.Suspense,{fallback:"\u52A0\u8F7D\u4E2D..."},e.createElement(O,{type:m,id:n,data:_,isAlbum:!0}))),e.createElement(u.TabPane,{tab:"MV",key:"mv"},e.createElement(a.exports.Suspense,{fallback:"\u52A0\u8F7D\u4E2D..."},e.createElement(R,{id:n}))),e.createElement(u.TabPane,{tab:"\u6B4C\u624B\u8BE6\u60C5",key:"detail"},e.createElement(a.exports.Suspense,{fallback:"\u52A0\u8F7D\u4E2D..."},t&&e.createElement(L,{id:n}))),e.createElement(u.TabPane,{tab:"\u76F8\u4F3C\u6B4C\u624B",key:"similar"},e.createElement(a.exports.Suspense,{fallback:"\u52A0\u8F7D\u4E2D..."},e.createElement(M,{id:n})))))};export{Q as default};
