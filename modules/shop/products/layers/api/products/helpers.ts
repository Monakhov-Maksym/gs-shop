import { Product } from '@md-modules/shared/mock';
import { Filters } from '@md-modules/shared/providers/filters-context';

export const getFilteredItems = (items: Product[], filters: Filters) => {
  let filteredItems = items;

  if (filters.onlyNew) {
    filteredItems = items.filter((item) => item.isNew);
  }

  if (filters.onlyStock) {
    filteredItems = items.filter((item) => item.isStock);
  }

  switch (filters.category) {
    case 'PHONES':
      filteredItems = filteredItems.filter((item) => item.category === 'PHONES');
      break;
    case 'CAMERAS':
      filteredItems = filteredItems.filter((item) => item.category === 'CAMERAS');
      break;
    case 'NOTEBOOKS':
      filteredItems = filteredItems.filter((item) => item.category === 'NOTEBOOKS');
  }

  return filteredItems?.filter((item) => (filters.search ? new RegExp(filters.search, 'gi').test(item.name) : true));
};
