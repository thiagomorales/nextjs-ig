// @ts-ignore
/* eslint-disable */
import React, { useRef, useState } from 'react';

import ModalStateHook from '../hooks/modal_hook';

export default function Modal({ children }) {
  const { modalData, setModal, showModal } = ModalStateHook();
  return (
    <div
      className={`modal-container flex items-center justify-center ${!showModal && 'hidden'}`}
      onClick={() => setModal(false)}
    >
      <div className="modal-box relative mx-6">{children}</div>
    </div>
  );
}
