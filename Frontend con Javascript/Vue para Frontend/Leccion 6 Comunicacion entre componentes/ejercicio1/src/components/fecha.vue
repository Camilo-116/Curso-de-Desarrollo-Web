<template>
    <div>
        <span class="subtitulo-cuerpo">Fecha {{fecha.id}}</span>
        <div class="fecha">
            <div class="partido" v-for="resultado in fecha.resultados" :key="resultado">
                <Partido v-for="partido in resultado" :key="partido" :imagen="partido.imagen" :esEmpate="partido.esEmpate" :localEsGanador="partido.localEsGanador" :golesLocal="partido.local" :seleccionLocal="partido.equipoLocal" :golesVisitante="partido.visitante" :seleccionVisitante="partido.equipoVisitante"/>
            </div>
        </div>
    </div>
</template>
<script>
import Partido from './partido.vue';
import "../styles/components/fecha.estilo.css";
export default {
    name: 'Fecha',
    components: { 
        Partido 
    },
    props: {
        fecha: {
            type: Array,
            required: true,
        },

    },
}
</script>