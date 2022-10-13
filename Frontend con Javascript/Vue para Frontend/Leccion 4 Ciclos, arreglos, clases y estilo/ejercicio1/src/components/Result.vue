<template>
    <div class="result">
        <div class="score">
            <strong>
                <p :class="{ganador: t2_score < t1_score, perdedor: t2_score > t1_score, empatado: t1_score==t2_score}">{{t1_score}} - {{p1}}</p>
                <p :class="{ganador: t2_score > t1_score, perdedor: t2_score < t1_score, empatado: t1_score==t2_score}">{{t2_score}} - {{p2}}</p>
            </strong>
        </div>
        <img class="img" :src="require(`../assets/${imgURL}`)" alt="Marcador de partido">
    </div>
</template>

<script>

export default {
    name: 'MatchResult',
    props: {
        p1: String,
        p2: String,
        t1_score: Number,
        t2_score: Number,
        imgURL: String
    },
}
</script>

<style scoped>
* {
    box-sizing: border-box;
}

.result {
    display: inherit;
    width: 50%;
    padding: 0.5em
}

.img {
    display: inherit;
    width: 60%;
    height: 25vh
}

.result {
    align-items: center;
}

.result:nth-child(2n+1) {
    border-right: 1px solid black;
}

.score {
    display: inherit;
    font-size: small;
    width: 40%;
    margin-left: 5%;
}

.ganador {
    color: rgb(16, 163, 0);
}

.perdedor {
    color: rgb(127, 0, 0);
    font-weight: 600;
}

.empatado {
    color: rgb(107, 107, 107);
}
</style>
