(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[301],{1931:function(e,t,n){Promise.resolve().then(n.bind(n,9562)),Promise.resolve().then(n.bind(n,7221)),Promise.resolve().then(n.bind(n,5924)),Promise.resolve().then(n.t.bind(n,2858,23))},5924:function(e,t,n){"use strict";n.r(t);var r=n(6006),o=n(6394),l=n.n(o);let i=e=>{var t;let{filePath:n}=e,r=(null===(t=n.split("\\").pop())||void 0===t?void 0:t.split("/").pop())||"",o=n.split(r).shift(),l=n.split(".").pop(),i=r.substring(0,r.lastIndexOf("."))||r;return{path:o,filename:i,extension:l||""}},s=function(e,t,n){var r;let o=arguments.length>3&&void 0!==arguments[3]&&arguments[3],{filename:l,path:s,extension:a}=i({filePath:e});if(!["JPG","JPEG","WEBP","PNG","AVIF","GIF"].includes(a.toUpperCase()))return e;let c=a;["JPG","JPEG","PNG","GIF"].includes(a.toUpperCase())&&(c="WEBP");let u=s,d=null===(r=u)||void 0===r?void 0:r.substr(-1);"/"!=d&&(u+="/");let C=e.includes("_next/static/media");n&&(u=n.endsWith("/")&&u&&u.startsWith("/")?n+u.slice(1):n.endsWith("/")||!u||u.startsWith("/")?n+u:n+"/"+u);let h="".concat(C?n?n+"/":"":u).concat("nextImageExportOptimizer","/").concat(l,"-opt-").concat(t,".").concat(c.toUpperCase());return o||"/"===h.charAt(0)||(h="/"+h),h},a=e=>{let t,{src:n,width:r,basePath:o}=e,l=n.replace(/^(https?|ftp):\/\//,"").replace(/[/\\:*?"<>|#%]/g,"_").replace(/[\x00-\x1F\x7F]/g,"").trim();return s(l,r,o,!0)},c=e=>{let{src:t,width:n,basePath:r}=e,o="object"==typeof t,l=o?t.src:t,i=o&&t.width||void 0;if(o&&i&&n>i){let e=[640,750,828,1080,1200,1920,2048,3840,16,32,48,64,96,128,256,384],t=null;for(let n=0;n<e.length;n++)Number(e[n])>=i&&(null===t||Number(e[n])<t)&&(t=Number(e[n]));if(null!==t)return s(l,t,r)}return l.startsWith("http")?a({src:l,width:n,basePath:r}):s(l,n,r)},u=e=>{let{src:t}=e,n="object"==typeof t?t.src:t,r=n.startsWith("http");return r||"/"===n.charAt(0)||(n="/"+n),n},d=(0,r.forwardRef)((e,t)=>{let{src:n,priority:o=!1,loading:i,className:d,width:C,height:h,onLoadingComplete:p,unoptimized:f,placeholder:b="blur",basePath:m="",blurDataURL:_,style:g,onError:x,...v}=e,[j,w]=(0,r.useState)(!1),E=(0,r.useMemo)(()=>{if(_)return _;let e="object"==typeof n,t=e?n.src:n;return!0===f?t:t.startsWith("http")?a({src:t,width:10,basePath:m}):s(t,10,m)},[_,n,f]),k="object"==typeof n?n.src.endsWith(".svg"):n.endsWith(".svg"),[W,P]=(0,r.useState)(!1),F="blur"===b&&!k&&E&&E.startsWith("/")&&!W?{backgroundSize:(null==g?void 0:g.objectFit)||"cover",backgroundPosition:(null==g?void 0:g.objectPosition)||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:"url(".concat(E,")"),filter:"url(#sharpBlur)"}:void 0,N="object"==typeof n,G=N?n.src:n;m&&!N&&G.startsWith("/")&&(G=m+G),!m||N||G.startsWith("/")||(G=m+"/"+G);let B=r.createElement(l(),{ref:t,...v,...C&&{width:C},...h&&{height:h},...i&&{loading:i},className:"".concat(d," next-exported-image-blur-svg"),...p&&{onLoadingComplete:p},...b&&{placeholder:F||W?"empty":b},...f&&{unoptimized:f},...o&&{priority:o},...k&&{unoptimized:!0},style:{...g,...F},loader:j||!0===f?u:e=>c({src:n,width:e.width,basePath:m}),blurDataURL:E,onError:e=>{w(!0),P(!0),x&&x(e)},onLoadingComplete:e=>{0===e.naturalWidth&&w(!0),P(!0),p&&p(e)},src:N?n:G});return F?r.createElement(r.Fragment,null,r.createElement("noscript",null,r.createElement("style",null,"\n    .next-exported-image-blur-svg {\n       filter: none !important;\n    }\n    ")),B,r.createElement("svg",{style:{border:0,clip:"rect(0 0 0 0)",height:0,margin:"-1px",overflow:"hidden",padding:0,position:"absolute",width:"1px"}},r.createElement("filter",{id:"sharpBlur"},r.createElement("feGaussianBlur",{stdDeviation:"20",colorInterpolationFilters:"sRGB"}),r.createElement("feColorMatrix",{type:"matrix",colorInterpolationFilters:"sRGB",values:"1 0 0 0 0, 0 1 0 0 0, 0 0 1 0 0, 0 0 0 9 0"}),r.createElement("feComposite",{in2:"SourceGraphic",operator:"in"})))):B});t.default=d},9562:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var r=n(9268),o=n(1771),l=n.n(o);function i(e){let{number:t,orange:n,green:o,blue:i,brown:s,brand:a}=e;var c=(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("svg",{width:"164",height:"107",viewBox:"0 0 164 107",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M82 44.9447C79.8628 48.159 77.1002 50.9216 73.8858 53.0588C77.1002 55.196 79.8628 57.9586 82 61.173C84.1372 57.9586 86.8998 55.196 90.1142 53.0588C86.8998 50.9216 84.1372 48.159 82 44.9447ZM133.428 86.7784C133.968 86.8083 134.512 86.8235 135.059 86.8235C151.043 86.8235 164 73.8661 164 57.8824C164 41.8986 151.043 28.9412 135.059 28.9412C135.059 12.9574 122.101 0 106.118 0C96.0511 0 87.1849 5.13952 82 12.9377C76.8151 5.13952 67.9489 0 57.8824 0C41.8986 0 28.9412 12.9574 28.9412 28.9412C12.9574 28.9412 0 41.8986 0 57.8824C0 73.8661 12.9574 86.8235 28.9412 86.8235C29.4885 86.8235 30.0322 86.8083 30.5721 86.7784C34.5323 98.0426 45.2643 106.118 57.8824 106.118C67.9489 106.118 76.8151 100.978 82 93.18C87.1849 100.978 96.0511 106.118 106.118 106.118C118.736 106.118 129.468 98.0426 133.428 86.7784Z",fill:"#0040E5"})})}),u=(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("svg",{width:"360",height:"330",viewBox:"0 0 360 330",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M139.767 165C164.017 148.876 180 121.305 180 90C180 121.305 195.983 148.876 220.233 165C196.241 180.952 180.342 208.109 180.005 239H179.995C179.658 208.109 163.759 180.952 139.767 165ZM136.853 316.858C123.205 325.195 107.164 330 90 330C40.2944 330 5.86807e-06 289.706 3.69537e-06 240C0 208.695 15.9826 181.124 40.2331 165C15.9826 148.876 5.06374e-06 121.305 3.69537e-06 90C0 40.2944 40.2944 0 90 -3.93402e-06C106.813 -4.66894e-06 122.549 4.61021 136.013 12.6355C149.811 4.43417 165.677 0 182 0C197.539 0 212.663 4.01834 225.984 11.4795C238.997 4.16912 254.012 -2.6686e-06 270 -3.93402e-06C319.706 -6.10673e-06 360 40.2944 360 90C360 121.305 344.017 148.876 319.767 165C344.017 181.124 360 208.695 360 240C360 289.706 319.706 330 270 330C253.645 330 238.309 325.638 225.093 318.013C211.99 325.158 197.193 329 182 329C166.007 329 150.454 324.743 136.853 316.858Z",fill:"black"})})}),d=(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("svg",{width:"330",height:"452",viewBox:"0 0 330 452",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.86805e-06 0C5.78131e-06 23.8695 9.48212 46.7613 26.3604 63.6396C30.6322 67.9115 35.2893 71.7095 40.25 75C35.2893 78.2905 30.6323 82.0885 26.3604 86.3604C9.48212 103.239 3.60419e-06 126.131 0 150C5.78131e-06 173.869 9.48212 196.761 26.3604 213.64C31.072 218.351 36.2522 222.486 41.7915 226C36.2522 229.514 31.072 233.649 26.3604 238.36C9.48212 255.239 3.60419e-06 278.131 0 302C5.78131e-06 325.869 9.48212 348.761 26.3604 365.64C30.6322 369.911 35.2893 373.71 40.25 377C35.2893 380.29 30.6323 384.089 26.3604 388.36C9.48212 405.239 3.60419e-06 428.13 0 452H90H150H180H240H330C330 428.131 320.518 405.239 303.64 388.36C299.368 384.089 294.711 380.29 289.75 377C294.711 373.71 299.368 369.911 303.64 365.64C320.518 348.761 330 325.87 330 302C330 278.131 320.518 255.239 303.64 238.36C298.928 233.649 293.748 229.514 288.208 226C293.748 222.486 298.928 218.351 303.64 213.64C320.518 196.761 330 173.87 330 150C330 126.131 320.518 103.239 303.64 86.3604C299.368 82.0885 294.711 78.2905 289.75 75C294.711 71.7095 299.368 67.9115 303.64 63.6396C320.518 46.7614 330 23.8695 330 3.05176e-05L240 7.39074e-06L150 0L90 7.39074e-06L7.86805e-06 0ZM165 49.75C161.71 54.7107 157.911 59.3678 153.64 63.6396C149.368 67.9115 144.711 71.7096 139.75 75C144.711 78.2905 149.368 82.0885 153.64 86.3604C157.911 90.6323 161.71 95.2893 165 100.25C168.29 95.2893 172.089 90.6323 176.36 86.3604C180.632 82.0885 185.289 78.2905 190.25 75C185.289 71.7095 180.632 67.9115 176.36 63.6396C172.089 59.3678 168.29 54.7107 165 49.75ZM191.792 226C186.252 222.486 181.072 218.351 176.36 213.64C172.089 209.368 168.29 204.711 165 199.75C161.71 204.711 157.911 209.368 153.64 213.64C148.928 218.351 143.748 222.486 138.208 226C143.748 229.514 148.928 233.649 153.64 238.36C157.911 242.632 161.71 247.289 165 252.25C168.29 247.289 172.089 242.632 176.36 238.36C181.072 233.649 186.252 229.514 191.792 226ZM165 351.75C161.71 356.711 157.911 361.368 153.64 365.64C149.368 369.911 144.711 373.71 139.75 377C144.711 380.29 149.368 384.089 153.64 388.36C157.911 392.632 161.71 397.289 165 402.25C168.29 397.289 172.089 392.632 176.36 388.36C180.632 384.089 185.289 380.29 190.25 377C185.289 373.71 180.632 369.911 176.36 365.64C172.089 361.368 168.29 356.711 165 351.75Z",fill:"black"})})});return(0,r.jsxs)("span",{className:"".concat(l().cloud,"  ").concat(a?l().brand:" ","  ").concat(i?l().blue:" ","    ").concat(n?l().orange:" ","  ").concat(s?l().brown:" ","  ").concat(o?l().green:" "),children:[1==t&&(0,r.jsx)(r.Fragment,{children:c}),2==t&&(0,r.jsx)(r.Fragment,{children:u}),3==t&&(0,r.jsx)(r.Fragment,{children:d})]})}},7221:function(e,t,n){"use strict";n.r(t);var r=n(9268),o=n(219),l=n.n(o),i=n(5846),s=n.n(i);t.default=function(e){var t;let{children:n,link:o,external:i,inline:a,clickHandler:c,small:u,main:d,disabled:C,inverted:h}=e;return t=o?i?(0,r.jsxs)("a",{href:o,target:"_blank",children:["  ",(0,r.jsx)("span",{children:n})," "]}):(0,r.jsxs)(s(),{href:o,children:["  ",(0,r.jsx)("span",{children:n})," "]}):c?(0,r.jsxs)(s(),{className:"__container",href:"#",onClick:c,children:[" ",(0,r.jsx)("span",{children:n}),"  "]}):(0,r.jsxs)(s(),{href:"#",className:"__container",children:["  ",(0,r.jsx)("span",{children:n})," "]}),(0,r.jsx)("div",{className:l().button,children:t})}},1771:function(e){e.exports={cloud:"cloud_cloud__jme8S",orange:"cloud_orange__DNdm7",green:"cloud_green__6DRqO",brown:"cloud_brown__pOPWn",brand:"cloud_brand___Tr_7"}},219:function(e){e.exports={button:"button_button__zBiTp"}},2858:function(e){e.exports={main:"about_main__NB4pj",hero:"about_hero__cWew9",contribute:"about_contribute__qGZ30",maintainer:"about_maintainer__vhs5x",book:"about_book__piqUS",bookContainer:"about_bookContainer__Es2kT"}}},function(e){e.O(0,[629,394,253,698,744],function(){return e(e.s=1931)}),_N_E=e.O()}]);