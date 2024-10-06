let raindrops = [];
let splashes = [];
let rainAnimation;

// Class for raindrops
class Raindrop {
    constructor() {
        this.width = 3;
        this.height = 35;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * -canvas.height;
        this.speedY = Math.random() * 50;
        this.color = 'rgba(40, 40, 40, 0.4)';
    }

    update() {
        this.y += this.speedY;
        if (this.y > canvas.height) {
            this.createSplash(); // Create splash effect
            this.reset();
        }
    }

    draw() {
        c.fillStyle = this.color;
        c.fillRect(this.x, this.y, this.width, this.height);
    }

    // Create a splash effect when hitting the bottom
    createSplash() {
        for (let i = 0; i < 5; i++) {
            splashes.push(new Splash(this.x, canvas.height));
        }
    }

    // Reset the raindrop to a random position at the top
    reset() {
        this.y = Math.random() * -canvas.height;
        this.x = Math.random() * canvas.width;
    }
}

// Class for splash particles
class Splash {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 1; // Random size of splash particle
        this.speedX = (Math.random() * 2 - 1) * 2; // Spread speed on the X-axis
        this.speedY = Math.random() * -2; // Upward speed
        this.gravity = 0.05; // Gravity effect to slow down particles
        this.color = 'rgba(173, 216, 230, 0.8)';
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.speedY += this.gravity; // Apply gravity to slow down upward movement
        this.size *= 0.95; // Gradually shrink the splash particle
    }

    draw() {
        c.fillStyle = this.color;
        c.beginPath();
        c.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        c.fill();
    }
}

// Create multiple raindrops
function createRaindrops(number) {
    for (let i = 0; i < number; i++) {
        raindrops.push(new Raindrop());
    }
}
createRaindrops(100);
// Animate the rain and splashes
function animateRain() {

    // Update and draw raindrops
    raindrops.forEach(raindrop => {
        raindrop.update();
        raindrop.draw();
    });

    // Update and draw splash particles
    splashes.forEach((splash, index) => {
        splash.update();
        splash.draw();

        // Remove splash particle if it becomes too small
        if (splash.size < 0.5) {
            splashes.splice(index, 1);
        }
    });
    rainAnimation = requestAnimationFrame(animateRain);
}

function cancelRain(){
    cancelAnimationFrame(rainAnimation)
}