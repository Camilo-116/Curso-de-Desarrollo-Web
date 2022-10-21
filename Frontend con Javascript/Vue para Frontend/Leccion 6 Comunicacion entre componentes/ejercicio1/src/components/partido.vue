<template>
    <div class="directionRow" v-show="!editando">
        <div class="equipos ancho-50">
            <div><span class="seleccion" :class="{empate: esEmpate, ganador: localEsGanador, perdedor: !localEsGanador && !esEmpate }" v-text="golesLocal + seleccionLocal"></span></div>
            <div><span class="seleccion" :class="{empate: esEmpate, ganador: !localEsGanador, perdedor: localEsGanador}" v-text="golesVisitante + seleccionVisitante"></span></div>
        </div>
        <div class="ancho-50 centrado">
            <img class="ancho-100 centrado" :src="imagen">
        </div>
    </div>
</template>
<script>
    import "../styles/components/partido.estilo.css";
    export default {
        name: 'Partido',
        props: {
            imagen: {
                type: String,
                required: false
            },
            esEmpate: {
                type: Boolean,
                required: false,
            },
            localEsGanador: {
                type: Boolean,
                required: false,
            },
            seleccionLocal: {
                type: String,
                required: true,
            },
            golesLocal: {
                type: Number,
                required: true,
            },
            seleccionVisitante: {
                type: String,
                required: true,
            },
            golesVisitante: {
                type: Number,
                required: true,
            },
        },
        data() {
            const edit = self.editando;
            return {
                edit
            }
        }
    }
</script>