import React, { useContext } from 'react';
//context
import { CartContext } from '../../../../shared/providers/cart-context';
import { ProductsAPIContext } from '@md-modules/shop/products/layers/api/products';
// mock
import { Product } from '@md-modules/shared/mock';

interface Context {
  addToCart: (id: number | undefined) => void;
  productsList: Product[];
}

export const ProductsBLContext = React.createContext<Context>({} as Context);

const ProductsBLContextProvider: React.FC = ({ children }) => {
  const { addProductToCart } = useContext(CartContext);
  const { products } = useContext(ProductsAPIContext);

  const productsList = React.useMemo<Product[]>(() => {
    if (!products) {
      return [];
    }
    return products;
  }, [products]);

  const addToCart = (id?: number) => {
    const product = productsList.find((e) => e.id === id) as Product;

    addProductToCart(product);
  };

  return (
    <ProductsBLContext.Provider
      value={{
        addToCart,
        productsList
      }}
    >
      {children}
    </ProductsBLContext.Provider>
  );
};

export default ProductsBLContextProvider;
