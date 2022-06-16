import * as React from 'react';
// libs
import ReactPlayer from 'react-player';

interface ISimpleVideoPlayer {
  video: string;
  onEnded?: () => void;
  autoplay?: boolean;
}

const SimpleVideoPlayer: React.FC<ISimpleVideoPlayer> = ({ video, onEnded, autoplay }) => {
  const [isPlayingVideo, setIsPlaying] = React.useState(Boolean(autoplay));

  const onEndVideo = () => {
    if (!autoplay) {
      setIsPlaying(false);
    }

    onEnded?.();
  };

  return <ReactPlayer url={video} playsinline playing={isPlayingVideo} onEnded={onEndVideo} />;
};

export default SimpleVideoPlayer;
