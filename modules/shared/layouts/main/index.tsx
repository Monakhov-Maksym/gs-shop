import * as React from 'react';
import Header from '@md-ui/headers';
// view components
import { ChildrenWrapper, Wrapper } from './views';
import CartContextProvider from '@md-modules/shared/providers/cart-context';
import CartContainer from '@md-modules/shop/cart';
import FiltersContextProvider from '@md-modules/shared/providers/filters-context';

const MainLayout: React.FC = ({ children }) => (
  <Wrapper>
    <FiltersContextProvider>
      <CartContextProvider>
        <Header />

        <ChildrenWrapper>{children}</ChildrenWrapper>

        <CartContainer />
      </CartContextProvider>
    </FiltersContextProvider>
  </Wrapper>
);

export { MainLayout };
