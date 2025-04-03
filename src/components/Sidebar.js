import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const isMenuOpen = useSelector(store => store.app.isMenuOpen);
    
    if (isMenuOpen) return null;

    return (<div className='shadow-md'>
        <div className='p-2 m-2'>
            <ul>
                <Link to="/">Home</Link>
                <li>People</li>
            </ul>
        </div>
        <div className='p-2 m-2 pt-5'>
            <h1 className='font-semibold'>Subscriptions</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Live</li>
            </ul>
        </div>
        <div className='p-2 m-2 pt-5'>
            <h1 className='font-semibold'>Explore</h1>
            <ul>
                <li>Trending</li>
                <li>Shopping</li>
                <li>Podcasts</li>
                <li>Playables</li>
            </ul>
        </div>
    </div>
    )
}

export default Sidebar
