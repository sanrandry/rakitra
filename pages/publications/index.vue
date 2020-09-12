<template>
  <v-container fluid>
    <v-row class="mt-3">
      <v-col cols="12" md="9">
        <v-row>
          <v-col cols="12" class="px-5">
            <search-form v-model="key" @keyup="searchDebounce()"></search-form>
          </v-col>
        </v-row>
        <circular-loading v-if="loading"></circular-loading>
        <v-row v-if="!loading">
          <v-col cols="12">
            <div class="text-center" v-if="posts.length <= 0">Aucune publication trouver</div>
          </v-col>
          <v-col cols="12" md="4" sm="6" v-for="item in posts" :key="item.id">
            <post-card :post_id="item.id"></post-card>
          </v-col>
          <v-col cols="12">
            <pagination />
          </v-col>
        </v-row>
        <!-- <v-row cols="12">
          <infinite-loading
            spinner="spiral"
            @infinite="infinite_loading_handler"
          ></infinite-loading>
        </v-row>-->
      </v-col>
      <v-col cols="12" md="3">
        <post-side-nav></post-side-nav>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import circularLoading from "@/components/common/circularLoading";
import searchForm from "@/components/common/searchForm";
import pagination from "@/components/common/pagination/pagination";
import postCard from "@/components/post/postCard";
import postSideNav from "@/components/navigations/postSideNav";
// infinite loading import doc: https://peachscript.github.io/vue-infinite-loading/
import InfiniteLoading from "vue-infinite-loading";
export default {
  scrollToTop: true,
  head: function () {
    return {
      title: "publications | rakitra",
    };
  },
  data: () => {
    return {
      loading: false,
      key: "",
      item_per_page: 6,
      page: 1,
      posts: [],
    };
  },
  components: {
    "post-card": postCard,
    "circular-loading": circularLoading,
    "post-side-nav": postSideNav,
    "infinite-loading": InfiniteLoading,
    "search-form": searchForm,
    pagination: pagination,
  },
  created() {
    this.searchDebounce = this.$_.debounce(this.search, 500);
  },
  mounted() {
    // get the search key if we have
    if (this.$route.query.key) {
      this.key = this.$route.query.key;
    }
    // get the current page if we have
    if (this.$route.query.page) {
      this.page = this.$route.query.page;
    }
    this.fetch_post();
  },
  watch: {
    $route: function () {
      if (!this.$route.query.key) {
        this.key = "";
      }
      if (this.$route.query.page) {
        this.page = this.$route.query.page;
      }
      this.fetch_post();
    },
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
          fields: { id: true },
          limit: this.item_per_page,
          skip: this.item_per_page * (this.page - 1),
          order: "updated_at DESC",
        };
        if (this.$route.query.key) {
          filter.where = {
            or: [
              { title: { like: this.$route.query.key, options: "i" } },
              { excerpt: { like: this.$route.query.key, options: "i" } },
              { content: { like: this.$route.query.key, options: "i" } },
            ],
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
          fields: { id: true },
          limit: this.item_per_page,
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
    },
    infinite_loading_handler($state) {
      // $state.loaded();
      console.log("pagination");
    },
  },
};
</script>

<style></style>
