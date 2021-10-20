export const indexAnimations = ()=>{
    const lines_array = document.querySelectorAll('.line');
    const lines_flowers = document.querySelectorAll('.lines__image');
    const story_flowers = document.querySelectorAll('.primaryLeaf');
    const location_container =  document.querySelector('.location__container');
    const windowSize = (window.innerHeight)/1.2;
    let lines_positions=[];
    let flowers_positions=[];
    let location_position;
    return window.addEventListener('scroll', ()=>{
        //posisicones de las líneas
        for(let index = 0; index < lines_array.length; index++) {
            lines_positions[index] = lines_array[index].getBoundingClientRect().top;
        }


        //posisicones de las flores
        flowers_positions[0]=story_flowers[0].getBoundingClientRect().top;
        flowers_positions[1]=story_flowers[1].getBoundingClientRect().top;
    
        //posicion de la ubicación
        location_position=location_container.getBoundingClientRect().top;

        //Comprobaciones de posiciones de líneas
        for (let index = 0; index < lines_positions.length; index++) {
            if (windowSize > lines_positions[index]) {
                lines_array[index].classList.add('fadeInScale');
            }
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
}

