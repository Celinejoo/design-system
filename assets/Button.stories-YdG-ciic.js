import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{c}from"./cx-D-w8p2uR.js";import"./_commonjsHelpers-CqkleIqs.js";const E="_button_hb4ca_1",P="_xs_hb4ca_9",A="_sm_hb4ca_14",C="_md_hb4ca_19",H="_lg_hb4ca_24",M="_solid_hb4ca_29",k="_outline_hb4ca_39",F="_iconLeft_hb4ca_53",G="_iconRight_hb4ca_77",J="_disabled_hb4ca_101",K="_fullWidth_hb4ca_106",e={button:E,xs:P,sm:A,md:C,lg:H,solid:M,outline:k,iconLeft:F,iconRight:G,disabled:J,fullWidth:K},I=({children:N,variant:V="solid",size:l="md",disabled:d=!1,iconLeft:u,iconRight:m,type:z="button",fullWidth:w=!1,onClick:D})=>t.jsx("button",{type:z??"button",className:c(e.button,e[V],e[l],w&&e.fullWidth,d&&e.disabled),onClick:D,disabled:d,children:t.jsxs("div",{children:[u&&t.jsx("span",{className:c(e.iconLeft,e[l]),children:u}),t.jsx("span",{children:N}),m&&t.jsx("span",{className:c(e.iconRight,e[l]),children:m})]})});I.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},type:{required:!1,tsType:{name:"union",raw:'"button" | "submit" | "reset"',elements:[{name:"literal",value:'"button"'},{name:"literal",value:'"submit"'},{name:"literal",value:'"reset"'}]},description:"",defaultValue:{value:'"button"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"solid" | "outline"',elements:[{name:"literal",value:'"solid"'},{name:"literal",value:'"outline"'}]},description:"",defaultValue:{value:'"solid"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},iconLeft:{required:!1,tsType:{name:"ReactNode"},description:""},iconRight:{required:!1,tsType:{name:"ReactNode"},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["ButtonHTMLAttributes"]};const Y={title:"Components/Button",component:I,tags:["autodocs"],argTypes:{variant:{control:{type:"radio"},options:["solid","outline"]},size:{control:{type:"radio"},options:["xs","sm","md","lg"]},fullWidth:{control:"boolean"},disabled:{control:"boolean"}}},n={args:{children:"Primary Button",variant:"solid",size:"md"}},a={args:{children:"Outline Button",variant:"outline",size:"md"}},s={args:{children:"Outline Button",iconLeft:"🔍"}},o={args:{children:"Outline Button",iconRight:"🔍"}},r={args:{children:"Outline Button",iconLeft:"🔍",iconRight:"🔍"}},i={args:{children:"disabled Button",disabled:!0}};var p,h,f;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: "Primary Button",
    variant: "solid",
    size: "md"
  }
}`,...(f=(h=n.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var g,b,_;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: "Outline Button",
    variant: "outline",
    size: "md"
  }
}`,...(_=(b=a.parameters)==null?void 0:b.docs)==null?void 0:_.source}}};var v,x,y;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: "Outline Button",
    iconLeft: "🔍"
  }
}`,...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var B,R,L;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: "Outline Button",
    iconRight: "🔍"
  }
}`,...(L=(R=o.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var W,O,T;r.parameters={...r.parameters,docs:{...(W=r.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    children: "Outline Button",
    iconLeft: "🔍",
    iconRight: "🔍"
  }
}`,...(T=(O=r.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var q,S,j;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    children: "disabled Button",
    disabled: true
  }
}`,...(j=(S=i.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};const Z=["Solid","Outline","WithLeftIcon","WithRightIcon","WithLeftRightIcon","Disabled"];export{i as Disabled,a as Outline,n as Solid,s as WithLeftIcon,r as WithLeftRightIcon,o as WithRightIcon,Z as __namedExportsOrder,Y as default};
