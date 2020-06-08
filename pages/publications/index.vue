<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="12">
        <v-text-field
          v-model="key"
          label="Rescherche"
          @keyup="searchDebounce()"
        ></v-text-field>
      </v-col>
    </v-row>
    <circular-loading v-if="loading"></circular-loading>
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
      title: "publications | rakitra"
    };
  },
  data: () => {
    return {
      loading: false,
      key: "",
      posts: []
    };
  },
  components: {
    "post-card": postCard,
    "circular-loading": circularLoading
  },
  created() {
    this.searchDebounce = this.$_.debounce(this.search, 500);
  },
  mounted() {
    this.fetch_post();
  },
  watch: {
    $route: function() {
      this.fetch_post();
    }
  },
  methods: {
    async fetch_post() {
      try {
        this.loading = true;
        const filter = {
          fields: { id: true }
        };
        if (this.$route.query.key) {
          filter.where = {
            or: [
              { title: { like: this.$route.query.key } },
              { excerpt: { like: this.$route.query.key } }
            ]
          };
        }
        this.posts = await this.$axios.$get(
          "/posts?filter=" + encodeURI(JSON.stringify(filter))
        );
        this.loading = false;
      } catch (error) {
        this.loading = false;
        console.log(error.response);
      }
    },
    search() {
      console.log(this.key);
      this.$router.push({ name: "publications", query: { key: this.key } });
    }
  }
};
</script>

<style></style>
