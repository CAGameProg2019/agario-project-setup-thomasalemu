class Vector {

    constructor(x,y) {
        this.x = x
        this.y = y
    }
    addVector(vec){
        this.x += vec.x;
        this.y += vec.y;
        return this;
    }
    //functions to write for HW
    subVector(vec){
        this.x-= vec.x;
        this.y-=vec.y;
        return this;

    }

    scale(s){
        this.x*= s;
        this.y*= s;
        return this;


    }

    toString(){
        return '<'+ this.x+', ' + this.y+ '>';
    }


}
