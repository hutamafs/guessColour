<template>
  <!-- login-page -->
  <section>
    <div class="container d-flex align-items-center justify-content-center">
      <div id="loginregister-container" class="p-3 m-5 justify-content-center" style="background-color: black;">
        <div class="row d-flex text-center d-flex align-items-center justify-content-center">
          <div class="col-8 font-lobster d-flex align-items-center justify-content-center">
            <h2 class="text-white text-center">
              GUESS COLOR
              <span><p>how good you as designer ?</p></span>
            </h2><br>
          </div>
          <div class="col-6 text-light register-login rounded mt-3">
            <p class="mt-2 red">Please Login first</p>
            <form class="my-4" @submit.prevent="login">
              <div class="form-group ">
                <label for="email-login">Name</label>
                <input
                  type="text"
                  class="form-control"
                  name="name"
                  id="name"
                  v-model="name"
                />
              </div>
              <button
                type="submit"
                id="btn-login"
                class="btn btn-light btn-outline-light"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
      <img src="../assets/undraw_color_palette_yamk.svg" style="width: 40%" alt="">

    </div>
  </section>
</template>

<script>
export default {
  name: 'Login',
  components: {},
  data () {
    return {
      name: ''
    }
  },
  methods: {
    login () {
      const payload = {
        name: this.name
      }
      this.$socket.emit('user-connect', payload)
      localStorage.setItem('playerone', this.name)
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>

<style scoped>

section {
  width: 100%;
}
.container {
  width: 80%;
}
#loginregister-container {
  width: 80%;  
}

</style>