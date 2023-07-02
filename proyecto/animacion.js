

x = 0;
dx = 10;
function animarPincel(){
    var canvass = document.getElementById("Canvas2");
    var ctxx = canvass.getContext("2d");
    canvass.width = canvass.width;


    var imgg= new Image();

    imgg.src = "Resources/images/pincel.png";
    imgg.width = '50px';
    imgg.height = '50px';


    imgg.onload = function (){
        ctxx.drawImage(imgg,x,100)

    }
    if(x > canvass.width){
        x = 0;
    }

    x= x+ dx;
}