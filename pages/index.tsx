import * as React from 'react';
import { ProductsContainer } from '@md-modules/shop/products';
import { MainLayout } from '@md-modules/shared/layouts/main';

const Home = () => (
  <MainLayout>
    <ProductsContainer />
  </MainLayout>
);

export default Home;
