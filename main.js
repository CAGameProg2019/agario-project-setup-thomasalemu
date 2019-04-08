let canvas = document.getElementById('main');
let c = canvas.getContext('2d');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let foods = [] ;

let colors = [
    'blue',
    'green',
    'red'
];

function randomColor(){
    let index = Math.floor(Math.random()* colors.length);
    return colors[index];
}

function init(){
    for (var i=0;i<100;i++){
        let x = Math.random()* canvas.width;
        let y = Math.random()* canvas.height;
        foods.push(new Food(x,y,20,randomColor()));
    }
    update();
}

// function init() {
//     let x = Math.random()* canvas.width;
//     let y = Math.random()* canvas.height;
//     foods.push(new Food(canvas.width/2, canvas.height/2, 20,randomColor()));
//     update();
// }

function update() {
    c.clearRect(0,0,canvas.width,canvas.height);

    for (var i=0; i<foods.length;i++){
        foods[i].draw(c);
    }

    requestAnimationFrame(update);
}

window.addEventListener('load', function(event) {
    init();
});
