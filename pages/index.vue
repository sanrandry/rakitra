<template>
  <div>
    <banner />
    <v-container>
      <description />
    </v-container>
    <v-container>
      <why />
    </v-container>
    <v-container>
      <team />
    </v-container>
  </div>
</template>

<script>
import banner from "@/components/homepage/banner";
import description from "@/components/homepage/description";
import why from "@/components/homepage/why";
import team from "@/components/homepage/team";

export default {
  components: {
    banner,
    description,
    why,
    team
  }
};
</script>
