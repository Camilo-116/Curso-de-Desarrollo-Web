/* eslint-disable */
<template>
    <div>
        <table v-if="elementos.isReady">
            <thead>
                <tr>
                    <th class="nombre">
                        <span v-show="isEquipo">
                            Equipo
                        </span>
                        <span v-show="!isEquipo">
                            Jugador
                        </span>
                    </th>
                    <th>
                        <span v-if="isEquipo">
                            PJ
                        </span>
                        <span v-else>
                            Equipo
                        </span>
                    </th>
                    <th>
                        <span v-if="isEquipo">
                            PG
                        </span>
                        <span v-else>
                            Partidos Jugados
                        </span>
                    </th>
                    <th>
                        <span v-if="isEquipo">
                            PE
                        </span>
                        <span v-else>
                            Goles Casa
                        </span>
                    </th>
                    <th>
                        <span v-if="isEquipo">
                            PP
                        </span>
                        <span v-else>
                            Goles Visitante
                        </span>
                    </th>
                    <th>
                        <span v-if="isEquipo">
                            DG
                        </span>
                        <span v-else>
                            Total Goles
                        </span>
                    </th>
                    <th v-if="isEquipo">
                        <span>
                            Puntos
                        </span>
                    </th>
                </tr>
            </thead>
            <tbody v-if="isEquipo">
                <tr v-for="elemento in elementos" :key="elemento" :class="{clasificado: elemento.result=='Champions League', clasificadoRepesca: elemento.result=='Europa League', noClasificado: elemento.result=='Relegation', par: esImpar(elemento.position)}">
                    <td @click="cambiarEstadoModal(elemento)">
                        {{elemento.name}}
                    </td>
                    <td>
                        <span class="celda" >{{elemento.overall.games_played}}</span>
                    </td>
                    <td>
                        <span class="celda">{{elemento.overall.won}}</span>
                    </td>
                    <td>
                        <span class="celda">{{elemento.overall.draw}}</span>
                    </td>
                    <td>
                        <span class="celda">{{elemento.overall.lost}}</span>
                    </td>
                    <td>
                        <span class="celda">{{elemento.overall.goals_diff}}</span>
                    </td>
                    <td>
                        <span class="celda">{{elemento.points}}</span>
                    </td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr v-for="elemento in elementos" :key="elemento" :class="{clasificado: elemento.pos=='1', par: esImpar(elemento.pos)}">
                    <td @click="cambiarEstadoModal(elemento.player)">
                        {{elemento.player.player_name}}
                    </td>
                    <td>
                        {{elemento.team.team_name}}
                    </td>
                    <td>
                        <span class="celda">{{elemento.matches_played}}</span>
                    </td>
                    <td>
                        <span class="celda">{{elemento.goals.home}}</span>
                    </td>
                    <td>
                        <span class="celda">{{elemento.goals.away}}</span>
                    </td>
                    <td>
                        <span class="celda">{{elemento.goals.overall}}</span>
                    </td>
                </tr>
            </tbody>
        </table>
        <div v-else>
            <img src="../../public/assets/cargando.gif">
        </div>
        <JugadorComponent v-if="isVisible" :isEquipo="isEquipo" :elementoModal="elementoModal" @cerrar="cerrarModal()"/>
    </div>
</template>

<script>
    import axios from 'axios';
    import '../styles/components/tabla.estilo.css'
    import JugadorComponent from './jugador'
    export default {
        name: 'TablaPosiciones',
        components:{
            JugadorComponent
        },
        props: {
            elementos: {
                type: Array,
            },
            isEquipo: {
                type: Boolean,
            }
        },
        data(){
            return{
                elementoModal: {},
                isVisible: false,
                apikey: ''
            }
        },
        methods: {
            cerrarModal(){
                this.isVisible = false
            },
            cambiarEstadoModal(objecto){
                if (!this.isEquipo) {
                    this.consultarJugador(objecto.player_id, objecto)
                }
                this.elementoModal = objecto.data
                console.log('elementoModal: ', objecto);
                this.isVisible = true
            },      
            esImpar(numero) {
               if (numero % 2 != 0)
                    return true;
                else
                    return false; 
            },
            consultarJugador(id, jugador){
                const enlace = 'https://app.sportdataapi.com/api/v1/soccer/players/'+id+'?apikey='+this.apikey
                console.log('id: ', enlace);
                axios
                .get(enlace)
                .then((response) => {
                    jugador.data = response.data.data;
                })
            }
        }
    }
</script>