<template>
  <v-lazy transition="fade-transition">
    <div>
      <v-row>
        <v-col cols="12">
          <div class="headline font-weight-light text-center">L'équipe de Rakitra</div>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <carousel :nav="false" :items="5" :loop="true" :autoplay="true" :dots="false">
            <team-card></team-card>
            <team-card></team-card>
            <team-card></team-card>
            <team-card></team-card>
            <team-card></team-card>
            <team-card></team-card>
            <team-card></team-card>
          </carousel>
        </v-col>
      </v-row>
    </div>
  </v-lazy>
</template>

<script>
import teamCard from "@/components/common/teamCard";
export default {
  data() {
    return {};
  },
  components: {
    "team-card": teamCard
  }
};
</script>

<style></style>
