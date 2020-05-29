<template>
  <v-lazy group transition="fade-transition">
    <div v-if="!post">loading...</div>
    <v-hover v-if="post">
      <template v-slot:default="{hover}">
        <v-card @click="read(post.id)" flat class="mx-2 my-2">
          <v-list-item>
            <v-list-item-avatar color="grey"></v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class>{{post.account.name}}</v-list-item-title>
              <v-list-item-subtitle>1 h</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-img
            class="white--text align-end"
            height="200px"
            :lazy-src="require('@/assets/images/logo/rakitra_logo.png')"
            :src="post.images ? post.images.data : require('@/assets/images/logo/rakitra_logo.png')"
          >
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="red lighten-5"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          <v-card-title>{{post.title}}</v-card-title>

          <v-card-text class="text--primary">
            <div>{{post.excerpt}}</div>
          </v-card-text>

          <!-- <v-card-actions>
            <v-btn color="orange" text>Share</v-btn>

            <v-btn color="orange" text>Explore</v-btn>
          </v-card-actions>-->
          <v-fade-transition>
            <v-overlay @click="read(post.id)" v-if="hover" absolute color="white">
              <v-btn color="success">Lire</v-btn>
            </v-overlay>
          </v-fade-transition>
        </v-card>
      </template>
    </v-hover>
  </v-lazy>
</template>

<script>
export default {
  props: {
    post_id: {
      type: String,
      required: true
    }
  },
  data: () => {
    return {
      post: null
    };
  },
  mounted() {
    if (!this.post_id) {
      return;
    }
    this.fetch_post();
  },
  methods: {
    async fetch_post() {
      try {
        const filter = {
          include: [
            {
              relation: "account"
            },
            {
              relation: "images"
            }
          ]
        };
        this.post = await this.$axios.$get(
          "/posts/" +
            this.post_id +
            "?filter=" +
            encodeURI(JSON.stringify(filter))
        );
        console.log(this.post);
      } catch (error) {
        console.log(error.respose);
      }
    },
    read(post_id) {
      this.$router.push({ name: "publications-id", params: { id: post_id } });
    }
  }
};
</script>

<style>
</style>
