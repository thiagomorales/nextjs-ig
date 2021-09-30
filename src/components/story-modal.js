import React from 'react';

import Stories from 'react-insta-stories';
import { useSwipeable } from 'react-swipeable';

import ModalStateHook from '../hooks/story_modal_hook';
import ImageRenderer from './story-image-renderer';
import VideoRenderer from './story-video-renderer';

export default function MoreModalItems() {
  const { setModal, showModal } = ModalStateHook();
  const handlers = useSwipeable({
    trackMouse: true,
    onSwiped: () => {
      setModal(false);
    },
  });

  const stories = [
    {
      url: 'https://picsum.photos/1080/1920',
    },
    {
      url: 'https://source.unsplash.com/user/erondu/1080x1920',
    },
    {
      url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      type: 'video',
    },
    {
      url: 'https://www.youtube.com/watch?v=BQF9AnyNUf8',
      type: 'video',
    },
    {
      url: 'https://www.youtube.com/watch?v=9MT2ff0BPfc',
      type: 'video',
    },
  ];

  return (
    <div
      className={`unselectable animated fadeDown modal-container flex items-center justify-center ${
        !showModal && 'hidden'
      }`}
      {...handlers}
    >
      <div className="unselectable animated fadeDown story-modal-box relative mx-6">
        {showModal && (
          <Stories
            width="100vw"
            height="100%"
            keyboardNavigation
            renderers={[ImageRenderer, VideoRenderer]}
            defaultInterval={5000}
            stories={stories}
            onAllStoriesEnd={() => setModal(false)}
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
}
