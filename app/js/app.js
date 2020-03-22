document.addEventListener("DOMContentLoaded", function() {
  'use strict';

    let headerBtn = document.querySelector('.header__btn'),
        menu = document.querySelector('.menu'),
        menuItem = document.querySelectorAll('.menu a');

    headerBtn.addEventListener('click', () => {
      headerBtn.classList.toggle('active');
      menu.classList.toggle('active');
      document.body.classList.toggle('lock');
      menuItem.forEach(function(item) {
        item.addEventListener('click', () => {
          headerBtn.classList.remove('active');
          menu.classList.remove('active');
          document.body.classList.remove('lock');
            });
        });
    });

    function bindModal(triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) {
      const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]');
  
      trigger.forEach(item => {
        item.addEventListener('click', (e) => {
          if (e.target) {
            e.preventDefault();
          }
  
          windows.forEach(item => {
            item.style.display = 'none';
          });
  
          modal.style.display = "block";
          document.body.style.overflow = "hidden";
        });
  
      });
  
      close.addEventListener('click', () => {
        windows.forEach(item => {
          item.style.display = 'none';
        });
  
        modal.style.display = "none";
        document.body.style.overflow = "";
      });
  
      modal.addEventListener('click', (e) => {
        if (e.target === modal && closeClickOverlay) {
          windows.forEach(item => {
            item.style.display = 'none';
          });
  
          modal.style.display = "none";
          document.body.style.overflow = "";
        }
  
      });
    }

    bindModal('.btn__request', '.popup', '.popup .popup__close');
    bindModal('.btn__programm', '.popup-programm', '.popup-programm .popup__close');


    const anchors = document.querySelectorAll('.menu__list a');
    
    for (let anchor of anchors) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
    
      const blockID = anchor.getAttribute('href').substr(1);
    
      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  }


});

$(function(){
  $('.slider').slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
		prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
		infinite: false,
  });

});