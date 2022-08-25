import {getId, getRandomInteger} from "../utils.js";

const id = getId();

const generateStockItem = () => {
  const carPrice = getRandomInteger(150000, 999999);
  const creditDiscount = getRandomInteger(10000, 50000);
  const tradeInDiscount = getRandomInteger(10000, 50000);
  const maxDiscount = creditDiscount + tradeInDiscount;
  const discountPrice = carPrice - maxDiscount;
  const carVin = id();
  return (
    {
      dealer_id: 1332,
      dealer_name: "Название дилера",
      location_dealer_id: 5,
      location_dealer_name: "Название локации дилера",
      location_dealer_address: "Адрес",
      unique_id: getRandomInteger(1999, 9999),
      mark_id: "Geely",
      folder_id: "Coolray, I",
      model: "Coolray",
      generation: "I",
      modification_id: "1.5 AMT (150 л.с.)",
      Name: "Flagship",
      body_type: "Внедорожник 5 дв.",
      type_id: 1,
      type_name: "Легковой автомобиль",
      wheel: "Левый",
      drive: "Передний",
      volume: 1.5,
      fuel: "Бензин",
      transmission: "Робот",
      horse_power: getRandomInteger(100, 150),
      kwt: 110.33,
      color: "Белый",
      color_hex: "#FFFFFF",
      color_brand: "Crystal White",
      interior_material: "Кожа",
      interior_color: "",
      metallic: "да",
      availability: "В наличии",
      custom: "Растаможен",
      year: 2022,
      doors_count: getRandomInteger( 2, 5),
      price: carPrice,
      credit_discount: creditDiscount,
      tradein_discount: tradeInDiscount,
      maxDiscount: maxDiscount,
      discountPrice: discountPrice,
      vin: `vin-${carVin}`,
      description: "",
      disclamer_before: "⚡ Только до конца августа! Особые условия на покупку новых автомобилей в Geely БорисХоф! ✅ Кредит от 0,01% ✅ Дополнительная выгода при участии в программе Трейд-ин! ✅ Дополнительная выгода при покупе автомобиля в кредит! ⏳ Успейте купить выгодно! ⭐ БорисХоф Geely - новый официальный дилер Geely в Москве! ⭐ Мы ждём Вас на тест-драйв по адресу: 2-я Магистральная ул., д. 18, стр. 22 🚗",
      disclamer_after: "",
      extras: "",
      equipments_installed: "",
      equipments_standart: {
        category: [
          {
            item: [
              "круиз-контроль",
              "мультифункциональное рулевое колесо",
              "электропривод зеркал",
            ]
          },
          {
            item: [
              "искусственная кожа (Материал салона)",
              "декоративная подсветка салона",
              "накладки на пороги",
              "декоративные накладки на педали",
              "регулировка передних сидений по высоте",
            ]
          },
          {
            item: [
              "электрообогрев форсунок стеклоомывателей",
              "электрообогрев боковых зеркал",
              "электрообогрев зоны стеклоочистителей",
              "дневные ходовые огни",
              "светодиодные фары",
              "датчик света",
              "противотуманные фары"
            ]
          },
          {
            item: [
              "подушка безопасности пассажира",
              "система помощи при торможении (BAS, EBD)",
              "эра-глонасс",
              "система помощи при спуске",
              "подушки безопасности боковые",
              "антиблокировочная система (ABS)",
              "антипробуксовочная система (ASR)",
            ]
          },
          {
            item: [
              "рейлинги на крыше",
              "диски 18"
            ]
          },
          {
            item: [
              "центральный замок",
              "сигнализация",
              "иммобилайзер"
            ]
          },
          {
            item: [
              "USB",
              "аудиосистема",
              "Bluetooth",
              "розетка 12V"
            ]
          },
          {
            item: "докатка"
          }
        ]
      },
      images: {
        image: [
          "https://www.avtovzglyad.ru/media/article/BMW_3-Series_2019.jpg.740x555_q85_box-38%2C115%2C1102%2C913_crop_detail_upscale.jpg",
          "https://www.avtovzglyad.ru/media/article/BMW_3-Series_2019.jpg.740x555_q85_box-38%2C115%2C1102%2C913_crop_detail_upscale.jpg",
          "https://www.avtovzglyad.ru/media/article/BMW_3-Series_2019.jpg.740x555_q85_box-38%2C115%2C1102%2C913_crop_detail_upscale.jpg",
          "https://www.avtovzglyad.ru/media/article/BMW_3-Series_2019.jpg.740x555_q85_box-38%2C115%2C1102%2C913_crop_detail_upscale.jpg"
        ]
      },
      live_photos: 1,
      video: "",
      exchange: "Рассмотрю варианты",
      category: [],
      complectation_code: "FLAGSHIPCOOLRAY",
      color_code: "WHITE",
      interior_code: "",
      equipment_code: ""
    })
};

const generatedCars = Array.from({length: 10}, generateStockItem);

export {generatedCars};
