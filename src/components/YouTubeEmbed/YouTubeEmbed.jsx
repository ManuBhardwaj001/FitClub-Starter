import React from "react";
import "./YouTubeEmbed.css";

const YouTubeEmbed = ({ videoUrl, title }) => {
  return (
    <div className="youtube-embed">
      <iframe
        width="560"
        height="315"
        src={videoUrl}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <p>{title}</p>
    </div>
  );
};

export default YouTubeEmbed;
