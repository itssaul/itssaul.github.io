// VARIABLES
let valorador = document.getElementById("valorar")
let interno = document.getElementById("textoInterno")
let cstar1 = document.getElementById("primero")
let cstar2 = document.getElementById("segundo")
let cstar3 = document.getElementById("tercero")
let cstar4 = document.getElementById("cuarto")
let cstar5 = document.getElementById("quinto")
abierto= 0
//ABRIR MENU
valorador.addEventListener(`click`,abrir)
function abrir(){
    if(abierto==0){
    interno.textContent="Cerrar"
    cstar1.hidden =false;
    cstar2.hidden =false;
    cstar3.hidden =false;
    cstar4.hidden =false;
    cstar5.hidden =false;
    cstar1.setAttribute("src", "images/vacia.png");
    cstar2.setAttribute("src", "images/vacia.png");
    cstar3.setAttribute("src", "images/vacia.png");
    cstar4.setAttribute("src", "images/vacia.png");
    cstar5.setAttribute("src", "images/vacia.png");
    abierto=1
    }
    else{
        interno.textContent="Valorar"
        cstar1.hidden =true;
        cstar2.hidden =true;
        cstar3.hidden =true;
        cstar4.hidden =true;
        cstar5.hidden =true;
        cstar1.setAttribute("src", "images/vacia.png");
        cstar2.setAttribute("src", "images/vacia.png");
        cstar3.setAttribute("src", "images/vacia.png");
        cstar4.setAttribute("src", "images/vacia.png");
        cstar5.setAttribute("src", "images/vacia.png");
        abierto=0
    }
}
//Variables para abrir
let color1 = 0;
let color2 = 0;
let color3 = 0;
let color4 = 0;
let color5 = 0;
cstar1.addEventListener(`click`,estrella1);
cstar2.addEventListener(`click`,estrella2);
cstar3.addEventListener(`click`,estrella3);
cstar4.addEventListener(`click`,estrella4);
cstar5.addEventListener(`click`,estrella5);


function estrella1(){
    
    if(color1==0){
        cstar1.setAttribute("src", "llena.png");
        color1=1
        if (color2==1){
        cstar2.setAttribute("src", "images/vacia.png");
        cstar3.setAttribute("src", "images/vacia.png");
        cstar4.setAttribute("src", "images/vacia.png");
        cstar5.setAttribute("src", "images/vacia.png");
        color2=0
        color3=0
        color4=0
        color5=0
        return
       
    }
    else{ return }
    }
    else{
       // cstar1.setAttribute("src", "vacia.png");
        cstar2.setAttribute("src", "images/vacia.png");
        cstar3.setAttribute("src", "images/vacia.png");
        cstar4.setAttribute("src", "images/vacia.png");
        cstar5.setAttribute("src", "images/vacia.png");
       // color1=0
        color2=0
        color3=0
        color4=0
        color5=0
        return
    }
 
}
function estrella2() {     
    if(color2==0){
        cstar1.setAttribute("src", "images/llena.png");
        cstar2.setAttribute("src", "images/llena.png");
        color1=1
        color2=1
        if (color3==1){
        cstar3.setAttribute("src", "images/vacia.png");
        cstar4.setAttribute("src", "images/vacia.png");
        cstar5.setAttribute("src", "images/vacia.png");
        color3=0
        color4=0
        color5=0
        return
       
    }
    else{ return }
    }
    else{
  
        //cstar2.setAttribute("src", "vacia.png");
        cstar3.setAttribute("src", "images/vacia.png");
        cstar4.setAttribute("src", "images/vacia.png");
        cstar5.setAttribute("src", "images/vacia.png");
        //color2=0
        color3=0
        color4=0
        color5=0
        return
    }
  }




function estrella3() { 
        
    if(color3==0){
        cstar1.setAttribute("src", "images/llena.png");
        cstar2.setAttribute("src", "images/llena.png");
        cstar3.setAttribute("src", "images/llena.png");
        color1=1
        color2=1
        color3=1
        if (color4==1){

 
        cstar4.setAttribute("src", "images/vacia.png");
        cstar5.setAttribute("src", "images/vacia.png");
  
   
        color4=0
        color5=0
        return
       
    }
    else{ return }
    }
    else{
 
  
        //cstar3.setAttribute("src", "vacia.png");
        cstar4.setAttribute("src", "images/vacia.png");
        cstar5.setAttribute("src", "images/vacia.png");

        //color3=0
        color4=0
        color5=0
        return
    }
     
}
function estrella4() { 
            
    if(color4==0){
        cstar1.setAttribute("src", "images/llena.png");
        cstar2.setAttribute("src", "images/llena.png");
        cstar3.setAttribute("src", "images/llena.png");
        cstar4.setAttribute("src", "images/llena.png");
        color1=1
        color2=1
        color3=1
        color4=1
        if (color5==1){

        cstar5.setAttribute("src", "images/vacia.png");

        color5=0
        return
       
    }
    else{ return }
    }
    else{
 
       // cstar4.setAttribute("src", "vacia.png");
        cstar5.setAttribute("src", "images/vacia.png");

        //color4=0
        color5=0
        return
    }
  
 }
function estrella5() { 
                
    if(color5==0){
        cstar1.setAttribute("src", "images/llena.png");
        cstar2.setAttribute("src", "images/llena.png");
        cstar3.setAttribute("src", "images/llena.png");
        cstar4.setAttribute("src", "images/llena.png");
        cstar5.setAttribute("src", "images/llena.png");
        color1=1
        color2=1
        color3=1
        color4=1
        color5=1
    }
    
    else{
 
        //cstar5.setAttribute("src", "vacia.png");

        //color5=0
        return
    }
 }
 