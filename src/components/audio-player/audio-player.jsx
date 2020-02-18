import React, { useEffect } from "react";
import PropTypes from 'prop-types';

import useAudio from "./use-audio";
import TimeBar from "./time-bar";
import PlaybackButton from "./playback-button";

import './audio-player.scss';

function AudioPlayer({ url, isPause }) {
  const [audioElement, audioProps] = useAudio(url);

  useEffect(() => {
    if (audioProps.playbackStatus === 'play')
    audioProps.togglePlaybackStatus('pause');
  }, [isPause]);

  return (
    <div className="audio-player">
      {audioElement}

      {audioProps.isLoading ? (
        <div style={{ color: "white" }}>Loading...</div>
      ) : (
        <div className="controls">
          <PlaybackButton
            onClick={audioProps.togglePlaybackStatus}
            playbackStatus={audioProps.playbackStatus}
          />
          <TimeBar
            currentTime={audioProps.currentTime}
            isSeeking={audioProps.isSeeking}
            duration={audioProps.duration}
            progress={audioProps.progress}
            setTime={audioProps.setTime}
          />
        </div>
      )}
    </div>
  );
}

export default AudioPlayer;

AudioPlayer.defaultProps = {
    isPause: false,
    url: '',
};

AudioPlayer.propTypes = {
    isPause: PropTypes.bool,
    url: PropTypes.string,
};
