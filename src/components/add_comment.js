import React, { useEffect, useRef, useState } from 'react';

export default function AddComment() {
  const changeRef = useRef(null);
  const [textAreaSize, setAreaSize] = useState(18);
  const [isTyped, setTyped] = useState(false);

  return (
    <form method="POST" className="add-comment-container">
      <textarea
        className="add-comment-input"
        style={{ height: textAreaSize }}
        placeholder="Adicionar um comentário..."
        aria-label="Adicionar um comentário..."
        ref={changeRef}
        onChange={(e) => {
          setAreaSize(changeRef.current.scrollHeight);
          setTyped(e.target.value.length > 0);
        }}
      />
      <button
        className="add-comment-button text-14-light text-blue"
        style={{ opacity: isTyped ? 1 : 0.3 }}
      >
        Publicar
      </button>
    </form>
  );
}
