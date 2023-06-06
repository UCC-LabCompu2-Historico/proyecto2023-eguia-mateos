const canvas = document.querySelector("canvas");
const ctx  = canvas.getContext("2d");
const button = document.querySelectorAll(".opcion");
const colores = document.querySelector('#tabla_colores');
const tamanio = document.querySelector('#medidor');
const limpiar = document.querySelector(".limpiarbutton");



let opcionactual = "Lapizbutton";
let grosor = 4;
let coloractual = "negro";

var img = new Image();

let random = Math.floor(Math.random()*4);
console.log(random)
let ix;
let iy;

/** 
* Descripcion: Realiza el dibujo.
* @method dibujar
* @param{number} cursorx - nos da la posicion en x del cursor en el canvas. 
* @param{number} cursory - nos da la posicion en y del cursor en el canvas. 

*/


const dibujar = (cursorx,cursory) =>{
    ctx.beginPath();
    ctx.moveTo(ix,iy);
    ix = cursorx;
    iy =cursory;



    if(opcionactual == "Lapizbutton"){
        ctx.strokeStyle = "#000";
        ctx.lineTo(cursorx,cursory);
        ctx.stroke();
        ctx.lineWidth = grosor;
        if(coloractual == "Azul"){
            ctx.strokeStyle = "#0066ff";
            ctx.lineTo(cursorx,cursory);
            ctx.stroke();
        }else if(coloractual == "Rojo"){
            ctx.strokeStyle = "#ff0000";
            ctx.lineTo(cursorx,cursory);
            ctx.stroke();
        }else if(coloractual == "Amarillo"){
            ctx.strokeStyle = "#ffff33";
            ctx.lineTo(cursorx,cursory);
            ctx.stroke();
        }else if(coloractual == "Verde"){
            ctx.strokeStyle = "#66ff66";
            ctx.lineTo(cursorx,cursory);
            ctx.stroke();
        }else  if(coloractual == "Negro"){
            ctx.strokeStyle = "#000";
            ctx.lineTo(cursorx,cursory);
            ctx.stroke();
        }
    }else if(  opcionactual == "borradorbutton"){
        
        ctx.strokeStyle = "#fff";
        ctx.lineTo(cursorx,cursory);
        ctx.stroke();
        ctx.lineWidth = grosor;
    }

    if(random == 0){
        img.src = "Resources/images/sombrero.png";
     
      
    }else if(random == 1){
        img.src = "Resources/images/imgaen2plantilla.jpg";
     
      
    }else if(random == 2){
        img.src = "Resources/images/imagen3plantilla.png";
     
      
    }else if(random == 3){
        img.src = "Resources/images/mandala.png";

       
    }
    

}


pox = canvas.width;
poy = canvas.height;


img.onload = function(){
    ctx.drawImage(img,0,0,pox,poy);
    img.onload = function(){
        ctx.drawImage(img,0,0,0,0)
    }

}

      



/** 
* Descripcion: Al hacer clic con el mouse obtenemos la posicion del cursor y ahi empieza el dibujo.
* @method mousedown
* @param{evento} e - al hacer click con el mouse. 

*/

const mousedown = (e) =>{
    ix = e.offsetX;
    iy = e.offsetY;
    dibujar(ix,iy);
    canvas.addEventListener("mousemove",movimiento)
}


/** 
* Descripcion: mientras el mouse se mueve va trazando una linea en su posicion.
* @method movimiento
* @param{evento} e - al mover el mouse. 
*/

const movimiento = (e)=> {
    dibujar(e.offsetX,e.offsetY);
}


/** 
* Descripcion: frena el dibujo que se esta realizando.
* @method stop
*/
const stop = ()=> {
    canvas.removeEventListener("mousemove",movimiento);
}


canvas.addEventListener("mousedown",mousedown);
canvas.addEventListener("mouseup",stop);





button.forEach(e => {
    e.addEventListener("click", ()=> {
        opcionactual = e.id;
        console.log(opcionactual);
    });
});


colores.addEventListener("change", ()=> {
    coloractual = colores.value;
    console.log(coloractual);
});

limpiar.addEventListener("click", ()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height);
    img.onload = function(){
        ctx.drawImage(img,0,0,pox,poy);
        img.onload = function(){
            ctx.drawImage(img,0,0,0,0)
        }
    
    }

});

tamanio.addEventListener("change", ()=> grosor = tamanio.value );

