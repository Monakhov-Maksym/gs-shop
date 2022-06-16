export type Categories = 'PHONES' | 'NOTEBOOKS' | 'CAMERAS' | 'ALL';

export interface Product {
  name: string;
  id: number | string;
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
    price: 257,
    isNew: false,
    isStock: true,
    category: 'PHONES',
    name: 'Xiaomi Redmi Note 11 4/128 Gr. Gray(2201117TY)',
    img: 'https://media.didi.ua/images/catalog/product_gallery/thumb/aX6z5ctsW0yZ@2x.jpg',
    descriptions:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus culpa dicta doloribus laborum magnam nisi, porro possimus quia quod? A accusantium deleniti doloribus est maxime minus, obcaecati saepe sapiente sit.'
  },
  {
    id: 2,
    isNew: true,
    isStock: false,
    name: 'OnePlus 9 12/256GB Winter Mist',
    category: 'PHONES',
    price: 599,
    img: 'https://media.didi.ua/images/catalog/product_gallery/thumb/xb10ALrKReqq@2x.jpg',
    descriptions: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, totam.'
  },
  {
    id: 3,
    isNew: false,
    isStock: false,
    name: 'Sony DSC-WX500',
    price: 485,
    category: 'CAMERAS',
    img:
      'https://i.allo.ua/media/catalog/product/cache/3/image/524x494/602f0fa2c1f0d1ba5e241f914e856ff9/e/r/er59uw5kcc1.jpg',
    descriptions: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, totam.'
  },
  {
    id: 4,
    isNew: false,
    isStock: true,
    name: 'Sony DSC-H300 Black',
    price: 457,
    category: 'CAMERAS',
    img:
      'https://i.allo.ua/media/catalog/product/cache/3/image/524x494/602f0fa2c1f0d1ba5e241f914e856ff9/import/205738218678863.jpg',
    descriptions: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, totam.'
  },
  {
    id: 5,
    isNew: true,
    isStock: true,
    name: 'Lenovo V17 G2 (82NX00DRRA) Iron Grey',
    price: 457,
    category: 'NOTEBOOKS',
    img:
      'https://i.allo.ua/media/catalog/product/cache/3/image/524x494/602f0fa2c1f0d1ba5e241f914e856ff9/import/229779029719407.jpg',
    descriptions: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, totam.'
  },
  {
    id: 6,
    isNew: false,
    isStock: false,
    name: 'Ноутбук Lenovo V15 (82C500NRRA)',
    price: 542,
    category: 'NOTEBOOKS',
    img:
      'https://i.allo.ua/media/catalog/product/cache/3/image/524x494/602f0fa2c1f0d1ba5e241f914e856ff9/f/i/file_53.jpeg',
    descriptions: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, totam.'
  },
  {
    id: 7,
    isNew: true,
    isStock: false,
    name: 'Lenovo IdeaPad Gaming 3-15IMH05 (81Y400ERRA)',
    price: 1057,
    category: 'NOTEBOOKS',
    img:
      'https://i.allo.ua/media/catalog/product/cache/3/image/524x494/602f0fa2c1f0d1ba5e241f914e856ff9/n/x/nxn_result_58.jpg',
    descriptions: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, totam.'
  }
];
