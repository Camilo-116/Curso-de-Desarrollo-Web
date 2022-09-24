class ElementoInstruccional {
    constructor(identificador, tipo, version) {
        this.identificador = identificador
        this.tipo = tipo
        this.version = version
    }

    nomArchivo() {
        return `COMP18S_${this.identificador}_${this.tipo}_${this.version}.midoc`
    }
}

var a1 = new ElementoInstruccional('1', 'interactiva', 'V1'), a2 = new ElementoInstruccional('2', 'ejercicio', 'V2'), a3 = new ElementoInstruccional('3', 'laboratorio', 'V1')

console.log(a1.nomArchivo());console.log(a2.nomArchivo());console.log(a3.nomArchivo());