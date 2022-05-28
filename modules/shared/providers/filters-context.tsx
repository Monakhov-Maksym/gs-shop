import React from 'react';
// types
import { Categories } from '@md-modules/shared/mock';

export interface Filters {
  search?: string;
  onlyNew?: boolean;
  onlyStock?: boolean;
  category?: Categories;
}

interface Context {
  filters: Filters;
  onFilter: (filters: Filters) => void;
}

export const FiltersContext = React.createContext<Context>({
  filters: {
    search: '',
    onlyNew: false,
    onlyStock: false,
    category: 'ALL'
  },
  onFilter: () => {}
});

const FiltersContextProvider: React.FC = ({ children }) => {
  const [filters, setFilters] = React.useState<Filters>({
    search: '',
    onlyNew: false,
    onlyStock: false,
    category: 'ALL'
  });

  const onFilter = (filters: Filters) => setFilters((prevState) => ({ ...prevState, ...filters }));

  return <FiltersContext.Provider value={{ filters, onFilter }}>{children}</FiltersContext.Provider>;
};

export default FiltersContextProvider;
