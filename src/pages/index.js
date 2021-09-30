import { useState, useEffect } from "react";

import Layout from "../components/layout";
import Stories from "../components/stories";
import FeedItem from "../components/feed-item";
import MoreModalItems from "../components/more-modal";
import StoryItemsModal from "../components/story-modal";
import SearchBar from "../components/search_bar";

import LoginUserHook from "../hooks/global_hook";

export default function Home() {
  const { data, setLoginUser } = LoginUserHook();

  const [loginData, setLoginData] = useState(null);
  const [stories, setStories] = useState(null);
  // const [suggestions, setSuggestions] = useState(null);
  const [feed, setFeed] = useState(null);

  const updateLoginUser = (data) => {
    setLoginUser(data);
    setLoginData(data);
  };

  useEffect(() => {
    fetch("/api/loginUser")
      .then((response) => response.json())
      .then((data) => updateLoginUser(data));

    fetch("/api/feed")
      .then((response) => response.json())
      .then((data) => setFeed(data));

    // fetch("/api/suggestions")
    //   .then((response) => response.json())
    //   .then((data) => setSuggestions(data));

    fetch("/api/stories")
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
