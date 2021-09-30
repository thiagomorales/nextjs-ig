import React from 'react';

import Box from './box';
import StoryItem from './story-item';

export default function Stories({ stories }) {
  return (
    <Box className="stories-container sm:full-width" border>
      <div className="stories-feed overflow-y-hidden overflow-x-scroll py-4 px-2 flex relative items-center">
        <div className="stories-feed-floating flex relative transition ease-linear duration-300">
          {stories &&
            stories.map((item) => {
              return <StoryItem data={item} key={item.username} />;
            })}
        </div>
      </div>
    </Box>
  );
}
