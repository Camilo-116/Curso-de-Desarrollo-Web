<template>
  <header id="header">
    <div id="logo">
      <img src="./assets/balon.png" alt="Logo">
    </div>
    <span style="width: fit-content">Clasificatorias CONMEBOL Qatar 2022</span>
    <div class="menu">
      <img src="./assets/menu.png" alt="menu" @click="openTab=true">
    </div>
  </header>
  <div id="body">
    <p class="tit-cuerpo-1">Resultados</p>
    <div class="fechas" v-if="!table">
      <div class="fecha" v-for="(fecha,index) in fechas" :key="index" v-show="shows[index]">
        <div class="fecha-header">
          <span class="tit-cuerpo-2">Fecha {{index+1}}: {{fecha.fecha}}.</span>
          <img @click="editFecha(index)" v-show="!edit[index]" src="./assets/edit.png" class="ico-edit" title="Editar"
            alt="editar">
        </div>
        <div v-if="!edit[index]" class="results">
          <MatchResult v-for="(partido, index) in fecha.partidos" :p1="partido.p1" :t1_score=partido.s_p1
            :p2="partido.p2" :t2_score=partido.s_p2 :imgURL="partido.img" :key="index" />
        </div>
        <form v-else-if="edit[index]" class="fecha-inputs">
          <div class="inputs">
            <EditResult v-for="(partido,index) in fecha.partidos" :key="index" :partido="partido" :indexP=index
              :length=fecha.partidos.length :indexF=fechas.indexOf(fecha) />
          </div>
          <div :id="'submit'+index" v-show="edit[index]">
            <button type="submit" @click="update(index)">Enviar</button>
          </div>
        </form>
      </div>
    </div>
    <div class="table-container" v-else-if="table">
      <table border class="table">
        <thead>
          <tr>
            <th>Seleccion</th>
            <th>PJ</th>
            <th>PG</th>
            <th>PE</th>
            <th>PP</th>
            <th>DG</th>
            <th>Puntos</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(resultado,index) in resultados" :key="index"
            :class="{clasificado: index<=3, repechaje: index==4, 'no-clasificado': index > 4}">
            <td>{{p[index]}}</td>
            <td v-for="(stat, index) in resultado" :key="index">{{stat}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <transition name="tab">
      <div v-show="openTab" class="tab">
        <img src="./assets/close.png" alt="close" class="close-ico" @click="openTab=false">
        <div class="opciones">
          <Fecha v-for="(fecha, index) in fechas" :key="index" :index="index" @click="showFecha(index)" />
          <div class="d" @click="showAll">
            <span>Mostrar todas</span>
            <hr>
          </div>
          <div class="d" @click="showTable">
            <span>Tabla de Posiciones</span>
            <hr>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import MatchResult from './components/Result.vue'
import EditResult from './components/EditResult.vue'
import Fecha from './components/Fecha.vue'

export default {
  name: 'App',
  components: {
    MatchResult,
    EditResult,
    Fecha
  },
  methods: {
    editFecha(index) {
      this.edit[index] = true;
    },
    showFecha(index) {
      this.shows = this.shows.map(function (show) {
        show = false;
        return show;
      });
      this.shows[index] = true;
      this.table = false;
      this.openTab = false;
    },
    showAll() {
      this.shows.forEach((show, index) => this.shows[index] = true);
      this.table = false;
      this.openTab = false;
    },
    update(index) {
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
      this.openTab = false;
      [this.p,this.resultados] = this.order(this.p,this.fechas)
    },
    order(paises, fechas) {
      let stats = new Array(6).fill(0)
      let gf, gc
      let resultados = [], partidosPais
      paises.forEach((pais, index) => {
        stats = new Array(6).fill(0)
        stats.push(index)
        fechas.forEach((fecha) => {
          partidosPais = fecha.partidos.filter(p => p.p1 == pais || p.p2 == pais)
          stats[0] += partidosPais.length
          partidosPais.forEach((partido) => {
            if (partido.p1 == pais) {
              (partido.s_p1 > partido.s_p2) ? stats[1]++ : (partido.s_p1 < partido.s_p2) ? stats[3]++ : stats[2]++;
              stats[4] += partido.s_p1
              stats[5] += partido.s_p2
            } else if (partido.p2 == pais) {
              (partido.s_p1 < partido.s_p2) ? stats[1]++ : (partido.s_p1 > partido.s_p2) ? stats[3]++ : stats[2]++;
              stats[5] += partido.s_p1
              stats[4] += partido.s_p2
            }
          })
        })
        gf = stats[4]; gc = stats[5]
        stats[4] = gf - gc; stats[5] = stats[1] * 3 + stats[2]
        resultados.push(stats)
      })

      function compare(a, b) {
        if (a[5] < b[5]) {
          return 1;
        } else if (a[5] > b[5]) {
          return -1;
        } else {
          if (a[1] < b[1]) {
            return 1;
          } else if (a[1] > b[1]) {
            return -1;
          } else {
            if (a[4] < b[4]) {
              return 1;
            } else if (a[4] > b[4]) {
              return -1;
            }
          }
        }
        return 0;
      }

      resultados.sort(compare)
      let index_relation = resultados.map(function (resultado) {
        return resultado[6]
      })
      let new_paises = []
      resultados.forEach((resultado, index) => {
        new_paises.push(paises[index_relation[index]])
      })
      paises = new_paises
      resultados.map(resultado => {
        return resultado.pop()
      })
      return [paises,resultados]
    },
    showTable() {
      this.table = true;
      this.shows = this.shows.map(function (show) {
        show = false;
        return show;
      });
      this.openTab = false;
    }
  },
  data() {
    let paises = ['Argentina', 'Bolivia', 'Brasil', 'Chile', 'Colombia', 'Ecuador', 'Paraguay', 'Perú', 'Uruguay', 'Venezuela']
    let fechas = [
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
    let [p_ord, results] = this.order(paises,fechas)
    return {
      edit: new Array(fechas.length).fill(false),
      shows: new Array(fechas.length).fill(true),
      fechas: fechas,
      openTab: false,
      table: false,
      p: p_ord,
      resultados: results
    }
  }
}
</script>

<style >
@import '@/styles/main-style.css'
</style>
