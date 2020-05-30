<template>
  <v-layout row wrap>
    <v-container grid-list-xs>
      <v-row justify="center">
        <v-col cols="3">
          <auth-card />
        </v-col>
      </v-row>
      <div id="summernote">Hello Summernote</div>
    </v-container>
    <!-- <v-container grid-list-xs>{{categories}}</v-container> -->
  </v-layout>
</template>

<script>
import authCard from "@/components/common/auth/authCard";
import postForm from "@/components/post/postForm";
export default {
  async asyncData({ $axios }) {
    let categories = [];
    try {
      categories = await $axios.$get("/categories");
    } catch (error) {
      console.log(error);
    }
    return {
      categories: categories
    };
  },
  components: {
    "auth-card": authCard,
    "post-form": postForm
  },
  data() {
    return {
      panel: [0, 1],
      sheet: false
    };
  },
  mounted() {
    $(document).ready(function() {
      $("#summernote").summernote();
    });
  }
};
</script>

<style lang="scss" scoped>
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css");
</style>
