import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{r as h}from"./index-CgfFrydU.js";import{c as r}from"./cx-D-w8p2uR.js";import"./_commonjsHelpers-CqkleIqs.js";const C="_wrapper_1kenl_2",A="_label_1kenl_8",B="_xs_1kenl_13",H="_sm_1kenl_17",J="_md_1kenl_21",K="_lg_1kenl_25",P="_inputWrapper_1kenl_29",Q="_error_1kenl_43",U="_disabled_1kenl_53",Y="_input_1kenl_29",Z="_fullwidth_1kenl_97",$="_errorMessage_1kenl_101",ee="_iconLeft_1kenl_107",le="_iconRight_1kenl_112",e={wrapper:C,label:A,xs:B,sm:H,md:J,lg:K,inputWrapper:P,error:Q,disabled:U,input:Y,fullwidth:Z,errorMessage:$,iconLeft:ee,iconRight:le},a=h.forwardRef(({label:p,labelSize:R="md",inputSize:E="md",id:F,error:c,iconLeft:m,iconRight:u,fullWidth:G,className:O,..._},V)=>{const X=h.useId(),g=F||X;return l.jsxs("div",{className:r(e.wrapper,G&&e.fullWidth,O),children:[p&&l.jsx("label",{htmlFor:g,className:r(e.label,e[R]),children:p}),l.jsxs("div",{className:r(e.inputWrapper,c&&e.error,_.disabled&&e.disabled),children:[m&&l.jsx("span",{className:e.iconLeft,children:m}),l.jsx("input",{ref:V,id:g,className:r(e.input,e[E]),..._}),u&&l.jsx("span",{className:e.iconRight,children:u})]}),c&&l.jsx("p",{className:e.errorMessage,children:c})]})});a.displayName="Input";a.__docgenInfo={description:"",methods:[],displayName:"Input",props:{label:{required:!1,tsType:{name:"string"},description:""},labelSize:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},inputSize:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},id:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},iconLeft:{required:!1,tsType:{name:"ReactNode"},description:""},iconRight:{required:!1,tsType:{name:"ReactNode"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}},composes:["Omit"]};const te={title:"Components/Input",component:a,tags:["autodocs"],args:{label:"아이디",placeholder:"아이디를 입력하세요"}},s={},n={render:()=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:[l.jsx(a,{label:"XS",labelSize:"xs",inputSize:"xs",placeholder:"extra small"}),l.jsx(a,{label:"SM",labelSize:"sm",inputSize:"sm",placeholder:"small"}),l.jsx(a,{label:"MD",labelSize:"md",inputSize:"md",placeholder:"medium"}),l.jsx(a,{label:"LG",labelSize:"lg",inputSize:"lg",placeholder:"large"})]})},t={args:{iconLeft:"🔍",placeholder:"검색어를 입력하세요"}},i={args:{label:"이메일",placeholder:"이메일을 입력하세요",error:"이메일 형식이 올바르지 않습니다"}},o={args:{label:"비밀번호",placeholder:"비밀번호를 입력하세요",disabled:!0}},d={args:{label:"이름",placeholder:"이름을 입력하세요",fullWidth:!0}};var b,f,x;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var S,z,y;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    width: "300px"
  }}>
      <Input label="XS" labelSize="xs" inputSize="xs" placeholder="extra small" />
      <Input label="SM" labelSize="sm" inputSize="sm" placeholder="small" />
      <Input label="MD" labelSize="md" inputSize="md" placeholder="medium" />
      <Input label="LG" labelSize="lg" inputSize="lg" placeholder="large" />
    </div>
}`,...(y=(z=n.parameters)==null?void 0:z.docs)==null?void 0:y.source}}};var v,j,k;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    iconLeft: "🔍",
    placeholder: "검색어를 입력하세요"
  }
}`,...(k=(j=t.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var I,w,W;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: "이메일",
    placeholder: "이메일을 입력하세요",
    error: "이메일 형식이 올바르지 않습니다"
  }
}`,...(W=(w=i.parameters)==null?void 0:w.docs)==null?void 0:W.source}}};var N,q,T;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: "비밀번호",
    placeholder: "비밀번호를 입력하세요",
    disabled: true
  }
}`,...(T=(q=o.parameters)==null?void 0:q.docs)==null?void 0:T.source}}};var D,L,M;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: "이름",
    placeholder: "이름을 입력하세요",
    fullWidth: true
  }
}`,...(M=(L=d.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};const ie=["Default","Sizes","WithIcon","Error","Disabled","FullWidth"];export{s as Default,o as Disabled,i as Error,d as FullWidth,n as Sizes,t as WithIcon,ie as __namedExportsOrder,te as default};
