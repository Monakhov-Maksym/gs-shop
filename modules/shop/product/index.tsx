import React from 'react';
import DetailsPresentation from '@md-modules/shop/product/layers/presentation';
import { ProductAPIContextProvider } from '@md-modules/shop/product/layers/api/product';
import { ProductBLContextProvider } from '@md-modules/shop/product/layers/business';

const DetailsContainer = () => {
  return (
    <ProductAPIContextProvider>
      <ProductBLContextProvider>
        <DetailsPresentation />
      </ProductBLContextProvider>
    </ProductAPIContextProvider>
  );
};

export default DetailsContainer;
