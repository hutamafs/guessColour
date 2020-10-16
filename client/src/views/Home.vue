<template>
  <div class="home">
    <!-- start pertanyaan -->
    <div class="container-fluid p-0">
      <div class="bg-dark">
        <div class="text-center text-white">
          <H1>LETS PLAY</H1>
          <h3>RGB (xxx,xxx,xxx)</h3>
          <p>CHOOSE THE RIGHT ONE</p>
        </div>
      </div>
    </div>
    <!-- pertanyaan end -->
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

export default {
  name: 'Home',
  components: {
    Box
  },
  data () {
    return {
      colours: [],
      kunci: null,
      clue: {}
    }
  },
  methods: {
    generateColour () {
      let num = 0
      let id = 1
      while (num < 6) {
        let red = Math.floor(Math.random() * 255) + 1
        let green = Math.floor(Math.random() * 255) + 1
        let blue = Math.floor(Math.random() * 255) + 1
        let colour = { id, red, green, blue }
        this.colours.push(colour)
        num++
        id++
      }
      this.kunci = Math.floor(Math.random() * this.colours.length)
      this.clue = this.colours[this.kunci]
    }
  },
  created () {
    this.generateColour()
    this.$store.commit('key',this.kunci)
  }
}
</script>
<style lang="stylus" scoped>

</style>