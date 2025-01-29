"use strict";(self.webpackChunkreact_wordpress=self.webpackChunkreact_wordpress||[]).push([[462],{1181:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h});var n=r(4467),a=r(467),l=r(296),s=r(4756),o=r.n(s),i=r(6540),c=r(3112),m=r(5419),u=r(5666),p=r(1904);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,n.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const x=function(e){var t=e.user,r=e.updateAction,n=e.State,a=e.setState,s=(0,i.useState)(!1),o=(0,l.A)(s,2),u=o[0],d=o[1],x=(0,i.useContext)(c.ib),f=(0,i.useContext)(c.Hi);return i.createElement("div",{className:"flex items-center  space-x-4 h-10 "},!u&&i.createElement("div",{className:"flex items-center w-full gap-x-2"},i.createElement("p",{className:"text-light text-xs 2xl:text-sm font-medium"},x.manage_points.birthday,": "),i.createElement("span",{className:"text-dark text-xs 2xl:text-sm font-semibold"},null==t.birthday_date?x.common.dash_character:t.birthday_date_display_format)),u?i.createElement("div",{className:"flex items-center gap-x-1 2xl:gap-x-2 "},i.createElement(p.A,{type:"date",value:null===t.birthday_date?"":t.birthday_date,max:(0,m.pp)(new Date),others:"h-8 ",onChange:function(e){return a(_(_({},n),{},{user:_(_({},n.user),{},{birthday_date:e.target.value})}))},onKeyDown:function(e){return e.preventDefault()}}),i.createElement("div",{className:"flex items-center space-x-1 2xl:space-x-2  "},i.createElement("div",{onClick:function(e){e.preventDefault(),r(),d(!1)},className:"flex items-center justify-center h-8   w-8  bg-primary rounded text-white cursor-pointer"},i.createElement("i",{className:" wlr wlrf-tick text-center color-important font-bold text-sm 2xl:text-xl  leading-0  "})),i.createElement("div",{onClick:function(e){e.preventDefault(),d(!1)},className:"flex items-center justify-center rounded bg-light_border h-8   w-8   cursor-pointer"},i.createElement("i",{className:"  text-center wlr wlrf-close color-important font-bold text-xl text-light leading-0  "})))):i.createElement("div",null,f&&i.createElement("i",{className:"wlr wlrf-edit cursor-pointer text-xs 2xl:text-lg  text-light font-medium  ",title:"edit",onClick:function(){d(!0)}})))};var f=r(5024),b=r(6968),g=r(8592);function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){(0,n.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const h=function(e){var t,r,n=e.State,s=e.setState,p=e.updateAction,d=e.localState,_=i.useContext(c.ib),w=i.useState(!1),h=(0,l.A)(w,2),y=h[0],E=h[1],O=i.useContext(c.DC).appState,j=function(){var e=(0,a.A)(o().mark((function e(){var t,r,a,l;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t={action:"wlr_admin_enable_email_sent",wlr_nonce:O.local.common.wlr_common_user_nonce,email:n.user.user_email}).is_allow_send_email="1"===n.user.is_allow_send_email.toString()?"0":"1",e.next=4,(0,b.MB)(t);case 4:r=e.sent,!0===(a=(0,m.xu)(r.data)).success&&null!==a.data?((l=v({},n)).user.is_allow_send_email="1"===n.user.is_allow_send_email.toString()?"0":"1",s(l),alertify.success(a.data.message)):!1===a.success&&null!==a.data&&alertify.error(a.data.message);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=(0,a.A)(o().mark((function e(){var t,r,a,l;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={action:"wlr_admin_toggle_banned_user",wlr_nonce:O.local.common.wlr_common_user_nonce,email:n.user.user_email,user_id:n.user.id},"0"===n.user.is_banned_user?t.is_banned_user="1":t.is_banned_user="0",e.next=4,(0,b.MB)(t);case 4:r=e.sent,!0===(a=(0,m.xu)(r.data)).success&&null!==a.data?((l=v({},n)).user.is_banned_user="1"===n.user.is_banned_user.toString()?"0":"1",s(l),alertify.success(a.data.message)):!1===a.success&&null!==a.data&&alertify.error(a.data.message);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return i.createElement("div",{className:"w-full flex flex-col gap-y-1 2xl:gap-y-2 shadow-card bg-white rounded-lg  p-3 "},i.createElement("div",{className:"flex items-center justify-start gap-x-2 lg:gap-x-3 w-full "},i.createElement("div",{className:"text-primary p-4 rounded-md  bg-primary_extra_light"},i.createElement("i",{className:"wlr wlrf-customer font-medium text-4xl "})),i.createElement("div",{className:"flex flex-col items-start gap-y-1 text-dark w-full"},i.createElement("div",{className:"flex items-center justify-between w-full"},i.createElement("p",{title:n.user.user_email,className:"font-normal text-sm 2xl:text-md w-[144px] 2xl:w-[250px]  whitespace-nowrap overflow-hidden  overflow-ellipsis text-dark"},n.user.user_email)),i.createElement(x,{State:n,setState:s,updateAction:p,user:n.user}),i.createElement("div",{className:"flex items-center gap-x-1 2xl:gap-x-2 w-full justify-between"},i.createElement("p",{className:"text-light text-xs 2xl:text-sm font-medium"},_.common.enable_send_email),i.createElement(f.A,{height:"h-3",width:"w-3",containerWidth:"w-8",containerHeight:"h-4",active:"1"===(null===(t=n.user)||void 0===t?void 0:t.is_allow_send_email.toString()),click:function(){var e,t;(0,g.fp)(j,"1"===(null===(e=n.user)||void 0===e?void 0:e.is_allow_send_email.toString())?_.common.op_tout_email_popup_message:_.common.op_tin_email_popup_message,"1"===(null===(t=n.user)||void 0===t?void 0:t.is_allow_send_email.toString())?_.common.op_tout_email_popup_ok_button_text:_.common.op_tin_email_popup_ok_button_text,_.common.leave_popup_cancel_button_text,_.common.op_tin_email_popup_title)}})),i.createElement("div",{className:"flex items-center gap-x-1 2xl:gap-x-2 w-full justify-between"},i.createElement("p",{className:"text-light text-xs 2xl:text-sm font-medium"},_.manage_points.ban_user_text),i.createElement(f.A,{height:"h-3",width:"w-3",containerWidth:"w-8",containerHeight:"h-4",active:"1"===(null===(r=n.user)||void 0===r?void 0:r.is_banned_user.toString()),click:function(){var e,t;(0,g.fp)(N,"1"===(null===(e=n.user)||void 0===e?void 0:e.is_banned_user.toString())?_.common.unban_popup_message:_.common.ban_popup_message,"1"===(null===(t=n.user)||void 0===t?void 0:t.is_banned_user.toString())?_.common.unban_popup_ok_button_text:_.common.ban_popup_ok_button_text,_.common.leave_popup_cancel_button_text,_.common.ban_popup_title)}})))),i.createElement("div",{className:"flex items-center  gap-x-2 2xl:gap-x-3 w-full mt-2"},null!==n.user.level_data&&i.createElement("div",{className:"border border-light_border flex items-center justify-center rounded-md h-11 w-11 p-1.5"},i.createElement("img",{className:"h-8 w-8 object-contain",src:[""," ",null,void 0].includes(n.user.level_data.badge)?d.local.level_icon:n.user.level_data.badge,alt:"badge_image_preview"})),i.createElement("div",{className:"flex items-baseline justify-between p-1 w-full border-2 bg-primary_extra_light  border-light_border  rounded-md relative "},i.createElement("h5",{className:"text-xs font-medium text-dark  tracking-wider pl-3 overflow-hidden overflow-ellipsis whitespace-nowrap  w-1/2"},n.user.refer_code),i.createElement("p",{className:"text-xs  text-light font-medium absolute px-2.5 font-semibold bg-white rounded ",style:{top:"-10px",left:"10px"}},_.common.referral_code_text),i.createElement(u.A,{padding:"px-5 py-2 ",bgColor:"bg-primary",textStyle:"text-xs 2xl:text-sm  font-medium text-white",click:function(){E(!0),(0,m.rN)(n.user.referral_link)}},y?_.common.copy:_.common.copy_text))))}}}]);