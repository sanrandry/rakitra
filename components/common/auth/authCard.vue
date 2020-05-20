<template>
  <!-- <signup-form /> -->
  <login-form />
</template>

<script>
import loginForm from "./loginForm";
import signupForm from "./signupForm";
export default {
  components: {
    "login-form": loginForm,
    "signup-form": signupForm
  }
};
</script>

<style>
</style>
