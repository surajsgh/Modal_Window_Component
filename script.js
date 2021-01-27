'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');

// Since, We're using more than one element with the same class name, that's why we have used querySelectorAll instead of querySelector.
const btnShowModal = document.querySelectorAll('.show-modal');

// Here, We have integrated different CSS classes with javascript classList attribute to get the required result in these two functions.
const openModal = () => {
  console.log('Button Clicked!');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Whenever we use querySelectorAll, We should use for loop to get our operation done.
// Don't use 'openModal()', otherwise the function would get executed before the event operation is performed. Same goes for closeModal.
for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// As soon as we press any keyboard key, javascript generates an object which is passed down as an arguement to the function as shown below. 'keydown' is used for such operations.
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }
});
