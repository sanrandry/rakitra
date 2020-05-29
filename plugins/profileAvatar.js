import Vue from "vue";
Vue.filter("first_letter", function(value) {
  if (!value) return "";
  value = value.toString();
  return value.charAt(0).toUpperCase();
});
