function comida(x, y){
        this.ancho = 50;
        this.largo = 50;
        this.wVarX=x;
        this.wVary=Math.floor(Math.random() * (y));
        this.puntaje = Math.floor(Math.random() * 4+1);
        this.varx = x;
        this.vary = Math.floor(Math.random() * (y));
        this.velocidad = 15;
        this.colorChooser = "red";
        this.food;
        

        this.esComido = function(car){
            if( car.x >= this.varx &&
                car.x <= this.varx+this.ancho &&
                car.y >= this.vary &&
                car.y <= this.vary+this.largo||
                comida.vary<=car.altura &&
                comida.varx<=car.ancho){
                car.incrementarTamano();
                return true;
            }
        }

        

        this.gto = function(){
            this.puntaje = Math.floor(Math.random() * 4+1);
            if(this.puntaje==1){
                this.food="burger";
            }else if(this.puntaje==2){
                this.food="completo";
            }else if(this.puntaje==3){
                this.food="empanada"; 
            }else if(this.puntaje==4){
                this.food="pollo";
            }else{
                this.food="coca";
            }
            return this.food;
        }
        this.food=this.gto();
        
        this.preload = function() {
            this.img = loadImage('./img/'+this.food+'.png');
        }
        
        this.fueraDePantalla=function(){
            if(this.varx< -x){
                return true;
            }else{
                return false;
            }
        }
        
        this.show = function () {
            image(this.img,this.varx, this.vary, this.ancho, this.largo);
        }
        this.update = function () {
            this.varx = this.varx - this.velocidad;
        }
        this.preload();
}