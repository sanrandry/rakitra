<template>
  <v-layout row wrap>
    <v-container grid-list-xs>
      <v-row justify="center">
        <v-col lg="3" md="4" sm="12">
          <auth-card />
        </v-col>
      </v-row>
    </v-container>
  </v-layout>
</template>

<script>
import authCard from "@/components/common/auth/authCard";
export default {
  components: {
    "auth-card": authCard
  }
};
</script>

<style>
</style>
