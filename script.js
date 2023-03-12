// 'use strict';
// const modal = document.querySelector('.modal');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelector('.close-modal');
// const btnsOpenModal = document.querySelectorAll('.show-modal');
// const canvas = document.querySelector('body');
// console.log(btnsOpenModal);

// //functions
// const openModal = function () {
//     console.log('button clicked')
//     modal.classList.remove('hidden');
//     overlay.classList.remove('hidden');
// }
// const closeModal = function () {
//     modal.classList.add('hidden');
//     overlay.classList.add('hidden');
// }

// //event listeners
// for (let i = 0; i < btnsOpenModal.length; i++) {
//     btnsOpenModal[i].addEventListener('click', openModal);
// }

// btnCloseModal.addEventListener('click', closeModal);

// overlay.addEventListener('click', closeModal);

// document.addEventListener('keydown', function (e) {
//     if (e.key === "Escape" && !modal.classList.contains('hidden')) {
//         closeModal();
//     }
// })

const showModal = document.querySelector('.show-modal');
const closeModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

showModal.addEventListener('click', function () {
  overlay.classList.remove('hidden');
  modal.classList.remove('hidden');
});

closeModal.addEventListener('click', function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});

overlay.addEventListener('click', function () {
  overlay.classList.add('hidden');
  modal.classList.add('hidden');
});

document.addEventListener('keydown', function (e) {
  console.log(e);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  }
});
