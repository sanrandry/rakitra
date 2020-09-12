<template>
  <div>
    <v-row>
      <v-col>
        <div class="subtitle-1">Thème</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <category-chips></category-chips>
      </v-col>
    </v-row>
    <v-row class="mt-5">
      <v-col cols="12">
        <div class="subtitle-1">Citation du jour</div>
        <div
          class="font-weight-light text-center mt-2"
        >Sous l'œil de l'ange, un gagnant reste toujours un gagnant . ASA</div>
      </v-col>
    </v-row>
    <v-row class="mt-5">
      <v-col cols="12">
        <div class="subtitle-1">Madagascar en chiffre:</div>
        <div class="font-weight-light mt-2">
          <ul class="madagascar_list">
            <li>Code: ISO 3166-1 MDG, MG</li>
            <li>Domaine internet: .mg</li>
            <li>Indicatif téléphonique: +261</li>
            <li>Gentilé: Malagasy, Malgache</li>
            <li>Population total(2016): 24 430 325 hab</li>
            <li>Classement: 56 ème</li>
            <li>Densité: 41,61hab/km2</li>
          </ul>
        </div>
      </v-col>
    </v-row>
    <v-row class="mt-5">
      <v-col cols="12">
        <div class="subtitle-1">Madagascar infos:</div>
        <div class="font-weight-light mt-2">
          <ul class="madagascar_list">
            <li>Fête nationale 26 juin: indépendence(1960)</li>
            <li>Hymne: Ry Tanindrazanay malala ô</li>
            <li>Devise: Fitiavana, Tanindrazana, Fandrosoana</li>
            <li>Capitale: Antananarivo</li>
            <li>Langue officielles: Malgache et Francais</li>
            <li>Monnaie: Ariary</li>
          </ul>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import categoryChips from "@/components/common/categoryChips";
export default {
  components: {
    "category-chips": categoryChips,
  },
};
</script>

<style lang="scss" scoped>
.madagascar_list {
  list-style-type: none;
}
</style>
