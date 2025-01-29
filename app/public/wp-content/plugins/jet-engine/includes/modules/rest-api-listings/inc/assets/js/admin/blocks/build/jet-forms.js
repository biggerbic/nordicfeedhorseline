(()=>{"use strict";const e=window.React,{TextControl:t,SelectControl:a,TextareaControl:n,ToggleControl:l}=wp.components,{useState:r,useEffect:o}=wp.element,{addAction:i,getFormFieldsBlocks:s,Tools:{withPlaceholder:p}}=JetFBActions,{ActionFieldsMap:c,WrapperRequiredControl:u,MacrosInserter:h}=JetFBComponents,{applyFilters:m,addFilter:d}=wp.hooks,{withRequestFields:_}=JetFBHooks,{withSelect:g}=wp.data;i("rest_api_request",g(_)((function(i){const{settings:c,label:u,help:d,source:_,onChangeSetting:g,requestFields:b,onChangeSettingObj:C}=i,[E,y]=r([]);return o((()=>{y([...s(),...b])}),[]),(0,e.createElement)(e.Fragment,null,(0,e.createElement)("div",{className:"jet-form-editor__macros-wrap"},(0,e.createElement)(n,{className:"jet-border-unset",label:u("url"),value:c.url,help:d("url"),onChange:e=>g(e,"url")}),(0,e.createElement)(h,{fields:E,onFieldClick:e=>{const t=(c.url||"")+"%"+e+"%";g(t,"url")},zIndex:1e7})),(0,e.createElement)("div",{className:"jet-form-editor__macros-wrap"},(0,e.createElement)(n,{label:u("body"),value:c.body,onChange:e=>g(e,"body")}),(0,e.createElement)(h,{fields:E,onFieldClick:e=>{const t=(c.body||"")+"%"+e+"%";g(t,"body")},zIndex:1e7})),(0,e.createElement)("p",{className:"components-base-control__help",style:{marginTop:"0px",color:"rgb(117, 117, 117)"},dangerouslySetInnerHTML:{__html:d("body")}}),(0,e.createElement)(l,{label:u("authorization"),checked:c.authorization,onChange:e=>g(e,"authorization")}),c.authorization&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(a,{label:u("auth_type"),labelPosition:"side",value:c.auth_type,onChange:e=>{g(e,"auth_type")},options:p(_.auth_types)}),"application-password"===c.auth_type&&(0,e.createElement)(e.Fragment,null,(0,e.createElement)(t,{label:u("application_pass"),help:d("application_pass"),value:c.application_pass,onChange:e=>g(e,"application_pass")})),m(`jet.engine.restapi.authorization.fields.${c.auth_type}`,(0,e.createElement)(e.Fragment,null),i)))}))),d("jet.engine.restapi.authorization.fields.rapidapi","jet-engine",(function(a,{settings:n,label:l,help:r,source:o,onChangeSetting:i}){return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(t,{label:l("rapidapi_key"),help:r("rapidapi_key"),value:n.rapidapi_key,onChange:e=>i(e,"rapidapi_key")}),(0,e.createElement)(t,{label:l("rapidapi_host"),help:r("rapidapi_host"),value:n.rapidapi_host,onChange:e=>i(e,"rapidapi_host")}))})),d("jet.engine.restapi.authorization.fields.bearer-token","jet-engine",(function(a,{settings:n,label:l,help:r,source:o,onChangeSetting:i}){return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(t,{label:l("bearer_token"),help:r("bearer_token"),value:n.bearer_token,onChange:e=>i(e,"bearer_token")}))})),d("jet.engine.restapi.authorization.fields.custom-header","jet-engine",(function(a,{settings:n,label:l,help:r,onChangeSettingObj:o}){return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(t,{label:l("custom_header_name"),help:r("custom_header_name"),value:n.custom_header_name,onChange:e=>o({custom_header_name:e})}),(0,e.createElement)(t,{label:l("custom_header_value"),help:r("custom_header_value"),value:n.custom_header_value,onChange:e=>o({custom_header_value:e})}))}))})();
//# sourceMappingURL=jet-forms.js.map