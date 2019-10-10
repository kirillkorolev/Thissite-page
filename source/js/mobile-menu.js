'use strict';

(function () {
  var pageHeader = document.querySelector('.page-header');
  var headerToggle = pageHeader.querySelector('.js-page-header-toggle');

  var accordionToggles = document.querySelectorAll(
      '.js-payment-accordion-toggle'
  );

  headerToggle.addEventListener('click', function () {
    if (pageHeader.classList.contains('page-header--menu-closed')) {
      pageHeader.classList.remove('page-header--menu-closed');
      pageHeader.classList.add('page-header--menu-opened');
    } else {
      pageHeader.classList.add('page-header--menu-closed');
      pageHeader.classList.remove('page-header--menu-opened');
    }
  });

  var changeAccordionHeight = function (button) {
    button.addEventListener('click', function () {
      button.classList.toggle('payment__accordion--active');
      var panels = button.nextElementSibling;
      if (panels.style.maxHeight) {
        panels.style.maxHeight = null;
      } else {
        panels.style.maxHeight = panels.scrollHeight + 'px';
      }
    });
  };

  for (var i = 0; i < accordionToggles.length; i++) {
    var toggle = accordionToggles[i];
    changeAccordionHeight(toggle);
  }

  window.mobileMenu = {
    pageHeader: pageHeader
  };
})();
