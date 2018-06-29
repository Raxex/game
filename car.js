function car(){
    this.y = height/2;
    this.x = width/2;
    this.ancho=40;
    this.largo=40;
    this.colorRED=255;
    this.gravity=1;
    this.velocity=0;
    this.lift=-20;
    this.counter=1;

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
    
    this.show = function(){
        fill(255,0,0);
        //fill(this.randomizer(),this.randomizer(),this.randomizer()); 
        ellipse(this.x,this.y,this.ancho,this.largo);
    }
    
    this.update=function(){
        this.velocity+=this.gravity;
        this.y+=this.velocity;
      
        if(this.chequear()==true){
            alert("Te moriste wey e hiciste "+this.counter+" saltos");
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
        
        
        /*this.sonido = new Howl(
            {
                urls: ['C:\Users\HP\Desktop\666\game}\jump.mp3']
            }
        );  
        this.sonido.play();*/
    }
    

}