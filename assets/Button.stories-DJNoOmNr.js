import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{c as O}from"./cx-D-w8p2uR.js";import"./_commonjsHelpers-CqkleIqs.js";const R="_button_1aj30_2",w="_primary_1aj30_22",D="_outline_1aj30_38",G="_ghost_1aj30_54",P="_danger_1aj30_68",S="_xs_1aj30_87",E="_sm_1aj30_93",L="_md_1aj30_99",A="_lg_1aj30_105",C="_fullWidth_1aj30_128",F="_disabled_1aj30_132",H="_spinner_1aj30_137",I="_rotation_1aj30_1",M="_icon_1aj30_156",e={button:R,primary:w,outline:D,ghost:G,danger:P,xs:S,sm:E,md:L,lg:A,"radius-sm":"_radius-sm_1aj30_111","radius-md":"_radius-md_1aj30_115","radius-lg":"_radius-lg_1aj30_119","radius-full":"_radius-full_1aj30_123",fullWidth:C,disabled:F,spinner:H,rotation:I,icon:M},x=({children:B,variant:T="primary",radius:q="sm",size:z="md",disabled:l=!1,loading:o=!1,iconLeft:i,iconRight:u,type:N="button",fullWidth:V=!1,onClick:W})=>a.jsx("button",{type:N??"button",className:O(e.button,e[T],e[z],e[`radius-${q}`],V&&e.fullWidth,l&&e.disabled),onClick:W,disabled:l||o,children:o?a.jsx("span",{className:e.spinner}):a.jsxs(a.Fragment,{children:[i&&a.jsx("span",{className:e.iconLeft,children:i}),a.jsx("span",{children:B}),u&&a.jsx("span",{className:e.iconRight,children:u})]})});x.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},type:{required:!1,tsType:{name:"union",raw:'"button" | "submit" | "reset"',elements:[{name:"literal",value:'"button"'},{name:"literal",value:'"submit"'},{name:"literal",value:'"reset"'}]},description:"",defaultValue:{value:'"button"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"primary" | "outline" | "ghost" | "danger"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"outline"'},{name:"literal",value:'"ghost"'},{name:"literal",value:'"danger"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},radius:{required:!1,tsType:{name:"union",raw:'"none" | "sm" | "md" | "lg" | "xl" | "full"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"full"'}]},description:"",defaultValue:{value:'"sm"',computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},iconLeft:{required:!1,tsType:{name:"ReactNode"},description:""},iconRight:{required:!1,tsType:{name:"ReactNode"},description:""},disabled:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["ButtonHTMLAttributes"]};const K={title:"Components/Button",component:x,tags:["autodocs"],argTypes:{variant:{control:{type:"radio"},options:["primary","outline","ghost","danger"]},size:{control:{type:"radio"},options:["xs","sm","md","lg"]},radius:{control:{type:"radio"},options:["sm","md","lg","full"]},fullWidth:{control:"boolean"},disabled:{control:"boolean"},loading:{control:"boolean"}}},t={args:{children:"Primary Button",variant:"primary",size:"md"}},s={args:{children:"Outline Button",variant:"outline",size:"md"}},n={args:{children:"Ghost Button",variant:"ghost",size:"md"}},r={args:{children:"Danger Button",variant:"danger",size:"md"}};var d,m,c;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: "Primary Button",
    variant: "primary",
    size: "md"
  }
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,_,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: "Outline Button",
    variant: "outline",
    size: "md"
  }
}`,...(g=(_=s.parameters)==null?void 0:_.docs)==null?void 0:g.source}}};var f,v,h;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: "Ghost Button",
    variant: "ghost",
    size: "md"
  }
}`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var y,j,b;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: "Danger Button",
    variant: "danger",
    size: "md"
  }
}`,...(b=(j=r.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};const Q=["Primary","Outline","Ghost","Danger"];export{r as Danger,n as Ghost,s as Outline,t as Primary,Q as __namedExportsOrder,K as default};
