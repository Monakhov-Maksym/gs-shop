import styled from 'styled-components';
import { StylesConfig } from 'react-select';
import { colors } from '@md-styles/styled/theme';
import { OptionType } from '@md-ui/headers/components/menu/constants';

export const WHeader = styled.div`
  width: 100%;
  color: white;
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: space-between;

  background: ${({ theme }) => theme.colors.green200};
`;

export const getSelectStyles = (): StylesConfig<OptionType, any> => {
  return {
    container: (provided) => ({
      ...provided,
      minWidth: '200px',
      outline: 'none'
    }),
    control: (provided) => ({
      ...provided,
      boxShadow: 'none',
      outline: 'none',
      height: '100%',
      transition: 'border none',
      minHeight: 'unset',
      backgroundColor: colors.white,
      borderRadius: '8px'
    }),
    multiValue: (provided) => ({
      ...provided,
      padding: '5px',
      borderRadius: '4px'
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: 'none'
    }),
    option: (provided) => ({
      ...provided,
      color: colors.black,
      padding: '16px',
      fontSize: '14px'
    }),
    valueContainer: (provided) => ({
      ...provided,
      paddingLeft: '12px'
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      cursor: 'pointer',
      svg: {
        transform: 'rotate(270deg)',
        width: '24px',
        height: '24px'
      }
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';

      return {
        ...provided,
        opacity,
        transition,
        fontWeight: 400,
        fontSize: '14px',
        color: colors.gray500
      };
    }
  };
};
