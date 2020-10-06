<template>
  <div>
    <banner />
    <v-container class="my-10">
      <introduction />
    </v-container>
    <v-container class="my-10">
      <objectif />
    </v-container>
    <v-container class="my-10">
      <porteur-de-projet />
    </v-container>
    <v-container class="my-10">
      <description />
    </v-container>
    <v-container class="my-10">
      <why />
    </v-container>
    <v-container class="my-10">
      <cible />
    </v-container>
    <v-container class="my-10">
      <team />
    </v-container>
    <v-container class="my-10">
      <client />
    </v-container>
  </div>
</template>

<script>
import banner from "@/components/homepage/banner";
import introduction from "@/components/homepage/introduction";
import objectif from "@/components/homepage/objectif";
import porteurDeProjet from "@/components/homepage/porteurDeProjet";
import description from "@/components/homepage/description";
import cible from "@/components/homepage/cible";
import why from "@/components/homepage/why";
import team from "@/components/homepage/team";
import client from "@/components/homepage/client";

export default {
  head: function() {
    return {
      title: "accueil | rakitra"
    };
  },
  components: {
    introduction,
    objectif,
    "porteur-de-projet": porteurDeProjet,
    banner,
    description,
    why,
    cible,
    team,
    client
  }
};
</script>
