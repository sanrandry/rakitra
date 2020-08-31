<template>
  <v-card outlined>
    <v-card-text
      class="text-weight-thin text-center"
      v-if="tab == 'login'"
    >céer votre compte - c'est gratuit !</v-card-text>
    <!-- <v-card-text>céer votre compte - c'est gratuit !</v-card-text> -->
    <v-tabs centered v-model="tab" color="rgba(0, 0, 0, 0.78)">
      <v-tab href="#login">Se connecter</v-tab>
      <v-tab href="#signup">S'inscrire</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item value="login">
        <login-form />
      </v-tab-item>
      <v-tab-item value="signup">
        <signup-form v-on:done="tab=signup" />
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>

<script>
import loginForm from "./loginForm";
import signupForm from "./signupForm";
export default {
  data: () => {
    return {
      tab: null,
    };
  },
  components: {
    "login-form": loginForm,
    "signup-form": signupForm,
  },
};
</script>

<style>
</style>
