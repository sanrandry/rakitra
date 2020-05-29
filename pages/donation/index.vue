<template>
  <v-container>
    <v-row>
      <v-col cols="6" class="mx-auto">
        <donation-card></donation-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import donationCard from "@/components/common/donationCard";
export default {
  components: {
    "donation-card": donationCard
  }
};
</script>

<style>
</style>
