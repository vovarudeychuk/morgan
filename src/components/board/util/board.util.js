import {$} from "@core/Dom";
import {createCard, createList} from "@/components/board/board.template";

export function resizeHandler(event) {
    const $resizer = $(event.target)
    const $parent = $resizer.closest('[data-type="resizable"]')
    const coords = $parent.getCoords()
    let val;

    $resizer.css({
        opacity: 1,
    })

    document.onmousemove = e => {
        const delta = e.pageX - coords.right
        const gamma = $resizer.getCoords().x - $parent.getCoords().x
        val = coords.width + delta

        if (gamma <= 220) {
            $resizer.css({
                borderRight: 3 + 'px dashed rgba(255,159,159,0.7)',
                cursor: 'no-drop !important'
            })
            $parent.css({
                backgroundColor: 'rgba(255,159,159,0.7)',
            })
        } else {
            $resizer.css({
                borderRight: 2 + 'px dashed #f5c460',
            })
            $parent.css({
                backgroundColor: 'rgba(255, 255, 255, 0.7)',
            })
        }

        $resizer.css({
            right: -delta + 'px',
        })
    }
    document.onmouseup = () => {
        document.onmousemove = null
        document.onmouseup = null

        $parent.css({
            width: val + 'px',
            border: 'none',
            backgroundColor: '#e2e4e6'
        })

        $resizer.css({
            opacity: 0,
            right: 0
        })
    }
}

export function crudElements(event, data) {
    const $button = $(event.target)
    const $parent = $button.closest('[data-type="container"]')
    const $child = $button.closest('[data-type="resizable"]')

    if (event.target.dataset.adding === 'list') {
        data.push(
            {
                title: 'Task new22323',
                id: Date.now().toString(),
                cards: []
            }
        )
        $button.clear()
        $parent.html(createList(data))
        $parent.append($button.text('Add a list'))
        $child.focus()

    } else if (event.target.dataset.remove) {
        $child.$el.remove()
        data.splice(data.findIndex(function (i) {
            return i.id === event.target.dataset.remove;
        }), 1);

    } else if (event.target.dataset.adding === 'card') {
        const card = {text: 'super card ', id: Math.random().toFixed()};
        for (let i = 0; i < data.length; i++) {
            data[i].cards.push(card)
            $child.find('.list-items').html(createCard(data[i].cards))
        }
    }
    return data
}
