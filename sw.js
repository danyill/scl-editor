if(!self.define){let e,s={};const i=(i,c)=>(i=new URL(i+".js",c).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let n={};const o=e=>i(e,r),l={module:{uri:r},exports:n,require:o};s[r]=Promise.all(c.map((e=>l[e]||o(e)))).then((e=>(d(...e),n)))}}define(["./workbox-9f2c24b2"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"484b2e94.css",revision:"167b87640435260f9d29c57dba12288d"},{url:"95f53e19.js",revision:"9571a929179b5001bbb6456026b65749"},{url:"index.html",revision:"d22cf909060fa82e08f0c5ea36fbb52b"},{url:"open-scd-core/foundation.js",revision:"68beabe3eccb62a8a8da1fb6251e984c"},{url:"open-scd-core/foundation/cyrb64.js",revision:"b3c3454430fd163996ce1bf405791659"},{url:"open-scd-core/foundation/edit-event.js",revision:"f89984de42cb3cbf5afdc2f6bc9d3b77"},{url:"open-scd-core/foundation/open-event.js",revision:"8fc5c08429cb298a1e9721810eabb0d2"},{url:"open-scd-core/locales/de.js",revision:"094d395a263056e4b6220df7194e8363"},{url:"open-scd-core/open-scd.js",revision:"2a65e810e99ca8f00b42ad9846076559"},{url:"plugins/oscd-automatic-backup/index.deploy.html",revision:"f7855d26eb8f3701da1357613cfc69ed"},{url:"plugins/oscd-automatic-backup/oscd-automatic-backup.js",revision:"a2c0740025d5ac75a22eaaf650c8a119"},{url:"plugins/oscd-communication/scl-communication.js",revision:"a5beee113f0cc606a9abad9174796d69"},{url:"plugins/oscd-description/index.deploy.html",revision:"7d9056f30ed0ef1fa5a1ddc4edd68977"},{url:"plugins/oscd-description/oscd-description.js",revision:"9333bbf698a2f2b6bc13f5bea94968ca"},{url:"plugins/oscd-designer/__snapshots__/oscd-designer.spec.snap.js",revision:"1d56ce4c9f87a89505e97f4736f51ed3"},{url:"plugins/oscd-designer/about.html",revision:"151c6bb02f96f55515cc3b5e737cb9de"},{url:"plugins/oscd-designer/assets/about-977b8a3b.html",revision:"151c6bb02f96f55515cc3b5e737cb9de"},{url:"plugins/oscd-designer/icons.js",revision:"543d725b186a20d6eeeb53b3f0730549"},{url:"plugins/oscd-designer/oscd-designer.js",revision:"899b83b18ecc705d9e2d91302cb4e6b6"},{url:"plugins/oscd-designer/oscd-designer.spec.js",revision:"64979aa0b2358bfab41b52f55566a5ac"},{url:"plugins/oscd-designer/sld-editor.js",revision:"9485bf4845752680409e212a60508903"},{url:"plugins/oscd-designer/sw.js",revision:"e8a2c065b496cf48e578cf43e0415f4c"},{url:"plugins/oscd-designer/util.js",revision:"d728c658543df94d189d009ae04db55c"},{url:"plugins/oscd-designer/workbox-088bfcc4.js",revision:"3363a5cb1a66340da9247a89ee6d9fc6"},{url:"plugins/oscd-import-templates/index.deploy.html",revision:"bf166212b21f68b7f6adea6f91eec154"},{url:"plugins/oscd-import-templates/oscd-import-templates.js",revision:"1d1ffc38f8e28bd25b9b5c488cd47851"},{url:"plugins/oscd-network-config/index.deploy.html",revision:"b45f566a384e108a739bf8260e51cfcb"},{url:"plugins/oscd-network-config/oscd-network-config.js",revision:"7860f3bd01b43ebdd8c6e6f408bd2b68"},{url:"plugins/oscd-network-data/index.deploy.html",revision:"cd3a6422b8dd5fd6a429c4591cd81df7"},{url:"plugins/oscd-network-data/oscd-network-data.js",revision:"82fac149f2fd7a89cb69fabb2842a558"},{url:"plugins/oscd-open/oscd-open.js",revision:"b0fe18c4c1ecc3c0e6eaf61ee16ebe9e"},{url:"plugins/oscd-publisher/oscd-publisher.js",revision:"77a785edf3c0f37aa54d96316d574219"},{url:"plugins/oscd-rename-ieds/index.deploy.html",revision:"88efba8a12952e66d2a8df0dded5c402"},{url:"plugins/oscd-rename-ieds/oscd-rename-ieds.js",revision:"08f84a035783cfc1f2b393c7f1344372"},{url:"plugins/oscd-save/oscd-save.js",revision:"c8dccd475f2bc50bdb8ee4a044a659a1"},{url:"plugins/oscd-subscriber-later-binding/index.deploy.html",revision:"32c84be8f81bef2261585637a98d1020"},{url:"plugins/oscd-subscriber-later-binding/oscd-subscriber-later-binding.js",revision:"598721cc45119ed0203142f3821e129a"},{url:"plugins/oscd-subscriber-lb-nr/index.deploy.html",revision:"1baaac9df80b089718fd5437e25abc9b"},{url:"plugins/oscd-subscriber-lb-nr/oscd-subscriber-lb-nr.js",revision:"9f24788f849f3ee9e4bb32af7dd70ec1"},{url:"plugins/oscd-subscriber-lb-sel/index.deploy.html",revision:"7d8e63c8a2ff5042328a8233990bd73c"},{url:"plugins/oscd-subscriber-lb-sel/oscd-subscriber-lb-sel.js",revision:"803d057a3f1447fcc9a0786e3f1bbe81"},{url:"plugins/oscd-subscriber-lb-siemens/index.deploy.html",revision:"cf8144496e99ec2af3e30bd49291b6a1"},{url:"plugins/oscd-subscriber-lb-siemens/oscd-subscriber-lb-siemens.js",revision:"ba08cd8f09a2be7c4ae1266eeab33b86"},{url:"plugins/oscd-supervision/index.deploy.html",revision:"92b712c4f8d17cebd530ccc0fb67211e"},{url:"plugins/oscd-supervision/oscd-supervision.js",revision:"683d73d564714c87397fcebb44d480aa"},{url:"plugins/oscd-template-generator/generate-templates.js",revision:"4e58576004ef50e993797cb774139896"},{url:"plugins/oscd-template-generator/oscd-template-generator.js",revision:"f68b86459bbd26ef0b240fd1cbbb738b"},{url:"plugins/oscd-template-generator/oscd-template-generator.spec.js",revision:"846e3dd2257a634daf4e4fe4d7f996ad"},{url:"plugins/oscd-template-generator/sw.js",revision:"ff9890474d554686471391c09ac61b69"},{url:"plugins/oscd-template-generator/workbox-088bfcc4.js",revision:"3363a5cb1a66340da9247a89ee6d9fc6"},{url:"plugins/oscd-tp-multicast-naming/index.deploy.html",revision:"1b109348394f842dd9069802552fa55e"},{url:"plugins/oscd-tp-multicast-naming/oscd-tp-multicast-naming.js",revision:"68dae8a3afc6716bf75159588633d88c"},{url:"plugins/scl-editor-landing/scl-editor-landing.js",revision:"e994d9a8e7e65c256fba535078a90885"},{url:"plugins/scl-import-ied/scl-import-ied.js",revision:"8c7fda944e8ea5df6bbe82d845cfafb3"},{url:"plugins/scl-substation-editor/scl-substation-editor.js",revision:"79271f74a5d00045f5c0e27063439e49"},{url:"plugins/scl-template/scl-template.js",revision:"038692976e13d04093292676b173a9cf"},{url:"plugins/scl-validating/scl-validating.js",revision:"6664a4a7839cb1fb931c5f029c5b087b"},{url:"plugins/scl-validating/xmlvalidate/worker.js",revision:"a77ab898eac9d3acc3841252aefe5f36"},{url:"plugins/scl-validating/xmlvalidate/xmlvalidate.js",revision:"13a15ca3eb50636fb4971e1ea7d664e8"},{url:"plugins/scl-wizarding/ace/ext-searchbox.js",revision:"c3ad58df7587107f71fc1d511624250d"},{url:"plugins/scl-wizarding/ace/mode-xml.js",revision:"9785371a49d2674f50bc4884eef35301"},{url:"plugins/scl-wizarding/ace/theme-solarized_dark.js",revision:"06f0522377bc0d70432b087bd37ffdf6"},{url:"plugins/scl-wizarding/ace/theme-solarized_light.js",revision:"e5f391ed15940217eea430074be6f6e5"},{url:"plugins/scl-wizarding/ace/worker-xml.js",revision:"1028c8cbfbf27b3242f66ea35531eaa4"},{url:"plugins/scl-wizarding/scl-wizarding.js",revision:"01730ab394e41dac5ca7719e8afb71c6"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html")))}));
//# sourceMappingURL=sw.js.map
