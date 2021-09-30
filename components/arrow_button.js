import React from "react";

export default function ArrowButton(props) {
  return (
    <button
      onClick={props.onClick}
      className={`${props.disabled ? "hidden" : ""} w-12 h-12 absolute ${
        props.direction === "left" ? "left" : "right"
      }-0 z-10 justify-center items-center flex outline-none feed-arrow-button`}
    >
      <div className="stories-button w-6 h-6 rounded-full flex items-center justify-center outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#aaa"
          strokeWidth="3"
          opacity="0.60"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`feather feather-chevron-${
            props.direction === "left" ? "left" : "right"
          }`}
        >
          {props.direction === "left" ? (
            <polyline points="15 18 9 12 15 6"></polyline>
          ) : (
            <polyline points="9 18 15 12 9 6"></polyline>
          )}
        </svg>
      </div>
    </button>
  );
}
