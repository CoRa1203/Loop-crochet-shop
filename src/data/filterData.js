export const filterData = {
sortingBlocks: [
  {id: 'sortBy', label: 'Сортировать по',},
  {id: 'color', label: 'Цвет',},
  {id: 'size', label: 'Размер',},
  {id: 'category', label: 'Категории',}
],

  // 1. Опции сортировки (не зависят от категории)
  sorting: [
    { id: 'price-asc', label: 'По возрастанию цены' },
    { id: 'price-desc', label: 'По убыванию цены' },
    { id: 'popularity', label: 'По популярности' }
  ],

  // 2. Общие фильтры, применимые к разным категориям
  commonFilters: {
    size: { 
      label: 'Размер',
      options: ['xs', 's', 'm', 'l', 'xl', '2xl']
    },
    color: {
      label: 'Цвет',
      options: ['Черный', 'Белый', 'Красный', 'Синий', 'Желтый', 'Зеленый']
    }
  },

  // 3. Категории (только перечень, без вложенных фильтров)
  categories: [
    { id: 'clothing', name: 'Одежда' },
    { id: 'toys', name: 'Игрушки' },
    { id: 'accessories', name: 'Аксессуары' }
  ],

  // 4. Маппинг: какие фильтры применять к каждой категории
  categoryFilters: {
    clothing: ['size', 'color', 'subcategory'],
    accessories: ['size', 'color', 'subcategory'],
    toys: ['subcategory'] // у игрушек, например, нет размера/цвета
  },

  // 5. Подкатегории по категориям
  subcategories: {
    clothing: ['Кофты', 'Шапки', 'Носки'],
    accessories: ['Шарфы', 'Гетры', 'Сумки'],
    toys: ['Кролики', 'Мишки', 'Олени']
  }
};