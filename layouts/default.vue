<template>
  <v-app>
    <appbar />
    <v-content>
      <nuxt />
    </v-content>
    <v-divider></v-divider>
    <appfooter />
  </v-app>
</template>

<script>
import appbar from "@/components/navigations/appbar";
import appfooter from "@/components/navigations/appfooter";
export default {
  components: {
    appbar: appbar,
    appfooter: appfooter
  }
};
</script>
