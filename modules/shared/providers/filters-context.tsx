import React from 'react';
// types
import { Categories } from '@md-modules/shared/mock';

export interface Filters {
  search: string;
  onlyNew: boolean;
  onlyStock: boolean;
  category: Categories;
}

interface Context {
  filters: Filters;
}

export const FiltersContext = React.createContext<Context>({
  filters: {
    search: '',
    onlyNew: false,
    onlyStock: false,
    category: 'ALL'
  }
});

const CartContextProvider: React.FC = ({ children }) => {
  const [filters, setFilters] = React.useState<Filters>({
    search: '',
    onlyNew: false,
    onlyStock: false,
    category: 'ALL'
  });

  return <FiltersContext.Provider value={{ filters }}>{children}</FiltersContext.Provider>;
};

export default CartContextProvider;
