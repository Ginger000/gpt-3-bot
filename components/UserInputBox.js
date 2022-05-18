import React from 'react';
import { useState, useContext, useEffect } from 'react';
import ChatContext from '../context/ChatContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function UserInputBox() {
    const [myword, setMyword] = useState('');
    const [gptword, setGptword] = useState("")
    
    const { engine,addConversation, setIsLoading, isLoading } = useContext(ChatContext);

    useEffect(()=>{
      const newGptword = {
        speaker:"gpt",
        content:gptword,
        timestamp:Date.now()
      }
      console.log(isLoading)
      setTimeout(()=>{
        setIsLoading(false)
        addConversation(newGptword)
      }, 1500)
      //addConversation(newGptword)
  }, [gptword])

    const handleEnterKey = (e) => {
        if(e.keyCode === 13){
            submitPrompt(e)
        }
    }

    async function submitPrompt(event) {
        event.preventDefault();
        setIsLoading(true)
        const response = await fetch('/api/friend', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ myword: myword, engine:engine }),
        });
        const data = await response.json();
        setGptword(data.gptword);

        if (myword.length > 0) {
            const newWord = {
                speaker: 'me',
                content: myword,
                timestamp: Date.now(),
            };
            addConversation(newWord);
        }
        setMyword('');
    }

    return (
        <div>
            <form onSubmit={submitPrompt}>
                <textarea
                    className="text-gray-800"
                    name="myword"
                    cols="60"
                    rows="2"
                    placeholder="say anything"
                    value={myword}
                    onKeyUp={handleEnterKey}
                    onChange={(e) => setMyword(e.target.value)}
                ></textarea>
                <button type="submit">send</button>
            </form>
        </div>
    );
}

export default UserInputBox;
