<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="9" class="mx-auto">
        <v-list three-line>
          <v-list-item>
            <v-list-item-avatar size="100">
              <v-avatar size="100" color="deep-purple darken-2">
                <span class="white--text display-1">{{$auth.user.name | first_letter}}</span>
              </v-avatar>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{$auth.user.name}}</v-list-item-title>
              <v-list-item-subtitle>{{publicatin_nuber}} publication(s)</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action v-if="$userPerimeter.isAllowed('read')">
              <v-btn color="success" large depressed to="/profil/editor" nuxt>
                <v-icon left>mdi-pencil</v-icon>nouvelle publication
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
    <circular-loading v-if="post_loading"></circular-loading>
    <v-row>
      <v-col cols="12" md="3" sm="6" v-for="item in user_posts" :key="item.id">
        <post-card :post_id="item.id"></post-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import circularLoading from "@/components/common/circularLoading";
import postCard from "@/components/post/postCard";
import userPerimeter from "@/perimeters/userPerimeter";
export default {
  perimeters: [userPerimeter],
  data() {
    return {
      post_loading: false,
      user_posts: [],
      publicatin_nuber: 0,
    };
  },
  components: {
    "post-card": postCard,
    "circular-loading": circularLoading,
  },
  mounted() {
    // fetch curent user post
    this.fetch_user_post();
  },
  methods: {
    async fetch_user_post() {
      try {
        this.post_loading = true;
        let filter = { fields: { id: true } };
        this.user_posts = await this.$axios.$get(
          "accounts/" +
            localStorage.getItem("uid") +
            "/posts?filter=" +
            encodeURI(JSON.stringify(filter))
        );
        this.post_loading = false;
        this.fetch_publication_nuber();
      } catch (error) {
        this.post_loading = false;
        console.log(error.response);
      }
    },
    async fetch_publication_nuber() {
      try {
        let returned_data;
        returned_data = await this.$axios.$get(
          "accounts/" + localStorage.getItem("uid") + "/posts/count"
        );
        this.publicatin_nuber = returned_data.count;
      } catch (error) {
        console.log("can not get publication number");
      }
    },
  },
};
</script>

<style>
</style>
