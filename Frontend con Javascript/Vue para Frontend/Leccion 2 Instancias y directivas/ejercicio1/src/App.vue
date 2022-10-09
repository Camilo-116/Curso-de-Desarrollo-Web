<template>
  <header id="header">
    <img src="./assets/balon.png" alt="Logo">
    <span>Clasificatorias CONMEBOL Qatar 2022</span>
  </header>
  <div id="body">
    <p class="tit-cuerpo-1">Resultados</p>
    <div class="fecha" v-for="(fecha,index) in fechas" :key="index">
      <p class="tit-cuerpo-2">Fecha {{index+1}}: {{fecha.fecha}}.</p>
      <div class="results">
        <MatchResult v-for="(partido, index) in fecha.partidos" :p1="partido.p1" :t1_score=partido.s_p1 :p2="partido.p2"
          :t2_score=partido.s_p2 :imgURL="partido.img" :key="index" />
      </div>
    </div>
  </div>
</template>

<script>
import MatchResult from './components/Result.vue'

export default {
  name: 'App',
  components: {
    MatchResult
  },
  data() {
    let paises = ['Argentina', 'Bolivia', 'Brasil', 'Chile', 'Colombia', 'Ecuador', 'Paraguay', 'Perú', 'Uruguay', 'Venezuela']
    return {
      p: paises,
      fechas: [
        {
          fecha: 'Marzo 24',
          partidos: [{
            p1: paises[2],
            p2: paises[3],
            s_p1: 4,
            s_p2: 0,
            img: "BrCh.png"
          },
          {
            p1: paises[4],
            p2: paises[1],
            s_p1: 3,
            s_p2: 0,
            img: "CoBo.png"
          },
          {
            p1: paises[6],
            p2: paises[5],
            s_p1: 3,
            s_p2: 1,
            img: "PaEc.png"
          },
          {
            p1: paises[8],
            p2: paises[7],
            s_p1: 1,
            s_p2: 0,
            img: "UrPe.png"
          }]
        },
        {
          fecha: "Marzo 25",
          partidos: [
            {
              p1: paises[0],
              p2: paises[9],
              s_p1: 3,
              s_p2: 0,
              img: "ArVe.png"
            }
          ]
        },
        {
          fecha: "Marzo 29",
          partidos: [
            {
              p1: paises[1],
              p2: paises[2],
              s_p1: 0,
              s_p2: 4,
              img: "BoBr.png"
            },
            {
              p1: paises[3],
              p2: paises[8],
              s_p1: 0,
              s_p2: 2,
              img: "ChUr.png"
            },
            {
              p1: paises[5],
              p2: paises[0],
              s_p1: 1,
              s_p2: 1,
              img: "EcAr.png"
            }
          ]
        }
      ]
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#header {
  display: flex;
  height: 10vh;
  align-content: center;
  align-items: center;
  justify-content: center;
  font-size: xx-large;
  font-weight: bold;
  color: white;
  text-shadow: 0 0 1px black;
  padding: 5vh 0 4vh 0;
  border-bottom-right-radius: 15px;
  border-bottom-left-radius: 15px;
  background-image: url(./assets/banner.jpg);
}

#header img {
  height: 100%;
  margin-right: 1vw;
  filter: invert(100%);
}

#body {
  margin: 3vh 2vw 3vh 2vw;
  text-align: left;
}

.tit-cuerpo-1,
.tit-cuerpo-2 {
  font-weight: bold;
}

.tit-cuerpo-1 {
  font-size: 1.5em;
}

.tit-cuerpo-2 {
  font-size: 1.3em;
  padding-left: 2vw;
  margin-bottom: 0;
  border-bottom: 1px solid black;
}

.fecha {
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 10px;
  border: 1px solid black;
}

.results {
  display: inherit;
  margin: 0 5vw 0 5vw;
  flex-flow: row wrap;
}

</style>
