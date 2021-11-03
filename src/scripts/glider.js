const salesElement = document.getElementById("sales");
const gliderElement = document.querySelector(".glider");
const gliderList = document.querySelector('.glider__list');
const gliderArrowPrev = document.querySelector('.glider-prev');
const gliderArrowNext = document.querySelector('.glider-next');
import { client } from '../client';




export const gliderSales = async()=>{
	try {
		const salesResponse = await client.getEntries();
		//Filtramos la respuesta del contentful por las ofertas activas
		const sales = salesResponse.items.filter((item) => item.sys.contentType.sys.id === "sales").filter((sale)=> sale.fields.active)
		//Si no hay ninguna oferta activa se renderizará "No hay ofertas disponibles"
		if (sales.length > 0) {
			gliderElement.classList.remove("hide");
			//Por cada oferta creamos la imagen, le añadimos el atributo src y hacemos append al gliderList
			sales.forEach((sale) =>{
				const imageElement = document.createElement('img');
				imageElement.setAttribute('src',`https:${sale.fields.image.fields.file.url}`);
				imageElement.setAttribute('alt',`imagen de ${sale.fields.title}`);
				imageElement.setAttribute('loading',`lazy`);
				gliderList.appendChild(imageElement);
			})
			//Creación del glider
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
			function stopScroll (){
				clearInterval(intervalScroll);
			}
			
			function scrollSlide(){
				gliderArrowNext.click();
			}
			gliderArrowPrev.addEventListener('mouseover',stopScroll);
			gliderArrowNext.addEventListener('mouseover',stopScroll);

			let intervalScroll = window.setInterval(scrollSlide,2500);
		} else {
			//Creación de h5 con contenido de "No hay ofertas disponibles"
			const noOfferElement = document.createElement("h5");
			noOfferElement.innerHTML = "No hay ofertas disponibles"
			salesElement.appendChild(noOfferElement);
		}
	} catch (error) {
		//Creación de h5 con contenido de "No hay ofertas disponibles"
		const noOfferElement = document.createElement("h5");
		noOfferElement.innerHTML = "No hay ofertas disponibles"
		salesElement.appendChild(noOfferElement);
		
		console.error(error);
	}
	
}


