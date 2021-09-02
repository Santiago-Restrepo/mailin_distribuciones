const gliderList = document.querySelector('.glider__list');
const gliderArrowLeft = document.querySelector('.glider__left');
const gliderArrowRight = document.querySelector('.glider__right');


window.addEventListener('load', function(){
	new Glider(document.querySelector('.glider__list'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: false,
		duration:2,
		dots: '.glider__dots',
		dragVelocity:1,
		rewind: true,
		resizeLock: true,
		arrows: {
			prev: '.glider__left',
			next: '.glider__right'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 768,
			  settings: {
				slidesToShow: 2,
				// Set to `auto` and provide item width to adjust to viewport
			}
		},{
			// screens greater than >= 1024px
			breakpoint: 1024,
			settings: {
				duration:1,
				slidesToShow: 3,
				draggable: false,

			  }
			}
		]
	});
});

// gliderList.addEventListener('scroll',stopScroll);

// gliderArrowLeft.addEventListener('mouseover',stopScroll);
// gliderArrowRight.addEventListener('mouseover',stopScroll);




// function stopScroll (){
// 	clearInterval(intervalScroll);
// }

// function scrollSlide(){
// 	document.querySelector(".glider__right").click();
// 	// intervalScroll = window.setInterval(scrollSlide,2500);
// }
// let intervalScroll = window.setInterval(scrollSlide,2500);