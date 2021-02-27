var n = 2;
var c = 6;

var points = [] ;
var start = 0 ;


function setup(){
    createCanvas(windowWidth, windowHeight);
    angleMode(DEGREES);
    colorMode(HSB);
    background(0);
}

function draw() {
    //draw a circle

    var a  = n * 137.5;
    var r = c * sqrt(n);
    
    var x = r * cos(a) + width / 2 ;
    var y = r * sin(a) + height / 2;
    fill(339, 74 , 40);
    noStroke();
    ellipse(x, y, 4, 4 );
    n++;

}
