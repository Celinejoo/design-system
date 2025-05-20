import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c}from"./cx-D-w8p2uR.js";import{r as a}from"./index-CgfFrydU.js";import"./_commonjsHelpers-CqkleIqs.js";const f="_accordion_14e0l_1",b="_header_14e0l_6",w="_start_14e0l_19",v="_end_14e0l_22",y="_panel_14e0l_26",P="_arrow_14e0l_38",q="_open_14e0l_38",o={accordion:f,header:b,start:w,end:v,panel:y,arrow:P,open:q},h=({children:n})=>e.jsx("div",{className:c(o.accordion),children:n});h.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const I=a.createContext(null),j=()=>{const n=a.useContext(I);if(!n)throw new Error("AccordionHeader and AccordionPanel must be used within AccordionItem");return n},l=({children:n})=>{const[t,i]=a.useState(!1),r=a.useId(),p=()=>{i(R=>!R)},s=`accordion-header-${r}`,A=`accordion-panel-${r}`,N=a.useMemo(()=>({isOpen:t,toggle:p,headerId:s,panelId:A}),[t,s,A]);return e.jsx(I.Provider,{value:N,children:e.jsxs("div",{className:c(o.item),children:[" ",n]})})};l.__docgenInfo={description:"",methods:[],displayName:"AccordionItem",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const m=({children:n,align:t})=>{const{isOpen:i,toggle:r,headerId:p,panelId:s}=j();return e.jsxs("button",{id:p,className:c(o.header,o[t]),"aria-expanded":i,"aria-controls":s,onClick:r,children:[e.jsx("span",{children:n}),e.jsx("span",{className:c(o.arrow,i?o.open:""),"aria-hidden":"true",children:"▼"})]})};m.__docgenInfo={description:"",methods:[],displayName:"AccordionHeader",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},align:{required:!0,tsType:{name:"union",raw:'"start" | "end"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"end"'}]},description:""}}};const u=({children:n})=>{const{isOpen:t,headerId:i,panelId:r}=j();return e.jsx("div",{id:r,className:c(o.panel),role:"region","aria-labelledby":i,hidden:!t,children:n})};u.__docgenInfo={description:"",methods:[],displayName:"AccordionPanel",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const T={title:"Components/Accordion",component:h},d={render:()=>e.jsxs(h,{children:[e.jsxs(l,{children:[e.jsx(m,{align:"start",children:"질문"}),e.jsx(u,{children:"답변"})]}),e.jsxs(l,{children:[e.jsx(m,{align:"start",children:"질문"}),e.jsx(u,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit distinctio nesciunt hic soluta voluptatum fugiat eligendi omnis, molestiae molestias! Beatae, ex assumenda! Obcaecati minima iste pariatur neque. Dolorem, iusto libero!"})]}),e.jsxs(l,{children:[e.jsx(m,{align:"start",children:"질문"}),e.jsx(u,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit distinctio nesciunt hic soluta voluptatum fugiat eligendi omnis, molestiae molestias! Beatae, ex assumenda! Obcaecati minima iste pariatur neque. Dolorem, iusto libero!"})]})]})};var g,x,_;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Accordion>
      <AccordionItem>
        <AccordionHeader align="start">질문</AccordionHeader>
        <AccordionPanel>답변</AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader align="start">질문</AccordionHeader>
        <AccordionPanel>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          distinctio nesciunt hic soluta voluptatum fugiat eligendi omnis,
          molestiae molestias! Beatae, ex assumenda! Obcaecati minima iste
          pariatur neque. Dolorem, iusto libero!
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader align="start">질문</AccordionHeader>
        <AccordionPanel>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          distinctio nesciunt hic soluta voluptatum fugiat eligendi omnis,
          molestiae molestias! Beatae, ex assumenda! Obcaecati minima iste
          pariatur neque. Dolorem, iusto libero!
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
}`,...(_=(x=d.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};const B=["Default"];export{d as Default,B as __namedExportsOrder,T as default};
