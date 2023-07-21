"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[17767],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),h=a,f=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},45290:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={title:"\u81ea\u5b9a\u4e49Filter",description:"filter\u6269\u5c55"},l=void 0,o={unversionedId:"developer/custom-filter",id:"version-2.4.2/developer/custom-filter",isDocsHomePage:!1,title:"\u81ea\u5b9a\u4e49Filter",description:"filter\u6269\u5c55",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.2/developer/custom-filter.md",sourceDirName:"developer",slug:"/developer/custom-filter",permalink:"/zh/docs/2.4.2/developer/custom-filter",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.4.2/developer/custom-filter.md",version:"2.4.2",frontMatter:{title:"\u81ea\u5b9a\u4e49Filter",description:"filter\u6269\u5c55"},sidebar:"version-2.4.2/tutorialSidebar",previous:{title:"\u81ea\u5b9a\u4e49\u9650\u6d41\u7b56\u7565",permalink:"/zh/docs/2.4.2/developer/spi/custom-rate-limiter"},next:{title:"\u6b63\u786e\u83b7\u53d6IP\u4e0eHost",permalink:"/zh/docs/2.4.2/developer/custom-parsing-ip-and-host"}},s=[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",children:[]},{value:"\u8de8\u57df\u652f\u6301",id:"\u8de8\u57df\u652f\u6301",children:[]},{value:"\u7f51\u5173\u8fc7\u6ee4 springboot\u5065\u5eb7\u68c0\u67e5",id:"\u7f51\u5173\u8fc7\u6ee4-springboot\u5065\u5eb7\u68c0\u67e5",children:[]},{value:"\u7ee7\u627f <code>org.apache.shenyu.web.filter.AbstractWebFilter</code>",id:"\u7ee7\u627f-orgapacheshenyuwebfilterabstractwebfilter",children:[]}],c={toc:s},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u672c\u6587\u4ecb\u7ecd\u5982\u4f55\u5bf9 ",(0,a.kt)("inlineCode",{parentName:"li"},"org.springframework.web.server.WebFliter")," \u8fdb\u884c\u6269\u5c55\u3002")),(0,a.kt)("h2",{id:"\u8de8\u57df\u652f\u6301"},"\u8de8\u57df\u652f\u6301"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u65b0\u589e ",(0,a.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.web.filter.CrossFilter")," \u5b9e\u73b0 ",(0,a.kt)("inlineCode",{parentName:"li"},"WebFilter"),"\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},' public class CrossFilter implements WebFilter {\n\n     private static final String ALLOWED_HEADERS = "x-requested-with, authorization, Content-Type, Authorization, credential, X-XSRF-TOKEN,token,username,client";\n\n     private static final String ALLOWED_METHODS = "*";\n\n     private static final String ALLOWED_ORIGIN = "*";\n\n     private static final String ALLOWED_EXPOSE = "*";\n\n     private static final String MAX_AGE = "18000";\n\n     @Override\n     @SuppressWarnings("all")\n     public Mono<Void> filter(final ServerWebExchange exchange, final WebFilterChain chain) {\n         ServerHttpRequest request = exchange.getRequest();\n         if (CorsUtils.isCorsRequest(request)) {\n             ServerHttpResponse response = exchange.getResponse();\n             HttpHeaders headers = response.getHeaders();\n             headers.add("Access-Control-Allow-Origin", ALLOWED_ORIGIN);\n             headers.add("Access-Control-Allow-Methods", ALLOWED_METHODS);\n             headers.add("Access-Control-Max-Age", MAX_AGE);\n             headers.add("Access-Control-Allow-Headers", ALLOWED_HEADERS);\n             headers.add("Access-Control-Expose-Headers", ALLOWED_EXPOSE);\n             headers.add("Access-Control-Allow-Credentials", "true");\n             if (request.getMethod() == HttpMethod.OPTIONS) {\n                 response.setStatusCode(HttpStatus.OK);\n                 return Mono.empty();\n             }\n         }\n         return chain.filter(exchange);\n     }\n }\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5c06 ",(0,a.kt)("inlineCode",{parentName:"li"},"CrossFilter")," \u6ce8\u518c\u6210\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"Spring"),"\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"bean"),"\u3002")),(0,a.kt)("h2",{id:"\u7f51\u5173\u8fc7\u6ee4-springboot\u5065\u5eb7\u68c0\u67e5"},"\u7f51\u5173\u8fc7\u6ee4 springboot\u5065\u5eb7\u68c0\u67e5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6ce8\u610f\u987a\u5e8f\uff0c\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"@Order")," \u6ce8\u89e3")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Component\n@Order(-99)\npublic final class HealthFilter implements WebFilter {\n\n    private static final String[] FILTER_TAG = {"/actuator/health", "/health_check"};\n\n    @Override\n    public Mono<Void> filter(@Nullable final ServerWebExchange exchange, @Nullable final WebFilterChain chain) {\n        ServerHttpRequest request = Objects.requireNonNull(exchange).getRequest();\n        String urlPath = request.getURI().getPath();\n        for (String check : FILTER_TAG) {\n            if (check.equals(urlPath)) {\n                String result = JsonUtils.toJson(new Health.Builder().up().build());\n                DataBuffer dataBuffer = exchange.getResponse().bufferFactory().wrap(result.getBytes());\n                return exchange.getResponse().writeWith(Mono.just(dataBuffer));\n            }\n        }\n        return Objects.requireNonNull(chain).filter(exchange);\n    }\n}\n')),(0,a.kt)("h2",{id:"\u7ee7\u627f-orgapacheshenyuwebfilterabstractwebfilter"},"\u7ee7\u627f ",(0,a.kt)("inlineCode",{parentName:"h2"},"org.apache.shenyu.web.filter.AbstractWebFilter")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u65b0\u589e\u4e00\u4e2a\u7c7b\u7ee7\u627f",(0,a.kt)("inlineCode",{parentName:"li"},"AbstractWebFilter"),"\uff0c\u5e76\u5b9e\u73b0\u5b83\u7684\u4e24\u4e2a\u65b9\u6cd5\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"   /**\n     * this is Template Method ,children Implement your own filtering logic.\n     *\n     * @param exchange the current server exchange\n     * @param chain    provides a way to delegate to the next filter\n     * @return {@code Mono<Boolean>} result\uff1aTRUE (is pass)\uff0cand flow next filter\uff1bFALSE (is not pass) execute doDenyResponse(ServerWebExchange exchange)\n     */\n    protected abstract Mono<Boolean> doFilter(ServerWebExchange exchange, WebFilterChain chain);\n\n    /**\n     * this is Template Method ,children Implement your own And response client.\n     *\n     * @param exchange the current server exchange.\n     * @return {@code Mono<Void>} response msg.\n     */\n    protected abstract Mono<Void> doDenyResponse(ServerWebExchange exchange);\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"doFilter")," \u65b9\u6cd5\u8fd4\u56de ",(0,a.kt)("inlineCode",{parentName:"li"},"Mono<true>")," \u8868\u793a\u901a\u8fc7\uff0c\u53cd\u4e4b\u5219\u4e0d\u901a\u8fc7\uff0c\u4e0d\u901a\u8fc7\u7684\u65f6\u5019\uff0c\u4f1a\u8c03\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"doDenyResponse"),"\u8f93\u51fa\u76f8\u5173\u4fe1\u606f\u5230\u524d\u7aef\u3002")))}u.isMDXComponent=!0}}]);