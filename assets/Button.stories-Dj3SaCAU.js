import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{c as p}from"./cx-D-w8p2uR.js";import"./_commonjsHelpers-CqkleIqs.js";const M="_button_6kf3s_1",F="_xs_6kf3s_9",G="_sm_6kf3s_14",J="_md_6kf3s_19",K="_lg_6kf3s_24",Q="_iconOnly_6kf3s_29",U="_iconLeft_6kf3s_33",X="_iconRight_6kf3s_36",Y="_solid_6kf3s_39",Z="_outline_6kf3s_49",$="_disabled_6kf3s_111",ee="_fullWidth_6kf3s_116",e={button:M,xs:F,sm:G,md:J,lg:K,iconOnly:Q,iconLeft:U,iconRight:X,solid:Y,outline:Z,disabled:$,fullWidth:ee},D=({children:c,variant:E="solid",size:d="md",disabled:f=!1,iconLeft:u,iconRight:m,type:P="button",fullWidth:A=!1,onClick:C,ariaLabel:H})=>{const g=!!u&&!c&&!m;return t.jsxs("button",{type:P??"button",className:p(e.button,e[E],e[d],A&&e.fullWidth,f&&e.disabled,g&&e.iconOnly),onClick:C,disabled:f,"aria-label":g?H:void 0,children:[u&&t.jsx("span",{className:p(e.iconLeft,e[d]),children:u}),c&&t.jsx("span",{children:c}),m&&t.jsx("span",{className:p(e.iconRight,e[d]),children:m})]})};D.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},type:{required:!1,tsType:{name:"union",raw:'"button" | "submit" | "reset"',elements:[{name:"literal",value:'"button"'},{name:"literal",value:'"submit"'},{name:"literal",value:'"reset"'}]},description:"",defaultValue:{value:'"button"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"solid" | "outline"',elements:[{name:"literal",value:'"solid"'},{name:"literal",value:'"outline"'}]},description:"",defaultValue:{value:'"solid"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},iconLeft:{required:!1,tsType:{name:"ReactNode"},description:""},iconRight:{required:!1,tsType:{name:"ReactNode"},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["ButtonHTMLAttributes"]};const ae={title:"Components/Button",component:D,tags:["autodocs"],argTypes:{variant:{control:{type:"radio"},options:["solid","outline"]},size:{control:{type:"radio"},options:["xs","sm","md","lg"]},fullWidth:{control:"boolean"},disabled:{control:"boolean"}}},s={args:{size:"md",iconLeft:"🔍",ariaLabel:"Search"}},n={args:{children:"Primary Button",variant:"solid",size:"md"}},a={args:{children:"Outline Button",variant:"outline",size:"md"}},o={args:{children:"Outline Button",iconLeft:"🔍"}},r={args:{children:"Outline Button",iconRight:"🔍"}},i={args:{children:"Outline Button",iconLeft:"🔍",iconRight:"🔍"}},l={args:{children:"disabled Button",disabled:!0}};var h,_,b;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    size: "md",
    iconLeft: "🔍",
    ariaLabel: "Search"
  }
}`,...(b=(_=s.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var y,v,O;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: "Primary Button",
    variant: "solid",
    size: "md"
  }
}`,...(O=(v=n.parameters)==null?void 0:v.docs)==null?void 0:O.source}}};var L,B,x;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: "Outline Button",
    variant: "outline",
    size: "md"
  }
}`,...(x=(B=a.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};var R,k,W;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    children: "Outline Button",
    iconLeft: "🔍"
  }
}`,...(W=(k=o.parameters)==null?void 0:k.docs)==null?void 0:W.source}}};var S,I,T;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: "Outline Button",
    iconRight: "🔍"
  }
}`,...(T=(I=r.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var q,N,j;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    children: "Outline Button",
    iconLeft: "🔍",
    iconRight: "🔍"
  }
}`,...(j=(N=i.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var z,V,w;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: "disabled Button",
    disabled: true
  }
}`,...(w=(V=l.parameters)==null?void 0:V.docs)==null?void 0:w.source}}};const oe=["IconOnly","Solid","Outline","WithLeftIcon","WithRightIcon","WithLeftRightIcon","Disabled"];export{l as Disabled,s as IconOnly,a as Outline,n as Solid,o as WithLeftIcon,i as WithLeftRightIcon,r as WithRightIcon,oe as __namedExportsOrder,ae as default};
