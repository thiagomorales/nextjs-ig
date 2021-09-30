import { useRecoilState } from 'recoil';

import { modalState } from '../atoms/modal_state';

const ModalStateHook = () => {
  const [modal_state, setModalState] = useRecoilState(modalState);

  const { data, showModal } = modal_state;
  const modalData = data;
  const setModal = (status, newData) => setModalState({ showModal: status, data: newData });

  return { showModal, modalData, setModal };
};

export default ModalStateHook;
