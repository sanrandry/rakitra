<template>
  <v-row style="cursor: pointer;">
    <v-col cols="3">
      <v-img v-if="logo" :lazy-src="rakitra_logo" :src="logo"></v-img>
    </v-col>
    <v-col cols="9">
      <p v-if="title" class="success--text">{{title}}</p>
      <p v-if="description">{{description}}</p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    logo: {
      type: String,
    },
    title: {
      required: true,
    },
    description: {
      type: String,
    },
  },
  data: function () {
    return {
      rakitra_logo: require("@/assets/images/logo/rakitra_logo.png"),
    };
  },
};
</script>

<style>
</style>
