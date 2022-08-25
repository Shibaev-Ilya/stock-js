import {generatedCars} from '../mock/cars-mock.js';

export default class CarsModel {
  #allCars = generatedCars;

  get allCars() {
    return this.#allCars;
  }
}
