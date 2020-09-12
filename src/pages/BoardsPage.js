import {Component} from "@/components/component/Component";
import {Navigation} from "@/components/navigation/Navigation";
import {Boards} from "@/components/boards/Boards";

import {Page} from "@core/page";
import {BoardInfo} from "@/components/board-info/BoardInfoComponent";

export class BoardsPage extends Page {
    getRoot() {
        console.log(this.params);
        this.boards = new Component({
            components: [Navigation, BoardInfo, Boards]
        });

        return this.boards.getRoot();
    }

    afterRender() {
        this.boards.init();
    }

    destroy() {
        this.boards.destroy();
    }
}
