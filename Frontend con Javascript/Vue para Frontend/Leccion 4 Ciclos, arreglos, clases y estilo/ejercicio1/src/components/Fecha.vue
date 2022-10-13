<template>
    <div class="d">
        <span>Fecha {{index+1}}</span>
        <hr>
    </div>
</template>

<script>
export default {
    name: "opcion-fecha",
    props: {
        index: Number
    }
}
</script>

<style>
hr {
    width: 100%;
    ;
    border-top: 1px solid #230065;
}

.d {
    -webkit-text-stroke: 0.5px black;
    font-size: 1.8em;
    font-weight: 700;
    color: white;
    text-align: center;
    cursor: pointer;
}

.d:hover {
    font-size: 2em;
    color: rgb(223, 223, 223);
}
</style>