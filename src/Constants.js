const allOptionGroups = [
  {
    category: 'cake',
    name: 'cake size',
    selected: 'sixInch', // Selected option
    extraCharge: 0,
    options: [
      {
        title: '6 inch',
        value: 'sixInch',
        optExtraCharge: 0,
      },
      {
        title: '8 inch',
        value: 'eightInch',
        optExtraCharge: 10,
      },
    ],
  },
  {
    category: 'cake',
    name: 'cake filling',
    selected: 'noBakeCheesecake', // Default option
    extraCharge: 0, // Default charge
    options: [
      {
        title: 'No Bake Cheesecake***',
        value: 'noBakeCheesecake',
        optExtraCharge: 0,
      },
      {
        title: 'Chocolate Mousse***',
        value: 'chocolateMousse',
        optExtraCharge: 0,
      },
      {
        title: 'Vanilla Mousse',
        value: 'vanillaMousse',
        optExtraCharge: 0,
      },
      {
        title: 'Fruit Compote',
        value: 'fruitCompote',
        optExtraCharge: 0,
      },
    ],
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
    optionGroups: [],
  },
  {
    title: 'Sweet Potato Pie (seasonal)',
    price: 16,
    selected: false,
    category: 'pie',
    qty: 0,
    id: 1,
    optionGroups: [],
  },
  {
    title: 'Banana Cream Pie***',
    price: 18,
    selected: false,
    category: 'pie',
    qty: 0,
    id: 2,
    optionGroups: [],
  },
  {
    title: 'Peach Pie',
    price: 1000,
    selected: false,
    category: 'pie',
    qty: 0,
    id: 3,
    optionGroups: [],
  },
  {
    title: 'Chocolate Snickers Pie',
    price: 1000,
    selected: false,
    category: 'pie',
    qty: 0,
    id: 4,
    optionGroups: [],
  },
  {
    title: 'Mini Pies (12ct)',
    price: 15,
    selected: false,
    category: 'pie',
    qty: 0,
    id: 5,
    optionGroups: [],
  },
  {
    title: 'Vanilla Cake***',
    price: 65,
    selected: false,
    category: 'cake',
    qty: 0,
    id: 6,
    optionGroups: allOptionGroups.filter(
      (option) => option.category === 'cake'
    ),
  },
  {
    title: 'Chocolate Cake***',
    price: 65,
    selected: false,
    category: 'cake',
    qty: 0,
    id: 7,
    optionGroups: allOptionGroups.filter(
      (option) => option.category === 'cake'
    ),
  },
  {
    title: 'Lemon Cake***',
    price: 65,
    selected: false,
    category: 'cake',
    qty: 0,
    id: 8,
    optionGroups: allOptionGroups.filter(
      (option) => option.category === 'cake'
    ),
  },
  {
    title: 'Marble Cake',
    price: 65,
    selected: false,
    category: 'cake',
    qty: 0,
    id: 9,
    optionGroups: allOptionGroups.filter(
      (option) => option.category === 'cake'
    ),
  },
  {
    title: 'Funfetti Cake',
    price: 65,
    selected: false,
    category: 'cake',
    qty: 0,
    id: 10,
    optionGroups: allOptionGroups.filter(
      (option) => option.category === 'cake'
    ),
  },
  {
    title: 'Strawberry Cake',
    price: 65,
    selected: false,
    category: 'cake',
    qty: 0,
    id: 11,
    optionGroups: allOptionGroups.filter(
      (option) => option.category === 'cake'
    ),
  },
  {
    title: 'Red Velvet Cake',
    price: 65,
    selected: false,
    category: 'cake',
    qty: 0,
    id: 12,
    optionGroups: allOptionGroups.filter(
      (option) => option.category === 'cake'
    ),
  },
  {
    title: 'Oreo Cake',
    price: 65,
    selected: false,
    category: 'cake',
    qty: 0,
    id: 13,
    optionGroups: allOptionGroups.filter(
      (option) => option.category === 'cake'
    ),
  },
  {
    title: 'Carrot Cake',
    price: 65,
    selected: false,
    category: 'cake',
    qty: 0,
    id: 14,
    optionGroups: allOptionGroups.filter(
      (option) => option.category === 'cake'
    ),
  },
  {
    title: 'Lemon Loaf Cake',
    price: 32,
    selected: false,
    category: 'bakedGoods',
    qty: 0,
    id: 15,
    optionGroups: [],
  },
  {
    title: 'Vanilla Loaf Cake',
    price: 32,
    selected: false,
    category: 'bakedGoods',
    qty: 0,
    id: 16,
    optionGroups: [],
  },
  {
    title: 'Mini Lemon Loaf Cake',
    price: 32,
    selected: false,
    category: 'bakedGoods',
    qty: 0,
    id: 17,
    optionGroups: [],
  },
  {
    title: 'Banana Nut Loaf Cake Bread',
    price: 28,
    selected: false,
    category: 'bakedGoods',
    qty: 0,
    id: 18,
    optionGroups: [],
  },
  {
    title: 'Mini Banana Nut Loaf Cake Bread',
    price: 6,
    selected: false,
    category: 'bakedGoods',
    qty: 0,
    id: 19,
    optionGroups: [],
  },
  {
    title: 'Coffee Cake',
    price: 35,
    selected: false,
    category: 'bakedGoods',
    qty: 0,
    id: 20,
    optionGroups: [],
  },
  {
    title: 'Cheesecake (w/Fruit or Ganache)',
    price: 35,
    selected: false,
    category: 'bakedGoods',
    qty: 0,
    id: 21,
    optionGroups: [],
  },
  {
    title: 'Lemon Bars***',
    price: 1000,
    selected: false,
    category: 'dessert',
    qty: 0,
    id: 22,
    optionGroups: [],
  },
  {
    title: 'Cheesecake Shooters***',
    price: 1000,
    selected: false,
    category: 'dessert',
    qty: 0,
    id: 23,
    optionGroups: [],
  },
  {
    title: 'Cake Pops',
    price: 1000,
    selected: false,
    category: 'dessert',
    qty: 0,
    id: 24,
    optionGroups: [],
  },
  {
    title: 'Assorted Cookies',
    price: 1000,
    selected: false,
    category: 'dessert',
    qty: 0,
    id: 25,
    optionGroups: [],
  },
  {
    title: 'Cupcakes',
    price: 1000,
    selected: false,
    category: 'dessert',
    qty: 0,
    id: 26,
    optionGroups: [],
  },
  {
    title: 'Mini Cupcakes',
    price: 1000,
    selected: false,
    category: 'dessert',
    qty: 0,
    id: 27,
    optionGroups: [],
  },
  {
    title: 'Rice Crispy Treats',
    price: 1000,
    selected: false,
    category: 'dessert',
    qty: 0,
    id: 28,
    optionGroups: [],
  },
  {
    title: 'Chocolate Covered Pretzels***',
    price: 1000,
    selected: false,
    category: 'dessert',
    qty: 0,
    id: 29,
    optionGroups: [],
  },
  {
    title: 'Fruit Tarts***',
    price: 1000,
    selected: false,
    category: 'dessert',
    qty: 0,
    id: 30,
    optionGroups: [],
  },
  {
    title: 'Cinnamon Rolls',
    price: 1000,
    selected: false,
    category: 'dessert',
    qty: 0,
    id: 31,
    optionGroups: [],
  },
  {
    title: 'Chocolate Covered Strawberries',
    price: 1000,
    selected: false,
    category: 'dessert',
    qty: 0,
    id: 32,
    optionGroups: [],
  },
  {
    title: 'Champagne Chocolate Covered Strawberries',
    price: 1000,
    selected: false,
    category: 'dessert',
    qty: 0,
    id: 33,
    optionGroups: [],
  },
];

const categories = [
  {
    title: 'Pies',
    value: 'pie',
  },
  {
    title: 'Naked Cakes (6" & 8")',
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

export { initialCartItems, categories, pickupTimes, paymentMethods };
