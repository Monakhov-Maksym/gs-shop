import React, { ChangeEvent } from 'react';
// hooks
import { useRouter } from 'next/router';
// context
import { CartContext } from '@md-modules/shared/providers/cart-context';
import { FiltersContext } from '@md-modules/shared/providers/filters-context';
// types
import { Categories } from '@md-modules/shared/mock';
// components
import Button from '@md-ui/button/main';
import Menu from '@md-ui/headers/components/menu';
// views
import { WHeader, WCart, SearchInput, Logo, Wrapper, Image } from './views';
// utils
import { cookiesManager } from '@md-utils/cookies';

interface Props {
  hideSignInButton?: boolean;
}

const FACEBOOK_LINK = 'https://www.facebook.com/';
const INSTAGRAM_LINK = 'https://www.instagram.com/';

const Header: React.FC<Props> = ({ hideSignInButton }) => {
  const { push } = useRouter();
  const { removeToken } = cookiesManager();
  const { onFilter, filters } = React.useContext(FiltersContext);
  const { countItemCart, setActiveCart } = React.useContext(CartContext);

  const goToHomePage = () => push('/');

  const onSearch = (event: ChangeEvent<HTMLInputElement>) => onFilter({ search: event.target.value });
  const onOnlyNew = () => onFilter({ onlyNew: !filters.onlyNew, onlyStock: false });
  const onOnlyStock = () => onFilter({ onlyNew: false, onlyStock: !filters.onlyStock });
  const onSelectCategory = (category: Categories) => onFilter({ category });

  const onSingIn = () => push('/sign-in');
  const onLogout = () => {
    push('/');

    removeToken();
  };

  const onClickLink = (link: string) => () => window.open(link);

  return (
    <Wrapper>
      <WHeader>
        <Logo onClick={goToHomePage}>Shop</Logo>

        <SearchInput onChange={onSearch} placeholder='Search' />

        <Image src='/static/images/instagram.png' onClick={onClickLink(INSTAGRAM_LINK)} />
        <Image src='/static/images/facebook.png' onClick={onClickLink(FACEBOOK_LINK)} />

        <WCart onClick={() => setActiveCart(true)}>Cart: {countItemCart}</WCart>

        {!hideSignInButton && <Button title='Sign in' onClick={onSingIn} />}
        {hideSignInButton && <Button title='Logout' onClick={onLogout} />}
      </WHeader>
      <Menu filters={filters} onOnlyNew={onOnlyNew} onOnlyStock={onOnlyStock} onSelectCategory={onSelectCategory} />
    </Wrapper>
  );
};

export default Header;
