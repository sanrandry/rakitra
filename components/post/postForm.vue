<template>
  <div>
    <form>
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
          <v-file-input
            accept="image/png, image/jpeg, image/bmp"
            placeholder="Image de couverture"
            label="image de couverture"
            filled
            prepend-icon="mdi-camera"
          ></v-file-input>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col cols="12">
          <v-select
            v-model="post_data.category"
            filled
            :items="categories"
            clearable
            label="catégorie"
          ></v-select>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <v-textarea v-model="post_data.content" filled label="contenu"></v-textarea>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" class="d-flex flex-row-reverse">
          <v-btn :loading="submit_btn_loading" color="success" @click="publish()">Publier</v-btn>
        </v-col>
      </v-row>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      submit_btn_loading: false,
      categories: [
        {
          text: "cat 1",
          value: "cat1"
        },
        {
          text: "cat 2",
          value: "cat2"
        },
        {
          text: "cat 3",
          value: "cat3"
        },
        {
          text: "cat 4",
          value: "cat4"
        }
      ],
      post_data: {
        title: "",
        excerpt: "",
        content: "",
        category: ""
      }
    };
  },
  methods: {
    async publish() {
      this.submit_btn_loading = true;
      try {
        let post = {
          title: this.post_data.title,
          excerpt: this.post_data.excerpt,
          content: this.post_data.content
        };
        await this.$axios.$post(
          "/accounts/" + this.$auth.user.id + "/posts",
          post
        );
        this.submit_btn_loading = false;
        this.$router.push({ path: "/profil" });
      } catch (error) {
        console.log(error.response);
        this.submit_btn_loading = false;
      }
    }
  }
};
</script>

<style>
</style>
