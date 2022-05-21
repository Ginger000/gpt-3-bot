import Head from 'next/head';
import Chatbox from '../components/Chatbox';
import UserInputBox from '../components/UserInputBox';
import OptionBox from '../components/OptionBox';
import { ChatProvider } from '../context/ChatContext';
import NavMobile from '../components/NavMobile';

export default function Home() {
    return (
        <ChatProvider>
            <div>
                <Head>
                    <title>GPT-3 Chatbot </title>
                    <link rel="icon" href="/chat.png" />
                </Head>

                <main className="h-screen w-screen flex flex-col md:items-center justify-end  md:justify-center">
                    <h1 className=" hidden md:block text-center text-2xl md:text-4xl font-bold text-white font-mono mb-10">
                        Talk with your AI friend
                    </h1>

                    
                    <div className="flex">
                        <div>
                            <Chatbox />
                            <UserInputBox />
                        </div>
                        <div className="hidden md:flex">
                            <OptionBox />
                        </div>
                    </div>
                    <NavMobile className="md:hidden" />
                </main>
            </div>
        </ChatProvider>
    );
}
