//Tree class
tree = function(data,left,right){
    this.data = data;
    this.left = left;
    this.right = right;
}



//global Variables
var w = 35;
var alpha = 0;
var h = 2.5*w;
var N = 5;
var o = 5;

function setup() {
    //Settings
    createCanvas(900,900);
    background(45);
    translate(width/2,height/2);
    fill(250);
    stroke(255,50);
    
    //Root
    var px = 0;
    var py = -width/2+w/2+20;
    
    drawTree(px,py,N);
    
}

function drawTree(px,py,n)
{
    if(n<1)
    {
        return;
    }
    
    var s = (w+o)*Math.pow(2,n-3);
    
    if(n>1)
    {
        line(px,py,px-s,py+h);
        line(px,py,px+s,py+h);
    }
    
    ellipse(px,py,w);
    
    //left
    //fill(255,0,0,50);
    drawTree(px-s,py+h,n-1);

    //left
    //fill(0,0,255,50);
    drawTree(px+s,py+h,n-1);
    
}

function draw() {
    
}