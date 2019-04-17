let canvas = document.getElementById('main');
let c = canvas.getContext('2d');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const FOOD_COUNT = 100;
let mpos;

let player;
let foods = [] ;

let colors = [
    'red',
    '#459C42'
];

let name;

function randomColor(){
    let index = Math.floor(Math.random()* colors.length);
    return colors[index];
}
function generateFood(){
    let x = Math.random()* canvas.width;
    let y = Math.random()* canvas.height;

    foods.push(new Food(x,y,10,randomColor()));
}

function init(){

    function name(){
        name=prompt('what is your name?');
        this.name=name;
    }
    mpos= new Vector(canvas.width/2, canvas.height/2);
    // name=prompt('What is your name?');

    player = new Player(canvas.width/2, canvas.height/2,25,randomColor(),name());

    for (var i=0;i<FOOD_COUNT;i++){
        generateFood();
    }
    update();
}

function update(){

    c.clearRect(0,0,canvas.width,canvas.height);


    for (var i=0; i<foods.length;i++){
        let eaten = player.intersects(foods[i]);
        if(!eaten){
            foods[i].draw(c);
        }else{
            player.addMass(foods[i].mass);
            foods.splice(i,1);
            i--;
        }

    }

    while(foods.length<FOOD_COUNT){
        generateFood();
    }

    player.draw(c);
    player.x= mpos.x;
    player.y= mpos.y;
    Player.name.x=mpos.x;
    Player.name.y=mpos.y;
    requestAnimationFrame(update);
}

window.addEventListener('load', function() {
    init();

    window.addEventListener('mousemove',function(event){
        mpos.x= event.clientX-canvas.offsetLeft;
        mpos.y= event.clientY-canvas.offsetTop;
        // console.log(mpos.toString());
    });
});
