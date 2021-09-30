import React from "react";
import { WithSeeMore, WithHeader } from "react-insta-stories";

import { getRandomInt } from "../utils";
import ModalStateHook from "../hooks/story_modal_hook";

const styles = {
  main: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "32px",
    marginLeft: "16px",
    marginRight: "16px",
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 40,
    marginRight: 10,
    filter: "drop-shadow(0 0px 2px rgba(0, 0, 0, 0.5))",
    border: "2px solid rgba(255, 255, 255, 0.8)",
  },
  text: {
    display: "flex",
    flexDirection: "column",
    filter: "drop-shadow(0 0px 3px rgba(0, 0, 0, 0.9))",
  },
  heading: {
    fontSize: "1rem",
    color: "rgba(255, 255, 255, 0.9)",
    margin: 0,
    marginBottom: 2,
  },
  subheading: {
    fontSize: "0.6rem",
    color: "rgba(255, 255, 255, 0.8)",
    margin: 0,
  },
};

export const CustomHeader = ({ story, config, data, action }) => {
  const { setModal } = ModalStateHook();

  return (
    <WithHeader story={story} globalHeader={config.header}>
      <div style={styles.main}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <img style={styles.img} src={data?.image} />
          <span style={styles.text}>
            <p style={styles.heading}>{data?.username}</p>
            <p style={styles.subheading}>{`Postado há ${getRandomInt(
              1,
              59
            )}min`}</p>
          </span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-x"
          onClick={() => {
            setModal(false);
            action("pause");
          }}
          style={{ zIndex: 999999999, cursor: "pointer" }}
        >
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </div>
    </WithHeader>
  );
};
