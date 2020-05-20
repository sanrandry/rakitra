<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="3" v-for="item in 15" :key="item">
        <post-card></post-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import postCard from "@/components/post/postCard";
export default {
  head: function() {
    return {
      title: "test"
    };
  },
  components: {
    "post-card": postCard
  }
};
</script>

<style>
</style>
