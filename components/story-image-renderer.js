import React, { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

import { CustomHeader } from "./story-custom-header";
import ModalStateHook from "../hooks/story_modal_hook";

export const renderer = ({ story, action, isPaused, config }) => {
  const [loaded, setLoaded] = useState(false);
  const { modalData } = ModalStateHook();

  const { width, height, loader, storyStyles } = config;
  let computedStyles = {
    ...styles.storyContent,
    ...(storyStyles || {}),
  };

  const imageLoaded = () => {
    setLoaded(true);
    action("play");
  };

  const data = modalData;

  return (
    <div style={styles.container}>
      <CustomHeader story={story} config={config} data={data} action={action} />
      <div style={styles.imageContainer}>
        <img
          style={{ ...computedStyles, ...styles.image }}
          src={story.url}
          onLoad={imageLoaded}
        />
        {!loaded && (
          <div
            style={{
              width: width,
              height: height,
              ...styles.loading,
            }}
          >
            {loader || <ClipLoader color="#E1E1ED" loading size={60} />}
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
  },
  imageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginTop: "16px",
    marginBottom: "16px",
    objectFit: "contain",
  },
  story: {
    display: "flex",
    position: "relative",
    overflow: "hidden",
  },
  storyContent: {
    width: "auto",
    maxWidth: "100%",
    maxHeight: "100%",
    margin: "auto",
  },
  loading: {
    left: 0,
    top: 0,
    transform: "translateY(300%)",
    background: "rgba(0, 0, 0, 0.9)",
    zIndex: 9,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#ccc",
  },
};

export const tester = (story) => {
  return {
    condition: !story.content && (!story.type || story.type === "image"),
    priority: 2,
  };
};

export default {
  renderer,
  tester,
};
