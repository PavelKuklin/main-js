!function(e){var t={};function n(o){if(t[o])return t[o].exports;var s=t[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(o,s,function(t){return e[t]}.bind(null,s));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=()=>{const e=document.querySelector("body"),t=document.getElementById("free_visit_form"),n=document.getElementById("callback_form"),o=document.getElementById("gift"),s=document.querySelector(".fixed-gift"),r=(document.getElementById("errors"),document.getElementById("thanks"),document.querySelector(".popup")),i=t=>{t.classList.toggle("show"),e.classList.toggle("scroll-hidden")};e.addEventListener("click",()=>{let e=event.target;e.getAttribute("data-popup")&&i(document.querySelector(e.getAttribute("data-popup"))),e.closest(".close-form")&&(e=e.closest(".close-form"),i(e.parentElement.parentElement)),!n.classList.contains("show")||e.getAttribute("data-popup")||e.closest(".form-content")?!t.classList.contains("show")||e.getAttribute("data-popup")||e.closest(".form-content")?o&&o.classList.contains("show")&&!e.getAttribute("data-popup")&&!e.closest(".form-content")&&i(o):i(t):i(n),(e.matches(".close-btn")||r.classList.contains("show")&&!e.closest(".popup"))&&(i(e.parentElement.parentElement.parentElement),r.classList("show")&&i(r)),e.closest(".fixed-gift")&&(s.style.display="none",i(o))})};var s=()=>{const e=document.querySelector(".clubs-list"),t=document.querySelector(".header-main"),n=e.querySelector("ul"),o=document.querySelector(".popup-menu"),s=(document.querySelector(".menu-button"),document.querySelector(".top-menu")),r=document.querySelector(".head-main"),i=document.getElementById("totop"),l=e=>{t.getBoundingClientRect().bottom<0?i.style.cssText="display: block;":i.style.cssText="display: none;",document.documentElement.clientWidth<768?(s.getBoundingClientRect().top<=0&&(s.style.cssText="position: fixed; top: 0;"),r.getBoundingClientRect().bottom>s.getBoundingClientRect().top&&(console.log("fgd"),s.style.cssText="position: relative;")):s.style.cssText="position: relative;"};t.addEventListener("click",e=>{let t=e.target;t.closest(".clubs-list")||!t.closest(".clubs-list")&&n.matches(".show")?n.classList.toggle("show"):t.closest(".menu-button__image")?o.style.display="flex":t.closest(".close-menu-btn")&&(o.style.display="none")}),window.addEventListener("scroll",l),window.addEventListener("resize",l)};var r=()=>{const e=document.querySelector(".main-slider").querySelectorAll(".slide");console.log(e);let t=0;setInterval(()=>{e[t].style.display="none",t<e.length-1?t++:t=0,e[t].style.display="flex"},2e3)};var i=()=>{const e=document.querySelector(".gallery-slider"),t=e.querySelectorAll(".slide"),n=e.parentElement.querySelector(".silder-dots");let o,s=0,r=document.querySelectorAll(".slider-dot");(()=>{const t=document.createElement("a");t.style.cssText="display: block;\n    position: absolute;\n    background-image: url('./images/arrow-right.png');\n    background-repeat: no-repeat;\n    background-position: center;\n    top: 45%;\n    left: 85%;\n    width: 36px;\n    height: 37px;\n    background-color: #f4c71b;\n    border-radius: 50%;\n    text-align: center;\n    padding-top: 11px;\n    cursor: pointer;\n    z-index; 1200;";const n=document.createElement("a");n.style.cssText="display: block;\n    position: absolute;\n    background-image: url('./images/arrow-left.png');\n    background-repeat: no-repeat;\n    background-position: center;\n    top: 45%;\n    left: 12%;\n    width: 36px;\n    height: 37px;\n    background-color: #f4c71b;\n    border-radius: 50%;\n    text-align: center;\n    padding-top: 11px;\n    cursor: pointer",t.classList.add("slider-arrow","next"),e.parentElement.append(t),t.parentElement.style.cssText="position: relative;",n.classList.add("slider-arrow","prev"),e.parentElement.append(n)})();(()=>{const e=t.length;n.style.cssText="\n      position: absolute;\n      display: flex !important;\n      left: 50%;\n      margin-left: -65px;\n      bottom: 5%";for(let t=0;t<e;t++){const e=document.createElement("button");e.classList.add("slider-dot"),n.append(e),e.style.cssText="\n        display:block !important;\n        width: 22px;\n        height: 4px;\n        background-color: #fff;\n        border: none;\n        border-radius: 2px;\n        color: transparent;\n        margin-right: 5px;\n        cursor: pointer"}r=document.querySelectorAll(".slider-dot"),r[s].classList.add("dots-active")})();const i=(e,t,n)=>{e[t].classList.remove(n),r[t].classList.remove("dots-active")},l=(e,t,n)=>{e[t].classList.add(n),r[t].classList.add("dots-active")},a=()=>{i(t,s,"slideOpasity"),s++,s>=t.length&&(s=0),l(t,s,"slideOpasity")},d=(e=2e3)=>{o=setInterval(a,e)};d(1400),e.parentElement.addEventListener("mouseover",e=>{let t=e.target;(t.closest(".slider-arrow")||t.closest(".slider-dot"))&&clearInterval(o)}),e.parentElement.addEventListener("mouseout",e=>{let t=e.target;(t.closest(".slider-arrow")||t.closest(".slider-dot"))&&d(1400)}),e.parentElement.addEventListener("click",e=>{let n=e.target;n.closest(".next")?(i(t,s,"slideOpasity"),s++,s>t.length-1&&(s=0),l(t,s,"slideOpasity")):n.closest(".prev")&&(i(t,s,"slideOpasity"),s--,s<0&&(s=t.length-1),l(t,s,"slideOpasity")),n.closest(".slider-dot")&&(console.log(r),r.forEach((e,o)=>{e===n&&(i(t,s,"slideOpasity"),s=o,l(t,s,"slideOpasity"))}))})};var l=function(e,t="+7 (___) ___-__-__"){const n=document.querySelector(e);function o(e){const n=e.keyCode,o=t,s=o.replace(/\D/g,""),r=this.value.replace(/\D/g,"");console.log(o);let i=0,l=o.replace(/[_\d]/g,(function(e){return i<r.length?r.charAt(i++)||s.charAt(i):e}));i=l.indexOf("_"),-1!=i&&(l=l.slice(0,i));let a=o.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");a=new RegExp("^"+a+"$"),(!a.test(this.value)||this.value.length<5||n>47&&n<58)&&(this.value=l),"blur"==e.type&&this.value.length<5&&(this.value="")}n.addEventListener("input",o),n.addEventListener("focus",o),n.addEventListener("blur",o)};var a=e=>{const t=document.querySelectorAll(e),n=document.querySelector("#thanks"),o=document.querySelector("#errors");let s,r,i;t.forEach(e=>{(e=>{e.forEach(e=>{"name"===e.name?s=e:"phone"===e.name?(r=e,l(`#${e.id}`)):e.parentElement.classList.contains("personal-data")&&(i=e)})})(e.querySelectorAll("input")),e.addEventListener("submit",t=>{if(t.preventDefault(),!(()=>{let e=!0,t=!0,n=!0;return 18!=+r.value.length&&(e=!1),s&&(null!=s.value&&""!==s.value.trim()||(t=!1)),i&&(i.checked||(n=!1)),!!(e&&t&&n)})())return void alert("заполните поля");const l=new FormData(e);let a={};for(let e of l.entries())a[e[0]]=e[1];(e=>fetch("./server.php",{method:"POST",header:{"Content-Type":"application/json"},body:JSON.stringify(e)}))(a).then(e=>{if(200!==e.status)throw new Error("error");n.classList.add("show")}).catch(()=>{o.classList.add("show")}).finally(()=>{e.reset()})})})};var d=()=>{};var c=class{constructor({main:e,wrap:t,next:n,prev:o,arrowWrap:s,infinity:r=!1,position:i=0,slidesToShow:l=3,responsive:a=[]}){this.main&&this.wrap||console.warn('slider-carusel Необходимо 2 свойства,"main" и "wrap" '),this.main=document.querySelector(e),this.wrap=document.querySelector(t),this.arrowWrap=this.main.querySelector(s),this.slides=document.querySelector(t).children,this.next=document.querySelector(n),this.prev=document.querySelector(o),this.slidesToShow=l,this.options={position:i,infinity:r,widthSlide:Math.floor(100/this.slidesToShow),maxPosition:this.slides.length-this.slidesToShow},this.responsive=a}init(){this.addGloClass(),this.addStyle(),this.prev&&this.next||this.addArrow(),this.controlSlider(),this.responsive&&this.responseInit()}addGloClass(){this.main.classList.add("glo-slider"),this.wrap.classList.add("glo-slider__wrap");for(const e of this.slides)e.classList.add("glo-slider__item")}addStyle(){let e=document.querySelector("#sliderCarusel-style");e||(e=document.createElement("style"),e.id="sliderCarusel-style"),e.textContent=`\n    .wrapper {\n      overflow: hidden;\n    }\n    .arrowWrap {\n      display: flex;\n      justify-content: space-between;\n    }\n    .glo-slider{\n      overflow: hidden !important;\n    }\n    .glo-slider__wrap{\n      display: flex !important;\n      \n      transition: transform 0.5s !important;\n      will-change: transform !important;\n    }\n    .glo-slider__item{\n      display: flex  !important;\n      flex-direction: column;\n      align-items: center  !important;\n      justify-content: center  !important;\n      flex: 0 0 ${this.options.widthSlide}% !important;\n      margin: auto 0 !important;\n    }\n    .glo-slider__prev,\n    .glo-slider__next {\n      margin: 0 10px;\n      border: 20px solid transparent;\n      background: transparent;\n    }\n    .glo-slider__next {\n      border-left-color: #19b5fe;\n    }\n    .glo-slider__prev {\n      border-right-color: #19b5fe;\n    } \n    .glo-slider__prev:hover,\n    .glo-slider__prev:focus,\n    .glo-slider__next:hover,\n    .glo-slider__next:focus{\n      cursor: pointer;\n      outline: none;\n      background: transparent;\n    }\n    `,document.head.append(e)}controlSlider(){this.prev&&this.next&&(this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this)))}prevSlider(){(this.options.infinity||+this.options.position>0)&&(--this.options.position,+this.options.position<0&&(this.options.position=this.options.maxPosition),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`)}nextSlider(){(this.options.infinity||+this.options.position<this.options.maxPosition)&&(++this.options.position,this.options.position>this.slides.length-this.slidesToShow&&(this.options.position=0),this.wrap.style.transform=`translateX(-${this.options.position*this.options.widthSlide}%)`)}addArrow(){this.prev&&this.next&&(this.prev=document.createElement("button"),this.next=document.createElement("button"),this.prev.className="glo-slider__prev",this.next.className="glo-slider__next",this.arrowWrap.append(this.prev),this.arrowWrap.append(this.next))}responseInit(){const e=this.slidesToShow,t=this.responsive.map(e=>e.breackpoint),n=Math.max(...t),o=()=>{const o=document.documentElement.clientWidth;if(o<n)for(let e=0;e<t.length;e++)o<t[e]&&(this.slidesToShow=this.responsive[e].slideToShow,this.options.widthSlide=Math.floor(100/this.slidesToShow),this.addStyle());else this.slidesToShow=e,this.options.widthSlide=Math.floor(100/this.slidesToShow),this.addStyle()};o(),window.addEventListener("resize",o)}};var p=()=>{new c({main:"#services",wrap:".services-slider",arrowWrap:".arrowWrap",slidesToShow:4,infinity:!0,responsive:[{breackpoint:1024,slideToShow:3},{breackpoint:768,slideToShow:2},{breackpoint:576,slideToShow:1}]}).init()};l("#callback_form-phone");var u=()=>{const e=document.querySelector("#card_order"),t=e.querySelectorAll(".time>input"),n=e.querySelectorAll(".club>input"),o=e.querySelector(".price-message>input"),s=e.querySelector("#price-total"),r=e.querySelector(".personal-data>input"),i=e.querySelectorAll(".input-text>input"),l=document.getElementById("thanks"),a=document.getElementById("errors");let d,c={},p="",u="",h={};fetch("./src/services.JSON",{method:"GET",header:{"Content-Type":"application/json"}}).then(e=>{if(200!==e.status)throw new Error("error");return c=e.text(),c}).then(e=>{c=JSON.parse(e),m(),g()}).catch(()=>{});const m=e=>{n&&n.forEach(e=>{e.checked&&(p=e.value)}),t&&t.forEach(e=>{e.checked&&(u=e.getAttribute("id"))}),p&&u&&(d=c[p][u])},g=()=>{o&&"ТЕЛО2020"===o.value.toUpperCase().trim()&&(d=Math.ceil(.7*d)),s&&textContent&&(s.textContent=d)};e.addEventListener("input",e=>{let t=e.target;m(t),g()}),e.addEventListener("submit",t=>{if(t.preventDefault(),!r.checked)return void alert("Подтвердите ваше согласие на обработку данных");i.forEach(e=>{""!==e.value.trim()||("name"!==e.name||"Промокод"===e.placeholder)&&"phone"!==e.name||alert("заполните поля")}),i.forEach(e=>{"phone"===e.name?h.phone=e.value:"name"===e.name&&"Промокод"!==e.placeholder&&(h.name=e.value)}),h.club=p,h.price=`${d} рублей`,console.log(h);var n;(n=h,fetch("./server.php",{method:"POST",header:{"Content-Type":"application/json"},body:JSON.stringify(n)})).then(e=>{if(200!==e.status)throw new Error("error");l.classList.add("show")}).catch(()=>{a.classList.add("show")}).finally(()=>{e.reset()})})};o(),s(),r(),i(),p(),u(),d(),a("#banner-form"),a("#form1"),a("#form2"),a("#footer_form")}]);