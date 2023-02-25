function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const buttonEl = document.querySelector(".change-color");
const spanEl = document.querySelector(".color");
const bodyEl = document.querySelector('body');
console.log(bodyEl);
buttonEl.addEventListener('click', () => {
  const color = getRandomHexColor();
  spanEl.textContent = `${color}`;
  console.log(`${color}`);
  bodyEl.style.backgroundColor = `${color}`;

})
