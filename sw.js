if(!self.define){let e,s={};const i=(i,d)=>(i=new URL(i+".js",d).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(d,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let r={};const o=e=>i(e,n),l={module:{uri:n},exports:r,require:o};s[n]=Promise.all(d.map((e=>l[e]||o(e)))).then((e=>(c(...e),r)))}}define(["./workbox-9f2c24b2"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"484b2e94.css",revision:"167b87640435260f9d29c57dba12288d"},{url:"95f53e19.js",revision:"9571a929179b5001bbb6456026b65749"},{url:"index.html",revision:"d22cf909060fa82e08f0c5ea36fbb52b"},{url:"open-scd-core/foundation.js",revision:"68beabe3eccb62a8a8da1fb6251e984c"},{url:"open-scd-core/foundation/cyrb64.js",revision:"b3c3454430fd163996ce1bf405791659"},{url:"open-scd-core/foundation/edit-event.js",revision:"f89984de42cb3cbf5afdc2f6bc9d3b77"},{url:"open-scd-core/foundation/open-event.js",revision:"8fc5c08429cb298a1e9721810eabb0d2"},{url:"open-scd-core/locales/de.js",revision:"094d395a263056e4b6220df7194e8363"},{url:"open-scd-core/open-scd.js",revision:"2a65e810e99ca8f00b42ad9846076559"},{url:"plugins/oscd-automatic-backup/index.deploy.html",revision:"f7855d26eb8f3701da1357613cfc69ed"},{url:"plugins/oscd-automatic-backup/oscd-automatic-backup.js",revision:"a2c0740025d5ac75a22eaaf650c8a119"},{url:"plugins/oscd-communication/oscd-communication.js",revision:"798e46c0427eefe75179328912bb64a7"},{url:"plugins/oscd-description/index.deploy.html",revision:"7d9056f30ed0ef1fa5a1ddc4edd68977"},{url:"plugins/oscd-description/oscd-description.js",revision:"9333bbf698a2f2b6bc13f5bea94968ca"},{url:"plugins/oscd-designer/icons.js",revision:"01f03d3742da1f2ee3bde5c41976d146"},{url:"plugins/oscd-designer/oscd-designer.js",revision:"3bde40f7b451b9ef2bef83197368ee8c"},{url:"plugins/oscd-designer/oscd-designer.spec.js",revision:"6aae21fe009c4231dcf8e82a215f5383"},{url:"plugins/oscd-designer/sld-editor.js",revision:"87920369293250b534988d1796aafb5b"},{url:"plugins/oscd-designer/sw.js",revision:"2f59b09df5fc01fd71a7c78835498a5b"},{url:"plugins/oscd-designer/util.js",revision:"8bacd4c029c4f5da35d3835d24c976eb"},{url:"plugins/oscd-designer/workbox-088bfcc4.js",revision:"3363a5cb1a66340da9247a89ee6d9fc6"},{url:"plugins/oscd-import-templates/index.deploy.html",revision:"bf166212b21f68b7f6adea6f91eec154"},{url:"plugins/oscd-import-templates/oscd-import-templates.js",revision:"1d1ffc38f8e28bd25b9b5c488cd47851"},{url:"plugins/oscd-network-config/index.deploy.html",revision:"b45f566a384e108a739bf8260e51cfcb"},{url:"plugins/oscd-network-config/oscd-network-config.js",revision:"2738ff1084b2158af91a18ddca900a46"},{url:"plugins/oscd-network-data/index.deploy.html",revision:"cd3a6422b8dd5fd6a429c4591cd81df7"},{url:"plugins/oscd-network-data/oscd-network-data.js",revision:"c34ae81e98fad32f229a13dbe040f605"},{url:"plugins/oscd-open/oscd-open.js",revision:"b0fe18c4c1ecc3c0e6eaf61ee16ebe9e"},{url:"plugins/oscd-publisher/oscd-publisher.js",revision:"a29e6d0919b0a009aa556a800cd90406"},{url:"plugins/oscd-rename-ieds/index.deploy.html",revision:"88efba8a12952e66d2a8df0dded5c402"},{url:"plugins/oscd-rename-ieds/oscd-rename-ieds.js",revision:"9dfc3bdd0ec0f56a606324bbb65b0944"},{url:"plugins/oscd-save/oscd-save.js",revision:"c8dccd475f2bc50bdb8ee4a044a659a1"},{url:"plugins/oscd-subscriber-later-binding/index.deploy.html",revision:"32c84be8f81bef2261585637a98d1020"},{url:"plugins/oscd-subscriber-later-binding/oscd-subscriber-later-binding.js",revision:"da067f6fc1c452294697e0e7a606705c"},{url:"plugins/oscd-subscriber-lb-nr/index.deploy.html",revision:"1baaac9df80b089718fd5437e25abc9b"},{url:"plugins/oscd-subscriber-lb-nr/oscd-subscriber-lb-nr.js",revision:"9f24788f849f3ee9e4bb32af7dd70ec1"},{url:"plugins/oscd-subscriber-lb-sel/index.deploy.html",revision:"7d8e63c8a2ff5042328a8233990bd73c"},{url:"plugins/oscd-subscriber-lb-sel/oscd-subscriber-lb-sel.js",revision:"803d057a3f1447fcc9a0786e3f1bbe81"},{url:"plugins/oscd-subscriber-lb-siemens/index.deploy.html",revision:"cf8144496e99ec2af3e30bd49291b6a1"},{url:"plugins/oscd-subscriber-lb-siemens/oscd-subscriber-lb-siemens.js",revision:"ba08cd8f09a2be7c4ae1266eeab33b86"},{url:"plugins/oscd-supervision/index.deploy.html",revision:"92b712c4f8d17cebd530ccc0fb67211e"},{url:"plugins/oscd-supervision/oscd-supervision.js",revision:"683d73d564714c87397fcebb44d480aa"},{url:"plugins/oscd-template-generator/generate-templates.js",revision:"4e58576004ef50e993797cb774139896"},{url:"plugins/oscd-template-generator/oscd-template-generator.js",revision:"f68b86459bbd26ef0b240fd1cbbb738b"},{url:"plugins/oscd-template-generator/oscd-template-generator.spec.js",revision:"846e3dd2257a634daf4e4fe4d7f996ad"},{url:"plugins/oscd-template-generator/sw.js",revision:"ff9890474d554686471391c09ac61b69"},{url:"plugins/oscd-template-generator/workbox-088bfcc4.js",revision:"3363a5cb1a66340da9247a89ee6d9fc6"},{url:"plugins/oscd-tp-multicast-naming/index.deploy.html",revision:"1b109348394f842dd9069802552fa55e"},{url:"plugins/oscd-tp-multicast-naming/oscd-tp-multicast-naming.js",revision:"f1298efc69ff9823f74b9ee09060f56f"},{url:"plugins/scl-editor-landing/scl-editor-landing.js",revision:"e994d9a8e7e65c256fba535078a90885"},{url:"plugins/scl-import-ied/scl-import-ied.js",revision:"8c7fda944e8ea5df6bbe82d845cfafb3"},{url:"plugins/scl-substation-editor/scl-substation-editor.js",revision:"fa679bebe86eb89f18ccfe92e25182f1"},{url:"plugins/scl-template/scl-template.js",revision:"d582f53f1e1561614e6c7e7a55c028d5"},{url:"plugins/scl-validating/scl-validating.js",revision:"0122f44a36f042580834baa4e893ff29"},{url:"plugins/scl-validating/xmlvalidate/worker.js",revision:"a77ab898eac9d3acc3841252aefe5f36"},{url:"plugins/scl-validating/xmlvalidate/xmlvalidate.js",revision:"13a15ca3eb50636fb4971e1ea7d664e8"},{url:"plugins/scl-wizarding/scl-wizarding.js",revision:"619ab9eb67f20304295e7ce33bc7d17e"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html")))}));
//# sourceMappingURL=sw.js.map
