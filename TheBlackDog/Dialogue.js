class Dialogue {
  constructor({ gradient_fill, grad_position, grad_size, gradient_content }) {
    var gradient;
    if(map == 10 || map == 11 || map == 14){
      gradient = c.createLinearGradient(0, canvas.height, 0, 0);
      gradient.addColorStop(0, 'black');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      
    }
    else{
      gradient = c.createLinearGradient(0, 0, 0, 400);
      gradient.addColorStop(0, 'rgba(0, 0, 0, 1');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0.1)');
    }
      this.grad_position = {
          x: grad_position.grad_x,
          y: grad_position.grad_y
      };
      this.grad_size = {
          length: grad_size.grad_length,
          width: grad_size.grad_width
      };
      this.gradient_fill = gradient;
      this.gradient_content = gradient_content;



  }

  write() {
    c.fillStyle = this.gradient_fill;
    c.fillRect(this.grad_position.x, this.grad_position.y, this.grad_size.width, this.grad_size.length);

    // Draw all lines of dialogue at once
    c.font = '25px Hangyaboly';
    c.fillStyle = 'white'

    if(this.gradient_content.length == 1){
      this.gradient_content.forEach((line, index) => {
        c.fillText(line, canvas.width / 9, 65);
      });
    }
    else if (map == 10 || map == 11 || map == 14){
      this.gradient_content.forEach((line, index) => {
        c.fillText(line, canvas.width / 9, 777 + index * 30); // adjust the y-coordinate
      });
    }
    else{
      this.gradient_content.forEach((line, index) => {
          c.fillText(line, canvas.width / 9, 90 + index * 30);
          
      });
    }
   
    // hangyabolyfont.load().then((loadedfont) => {
    //     document.fonts.add(loadedfont);

    //     //animateText(this.gradient_content); // Animate the text
    // });

  } 
}

const hangyabolyfont = new FontFace('Hangyaboly', 'url(./hangyaboly/Hangyaboly.ttf)');

hangyabolyfont.load().then((loadedfont) => {
document.fonts.add(loadedfont);
});

