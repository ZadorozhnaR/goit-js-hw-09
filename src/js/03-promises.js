const refs = {
  body: document.querySelector('body'),
  form: document.querySelector('form.form'),
  firstDelay: document.querySelector('[name="delay"]'),
  delayStep: document.querySelector('[name="step"]'),
  formAmount: document.querySelector('[name="amount"]'),
};

refs.form.addEventListener('submit', fuctionCreatePromise);

function fuctionCreatePromise(e) {
  e.preventDefault();

  let delay = Number(refs.firstDelay.value);
  let step = Number(refs.delayStep.value);
  let amount = Number(refs.formAmount.value);
  let position = 0;

  for (let i = 1; i <= amount; i += 1) {
    position = i;

    createPromise(position, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;
  }
  refs.form.reset();
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
