import React, { useEffect, useState } from "react";
import axios from "axios";
import { YOUTUBE_VIDEO_API, API_KEY } from "../constants/youtube";
import VideoCart from "./VideoCart";
import {Link} from 'react-router-dom'

const VideoContainer = () => {
  const [video,setVideo] = useState([])

  const fetchVideo = async () => {
    try {
      const res = await axios.get(YOUTUBE_VIDEO_API);
      console.log(res?.data?.items);
      setVideo(res?.data?.items)
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchVideo();
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-5">
      {
        video.map((item)=>{
          return (
           <Link to={`/watch`} key={item.id} >
           <VideoCart item= {item} />
           </Link>
             
          )
        })
      }


     
      
     
    </div>
  );
};

export default VideoContainer;
