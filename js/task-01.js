const numberOfCategories = document.querySelectorAll('.item');
console.log(`Number of categories:`, numberOfCategories.length);
const arrayTitleCategory = document.querySelectorAll('.item h2');
// console.log(arrayTitleCategory);
const ellCategory = document.querySelectorAll('.item ul');
// console.log(ellCategory);
for (let i = 0; i < arrayTitleCategory.length; i ++ ){
    console.log(`Category: ${ arrayTitleCategory[i].textContent }`);
    console.log(`Elements: ${ ellCategory[i].children.length }`);
};

