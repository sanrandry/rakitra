<template>
  <v-layout column justify-center align-center>
    <banner />
  </v-layout>
</template>

<script>
import Logo from "~/components/Logo.vue";
import VuetifyLogo from "~/components/VuetifyLogo.vue";
import banner from "@/components/homepage/banner";

export default {
  components: {
    Logo,
    VuetifyLogo,
    banner
  }
};
</script>
