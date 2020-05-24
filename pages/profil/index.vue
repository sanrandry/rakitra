<template>
  <v-container>
    <v-row>
      <v-col>
        <nuxt-link to="/profil/editor">editor</nuxt-link>
        {{user_posts}}
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="3" v-for="item in user_posts" :key="item.id">
        <post-card :post_id="item.id"></post-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import postCard from "@/components/post/postCard";
export default {
  data() {
    return {
      user_posts: []
    };
  },
  components: {
    "post-card": postCard
  },
  mounted() {
    // fetch curent user post
    this.fetch_user_post();
  },
  methods: {
    async fetch_user_post() {
      try {
        let filter = { fields: { id: true } };
        this.user_posts = await this.$axios.$get(
          "accounts/" +
            localStorage.getItem("uid") +
            "/posts?filter=" +
            encodeURI(JSON.stringify(filter))
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
