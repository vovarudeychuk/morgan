import { Morgan } from "@core/Morgan";

export class BoardInfo extends Morgan {
  static className = "morgan__board__info";
  constructor($root) {
    super($root, {
      name: "BoardInfo",
      listeners: ["click"],
    });
  }

  toHTML() {
    return `
        <section class="board-info-bar">
        <div class="board-controls">
          <button class="board-title btn"><h2>Web Development</h2></button
          ><button class="star-btn btn" aria-label="Star Board">
            <i class="far fa-star" aria-hidden="true"></i></button
          ><button class="personal-btn btn">Personal</button
          ><button class="private-btn btn">
            <i class="fas fa-briefcase private-btn-icon" aria-hidden="true"></i
            >Private
          </button>
        </div>
        <button class="menu-btn btn">
          <i class="fas fa-ellipsis-h menu-btn-icon" aria-hidden="true"></i>Show
          Menu
        </button>
      </section>
        `;
  }

  onClick() {
    console.log("board info click");
  }
}
