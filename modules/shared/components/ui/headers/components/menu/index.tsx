import React from 'react';
import { WHeader } from '@md-ui/headers/components/menu/views';
import Button from '@md-ui/button/main';

const Menu = () => {
  return (
    <WHeader>
      <Button title='Categories' />
      <Button title='New' />
      <Button title='Stock' />
      <Button title='About us' />
    </WHeader>
  );
};

export default Menu;
