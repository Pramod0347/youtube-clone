import React, { useEffect, useState } from 'react'
import ChatMsg from './ChatMsg'
import { addMessage } from '../utils/chatSlice';
import { useDispatch, useSelector } from 'react-redux';
import { generate, randomString } from '../utils/helper';


const LiveChat = () => {

    const [liveMessages, setLiveMessages] = useState([]);
    const dispatch = useDispatch();

    const chatMessages = useSelector((store) => store.chat.messages);
    


    useEffect(() => {
        const i = setInterval(() => {
            //API POLLING
            console.log("Polling API");
            dispatch(addMessage({
                name: generate(),
                message: randomString(15),
            }))
        }, 1000);

        return () => clearInterval(i);
    },[])
  return (
    <>
        <div className='m-2 p-2 border border-gray-300 rounded-lg w-full h-[600px] overflow-y-scroll flex flex-col-reverse'>
        {
        chatMessages.map((c, index) => (
            <ChatMsg
            key={index}
            name={c.name}
            message={c.message}
            />
        ))
        }

        </div>
        <form className='w-full p-2 ml-2 border border-gray-300 rounded-lg' onSubmit={(e) => {
            e.preventDefault();
            if (!liveMessages) return;
            dispatch(addMessage({
                name: "Pramod",
                message: liveMessages,
            }))
            setLiveMessages("");
        }}>
            <input className='w-96 px-2' value={liveMessages} onChange={(e) => {
                setLiveMessages(e.target.value);
            } } type='text'/>
            <button className='p-2 px-4 m-2 bg-red-500 text-white rounded-lg'>Send</button>
        </form>
    </>
  )
}

export default LiveChat
