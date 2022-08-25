import {createElement} from '../render.js';

const createShowMoreTemplate = () => {
  return (`
 <a class="button button_empty"><span>Показать еще</span></a>
`);
};

export default class ShowMoreView {
  #element = null;

  get template() {
    return createShowMoreTemplate();
  }

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}
