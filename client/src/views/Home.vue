<template>
  <div class="home">
    <!-- start pertanyaan -->
    <div class="container-fluid p-0">
      <div class="item-flex mt-5" style="cursor: pointer;">
        <!-- <h3 class="">Your Life: {{life}}</h3> -->
        <h3 class="">Life: {{life+1}}</h3>
        <h3>Your Skor: {{skor}}</h3>
      </div>
      <div class="item-flex text-center" style="cursor: pointer; letter-spacing: 2px">
        <b><H1>LETS PLAY</H1>
        <h3>RGB ({{clue.red}},{{clue.green}},{{clue.blue}})</h3>
        <p>CHOOSE THE RIGHT ONE</p></b></div>
      <div class="item-flex mt-5" style="cursor: pointer;">
        <h3>Enemy Life: {{eLife}} </h3>
        <h3>Enemy Skor: {{eScore}} </h3>
        <h4> {{eName}} </h4>
      </div>
    </div>
        <div 
    v-if="eName">
    <Box
    v-for="color in colours"
    :key="color.id"
    :color="color"
    >
    </Box>
    </div>
    <div class="container d-flex justify-content-center align-items-center" v-else>
        <h1>Waiting for other player to join</h1>
    </div>
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
      eScore:0,
      eLife:5,
      eName:null
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
      // const payload = {
      //   name: localStorage.playerone
      // }
      // this.$socket.emit('user-connect', payload)
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
    },
  },
  sockets:{
    enemyLife(data) {
      this.eLife = data
      if(data == 0) {
        //alert('you win')
        this.$router.push({name:'Win'})
      } else if(this.life == 0) {
        //alert('you lose')
        //this.$router.push({name:'GameOver'})
      }
    },
    allUsers(data) {
      data.forEach(user => {
        if(user.name != localStorage.playerone) {
          this.eName = user.name
        }
      })     
    },
    enemyScore(data) {
      this.eScore = data
    },
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