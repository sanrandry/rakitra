<template>
  <v-row>
    <v-col col="12">
      <v-row>
        <v-col cols="12" md="6" v-for="(item, index) in other_site" :key="index">
          <footer-card :title="item.title" :logo="item.logo" :description="item.description"></footer-card>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import footerCard from "@/components/common/footerCard";

export default {
  components: {
    "footer-card": footerCard,
  },
  data: function () {
    return {
      other_site: [
        {
          title: "Rakitra business",
          logo: require("@/assets/images/logo/logo business mada noire1.png"),
          description:
            "Destiné aux professionnels, Rakitra business englobe tout ce qui est relatif aux affaires et  plus largement l’entrepreneuriat et le commerce. ",
        },
        {
          title: "Rakitra FISIANA",
          logo: require("@/assets/images/logo/Rakitra fisiana.png"),
          description:
            "Regroupe les biographies des personnages historiques,  des personnalités et grandes figures contemporaines : auteurs, artistes, politiciens, historiens, rois et reines, héros de l’indépendance, entrepreneurs, journalistes,…",
        },
        {
          title: "Rakitra JANGA",
          logo: require("@/assets/images/logo/Rakitra JANGA.png"),
          description:
            "On y trouve les secrets des plantes médicinales livrés par les tradipraticiens(es) ; les connaissances médicales que les ancêtres avaient sur les plantes et les matières et qui ont été transmises de génération en génération.",
        },
        {
          title: "Rakitra MIAFINA",
          logo: require("@/assets/images/logo/Rakitra Miafina.png"),
          description:
            "Réservé aux sciences occultes Malagasy, allant du sikidy au fanandrona ainsi que toutes autres informations relatives aux sciences occultes Malagasy.",
        },
        {
          title: "Rakitra ANGANO",
          logo: require("@/assets/images/logo/Rakitra ANGANO.png"),
          description:
            "Une riche collection d’Angano de toutes les régions de la Grande île et des diverses ethnies malagasy.",
        },
        {
          title: "Rakitra ANKIZY",
          logo: require("@/assets/images/logo/Rakitra Ankizy.png"),
          description:
            "Un espace spécialement dédié aux enfants, on y trouve des matériels éducatifs, des activités ludiques stimulant l’intelligence de l’enfant, des documents et articles relatifs au programme scolaire, etc.",
        },
        {
          title: "Rakitra SAINA",
          logo: require("@/assets/images/logo/Rakitra SAINA.png"),
          description:
            "Dédié aux universitaires et aux chercheurs, rakitra université met à leur disposition des publications scientifiques, des résultats de recherches, ainsi que des articles de professeurs des universités de Madagascar.",
        },
        {
          title: "Rakitra BOKY",
          logo: require("@/assets/images/logo/Rakitra Boky.png"),
          description:
            "Des livres de tout genre consultable intégralement, allant des romans et nouvelles aux ouvrages scientifiques, en passant par les recueils historiques et bien d’autres encore.",
        },
        {
          title: "Rakitra DIA",
          logo: require("@/assets/images/logo/Rakitra DIA.png"),
          description:
            "Des informations indispensables pour les passionnés de voyage et d’échange culturel. Vous y trouverez tout ce qu’il y a à savoir sur le tourisme, les transports et toutes les caractéristiques et les richesses touristiques des régions de Madagascar.",
        },
        {
          title: "Rakitra VOARY",
          logo: require("@/assets/images/logo/Rakitra Voary.png"),
          description:
            "Une riche documentation sur l’incomparable biodiversité que le pays possède.",
        },
      ],
    };
  },
};
</script>

<style>
</style>
