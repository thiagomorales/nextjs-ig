import React, { useCallback, useEffect } from 'react';

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

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeStory();
      }
    },
    [closeStory]
  );

  useEffect(() => {
    if (isVisible) {
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
    return () => {
      return null;
    };
  }, [handleKeyDown, isVisible]);

  return (
    <div
      className={`unselectable animated fadeDown modal-container flex items-center justify-center ${
        !isVisible && 'hidden'
      }`}
      role="none"
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
            currentIndex={0}
            onAllStoriesEnd={() => closeStory()}
            storyContainerStyles={{
              overflow: 'hidden',
              width: '100vw',
              height: '100%',
              zIndex: '9999999',
              paddingTop: '8px',
              paddingBottom: '8px',
            }}
            storyStyles={{
              display: 'flex',
              width: '100%',
              height: '100%',
            }}
          />
        )}
      </div>
    </div>
  );
});

export default MoreModalItems;
