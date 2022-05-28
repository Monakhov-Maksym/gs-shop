import { Categories } from '@md-modules/shared/mock';

export interface OptionType {
  label: string;
  value: Categories;
}

export const OPTIONS: OptionType[] = [
  { label: 'All', value: 'ALL' },
  { label: 'Phones', value: 'PHONES' },
  { label: 'Notebooks', value: 'NOTEBOOKS' },
  { label: 'Watches', value: 'WATCHES' }
];
