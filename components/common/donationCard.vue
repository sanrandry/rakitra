<template>
  <v-card class="mx-auto" outlined>
    <v-img class="white--text align-end" contain :src="image_url"></v-img>

    <v-card-text class="text--primary">
      <div>Le nouveau tee-shirt rakitra</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="success" class="text-capitalize ml-auto" text>Commander</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      images: [
        require("@/assets/images/store/tee-shirt.jpg"),
        require("@/assets/images/store/tee-shirt2.jpg"),
      ],
    };
  },
  computed: {
    image_url() {
      return this.images[1];
    },
  },
};
</script>

<style>
</style>
