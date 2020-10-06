<template>
  <v-lazy transition="fade-transition">
    <div>
      <v-row class="mb-2">
        <v-col>
          <div class="headline font-weight-light text-center">
            Nos partenaires
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <carousel
            :nav="false"
            :items="6"
            :loop="true"
            :autoplay="true"
            :dots="false"
          >
            <client-logo
              v-for="item in clients"
              :key="item.logo"
              :src="item.logo"
            />
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
  },
  data() {
    return {
      clients: [
        {
          logo: require("@/assets/images/logo/sponsors/asa.png")
        },
        {
          logo: require("@/assets/images/logo/sponsors/inmada.jpg")
        },
        {
          logo: require("@/assets/images/logo/sponsors/logo-toro.png")
        },
        {
          logo: require("@/assets/images/logo/sponsors/Logo-tsik-Medical.png")
        },
        {
          logo: require("@/assets/images/logo/sponsors/virSchool.png")
        },
        {
          logo: require("@/assets/images/logo/sponsors/youngDev.jpg")
        }
      ]
    };
  }
};
</script>

<style></style>
