<template>
  <v-lazy transition="fade-transition">
    <div>
      <v-row>
        <v-col md="4">
          <v-img
            class="white--text align-end"
            height="200px"
            contain
            :lazy-src="require('@/assets/images/logo/rakitra_logo.png')"
            :src="require('@/assets/images/homepage/illustrationCut.jpg')"
          >
            <template v-slot:placeholder>
              <v-img-lazy-loading></v-img-lazy-loading>
            </template>
          </v-img>
        </v-col>
        <v-col md="8">
          <div class="headline font-weight-light">Pourquoi RAKITRA ?</div>
          <p
            class="body-2 text-justify"
          >L’ère numérique se caractérise par l'instantanéité des informations et à Madagascar presque tous les secteurs se lancent dans des projets d'informatisation afin de faciliter l'accès du grand public à ces informations. L'on peut citer le transport, le tourisme, etc,... si des lacunes se font sentir dans le domaine de l'Histoire. En effet, pour se documenter sur les écrits historiques, Chercheurs, étudiants ont recours à des supports classiques qui ne résistent pas à l'usure du temps contrairement aux informations qu'elles contiennent. Par ailleurs la quête d'information va de pair avec sa disponibilité. En réponse à ces problèmes, Alain Santatriniaina AMBININTSOA a mis en place RAKITRA, qui n'est pas seulement une bibliothèque virtuelle mais aussi une plateforme d'échange, un outil éducation et d’information. Ce projet, dépourvu de tout intérêt économique est soutenue par le désir de transmettre notre héritage historique et identités culturelles aux présentes et futures générations tout en saisissant l'opportunité offerte par les nouvelles technologies.</p>
        </v-col>
      </v-row>
    </div>
  </v-lazy>
</template>

<script>
import vImgLazyLoading from "@/components/common/vImgLazyLoading";
export default {
  components: {
    "v-img-lazy-loading": vImgLazyLoading
  }
};
</script>

<style>
</style>
