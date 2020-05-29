<template>
  <nav>
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
      <v-menu offset-y transition="slide-y-transition">
        <template v-slot:activator="{on}">
          <v-btn v-on="on" text class="text-capitalize font-weight-light">Catalogue</v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title>Taloha</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Biographie</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Publication scientifique</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Documentation</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn text class="text-capitalize font-weight-light" nuxt to="/donation">Nous soutenir</v-btn>
      <v-btn
        v-if="!$auth.loggedIn"
        text
        class="text-capitalize font-weight-light"
        nuxt
        to="/login"
      >Login</v-btn>
      <v-menu v-if="$auth.loggedIn" offset-y>
        <template v-slot:activator="{on}">
          <!-- <v-btn fab text small v-on="on"> -->
          <v-avatar v-on="on" style="cursor: pointer" color="deep-purple darken-2" size="32">
            <span class="white--text subtitle-2">{{$auth.user.name | first_letter}}</span>
          </v-avatar>
          <!-- </v-btn> -->
        </template>
        <v-list>
          <v-list-item nuxt to="/profil">
            <v-list-item-content>
              <v-list-item-title>Profil</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="logout()">
            <v-list-item-content>
              <v-list-item-title>Se déconnecter</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: true,
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
  },
  methods: {
    logout() {
      localStorage.removeItem("uid");
      this.$auth.logout();
    }
  }
};
</script>

<style>
</style>
