<template>
  <div>
    <v-container>
      <v-row>
        <v-col v-for="item in books" :key="item.title" cols="12" md="6">
          <book-card :title="item.title" :image="item.image" :file="item.file"></book-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import bookCard from "@/components/common/bookCard";
export default {
  data() {
    return {
      books: [
        {
          title: "Taloha 1",
          image: require("@/assets/images/book_cover/taloha1.png"),
          file: "/pdf/taloha01.pdf"
        },
        {
          title: "Taloha 3",
          image: require("@/assets/images/book_cover/taloha3.png"),
          file: "/pdf/taloha03.pdf"
        },
        {
          title: "Taloha 4",
          image: require("@/assets/images/book_cover/taloha4.png"),
          file: "/pdf/taloha04.pdf"
        },
        {
          title: "Taloha 5",
          image: require("@/assets/images/book_cover/taloha5.png"),
          file: "/pdf/taloha05.pdf"
        },
        {
          title: "Taloha 6",
          image: require("@/assets/images/book_cover/taloha6.png"),
          file: "/pdf/taloha06.pdf"
        },
        {
          title: "Taloha 7",
          image: require("@/assets/images/book_cover/taloha7.png"),
          file: "/pdf/taloha07.pdf"
        },
        {
          title: "Taloha 8",
          image: require("@/assets/images/book_cover/taloha8.png"),
          file: "/pdf/taloha08.pdf"
        },
        {
          title: "Taloha 9",
          image: require("@/assets/images/book_cover/taloha9.png"),
          file: "/pdf/taloha09.pdf"
        },
        {
          title: "Taloha 10",
          image: require("@/assets/images/book_cover/taloha10.png"),
          file: "/pdf/taloha10.pdf"
        },
        {
          title: "Taloha 11",
          image: require("@/assets/images/book_cover/taloha11.png"),
          file: "/pdf/taloha11.pdf"
        },
        {
          title: "Taloha 12",
          image: require("@/assets/images/book_cover/taloha12.png"),
          file: "/pdf/taloha12.pdf"
        }
      ]
    };
  },
  components: {
    "book-card": bookCard
  }
};
</script>

<style>
</style>
