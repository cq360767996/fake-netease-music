import{o as p}from"./vendor-87fac478.js";import{r as e,j as x}from"./react-b78be278.js";import{c as y}from"./index-c071a80c.js";const d={"infinity-scroll":"_infinity-scroll_7g1w6_1"},w=e.exports.forwardRef(({cb:s,className:i,...u},c)=>{const f=y("infinity-scroll",d),r=e.exports.useRef(null),[a,o]=e.exports.useState(""),n=e.exports.useRef(!0);function l(t){n.current=t}return e.exports.useImperativeHandle(c,()=>l,[]),e.exports.useEffect(()=>{if(!r.current)return;const t=new IntersectionObserver(m=>{m[0].intersectionRatio<=0||(n?(o("\u52A0\u8F7D\u4E2D..."),s==null||s()):o("\u6CA1\u6709\u66F4\u591A\u4E86~"))});return t.observe(r.current),()=>{r.current&&t.unobserve(r.current),t.disconnect()}},[]),x("footer",{ref:r,className:p(f(),i),...u,children:a})});export{w as I};
