var elForm = document.querySelector('.js-form');
var elInput = elForm.querySelector('.js-input');
var elSelect = elForm.querySelector('.js-select');
var elPlace = elForm.querySelector('.js-place');
var elBtn = elForm.querySelector('.js-toggler');



elForm.addEventListener('submit', function(evt) {
  evt.preventDefault();

    elPlace.textContent = elInput.value * elSelect.value;

});