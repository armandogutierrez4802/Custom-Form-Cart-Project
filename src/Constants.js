const newOptions = [
  {
    // title: 'Select your cake #',
    category: 'cake',
    name: 'cake size',
    options: [
      {
        title: '6 inch',
        value: 'sixInch',
        selected: false,
      },
      {
        title: '8 inch',
        value: 'eightInch',
        selected: false,
      },
    ],
  },
  {
    category: 'cake',
    name: 'cake filling',
    options: [
      {
        title: 'No Bake Cheesecake***',
        value: 'noBakeCheesecake',
        selected: false,
      },
      {
        title: 'Chocolate Mousse***',
        value: 'chocolateMousse',
        selected: false,
      },
      {
        title: 'Vanilla Mousse',
        value: 'vanillaMousse',
        selected: false,
      },
      {
        title: 'Fruit Compote',
        value: 'fruitCompote',
        selected: false,
      },
    ],
  },
];

const options = [
  {
    title: 'No Bake Cheesecake***',
    value: 'noBakeCheesecake',
    name: 'cake filling',
    category: 'cake',
    size: [
      {
        title: '6 inch',
        value: 'sixInch',
        name: 'cake size',
        selected: false,
      },
      {
        title: '8 inch',
        value: 'eightInch',
        name: 'cake size',
        selected: false,
      },
    ],
    selected: false,
  },
  {
    title: 'Chocolate Mousse***',
    value: 'chocolateMousse',
    name: 'cake filling',
    category: 'cake',
    size: [
      {
        title: '6 inch',
        value: 'sixInch',
        name: 'cake size',
        selected: false,
      },
      {
        title: '8 inch',
        value: 'eightInch',
        name: 'cake size',
        selected: false,
      },
    ],
    selected: false,
  },
  {
    title: 'Vanilla Mousse',
    value: 'vanillaMousse',
    name: 'cake filling',
    category: 'cake',
    size: [
      {
        title: '6 inch',
        value: 'sixInch',
        name: 'cake size',
        selected: false,
      },
      {
        title: '8 inch',
        value: 'eightInch',
        name: 'cake size',
        selected: false,
      },
    ],
    selected: false,
  },
  {
    title: 'Fruit Compote',
    value: 'fruitCompote',
    name: 'cake filling',
    category: 'cake',
    size: [
      {
        title: '6 inch',
        value: 'sixInch',
        name: 'cake size',
        selected: false,
      },
      {
        title: '8 inch',
        value: 'eightInch',
        name: 'cake size',
        selected: false,
      },
    ],
    selected: false,
  },
];

const initialCartItems = [
  {
    title: 'Apple Pie***',
    price: 20,
    selected: false,
    category: 'pie',
    qty: 0,
    id: 0,
  },
  {
    title: 'Sweet Potato Pie (seasonal)',
    price: 16,
    selected: false,
    category: 'pie',
    qty: 0,
    id: 1,
  },
  {
    title: 'Banana Cream Pie***',
    price: 18,
    selected: false,
    category: 'pie',
    qty: 0,
    id: 2,
  },
  {
    title: 'Peach Pie',
    price: 1000,
    selected: false,
    category: 'pie',
    qty: 0,
    id: 3,
  },
  {
    title: 'Chocolate Snickers Pie',
    price: 1000,
    selected: false,
    category: 'pie',
    qty: 0,
    id: 4,
  },
  {
    title: 'Mini Pies (12ct)',
    price: 15,
    selected: false,
    category: 'pie',
    qty: 0,
    id: 5,
  },
  {
    title: 'Vanilla Cake***',
    price: 32,
    selected: false,
    category: 'cake',
    qty: 0,
    id: 6,
    options: options.filter((option) => option.category === 'cake'),
  },
  {
    title: 'Chocolate Cake***',
    price: 32,
    selected: false,
    category: 'cake',
    qty: 0,
    id: 7,
    options: newOptions.filter((option) => option.category === 'cake')
  },
  {
    title: 'Lemon Cake***',
    price: 32,
    selected: false,
    category: 'cake',
    qty: 0,
    id: 8,
  },
  {
    title: 'Marble Cake',
    price: 32,
    selected: false,
    category: 'cake',
    qty: 0,
    id: 9,
  },
  {
    title: 'Funfetti Cake',
    price: 32,
    selected: false,
    category: 'cake',
    qty: 0,
    id: 10,
  },
  {
    title: 'Strawberry Cake',
    price: 32,
    selected: false,
    category: 'cake',
    qty: 0,
    id: 11,
  },
  {
    title: 'Red Velvet Cake',
    price: 32,
    selected: false,
    category: 'cake',
    qty: 0,
    id: 12,
  },
  {
    title: 'Oreo Cake',
    price: 32,
    selected: false,
    category: 'cake',
    qty: 0,
    id: 13,
  },
  {
    title: 'Carrot Cake',
    price: 32,
    selected: false,
    category: 'cake',
    qty: 0,
    id: 14,
  },
  {
    title: 'Lemon Loaf Cake',
    price: 32,
    selected: false,
    category: 'bakedGoods',
    qty: 0,
    id: 15,
  },
  {
    title: 'Vanilla Loaf Cake',
    price: 32,
    selected: false,
    category: 'bakedGoods',
    qty: 0,
    id: 16,
  },
  {
    title: 'Mini Lemon Loaf Cake',
    price: 32,
    selected: false,
    category: 'bakedGoods',
    qty: 0,
    id: 17,
  },
  {
    title: 'Banana Nut Loaf Cake Bread',
    price: 28,
    selected: false,
    category: 'bakedGoods',
    qty: 0,
    id: 18,
  },
  {
    title: 'Mini Banana Nut Loaf Cake Bread',
    price: 6,
    selected: false,
    category: 'bakedGoods',
    qty: 0,
    id: 19,
  },
  {
    title: 'Coffee Cake',
    price: 35,
    selected: false,
    category: 'bakedGoods',
    qty: 0,
    id: 20,
  },
  {
    title: 'Cheesecake (w/Fruit or Ganache)',
    price: 35,
    selected: false,
    category: 'bakedGoods',
    qty: 0,
    id: 21,
  },
  {
    title: 'Lemon Bars***',
    price: 1000,
    selected: false,
    category: 'dessert',
    qty: 0,
    id: 22,
  },
  {
    title: 'Cheesecake Shooters***',
    price: 1000,
    selected: false,
    category: 'dessert',
    qty: 0,
    id: 23,
  },
  {
    title: 'Cake Pops',
    price: 1000,
    selected: false,
    category: 'dessert',
    qty: 0,
    id: 24,
  },
  {
    title: 'Assorted Cookies',
    price: 1000,
    selected: false,
    category: 'dessert',
    qty: 0,
    id: 25,
  },
  {
    title: 'Cupcakes',
    price: 1000,
    selected: false,
    category: 'dessert',
    qty: 0,
    id: 26,
  },
  {
    title: 'Mini Cupcakes',
    price: 1000,
    selected: false,
    category: 'dessert',
    qty: 0,
    id: 27,
  },
  {
    title: 'Rice Crispy Treats',
    price: 1000,
    selected: false,
    category: 'dessert',
    qty: 0,
    id: 28,
  },
  {
    title: 'Chocolate Covered Pretzels***',
    price: 1000,
    selected: false,
    category: 'dessert',
    qty: 0,
    id: 29,
  },
  {
    title: 'Fruit Tarts***',
    price: 1000,
    selected: false,
    category: 'dessert',
    qty: 0,
    id: 30,
  },
  {
    title: 'Cinnamon Rolls',
    price: 1000,
    selected: false,
    category: 'dessert',
    qty: 0,
    id: 31,
  },
  {
    title: 'Chocolate Covered Strawberries',
    price: 1000,
    selected: false,
    category: 'dessert',
    qty: 0,
    id: 32,
  },
  {
    title: 'Champagne Chocolate Covered Strawberries',
    price: 1000,
    selected: false,
    category: 'dessert',
    qty: 0,
    id: 33,
  },
];

const categories = [
  {
    title: 'Pies',
    value: 'pie',
  },
  {
    title: 'Nakes Cakes (6" & 8")',
    value: 'cake',
  },
  {
    title: 'Baked Goods',
    value: 'bakedGoods',
  },
  {
    title: 'Dessert Table',
    value: 'dessert',
  },
];

const pickupTimes = [
  {
    value: '1100',
    time: '11:00am',
  },
  {
    value: '1130',
    time: '11:30am',
  },
  {
    value: '1200',
    time: '12:00pm',
  },
  {
    value: '1230',
    time: '12:30pm',
  },
  {
    value: '100',
    time: '1:00pm',
  },
  {
    value: '130',
    time: '1:30pm',
  },
  {
    value: '200',
    time: '2:00pm',
  },
  {
    value: '230',
    time: '2:30pm',
  },
  {
    value: '300',
    time: '3:00pm',
  },
  {
    value: '330',
    time: '3:30pm',
  },
  {
    value: '400',
    time: '4:00pm',
  },
  {
    value: '430',
    time: '4:30pm',
  },
  {
    value: '500',
    time: '5:00pm',
  },
  {
    value: '530',
    time: '5:30pm',
  },
  {
    value: '600',
    time: '6:00pm',
  },
  {
    value: '630',
    time: '6:30pm',
  },
  {
    value: '700',
    time: '7:00pm',
  },
];

const paymentMethods = [
  {
    value: 'zelle',
    method: 'Zelle',
  },
  {
    value: 'venmo',
    method: 'Venmo',
  },
  {
    value: 'cashapp',
    method: 'CashApp',
  },
  {
    value: 'cash',
    method: 'Cash',
  },
];

export { initialCartItems, options, categories, pickupTimes, paymentMethods };
