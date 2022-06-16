import styled from 'styled-components';

export const Icon = styled.img`
  width: 34px;
  height: 34px;
  cursor: pointer;
`;

export const IconWrapper = styled.div<{ isPlayerLoading: boolean }>`
  bottom: 196px;
  width: 800px;
  padding: 10px 0;
  position: absolute;
  border-radius: 0 0 26px 26px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px -48px 30px -28px inset;

  ${({ theme }) => theme.templates.centerContent}
  display: ${({ isPlayerLoading }) => (isPlayerLoading ? 'none' : 'flex')};
`;
