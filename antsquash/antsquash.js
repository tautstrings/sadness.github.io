var antx = 300;
var anty = 300;
var antSize = 80;
var score = 0;
var table;
var ant;

function preload() {
table = loadImage('https://tautstrings.github.io/antsquash/tabletop.jpg');
ant = loadImage('https://tautstrings.github.io/antsquash/ant.png')
}

function setup() {
  createCanvas(table.width/4, table.height/4);
  textAlign(CORNER);
  textSize(25);
} // end setup


function draw() {
  background(table);
  
  game();
  
  fill(255)
  text(("Ants Squashed: " + score), 30, height-30);
  

} // end draw


function game(){
  var distToAnt = dist(antx, anty, mouseX, mouseY);
  if (distToAnt < antSize){
    antx = random(width);
    anty = random(height);
    score = score +1;
  }
  
  image(ant, antx, anty, antSize, antSize);
}
