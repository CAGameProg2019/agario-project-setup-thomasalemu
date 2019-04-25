let canvas = document.getElementById('main');
let c = canvas.getContext('2d');


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const FOOD_COUNT = 100;
let mpos;
let name1;
let player;
let foods = [] ;

let keyPressed = {
    s:false,
    d:false,
    r:false
}

let colors = [
    'red',
    '#459C42'

];

let strokeColors = [
    '#666666',
    '#ffd700',
    '#7fffd4'
]

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

    // function name(){
    //     name=prompt('what is your name?');
    //     this.name=name;
    // }
    mpos= new Vector(canvas.width/2, canvas.height/2);
    name1=prompt('What is your name?');

    let color = randomColor();
    let stroke = strokeColors[colors.indexOf(color)]
    player = new Player(canvas.width/2, canvas.height/2,25,color,stroke,name1,10);

    for (var i=0;i<FOOD_COUNT;i++){
        generateFood();
    }
    update();
}

function update(){

    c.clearRect(0,0,canvas.width,canvas.height);
    player.update(mpos);

    if (keyPressed.s === true) {
        player.radius-=1
    }//else if (player.radius==0){
        //player.radius=10
    //};
    if (keyPressed.d === true) {
        player.radius+=1
    }
    if (keyPressed.r === true) {
        alert("reeeeeeeeee");
        keyPressed.r=false;
    }
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

window.addEventListener('keydown',function(event){
    if (event.key === "s"){
    keyPressed.s = true;
    }
    if (event.key === "d"){
    keyPressed.d = true;
    }
    if (event.key === "r"){
    keyPressed.r = true;
    }
});

window.addEventListener('keyup',function(event){
    if (event.key === "s"){
    keyPressed.s = false
    }
    if (event.key === "d"){
    keyPressed.d =  false;
    }
    if (event.key === "r"){
    keyPressed.r =  false;
    }
});
