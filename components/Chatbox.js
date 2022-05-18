import React from 'react'
import { useState, useEffect, useContext, useRef } from "react";
import Bubble from './shared/bubble';
import TypingAnimation from './shared/TypingAnimation';
import ChatContext from '../context/ChatContext';

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
    <div  className='h-96 bg-zinc-100/20  text-white font-bold font-mono drop-shadow-2xl rounded overflow-y-scroll flex flex-col'>
       

        {
          conversation.sort((a,b)=>a.timestamp-b.timestamp).map(c=>
            <div key={c.id} className= {c.speaker === "gpt" ? "self-start" : "self-end"}>
              <Bubble  >
                {c.content}
              </Bubble>
            </div>
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