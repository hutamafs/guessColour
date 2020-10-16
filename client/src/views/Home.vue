<template>
  <div class="home">
    <!-- start pertanyaan -->
    <div class="container-fluid p-0">
      <div class="item-flex mt-5" style="cursor: pointer;">
        <h3 class="">Life: {{life}}</h3>
      </div>
      <div class="item-flex text-center" style="cursor: pointer; letter-spacing: 2px">
        <b><H1>LETS PLAY</H1>
        <h3>RGB ({{clue.red}},{{clue.green}},{{clue.blue}})</h3>
        <p>CHOOSE THE RIGHT ONE</p></b></div>
      <div class="item-flex mt-5" style="cursor: pointer;">
          <h3>Skor: {{skor}}</h3>
      </div>
      <!-- <div class="flex bg-dark">
        <div class="text-center text-white">
          <H1>LETS PLAY</H1>
          <h3>RGB ({{clue.red}},{{clue.green}},{{clue.blue}})</h3>
          <p>CHOOSE THE RIGHT ONE</p>
          <p> {{life}} </p>
          <p> {{skor}} </p>
        </div>
      </div> -->
    </div>
    <!-- pertanyaan end -->
    <div class="container">
      <h1 class="text-center">TIMES: 20</h1>
      <!-- <p class="pl-1">LIVES: 3</p> -->
    </div>
    <Box
    v-for="color in colours"
    :key="color.id"
    :color="color"
    >
    </Box>
  </div>
</template>

<script>
// @ is an alias to /src
import Box from '../components/Box'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  components: {
    Box
  },
  data () {
    return {

    }
  },
  methods: {

  },
  created () {
    this.$store.commit('GENERATE_COLOUR')
  },
  computed:{
    ...mapState(['colours','kunci','clue','skor','life'])
  }
}
</script>
<style scoped>
.container-fluid {
  display: flex;
  background-color: slategray;
  color: white;
  justify-content: space-around;
  position: static;
  /* cursor: pointer; */
  /* height: 5rem; */
}
</style>