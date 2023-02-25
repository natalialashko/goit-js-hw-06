function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const inputEl = document.querySelector('input[type="number"]');
console.log(inputEl);
const buttonCreateEl = document.querySelector('button[data-create]');
console.log(buttonCreateEl);
const buttonDestroyEl = document.querySelector('button[data-destroy]');
console.log(buttonDestroyEl);
const divEl = document.querySelector('#boxes');
console.log(divEl);


const handleButtonCreateClick = () => {
inputEl.addEventListener('input', (event) => {
 return event.target.value;
});
   console.log('Click Create', inputEl.value);
   createBoxes(inputEl.value);

};
const handleButtonDestroyClick = () => {
  console.log('Click Destroy');
  divEl.innerHTML = '';
};

buttonCreateEl.addEventListener('click', handleButtonCreateClick);
buttonDestroyEl.addEventListener('click', handleButtonDestroyClick);



function createBoxes(amount) {
  const ellDiv = [];
console.log('amount: ', amount);
  let width = 30;
  let height = 30;
  for (let index = 0; index < amount; index += 1) {
    const element = document.createElement('div');
    element.textContent = index;
    element.classList.add('itemDiv');
    element.style.width = `${width + 10 * index}px`;
    element.style.height = `${width + 10 * index}px`;
    element.style.backgroundColor = `${getRandomHexColor()}`;
    ellDiv.push(element);
  }
  console.log(ellDiv);
  divEl.append(...ellDiv);
}
