var eventos = [
    {
        nombre: "e1",
        fecha: new Date(2018, 3, 20)
    },
    {
        nombre: "e2",
        fecha: new Date(2018, 2, 20)
    },
    {
        nombre: "e3",
        fecha: new Date(2018, 3, 10)
    },
    {
        nombre: "e4",
        fecha: new Date(2018, 5, 20)
    },
    {
        nombre: "e5",
        fecha: new Date(2018, 6, 20)
    },
    {
        nombre: "e6",
        fecha: new Date(2018, 0, 20)
    },
    {
        nombre: "e7",
        fecha: new Date(2018, 8, 20)
    },
]

function organizarEventos(eventos,fechaReferencia){
    var resultado1,resultado2

    resultado1 = eventos.filter(x => {
        return x.fecha.getTime() >= fechaReferencia.getTime()
    }).sort((a,b)=>{
        return a.fecha.getTime() - b.fecha.getTime()
    })

    resultado2 = eventos.filter(x => {
        return x.fecha.getTime() < fechaReferencia.getTime()
    }).sort((a,b)=>{
        return b.fecha.getTime() - a.fecha.getTime()
    })
    return [resultado1,resultado2]
}

var resultado = organizarEventos(eventos,new Date(2018,4,5))