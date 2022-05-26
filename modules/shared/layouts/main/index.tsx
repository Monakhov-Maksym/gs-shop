import * as React from 'react';
import Header from '@md-ui/headers';
// view components
import { ChildrenWrapper, Wrapper } from './views';
import CartContextProvider from '@md-modules/shared/providers/cart-context';
import CartContainer from '@md-modules/shop/cart';

const MainLayout: React.FC = ({ children }) => (
  <Wrapper>
    <CartContextProvider>
      <Header />

      <ChildrenWrapper>{children}</ChildrenWrapper>

      <CartContainer />
    </CartContextProvider>
  </Wrapper>
);

export { MainLayout };
