<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="12">
        <v-text-field
          v-model="key"
          class="headline"
          height="50"
          @keyup="searchDebounce()"
          color="rgba(0,0,0,.84)"
        >
          <template v-slot:label>
            <label class>Recherche</label>
          </template>
        </v-text-field>
      </v-col>
    </v-row>
    <circular-loading v-if="loading"></circular-loading>
    <v-row>
      <v-col cols="12" md="9">
        <v-row>
          <v-col cols="12" md="4" sm="6" v-for="item in posts" :key="item.id">
            <post-card :post_id="item.id"></post-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="3">
        <post-side-nav></post-side-nav>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import circularLoading from "@/components/common/circularLoading";
import postCard from "@/components/post/postCard";
import postSideNav from "@/components/navigations/postSideNav";
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
    "circular-loading": circularLoading,
    "post-side-nav": postSideNav
  },
  created() {
    this.searchDebounce = this.$_.debounce(this.search, 500);
  },
  mounted() {
    if (this.$route.query.key) {
      this.key = this.$route.query.key;
    }
    this.fetch_post();
  },
  watch: {
    $route: function() {
      this.fetch_post();
      if (!this.$route.query.key) {
        this.key = "";
      }
    }
  },
  methods: {
    fetch_post() {
      if (this.$route.query.cat) {
        this.fetch_post_by_category(this.$route.query.cat);
      } else {
        this.fetch_random_post();
      }
    },
    async fetch_random_post() {
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
    async fetch_post_by_category(category_id) {
      try {
        this.loading = true;
        const filter = {
          fields: { id: true }
        };
        // to be determined later
        // if (this.$route.query.key) {
        //   filter.where = {
        //     or: [
        //       { title: { like: this.$route.query.key } },
        //       { excerpt: { like: this.$route.query.key } }
        //     ]
        //   };
        // }
        this.posts = await this.$axios.$get(
          "categories/" +
            category_id +
            "/posts?filter=" +
            encodeURI(JSON.stringify(filter))
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
