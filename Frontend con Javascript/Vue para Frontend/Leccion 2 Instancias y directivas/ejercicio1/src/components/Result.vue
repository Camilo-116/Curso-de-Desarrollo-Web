<template>
    <div class="result">
        <div class="score">
            <strong>
                <p>{{t1_score}} - {{p1}}<br>{{t2_score}} - {{p2}}</p>
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
}
.img{
    display: inherit;
    width: 60%;
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

</style>
