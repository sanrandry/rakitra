<template>
  <v-lazy transition="fade-transition">
    <div>
      <v-row>
        <v-col cols="12">
          <div class="text-center headline font-weight-light">Qu'est ce que c'est Rakitra?</div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="10">
          <p
            class="body-2 text-justify"
          >RAKITRA est une plateforme virtuelle libre MALAGASY. Elle est conçue pour recueillir et emmagasiner toutes informations pertinentes de tous les domaines que ce soit historique, géographique, sociale, culturelle, religieuse, économique et politique sur Madagascar. Avec le principe de participation citoyenne dans l’enrichissement du RAKITRA, les faits marquants de la Grande île seront sauvegardés dans sa base de données. Les informations recueillies seront vérifiées et analysées avant de les mettre à la disposition de tous les internautes. Ainsi, RAKITRA servira de références pour tous les navigateurs malagasy comme étrangers : étudiants, enseignants, simples citoyens et spécialistes. Non seulement un outil d’éducation et un magasin d’information, RAKITRA est également une plateforme d’échange.</p>
        </v-col>
        <v-col md="2">
          <v-img
            :src="require('@/assets/images/logo/rakitra_logo.png')"
            :lazy-src="require('@/assets/images/logo/rakitra_logo.png')"
            contain
          >
            <template v-slot:placeholder>
              <v-ing-lazy-loading></v-ing-lazy-loading>
            </template>
          </v-img>
        </v-col>
      </v-row>
    </div>
  </v-lazy>
</template>

<script>
import vImgLazyLoading from "@/components/common/vImgLazyLoading";
export default {
  components: {
    "v-ing-lazy-loading": vImgLazyLoading
  }
};
</script>

<style>
</style>
