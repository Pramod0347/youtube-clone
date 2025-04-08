import React from 'react'

const Comment = ({data}) => {
    const { name, text, replies } = data;
    return (
        <div className='flex p-2 items-center m-2 border-b-2 border-gray-200 bg-gray-200 rounded'>
            <img className='h-8' src='https://img.favpng.com/0/24/24/user-clip-art-png-favpng-W8qfp3AmEqYe35XjTHNFA5M43_t.jpg' alt='Profile Menu' />
            <div className='flex flex-col p-2 m-2'>
                <h1 className='font-semibold'>{name}</h1>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Comment
