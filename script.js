let canvas;
let ctx;
window.onload = function(){
    canvas = document.getElementById('background');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

// responsive canvas size 
window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
});

class Eye{
    #ctx;
    #width;
    #heigth

    constructor(ctx, width, height){
        this.#ctx = ctx;
        this.#width = width;
        this.#heigth = height;
    }

    #draw_eye(){

    }

}