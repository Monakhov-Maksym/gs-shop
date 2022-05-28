import React, { ChangeEvent } from 'react';
// hooks
import { useRouter } from 'next/router';
// context
import { CartContext } from '@md-modules/shared/providers/cart-context';
import { FiltersContext } from '@md-modules/shared/providers/filters-context';
// types
import { Categories } from '@md-modules/shared/mock';
// components
import Menu from '@md-ui/headers/components/menu';
// views
import { WHeader, WCart, SearchInput, Logo, Wrapper } from './views';

const Header = () => {
  const { push } = useRouter();
  const { onFilter, filters } = React.useContext(FiltersContext);
  const { countItemCart, setActiveCart } = React.useContext(CartContext);

  const goToHomePage = () => push('/');

  const onSearch = (event: ChangeEvent<HTMLInputElement>) => onFilter({ search: event.target.value });
  const onOnlyNew = () => onFilter({ onlyNew: !filters.onlyNew, onlyStock: false });
  const onOnlyStock = () => onFilter({ onlyNew: false, onlyStock: !filters.onlyStock });
  const onSelectCategory = (category: Categories) => onFilter({ category });

  return (
    <Wrapper>
      <WHeader>
        <Logo onClick={goToHomePage}>Shop</Logo>

        <SearchInput onChange={onSearch} placeholder='Search' />

        <WCart onClick={() => setActiveCart(true)}>Cart: {countItemCart}</WCart>
      </WHeader>
      <Menu filters={filters} onOnlyNew={onOnlyNew} onOnlyStock={onOnlyStock} onSelectCategory={onSelectCategory} />
    </Wrapper>
  );
};

export default Header;
