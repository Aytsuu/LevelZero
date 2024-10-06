class Elements extends Sprite{
    constructor({ imgSrc, frameRate}){
        super({imgSrc, frameRate})

        this.position = {
            x: 100,
            y: 740  
        }
    }

    move(speed){
        this.position.x += speed;
    }
}