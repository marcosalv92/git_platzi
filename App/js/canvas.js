// var box = prompt("Holaaaa");

var teclas = {
    UP : 38,
    DOWN : 40,
    LEFT : 37,
    RIGHT : 39

 };
document.addEventListener("keyup",paintKeydown);

function paintKeydown(evento)
{   
    
    console.log("Tecla oprimida"+ evento.key);
    
    switch (evento.keyCode) {
        case teclas.UP:
            console.log("Arriba");       
        break;
        
        case teclas.DOWN:
            console.log("Abajo");
        break;
        
        case teclas.LEFT:
            console.log("Izquierda");
        break;
        
        case teclas.RIGHT:
            console.log("Derecha");
        break;

    
        default:
            console.log("Otra Tecla");
            break;
    }
}