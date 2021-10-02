import { useEffect, useState } from 'react';

import FeedItem from '@components/feed-item.js';
import Layout from '@components/layout';
import MoreModalItems from '@components/more-modal.js';
import SearchBar from '@components/search_bar.js';
import Stories from '@components/Story/Stories';
import StoryItemsModal from '@components/Story/StoryView';

import LoginUserHook from '../hooks/global_hook.js';

export default function Home() {
  const { setLoginUser } = LoginUserHook();

  const [loginData, setLoginData] = useState(null);
  const [stories, setStories] = useState(null);
  // const [suggestions, setSuggestions] = useState(null);
  const [feed, setFeed] = useState<any[] | null>(null);

  const updateLoginUser = (data: any) => {
    setLoginUser(data);
    setLoginData(data);
  };

  useEffect(() => {
    fetch('/api/loginUser')
      .then((response) => response.json())
      .then((data) => updateLoginUser(data));

    fetch('/api/feed')
      .then((response) => response.json())
      .then((data) => setFeed(data));

    // fetch("/api/suggestions")
    //   .then((response) => response.json())
    //   .then((data) => setSuggestions(data));

    fetch('/api/stories')
      .then((response) => response.json())
      .then((data) => setStories(data));
  }, []);

  return (
    <>
      {loginData && (
        <Layout user={loginData}>
          <SearchBar />
          <StoryItemsModal />
          <MoreModalItems />
          <div className="homepage-feed flex flex-col ">
            <Stories stories={stories} />
            {feed &&
              feed.map((item) => {
                return <FeedItem data={item} key={item.pid} />;
              })}
          </div>
          {/* <HomeRightBar data={suggestions} /> */}
        </Layout>
      )}
    </>
  );
}
