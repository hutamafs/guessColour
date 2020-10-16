<template>
  <div class="home">
    <!-- start pertanyaan -->
    <div class="container-fluid p-0">
      <div class="item-flex mt-5" style="cursor: pointer;">
        <h3 class="">Your Life: {{life}}</h3>
        <h3>Your Skor: {{skor}}</h3>
      </div>
      <div class="item-flex text-center" style="cursor: pointer; letter-spacing: 2px">
        <b><H1>LETS PLAY</H1>
        <h3>RGB ({{clue.red}},{{clue.green}},{{clue.blue}})</h3>
        <p>CHOOSE THE RIGHT ONE</p></b></div>
      <div class="item-flex mt-5" style="cursor: pointer;">
        <h3>Enemy Life: {{eLife}} </h3>
        <h3>Enemy Skor: {{eScore}} </h3>
      </div>
      <!-- <div class="flex bg-dark">
        <div class="text-center text-white">
          <H1>LETS PLAY</H1>
          <h3>RGB ({{clue.red}},{{clue.green}},{{clue.blue}})</h3>
          <p>CHOOSE THE RIGHT ONE</p>
          <p> {{life}} </p>
          <p> {{skor}} </p>

          <h3> {{eScore}} </h3>
          <h3> {{eLife}} </h3>
        </div>
      </div> -->
    </div>
    <!-- pertanyaan end -->
    <div class="container">
      <h1 class="text-center">TIMES: 20</h1>

      <!-- <p class="pl-1">LIVES: 3</p> -->
      <h2> {{time}} </h2>
      <button class="btn btn-dark p-1 m-2" @click="startGame">Start game</button>
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
      time:null,
      eScore:null,
      eLife:null,
    }
  },
  methods: {
    decreaseTime() {
      let x = setInterval(() => {        
        this.time = limit - now

          if (this.time < 0) {
           clearInterval(x);
          }
      },1000)
    },
    startGame() {
      let now = new Date()
      let limit = now.setSeconds(now.getSeconds() + 30);
      this.decreaseTime(limit);

      setTimeout(() => {
        clearInterval()
      },1000)
    },
  },
    created () {
      this.$store.commit('GENERATE_COLOUR')
  },
  computed:{
    ...mapState(['colours','kunci','clue','skor','life'])
  },
  watch:{
    skor() {
      this.$socket.emit('sendScore',this.skor)
    },
    life() {
      this.$socket.emit('sendLife',this.life)
    }
  },
  sockets:{
    enemyLife(data) {
      this.eLife = data
    },
    allUsers(data) {
      console.log('userss',data)
    },
    enemyScore(data) {
      this.eScore = data
    }
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