import { $ } from "@core/Dom";
import { ActiveRouter } from "@core/router/ActiveRouter";

export class Router {
  constructor(selector, router) {
    if (!selector) {
      throw new Error("selector not found");
    }
    this.$placeholder = $(selector);
    this.router = router;

    this.page = null;

    this.changePageHandler = this.changePageHandler.bind(this);

    this.init();
  }

  init() {
    window.addEventListener("hashchange", this.changePageHandler);
    this.changePageHandler();
  }

  changePageHandler() {
    if (this.page) {
      this.page.destroy()
    }

    this.$placeholder.clear()

    const Page = ActiveRouter.path.includes('morgan')
      ? this.router.morgan
      : this.router.dashboard

    this.page = new Page(ActiveRouter.param)

    this.$placeholder.append(this.page.getRoot())

    this.page.afterRender()
  }

  destroy() {
    window.removeEventListener("hashchange", this.changePageHandler);
  }
}
