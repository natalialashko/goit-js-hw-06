const inputSymbolsEl = document.querySelector('#validation-input'); 
console.log(inputSymbolsEl);
console.dir(inputSymbolsEl);
console.log(inputSymbolsEl.getAttribute("data-length"));
const minSymbols = Number(inputSymbolsEl.getAttribute("data-length"));
console.log(minSymbols);
inputSymbolsEl.addEventListener("blur", () => {
    console.log(minSymbols);
    console.log(inputSymbolsEl.value.length);
    inputSymbolsEl.classList.toggle("valid", inputSymbolsEl.value.length >= minSymbols  );
   inputSymbolsEl.classList.toggle("invalid", inputSymbolsEl.value.length < minSymbols )
})