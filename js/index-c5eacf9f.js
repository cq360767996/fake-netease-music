import{v as G,ad as V,k as Y,o as z,aa as H,aj as T}from"./vendor-87fac478.js";import{r as v,g as h,j as a,F as B,u as U,n as J}from"./react-b78be278.js";import{b as R,v as K,S as y,D as k,T as $,x as Q,p as L,y as W,c as A,d as M,r as P,z as D,A as X}from"./index-c071a80c.js";import{L as S}from"./index-d19bdff9.js";import{a as Z}from"./react-redux-20b856b3.js";import"./lodash-536b9069.js";import"./react-router-dom-13d0c15b.js";const F=({limit:c=20,type:n,keywords:s,currentType:u,setTotal:r})=>{const[t,e]=v.exports.useState(),[i,l]=v.exports.useState(1),m=v.exports.useMemo(()=>p(t),[n,t]);async function o(_=1,E=20){const f=(_-1)*E,g=await K({type:n,keywords:s,offset:f,limit:c});r(p(g.result)),e(g.result)}function d(_,E){l(_),o(_,E)}function p(_){return _&&_[{1:"songCount",100:"artistCount",10:"albumCount",1014:"videoCount",1e3:"playlistCount",1006:"songCount",1009:"djRadiosCount",1002:"userprofileCount"}[n]]||0}function C(_){const E=h("div",{className:w("empty"),children:["\u5F88\u62B1\u6B49\uFF0C\u672A\u80FD\u627E\u5230\u4E0E\u201C",a("span",{children:s}),"\u201D\u76F8\u5173\u7684\u4EFB\u4F55\u4FE1\u606F\u3002"]});return t?h(B,{children:[_(t),m>c&&a("footer",{className:w("footer"),children:a(G,{total:m,showSizeChanger:!1,current:i,onChange:d})})]}):E}return v.exports.useEffect(()=>(n===u&&o(),R),[n,s]),{wrapEmpty:C}},tt=c=>{const n={...c,currentType:y.ALBUM},{wrapEmpty:s}=F(n),{push:u}=U();function r(t){return t.map(e=>{const{picUrl:i,name:l,artist:m,id:o}=e,{name:d,alias:p}=m,C=`${d}\uFF08${p.join(",")}\uFF09`;return{id:o,imgUrl:i,name:l,col2:C}})}return s(t=>a(S,{imgType:"extra",data:r(t.albums),onItemClick:({id:e})=>u(k.list(e,"album"))}))},et="_lyric_1o214_1",st={lyric:et},nt=c=>{const n={...c,currentType:y.LYRIC},{wrapEmpty:s}=F(n),u=[{title:"",key:"ordinal"},{title:"",key:"action"},{title:"\u97F3\u4E50\u6807\u9898",key:"name",render(r){return h(B,{children:[a("div",{children:r.name}),a(Q,{className:st.lyric,children:r.lyrics.txt})]})}},{title:"\u6B4C\u624B",render(r){return r.artists.map(t=>a("span",{children:t.name},t.id))}},{title:"\u4E13\u8F91",key:"album.name"},{title:"\u65F6\u957F",key:"duration",format:L}];return s(r=>a($,{columns:u,data:r.songs}))},rt=c=>{const n={...c,currentType:y.PLAYLIST},{wrapEmpty:s}=F(n),{push:u}=U();function r(t){return t.map(e=>{const{coverImgUrl:i,name:l,trackCount:m,creator:o,id:d}=e,p=`${m}\u9996`,C=`by ${o.nickname}`;return{id:d,imgUrl:i,name:l,col2:p,col3:C}})}return s(t=>a(S,{data:r(t.playlists),onItemClick:({id:e})=>u(k.list(e))}))},at=c=>{const n={...c,currentType:y.RADIO},{wrapEmpty:s}=F(n);function u(r){return r.map(t=>{const{picUrl:e,name:i,dj:l,id:m}=t,o=`by ${l.nickname}`;return{id:m,imgUrl:e,name:i,col3:o}})}return s(r=>a(S,{data:u(r.djRadios)}))},ot=c=>{const n={...c,currentType:y.SINGER},{wrapEmpty:s}=F(n),{push:u}=U();function r(t){return t.map(e=>{const{picUrl:i,name:l,id:m}=e;return{id:m,imgUrl:i,name:l}})}return s(t=>a(S,{data:r(t.artists),onItemClick:({id:e})=>u(k.singer(e))}))},ct="_song_e7i4c_1",it="_song__header_e7i4c_4",ut="_song__title_e7i4c_7",lt="_song__wrapper_e7i4c_13",mt="_song__left_e7i4c_33",dt="_song__img_e7i4c_38",pt="_song__footer_e7i4c_45",_t="_song__subtitle_e7i4c_50",gt={song:ct,song__header:it,song__title:ut,song__wrapper:lt,"song__best-match":"_song__best-match_e7i4c_18",song__left:mt,song__img:dt,song__footer:pt,song__subtitle:_t},yt=c=>{const n=A("song",gt),{bestMatch:s,...u}=c,r={...u,currentType:y.SONG,limit:100},{wrapEmpty:t}=F(r),{push:e}=U(),i=Z(),l=[{title:"",key:"ordinal"},{title:"",key:"action"},{title:"\u97F3\u4E50\u6807\u9898",key:"name"},{title:"\u6B4C\u624B",render(o){return o.artists.map(d=>a("span",{children:d.name},d.id))}},{title:"\u4E13\u8F91",key:"album.name"},{title:"\u65F6\u957F",key:"duration",format:L}];function m(o,d){if(!s)return;const _=({album:()=>{const{id:f,name:g,picUrl:b,artist:N}=s[o][0],x=N.name;return{id:f,name:g,imgUrl:b,subtitle:x}},artist:()=>{const{id:f,name:g,picUrl:b}=s[o][0];return{id:f,name:g,imgUrl:b}},playlist:()=>{const{id:f,name:g,coverImgUrl:b}=s[o][0];return{id:f,name:g,imgUrl:b}},song:()=>{const{id:f,name:g,album:b}=s[o],N=b.picUrl;return{id:f,name:g,imgUrl:N}},concert:()=>{const{id:f,cover:g,title:b,time:N}=s[o][0],x=N.reduce((O,q)=>`${O}-${Y(q).format("M\u6708D\u65E5")}`,"").slice(1);return{id:f,name:b,imgUrl:g,subtitle:x}}}[o]||D)();function E(f,g){({album:()=>e(k.list(g,"album")),artist:()=>e(k.singer(g)),playlist:()=>e(k.list(g)),song:D,concert:D,orpheus:D})[f]()}return _?h("div",{className:n("best-match"),onClick:()=>E(o,_.id),children:[h("div",{className:n("left"),children:[a(M,{src:P(_.imgUrl,100),className:n("img")}),h("div",{children:[a("div",{children:_.name}),a("div",{className:n("subtitle"),children:_.subtitle})]})]}),a(V,{})]},d):null}return t(o=>h("div",{className:n(),children:[(s==null?void 0:s.orders)&&h("header",{className:n("header"),children:[a("div",{className:n("title"),children:"\u6700\u4F73\u5339\u914D"}),a("div",{className:n("wrapper"),children:s.orders.filter(d=>d!=="orpheus").map(m)})]}),a($,{columns:l,data:o.songs,onDoubleClick:d=>i(W(o.songs[d].id))})]}))},ht=c=>{const n={...c,currentType:y.USER,limit:20},{wrapEmpty:s}=F(n),{push:u}=U();function r(t){return t.map(e=>{const{avatarUrl:i,nickname:l,description:m,userId:o}=e;return{id:o,imgUrl:i,name:l,col3:m}})}return s(t=>a(S,{imgType:"circle",data:r(t.userprofiles),onItemClick:({id:e})=>u(k.user(e))}))},ft="_video_wgdnq_1",bt="_video__img_wgdnq_7",vt="_video__description_wgdnq_12",j={video:ft,video__img:bt,video__description:vt,"--mv":"_--mv_wgdnq_31"},I=A("video",j),Ct=c=>{const n={...c,currentType:y.VIDEO,limit:21},{wrapEmpty:s}=F(n),{push:u}=U();function r(t){u(k.playVideo(t))}return s(t=>a("div",{className:I(),children:t.videos.map(e=>h("div",{className:I("item"),onClick:()=>r(e.vid),children:[a(M,{src:P(e.coverUrl,460,260),className:I("img")}),h("div",{className:I("description"),children:[a("h2",{className:z({[j["--mv"]]:e.type===0}),children:e.title}),h("h3",{children:["by ",e.creator.reduce((i,l)=>`${i},${l.userName}`,"").slice(1)]})]})]},e.vid))}))},w=A("search-result"),It=()=>{const[c,n]=v.exports.useState(0),[s,u]=v.exports.useState(0),[r,t]=v.exports.useState(),{search:e}=J(),i=v.exports.useMemo(()=>H.parse(e.slice(1),{charset:"utf-8"}).keywords,[e]),l=[{type:y.SONG,key:"song",unit:"\u9996",tab:"\u5355\u66F2",component:yt},{type:y.SINGER,key:"singer",unit:"\u4F4D",tab:"\u6B4C\u624B",component:ot},{type:y.ALBUM,key:"album",unit:"\u5F20",tab:"\u4E13\u8F91",component:tt},{type:y.VIDEO,key:"video",unit:"\u4E2A",tab:"\u89C6\u9891",component:Ct},{type:y.PLAYLIST,key:"playlist",unit:"\u4E2A",tab:"\u6B4C\u5355",component:rt},{type:y.LYRIC,key:"lyric",unit:"\u9996",tab:"\u6B4C\u8BCD",component:nt},{type:y.RADIO,key:"radio",unit:"\u4E2A",tab:"\u4E3B\u64AD\u7535\u53F0",component:at},{type:y.USER,key:"user",unit:"\u4E2A",tab:"\u7528\u6237",component:ht}],m=v.exports.useMemo(()=>l[s],[s]);function o(p){const C=l.findIndex(_=>_.key===p);C>-1&&u(C)}async function d(){const p=await X(i);t(p.result)}return v.exports.useEffect(()=>(d(),R),[i]),h("div",{className:"search-result",children:[h("header",{className:w("header"),children:[h("strong",{children:[i," "]}),`\u627E\u5230${c}${m.unit}${m.tab==="\u4E3B\u64AD\u7535\u53F0"?"\u7535\u53F0":m.tab}`]}),a(T,{onChange:o,children:l.map(p=>a(T.TabPane,{tab:p.tab,children:a(p.component,{type:m.type,keywords:i,setTotal:n,bestMatch:p.key==="song"?r:void 0})},p.key))})]})};export{It as default,w as getClass};
