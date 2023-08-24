import Example from "./scripts/example";
import default_canvas from "./scripts/canvas";

document.addEventListener("DOMContentLoaded",function(){
    console.log("Hello World");
    default_canvas();

    const main = document.getElementById("main");
    new Example(main);
})