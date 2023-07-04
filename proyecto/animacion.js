
/**
 * Descripcion: Realiza la animacion que vemos en la segunda pagina.
 */
x = 0;
dx = 10;
function animarPincel(){
    var canvass = document.getElementById("Canvas2");
    var ctxx = canvass.getContext("2d");
    canvass.width = canvass.width;


    var imgg= new Image();

    imgg.src = "Resources/images/manopincel2.png";
    imgg.style.width = '50px';
    imgg.style.height = '50px';


    imgg.onload = function (){
        ctxx.drawImage(imgg,x,100)

    }
    if(x == 600 || x < 0){
        dx = dx*-1;
    }

    x = x+ dx;
}