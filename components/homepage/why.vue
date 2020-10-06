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
          <div class="headline font-weight-light text-center text-md-lef mb-5">
            Pourquoi RAKITRA ?
          </div>
          <p class="body-2 text-justify">
            L'instantanéité des informations marque l'ère numérique du 21è
            siècle à partir des années 1980, le début de l'ère numérique. A
            Madagascar, certains secteurs, si on ne cite que le transport et le
            tourisme, n’ont pas manqué ce tournant vers l'informatisation pour
            un accès immédiat aux informations. Par contre, dans bien d'autres
            secteurs, des lacunes d'informations en temps réel se font encore
            sentir vu l'utilisation des supports classiques ne résistant pas à
            l'usure. Le désir suscité par une innovation dans la sauvegarde des
            héritages historiques et des faits contemporains du pays constitue
            la motivation d'Alain Santatriniaina AMBININTSOA dans la mise en
            place de RAKITRA. L'objectif est de transmettre, aux générations
            actuelles et celles à venir, les identités socio-culturelles des
            groupes ethniques de Madagascar à travers les NTIC.
          </p>
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

<style></style>
