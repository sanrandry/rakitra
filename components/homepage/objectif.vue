<template>
  <div>
    <v-row class="mb-2">
      <v-col cols="12">
        <div class="text-center headline font-weight-light">
          Objectif
        </div>
      </v-col>
    </v-row>
    <p class="text-justify body-2 justify-space-around">
      <ul class="d-flex flex-wrap objectif_ul">
        <li class="objectif_ul__li">Rassembler toutes les informations concernant Madagascar et le peuple Malagasy.</li>
        <li class="objectif_ul__li">Promouvoir les richesses culturelles malagasy.</li>
        <li class="objectif_ul__li">Valoriser les potentiels économiques et touristiques.</li>
        <li class="objectif_ul__li">Offrir une opportunité d’enrichir ses connaissances.</li>
        <li class="objectif_ul__li">Organiser et financer des recherches concernant l’histoire de Madagascar ;</li>
        <li class="objectif_ul__li">Mettre en ligne les informations et les archives.</li>
      </ul>
    </p>
  </div>
</template>

<script>
export default {

};
</script>

<style>
.objectif_ul__li {
    flex: 50%;
    padding-right: 30px;
    margin-bottom: 15px;
  }
  @media (max-width: 800px) {
    .objectif_ul__li {
      flex: 100%;
    }
  }
</style>
