<template>
  <v-footer :fixed="true" absolute app>
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="text-center">
            Suivez-nous sur:
            <v-btn
              icon
              color="#4267B2"
              href="https://www.facebook.com/groups/rakitra"
              target="_blank"
            >
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
            <v-btn icon color="blue">
              <v-icon>mdi-twitter</v-icon>
            </v-btn>
            <v-btn icon color="#D42F8A">
              <v-icon>mdi-instagram</v-icon>
            </v-btn>
          </div>
        </v-col>
        <v-col col="12">
          <v-row>
            <v-col cols="12" md="6" v-for="(item, index) in other_site" :key="index">
              <footer-card :title="item.title" :logo="item.logo" :description="item.description"></footer-card>
            </v-col>
          </v-row>
        </v-col>
        <!-- <v-col cols="12" class="hidden-sm-and-down">
          <v-row justify="space-around">
            <v-col md="4">
              <div>Menu</div>
              <div>
                <nuxt-link to="/" class="footer_link black--text body-2">Accueil</nuxt-link>
              </div>
              <div>
                <nuxt-link to="/publications" class="footer_link black--text body-2">Articles</nuxt-link>
              </div>
              <div>
                <nuxt-link to="/donation" class="footer_link black--text body-2">Nous soutenir</nuxt-link>
              </div>
              <div>
                <nuxt-link
                  :to="{name: 'about'}"
                  class="footer_link black--text body-2"
                >À propos de Rakitra</nuxt-link>
              </div>
            </v-col>
            <v-col md="4">
              <div>Nos coordonnées</div>
              <div>
                <v-icon size="19" class="mr-1">mdi-home</v-icon>Antananarivo-Madagascar
              </div>
              <div>
                <v-icon size="19" class="mr-1">mdi-email</v-icon>rakitra@rakitra.mg
              </div>
              <div>
                <v-icon size="19" class="mr-1">mdi-phone-in-talk</v-icon>+261 34 81 842 01
              </div>
            </v-col>
            <v-col md="4">
              <div>Espace Rakitra</div>
              <div>
                <nuxt-link
                  :to="{name: 'faq'}"
                  class="footer_link black--text body-2"
                >Foire aux questions</nuxt-link>
              </div>
              <div>
                <nuxt-link to="#" class="footer_link black--text body-2">Communautés développeurs</nuxt-link>
              </div>
              <div>
                <nuxt-link to="#" class="footer_link black--text body-2">Condition d'utilisation</nuxt-link>
              </div>
              <div>
                <nuxt-link
                  to="#"
                  class="footer_link black--text body-2"
                >Politique de confidentialité</nuxt-link>
              </div>
            </v-col>
          </v-row>
        </v-col>-->
        <v-col cols="12" class="text-center">
          <span>&copy; {{ new Date().getFullYear() }} - Rakitra</span>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
import footerCard from "@/components/common/footerCard";
export default {
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
          logo: require("@/assets/images/logo/rakitra_logo.png"),
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
          logo: require("@/assets/images/logo/Rakitra SAINA.jpg"),
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
          logo: require("@/assets/images/logo/Rakitra DIA.jpg"),
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
  components: {
    "footer-card": footerCard,
  },
};
</script>

<style lang="scss" scoped>
.footer_link {
  text-decoration: none;
}
</style>
