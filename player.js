class Player extends Food {

    constructor(x,y,radius,color) {
        super(x,y,radius,color);
        Player.x=this.x;
        Player.y=this.y;
    }

}
Object.assign(Player, Food);
