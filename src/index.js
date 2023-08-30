import Example from "./scripts/example";
import default_canvas from "./scripts/canvas";
import View from "./scripts/view";
import colorExtract from "./scripts/colorExtract";




document.addEventListener("DOMContentLoaded",function(){
    //Control the start button
    const startButton = document.getElementById('start-button');
    startButton.addEventListener('click',handleStartButton);
    
    //Control the uploadButton
    const uploadInput = document.getElementById('uploadInput');
    uploadInput.addEventListener('change',handleFileUpload);
})

//nested handler to trigger the event in order
function handleFileUpload(event){
    const selectedFile = event.target.files[0];
    const imageUrl = URL.createObjectURL(selectedFile);
    const newImage = new Image();
    newImage.src = imageUrl;

    //Get the Canvas Information
    const sourceCanvas = document.getElementById('sourceCanvas');
    const sourceCtx = sourceCanvas.getContext('2d');


    const view = new View(sourceCanvas,sourceCtx,newImage);
    // view.pixelize();
    view.showImg();


    //Control the Extract Color Button
    const extractColorButton = document.getElementById('extractColorButton');
    extractColorButton.addEventListener('click',handleExtractColor);

    //Control the Pixilize Button
    const pixelizeButton = document.getElementById('pixilizeImgButton');
    pixelizeButton.addEventListener('click', handlePixelize);
}

function handleExtractColor(){
    const sourceCanvas = document.getElementById('sourceCanvas');
    const sourceCtx = sourceCanvas.getContext('2d');

    // Get the data URL representing the image on the canvas
    const dataURL = sourceCanvas.toDataURL('image/png'); 

    // Create a new Image object and assign the data URL as the src
    const newImage = new Image();
    newImage.src = dataURL;

    colorExtract(newImage);
}

function handlePixelize(){
    const sourceCanvas = document.getElementById('sourceCanvas');
    const sourceCtx = sourceCanvas.getContext('2d');

    // Get the data URL representing the image on the canvas
    const dataURL = sourceCanvas.toDataURL('image/png');

    // Create a new Image object and assign the data URL as the src
    const newImage = new Image();
    newImage.src = dataURL;

    //Create the view
    const view = new View(sourceCanvas, sourceCtx, newImage);
    let newCanvas;
    const canvasDiv = document.getElementById('canvasDiv')

    //Check if there is any other canvas element inside of the canvasDiv
    const existingPixilizeCanvas = document.querySelectorAll('.pixilize-canvas');
    if (existingPixilizeCanvas.length <1){
        //add a new canvas into canvasDiv
        newCanvas = document.createElement('canvas');
        newCanvas.classList.add('pixilize-canvas');
        canvasDiv.appendChild(newCanvas);
    }else{
        //Use the canvas as target canvas
        newCanvas = existingPixilizeCanvas[0];
    }
    // debugger
    const newCtx = newCanvas.getContext('2d');
    view.pixelize(newCanvas,newCtx);
    
    // newCanvas.addEventListener('mousemove',handlePixelizeMoveOver)
}


function handleStartButton(){
    const particleElement = document.querySelectorAll("#particles-js")[0];
    const introPage = document.querySelectorAll(".intro-modal")[0];
    const toolContainer = document.querySelectorAll(".container")[0];
    const dropDownButton = document.querySelectorAll(".dropdown")[0];

    particleElement.style.zIndex = -2;
    introPage.style.display = "none";
    toolContainer.style.zIndex = 3;
    dropDownButton.style.zIndex = 3;
}
