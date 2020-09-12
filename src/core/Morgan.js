import { Listener } from "@core/Listener";

export class Morgan extends Listener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
  }

  toHTML() {
    return '';
  }

  init() {
    this.initListeners();
  }  

  destroy() {
    this.removeListeners();
  }
}
 