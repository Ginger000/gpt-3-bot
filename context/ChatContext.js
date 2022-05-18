import { createContext, useState, useEffect } from 'react'

const ChatContext = createContext()

export const ChatProvider = ({children}) => {
  const [conversation, setConversation] = useState([{content:"Hey! How are you!", timestamp: 0, speaker:"gpt", id:uuidv4()}])

  const addConversation = (newWord) => {
    newWord.id = uuidv4()
    setConversation([newWord,...conversation])
    console.log(conversation)
  }

  return (
    <ChatContext.Provider
      value={{conversation,addConversation}}
    >
      {children}
    </ChatContext.Provider>
  )

}

export default ChatContext