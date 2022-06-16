import React from 'react';
// presets
import { buttonData } from '@md-ui/button/icon-button/presets';
// views
import { Wrapper } from './views';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  preset?: 'trash' | 'bluePencil';
}

const IconButton: React.FC<Props> = ({ preset = 'bluePencil', ...rest }) => (
  <Wrapper data-tip='' data-for={buttonData[preset].title} preset={preset} {...rest}>
    <img src={buttonData[preset].url} alt='button-icon' />
  </Wrapper>
);

export default IconButton;
