// const p = document.querySelector('p');
// const imgs = document.querySelectorAll('.item img');
// const item2 = document.querySelector('.item2');
// const item2Image = item2.querySelector('img');
// const heading = document.querySelector('h2');
// heading.textContent = 'James is cool.';

// const hotdogList = document.querySelector('.hotDog');
// console.log(hotdogList.textContent);

// hotdogList.textContent = `${hotdogList.textContent} 🌭`;
// hotdogList.insertAdjacentText('afterbegin', '🌭');
// hotdogList.insertAdjacentText('beforeend', '🌭');

// Classes
const pic = document.querySelector('.nice');
pic.classList.add('open');
pic.classList.remove('cool');
pic.classList.toggle('round');

console.log(pic.classList);

function toggleRound() {
  pic.classList.toggle('round');
}

pic.addEventListener('click', toggleRound);