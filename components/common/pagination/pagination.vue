<template>
  <div class="text-center" v-if="length > 1">
    <v-pagination v-model="page" :length="length" color="success"></v-pagination>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      item_per_page: 6,
      page: 1,
      length: 0,
    };
  },
  mounted: function () {
    this.fetch_length();
    if (this.$route.query.page) {
      this.page = parseInt(this.$route.query.page);
    }
  },
  watch: {
    page: function () {
      this.$vuetify.goTo(0);
      this.$router.push({
        name: "publications",
        query: { ...this.$route.query, page: this.page },
      });
    },
  },
  methods: {
    async fetch_length() {
      // category pagination
      if (this.$route.query.cat) {
        let data = await this.$axios.$get(
          "/categories/" + this.$route.query.cat + "/posts/count"
        );
        this.length = Math.ceil(data.count / this.item_per_page);
        return;
      }
      // verif if we made a search
      let filter = {};
      if (this.$route.query.key) {
        filter = {
          or: [
            { title: { like: this.$route.query.key, options: "i" } },
            { excerpt: { like: this.$route.query.key, options: "i" } },
            { content: { like: this.$route.query.key, options: "i" } },
          ],
        };
      }
      let data = await this.$axios.$get(
        "/posts/count?where=" + encodeURI(JSON.stringify(filter))
      );
      this.length = Math.ceil(data.count / this.item_per_page);
    },
  },
};
</script>

<style>
</style>
