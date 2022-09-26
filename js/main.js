var elHeader = document.querySelector(".site-header");
var elNav = document.querySelector(".nav-open");
var elBurgerBtn = document.querySelector(".burger-btn");

elBurgerBtn.addEventListener("click" , function() {
   elHeader.classList.toggle("nav-open");
});

$(".slider-list").slick({
   slidesToShow: 3,
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 2000,
 });