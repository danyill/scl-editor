if(!self.define){let e,s={};const i=(i,c)=>(i=new URL(i+".js",c).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let o={};const d=e=>i(e,n),l={module:{uri:n},exports:o,require:d};s[n]=Promise.all(c.map((e=>l[e]||d(e)))).then((e=>(r(...e),o)))}}define(["./workbox-9f2c24b2"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"0ecce0aa.css",revision:"e597df30cf5be1ae021774fc565e5853"},{url:"3d83f781.js",revision:"9571a929179b5001bbb6456026b65749"},{url:"index.html",revision:"43307c4f5acf27dc53ce2ab041982a1a"},{url:"open-scd-core/foundation.js",revision:"68beabe3eccb62a8a8da1fb6251e984c"},{url:"open-scd-core/foundation/cyrb64.js",revision:"b3c3454430fd163996ce1bf405791659"},{url:"open-scd-core/foundation/edit-event.js",revision:"f89984de42cb3cbf5afdc2f6bc9d3b77"},{url:"open-scd-core/foundation/open-event.js",revision:"8fc5c08429cb298a1e9721810eabb0d2"},{url:"open-scd-core/locales/de.js",revision:"094d395a263056e4b6220df7194e8363"},{url:"open-scd-core/open-scd.js",revision:"2a65e810e99ca8f00b42ad9846076559"},{url:"plugins/oscd-communication/oscd-communication.js",revision:"798e46c0427eefe75179328912bb64a7"},{url:"plugins/oscd-open/oscd-open.js",revision:"b0fe18c4c1ecc3c0e6eaf61ee16ebe9e"},{url:"plugins/oscd-publisher/oscd-publisher.js",revision:"7c47daa984d7b1a0bf9677bd12510ecc"},{url:"plugins/oscd-save/oscd-save.js",revision:"c8dccd475f2bc50bdb8ee4a044a659a1"},{url:"plugins/oscd-template-generator/generate-templates.js",revision:"4e58576004ef50e993797cb774139896"},{url:"plugins/oscd-template-generator/oscd-template-generator.js",revision:"f68b86459bbd26ef0b240fd1cbbb738b"},{url:"plugins/oscd-template-generator/oscd-template-generator.spec.js",revision:"846e3dd2257a634daf4e4fe4d7f996ad"},{url:"plugins/oscd-template-generator/sw.js",revision:"ff9890474d554686471391c09ac61b69"},{url:"plugins/oscd-template-generator/workbox-088bfcc4.js",revision:"3363a5cb1a66340da9247a89ee6d9fc6"},{url:"plugins/scl-editor-landing/scl-editor-landing.js",revision:"e994d9a8e7e65c256fba535078a90885"},{url:"plugins/scl-ied-browser/scl-ied-browser.js",revision:"198634fa7dcc464e564c3669e08c488d"},{url:"plugins/scl-import-ied/scl-import-ied.js",revision:"f5f90d39c994b919871c9d58dc46341c"},{url:"plugins/scl-substation-editor/scl-substation-editor.js",revision:"c4613b1a347020584d3292e4b76c03e6"},{url:"plugins/scl-template/scl-template.js",revision:"6622024d9c633b1c68e2306c8026ac35"},{url:"plugins/scl-validating/scl-validating.js",revision:"0122f44a36f042580834baa4e893ff29"},{url:"plugins/scl-validating/xmlvalidate/worker.js",revision:"a77ab898eac9d3acc3841252aefe5f36"},{url:"plugins/scl-validating/xmlvalidate/xmlvalidate.js",revision:"13a15ca3eb50636fb4971e1ea7d664e8"},{url:"plugins/scl-wizarding/scl-wizarding.js",revision:"a5ce8e64bcd0789757d0466302202200"},{url:"plugins/subscriber-later-binding/index.deploy.html",revision:"8dda12ed7ed35b0f4dcb2e3fae1db1b5"},{url:"plugins/subscriber-later-binding/oscd-subscriber-later-binding.js",revision:"ceb77f67f026d25ef47685761a82c5f4"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html")))}));
//# sourceMappingURL=sw.js.map
