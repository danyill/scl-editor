if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,o)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let f={};const c=e=>i(e,n),t={module:{uri:n},exports:f,require:c};s[n]=Promise.all(r.map((e=>t[e]||c(e)))).then((e=>(o(...e),f)))}}define(["./workbox-088bfcc4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"__snapshots__/oscd-designer.spec.snap.js",revision:"1d56ce4c9f87a89505e97f4736f51ed3"},{url:"about.html",revision:"0a4a79bb83e2b941f15f24fc4fdc2452"},{url:"assets/about-6406e407.html",revision:"0a4a79bb83e2b941f15f24fc4fdc2452"},{url:"icons.js",revision:"543d725b186a20d6eeeb53b3f0730549"},{url:"oscd-designer.js",revision:"ea8a1dbd68f0112fd09c3ff93097737f"},{url:"oscd-designer.spec.js",revision:"64979aa0b2358bfab41b52f55566a5ac"},{url:"sld-editor.js",revision:"cb2d3be841e4fcc911941f3f0bed6340"},{url:"util.js",revision:"8c7a5ebcf0899a352e7d443e7f5a4257"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"))),e.registerRoute("polyfills/*.js",new e.CacheFirst,"GET")}));
//# sourceMappingURL=sw.js.map
