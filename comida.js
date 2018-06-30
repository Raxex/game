function comida(x, y){
        
        this.ancho = 30;
        this.largo = 30;
        
        this.wVarX=x;
        this.wVary=Math.floor(Math.random() * (y));
        
        this.varx = x;
        this.vary = Math.floor(Math.random() * (y));

        this.velocidad = 15;
        this.puntaje = Math.floor(Math.random() * 4);
        this.colorChooser = "red";
        
        this.resetPos=function(){
            this.varx = this.wVarX;
            this.vary = Math.floor(Math.random() * (y));
        }

        this.esComido=function(car){
            if(car.x > this.varx && car.x < this.varx+this.ancho && car.y > this.vary && car.y < this.vary+this.largo){
                car.incrementarTamano();
                return true;
            }
        }

        this.fueraDePantalla=function(){
            if(this.varx< -x){
                return true;
            }else{
                return false;
            }

        }

        this.show = function () {
            fill("red");
            rect(this.varx, this.vary, this.ancho, this.largo);
        }
        this.update = function () {
            this.varx = this.varx - this.velocidad;
        }
    }

