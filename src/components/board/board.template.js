export function createTemplate(data) {
    return `
        <section class="lists-container"  data-type="container" data-drag="section">
            ${createList(data)}
            <button class="add-list-btn btn" data-adding="list">Add a list</button>
        </section>     
    `
}

export function createList(data) {
    let items = []
    data.forEach(c => items.push(addList(c)))
    return items.join('')
}

function addList(data) {
    return `
        <div class="list" data-id="${data.id}" data-type="resizable" data-type="list" data-adding="resizable" >
        <div class="list-width-resize" data-resize="width"></div>
          <div contenteditable class="list-title textarea">
            ${data.title}
          </div>
          <i class="fas fa-times remove-list" data-remove="${data.id}"></i>
          <ul class="list-items" data-drag="drop"> 
            ${createCard(data.cards)}
          </ul>
             <button class="add-card-btn btn" data-adding="card" data-index="${data.id}">Add card</button>
        </div>`
}

export function createCard(cards) {
    let items = []
    cards.forEach(c => items.push(addCard(c)))
    return items.join('')
}

export function addCard(card) {
    return `<li draggable="true" id="${card.id}" data-drag="draggable" data-type="card" data-id="${card.id}">${card.text}</li>`
}
