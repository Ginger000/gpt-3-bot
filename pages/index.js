import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import { useState } from 'react/cjs/react.production.min'
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("")
  const [result, setResult] = useState()
  const [func, setFunc] = useState("")
  const [timeComplexity, setTimeComplexity] = useState()

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
    setResult(data.result)
    
    setInput("")
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
        {console.log(result)}
        <br />
        <button type="submit">Generate Output</button>
        <div ></div>
      </form>
      <h3>type the function</h3>
      <form onSubmit={onSubmit}>
        <input
         type="text" 
         name='input'
         placeholder='Enter anything'
         value={input}
         onChange={(e)=> setInput(e.target.value)}
        />
        {console.log(result)}
        <br />
        <button type="submit">Generate Time Complexity</button>
        <div ></div>
      </form>

    </main>
  )
}
