const p = document.querySelector('p');
const imgs = document.querySelectorAll('.item img');
const item2 = document.querySelector('.item2');
const item2Image = item2.querySelector('img');
// const heading = document.querySelector('h2');
// heading.textContent = 'James is cool.';

const hotdogList = document.querySelector('.hotDog');

console.log(hotdogList.textContent);

// hotdogList.textContent = `${hotdogList.textContent} 🌭`;
hotdogList.insertAdjacentText('afterbegin', '🌭');
hotdogList.insertAdjacentText('beforeend', '🌭');