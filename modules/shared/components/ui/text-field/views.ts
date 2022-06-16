import styled from 'styled-components';

interface InputProps {
  isError: boolean;
}

export const TextInput = styled.input<InputProps>`
  border-radius: 10px;
  font-size: 14px;
  font-weight: 400;
  height: 56px;
  outline: none;
  padding: 12px;
  width: 100%;

  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme, isError }) => (isError ? theme.colors.red500 : theme.colors.gray400)};
  border: 1px solid ${({ isError, theme }) => (isError ? theme.colors.red500 : theme.colors.gray100)};

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Wrapper = styled.div`
  flex: 1;
  position: relative;
`;
