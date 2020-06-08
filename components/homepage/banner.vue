<template>
  <v-lazy transition="fade">
    <div>
      <v-parallax
        id="home_parallax"
        height="300"
        :src="require('@/assets/images/homepage/book.jpg')"
      >
        <v-row align="center" justify="center" no-gutters>
          <v-col class="text-center" cols="12">
            <h1 class="display-1 font-weight-thin mb-4">Madagascar: Informer et s’informer autrement</h1>
            <h4 class="subheading">"Écrivons notre histoire et Écrivons l’histoire" ASA</h4>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col cols="12" md="5">
            <v-text-field
              v-model="key"
              @click:append="search()"
              @keydown.enter="search()"
              append-icon="mdi-magnify"
              flat
              hide-no-data
              solo
              label="Rechercher des articles, mots clef, pulibcations, etc..."
            ></v-text-field>
          </v-col>
        </v-row>
        <!-- <v-overlay absolute :value="true">
        </v-overlay>-->
      </v-parallax>
    </div>
  </v-lazy>
</template>

<script>
export default {
  data: function() {
    return {
      key: ""
    };
  },
  methods: {
    search() {
      this.$router.push({ name: "publications", query: { key: this.key } });
    }
  }
};
</script>

<style lang="scss">
#home_parallax {
  .v-parallax__content {
    background-color: rgba(0, 0, 0, 0.4) !important;
    // background-color: red !important;
  }
}
</style>
