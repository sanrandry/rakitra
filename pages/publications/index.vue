<template>
  <v-container class="d-flex flex-wrap">
    <v-card flat hover class="mx-2 my-2" max-width="250" v-for="item in 5" :key="item">
      <v-list-item>
        <v-list-item-avatar color="grey"></v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class>san randry sitraka</v-list-item-title>
          <v-list-item-subtitle>1 h</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-img
        class="white--text align-end"
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      ></v-img>
      <v-card-title>Top 10 Australian beaches</v-card-title>

      <v-card-text class="text--primary">
        <div>Whitehaven Beach</div>

        <div>Whitsunday Island, Whitsunday Islands</div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="orange" text>Share</v-btn>

        <v-btn color="orange" text>Explore</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  head: function() {
    return {
      title: "test"
    };
  }
};
</script>

<style>
</style>
