export const mockData = {
  users: [
    {
      id: 1,
      name: "Бэ Чэ",
      email: "BCh@mail.ru",
      phone: "+73261479854",
      purchases: [
        { id: 1, date: "2025-10-15" },
        { id: 5, date: "2025-10-17" },
        { id: 8, date: "2025-10-24" }
      ]
    }
  ],
  products: [
    // Игрушки
    {
      id: 1,
      image: "/img/products/Кролик в феолетовом комбенезоне.jpg",
      title: "Кролик в фиолетовом комбенезоне",
      description: "Описание кролика в фиолетовом комбенезоне",
      fullPrice: 1500,
      discounPercent: 20,
      rating: 5,
      category: "toys",            // ← одна категория (соответствует filterData.categories.id)
      subcategory: "Кролики",      // ← подкатегория
      sizes: [],                   // ← игрушки: без размеров
      colors: [],                  // ← без цветов (или можно добавить, если у игрушки есть цвет)
      weight: "100 г",
      popularity: 5                // ← число для сортировки (можно = rating)
    },
    {
      id: 2,
      image: "/img/products/Мишка в комбенезоне.jpg",
      title: "Мишка в комбенезоне",
      description: "Описание мишки в комбенезоне",
      fullPrice: 1300,
      discounPercent: 41,
      rating: 5,
      category: "toys",
      subcategory: "Мишки",
      sizes: [],
      colors: [],
      weight: "100 г",
      popularity: 5
    },
    {
      id: 10,
      image: "/img/products/Мишка в розовом платье.jpg",
      title: "Мишка в розовом платье",
      description: "Описание мишки в розовом платье",
      fullPrice: 1700,
      discounPercent: 45,
      rating: 1.4,
      category: "toys",
      subcategory: "Мишки",
      sizes: [],
      colors: [],
      weight: "100 г",
      popularity: 1.4
    },

    // Аксессуары
    {
      id: 3,
      image: "/img/products/Сумка-звезда.jpg",
      title: "Сумка-звезда",
      description: "Описание сумки-звезды",
      fullPrice: 2000,
      discounPercent: 10,
      rating: 5,
      category: "accessories",
      subcategory: "Сумки",
      sizes: ["one-size"],
      colors: ["Фиолетовый"],
      weight: "100 г",
      popularity: 5
    },
    {
      id: 7,
      image: "/img/products/Сумка красная.jpg",
      title: "Сумка красная",
      description: "Описание сумки красной",
      fullPrice: 1950,
      discounPercent: 0,
      rating: 5,
      category: "accessories",
      subcategory: "Сумки",
      sizes: ["one-size"],
      colors: ["Красный"],
      weight: "100 г",
      popularity: 5
    },

    // Одежда (clothing)
    {
      id: 4,
      image: "/img/products/Гетры серые.jpg",
      title: "Гетры серые",
      description: "Описание гетры серые",
      fullPrice: 1100,
      discounPercent: 0,
      rating: 4.9,
      category: "clothing",
      subcategory: "Гетры",
      sizes: ["s", "m", "l"],
      colors: ["Серый"],
      weight: "100 г",
      popularity: 4.9
    },
    {
      id: 5,
      image: "/img/products/Жакет.jpg",
      title: "Жакет",
      description: "Описание жакета",
      fullPrice: 3400,
      discounPercent: 0,
      rating: 4.7,
      category: "clothing",
      subcategory: "Кофты",
      sizes: ["s", "m", "l", "xl"],
      colors: ["Бежевый"],
      weight: "100 г",
      popularity: 4.7
    },
    {
      id: 6,
      image: "/img/products/Комплект белый(варежки, шапка).jpg",
      title: "Комплект белый",
      description: "Описание комплекта белого (варежки, шапка)",
      fullPrice: 1950,
      discounPercent: 0,
      rating: 3.9,
      category: "clothing",
      subcategory: "Шапки",
      sizes: ["one-size"],
      colors: ["Белый"],
      weight: "100 г",
      popularity: 3.9
    },
    {
      id: 8,
      image: "/img/products/Гетры зеленые.jpg",
      title: "Гетры зеленые",
      description: "Описание гетры зеленые",
      fullPrice: 1100,
      discounPercent: 15,
      rating: 4.9,
      category: "clothing",
      subcategory: "Гетры",
      sizes: ["s", "m", "l"],
      colors: ["Зеленый"],
      weight: "100 г",
      popularity: 4.9
    },
    {
      id: 9,
      image: "/img/products/Носки цветные.jpg",
      title: "Носки цветные",
      description: "Описание носков цветных",
      fullPrice: 700,
      discounPercent: 0,
      rating: 5,
      category: "clothing",
      subcategory: "Носки",
      sizes: ["s", "m", "l"],
      colors: ["Красный", "Синий", "Желтый", "Зеленый"],
      weight: "100 г",
      popularity: 5
    }
  ]
};

// export const mockData = {
//   "users": [
//     {
//       "id": 1,
//       "name": "Бэ Чэ",
//       "email": "BCh@mail.ru",
//       "phone": "+73261479854",
//       "purchases": [
//         {
//           "id": 1,
//           "date": "2025-10-15"
//         },
//         {
//           "id": 5,
//           "date": "2025-10-17"
//         },
//         {
//           "id": 8,
//           "date": "2025-10-24"
//         }
//       ]
//     }
//   ],
//   "products": [
//     {
//       "id": 1,
//       "image": "/img/products/Кролик в феолетовом комбенезоне.jpg",
//       "title": "Кролик в фиолетовом комбенезоне",
//       "description": "Описание кролика в фиолетовом комбенезоне",
//       "fullPrice": 1500,
//       "discounPercent": 20,
//       // "rating": { "rate": 4.9, "count": 4 },
//        "rating": 5,
//       "categories": ["sales",  "toys"],
//       "weight": "100 г"
//     },
//     {
//       "id": 2,
//       "image": "/img/products/Мишка в комбенезоне.jpg",
//       "title": "Мишка в комбенезоне",
//       "description": "Описание мишки в комбенезоне",
//       "fullPrice": 1300,
//       "discounPercent": 41,
//       //  "rating": { "rate": 4.1, "count": 4 },
//        "rating": 5,
//       "categories": ["sales", "popular", "toys"],
//       "weight": "100 г"
//     },

//     {
//       "id": 3,
//       "image": "/img/products/Сумка-звезда.jpg",
//       "title": "Сумка-звезда",
//       "description": "Описание сумки-звезды",
//       "fullPrice": 2000,
//       "discounPercent": 10,
//       "rating": 5,
//       "categories": ["sales", "popular", "accessories"],
//       "weight": "100 г"
//     },

//     {
//       "id": 4,
//       "image": "/img/products/Гетры серые.jpg",
//       "title": "Гетры серые",
//       "description": "Описание гетры серые",
//       "fullPrice": 1100,
//       "discounPercent": 0,
//       "rating": 4.9,
//       "categories": ["new", "popular", "cloth"],
//       "weight": "100 г"
//     },
//     {
//       "id": 5,
//       "image": "/img/products/Жакет.jpg",
//       "title": "Жакет",
//       "description": "Описание жакета",
//       "fullPrice": 3400,
//       "discounPercent": 0,
//       "rating": 5,
//       "categories": ["new", "popular", "cloth"],
//       "weight": "100 г"
//     },
//     {
//       "id": 6,
//       "image": "/img/products/Комплект белый(варежки, шапка).jpg",
//       "title": "Комплект белый",
//       "description": "Описание rомплекта белого (варежки, шапка)",
//       "fullPrice": 1950,
//       "discounPercent": 0,
//       "rating": 5,
//       "categories": ["new", "cloth"],
//       "weight": "100 г"
//     },
//     {
//       "id": 7,
//       "image": "/img/products/Сумка красная.jpg",
//       "title": "Сумка красная",
//       "description": "Описание сумки красной",
//       "fullPrice": 1950,
//       "discounPercent": 0,
//       "rating": 5,
//       "categories": ["new", "popular", "cloth"],
//       "weight": "100 г"
//     },
//     {
//       "id": 8,
//       "image": "/img/products/Гетры зеленые.jpg",
//       "title": "Гетры зеленые",
//       "description": "Описание гетры зеленые",
//       "fullPrice": 1100,
//       "discounPercent": 15,
//       "rating": 4.9,
//       "categories": ["sales", "popular", "cloth"],
//       "weight": "100 г"
//     },
//     {
//       "id": 9,
//       "image": "/img/products/Носки цветные.jpg",
//       "title": "Носки цветные",
//       "description": "Описание носков цветных",
//       "fullPrice": 700,
//       "discounPercent": 0,
//       "rating": 5,
//       "categories": ["new", "cloth"],
//       "weight": "100 г"
//     },
//     {
//       "id": 10,
//       "image": "/img/products/Мишка в розовом платье.jpg",
//       "title": "Мишка в розовом платье",
//       "description": "Описание мишки в розовом платье",
//       "fullPrice": 1700,
//       "discounPercent": 45,
//       "rating": 1.4,
//       "categories": ["sales", "popular", "toys"],
//       "weight": "100 г"
//     }
//   ]
// }


