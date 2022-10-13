"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[97749],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>c});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),g=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=g(t.components);return a.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),m=g(n),c=r,u=m["".concat(p,".").concat(c)]||m[c]||d[c]||i;return n?a.createElement(u,l(l({ref:e},s),{},{components:n})):a.createElement(u,l({ref:e},s))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var g=2;g<i;g++)l[g]=n[g];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73558:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"Logging-RocketMQ Plugin",keywords:["Logging","RocketMQ"],description:"Logging-RocketMQ Plugin"},l=void 0,o={unversionedId:"plugin-center/observability/logging-rocketmq",id:"version-2.4.3/plugin-center/observability/logging-rocketmq",isDocsHomePage:!1,title:"Logging-RocketMQ Plugin",description:"Logging-RocketMQ Plugin",source:"@site/versioned_docs/version-2.4.3/plugin-center/observability/logging-rocketmq.md",sourceDirName:"plugin-center/observability",slug:"/plugin-center/observability/logging-rocketmq",permalink:"/docs/2.4.3/plugin-center/observability/logging-rocketmq",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.3/plugin-center/observability/logging-rocketmq.md",version:"2.4.3",frontMatter:{title:"Logging-RocketMQ Plugin",keywords:["Logging","RocketMQ"],description:"Logging-RocketMQ Plugin"},sidebar:"version-2.4.3/tutorialSidebar",previous:{title:"Logging Plugin",permalink:"/docs/2.4.3/plugin-center/observability/logging-plugin"},next:{title:"Metrics Plugin",permalink:"/docs/2.4.3/plugin-center/observability/metrics-plugin"}},p=[{value:"Description",id:"description",children:[]},{value:"Technical Solutions",id:"technical-solutions",children:[]},{value:"Plugin Usage",id:"plugin-usage",children:[{value:"1.Add the <code>Logging-RocketMQ</code> dependency to the gateway&#39;s <code>pom.xml</code> file.",id:"1add-the-logging-rocketmq-dependency-to-the-gateways-pomxml-file",children:[]},{value:"2.In <code>shenyu-admin</code> --&gt; Basic Configuration --&gt; Plugin Management --&gt; <code>loggingRocketMQ</code>, configure the rocketMQ parameter and set it to on.",id:"2in-shenyu-admin----basic-configuration----plugin-management----loggingrocketmq-configure-the-rocketmq-parameter-and-set-it-to-on",children:[]}]},{value:"Logging information",id:"logging-information",children:[]},{value:"Consumption and display of Logging",id:"consumption-and-display-of-logging",children:[]},{value:"Panel Display",id:"panel-display",children:[]}],g={toc:p};function s(t){let{components:e,...i}=t;return(0,r.kt)("wrapper",(0,a.Z)({},g,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," The gateway receives requests from the client, forwards them to the server, and returns the server results to the client. The gateway can record the details of each request\uff0c",(0,r.kt)("br",{parentName:"p"}),"\n","The list includes: request time, request parameters, request path, response result, response status code, time consumption, upstream IP, exception information waiting.",(0,r.kt)("br",{parentName:"p"}),"\n","The Logging-RocketMQ plugin is a plugin that records access logs and sends them to the RocketMQ cluster.")),(0,r.kt)("h2",{id:"technical-solutions"},"Technical Solutions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Architecture Diagram",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{src:n(23878).Z}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Full asynchronous collection and delivery of ",(0,r.kt)("inlineCode",{parentName:"p"},"Logging")," inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Logging platform by consuming the logs in the ",(0,r.kt)("inlineCode",{parentName:"p"},"RocketMQ")," cluster for repository, and then using ",(0,r.kt)("inlineCode",{parentName:"p"},"Grafana"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Kibana")," or other visualization platform to display  "))),(0,r.kt)("h2",{id:"plugin-usage"},"Plugin Usage"),(0,r.kt)("h3",{id:"1add-the-logging-rocketmq-dependency-to-the-gateways-pomxml-file"},"1.Add the ",(0,r.kt)("inlineCode",{parentName:"h3"},"Logging-RocketMQ")," dependency to the gateway's ",(0,r.kt)("inlineCode",{parentName:"h3"},"pom.xml")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"        \x3c!--shenyu logging-rocketmq plugin start--\x3e\n        <dependency>\n          <groupId>org.apache.shenyu</groupId>\n          <artifactId>shenyu-spring-boot-starter-plugin-logging-rocketmq</artifactId>\n          <version>${project.version}</version>\n        </dependency>\n        \x3c!--shenyu logging-rocketmq plugin end--\x3e\n")),(0,r.kt)("h3",{id:"2in-shenyu-admin----basic-configuration----plugin-management----loggingrocketmq-configure-the-rocketmq-parameter-and-set-it-to-on"},"2.In ",(0,r.kt)("inlineCode",{parentName:"h3"},"shenyu-admin")," --\x3e Basic Configuration --\x3e Plugin Management --\x3e ",(0,r.kt)("inlineCode",{parentName:"h3"},"loggingRocketMQ"),", configure the rocketMQ parameter and set it to on."),(0,r.kt)("h4",{id:"21open-the-plugin-and-configure-rocketmq-configure-it-as-follows"},"2.1Open the plugin and configure rocketmq, configure it as follows."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5811).Z})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The individual configuration items are described as follows:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:"left"}),(0,r.kt)("th",{parentName:"tr",align:"left"}))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"config-item"),(0,r.kt)("td",{parentName:"tr",align:"left"},"type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"description"),(0,r.kt)("td",{parentName:"tr",align:"left"},"remarks")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"topic"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Message Queue Topics"),(0,r.kt)("td",{parentName:"tr",align:"left"},"must")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"namesrvAddr"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Message queue nameserver address"),(0,r.kt)("td",{parentName:"tr",align:"left"},"must")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"producerGroup"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Log Message Producer Group"),(0,r.kt)("td",{parentName:"tr",align:"left"},"must")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"sampleRate"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Sampling rate, range 0~1, 0: off, 0.01: acquisition 1%, 1: acquisition 100%"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Optional, default 1, all collection")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"compressAlg"),(0,r.kt)("td",{parentName:"tr",align:"left"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Compression algorithm, no compression by default, currently supports LZ4 compression"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Optional, no compression by default")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"maxResponseBody"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Ingeter"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Maximum response size, above the threshold no response will be collected"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Optional, default 512KB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"maxRequestBody"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Ingeter"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Maximum request body size, above the threshold no request body will be collected"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Optional, default 512KB")))),(0,r.kt)("p",null,"Except for topic, namesrvAddr, producerGroup, all others are optional, in most cases only these 3 items need to be configured."),(0,r.kt)("h4",{id:"22-configuring-selectors-and-rulers"},"2.2 Configuring Selectors and Rulers"),(0,r.kt)("p",null,"For detailed configuration of selectors and rules, please refer to: ",(0,r.kt)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector and rule management"),"\u3002\nIn addition sometimes a large gateway cluster corresponds to multiple applications (business), different applications (business) corresponds to different topics, related to isolation,",(0,r.kt)("br",{parentName:"p"}),"\n","then you can configure different topics (optional) and sampling rate (optional) by selector, the meaning of the configuration items as shown in the table above.",(0,r.kt)("br",{parentName:"p"}),"\n","The operation is shown below:\n",(0,r.kt)("img",{src:n(32175).Z})),(0,r.kt)("h2",{id:"logging-information"},"Logging information"),(0,r.kt)("p",null,"The fields of the captured access log are as follows.  "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field Name"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Meaning"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remarks"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"clientIp"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Client IP"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"timeLocal"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Request time string, format: yyyy-MM-dd HH:mm:ss.SSS"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"method"),(0,r.kt)("td",{parentName:"tr",align:"center"},"request method (different rpc type is not the same, http class for: get, post wait, rpc class for the interface name)"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"requestHeader"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Request header (json format)"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"responseHeader"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Response header (json format)"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"queryParams"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Request query parameters"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"requestBody"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Request Body (body of binary type will not be captured)"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"requestUri"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Request uri"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"responseBody"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Response body"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"responseContentLength"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Response body size"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"rpcType"),(0,r.kt)("td",{parentName:"tr",align:"center"},"rpc type"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"status"),(0,r.kt)("td",{parentName:"tr",align:"center"},"response status"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"upstreamIp"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Upstream (program providing the service) IP"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"upstreamResponseTime"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Time taken by the upstream (program providing the service) to respond to the request (ms ms)"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"userAgent"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Requested user agent"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"host"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The requested host"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"module"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Requested modules"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"path"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The requested path"),(0,r.kt)("td",{parentName:"tr",align:"left"}),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"traceId"),(0,r.kt)("td",{parentName:"tr",align:"center"},"Requested Link Tracking ID"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Need to access link tracking plugins, such as skywalking,zipkin"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h2",{id:"consumption-and-display-of-logging"},"Consumption and display of Logging"),(0,r.kt)("p",null,"As each logging platform has differences, such as storage available clickhouse, ElasticSearch, etc., visualization has self-developed or open source Grafana, Kibana, etc..",(0,r.kt)("br",{parentName:"p"}),"\n","Logging-RocketMQ plugin uses RocketMQ to decouple production and consumption, while outputting logs in json format,\nconsumption and visualization require users to choose different technology stacks to achieve their own situation."),(0,r.kt)("h2",{id:"panel-display"},"Panel Display"),(0,r.kt)("p",null,"Users can choose to visualize the implementation according to their own situation.",(0,r.kt)("br",{parentName:"p"}),"\n","The following shows the effect of ",(0,r.kt)("inlineCode",{parentName:"p"},"Grafana"),":",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://play.grafana.org"},"Grafana Sandbox Experience")),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(61528).Z})))}s.isMDXComponent=!0},61528:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/grafana-loki-gateway-381810a5db3b2c0640dbe3fc4b99f5f5.png"},5811:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/logging-config-en-2d08ddb2fde45effd73f6de8dcf9677c.png"},32175:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/logging-option-topic-en-98fcb4293da1c41228784a4ef4b4e22d.png"},23878:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/shenyu-agent-logging-arch-9071c054a78f807fac785e44ff908ca4.png"}}]);