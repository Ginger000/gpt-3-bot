import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import { useState } from 'react/cjs/react.production.min'
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Home() {
  const [input, setInput] = useState("")
  const [result, setResult] = useState("")
  const [func, setFunc] = useState("")
  const [timeComplexity, setTimeComplexity] = useState()
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

  async function onSubmit(event) {
    event.preventDefault()
    const response = await fetch("/api/color", {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({input:input})
    })
    const data = await response.json()
    setResult(data.result)
    
    setInput("")
  }


  async function submitFunction(event) {
    event.preventDefault()
    const response = await fetch("/api/timeComplexity", {
      method: "POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({func:func})
    })
    const data = await response.json()
    setTimeComplexity(data.timeComplexity)
    
    setFunc("")
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
    <main style={{background:`linear-gradient(15deg, ${result.split(',')[0]} 0%, ${result.split(',')[1]} 100%)`}} className='h-screen'>
      <h3>type your mood</h3>
      <form onSubmit={onSubmit}>
        <input
         type="text" 
         name='input'
         placeholder='Enter anything'
         value={input}
         onChange={(e)=> setInput(e.target.value)}
        />
        {/* {console.log(timeComplexity)} */}
        <br />
        <button type="submit">Generate Output</button>
        <div ></div>
      </form>
      <h3>type the function</h3>
      <form onSubmit={submitFunction}>
        <textarea
         type="text" 
         name='func'
         rows="4" 
         cols="50"
         placeholder='Enter anything'
         value={func}
         onChange={(e)=> setFunc(e.target.value)}
        />
        {/* {console.log(timeComplexity)} */}
        <br />
        <button type="submit">Generate Time Complexity</button>
        <div>The time complexity of this function is {timeComplexity}</div>
      </form>

      <br />
      <br />
      <h3>Coversations</h3>
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
          name="myword" 
          cols="60" 
          rows="2"
          placeholder='say anything'
          value={myword}
          onChange={e=>setMyword(e.target.value)}
        ></textarea>
        <button type='submit'>send</button>
      </form>
    </main>
  )
}
