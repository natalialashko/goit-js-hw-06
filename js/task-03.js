const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const galleryList = document.querySelector(".gallery");

const elements = images.map(element => {
  const itemEll = document.createElement('li');
  itemEll.classList.add('item-gallery');
  const imgEll = document.createElement('img');
  imgEll.src = element.url;
  imgEll.alt = element.alt;
  imgEll.width = 100;
  imgEll.classList.add('images');
  itemEll.appendChild(imgEll);
  console.log(itemEll);
  return itemEll;
});
galleryList.append(...elements);
console.log(elements);
// console.log(galleryList);

 
