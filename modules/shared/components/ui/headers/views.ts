import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  z-index: 999;
  top: 0;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
`;

export const WHeader = styled.div`
  width: 100%;
  color: white;
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: space-between;

  background: ${({ theme }) => theme.colors.blue600};
`;

export const Logo = styled.h2`
  margin: 0 20px 0 0;
  cursor: pointer;
`;

export const WCart = styled.p`
  margin: 0 0 0 20px;
  min-width: 60px;
`;

export const SearchInput = styled.input`
  border-radius: 10px;
  font-size: 14px;
  margin-right: 8px;
  font-weight: 400;
  max-width: 800px;
  height: 30px;
  outline: none;
  padding: 12px;
  width: 100%;

  border: 1px solid ${({ theme }) => theme.colors.gray100};
  color: ${({ theme }) => theme.colors.gray500};

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
