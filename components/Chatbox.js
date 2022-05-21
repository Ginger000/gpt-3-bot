import React from 'react'
import { useEffect, useContext, useRef } from "react";
import Bubble from './shared/Bubble';
import TypingAnimation from './shared/TypingAnimation';
import ChatContext from '../context/ChatContext';
import TalkItem from './TalkItem';

function Chatbox() {
  const {conversation, isLoading} = useContext(ChatContext)
  const chatEndRef = useRef(null)

  const scrollToBotton = ()=> {
    chatEndRef.current?.scrollIntoView({behavior: "smooth"})
  }

  useEffect(()=>{
    scrollToBotton()
  }, [conversation])

  return (
    <div  className=' h-[600px] md:h-96 w-screen md:w-[600px] md:bg-zinc-100/20 z-[-10]  text-white font-bold font-mono drop-shadow-2xl rounded overflow-y-scroll flex flex-col'>
       

        {
          conversation.sort((a,b)=>a.timestamp-b.timestamp).map(conver=>
            <TalkItem key={conver.id} conver = {conver}  />
          )
        }
        {
          isLoading ? <TypingAnimation/> : ""
        }
        {/* <TypingAnimation/> */}
        <div className='mb-10' ref={chatEndRef}></div>
      
    </div>
  )
}

export default Chatbox