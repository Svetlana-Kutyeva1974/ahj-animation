(()=>{"use strict";var e={977:(e,t,r)=>{e.exports=r.p+"asserts/license.txt"}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.p="",(()=>{new class{constructor(e){this.parentEl=e,this.string="Anim pariatur cliche reprehenderit,/ enim eiusmod high life accusamus/ terry richardson ad squid. Nihil anim /keffiyeh helvetica, craft beer labore wes /anderson cred nesciunt sapiente ea proident."}static get markup(){return'\n    <div class="button-relative">\n    <button type="button" class="btn btn-secondary" data-id= "button-widjet" data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">\n      Collapse\n    </button>\n    '}static get buttonSelector(){return"[data-id=button-widjet]"}static get widjetSelector(){return"[data-widget=button-widget]"}bindToDOM(){this.parentEl.innerHTML=this.constructor.markup;this.parentEl.querySelector(this.constructor.buttonSelector).addEventListener("click",(e=>this.onClick(e)))}onClick(e){e.preventDefault(),1===e.target.parentElement.children.length?this.createPopover():e.target.parentElement.children[1].remove()}createPopover(){const e=this.parentEl.querySelector(this.constructor.buttonSelector),t=document.createElement("div");t.className="popover fade show bs-popover-top";const r=document.createElement("div");r.className="popover-body",r.textContent="Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",t.appendChild(r),e.offsetParent.appendChild(t);t.style.top=`${e.offsetTop+50}px`,t.style.left=`${e.offsetLeft}px`,this.transform()}deleteStr(){const e=this.String.split(",");return console.log(e),e}transform(){let e=0;const t=document.querySelector(".popover");console.log("pop",this,t),requestAnimationFrame((function r(){e+=10,t.style.height=`${e}px`,170!==e&&requestAnimationFrame(r)}))}}(document.querySelector("#button-container")).bindToDOM();r(977)})()})();