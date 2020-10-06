<template>
  <div>
    <v-row class="mb-2">
      <v-col cols="12">
        <div class="text-center headline font-weight-light">
          Cibles
        </div>
      </v-col>
    </v-row>
    <p class="text-justify body-2">
      <ul class="d-flex flex-wrap objectif_ul justify-space-around">
        <li class="objectif_ul__li">Chercheurs,</li>
        <li class="objectif_ul__li">Spécialistes,</li>
        <li class="objectif_ul__li">Enseignants,</li>
        <li class="objectif_ul__li">Etudiants,</li>
        <li class="objectif_ul__li">Investisseurs,</li>
        <li class="objectif_ul__li">Bloggeurs</li>
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
    flex: 33.33%;
    padding-right: 30px;
    margin-bottom: 15px;
  }
  @media (max-width: 800px) {
    .objectif_ul__li {
      flex: 100%;
    }
  }
</style>
