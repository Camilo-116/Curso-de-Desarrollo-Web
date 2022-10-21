/* eslint-disable */
<template>
  <div id="app">
    <main>
      <header id="cabezera">
        <img class="icono-cabezera" src="../public/assets/icon_bnr.png">
        <span class="titulo-cabezera">Liga Santander</span>
      </header>
      <div id="Menu">
        <component :is="currentMenu" :right="true" id="Menu">
            <a :class="{bmItemListSelected: tablaEquipos}" @click="mostrarTabla()">
              <span>Tabla de posiciones</span>
            </a>
            <a :class="{bmItemListSelected: !tablaEquipos}" @click="mostrarTabla()">
              <span>Tabla de Goleadores</span>
            </a>
        </component>
      </div>
      <div class="cuerpo" id="cuerpo">
        <div v-if="tablaEquipos" class="center-box">
          <TablaPosiciones :elementos="equipos" :isEquipo="true"/>
        </div>
        <div v-else class="center-box">
          <TablaPosiciones :elementos="jugadores" :isEquipo="false" :apikey="apiKey"/>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
  import axios from 'axios';
  import TablaPosiciones from './components/tabla.vue';
  import Bubble from './components/Menu/bubble';
  import Slide from './components/Menu/slide';
  import './styles/styles.css';
  export default {
    name: 'App',
    components: {
      Bubble,
      Slide,
      TablaPosiciones,
    },
    data() {
      const menu = [
        'bubble',
        'slide',
      ];
      const equipos = [];
      const currentMenu = menu[0];
      const apikey = '81ff26a0-5188-11ed-88c4-69ba92585894'; 
      return {
        tablaEquipos: true,
        apikey,
        jugadores: [],
        equipos,
        currentMenu,
        menu,
      };
    },
    methods: {
      mostrarTabla(){
        this.tablaEquipos = !this.tablaEquipos
      },
      asignarNombreEquipo(){
        this.equipos.map((equipo) => {
          const enlace = 'https://app.sportdataapi.com/api/v1/soccer/teams/' + equipo.team_id + '?apikey=' + this.apikey
          axios
          .get(enlace)
          .then((response) => {
              const nombre = response.data.data.name;
              equipo.name =  nombre;
              equipo.data = response.data.data;
          })
        })
      },
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
      ordenar() {
        if (this.jugadores != null) {
          this.jugadores = this.jugadores.slice(0,10);
          this.jugadores.sort((a, b) => {
            if (a.pos < b.pos) {
                return -1;
            }else {
                return 1;
            }
          })
        }
        if (this.equipos != null) {
          this.equipos.sort((a, b) => {
            if (a.position < b.position) {
                return -1;
            }else {
                return 1;
            }
          })
        }
      },
    },
    created() {
      this.randomize(),
      axios
      .get('https://app.sportdataapi.com/api/v1/soccer/standings?apikey=' + this.apikey + '&season_id=1511')
      .then((response) => {
        this.equipos = (response.data.data.standings);
        this.asignarNombreEquipo();
        this.ordenar();
        this.equipos.isReady = true
      }),
      axios
      .get('https://app.sportdataapi.com/api/v1/soccer/topscorers?apikey=' + this.apikey + '&season_id=1511')
      .then((response) => {
        this.jugadores = (response.data.data);
        this.ordenar();
        this.jugadores.isReady = true
      })
    },
  };
</script>
