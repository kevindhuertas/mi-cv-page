(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{5783:function(e,t,o){Promise.resolve().then(o.bind(o,2102)),Promise.resolve().then(o.bind(o,6795)),Promise.resolve().then(o.t.bind(o,2445,23)),Promise.resolve().then(o.t.bind(o,6087,23))},2102:function(e,t,o){"use strict";o.r(t),o.d(t,{LangProvider:function(){return l},useLang:function(){return s}});var r=o(7437),n=o(2265);let i={en:{contact:"Contact me",heroTitle:"Design like a pro",heroSubtitle:"Welcome! This is my portfolio page.",cards:{aboutMe:{title:"About me",modalTitle:"About me"},experience:{title:"Experience",modalTitle:"My Experience"},education:{title:"Education",modalTitle:"My Education"},personalProjects:{title:"Projects",modalTitle:"My Personal Projects"}}},es:{contact:"Cont\xe1ctame",heroTitle:"Dise\xf1a como un profesional",heroSubtitle:"\xa1Bienvenido! Esta es mi p\xe1gina de portafolio.",cards:{aboutMe:{title:"Sobre m\xed",modalTitle:"Sobre m\xed"},experience:{title:"Experiencia",modalTitle:"Mi Experiencia"},education:{title:"Educaci\xf3n",modalTitle:"Mi Educaci\xf3n"},personalProjects:{title:"Proyectos",modalTitle:"Mis Proyectos Personales"}}}},a=(0,n.createContext)({currentLanguage:"en",setCurrentLanguage:()=>{},translations:i.en}),l=e=>{let{children:t}=e,[o,l]=(0,n.useState)("en"),s="en"===o?i.en:i.es;return(0,r.jsx)(a.Provider,{value:{currentLanguage:o,setCurrentLanguage:l,translations:s},children:t})},s=()=>(0,n.useContext)(a)},6795:function(e,t,o){"use strict";o.r(t),o.d(t,{ThemeProvider:function(){return a},useTheme:function(){return l}});var r=o(7437),n=o(2265);let i=(0,n.createContext)({darkMode:!1,toggleDarkMode:()=>{}}),a=e=>{let{children:t}=e,[o,a]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{"dark"===localStorage.getItem("theme")&&(a(!0),document.documentElement.classList.add("dark"))},[]),(0,r.jsx)(i.Provider,{value:{darkMode:o,toggleDarkMode:()=>{a(!o),o?(document.documentElement.classList.remove("dark"),localStorage.setItem("theme","light")):(document.documentElement.classList.add("dark"),localStorage.setItem("theme","dark"))}},children:t})},l=()=>(0,n.useContext)(i)},2445:function(){},6087:function(e){e.exports={style:{fontFamily:"'__Inter_79e6c6', '__Inter_Fallback_79e6c6'",fontStyle:"normal"},className:"__className_79e6c6"}},622:function(e,t,o){"use strict";var r=o(2265),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,o){var r,i={},c=null,u=null;for(r in void 0!==o&&(c=""+o),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,r)&&!s.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:n,type:e,key:c,ref:u,props:i,_owner:l.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},7437:function(e,t,o){"use strict";e.exports=o(622)}},function(e){e.O(0,[971,938,744],function(){return e(e.s=5783)}),_N_E=e.O()}]);