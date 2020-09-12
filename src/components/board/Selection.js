export class CardSelection {
    static className = 'selected'

    constructor() {
        this.group = []
        this.current = null
    }

    select($el) {
        this.unSelect()
        $el.addClass(CardSelection.className)
        this.group.push($el)
        this.current = $el
    }

    selectGroup($el) {
        $el.addClass(CardSelection.className)
        this.group.push($el)
    }

    unSelect() {
        this.group.forEach($el => $el.removeClass(CardSelection.className))
        this.group = []
    }
}
