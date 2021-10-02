import React from 'react';

import ProfilePic from '@components/profile_pic.js';
import UsernameText from '@components/username-text.js';
import { useStoryProvider } from '@providers/StoryProvider';

interface StoryItemProps {
  username?: string;
  image?: string;
}

const StoryItem = ({
  image = 'https://picsum.photos/seed/picsum/200/200',
  username = 'username',
}: StoryItemProps) => {
  const { openStory } = useStoryProvider();

  const handleOpenStory = () => {
    openStory({ imageUrl: image, name: username });
  };

  return (
    <div
      className="unselectable story-item w-20 flex-shrink-0 flex flex-col justify-center items-center cursor-pointer"
      aria-hidden="true"
      onClick={handleOpenStory}
    >
      <div className="story-photo-container">
        <ProfilePic src={image} username={username} size={56} border href={undefined} />
      </div>
      <UsernameText username={username} className="story-username text-black text-12-light mt-1" />
    </div>
  );
};

export default StoryItem;
