import {createElement} from '../render.js';

const createButtonBlock = () => {
  return (`
<div class="order__controls">
  <div class="order__phone">
    <div class="order__phone-icon">
      <img src="./img/icon_phone.svg" alt="">
    </div>
    <div class="order__phone-value">
      <a href="tel:+7777777777">+7777777777</a>
    </div>
  </div>
  <div class="order__button"> <a data-fancybox data-src="#prop" class="button"><span>Получить предложение</span></a>
  </div>
  <div class="order__link"><a data-fancybox data-src="#test-drive">Записаться на тест-драйв</a>
  </div>
</div>
`)
};

const createStockItemTemplate = (car) => {
  const {price, year, discountPrice, maxDiscount, model, fuel, drive, vin, images} = car;

  return (`
 <div class="order__item">
  <div class="order__image">
    <div class="order__image-wrap">
      <a href="https://placeholder.com"><img src="${images.image[0]}"></a>
    </div>
  </div>
  <div class="order__info">
    <div class="order__title">${model}</div>
    <div class="order__list js-order-list">
      <div class="order__list-block">
        <div class="order__option"><span>Цена:</span> ${price}</div>
        <div class="order__option"><span>Цена со скидкой:</span> ${discountPrice}</div>
        <div class="order__option"><span>Выгода до:</span> ${maxDiscount}</div>
      </div>
      <div class="order__list-block">
      <div class="order__option"><span>Год выпуска:</span> ${year}</div>
        <div class="order__option"><span>Привод:</span> ${drive}</div>
        <div class="order__option"><span>Топливо:</span> ${fuel}</div>
        
      </div>
      <div class="order__list-block">
        <div class="order__option"><span>Двигатель:</span> текст</div>
        <div class="order__option"><span>КПП:</span> текст</div>
        <div class="order__option"><span>VIN:</span> ${vin}</div>
      </div>
    </div>
  </div>
  ${createButtonBlock()}
</div>
`);
};

export default class StockItemView {
  #element = null;
  #car = null;

  constructor (car) {
    this.#car = car;
  }

  get template() {
    return createStockItemTemplate(this.#car);
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
