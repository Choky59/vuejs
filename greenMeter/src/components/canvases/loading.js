var myWidth, myHeight, canvas,s;
let i = 0 ;
let counter = 0;
let turn = 0;

export function main(_p5) {

  s = _p5
  
  s.preload = () => {
    //agregar imagen
  }

  s.setup = () => {
    i=0;
    myWidth = s.select(`#loadingAnimation`);
    myHeight = s.select(`#loadingAnimation`);

    canvas = s.createCanvas(myWidth.width, myHeight.height)
    //canvas.mouseOver(s.doSomething)
    //canvas.mouseOut(s.stopSomething)
    canvas.parent("canvasID");
    canvas.position(0,130)
    canvas.style("z-index", '1')
    s.background(255);
    s.frameRate(60);
    s.noFill(255);
    s.stroke(41,252,53)
    s.strokeWeight(6)
    


  }

  s.draw = _ => {
    i+= 0.026179933333333336*4
    s.arc(myWidth.width/2, myHeight.height/2, 80, 80, 2.35619 , 2.35619 + i );

    if(i > 4.67239) {
      i = 0;
      if(turn == 0) {
        s.stroke(37 , 222,  202);
      }
      else if (turn == 1) {
        s.stroke(255)
      } else {
        s.stroke(41,252,53)
        turn = -1;
      }
      turn += 1;
    }

  }
  
  s.mousePressed = () => {

    //p5.resizeCanvas( myDiv.width , 500);
  }
  s.windowResized = () => {
    myWidth = s.select(`#canvasID`);

    s.resizeCanvas(myWidth.width , myHeight.height);
    s.background(100)
  }
  s.doSomething = () => {
    s.loop();
  }
  s.stopSomething = () => {
    s.noLoop();
  }
  

}

export function notLoading() {
  canvas.remove()
  s.noLoop();
}

export function loading() {
  s.setup();
  s.loop()
}