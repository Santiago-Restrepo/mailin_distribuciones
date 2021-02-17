const gliderElements = document.querySelectorAll('.offer');


window.addEventListener('load', function(){
	new Glider(document.querySelector('.glider__list'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: true,
		dots: '.glider__dots',
		rewind: true,
		arrows: {
			prev: '.glider__left',
			next: '.glider__right'
		},
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 700,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 5,
				slidesToScroll: 5
			  }
			}
		]
	});
});

gliderElements.forEach(element => {
	element.addEventListener('mouseover',stopScroll)
});
gliderElements.forEach(element => {
	element.addEventListener('mouseout',stopScroll)
});

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

