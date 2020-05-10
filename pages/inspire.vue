<template>
  <div>
    <v-layout>
      <v-flex class="text-center">
        <v-btn color="success" @click="sheet = true">open sheat</v-btn>
        <v-dialog fullscreen v-model="sheet">
          <div>
            <v-btn color="success" @click="sheet = false">close</v-btn>
            <login />
          </div>
        </v-dialog>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import login from "@/components/common/auth/login";
export default {
  components: {
    login: login
  },
  data() {
    return {
      panel: [0, 1],
      sheet: false
    };
  }
};
</script>
