/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import StoryItem from '@components/Story/StoryItem';

import Box from '../box';

const Stories = ({ stories }: any) => {
  return (
    <Box className="stories-container sm:full-width" border>
      <div className="stories-feed overflow-y-hidden overflow-x-scroll py-4 px-2 flex relative items-center">
        <div className="stories-feed-floating flex relative transition ease-linear duration-300">
          {stories &&
            stories.map((item: any) => {
              return (
                <StoryItem image={item?.image} username={item?.username} key={item.username} />
              );
            })}
        </div>
      </div>
    </Box>
  );
};

export default Stories;
