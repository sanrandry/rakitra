<template>
  <v-lazy transition="fade-transition">
    <div>
      <v-row>
        <v-col>
          <div class="headline font-weight-light text-center">Nos partenaires</div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <carousel :nav="false" :items="6" :loop="true" :autoplay="true" :dots="false">
            <client-logo />
            <client-logo />
            <client-logo />
            <client-logo />
            <client-logo />
            <client-logo />
            <client-logo />
            <client-logo />
            <client-logo />
            <client-logo />
            <client-logo />
            <client-logo />
            <client-logo />
            <client-logo />
          </carousel>
        </v-col>
      </v-row>
    </div>
  </v-lazy>
</template>

<script>
import clientLogo from "@/components/common/clientLogo";
export default {
  components: {
    "client-logo": clientLogo
  }
};
</script>

<style>
</style>
