import {Morgan} from '@core/morgan'
import {addBoard, createBoard, createBoardTemplate} from "@/components/boards/Boards.template";
import {$} from "@core/Dom";


// import { createRecordBoards } from './boards.func';

export class Boards extends Morgan {
    static className = "morgan__boards";
    newId = Date.now().toString();
    data = [
        {
            name: 'first board',
            id: Date.now().toString()
        },
        {
            name: 'not first board',
            id: Date.now().toString()
        }
    ]

    constructor($root) {
        super($root, {
            name: "Boards",
            listeners: ['click']
        });
    }

    toHTML() {
        return createBoardTemplate(this.data)
    }


    onClick(event) {
        const $button = $(event.target)
        const $parent = $button.closest('[data-type="container"]')
        if (event.target.dataset.adding === 'board') {
            let testBoard = {
                name: 'new board',
                id: '23232323'
            }
            this.data.push(testBoard)
            console.log('board adding')
            $button.clear()
            $parent.html(createBoard(this.data))
            $parent.append($button.text('Add Board'))

        } else if (event.target.dataset.open === 'board') {
            window.location.href = `#morgan/${this.newId}`
        }
    }
}

// TODO Resize for board with bigger info
