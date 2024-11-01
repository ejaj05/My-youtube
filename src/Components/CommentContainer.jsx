import React, { useEffect, useState } from "react";
import CommentList from "./CommentList";

const CommentContainer = ({ id }) => {
    const [channelDetails, setchannelDetails] = useState([])
    const [expand, setexpand] = useState(false)
  const getComments = async () => {
    const res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=AIzaSyASWT4CYfbGh3r3y13X3wt3jdWBApPDPzk`);
    const {items} = await res.json()
    setchannelDetails(items[0])
  };

  useEffect(() => {
    getComments()
  }, []);
  console.log(channelDetails)
  return (
    <div className="mt-4">
        <h1 className="text-zinc-100 font-bold mb-2 text-lg">{channelDetails?.snippet?.title}</h1>
        <div className="flex gap-4">
            <img className="w-12 h-12 rounded-full object-cover" src={channelDetails?.snippet?.thumbnails.medium.url} alt=""/>
            <span className="text-white font-semibold inline-block">{channelDetails?.snippet?.channelTitle}</span>
        </div>

        <div onClick={()=>setexpand(true)} className={`text-white bg-[#121215] p-2 rounded-md h-32 ${expand && 'h-auto'} overflow-auto mt-4 cursor-pointer w-[390px] md:w-[900px]`}>
            <h1 className="font-semibold">{channelDetails?.statistics?.viewCount} views</h1>
            <p>{channelDetails?.snippet?.description}</p>
        </div>

        <div className="text-white mt-4">
            <h1 className="font-bold text-2xl">Comments :</h1>
            <CommentList/>
        </div>
    </div>
  )
};

export default CommentContainer;
