import React from 'react';
import { useState, useContext, useEffect } from 'react';
import ChatContext from '../context/ChatContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

function UserInputBox() {
    const [myword, setMyword] = useState('');
    const [gptword, setGptword] = useState('');

    const { engine, addConversation, setIsLoading, isLoading } =
        useContext(ChatContext);

    useEffect(() => {
        const newGptword = {
            speaker: 'gpt',
            content: gptword,
            timestamp: Date.now(),
            engine:engine
        };
        console.log(isLoading);
        setTimeout(() => {
            setIsLoading(false);
            addConversation(newGptword);
        }, 1500);
        //addConversation(newGptword)
    }, [gptword]);

    const handleEnterKey = (e) => {
        if (e.keyCode === 13) {
            submitPrompt(e);
        }
    };

    async function submitPrompt(event) {
        event.preventDefault();
        setIsLoading(true);
        const response = await fetch('/api/friend', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ myword: myword, engine: engine }),
        });
        const data = await response.json();
        setGptword(data.gptword);

        if (myword.length > 0) {
            const newWord = {
                speaker: 'me',
                content: myword,
                timestamp: Date.now(),
                engine:""
            };
            addConversation(newWord);
        }
        setMyword('');
    }

    return (
        <div>
            <form onSubmit={submitPrompt} className="flex justify-between border-2 w-full">
                <textarea
                    className="text-gray-800 opacity-60 w-4/5 md:w-[400px]"
                    name="myword"
                    
                    rows="2"
                    placeholder="Type Anything"
                    value={myword}
                    onKeyUp={handleEnterKey}
                    onChange={(e) => setMyword(e.target.value)}
                ></textarea>
                <button className='w-10 text-white mx-2 md:mx-10' type="submit">
                    
                    <FontAwesomeIcon icon={faPaperPlane}></FontAwesomeIcon>
                </button>
            </form>
        </div>
    );
}

export default UserInputBox;
