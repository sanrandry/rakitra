<template>
  <v-lazy transition="fade-transition">
    <div>
      <v-card>
        <v-row align-content="stretch">
          <v-col cols="12" md="3">
            <div>
              <v-img aspect-ratio :src="image"></v-img>
            </div>
          </v-col>
          <v-col cols="12" md="9">
            <v-card-text>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="headline">{{title}}</v-list-item-title>
                  <v-list-item-subtitle>Publié le 1979</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card-text>

            <v-card-actions>
              <!-- <v-btn text color="deep-purple accent-4" class="text-capitalize">Lire</v-btn> -->
              <v-btn
                text
                color="green "
                :href="file"
                target="_blank"
                class="text-capitalize"
              >Télécharger</v-btn>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-card>
    </div>
  </v-lazy>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
      required: true
    },
    image: {
      required: true,
      default: ""
    },
    file: {
      required: true,
      default: ""
    }
  }
};
</script>

<style>
</style>
