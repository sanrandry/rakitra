<template>
  <v-lazy transition="fade">
    <div id="home_parallax" style="height:100vh" class="d-flex align-center">
      <!-- <v-parallax
        id="home_parallax"
        height="300"
        :src="require('@/assets/images/homepage/COUVERTURE RAKITRA.png')"
      >-->
      <v-row align="center">
        <v-col cols="12">
          <v-row align="center" justify="center" no-gutters>
            <v-col class="text-center white--text" cols="12">
              <h1 class="display-1 font-weight-thin">Madagascar: Informer et s’informer autrement</h1>
              <h4 class="subheading">"Écrivons notre histoire et Écrivons l’histoire" ASA</h4>
            </v-col>
          </v-row>
        </v-col>
        <v-col md="12">
          <v-row justify="center">
            <v-col cols="12" md="5">
              <!-- <v-text-field
                v-model="key"
                @click:append="search()"
                @keydown.enter="search()"
                append-icon="mdi-magnify"
                flat
                hide-no-data
                solo
                label="Rechercher des articles, mots clef, pulibcations, etc..."
              ></v-text-field>-->
              <search-form v-model="key" @click:append="search()" @keydown.enter="search()"></search-form>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <!-- <v-overlay absolute :value="true">
      </v-overlay>-->
      <!-- </v-parallax> -->
    </div>
  </v-lazy>
</template>

<script>
import searchForm from "@/components/common/searchForm";
export default {
  components: {
    "search-form": searchForm,
  },
  data: function () {
    return {
      key: "",
    };
  },
  methods: {
    search() {
      this.$router.push({ name: "publications", query: { key: this.key } });
    },
  },
};
</script>

<style lang="scss">
#home_parallax {
  .v-parallax__content {
    background-color: rgba(0, 0, 0, 1) !important;
    // background-color: red !important;
  }
  background: url("~assets/images/homepage/COUVERTURE RAKITRA1.jpg")
    rgba(0, 0, 0, 0.2);
  background-size: cover;
  background-blend-mode: multiply;
}
</style>
