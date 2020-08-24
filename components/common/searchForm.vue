<template>
  <div id="search_container">
    <input
      id="search_input"
      type="text"
      v-bind="$attrs"
      v-bind:value="value"
      title="search"
      :style="{height: height}"
      v-on:key="test($event)"
      v-on="inputListeners"
    />
    <v-btn text icon style="margin: auto" :height="height" @click="icon_click()">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </div>
</template>

<script>
/**
 * usage:
 * <search-form v-model="value" @click:append=""></search-form>
 */
export default {
  props: {
    height: {
      type: String,
      default: "45px",
    },
    value: "",
  },
  methods: {
    icon_click() {
      this.$emit("click:append");
    },
  },
  computed: {
    inputListeners: function () {
      var vm = this;
      // `Object.assign` merges objects together to form a new object
      return Object.assign(
        {},
        // We add all the listeners from the parent
        this.$listeners,
        // Then we can add custom listeners or override the
        // behavior of some listeners.
        {
          // This ensures that the component works with v-model
          input: function (event) {
            vm.$emit("input", event.target.value);
          },
        }
      );
    },
  },
};
</script>

<style lang="scss">
#search_container {
  display: flex;
  align-items: center;
  padding: 0px 20px 0px 20px;
  margin: 0 auto;
  width: 100%;
  border-radius: 30px;
  background-color: white;
  border: 1px solid #dcdcdc;
  &:hover {
    box-shadow: 1px 1px 8px 1px #dcdcdc;
  }
  &:focus-within {
    box-shadow: 1px 1px 8px 1px #dcdcdc;
    outline: none;
  }
}
#search_input {
  border: none;
  flex-grow: 1;
  font-size: 16px;
  outline: none;
}
</style>
