import {$} from "@core/Dom";

export class Component {
    constructor(options) {
        this.components = options.components || []
    }

    getRoot() {
        const $root = $.create('div', 'morgan')

        this.components = this.components.map(Component => {
            const $el = $.create('div', Component.className)
            const component = new Component($el)

            // DEBUG
            // if (component.name) {
            //     window['n' + component.name] = component
            // }
            $el.html(component.toHTML())
            $root.append($el)
            return component
        })

        return $root
    }

    init() {
        this.components.forEach(component => component.init())
    }

    destroy() {
        this.components.forEach(component => component.destroy())
    }
}
