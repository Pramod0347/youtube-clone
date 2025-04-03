import React, { useEffect, useState } from 'react';
import { YOUTUBE_API_URL } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => { 
      try {
        const response = await fetch(YOUTUBE_API_URL);
        const data = await response.json();
        setVideos(data.items || []); // Ensures no undefined error
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    getVideos();
  }, []);

  console.log('Pramod', videos.length > 0 ? videos[0] : "No videos found");

  return (
    <div className='flex flex-wrap'>
      {videos.length > 0 ? (
        videos.map(video => (
          <Link key={video.id} to={"/watch?v="+ video.id}>
            <VideoCard info={video} />
          </Link>
        ))
      ) : (
        <p>Loading videos...</p>
      )}
    </div>
  );
}

export default VideoContainer;
