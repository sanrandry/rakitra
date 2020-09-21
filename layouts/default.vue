<template>
  <v-app>
    <appbar />
    <v-content>
      <nuxt />
      <v-container>
        <v-row class="mt-10">
          <v-col cols="12" class="headline text-center font-weight-light">Les familles Rakitra</v-col>
        </v-row>
        <rakitra-family-section></rakitra-family-section>
      </v-container>
    </v-content>
    <v-divider></v-divider>
    <appfooter />

    <snackbar />
  </v-app>
</template>

<script>
import appbar from "@/components/navigations/appbar";
import appfooter from "@/components/navigations/appfooter";
import snackbar from "@/components/common/notifications/snackbar";
import RakitraFamilySection from "@/components/navigations/RakitraFamilySection";
export default {
  components: {
    appbar: appbar,
    appfooter: appfooter,
    snackbar: snackbar,
    "rakitra-family-section": RakitraFamilySection,
  },
};
</script>
