<template>
  <div v-if="item">
    <v-card flat class="m-2">
      <v-card-text class="text-center">
        <v-avatar size="130">
          <v-img
            :lazy-src="require('@/assets/images/logo/rakitra_logo.png')"
            :src="item.image"
            alt="alt"
          >
            <template v-slot:placeholder>
              <v-img-lazy-loading></v-img-lazy-loading>
            </template>
          </v-img>
        </v-avatar>
      </v-card-text>
      <v-card-title primary-title class="justify-center pt-0">
        <div class="text-center">
          <p class="title font-weight-light text-capitalize">{{ item.name }}</p>
          <em class="font-weight-light font-italic caption">{{ item.status }}</em>
        </div>
      </v-card-title>
    </v-card>
  </div>
</template>

<script>
import vImgLazyLoading from "@/components/common/vImgLazyLoading";
export default {
  props: {
    item: {
      required: true
    }
  },
  data() {
    return {
      // item: {
      //   image: "https://picsum.photos/1080",
      //   name: "santatriniana alain ambinitsoa",
      //   status: "tsy an'asa"
      // }
    };
  },
  components: {
    "v-img-lazy-loading": vImgLazyLoading
  }
};
</script>

<style>
</style>
