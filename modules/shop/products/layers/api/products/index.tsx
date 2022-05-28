import * as React from 'react';
// utils
import { useQuery } from '@md-utils/mock/query';
// Context
import { FiltersContext } from '@md-modules/shared/providers/filters-context';
// mock
import { Product, products } from '@md-modules/shared/mock';
// utils
import { getFilteredItems } from '@md-modules/shop/products/layers/api/products/helpers';

interface Context {
  products?: Product[];
  isLoading: boolean;
}

const ProductsAPIContext = React.createContext<Context>({
  products: [],
  isLoading: false
});

const ProductsAPIContextProvider: React.FC = ({ children }) => {
  // make api call here
  const { data, loading } = useQuery(products);
  const { filters } = React.useContext(FiltersContext);

  const filteredData = data ? getFilteredItems(data, filters) : [];

  return (
    <ProductsAPIContext.Provider
      value={{
        products: filteredData,
        isLoading: loading
      }}
    >
      {children}
    </ProductsAPIContext.Provider>
  );
};

export { ProductsAPIContextProvider, ProductsAPIContext };
