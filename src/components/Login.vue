<template>
  <v-app id="inspire">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <img src="../../static/img/icon_subasta.png" class="logo-login">
            <v-card class="elevation-12">
              <v-toolbar dark color="grey darken-4">
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="login" label="username" type="text" v-model="username"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password" v-model="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn v-if="!(this.usernameVerificated && this.passwordVerificated)" color="grey darken-4" disabled>Login</v-btn>
                <v-btn v-if="this.usernameVerificated && this.passwordVerificated" color="grey darken-4" @click="goHome()"><label style="color: #fff; cursor: pointer;">Login</label></v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: '',
      usernameVerificated: false,
      passwordVerificated: false,
      users: ['leonardo', 'sebastian'],
      passwords: ['leonardo', 'sebastian']
    }
  },
  props: {
  },
  methods: {
    validateUsername () {
      this.usernameVerificated = this.users.includes(this.username)
    },
    validatePassword () {
      this.passwordVerificated = this.passwords.includes(this.password)
    },
    goHome () {
      console.log(this.username)
      this.$router.push({ name: 'Home', params: {user: this.username} })
    }
  },
  watch: {
    username: function (newVal, oldVal) {
      this.username = newVal
      this.validateUsername()
    },
    password: function (newVal, oldVal) {
      this.password = newVal
      this.validatePassword()
    }
  }
}
</script>
