/* eslint-disable */
<template>
    <div class="contenedor">
        <span class="boton-cerrar cross-style" @click="$emit('cerrar')" :class="{ hidden: !crossIcon }">
            <span v-for="(x, index) in 2" :key="x" class="cerrar" :style="{ position: 'absolute', width: '3px', height: '20px',transform: index === 1 ? 'rotate(45deg)' : 'rotate(-45deg)'}">
            </span>
        </span>
        <div v-if="!isEquipo" class="jugador">
            <div class="derecha">
                <h1>Nombre: {{elementoModal.firstname}} {{elementoModal.lastname}}</h1>
                <p>Edad: {{elementoModal.age}}</p>
                <p>Cumpleaños: {{elementoModal.birthday}}</p>
                <p>Nacionalidad: {{elementoModal.country.name}}</p>
                <p>Peso: {{elementoModal.weight}}kg</p>
            </div>
        </div>
        <div v-else class="equipo">
            <div v-if="elementoModal.logo" class="izquierda">
                <img :src="elementoModal.logo" class="imagen">
            </div>
            <div class="derecha">
                <h1>Nombre: {{elementoModal.name}}</h1>
                <p>Abreviatura: {{elementoModal.short_code}}</p>
                <p>País: {{elementoModal.country.name}}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'JugadorComponent',
    props:{
       elementoModal:{
           type: Object,
       },
       isEquipo:{
           type: Boolean,
       },
   },
}
</script>
<style>
    .cerrar {
        background: #21334d;
    }
    .contenedor{
        position: fixed;
        z-index: 9998;
        background: white;
        opacity: 90%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100% !important;
        width: 100% !important;
        top: 0;
        left: 0;
    }
    .boton-cerrar {
      height: 32px;
      width: 32px;
    }
    .cross-style {
      position: absolute;
      top: 12px;
      right: 2px;
      cursor: pointer;
    }
</style>