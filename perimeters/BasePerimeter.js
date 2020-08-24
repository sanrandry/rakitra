/**
 * read this medium article: https://github.com/JiriChara/vue-kindergarten
 */
import {Perimeter} from 'vue-kindergarten';

export default class BasePerimeter extends Perimeter {
  /**
   * verify if the user has the admin role
   */
  isAdmin() {
    let returnValue= false;
    if(!this.child) {
      return returnValue;
    }
    if(this.child.roles) {
      this.child.roles.forEach(element => {
        if(element.name == 'admin') {
          returnValue = true;
        }
      });
    }
    return returnValue;
  }
}
