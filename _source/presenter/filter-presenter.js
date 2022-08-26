import {render} from "../render";
import FilterView from "../view/filter-view.js";

const filtersContainer = document.querySelector('.js-filters-container');

export default class FilterPresenter {

  #renderFilter = () => {
    render(new FilterView, filtersContainer);
  };

  init = () => {
    this.#renderFilter();
  }
}
