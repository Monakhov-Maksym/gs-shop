import { createGlobalStyle } from 'styled-components';
import { colors } from '@md-styles/styled/theme';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html, body, #__next {
    height: 100%;
  }
  
  html {
    overflow-y: scroll;
    overflow-y: overlay;
  }
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    padding: 0;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    position: relative;
    font-size: 16px;
    background-color: ${colors.gray100};
  }

  .rbc-time-view .rbc-time-view-resources {
    width: 95vw
  }
  
  .sidebar-tooltip {
    opacity: 1 !important;
  }

  .rbc-time-content > .rbc-time-gutter {
    display: none;
  }

  .rbc-label {
    display: none;
  }

  .ProseMirror {
    min-height: 90%;
    outline: none;
    outline-offset: unset;
    padding: 15px 5px;
    
    p, h1, h2, h3 {
      margin: 0 !important;
    }
  }
  
  #nprogress {
    position: absolute;
    z-index: 999;


    .bar {
      height: 3px;
      background: ${colors.blue350};
      box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
    }
  }
  
  .rbc-event {
    margin: 4px 0;
    width: 100% !important;
    left: 0 !important;
    position: static !important;
  }

  .rbc-current-time-indicator {
    display: none;
  }

  .rbc-header {
    height: 40px;
    display: flex;
    padding: 10px 0;
    align-content: center;
    justify-content: center;
    border-bottom: unset;
    border-left: unset;
    border-top: unset;
    border-right: 1px solid ${colors.black} !important;
  }
  
  .rbc-today {
    color: ${colors.blue400};
    background: unset;
  }
  
  .rbc-time-header-content {
    border: unset;
  }

  .rbc-timeslot-group {
    border: unset;
  }
  
  .rbc-allday-cell {
    display: none;
  }

  .rbc-event-content {
    display: flex;
    justify-content: center;
  }

  .rbc-event-content > div {
    height: unset;
  }

  .rbc-header + .rbc-header {
    border-left: unset;
  }

  .rbc-time-content > * + * > * {
    border-left: unset;
  }
  
  .rbc-time-content {
    border: unset;
  }
  
  .rbc-time-view {
    border-right: unset;
    border-bottom: unset;
    border-top: unset;
    border-left: 1px solid ${colors.black};
  }
  
  .rbc-day-slot {
    position: relative;
    overflow: auto;
    border-right: 1px solid black;
  }

    .__react_component_tooltip {
    padding: 0 !important;
    z-index: 9999 !important;
    border: initial !important;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    
    &:after {
      content: none !important;
    }
    
    &:before {
      
      content: none !important;
    }
  }
  
  .ReactModal__Content {
    outline: none;
    outline-offset: unset;
  }

  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 300ms ease-in-out;
    z-index: 999;
    background: rgba(204, 204, 204, 0.7) !important;  

  }

  .ReactModal__Overlay--after-open{
    opacity: 1;
  }

  .ReactModal__Overlay--before-close{
    opacity: 0;
  }
  
  .ReactModal__Content {
    outline: 0;
  }
`;
