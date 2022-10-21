<template>
    <table>
        <thead>
            <tr>
                <th>
                    <span>
                    Selección
                    </span>
                </th>
                <th>
                    <span>
                    PJ
                    </span>
                </th>
                <th>
                    <span>
                    PG
                    </span>
                </th>
                <th>
                    <span>
                    PE
                    </span>
                </th>
                <th>
                    <span>
                    PP
                    </span>
                </th>
                <th>
                    <span>
                    DG
                    </span>
                </th>
                <th>
                    <span>
                    Puntos
                    </span>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="equipo in equipos" :key="equipo" :class="{clasificado: equipo.clasificado, clasificadoRepesca: equipo.clasificadoRepesca, noClasificado: !equipo.clasificadoRepesca && !equipo.clasificado}">
                <td>
                    {{equipo.id}}
                </td>
                <td>
                    <span class="celda">{{equipo.partidosJugados}}</span>
                </td>
                <td>
                    <span class="celda">{{equipo.ganados}}</span>
                </td>
                <td>
                    <span class="celda">{{equipo.empates}}</span>
                </td>
                <td>
                    <span class="celda">{{equipo.perdidos}}</span>
                </td>
                <td>
                    <span class="celda">{{equipo.diferenciaGoles}}</span>
                </td>
                <td>
                    <span class="celda">{{equipo.puntos}}</span>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
    import '../styles/components/tabla.estilo.css'
    export default {
        name: 'Tabla',
        props: {
            equipos: {
                type: Array,
                required: true,
            },

        },
    }
</script>