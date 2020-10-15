<template>
    <div class="square" @click="choose(color.id)" :style="`background-color:rgb(${color.red},${color.green},${color.blue});`">
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
.square {
	border-radius: 20%;
    width: 30%;
	padding-bottom: 30%;
	float: left;
	margin: 1.66%;
}
</style>
