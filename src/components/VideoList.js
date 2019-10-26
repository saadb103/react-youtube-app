import React from "react";
import VideoIem from "./VideoItem";
import VideoItem from "./VideoItem";

const VideoList = props => {
  const renderedList = props.videos.map(video => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onVideoSelect={props.onVideoSelect}
      />
    );
  });
  console.log(props.videos);
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
