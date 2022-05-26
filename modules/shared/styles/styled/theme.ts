import { DefaultTheme, css } from 'styled-components';

export const colors = {
  // yellow
  yellow100: '#fff5cc',
  yellow300: '#FFE9B7',
  yellow400: '#ffd029',
  yellow600: '#ffb200',
  // blue
  blue50: '#E2F1FF',
  blue100: '#ccf8fe',
  blue150: '#D6FAFF',
  blue300: '#02a0fc',
  blue350: '#8e83ff',
  blue400: '#5856d6',
  blue600: '#102da4',
  // orange
  orange100: '#ffe5d3',
  orange400: '#FF8540',
  // green
  green100: '#e2fbd7',
  green400: '#34b53a',
  green600: '#00AEAE',
  // purple
  purple100: '#e7edff',
  purple150: '#F1F0FF',
  purple200: '#dad7fe',
  purple400: '#9b51e0',
  purple500: '#6868F6',
  purple600: '#6853e8',
  // gray
  gray100: '#f8f8f8',
  gray150: '#f2f2f2',
  gray155: '#f1f1f1',
  gray160: '#DCDCDC',
  gray180: '#c6c6c6',
  gray190: '#bdbdbd',
  gray200: '#ccc',
  gray300: '#999',
  gray350: '#919191',
  gray400: '#828282',
  gray500: '#5A5A5A',
  gray600: '#494949',
  // red
  red100: '#ffe5d3',
  red200: '#FFCCCC',
  red300: '#eb5757',
  red400: '#ff3a29',
  // pink
  pink100: '#FFDEF0',
  pink400: '#FE008B',
  // other
  white: '#fff',
  black: '#000',
  transparent: 'rgba(0,0,0,0)'
};

export const templates = {
  absolute: css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  `,
  centerContent: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  centerItems: css`
    display: flex;
    align-items: center;
  `,
  hoverEffect: css`
    &:hover {
      opacity: 0.5;
      transition: opacity 0.3s ease;
    }
  `,
  shadow: css`
    box-shadow: 0 4px 32px 0 rgba(232, 232, 235, 0.6);
  `,
  ellipsis: css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
  dynamicFont: (s: { minSize: number; maxSize: number; minViewport: number; maxViewport: number }) => css`
    font-size: ${() =>
      `calc(${s.minSize}px + (${s.maxSize} - ${s.minSize}) * (100vw - ${s.minViewport}px) / (${s.maxViewport} - ${s.minViewport}))`};
  `
};

export const dimensions = {
  pageMaxWidth: 1071
};

export const theme: DefaultTheme = {
  colors,
  templates,
  dimensions
};
