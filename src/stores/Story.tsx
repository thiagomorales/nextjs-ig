/* eslint-disable @typescript-eslint/no-explicit-any */
import { makeAutoObservable, runInAction } from 'mobx';
import { enableStaticRendering } from 'mobx-react-lite';

import { StoryStoreModel, StoryUserData } from 'models/StoryModel';

enableStaticRendering(typeof window === 'undefined');

const DEFAULT_USER_VALUE = undefined;

export class StoryStore implements StoryStoreModel {
  activeUser?: StoryUserData = DEFAULT_USER_VALUE;

  isVisible = false;

  constructor() {
    makeAutoObservable(this);
  }

  setActiveUserData = (user?: StoryUserData) => {
    runInAction(() => {
      this.activeUser = user;
    });
  };

  openStory = (user: StoryUserData) => {
    if (!user) {
      throw new Error('[openStoryView] - User data must be informed');
    }

    runInAction(() => {
      this.setActiveUserData(user);
      this.isVisible = true;
    });
  };

  closeStory = () => {
    runInAction(() => {
      this.setActiveUserData(DEFAULT_USER_VALUE);
      this.isVisible = false;
    });
  };

  hydrate = (data: StoryStoreModel) => {
    if (!data) return;

    this.activeUser = data.activeUser !== null ? data.activeUser : DEFAULT_USER_VALUE;
    this.isVisible = !!data.isVisible;
  };
}
