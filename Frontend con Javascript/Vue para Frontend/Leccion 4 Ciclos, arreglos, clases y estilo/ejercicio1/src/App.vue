<template>
  <header id="header">
    <img src="./assets/balon.png" alt="Logo">
    <span>Clasificatorias CONMEBOL Qatar 2022</span>
  </header>
  <div id="body">
    <p class="tit-cuerpo-1">Resultados</p>
    <div class="fecha" v-for="(fecha,index) in fechas" :key="index">
      <div class="fecha-header">
        <span class="tit-cuerpo-2">Fecha {{index+1}}: {{fecha.fecha}}.</span>
        <img @click="editFecha(index)" v-show="!edit[index]" src="./assets/edit.png" class="ico-edit" title="Editar"
          alt="editar">
      </div>
      <div v-if="!edit[index]" class="results">
        <MatchResult v-for="(partido, index) in fecha.partidos" :p1="partido.p1" :t1_score=partido.s_p1 :p2="partido.p2"
          :t2_score=partido.s_p2 :imgURL="partido.img" :key="index" />
      </div>
      <form v-else-if="edit[index]" class="fecha-inputs">
        <div class="inputs">
          <EditResult v-for="(partido,index) in fecha.partidos" :key="index" :partido="partido" :indexP=index 
          :length=fecha.partidos.length :indexF=fechas.indexOf(fecha) />
        </div>
        <div :id="'submit'+index">
          <button type="submit" v-show="edit[index]" @click="update(index)">Enviar</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import MatchResult from './components/Result.vue'
import EditResult from './components/EditResult.vue'

export default {
  name: 'App',
  components: {
    MatchResult,
    EditResult
  },
  methods: {
    editFecha(index) {
      this.edit[index] = true;
    },
    update(index) {
      // this.fechas[index].partidos = partidos
      this.edit[index] = false
      let partido
      for (let i = 0; i < this.fechas[index].partidos.length; i++) {
        partido = {
          p1: document.getElementById(`p1_${index}_${i}`).value,
          p2: document.getElementById(`p2_${index}_${i}`).value,
          s_p1: parseInt(document.getElementById(`s_p1_${index}_${i}`).value),
          s_p2: parseInt(document.getElementById(`s_p2_${index}_${i}`).value),
          img: document.getElementById(`image${index}_${i}`).value
        }
        this.fechas[index].partidos[i] = partido
      }
    }
  },
  data() {
    const paises = ['Argentina', 'Bolivia', 'Brasil', 'Chile', 'Colombia', 'Ecuador', 'Paraguay', 'Perú', 'Uruguay', 'Venezuela']
    let edit = [false, false, false]
    return {
      edit: edit,
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

button {
  font-size: 1.5em;
  background-color: rgb(54, 8, 128);
  color: aliceblue;
}

button:hover {
  cursor: pointer;
}

[id^="submit"] {
  display: flex;
  justify-content: center;
  padding: 2vh 0;
  border-top: 1px solid black;
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
}

.fecha-header {
  display: inherit;
  flex-flow: row nowrap;
  border-bottom: 2px solid black;
  padding: 1vh 0 1vh 0;
  align-items: center;
}

.ico-edit {
  padding-left: 1vw;
  height: 3.5vh;
}

.ico-edit:hover {
  cursor: pointer;
}

.fecha {
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 5vh;
  border: 2px solid black;
}

.results {
  display: inherit;
  margin: 0 5vw 0 5vw;
  flex-flow: row wrap;
  font-weight: 900;
}

.fecha-inputs {
  display: inherit;
  flex-flow: column nowrap;
  position: relative;
}

.inputs {
  display: inherit;
  padding: 0 5vw 0 5vw;
  flex-flow: row wrap;
}
</style>
