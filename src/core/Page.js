export class Page {
  constructor(params) {
    this.params = params;
  }

  getRoot() {
    throw Error("method getRoot() shood be implement");
  }

  afterRender() {}

  destroy() {}
}
