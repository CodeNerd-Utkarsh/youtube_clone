import React from "react";
import "./VideosList.css";
function VideosList({
  views,
  subs,
  description,
  timestamp,
  channel,
  title,
  image,
}) {
  return (
    <div className="videosList">
      <img src={image} alt="channel" />
      <div className="videosList__text">
        <h3>{title}</h3>
        <p className="videosList__headline">
          {channel} .{" "}
          <span className="videosList__subs">
            <span className="videosList__subsCount">{subs}</span>Subscribers
          </span>{" "}
          {views} . {timestamp}
        </p>
        <p className="videosList__description">{description}</p>
      </div>
    </div>
  );
}

export default VideosList;
