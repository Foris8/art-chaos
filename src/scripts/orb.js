//Todays goal is to draw abunch of balls on canvas
import * as API from "./api"
class Orb{
    constructor(args){
        this.pixel = args.pixel;
        this.ctx = args.ctx;
        this.x = args.x;
        this.y = args.y;
        this.pos = [this.x,this.y];
        this.diameter = args.diameter;
        this.radius = args.diameter/2;
        this.borderWidth = 1;
    }


    isColisionWith(otherObject){
        const centerDist = API.dist(this.pos,otherObject.pos);
        return centerDist < (this.radius + otherObject.radius);
        // return centerDist < 0.01;
    }



    //draw the object according to the current position
    draw(){
        this.ctx.beginPath();
        this.ctx.arc(this.x + this.radius, this.y + this.radius, this.radius, 0, 2 * Math.PI);
        this.ctx.fillStyle = `rgba(${this.pixel[0]}, ${this.pixel[1]}, ${this.pixel[2]}, ${this.pixel[3] / 255})`;
        this.ctx.fill();

        this.ctx.strokeStyle = this.pixel;
        this.ctx.lineWidth = this.borderWidth;
        this.ctx.stroke();
    }

    move(){
        this.x +=1;
        this.y +=1;
        this.draw();
        // console.log("Move the object")
    }


}


export default Orb;