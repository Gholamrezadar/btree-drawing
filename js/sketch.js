//Tree class
tree = function(data,left,right){
    this.data = data;
    this.left = left;
    this.right = right;
}



//global Variables
var w = 44;
var alpha = 0;
var h = 2.5*w;
var N = 5;
var o = 5;

function setup() {
    //Settings
    createCanvas(900,900);
    background(235);
    translate(width/2,height/2);
    fill(250);
    stroke(0,45);
    
    //Root
    var px = 0;
    var py = -width/2+w/2+20;
    var t = new tree("a",
                     new tree("b",
                              new tree("d",null,null),
                              new tree("e",null,null)),
                     new tree("c",
                              new tree("f",new tree("g",null,null),null),
                              null));
    drawTree(px,py,N,t);
}

function drawTree(px,py,n,t)
{
    if(n<1)
    {
        return;
    }
    
    var s = (w+o)*Math.pow(2,n-3);
    
    //left Line
    if(t.left!=null){
        line(px,py,px-s,py+h);
    }
    //right Line
    if(t.right!=null){
        line(px,py,px+s,py+h);
    }
    push();
        colorMode(HSB);
        fill(220, 75, map(n,N,1,45,100));
        ellipse(px,py,w);
    pop();
    push();
        noStroke();
        fill(255,200);
        textAlign(CENTER,CENTER);
        text(t.data,px,py);
    pop();
    
    //left Child
    if(t.left!=null){
        drawTree(px-s,py+h,n-1,t.left);
    }
    

    //right Child
    if(t.right!=null){
        drawTree(px+s,py+h,n-1,t.right);
    }
    
}

function draw() {
    
}