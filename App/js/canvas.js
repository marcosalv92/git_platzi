// var box = prompt("Holaaaa");
var paint_2D = document.getElementById("paint");
var lienzo = paint_2D.getContext("2d");
var xActual = parseInt(paint_2D.width)/2;
var yActual = parseInt(paint_2D.height)/2;




var teclas = {
    UP : 38,
    DOWN : 40,
    LEFT : 37,
    RIGHT : 39

 };
document.addEventListener("keypress",paintKeydown);

function paintKeydown(evento)
{   
    
    console.log("Tecla oprimida"+ evento.key);
    
    switch (evento.keyCode) {
        case teclas.UP:
            
        paintLine("blue",xActual,yActual,xActual,yActual-10)
            yActual = yActual - 10;    
            console.log("Arriba");       
        break;
        
        case teclas.DOWN:
            paintLine("blue",xActual,yActual,xActual,yActual+10)
            yActual = yActual + 10;
            console.log("Abajo");
        break;
        
        case teclas.LEFT:
            paintLine("blue",xActual,yActual,xActual-10,yActual)
            xActual = xActual - 10;
            console.log("Izquierda");
        break;
        
        case teclas.RIGHT:
            paintLine("blue",xActual,yActual,xActual+10,yActual)
            xActual = xActual + 10;
            console.log("Derecha");
        break;

    
        default:
            console.log("Otra Tecla");
            break;
    }
}

function paintLine(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();    
    lienzo.closePath();
 
    
}