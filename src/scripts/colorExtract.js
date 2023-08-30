import ColorThief from "colorthief"

function colorExtract(image){
    // Number of dominant colors to extract
    const numberOfColors = 5;

    // Function to display colors
    function displayColors(colors) {
        const colorContainer = document.getElementById('colorContainer');
        const existingColorBoxes = document.querySelectorAll('.color-box');

        colors.forEach((color, index) => {
            let colorBox;

            // If there are existing color boxes, update their color
            if (existingColorBoxes.length > index) {
                colorBox = existingColorBoxes[index];
                colorBox.style.backgroundColor = color;
            } else {
                // If there are not enough existing color boxes, create new ones
                colorBox = document.createElement('div');
                colorBox.style.backgroundColor = color;
                colorBox.classList.add('color-box');
                colorBox.setAttribute("data-rgb", color);
                colorBox.addEventListener("click",()=>{

                const text = colorBox.getAttribute("data-rgb");
                
                //copy the color pallete
                navigator.clipboard.writeText(text)
                    .then(() => {
                        window.alert(`Color ${text} copied to clipboard`)
                        // console.log('Text copied to clipboard:', text);
                    })
                    .catch((err) => {
                        console.error('Failed to copy text:', err);
                    });
                })
                colorContainer.appendChild(colorBox);
            }
        });

        // Remove any extra color boxes if there are more existing boxes than colors
        if (existingColorBoxes.length > colors.length) {
            for (let i = colors.length; i < existingColorBoxes.length; i++) {
                existingColorBoxes[i].remove();
            }
        }
    }

    // Use the ColorThief library to extract dominant colors
    const colorThief = new ColorThief();

    image.onload = function () {
        const dominantColors = colorThief.getPalette(image, numberOfColors);
        const hexColors = dominantColors.map(color => `rgb(${color[0]}, ${color[1]}, ${color[2]})`);
        console.log(hexColors);
        displayColors(hexColors);
    };
}

export default colorExtract;
