<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed dense elevate-on-scroll color="white" app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn text class="text-capitalize font-weight-light" nuxt to="/">Accueil</v-btn>
      <v-btn text class="text-capitalize font-weight-light" nuxt to="/publications">Articles</v-btn>
      <v-btn text class="text-capitalize font-weight-light">Catalogue</v-btn>
      <v-btn text class="text-capitalize font-weight-light" nuxt to="/donation">Nous soutenir</v-btn>
      <v-btn fab text small>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <nuxt />
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  beforeMount() {
    console.log("dfsd");
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Accueil",
          to: "/"
        },
        {
          icon: "mdi-apps",
          title: "Articles",
          to: "/"
        },
        {
          icon: "mdi-apps",
          title: "Articles",
          to: "/"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire"
        }
      ],
      miniVariant: false,
      right: true,
      title: "Rakitra"
    };
  }
};
</script>
