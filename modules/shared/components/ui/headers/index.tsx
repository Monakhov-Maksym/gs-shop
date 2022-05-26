import React, { useContext } from 'react';
// hooks
import { useRouter } from 'next/router';
// context
import { CartContext } from '@md-modules/shared/providers/cart-context';
// components
import Menu from '@md-ui/headers/components/menu';
import Button from '@md-ui/button/main';
// views
import { WHeader, WCart, SearchInput, Logo, SearchWrapper, Wrapper } from './views';

const Header = () => {
  const { push } = useRouter();
  const { countItemCart, setActiveCart } = useContext(CartContext);

  const goToHomePage = () => push('/');

  return (
    <Wrapper>
      <WHeader>
        <Logo onClick={goToHomePage}>Shop</Logo>

        <SearchWrapper>
          <SearchInput placeholder='Search' />
          <Button title='Search' />
        </SearchWrapper>

        <WCart onClick={() => setActiveCart(true)}>Cart: {countItemCart}</WCart>
      </WHeader>
      <Menu />
    </Wrapper>
  );
};

export default Header;
