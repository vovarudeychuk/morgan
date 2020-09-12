export function createBoardTemplate(data) {
    return `
            <section class="lists-container" data-type="container">
                ${createBoard(data)}  
                <button class="add-list-btn btn" data-adding="board">Add a Board</button>
            </section>            
        `
}

export function createBoard(data) {
    let items = []
    data.forEach(d => items.push(addBoard(d.name)))
    return items.join('')
}

export function addBoard(name) {
    return `<div class="list">
                    <div style="white-space: nowrap;" class="board list-title" data-open="board">
                         ${name}
                    </div>
                </div>`
}


