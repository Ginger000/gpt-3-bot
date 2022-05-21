import { createContext, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';

const ChatContext = createContext()

export const ChatProvider = ({children}) => {
  const [conversation, setConversation] = useState([{content:"Hey! How are you!", timestamp: 0, speaker:"gpt", id:uuidv4(), engine:'text-curie-001'}])
  const [engine, setEngine] = useState('text-curie-001');
  const [isLoading, setIsLoading] = useState(false)

  const addConversation = (newWord) => {
    newWord.id = uuidv4()
    setConversation([newWord,...conversation])
    console.log(conversation)
  }

  return (
    <ChatContext.Provider
      value={{conversation,addConversation, engine, setEngine, isLoading, setIsLoading}}
    >
      {children}
    </ChatContext.Provider>
  )

}

export default ChatContext