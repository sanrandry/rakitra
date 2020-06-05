<template>
  <v-snackbar v-model="show" :right="$store.state.snack.x === 'right'">
    {{ text }}
    <v-btn color="pink" @click="$store.commit('snack/disable')" text>Fermer</v-btn>
  </v-snackbar>
</template>

<script>
export default {
  computed: {
    show: {
      get: function() {
        return this.$store.state.snack.show;
      },
      set: function() {
        this.$store.commit("snack/disable");
      }
    },
    text() {
      return this.$store.state.snack.text;
    }
  }
};
</script>

<style>
</style>
