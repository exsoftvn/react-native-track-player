"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5510],{3905:function(t,e,a){a.d(e,{Zo:function(){return k},kt:function(){return c}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),m=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},k=function(t){var e=m(t.components);return n.createElement(d.Provider,{value:e},t.children)},N={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},o=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),o=m(a),c=r,g=o["".concat(d,".").concat(c)]||o[c]||N[c]||l;return a?n.createElement(g,i(i({ref:e},k),{},{components:a})):n.createElement(g,i({ref:e},k))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=o;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}o.displayName="MDXCreateElement"},5218:function(t,e,a){a.r(e),a.d(e,{assets:function(){return k},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return p},metadata:function(){return m},toc:function(){return N}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],p={sidebar_position:5},d="Platform Support",m={unversionedId:"basics/platform-support",id:"version-3.2/basics/platform-support",title:"Platform Support",description:"Audio Sources",source:"@site/versioned_docs/version-3.2/basics/platform-support.md",sourceDirName:"basics",slug:"/basics/platform-support",permalink:"/docs/3.2/basics/platform-support",editUrl:"https://github.com/doublesymmetry/react-native-track-player/tree/main/docs/versioned_docs/version-3.2/basics/platform-support.md",tags:[],version:"3.2",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"app",previous:{title:"Background Mode",permalink:"/docs/3.2/basics/background-mode"},next:{title:"Events",permalink:"/docs/3.2/api/events"}},k={},N=[{value:"Audio Sources",id:"audio-sources",level:2},{value:"Stream Types",id:"stream-types",level:2},{value:"Casting",id:"casting",level:2},{value:"Miscellaneous",id:"miscellaneous",level:2},{value:"Functions",id:"functions",level:2},{value:"Events",id:"events",level:2}],o={toc:N};function c(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"platform-support"},"Platform Support"),(0,l.kt)("h2",{id:"audio-sources"},"Audio Sources"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Feature"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Android"),(0,l.kt)("th",{parentName:"tr",align:"center"},"iOS"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Windows"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"App bundle\xb9"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Network"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"File System\xb2"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")))),(0,l.kt)("p",null,"\xb9: Use ",(0,l.kt)("inlineCode",{parentName:"p"},"require")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"import")),(0,l.kt)("p",null,"\xb2: Prefix the file path with ",(0,l.kt)("inlineCode",{parentName:"p"},"file:///")),(0,l.kt)("h2",{id:"stream-types"},"Stream Types"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Feature"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Android"),(0,l.kt)("th",{parentName:"tr",align:"center"},"iOS"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Windows"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Regular Streams"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"DASH"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HLS"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"SmoothStreaming"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c")))),(0,l.kt)("h2",{id:"casting"},"Casting"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Feature"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Android"),(0,l.kt)("th",{parentName:"tr",align:"center"},"iOS"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Windows"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Google Cast\xb9"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Miracast/DLNA"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"AirPlay"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c")))),(0,l.kt)("p",null,"\xb9: Google Cast support has been moved to ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/react-native-kit/react-native-track-casting"},"react-native-track-casting (WIP)")," which can be used in combination with ",(0,l.kt)("inlineCode",{parentName:"p"},"react-native-track-player"),"."),(0,l.kt)("h2",{id:"miscellaneous"},"Miscellaneous"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Feature"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Android"),(0,l.kt)("th",{parentName:"tr",align:"center"},"iOS"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Windows"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Media Controls"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Caching"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Background Mode\xb9"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")))),(0,l.kt)("p",null,"\xb9: Read more in ",(0,l.kt)("a",{parentName:"p",href:"/docs/3.2/basics/background-mode"},"Background Mode")),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Function"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Android"),(0,l.kt)("th",{parentName:"tr",align:"center"},"iOS"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Windows"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"setupPlayer")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"updateOptions")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"registerPlaybackService")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"addEventListener")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"play")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pause")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"reset")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"setVolume")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"getVolume")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"setRate")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"getRate")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"seekTo")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"getPosition")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"getBufferedPosition")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"getDuration")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"getState")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"getQueue")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"getCurrentTrack")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"getTrack")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"add")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"remove")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"skip")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"skipToPrevious")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"skipToNext")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"removeUpcomingTracks")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")))),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Event"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Android"),(0,l.kt)("th",{parentName:"tr",align:"center"},"iOS"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Windows"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"remote-play")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"remote-play-id")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"remote-play-search")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"remote-pause")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"remote-stop")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"remote-skip")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"remote-next")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"remote-previous")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"remote-seek")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"remote-set-rating")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"remote-jump-forward")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"remote-jump-backward")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"remote-duck")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"playback-state")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"playback-track-changed")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"playback-queue-ended")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"playback-error")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"playback-metadata-received")),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2705"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u274c")))))}c.isMDXComponent=!0}}]);