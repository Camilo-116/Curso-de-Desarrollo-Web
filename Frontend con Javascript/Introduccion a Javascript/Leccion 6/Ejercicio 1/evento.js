class Evento {
    constructor(id, nombre, cantidadAsistentes, precioPorAsistente) {
        this.id = id
        this.nombre = nombre
        this.cantidadAsistentes = cantidadAsistentes
        this.precioPorAsistente = precioPorAsistente
    }

    enlace(){
        return `/evento/${this.id}`
    }
    dineroTotalRecaudado(){
        return `Recaudado: ${this.cantidadAsistentes * this.precioPorAsistente}`
    }
}

var evento1 = new Evento(1,"e1", 12, 5);
console.log(evento1.enlace())
console.log(evento1.dineroTotalRecaudado())