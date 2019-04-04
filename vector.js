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
            var num1 = prompt("Enter a number");
            var num2 = prompt("Enter a number");
            var thisVector = Vector(num1, num2);
            var thisVector = Vector(num1-num2);
            alert(thisVector);

        }

    }

    scale(s){
        var s= prompt("Enter a number");
        alert(s*thisVector);

    }

    toString(){
        return '<'+ this.x+', ' + this.y+ '>';
    }


}
