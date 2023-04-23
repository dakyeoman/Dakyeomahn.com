const bg = [
  '#08090D',
  '#012340',
  '#45214A',
  '#323050',
  '#F1B3F2',
  '#6DB4F2'
];

const body = [
'#BF6385','#57568C','#F2C1AE','#D9A19C','#F2D785','#36D9AB','#D8BAD9','#F26D6D'
];

let currentColor;
let bones;
let angle = 0; 
let r = 100;
let particles = [];

let positions = [
  {//what?!
    leftHumerus: { x: 300, y: 600, rotation: 0 },
    leftAntebrachial: { x: 300, y: 805, rotation: 0 },
    leftHand: { x: 90, y: 805, rotation: -0 },
    rightHumerus: { x: 640, y: 600, rotation: 0 },
    rightAntebrachial: { x: 650, y: 800, rotation: -0},
    rightHand: { x: 850, y: 800, rotation: 0 },
  },
  {//프론트랫스프래드
    leftHumerus: { x: 300, y: 600, rotation: 0 },
    leftAntebrachial: { x:155, y: 740, rotation:90 },
    leftHand: { x: 420, y: 705, rotation: 276 },
    rightHumerus: { x: 640, y: 600, rotation: 0 },
    rightAntebrachial: { x: 800, y: 730, rotation: -95},
    rightHand: { x: 535, y: 700, rotation: -270 },
  },
  {//워워
    leftHumerus: { x: 500, y: 550, rotation: -90 },
    leftAntebrachial: { x: 620, y: 730, rotation: 15 },
    leftHand: { x: 650, y: 455, rotation: 200 },
    rightHumerus: { x: 670, y: 600, rotation: -5 },
    rightAntebrachial: { x: 970, y: 600, rotation: -100 },
    rightHand: { x: 910, y: 390, rotation: 240 },
  },
  {//프론트더블바이셉스
    leftHumerus: { x: 200, y: 500, rotation: 50 },
    leftAntebrachial: { x: 360, y: 455, rotation: -11 },
    leftHand: { x: 310, y: 220, rotation: -140 },
    rightHumerus: { x: 760, y: 500, rotation: -50 },
    rightAntebrachial: { x: 600, y: 460, rotation: 10 },
    rightHand: { x: 650, y: 220, rotation: 140 },
  },
  {//라인업
    leftHumerus: { x: 300, y: 600, rotation: 0 },
    leftAntebrachial: { x:80, y: 650, rotation:130 },
    leftHand: { x: 350, y: 785, rotation: 276 },
    rightHumerus: { x: 640, y: 600, rotation: 0 },
    rightAntebrachial: { x: 860, y: 650, rotation: -130},
    rightHand: { x: 590, y: 790, rotation: -277 },
  },
  {//모에모에큥
    leftHumerus: { x: 300, y: 600, rotation: 0 },
    leftAntebrachial: { x: 320, y: 730, rotation: 40 },
    leftHand: { x: 450, y: 460, rotation: -190 },
    rightHumerus: { x: 640, y: 600, rotation: 0 },
    rightAntebrachial: { x: 600, y: 350, rotation: -220},
    rightHand: { x: 500, y: 460, rotation: 194 },
  },
  {//무리무리
    leftHumerus: { x: 300, y: 600, rotation: 0 },
    leftAntebrachial: { x: 320, y: 730, rotation: 40 },
    leftHand: { x: 450, y: 460, rotation: -190 },
    rightHumerus: { x: 640, y: 600, rotation: 0 },
    rightAntebrachial: { x: 600, y: 350, rotation: -220},
    rightHand: { x: 500, y: 460, rotation: 194 },
  },
  {//내놔
    leftHumerus: { x: 300, y: 600, rotation: 0 },
    leftAntebrachial: { x: 320, y: 730, rotation: 40 },
    leftHand: { x: 450, y: 560, rotation:-40 },
    rightHumerus: { x: 640, y: 600, rotation: 0 },
    rightAntebrachial: { x: 600, y: 350, rotation: -220},
    rightHand: { x: 490, y: 560, rotation: 30 },
  },
  {//토스
    leftHumerus: { x: 230, y: 350, rotation: 100 },
    leftAntebrachial: { x: 450, y: 325, rotation: -10 },
    leftHand: { x: 380, y: 50, rotation: -180 },
    rightHumerus: { x: 760, y: 500, rotation: -50 },
    rightAntebrachial: { x: 600, y: 460, rotation: 10 },
    rightHand: { x: 650, y: 220, rotation: 140 },
  },
  {//스트레칭
    leftHumerus: { x: 230, y: 350, rotation: 100 },
    leftAntebrachial: { x: 440, y: 365, rotation: -0 },
    leftHand: { x:400, y: 90, rotation: -170 },
    rightHumerus: { x: 670, y: 300, rotation: -120 },
    rightAntebrachial: { x: 550, y: 40, rotation:150 },
    rightHand: { x:380, y: 150, rotation: 140 },
  },
  {//combination
    leftHumerus: { x: 300, y: 600, rotation: 0 },
    leftAntebrachial: { x: 300, y: 805, rotation: 0 },
    leftHand: { x: 90, y: 805, rotation: -0 },
    rightHumerus: { x: 640, y: 600, rotation: 0 },
    rightAntebrachial: { x: 600, y: 350, rotation: -220},
    rightHand: { x: 490, y: 560, rotation: 30 },
  },
  {//combination
    leftHumerus: { x: 300, y: 600, rotation: 0 },
    leftAntebrachial: { x: 300, y: 805, rotation: 0 },
    leftHand: { x: 90, y: 805, rotation: -0 },
    rightHumerus: { x: 640, y: 600, rotation: 0 },
    rightAntebrachial: { x: 860, y: 650, rotation: -130},
    rightHand: { x: 590, y: 790, rotation: -277 },
  },
  {
    leftHumerus: { x: 300, y: 600, rotation: 0 },
    leftAntebrachial: { x:155, y: 740, rotation:90 },
    leftHand: { x: 420, y: 705, rotation: 276 },
    rightHumerus: { x: 640, y: 600, rotation: 0 },
    rightAntebrachial: { x: 600, y: 350, rotation: -220},
    rightHand: { x: 500, y: 460, rotation: 194 },
  }

];


function setup() {
  createCanvas(1000, 1000);
  currentColor = random(bg);

  let randomSet = random(positions);

  bones = {
    head2neck: new head2neck(480, 390),
    torso: new torso(480, 600),
    pelvis: new pelvis(475, 750),
    leftHumerus: new leftHumerus(randomSet.leftHumerus.x, randomSet.leftHumerus.y, randomSet.leftHumerus.rotation),
    leftAntebrachial: new leftAntebrachial(randomSet.leftAntebrachial.x, randomSet.leftAntebrachial.y, randomSet.leftAntebrachial.rotation),
    leftHand: new leftHand(randomSet.leftHand.x, randomSet.leftHand.y, randomSet.leftHand.rotation),
    rightHumerus: new rightHumerus(randomSet.rightHumerus.x, randomSet.rightHumerus.y, randomSet.rightHumerus.rotation),
    rightAntebrachial: new rightAntebrachial(randomSet.rightAntebrachial.x, randomSet.rightAntebrachial.y, randomSet.rightAntebrachial.rotation),
    rightHand: new rightHand(randomSet.rightHand.x, randomSet.rightHand.y, randomSet.rightHand.rotation),
    leftLeg: new leftLeg(300,800),
    rightLeg: new rightLeg(840,800)
  };

  for (let i = 0; i < 100; i++) {
    particles.push(new Particle());
  }
}


class head2neck {
  
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.maxAngle = 50; 

  }
  
  update() {
    let targetAngle = map(mouseX, 0, width, -30, 30);
    targetAngle = constrain(targetAngle, -30, 30);
    this.angle = radians(targetAngle);
  }

  display() {
    push();
    translate(this.x, this.y);
    noStroke()
    fill(255);
    
    beginShape();
    for (let i = 0; i < 360; i += 10) {
      let angle = radians(i);
      let r = 80 + random(-1.4, 1.5); 
      let x = r * cos(angle);
      let y = r+100  * sin(angle);
      vertex(x-10, y-190);
    }
    endShape(CLOSE);

    beginShape();
    for (let i = 0; i < 360; i += 10) {
      let angle = radians(i);
      let r = 30 + random(-1.4, 1.5);
      let x = r * cos(angle);
      let y = r+8  * sin(angle);
      vertex(x-10, y-30);
    }
    endShape(CLOSE);

    beginShape();
    for (let i = 0; i < 360; i += 10) {
      let angle = radians(i);
      let r = 30 + random(-1.4, 1.5);
      let x = r * cos(angle);
      let y = r+8  * sin(angle);
      vertex(x-10, y-10);
    }
    endShape(CLOSE);

    beginShape();
    for (let i = 0; i < 360; i += 10) {
      let angle = radians(i);
      let r = 10 + random(-1.4, 1.5); 
      let x = r * cos(angle);
      let y = r+48  * sin(angle);
      vertex(x-10, y-16);
    }
    endShape(CLOSE);

    // Add eyes
    fill(currentColor);
    let eyeDistance = 20;
    let eyeY = -120;

    let leftEyeX = map(mouseX, 0, width, -eyeDistance, eyeDistance);
    let rightEyeX = map(mouseX, 0, width, eyeDistance, -eyeDistance);

    leftEyeX = constrain(leftEyeX, -eyeDistance, eyeDistance);
    rightEyeX = constrain(rightEyeX, -eyeDistance, eyeDistance);

    let minEyeRadius = 20;
    let maxEyeRadius = 28;
    let eyeRadius = map(mouseY, 0, height, minEyeRadius, maxEyeRadius);

    fill('pink')
    ellipse(-0,-110,80,20);

    // Draw eyes
    fill(currentColor);
    ellipse(leftEyeX - eyeDistance, eyeY, eyeRadius,eyeRadius+10);
    ellipse(rightEyeX + eyeDistance, eyeY, eyeRadius, eyeRadius+10);
    fill(255);
    ellipse(leftEyeX - eyeDistance-3, eyeY, eyeRadius-10,eyeRadius);
    ellipse(rightEyeX + eyeDistance-3, eyeY, eyeRadius-10, eyeRadius);
    
    //add mouth
    fill(currentColor);
    ellipse(leftEyeX , eyeY/2-10, eyeRadius-50,eyeRadius-random(0,10,0.01));

    //add nose
    fill(currentColor);
    ellipse(4,-100,3,10);
    
    //add hair
    fill('#D92525');
    ellipse(0,-170,120,50);
    ellipse(0,-210,120,50);
    rotate(PI/9)
    ellipse(-120,-130,40,80);
    ellipse(-150,-190,80,80);
    rotate(PI/8.9)
    ellipse(-180,-70,30,100);
    ellipse(-160,-110,30,30);
    pop();
    
    
  }
}

class torso { 
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.angle = 0;
  }

  display() {
    push();
    translate(this.x, this.y);
    strokeWeight(9)
    noStroke();
    fill(255);
    beginShape(); //bone12
    for (let i = 0; i < 360; i += 10) {
      let angle = radians(i);
      let r = 15 + random(-1,1.4);
      let x = r * cos(angle);
      let y = r+190  * sin(angle);
      vertex(x-5, y-70);
    }
    endShape(CLOSE);

    noFill()
    stroke(255)
    
    beginShape(); // bone1
    stroke(random(body));
    
    for (let i = 0; i < 360; i += 10) {
      let angle = radians(i);
      let r = 30 + random(-0.5,0.5);
      let x = r * cos(angle);
      let y = r+10  * sin(angle);
      vertex(x-10, y-190);
    }
    endShape(CLOSE);
    
    beginShape(); //bone2
    stroke(random(body));
    for (let i = 0; i < 360; i += 10) {
      let angle = radians(i);
      let r = 50 + random(-0.5,0.5);
      let x = r * cos(angle);
      let y = r+10  * sin(angle);
      vertex(x-10, y-197);
    }
    endShape(CLOSE);

    beginShape(); //bone3
    stroke(random(body));
    for (let i = 0; i < 360; i += 10) {
      let angle = radians(i);
      let r = 70 + random(-0.5,0.5);
      let x = r * cos(angle);
      let y = r+10  * sin(angle);
      vertex(x-10, y-200);
    }
    endShape(CLOSE);

    beginShape(); //bone4
    stroke(random(body));
    for (let i = 0; i < 360; i += 10) {
      let angle = radians(i);
      let r = 90 + random(-0.5,0.5); // 반지름에 무작위 변동 추가
      let x = r * cos(angle);
      let y = r+10  * sin(angle);
      vertex(x-5, y-200);
    }
    endShape(CLOSE);

    beginShape(); //bone5
    stroke(random(body));
    for (let i = 0; i < 360; i += 10) {
      let angle = radians(i);
      let r = 95 + random(-0.5,0.5); 
      let x = r * cos(angle);
      let y = r+10  * sin(angle);
      vertex(x-5, y-188);
    }
    endShape(CLOSE);

    beginShape(); //bone6
    stroke(random(body));
    for (let i = 0; i < 360; i += 10) {
      let angle = radians(i);
      let r = 98 + random(-0.5,0.5); 
      let x = r * cos(angle);
      let y = r+10  * sin(angle);
      vertex(x-5, y-170);
    }
    endShape(CLOSE);

    beginShape(); //bone7
    stroke(random(body));
    for (let i = 0; i < 360; i += 10) {
      let angle = radians(i);
      let r = 100 + random(-0.5,0.5); 
      let x = r * cos(angle);
      let y = r+10  * sin(angle);
      vertex(x-5, y-150);
    }
    endShape(CLOSE);

    beginShape(); //bone8
    stroke(random(body));
    for (let i = 0; i < 360; i += 10) {
      let angle = radians(i);
      let r = 95 + random(-0.5,0.5); 
      let x = r * cos(angle);
      let y = r+10  * sin(angle);
      vertex(x-5, y-130);
    }
    endShape(CLOSE);

    beginShape(); //bone9
    stroke(random(body));
    for (let i = 0; i < 360; i += 10) {
      let angle = radians(i);
      let r = 85 + random(-1, 0.5); 
      let x = r * cos(angle);
      let y = r+10  * sin(angle);
      vertex(x-5, y-100);
    }
    endShape(CLOSE);

    beginShape(); //bone10
    stroke(random(body));
    for (let i = 0; i < 360; i += 10) {
      let angle = radians(i);
      let r = 80 + random(-0.5,0.5);
      let x = r * cos(angle);
      let y = r+10  * sin(angle);
      vertex(x-5, y-80);
    }
    endShape(CLOSE);

    beginShape(); //bone11
    stroke(random(body));
    for (let i = 0; i < 360; i += 10) {
      let angle = radians(i);
      let r = 75 + random(-0.5,0.5); 
      let x = r * cos(angle);
      let y = r+10  * sin(angle);
      vertex(x-5, y-60);
    }
    endShape(CLOSE);

    beginShape(); //bone12
    stroke(random(body));
    for (let i = 0; i < 360; i += 10) {
      let angle = radians(i);
      let r = 65 + random(-0.5,0.5); 
      let x = r * cos(angle);
      let y = r+10  * sin(angle);
      vertex(x-5, y-40);
    }
    endShape(CLOSE);

    
    pop()
  }
}

class pelvis{ 
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.maxangle = 50;
  }
  update() {
    let targetAngle = map(mouseX, 0, width, -30, 30);
    targetAngle = constrain(targetAngle, -30, 30);
    this.angle = radians(targetAngle);
  }


  display() {
    push();
    translate(this.x, this.y);
    fill(random(body));
    noStroke()

    beginShape();
    vertex(0, -20);
    bezierVertex(-30 + random(-2,2), -60 + random(-2,2), -90 + random(-2,2), -60 + random(-2,2), -90 + random(-2,2), -20 + random(-2,2));
    vertex(-90, 0);
    bezierVertex(-90 + random(-2,2), 40 + random(-2,2), -30 + random(-2,2), 60 + random(-2,2), 0 + random(-2,2), 80 + random(-2,2));
    bezierVertex(30 + random(-2,2), 60 + random(-2,2), 90 + random(-2,2), 40 + random(-2,2), 90 + random(-2,2), 0 + random(-2,2));
    vertex(90, -20);
    bezierVertex(90 + random(-2,2), -60 + random(-2,2), 30 + random(-2,2), -60 + random(-2,2), 0 + random(-2,2), -20 + random(-2,2));
    endShape(CLOSE);

    text(this.name, 0, -50);
    pop();

  }
}

class leftHumerus {
  constructor(x, y, rotation) {
    this.x = x;
    this.y = y;
    this.rotation = rotation;
    this.targetX = x;
    this.targetY = y;
    this.targetRotation = rotation;
  }

  update() {
    this.x = lerp(this.x, this.targetX, 0.001);
    this.y = lerp(this.y, this.targetY, 0.001);
    this.rotation = lerp(this.rotation, this.targetRotation, 0.001);
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(radians(this.rotation));

    fill(255);
    noStroke();
    rotate(PI / 4.3);
    rect(-80 + random(-2,2), -130 + random(-2,2), 22, 150, 4);
    ellipse(-70 + random(-2,2), -145 + random(-2,2), 48, 45);

    beginShape();
    vertex(-80, -170);
    bezierVertex(-90 + random(-2,2), -175 + random(-2,2), -30 + random(-2,2), -210 + random(-2,2), -30, -210);
    bezierVertex(-10 + random(-2,2), -210 + random(-2,2), -20 + random(-2,2), -140 + random(-2,2), -30, -140);
    bezierVertex(-50 + random(-2,2), -130 + random(-2,2), -80 + random(-2,2), -170 + random(-2,2), -80, -170);
    endShape(CLOSE);
    
    pop();
  }
}


class leftAntebrachial {
  cconstructor(x, y) {
    this.x = x;
    this.y = y;
    this.rotation = rotation;
    this.targetX = x;
    this.targetY = y;
    this.targetRotation = rotation;
  }

  update() {
    this.x = lerp(this.x, this.targetX, 0.001);
    this.y = lerp(this.y, this.targetY, 0.001);
    this.rotation = lerp(this.rotation, this.targetRotation, 0.001);
  }
  
  display() {
    push();
    translate(this.x, this.y);
    rotate(radians(this.rotation));
    fill(255);
    noStroke();
    rotate(PI / 5.4);
    rect(-190 + random(-2, 2), -160 + random(-2, 2), 22, 200, 4);
    pop();
  }
}

class rightHumerus{ 
  constructor(x, y, rotation) {
    this.x = x;
    this.y = y;
    this.rotation = rotation;
    this.targetX = x;
    this.targetY = y;
    this.targetRotation = rotation;
  }

  update() {
    this.x = lerp(this.x, this.targetX, 0.001);
    this.y = lerp(this.y, this.targetY, 0.001);
    this.rotation = lerp(this.rotation, this.targetRotation, 0.001);
  }
  display() {
    push();
    translate(this.x, this.y);
    rotate(radians(this.rotation));

    fill(255);
    scale(-1,1)
    noStroke();
    
    rotate(PI / 4.3);
    rect(-80 + random(-2,2), -130 + random(-2,2), 22, 150, 4);
    ellipse(-70 + random(-2,2), -145 + random(-2,2), 48, 45);


    beginShape();
    vertex(-80, -170);
    bezierVertex(-90 + random(-2,2), -175 + random(-2,2), -30 + random(-2,2), -210 + random(-2,2), -30, -210);
    bezierVertex(-10 + random(-2,2), -210 + random(-2,2), -20 + random(-2,2), -140 + random(-2,2), -30, -140);
    bezierVertex(-50 + random(-2,2), -130 + random(-2,2), -80 + random(-2,2), -170 + random(-2,2), -80, -170);
    endShape(CLOSE);
    beginShape();
    pop();
  }
}

class rightAntebrachial {
  constructor(x, y, rotation) {
    this.x = x;
    this.y = y;
    this.rotation = rotation;
    this.targetX = x;
    this.targetY = y;
    this.targetRotation = rotation;
  }

  update() {
    this.x = lerp(this.x, this.targetX, 0.001);
    this.y = lerp(this.y, this.targetY, 0.001);
    this.rotation = lerp(this.rotation, this.targetRotation, 0.001);
  }

  display() {
    push();
    translate(this.x, this.y);
    rotate(radians(this.rotation));

    scale(-1,1);
    noStroke();
  

    let xOffset = random(-2, 2);
    let yOffset = random(-2, 2);

    let x = -70 + xOffset;
    let y = -240 + yOffset;

    translate(x, y);
    rotate(PI / 5.4);
    rect(0, 0, 24, 200,30,30,5,5);
    pop();
  }
}

class rightHand {
  constructor(x, y, rotation) {
    this.x = x;
    this.y = y;
    this.rotation = rotation;
    this.targetX = x;
    this.targetY = y;
    this.targetRotation = rotation;
  }

  update() {
    this.x = lerp(this.x, this.targetX, 0.001);
    this.y = lerp(this.y, this.targetY, 0.001);
    this.rotation = lerp(this.rotation, this.targetRotation, 0.001);
  }


  display() {
    push();
    
    translate(this.x + random(-2,2), this.y + random(-2,2));
    rotate(radians(this.rotation));
    scale(-1,1);
    noStroke();
    rotate(PI/6.0)
    rect(-33,-70,50,25,40,45)
    
    rotate(PI/10.0)
    rect(-50,-50,10,50)

    rotate(PI/-5.5)
    rect(-8,-48,7,80)
    rect(3,-48,7,90)
    rect(14,-48,7,80)
    rect(23,-48,7,60)
    pop();
  }
}

class leftHand {
  constructor(x, y, rotation) {
    this.x = x;
    this.y = y;
    this.rotation = rotation;
    this.targetX = x;
    this.targetY = y;
    this.targetRotation = rotation;
  }

  update() {
    this.x = lerp(this.x, this.targetX, 0.001);
    this.y = lerp(this.y, this.targetY, 0.001);
    this.rotation = lerp(this.rotation, this.targetRotation, 0.001);
  }


  display() {
    push();
    ellipse(-15 + random(-2, 2), -130 + random(-2, 2), 30, 30);
    
    translate(this.x + random(-2,2), this.y + random(-2,2));
    rotate(radians(this.rotation));
    noStroke();
    rotate(PI/6.0)
    rect(-33,-70,50,25,40,45)
    
    rotate(PI/10.0)
    rect(-50,-50,10,50)

    rotate(PI/-5.5)
    rect(-8,-48,7,80)
    rect(3,-48,7,90)
    rect(14,-48,7,80)
    rect(23,-48,7,60)
    
    // 수정된 부분: radians 변환 제거
    rotate(this.angle * (180 / PI));
    
    pop();
  }
}


class leftLeg { 
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.maxangle = 10;
  }

  display(){
    push();
    translate(this.x, this.y);
    rotate(radians(this.rotation));
    fill(255);
    noStroke();
    rect(90 + random(-2,2), 0 + random(-2,2), 22, 200, 4);
    ellipse(95 + random(-2,2), -20 + random(-2,2), 48, 65);
    pop();
  }
}

class rightLeg { 
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.maxangle = 10;
  }
  update() {
    let targetAngle = map(mouseX, 0, width, -30, 30);
    targetAngle = constrain(targetAngle, -30, 30);
    this.angle = radians(targetAngle);
  }
  display(){
    push();
    translate(this.x, this.y);
    fill(255);
    scale(-1,1);
    noStroke();
    
    // rotate(PI / 4.3);
    rect(275 + random(-2,2), -0 + random(-2,2), 22, 200, 4);
    ellipse(280 + random(-2,2), -20 + random(-2,2), 48, 65);
    pop();
  }
}

class Particle {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.size = random(30, 15);
    this.xSpeed = random(-2, 2);
    this.ySpeed = random(-1, 1);
    this.color = color(random(100, 255), random(50, 150), random(150, 255), random(50, 200));
  }
  
  update() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    
    if (this.x < 0 || this.x > width) {
      this.xSpeed *= -1;
    }
    
    if (this.y < 0 || this.y > height) {
      this.ySpeed *= -1;
    }
  }
  
  show() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.size);
  }
}

function draw() {
  push();
  background(currentColor)
  // for (let bone in bones) {
  //   bones[bone].update();
  // }

  for (let particle of particles) {
    particle.update();
    particle.show();
  }


  fill(255);
  translate(bones.head2neck.x, bones.head2neck.y);
  rotate(bones.head2neck.angle);
  translate(-bones.head2neck.x, -bones.head2neck.y);
  bones.head2neck.display();
  pop();

  push();
  translate(bones.pelvis.x, bones.pelvis.y);
  rotate(bones.pelvis.angle);
  translate(-bones.pelvis.x, -bones.pelvis.y);
  bones.pelvis.display();

  translate(bones.leftLeg.x, bones.leftLeg.y);
  rotate(bones.leftLeg.angle);
  translate(-bones.leftLeg.x, -bones.leftLeg.y);
  bones.leftLeg.display();

  translate(bones.rightLeg.x, bones.rightLeg.y);
  rotate(bones.rightLeg.angle);
  translate(-bones.rightLeg.x, -bones.rightLeg.y);
  bones.rightLeg.display();
  pop()


  push()
  bones.torso.display();
  // bones.pelvis.display();
  bones.leftHumerus.display();
  bones.leftAntebrachial.display();
  bones.leftHand.display();
  bones.rightHumerus.display();
  bones.rightAntebrachial.display();
  bones.rightHand.display();
  
  // bones.rightLeg.display();  
  // bones.leftLeg.display();

  pop();

}

function mouseDragged() {
  if (dist(mouseX, mouseY, bones.head2neck.x, bones.head2neck.y) >10) {
    bones.head2neck.update();
    bones.pelvis.update();
    bones.leftLeg.update();
    bones.rightLeg.update();
  }
}


function mousePressed() {
  let randomSet = random(positions);

  bones.leftHumerus.x = randomSet.leftHumerus.x;
  bones.leftHumerus.y = randomSet.leftHumerus.y;
  bones.leftHumerus.rotation = randomSet.leftHumerus.rotation;

  bones.leftAntebrachial.x = randomSet.leftAntebrachial.x;
  bones.leftAntebrachial.y = randomSet.leftAntebrachial.y;
  bones.leftAntebrachial.rotation = randomSet.leftAntebrachial.rotation;

  bones.leftHand.x = randomSet.leftHand.x;
  bones.leftHand.y = randomSet.leftHand.y;
  bones.leftHand.rotation = randomSet.leftHand.rotation;

  bones.rightHumerus.x = randomSet.rightHumerus.x;
  bones.rightHumerus.y = randomSet.rightHumerus.y;
  bones.rightHumerus.rotation = randomSet.rightHumerus.rotation;

  bones.rightAntebrachial.x = randomSet.rightAntebrachial.x;
  bones.rightAntebrachial.y = randomSet.rightAntebrachial.y;
  bones.rightAntebrachial.rotation = randomSet.rightAntebrachial.rotation;

  bones.rightHand.x = randomSet.rightHand.x;
  bones.rightHand.y = randomSet.rightHand.y;
  bones.rightHand.rotation = randomSet.rightHand.rotation;
}


function keyPressed() {
  if (keyCode === ENTER) {
    saveCanvas('screenshot', 'png');
  }
}
