(window.webpackJsonp=window.webpackJsonp||[]).push([[6,2],{324:function(t,e,r){t.exports=r.p+"img/busto.9aa4959.png"},332:function(t,e,r){var content=r(345);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("f8c61180",content,!0,{sourceMap:!1})},344:function(t,e,r){"use strict";r(332)},345:function(t,e,r){var l=r(19)((function(i){return i[1]}));l.push([t.i,".avatarCard[data-v-7e45118e]{background-color:#0e0e0e}.avatarId[data-v-7e45118e]{color:hsla(0,0%,54.1%,.2)}.avatarCreatedAt[data-v-7e45118e]{color:hsla(0,0%,54.1%,.3019607843)}",""]),l.locals={},t.exports=l},349:function(t,e,r){"use strict";r.r(e);var l={props:{cardSize:String,avatarImage:String,avatarImageStyles:String,avatarImageContainer:{String:String,default:""},avatarImageAlt:String,dataContainerStyles:{String:String,default:""},avatarId:String,avatarIdStyles:String,cardType:String,cardTypeStyles:String,avatarName:String,avatarNameStyles:String,date:String,dateStyles:String,position:String,shareBtnStyle:String,downloadBtnStyle:String,viewBtnStyle:String}},n=(r(344),r(6)),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"avatarCard flex rounded-20 mx-auto  ",class:[t.position,t.cardSize]},[r("div",{class:t.avatarImageContainer},[r("img",{staticClass:"busto w-full h-full object-cover",class:t.avatarImageStyles,attrs:{src:t.avatarImage,alt:t.avatarImageAlt}})]),t._v(" "),r("div",{staticClass:"flex flex-col",class:t.dataContainerStyles},[r("p",{staticClass:"avatarId justify-self-end text-right uppercase",class:t.avatarIdStyles},[t._v("\n      "+t._s(t.avatarId)+"\n    ")]),t._v(" "),r("div",{},[r("p",{staticClass:"font-bold",class:t.cardTypeStyles},[t._v(t._s(t.cardType))]),t._v(" "),r("h5",{staticClass:" font-bold",class:t.avatarNameStyles},[t._v("\n        "+t._s(t.avatarName)+"\n      ")]),t._v(" "),r("p",{staticClass:"avatarCreatedAt",class:t.dateStyles},[t._v("Created "+t._s(t.date))])]),t._v(" "),r("div",{staticClass:"flex self-end"},[r("Button",{attrs:{buttonText:"ver",btnStyle:t.viewBtnStyle}}),t._v(" "),r("Button",{attrs:{buttonText:"share",btnStyle:t.shareBtnStyle}}),t._v(" "),r("Button",{attrs:{buttonText:"download",btnStyle:t.downloadBtnStyle}})],1)])])}),[],!1,null,"7e45118e",null);e.default=component.exports;installComponents(component,{Button:r(110).default})},352:function(t,e,r){var content=r(376);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("2be3cd35",content,!0,{sourceMap:!1})},375:function(t,e,r){"use strict";r(352)},376:function(t,e,r){var l=r(19)((function(i){return i[1]}));l.push([t.i,".numberOfAvatars[data-v-a1c327c4]{font-size:18px;color:#5d5d5d}",""]),l.locals={},t.exports=l},399:function(t,e,r){"use strict";r.r(e);var l={mounted:function(){this.animateOnScroll()},methods:{animateOnScroll:function(){this.$gsap.to(".card-1",{y:-1e3,scale:.75,ease:"Power1.easeInOut",scrollTrigger:{trigger:".container",pin:!0,scrub:!0}}),this.$gsap.to(".card-0",{scale:.5,ease:"Power1.easeInOut",scrollTrigger:{trigger:".container",pin:!0,scrub:!0}}),this.$gsap.to(".card-2",{y:-2200,ease:"Power1.easeInOut",scrollTrigger:{trigger:".container",pin:!0,scrub:!0}})}}},n=(r(375),r(6)),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("section",{staticClass:"pt-[3.125rem] px-[3.875rem] h-full"},[l("p",{staticClass:"numberOfAvatars"},[t._v("Tienes 3 avatares en tu coleccion")]),t._v(" "),l("div",{staticClass:"flex flex-col h-full  bottom-0 items-center scale-[0.7] sm:scale-100"},[l("AppAvatarCard",{attrs:{cardSize:"w-[61.164rem] pb-[70px] pt-[2.688rem] pr-[2.875rem] absolute",avatarImage:r(324),avatarImageContainer:"h-[27.313rem] mx-8",avatarImageStyles:"ml-8",avatarImageAlt:"",dataContainerStyles:"w-full",avatarId:"xx20221045htf",avatarIdStyles:"mt-8 mb-[4.313rem] text-[2.625rem] leading-[2.75rem]",cardType:"Informal",cardTypeStyles:"text-[1.5rem] leading-[1.5rem]  mb-[1.313rem]",avatarName:"Mark Knowles",avatarNameStyles:"text-[3.125rem] leading-[1.5rem] mb-[1.625rem]",date:"02/05/2022",dateStyles:"mb-[7.188rem] text-[0.813rem]",position:"z-30 bottom-0 xl:-bottom-[2.8rem] scale-50 sm:scale-[0.55] md:scale-[0.40] lg:scale-[0.70]  xl:scale-[0.85] "}}),t._v(" "),l("AppAvatarCard",{attrs:{cardSize:"w-[61.164rem] pb-[70px] pt-[2.688rem] pr-[2.875rem] absolute",avatarImage:r(324),avatarImageContainer:"h-[27.313rem] mx-8",avatarImageStyles:"ml-8",avatarImageAlt:"",dataContainerStyles:"w-full",avatarId:"xx20221045htf",avatarIdStyles:"mt-8 mb-[4.313rem] text-[2.625rem] leading-[2.75rem]",cardType:"Informal",cardTypeStyles:"text-[1.5rem] leading-[1.5rem]  mb-[1.313rem]",avatarName:"Mark Knowles",avatarNameStyles:"text-[3.125rem] leading-[1.5rem] mb-[1.625rem]",date:"02/05/2022",dateStyles:"mb-[7.188rem] text-[0.813rem]",position:"bottom-24 xl:bottom-20 scale-[0.25] sm:scale-[0.40] md:scale-[0.3]  lg:scale-50 xl:scale-[0.70]  z-20 opacity-80"}}),t._v(" "),l("AppAvatarCard",{attrs:{cardSize:"w-[61.164rem] pb-[70px] pt-[2.688rem] pr-[2.875rem] absolute",avatarImage:r(324),avatarImageContainer:"h-[27.313rem] mx-8",avatarImageStyles:"ml-8",avatarImageAlt:"",dataContainerStyles:"w-full",avatarId:"xx20221045htf",avatarIdStyles:"mt-8 mb-[4.313rem] text-[2.625rem] leading-[2.75rem]",cardType:"Informal",cardTypeStyles:"text-[1.5rem] leading-[1.5rem]  mb-[1.313rem]",avatarName:"Mark Knowles",avatarNameStyles:"text-[3.125rem] leading-[1.5rem] mb-[1.625rem]",date:"02/05/2022",dateStyles:"mb-[7.188rem] text-[0.813rem]",position:"bottom-[10rem] xl:bottom-[11rem] scale-[0.15] sm:scale-[0.25] md:scale-[0.15] lg:scale-[0.25] xl:scale-50 z-10 opacity-50"}})],1)])}),[],!1,null,"a1c327c4",null);e.default=component.exports;installComponents(component,{AppAvatarCard:r(349).default})}}]);