import ColorThief from "colorthief"

function colorExtract(path){
    const imagePath = path;

    // Number of dominant colors to extract
    const numberOfColors = 5;

    // Function to display colors
    function displayColors(colors) {
        const colorContainer = document.getElementById('colorContainer');

        colors.forEach(color => {
            const colorBox = document.createElement('div');
            colorBox.style.backgroundColor = color;
            colorBox.classList.add('color-box');
            colorContainer.appendChild(colorBox);
        });
    }

    // Use the ColorThief library to extract dominant colors
    const colorThief = new ColorThief();
    const image = document.createElement('img');
    image.src = imagePath;

    image.onload = function () {
        const dominantColors = colorThief.getPalette(image, numberOfColors);
        const hexColors = dominantColors.map(color => `rgb(${color[0]}, ${color[1]}, ${color[2]})`);
        console.log(hexColors);
        displayColors(hexColors);
    };
}

export default colorExtract;
