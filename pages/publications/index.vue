<template>
  <v-container>
    <circular-loading v-if="posts.length <= 0"></circular-loading>
    <v-row>
      <v-col cols="12" md="3" v-for="item in posts" :key="item.id">
        <post-card :post_id="item.id"></post-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import circularLoading from "@/components/common/circularLoading";
import postCard from "@/components/post/postCard";
export default {
  head: function() {
    return {
      title: "test"
    };
  },
  data: () => {
    return {
      posts: []
    };
  },
  components: {
    "post-card": postCard,
    "circular-loading": circularLoading
  },
  mounted() {
    this.fetch_post();
  },
  methods: {
    async fetch_post() {
      try {
        const filter = { fields: { id: true } };
        this.posts = await this.$axios.$get(
          "/posts?filter=" + encodeURI(JSON.stringify(filter))
        );
      } catch (error) {
        console.log(error.response);
      }
    }
  }
};
</script>

<style>
</style>
