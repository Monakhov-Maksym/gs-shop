import React from 'react';
// hooks
import { useRouter } from 'next/router';
import { useLocalStorage } from '@md-utils/localstorage';
//query
import { useQuery } from '@md-utils/mock/query';
//mock
import { Product } from '@md-modules/shared/mock';

interface Context {
  product: Product | undefined;
  isLoading: boolean;
}

const ProductAPIContext = React.createContext<Context>({
  product: undefined,
  isLoading: false
});

const ProductAPIContextProvider: React.FC = ({ children }) => {
  // make api call here
  const router = useRouter();
  const { getTrips } = useLocalStorage<Product>();
  const { id } = router.query;
  const { data, loading } = useQuery(getTrips()?.find((e) => e.id.toString() == id));

  return (
    <ProductAPIContext.Provider
      value={{
        product: data,
        isLoading: loading
      }}
    >
      {children}
    </ProductAPIContext.Provider>
  );
};

export { ProductAPIContextProvider, ProductAPIContext };
