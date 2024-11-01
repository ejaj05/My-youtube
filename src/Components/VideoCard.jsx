import { Link } from "react-router-dom";
import React from "react";
import { abbreviateNumber } from "js-abbreviation-number";
import moment from "moment";
const VideoCard = ({ item }) => {
  const {snippet,statistics} = item
  const {thumbnails,channelTitle,title,channelId} = snippet ;
  const getFormattedVideoTime = (lengthSeconds) => {
    if (typeof lengthSeconds !== "number") return "0:00:00";
    const videoTime = moment().startOf("day").seconds(lengthSeconds);
    return videoTime.format("H:mm:ss");
  };
  const formattedTime = getFormattedVideoTime(item?.contentRating?.duration);
  

  return (
    <div className="w-[350px]">
      <div className="w-full h-52 relative rounded-lg overflow-hidden">
        <Link to={`/watch/${item?.id}`}>
          <img
            className="w-full h-full object-cover object-center"
            src={thumbnails.medium.url}
            alt=""
          />
        </Link>
      </div>
      <div className="mt-4 flex gap-4 items-start">
        <img className="w-12 h-12 object-cover rounded-full" src={thumbnails.medium.url} alt="" />
        <span className="leading-5 flex flex-col ">
          <span className="text-white font-bold">{title}</span>
          <span className="text-sm text-zinc-300 font-normal mt-1">{channelTitle}</span>
          <span>
            <span className="text-zinc-300 text-sm">{abbreviateNumber(statistics.viewCount)} views</span>
          </span>
        </span>
      </div>
    </div>
  );
};

export default VideoCard;
