import React, { useRef } from "react";
import useVideoPlayer from "./useVideoPlayer";

function VideoFile() {
  const videoElement = useRef(null);
  const {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMute,
  } = useVideoPlayer(videoElement);

  return (
    <>
      <video
        src="http://custom-html5-video.surge.sh/video.mp4"
        ref={videoElement}
        onTimeUpdate={handleOnTimeUpdate}
        className="relative w-full h-full"
      />
      <div className="space-x-2 bg-black shadow-lg bg-opacity-20 px-2 flex items-center text-white justify-between text-[20px] relative mx-4 bottom-16">
            <button onClick={togglePlay}>
            {!playerState.isPlaying ? <i className="fa-solid fa-play"></i> : <i className="fa-solid fa-pause"></i>}
            </button>
    
            <input
            type="range"
            min="0"
            max="100"
            value={playerState.progress}
            onChange={(e) => handleVideoProgress(e)}
            className="w-full  appearance-none bg-transparent outline-none h-[3px] rounded-md"
            style={{
                background: "linear-gradient(to right, #e71d36, #e71d36 " + playerState.progress + "%, #ddd " + playerState.progress + "%, #ddd 100%)",
              }}
            />
            <select
            className="bg-transparent text-white outline-none appearance-none font-bold"
            value={playerState.speed}
            onChange={(e) => handleVideoSpeed(e)}
            >
            <option value="0.50">0.50x</option>
            <option value="1">1x</option>
            <option value="1.25">1.25x</option>
            <option value="2">2x</option>
            </select>

            <button className="mute-btn" onClick={toggleMute}>
            {!playerState.isMuted ? <i className="fa-solid fa-volume-high"></i> : <i className="fa-solid fa-volume-xmark"></i>}
            </button>
      </div>
    </>
  );
}

export default VideoFile;
