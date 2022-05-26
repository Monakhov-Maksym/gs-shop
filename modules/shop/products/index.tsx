import React from 'react';
import ProductsPresentation from '@md-modules/shop/products/layers/presentation';
import ProductsBLContextProvider from '@md-modules/shop/products/layers/businnes';
import { ProductsAPIContextProvider } from '@md-modules/shop/products/layers/api/products';

const ProductsContainer = () => {
  return (
    <ProductsAPIContextProvider>
      <ProductsBLContextProvider>
        <ProductsPresentation />
      </ProductsBLContextProvider>
    </ProductsAPIContextProvider>
  );
};

export { ProductsContainer };
