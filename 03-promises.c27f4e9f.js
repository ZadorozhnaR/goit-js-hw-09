const e={body:document.querySelector("body"),form:document.querySelector("form.form"),firstDelay:document.querySelector('[name="delay"]'),delayStep:document.querySelector('[name="step"]'),formAmount:document.querySelector('[name="amount"]')};function o(e,o){return new Promise(((t,n)=>{const r=Math.random()>.3;setTimeout((()=>{r?t({position:e,delay:o}):n({position:e,delay:o})}),o)}))}e.form.addEventListener("click",(function(t){t.preventDefault();let n=Number(e.firstDelay.value),r=Number(e.delayStep.value),l=Number(e.formAmount.value);for(let e=1;e<=l;e+=1){o(e,n+r*e).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`)}))}}));
//# sourceMappingURL=03-promises.c27f4e9f.js.map
