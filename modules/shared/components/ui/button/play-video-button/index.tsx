import * as React from 'react';
// views
import { Icon, IconWrapper } from './views';

interface IPlayVideoButton {
  isPlaying: boolean;
  onClickPlayVideo: () => void;
  isPlayerLoading?: boolean;
}

const PlayVideoButton: React.FC<IPlayVideoButton> = ({ isPlaying, onClickPlayVideo, isPlayerLoading = false }) => (
  <IconWrapper onClick={onClickPlayVideo} isPlayerLoading={isPlayerLoading}>
    {isPlaying ? <Icon src='/static/images/pause-video.svg' /> : <Icon src='/static/images/play-video.svg' />}
  </IconWrapper>
);

export default PlayVideoButton;
