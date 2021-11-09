import{r as n,R as e,o as G,u as I}from"./react-cb61e8c1.js";import{I as Y,c as U,b as w,r as F,w as m,i as _,C as $,Y as z,Z as L,D as V,$ as W,a0 as H,a1 as K,a2 as Z,a3 as q,a4 as J}from"./index-7638329a.js";import{ac as Q,z as X,K as ee,$ as te,a2 as ae,h as se}from"./vendor-b86105ba.js";import{W as le}from"./write-comment-6d93fef7.js";import"./lodash-0d4875ad.js";import"./react-router-dom-23ef9bd5.js";import"./react-redux-35258e53.js";const re="_video_1pcl7_1",ne="_video__control_1pcl7_14",oe="_video__pause_1pcl7_29";var ce={video:re,video__control:ne,video__pause:oe};const ue=({src:a})=>{const i=U("video",ce),[l,t]=n.exports.useState(!1),o=n.exports.useRef(null);return e.createElement("div",{className:i()},e.createElement("video",{ref:o,src:a,autoPlay:!0,controls:!0,onPause:()=>t(!0),onPlay:()=>t(!1)}),l&&e.createElement(Y,{type:"play",size:"giant",className:i("pause"),onClick:()=>{var u;return(u=o.current)==null?void 0:u.play()}}))},Ne=()=>{const a=U("play-video"),l=G().id,[t,o]=n.exports.useState(),[u,D]=n.exports.useState(""),[x,M]=n.exports.useState([]),{goBack:P}=I(),k=n.exports.useMemo(()=>!Number.isNaN(Number(l)),[l]),{push:d}=I();async function j(){const s=await W(l),{creator:r,title:c,publishTime:p,playTime:E,videoGroup:v,praisedCount:C,subscribeCount:N,shareCount:f,commentCount:b}=s.data,y=se(p).format("YYYY-MM-DD"),{avatarUrl:g,nickname:h,userId:B}=r;o({title:c,publishTime:y,playTime:E,videoGroup:v,praisedCount:C,subscribeCount:N,shareCount:f,commentCount:b,avatarUrl:g,nickname:h,userId:B})}async function T(){const[s,r]=await Promise.all([H(Number(l)),K(Number(l))]),{name:c,publishTime:p,playCount:E,videoGroup:v,subCount:C,shareCount:N,commentCount:f,artistName:b,cover:y,artistId:g}=s.data,{likedCount:h}=r;o({title:c,publishTime:p,playTime:E,videoGroup:v,subscribeCount:C,shareCount:N,commentCount:f,praisedCount:h,nickname:b,avatarUrl:y,artistId:g})}async function R(){var r;const s=await Z(l);D((r=s.urls)==null?void 0:r[0].url)}async function O(){const s=await q(Number(l));D(s.data.url)}async function S(){const s=await J(l);M(s.data)}function A(){(t==null?void 0:t.artistId)?d(V.singer(t.artistId)):(t==null?void 0:t.userId)&&d(V.user(t.userId))}return n.exports.useEffect(()=>{k?(T(),O()):(j(),R()),S()},[l]),e.createElement("div",{className:a()},e.createElement("div",{className:a("detail")},e.createElement("div",{className:a("left")},e.createElement("h2",{className:a("title")},e.createElement("span",{onClick:()=>P()},e.createElement(Q,null)," \u89C6\u9891\u8BE6\u60C5")),e.createElement(ue,{src:u}),e.createElement("div",{className:a("author-wrapper")},t&&e.createElement("div",{className:a("author")},e.createElement(w,{className:a("avatar"),src:F(t.avatarUrl,50),onClick:A}),e.createElement("strong",{onClick:A},t.nickname)),e.createElement("button",{className:a("follow")},e.createElement(X,null)," \u5173\u6CE8")),e.createElement("h2",{className:a("name")},t==null?void 0:t.title),e.createElement("div",{className:a("publish")},e.createElement("span",null,"\u53D1\u5E03: ",t==null?void 0:t.publishTime),e.createElement("span",null,"\u64AD\u653E: ",m(t==null?void 0:t.playTime),"\u6B21")),e.createElement("div",{className:a("tags")},t==null?void 0:t.videoGroup.map(s=>e.createElement("div",{key:s.id,className:a("tag")},s.name))),e.createElement("div",{className:a("button-group")},e.createElement("div",null,e.createElement(_,null,e.createElement(ee,null),"\u8D5E",m(t==null?void 0:t.praisedCount)),e.createElement(_,null,e.createElement(te,null),"\u6536\u85CF",m(t==null?void 0:t.subscribeCount)),e.createElement(_,null,e.createElement(ae,null),"\u5206\u4EAB",m(t==null?void 0:t.shareCount))),e.createElement("a",null,"\u4E3E\u62A5")),e.createElement("h3",{className:a("comment")},"\u542C\u53CB\u8BC4\u8BBA ",e.createElement("span",null,"(\u5DF2\u6709",t==null?void 0:t.commentCount,"\u8BC4\u8BBA)")),e.createElement(le,null),e.createElement($,{id:l,api:k?z:L})),e.createElement("div",{className:a("right")},e.createElement("h2",{className:a("title")},"\u76F8\u5173\u63A8\u8350"),x.map(s=>e.createElement("div",{key:s.vid,className:a("item")},e.createElement(w,{className:a("item-img"),src:s.coverUrl,onClick:()=>d(V.playVideo(s.vid))}),e.createElement("div",{className:a("item-description")},e.createElement("div",{className:a("item-title")},s.title),e.createElement("div",{className:a("item-author")},"by ",s.creator.reduce((r,c)=>`${r}/${c.userName}`,"").slice(1))))))))};export{Ne as default};