(()=>{var e={940:()=>{const e=document.querySelector(".price__cvv"),t=document.querySelector(".price-input__text"),r=document.querySelector(".price__card-holder"),n=document.getElementById("input-card-holder");e.addEventListener("keydown",(function(e){46==e.keyCode||8==e.keyCode||9==e.keyCode||27==e.keyCode||65==e.keyCode&&!0===e.ctrlKey||e.keyCode>=35&&e.keyCode<=39||(e.keyCode<48||e.keyCode>57)&&(e.keyCode<96||e.keyCode>105)&&e.preventDefault()})),t.addEventListener("keydown",(function(e){let t=this.value.replace(/\s+/g,""),r="Backspace"===e.key;if(1===e.key.length&&/^[^\d\s]+$/.test(e.key)||!r&&16===t.length)return e.preventDefault(),!1;this.value=t.split("").reverse().join("").replace(/\B(?=(\d{4})+(?!\d))/g," ").split("").reverse().join("").trim()})),n.onkeypress=e=>!!/[a-z\d]/i.test(e.key),r.addEventListener("keydown",(function(e){if(e.key.match(/[0-9]/))return e.preventDefault()})),r.addEventListener("input",(function(e){r.value=r.value.replace(/[0-9]/g,"")}))},785:()=>{const e=document.getElementById("btn-prev"),t=document.getElementById("btn-next"),r=document.querySelectorAll(".slide"),n=document.querySelectorAll(".dot"),d=document.querySelector(".slider-wrapper");let o=0;const c=e=>{(e=>{for(slide of r)slide.classList.remove("active");r[e].classList.add("active")})(e),(e=>{for(dot of n)dot.classList.remove("active");n[e].classList.add("active")})(e)},l=()=>{o===r.length-1?(o=0,c(o)):(o++,c(o))};n.forEach(((e,t)=>{e.addEventListener("click",(()=>{o=t,c(o)}))})),t.addEventListener("click",l),e.addEventListener("click",(()=>{0===o?(o=r.length-1,c(o)):(o--,c(o))})),d.addEventListener("mousedown",l)}},t={};function r(n){var d=t[n];if(void 0!==d)return d.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";var e=r(785),t=r.n(e),n=r(940),d=r.n(n);t(),d()})()})();