function comida(x,y){

    this.ancho=30;
    this.largo=30;
    this.varx=x;
    this.vary=Math.floor(Math.random() * (y));
    this.velocidad=15;
    this.puntaje=Math.floor(Math.random() * 4);
    this.colorChooser="red";


    this.show = function(){
        this.varx=(x)-2;
        fill("red"); 
        ellipse(this.varx,this.vary,this.ancho,this.largo);
        
    }

    this.chequear=function(){
        if(car.y==this.vary||car.x==this.varx){
            velocity=velocity+1;
            return true;
        }else{
            return false;
        }
    }

    this.update=function(){
        
        this.varx=this.varx-this.velocity;
        if(this.chequear()==true){
            main.puntaje=main.puntaje+1;
            this.varx=(x)-2;
            this.vary=Math.floor(Math.random() * (y));
        }

    }
    
}