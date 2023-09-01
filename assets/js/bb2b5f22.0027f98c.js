"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[71876],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),h=r,u=d["".concat(s,".").concat(h)]||d[h]||m[h]||i;return a?n.createElement(u,o(o({ref:t},p),{},{components:a})):n.createElement(u,o({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},49835:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const i={title:"MatchStrategy  -- analyze the design based on SPI",author:"Huihui Yin",author_title:"Apache ShenYu Contributor",tags:["SPI","Apache ShenYu"]},o=void 0,l={permalink:"/blog/SPI-SourceCode-Analysis-MatchStrategy-SPI",editUrl:"https://github.com/apache/shenyu-website/edit/main/blog/SPI-SourceCode-Analysis-MatchStrategy-SPI.md",source:"@site/blog/SPI-SourceCode-Analysis-MatchStrategy-SPI.md",title:"MatchStrategy  -- analyze the design based on SPI",description:"In most of the plugins ( such as Dubbo, gRPC,Spring-cloud, etc) of Apache Shenyu, the routingparameters are designed to support the combination of multiple conditions. In order to realize such requirements,  the parameters and behaviors are abstracted to three parts according to its SPI mechanism,  and implemented in shenyu-plugin-base  module.",date:"2023-09-01T08:50:15.139Z",formattedDate:"September 1, 2023",tags:[{label:"SPI",permalink:"/blog/tags/spi"},{label:"Apache ShenYu",permalink:"/blog/tags/apache-shen-yu"}],readingTime:4.56,truncated:!1,prevItem:{title:"Register Center Source Code Analysis of Http Register",permalink:"/blog/RegisterCenter-SourceCode-Analysis-Http-Register"},nextItem:{title:"LoadBalancer SPI Source Code Analysis",permalink:"/blog/SPI-SourceCode-Analysis-LoadBalance-SPI"}},s=[{value:"MatchStrategy",id:"matchstrategy",children:[]},{value:"MatchStrategy Interface",id:"matchstrategy-interface",children:[]},{value:"AbstractMatchStrategy",id:"abstractmatchstrategy",children:[]},{value:"Implementation class and profile",id:"implementation-class-and-profile",children:[{value:"AndMatchStrategy-  \u201cAND\u201d relation",id:"andmatchstrategy---and-relation",children:[]}]},{value:"MatchStrategyFactory",id:"matchstrategyfactory",children:[]},{value:"How it works",id:"how-it-works",children:[]},{value:"Summary",id:"summary",children:[]}],c={toc:s},p="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(p,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In most of the ",(0,r.kt)("inlineCode",{parentName:"p"},"plugins")," ( such as ",(0,r.kt)("inlineCode",{parentName:"p"},"Dubbo"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"gRPC"),",",(0,r.kt)("inlineCode",{parentName:"p"},"Spring-cloud"),", etc) of ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache Shenyu"),", the ",(0,r.kt)("inlineCode",{parentName:"p"},"routing"),"parameters are designed to support the combination of multiple conditions. In order to realize such requirements,  the parameters and behaviors are abstracted to three parts according to its ",(0,r.kt)("inlineCode",{parentName:"p"},"SPI")," mechanism,  and implemented in ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"shenyu-plugin-base")),"  module."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ParameterData"),"-parameters"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PredictJudge"),"-predicate"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MatchStrategy"),"-matching strategy")),(0,r.kt)("p",null,"Relatively speaking, the ",(0,r.kt)("inlineCode",{parentName:"p"},"MatchStrategy")," is the part that needs the least extension points. For the combined judgement of multiple conditions, the common selection rules are: All conditions are matched, at least one is matched, at least the first is met, or most of conditions  satisfied.  As we will  need to handle various types of parameters, for example: ",(0,r.kt)("inlineCode",{parentName:"p"},"IP"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"header"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"uri"),", etc. "),(0,r.kt)("p",null,"How to make the ",(0,r.kt)("inlineCode",{parentName:"p"},"MatchStrategy")," to be simple to use and extensible?"),(0,r.kt)("h2",{id:"matchstrategy"},"MatchStrategy"),(0,r.kt)("p",null,"The implementation of ",(0,r.kt)("inlineCode",{parentName:"p"},"MatchStrategy")," is in ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"shenyu-plugin-base"))," module. It is based on the SPI creation mechanism, and has used factory pattern and strategy design pattern. The class diagram of ",(0,r.kt)("inlineCode",{parentName:"p"},"MatchStrategy")," ",(0,r.kt)("inlineCode",{parentName:"p"},"is")," showed as follows."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"MatchStrategy-class-diagram",src:a(94078).Z})),(0,r.kt)("p",null,"Based on the interface ",(0,r.kt)("inlineCode",{parentName:"p"},"MatchStrategy")," we design the implementation classes, and the  abstract class ",(0,r.kt)("inlineCode",{parentName:"p"},"AbstractMatchStrategy")," supplies common method, while the factory class ",(0,r.kt)("inlineCode",{parentName:"p"},"MatchStrategyFactory")," provides creation  functions."),(0,r.kt)("h2",{id:"matchstrategy-interface"},"MatchStrategy Interface"),(0,r.kt)("p",null,"First, let's look at the ",(0,r.kt)("inlineCode",{parentName:"p"},"MatchStrategy")," ",(0,r.kt)("inlineCode",{parentName:"p"},"SPI")," interface"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@SPI\npublic interface MatchStrategy {\n\n    Boolean match(List<ConditionData> conditionDataList, ServerWebExchange exchange);\n}\n")),(0,r.kt)("p",null,"The annotation ",(0,r.kt)("inlineCode",{parentName:"p"},"@SPI")," means that this is an ",(0,r.kt)("inlineCode",{parentName:"p"},"SPI")," interface. Where ",(0,r.kt)("inlineCode",{parentName:"p"},"ServerWebExchange")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"org.springframework.web.server.ServerWebExchange"),", represents the request-response  interactive content of HTTP. Following is the code of ",(0,r.kt)("inlineCode",{parentName:"p"},"ConditionData"),", the more detail about this class can refer to ",(0,r.kt)("a",{parentName:"p",href:"https://shenyu.apache.org/blog/SPI-SourceCode-Analysis-PredicateJudge-SPI/"},"code analysis")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"PredicteJudge")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class ConditionData {\n\n    private String paramType;\n    private String operator;\n\n    private String paramName;\n    private String paramValue;\n}\n")),(0,r.kt)("h2",{id:"abstractmatchstrategy"},"AbstractMatchStrategy"),(0,r.kt)("p",null,"Second, let's look at the abstract class ",(0,r.kt)("inlineCode",{parentName:"p"},"AbstractMatchStrategy"),"\uff0cit has defined a ",(0,r.kt)("inlineCode",{parentName:"p"},"buildRealData"),"  method\uff0cIn this method it wraps various parameters to a unified interface through the functionality of ",(0,r.kt)("inlineCode",{parentName:"p"},"ParameterDataFactory"),",  which is the factory class of ",(0,r.kt)("inlineCode",{parentName:"p"},"ParameterData"),". It supports a variety of types of  parameters , such as ",(0,r.kt)("inlineCode",{parentName:"p"},"Ip"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Cookie"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Header"),",",(0,r.kt)("inlineCode",{parentName:"p"},"uri"),", etc.  Modifications of such parameters will not impact the calling of matching rules of ",(0,r.kt)("inlineCode",{parentName:"p"},"MatchStrategy"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public abstract class AbstractMatchStrategy {\n\n    public String buildRealData(final ConditionData condition, final ServerWebExchange exchange) {\n        return ParameterDataFactory.builderData(condition.getParamType(), condition.getParamName(), exchange);\n    }\n}\n")),(0,r.kt)("h2",{id:"implementation-class-and-profile"},"Implementation class and profile"),(0,r.kt)("p",null,"Now, let's look at the two implementation class based on the above interface in  ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"shenyu-plugin-base"))," module , that is:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"AndMatchStrategy"),"- ",(0,r.kt)("inlineCode",{parentName:"p"},"AND")," -All conditions are matched")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"OrMatchStrategy"),"-   ",(0,r.kt)("inlineCode",{parentName:"p"},"OR")," -at least one is match"),(0,r.kt)("p",{parentName:"li"},"The properties file containing the SPI implementation is shown as follows, which located at the ",(0,r.kt)("inlineCode",{parentName:"p"},"SHENYU_DIRECTORY"),"directory. When starting up, the top-level SPI classes will read the key-value and  load the classes and cache them."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"and=org.apache.shenyu.plugin.base.condition.strategy.AndMatchStrategy\nor=org.apache.shenyu.plugin.base.condition.strategy.OrMatchStrategy\n")),(0,r.kt)("p",null,"These two implementation classes inherit ",(0,r.kt)("inlineCode",{parentName:"p"},"AbstractMatchStrategy")," class and implement ",(0,r.kt)("inlineCode",{parentName:"p"},"MatchStrategy")," interface."),(0,r.kt)("h3",{id:"andmatchstrategy---and-relation"},"AndMatchStrategy-  \u201cAND\u201d relation"),(0,r.kt)("p",null,"Since the ",(0,r.kt)("inlineCode",{parentName:"p"},"PredicateJudge")," interface can encapsulate different variety of Predicates , for example  EqualsPredicateJudge, EndsWithPredicateJudge and so on, the ",(0,r.kt)("inlineCode",{parentName:"p"},"ConditionData")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ParamData")," passed to it can present with variety of parameters, for treating of multiple conditions. So using",(0,r.kt)("inlineCode",{parentName:"p"},"stream")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"lambda"),' expression, it can be very simple and efficient to process "AND" logic (all conditions must be matched).'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Join\npublic class AndMatchStrategy extends AbstractMatchStrategy implements MatchStrategy {\n\n    @Override\n    public Boolean match(final List<ConditionData> conditionDataList, final ServerWebExchange exchange) {\n        return conditionDataList\n                .stream()\n                .allMatch(condition -> PredicateJudgeFactory.judge(condition, buildRealData(condition, exchange)));\n    }\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"OrMatchStrategy"),' similarly implements the "OR" logic- at least one is match.'),(0,r.kt)("h2",{id:"matchstrategyfactory"},"MatchStrategyFactory"),(0,r.kt)("p",null,"This is the factory class of ",(0,r.kt)("inlineCode",{parentName:"p"},"MatchStrategy"),"\uff0cthere are  two methods,  one is ",(0,r.kt)("inlineCode",{parentName:"p"},"newInstance()"),", which will return the ",(0,r.kt)("inlineCode",{parentName:"p"},"MatchStrategy")," implementation class instance cached by the ",(0,r.kt)("inlineCode",{parentName:"p"},"SPI")," ",(0,r.kt)("inlineCode",{parentName:"p"},"ExtensionLoader")," indexed by the key-value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    public static MatchStrategy newInstance(final Integer strategy) {\n        String matchMode = MatchModeEnum.getMatchModeByCode(strategy);\n        return ExtensionLoader.getExtensionLoader(MatchStrategy.class).getJoin(matchMode);\n    }\n")),(0,r.kt)("p",null,"the ",(0,r.kt)("inlineCode",{parentName:"p"},"matchMode"),' will be the name of strategy, the value will be "and" or "or". The ',(0,r.kt)("inlineCode",{parentName:"p"},"MatchModeEnum")," defines the code and name of match strategy as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'AND(0, "and"), \nOR(1, "or");\n')),(0,r.kt)("p",null,"Another method is ",(0,r.kt)("inlineCode",{parentName:"p"},"match()")," method, which will invoke the ",(0,r.kt)("inlineCode",{parentName:"p"},"match()")," method of  implementation class. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    public static boolean match(final Integer strategy, final List<ConditionData> conditionDataList, final ServerWebExchange exchange) {\n        return newInstance(strategy).match(conditionDataList, exchange);\n    }\n")),(0,r.kt)("h2",{id:"how-it-works"},"How it works"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"AbstractShenyuPlugin")," is the base class of ",(0,r.kt)("inlineCode",{parentName:"p"},"plugins")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-plugin")," module. In this class two selection method are defined: ",(0,r.kt)("inlineCode",{parentName:"p"},"filterSelector()")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"filterRule()")," , Both of them call the  ",(0,r.kt)("inlineCode",{parentName:"p"},"match()")," method of ",(0,r.kt)("inlineCode",{parentName:"p"},"MatchStrategyFactory"),". The code  of ",(0,r.kt)("inlineCode",{parentName:"p"},"filterSelector()")," is shown as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    private Boolean filterSelector(final SelectorData selector, final ServerWebExchange exchange) {\n        if (selector.getType() == SelectorTypeEnum.CUSTOM_FLOW.getCode()) {\n            if (CollectionUtils.isEmpty(selector.getConditionList())) {\n                return false;\n            }\n            return MatchStrategyFactory.match(selector.getMatchMode(), selector.getConditionList(), exchange);\n        }\n        return true;\n    }\n")),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"filterSelector"),"() method, after validation of  the ",(0,r.kt)("inlineCode",{parentName:"p"},"SelectorData"),", calls the ",(0,r.kt)("inlineCode",{parentName:"p"},"match")," method of ",(0,r.kt)("inlineCode",{parentName:"p"},"MatchStrategyFactory"),", and then this factory class will invokes the ",(0,r.kt)("inlineCode",{parentName:"p"},"match")," method of corresponding implementation class. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    private Boolean filterRule(final RuleData ruleData, final ServerWebExchange exchange) {\n        return ruleData.getEnabled() && MatchStrategyFactory.match(ruleData.getMatchMode(), ruleData.getConditionDataList(), exchange);\n    }\n")),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"filterRule()")," it is also calls the  ",(0,r.kt)("inlineCode",{parentName:"p"},"match()")," method of ",(0,r.kt)("inlineCode",{parentName:"p"},"MatchStrategyFactory"),".  Does it look particularly concise or even simple?  In the ",(0,r.kt)("a",{parentName:"p",href:"https://shenyu.apache.org/blog/SPI-SourceCode-Analysis-PredicateJudge-SPI/"},"code analysis")," of  ",(0,r.kt)("inlineCode",{parentName:"p"},"PredicteJudge")," , you can  see more detail about parameter processing in ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-plugin"),"."),(0,r.kt)("h2",{id:"summary"},"Summary"),(0,r.kt)("p",null,"Due to the use of  ",(0,r.kt)("inlineCode",{parentName:"p"},"SPI")," mechanism of ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache Shenyu"),", the parameter selection module has the characteristic of loose coupling and extensibility. In terms of  the combination of multiple conditions, ",(0,r.kt)("inlineCode",{parentName:"p"},"MatchStrategy")," provides a good design.  Although currently only two implementation classes are present, it can be easily used to develop more complex ",(0,r.kt)("inlineCode",{parentName:"p"},"MatchStrategy"),' rules in the future,  such as "',(0,r.kt)("inlineCode",{parentName:"p"},"firstOf"),'"-first condition must matched, or "',(0,r.kt)("inlineCode",{parentName:"p"},"mostOf"),'"- most of the conditions must be matched, etc.'),(0,r.kt)("p",null,"Interested readers can read the source code of ",(0,r.kt)("inlineCode",{parentName:"p"},"'shenyu-plugin'")," to learn more."))}d.isMDXComponent=!0},94078:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/MatchStrategy-class-diagram-ac006eef5089ce92a972e039b431100b.PNG"}}]);