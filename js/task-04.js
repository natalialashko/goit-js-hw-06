const decrementBtnEll = document.querySelector('button[data-action="decrement"]');
console.log(decrementBtnEll);
const incrementBtnEll = document.querySelector('button[data-action="increment"]');
console.log(incrementBtnEll);
const counterValue = document.querySelector('#value');
console.log(counterValue);

decrementBtnEll.addEventListener('click', () => {
    counterValue.textContent = minus(Number(counterValue.textContent));
    console.log(counterValue.textContent);
})

incrementBtnEll.addEventListener('click', () => {
    counterValue.textContent = plus(Number(counterValue.textContent));
    console.log(counterValue.textContent);
});
function plus(ell) {
    return ell += 1; 
}
 function minus(ell) {
    return ell -= 1; 
}