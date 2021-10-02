/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from 'react';

import { Renderer, Story } from 'react-insta-stories/dist/interfaces';
import ClipLoader from 'react-spinners/ClipLoader';

import { CustomHeader } from '@components/Story/StoryCustomHeader';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '100%',
  },
  imageContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginTop: '16px',
    marginBottom: '16px',
    objectFit: 'contain',
  },
  story: {
    display: 'flex',
    position: 'relative',
    overflow: 'hidden',
  },
  storyContent: {
    width: 'auto',
    maxWidth: '100%',
    maxHeight: '100%',
    margin: 'auto',
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

export const renderer: Renderer = ({ action, config, story }) => {
  const [loaded, setLoaded] = useState(false);

  const { height, loader, storyStyles, width } = config;
  const computedStyles = {
    ...styles.storyContent,
    ...(storyStyles || {}),
  };

  const imageLoaded = () => {
    setLoaded(true);
    action('play');
  };

  return (
    <div className="unselectable" style={styles.container}>
      <CustomHeader story={story} config={config} action={action} />
      <div className="unselectable" style={styles.imageContainer}>
        {story.url && (
          <img
            alt="story "
            className="unselectable"
            style={{ ...computedStyles, ...styles.image }}
            src={story.url}
            onLoad={imageLoaded}
          />
        )}
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
    condition: !story.content && (!story.type || story.type === 'image'),
    priority: 2,
  };
};

export default {
  renderer,
  tester,
};
