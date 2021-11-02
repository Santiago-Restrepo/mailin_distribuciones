const gliderList = document.querySelector('.glider__list');
const gliderArrowLeft = document.querySelector('.glider__left');
const gliderArrowRight = document.querySelector('.glider__right');
import { client } from '../client';


export const gliderSales = async()=>{
	try {
		const salesResponse = await client.getEntries();
		const sales = salesResponse.items.filter((item) => item.sys.contentType.sys.id === "sales")
		sales.forEach((sale) =>{
			const imageElement = document.createElement('img');
			imageElement.setAttribute('src',`https:${sale.fields.image.fields.file.url}`);
			imageElement.setAttribute('alt',`imagen de ${sale.fields.title}`);
			imageElement.setAttribute('loading',`lazy`);
			gliderList.appendChild(imageElement);
		})
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
				prev: '.glider-prev',
				next: '.glider-next'
			}
		});
	} catch (error) {
		console.error(error);
	}
	
}
// try {
	
	// 	let instagramPromise = await fetch('https://api.instagram.com/oembed/?url=https://www.instagram.com/p/CSs2l7ED_Rs/&access_token=IGQVJYUmVOUkh1M3dEQ1c3akYwTzNvU1VQU05RcVpwVm4tdW5KZAjQxTmRQaE1xSl9RM3RPajBwSndzcmJmUkFtc0VCb05qNnVtMHVUcTNYOEprc1BHbWszRHVWelJLMURXV2tXOGtXSDdHNXhmVmx3UgZDZD',{
		// 		mode: 'no-cors',
		// 		access_token:'IGQVJYUmVOUkh1M3dEQ1c3akYwTzNvU1VQU05RcVpwVm4tdW5KZAjQxTmRQaE1xSl9RM3RPajBwSndzcmJmUkFtc0VCb05qNnVtMHVUcTNYOEprc1BHbWszRHVWelJLMURXV2tXOGtXSDdHNXhmVmx3UgZDZD'
		// 	});
		// 	debugger
		// 	let instagramJson = await instagramPromise.json();//Conversión de promesa a JSON
		// } catch (error) {
		// 	console.error(error);




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