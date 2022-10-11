<template>
    <div class="match-form"
        :style="((length%2==0 && indexP < length-2) || (length%2!=0 && indexP < length-1) ? 'border-bottom: 1px solid black;' : '' )">
        <div class="score">
            <div class="p1">
                <label for="s_p1">Goles: </label><br>
                <input type="text" :id="'s_p1_'+indexF+'_'+indexP" :value="partido.s_p1">
                <label for="p1">País: </label><br>
                <input type="text" :id="'p1_'+indexF+'_'+indexP" :value="partido.p1">
            </div>
            <div class="p2">
                <label for="s_p2">Goles: </label><br>
                <input type="text" :id="'s_p2_'+indexF+'_'+indexP" :value="partido.s_p2">
                <label for="p2">País: </label><br>
                <input type="text" :id="'p2_'+indexF+'_'+indexP" :value="partido.p2">
            </div>
        </div>
        <div class="img">
            <label for="img-src">Partido de Imagen</label><br>
            <select name="image" :id="'image'+indexF+'_'+indexP">
                <option value="ArVe.png">Arg vs. Ven</option>
                <option value="BoBr.png">Bol vs. Bra</option>
                <option value="BrCh.png">Bra vs. Chi</option>
                <option value="ChUr.png">Chi vs. Urg</option>
                <option value="CoBo.png">Col vs. Bol</option>
                <option value="EcAr.png">Ecu vs. Arg</option>
                <option value="PaEc.png">Prg vs. Ecu</option>
                <option value="UrPe.png">Urg vs. Per</option>
            </select>
        </div>
    </div>
</template>


<script>
export default {
    name: "EditResult",
    props: {
        partido: Object,
        indexP: Number,
        indexF: Number,
        length: Number
    },
    mounted() {
        let id = 'image'+this.indexF.toString()+'_' + this.indexP.toString()
        let options = document.getElementById(id).querySelectorAll(`#${id}>option`)
        for (let option of options) {
            if (option.value == this.partido.img) {
                option.setAttribute("selected", "")
                break
            }
        }
    }
}
</script>

<style scoped>
* {
    box-sizing: border-box;
}

.match-form {
    display: flex;
    flex-flow: row nowrap;
    width: 50%;
    font-size: 0.8em;
}

.match-form:nth-child(2n+1) {
    align-items: center;
    padding: 2vh 2vw 2vh 0;
    border-right: 1px solid black;
}

.match-form:nth-child(2n) {
    align-items: center;
    padding: 2vh 0 2vh 2vw
}

.img {
    display: inherit;
    flex-direction: column;
    flex: 1;
}

.score {
    display: inherit;
    flex-direction: column;
    flex: 2;
}

.p1,
.p2 {
    display: inherit;
    flex-direction: row;
    margin: 1vh 1vw 1vh 0;
}

.p1 input,
.p2 input {
    margin: 0 0.5vw 0 0.5vw
}
</style>