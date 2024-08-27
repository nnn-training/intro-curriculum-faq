(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[574],{1752:function(e,t,n){e.exports=n(6286)},9783:function(e,t){"use strict";var n,r;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{PrefetchKind:function(){return n},ACTION_REFRESH:function(){return o},ACTION_NAVIGATE:function(){return u},ACTION_RESTORE:function(){return l},ACTION_SERVER_PATCH:function(){return f},ACTION_PREFETCH:function(){return a},ACTION_FAST_REFRESH:function(){return i},ACTION_SERVER_ACTION:function(){return c}});let o="refresh",u="navigate",l="restore",f="server-patch",a="prefetch",i="fast-refresh",c="server-action";(r=n||(n={})).AUTO="auto",r.FULL="full",r.TEMPORARY="temporary",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},358:function(e,t,n){"use strict";function getDomainLocale(e,t,n,r){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return getDomainLocale}}),n(4005),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2994:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return _}});let r=n(8754),o=r._(n(7294)),u=n(6722),l=n(4812),f=n(7822),a=n(9938),i=n(5017),c=n(5734),s=n(8503),d=n(7549),p=n(358),h=n(1417),y=n(9783),b=new Set;function prefetch(e,t,n,r,o,u){if(!u&&!(0,l.isLocalURL)(t))return;if(!r.bypassPrefetchedCheck){let o=void 0!==r.locale?r.locale:"locale"in e?e.locale:void 0,u=t+"%"+n+"%"+o;if(b.has(u))return;b.add(u)}let f=u?e.prefetch(t,o):e.prefetch(t,n,r);Promise.resolve(f).catch(e=>{})}function formatStringOrUrl(e){return"string"==typeof e?e:(0,f.formatUrl)(e)}let v=o.default.forwardRef(function(e,t){let n,r;let{href:f,as:b,children:v,prefetch:_=null,passHref:g,replace:O,shallow:m,scroll:C,locale:E,onClick:P,onMouseEnter:T,onTouchStart:j,legacyBehavior:M=!1,...R}=e;n=v,M&&("string"==typeof n||"number"==typeof n)&&(n=o.default.createElement("a",null,n));let A=o.default.useContext(c.RouterContext),I=o.default.useContext(s.AppRouterContext),k=null!=A?A:I,L=!A,S=!1!==_,x=null===_?y.PrefetchKind.AUTO:y.PrefetchKind.FULL,{href:N,as:U}=o.default.useMemo(()=>{if(!A){let e=formatStringOrUrl(f);return{href:e,as:b?formatStringOrUrl(b):e}}let[e,t]=(0,u.resolveHref)(A,f,!0);return{href:e,as:b?(0,u.resolveHref)(A,b):t||e}},[A,f,b]),w=o.default.useRef(N),K=o.default.useRef(U);M&&(r=o.default.Children.only(n));let D=M?r&&"object"==typeof r&&r.ref:t,[F,H,V]=(0,d.useIntersection)({rootMargin:"200px"}),q=o.default.useCallback(e=>{(K.current!==U||w.current!==N)&&(V(),K.current=U,w.current=N),F(e),D&&("function"==typeof D?D(e):"object"==typeof D&&(D.current=e))},[U,D,N,V,F]);o.default.useEffect(()=>{k&&H&&S&&prefetch(k,N,U,{locale:E},{kind:x},L)},[U,N,H,E,S,null==A?void 0:A.locale,k,L,x]);let z={ref:q,onClick(e){M||"function"!=typeof P||P(e),M&&r.props&&"function"==typeof r.props.onClick&&r.props.onClick(e),k&&!e.defaultPrevented&&function(e,t,n,r,u,f,a,i,c,s){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let t=e.currentTarget,n=t.getAttribute("target");return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!c&&!(0,l.isLocalURL)(n)))return;e.preventDefault();let navigate=()=>{let e=null==a||a;"beforePopState"in t?t[u?"replace":"push"](n,r,{shallow:f,locale:i,scroll:e}):t[u?"replace":"push"](r||n,{forceOptimisticNavigation:!s,scroll:e})};c?o.default.startTransition(navigate):navigate()}(e,k,N,U,O,m,C,E,L,S)},onMouseEnter(e){M||"function"!=typeof T||T(e),M&&r.props&&"function"==typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),k&&(S||!L)&&prefetch(k,N,U,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:x},L)},onTouchStart(e){M||"function"!=typeof j||j(e),M&&r.props&&"function"==typeof r.props.onTouchStart&&r.props.onTouchStart(e),k&&(S||!L)&&prefetch(k,N,U,{locale:E,priority:!0,bypassPrefetchedCheck:!0},{kind:x},L)}};if((0,a.isAbsoluteUrl)(U))z.href=U;else if(!M||g||"a"===r.type&&!("href"in r.props)){let e=void 0!==E?E:null==A?void 0:A.locale,t=(null==A?void 0:A.isLocaleDomain)&&(0,p.getDomainLocale)(U,e,null==A?void 0:A.locales,null==A?void 0:A.domainLocales);z.href=t||(0,h.addBasePath)((0,i.addLocale)(U,e,null==A?void 0:A.defaultLocale))}return M?o.default.cloneElement(r,z):o.default.createElement("a",{...R,...z},n)}),_=v;("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7549:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return useIntersection}});let r=n(7294),o=n(517),u="function"==typeof IntersectionObserver,l=new Map,f=[];function useIntersection(e){let{rootRef:t,rootMargin:n,disabled:a}=e,i=a||!u,[c,s]=(0,r.useState)(!1),d=(0,r.useRef)(null),p=(0,r.useCallback)(e=>{d.current=e},[]);(0,r.useEffect)(()=>{if(u){if(i||c)return;let e=d.current;if(e&&e.tagName){let r=function(e,t,n){let{id:r,observer:o,elements:u}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},r=f.find(e=>e.root===n.root&&e.margin===n.margin);if(r&&(t=l.get(r)))return t;let o=new Map,u=new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:u,elements:o},f.push(n),l.set(n,t),t}(n);return u.set(e,t),o.observe(e),function(){if(u.delete(e),o.unobserve(e),0===u.size){o.disconnect(),l.delete(r);let e=f.findIndex(e=>e.root===r.root&&e.margin===r.margin);e>-1&&f.splice(e,1)}}}(e,e=>e&&s(e),{root:null==t?void 0:t.current,rootMargin:n});return r}}else if(!c){let e=(0,o.requestIdleCallback)(()=>s(!0));return()=>(0,o.cancelIdleCallback)(e)}},[i,n,t,c,d.current]);let h=(0,r.useCallback)(()=>{s(!1)},[]);return[p,c,h]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9008:function(e,t,n){e.exports=n(4605)},1664:function(e,t,n){e.exports=n(2994)}}]);