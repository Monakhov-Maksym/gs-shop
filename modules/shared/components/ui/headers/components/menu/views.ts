import styled from 'styled-components';

export const WHeader = styled.div`
  width: 100%;
  color: white;
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: space-between;

  background: ${({ theme }) => theme.colors.blue400};
`;
