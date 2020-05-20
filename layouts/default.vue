<template>
  <v-app>
    <appbar />
    <v-content>
      <nuxt />
    </v-content>
    <v-footer :fixed="true" absolute app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import appbar from "@/components/navigations/appbar";
export default {
  components: {
    appbar: appbar
  }
};
</script>
