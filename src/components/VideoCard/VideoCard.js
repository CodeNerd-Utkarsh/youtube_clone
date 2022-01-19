import { Avatar } from "@mui/material";
import React from "react";
import "./VideoCard.css";

function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
  return (
    <div className="videoCard">
      <img className="videoCard__thumbnail" src={image} alt={title} />
      <div className="videoCard__info">
        <Avatar
          src={channelImage}
          className="videoCard__avatar"
          alt={channel}
        />
        <div className="videoCard__text">
          <h4>{title}</h4>
          <p>{channel}</p>
          <p>
            {views} views . {timestamp}
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
