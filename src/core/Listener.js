import { capitalize } from '@core/util'

export class Listener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error(`No $root provided for Listener`)
    }
    this.$root = $root
    this.listeners = listeners
  }

  initListeners() {
    this.listeners.forEach(listener => {
      const method = getMethodName(listener)
      if (!this[method]) {
        const name = this.name || ''
        throw new Error(
            `Method ${method} is not implemented in ${name} Component`
        )
      }
      this[method] = this[method].bind(this)
      // Тоже самое что и addEventListener
      this.$root.on(listener, this[method])
    })
  }

  removeListeners() {
    this.listeners.forEach(listener => {
      const method = getMethodName(listener)
      this.$root.off(listener, this[method])
    })
  }
}

function getMethodName(eventName){
  return 'on' + capitalize(eventName)
}
