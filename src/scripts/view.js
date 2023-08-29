import Orb from "./orb";

class View{
    constructor(sourceCanvas, targetCanvas, sourceCtx, targetCtx, imageSource){
        this.sourceCanvas = sourceCanvas;
        this.targetCanvas = targetCanvas;
        this.sourceCtx = sourceCtx;
        this.targetCtx = targetCtx;
        this.sourceImage = new Image();
    
        this.sourceImage.src = imageSource;
        this.imgSize = 500;

    

        this.orbs = [];
    }

    //In this function, Iterating through the whole image and fetch
    //the pixel information and create the orbs objects into orbs array 
    pixelize(){

         //onload the sourceImage
         this.sourceImage.onload = ()=> {
             this.sourceCanvas.width = this.imgSize;
             this.sourceCanvas.height = this.imgSize;
             this.targetCanvas.width = this.imgSize;
             this.targetCanvas.height = this.imgSize;

             this.sourceCtx.drawImage(this.sourceImage,0,0,this.imgSize,this.imgSize);

             //get the information
             const circleDiameter = 5;
             const circleRadius = circleDiameter/2;
             const args = {};

            //iteratre through the image and get the piexel info
             for(let y = 0; y < this.sourceCanvas.height; y += circleDiameter) {
                for (let x = 0; x < this.sourceCanvas.width; x += circleDiameter) {
                    args["pixel"] = this.sourceCtx.getImageData(x, y, 1, 1).data;
                    args["ctx"] = this.targetCtx;
                    args["x"] = x;
                    args["y"] = y;
                    args["diameter"] = circleDiameter;
                    const orb = new Orb(args);
                    this.orbs.push(orb);
                    orb.draw();
                
                }
             }
            
            // this.annimate();
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