
//spread operator turn to array
const numbers = [...document.querySelectorAll('.number')];

const updateCount = el => {
  console.log(el);
  const value = parseInt(el.dataset.value);
  const increment = Math.ceil(value / 1000);
  let inititialValue = 0;

  const increaseCount = setInterval(() => {
    inititialValue += increment;

    if (inititialValue > value) {
      el.textContent = `${value}+`;
      clearInterval(increment);
      return;
    }

    el.textContent = `${inititialValue}+`;
  }, 100);
};

numbers.forEach(number => {
  updateCount(number)
});
