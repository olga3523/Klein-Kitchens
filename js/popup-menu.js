const popup = document.querySelector('#popup_1');

function popupClose() {
  popup.classList.remove('active');
}

popup.addEventListener('click', popupClose);
