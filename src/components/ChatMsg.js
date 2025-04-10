import React from 'react'

const ChatMsg = ({name, message}) => {
  return (
    <div className='flex items-center gap-2 p-2 m-2 bg-gray-100 rounded-lg'>
        <img className='h-8' src='https://img.favpng.com/0/24/24/user-clip-art-png-favpng-W8qfp3AmEqYe35XjTHNFA5M43_t.jpg' alt='Profile Menu' />
        <span className='font-bold'>{name}</span>
        <span className='ml-2'>{message}</span>
    </div>
  )
}

export default ChatMsg
