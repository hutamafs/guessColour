<template>
  <div class="jumbotron p-0 bg-white">
        <div class="row">
            <div class="col-12 d-flex align-items-center justify-content-center">
                <h1 class="text-white ">gameover</h1><br>
            </div>
        </div>
        <div class="text-center">
            <img src="../assets/gif-win.gif" class="shadow rounded" style="width:40%" alt=""><br>
            <button class="btn btn-dark mt-3" @click="play">Play again</button>
        </div>
  </div>
</template>

<script>
export default {
    name:'Win',
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