import{r as o,R as s}from"./react-f2ce6df7.js";import{k as v}from"./vendor-989d90fd.js";import{c as f}from"./index-42c9aaa4.js";const l="_nav_1homd_1",p="_nav__item_1homd_4";var d={nav:l,nav__item:p,"--active":"_--active_1homd_18"};const E=({id:c,data:n,onNavClick:t})=>{const m=f("nav",d),[i,r]=o.exports.useState();function _(e,a){r(e),t==null||t(a)}return o.exports.useEffect(()=>{const e=n.findIndex(a=>a.id===c);e>-1&&r(e)},[c]),s.createElement("div",{className:m()},n.map((e,a)=>s.createElement("div",{key:e.id,className:m("item"),onClick:()=>_(a,e.id)},s.createElement("span",{className:v({[d["--active"]]:a===i})},e.name))))};export{E as N};