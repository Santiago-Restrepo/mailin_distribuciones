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
				slidesToShow: 3,
				slidesToScroll: 3
			  }
			}
		]
	});
});