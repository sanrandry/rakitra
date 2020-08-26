import colors from "vuetify/es5/util/colors";

export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: "%s - " + process.env.npm_package_name,
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      },
      {
        property: "og:url",
        content: "http://rakitra.mg"
      },
      {
        property: "og:type",
        content: "website"
      },
      {
        property: "og:title",
        content: process.env.name || ""
      },
      {
        property: "og:description",
        content: process.env.npm_package_description || ""
      },
      {
        property: "og:image",
        content: "/icon.png"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      // {
      //   rel: "stylesheet",
      //   href:
      //     "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
      // },
      {
        rel: "stylesheet",
        href:
          "https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-bs4.min.css"
      }
    ],
    script: [
      {
        src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
        type: "text/javascript"
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
        type: "text/javascript"
      },
      {
        src:
          "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js",
        type: "text/javascript"
      },
      {
        src:
          "https://cdn.jsdelivr.net/npm/summernote@0.8.18/dist/summernote-bs4.min.js",
        type: "text/javascript"
      },
      {
        src: "/js/summernote/summernote-fr-FR.js",
        type: "text/javascript"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  loadingIndicator: {
    name: "circle",
    color: "#3B8070",
    background: "white"
  },
  /*
   ** Global CSS
   */
  css: ["@/static/css/main.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: "plugins/owl.js", mode: "client" },
    { src: "plugins/underscore.js", mode: "client" },
    { src: "plugins/profileAvatar.js" },
    { src: "plugins/timeFilter.js" },
    { src: "plugins/vue-kindergarten.js" }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    "@nuxtjs/vuetify",
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-132403510-1"
      }
    ]
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    // Doc: https://github.com/nuxt-community/dotenv-module
    "@nuxtjs/dotenv",
    // Doc: https://auth.nuxtjs.org/
    "@nuxtjs/auth"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: "http://localhost:3001/api"
    // baseURL: "http://51.178.83.37:3001/api"
  },

  /**
   * Auth module configuration
   * See https://auth.nuxtjs.org/
   */
  auth: {
    // Options
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "/accounts/login",
            method: "post",
            propertyName: "id"
          },
          logout: { url: "/accounts/logout", method: "post" },
          user: false
        },
        // tokenRequired: true,
        tokenType: "",
        // globalToken: true,
        autoFetchUser: false
      }
    },
    // plugin extension
    plugins: [{ src: "~/plugins/auth.js", mode: "client" }]
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    // icons: {
    //   iconfont: 'mdi', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    // },
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    // Add exception
    transpile: ["vee-validate/dist/rules"],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
