import axios from "axios";
import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";
import { API_KEY } from "../constants/youtube";

const VideoCart = ({item}) => {
  const [ytIcon , setYtIcon] = useState("")
  const getYoutubeChannelName = async()=>{
try {
  const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet,contentDetails,statistics&id=${item.snippet.channelId}&key=${API_KEY} `)
  console.log(res)
  setYtIcon(res.data.items[0].snippet.thumbnails.high.url)
} catch (error) {
   console.log(error)
}
  }
  useEffect(()=>{
     getYoutubeChannelName()
  },[])


  return  (
    <div className="w-full cursor-pointer">
      {/* Thumbnail */}
      <img
        className="rounded-xl w-full aspect-video object-cover hover:rounded-none transition-all duration-200"
        src={item.snippet.thumbnails.high.url}
        alt="thumbnail"
      />

      {/* Info Section */}
      <div className="flex mt-3">
        <Avatar
          src={ytIcon}
          size={35}
          round
        />
        <div className="ml-3 flex flex-col">
          <h1 className="font-semibold text-sm line-clamp-2 leading-tight">
            {item.snippet.title}
          </h1>
          <p className="text-sm text-gray-500">{item.snippet.channelTitle}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCart;
