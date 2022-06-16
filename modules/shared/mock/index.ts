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
    img:
      'https://i.allo.ua/media/catalog/product/cache/3/image/524x494/602f0fa2c1f0d1ba5e241f914e856ff9/k/7/k724ef_1gfghj_2_1_1.jpg',
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
    img:
      'https://i.allo.ua/media/catalog/product/cache/3/image/524x494/602f0fa2c1f0d1ba5e241f914e856ff9/f/c/fc42159a32ed465640f54cfc5cf404a3_result_6.jpg',
    descriptions: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, totam.'
  },
  {
    id: 3,
    isNew: false,
    isStock: false,
    name: 'Екшн-камера GoPro Hero 9 Black',
    price: 485,
    category: 'CAMERAS',
    img:
      'https://i.allo.ua/media/catalog/product/cache/3/image/524x494/602f0fa2c1f0d1ba5e241f914e856ff9/3/9/39927230_si10010_hero9black_-90_nofingers_master.jpg',
    descriptions: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum, totam.'
  },
  {
    id: 4,
    isNew: false,
    isStock: true,
    name: 'Екшн-камера GoPro Hero 8 Black Holiday Bundle (CHDRB-801)',
    price: 457,
    category: 'CAMERAS',
    img:
      'https://i.allo.ua/media/catalog/product/cache/3/image/524x494/602f0fa2c1f0d1ba5e241f914e856ff9/g/o/gopro_hero_8_black_holiday_bundle_chdrb-801_2.jpg',
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
