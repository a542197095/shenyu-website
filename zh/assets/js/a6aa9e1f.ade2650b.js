"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[93089,79039],{99257:(e,t,a)=>{a.d(t,{Z:()=>d});var l=a(67294),n=a(86010),r=a(64926),i=a(36742);const s={sidebar:"sidebar_SrOn",sidebarItemTitle:"sidebarItemTitle_jISh",categoryHeader:"categoryHeader_Xx2W",sidebarItemList:"sidebarItemList_UfcF",sidebarItem:"sidebarItem_v502",sidebarItemLink:"sidebarItemLink_yJnx",sidebarItemLinkActive:"sidebarItemLinkActive_Aygi"};var o=a(24973);function m(e){let{sidebar:t}=e;if(0===t.items.length)return null;let a={};return t.items[0].permalink.indexOf("/blog/")>-1?t.items.forEach((e=>{if(e.permalink.indexOf("-")>-1){let t=e.permalink.split("-")[0].split("/blog/")[1];a[t]?a[t].push(e):a[t]=[e]}})):a={"":t.items},l.createElement("nav",{className:(0,n.Z)(s.sidebar,"thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(s.sidebarItemTitle,"margin-bottom--md")},t.title),l.createElement("ul",{className:s.sidebarItemList},Object.keys(a).map(((e,t)=>l.createElement(l.Fragment,null,e.length>0&&l.createElement("h4",{key:t,className:s.categoryHeader},e),a[e].map((e=>l.createElement("li",{key:e.permalink,className:s.sidebarItem},l.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:s.sidebarItemLink,activeClassName:s.sidebarItemLinkActive},e.title)))))))))}var c=a(571);const d=function(e){const{sidebar:t,toc:a,children:i,...s}=e,o=t&&t.items.length>0;return l.createElement(r.Z,s,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},o&&l.createElement("aside",{className:"col col--3"},l.createElement(m,{sidebar:t})),l.createElement("main",{className:(0,n.Z)("col",{"col--7":o,"col--9 col--offset-1":!o})},i),a&&l.createElement("div",{className:"col col--2"},l.createElement(c.Z,{toc:a})))))}},44428:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var l=a(67294),n=a(52263),r=a(99257),i=a(43146),s=a(36742),o=a(24973);const m=function(e){const{metadata:t}=e,{previousPage:a,nextPage:n}=t;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,o.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},l.createElement("div",{className:"pagination-nav__item"},a&&l.createElement(s.Z,{className:"pagination-nav__link",to:a},l.createElement("div",{className:"pagination-nav__label"},"\xab"," ",l.createElement(o.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),l.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&l.createElement(s.Z,{className:"pagination-nav__link",to:n},l.createElement("div",{className:"pagination-nav__label"},l.createElement(o.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))};var c=a(13018);const d=function(e){const{metadata:t,items:a,sidebar:s}=e,{siteConfig:{title:o}}=(0,n.Z)(),{blogDescription:d,blogTitle:g,permalink:u}=t,b="/"===u?o:g;return l.createElement(r.Z,{title:b,description:d,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"},sidebar:s},a.map((e=>{let{content:t}=e;return l.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:t.metadata.truncated},l.createElement(t,null))})),l.createElement(m,{metadata:t}))}},43146:(e,t,a)=>{a.d(t,{Z:()=>u});var l=a(67294),n=a(86010),r=a(3905),i=a(24973),s=a(36742),o=a(13018),m=a(96845),c=a(41217),d=a(86146);const g={blogPostTitle:"blogPostTitle_d4p0",blogPostData:"blogPostData_-Im+",blogPostDetailsFull:"blogPostDetailsFull_xD8n"};const u=function(e){const t=function(){const{selectMessage:e}=(0,o.c2)();return t=>{const a=Math.ceil(t);return e(a,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{children:a,frontMatter:u,metadata:b,truncated:h,isBlogPostPage:p=!1}=e,{date:E,formattedDate:v,permalink:f,tags:_,readingTime:N,title:k,editUrl:Z}=b,{author:I,image:L,keywords:T}=u,w=u.author_url||u.authorURL,y=u.author_title||u.authorTitle,C=u.author_image_url||u.authorImageURL;return l.createElement(l.Fragment,null,l.createElement(c.Z,{keywords:T,image:L}),l.createElement("article",{className:p?void 0:"margin-bottom--xl"},(()=>{const e=p?"h1":"h2";return l.createElement("header",null,l.createElement(e,{className:g.blogPostTitle},p?k:l.createElement(s.Z,{to:f},k)),l.createElement("div",{className:(0,n.Z)(g.blogPostData,"margin-vert--md")},l.createElement("time",{dateTime:E},v),N&&l.createElement(l.Fragment,null," \xb7 ",t(N))),l.createElement("div",{className:"avatar margin-vert--md"},C&&l.createElement(s.Z,{className:"avatar__photo-link avatar__photo",href:w},l.createElement("img",{src:C,alt:I})),l.createElement("div",{className:"avatar__intro"},I&&l.createElement(l.Fragment,null,l.createElement("div",{className:"avatar__name"},l.createElement(s.Z,{href:w},I)),l.createElement("small",{className:"avatar__subtitle"},y)))))})(),l.createElement("div",{className:"markdown"},l.createElement(r.Zo,{components:m.Z},a)),(_.length>0||h)&&l.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",{[g.blogPostDetailsFull]:p})},_.length>0&&l.createElement("div",{className:"col"},l.createElement("b",null,l.createElement(i.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),_.map((e=>{let{label:t,permalink:a}=e;return l.createElement(s.Z,{key:a,className:"margin-horiz--sm",to:a},t)}))),p&&Z&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(d.Z,{editUrl:Z})),!p&&h&&l.createElement("div",{className:"col text--right"},l.createElement(s.Z,{to:b.permalink,"aria-label":`Read more about ${k}`},l.createElement("b",null,l.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},86146:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(67294),n=a(24973),r=a(87462),i=a(86010);const s="iconEdit_mS5F",o=e=>{let{className:t,...a}=e;return l.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(s,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function m(e){let{editUrl:t}=e;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},l.createElement(o,null),l.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},571:(e,t,a)=>{a.d(t,{r:()=>c,Z:()=>d});var l=a(67294),n=a(86010);const r=function(e,t,a){const[n,r]=(0,l.useState)(void 0);(0,l.useEffect)((()=>{function l(){const l=function(){const e=Array.from(document.getElementsByClassName("anchor")),t=e.find((e=>{const{top:t}=e.getBoundingClientRect();return t>=a}));if(t){if(t.getBoundingClientRect().top>=a){return e[e.indexOf(t)-1]??t}return t}return e[e.length-1]}();if(l){let a=0,i=!1;const s=document.getElementsByClassName(e);for(;a<s.length&&!i;){const e=s[a],{href:o}=e,m=decodeURIComponent(o.substring(o.indexOf("#")+1));l.id===m&&(n&&n.classList.remove(t),e.classList.add(t),r(e),i=!0),a+=1}}}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}))},i={tableOfContents:"tableOfContents_vrFS",docItemContainer:"docItemContainer_VKW9"},s="table-of-contents__link",o="table-of-contents__link--active",m=100;function c(e){let{toc:t,isChild:a}=e;return t.length?l.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:s,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(c,{isChild:!0,toc:e.children}))))):null}const d=function(e){let{toc:t}=e;return r(s,o,m),l.createElement("div",{className:(0,n.Z)(i.tableOfContents,"thin-scrollbar")},l.createElement(c,{toc:t}))}},42086:(e,t,a)=>{a.d(t,{Z:()=>r});var l=a(87462),n=a(67294);const r=e=>{let{width:t=40,height:a=20,...r}=e;return n.createElement("svg",(0,l.Z)({t:"1631348384596",className:"icon",viewBox:"0 0 1024 1024",version:"1.1"},r,{"p-id":"557",width:"20",height:"20"}),n.createElement("path",{d:"M547.797333 638.208l-104.405333-103.168 1.237333-1.28a720.170667 720.170667 0 0 0 152.490667-268.373333h120.448V183.082667h-287.744V100.906667H347.605333v82.218666H59.818667V265.386667h459.178666a648.234667 648.234667 0 0 1-130.304 219.946666 643.242667 643.242667 0 0 1-94.976-137.728H211.541333a722.048 722.048 0 0 0 122.453334 187.434667l-209.194667 206.378667 58.368 58.368 205.525333-205.525334 127.872 127.829334 31.232-83.84m231.424-208.426667h-82.218666l-184.96 493.312h82.218666l46.037334-123.306667h195.242666l46.464 123.306667h82.218667l-185.002667-493.312m-107.690666 287.744l66.56-178.005333 66.602666 178.005333z",fill:"currentColor","p-id":"558"}))}}}]);