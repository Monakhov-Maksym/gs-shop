import * as React from 'react';
// utils
import { useQuery } from '@md-utils/mock/query';
import { useLocalStorage } from '@md-utils/localstorage';
// Context
import { FiltersContext } from '@md-modules/shared/providers/filters-context';
// mock
import { Product } from '@md-modules/shared/mock';
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
  const { getTrips } = useLocalStorage<Product>();

  const { data, loading } = useQuery(getTrips());
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
