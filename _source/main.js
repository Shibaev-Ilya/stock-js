import StockBoardPresenter from "./presenter/stock-board-presenter";
import CarsModel from "./model/cars-model.js";

const carsModel = new CarsModel;
const stockBoardPresenter = new StockBoardPresenter(carsModel);

stockBoardPresenter.init();
