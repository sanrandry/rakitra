<template>
  <v-card>
    <v-card-text>
      <v-row no-gutters>
        <v-col>
          <v-text-field name="name" v-model="signup_data.name" label="Nom"></v-text-field>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col>
          <v-text-field name="email" v-model="signup_data.email" label="Email"></v-text-field>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col>
          <v-text-field
            name="password"
            :type="signup_data.password_show ? 'text' : 'password'"
            :append-icon="signup_data.password_show ? 'mdi-eye-off' : 'mdi-eye'"
            v-model="signup_data.password"
            @click:append="signup_data.password_show = !signup_data.password_show"
            label="Mot de passe"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col>
          <v-text-field
            name="password_confirm"
            v-model="signup_data.password_confirm"
            :type="signup_data.confirm_password_show ? 'text' : 'password'"
            :append-icon="signup_data.confirm_password_show ? 'mdi-eye-off' : 'mdi-eye'"
            @click:append="signup_data.confirm_password_show = !signup_data.confirm_password_show"
            label="Confirmation du mot de passe"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col no-gutters class="d-flex flex-row-reverse">
          <v-btn
            @click="signup()"
            :loading="signup_data.button_loading"
            depressed
            color="success"
            class="text-capitalize"
          >S'inscrire</v-btn>
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-text>{{signup_data}}</v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      // sign up form data
      signup_data: {
        // button loading
        button_loading: false,
        // show and hide password management
        password_show: false,
        confirm_password_show: false,
        // form data
        name: "",
        email: "",
        password: "",
        passowrd_confirm: ""
      }
    };
  },
  methods: {
    // signup function
    async signup() {
      this.signup_data.button_loading = true;
      try {
        await this.$axios.$post("/accounts", {
          name: this.signup_data.name,
          email: this.signup_data.email,
          password: this.signup_data.password
        });
        this.signup_data.button_loading = false;
      } catch (error) {
        console.log(error.response);
        this.signup_data.button_loading = false;
      }
    }
  }
};
</script>

<style>
</style>
