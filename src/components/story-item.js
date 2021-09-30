import React from 'react';

import StoryModalStateHook from '../hooks/story_modal_hook';
import ProfilePic from './profile_pic';
import UsernameText from './username-text';

export default function StoryItem({ data }) {
  const { setModal } = StoryModalStateHook();

  const openStoryModal = () => {
    setModal(true, data);
  };

  return (
    <div
      className="unselectable story-item w-20 flex-shrink-0 flex flex-col justify-center items-center cursor-pointer"
      onClick={openStoryModal}
    >
      <div className="story-photo-container">
        <ProfilePic
          src={data?.image || 'https://picsum.photos/seed/picsum/200/200'}
          username={data?.username}
          size={56}
          border
        />
      </div>
      <UsernameText
        username={data?.username || 'username'}
        className="story-username text-black text-12-light mt-1"
      />
    </div>
  );
}