import {$} from "@core/Dom";

export function drugAndDrop() {
    document.ondragstart = e => {
        dragStart(e)
    }
    document.ondragenter = e => {
        dragEnter(e)
    }
    document.ondrop = e => {
        dragDrop(e)
    }
    document.ondragover = e => {
        dragOver(e)
    }
    document.ondragend = e => {
        $(e.target).css({
            boxShadow: 'none'
        })
    }
}

function dragStart(event) {
    event.dataTransfer.effectAllowed='move';
    event.dataTransfer.setData("Text", event.target.dataset.id);
    $(event.target).css({
        boxShadow: '1px 2px 5px grey'
    })
    return true;
}

function dragEnter(event) {
    event.preventDefault();
    return true;
}

function dragOver(event) {
    event.preventDefault();
}

function dragDrop(event) {
    if(event.target.dataset.drag === 'draggable') {
        let data = event.dataTransfer.getData("Text");
        let $el = $(event.target).closest('[data-drag="drop"]')
        $el.append(document.getElementById(data));
        event.stopPropagation();
        return false;
    }
}
