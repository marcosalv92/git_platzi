var imagenes = [];

imagenes["Cauchin"] = "/App/img/vaca.webp";
imagenes["Pokacho"] = "/App/img/pollo.webp";
imagenes["Tocinauro"]= "/App/img/cerdo.webp";


class Pakiman{
    
    constructor(nombre,ataque,vida){
        this.imagen = new Image();
        this.nombre = nombre;
        this.ataque = ataque;
        this.vida = vida;       
        this.tipo = "Tierra";

        this.imagen.src = imagenes[this.nombre];

    }

    hablar(){
        alert("this.nombre");
    }

    mostrar(){
        document.body.appendChild(this.imagen);
        document.write("<br/> <strong> "+this.nombre +"</strong><hr/>");
    }

}

var collections = [];
collections.push(new Pakiman("Cauchin",100,30));
collections.push(new Pakiman("Pokacho",120,50));
collections.push(new Pakiman("Tocinauro",150,70));



for (var pakiman of collections) {
    
    pakiman.mostrar();
    
}


