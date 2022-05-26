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

  const productsListComponents = productsList.map((element) => (
    <ProductsCard key={element.id} img={element.img} name={element.name} price={element.price} id={element.id} />
  ));

  return (
    <Wrapper>
      <ContentLoader isLoading={isLoading}>
        <SliderWrapper>
          <Slider items={productsListComponents} />
        </SliderWrapper>

        <ProductsContainer>{productsListComponents}</ProductsContainer>
      </ContentLoader>
    </Wrapper>
  );
};

export default ProductsPresentation;
