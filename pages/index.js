import Head from 'next/head';
import Chatbox from '../components/Chatbox';
import UserInputBox from '../components/UserInputBox';
import OptionBox from '../components/OptionBox';
import { ChatProvider } from '../context/ChatContext';

export default function Home() {
    return (
        <ChatProvider>
        <div >
            <Head>
                <title>GPT-3 Chatbot </title>
                <link rel="icon" href="/chat.png" />
            </Head>

            <main
                
                className="h-screen flex flex-col items-center justify-center"
            >
                <h1 className='text-center text-2xl md:text-4xl font-bold text-white font-mono mb-10' >Talk with your AI friend</h1>
                <div className='flex'>
                <div>
                <Chatbox />
                <UserInputBox />
                </div>
                <OptionBox />
                </div>
                
                
            </main>
        </div>
        </ChatProvider>
    );
}
