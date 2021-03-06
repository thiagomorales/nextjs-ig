/* eslint-disable no-unused-vars */
import React from 'react';

// import { useRouter } from 'next/router';

// import LoginUserHook from '../hooks/global_hook';
import Clickable from './clickable';
// import ActivityIcon from './icons/activity_icon';
// import ActivityIconActive from './icons/activity_icon_active';
// import DmIcon from './icons/dm_icon';
// import DmIconActive from './icons/dm_icon_active';
// import ExploreIcon from './icons/explore_icon';
// import ExploreIconActive from './icons/explore_icon_active';
// import HomeIcon from './icons/home_icon';
// import HomeIconActive from './icons/home_icon_active';
// import ProfilePic from './profile_pic';
// import SearchBar from './search_bar';

export default function Header({ user }) {
  // const router = useRouter();

  // set icons
  // const home =
  //   router.pathname === "/" ? (
  //     <HomeIconActive className="header-icon" />
  //   ) : (
  //     <HomeIcon className="header-icon" />
  //   );
  // const messages =
  //   router.pathname === "/messages" ? (
  //     <DmIconActive className="header-icon" />
  //   ) : (
  //     <DmIcon className="header-icon" />
  //   );
  // const explore =
  //   router.pathname === "/explore" ? (
  //     <ExploreIconActive className="header-icon" />
  //   ) : (
  //     <ExploreIcon className="header-icon" />
  //   );
  // const activity =
  //   router.pathname === "/activity" ? (
  //     <ActivityIconActive className="header-icon" />
  //   ) : (
  //     <ActivityIcon className="header-icon" />
  //   );

  // const { data, setLoginUser } = LoginUserHook();
  // const loginUserData = data;

  return (
    <nav className="navigation fixed z-20 top-0">
      <div className="header-container items-center">
        <div className="header-item-container w-full flex ml-auto">
          <Clickable href="/">
            <span className="header-logo" style={{ fontWeight: 600 }}>
              olist
            </span>
            <span className="header-logo" style={{ fontWeight: 400 }}>
              {' shopping'}
            </span>
          </Clickable>
        </div>
        <div className="header-icons flex ml-auto items-center">
          {/* <Clickable href="/">{home}</Clickable> */}
          {/* <Clickable href="/messages">{messages}</Clickable> */}
          {/* <Clickable href="/explore">{explore}</Clickable> */}
          {/* <Clickable href="/activity">{activity}</Clickable> */}
          {/* {user && (
            <ProfilePic
              className={
                loginUserData?.username === user
                  ? "header-profile-pic-border"
                  : ""
              }
              src={loginUserData?.image}
              username={loginUserData?.username}
              style={{
                padding: loginUserData?.username === user ? "2px" : "3px",
                marginLeft: "-2px",
              }}
              size={22}
            />
          )} */}
        </div>
      </div>
    </nav>
  );
}
