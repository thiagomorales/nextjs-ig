import React from 'react';

import { observer } from 'mobx-react-lite';
import Stories from 'react-insta-stories';
import { useSwipeable } from 'react-swipeable';

import ImageRenderer from '@components/Story/StoryImageRenderer';
import VideoRenderer from '@components/Story/StoryVideoRenderer';
import { stories } from '@mocks/stories';
import { useStoryProvider } from '@providers/StoryProvider';

const MoreModalItems = observer(() => {
  const { closeStory, isVisible } = useStoryProvider();
  const handlers = useSwipeable({
    trackMouse: true,
    onSwiped: () => {
      closeStory();
    },
  });

  return (
    <div
      className={`unselectable animated fadeDown modal-container flex items-center justify-center ${
        !isVisible && 'hidden'
      }`}
      {...handlers}
    >
      <div className="unselectable animated fadeDown story-modal-box relative mx-6">
        {isVisible && (
          <Stories
            width="100vw"
            height="100%"
            keyboardNavigation
            renderers={[ImageRenderer, VideoRenderer]}
            defaultInterval={5000}
            stories={stories}
            onAllStoriesEnd={() => closeStory()}
            storyContainerStyles={{
              overflow: 'hidden',
              width: '100vw',
              height: '100%',
              zIndex: '9999999',
            }}
            storyStyles={{
              width: 'auto',
              maxWidth: '100%',
              maxHeight: '100%',
              paddingTop: '24px',
              paddingBottom: '24px',
            }}
          />
        )}
      </div>
    </div>
  );
});

export default MoreModalItems;
