const fontSizeControlEl = document.querySelector('#font-size-control'); 
const textSpanEl = document.querySelector('#text');
console.dir(textSpanEl);
console.log(fontSizeControlEl);
console.dir(fontSizeControlEl);

fontSizeControlEl.addEventListener('input', (event) => {
     textSpanEl.style.fontSize = `${event.target.value}px`;
});
