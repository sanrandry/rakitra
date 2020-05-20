<template>
  <div>
    <form>
      <v-text-field filled label="Titre"></v-text-field>
      <v-text-field filled label="Extrait"></v-text-field>
      <v-file-input
        accept="image/png, image/jpeg, image/bmp"
        placeholder="Image de couverture"
        label="image de couverture"
        filled
        prepend-icon="mdi-camera"
      ></v-file-input>
      <v-select v-model="category" filled :items="categories" clearable label="catégorie"></v-select>
      <v-textarea filled label="contenu"></v-textarea>
    </form>
    {{category}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      category: "",
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
      ]
    };
  }
};
</script>

<style>
</style>
