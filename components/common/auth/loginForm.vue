<template>
  <v-card-text>
    <validation-observer ref="login_form" v-slot="{invalid}">
      <form @submit.prevent="login()">
        <v-row no-gutters>
          <v-col>
            <validation-provider name="email" v-slot="{ errors }" rules="required|email">
              <v-text-field
                color="rgba(0, 0, 0, 0.54)"
                type="email"
                name="email"
                v-model="login_data.email"
                label="Email"
                :error-messages="errors"
                required
              ></v-text-field>
            </validation-provider>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col>
            <validation-provider v-slot="{ errors }" name="mot de passe" rules="required">
              <v-text-field
                color="rgba(0, 0, 0, 0.54)"
                name="password"
                :type="login_data.password_show ? 'text' : 'password'"
                :append-icon="
                login_data.password_show ? 'mdi-eye-off' : 'mdi-eye'
              "
                v-model="login_data.password"
                @click:append="
                login_data.password_show = !login_data.password_show
              "
                :error-messages="errors"
                label="Mot de passe"
              ></v-text-field>
            </validation-provider>
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
              :disabled="invalid"
              color="success"
              class="text-capitalize"
            >Se connecter</v-btn>
          </v-col>
        </v-row>
      </form>
    </validation-observer>
    <!-- <v-card-text>{{login_data}}</v-card-text> -->
  </v-card-text>
</template>

<script>
import {
  ValidationProvider,
  extend,
  localize,
  ValidationObserver
} from "vee-validate";
import { required, email } from "vee-validate/dist/rules";
import fr from "vee-validate/dist/locale/fr.json";
// form validation
localize("fr", fr);
extend("required", {
  ...required
});
extend("email", {
  ...email
});

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
  components: {
    ValidationProvider,
    ValidationObserver
  },
  methods: {
    // login function
    async login() {
      let is_form_valid = await this.$refs.login_form.validate();
      if (!is_form_valid) {
        return;
      }
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
        console.log(error);
        if (error.response.data.error.statusCode == 401) {
          this.$store.dispatch("snack/show", { text: "mot de passe incorect" });
        }
        this.login_data.button_loading = false;
      }
    }
  }
};
</script>

<style></style>
