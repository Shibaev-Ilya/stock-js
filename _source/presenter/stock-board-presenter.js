import StockItemView from '../view/stock-item-view.js';
import {render} from "../render.js";
import ShowMoreView from "../view/show-more-view.js";
import FilterPresenter from "./filter-presenter.js";

const stockContainer = document.querySelector('.js-stock-container');
const showMoreButtonContainer = document.querySelector('.js-shoe-more');

const ITEM_PER_PAGE = 5;

export default class StockBoardPresenter {
  #carsModel = null;
  #carsData = null;
  #filterPresenter = new FilterPresenter;

  constructor (carsModel) {
    this.#carsModel = carsModel;
  }

  #renderStock = () => {

    this.#filterPresenter.init();

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
