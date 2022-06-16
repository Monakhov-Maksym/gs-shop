import * as React from 'react';
// components
import Header from '@md-ui/headers';
import CartContextProvider from '@md-modules/shared/providers/cart-context';
import CartContainer from '@md-modules/shop/cart';
import FiltersContextProvider from '@md-modules/shared/providers/filters-context';
// view components
import { ChildrenWrapper, Wrapper } from './views';

interface Props {
  hideSignInButton?: boolean;
}

const MainLayout: React.FC<Props> = ({ children, hideSignInButton }) => {
  return (
    <Wrapper>
      <FiltersContextProvider>
        <CartContextProvider>
          <Header hideSignInButton={hideSignInButton} />

          <ChildrenWrapper>{children}</ChildrenWrapper>

          <CartContainer />
        </CartContextProvider>
      </FiltersContextProvider>
    </Wrapper>
  );
};

export { MainLayout };
