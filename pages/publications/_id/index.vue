<template>
  <v-lazy group transition="fade-transition">
    <div v-if="!post">loading...</div>
    <div v-if="post">
      <v-container></v-container>
    </div>
  </v-lazy>
</template>

<script>
export default {
  data: () => {
    return {
      post: ""
    };
  },
  mounted() {
    this.fetch_post();
  },
  methods: {
    async fetch_post() {
      try {
        const filter = {
          include: [
            {
              relation: "account"
            },
            {
              relation: "images"
            }
          ]
        };
        this.post = await this.$axios.$get(
          "/posts/" +
            this.$route.params.id +
            "?filter=" +
            encodeURI(JSON.stringify(filter))
        );
        console.log(this.post);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style>
</style>
