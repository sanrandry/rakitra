<template>
  <div>
    <form>
      <v-stepper v-model="e" vertical>
        <v-stepper-step :complete="e > 1" step="1" editable>Informations générales</v-stepper-step>

        <v-stepper-content step="1">
          <v-row no-gutters>
            <v-col cols="12">
              <v-text-field v-model="post_data.title" filled label="Titre"></v-text-field>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="12">
              <v-text-field v-model="post_data.excerpt" filled label="Description"></v-text-field>
            </v-col>
          </v-row>

          <v-row no-gutters>
            <v-col cols="12">
              <v-select
                v-model="post_data.category"
                filled
                :items="categories"
                item-text="name"
                item-value="id"
                clearable
                label="catégorie"
              ></v-select>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" class="d-flex justify-end">
              <v-btn color="primary" class="text-capitalize" @click="e = 2">Continue</v-btn>

              <v-btn text class="text-capitalize">Annuler</v-btn>
            </v-col>
          </v-row>
        </v-stepper-content>

        <v-stepper-step :complete="e > 2" step="2" editable>Image de courverture</v-stepper-step>

        <v-stepper-content step="2">
          <v-row no-gutters>
            <v-col cols="12">
              <v-file-input
                accept="image/png, image/jpeg, image/bmp"
                placeholder="Image de couverture"
                label="image de couverture"
                filled
                @change="get_image($event)"
                prepend-icon="mdi-camera"
              ></v-file-input>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="4" class="mx-auto">
              <v-img :src="post_data.cover_image"></v-img>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="d-flex justify-end">
              <v-btn color="primary" class="text-capitalize" @click="e = 3">Continue</v-btn>
              <v-btn text class="text-capitalize" @click="e = 1">Retour</v-btn>
            </v-col>
          </v-row>
        </v-stepper-content>

        <v-stepper-step step="3" editable>contenu</v-stepper-step>

        <v-stepper-content step="3">
          <v-row>
            <v-col cols="12">
              <v-textarea v-model="post_data.content" filled label="contenu"></v-textarea>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" class="d-flex justify-end">
              <v-btn :loading="submit_btn_loading" color="success" cal @click="submit()">Publier</v-btn>
              <v-btn text>Annuler</v-btn>
            </v-col>
          </v-row>
        </v-stepper-content>
      </v-stepper>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // steppers etape
      e: 1,
      submit_btn_loading: false,
      categories: [],
      post_data: {
        title: "",
        excerpt: "",
        content: "",
        category: "",
        cover_image: ""
      }
    };
  },
  mounted() {
    this.fetch_categories();
    // verify if we have a post id
    if (this.$route.query.id) {
      this.fetch_post(this.$route.query.id);
    }
  },
  methods: {
    async fetch_categories() {
      try {
        this.categories = await this.$axios.$get("/categories");
      } catch (error) {
        console.log(error.response);
      }
    },
    async fetch_post(id) {
      try {
        let post = await this.$axios.$get(
          "accounts/" + localStorage.getItem("uid") + "/posts/" + id
        );
        console.log(post);
        if (post) {
          // initialize the current post
          this.post_data.title = post.title;
          this.post_data.excerpt = post.excerpt;
          this.post_data.content = post.content;
          // get post cover image
          try {
            let cover_image = await this.$axios.$get(
              "/posts/" + post.id + "/images"
            );
            if (cover_image) {
              this.post_data.cover_image = cover_image.data;
            }
          } catch (error) {}
          // get post categories
          let categories = await this.$axios.$get(
            "/posts/" + post.id + "/categories"
          );
          if (categories && categories.length > 0) {
            this.post_data.category = categories[0].id;
          }
        }
      } catch (error) {
        console.log(error);
      }
    },
    get_image(file) {
      console.log(file);
      if (!file) {
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        this.post_data.cover_image = reader.result;
      };
      reader.readAsDataURL(file);
    },
    submit() {
      if (this.$route.query.id) {
        this.update();
      } else {
        this.publish();
      }
    },
    async publish() {
      this.submit_btn_loading = true;
      try {
        // basic post data
        let post = {
          title: this.post_data.title,
          excerpt: this.post_data.excerpt,
          content: this.post_data.content
        };
        // create the post
        let posted_post = await this.$axios.$post(
          "/accounts/" + this.$auth.user.id + "/posts",
          post
        );
        if (posted_post && this.post_data.category) {
          // add the post to categories
          try {
            await this.$axios.$put(
              "posts/" +
                posted_post.id +
                "/categories/rel/" +
                this.post_data.category
            );
          } catch (error) {
            console.log(error.response);
          }
        }
        if (posted_post && this.post_data.cover_image) {
          // add the post image
          try {
            await this.$axios.$post("/posts/" + posted_post.id + "/images", {
              data: this.post_data.cover_image
            });
          } catch (error) {
            console.log(error.response);
          }
        }
        this.submit_btn_loading = false;
        this.$router.push({ path: "/profil" });
      } catch (error) {
        console.log(error);
        this.submit_btn_loading = false;
      }
    },
    async update() {
      this.submit_btn_loading = true;
      try {
        // post varible
        let post = {
          title: this.post_data.title,
          excerpt: this.post_data.excerpt,
          content: this.post_data.content
        };
        // update the post
        const updated_post = await this.$axios.$put(
          "/accounts/" +
            localStorage.getItem("uid") +
            "/posts/" +
            this.$route.query.id,
          post
        );
        // update post image
        if (this.post_data.cover_image) {
          try {
            await this.$axios.$put("posts/" + updated_post.id + "/images/", {
              data: this.post_data.cover_image
            });
          } catch (error) {
            // if the related image does not exist
            if ((error.response.data.error.statusCode = 500)) {
              // post the image
              await this.$axios.$post("posts/" + updated_post.id + "/images/", {
                data: this.post_data.cover_image
              });
            }
          }
        }
        // update post catetegory
        // check if the current post is already has this category
        const old_post_category = await this.$axios.$get(
          "posts/" + updated_post.id + "/categories"
        );
        // if there is an old category
        if (old_post_category && old_post_category.length > 0) {
          // verify if we have a category on the post data
          if (this.post_data.category) {
            // delete the old relation
            await this.$axios.$delete(
              "/posts/" +
                updated_post.id +
                "/categories/rel/" +
                old_post_category[0].id
            );
            // create a new relation
            await this.$axios.$put(
              "/posts/" +
                updated_post.id +
                "/categories/rel/" +
                this.post_data.category
            );
          } else {
            // delete the post related category
            await this.$axios.$delete(
              "/posts/" +
                updated_post.id +
                "/categories/rel/" +
                old_post_category[0].id
            );
          }
        } else {
          // no old category
          if (this.post_data.category) {
            // add relation to category
            await this.$axios.$put(
              "/posts/" +
                updated_post.id +
                "/categories/rel/" +
                this.post_data.category
            );
          }
        }
        this.submit_btn_loading = false;
        this.$router.push({ name: "profil" });
      } catch (error) {
        this.submit_btn_loading = false;
        console.log(error);
      }
    }
  }
};
</script>

<style>
</style>
