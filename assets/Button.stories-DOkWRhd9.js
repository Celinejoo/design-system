import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{c as p}from"./cx-D-w8p2uR.js";import"./_commonjsHelpers-CqkleIqs.js";const k="_button_6z5v2_1",F="_xs_6z5v2_9",G="_sm_6z5v2_14",J="_md_6z5v2_19",K="_lg_6z5v2_24",Q="_solid_6z5v2_29",U="_outline_6z5v2_39",X="_iconOnly_6z5v2_53",Y="_iconLeft_6z5v2_57",Z="_iconRight_6z5v2_60",$="_disabled_6z5v2_111",ee="_fullWidth_6z5v2_116",e={button:k,xs:F,sm:G,md:J,lg:K,solid:Q,outline:U,iconOnly:X,iconLeft:Y,iconRight:Z,disabled:$,fullWidth:ee},E=({children:c,variant:P="solid",size:d="md",disabled:f=!1,iconLeft:u,iconRight:m,type:A="button",fullWidth:C=!1,onClick:H,ariaLabel:M})=>{const g=!!u&&!c&&!m;return t.jsxs("button",{type:A??"button",className:p(e.button,e[P],e[d],C&&e.fullWidth,f&&e.disabled,g&&e.iconOnly),onClick:H,disabled:f,"aria-label":g?M:void 0,children:[u&&t.jsx("span",{className:p(e.iconLeft,e[d]),children:u}),c&&t.jsx("span",{children:c}),m&&t.jsx("span",{className:p(e.iconRight,e[d]),children:m})]})};E.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},type:{required:!1,tsType:{name:"union",raw:'"button" | "submit" | "reset"',elements:[{name:"literal",value:'"button"'},{name:"literal",value:'"submit"'},{name:"literal",value:'"reset"'}]},description:"",defaultValue:{value:'"button"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"solid" | "outline"',elements:[{name:"literal",value:'"solid"'},{name:"literal",value:'"outline"'}]},description:"",defaultValue:{value:'"solid"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},iconLeft:{required:!1,tsType:{name:"ReactNode"},description:""},iconRight:{required:!1,tsType:{name:"ReactNode"},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["ButtonHTMLAttributes"]};const ae={title:"Components/Button",component:E,tags:["autodocs"],argTypes:{variant:{control:{type:"radio"},options:["solid","outline"]},size:{control:{type:"radio"},options:["xs","sm","md","lg"]},fullWidth:{control:"boolean"},disabled:{control:"boolean"}}},n={args:{size:"md",iconLeft:"🔍",ariaLabel:"Search"}},s={args:{children:"Primary Button",variant:"solid",size:"md"}},a={args:{children:"Outline Button",variant:"outline",size:"md"}},o={args:{children:"Outline Button",iconLeft:"🔍"}},r={args:{children:"Outline Button",iconRight:"🔍"}},i={args:{children:"Outline Button",iconLeft:"🔍",iconRight:"🔍"}},l={args:{children:"disabled Button",disabled:!0}};var h,_,v;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    size: "md",
    iconLeft: "🔍",
    ariaLabel: "Search"
  }
}`,...(v=(_=n.parameters)==null?void 0:_.docs)==null?void 0:v.source}}};var b,y,z;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: "Primary Button",
    variant: "solid",
    size: "md"
  }
}`,...(z=(y=s.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var O,L,B;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    children: "Outline Button",
    variant: "outline",
    size: "md"
  }
}`,...(B=(L=a.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var x,R,W;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: "Outline Button",
    iconLeft: "🔍"
  }
}`,...(W=(R=o.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var S,I,T;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(j=(N=i.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var V,w,D;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    children: "disabled Button",
    disabled: true
  }
}`,...(D=(w=l.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};const oe=["IconOnly","Solid","Outline","WithLeftIcon","WithRightIcon","WithLeftRightIcon","Disabled"];export{l as Disabled,n as IconOnly,a as Outline,s as Solid,o as WithLeftIcon,i as WithLeftRightIcon,r as WithRightIcon,oe as __namedExportsOrder,ae as default};
