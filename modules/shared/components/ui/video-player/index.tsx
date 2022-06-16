import * as React from 'react';
// libs
import ReactPlayer from 'react-player';
// components
import PlayVideoButton from '@md-ui/button/play-video-button';

interface ISimpleVideoPlayer {
  video: string;
  onEnded?: () => void;
  autoplay?: boolean;
  isExternalVideo?: boolean;
}

const SimpleVideoPlayer: React.FC<ISimpleVideoPlayer> = ({ video, onEnded, autoplay, isExternalVideo }) => {
  const [isPlayingVideo, setIsPlaying] = React.useState(Boolean(autoplay));
  const [isPlayerLoading, setIsPlayerLoading] = React.useState(false);

  React.useEffect(() => {
    setIsPlayerLoading(true);
  }, [video]);

  const onReadyPlayer = () => {
    setIsPlayerLoading(false);
  };

  const onEndVideo = () => {
    if (!autoplay) {
      setIsPlaying(false);
    }

    onEnded?.();
  };

  const onClickPlayVideo = () => {
    setIsPlaying(!isPlayingVideo);
  };

  React.useEffect(() => {
    return () => setIsPlaying(false);
  }, []);

  return (
    <>
      <ReactPlayer
        url={video}
        width='100%'
        playsinline
        height='100%'
        playing={isPlayingVideo}
        onReady={onReadyPlayer}
        onEnded={onEndVideo}
      />
      {!isExternalVideo && (
        <PlayVideoButton
          isPlaying={isPlayingVideo}
          isPlayerLoading={isPlayerLoading}
          onClickPlayVideo={onClickPlayVideo}
        />
      )}
    </>
  );
};

export default SimpleVideoPlayer;
