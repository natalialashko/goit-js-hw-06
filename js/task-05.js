const inputName = document.querySelector('#name-input'); 
console.log(inputName);
const nameLabel = document.querySelector('#name-output');
console.log(nameLabel);
inputName.addEventListener('input', onInputChange)

function onInputChange(event) {
    console.log(event.currentTarget.value)
    if (event.currentTarget.value) {
       nameLabel.textContent = event.currentTarget.value 
    }
    else
    {
        nameLabel.textContent = 'Anonymous'
    }
}