import React from 'react'
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

function Chatbox() {
  const [myword, setMyword] = useState("")
  const [gptword, setGptword] = useState("")
  const [conversation, setConversation] = useState([{content:"Hey! How are you!", timestamp: 0, speaker:"gpt", id:uuidv4()}])

  useEffect(()=>{
      const newGptword = {
        speaker:"gpt",
        content:gptword,
        timestamp:Date.now()
      }
      addConversation(newGptword)
  }, [gptword])

  const addConversation = (newWord) => {
    newWord.id = uuidv4()
    setConversation([newWord,...conversation])
    console.log(conversation)
  }

  async function submitPrompt(event) {
    event.preventDefault()
    const response = await fetch("/api/friend", {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({myword:myword})
    })
    const data = await response.json()
    setGptword(data.gptword)
    // const newGptword = {
    //   content:data.gptword,
    //   timestamp:Date.now()
    // }
    // addConversation(newGptword)
    if(myword.length > 0){
      const newWord = {
        speaker:"me",
        content:myword,
        timestamp:Date.now()
      }
      addConversation(newWord)
    }
    setMyword("")
  }

  return (
    <div  className='max-h-96 w-3/4 xl:w-1/2 bg-zinc-100/30  text-white font-bold font-mono drop-shadow-2xl rounded overflow-y-scroll'>
      <h1 className='text-center text-2xl md:text-4xl font-bold'>Talk with your AI friend</h1> 
      <div className='chats'>
        {
          conversation.sort((a,b)=>a.timestamp-b.timestamp).map(c=>{
            return <p key={c.id}>{c.content}</p>
          })
        }
      </div>
      <form onSubmit={submitPrompt}>
      
      {console.log(gptword)}
        <textarea
          className='text-gray-800' 
          name="myword" 
          cols="60" 
          rows="2"
          placeholder='say anything'
          value={myword}
          onChange={e=>setMyword(e.target.value)}
        ></textarea>
        <button type='submit'>send</button>
      </form>
    </div>
  )
}

export default Chatbox