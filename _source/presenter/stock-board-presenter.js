import StockItemView from '../view/stock-item-view.js';
import {render} from "../render.js";
import FilterView from "../view/filter-view.js";
import ShowMoreView from "../view/show-more-view.js";

const stockContainer = document.querySelector('.js-stock-container');
const filtersContainer = document.querySelector('.js-filters-container');
const showMoreButtonContainer = document.querySelector('.js-shoe-more');

const ITEM_PER_PAGE = 5;

export default class StockBoardPresenter {
  #carsModel = null;
  #carsData = null;

  constructor (carsModel) {
    this.#carsModel = carsModel;
  }

  #renderStock = () => {

    render(new FilterView, filtersContainer);

    for (let i = 0; i < this.#carsData.length ; i++) {
      render(new StockItemView(this.#carsData[i]), stockContainer);
    }

    render(new ShowMoreView, showMoreButtonContainer)
  };

  init = () => {
    this.#carsData = [...this.#carsModel.allCars];
    this.#renderStock();
  };

}
