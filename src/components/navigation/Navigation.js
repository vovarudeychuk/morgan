import { Morgan } from "@core/Morgan";

export class Navigation extends Morgan {
  static className = "morgan__navigation";

  constructor($root) {
    super($root, {
      name: "Navigations",
      listeners: ["input", "click"],
    });
  }

  toHTML() {
    return `
    <header class="masthead">
      <div class="boards-menu">
        <button class="boards-btn btn" data-type="boards">
          <i class="fab fa-trello boards-btn-icon" data-type="boards"></i>Boards
        </button>
        <div class="board-search">
          <input
            type="search"
            class="board-search-input"
            aria-label="Board Search"
          /><i class="fas fa-search search-icon" aria-hidden="true"></i>
        </div>
      </div>
      <div class="logo" data-type="boards">
          <i class="fab fa-trello logo-icon" aria-hidden="true" data-type="boards"></i>Morgan
      </div>
      <div class="user-settings">
        <button class="user-settings-btn btn" aria-label="Create">
          <i class="fas fa-plus" aria-hidden="true"></i></button
        ><button class="user-settings-btn btn" aria-label="Information">
          <i class="fas fa-info-circle" aria-hidden="true"></i></button
        ><button class="user-settings-btn btn" aria-label="Notifications">
          <i class="fas fa-bell" aria-hidden="true"></i></button
        ><button class="user-settings-btn btn" aria-label="User Settings">
          <i class="fas fa-user-circle" aria-hidden="true"></i>
        </button>
      </div>
    </header>
    `;
  }

  onInput(event) {
    console.log("Nav-Search", event.target.value);
  }

  onClick(event) {
    if(event.target.dataset.type === 'boards') {
      console.log("boards click", event.target);
      window.location.href = '#'
    }
  }
}
