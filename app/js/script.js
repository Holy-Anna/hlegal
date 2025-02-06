$('.js-slider').slick({
  arrows: false,
  dots: true,
  mobileFirst: true,
});

$('.js-achievements-slider').slick({
  arrows: false,
  dots: true,
  mobileFirst: true,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      }
    }
  ]
});


const btn = document.querySelector('.js-menu-burger');
const menu = document.querySelector('.js-menu-list');

btn.addEventListener("click", () => {
  btn.classList.toggle('active'); 
  menu.classList.toggle('active'); 
});


const popupBtn = document.querySelector('.js-popup-btn');
const closeBtn = document.querySelector('.js-close-btn');
const popup = document.querySelector('.js-popup');


popupBtn.addEventListener("click", () => {
  popup.classList.add('active'); 
});

closeBtn.addEventListener("click", () => {
  popup.classList.remove('active'); 
});







        