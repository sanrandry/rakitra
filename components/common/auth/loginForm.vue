<template>
  <v-card-text>
    <form @submit.prevent="login()">
      <v-row no-gutters>
        <v-col>
          <v-text-field name="email" v-model="login_data.email" label="Email"></v-text-field>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col>
          <v-text-field
            name="password"
            :type="login_data.password_show ? 'text' : 'password'"
            :append-icon="login_data.password_show ? 'mdi-eye-off' : 'mdi-eye'"
            v-model="login_data.password"
            @click:append="login_data.password_show = !login_data.password_show"
            label="Mot de passe"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row no-gutters></v-row>
      <v-row>
        <v-col no-gutters class="d-flex flex-row-reverse">
          <v-btn
            type="submit"
            @click="login()"
            :loading="login_data.button_loading"
            depressed
            color="success"
            class="text-capitalize"
          >Se connecter</v-btn>
        </v-col>
      </v-row>
    </form>
    <!-- <v-card-text>{{login_data}}</v-card-text> -->
  </v-card-text>
</template>

<script>
export default {
  data() {
    return {
      // sign up form data
      login_data: {
        // button loading
        button_loading: false,
        // show and hide password management
        password_show: false,
        // form data
        name: "",
        email: ""
      }
    };
  },
  methods: {
    // login function
    async login() {
      this.login_data.button_loading = true;
      try {
        let response = await this.$auth.loginWith("local", {
          data: {
            email: this.login_data.email,
            password: this.login_data.password
          }
        });
        if (response.data.userId) {
          try {
            localStorage.setItem("uid", response.data.userId);
            let user = await this.$axios.$get(
              "/accounts/" + response.data.userId
            );
            this.$auth.setUser(user);
          } catch (error) {
            console.log(error.response);
          }
        }
        this.login_data.button_loading = false;
      } catch (error) {
        console.log(error.response);
        this.login_data.button_loading = false;
      }
    }
  }
};
</script>

<style>
</style>
