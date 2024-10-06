let animationId; // To store the requestAnimationFrame ID
let startTime; // To track when the animation starts

class Newspaper {
    constructor(image) {
        this.image = image; // Image for the newspaper
        this.spriteWidth = 187; // Width for each frame
        this.spriteHeight = 215; // Height of the sprite
        this.currentX = canvas.width; // Start position (right side of the canvas)
        this.currentY = Math.random() * canvas.height; // Random starting Y position
        this.speedX = Math.random() * 3 + 1; // Random speed of horizontal movement
        this.speedY = Math.random() * 2 - 1; // Random vertical speed
        this.gameFrame = 0; // Frame counter for animation
        this.staggerFrames = 20; // Control animation speed
    }

    update() {
        this.currentX -= this.speedX; // Move left
        this.currentY += this.speedY; // Move vertically

        // Boundary conditions
        if (this.currentY < 0) this.currentY = 0;
        else if (this.currentY > canvas.height - this.spriteHeight) {
            this.currentY = canvas.height - this.spriteHeight;
        }
    }

    draw(c) {
        let position = Math.floor(this.gameFrame / this.staggerFrames) % 10; // Assuming 10 frames
        let frameX = this.spriteWidth * position; // Calculate the x position for the current frame
        c.drawImage(this.image, frameX, 0, this.spriteWidth, this.spriteHeight, this.currentX, this.currentY, this.spriteWidth, this.spriteHeight);
        this.gameFrame++;
    }
}

const newspapaerImg = new Image();
newspapaerImg.src = '/images/papers.png'; // Image for newspapers
const numberOfNewspapers = 15; // Set the number of newspapers you want to appear
const newspapers = [];

// Initialize newspapers
for (let i = 0; i < numberOfNewspapers; i++) {
    newspapers.push(new Newspaper(newspapaerImg));
}

// Function to animate the newspapers
function animate() {
    
    newspapers.forEach((newspaper) => {
        if (newspaper.currentX > -newspaper.spriteWidth) { // Only draw if active (on screen)
            newspaper.update(); // Update position
            newspaper.draw(c); // Draw on canvas
        }
    });

    // Continue animation if within the 5-second limit
    if (Date.now() - startTime < 5000) { // Check if 5 seconds have passed
        animationId = requestAnimationFrame(animate); // Continue animating
    } else {
        // Stop the animation after 5 seconds
        cancelAnimation()
    }
}

// Start the animation process and set the timer
function startAnimation() {
    startTime = Date.now(); // Set the start time
    animate(); // Begin the animation
}

function cancelNewspaperAnimation(){
    cancelAnimationFrame(animationId)
}