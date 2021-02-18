const gliderElements = document.querySelectorAll('.offer');
const gliderArrowLeft = document.querySelector('.glider__left');
const gliderArrowRight = document.querySelector('.glider__right');


window.addEventListener('load', function(){
	new Glider(document.querySelector('.glider__list'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: false,
		duration:2,
		dots: '.glider__dots',
		rewind: true,
		arrows: {
			prev: '.glider__left',
			next: '.glider__right'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 768,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
			}
		},{
			// screens greater than >= 1024px
			breakpoint: 1024,
			settings: {
				duration:1,
			  }
			}
		]
	});
});

gliderElements.forEach(element => {
	element.addEventListener('click',stopScroll);
});
gliderArrowLeft.addEventListener('mouseover',stopScroll);
gliderArrowRight.addEventListener('mouseover',stopScroll);




function stopScroll (){
	clearInterval(intervalScroll);
}
// function playScroll (){
// 	intervalScroll = window.setInterval(scrollSlide,2500);
// }

var intervalScroll = window.setInterval(scrollSlide,2500);
function scrollSlide(){
	document.querySelector(".glider__right").click();
}