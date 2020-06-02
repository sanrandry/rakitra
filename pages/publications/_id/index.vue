<template>
  <v-lazy group transition="fade-transition">
    <circular-loading v-if="!post"></circular-loading>
    <div v-if="post">
      <v-container>
        <v-row>
          <v-col cols="12" md="9" class="mx-auto">
            <!-- post title -->
            <v-row>
              <v-col cols="12">
                <div class="title">{{post.title}}</div>
              </v-col>
            </v-row>
            <!-- / post title -->

            <!-- post author -->
            <v-row>
              <v-col cols="12" class="mx-auto">
                <v-list three-line>
                  <v-list-item>
                    <v-list-item-avatar size="100">
                      <v-avatar size="100" color="deep-purple darken-2">
                        <span class="white--text display-1">{{post.account.name | first_letter}}</span>
                      </v-avatar>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title>{{post.account.name}}</v-list-item-title>
                      <v-list-item-subtitle>il y a</v-list-item-subtitle>
                    </v-list-item-content>

                    <v-list-item-action>
                      <div>
                        <!-- the future share will be there -->
                        <!-- <v-btn color="success" large depressed to="/profil/editor" nuxt>
                    <v-icon left>mdi-pencil</v-icon>nouvelle publication
                        </v-btn>-->
                        <v-btn
                          color="success"
                          v-if="$auth.loggedIn && post.accountId == $auth.user.id"
                          text
                          depressed
                          small
                          :to="'/profil/editor?id=' + post.id"
                          nuxt
                        >
                          <v-icon left>mdi-pencil</v-icon>modifier
                        </v-btn>
                        <v-btn
                          v-if="$auth.loggedIn && post.accountId == $auth.user.id"
                          color="warning"
                          small
                          text
                          depressed
                          @click="delete_post($route.params.id)"
                          nuxt
                        >
                          <v-icon left>mdi-trash</v-icon>supprimer
                        </v-btn>
                      </div>
                    </v-list-item-action>
                  </v-list-item>
                </v-list>
              </v-col>
            </v-row>
            <!-- / post author -->
            <!-- post excerpt -->
            <div>
              <p>{{post.excerpt}}</p>
            </div>
            <!-- / post excerpt -->

            <!-- post images -->
            <v-row v-if="post.images">
              <v-col cols="12">
                <v-img :src="post.images.data"></v-img>
              </v-col>
            </v-row>
            <!-- / post images -->

            <!-- post content -->
            <v-row>
              <v-col cols="12">
                <div v-html="post.content"></div>
              </v-col>
            </v-row>
            <!-- / post content -->
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-lazy>
</template>

<script>
import circularLoading from "@/components/common/circularLoading";
export default {
  data: () => {
    return {
      post: ""
    };
  },
  components: {
    "circular-loading": circularLoading
  },
  mounted() {
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
            this.$route.params.id +
            "?filter=" +
            encodeURI(JSON.stringify(filter))
        );
        console.log(this.post);
      } catch (error) {
        console.log(error);
      }
    },
    async delete_post(post_id) {
      if (!confirm("supprimer")) {
        return;
      }
      try {
        // delete post image
        if (this.post.images) {
          try {
            await this.$axios.$delete("/posts/" + post_id + "/images");
          } catch (error) {
            console.log("eto");
          }
        }
        // unlink categories
        const post_categories = await this.$axios.$get(
          "/posts/" + post_id + "/categories"
        );
        if (post_categories && post_categories.length > 0) {
          post_categories.forEach(async element => {
            await this.$axios.$delete(
              "/posts/" + post_id + "/categories/rel/" + element.id
            );
          });
        }
        // delete post
        await this.$axios.$delete("/posts/" + post_id);
        this.$router.push({ name: "profil" });
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style>
</style>
