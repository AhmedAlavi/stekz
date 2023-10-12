<template>
    <div>
      <b-row class="login-container justify-content-center align-items-center">
        <b-col class="col-12 col-sm-8 col-md-8 col-lg-3">
          <div class="card box-shadow p-3 rounded-0 border-0">
            <b-row>
              <b-col class="col-12">
                <h3>Welcome to WhatsApp</h3>
              </b-col>
              <b-col class="col-12 my-4">
                <img src="../assets/bg.jpg" alt="">
              </b-col>
              <b-col v-if="showErrorMessage" class="text-danger text-sm">
                Username or Password Incorrect
              </b-col>
            </b-row>
          
            <form @submit.prevent="validateLogin">
              <b-form-input
                v-model="username"
                placeholder="Username"
                required
                class="my-2 p-2 rounded-0"
              ></b-form-input>
              <b-form-input
                v-model="password"
                placeholder="Password"
                type="password"
                required
                class="my-2 p-2 rounded-0"
              ></b-form-input>

              <button class="btn btn-success px-3 py-2 mt-3 w-100 rounded-0" type="submit">Login</button>
            </form>
          </div>
        </b-col>
      </b-row>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Login-view',
  data: () => {
    return {
      username: "",
      password: "",
      showErrorMessage:false,
    };
  },
  methods: {
    ...mapActions('auth',['login']),

    async validateLogin() {

      this.showErrorMessage = false

      const user = {
        username : this.username,
        password : this.password,
      }

      const res = await this.login(user)

      if(res) this.$router.push('/')
      else this.showErrorMessage = true
    },
  },
}
</script>