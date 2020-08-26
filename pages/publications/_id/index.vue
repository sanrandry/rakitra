<template>
  <v-lazy group transition="fade-transition">
    <circular-loading v-if="!post"></circular-loading>
    <div v-if="post">
      <v-container>
        <v-row>
          <v-col cols="12" md="9" class="mx-auto">
            <!-- post author -->
            <v-row justify="end">
              <div class="d-inline">
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
            </v-row>
            <!-- / post author -->
            <!-- post title -->
            <v-row>
              <v-col cols="12">
                <div class="title">{{ post.title }}</div>
              </v-col>
            </v-row>
            <!-- / post title -->

            <!-- post excerpt -->
            <div>
              <p>{{ post.excerpt }}</p>
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
                <div v-html="post.content" id="post_content"></div>
              </v-col>
            </v-row>
            <!-- / post content -->

            <!-- post author -->
            <v-row justify="end">
              <div class="d-inline caption">
                publié par
                <span>{{ post.account.name }}</span>
                <br />
                <span>{{ post.updated_at | relativeDate }}</span>
              </div>
            </v-row>
            <!-- / post author -->
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-lazy>
</template>

<script>
import circularLoading from "@/components/common/circularLoading";
export default {
  head: function () {
    return {
      title: "publications | rakitra",
    };
  },
  data: () => {
    return {
      loading: false,
      post: "",
    };
  },
  components: {
    "circular-loading": circularLoading,
  },
  mounted() {
    this.fetch_post();
  },
  methods: {
    async fetch_post() {
      try {
        this.loading = true;
        const filter = {
          include: [
            {
              relation: "account",
            },
            {
              relation: "images",
            },
          ],
        };
        this.post = await this.$axios.$get(
          "/posts/" +
            this.$route.params.id +
            "?filter=" +
            encodeURI(JSON.stringify(filter))
        );
        this.loading = false;
        console.log(this.post);
      } catch (error) {
        this.loading = false;
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
          post_categories.forEach(async (element) => {
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
    },
  },
};
</script>

<style lang="scss">
#post_content {
  img {
    max-width: 100%;
  }
}
</style>
