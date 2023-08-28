import Example from "./scripts/example";
import default_canvas from "./scripts/canvas";
import View from "./scripts/view";
import colorExtract from "./scripts/colorExtract";




document.addEventListener("DOMContentLoaded",function(){
    console.log("Hello World");

    const uploadInput = document.getElementById('uploadInput');
    uploadInput.addEventListener('change',handleFileUpload)
    
    // const sourceCanvas = document.getElementById('sourceCanvas');
    // const targetCanvas = document.getElementById('targetCanvas');
    // const sourceCtx = sourceCanvas.getContext('2d');
    // const targetCtx = targetCanvas.getContext('2d');

    // const view = new View(sourceCanvas, targetCanvas, sourceCtx, targetCtx, "image/download.jpeg");
    // view.pixelize();
    // console.log(view.orbs.length);
    // setInterval(view.annimate(),10)
    // view.annimate();





    // const main = document.getElementById("main");
    // new Example(main);
})

function handleFileUpload(event){
    const selectedFile = event.target.files[0];
    console.dir(selectedFile);
    const imageUrl = URL.createObjectURL(selectedFile);

    const sourceCanvas = document.getElementById('sourceCanvas');
    const targetCanvas = document.getElementById('targetCanvas');
    const sourceCtx = sourceCanvas.getContext('2d');
    const targetCtx = targetCanvas.getContext('2d');

    const view = new View(sourceCanvas, targetCanvas, sourceCtx, targetCtx, imageUrl);
    view.pixelize();

    colorExtract(imageUrl);
    
}