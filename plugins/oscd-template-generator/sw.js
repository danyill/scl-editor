if(!self.define){let e,t={};const r=(r,s)=>(r=new URL(r+".js",s).href,t[r]||new Promise((t=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=t,document.head.appendChild(e)}else e=r,importScripts(r),t()})).then((()=>{let e=t[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,o)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(t[n])return;let i={};const l=e=>r(e,n),c={module:{uri:n},exports:i,require:l};t[n]=Promise.all(s.map((e=>c[e]||l(e)))).then((e=>(o(...e),i)))}}define(["./workbox-088bfcc4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"generate-templates.js",revision:"4e58576004ef50e993797cb774139896"},{url:"oscd-template-generator.js",revision:"f68b86459bbd26ef0b240fd1cbbb738b"},{url:"oscd-template-generator.spec.js",revision:"846e3dd2257a634daf4e4fe4d7f996ad"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"))),e.registerRoute("polyfills/*.js",new e.CacheFirst,"GET")}));
//# sourceMappingURL=sw.js.map