const Products = [
  {
    id: 16,
    title: 'Tasty Bronze Chips',
    price: 573,
    description:
      'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
    images: [
      'https://i.imgur.com/5iNAL9T.jpeg',
      'https://i.imgur.com/OLKMwgP.jpeg',
      'https://i.imgur.com/Dm2pPfd.jpeg',
    ],
    creationAt: '2023-10-07T19:16:30.000Z',
    updatedAt: '2023-10-07T19:16:30.000Z',
    category: {
      id: 2,
      name: 'Electronics',
      image: 'https://i.imgur.com/rDC2jWQ.jpeg',
      creationAt: '2023-10-07T19:16:30.000Z',
      updatedAt: '2023-10-07T19:16:30.000Z',
    },
  },
  {
    id: 17,
    title: 'Modern Rubber Fish',
    price: 166,
    description:
      'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
    images: [
      'https://i.imgur.com/nCqOV7L.jpeg',
      'https://i.imgur.com/RLnJJyQ.jpeg',
      'https://i.imgur.com/imQx3Az.jpeg',
    ],
    creationAt: '2023-10-07T19:16:30.000Z',
    updatedAt: '2023-10-07T19:16:30.000Z',
    category: {
      id: 3,
      name: 'Furniture',
      image: 'https://i.imgur.com/RQL19O6.jpeg',
      creationAt: '2023-10-07T19:16:30.000Z',
      updatedAt: '2023-10-07T19:16:30.000Z',
    },
  },
  {
    id: 18,
    title: 'Ergonomic Soft Salad',
    price: 34,
    description:
      'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
    images: [
      'https://i.imgur.com/RQL19O6.jpeg',
      'https://i.imgur.com/kTPCFG2.jpeg',
      'https://i.imgur.com/gxaUWSF.jpeg',
    ],
    creationAt: '2023-10-07T19:16:30.000Z',
    updatedAt: '2023-10-07T19:16:30.000Z',
    category: {
      id: 2,
      name: 'Electronics',
      image: 'https://i.imgur.com/rDC2jWQ.jpeg',
      creationAt: '2023-10-07T19:16:30.000Z',
      updatedAt: '2023-10-07T19:16:30.000Z',
    },
  },
  {
    id: 19,
    title: 'Luxurious Cotton Table',
    price: 685,
    description:
      'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
    images: [
      'https://i.imgur.com/OARGZQW.jpeg',
      'https://i.imgur.com/uDpzwEk.jpeg',
      'https://i.imgur.com/s8WRA2O.jpeg',
    ],
    creationAt: '2023-10-07T19:16:30.000Z',
    updatedAt: '2023-10-07T19:16:30.000Z',
    category: {
      id: 1,
      name: 'Clothes',
      image: 'https://i.imgur.com/RQL19O6.jpeg',
      creationAt: '2023-10-07T19:16:30.000Z',
      updatedAt: '2023-10-07T19:16:30.000Z',
    },
  },
  {
    id: 20,
    title: 'Rustic Cotton Computer',
    price: 928,
    description:
      'Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals',
    images: [
      'https://i.imgur.com/uDpzwEk.jpeg',
      'https://i.imgur.com/Y5gHJMd.jpeg',
      'https://i.imgur.com/nCqOV7L.jpeg',
    ],
    creationAt: '2023-10-07T19:16:30.000Z',
    updatedAt: '2023-10-07T19:16:30.000Z',
    category: {
      id: 1,
      name: 'Clothes',
      image: 'https://i.imgur.com/RQL19O6.jpeg',
      creationAt: '2023-10-07T19:16:30.000Z',
      updatedAt: '2023-10-07T19:16:30.000Z',
    },
  },
  {
    id: 21,
    title: 'Oriental Fresh Chicken',
    price: 977,
    description:
      'The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality',
    images: [
      'https://i.imgur.com/00qWleT.jpeg',
      'https://i.imgur.com/RLnJJyQ.jpeg',
      'https://i.imgur.com/aCDF0yh.jpeg',
    ],
    creationAt: '2023-10-07T19:16:30.000Z',
    updatedAt: '2023-10-07T19:16:30.000Z',
    category: {
      id: 3,
      name: 'Furniture',
      image: 'https://i.imgur.com/RQL19O6.jpeg',
      creationAt: '2023-10-07T19:16:30.000Z',
      updatedAt: '2023-10-07T19:16:30.000Z',
    },
  },
  {
    id: 22,
    title: 'Licensed Concrete Chair',
    price: 667,
    description:
      'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
    images: [
      'https://i.imgur.com/O1LUkwy.jpeg',
      'https://i.imgur.com/imQx3Az.jpeg',
      'https://i.imgur.com/GwylUgV.jpeg',
    ],
    creationAt: '2023-10-07T19:16:30.000Z',
    updatedAt: '2023-10-07T19:16:30.000Z',
    category: {
      id: 3,
      name: 'Furniture',
      image: 'https://i.imgur.com/RQL19O6.jpeg',
      creationAt: '2023-10-07T19:16:30.000Z',
      updatedAt: '2023-10-07T19:16:30.000Z',
    },
  },
  {
    id: 23,
    title: 'Ergonomic Granite Bike',
    price: 309,
    description: 'The Football Is Good For Training And Recreational Purposes',
    images: [
      'https://i.imgur.com/uDpzwEk.jpeg',
      'https://i.imgur.com/RQL19O6.jpeg',
      'https://i.imgur.com/s8WRA2O.jpeg',
    ],
    creationAt: '2023-10-07T19:16:30.000Z',
    updatedAt: '2023-10-07T19:16:30.000Z',
    category: {
      id: 1,
      name: 'Clothes',
      image: 'https://i.imgur.com/RQL19O6.jpeg',
      creationAt: '2023-10-07T19:16:30.000Z',
      updatedAt: '2023-10-07T19:16:30.000Z',
    },
  },
  {
    id: 357,
    title: 'Creative harmonious living',
    price: 1021,
    description: 'RAOUF Products are all made to standard sizes so that you can mix and match them freely.',
    images: [
      'https://i.ibb.co/x7mxJ3X/banner.jpg',
    ],
    creationAt: '2023-10-08T16:05:52.000Z',
    updatedAt: '2023-10-08T16:05:52.000Z',
    category: {
      id: 4,
      name: 'Shoes',
      image: 'https://i.imgur.com/RQL19O6.jpeg',
      creationAt: '2023-10-07T19:16:30.000Z',
      updatedAt: '2023-10-07T19:16:30.000Z',
    },
  },
  {
    id: 356,
    title: 'Comfortable & Elegante Living',
    price: 11,
    description: 'RAOUF Products are all made to standard sizes so that you can mix and match them freely.banner2',
    images: [
      'https://i.ibb.co/WtGxghw/banner1.jpg',
    ],
    creationAt: '2023-10-08T16:05:52.000Z',
    updatedAt: '2023-10-08T16:05:52.000Z',
    category: {
      id: 4,
      name: 'Shoes',
      image: 'https://i.imgur.com/RQL19O6.jpeg',
      creationAt: '2023-10-07T19:16:30.000Z',
      updatedAt: '2023-10-07T19:16:30.000Z',
    },
  },
];

export default Products;
