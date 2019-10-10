'use strict';

(function () {
  var htmlGlobal = document.querySelector('html');
  var bodyGlobal = document.querySelector('body');

  var openPopupButton = window.mobileMenu.pageHeader.querySelector(
      '.js-page-header-enter'
  );
  var popup = document.querySelector('.modal');
  var closeButton = popup.querySelector('.js-popup-close-button');
  var blackout = document.querySelector('.blackout');
  var ESC_KEYCODE = 27;

  var onMenuEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup(popup);
    }
  };

  var closePopup = function (block) {
    block.classList.add('visually-hidden');
    block.classList.remove('modal--visible');
    document.removeEventListener('keydown', onMenuEscPress);
    blackout.classList.add('blackout--none');

    htmlGlobal.style.paddingLeft = '';
    bodyGlobal.style.overflow = '';
    bodyGlobal.style.touchAction = '';
  };

  var openPopup = function (block) {
    block.classList.remove('visually-hidden');
    block.classList.add('modal--visible');
    blackout.classList.remove('blackout--none');
    document.addEventListener('keydown', onMenuEscPress);

    htmlGlobal.style.paddingLeft = '17px';
    bodyGlobal.style.overflow = 'hidden';
    bodyGlobal.style.touchAction = 'none';
  };

  openPopupButton.addEventListener('click', function () {
    openPopup(popup);
  });

  closeButton.addEventListener('click', function () {
    closePopup(popup);
  });

  blackout.addEventListener('click', function () {
    blackout.classList.add('blackout--none');

    if (popup.classList.contains('modal--visible')) {
      popup.classList.remove('modal--visible');
      popup.classList.add('visually-hidden');
    }
  });
})();
