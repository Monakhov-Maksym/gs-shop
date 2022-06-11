import styled from 'styled-components';

export interface ButtonProps {
  type?: string;
  isActive?: boolean;
  withoutBorder?: boolean;
}

export const WButton = styled.div<ButtonProps>`
  padding: 6px;
  margin: 0 4px;
  cursor: pointer;
  border-radius: 10px;
  text-align: center;
  transition: all ease 0.2s;

  border: 1px solid ${({ type, theme }) => (type === 'delete' ? theme.colors.red400 : theme.colors.green200)};

  background: ${({ isActive, theme }) => isActive && theme.colors.green200};

  &:hover {
    color: white !important;

    background: ${({ type, theme }) => (type === 'delete' ? theme.colors.red400 : theme.colors.green200)};
    border: 1px solid ${({ type, theme }) => (type === 'delete' ? theme.colors.red400 : theme.colors.green200)};
  }

  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Chrome/Safari/Opera */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
`;
