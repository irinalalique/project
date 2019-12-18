/*$(document).ready(function () {
var mySwiper = app.swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 100*/
		
$(document).ready(function () {
		var mySwiper = new Swiper('.swiper-container', {
		direction: 'horizontal', 
			/*autoplay: {
        delay: 5000,
      },*/
			navigation: {
				nextEl: '.swiper-button-next', 
				prevEl: '.swiper-button-prev',
			},
		loop: true,
    speed: 400,
    spaceBetween: 100
		})
});


/*$(document).ready(function () {
  //var swiper = new Swiper('.swiper-container', {
  var swiper1 = new Swiper('.swiper1', {
		direction: 'vertical',
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});*/
	
		/*var mySwiper = new Swiper ('.swiper-container', { 
		direction: 'horizontal', 
		loop: true,
	
		/*navigation: {
			nextEl: '.swiper-button-next', 
			prevEl: '.swiper-button-prev', 
			},
		})
});*/
