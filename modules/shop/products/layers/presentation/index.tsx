import React from 'react';
//context
import { ProductsBLContext } from '@md-modules/shop/products/layers/businnes';
import { ProductsAPIContext } from '@md-modules/shop/products/layers/api/products';
// components
import Slider from '@md-ui/slider/main';
import { ContentLoader } from '@md-ui/loaders/content-loader';
import ProductsCard from '@md-modules/shop/products/components/card';
// views
import { ProductsContainer, SliderWrapper, Wrapper } from './views';

const ProductsPresentation = () => {
  const { productsList } = React.useContext(ProductsBLContext);
  const { isLoading } = React.useContext(ProductsAPIContext);

  const productsListComponents = productsList.map((element) => <ProductsCard key={element.id} {...element} />);

  return (
    <ContentLoader isLoading={isLoading}>
      <Wrapper>
        <SliderWrapper>
          <Slider items={productsListComponents} />
        </SliderWrapper>

        <ProductsContainer>{productsListComponents}</ProductsContainer>
      </Wrapper>
    </ContentLoader>
  );
};

export default ProductsPresentation;
