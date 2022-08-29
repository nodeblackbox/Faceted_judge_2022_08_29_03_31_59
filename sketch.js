function setup() {
  createCanvas(400, 400);
}
let x_pos = 0.1;
let x_pos_speed = 1;
let y_pos = 0.1;
let y_pos_speed = 1;
//---------------------
let color = 2;

let color_switch = 1;
let boxsize = 100;

function draw() {
  background(220);

  //   fill(0,0,color)
  //   rect(x_pos,y_pos,boxsize,boxsize,10)
  //   x_pos += 0.1
  //   y_pos += 0.1
  //   color += color_switch

  //   if(color == 255){
  //     color_switch = -1
  //   }
  //   if(color == 0){
  //     color_switch = 1
  //   }

  //   if(x_pos >= width - boxsize){
  //     x_pos_speed = -random(0,1)
  //   }
  //   if(x_pos <= 0){
  //     x_pos_speed = random(0,1)
  //   }

  //   if(y_pos >= height - boxsize){
  //     y_pos_speed = -random(0,1)
  //   }
  //   if(y_pos <= 0){
  //     y_pos_speed = random(0,1)
  //   }
  //   // console.log(x_pos)

  //   x_pos += x_pos_speed
  //   y_pos += y_pos_speed

  // fraime_vis = new rand_boxMaker()

  // console.log(new rand_boxMaker(10,10).display())

  new rand_boxMaker(10, 10).display();
}

class rand_boxMaker {
  constructor(x_pos, y_pos) {
    this.display = function () {
      //     this.X = 0
      //     this.Y = 0
      this.x_pos = x_pos;
      this.y_pos = y_pos;

      //     console.log(this.X)
      //     console.log(this.Y)

      fill(0, 0, color);
      rect(this.x_pos, y_pos, boxsize, boxsize, 10);
      x_pos += 0.1;
      y_pos += 0.1;
      color += color_switch;

      if (color == 255) {
        color_switch = -1;
      }
      if (color == 0) {
        color_switch = 1;
      }

      if (x_pos >= width - boxsize) {
        x_pos_speed = -random(0, 1);
      }
      if (x_pos <= 0) {
        x_pos_speed = random(0, 1);
      }

      if (y_pos >= height - boxsize) {
        y_pos_speed = -random(0, 1);
      }
      if (y_pos <= 0) {
        y_pos_speed = random(0, 1);
      }
      // console.log(x_pos)

      x_pos += x_pos_speed;
      y_pos += y_pos_speed;
      // return this
    };
  }
}

// console.log(fraime_vis)
