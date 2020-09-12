import {$} from "@core/Dom";

export function shouldCrud(event) {
    return event.target.dataset.adding || event.target.dataset.remove
}

export function shouldResize(event) {
    return event.target.dataset.resize
}

export function shouldDrag(event) {
    return event.target.dataset.drag | !shouldResize(event)
}

export function shouldSelect(event) {
    return event.target.dataset.type === 'card'
}

export function allReadySelected(event) {
    return event.target.classList.value === 'selected'
}
