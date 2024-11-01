import React, { useEffect, useState } from "react";
import { Videos } from "./index";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

const VideoContainer = () => {
  const [video, setvideo] = useState([]);
  const [page, setPage] = useState(1);
  const getVideos = async () => {
    const { data } = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&page=${page}&maxResults=50&regionCode=in&key=AIzaSyASWT4CYfbGh3r3y13X3wt3jdWBApPDPzk`
    );
    setPage(page + 1);
    setvideo((prevData)=>[...prevData,...data.items]);
  };
  useEffect(() => {
    getVideos();
  }, []);
  console.log(video);
  return (
    video.length > 0 && (
        <InfiniteScroll
          dataLength={video.length}
          next={getVideos}
          hasMore={true}
          loader={<h1 className="text-center text-2xl font-semibold m-4 text-white">
            Loading...
          </h1>}
        >
          <Videos videos={video} />
        </InfiniteScroll>
    )
  );
};
export default VideoContainer;
