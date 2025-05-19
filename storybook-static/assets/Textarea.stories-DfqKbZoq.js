import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{r as g}from"./index-CgfFrydU.js";import{c as s}from"./cx-D-w8p2uR.js";import"./_commonjsHelpers-CqkleIqs.js";const k="_wrapper_1s81a_2",A="_label_1s81a_8",B="_xs_1s81a_13",H="_sm_1s81a_17",J="_md_1s81a_21",K="_lg_1s81a_25",P="_textareaWrapper_1s81a_29",Q="_error_1s81a_44",U="_disabled_1s81a_54",Y="_textarea_1s81a_29",Z="_fullwidth_1s81a_101",$="_errorMessage_1s81a_105",ee="_iconLeft_1s81a_111",ae="_iconRight_1s81a_116",e={wrapper:k,label:A,xs:B,sm:H,md:J,lg:K,textareaWrapper:P,error:Q,disabled:U,textarea:Y,fullwidth:Z,errorMessage:$,iconLeft:ee,iconRight:ae},r=g.forwardRef(({label:m,labelSize:E="md",textareaSize:F="md",id:G,error:c,iconLeft:p,iconRight:u,fullWidth:O,className:V,...x},X)=>{const C=g.useId(),_=G??C;return a.jsxs("div",{className:s(e.wrapper,O&&e.fullWidth,V),children:[m&&a.jsx("label",{htmlFor:_,className:s(e.label,e[E]),children:m}),a.jsxs("div",{className:s(e.textareaWrapper,c&&e.error,x.disabled&&e.disabled),children:[p&&a.jsx("span",{className:e.iconLeft,children:p}),a.jsx("textarea",{rows:1,ref:X,id:_,className:s(e.textarea,e[F]),...x}),u&&a.jsx("span",{className:e.iconRight,children:u})]}),c&&a.jsx("p",{className:e.errorMessage,children:c})]})});r.displayName="Textarea";r.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{label:{required:!1,tsType:{name:"string"},description:""},labelSize:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},textareaSize:{required:!1,tsType:{name:"union",raw:'"xs" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},id:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},iconLeft:{required:!1,tsType:{name:"ReactNode"},description:""},iconRight:{required:!1,tsType:{name:"ReactNode"},description:""},fullWidth:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""}},composes:["Omit"]};const oe={title:"Components/Textarea",component:r,tags:["autodocs"],args:{label:"아이디",placeholder:"아이디를 입력하세요"}},l={},t={render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"300px"},children:[a.jsx(r,{label:"XS",labelSize:"xs",textareaSize:"xs",placeholder:"extra small"}),a.jsx(r,{label:"SM",labelSize:"sm",textareaSize:"sm",placeholder:"small"}),a.jsx(r,{label:"MD",labelSize:"md",textareaSize:"md",placeholder:"medium"}),a.jsx(r,{label:"LG",labelSize:"lg",textareaSize:"lg",placeholder:"large"})]})},o={args:{iconLeft:"🔍",placeholder:"검색어를 입력하세요"}},i={args:{label:"이메일",placeholder:"이메일을 입력하세요",error:"이메일 형식이 올바르지 않습니다"}},n={args:{label:"비밀번호",placeholder:"비밀번호를 입력하세요",disabled:!0}},d={args:{label:"이름",placeholder:"이름을 입력하세요",fullWidth:!0}};var h,b,f;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(f=(b=l.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var S,z,T;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    width: "300px"
  }}>
      <Textarea label="XS" labelSize="xs" textareaSize="xs" placeholder="extra small" />
      <Textarea label="SM" labelSize="sm" textareaSize="sm" placeholder="small" />
      <Textarea label="MD" labelSize="md" textareaSize="md" placeholder="medium" />
      <Textarea label="LG" labelSize="lg" textareaSize="lg" placeholder="large" />
    </div>
}`,...(T=(z=t.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var y,v,j;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    iconLeft: "🔍",
    placeholder: "검색어를 입력하세요"
  }
}`,...(j=(v=o.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var w,W,N;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: "이메일",
    placeholder: "이메일을 입력하세요",
    error: "이메일 형식이 올바르지 않습니다"
  }
}`,...(N=(W=i.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var q,D,L;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: "비밀번호",
    placeholder: "비밀번호를 입력하세요",
    disabled: true
  }
}`,...(L=(D=n.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var M,R,I;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: "이름",
    placeholder: "이름을 입력하세요",
    fullWidth: true
  }
}`,...(I=(R=d.parameters)==null?void 0:R.docs)==null?void 0:I.source}}};const ie=["Default","Sizes","WithIcon","Error","Disabled","FullWidth"];export{l as Default,n as Disabled,i as Error,d as FullWidth,t as Sizes,o as WithIcon,ie as __namedExportsOrder,oe as default};
