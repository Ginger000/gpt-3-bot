import Head from 'next/head';
import Chatbox from '../components/Chatbox';

export default function Home() {
    return (
        <div>
            <Head>
                <title>GPT-3 Chatbot </title>
                <link rel="icon" href="/chat.png" />
            </Head>

            <main
                style={{
                    background: `linear-gradient(45deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)`,
                }}
                className="h-screen flex items-center justify-center"
            >
                <Chatbox />
            </main>
        </div>
    );
}
