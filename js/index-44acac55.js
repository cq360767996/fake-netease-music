import{r as a,j as e,g as n}from"./react-b78be278.js";import{b as l,c as d,aC as p}from"./index-c071a80c.js";import"./lodash-536b9069.js";import"./vendor-87fac478.js";import"./react-redux-20b856b3.js";import"./react-router-dom-13d0c15b.js";const m="_detail_hzoqt_1",u={detail:m},D=({id:r})=>{const o=d("detail",u),[s,i]=a.exports.useState();async function c(){const t=await p(r);i(t)}return a.exports.useEffect(()=>(c(),l),[r]),e("div",{className:o(),children:s==null?void 0:s.introduction.map(t=>n("div",{children:[e("h2",{children:t.ti}),e("p",{children:t.txt})]},t.ti))})};export{D as default};
