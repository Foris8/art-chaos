import Orb from "./orb";

class View{
    constructor(sourceCanvas, sourceCtx, img){
        this.sourceCanvas = sourceCanvas;
        // this.targetCanvas = targetCanvas;
        this.sourceCtx = sourceCtx;
        // this.targetCtx = targetCtx;
        this.sourceImage = img;
    
        // this.sourceImage.src = imageSource;
        this.imgSize = 500;
        this.sourceCanvas.width = this.imgSize; //resize the canvas
        this.sourceCanvas.height = this.imgSize;
        this.orbs = {};


    }

    //Show the image on the current Canvas
    showImg(){
        this.sourceImage.onload = ()=>{
            this.sourceCtx.drawImage(this.sourceImage,0,0,this.imgSize,this.imgSize);
        }
    }

    //In this function, Iterating through the whole image and fetch
    //the pixel information and create the orbs objects into orbs array 
    pixelize(targetCanvas,targetCtx){
        // debugger
         //onload the sourceImage
         this.sourceImage.onload = ()=> {
             targetCanvas.width = this.imgSize;
             targetCanvas.height = this.imgSize;

             this.sourceCtx.drawImage(this.sourceImage,0,0,this.imgSize,this.imgSize);

             //get the information
             const circleDiameter = 5;
             const circleRadius = circleDiameter/2;
             const args = {};

            //iteratre through the image and get the piexel info
             for(let y = 0; y < this.sourceCanvas.height; y += circleDiameter) {
                for (let x = 0; x < this.sourceCanvas.width; x += circleDiameter) {
                    args["pixel"] = this.sourceCtx.getImageData(x, y, 1, 1).data;
                    args["ctx"] = targetCtx;
                    args["x"] = x;
                    args["y"] = y;
                    args["diameter"] = circleDiameter;
                    const orb = new Orb(args);
                    this.orbs[[x,y]] = orb;
                    orb.draw();
                }
             }
             console.log(this.orbs);
         }

    }

    annimate(){
        //check all the orbs element and draw it
        //fetch the object in array and compare it with other objects O(n^2)
        console.log("annimate")
        for (let i = 0; i < this.orbs.length; i++) {
            for (let j = i + 1; j < this.orbs.length; j++) {
                // if (this.orbs[i].isColisionWith(this.orbs[j])){
                //     this.orbs[i].move();
                //     this.orbs[j].move();
                // }
                this.orbs[i].move();
                this.orbs[j].move();
            }
        }
        // requestAnimationFrame(this.animate.bind(this));
        
        
    }


}

export default View;