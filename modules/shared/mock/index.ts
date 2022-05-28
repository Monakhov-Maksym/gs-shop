export type Categories = 'PHONES' | 'NOTEBOOKS' | 'WATCHES' | 'ALL';

export interface Product {
  name: string;
  id: number;
  price: number;
  img: string;
  descriptions: string;
  category: Categories;
  isNew: boolean;
  isStock: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    price: 1100,
    isNew: false,
    isStock: true,
    category: 'PHONES',
    name: 'Apple iPhone 11 Pro Max 256GB Gold',
    img: 'https://www.webphone.store/wp-content/uploads/2020/04/apple-iphone-11-pro-64gb-oro.gif',
    descriptions:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa dicta doloribus laborum magnam nisi, porro possimus quia quod? A accusantium deleniti doloribus est maxime minus, obcaecati saepe sapiente sit.'
  },
  {
    id: 2,
    isNew: true,
    isStock: false,
    name: 'Apple iPhone 12 128GB Blue',
    category: 'PHONES',
    price: 720,
    img: 'https://www.webphone.store/wp-content/uploads/2020/10/apple-iphone-12-128gb-blau.gif',
    descriptions: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, totam.'
  },
  {
    id: 3,
    isNew: false,
    isStock: false,
    name: 'Apple Watch SE Black 40mm Sport Band Black',
    price: 299,
    category: 'WATCHES',
    img: 'https://www.webphone.store/wp-content/uploads/2020/10/apple-watch-se-space-gray-44mm-sport-band-black.gif',
    descriptions: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, totam.'
  },
  {
    id: 4,
    isNew: false,
    isStock: true,
    name: 'Apple Watch SE Gold 40mm Sport Band Pink Sand',
    price: 314,
    category: 'WATCHES',
    img: 'https://www.webphone.store/wp-content/uploads/2020/10/apple-watch-se-silver-sport-band-pink-sand.gif',
    descriptions: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, totam.'
  },
  {
    id: 5,
    isNew: true,
    isStock: true,
    name: 'A laptop Apple MacBook Pro 14” Space Gray 2021 (MKGP3)',
    price: 1700,
    category: 'NOTEBOOKS',
    img: 'https://media.didi.ua/images/catalog/product_gallery/thumb/ZMQCdM8RKRFF.jpg',
    descriptions: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, totam.'
  },
  {
    id: 6,
    isNew: false,
    isStock: false,
    name: 'A laptop Apple MacBook Pro 13" Space Gray Late 2020 (MYD82)',
    price: 1220,
    category: 'NOTEBOOKS',
    img: 'https://media.didi.ua/images/catalog/product_gallery/thumb/svq6Jf7LF0DH.jpg',
    descriptions: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, totam.'
  }
];

export const CartProducts = [];
