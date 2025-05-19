import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as f}from"./index-CgfFrydU.js";import{c as a}from"./cx-D-w8p2uR.js";import"./_commonjsHelpers-CqkleIqs.js";const k="_wrapper_1ril4_1",A="_label_1ril4_8",B="_xs_1ril4_12",G="_sm_1ril4_15",H="_md_1ril4_18",J="_lg_1ril4_21",K="_inputWrapper_1ril4_25",L="_outline_1ril4_32",P="_filled_1ril4_38",Q="_input_1ril4_25",U="_fullished_1ril4_47",X="_disabled_1ril4_58",Y="_errorMessage_1ril4_99",e={wrapper:k,label:A,xs:B,sm:G,md:H,lg:J,inputWrapper:K,outline:L,filled:P,input:Q,fullished:U,disabled:X,errorMessage:Y},d=f.forwardRef(({label:p,labelSize:u="md",inputSize:W="md",varient:V="outline",id:z,error:c,...m},R)=>{const C=f.useId(),_=z||C;return r.jsxs("div",{className:a(e.wrapper),children:[p&&r.jsx("label",{htmlFor:_,className:a(e.label,e[u]),children:p}),r.jsx("div",{className:a(e.inputWrapper,e[V],e[u],m.disabled&&e.disabled),children:r.jsx("input",{ref:R,id:_,className:a(e.input,e[W]),...m})}),c&&r.jsx("p",{className:e.errorMessage,children:c})]})});d.displayName="Input";d.__docgenInfo={description:"",methods:[],displayName:"Input",props:{label:{required:!1,tsType:{name:"string"},description:""},labelSize:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},varient:{required:!1,tsType:{name:"union",raw:'"outline" | "filled" | "fullished"',elements:[{name:"literal",value:'"outline"'},{name:"literal",value:'"filled"'},{name:"literal",value:'"fullished"'}]},description:"",defaultValue:{value:'"outline"',computed:!1}},inputSize:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},id:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}},composes:["Omit"]};const ae={title:"Components/Input",component:d,tags:["autodocs"],args:{placeholder:"placeholder"},argTypes:{inputSize:{control:{type:"radio"},options:["xs","sm","md","lg"]}}},s={},l={args:{varient:"outline"}},t={args:{varient:"filled"}},i={args:{varient:"fullished"}},n={args:{label:"이메일",placeholder:"이메일을 입력하세요",error:"이메일 형식이 올바르지 않습니다"}},o={args:{label:"비밀번호",placeholder:"비밀번호를 입력하세요",disabled:!0}};var g,v,h;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(h=(v=s.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var b,x,y;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    varient: "outline"
  }
}`,...(y=(x=l.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var w,I,S;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    varient: "filled"
  }
}`,...(S=(I=t.parameters)==null?void 0:I.docs)==null?void 0:S.source}}};var T,j,q;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    varient: "fullished"
  }
}`,...(q=(j=i.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var N,E,F;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: "이메일",
    placeholder: "이메일을 입력하세요",
    error: "이메일 형식이 올바르지 않습니다"
  }
}`,...(F=(E=n.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var D,M,O;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: "비밀번호",
    placeholder: "비밀번호를 입력하세요",
    disabled: true
  }
}`,...(O=(M=o.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};const se=["Default","Outline","Filled","Fullished","Error","Disabled"];export{s as Default,o as Disabled,n as Error,t as Filled,i as Fullished,l as Outline,se as __namedExportsOrder,ae as default};
