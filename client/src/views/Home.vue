<template>
  <div class="home">
    <!-- start pertanyaan -->
    <div class="container-fluid p-0">
      <div class="bg-dark">
        <div class="text-center text-white">
          <H1>LETS PLAY</H1>
          <h3>RGB ({{clue.red}},{{clue.green}},{{clue.blue}})</h3>
          <p>CHOOSE THE RIGHT ONE</p>
          <p> {{life}} </p>
          <p> {{skor}} </p>
        </div>
      </div>
    </div>
    <!-- pertanyaan end -->
    <div class="container">
      <h1 class="text-center">TIMES: 20</h1>
      <p class="pl-1">LIVES: 3</p>
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
<style lang="stylus" scoped>

</style>