import {Morgan} from "@core/Morgan";
import {$} from "@core/Dom";
import {createTemplate} from "@/components/board/board.template";
import {drugAndDrop} from '@/components/board/util/drag.util'
import {crudElements,resizeHandler} from "@/components/board/util/board.util";
import {
    shouldCrud,
    shouldDrag,
    shouldResize,
    shouldSelect
} from "@/components/board/board.func";
import {CardSelection} from "@/components/board/Selection";

export class Board extends Morgan {
    static className = "morgan__board";
    data = [
        {
            title: 'To do',
            id: 2345656562233,
            cards: [
                {
                    id: 12342,
                    text: 'Some new card 1'
                },
                {
                    id: 35443,
                    text: 'Some new card 3'
                },
                {
                    id: 46556,
                    text: 'Some new card 4'
                },
                {
                    id: 56767,
                    text: 'Some new card 5'
                }
            ]
        },
        {
            title: 'In Progress',
            id: 256454234234234,
            cards: [
                {
                    id: 121121,
                    text: 'Socdsdcscme new card 1 Socdsdcscme new card 1 Socdsdcscme new card 1'
                },

                {
                    id: 232343,
                    text: 'Some nescsdcsdcw carscdsdcsdcd 3'
                },
                {
                    id: 45454,
                    text: 'Some new casdcsdcsdcrd 4'
                },
                {
                    id: 556566,
                    text: 'Some new carsdcsdcsdcsdcdscd 5'
                }
            ]
        },
        {
            title: 'Finish',
            id: 23404930234234234,
            cards: [
                {
                    id: 6767671,
                    text: 'Socdsdcscme new card 1 Socdsdcscme new card 1 Socdsdcscme new card 1'
                },

                {
                    id: 787873,
                    text: 'Some nescsdcsdcw carscdsdcsdcd 3'
                },
                {
                    id: 8989984,
                    text: 'Some new casdcsdcsdcrd 4'
                },
                {
                    id: 122165,
                    text: 'Some new carsdcsdcsdcsdcdscd 5'
                }
            ]
        }

    ]

    constructor($root) {
        super($root, {
            name: 'Board',
            listeners: ['mousedown', 'click', 'dragstart']
        })
    }

    initListeners() {
        super.initListeners();
        this.selection = new CardSelection()
    }

    toHTML() {
        return createTemplate(this.data)
    }

    onMousedown(event) {
        if (shouldResize(event)) {
            resizeHandler(event)
        } else if (shouldSelect(event)) {
            const $el = $(event.target)
            if(event.shiftKey) {
                this.selection.selectGroup($el)
            } else {
                this.selection.select($el)
            }
        } else {
            const $el = $(event.target)
            this.selection.unSelect($el)
        }
    }

    onClick(event) {
        if(shouldCrud(event)) {
            // TODO data worker line 8
            this.data = crudElements(event, this.data)
        }
    }

    onDragstart(event) {
        if(shouldDrag(event)) {
            drugAndDrop(event)
        }
    }
}
