/**
 * read the vue kindergarten documentation here: https://github.com/JiriChara/vue-kindergarten
 */

import BasePerimeter from "./BasePerimeter";

 export default new BasePerimeter({
   purpose: 'userPerimeter',
   govern: {
     'can read': function() {
       return this.isAdmin();
     }
   }
 })
