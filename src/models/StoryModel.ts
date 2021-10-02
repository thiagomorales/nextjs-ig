export interface StoryUserData {
  name: string;
  imageUrl: string;
}

export interface StoryStoreModel {
  activeUser?: StoryUserData;
  isVisible: boolean;
}
