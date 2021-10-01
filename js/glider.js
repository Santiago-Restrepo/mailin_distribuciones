const gliderList = document.querySelector('.glider__list');
const gliderArrowLeft = document.querySelector('.glider__left');
const gliderArrowRight = document.querySelector('.glider__right');


window.addEventListener('load', async function(){
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
	// try {

	// 	let instagramPromise = await fetch('https://api.instagram.com/oembed/?url=https://www.instagram.com/p/CSs2l7ED_Rs/&access_token=IGQVJYUmVOUkh1M3dEQ1c3akYwTzNvU1VQU05RcVpwVm4tdW5KZAjQxTmRQaE1xSl9RM3RPajBwSndzcmJmUkFtc0VCb05qNnVtMHVUcTNYOEprc1BHbWszRHVWelJLMURXV2tXOGtXSDdHNXhmVmx3UgZDZD',{
	// 		mode: 'no-cors',
	// 		access_token:'IGQVJYUmVOUkh1M3dEQ1c3akYwTzNvU1VQU05RcVpwVm4tdW5KZAjQxTmRQaE1xSl9RM3RPajBwSndzcmJmUkFtc0VCb05qNnVtMHVUcTNYOEprc1BHbWszRHVWelJLMURXV2tXOGtXSDdHNXhmVmx3UgZDZD'
	// 	});
	// 	debugger
	// 	let instagramJson = await instagramPromise.json();//Conversión de promesa a JSON
	// } catch (error) {
	// 	console.error(error);
	// }
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