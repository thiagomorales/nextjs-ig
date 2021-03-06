/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from 'react';

import { Renderer, Story } from 'react-insta-stories/dist/interfaces';
import ReactPlayer from 'react-player';
import ClipLoader from 'react-spinners/ClipLoader';

import { CustomHeader } from '@components/Story/StoryCustomHeader';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
  },
  storyContent: {
    width: 'auto',
    maxWidth: '100%',
    maxHeight: '100%',
    margin: 'auto',
  },
  videoContainer: {
    display: 'flex',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    left: 0,
    top: 0,
    transform: 'translateY(300%)',
    background: 'rgba(0, 0, 0, 0.9)',
    zIndex: 9,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ccc',
  },
} as const;

export const renderer: Renderer = ({ action, config, isPaused, messageHandler, story }) => {
  const [playing, setPlaying] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [muted] = useState(false);

  const { height, loader, storyStyles, width } = config;

  const computedStyles = {
    ...styles.storyContent,
    ...(storyStyles || {}),
  };

  const vid = React.useRef<ReactPlayer | null>(null);

  useEffect(() => {
    if (vid.current) {
      if (isPaused) {
        action('pause', true);
        setPlaying(false);
      } else {
        setPlaying(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPaused]);

  const onWaiting = () => {
    action('pause', true);
    setPlaying(false);
  };

  const onPlaying = () => {
    action('play', true);
    setPlaying(true);
  };

  const videoLoaded = () => {
    if (vid.current !== null) {
      messageHandler('UPDATE_VIDEO_DURATION', {
        duration: vid.current.getDuration(),
      });
    }
    action('play');
    setLoaded(true);
    setPlaying(true);
  };

  return (
    <div className="unselectable" style={styles.container}>
      <CustomHeader story={story} config={config} action={action} />
      <div className="unselectable" style={styles.videoContainer}>
        <ReactPlayer
          className="unselectable"
          ref={vid}
          style={computedStyles}
          url={story.url}
          controls={false}
          playsinline
          onReady={videoLoaded}
          onBuffer={onWaiting}
          onBufferEnd={onPlaying}
          muted={muted}
          width="100%"
          height="100%"
          playing={playing}
        />
        {!loaded && (
          <div
            className="unselectable"
            style={{
              width,
              height,
              ...styles.loading,
            }}
          >
            {loader || <ClipLoader color="#E1E1ED" loading size={60} />}
          </div>
        )}
      </div>
    </div>
  );
};

export const tester = (story: Story) => {
  return {
    condition: story.type === 'video',
    priority: 2,
  };
};

export default {
  renderer,
  tester,
};
