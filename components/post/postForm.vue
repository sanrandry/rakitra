<template>
  <div>
    <validation-observer ref="post_form_validation" v-slot="{invalid}">
      <form id="post_form">
        <v-card color="grey lighten-4" flat height="100vh">
          <v-toolbar class="elevation-0">
            <v-toolbar-title
              @click="$router.push('/')"
              style="cursor: pointer;"
              class="hidden-sm-and-down"
            >
              <v-img :src="require('@/assets/images/logo/rakitra_logo.png')" width="112"></v-img>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text nuxt :to="{name: 'profil'}" class="mr-2 text-capitalize">Annuler</v-btn>
            <v-btn
              :loading="submit_btn_loading"
              color="success"
              :disabled="invalid"
              @click="submit()"
              class="text-capitalize"
            >Publier</v-btn>
          </v-toolbar>
          <v-card-text>
            <v-row>
              <v-col cols="9">
                <v-row>
                  <v-col cols="12">
                    <textarea id="summernote" v-model="post_data.content"></textarea>
                  </v-col>
                </v-row>
              </v-col>
              <!-- right section -->
              <v-col cols="3">
                <v-row>
                  <v-col cols="12">
                    <validation-observer>
                      <v-row no-gutters>
                        <v-col cols="12">
                          <validation-provider name="titre" rules="required" v-slot="{errors}">
                            <v-text-field
                              color="rgba(0, 0, 0, 0.54)"
                              v-model="post_data.title"
                              filled
                              label="Titre"
                              :error-messages="errors"
                            ></v-text-field>
                          </validation-provider>
                        </v-col>
                      </v-row>
                      <v-row no-gutters>
                        <v-col cols="12">
                          <validation-provider
                            name="description"
                            rules="required"
                            v-slot="{errors}"
                          >
                            <v-text-field
                              color="rgba(0, 0, 0, 0.54)"
                              :error-messages="errors"
                              v-model="post_data.excerpt"
                              filled
                              label="Description"
                            ></v-text-field>
                          </validation-provider>
                        </v-col>
                      </v-row>

                      <v-row no-gutters>
                        <v-col cols="12">
                          <v-select
                            color="rgba(0, 0, 0, 0.54)"
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
                    </validation-observer>

                    <!-- image section -->
                    <v-row no-gutters>
                      <v-col cols="12">
                        <v-file-input
                          color="rgba(0, 0, 0, 0.54)"
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
                      <v-col cols="12" class="mx-auto">
                        <v-img :src="post_data.cover_image"></v-img>
                      </v-col>
                    </v-row>
                    <!-- /image section -->
                  </v-col>
                </v-row>
              </v-col>
              <!-- /right section -->
            </v-row>
          </v-card-text>
        </v-card>
      </form>
    </validation-observer>
  </div>
</template>

<script>
import {
  ValidationProvider,
  extend,
  localize,
  ValidationObserver,
} from "vee-validate";
import { required } from "vee-validate/dist/rules";
import fr from "vee-validate/dist/locale/fr.json";
// form validation
localize("fr", fr);
extend("required", {
  ...required,
});
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
        cover_image: "",
      },
    };
  },
  computed: {},
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  mounted() {
    this.initialize_summernote();
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
          // modify the summernote code
          this.set_editor_code(post.content);
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
    initialize_summernote() {
      let summernote_config = {
        placeholder: "écrivez ici...",
        //airMode: true,
        height: "100vh",
        lang: "fr-FR",
        toolbar: [
          ["style", ["style"]],
          ["font", ["bold", "underline", "clear"]],
          ["fontname", ["fontname"]],
          ["color", ["color"]],
          ["para", ["ul", "ol", "paragraph"]],
          ["table", ["table"]],
          ["insert", ["link", "picture", "video"]],
          // ["view", ["fullscreen", "codeview", "help"]]
        ],
        popover: {
          image: [
            [
              "image",
              ["resizeFull", "resizeHalf", "resizeQuarter", "resizeNone"],
            ],
            ["float", ["floatLeft", "floatRight", "floatNone"]],
            ["remove", ["removeMedia"]],
          ],
          link: [["link", ["linkDialogShow", "unlink"]]],
          table: [
            ["add", ["addRowDown", "addRowUp", "addColLeft", "addColRight"]],
            ["delete", ["deleteRow", "deleteCol", "deleteTable"]],
          ],
          air: [
            ["style", ["style"]],
            ["color", ["color"]],
            ["font", ["bold", "underline", "clear"]],
            ["para", ["ul", "paragraph"]],
            ["table", ["table"]],
            ["insert", ["link", "picture"]],
          ],
        },
        dialogsFade: true, // Add fade effect on dialogs
      };
      $("#summernote").summernote(summernote_config);
    },
    set_editor_code(code) {
      $("#summernote").summernote("code", code);
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
    // steppers logic and validation
    go_to_step(step) {
      this.e = step;
    },
    // post data validation
    async validate() {
      // verify ify the summernote is empty
      // <p><br></p> is the summernote default empty value
      if ($("#summernote").summernote("code") != "<p><br></p>") {
        // vee-ledate validation
        let is_form_valid = await this.$refs.post_form_validation.validate();
        if (is_form_valid) {
          return true;
        } else {
          return false;
        }
      }
      return false;
    },
    // submition handler
    async submit() {
      // last form validation
      if (!(await this.validate())) {
        this.$store.dispatch("snack/show", {
          text: "veuillez remplir le formulaire",
        });
        return;
      }
      // if it is valid
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
          content: $("#summernote").summernote("code"),
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
              data: this.post_data.cover_image,
            });
          } catch (error) {
            console.log(error.response);
          }
        }
        this.submit_btn_loading = false;
        this.$store.dispatch("snack/show", { text: "publication avec succès" });
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
          content: $("#summernote").summernote("code"),
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
              data: this.post_data.cover_image,
            });
          } catch (error) {
            // if the related image does not exist
            if ((error.response.data.error.statusCode = 500)) {
              // post the image
              await this.$axios.$post("posts/" + updated_post.id + "/images/", {
                data: this.post_data.cover_image,
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
        this.$store.dispatch("snack/show", { text: "mis à jour avec succès" });
        this.$router.push({ name: "profil" });
      } catch (error) {
        this.submit_btn_loading = false;
        console.log(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css");
</style>
