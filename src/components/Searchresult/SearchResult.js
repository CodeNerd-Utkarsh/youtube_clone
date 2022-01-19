import React from "react";
import "./Searchresult.css";
import TuneIcon from "@mui/icons-material/Tune";
import ChannelCard from "../ChannelCard/ChannelCard";
import VideosList from "../VideosList/VideosList";
function SearchResult() {
  return (
    <div className="searchResult">
      <div className="searchResult__filter">
        <TuneIcon />
        <h2>Filter</h2>
      </div>
      <hr />
      <ChannelCard
      // image
      // channelName
      // verified
      // subs
      // noOfVideos
      // description
      />
      <hr />
      <VideosList
      // views
      // subs
      // description
      // timestamp
      // channel
      // title
      // image
      />
    </div>
  );
}

export default SearchResult;
