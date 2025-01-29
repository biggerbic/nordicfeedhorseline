"use strict";(self.webpackChunkreact_wordpress=self.webpackChunkreact_wordpress||[]).push([[955],{6e3:(e,t,n)=>{n.d(t,{A:()=>r});var a=n(6540);const r=function(e){var t=e.width,n=void 0===t?"w-1/2":t,r=e.label,o=e.activated,c=e.click;return a.createElement("div",{className:"flex whitespace-nowrap cursor-pointer ".concat(n,"\n            transition duration-200 ease-in items-center space-x-2 px-2.5 py-3   h-11\n            ").concat(o?"border-2  border-blue_primary ":"border border-light_border ","  rounded-md bg-white"),onClick:c},a.createElement("div",{className:"flex items-center  rounded-full justify-center p-1 h-5 w-5 bg-white"},a.createElement("i",{className:" wlr wlrf-".concat(o?"tick_circle text-blue_primary":"tick_circle_2 text-light","  text-center  font-bold text-md 2xl:text-lg")})),a.createElement("p",{className:"".concat(o?"text-dark":"text-light"," overflow-hidden text-xs 2xl:text-sm font-normal")},r))}},7041:(e,t,n)=>{n.r(t),n.d(t,{default:()=>I});var a=n(3145),r=n(7800);var o=n(467),c=n(4705),l=n(296),i=n(4756),s=n.n(i),m=n(6540),d=n(3112),u=n(716),p=n(561),f=n(5935),x=n(5971),h=n(6e3),_=n(4201),b=n(3314),g=n(2591),w=n(3737),v=n(1330),y=n(1216);const E=function(e){var t=e.label,n=e.width,a=void 0===n?"w-1/2":n,r=e.value,o=e.onChange,c=e.onkeydown,l=e.type,i=e.border,s=void 0===i?"border border-card_border  focus:border-primary  focus:border-1  focus:border-opacity-100":i,d=e.error_message,u=e.error;return m.createElement("div",{className:"flex flex-col gap-y-1 ".concat(a)},m.createElement("p",{className:"text-light text-xs 2xl:text-sm font-semibold tracking-wide"},t),m.createElement("div",{className:"border border-light_border ".concat(u&&"wll_input-error","  px-2 rounded-md bg-white flex items-center space-between gap-x-3  ")},m.createElement(y.A,{type:l,value:r,onChange:o,onkeyDown:c,border:s}),m.createElement("p",{className:"text-dark font-normal ".concat(w.no.text.sm)},"px")),d&&m.createElement("div",{className:"flex items-center space-x-1"},m.createElement("i",{className:"text-md  antialiased wlr wlrf-error font-semibold text-redd color-important "}),m.createElement("p",{className:"text-redd font-semibold text-xs  tracking-wide"},d)))},k=function(e){var t=e.options,n=e.value,a=e.handleDropDownClick,r=e.label,o=e.width,c=void 0===o?"w-full":o,i=m.useState(!1),s=(0,l.A)(i,2),d=s[0],u=s[1];return m.createElement("div",{onClick:function(){return u(!d)},className:"border border-card_border relative rounded-md flex items-center h-11 justify-between 2xl:p-2 p-1.5 ".concat(c," cursor-pointer")},m.createElement("p",{className:"text-dark text-xs 2xl:text-sm font-medium tracking-wide"},r),m.createElement(g.A,{icon:"arrow-down",color:"text-dark"}),d&&m.createElement("div",{className:"flex   flex-col border rounded-lg bg-white w-full text-light border-light_border z-10 absolute top-11.5 left-0 overflow-hidden"},t.map((function(e,t){return m.createElement("p",{key:t,onClick:function(){return a(e)},className:"flex items-center  px-4 py-2 justify-between \n                                            ".concat(e.value===n?"bg-primary_extra_light text-primary":"bg-white text-dark "," \n                                            hover:bg-primary_extra_light cursor-pointer hover:bg-opacity-50")},e.label,e.value===n&&m.createElement("span",{className:"flex items-center"},m.createElement("i",{className:" wlr wlrf-tick color-important font-medium  text-lg 2xl:text-xl leading-0 cursor-pointer "})))}))))},N=function(e){var t=e.click,n=e.extraCss,a=e.title;return m.createElement("div",{className:"flex items-end cursor-pointer  justify-center px-2  rounded ".concat(n),onClick:t},m.createElement("i",{className:"wlr wlrf-delete color-important text-xl text-red-600 ",title:a}))};function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){(0,c.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const O=function(e){var t=e.updateConditionFields,n=e.key_value,a=e.item,r=e.deleteCondition,o=e.errorList,c=e.errors,i=m.useContext(d.ib),s=m.useState({operator:{value:"home_page",label:i.common.home_text},url_path:""}),u=(0,l.A)(s,2),p=u[0],f=u[1],x=[{value:"home_page",label:i.common.home_text},{value:"contains",label:i.common.contains_text},{value:"do_not_contains",label:i.common.do_not_contains_text}];return m.useEffect((function(){void 0!==a?(f(a),t(n,a)):t(n,p)}),[]),m.createElement("div",{className:"flex flex-col justify-center gap-x-2 w-full"},m.createElement("p",null,i.common.url_text),m.createElement("div",{className:"flex items-start w-full gap-x-2 relative"},m.createElement(k,{width:"".concat("home_page"===p.operator.value?"w-[85%]":"w-1/2"),options:x,label:p.operator.label,value:p.operator.value,handleDropDownClick:function(e){var a=j({},p);a.operator=e,f(a),t(n,a)}}),["contains","do_not_contains"].includes(p.operator.value)&&m.createElement(_.A,{onChange:function(e){var a=j({},p);a.url_path=e.target.value,f(a),t(n,a)},value:p.url_path,width:"w-1/3",gap:!1,error:o.includes("launcher.show_conditions.".concat(n,".url_path")),error_message:o.includes("launcher.show_conditions.".concat(n,".url_path"))&&(0,w.u1)(c,"launcher.show_conditions.".concat(n,".url_path"))}),m.createElement(N,{title:i.common.delete_text,extraCss:"absolute right-0 bottom-0",click:function(){return r(n)}})))};var C=n(1202);const S=function(e){var t=e.Icon,n=e.click,a=e.label,r=e.textColor;return m.createElement("div",{onClick:n,className:"flex items-center gap-x-1"},m.createElement("span",null,t),m.createElement("span",{className:" ".concat(r," text-xs 2xl:text-sm font-semibold ")},a))};function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){(0,c.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const I=function(){var e,t,n=m.useContext(d.ib),c=m.useContext(d.DC),i=c.appState,y=c.commonState,k=c.setCommonState,N=y.design,A=y.launcher,j=N.colors,P=m.useState(!0),I=(0,l.A)(P,2),F=I[0],L=I[1],M=m.useState(y.launcher.appearance.icon.icon),z=(0,l.A)(M,2),H=z[0],R=z[1],T=m.useState(!1),G=(0,l.A)(T,2),J=G[0],U=G[1],X=m.useState(A.font_family),Z=(0,l.A)(X,2),q=(Z[0],Z[1]),B=m.useState([]),K=(0,l.A)(B,2),Q=K[0],V=K[1],W=m.useState({}),Y=(0,l.A)(W,2),$=Y[0],ee=Y[1],te=m.useState([]),ne=(0,l.A)(te,2),ae=(ne[0],ne[1]),re=function(e){var t=D({},y);t.launcher.placement.position=e,k(t)},oe=function(e,t){var n=D({},y);n.launcher.placement[t]=e.target.value,k(n)},ce=function(){var e=(0,o.A)(s().mark((function e(){var t,n,a,r,o,c=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>0&&void 0!==c[0]?c[0]:i.settings_nonce,n={action:"wll_launcher_settings",wll_nonce:t},e.next=4,(0,f.M)(n);case 4:a=e.sent,!0===(r=(0,w.xu)(a.data)).success&&null!==r.data&&r.data!=={}?(o=D(D({},y),{},{launcher:D(D({},A),r.data.launcher)}),k(o),pe(o.launcher.show_conditions),L(!1)):!1===r.success&&null!==r.data&&((0,w.O6)(r.data.message,!1),L(!1));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),le=function(e){var t=D({},y);t.launcher.appearance.selected=e,k(t)},ie=function(e){var t=D({},y);t.launcher.view_option=e,k(t)},se=function(e){var t=D({},y);t.launcher.appearance.icon.selected=e,k(t)},me=function(){var e=(0,o.A)(s().mark((function e(){var t,a,r,o,c,l,m=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=m.length>0&&void 0!==m[0]?m[0]:i.launcher_nonce,a=m.length>1?m[1]:void 0,r=m.length>2?m[2]:void 0,(o={action:"wll_launcher_save_launcher",wll_nonce:t}).launcher=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),e.next=7,(0,f.M)(o);case 7:c=e.sent,!0===(l=(0,w.xu)(c.data)).success&&null!=l.data&&l.data!=={}?((0,w.O6)(a?n.common.reset_message:l.data.message),V([])):!1===l.success&&null!==l.data&&(ee(l.data),(0,w.E0)(l.data,{setErrorList:V}));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),de=function(e,t){var n=D({},y);n.launcher.show_conditions[e]=t,k(n)},ue=function(e){var t=y.launcher.show_conditions;t.splice(e,1);var n=D({},y);n.launcher.show_conditions=t,k(n),pe(t)},pe=function(e){var t=[];e.map((function(e,n){t.push(e)})),ae(t)};return m.useEffect((function(){void 0!==y.launcher.show_conditions&&pe(y.launcher.show_conditions)}),[y.launcher.show_conditions]),m.useEffect((function(){ce()}),[]),F?m.createElement(u.A,null):m.createElement("div",{className:" w-full flex flex-col gap-y-2 items-start h-full"},m.createElement(p.A,{title:n.popup_button.title,resetAction:function(){var e=D({},y);e.launcher=D(D({},A),{},{appearance:{selected:"icon_with_text",text:"My Rewards",icon:{selected:"default",image:"",icon:"gift"}},placement:{position:"right",side_spacing:0,bottom_spacing:0},font_family:"inherit",view_option:"mobile_and_desktop",show_conditions:[],condition_relationship:"and"}),(0,w.ZX)((function(){k(e),me(i.launcher_nonce,!0,e.launcher)}),n.common.confirm_description,n.common.ok_text,n.common.cancel_text,n.common.confirm_title)},saveAction:function(){return me(i.launcher_nonce,!1,A)}}),m.createElement("div",{className:"flex gap-x-6 items-start w-full h-[590px]"},m.createElement("div",{className:"2xl:w-[30%] w-[40%] h-full flex flex-col border border-card_border rounded-xl"},m.createElement("div",{className:"bg-primary_extra_light  border border-t-0 border-r-0 border-l-0 rounded-t-xl border-b-card_border"},m.createElement("p",{className:"text-dark text-md font-medium tracking-wide px-2.5 2xl:px-4 py-3 "},n.popup_button.edit_launcher)),m.createElement("div",{className:"flex flex-col w-full h-[520px] overflow-y-auto "},m.createElement(x.A,{title:n.popup_button.appearance_text},m.createElement("p",{className:"text-light text-xs 2xl:text-sm font-semibold tracking-wider"},n.common.visibility),m.createElement("div",{className:"flex w-full gap-4 items-center"},m.createElement(h.A,{label:n.popup_button.icon_with_text,activated:"icon_with_text"===A.appearance.selected,click:function(){return le("icon_with_text")}}),m.createElement(h.A,{label:n.popup_button.icon_only,activated:"icon_only"===A.appearance.selected,click:function(){return le("icon_only")}})),m.createElement("div",{className:"flex  mr-4  items-center"},m.createElement(h.A,{label:n.popup_button.text_only,activated:"text_only"===A.appearance.selected,click:function(){return le("text_only")}})),m.createElement("p",{className:"text-light text-xs 2xl:text-sm font-semibold tracking-wider"},n.common.show_launcher_condition_text),m.createElement("div",{className:"flex w-full items-center justify-between"},m.createElement("p",{className:"text-light text-xs 2xl:text-sm font-semibold tracking-wider"},n.common.conditions_text),m.createElement("div",{className:"flex items-center gap-x-2"},m.createElement(S,{textColor:"".concat("and"===A.condition_relationship?"text-blue_primary":"text-light"),label:n.common.match_all,Icon:m.createElement("i",{className:"wlr ".concat("and"===A.condition_relationship?"wlrf-radio-on":"wlrf-radio-off"," text-md ").concat("and"===A.condition_relationship?"text-blue_primary":"text-light"," font-medium ")}),click:function(){var e=D({},y);e.launcher.condition_relationship="and",k(e)}}),m.createElement(S,{textColor:"".concat("or"===A.condition_relationship?"text-blue_primary":"text-light"),label:n.common.match_any,Icon:m.createElement("i",{className:"wlr ".concat("or"===A.condition_relationship?"wlrf-radio-on":"wlrf-radio-off"," text-md ").concat("or"===A.condition_relationship?"text-blue_primary":"text-light"," font-medium ")}),click:function(){var e=D({},y);e.launcher.condition_relationship="or",k(e)}}))),m.createElement("div",{className:"flex flex-col  w-full gap-2   "},A.show_conditions.map((function(e,t){return m.createElement(O,{key:(t+A.show_conditions.length)*A.show_conditions.length,key_value:t,item:e,updateConditionFields:de,deleteCondition:ue,errors:$,errorList:Q})})),m.createElement("div",{className:"flex w-full items-center justify-end mt-2"},m.createElement(C.A,{click:function(){var e,t=function(e){if(Array.isArray(e))return(0,a.A)(e)}(e=A.show_conditions)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,r.A)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();t.push({operator:{value:"home_page",label:"Home Page"},url_path:""});var n=D({},y);n.launcher.show_conditions=t,k(n)},padding:"py-1 px-2",icon:m.createElement("i",{className:"wlr wlrf-add-circle text-xl font-medium "})},n.common.add_condition_text))),m.createElement(_.A,{label:n.common.text,value:A.appearance.text,onChange:function(e){return function(e){var t=D({},y);t.launcher.appearance.text=e.target.value,k(t)}(e)},error:Q.includes("launcher.appearance.text"),error_message:Q.includes("launcher.appearance.text")&&(0,w.u1)($,"launcher.appearance.text")}),m.createElement("p",{className:"text-light text-xs 2xl:text-sm font-semibold tracking-wider"},n.common.font_family),m.createElement("div",{onClick:function(){return U(!J)},className:"border border-card_border relative rounded-md flex items-center h-11 justify-between 2xl:p-2 p-1.5"},m.createElement("p",{className:"text-dark text-xs 2xl:text-sm font-medium tracking-wide"},(e=A.font_family,n.popup_button.font_families.filter((function(n){n.value===e&&(t=n.label)})),t)),m.createElement(g.A,{icon:"arrow-down",color:"text-dark"}),J&&m.createElement("div",{className:"flex   flex-col border rounded-lg bg-white w-full text-light border-light_border z-10 absolute top-11.5 left-0 overflow-hidden"},n.popup_button.font_families.map((function(e,t){return m.createElement("p",{key:t,onClick:function(){q(e.value);var t=D({},y);t.launcher.font_family=e.value,k(t)},className:"flex items-center  px-4 py-2 justify-between \n                                            ".concat(e.value===A.font_family?"bg-primary_extra_light text-primary":"bg-white text-dark "," \n                                            hover:bg-primary_extra_light cursor-pointer hover:bg-opacity-50")},e.label,e.value===A.font_family&&m.createElement("span",{className:"flex items-center"},m.createElement("i",{className:" wlr wlrf-tick color-important font-medium  text-lg 2xl:text-xl leading-0 cursor-pointer "})))})))),m.createElement("p",{className:"text-light text-xs 2xl:text-sm font-semibold tracking-wider"},n.common.icon),m.createElement("div",{className:"flex w-full gap-4 items-center"},m.createElement(h.A,{label:n.common.default,activated:"default"==A.appearance.icon.selected,click:function(){return se("default")}}),m.createElement(h.A,{label:n.common.upload_icon,activated:"image"==A.appearance.icon.selected,click:function(){return se("image")}})),"default"==A.appearance.icon.selected?m.createElement("div",{className:"w-full flex gap-2 justify-between "},[{name:"gift"},{name:"trophy"},{name:"badge"},{name:"star"},{name:"crown"},{name:"loyalty"}].map((function(e,t){return m.createElement("div",{key:t,onClick:function(){var t,n;t=e.name,(n=D({},y)).launcher.appearance.icon.icon=t,k(n),R(t)},className:"flex w-2/12 h-12 cursor-pointer justify-center items-center py-3 px-2.5 xl:px-3  border transition duration-200 ease-in ".concat(A.appearance.icon.icon===e.name?"border-2 border-blue_primary ":" border border-card_border"," rounded-md")},m.createElement(g.A,{icon:e.name,color:H===e.name?"text-dark":"text-light",fontSize:"2xl:text-xl text-lg "}))}))):m.createElement(b.A,{value:y.launcher.appearance.icon.image,handleChooseImage:function(){var e=wp.media({title:"Select media",multiple:!1,library:{type:"image"}});return e.on("select",(function(){e.state().get("selection").each((function(e){var t=e.attributes.url,n=D({},y);n.launcher.appearance.icon.image=t,k(n)}))})),e.open(),!1},handleRemoveImage:function(){var e=D({},y);e.launcher.appearance.icon.image="",k(e)}}),m.createElement("p",{className:"text-light text-xs 2xl:text-sm font-semibold tracking-wider"},n.common.visibility),m.createElement("div",{className:"flex w-full gap-4 items-center"},m.createElement(h.A,{label:n.common.mobile_only,activated:"mobile_only"===A.view_option,click:function(){return ie("mobile_only")},width:"w-1/2"}),m.createElement(h.A,{label:n.common.desktop_only,activated:"desktop_only"===A.view_option,click:function(){return ie("desktop_only")},width:"w-1/2"})),m.createElement("div",{className:"flex w-full gap-4 items-center"},m.createElement(h.A,{label:n.common.mobile_and_desktop,activated:"mobile_and_desktop"===A.view_option,click:function(){return ie("mobile_and_desktop")},width:"w-1/2"}),m.createElement(h.A,{label:n.common.display_none,activated:"display_none"===A.view_option,click:function(){return ie("display_none")},width:"w-1/2"}))),m.createElement(x.A,{title:n.design.placement.position.title},m.createElement("div",{className:"".concat(w.po)},m.createElement(h.A,{label:n.common.left,click:function(){return re("left")},activated:"left"===A.placement.position}),m.createElement(h.A,{label:n.common.right,click:function(){return re("right")},activated:"right"===A.placement.position}))),m.createElement(x.A,{title:n.design.placement.spacing.title},m.createElement("p",{className:"text-light 2xl:text-sm text-xs font-normal  "},n.design.placement.spacing.description),m.createElement("div",{className:"".concat(w.po)},m.createElement(E,{label:n.design.placement.spacing.side_space,value:A.placement.side_spacing,type:"number",error:Q.includes("launcher.placement.side_spacing"),error_message:Q.includes("launcher.placement.side_spacing")&&(0,w.u1)($,"launcher.placement.side_spacing"),onChange:function(e){return oe(e,"side_spacing")},border:"border-none"}),m.createElement(E,{label:n.design.placement.spacing.bottom_space,type:"number",error:Q.includes("launcher.placement.bottom_spacing"),error_message:Q.includes("launcher.placement.bottom_spacing")&&(0,w.u1)($,"launcher.placement.bottom_spacing"),onChange:function(e){return oe(e,"bottom_spacing")},value:A.placement.bottom_spacing,border:"border-none"}))))),m.createElement("div",{className:"2xl:w-[70%] w-[60%] h-[590px] flex flex-col border border-card_border rounded-xl"},m.createElement(v.A,null),m.createElement("div",{className:"flex overflow-hidden items-start ".concat("left"===A.placement.position?"justify-start":"justify-end"," w-full h-full 2xl:px-5 md:px-3 px-2 ")},m.createElement("div",{className:"flex flex-col py-3 gap-y-1  w-[300px] h-full   relative",style:"left"===A.placement.position?{left:"".concat(A.placement.side_spacing,"px"),bottom:"".concat(A.placement.bottom_spacing,"px")}:{right:"".concat(A.placement.side_spacing,"px"),bottom:"".concat(A.placement.bottom_spacing,"px")}},["mobile_and_desktop","desktop_only","mobile_only"].includes(A.view_option)&&m.createElement("div",{className:"text-white p-1.5 h-10 group cursor-pointer ".concat(function(e){switch(e){case"mobile_and_desktop":return"flex";case"mobile_only":return"lg:hidden flex";case"desktop_only":return"lg:flex hidden"}}(A.view_option),"  transition duration-200 ease-in  items-center justify-center \n                            w-10 lg:w-auto gap-x-1.5\n                              rounded-md  absolute ").concat("right"===A.placement.position&&"right-0"," bottom-1.5 "),style:{backgroundColor:"".concat(j.theme.primary),fontFamily:"".concat(A.font_family)}},["icon_with_text","icon_only","text_only"].includes(A.appearance.selected)&&m.createElement("div",{className:" rounded-md  h-8 flex  items-center justify-center group-hover:animate-swing"},"image"==A.appearance.icon.selected&&""!==A.appearance.icon.image?m.createElement("img",{alt:"image",src:A.appearance.icon.image,className:"object-contain rounded-md w-8 h-8  ".concat("text_only"===A.appearance.selected&&"block lg:hidden")}):m.createElement(g.A,{icon:"".concat(A.appearance.icon.icon),text:"2xl:text-2xl text-xl  ",width:" text-center",color:(0,w.H2)(N.colors.theme.text),show:"".concat("text_only"===A.appearance.selected&&"block lg:hidden ")})),["icon_with_text","text_only"].includes(A.appearance.selected)&&m.createElement("p",{style:{fontFamily:"".concat(A.font_family)},className:"".concat((0,w.vG)(j.theme.text)," hidden lg:block  font-bold text-18px leading-6"),dangerouslySetInnerHTML:{__html:A.appearance.text}})))))))}}}]);