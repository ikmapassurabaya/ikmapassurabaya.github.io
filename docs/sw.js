if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,c)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(a[t])return;let n={};const r=e=>s(e,t),d={module:{uri:t},exports:n,require:r};a[t]=Promise.all(i.map((e=>d[e]||r(e)))).then((e=>(c(...e),n)))}}define(["./workbox-588899ac"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/Nqd6qMm7JBAOhsgj5WkYT/_buildManifest.js",revision:"342e1c58731b90357338b1fa91c3c39e"},{url:"/_next/static/Nqd6qMm7JBAOhsgj5WkYT/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/289.ea988e371cfa2ade.js",revision:"ea988e371cfa2ade"},{url:"/_next/static/chunks/664-8af8765c6fed5950.js",revision:"8af8765c6fed5950"},{url:"/_next/static/chunks/675-ccede56ccdc0c3ea.js",revision:"ccede56ccdc0c3ea"},{url:"/_next/static/chunks/eabe11fc.167c1e34fa7fb9cc.js",revision:"167c1e34fa7fb9cc"},{url:"/_next/static/chunks/framework-2c79e2a64abdb08b.js",revision:"2c79e2a64abdb08b"},{url:"/_next/static/chunks/main-6f50204fe49792e6.js",revision:"6f50204fe49792e6"},{url:"/_next/static/chunks/pages/404-775b6f43cbb44b97.js",revision:"775b6f43cbb44b97"},{url:"/_next/static/chunks/pages/_app-bd6ba1e413a5371d.js",revision:"bd6ba1e413a5371d"},{url:"/_next/static/chunks/pages/_error-54de1933a164a1ff.js",revision:"54de1933a164a1ff"},{url:"/_next/static/chunks/pages/about-b9b5240ccec01a65.js",revision:"b9b5240ccec01a65"},{url:"/_next/static/chunks/pages/admin-1eb6085b0f9f6dfe.js",revision:"1eb6085b0f9f6dfe"},{url:"/_next/static/chunks/pages/admin/news/add-146857c1b1a9fa6f.js",revision:"146857c1b1a9fa6f"},{url:"/_next/static/chunks/pages/auth-7ea92a86c6ec3a90.js",revision:"7ea92a86c6ec3a90"},{url:"/_next/static/chunks/pages/auth/forget-49b59847b6c93c0d.js",revision:"49b59847b6c93c0d"},{url:"/_next/static/chunks/pages/auth/register-44819a7a6a7d44de.js",revision:"44819a7a6a7d44de"},{url:"/_next/static/chunks/pages/index-2ed711bba2db15ad.js",revision:"2ed711bba2db15ad"},{url:"/_next/static/chunks/pages/news-201fb5389eebaf23.js",revision:"201fb5389eebaf23"},{url:"/_next/static/chunks/pages/news/%5Bslug%5D-4975b9c6abb2da53.js",revision:"4975b9c6abb2da53"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-890aa55d3ac3ba30.js",revision:"890aa55d3ac3ba30"},{url:"/_next/static/css/8b54669db085020c.css",revision:"8b54669db085020c"},{url:"/_next/static/css/ac55dee4a18ab24f.css",revision:"ac55dee4a18ab24f"},{url:"/_next/static/media/404.e08720e4.png",revision:"abc7681dfe2c98e66ff778616bea56e9"},{url:"/_next/static/media/about.191bf3ee.jpg",revision:"9b6bed1e40d4822f59105846316689f0"},{url:"/_next/static/media/about.8affe5ce.png",revision:"975df224dd009abe70efed439c1b41f8"},{url:"/_next/static/media/adv.0dba50c4.png",revision:"c09c4c19d41fc1f7da97316c942fb0db"},{url:"/_next/static/media/bootstrap-icons.35e09da2.woff2",revision:"35e09da2"},{url:"/_next/static/media/bootstrap-icons.cb4c7c05.woff",revision:"cb4c7c05"},{url:"/_next/static/media/duta.6fe7ab29.jpeg",revision:"fb7ee70f2046879697204fdce8dc6ae0"},{url:"/_next/static/media/galeri-item (3).b1df7b36.jpg",revision:"11720a1be047e55d78da1def5a8b5aec"},{url:"/_next/static/media/galeri-item (4).eb6dcffb.jpeg",revision:"2b4cd05483f98903eac3968eddf241d5"},{url:"/_next/static/media/galeri-item (5).25b4b3ab.jpeg",revision:"e836495b0543ae34fba3edc908cacdc8"},{url:"/_next/static/media/galeri-item (6).2aaa70ab.jpeg",revision:"c6b88ee4d84ce6d89c77e7d4b8ef12bb"},{url:"/_next/static/media/galeri-item (7).3f82cfc1.jpeg",revision:"0d9bd75a3e728d76c6fca07fa3970009"},{url:"/_next/static/media/galeri-item (8).e0cdb988.jpeg",revision:"4acad777ddc889751158378176e3a0c6"},{url:"/_next/static/media/galeri-item (9).cb8a0ea6.jpeg",revision:"cc9360e3bc002fbf574ccaf2a64fc29c"},{url:"/_next/static/media/hero.0117e893.png",revision:"bb2216c0e4ad70eb89a982b5035916ee"},{url:"/_next/static/media/logo.dcfef68b.png",revision:"c5011f6c379ac40c068949345755a625"},{url:"/_next/static/media/noimage.20d01f9c.jpg",revision:"f6b71e69c902ce9465602b5516cb07dc"},{url:"/_next/static/media/pesona.c1c7a329.jpeg",revision:"df5935b1a312fd26f0ce9134dced9aec"},{url:"/_next/static/media/profil1.dd57654e.jpg",revision:"e27dd3006ded936e83f45e1b3484b907"},{url:"/_next/static/media/rangkaian-resepsi-puncak-satu-abad-nu-hqi.1701488a.jpg",revision:"937b8930ce30325df980220387f50620"},{url:"/_next/static/media/wafy.2202c5ef.jpg",revision:"2f40c9bea73294b636d7c4140ee25ce5"},{url:"/favicon.ico",revision:"f972378df1bbc13b5aedf9e08aec21c3"},{url:"/icon-192x192.png",revision:"feb018367c7a40af59aea84f42b331ad"},{url:"/icon-256x256.png",revision:"d7d29094027d15ca02908b863572ff0e"},{url:"/icon-384x384.png",revision:"506bbb7838514392d7da4b473418f83a"},{url:"/icon-512x512.png",revision:"f29ad840bcbbffe25894404054116f0a"},{url:"/manifest.webmanifest",revision:"03fbbc1ae6550e8a28d8c64f4347ce23"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/thirteen.svg",revision:"53f96b8290673ef9d2895908e69b2f92"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:s,state:i})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
