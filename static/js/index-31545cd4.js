import{r as c,R as e,o as G,u as H}from"./react-f2ce6df7.js";import{s as L}from"./collector.module-b0079d28.js";import{b as x,r as k,c as b,d as R,C as q,e as J,f as K,h as Q,i as C,w as f,D as A,T as V,j as X,k as Z,l as ee,m as te}from"./index-42c9aaa4.js";import{u as ae,a as se}from"./react-redux-df697b15.js";import{U as le,k as ne,ai as re,h as T,$ as ce,a2 as me,D as ie,aj as N}from"./vendor-989d90fd.js";import{W as oe,s as ue}from"./write-comment-b5a33a4f.js";import{C as Ee}from"./index-c4e447fb.js";import"./lodash-753d2698.js";import"./react-router-dom-afba9a75.js";const de=({id:a})=>{const l=b("collector",L),[m,p]=c.exports.useState([]),[g,v]=c.exports.useState(0),[y,t]=c.exports.useState(1);async function E(s=1,i=20){const r=(s-1)*i,o=await R({id:a,offset:r,limit:i});p(o.subscribers),v(o.total)}return c.exports.useEffect(()=>{a&&E()},[a]),m.length>0?e.createElement(e.Fragment,null,e.createElement("div",{className:l()},m.map(s=>e.createElement("div",{key:s.userId,className:l("item")},e.createElement(x,{className:l("img"),src:k(s.avatarUrl,100)}),e.createElement("div",null,e.createElement("div",{className:l("title")},s.nickname),s.signature&&e.createElement("div",{className:l("subtitle")},s.signature))))),e.createElement("footer",{className:l("footer")},e.createElement(le,{current:y,total:g,onChange:(s,i)=>{t(s),E(s,i)},pageSize:100,showSizeChanger:!1}))):e.createElement("div",{className:l("empty")},"\u6682\u65E0\u6536\u85CF\u8005")},pe=({id:a,isAlbum:l})=>{const m=b("comments-list",ue);return e.createElement("div",{className:m()},e.createElement(oe,null),e.createElement(q,{id:a,api:l?J:K}))};var be={"album-detail":"_album-detail_1r2oa_1","album-detail__title":"_album-detail__title_1r2oa_4"};const Ce=({description:a})=>{const l=b("album-detail",be);return e.createElement("div",{className:l()},e.createElement("header",{className:l("title")},"\u4E13\u8F91\u4ECB\u7ECD"),e.createElement("p",null,a))},Pe=()=>{const a=b("list"),l=G(),[m,p]=c.exports.useState([]),g=ae(),[v,y]=c.exports.useState(""),[t,E]=c.exports.useState(),s=c.exports.useMemo(()=>Number(l.id),[l.id]),{push:i}=H(),r=c.exports.useMemo(()=>!!l.type,[l.type]),o=se(n=>n.user.profile);function B(n=0){g(X({current:n,tracks:m,fm:[]}))}function P(n){i(A.user(n))}async function j(){const[n,D]=await Promise.all([Z(s),ee(s)]),d=n.songs.map(u=>{var F;return u.disable=((F=u==null?void 0:u.privilege)==null?void 0:F.cp)?!u.privilege.cp:!1,u});p(d);const{picUrl:h,name:I,artist:U,publishTime:Y,description:M}=n.album,{subCount:W,shareCount:$,commentCount:O}=D,z={coverImgUrl:h,name:I,subscribedCount:W,shareCount:$,commentCount:O,createTime:Y,artistName:U.name};E(z),y(M)}async function S(){const n=await te(s),D=n.playlist.tracks.map((d,h)=>(d.disable=!n.privileges[h].cp&&!d.pc,d));p(D),E(n.playlist)}function _(){var n;return e.createElement("div",{className:a("description")},e.createElement("div",{className:a("tag")},e.createElement("span",{className:"--title"},"\u6807\u7B7E: "),e.createElement("span",null,(n=t==null?void 0:t.tags)==null?void 0:n.join("/"))),e.createElement("div",{className:a("count")},e.createElement("span",null,e.createElement("span",{className:"--title"},"\u6B4C\u66F2\u6570: "),f(t==null?void 0:t.trackCount)),e.createElement("span",{className:"--left"},e.createElement("span",{className:"--title"},"\u64AD\u653E\u6570: "),f(t==null?void 0:t.playCount))),e.createElement("div",{className:a("introduction")},e.createElement("span",{className:"--title"},"\u7B80\u4ECB: "),e.createElement("div",null,t==null?void 0:t.description)))}function w(){return e.createElement("div",{className:a("description")},e.createElement("div",{className:a("singer")},e.createElement("span",{className:"--title"},"\u6B4C\u624B: "),e.createElement("span",{onClick:()=>i(A.singer(t==null?void 0:t.id))},t==null?void 0:t.artistName)),e.createElement("div",{className:a("publish-time")},e.createElement("span",{className:"--title"},"\u65F6\u95F4: "),e.createElement("span",null,T(t==null?void 0:t.createTime).format("YYYY-MM-DD"))))}return c.exports.useEffect(()=>{Number.isNaN(s)||(r?j():S())},[s,r]),e.createElement("div",{className:a()},e.createElement("header",{className:a("header")},s&&(t==null?void 0:t.coverImgUrl)?e.createElement(x,{className:ne("list__img",{"--album":r}),src:k(t.coverImgUrl,300),alt:"avatar"}):e.createElement("div",{className:a("img-default")},e.createElement(re,null)),e.createElement("div",{className:a("right")},e.createElement("div",{className:a("title")},e.createElement("span",null,r?"\u4E13\u8F91":"\u6B4C\u5355"),e.createElement("strong",null,(t==null?void 0:t.name)||"\u6211\u559C\u6B22\u7684\u97F3\u4E50")),!r&&e.createElement("div",{className:a("user-info")},e.createElement("img",{src:k(o.avatarUrl||Q,100),alt:"avatar",onClick:()=>P(o.userId)}),e.createElement("a",{onClick:()=>P(o.userId)},o.nickname),e.createElement("span",null,T(t==null?void 0:t.createTime).format("YYYY-MM-DD"),"\u521B\u5EFA")),e.createElement("div",{className:a("control")},e.createElement(C,{compose:!0,onClick:()=>B()}),e.createElement(C,null,e.createElement(ce,null),"\u6536\u85CF(",f(t==null?void 0:t.subscribedCount),")"),e.createElement(C,null,e.createElement(me,null),"\u5206\u4EAB(",f((t==null?void 0:t.shareCount)||0),")"),e.createElement(C,null,e.createElement(ie,null),"\u4E0B\u8F7D\u5168\u90E8")),r?w():_())),e.createElement("section",{className:a("tabs")},e.createElement(N,null,e.createElement(N.TabPane,{tab:"\u6B4C\u66F2\u5217\u8868",key:"1"},e.createElement(V,{columns:Ee,data:m,onDoubleClick:B})),e.createElement(N.TabPane,{tab:`\u8BC4\u8BBA(${(t==null?void 0:t.commentCount)||0})`,key:"2"},e.createElement(pe,{id:s,isAlbum:r})),e.createElement(N.TabPane,{tab:r?"\u4E13\u8F91\u8BE6\u60C5":"\u6536\u85CF\u8005",key:"3"},r?e.createElement(Ce,{description:v}):e.createElement(de,{id:s})))))};export{Pe as default};