import{c as m}from"./index-42c9aaa4.js";import{k as n}from"./vendor-989d90fd.js";import{r as t,k as b,R as c}from"./react-f2ce6df7.js";const h="_popover_ir1bh_1",d="_popover__button_ir1bh_32";var p={popover:h,"--left":"_--left_ir1bh_9","--right":"_--right_ir1bh_13",popover__button:d};const R=({functionChildren:o,children:l,context:_,placement:f="left",className:i})=>{const s=m("popover",p),r=t.exports.useRef(null),u=t.exports.useRef(null),[a,e]=t.exports.useState(!1);function v(){a||e(!0)}return b(r,()=>{e(!1)}),c.createElement("div",{ref:u,className:n(s("button"),i),onClickCapture:v},_,a&&c.createElement("div",{ref:r,className:n(s(),p[`--${f}`])},o?o(e):l))};export{R as P};