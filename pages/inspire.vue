<template>
  <v-layout>
    <v-flex class="text-center">
      <v-btn color="success" @click="sheet = true">open sheat</v-btn>
      <v-bottom-sheet v-model="sheet">
        <v-sheet class="text-center" height="250px">
          <v-btn color="success" @click="sheet = false">close</v-btn>
          <login />
        </v-sheet>
      </v-bottom-sheet>
    </v-flex>
  </v-layout>
</template>

<script>
import login from "@/components/common/auth/login";
export default {
  components: {
    login: login
  },
  data() {
    return {
      sheet: false
    };
  }
};
</script>
