import e from"prop-types";import{MagnifyingGlassIcon as s}from"@heroicons/react/24/outline/index.js";import{useSearchParams as a}from"react-router-dom";function l({label:e,type:s="button",className:a,action:l}){return h("button",{type:s,className:`btn ${a}`,onClick:l},e)}function i({label:e,type:s="button",className:a,Icon:l,iconClassName:i,action:t}){return h("button",{type:s,className:`btn ${a}`,onClick:t},h(l,{className:`inline-block ${i}`}),e)}function t({label:e,type:s="button",className:a,Icon:l,iconClassName:i,action:t}){return h("button",{type:s,"data-tip":e,className:`tooltip btn ${a}`,onClick:t},h(l,{className:`inline-block ${i}`}))}function r({label:e,type:s="button",className:a,action:l,isProcessing:i,processingText:t="...Loading"}){return h("button",{type:s,className:`btn ${a}`,onClick:l,disabled:i},i?h(Fragment,null,h("span",{className:"loading loading-spinner"}),t):e)}function n({label:e,type:s="button",className:a,Icon:l,iconClassName:i,action:t,isProcessing:r,processingText:n="...Loading",disabled:o}){return h("button",{type:s,className:`tooltip btn ${a}`,onClick:t,disabled:r||o},r?h(Fragment,null,h("span",{className:"loading loading-spinner"}),n):h(Fragment,null,h(l,{className:`inline-block ${i}`}),e))}function o({label:e,type:s="button",className:a,Icon:l,iconClassName:i,action:t,isProcessing:r}){return h("button",{type:s,"data-tip":e,className:`tooltip btn ${a}`,onClick:t,disabled:r},r?h(Fragment,null,h("span",{className:"loading loading-spinner"})):h(l,{className:`inline-block ${i}`}))}function c({id:e,label:s,value:a,onChange:l,disabled:i,errorMessage:t}){return h("div",{className:"flex flex-col lg:flex-row items-start"},h("label",{htmlFor:e,className:"label w-44"},h("span",{className:"label-text"},s)),h("div",{className:"flex-row w-full lg:w-auto lg:grow"},h("div",{className:"flex w-full"},h("input",{id:e,type:"checkbox",checked:a,onChange:l,className:"checkbox",disabled:i})),t&&h("p",{className:"text-base text-red-500 opacity-70"},t)))}function d(){const[e,l]=a(),i=e.get("search")||"";return h("label",{className:"input input-bordered flex items-center gap-2"},h("input",{type:"text",className:"grow",placeholder:"Search",value:i,onChange:s=>{const a=new URLSearchParams(e);a.set("search",s.target.value),l(a)}}),h(s,{className:"inline-block size-5"}))}function u({id:e,label:s,type:a="text",placeholder:l="",value:i,onChange:t,disabled:r,errorMessage:n}){return h("div",{className:"flex flex-col lg:flex-row items-start"},h("label",{htmlFor:e,className:"label w-44"},h("span",{className:"label-text"},s)),h("div",{className:"flex-row w-full lg:w-auto lg:grow"},h("input",{type:a,id:e,placeholder:l,value:i,onChange:t,className:`input input-bordered input-primary w-full ${n&&"input-error"}`,disabled:r}),n&&h("p",{className:"text-base text-red-500 opacity-70"},n)))}function p({id:e,label:s,value:a,onChange:l,disabled:i,options:t,errorMessage:r}){return h("div",{className:"flex flex-col lg:flex-row items-start"},h("label",{htmlFor:e,className:"label w-44"},h("span",{className:"label-text"},s)),h("div",{className:"flex-row w-full lg:w-auto lg:grow"},h("div",{className:"flex w-full"},t.map(s=>h("span",{className:"flex items-center",key:s.id},h("input",{id:e,type:"radio",name:e,value:s.id,className:"radio radio-primary",checked:a===s.id,onChange:l,disabled:i}),h("label",{className:"label-text mx-2"},s.name)))),r&&h("p",{className:"text-base text-red-500 opacity-70"},r)))}l.propTypes={label:e.string.isRequired,type:e.string,className:e.string.isRequired,action:e.func},i.propTypes={label:e.string.isRequired,type:e.string,className:e.string.isRequired,Icon:e.elementType.isRequired,iconClassName:e.string.isRequired,action:e.func},t.propTypes={label:e.string.isRequired,type:e.string,className:e.string.isRequired,Icon:e.elementType.isRequired,iconClassName:e.string.isRequired,action:e.func},r.propTypes={label:e.string.isRequired,type:e.string,className:e.string.isRequired,action:e.func,isProcessing:e.bool.isRequired,processingText:e.string},n.propTypes={label:e.string.isRequired,type:e.string,className:e.string.isRequired,Icon:e.elementType.isRequired,iconClassName:e.string.isRequired,action:e.func,isProcessing:e.bool.isRequired,processingText:e.string,disabled:e.bool},o.propTypes={label:e.string.isRequired,type:e.string,className:e.string.isRequired,Icon:e.elementType.isRequired,iconClassName:e.string.isRequired,action:e.func,isProcessing:e.bool.isRequired},c.propTypes={id:e.string.isRequired,label:e.string.isRequired,value:e.bool.isRequired,onChange:e.func.isRequired,disabled:e.bool,errorMessage:e.string},u.propTypes={id:e.string.isRequired,label:e.string.isRequired,type:e.string,placeholder:e.string,value:e.string.isRequired,onChange:e.func.isRequired,disabled:e.bool,errorMessage:e.string};const g={id:e.oneOfType([e.string,e.number]),name:e.string.isRequired};function m({id:e,label:s,placeholder:a="Choose...",value:l,onChange:i,disabled:t,options:r,errorMessage:n}){return h("div",{className:"flex flex-col lg:flex-row items-start"},h("label",{htmlFor:e,className:"label w-44"},h("span",{className:"label-text"},s)),h("div",{className:"flex-row w-full lg:w-auto lg:grow"},h("select",{id:e,className:`select select-bordered select-primary w-full ${n&&"select-error"}`,value:l,onChange:i,disabled:t},h("option",{value:"",disabled:!0},a),r.map(e=>h("option",{key:e.id,value:`${e.id}`},e.name))),n&&h("p",{className:"text-base text-red-500 opacity-70"},n)))}p.propTypes={id:e.string.isRequired,label:e.string.isRequired,value:e.string.isRequired,onChange:e.func.isRequired,disabled:e.bool,options:e.arrayOf(e.shape(g)).isRequired,errorMessage:e.string};const b={id:e.oneOfType([e.string,e.number]),name:e.string.isRequired};function N({id:e,label:s,placeholder:a="",value:l,onChange:i,disabled:t,errorMessage:r}){return h("div",{className:"flex flex-col lg:flex-row items-start"},h("label",{htmlFor:e,className:"label w-44"},h("span",{className:"label-text"},s)),h("div",{className:"flex-row lg:w-auto lg:grow"},h("textarea",{id:e,placeholder:a,value:l,onChange:i,className:`input input-bordered input-primary w-full h-24 ${r&&"input-error"}`,disabled:t}),r&&h("p",{className:"text-base text-red-500 opacity-70"},r)))}m.propTypes={id:e.string.isRequired,label:e.string.isRequired,placeholder:e.string,value:e.string.isRequired,onChange:e.func.isRequired,disabled:e.bool,options:e.arrayOf(e.shape(b)).isRequired,errorMessage:e.string},N.propTypes={id:e.string.isRequired,label:e.string.isRequired,placeholder:e.string,value:e.string.isRequired,onChange:e.func.isRequired,disabled:e.bool,errorMessage:e.string};export{l as Button,i as ButtonIcon,t as ButtonIconOnly,r as ButtonSpinner,n as ButtonSpinnerIcon,o as ButtonSpinnerIconOnly,c as Checkbox,d as InputSearch,u as InputText,p as Radio,m as Select,N as TextArea};
//# sourceMappingURL=index.modern.js.map
