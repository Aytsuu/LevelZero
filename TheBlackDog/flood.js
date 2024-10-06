let gameSpeed = 20;
let floodAnimation;
const flood = new Image();
flood.src = './images/flood.png';

class Layer {
    constructor(image, speedModifier) {
        this.x = 0;
        this.y = 200;
        this.width = 2400;
        this.height = 700;
        this.x2 = this.width;
        this.image = image;
        this.speedModifier = speedModifier;
        this.speed = gameSpeed * this.speedModifier;
    }

    update() {
        this.speed = gameSpeed * this.speedModifier;
        if (this.x <= -this.width) {
            this.x = this.width + this.x2 - this.speed;
        }
        if (this.x2 <= - (this.width + 1)) {
            this.x2 = this.width + this.x - this.speed;
        }
        this.x = Math.floor(this.x - this.speed);
        this.x2 = Math.floor(this.x2 - this.speed); 
    }

    draw() {
        c.drawImage(this.image, this.x, this.y, this.width, this.height);
        c.drawImage(this.image, this.x2, this.y, this.width, this.height);
    }
}

// Create layers for scrolling background
const floodLayer = new Layer(flood, 0.5);
const gameObjects = [floodLayer];

// Function to animate the layers
function animateFlood() {

    // Update and draw the animated layers
    gameObjects.forEach(object => {
        object.update();
        object.draw();
    });

    floodAnimation = requestAnimationFrame(animateFlood);
}

function cancelFlood() {
    cancelAnimationFrame(floodAnimation);
}