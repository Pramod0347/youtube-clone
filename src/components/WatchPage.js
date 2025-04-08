import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import { YOUTUBE_BASE_URL } from '../utils/constants';
import GOOGLE_API_KEY from '../utils/constants';
import CommentsContainer from './commentsContainer';

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    const videoId = searchParams.get('v');
    const [videoDetails, setVideoDetails] = useState(null);

    useEffect(() => {
        const getVideoDetails = async () => {
            if (!videoId) return;  // Ensure video ID exists
            
            try {
                const response = await fetch(
                    `${YOUTUBE_BASE_URL}id=${videoId}&key=${GOOGLE_API_KEY}`
                );
                const data = await response.json();

                if (data.items && data.items.length > 0) {
                    setVideoDetails(data.items[0]);  // Store video details in state
                } else {
                    console.error("No video found for this ID");
                }
            } catch (error) {
                console.error("Error fetching videos:", error);
            }
        };
        getVideoDetails();
    }, [videoId]);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu());
    }, [dispatch]);

    return (
        <div className='p-4'>
            {videoDetails ? (
                <>
                    <div>
                        <h2 className="text-xl font-bold mb-4">{videoDetails.snippet.title}</h2>
                        <iframe
                            width="1200"
                            height="600"
                            src={`https://www.youtube.com/embed/${videoId}`}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                        {/* <p className="mt-2">{videoDetails.snippet.description}</p> */}
                    </div>
                    <div className='p-4'>
                        <CommentsContainer />
                    </div>
                </>
            ) : (
                <p>Loading video...</p>
            )}
        </div>
    );
};

export default WatchPage;
