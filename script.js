// Selecting Elements
const showModal = document.querySelector('.show-modal');
const modal = document.querySelector('.modal');
const hideModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

// Manipulate
// Add Event Listener

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Show Modal
showModal.addEventListener('click', openModal);

// Hide Modal
hideModal.addEventListener('click', closeModal);

// Overlay
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (!modal.classList.contains('hidden') && e.key === 'Escape') {
    closeModal();
  }
});
