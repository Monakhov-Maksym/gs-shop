import { css } from 'styled-components';

export const iconButtonPresets = {
  bluePencil: css`
    background-color: ${({ theme }) => theme.colors.blue600};
  `,
  trash: css`
    background-color: ${({ theme }) => theme.colors.orange100};
  `
};

export const buttonData = {
  trash: { url: '/static/images/trash.svg', title: 'Remove' },
  bluePencil: { url: '/static/images/whitePencil.svg', title: 'Edit' }
};

export type IconButtonPresets = keyof typeof iconButtonPresets;
