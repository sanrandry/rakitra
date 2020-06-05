<template>
  <validation-observer v-slot="{invalid}" ref="signup_form">
    <form @submit.prevent="signup()">
      <v-card-text>
        <v-row no-gutters>
          <v-col>
            <validation-provider name="nom" rules="required" v-slot="{errors}">
              <v-text-field
                name="name"
                v-model="signup_data.name"
                label="Nom"
                :error-messages="errors"
              ></v-text-field>
            </validation-provider>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col>
            <validation-provider name="e-mail" rules="required|email" v-slot="{errors}">
              <v-text-field
                name="email"
                v-model="signup_data.email"
                label="Email"
                :error-messages="errors"
              ></v-text-field>
            </validation-provider>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col>
            <validation-provider
              name="mot de passe"
              rules="required"
              v-slot="{errors}"
              vid="signup_data.password"
            >
              <v-text-field
                name="password"
                :type="signup_data.password_show ? 'text' : 'password'"
                :append-icon="signup_data.password_show ? 'mdi-eye-off' : 'mdi-eye'"
                v-model="signup_data.password"
                @click:append="signup_data.password_show = !signup_data.password_show"
                label="Mot de passe"
                :error-messages="errors"
              ></v-text-field>
            </validation-provider>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col>
            <validation-provider
              name="confirmation du mot de passe"
              rules="required|confirmed:signup_data.password"
              v-slot="{errors}"
            >
              <v-text-field
                name="password_confirm"
                v-model="signup_data.password_confirm"
                :type="signup_data.confirm_password_show ? 'text' : 'password'"
                :append-icon="signup_data.confirm_password_show ? 'mdi-eye-off' : 'mdi-eye'"
                @click:append="signup_data.confirm_password_show = !signup_data.confirm_password_show"
                label="Confirmation du mot de passe"
                :error-messages="errors"
              ></v-text-field>
            </validation-provider>
          </v-col>
        </v-row>
        <v-row>
          <v-col no-gutters class="d-flex flex-row-reverse">
            <v-btn
              type="submit"
              :loading="signup_data.button_loading"
              depressed
              color="success"
              class="text-capitalize"
              :disabled="invalid"
            >S'inscrire</v-btn>
          </v-col>
        </v-row>
        <!-- <v-card-text>{{signup_data}}</v-card-text> -->
      </v-card-text>
    </form>
  </validation-observer>
</template>

<script>
import {
  ValidationProvider,
  extend,
  localize,
  ValidationObserver
} from "vee-validate";
import { required, email, confirmed } from "vee-validate/dist/rules";
import fr from "vee-validate/dist/locale/fr.json";
// form validation
localize("fr", fr);
extend("required", {
  ...required
});
extend("email", {
  ...email
});
extend("confirmed", {
  ...confirmed
});

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
  components: {
    ValidationProvider,
    ValidationObserver
  },
  methods: {
    // signup function
    async signup() {
      let is_form_valid = await this.$refs.signup_form.validate();
      if (!is_form_valid) {
        return;
      }
      this.signup_data.button_loading = true;
      try {
        await this.$axios.$post("/accounts", {
          name: this.signup_data.name,
          email: this.signup_data.email,
          password: this.signup_data.password
        });
        this.signup_data.button_loading = false;
        this.$store.dispatch("snack/show", {
          text: "création avec succès"
        });
        this.$emit("done");
      } catch (error) {
        console.log(error.response);
        if (error.response.data.error.statusCode == 422) {
          this.$store.dispatch("snack/show", {
            text: "cet  email est déjà pris"
          });
        }
        this.signup_data.button_loading = false;
      }
    }
  }
};
</script>

<style>
</style>
