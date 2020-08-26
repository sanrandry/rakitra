<template>
  <v-app>
    <!-- <appbar /> -->
    <v-content>
      <nuxt />
    </v-content>
    <!-- <v-divider></v-divider> -->
    <!-- <appfooter /> -->

    <snackbar />
  </v-app>
</template>

<script>
import appbar from "@/components/navigations/appbar";
import appfooter from "@/components/navigations/appfooter";
import snackbar from "@/components/common/notifications/snackbar";
export default {
  components: {
    appbar: appbar,
    appfooter: appfooter,
    snackbar: snackbar,
  },
};
</script>
