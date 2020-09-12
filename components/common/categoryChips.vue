<template>
  <div>
    <div class="text-center" v-if="loading">
      <v-progress-circular indeterminate color="green" width="2"></v-progress-circular>
    </div>
    <v-chip
      nuxt
      :to="{name: 'publications'}"
      class="ma-1 font-weight-light text-capitalize"
      label
      outlined
    >Tous</v-chip>
    <v-chip
      nuxt
      :to="{name: 'publications', query: {cat: item.id}}"
      class="ma-1 font-weight-light text-capitalize"
      label
      outlined
      v-for="item in categories"
      :key="item.id"
    >{{item.name}}</v-chip>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      loading: false,
      categories: [],
    };
  },
  mounted() {
    this.fetch_categories();
  },
  methods: {
    async fetch_categories() {
      try {
        this.loading = true;
        this.categories = await this.$axios.$get("/categories");
        this.loading = false;
        console.log("categorie", this.categories);
      } catch (error) {
        this.loading = false;
        console.log(error);
      }
    },
    go(category_id) {
      this.$router.push({ name: "publications", query: { cat: category_id } });
    },
  },
};
</script>

<style>
</style>
