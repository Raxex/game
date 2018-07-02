function car(){
    this.y = height/2;
    this.x = width/2;
    this.ancho=100;
    this.largo=100;
    this.colorRED=255;
    this.gravity=1;
    this.velocity=0;
    this.lift=-20;
    this.counter=0;
    this.randomizer=function(){
        var rand=Math.floor(Math.random() * 256);
        return rand;
    }
    
    this.setBallColor=function(){
        if(this.colorRED==0){
            this.colorRED=this.colorRED+=1;
        }else{
            this.colorRED=this.colorRED-=1;
        }
    }
    this.imagen;

    this.preload =function() {
        this.imagen = loadImage('./img/chechoFace.png');
    }
    this.show = function(){
        image(this.imagen, this.x,this.y,this.ancho,this.largo);
    }
    
    this.update=function(){
        this.velocity+=this.gravity;
        this.y+=this.velocity;
      
        if(this.chequear()==true){
            alert("Te moriste wey e hiciste "+this.counter+" saltos ");
            location.reload();
        }
         
    }
    this.chequear=function(){
        if(this.y <= 0 || this.y >= height){
            velocity=0;
            return true;
        }else{
            return false;
        }
    }
    this.incrementarTamano=function(){
        this.ancho=this.ancho+1;
        this.largo=this.largo+1;
    }
    this.up=function(){
            this.velocity+=this.lift;
            this.y+=this.velocity;
            this.counter+=1;
    }
    this.salto=function(){
        var audio = new Audio('audio_file.mp3');
        audio.play();
    }
    

}