import * as React from "react";
import ReactPlayer from "react-player";
import ClipLoader from "react-spinners/ClipLoader";

import { CustomHeader } from "./story-custom-header";
import ModalStateHook from "../hooks/story_modal_hook";

export const renderer = ({
  story,
  action,
  isPaused,
  config,
  messageHandler,
}) => {
  const { modalData } = ModalStateHook();

  const [playing, setPlaying] = React.useState(false);
  const [loaded, setLoaded] = React.useState(false);
  const [muted, setMuted] = React.useState(false);

  const { width, height, loader, storyStyles } = config;
  const data = modalData;

  let computedStyles = {
    ...styles.storyContent,
    ...(storyStyles || {}),
  };

  let vid = React.useRef(null);

  React.useEffect(() => {
    if (vid.current) {
      if (vid.current.getCurrentTime() === 0) {
      } else {
        if (isPaused) {
          action("pause", true);
          setPlaying(false);
        } else {
          setPlaying(true);
        }
      }
    }
  }, [isPaused]);

  const onWaiting = () => {
    action("pause", true);
    setPlaying(false);
  };

  const onPlaying = () => {
    action("play", true);
    setPlaying(true);
  };

  const videoLoaded = () => {
    messageHandler("UPDATE_VIDEO_DURATION", {
      duration: vid.current.getDuration(),
    });
    action("play");
    setLoaded(true);
    setPlaying(true);
  };

  return (
    <div style={styles.container}>
      <CustomHeader story={story} config={config} data={data} action={action} />
      <div style={styles.videoContainer}>
        <ReactPlayer
          ref={vid}
          style={computedStyles}
          url={story.url}
          controls={false}
          playsinline
          onReady={videoLoaded}
          onBuffer={onWaiting}
          onBufferEnd={onPlaying}
          muted={muted}
          className="react-player-video"
          width="100%"
          height="100%"
          playing={playing}
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
  storyContent: {
    width: "auto",
    maxWidth: "100%",
    maxHeight: "100%",
    margin: "auto",
  },
  videoContainer: {
    display: "flex",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
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
    condition: story.type === "video",
    priority: 2,
  };
};

export default {
  renderer,
  tester,
};
