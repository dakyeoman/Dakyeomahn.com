
// canvas.id('myCanvas');

let shaking1;
let soundPlayed1 = false;
let shaking2;
let soundPlayed2 = false;
let shaking3;
let soundPlayed3 = false;
let drinking;
let soundPlayed4 = false;

function preload() {
  rubikPixelsFont = loadFont('RubikWetPaint-Regular.ttf');
  perfect = loadImage('perfect.png');
  shaking1 = loadSound('shaking1.mp3');
  shaking2 = loadSound('shaking2.mp3');
  shaking3 = loadSound('shaking3.mp3');
  drinking = loadSound('drinking.mp3');
}

function shakerBody(){
  beginShape();
  vertex(-rectWidth / 2.3, -rectHeight / 2);
  vertex(rectWidth / 2, -rectHeight / 2); 
  vertex(rectWidth / 2, rectHeight / 2.4); 
  vertex(-rectWidth / 1.8, rectHeight / 2);
  endShape(CLOSE);
}

function shakerCover(){
  
  fill('#61E8DF')
  beginShape();
  vertex(-rectWidth+150, -rectHeight+80);
  vertex(rectWidth-570, -rectHeight +80); 
  vertex(rectWidth-570, rectHeight-80); 
  vertex(-rectWidth+150, rectHeight-80);
  endShape(CLOSE);
  }

function shakingCap(){
  fill('#57CFC7')
    beginShape();
    vertex(-rectWidth+120, -rectHeight+80);
    vertex(rectWidth-600, -rectHeight +140); 
    vertex(rectWidth-600, rectHeight-80); 
    vertex(-rectWidth+120, rectHeight-180);
    endShape(CLOSE);
}
function milk0(){
  beginShape();
  vertex(-rectWidth / 5, -rectHeight / 2);
  vertex(rectWidth / 2, -rectHeight / 2); 
  vertex(rectWidth / 2, rectHeight / 2.4); 
  vertex(-rectWidth /5, rectHeight / 2.1);
  endShape(CLOSE);
}
function milk1(){
  beginShape();
  vertex(-rectWidth / 5, -rectHeight / 2);
  vertex(rectWidth / 2, -rectHeight / 2); 
  vertex(rectWidth / 2, rectHeight / 2.4); 
  vertex(-rectWidth /1.9+80, rectHeight / 2 -5);
  endShape(CLOSE);
}

function milk2(){
  beginShape();
    vertex(-rectWidth / 45, -rectHeight / 2);
    vertex(rectWidth / 2, -rectHeight / 2); 
    vertex(rectWidth / 2, rectHeight / 2.4); 
    vertex(-rectWidth / 1.8, rectHeight / 2);
    endShape(CLOSE);
}

function hoverShaker(){
  strokeWeight(4)
  stroke('#61E8DF');
  noFill();
  beginShape();
  vertex(-rectWidth / 2.3, -rectHeight / 2);
  vertex(rectWidth / 2, -rectHeight / 2); 
  vertex(rectWidth / 2, rectHeight / 2.4); 
  vertex(-rectWidth / 1.8, rectHeight / 2);
  endShape(CLOSE);

  noStroke()
  fill('#57CFC7')
  beginShape();
  vertex(-rectWidth+120, -rectHeight+80);
  vertex(rectWidth-600, -rectHeight +140); 
  vertex(rectWidth-600, rectHeight-80); 
  vertex(-rectWidth+120, rectHeight-180);
  endShape(CLOSE);
  
  fill('#61E8DF')
  beginShape();
  vertex(-rectWidth+150, -rectHeight+80);
  vertex(rectWidth-570, -rectHeight +80); 
  vertex(rectWidth-570, rectHeight-80); 
  vertex(-rectWidth+150, rectHeight-80);
  endShape(CLOSE);
}
function backgroundText() { 
  textStyle(BOLD);
  textFont(rubikPixelsFont);
  stroke('#84F5B3');
  strokeWeight(1);
  noFill();
  textSize(250);
  text("Click 2",50,300);
  fill('#84F5B3')
  noStroke();
  text("SHAKE", 50,805);
}
function backgroundText2() { 
  textStyle(BOLD);
  textFont(rubikPixelsFont);
  stroke('#FEB2B4');
  noFill();
  strokeWeight(1);
  textSize(250);
  text("TIME 2",80,300);
  fill('#FEB2B4')
  noStroke();
  text("DRINK", 90,805);
}
function click2Shake(){
  textSize(40);
  textStyle(NORMAL);
  fill("#9ADE6D")
  textFont(rubikPixelsFont)
  text("CLICK to SHAKE", 340, 800);
}


let perfect;
let goNext = false;
let goNext2 = false;
let goNext3 = false;
let clickFrame;
let stageStartTime;


let rectX = 400;
let rectY = 450;
let rectWidth = 400;
let rectHeight = 200;
let clickDistance = 10;
let clickCount = 0; 

let originX = rectX;
let originY = rectY;

let clickTime = 0;
let shakeDuration = 1500; 

let noiseOffsetX = 0;
let noiseOffsetY = 0;
let noiseSpeed = 0.0005; 

function setup() {
  createCanvas(1000, 1000);
  perfect.loadPixels();
}

function draw() {

  background(25);
  let currentStage = clickCount % 10 + 1; 

  if (currentStage === 1) {
    background(25);
    textSize(200);
    noStroke();
    textStyle(BOLD);
    fill("#84F5B3")
    textFont(rubikPixelsFont);
    text("your",250,390);
    text("protein", 100,545);

    textSize(40);
    textStyle(NORMAL);
    fill("#9ADE6D")
    text("CLICK to START", 340, 800);
  } 
  
  
  else if (currentStage === 2) {
    
    let offsetX = 0;
    let offsetY = 0;

    click2Shake()

    push();
    translate(originX + rectWidth / 3.8 + offsetX, originY + rectHeight / 5 + offsetY);
    rotate(radians(90));

    noStroke();
    fill('#fffff')
    milk0();

    strokeWeight(4)
    stroke('#61E8DF');
    noFill();
    shakerBody();
    shakerCover();
  
    noStroke()
    
    fill("#FF7770")
    ellipse(-80,-3,50,185)
    fill("#CC5F5A")
    ellipse(-90,0,30,150)
    
    fill('#36807B')
    rect(-272,-80,20,50);
    rotate(radians(-45));
    translate(38,-190);
    fill('#57CFC7')
    beginShape();
    vertex(-rectWidth+120, -rectHeight+80);
    vertex(rectWidth-650, -rectHeight +100); 
    vertex(rectWidth-652, rectHeight-149); 
    vertex(-rectWidth+120, rectHeight-180);
    endShape(CLOSE);
    rotate(radians(+45));
    translate(30,+200);

    let hoverXStart = (width * 1) / 5;
    let hoverXEnd = (width * 4) / 5;
    let hoverYStart = (height * 1) / 5;
    let hoverYEnd = (height * 3) / 5;

    if (mouseX > hoverXStart+200 && mouseX < hoverXEnd-150 && mouseY > hoverYStart && mouseY < hoverYEnd+100) {
        noStroke();
        fill(255, 0, 0); 
        push();
        fill(25)
        rect(-500,-400,800,900)
        rotate(radians(-15));

        noStroke();
        fill('#fffff')
        milk1();
        hoverShaker();

        translate(-30,30)
        rotate(radians(15))
        fill("#FF7770")
        ellipse(-80,-3,50,185)
        fill("#CC5F5A")
        ellipse(-90,0,30,150)
    }
    pop();

  } else if (currentStage === 3) {
    let offsetX = 0;
    let offsetY = 0;

    if (currentStage === 3 && !soundPlayed1) {
      shaking1.play();
      soundPlayed1 = true;
    } else if (currentStage !== 3) {
      soundPlayed1 = false;
    }
    
    if (millis() - clickTime < shakeDuration) {
      offsetX = random(-clickDistance, clickDistance);
      offsetY = random(-clickDistance * 8, clickDistance * 8); 
    } 

    let hoverXStart = (width * 1) / 5;
    let hoverXEnd = (width * 4) / 5;
    let hoverYStart = (height * 1) / 5;
    let hoverYEnd = (height * 3) / 5;
    
    setTimeout(() => {
      goNext = true;
    }, 1500); 

    if (goNext)  {
      backgroundText()
    }
    
    push();
    translate(originX + rectWidth / 5 + offsetX, originY + rectHeight / 5 + offsetY);
    rotate(radians(45));

    strokeWeight(4)
    stroke('#61E8DF');
    noFill();
    shakerBody();
  

    if (rectHeight > offsetY+200) {
    noStroke();
    fill('#Fffff')
    shakerBody();
  
    } else { 
    noStroke();
    fill('#FEE1E0')
    milk2();
    }
    shakingCap();
    shakerCover();
    pop();

    if (goNext) {
      fill("#FF7770")
      noStroke();
      ellipse(510-random(5),440,15,12);
      ellipse(490-random(5),420,15,12);
      ellipse(460-random(5),420,15,12);
      ellipse(420-random(5),430,15,12);
      ellipse(440-random(5),445,15,12);
      ellipse(360-random(5),425,15,12);
      ellipse(400-random(5),435,15,12);
      ellipse(380-random(5),415,15,12);
      ellipse(340-random(5),415,15,12);
      ellipse(530-random(5),420,15,12);
      translate(-15,10);
      ellipse(510-random(5),440,15,12);
      ellipse(490-random(5),420,15,12);
      ellipse(460-random(5),420,15,12);
      ellipse(420-random(5),430,15,12);
      ellipse(440-random(5),445,15,12);
      ellipse(360-random(5),425,15,12);
      ellipse(400-random(5),435,15,12);
      ellipse(380-random(5),415,15,12);
      ellipse(340-random(5),415,15,12);
      ellipse(530-random(5),420,15,12);

      stroke('#000000');
      strokeWeight(3);
      noStroke()
      fill('#fffff')
    }

  }else 
  if (currentStage === 4) {
    
    let offsetX = 0;
    let offsetY = 0;

    click2Shake()

    push();
    translate(originX + rectWidth / 3.8 + offsetX, originY + rectHeight / 5 + offsetY);
    rotate(radians(90));

    noStroke();
    fill('#FEE1E0')//우유*
    milk0();

    strokeWeight(4)
    stroke('#61E8DF');
    noFill();
    shakerBody();
    noStroke()
    shakerCover();
  

    let hoverXStart = (width * 1) / 5;
    let hoverXEnd = (width * 4) / 5;
    let hoverYStart = (height * 1) / 5;
    let hoverYEnd = (height * 3) / 5;

    fill("#FF7770")
    translate(-60,0);
    ellipse(-20,10+random(2),15,12);
    ellipse(-10+5,20+random(2),15,12);
    ellipse(-20,40+random(2),15,12);
    ellipse(-20+5,60+random(2),15,12);
    ellipse(-20+20+random(2),15,12);
    translate(0,10);
    ellipse(-20,-10+random(2),15,12);
    ellipse(-10+5,-30+random(2),15,12);
    ellipse(-20,-40+random(2),15,12);
    ellipse(-10+5,-60+random(2),15,12);
    ellipse(-10,-80+random(2),15,12);
    translate(10,0);
    ellipse(-20,10+random(2),15,12);
    ellipse(-10+5,20+random(2),15,12);
    ellipse(-20,40+random(2),15,12);
    ellipse(-20+5,60+random(2),15,12);
    ellipse(-20+20+random(2),15,12);
    translate(0,30);
    ellipse(-20,-10+random(2),15,12);
    ellipse(-10+5,-30+random(2),15,12);
    ellipse(-20,-40+random(2),15,12);
    ellipse(-10+5,-60+random(2),15,12);
    ellipse(-10,-80+random(2),15,12);
    
    translate(52,-50);
    fill('#36807B')
    rect(-272,-80,20,50);
    rotate(radians(-45));
    translate(38,-190);
    fill('#57CFC7')
    beginShape();
    vertex(-rectWidth+120, -rectHeight+80); 
    vertex(rectWidth-650, -rectHeight +100); 
    vertex(rectWidth-652, rectHeight-149); 
    vertex(-rectWidth+120, rectHeight-180); 
    endShape(CLOSE);
    rotate(radians(+45));
    translate(30,+200);

    if (mouseX > hoverXStart+200 && mouseX < hoverXEnd-150 && mouseY > hoverYStart && mouseY < hoverYEnd+100) {
        noStroke();
        fill(255, 0, 0); 
        push();
        fill(25)
        rect(-500,-400,800,900)
        rotate(radians(-15));

        noStroke();
        fill('#FEE1E0')
        milk1();
        hoverShaker();

        rotate(radians(28))
        fill("#FF7770")
        translate(0,30)
        translate(-60,0);
        ellipse(-20,10+random(2),15,12);
        ellipse(-10+5,20+random(2),15,12);
        ellipse(-20,40+random(2),15,12);
        ellipse(-20+5,60+random(2),15,12);
        ellipse(-20+20+random(2),15,12);
        translate(0,10);
        ellipse(-20,-10+random(2),15,12);
        ellipse(-10+5,-30+random(2),15,12);
        ellipse(-20,-40+random(2),15,12);
        ellipse(-10+5,-60+random(2),15,12);
        ellipse(-10,-80+random(2),15,12);
        translate(10,0);
        ellipse(-20,10+random(2),15,12);
        ellipse(-10+5,20+random(2),15,12);
        ellipse(-20,40+random(2),15,12);
        ellipse(-20+5,60+random(2),15,12);
        ellipse(-20+20+random(2),15,12);
        translate(0,30);
        ellipse(-20,-10+random(2),15,12);
        ellipse(-10+5,-30+random(2),15,12);
        ellipse(-20,-40+random(2),15,12);
        ellipse(-10+5,-60+random(2),15,12);
        ellipse(-10,-80+random(2),15,12);
    }
    pop();
    

  } else if (currentStage === 5){
    
    let offsetX = 0;
    let offsetY = 0;

    if (currentStage === 5 && !soundPlayed2) {
      shaking2.play();
      soundPlayed2 = true;
    } else if (currentStage !== 5) {
      soundPlayed2 = false;
    }


    if (millis() - clickTime < shakeDuration+1000) {
      offsetX = random(-clickDistance, clickDistance);
      offsetY = random(-clickDistance * 8, clickDistance * 8); // 위아래로 더 크게 흔들리게
    } 
    if (goNext2)  {
      backgroundText()
    }

    push();
    translate(originX + rectWidth / 5 + offsetX, originY + rectHeight / 5 + offsetY);
    rotate(radians(45));

    strokeWeight(4)
    stroke('#61E8DF');
    noFill();
    shakerBody();

    if (rectHeight > offsetY+200) {
    noStroke();
    fill('#C27875')
    shakerBody();
    } else { 
    noStroke();
    fill('#FFB1A8')
    milk2();
    }

    shakingCap();
    shakerCover();
    pop();
    
    if (frameCount - clickFrame > 150) { 
      goNext2 = true;
    }
    if (goNext2){
      translate(0,0)
      rotate(radians(0))
      fill("#FF7770")
      noStroke();
      ellipse(510-random(5),440,15-5,12-5);
      ellipse(490-random(5),420,15-5,12-5);
      ellipse(460-random(5),420,15-5,12-5);
      ellipse(420-random(5),430,15-5,12-5);
      ellipse(440-random(5),445,15-5,12-5);
      ellipse(360-random(5),425,15-5,12-5);
      ellipse(400-random(5),435,15-5,12-5);
      ellipse(380-random(5),415,15-5,12-5);
      translate(0,20)
      ellipse(440-random(5),445,15-5,12-5);
      ellipse(360-random(5),425,15-5,12-5);
      ellipse(400-random(5),435,15-5,12-5);
      ellipse(380-random(5),415,15-5,12-5);
      
    }

  }
  else 
  if (currentStage === 6){
    let offsetX = 0;
    let offsetY = 0;

    click2Shake()

    push();
    translate(originX + rectWidth / 3.8 + offsetX, originY + rectHeight / 5 + offsetY);
    rotate(radians(90));

    noStroke();
    fill('#FFB1A8')
    milk0();
    strokeWeight(4)
    stroke('#61E8DF');
    noFill();
    shakerBody();

    noStroke()
    shakerCover();

    let hoverXStart = (width * 1) / 5;
    let hoverXEnd = (width * 4) / 5;
    let hoverYStart = (height * 1) / 5;
    let hoverYEnd = (height * 3) / 5;

    fill("#FF7770")
    translate(-60,0);
    ellipse(-20,10+random(2),15-5,12-5);
    ellipse(-20+5,60+random(2),15-5,12-5);

    translate(0,10);
    ellipse(-20,-10+random(2),15-5,12-5);
    ellipse(-10+5,-60+random(2),15-5,12-5);

    translate(10,0);
    ellipse(-20,10+random(2),15-5,12-5);
    ellipse(-10+5,20+random(2),15-5,12-5);
    ellipse(-20+5,60+random(2),15-5,12-5);

    translate(0,30);
    ellipse(-20,-10+random(2),15-5,12-5);

    ellipse(-20,-40+random(2),15-5,12-5);
    ellipse(-10+5,-60+random(2),15-5,12-5);

    translate(52,-50);
    fill('#36807B')
    rect(-272,-80,20,50);
    rotate(radians(-45));
    translate(38,-190);
    fill('#57CFC7')
    beginShape();
    vertex(-rectWidth+120, -rectHeight+80); 
    vertex(rectWidth-650, -rectHeight +100); 
    vertex(rectWidth-652, rectHeight-149); 
    vertex(-rectWidth+120, rectHeight-180); 
    endShape(CLOSE);
    rotate(radians(+45));
    translate(30,+200);

    if (mouseX > hoverXStart+200 && mouseX < hoverXEnd-150 && mouseY > hoverYStart && mouseY < hoverYEnd+100) {
        noStroke();
        fill(255, 0, 0); 
        push();
        fill(25)
        rect(-500,-400,800,900)
        rotate(radians(-15));

        noStroke();
        fill('#FFB1A8')
        milk1();
        hoverShaker();
        rotate(radians(28))
        fill("#FF7770")
        translate(0,30)
        translate(-60,0);
        ellipse(-20,10+random(2),15-5,12-5);
        ellipse(-20+5,60+random(2),15-5,12-5);

        translate(0,10);
        ellipse(-20,-10+random(2),15-5,12-5);
        ellipse(-10+5,-60+random(2),15-5,12-5);

        translate(10,0);
        ellipse(-20,10+random(2),15-5,12-5);
        ellipse(-10+5,20+random(2),15-5,12-5);
        ellipse(-20+5,60+random(2),15-5,12-5);

        translate(0,30);
        ellipse(-20,-10+random(2),15-5,12-5);

        ellipse(-20,-40+random(2),15-5,12-5);
        ellipse(-10+5,-60+random(2),15-5,12-5);
    }
    pop();
    
  }
  else if (currentStage === 7){
    let offsetX = 0;
    let offsetY = 0;
    if (goNext3)  {
      backgroundText2()
    }

    if (currentStage ===7 && !soundPlayed3) {
      shaking3.play();
      soundPlayed3 = true;
    } else if (currentStage !== 7) {
      soundPlayed3 = false;
    }

    if (millis() - clickTime < shakeDuration+1500) {
      offsetX = random(-clickDistance, clickDistance);
      offsetY = random(-clickDistance * 8, clickDistance * 8); // 위아래로 더 크게 흔들림
    } 
    push();
    translate(originX + rectWidth / 5 + offsetX, originY + rectHeight / 5 + offsetY);
    rotate(radians(45));

    strokeWeight(4)
    stroke('#61E8DF');
    noFill();
    shakerBody();

    if (rectHeight > offsetY+200) {
    noStroke();

    fill('#CC7479')
    shakerBody();
    } else { 
    noStroke();
    fill('#FE9096')
    milk2();
    }
    shakingCap();
    shakerCover();
    pop();
    
    if (frameCount - clickFrame > 180) { // 대략 1.5초 후 실행 (60 FPS 기준)
      goNext3 = true;
    }
  }
  else if (currentStage === 8){
    if (currentStage === 8 && !soundPlayed4) {
      drinking.play();
      soundPlayed4 = true;
    } else if (currentStage !== 8) {
      soundPlayed4 = false;
    }

    background("pink")//("#FF0D75")
    textSize(250);
    textStyle(NORMAL);
    fill("#B30067")
    textFont(rubikPixelsFont)
    text("YAMMY!", -30, 200);

      for (let x = 0; x < perfect.width; x++) {
      for (let y = 0; y < perfect.height; y++) {
      let index = (x + y * perfect.width) * 4;

      let r = perfect.pixels[index];
      let g = perfect.pixels[index + 1];
      let b = perfect.pixels[index + 2];
      if (r < 128 && g < 128 && b < 128) {
        fill(255)
        stroke(r, g, b);
        point(x, y);
      }
    }
  }
  }
}

function mouseClicked() {
  clickCount++; // 클릭 횟수 증가
  clickTime = millis(); // 클릭 시간 저장
  clickFrame = frameCount;
  currentStage = (currentStage % 10) + 1;
}

function resetStage() {
  clickCount = 0;
  currentStage = 1;
}

function keyPressed() {
  resetStage();
  if (shaking1.isPlaying()) {
    shaking1.stop();
  }

  if (shaking2.isPlaying()) {
    shaking2.stop();
  }
  if (shaking3.isPlaying()) {
    shaking3.stop();
  }

  if (drinking.isPlaying()) {
    drinking.stop();
  }
}