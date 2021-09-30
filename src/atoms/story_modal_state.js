import { atom } from "recoil";

const storyModalState = atom({
  key: "story_modal_state",
  default: {
    showModal: false,
    data: {},
  },
});

export { storyModalState };
