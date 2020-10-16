<template>
    <div class="container">
        <div class="square" @click="choose(color.id)" :style="`background-color:rgb(${color.red},${color.green},${color.blue});`">
        </div>
    </div>
</template>

<script>
export default {
  name: 'Box',
  props: ['color'],
  methods:{
      choose(idBox) {
          this.$store.commit('chosen',idBox)
      }
  }
}

</script>

<style>
.container {
    width: 50%;
}
.square {
	border-radius: 20%;
    width: 30%;
	padding-bottom: 30%;
    float: left;
    cursor: pointer;
    margin: 1.66%;
}

.square:hover {
  box-shadow: 0 0 3px 2px rgb(255, 255, 255);
}
</style>
