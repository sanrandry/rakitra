/**
 * vue kindergarten documentation here: https://github.com/JiriChara/vue-kindergarten
 */
import Vue from 'vue';
import VueKindergarten from 'vue-kindergarten';

import child from '~/child';

Vue.use(VueKindergarten, {
  child: child,
});
