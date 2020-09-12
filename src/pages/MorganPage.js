import {Page} from "@core/page";
import {Component} from "@/components/component/Component";

import {Navigation} from "@/components/navigation/Navigation";
import {BoardInfo} from "@/components/board-info/BoardInfoComponent";
import {Board} from "@/components/board/Board";

export class MorganPage extends Page {
    getRoot() {
        console.log(this.params);
        this.morgan = new Component({
            components: [Navigation, BoardInfo, Board],
        });
        return this.morgan.getRoot();
    }

    afterRender() {
        this.morgan.init();
    }

    destroy() {
        this.morgan.destroy();
    }
}
