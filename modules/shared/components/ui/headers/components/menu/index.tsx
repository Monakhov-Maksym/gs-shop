import React from 'react';
// components
import Select, { OnChangeValue } from 'react-select';
import Button from '@md-ui/button/main';
// types
import { Categories } from '@md-modules/shared/mock';
import { Filters } from '@md-modules/shared/providers/filters-context';
// constants
import { OPTIONS, OptionType } from '@md-ui/headers/components/menu/constants';
// views
import { getSelectStyles, WHeader } from '@md-ui/headers/components/menu/views';

interface Props {
  filters: Filters;
  onOnlyNew: () => void;
  onOnlyStock: () => void;
  onSelectCategory: (category: Categories) => void;
}

const Menu: React.FC<Props> = ({ onSelectCategory, onOnlyStock, onOnlyNew, filters }) => {
  const onSelect = (option: OptionType | OnChangeValue<OptionType, boolean> | null) => {
    if (!option) return;

    if (!Array.isArray(option)) {
      onSelectCategory((option as OptionType).value);
    }
  };

  return (
    <WHeader>
      <Select onChange={onSelect} options={OPTIONS} styles={getSelectStyles()} defaultValue={OPTIONS[0]} />
      <Button isActive={filters.onlyNew} title='New' onClick={onOnlyNew} />
      <Button isActive={filters.onlyStock} title='Stock' onClick={onOnlyStock} />
    </WHeader>
  );
};

export default Menu;
