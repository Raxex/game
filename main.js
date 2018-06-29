var car;
var comida;
this.canvasX=(window.innerWidth)-30;
this.canvasY=(window.innerHeight)-30;
//var w = window.innerWidth;
//var h = window.innerHeight;
var y=this.canvasY;
var x=this.canvasX;
this.puntaje=0;

function setup(){

    createCanvas(this.canvasX,this.canvasY);
    car= new car ();
    comida= new comida(x,y);

}

function randomizer(){

    var rand=Math.floor(Math.random() * 256);
    return rand;

}

function updateColor(){

    background(this.randomizer(),this.randomizer(),this.randomizer());

}

function draw(){

    background("black");
    
    car.update();
    comida.update();
    car.show();
    comida.show();

}

this.counter=0;

function keyPressed(){
    if(key==' '){
        //console.log("say nigger");
        car.up();
        car.incrementarTamano();
        car.salto();
        
        //car.setBallColor();
        //car.sonido.play();
    }
}
