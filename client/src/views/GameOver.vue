<template>
    <div>
        <h1>gameover</h1>
        <button @click="play">Play again</button>
    </div>

</template>

<script>
export default {
    name:'GameOver',
    methods:{
        play() {
            this.$store.commit('RESET')
            this.$router.push({name:'Home'})
        }
    }
}
</script>

<style>

</style>