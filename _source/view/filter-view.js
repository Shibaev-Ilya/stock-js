import {createElement} from '../render.js';

const createFilterTemplate = () => {
  return (`
 <div class="buy__selects-item">
  <select name="" class="buy__selects-block  js-filter-select" data-placeholder="">
    <option value="">Пункт фильтра 1</option>
    <option value="">Пункт фильтра 2</option>
    <option value="">Пункт фильтра 3</option>
    <option value="">Пункт фильтра 4</option>
  </select>
</div>
`);
};

export default class FilterView {
  #element = null;

  get template() {
    return createFilterTemplate();
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
