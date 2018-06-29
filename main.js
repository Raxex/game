var car;
var comidas=[];
this.canvasX=(window.innerWidth)-30;
this.canvasY=(window.innerHeight)-30;
//var w = window.innerWidth;
//var h = window.innerHeight;
var y=this.canvasY;
var x=this.canvasX;
this.puntaje=0;
this.infinito=false;
this.counter=0;
this.puntaje=0;

function setup(){
    createCanvas(this.canvasX,this.canvasY);
    car= new car ();
    comidas.push(new comida(x,y));
}

function updating(){
    if(chequear()==true){
        main.puntaje=main.puntaje+1;
        comidas.push(new comida(x,y));
    }
}

function chequear(){
    if(car.y==comidas.vary||car.y==((comidas.vary)+10)&&car.x==comidas.varx||car.y==((comidas.varx)+10)){
        comidas.velocidad=comidas.velocidad+1;
        this.puntaje=this.puntaje+1;
        return true;
    }else{
        return false;
    }
}

function randomizer(){

    var rand=Math.floor(Math.random() * 256);
    return rand;

}

function updateColor(){

    background(randomizer(),randomizer(),randomizer());

}

function draw(){

    background("black");
    car.update();

    updating();
    car.show();

    if(frameCount % 90==0){
        comidas.push(new comida(x,y));
    }
    for (var i=comidas.length-1;i>=0;i--){
        comidas[i].show();
        comidas[i].update();
        if(comidas[i].fueraDePantalla()){
            comidas.splice(i,1);
        }
        if(comidas[i].esComido(car)){
            puntaje=puntaje+1;
            comidas.splice(i,1);
            comidas.push(new comida(x,y));
            var sndComido = new Audio('munch.mp3');
            sndComido.play();
            console.log(puntaje)
        }
    }


}



function keyPressed(){
    if(key==' '){
        //console.log("say nigger");
        car.up();
        car.incrementarTamano();
        car.salto();
        
        //document.getElementById("canvas").innerHTML = "Puntaje :"+this.puntaje;
        //document.getElementById("canvas").innerHTML = "Contador :"+this.counter;
        
        //car.setBallColor();
        //car.sonido.play();
    }
    

}
function mouseClicked(){
    
        //console.log("say nigger");
        car.up();
        car.incrementarTamano();
        car.salto();
        
        //document.getElementById("canvas").innerHTML = "Puntaje :"+this.puntaje;
        //document.getElementById("canvas").innerHTML = "Contador :"+this.counter;
        
        //car.setBallColor();
        //car.sonido.play();
    
    


}