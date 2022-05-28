import React from 'react';
// views
import { ButtonProps, WButton } from './views';

interface Props extends ButtonProps {
  title: string;
  onClick?: any;
  isActive?: boolean;
}

const Button: React.FC<Props> = ({ title, type, isActive, onClick }) => (
  <WButton isActive={isActive} onClick={onClick} type={type}>
    {title}
  </WButton>
);

export default Button;
