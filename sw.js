if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,i,c)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const f={uri:location.origin+r.slice(1)};return Promise.all(i.map((r=>{switch(r){case"exports":return s;case"module":return f;default:return e(r)}}))).then((e=>{const r=c(...e);return s.default||(s.default=r),s}))})))}}define("./sw.js",["./workbox-afb9f189"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.06b14e36.css",revision:"ce06a50bea2401cc49b8b60d021a4b95"},{url:"assets/index.a5d9fc41.js",revision:"d3bba98649bc0986e75507bdd4923b2f"},{url:"assets/vendor.b13cd1f3.js",revision:"af088f7c692bc2685e8ad52577698ddd"},{url:"index.html",revision:"e59663e3c6fc63c7ccb575672916372d"},{url:"favicon.svg",revision:"936832f50a032d0867d156436fc99372"},{url:"favicon.ico",revision:"35303384fe7a386eff6359fde2685c96"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"apple-touch-icon.png",revision:"8f7635b5b862111bfc5354a54a543119"},{url:"pwa-192x192.png",revision:"8dc05e6a0aa2e35d1c3dc17daa50e884"},{url:"pwa-512x512.png",revision:"0ae354e92d2a0b584e28fef4f62aa75e"},{url:"fonts/Inter.ttf",revision:"bcdd27d42b03f75c010c6ea3430c6453"},{url:"fonts/RobotoSerif.ttf",revision:"322a35e8e21eed36600a44f87c497f26"},{url:"manifest.webmanifest",revision:"a4ca7b2f335bc4ff2347bd439ebf3aa1"},{url:"assets/content/bca3e3ba-fb55-4f54-959f-a1e8134ae1eb.jpeg",revision:"6dca8881f22acbcd93550ece6d822114"},{url:"assets/content/43ada2ea-d7df-4709-8392-d1b775157a05.webp",revision:"72d90f2f6603289dc95e38d5459e4360"},{url:"assets/content/22fb6c45-5858-4a15-b221-3699c89d1df2.webp",revision:"91490bae3c9732993fa2f670d5c0eddd"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
