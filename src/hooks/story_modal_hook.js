import { useRecoilState } from "recoil";
import { storyModalState } from "../atoms/story_modal_state";

const StoryModalStateHook = () => {
  const [story_modal_state, setModalState] = useRecoilState(storyModalState);

  const { showModal, data } = story_modal_state;
  const modalData = data;
  const setModal = (status, newData) =>
    setModalState({ showModal: status, data: newData });

  return { showModal, modalData, setModal };
};

export default StoryModalStateHook;
