
export default function default_canvas(){
    const sourceCanvas = document.getElementById('sourceCanvas');
    const targetCanvas = document.getElementById('targetCanvas');
    const sourceCtx = sourceCanvas.getContext('2d');
    const targetCtx = targetCanvas.getContext('2d');

    const sourceImage = new Image();
    sourceImage.src = 'image/van-gogh-starry-night-min.jpg';

    sourceImage.onload = () => {
        sourceCanvas.width = sourceImage.width;
        sourceCanvas.height = sourceImage.height;
        targetCanvas.width = sourceImage.width;
        targetCanvas.height = sourceImage.height;

        sourceCtx.drawImage(sourceImage, 0, 0);

        const circleDiameter = 10; // Adjust the diameter of the circles as needed
        const circleRadius = circleDiameter / 2;
        const borderWidth = 1; // Adjust the border width as needed
        const borderColor = 'white'; // Border color

        for (let y = 0; y < sourceCanvas.height; y += circleDiameter) {
            for (let x = 0; x < sourceCanvas.width; x += circleDiameter) {
                const pixel = sourceCtx.getImageData(x, y, 1, 1).data;

                // Draw the circle with white border around each pixel
                targetCtx.beginPath();
                targetCtx.arc(x + circleRadius, y + circleRadius, circleRadius, 0, 2 * Math.PI);
                targetCtx.fillStyle = `rgba(${pixel[0]}, ${pixel[1]}, ${pixel[2]}, ${pixel[3] / 255})`;
                targetCtx.fill();

                targetCtx.strokeStyle = borderColor;
                targetCtx.lineWidth = borderWidth;
                targetCtx.stroke();
            }
        }
    };

}


