"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[92687],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,f=c["".concat(u,".").concat(d)]||c[d]||m[d]||i;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},24963:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const i={title:"2.4.1",sidebar_position:6,keywords:["release-notes"],description:"release-notes"},l="2.4.1",o={unversionedId:"2.4.1-release",id:"2.4.1-release",isDocsHomePage:!1,title:"2.4.1",description:"release-notes",source:"@site/event/2.4.1-release.md",sourceDirName:".",slug:"/2.4.1-release",permalink:"/event/2.4.1-release",editUrl:"https://github.com/apache/shenyu-website/edit/main/event/2.4.1-release.md",version:"current",lastUpdatedBy:"\u6768\u6587\u6770",lastUpdatedAt:1682347044,formattedLastUpdatedAt:"4/24/2023",sidebarPosition:6,frontMatter:{title:"2.4.1",sidebar_position:6,keywords:["release-notes"],description:"release-notes"}},u=[{value:"New Features",id:"new-features",children:[]},{value:"API Changes",id:"api-changes",children:[]},{value:"Enhancement",id:"enhancement",children:[]},{value:"Refactor",id:"refactor",children:[]},{value:"Bug Fix",id:"bug-fix",children:[]}],p={toc:u},s="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"241"},"2.4.1"),(0,a.kt)("h2",{id:"new-features"},"New Features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Support PostgreSQL for admin"),(0,a.kt)("li",{parentName:"ul"},"Support dynamic loading plugin"),(0,a.kt)("li",{parentName:"ul"},"Support local modification data mode"),(0,a.kt)("li",{parentName:"ul"},"Add Websocket plugin"),(0,a.kt)("li",{parentName:"ul"},"Add CryptorRequest plugin"),(0,a.kt)("li",{parentName:"ul"},"Add CryptorResponse plugin"),(0,a.kt)("li",{parentName:"ul"},"Support Grayscale Release for SpringCloud"),(0,a.kt)("li",{parentName:"ul"},"Support Grayscale Release for Apache Dubbo"),(0,a.kt)("li",{parentName:"ul"},"Implement the async dubbo invoking for alibaba-dubbo"),(0,a.kt)("li",{parentName:"ul"},"Support external cross filter config"),(0,a.kt)("li",{parentName:"ul"},"Support sign plugin custom dynamic sign provider")),(0,a.kt)("h2",{id:"api-changes"},"API Changes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Refactor shenyu config in yaml")),(0,a.kt)("h2",{id:"enhancement"},"Enhancement"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Optimze code about dubbo async call"),(0,a.kt)("li",{parentName:"ul"},"Add loadbalancer common module"),(0,a.kt)("li",{parentName:"ul"},"Optimize sql init"),(0,a.kt)("li",{parentName:"ul"},"Refactor Admin PageHelper to query list"),(0,a.kt)("li",{parentName:"ul"},"Optimize GlobalErrorHandler"),(0,a.kt)("li",{parentName:"ul"},"Optimize the return value of the ",(0,a.kt)("inlineCode",{parentName:"li"},"skip")," method interface of ",(0,a.kt)("inlineCode",{parentName:"li"},"ShenyuPlugin")," to boolean"),(0,a.kt)("li",{parentName:"ul"},"Optimize register rules"),(0,a.kt)("li",{parentName:"ul"},"Modify dubbo and sofa param resolve service"),(0,a.kt)("li",{parentName:"ul"},"Refactor sign plugin api"),(0,a.kt)("li",{parentName:"ul"},"Remove websocket filter")),(0,a.kt)("h2",{id:"refactor"},"Refactor"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Remove lombok dependency"),(0,a.kt)("li",{parentName:"ul"},"Remove mapstruct dependency"),(0,a.kt)("li",{parentName:"ul"},"Support JDK8 ~ JDK15"),(0,a.kt)("li",{parentName:"ul"},"Add missing plugin_handle sql for plugin motan")),(0,a.kt)("h2",{id:"bug-fix"},"Bug Fix"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fix JsonSyntaxException in jwt plugin"),(0,a.kt)("li",{parentName:"ul"},"Fix sql miss for resilience4j plugin handler"),(0,a.kt)("li",{parentName:"ul"},"Fix disruptor problem of hold event data in consume event"),(0,a.kt)("li",{parentName:"ul"},"Fix deadlock bug of HealthCheckTask"),(0,a.kt)("li",{parentName:"ul"},"Fix client retry the connection add log and increase sleep time"),(0,a.kt)("li",{parentName:"ul"},"Fix the default_group of nacos"),(0,a.kt)("li",{parentName:"ul"},"Fix maven ignore and docker entrypoint"),(0,a.kt)("li",{parentName:"ul"},"Fix admin Return password question"),(0,a.kt)("li",{parentName:"ul"},"Fix LDAP query built from user-controlled source"),(0,a.kt)("li",{parentName:"ul"},"Fix the IP address retrieval error"),(0,a.kt)("li",{parentName:"ul"},"Fix Gson toJson is null"),(0,a.kt)("li",{parentName:"ul"},"Fix the index out of range bug for context path."),(0,a.kt)("li",{parentName:"ul"},"Fix monitor init metrics label bug"),(0,a.kt)("li",{parentName:"ul"},"Fix GlobalErrorHandler error object to map bug by JacksonUtils.toMap"),(0,a.kt)("li",{parentName:"ul"},"Fix modify response plugin order bug"),(0,a.kt)("li",{parentName:"ul"},"Fix the bug of register"),(0,a.kt)("li",{parentName:"ul"},"Fix sofa plugin register metadata and parameters resolve"),(0,a.kt)("li",{parentName:"ul"},"Fix motan ,dubbo, sofa plugin metadata init bug")))}c.isMDXComponent=!0}}]);