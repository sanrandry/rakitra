import Vue from "vue";

import moment from "moment";
moment.locale("fr");
Vue.filter("relativeDate", function(value) {
  return moment(value, "YYYYMMDD").fromNow();
});
