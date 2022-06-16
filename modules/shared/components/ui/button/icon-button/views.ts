import styled from 'styled-components';
import { IconButtonPresets, iconButtonPresets } from '@md-ui/button/icon-button/presets';

export const Wrapper = styled.button<{ preset?: IconButtonPresets }>`
  border-radius: 50%;
  border: none;
  cursor: pointer;
  height: 28px;
  margin-left: 6px;
  transition: opacity 0.3s ease-in-out;
  width: 28px;

  &:hover {
    opacity: 0.7;
  }

  ${({ theme }) => theme.templates.centerContent}
  ${({ preset }) => preset && iconButtonPresets[preset]};
`;
