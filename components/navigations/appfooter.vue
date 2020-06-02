<template>
  <v-footer :fixed="true" absolute app>
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="text-center">
            Suivez-nous sur:
            <v-btn icon color="#4267B2">
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
        <v-col cols="12">
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
        </v-col>
        <v-col cols="12" class="text-center">
          <span>&copy; {{ new Date().getFullYear() }} - Rakitra</span>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer_link {
  text-decoration: none;
}
</style>
