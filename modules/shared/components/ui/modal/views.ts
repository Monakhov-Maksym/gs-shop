import styled from 'styled-components';
import ReactModal from 'react-modal';

interface Props {
  maxWidth?: number;
  maxHeight?: number;
}

export const ModalComponent = styled(ReactModal)<Props>`
  top: 50%;
  left: 50%;
  overflow: hidden;
  position: absolute;
  border-radius: 10px;

  width: calc(100% - 100px);
  height: calc(100% - 100px);
  transform: translate(-50%, -50%);

  max-width: ${({ maxWidth }) => maxWidth || 1050}px;
  max-height: ${({ maxHeight }) => maxHeight || 600}px;
  background: ${({ theme }) => theme.colors.gray100};

  @media (max-width: 768px) {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0;
    max-width: unset;
    max-height: unset;
    transform: none;
  }
`;

export const HeaderWrapper = styled.div<{ whiteBG: boolean; hasTitle: boolean; isOnlyCloseButton: boolean }>`
  width: 100%;
  position: relative;
  padding-bottom: ${({ hasTitle }) => !hasTitle && '10px'};

  background: ${({ theme, whiteBG }) => (whiteBG ? theme.colors.white : theme.colors.gray100)};

  display: flex;
  align-items: flex-start;
  justify-content: ${({ isOnlyCloseButton }) => (isOnlyCloseButton ? 'flex-end' : 'space-between')};
`;

export const ContentWrapper = styled.div<{ hasCloseButton: boolean; hasTitle: boolean; whiteBG: boolean }>`
  height: calc(100% - ${({ hasCloseButton, hasTitle }) => (hasTitle ? '70' : hasCloseButton ? '40' : 0)}px);
  overflow: auto;

  background-color: ${({ whiteBG, theme }) => whiteBG && theme.colors.white};
`;

export const Close = styled.img`
  cursor: pointer;
  margin: 10px 10px 0 0;
`;

export const Title = styled.p`
  font-size: 22px;
  font-weight: 500;
  margin: 20px;
`;
