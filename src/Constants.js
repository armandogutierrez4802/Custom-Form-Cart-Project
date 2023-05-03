// ?????????????? HOW TO EXPORT?

const initialCartItems = [
  {
    title: 'Apple Pie*',
    price: 20,
    selected: false,
    category: 'pie',
    qty: 1,
    id: 0,
  },
  {
    title: 'Sweet Potato Pie',
    price: 16,
    selected: false,
    category: 'pie',
    qty: 1,
    id: 1,
  },
  {
    title: 'Banana Cream Pie*',
    price: 18,
    selected: false,
    category: 'pie',
    qty: 1,
    id: 2,
  },
  {
    title: 'Peach Pie',
    price: 1000,
    selected: false,
    category: 'pie',
    qty: 1,
    id: 2,
  },
  {
    title: 'Chocolate Snickers Pie',
    price: 1000,
    selected: false,
    category: 'pie',
    qty: 1,
    id: 2,
  },
  {
    title: 'Mini Pies (12ct)????',
    price: 15,
    selected: false,
    category: 'pie',
    qty: 1,
    id: 3,
  },
  {
    title: 'Vanilla Cake*',
    price: 32,
    selected: false,
    category: 'cake',
    qty: 0,
    id: 6,
  },
  {
    title: 'Chocolate Cake*',
    price: 32,
    selected: false,
    category: 'cake',
    qty: 0,
    id: 6,
  },
  {
    title: 'Lemon Cake*',
    price: 32,
    selected: false,
    category: 'cake',
    qty: 0,
    id: 6,
  },
  {
    title: 'Marble Cake',
    price: 32,
    selected: false,
    category: 'cake',
    qty: 0,
    id: 6,
  },
  {
    title: 'Funfetti Cake',
    price: 32,
    selected: false,
    category: 'cake',
    qty: 0,
    id: 6,
  },
  {
    title: 'Strawberry Cake',
    price: 32,
    selected: false,
    category: 'cake',
    qty: 0,
    id: 6,
  },
  {
    title: 'Red Velvet Cake',
    price: 32,
    selected: false,
    category: 'cake',
    qty: 0,
    id: 6,
  },
  {
    title: 'Oreo Cake',
    price: 32,
    selected: false,
    category: 'cake',
    qty: 0,
    id: 6,
  },
  {
    title: 'Carrot Cake',
    price: 32,
    selected: false,
    category: 'cake',
    qty: 0,
    id: 6,
  },
  {
    title: 'Lemon/Vanilla Loaf Cake',
    price: 32,
    selected: false,
    category: 'cake',
    qty: 0,
    id: 6,
  },
  {
    title: 'Lemon/Vanilla Loaf Cake',
    price: 32,
    selected: false,
    category: 'cake',
    qty: 0,
    id: 6,
  },
  {
    title: 'Lemon/Vanilla Loaf Cake',
    price: 32,
    selected: false,
    category: 'cake',
    qty: 0,
    id: 6,
  },
  {
    title: 'Mini Lemon Loaf Cake',
    price: 6,
    selected: false,
    category: 'cake',
    qty: 0,
    id: 7,
  },
  {
    title: 'Banana Nut Loaf Cake',
    price: 28,
    selected: false,
    category: 'cake',
    qty: 0,
    id: 8,
  },
  {
    title: 'Mini Banana Nut Loaf Cake',
    price: 6,
    selected: false,
    category: 'cake',
    qty: 0,
    id: 9,
  },
  {
    title: 'Coffee Cake',
    price: 35,
    selected: false,
    category: 'cake',
    qty: 0,
    id: 10,
  },
  {
    title: 'Cheesecake',
    price: 35,
    selected: false,
    category: 'cake',
    qty: 0,
    id: 11,
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
