import React from 'react';
//views
import { MWrapper, MCWrapper, ChildrenWrapper, Amount } from './views';

interface Props {
  activeCart: boolean;
  totalAmountItemCart: number;
  setActiveCart: (active: boolean) => void;
}

const Cart: React.FC<Props> = ({ totalAmountItemCart, activeCart, setActiveCart, children }) => {
  return (
    <MWrapper onClick={() => setActiveCart(false)} activeCart={activeCart}>
      <MCWrapper onClick={(event) => event.stopPropagation()}>
        <ChildrenWrapper>{children}</ChildrenWrapper>

        <Amount>Total amount: {totalAmountItemCart}</Amount>
      </MCWrapper>
    </MWrapper>
  );
};
export default Cart;
