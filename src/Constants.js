const optionsList = [
  {
    category: 'cake',
    name: 'cake size',
    selected: 'sixInch', // Default value
    options: [
      {  
        title: '6 inch',
        value: 'sixInch',
        extraCharge: 0,
        // selected: false,
      },
      {
        title: '8 inch',
        value: 'eightInch',
        extraCharge: 10,
        // selected: false,
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
        extraCharge: 0,
        selected: false,
      },
      {
        title: 'Chocolate Mousse***',
        value: 'chocolateMousse',
        extraCharge: 0,
        selected: false,
      },
      {
        title: 'Vanilla Mousse',
        value: 'vanillaMousse',
        extraCharge: 0,
        selected: false,
      },
      {
        title: 'Fruit Compote',
        value: 'fruitCompote',
        extraCharge: 0,
        selected: false,
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
    options: [],
  },
  {
    title: 'Sweet Potato Pie (seasonal)',
    price: 16,
    selected: false,
    category: 'pie',
    qty: 0,
    id: 1,
    options: [],
  },
  {
    title: 'Banana Cream Pie***',
    price: 18,
    selected: false,
    category: 'pie',
    qty: 0,
    id: 2,
    options: [],
  },
  {
    title: 'Peach Pie',
    price: 1000,
    selected: false,
    category: 'pie',
    qty: 0,
    id: 3,
    options: [],
  },
  {
    title: 'Chocolate Snickers Pie',
    price: 1000,
    selected: false,
    category: 'pie',
    qty: 0,
    id: 4,
    options: [],
  },
  {
    title: 'Mini Pies (12ct)',
    price: 15,
    selected: false,
    category: 'pie',
    qty: 0,
    id: 5,
    options: [],
  },
  {
    title: 'Vanilla Cake***',
    price: 65,
    selected: false,
    category: 'cake',
    qty: 0,
    id: 6,
    options: optionsList.filter((option) => option.category === 'cake'),
  },
  {
    title: 'Chocolate Cake***',
    price: 65,
    selected: false,
    category: 'cake',
    qty: 0,
    id: 7,
    options: optionsList.filter((option) => option.category === 'cake'),
  },
  {
    title: 'Lemon Cake***',
    price: 65,
    selected: false,
    category: 'cake',
    qty: 0,
    id: 8,
    options: optionsList.filter((option) => option.category === 'cake'),
  },
  {
    title: 'Marble Cake',
    price: 65,
    selected: false,
    category: 'cake',
    qty: 0,
    id: 9,
    options: optionsList.filter((option) => option.category === 'cake'),
  },
  {
    title: 'Funfetti Cake',
    price: 65,
    selected: false,
    category: 'cake',
    qty: 0,
    id: 10,
    options: optionsList.filter((option) => option.category === 'cake'),
  },
  {
    title: 'Strawberry Cake',
    price: 65,
    selected: false,
    category: 'cake',
    qty: 0,
    id: 11,
    options: optionsList.filter((option) => option.category === 'cake'),
  },
  {
    title: 'Red Velvet Cake',
    price: 65,
    selected: false,
    category: 'cake',
    qty: 0,
    id: 12,
    options: optionsList.filter((option) => option.category === 'cake'),
  },
  {
    title: 'Oreo Cake',
    price: 65,
    selected: false,
    category: 'cake',
    qty: 0,
    id: 13,
    options: optionsList.filter((option) => option.category === 'cake'),
  },
  {
    title: 'Carrot Cake',
    price: 65,
    selected: false,
    category: 'cake',
    qty: 0,
    id: 14,
    options: optionsList.filter((option) => option.category === 'cake'),
  },
  {
    title: 'Lemon Loaf Cake',
    price: 32,
    selected: false,
    category: 'bakedGoods',
    qty: 0,
    id: 15,
    options: [],
  },
  {
    title: 'Vanilla Loaf Cake',
    price: 32,
    selected: false,
    category: 'bakedGoods',
    qty: 0,
    id: 16,
    options: [],
  },
  {
    title: 'Mini Lemon Loaf Cake',
    price: 32,
    selected: false,
    category: 'bakedGoods',
    qty: 0,
    id: 17,
    options: [],
  },
  {
    title: 'Banana Nut Loaf Cake Bread',
    price: 28,
    selected: false,
    category: 'bakedGoods',
    qty: 0,
    id: 18,
    options: [],
  },
  {
    title: 'Mini Banana Nut Loaf Cake Bread',
    price: 6,
    selected: false,
    category: 'bakedGoods',
    qty: 0,
    id: 19,
    options: [],
  },
  {
    title: 'Coffee Cake',
    price: 35,
    selected: false,
    category: 'bakedGoods',
    qty: 0,
    id: 20,
    options: [],
  },
  {
    title: 'Cheesecake (w/Fruit or Ganache)',
    price: 35,
    selected: false,
    category: 'bakedGoods',
    qty: 0,
    id: 21,
    options: [],
  },
  {
    title: 'Lemon Bars***',
    price: 1000,
    selected: false,
    category: 'dessert',
    qty: 0,
    id: 22,
    options: [],
  },
  {
    title: 'Cheesecake Shooters***',
    price: 1000,
    selected: false,
    category: 'dessert',
    qty: 0,
    id: 23,
    options: [],
  },
  {
    title: 'Cake Pops',
    price: 1000,
    selected: false,
    category: 'dessert',
    qty: 0,
    id: 24,
    options: [],
  },
  {
    title: 'Assorted Cookies',
    price: 1000,
    selected: false,
    category: 'dessert',
    qty: 0,
    id: 25,
    options: [],
  },
  {
    title: 'Cupcakes',
    price: 1000,
    selected: false,
    category: 'dessert',
    qty: 0,
    id: 26,
    options: [],
  },
  {
    title: 'Mini Cupcakes',
    price: 1000,
    selected: false,
    category: 'dessert',
    qty: 0,
    id: 27,
    options: [],
  },
  {
    title: 'Rice Crispy Treats',
    price: 1000,
    selected: false,
    category: 'dessert',
    qty: 0,
    id: 28,
    options: [],
  },
  {
    title: 'Chocolate Covered Pretzels***',
    price: 1000,
    selected: false,
    category: 'dessert',
    qty: 0,
    id: 29,
    options: [],
  },
  {
    title: 'Fruit Tarts***',
    price: 1000,
    selected: false,
    category: 'dessert',
    qty: 0,
    id: 30,
    options: [],
  },
  {
    title: 'Cinnamon Rolls',
    price: 1000,
    selected: false,
    category: 'dessert',
    qty: 0,
    id: 31,
    options: [],
  },
  {
    title: 'Chocolate Covered Strawberries',
    price: 1000,
    selected: false,
    category: 'dessert',
    qty: 0,
    id: 32,
    options: [],
  },
  {
    title: 'Champagne Chocolate Covered Strawberries',
    price: 1000,
    selected: false,
    category: 'dessert',
    qty: 0,
    id: 33,
    options: [],
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
