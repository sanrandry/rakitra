<template>
  <v-container>
    <v-row>
      <v-col cols="6" class="mx-auto">
        <donation-card></donation-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import InfiniteLoading from "vue-infinite-loading";
import donationCard from "@/components/common/donationCard";
export default {
  data: function () {
    return {
      list: [2, 3, 4],
    };
  },
  components: {
    "donation-card": donationCard,
    "infinite-loading": InfiniteLoading,
  },
  methods: {
    infinite_loading_hanlder($state) {
      console.log("loading");
      this.item.push(5);
      setTimeout(function () {
        $state.complete();
      }, 50000);
    },
  },
};
</script>

<style></style>
