import React from 'react';

const VideoCard = ({ info }) => {
    if (!info || !info.snippet || !info.statistics) {
        return <p>Loading...</p>; // Ensures no crash on missing data
    }

    const { snippet, statistics } = info;
    const { title, channelTitle, thumbnails } = snippet;

    return (
        <div className='p-2 m-2 w-72 shadow-lg'>
            <img className='rounded-lg' src={thumbnails?.medium?.url} alt={title} />
            <ul>
                <li className='font-bold'>{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount} views</li>
                <li>{statistics.likeCount} likes</li>
                <li>{statistics.commentCount} comments</li>
            </ul>
        </div>
    );
};

export default VideoCard;