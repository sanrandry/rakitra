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
          >RAKITRA est une plateforme MALAGASY libre et en line. Elle est conçue pour recevoir, collecter et d’emmagasiner toutes informations sur MADAGASCAR : historique, géographique, sociale, culturelle, économique et bien d’autre. Le principe de RAKITRA est basé sur le partage et le sauvegarde de tous les passages historiques du pays, RAKITRA a pour mission de recueillir toutes les infos pertinentes sur M/car, afin de les mettre à disposition des utilisateurs. En étant une plateforme libre, elle s'adresse à tous les navigateurs sans distinction: natifs comme étrangers, étudiants ou professeurs, simples citoyens ou historiens. Son objectif est de pouvoir conserver, traiter ou communiquer des éléments de connaissance sur M/car pour en informer les autres, mais aussi de s'informer et de partager à son tour, de faire en sorte que tout le monde peut y accéder à tout moment et librement.</p>
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
