import React, { useContext } from 'react';
import Cart from '@md-modules/shop/cart/components';
import CardForCart from '@md-modules/shop/cart/components/card';
//context
import { CartContext } from '@md-modules/shared/providers/cart-context';

const CartContainer = () => {
  const { activeCart, setActiveCart, cartProducts, deleteProductFromCart, totalAmountItemCart } = useContext(
    CartContext
  );

  // @ts-ignore
  return (
    <Cart activeCart={activeCart} setActiveCart={setActiveCart} totalAmountItemCart={totalAmountItemCart}>
      {cartProducts.map((element) => (
        <CardForCart deleteProductFromCart={deleteProductFromCart} key={element.id} {...element} />
      ))}
    </Cart>
  );
};

export default CartContainer;
