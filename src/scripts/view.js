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
             this.mouseMove(targetCanvas);
             this.animate();
         }

         
    }

    mouseMove(targetCanvas){
        this.targetCanvas = targetCanvas;
        this.targetCtx = targetCanvas.getContext('2d');
        this.targetCanvas.addEventListener('mousemove',this.handlePixelizeMoveOver.bind(this));
    }

   handlePixelizeMoveOver(event) {
        const element = document.getElementsByClassName("pixilize-canvas")[0];
        // debugger
        const rect = element.getBoundingClientRect(); 

       const canvasX = event.clientX - rect.left;
       const canvasY = event.clientY - rect.top;
       const mousePos = { x: canvasX, y: canvasY };

       // Iterate through orbs and find the closest one
       let closestOrb = null;
       let closestDistance = Infinity; 

       for (const orb of Object.values(this.orbs)) {
           const distance = Math.sqrt((mousePos.x - orb.x) ** 2 + (mousePos.y - orb.y) ** 2);

           //chose the closest orb
           if (distance < closestDistance) {
               closestDistance = distance;
               closestOrb = orb;
           }
       }


       if (closestOrb) {
           closestOrb.moveOffset();
       }
    }

    //This functino is to draw a new 
    draw(){
        //clear the current canvas
        this.targetCtx.clearRect(0, 0, this.targetCanvas.width, this.targetCanvas.height);
       
        const orbs = Object.values(this.orbs);
        orbs.forEach(orb =>{
            orb.move();
        });

        
    }


    animate(){ 

        this.draw();
        
        requestAnimationFrame(this.animate.bind(this));
        
        
    }


}

export default View;