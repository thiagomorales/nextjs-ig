/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @next/next/no-img-element */
import React from 'react';

import { WithHeader } from 'react-insta-stories';
import { Action, Story } from 'react-insta-stories/dist/interfaces';

import { NumberOrString } from '@components/Story/interfaces';
import { DEFAULT_IMAGE_URL } from '@config/constants';
import { useStoryProvider } from '@providers/StoryProvider';

import { getRandomInt } from '../../utils';

const styles = {
  main: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '32px',
    marginLeft: '16px',
    marginRight: '16px',
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 40,
    marginRight: 10,
    filter: 'drop-shadow(0 0px 2px rgba(0, 0, 0, 0.5))',
    border: '2px solid rgba(255, 255, 255, 0.8)',
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    filter: 'drop-shadow(0 0px 3px rgba(0, 0, 0, 0.9))',
  },
  heading: {
    fontSize: '1rem',
    color: 'rgba(255, 255, 255, 0.9)',
    margin: 0,
    marginBottom: 2,
  },
  subheading: {
    fontSize: '0.6rem',
    color: 'rgba(255, 255, 255, 0.8)',
    margin: 0,
  },
} as const;

interface CustomHeaderProps {
  action: Action;
  story: Story;
  config: {
    width?: NumberOrString;
    height?: NumberOrString;
    loader?: JSX.Element;
    header?: Function;
    storyStyles?: Object;
  };
}

export const CustomHeader = ({ action, config, story }: CustomHeaderProps) => {
  const { activeUser, closeStory } = useStoryProvider();

  return (
    // @ts-ignore
    <WithHeader story={story} globalHeader={config.header}>
      <div className="unselectable" style={styles.main}>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <img alt="logo" style={styles.img} src={activeUser?.imageUrl || DEFAULT_IMAGE_URL} />
          <span style={styles.text}>
            <p style={styles.heading}>{activeUser?.name}</p>
            <p style={styles.subheading}>{`Postado há ${getRandomInt(1, 59)}min`}</p>
          </span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-x"
          onClick={() => {
            action('pause');
            closeStory();
          }}
          style={{ zIndex: 999999999, cursor: 'pointer' }}
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </div>
    </WithHeader>
  );
};
