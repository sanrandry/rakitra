<template>
  <v-img
    :src="src"
    :lazy-src="require('@/assets/images/logo/rakitra_logo.png')"
    height="100"
    contain
  >
    <template v-slot:placeholder>
      <v-img-lazy-loading></v-img-lazy-loading>
    </template>
  </v-img>
</template>

<script>
import vImgLazyLoading from "@/components/common/vImgLazyLoading";
export default {
  props: ["src"],
  components: {
    "v-img-lazy-loading": vImgLazyLoading
  }
};
</script>

<style>
</style>
