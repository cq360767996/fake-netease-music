var S=Object.defineProperty,T=Object.defineProperties;var z=Object.getOwnPropertyDescriptors;var u=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable;var q=(e,s,r)=>s in e?S(e,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[s]=r,x=(e,s)=>{for(var r in s||(s={}))w.call(s,r)&&q(e,r,s[r]);if(u)for(var r of u(s))y.call(s,r)&&q(e,r,s[r]);return e},j=(e,s)=>T(e,z(s));var U=(e,s)=>{var r={};for(var a in e)w.call(e,a)&&s.indexOf(a)<0&&(r[a]=e[a]);if(e!=null&&u)for(var a of u(e))s.indexOf(a)<0&&y.call(e,a)&&(r[a]=e[a]);return r};import{c as b,b as N,r as A}from"./index-f4592ea4.js";import{k as g,ad as D,ac as E}from"./vendor-a0dadf07.js";import{g as p,j as i,r as O}from"./react-ac4fd5c4.js";const F="_title_1jwng_1";var $={title:F,"--welt":"_--welt_1jwng_9"};const I=c=>{var t=c,{name:e,welt:s=!1,className:r}=t,a=U(t,["name","welt","className"]);const n=b("title",$),m=g(r,n(),{[$["--welt"]]:s});return p("header",j(x({className:m},a),{children:[e,i(D,{})]}))},G="_card_1vrfj_1",P="_card__img_1vrfj_6",R="_card__item_1vrfj_11";var L={card:G,card__img:P,card__item:R,"--square":"_--square_1vrfj_19","--rectangle":"_--rectangle_1vrfj_25"};const ee=({type:e="square",data:s,icon:r,onItemClick:a,onItemIconClick:c})=>{const t=b("card",L);return i("div",{className:t(),children:s.map(n=>p("div",{className:g(t("item"),L[`--${e}`]),children:[i(N,{className:t("img"),src:e==="rectangle"?n.imgUrl:A(n.imgUrl),icon:r,onClick:()=>a==null?void 0:a(n.id),onIconClick:()=>c==null?void 0:c(n.id)}),i("p",{children:n.name})]},n.id))})},H="_list_1qctb_1",J="_list__col_1qctb_5",K="_list__item_1qctb_12",Q="_list__img_1qctb_22";var M={list:H,list__col:J,list__item:K,list__img:Q,"list__img-wrapper":"_list__img-wrapper_1qctb_27","--default":"_--default_1qctb_30","--medium":"_--medium_1qctb_34","--large":"_--large_1qctb_38"};const re=({icon:e,data:s,functionChildren:r,size:a="default",onItemClick:c})=>{const t=b("list",M),n=s.length,m=[s.slice(0,n/2),s.slice(n/2,n)];return i("div",{className:t(),children:m.map((f,_)=>i("div",{className:t("col"),children:f.map((l,o)=>p("div",{className:t("item"),onDoubleClick:()=>c==null?void 0:c(l.id),children:[i("div",{className:g(t("img-wrapper"),M[`--${a}`]),children:i(N,{className:t("img"),src:A(l.imgUrl),icon:e,onClick:()=>c==null?void 0:c(l.id)})}),r==null?void 0:r({item:l,i:_,j:o,len:n})]},o))},_))})},V="_banner_xdvgn_1",W="_banner__item_xdvgn_5",X="_banner__dot_xdvgn_27",Y="_banner__array_xdvgn_49";var d={banner:V,banner__item:W,"--left":"_--left_xdvgn_16","--right":"_--right_xdvgn_20","--hidden":"_--hidden_xdvgn_24",banner__dot:X,"--active":"_--active_xdvgn_35","banner__dot-wrapper":"_banner__dot-wrapper_xdvgn_41",banner__array:Y};let h,v=0;const se=({data:e,onBannerClick:s})=>{const r=b("banner",d),[a,c]=O.exports.useState(0);async function t(_=!1){const l=e.length,o=_?v+1:v-1;v=o<0?o+l:o%l,c(v)}function n(_){const l=e.length;return _===a-1||a===0&&_===l-1?d["--left"]:_===(a+1)%l?d["--right"]:_===a?"":d["--hidden"]}function m(){requestAnimationFrame(()=>{h=setInterval(()=>{t(!0)},5e3)})}function f(_){clearInterval(h),v=_,c(v)}return O.exports.useEffect(()=>{if(e.length!==0)return m(),()=>{clearInterval(h)}},[e]),p("div",{className:r(),children:[e.map((_,l)=>i(N,{src:_.imageUrl,banLoading:!0,className:g(r("item"),n(l)),onClick:()=>s==null?void 0:s(_.targetId)},_.imageUrl)),i("div",{className:r("dot-wrapper"),children:e.map((_,l)=>i("div",{onMouseOver:()=>f(l),onMouseOut:m,className:g(r("dot"),{[d["--active"]]:l===a})},_.imageUrl))}),i(E,{className:g(r("array"),d["--left"]),onClick:()=>t()}),i(D,{className:g(r("array"),d["--right"]),onClick:()=>t(!0)})]})};export{se as B,ee as C,re as L,I as T};
