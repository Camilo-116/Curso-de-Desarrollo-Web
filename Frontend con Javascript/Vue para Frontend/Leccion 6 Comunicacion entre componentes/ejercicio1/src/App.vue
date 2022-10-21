<template>
  <div id="app">
    <main>
      <header id="cabezera">
        <img class="icono-cabezera" src="../public/assets/icon_bnr.png">
        <span class="titulo-cabezera"> Eliminatorias CONMEBOL Qatar</span>
      </header>
      <div id="Menu">
        <component :is="currentMenu" :right="true" id="Menu">
            <a :class="{bmItemListSelected: fechas[0].mostrar}" @click="mostrarFecha1()">
              <span>Fecha 1</span>
            </a>
            <a :class="{bmItemListSelected: fechas[1].mostrar}" @click="mostrarFecha2()">
              <span>Fecha 2</span>
            </a>
            <a :class="{bmItemListSelected: fechas[2].mostrar}" @click="mostrarFecha3()">
              <span>Fecha 3</span>
            </a>
            <a :class="{bmItemListSelected: fechas[3].mostrar}" @click="mostrarFecha4()">
              <span>Fecha 4</span>
            </a>
            <a :class="{bmItemListSelected: !mostrarResultado}" @click="mostrarTabla()">
              <span>Tabla de posiciones</span>
            </a>
        </component>
      </div>
      <div class="cuerpo" id="cuerpo">
        <div v-for="fecha in fechas" :key="fecha">
          <Fecha :fecha="fecha" v-show="fecha.mostrar"/>
        </div>
        <div class="center-box" id="tabla" v-show="!mostrarResultado">
          <Tabla :equipos="equipos"/>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import Fecha from './components/fecha.vue';
  import Tabla from './components/tabla.vue';
  import Bubble from './components/Menu/bubble';
  import Slide from './components/Menu/slide';
  import './styles/styles.css';
  export default {
    name: 'App',
    components: {
      Fecha,
      Bubble,
      Slide,
      Tabla,
    },
    data() {
      const menu = [
        'bubble',
        'slide',
      ];
      const fechas = [
        {
          id: 1,
          mostrar: true,
          editando: true,
          resultados:[
            [
              {
                local: 2,
                visitante: 2,
                imagen: '../assets/resultado1.jpg',
                equipoLocal: " Paraguay",
                equipoVisitante: " Peru",
                localEsGanador: false,
                esEmpate: false,
              },
              {
                local: 1,
                visitante: 0,
                imagen: '../assets/resultado2.jpg',
                equipoLocal: " Argentina",
                equipoVisitante: " Ecuador",
                localEsGanador: false,
                esEmpate: false,
              },
            ],
            [
              {
                local: 2,
                visitante: 1,
                imagen: '../assets/resultado3.jpeg',
                equipoLocal: " Uruguay",
                equipoVisitante: " Chile",
                localEsGanador: false,
                esEmpate: false,
              },
              {
                local: 3,
                visitante: 0,
                imagen: '../assets/resultado4.jpg',
                equipoLocal: " Colombia",
                equipoVisitante: " Venezuela",
                localEsGanador: false,
                esEmpate: false,
              },
            ],
            [
              {
                local: 5,
                visitante: 0,
                imagen: '../assets/resultado5.jpg',
                equipoLocal: " Brazil",
                equipoVisitante: " Bolivia",
                localEsGanador: false,
                esEmpate: false,
              },
            ],
          ],
        },
        {
          id: 2,
          mostrar: false,
          editando: false,
          resultados:[
            [
              {
                local: 1,
                visitante: 2,
                imagen: '../assets/resultado6.jpg',
                equipoLocal: " Bolivia",
                equipoVisitante: " Argentina",
                localEsGanador: false,
                esEmpate: false,
              },
              {
                local: 4,
                visitante: 2,
                imagen: '../assets/resultado7.jpg',
                equipoLocal: " Ecuador",
                equipoVisitante: " Uruguay",
                localEsGanador: false,
                esEmpate: false,
              },
            ],
            [
              {
                local: 0,
                visitante: 1,
                imagen: '../assets/resultado8.jpg',
                equipoLocal: " Venezuela",
                equipoVisitante: " Paraguay",
                localEsGanador: false,
                esEmpate: false,
              },
              {
                local: 2,
                visitante: 4,
                imagen: '../assets/resultado9.jpg',
                equipoLocal: " Peru",
                equipoVisitante: " Brazil",
                localEsGanador: false,
                esEmpate: false,
              },
            ],
            [
              {
                local: 2,
                visitante: 2,
                imagen: '../assets/resultado10.jpg',
                equipoLocal: " Chile",
                equipoVisitante: " Colombia",
                localEsGanador: false,
                esEmpate: false,
              },
            ],
          ],
        },
        {
          id: 3,
          mostrar: false,
          editando: false,
          resultados:[
            [
              {
                local: 2,
                visitante: 3,
                imagen: '../assets/resultado11.jpg',
                equipoLocal: " Bolivia",
                equipoVisitante: " Ecuador",
                localEsGanador: false,
                esEmpate: false,
              },
              {
                local: 1,
                visitante: 1,
                imagen: '../assets/resultado12.jpg',
                equipoLocal: " Argentina",
                equipoVisitante: " Paraguay",
                localEsGanador: false,
                esEmpate: false,
              },
            ],
            [
              {
                local: 0,
                visitante: 3,
                imagen: '../assets/resultado13.jpg',
                equipoLocal: " Colombia",
                equipoVisitante: " Uruguay",
                localEsGanador: false,
                esEmpate: false,
              },
              {
                local: 2,
                visitante: 0,
                imagen: '../assets/resultado14.jpg',
                equipoLocal: " Chile",
                equipoVisitante: " Peru",
                localEsGanador: false,
                esEmpate: false,
              },
            ],
            [
              {
                local: 1,
                visitante: 0,
                imagen: '../assets/resultado15.jpg',
                equipoLocal: " Brazil",
                equipoVisitante: " Venezuela",
                localEsGanador: false,
                esEmpate: false,
              },
            ],
          ],
        },
        {
          id: 4,
          mostrar: false,
          editando: false,
          resultados:[
            [
              {
                local: 6,
                visitante: 1,
                imagen: '../assets/resultado16.jpg',
                equipoLocal: " Ecuador",
                equipoVisitante: " Colombia",
                localEsGanador: false,
                esEmpate: false,
              },
              {
                local: 2,
                visitante: 1,
                imagen: '../assets/resultado17.jpg',
                equipoLocal: " Venezuela",
                equipoVisitante: " Chile",
                localEsGanador: false,
                esEmpate: false,
              },
            ],
            [
              {
                local: 2,
                visitante: 2,
                imagen: '../assets/resultado18.jpg',
                equipoLocal: " Paraguay",
                equipoVisitante: " Bolivia",
                localEsGanador: false,
                esEmpate: false,
              },
              {
                local: 0,
                visitante: 2,
                imagen: '../assets/resultado19.jpg',
                equipoLocal: " Uruguay",
                equipoVisitante: " Brazil",
                localEsGanador: false,
                esEmpate: false,
              },
            ],
            [
              {
                local: 0,
                visitante: 2,
                imagen: '../assets/resultado20.jpg',
                equipoLocal: " Peru",
                equipoVisitante: " Argentina",
                localEsGanador: false,
                esEmpate: false,
              },
            ],
          ],
        },
      ];
      const equipos = [
        {
          id:"Argentina",
          puntos: 0,
          ganados: 0,
          empates: 0,
          perdidos: 0,
          golesAnotados: 0,
          golesContra: 0,
          partidosJugados: 0,
        },
        {
          id:"Bolivia",
          puntos: 0,
          ganados: 0,
          empates: 0,
          perdidos: 0,
          golesAnotados: 0,
          golesContra: 0,
          partidosJugados: 0,
        },
        {
          id:"Brazil",
          puntos: 0,
          ganados: 0,
          empates: 0,
          perdidos: 0,
          golesAnotados: 0,
          golesContra: 0,
          partidosJugados: 0,
        },
        {
          id:"Chile",
          puntos: 0,
          ganados: 0,
          empates: 0,
          perdidos: 0,
          golesAnotados: 0,
          golesContra: 0,
          partidosJugados: 0,
        },
        {
          id:"Colombia",
          puntos: 0,
          ganados: 0,
          empates: 0,
          perdidos: 0,
          golesAnotados: 0,
          golesContra: 0,
          partidosJugados: 0,
        },
        {
          id:"Ecuador",
          puntos: 0,
          ganados: 0,
          empates: 0,
          perdidos: 0,
          golesAnotados: 0,
          golesContra: 0,
          partidosJugados: 0,
        },
        {
          id:"Paraguay",
          puntos: 0,
          ganados: 0,
          empates: 0,
          perdidos: 0,
          golesAnotados: 0,
          golesContra: 0,
          partidosJugados: 0,
        },
        {
          id:"Peru",
          puntos: 0,
          ganados: 0,
          empates: 0,
          perdidos: 0,
          golesAnotados: 0,
          golesContra: 0,
          partidosJugados: 0,
        },
        {
          id:"Uruguay",
          puntos: 0,
          ganados: 0,
          empates: 0,
          perdidos: 0,
          golesAnotados: 0,
          golesContra: 0,
          partidosJugados: 0,
        },
        {
          id:"Venezuela",
          puntos: 0,
          ganados: 0,
          empates: 0,
          perdidos: 0,
          golesAnotados: 0,
          golesContra: 0,
          partidosJugados: 0,
        },
      ];
      const mostrarResultado = true;
      const currentMenu = menu[0];
      return {
        mostrarResultado,
        fechas,
        equipos,
        currentMenu,
        menu,
      };
    },
    methods: {
      randomize() {
        var j, x, i;
        for (i = this.menu.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = this.menu[i];
            this.menu[i] = this.menu[j];
            this.menu[j] = x;
        }
        this.currentMenu = this.menu[0]
        console.log(this.currentMenu)
      },
      mostrarFecha1() {
        this.mostrarResultado = true
        this.fechas[0].mostrar = true
        this.fechas[1].mostrar = false
        this.fechas[2].mostrar = false
        this.fechas[3].mostrar = false
      },
      mostrarFecha2() {
        this.mostrarResultado = true
        this.fechas[0].mostrar = false
        this.fechas[1].mostrar = true
        this.fechas[2].mostrar = false
        this.fechas[3].mostrar = false
      },
      mostrarFecha3() {
        this.mostrarResultado = true
        this.fechas[0].mostrar = false
        this.fechas[1].mostrar = false
        this.fechas[2].mostrar = true
        this.fechas[3].mostrar = false
      },
      mostrarFecha4() {
        this.mostrarResultado = true
        this.fechas[0].mostrar = false
        this.fechas[1].mostrar = false
        this.fechas[2].mostrar = false
        this.fechas[3].mostrar = true
      },
      mostrarTabla() {
        this.mostrarResultado = false
        this.fechas[0].mostrar = false
        this.fechas[1].mostrar = false
        this.fechas[2].mostrar = false
        this.fechas[3].mostrar = false
      },
      calcularPuntos() {
        this.asignarPartidos()
        this.equipos.map((equipo) => {
          equipo.puntos = (equipo.ganados*3) + equipo.empates
          equipo.diferenciaGoles = equipo.golesAnotados - equipo.golesContra
        })
        this.equipos.sort((a, b) => {
            if (a.puntos < b.puntos) {
                return 1;
            }else if (a.puntos > b.puntos) {
                return -1;
            }else {
                if (a.ganados < b.ganados) {
                    return 1;
                }else if (a.ganados > b.ganados) {
                    return -1;
                }else {
                    const diferenciaGolesA = a.golesAnotados - a.golesContra
                    const diferenciaGolesB = b.golesAnotados - b.golesContra
                if (diferenciaGolesA < diferenciaGolesB) {
                    return 1;
                }else if (diferenciaGolesA > diferenciaGolesB) {
                    return -1;
                }
                }
            }
            return 0;
        });
        this.equipos.map(((equipo, key) => {
          if (key < 4) {
            equipo.clasificado = true;
            equipo.clasificadoRepesca = false;
          }else if (key == 4) {
            equipo.clasificado = false;
            equipo.clasificadoRepesca = true;
          } else {
            equipo.clasificado = false;
            equipo.clasificadoRepesca = false;
          }
        }))
      },
      resetPartidos() {
        this.equipos.map((equipo) => {
          equipo.ganados = 0
          equipo.perdidos = 0
          equipo.empates = 0
          equipo.golesAnotados = 0
          equipo.golesContra = 0
          equipo.partidosJugados = 0
        })
      },
      asignarPartidos() {
        this.resetPartidos()
        this.fechas.map((fecha) => {
        fecha.resultados.map((resultado) => {
          resultado.map((partido) => {
            const posiciones = []
            for (let index = 0; index < this.equipos.length; index++)  { 
                const equipo = this.equipos[index]
                if (partido.equipoLocal.substring(1,partido.equipoLocal.length) == equipo.id ) {
                    posiciones.unshift(index)
                }else if (partido.equipoVisitante.substring(1,partido.equipoVisitante.length) == equipo.id ) {
                    posiciones.push(index)
                }
            }
            if (partido.local>partido.visitante) {
                this.equipos[posiciones[0]].ganados += 1;
                this.equipos[posiciones[1]].perdidos += 1;
                partido.localEsGanador = true;
            }else if (partido.local<partido.visitante) {
                this.equipos[posiciones[0]].perdidos += 1;
                this.equipos[posiciones[1]].ganados += 1;
            }else {
                this.equipos[posiciones[0]].empates += 1;
                this.equipos[posiciones[1]].empates += 1;
                partido.esEmpate = true;
            }
            this.equipos[posiciones[0]].golesAnotados += Number(partido.local);
            this.equipos[posiciones[0]].golesContra += Number(partido.visitante);
            this.equipos[posiciones[0]].partidosJugados += 1;
            this.equipos[posiciones[1]].partidosJugados += 1;
            this.equipos[posiciones[1]].golesAnotados += Number(partido.visitante);
            this.equipos[posiciones[1]].golesContra += Number(partido.local);
          })
        })
      });
    },
    },
    mounted() {
      this.calcularPuntos(),
      this.randomize()
    },
  };
</script>