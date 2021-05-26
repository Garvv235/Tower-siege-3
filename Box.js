class Box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.image = loadImage("sprites/wood1.png");
    }
    display(color,border){
        var pos = this.body.position;
        var angle = this.angle;
        push();
        if (this.body.speed < 3) {
            rectMode(CENTER);
            translate(pos.x, pos.y);
            rotate(angle);
            fill(color);
            stroke(border);
            strokeWeight(4);
            rect(0, 0, this.width, this.height);
            pop();
        } else {
            push();
            World.remove(world, this.body);
            this.visibility = this.visibility - 5;
            tint(255, this.visibility);
            pop();
        }
    }
    score(){
        if(this.Visibility < 0 && this.Visibility > -105){
            score = score + 1;
        }
    }
    }
  