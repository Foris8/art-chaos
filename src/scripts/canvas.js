// import { Raster } from "paper/dist/paper-core";
// import * as paper from "paper"
import paper from "paper"
import { Raster } from "paper/dist/paper-core"

export default function default_canvas(){
    let canvas = document.getElementById('myCanvas');
    paper.setup(canvas); // create new project and view

    let raster = new paper.Raster('star');
    raster.position = paper.view.center;
    // raster.visible = false;

    // The size of our grid cells:
    var gridSize = 12;

    // Space the cells by 120%:
    var spacing = 1.2;

    raster.on('load',function(){
        raster.size = new paper.Size(128,128)
    })

    for (var y = 0; y < raster.height; y++) {
        for (var x = 0; x < raster.width; x++) {
            // Get the color of the pixel:
            var color = raster.getPixel(x, y);
            // Create a circle shaped path:
            // var path = new paper.Path.Circle({
            //     center: p,
            //     radius: gridSize / 2 / spacing,
            //     fillColor: 'black'
            // });
            var path = new paper.Path.Circle({
                center: new paper.view.center,
                radius: gridSize / 2 / spacing,
                fillColor: color
            });

            // let path = new paper.Path.Circle(new paper.Point(x, y), gridSize / 2 / spacing);
            // path.fillColor = color;
            // Scale the path by the amount of gray in the pixel color:
            function onFrame(event) {
                // Your animation or continuous update logic here
            }
        }
    }

    // paper.project.activeLayer.position = paper.view.center;


    // var path = new paper.Path.Circle({
    //     center: paper.view.center,
    //     radius: 50,
    //     fillColor: 'red'
    // });

    // // Define an interaction event for the path
    // path.onClick = function (event) {
    //     path.fillColor = 'blue';
    // };

    // // Continuously update the view
    // function onFrame(event) {
    //     // Your animation or continuous update logic here
    // }
}


