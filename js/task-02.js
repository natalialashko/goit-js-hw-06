const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulEll = document.querySelector("#ingredients");
// const ellLi = [];
// for (let index = 0; index < ingredients.length; index++) {
//   const element = document.createElement('li');
//   element.classList.add('item');
//   element.textContent = ingredients[index];
//   ellLi.push(element);
// }
const elements = ingredients.map(element => {
  const liEll = document.createElement('li');
   liEll.classList.add('item');
   liEll.textContent = element;
  return liEll;
} )
ulEll.append(...elements);
console.log(ulEll);

