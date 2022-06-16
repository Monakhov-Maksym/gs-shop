import React from 'react';
// view
import { Close, ContentWrapper, HeaderWrapper, ModalComponent, Title } from './views';

// types
interface Props {
  title?: string;
  isOpen: boolean;
  whiteBG?: boolean;
  maxWidth?: number;
  maxHeight?: number;
  closeButton?: boolean;
  toggleModal: () => void;
}

const Modal: React.FC<Props> = ({
  toggleModal,
  isOpen,
  title,
  maxWidth,
  children,
  maxHeight,
  whiteBG = false,
  closeButton = false
}) => {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <ModalComponent
      isOpen={isOpen}
      maxWidth={maxWidth}
      ariaHideApp={false}
      closeTimeoutMS={300}
      maxHeight={maxHeight}
      onRequestClose={toggleModal}
    >
      {(closeButton || title) && (
        <HeaderWrapper isOnlyCloseButton={closeButton && !title} whiteBG={whiteBG} hasTitle={!!title}>
          {title && <Title>{title}</Title>}
          {closeButton && <Close src='/static/images/close.svg' onClick={toggleModal} />}
        </HeaderWrapper>
      )}

      <ContentWrapper whiteBG={whiteBG} hasTitle={!!title} hasCloseButton={closeButton}>
        {children}
      </ContentWrapper>
    </ModalComponent>
  );
};

export default Modal;
