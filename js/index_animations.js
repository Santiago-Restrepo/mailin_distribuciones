const lines_array = document.querySelectorAll('.line');
const lines_flowers = document.querySelectorAll('.lines__image');
const story_flowers = document.querySelectorAll('.primaryLeaf');
const location_container =  document.querySelector('.location__container');
windowSize= (window.innerHeight)/1.2;
let lines_positions=[];
let flowers_positions=[];
let location_position;

window.addEventListener('scroll', ()=>{
    //posisicones de las líneas
    lines_positions[0]=lines_array[0].getBoundingClientRect().top;
    lines_positions[1]=lines_array[1].getBoundingClientRect().top;
    lines_positions[2]=lines_array[2].getBoundingClientRect().top;
    lines_positions[3]=lines_array[3].getBoundingClientRect().top;
    lines_positions[4]=lines_array[4].getBoundingClientRect().top;
    lines_positions[5]=lines_array[5].getBoundingClientRect().top;

    //posisicones de las flores
    flowers_positions[0]=story_flowers[0].getBoundingClientRect().top;
    flowers_positions[1]=story_flowers[1].getBoundingClientRect().top;
  
    //posicion de la ubicación
    location_position=location_container.getBoundingClientRect().top;


    //Comprobaciones de posiciones de líneas
    if(windowSize > lines_positions[0]){
        lines_array[0].classList.add('fadeWidth');
    }
    if(windowSize > lines_positions[1]){
        lines_array[1].classList.add('fadeWidth');
    }
    if(windowSize > lines_positions[2]){
        lines_array[2].classList.add('fadeWidth');
    }
    if(windowSize > lines_positions[3]){
        lines_array[3].classList.add('fadeWidth');
    }
    if(windowSize > lines_positions[4]){
        lines_array[4].classList.add('fadeWidth');
    }
    if(windowSize > lines_positions[5]){
        lines_array[5].classList.add('fadeWidth');
    }
    //Comprobaciones de posiciones de flores de historia
    if(windowSize > flowers_positions[0]){
        story_flowers[0].classList.add('fadeInLeft');
    }
    if(windowSize > flowers_positions[1]){
        story_flowers[1].classList.add('fadeInRight');
    } 
    //Comprobaciones de posicion de ubicación
    if(windowSize > location_position){
        location_container.classList.add('fadeIn');
    }


    
})