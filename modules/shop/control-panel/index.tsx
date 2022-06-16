import React from 'react';
import ControlPanelPresentation from '@md-modules/shop/control-panel/layers/presentation';
import { ControlPanelAPIContextProvider } from '@md-modules/shop/control-panel/layers/api';

const ControlPanelContainer = () => (
  <ControlPanelAPIContextProvider>
    <ControlPanelPresentation />
  </ControlPanelAPIContextProvider>
);

export default ControlPanelContainer;
