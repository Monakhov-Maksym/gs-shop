import styled from 'styled-components';

interface Props {
  activeCart: boolean;
}

export const ChildrenWrapper = styled.div`
  overflow-y: auto;
  width: 100%;
  height: 100%;
`;

export const MCWrapper = styled.div`
  background: #fafafa;
  padding: 10px;

  height: calc(100% - 300px);
  transition: all 0.4s;
  border-radius: 10px;
  position: fixed;
`;

export const MWrapper = styled.div<Props>`
  overflow: hidden;
  height: 100%;
  width: 100%;

  background-color: rgb(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ease 0.5ms;

  opacity: ${({ activeCart }) => (activeCart ? '1' : '0')};
  pointer-events: ${({ activeCart }) => (activeCart ? 'all' : 'none')};
`;

export const Amount = styled.p`
  text-align: center;
  font-size: 16px;
  padding: 6px;

  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.gray600};
`;
