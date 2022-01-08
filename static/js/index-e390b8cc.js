import{r as m,R as e,o as x}from"./react-f2ce6df7.js";import{s as j}from"./collector.module-b0079d28.js";import{b as f,r as D,c as g,M as k,o as M,i as p,N as O,O as T,P as J,u as R}from"./index-42c9aaa4.js";import{J as C,K as U,h as L,k as B,ar as Y,a2 as y,S as w,aj as N,as as I,at as z}from"./vendor-989d90fd.js";import{I as G}from"./index-15d88cec.js";import{a as K,u as W}from"./react-redux-df697b15.js";import"./lodash-753d2698.js";import"./react-router-dom-afba9a75.js";const q=({id:r})=>{const t=g("collector",j),[s,i]=m.exports.useReducer(d,[]),n=m.exports.useRef(null);let c=-1;async function E(){var o;if(!r)return;const l=await k(r,c);i({type:c===-1?"reset":"add",payload:l.subscribers}),(o=n.current)==null||o.call(n,l.hasMore),c=l.time}function d(l,{type:u="reset",payload:o}){return u==="reset"?o:[...l,...o]}return m.exports.useEffect(()=>{E()},[r]),e.createElement(e.Fragment,null,e.createElement("div",{className:t()},s.map(l=>e.createElement("div",{key:l.userId,className:t("item")},e.createElement(f,{className:t("img"),src:D(l.avatarUrl,100)}),e.createElement("div",null,e.createElement("div",{className:t("title")},l.nickname),l.signature&&e.createElement("div",{className:t("subtitle")},l.signature))))),e.createElement(G,{ref:n,cb:E}))},v=({item:r,onItemClick:t})=>{const s=g("radio-list");return e.createElement("div",{className:s("item")},e.createElement("div",{className:s("ordinal")},r.serialNum),e.createElement(f,{className:s("cover"),icon:{hoverDisplay:!0},src:D(r.coverUrl,60),onClick:()=>t==null?void 0:t(r.mainSong.id),onIconClick:()=>t==null?void 0:t(r.mainSong.id)}),e.createElement("div",{className:s("name")},r.name),e.createElement("div",{className:s("play-count")},e.createElement(C,null)," ",r.trackCount),e.createElement("div",{className:s("like-count")},e.createElement(U,null)," ",r.likedCount),e.createElement("div",{className:s("date")},L(r.createTime).format("YYYY-MM-DD")),e.createElement("div",{className:s("duration")},M(r.duration)))},te=()=>{const r=g("list"),t=g("radio-list"),s=x(),i=m.exports.useMemo(()=>Number(s.id),[s.id]),n=m.exports.useMemo(()=>!!s.type,[s.type]),[c,E]=m.exports.useState([]),d=m.exports.useMemo(()=>c.sort((a,F)=>a.createTime-F.createTime).slice(0,3),[c]),l=m.exports.useMemo(()=>c.filter(a=>a.programFeeType===5),[c]),u=K(a=>a.djDetail),o=W();async function h(){const a=await O(i);o(T(a.data))}async function A(){const a=await J(i);E(a.programs)}async function b(a){o(R(a))}function P(){var a;return e.createElement(e.Fragment,null,e.createElement("div",{className:r("user-info")},e.createElement("img",{src:u.dj&&D(u.dj.avatarUrl,30),alt:"avatar"}),e.createElement("a",null,(a=u.dj)==null?void 0:a.nickname)),e.createElement("div",{className:r("control")},e.createElement(p,{compose:!0}),e.createElement(p,null,e.createElement(w,null),"\u5DF2\u8BA2\u9605(",u.subCount,")"),e.createElement(p,null,e.createElement(y,null),"\u5206\u4EAB(",u.shareCount,")")),e.createElement("div",{className:t("tag")},e.createElement("span",null,u.category),e.createElement("strong",null,u.desc)))}function S(){var a,F;return e.createElement(e.Fragment,null,e.createElement("div",{className:t("price")},"\xA5",(((a=u==null?void 0:u.feeInfo)==null?void 0:a.originalPrice)||0)/100),e.createElement("div",{className:t("buttons")},e.createElement("button",{className:B(t("button"),"--bg")},e.createElement(Y,null),"\u7ACB\u5373\u8D2D\u4E70"),e.createElement("button",{className:B(t("button"),"--border")},e.createElement(C,null),"\u514D\u8D39\u8BD5\u542C"),e.createElement(p,null,e.createElement(y,null),"\u5206\u4EAB(175)")),e.createElement("div",{className:t("slogan")},(F=u.feeInfo)==null?void 0:F.slogan),e.createElement("small",{className:t("brief")},"\u6700\u65B0\u4E0A\u67B6"))}return m.exports.useEffect(()=>{Number.isNaN(i)||(h(),A())},[i]),e.createElement("div",{className:r()},e.createElement("header",{className:r("header")},e.createElement(f,{className:r("img"),src:u.picUrl&&D(u.picUrl,200)}),e.createElement("div",{className:r("right")},e.createElement("div",{className:r("title")},e.createElement("span",null,n?"\u4ED8\u8D39\u7CBE\u54C1":"\u7535\u53F0"),e.createElement("strong",null,u.name)),n?S():P())),e.createElement("section",{className:r("tabs")},e.createElement(N,null,n&&e.createElement(N.TabPane,{tab:"\u8BE6\u60C5",key:"0"},e.createElement("div",{className:t("detail")},e.createElement("h3",{className:t("detail-title")},"\u7535\u53F0\u5185\u5BB9\u7B80\u4ECB"),e.createElement("p",null,u.desc),d.length>0&&e.createElement(e.Fragment,null,e.createElement("h3",{className:t("detail-title")},"\u6700\u8FD1\u66F4\u65B0"),d.map(a=>e.createElement(v,{key:a.id,item:a,onItemClick:b}))),l.length>0&&e.createElement(e.Fragment,null,e.createElement("h3",{className:t("detail-title")},"\u514D\u8D39\u8BD5\u542C >"),l.map(a=>e.createElement(v,{key:a.id,item:a,onItemClick:b}))),e.createElement("h3",{className:B(t("detail-title"),t("detail-notice"))},"\u8D2D\u4E70\u987B\u77E5"),e.createElement("p",null,"1. \u672C\u97F3\u9891\u4E3A\u4ED8\u8D39\u8BA2\u9605\u4EA7\u54C1\uFFE512.9/12\u671F\uFF0C\u8D2D\u4E70\u6210\u529F\u540E\u5373\u53EF\u7545\u542C/\u4E0B\u8F7D",e.createElement("br",null),"2. \u8BF7\u5728\u7F51\u6613\u4E91\u97F3\u4E50\u624B\u673AAPP\u652F\u4ED8\u8D2D\u4E70\uFF0C\u8D2D\u4E70\u540E\u652F\u6301\u79FB\u52A8\u3001PC\u3001Web\u7B49\u7AEF\u6536\u542C",e.createElement("br",null),"3. \u8D2D\u4E70\u6210\u529F\u540E\u4E0D\u53EF\u9000\u6B3E\uFF0C\u540C\u65F6\u4E0D\u652F\u6301\u8F6C\u8BA9\uFF0C\u656C\u8BF7\u8C05\u89E3\uFF1B",e.createElement("br",null),"4. \u8D2D\u4E70\u8FC7\u7A0B\u9047\u5230\u4EFB\u4F55\u95EE\u9898\uFF0C\u8BF7\u79C1\u4FE1\u8054\u7CFB@\u4E91\u97F3\u4E50\u5BA2\u670D"))),e.createElement(N.TabPane,{tab:"\u8282\u76EE",key:"1"},e.createElement("div",{className:t("control")},e.createElement("div",null,"\u5171",u.programCount,"\u671F"),e.createElement("div",{className:t("control-right")},e.createElement("strong",null,"\u6392\u5E8F"),e.createElement(I,{className:t("icon")}),e.createElement(z,{className:t("icon")}))),c.map(a=>e.createElement(v,{key:a.id,item:a,onItemClick:b}))),!n&&e.createElement(N.TabPane,{tab:"\u8BA2\u9605\u8005",key:"3"},e.createElement(q,{id:i})))))};export{te as default};