let img;
let x = false;
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
 
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function draw() {
  background(0);
  rotateX(frameCount * 0.00007 * mouseY/8);
  rotateY(frameCount * 0.00007 * mouseX/8);
  noFill();
  stroke(Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255));
  strokeWeight(4);
  box(150 * (mouseX*-mouseY)/50000);

}



function mouseClicked() {
  x = true;
  if (x = true) {
    var frase = document.getElementById("h1");
    frase.innerHTML = "ROCK DO SERGIO";
    var frase = document.getElementById("h2");
    frase.innerHTML = "QUEM NÃO FOR TA EXPULSO";
    var frase = document.getElementById("h3");
    frase.innerHTML = "VÁ DE FANTASIA";
  }
}



