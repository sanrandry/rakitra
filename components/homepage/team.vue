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
          <carousel
            :nav="false"
            :items="$vuetify.breakpoint.smAndDown ? 1 : 5"
            :loop="true"
            :autoplay="true"
            :dots="false"
          >
            <team-card v-for="item in team" :key="item.name" :item="item"></team-card>
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
    return {
      team: [
        {
          image: require("@/assets/images/team/f9c6776.jpg"),
          name: "Rangers Tsihaligno",
          status: "specialiste en histoire",
        },
        {
          image: require("@/assets/images/team/3a5c574.jpg"),
          name: "Fanja Rakotonorina",
          status: "Enseignante",
        },
        {
          image: require("@/assets/images/team/hjkjfsfsdkjkdfs.jpg"),
          name: "IHARIMALALA Louisette Nina",
          status: "Enseignante à l'Université d'Antananarivo",
          // ", Fondatrice du Lycée Privé le Capricorne Ambatoantrano Tsiroanomadidy"
        },
        {
          image: require("@/assets/images/team/a1c2d94.jpg"),
          name: "Santatriniaina Alain Ambinintsoa",
          status: "Informaticien et Entrepreneur",
        },
        {
          image: require("@/assets/images/team/434852f.jpg"),
          name: "Fernand Nathan MAHAIAVY",
          status: "Journaliste",
        },
        {
          image: require("@/assets/images/team/b2c47d5.jpg"),
          name: "HANITRARIMALA Arson Dinah",
          status: "Ecrivain",
        },
        {
          image: require("@/assets/images/team/9b33300.png"),
          name: "Brillant Jean Félicien",
          status: "Infographiste",
        },
        {
          image: require("@/assets/images/team/a97d703.jpg"),
          name: "san randry",
          status: "Informaticien",
        },
      ],
    };
  },
  components: {
    "team-card": teamCard,
  },
};
</script>

<style></style>
