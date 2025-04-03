import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import { YOUTUBE_VIDEO_URL } from '../utils/constants';

const WatchPage = () => {

    useEffect(() => {

        console.log('WatchPage', YOUTUBE_VIDEO_URL);
        
        const getVideoDetails = async () => {
            try {
                const response = await fetch(YOUTUBE_VIDEO_URL);
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.error("Error fetching videos:", error);
            }
        };
        getVideoDetails();
    }, []);

    const [searchParams] = useSearchParams();

    console.log('Params', searchParams.get('v'));

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu());
    }, [dispatch]);
    return (
        <div className='p-4'>
            <iframe
                width="1200" height="600" 
                src={`https://www.youtube.com/embed/${searchParams.get('v')}?si=rwIB2f879i8aLyYi`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen>
            </iframe>
        </div>
    )
}

export default WatchPage;
